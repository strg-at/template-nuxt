import { defineVitestConfig } from '@nuxt/test-utils/config'

// https://nuxt.com/docs/getting-started/testing
// The `nuxt` environment boots a Nuxt runtime so components can use
// auto-imports and Nuxt composables in tests; `domEnvironment: 'jsdom'`
// keeps the DOM implementation aligned with the rest of the toolchain.
export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        domEnvironment: 'jsdom',
      },
    },
  },
})
