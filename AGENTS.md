# Agent Guidelines

This file provides guidance to AI agents when working with code in this
repository.

## Standards

STRG. agentic coding standards are installed under `.agents/` (symlinks into
the `.standards/` clone). Run `task standards:setup` to install or refresh
them. See the [README](README.md#agentic-coding-standards) for details.

<!-- Core — always include these -->

@.agents/agent-instructions.md
@.agents/commit-conventions.md
@.agents/security.md

<!-- Coding styles matching this stack (Nuxt 4 / Vue 3 / TypeScript) -->

@.agents/coding-style-typescript.md
@.agents/coding-style-vue-nuxt.md

<!-- Not applicable to this base template — enable if the project grows into them -->
<!-- @.agents/coding-style-python.md -->
<!-- @.agents/coding-style-nestjs.md -->
<!-- @.agents/coding-style-graphql-yoga.md -->
<!-- @.agents/cloud-requirements.md -->
<!-- @.agents/devenv-pattern.md -->

## Project-specific guidance

- This is a [Nuxt 4](https://nuxt.com/) application. Application source lives in
  the `app/` directory (`app.vue`, `components/`, `composables/`, `pages/`, …);
  `server/`, `shared/`, `modules/` and `public/` stay at the project root.
- Run `npm run lint`, `npm run typecheck`, and `npm run test` before finishing a
  change. `task lint` runs the pre-commit hooks (markdownlint, prettier,
  yamllint, …).
- Keep secrets in `resources/configuration.yaml` (untracked); never commit it.
