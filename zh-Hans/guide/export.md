# 导出

Frameglyph 使用 FFmpeg 导出带有批注烙印的视频。

## 前提条件

导出前必须配置 FFmpeg。请参阅[安装](./installation#ffmpeg-setup)。

![Export settings dialog](/images/screenshots/export-dialog.png)

## 导出格式

| 格式 | 说明 |
|---|---|
| **MP4 (H.264)** | 标准视频格式，具有广泛的兼容性 |
| **WebM (VP9)** | 开放格式，具有良好的压缩率 |
| **GIF Animation (GIF 动画)** | 动画 GIF，不支持音频 |
| **APNG Animation (APNG 动画)** | 动画 PNG，质量优于 GIF，不支持音频 |
| **PNG Sequence (PNG 序列)** | 无损图像序列 |
| **JPEG Sequence (JPEG 序列)** | 压缩图像序列 |
| **WebP Sequence (WebP 序列)** | 现代图像序列格式 |

## 导出设置

### 分辨率 (Resolution)
可选择 **原始 (Original)**、**1080p**、**720p** 或 **480p**。

### 帧率 (FPS)
从标准帧率（24、30、60 等）中选择，或使用 **自动 (匹配最大输入 FPS) / Auto (Match Max Input FPS)** 以继承源视频的帧率。

### 质量 (Quality)
- **原始 (Raw)**：最高质量 / 文件体积大
- **高 (High)**：画质好 / 适中平衡
- **中 (Medium)**：标准 / 文件体积较小
- **低 (Low)**：草稿 / 文件体积最小

### 范围 (Range)
- **完整时长 (Full Duration)**：导出整个片段
- **仅选定范围 (Selection Only)**：仅导出选定范围（入点/出点）

### 叠加图层 (Overlays)
开启或关闭是否将 **字幕、批注 和 动态墨迹 (Captions, Annotations & Live Ink)** 烙印（Burn-in）到输出视频中。

## GIF 和 APNG 提示

::: warning 警告
GIF 和 APNG 格式的文件体积可能会变得非常大。为了获得最佳效果：
- 使用较低的分辨率 (480p)
- 使用较低的帧速率 (10-15 fps)
- 保持片段较短
- 这些格式不支持音频
:::
