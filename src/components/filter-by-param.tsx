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

export default function FilterByParam({
  label,
  tags,
  repoFolder,
}: {
  label: string;
  repoFolder: RepoFolder;
  tags: { tag: string }[];
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{label}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-[60vh] overflow-y-auto">
        <DropdownMenuLabel>Tags</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {tags.map((tag, idx) => (
          <DropdownMenuItem key={idx} className="cursor-pointer" asChild>
            <Link href={`/${repoFolder}?tags=${tag.tag}`}>{tag.tag}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
