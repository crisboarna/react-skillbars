import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Utils } from '../util';
import { useIntersection } from '../util/hooks/useIntersection';
import { SkillBarProps, SkillBarSkill } from './index';
import './skillbar.css';
import { useIsServer } from '../util/hooks/useIsServer';

const SkillBar: FC<SkillBarProps> = ({
  skills,
  colors,
  barBackground = 'transparent',
  offset = `25px`,
  height = 35,
  animationDuration = 3000,
  animationDelay = 1000,
  animationThreshold = 0.8,
}) => {
  let intersection: IntersectionObserverEntry | null = null;
  const ref = useRef<HTMLDivElement | null>(null);

  const [isCollapsed, setIsCollapsed] = useState(true);

  const isServer = useIsServer();

  intersection = useIntersection(
    ref,
    {
      root: null,
      rootMargin: offset,
      threshold: animationThreshold,
    },
    isServer
  );

  /**
   * Based on IntersectionObserver API response, it sets with configurable timeout the animation trigger to show the bar
   */
  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      const timer = setTimeout(() => setIsCollapsed(false), animationDelay);
      return () => clearTimeout(timer);
    }
  }, [intersection]);

  /**
   * Computes based on individual or global `colors` object the coloring of the bar
   */
  const getSkillBarColor = useCallback(
    (skill: SkillBarSkill, index: number) => {
      if (skill.color && skill.color.bar && Utils.isString(skill.color.bar)) {
        return skill.color.bar;
      } else if (colors && colors.bar) {
        if (Utils.isString(colors.bar)) {
          return colors.bar;
        }
        return Utils.getHSL(colors.bar, index, skills.length);
      }
      return '';
    },
    []
  );

  /**
   * Computes based on individual or global `colors` object the coloring of the text
   */
  const getTitleColor = useCallback(
    (skill: SkillBarSkill, index: number, entry: string) => {
      if (
        skill.color &&
        skill.color.title &&
        skill.color.title[entry] &&
        Utils.isString(skill.color.title[entry])
      ) {
        return skill.color.title[entry];
      } else if (colors && colors.title && colors.title[entry]) {
        if (Utils.isString(colors.title[entry])) {
          return colors.title[entry];
        }
        return Utils.getHSL(colors.title[entry], index, skills.length);
      }
      return '';
    },
    []
  );

  return (
    <div data-testid={'skillbar/root'} ref={ref}>
      {skills.map((skill, index) => (
        <div
          key={skill.type}
          className="skillbar"
          data-testid={'skillbar/container'}
          style={{
            height: `${Utils.getHeight(height)}`,
            lineHeight: `${Utils.getHeight(height)}`,
            background: barBackground,
          }}
        >
          <div
            className="skillbar-title"
            data-testid={'skillbar/title'}
            style={{
              color: `${getTitleColor(skill, index, 'text')}`,
              background: `${getTitleColor(skill, index, 'background')}`,
            }}
          >
            <span>{skill.type}</span>
          </div>
          <div
            data-testid={'skillbar/bar'}
            className={`skillbar-bar ${isCollapsed ? 'collapsed' : ''}`}
            style={{
              background: `${getSkillBarColor(skill, index)}`,
              width: `calc((100% - 110px) * (${skill.level} * 0.01))`,
              transition: `width ${animationDuration}ms ease-in-out`,
            }}
          />
          <div className="skillbar-percent" data-testid={'skillbar/percent'}>
            {skill.level}%
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBar;
