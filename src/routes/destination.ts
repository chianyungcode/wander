import prisma from "../lib/prisma";
import { Hono } from "hono";
import { errorResponse, successResponse } from "../utils/response";
import { zValidator } from "@hono/zod-validator";
import { Destination } from "@prisma/client";
import { DestinationValidation } from "../validation/destination-validation";

const app = new Hono();

// Get all destination
app.get("/", async (c) => {
  try {
    const { page = "1", limit = "10" } = c.req.query();
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    const totalData = await prisma.destination.count();

    const destinations: Destination[] = await prisma.destination.findMany({
      skip: (pageNumber - 1) * limitNumber,
      take: limitNumber,
    });

    return c.json(
      successResponse<Destination[]>({
        data: destinations,
        pagination: {
          totalData,
          page: pageNumber,
          limit: limitNumber,
          totalPages: Math.ceil(totalData / limitNumber),
        },
      })
    );
  } catch (error) {
    console.log(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Create destination
app.post("/", zValidator("json", DestinationValidation.CREATE), async (c) => {
  try {
    const validatedData = c.req.valid("json");

    const newDestination: Destination = await prisma.destination.create({
      data: validatedData,
    });

    return c.json(successResponse<Destination>({ data: newDestination }), 201);
  } catch (error) {
    console.log(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Get destination
app.get("/:id", async (c) => {
  try {
    const { id } = c.req.param();

    const destination = await prisma.destination.findFirst({
      where: {
        id,
      },
    });

    if (!destination) {
      return c.json({ error: "Destination not found" }, 404);
    }

    return c.json(successResponse<Destination>({ data: destination }));
  } catch (error) {
    console.log(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Update destination
app.put(
  "/:id",
  zValidator("json", DestinationValidation.UPDATE),
  zValidator("param", DestinationValidation.GET_ID),
  async (c) => {
    try {
      const validatedData = c.req.valid("json");
      const { id } = c.req.valid("param");

      const updatedDestination = await prisma.destination.update({
        where: {
          id,
        },
        data: validatedData,
      });

      if (!updatedDestination) {
        return c.json({ message: "Destination not found" });
      }

      const destinationResponse = successResponse<Destination>({
        data: updatedDestination,
      });

      return c.json(destinationResponse);
    } catch (error) {
      console.error(error);

      return c.json({ message: "Internal server error" }, 500);
    }
  }
);

// Delete destination
app.delete(
  "/:id",
  zValidator("param", DestinationValidation.GET_ID),
  async (c) => {
    try {
      const { id } = c.req.valid("param");

      const destination = await prisma.destination.delete({
        where: {
          id,
        },
      });

      if (!destination) {
        return c.json({
          message: "Failed to delete destination, ID not found",
        });
      }

      return c.json({ message: "Destination deleted" });
    } catch (error) {
      console.error(error);
      return c.json({ message: "Internal server errror" }, 500);
    }
  }
);

// Delete all destination
app.delete("/", async (c) => {
  try {
    await prisma.destination.deleteMany();

    return c.json({ message: "All destination have been deleted" });
  } catch (error) {
    console.error(error);

    return c.json({ message: "Internal server error" }, 500);
  }
});

// Upload image for destination

app.post("/:id/upload", async (c) => {
  try {
  } catch (error) {}
});
export default app;
