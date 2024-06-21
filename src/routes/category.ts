import { Hono } from "hono";
import prisma from "../lib/prisma";
import { Category } from "@prisma/client";
import { successResponse } from "../utils/response";

const app = new Hono();

app.get("/", async (c) => {
  try {
    const { page = "1", limit = "10" } = c.req.query();
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    const totalData = await prisma.category.count();

    const categories: Category[] = await prisma.category.findMany({
      skip: (pageNumber - 1) * limitNumber,
      take: limitNumber,
    });

    return c.json(
      successResponse<Category[]>({
        data: categories,
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

export default app;
