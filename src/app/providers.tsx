'use client';

import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { ReactNode, useEffect } from 'react';

import { EngageModal } from '@/components/modal/Engage';

import { useAppStore } from '@/store/use-app-store';

import type {
  EngagementType,
  ProjectType,
  TagBusinessType,
  TagExpertiseType,
} from '@/ts';

type Props = {
  children: ReactNode;
  data: {
    projects: ProjectType[];
    tagsBusiness: TagBusinessType[];
    tagsExpertise: TagExpertiseType[];
    engagementData: EngagementType | null;
  };
};

const Providers = ({ children, data }: Props) => {
  const setProjects = useAppStore((store) => store.setProjects);
  const setTagsExpertise = useAppStore((store) => store.setTagsExpertise);
  const setTagsBusiness = useAppStore((store) => store.setTagsBusiness);
  const isOpenModalEngage = useAppStore((s) => s.isOpenModalEngage);

  useEffect(() => {
    setProjects(data.projects);
    setTagsExpertise(data.tagsExpertise);
    setTagsBusiness(data.tagsBusiness);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider attribute='class'>
      {children}
      <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
        {isOpenModalEngage && data?.engagementData && (
          <EngageModal data={data.engagementData} />
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Providers;
