'use client';

import Link from 'next/link';

import { useTheme } from '@/hooks/use-theme';

import { LogoBlack } from './LogoBlack';
import LogoWhite from './LogoWhite';

export default function Logo() {
  const { isDark } = useTheme();
  return (
    <Link href='/' className='flex-shrink-0' aria-label='home page atipy'>
      {isDark ? <LogoWhite /> : <LogoBlack />}
    </Link>
  );
}
