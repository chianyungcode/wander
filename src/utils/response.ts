interface Pagination {
  totalData: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface SuccessResponse<T> {
  success: boolean;
  message: string;
  data: T;
  pagination?: Pagination;
}

interface ErrorResponse<T> {
  status: string;
  statusCode: number;
  errors: any;
}

export const successResponse = <T>({
  data,
  pagination,
}: {
  data: T;
  pagination?: Pagination;
}): SuccessResponse<T> => {
  return {
    success: true,
    message: "success",
    data,
    pagination,
  };
};

export const errorResponse = <T>(
  errors: T,
  statusCode: number
): ErrorResponse<T> => {
  return {
    status: "error",
    statusCode: statusCode,
    errors,
  };
};
