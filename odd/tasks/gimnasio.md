# Feature: gimnasio

## Objective
Merge `/gimnasio-de-innovacion` and `/entrenamientos` into a single "Gimnasio" page, without repeated content.

## Problem / Why
Both pages describe the same offer (GII 5.0 gym and the DIT training method) and repeat content; the user wants one place called "Gimnasio".

## Scope
- New page `/gimnasio` (`src/pages/gimnasio.astro`) holding all unique content of both pages; duplicates merged once.
- Old URLs `/gimnasio-de-innovacion` and `/entrenamientos` redirect to `/gimnasio` (Astro `redirects`), so existing links keep working.
- Main nav: "GII 5.0" + "Entrenamientos" replaced by one "Gimnasio" item; footer link and every internal link updated (units.ts, profiles.ts, kiszka.astro, index.astro, BaseLayout.astro).
- Keep the DIT clarification (existing methodology we adopt and recommend).

## Constraints
- Site copy in Spanish as in existing pages; code in English. Reuse existing components and styles.
- `units.ts` slug `gimnasio-de-innovacion` may stay as internal identifier if renaming adds risk; only `href` must change.

## Settings
- TDD: not applicable (no test runner). Checks: `npm run check`, `npm run build`, inspection of `dist/gimnasio/` and redirect pages.
- RDD: off (global).
- Delivery: branch `feat/gimnasio` stacked on `feat/radar`; merged to `main` on the user's "subí todo".

## Tasks
- [x] T1 — Merged `/gimnasio` page, redirects, nav/links update, remove old pages. Route: delegated (writer trigger: 2+ non-trivial files).

## Progress / Evidence
- 2026-10-08: feature document created. Engram mirror `odd/gimnasio/tasks`: pending (memory tool unavailable this session).
- 2026-10-08 T1 (delegated writer): `src/pages/gimnasio.astro` created (hero → concepto/pilares → DIT 9 pasos `#trayectoria` with "adoptamos y recomendamos" clarification + planet → 3 fases → programas/modalidades merged (ids `gii50`, `in-company`, `dicha`) → infraestructura de pensamiento + banner ecosistema → factor humano → single contact block). Old pages deleted; redirects in `astro.config.mjs`; nav single "Gimnasio"; footer "Entrenamientos (DIT)" removed (units list already yields "Gimnasio de Innovación" → `/gimnasio`); units/profiles/kiszka/index links → `/gimnasio` (index "9 pasos" → `/gimnasio#trayectoria`). Units slug `gimnasio-de-innovacion` kept as internal identifier.
  - `npm run check`: 0 errors, 0 warnings, 1 hint (pre-existing, unused `withBase` in `src/pages/stream/index.astro`).
  - `npm run build`: 18 pages; `dist/gimnasio/index.html` exists; `dist/gimnasio-de-innovacion/` and `dist/entrenamientos/` are meta-refresh redirects to `/gimnasio`.
  - `rg -n "gimnasio-de-innovacion|/entrenamientos" src astro.config.mjs`: only the 2 redirect keys, the units slug and its `unitBySlug` call.

## Next step
T1.
