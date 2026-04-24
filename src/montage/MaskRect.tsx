import { interpolate, useCurrentFrame } from "remotion";

type Props = {
  x: number;
  y: number;
  width: number;
  height: number;
  label?: string;
  labelColor?: string;
  background?: string;
  borderRadius?: number;
  border?: string;
  fadeInFrames?: number;
  fontSize?: number;
  fontWeight?: number;
  boxShadow?: string;
};

export const MaskRect: React.FC<Props> = ({
  x,
  y,
  width,
  height,
  label,
  labelColor = "#1A1A2E",
  background = "#FFFFFF",
  borderRadius = 24,
  border = "3px solid #F26B2A",
  fadeInFrames = 6,
  fontSize,
  fontWeight = 600,
  boxShadow = "0 8px 24px rgba(242, 107, 42, 0.18)",
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, fadeInFrames], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        height,
        background,
        borderRadius,
        border,
        opacity,
        display: "flex",
        alignItems: "center",
        justifyContent: label?.startsWith("•") ? "flex-start" : "center",
        paddingInline: label?.startsWith("•") ? width * 0.06 : 0,
        color: labelColor,
        fontSize: fontSize ?? height * 0.42,
        fontWeight,
        fontFamily: "Poppins, system-ui, sans-serif",
        textAlign: "center",
        overflow: "hidden",
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        boxShadow,
      }}
    >
      {label}
    </div>
  );
};
