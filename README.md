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
- [Agentic Coding Standards](#agentic-coding-standards)
- [Getting Started](#getting-started)
  - [Prerequisties](#prerequisties)
  - [Initialize repository](#initialize-repository)
- [Development](#development)
  - [Running npm in Docker](#running-npm-in-docker)
- [Configuration](#configuration)
  - [Preparation](#preparation)
- [Known Issues](#known-issues)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
</details>

## Code-Style

<!-- TBD -->

## Agentic Coding Standards

This repo consumes the shared [STRG. agentic coding standards][standards].
The standards repo is cloned into `.standards/` and its content is symlinked
into `.agents/` (always-loaded instructions + skills) and `.claude/skills/`.

```text
.standards/          # clone of the standards repo (local tooling, gitignored)
.agents/             # symlinks to the standards relevant for this repo
.claude/skills/      # symlinks to the shared skills
AGENTS.md            # links the standards relevant to this Nuxt stack
CLAUDE.md            # delegates to AGENTS.md (@AGENTS.md)
```

`AGENTS.md` links the instructions relevant to this stack: the core guardrails
(`agent-instructions`, `commit-conventions`, `security`) plus the
`coding-style-typescript` and `coding-style-vue-nuxt` styles.

Install or refresh the standards (also runs on a fresh clone):

```console
task standards:setup     # clone/pull .standards and install symlinks
task standards:update    # refresh symlinks from the latest standards
```

The `.standards/` clone and the installed `.agents/` / `.claude/skills/`
symlinks are local tooling and are not committed — this repo uses an
allowlist `.gitignore` (ignore `*`, then `!`-allow tracked paths), so they
fall through the leading `*`. Only real custom skills/overrides are allowed
back in. See [`.standards/docs/installation.md`][standards-install] for the
full integration guide.

## Getting Started

### Prerequisties

- [Docker][docker] — all npm operations run inside the pinned Node image
- [Task][taskfile-url] — task runner (drives `task npm:*` and `task standards:setup`)
- [pre-commit][pre-commit]
- [yamllint][yamllint]
- [GitHub CLI (`gh`)][gh] — required by the `create-pr` skill
- [Node.js][nodejs] (optional, see `.nvmrc` — run `nvm use`) — only needed if
  you want to run npm directly on the host instead of via `task npm`

### Initialize repository

Pre-commit framework need to get initialized.

```console
task pre-commit:init
```

Install dependencies (runs inside the Node Docker image, also runs
`nuxt prepare` via `postinstall`):

```console
task npm:install
```

## Development

This is a [Nuxt 4][nuxt] application. Application source lives in the `app/`
directory (`app.vue`, `components/`, `composables/`, `pages/`, …); `server/`,
`shared/`, `modules/` and `public/` stay at the project root.

### Running npm in Docker

All npm operations run inside the pinned `node:<.nvmrc>-alpine` image (defined
in [`.taskfiles/npm.yaml`](.taskfiles/npm.yaml)) so the Node/npm version is
identical for everyone and no global Node install is required. The container
runs as your user and reuses the host npm cache, so files it writes stay owned
by you.

Run any npm command with `task npm -- <args>` (e.g. `task npm -- install lodash`,
`task npm -- update`), or use the shortcut tasks below:

| Task                    | npm script             | Description                                        |
| ----------------------- | ---------------------- | -------------------------------------------------- |
| `task npm:install`      | `npm install`          | Install dependencies.                              |
| `task npm:ci`           | `npm ci`               | Install from the lockfile.                         |
| `task npm:build`        | `npm run build`        | Build for production.                              |
| `task npm:lint`         | `npm run lint`         | Lint with ESLint (flat config via `@nuxt/eslint`). |
| `task npm:lint:fix`     | `npm run lint:fix`     | Lint and auto-fix.                                 |
| `task npm:format`       | `npm run format`       | Format with Prettier.                              |
| `task npm:format:check` | `npm run format:check` | Check formatting without writing.                  |
| `task npm:typecheck`    | `npm run typecheck`    | Type-check with `vue-tsc`.                         |
| `task npm:test`         | `npm run test`         | Run unit tests with Vitest (`@nuxt/test-utils`).   |
| `task npm:test:update`  | `npm run test:update`  | Run tests in update mode (refresh snapshots).      |

The dev server (`npm run dev`) and preview (`npm run preview`) are typically run
on the host during development; run them with `task npm -- run dev` if you
prefer the container.

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

[docker]: https://www.docker.com/
[nodejs]: https://nodejs.org/
[nuxt]: https://nuxt.com/
[pre-commit]: https://pre-commit.com/
[yamllint]: https://github.com/adrienverge/yamllint
[gh]: https://cli.github.com/
[standards]: https://github.com/strg-at/agentic-coding-standards
[standards-install]: .standards/docs/installation.md

<!-- Badges -->

[pre-commit-shield]: https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit
[pre-commit-url]: https://github.com/pre-commit/pre-commit
[taskfile-url]: https://taskfile.dev/
[taskfile-shield]: https://img.shields.io/badge/Taskfile-Enabled-brightgreen?logo=task
