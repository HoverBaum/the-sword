#!/usr/bin/env zx

let IS_WATCHING = false

const { fs } = require('zx')

const inkFile = path.join(__dirname, './../story/TheInkSword.ink')
const jsonFile = path.join(__dirname, './../story/TheInkSword.ink.json')
const tsFile = path.join(__dirname, './../story/storyContent.ts')

let inklecatePath
if (process.platform === 'darwin') {
  inklecatePath = path.join(__dirname, './../inklecate/mac/inklecate')
}
if(process.platform === 'win32') {
  inklecatePath = path.join(__dirname, './../inklecate/win32/inklecate.exe')
}

if (!inklecatePath || fs.ensureFileSync(inklecatePath)) {
  console.error(`No inklecate configured for your OS "${process.platform}".`)
  process.exit(1)
}

const compileFile = async (filepath) => {
  console.log(`Compiling ${filepath}`)
  await $`${inklecatePath} ${inkFile}`
  console.log('Compiled to json')
  await createTSFile()
}

const createTSFile = async () => {
  const jsonContent = await fs.readFile(jsonFile)
  const tsContent = `export const storyContent = ${jsonContent}`
  await fs.writeFile(tsFile, tsContent)
  console.log('TS file updated')
}

console.log('Compiling initial json')
await compileFile(inkFile)

if(IS_WATCHING) {
  fs.watchFile(inkFile, { interval: 500 }, (curr, prev) => {
    console.log(`\n${inkFile} Changed`)
  
    // Compile the story to json using inklecate
    compileFile(inkFile)
  })
  console.log('\nWaiting for changes')
  }