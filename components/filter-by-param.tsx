import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RepoFolder } from "@/utils/types";
import { Button } from "@components/ui/button";
import Link from "next/link";

const FilterByParam = ({
  tags,
  repo,
}: {
  repo: RepoFolder;
  tags: { tag: string }[];
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Filtrar</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-[60vh] overflow-y-auto">
        <DropdownMenuLabel>Tags</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {tags.map((tag, idx) => (
          <DropdownMenuItem key={idx} className="cursor-pointer" asChild>
            <Link href={`/${repo}?tags=${tag.tag}`}>{tag.tag}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterByParam;
