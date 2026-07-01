import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import TheWelcome from './TheWelcome.vue'

describe('TheWelcome', () => {
  it('renders the default greeting', async () => {
    const component = await mountSuspended(TheWelcome)
    expect(component.text()).toContain('Welcome to Nuxt 4')
  })

  it('renders a provided name', async () => {
    const component = await mountSuspended(TheWelcome, { props: { name: 'STRG' } })
    expect(component.text()).toContain('Welcome to STRG')
  })
})
