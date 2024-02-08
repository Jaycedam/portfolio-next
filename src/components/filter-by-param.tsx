"use client";

import { RepoFolder } from "@/utils/types";
import { buttonVariants } from "@components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { X } from "lucide-react";

export default function FilterByParam({
  tags,
  repoFolder,
}: {
  repoFolder: RepoFolder;
  tags: { tag: string }[];
}) {
  const searchParams = useSearchParams();
  const tagParams = searchParams.get("tags");

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>¿Buscando algo específico?</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-wrap gap-4">
            {tags.map((tag, idx) => (
              <Link
                key={idx}
                className={`${
                  tagParams === tag.tag
                    ? "bg-accent text-accent-foreground"
                    : ""
                }  ${buttonVariants({
                  variant: "outline",
                  size: "sm",
                })}`}
                href={`/${repoFolder}?tags=${tag.tag}`}
              >
                {tag.tag}
              </Link>
            ))}
            {tagParams && (
              <Link
                className={buttonVariants({ variant: "ghost", size: "sm" })}
                href={`/${repoFolder}`}
              >
                <X className="h-4 w-auto" />
                Borrar filtros
              </Link>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
