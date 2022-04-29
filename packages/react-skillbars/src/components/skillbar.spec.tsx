import {
  render,
  getAllByTestId,
  getByTestId,
  act,
} from '@testing-library/react';
import { SkillBarProps, SkillBarSkill } from './index';
import { FC } from 'react';

type expectAllType = (key: string) => ReturnType<typeof getAllByTestId>;
type expectAllReturn = {
  readonly titles: ReturnType<typeof getAllByTestId>;
  readonly bars: ReturnType<typeof getAllByTestId>;
};
type expectOneType = (key: string) => ReturnType<typeof getByTestId>;
type expectOneReturn = {
  readonly title: ReturnType<typeof getByTestId>;
  readonly bar: ReturnType<typeof getByTestId>;
};

describe('SkillBar', () => {
  let Skillbar: FC<SkillBarProps>;
  const mockIntersectionObserver = jest.fn();
  const mockIsServer = jest.fn();

  beforeEach(() => {
    jest.mock('../util/hooks/useIntersection', () => ({
      useIntersection: mockIntersectionObserver,
    }));
    jest.mock('../util/hooks/useIsServer', () => ({
      useIsServer: mockIsServer,
    }));
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    Skillbar = require('./skillbar').default;
  });

  const expectAll = (
    getAllByTestId: expectAllType,
    skills: SkillBarSkill[]
  ): expectAllReturn => {
    const titles = getAllByTestId('skillbar/title');
    const bars = getAllByTestId('skillbar/bar');
    const percentages = getAllByTestId('skillbar/percent');

    expect(getAllByTestId('skillbar/root')).toHaveLength(1);
    expect(titles).toHaveLength(5);
    expect(bars).toHaveLength(5);
    expect(percentages).toHaveLength(5);

    titles.forEach((title, idx) =>
      expect(title).toHaveTextContent(skills[idx].type)
    );

    percentages.forEach((percentage, idx) =>
      expect(percentage).toHaveTextContent(`${skills[idx].level}`)
    );

    bars.forEach((bar) => expect(bar).toHaveClass('skillbar-bar', 'collapsed'));

    return { titles, bars };
  };

  const expectOne = (
    getByTestId: expectOneType,
    skills: SkillBarSkill[]
  ): expectOneReturn => {
    expect(getByTestId('skillbar/root')).toBeTruthy();

    const title = getByTestId('skillbar/title');
    const percent = getByTestId('skillbar/percent');
    const bar = getByTestId('skillbar/bar');

    expect(title).toHaveTextContent(skills[0].type);
    expect(percent).toHaveTextContent(`${skills[0].level}`);
    expect(bar).toHaveClass('skillbar-bar', 'collapsed');

    return { title, bar };
  };

  describe('basic rendering', () => {
    it('should render  with skills array', () => {
      //when
      const { getByTestId } = render(<Skillbar skills={[]} />);

      //then
      expect(getByTestId('skillbar/root')).toBeTruthy();
    });
  });

  describe('state', () => {
    it('should have collapsed true', () => {
      //given
      const skills = [{ type: 'Java', level: 85 }];

      //when
      const { getByTestId } = render(<Skillbar skills={skills} />);

      //then
      expectOne(getByTestId, skills);
    });
  });

  describe('height', () => {
    //given
    const skills = [{ type: 'Java', level: 85 }];

    it('should render with empty height given no height prop', () => {
      //when
      const { getByTestId } = render(<Skillbar skills={skills} />);

      //then
      expect(getByTestId('skillbar/container')).toHaveStyle({
        height: '35px',
        lineHeight: '35px',
      });
    });

    it('should render with given height numerical value', () => {
      //when
      const { getByTestId } = render(<Skillbar skills={skills} height={10} />);

      //then
      expect(getByTestId('skillbar/container')).toHaveStyle({
        height: '10px',
        lineHeight: '10px',
      });
    });

    it('should render with given height string value', () => {
      //when
      const { getByTestId } = render(
        <Skillbar skills={skills} height="10vh" />
      );

      //then
      expect(getByTestId('skillbar/container')).toHaveStyle({
        height: '10vh',
        lineHeight: '10vh',
      });
    });
  });

  describe('renders skillbars with no specified coloring', () => {
    it('should render one skillbar without coloring info for defaults', () => {
      //given
      const skills = [{ type: 'Java', level: 85 }];

      //when
      const { getByTestId } = render(<Skillbar skills={skills} />);

      //then
      const { title, bar } = expectOne(getByTestId, skills);
      expect(title).toHaveStyle({
        background: '',
        color: '',
      });
      expect(bar).toHaveStyle({
        background: '',
        width: 'calc((100% - 110px) * (85 * 0.01))',
      });
    });

    it('should render five skillbars completely', () => {
      //given
      const skills = [
        { type: 'Java', level: 85 },
        { type: 'Javascript', level: 75 },
        { type: 'Spring', level: 70 },
        { type: 'Docker', level: 70 },
        { type: 'NoSQL', level: 69 },
      ];

      //when
      const { getAllByTestId } = render(<Skillbar skills={skills} />);

      //then
      const { bars, titles } = expectAll(getAllByTestId, skills);

      titles.forEach((title) =>
        expect(title).toHaveStyle({
          background: '',
          color: '',
        })
      );

      expect(bars[0]).toHaveStyle({
        background: '',
        width: 'calc((100% - 110px) * (85 * 0.01))',
      });
      expect(bars[1]).toHaveStyle({
        background: '',
        width: 'calc((100% - 110px) * (75 * 0.01))',
      });
      expect(bars[2]).toHaveStyle({
        background: '',
        width: 'calc((100% - 110px) * (70 * 0.01))',
      });
      expect(bars[3]).toHaveStyle({
        background: '',
        width: 'calc((100% - 110px) * (70 * 0.01))',
      });
      expect(bars[4]).toHaveStyle({
        background: '',
        width: 'calc((100% - 110px) * (69 * 0.01))',
      });
    });
  });

  describe('renders skillbars with element colorings', () => {
    it('should render one skillbar with element having specified coloring bar coloring', () => {
      //given
      const skills = [{ type: 'Java', level: 85, color: { bar: '#fff' } }];

      //when
      const { getByTestId } = render(<Skillbar skills={skills} />);

      //then
      const { title, bar } = expectOne(getByTestId, skills);
      expect(title).toHaveStyle({
        background: '',
        color: '',
      });
      expect(bar).toHaveStyle({
        background: '#fff',
        width: 'calc((100% - 110px) * (85 * 0.01))',
      });
    });

    it('should render five skillbars with first element having specified coloring bar coloring', () => {
      //given
      const skills = [
        { type: 'Java', level: 85, color: { bar: '#fff' } },
        { type: 'Javascript', level: 75 },
        { type: 'Spring', level: 70 },
        { type: 'Docker', level: 70 },
        { type: 'NoSQL', level: 69 },
      ];

      //when
      const { getAllByTestId } = render(<Skillbar skills={skills} />);

      //then
      const { bars, titles } = expectAll(getAllByTestId, skills);

      titles.forEach((title) =>
        expect(title).toHaveStyle({
          background: '',
          color: '',
        })
      );

      expect(bars[0]).toHaveStyle({
        background: '#fff',
        width: 'calc((100% - 110px) * (85 * 0.01))',
      });
      expect(bars[1]).toHaveStyle({
        background: '',
        width: 'calc((100% - 110px) * (75 * 0.01))',
      });
      expect(bars[2]).toHaveStyle({
        background: '',
        width: 'calc((100% - 110px) * (70 * 0.01))',
      });
      expect(bars[3]).toHaveStyle({
        background: '',
        width: 'calc((100% - 110px) * (70 * 0.01))',
      });
      expect(bars[4]).toHaveStyle({
        background: '',
        width: 'calc((100% - 110px) * (69 * 0.01))',
      });
    });

    it('should render five skillbars with all elements with individual coloring', () => {
      // given
      const skills = [
        {
          type: 'Java',
          level: 85,
          color: { bar: '#ffa', title: { text: 'black', background: '#111' } },
        },
        { type: 'Javascript', level: 75, color: { title: { text: '#aaa' } } },
        { type: 'Spring', level: 70, color: { title: { background: 'blue' } } },
        { type: 'Docker', level: 70, color: { bar: 'yellow' } },
        {
          type: 'NoSQL',
          level: 69,
          color: { bar: 'cyan', title: { background: 'brown' } },
        },
      ];

      //when
      const { getAllByTestId } = render(<Skillbar skills={skills} />);

      //then
      const { bars, titles } = expectAll(getAllByTestId, skills);

      expect(titles[0]).toHaveStyle({
        background: '#111',
        color: 'black',
      });
      expect(titles[1]).toHaveStyle({
        background: '',
        color: '#aaa',
      });
      expect(titles[2]).toHaveStyle({
        background: 'blue',
        color: '',
      });
      expect(titles[3]).toHaveStyle({
        background: '',
        color: '',
      });
      expect(titles[4]).toHaveStyle({
        background: 'brown',
        color: '',
      });

      expect(bars[0]).toHaveStyle({
        background: '#ffa',
        width: 'calc((100% - 110px) * (85 * 0.01))',
      });
      expect(bars[1]).toHaveStyle({
        background: '',
        width: 'calc((100% - 110px) * (75 * 0.01))',
      });
      expect(bars[2]).toHaveStyle({
        background: '',
        width: 'calc((100% - 110px) * (70 * 0.01))',
      });
      expect(bars[3]).toHaveStyle({
        background: 'yellow',
        width: 'calc((100% - 110px) * (70 * 0.01))',
      });
      expect(bars[4]).toHaveStyle({
        background: 'cyan',
        width: 'calc((100% - 110px) * (69 * 0.01))',
      });
    });
  });

  describe('renders skillbars with hue coloring object provided', () => {
    it('should render one skillbar with bar having hue data', () => {
      //given
      const skills = [{ type: 'Java', level: 85 }];

      const colors = {
        bar: {
          hue: 0,
          saturation: 50,
          level: {
            minimum: 80,
            maximum: 100,
          },
        },
      };

      //when
      const { getByTestId } = render(
        <Skillbar skills={skills} colors={colors} />
      );

      //then
      const { title, bar } = expectOne(getByTestId, skills);
      expect(title).toHaveStyle({
        background: '',
        color: '',
      });
      expect(bar).toHaveStyle({
        background: 'hsl(0, 50%, 80%)',
        width: 'calc((100% - 110px) * (85 * 0.01))',
      });
    });

    it('should render five skillbars with bar having hue data', () => {
      //given
      const skills = [
        { type: 'Java', level: 85 },
        { type: 'Javascript', level: 75 },
        { type: 'Spring', level: 70 },
        { type: 'Docker', level: 70 },
        { type: 'NoSQL', level: 69 },
      ];

      const colors = {
        bar: {
          hue: {
            minimum: 10,
            maximum: 50,
          },
          saturation: 50,
          level: {
            minimum: 80,
            maximum: 100,
          },
        },
      };

      //when
      const { getAllByTestId } = render(
        <Skillbar skills={skills} colors={colors} />
      );

      //then
      const { bars, titles } = expectAll(getAllByTestId, skills);

      titles.forEach((title) =>
        expect(title).toHaveStyle({
          background: '',
          color: '',
        })
      );

      expect(bars[0]).toHaveStyle({
        background: 'hsl(10, 50%, 80%)',
        width: 'calc((100% - 110px) * (85 * 0.01))',
      });
      expect(bars[1]).toHaveStyle({
        background: 'hsl(18, 50%, 84%)',
        width: 'calc((100% - 110px) * (75 * 0.01))',
      });
      expect(bars[2]).toHaveStyle({
        background: 'hsl(26, 50%, 88%)',
        width: 'calc((100% - 110px) * (70 * 0.01))',
      });
      expect(bars[3]).toHaveStyle({
        background: 'hsl(34, 50%, 92%)',
        width: 'calc((100% - 110px) * (70 * 0.01))',
      });
      expect(bars[4]).toHaveStyle({
        background: 'hsl(42, 50%, 96%)',
        width: 'calc((100% - 110px) * (69 * 0.01))',
      });
    });

    it('should render five skillbars with title text and bar having hue data', () => {
      //given
      const skills = [
        { type: 'Java', level: 85 },
        { type: 'Javascript', level: 75 },
        { type: 'Spring', level: 70 },
        { type: 'Docker', level: 70 },
        { type: 'NoSQL', level: 69 },
      ];

      const colors = {
        bar: {
          hue: {
            minimum: 10,
            maximum: 50,
          },
          saturation: 50,
          level: {
            minimum: 80,
            maximum: 100,
          },
        },
        title: {
          text: {
            hue: 250,
            saturation: {
              minimum: 30,
              maximum: 70,
            },
            level: {
              minimum: 43,
              maximum: 59,
            },
          },
        },
      };

      //when
      const { getAllByTestId } = render(
        <Skillbar skills={skills} colors={colors} />
      );

      //then
      const { bars, titles } = expectAll(getAllByTestId, skills);

      expect(titles[0]).toHaveStyle({
        background: '',
        color: 'hsl(250, 30%, 43%)',
      });
      expect(titles[1]).toHaveStyle({
        background: '',
        color: 'hsl(250, 38%, 46.2%)',
      });
      expect(titles[2]).toHaveStyle({
        background: '',
        color: 'hsl(250, 46%, 49.4%)',
      });
      expect(titles[3]).toHaveStyle({
        background: '',
        color: 'hsl(250, 54%, 52.6%)',
      });
      expect(titles[4]).toHaveStyle({
        background: '',
        color: 'hsl(250, 62%, 55.8%)',
      });

      expect(bars[0]).toHaveStyle({
        background: 'hsl(10, 50%, 80%)',
        width: 'calc((100% - 110px) * (85 * 0.01))',
      });
      expect(bars[1]).toHaveStyle({
        background: 'hsl(18, 50%, 84%)',
        width: 'calc((100% - 110px) * (75 * 0.01))',
      });
      expect(bars[2]).toHaveStyle({
        background: 'hsl(26, 50%, 88%)',
        width: 'calc((100% - 110px) * (70 * 0.01))',
      });
      expect(bars[3]).toHaveStyle({
        background: 'hsl(34, 50%, 92%)',
        width: 'calc((100% - 110px) * (70 * 0.01))',
      });
      expect(bars[4]).toHaveStyle({
        background: 'hsl(42, 50%, 96%)',
        width: 'calc((100% - 110px) * (69 * 0.01))',
      });
    });

    it('should render five skillbars with title text, background and bar having hue data', () => {
      //given
      const skills = [
        { type: 'Java', level: 85 },
        { type: 'Javascript', level: 75 },
        { type: 'Spring', level: 70 },
        { type: 'Docker', level: 70 },
        { type: 'NoSQL', level: 69 },
      ];

      const colors = {
        bar: {
          hue: {
            minimum: 10,
            maximum: 50,
          },
          saturation: 50,
          level: {
            minimum: 80,
            maximum: 100,
          },
        },
        title: {
          text: {
            hue: 250,
            saturation: {
              minimum: 30,
              maximum: 70,
            },
            level: {
              minimum: 43,
              maximum: 59,
            },
          },
          background: {
            hue: {
              minimum: 0,
              maximum: 250,
            },
            saturation: {
              minimum: 0,
              maximum: 100,
            },
            level: {
              minimum: 23,
              maximum: 100,
            },
          },
        },
      };

      //when
      const { getAllByTestId } = render(
        <Skillbar skills={skills} colors={colors} />
      );

      //then
      const { bars, titles } = expectAll(getAllByTestId, skills);

      expect(titles[0]).toHaveStyle({
        background: 'hsl(0, 0%, 23%)',
        color: 'hsl(250, 30%, 43%)',
      });
      expect(titles[1]).toHaveStyle({
        background: 'hsl(50, 20%, 38.4%)',
        color: 'hsl(250, 38%, 46.2%)',
      });
      expect(titles[2]).toHaveStyle({
        background: 'hsl(100, 40%, 53.8%)',
        color: 'hsl(250, 46%, 49.4%)',
      });
      expect(titles[3]).toHaveStyle({
        background: 'hsl(150, 60%, 69.2%)',
        color: 'hsl(250, 54%, 52.6%)',
      });
      expect(titles[4]).toHaveStyle({
        background: 'hsl(200, 80%, 84.6%)',
        color: 'hsl(250, 62%, 55.8%)',
      });

      expect(bars[0]).toHaveStyle({
        background: 'hsl(10, 50%, 80%)',
        width: 'calc((100% - 110px) * (85 * 0.01))',
      });
      expect(bars[1]).toHaveStyle({
        background: 'hsl(18, 50%, 84%)',
        width: 'calc((100% - 110px) * (75 * 0.01))',
      });
      expect(bars[2]).toHaveStyle({
        background: 'hsl(26, 50%, 88%)',
        width: 'calc((100% - 110px) * (70 * 0.01))',
      });
      expect(bars[3]).toHaveStyle({
        background: 'hsl(34, 50%, 92%)',
        width: 'calc((100% - 110px) * (70 * 0.01))',
      });
      expect(bars[4]).toHaveStyle({
        background: 'hsl(42, 50%, 96%)',
        width: 'calc((100% - 110px) * (69 * 0.01))',
      });
    });
  });

  describe('renders skillbars with hue and solid color global info', () => {
    it('should render one skillbar with hue bar coloring and static global title coloring', () => {
      //given
      const skills = [{ type: 'Java', level: 85 }];

      const colors = {
        bar: {
          hue: {
            minimum: 10,
            maximum: 50,
          },
          saturation: 50,
          level: {
            minimum: 80,
            maximum: 100,
          },
        },
        title: {
          text: '#fff',
          background: '#af32af',
        },
      };

      //when
      const { getByTestId } = render(
        <Skillbar skills={skills} colors={colors} />
      );

      //then
      const { title, bar } = expectOne(getByTestId, skills);

      expect(title).toHaveStyle({
        background: '#af32af',
        color: '#fff',
      });
      expect(bar).toHaveStyle({
        background: 'hsl(10, 50%, 80%)',
        width: 'calc((100% - 110px) * (85 * 0.01))',
      });
    });

    it('should render five skillbars with title text, background having hue data and bar having global', () => {
      //given
      const skills = [
        { type: 'Java', level: 85 },
        { type: 'Javascript', level: 75 },
        { type: 'Spring', level: 70 },
        { type: 'Docker', level: 70 },
        { type: 'NoSQL', level: 69 },
      ];

      const colors = {
        bar: '#abd',
        title: {
          text: {
            hue: 250,
            saturation: {
              minimum: 30,
              maximum: 70,
            },
            level: {
              minimum: 43,
              maximum: 59,
            },
          },
          background: {
            hue: {
              minimum: 0,
              maximum: 250,
            },
            saturation: {
              minimum: 0,
              maximum: 100,
            },
            level: {
              minimum: 23,
              maximum: 100,
            },
          },
        },
      };

      //when
      const { getAllByTestId } = render(
        <Skillbar skills={skills} colors={colors} />
      );

      //then
      const { bars, titles } = expectAll(getAllByTestId, skills);

      expect(titles[0]).toHaveStyle({
        background: 'hsl(0, 0%, 23%)',
        color: 'hsl(250, 30%, 43%)',
      });
      expect(titles[1]).toHaveStyle({
        background: 'hsl(50, 20%, 38.4%)',
        color: 'hsl(250, 38%, 46.2%)',
      });
      expect(titles[2]).toHaveStyle({
        background: 'hsl(100, 40%, 53.8%)',
        color: 'hsl(250, 46%, 49.4%)',
      });
      expect(titles[3]).toHaveStyle({
        background: 'hsl(150, 60%, 69.2%)',
        color: 'hsl(250, 54%, 52.6%)',
      });
      expect(titles[4]).toHaveStyle({
        background: 'hsl(200, 80%, 84.6%)',
        color: 'hsl(250, 62%, 55.8%)',
      });

      expect(bars[0]).toHaveStyle({
        background: '#abd',
        width: 'calc((100% - 110px) * (85 * 0.01))',
      });
      expect(bars[1]).toHaveStyle({
        background: '#abd',
        width: 'calc((100% - 110px) * (75 * 0.01))',
      });
      expect(bars[2]).toHaveStyle({
        background: '#abd',
        width: 'calc((100% - 110px) * (70 * 0.01))',
      });
      expect(bars[3]).toHaveStyle({
        background: '#abd',
        width: 'calc((100% - 110px) * (70 * 0.01))',
      });
      expect(bars[4]).toHaveStyle({
        background: '#abd',
        width: 'calc((100% - 110px) * (69 * 0.01))',
      });
    });
  });

  describe('renders skillbars with hue and individual element override', () => {
    it('should render one skillbar with element coloring overriding hue coloring data', () => {
      //given
      const skills = [
        {
          type: 'Java',
          level: 85,
          color: { bar: 'white', title: { text: 'green', background: '#111' } },
        },
      ];

      const colors = {
        bar: {
          hue: {
            minimum: 10,
            maximum: 50,
          },
          saturation: 50,
          level: {
            minimum: 80,
            maximum: 100,
          },
        },
        title: {
          text: {
            hue: 250,
            saturation: {
              minimum: 30,
              maximum: 70,
            },
            level: {
              minimum: 43,
              maximum: 59,
            },
          },
          background: {
            hue: {
              minimum: 0,
              maximum: 250,
            },
            saturation: {
              minimum: 0,
              maximum: 230,
            },
            level: {
              minimum: 23,
              maximum: 100,
            },
          },
        },
      };

      //when
      const { getByTestId } = render(
        <Skillbar skills={skills} colors={colors} />
      );

      //then
      const { title, bar } = expectOne(getByTestId, skills);

      expect(title).toHaveStyle({
        background: '#111',
        color: 'green',
      });
      expect(bar).toHaveStyle({
        background: 'white',
        width: 'calc((100% - 110px) * (85 * 0.01))',
      });
    });

    it('should render one skillbar with element coloring overriding hue coloring data remainder with hue data', () => {
      //given
      const skills = [
        {
          type: 'Java',
          level: 85,
          color: { bar: 'white', title: { text: 'green', background: '#111' } },
        },
        { type: 'Javascript', level: 75 },
        { type: 'Spring', level: 70 },
        { type: 'Docker', level: 70 },
        { type: 'NoSQL', level: 69 },
      ];

      const colors = {
        bar: {
          hue: {
            minimum: 10,
            maximum: 50,
          },
          saturation: 50,
          level: {
            minimum: 80,
            maximum: 100,
          },
        },
        title: {
          text: {
            hue: 250,
            saturation: {
              minimum: 30,
              maximum: 70,
            },
            level: {
              minimum: 43,
              maximum: 59,
            },
          },
          background: {
            hue: {
              minimum: 0,
              maximum: 250,
            },
            saturation: {
              minimum: 0,
              maximum: 230,
            },
            level: {
              minimum: 23,
              maximum: 100,
            },
          },
        },
      };

      //when
      const { getAllByTestId } = render(
        <Skillbar skills={skills} colors={colors} />
      );

      //then
      const { bars, titles } = expectAll(getAllByTestId, skills);

      expect(titles[0]).toHaveStyle({
        background: '#111',
        color: 'green',
      });
      expect(titles[1]).toHaveStyle({
        background: 'hsl(50, 46%, 38.4%)',
        color: 'hsl(250, 38%, 46.2%)',
      });
      expect(titles[2]).toHaveStyle({
        background: 'hsl(100, 92%, 53.8%)',
        color: 'hsl(250, 46%, 49.4%)',
      });
      expect(titles[3]).toHaveStyle({
        background: 'hsl(150, 138%, 69.2%)',
        color: 'hsl(250, 54%, 52.6%)',
      });
      expect(titles[4]).toHaveStyle({
        background: 'hsl(200, 184%, 84.6%)',
        color: 'hsl(250, 62%, 55.8%)',
      });

      expect(bars[0]).toHaveStyle({
        background: 'white',
        width: 'calc((100% - 110px) * (85 * 0.01))',
      });
      expect(bars[1]).toHaveStyle({
        background: 'hsl(18, 50%, 84%)',
        width: 'calc((100% - 110px) * (75 * 0.01))',
      });
      expect(bars[2]).toHaveStyle({
        background: 'hsl(26, 50%, 88%)',
        width: 'calc((100% - 110px) * (70 * 0.01))',
      });
      expect(bars[3]).toHaveStyle({
        background: 'hsl(34, 50%, 92%)',
        width: 'calc((100% - 110px) * (70 * 0.01))',
      });
      expect(bars[4]).toHaveStyle({
        background: 'hsl(42, 50%, 96%)',
        width: 'calc((100% - 110px) * (69 * 0.01))',
      });
    });
  });

  describe('animation triggers', () => {
    //given
    const skills = [{ type: 'Java', level: 85 }];

    beforeEach(() => {
      window['pageYOffset'] = 0;
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.resetAllMocks();
      jest.useRealTimers();
    });

    it('should remove collapsed class after timeout expiry', async () => {
      //given
      expect.assertions(2);
      mockIntersectionObserver.mockReturnValue({ isIntersecting: true });

      //when
      const { getByTestId } = render(<Skillbar skills={skills} />);
      global['pageYOffset'] = 500;

      await act(() => {
        const bar = getByTestId('skillbar/bar');
        expect(bar).toHaveClass('skillbar-bar', 'collapsed');
        jest.runOnlyPendingTimers();
      });

      //then
      const bar = getByTestId('skillbar/bar');
      expect(bar.classList.contains('collapsed')).toEqual(false);
    });

    it('if window undefined does not do intersection', async () => {
      //given
      expect.assertions(2);
      mockIntersectionObserver.mockReturnValue({ isIntersecting: false });
      mockIsServer.mockReturnValue(true);

      //when
      const { getByTestId } = render(<Skillbar skills={skills} />);
      global['pageYOffset'] = 500;

      await act(() => {
        const bar = getByTestId('skillbar/bar');
        expect(bar).toHaveClass('skillbar-bar', 'collapsed');
        jest.runOnlyPendingTimers();
      });

      //then
      const bar = getByTestId('skillbar/bar');
      expect(bar.classList.contains('collapsed')).toEqual(true);
    });

    it('should trigger event after custom delay provided', async () => {
      //given
      expect.assertions(2);
      mockIntersectionObserver.mockReturnValue({ isIntersecting: true });

      //when
      const { getByTestId } = render(
        <Skillbar skills={skills} animationDelay={7000} />
      );

      global['pageYOffset'] = 500;

      //then
      await act(() => {
        const bar = getByTestId('skillbar/bar');
        expect(bar).toHaveClass('skillbar-bar', 'collapsed');
        // fireEvent.scroll(window, { target: { scrollY: 0 } });
        jest.runOnlyPendingTimers();
      });

      const bar = getByTestId('skillbar/bar');
      expect(bar.classList.contains('collapsed')).toEqual(false);
    });

    it('should trigger with a custom animation duration', async () => {
      //given
      expect.assertions(3);
      mockIntersectionObserver.mockReturnValue({ isIntersecting: true });

      //when
      const { getByTestId } = render(
        <Skillbar skills={skills} animationDuration={7000} />
      );

      global['pageYOffset'] = 500;

      //then
      await act(() => {
        const bar = getByTestId('skillbar/bar');
        expect(bar).toHaveClass('skillbar-bar', 'collapsed');
        // fireEvent.scroll(window, { target: { scrollY: 0 } });
        jest.runOnlyPendingTimers();
      });

      const bar = getByTestId('skillbar/bar');
      expect(bar.classList.contains('collapsed')).toEqual(false);
      expect(bar).toHaveStyle({
        transition: 'width 7000ms ease-in-out',
      });
    });
  });
});
