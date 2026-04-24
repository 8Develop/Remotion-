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

export const LOGIN_ANIMATION_DURATION = 90;

const EMAIL = "demo@wissyshop.com";
const PASSWORD_LENGTH = 10;

export const LoginAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardIn = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 140 },
  });

  const emailCharsRevealed = Math.min(
    EMAIL.length,
    Math.max(0, Math.floor((frame - 8) * 0.9)),
  );
  const typedEmail = EMAIL.slice(0, emailCharsRevealed);
  const emailDone = emailCharsRevealed >= EMAIL.length;

  const passwordStart = 35;
  const passwordChars = emailDone
    ? Math.min(
        PASSWORD_LENGTH,
        Math.max(0, Math.floor((frame - passwordStart) * 0.8)),
      )
    : 0;

  const buttonStart = passwordStart + 15;
  const buttonPulse = emailDone
    ? 1 + Math.sin(Math.max(0, frame - buttonStart) / 5) * 0.04
    : 1;

  const successStart = 68;
  const successIn = spring({
    frame: frame - successStart,
    fps,
    config: { damping: 10, stiffness: 180 },
  });
  const checkPop = spring({
    frame: frame - successStart - 4,
    fps,
    config: { damping: 7, stiffness: 220 },
  });
  const showSuccess = frame >= successStart;

  const cursorBlink = Math.floor(frame / 8) % 2 === 0 ? 1 : 0;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 50% 30%, #FFE8D6 0%, ${BRAND.cream} 60%, #F3DFCF 100%)`,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins, system-ui, sans-serif",
      }}
    >
      {[...Array(6)].map((_, i) => {
        const a = (i / 6) * Math.PI * 2;
        const r = 420;
        const t = (frame - i * 4) / fps;
        const offset = Math.sin(t * 1.2) * 30;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 14,
              height: 14,
              borderRadius: 7,
              background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeTo})`,
              left: 540 + Math.cos(a) * (r + offset) - 7,
              top: 960 + Math.sin(a) * (r + offset) - 7,
              opacity: 0.45,
            }}
          />
        );
      })}

      <div
        style={{
          opacity: cardIn,
          transform: `translateY(${(1 - cardIn) * 60}px) scale(${0.94 + cardIn * 0.06})`,
          width: 880,
          background: "#FFFFFF",
          borderRadius: 48,
          padding: "48px 44px",
          boxShadow: "0 30px 70px rgba(26, 26, 46, 0.18)",
          border: `3px solid ${BRAND.cream}`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 24,
          }}
        >
          <WissyLogo height={120} />
        </div>

        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
            color: BRAND.gray,
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          Accédez à votre espace
        </div>

        <div style={{ marginBottom: 24 }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: BRAND.navy,
              marginBottom: 8,
            }}
          >
            Email
          </div>
          <div
            style={{
              background: BRAND.cream,
              border: `3px solid ${emailDone ? BRAND.mintText : BRAND.orangeFrom}`,
              borderRadius: 20,
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 32,
              color: BRAND.navy,
              fontWeight: 600,
              minHeight: 40,
            }}
          >
            <span style={{ fontSize: 28 }}>✉️</span>
            <span>{typedEmail}</span>
            {!emailDone && frame > 4 ? (
              <span
                style={{
                  opacity: cursorBlink,
                  width: 3,
                  height: 34,
                  background: BRAND.orangeFrom,
                  display: "inline-block",
                }}
              />
            ) : null}
            {emailDone ? (
              <span style={{ marginLeft: "auto", color: BRAND.mintText, fontSize: 32 }}>
                ✓
              </span>
            ) : null}
          </div>
        </div>

        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: BRAND.navy,
              marginBottom: 8,
            }}
          >
            Mot de passe
          </div>
          <div
            style={{
              background: BRAND.cream,
              border: `3px solid ${
                passwordChars >= PASSWORD_LENGTH
                  ? BRAND.mintText
                  : passwordChars > 0
                  ? BRAND.orangeFrom
                  : "#E8D7C6"
              }`,
              borderRadius: 20,
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 32,
              color: BRAND.navy,
              fontWeight: 700,
              minHeight: 40,
              letterSpacing: 4,
            }}
          >
            <span style={{ fontSize: 28 }}>🔒</span>
            <span>{"●".repeat(passwordChars)}</span>
            {passwordChars >= PASSWORD_LENGTH ? (
              <span style={{ marginLeft: "auto", color: BRAND.mintText, fontSize: 32 }}>
                ✓
              </span>
            ) : null}
          </div>
        </div>

        <div
          style={{
            background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeDeep})`,
            color: "white",
            borderRadius: 20,
            padding: "22px 28px",
            textAlign: "center",
            fontSize: 34,
            fontWeight: 800,
            transform: `scale(${buttonPulse})`,
            boxShadow: "0 14px 30px rgba(242, 107, 42, 0.35)",
          }}
        >
          Se connecter →
        </div>
      </div>

      {showSuccess ? (
        <AbsoluteFill
          style={{
            background: "rgba(255, 255, 255, 0.72)",
            backdropFilter: "blur(6px)",
            alignItems: "center",
            justifyContent: "center",
            opacity: successIn,
          }}
        >
          <div
            style={{
              transform: `scale(${checkPop})`,
              width: 240,
              height: 240,
              borderRadius: 120,
              background: `linear-gradient(135deg, #34D399 0%, #059669 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 150,
              color: "white",
              boxShadow: "0 24px 48px rgba(5, 150, 105, 0.4)",
              marginBottom: 28,
            }}
          >
            ✓
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: BRAND.navy,
              textAlign: "center",
            }}
          >
            Bienvenue !
          </div>
        </AbsoluteFill>
      ) : null}

      <SceneTitle
        kicker="Étape 2"
        title="Connexion commerçant"
        subtitle="En un clic, sans friction"
        position="bottom"
      />
    </AbsoluteFill>
  );
};
