const pkg = require('./package')
require('dotenv').config()
import fs from 'fs'
import path from 'path'
module.exports = {
  build: {},
  plugins: [
  ],
  //serverMiddleware: ['./api'],
  telemetry: false,
  css: ['@assets/amdp.scss'],
  components: true,
  modules: [
    '@nuxt/http',
    '@nuxtjs/proxy',
    'bootstrap-vue/nuxt',
  ],
  http: {
    https: true
  },
  buildModules: [
  ],
  loading: {
    color: '#00FFFF',
    failedColor: 'black',
    height: '3px',
    continuous: true
  },
  env: {
    URLHOME: process.env.URLHOME,
    RECAPTCHA: process.env.RECAPTCHA
  },
  server: process.env.HTTPS
    ? {
      port: process.env.PORT,
      host: process.env.HOST,
      https: {
        key: fs.readFileSync(
          path.resolve(process.env.HTTPSDIR, process.env.HTTPSKEY)
        ),
        cert: fs.readFileSync(
          path.resolve(process.env.HTTPSDIR, process.env.HTTPSCERT)
        )
      }
    }
    : { host: process.env.HOST, port: process.env.PORT },
  head: {
    title: 'AMDP',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1'
      },
      { hid: 'description', name: 'description', content: pkg.description },
      { property: 'og:desc', content: 'AMDP' },
      { property: 'og:title', content: 'AMDP' },
      { property: 'og:image', content: '@/me.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Prompt:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap'
      }
    ]
  }
}