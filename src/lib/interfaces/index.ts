export type SkillBarProps = {
  skills: SkillBarSkill[];
  colors?: any;
  animationDelay?: number;
  animationDuration?: number;
  offset?: number;
  height?: number | string;
  titleWidth?: number | string;
};

export type SkillBarSkill = {
  type: string;
  level: number;
  color?: {
    bar?: string;
    title?: {
      [key: string]: string | undefined;
      text?: string;
      background?: string;
    };
  };
};

export type SkillBarVisibility = {
  partially: boolean;
  completely: boolean;
};

export type SkillBarState = {
  collapsed: boolean;
  lastVisibility: SkillBarVisibility;
  clientSide: boolean;
  elementBottom?: number;
  elementTop?: number;
};
