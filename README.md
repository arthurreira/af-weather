# af-weather

Weather app for Finnish and Brazilian cities. Built as a pnpm monorepo with Turborepo.

## Stack

- **Next.js 16** — App Router, static + dynamic routes
- **Tailwind CSS v4** — utility-first styling
- **`@arthurreira/ui`** — personal UI package (design tokens auto-synced via postinstall)
- **`motion`** — card grid animations
- **`next-themes`** — dark mode with `d` hotkey toggle
- **Turbopack** — local dev bundler

## Monorepo structure

```text
apps/
  web/          # Next.js weather app
packages/       # shared configs (eslint, typescript)
```

## Getting started

```sh
pnpm install    # installs deps + auto-syncs UI tokens into globals.css
pnpm dev        # starts web app on localhost:3000
```

## UI tokens

Design tokens are owned by `@arthurreira/ui` and injected automatically into `apps/web/app/globals.css` on every `pnpm install` or package update. The injected block is marked with:

```css
/* @arthurreira/ui:tokens:start */
/* @arthurreira/ui:tokens:end */
```

Do not edit manually inside those markers — changes will be overwritten on the next install.

## Branch workflow

```text
feat/* or fix/*  →  PR to dev  →  PR to main
```

Never push directly to `main` or `dev`.

## Routes

| Route | Type | Description |
| --- | --- | --- |
| `/` | Static (30m revalidate) | City search + weather grid |
| `/api/weather` | Dynamic | Weather data from Open-Meteo |
