import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SkillBar from './SkillBar';

describe('SkillBar', () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  describe('basic rendering', () => {
    it('should crash without skills', () => {
      expect(() =>  { shallow(<SkillBar />)}).toThrow();
    });

    it('should render  with skills array', () => {
      const component = shallow(<SkillBar skills={[]} />);
      expect(component.exists()).toEqual(true);
    });
  });

  describe('props', () => {

    it('should have props for skills, none for colors, animationDelay', () => {
      const component = mount(<SkillBar skills={[]} />);
      expect(component.props().skills).toBeDefined();
      expect(component.props().skills).toEqual([]);
      expect(component.props().colors).toBeUndefined();
      expect(component.props().animationDelay).toBeUndefined();
    });

    it('should have props for skills, colors, none for animationDelay', () => {
      const component = mount(<SkillBar skills={[]} colors={{}}/>);
      expect(component.props().skills).toBeDefined();
      expect(component.props().skills).toEqual([]);
      expect(component.props().colors).toBeDefined();
      expect(component.props().colors).toEqual({});
      expect(component.props().animationDelay).toBeUndefined();
    });

    it('should have props for skills, colors, animationDelay', () => {
      const component = mount(<SkillBar skills={[]} colors={{}} animationDelay={0}/>);
      expect(component.props().skills).toBeDefined();
      expect(component.props().skills).toEqual([]);
      expect(component.props().colors).toBeDefined();
      expect(component.props().colors).toEqual({});
      expect(component.props().animationDelay).toBeDefined();
      expect(component.props().animationDelay).toEqual(0);
    });
  });

  describe('state', () => {
    it('should have collapsed true', () => {
      const component = mount(<SkillBar skills={[]}/>);
      expect(component.state().collapsed).toEqual(true);
    });
  });

  describe('renders skillbars with no specified coloring', () => {
    it('should render one skillbar without coloring info for defaults', () => {
      const skills = [
        {type: "Java", level: 85}
      ];

      const component = shallow(<SkillBar skills={skills}/>);
      expect(component.find('.skillbar').length).toEqual(1);
      expect(component.find('.skillbar-title').length).toEqual(1);
      expect(component.find('.skillbar-bar').length).toEqual(1);
      expect(component.find('.skillbar-percent').length).toEqual(1);
      expect(component.find('.collapsed').length).toEqual(1);
      expect(component.contains(<span>Java</span>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">85%</div>)).toBe(true);
      expect(component.find('.skillbar-title').prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-bar').prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-bar').prop('style')).toHaveProperty('width','85%');
    });

    it('should render five skillbars completely', () => {
      const skills = [
        {type: "Java", level: 85},
        {type: "Javascript", level: 75},
        {type: "Spring", level: 70},
        {type: "Docker", level: 70},
        {type: "NoSQL", level: 69}
      ];

      const component = shallow(<SkillBar skills={skills}/>);
      expect(component.find('.skillbar').length).toEqual(5);
      expect(component.find('.skillbar-title').length).toEqual(5);
      expect(component.find('.skillbar-bar').length).toEqual(5);
      expect(component.find('.skillbar-percent').length).toEqual(5);
      expect(component.find('.collapsed').length).toEqual(5);
      expect(component.contains(<span>Java</span>)).toBe(true);
      expect(component.contains(<span>Javascript</span>)).toBe(true);
      expect(component.contains(<span>Spring</span>)).toBe(true);
      expect(component.contains(<span>Docker</span>)).toBe(true);
      expect(component.contains(<span>NoSQL</span>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">85%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">75%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">70%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">70%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">69%</div>)).toBe(true);
      expect(component.find('.skillbar-title').at(0).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(0).prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-title').at(1).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(1).prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-title').at(2).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(2).prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-title').at(3).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(3).prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-title').at(4).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(4).prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-bar').at(0).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-bar').at(0).prop('style')).toHaveProperty('width','85%');
      expect(component.find('.skillbar-bar').at(1).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-bar').at(1).prop('style')).toHaveProperty('width','75%');
      expect(component.find('.skillbar-bar').at(2).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-bar').at(2).prop('style')).toHaveProperty('width','70%');
      expect(component.find('.skillbar-bar').at(3).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-bar').at(3).prop('style')).toHaveProperty('width','70%');
      expect(component.find('.skillbar-bar').at(4).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-bar').at(4).prop('style')).toHaveProperty('width','69%');
    });
  });

  describe('renders skillbars with element colorings', () => {
    it('should render one skillbar with element having specified coloring bar coloring', () => {
      const skills = [
        {type: "Java", level: 85 , color:{bar:'#fff'}},
      ];

      const component = shallow(<SkillBar skills={skills}/>);
      expect(component.find('.skillbar').length).toEqual(1);
      expect(component.find('.skillbar-title').length).toEqual(1);
      expect(component.find('.skillbar-bar').length).toEqual(1);
      expect(component.find('.skillbar-percent').length).toEqual(1);
      expect(component.find('.collapsed').length).toEqual(1);
      expect(component.contains(<span>Java</span>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">85%</div>)).toBe(true);
      expect(component.find('.skillbar-title').prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-bar').prop('style')).toHaveProperty('background','#fff');
      expect(component.find('.skillbar-bar').prop('style')).toHaveProperty('width','85%');
    });

    it('should render five skillbars with first element having specified coloring bar coloring', () => {
      const skills = [
        {type: "Java", level: 85 , color:{bar:'#fff'}},
        {type: "Javascript", level: 75},
        {type: "Spring", level: 70},
        {type: "Docker", level: 70},
        {type: "NoSQL", level: 69}
      ];

      const component = shallow(<SkillBar skills={skills}/>);
      expect(component.find('.skillbar').length).toEqual(5);
      expect(component.find('.skillbar-title').length).toEqual(5);
      expect(component.find('.skillbar-bar').length).toEqual(5);
      expect(component.find('.skillbar-percent').length).toEqual(5);
      expect(component.find('.collapsed').length).toEqual(5);
      expect(component.contains(<span>Java</span>)).toBe(true);
      expect(component.contains(<span>Javascript</span>)).toBe(true);
      expect(component.contains(<span>Spring</span>)).toBe(true);
      expect(component.contains(<span>Docker</span>)).toBe(true);
      expect(component.contains(<span>NoSQL</span>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">85%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">75%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">70%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">70%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">69%</div>)).toBe(true);
      expect(component.find('.skillbar-title').at(0).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(0).prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-title').at(1).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(1).prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-title').at(2).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(2).prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-title').at(3).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(3).prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-title').at(4).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(4).prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-bar').at(0).prop('style')).toHaveProperty('background','#fff');
      expect(component.find('.skillbar-bar').at(0).prop('style')).toHaveProperty('width','85%');
      expect(component.find('.skillbar-bar').at(1).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-bar').at(1).prop('style')).toHaveProperty('width','75%');
      expect(component.find('.skillbar-bar').at(2).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-bar').at(2).prop('style')).toHaveProperty('width','70%');
      expect(component.find('.skillbar-bar').at(3).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-bar').at(3).prop('style')).toHaveProperty('width','70%');
      expect(component.find('.skillbar-bar').at(4).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-bar').at(4).prop('style')).toHaveProperty('width','69%');
    });

    it('should render five skillbars with all elements with individual coloring', () => {
      const skills = [
        {type: "Java", level: 85, color:{bar:'#ffa',title:{text:'black',background:'#111'}}},
        {type: "Javascript", level: 75, color:{title:{text:'#aaa'}}},
        {type: "Spring", level: 70, color:{title:{background:'blue'}}},
        {type: "Docker", level: 70, color:{bar:'yellow'}},
        {type: "NoSQL", level: 69, color:{bar:'cyan', title:{background:'brown'}}}
      ];

      const component = shallow(<SkillBar skills={skills}/>);
      expect(component.find('.skillbar').length).toEqual(5);
      expect(component.find('.skillbar-title').length).toEqual(5);
      expect(component.find('.skillbar-bar').length).toEqual(5);
      expect(component.find('.skillbar-percent').length).toEqual(5);
      expect(component.find('.collapsed').length).toEqual(5);
      expect(component.contains(<span>Java</span>)).toBe(true);
      expect(component.contains(<span>Javascript</span>)).toBe(true);
      expect(component.contains(<span>Spring</span>)).toBe(true);
      expect(component.contains(<span>Docker</span>)).toBe(true);
      expect(component.contains(<span>NoSQL</span>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">85%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">75%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">70%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">70%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">69%</div>)).toBe(true);
      expect(component.find('.skillbar-title').at(0).prop('style')).toHaveProperty('background','#111');
      expect(component.find('.skillbar-title').at(0).prop('style')).toHaveProperty('color','black');
      expect(component.find('.skillbar-title').at(1).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(1).prop('style')).toHaveProperty('color','#aaa');
      expect(component.find('.skillbar-title').at(2).prop('style')).toHaveProperty('background','blue');
      expect(component.find('.skillbar-title').at(2).prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-title').at(3).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(3).prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-title').at(4).prop('style')).toHaveProperty('background','brown');
      expect(component.find('.skillbar-title').at(4).prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-bar').at(0).prop('style')).toHaveProperty('background','#ffa');
      expect(component.find('.skillbar-bar').at(0).prop('style')).toHaveProperty('width','85%');
      expect(component.find('.skillbar-bar').at(1).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-bar').at(1).prop('style')).toHaveProperty('width','75%');
      expect(component.find('.skillbar-bar').at(2).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-bar').at(2).prop('style')).toHaveProperty('width','70%');
      expect(component.find('.skillbar-bar').at(3).prop('style')).toHaveProperty('background','yellow');
      expect(component.find('.skillbar-bar').at(3).prop('style')).toHaveProperty('width','70%');
      expect(component.find('.skillbar-bar').at(4).prop('style')).toHaveProperty('background','cyan');
      expect(component.find('.skillbar-bar').at(4).prop('style')).toHaveProperty('width','69%');
    });
  });

  describe('renders skillbars with hue coloring object provided', () => {
    it('should render one skillbar with bar having hue data', () => {
      const skills = [
        {type: "Java", level: 85}
      ];

      const colors = {
        bar: {
          hue: 0,
          saturation: 50,
          level: {
            minimum:80,
            maximum:100
          }
        }
      };

      const component = shallow(<SkillBar skills={skills} colors={colors}/>);
      expect(component.find('.skillbar').length).toEqual(1);
      expect(component.find('.skillbar-title').length).toEqual(1);
      expect(component.find('.skillbar-bar').length).toEqual(1);
      expect(component.find('.skillbar-percent').length).toEqual(1);
      expect(component.find('.collapsed').length).toEqual(1);
      expect(component.contains(<span>Java</span>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">85%</div>)).toBe(true);
      expect(component.find('.skillbar-title').prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-bar').prop('style')).toHaveProperty('background','hsl(0, 50%, 80%)');
      expect(component.find('.skillbar-bar').prop('style')).toHaveProperty('width','85%');
    });

    it('should render five skillbars with bar having hue data', () => {
      const skills = [
        {type: "Java", level: 85},
        {type: "Javascript", level: 75},
        {type: "Spring", level: 70},
        {type: "Docker", level: 70},
        {type: "NoSQL", level: 69}
      ];

      const colors ={
        bar: {
          hue: {
            minimum: 10,
            maximum: 50
          },
          saturation: 50,
          level: {
            minimum:80,
            maximum:100
          }
        }
      };

      const component = shallow(<SkillBar skills={skills} colors={colors}/>);
      expect(component.find('.skillbar').length).toEqual(5);
      expect(component.find('.skillbar-title').length).toEqual(5);
      expect(component.find('.skillbar-bar').length).toEqual(5);
      expect(component.find('.skillbar-percent').length).toEqual(5);
      expect(component.find('.collapsed').length).toEqual(5);
      expect(component.contains(<span>Java</span>)).toBe(true);
      expect(component.contains(<span>Javascript</span>)).toBe(true);
      expect(component.contains(<span>Spring</span>)).toBe(true);
      expect(component.contains(<span>Docker</span>)).toBe(true);
      expect(component.contains(<span>NoSQL</span>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">85%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">75%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">70%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">70%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">69%</div>)).toBe(true);
      expect(component.find('.skillbar-title').at(0).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(0).prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-title').at(1).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(1).prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-title').at(2).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(2).prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-title').at(3).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(3).prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-title').at(4).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(4).prop('style')).toHaveProperty('color','');
      expect(component.find('.skillbar-bar').at(0).prop('style')).toHaveProperty('background','hsl(10, 50%, 80%)');
      expect(component.find('.skillbar-bar').at(0).prop('style')).toHaveProperty('width','85%');
      expect(component.find('.skillbar-bar').at(1).prop('style')).toHaveProperty('background','hsl(18, 50%, 84%)');
      expect(component.find('.skillbar-bar').at(1).prop('style')).toHaveProperty('width','75%');
      expect(component.find('.skillbar-bar').at(2).prop('style')).toHaveProperty('background','hsl(26, 50%, 88%)');
      expect(component.find('.skillbar-bar').at(2).prop('style')).toHaveProperty('width','70%');
      expect(component.find('.skillbar-bar').at(3).prop('style')).toHaveProperty('background','hsl(34, 50%, 92%)');
      expect(component.find('.skillbar-bar').at(3).prop('style')).toHaveProperty('width','70%');
      expect(component.find('.skillbar-bar').at(4).prop('style')).toHaveProperty('background','hsl(42, 50%, 96%)');
      expect(component.find('.skillbar-bar').at(4).prop('style')).toHaveProperty('width','69%');
    });

    it('should render five skillbars with title text and bar having hue data', () => {
      const skills = [
        {type: "Java", level: 85},
        {type: "Javascript", level: 75},
        {type: "Spring", level: 70},
        {type: "Docker", level: 70},
        {type: "NoSQL", level: 69}
      ];

      const colors ={
        bar: {
          hue: {
            minimum: 10,
            maximum: 50
          },
          saturation: 50,
          level: {
            minimum:80,
            maximum:100
          }
        },
        title: {
          text: {
            hue: 250,
            saturation: {
              minimum: 30,
              maximum: 70
            },
            level: {
              minimum: 43,
              maximum: 59
            }
          }
        }
      };

      const component = shallow(<SkillBar skills={skills} colors={colors}/>);
      expect(component.find('.skillbar').length).toEqual(5);
      expect(component.find('.skillbar-title').length).toEqual(5);
      expect(component.find('.skillbar-bar').length).toEqual(5);
      expect(component.find('.skillbar-percent').length).toEqual(5);
      expect(component.find('.collapsed').length).toEqual(5);
      expect(component.contains(<span>Java</span>)).toBe(true);
      expect(component.contains(<span>Javascript</span>)).toBe(true);
      expect(component.contains(<span>Spring</span>)).toBe(true);
      expect(component.contains(<span>Docker</span>)).toBe(true);
      expect(component.contains(<span>NoSQL</span>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">85%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">75%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">70%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">70%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">69%</div>)).toBe(true);
      expect(component.find('.skillbar-title').at(0).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(0).prop('style')).toHaveProperty('color','hsl(250, 30%, 43%)');
      expect(component.find('.skillbar-title').at(1).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(1).prop('style')).toHaveProperty('color','hsl(250, 38%, 46.2%)');
      expect(component.find('.skillbar-title').at(2).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(2).prop('style')).toHaveProperty('color','hsl(250, 46%, 49.4%)');
      expect(component.find('.skillbar-title').at(3).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(3).prop('style')).toHaveProperty('color','hsl(250, 54%, 52.6%)');
      expect(component.find('.skillbar-title').at(4).prop('style')).toHaveProperty('background','');
      expect(component.find('.skillbar-title').at(4).prop('style')).toHaveProperty('color','hsl(250, 62%, 55.8%)');
      expect(component.find('.skillbar-bar').at(0).prop('style')).toHaveProperty('background','hsl(10, 50%, 80%)');
      expect(component.find('.skillbar-bar').at(0).prop('style')).toHaveProperty('width','85%');
      expect(component.find('.skillbar-bar').at(1).prop('style')).toHaveProperty('background','hsl(18, 50%, 84%)');
      expect(component.find('.skillbar-bar').at(1).prop('style')).toHaveProperty('width','75%');
      expect(component.find('.skillbar-bar').at(2).prop('style')).toHaveProperty('background','hsl(26, 50%, 88%)');
      expect(component.find('.skillbar-bar').at(2).prop('style')).toHaveProperty('width','70%');
      expect(component.find('.skillbar-bar').at(3).prop('style')).toHaveProperty('background','hsl(34, 50%, 92%)');
      expect(component.find('.skillbar-bar').at(3).prop('style')).toHaveProperty('width','70%');
      expect(component.find('.skillbar-bar').at(4).prop('style')).toHaveProperty('background','hsl(42, 50%, 96%)');
      expect(component.find('.skillbar-bar').at(4).prop('style')).toHaveProperty('width','69%');
    });

    it('should render five skillbars with title text, background and bar having hue data', () => {
      const skills = [
        {type: "Java", level: 85},
        {type: "Javascript", level: 75},
        {type: "Spring", level: 70},
        {type: "Docker", level: 70},
        {type: "NoSQL", level: 69}
      ];

      const colors ={
        bar: {
          hue: {
            minimum: 10,
            maximum: 50
          },
          saturation: 50,
          level: {
            minimum:80,
            maximum:100
          }
        },
        title: {
          text: {
            hue: 250,
            saturation: {
              minimum: 30,
              maximum: 70
            },
            level: {
              minimum: 43,
              maximum: 59
            }
          },
          background: {
            hue: {
              minimum: 0,
              maximum: 250
            },
            saturation: {
              minimum: 0,
              maximum: 100
            },
            level: {
              minimum: 23,
              maximum: 100
            }
          }
        }
      };

      const component = shallow(<SkillBar skills={skills} colors={colors}/>);
      expect(component.find('.skillbar').length).toEqual(5);
      expect(component.find('.skillbar-title').length).toEqual(5);
      expect(component.find('.skillbar-bar').length).toEqual(5);
      expect(component.find('.skillbar-percent').length).toEqual(5);
      expect(component.find('.collapsed').length).toEqual(5);
      expect(component.contains(<span>Java</span>)).toBe(true);
      expect(component.contains(<span>Javascript</span>)).toBe(true);
      expect(component.contains(<span>Spring</span>)).toBe(true);
      expect(component.contains(<span>Docker</span>)).toBe(true);
      expect(component.contains(<span>NoSQL</span>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">85%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">75%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">70%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">70%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">69%</div>)).toBe(true);
      expect(component.find('.skillbar-title').at(0).prop('style')).toHaveProperty('background','hsl(0, 0%, 23%)');
      expect(component.find('.skillbar-title').at(0).prop('style')).toHaveProperty('color','hsl(250, 30%, 43%)');
      expect(component.find('.skillbar-title').at(1).prop('style')).toHaveProperty('background','hsl(50, 20%, 38.4%)');
      expect(component.find('.skillbar-title').at(1).prop('style')).toHaveProperty('color','hsl(250, 38%, 46.2%)');
      expect(component.find('.skillbar-title').at(2).prop('style')).toHaveProperty('background','hsl(100, 40%, 53.8%)');
      expect(component.find('.skillbar-title').at(2).prop('style')).toHaveProperty('color','hsl(250, 46%, 49.4%)');
      expect(component.find('.skillbar-title').at(3).prop('style')).toHaveProperty('background','hsl(150, 60%, 69.2%)');
      expect(component.find('.skillbar-title').at(3).prop('style')).toHaveProperty('color','hsl(250, 54%, 52.6%)');
      expect(component.find('.skillbar-title').at(4).prop('style')).toHaveProperty('background','hsl(200, 80%, 84.6%)');
      expect(component.find('.skillbar-title').at(4).prop('style')).toHaveProperty('color','hsl(250, 62%, 55.8%)');
      expect(component.find('.skillbar-bar').at(0).prop('style')).toHaveProperty('background','hsl(10, 50%, 80%)');
      expect(component.find('.skillbar-bar').at(0).prop('style')).toHaveProperty('width','85%');
      expect(component.find('.skillbar-bar').at(1).prop('style')).toHaveProperty('background','hsl(18, 50%, 84%)');
      expect(component.find('.skillbar-bar').at(1).prop('style')).toHaveProperty('width','75%');
      expect(component.find('.skillbar-bar').at(2).prop('style')).toHaveProperty('background','hsl(26, 50%, 88%)');
      expect(component.find('.skillbar-bar').at(2).prop('style')).toHaveProperty('width','70%');
      expect(component.find('.skillbar-bar').at(3).prop('style')).toHaveProperty('background','hsl(34, 50%, 92%)');
      expect(component.find('.skillbar-bar').at(3).prop('style')).toHaveProperty('width','70%');
      expect(component.find('.skillbar-bar').at(4).prop('style')).toHaveProperty('background','hsl(42, 50%, 96%)');
      expect(component.find('.skillbar-bar').at(4).prop('style')).toHaveProperty('width','69%');
    });
  });

  describe('renders skillbars with hue and solid color global info', () => {
    it('should render one skillbar with hue bar coloring and static global title coloring', () => {
      const skills = [
        {type: "Java", level: 85}
      ];

      const colors = {
        bar: {
          hue: {
            minimum: 10,
            maximum: 50
          },
          saturation: 50,
          level: {
            minimum:80,
            maximum:100
          }
        },
        title: {
          text: '#fff',
          background: '#af32af'
        }
      };

      const component = shallow(<SkillBar skills={skills} colors={colors}/>);
      expect(component.find('.skillbar').length).toEqual(1);
      expect(component.find('.skillbar-title').length).toEqual(1);
      expect(component.find('.skillbar-bar').length).toEqual(1);
      expect(component.find('.skillbar-percent').length).toEqual(1);
      expect(component.find('.collapsed').length).toEqual(1);
      expect(component.contains(<span>Java</span>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">85%</div>)).toBe(true);
      expect(component.find('.skillbar-title').prop('style')).toHaveProperty('background','#af32af');
      expect(component.find('.skillbar-title').prop('style')).toHaveProperty('color','#fff');
      expect(component.find('.skillbar-bar').prop('style')).toHaveProperty('background','hsl(10, 50%, 80%)');
      expect(component.find('.skillbar-bar').prop('style')).toHaveProperty('width','85%');
    });

    it('should render five skillbars with title text, background having hue data and bar having global', () => {
      const skills = [
        {type: "Java", level: 85},
        {type: "Javascript", level: 75},
        {type: "Spring", level: 70},
        {type: "Docker", level: 70},
        {type: "NoSQL", level: 69}
      ];

      const colors = {
        bar: '#abd',
        title: {
          text: {
            hue: 250,
            saturation: {
              minimum: 30,
              maximum: 70
            },
            level: {
              minimum: 43,
              maximum: 59
            }
          },
          background: {
            hue: {
              minimum: 0,
              maximum: 250
            },
            saturation: {
              minimum: 0,
              maximum: 100
            },
            level: {
              minimum: 23,
              maximum: 100
            }
          }
        }
      };

      const component = shallow(<SkillBar skills={skills} colors={colors}/>);
      expect(component.find('.skillbar').length).toEqual(5);
      expect(component.find('.skillbar-title').length).toEqual(5);
      expect(component.find('.skillbar-bar').length).toEqual(5);
      expect(component.find('.skillbar-percent').length).toEqual(5);
      expect(component.find('.collapsed').length).toEqual(5);
      expect(component.contains(<span>Java</span>)).toBe(true);
      expect(component.contains(<span>Javascript</span>)).toBe(true);
      expect(component.contains(<span>Spring</span>)).toBe(true);
      expect(component.contains(<span>Docker</span>)).toBe(true);
      expect(component.contains(<span>NoSQL</span>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">85%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">75%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">70%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">70%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">69%</div>)).toBe(true);
      expect(component.find('.skillbar-title').at(0).prop('style')).toHaveProperty('background', 'hsl(0, 0%, 23%)');
      expect(component.find('.skillbar-title').at(0).prop('style')).toHaveProperty('color', 'hsl(250, 30%, 43%)');
      expect(component.find('.skillbar-title').at(1).prop('style')).toHaveProperty('background', 'hsl(50, 20%, 38.4%)');
      expect(component.find('.skillbar-title').at(1).prop('style')).toHaveProperty('color', 'hsl(250, 38%, 46.2%)');
      expect(component.find('.skillbar-title').at(2).prop('style')).toHaveProperty('background', 'hsl(100, 40%, 53.8%)');
      expect(component.find('.skillbar-title').at(2).prop('style')).toHaveProperty('color', 'hsl(250, 46%, 49.4%)');
      expect(component.find('.skillbar-title').at(3).prop('style')).toHaveProperty('background', 'hsl(150, 60%, 69.2%)');
      expect(component.find('.skillbar-title').at(3).prop('style')).toHaveProperty('color', 'hsl(250, 54%, 52.6%)');
      expect(component.find('.skillbar-title').at(4).prop('style')).toHaveProperty('background', 'hsl(200, 80%, 84.6%)');
      expect(component.find('.skillbar-title').at(4).prop('style')).toHaveProperty('color', 'hsl(250, 62%, 55.8%)');
      expect(component.find('.skillbar-bar').at(0).prop('style')).toHaveProperty('background', '#abd');
      expect(component.find('.skillbar-bar').at(0).prop('style')).toHaveProperty('width', '85%');
      expect(component.find('.skillbar-bar').at(1).prop('style')).toHaveProperty('background', '#abd');
      expect(component.find('.skillbar-bar').at(1).prop('style')).toHaveProperty('width', '75%');
      expect(component.find('.skillbar-bar').at(2).prop('style')).toHaveProperty('background', '#abd');
      expect(component.find('.skillbar-bar').at(2).prop('style')).toHaveProperty('width', '70%');
      expect(component.find('.skillbar-bar').at(3).prop('style')).toHaveProperty('background', '#abd');
      expect(component.find('.skillbar-bar').at(3).prop('style')).toHaveProperty('width', '70%');
      expect(component.find('.skillbar-bar').at(4).prop('style')).toHaveProperty('background', '#abd');
      expect(component.find('.skillbar-bar').at(4).prop('style')).toHaveProperty('width', '69%');
    });
  });

  describe('renders skillbars with hue and individual element override', () => {
    it('should render one skillbar with element coloring overriding hue coloring data', () => {
      const skills = [
        {type: "Java", level: 85, color:{bar:'white',title:{text:'green',background:'#111'}}}
      ];

      const colors ={
        bar: {
          hue: {
            minimum: 10,
            maximum: 50
          },
          saturation: 50,
          level: {
            minimum:80,
            maximum:100
          }
        },
        title: {
          text: {
            hue: 250,
            saturation: {
              minimum: 30,
              maximum: 70
            },
            level: {
              minimum: 43,
              maximum: 59
            }
          },
          background: {
            hue: {
              minimum: 0,
              maximum: 250
            },
            saturation: {
              minimum: 0,
              maximum: 230
            },
            level: {
              minimum: 23,
              maximum: 100
            }
          }
        }
      };

      const component = shallow(<SkillBar skills={skills} colors={colors}/>);
      expect(component.find('.skillbar').length).toEqual(1);
      expect(component.find('.skillbar-title').length).toEqual(1);
      expect(component.find('.skillbar-bar').length).toEqual(1);
      expect(component.find('.skillbar-percent').length).toEqual(1);
      expect(component.find('.collapsed').length).toEqual(1);
      expect(component.contains(<span>Java</span>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">85%</div>)).toBe(true);
      expect(component.find('.skillbar-title').prop('style')).toHaveProperty('background','#111');
      expect(component.find('.skillbar-title').prop('style')).toHaveProperty('color','green');
      expect(component.find('.skillbar-bar').prop('style')).toHaveProperty('background','white');
      expect(component.find('.skillbar-bar').prop('style')).toHaveProperty('width','85%');
    });

    it('should render one skillbar with element coloring overriding hue coloring data remainder with hue data', () => {
      const skills = [
        {type: "Java", level: 85, color:{bar:'white',title:{text:'green',background:'#111'}}},
        {type: "Javascript", level: 75},
        {type: "Spring", level: 70},
        {type: "Docker", level: 70},
        {type: "NoSQL", level: 69}
      ];

      const colors ={
        bar: {
          hue: {
            minimum: 10,
            maximum: 50
          },
          saturation: 50,
          level: {
            minimum:80,
            maximum:100
          }
        },
        title: {
          text: {
            hue: 250,
            saturation: {
              minimum: 30,
              maximum: 70
            },
            level: {
              minimum: 43,
              maximum: 59
            }
          },
          background: {
            hue: {
              minimum: 0,
              maximum: 250
            },
            saturation: {
              minimum: 0,
              maximum: 230
            },
            level: {
              minimum: 23,
              maximum: 100
            }
          }
        }
      };

      const component = shallow(<SkillBar skills={skills} colors={colors}/>);
      expect(component.find('.skillbar').length).toEqual(5);
      expect(component.find('.skillbar-title').length).toEqual(5);
      expect(component.find('.skillbar-bar').length).toEqual(5);
      expect(component.find('.skillbar-percent').length).toEqual(5);
      expect(component.find('.collapsed').length).toEqual(5);
      expect(component.contains(<span>Java</span>)).toBe(true);
      expect(component.contains(<span>Javascript</span>)).toBe(true);
      expect(component.contains(<span>Spring</span>)).toBe(true);
      expect(component.contains(<span>Docker</span>)).toBe(true);
      expect(component.contains(<span>NoSQL</span>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">85%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">75%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">70%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">70%</div>)).toBe(true);
      expect(component.contains(<div className="skillbar-percent">69%</div>)).toBe(true);
      expect(component.find('.skillbar-title').at(0).prop('style')).toHaveProperty('background','#111');
      expect(component.find('.skillbar-title').at(0).prop('style')).toHaveProperty('color','green');
      expect(component.find('.skillbar-title').at(1).prop('style')).toHaveProperty('background','hsl(50, 46%, 38.4%)');
      expect(component.find('.skillbar-title').at(1).prop('style')).toHaveProperty('color','hsl(250, 38%, 46.2%)');
      expect(component.find('.skillbar-title').at(2).prop('style')).toHaveProperty('background','hsl(100, 92%, 53.8%)');
      expect(component.find('.skillbar-title').at(2).prop('style')).toHaveProperty('color','hsl(250, 46%, 49.4%)');
      expect(component.find('.skillbar-title').at(3).prop('style')).toHaveProperty('background','hsl(150, 138%, 69.2%)');
      expect(component.find('.skillbar-title').at(3).prop('style')).toHaveProperty('color','hsl(250, 54%, 52.6%)');
      expect(component.find('.skillbar-title').at(4).prop('style')).toHaveProperty('background','hsl(200, 184%, 84.6%)');
      expect(component.find('.skillbar-title').at(4).prop('style')).toHaveProperty('color','hsl(250, 62%, 55.8%)');
      expect(component.find('.skillbar-bar').at(0).prop('style')).toHaveProperty('background','white');
      expect(component.find('.skillbar-bar').at(0).prop('style')).toHaveProperty('width','85%');
      expect(component.find('.skillbar-bar').at(1).prop('style')).toHaveProperty('background','hsl(18, 50%, 84%)');
      expect(component.find('.skillbar-bar').at(1).prop('style')).toHaveProperty('width','75%');
      expect(component.find('.skillbar-bar').at(2).prop('style')).toHaveProperty('background','hsl(26, 50%, 88%)');
      expect(component.find('.skillbar-bar').at(2).prop('style')).toHaveProperty('width','70%');
      expect(component.find('.skillbar-bar').at(3).prop('style')).toHaveProperty('background','hsl(34, 50%, 92%)');
      expect(component.find('.skillbar-bar').at(3).prop('style')).toHaveProperty('width','70%');
      expect(component.find('.skillbar-bar').at(4).prop('style')).toHaveProperty('background','hsl(42, 50%, 96%)');
      expect(component.find('.skillbar-bar').at(4).prop('style')).toHaveProperty('width','69%');
    });
  });

  describe('test animation trigger', () => {
    it('should remove collapsed class after timeout expiry', () => {
      const skills = [
        {type: "Java", level: 85}
      ];
      jest.useFakeTimers();

      const component = shallow(<SkillBar skills={skills}/>);
      expect(component.state().collapsed).toEqual(true);
      jest.runAllTimers();
      expect(component.state().collapsed).toEqual(false);
    });
  });
});