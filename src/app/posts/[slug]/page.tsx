import { ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { siteOrigin } from '@/lib/constants';

import { BottomNav } from '@/components/common/BottomNav';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { PostInfo } from '@/components/sections/post/PostInfo';
import { PostSections } from '@/components/sections/post/PostSections';
import { PostSources } from '@/components/sections/post/PostSources';

import {
  getNextPostLink,
  getPostBySlug,
  getPostMetaData,
  getPostsSlug,
} from '@/services/post.service';

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
  const nextLink = getNextPostLink(slug);

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
        prevLink={{
          label: 'Publications',
          url: '/posts',
        }}
        nextLink={nextLink}
        align='left'
        breadcrumbBoxClassName='max-w-5xl mx-auto md:!px-fluid xl:!px2-fluid'
        breadcrumbClassName='w-full !justify-start md:!justify-center 1xl:!justify-start'
        boxClassName='!mb-0 '
        titleClassName='!px-0 max-w-5xl mx-auto text-left md:text-center 1xl:text-left md:!px-fluid xl:!px2-fluid xl:flex-shrink-0'
      />
      <PostInfo tags={post.tags} date={post.date} />
      <PostSections sections={post.sections} />
      <PostSources source={post.source} />
      <BottomNav
        previousLink={{
          label: 'Publications',
          url: '/posts',
        }}
        nextLink={nextLink}
      />
    </Page>
  );
}
