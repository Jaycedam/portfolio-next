import { GithubTree, MDX, MDXMeta } from "@utils/types";
import { compileMDX } from "next-mdx-remote/rsc";
import { HeaderImage, LinkButton } from "@/components/mdx-components";
import { RepoFolder } from "@utils/types";

// on day cache
export const revalidate = 86400;
// export const revalidate = 0;

export async function getMDXMeta(
  repoFolder: RepoFolder
): Promise<MDXMeta[] | undefined> {
  try {
    console.log("Fetching repository file tree...");
    const res = await fetch(
      "https://api.github.com/repos/Jaycedam/portfolio-mdx/git/trees/testing?recursive=1",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    if (!res.ok) return undefined;

    const repoFileTree: GithubTree = await res.json();

    const filesArray = repoFileTree.tree
      .map((obj) => obj.path)
      .filter((path) => path.endsWith(".mdx") && path.includes(repoFolder));

    const mdxList: MDXMeta[] = [];

    for (const file of filesArray) {
      const mdx = await getMDXByName(file);

      if (mdx) {
        const { meta } = mdx;
        mdxList.push(meta);
      }
    }

    // sort list by date
    const sortedList = mdxList.slice().sort((a, b) => {
      // Parsing dates in the format "MM-YYYY"
      const [aMonth, aYear] = a.date.split("-").map(Number);
      const [bMonth, bYear] = b.date.split("-").map(Number);

      // Create Date objects
      const aDate = new Date(aYear, aMonth - 1); // Month is zero-based
      const bDate = new Date(bYear, bMonth - 1); // Month is zero-based

      // Compare dates
      // Compare dates based on month and year
      return bDate.getTime() - aDate.getTime();
    });

    return sortedList;
  } catch (error) {
    console.error("Error occurred during fetch: ", error);
    return undefined;
  }
}

/**
 *
 * @param file
 * When using to fetch mdx file with url params,
 * you need to transform the value with slugToURL from @utils/slug
 * @returns
 */
export async function getMDXByName(file: string): Promise<MDX | undefined> {
  try {
    console.log("Fetching mdx...");
    const res = await fetch(
      `https://raw.githubusercontent.com/Jaycedam/portfolio-mdx/testing/${file}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    if (!res.ok) return undefined;

    const rawMDX = await res.text();

    const { frontmatter, content } = await compileMDX<MDXMeta>({
      source: rawMDX,
      components: { HeaderImage, LinkButton },
      options: {
        parseFrontmatter: true,
      },
    });

    const id = file.replace(/\.mdx$/, "");

    const projectObj: MDX = {
      meta: {
        id,
        title: frontmatter.title,
        area: frontmatter.area,
        description: frontmatter.description,
        date: frontmatter.date,
        featured: frontmatter.featured,
        tags: frontmatter.tags,
        image: frontmatter.image,
      },
      content,
    };

    return projectObj;
  } catch (error) {
    console.error("Error occurred during fetch of mdx: ", error);
    return undefined;
  }
}
