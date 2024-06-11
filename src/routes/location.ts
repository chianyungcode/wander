import { Location } from "@prisma/client";
import prisma from "../lib/prisma";
import { Hono } from "hono";
import { successResponse } from "../utils/response";
import { zValidator } from "@hono/zod-validator";
import { LocationValidation } from "../validation/location-validation";
import { LocationResponse } from "../model/location-model";

const app = new Hono();

// Get all locations
app.get("/", async (c) => {
  try {
    const locations: Location[] = await prisma.location.findMany();

    return c.json(successResponse<LocationResponse[]>(locations));
  } catch (error) {
    console.log(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Create a new location
app.post("/", zValidator("json", LocationValidation.CREATE), async (c) => {
  try {
    const validatedData = c.req.valid("json");

    const newLocation: Location = await prisma.location.create({
      data: validatedData,
    });

    return c.json(successResponse<LocationResponse>(newLocation));
  } catch (error) {
    console.log(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Get location by id
app.get("/:locationId", async (c) => {
  try {
    const { locationId } = c.req.param();

    const location = await prisma.location.findFirst({
      where: {
        id: locationId,
      },
    });

    if (!location) {
      return c.json({ error: "Location not found" }, 404);
    }

    return c.json(successResponse<LocationResponse>(location));
  } catch (error) {
    console.log(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Delete location by id
app.delete("/:locationId", async (c) => {
  try {
    const { locationId } = c.req.param();

    await prisma.location.delete({
      where: {
        id: locationId,
      },
    });

    return c.json({ message: "location deleted" });
  } catch (error) {
    console.log(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Delete all locations
app.delete("/", async (c) => {
  try {
    await prisma.location.deleteMany();

    return c.json({ message: "All location deleted" });
  } catch (error) {
    console.log(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Update locaton
app.put(
  "/:locationId",
  zValidator("json", LocationValidation.UPDATE),
  async (c) => {
    try {
      const { locationId } = c.req.param();
      const validatedData = c.req.valid("json");

      const location = await prisma.location.update({
        where: {
          id: locationId,
        },
        data: validatedData,
      });

      if (!location) {
        return c.json({ message: "Location not exist" });
      }

      return c.json(successResponse<Location>(location));
    } catch (error) {
      console.log(error);
      return c.json({ error: "Internal server error" }, 500);
    }
  }
);

export default app;
