import React from "react";
import type { ITagBusiness, ITagExpertise } from "@/ts";
import { useAppStore } from "@/store/use-app-store";
import { XIcon } from "@heroicons/react/solid";

type DisplayActiveTagsProps = {
  activeBusinessTags: ITagBusiness[];
  activeExpertiseTags: ITagExpertise[];
  handleResetTags: () => void;
};

const DisplayActiveTags = ({
                             activeBusinessTags,
                             activeExpertiseTags,
                             handleResetTags,
                           }: DisplayActiveTagsProps) => {
  const removeTagBusiness = useAppStore((s) => s.removeTagBusiness);
  const removeTagExpertise = useAppStore((s) => s.removeTagExpertise);

  // Combine the tags into a single array
  const allActiveTags = [...activeBusinessTags, ...activeExpertiseTags];

  return (
    <div className="flex flex-wrap justify-start gap-2 mt-2 mb-4">
      <div className="flex flex-wrap gap-2 mb-2">
        {allActiveTags.map((tag) => (
          <button
            key={tag.label}
            onClick={() => {
              if ("businessId" in tag) {
                removeTagBusiness(tag as ITagBusiness);
              } else {
                removeTagExpertise(tag as ITagExpertise);
              }
            }}
            className="flex items-center whitespace-nowrap bg-gray-200 text-gray-800 border border-gray-400 px-3 py-1 rounded-full cursor-pointer"
            aria-label={`Remove ${tag.label}`}
          >
            <span className="mr-2 whitespace-nowrap">{tag.label}</span>
            <XIcon className="w-5 h-5 text-gray-900" aria-hidden={true} />
          </button>
        ))}
      </div>
      <button className="ml-auto px-3 py-1 mb-2 cursor-pointer" onClick={handleResetTags}>
        Effacer les filtres
      </button>
    </div>
  );
};

export default DisplayActiveTags;
