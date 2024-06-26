import { Location } from "@prisma/client";

export function formatLocations(locations: Location[]) {
  const formattedLocations = locations.map((location) => ({
    ...location,
    createdAt: location.createdAt.toISOString(),
    updatedAT: location.updatedAt.toISOString(),
  }));

  return formattedLocations;
}
