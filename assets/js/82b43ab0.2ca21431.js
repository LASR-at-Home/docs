"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[846],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return a?r.createElement(k,i(i({ref:t},p),{},{components:a})):r.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6603:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const l={},i="tiago_controllers",o={unversionedId:"packages/tiago_controllers",id:"packages/tiago_controllers",title:"tiago_controllers",description:"The tiago_controllers package",source:"@site/docs/packages/tiago_controllers.md",sourceDirName:"packages",slug:"/packages/tiago_controllers",permalink:"/docs/packages/tiago_controllers",draft:!1,editUrl:"https://github.com/lasr-at-home/base/blob/main/common/document_lasr/web/docs/packages/tiago_controllers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"read_pcl_info",permalink:"/docs/packages/read_pcl_info"},next:{title:"unsafe_traversal",permalink:"/docs/packages/unsafe_traversal"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Technical Overview",id:"technical-overview",level:2},{value:"ROS Definitions",id:"ros-definitions",level:2},{value:"Launch Files",id:"launch-files",level:3},{value:"Messages",id:"messages",level:3},{value:"Services",id:"services",level:3},{value:"<code>ArmTorsoPos</code>",id:"armtorsopos",level:4},{value:"Actions",id:"actions",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tiago_controllers"},"tiago_controllers"),(0,n.kt)("p",null,"The tiago_controllers package"),(0,n.kt)("p",null,"This package is maintained by:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"mailto:juancm@todo.todo"},"juancm"))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"This package depends on the following ROS packages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"catkin (buildtool)"),(0,n.kt)("li",{parentName:"ul"},"rospy (build)"),(0,n.kt)("li",{parentName:"ul"},"message_generation (build)"),(0,n.kt)("li",{parentName:"ul"},"rospy (exec)"),(0,n.kt)("li",{parentName:"ul"},"message_runtime (exec)")),(0,n.kt)("p",null,"Ask the package maintainer to write or create a blank ",(0,n.kt)("inlineCode",{parentName:"p"},"doc/PREREQUISITES.md")," for their package!"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Ask the package maintainer to write a ",(0,n.kt)("inlineCode",{parentName:"p"},"doc/USAGE.md")," for their package!"),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Ask the package maintainer to write a ",(0,n.kt)("inlineCode",{parentName:"p"},"doc/EXAMPLE.md")," for their package!"),(0,n.kt)("h2",{id:"technical-overview"},"Technical Overview"),(0,n.kt)("p",null,"Ask the package maintainer to write a ",(0,n.kt)("inlineCode",{parentName:"p"},"doc/TECHNICAL.md")," for their package!"),(0,n.kt)("h2",{id:"ros-definitions"},"ROS Definitions"),(0,n.kt)("h3",{id:"launch-files"},"Launch Files"),(0,n.kt)("p",null,"This package has no launch files."),(0,n.kt)("h3",{id:"messages"},"Messages"),(0,n.kt)("p",null,"This package has no messages."),(0,n.kt)("h3",{id:"services"},"Services"),(0,n.kt)("h4",{id:"armtorsopos"},(0,n.kt)("inlineCode",{parentName:"h4"},"ArmTorsoPos")),(0,n.kt)("p",null,"Request"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"torso_goals"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float32"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"arm_goals"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float32[]"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"plan"),(0,n.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"Response"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"result"),(0,n.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"actions"},"Actions"),(0,n.kt)("p",null,"This package has no actions."))}m.isMDXComponent=!0}}]);