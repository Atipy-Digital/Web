import matter from 'gray-matter';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { siteOrigin } from '@/lib/constants';

import { getPostMetaData, getPostsSlug } from '@/services/post.service';

import type { Post } from '@/ts';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { title } = getPostMetaData(slug);
  return {
    title,
    alternates: {
      canonical: `${siteOrigin}/posts/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return getPostsSlug().map((slug) => ({ slug }));
}

export default async function PostPage({ params: { slug } }: Props) {
  const m = await import(`../../../data/posts/${slug}.md`);
  const { content: body, data } = matter(m.default);
  const { title, date } = data;
  const post: Post = { title, slug, date, body };

  return (
    <>
      <Link href='/posts' className='text-a-blue underline'>
        Retour
      </Link>
      <h1>{post.title}</h1>
      <ReactMarkdown>{post.body}</ReactMarkdown>
    </>
  );
}
