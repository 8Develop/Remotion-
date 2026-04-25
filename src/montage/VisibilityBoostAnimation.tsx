import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BRAND } from "./theme";

export const VISIBILITY_BOOST_DURATION = 330;

type Stat = {
  icon: string;
  title: string;
  value: string;
  example: string;
  accent: string;
  appearAt: number;
};

const STATS: Stat[] = [
  {
    icon: "💬",
    title: "Engagement",
    value: "+20 à 50 %",
    example: "1 000 abonnés → +200 à 500 interactions",
    accent: "#1877F2",
    appearAt: 35,
  },
  {
    icon: "📣",
    title: "Portée organique",
    value: "+30 à 100 %",
    example: "300 → 390 à 600 personnes touchées",
    accent: "#F26B2A",
    appearAt: 70,
  },
  {
    icon: "👥",
    title: "Nouveaux abonnés",
    value: "+5 à 15 %",
    example: "1 000 abonnés → +50 à 150 nouveaux",
    accent: "#2EAB6C",
    appearAt: 105,
  },
  {
    icon: "🛒",
    title: "Visites en boutique",
    value: "+10 à 30 %",
    example: "100 visites/sem. → 110 à 130",
    accent: "#9333EA",
    appearAt: 140,
  },
];

const StatRow: React.FC<{ stat: Stat }> = ({ stat }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame: frame - stat.appearAt,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const valueIn = spring({
    frame: frame - (stat.appearAt + 6),
    fps,
    config: { damping: 9, stiffness: 200 },
  });

  return (
    <div
      style={{
        opacity: enter,
        transform: `translateX(${(1 - enter) * 60}px)`,
        width: 940,
        background: "#FFFFFF",
        borderRadius: 32,
        padding: "22px 28px",
        display: "flex",
        alignItems: "center",
        gap: 24,
        border: `4px solid ${stat.accent}`,
        boxShadow: `0 18px 40px ${stat.accent}33`,
        fontFamily: "Poppins, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          width: 110,
          height: 110,
          borderRadius: 28,
          background: `linear-gradient(135deg, ${stat.accent}, ${stat.accent}CC)`,
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 64,
          flexShrink: 0,
          boxShadow: `0 12px 28px ${stat.accent}55`,
        }}
      >
        {stat.icon}
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: 36,
            fontWeight: 800,
            color: BRAND.navy,
            lineHeight: 1.05,
          }}
        >
          {stat.title}
        </div>
        <div
          style={{
            fontSize: 22,
            color: BRAND.gray,
            fontWeight: 600,
            marginTop: 6,
            lineHeight: 1.25,
          }}
        >
          {stat.example}
        </div>
      </div>
      <div
        style={{
          transform: `scale(${valueIn})`,
          background: stat.accent,
          color: "white",
          borderRadius: 22,
          padding: "14px 22px",
          fontSize: 38,
          fontWeight: 900,
          letterSpacing: -0.5,
          flexShrink: 0,
          boxShadow: `0 14px 28px ${stat.accent}55`,
        }}
      >
        {stat.value}
      </div>
    </div>
  );
};

export const VisibilityBoostAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerIn = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const titleIn = spring({
    frame: frame - 8,
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  const conclusionStart = 220;
  const conclusionIn = spring({
    frame: frame - conclusionStart,
    fps,
    config: { damping: 13, stiffness: 130 },
  });
  const arrowPulse = 1 + Math.sin(Math.max(0, frame - conclusionStart) / 7) * 0.06;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${BRAND.cream} 0%, #F3DFCF 100%)`,
        fontFamily: "Poppins, system-ui, sans-serif",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 110,
        gap: 22,
      }}
    >
      <div
        style={{
          opacity: headerIn,
          transform: `translateY(${(1 - headerIn) * 24}px)`,
          background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeTo})`,
          color: "white",
          borderRadius: 999,
          padding: "14px 32px",
          fontSize: 32,
          fontWeight: 800,
          letterSpacing: 0.6,
          textTransform: "uppercase",
          boxShadow: "0 14px 32px rgba(242,107,42,0.4)",
        }}
      >
        Étape 9
      </div>

      <div
        style={{
          opacity: titleIn,
          transform: `translateY(${(1 - titleIn) * 30}px)`,
          fontSize: 70,
          fontWeight: 900,
          color: BRAND.navy,
          letterSpacing: -2,
          textAlign: "center",
          lineHeight: 1.05,
          maxWidth: 980,
        }}
      >
        Boostez votre visibilité
        <br />
        <span style={{ color: BRAND.orangeDeep }}>sur Facebook</span>
      </div>

      <div
        style={{
          opacity: titleIn,
          marginTop: -6,
          fontSize: 28,
          fontWeight: 600,
          color: BRAND.navySoft,
          textAlign: "center",
          maxWidth: 920,
          lineHeight: 1.3,
        }}
      >
        Publier vos invendus &amp; bons plans en un clic = plus d'engagement,
        de portée et de clients.
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
          marginTop: 14,
        }}
      >
        {STATS.map((stat) => (
          <StatRow key={stat.title} stat={stat} />
        ))}
      </div>

      <div
        style={{
          opacity: conclusionIn,
          transform: `translateY(${(1 - conclusionIn) * 30}px) scale(${arrowPulse})`,
          marginTop: 18,
          background: `linear-gradient(135deg, ${BRAND.mintText}, #1F8F58)`,
          color: "white",
          borderRadius: 28,
          padding: "22px 36px",
          display: "flex",
          alignItems: "center",
          gap: 18,
          boxShadow: "0 18px 40px rgba(46,171,108,0.45)",
          maxWidth: 940,
        }}
      >
        <span style={{ fontSize: 56 }}>📈</span>
        <div>
          <div
            style={{
              fontSize: 38,
              fontWeight: 900,
              lineHeight: 1.05,
            }}
          >
            Plus de visibilité, plus de ventes
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              opacity: 0.92,
              marginTop: 4,
            }}
          >
            Même un boost modeste impacte fortement votre notoriété.
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
