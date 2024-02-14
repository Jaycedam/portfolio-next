import { RepoFolder } from "@/utils/types";
import Link from "next/link";
import { getMDXMeta } from "@/utils/fetch-mdx";
import { badgeVariants } from "@components/ui/badge";

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
    <>
      {tags.map((tag, idx) => (
        <Link
          key={idx}
          className={badgeVariants({
            variant: "outline",
          })}
          href={`/${repoFolder}?tags=${tag.tag}`}
        >
          {tag.tag}
        </Link>
      ))}
    </>
  );
}
