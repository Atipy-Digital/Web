import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import { Post } from "../../../types";

type Props = {
  params: { slug: string };
};

export default async function PostPage({ params: { slug } }: Props) {
  const module = await import(`../../../posts/${slug}.md`);
  const { content, data } = matter(module.default);
  const { title, date } = data;
  const post: Post = { title, slug, date, content };

  return (
    <>
      <h1>{post.title}</h1>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </>
  );
}
