import { defineConfig } from 'vitepress'
import { genFeed } from './genFeed.js'
// @ts-ignore
import markdownItVideo from 'markdown-it-video'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(markdownItVideo)
    }
  },
  title: 'Desperado Blog',
  description: 'Documenting my freelance journey and technical growth with insights and experiences',
  cleanUrls: true,
  // head: [
  //   ['meta', { name: 'twitter:site', content: '@vuejs' }],
  //   ['meta', { name: 'twitter:card', content: 'summary' }],
  //   [
  //     'meta',
  //     {
  //       name: 'twitter:image',
  //       content: 'https://vuejs.org/images/logo.png'
  //     }
  //   ],
  //   [
  //     'link',
  //     {
  //       rel: 'icon',
  //       type: 'image/x-icon',
  //       href: '/favicon.ico'
  //     }
  //   ],
  //   [
  //     'script',
  //     {
  //       src: 'https://cdn.usefathom.com/script.js',
  //       'data-site': 'NYHGSGQV',
  //       'data-spa': 'auto',
  //       defer: ''
  //     }
  //   ]
  // ],
  buildEnd: genFeed
})
