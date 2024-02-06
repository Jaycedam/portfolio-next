import { z } from "zod";

// coerce is used to transform the default str value coming from the form into a int value
// the id is optional so the form can be used to create or update an existing value
// https://zod.dev/?id=coercion-for-primitives

export const carreerSchema = z.object({
  id: z.coerce.number().int().optional(),
  name: z.string(),
  company: z.string(),
  about: z.string(),
  date: z.string(),
  typeId: z.coerce.number().int(),
});

export const carreerTypeSchema = z.object({
  id: z.coerce.number().int().optional(),
  name: z.string().min(3),
});

export const userSchema = z.object({
  id: z.coerce.number().int().optional(),
  username: z.string().min(3),
  password: z.string().min(10),
});

export const emailSchema = z.object({
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(3),
});
