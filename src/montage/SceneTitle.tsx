import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND } from "./theme";

type Props = {
  kicker?: string;
  title: string;
  subtitle?: string;
  position?: "top" | "bottom";
  accentColor?: string;
};

export const SceneTitle: React.FC<Props> = ({
  kicker,
  title,
  subtitle,
  position = "top",
  accentColor = BRAND.orangeFrom,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const enter = spring({ frame, fps, config: { damping: 14, stiffness: 140 } });
  const exitStart = durationInFrames - 12;
  const exit = interpolate(frame, [exitStart, durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const bounceY = interpolate(enter, [0, 1], [40, 0]);

  return (
    <AbsoluteFill
      style={{
        padding: 80,
        justifyContent: position === "top" ? "flex-start" : "flex-end",
        alignItems: "center",
        paddingTop: position === "top" ? 140 : 80,
        paddingBottom: position === "bottom" ? 220 : 80,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          opacity: enter * exit,
          transform: `translateY(${bounceY}px)`,
          background: `linear-gradient(135deg, ${accentColor}, ${BRAND.orangeTo})`,
          color: BRAND.white,
          borderRadius: 999,
          paddingInline: 28,
          paddingBlock: 12,
          fontSize: 32,
          fontFamily: "Poppins, system-ui, sans-serif",
          fontWeight: 700,
          letterSpacing: 0.5,
          textTransform: "uppercase",
          boxShadow: "0 12px 28px rgba(242,107,42,0.35)",
          marginBottom: 16,
          display: kicker ? "block" : "none",
        }}
      >
        {kicker}
      </div>

      <div
        style={{
          opacity: enter * exit,
          transform: `translateY(${bounceY * 0.6}px)`,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(8px)",
          borderRadius: 32,
          paddingInline: 40,
          paddingBlock: 24,
          maxWidth: 920,
          textAlign: "center",
          boxShadow: "0 16px 40px rgba(26, 26, 46, 0.18)",
          border: `3px solid ${accentColor}`,
        }}
      >
        <div
          style={{
            fontSize: 68,
            fontFamily: "Poppins, system-ui, sans-serif",
            fontWeight: 800,
            lineHeight: 1.05,
            color: BRAND.navy,
          }}
        >
          {title}
        </div>
        {subtitle ? (
          <div
            style={{
              marginTop: 14,
              fontSize: 34,
              fontFamily: "Poppins, system-ui, sans-serif",
              fontWeight: 500,
              color: BRAND.gray,
              lineHeight: 1.3,
            }}
          >
            {subtitle}
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
