import { z } from "zod";

export namespace CategoryValidation {
  export const CREATE = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
  });

  export const GET_ID = z.object({
    categoryId: z.string().uuid(),
  });

  export const UPDATE = CategoryValidation.CREATE.extend({
    id: z.string().uuid().optional(),
  });
}
