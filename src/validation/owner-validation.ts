import { ZodType, z } from "zod";
import { LocationValidation } from "./location-validation";

export namespace OwnerValidation {
  export const CREATE = z.object({
    name: z.string().min(1, { message: "Minimal 1 character" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z
      .string()
      .min(8, { message: "Phone number must be at least 8 characters" }),
    address: z.string().min(1, { message: "Address cannot be empty" }),
  });

  export const UPDATE = LocationValidation.CREATE.extend({
    id: z.string(),
  });

  export const DELETE = z.object({
    id: z.string(),
  });

  export const GET = z.object({
    id: z.string(),
  });
}
