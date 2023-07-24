'use client';

import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import { Box } from '@/components/common/Box';
import { Button } from '@/components/primitives/Button';
import { ProjectList } from '@/components/primitives/ProjectList';

import { useAppStore } from '@/store/use-app-store';

import { FilterTags } from './components/FilterTags';

export const AllProjects = () => {
  const router = useRouter();
  const projects = useAppStore((store) => store.projects);
  const businessTags = useAppStore((store) => store.tagsBusiness);
  const expertiseTags = useAppStore((store) => store.tagsExpertise);
  const setTagBusinessActive = useAppStore(
    (store) => store.setTagBusinessActive
  );
  const setTagExpertiseActive = useAppStore(
    (store) => store.setTagExpertiseActive
  );
  const [showAll, setShowAll] = useState<boolean>(false);

  const tagsBusinessActive = useMemo(
    () => businessTags?.filter((t) => t.isActive) ?? [],
    [businessTags]
  );
  const tagsExpertiseActive = useMemo(
    () => expertiseTags?.filter((t) => t.isActive) ?? [],
    [expertiseTags]
  );
  const hasTagsActive = useMemo(
    () => !!tagsBusinessActive.length || !!tagsExpertiseActive.length,
    [tagsBusinessActive, tagsExpertiseActive]
  );

  const projectsFiltered = useMemo(() => {
    if (!projects?.length) return [];
    if (!hasTagsActive) return projects;

    return projects.filter((project) => {
      const hasTagBusiness = project.tags?.some((tag) =>
        tagsExpertiseActive.some(
          (t) => t.label === tag.label && t.color === tag.color
        )
      );
      const hasTagExpertise = project.client.tags.some((tag) =>
        tagsBusinessActive.some(
          (t) => t.label === tag.label && t.color === tag.color
        )
      );

      return hasTagBusiness || hasTagExpertise;
    });
  }, [projects, tagsBusinessActive, tagsExpertiseActive, hasTagsActive]);

  const onShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section className='tl mb-14 md:mb-16 lg:mb-20 xl:mb-24'>
      <Box className='tl px-0 md:px-fluid relative w-full'>
        <h3 className='h4 mb-8 md:mb-10 lg:mb-14 w-full text-center font-bold'>
          Toutes nos réalisations
        </h3>
      </Box>

      <div className='w-full flex flex-col lg:flex-row justify-between shadow-project-filter px-4 md:px-fluid'>
        <FilterTags
          expertiseTags={expertiseTags}
          businessTags={businessTags}
          hasTagsBusinessActive={!tagsBusinessActive.length}
          hasTagsExpertiseActive={!tagsExpertiseActive.length}
          setTagExpertiseActive={setTagExpertiseActive}
          setTagBusinessActive={setTagBusinessActive}
          showAll={showAll}
        />

        <div className='flex-shrink-0 flex items-center justify-center self-start py-2 lg:pb-0 lg:pt-1 lg:w-44'>
          <span
            className='text-grey-110 dark:text-grey-150 underline cursor-pointer text-center lg:px-3'
            onClick={onShowAll}
          >
            {showAll ? 'Réduire les catégories' : 'Afficher plus de catégories'}
          </span>
        </div>
      </div>

      <Box className='tl px-0 md:px-fluid relative w-full pt-10 md:pt-14 lg:pt-20 xl:pt-24 flex justify-center items-center'>
        <ProjectList data={projectsFiltered} />
      </Box>

      <div className='w-full flex items-center justify-center mt-10 lg:mt-14 xl:mt-20'>
        <Button icon onClick={() => router.push('/realisations/clients')}>
          Tous nos clients
        </Button>
      </div>
    </section>
  );
};
