"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{876:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7724:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(7896),a=n(1461),l=(n(2784),n(876)),i=["components"],o={sidebar_position:1},s="Introduction",p={unversionedId:"intro",id:"intro",title:"Introduction",description:"Let's discover react-skillbars in less than 5 minutes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/react-skillbars/docs/intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Standard",permalink:"/react-skillbars/docs/props/standard"}},u={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Importing",id:"importing",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Description",id:"description",level:2},{value:"Properties",id:"properties",level:2},{value:"skills",id:"skills",level:3},{value:"colors",id:"colors",level:3},{value:"Bar Background",id:"bar-background",level:3},{value:"animationDelay",id:"animationdelay",level:3},{value:"offset",id:"offset",level:3},{value:"height",id:"height",level:3},{value:"animationThreshold",id:"animationthreshold",level:3},{value:"Symbol/Unit Measure",id:"symbolunit-measure",level:3},{value:"Symbol &amp; Level Text Color",id:"symbol--level-text-color",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Let's discover ",(0,l.kt)("strong",{parentName:"p"},"react-skillbars in less than 5 minutes"),"."),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("p",null,"Get started by ",(0,l.kt)("strong",{parentName:"p"},"adding the lib as a dependency"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-skillbars\n")),(0,l.kt)("h2",{id:"importing"},"Importing"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import SkillBar from 'react-skillbars';\n")),(0,l.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"When installing Node.js, you are recommended to check all checkboxes related to dependencies."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/lang/en/docs/install/"},"Yarn")," (Optional)"))),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Provides a percentage completion bar for each entry with highly customizable look and behaviour."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"skills"},"skills"),(0,l.kt)("p",null,"Requirement: required"),(0,l.kt)("p",null,"Array of skills to be displayed. Each array entry is an object containing at minimum ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"level")," where ",(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"type")," - name of skill ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"level")," - % of skill from 0-100"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const skills = [\n  { type: 'Java', level: 85 },\n  { type: 'Javascript', level: 75 },\n];\n")),(0,l.kt)("h3",{id:"colors"},"colors"),(0,l.kt)("p",null,"Requirement: optional"),(0,l.kt)("p",null,"Default: none"),(0,l.kt)("p",null,"Object of global coloring information for bar, title text & background. It accepts global colors or color codes such as"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"colors = {\n  bar: 'red',\n  title: {\n    text: '#abc123',\n    background: '#fff',\n  },\n};\n")),(0,l.kt)("p",null,"Optionally you can also use hue."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"colors = {\n  bar: '#fffaaa',\n  title: {\n    text: {\n      hue: {\n        minimum: 30,\n        maximum: 150,\n      },\n      saturation: 50,\n      level: {\n        minimum: 30,\n        maximum: 90,\n      },\n    },\n    background: {\n      hue: 20,\n      saturation: 50,\n      level: 30,\n    },\n  },\n};\n")),(0,l.kt)("h3",{id:"bar-background"},"Bar Background"),(0,l.kt)("p",null,"Requirement: optional"),(0,l.kt)("p",null,"Default: transparent"),(0,l.kt)("p",null,"String to determine bar's background color."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"barBackground = {'transparent'};\n")),(0,l.kt)("h3",{id:"animationdelay"},"animationDelay"),(0,l.kt)("p",null,"Requirement: optional"),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"3000"),"ms"),(0,l.kt)("p",null,"Delay from mounting of component to when animation is triggered"),(0,l.kt)("h3",{id:"offset"},"offset"),(0,l.kt)("p",null,"Requirement: optional"),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"25px")),(0,l.kt)("p",null,"Artificial tweaking of viewport for animation triggering. When component is completely contained by the artificial viewport animation is triggered. When element has a greater size than viewport size then animation triggers when element top is lower than middle of screen + offset and element bottom is higher than middle minus offset."),(0,l.kt)("h3",{id:"height"},"height"),(0,l.kt)("p",null,"Requirement: optional"),(0,l.kt)("p",null,"Default: none"),(0,l.kt)("p",null,"Specifies the height of each bar in the component. Accepts plain numbers which default to pixel units"),(0,l.kt)("h3",{id:"animationthreshold"},"animationThreshold"),(0,l.kt)("p",null,"Requirement: optional"),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"0.8")),(0,l.kt)("p",null,"Specifies the threshold which indicates at what percentage of the target's visibility the observer's callback"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"<Skillbar skills={SKILLS} height={10} />\n")),(0,l.kt)("p",null,"strings with unit attached at end as"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"<Skillbar skills={SKILLS} height={'10vh'} />\n")),(0,l.kt)("h3",{id:"symbolunit-measure"},"Symbol/Unit Measure"),(0,l.kt)("p",null,"Requirement: optional"),(0,l.kt)("p",null,"Default: %"),(0,l.kt)("p",null,"Specifies unit of measure. Accepts strings as input."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"symbol = {'HP'}\n")),(0,l.kt)("h3",{id:"symbol--level-text-color"},"Symbol & Level Text Color"),(0,l.kt)("p",null,"Requirement: optional"),(0,l.kt)("p",null,"Default: white"),(0,l.kt)("p",null,"Specifies color of symbol and bar level. Accepts strings of colors or hex codes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"symbolColor = {'white'}\n")))}m.isMDXComponent=!0}}]);