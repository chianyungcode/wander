import { z } from "zod";

export namespace LocationValidation {
  export const CREATE = z.object({
    city: z.string(),
    province: z.string(),
    country: z.string(),
  });

  export const UPDATE = LocationValidation.CREATE.extend({
    id: z.string().uuid().optional(),
  });

  export const DELETE = z.object({
    id: z.string(),
  });

  export const PAGINATION = z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
    city: z.string().optional(),
  });
}
