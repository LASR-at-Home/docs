"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[344],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4658:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={},i="train_dataset_model",o={unversionedId:"packages/train_dataset_model",id:"packages/train_dataset_model",title:"train_dataset_model",description:"The traindatasetmodel package",source:"@site/docs/packages/train_dataset_model.md",sourceDirName:"packages",slug:"/packages/train_dataset_model",permalink:"/docs/packages/train_dataset_model",draft:!1,editUrl:"https://github.com/lasr-at-home/base/blob/main/common/document_lasr/web/docs/packages/train_dataset_model.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tiago_controllers",permalink:"/docs/packages/tiago_controllers"},next:{title:"unsafe_traversal",permalink:"/docs/packages/unsafe_traversal"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Technical Overview",id:"technical-overview",level:2},{value:"ROS Definitions",id:"ros-definitions",level:2},{value:"Launch Files",id:"launch-files",level:3},{value:"Messages",id:"messages",level:3},{value:"Services",id:"services",level:3},{value:"Actions",id:"actions",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"train_dataset_model"},"train_dataset_model"),(0,r.kt)("p",null,"The train_dataset_model package"),(0,r.kt)("p",null,"This package is maintained by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"mailto:nicole@todo.todo"},"nicole"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"This package depends on the following ROS packages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"catkin (buildtool)"),(0,r.kt)("li",{parentName:"ul"},"rospy (build)"),(0,r.kt)("li",{parentName:"ul"},"std_msgs (build)"),(0,r.kt)("li",{parentName:"ul"},"rospy (exec)"),(0,r.kt)("li",{parentName:"ul"},"std_msgs (exec)")),(0,r.kt)("p",null,"Ask the package maintainer to write or create a blank ",(0,r.kt)("inlineCode",{parentName:"p"},"doc/PREREQUISITES.md")," for their package!"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The train model state has the following file :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"train model => simply call a method to train"),(0,r.kt)("li",{parentName:"ol"},"extract embeddings"),(0,r.kt)("li",{parentName:"ol"},"train model state => i currently use this state to train")),(0,r.kt)("p",null,"on line 19 and line 20 you have to set some variables -> i will work to make it easier in the future"),(0,r.kt)("p",null,"when you have run the create_dataset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"rosrun create_dataset create_dataset_state.py\n")),(0,r.kt)("p",null,"and you have a folder with a random name for instance 'wfeigq'\nthen you set that folder name in ",(0,r.kt)("em",{parentName:"p"},"line 20")," in train",(0,r.kt)("em",{parentName:"p"},"model_state.py\non _line 19")," you set the name that you want to recognise the person with."),(0,r.kt)("p",null,"I currently take 10 photos and recognise 5 people:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"flatmate"),(0,r.kt)("li",{parentName:"ol"},"american"),(0,r.kt)("li",{parentName:"ol"},"elisabeth"),(0,r.kt)("li",{parentName:"ol"},"gerard"),(0,r.kt)("li",{parentName:"ol"},"matteo")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Ask the package maintainer to write a ",(0,r.kt)("inlineCode",{parentName:"p"},"doc/EXAMPLE.md")," for their package!"),(0,r.kt)("h2",{id:"technical-overview"},"Technical Overview"),(0,r.kt)("p",null,"Ask the package maintainer to write a ",(0,r.kt)("inlineCode",{parentName:"p"},"doc/TECHNICAL.md")," for their package!"),(0,r.kt)("h2",{id:"ros-definitions"},"ROS Definitions"),(0,r.kt)("h3",{id:"launch-files"},"Launch Files"),(0,r.kt)("p",null,"This package has no launch files."),(0,r.kt)("h3",{id:"messages"},"Messages"),(0,r.kt)("p",null,"This package has no messages."),(0,r.kt)("h3",{id:"services"},"Services"),(0,r.kt)("p",null,"This package has no services."),(0,r.kt)("h3",{id:"actions"},"Actions"),(0,r.kt)("p",null,"This package has no actions."))}d.isMDXComponent=!0}}]);