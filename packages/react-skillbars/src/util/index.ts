export class Utils {
  public static isString = (value: unknown) =>
    Object.prototype.toString.call(value) === '[object String]';

  public static isNumber = (value: unknown) =>
    Object.prototype.toString.call(value) === '[object Number]';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static getHSL = (container: any, index: number, length: number) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
}
