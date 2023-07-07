import fs from 'fs';
import matter from 'gray-matter';

export const readFile = (path: string) => {
  const content = fs.readFileSync(path, {
    encoding: 'utf-8',
  });
  const matterResult = matter(content);

  return matterResult;
};
