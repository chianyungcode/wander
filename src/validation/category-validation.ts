import { z } from "zod";

export class CategoryValidation {
  static readonly CREATE = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
  });

  static readonly GET_ID = z.object({
    categoryId: z.string().uuid(),
  });

  static readonly UPDATE = CategoryValidation.CREATE.extend({
    id: z.string().uuid().optional(),
  });
}
