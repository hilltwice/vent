# vent stage

The following changelogs in this filed records the development process of the
vent template. If you are not interested in the deep details about vent
template, please just delete this filed and focus on the
[your stage](changelog.md#your-stage).

## 0.0 monorepo setup

Setup the monorepo and basic development environment with elementary script
systems at the root of the monorepo.

### 0.0.0 elementary init

1. [git ignore file](.gitignore) and
   [git config for multi-platforms](.gitattributes).
2. [prettier formatter configs](.prettierrc.yaml).
3. enable prettier npm scripts.
4. establish [pnpm monorepo configs](pnpm-workspace.yaml).
5. establish manifests of all child repos.
6. design and generate [the icons for vent](app/assets/logo.ico).
7. establish [changelog](changelog.md) and [readme](readme.md).
8. create certain entry files as placeholders.
9. [configs for vscode editor](.vscode/settings.json) and
   [necessary extension recommendations](.vscode/extensions.json).

### 0.0.1 frontend vite-vue-ts-scss frame

1. establish `vite-vue-ts-scss` frame for the [frontend](layout/package.json).
2. config file nesting for `*.vue`.
3. optimize repo structure beyond default `vite-vue-ts` template.
4. introduce `vitest` and its ui, prepare for the testing.

### 0.0.2 client electron-ts frame

1. establish electron minimal app scripts.
2. establish rollup build system of electron main and preload.
3. fix bugs about frontend(layout) public folder build.
4. config testing system for the client repo.
5. [ignore](.gitignore) for output files and folders.

# your stage

(Record the processes you have done beyond the vent template for this app.)
