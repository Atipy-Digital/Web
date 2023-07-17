'use client';

import { useCallback } from 'react';

import clsxm from '@/lib/clsxm';

import { TeamCard } from './TeamCard';

import type { MemberType } from '@/ts';

export const TeamList = ({ data }: { data: MemberType[] }) => {
  const maxCols = useCallback(() => {
    if (data.length <= 1) return 'lg:grid-cols-1';
    if (data.length === 2) return 'lg:grid-cols-2';
    if (data.length >= 3) return 'lg:grid-cols-3';
  }, [data]);

  return (
    <div
      className={clsxm(
        'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 m-auto',
        maxCols()
      )}
    >
      {data.map((team) => (
        <TeamCard key={`t-c-${team.name}`} {...team} />
      ))}
    </div>
  );
};
