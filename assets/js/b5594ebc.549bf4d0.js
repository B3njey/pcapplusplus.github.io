"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[1917],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=i,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={title:"Build on Windows (MinGW-w64)"},o="Build From Source on Windows - MinGW-w64",l={unversionedId:"install/mingw",id:"install/mingw",title:"Build on Windows (MinGW-w64)",description:"Prerequisites",source:"@site/docs/install/mingw.mdx",sourceDirName:"install",slug:"/install/mingw",permalink:"/docs/next/install/mingw",draft:!1,editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/docs/install/mingw.mdx",tags:[],version:"current",frontMatter:{title:"Build on Windows (MinGW-w64)"},sidebar:"docs",previous:{title:"Build on Windows (VS)",permalink:"/docs/next/install/vs"},next:{title:"Build for Android",permalink:"/docs/next/install/android"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Build the code",id:"build-the-code",level:2},{value:"Running tests",id:"running-tests",level:2}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-from-source-on-windows---mingw-w64"},"Build From Source on Windows - MinGW-w64"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"In order to compile PcapPlusPlus on Windows using MinGW-w64 you need the following components:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download and run MinGW-w64 installer from here: ",(0,i.kt)("a",{parentName:"li",href:"https://sourceforge.net/projects/mingw-w64/"},"https://sourceforge.net/projects/mingw-w64/")),(0,i.kt)("li",{parentName:"ol"},"Make sure the installation path doesn't contain spaces (otherwise PcapPlusPlus compilation may fail)"),(0,i.kt)("li",{parentName:"ol"},"Make sure to choose the i686 (32-bit) and POSIX threads (and not win32 threads) options. for example: ",(0,i.kt)("inlineCode",{parentName:"li"},"i686-8.1.0-posix-dwarf-rt_v6-rev0"),". PcapPlusPlus doesn't support MinGW-w64 64-bit (x86_64)"),(0,i.kt)("li",{parentName:"ol"},"Follow the instruction in the installation wizard"),(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"MSYS2"),"from here: ",(0,i.kt)("a",{parentName:"li",href:"https://www.msys2.org/"},"https://www.msys2.org/")),(0,i.kt)("li",{parentName:"ol"},"Add the following folders to your ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," environment variable:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"The MinGW-w64 folder that contains ",(0,i.kt)("inlineCode",{parentName:"li"},"g++.exe"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mingw32-make"),", etc. It should be under ",(0,i.kt)("inlineCode",{parentName:"li"},"[MinGW-w64_install_folder]\\mingw32\\bin"),", for example: ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\i686-8.1.0-posix-dwarf-rt_v6-rev0\\mingw32\\bin")),(0,i.kt)("li",{parentName:"ol"},"The MSYS2 ",(0,i.kt)("inlineCode",{parentName:"li"},"usr\\bin")," folder, for example: ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\msys32\\usr\\bin")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.winpcap.org/devel.htm"},"WinPcap developer's pack")," ",(0,i.kt)("strong",{parentName:"li"},"OR")," ",(0,i.kt)("a",{parentName:"li",href:"https://nmap.org/npcap/guide/npcap-devguide.html"},"Npcap SDK")," - containing the ",(0,i.kt)("inlineCode",{parentName:"li"},"wpcap")," library PcapPlusPlus is linking with plus relevant ",(0,i.kt)("inlineCode",{parentName:"li"},"h")," files.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"WinPcap developer's pack can be downloaded from here: ",(0,i.kt)("a",{parentName:"li",href:"https://www.winpcap.org/devel.htm"},"https://www.winpcap.org/devel.htm")),(0,i.kt)("li",{parentName:"ol"},"Npcap SDK can be downloaded from here: ",(0,i.kt)("a",{parentName:"li",href:"https://nmap.org/npcap/#download"},"https://nmap.org/npcap/#download"))))),(0,i.kt)("admonition",{title:"x64 is not supported",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Please notice that ",(0,i.kt)("strong",{parentName:"p"},"x64")," compilation is not supported (and will not work) on MinGW-w64!")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Run the ",(0,i.kt)("inlineCode",{parentName:"p"},"configure-windows-mingw.bat")," batch file from PcapPlusPlus main directory. The script creates a makefile ",(0,i.kt)("inlineCode",{parentName:"p"},"mk\\PcapPlusPlus.mk")," that contains paths for 3rd-party libraries being used to build PcapPlusPlus."),(0,i.kt)("p",null,"Ths script has two modes of operation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Wizard mode - the script will walk you through the paths and parameters you need to provide"),(0,i.kt)("li",{parentName:"ul"},"Params mode - all parameters are provided in the script command line")),(0,i.kt)("p",null,"In wizard mode the script will ask you for MinGW-w64 location (for example: ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\i686-8.1.0-posix-dwarf-rt_v6-rev0"),") and also for WinPcap developer's pack / Npcap SDK location (for example: ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\WpdPack")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Npcap-SDK"),")."),(0,i.kt)("p",null,"Here is an example of running the script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"******************************************\nPcapPlusPlus Windows configuration script\n******************************************\n\nIf mingw-w64 is not installed, please download and install it from here:\nhttps://www.mingw-w64.org/downloads/#mingw-builds\n\nPlease specify mingw-w64 installed path (for example: C:\\i686-8.1.0-posix-dwarf-rt_v6-rev0): C:\\i686-8.1.0-posix-dwarf-rt_v6-rev0\n\n\nMSYS2 is required for compiling PcapPlusPlus.\nIf MSYS2 are not installed, please download and install it from: https://www.msys2.org/\n\nPlease specify MSYS2 installed path: C:\\msys64\n\n\nWinPcap or Npcap SDK is required for compiling PcapPlusPlus.\nFor downloading WinPcap SDK (developer's pack) please go to https://www.winpcap.org/devel.htm\nFor downloading Npcap SDK please go to https://nmap.org/npcap/#download\n\nPlease specify WinPcap/Npcap SDK path: C:\\Npcap-SDK\n\nPcapPlusPlus configuration is complete. Files created (or modified): mk\\platform.mk, mk\\PcapPlusPlus.mk\n")),(0,i.kt)("p",null,"In params mode you need to provide these paths as script params. You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," switch to query these params:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'C:\\PcapPlusPlus>configure-windows-mingw.bat --help\n\n******************************************\nPcapPlusPlus Windows configuration script\n******************************************\n\n\nHelp documentation for configure-windows-mingw.bat\nThis script has 2 modes of operation:\n  1) Without any switches. In this case the script will guide you through using wizards\n  2) With switches, as described below\n\nBasic usage: configure-windows-mingw.bat [-h] -m MINGW_HOME_DIR -s MSYS_HOME_DIR -w PCAP_SDK_DIR\n\nThe following switches are recognized:\n-m|--mingw-home      --Set mingw-w64 home directory (the folder that includes "bin", "lib" and "include" directories)\n-s|--msys-home       --Set MSYS2 home directory\n-w|--pcap-sdk        --Set WinPcap/Npcap SDK directory\n-h|--help            --Display this help message and exits. No further actions are performed\n')),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"C:\\PcapPlusPlus>configure-windows-mingw.bat --mingw-home C:\\i686-8.1.0-posix-dwarf-rt_v6-rev0 --msys-home C:\\msys64 --pcap-sdk C:\\WpdPack\n\n******************************************\nPcapPlusPlus Windows configuration script\n******************************************\n\n\nPcapPlusPlus configuration is complete. Files created (or modified): mk\\platform.mk, mk\\PcapPlusPlus.mk\n")),(0,i.kt)("p",null,"Here are the available switches:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-m"))," , ",(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"--mingw-home"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"MinGW-w64 home directory (the folder that includes ",(0,i.kt)("inlineCode",{parentName:"td"},"bin"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"lib")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"include")," directories)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-s"))," , ",(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"--msys-home"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"MSYS or MSYS2 home directory")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-w"))," , ",(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"--pcap-sdk"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Path to WinPcap Developer Pack (WpdPack) OR Npcap SDK")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-h"))," , ",(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"--help"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Display the help message and exit. No further actions are performed")))),(0,i.kt)("h2",{id:"build-the-code"},"Build the code"),(0,i.kt)("p",null,"After running the config script, you're can safely build the code:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"mingw32-make.exe all")," from PcapPlusPlus main directory"),(0,i.kt)("li",{parentName:"ol"},"This should compile all libraries, unit-tests and examples"),(0,i.kt)("li",{parentName:"ol"},"To build the libraries only (without the unit-tests and examples) run ",(0,i.kt)("inlineCode",{parentName:"li"},"mingw32-make.exe libs")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"mingw32-make.exe all")),(0,i.kt)("li",{parentName:"ol"},"After compilation you can find the libraries, examples, header files and helpful makefiles under the ",(0,i.kt)("inlineCode",{parentName:"li"},"Dist\\")," directory")),(0,i.kt)("h2",{id:"running-tests"},"Running tests"),(0,i.kt)("p",null,"PcapPlusPlus contains a set of test-cases you can run to make sure that everything works correctly on your system. ",(0,i.kt)("a",{parentName:"p",href:"../tests"},"This guide")," contains detailed instructions on how to run them."))}m.isMDXComponent=!0}}]);