import logoImg from "@/assets/logo.png";

interface LogoProps {
  className?: string;
  size?: number | string;
  theme?: "light" | "dark" | "auto";
  showWordmark?: boolean;
}

export function Logo({
  className = "",
  size = 36,
  theme = "auto",
  showWordmark = true,
}: LogoProps) {
  const pixelSize = typeof size === "number" ? `${size}px` : size;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <img
        src={logoImg}
        alt="Lemurian Designers Logo"
        style={{
          width: pixelSize,
          height: pixelSize,
          objectFit: "contain",
        }}
        className="shrink-0 block"
        loading="eager"
        decoding="async"
      />

      {showWordmark && (
        <span className="font-sans text-[0.62rem] font-bold tracking-[0.14em] uppercase leading-tight">
          Lemurian
          <br />
          Designers
        </span>
      )}
    </div>
  );
}
