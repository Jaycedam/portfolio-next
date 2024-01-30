import { RepoFolder } from "@utils/types";

export const slugToURL = (text: string, repoFolder: RepoFolder): string => {
  // adds folder to the repo and .mdx to the end to fetch in github api
  return `${repoFolder}/${text}.mdx`;
};
