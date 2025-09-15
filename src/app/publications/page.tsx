import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { ListPosts } from '@/components/sections/posts/ListPosts';

import { getPosts } from '@/services/post.service';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/publications`,
  },
  title: 'Publications',
};

export default function Publications() {
  const posts = getPosts();

  return (
    <Page>
      <HeaderPage
        title='Publications'
        currentLink={{
          label: 'Publications',
          url: '/publications',
        }}
      />
      <ListPosts data={posts} />
    </Page>
  );
}
