export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  axios: {
    proxy: true,
    baseURL : 'http://localhost:2021'
  },
  proxy: {
    '/api2/': { target: 'https://messenger.stipop.io/',pathRewrite: {'^/api2/': ''}, changeOrigin: true },
    '/api/': { target: 'https://camera.stipop.io/', pathRewrite: {'^/api/': ''},  changeOrigin: true },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-text-project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/app.scss'
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  serverMiddleware:[
    '~api/index.js'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [ 'bootstrap-vue/nuxt', '@nuxtjs/axios', '@nuxtjs/tailwindcss','@nuxtjs/proxy'
  ],
  bootstrapVue:{
    componentPlugins:[
     'IconsPlugin'
    ]

  },
  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
