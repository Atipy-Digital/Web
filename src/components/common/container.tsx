import { ComponentProps, ElementType, forwardRef } from 'react';

import clsxm from '@/lib/clsxm';

export const Container = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div'] & {
    as?: 'div' | 'section';
  }
>(({ className, as = 'div', ...props }, ref) => {
  const Element: ElementType = as;
  return (
    <Element
      {...props}
      className={clsxm('max-w-7xl mx-auto w-full', className)}
      ref={ref}
    />
  );
});

export type ContainerProps = ComponentProps<typeof Container>;
