import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BRAND } from "./theme";

export const FlexibleBadge: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const enter = spring({
    frame: frame - 30,
    fps,
    config: { damping: 10, stiffness: 130 },
  });
  const exit = interpolate(
    frame,
    [durationInFrames - 14, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const wobble = Math.sin(frame / 9) * 3;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-start",
        alignItems: "flex-end",
        paddingTop: 300,
        paddingRight: 40,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          opacity: enter * exit,
          transform: `translateY(${(1 - enter) * 30}px) rotate(${wobble - 6}deg) scale(${enter})`,
          background:
            "linear-gradient(135deg, #34D399 0%, #059669 100%)",
          color: "white",
          borderRadius: 28,
          padding: "18px 28px",
          fontFamily: "Poppins, system-ui, sans-serif",
          fontWeight: 900,
          textAlign: "center",
          boxShadow: "0 18px 36px rgba(5, 150, 105, 0.35)",
          border: "4px solid #FFFFFF",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          lineHeight: 1,
        }}
      >
        <div style={{ fontSize: 72, letterSpacing: -2 }}>100 %</div>
        <div
          style={{
            fontSize: 30,
            textTransform: "uppercase",
            letterSpacing: 1.5,
            marginTop: 4,
          }}
        >
          FLEXIBLE
        </div>
      </div>
      <div
        style={{
          opacity: enter * exit,
          transform: `translateY(${(1 - enter) * 40}px)`,
          marginTop: 18,
          background: "#FFFFFF",
          border: `3px solid ${BRAND.orangeFrom}`,
          borderRadius: 20,
          padding: "14px 22px",
          fontFamily: "Poppins, system-ui, sans-serif",
          fontSize: 26,
          fontWeight: 700,
          color: BRAND.navy,
          boxShadow: "0 12px 28px rgba(26, 26, 46, 0.15)",
          maxWidth: 360,
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        📅 Vos jours<br />⏰ Vos horaires
      </div>
    </AbsoluteFill>
  );
};
