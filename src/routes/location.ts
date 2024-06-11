import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { LocationValidation } from "../validation/location-validation";
import { successResponse } from "../utils/response";
import prisma from "../lib/prisma";
import { Location } from "@prisma/client";
import { LocationResponse } from "../model/location-model";

const app = new Hono();

// Get all locations
app.get("/", async (c) => {
  try {
    const locations: Location[] = await prisma.location.findMany();

    return c.json(successResponse<Location[]>(locations));
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

    return c.json(successResponse<Location>(newLocation));
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

    return c.json(successResponse<Location>(location));
  } catch (error) {
    console.log(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

export default app;
