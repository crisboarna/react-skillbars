export class Utils {
  public static isString = (value: any) =>
    Object.prototype.toString.call(value) === "[object String]";

  public static isNumber = (value: any) =>
    Object.prototype.toString.call(value) === "[object Number]";

  public static getHSL = (container: any, index: number, length: number) => {
    const calculateStep = function calculateStep(value: number | any) {
      if (Utils.isNumber(value)) {
        return value;
      }
      return value.minimum + (index * (value.maximum - value.minimum)) / length;
    };

    const hue = calculateStep(container.hue);
    const sat = calculateStep(container.saturation);
    const level = calculateStep(container.level);

    return `hsl(${hue}, ${sat}%, ${level}%)`;
  };

  public static getHeight = (propHeight: number | string) =>
    Utils.isString(propHeight) ? propHeight : `${propHeight}px`;
  public static getTitleWidth = (propTitleWidth: number | string) =>
    Utils.isString(propTitleWidth) ? propTitleWidth : `${propTitleWidth}px`;
}
