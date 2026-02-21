# 내보내기

Frameglyph는 FFmpeg를 사용하여 주석이 새겨진(burned-in) 비디오를 출력합니다.

## 필수 조건

내보내기 전에 FFmpeg 설정을 완료해야 합니다. 자세한 정보는 [설치](./installation#ffmpeg-setup)를 참조하세요.

![Export settings dialog](/images/screenshots/export-dialog.png)

## 내보낼 형식

| 형식 | 설명 |
|---|---|
| **MP4 (H.264)** | 널리 쓰이는 표준 비디오 방식 |
| **WebM (VP9)** | 공개 포맷으로 압축 효율성이 우수 |
| **GIF Animation** | 움직이는 GIF 로 소리는 없음 |
| **APNG Animation** | GIF보다 화질이 좋은 움직이는 이미지. 소리는 없음 |
| **PNG Sequence** | 무손실 이미지 모음 |
| **JPEG Sequence** | 압축된 이미지 모음 |
| **WebP Sequence** | 가장 현대적인 형태의 이미지 시퀀스 파일 |

## 내보내기 설정

### 해상도

- **Original**, **1080p**, **720p**, **480p** 중에 고를 수 있습니다.

### 초당 프레임 수(FPS)

일반적인 24, 30, 60fps 등에서 고를 수 있으며, **Auto (Match Max Input FPS)**를 눌러 원본 미디어 수치에 강제로 맞춰 제작합니다.

### 품질 설정

- **Raw**: 가장 좋지만 용량 큼
- **High**: 고화질의 적당한 타협안
- **Medium**: 일반적 (작은 크기 확보)
- **Low**: 초안/작업 버전 공유에 유리한 최저 용량 세팅

### 범위 설정 (Range)

전체 클립 또는 사용자가 지정한 범위 안에서만 변환(선택 사항)을 적용시키며, **Full Duration(전체)**, **Selection Only(범위만)**를 고르세요.

### 겹치기 효과 (Overlays)

- **Captions, Annotations & Live Ink** (자막, 그림, 작성한 선 등)을 한 화면에 묶어 버너/저장할지 설정합니다.

## GIF 및 APNG 주의사항

::: warning 참고
GIF 및 APNG 항목에서는 오디오를 지원할 수 없으며 단시간 내에 크기가 수기가바이트 단위로 쉽게 커질 수 있습니다. 가급적 작은 해상도 480p 이하(10-15fps) 짧은 구간을 유지하시는 것을 추천합니다.
:::
