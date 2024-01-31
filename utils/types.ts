import {
  carreerSchema,
  carreerTypeSchema,
  emailSchema,
  userSchema,
} from "@/utils/zod-schema";
import { JSXElementConstructor, ReactElement } from "react";
import { z } from "zod";

export type CarreerForm = z.infer<typeof carreerSchema>;

export type CarreerTypeForm = z.infer<typeof carreerTypeSchema>;

export type UserForm = z.infer<typeof userSchema>;

export type EmailForm = z.infer<typeof emailSchema>;

export type TableSelection =
  | "project"
  | "project-area"
  | "carreer"
  | "carreer-type";

export type NavLinks = { label: string; href: string }[];

export type MDXMeta = {
  id: string;
  title: string;
  area: string;
  description: string;
  date: string;
  featured: string;
  tags: string[];
  image: string;
};

export type MDX = {
  meta: MDXMeta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};

export type RepoFolder = "projects" | "blog";

export type GithubTree = {
  tree: [
    {
      path: string;
    }
  ];
};
