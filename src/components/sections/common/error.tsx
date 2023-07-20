'use client';

import { useRouter } from 'next/navigation';

import { Box } from '@/components/common/Box';
import { Button } from '@/components/primitives/Button';

type Props = {
  title: string;
  link: string;
  labelCTA: string;
};

export const ErrorSection = ({ title, link, labelCTA }: Props) => {
  const router = useRouter();
  return (
    <Box className='flex flex-col justify-center items-center text-center min-h-[calc(100vh_-_72px)] md:min-h-[calc(100vh_-_112px)]'>
      <h1 className='h1'>{title}</h1>
      <h3 className='mt-4'>Impossible de trouver la page demandée</h3>
      <Button icon onClick={() => router.push(link)} className='mt-10'>
        {labelCTA}
      </Button>
    </Box>
  );
};
