export { default } from './skillbar';

export type SkillBarProps = {
  skills: SkillBarSkill[];
  colors?: SkillBarColor;
  animationDelay?: number;
  animationDuration?: number;
  offset?: string;
  height?: number | string;
  animationThreshold?: number;
};

export type SkillBarSkill = {
  type: string;
  level: number;
  color?: SkillBarColor;
};

export type SkillBarColor = {
  bar?: string;
  title?: {
    [key: string]: string | undefined;
    text?: string;
    background?: string;
  };
};
