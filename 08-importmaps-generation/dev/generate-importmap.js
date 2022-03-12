import fs from 'node:fs/promises'
import {Generator} from '@jspm/generator'

const args = process.argv.slice(2)
const srcDir = args[0]
const isLocal = args[1] === 'local'

const dependencyVersions = await loadDependencyVerions()

const generator = new Generator({
  mapUrl: srcDir + '/',
  defaultProvider: isLocal ? 'nodemodules' : 'custom',
  customProviders: {
    custom: {
      pkgToUrl({name, version}) {
        return `https://a-bundleless-future.netlify.app/${name}/${version}/`
      },
      parseUrlPkg() {
        return undefined
      },
      resolveLatestTarget({registry, name}) {
        if (!dependencyVersions[name]) return null

        return {registry, name, version: dependencyVersions[name]}
      },
    },
  },
  env: ['production', 'browser'],
})

await generator.traceInstall('./08-importmaps-generation.js')

const templateHtml = await fs.readFile(`${srcDir}/index.template.html`, 'utf-8')

const htmlWithImportMap = templateHtml.replace(
  '<script type="importmap"></script>',
  `<script type="importmap">${JSON.stringify(generator.getMap())}</script>`,
)

await fs.writeFile(`${srcDir}/index.html`, htmlWithImportMap)

async function loadDependencyVerions() {
  const packageJson = JSON.parse(await fs.readFile('package.json'))

  const ret = {}

  for (const [dependency, semverRange] of Object.entries(packageJson.dependencies)) {
    ret[dependency] = semverRange.slice(1)
  }

  return ret
}
