import { RepoFolder } from "@utils/types";

/**
 *
 * @param slug
 * @param repoFolder
 * @description It transforms a slug (eg: name-of-file) into the full path of the repository (projects/name-of-file.mdx)
 * @returns string of the file path.
 */
export const slugToPath = (slug: string, repoFolder: RepoFolder): string => {
  // adds folder to the repo and .mdx to the end to fetch in github api
  return `${repoFolder}/${slug}.mdx`;
};
