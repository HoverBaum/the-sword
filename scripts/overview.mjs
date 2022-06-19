#!/usr/bin/env zx

try {
  await $`cd ./scripts/overview && npm ls`
} catch {
  console.log('Installing missing dependencies before run.')
  await $`cd ./scripts/overview && npm i`
}

await $`cd ./scripts/overview && npm start`
