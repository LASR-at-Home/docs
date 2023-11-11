"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[673],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(a),k=n,u=d["".concat(o,".").concat(k)]||d[k]||m[k]||l;return a?r.createElement(u,i(i({ref:t},s),{},{components:a})):r.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9279:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const l={},i="read_pcl_info",p={unversionedId:"packages/read_pcl_info",id:"packages/read_pcl_info",title:"read_pcl_info",description:"The readpclinfo package",source:"@site/docs/packages/read_pcl_info.md",sourceDirName:"packages",slug:"/packages/read_pcl_info",permalink:"/docs/packages/read_pcl_info",draft:!1,editUrl:"https://github.com/lasr-at-home/base/blob/main/common/document_lasr/web/docs/packages/read_pcl_info.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pcl_segmentation",permalink:"/docs/packages/pcl_segmentation"},next:{title:"recognise_people",permalink:"/docs/packages/recognise_people"}},o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Technical Overview",id:"technical-overview",level:2},{value:"ROS Definitions",id:"ros-definitions",level:2},{value:"Launch Files",id:"launch-files",level:3},{value:"<code>pcl_helpers</code>",id:"pcl_helpers",level:4},{value:"Messages",id:"messages",level:3},{value:"Services",id:"services",level:3},{value:"Actions",id:"actions",level:3}],s={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"read_pcl_info"},"read_pcl_info"),(0,n.kt)("p",null,"The read_pcl_info package"),(0,n.kt)("p",null,"This package is maintained by:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"mailto:nicole@todo.todo"},"nicole"))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"This package depends on the following ROS packages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"catkin (buildtool)"),(0,n.kt)("li",{parentName:"ul"},"geometry_msgs (build)"),(0,n.kt)("li",{parentName:"ul"},"message_generation (build)"),(0,n.kt)("li",{parentName:"ul"},"roscpp (build)"),(0,n.kt)("li",{parentName:"ul"},"rospy (build)"),(0,n.kt)("li",{parentName:"ul"},"std_msgs (build)"),(0,n.kt)("li",{parentName:"ul"},"geometry_msgs (exec)"),(0,n.kt)("li",{parentName:"ul"},"roscpp (exec)"),(0,n.kt)("li",{parentName:"ul"},"rospy (exec)"),(0,n.kt)("li",{parentName:"ul"},"std_msgs (exec)")),(0,n.kt)("p",null,"Ask the package maintainer to write or create a blank ",(0,n.kt)("inlineCode",{parentName:"p"},"doc/PREREQUISITES.md")," for their package!"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Ask the package maintainer to write a ",(0,n.kt)("inlineCode",{parentName:"p"},"doc/USAGE.md")," for their package!"),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Ask the package maintainer to write a ",(0,n.kt)("inlineCode",{parentName:"p"},"doc/EXAMPLE.md")," for their package!"),(0,n.kt)("h2",{id:"technical-overview"},"Technical Overview"),(0,n.kt)("p",null,"Ask the package maintainer to write a ",(0,n.kt)("inlineCode",{parentName:"p"},"doc/TECHNICAL.md")," for their package!"),(0,n.kt)("h2",{id:"ros-definitions"},"ROS Definitions"),(0,n.kt)("h3",{id:"launch-files"},"Launch Files"),(0,n.kt)("h4",{id:"pcl_helpers"},(0,n.kt)("inlineCode",{parentName:"h4"},"pcl_helpers")),(0,n.kt)("p",null,"No description provided."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Argument"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"is_sim"),(0,n.kt)("td",{parentName:"tr",align:"center"},"false"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"plot_show"),(0,n.kt)("td",{parentName:"tr",align:"center"},"false"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"plot_save"),(0,n.kt)("td",{parentName:"tr",align:"center"},"true"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"debug_with_images"),(0,n.kt)("td",{parentName:"tr",align:"center"},"true"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"publish_markers"),(0,n.kt)("td",{parentName:"tr",align:"center"},"true"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"debug"),(0,n.kt)("td",{parentName:"tr",align:"center"},"3"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"rasa"),(0,n.kt)("td",{parentName:"tr",align:"center"},"true"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"whisper_matcher"),(0,n.kt)("td",{parentName:"tr",align:"center"},"by-index"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"whisper_device_param"),(0,n.kt)("td",{parentName:"tr",align:"center"},"13"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"rasa_model"),(0,n.kt)("td",{parentName:"tr",align:"center"},"$(find lasr_rasa)/assistants/lift/models"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"messages"},"Messages"),(0,n.kt)("p",null,"This package has no messages."),(0,n.kt)("h3",{id:"services"},"Services"),(0,n.kt)("p",null,"This package has no services."),(0,n.kt)("h3",{id:"actions"},"Actions"),(0,n.kt)("p",null,"This package has no actions."))}m.isMDXComponent=!0}}]);