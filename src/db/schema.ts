import { sql, type InferModel } from "drizzle-orm";
import {
  integer,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  fullName: text("full_name"),
  phone: text("phone"),
});

export type User = InferModel<typeof users>; // return type when queried
export type InsertUser = InferModel<typeof users, "insert">; // insert type

export const posts = sqliteTable('posts', {
	id: integer('id').primaryKey(),
	title: text('title').notNull(),
	body: text('body').notNull(),
	authorId: integer('author_id').notNull().references(() => users.id),
	createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
	updateAt: integer('updated_at', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
});
export const insertPostSchema = createInsertSchema(posts);
export const selectPostSchema = createSelectSchema(posts);