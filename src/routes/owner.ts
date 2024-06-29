import { zValidator } from "@hono/zod-validator";
import type { Owner } from "@prisma/client";
import { Hono } from "hono";
import prisma from "../lib/prisma";
import { successResponse } from "../utils/response";
import { OwnerValidation } from "../validation/owner-validation";

const app = new Hono();

// Add new owner
app.post("/", zValidator("json", OwnerValidation.CREATE), async (c) => {
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
app.get("/", async (c) => {
  try {
    const owners = await prisma.owner.findMany();

    return c.json(successResponse<Owner[]>({ data: owners }));
  } catch (error) {
    console.log(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Get owner by id
app.get("/:ownerId", async (c) => {
  try {
    const { ownerId } = c.req.param();

    const owner = await prisma.owner.findFirst({
      where: {
        id: ownerId,
      },
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

// Update owner by id
app.put("/:ownerId", zValidator("json", OwnerValidation.UPDATE), async (c) => {
  try {
    const { ownerId } = c.req.param();
    const validatedData = c.req.valid("json");

    const updatedOwner = await prisma.owner.update({
      where: {
        id: ownerId,
      },
      data: validatedData,
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

export default app;
