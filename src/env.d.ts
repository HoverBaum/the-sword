/// <reference types="vite/client" />

/**
 * NOTE:
 * There is a weird behavior with the env typing that only shows up during build.
 * Property 'VITE_TEXT_SPEED' of type 'number | undefined' is not assignable to 'string' index type 'string | boolean | undefined'.
 * Even though we follow: https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
 */

interface ImportMetaEnv {
  //@ts-ignore
  readonly VITE_TEXT_SPEED?: number
  readonly VITE_IS_MUTED?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
