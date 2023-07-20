export type TagColor = 'default' | 'a-blue' | 'a-red' | 'a-green' | 'a-yellow';

export type TagExpertiseType = {
  type: 'expertise';
  label: string;
  color: TagColor;
};
export type TagBusinessType = {
  type: 'business';
  label: string;
  color: TagColor;
};

export interface ITagExpertise extends TagExpertiseType {
  isActive: boolean;
}
export interface ITagBusiness extends TagBusinessType {
  isActive: boolean;
}

export type TagType = TagExpertiseType | TagBusinessType;
export type InputTagBusinessType = { tag?: TagBusinessType[] };
export type InputTagExpertiseType = { tag?: TagExpertiseType[] };

export function isTagExpertiseTypeResponse(
  response: TagType
): response is TagExpertiseType {
  return response.type === 'expertise';
}

export function isTagBusinessTypeResponse(
  response: TagType
): response is TagBusinessType {
  return response.type === 'business';
}
