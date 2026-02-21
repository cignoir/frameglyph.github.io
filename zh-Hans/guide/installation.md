# 安装

## 从 Steam 安装

1. 在 [Steam](#) 上将 Frameglyph 加入愿望单或直接购买。
2. 应用程序将会自动安装。

## FFmpeg 设置

视频导出功能需要依赖 FFmpeg。Frameglyph 没有内置 FFmpeg —— 您需要单独进行安装。

1. 从 [ffmpeg.org](https://ffmpeg.org/download.html) 下载 FFmpeg。
2. 解压到一个目录下（例如：`C:\ffmpeg`）。
3. 在 Frameglyph 中，进入 **首选项 (Preferences) > 系统 (System) > FFmpeg 配置 (FFmpeg Configuration)**。
4. 将 **可执行文件路径 (Executable Path)** 设置为 `ffmpeg.exe`（例如：`C:\ffmpeg\bin\ffmpeg.exe`）。

::: tip 提示
您也可以将 FFmpeg 添加到系统的环境变量 PATH 中。如果路径留空，Frameglyph 会自动检测并使用它。
:::
