'use client';

import ReactMarkdown from 'react-markdown';

import { SectionType } from '@/ts';

export const MarkdownSection = ({ left, right }: SectionType) => {
  if (!right) {
    return (
      <article className='w-full prose max-w-none dark:prose-invert lg:prose-xl mb-10'>
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className='block w-full flex-grow'>{children}</p>
            ),
            code: ({ children }) => <u className='underline'>{children}</u>,
          }}
        >
          {left}
        </ReactMarkdown>
      </article>
    );
  }
  return (
    <section className='tl w-full flex flex-col md:flex-row mb-10 md:gap-x-10 lg:gap-x-16 xl:gap-x-24'>
      <article className='w-full flex-grow prose max-w-none dark:prose-invert lg:prose-xl'>
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className='block w-full flex-grow'>{children}</p>
            ),
            code: ({ children }) => <u className='underline'>{children}</u>,
          }}
        >
          {left}
        </ReactMarkdown>
      </article>
      {right && (
        <article className='pt-8 md:pt-0 w-full flex-grow prose max-w-none dark:prose-invert lg:prose-xl'>
          <ReactMarkdown
            components={{
              p: ({ children }) => (
                <p className='block w-full flex-grow'>{children}</p>
              ),
              code: ({ children }) => <u className='underline'>{children}</u>,
            }}
          >
            {right}
          </ReactMarkdown>
        </article>
      )}
    </section>
  );
};
