import { z } from "zod";
import { LocationValidation } from "../validation/location-validation";

const LocationResponse = LocationValidation.CREATE.extend({
  id: z.string(),
});

export type LocationResponse = z.infer<typeof LocationResponse>;
