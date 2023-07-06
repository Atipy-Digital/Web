import Link from 'next/link';

import styles from './page.module.scss';

import { getPosts } from '@/services/post.service';

export default function Home() {
  const posts = getPosts();

  return (
    <>
      <h1 className={styles.title}>Home</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.title}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
