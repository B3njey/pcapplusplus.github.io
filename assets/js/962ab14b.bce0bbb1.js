"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[4333],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,k=u["".concat(o,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(k,s(s({ref:t},c),{},{components:a})):n.createElement(k,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1054:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(2232);const i=function(e){let{relativePath:t,children:a}=e;return n.createElement("a",{href:(0,r.E2)()+t},a)}},2232:(e,t,a)=>{a.d(t,{E2:()=>d,K7:()=>l,Wx:()=>c,hv:()=>i,kq:()=>s,rU:()=>u,s6:()=>o,u$:()=>p,vR:()=>h});var n=a(143);const r="https://github.com/seladb/PcapPlusPlus";function i(){return r}function s(){const e=(0,n.yW)(),t=(0,n.zu)();return"Next"===t.label?e.label:t.label}function l(e){return`${r}/releases/tag/${e}`}function o(){return l(s())}function p(){return`${r}/archive/${s()}.zip`}function c(){return`${r}/archive/${s()}.tar.gz`}function d(){const e=(0,n.zu)(),t="Next"===e.label?"master":e.label;return`${r}/tree/${t}`}function u(){return`${r}/archive/master.zip`}function h(){return`${r}/archive/master.tar.gz`}},2168:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(2232);const i=function(e){let{versionString:t}=e;return n.createElement("a",{href:(0,r.s6)()},t||`${(0,r.kq)()} release`)}},6198:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),i=a(2168),s=a(1054);const l={sidebar_position:1},o="Part 1: Introduction And Basics",p={unversionedId:"tutorials/intro",id:"tutorials/intro",title:"Part 1: Introduction And Basics",description:"Library structure",source:"@site/docs/tutorials/intro.mdx",sourceDirName:"tutorials",slug:"/tutorials/intro",permalink:"/docs/next/tutorials/intro",draft:!1,editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/docs/tutorials/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Tutorials",permalink:"/docs/next/tutorials"},next:{title:"Part 2: Read/Write Pcap Files",permalink:"/docs/next/tutorials/read-write-pcap"}},c={},d=[{value:"Library structure",id:"library-structure",level:2},{value:"Packet++",id:"packet",level:3},{value:"Pcap++",id:"pcap",level:3},{value:"Common++",id:"common",level:3},{value:"Packets and Layers",id:"packets-and-layers",level:2},{value:"Raw packets vs. Parsed packets",id:"raw-packets-vs-parsed-packets",level:3},{value:"Layers",id:"layers",level:3},{value:"Packet and Layers schematic structure",id:"packet-and-layers-schematic-structure",level:3},{value:"Packet capture engines",id:"packet-capture-engines",level:2},{value:"Writing a simple app",id:"writing-a-simple-app",level:2},{value:"Running the code",id:"running-the-code",level:2},{value:"Option 1: Install a pre-compiled version of PcapPlusPlus",id:"option-1-install-a-pre-compiled-version-of-pcapplusplus",level:3},{value:"Option 2: build the tutorials with PcapPlusPlus",id:"option-2-build-the-tutorials-with-pcapplusplus",level:3}],u={toc:d};function h(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"part-1-introduction-and-basics"},"Part 1: Introduction And Basics"),(0,r.kt)("h2",{id:"library-structure"},"Library structure"),(0,r.kt)("p",null,"As you could probably already notice, PcapPlusPlus is built of 3 libraries: Common++, Packet++ and Pcap++. Let's describes the purposes of each one and its main classes:"),(0,r.kt)("h3",{id:"packet"},"Packet++"),(0,r.kt)("p",null,"A library for parsing, creating and editing packets of various ",(0,r.kt)("a",{parentName:"p",href:"../features#supported-network-protocols"},"supported protocols"),". This library can be used stand-alone and doesn't depend on Pcap++, libpcap/WinPcap/Npcap, etc. Main classes and utilities:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"RawPacket")," - representing the raw data captured from the network"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Layer")," - the base class for all protocol layers. Each protocol layer is in-charge of parsing the specific bytes in the packet that belong to this protocol"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Packet")," - representing a packet that was parsed by the different PcapPlusPlus protocol parsers and contains the different protocol layers"),(0,r.kt)("li",{parentName:"ol"},"Protocol layers (for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"EthLayer, IPv4Layer, IPv6Layer, TcpLayer, UdpLayer, DnsLayer, HttpRequestLayer, HttpResponseLayer, PayloadLayer"),", etc.) - classes representing specific protocol parsers. All inherit the ",(0,r.kt)("inlineCode",{parentName:"li"},"Layer")," class"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"PacketUtils")," - a class containing several widely used utilities such as calculating a hash value based on 5-tuple or 2-tuple"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"TcpReassembly")," - a class for providing TCP reassembly (a.k.a TCP reconstruction) of TCP streams"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"IPv4Reassembly")," - a class for providing IPv4 reassembly (a.k.a IPv4 de-fragmentation) of IPv4 packets")),(0,r.kt)("h3",{id:"pcap"},"Pcap++"),(0,r.kt)("p",null,"A library for intercepting and sending packets, providing network and NIC info, stats, etc. This library is mostly a C++ wrapper for packet capturing engines such as libpcap, WinPcap, Npcap, DPDK and PF_RING, but also provide some unique features and capabilities that doesn't exist in any of these engines. Main classes and utilities:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"PcapLiveDevice")," - representing a Linux/MacOS/FreeBSD network interface and enables capturing and sending packets as well as retrieving interface information. Also available for rooted Android devices"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"WinPcapLiveDevice")," - representing a Windows network interface and contains all functionality exposed in ",(0,r.kt)("inlineCode",{parentName:"li"},"PcapLiveDevice"),". This class actually inherits ",(0,r.kt)("inlineCode",{parentName:"li"},"PcapLiveDevice")," and does the relevant adjustments for WinPcap/Npcap and Windows OS"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"DpdkDevice")," - representing a DPDK-enabled network interface and wraps DPDK basic functionality for capturing and sending packets as well as retrieving interface information"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"PfRingDevice")," - representing PF_RING-enabled network interface and wraps PF_RING functionality for capturing and sending packets as well as retrieving interface information"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"PcapRemoteDevice")," - representing a network interface on a remote machine and enables to capture and send packets on this interface using the rpcap protocol. This class actually wraps ",(0,r.kt)("a",{parentName:"li",href:"https://www.winpcap.org/docs/docs_412/html/group__remote.html"},"WinPcap's Remote Capture")," capabilities and so available only on Windows"),(0,r.kt)("li",{parentName:"ol"},"pcap and pcap-ng file readers and writers (",(0,r.kt)("inlineCode",{parentName:"li"},"PcapFileReaderDevice, PcapFileWriterDevice, PcapNgFileReaderDevice, PcapNgFileWriterDevice, IFileReaderDevice, IFileWriterDevice"),")"),(0,r.kt)("li",{parentName:"ol"},"Packet filtering engine - a C++ API for the ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Berkeley_Packet_Filter"},"BPF (Berkeley Packet Filter)")," format for easy-to-use packet filtering from a network interface or pcap/pcap-ng file"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"NetworkUtils")," - a class containing common and basic actions requiring network interaction such as discovery of a remote machine MAC address by sending ARP requests, discovery of IPv4 address from a host-name (by sending DNS requests), and so on")),(0,r.kt)("h3",{id:"common"},"Common++"),(0,r.kt)("p",null,"A library containing common code utilities and classes used by both Packet++ and Pcap++. Main classes and utilities:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"IPv4Address, IPv6Address")," - classes representing IPv4 and IPv6 addresses accordingly"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"MacAddress")," - a class representing a MAC (Ethernet) address"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"IpUtils.h")," - all kinds of helpful network utilities"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"LoggerPP")," - a simple logging infrastructure used widely in PcapPlusPlus"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SystemUtils.h")," - several useful utilities for interaction with the operating system")),(0,r.kt)("h2",{id:"packets-and-layers"},"Packets and Layers"),(0,r.kt)("p",null,"Parsing and crafting of packets is one of the fundamentals of PcapPlusPlus and the heart of the Packet++ library. We'll dive deep into it later, but first let's understand the basic structures as everything else is built on that."),(0,r.kt)("h3",{id:"raw-packets-vs-parsed-packets"},"Raw packets vs. Parsed packets"),(0,r.kt)("p",null,"There are 2 types of packets in PcapPlusPlus: ",(0,r.kt)("strong",{parentName:"p"},"raw packets")," and ",(0,r.kt)("strong",{parentName:"p"},"parsed packets"),". A raw packet is the raw byte-stream that was captured from the network together with the timestamp it was captured on. A raw packet doesn't contain any data about the protocols it's built from and of course protocol data can't be added, removed or edited. On the other hand, parsed packets are packets that contain all protocol data and can be edited per protocol. This reveals one of the core functionalities of PcapPlusPlus: taking raw packets that were captured from the network and create parsed packets out of them, meaning identifying their protocols, saving meta data about these protocols, and allowing the user easy access to all of this parsed data for both reading and writing (edit, add data and remove data)."),(0,r.kt)("h3",{id:"layers"},"Layers"),(0,r.kt)("p",null,"A layer in PcapPlusPlus means protocol layer. Parsed packets contain layers, each one represents a protocol the packet is built from. For example: an HTTP packet may contain an Ethernet layer, an IPv4 (or IPv6) layer, a TCP layer and an HTTP layer. Each supported protocol is represented by a corresponding layer class. A layer class exposes the protocol's data for the user to read and usually also to write or modify. For example: A TCP layer exposes all TCP fields like ports, flags, sequence numbers, TCP options, etc. and also allows editing of all of those fields and also adding/removing/editing TCP options. Layers inside a parsed packet are ordered in a link list so the parsed packet actually points only to the first (lowest) layer (for example: Ethernet), this layer points to the next layer (for example: IPv4), and so on. A list of all supported protocols (and layers) can be found ",(0,r.kt)("a",{parentName:"p",href:"../features#supported-network-protocols"},"here"),"."),(0,r.kt)("h3",{id:"packet-and-layers-schematic-structure"},"Packet and Layers schematic structure"),(0,r.kt)("p",null,"In the following diagram you can see the relations between RawPackets, (parsed) Packets and Layers:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Packets and Layers",src:a(2644).Z,width:"1279",height:"426"})),(0,r.kt)("p",null,"As can be seen in this diagram, a Packet (= parsed packet) holds a pointer to the RawPacket object and to the first (lowest) Layer. Each Layer has pointers to the next layer and to the previous one."),(0,r.kt)("p",null,"It may be implied from this structure that the actual packet data (the raw byte stream) is duplicated between the raw packet and the various layers. This is not the case. We don't want to duplicate the data from various reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We don't want the packet object to take up too much memory"),(0,r.kt)("li",{parentName:"ul"},"We would like the avoid unnecessary data coping because it's expensive"),(0,r.kt)("li",{parentName:"ul"},"Since each layer can be edited, we would like the edited data to be written directly to the byte stream and not copied from one place to another")),(0,r.kt)("p",null,"So the raw byte stream is actually stored once, in the RawPacket object. The various layers only point to the relevant place where their data begins. Here is a diagram to visualize it:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Layers and Raw Data",src:a(3263).Z,width:"1297",height:"724"})),(0,r.kt)("p",null,"As you can see in this diagram, each layer points to the place in the raw data where its data starts. In this example: Ethernet Layer points to the beginning of the raw data because it is the first layer, so it actually sees all the raw data. On the other hand, IPv4 Layer points to the place where IPv4 data begins so it doesn't see the Ethernet data. UDP Layer points to the place where UDP data starts so it doesn't see the Ethernet and IPv4 data, and so on."),(0,r.kt)("p",null,'All of these structures and pointers are built by PcapPlusPlus packet parsing engine residing in the Packet class. When a Packet object is created it is given a RawPacket object (which is created by the capturing engine) and the parsing process begins by understanding which protocols the packet is built of and creating the relevant Layer objects. Another option is to create an "empty" Packet object which doesn\'t contain any raw data and start building the layers ourselves. In that case a RawPacket object will be created and gradually built.'),(0,r.kt)("h2",{id:"packet-capture-engines"},"Packet capture engines"),(0,r.kt)("p",null,"Capturing and sending packets is another fundamental principal in PcapPlusPlus and is the heart of the Pcap++ library. The idea is to provide a simple, easy-to-use and as similar as possible interface to capture and send packets from different types of packet capture engines. Different types can be files (pcap/pcap-ng), network interfaces via libpcap/WinPcap/Npcap, DPDK-enabled interfaces, PF_RING-enabled interfaces, etc. This is not always easy because the APIs and work-flows of the different engines is sometimes very different from one another and it's difficult to keep one flow who suits them all. Also, many of the engine have specific OS and platform requirements, and this is also a challenge. The engine families currently supported are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Files (pcap and pcap-ng)"),(0,r.kt)("li",{parentName:"ul"},"Network interfaces using libpcap or WinPcap/Npcap"),(0,r.kt)("li",{parentName:"ul"},"DPDK-enabled interfaces"),(0,r.kt)("li",{parentName:"ul"},"PF_RING-enabled interfaces"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.winpcap.org/docs/docs_412/html/group__remote.html"},"Remote packet capture"))),(0,r.kt)("p",null,'Each packet capture engine is represented in PcapPlusPlus in a class called "Device". All devices inherit from a common abstract parent class called ',(0,r.kt)("inlineCode",{parentName:"p"},"IPcapDevice")," which contains a few capabilities that are common for most devices such as opening/closing the device, gathering packet statistics, setting a filter, etc. The rest is implemented in each class."),(0,r.kt)("p",null,"The next parts of the tutorial will dive deep into the various device types and explain how to use them."),(0,r.kt)("h2",{id:"writing-a-simple-app"},"Writing a simple app"),(0,r.kt)("p",null,"Creating applications using PcapPlusPlus is easy. Let's have a guided tour demonstrating how to create a simple application and its ",(0,r.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt"),"."),(0,r.kt)("p",null,"First let's make sure PcapPlusPlus is configured and built successfully. Please follow ",(0,r.kt)("a",{parentName:"p",href:"../install"},"the download page")," for building instructions."),(0,r.kt)("p",null,"Another option is to download a pre-compiled version of PcapPlusPlus, please download the ",(0,r.kt)(i.Z,{versionString:"latest release",mdxType:"ReleaseLink"})," for your platform and follow the instructions on how to configure and install it."),(0,r.kt)("p",null,"Now that PcapPlusPlus is installed on our system we're ready to start writing some code!"),(0,r.kt)("p",null,"So let's write this code in ",(0,r.kt)("inlineCode",{parentName:"p"},"main.cpp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <IPv4Layer.h>\n#include <Packet.h>\n#include <PcapFileDevice.h>\n\nint main(int argc, char* argv[])\n{\n    // open a pcap file for reading\n    pcpp::PcapFileReaderDevice reader("1_packet.pcap");\n    if (!reader.open())\n    {\n        std::cerr << "Error opening the pcap file" << std::endl;\n        return 1;\n    }\n\n    // read the first (and only) packet from the file\n    pcpp::RawPacket rawPacket;\n    if (!reader.getNextPacket(rawPacket))\n    {\n        std::cerr << "Couldn\'t read the first packet in the file" << std::endl;\n        return 1;\n    }\n\n    // parse the raw packet into a parsed packet\n    pcpp::Packet parsedPacket(&rawPacket);\n\n    // verify the packet is IPv4\n    if (parsedPacket.isPacketOfType(pcpp::IPv4))\n    {\n        // extract source and dest IPs\n        pcpp::IPv4Address srcIP = parsedPacket.getLayerOfType<pcpp::IPv4Layer>()->getSrcIPv4Address();\n        pcpp::IPv4Address destIP = parsedPacket.getLayerOfType<pcpp::IPv4Layer>()->getDstIPv4Address();\n\n        // print source and dest IPs\n        std::cout\n          << "Source IP is \'" << srcIP << "\'; "\n          << "Dest IP is \'" << destIP << "\'"\n          << std::endl;\n    }\n\n    // close the file\n    reader.close();\n\n    return 0;\n}\n')),(0,r.kt)("p",null,"This code does the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Opens a pcap file ("1_packet.pcap") containing only 1 packet'),(0,r.kt)("li",{parentName:"ol"},"Reads the packet"),(0,r.kt)("li",{parentName:"ol"},"Parses the packet (converting it from ",(0,r.kt)("inlineCode",{parentName:"li"},"RawPacket")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Packet"),")"),(0,r.kt)("li",{parentName:"ol"},"Extracts the IPv4 layer"),(0,r.kt)("li",{parentName:"ol"},"Reads the source and destination IPs and prints them to console")),(0,r.kt)("p",null,"This code is rather simple. Now let's write a ",(0,r.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt")," file to build this app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},'cmake_minimum_required(VERSION 3.12)\n\nproject(Tutorial-HelloWorld)\n\nadd_executable("${PROJECT_NAME}" main.cpp)\n\nfind_package(PcapPlusPlus REQUIRED)\n\n# We want to have the binary compiled in the same folder as the code\nset_target_properties("${PROJECT_NAME}" PROPERTIES RUNTIME_OUTPUT_DIRECTORY "${CMAKE_CURRENT_SOURCE_DIR}")\n\ntarget_link_libraries("${PROJECT_NAME}" PUBLIC PcapPlusPlus::Pcap++)\n')),(0,r.kt)("p",null,"Now that we have the code and the ",(0,r.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt")," we can build and run the code. Here is the output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Source IP is '10.0.0.138'; Dest IP is '10.0.0.1'\n")),(0,r.kt)("h2",{id:"running-the-code"},"Running the code"),(0,r.kt)("p",null,"All code that was covered in this tutorial can be found ",(0,r.kt)(s.Z,{relativePath:"/Examples/Tutorials/Tutorial-HelloWorld",mdxType:"CodeLink"},"here"),". In order to compile and run the code please choose one of these options:"),(0,r.kt)("h3",{id:"option-1-install-a-pre-compiled-version-of-pcapplusplus"},"Option 1: Install a pre-compiled version of PcapPlusPlus"),(0,r.kt)("p",null,"You can download and install PcapPlusPlus using one of the options mentioned in the ",(0,r.kt)("a",{parentName:"p",href:"../install"},"installation page"),"."),(0,r.kt)("p",null,"Once installed, download all of the files in the ",(0,r.kt)(s.Z,{relativePath:"/Examples/Tutorials/Tutorial-HelloWorld",mdxType:"CodeLink"},"tutorial folder")," and run CMake:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cmake -S . -B build\ncmake --build build\n")),(0,r.kt)("p",null,"The executable will be created in the same directory."),(0,r.kt)("admonition",{title:"Notes:",type:"tip"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"If you're running on Windows with MinGW you need to run cmake with ",(0,r.kt)("inlineCode",{parentName:"li"},'-G "MinGW Makefiles"')),(0,r.kt)("li",{parentName:"ol"},"If PcapPlusPlus is ",(0,r.kt)("strong",{parentName:"li"},"NOT")," installed in the default directory you may need to specify ",(0,r.kt)("inlineCode",{parentName:"li"},"CMAKE_PREFIX_PATH"),", for example:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"CMAKE_PREFIX_PATH=/my/pcapplusplus/path cmake -S . -B build\n")),"Or on Windows:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"set CMAKE_PREFIX_PATH=C:\\my\\pcapplusplus\\path\ncmake -S . -B build\n"))),(0,r.kt)("li",{parentName:"ol"},"On Windows you may also need to specify Npcap/WinPcap path in ",(0,r.kt)("inlineCode",{parentName:"li"},"CMAKE_PREFIX_PATH"),", for example:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"set CMAKE_PREFIX_PATH=C:\\my\\pcapplusplus\\path;C:\\my\\npcap\\path\ncmake -S . -B build\n"))))),(0,r.kt)("h3",{id:"option-2-build-the-tutorials-with-pcapplusplus"},"Option 2: build the tutorials with PcapPlusPlus"),(0,r.kt)("p",null,"If you're building PcapPlusPlus from source and would like to build the tutorials as well you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-DPCAPPP_BUILD_TUTORIALS=ON")," option.\nPlease refer to the ",(0,r.kt)("a",{parentName:"p",href:"../install#build-from-source"},"build from source page")," for more details (choose your platform page)."))}h.isMDXComponent=!0},3263:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/LayersAndRawData-3a213dff5741ad9da3e77b633f386598.PNG"},2644:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PacketsAndLayers-f62731c335d72461fa99f4167efd45f7.PNG"}}]);