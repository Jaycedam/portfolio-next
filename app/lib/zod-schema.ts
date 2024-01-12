import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(3),
  imageUrl: z.string().url(),
  url: z.string().url(),
  homepage: z.boolean(),
  areaId: z.number().int(),
});

export const projectAreaSchema = z.object({
  name: z.string().min(3),
});

export const carreerSchema = z.object({
  name: z.string(),
  company: z.string(),
  about: z.string(),
  date: z.string(),
  typeId: z.number().int(),
});

export const carreerTypeSchema = z.object({
  name: z.string(),
});

export const userSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(10),
});
