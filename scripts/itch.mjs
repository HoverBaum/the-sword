#!/usr/bin/env zx

console.log('Building for itch 🎮')

await $`tsc`

// Build using relative paths.
await $`vite build --base=./`

// Zip files.
await $`zip -r the-sword.zip dist`

console.log('All done 🚀')
