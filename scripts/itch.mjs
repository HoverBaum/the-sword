#!/usr/bin/env zx

console.log('Building for itch 🎮')

await $`tsc`

// Build using relative paths.
await $`vite build --base=./`

// Zip files.
const packageJSON = await fs.readFile('./package.json')
const packageData = JSON.parse(packageJSON)
const version = packageData.version.replace(':', '-')
await $`zip -r the-sword-${version}.zip dist`

console.log('All done 🚀')
