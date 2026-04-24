import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { PhoneSource } from "./PhoneSource";
import { SceneTitle } from "./SceneTitle";
import { BRAND } from "./theme";

const CAKE_FOCUS_FRAMES = 60;
const PAN_FRAMES = 25;

type Props = {
  durationInFrames: number;
};

export const FormWithCakeReveal: React.FC<Props> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const panEnd = CAKE_FOCUS_FRAMES + PAN_FRAMES;
  const panProgress = interpolate(
    frame,
    [CAKE_FOCUS_FRAMES, panEnd],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const zoomStart = 1.22;
  const zoomEnd = 1.02;
  const panYStart = 350;
  const panYEnd = 0;

  const zoom = interpolate(panProgress, [0, 1], [zoomStart, zoomEnd]);
  const panY = interpolate(panProgress, [0, 1], [panYStart, panYEnd]);

  const bannerOpacity = interpolate(
    frame,
    [6, 18, CAKE_FOCUS_FRAMES - 6, CAKE_FOCUS_FRAMES + 6],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const bannerSpring = spring({
    frame: frame - 6,
    fps,
    config: { damping: 14, stiffness: 150 },
  });

  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.cream }}>
      <PhoneSource
        src="wissyshop-1.mp4"
        startFromSeconds={60}
        endAtSeconds={60 + durationInFrames / 30}
        cropTop={180}
        cropBottom={140}
        zoom={zoom}
        panY={panY}
        muted
      />

      <AbsoluteFill
        style={{
          opacity: bannerOpacity,
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: 200,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            transform: `translateY(${(1 - bannerSpring) * 40}px) scale(${0.92 + bannerSpring * 0.08})`,
            background: "#FFFFFF",
            color: BRAND.mintText,
            border: `3px solid ${BRAND.mintText}`,
            borderRadius: 999,
            padding: "16px 36px",
            fontSize: 46,
            fontWeight: 800,
            fontFamily: "Poppins, system-ui, sans-serif",
            boxShadow: "0 16px 36px rgba(26, 26, 46, 0.18)",
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span style={{ fontSize: 40 }}>✓</span>
          <span>Photo ajoutée</span>
        </div>
      </AbsoluteFill>

      <SceneTitle
        kicker="Étape 4"
        title="Remplissez les détails"
        subtitle="Nom, description, prix…"
        position="bottom"
      />
    </AbsoluteFill>
  );
};
