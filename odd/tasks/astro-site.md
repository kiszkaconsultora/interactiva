# Feature: astro-site

## Objective
Build the Interactiva Hub website in Astro, styled exclusively with the "Interactiva Hub Design System" (claude.ai design project `80d71dd7-e05e-4eb3-b837-da6819f88d1f`), with content taken from `docs/`.

## Problem / Why
The current site is a Google Sites export (`docs/**/*.html`). It lacks a segmented hero, clear CTAs and a coherent visual system. The design system already defines tokens, components and a website UI kit.

## Scope
- Astro project at the repo root, static output.
- Design tokens ported verbatim from the design system (`tokens/*.css`, `styles.css`).
- Design-system React components ported to native `.astro` components (no React runtime; decision by user 2026-10-03).
- Pages: home (segmented hero → value prop → units → method → contact CTA), one page per profile, one page per unit (service), contact.
- Content from `docs/` (Google Sites exports used only as content sources, never as design source).

## Constraints
- Site copy in Rioplatense Spanish with voseo (design system content rules). Code, identifiers and comments in English.
- No emoji; "→" as the only glyph. No section gradients except those the DS defines.
- Minimal client JS (mobile menu only).

## Settings
- TDD: off (source: no project/session configuration). Functional checks: `npm run build` + `astro check`.
- RDD: off (global). No native review.
- Delivery strategy: single-pr on `feat/astro-site` (greenfield scaffold, no remote yet). Push/PR are the user's decision.

## Tasks
- [x] T0 Content inventory of `docs/` + content-organization questions to the user (route: delegated explorer; trigger: 4+ files). User rule 2026-10-03: ALL content (text, images, logos, order) comes from `docs/`; design only from the DS. T3–T5 blocked until content order is agreed.
- [x] T1 Scaffold Astro + tokens + base layout (route: delegated writer; trigger: 2+ non-trivial files, DS reading prepares the write) — commit d3caa36
- [x] T2 Port DS components to `.astro` (core, marketing, navigation) (route: delegated writer) — commit f554441. Evidence: `npm run build` OK (parent spot check), `astro check` 0 errors. Note: DS mirrored locally in session scratchpad because subagents lack DesignSync.
- [x] T3 Content data layer (`src/data/*.ts`) + optimized assets + Home (route: delegated writer; trigger: 2+ non-trivial files)
- [x] T4 Unit pages: Coworking, GII 5.0, Kiszka, Sesiones de Proyecto, Productora (route: same delegated writer)
- [x] T5 Stream index + 6 program sub-pages with YouTube facade (route: same delegated writer)
- [x] T6 Contacto page + header/footer wiring (all emails, phone) (route: same delegated writer)

## Acceptance criteria
- `npm run build` succeeds with zero errors; `astro check` clean.
- Every color/spacing/type value comes from DS tokens (no ad-hoc hex values in components).
- Home answers "is this for me?" via 5 profile cards in the hero.
- Max 2 clicks from home to contact or any unit.

## Progress / Evidence
- 2026-10-03: branch `feat/astro-site` created; DS access verified via DesignSync.

- 2026-10-03: T0 inventory done (session scratchpad `content-inventory.md`). Finding: docs/ = landing pages of 6 separate Google Sites (Hub, Coworking, Gimnasio, Sesiones de Proyecto, Kiszka/dicha-lab) + Stream sub-pages (YouTube only) + Productora; Agenda empty; Artefacto/IntegraPsiinn without page. 10 open content questions; asking one at a time.

## Content decisions (user)
- D1 (2026-10-03) Site map: Inicio · Coworking · Gimnasio de Innovación (GII 5.0) · Kiszka Consultora I+D+i+V (incl. D!Cha) · Sesiones de Proyecto (design consultancy) · Stream (own page) · Productora (own page) · Contacto. Artefacto + IntegraPsiinn: logos in an "Ecosistema" block, no page yet.

- D2 (2026-10-03) Stream: one sub-page per program (`/stream/<slug>`) with all its videos; /stream is the index grid. Implementation: YouTube facade (thumbnail, iframe loaded on click) to keep pages light.

- D3 (2026-10-03) Official phone everywhere: 3624261185. Emails stay per unit as in docs (interactivacoworking@, interactiva5.0@, kiskza.consultora@ — kept verbatim, consistent in source —, sesionesdeproyecto@, desafioemprendedor.ok@, error404stream.ok@). Address: Av. Edison 636, Resistencia, Chaco · Lun a Vie 9–18 hs.

- D4 (2026-10-03) Footer + Contacto list ALL emails, each labeled with its unit/program.

- D5 (2026-10-03) Brief filter (user: keep only what relates to other docs content). KEEP: 4 audiences (empresas, investigadores/docentes, instituciones/gobierno, estudiantes/público), "Te ayudamos a" verbs, "Innovar es crear Valor", long-scroll home, conocer servicios + diagnóstico CTA (diagnóstico appears in Kiszka/GII), aliados as text (UNNE, UNCAUS, ICCTI, ALTEC — named in GII md / Kiszka page), unit focus lines supported by unit content (Mente Extendida, Diseño de futuros, Economía naranja, Vigilancia tecnológica, Sesiones de Innovación, Investigación-Acción/DINA, D!Cha). DROP: Softlanding (only in brief), Empretec/Banco Nación/UNCTAD/PROIMPACTO, Ruta de Transferencia, courses/Storytelling section, newsletter/revista, KPIs, Pitch Night/Desayuno, team table, roadmap table, agentic workflow. Radar de oportunidades only inside Productora's community membership.
- Implementer decisions: AI-chat artifacts in .md (citations, "[Conversación previa…]", LaTeX arrows) are stripped, wording otherwise verbatim. Prices shown as in docs. Heavy GIFs converted/optimized or replaced by a still frame.

- 2026-10-03: T3 b90a56a, T4 8092126, T5 1e70fd2, T6 ece1b79. Evidence: `npm run build` 14 pages OK (parent spot check), `astro check` 0 errors, dist 5.4M, no file >1MB, internal links crawled OK. Not verified: 360px layout in browser, YouTube facade click.
- Open content items for user: Coworking prices valid until Dec 2026; Productora membership $6000 without period; Soledad Mansilla vs Nereida; untitled/duplicated Desafío videos kept as found; Interactiva Diario reuses Desafío banner.

## Next step
User visual review (`npm run dev`); browser check at 360px; push/PR is the user's decision.

## Follow-up: GitHub Pages (2026-10-03, user request)
- [x] T7 Deploy to GitHub Pages at https://kiszkaconsultora.github.io/interactiva/ — `site`/`base` in astro.config, base-aware URLs for all internal links/assets (89 absolute refs in 14 files), Actions workflow with withastro/action (route: delegated writer; trigger: 2+ non-trivial files). Note: user has no admin on the repo → an org admin must set Settings → Pages → Source = GitHub Actions.
- 2026-10-03: T7 commits 02b0bd3 + d4f4ca8 pushed to main. Run 37130011375: build OK, deploy FAILED 404 (Pages not enabled). Blocked on org admin: Settings → Pages → Source = GitHub Actions, then re-run.
- 2026-10-03: Pages enabled (build_type workflow). Re-run 37130011375 OK (build + deploy). Live smoke test 200 on /, /coworking/, /stream/magia/, /contacto/, an image, an mp4 and the no-slash /coworking.
