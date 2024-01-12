import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(3),
  imageUrl: z.string().url(),
  url: z.string().url(),
  homepage: z.boolean(),
  areaId: z.number().int(),
});
export type TProject = z.infer<typeof projectSchema>;

export const projectAreaSchema = z.object({
  name: z.string().min(3),
});
export type TProjectArea = z.infer<typeof projectAreaSchema>;

export const carreerSchema = z.object({
  name: z.string(),
  company: z.string(),
  about: z.string(),
  date: z.string(),
  typeId: z.number().int(),
});
export type TCarreer = z.infer<typeof carreerSchema>;

export const carreerTypeSchema = z.object({
  name: z.string(),
});
export type TCarreerType = z.infer<typeof carreerTypeSchema>;

export const userSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(10),
});
export type TUser = z.infer<typeof userSchema>;
