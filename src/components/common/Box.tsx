import { ReactNode } from 'react';

import clsxm from '@/lib/clsxm';

type Props = {
  className?: string;
  children: ReactNode;
  as?: 'div' | 'section';
};

export const Box = ({ children, className, as = 'div' }: Props) => {
  if (as === 'div') {
    return (
      <div className={clsxm('max-w-7xl mx-auto w-full', className)}>
        {children}
      </div>
    );
  }

  return (
    <section className={clsxm('max-w-7xl mx-auto w-full', className)}>
      {children}
    </section>
  );
};
