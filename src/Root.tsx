import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import {
  WissyshopMontage,
  MONTAGE_TOTAL_FRAMES,
} from "./montage/WissyshopMontage";
import { COMP } from "./montage/theme";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="WissyshopMontage"
        component={WissyshopMontage}
        durationInFrames={MONTAGE_TOTAL_FRAMES}
        fps={COMP.fps}
        width={COMP.width}
        height={COMP.height}
      />
      <Composition
        id="HelloWorld"
        component={MyComposition}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          titleText: "Bienvenue sur Remotion",
          subtitleText: "Créez des vidéos avec React",
        }}
      />
    </>
  );
};
