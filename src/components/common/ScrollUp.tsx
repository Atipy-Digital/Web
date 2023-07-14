'use client';

import { useEffect } from 'react';

export const ScrollUp = () => {
  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), []);

  return null;
};
