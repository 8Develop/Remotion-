import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { PhoneSource } from "./PhoneSource";
import { MaskRect } from "./MaskRect";
import { BRAND } from "./theme";

type CaptionProps = {
  kicker: string;
  text: string;
  duration: number;
  accent?: string;
};

const Caption: React.FC<CaptionProps> = ({
  kicker,
  text,
  duration,
  accent = BRAND.orangeFrom,
}) => {
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
            background: `linear-gradient(135deg, ${accent}, ${BRAND.orangeTo})`,
            color: "white",
            borderRadius: 999,
            padding: "10px 24px",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 0.5,
            textTransform: "uppercase",
            boxShadow: `0 12px 28px ${accent}55`,
          }}
        >
          {kicker}
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
            border: `3px solid ${accent}`,
          }}
        >
          {text}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const FB_LEN = 90;
const CART_LEN = 60;
const SLOT_LEN = 90;

export const CLIENT_JOURNEY_DURATION = FB_LEN + CART_LEN + SLOT_LEN;

export const ClientJourneyVideo: React.FC = () => {
  let t = 0;

  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.cream }}>
      <Sequence from={t} durationInFrames={FB_LEN}>
        <AbsoluteFill style={{ backgroundColor: BRAND.cream }}>
          <PhoneSource
            src="wissyshop-3.mp4"
            startFromSeconds={0}
            endAtSeconds={FB_LEN / 30}
            cropTop={180}
            cropBottom={140}
            zoom={1.02}
            muted
          >
            <MaskRect
              x={270}
              y={1030}
              width={560}
              height={60}
              label="Publié par Wissyshop Liège"
              background="#FFFFFF"
              labelColor={BRAND.navySoft}
              border="none"
              borderRadius={8}
              fontSize={34}
              fontWeight={600}
              boxShadow="none"
              fadeInFrames={1}
            />
          </PhoneSource>
          <Caption
            kicker="Étape 8"
            text="Votre client voit votre publication"
            duration={FB_LEN}
          />
        </AbsoluteFill>
      </Sequence>

      <Sequence from={(t += FB_LEN)} durationInFrames={CART_LEN}>
        <AbsoluteFill style={{ backgroundColor: BRAND.cream }}>
          <PhoneSource
            src="wissyshop-3.mp4"
            startFromSeconds={10.2}
            endAtSeconds={10.2 + CART_LEN / 30}
            cropTop={180}
            cropBottom={140}
            zoom={1.02}
            muted
          >
            <MaskRect
              x={140}
              y={680}
              width={620}
              height={60}
              label="Wissyshop Liège"
              background="#FBF3F0"
              labelColor={BRAND.navySoft}
              border="none"
              borderRadius={8}
              fontSize={34}
              fontWeight={600}
              boxShadow="none"
              fadeInFrames={1}
            />
          </PhoneSource>
          <Caption
            kicker="Étape 8"
            text="Il ajoute au panier et commande"
            duration={CART_LEN}
          />
        </AbsoluteFill>
      </Sequence>

      <Sequence from={(t += CART_LEN)} durationInFrames={SLOT_LEN}>
        <AbsoluteFill style={{ backgroundColor: BRAND.cream }}>
          <PhoneSource
            src="wissyshop-3.mp4"
            startFromSeconds={13}
            endAtSeconds={13 + SLOT_LEN / 30}
            cropTop={180}
            cropBottom={140}
            zoom={1.02}
            muted
          />
          <Caption
            kicker="Étape 8"
            text="Et choisit son créneau de retrait"
            duration={SLOT_LEN}
          />
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
