import { staticFile } from "remotion";

const WissyScript: React.FC<{ height: number }> = ({ height }) => {
  const fs = height * 1.05;
  return (
    <div
      style={{
        fontFamily:
          "'Pacifico', 'Caveat', 'Comic Sans MS', system-ui, sans-serif",
        fontSize: fs,
        fontWeight: 900,
        fontStyle: "italic",
        color: "#F58A2B",
        lineHeight: 0.95,
        letterSpacing: -fs * 0.015,
        textShadow:
          "0 4px 0 #E55A0E, 0 6px 0 #C84A0E, 0 10px 22px rgba(242,107,42,0.35)",
        WebkitTextStroke: "3px #E55A0E",
      }}
    >
      Wissy
    </div>
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
          <stop offset="100%" stopColor="#D84A0E" />
        </linearGradient>
        <linearGradient id="handleGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFA23B" />
          <stop offset="100%" stopColor="#E55A0E" />
        </linearGradient>
      </defs>

      <path
        d="M60 58 Q60 28 90 28 Q120 28 120 58"
        stroke="url(#handleGrad)"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="60" cy="58" r="8" fill="#FFFFFF" stroke="#E55A0E" strokeWidth="3" />
      <circle cx="120" cy="58" r="8" fill="#FFFFFF" stroke="#E55A0E" strokeWidth="3" />

      <path
        d="M28 58
           Q28 50 38 50
           L152 50
           Q162 50 162 58
           L156 170
           Q154 188 138 188
           L52 188
           Q36 188 34 170
           Z"
        fill="url(#bagGrad)"
        stroke="#D84A0E"
        strokeWidth="3"
      />

      <path
        d="M70 105
           Q95 140 120 105"
        stroke="#FFFFFF"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="70" cy="108" r="6" fill="#FFFFFF" />
      <circle cx="120" cy="108" r="6" fill="#FFFFFF" />

      <g transform="translate(155, 30)">
        <path
          d="M0 -16 L3 -3 L16 0 L3 3 L0 16 L-3 3 L-16 0 L-3 -3 Z"
          fill="#FFC04A"
          stroke="#E55A0E"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
};

type Props = {
  height: number;
  withWordmark?: boolean;
};

export const WissyLogo: React.FC<Props> = ({ height }) => {
  const width = height * 1.55;
  return (
    <img
      src={staticFile("wissy-logo-DKicm775.png")}
      style={{
        width,
        height,
        objectFit: "contain",
        filter: "drop-shadow(0 18px 30px rgba(242, 107, 42, 0.35))",
      }}
    />
  );
};

export const WissyLogoImage: React.FC<{ width: number; height: number }> = ({
  width,
  height,
}) => {
  return (
    <img
      src={staticFile("wissy-logo-DKicm775.png")}
      width={width}
      height={height}
      style={{
        width,
        height,
        objectFit: "contain",
        filter: "drop-shadow(0 16px 32px rgba(242,107,42,0.35))",
      }}
    />
  );
};
