"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4648],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),g=r,v=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return a?n.createElement(v,l(l({ref:t},p),{},{components:a})):n.createElement(v,l({ref:t},p))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3137:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={},l="cv2_img",o={unversionedId:"packages/cv2_img",id:"packages/cv2_img",title:"cv2_img",description:"Helper methods for converting between sensor_msgs and cv2/Pillow format.",source:"@site/docs/packages/cv2_img.md",sourceDirName:"packages",slug:"/packages/cv2_img",permalink:"/docs/packages/cv2_img",draft:!1,editUrl:"https://github.com/lasr-at-home/base/blob/main/common/document_lasr/web/docs/packages/cv2_img.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"create_dataset",permalink:"/docs/packages/create_dataset"},next:{title:"cv_bridge3",permalink:"/docs/packages/cv_bridge3"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Technical Overview",id:"technical-overview",level:2},{value:"ROS Definitions",id:"ros-definitions",level:2},{value:"Launch Files",id:"launch-files",level:3},{value:"Messages",id:"messages",level:3},{value:"Services",id:"services",level:3},{value:"Actions",id:"actions",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cv2_img"},"cv2_img"),(0,r.kt)("p",null,"Helper methods for converting between sensor_msgs and cv2/Pillow format."),(0,r.kt)("p",null,"This package is maintained by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"mailto:me@insrt.uk"},"Paul Makles"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"This package depends on the following ROS packages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"catkin (buildtool)"),(0,r.kt)("li",{parentName:"ul"},"sensor_msgs")),(0,r.kt)("p",null,"Ensure that the following is readily available wherever you import this package:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"numpy"),(0,r.kt)("li",{parentName:"ul"},"Pillow")),(0,r.kt)("p",null,"Despite the name of the package, cv2 is not actually a dependency."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Convert image messages to cv2 or Pillow format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import cv2_img\n\n# as Pillow Image\nimg = cv2_img.msg_to_pillow_img(request.image_raw)\n\n# as numpy array (for cv2)\nimg = cv2_img.msg_to_cv2_img(request.image_raw)\n")),(0,r.kt)("p",null,"Convert a cv2 image (numpy array) to an image message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import cv2_img\n\nmsg = cv2_img.cv2_img_to_msg(img)\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Ask the package maintainer to write a ",(0,r.kt)("inlineCode",{parentName:"p"},"doc/EXAMPLE.md")," for their package!"),(0,r.kt)("h2",{id:"technical-overview"},"Technical Overview"),(0,r.kt)("p",null,"Ask the package maintainer to write a ",(0,r.kt)("inlineCode",{parentName:"p"},"doc/TECHNICAL.md")," for their package!"),(0,r.kt)("h2",{id:"ros-definitions"},"ROS Definitions"),(0,r.kt)("h3",{id:"launch-files"},"Launch Files"),(0,r.kt)("p",null,"This package has no launch files."),(0,r.kt)("h3",{id:"messages"},"Messages"),(0,r.kt)("p",null,"This package has no messages."),(0,r.kt)("h3",{id:"services"},"Services"),(0,r.kt)("p",null,"This package has no services."),(0,r.kt)("h3",{id:"actions"},"Actions"),(0,r.kt)("p",null,"This package has no actions."))}u.isMDXComponent=!0}}]);