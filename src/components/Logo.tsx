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
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Crisp vector monogram */}
      <svg
        viewBox="36 36 150 170"
        width={size}
        height={typeof size === "number" ? (size * 170) / 150 : size}
        fill="currentColor"
        aria-hidden="true"
        className="shrink-0 transition-colors"
      >
        {/* L mark */}
        <path
          d="M0 0 C7.92 0 15.84 0 24 0 C24 36.3 24 72.6 24 110 C33.57 110 43.14 110 53 110 C53 116.6 53 123.2 53 130 C35.51 130 18.02 130 0 130 C0 87.1 0 44.2 0 0 Z"
          transform="translate(45,46)"
        />
        {/* D mark */}
        <path
          d="M0 0 C8.46 -0.08 16.91 -0.16 25.62 -0.25 C28.26 -0.29 30.9 -0.32 33.62 -0.36 C45.36 -0.45 55.98 -0.49 67 4 C68.27 4.48 68.27 4.48 69.56 4.97 C84.1 10.7 95.44 20.7 101.89 34.97 C109.9 54.19 109.35 75.54 101.9 94.84 C95.34 109.25 83.52 120.07 69 126 C67.76 126.52 67.76 126.52 66.49 127.05 C58.03 130.28 50.21 130.48 41.25 130.25 C39.86 130.23 38.47 130.21 37.08 130.2 C33.72 130.15 30.36 130.08 27 130 C27 122.74 27 115.48 27 108 C28.93 108.01 30.86 108.02 32.85 108.03 C52.68 108.45 52.68 108.45 70 100 C72.95 96.91 75.03 93.79 77 90 C77.48 89.09 77.96 88.17 78.45 87.23 C84.74 74.31 85.96 61.77 81.25 48.04 C75.79 34.79 66.83 28.83 54 23 C40.14 22.5 40.14 22.5 26 22 C26 49.06 26 76.12 26 104 C17.42 104 8.84 104 0 104 C0 69.68 0 35.36 0 0 Z"
          transform="translate(84,46)"
        />
        {/* Dot */}
        <circle cx="51.5" cy="199" r="6" />
        {/* Underline bar */}
        <rect x="62" y="196" width="91" height="6" rx="2" />
      </svg>

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
