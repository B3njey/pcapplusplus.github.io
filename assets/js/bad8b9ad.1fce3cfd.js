"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[9227],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},982:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),a=r(6010),i=r(9960);const o="DocsButton_Wv58";const s=function(e){let{text:t,link:r}=e;return n.createElement(i.Z,{className:(0,a.Z)("button button--lg",o),to:r},t)}},8494:(e,t,r)=>{r.d(t,{IK:()=>o,rJ:()=>s});var n=r(7294),a=r(4996),i=r(941);function o(e){let{src:t,width:r,title:i}=e;return n.createElement("img",{src:(0,a.Z)(t),width:r,title:i,alt:i})}function s(e){let{srcLight:t,srcDark:r,width:o,title:s}=e;return n.createElement(i.Z,{sources:{light:(0,a.Z)(t),dark:(0,a.Z)(r)},width:o,title:s})}},5208:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),i=r(982),o=r(143),s=r(8494);const l={title:"API Reference",sidebar_position:99},c="API Reference",p={unversionedId:"api",id:"version-v22.05/api",title:"API Reference",description:"<ButtonLink",source:"@site/versioned_docs/version-v22.05/api.mdx",sourceDirName:".",slug:"/api",permalink:"/docs/api",draft:!1,editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v22.05/api.mdx",tags:[],version:"v22.05",sidebarPosition:99,frontMatter:{title:"API Reference",sidebar_position:99},sidebar:"docs",previous:{title:"Running Tests",permalink:"/docs/tests"}},u={},d=[],f={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-reference"},"API Reference"),(0,a.kt)(i.Z,{text:"Go to Doxygen API reference",link:"pathname:///api-docs/"+(0,o.zu)().label.toLowerCase(),mdxType:"ButtonLink"}),(0,a.kt)("br",null),(0,a.kt)("br",null),"PcapPlusPlus consists of 3 libraries:",(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Packet++")," - a library for parsing, creating and editing network packets"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pcap++")," - a library for intercepting and sending packets, providing network and NIC info, stats, etc. It is actually a C++ wrapper for packet capturing engines such as libpcap, WinPcap, Npcap, DPDK and PF_RING"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Common++")," - a library with some common code utilities used by both Packet++ and Pcap++")),(0,a.kt)("p",null,"The dependency model between the libraries is as follows:"),(0,a.kt)(s.rJ,{srcLight:"/api-docs/libraries-light.svg",srcDark:"/api-docs/libraries-dark.svg",mdxType:"ThemedImageWithBaseUrl"}),(0,a.kt)("p",null,"That means, you can use ",(0,a.kt)("strong",{parentName:"p"},"Common++")," separately from the other libraries, and you can also use ",(0,a.kt)("strong",{parentName:"p"},"Packet++")," without ",(0,a.kt)("strong",{parentName:"p"},"Pcap++"),"."),(0,a.kt)("p",null,"All of PcapPlusPlus APIs including classes for all of these libraries, files, data structures, etc. are documented in details using ",(0,a.kt)("a",{parentName:"p",href:"http://www.doxygen.nl/"},"Doxygen"),"."))}m.isMDXComponent=!0}}]);