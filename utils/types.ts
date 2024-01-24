import {
  carreerSchema,
  carreerTypeSchema,
  emailSchema,
  projectAreaSchema,
  projectSchema,
  userSchema,
} from "@/lib/zod-schema";
import { z } from "zod";

export type ProjectForm = z.infer<typeof projectSchema>;

export type ProjectAreaForm = z.infer<typeof projectAreaSchema>;

export type CarreerForm = z.infer<typeof carreerSchema>;

export type CarreerTypeForm = z.infer<typeof carreerTypeSchema>;

export type UserForm = z.infer<typeof userSchema>;

export type EmailForm = z.infer<typeof emailSchema>;
