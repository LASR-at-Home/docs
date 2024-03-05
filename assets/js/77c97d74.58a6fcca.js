"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[648],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),g=r,v=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return n?a.createElement(v,l(l({ref:t},p),{},{components:n})):a.createElement(v,l({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},l="cv2_img",o={unversionedId:"packages/cv2_img",id:"packages/cv2_img",title:"cv2_img",description:"Helper methods for converting between sensor_msgs and cv2/Pillow format.",source:"@site/docs/packages/cv2_img.md",sourceDirName:"packages",slug:"/packages/cv2_img",permalink:"/docs/packages/cv2_img",draft:!1,editUrl:"https://github.com/lasr-at-home/base/blob/main/common/document_lasr/web/docs/packages/cv2_img.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"colour_estimation",permalink:"/docs/packages/colour_estimation"},next:{title:"documentation",permalink:"/docs/packages/documentation"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Technical Overview",id:"technical-overview",level:2},{value:"ROS Definitions",id:"ros-definitions",level:2},{value:"Launch Files",id:"launch-files",level:3},{value:"Messages",id:"messages",level:3},{value:"Services",id:"services",level:3},{value:"Actions",id:"actions",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cv2_img"},"cv2_img"),(0,r.kt)("p",null,"Helper methods for converting between sensor_msgs and cv2/Pillow format."),(0,r.kt)("p",null,"This package is maintained by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"mailto:me@insrt.uk"},"Paul Makles"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"This package depends on the following ROS packages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"catkin (buildtool)"),(0,r.kt)("li",{parentName:"ul"},"sensor_msgs")),(0,r.kt)("p",null,"Ensure that the following is readily available wherever you import this package:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"numpy"),(0,r.kt)("li",{parentName:"ul"},"Pillow")),(0,r.kt)("p",null,"Despite the name of the package, cv2 is not actually a dependency."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Convert image messages to cv2 or Pillow format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import cv2_img\n\n# as Pillow Image\nimg = cv2_img.msg_to_pillow_img(request.image_raw)\n\n# as numpy array (for cv2)\nimg = cv2_img.msg_to_cv2_img(request.image_raw)\n")),(0,r.kt)("p",null,"Convert a cv2 image (numpy array) to an image message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import cv2_img\n\nmsg = cv2_img.cv2_img_to_msg(img)\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Ask the package maintainer to write a ",(0,r.kt)("inlineCode",{parentName:"p"},"doc/EXAMPLE.md")," for their package!"),(0,r.kt)("h2",{id:"technical-overview"},"Technical Overview"),(0,r.kt)("p",null,"Ask the package maintainer to write a ",(0,r.kt)("inlineCode",{parentName:"p"},"doc/TECHNICAL.md")," for their package!"),(0,r.kt)("h2",{id:"ros-definitions"},"ROS Definitions"),(0,r.kt)("h3",{id:"launch-files"},"Launch Files"),(0,r.kt)("p",null,"This package has no launch files."),(0,r.kt)("h3",{id:"messages"},"Messages"),(0,r.kt)("p",null,"This package has no messages."),(0,r.kt)("h3",{id:"services"},"Services"),(0,r.kt)("p",null,"This package has no services."),(0,r.kt)("h3",{id:"actions"},"Actions"),(0,r.kt)("p",null,"This package has no actions."))}u.isMDXComponent=!0}}]);