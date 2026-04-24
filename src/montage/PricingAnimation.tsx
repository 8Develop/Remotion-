import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BRAND } from "./theme";
import { SceneTitle } from "./SceneTitle";
import { FlexibleBadge } from "./FlexibleBadge";

export const PRICING_DURATION = 300;

const FieldLabel: React.FC<{ text: string }> = ({ text }) => (
  <div
    style={{
      fontSize: 22,
      fontWeight: 700,
      color: BRAND.navy,
      marginBottom: 6,
      fontFamily: "Poppins, system-ui, sans-serif",
    }}
  >
    {text} <span style={{ color: BRAND.orangeDeep }}>*</span>
  </div>
);

export const PricingAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardIn = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 140 },
  });

  const priceIn = spring({
    frame: frame - 10,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const reductionIn = spring({
    frame: frame - 40,
    fps,
    config: { damping: 14, stiffness: 140 },
  });

  const finalStart = 70;
  const finalProgress = interpolate(
    frame,
    [finalStart, finalStart + 30],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const finalPrice = 45 * finalProgress;

  const stockIn = spring({
    frame: frame - 130,
    fps,
    config: { damping: 14, stiffness: 140 },
  });

  const dateIn = spring({
    frame: frame - 180,
    fps,
    config: { damping: 14, stiffness: 140 },
  });

  const savingsFlash = Math.floor(frame / 10) % 2 === 0 ? 1 : 0.85;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${BRAND.cream} 0%, #F3DFCF 100%)`,
        padding: 60,
        paddingTop: 100,
        fontFamily: "Poppins, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          opacity: cardIn,
          transform: `translateY(${(1 - cardIn) * 40}px)`,
          background: "#FFFFFF",
          borderRadius: 40,
          padding: 36,
          boxShadow: "0 22px 50px rgba(26,26,46,0.14)",
          border: "2px solid #F4E6D9",
          display: "flex",
          flexDirection: "column",
          gap: 22,
        }}
      >
        <div>
          <FieldLabel text="Prix original (€)" />
          <div
            style={{
              opacity: priceIn,
              transform: `translateX(${(1 - priceIn) * -20}px)`,
              background: BRAND.cream,
              border: "3px solid #E8D7C6",
              borderRadius: 18,
              padding: "18px 22px",
              fontSize: 32,
              fontWeight: 800,
              color: BRAND.navy,
            }}
          >
            60
          </div>
        </div>

        <div>
          <FieldLabel text="Réduction (%)" />
          <div
            style={{
              opacity: reductionIn,
              transform: `translateX(${(1 - reductionIn) * -20}px)`,
              background: BRAND.cream,
              border: `3px solid ${BRAND.orangeFrom}`,
              borderRadius: 18,
              padding: "18px 22px",
              fontSize: 32,
              fontWeight: 800,
              color: BRAND.orangeDeep,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>25</span>
            <span style={{ fontSize: 22, color: BRAND.gray }}>%</span>
          </div>
        </div>

        <div
          style={{
            opacity: finalProgress,
            background: `linear-gradient(135deg, #FFE8D6 0%, ${BRAND.cream} 100%)`,
            borderRadius: 22,
            padding: 24,
            border: `3px dashed ${BRAND.orangeFrom}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ fontSize: 22, color: BRAND.gray, fontWeight: 600 }}>
              Prix final
            </div>
            <div
              style={{
                fontSize: 58,
                fontWeight: 900,
                color: BRAND.orangeDeep,
                letterSpacing: -1,
                lineHeight: 1,
                marginTop: 2,
              }}
            >
              {finalPrice.toFixed(2)} €
            </div>
            <div
              style={{
                fontSize: 20,
                color: BRAND.gray,
                fontWeight: 500,
                marginTop: 4,
              }}
            >
              Calculé automatiquement
            </div>
          </div>
          <div
            style={{
              opacity: savingsFlash,
              background: BRAND.mintText,
              color: "white",
              borderRadius: 18,
              padding: "10px 20px",
              fontSize: 26,
              fontWeight: 800,
              boxShadow: "0 10px 22px rgba(5, 150, 105, 0.3)",
            }}
          >
            -15,00 €
          </div>
        </div>

        <div style={{ display: "flex", gap: 18 }}>
          <div style={{ flex: 1 }}>
            <FieldLabel text="Stock" />
            <div
              style={{
                opacity: stockIn,
                transform: `translateY(${(1 - stockIn) * 16}px)`,
                background: BRAND.cream,
                border: "3px solid #E8D7C6",
                borderRadius: 18,
                padding: "18px 22px",
                fontSize: 30,
                fontWeight: 800,
                color: BRAND.navy,
              }}
            >
              1
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <FieldLabel text="TVA" />
            <div
              style={{
                opacity: stockIn,
                transform: `translateY(${(1 - stockIn) * 16}px)`,
                background: BRAND.cream,
                border: "3px solid #E8D7C6",
                borderRadius: 18,
                padding: "18px 22px",
                fontSize: 30,
                fontWeight: 800,
                color: BRAND.navy,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>6 %</span>
              <span style={{ color: BRAND.gray, fontSize: 22 }}>▾</span>
            </div>
          </div>
        </div>

        <div
          style={{
            opacity: dateIn,
            transform: `translateY(${(1 - dateIn) * 20}px)`,
            background: BRAND.cream,
            borderRadius: 22,
            padding: 22,
            border: `3px solid ${BRAND.orangeFrom}`,
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: BRAND.navy,
              marginBottom: 10,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ fontSize: 28 }}>📅</span>
            <span>Date &amp; créneau de retrait</span>
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: BRAND.navy,
            }}
          >
            vendredi 24 avril
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 10,
              flexWrap: "wrap",
            }}
          >
            {["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"].map(
              (slot, i) => {
                const highlight = slot === "10:00";
                const slotIn = interpolate(
                  frame,
                  [200 + i * 6, 215 + i * 6],
                  [0, 1],
                  { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
                );
                return (
                  <div
                    key={slot}
                    style={{
                      opacity: slotIn,
                      transform: `translateY(${(1 - slotIn) * 10}px)`,
                      borderRadius: 14,
                      padding: "10px 16px",
                      fontSize: 22,
                      fontWeight: 800,
                      background: highlight ? BRAND.orangeFrom : "#FFFFFF",
                      color: highlight ? "white" : BRAND.navy,
                      border: `2px solid ${
                        highlight ? BRAND.orangeFrom : "#E8D7C6"
                      }`,
                      boxShadow: highlight
                        ? "0 8px 18px rgba(242,107,42,0.3)"
                        : "none",
                    }}
                  >
                    {slot}
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>

      <FlexibleBadge />

      <SceneTitle
        kicker="Étape 5"
        title="Vous choisissez date & créneau"
        subtitle="100 % flexible — vos horaires, votre rythme"
        position="bottom"
      />
    </AbsoluteFill>
  );
};
