import {readFile, writeFile} from 'fs/promises'

const html = await readFile('src/index.html', 'utf-8')
const packageJson = JSON.parse(await readFile('package.json', 'utf-8'))

const componentVersion = packageJson.dependencies['a-bundleless-future-counter-component'].slice(1)

await writeFile(
  'src/index.html',
  html.replace(
    /\/a-bundleless-future-counter-component\/\d+\.\d+\.\d+\//,
    `/a-bundleless-future-counter-component/${componentVersion}/`,
  ),
)
