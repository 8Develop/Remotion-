import { AbsoluteFill, OffthreadVideo, staticFile } from "remotion";
import { COMP, SOURCE } from "./theme";

type Props = {
  src: string;
  startFromSeconds: number;
  endAtSeconds: number;
  cropTop?: number;
  cropBottom?: number;
  zoom?: number;
  panY?: number;
  panX?: number;
  muted?: boolean;
  volume?: number;
  children?: React.ReactNode;
};

export const PhoneSource: React.FC<Props> = ({
  src,
  startFromSeconds,
  endAtSeconds,
  cropTop = 180,
  cropBottom = 140,
  zoom = 1,
  panY = 0,
  panX = 0,
  muted = false,
  volume = 1,
  children,
}) => {
  const cropHeight = SOURCE.height - cropTop - cropBottom;
  const cropRatio = SOURCE.width / cropHeight;
  const compRatio = COMP.width / COMP.height;

  let visibleW: number;
  let visibleH: number;
  if (cropRatio > compRatio) {
    visibleH = COMP.height;
    visibleW = visibleH * cropRatio;
  } else {
    visibleW = COMP.width;
    visibleH = visibleW / cropRatio;
  }

  const finalW = visibleW * zoom;
  const finalH = visibleH * zoom;

  const scale = finalH / cropHeight;

  const left = (COMP.width - finalW) / 2 + panX;
  const top = (COMP.height - finalH) / 2 + panY;

  return (
    <AbsoluteFill style={{ overflow: "hidden", backgroundColor: "#111" }}>
      <div
        style={{
          position: "absolute",
          left,
          top,
          width: finalW,
          height: finalH,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: -cropTop * scale,
            width: SOURCE.width,
            height: SOURCE.height,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <OffthreadVideo
            src={staticFile(src)}
            startFrom={Math.round(startFromSeconds * COMP.fps)}
            endAt={Math.round(endAtSeconds * COMP.fps)}
            muted={muted}
            volume={volume}
            style={{ width: SOURCE.width, height: SOURCE.height, objectFit: "fill" }}
          />
          {children}
        </div>
      </div>
    </AbsoluteFill>
  );
};
