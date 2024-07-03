import { zValidator } from "@hono/zod-validator";
import type { Location } from "@prisma/client";
import { Hono } from "hono";

import prisma from "../lib/prisma";
import type { LocationResponse } from "../model/location-model";
import { successResponse } from "../utils/response";
import { LocationValidation } from "../validation/location-validation";

const route = new Hono();

// Get all locations
route.get("/", zValidator("query", LocationValidation.PAGINATION), async (c) => {
  try {
    const { page = "1", limit = "10", city } = c.req.valid("query");
    const pageNumber = Number.parseInt(page, 10);
    const limitNumber = Number.parseInt(limit, 10);

    const totalData = await prisma.location.count();

    const locations: Location[] = await prisma.location.findMany({
      skip: (pageNumber - 1) * limitNumber,
      take: limitNumber,
      where: {
        city: {
          search: city,
        },
      },
    });

    if (!locations) {
      return c.json({
        message: "Location not available",
      });
    }

    const locationsResponse = successResponse<LocationResponse[]>({
      data: locations,
      pagination: {
        totalData,
        page: pageNumber,
        limit: limitNumber,
        totalPages: Math.ceil(totalData / limitNumber),
      },
    });

    return c.json(locationsResponse);
  } catch (error) {
    console.log(error);
    return c.json(
      {
        error: "Internal server error",
      },
      500,
    );
  }
});

// Create new location
route.post("/", zValidator("json", LocationValidation.CREATE), async (c) => {
  try {
    const validatedData = c.req.valid("json");

    const newLocation: Location = await prisma.location.create({
      data: validatedData,
    });

    const locationResponse = successResponse<LocationResponse>({
      data: newLocation,
    });

    return c.json(locationResponse);
  } catch (error) {
    console.log(error);
    return c.json(
      {
        error: "Internal server error",
      },
      500,
    );
  }
});

// Get location by id
route.get("/:locationId", async (c) => {
  try {
    const { locationId } = c.req.param();

    const location = await prisma.location.findFirst({
      where: {
        id: locationId,
      },
    });

    if (!location) {
      return c.json(
        {
          error: "Location not found",
        },
        404,
      );
    }

    const locationResponse = successResponse<LocationResponse>({
      data: location,
    });

    return c.json(locationResponse);
  } catch (error) {
    console.log(error);
    return c.json(
      {
        error: "Internal server error",
      },
      500,
    );
  }
});

// Delete location by id
route.delete("/:locationId", async (c) => {
  try {
    const { locationId } = c.req.param();

    await prisma.location.delete({
      where: {
        id: locationId,
      },
    });

    return c.json({
      message: "location deleted",
    });
  } catch (error) {
    console.log(error);
    return c.json(
      {
        error: "Internal server error",
      },
      500,
    );
  }
});

// Delete all locations
route.delete("/", async (c) => {
  try {
    await prisma.location.deleteMany();

    return c.json({
      message: "All location deleted",
    });
  } catch (error) {
    console.log(error);
    return c.json(
      {
        error: "Internal server error",
      },
      500,
    );
  }
});

// Update locaton
route.put(
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
        return c.json({
          message: "Location not exist",
        });
      }

      return c.json(
        successResponse<Location>({
          data: location,
        }),
      );
    } catch (error) {
      console.log(error);
      return c.json(
        {
          error: "Internal server error",
        },
        500,
      );
    }
  },
);

export default route;
