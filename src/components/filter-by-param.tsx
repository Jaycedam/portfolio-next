"use client";

import { RepoFolder } from "@/utils/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { buttonVariants } from "@components/ui/button";

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
                className={`${buttonVariants({
                  variant: "outline",
                  size: "sm",
                })}
                ${tagParams === tag.tag ? "bg-accent" : ""}`}
                href={`/${repoFolder}?tags=${tag.tag}`}
              >
                {tag.tag}
              </Link>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
