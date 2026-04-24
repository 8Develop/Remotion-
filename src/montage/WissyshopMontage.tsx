import { AbsoluteFill } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { loadFont } from "@remotion/google-fonts/Poppins";
import { Intro } from "./Intro";
import { Outro } from "./Outro";
import { PhoneSource } from "./PhoneSource";
import { MaskRect } from "./MaskRect";
import { SceneTitle } from "./SceneTitle";
import { BRAND, FPS } from "./theme";

loadFont();

const d = (seconds: number) => Math.round(seconds * FPS);

export const WissyshopMontage: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.cream }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={d(3)}>
          <Intro />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 10 })}
        />

        <TransitionSeries.Sequence durationInFrames={d(3)}>
          <AbsoluteFill style={{ backgroundColor: BRAND.cream }}>
            <PhoneSource
              src="wissyshop-1.mp4"
              startFromSeconds={0}
              endAtSeconds={4}
              cropTop={180}
              cropBottom={140}
              zoom={1.08}
              muted
            />
            <SceneTitle
              kicker="Étape 1"
              title="Click & collect à Liège"
              subtitle="La marketplace locale, sans file d'attente"
              position="bottom"
            />
          </AbsoluteFill>
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 12 })}
        />

        <TransitionSeries.Sequence durationInFrames={d(10)}>
          <AbsoluteFill style={{ backgroundColor: BRAND.cream }}>
            <PhoneSource
              src="wissyshop-1.mp4"
              startFromSeconds={4}
              endAtSeconds={14}
              cropTop={180}
              cropBottom={140}
              zoom={1.04}
              muted
            >
              <MaskRect
                x={80}
                y={580}
                width={1020}
                height={230}
                label="•  demo@wissyshop.com"
                background="#FFFFFF"
                border="3px solid #F26B2A"
                borderRadius={32}
                fontSize={58}
                fontWeight={600}
              />
              <MaskRect
                x={0}
                y={1520}
                width={1180}
                height={290}
                label="•  Saisie sécurisée"
                background="#E5E7EB"
                labelColor="#1A1A2E"
                border="none"
                borderRadius={0}
                fontSize={60}
                fontWeight={700}
                boxShadow="0 -4px 12px rgba(0,0,0,0.08)"
              />
            </PhoneSource>
            <SceneTitle
              kicker="Étape 2"
              title="Connexion commerçant"
              subtitle="Accédez à votre espace en un clic"
              position="bottom"
            />
          </AbsoluteFill>
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 10 })}
        />

        <TransitionSeries.Sequence durationInFrames={d(6)}>
          <AbsoluteFill style={{ backgroundColor: BRAND.cream }}>
            <PhoneSource
              src="wissyshop-1.mp4"
              startFromSeconds={42}
              endAtSeconds={48}
              cropTop={180}
              cropBottom={140}
              zoom={1.0}
              muted
            />
            <SceneTitle
              kicker="Étape 3"
              title="Votre tableau de bord"
              subtitle="Tous vos produits, en un coup d'œil"
              position="bottom"
            />
          </AbsoluteFill>
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 12 })}
        />

        <TransitionSeries.Sequence durationInFrames={d(16)}>
          <AbsoluteFill style={{ backgroundColor: BRAND.cream }}>
            <PhoneSource
              src="wissyshop-1.mp4"
              startFromSeconds={65}
              endAtSeconds={81}
              cropTop={180}
              cropBottom={140}
              zoom={1.02}
              muted
            />
            <SceneTitle
              kicker="Étape 4"
              title="Ajoutez un produit"
              subtitle="Nom, description, photo…"
              position="bottom"
            />
          </AbsoluteFill>
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 10 })}
        />

        <TransitionSeries.Sequence durationInFrames={d(10)}>
          <AbsoluteFill style={{ backgroundColor: BRAND.cream }}>
            <PhoneSource
              src="wissyshop-1.mp4"
              startFromSeconds={85}
              endAtSeconds={95}
              cropTop={180}
              cropBottom={140}
              zoom={1.02}
              muted
            />
            <SceneTitle
              kicker="Étape 5"
              title="Prix, stock, date limite"
              subtitle="Le calcul du prix final se fait tout seul"
              position="bottom"
            />
          </AbsoluteFill>
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 12 })}
        />

        <TransitionSeries.Sequence durationInFrames={d(5)}>
          <AbsoluteFill style={{ backgroundColor: BRAND.cream }}>
            <PhoneSource
              src="wissyshop-1.mp4"
              startFromSeconds={104}
              endAtSeconds={109}
              cropTop={180}
              cropBottom={140}
              zoom={1.04}
              muted
            />
            <SceneTitle
              kicker="Étape 6"
              title="Produit créé ✓"
              subtitle="Visible immédiatement par vos clients"
              position="bottom"
            />
          </AbsoluteFill>
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 10 })}
        />

        <TransitionSeries.Sequence durationInFrames={d(6)}>
          <AbsoluteFill style={{ backgroundColor: BRAND.cream }}>
            <PhoneSource
              src="wissyshop-2.mp4"
              startFromSeconds={0}
              endAtSeconds={6}
              cropTop={180}
              cropBottom={140}
              zoom={1.02}
              muted
            />
            <SceneTitle
              kicker="Étape 7"
              title="Votre boutique en ligne"
              subtitle="Prête pour vos premiers clients locaux"
              position="bottom"
            />
          </AbsoluteFill>
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 14 })}
        />

        <TransitionSeries.Sequence durationInFrames={d(5)}>
          <Outro />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

const SEQUENCE_FRAMES =
  d(3) + d(3) + d(10) + d(6) + d(16) + d(10) + d(5) + d(6) + d(5);
const TRANSITION_FRAMES = 10 + 12 + 10 + 12 + 10 + 12 + 10 + 14;
export const MONTAGE_TOTAL_FRAMES = SEQUENCE_FRAMES - TRANSITION_FRAMES;
