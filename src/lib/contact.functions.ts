import { createServerFn } from "@tanstack/react-start";
import { sendMail, type MailAttachment } from "./smtp.server";

const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024; // 10 MB

const FIELDS = [
  ["fullName", "Full Name"],
  ["companyName", "Company / Project"],
  ["phoneNumber", "Phone"],
  ["emailAddress", "Email"],
  ["projectLocation", "Project Location"],
  ["serviceType", "Service"],
  ["projectSize", "Project Size / Scope"],
  ["timeline", "Preferred Timeline"],
  ["budgetRange", "Budget Range"],
  ["projectDescription", "Project Description"],
] as const;

type FieldKey = (typeof FIELDS)[number][0];

const REQUIRED: FieldKey[] = [
  "fullName",
  "phoneNumber",
  "emailAddress",
  "projectLocation",
  "projectDescription",
];

function escapeHtml(s: string) {
  return s.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );
}

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    if (!(data instanceof FormData)) throw new Error("Invalid form submission");
    return data;
  })
  .handler(async ({ data }) => {
    const user = process.env["GMAIL_USER"];
    const pass = process.env["GMAIL_APP_PASSWORD"];
    const recipients = (process.env["CONTACT_RECIPIENTS"] ?? "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (!user || !pass) throw new Error("Email is not configured on the server");
    if (!recipients.length) recipients.push(user);

    // Honeypot: bots fill hidden fields
    if (String(data.get("website") ?? "").trim()) return { ok: true };

    const values = {} as Record<FieldKey, string>;
    for (const [key] of FIELDS)
      values[key] = String(data.get(key) ?? "")
        .trim()
        .slice(0, 5000);
    for (const key of REQUIRED) {
      if (!values[key]) throw new Error(`Missing required field: ${key}`);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.emailAddress)) {
      throw new Error("Invalid email address");
    }

    const attachments: MailAttachment[] = [];
    const file = data.get("fileUpload");
    if (file instanceof File && file.size > 0) {
      if (file.size > MAX_ATTACHMENT_BYTES) throw new Error("Attachment must be under 10 MB");
      attachments.push({
        filename: file.name,
        contentType: file.type,
        content: new Uint8Array(await file.arrayBuffer()),
      });
    }

    const rows = FIELDS.filter(([k]) => values[k]);
    const text =
      "New consultation request from lemuriandesigners website\n\n" +
      rows.map(([k, label]) => `${label}: ${values[k]}`).join("\n") +
      attachments.map((a) => `\n\nAttachment: ${a.filename}`).join("");
    const html = `<h2 style="font-family:sans-serif">New Consultation Request</h2>
<table style="font-family:sans-serif;border-collapse:collapse">${rows
      .map(
        ([k, label]) =>
          `<tr><td style="padding:6px 12px;font-weight:bold;vertical-align:top">${label}</td><td style="padding:6px 12px;white-space:pre-wrap">${escapeHtml(values[k])}</td></tr>`,
      )
      .join("")}</table>`;

    await sendMail({
      host: "smtp.gmail.com",
      port: 465,
      user,
      pass,
      from: user,
      fromName: "Lemurian Designers Website",
      to: recipients,
      replyTo: values.emailAddress,
      subject: `New Consultation Request: ${values.fullName} – ${values.serviceType || "General"}`,
      text,
      html,
      attachments,
    });

    return { ok: true };
  });
