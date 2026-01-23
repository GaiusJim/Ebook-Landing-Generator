import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  email: text("email"),
  clickedCta: boolean("clicked_cta").default(false),
});

export const timers = pgTable("timers", {
  id: serial("id").primaryKey(),
  endTime: timestamp("end_time").notNull(),
});

export const insertLeadSchema = createInsertSchema(leads);
export const insertTimerSchema = createInsertSchema(timers);

export type Lead = typeof leads.$inferSelect;
export type InsertLead = z.infer<typeof insertLeadSchema>;

export type Timer = typeof timers.$inferSelect;
export type InsertTimer = z.infer<typeof insertTimerSchema>;
