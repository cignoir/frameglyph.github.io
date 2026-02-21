# Reprodução de Vídeo

![Video playback screen](/images/screenshots/playback.png)

O Frameglyph suporta importações e acompanhamentos (reviews) de vídeo no nível de cada quadro preciso.

## Importando Vídeos

- Arraste e solte o arquivo de vídeo sobre uma tela do aplicativo para importá-lo à ela.
- Ou também pelo menu superior **Arquivo (File) > Importar Vídeo... (Import Video...)**.

Formatos compatíveis: MP4, WebM e outros que o próprio motor do navegador consiga visualizar.

## Controles de Execução

| Ação | Descrição |
|---|---|
| Play / Pause | Iniciar e barrar a reprodução |
| Passo (Step Forward) | Avançar exatamente um único quadro (frame) |
| Recuo (Step Backward) | Voltar exatamente um único quadro (frame) |
| Saltar ao Início (Jump to Start) | Ir ao princípio do arquivo |
| Saltar ao Final (Jump to End) | Ir ao último quadro e parar |
| Acelerar (Speed Up) | Aumentar as velocidades atuais do arquivo até os limites |
| Desacelerar (Slow Down) | Reduzir os multiplicadores das velocidades do vídeo |
| Audio Scrub | Escutar passagens do som arrastando a barra, passo à passo. |

*(É possivel trocar se a quantificação inicial de exibição das telas será via frame de início do número 0-ou-1 na área de ajustes via **Preferências (Preferences) > Sistema (System)** — em **Contagem do Quadro Original (Frame Count Origin)**.)*

## Configurações da Janela

As opções abaixos listadas operam no nível da aba de controle principal **Visualizar (View)** para adaptar o painel de atuação da máquina:

- **Sempre por Cima (Always on Top)**: Manter a área do Frameglyph visível além das abas normais do sistema ativo.
- **Opacidade (Opacity)**: Modula índices limitantes na transparência das áreas gerais da tela para visualização e contorno do referencial base que ficou em segundo plano.

## Armazenamento Dos Recortes Ativos

Você tira proveitos fáceis da visualização se precisar imprimir estáticos na sua exibição do projeto que foca para capturas visuais da janela no espaço imediato da aplicação:
- Pelo controle em **Vídeo > Salvar Quadro Atual... (Save Current Frame...)** a máquina o jogará num PNG/JPEG.
- **Vídeo > Copiar Quadro para a Área de Transferência (Copy Frame to Clipboard)** guarda automaticamente para sua colagem remota (paste).

## Execução Contínua em Loop

1. Pressione **Definir Entrada do Loop (Set Loop In)** selecionando o espaço que precisa fixar do ponto onde você precisa para frente.
2. Fixe agora o estalão para terminar via **Definir Saída do Loop (Set Loop Out)** no final do evento desejado dentro do frame escolhido.
3. Se aperte as engrenagens conjuntas **Alternar Reprodução em Loop (Toggle Loop Playback)** todo o espaço cortado reiniciará ao parar nele.

*(Seletivamente você fará ativadores imediatos marcando suas teclas em **Início Rápido na Barra (Range Start at Playhead)** com recíprovo nos encerramentos e bloqueios do **Término Dinâmico (Range End at Playhead)**.)*

## Várias Visualizações Combinadas Em Disposição Integrada

![Multi-video comparison in 2x1 layout](/images/screenshots/multi-layout.png)

Frameglyph te deixa monitorar a tela partilhada por simultâneos ângulos diferentes, fazendo verificações fáceis da montagem no quadro dividido que operamos à parte flutuante da guia **Disposição (Layout Panel)** com opções de layout de escolha para modificar.

| Formato | Ação e Número de Exibições | Visão de Apresentação da Interface |
|---|---|---|
| **1x1** | 1 | Somente vídeo mestre para leitura direta. (Padrão) |
| **2x1** | 2 | Posicionados lateralmente um sob a aba espelho do outro |
| **1x2** | 2 | Apresentadas verticais contínuas partilhando as alturas e profundas do estático |
| **2x2** | 4 | Partições de 4 quadrantes para monitorando intensivos de 4 instâncias de mídia no fluxo e ritmo que desejar |

- Habilite à placa das visões através de **Visualizar (View) > Painel de Disposição (Layout Panel)**.
- É tão orgânico à sua disposição simplesmente puxando seus vídeos num drop aos bolsos visíveis ali vazias no lado.

Leia nossa visão na lista direta com [Atalhos de Teclado (Keyboard Shortcuts)](./shortcuts) que garante mais maestria em controles velozes do que mouse em mãos a guiar à reprodução imediata.
