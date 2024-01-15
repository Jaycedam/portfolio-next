import { z } from "zod";

// coerce is used to transform the default str value coming from the form into a int value
// the id is optional so the form can be used to create or update an existing value
// https://zod.dev/?id=coercion-for-primitives

export const projectSchema = z.object({
  id: z.coerce.number().int().optional(),
  name: z.string().min(3),
  imageUrl: z.string().url(),
  url: z.string().url(),
  homepage: z.boolean(),
  areaId: z.coerce.number().int(),
});
export type TProject = z.infer<typeof projectSchema>;

export const projectAreaSchema = z.object({
  id: z.coerce.number().int().optional(),
  name: z.string().min(3),
});
export type TProjectArea = z.infer<typeof projectAreaSchema>;

export const carreerSchema = z.object({
  id: z.coerce.number().int().optional(),
  name: z.string(),
  company: z.string(),
  about: z.string(),
  date: z.string(),
  typeId: z.coerce.number().int(),
});
export type TCarreer = z.infer<typeof carreerSchema>;

export const carreerTypeSchema = z.object({
  id: z.coerce.number().int().optional(),
  name: z.string().min(3),
});
export type TCarreerType = z.infer<typeof carreerTypeSchema>;

export const userSchema = z.object({
  id: z.coerce.number().int().optional(),
  username: z.string().min(3),
  password: z.string().min(10),
});
export type TUser = z.infer<typeof userSchema>;
