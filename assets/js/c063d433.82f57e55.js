"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[114],{876:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(2784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,v=d["".concat(c,".").concat(f)]||d[f]||p[f]||l;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},392:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(2784),i=function(){};i.isString=function(e){return"[object String]"===Object.prototype.toString.call(e)},i.isNumber=function(e){return"[object Number]"===Object.prototype.toString.call(e)},i.getHSL=function(e,t,r){var n=function(e){return i.isNumber(e)?e:e.minimum+t*(e.maximum-e.minimum)/r};return"hsl("+n(e.hue)+", "+n(e.saturation)+"%, "+n(e.level)+"%)"},i.getHeight=function(e){return i.isString(e)?e:e+"px"};var l=function(e){var t,r=e.skills,l=e.colors,a=e.offset,o=void 0===a?"25px":a,c=e.height,s=void 0===c?35:c,u=e.animationDuration,p=void 0===u?3e3:u,d=e.animationDelay,f=void 0===d?1e3:d,v=e.animationThreshold,m=void 0===v?.8:v,g=(0,n.useRef)(null),y=(0,n.useState)(!0),b=y[0],h=y[1],k=function(){var e=(0,n.useState)(!0),t=e[0],r=e[1];return(0,n.useEffect)((function(){r(!1)}),[]),t}();t=function(e,t,r){var i=(0,n.useState)(null),l=i[0],a=i[1];return(0,n.useEffect)((function(){if(!r&&e.current&&"function"==typeof IntersectionObserver){var n=new IntersectionObserver((function(e){a(e[0])}),t);return n.observe(e.current),function(){a(null),n.disconnect()}}return function(){}}),[e.current,t.threshold,t.root,t.rootMargin]),l}(g,{root:null,rootMargin:o,threshold:m},k),(0,n.useEffect)((function(){if(t&&t.isIntersecting){var e=setTimeout((function(){return h(!1)}),f);return function(){return clearTimeout(e)}}}),[t]);var S=(0,n.useCallback)((function(e,t){return e.color&&e.color.bar&&i.isString(e.color.bar)?e.color.bar:l&&l.bar?i.isString(l.bar)?l.bar:i.getHSL(l.bar,t,r.length):""}),[]),O=(0,n.useCallback)((function(e,t,n){return e.color&&e.color.title&&e.color.title[n]&&i.isString(e.color.title[n])?e.color.title[n]:l&&l.title&&l.title[n]?i.isString(l.title[n])?l.title[n]:i.getHSL(l.title[n],t,r.length):""}),[]);return n.createElement("div",{"data-testid":"skillbar/root",ref:g},r.map((function(e,t){return n.createElement("div",{key:e.type,className:"skillbar","data-testid":"skillbar/container",style:{height:""+i.getHeight(s),lineHeight:""+i.getHeight(s)}},n.createElement("div",{className:"skillbar-title","data-testid":"skillbar/title",style:{color:""+O(e,t,"text"),background:""+O(e,t,"background")}},n.createElement("span",null,e.type)),n.createElement("div",{"data-testid":"skillbar/bar",className:"skillbar-bar "+(b?"collapsed":""),style:{background:""+S(e,t),width:"calc((100% - 110px) * ("+e.level+" * 0.01))",transition:"width "+p+"ms ease-in-out"}}),n.createElement("div",{className:"skillbar-percent","data-testid":"skillbar/percent"},e.level,"%"))})))}},5055:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var n=r(7896),i=r(1461),l=(r(2784),r(876)),a=r(392),o=["components"],c={sidebar_position:2},s="Height",u={unversionedId:"props/height",id:"props/height",title:"Height",description:"Default Unit",source:"@site/docs/props/height.mdx",sourceDirName:"props",slug:"/props/height",permalink:"/react-skillbars/docs/props/height",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/props/height.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Standard",permalink:"/react-skillbars/docs/props/standard"},next:{title:"Animation",permalink:"/react-skillbars/docs/props/animation"}},p={},d=[{value:"Default Unit",id:"default-unit",level:2},{value:"Custom Unit",id:"custom-unit",level:2}],f={toc:d};function v(e){var t=e.components,r=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"height"},"Height"),(0,l.kt)("h2",{id:"default-unit"},"Default Unit"),(0,l.kt)("p",null,"You can provide a ",(0,l.kt)("inlineCode",{parentName:"p"},"height")," prop with a ",(0,l.kt)("inlineCode",{parentName:"p"},"number")," and it will render it based on ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),"px."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import SkillBar from 'react-skillbars';\n\nconst skills = [\n  { type: 'Java', level: 100 },\n  { type: 'React', level: 85 },\n  { type: 'Javascript', level: 75 },\n  { type: 'Spring', level: 50 },\n  { type: 'Docker', level: 25 },\n  { type: 'HTML', level: 20 },\n  { type: 'NoSQL', level: 0 }\n];\n<SkillBar skills={skills} height={15}/>\n")),(0,l.kt)(a.Z,{skills:[{type:"Java",level:100},{type:"React",level:85},{type:"Javascript",level:75},{type:"Spring",level:50},{type:"Docker",level:25},{type:"HTML",level:20},{type:"NoSQL",level:0}],height:15,mdxType:"SkillBar"}),(0,l.kt)("h2",{id:"custom-unit"},"Custom Unit"),(0,l.kt)("p",null,"You can also provide a ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," with the value and unit to use that instead."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import SkillBar from 'react-skillbars';\n\nconst skills = [\n  { type: 'Java', level: 100 },\n  { type: 'React', level: 85 },\n  { type: 'Javascript', level: 75 },\n  { type: 'Spring', level: 50 },\n  { type: 'Docker', level: 25 },\n  { type: 'HTML', level: 20 },\n  { type: 'NoSQL', level: 0 }\n];\n<SkillBar skills={skills} height={'5vh'}/>\n")),(0,l.kt)(a.Z,{skills:[{type:"Java",level:100},{type:"React",level:85},{type:"Javascript",level:75},{type:"Spring",level:50},{type:"Docker",level:25},{type:"HTML",level:20},{type:"NoSQL",level:0}],height:"5vh",mdxType:"SkillBar"}))}v.isMDXComponent=!0}}]);