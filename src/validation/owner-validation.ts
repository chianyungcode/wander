import {  z } from "zod";

export namespace OwnerValidation {
  export const CREATE = z.object({
    name: z.string().min(1, { message: "Minimal 1 character" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z
      .string()
      .min(8, { message: "Phone number must be at least 8 characters" }),
    address: z.string().min(1, { message: "Address cannot be empty" }),
    city: z.string(),
    country: z.string(),
    postalCode: z.string(),
  });

  export const UPDATE = OwnerValidation.CREATE

  export const DELETE = z.object({
    id: z.string(),
  });

  export const GET = z.object({
    id: z.string(),
  });

  export const PAGINATION = z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
  });
}
