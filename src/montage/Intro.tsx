import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND } from "./theme";
import { WissyLogo } from "./WissyLogo";

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const logoIn = spring({ frame, fps, config: { damping: 11, stiffness: 110 } });
  const titleIn = spring({
    frame: frame - 10,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const subIn = spring({
    frame: frame - 20,
    fps,
    config: { damping: 14, stiffness: 140 },
  });

  const exitStart = durationInFrames - 14;
  const exitProgress = interpolate(
    frame,
    [exitStart, durationInFrames],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const bgHue = interpolate(frame, [0, durationInFrames], [22, 28]);

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 50% 30%, hsl(${bgHue}, 100%, 97%) 0%, ${BRAND.cream} 60%, #F3E3DA 100%)`,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins, system-ui, sans-serif",
        transform: `scale(${1 + exitProgress * 0.08})`,
        opacity: 1 - exitProgress,
      }}
    >
      {[...Array(8)].map((_, i) => {
        const a = (i / 8) * Math.PI * 2;
        const r = 520;
        const t = (frame - i * 3) / fps;
        const offset = Math.sin(t * 1.5) * 40;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeTo})`,
              left: 540 + Math.cos(a) * (r + offset) - 9,
              top: 960 + Math.sin(a) * (r + offset) - 9,
              opacity: 0.6,
            }}
          />
        );
      })}

      <div
        style={{
          transform: `scale(${logoIn}) rotate(${(1 - logoIn) * 20}deg)`,
          opacity: logoIn,
          marginBottom: 30,
        }}
      >
        <WissyLogo height={180} />
      </div>

      <div
        style={{
          transform: `translateY(${(1 - titleIn) * 40}px)`,
          opacity: titleIn,
          fontSize: 140,
          fontWeight: 900,
          color: BRAND.navy,
          letterSpacing: -3,
          lineHeight: 1,
          marginTop: 20,
        }}
      >
        shop
      </div>

      <div
        style={{
          transform: `translateY(${(1 - subIn) * 30}px)`,
          opacity: subIn,
          marginTop: 30,
          fontSize: 46,
          fontWeight: 600,
          color: BRAND.navySoft,
          textAlign: "center",
          maxWidth: 900,
          lineHeight: 1.2,
        }}
      >
        Click & collect à Liège
      </div>

      <div
        style={{
          transform: `translateY(${(1 - subIn) * 30}px)`,
          opacity: subIn * 0.9,
          marginTop: 18,
          fontSize: 32,
          fontWeight: 500,
          background: BRAND.mint,
          color: BRAND.mintText,
          paddingInline: 28,
          paddingBlock: 12,
          borderRadius: 999,
        }}
      >
        ● Une démo en 60 secondes
      </div>
    </AbsoluteFill>
  );
};
