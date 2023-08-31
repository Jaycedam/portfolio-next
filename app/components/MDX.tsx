import { MDXRemote } from "next-mdx-remote/rsc";

export default async function MDX(props: { url: string }) {
  try {
    const parsedUrl = new URL(props.url);
    // disable cache, enable only on dev env
    const res = await fetch(parsedUrl.toString(), { cache: "no-store" });
    // const res = await fetch(parsedUrl.toString(), { next: { revalidate: 604800 } });

    if (!res.ok) {
      throw new Error(`Failed to fetch content from ${parsedUrl}`);
    }

    const markdown = await res.text();
    return <MDXRemote source={markdown} />;
  } catch (error) {
    console.error("Error fetching or rendering MDX:", error);
    return <div>Error: {error.message}</div>;
  }
}
