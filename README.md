<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD028 -->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![pre-commit][pre-commit-shield]][pre-commit-url]
[![taskfile][taskfile-shield]][taskfile-url]

# Project

Short project description

<details>
  <summary style="font-size:1.2em;">Table of Contents</summary>
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Code-Style](#code-style)
- [Getting Started](#getting-started)
  - [Prerequisties](#prerequisties)
  - [Initialize repository](#initialize-repository)
- [Development](#development)
- [Configuration](#configuration)
  - [Preparation](#preparation)
- [Known Issues](#known-issues)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
</details>

## Code-Style

<!-- TBD -->

## Getting Started

### Prerequisties

- [Node.js][nodejs] `22.x` (see `.nvmrc` — run `nvm use`)
- [pre-commit][pre-commit]
- [yamllint][yamllint]

### Initialize repository

Pre-commit framework need to get initialized.

```console
task pre-commit:init
```

Install dependencies (also runs `nuxt prepare` via `postinstall`):

```console
npm install
```

## Development

This is a [Nuxt 4][nuxt] application. Application source lives in the `app/`
directory (`app.vue`, `components/`, `composables/`, `pages/`, …); `server/`,
`shared/`, `modules/` and `public/` stay at the project root.

| Script                  | Description                                        |
| ----------------------- | -------------------------------------------------- |
| `npm run dev`           | Start the dev server on `0.0.0.0:3000`.            |
| `npm run build`         | Build for production.                              |
| `npm run generate`      | Pre-render a static site.                          |
| `npm run preview`       | Preview the production build.                      |
| `npm run lint`          | Lint with ESLint (flat config via `@nuxt/eslint`). |
| `npm run lint:fix`      | Lint and auto-fix.                                 |
| `npm run format`        | Format with Prettier.                              |
| `npm run typecheck`     | Type-check with `vue-tsc`.                         |
| `npm run test`          | Run unit tests with Vitest (`@nuxt/test-utils`).   |
| `npm run test:coverage` | Run tests with coverage (`@vitest/coverage-v8`).   |

## Configuration

### Preparation

All changes require a PR and review. Create a new branch and reference a Jira ticket, f.e.

```console
git switch -c feature/INPRO-1-configure-resource
```

## Known Issues

- **Storybook** is intentionally not included yet. The Nuxt-integrated framework
  (`@storybook-vue/nuxt`) only supports Nuxt 4 in prerelease builds. Add it via
  `npx nuxi module add storybook` once it ships a stable Nuxt 4 release.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!-- Links -->

[nodejs]: https://nodejs.org/
[nuxt]: https://nuxt.com/
[pre-commit]: https://pre-commit.com/
[yamllint]: https://github.com/adrienverge/yamllint

<!-- Badges -->

[pre-commit-shield]: https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit
[pre-commit-url]: https://github.com/pre-commit/pre-commit
[taskfile-url]: https://taskfile.dev/
[taskfile-shield]: https://img.shields.io/badge/Taskfile-Enabled-brightgreen?logo=task
