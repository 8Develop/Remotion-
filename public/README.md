# Assets locaux

Ce dossier accueille les fichiers médias utilisés par Remotion (vidéos, images, audio).

Les fichiers vidéo (`*.mp4`, `*.mov`, `*.webm`) sont exclus du versioning (voir `.gitignore`) car ils sont trop lourds pour Git. Les vidéos sources du montage wissyshop sont hébergées dans la release GitHub `videos-wissyshop` :

- `wissyshop-1.mp4` — screencast principal (~3 min)
- `wissyshop-2.mp4` — complément (~17 s)

Pour récupérer les vidéos :

```bash
curl -L -o public/wissyshop-1.mp4 \
  "https://github.com/8Develop/Remotion-/releases/download/videos-wissyshop/ScreenRecording_04-24-2026.06-50-04_1.mp4"
curl -L -o public/wissyshop-2.mp4 \
  "https://github.com/8Develop/Remotion-/releases/download/videos-wissyshop/ScreenRecording_04-24-2026.06-54-20_1.mp4"
```
