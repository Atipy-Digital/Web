import Link from "next/link";
import matter from "gray-matter";

import { Post } from "../types";
import styles from "./page.module.css";

export default function Home() {
  const ctx = require.context("../posts", false, /\.md$/);
  const paths = ctx.keys().filter((key) => !key.startsWith("."));
  const slugs = paths
    .map((path) => path.split("/").pop())
    .filter((slug) => slug != undefined)
    .map((slug) => slug!.slice(0, -3));
  const posts: Post[] = paths
    .map((path) => matter(ctx(path).default))
    .map((post, idx) => ({
      title: post.data.title,
      slug: slugs[idx],
      content: "",
      date: post.data.date,
    }))
    .sort((a: Post, b: Post) => {
      if (a.date < b.date) return 1;
      else if (a.date > b.date) return -1;
      else return 0;
    });

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
