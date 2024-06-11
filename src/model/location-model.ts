import { z } from "zod";
import { LocationValidation } from "../validation/location-validation";
import { Location } from "@prisma/client";

const LocationResponse = LocationValidation.CREATE.extend({
  id: z.string(),
});

export type LocationResponse = z.infer<typeof LocationResponse>;
