import { z } from "zod";
import { LocationValidation } from "../validation/location-validation";

export type LocationResponse = {
  id: number;
  name: string;
  street: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
};
