export type TribuTeamType = {
  text: string;
  image: string;
  decorativeOrInformative: boolean;
};

export type MemberType = {
  image: string;
  badge: {
    color: 'default' | 'a-blue' | 'a-red' | 'a-green' | 'a-yellow';
    label: string;
  };
  linkedin: string;
  name: string;
  skills: { text: string }[];
  decorativeOrInformative: boolean;
};

export type TribuPageType = {
  team: TribuTeamType;
  particularity: string;
  philosophy: string;
  members: MemberType[];
};
