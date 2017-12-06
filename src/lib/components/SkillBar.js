// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';
import './SkillBar.scss';

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

type Props = {
  skills : Array<{type:string, level:string, color ?:{ bar ?: string, title:{ text ?: string, background ?: string }}}>,
  colors : Object,
  animationDelay : number,
  animationDuration : number,
  offset : number,
  height : number | string
};

type State = {
  collapsed : boolean,
  lastVisibility : Object,
  clientSide : boolean,
  elementBottom ?: number,
  elementTop ?: number
};

export default class SkillBar extends Component<Props, State> {
  node : ?HTMLDivElement;
  listener : Object;

  static posTop() {
    if (typeof window.pageYOffset !== "undefined") {
      return window.pageYOffset;
    } else if (document && document.documentElement && document.documentElement.scrollTop) {
      return document.documentElement.scrollTop;
    } else if (document && document.body && document.body.scrollTop) {
      return document.body.scrollTop;
    } else {
      return 0;
    }
  }

  static defaultProps = {
    offset: 25
  };

  constructor() {
    super();

    let clientSide = typeof window !== 'undefined';
    this.listener = throttle(this.handleScroll.bind(this), 200);
    if(clientSide && window.addEventListener) {
        window.addEventListener("scroll", this.listener);
    }

    this.state = {
      collapsed: true,
      lastVisibility: { partially: false, completely: false },
      clientSide
    };
  }

  componentDidMount() {
    if (this.state.clientSide && this.node) {
      this.setState({
        elementBottom: this.node.getBoundingClientRect().bottom + SkillBar.posTop(),
        // $FlowFixMe
        elementTop: this.node.getBoundingClientRect().top + SkillBar.posTop()
      }, this.handleScroll);
      this.handleScroll();
    }
  }

  componentWillUnmount() {
    this.removeListener();
  }

  removeListener() {
    if (this.state.clientSide) {
      window.removeEventListener("scroll", this.listener);
    }
  }

  visibilityHasChanged(visible : Object) {
    return visible.completely !== this.state.lastVisibility.completely ||
      visible.partially !== this.state.lastVisibility.partially
  }

  isMovingIntoView(visible : Object) {
    return !this.state.lastVisibility.completely && visible.completely
  }

  handleScroll() {
    const visible = this.isVisible();
    if (this.state.collapsed && this.visibilityHasChanged(visible) && this.isMovingIntoView(visible)) {
      setTimeout(() => {
        this.setState({ collapsed: false })
      }, this.props.animationDelay ? this.props.animationDelay : 1000);
      this.removeListener();
      this.setState({ lastVisibility: visible });
      } else {
        this.setState({ lastVisibility: visible });
      }
    }

  isVisible() {
    const viewBottom = window.pageYOffset + window.innerHeight;
    const viewTop = window.pageYOffset;
    const offset = this.props.offset;
    const elementBottom = this.state.elementBottom || 0;
    const elementTop = this.state.elementTop || 0;
    const middleOfView = window.pageYOffset + (window.innerHeight / 2);
    if (elementBottom - elementTop > window.innerHeight - (2 * offset)) {
      const completely = (elementTop < middleOfView + offset && elementBottom > middleOfView - offset);
      const partially = completely || (((elementTop > middleOfView + offset && elementTop < viewBottom) ||
        (elementBottom < middleOfView - offset && elementBottom > viewTop)));
      return {
        completely: completely,
        partially: partially
      }
    }
    return {
      completely: (elementBottom < viewBottom - offset && elementBottom > viewTop + offset) && (elementTop > viewTop + offset && elementTop < viewBottom - offset),
      partially: (elementBottom < viewBottom && elementBottom > viewTop) || (elementTop > viewTop && elementTop < viewBottom)
    };
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

  getHeight(propHeight : number | string) {
    if(propHeight) {
      return isString(propHeight) ? propHeight : `${propHeight}px`;
    } else {
      return '';
    }
  }

  render() {
    const { collapsed } = this.state;
    const { skills } = this.props;

    return(
      <div ref={node => this.node = node}>
        {skills.map((skill, index) =>
          <div key={skill.type} className="skillbar" style={{height: `${this.getHeight(this.props.height)}`, 'lineHeight': `${this.getHeight(this.props.height)}`}}>
            <div className="skillbar-title" style={{color: `${this.getTitleColor(skill,index, 'text')}`, background: `${this.getTitleColor(skill, index, 'background')}`}}><span>{skill.type}</span></div>
            <div className={`skillbar-bar ${collapsed ? 'collapsed' : ''}`} style={{background: `${this.getSkillBarColor(skill, index)}`,width: `calc(${skill.level}% - 7%)`, transition: `width ${this.props.animationDuration}ms ease-in-out`}}></div>
            <div className="skillbar-percent">{skill.level}%</div>
          </div>
        )}
      </div>
    )
  }
}

SkillBar.propTypes = {
  skills: PropTypes.array.isRequired,
  colors: PropTypes.object,
  animationDelay: PropTypes.number,
  animationDuration: PropTypes.number,
  offset: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.number,PropTypes.string])
};