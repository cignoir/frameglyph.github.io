# Exportação

O Frameglyph usa o FFmpeg para exportar vídeos com as anotações impressas de forma definitiva na imagem (burned-in).

## Pré-requisitos

O FFmpeg deve ser configurado antes de exportar. Consulte a seção de [Instalação](./installation#configuracao-do-ffmpeg).

![Export settings dialog](/images/screenshots/export-dialog.png)

## Formatos de Exportação

| Formato | Descrição |
|---|---|
| **MP4 (H.264)** | Formato de vídeo padrão, amplamente compatível |
| **WebM (VP9)** | Formato aberto, com boa compressão |
| **Animação GIF** | GIF animado, não suporta áudio |
| **Animação APNG** | PNG animado, de melhor qualidade que o GIF, não suporta áudio |
| **Sequência PNG** | Sequência de imagens sem perdas |
| **Sequência JPEG** | Sequência de imagens comprimida |
| **Sequência WebP** | Formato de sequência de imagens moderno |

## Configurações de Exportação

### Resolução
Escolha entre **Original**, **1080p**, **720p**, ou **480p**.

### Taxa de Quadros (FPS)
Selecione entre taxas de quadros (frame rates) padrão da indústria (24, 30, 60, etc.) ou use **Automático (Igualar ao FPS Máximo de Entrada)** para puxar a mesma taxa do vídeo original.

### Qualidade
- **Original (Raw)**: Maior qualidade / Arquivo extremamente pesado
- **Alta (High)**: Boa qualidade / Ponto de equilíbrio
- **Média (Medium)**: Padrão / Tamanho menor
- **Baixa (Low)**: Rascunho / O menor tamanho possível

### Intervalo
- **Duração Total (Full Duration)**: Exporta o clipe inteiro do começo ao fim
- **Apenas Seleção (Selection Only)**: Exporta somente o intervalo selecionado pelas marcações e limites na linha (In/Out)

### Sobreposições
Alterne se os desenhos de **Legendas, Anotações e Live Ink (Captions, Annotations & Live Ink)** vão ser cravados no vídeo renderizado de saída.

## Dicas para GIF e APNG

::: warning Aviso
Arquivos GIF e APNG podem ficar gigantes muito rápido. Para melhores resultados:
- Use resoluções menores e baixas (480p)
- Use baixas taxas de quadros para a animação da imagem (10-15 fps)
- Mantenha os trechos mais curtos
- Áudio não é incluído nestes formatos
:::
