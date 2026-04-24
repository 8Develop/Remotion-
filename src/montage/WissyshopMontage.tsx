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
import { SocialShares, SOCIAL_SHARES_DURATION } from "./SocialShares";
import { PhotoPickerStep, PHOTO_PICKER_DURATION } from "./PhotoPickerStep";
import { FormWithCakeReveal } from "./FormWithCakeReveal";
import { FlexibleBadge } from "./FlexibleBadge";
import { LoginAnimation, LOGIN_ANIMATION_DURATION } from "./LoginAnimation";
import {
  ClientJourneyVideo,
  CLIENT_JOURNEY_DURATION,
} from "./ClientJourneyVideo";
import {
  PaymentSuccess,
  MerchantReceives,
  MerchantPrepare,
} from "./PaymentAndMerchant";
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

        <TransitionSeries.Sequence durationInFrames={LOGIN_ANIMATION_DURATION}>
          <LoginAnimation />
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

        <TransitionSeries.Sequence durationInFrames={PHOTO_PICKER_DURATION}>
          <PhotoPickerStep />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 10 })}
        />

        <TransitionSeries.Sequence durationInFrames={d(14)}>
          <FormWithCakeReveal durationInFrames={d(14)} />
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
            >
              <MaskRect
                x={-40}
                y={1400}
                width={1260}
                height={1200}
                label=""
                background={BRAND.cream}
                border="none"
                borderRadius={0}
                boxShadow="none"
                fadeInFrames={1}
              />
            </PhoneSource>
            <SceneTitle
              kicker="Étape 5"
              title="Vous choisissez date & créneau"
              subtitle="100 % flexible — vos horaires, votre rythme"
              position="bottom"
            />
            <FlexibleBadge />
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

        <TransitionSeries.Sequence durationInFrames={SOCIAL_SHARES_DURATION}>
          <SocialShares />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 10 })}
        />

        <TransitionSeries.Sequence durationInFrames={CLIENT_JOURNEY_DURATION}>
          <ClientJourneyVideo />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 10 })}
        />

        <TransitionSeries.Sequence durationInFrames={d(4)}>
          <PaymentSuccess />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 12 })}
        />

        <TransitionSeries.Sequence durationInFrames={d(5)}>
          <MerchantReceives />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 10 })}
        />

        <TransitionSeries.Sequence durationInFrames={d(3)}>
          <MerchantPrepare />
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
  d(3) +
  d(3) +
  LOGIN_ANIMATION_DURATION +
  d(6) +
  PHOTO_PICKER_DURATION +
  d(14) +
  d(10) +
  d(5) +
  SOCIAL_SHARES_DURATION +
  CLIENT_JOURNEY_DURATION +
  d(4) +
  d(5) +
  d(3) +
  d(5);
const TRANSITION_FRAMES =
  10 + 12 + 10 + 12 + 10 + 10 + 12 + 10 + 10 + 12 + 10 + 10 + 14;
export const MONTAGE_TOTAL_FRAMES = SEQUENCE_FRAMES - TRANSITION_FRAMES;
