import { staticFile } from "remotion";

type Props = {
  size: number;
  variant?: "icon" | "horizontal";
  background?: "orange" | "light";
};

export const WissyLogo: React.FC<Props> = ({
  size,
  variant = "icon",
  background = "orange",
}) => {
  const imgHeight = size;
  const imgWidth = variant === "horizontal" ? size * 2.6 : size;

  return (
    <img
      src={staticFile("wissy-logo.png")}
      width={imgWidth}
      height={imgHeight}
      style={{
        width: imgWidth,
        height: imgHeight,
        objectFit: "contain",
        background:
          background === "light" ? "transparent" : "transparent",
        filter:
          background === "orange"
            ? "drop-shadow(0 16px 32px rgba(0,0,0,0.25))"
            : "drop-shadow(0 12px 26px rgba(242,107,42,0.35))",
      }}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  );
};

export const WissyBagSvg: React.FC<{ size: number }> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: "drop-shadow(0 16px 30px rgba(242, 107, 42, 0.35))",
      }}
    >
      <defs>
        <linearGradient id="bagGrad" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FFB454" />
          <stop offset="45%" stopColor="#F58A2B" />
          <stop offset="100%" stopColor="#E25B13" />
        </linearGradient>
        <linearGradient id="handleGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFA23B" />
          <stop offset="100%" stopColor="#E55A0E" />
        </linearGradient>
      </defs>

      <path
        d="M60 58 Q60 30 85 30 Q110 30 110 58"
        stroke="url(#handleGrad)"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="60" cy="58" r="7" fill="#FFFFFF" stroke="#E55A0E" strokeWidth="3" />
      <circle cx="110" cy="58" r="7" fill="#FFFFFF" stroke="#E55A0E" strokeWidth="3" />

      <path
        d="M35 60
           Q35 55 40 55
           L150 55
           Q155 55 155 60
           L148 172
           Q147 186 133 186
           L57 186
           Q43 186 42 172
           Z"
        fill="url(#bagGrad)"
      />

      <path
        d="M75 100
           Q95 130 115 100"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="75" cy="100" r="5" fill="#FFFFFF" />
      <circle cx="115" cy="100" r="5" fill="#FFFFFF" />

      <g transform="translate(140, 32)">
        <path
          d="M0 -12 L2 -2 L12 0 L2 2 L0 12 L-2 2 L-12 0 L-2 -2 Z"
          fill="#FFB454"
        />
      </g>
    </svg>
  );
};

export const WissyWordmark: React.FC<{ height: number; color?: string }> = ({
  height,
  color = "#F26B2A",
}) => {
  const width = height * 2.1;
  return (
    <div
      style={{
        height,
        width,
        color,
        fontSize: height * 0.95,
        fontWeight: 900,
        fontStyle: "italic",
        fontFamily: "Poppins, system-ui, sans-serif",
        letterSpacing: -2,
        display: "flex",
        alignItems: "center",
        textShadow: "0 6px 14px rgba(242, 107, 42, 0.35)",
        lineHeight: 1,
      }}
    >
      Wissy
    </div>
  );
};
