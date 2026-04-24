import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BRAND } from "./theme";

export const PHOTO_PICKER_DURATION = 90;

const PhotoChoice: React.FC<{
  icon: string;
  label: string;
  delay: number;
  primary?: boolean;
  highlight?: boolean;
}> = ({ icon, label, delay, primary = false, highlight = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({
    frame: frame - delay,
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  const pulse = highlight ? 1 + Math.sin(frame / 6) * 0.035 : 1;

  return (
    <div
      style={{
        opacity: enter,
        transform: `translateY(${(1 - enter) * 40}px) scale(${pulse})`,
        background: primary
          ? `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeDeep})`
          : "#FFFFFF",
        color: primary ? "#FFFFFF" : BRAND.navy,
        borderRadius: 36,
        padding: "48px 40px",
        width: 820,
        display: "flex",
        alignItems: "center",
        gap: 36,
        boxShadow: primary
          ? "0 20px 48px rgba(242, 107, 42, 0.38)"
          : "0 16px 36px rgba(26, 26, 46, 0.12)",
        border: primary ? "none" : "3px solid #FFE1CF",
      }}
    >
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: 30,
          background: primary ? "rgba(255,255,255,0.22)" : BRAND.cream,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 70,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: 44,
            fontWeight: 800,
            lineHeight: 1.05,
            fontFamily: "Poppins, system-ui, sans-serif",
          }}
        >
          {label}
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: 26,
            fontWeight: 500,
            opacity: primary ? 0.85 : 0.6,
            fontFamily: "Poppins, system-ui, sans-serif",
          }}
        >
          {primary ? "Depuis l'appareil photo" : "Depuis votre pellicule"}
        </div>
      </div>
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          background: primary ? "rgba(255,255,255,0.22)" : BRAND.cream,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 36,
          flexShrink: 0,
        }}
      >
        →
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 14, stiffness: 140 } });

  return (
    <div
      style={{
        opacity: enter,
        transform: `translateY(${(1 - enter) * 20}px)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 14,
        marginBottom: 60,
      }}
    >
      <div
        style={{
          background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeTo})`,
          color: "white",
          borderRadius: 999,
          padding: "12px 28px",
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: 0.5,
          textTransform: "uppercase",
          fontFamily: "Poppins, system-ui, sans-serif",
          boxShadow: "0 12px 28px rgba(242,107,42,0.35)",
        }}
      >
        Étape 4
      </div>
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          borderRadius: 28,
          padding: "20px 34px",
          fontSize: 54,
          fontWeight: 800,
          color: BRAND.navy,
          fontFamily: "Poppins, system-ui, sans-serif",
          boxShadow: "0 14px 36px rgba(26,26,46,0.14)",
          border: `3px solid ${BRAND.orangeFrom}`,
          textAlign: "center",
          lineHeight: 1.1,
        }}
      >
        Ajoutez une photo
      </div>
      <div
        style={{
          marginTop: 6,
          fontSize: 30,
          color: BRAND.gray,
          fontFamily: "Poppins, system-ui, sans-serif",
          fontWeight: 500,
        }}
      >
        Depuis votre appareil ou votre galerie
      </div>
    </div>
  );
};

const OrDivider: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const enter = interpolate(frame, [delay, delay + 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        opacity: enter,
        display: "flex",
        alignItems: "center",
        gap: 28,
        width: 820,
        margin: "24px 0",
      }}
    >
      <div style={{ flex: 1, height: 2, background: "#E8D7C6" }} />
      <div
        style={{
          fontFamily: "Poppins, system-ui, sans-serif",
          fontSize: 30,
          fontWeight: 700,
          color: BRAND.gray,
          letterSpacing: 2,
        }}
      >
        OU
      </div>
      <div style={{ flex: 1, height: 2, background: "#E8D7C6" }} />
    </div>
  );
};

export const PhotoPickerStep: React.FC = () => {
  const frame = useCurrentFrame();
  const bgHue = interpolate(frame, [0, PHOTO_PICKER_DURATION], [22, 26]);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, hsl(${bgHue}, 65%, 95%) 0%, ${BRAND.cream} 100%)`,
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      <Header />
      <PhotoChoice
        icon="📷"
        label="Prendre une photo"
        delay={12}
        primary
        highlight
      />
      <OrDivider delay={20} />
      <PhotoChoice icon="🖼️" label="Choisir dans la galerie" delay={24} />
    </AbsoluteFill>
  );
};
