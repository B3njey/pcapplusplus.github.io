"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[672],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7783:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r="tableOfContentsInline_gwOO",i=a(5002);function o(e){var t=e.toc,a=e.minHeadingLevel,o=e.maxHeadingLevel;return n.createElement("div",{className:r},n.createElement(i.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null}))}},5002:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7462),r=a(3366),i=a(7294),o=a(5450),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?i.createElement("ul",{className:r?void 0:a},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function l(e){var t=e.toc,a=e.className,l=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,u=void 0===c?"table-of-contents__link":c,d=e.linkActiveClassName,f=void 0===d?void 0:d,m=e.minHeadingLevel,h=e.maxHeadingLevel,k=(0,r.Z)(e,p),g=(0,o.LU)(),P=null!=m?m:g.tableOfContents.minHeadingLevel,w=null!=h?h:g.tableOfContents.maxHeadingLevel,N=(0,o.b9)({toc:t,minHeadingLevel:P,maxHeadingLevel:w}),v=(0,i.useMemo)((function(){if(u&&f)return{linkClassName:u,linkActiveClassName:f,minHeadingLevel:P,maxHeadingLevel:w}}),[u,f,P,w]);return(0,o.Si)(v),i.createElement(s,(0,n.Z)({toc:N,className:l,linkClassName:u},k))}},2845:function(e,t,a){var n=a(7294),r=a(5551),i=a(4996);t.Z=function(e){var t=e.relativePath,a=e.children;return n.createElement("a",{href:(0,i.Z)("/api-docs/"+(0,r.zu)().label.toLowerCase()+t)},a)}},1770:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return d},toc:function(){return f},default:function(){return h}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=a(7783),p=a(2845),s=["components"],l={title:"Feature Overview",sidebar_position:3},c="Feature Overview",u={unversionedId:"features",id:"features",title:"Feature Overview",description:"Packet capture",source:"@site/docs/features.mdx",sourceDirName:".",slug:"/features",permalink:"/docs/next/features",editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/docs/features.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Feature Overview",sidebar_position:3},sidebar:"docs",previous:{title:"Build on FreeBSD",permalink:"/docs/next/install/freebsd"},next:{title:"DPDK Support",permalink:"/docs/next/dpdk"}},d={},f=[{value:"Packet capture",id:"packet-capture",level:2},{value:"What&#39;s next?",id:"whats-next",level:3},{value:"Packet parsing and crafting",id:"packet-parsing-and-crafting",level:2},{value:"Read and write packets from/to files",id:"read-and-write-packets-fromto-files",level:2},{value:"Reading/Writing PCAPNG files with compression",id:"readingwriting-pcapng-files-with-compression",level:3},{value:"DPDK support",id:"dpdk-support",level:2},{value:"PF_RING support",id:"pf_ring-support",level:2},{value:"Packet reassembly",id:"packet-reassembly",level:2},{value:"Packet filtering",id:"packet-filtering",level:2},{value:"TLS Fingerprinting",id:"tls-fingerprinting",level:2},{value:"Supported network protocols",id:"supported-network-protocols",level:2},{value:"License",id:"license",level:2}],m={toc:f};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"feature-overview"},"Feature Overview"),(0,i.kt)(o.Z,{toc:f,maxHeadingLevel:2,mdxType:"TOCInline"}),(0,i.kt)("h2",{id:"packet-capture"},"Packet capture"),(0,i.kt)("p",null,"Packet capture (A.K.A packet sniffing or network tapping) is the process of intercepting and logging traffic that passes over a digital network or part of a network (taken from ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Packet_analyzer"},"Wikipedia"),"). It is one of the most important and popular features of PcapPlusPlus and it is what PcapPlusPlus is basically all about."),(0,i.kt)("p",null,"There are multiple packet capture engines out there, the most popular are ",(0,i.kt)("a",{parentName:"p",href:"https://www.tcpdump.org/"},"libpcap"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.winpcap.org/"},"WinPcap")," (which is libpcap for Windows), ",(0,i.kt)("a",{parentName:"p",href:"https://nmap.org/npcap/"},"Npcap")," (WinPcap's successor), ",(0,i.kt)("a",{parentName:"p",href:"https://www.dpdk.org/"},"Intel DPDK"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.ntop.org/products/packet-capture/pf_ring/"},"ntop's PF_RING")," and ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Network_socket#Raw_socket"},"raw sockets"),". Each engine has different strengths, purposes and features, works on different platforms and obviously has different APIs and setup process. Most of them are written in C (to achieve the best performance) and don't expose a C++ interface."),(0,i.kt)("p",null,"PcapPlusPlus aims to create a consolidated and easy-to-use C++ API for all of these engines which simplifies their complexity and provides a common infrastructure for capturing, processing, analyzing and forging of network packets."),(0,i.kt)("p",null,"Here is a list of of the packet capture engines currently supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tcpdump.org/"},"libpcap")," live capture (on Linux, MacOS, Android, FreeBSD)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.winpcap.org/"},"WinPcap"),"/",(0,i.kt)("a",{parentName:"li",href:"https://nmap.org/npcap/"},"Npcap")," live capture (on Windows)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.dpdk.org/"},"Intel DPDK")," (on Linux)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ntop.org/products/packet-capture/pf_ring/"},"ntop's Vanilla PF_RING")," (on Linux)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.winpcap.org/docs/docs_412/html/group__remote.html"},"WinPcap Remote capture")," (on Windows)")),(0,i.kt)("p",null,"The main features provided for each one are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Browse all interfaces available on the machine"),(0,i.kt)("li",{parentName:"ul"},"Capture network traffic on a specific interface"),(0,i.kt)("li",{parentName:"ul"},"Send packets to the network"),(0,i.kt)("li",{parentName:"ul"},"Filter packets")),(0,i.kt)("h3",{id:"whats-next"},"What's next?"),(0,i.kt)("p",null,"You can find out more information in the ",(0,i.kt)("a",{parentName:"p",href:"./api"},"API documentation"),", ",(0,i.kt)("a",{parentName:"p",href:"./tutorials/intro"},"tutorial pages")," and browse through the code of the ",(0,i.kt)("a",{parentName:"p",href:"./examples"},"example apps"),"."),(0,i.kt)("h2",{id:"packet-parsing-and-crafting"},"Packet parsing and crafting"),(0,i.kt)("p",null,"PcapPlusPlus provides advanced capabilities for packet analysis which include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Packet parsing, which is a detailed analysis of the protocols and layers of a packet"),(0,i.kt)("li",{parentName:"ul"},"Packet crafting which is generation and editing of network packets")),(0,i.kt)("p",null,"A large variety of network protocols are supported, see the full list ",(0,i.kt)("a",{parentName:"p",href:"#supported-network-protocols"},"here"),"."),(0,i.kt)("p",null,"Packets can be analyzed from any source including those captured from the network, packets stored in PCAP/PCAPNG files, and more.\nThe design of PcapPlusPlus allows similar analysis capabilities for each packet, regardless of where it came from. For example, you can write the same code for parsing packets that are captured using DPDK, libpcap, WinPcap/Npcap, raw sockets or read from a PCAP/PCAPNG file. Same goes for packet crafting."),(0,i.kt)("p",null,"Consider this simple code snippet that shows how to read a packet from a PCAP file, parse it, identify if it's an IPv4 packet and print the source and dest IP addresses:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "IPv4Layer.h"\n#include "Packet.h"\n#include "PcapFileDevice.h"\n\nint main(int argc, char* argv[])\n{\n    // open a pcap file for reading\n    pcpp::PcapFileReaderDevice reader("1_packet.pcap");\n    if (!reader.open())\n    {\n        printf("Error opening the pcap file\\n");\n        return 1;\n    }\n\n    // read the first packet from the file (in this case the\n    // file contains only one packet)\n    pcpp::RawPacket rawPacket;\n    if (!reader.getNextPacket(rawPacket))\n    {\n        printf("Couldn\'t read the first packet in the file\\n");\n        return 1;\n    }\n\n    // parse the raw packet into a parsed packet\n    pcpp::Packet parsedPacket(&rawPacket);\n\n    // check if it\'s an IPv4 packet\n    if (parsedPacket.isPacketOfType(pcpp::IPv4))\n    {\n        // extract source and dest IPs\n        pcpp::IPv4Address srcIP = parsedPacket.getLayerOfType()->getSrcIPv4Address();\n        pcpp::IPv4Address destIP = parsedPacket.getLayerOfType()->getDstIPv4Address();\n\n        // print source and dest IPs\n        printf("Source IP is \'%s\'; Dest IP is \'%s\'\\n", srcIP.toString().c_str(), destIP.toString().c_str());\n    }\n\n    // close the file\n    reader.close();\n\n    return 0;\n}\n')),(0,i.kt)("h2",{id:"read-and-write-packets-fromto-files"},"Read and write packets from/to files"),(0,i.kt)("p",null,"Network packets can be stored in files, usually for offline analysis. ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.wireshark.org/Development/LibpcapFileFormat"},"PCAP")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pcapng/pcapng"},"PCAPNG")," are the two most popular file formats and both are supported in PcapPlusPlus. In addition the ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc1761"},"SNOOP")," file format is supported for read-only."),(0,i.kt)("p",null,"The main features include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Read packets from PCAP/PCAPNG/SNOOP files"),(0,i.kt)("li",{parentName:"ul"},"Create new PCAP/PCAPNG files and write packets to them"),(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("a",{parentName:"li",href:"#packet-filtering"},"packet filtering mechanism")," to read or write only packets that match the filter"),(0,i.kt)("li",{parentName:"ul"},"Append packets to existing PCAP/PCAPNG files"),(0,i.kt)("li",{parentName:"ul"},"Write compressed PCAPNG files using ",(0,i.kt)("a",{parentName:"li",href:"https://facebook.github.io/zstd/"},"Zstd")," compression in real time (OPTIONAL and requires building with Zstd)")),(0,i.kt)("p",null,"Consider this simple code snippet that shows how to open a PCAP file for reading and another PCAPNG file for writing, and then read all packets from the PCAP file and write them to the PCAPNG file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// create a pcap file reader\npcpp::PcapFileReaderDevice pcapReader("input.pcap");\npcapReader.open();\n\n// create a pcapng file writer\npcpp::PcapNgFileWriterDevice pcapNgWriter("output.pcapng");\npcapNgWriter.open();\n\n// raw packet object\npcpp::RawPacket rawPacket;\n\n// read packets from pcap reader and write pcapng writer\nwhile (pcapReader->getNextPacket(rawPacket)) {\n  pcapNgWriter.writePacket(rawPacket);\n}\n\npcapNgReader.close(); //These will close when going out of scope\npcapNgWriter.close(); //or you may close them manually\n')),(0,i.kt)("p",null,"For more information please refer to the ",(0,i.kt)("a",{parentName:"p",href:"./tutorials/read-write-pcap"},"Read/Write Pcap Files tutorial"),", look at the ",(0,i.kt)("a",{parentName:"p",href:"./api"},"API documentation")," or browse through the code of the ",(0,i.kt)("a",{parentName:"p",href:"./examples"},"example apps"),"."),(0,i.kt)("h3",{id:"readingwriting-pcapng-files-with-compression"},"Reading/Writing PCAPNG files with compression"),(0,i.kt)("p",null,"Zstd streaming compression is only supported when working with pcapng files. To enable this feature you must build PcapPlusPlus with Zstd support. For more guidance on building PcapPlusPlus see the ",(0,i.kt)("a",{parentName:"p",href:"./install"},"build instructions per platform"),"."),(0,i.kt)("p",null,"Once you have a working build modifying your code to start enabling compression is fast and easy!"),(0,i.kt)("p",null,"When writing PCAPNG files, to enable streaming compression all you need to do is add a second integer argument when constructing your writer. The integer should be between 0-10 and it specifies the compression level. Values outside this range will be clamped. A value of zero, which is also the default, indicates to skip compression. A value of 10 would indicate use maximum compression. For most scenarios a value of 5 or less should be adequate."),(0,i.kt)("p",null,"For reading compressed PCAPNG files the only requirement is that the file name extension must terminate in ",(0,i.kt)("inlineCode",{parentName:"p"},".zstd"),". If a compressed file is supplied to the reader without the ",(0,i.kt)("inlineCode",{parentName:"p"},".zstd")," extension the file will fail to load. Currently, APPENDING to a compressed file is NOT supported!"),(0,i.kt)("p",null,"If you write code enabling compression, by adding a compression level to your writer constructor, but use a build of PcapPlusPlus without compression support, everything will work just fine and the compression will be skipped/ignored and normal PCAPNG files will be generated/read."),(0,i.kt)("p",null,"There is a tradeoff between compression speed and compression efficiency. A compression value of 10 will yield the most compression but be slower, while a value of 1 will yield the least compression but be fastest. Depending upon your capture rates and data size you can tune this number to fit your needs."),(0,i.kt)("p",null,"Since Zstd is designed to support fast and efficient streaming compression most users should not see any noticeable performance impact when enabling compression. Exact savings from compression will always vary based upon the input data, however; in one test case an uncompressed PCAPNG file of 140MB was duplicated with a compression level of 5 to yield a compressed PCAPNG file of only 40MB giving about 4x space savings! Note that the compression is performed while the file is written so you will not notice any delay when closing the file or a long processing time like you work normally experience when compressing an existing file."),(0,i.kt)("p",null,"Some example compression code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// create a pcapng file reader\npcpp::PcapNgFileReaderDevice reader("input.pcap.zstd");  //Notice the Zstd extension\nreader.open();                                           //This is required for proper loading\n\n// create a pcapng file writer\npcpp::PcapNgFileWriterDevice writer("output.pcapng.zstd", 5);  //The second integer argument 5\npcapNgWriter.open();                                           //is the compression level to use\n\n// read packets from pcapng reader and write pcapng writer\nwhile (reader->getNextPacket(rawPacket)) {\n  writer.writePacket(rawPacket);\n}\n')),(0,i.kt)("h2",{id:"dpdk-support"},"DPDK support"),(0,i.kt)("p",null,"The Data Plane Development Kit (DPDK) is a set of data plane libraries and network interface controller drivers for fast packet processing, currently managed as an open-source project under the Linux Foundation. The DPDK provides a programming framework for x86, ARM, and PowerPC processors and enables faster development of high speed data packet networking applications (taken from ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Data_Plane_Development_Kit"},"Wikipedia"),")."),(0,i.kt)("p",null,"DPDK provides packet processing in line rate using kernel bypass for a large range of network interface cards. Notice that not every NIC supports DPDK as the NIC needs to support the kernel bypass feature. You can read more about DPDK in ",(0,i.kt)("a",{parentName:"p",href:"https://www.dpdk.org/"},"DPDK's web-site")," and get a list of supported NICs ",(0,i.kt)("a",{parentName:"p",href:"http://core.dpdk.org/supported/"},"here"),"."),(0,i.kt)("p",null,"As DPDK API is written in C, PcapPlusPlus wraps its main functionality in easy-to-use C++ wrappers which have minimum impact on performance and packet processing rate. In addition it brings DPDK to the PcapPlusPlus framework and APIs so you can use DPDK together with other PcapPlusPlus features such as packet analysis, etc."),(0,i.kt)("p",null,"You can find more information about setting up DPDK and the API in ",(0,i.kt)("a",{parentName:"p",href:"./dpdk"},"DPDK support page")," and also in ",(0,i.kt)("a",{parentName:"p",href:"./tutorials/dpdk"},"DPDK tutorial"),"."),(0,i.kt)("h2",{id:"pf_ring-support"},"PF_RING support"),(0,i.kt)("p",null,"PF_RING\u2122 is a new type of network socket that dramatically improves the packet capture speed. It's providing high-speed packet capture, filtering and analysis (taken from ",(0,i.kt)("a",{parentName:"p",href:"https://www.ntop.org/products/packet-capture/pf_ring/"},"ntop's website"),")."),(0,i.kt)("p",null,"PcapPlusPlus provides a clean and simple C++ wrapper API for ",(0,i.kt)("a",{parentName:"p",href:"https://www.ntop.org/products/packet-capture/pf_ring/"},"Vanilla PF_RING"),". Currently only Vanilla PF_RING is supported which provides significant performance improvement in comparison to libpcap or Linux kernel, but ",(0,i.kt)("a",{parentName:"p",href:"https://www.ntop.org/products/packet-capture/pf_ring/pf_ring-zc-zero-copy/"},"PF_RING Zero Copy")," (which allows kernel bypass and zero-copy of packets from NIC to user-space) is not yet supported."),(0,i.kt)("p",null,"In order to compile PcapPlusPlus with PF_RING you need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download PF_RING from ",(0,i.kt)("a",{parentName:"li",href:"https://www.ntop.org/get-started/download/#PF_RING"},"ntop's web-site")),(0,i.kt)("li",{parentName:"ul"},"Once PF_RING is compiled successfully, you need to run PcapPlusPlus's ",(0,i.kt)("inlineCode",{parentName:"li"},"configure-linux.sh"),' script and type "y" in "Compile PcapPlusPlus with PF_RING?"'),(0,i.kt)("li",{parentName:"ul"},"Then you can compile PcapPlusPlus as usual"),(0,i.kt)("li",{parentName:"ul"},"Before you activate any PcapPlusPlus application that uses PF_RING, don't forget to enable PF_RING kernel module. If you forget to do that, PcapPlusPlus will output an - appropriate error on startup which will remind you:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo insmod <PF_RING_LOCATION>/kernel/pf_ring.ko\n")),(0,i.kt)("h2",{id:"packet-reassembly"},"Packet reassembly"),(0,i.kt)("p",null,"Network protocols often need to transport large chunks of data which are complete in themselves, e.g. when transferring a file. The underlying protocol might not be able to handle that chunk size (e.g. limitation of the network packet size), or is stream-based like TCP, which doesn\u2019t know data chunks at all."),(0,i.kt)("p",null,"In that case the network protocol has to handle the chunk boundaries itself and (if required) spread the data over multiple packets. It obviously also needs a mechanism to determine the chunk boundaries on the receiving side."),(0,i.kt)("p",null,"This mechanism is called reassembly, although a specific protocol specification might use a different term for this (e.g. desegmentation, defragmentation, etc)."),(0,i.kt)("p",null,"(this description is taken from ",(0,i.kt)("a",{parentName:"p",href:"https://www.wireshark.org/docs/wsug_html_chunked/ChAdvReassemblySection.html"},"Wireshark documentation"),")."),(0,i.kt)("p",null,"PcapPlusPlus currently supports two types of packets reassembly:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IPv4 and IPv6 defragmentation which is a Layer 3 (Network layer) packet reassembly. You can read more about IP fragmentation ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/IP_fragmentation"},"here"),". To get more information about how it works and the API to use it please refer to the ",(0,i.kt)("a",{parentName:"li",href:"./api"},"API documentation")," and browse through the code of the ",(0,i.kt)("a",{parentName:"li",href:"./examples#ipdefragutil"},"IPDefragUtil")," and ",(0,i.kt)("a",{parentName:"li",href:"./examples#ipfragutil"},"IPFragUtil")," example apps"),(0,i.kt)("li",{parentName:"ul"},"TCP reassembly which is a Layer 4 (Transport layer) packet reassembly. To get more information on how it works and the API to use it please refer to the ",(0,i.kt)("a",{parentName:"li",href:"./api"},"API documentation")," and browse through the code of the ",(0,i.kt)("a",{parentName:"li",href:"./examples#tcpreassembly"},"TcpReassembly")," example app")),(0,i.kt)("h2",{id:"packet-filtering"},"Packet filtering"),(0,i.kt)("p",null,"Most packet capture engines contain packet filtering capabilities. In order to set the filters there should be a known syntax user can use. The most popular syntax is ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Berkeley_Packet_Filter"},"Berkeley Packet Filter (BPF)"),". Detailed explanation of the syntax can be found ",(0,i.kt)("a",{parentName:"p",href:"http://www.tcpdump.org/manpages/pcap-filter.7.html"},"here"),"."),(0,i.kt)("p",null,"The challenge with BPF is that it is too complicated and poorly documented. When compiling BPF filters you often get syntax errors that are hard to understand and debug. Our experience with BPF was not good, so we decided to include in PcapPlusPlus a filter mechanism which is more structured, easier to understand and less error-prone by creating classes that represent filters. Each possible filter phrase is represented by a class. The filter, in the end, is that class."),(0,i.kt)("p",null,"Consider the following code snippet for creating the filter ",(0,i.kt)("inlineCode",{parentName:"p"},"src ip 1.1.1.1 and dst port 80")," and setting it up on a packet capture device:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// create a filter instance to capture only traffic on port 80\npcpp::PortFilter portFilter(80, pcpp::DST);\n\n// create a filter instance to capture only TCP traffic\npcpp::IPFilter ipFilter("1.1.1.1", pcpp::SRC);\n\n// create an AND filter to combine both filters - capture only TCP traffic on port 80\npcpp::AndFilter andFilter;\nandFilter.addFilter(&portFilter);\nandFilter.addFilter(&ipFilter);\n\n// set the filter on the device\ndev->setFilter(andFilter);\n')),(0,i.kt)("p",null,"You can read more in the ",(0,i.kt)(p.Z,{relativePath:"/_pcap_filter_8h.html",mdxType:"APIDocsLink"},(0,i.kt)("inlineCode",{parentName:"p"},"PcapFilter.h")," API documentation")," and in the ",(0,i.kt)("a",{parentName:"p",href:"./tutorials/capture-packets#filtering-packets"},"capture packets tutorial"),"."),(0,i.kt)("h2",{id:"tls-fingerprinting"},"TLS Fingerprinting"),(0,i.kt)("p",null,"TLS Fingerprinting is a technique that extracts specific parameters from TLS handshake messages such as ClientHello and ServerHello. Most applications that need network access (such as browsers, apps, etc.) have a unique combination(s) of these parameters while making network connections, so this technique can be used to fingerprint those applications. By using a database of curated fingerprints it's possible to detect network traffic anomalies which can point to malware, security vulnerabilities or other undesired behavior. It can also be used for network visibility, for example identify popular applications, detect applications that use weak encryption, etc. This method of fingerprinting is very effective because TLS handshake is often done in lower levels of the application hence it's difficult to forge or tamper with it."),(0,i.kt)("p",null,"The primary concept for TLS fingerprinting came from ",(0,i.kt)("a",{parentName:"p",href:"https://blog.squarelemon.com/tls-fingerprinting/"},"Lee Brotherston\u2019s 2015 research")," (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LeeBrotherston/tls-fingerprinting"},"GitHub repo"),"). Following his work more articles and implementations came out, one of them was ",(0,i.kt)("a",{parentName:"p",href:"https://engineering.salesforce.com/tls-fingerprinting-with-ja3-and-ja3s-247362855967"},"Salesforce JA3")," (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/salesforce/ja3"},"GitHub repo"),") which implements TLS fingerprinting in Python and ",(0,i.kt)("a",{parentName:"p",href:"https://www.zeekurity.org/"},"Zeek"),'. This project introduced two types of TLS fingerprinting: JA3 which is the "traditional" ClientHello fingerprinting (which is the more common and well-known method), and JA3S which is ServerHello fingerprinting.'),(0,i.kt)("p",null,"PcapPlusPlus contains an implementation of JA3 and JA3S in C++. There are not a lot of C++ implementations for TLS fingerprinting and we thought this can be a good feature for PcapPlusPlus as it already analyzes TLS network traffic."),(0,i.kt)("p",null,"Using TLS fingerprinting in PcapPlusPlus is very easy, here is a quick example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"pcpp::SSLHandshakeLayer* sslHandshakeLayer = parsedPacket.getLayerOfType<pcpp::SSLHandshakeLayer>();\npcpp::SSLClientHelloMessage* clientHelloMessage = sslHandshakeLayer->getHandshakeMessageOfType<pcpp::SSLClientHelloMessage>();\npcpp::SSLClientHelloMessage::ClientHelloTLSFingerprint tlsFingerprint = clientHelloMessage->generateTLSFingerprint();\nstd::pair<std::string, std::string> tlsFingerprintStringAndMD5 = tlsFingerprint.toStringAndMD5();\nprintf(\"ClientHello (JA3) TLS fingerprint: '%s'; MD5: '%s'\\n\", tlsFingerprintStringAndMD5.first.c_str(), tlsFingerprintStringAndMD5.second.c_str());\n")),(0,i.kt)("p",null,"ServerHello TLS fingerprinting (JA3S) is almost similar but for ",(0,i.kt)("inlineCode",{parentName:"p"},"pcpp::SSLServerHelloMessage")," messages."),(0,i.kt)("p",null,"To learn more please take a look at the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seladb/PcapPlusPlus/tree/%7B%7Bsite.github_label%7D%7D/Examples/TLSFingerprinting"},"TLS fingerprinting example")," in PcapPlusPlus GitHub repo which demonstrates how to collect ClientHello and ServerHello fingerprints from live traffic or pcap files, write them to an output file and display various statistics."),(0,i.kt)("h2",{id:"supported-network-protocols"},"Supported network protocols"),(0,i.kt)("p",null,"PcapPlusPlus currently supports parsing, editing and generation of packets of the following protocols:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ethernet II"),(0,i.kt)("li",{parentName:"ol"},"IEEE 802.3 Ethernet"),(0,i.kt)("li",{parentName:"ol"},"SLL (Linux cooked capture)"),(0,i.kt)("li",{parentName:"ol"},"Null/Loopback"),(0,i.kt)("li",{parentName:"ol"},"Raw IP (IPv4 & IPv6)"),(0,i.kt)("li",{parentName:"ol"},"IPv4"),(0,i.kt)("li",{parentName:"ol"},"IPv6"),(0,i.kt)("li",{parentName:"ol"},"ARP"),(0,i.kt)("li",{parentName:"ol"},"VLAN"),(0,i.kt)("li",{parentName:"ol"},"VXLAN"),(0,i.kt)("li",{parentName:"ol"},"MPLS"),(0,i.kt)("li",{parentName:"ol"},"PPPoE"),(0,i.kt)("li",{parentName:"ol"},"GRE"),(0,i.kt)("li",{parentName:"ol"},"TCP"),(0,i.kt)("li",{parentName:"ol"},"UDP"),(0,i.kt)("li",{parentName:"ol"},"GTP (v1)"),(0,i.kt)("li",{parentName:"ol"},"ICMP"),(0,i.kt)("li",{parentName:"ol"},"IGMP (IGMPv1, IGMPv2 and IGMPv3 are supported)"),(0,i.kt)("li",{parentName:"ol"},"IPSec AH & ESP - parsing only (no editing capabilities)"),(0,i.kt)("li",{parentName:"ol"},"SIP"),(0,i.kt)("li",{parentName:"ol"},"SDP"),(0,i.kt)("li",{parentName:"ol"},"Radius"),(0,i.kt)("li",{parentName:"ol"},"DNS"),(0,i.kt)("li",{parentName:"ol"},"DHCP"),(0,i.kt)("li",{parentName:"ol"},"BGP (v4)"),(0,i.kt)("li",{parentName:"ol"},"NTP (v3, v4)"),(0,i.kt)("li",{parentName:"ol"},"SSH - parsing only (no editing capabilities)"),(0,i.kt)("li",{parentName:"ol"},"HTTP headers (request & response)"),(0,i.kt)("li",{parentName:"ol"},"SSL/TLS - parsing only (no editing capabilities)"),(0,i.kt)("li",{parentName:"ol"},"Packet trailer (a.k.a footer or padding)"),(0,i.kt)("li",{parentName:"ol"},"Generic payload")),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,"PcapPlusPlus is released under the ",(0,i.kt)("a",{parentName:"p",href:"https://unlicense.org/"},"Unlicense license"),"."))}h.isMDXComponent=!0}}]);