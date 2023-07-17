'use client';

import ReactMarkdown from 'react-markdown';
import type { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import type { NormalComponents } from 'react-markdown/lib/complex-types';

import clsxm from '@/lib/clsxm';

export const MarkdownText = ({
  children,
  className = 'text-body1',
  components,
}: {
  children: string;
  className?: string;
  components?: Partial<
    Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
  >;
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
        ...components,
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
