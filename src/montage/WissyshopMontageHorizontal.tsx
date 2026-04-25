import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { WissyshopMontage } from "./WissyshopMontage";
import { WissyLogo } from "./WissyLogo";
import { BRAND } from "./theme";

const HORIZONTAL_WIDTH = 1920;
const HORIZONTAL_HEIGHT = 1080;
const VERTICAL_WIDTH = 1080;
const VERTICAL_HEIGHT = 1920;
const SCALE = HORIZONTAL_HEIGHT / VERTICAL_HEIGHT;
const FRAME_WIDTH = VERTICAL_WIDTH * SCALE;
const SIDE_WIDTH = (HORIZONTAL_WIDTH - FRAME_WIDTH) / 2;

const FEATURES: { icon: string; title: string; sub: string }[] = [
  {
    icon: "🛍️",
    title: "Click & collect",
    sub: "Retrait facile en boutique",
  },
  {
    icon: "📱",
    title: "Sans site internet",
    sub: "Wissyshop est votre vitrine",
  },
  {
    icon: "🚀",
    title: "1 clic sur les réseaux",
    sub: "WhatsApp, Facebook, Instagram",
  },
  {
    icon: "💸",
    title: "Paiement sécurisé",
    sub: "Bancontact · Visa · Mastercard",
  },
];

const FloatingShape: React.FC<{
  x: number;
  y: number;
  size: number;
  delay: number;
  color: string;
}> = ({ x, y, size, delay, color }) => {
  const frame = useCurrentFrame();
  const t = (frame + delay) / 30;
  const offsetY = Math.sin(t * 0.6) * 24;
  const offsetX = Math.cos(t * 0.5) * 18;
  return (
    <div
      style={{
        position: "absolute",
        left: x + offsetX,
        top: y + offsetY,
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        opacity: 0.16,
        filter: "blur(2px)",
      }}
    />
  );
};

export const WissyshopMontageHorizontal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const introIn = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${BRAND.navy} 0%, ${BRAND.navySoft} 60%, #3A2716 100%)`,
        fontFamily: "Poppins, system-ui, sans-serif",
        overflow: "hidden",
        color: "white",
      }}
    >
      <FloatingShape x={120} y={80} size={260} delay={0} color={BRAND.orangeFrom} />
      <FloatingShape x={-80} y={520} size={340} delay={40} color={BRAND.orangeDeep} />
      <FloatingShape x={1620} y={-60} size={300} delay={20} color={BRAND.orangeFrom} />
      <FloatingShape x={1700} y={620} size={260} delay={60} color="#F4904E" />
      <FloatingShape x={780} y={-180} size={420} delay={10} color={BRAND.orangeDeep} />

      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: SIDE_WIDTH,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "60px 70px",
          gap: 28,
          opacity: introIn,
          transform: `translateX(${(1 - introIn) * -40}px)`,
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: 28,
            padding: "16px 28px",
            boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
          }}
        >
          <WissyLogo height={120} />
        </div>

        <div
          style={{
            fontSize: 86,
            fontWeight: 900,
            letterSpacing: -2,
            lineHeight: 1.02,
            color: "white",
          }}
        >
          La marketplace
          <br />
          <span
            style={{
              background: `linear-gradient(135deg, ${BRAND.orangeFrom}, #FFC04A)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            locale
          </span>{" "}
          de Liège
        </div>

        <div
          style={{
            background: BRAND.mint,
            color: BRAND.mintText,
            borderRadius: 999,
            padding: "14px 28px",
            fontSize: 30,
            fontWeight: 800,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              background: BRAND.mintText,
            }}
          />
          Click & collect — sans file d'attente
        </div>

        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "rgba(255,255,255,0.78)",
            lineHeight: 1.3,
            marginTop: 8,
          }}
        >
          Vendez vos produits, invendus et bons plans en quelques clics —
          gardez vos marges, gardez vos clients.
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: SIDE_WIDTH,
          top: 0,
          width: FRAME_WIDTH,
          height: HORIZONTAL_HEIGHT,
          overflow: "hidden",
          boxShadow:
            "0 0 0 6px rgba(255,255,255,0.08), 0 30px 80px rgba(0,0,0,0.55)",
        }}
      >
        <div
          style={{
            width: VERTICAL_WIDTH,
            height: VERTICAL_HEIGHT,
            transform: `scale(${SCALE})`,
            transformOrigin: "top left",
          }}
        >
          <WissyshopMontage />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: SIDE_WIDTH,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "center",
          padding: "60px 70px",
          gap: 18,
        }}
      >
        <div
          style={{
            opacity: introIn,
            transform: `translateX(${(1 - introIn) * 40}px)`,
            fontSize: 54,
            fontWeight: 900,
            letterSpacing: -1,
            marginBottom: 6,
            lineHeight: 1.05,
          }}
        >
          Pourquoi
          <br />
          <span style={{ color: BRAND.orangeFrom }}>Wissyshop ?</span>
        </div>

        {FEATURES.map((feat, i) => {
          const featIn = spring({
            frame: frame - 10 - i * 6,
            fps,
            config: { damping: 14, stiffness: 140 },
          });
          return (
            <div
              key={feat.title}
              style={{
                opacity: featIn,
                transform: `translateX(${(1 - featIn) * 36}px)`,
                background: "rgba(255,255,255,0.08)",
                border: "2px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(10px)",
                borderRadius: 22,
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: 18,
              }}
            >
              <div
                style={{
                  width: 76,
                  height: 76,
                  borderRadius: 20,
                  background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeDeep})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 40,
                  flexShrink: 0,
                }}
              >
                {feat.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 30, fontWeight: 900, lineHeight: 1.05 }}>
                  {feat.title}
                </div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 600,
                    opacity: 0.78,
                    marginTop: 4,
                    lineHeight: 1.2,
                  }}
                >
                  {feat.sub}
                </div>
              </div>
            </div>
          );
        })}

        <div
          style={{
            marginTop: 14,
            background: "white",
            color: BRAND.orangeDeep,
            borderRadius: 999,
            padding: "20px 32px",
            fontSize: 38,
            fontWeight: 900,
            textAlign: "center",
            boxShadow: "0 18px 44px rgba(0,0,0,0.35)",
            transform: `scale(${1 + Math.sin(frame / 8) * 0.015})`,
          }}
        >
          wissyshop.com
        </div>
      </div>
    </AbsoluteFill>
  );
};
