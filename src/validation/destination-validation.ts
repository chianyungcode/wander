import { z } from "zod";

export class DestinationValidation {
  static readonly CREATE = z.object({
    name: z.string().min(1, { message: "Minimum 1 character" }),
    description: z.string().min(1, { message: "Minimum 1 character" }),
    street: z.string().min(1, { message: "Minimum 1 character" }),
    city: z.string().min(1, { message: "Minimum 1 character" }),
    province: z.string().min(1, { message: "Minimum 1 character" }),
    country: z.string().min(1, { message: "Minimum 1 character" }),
    postalCode: z.string().min(1, { message: "Minimum 1 character" }),
    ticketPrice: z.number().min(1, { message: "Minimum 1 character" }),
    openHour: z.string().min(1, { message: "Minimum 1 character" }),
    closeHour: z.string().min(1, { message: "Minimum 1 character" }),
    categoryId: z.string().min(1, { message: "Minimum 1 character" }),
    ownerId: z.string().min(1, { message: "Minimum 1 character" }),
    locationId: z.string().min(1, { message: "Minimum 1 character" }),
  });

  static readonly UPDATE = DestinationValidation.CREATE.extend({
    id: z.string(),
  });

  static readonly DELETE = z.object({
    id: z.string(),
  });

  static readonly GET = z.object({
    id: z.string(),
  });
}
