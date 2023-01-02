"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[7254],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=d(a),m=n,c=k["".concat(p,".").concat(m)]||k[m]||u[m]||l;return a?r.createElement(c,i(i({ref:t},s),{},{components:a})):r.createElement(c,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6197:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={title:"\u6709\u8da3\u7684Docker\u955c\u50cf\u6536\u85cf",tags:["Docker"],authors:["7Wate"],date:new Date("2023-01-02T11:12:16.000Z")},i=void 0,o={permalink:"/blog/\u6709\u8da3\u7684Docker\u955c\u50cf\u6536\u85cf",source:"@site/blog/\u6709\u8da3\u7684Docker\u955c\u50cf\u6536\u85cf.md",title:"\u6709\u8da3\u7684Docker\u955c\u50cf\u6536\u85cf",description:"Portainer\u53ef\u89c6\u5316\u7ba1\u7406\u9762\u677f",date:"2023-01-02T11:12:16.000Z",formattedDate:"2023\u5e741\u67082\u65e5",tags:[{label:"Docker",permalink:"/blog/tags/docker"}],readingTime:12.695,hasTruncateMarker:!1,authors:[{name:"\u65f6\u5149's",title:"For Freedom",url:"https://blog.w2aa.ga",imageURL:"https://cdn.staticaly.com/gh/xiaowansm5/img@master/\u65f6\u5149.54dv9r8g4dk0.jpg",key:"7Wate"}],frontMatter:{title:"\u6709\u8da3\u7684Docker\u955c\u50cf\u6536\u85cf",tags:["Docker"],authors:["7Wate"],date:"2023-01-02T11:12:16.000Z"},prevItem:{title:"\u5728GitHub\u4e2a\u4eba\u9875\u6dfb\u52a0\u4e00\u4e2a\u6709\u8da3\u7684\u8d2a\u5403\u86c7\u52a8\u753b",permalink:"/blog/\u5728GitHub\u4e2a\u4eba\u9875\u6dfb\u52a0\u4e00\u4e2a\u6709\u8da3\u7684\u8d2a\u5403\u86c7\u52a8\u753b"},nextItem:{title:"\u81ea\u5efaProxy\u6765\u53cd\u4ee3Telegram Bot API",permalink:"/blog/\u81ea\u5efaProxy\u6765\u53cd\u4ee3Telegram Bot API"}},p={authorsImageUrls:[void 0]},d=[{value:"Portainer\u53ef\u89c6\u5316\u7ba1\u7406\u9762\u677f",id:"portainer\u53ef\u89c6\u5316\u7ba1\u7406\u9762\u677f",level:2},{value:"1. \u641c\u7d22portainer\u955c\u50cf",id:"1-\u641c\u7d22portainer\u955c\u50cf",level:3},{value:"2. \u62c9\u53d6portainer\u955c\u50cf",id:"2-\u62c9\u53d6portainer\u955c\u50cf",level:3},{value:"3. \u542f\u52a8portainer\u5bb9\u5668",id:"3-\u542f\u52a8portainer\u5bb9\u5668",level:3},{value:"4. docker ps\u67e5\u770b\u5bb9\u5668",id:"4-docker-ps\u67e5\u770b\u5bb9\u5668",level:3},{value:"5. \u6d4f\u89c8\u5668\u4e2dip+\u7aef\u53e3\u8bbf\u95ee",id:"5-\u6d4f\u89c8\u5668\u4e2dip\u7aef\u53e3\u8bbf\u95ee",level:3},{value:"Emby Server\u5f00\u5fc3\u7248",id:"emby-server\u5f00\u5fc3\u7248",level:2},{value:"Jellyfin\u5a92\u4f53\u670d\u52a1\u5668",id:"jellyfin\u5a92\u4f53\u670d\u52a1\u5668",level:2},{value:"FileBrowser\u6587\u4ef6\u7ba1\u7406\u5668",id:"filebrowser\u6587\u4ef6\u7ba1\u7406\u5668",level:2},{value:"CloudDrive",id:"clouddrive",level:2},{value:"zfile",id:"zfile",level:2},{value:"Alist",id:"alist",level:2},{value:"PanIndex",id:"panindex",level:2},{value:"PhotoPrism\u79c1\u6709\u5316\u4e2a\u4eba\u76f8\u518c",id:"photoprism\u79c1\u6709\u5316\u4e2a\u4eba\u76f8\u518c",level:2},{value:"nextcloud\u4e91\u76d8",id:"nextcloud\u4e91\u76d8",level:2},{value:"speedtest-x",id:"speedtest-x",level:2},{value:"wiki\u7ba1\u7406\u77e5\u8bc6\u7cfb\u7edf",id:"wiki\u7ba1\u7406\u77e5\u8bc6\u7cfb\u7edf",level:2},{value:"Calibre\u79c1\u4eba\u4e66\u5e93",id:"calibre\u79c1\u4eba\u4e66\u5e93",level:2},{value:"homeassitant\u667a\u80fd\u5bb6\u5c45\u5f00\u6e90\u7cfb\u7edf",id:"homeassitant\u667a\u80fd\u5bb6\u5c45\u5f00\u6e90\u7cfb\u7edf",level:2},{value:"Navidrome\u5f00\u6e90\u97f3\u4e50\u64ad\u653e\u670d\u52a1",id:"navidrome\u5f00\u6e90\u97f3\u4e50\u64ad\u653e\u670d\u52a1",level:2},{value:"\u4e00 Navidrome\u4ecb\u7ecd",id:"\u4e00-navidrome\u4ecb\u7ecd",level:3},{value:"1 \u4ec0\u4e48\u662fNavidrome",id:"1-\u4ec0\u4e48\u662fnavidrome",level:4},{value:"2 Navidrome\u7279\u70b9",id:"2-navidrome\u7279\u70b9",level:4},{value:"3 Subsonic API \u652f\u6301\u7684\u529f\u80fd",id:"3-subsonic-api-\u652f\u6301\u7684\u529f\u80fd",level:4},{value:"4 \u652f\u6301\u7684\u5e94\u7528",id:"4-\u652f\u6301\u7684\u5e94\u7528",level:4},{value:"\u4e8c \u90e8\u7f72",id:"\u4e8c-\u90e8\u7f72",level:3},{value:"\u5b89\u5353app",id:"\u5b89\u5353app",level:4},{value:"Uptime Kuma\u7ad9\u70b9\u76d1\u63a7\u5de5\u5177",id:"uptime-kuma\u7ad9\u70b9\u76d1\u63a7\u5de5\u5177",level:2},{value:"\u9879\u76ee\u4ecb\u7ecd",id:"\u9879\u76ee\u4ecb\u7ecd",level:3},{value:"\u4e0b\u8f7d\u5b89\u88c5",id:"\u4e0b\u8f7d\u5b89\u88c5",level:3},{value:"docker\u90e8\u7f72aria2-pro\u540e\u7aef",id:"docker\u90e8\u7f72aria2-pro\u540e\u7aef",level:2},{value:"\u9879\u76ee\u5730\u5740",id:"\u9879\u76ee\u5730\u5740",level:3},{value:"\u57fa\u7840\u4f7f\u7528",id:"\u57fa\u7840\u4f7f\u7528",level:3}],s={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"portainer\u53ef\u89c6\u5316\u7ba1\u7406\u9762\u677f"},"Portainer\u53ef\u89c6\u5316\u7ba1\u7406\u9762\u677f"),(0,n.kt)("p",null,"portainer\u662f\u4e00\u6b3e\u5bb9\u5668\u7ba1\u7406",(0,n.kt)("a",{parentName:"p",href:"https://so.csdn.net/so/search?q=%E5%8F%AF%E8%A7%86%E5%8C%96&spm=1001.2101.3001.7020"},"\u53ef\u89c6\u5316"),"\u754c\u9762\uff0c\u4e0d\u60f3\u5728\u865a\u62df\u4e2d\u4f7f\u7528\u547d\u4ee4\u7ba1\u7406\u5bb9\u5668\u7684\u5c0f\u4f19\u4f34\uff0c\u53ef\u4ee5\u9009\u62e9\u5b89\u88c5portainer\u5bf9\u5bb9\u5668\u8fdb\u884c\u7ba1\u7406\uff0c\u67e5\u770b\u65e5\u5fd7\u3001\u542f\u52a8\u3001\u505c\u6b62\u5bb9\u5668\u7b49\u975e\u5e38\u65b9\u4fbf\u3002"),(0,n.kt)("h3",{id:"1-\u641c\u7d22portainer\u955c\u50cf"},"1. \u641c\u7d22portainer\u955c\u50cf"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker search portainer\n")),(0,n.kt)("h3",{id:"2-\u62c9\u53d6portainer\u955c\u50cf"},"2. \u62c9\u53d6portainer\u955c\u50cf"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker pull lihaixin/portainer\n")),(0,n.kt)("h3",{id:"3-\u542f\u52a8portainer\u5bb9\u5668"},"3. \u542f\u52a8portainer\u5bb9\u5668"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# \u542f\u52a8\u955c\u50cf\ndocker run -d -p 9000:9000 --restart=always \\\n-v /var/run/docker.sock:/var/run/docker.sock \\\n--name portainer lihaixin/portainer\n")),(0,n.kt)("h3",{id:"4-docker-ps\u67e5\u770b\u5bb9\u5668"},"4. docker ps\u67e5\u770b\u5bb9\u5668"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker ps\n# \u67e5\u770b\u65e5\u5fd7\ndocker logs -f portainer\n")),(0,n.kt)("h3",{id:"5-\u6d4f\u89c8\u5668\u4e2dip\u7aef\u53e3\u8bbf\u95ee"},"5. \u6d4f\u89c8\u5668\u4e2dip+\u7aef\u53e3\u8bbf\u95ee"),(0,n.kt)("p",null,"\u9996\u6b21\u767b\u5f55\uff0c\u9700\u8981\u4f60\u521b\u5efa\u7ba1\u7406\u5458admin\u7684\u5bc6\u7801\uff0c"),(0,n.kt)("h2",{id:"emby-server\u5f00\u5fc3\u7248"},"Emby Server\u5f00\u5fc3\u7248"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run \\\n--network=bridge \\\n-p '8096:8096' \\\n-p '8920:8920' \\\n-p '1900:1900/udp' \\\n-p '7359:7359/udp' \\\n-v /data/emby:/config \\\n-v /data/downloads/:/data \\\n-v /home/wwang/wang:/media \\\n-e TZ=\"Asia/Shanghai\" \\\n--device /dev/dri:/dev/dri \\\n-e UID=0 \\\n-e GID=0 \\\n-e GIDLIST=0 \\\n--restart always \\\n-e HTTP_PROXY=\"http://\u4f60\u7684\u4ee3\u7406IP:\u4f60\u7684\u4ee3\u7406\u7aef\u53e3/\" \\\n-e HTTPS_PROXY=\"http://\u4f60\u7684\u4ee3\u7406IP:\u4f60\u7684\u4ee3\u7406\u7aef\u53e3/\" \\\n--name emby \\\n-d lovechen/embyserver:latest\n")),(0,n.kt)("h2",{id:"jellyfin\u5a92\u4f53\u670d\u52a1\u5668"},"Jellyfin\u5a92\u4f53\u670d\u52a1\u5668"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker pull jellyfin/jellyfin\ndocker run -d -p 8096:8096 -v /jellyfin/config:/config -v /home/wwang/wang:/media jellyfin/jellyfin\n")),(0,n.kt)("h2",{id:"filebrowser\u6587\u4ef6\u7ba1\u7406\u5668"},"FileBrowser\u6587\u4ef6\u7ba1\u7406\u5668"),(0,n.kt)("p",null,"filebrowser \u662f\u4e00\u4e2a\u4f7f\u7528go\u8bed\u8a00\u7f16\u5199\u7684\u8f6f\u4ef6\uff0c\u529f\u80fd\u662f\u53ef\u4ee5\u901a\u8fc7\u6d4f\u89c8\u5668\u5bf9\u670d\u52a1\u5668\u4e0a\u7684\u6587\u4ef6\u8fdb\u884c\u7ba1\u7406\u3002\u53ef\u4ee5\u662f\u4fee\u6539\u6587\u4ef6\uff0c\u6216\u8005\u662f\u6dfb\u52a0\u5220\u9664\u6587\u4ef6\uff0c\u751a\u81f3\u53ef\u4ee5\u5206\u4eab\u6587\u4ef6\uff0c\u662f\u4e00\u4e2a\u5f88\u68d2\u7684\u6587\u4ef6\u7ba1\u7406\u5668\uff0c\u4f60\u751a\u81f3\u53ef\u4ee5\u5f53\u6210\u4e00\u4e2a\u7f51\u76d8\u6765\u4f7f\u7528\u3002\u603b\u4e4b\u4f7f\u7528\u975e\u5e38\u7b80\u5355\u65b9\u4fbf\uff0c\u529f\u80fd\u5f88\u5f3a\u5927\u3002"),(0,n.kt)("p",null,"1.\u62c9\u53d6\u955c\u50cf"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker pull filebrowser/filebrowser\n")),(0,n.kt)("p",null,"2.\u521b\u5efa\u6240\u9700\u6587\u4ef6\u5939"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mkdir ~/filebrowser_data\n")),(0,n.kt)("p",null,"3.\u8fd0\u884c\u5bb9\u5668"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run \\\n-v /home/wwang/wang:/srv \\\n-p 8088:80 \\\n--restart=always \\\nfilebrowser/filebrowser\n")),(0,n.kt)("p",null,"\u8def\u5f84\u4e0e\u7aef\u53e3\u542b\u4e49\n/home/wwang/wang #\u6b32\u6302\u8f7d\u7684\u5bbf\u4e3b\u673a\u76ee\u5f55\uff0c\u6587\u4ef6\u7ba1\u7406\u5c06\u4ee5\u8fd9\u4e2a\u76ee\u5f55\u4f5c\u4e3a\u6839\u76ee\u5f55\u3002\n8088\uff1a\u8bbf\u95ee\u7aef\u53e3"),(0,n.kt)("h2",{id:"clouddrive"},"CloudDrive"),(0,n.kt)("p",null,"CloudDrive \u662f\u4e00\u6b3e\u53ef\u4ee5\u5c06 115\u3001",(0,n.kt)("a",{parentName:"p",href:"https://www.zhihu.com/search?q=%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2335129295%7D"},"\u963f\u91cc\u4e91\u76d8"),"\u3001\u5929\u7ffc\u4e91\u76d8\u3001\u6c83\u5bb6\u4e91\u76d8\u3001WebDAV \u6302\u8f7d\u5230\u7535\u8111\u4e2d\uff0c\u6210\u4e3a\u672c\u5730\u786c\u76d8\u7684\u5de5\u5177\uff0c\u652f\u6301 Windows \u4e0e Docker \u90e8\u7f72\uff0c\u4f7f\u7528\u7b80\u5355\uff0c\u626b\u7801\u767b\u5f55\uff08\u4e5f\u53ef\u4ee5refreshtoken\u767b\u5f55\uff09"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run -d \\\n  --name clouddrive \\\n  --privileged \\\n  --restart=unless-stopped \\\n  --device /dev/fuse:/dev/fuse \\\n  -v /mnt/sda1/CloudNAS/:/CloudNAS:shared \\\n  -v /mnt/sda1/CloudNAS/config:/config \\\n  -v /mnt/sda1/CloudNAS/media:/media:shared \\\n  -p 9798:9798 \\\n  cloudnas/clouddrive\n")),(0,n.kt)("h2",{id:"zfile"},"zfile"),(0,n.kt)("p",null,"\u6700\u65b9\u4fbf\u5feb\u6377\u7684\u5728\u7ebf\u76ee\u5f55\u5c55\u793a\u7a0b\u5e8f\uff0c\u652f\u6301\u5c06\u672c\u5730\u6587\u4ef6\u3001FTP\u3001SFTP\u3001S3\u3001OneDrive \u7b49\u5b58\u50a8\u5728\u7f51\u7ad9\u4e0a\u5c55\u793a\u5e76\u6d4f\u89c8."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run -d --name=zfile --restart=always \\\n    -p 8080:8080 \\\n    -v /root/zfile/db:/root/.zfile-v4/db \\\n    -v /root/zfile/logs:/root/.zfile-v4/logs \\\n    -v /root/zfile/file:/data/file \\\n    zhaojun1998/zfile\n")),(0,n.kt)("h2",{id:"alist"},"Alist"),(0,n.kt)("p",null,"\u4e00\u6b3e\u652f\u6301\u591a\u79cd\u5b58\u50a8\u7684\u76ee\u5f55\u6587\u4ef6\u5217\u8868\u7a0b\u5e8f\uff0c\u652f\u6301 web \u6d4f\u89c8\u4e0e webdav\uff0c\u540e\u7aef\u57fa\u4e8e",(0,n.kt)("inlineCode",{parentName:"p"},"gin"),"\uff0c\u524d\u7aef\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"react"),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 --name="alist" xhofe/alist:latest\n')),(0,n.kt)("h2",{id:"panindex"},"PanIndex"),(0,n.kt)("p",null,"\u4e00\u4e2a\u7b80\u6613\u7684\u7f51\u76d8\u76ee\u5f55\u5217\u8868."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'docker pull iicm/pan-index:latest\ndocker stop PanIndex\ndocker rm PanIndex\ndocker run -itd \\\n --restart=always \\\n --name PanIndex \\\n -p 5238:5238 \\\n -v /home/single/data/docker/data/PanIndex/data:/app/data \\\n -e PORT="5238" \\\n iicm/pan-index:latest\n')),(0,n.kt)("h2",{id:"photoprism\u79c1\u6709\u5316\u4e2a\u4eba\u76f8\u518c"},"PhotoPrism\u79c1\u6709\u5316\u4e2a\u4eba\u76f8\u518c"),(0,n.kt)("p",null,"PhotoPrism\u662f\u4e00\u4e2a\u5f00\u6e90\uff0c\u652f\u6301\u79c1\u6709\u5316\u90e8\u7f72\u7684\u4e2a\u4eba\u4e91",(0,n.kt)("a",{parentName:"p",href:"https://www.smzdm.com/fenlei/xiangce/"},"\u76f8\u518c"),"\u3002\u901a\u8fc7ai\u9a71\u52a8\u7684\u65b9\u5f0f\u5bf9\u76f8\u518c\u8fdb\u884c\u5206\u7c7b\uff0c\u6253\u6807\u7b7e\uff0c\u5305\u542b\u5730\u5740\uff0c\u4eba\u8138\u8bc6\u522b\u7b49\u529f\u80fd\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'docker run -d \\\n  --name photoprism \\\n  --security-opt seccomp=unconfined \\\n  --security-opt apparmor=unconfined \\\n  -p 2342:2342 \\\n  -e PHOTOPRISM_UPLOAD_NSFW="true" \\\n  -e PHOTOPRISM_ADMIN_PASSWORD="password" \\\n  -v /photoprism/storage \\\n  -v /home/wwang/tupian:/photoprism/originals \\\n  photoprism/photoprism\n')),(0,n.kt)("h2",{id:"nextcloud\u4e91\u76d8"},"nextcloud\u4e91\u76d8"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run -d --name nextcloud -p 80:80 -v /root/nextcloud:/data rootlogin/nextcloud\n")),(0,n.kt)("h2",{id:"speedtest-x"},"speedtest-x"),(0,n.kt)("p",null,"\u4e00\u4e2a\u975e\u5e38\u8f7b\u5de7\u7684\u7f51\u7ad9\u6d4b\u901f\u5de5\u5177"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"#\u5b89\u88c5speedtest-x\ndocker pull badapple9/speedtest-x\n\n#\u8fd0\u884c\u5bb9\u5668\ndocker run -d -p 9999:80 --restart=always -it badapple9/speedtest-x\n")),(0,n.kt)("h2",{id:"wiki\u7ba1\u7406\u77e5\u8bc6\u7cfb\u7edf"},"wiki\u7ba1\u7406\u77e5\u8bc6\u7cfb\u7edf"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run -d \\\n  --name=dokuwiki \\\n  -e PUID=1000 \\\n  -e PGID=1000 \\\n  -e TZ=Asia/Shanghai \\\n  -p 8887:80 \\\n  -p 443:443 `#optional` \\\n  -v /mnt/user/appdata/dokuwiki/config:/config \\\n  --restart unless-stopped \\\nlscr.io/linuxserver/dokuwiki:latest\n")),(0,n.kt)("h2",{id:"calibre\u79c1\u4eba\u4e66\u5e93"},"Calibre\u79c1\u4eba\u4e66\u5e93"),(0,n.kt)("p",null,"calibre-web\u6709\u4e24\u4e2a\u6bd4\u8f83\u5e38\u7528\u7684\u955c\u50cf"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"technosoft2000/calibre-web\u4e0elinuxserver/calibre-web\n2000\u7248\u5728linuxserver\u7248\u57fa\u7840\u4e0a\u505a\u4e86\u4e00\u70b9\u4fee\u6539\uff0c\u4f46\u662f\u66f4\u65b0\u8f83\u5c11\uff0c\u6bd5\u7adf\u662f\u4e2a\u4eba\u4f5c\u54c1\n\u6211\u4f7f\u7528\u4e862000\u7248\uff0c\u5927\u5bb6\u53ef\u4ee5\u914c\u60c5\u9009\u62e9\uff0c\u5982\u679c\u4f7f\u7528linuxserver\u7248\u4f1a\u7a0d\u5fae\u6709\u4e00\u4e9b\u4e0d\u540c\uff0c\u6211\u90fd\u5199\u51fa\u6765\ndocker pull technosoft2000/calibre-web\ndocker pull linuxserver/calibre-web\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run -d \\\n--name calibre-web \\\n-p 8083:8083 \\\n-v /srv/dev-disk-by-label-data/dockers/calibre-web:/calibre-web \\\n-v /srv/dev-disk-by-label-data/dockers/calibre-web/config:/calibre-web/config \\\n-v /srv/dev-disk-by-label-data/dockers/calibre-web/app:/calibre-web/app \\\n-v /srv/dev-disk-by-label-data/dockers/calibre-web/kindlegne:/calibre-web/kindlegen \\\n-v /srv/dev-disk-by-label-data/books:/books \\\n-e PUID=1000 \\\n-e PGID=1000 \\\ntechnosoft2000/calibre-web\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run -d \\\n--name calibre-web \\\n-p 8083:8083 \\\n-v /srv/dev-disk-by-label-data/dockers/calibre-web/config:/config \\\n-v /srv/dev-disk-by-label-data/books:/books \\\n-e PUID=1000 \\\n-e PGID=1000 \\\nlinuxserver/calibre-web\n")),(0,n.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u4e13\u7528\u76ee\u5f55/srv/dev-disk-by-id-ata/book \uff0c\u7528samba\u5171\u4eab\u51fa\u6765\uff0c"),(0,n.kt)("p",null,"\u5728windows\u4e0a\u6620\u5c04\u6210\u672c\u5730\u78c1\u76d8z: pc\u7248\u7ba1\u7406\u6570\u636e\u5e93\uff0c"),(0,n.kt)("p",null,"\u5728z:\u521b\u5efa\u4e00\u4e2a\u4e66\u5e93 calibre-web\u662fdocker\u7aef\uff0c\u914d\u7f6e /srv/dev-disk-by-id-ata/book : /books"),(0,n.kt)("p",null,"\u542f\u52a8\u5bb9\u5668\u540e\uff0c\u6253\u5f00web\u9875\u9762\u4f1a\u586b\u8def\u5f84\u5c31\u662f/books"),(0,n.kt)("p",null,"\u8fd9\u6837\uff0c\u5ba2\u6237\u7aef\u4e0eweb\u7aef\u7ba1\u7406\u7684\u662f\u540c\u4e00\u4e2a\u4e66\u57ce\u6570\u636e\u5e93\u4e86\u3002"),(0,n.kt)("p",null,"\u5728pc\u5ba2\u6237\u7aef\u4e0a\u6dfb\u52a0\u7684\u4e66\u7c4d\u5728web\u7aef\u4e5f\u53ef\u4ee5\u67e5\u770b\u5e76\u7ba1\u7406"),(0,n.kt)("p",null,"web\u7aef\u7684\u4f18\u70b9\u5c31\u662f\u8fd9\u4e2a\u670d\u52a1\u662f7*24\u7684"),(0,n.kt)("h2",{id:"homeassitant\u667a\u80fd\u5bb6\u5c45\u5f00\u6e90\u7cfb\u7edf"},"homeassitant\u667a\u80fd\u5bb6\u5c45\u5f00\u6e90\u7cfb\u7edf"),(0,n.kt)("p",null,"HomeAssistant\u662f\u6784\u5efa\u667a\u6167\u7a7a\u95f4\u7684\u795e\u5668\u3002\u662f\u4e00\u4e2a\u6210\u719f\u5b8c\u6574\u7684\u57fa\u4e8e Python \u7684\u667a\u80fd\u5bb6\u5c45\u7cfb\u7edf\uff0c\u8bbe\u5907\u652f\u6301\u5ea6\u9ad8\uff0c\u652f\u6301\u81ea\u52a8\u5316\uff08Automation)\u3001\u7fa4\u7ec4\u5316\uff08Group\uff09\u3001UI \u5ba2\u5236\u5316\uff08Theme) \u7b49\u7b49\u9ad8\u5ea6\u5b9a\u5236\u5316\u8bbe\u7f6e\u3002\u540c\u6837\u5b9e\u73b0\u8bbe\u5907\u7684 Siri \u63a7\u5236\u3002\u57fa\u4e8eHomeAssistant\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u8fde\u63a5\u5404\u79cd\u5916\u90e8\u8bbe\u5907\uff08\u667a\u80fd\u8bbe\u5907\u3001\u6444\u50cf\u5934\u3001\u90ae\u4ef6\u3001\u77ed\u6d88\u606f\u3001\u4e91\u670d\u52a1\u7b49\uff0c\u6210\u719f\u7684\u53ef\u8fde\u63a5\u7ec4\u4ef6\u6709\u8fd1\u5343\u79cd\uff09\uff0c\u624b\u52a8\u6216\u6309\u7167\u81ea\u5df1\u7684\u9700\u6c42\u81ea\u52a8\u5316\u5730\u8054\u52a8\u8fd9\u4e9b\u5916\u90e8\u8bbe\u5907\uff0c\u6784\u5efa\u968f\u5fc3\u6240\u6b32\u7684\u667a\u6167\u7a7a\u95f4\u3002HomeAssistant\u662f\u5f00\u6e90\u7684\uff0c\u5b83\u4e0d\u5c5e\u4e8e\u4efb\u4f55\u5546\u4e1a\u516c\u53f8\uff0c\u7528\u6237\u53ef\u4ee5\u65e0\u507f\u4f7f\u7528\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'#\u62c9\u53d6HomeAssistant\u7684\u6700\u65b0\u7248\u955c\u50cf(\u6ce8\u610f\uff1a\u6839\u636e\u81ea\u5df1\u9700\u6c42\u9009\u62e9\u5bf9\u5e94\u7248\u672c\uff0c\u5e76\u4e0d\u662f\u8d8a\u65b0\u8d8a\u597d)\ndocker pull homeassistant/home-assistant:latest\n#\u521b\u5efa\u5bb9\u5668\u5e76\u8fd0\u884c\ndocker run -d --name="hass" -v /home/hass/config:/config -p 8123:8123 -p homeassistant/home-assistant:latest\n\n\u89e3\u91ca:\n-d\uff1a\u8868\u793a\u5728\u540e\u53f0\u8fd0\u884c\n\u2013name\uff1a\u7ed9\u5bb9\u5668\u8bbe\u7f6e\u4e00\u4e2a\u540d\u79f0\uff0c\u7528\u4e8e\u8bc6\u522b\uff0c\u8fd9\u91cc\u8d77\u540d\u53eb\u505ahass\n-v\uff1a\u914d\u7f6e\u76ee\u5f55\u6620\u5c04\uff08\u5bb9\u5668\u5185\u7684\u6307\u5b9a\u76ee\u5f55\u76f4\u63a5\u6620\u5c04\u5230\u672c\u5730\u4e3b\u673a\u7684\u5bf9\u5e94\u76ee\u5f55\uff0c\u6bd4\u5982\u4e0a\u9762\u90a3\u53e5\u547d\u4ee4\uff0c\u610f\u601d\u5c31\u662f\u5c06\u5bb9\u5668\u91cchass\u7684 config \u76ee\u5f55\u6620\u5c04\u5230 /home/hass/config \u8fd9\u4e2a\u76ee\u5f55\u91cc\u9762\uff09\n-p\uff1a\u6620\u5c04\u7aef\u53e3\uff08\u5c06\u5bb9\u5668\u5185\u76848123\u7aef\u53e3\u76f4\u63a5\u6620\u5c04\u5230\u7269\u7406\u673a\u76848123\u7aef\u53e3\uff0c\u8fd9\u6837\u670d\u52a1\u5668\u7684IP\u5730\u5740+\u7aef\u53e3\u53f7\u5373\u53ef\u8bbf\u95eehass\u9875\u9762\uff09\n\u6700\u540e\u5c31\u662f\u8fd0\u884c\u521a\u624d\u4e0b\u8f7d\u7684\u5bb9\u5668\u955c\u50cf\u4e86\uff0c\u5bf9\u4e8e\u5176\u4ed6\u7684\u7248\u672c\u4e86\uff0c\u6ce8\u610f\u8981\u52a0\u4e0atag,\u907f\u514d\u81ea\u52a8\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u3002\n')),(0,n.kt)("h2",{id:"navidrome\u5f00\u6e90\u97f3\u4e50\u64ad\u653e\u670d\u52a1"},"Navidrome\u5f00\u6e90\u97f3\u4e50\u64ad\u653e\u670d\u52a1"),(0,n.kt)("h3",{id:"\u4e00-navidrome\u4ecb\u7ecd"},"\u4e00 Navidrome\u4ecb\u7ecd"),(0,n.kt)("h4",{id:"1-\u4ec0\u4e48\u662fnavidrome"},"1 \u4ec0\u4e48\u662fNavidrome"),(0,n.kt)("p",null,"\u901a\u8fc7\u67e5\u8be2\u5b98\u7f51\u4ecb\u7ecd\uff0cNavidrome \u662f\u4e00\u4e2a\u81ea\u6258\u7ba1\u7684\u5f00\u6e90\u97f3\u4e50",(0,n.kt)("a",{parentName:"p",href:"https://www.smzdm.com/fenlei/fuwuqi/"},"\u670d\u52a1\u5668"),"\u548c\u6d41\u5a92\u4f53\u3002\u5b83\u8ba9\u60a8\u53ef\u4ee5\u81ea\u7531\u5730\u4ece\u4efb\u4f55\u6d4f\u89c8\u5668\u6216\u79fb\u52a8\u8bbe\u5907\u6536\u542c\u60a8\u7684\u97f3\u4e50\u6536\u85cf\u3002\u5b83\u8fd8\u53ef\u4ee5\u7528\u4f5c\u8f7b\u91cf\u7ea7\u7684 Subsonic-API \u517c\u5bb9\u670d\u52a1\u5668\uff0c\u53ef\u4ee5\u4e0e\u4efb\u4f55 \u517c\u5bb9 Subsonic \u7684\u5ba2\u6237\u7aef\u4e00\u8d77\u4f7f\u7528\u3002"),(0,n.kt)("h4",{id:"2-navidrome\u7279\u70b9"},"2 Navidrome\u7279\u70b9"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5904\u7406\u975e\u5e38\u5927\u7684\u97f3\u4e50\u6536\u85cf"),(0,n.kt)("li",{parentName:"ul"},"\u6d41\u5f0f\u4f20\u8f93\u51e0\u4e4e\u4efb\u4f55\u53ef\u7528\u7684\u97f3\u9891\u683c\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u5e76\u4f7f\u7528\u60a8\u7cbe\u5fc3\u7b56\u5212\u7684\u6240\u6709\u5143\u6570\u636e\uff08id3 \u6807\u7b7e\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u591a\u7528\u6237\uff0c\u6bcf\u4e2a\u7528\u6237\u90fd\u6709\u81ea\u5df1\u7684\u64ad\u653e\u6b21\u6570\u3001\u64ad\u653e\u5217\u8868\u3001\u6536\u85cf\u5939\u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u975e\u5e38\u4f4e\u7684\u8d44\u6e90\u4f7f\u7528\u7387\uff1a\u4f8b\u5982\uff1a\u5177\u6709 300GB\uff08~29000 \u9996\u6b4c\u66f2\uff09\u7684\u5e93\uff0c\u5b83\u4f7f\u7528\u4e0d\u5230 50MB \u7684 RAM"),(0,n.kt)("li",{parentName:"ul"},"\u591a\u5e73\u53f0\uff0c\u53ef\u5728 macOS\u3001Linux \u548c Windows \u4e0a\u8fd0\u884c\u3002\u8fd8\u63d0\u4f9b\u4e86 Docker \u955c\u50cf"),(0,n.kt)("li",{parentName:"ul"},"\u51c6\u5907\u4f7f\u7528 Raspberry Pi \u4e8c\u8fdb\u5236\u6587\u4ef6\u548c\u53ef\u7528\u7684 docker \u955c\u50cf"),(0,n.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u76d1\u89c6\u60a8\u7684\u5e93\u7684\u66f4\u6539\u3001\u5bfc\u5165\u65b0\u6587\u4ef6\u548c\u91cd\u65b0\u52a0\u8f7d\u65b0\u5143\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Material UI \u7684\u4e3b\u9898\u5316\u3001\u73b0\u4ee3\u548c\u54cd\u5e94\u5f0f Web \u754c\u9762\uff0c\u7528\u4e8e\u7ba1\u7406\u7528\u6237\u548c\u6d4f\u89c8\u60a8\u7684\u56fe\u4e66\u9986"),(0,n.kt)("li",{parentName:"ul"},"\u4e0e\u6240\u6709 Subsonic/Madsonic/Airsonic \u5ba2\u6237\u7aef\u517c\u5bb9\u3002\u67e5\u770b",(0,n.kt)("a",{parentName:"li",href:"https://www.navidrome.org/docs/overview/#apps"},"\u7ecf\u8fc7\u6d4b\u8bd5\u7684\u5ba2\u6237\u5217\u8868")),(0,n.kt)("li",{parentName:"ul"},"\u5373\u65f6\u8f6c\u7801/\u4e0b\u91c7\u6837\u3002\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u7528\u6237/\u73a9\u5bb6\u8bbe\u7f6e\u3002\u652f\u6301 Opus \u7f16\u7801"),(0,n.kt)("li",{parentName:"ul"},"\u96c6\u6210",(0,n.kt)("a",{parentName:"li",href:"https://www.smzdm.com/fenlei/yinpinbofangqi/"},"\u97f3\u4e50\u64ad\u653e\u5668"))),(0,n.kt)("h4",{id:"3-subsonic-api-\u652f\u6301\u7684\u529f\u80fd"},"3 Subsonic API \u652f\u6301\u7684\u529f\u80fd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u6807\u7b7e\u7684\u6d4f\u89c8/\u641c\u7d22"),(0,n.kt)("li",{parentName:"ul"},"\u64ad\u653e\u5217\u8868"),(0,n.kt)("li",{parentName:"ul"},"\u4e66\u7b7e\uff08\u7528\u4e8e\u6709\u58f0\u8bfb\u7269\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u51fa\u6f14\uff08\u6536\u85cf\uff09\u827a\u672f\u5bb6/\u4e13\u8f91/\u66f2\u76ee"),(0,n.kt)("li",{parentName:"ul"},"\u4e94\u661f\u7ea7"),(0,n.kt)("li",{parentName:"ul"},"\u8f6c\u7801"),(0,n.kt)("li",{parentName:"ul"},"\u83b7\u53d6/\u4fdd\u5b58\u64ad\u653e\u961f\u5217\uff08\u7ee7\u7eed\u5728\u4e0d\u540c\u7684\u8bbe\u5907\u4e0a\u6536\u542c\uff09"),(0,n.kt)("li",{parentName:"ul"},"Last.fm \u548c ListenBrainz \u641c\u522e"),(0,n.kt)("li",{parentName:"ul"},"\u6765\u81ea Last.fm \u7684\u827a\u672f\u5bb6\u7b80\u5386"),(0,n.kt)("li",{parentName:"ul"},"\u6765\u81ea",(0,n.kt)("a",{parentName:"li",href:"https://www.navidrome.org/docs/usage/external-integrations/#spotify"},"Spotify \u7684"),"\u827a\u672f\u5bb6\u56fe\u50cf",(0,n.kt)("a",{parentName:"li",href:"https://www.navidrome.org/docs/usage/external-integrations/#spotify"},"\uff08\u9700\u8981\u914d\u7f6e\uff09")),(0,n.kt)("li",{parentName:"ul"},"\u6b4c\u8bcd\uff08\u6765\u81ea\u5d4c\u5165\u6807\u7b7e\uff09")),(0,n.kt)("h4",{id:"4-\u652f\u6301\u7684\u5e94\u7528"},"4 \u652f\u6301\u7684\u5e94\u7528"),(0,n.kt)("p",null,"\u9664\u4e86\u53ef\u4ee5\u4f7f\u7528\u642d\u5efa\u7684\u7f51\u9875\u7aef Web UI\uff0cNavidrome \u8fd8\u53ef\u4ee5\u4e0e\u4ee5\u4e0b\u6240\u6709 Subsonic \u5ba2\u6237\u7aef\u517c\u5bb9\u3002\u4ee5\u4e0b\u5ba2\u6237\u7aef\u7ecf\u8fc7\u6d4b\u8bd5\u5e76\u786e\u8ba4\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"iOS\uff1aplay:Sub\u3001 substreamer\u3001 Amperfy\u548c iSub")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5b89\u5353\uff1aDSub\uff0c Subtracks\uff0c substreamer\uff0c Ultrasonic\u548c Audinaut")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7f51\u7edc\uff1aSubplayer\u3001 Airsonic Refix\u3001 Aurial\u3001 Jamstash\u548c Subfire")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u684c\u9762\uff1aSublime Music (Linux) \u548cSonixd (Windows/Linux/macOS)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"CLI\uff1aJellycli (Windows/Linux) \u548cSTMP (Linux/macOS)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8fde\u63a5\u7684\u626c\u58f0\u5668\uff1a"),(0,n.kt)("p",{parentName:"li"},"Sonos: bonob")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Alexa\uff1aAskSonic")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5176\u4ed6\uff1a"),(0,n.kt)("p",{parentName:"li"},"Subsonic Kodi \u63d2\u4ef6\u3001 Navidrome Kodi \u63d2\u4ef6\u3001 HTTP\u76ee\u5f55\u6587\u4ef6\u7cfb\u7edf"))),(0,n.kt)("h3",{id:"\u4e8c-\u90e8\u7f72"},"\u4e8c \u90e8\u7f72"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run -d --name navidrome --restart=unless-stopped --user $(id -u):$(id -g) \n-v /home/wwang/wang/music:/music \n-v /root/navidrome:/data -p 4533:4533 \n-e ND_LOGLEVEL=info deluan/navidrome:latest\n")),(0,n.kt)("p",null,"\u6ce8\u610f\uff1a\u4e24\u4e2a\u76ee\u5f55\u90fd\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u60c5\u51b5\u53bb\u6539\n-v /srv/dev-disk-by-label-data/musics/navidrome:/music \t\t\t# \u97f3\u4e50\u7684\u5b58\u653e\u8def\u5f84\n-v /srv/dev-disk-by-label-data/dockers/navidrome/data:/data\t\t# \u914d\u7f6e\u6587\u4ef6\u5b58\u653e\u76ee\u5f55"),(0,n.kt)("p",null,"\u97f3\u4e50\u6587\u4ef6\u5b58\u653e\u7684\u6587\u4ef6\u5939\u590d\u5236\u97f3\u4e50\u6587\u4ef6\u8fdb\u53bb\u65f6\u4f1a\u63d0\u793a\u6743\u9650\u4e0d\u591f\uff0c\u5728\u7ec8\u7aef\u8f93\u5165\uff1a\nsudo chmod -R 777 /srv"),(0,n.kt)("h4",{id:"\u5b89\u5353app"},"\u5b89\u5353app"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/ultrasonic/ultrasonic/releases"},"https://github.com/ultrasonic/ultrasonic/releases")),(0,n.kt)("h2",{id:"uptime-kuma\u7ad9\u70b9\u76d1\u63a7\u5de5\u5177"},"Uptime Kuma\u7ad9\u70b9\u76d1\u63a7\u5de5\u5177"),(0,n.kt)("h3",{id:"\u9879\u76ee\u4ecb\u7ecd"},"\u9879\u76ee\u4ecb\u7ecd"),(0,n.kt)("p",null,"Uptime Kuma[",(0,n.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/427095857#ref_1"},"1","]")," \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u76d1\u63a7\u5de5\u5177\uff0c\u529f\u80fd\u7c7b\u4f3c\u4e8e Uptime Robot\u3002\u76f8\u8f83\u4e8e\u5176\u5b83\u540c\u7c7b\u5de5\u5177\uff0cUptime Kuma \u652f\u6301\u81ea\u6258\u7ba1\u670d\u52a1\uff0c\u5e76\u4e14\u9650\u5236\u66f4\u5c11\u3002\u672c\u6587\u5c06\u4ecb\u7ecd Uptime Kuma \u7684\u5b89\u88c5\u548c\u4f7f\u7528\u65b9\u6cd5\u3002"),(0,n.kt)("h3",{id:"\u4e0b\u8f7d\u5b89\u88c5"},"\u4e0b\u8f7d\u5b89\u88c5"),(0,n.kt)("p",null,"\u76ee\u524d Uptime Kuma \u6700\u65b0\u7248\u672c\u4e3a 1.8.0\uff0c\u652f\u6301\u4f7f\u7528 Docker \u5b89\u88c5\uff0c\u4ee5\u4e0b\u662f\u6211\u7684\u5b89\u88c5\u6b65\u9aa4\u3002"),(0,n.kt)("p",null,"\u521b\u5efa\u5de5\u4f5c\u76ee\u5f55\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /opt/uptime-kuma \n")),(0,n.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u670d\u52a1\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --restart=always -p 3001:3001 -v /opt/uptime-kuma/data:/app/data --name uptime-kuma louislam/uptime-kuma \n")),(0,n.kt)("p",null,"\u670d\u52a1\u542f\u52a8\u540e\uff0c\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"http://{ip}:3001")," \u8fdb\u884c\u8bbf\u95ee\u3002"),(0,n.kt)("h2",{id:"docker\u90e8\u7f72aria2-pro\u540e\u7aef"},"docker\u90e8\u7f72aria2-pro\u540e\u7aef"),(0,n.kt)("h3",{id:"\u9879\u76ee\u5730\u5740"},"\u9879\u76ee\u5730\u5740"),(0,n.kt)("p",null,"GitHub: ",(0,n.kt)("a",{parentName:"p",href:"https://p3terx.com/go/aHR0cHM6Ly9naXRodWIuY29tL1AzVEVSWC9kb2NrZXItYXJpYTItcHJv"},"https://github.com/P3TERX/docker-aria2-pro")),(0,n.kt)("p",null,"Docker Hub: ",(0,n.kt)("a",{parentName:"p",href:"https://p3terx.com/go/aHR0cHM6Ly9odWIuZG9ja2VyLmNvbS9yL3AzdGVyeC9hcmlhMi1wcm8"},"https://hub.docker.com/r/p3terx/aria2-pro")),(0,n.kt)("p",null,"\u8d85\u8be6\u7ec6\u6559\u7a0b\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://p3terx.com/archives/docker-aria2-pro.html"},"https://p3terx.com/archives/docker-aria2-pro.html")),(0,n.kt)("h3",{id:"\u57fa\u7840\u4f7f\u7528"},"\u57fa\u7840\u4f7f\u7528"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6700\u57fa\u672c\u7684\u542f\u52a8\u547d\u4ee4\u5982\u4e0b\uff0c\u4f60\u53ea\u9700\u8981\u5b8c\u6574\u66ff\u6362",(0,n.kt)("inlineCode",{parentName:"li"},"<TOKEN>"),"\u5b57\u6bb5(RPC\u5bc6\u94a5)\u5373\u53ef\u542f\u52a8\u3002\u66f4\u5f3a\u5927\u7684\u529f\u80fd\u8bf7\u9605\u8bfb\u540e\u6587\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-none"},"docker run -d \\\n    --name aria2-pro \\\n    --restart unless-stopped \\\n    --log-opt max-size=1m \\\n    --network host \\\n    -e PUID=$UID \\\n    -e PGID=$GID \\\n    -e RPC_SECRET=<TOKEN> \\\n    -e RPC_PORT=6800 \\\n    -e LISTEN_PORT=6888 \\\n    -v $PWD/aria2-config:/config \\\n    -v $PWD/aria2-downloads:/downloads \\\n    p3terx/aria2-pro\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u672c\u673a\u9632\u706b\u5899\u5f00\u653e\u5fc5\u8981\u7684\u5165\u7ad9\u7aef\u53e3\uff0c\u5185\u7f51\u673a\u5668\u5728\u8def\u7531\u5668\u8bbe\u7f6e\u7aef\u53e3\u8f6c\u53d1\u5230\u76f8\u540c\u7aef\u53e3\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4f60\u559c\u6b22\u7684 WebUI \u6216 App \u8fdb\u884c\u8fde\u63a5\uff0c\u5f3a\u70c8\u63a8\u8350 ",(0,n.kt)("a",{parentName:"li",href:"https://p3terx.com/archives/aria2-frontend-ariang-tutorial.html"},"AriaNg"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f53\u9a8c\u9ad8\u901f\u8fdc\u7a0b\u79bb\u7ebf\u4e0b\u8f7d\u7684\u4e50\u8da3\u3002")))}u.isMDXComponent=!0}}]);