'use client';

import ReactMarkdown from 'react-markdown';

import clsxm from '@/lib/clsxm';

export const MarkdownText = ({
  children,
  className = 'text-body1',
}: {
  children: string;
  className?: string;
}) => {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => (
          <p
            className={clsxm(
              'w-full font-secondary font-normal leading-tight',
              className
            )}
          >
            {children}
          </p>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
