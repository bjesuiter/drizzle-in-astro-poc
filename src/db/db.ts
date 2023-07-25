import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { DATABASE_AUTH_TOKEN, DATABASE_URL } from "../env";
import pDefer from "p-defer";

const deferred = pDefer();
export const dbPromise = deferred.promise;

export async function initDb() {
  const client = createClient({
    url: DATABASE_URL,
    authToken: DATABASE_AUTH_TOKEN,
  });

  const db = drizzle(client);
  deferred.resolve(db);

  return dbPromise;
}
