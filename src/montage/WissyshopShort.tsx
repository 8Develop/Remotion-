import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { BRAND, FPS } from "./theme";
import { WissyLogo } from "./WissyLogo";

const d = (seconds: number) => Math.round(seconds * FPS);

const SHORT_INTRO = d(3);
const SHORT_ADV1 = d(10);
const SHORT_ADV2 = d(10);
const SHORT_ADV3 = d(10);
const SHORT_OUTRO = d(4);
const SHORT_TRANSITION = 10;

const ShortBadge: React.FC<{
  step: string;
  title: string;
}> = ({ step, title }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 140 },
  });

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        paddingTop: 90,
        pointerEvents: "none",
        fontFamily: "Poppins, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          opacity: enter,
          transform: `translateY(${(1 - enter) * 24}px)`,
          background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeTo})`,
          color: "white",
          borderRadius: 999,
          padding: "16px 36px",
          fontSize: 40,
          fontWeight: 800,
          letterSpacing: 0.5,
          textTransform: "uppercase",
          boxShadow: "0 14px 32px rgba(242,107,42,0.4)",
          marginBottom: 16,
        }}
      >
        {step}
      </div>
      <div
        style={{
          opacity: enter,
          transform: `translateY(${(1 - enter) * 20}px)`,
          background: "rgba(255,255,255,0.95)",
          color: BRAND.navy,
          borderRadius: 28,
          padding: "22px 38px",
          fontSize: 64,
          fontWeight: 900,
          boxShadow: "0 18px 40px rgba(26,26,46,0.18)",
          border: `4px solid ${BRAND.orangeFrom}`,
          textAlign: "center",
          maxWidth: 1000,
          lineHeight: 1.1,
        }}
      >
        {title}
      </div>
    </AbsoluteFill>
  );
};

const ShortIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const logoIn = spring({
    frame,
    fps,
    config: { damping: 11, stiffness: 110 },
  });
  const titleIn = spring({
    frame: frame - 12,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const pillIn = spring({
    frame: frame - 24,
    fps,
    config: { damping: 14, stiffness: 140 },
  });

  const exitStart = durationInFrames - 14;
  const exit = interpolate(frame, [exitStart, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 50% 30%, #FFF6EE 0%, ${BRAND.cream} 60%, #F3E3DA 100%)`,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins, system-ui, sans-serif",
        transform: `scale(${1 + exit * 0.06})`,
        opacity: 1 - exit,
      }}
    >
      <div
        style={{
          transform: `scale(${logoIn})`,
          opacity: logoIn,
          marginBottom: 32,
        }}
      >
        <WissyLogo height={460} />
      </div>

      <div
        style={{
          transform: `translateY(${(1 - titleIn) * 30}px)`,
          opacity: titleIn,
          fontSize: 170,
          fontWeight: 900,
          color: BRAND.navy,
          letterSpacing: -3,
          lineHeight: 1,
          textAlign: "center",
        }}
      >
        3 avantages
      </div>

      <div
        style={{
          transform: `translateY(${(1 - pillIn) * 20}px)`,
          opacity: pillIn,
          marginTop: 48,
          fontSize: 46,
          fontWeight: 700,
          background: BRAND.mint,
          color: BRAND.mintText,
          paddingInline: 40,
          paddingBlock: 18,
          borderRadius: 999,
        }}
      >
        ● Click & collect à Liège
      </div>
    </AbsoluteFill>
  );
};

const ProductCardMini: React.FC<{
  scale: number;
  showCheck?: boolean;
  showClickCollect?: boolean;
}> = ({ scale, showCheck = false, showClickCollect = false }) => {
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        background: "#FFFFFF",
        borderRadius: 44,
        padding: 36,
        width: 920,
        boxShadow: "0 26px 60px rgba(26,26,46,0.18)",
        border: "3px solid #F4E6D9",
        fontFamily: "Poppins, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          height: 480,
          borderRadius: 28,
          background:
            "linear-gradient(135deg, #FFD1DA 0%, #FFA5C1 50%, #D985E0 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 28,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ fontSize: 300 }}>🎂</div>
        <div
          style={{
            position: "absolute",
            top: 22,
            left: 22,
            background: "white",
            color: BRAND.orangeDeep,
            fontWeight: 800,
            fontSize: 30,
            padding: "12px 24px",
            borderRadius: 999,
          }}
        >
          📷 Photo ajoutée
        </div>
        {showCheck ? (
          <div
            style={{
              position: "absolute",
              bottom: 22,
              right: 22,
              background: BRAND.mintText,
              color: "white",
              borderRadius: 999,
              padding: "14px 28px",
              fontSize: 30,
              fontWeight: 800,
              boxShadow: "0 12px 26px rgba(5,150,105,0.4)",
            }}
          >
            ✓ En ligne
          </div>
        ) : null}
      </div>

      <div
        style={{
          fontSize: 54,
          fontWeight: 900,
          color: BRAND.navy,
          marginBottom: 12,
        }}
      >
        Gâteau enfant 🦄
      </div>
      <div
        style={{
          fontSize: 40,
          fontWeight: 800,
          color: BRAND.orangeDeep,
          marginBottom: 22,
        }}
      >
        45,00 €
      </div>

      {showClickCollect ? (
        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            background: BRAND.mint,
            color: BRAND.mintText,
            borderRadius: 22,
            padding: "20px 28px",
            fontSize: 40,
            fontWeight: 800,
          }}
        >
          <span style={{ fontSize: 46 }}>🛍️</span>
          Click &amp; collect — Liège
        </div>
      ) : null}
    </div>
  );
};

const Advantage1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardIn = spring({
    frame: frame - 18,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const checkIn = interpolate(frame, [120, 150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const clickCollectIn = interpolate(frame, [180, 210], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ctaIn = spring({
    frame: frame - 230,
    fps,
    config: { damping: 13, stiffness: 130 },
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${BRAND.cream} 0%, #F3DFCF 100%)`,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 360,
        fontFamily: "Poppins, system-ui, sans-serif",
        gap: 32,
      }}
    >
      <ShortBadge step="Avantage 1" title="Mettez en vente en 1 minute" />

      <div
        style={{
          opacity: cardIn,
          transform: `translateY(${(1 - cardIn) * 60}px)`,
        }}
      >
        <ProductCardMini
          scale={1}
          showCheck={checkIn > 0.1}
          showClickCollect={clickCollectIn > 0.1}
        />
      </div>

      <div
        style={{
          opacity: ctaIn,
          transform: `translateY(${(1 - ctaIn) * 30}px)`,
          marginTop: 8,
          fontSize: 52,
          fontWeight: 900,
          color: BRAND.navy,
          textAlign: "center",
          maxWidth: 980,
          lineHeight: 1.2,
        }}
      >
        Photo, prix, click &amp; collect.
        <br />
        <span style={{ color: BRAND.orangeDeep }}>Votre article est en ligne.</span>
      </div>
    </AbsoluteFill>
  );
};

const NetworkPill: React.FC<{
  emoji: string;
  name: string;
  accent: string;
  appear: number;
  posted: number;
}> = ({ emoji, name, accent, appear, posted }) => {
  return (
    <div
      style={{
        opacity: appear,
        transform: `translateY(${(1 - appear) * 30}px) scale(${0.92 + appear * 0.08})`,
        width: 920,
        background: "#FFFFFF",
        borderRadius: 32,
        padding: "26px 32px",
        display: "flex",
        alignItems: "center",
        gap: 24,
        border: `4px solid ${accent}`,
        boxShadow: `0 16px 36px ${accent}3D`,
        fontFamily: "Poppins, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          width: 96,
          height: 96,
          borderRadius: 24,
          background: accent,
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 54,
        }}
      >
        {emoji}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 48, fontWeight: 900, color: BRAND.navy }}>
          {name}
        </div>
        <div
          style={{
            fontSize: 32,
            color: BRAND.gray,
            fontWeight: 700,
            marginTop: 4,
          }}
        >
          {posted > 0.2 ? "✓ Publié" : "Prêt à publier…"}
        </div>
      </div>
      <div
        style={{
          opacity: posted,
          transform: `scale(${posted})`,
          width: 86,
          height: 86,
          borderRadius: 43,
          background: BRAND.mintText,
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 48,
          fontWeight: 900,
          boxShadow: "0 12px 26px rgba(5,150,105,0.4)",
        }}
      >
        ✓
      </div>
    </div>
  );
};

const Advantage2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const wa = spring({
    frame: frame - 30,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const fb = spring({
    frame: frame - 50,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const ig = spring({
    frame: frame - 70,
    fps,
    config: { damping: 14, stiffness: 140 },
  });

  const buttonIn = spring({
    frame: frame - 110,
    fps,
    config: { damping: 13, stiffness: 150 },
  });
  const buttonPress = interpolate(frame, [160, 172], [1, 0.93], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const buttonRelease = interpolate(frame, [172, 184], [0.93, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const buttonScale = frame < 172 ? buttonPress : buttonRelease;

  const postedWa = interpolate(frame, [180, 196], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const postedFb = interpolate(frame, [192, 210], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const postedIg = interpolate(frame, [204, 222], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ctaIn = spring({
    frame: frame - 240,
    fps,
    config: { damping: 13, stiffness: 130 },
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${BRAND.cream} 0%, #F3DFCF 100%)`,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 360,
        fontFamily: "Poppins, system-ui, sans-serif",
        gap: 22,
      }}
    >
      <ShortBadge step="Avantage 2" title="Publiez partout en 1 clic" />

      <NetworkPill
        emoji="💚"
        name="WhatsApp"
        accent="#128C7E"
        appear={wa}
        posted={postedWa}
      />
      <NetworkPill
        emoji="🔵"
        name="Facebook"
        accent="#1877F2"
        appear={fb}
        posted={postedFb}
      />
      <NetworkPill
        emoji="🟠"
        name="Instagram"
        accent="#DC2743"
        appear={ig}
        posted={postedIg}
      />

      <div
        style={{
          opacity: buttonIn,
          transform: `translateY(${(1 - buttonIn) * 30}px) scale(${buttonScale})`,
          marginTop: 22,
          background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeDeep})`,
          color: "white",
          borderRadius: 28,
          padding: "28px 56px",
          fontSize: 56,
          fontWeight: 900,
          boxShadow: "0 22px 48px rgba(242,107,42,0.5)",
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <span>🚀</span>
        Partager partout
      </div>

      <div
        style={{
          opacity: ctaIn,
          transform: `translateY(${(1 - ctaIn) * 24}px)`,
          marginTop: 12,
          fontSize: 46,
          fontWeight: 800,
          color: BRAND.navySoft,
          textAlign: "center",
          maxWidth: 980,
          lineHeight: 1.2,
        }}
      >
        Sur <strong>vos</strong> propres réseaux,
        <br />
        sans intermédiaire.
      </div>
    </AbsoluteFill>
  );
};

const Advantage3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const payIn = spring({
    frame: frame - 12,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const checkIn = spring({
    frame: frame - 30,
    fps,
    config: { damping: 9, stiffness: 200 },
  });
  const arrowIn = interpolate(frame, [110, 140], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const pickupIn = spring({
    frame: frame - 130,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const ctaIn = spring({
    frame: frame - 230,
    fps,
    config: { damping: 13, stiffness: 130 },
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${BRAND.cream} 0%, #F3DFCF 100%)`,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 360,
        fontFamily: "Poppins, system-ui, sans-serif",
        gap: 28,
      }}
    >
      <ShortBadge step="Avantage 3" title="Paiement sécurisé, retrait facile" />

      <div
        style={{
          opacity: payIn,
          transform: `translateY(${(1 - payIn) * 60}px) scale(${0.94 + payIn * 0.06})`,
          background: "white",
          borderRadius: 44,
          padding: 44,
          width: 920,
          boxShadow: "0 26px 60px rgba(0,0,0,0.18)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 22,
        }}
      >
        <div
          style={{
            transform: `scale(${checkIn})`,
            width: 170,
            height: 170,
            borderRadius: 85,
            background: "linear-gradient(135deg, #34D399 0%, #059669 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 110,
            color: "white",
            boxShadow: "0 22px 44px rgba(5,150,105,0.45)",
          }}
        >
          ✓
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 900,
            color: BRAND.navy,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Paiement validé · 45,00 €
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            fontSize: 34,
            color: BRAND.navySoft,
            fontWeight: 700,
          }}
        >
          <span>🔒</span> Bancontact · Visa · Mastercard
        </div>
      </div>

      <div
        style={{
          opacity: arrowIn,
          transform: `scale(${arrowIn})`,
          fontSize: 80,
          color: BRAND.orangeDeep,
          fontWeight: 900,
        }}
      >
        ⬇
      </div>

      <div
        style={{
          opacity: pickupIn,
          transform: `translateY(${(1 - pickupIn) * 60}px) scale(${0.94 + pickupIn * 0.06})`,
          background: `linear-gradient(135deg, #D4F0E0 0%, #A7E3C2 100%)`,
          border: `4px solid ${BRAND.mintText}`,
          borderRadius: 36,
          padding: "32px 38px",
          width: 920,
          display: "flex",
          alignItems: "center",
          gap: 28,
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: 30,
            background: BRAND.mintText,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 70,
          }}
        >
          🛍️
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: BRAND.navy,
              lineHeight: 1.1,
            }}
          >
            Retrait en boutique
          </div>
          <div
            style={{
              fontSize: 34,
              color: BRAND.mintText,
              fontWeight: 800,
              marginTop: 8,
            }}
          >
            Rapide, sans file d'attente
          </div>
        </div>
      </div>

      <div
        style={{
          opacity: ctaIn,
          transform: `translateY(${(1 - ctaIn) * 20}px)`,
          marginTop: 8,
          fontSize: 46,
          fontWeight: 800,
          color: BRAND.navySoft,
          textAlign: "center",
          maxWidth: 980,
          lineHeight: 1.2,
        }}
      >
        Le client paye en ligne,
        <br />
        et récupère en boutique.
      </div>
    </AbsoluteFill>
  );
};

const ShortOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoIn = spring({
    frame,
    fps,
    config: { damping: 11, stiffness: 110 },
  });
  const ctaIn = spring({
    frame: frame - 14,
    fps,
    config: { damping: 13, stiffness: 130 },
  });
  const urlIn = spring({
    frame: frame - 26,
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
        color: "white",
        overflow: "hidden",
      }}
    >
      {[...Array(5)].map((_, i) => {
        const size = 220 + i * 100;
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
          background: "white",
          borderRadius: 48,
          padding: "26px 52px",
          marginBottom: 44,
          boxShadow: "0 28px 64px rgba(0,0,0,0.28)",
        }}
      >
        <WissyLogo height={340} />
      </div>

      <div
        style={{
          opacity: ctaIn,
          transform: `translateY(${(1 - ctaIn) * 26}px)`,
          fontSize: 150,
          fontWeight: 900,
          letterSpacing: -3,
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
          transform: `translateY(${(1 - urlIn) * 26}px)`,
          marginTop: 56,
          fontSize: 70,
          fontWeight: 900,
          background: "white",
          color: BRAND.orangeDeep,
          paddingInline: 56,
          paddingBlock: 26,
          borderRadius: 999,
          boxShadow: "0 18px 44px rgba(0,0,0,0.3)",
        }}
      >
        wissyshop.com
      </div>
    </AbsoluteFill>
  );
};

export const WissyshopShort: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.cream }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={SHORT_INTRO}>
          <ShortIntro />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: SHORT_TRANSITION })}
        />

        <TransitionSeries.Sequence durationInFrames={SHORT_ADV1}>
          <Advantage1 />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: SHORT_TRANSITION })}
        />

        <TransitionSeries.Sequence durationInFrames={SHORT_ADV2}>
          <Advantage2 />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: SHORT_TRANSITION })}
        />

        <TransitionSeries.Sequence durationInFrames={SHORT_ADV3}>
          <Advantage3 />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: SHORT_TRANSITION })}
        />

        <TransitionSeries.Sequence durationInFrames={SHORT_OUTRO}>
          <ShortOutro />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

const SHORT_SEQUENCE_FRAMES =
  SHORT_INTRO + SHORT_ADV1 + SHORT_ADV2 + SHORT_ADV3 + SHORT_OUTRO;
const SHORT_TRANSITION_FRAMES = SHORT_TRANSITION * 4;
export const WISSYSHOP_SHORT_TOTAL_FRAMES =
  SHORT_SEQUENCE_FRAMES - SHORT_TRANSITION_FRAMES;
