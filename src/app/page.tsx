import Link from 'next/link';

import styles from './page.module.scss';

import { Page } from '@/components/layout/Page';

import { getPosts } from '@/services/post.service';

export default function Home() {
  const posts = getPosts();

  return (
    <Page>
      <h1 className={styles.title}>Home</h1>
      <ul className='flex flex-col gap-4'>
        {posts.map((post) => (
          <li key={post.title}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <section className='h-[500px]'>test scroll</section>
      <section className='h-[500px]'>test scroll</section>
      <section className='h-[500px]'>test scroll</section>
    </Page>
  );
}
