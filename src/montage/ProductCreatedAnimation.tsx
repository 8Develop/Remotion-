import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BRAND } from "./theme";
import { SceneTitle } from "./SceneTitle";

export const PRODUCT_CREATED_DURATION = 150;

type ShareOption = {
  icon: string;
  name: string;
  subtitle?: string;
  color: string;
};

const shareOptions: ShareOption[] = [
  { icon: "💬", name: "WhatsApp", color: "#25D366" },
  {
    icon: "f",
    name: "Facebook",
    subtitle: "Collez le texte dans votre publication",
    color: "#1877F2",
  },
  {
    icon: "📷",
    name: "Story Instagram",
    subtitle: "Visuel + texte prêts à poster",
    color: "#DC2743",
  },
  { icon: "🔗", name: "Copier le lien", color: "#6B6B7A" },
];

const ShareRow: React.FC<{ option: ShareOption; delay: number }> = ({
  option,
  delay,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({
    frame: frame - delay,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  return (
    <div
      style={{
        opacity: enter,
        transform: `translateX(${(1 - enter) * 40}px)`,
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: "16px 12px",
        borderBottom: "1px solid #F0E4D9",
      }}
    >
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: 18,
          background: option.name === "Facebook" ? option.color : "transparent",
          color:
            option.name === "Facebook"
              ? "#FFFFFF"
              : option.color,
          fontSize: option.name === "Facebook" ? 44 : 40,
          fontWeight: 800,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {option.icon}
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: 30,
            fontWeight: 800,
            color: option.color,
            fontFamily: "Poppins, system-ui, sans-serif",
          }}
        >
          {option.name}
        </div>
        {option.subtitle ? (
          <div
            style={{
              fontSize: 22,
              color: BRAND.gray,
              marginTop: 2,
              fontFamily: "Poppins, system-ui, sans-serif",
            }}
          >
            {option.subtitle}
          </div>
        ) : null}
      </div>
      {option.name === "Facebook" ? (
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: BRAND.cream,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
          }}
        >
          📋
        </div>
      ) : null}
    </div>
  );
};

export const ProductCreatedAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const checkIn = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 180 },
  });
  const cardIn = spring({
    frame: frame - 16,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const sheetIn = spring({
    frame: frame - 32,
    fps,
    config: { damping: 14, stiffness: 130 },
  });

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
          opacity: checkIn,
          transform: `scale(${checkIn})`,
          alignSelf: "center",
          width: 180,
          height: 180,
          borderRadius: 90,
          background: "linear-gradient(135deg, #34D399 0%, #059669 100%)",
          color: "white",
          fontSize: 110,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 20px 40px rgba(5, 150, 105, 0.4)",
          marginBottom: 28,
        }}
      >
        ✓
      </div>

      <div
        style={{
          opacity: checkIn,
          fontSize: 60,
          fontWeight: 900,
          textAlign: "center",
          color: BRAND.navy,
          letterSpacing: -2,
          marginBottom: 10,
        }}
      >
        Produit créé
      </div>
      <div
        style={{
          opacity: checkIn * 0.9,
          fontSize: 28,
          color: BRAND.gray,
          fontWeight: 600,
          textAlign: "center",
          marginBottom: 30,
        }}
      >
        Visible immédiatement par vos clients
      </div>

      <div
        style={{
          opacity: cardIn,
          transform: `translateY(${(1 - cardIn) * 30}px)`,
          background: "#FFFFFF",
          borderRadius: 26,
          padding: 22,
          display: "flex",
          alignItems: "center",
          gap: 20,
          boxShadow: "0 14px 30px rgba(26,26,46,0.1)",
          border: "2px solid #F4E6D9",
          marginBottom: 28,
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: 18,
            background:
              "linear-gradient(145deg, #FFE0C7 0%, #FFC89B 40%, #FFA36C 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 64,
          }}
        >
          🎂
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{ fontSize: 32, fontWeight: 800, color: BRAND.navy }}
          >
            Gâteau enfant
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
            <div
              style={{
                fontSize: 30,
                fontWeight: 800,
                color: BRAND.orangeDeep,
              }}
            >
              45,00 €
            </div>
            <div
              style={{
                fontSize: 22,
                color: BRAND.gray,
                textDecoration: "line-through",
              }}
            >
              60,00 €
            </div>
          </div>
        </div>
        <div
          style={{
            background: "#D4F0E0",
            color: BRAND.mintText,
            borderRadius: 999,
            padding: "8px 18px",
            fontSize: 22,
            fontWeight: 800,
          }}
        >
          En ligne
        </div>
      </div>

      <div
        style={{
          opacity: sheetIn,
          transform: `translateY(${(1 - sheetIn) * 60}px)`,
          background: "#FFFFFF",
          borderRadius: 36,
          padding: 28,
          boxShadow: "0 22px 50px rgba(26,26,46,0.16)",
          border: "2px solid #F4E6D9",
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            color: BRAND.gray,
            marginBottom: 14,
          }}
        >
          Partager sur…
        </div>
        {shareOptions.map((o, i) => (
          <ShareRow key={o.name} option={o} delay={40 + i * 8} />
        ))}
      </div>

      <SceneTitle
        kicker="Étape 6"
        title="Produit créé ✓"
        subtitle="Partagez-le en un clic"
        position="bottom"
      />
    </AbsoluteFill>
  );
};
