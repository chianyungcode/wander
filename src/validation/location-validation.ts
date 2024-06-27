import { z } from "zod";

export class LocationValidation {
  static readonly CREATE = z.object({
    city: z.string(),
    province: z.string(),
    country: z.string(),
  });

  static readonly UPDATE = LocationValidation.CREATE.extend({
    id: z.string().uuid().optional(),
  });

  static readonly DELETE = z.object({
    id: z.string(),
  });

  static readonly PAGINATION = z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
    city: z.string().optional(),
  });
}
