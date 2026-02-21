# Instalação

## Instalar pelo Steam

1. Adicione à lista de desejos ou compre o Frameglyph no [Steam](#).
2. O aplicativo será instalado automaticamente.

## Configuração do FFmpeg

O FFmpeg é necessário para os recursos de exportação de vídeo. O Frameglyph não inclui o FFmpeg empacotado — você precisa instalá-lo separadamente.

1. Baixe o FFmpeg do site [ffmpeg.org](https://ffmpeg.org/download.html).
2. Extraia o arquivo baixado para um diretório (por exemplo, `C:\ffmpeg`).
3. No Frameglyph, acesse as **Preferências (Preferences) > Sistema (System) > Configuração do FFmpeg (FFmpeg Configuration)**.
4. Defina o **Caminho de Execução (Executable Path)** para o seu `ffmpeg.exe` (exemplo, `C:\ffmpeg\bin\ffmpeg.exe`).

::: tip Dica
Você também pode adicionar o FFmpeg ao PATH do seu sistema. O Frameglyph o detectará automaticamente caso deixe a caixa de texto em branco.
:::
