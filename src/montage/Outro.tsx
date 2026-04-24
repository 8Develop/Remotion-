import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND } from "./theme";
import { WissyLogo } from "./WissyLogo";

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoIn = spring({ frame, fps, config: { damping: 11, stiffness: 110 } });
  const ctaIn = spring({
    frame: frame - 15,
    fps,
    config: { damping: 13, stiffness: 130 },
  });
  const urlIn = spring({
    frame: frame - 28,
    fps,
    config: { damping: 14, stiffness: 140 },
  });

  const pulse = 1 + Math.sin(frame / 6) * 0.03;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, ${BRAND.orangeFrom} 0%, ${BRAND.orangeDeep} 100%)`,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins, system-ui, sans-serif",
        color: BRAND.white,
        overflow: "hidden",
      }}
    >
      {[...Array(6)].map((_, i) => {
        const size = 180 + i * 80;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: size,
              height: size,
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.12)",
              transform: `scale(${1 + Math.sin((frame - i * 8) / 20) * 0.05})`,
            }}
          />
        );
      })}

      <div
        style={{
          transform: `scale(${logoIn * pulse})`,
          opacity: logoIn,
          background: BRAND.white,
          borderRadius: 48,
          padding: "24px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 40,
          boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
        }}
      >
        <WissyLogo height={140} />
      </div>

      <div
        style={{
          opacity: ctaIn,
          transform: `translateY(${(1 - ctaIn) * 30}px)`,
          fontSize: 120,
          fontWeight: 900,
          letterSpacing: -2,
          textAlign: "center",
          lineHeight: 1,
        }}
      >
        Essayez
        <br />
        maintenant
      </div>

      <div
        style={{
          opacity: urlIn,
          transform: `translateY(${(1 - urlIn) * 30}px)`,
          marginTop: 50,
          fontSize: 52,
          fontWeight: 700,
          background: BRAND.white,
          color: BRAND.orangeDeep,
          paddingInline: 48,
          paddingBlock: 22,
          borderRadius: 999,
          boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
        }}
      >
        wissyshop.com
      </div>

      <div
        style={{
          opacity: urlIn * 0.9,
          marginTop: 30,
          fontSize: 32,
          fontWeight: 500,
          textAlign: "center",
          maxWidth: 900,
          lineHeight: 1.35,
        }}
      >
        Commerçants locaux de Liège — vendez en ligne, livrez en boutique
      </div>
    </AbsoluteFill>
  );
};
