import { RepoFolder } from "@/utils/types";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { buttonVariants } from "@components/ui/button";
import { getMDXMeta } from "@/utils/fetch-mdx";

export default async function FilterByParam({
  repoFolder,
}: {
  repoFolder: RepoFolder;
}) {
  const data = await getMDXMeta(repoFolder);

  // sets an array from all the tags from the original data variable
  const tags = Array.from(new Set(data.flatMap((item) => item.tags))).map(
    (tag) => ({ tag })
  );

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>¿Buscando algo específico?</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-wrap gap-4">
            {tags.map((tag, idx) => (
              <Link
                key={idx}
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                })}
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
