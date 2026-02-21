# 설치

## Steam에서 설치

1. [Steam](#)에서 Frameglyph를 찜 목록에 추가하거나 구매하세요.
2. 애플리케이션이 자동으로 설치됩니다.

## FFmpeg 설정

비디오 내보내기 기능을 사용하려면 FFmpeg가 필요합니다. Frameglyph에는 FFmpeg가 번들로 제공되지 않으므로 별도로 설치해야 합니다.

1. [ffmpeg.org](https://ffmpeg.org/download.html)에서 FFmpeg를 다운로드합니다.
2. 디렉토리(예: `C:\ffmpeg`)에 압축을 풉니다.
3. Frameglyph에서 **기본 설정(Preferences) > 시스템(System) > FFmpeg 설정(FFmpeg Configuration)**으로 이동합니다.
4. **실행 파일 경로(Executable Path)**를 `ffmpeg.exe`(예: `C:\ffmpeg\bin\ffmpeg.exe`)로 설정합니다.

::: tip 팁
FFmpeg를 시스템 PATH에 추가할 수도 있습니다. 경로를 비워두면 Frameglyph가 자동으로 감지합니다.
:::
