"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[357],{876:function(e,t,l){l.d(t,{Zo:function(){return s},kt:function(){return b}});var r=l(2784);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),v=p(l),b=n,f=v["".concat(c,".").concat(b)]||v[b]||u[b]||a;return l?r.createElement(f,o(o({ref:t},s),{},{components:l})):r.createElement(f,o({ref:t},s))}));function b(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,o=new Array(a);o[0]=v;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<a;p++)o[p]=l[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,l)}v.displayName="MDXCreateElement"},392:function(e,t,l){l.d(t,{Z:function(){return a}});var r=l(2784),n=function(){};n.isString=function(e){return"[object String]"===Object.prototype.toString.call(e)},n.isNumber=function(e){return"[object Number]"===Object.prototype.toString.call(e)},n.getHSL=function(e,t,l){var r=function(e){return n.isNumber(e)?e:e.minimum+t*(e.maximum-e.minimum)/l};return"hsl("+r(e.hue)+", "+r(e.saturation)+"%, "+r(e.level)+"%)"},n.getHeight=function(e){return n.isString(e)?e:e+"px"};var a=function(e){var t,l=e.skills,a=e.colors,o=e.offset,i=void 0===o?"25px":o,c=e.height,p=void 0===c?35:c,s=e.animationDuration,u=void 0===s?3e3:s,v=e.animationDelay,b=void 0===v?1e3:v,f=e.animationThreshold,d=void 0===f?.8:f,k=(0,r.useRef)(null),y=(0,r.useState)(!0),g=y[0],m=y[1],x=function(){var e=(0,r.useState)(!0),t=e[0],l=e[1];return(0,r.useEffect)((function(){l(!1)}),[]),t}();t=function(e,t,l){var n=(0,r.useState)(null),a=n[0],o=n[1];return(0,r.useEffect)((function(){if(!l&&e.current&&"function"==typeof IntersectionObserver){var r=new IntersectionObserver((function(e){o(e[0])}),t);return r.observe(e.current),function(){o(null),r.disconnect()}}return function(){}}),[e.current,t.threshold,t.root,t.rootMargin]),a}(k,{root:null,rootMargin:i,threshold:d},x),(0,r.useEffect)((function(){if(t&&t.isIntersecting){var e=setTimeout((function(){return m(!1)}),b);return function(){return clearTimeout(e)}}}),[t]);var S=(0,r.useCallback)((function(e,t){return e.color&&e.color.bar&&n.isString(e.color.bar)?e.color.bar:a&&a.bar?n.isString(a.bar)?a.bar:n.getHSL(a.bar,t,l.length):""}),[]),h=(0,r.useCallback)((function(e,t,r){return e.color&&e.color.title&&e.color.title[r]&&n.isString(e.color.title[r])?e.color.title[r]:a&&a.title&&a.title[r]?n.isString(a.title[r])?a.title[r]:n.getHSL(a.title[r],t,l.length):""}),[]);return r.createElement("div",{"data-testid":"skillbar/root",ref:k},l.map((function(e,t){return r.createElement("div",{key:e.type,className:"skillbar","data-testid":"skillbar/container",style:{height:""+n.getHeight(p),lineHeight:""+n.getHeight(p)}},r.createElement("div",{className:"skillbar-title","data-testid":"skillbar/title",style:{color:""+h(e,t,"text"),background:""+h(e,t,"background")}},r.createElement("span",null,e.type)),r.createElement("div",{"data-testid":"skillbar/bar",className:"skillbar-bar "+(g?"collapsed":""),style:{background:""+S(e,t),width:"calc((100% - 110px) * ("+e.level+" * 0.01))",transition:"width "+u+"ms ease-in-out"}}),r.createElement("div",{className:"skillbar-percent","data-testid":"skillbar/percent"},e.level,"%"))})))}},3090:function(e,t,l){l.r(t),l.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return v}});var r=l(7896),n=l(1461),a=(l(2784),l(876)),o=l(392),i=["components"],c={sidebar_position:1},p="Hex",s={unversionedId:"props/colors/hex",id:"props/colors/hex",title:"Hex",description:"Global",source:"@site/docs/props/colors/hex.mdx",sourceDirName:"props/colors",slug:"/props/colors/hex",permalink:"/react-skillbars/docs/props/colors/hex",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/props/colors/hex.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Animation",permalink:"/react-skillbars/docs/props/animation"},next:{title:"Hue",permalink:"/react-skillbars/docs/props/colors/hue"}},u={},v=[{value:"Global",id:"global",level:2},{value:"Element Specific",id:"element-specific",level:2},{value:"Bar Only",id:"bar-only",level:3},{value:"Bar &amp; Text Background",id:"bar--text-background",level:3},{value:"Bar &amp; Text &amp; Text Background",id:"bar--text--text-background",level:3},{value:"All Bars Individually",id:"all-bars-individually",level:3},{value:"All Individually",id:"all-individually",level:3}],b={toc:v};function f(e){var t=e.components,l=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},b,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hex"},"Hex"),(0,a.kt)("h2",{id:"global"},"Global"),(0,a.kt)("p",null,"You can provide a global ",(0,a.kt)("inlineCode",{parentName:"p"},"colors")," property to configure the coloring of all the bars."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import SkillBar from 'react-skillbars';\n\nconst skills = [\n  { type: 'Java', level: 100 },\n  { type: 'React', level: 85 },\n  { type: 'Javascript', level: 75 },\n  { type: 'Spring', level: 50 },\n  { type: 'Docker', level: 25 },\n  { type: 'HTML', level: 20 },\n  { type: 'NoSQL', level: 0 }\n];\nconst colors = {\n  bar: \"#3498db\",\n  title: {\n    text: \"#fff\",\n    background: \"#2980b9\"\n  }\n};\n<SkillBar skills={skills} colors={colors} />\n")),(0,a.kt)(o.Z,{skills:[{type:"Java",level:100},{type:"React",level:85},{type:"Javascript",level:75},{type:"Spring",level:50},{type:"Docker",level:25},{type:"HTML",level:20},{type:"NoSQL",level:0}],colors:{bar:"#3498db",title:{text:"#fff",background:"#2980b9"}},mdxType:"SkillBar"}),(0,a.kt)("h2",{id:"element-specific"},"Element Specific"),(0,a.kt)("h3",{id:"bar-only"},"Bar Only"),(0,a.kt)("p",null,"You can provide a specific ",(0,a.kt)("inlineCode",{parentName:"p"},"color")," property to configure the color of a specific bar."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import SkillBar from 'react-skillbars';\n\nconst skills = [\n  { type: 'Java', level: 100, color: { bar: \"#2980b9\"} },\n  { type: 'React', level: 85 },\n  { type: 'Javascript', level: 75 },\n  { type: 'Spring', level: 50 },\n  { type: 'Docker', level: 25 },\n  { type: 'HTML', level: 20 },\n  { type: 'NoSQL', level: 0 }\n];\n<SkillBar skills={skills} />\n")),(0,a.kt)(o.Z,{skills:[{type:"Java",level:100,color:{bar:"#2980b9"}},{type:"React",level:85},{type:"Javascript",level:75},{type:"Spring",level:50},{type:"Docker",level:25},{type:"HTML",level:20},{type:"NoSQL",level:0}],mdxType:"SkillBar"}),(0,a.kt)("h3",{id:"bar--text-background"},"Bar & Text Background"),(0,a.kt)("p",null,"You can provide a specific ",(0,a.kt)("inlineCode",{parentName:"p"},"color")," property to configure the color of a specific bar and text background."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import SkillBar from 'react-skillbars';\n\nconst skills = [\n  {\n    type: 'Java',\n    level: 100,\n    color: {\n      bar: \"#3498db\",\n      title: { background: '#2980b9' }\n    }\n  },\n  { type: 'React', level: 85 },\n  { type: 'Javascript', level: 75 },\n  { type: 'Spring', level: 50 },\n  { type: 'Docker', level: 25 },\n  { type: 'HTML', level: 20 },\n  { type: 'NoSQL', level: 0 }\n];\n<SkillBar skills={skills} />\n")),(0,a.kt)(o.Z,{skills:[{type:"Java",level:100,color:{bar:"#3498db",title:{background:"#2980b9"}}},{type:"React",level:85},{type:"Javascript",level:75},{type:"Spring",level:50},{type:"Docker",level:25},{type:"HTML",level:20},{type:"NoSQL",level:0}],mdxType:"SkillBar"}),(0,a.kt)("h3",{id:"bar--text--text-background"},"Bar & Text & Text Background"),(0,a.kt)("p",null,"You can provide a specific ",(0,a.kt)("inlineCode",{parentName:"p"},"color")," property to configure the color of a specific bar and text background."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import SkillBar from 'react-skillbars';\n\nconst skills = [\n  {\n    type: 'Java',\n    level: 100,\n    color: {\n      bar: \"#3498db\",\n      title: { background: '#2980b9', text: \"#fff\" }\n    }\n  },\n  { type: 'React', level: 85 },\n  { type: 'Javascript', level: 75 },\n  { type: 'Spring', level: 50 },\n  { type: 'Docker', level: 25 },\n  { type: 'HTML', level: 20 },\n  { type: 'NoSQL', level: 0 }\n];\n<SkillBar skills={skills} />\n")),(0,a.kt)(o.Z,{skills:[{type:"Java",level:100,color:{bar:"#3498db",title:{background:"#2980b9",text:"#fff"}}},{type:"React",level:85},{type:"Javascript",level:75},{type:"Spring",level:50},{type:"Docker",level:25},{type:"HTML",level:20},{type:"NoSQL",level:0}],mdxType:"SkillBar"}),(0,a.kt)("h3",{id:"all-bars-individually"},"All Bars Individually"),(0,a.kt)("p",null,"You can provide a specific ",(0,a.kt)("inlineCode",{parentName:"p"},"color")," for each individual element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import SkillBar from 'react-skillbars';\n\nconst skills = [\n  {\n    type: 'Java',\n    level: 100,\n    color: {\n      bar: \"#3498db\",\n      title: { background: '#2980b9', text: \"#fff\" }\n    }\n  },\n  { type: 'React', level: 85, color: { bar: 'brown' } },\n  { type: 'Javascript', level: 75, color: { bar: 'yellow' }  },\n  { type: 'Spring', level: 50, color: { bar: 'blue' }  },\n  { type: 'Docker', level: 25, color: { bar: 'orange' }  },\n  { type: 'HTML', level: 20, color: { bar: 'black' }  },\n  { type: 'NoSQL', level: 0, color: { bar: 'pink' }  }\n];\n<SkillBar skills={skills} />\n")),(0,a.kt)(o.Z,{skills:[{type:"Java",level:100,color:{bar:"#3498db",title:{background:"#2980b9",text:"#fff"}}},{type:"React",level:85,color:{bar:"brown"}},{type:"Javascript",level:75,color:{bar:"yellow"}},{type:"Spring",level:50,color:{bar:"blue"}},{type:"Docker",level:25,color:{bar:"orange"}},{type:"HTML",level:20,color:{bar:"black"}},{type:"NoSQL",level:0,color:{bar:"pink"}}],mdxType:"SkillBar"}),(0,a.kt)("h3",{id:"all-individually"},"All Individually"),(0,a.kt)("p",null,"You can provide a specific ",(0,a.kt)("inlineCode",{parentName:"p"},"color")," for each individual element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import SkillBar from 'react-skillbars';\n\nconst skills = [\n    {\n      type: 'Java',\n      level: 100,\n      color: {\n        bar: '#3498db',\n        title: { text: '#fff', background: '#2980b9' }\n      }\n    },\n    {\n      type: 'React',\n      level: 85,\n      color: {\n        bar: '#4288d0',\n        title: { text: '#fff', background: '#124e8c' }\n      }\n    },\n    {\n      type: 'Javascript',\n      level: 75, color: {\n        bar: '#2c3e50',\n        title: { text: '#fff', background: '#2c3e50' }\n      }\n    },\n    {\n      type: 'Spring',\n      level: 50, color: {\n        bar: '#5a68a5',\n        title: { text: '#fff', background: '#46465e' }\n      }\n    },\n    {\n      type: 'Docker',\n      level: 25,\n      color: {\n        bar: '#525252',\n        title: { text: '#fff', background: '#333333' }\n      }\n    },\n    {\n      type: 'HTML',\n      level: 20,\n      color: {\n        bar: 'black',\n        title: { text: '#111', background: '#fff' }\n      }\n    },\n    {\n      type: 'NoSQL',\n      level: 0,\n      color: {\n        bar: '#2ecc71',\n        title: { text: '#fff', background: '#27ae60' }\n      }\n    }\n];\n<SkillBar skills={skills} />\n")),(0,a.kt)(o.Z,{skills:[{type:"Java",level:100,color:{bar:"#3498db",title:{text:"#fff",background:"#2980b9"}}},{type:"React",level:85,color:{bar:"#4288d0",title:{text:"#fff",background:"#124e8c"}}},{type:"Javascript",level:75,color:{bar:"#2c3e50",title:{text:"#fff",background:"#2c3e50"}}},{type:"Spring",level:50,color:{bar:"#5a68a5",title:{text:"#fff",background:"#46465e"}}},{type:"Docker",level:25,color:{bar:"#525252",title:{text:"#fff",background:"#333333"}}},{type:"HTML",level:20,color:{bar:"black",title:{text:"#111",background:"#fff"}}},{type:"NoSQL",level:0,color:{bar:"#2ecc71",title:{text:"#fff",background:"#27ae60"}}}],mdxType:"SkillBar"}))}f.isMDXComponent=!0}}]);