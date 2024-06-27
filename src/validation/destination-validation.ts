import { z } from "zod";

export class DestinationValidation {
  static readonly GET_ID = z.object({
    id: z.string().uuid(),
  });

  static readonly CREATE = z.object({
    name: z
      .string()
      .min(2, { message: "Nama harus minimal 2 karakter" })
      .max(100, { message: "Nama maksimal 100 karakter" }),
    description: z
      .string()
      .min(10, { message: "Deskripsi harus minimal 10 karakter" })
      .max(1000, { message: "Deskripsi maksimal 1000 karakter" }),
    street: z
      .string()
      .min(3, { message: "Alamat jalan harus minimal 3 karakter" })
      .max(200, { message: "Alamat jalan maksimal 200 karakter" }),
    city: z
      .string()
      .min(2, { message: "Nama kota harus minimal 2 karakter" })
      .max(50, { message: "Nama kota maksimal 50 karakter" }),
    province: z
      .string()
      .min(2, { message: "Nama provinsi harus minimal 2 karakter" })
      .max(50, { message: "Nama provinsi maksimal 50 karakter" }),
    country: z
      .string()
      .min(2, { message: "Nama negara harus minimal 2 karakter" })
      .max(50, { message: "Nama negara maksimal 50 karakter" }),
    postalCode: z
      .string()
      .regex(/^\d{5}(-\d{4})?$/, { message: "Kode pos tidak valid" }),
    ticketPrice: z
      .number()
      .positive({ message: "Harga tiket harus lebih dari 0" }),
    openHour: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
      message: "Format jam buka tidak valid (HH:MM)",
    }),
    closeHour: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
      message: "Format jam tutup tidak valid (HH:MM)",
    }),
    categoryId: z
      .string()
      .uuid({ message: "ID kategori harus berupa UUID yang valid" }),
    ownerId: z
      .string()
      .uuid({ message: "ID pemilik harus berupa UUID yang valid" }),
    locationId: z
      .string()
      .uuid({ message: "ID lokasi harus berupa UUID yang valid" }),
  });

  static readonly UPDATE = DestinationValidation.CREATE;

  static readonly DELETE = z.object({
    id: z.string(),
  });

  static readonly GET = z.object({
    id: z.string(),
  });
}
