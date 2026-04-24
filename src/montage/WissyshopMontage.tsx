import { AbsoluteFill } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { loadFont } from "@remotion/google-fonts/Poppins";
import { Intro } from "./Intro";
import { Outro } from "./Outro";
import { HeroAnimation, HERO_ANIMATION_DURATION } from "./HeroAnimation";
import { SocialShares, SOCIAL_SHARES_DURATION } from "./SocialShares";
import { PhotoPickerStep, PHOTO_PICKER_DURATION } from "./PhotoPickerStep";
import { LoginAnimation, LOGIN_ANIMATION_DURATION } from "./LoginAnimation";
import {
  DashboardAnimation,
  DASHBOARD_DURATION,
} from "./DashboardAnimation";
import {
  ProductFormAnimation,
  PRODUCT_FORM_DURATION,
} from "./ProductFormAnimation";
import { PricingAnimation, PRICING_DURATION } from "./PricingAnimation";
import {
  ProductCreatedAnimation,
  PRODUCT_CREATED_DURATION,
} from "./ProductCreatedAnimation";
import {
  ClientJourneyAnimation,
  CLIENT_JOURNEY_ANIMATION_DURATION,
} from "./ClientJourneyAnimation";
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

        <TransitionSeries.Sequence durationInFrames={HERO_ANIMATION_DURATION}>
          <HeroAnimation />
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

        <TransitionSeries.Sequence durationInFrames={DASHBOARD_DURATION}>
          <DashboardAnimation />
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

        <TransitionSeries.Sequence durationInFrames={PRODUCT_FORM_DURATION}>
          <ProductFormAnimation />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 10 })}
        />

        <TransitionSeries.Sequence durationInFrames={PRICING_DURATION}>
          <PricingAnimation />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 12 })}
        />

        <TransitionSeries.Sequence durationInFrames={PRODUCT_CREATED_DURATION}>
          <ProductCreatedAnimation />
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

        <TransitionSeries.Sequence durationInFrames={CLIENT_JOURNEY_ANIMATION_DURATION}>
          <ClientJourneyAnimation />
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
  HERO_ANIMATION_DURATION +
  LOGIN_ANIMATION_DURATION +
  DASHBOARD_DURATION +
  PHOTO_PICKER_DURATION +
  PRODUCT_FORM_DURATION +
  PRICING_DURATION +
  PRODUCT_CREATED_DURATION +
  SOCIAL_SHARES_DURATION +
  CLIENT_JOURNEY_ANIMATION_DURATION +
  d(4) +
  d(5) +
  d(3) +
  d(5);
const TRANSITION_FRAMES =
  10 + 12 + 10 + 12 + 10 + 10 + 12 + 10 + 10 + 12 + 10 + 10 + 14;
export const MONTAGE_TOTAL_FRAMES = SEQUENCE_FRAMES - TRANSITION_FRAMES;
