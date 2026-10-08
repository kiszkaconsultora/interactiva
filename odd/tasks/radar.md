# Feature: radar

## Objective
Add a "Radar" news section: journalistic articles authored as Markdown files, listed at `/radar` and rendered at `/radar/[slug]`, reachable from the main header.

## Problem / Why
The client will publish articles periodically. Content must be added by dropping a `.md` file and an image, without touching page code.

## Scope
- Astro content collection `radar` loaded from `src/content/radar/*.md` (files starting with `_` are ignored, used for the template).
- Images live in `public/radar/` and are referenced by path from frontmatter.
- Frontmatter: `title`, `excerpt`, `date`, `category` (free text), `image`, `imageAlt`, optional `author`, optional `draft`.
- `/radar`: all published articles, newest first, with an empty state.
- `/radar/[slug]`: single article with category, date, image and body.
- "Radar" link in the main header nav (`src/data/site.ts`).
- Authoring template `src/content/radar/_plantilla.md` documenting the fields.

## Constraints
- Site copy in Spanish, matching existing pages; code/identifiers/comments in English.
- Reuse existing components (`BaseLayout`, `Section`, `SectionHeading`, `ServiceCard`) and `withBase` for every internal URL.
- Category is free text (user decision 2026-10-08). No category filtering requested.

## Settings
- TDD: not applicable (no test runner in the project). Functional checks: `npm run check` + `npm run build` and inspection of generated `dist/radar/` pages.
- RDD: off (global). No native review.
- Delivery: single-pr on `feat/radar`; the user's "subí todo" merges into `main` and pushes.

## Tasks
- [x] T1 — Content collection, `/radar` index, `/radar/[slug]` page, header link, authoring template. Route: delegated (writer trigger: 4+ non-trivial files).

## Acceptance criteria
- A new `.md` in `src/content/radar/` appears on `/radar` and at `/radar/<file-name>` after build.
- `_plantilla.md` is not published.
- Header shows "Radar" and marks it active on radar pages.
- `npm run check` and `npm run build` pass.

## Progress / Evidence
- 2026-10-08: feature document created. Engram mirror `odd/radar/tasks`: pending (mem_save failed: host session registration not confirmed).
- 2026-10-08: T1 done (delegated writer). Evidence: `npm run check` 0 errors (parent re-ran); `npm run build` OK, `dist/radar/index.html` shows empty state, no `_plantilla` page; probe article generated `dist/radar/prueba-temporal/` and was listed, `draft: true` hid it; header "Radar" active on radar pages. Probe file removed. Added `public/radar/.gitkeep`. Index title chosen by writer: "Lo que pasa en el ecosistema".

## Next step
User review of `/radar`; first real article. Optional follow-up: move the duplicated Spanish date formatter (ArticleCard.astro, radar/[slug].astro) to src/utils/.
