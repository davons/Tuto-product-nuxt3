// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@pinia/nuxt'
  ],
  pinia: {
    autoImports: ['defineStore', 'definePiniaStore']
  },
  imports: {
    dirs: ['stores']
  },
  runtimeConfig: {
    public: {
      appURL: process.env.API_URL
    }
  }
})
