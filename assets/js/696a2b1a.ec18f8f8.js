"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[555],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,m=d["".concat(o,".").concat(u)]||d[u]||k[u]||i;return a?n.createElement(m,l(l({ref:t},s),{},{components:a})):n.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[d]="string"==typeof e?e:r,l[1]=c;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4669:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={},l="face_detection",c={unversionedId:"packages/face_detection",id:"packages/face_detection",title:"face_detection",description:"The face_detection package",source:"@site/docs/packages/face_detection.md",sourceDirName:"packages",slug:"/packages/face_detection",permalink:"/docs/packages/face_detection",draft:!1,editUrl:"https://github.com/lasr-at-home/base/blob/main/common/document_lasr/web/docs/packages/face_detection.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"documentation",permalink:"/docs/packages/documentation"},next:{title:"find_person_and_ask_open_door",permalink:"/docs/packages/find_person_and_ask_open_door"}},o={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Technical Overview",id:"technical-overview",level:2},{value:"ROS Definitions",id:"ros-definitions",level:2},{value:"Launch Files",id:"launch-files",level:3},{value:"Messages",id:"messages",level:3},{value:"Services",id:"services",level:3},{value:"<code>FaceDetection</code>",id:"facedetection",level:4},{value:"<code>FaceDetectionPCL</code>",id:"facedetectionpcl",level:4},{value:"Actions",id:"actions",level:3}],s={toc:p},d="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"face_detection"},"face_detection"),(0,r.kt)("p",null,"The face_detection package"),(0,r.kt)("p",null,"This package is maintained by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"mailto:nicole@todo.todo"},"nicole"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"This package depends on the following ROS packages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"catkin (buildtool)"),(0,r.kt)("li",{parentName:"ul"},"rospy (build)"),(0,r.kt)("li",{parentName:"ul"},"std_msgs (build)"),(0,r.kt)("li",{parentName:"ul"},"rospy (exec)"),(0,r.kt)("li",{parentName:"ul"},"std_msgs (exec)"),(0,r.kt)("li",{parentName:"ul"},"lasr_vision_msgs")),(0,r.kt)("p",null,"Ask the package maintainer to write or create a blank ",(0,r.kt)("inlineCode",{parentName:"p"},"doc/PREREQUISITES.md")," for their package!"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Ask the package maintainer to write a ",(0,r.kt)("inlineCode",{parentName:"p"},"doc/USAGE.md")," for their package!"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Ask the package maintainer to write a ",(0,r.kt)("inlineCode",{parentName:"p"},"doc/EXAMPLE.md")," for their package!"),(0,r.kt)("h2",{id:"technical-overview"},"Technical Overview"),(0,r.kt)("p",null,"Ask the package maintainer to write a ",(0,r.kt)("inlineCode",{parentName:"p"},"doc/TECHNICAL.md")," for their package!"),(0,r.kt)("h2",{id:"ros-definitions"},"ROS Definitions"),(0,r.kt)("h3",{id:"launch-files"},"Launch Files"),(0,r.kt)("p",null,"This package has no launch files."),(0,r.kt)("h3",{id:"messages"},"Messages"),(0,r.kt)("p",null,"This package has no messages."),(0,r.kt)("h3",{id:"services"},"Services"),(0,r.kt)("h4",{id:"facedetection"},(0,r.kt)("inlineCode",{parentName:"h4"},"FaceDetection")),(0,r.kt)("p",null,"Request"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"image_raw"),(0,r.kt)("td",{parentName:"tr",align:"center"},"sensor_msgs/Image"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Response"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"detected_objects"),(0,r.kt)("td",{parentName:"tr",align:"center"},"lasr_vision_msgs/Detection[]"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"facedetectionpcl"},(0,r.kt)("inlineCode",{parentName:"h4"},"FaceDetectionPCL")),(0,r.kt)("p",null,"Request"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"cloud"),(0,r.kt)("td",{parentName:"tr",align:"center"},"sensor_msgs/PointCloud2"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Response"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"detections"),(0,r.kt)("td",{parentName:"tr",align:"center"},"face_detection/DetectionPCL[]"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"actions"},"Actions"),(0,r.kt)("p",null,"This package has no actions."))}k.isMDXComponent=!0}}]);