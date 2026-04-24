import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BRAND } from "./theme";
import { SceneTitle } from "./SceneTitle";

export const PRODUCT_FORM_DURATION = 420;

const NAME_TEXT = "Gâteau enfant";
const DESCRIPTION_TEXT = "Gâteau 10 personnes licorne 🦄";

const FieldLabel: React.FC<{ text: string }> = ({ text }) => (
  <div
    style={{
      fontSize: 24,
      fontWeight: 700,
      color: BRAND.navy,
      marginBottom: 8,
      fontFamily: "Poppins, system-ui, sans-serif",
    }}
  >
    {text} <span style={{ color: BRAND.orangeDeep }}>*</span>
  </div>
);

export const ProductFormAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const photoIn = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const badgeIn = interpolate(frame, [15, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const badgeOut = interpolate(frame, [85, 105], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const NAME_START = 60;
  const nameCharCount = Math.min(
    NAME_TEXT.length,
    Math.max(0, Math.floor((frame - NAME_START) * 0.35)),
  );
  const typedName = NAME_TEXT.slice(0, nameCharCount);
  const nameDone = nameCharCount >= NAME_TEXT.length;

  const TYPE_START = 165;
  const typeIn = spring({
    frame: frame - TYPE_START,
    fps,
    config: { damping: 14, stiffness: 140 },
  });

  const DESC_START = 210;
  const descCharCount = Math.min(
    DESCRIPTION_TEXT.length,
    Math.max(0, Math.floor((frame - DESC_START) * 0.35)),
  );
  const typedDesc = DESCRIPTION_TEXT.slice(0, descCharCount);
  const descDone = descCharCount >= DESCRIPTION_TEXT.length;

  const cursorBlink = Math.floor(frame / 8) % 2 === 0 ? 1 : 0;
  const activeField = nameDone ? (descDone ? null : "description") : "name";

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${BRAND.cream} 0%, #F3DFCF 100%)`,
        padding: 60,
        paddingTop: 90,
        fontFamily: "Poppins, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: 40,
          padding: 34,
          boxShadow: "0 22px 50px rgba(26,26,46,0.14)",
          border: "2px solid #F4E6D9",
        }}
      >
        <div
          style={{
            position: "relative",
            opacity: photoIn,
            transform: `scale(${0.95 + photoIn * 0.05})`,
            height: 420,
            borderRadius: 28,
            background:
              "linear-gradient(135deg, #FFD1DA 0%, #FFA5C1 50%, #D985E0 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 24,
            overflow: "hidden",
          }}
        >
          <div style={{ fontSize: 260, lineHeight: 1 }}>🎂</div>
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              background: "#FFFFFF",
              color: BRAND.orangeDeep,
              fontWeight: 800,
              fontSize: 22,
              padding: "8px 18px",
              borderRadius: 999,
            }}
          >
            📷 Photo ajoutée
          </div>
          <div
            style={{
              position: "absolute",
              top: 30,
              right: 40,
              fontSize: 58,
              transform: `rotate(${Math.sin(frame / 12) * 10}deg)`,
            }}
          >
            ✨
          </div>
          <div
            style={{
              opacity: badgeIn * badgeOut,
              transform: `translateY(${(1 - badgeIn) * 40}px)`,
              position: "absolute",
              bottom: 20,
              right: 20,
              background: BRAND.mintText,
              color: "white",
              borderRadius: 999,
              padding: "10px 22px",
              fontSize: 22,
              fontWeight: 800,
              boxShadow: "0 10px 22px rgba(5, 150, 105, 0.4)",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span>✓</span>
            <span>Uploadée</span>
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <FieldLabel text="Nom" />
          <div
            style={{
              border: `3px solid ${
                activeField === "name"
                  ? BRAND.orangeFrom
                  : nameDone
                  ? BRAND.mintText
                  : "#E8D7C6"
              }`,
              borderRadius: 18,
              padding: "18px 20px",
              fontSize: 30,
              color: BRAND.navy,
              fontWeight: 700,
              minHeight: 38,
              display: "flex",
              alignItems: "center",
              background: BRAND.cream,
            }}
          >
            <span>{typedName}</span>
            {activeField === "name" ? (
              <span
                style={{
                  opacity: cursorBlink,
                  width: 3,
                  height: 32,
                  background: BRAND.orangeFrom,
                  display: "inline-block",
                  marginLeft: 4,
                }}
              />
            ) : null}
            {nameDone ? (
              <span
                style={{
                  marginLeft: "auto",
                  color: BRAND.mintText,
                  fontSize: 30,
                }}
              >
                ✓
              </span>
            ) : null}
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <FieldLabel text="Type" />
          <div
            style={{
              border: `3px solid ${
                typeIn > 0.95 ? BRAND.mintText : "#E8D7C6"
              }`,
              borderRadius: 18,
              padding: "18px 20px",
              fontSize: 26,
              color: BRAND.navy,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: BRAND.cream,
              opacity: typeIn,
              transform: `translateY(${(1 - typeIn) * 20}px)`,
            }}
          >
            <span>Nouveauté</span>
            <span style={{ color: BRAND.gray }}>▾</span>
          </div>
        </div>

        <div>
          <FieldLabel text="Description" />
          <div
            style={{
              border: `3px solid ${
                activeField === "description"
                  ? BRAND.orangeFrom
                  : descDone
                  ? BRAND.mintText
                  : "#E8D7C6"
              }`,
              borderRadius: 18,
              padding: "18px 20px",
              fontSize: 26,
              color: BRAND.navy,
              fontWeight: 600,
              minHeight: 100,
              background: BRAND.cream,
              opacity: frame >= DESC_START - 10 ? 1 : 0.5,
            }}
          >
            <span>{typedDesc}</span>
            {activeField === "description" ? (
              <span
                style={{
                  opacity: cursorBlink,
                  width: 3,
                  height: 28,
                  background: BRAND.orangeFrom,
                  display: "inline-block",
                  marginLeft: 4,
                  verticalAlign: "middle",
                }}
              />
            ) : null}
          </div>
        </div>
      </div>

      <SceneTitle
        kicker="Étape 4"
        title="Remplissez les détails"
        subtitle="Nom, type, description…"
        position="bottom"
      />
    </AbsoluteFill>
  );
};
