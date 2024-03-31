import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts } from "lib/api";
import { serialize } from "next-mdx-remote/serialize";
import styled from "@emotion/styled";
import Layout from "components/Layout";
import MdxLayout from "components/MdxLayout";
import { NextSeo } from "next-seo";

export default function Post({ post }: any) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <NextSeo
        title={post.title}
        titleTemplate="%s | mdx blog sample"
        defaultTitle="mdx blog sample"
        description={post.description}
        openGraph={{
          url: "",
          title: post.title,
          description: post.description,
        }}
      />
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <Layout>
          <Contents>
            <MdxLayout contents={post} />
          </Contents>
        </Layout>
      )}
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "description",
    "slug",
    "content",
    "hero",
  ]);

  const content = post
    ? await serialize(post.content, { parseFrontmatter: true })
    : "";

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post: any) => {
      return {
        params: {
          slug: post.slug.split("/"),
        },
      };
    }),
    fallback: false,
  };
}

const Contents = styled.main``;
