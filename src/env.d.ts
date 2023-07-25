/// <reference types="astro/client" />

// This is the standard astro + vite way of accessing environment variables
//  https://docs.astro.build/reference/environment-variables
// We use it complimentary with this zod parsing:
//  https://github.com/drizzle-team/drizzle-orm/blob/main/examples/libsql/src/env.ts

interface ImportMetaEnv {
  readonly DATABASE_URL: string;
  readonly DATABASE_AUTH_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
