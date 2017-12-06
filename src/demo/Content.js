import React from 'react';
import SkillBar from '../lib';

const SKILLS1 = [
  {type: "Java", level: 100},
  {type: "React", level: 85},
  {type: "Javascript", level: 75},
  {type: "Spring", level: 50},
  {type: "Docker", level: 25},
  {type: "HTML", level: 20},
  {type: "NoSQL", level: 0}
];

const SKILLS2 = [
  {type: "Java", level: 100, color:{bar:'#2980b9'}},
  {type: "React", level: 85},
  {type: "Javascript", level: 75},
  {type: "Spring", level: 50},
  {type: "Docker", level: 25},
  {type: "HTML", level: 20},
  {type: "NoSQL", level: 0}
];

const SKILLS3 = [
  {type: "Java", level: 100, color:{bar:'#3498db',title:{background:'#2980b9',text:'black'}}},
  {type: "React", level: 85, color:{bar:'brown'}},
  {type: "Javascript", level: 75, color:{bar:'yellow'}},
  {type: "Spring", level: 50, color:{bar:'blue'}},
  {type: "Docker", level: 25, color:{bar:'orange'}},
  {type: "HTML", level: 20, color:{bar:'black'}},
  {type: "NoSQL", level: 0, color:{bar:'pink'}}
];

const SKILLS4 = [
  {type: "Java", level: 100, color:{bar:'#3498db',title:{background:'#2980b9',text:'black'}}},
  {type: "React", level: 85},
  {type: "Javascript", level: 75},
  {type: "Spring", level: 50},
  {type: "Docker", level: 25},
  {type: "HTML", level: 20},
  {type: "NoSQL", level: 0}
];

const SKILLS6 = [
  {type: "Java", level: 100, color:{bar:'#3498db', title:{text:'#fff', background:'#2980b9'}}},
  {type: "React", level: 85, color:{bar:'#4288d0', title:{text:'#fff', background:'#124e8c'}}},
  {type: "Javascript", level: 75, color:{bar:'#2c3e50', title:{text:'#fff', background:'#2c3e50'}}},
  {type: "Spring", level: 50, color:{bar:'#5a68a5', title:{text:'#fff', background:'#46465e'}}},
  {type: "Docker", level: 25, color:{bar:'#525252', title:{text:'#fff', background:'#333333'}}},
  {type: "HTML", level: 20, color:{bar:'black', title:{text:'#111', background:'#fff'}}},
  {type: "NoSQL", level: 0, color:{bar:'#2ecc71', title:{text:'#fff', background:'#27ae60'}}}
];

const SKILLS7 = [
  {type: "Java", level: 100, color:{bar:'#3498db', title:{text:'#111', background:'#2980b9'}}},
  {type: "React", level: 85},
  {type: "Javascript", level: 75},
  {type: "Spring", level: 50},
  {type: "Docker", level: 25},
  {type: "HTML", level: 20},
  {type: "NoSQL", level: 0}
];

const SKILLS8 = [
  {type: "Java", level: 100, color:{bar:'#3498db',title:{background:'#2980b9'}}},
  {type: "React", level: 85},
  {type: "Javascript", level: 75},
  {type: "Spring", level: 50},
  {type: "Docker", level: 25},
  {type: "HTML", level: 20},
  {type: "NoSQL", level: 0}
];

const colors1 = {
  bar: {
    hue: 0,
    saturation: 50,
    level: {
      minimum:80,
      maximum:100
    }
  }
};

const colors2 = {
  bar: {
    hue: 32,
    saturation: 50,
    level: {
      minimum:30,
      maximum:70
    }
  },
  title:{
    text: {
      hue: 45,
      saturation: {
        minimum: 70,
        maximum: 30
      },
      level: 50
    }
  }
};

const colors3 = {
  bar: {
    hue: 32,
    saturation: 50,
    level: {
      minimum:30,
      maximum:70
    }
  },
  title:{
    text: {
      hue: 45,
      saturation: {
        minimum: 30,
        maximum: 70
      },
      level: 50
    },
    background: {
      hue: 30,
      saturation: {
        minimum: 30,
        maximum: 70
      },
      level: {
        minimum: 0,
        maximum: 50
      }
    }
  }
};

const colors4 = {
  bar: '#ffa',
  title:{
    text: {
      hue: 45,
      saturation: {
        minimum: 30,
        maximum: 70
      },
      level: 50
    },
    background: {
      hue: 30,
      saturation: {
        minimum: 30,
        maximum: 70
      },
      level: {
        minimum: 0,
        maximum: 50
      }
    }
  }
};

const colors5 = {
  bar: '#3498db',
  title: {
    text: '#fff',
    background: '#2980b9'
  }
};

const Content = () => (
  <div>
    <div id='default'>
      <h2>All - Default</h2>
      <h4>Nothing specified, all defaults</h4>
      <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS1,null, 2) }
        <br/>
        {`<SkillBar skills={SKILLS}>`}
      </pre>
      </div>
      <SkillBar skills={SKILLS1}/>
    </div>

    <br/><br/><br/><br/>

    <div id='heightDefault'>
      <h2>height - Default</h2>
      <h4>Height with value, defaulting to pixel units</h4>
      <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS1,null, 2) }
        <br/>
        {`<SkillBar skills={SKILLS} height={15}>`}
      </pre>
      </div>
      <SkillBar skills={SKILLS1} height={15}/>
    </div>

    <br/><br/><br/><br/>

    <div id='heightCustom'>
      <h2>height - Custom</h2>
      <h4>Height with custom value and unit</h4>
      <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS1,null, 2) }
        <br/>
        {`<SkillBar skills={SKILLS} height={'20vh'}>`}
      </pre>
      </div>
      <SkillBar skills={SKILLS1} height={'20vh'}/>
    </div>

    <br/><br/><br/><br/>

    <div id='animationDelay'>
      <h2>animationDelay</h2>
      <h4>Delay to start animation in ms</h4>
      <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS1,null, 2) }
        <br/>
        {`<SkillBar skills={SKILLS} animationDelay={4000}>`}
      </pre>
      </div>
      <SkillBar skills={SKILLS1} animationDelay={4000}/>
    </div>

    <br/><br/><br/><br/>

    <div id='animationDuration'>
      <h2>animationDuration</h2>
      <h4>Length of animation in ms</h4>
      <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS1,null, 2) }
        <br/>
        {`<SkillBar skills={SKILLS} animationDuration={7000}>`}
      </pre>
      </div>
      <SkillBar skills={SKILLS1} animationDuration={7000}/>
    </div>

    <br/><br/><br/><br/>

    <div id='globalColoring'>
      <h2>Hue with Element coloring override</h2>
      <h4>Hue coloring with individual element override</h4>
      <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS1,null, 2) }
        <br/>
        colors = {JSON.stringify(colors5,null, 2)}
        <br/>
        {`<SkillBar skills={SKILLS} colors={colors}>`}
        </pre>
      </div>
      <SkillBar skills={SKILLS1} colors={colors5}/>
    </div>

    <br/><br/><br/><br/>

    <div id='hueBar'>
      <h2>Hue Colored Bar</h2>
      <h4>Hue based coloring of all bars in component</h4>
      <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS1,null, 2) }
        <br/>
        colors = {JSON.stringify(colors1,null, 2)}
        <br/>
        {`<SkillBar skills={SKILLS} colors={colors}>`}
      </pre>
      </div>
      <SkillBar skills={SKILLS1} colors={colors1}/>
    </div>

    <br/><br/><br/><br/>

    <div id='hueBarText'>
      <h2>Hue Colored Bar & Text</h2>
      <h4>Hue based coloring of bar and title text area</h4>
      <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS1,null, 2) }
        <br/>
        colors = {JSON.stringify(colors2,null, 2)}
        <br/>
        {`<SkillBar skills={SKILLS}>`}
        </pre>
      </div>
      <SkillBar skills={SKILLS1} colors={colors2}/>
    </div>

    <br/><br/><br/><br/>

    <div id='hueBarTextBg'>
      <h2>Hue Colored Bar & Text & Text Bg</h2>
      <h4>Hue based coloring of bar and title text and bg area</h4>
      <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS1,null, 2) }
        <br/>
        colors = {JSON.stringify(colors3,null, 2)}
        <br/>
        {`<SkillBar skills={SKILLS} colors={colors}>`}
        </pre>
      </div>
      <SkillBar skills={SKILLS1} colors={colors3}/>
    </div>

    <br/><br/><br/><br/>

    <div id='hueWithSolidColors'>
      <h2>Hue with solid colors mixture</h2>
      <h4>Hue coloring with solid colors properties mixed in object</h4>
      <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS7,null, 2) }
        <br/>
        colors = {JSON.stringify(colors4,null, 2)}
        <br/>
        {`<SkillBar skills={SKILLS} colors={colors}>`}
        </pre>
      </div>
      <SkillBar skills={SKILLS1} colors={colors4}/>
    </div>

    <br/><br/><br/><br/>

    <div id='elementFirstBar'>
      <h2>Element Color Specific Bar</h2>
      <h4>Element level coloring on first bar, defaulting remainder</h4>
      <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS2,null, 2) }
        <br/>
        {`<SkillBar skills={SKILLS}>`}
        </pre>
      </div>
      <SkillBar skills={SKILLS2}/>
    </div>

    <br/><br/><br/><br/>

    <div id='elementFirstBarAndText'>
      <h2>Element Color Specific Bar & Text Bg</h2>
      <h4>Element level coloring first bar & Text Background</h4>
      <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS8,null, 2) }
        <br/>
        {`<SkillBar skills={SKILLS}>`}
        </pre>
      </div>
      <SkillBar skills={SKILLS8}/>
    </div>

    <br/><br/><br/><br/>

    <div id='elementAllBarText'>
      <h2>Element Color Specific Bar & Text & Bg</h2>
      <h4>Element level coloring on first Bar, Text & Text Bg with mixture of text and hex color values</h4>
      <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS4,null, 2) }
        <br/>
        {`<SkillBar skills={SKILLS}>`}
        </pre>
      </div>
      <SkillBar skills={SKILLS4}/>
    </div>

    <br/><br/><br/><br/>

    <div id='elementAllBar'>
      <h2>Element Color All Bars</h2>
      <h4>Element level coloring on all bars</h4>
      <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS3,null, 2) }
        <br/>
        {`<SkillBar skills={SKILLS}>`}
        </pre>
      </div>
      <SkillBar skills={SKILLS3}/>
    </div>

    <br/><br/><br/><br/>

    <div id='elementAllBarAllTextAllBg'>
      <h2>Element Color All</h2>
      <h4>Element level coloring on all, Text Background Coloring changed on all</h4>
      <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS6,null, 2) }
        <br/>
        {`<SkillBar skills={SKILLS}>`}
        </pre>
      </div>
      <SkillBar skills={SKILLS6}/>
    </div>

    <br/><br/><br/><br/>

    <div id='hueWithElementOverride'>
      <h2>Hue with Element coloring override</h2>
      <h4>Hue coloring with individual element override</h4>
      <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS7,null, 2) }
        <br/>
        colors = {JSON.stringify(colors1,null, 2)}
        <br/>
        {`<SkillBar skills={SKILLS} colors={colors}>`}
        </pre>
      </div>
      <SkillBar skills={SKILLS7} colors={colors1} offset={0}/>
    </div>
  </div>
);

export default Content;