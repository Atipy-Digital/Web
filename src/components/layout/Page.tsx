'use client';

import { ReactNode, useEffect } from 'react';

import { useAppStore } from '@/store/use-app-store';

export const Page = ({ children }: { children: ReactNode }) => {
  const { isOpenModalMenu, setOpenModalMenu } = useAppStore();

  useEffect(() => {
    if (isOpenModalMenu) {
      setOpenModalMenu(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
