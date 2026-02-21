import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Frameglyph',
  description: 'Video review and annotation tool',
  appearance: 'dark',

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['meta', { property: 'og:image', content: '/images/screenshots/hero.png' }],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'Support', link: '/support' },
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Introduction', link: '/guide/' },
                { text: 'Installation', link: '/guide/installation' },
              ],
            },
            {
              text: 'Features',
              items: [
                { text: 'Video Playback', link: '/guide/video-playback' },
                { text: 'Annotations', link: '/guide/annotations' },
                { text: 'Timeline', link: '/guide/timeline' },
                { text: 'Export', link: '/guide/export' },
                { text: 'Screen Capture', link: '/guide/screen-capture' },
              ],
            },
            {
              text: 'Reference',
              items: [
                { text: 'Keyboard Shortcuts', link: '/guide/shortcuts' },
              ],
            },
          ],
        },
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'ガイド', link: '/ja/guide/' },
          { text: 'サポート', link: '/ja/support' },
        ],
        sidebar: {
          '/ja/guide/': [
            {
              text: 'はじめに',
              items: [
                { text: 'イントロダクション', link: '/ja/guide/' },
                { text: 'インストール', link: '/ja/guide/installation' },
              ],
            },
            {
              text: '機能',
              items: [
                { text: '動画再生', link: '/ja/guide/video-playback' },
                { text: 'アノテーション', link: '/ja/guide/annotations' },
                { text: 'タイムライン', link: '/ja/guide/timeline' },
                { text: 'エクスポート', link: '/ja/guide/export' },
                { text: 'スクリーンキャプチャ', link: '/ja/guide/screen-capture' },
              ],
            },
            {
              text: 'リファレンス',
              items: [
                { text: 'キーボードショートカット', link: '/ja/guide/shortcuts' },
              ],
            },
          ],
        },
      },
    },
    'zh-Hans': {
      label: '简体中文',
      lang: 'zh-Hans',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh-Hans/' },
          { text: '指南', link: '/zh-Hans/guide/' },
          { text: '支持', link: '/zh-Hans/support' },
        ],
        sidebar: {
          '/zh-Hans/guide/': [
            {
              text: '入门',
              items: [
                { text: '简介', link: '/zh-Hans/guide/' },
                { text: '安装', link: '/zh-Hans/guide/installation' },
              ],
            },
            {
              text: '功能',
              items: [
                { text: '视频播放', link: '/zh-Hans/guide/video-playback' },
                { text: '批注', link: '/zh-Hans/guide/annotations' },
                { text: '时间轴', link: '/zh-Hans/guide/timeline' },
                { text: '导出', link: '/zh-Hans/guide/export' },
                { text: '屏幕录像', link: '/zh-Hans/guide/screen-capture' },
              ],
            },
            {
              text: '参考',
              items: [
                { text: '快捷键', link: '/zh-Hans/guide/shortcuts' },
              ],
            },
          ],
        },
      },
    },
    ko: {
      label: '한국어',
      lang: 'ko',
      themeConfig: {
        nav: [
          { text: '홈', link: '/ko/' },
          { text: '가이드', link: '/ko/guide/' },
          { text: '지원', link: '/ko/support' },
        ],
        sidebar: {
          '/ko/guide/': [
            {
              text: '시작하기',
              items: [
                { text: '소개', link: '/ko/guide/' },
                { text: '설치', link: '/ko/guide/installation' },
              ],
            },
            {
              text: '기능',
              items: [
                { text: '비디오 재생', link: '/ko/guide/video-playback' },
                { text: '주석', link: '/ko/guide/annotations' },
                { text: '타임라인', link: '/ko/guide/timeline' },
                { text: '내보내기', link: '/ko/guide/export' },
                { text: '화면 캡처', link: '/ko/guide/screen-capture' },
              ],
            },
            {
              text: '참고 자료',
              items: [
                { text: '단축키 모음', link: '/ko/guide/shortcuts' },
              ],
            },
          ],
        },
      },
    },
    es: {
      label: 'Español',
      lang: 'es',
      themeConfig: {
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'Guía', link: '/es/guide/' },
          { text: 'Soporte', link: '/es/support' },
        ],
        sidebar: {
          '/es/guide/': [
            {
              text: 'Primeros Pasos',
              items: [
                { text: 'Introducción', link: '/es/guide/' },
                { text: 'Instalación', link: '/es/guide/installation' },
              ],
            },
            {
              text: 'Características',
              items: [
                { text: 'Reproducción de Video', link: '/es/guide/video-playback' },
                { text: 'Anotaciones', link: '/es/guide/annotations' },
                { text: 'Línea de Tiempo', link: '/es/guide/timeline' },
                { text: 'Exportación', link: '/es/guide/export' },
                { text: 'Captura de Pantalla', link: '/es/guide/screen-capture' },
              ],
            },
            {
              text: 'Referencia',
              items: [
                { text: 'Atajos de Teclado', link: '/es/guide/shortcuts' },
              ],
            },
          ],
        },
      },
    },
    'pt-BR': {
      label: 'Português',
      lang: 'pt-BR',
      themeConfig: {
        nav: [
          { text: 'Início', link: '/pt-BR/' },
          { text: 'Guia', link: '/pt-BR/guide/' },
          { text: 'Suporte', link: '/pt-BR/support' },
        ],
        sidebar: {
          '/pt-BR/guide/': [
            {
              text: 'Primeiros Passos',
              items: [
                { text: 'Introdução', link: '/pt-BR/guide/' },
                { text: 'Instalação', link: '/pt-BR/guide/installation' },
              ],
            },
            {
              text: 'Recursos',
              items: [
                { text: 'Reprodução de Vídeo', link: '/pt-BR/guide/video-playback' },
                { text: 'Anotações', link: '/pt-BR/guide/annotations' },
                { text: 'Linha do Tempo', link: '/pt-BR/guide/timeline' },
                { text: 'Exportação', link: '/pt-BR/guide/export' },
                { text: 'Captura de Tela', link: '/pt-BR/guide/screen-capture' },
              ],
            },
            {
              text: 'Referência',
              items: [
                { text: 'Atalhos de Teclado', link: '/pt-BR/guide/shortcuts' },
              ],
            },
          ],
        },
      },
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'Guide', link: '/fr/guide/' },
          { text: 'Support', link: '/fr/support' },
        ],
        sidebar: {
          '/fr/guide/': [
            {
              text: 'Démarrage',
              items: [
                { text: 'Introduction', link: '/fr/guide/' },
                { text: 'Installation', link: '/fr/guide/installation' },
              ],
            },
            {
              text: 'Fonctionnalités',
              items: [
                { text: 'Lecture vidéo', link: '/fr/guide/video-playback' },
                { text: 'Annotations', link: '/fr/guide/annotations' },
                { text: 'Chronologie', link: '/fr/guide/timeline' },
                { text: 'Exportation', link: '/fr/guide/export' },
                { text: "Capture d'écran", link: '/fr/guide/screen-capture' },
              ],
            },
            {
              text: 'Référence',
              items: [
                { text: 'Raccourcis Claviers', link: '/fr/guide/shortcuts' },
              ],
            },
          ],
        },
      },
    },
  },

  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local',
    },
    socialLinks: [],
    footer: {
      message: 'Copyright © 2026 CIGNOIR. All rights reserved.',
    },
  },
})
