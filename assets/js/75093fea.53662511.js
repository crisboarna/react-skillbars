"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[262],{876:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},392:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(2784),o=function(){};o.isString=function(e){return"[object String]"===Object.prototype.toString.call(e)},o.isNumber=function(e){return"[object Number]"===Object.prototype.toString.call(e)},o.getHSL=function(e,t,r){var n=function(e){return o.isNumber(e)?e:e.minimum+t*(e.maximum-e.minimum)/r};return"hsl("+n(e.hue)+", "+n(e.saturation)+"%, "+n(e.level)+"%)"},o.getHeight=function(e){return o.isString(e)?e:e+"px"};var i=function(e){var t,r=e.skills,i=e.colors,a=e.offset,l=void 0===a?"25px":a,c=e.height,s=void 0===c?35:c,u=e.animationDuration,p=void 0===u?3e3:u,d=e.animationDelay,f=void 0===d?1e3:d,m=e.animationThreshold,b=void 0===m?.8:m,v=(0,n.useRef)(null),y=(0,n.useState)(!0),g=y[0],k=y[1],h=function(){var e=(0,n.useState)(!0),t=e[0],r=e[1];return(0,n.useEffect)((function(){r(!1)}),[]),t}();t=function(e,t,r){var o=(0,n.useState)(null),i=o[0],a=o[1];return(0,n.useEffect)((function(){if(!r&&e.current&&"function"==typeof IntersectionObserver){var n=new IntersectionObserver((function(e){a(e[0])}),t);return n.observe(e.current),function(){a(null),n.disconnect()}}return function(){}}),[e.current,t.threshold,t.root,t.rootMargin]),i}(v,{root:null,rootMargin:l,threshold:b},h),(0,n.useEffect)((function(){if(t&&t.isIntersecting){var e=setTimeout((function(){return k(!1)}),f);return function(){return clearTimeout(e)}}}),[t]);var O=(0,n.useCallback)((function(e,t){return e.color&&e.color.bar&&o.isString(e.color.bar)?e.color.bar:i&&i.bar?o.isString(i.bar)?i.bar:o.getHSL(i.bar,t,r.length):""}),[]),S=(0,n.useCallback)((function(e,t,n){return e.color&&e.color.title&&e.color.title[n]&&o.isString(e.color.title[n])?e.color.title[n]:i&&i.title&&i.title[n]?o.isString(i.title[n])?i.title[n]:o.getHSL(i.title[n],t,r.length):""}),[]);return n.createElement("div",{"data-testid":"skillbar/root",ref:v},r.map((function(e,t){return n.createElement("div",{key:e.type,className:"skillbar","data-testid":"skillbar/container",style:{height:""+o.getHeight(s),lineHeight:""+o.getHeight(s)}},n.createElement("div",{className:"skillbar-title","data-testid":"skillbar/title",style:{color:""+S(e,t,"text"),background:""+S(e,t,"background")}},n.createElement("span",null,e.type)),n.createElement("div",{"data-testid":"skillbar/bar",className:"skillbar-bar "+(g?"collapsed":""),style:{background:""+O(e,t),width:"calc((100% - 110px) * ("+e.level+" * 0.01))",transition:"width "+p+"ms ease-in-out"}}),n.createElement("div",{className:"skillbar-percent","data-testid":"skillbar/percent"},e.level,"%"))})))}},8195:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var n=r(7896),o=r(1461),i=(r(2784),r(876)),a=r(392),l=["components"],c={sidebar_position:1},s="Standard",u={unversionedId:"props/standard",id:"props/standard",title:"Standard",description:"The minimum you need to provide is the skills prop to render a bar.",source:"@site/docs/props/standard.mdx",sourceDirName:"props",slug:"/props/standard",permalink:"/react-skillbars/docs/props/standard",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/props/standard.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/react-skillbars/docs/intro"},next:{title:"Height",permalink:"/react-skillbars/docs/props/height"}},p={},d=[],f={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"standard"},"Standard"),(0,i.kt)("p",null,"The minimum you need to provide is the ",(0,i.kt)("inlineCode",{parentName:"p"},"skills")," prop to render a bar."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import SkillBar from 'react-skillbars';\n\nconst skills = [\n  { type: 'Java', level: 100 },\n  { type: 'React', level: 85 },\n  { type: 'Javascript', level: 75 },\n  { type: 'Spring', level: 50 },\n  { type: 'Docker', level: 25 },\n  { type: 'HTML', level: 20 },\n  { type: 'NoSQL', level: 0 }\n];\n<SkillBar skills={skills}/>\n")),(0,i.kt)(a.Z,{skills:[{type:"Java",level:100},{type:"React",level:85},{type:"Javascript",level:75},{type:"Spring",level:50},{type:"Docker",level:25},{type:"HTML",level:20},{type:"NoSQL",level:0}],mdxType:"SkillBar"}))}m.isMDXComponent=!0}}]);