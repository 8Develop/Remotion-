import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BRAND } from "./theme";
import { WissyLogo } from "./WissyLogo";
import { SceneTitle } from "./SceneTitle";

export const HERO_ANIMATION_DURATION = 90;

export const HeroAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoIn = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const pillIn = spring({
    frame: frame - 14,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const titleIn = spring({
    frame: frame - 22,
    fps,
    config: { damping: 14, stiffness: 130 },
  });
  const descIn = spring({
    frame: frame - 34,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const ctaIn = spring({
    frame: frame - 44,
    fps,
    config: { damping: 12, stiffness: 150 },
  });
  const ctaPulse = 1 + Math.sin(Math.max(0, frame - 44) / 6) * 0.025;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${BRAND.cream} 0%, #F3DFCF 100%)`,
        padding: 60,
        paddingTop: 110,
        fontFamily: "Poppins, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          opacity: logoIn,
          transform: `translateY(${(1 - logoIn) * 30}px)`,
          marginBottom: 38,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <WissyLogo height={220} />
      </div>

      <div
        style={{
          opacity: pillIn,
          transform: `scale(${0.85 + pillIn * 0.15})`,
          background: "#D4F0E0",
          color: BRAND.mintText,
          borderRadius: 999,
          padding: "16px 32px",
          fontSize: 34,
          fontWeight: 800,
          alignSelf: "flex-start",
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 28,
        }}
      >
        <span
          style={{
            width: 14,
            height: 14,
            borderRadius: 7,
            background: BRAND.mintText,
          }}
        />
        Disponible à Liège &amp; en Belgique
      </div>

      <div
        style={{
          opacity: titleIn,
          transform: `translateY(${(1 - titleIn) * 30}px)`,
          fontSize: 108,
          fontWeight: 900,
          lineHeight: 0.95,
          letterSpacing: -3,
          marginBottom: 36,
        }}
      >
        <div style={{ color: BRAND.navy }}>Click &amp; collect</div>
        <div
          style={{
            background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeDeep})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          commerce local
          <br />à Liège
        </div>
      </div>

      <div
        style={{
          opacity: descIn,
          transform: `translateY(${(1 - descIn) * 20}px)`,
          fontSize: 34,
          fontWeight: 500,
          color: BRAND.navySoft,
          lineHeight: 1.3,
          marginBottom: 48,
        }}
      >
        La marketplace qui connecte les{" "}
        <span style={{ fontWeight: 800, color: BRAND.navy }}>
          commerçants locaux
        </span>
        {" "}à leurs clients — sans file d'attente.
      </div>

      <div
        style={{
          opacity: ctaIn,
          transform: `translateY(${(1 - ctaIn) * 20}px) scale(${ctaPulse})`,
          background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeDeep})`,
          color: "white",
          borderRadius: 28,
          padding: "32px 48px",
          fontSize: 42,
          fontWeight: 800,
          textAlign: "center",
          boxShadow: "0 20px 44px rgba(242, 107, 42, 0.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        Découvrir les boutiques
        <span>→</span>
      </div>

      <SceneTitle
        kicker="Étape 1"
        title="Click & collect à Liège"
        subtitle="La marketplace locale, sans file d'attente"
        position="bottom"
      />
    </AbsoluteFill>
  );
};
