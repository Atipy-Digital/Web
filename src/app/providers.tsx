'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode, useEffect } from 'react';

import { useAppStore } from '@/store/use-app-store';

import type { ProjectType, TagBusinessType, TagExpertiseType } from '@/ts';

type Props = {
  children: ReactNode;
  data: {
    projects: ProjectType[];
    tagsBusiness: TagBusinessType[];
    tagsExpertise: TagExpertiseType[];
  };
};

const Providers = ({ children, data }: Props) => {
  const setProjects = useAppStore((store) => store.setProjects);
  const setTagsExpertise = useAppStore((store) => store.setTagsExpertise);
  const setTagsBusiness = useAppStore((store) => store.setTagsBusiness);

  useEffect(() => {
    setProjects(data.projects);
    setTagsExpertise(data.tagsExpertise);
    setTagsBusiness(data.tagsBusiness);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
};

export default Providers;
