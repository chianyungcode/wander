import { createFactory } from "hono/factory";
import { logger } from "hono/logger";

interface SuccessResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const successResponse = <T>(data: T): SuccessResponse<T> => {
  return {
    success: true,
    message: "success",
    data,
  };
};

export const errorResponse = (message: string) => ({
  success: false,
  message,
});
