"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2324],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},s="lasr_speech_recognition_msgs",l={unversionedId:"packages/lasr_speech_recognition_msgs",id:"packages/lasr_speech_recognition_msgs",title:"lasr_speech_recognition_msgs",description:"Common messages used for speech recognition",source:"@site/docs/packages/lasr_speech_recognition_msgs.md",sourceDirName:"packages",slug:"/packages/lasr_speech_recognition_msgs",permalink:"/docs/packages/lasr_speech_recognition_msgs",draft:!1,editUrl:"https://github.com/lasr-at-home/base/blob/main/common/document_lasr/web/docs/packages/lasr_speech_recognition_msgs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"lasr_speech",permalink:"/docs/packages/lasr_speech"},next:{title:"lasr_speech_recognition_whisper",permalink:"/docs/packages/lasr_speech_recognition_whisper"}},o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Technical Overview",id:"technical-overview",level:2},{value:"ROS Definitions",id:"ros-definitions",level:2},{value:"Launch Files",id:"launch-files",level:3},{value:"Messages",id:"messages",level:3},{value:"<code>Transcription</code>",id:"transcription",level:4},{value:"Services",id:"services",level:3},{value:"Actions",id:"actions",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lasr_speech_recognition_msgs"},"lasr_speech_recognition_msgs"),(0,a.kt)("p",null,"Common messages used for speech recognition"),(0,a.kt)("p",null,"This package is maintained by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"mailto:me@insrt.uk"},"Paul Makles"))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"This package depends on the following ROS packages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"catkin (buildtool)"),(0,a.kt)("li",{parentName:"ul"},"message_generation (build)"),(0,a.kt)("li",{parentName:"ul"},"message_runtime (exec)")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Ask the package maintainer to write a ",(0,a.kt)("inlineCode",{parentName:"p"},"doc/USAGE.md")," for their package!"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Ask the package maintainer to write a ",(0,a.kt)("inlineCode",{parentName:"p"},"doc/EXAMPLE.md")," for their package!"),(0,a.kt)("h2",{id:"technical-overview"},"Technical Overview"),(0,a.kt)("p",null,"Ask the package maintainer to write a ",(0,a.kt)("inlineCode",{parentName:"p"},"doc/TECHNICAL.md")," for their package!"),(0,a.kt)("h2",{id:"ros-definitions"},"ROS Definitions"),(0,a.kt)("h3",{id:"launch-files"},"Launch Files"),(0,a.kt)("p",null,"This package has no launch files."),(0,a.kt)("h3",{id:"messages"},"Messages"),(0,a.kt)("h4",{id:"transcription"},(0,a.kt)("inlineCode",{parentName:"h4"},"Transcription")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"phrase"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"finished"),(0,a.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"services"},"Services"),(0,a.kt)("p",null,"This package has no services."),(0,a.kt)("h3",{id:"actions"},"Actions"),(0,a.kt)("p",null,"This package has no actions."))}m.isMDXComponent=!0}}]);