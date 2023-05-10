import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import { Post } from "../../../types";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const ctx = require.context("../../../posts", false, /\.md$/);
  const paths = ctx.keys().filter((key) => !key.startsWith("."));
  return paths
    .map((path) => path.split("/").pop())
    .filter((slug) => slug != undefined)
    .map((slug) => ({ slug: slug!.slice(0, -3) }));
}

export default async function PostPage({ params: { slug } }: Props) {
  const m = await import(`../../../posts/${slug}.md`);
  const { content, data } = matter(m.default);
  const { title, date } = data;
  const post: Post = { title, slug, date, content };

  return (
    <>
      <h1>{post.title}</h1>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </>
  );
}
