import { MDX, MDXMeta } from "@utils/types";
import { compileMDX } from "next-mdx-remote/rsc";
import { HeaderImage, LinkButton } from "@/components/mdx-components";
import { RepoFolder } from "@utils/types";
import { getCurrentLocale } from "@/locales/server";

export async function getMDXMeta(repoFolder: RepoFolder): Promise<MDXMeta[]> {
  try {
    const locale = getCurrentLocale();

    const res = await fetch(
      `https://api.github.com/repos/Jaycedam/portfolio-mdx/contents/${repoFolder}/${locale}?ref=${process.env.GITHUB_MDX_BRANCH}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: {
          revalidate: 86400,
          tags: ["mdx"],
        },
      }
    );

    if (!res.ok) return [];

    const files = await res.json();

    const mdxList: MDXMeta[] = [];

    for (const file of files) {
      // removes mdx from name
      const name = file.name.replace(/\.mdx$/, "");

      const mdx = await getMDXByName(name, repoFolder, locale);

      if (mdx) {
        const { meta } = mdx;
        mdxList.push(meta);
      }
    }

    // return list sorted by date mm-yyyy, removing dash to compare
    return mdxList.sort((a, b) =>
      a.date.replace("-", "") < b.date.replace("-", "") ? 1 : -1
    );
  } catch (error) {
    console.error("Error occurred during fetch: ", error);
    return [];
  }
}

export async function getMDXByName(
  name: string,
  repoFolder: RepoFolder,
  locale: "en" | "es"
): Promise<MDX | undefined> {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/Jaycedam/portfolio-mdx/${process.env.GITHUB_MDX_BRANCH}/${repoFolder}/${locale}/${name}.mdx`,

      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: {
          revalidate: 86400,
          tags: ["mdx"],
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

    // removes everything from the path except name of the file
    const id = name;

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
