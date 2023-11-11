"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),k=r,u=m["".concat(o,".").concat(k)]||m[k]||d[k]||i;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},l="lasr_vision_msgs",s={unversionedId:"packages/lasr_vision_msgs",id:"packages/lasr_vision_msgs",title:"lasr_vision_msgs",description:"Messages required for vision processing",source:"@site/docs/packages/lasr_vision_msgs.md",sourceDirName:"packages",slug:"/packages/lasr_vision_msgs",permalink:"/docs/packages/lasr_vision_msgs",draft:!1,editUrl:"https://github.com/lasr-at-home/base/blob/main/common/document_lasr/web/docs/packages/lasr_vision_msgs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"lasr_speech_recognition_whisper",permalink:"/docs/packages/lasr_speech_recognition_whisper"},next:{title:"lasr_vision_yolov8",permalink:"/docs/packages/lasr_vision_yolov8"}},o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Technical Overview",id:"technical-overview",level:2},{value:"ROS Definitions",id:"ros-definitions",level:2},{value:"Launch Files",id:"launch-files",level:3},{value:"Messages",id:"messages",level:3},{value:"<code>Detection</code>",id:"detection",level:4},{value:"Services",id:"services",level:3},{value:"<code>YoloDetection</code>",id:"yolodetection",level:4},{value:"Actions",id:"actions",level:3}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lasr_vision_msgs"},"lasr_vision_msgs"),(0,r.kt)("p",null,"Messages required for vision processing"),(0,r.kt)("p",null,"This package is maintained by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"mailto:me@insrt.uk"},"Paul Makles"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"This package depends on the following ROS packages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"catkin (buildtool)"),(0,r.kt)("li",{parentName:"ul"},"message_generation (build)"),(0,r.kt)("li",{parentName:"ul"},"message_runtime (exec)"),(0,r.kt)("li",{parentName:"ul"},"sensor_msgs (build)"),(0,r.kt)("li",{parentName:"ul"},"sensor_msgs (exec)")),(0,r.kt)("p",null,"Ask the package maintainer to write or create a blank ",(0,r.kt)("inlineCode",{parentName:"p"},"doc/PREREQUISITES.md")," for their package!"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Ask the package maintainer to write a ",(0,r.kt)("inlineCode",{parentName:"p"},"doc/USAGE.md")," for their package!"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Ask the package maintainer to write a ",(0,r.kt)("inlineCode",{parentName:"p"},"doc/EXAMPLE.md")," for their package!"),(0,r.kt)("h2",{id:"technical-overview"},"Technical Overview"),(0,r.kt)("p",null,"Ask the package maintainer to write a ",(0,r.kt)("inlineCode",{parentName:"p"},"doc/TECHNICAL.md")," for their package!"),(0,r.kt)("h2",{id:"ros-definitions"},"ROS Definitions"),(0,r.kt)("h3",{id:"launch-files"},"Launch Files"),(0,r.kt)("p",null,"This package has no launch files."),(0,r.kt)("h3",{id:"messages"},"Messages"),(0,r.kt)("h4",{id:"detection"},(0,r.kt)("inlineCode",{parentName:"h4"},"Detection")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Detected Object Class")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"confidence"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float32"),(0,r.kt)("td",{parentName:"tr",align:null},"How certain we are this is what we think it is")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"xywh"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int32[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Bounding box mask defined in pixel-space")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"xyseg"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int32[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Segmentation mask defined in pixel-space",(0,r.kt)("br",null),(0,r.kt)("br",null),"This will be empty if a segmentation model was not used")))),(0,r.kt)("h3",{id:"services"},"Services"),(0,r.kt)("h4",{id:"yolodetection"},(0,r.kt)("inlineCode",{parentName:"h4"},"YoloDetection")),(0,r.kt)("p",null,"Request"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"image_raw"),(0,r.kt)("td",{parentName:"tr",align:"center"},"sensor_msgs/Image"),(0,r.kt)("td",{parentName:"tr",align:null},"Image to run inference on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"dataset"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"YOLO model to use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"confidence"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float32"),(0,r.kt)("td",{parentName:"tr",align:null},"How certain the detection should be to include")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"nms"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float32"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-maximum Supression",(0,r.kt)("br",null),(0,r.kt)("br",null),"Guiding value to remove overlapping bounding boxes")))),(0,r.kt)("p",null,"Response"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"detected_objects"),(0,r.kt)("td",{parentName:"tr",align:"center"},"lasr_vision_msgs/Detection[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Detection result")))),(0,r.kt)("h3",{id:"actions"},"Actions"),(0,r.kt)("p",null,"This package has no actions."))}d.isMDXComponent=!0}}]);