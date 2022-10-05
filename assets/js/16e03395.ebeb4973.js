"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[3075],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1054:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),i=a(2232);const r=function(e){let{relativePath:t,children:a}=e;return n.createElement("a",{href:(0,i.E2)()+t},a)}},2232:(e,t,a)=>{a.d(t,{E2:()=>d,K7:()=>s,Wx:()=>c,hv:()=>r,kq:()=>l,rU:()=>u,s6:()=>o,u$:()=>p,vR:()=>m});var n=a(143);const i="https://github.com/seladb/PcapPlusPlus";function r(){return i}function l(){const e=(0,n.yW)(),t=(0,n.zu)();return"Next"===t.label?e.label:t.label}function s(e){return`${i}/releases/tag/${e}`}function o(){return s(l())}function p(){return`${i}/archive/${l()}.zip`}function c(){return`${i}/archive/${l()}.tar.gz`}function d(){const e=(0,n.zu)(),t="Next"===e.label?"master":e.label;return`${i}/tree/${t}`}function u(){return`${i}/archive/master.zip`}function m(){return`${i}/archive/master.tar.gz`}},2168:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),i=a(2232);const r=function(e){let{versionString:t}=e;return n.createElement("a",{href:(0,i.s6)()},t||`${(0,i.kq)()} release`)}},4366:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(7462),i=(a(7294),a(3905)),r=a(2168),l=a(1054);const s={sidebar_position:1},o="Part 1: Introduction And Basics",p={unversionedId:"tutorials/intro",id:"version-v22.05/tutorials/intro",title:"Part 1: Introduction And Basics",description:"Library structure",source:"@site/versioned_docs/version-v22.05/tutorials/intro.mdx",sourceDirName:"tutorials",slug:"/tutorials/intro",permalink:"/docs/tutorials/intro",draft:!1,editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v22.05/tutorials/intro.mdx",tags:[],version:"v22.05",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Tutorials",permalink:"/docs/tutorials"},next:{title:"Part 2: Read/Write Pcap Files",permalink:"/docs/tutorials/read-write-pcap"}},c={},d=[{value:"Library structure",id:"library-structure",level:2},{value:"Packet++",id:"packet",level:3},{value:"Pcap++",id:"pcap",level:3},{value:"Common++",id:"common",level:3},{value:"Packets and Layers",id:"packets-and-layers",level:2},{value:"Raw packets vs. Parsed packets",id:"raw-packets-vs-parsed-packets",level:3},{value:"Layers",id:"layers",level:3},{value:"Packet and Layers schematic structure",id:"packet-and-layers-schematic-structure",level:3},{value:"Packet capture engines",id:"packet-capture-engines",level:2},{value:"Writing a simple app including a makefile",id:"writing-a-simple-app-including-a-makefile",level:2},{value:"Windows Makefile",id:"windows-makefile",level:3},{value:"Linux, MacOS, FreeBSD Makefile",id:"linux-macos-freebsd-makefile",level:3},{value:"Writing a simple app in Visual Studio",id:"writing-a-simple-app-in-visual-studio",level:2},{value:"Running the example",id:"running-the-example",level:2}],u={toc:d};function m(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"part-1-introduction-and-basics"},"Part 1: Introduction And Basics"),(0,i.kt)("h2",{id:"library-structure"},"Library structure"),(0,i.kt)("p",null,"As you could probably already notice, PcapPlusPlus is built of 3 libraries: Common++, Packet++ and Pcap++. Let's describes the purposes of each one and its main classes:"),(0,i.kt)("h3",{id:"packet"},"Packet++"),(0,i.kt)("p",null,"A library for parsing, creating and editing packets of various ",(0,i.kt)("a",{parentName:"p",href:"../features#supported-network-protocols"},"supported protocols"),". This library can be used stand-alone and doesn't depend on Pcap++, libpcap/WinPcap/Npcap, etc. Main classes and utilities:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"RawPacket")," - representing the raw data captured from the network"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Layer")," - the base class for all protocol layers. Each protocol layer is in-charge of parsing the specific bytes in the packet that belong to this protocol"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Packet")," - representing a packet that was parsed by the different PcapPlusPlus protocol parsers and contains the different protocol layers"),(0,i.kt)("li",{parentName:"ol"},"Protocol layers (for example: ",(0,i.kt)("inlineCode",{parentName:"li"},"EthLayer, IPv4Layer, IPv6Layer, TcpLayer, UdpLayer, DnsLayer, HttpRequestLayer, HttpResponseLayer, PayloadLayer"),", etc.) - classes representing specific protocol parsers. All inherit the ",(0,i.kt)("inlineCode",{parentName:"li"},"Layer")," class"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"PacketUtils")," - a class containing several widely used utilities such as calculating a hash value based on 5-tuple or 2-tuple"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"TcpReassembly")," - a class for providing TCP reassembly (a.k.a TCP reconstruction) of TCP streams"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"IPv4Reassembly")," - a class for providing IPv4 reassembly (a.k.a IPv4 de-fragmentation) of IPv4 packets")),(0,i.kt)("h3",{id:"pcap"},"Pcap++"),(0,i.kt)("p",null,"A library for intercepting and sending packets, providing network and NIC info, stats, etc. This library is mostly a C++ wrapper for packet capturing engines such as libpcap, WinPcap, Npcap, DPDK and PF_RING, but also provide some unique features and capabilities that doesn't exist in any of these engines. Main classes and utilities:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"PcapLiveDevice")," - representing a Linux/MacOS/FreeBSD network interface and enables capturing and sending packets as well as retrieving interface information. Also available for rooted Android devices"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"WinPcapLiveDevice")," - representing a Windows network interface and contains all functionality exposed in ",(0,i.kt)("inlineCode",{parentName:"li"},"PcapLiveDevice"),". This class actually inherits ",(0,i.kt)("inlineCode",{parentName:"li"},"PcapLiveDevice")," and does the relevant adjustments for WinPcap/Npcap and Windows OS"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"DpdkDevice")," - representing a DPDK-enabled network interface and wraps DPDK basic functionality for capturing and sending packets as well as retrieving interface information"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"PfRingDevice")," - representing PF_RING-enabled network interface and wraps PF_RING functionality for capturing and sending packets as well as retrieving interface information"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"PcapRemoteDevice")," - representing a network interface on a remote machine and enables to capture and send packets on this interface using the rpcap protocol. This class actually wraps ",(0,i.kt)("a",{parentName:"li",href:"https://www.winpcap.org/docs/docs_412/html/group__remote.html"},"WinPcap's Remote Capture")," capabilities and so available only on Windows"),(0,i.kt)("li",{parentName:"ol"},"pcap and pcap-ng file readers and writers (",(0,i.kt)("inlineCode",{parentName:"li"},"PcapFileReaderDevice, PcapFileWriterDevice, PcapNgFileReaderDevice, PcapNgFileWriterDevice, IFileReaderDevice, IFileWriterDevice"),")"),(0,i.kt)("li",{parentName:"ol"},"Packet filtering engine - a C++ API for the ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Berkeley_Packet_Filter"},"BPF (Berkeley Packet Filter)")," format for easy-to-use packet filtering from a network interface or pcap/pcap-ng file"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"NetworkUtils")," - a class containing common and basic actions requiring network interaction such as discovery of a remote machine MAC address by sending ARP requests, discovery of IPv4 address from a host-name (by sending DNS requests), and so on")),(0,i.kt)("h3",{id:"common"},"Common++"),(0,i.kt)("p",null,"A library containing common code utilities and classes used by both Packet++ and Pcap++. Main classes and utilities:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"IPv4Address, IPv6Address")," - classes representing IPv4 and IPv6 addresses accordingly"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"MacAddress")," - a class representing a MAC (Ethernet) address"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"IpUtils.h")," - all kinds of helpful network utilities"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"LoggerPP")," - a simple logging infrastructure used widely in PcapPlusPlus"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SystemUtils.h")," - several useful utilities for interaction with the operating system")),(0,i.kt)("h2",{id:"packets-and-layers"},"Packets and Layers"),(0,i.kt)("p",null,"Parsing and crafting of packets is one of the fundamentals of PcapPlusPlus and the heart of the Packet++ library. We'll dive deep into it later, but first let's understand the basic structures as everything else is built on that."),(0,i.kt)("h3",{id:"raw-packets-vs-parsed-packets"},"Raw packets vs. Parsed packets"),(0,i.kt)("p",null,"There are 2 types of packets in PcapPlusPlus: ",(0,i.kt)("strong",{parentName:"p"},"raw packets")," and ",(0,i.kt)("strong",{parentName:"p"},"parsed packets"),". A raw packet is the raw byte-stream that was captured from the network together with the timestamp it was captured on. A raw packet doesn't contain any data about the protocols it's built from and of course protocol data can't be added, removed or edited. On the other hand, parsed packets are packets that contain all protocol data and can be edited per protocol. This reveals one of the core functionalities of PcapPlusPlus: taking raw packets that were captured from the network and create parsed packets out of them, meaning identifying their protocols, saving meta data about these protocols, and allowing the user easy access to all of this parsed data for both reading and writing (edit, add data and remove data)."),(0,i.kt)("h3",{id:"layers"},"Layers"),(0,i.kt)("p",null,"A layer in PcapPlusPlus means protocol layer. Parsed packets contain layers, each one represents a protocol the packet is built from. For example: an HTTP packet may contain an Ethernet layer, an IPv4 (or IPv6) layer, a TCP layer and an HTTP layer. Each supported protocol is represented by a corresponding layer class. A layer class exposes the protocol's data for the user to read and usually also to write or modify. For example: A TCP layer exposes all TCP fields like ports, flags, sequence numbers, TCP options, etc. and also allows editing of all of those fields and also adding/removing/editing TCP options. Layers inside a parsed packet are ordered in a link list so the parsed packet actually points only to the first (lowest) layer (for example: Ethernet), this layer points to the next layer (for example: IPv4), and so on. A list of all supported protocols (and layers) can be found ",(0,i.kt)("a",{parentName:"p",href:"../features#supported-network-protocols"},"here"),"."),(0,i.kt)("h3",{id:"packet-and-layers-schematic-structure"},"Packet and Layers schematic structure"),(0,i.kt)("p",null,"In the following diagram you can see the relations between RawPackets, (parsed) Packets and Layers:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Packets and Layers",src:a(2644).Z,width:"1279",height:"426"})),(0,i.kt)("p",null,"As can be seen in this diagram, a Packet (= parsed packet) holds a pointer to the RawPacket object and to the first (lowest) Layer. Each Layer has pointers to the next layer and to the previous one."),(0,i.kt)("p",null,"It may be implied from this structure that the actual packet data (the raw byte stream) is duplicated between the raw packet and the various layers. This is not the case. We don't want to duplicate the data from various reasons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We don't want the packet object to take up too much memory"),(0,i.kt)("li",{parentName:"ul"},"We would like the avoid unnecessary data coping because it's expensive"),(0,i.kt)("li",{parentName:"ul"},"Since each layer can be edited, we would like the edited data to be written directly to the byte stream and not copied from one place to another")),(0,i.kt)("p",null,"So the raw byte stream is actually stored once, in the RawPacket object. The various layers only point to the relevant place where their data begins. Here is a diagram to visualize it:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Layers and Raw Data",src:a(3263).Z,width:"1297",height:"724"})),(0,i.kt)("p",null,"As you can see in this diagram, each layer points to the place in the raw data where its data starts. In this example: Ethernet Layer points to the beginning of the raw data because it is the first layer, so it actually sees all the raw data. On the other hand, IPv4 Layer points to the place where IPv4 data begins so it doesn't see the Ethernet data. UDP Layer points to the place where UDP data starts so it doesn't see the Ethernet and IPv4 data, and so on."),(0,i.kt)("p",null,'All of these structures and pointers are built by PcapPlusPlus packet parsing engine residing in the Packet class. When a Packet object is created it is given a RawPacket object (which is created by the capturing engine) and the parsing process begins by understanding which protocols the packet is built of and creating the relevant Layer objects. Another option is to create an "empty" Packet object which doesn\'t contain any raw data and start building the layers ourselves. In that case a RawPacket object will be created and gradually built.'),(0,i.kt)("h2",{id:"packet-capture-engines"},"Packet capture engines"),(0,i.kt)("p",null,"Capturing and sending packets is another fundamental principal in PcapPlusPlus and is the heart of the Pcap++ library. The idea is to provide a simple, easy-to-use and as similar as possible interface to capture and send packets from different types of packet capture engines. Different types can be files (pcap/pcap-ng), network interfaces via libpcap/WinPcap/Npcap, DPDK-enabled interfaces, PF_RING-enabled interfaces, etc. This is not always easy because the APIs and work-flows of the different engines is sometimes very different from one another and it's difficult to keep one flow who suits them all. Also, many of the engine have specific OS and platform requirements, and this is also a challenge. The engine families currently supported are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Files (pcap and pcap-ng)"),(0,i.kt)("li",{parentName:"ul"},"Network interfaces using libpcap or WinPcap/Npcap"),(0,i.kt)("li",{parentName:"ul"},"DPDK-enabled interfaces"),(0,i.kt)("li",{parentName:"ul"},"PF_RING-enabled interfaces"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.winpcap.org/docs/docs_412/html/group__remote.html"},"Remote packet capture"))),(0,i.kt)("p",null,'Each packet capture engine is represented in PcapPlusPlus in a class called "Device". All devices inherit from a common abstract parent class called ',(0,i.kt)("inlineCode",{parentName:"p"},"IPcapDevice")," which contains a few capabilities that are common for most devices such as opening/closing the device, gathering packet statistics, setting a filter, etc. The rest is implemented in each class."),(0,i.kt)("p",null,"The next parts of the tutorial will dive deep into the various device types and explain how to use them."),(0,i.kt)("h2",{id:"writing-a-simple-app-including-a-makefile"},"Writing a simple app including a makefile"),(0,i.kt)("p",null,"Creating applications using PcapPlusPlus is rather easy. Let's have a guided tour demonstrating how to create a simple application and its Makefile or Visual Studio project."),(0,i.kt)("p",null,"First let's make sure PcapPlusPlus is configured and built successfully. Please follow ",(0,i.kt)("a",{parentName:"p",href:"../install"},"the download page")," for building instructions."),(0,i.kt)("p",null,"Another option is to download a pre-compiled version of PcapPlusPlus, please download the ",(0,i.kt)(r.Z,{versionString:"latest release",mdxType:"ReleaseLink"})," for your platform and follow the instructions on how to configure it."),(0,i.kt)("p",null,"Now all we need is under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dist/")," directory. We can find the PcapPlusPlus libraries, header files under ",(0,i.kt)("inlineCode",{parentName:"p"},"Dist/header"),", compiled examples under ",(0,i.kt)("inlineCode",{parentName:"p"},"Dist/examples")," and helpful makefiles we'll going to use under ",(0,i.kt)("inlineCode",{parentName:"p"},"Dist/mk")),(0,i.kt)("p",null,"So let's write some code and put it in ",(0,i.kt)("inlineCode",{parentName:"p"},"main.cpp"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <IPv4Layer.h>\n#include <Packet.h>\n#include <PcapFileDevice.h>\n\nint main(int argc, char* argv[])\n{\n    // open a pcap file for reading\n    pcpp::PcapFileReaderDevice reader("1_packet.pcap");\n    if (!reader.open())\n    {\n        std::cerr << "Error opening the pcap file" << std::endl;\n        return 1;\n    }\n\n    // read the first (and only) packet from the file\n    pcpp::RawPacket rawPacket;\n    if (!reader.getNextPacket(rawPacket))\n    {\n        std::cerr << "Couldn\'t read the first packet in the file" << std::endl;\n        return 1;\n    }\n\n    // parse the raw packet into a parsed packet\n    pcpp::Packet parsedPacket(&rawPacket);\n\n    // verify the packet is IPv4\n    if (parsedPacket.isPacketOfType(pcpp::IPv4))\n    {\n        // extract source and dest IPs\n        pcpp::IPv4Address srcIP = parsedPacket.getLayerOfType<pcpp::IPv4Layer>()->getSrcIPv4Address();\n        pcpp::IPv4Address destIP = parsedPacket.getLayerOfType<pcpp::IPv4Layer>()->getDstIPv4Address();\n\n        // print source and dest IPs\n        std::cout\n          << "Source IP is \'" << srcIP << "\'; "\n          << "Dest IP is \'" << destIP << "\'"\n          << std::endl;\n    }\n\n    // close the file\n    reader.close();\n\n    return 0;\n}\n')),(0,i.kt)("p",null,"This code does the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Opens a pcap file ("1_packet.pcap") containing only 1 packet'),(0,i.kt)("li",{parentName:"ol"},"Reads the packet"),(0,i.kt)("li",{parentName:"ol"},"Parses the packet (converting it from ",(0,i.kt)("inlineCode",{parentName:"li"},"RawPacket")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Packet"),")"),(0,i.kt)("li",{parentName:"ol"},"Extracts the IPv4 layer"),(0,i.kt)("li",{parentName:"ol"},"Reads the source and destination IPs and prints them to console")),(0,i.kt)("p",null,"This code is rather simple. Now let's see how to write a ",(0,i.kt)("inlineCode",{parentName:"p"},"Makefile")," so this app compiles successfully:"),(0,i.kt)("h3",{id:"windows-makefile"},"Windows Makefile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-makefile"},"include ../../../Dist/mk/PcapPlusPlus.mk\n\n# All Target\nall:\n    g++.exe $(PCAPPP_INCLUDES) -c -o main.o main.cpp\n    g++.exe $(PCAPPP_LIBS_DIR) -static-libgcc -static-libstdc++ -o Tutorial-LiveTraffic.exe main.o $(PCAPPP_LIBS)\n\n# Clean Target\nclean:\n    del main.o\n    del Tutorial-LiveTraffic.exe\n")),(0,i.kt)("h3",{id:"linux-macos-freebsd-makefile"},"Linux, MacOS, FreeBSD Makefile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-makefile"},"include /usr/local/etc/PcapPlusPlus.mk\n\n# All Target\nall:\n    g++ $(PCAPPP_INCLUDES) -c -o main.o main.cpp\n    g++ $(PCAPPP_LIBS_DIR) -static-libstdc++ -o Tutorial-HelloWorld main.o $(PCAPPP_LIBS)\n\n# Clean Target\nclean:\n    rm main.o\n    rm Tutorial-HelloWorld\n")),(0,i.kt)("p",null,"Now let's explore the ",(0,i.kt)("inlineCode",{parentName:"p"},"PcapPlusPlus.mk")," makefile - it contains variables that encapsulate all we need in order to compile your application with PcapPlusPlus:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"PCAPPP_INCLUDES")," - all the include files that are needed for compilation"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"PCAPPP_LIBS_DIR")," - the location of all external libraries needed for compiling and linking with PcapPlusPlus"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"PCAPPP_LIBS")," - all external libraries needed for compiling and linking with PcapPlusPlus"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"PCAPPLUSPLUS_HOME")," - PcapPlusPlus home directory")),(0,i.kt)("p",null,"As you can see we used most of these variables in the Makefiles we created. The only flags we added are for static linking: ",(0,i.kt)("inlineCode",{parentName:"p"},"-static-libstdc++")," for non-Windows and ",(0,i.kt)("inlineCode",{parentName:"p"},"-static-libgcc -static-libstdc++")," for Windows (MinGW / MinGW-w64)."),(0,i.kt)("p",null,"Now that we have the code and the Makefile let's compile and run the code. Here is the output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Source IP is '10.0.0.138'; Dest IP is '10.0.0.1'\n")),(0,i.kt)("h2",{id:"writing-a-simple-app-in-visual-studio"},"Writing a simple app in Visual Studio"),(0,i.kt)("p",null,"So far we demonstrated how to compile using GNU compilers (",(0,i.kt)("inlineCode",{parentName:"p"},"g++"),"). Now let's explore how to do it in Visual Studio. We'll use the same code we wrote in the previous section and see how to build it using Visual Studio."),(0,i.kt)("p",null,"There are Visual Studio solution + VC projects for all tutorials under the ",(0,i.kt)("inlineCode",{parentName:"p"},"mk\\[vs_version]")," directory. ",(0,i.kt)("inlineCode",{parentName:"p"},"[vs_version]")," is the Visual Studio version you choose to work with out of the ",(0,i.kt)("a",{parentName:"p",href:"../platforms#-windows"},"supported Visual Studio versions")," and is determined while running PcapPlusPlus configuration script. I strongly advise to use them as a template for your Visual Studio projects. Let's examine the ",(0,i.kt)("strong",{parentName:"p"},"Tutorial-HelloWorld.vcxproj")," VC project:"),(0,i.kt)("p",null,"First of all let's take a look at the ",(0,i.kt)("strong",{parentName:"p"},"Property Manager"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Property Manager",src:a(3923).Z,width:"376",height:"665"})),(0,i.kt)("p",null,"You can see that we added a PcapPlusPlus property sheet file: ",(0,i.kt)("strong",{parentName:"p"},"PcapPlusPlusPropertySheet.props"),". This file contains paths to the PcapPlusPlus libraries and other external libraries PcapPlusPlus is using. This file is generated automatically when you run the PcapPlusPlus Visual Studio configuration file: ",(0,i.kt)("strong",{parentName:"p"},"configure-windows-visual-studio.bat")," and resides under ",(0,i.kt)("inlineCode",{parentName:"p"},"mk\\[vs_version]")," folder. Let's see the content of this file in my PC:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<Project ToolsVersion="4.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">\n  <ImportGroup Label="PropertySheets" />\n  <PropertyGroup Label="UserMacros">\n    <PcapPlusPlusHome>D:\\PcapPlusPlus</PcapPlusPlusHome>\n    <PcapSdkHome>D:\\WpdPack</PcapSdkHome>\n    <PThreadWin32Home>D:\\pthread-win32</PThreadWin32Home>\n  </PropertyGroup>\n  <PropertyGroup />\n  <ItemDefinitionGroup />\n  <ItemGroup />\n</Project>\n')),(0,i.kt)("p",null,"Now let's examine the project configuration changes:"),(0,i.kt)("p",null,"First, we added the relevant include directories:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Visual Studio Includes",src:a(517).Z,width:"821",height:"728"})),(0,i.kt)("p",null,"Also, we added the directories of PcapPlusPlus libraries and the external libraries PcapPlusPlus is using:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Visual Studio Libs Dir",src:a(7314).Z,width:"824",height:"772"})),(0,i.kt)("p",null,"Also, we added the PcapPlusPlus libraries and the external libraries PcapPlusPlus is using:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Visual Studio Libs",src:a(4569).Z,width:"824",height:"708"})),(0,i.kt)("p",null,"Another small configuration change is to instruct the compiler ",(0,i.kt)("strong",{parentName:"p"},"Not Using Precompiled Headers"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Visual Studio Precompiled Headers",src:a(1912).Z,width:"821",height:"595"})),(0,i.kt)("p",null,"Last thing is to add a post-build event to copy ",(0,i.kt)("strong",{parentName:"p"},"pthreadVC2.dll")," file from the pthread-win32 directory to our output directory:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Visual Studio Post Build Events",src:a(1220).Z,width:"971",height:"699"})),(0,i.kt)("p",null,"That's it! The project will now build successfully! Again, I strongly advise to use this tutorial project as a template for your Visual Studio projects, it's always easier that way (but that's my opinion)"),(0,i.kt)("h2",{id:"running-the-example"},"Running the example"),(0,i.kt)("p",null,"All code that was covered in this tutorial can be found ",(0,i.kt)(l.Z,{relativePath:"/Examples/Tutorials/Tutorial-HelloWorld",mdxType:"CodeLink"},"here"),". In order to compile and run the code please first download and compile PcapPlusPlus code or downloaded a pre-compiled version from the ",(0,i.kt)(r.Z,{mdxType:"ReleaseLink"}),". Then follow these instruction, according to your platform:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux, MacOS, FreeBSD - make sure PcapPlusPlus is installed (by running ",(0,i.kt)("strong",{parentName:"li"},"sudo make install")," in PcapPlusPlus main directory). Then either change the ",(0,i.kt)("inlineCode",{parentName:"li"},"Makefile.non_windows")," file name to ",(0,i.kt)("inlineCode",{parentName:"li"},"Makefile")," and run ",(0,i.kt)("inlineCode",{parentName:"li"},"make all"),", or run ",(0,i.kt)("inlineCode",{parentName:"li"},"make -f Makefile.non_windows all")),(0,i.kt)("li",{parentName:"ul"},"Windows using MinGW or MinGW-w64 - either change the ",(0,i.kt)("inlineCode",{parentName:"li"},"Makefile.windows")," file name to ",(0,i.kt)("inlineCode",{parentName:"li"},"Makefile")," and run ",(0,i.kt)("inlineCode",{parentName:"li"},"make all"),", or run ",(0,i.kt)("inlineCode",{parentName:"li"},"make -f Makefile.windows all")),(0,i.kt)("li",{parentName:"ul"},"Windows using Visual Studio - there is a Visual Studio solution containing all tutorials: ",(0,i.kt)("inlineCode",{parentName:"li"},"mk\\[vs_version]\\Tutorials.sln"),". Just open it and compile all tutorials")),(0,i.kt)("p",null,"In all options the compiled executable will be inside the tutorial directory (",(0,i.kt)("inlineCode",{parentName:"p"},"[PcapPlusPlus Folder]/Examples/Tutorials/Tutorial-HelloWorld"),")"))}m.isMDXComponent=!0},3263:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/LayersAndRawData-3a213dff5741ad9da3e77b633f386598.PNG"},2644:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PacketsAndLayers-f62731c335d72461fa99f4167efd45f7.PNG"},3923:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PropertyManager-1f725170073df8540a1fa3eb0d5e2543.PNG"},517:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/VS_Includes-7807aa18d275cdafdaee470683c1a692.PNG"},4569:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/VS_Libs-14f68d5e4d9cfe8d185ca1f02abdc9e3.PNG"},7314:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/VS_LibsDir-1201013a638adb47b3412985ca226b05.PNG"},1220:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/VS_PostBuildEvents-4ecdf3e394c81bbb1777730424a491d6.PNG"},1912:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/VS_PrecompiledHeaders-9942a4d162687c8c8dad60dbaabd44c1.PNG"}}]);