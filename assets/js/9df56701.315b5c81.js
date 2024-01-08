"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="coffee_shop_ui",l={unversionedId:"packages/coffee_shop_ui",id:"packages/coffee_shop_ui",title:"coffee_shop_ui",description:"Provides a tablet user interface for ordering and confirming actions within the coffee shop task.",source:"@site/docs/packages/coffee_shop_ui.md",sourceDirName:"packages",slug:"/packages/coffee_shop_ui",permalink:"/docs/packages/coffee_shop_ui",draft:!1,editUrl:"https://github.com/lasr-at-home/base/blob/main/common/document_lasr/web/docs/packages/coffee_shop_ui.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"choosing_wait_position",permalink:"/docs/packages/choosing_wait_position"},next:{title:"colour_estimation",permalink:"/docs/packages/colour_estimation"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Technical Overview",id:"technical-overview",level:2},{value:"ROS Definitions",id:"ros-definitions",level:2},{value:"Launch Files",id:"launch-files",level:3},{value:"Messages",id:"messages",level:3},{value:"<code>Confirm</code>",id:"confirm",level:4},{value:"<code>Order</code>",id:"order",level:4},{value:"Services",id:"services",level:3},{value:"Actions",id:"actions",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"coffee_shop_ui"},"coffee_shop_ui"),(0,a.kt)("p",null,"Provides a tablet user interface for ordering and confirming actions within the coffee shop task."),(0,a.kt)("p",null,"This package is maintained by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"mailto:me@insrt.uk"},"Paul Makles"))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"This package depends on the following ROS packages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"catkin (buildtool)"),(0,a.kt)("li",{parentName:"ul"},"message_generation (build)"),(0,a.kt)("li",{parentName:"ul"},"message_runtime (exec)")),(0,a.kt)("p",null,"This package currently requires a rosbridge WebSocket server to run on port 9090 on the same machine running this node."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Start a rosbridge server using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"roslaunch rosbridge_server rosbridge_websocket.launch\n")),(0,a.kt)("p",null,"Build and run the coffee shop UI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rosrun coffee_shop_ui build # don't need to run again except to update\nrosrun coffee_shop_ui start\n\n# .. or run a dev server:\nrosrun coffee_shop_ui dev\n")),(0,a.kt)("p",null,"You can now access the web server on $ROS_IP:3000."),(0,a.kt)("p",null,"You can now publish ",(0,a.kt)("inlineCode",{parentName:"p"},"std_msgs/String")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"/tablet/screen")," with the string being one of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"home"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"order")),(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("inlineCode",{parentName:"p"},"coffee_shop_ui/Order")," message will be published to ",(0,a.kt)("inlineCode",{parentName:"p"},"/tablet/order")," when the user confirms their order."),(0,a.kt)("p",{parentName:"li"},"The message contains a list of items in any order, items names are repeated for how many were ordered.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"done")),(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("inlineCode",{parentName:"p"},"std_msgs/Empty")," message will be published to ",(0,a.kt)("inlineCode",{parentName:"p"},"/tablet/done")," when the user presses the button."))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Ask the package maintainer to write a ",(0,a.kt)("inlineCode",{parentName:"p"},"doc/EXAMPLE.md")," for their package!"),(0,a.kt)("h2",{id:"technical-overview"},"Technical Overview"),(0,a.kt)("p",null,"Ask the package maintainer to write a ",(0,a.kt)("inlineCode",{parentName:"p"},"doc/TECHNICAL.md")," for their package!"),(0,a.kt)("h2",{id:"ros-definitions"},"ROS Definitions"),(0,a.kt)("h3",{id:"launch-files"},"Launch Files"),(0,a.kt)("p",null,"This package has no launch files."),(0,a.kt)("h3",{id:"messages"},"Messages"),(0,a.kt)("h4",{id:"confirm"},(0,a.kt)("inlineCode",{parentName:"h4"},"Confirm")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"value"),(0,a.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"confirmation")))),(0,a.kt)("h4",{id:"order"},(0,a.kt)("inlineCode",{parentName:"h4"},"Order")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"products"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string[]"),(0,a.kt)("td",{parentName:"tr",align:null},"list of products being ordered")))),(0,a.kt)("h3",{id:"services"},"Services"),(0,a.kt)("p",null,"This package has no services."),(0,a.kt)("h3",{id:"actions"},"Actions"),(0,a.kt)("p",null,"This package has no actions."))}d.isMDXComponent=!0}}]);