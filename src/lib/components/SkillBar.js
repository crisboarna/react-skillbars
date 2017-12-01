// @flow
import React, { Component } from 'react';
import './SkillBar.scss';

type Props = {
  skills: Array<{type:string, level:string, color ?:{ bar ?: string, title:{ text ?: string, background ?: string }}}>,
  colors: Object,
  animationDelay: number
};

type State = {
  collapsed: boolean
};

const isString = function isString(value) {
  return Object.prototype.toString.call(value) === "[object String]";
};

const isNumber = function isNumber(value) {
  return Object.prototype.toString.call(value) === "[object Number]";
};

const getHSL = function getHSL(container, index, length) {
  const calculateStep = function calculateStep(value) {
    if(isNumber(value)) {
      return value;
    } else {
      return value.minimum + (index * (value.maximum - value.minimum) / length);
    }
  };

  const hue = calculateStep(container.hue);
  const sat = calculateStep(container.saturation);
  const level = calculateStep(container.level);

  return `hsl(${hue}, ${sat}%, ${level}%)`;
};

export default class SkillBar extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      collapsed: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ collapsed: false })
    }, this.props.animateDelay ? this.props.animateDelay : 1000);
  }

  getSkillBarColor(skill: Object, index: number) {
    const { colors } = this.props;
    if(skill.color && skill.color.bar && isString(skill.color.bar)) {
      return skill.color.bar;
    } else if(colors && colors.bar) {
      if(isString(colors.bar)) {
        return colors.bar;
      } else {
        return getHSL(colors.bar, index, this.props.skills.length);
      }
    } else {
      return '';
    }
  }

  getTitleColor(skill : Object, index : number, entry : string) {
    const { colors } = this.props;
    if(skill.color && skill.color.title && skill.color.title[entry] && isString(skill.color.title[entry])) {
      return skill.color.title[entry];
    } else if(colors && colors.title && colors.title[entry]) {
      if(isString(colors.title[entry])) {
        return colors.title[entry];
      } else {
        return getHSL(colors.title[entry], index, this.props.skills.length);
      }
    } else {
      return '';
    }
  }

  render() {
    const { collapsed } = this.state;
    const { skills } = this.props;

    return(
      <div>
        {skills.map((skill, index) =>
          <div key={skill.type} className="skillbar">
            <div className="skillbar-title" style={{color: `${this.getTitleColor(skill,index, 'text')}`, background: `${this.getTitleColor(skill, index, 'background')}`}}><span>{skill.type}</span></div>
            <div className={`skillbar-bar ${collapsed ? 'collapsed' : ''}`} style={{width: `${skill.level}%`, background: `${this.getSkillBarColor(skill, index)}`}}></div>
            <div className="skillbar-percent">{skill.level}%</div>
          </div>
        )}
      </div>
    )
  }
}