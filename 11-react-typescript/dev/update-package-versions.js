import {readFile, writeFile} from 'fs/promises'

const html = await readFile('src/index.html', 'utf-8')
const packageJson = JSON.parse(await readFile('package.json', 'utf-8'))

const reactVersion = packageJson.dependencies['react'].slice(1)
const reactDomVersion = packageJson.dependencies['react-dom'].slice(1)
const htmVersion = packageJson.dependencies['htm'].slice(1)

await writeFile(
  'src/index.html',
  html
    .replace(/npm:react@\d+\.\d+\.\d+/, `npm:react@${reactVersion}`)
    .replace(/npm:react-dom@\d+\.\d+\.\d+/, `npm:react-dom@${reactDomVersion}`)
    .replace(/npm:htm@\d+\.\d+\.\d+/, `npm:htm@${htmVersion}`),
)
