// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  telemetry: false,
  modules: ['@nuxt/eslint', '@pinia/nuxt'],
  // Surface type errors in the dev-server terminal and as a browser overlay,
  // and fail `nuxt build` on type errors. Requires vue-tsc + typescript.
  typescript: {
    typeCheck: true,
  },
})
