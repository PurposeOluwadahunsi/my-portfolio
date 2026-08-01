# data

Static/typed content that isn't user-facing UI: project entries, skills
lists, timeline/experience data. Kept separate from `lib` and
`services` because it's *data*, not logic — e.g. `data/projects.ts`
exporting `Project[]` (see `src/types/project.ts`) for
`components/projects` to render.

Currently empty — populated once real portfolio content is written.
