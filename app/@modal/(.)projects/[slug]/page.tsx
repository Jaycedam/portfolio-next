import { slugToURL } from "@/utils/slug";
import Modal from "@components/modal";
import MDXContent from "@/components/mdx-content";
import { Suspense } from "react";
import SkeletonArticle from "@/components/skeleton/skeleton-article";
import { getMDXMeta } from "@/utils/fetch-mdx";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const url = slugToURL(slug, "projects");

  return (
    <Modal>
      <Suspense fallback={<SkeletonArticle />}>
        <MDXContent type="projects" name={url} />
      </Suspense>
    </Modal>
  );
}

// ERROR: NOT WORKING ON @SLOTS
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const data = await getMDXMeta("projects");

  return data.map((item) => ({
    slug: item.id,
  }));
}
