/// <reference types="vite/client" />

/**
 * NOTE:
 * There is a weird behavior witht eh en typing.
 * Property 'VITE_TEXT_SPEED' of type 'number | undefined' is not assignable to 'string' index type 'string | boolean | undefined'.
 * Even though we follow: https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
 * I currently don't care to "fix" this.
 */

interface ImportMetaEnv {
  //@ts-ignore
  readonly VITE_TEXT_SPEED?: number
  readonly VITE_IS_MUTED?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
