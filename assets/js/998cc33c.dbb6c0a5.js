"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[3169],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=o(a),f=r,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1054:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(2232);const i=function(e){let{relativePath:t,children:a}=e;return n.createElement("a",{href:(0,r.E2)()+t},a)}},2232:(e,t,a)=>{a.d(t,{E2:()=>d,K7:()=>p,Wx:()=>c,hv:()=>i,kq:()=>l,rU:()=>u,s6:()=>s,u$:()=>o,vR:()=>f});var n=a(143);const r="https://github.com/seladb/PcapPlusPlus";function i(){return r}function l(){const e=(0,n.yW)(),t=(0,n.zu)();return"Next"===t.label?e.label:t.label}function p(e){return`${r}/releases/tag/${e}`}function s(){return p(l())}function o(){return`${r}/archive/${l()}.zip`}function c(){return`${r}/archive/${l()}.tar.gz`}function d(){const e=(0,n.zu)(),t="Next"===e.label?"master":e.label;return`${r}/tree/${t}`}function u(){return`${r}/archive/master.zip`}function f(){return`${r}/archive/master.tar.gz`}},2168:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(2232);const i=function(e){let{versionString:t}=e;return n.createElement("a",{href:(0,r.s6)()},t||`${(0,r.kq)()} release`)}},7341:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),i=a(2168),l=a(1054);const p={sidebar_position:2,title:"Part 2: Read/Write Pcap Files"},s="Part 2: Reading And Writing Pcap Files",o={unversionedId:"tutorials/read-write-pcap",id:"version-v22.05/tutorials/read-write-pcap",title:"Part 2: Read/Write Pcap Files",description:"Introduction",source:"@site/versioned_docs/version-v22.05/tutorials/read-write-pcap.mdx",sourceDirName:"tutorials",slug:"/tutorials/read-write-pcap",permalink:"/docs/tutorials/read-write-pcap",draft:!1,editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v22.05/tutorials/read-write-pcap.mdx",tags:[],version:"v22.05",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Part 2: Read/Write Pcap Files"},sidebar:"docs",previous:{title:"Part 1: Introduction And Basics",permalink:"/docs/tutorials/intro"},next:{title:"Part 3: Capture/Send Packets",permalink:"/docs/tutorials/capture-packets"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Reading and writing packets",id:"reading-and-writing-packets",level:2},{value:"Appending packets to existing files",id:"appending-packets-to-existing-files",level:2},{value:"Running the example",id:"running-the-example",level:2}],u={toc:d};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"part-2-reading-and-writing-pcap-files"},"Part 2: Reading And Writing Pcap Files"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"PcapPlusPlus supports 2 packet capture file formats: pcap and pcap-ng. Using an easy-to-use interface you can easily read and write packets from/to those file types"),(0,r.kt)("p",null,"Essentially there are 4 classes and 2 interfaces for that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PcapFileReaderDevice")," - read packets from pcap files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PcapNgFileReaderDevice")," - read packets from pcap-ng files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PcapFileWriterDevice")," - write packets to a pcap file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PcapNgFileWriterDevice")," - write packets to a pcap-ng file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IFileReaderDevice")," - a reader interface, implemented by both PcapFileReaderDevice and PcapNgFileReaderDevice"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IFileWriterDevice")," - a writer interface, implemented by both PcapFileWriterDevice and PcapNgFileWriterDevice")),(0,r.kt)("p",null,"In this tutorial we'll write a simple application that reads and writes packets from/to pcap and pcap-ng file."),(0,r.kt)("h2",{id:"reading-and-writing-packets"},"Reading and writing packets"),(0,r.kt)("p",null,'So let\'s start our application with a "main" method and a single include to "PcapFileDevice.h" which contains all the API for reading and writing packets from/to files'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include "stdlib.h"\n#include "PcapFileDevice.h"\n\n/**\n* main method of the application\n*/\nint main(int argc, char* argv[])\n{\n    // write your code here\n}\n')),(0,r.kt)("p",null,"Next thing would be to open a pcap file for reading. We'll assume we have a pcap file named \"input.pcap\" and we want to open it for reading. If we know it's a pcap file we can use the pcap reader class ",(0,r.kt)("inlineCode",{parentName:"p"},"PcapFileReaderDevice"),", and same for pcap-ng files we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"PcapNgFileReaderDevice")," class."),(0,r.kt)("p",null,"But PcapPlusPlus also contains an interface class that automatically identifies the file type by its extension and creates an interface instance which both classes implement, so you can use it without really knowing which class hides behind it. This interface is called ",(0,r.kt)("inlineCode",{parentName:"p"},"IFileReaderDevice"),". Let's use it in our application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// use the IFileReaderDevice interface to automatically identify file type (pcap/pcap-ng)\n// and create an interface instance that both readers implement\npcpp::IFileReaderDevice* reader = pcpp::IFileReaderDevice::getReader("input.pcap");\n\n// verify that a reader interface was indeed created\nif (reader == NULL)\n{\n    std::cerr << "Cannot determine reader for file type" << std::endl;\n    return 1;\n}\n')),(0,r.kt)("p",null,"As you can see we used the static method ",(0,r.kt)("inlineCode",{parentName:"p"},"pcpp::IFileReaderDevice::getReader()")," to create the interface."),(0,r.kt)("p",null,"Now let's open the reader for reading:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// open the reader for reading\nif (!reader->open())\n{\n    std::cerr << "Cannot open input.pcap for reading" << std::endl;\n    return 1;\n}\n')),(0,r.kt)("p",null,"Now we are ready to start reading packets from the file. But before we do that let's demonstrate using file writers as well. We'll open 2 file writers: one pcap writer and one pcap-ng writer. We'll write the packets we read from the reader to both writers."),(0,r.kt)("p",null,"Let's start by creating the pcap writer and open it for writing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// create a pcap file writer. Specify file name and link type of all packets that\n// will be written to it\npcpp::PcapFileWriterDevice pcapWriter("output.pcap", pcpp::LINKTYPE_ETHERNET);\n\n// try to open the file for writing\nif (!pcapWriter.open())\n{\n    std::cerr << "Cannot open output.pcap for writing" << std::endl;\n    return 1;\n}\n')),(0,r.kt)("p",null,'As you can see we need to specify in the constructor the file name ("output.pcap") and the link type of all packets that will be written to it. That\'s because the pcap file format can contain single link type per file.'),(0,r.kt)("p",null,"Now let's open the second writer that writes pcap-ng files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// create a pcap-ng file writer. Specify file name. Link type is not necessary because\n// pcap-ng files can store multiple link types in the same file\npcpp::PcapNgFileWriterDevice pcapNgWriter("output.pcapng");\n\n// try to open the file for writing\nif (!pcapNgWriter.open())\n{\n    std::cerr << "Cannot open output.pcapng for writing" << std::endl;\n    return 1;\n}\n')),(0,r.kt)("p",null,"You can notice that in this constructor there's no need to specify the link type. That's because pcap-ng files can store multiple link types in the same file."),(0,r.kt)("p",null,'Another cool feature in file readers is setting a BPF filter so only packets that match the filter will be read and the others will be ignored. Let\'s set a filter that will catch only packets with source or dest IP of "98.138.19.88":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// set a BPF filter for the reader - only packets that match the filter will be read\nif (!reader->setFilter("net 98.138.19.88"))\n{\n    std::cerr << "Cannot set filter for file reader" << std::endl;\n    return 1;\n}\n')),(0,r.kt)("p",null,"Now let's start a while loop where we'll read all the packets (that match the BPF filter) and write them to both writers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// the packet container\npcpp::RawPacket rawPacket;\n\n// a while loop that will continue as long as there are packets in the input file\n// matching the BPF filter\nwhile (reader->getNextPacket(rawPacket))\n{\n    // write each packet to both writers\n    pcapWriter.writePacket(rawPacket);\n    pcapNgWriter.writePacket(rawPacket);\n}\n")),(0,r.kt)("p",null,"We're done reading all packets that match the BPF filter and writing them to both writers."),(0,r.kt)("p",null,"Another feature I'd like to demonstrate is getting reader/writer statistics. These are basic stats that only count packets that were read/written successfully and those who weren't. Let's get stats from reader and both writers and print them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// create the stats object\npcpp::IPcapDevice::PcapStats stats;\n\n// read stats from reader and print them\nreader->getStatistics(stats);\nstd::cout << "Read " << stats.packetsRecv << " packets successfully and " << stats.packetsDrop << " packets could not be read" << std::endl;\n\n// read stats from pcap writer and print them\npcapWriter.getStatistics(stats);\nstd::cout << "Written " << stats.packetsRecv << " packets successfully to pcap writer and " << stats.packetsDrop << " packets could not be written" << std::endl;\n\n// read stats from pcap-ng writer and print them\npcapNgWriter.getStatistics(stats);\nstd::cout << "Written " << stats.packetsRecv << " packets successfully to pcap-ng writer and " << stats.packetsDrop << " packets could not be written" << std::endl;\n')),(0,r.kt)("p",null,"We're done reading and writing packets. The only thing left is closing the reader and writers. We also need to free the reader because it was created by the ",(0,r.kt)("inlineCode",{parentName:"p"},"pcpp::IFileReaderDevice::getReader()")," static method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// close reader\nreader->close();\n\n// close writers\npcapWriter.close();\npcapNgWriter.close();\n\n// free reader memory because it was created by pcpp::IFileReaderDevice::getReader()\ndelete reader;\n")),(0,r.kt)("p",null,"When running the application with the input.pcap file attached below, here is the output (on Windows):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"C:\\PcapPlusPlus\\Examples\\Tutorials\\Part2-PcapFiles>Part2-PcapFiles.exe\nRead 10 packets successfully and 0 packets could not be read\nWritten 10 packets successfully to pcap writer and 0 packets could not be written\nWritten 10 packets successfully to pcap-ng writer and 0 packets could not be written\n")),(0,r.kt)("p",null,'As you can see 10 packets were read successfully from the reader and written to both writers. Notice the original "input.pcap" file contains 28 packets, the reason not all of them were read is the BPF filter we set: only 10 out of the 28 packets matched the filter.'),(0,r.kt)("h2",{id:"appending-packets-to-existing-files"},"Appending packets to existing files"),(0,r.kt)("p",null,"PcapPlusPlus enables appending packets to existing pcap/pcap-ng files. This means that packets that you write won't overwrite the file but will be apppended to the existing packets in the file. This is a unique feature for PcapPlusPlus that is not supported in libpcap/WinPcap and required specific implementation outside of libpcap/WinPcap APIs. If you want to open a file writer in append mode all you need to do it to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"open(bool)"),' method overload and set it to "true", let\'s see an example:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// try to open the file for writing in append mode\nif (!pcapWriter.open(true))\n{\n    std::cerr << "Cannot open output.pcap for writing in append mode" << std::endl;\n    return 1;\n}\n')),(0,r.kt)("p",null,"That's it! file is now opened in append mode and will not be overridden."),(0,r.kt)("h2",{id:"running-the-example"},"Running the example"),(0,r.kt)("p",null,"All code that was covered in this tutorial can be found ",(0,r.kt)(l.Z,{relativePath:"/Examples/Tutorials/Tutorial-PcapFiles",mdxType:"CodeLink"},"here"),". In order to compile and run the code please first download and compile PcapPlusPlus code or downloaded a pre-compiled version from the ",(0,r.kt)(i.Z,{mdxType:"ReleaseLink"}),". Then follow these instruction, according to your platform:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux, MacOS, FreeBSD - make sure PcapPlusPlus is installed (by running ",(0,r.kt)("strong",{parentName:"li"},"sudo make install")," in PcapPlusPlus main directory). Then either change the ",(0,r.kt)("inlineCode",{parentName:"li"},"Makefile.non_windows")," file name to ",(0,r.kt)("inlineCode",{parentName:"li"},"Makefile")," and run ",(0,r.kt)("inlineCode",{parentName:"li"},"make all"),", or run ",(0,r.kt)("inlineCode",{parentName:"li"},"make -f Makefile.non_windows all")),(0,r.kt)("li",{parentName:"ul"},"Windows using MinGW or MinGW-w64 - either change the ",(0,r.kt)("inlineCode",{parentName:"li"},"Makefile.windows")," file name to ",(0,r.kt)("inlineCode",{parentName:"li"},"Makefile")," and run ",(0,r.kt)("inlineCode",{parentName:"li"},"make all"),", or run ",(0,r.kt)("inlineCode",{parentName:"li"},"make -f Makefile.windows all")),(0,r.kt)("li",{parentName:"ul"},"Windows using Visual Studio - there is a Visual Studio solution containing all tutorials: ",(0,r.kt)("inlineCode",{parentName:"li"},"mk\\[vs_version]\\Tutorials.sln"),". Just open it and compile all tutorials")),(0,r.kt)("p",null,"In all options the compiled executable will be inside the tutorial directory (",(0,r.kt)("inlineCode",{parentName:"p"},"[PcapPlusPlus Folder]/Examples/Tutorials/Tutorial-PcapFiles"),")"))}f.isMDXComponent=!0}}]);