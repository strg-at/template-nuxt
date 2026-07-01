<script setup lang="ts">
defineProps<{
  /** Name shown in the greeting. */
  name?: string
}>()
</script>

<template>
  <section class="welcome">
    <h1>Welcome to {{ name ?? 'Nuxt 4' }}</h1>
    <p>Edit <code>app/app.vue</code> to get started.</p>
  </section>
</template>

<style scoped>
.welcome {
  font-family: sans-serif;
  text-align: center;
  padding: 2rem;
}
</style>
