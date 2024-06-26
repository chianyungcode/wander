import { z } from "zod";
import { LocationValidation } from "../validation/location-validation";

const LocationResponse = LocationValidation.CREATE.extend({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type LocationResponse = z.infer<typeof LocationResponse>;
