#!/usr/bin/env zx
const isVercel = (process.env.VERCEL && process.env.VERCEL === '1') || false

console.log('isVercel', isVercel)

console.log('VERCEL', process.env.VERCEL)
console.log('VERCEL_URL', process.env.VERCEL_URL)
console.log('VERCEL_GIT_COMMIT_MESSAGE', process.env.VERCEL_GIT_COMMIT_MESSAGE)
console.log(
  'VERCEL_GIT_COMMIT_AUTHOR_NAME',
  process.env.VERCEL_GIT_COMMIT_AUTHOR_NAME
)

if (!isVercel) {
  console.log('Only running post step on Vercel')
  process.exit()
}

const authorName = process.env.VERCEL_GIT_COMMIT_AUTHOR_NAME
const authorProfileUrl = `https://github.com/${process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN}.png`
const url = process.env.VERCEL_URL
const description = process.env.VERCEL_GIT_COMMIT_MESSAGE
const idRegex = /(\w+)-hoverbaum\.vercel\.app/
const matches = idRegex.exec(url)
const vercelId = matches.length >= 2 ? matches[1] : ''
const title = `The Sword ${vercelId}`

const payload = {
  embeds: [
    {
      author: {
        name: authorName,
        icon_url: authorProfileUrl,
      },
      title,
      url,
      description,
    },
  ],
}

await $`curl \
  -H "Content-Type: application/json" \
  -d ${JSON.stringify(payload)} \
  $DISCROD_WEBHOOK_URL`

console.log('🎮 check Discord.')
