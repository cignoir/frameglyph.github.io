import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Frameglyph',
  description: 'Video review and annotation tool',
  appearance: 'dark',
  base: '/frameglyph.github.io/',

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
