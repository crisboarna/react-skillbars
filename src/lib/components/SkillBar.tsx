import React from "react";
import throttle from "lodash.throttle";
import {
  SkillBarProps,
  SkillBarSkill,
  SkillBarState,
  SkillBarVisibility,
} from "../interfaces";
import { Utils } from "../util/Utils";
import "./SkillBar.scss";

export default class SkillBar extends React.Component<
  SkillBarProps,
  SkillBarState
> {
  public static defaultProps = {
    offset: 25,
    height: 35,
    titleWidth: 110,
    animationDuration: 3000,
    animationDelay: 1000,
  };

  private node?: HTMLDivElement | null;
  private listener: any;

  constructor(props: SkillBarProps) {
    super(props);

    const clientSide = typeof window !== "undefined";
    this.listener = throttle(this.handleScroll.bind(this), 200);
    if (clientSide && window.addEventListener) {
      window.addEventListener("scroll", this.listener);
    }

    this.state = {
      collapsed: true,
      lastVisibility: { partially: false, completely: false },
      clientSide,
    };
  }

  static posTop() {
    if (typeof window.pageYOffset !== "undefined") {
      return window.pageYOffset;
    } else if (
      document &&
      document.documentElement &&
      document.documentElement.scrollTop
    ) {
      return document.documentElement.scrollTop;
    } else if (document && document.body && document.body.scrollTop) {
      return document.body.scrollTop;
    }
    return 0;
  }

  public componentDidMount() {
    if (this.state.clientSide && this.node) {
      this.setState(
        {
          elementBottom:
            this.node.getBoundingClientRect().bottom + SkillBar.posTop(),
          elementTop: this.node.getBoundingClientRect().top + SkillBar.posTop(),
        },
        this.handleScroll
      );
      this.handleScroll();
    }
  }

  public componentWillUnmount() {
    this.removeListener();
  }

  private removeListener() {
    if (this.state.clientSide) {
      window.removeEventListener("scroll", this.listener);
    }
  }

  private visibilityHasChanged(visible: SkillBarVisibility) {
    return (
      visible.completely !== this.state.lastVisibility.completely ||
      visible.partially !== this.state.lastVisibility.partially
    );
  }

  private isMovingIntoView(visible: SkillBarVisibility) {
    return !this.state.lastVisibility.completely && visible.completely;
  }

  private handleScroll() {
    const visible = this.isVisible();
    if (
      this.state.collapsed &&
      this.visibilityHasChanged(visible) &&
      this.isMovingIntoView(visible)
    ) {
      setTimeout(() => {
        this.setState({ collapsed: false });
      }, this.props.animationDelay);
      this.removeListener();
      this.setState({ lastVisibility: visible });
    } else {
      this.setState({ lastVisibility: visible });
    }
  }

  private isVisible() {
    const viewBottom = window.pageYOffset + window.innerHeight;
    const viewTop = window.pageYOffset;
    const { offset } = this.props;
    const elementBottom = this.state.elementBottom || 0;
    const elementTop = this.state.elementTop || 0;
    const middleOfView = window.pageYOffset + window.innerHeight / 2;
    if (elementBottom - elementTop > window.innerHeight - 2 * offset!) {
      const completely =
        elementTop < middleOfView + offset! &&
        elementBottom > middleOfView - offset!;
      const partially =
        completely ||
        (elementTop > middleOfView + offset! && elementTop < viewBottom) ||
        (elementBottom < middleOfView - offset! && elementBottom > viewTop);
      return {
        completely,
        partially,
      };
    }
    return {
      completely:
        elementBottom < viewBottom - offset! &&
        elementBottom > viewTop + offset! &&
        elementTop > viewTop + offset! &&
        elementTop < viewBottom - offset!,
      partially:
        (elementBottom < viewBottom && elementBottom > viewTop) ||
        (elementTop > viewTop && elementTop < viewBottom),
    };
  }

  private getSkillBarColor(skill: SkillBarSkill, index: number) {
    const { colors } = this.props;
    if (skill.color && skill.color.bar && Utils.isString(skill.color.bar)) {
      return skill.color.bar;
    } else if (colors && colors.bar) {
      if (Utils.isString(colors.bar)) {
        return colors.bar;
      }
      return Utils.getHSL(colors.bar, index, this.props.skills.length);
    }
    return "";
  }

  private getTitleColor(skill: SkillBarSkill, index: number, entry: string) {
    const { colors } = this.props;
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
      return Utils.getHSL(colors.title[entry], index, this.props.skills.length);
    }
    return "";
  }

  public render() {
    const { collapsed } = this.state;
    const { skills } = this.props;
    const height = Utils.getHeight(this.props.height!);
    const titleWidth = Utils.getTitleWidth(this.props.titleWidth!);

    return (
      <div ref={(node) => (this.node = node)}>
        {skills.map((skill, index) => (
          <div
            key={skill.type}
            className="skillbar"
            style={{
              height,
              lineHeight: height,
            }}
          >
            <div
              className="skillbar-title"
              style={{
                width: titleWidth,
                color: `${this.getTitleColor(skill, index, "text")}`,
                background: `${this.getTitleColor(skill, index, "background")}`,
              }}
            >
              <span>{skill.type}</span>
            </div>
            <div
              className={`skillbar-bar ${collapsed ? "collapsed" : ""}`}
              style={{
                background: `${this.getSkillBarColor(skill, index)}`,
                width: `calc((100% - ${titleWidth}) * (${skill.level} * 0.01))`,
                left: titleWidth,
                transition: `width ${this.props.animationDuration}ms ease-in-out`,
              }}
            />
            <div className="skillbar-percent">{skill.level}%</div>
          </div>
        ))}
      </div>
    );
  }
}
