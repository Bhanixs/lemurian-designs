// Minimal SMTP client (implicit TLS, AUTH PLAIN) built on node:tls.
// Works in Node (local dev) and on Cloudflare Workers with nodejs_compat,
// where nodemailer is not reliably supported.
import tls from "node:tls";

export interface MailAttachment {
  filename: string;
  contentType: string;
  content: Uint8Array;
}

export interface MailOptions {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
  fromName?: string | undefined;
  to: string[];
  replyTo?: string | undefined;
  subject: string;
  text: string;
  html?: string | undefined;
  attachments?: MailAttachment[] | undefined;
}

function b64(input: string | Uint8Array): string {
  const bytes = typeof input === "string" ? new TextEncoder().encode(input) : input;
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) {
    bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  }
  return btoa(bin);
}

function wrap76(s: string): string {
  return s.replace(/.{1,76}/g, "$&\r\n");
}

function encodeHeader(value: string): string {
  // RFC 2047 encode only when non-ASCII is present
  return /^[\x20-\x7e]*$/.test(value) ? value : `=?UTF-8?B?${b64(value)}?=`;
}

function stripCrlf(value: string): string {
  return value.replace(/[\r\n]+/g, " ");
}

function buildMessage(o: MailOptions): string {
  const boundary = `b_${crypto.randomUUID().replace(/-/g, "")}`;
  const alt = `a_${crypto.randomUUID().replace(/-/g, "")}`;
  const domain = o.from.split("@")[1] ?? "localhost";
  const fromHeader = o.fromName ? `${encodeHeader(o.fromName)} <${o.from}>` : o.from;

  const headers = [
    `From: ${fromHeader}`,
    `To: ${o.to.join(", ")}`,
    o.replyTo ? `Reply-To: ${stripCrlf(o.replyTo)}` : "",
    `Subject: ${encodeHeader(stripCrlf(o.subject))}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@${domain}>`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/mixed; boundary="${boundary}"`,
  ].filter(Boolean);

  const parts: string[] = [];
  parts.push(
    `--${boundary}`,
    `Content-Type: multipart/alternative; boundary="${alt}"`,
    "",
    `--${alt}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "",
    wrap76(b64(o.text)),
  );
  if (o.html) {
    parts.push(
      `--${alt}`,
      "Content-Type: text/html; charset=UTF-8",
      "Content-Transfer-Encoding: base64",
      "",
      wrap76(b64(o.html)),
    );
  }
  parts.push(`--${alt}--`, "");

  for (const a of o.attachments ?? []) {
    const name = encodeHeader(stripCrlf(a.filename).replace(/"/g, ""));
    parts.push(
      `--${boundary}`,
      `Content-Type: ${a.contentType || "application/octet-stream"}; name="${name}"`,
      "Content-Transfer-Encoding: base64",
      `Content-Disposition: attachment; filename="${name}"`,
      "",
      wrap76(b64(a.content)),
    );
  }
  parts.push(`--${boundary}--`, "");

  return headers.join("\r\n") + "\r\n\r\n" + parts.join("\r\n");
}

export function sendMail(o: MailOptions): Promise<void> {
  return new Promise((resolve, reject) => {
    const socket = tls.connect({ host: o.host, port: o.port, servername: o.host });
    socket.setEncoding("utf8");

    let buffer = "";
    let done = false;
    const waiters: Array<(line: { code: number; text: string }) => void> = [];

    const fail = (err: Error) => {
      if (done) return;
      done = true;
      socket.destroy();
      reject(err);
    };
    const timer = setTimeout(() => fail(new Error("SMTP timeout")), 30_000);

    socket.on("error", fail);
    socket.on("data", (chunk: string) => {
      buffer += chunk;
      let idx: number;
      let block = "";
      while ((idx = buffer.indexOf("\r\n")) !== -1) {
        const line = buffer.slice(0, idx);
        buffer = buffer.slice(idx + 2);
        block += line + "\n";
        // Final line of a (possibly multi-line) reply is "NNN text"
        if (/^\d{3} /.test(line) || /^\d{3}$/.test(line)) {
          const waiter = waiters.shift();
          waiter?.({ code: Number(line.slice(0, 3)), text: block.trim() });
          block = "";
        }
      }
    });

    const read = () => new Promise<{ code: number; text: string }>((r) => waiters.push(r));
    const cmd = async (line: string | null, expect: number[]) => {
      if (line !== null) socket.write(line + "\r\n");
      const res = await read();
      if (!expect.includes(res.code)) {
        const safe = line?.startsWith("AUTH") ? "AUTH ***" : line;
        throw new Error(`SMTP ${safe ?? "greeting"} failed: ${res.text}`);
      }
      return res;
    };

    (async () => {
      await cmd(null, [220]);
      await cmd(`EHLO ${o.host}`, [250]);
      await cmd(`AUTH PLAIN ${b64(`\0${o.user}\0${o.pass}`)}`, [235]);
      await cmd(`MAIL FROM:<${o.from}>`, [250]);
      for (const rcpt of o.to) await cmd(`RCPT TO:<${rcpt}>`, [250, 251]);
      await cmd("DATA", [354]);
      // Dot-stuffing: lines starting with "." must be doubled
      const body = buildMessage(o).replace(/\r\n\./g, "\r\n..");
      await cmd(body + "\r\n.", [250]);
      socket.write("QUIT\r\n");
      done = true;
      clearTimeout(timer);
      socket.end();
      resolve();
    })().catch((e: Error) => {
      clearTimeout(timer);
      fail(e);
    });
  });
}
