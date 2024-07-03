import { zValidator } from "@hono/zod-validator";
import type { Owner } from "@prisma/client";
import { Hono } from "hono";
import prisma from "../lib/prisma";
import { successResponse } from "../utils/response";
import { OwnerValidation } from "../validation/owner-validation";

const route = new Hono();

// Add new owner
route.post("/", zValidator("json", OwnerValidation.CREATE), async (c) => {
  try {
    const validatedData = c.req.valid("json");

    const newOwner = await prisma.owner.create({
      data: validatedData,
    });

    return c.json(successResponse<Owner>({ data: newOwner }));
  } catch (error) {
    console.log(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Get all owner data
route.get("/", zValidator("query", OwnerValidation.PAGINATION), async (c) => {
  try {
    const { page = "1", limit = "10" } = c.req.valid("query");
    const pageNumber = Number.parseInt(page, 10);
    const limitNumber = Number.parseInt(limit, 10);

    const totalData = await prisma.owner.count();

    const owners = await prisma.owner.findMany(
      {skip: (pageNumber - 1) * limitNumber, take: limitNumber, orderBy: {createdAt: "desc"}, include: {
        destinations: true,
      }}
    );

    if (!owners) {
      return c.json({
        message: "Owner not available",
      });
    }

    const ownersResponse = successResponse<Owner[]>({
      data: owners,
      pagination: {
        totalData,
        page: pageNumber,
        limit: limitNumber,
        totalPages: Math.ceil(totalData / limitNumber),
      },
    });

    return c.json(ownersResponse);
  } catch (error) {
    console.log(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Get owner by id
route.get("/:ownerId", async (c) => {
  try {
    const { ownerId } = c.req.param();
    
    const owner = await prisma.owner.findFirst({
      where: {
        id: ownerId,
      },
      include: {
        destinations: true,
      }
    });

    if (!owner) {
      return c.json({ message: "Owner not found" });
    }

    return c.json(successResponse<Owner>({ data: owner }));
  } catch (error) {
    console.log(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Delete owner by id
route.delete("/:ownerId", async (c) => {
  try {
    const { ownerId } = c.req.param();

    const owner = await prisma.owner.delete({
      where: {
        id: ownerId,
      },
    });

    if (!owner) {
      return c.json({ message: "Owner not found" });
    }

    return c.json({
      message: "Owner deleted",
    });
  } catch (error) {
    console.log(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Delete all owner
route.delete("/", async (c) => {
  try {
    await prisma.owner.deleteMany();

    return c.json({ message: "All owner deleted" });
  } catch (error) {
    console.log(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Update owner by id
route.put("/:ownerId", zValidator("json", OwnerValidation.UPDATE), async (c) => {
  try {
    const { ownerId } = c.req.param();
    const validatedData = c.req.valid("json");

    const updatedOwner = await prisma.owner.update({
      where: {
        id: ownerId,
      },
      data: validatedData,
      include: {
        destinations: true,
      }
    });

    if (!updatedOwner) {
      return c.json({ message: "Owner not found" });
    }

    return c.json(successResponse<Owner>({ data: updatedOwner }));
  } catch (error) {
    console.log(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

export default route;
