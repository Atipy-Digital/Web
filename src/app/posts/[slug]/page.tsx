import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

import { siteOrigin } from '@/lib/constants';

import { Page } from '@/components/layout/Page';

import {
  getPostBySlug,
  getPostMetaData,
  getPostsSlug,
} from '@/services/post.service';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const data = getPostMetaData(slug);
  if (!data) {
    return {
      alternates: {
        canonical: `${siteOrigin}/posts/${slug}`,
      },
    };
  }

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `${siteOrigin}/posts/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const slugs = getPostsSlug();
  if (slugs?.length) {
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <Page>
      <h1>{post.title}</h1>
      <ReactMarkdown>{post.text}</ReactMarkdown>
    </Page>
  );
}
