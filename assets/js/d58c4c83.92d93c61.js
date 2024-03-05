"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="colour_estimation",l={unversionedId:"packages/colour_estimation",id:"packages/colour_estimation",title:"colour_estimation",description:"Python utilities for estimating the name of given colours.",source:"@site/docs/packages/colour_estimation.md",sourceDirName:"packages",slug:"/packages/colour_estimation",permalink:"/docs/packages/colour_estimation",draft:!1,editUrl:"https://github.com/lasr-at-home/base/blob/main/common/document_lasr/web/docs/packages/colour_estimation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"coffee_shop_ui",permalink:"/docs/packages/coffee_shop_ui"},next:{title:"cv2_img",permalink:"/docs/packages/cv2_img"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Technical Overview",id:"technical-overview",level:2},{value:"ROS Definitions",id:"ros-definitions",level:2},{value:"Launch Files",id:"launch-files",level:3},{value:"Messages",id:"messages",level:3},{value:"Services",id:"services",level:3},{value:"Actions",id:"actions",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"colour_estimation"},"colour_estimation"),(0,a.kt)("p",null,"Python utilities for estimating the name of given colours."),(0,a.kt)("p",null,"This package is maintained by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"mailto:me@insrt.uk"},"Paul Makles"))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"This package depends on the following ROS packages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"catkin (buildtool)")),(0,a.kt)("p",null,"Ensure numpy is available wherever this package is imported."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Find the closest colours to a given colour:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nfrom colour_estimation import closest_colours, RGB_COLOURS, RGB_HAIR_COLOURS\n\n# find the closest colour from RGB_COLOURS dict\nclosest_colours(np.array([255, 0, 0]), RGB_COLOURS)\n\n# find the closest colour from RGB_HAIR_COLOURS dict\nclosest_colours(np.array([200, 150, 0]), RGB_HAIR_COLOURS)\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Find the name of the median colour in an image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nfrom colour_estimation import closest_colours, RGB_COLOURS\n\n# let `img` be a cv2 image / numpy array\n\nclosest_colours(np.median(img, axis=0), RGB_COLOURS)\n")),(0,a.kt)("h2",{id:"technical-overview"},"Technical Overview"),(0,a.kt)("p",null,"Ask the package maintainer to write a ",(0,a.kt)("inlineCode",{parentName:"p"},"doc/TECHNICAL.md")," for their package!"),(0,a.kt)("h2",{id:"ros-definitions"},"ROS Definitions"),(0,a.kt)("h3",{id:"launch-files"},"Launch Files"),(0,a.kt)("p",null,"This package has no launch files."),(0,a.kt)("h3",{id:"messages"},"Messages"),(0,a.kt)("p",null,"This package has no messages."),(0,a.kt)("h3",{id:"services"},"Services"),(0,a.kt)("p",null,"This package has no services."),(0,a.kt)("h3",{id:"actions"},"Actions"),(0,a.kt)("p",null,"This package has no actions."))}m.isMDXComponent=!0}}]);