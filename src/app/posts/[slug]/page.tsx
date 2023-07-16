import { notFound } from 'next/navigation';

import { siteOrigin } from '@/lib/constants';

import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { PostInfo } from '@/components/sections/post/PostInfo';
import { PostSections } from '@/components/sections/post/PostSections';
import { PostSources } from '@/components/sections/post/PostSources';

import {
  getPostBySlug,
  getPostMetaData,
  getPostsSlug,
} from '@/services/post.service';
import { ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
) {
  const { slug } = params;
  const meta = getPostMetaData(slug);
  const previousKeywords = (await parent).keywords || [];
  if (!meta) {
    return {
      alternates: {
        canonical: `${siteOrigin}/posts/${slug}`,
      },
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta?.keywords?.length ? meta.keywords : previousKeywords,
    alternates: {
      canonical: `${siteOrigin}/posts/${slug}`,
    },
    openGraph: {
      images: meta?.ogImg ?? 'favicon/og-alt.png',
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
      <HeaderPage
        title={post.title}
        links={[
          {
            label: 'Publications',
            url: '/posts',
          },
        ]}
        currentLink={{
          label: post.title,
          url: `/posts/${post.slug}`,
        }}
        align='left'
        breadcrumbClassName='!justify-start'
        boxClassName='max-w-5xl !mb-0'
      />
      <PostInfo tags={post.tags} date={post.date} />
      <PostSections sections={post.sections} />
      <PostSources source={post.source} />
    </Page>
  );
}
