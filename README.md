[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/o_jyorFj)


# Video compression

```

ffmpeg -i ~/Desktop/videoinspelning.mov \
  -vf "scale=-2:1080" \
  -c:v libx264 -b:v 900k -preset veryslow \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  smallvideo.mp4

```