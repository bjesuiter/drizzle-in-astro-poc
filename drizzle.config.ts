import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  out: "./migrations",
  schema: "./src/db/schema.ts",
  breakpoints: true,
  driver: "libsql",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "file:local.db",
  },
} satisfies Config;
