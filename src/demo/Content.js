import React from 'react';
import SkillBar from '../lib';

const SKILLS1 = [
  {type: "Java", level: 85},
  {type: "Javascript", level: 75},
  {type: "Spring", level: 70},
  {type: "Docker", level: 70},
  {type: "NoSQL", level: 69},
  {type: "React", level: 65},
  {type: "HTML", level: 65}
];

const SKILLS2 = [
  {type: "Java", level: 85, color:{bar:'#ff5aec'}},
  {type: "Javascript", level: 75},
  {type: "Spring", level: 70},
  {type: "Docker", level: 70},
  {type: "NoSQL", level: 69},
  {type: "React", level: 65},
  {type: "HTML", level: 65}
];

const SKILLS3 = [
  {type: "Java", level: 85, color:{bar:'red'}},
  {type: "Javascript", level: 75, color:{bar:'yellow'}},
  {type: "Spring", level: 70, color:{bar:'blue'}},
  {type: "Docker", level: 70, color:{bar:'orange'}},
  {type: "NoSQL", level: 69, color:{bar:'pink'}},
  {type: "React", level: 65, color:{bar:'brown'}},
  {type: "HTML", level: 65, color:{bar:'black'}}
];

const SKILLS4 = [
  {type: "Java", level: 85, color:{bar:'red', title:{text:'#111'}}},
  {type: "Javascript", level: 75, color:{bar:'yellow'}},
  {type: "Spring", level: 70, color:{bar:'blue'}},
  {type: "Docker", level: 70, color:{bar:'orange'}},
  {type: "NoSQL", level: 69, color:{bar:'pink'}},
  {type: "React", level: 65, color:{bar:'brown'}},
  {type: "HTML", level: 65, color:{bar:'black'}}
];

const SKILLS5 = [
  {type: "Java", level: 85, color:{bar:'red', title:{text:'#111', background:'#fff'}}},
  {type: "Javascript", level: 75, color:{bar:'yellow'}},
  {type: "Spring", level: 70, color:{bar:'blue'}},
  {type: "Docker", level: 70, color:{bar:'orange'}},
  {type: "NoSQL", level: 69, color:{bar:'pink'}},
  {type: "React", level: 65, color:{bar:'brown'}},
  {type: "HTML", level: 65, color:{bar:'black'}}
];

const SKILLS6 = [
  {type: "Java", level: 85, color:{bar:'red', title:{text:'#111', background:'yellow'}}},
  {type: "Javascript", level: 75, color:{bar:'yellow', title:{text:'#111', background:'blue'}}},
  {type: "Spring", level: 70, color:{bar:'blue', title:{text:'#111', background:'orange'}}},
  {type: "Docker", level: 70, color:{bar:'orange', title:{text:'#111', background:'pink'}}},
  {type: "NoSQL", level: 69, color:{bar:'pink', title:{text:'#111', background:'brown'}}},
  {type: "React", level: 65, color:{bar:'brown', title:{text:'#fff', background:'black'}}},
  {type: "HTML", level: 65, color:{bar:'black', title:{text:'#111', background:'#fff'}}}
];

const SKILLS7 = [
  {type: "Java", level: 85, color:{bar:'red', title:{text:'#111', background:'yellow'}}},
  {type: "Javascript", level: 75},
  {type: "Spring", level: 70},
  {type: "Docker", level: 70},
  {type: "NoSQL", level: 69},
  {type: "React", level: 65},
  {type: "HTML", level: 65}
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
    },
    background: '#fff5ab'
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

const Content = () => (
  <div>
    <h2 id='default'>Basic Example: No color attributes specified, defaulting all</h2>
    <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS1,null, 2) }
        <br/>
        {`<SkillBar skills={SKILLS}>`}
      </pre>
    </div>
    <SkillBar skills={SKILLS1}/>

    <br/><br/><br/><br/>

    <h2 id='hueBar'>Hue based coloring of bar</h2>
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

    <br/><br/><br/><br/>

    <h2 id='hueBarText'>Hue based coloring of bar and title text area</h2>
    <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS1,null, 2) }
        <br/>
        colors = {JSON.stringify(colors1,null, 2)}
        <br/>
        {`<SkillBar skills={SKILLS}>`}
        </pre>
    </div>
    <SkillBar skills={SKILLS1} colors={colors2}/>

    <br/><br/><br/><br/>

    <h2 id='hueBarTextBg'>Hue based coloring of bar and title text and bg area</h2>
    <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS1,null, 2) }
        <br/>
        colors = {JSON.stringify(colors1,null, 2)}
        <br/>
        {`<SkillBar skills={SKILLS} colors={colors}>`}
        </pre>
    </div>
    <SkillBar skills={SKILLS1} colors={colors3}/>

    <br/><br/><br/><br/>

    <h2 id='elementFirstBar'>Element level coloring on first bar, defaulting remainder</h2>
    <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS2,null, 2) }
        <br/>
        {`<SkillBar skills={SKILLS}>`}
        </pre>
    </div>
    <SkillBar skills={SKILLS2}/>

    <br/><br/><br/><br/>

    <h2 id='elementAllBar'>Element level coloring on all bars</h2>
    <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS3,null, 2) }
        <br/>
        {`<SkillBar skills={SKILLS}>`}
        </pre>
    </div>
    <SkillBar skills={SKILLS3}/>

    <br/><br/><br/><br/>

    <h2 id='elementAllBarText'>Element level coloring on all, Text Coloring changed on first</h2>
    <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS4,null, 2) }
        <br/>
        {`<SkillBar skills={SKILLS}>`}
        </pre>
    </div>
    <SkillBar skills={SKILLS4}/>

    <br/><br/><br/><br/>

    <h2 id='elementAllBarAllTextBg'>Element level coloring on all, Text Background Coloring changed on first</h2>
    <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS5,null, 2) }
        <br/>
        {`<SkillBar skills={SKILLS}>`}
      </pre>
    </div>
    <SkillBar skills={SKILLS5}/>

    <br/><br/><br/><br/>

    <h2 id='elementAllBarAllTextAllBg'>Element level coloring on all, Text Background Coloring changed on all</h2>
    <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS6,null, 2) }
        <br/>
        {`<SkillBar skills={SKILLS}>`}
        </pre>
    </div>
    <SkillBar skills={SKILLS6}/>

    <br/><br/><br/><br/>

    <h2 id='hueWithElementOverride'>Hue coloring with element override</h2>
    <div>
      <pre>
        SKILLS = {JSON.stringify(SKILLS7,null, 2) }
        <br/>
        colors = {JSON.stringify(colors1,null, 2)}
        <br/>
        {`<SkillBar skills={SKILLS} colors={colors}>`}
        </pre>
    </div>
    <SkillBar skills={SKILLS7} colors={colors1}/>

    <br/><br/><br/><br/>

    <h2 id='hueWithSolidColors'>Hue coloring with element override</h2>
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
);

export default Content;