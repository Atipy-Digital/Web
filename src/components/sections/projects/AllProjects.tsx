'use client';

import {useRouter} from 'next/navigation';

import {useMemo} from 'react';

import {Box} from '@/components/common/Box';
import {Button} from '@/components/primitives/Button';
import {ProjectList} from '@/components/primitives/ProjectList';

import {useAppStore} from '@/store/use-app-store';
import {FilterTagsDropDown} from "@/components/sections/projects/components/FilterTagsDropdown";

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

  const tagsBusinessActive = useMemo(
    () => {
      return businessTags?.filter((t) => t.isActive) ?? [];
    },
    [businessTags]
  );
  const tagsExpertiseActive = useMemo(
    () => {
      return expertiseTags?.filter((t) => t.isActive) ?? [];
    },
    [expertiseTags]
  );
  const hasTagsActive = useMemo(
    () => {
      return !!tagsBusinessActive.length || !!tagsExpertiseActive.length;
    },
    [tagsBusinessActive, tagsExpertiseActive]
  );

  const projectsFiltered = useMemo(() => {
    if (!projects?.length) return [];
    if (!hasTagsActive) return projects;

    const filteredProjects = projects.filter((project) => {
      const hasTagBusiness = project.tags?.some((tag) =>
        tagsExpertiseActive.some(
          (t) => t.label === tag.label && t.color === tag.color
        )
      );
      const hasTagExpertise = project.client.tags.some((tag) =>
        tagsBusinessActive.some(
          (t) => t.label === tag.label && t.color === t.color
        )
      );
      return hasTagBusiness || hasTagExpertise;
    });
    return filteredProjects;
  }, [projects, tagsBusinessActive, tagsExpertiseActive, hasTagsActive]);

  return (
    <section className='tl mb-14 md:mb-16 lg:mb-20 xl:mb-24'>
      <Box className='tl px-0 md:px-fluid relative w-full test'>
        <h2 className='h4 mb-8 md:mb-10 lg:mb-14 w-full text-center font-bold'>
          Toutes nos réalisations
        </h2>
      </Box>

      <div className='w-full flex flex-col lg:flex-row justify-between shadow-project-filter px-4 md:px-fluid'>
        <div className='mx-auto px-0 md:px-fluid'>
          <FilterTagsDropDown
            expertiseTags={expertiseTags}
            businessTags={businessTags}
            tagsBusinessActive={tagsBusinessActive}
            tagsExpertiseActive={tagsExpertiseActive}
            setTagExpertiseActive={setTagExpertiseActive}
            setTagBusinessActive={setTagBusinessActive}
            isFilterExpanded={hasTagsActive}
          />
        </div>
      </div>
      <Box
        className='tl px-0 md:px-fluid relative w-full pt-10 md:pt-14 lg:pt-20 xl:pt-24 flex justify-center items-center'>
        <ProjectList data={projectsFiltered}/>
      </Box>

      <div className='w-full flex items-center justify-center mt-10 lg:mt-14 xl:mt-20'>
        <Button icon onClick={() => router.push('/realisations/clients')}>
          Tous nos clients
        </Button>
      </div>
    </section>
  );
};
