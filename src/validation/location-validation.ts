import { z, ZodType } from "zod";

export class LocationValidation {
  static readonly CREATE = z.object({
    city: z.string(),
    province: z.string(),
    country: z.string(),
  });

  static readonly UPDATE = LocationValidation.CREATE.extend({
    id: z.string(),
  });
}
