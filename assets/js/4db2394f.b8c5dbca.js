"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5574],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,d=u["".concat(o,".").concat(m)]||u[m]||k[m]||i;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1811:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={},l="object_interest_tracking",s={unversionedId:"packages/object_interest_tracking",id:"packages/object_interest_tracking",title:"object_interest_tracking",description:"The objectinteresttracking package",source:"@site/docs/packages/object_interest_tracking.md",sourceDirName:"packages",slug:"/packages/object_interest_tracking",permalink:"/docs/packages/object_interest_tracking",draft:!1,editUrl:"https://github.com/lasr-at-home/base/blob/main/common/document_lasr/web/docs/packages/object_interest_tracking.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"narrow_space_navigation",permalink:"/docs/packages/narrow_space_navigation"},next:{title:"pcl_segmentation",permalink:"/docs/packages/pcl_segmentation"}},o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Technical Overview",id:"technical-overview",level:2},{value:"ROS Definitions",id:"ros-definitions",level:2},{value:"Launch Files",id:"launch-files",level:3},{value:"Messages",id:"messages",level:3},{value:"Services",id:"services",level:3},{value:"<code>Tdr</code>",id:"tdr",level:4},{value:"Actions",id:"actions",level:3}],p={toc:c},u="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"object_interest_tracking"},"object_interest_tracking"),(0,r.kt)("p",null,"The object_interest_tracking package"),(0,r.kt)("p",null,"This package is maintained by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"mailto:yousef@todo.todo"},"yousef"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"This package depends on the following ROS packages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"catkin (buildtool)"),(0,r.kt)("li",{parentName:"ul"},"geometry_msgs (build)"),(0,r.kt)("li",{parentName:"ul"},"message_generation (build)"),(0,r.kt)("li",{parentName:"ul"},"rospy (build)"),(0,r.kt)("li",{parentName:"ul"},"sensor_msgs (build)"),(0,r.kt)("li",{parentName:"ul"},"std_msgs (build)"),(0,r.kt)("li",{parentName:"ul"},"message_runtime (build)"),(0,r.kt)("li",{parentName:"ul"},"geometry_msgs (exec)"),(0,r.kt)("li",{parentName:"ul"},"message_runtime (exec)"),(0,r.kt)("li",{parentName:"ul"},"rospy (exec)"),(0,r.kt)("li",{parentName:"ul"},"sensor_msgs (exec)"),(0,r.kt)("li",{parentName:"ul"},"std_msgs (exec)"),(0,r.kt)("li",{parentName:"ul"},"message_generation (exec)")),(0,r.kt)("p",null,"Ask the package maintainer to write or create a blank ",(0,r.kt)("inlineCode",{parentName:"p"},"doc/PREREQUISITES.md")," for their package!"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Ask the package maintainer to write a ",(0,r.kt)("inlineCode",{parentName:"p"},"doc/USAGE.md")," for their package!"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Ask the package maintainer to write a ",(0,r.kt)("inlineCode",{parentName:"p"},"doc/EXAMPLE.md")," for their package!"),(0,r.kt)("h2",{id:"technical-overview"},"Technical Overview"),(0,r.kt)("p",null,"Ask the package maintainer to write a ",(0,r.kt)("inlineCode",{parentName:"p"},"doc/TECHNICAL.md")," for their package!"),(0,r.kt)("h2",{id:"ros-definitions"},"ROS Definitions"),(0,r.kt)("h3",{id:"launch-files"},"Launch Files"),(0,r.kt)("p",null,"This package has no launch files."),(0,r.kt)("h3",{id:"messages"},"Messages"),(0,r.kt)("p",null,"This package has no messages."),(0,r.kt)("h3",{id:"services"},"Services"),(0,r.kt)("h4",{id:"tdr"},(0,r.kt)("inlineCode",{parentName:"h4"},"Tdr")),(0,r.kt)("p",null,"Request"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description")))),(0,r.kt)("p",null,"Response"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description")))),(0,r.kt)("h3",{id:"actions"},"Actions"),(0,r.kt)("p",null,"This package has no actions."))}k.isMDXComponent=!0}}]);