"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[3630],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=p(r),m=n,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(g,i(i({ref:e},u),{},{components:r})):a.createElement(g,i({ref:e},u))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8494:function(t,e,r){r.d(e,{IK:function(){return i},rJ:function(){return l}});var a=r(7294),n=r(4996),o=r(9750);function i(t){var e=t.src,r=t.width,o=t.title;return a.createElement("img",{src:(0,n.Z)(e),width:r,title:o,alt:o})}function l(t){var e=t.srcLight,r=t.srcDark,i=t.width,l=t.title;return a.createElement(o.Z,{sources:{light:(0,n.Z)(e),dark:(0,n.Z)(r)},width:i,title:l})}},1234:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return d},toc:function(){return c},default:function(){return g}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=r(8494),l=["components"],s={title:"Supported platforms",sidebar_position:6},p=void 0,u={unversionedId:"platforms",id:"platforms",title:"Supported platforms",description:"ImageWithBaseUrl,",source:"@site/docs/platforms.mdx",sourceDirName:".",slug:"/platforms",permalink:"/docs/next/platforms",editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/docs/platforms.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Supported platforms",sidebar_position:6},sidebar:"docs",previous:{title:"Part 6: Working With DPDK",permalink:"/docs/next/tutorials/dpdk"},next:{title:"Example Apps",permalink:"/docs/next/examples"}},d={},c=[{value:'<ImageWithBaseUrl src="/img/os-logos/logo-windows.png" width="24" title="Windows"/> Windows',id:"-windows",level:2},{value:'<ImageWithBaseUrl src="/img/os-logos/logo-linux.png" width="24" title="Linux"/> Linux',id:"-linux",level:2},{value:'<ThemedImageWithBaseUrl srcLight="/img/os-logos/logo-apple.png" srcDark="/img/os-logos/logo-apple-dark.png" width="24" title="MacOS"/> MacOS',id:"-macos",level:2},{value:'<ImageWithBaseUrl src="/img/os-logos/logo-android.png" width="24" title="Android"/> Android',id:"-android",level:2},{value:'<ImageWithBaseUrl src="/img/os-logos/logo-freebsd.png" width="24" title="FreeBSD"/> FreeBSD',id:"-freebsd",level:2},{value:"Other platforms",id:"other-platforms",level:2},{value:"CI reports",id:"ci-reports",level:2}],m={toc:c};function g(t){var e=t.components,r=(0,n.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The platforms and toolchains described below are supported and being continuously tested."),(0,o.kt)("h2",{id:"-windows"},(0,o.kt)(i.IK,{src:"/img/os-logos/logo-windows.png",width:"24",title:"Windows",mdxType:"ImageWithBaseUrl"})," Windows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/"},"Microsoft Visual Studio")," (32-bit + 64-bit compilation):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Visual Studio 2019"),(0,o.kt)("li",{parentName:"ul"},"Visual Studio 2017"),(0,o.kt)("li",{parentName:"ul"},"Visual Studio 2015"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mingw-w64.org"},"MinGW-w64")," (32-bit compilation only)")),(0,o.kt)("h2",{id:"-linux"},(0,o.kt)(i.IK,{src:"/img/os-logos/logo-linux.png",width:"24",title:"Linux",mdxType:"ImageWithBaseUrl"})," Linux"),(0,o.kt)("p",null,"Basically every x86 GCC toolchain should work, but PcapPlusPlus is being continuously tested on the following platforms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ubuntu.com/"},"Ubuntu")," (20.04 LTS, 18.04 LTS, 16.04 LTS)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://getfedora.org/"},"Fedora")," 26 & 29"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.centos.org/"},"CentOS")," 7")),(0,o.kt)("h2",{id:"-macos"},(0,o.kt)(i.rJ,{srcLight:"/img/os-logos/logo-apple.png",srcDark:"/img/os-logos/logo-apple-dark.png",width:"24",title:"MacOS",mdxType:"ThemedImageWithBaseUrl"})," MacOS"),(0,o.kt)("p",null,"Both ",(0,o.kt)("strong",{parentName:"p"},"Intel")," and ",(0,o.kt)("strong",{parentName:"p"},"Apple silicon (M1)")," processors are supported."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Big Sur (11.0)"),(0,o.kt)("li",{parentName:"ul"},"Catalina (10.15)"),(0,o.kt)("li",{parentName:"ul"},"Mojave (10.14)"),(0,o.kt)("li",{parentName:"ul"},"High Sierra (10.13)"),(0,o.kt)("li",{parentName:"ul"},"Sierra (10.12)"),(0,o.kt)("li",{parentName:"ul"},"El Capitan (10.11)")),(0,o.kt)("h2",{id:"-android"},(0,o.kt)(i.IK,{src:"/img/os-logos/logo-android.png",width:"24",title:"Android",mdxType:"ImageWithBaseUrl"})," Android"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All 4 major ",(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/ndk/guides/abis"},"Android ABIs")," are supported: ",(0,o.kt)("inlineCode",{parentName:"li"},"armeabi-v7a"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"arm64-v8a"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"x86"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"x86_64")),(0,o.kt)("li",{parentName:"ul"},"API versions 21-30")),(0,o.kt)("h2",{id:"-freebsd"},(0,o.kt)(i.IK,{src:"/img/os-logos/logo-freebsd.png",width:"24",title:"FreeBSD",mdxType:"ImageWithBaseUrl"})," FreeBSD"),(0,o.kt)("p",null,"Versions 12.3 and above are supported"),(0,o.kt)("h2",{id:"other-platforms"},"Other platforms"),(0,o.kt)("p",null,"Other platforms and toolchains may work as well, but the support is not guaranteed. If you'd like us to add additional platforms please ",(0,o.kt)("a",{parentName:"p",href:"/community"},"contact us"),"."),(0,o.kt)("h2",{id:"ci-reports"},"CI reports"),(0,o.kt)("p",null,"You can view the status of each supported platform in our CI reports:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"CI Platform"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Build Status"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"GitHub Actions")," (Linux, MacOS, Windows):"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/seladb/PcapPlusPlus/actions?query=workflow%3A%22Build+and+test%22"},(0,o.kt)("img",{parentName:"a",src:"https://github.com/seladb/PcapPlusPlus/workflows/Build%20and%20test/badge.svg",alt:"GitHub Actions"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Cirrus CI")," (FreeBSD):"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://cirrus-ci.com/github/seladb/PcapPlusPlus"},(0,o.kt)("img",{parentName:"a",src:"https://api.cirrus-ci.com/github/seladb/PcapPlusPlus.svg",alt:"Build Status"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"AppVeyor")," (Windows VS 2015):"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://ci.appveyor.com/project/seladb/pcapplusplus/branch/master"},(0,o.kt)("img",{parentName:"a",src:"https://ci.appveyor.com/api/projects/status/4u5ui21ibbevkstc/branch/master?svg=true",alt:"Build status"})))))))}g.isMDXComponent=!0}}]);