import { drizzle, LibSQLDatabase } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
// import { DATABASE_AUTH_TOKEN, DATABASE_URL } fro./envenv";
import { migrate } from "drizzle-orm/libsql/migrator";

const client = createClient({
  url: "file:local.db",
});

export const db = drizzle(client);
