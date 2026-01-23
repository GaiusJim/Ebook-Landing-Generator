import { leads, timers, type Lead, type InsertLead, type Timer, type InsertTimer } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
  getTimer(): Promise<Timer | undefined>;
  setTimer(timer: InsertTimer): Promise<Timer>;
}

export class DatabaseStorage implements IStorage {
  async createLead(insertLead: InsertLead): Promise<Lead> {
    const [lead] = await db.insert(leads).values(insertLead).returning();
    return lead;
  }

  async getTimer(): Promise<Timer | undefined> {
    const [timer] = await db.select().from(timers).limit(1);
    return timer;
  }

  async setTimer(insertTimer: InsertTimer): Promise<Timer> {
    const [existing] = await db.select().from(timers).limit(1);
    if (existing) {
      const [updated] = await db
        .update(timers)
        .set(insertTimer)
        .where(eq(timers.id, existing.id))
        .returning();
      return updated;
    }
    const [timer] = await db.insert(timers).values(insertTimer).returning();
    return timer;
  }
}

export const storage = new DatabaseStorage();
