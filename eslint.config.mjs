// https://eslint.nuxt.com — flat config generated and managed by the @nuxt/eslint module.
import withNuxt from './.nuxt/eslint.config.mjs'
import prettier from 'eslint-config-prettier'

// Prettier owns formatting; `eslint-config-prettier` disables any ESLint
// rules that would conflict with it.
export default withNuxt(prettier)
