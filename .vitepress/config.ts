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
