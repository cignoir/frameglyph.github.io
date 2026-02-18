# インストール

## Steamからインストール

1. [Steam](#)でFrameglyphを購入します。
2. アプリケーションが自動的にインストールされます。

## FFmpegのセットアップ

動画エクスポート機能にはFFmpegが必要です。FrameglyphにはFFmpegが同梱されていないため、別途インストールしてください。

1. [ffmpeg.org](https://ffmpeg.org/download.html) からFFmpegをダウンロードします。
2. 任意のディレクトリに展開します（例: `C:\ffmpeg`）。
3. Frameglyphで **設定 > システム > FFmpeg設定** を開きます。
4. `ffmpeg.exe` のパスを設定します（例: `C:\ffmpeg\bin\ffmpeg.exe`）。

::: tip
FFmpegをシステムのPATHに追加することもできます。Frameglyphが自動的に検出します。
:::
