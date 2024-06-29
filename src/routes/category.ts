import { zValidator } from "@hono/zod-validator";
import type { Category } from "@prisma/client";
import { Hono } from "hono";

import prisma from "../lib/prisma";
import { successResponse } from "../utils/response";
import { CategoryValidation } from "../validation/category-validation";

const app = new Hono();

// Get all category
app.get("/", async (c) => {
  try {
    const { page = "1", limit = "10" } = c.req.query();
    const pageNumber = Number.parseInt(page, 10);
    const limitNumber = Number.parseInt(limit, 10);

    const totalData = await prisma.category.count();

    const categories: Category[] = await prisma.category.findMany({
      skip: (pageNumber - 1) * limitNumber,
      take: limitNumber,
    });

    const categoriesResponse = successResponse<Category[]>({
      data: categories,
      pagination: {
        totalData,
        page: pageNumber,
        limit: limitNumber,
        totalPages: Math.ceil(totalData / limitNumber),
      },
    });

    return c.json(categoriesResponse);
  } catch (error) {
    console.log(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Create new category
app.post("/", zValidator("json", CategoryValidation.CREATE), async (c) => {
  try {
    const validatedData = c.req.valid("json");

    const newCategory: Category = await prisma.category.create({
      data: validatedData,
    });

    const categoryResponse = successResponse<Category>({ data: newCategory });

    return c.json(categoryResponse);
  } catch (error) {
    console.error(error);
    return c.json(
      { errors: "Failed to create a new category. Please try again later." },
      500,
    );
  }
});

// Get category by id
app.get(
  "/:categoryId",
  zValidator("param", CategoryValidation.GET_ID),
  async (c) => {
    try {
      const { categoryId } = c.req.valid("param");

      const category = await prisma.category.findFirst({
        where: {
          id: categoryId,
        },
      });

      if (!category) {
        return c.json({ message: "Category not found" });
      }

      const categoryResponse = successResponse<Category>({ data: category });

      return c.json(categoryResponse);
    } catch (error) {
      console.error(error);
      return c.json({
        errors: "Failed to get category. Please try again later",
      });
    }
  },
);

// Update category by id
app.put(
  "/:categoryId",
  zValidator("param", CategoryValidation.GET_ID),
  zValidator("json", CategoryValidation.UPDATE),
  async (c) => {
    try {
      const { categoryId } = c.req.valid("param");
      const validatedData = c.req.valid("json");

      const updatedCategory = await prisma.category.update({
        where: {
          id: categoryId,
        },
        data: validatedData,
      });

      if (!updatedCategory) {
        return c.json({ message: "Category not found" });
      }

      const categoryResponse = successResponse<Category>({
        data: updatedCategory,
      });

      return c.json(categoryResponse);
    } catch (error) {
      console.error(error);

      return c.json(
        { errors: "Failed to update category. Please try again later." },
        500,
      );
    }
  },
);

app.delete(
  "/:categoryId",
  zValidator("param", CategoryValidation.GET_ID),
  async (c) => {
    try {
      const { categoryId } = c.req.valid("param");

      const category = await prisma.category.delete({
        where: {
          id: categoryId,
        },
      });

      if (!category) {
        return c.json({ message: "Category not found" });
      }

      return c.json({
        message: "Category deleted",
      });
    } catch (error) {
      console.error(error);
      return c.json({ errors: "Failed to delete category" });
    }
  },
);

app.delete("/", async (c) => {
  try {
    await prisma.category.deleteMany();

    return c.json({ message: "All categories have been deleted" });
  } catch (error) {
    console.error(error);
    return c.json({ errors: "Failed to delete all categories" });
  }
});

export default app;
