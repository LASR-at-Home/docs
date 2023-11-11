"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(o,".").concat(m)]||u[m]||h[m]||i;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},s="lasr_speech_recognition_whisper",l={unversionedId:"packages/lasr_speech_recognition_whisper",id:"packages/lasr_speech_recognition_whisper",title:"lasr_speech_recognition_whisper",description:"Speech recognition implemented using OpenAI Whisper",source:"@site/docs/packages/lasr_speech_recognition_whisper.md",sourceDirName:"packages",slug:"/packages/lasr_speech_recognition_whisper",permalink:"/docs/packages/lasr_speech_recognition_whisper",draft:!1,editUrl:"https://github.com/lasr-at-home/base/blob/main/common/document_lasr/web/docs/packages/lasr_speech_recognition_whisper.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"lasr_speech_recognition_msgs",permalink:"/docs/packages/lasr_speech_recognition_msgs"},next:{title:"lasr_vision_msgs",permalink:"/docs/packages/lasr_vision_msgs"}},o={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Technical Overview",id:"technical-overview",level:2},{value:"ROS Definitions",id:"ros-definitions",level:2},{value:"Launch Files",id:"launch-files",level:3},{value:"Messages",id:"messages",level:3},{value:"Services",id:"services",level:3},{value:"Actions",id:"actions",level:3}],c={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lasr_speech_recognition_whisper"},"lasr_speech_recognition_whisper"),(0,a.kt)("p",null,"Speech recognition implemented using OpenAI Whisper"),(0,a.kt)("p",null,"This package is maintained by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"mailto:me@insrt.uk"},"Paul Makles"))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"This package depends on the following ROS packages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"catkin (buildtool)"),(0,a.kt)("li",{parentName:"ul"},"catkin_virtualenv (build)"),(0,a.kt)("li",{parentName:"ul"},"lasr_speech_recognition_msgs")),(0,a.kt)("p",null,"This packages requires Python 3.10 to be present."),(0,a.kt)("p",null,"This package has 48 Python dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pypi.org/project/SpeechRecognition"},"SpeechRecognition"),"==3.10.0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pypi.org/project/openai-whisper"},"openai-whisper"),"==20230314"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pypi.org/project/PyAudio"},"PyAudio"),"==0.2.13"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pypi.org/project/PyYaml"},"PyYaml"),"==6.0.1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pypi.org/project/rospkg"},"rospkg"),"==1.5.0"),(0,a.kt)("li",{parentName:"ul"},".. and 46 sub dependencies")),(0,a.kt)("p",null,"This package requires that ",(0,a.kt)("a",{parentName:"p",href:"https://ffmpeg.org/"},"ffmpeg")," is available during runtime."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Warning"),": this package is not complete, this is subject to change.")),(0,a.kt)("p",null,"List available microphones:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rosrun lasr_speech_recognition_whisper list_microphones.py\n")),(0,a.kt)("p",null,"Start the example script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rosrun lasr_speech_recognition_whisper transcribe_microphone by-index <microphone_index>\nrosrun lasr_speech_recognition_whisper transcribe_microphone by-name <substring_of_name>\n")),(0,a.kt)("p",null,"Then start listening to people:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'rosservice call /whisper/start_listening "{}"\n')),(0,a.kt)("p",null,"You can now listen on ",(0,a.kt)("inlineCode",{parentName:"p"},"/transcription")," for a live transcription."),(0,a.kt)("p",null,"Stop listening whenever:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'rosservice call /whisper/stop_listening "{}"\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Ask the package maintainer to write a ",(0,a.kt)("inlineCode",{parentName:"p"},"doc/EXAMPLE.md")," for their package!"),(0,a.kt)("h2",{id:"technical-overview"},"Technical Overview"),(0,a.kt)("p",null,"This package does speech recognition in three parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Adjusting for background noise"),(0,a.kt)("p",{parentName:"li"},"We wait for a set period of time monitoring the audio stream to determine what we should ignore when collecting voice data.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Collecting appropriate voice data for phrases"),(0,a.kt)("p",{parentName:"li"},"We use the ",(0,a.kt)("inlineCode",{parentName:"p"},"SpeechRecognition")," package to monitor the input audio stream and determine when a person is actually speaking with enough energy that we would consider them to be speaking to the robot.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Running inference on phrases"),(0,a.kt)("p",{parentName:"li"},"We continuously combine segments of the spoken phrase to form a sample until a certain timeout or threshold after which the phrase ends. This sample is sent to a local OpenAI Whisper model to transcribe."))),(0,a.kt)("p",null,"The package can input from the following sources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On-board or external microphone on device"),(0,a.kt)("li",{parentName:"ul"},"Audio data from ROS topic (WORK IN PROGRESS)")),(0,a.kt)("p",null,"The package can output transcriptions to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Standard output"),(0,a.kt)("li",{parentName:"ul"},"A ROS topic")),(0,a.kt)("h2",{id:"ros-definitions"},"ROS Definitions"),(0,a.kt)("h3",{id:"launch-files"},"Launch Files"),(0,a.kt)("p",null,"This package has no launch files."),(0,a.kt)("h3",{id:"messages"},"Messages"),(0,a.kt)("p",null,"This package has no messages."),(0,a.kt)("h3",{id:"services"},"Services"),(0,a.kt)("p",null,"This package has no services."),(0,a.kt)("h3",{id:"actions"},"Actions"),(0,a.kt)("p",null,"This package has no actions."))}h.isMDXComponent=!0}}]);