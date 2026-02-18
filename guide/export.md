# Export

Frameglyph uses FFmpeg to export videos with burned-in annotations.

## Prerequisites

FFmpeg must be configured before exporting. See [Installation](./installation#ffmpeg-setup).

![Export settings dialog](/images/screenshots/export-dialog.png)

## Export Formats

| Format | Description |
|---|---|
| **MP4 (H.264)** | Standard video format, widely compatible |
| **WebM (VP9)** | Open format, good compression |
| **GIF** | Animated GIF, no audio support |
| **PNG Sequence** | Lossless image sequence |
| **JPEG Sequence** | Compressed image sequence |
| **WebP Sequence** | Modern image sequence format |

## Export Settings

### Resolution
Choose from Original, 1080p, 720p, or 480p.

### Frame Rate
Select from standard frame rates (24fps, 30fps, 60fps, etc.) or use Auto to match the source video.

### Quality
- **Raw**: Highest quality, largest file size
- **High**: Good quality, balanced file size
- **Medium**: Standard quality, smaller file size
- **Low**: Draft quality, smallest file size

### Range
- **Full Duration**: Export the entire video
- **Selection Only**: Export only the In/Out range

### Overlays
Toggle whether annotations and captions are burned into the output.

## GIF Tips

::: warning
GIF files can become very large. For best results:
- Use low resolution (480p)
- Use low frame rate (10-15 fps)
- Keep clips short
- Audio is not supported in GIF format
:::
