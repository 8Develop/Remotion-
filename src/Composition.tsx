import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

type CompositionProps = {
  titleText: string;
  subtitleText: string;
};

export const MyComposition: React.FC<CompositionProps> = ({
  titleText,
  subtitleText,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  const subtitleOpacity = interpolate(frame, [30, 60], [0, 1], {
    extrapolateRight: "clamp",
  });

  const backgroundHue = interpolate(frame, [0, durationInFrames], [220, 280]);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, hsl(${backgroundHue}, 70%, 25%), hsl(${backgroundHue + 40}, 70%, 45%))`,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          color: "white",
          fontSize: 120,
          fontWeight: 800,
          textAlign: "center",
          textShadow: "0 6px 24px rgba(0,0,0,0.4)",
        }}
      >
        {titleText}
      </div>
      <div
        style={{
          opacity: subtitleOpacity,
          color: "rgba(255,255,255,0.9)",
          fontSize: 48,
          marginTop: 24,
          textAlign: "center",
        }}
      >
        {subtitleText}
      </div>
    </AbsoluteFill>
  );
};
