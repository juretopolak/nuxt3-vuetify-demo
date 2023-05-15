import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: [
    'vuetify/styles',
    '@/assets/css/main.scss'
  ],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  modules: [
    // eslint-disable-next-line require-await
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config!.plugins!.push(
        vuetify()
      ) as any)
    }
  ]
})
