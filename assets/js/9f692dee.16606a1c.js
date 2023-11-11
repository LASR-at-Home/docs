"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={},o="Container Maintenance",l={unversionedId:"guides/container",id:"guides/container",title:"Container Maintenance",description:"This document describes the entire structure of the RoboCup container definition as well as how to build it.",source:"@site/docs/guides/container.md",sourceDirName:"guides",slug:"/guides/container",permalink:"/docs/guides/container",draft:!1,editUrl:"https://github.com/lasr-at-home/base/blob/main/common/document_lasr/web/docs/guides/container.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LASR Documentation",permalink:"/docs/"},next:{title:"Configuring Python dependencies for packages",permalink:"/docs/guides/virtualenv"}},p={},d=[{value:"Building",id:"building",level:2},{value:"Debugging build process",id:"debugging-build-process",level:3},{value:"Checking when container was built",id:"checking-when-container-was-built",level:3},{value:"Testing new dependencies",id:"testing-new-dependencies",level:3},{value:"Container",id:"container",level:2},{value:"Install packages from repositories",id:"install-packages-from-repositories",level:3},{value:"Install Python from source",id:"install-python-from-source",level:3},{value:"Configure global Python installation",id:"configure-global-python-installation",level:3},{value:"Create overlay workspace for additional ROS packages",id:"create-overlay-workspace-for-additional-ros-packages",level:3},{value:"Perform clean up",id:"perform-clean-up",level:3}],s={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"container-maintenance"},"Container Maintenance"),(0,r.kt)("p",null,"This document describes the entire structure of the RoboCup container definition as well as how to build it."),(0,r.kt)("h2",{id:"building"},"Building"),(0,r.kt)("p",null,"To build the container, ensure you have a copy of the TIAGo Melodic container and then proceed with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/lasr-at-home/containers.git ~/containers\ncd ~/containers\n\n# copy TIAGo container to tiago_noetic_opensource.sif to current directory\n\nsudo apptainer build robocup_container.sif robocup_container.def\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This likely doesn't work with the proprietary PAL container for the time being.")),(0,r.kt)("h3",{id:"debugging-build-process"},"Debugging build process"),(0,r.kt)("p",null,"You can save a lot of time debugging build errors by redirecting all output to a file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm build.log 2>/dev/null; sudo apptainer build robocup_container.sif robocup_container.def 2>&1 | tee build.log\n")),(0,r.kt)("h3",{id:"checking-when-container-was-built"},"Checking when container was built"),(0,r.kt)("p",null,"You can quickly check what container you're using by running the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat /.build_info\nRoboCup Container (Version: 0001, Bootstrapped from: oss, Build date: 09-11-2023, Build took: 0 days 0 hours 8 minutes 36 seconds)\n")),(0,r.kt)("h3",{id:"testing-new-dependencies"},"Testing new dependencies"),(0,r.kt)("p",null,"If you'd like to test new dependencies without rebuilding the entire container, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"test_container_template")," definition file."),(0,r.kt)("p",null,"After building the RoboCup container, you can then run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apptainer build test_container_template.sif test_container_template.def\n\n# .. with log:\nrm build.log 2>/dev/null; sudo apptainer build test_container_template.sif test_container_template.def 2>&1 | tee build.log\n")),(0,r.kt)("h2",{id:"container"},"Container"),(0,r.kt)("p",null,"This section goes over how the container is built."),(0,r.kt)("p",null,"We use the TIAGo Noetic container as a base which uses Ubuntu 21.04 as a base itself."),(0,r.kt)("h3",{id:"install-packages-from-repositories"},"Install packages from repositories"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure the container is up to date by updating and upgrading from PAL apt repositories.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install additional apt packages"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Package"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ros-melodic-audio-common"),(0,r.kt)("td",{parentName:"tr",align:null},"provides various ROS packages for capturing and playing back audio")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"python3-numpy"),(0,r.kt)("td",{parentName:"tr",align:null},"numpy package for Python 3.6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"python3-opencv"),(0,r.kt)("td",{parentName:"tr",align:null},"cv2 package for Python 3.6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"libasound-dev",(0,r.kt)("br",null),"libportaudio2",(0,r.kt)("br",null),"libportaudiocpp0",(0,r.kt)("br",null),"portaudio19-dev"),(0,r.kt)("td",{parentName:"tr",align:null},"libraries required to build PyAudio wheel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ffmpeg"),(0,r.kt)("td",{parentName:"tr",align:null},"record, convert, and stream audio / video")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"python3-testresources",(0,r.kt)("br",null),"python3-empy"),(0,r.kt)("td",{parentName:"tr",align:null},"dependencies for catkin_virtualenv")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ca-certificates",(0,r.kt)("br",null),"curl",(0,r.kt)("br",null),"gnupg"),(0,r.kt)("td",{parentName:"tr",align:null},"generic requirements required by most things")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"bc"),(0,r.kt)("td",{parentName:"tr",align:null},"arithmetic for the terminal, used in container build script")))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Software packages on PAL repositories are quite old, there are situations where it is advisable to install software through alternative means.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Node.js 20 (LTS as of 09-11-2023)"),(0,r.kt)("p",{parentName:"li"},"All available distributions are ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nodesource/distributions"},"listed here"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a temporary ",(0,r.kt)("inlineCode",{parentName:"p"},"/deps")," folder which will be used to build additional dependencies in."))),(0,r.kt)("h3",{id:"install-python-from-source"},"Install Python from source"),(0,r.kt)("p",null,"We install Python 3.9 and 3.10 to take advantage of modern Python libraries which no longer support Python 3.8, we can selectively choose to use it for some of our packages through the use of ",(0,r.kt)("a",{parentName:"p",href:"/guides/virtualenv"},"catkin virtualenv"),". This build step is derived from the ",(0,r.kt)("a",{parentName:"p",href:"https://devguide.python.org/getting-started/setup-building/"},"Python documentation"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install dependencies required for build."),(0,r.kt)("p",{parentName:"li"},"We choose to build all optional Python modules for maximum compatibility.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download Python sources and extract.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build Python sources and install globally."),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This will override the global Python installation, this is cleaned up in a later build step."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install additional global packages."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Package"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"pyyaml"),(0,r.kt)("td",{parentName:"tr",align:"center"},"6.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"provides yaml package (required by rospy)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"rospkg"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1.5.0"),(0,r.kt)("td",{parentName:"tr",align:null},"environment agnostic ROS package utilities (required by rospy)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"pip"),(0,r.kt)("td",{parentName:"tr",align:"center"},"23.2.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Python package manager")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"setuptools"),(0,r.kt)("td",{parentName:"tr",align:"center"},"68.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Python build tools")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"wheel"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.41.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Python build tools")))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We install from source as it's not available in PAL repositories and Python\nis no longer available from the deadsnakes PPA as Ubuntu 18.04 has lost support.\nWhen migrating this build step to noetic, you may be able to just use the\ndeadsnakes repository like:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install software-properties-common -y && apt-add-repository ppa:deadsnakes/ppa \\\n&& apt update && apt install python3.8 python3.8-dev python3-setuptools [.. etc]\n")),(0,r.kt)("p",{parentName:"admonition"},"NB. update our definition to use this if Ubuntu 21.04 is still supported.")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Python 3.11+ is incompatible with rospy (Melodic & Noetic)")),(0,r.kt)("h3",{id:"configure-global-python-installation"},"Configure global Python installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Reconfigure Python symlinks"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/usr/bin/python")," is made to point to Python 3.8"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/python3")," is removed to restore Python 3.8 for ",(0,r.kt)("inlineCode",{parentName:"li"},"python3")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("del",{parentName:"p"},"Install additional Python 3.6 packages")),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"As Python 3.6 is no longer available in the base container, this has been momentarily removed.")),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Package"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"rosnumpy"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.0.5.2"),(0,r.kt)("td",{parentName:"tr",align:null},"conversion helper between ROS and numpy \u2020")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"scipy"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1.5.4"),(0,r.kt)("td",{parentName:"tr",align:null},"mathematics library")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"black"),(0,r.kt)("td",{parentName:"tr",align:"center"},"22.8.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Python code formatter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"scikit-build"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.16.7"),(0,r.kt)("td",{parentName:"tr",align:null},"build system for CPython C/C++/Fortran/Cython extensions using CMake")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"scikit-learn"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.24.2"),(0,r.kt)("td",{parentName:"tr",align:null},"machine learning and data mining")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"nvidia-ml-py3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"7.352.0"),(0,r.kt)("td",{parentName:"tr",align:null},"bindings for NVIDIA Management Library")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"torch"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1.9.1+cpu"),(0,r.kt)("td",{parentName:"tr",align:null},"neural networks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"torchvision"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.10.1+cpu"),(0,r.kt)("td",{parentName:"tr",align:null},"torch extension for vision")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"torchaudio"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.9.1"),(0,r.kt)("td",{parentName:"tr",align:null},"torch extension for audio")))),(0,r.kt)("p",{parentName:"li"},"\u2020 This library does not work on Python 3.10, ROS packages upgrading to newer Python versions must find a substitute."),(0,r.kt)("p",{parentName:"li"},"\u2021 Installed with CPU support only, ",(0,r.kt)("a",{parentName:"p",href:"https://pytorch.org/get-started/previous-versions/#linux-and-windows-17"},"see this page for more information"),"."))),(0,r.kt)("h3",{id:"create-overlay-workspace-for-additional-ros-packages"},"Create overlay workspace for additional ROS packages"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new overlay workspace")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone ROS packages we want to build from source"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Package"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Source"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"catkin_virtualenv"),(0,r.kt)("td",{parentName:"tr",align:null},"Bundle python requirements in a catkin package via virtualenv"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/locusrobotics/catkin_virtualenv"},"locusrobotics/catkin_virtualenv")," @ ",(0,r.kt)("inlineCode",{parentName:"td"},"4af9970"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"video_stream_opencv"),(0,r.kt)("td",{parentName:"tr",align:null},"Package providing various utilities concerning capturing and playing videos"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/ros-drivers/video_stream_opencv"},"ros-drivers/video_stream_opencv")," @ ",(0,r.kt)("inlineCode",{parentName:"td"},"65949bd")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build the workspace")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add workspace setup to container environment"),(0,r.kt)("p",{parentName:"li"},"We hijack ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/env.sh")," and add our workspace at the end of the source chain."),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This relies on the TIAGo PAL or open source containers being used as a base to detect where the line should be added.")))),(0,r.kt)("h3",{id:"perform-clean-up"},"Perform clean up"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remove the build folder ",(0,r.kt)("inlineCode",{parentName:"p"},"/deps"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate build information for future reference"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat /.build_info\nRoboCup Container (Version: 0001, Bootstrapped from: oss, Build date: 09-11-2023, Build took: 0 days 0 hours 8 minutes 36 seconds)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remove extraneous environment variables"))))}u.isMDXComponent=!0}}]);