'use client';

import Link from 'next/link';

import clsxm from '@/lib/clsxm';
import { useTheme } from '@/hooks/use-theme';

import { LogoBlack } from './LogoBlack';
import LogoWhite from './LogoWhite';

type Props = {
  noLink?: boolean;
  className?: string;
  size?: 'md' | 'lg';
};

export default function Logo({
  noLink = false,
  className,
  size = 'md',
}: Props) {
  const { isDark } = useTheme();
  if (noLink) {
    return (
      <div className={clsxm('flex-shrink-0', className)}>
        {isDark ? <LogoWhite size={size} /> : <LogoBlack size={size} />}
      </div>
    );
  }
  return (
    <Link
      href='/'
      className={clsxm('flex-shrink-0', className)}
    >
      {isDark ? <LogoWhite size={size} /> : <LogoBlack size={size} />}
    </Link>
  );
}
