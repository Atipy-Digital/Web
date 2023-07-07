import { Metadata } from 'next';
import Link from 'next/link';

import { siteOrigin } from '@/lib/constants';

import { Page } from '@/components/layout/Page';

import { getPosts } from '@/services/post.service';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/posts`,
  },
  title: 'Publications',
};

export default function Publications() {
  const posts = getPosts();
  return (
    <Page>
      <h1>Publications</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className='text-a-blue underline'
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  );
}
