import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BRAND } from "./theme";

const CARD_DURATION = 90;

const useCardAnimation = (sequenceStart: number) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - sequenceStart;
  const enter = spring({
    frame: localFrame,
    fps,
    config: { damping: 15, stiffness: 130 },
  });
  const exitStart = CARD_DURATION - 14;
  const exit = interpolate(
    localFrame,
    [exitStart, CARD_DURATION],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  return { enter, exit, localFrame };
};

const ProductVisual: React.FC<{ size: number }> = ({ size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.08,
        background: "linear-gradient(145deg, #FFE0C7 0%, #FFC89B 40%, #FFA36C 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.5,
        boxShadow: "0 12px 30px rgba(242, 107, 42, 0.25)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: size * 0.05,
          left: size * 0.05,
          background: "#FFFFFF",
          color: BRAND.orangeDeep,
          fontWeight: 800,
          fontSize: size * 0.07,
          padding: `${size * 0.015}px ${size * 0.04}px`,
          borderRadius: 999,
          fontFamily: "Poppins, system-ui, sans-serif",
        }}
      >
        -25%
      </div>
      🎂
    </div>
  );
};

const WhatsAppCard: React.FC<{ start: number }> = ({ start }) => {
  const { enter, exit, localFrame } = useCardAnimation(start);
  const opacity = enter * exit;
  const translateY = interpolate(enter, [0, 1], [80, 0]);

  const bubbleIn = spring({
    frame: localFrame - 8,
    fps: 30,
    config: { damping: 14, stiffness: 140 },
  });

  return (
    <AbsoluteFill
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        fontFamily: "Poppins, system-ui, sans-serif",
        alignItems: "center",
        justifyContent: "center",
        padding: 60,
      }}
    >
      <div
        style={{
          width: 880,
          background: "#ECE5DD",
          borderRadius: 48,
          overflow: "hidden",
          boxShadow: "0 30px 70px rgba(0,0,0,0.18)",
        }}
      >
        <div
          style={{
            background: "#128C7E",
            color: "white",
            padding: "28px 32px",
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              background: BRAND.orangeFrom,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 800,
              color: "white",
            }}
          >
            W
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 36, fontWeight: 700 }}>Wissyshop</div>
            <div style={{ fontSize: 22, opacity: 0.85 }}>en ligne</div>
          </div>
          <div style={{ fontSize: 38 }}>📞</div>
        </div>

        <div style={{ padding: 32, minHeight: 760, display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              opacity: bubbleIn,
              transform: `scale(${0.9 + bubbleIn * 0.1})`,
              transformOrigin: "top right",
              alignSelf: "flex-end",
              maxWidth: "86%",
              background: "#DCF8C6",
              borderRadius: 24,
              padding: 20,
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
              <ProductVisual size={180} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#1A1A1A" }}>
                  Gâteau enfant
                </div>
                <div style={{ fontSize: 22, color: "#3A3A3A", marginTop: 4 }}>
                  À retirer avant le 30/04
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "baseline", marginTop: 8 }}>
                  <div style={{ fontSize: 34, fontWeight: 800, color: BRAND.orangeDeep }}>
                    45,00 €
                  </div>
                  <div style={{ fontSize: 22, color: "#888", textDecoration: "line-through" }}>
                    60,00 €
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: 18,
                padding: "16px 20px",
                background: "rgba(255,255,255,0.7)",
                borderRadius: 14,
                borderLeft: "4px solid #25D366",
                fontSize: 22,
                color: "#1A1A1A",
              }}
            >
              🔗 wissyshop.com/product/…
            </div>
            <div
              style={{
                fontSize: 20,
                color: "#5A5A5A",
                marginTop: 12,
                textAlign: "right",
              }}
            >
              12:08 ✓✓
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const FacebookCard: React.FC<{ start: number }> = ({ start }) => {
  const { enter, exit, localFrame } = useCardAnimation(start);
  const opacity = enter * exit;
  const translateY = interpolate(enter, [0, 1], [80, 0]);

  const likePulse = 1 + Math.sin(localFrame / 5) * 0.1;

  return (
    <AbsoluteFill
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        fontFamily: "Poppins, system-ui, sans-serif",
        alignItems: "center",
        justifyContent: "center",
        padding: 60,
      }}
    >
      <div
        style={{
          width: 920,
          background: "white",
          borderRadius: 40,
          overflow: "hidden",
          boxShadow: "0 30px 70px rgba(0,0,0,0.18)",
        }}
      >
        <div
          style={{
            padding: "28px 32px",
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: 45,
              background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeDeep})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 800,
              color: "white",
            }}
          >
            W
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 34, fontWeight: 800, color: "#1C1E21" }}>
              Wissyshop Liège
            </div>
            <div style={{ fontSize: 22, color: "#65676B" }}>Il y a 2 min · 🌐</div>
          </div>
          <div style={{ fontSize: 32, color: "#65676B" }}>⋯</div>
        </div>

        <div
          style={{
            padding: "0 32px 24px",
            fontSize: 30,
            color: "#050505",
            lineHeight: 1.4,
          }}
        >
          🔥 Nouveau produit en promo chez Wissyshop !{"\n"}
          <span style={{ fontWeight: 700 }}>Gâteau enfant</span> à retirer en boutique 💝
        </div>

        <div
          style={{
            height: 560,
            background: "linear-gradient(135deg, #FFE8D6 0%, #FFCDA8 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <ProductVisual size={420} />
          <div
            style={{
              position: "absolute",
              bottom: 24,
              right: 24,
              background: "rgba(0,0,0,0.7)",
              color: "white",
              padding: "10px 20px",
              borderRadius: 12,
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            wissyshop.com
          </div>
        </div>

        <div
          style={{
            padding: "20px 32px",
            borderBottom: "1px solid #E4E6EB",
            background: "#F7F8FA",
          }}
        >
          <div style={{ fontSize: 22, color: "#65676B", marginBottom: 4 }}>
            Wissyshop · Promotion
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#050505" }}>
            45,00 €{" "}
            <span style={{ color: "#888", textDecoration: "line-through", fontWeight: 400 }}>
              60,00 €
            </span>
          </div>
          <div style={{ fontSize: 22, color: "#65676B", marginTop: 6 }}>
            Click & collect · Liège
          </div>
        </div>

        <div
          style={{
            padding: "20px 32px",
            display: "flex",
            justifyContent: "space-around",
            color: "#65676B",
            fontSize: 26,
            fontWeight: 600,
          }}
        >
          <div style={{ transform: `scale(${likePulse})` }}>👍 J'aime</div>
          <div>💬 Commenter</div>
          <div>↗️ Partager</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const InstagramCard: React.FC<{ start: number }> = ({ start }) => {
  const { enter, exit, localFrame } = useCardAnimation(start);
  const opacity = enter * exit;
  const translateY = interpolate(enter, [0, 1], [80, 0]);
  const heartPop = spring({
    frame: localFrame - 30,
    fps: 30,
    config: { damping: 8, stiffness: 200 },
  });

  return (
    <AbsoluteFill
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        fontFamily: "Poppins, system-ui, sans-serif",
        alignItems: "center",
        justifyContent: "center",
        padding: 60,
      }}
    >
      <div
        style={{
          width: 880,
          background: "white",
          borderRadius: 40,
          overflow: "hidden",
          boxShadow: "0 30px 70px rgba(0,0,0,0.18)",
        }}
      >
        <div
          style={{
            padding: "22px 28px",
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
              padding: 4,
              background:
                "conic-gradient(from 180deg, #F09433 0%, #E6683C 25%, #DC2743 50%, #CC2366 75%, #BC1888 100%)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 42,
                background: BRAND.orangeFrom,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 38,
                fontWeight: 800,
                color: "white",
                border: "3px solid white",
              }}
            >
              W
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 30, fontWeight: 700, color: "#262626" }}>
              wissyshop_liege
            </div>
            <div style={{ fontSize: 20, color: "#8E8E8E" }}>📍 Liège, Belgique</div>
          </div>
          <div style={{ fontSize: 32, color: "#262626" }}>⋯</div>
        </div>

        <div
          style={{
            width: 880,
            height: 880,
            background: "linear-gradient(135deg, #FFB88C 0%, #FE8A71 50%, #DE4E94 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <ProductVisual size={520} />
          <div
            style={{
              position: "absolute",
              top: 28,
              right: 28,
              background: "rgba(0,0,0,0.55)",
              color: "white",
              padding: "12px 22px",
              borderRadius: 999,
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            🏷️ PROMO -25 %
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 28,
              left: 28,
              right: 28,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                background: "rgba(0,0,0,0.6)",
                color: "white",
                padding: "16px 24px",
                borderRadius: 16,
                fontSize: 32,
                fontWeight: 800,
              }}
            >
              Gâteau enfant · 45 €
            </div>
            <div
              style={{
                transform: `scale(${heartPop})`,
                background: "rgba(255,255,255,0.95)",
                color: "#DC2743",
                padding: "12px 18px",
                borderRadius: 999,
                fontSize: 36,
              }}
            >
              ❤️
            </div>
          </div>
        </div>

        <div style={{ padding: "24px 28px", display: "flex", gap: 28, fontSize: 38 }}>
          <span>🤍</span>
          <span>💬</span>
          <span>✈️</span>
          <span style={{ marginLeft: "auto" }}>🔖</span>
        </div>

        <div style={{ padding: "0 28px 28px", fontSize: 24, color: "#262626" }}>
          <div style={{ fontWeight: 700 }}>128 j'aime</div>
          <div style={{ marginTop: 8, lineHeight: 1.4 }}>
            <span style={{ fontWeight: 700 }}>wissyshop_liege</span> Dispo en click & collect
            chez votre commerçant préféré 🛍️
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Header: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 14, stiffness: 140 } });

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        paddingTop: 80,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          opacity: enter,
          transform: `translateY(${(1 - enter) * 30}px)`,
          background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeTo})`,
          color: "white",
          borderRadius: 999,
          padding: "12px 28px",
          fontSize: 32,
          fontWeight: 700,
          letterSpacing: 0.5,
          textTransform: "uppercase",
          fontFamily: "Poppins, system-ui, sans-serif",
          boxShadow: "0 12px 28px rgba(242,107,42,0.35)",
          marginBottom: 14,
        }}
      >
        Étape 7
      </div>
      <div
        style={{
          opacity: enter,
          transform: `translateY(${(1 - enter) * 20}px)`,
          background: "rgba(255,255,255,0.95)",
          borderRadius: 28,
          padding: "20px 34px",
          fontSize: 54,
          fontWeight: 800,
          color: BRAND.navy,
          fontFamily: "Poppins, system-ui, sans-serif",
          boxShadow: "0 16px 40px rgba(26,26,46,0.15)",
          border: `3px solid ${BRAND.orangeFrom}`,
          textAlign: "center",
        }}
      >
        Partagez en 1 clic
      </div>
    </AbsoluteFill>
  );
};

export const SocialShares: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${BRAND.cream} 0%, #F3DFCF 100%)`,
      }}
    >
      <Sequence from={0} durationInFrames={CARD_DURATION}>
        <WhatsAppCard start={0} />
      </Sequence>
      <Sequence from={CARD_DURATION} durationInFrames={CARD_DURATION}>
        <FacebookCard start={0} />
      </Sequence>
      <Sequence from={CARD_DURATION * 2} durationInFrames={CARD_DURATION}>
        <InstagramCard start={0} />
      </Sequence>
      <Header />
    </AbsoluteFill>
  );
};

export const SOCIAL_SHARES_DURATION = CARD_DURATION * 3;
