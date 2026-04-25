import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BRAND } from "./theme";

const StepBadge: React.FC<{ label: string; accent?: string }> = ({
  label,
  accent = BRAND.orangeFrom,
}) => {
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
        justifyContent: "flex-start",
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
          background: `linear-gradient(135deg, ${accent}, ${BRAND.orangeTo})`,
          color: "white",
          borderRadius: 999,
          padding: "12px 28px",
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: 0.5,
          textTransform: "uppercase",
          boxShadow: `0 12px 28px ${accent}55`,
          marginBottom: 12,
        }}
      >
        Étape 8
      </div>
      <div
        style={{
          opacity: enter,
          transform: `translateY(${(1 - enter) * 20}px)`,
          background: "rgba(255,255,255,0.95)",
          color: BRAND.navy,
          borderRadius: 24,
          padding: "18px 30px",
          fontSize: 48,
          fontWeight: 800,
          boxShadow: "0 14px 36px rgba(26,26,46,0.15)",
          border: `3px solid ${accent}`,
          textAlign: "center",
          maxWidth: 960,
          lineHeight: 1.1,
        }}
      >
        {label}
      </div>
    </AbsoluteFill>
  );
};

export const PaymentSuccess: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardIn = spring({
    frame: frame - 6,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const checkIn = spring({
    frame: frame - 22,
    fps,
    config: { damping: 8, stiffness: 200 },
  });
  const amountIn = spring({
    frame: frame - 34,
    fps,
    config: { damping: 13, stiffness: 130 },
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${BRAND.cream} 0%, #F3DFCF 100%)`,
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins, system-ui, sans-serif",
      }}
    >
      <StepBadge label="Paiement en ligne sécurisé" />

      <div
        style={{
          opacity: cardIn,
          transform: `translateY(${(1 - cardIn) * 80}px) scale(${0.92 + cardIn * 0.08})`,
          background: "#FFFFFF",
          borderRadius: 48,
          padding: 60,
          width: 820,
          boxShadow: "0 30px 70px rgba(0,0,0,0.18)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 32,
          marginTop: 120,
        }}
      >
        <div
          style={{
            transform: `scale(${checkIn})`,
            width: 200,
            height: 200,
            borderRadius: 100,
            background: "linear-gradient(135deg, #34D399 0%, #059669 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 120,
            color: "white",
            boxShadow: "0 20px 40px rgba(5, 150, 105, 0.35)",
          }}
        >
          ✓
        </div>

        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: BRAND.navy,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Paiement validé
        </div>

        <div
          style={{
            opacity: amountIn,
            transform: `translateY(${(1 - amountIn) * 20}px)`,
            background: BRAND.cream,
            borderRadius: 24,
            padding: "28px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            border: `3px solid ${BRAND.orangeFrom}`,
          }}
        >
          <div style={{ fontSize: 28, color: BRAND.gray, fontWeight: 600 }}>
            Montant
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 900,
              color: BRAND.orangeDeep,
              lineHeight: 1,
              letterSpacing: -2,
            }}
          >
            45,00 €
          </div>
          <div
            style={{
              marginTop: 6,
              fontSize: 26,
              color: BRAND.navySoft,
              fontWeight: 600,
            }}
          >
            via Bancontact · Visa · Mastercard
          </div>
        </div>

        <div
          style={{
            opacity: amountIn,
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: BRAND.mintText,
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <span>🔒</span>
          <span>Paiement 100 % sécurisé</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const MerchantReceives: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const notifIn = spring({
    frame: frame - 4,
    fps,
    config: { damping: 12, stiffness: 140 },
  });
  const orderIn = spring({
    frame: frame - 24,
    fps,
    config: { damping: 14, stiffness: 130 },
  });
  const moneyIn = spring({
    frame: frame - 44,
    fps,
    config: { damping: 14, stiffness: 130 },
  });
  const pulse = 1 + Math.sin(frame / 7) * 0.03;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${BRAND.cream} 0%, #F3DFCF 100%)`,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 300,
        fontFamily: "Poppins, system-ui, sans-serif",
        gap: 26,
      }}
    >
      <StepBadge label="Vous recevez l'argent directement" />

      <div
        style={{
          opacity: notifIn,
          transform: `translateY(${(1 - notifIn) * 60}px) scale(${pulse})`,
          width: 880,
          background: "#1A1A2E",
          color: "white",
          borderRadius: 32,
          padding: "24px 32px",
          display: "flex",
          alignItems: "center",
          gap: 20,
          boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeDeep})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 44,
          }}
        >
          🔔
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 30, fontWeight: 800 }}>Wissyshop</div>
          <div style={{ fontSize: 26, opacity: 0.9 }}>
            Nouvelle commande payée !
          </div>
        </div>
        <div style={{ fontSize: 22, opacity: 0.7 }}>maintenant</div>
      </div>

      <div
        style={{
          opacity: orderIn,
          transform: `translateY(${(1 - orderIn) * 50}px)`,
          width: 880,
          background: "#FFFFFF",
          borderRadius: 32,
          padding: 30,
          boxShadow: "0 20px 48px rgba(26,26,46,0.14)",
          border: "2px solid #FFE1CF",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 22,
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 130,
              height: 130,
              borderRadius: 20,
              background:
                "linear-gradient(145deg, #FFE0C7 0%, #FFC89B 40%, #FFA36C 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 80,
              boxShadow: "0 8px 20px rgba(242, 107, 42, 0.2)",
            }}
          >
            🎂
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{ fontSize: 38, fontWeight: 800, color: BRAND.navy }}
            >
              Gâteau enfant
            </div>
            <div style={{ fontSize: 26, color: BRAND.gray, marginTop: 4 }}>
              Retrait vendredi 24 avr. · 08:00–18:00
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            paddingTop: 18,
            borderTop: "1px solid #F0E4D9",
          }}
        >
          <div>
            <div style={{ fontSize: 22, color: BRAND.gray }}>Client</div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: BRAND.navy,
              }}
            >
              Camille D.
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 22, color: BRAND.gray }}>Total payé</div>
            <div
              style={{
                fontSize: 34,
                fontWeight: 800,
                color: BRAND.orangeDeep,
              }}
            >
              45,00 €
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          opacity: moneyIn,
          transform: `translateY(${(1 - moneyIn) * 40}px)`,
          width: 880,
          background: "#FFFFFF",
          border: "2px solid #F4E6D9",
          borderRadius: 32,
          padding: "20px 28px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          fontFamily: "Poppins, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: BRAND.gray,
            fontWeight: 600,
          }}
        >
          <span>Total payé par le client</span>
          <span style={{ color: BRAND.navy, fontWeight: 700 }}>45,00 €</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: BRAND.gray,
            fontWeight: 500,
          }}
        >
          <span>− Commission Wissyshop (5 %)</span>
          <span>− 2,25 €</span>
        </div>
        <div
          style={{
            height: 2,
            background: "#F0E4D9",
            margin: "4px 0",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 32,
            color: BRAND.navy,
            fontWeight: 800,
          }}
        >
          <span>Vous recevez</span>
          <span style={{ color: BRAND.mintText, fontSize: 38, fontWeight: 900 }}>
            42,75 €
          </span>
        </div>
      </div>

      <div
        style={{
          opacity: moneyIn,
          transform: `translateY(${(1 - moneyIn) * 40}px)`,
          width: 880,
          background: `linear-gradient(135deg, #D4F0E0 0%, #A7E3C2 100%)`,
          border: `3px solid ${BRAND.mintText}`,
          borderRadius: 32,
          padding: "20px 28px",
          display: "flex",
          alignItems: "center",
          gap: 18,
          marginTop: 4,
        }}
      >
        <div
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            background: BRAND.mintText,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 36,
          }}
        >
          💶
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 26, color: BRAND.navy, fontWeight: 700 }}>
            + 42,75 € sur votre compte
          </div>
          <div
            style={{
              fontSize: 24,
              color: BRAND.mintText,
              fontWeight: 700,
              marginTop: 2,
            }}
          >
            Virement direct · sans intermédiaire
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const MerchantPrepare: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleIn = spring({
    frame,
    fps,
    config: { damping: 13, stiffness: 130 },
  });
  const stepsIn = spring({
    frame: frame - 14,
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, ${BRAND.orangeFrom} 0%, ${BRAND.orangeDeep} 100%)`,
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins, system-ui, sans-serif",
        color: "white",
        padding: 80,
      }}
    >
      <div
        style={{
          opacity: titleIn,
          transform: `scale(${0.92 + titleIn * 0.08})`,
          fontSize: 80,
          fontWeight: 900,
          lineHeight: 1,
          textAlign: "center",
          letterSpacing: -2,
          marginBottom: 40,
        }}
      >
        Plus qu'à
        <br />
        <span
          style={{
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #FFE8D6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          préparer la commande
        </span>{" "}
        🎂
      </div>

      <div
        style={{
          opacity: stepsIn,
          transform: `translateY(${(1 - stepsIn) * 40}px)`,
          display: "flex",
          flexDirection: "column",
          gap: 18,
          width: 820,
        }}
      >
        {[
          { icon: "✅", text: "Client notifié, créneau réservé" },
          { icon: "💶", text: "Paiement déjà sur votre compte" },
          { icon: "🛍️", text: "Vous n'avez plus qu'à l'emballer" },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(255,255,255,0.25)",
              borderRadius: 22,
              padding: "20px 28px",
              display: "flex",
              alignItems: "center",
              gap: 22,
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            <span style={{ fontSize: 46 }}>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
