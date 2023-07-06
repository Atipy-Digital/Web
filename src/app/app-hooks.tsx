'use client';

import { useEffect } from 'react';

import { isDev } from '@/lib/constants';

const useOverflowDebuggerInDev = () => {
  useEffect(() => {
    if (!isDev) return;
    let mousetrapRef: Mousetrap.MousetrapInstance | undefined = undefined;
    import('mousetrap').then(({ default: mousetrap }) => {
      mousetrapRef = mousetrap.bind(['command+i', 'ctrl+i', 'alt+i'], () => {
        document.body.classList.toggle('inspect');
      });
    });

    return () => {
      mousetrapRef?.unbind(['command+i', 'ctrl+i', 'alt+i']);
    };
  }, []);
};

const useUserIsTabbing = () => {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === `Tab`) {
        document.body.classList.add('user-is-tabbing');
      }
    }

    function handleMouseDown() {
      document.body.classList.remove('user-is-tabbing');
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);
};

export const AppHooks = () => {
  useOverflowDebuggerInDev();
  useUserIsTabbing();

  return null;
};
