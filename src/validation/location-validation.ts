import { z, ZodType } from "zod";

export class LocationValidation {
  static readonly CREATE: ZodType = z.object({
    name: z.string(),
    street: z.string(),
    city: z.string(),
    province: z.string(),
    country: z.string(),
    postalCode: z.string(),
  });
}
