"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8099],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),c=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=c(e.components);return l.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},k=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=c(t),u=a,d=k["".concat(o,".").concat(u)]||k[u]||s[u]||r;return t?l.createElement(d,p(p({ref:n},m),{},{components:t})):l.createElement(d,p({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,p=new Array(r);p[0]=k;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<r;c++)p[c]=t[c];return l.createElement.apply(null,p)}return l.createElement.apply(null,t)}k.displayName="MDXCreateElement"},77664:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var l=t(87462),a=(t(67294),t(3905));const r={id:"\u591a\u5b57\u8282\u5b57\u7b26",title:"\u591a\u5b57\u8282\u5b57\u7b26",sidebar_position:21,data:"2022\u5e743\u670830\u65e5"},p=void 0,i={unversionedId:"C/\u591a\u5b57\u8282\u5b57\u7b26",id:"C/\u591a\u5b57\u8282\u5b57\u7b26",title:"\u591a\u5b57\u8282\u5b57\u7b26",description:"\u672c\u7ae0\u4ecb\u7ecd C \u8bed\u8a00\u5982\u4f55\u5904\u7406\u975e\u82f1\u8bed\u5b57\u7b26\u3002",source:"@site/wiki/programming-language/C/\u591a\u5b57\u8282\u5b57\u7b26.md",sourceDirName:"C",slug:"/C/\u591a\u5b57\u8282\u5b57\u7b26",permalink:"/programming-language/C/\u591a\u5b57\u8282\u5b57\u7b26",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{id:"\u591a\u5b57\u8282\u5b57\u7b26",title:"\u591a\u5b57\u8282\u5b57\u7b26",sidebar_position:21,data:"2022\u5e743\u670830\u65e5"},sidebar:"tutorialSidebar",previous:{title:"\u547d\u4ee4\u884c\u73af\u5883",permalink:"/programming-language/C/\u547d\u4ee4\u884c\u73af\u5883"},next:{title:"assert.h",permalink:"/programming-language/C/lib \u6807\u51c6\u5e93/assert.h"}},o={},c=[{value:"Unicode \u7b80\u4ecb",id:"unicode-\u7b80\u4ecb",level:2},{value:"\u5b57\u7b26\u7684\u8868\u793a\u65b9\u6cd5",id:"\u5b57\u7b26\u7684\u8868\u793a\u65b9\u6cd5",level:2},{value:"\u591a\u5b57\u8282\u5b57\u7b26\u7684\u8868\u793a",id:"\u591a\u5b57\u8282\u5b57\u7b26\u7684\u8868\u793a",level:2},{value:"\u5bbd\u5b57\u7b26",id:"\u5bbd\u5b57\u7b26",level:2},{value:"\u591a\u5b57\u8282\u5b57\u7b26\u5904\u7406\u51fd\u6570",id:"\u591a\u5b57\u8282\u5b57\u7b26\u5904\u7406\u51fd\u6570",level:2},{value:"mblen()",id:"mblen",level:3},{value:"wctomb()",id:"wctomb",level:3},{value:"mbtowc()",id:"mbtowc",level:3},{value:"wcstombs()",id:"wcstombs",level:3},{value:"mbstowcs()",id:"mbstowcs",level:3}],m={toc:c};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u7ae0\u4ecb\u7ecd C \u8bed\u8a00\u5982\u4f55\u5904\u7406\u975e\u82f1\u8bed\u5b57\u7b26\u3002"),(0,a.kt)("h2",{id:"unicode-\u7b80\u4ecb"},"Unicode \u7b80\u4ecb"),(0,a.kt)("p",null,"C \u8bed\u8a00\u8bde\u751f\u65f6\uff0c\u53ea\u8003\u8651\u4e86\u82f1\u8bed\u5b57\u7b26\uff0c\u4f7f\u75287\u4f4d\u7684 ASCII \u7801\u8868\u793a\u6240\u6709\u5b57\u7b26\u3002ASCII \u7801\u7684\u8303\u56f4\u662f0\u5230127\uff0c\u4e5f\u5c31\u662f100\u591a\u4e2a\u5b57\u7b26\uff0c\u6240\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"char"),"\u7c7b\u578b\u53ea\u5360\u7528\u4e00\u4e2a\u5b57\u8282\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u5904\u7406\u975e\u82f1\u8bed\u5b57\u7b26\uff0c\u4e00\u4e2a\u5b57\u8282\u5c31\u4e0d\u591f\u4e86\uff0c\u5355\u5355\u662f\u4e2d\u6587\uff0c\u5c31\u81f3\u5c11\u6709\u51e0\u4e07\u4e2a\u5b57\u7b26\uff0c\u5b57\u7b26\u96c6\u5c31\u52bf\u5fc5\u4f7f\u7528\u591a\u4e2a\u5b57\u8282\u8868\u793a\u3002"),(0,a.kt)("p",null,"\u6700\u521d\uff0c\u4e0d\u540c\u56fd\u5bb6\u6709\u81ea\u5df1\u7684\u5b57\u7b26\u7f16\u7801\u65b9\u5f0f\uff0c\u8fd9\u6837\u4e0d\u4fbf\u4e8e\u591a\u79cd\u5b57\u7b26\u7684\u6df7\u7528\u3002\u56e0\u6b64\uff0c\u540e\u6765\u5c31\u9010\u6e10\u7edf\u4e00\u5230 Unicode \u7f16\u7801\uff0c\u5c06\u6240\u6709\u5b57\u7b26\u653e\u5165\u4e00\u4e2a\u5b57\u7b26\u96c6\u3002"),(0,a.kt)("p",null,"Unicode \u4e3a\u6bcf\u4e2a\u5b57\u7b26\u63d0\u4f9b\u4e00\u4e2a\u53f7\u7801\uff0c\u79f0\u4e3a\u7801\u70b9\uff08code point\uff09\uff0c\u5176\u4e2d0\u5230127\u7684\u90e8\u5206\uff0c\u8ddf ASCII \u7801\u662f\u91cd\u5408\u7684\u3002\u901a\u5e38\u4f7f\u7528\u201cU+\u5341\u516d\u8fdb\u5236\u7801\u70b9\u201d\u8868\u793a\u4e00\u4e2a\u5b57\u7b26\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"U+0041"),"\u8868\u793a\u5b57\u6bcd",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"\u3002"),(0,a.kt)("p",null,"Unicode \u7f16\u7801\u76ee\u524d\u4e00\u5171\u5305\u542b\u4e86100\u591a\u4e07\u4e2a\u5b57\u7b26\uff0c\u7801\u70b9\u8303\u56f4\u662f U+0000 \u5230 U+10FFFF\u3002\u5b8c\u6574\u8868\u8fbe\u6574\u4e2a Unicode \u5b57\u7b26\u96c6\uff0c\u81f3\u5c11\u9700\u8981\u4e09\u4e2a\u5b57\u8282\u3002\u4f46\u662f\uff0c\u5e76\u4e0d\u662f\u6240\u6709\u6587\u6863\u90fd\u9700\u8981\u90a3\u4e48\u591a\u5b57\u7b26\uff0c\u6bd4\u5982\u5bf9\u4e8e ASCII \u7801\u5c31\u591f\u7528\u7684\u82f1\u8bed\u6587\u6863\uff0c\u5982\u679c\u6bcf\u4e2a\u5b57\u7b26\u4f7f\u7528\u4e09\u4e2a\u5b57\u8282\u8868\u793a\uff0c\u5c31\u4f1a\u6bd4\u5355\u5b57\u8282\u8868\u793a\u7684\u6587\u4ef6\u4f53\u79ef\u5927\u51fa\u4e09\u500d\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u9002\u5e94\u4e0d\u540c\u7684\u4f7f\u7528\u9700\u6c42\uff0cUnicode \u6807\u51c6\u59d4\u5458\u4f1a\u63d0\u4f9b\u4e86\u4e09\u79cd\u4e0d\u540c\u7684\u8868\u793a\u65b9\u6cd5\uff0c\u8868\u793a Unicode \u7801\u70b9\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"UTF-8\uff1a\u4f7f\u75281\u4e2a\u52304\u4e2a\u5b57\u8282\uff0c\u8868\u793a\u4e00\u4e2a\u7801\u70b9\u3002\u4e0d\u540c\u7684\u5b57\u7b26\u5360\u7528\u7684\u5b57\u8282\u6570\u4e0d\u4e00\u6837\u3002"),(0,a.kt)("li",{parentName:"ul"},"UTF-16\uff1a\u5bf9\u4e8eU+0000 \u5230 U+FFFF \u7684\u5b57\u7b26\uff08\u79f0\u4e3a\u57fa\u672c\u5e73\u9762\uff09\uff0c\u4f7f\u75282\u4e2a\u5b57\u8282\u8868\u793a\u4e00\u4e2a\u7801\u70b9\u3002\u5176\u4ed6\u5b57\u7b26\u4f7f\u75284\u4e2a\u5b57\u8282\u3002"),(0,a.kt)("li",{parentName:"ul"},"UTF-32\uff1a\u7edf\u4e00\u4f7f\u75284\u4e2a\u5b57\u8282\uff0c\u8868\u793a\u4e00\u4e2a\u7801\u70b9\u3002")),(0,a.kt)("p",null,"\u5176\u4e2d\uff0cUTF-8 \u7684\u4f7f\u7528\u6700\u4e3a\u5e7f\u6cdb\uff0c\u56e0\u4e3a\u5bf9\u4e8e ASCII \u5b57\u7b26\uff08U+0000 \u5230 U+007F\uff09\uff0c\u5b83\u53ea\u4f7f\u7528\u4e00\u4e2a\u5b57\u8282\u8868\u793a\uff0c\u8fd9\u5c31\u8ddf ASCII \u7684\u7f16\u7801\u65b9\u5f0f\u5b8c\u5168\u4e00\u6837\u3002"),(0,a.kt)("p",null,"C \u8bed\u8a00\u63d0\u4f9b\u4e86\u4e24\u4e2a\u5b8f\uff0c\u8868\u793a\u5f53\u524d\u7cfb\u7edf\u652f\u6301\u7684\u7f16\u7801\u5b57\u8282\u957f\u5ea6\u3002\u8fd9\u4e24\u4e2a\u5b8f\u90fd\u5b9a\u4e49\u5728\u5934\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"limits.h"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MB_LEN_MAX"),"\uff1a\u4efb\u610f\u652f\u6301\u5730\u533a\u7684\u6700\u5927\u5b57\u8282\u957f\u5ea6\uff0c\u5b9a\u4e49\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"limits.h"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MB_CUR_MAX"),"\uff1a\u5f53\u524d\u8bed\u8a00\u7684\u6700\u5927\u5b57\u8282\u957f\u5ea6\uff0c\u603b\u662f\u5c0f\u4e8e\u6216\u7b49\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"MB_LEN_MAX"),"\uff0c\u5b9a\u4e49\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"stdlib.h"),"\u3002")),(0,a.kt)("h2",{id:"\u5b57\u7b26\u7684\u8868\u793a\u65b9\u6cd5"},"\u5b57\u7b26\u7684\u8868\u793a\u65b9\u6cd5"),(0,a.kt)("p",null,"\u5b57\u7b26\u8868\u793a\u6cd5\u7684\u672c\u8d28\uff0c\u662f\u5c06\u6bcf\u4e2a\u5b57\u7b26\u6620\u5c04\u4e3a\u4e00\u4e2a\u6574\u6570\uff0c\u7136\u540e\u4ece\u7f16\u7801\u8868\u83b7\u5f97\u8be5\u6574\u6570\u5bf9\u5e94\u7684\u5b57\u7b26\u3002"),(0,a.kt)("p",null,"C \u8bed\u8a00\u63d0\u4f9b\u4e86\u4e0d\u540c\u7684\u5199\u6cd5\uff0c\u7528\u6765\u8868\u793a\u5b57\u7b26\u7684\u6574\u6570\u53f7\u7801\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\123"),"\uff1a\u4ee5\u516b\u8fdb\u5236\u503c\u8868\u793a\u4e00\u4e2a\u5b57\u7b26\uff0c\u659c\u6760\u540e\u9762\u9700\u8981\u4e09\u4e2a\u6570\u5b57\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\x4D"),"\uff1a\u4ee5\u5341\u516d\u8fdb\u5236\u8868\u793a\u4e00\u4e2a\u5b57\u7b26\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"\\x"),"\u540e\u9762\u662f\u5341\u516d\u8fdb\u5236\u6574\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\u2620"),"\uff1a\u4ee5 Unicode \u7801\u70b9\u8868\u793a\u4e00\u4e2a\u5b57\u7b26\uff08\u4e0d\u9002\u7528\u4e8e ASCII \u5b57\u7b26\uff09\uff0c\u7801\u70b9\u4ee5\u5341\u516d\u8fdb\u5236\u8868\u793a\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"\\u"),"\u540e\u9762\u9700\u89814\u4e2a\u5b57\u7b26\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\U0001243F"),"\uff1a\u4ee5 Unicode \u7801\u70b9\u8868\u793a\u4e00\u4e2a\u5b57\u7b26\uff08\u4e0d\u9002\u7528\u4e8e ASCII \u5b57\u7b26\uff09\uff0c\u7801\u70b9\u4ee5\u5341\u516d\u8fdb\u5236\u8868\u793a\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"\\U"),"\u540e\u9762\u9700\u89818\u4e2a\u5b57\u7b26\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'printf("ABC\\n");\nprintf("\\101\\102\\103\\n");\nprintf("\\x41\\x42\\x43\\n");\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u4e09\u884c\u90fd\u4f1a\u8f93\u51fa\u201cABC\u201d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'printf("\\u2022 Bullet 1\\n");\nprintf("\\U00002022 Bullet 1\\n");\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u4e24\u884c\u90fd\u4f1a\u8f93\u51fa\u201c\u2022 Bullet 1\u201d\u3002"),(0,a.kt)("h2",{id:"\u591a\u5b57\u8282\u5b57\u7b26\u7684\u8868\u793a"},"\u591a\u5b57\u8282\u5b57\u7b26\u7684\u8868\u793a"),(0,a.kt)("p",null,"C \u8bed\u8a00\u9884\u8bbe\u53ea\u6709\u57fa\u672c\u5b57\u7b26\uff0c\u624d\u80fd\u4f7f\u7528\u5b57\u9762\u91cf\u8868\u793a\uff0c\u5176\u5b83\u5b57\u7b26\u90fd\u5e94\u8be5\u4f7f\u7528\u7801\u70b9\u8868\u793a\uff0c\u5e76\u4e14\u5f53\u524d\u7cfb\u7edf\u8fd8\u5fc5\u987b\u652f\u6301\u8be5\u7801\u70b9\u7684\u7f16\u7801\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u6240\u8c13\u57fa\u672c\u5b57\u7b26\uff0c\u6307\u7684\u662f\u6240\u6709\u53ef\u6253\u5370\u7684 ASCII \u5b57\u7b26\uff0c\u4f46\u662f\u6709\u4e09\u4e2a\u5b57\u7b26\u9664\u5916\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"@"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"$"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"`"),"\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u9047\u5230\u975e\u82f1\u8bed\u5b57\u7b26\uff0c\u5e94\u8be5\u5c06\u5176\u5199\u6210 Unicode \u7801\u70b9\u5f62\u5f0f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'char* s = "\\u6625\\u5929";\nprintf("%s\\n", s); // \u6625\u5929\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4f1a\u8f93\u51fa\u4e2d\u6587\u201c\u6625\u5929\u201d\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u5f53\u524d\u7cfb\u7edf\u662f UTF-8 \u7f16\u7801\uff0c\u53ef\u4ee5\u76f4\u63a5\u7528\u5b57\u9762\u91cf\u8868\u793a\u591a\u5b57\u8282\u5b57\u7b26\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'char* s = "\u6625\u5929";\nprintf("%s\\n", s);\n')),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"\\u + \u7801\u70b9"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"\\U + \u7801\u70b9"),"\u7684\u5199\u6cd5\uff0c\u4e0d\u80fd\u7528\u6765\u8868\u793a ASCII \u7801\u5b57\u7b26\uff08\u7801\u70b9\u5c0f\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"0xA0"),"\u7684\u5b57\u7b26\uff09\uff0c\u53ea\u6709\u4e09\u4e2a\u5b57\u7b26\u9664\u5916\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"0x24"),"\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"$"),"\uff09\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"0x40"),"\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"@"),"\uff09\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"0x60"),"\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"`"),"\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'char* s = "\\u0024\\u0040\\u0060";\nprintf("%s\\n", s);  // @$`\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4f1a\u8f93\u51fa\u4e09\u4e2a Unicode \u5b57\u7b26\u201c@$`\u201d\uff0c\u4f46\u662f\u5176\u5b83 ASCII \u5b57\u7b26\u90fd\u4e0d\u80fd\u7528\u8fd9\u79cd\u8868\u793a\u6cd5\u8868\u793a\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1\u7a0b\u5e8f\u6267\u884c\u65f6\uff0c\u5b57\u7b26\u80fd\u591f\u6b63\u786e\u89e3\u8bfb\uff0c\u6700\u597d\u5c06\u7a0b\u5e8f\u73af\u5883\u5207\u6362\u5230\u672c\u5730\u5316\u73af\u5883\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'setlocale(LC_ALL, "");\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"setlocale()"),"\u5207\u6362\u6267\u884c\u73af\u5883\u5230\u7cfb\u7edf\u7684\u672c\u5730\u5316\u8bed\u8a00\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"setlocale()"),"\u7684\u539f\u578b\u5b9a\u4e49\u5728\u5934\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"locale.h"),"\uff0c\u8be6\u89c1\u6807\u51c6\u5e93\u90e8\u5206\u7684\u300alocale.h\u300b\u7ae0\u8282\u3002"),(0,a.kt)("p",null,"\u50cf\u4e0b\u9762\u8fd9\u6837\uff0c\u6307\u5b9a\u7f16\u7801\u8bed\u8a00\u4e5f\u53ef\u4ee5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'setlocale(LC_ALL, "zh_CN.UTF-8");\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u5c06\u7a0b\u5e8f\u6267\u884c\u73af\u5883\uff0c\u5207\u6362\u5230\u4e2d\u6587\u73af\u5883\u7684 UTF-8 \u7f16\u7801\u3002"),(0,a.kt)("p",null,"C \u8bed\u8a00\u5141\u8bb8\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"u8"),"\u524d\u7f00\uff0c\u5bf9\u591a\u5b57\u8282\u5b57\u7b26\u4e32\u6307\u5b9a\u7f16\u7801\u65b9\u5f0f\u4e3a UTF-8\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'char* s = u8"\u6625\u5929";\nprintf("%s\\n", s);\n')),(0,a.kt)("p",null,"\u4e00\u65e6\u5b57\u7b26\u4e32\u91cc\u9762\u5305\u542b\u591a\u5b57\u8282\u5b57\u7b26\uff0c\u5c31\u610f\u5473\u7740\u5b57\u7b26\u4e32\u7684\u5b57\u8282\u6570\u4e0e\u5b57\u7b26\u6570\u4e0d\u518d\u4e00\u4e00\u5bf9\u5e94\u4e86\u3002\u6bd4\u5982\uff0c\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u4e3a10\u5b57\u8282\uff0c\u5c31\u4e0d\u518d\u662f\u5305\u542b10\u4e2a\u5b57\u7b26\uff0c\u800c\u53ef\u80fd\u53ea\u5305\u542b7\u4e2a\u5b57\u7b26\u30015\u4e2a\u5b57\u7b26\u7b49\u7b49\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'setlocale(LC_ALL, "");\n\nchar* s = "\u6625\u5929";\nprintf("%d\\n", strlen(s)); // 6\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u5b57\u7b26\u4e32",(0,a.kt)("inlineCode",{parentName:"p"},"s"),"\u53ea\u5305\u542b\u4e24\u4e2a\u5b57\u7b26\uff0c\u4f46\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"strlen()"),"\u8fd4\u56de\u7684\u7ed3\u679c\u5374\u662f6\uff0c\u8868\u793a\u8fd9\u4e24\u4e2a\u5b57\u7b26\u4e00\u5171\u5360\u636e\u4e866\u4e2a\u5b57\u8282\u3002"),(0,a.kt)("p",null,"C \u8bed\u8a00\u7684\u5b57\u7b26\u4e32\u51fd\u6570\u53ea\u9488\u5bf9\u5355\u5b57\u8282\u5b57\u7b26\u6709\u6548\uff0c\u5bf9\u4e8e\u591a\u5b57\u8282\u5b57\u7b26\u90fd\u4f1a\u5931\u6548\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"strtok()"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"strchr()"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"strspn()"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"toupper()"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"tolower()"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"isalpha()"),"\u7b49\u4e0d\u4f1a\u5f97\u5230\u6b63\u786e\u7ed3\u679c\u3002"),(0,a.kt)("h2",{id:"\u5bbd\u5b57\u7b26"},"\u5bbd\u5b57\u7b26"),(0,a.kt)("p",null,"\u4e0a\u4e00\u5c0f\u8282\u7684\u591a\u5b57\u8282\u5b57\u7b26\u4e32\uff0c\u6bcf\u4e2a\u5b57\u7b26\u7684\u5b57\u8282\u5bbd\u5ea6\u662f\u53ef\u53d8\u7684\u3002\u8fd9\u79cd\u7f16\u7801\u65b9\u5f0f\u867d\u7136\u4f7f\u7528\u8d77\u6765\u65b9\u4fbf\uff0c\u4f46\u662f\u5f88\u4e0d\u5229\u4e8e\u5b57\u7b26\u4e32\u5904\u7406\uff0c\u56e0\u6b64\u5fc5\u987b\u9010\u4e00\u68c0\u67e5\u6bcf\u4e2a\u5b57\u7b26\u5360\u7528\u7684\u5b57\u8282\u6570\u3002\u6240\u4ee5\u9664\u4e86\u8fd9\u79cd\u65b9\u5f0f\uff0cC \u8bed\u8a00\u8fd8\u63d0\u4f9b\u4e86\u786e\u5b9a\u5bbd\u5ea6\u7684\u591a\u5b57\u8282\u5b57\u7b26\u5b58\u50a8\u65b9\u5f0f\uff0c\u79f0\u4e3a\u5bbd\u5b57\u7b26\uff08wide character\uff09\u3002"),(0,a.kt)("p",null,"\u6240\u8c13\u201c\u5bbd\u5b57\u7b26\u201d\uff0c\u5c31\u662f\u6bcf\u4e2a\u5b57\u7b26\u5360\u7528\u7684\u5b57\u8282\u6570\u662f\u56fa\u5b9a\u7684\uff0c\u8981\u4e48\u662f2\u4e2a\u5b57\u8282\uff0c\u8981\u4e48\u662f4\u4e2a\u5b57\u8282\u3002\u8fd9\u6837\u7684\u8bdd\uff0c\u5c31\u5f88\u5bb9\u6613\u5feb\u901f\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u5bbd\u5b57\u7b26\u6709\u4e00\u4e2a\u5355\u72ec\u7684\u6570\u636e\u7c7b\u578b wchar_t\uff0c\u6bcf\u4e2a\u5bbd\u5b57\u7b26\u90fd\u662f\u8fd9\u4e2a\u7c7b\u578b\u3002\u5b83\u5c5e\u4e8e\u6574\u6570\u7c7b\u578b\u7684\u522b\u540d\uff0c\u53ef\u80fd\u662f\u6709\u7b26\u53f7\u7684\uff0c\u4e5f\u53ef\u80fd\u662f\u65e0\u7b26\u53f7\u7684\uff0c\u7531\u5f53\u524d\u5b9e\u73b0\u51b3\u5b9a\u3002\u8be5\u7c7b\u578b\u7684\u957f\u5ea6\u4e3a16\u4f4d\uff082\u4e2a\u5b57\u8282\uff09\u621632\u4f4d\uff084\u4e2a\u5b57\u8282\uff09\uff0c\u8db3\u4ee5\u5bb9\u7eb3\u5f53\u524d\u7cfb\u7edf\u7684\u6240\u6709\u5b57\u7b26\u3002\u5b83\u5b9a\u4e49\u5728\u5934\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"wchar.h"),"\u91cc\u9762\u3002"),(0,a.kt)("p",null,"\u5bbd\u5b57\u7b26\u7684\u5b57\u9762\u91cf\u5fc5\u987b\u52a0\u4e0a\u524d\u7f00\u201cL\u201d\uff0c\u5426\u5219 C \u8bed\u8a00\u4f1a\u628a\u5b57\u9762\u91cf\u5f53\u4f5c\u7a84\u5b57\u7b26\u7c7b\u578b\u5904\u7406\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'setlocale(LC_ALL, "");\n\nwchar_t c = L\'\u725b\'\uff1b\nprintf("%lc\\n", c);\n\nwchar_t* s = L"\u6625\u5929";\nprintf("%ls\\n", s);\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u524d\u7f00\u201cL\u201d\u5728\u5355\u5f15\u53f7\u524d\u9762\uff0c\u8868\u793a\u5bbd\u5b57\u7b26\uff0c\u5bf9\u5e94",(0,a.kt)("inlineCode",{parentName:"p"},"printf()"),"\u7684\u5360\u4f4d\u7b26\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"%lc"),"\uff1b\u5728\u53cc\u5f15\u53f7\u524d\u9762\uff0c\u8868\u793a\u5bbd\u5b57\u7b26\u4e32\uff0c\u5bf9\u5e94",(0,a.kt)("inlineCode",{parentName:"p"},"printf()"),"\u7684\u5360\u4f4d\u7b26\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"%ls"),"\u3002"),(0,a.kt)("p",null,"\u5bbd\u5b57\u7b26\u4e32\u7684\u7ed3\u5c3e\u4e5f\u6709\u4e00\u4e2a\u7a7a\u5b57\u7b26\uff0c\u4e0d\u8fc7\u662f\u5bbd\u7a7a\u5b57\u7b26\uff0c\u5360\u7528\u591a\u4e2a\u5b57\u8282\u3002"),(0,a.kt)("p",null,"\u5904\u7406\u5bbd\u5b57\u7b26\uff0c\u9700\u8981\u4f7f\u7528\u5bbd\u5b57\u7b26\u4e13\u7528\u7684\u51fd\u6570\uff0c\u7edd\u5927\u90e8\u5206\u90fd\u5b9a\u4e49\u5728\u5934\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"wchar.h"),"\u3002"),(0,a.kt)("h2",{id:"\u591a\u5b57\u8282\u5b57\u7b26\u5904\u7406\u51fd\u6570"},"\u591a\u5b57\u8282\u5b57\u7b26\u5904\u7406\u51fd\u6570"),(0,a.kt)("h3",{id:"mblen"},"mblen()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mblen()"),"\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u591a\u5b57\u8282\u5b57\u7b26\u5360\u7528\u7684\u5b57\u7b26\u6570\u3002\u5b83\u7684\u539f\u578b\u5b9a\u4e49\u5728\u5934\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"stdlib.h"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int mblen(const char* mbstr, size_t n);\n")),(0,a.kt)("p",null,"\u5b83\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u591a\u5b57\u8282\u5b57\u7b26\u4e32\u6307\u9488\uff0c\u4e00\u822c\u4f1a\u68c0\u67e5\u8be5\u5b57\u7b26\u4e32\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\uff1b\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u9700\u8981\u68c0\u67e5\u7684\u5b57\u8282\u6570\uff0c\u8fd9\u4e2a\u6570\u5b57\u4e0d\u80fd\u5927\u4e8e\u5f53\u524d\u7cfb\u7edf\u5355\u4e2a\u5b57\u7b26\u5360\u7528\u7684\u6700\u5927\u5b57\u8282\uff0c\u4e00\u822c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"MB_CUR_MAX"),"\u3002"),(0,a.kt)("p",null,"\u5b83\u7684\u8fd4\u56de\u503c\u662f\u8be5\u5b57\u7b26\u5360\u7528\u7684\u5b57\u8282\u6570\u3002\u5982\u679c\u5f53\u524d\u5b57\u7b26\u662f\u7a7a\u7684\u5bbd\u5b57\u7b26\uff0c\u5219\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\uff1b\u5982\u679c\u5f53\u524d\u5b57\u7b26\u4e0d\u662f\u6709\u6548\u7684\u591a\u5b57\u8282\u5b57\u7b26\uff0c\u5219\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'setlocale(LC_ALL, "");\n\nchar* mbs1 = "\u6625\u5929";\nprintf("%d\\n", mblen(mbs1, MB_CUR_MAX)); // 3\n\nchar* mbs2 = "abc";\nprintf("%d\\n", mblen(mbs2, MB_CUR_MAX)); // 1\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u5b57\u7b26\u4e32\u201c\u6625\u5929\u201d\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u201c\u6625\u201d\uff0c\u5360\u75283\u4e2a\u5b57\u8282\uff1b\u5b57\u7b26\u4e32\u201cabc\u201d\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u201ca\u201d\uff0c\u5360\u75281\u4e2a\u5b57\u8282\u3002"),(0,a.kt)("h3",{id:"wctomb"},"wctomb()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"wctomb()"),"\u51fd\u6570\uff08wide character to multibyte\uff09\u7528\u4e8e\u5c06\u5bbd\u5b57\u7b26\u8f6c\u4e3a\u591a\u5b57\u8282\u5b57\u7b26\u3002\u5b83\u7684\u539f\u578b\u5b9a\u4e49\u5728\u5934\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"stdlib.h"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int wctomb(char* s, wchar_t wc);\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"wctomb()"),"\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4f5c\u4e3a\u76ee\u6807\u7684\u591a\u5b57\u8282\u5b57\u7b26\u6570\u7ec4\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u9700\u8981\u8f6c\u6362\u7684\u4e00\u4e2a\u5bbd\u5b57\u7b26\u3002\u5b83\u7684\u8fd4\u56de\u503c\u662f\u591a\u5b57\u8282\u5b57\u7b26\u5b58\u50a8\u5360\u7528\u7684\u5b57\u8282\u6570\u91cf\uff0c\u5982\u679c\u65e0\u6cd5\u8f6c\u6362\uff0c\u5219\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'setlocale(LC_ALL, "");\n\nwchar_t wc = L\'\u725b\';\nchar mbStr[10] = "";\n\nint nBytes = 0;\nnBytes = wctomb(mbStr, wc);\n\nprintf("%s\\n", mbStr);  // \u725b\nprintf("%d\\n", nBytes);  // 3\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"wctomb()"),"\u5c06\u5bbd\u5b57\u7b26\u201c\u725b\u201d\u8f6c\u4e3a\u591a\u5b57\u8282\u5b57\u7b26\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"wctomb()"),"\u7684\u8fd4\u56de\u503c\u8868\u793a\u8f6c\u6362\u540e\u7684\u591a\u5b57\u8282\u5b57\u7b26\u5360\u75283\u4e2a\u5b57\u8282\u3002"),(0,a.kt)("h3",{id:"mbtowc"},"mbtowc()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mbtowc()"),"\u7528\u4e8e\u5c06\u591a\u5b57\u8282\u5b57\u7b26\u8f6c\u4e3a\u5bbd\u5b57\u7b26\u3002\u5b83\u7684\u539f\u578b\u5b9a\u4e49\u5728\u5934\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"stdlib.h"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int mbtowc(\n   wchar_t* wchar,\n   const char* mbchar,\n   size_t count\n);\n")),(0,a.kt)("p",null,"\u5b83\u63a5\u53d73\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4f5c\u4e3a\u76ee\u6807\u7684\u5bbd\u5b57\u7b26\u6307\u9488\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5f85\u8f6c\u6362\u7684\u591a\u5b57\u8282\u5b57\u7b26\u6307\u9488\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u591a\u5b57\u8282\u5b57\u7b26\u7684\u5b57\u8282\u6570\u3002"),(0,a.kt)("p",null,"\u5b83\u7684\u8fd4\u56de\u503c\u662f\u591a\u5b57\u8282\u5b57\u7b26\u7684\u5b57\u8282\u6570\uff0c\u5982\u679c\u8f6c\u6362\u5931\u8d25\uff0c\u5219\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'setlocale(LC_ALL, "");\n\nchar* mbchar = "\u725b";\nwchar_t wc;\nwchar_t* pwc = &wc;\n\nint nBytes = 0;\nnBytes = mbtowc(pwc, mbchar, 3);\n\nprintf("%d\\n", nBytes); // 3\nprintf("%lc\\n", *pwc);  // \u725b\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"mbtowc()"),"\u5c06\u591a\u5b57\u8282\u5b57\u7b26\u201c\u725b\u201d\u8f6c\u4e3a\u5bbd\u5b57\u7b26",(0,a.kt)("inlineCode",{parentName:"p"},"wc"),"\uff0c\u8fd4\u56de\u503c\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"mbchar"),"\u5360\u7528\u7684\u5b57\u8282\u6570\uff08\u5360\u75283\u4e2a\u5b57\u8282\uff09\u3002"),(0,a.kt)("h3",{id:"wcstombs"},"wcstombs()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"wcstombs()"),"\u7528\u6765\u5c06\u5bbd\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u591a\u5b57\u8282\u5b57\u7b26\u4e32\u3002\u5b83\u7684\u539f\u578b\u5b9a\u4e49\u5728\u5934\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"stdlib.h"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"size_t wcstombs(\n   char* mbstr,\n   const wchar_t* wcstr,\n   size_t count\n);\n")),(0,a.kt)("p",null,"\u5b83\u63a5\u53d7\u4e09\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"mbstr"),"\u662f\u76ee\u6807\u7684\u591a\u5b57\u8282\u5b57\u7b26\u4e32\u6307\u9488\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"wcstr"),"\u662f\u5f85\u8f6c\u6362\u7684\u5bbd\u5b57\u7b26\u4e32\u6307\u9488\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"count"),"\u662f\u7528\u6765\u5b58\u50a8\u591a\u5b57\u8282\u5b57\u7b26\u4e32\u7684\u6700\u5927\u5b57\u8282\u6570\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8f6c\u6362\u6210\u529f\uff0c\u5b83\u7684\u8fd4\u56de\u503c\u662f\u6210\u529f\u8f6c\u6362\u540e\u7684\u591a\u5b57\u8282\u5b57\u7b26\u4e32\u7684\u5b57\u8282\u6570\uff0c\u4e0d\u5305\u62ec\u5c3e\u90e8\u7684\u5b57\u7b26\u4e32\u7ec8\u6b62\u7b26\uff1b\u5982\u679c\u8f6c\u6362\u5931\u8d25\uff0c\u5219\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'setlocale(LC_ALL, "");\n\nchar mbs[20];\nwchar_t* wcs = L"\u6625\u5929";\n\nint nBytes = 0;\nnBytes = wcstombs(mbs, wcs, 20);\n\nprintf("%s\\n", mbs); // \u6625\u5929\nprintf("%d\\n", nBytes); // 6\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"wcstombs()"),"\u5c06\u5bbd\u5b57\u7b26\u4e32",(0,a.kt)("inlineCode",{parentName:"p"},"wcs"),"\u8f6c\u4e3a\u591a\u5b57\u8282\u5b57\u7b26\u4e32",(0,a.kt)("inlineCode",{parentName:"p"},"mbs"),"\uff0c\u8fd4\u56de\u503c",(0,a.kt)("inlineCode",{parentName:"p"},"6"),"\u8868\u793a\u5199\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"mbs"),"\u7684\u5b57\u7b26\u4e32\u5360\u75286\u4e2a\u5b57\u8282\uff0c\u4e0d\u5305\u62ec\u5c3e\u90e8\u7684\u5b57\u7b26\u4e32\u7ec8\u6b62\u7b26\u3002"),(0,a.kt)("p",null,"\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"wcstombs()"),"\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f NULL\uff0c\u5219\u8fd4\u56de\u8f6c\u6362\u6210\u529f\u6240\u9700\u8981\u7684\u76ee\u6807\u5b57\u7b26\u4e32\u7684\u5b57\u8282\u6570\u3002"),(0,a.kt)("h3",{id:"mbstowcs"},"mbstowcs()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mbstowcs()"),"\u7528\u6765\u5c06\u591a\u5b57\u8282\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5bbd\u5b57\u7b26\u4e32\u3002\u5b83\u7684\u539f\u578b\u5b9a\u4e49\u5728\u5934\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"stdlib.h"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"size_t mbstowcs(\n  wchar_t* wcstr,\n  const char* mbstr,\n  size_t count\n);\n")),(0,a.kt)("p",null,"\u5b83\u63a5\u53d7\u4e09\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"wcstr"),"\u662f\u76ee\u6807\u5bbd\u5b57\u7b26\u4e32\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"mbstr"),"\u662f\u5f85\u8f6c\u6362\u7684\u591a\u5b57\u8282\u5b57\u7b26\u4e32\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u5f85\u8f6c\u6362\u7684\u591a\u5b57\u8282\u5b57\u7b26\u4e32\u7684\u6700\u5927\u5b57\u7b26\u6570\u3002"),(0,a.kt)("p",null,"\u8f6c\u6362\u6210\u529f\u65f6\uff0c\u5b83\u7684\u8fd4\u56de\u503c\u662f\u6210\u529f\u8f6c\u6362\u7684\u591a\u5b57\u8282\u5b57\u7b26\u7684\u6570\u91cf\uff1b\u8f6c\u6362\u5931\u8d25\u65f6\uff0c\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"\u3002\u5982\u679c\u8fd4\u56de\u503c\u4e0e\u7b2c\u4e09\u4e2a\u53c2\u6570\u76f8\u540c\uff0c\u90a3\u4e48\u8f6c\u6362\u540e\u7684\u5bbd\u5b57\u7b26\u4e32\u4e0d\u662f\u4ee5 NULL \u7ed3\u5c3e\u7684\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'setlocale(LC_ALL, "");\n\nchar* mbs = "\u5929\u6c14\u4e0d\u9519";\nwchar_t wcs[20];\n\nint nBytes = 0;\nnBytes = mbstowcs(wcs, mbs, 20);\n\nprintf("%ls\\n", wcs); // \u5929\u6c14\u4e0d\u9519\nprintf("%d\\n", nBytes); // 4\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u591a\u5b57\u8282\u5b57\u7b26\u4e32",(0,a.kt)("inlineCode",{parentName:"p"},"mbs"),"\u88ab",(0,a.kt)("inlineCode",{parentName:"p"},"mbstowcs()"),"\u8f6c\u4e3a\u5bbd\u5b57\u7b26\u4e32\uff0c\u6210\u529f\u8f6c\u6362\u4e864\u4e2a\u5b57\u7b26\uff0c\u6240\u4ee5\u8be5\u51fd\u6570\u7684\u8fd4\u56de\u503c\u4e3a4\u3002"),(0,a.kt)("p",null,"\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"mbstowcs()"),"\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"\uff0c\u5219\u8fd4\u56de\u76ee\u6807\u5bbd\u5b57\u7b26\u4e32\u4f1a\u5305\u542b\u7684\u5b57\u7b26\u6570\u91cf\u3002"))}s.isMDXComponent=!0}}]);