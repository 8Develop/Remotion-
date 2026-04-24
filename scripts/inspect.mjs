import { parseMedia } from "@remotion/media-parser";
import { nodeReader } from "@remotion/media-parser/node";
import path from "node:path";

const files = [
  path.resolve("public/wissyshop-1.mp4"),
  path.resolve("public/wissyshop-2.mp4"),
];

for (const file of files) {
  const info = await parseMedia({
    src: file,
    reader: nodeReader,
    fields: {
      durationInSeconds: true,
      dimensions: true,
      fps: true,
      container: true,
      tracks: true,
      videoCodec: true,
      audioCodec: true,
    },
  });
  console.log("\n===", path.basename(file), "===");
  console.log("duration (s):", info.durationInSeconds);
  console.log("dimensions:", info.dimensions);
  console.log("fps:", info.fps);
  console.log("container:", info.container);
  console.log("videoCodec:", info.videoCodec);
  console.log("audioCodec:", info.audioCodec);
  console.log("video tracks:", info.tracks.filter((t) => t.type === "video").length);
  console.log("audio tracks:", info.tracks.filter((t) => t.type === "audio").length);
}
