// eslint-disable-next-line @typescript-eslint/no-var-requires
const esbuild = require(`esbuild`)

esbuild
  .build({
    entryPoints: [`./src/index.ts`],
    outfile: `dist/index.js`,
    bundle: true,
    minify: true,
    platform: `node`,
    sourcemap: true,
    target: `node14`,
  })
  .catch(() => process.exit(1))
