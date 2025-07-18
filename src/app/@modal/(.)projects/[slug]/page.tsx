import Modal from "@components/modal";
import MDXContent from "@/components/mdx-content";
import { Suspense } from "react";
import SkeletonArticle from "@/components/skeleton/skeleton-article";
import { getMDXMeta } from "@/utils/fetch-mdx";

export default async function Page(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;

  const {
    slug
  } = params;

  return (
    <Modal>
      <Suspense fallback={<SkeletonArticle />}>
        <MDXContent repoFolder="projects" name={slug} />
      </Suspense>
    </Modal>
  );
}

// SSG, currently not supported on intercepting routes https://github.com/vercel/next.js/issues/52842
export async function generateStaticParams() {
  const data = await getMDXMeta("projects");

  return data.map((item) => ({
    slug: item.id,
  }));
}
