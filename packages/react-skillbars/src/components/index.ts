export { default } from './skillbar';

/**
 * Type defining all the possible props to be provided to the component
 */
export type SkillBarProps = {
  /**
   * Array of elements to be rendered, each array element will result in a new bar.
   */
  readonly skills: SkillBarSkill[];

  /**
   * Global colors object. Applies styling to all bars
   */
  readonly colors?: SkillBarColor;

  /**
   * By providing `offset` you can move the margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left).
   *
   * The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.
   */
  readonly offset?: string;

  /**
   * You can provide a `height` prop with a `number` and it will render it based on `number`px.
   */
  readonly height?: number | string;

  /**
   * By providing `animationDelay` you can delay the start of the animation from the moment the component enters the viewport by
   * `animationDelay` ms.
   */
  readonly animationDelay?: number;

  /**
   * By providing `animationDuration` you can lengthen/shorten the duration of the animation from the moment the component enters the viewport by
   * `animationDuration` ms.
   */
  readonly animationDuration?: number;

  /**
   * Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed.
   *
   * If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5.
   *
   * If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1].
   * The default is 0 (meaning as soon as even one pixel is visible, the callback will be run).
   * A value of 1.0 means that the threshold isn't considered passed until every pixel is visible.
   */
  readonly animationThreshold?: number;
};

/**
 * Each individual bar element and it's properties
 */
export type SkillBarSkill = {
  /**
   * The string to be displayed on the bar
   */
  readonly type: string;

  /**
   * The % the bar to be filled, 0-100
   */
  readonly level: number;

  /**
   * Individual bar coloring
   */
  readonly color?: SkillBarColor;
};

/**
 * The coloring properties available for each bar
 */
export type SkillBarColor = {
  /**
   * The color of the bar
   */
  readonly bar?: string;

  /**
   * The color of the text description
   */
  readonly title?: {
    readonly [key: string]: string | undefined;

    /**
     * Color of text itself
     */
    readonly text?: string;

    /**
     * Color of the background of text box
     */
    readonly background?: string;
  };
};
