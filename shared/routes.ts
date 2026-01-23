import { z } from 'zod';
import { insertLeadSchema, leads, timers, insertTimerSchema } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  leads: {
    create: {
      method: 'POST' as const,
      path: '/api/leads',
      input: insertLeadSchema,
      responses: {
        201: z.custom<typeof leads.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
  timer: {
    get: {
      method: 'GET' as const,
      path: '/api/timer',
      responses: {
        200: z.custom<typeof timers.$inferSelect | null>(),
      },
    },
    update: {
      method: 'POST' as const,
      path: '/api/timer',
      input: insertTimerSchema,
      responses: {
        200: z.custom<typeof timers.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
