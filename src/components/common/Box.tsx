'use client';

import { ReactNode } from 'react';

import clsxm from '@/lib/clsxm';

type Props = {
  className?: string;
  children: ReactNode;
  as?: 'div' | 'section';
  id?: string;
};

export const Box = ({ children, className, id, as = 'div' }: Props) => {
  if (as === 'div') {
    return (
      <div
        className={clsxm('px-fluid max-w-8xl mx-auto w-full', className)}
        id={id}
      >
        {children}
      </div>
    );
  }

  return (
    <section
      className={clsxm('px-fluid max-w-8xl mx-auto w-full', className)}
      id={id}
    >
      {children}
    </section>
  );
};
