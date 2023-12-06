"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[196],{2474:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var l=n(2322),r=n(876),i=n(392);const a={sidebar_position:2},o="Hue",s={id:"props/colors/hue",title:"Hue",description:"Bar",source:"@site/docs/props/colors/hue.mdx",sourceDirName:"props/colors",slug:"/props/colors/hue",permalink:"/react-skillbars/docs/props/colors/hue",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/props/colors/hue.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Hex",permalink:"/react-skillbars/docs/props/colors/hex"},next:{title:"Symbols",permalink:"/react-skillbars/docs/props/colors/symbols"}},c={},u=[{value:"Bar",id:"bar",level:2},{value:"Bar &amp; Text",id:"bar--text",level:2},{value:"Bar &amp; Text &amp; Background",id:"bar--text--background",level:2},{value:"Bar &amp; Text &amp; Background &amp; Solid Colors",id:"bar--text--background--solid-colors",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.ah)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"hue",children:"Hue"}),"\n",(0,l.jsx)(t.h2,{id:"bar",children:"Bar"}),"\n",(0,l.jsxs)(t.p,{children:["You can provide as alternative in the ",(0,l.jsx)(t.code,{children:"colors"})," object the hue values that will be applied across all the skills provided."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-jsx",children:"import SkillBar from 'react-skillbars';\n\nconst skills = [\n  { type: 'Java', level: 100 },\n  { type: 'React', level: 85 },\n  { type: 'Javascript', level: 75 },\n  { type: 'Spring', level: 50 },\n  { type: 'Docker', level: 25 },\n  { type: 'HTML', level: 20 },\n  { type: 'NoSQL', level: 0 }\n];\nconst colors = {\n  bar: {\n    hue: 0,\n    saturation: 50,\n    level: {\n      minimum: 80,\n      maximum: 100\n    }\n  }\n};\n<SkillBar skills={skills} colors={colors}/>\n"})}),"\n","\n","\n",(0,l.jsx)(i.Z,{skills:[{type:"Java",level:100},{type:"React",level:85},{type:"Javascript",level:75},{type:"Spring",level:50},{type:"Docker",level:25},{type:"HTML",level:20},{type:"NoSQL",level:0}],colors:{bar:{hue:0,saturation:50,level:{minimum:80,maximum:100}}}}),"\n",(0,l.jsx)(t.h2,{id:"bar--text",children:"Bar & Text"}),"\n",(0,l.jsxs)(t.p,{children:["You can provide as alternative in the ",(0,l.jsx)(t.code,{children:"colors"})," object the hue values that will be applied across all the skills provided."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-jsx",children:"import SkillBar from 'react-skillbars';\n\nconst skills = [\n  { type: 'Java', level: 100 },\n  { type: 'React', level: 85 },\n  { type: 'Javascript', level: 75 },\n  { type: 'Spring', level: 50 },\n  { type: 'Docker', level: 25 },\n  { type: 'HTML', level: 20 },\n  { type: 'NoSQL', level: 0 }\n];\nconst colors = {\n  bar: {\n    hue: 32,\n    saturation: 50,\n    level: {\n      minimum: 30,\n      maximum: 70\n    }\n  },\n  title: {\n    text: {\n      hue: 45,\n      saturation: {\n        minimum: 70,\n        maximum: 30\n      },\n      level: 50\n    }\n  }\n};\n<SkillBar skills={skills} colors={colors}/>\n"})}),"\n",(0,l.jsx)(i.Z,{skills:[{type:"Java",level:100},{type:"React",level:85},{type:"Javascript",level:75},{type:"Spring",level:50},{type:"Docker",level:25},{type:"HTML",level:20},{type:"NoSQL",level:0}],colors:{bar:{hue:32,saturation:50,level:{minimum:30,maximum:70}},title:{text:{hue:45,saturation:{minimum:70,maximum:30},level:50}}}}),"\n",(0,l.jsx)(t.h2,{id:"bar--text--background",children:"Bar & Text & Background"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-jsx",children:"import SkillBar from 'react-skillbars';\n\nconst skills = [\n  { type: 'Java', level: 100 },\n  { type: 'React', level: 85 },\n  { type: 'Javascript', level: 75 },\n  { type: 'Spring', level: 50 },\n  { type: 'Docker', level: 25 },\n  { type: 'HTML', level: 20 },\n  { type: 'NoSQL', level: 0 }\n];\nconst colors = {\n  bar: {\n    hue: 32,\n    saturation: 50,\n    level: {\n      minimum: 30,\n      maximum: 70\n    }\n  },\n  title: {\n    text: {\n      hue: 45,\n      saturation: {\n        minimum: 30,\n        maximum: 70\n      },\n      level: 50\n    },\n    background: {\n      hue: 30,\n      saturation: {\n        minimum: 30,\n        maximum: 70\n      },\n      level: {\n        minimum: 0,\n        maximum: 50\n      }\n    }\n  }\n};\n<SkillBar skills={skills} colors={colors}/>\n"})}),"\n",(0,l.jsx)(i.Z,{skills:[{type:"Java",level:100},{type:"React",level:85},{type:"Javascript",level:75},{type:"Spring",level:50},{type:"Docker",level:25},{type:"HTML",level:20},{type:"NoSQL",level:0}],colors:{bar:{hue:32,saturation:50,level:{minimum:30,maximum:70}},title:{text:{hue:45,saturation:{minimum:30,maximum:70},level:50},background:{hue:30,saturation:{minimum:30,maximum:70},level:{minimum:0,maximum:50}}}}}),"\n",(0,l.jsx)(t.h2,{id:"bar--text--background--solid-colors",children:"Bar & Text & Background & Solid Colors"}),"\n",(0,l.jsx)(t.p,{children:"You can mix hue with the solid coloring of individual elements."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-jsx",children:"import SkillBar from 'react-skillbars';\n\nconst skills = [\n  {\n    type: 'Java',\n    level: 100,\n    color: {\n      bar: '#3498db',\n      title: {\n        text: '#111',\n        background: '#2980b9'\n      }\n    }\n  },\n  { type: 'React', level: 85 },\n  { type: 'Javascript', level: 75 },\n  { type: 'Spring', level: 50 },\n  { type: 'Docker', level: 25 },\n  { type: 'HTML', level: 20 },\n  { type: 'NoSQL', level: 0 }\n];\nconst colors = {\n  bar: '#ffa',\n    title: {\n      text: {\n        hue: 45,\n        saturation: {\n          minimum: 30,\n          maximum: 70\n        },\n        level: 50\n      },\n      background: {\n        hue: 30,\n        saturation: {\n          minimum: 30,\n          maximum: 70\n        },\n        level: {\n          minimum: 0,\n          maximum: 50\n        }\n      }\n    }\n};\n<SkillBar skills={skills} colors={colors}/>\n"})}),"\n",(0,l.jsx)(i.Z,{skills:[{type:"Java",level:100,color:{bar:"#3498db",title:{text:"#111",background:"#2980b9"}}},{type:"React",level:85},{type:"Javascript",level:75},{type:"Spring",level:50},{type:"Docker",level:25},{type:"HTML",level:20},{type:"NoSQL",level:0}],colors:{bar:"#ffa",title:{text:{hue:45,saturation:{minimum:30,maximum:70},level:50},background:{hue:30,saturation:{minimum:30,maximum:70},level:{minimum:0,maximum:50}}}}})]})}function p(e={}){const{wrapper:t}={...(0,r.ah)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},876:function(e,t,n){n.d(t,{ah:function(){return c}});var l=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,v=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return n?l.createElement(v,a(a({ref:t},m),{},{components:n})):l.createElement(v,a({ref:t},m))}));m.displayName="MDXCreateElement"},392:function(e,t,n){n.d(t,{Z:function(){return a}});var l=n(2784);class r{static isString=e=>"[object String]"===Object.prototype.toString.call(e);static isNumber=e=>"[object Number]"===Object.prototype.toString.call(e);static getHSL=(e,t,n)=>{const l=function(e){return r.isNumber(e)?e:e.minimum+t*(e.maximum-e.minimum)/n};return`hsl(${l(e.hue)}, ${l(e.saturation)}%, ${l(e.level)}%)`};static getHeight=e=>r.isString(e)?e:`${e}px`}var i=n(2322);var a=e=>{let{skills:t,colors:n,barBackground:a="transparent",offset:o="25px",height:s=35,symbol:c="%",symbolColor:u="white",animationDuration:m=3e3,animationDelay:p=1e3,animationThreshold:d=.8}=e,v=null;const b=(0,l.useRef)(null),[h,y]=(0,l.useState)(!0),x=(()=>{const[e,t]=(0,l.useState)(!0);return(0,l.useEffect)((()=>{t(!1)}),[]),e})();v=((e,t,n)=>{const[r,i]=(0,l.useState)(null);return(0,l.useEffect)((()=>{if(!n&&e.current&&"function"==typeof IntersectionObserver){const n=new IntersectionObserver((e=>{i(e[0])}),t);return n.observe(e.current),()=>{i(null),n.disconnect()}}return()=>{}}),[e.current,t.threshold,t.root,t.rootMargin]),r})(b,{root:null,rootMargin:o,threshold:d},x),(0,l.useEffect)((()=>{if(v&&v.isIntersecting){const e=setTimeout((()=>y(!1)),p);return()=>clearTimeout(e)}}),[v]);const k=(0,l.useCallback)(((e,l)=>e.color&&e.color.bar&&r.isString(e.color.bar)?e.color.bar:n&&n.bar?r.isString(n.bar)?n.bar:r.getHSL(n.bar,l,t.length):""),[]),g=(0,l.useCallback)(((e,l,i)=>e.color&&e.color.title&&e.color.title[i]&&r.isString(e.color.title[i])?e.color.title[i]:n&&n.title&&n.title[i]?r.isString(n.title[i])?n.title[i]:r.getHSL(n.title[i],l,t.length):""),[]);return(0,i.jsx)("div",{"data-testid":"skillbar/root",ref:b,children:t.map(((e,t)=>(0,i.jsxs)("div",{className:"skillbar","data-testid":"skillbar/container",style:{height:`${r.getHeight(s)}`,lineHeight:`${r.getHeight(s)}`,background:a},children:[(0,i.jsx)("div",{className:"skillbar-title","data-testid":"skillbar/title",style:{color:`${g(e,t,"text")}`,background:`${g(e,t,"background")}`},children:(0,i.jsx)("span",{children:e.type})}),(0,i.jsx)("div",{"data-testid":"skillbar/bar",className:"skillbar-bar "+(h?"collapsed":""),style:{background:`${k(e,t)}`,width:`calc((100% - 110px) * (${e.level} * 0.01))`,transition:`width ${m}ms ease-in-out`}}),(0,i.jsxs)("div",{className:"skillbar-percent","data-testid":"skillbar/percent",style:{color:u},children:[e.level,c]})]},e.type)))})}}}]);