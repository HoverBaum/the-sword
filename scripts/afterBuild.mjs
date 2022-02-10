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

await $`curl \
  -H "Content-Type: application/json" \
  -d '{"content": "https://${process.env.VERCEL_URL}"}' \
  $DISCROD_WEBHOOK_URL`

console.log('🎮 check Discord.')
