# glob-import-alias

Example on how to use aliased lazy modules with vite

* In `vite.config.ts` we add all paths from `tsconfig.json` to `resolve.alias` so vite and rollup know where to find them.
* In `Lazy.tsx` we do the glob import `import.meta.glob<LazyImport>('@ns/**/*.tsx')`.
* Then when we find a matching name we try to load that component from the glob import.