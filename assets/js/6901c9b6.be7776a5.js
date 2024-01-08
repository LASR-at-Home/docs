"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8068],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>g});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),m=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=m(a),c=n,g=d["".concat(o,".").concat(c)]||d[c]||k[c]||l;return a?r.createElement(g,i(i({ref:e},s),{},{components:a})):r.createElement(g,i({ref:e},s))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[d]="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1217:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const l={},i="tf_module",p={unversionedId:"packages/tf_module",id:"packages/tf_module",title:"tf_module",description:"The tf_module package",source:"@site/docs/packages/tf_module.md",sourceDirName:"packages",slug:"/packages/tf_module",permalink:"/docs/packages/tf_module",draft:!1,editUrl:"https://github.com/lasr-at-home/base/blob/main/common/document_lasr/web/docs/packages/tf_module.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"recognise_people",permalink:"/docs/packages/recognise_people"},next:{title:"tiago_controllers",permalink:"/docs/packages/tiago_controllers"}},o={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Technical Overview",id:"technical-overview",level:2},{value:"ROS Definitions",id:"ros-definitions",level:2},{value:"Launch Files",id:"launch-files",level:3},{value:"<code>tf_transforms</code>",id:"tf_transforms",level:4},{value:"Messages",id:"messages",level:3},{value:"Services",id:"services",level:3},{value:"<code>ApplyTransform</code>",id:"applytransform",level:4},{value:"<code>TfTransform</code>",id:"tftransform",level:4},{value:"<code>LatestTransform</code>",id:"latesttransform",level:4},{value:"<code>BaseTransform</code>",id:"basetransform",level:4},{value:"Actions",id:"actions",level:3}],s={toc:m},d="wrapper";function k(t){let{components:e,...a}=t;return(0,n.kt)(d,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tf_module"},"tf_module"),(0,n.kt)("p",null,"The tf_module package"),(0,n.kt)("p",null,"This package is maintained by:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"mailto:nicole@todo.todo"},"nicole"))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"This package depends on the following ROS packages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"geometry_msgs (build)"),(0,n.kt)("li",{parentName:"ul"},"message_generation (build)"),(0,n.kt)("li",{parentName:"ul"},"roscpp (build)"),(0,n.kt)("li",{parentName:"ul"},"rospy (build)"),(0,n.kt)("li",{parentName:"ul"},"sensor_msgs (build)"),(0,n.kt)("li",{parentName:"ul"},"std_msgs (build)"),(0,n.kt)("li",{parentName:"ul"},"geometry_msgs (exec)"),(0,n.kt)("li",{parentName:"ul"},"roscpp (exec)"),(0,n.kt)("li",{parentName:"ul"},"rospy (exec)"),(0,n.kt)("li",{parentName:"ul"},"sensor_msgs (exec)"),(0,n.kt)("li",{parentName:"ul"},"std_msgs (exec)"),(0,n.kt)("li",{parentName:"ul"},"catkin (buildtool)")),(0,n.kt)("p",null,"Ask the package maintainer to write or create a blank ",(0,n.kt)("inlineCode",{parentName:"p"},"doc/PREREQUISITES.md")," for their package!"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Ask the package maintainer to write a ",(0,n.kt)("inlineCode",{parentName:"p"},"doc/USAGE.md")," for their package!"),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Ask the package maintainer to write a ",(0,n.kt)("inlineCode",{parentName:"p"},"doc/EXAMPLE.md")," for their package!"),(0,n.kt)("h2",{id:"technical-overview"},"Technical Overview"),(0,n.kt)("p",null,"Ask the package maintainer to write a ",(0,n.kt)("inlineCode",{parentName:"p"},"doc/TECHNICAL.md")," for their package!"),(0,n.kt)("h2",{id:"ros-definitions"},"ROS Definitions"),(0,n.kt)("h3",{id:"launch-files"},"Launch Files"),(0,n.kt)("h4",{id:"tf_transforms"},(0,n.kt)("inlineCode",{parentName:"h4"},"tf_transforms")),(0,n.kt)("p",null,"No description provided."),(0,n.kt)("h3",{id:"messages"},"Messages"),(0,n.kt)("p",null,"This package has no messages."),(0,n.kt)("h3",{id:"services"},"Services"),(0,n.kt)("h4",{id:"applytransform"},(0,n.kt)("inlineCode",{parentName:"h4"},"ApplyTransform")),(0,n.kt)("p",null,"Request"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"points"),(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry_msgs/Point[]"),(0,n.kt)("td",{parentName:"tr",align:null},"point we want to transform")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"transform"),(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry_msgs/TransformStamped"),(0,n.kt)("td",{parentName:"tr",align:null},"the transform we want to use")))),(0,n.kt)("p",null,"Response"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"new_points"),(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry_msgs/Point[]"),(0,n.kt)("td",{parentName:"tr",align:null},"the transformed point")))),(0,n.kt)("h4",{id:"tftransform"},(0,n.kt)("inlineCode",{parentName:"h4"},"TfTransform")),(0,n.kt)("p",null,"Request"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"pose_array"),(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry_msgs/PoseArray"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"pointcloud"),(0,n.kt)("td",{parentName:"tr",align:"center"},"sensor_msgs/PointCloud2"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"point"),(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry_msgs/PointStamped"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"target_frame"),(0,n.kt)("td",{parentName:"tr",align:"center"},"std_msgs/String"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"source_frame"),(0,n.kt)("td",{parentName:"tr",align:"center"},"std_msgs/String"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"Response"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"target_pose_array"),(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry_msgs/PoseArray"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"target_pointcloud"),(0,n.kt)("td",{parentName:"tr",align:"center"},"sensor_msgs/PointCloud2"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"target_point"),(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry_msgs/PointStamped"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"translation_and_rotation"),(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry_msgs/Pose"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"latesttransform"},(0,n.kt)("inlineCode",{parentName:"h4"},"LatestTransform")),(0,n.kt)("p",null,"Request"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"from_frame"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"source frame")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"target_frame"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"target frame")))),(0,n.kt)("p",null,"Response"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"transform"),(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry_msgs/TransformStamped"),(0,n.kt)("td",{parentName:"tr",align:null},"transform")))),(0,n.kt)("h4",{id:"basetransform"},(0,n.kt)("inlineCode",{parentName:"h4"},"BaseTransform")),(0,n.kt)("p",null,"Request"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"points"),(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry_msgs/Point[]"),(0,n.kt)("td",{parentName:"tr",align:null},"point we want to transform")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"frame"),(0,n.kt)("td",{parentName:"tr",align:"center"},"std_msgs/String"),(0,n.kt)("td",{parentName:"tr",align:null},"the frame of the point")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"target_frame"),(0,n.kt)("td",{parentName:"tr",align:"center"},"std_msgs/String"),(0,n.kt)("td",{parentName:"tr",align:null},"the frame we want to transform the point to")))),(0,n.kt)("p",null,"Response"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"new_points"),(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry_msgs/PointStamped[]"),(0,n.kt)("td",{parentName:"tr",align:null},"the transformed point")))),(0,n.kt)("h3",{id:"actions"},"Actions"),(0,n.kt)("p",null,"This package has no actions."))}k.isMDXComponent=!0}}]);