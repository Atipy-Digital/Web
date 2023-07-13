import { create } from 'zustand';

import {
  ITagBusiness,
  ITagExpertise,
  ProjectType,
  TagBusinessType,
  TagExpertiseType,
} from '@/ts';

export interface AppStore {
  isOpenModalMenu: boolean;
  setOpenModalMenu: (isOpenModalMenu: boolean) => void;
  projects: ProjectType[];
  setProjects: (projects: ProjectType[]) => void;
  tagsBusiness: ITagBusiness[];
  setTagsBusiness: (tags: TagBusinessType[]) => void;
  tagsExpertise: ITagExpertise[];
  setTagsExpertise: (tags: TagExpertiseType[]) => void;
  setTagBusinessActive: (tag: TagBusinessType) => void;
  setTagExpertiseActive: (tag: TagExpertiseType) => void;
  onResetTags: () => void;
  onResetTagsExpertise: () => void;
  onResetTagsBusiness: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
  isOpenModalMenu: false,
  setOpenModalMenu: (isOpenModalMenu: boolean) =>
    set((s) => ({ ...s, isOpenModalMenu })),
  projects: [],
  setProjects: (projects: ProjectType[]) => set((s) => ({ ...s, projects })),
  tagsBusiness: [],
  setTagsBusiness: (tags: TagBusinessType[]) =>
    set((s) => ({
      ...s,
      tagsBusiness: tags.map((t) => ({ ...t, isActive: false })),
    })),
  tagsExpertise: [],
  setTagsExpertise: (tags: TagExpertiseType[]) =>
    set((s) => ({
      ...s,
      tagsExpertise: tags.map((t) => ({ ...t, isActive: false })),
    })),
  setTagBusinessActive: (tag: TagBusinessType) =>
    set((s) => {
      const tagsBusiness = s.tagsBusiness;
      return {
        ...s,
        tagsBusiness: tagsBusiness.map((t) =>
          t.label === tag.label && tag.color === t.color
            ? { ...t, isActive: !t.isActive }
            : t
        ),
      };
    }),
  setTagExpertiseActive: (tag: TagExpertiseType) =>
    set((s) => {
      const tagsExpertise = s.tagsExpertise;
      return {
        ...s,
        tagsExpertise: tagsExpertise.map((t) =>
          t.label === tag.label && tag.color === t.color
            ? { ...t, isActive: !t.isActive }
            : t
        ),
      };
    }),
  onResetTagsExpertise: () =>
    set((s) => {
      return {
        ...s,
        tagsExpertise: s.tagsExpertise.map((t) => ({ ...t, isActive: false })),
      };
    }),
  onResetTagsBusiness: () =>
    set((s) => {
      return {
        ...s,
        tagsBusiness: s.tagsBusiness.map((t) => ({ ...t, isActive: false })),
      };
    }),
  onResetTags: () =>
    set((s) => {
      return {
        ...s,
        tagsExpertise: s.tagsExpertise.map((t) => ({ ...t, isActive: false })),
        tagsBusiness: s.tagsBusiness.map((t) => ({ ...t, isActive: false })),
      };
    }),
}));
