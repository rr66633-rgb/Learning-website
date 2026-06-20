import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, adminProcedure, router } from "./_core/trpc";
import { getDb } from "./db";
import { inquiries } from "../drizzle/schema";
import { desc, eq, sql } from "drizzle-orm";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  inquiry: router({
    // Public: submit a new inquiry (no auth required)
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(2).max(255),
        email: z.string().email().max(320),
        phone: z.string().max(20).optional(),
        childAge: z.string().max(50).optional(),
        message: z.string().max(2000).optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");

        await db.insert(inquiries).values({
          name: input.name,
          email: input.email,
          phone: input.phone || null,
          childAge: input.childAge || null,
          message: input.message || null,
        });

        // Notify owner about new inquiry
        await notifyOwner({
          title: "استفسار تسجيل جديد",
          content: `اسم ولي الأمر: ${input.name}\nالبريد: ${input.email}\nالهاتف: ${input.phone || "غير محدد"}\nعمر الطفل: ${input.childAge || "غير محدد"}\nالرسالة: ${input.message || "بدون رسالة"}`,
        }).catch(() => { /* silent fail for notification */ });

        return { success: true };
      }),

    // Admin: list all inquiries
    list: adminProcedure
      .input(z.object({
        status: z.enum(["all", "new", "contacted", "enrolled", "archived"]).optional().default("all"),
        page: z.number().min(1).optional().default(1),
        limit: z.number().min(1).max(100).optional().default(20),
      }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");

        const offset = (input.page - 1) * input.limit;

        let items;
        if (input.status !== "all") {
          items = await db.select().from(inquiries).where(eq(inquiries.status, input.status)).orderBy(desc(inquiries.createdAt)).limit(input.limit).offset(offset);
        } else {
          items = await db.select().from(inquiries).orderBy(desc(inquiries.createdAt)).limit(input.limit).offset(offset);
        }

        // Get total count
        let countQuery;
        if (input.status !== "all") {
          countQuery = await db.select({ count: sql<number>`count(*)` }).from(inquiries).where(eq(inquiries.status, input.status));
        } else {
          countQuery = await db.select({ count: sql<number>`count(*)` }).from(inquiries);
        }
        const total = countQuery[0]?.count ?? 0;

        return { items, total, page: input.page, limit: input.limit };
      }),

    // Admin: update inquiry status
    updateStatus: adminProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["new", "contacted", "enrolled", "archived"]),
        notes: z.string().max(2000).optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");

        const updateData: Record<string, unknown> = { status: input.status };
        if (input.notes !== undefined) {
          updateData.notes = input.notes;
        }

        await db.update(inquiries).set(updateData).where(eq(inquiries.id, input.id));
        return { success: true };
      }),

    // Admin: export all inquiries (for CSV/Excel download)
    export: adminProcedure
      .input(z.object({
        status: z.enum(["all", "new", "contacted", "enrolled", "archived"]).optional().default("all"),
      }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");

        let items;
        if (input.status !== "all") {
          items = await db.select().from(inquiries).where(eq(inquiries.status, input.status)).orderBy(desc(inquiries.createdAt));
        } else {
          items = await db.select().from(inquiries).orderBy(desc(inquiries.createdAt));
        }

        return { items };
      }),

    // Admin: get stats
    stats: adminProcedure.query(async () => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      const result = await db.select({
        status: inquiries.status,
        count: sql<number>`count(*)`,
      }).from(inquiries).groupBy(inquiries.status);

      const stats = { new: 0, contacted: 0, enrolled: 0, archived: 0, total: 0 };
      for (const row of result) {
        stats[row.status as keyof typeof stats] = row.count;
        stats.total += row.count;
      }

      return stats;
    }),
  }),
});

export type AppRouter = typeof appRouter;
