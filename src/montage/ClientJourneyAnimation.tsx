import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BRAND } from "./theme";

const FB_LEN = 90;
const CART_LEN = 60;
const SLOT_LEN = 90;

export const CLIENT_JOURNEY_ANIMATION_DURATION = FB_LEN + CART_LEN + SLOT_LEN;

type CaptionProps = {
  text: string;
  duration: number;
  withBanner?: boolean;
};

const Caption: React.FC<CaptionProps> = ({ text, duration, withBanner }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const exit = interpolate(frame, [duration - 10, duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = enter * exit;
  const y = (1 - enter) * 40;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 90,
        pointerEvents: "none",
        fontFamily: "Poppins, system-ui, sans-serif",
      }}
    >
      {withBanner ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 360,
            background:
              "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.92) 70%, rgba(255,255,255,0) 100%)",
            opacity,
          }}
        />
      ) : null}
      <div
        style={{
          opacity,
          transform: `translateY(${y}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeTo})`,
            color: "white",
            borderRadius: 999,
            padding: "10px 24px",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 0.5,
            textTransform: "uppercase",
            boxShadow: `0 12px 28px ${BRAND.orangeFrom}55`,
          }}
        >
          Étape 8
        </div>
        <div
          style={{
            background: "rgba(255,255,255,0.96)",
            color: BRAND.navy,
            borderRadius: 24,
            padding: "16px 28px",
            fontSize: 42,
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 960,
            boxShadow: "0 14px 36px rgba(26,26,46,0.18)",
            border: `3px solid ${BRAND.orangeFrom}`,
          }}
        >
          {text}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const CakeThumbnail: React.FC<{ size: number }> = ({ size }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: size * 0.14,
      background: "linear-gradient(145deg, #FFE0C7 0%, #FFC89B 40%, #FFA36C 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: size * 0.6,
      boxShadow: "0 10px 22px rgba(242, 107, 42, 0.2)",
      flexShrink: 0,
    }}
  >
    🎂
  </div>
);

const FacebookPostScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const cardIn = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const likePulse = 1 + Math.sin(frame / 6) * 0.08;

  return (
    <AbsoluteFill
      style={{
        background: "#E8EAF2",
        padding: 60,
        paddingTop: 360,
        fontFamily: "Poppins, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          opacity: cardIn,
          transform: `translateY(${(1 - cardIn) * 40}px)`,
          background: "#FFFFFF",
          borderRadius: 28,
          overflow: "hidden",
          boxShadow: "0 24px 50px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            padding: "22px 26px",
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 42,
              background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeDeep})`,
              color: "white",
              fontSize: 42,
              fontWeight: 900,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            W
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#1C1E21" }}>
              Wissyshop Liège
            </div>
            <div style={{ fontSize: 22, color: "#65676B" }}>
              Publié par vous · Il y a 2 min · 🌐
            </div>
          </div>
          <div style={{ fontSize: 32, color: "#65676B" }}>⋯</div>
        </div>

        <div
          style={{
            padding: "0 26px 20px",
            fontSize: 28,
            color: "#050505",
            lineHeight: 1.4,
          }}
        >
          🔥 Nouveau chez Wissyshop ! <br />
          <span style={{ fontWeight: 800 }}>Gâteau enfant</span> — 45,00 €
          (au lieu de 60,00 €)
          <br />
          📦 À retirer avant le 30 avril 2026 à 10:00
        </div>

        <div
          style={{
            height: 520,
            background: "linear-gradient(135deg, #FFE8D6 0%, #FFCDA8 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <CakeThumbnail size={380} />
          <div
            style={{
              position: "absolute",
              bottom: 18,
              right: 18,
              background: "rgba(0,0,0,0.7)",
              color: "white",
              padding: "8px 16px",
              borderRadius: 10,
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            wissyshop.com
          </div>
        </div>

        <div
          style={{
            padding: "16px 26px",
            background: "#F7F8FA",
            borderBottom: "1px solid #E4E6EB",
          }}
        >
          <div style={{ fontSize: 22, color: "#65676B" }}>
            wissyshop.com · Click &amp; collect
          </div>
          <div style={{ fontSize: 30, fontWeight: 800, color: "#050505" }}>
            Gâteau enfant — 45,00 €
          </div>
        </div>

        <div
          style={{
            padding: "18px 26px",
            display: "flex",
            justifyContent: "space-around",
            color: "#65676B",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <div style={{ transform: `scale(${likePulse})` }}>👍 J'aime</div>
          <div>💬 Commenter</div>
          <div>↗️ Partager</div>
        </div>
      </div>

      <Caption
        text="Votre client voit votre publication"
        duration={FB_LEN}
        withBanner
      />
    </AbsoluteFill>
  );
};

const CartScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const cardIn = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const ctaPulse = 1 + Math.sin(frame / 6) * 0.03;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${BRAND.cream} 0%, #F3DFCF 100%)`,
        padding: 60,
        paddingTop: 320,
        fontFamily: "Poppins, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          opacity: cardIn,
          transform: `translateY(${(1 - cardIn) * 40}px)`,
          background: "#FFFFFF",
          borderRadius: 32,
          padding: 32,
          boxShadow: "0 22px 50px rgba(26,26,46,0.14)",
          border: "2px solid #F4E6D9",
        }}
      >
        <div
          style={{
            fontSize: 44,
            fontWeight: 900,
            color: BRAND.navy,
            marginBottom: 8,
          }}
        >
          Votre panier (1)
        </div>
        <div
          style={{
            fontSize: 24,
            color: BRAND.gray,
            fontWeight: 600,
            marginBottom: 22,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span style={{ fontSize: 28 }}>🏪</span>
          <span>Wissyshop Liège</span>
        </div>

        <div
          style={{
            background: BRAND.cream,
            borderRadius: 22,
            padding: 22,
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 18,
          }}
        >
          <CakeThumbnail size={110} />
          <div style={{ flex: 1 }}>
            <div
              style={{ fontSize: 30, fontWeight: 800, color: BRAND.navy }}
            >
              Gâteau enfant
            </div>
            <div
              style={{
                fontSize: 24,
                color: BRAND.orangeDeep,
                fontWeight: 800,
                marginTop: 2,
              }}
            >
              45,00 €
            </div>
            <div style={{ fontSize: 20, color: BRAND.gray, marginTop: 2 }}>
              Avant le 30 avril · 10:00
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "#FFFFFF",
              borderRadius: 14,
              padding: "8px 14px",
              border: "2px solid #F0E4D9",
              fontSize: 26,
              fontWeight: 800,
              color: BRAND.navy,
            }}
          >
            <span>−</span>
            <span>1</span>
            <span>+</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 18,
            borderTop: "1px solid #F0E4D9",
            marginBottom: 26,
          }}
        >
          <div
            style={{ fontSize: 30, fontWeight: 800, color: BRAND.navy }}
          >
            Total
          </div>
          <div
            style={{
              fontSize: 38,
              fontWeight: 900,
              color: BRAND.orangeDeep,
            }}
          >
            45,00 €
          </div>
        </div>

        <div
          style={{
            background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeDeep})`,
            color: "white",
            borderRadius: 22,
            padding: "24px 28px",
            textAlign: "center",
            fontSize: 34,
            fontWeight: 800,
            transform: `scale(${ctaPulse})`,
            boxShadow: "0 16px 36px rgba(242,107,42,0.4)",
          }}
        >
          Choisir les créneaux →
        </div>
      </div>

      <Caption text="Il ajoute au panier et commande" duration={CART_LEN} />
    </AbsoluteFill>
  );
};

const CalendarScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const cardIn = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const slotPulse = 1 + Math.sin(frame / 6) * 0.04;

  const monthDates = [
    [30, 31, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 1, 2, 3],
  ];
  const availableRange = [24, 25, 26, 27, 28, 29, 30];

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${BRAND.cream} 0%, #F3DFCF 100%)`,
        padding: 60,
        paddingTop: 320,
        fontFamily: "Poppins, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          opacity: cardIn,
          transform: `translateY(${(1 - cardIn) * 40}px)`,
          background: "#FFFFFF",
          borderRadius: 32,
          padding: 32,
          boxShadow: "0 22px 50px rgba(26,26,46,0.14)",
          border: "2px solid #F4E6D9",
        }}
      >
        <div
          style={{
            fontSize: 42,
            fontWeight: 900,
            color: BRAND.navy,
            marginBottom: 8,
          }}
        >
          Créneaux de retrait
        </div>
        <div
          style={{
            fontSize: 22,
            color: BRAND.gray,
            marginBottom: 20,
          }}
        >
          Choisissez un créneau pour chaque article
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            background: BRAND.cream,
            borderRadius: 20,
            padding: "14px 18px",
            marginBottom: 22,
          }}
        >
          <span style={{ fontSize: 36 }}>📦</span>
          <span
            style={{ fontSize: 28, fontWeight: 800, color: BRAND.navy }}
          >
            Gâteau enfant
          </span>
          <span
            style={{
              marginLeft: "auto",
              fontSize: 22,
              fontWeight: 700,
              color: BRAND.gray,
            }}
          >
            × 1
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            fontWeight: 700,
            color: BRAND.navy,
            marginBottom: 12,
          }}
        >
          <span style={{ fontSize: 28, color: BRAND.gray }}>‹</span>
          <span>avril 2026</span>
          <span style={{ fontSize: 28, color: BRAND.gray }}>›</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 8,
            fontSize: 22,
            color: BRAND.gray,
            marginBottom: 6,
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          {["lu", "ma", "me", "je", "ve", "sa", "di"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 6,
            marginBottom: 20,
          }}
        >
          {monthDates.flat().map((day, i) => {
            const available = availableRange.includes(day) && i < 35 && i > 20;
            const isToday = day === 24;
            return (
              <div
                key={i}
                style={{
                  aspectRatio: "1",
                  borderRadius: 12,
                  background: available
                    ? isToday
                      ? "#FFD0B3"
                      : "#FFE8D6"
                    : "transparent",
                  color: available
                    ? BRAND.orangeDeep
                    : i < 2 || i > 32
                    ? "#D0C5BA"
                    : BRAND.gray,
                  fontSize: 22,
                  fontWeight: available ? 800 : 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: isToday ? `2px solid ${BRAND.orangeFrom}` : "none",
                }}
              >
                {day}
              </div>
            );
          })}
        </div>

        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: BRAND.navy,
            marginBottom: 10,
          }}
        >
          Créneau — vendredi 24 avril
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"].map(
            (slot) => {
              const selected = slot === "10:00";
              return (
                <div
                  key={slot}
                  style={{
                    borderRadius: 14,
                    padding: "12px 18px",
                    fontSize: 22,
                    fontWeight: 800,
                    background: selected ? BRAND.orangeFrom : BRAND.cream,
                    color: selected ? "white" : BRAND.navy,
                    border: `2px solid ${
                      selected ? BRAND.orangeFrom : "#E8D7C6"
                    }`,
                    transform: selected ? `scale(${slotPulse})` : "none",
                    boxShadow: selected
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

      <Caption
        text="Et choisit son créneau de retrait"
        duration={SLOT_LEN}
      />
    </AbsoluteFill>
  );
};

export const ClientJourneyAnimation: React.FC = () => {
  let t = 0;
  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.cream }}>
      <Sequence from={t} durationInFrames={FB_LEN}>
        <FacebookPostScene />
      </Sequence>
      <Sequence from={(t += FB_LEN)} durationInFrames={CART_LEN}>
        <CartScene />
      </Sequence>
      <Sequence from={(t += CART_LEN)} durationInFrames={SLOT_LEN}>
        <CalendarScene />
      </Sequence>
    </AbsoluteFill>
  );
};
