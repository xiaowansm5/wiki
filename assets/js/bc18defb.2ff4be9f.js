"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[737],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=m(a),k=r,s=d["".concat(o,".").concat(k)]||d[k]||c[k]||l;return a?n.createElement(s,i(i({ref:e},u),{},{components:a})):n.createElement(s,i({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3204:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={title:"\u6570\u636e\u5e93\u4e8b\u52a1",description:"\u6570\u636e\u5e93\u4e8b\u52a1",keywords:["\u6570\u636e\u5e93","\u4e8b\u52a1"],tags:["SQL"],sidebar_position:6,author:"7Wate",date:new Date("2022-08-31T00:00:00.000Z")},i=void 0,p={unversionedId:"MySQL/\u6570\u636e\u5e93\u4e8b\u52a1",id:"MySQL/\u6570\u636e\u5e93\u4e8b\u52a1",title:"\u6570\u636e\u5e93\u4e8b\u52a1",description:"\u6570\u636e\u5e93\u4e8b\u52a1",source:"@site/wiki/programming-language/MySQL/\u6570\u636e\u5e93\u4e8b\u52a1.md",sourceDirName:"MySQL",slug:"/MySQL/\u6570\u636e\u5e93\u4e8b\u52a1",permalink:"/programming-language/MySQL/\u6570\u636e\u5e93\u4e8b\u52a1",draft:!1,tags:[{label:"SQL",permalink:"/programming-language/tags/sql"}],version:"current",sidebarPosition:6,frontMatter:{title:"\u6570\u636e\u5e93\u4e8b\u52a1",description:"\u6570\u636e\u5e93\u4e8b\u52a1",keywords:["\u6570\u636e\u5e93","\u4e8b\u52a1"],tags:["SQL"],sidebar_position:6,author:"7Wate",date:"2022-08-31T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u5e93\u67e5\u8be2",permalink:"/programming-language/MySQL/\u6570\u636e\u5e93\u67e5\u8be2"},next:{title:"\u6570\u636e\u5e93\u89c4\u8303",permalink:"/programming-language/MySQL/\u6570\u636e\u5e93\u89c4\u8303"}},o={},m=[{value:"\u4e8b\u52a1\u64cd\u4f5c",id:"\u4e8b\u52a1\u64cd\u4f5c",level:2},{value:"\u4e8b\u52a1\u56db\u5927\u7279\u6027",id:"\u4e8b\u52a1\u56db\u5927\u7279\u6027",level:2},{value:"\u5e76\u53d1\u4e8b\u52a1\u95ee\u9898",id:"\u5e76\u53d1\u4e8b\u52a1\u95ee\u9898",level:2},{value:"\u810f\u8bfb",id:"\u810f\u8bfb",level:3},{value:"\u4e0d\u53ef\u91cd\u590d\u8bfb",id:"\u4e0d\u53ef\u91cd\u590d\u8bfb",level:3},{value:"\u5e7b\u8bfb",id:"\u5e7b\u8bfb",level:3},{value:"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b",id:"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b",level:2}],u={toc:m};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e8b\u52a1\u662f\u4e00\u7ec4\u64cd\u4f5c\u7684\u96c6\u5408\uff0c\u5b83\u662f\u4e00\u4e2a\u4e0d\u53ef\u5206\u5272\u7684\u5de5\u4f5c\u5355\u4f4d\uff0c\u4e8b\u52a1\u4f1a\u628a\u6240\u6709\u7684\u64cd\u4f5c\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u4e00\u8d77\u5411\u7cfb\u7edf\u63d0\u4ea4\u6216\u64a4\u9500\u64cd\u4f5c\u8bf7\u6c42"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd9\u4e9b\u64cd\u4f5c\u8981\u4e48\u540c\u65f6\u6210\u529f\uff0c\u8981\u4e48\u540c\u65f6\u5931\u8d25\u3002")),(0,r.kt)("p",null,"\u9ed8\u8ba4 MysQL \u7684\u4e8b\u52a1\u662f\u81ea\u52a8\u63d0\u4ea4\u7684\uff0c\u5f53\u6267\u884c\u4e00\u6761 DML \u8bed\u53e5\uff0cMySQL \u4f1a\u7acb\u5373\u9690\u5f0f\u5730\u63d0\u4ea4\u4e8b\u52a1\u3002"),(0,r.kt)("h2",{id:"\u4e8b\u52a1\u64cd\u4f5c"},"\u4e8b\u52a1\u64cd\u4f5c"),(0,r.kt)("p",null,"\u4e8b\u52a1\u6f14\u793a\u5982\u4e0b\uff0c\u5982\u679c 2-3 \u6b65\u9aa4\u4e4b\u95f4\u62a5\u9519\u7ec8\u7aef\uff0c\u90a3\u4e48\u5f20\u4e09\u5c31\u4e22\u4e86 1000\uff1b\u800c\u674e\u56db\u6ca1\u6536\u5230 1000\uff1b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- 1. \u67e5\u8be2\u5f20\u4e09\u8d26\u6237\u4f59\u989d\nselect * from account where name = '\u5f20\u4e09';\n-- 2. \u5c06\u5f20\u4e09\u8d26\u6237\u4f59\u989d -1000\nupdate account set money = money - 1000 where name = '\u5f20\u4e09';\n-- 3. \u5c06\u674e\u56db\u8d26\u6237\u4f59\u989d +1000\nupdate account set money = money + 1000 where name = '\u674e\u56db';\n")),(0,r.kt)("p",null,"\u56e0\u6b64\u6211\u4eec\u9700\u8981\u628a\u4e0a\u8ff0\u4ee3\u7801\u6574\u5408\u6210\u4e00\u4e2a\u4e8b\u52a1\uff0c\u5b8c\u5168\u6267\u884c\u540e\u624d\u63d0\u4ea4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u67e5\u770b\u4e8b\u52a1\u63d0\u4ea4\u65b9\u5f0f\nSELECT @@AUTOCOMMIT;\n-- \u8bbe\u7f6e\u4e8b\u52a1\u63d0\u4ea4\u65b9\u5f0f\uff0c1 \u4e3a\u81ea\u52a8\u63d0\u4ea4\uff0c0 \u4e3a\u624b\u52a8\u63d0\u4ea4\uff0c\u8be5\u8bbe\u7f6e\u53ea\u5bf9\u5f53\u524d\u4f1a\u8bdd\u6709\u6548\nSET @@AUTOCOMMIT = 0;\n-- \u63d0\u4ea4\u4e8b\u52a1\nCOMMIT;\n-- \u56de\u6eda\u4e8b\u52a1\nROLLBACK;\n")),(0,r.kt)("p",null,"\u7b2c\u4e8c\u79cd\u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u5f00\u542f\u4e8b\u52a1\uff1a\nSTART TRANSACTION \u6216 BEGIN TRANSACTION;\n-- \u63d0\u4ea4\u4e8b\u52a1\uff1a\nCOMMIT;\n-- \u56de\u6eda\u4e8b\u52a1\uff1a\nROLLBACK;\n")),(0,r.kt)("p",null,"\u8c03\u6574\u4e8b\u52a1\u4e4b\u540e\uff0c\u91cd\u65b0\u8fd0\u884c sql"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- 1. \u67e5\u8be2\u5f20\u4e09\u8d26\u6237\u4f59\u989d\nselect * from account where name = '\u5f20\u4e09';\n-- 2. \u5c06\u5f20\u4e09\u8d26\u6237\u4f59\u989d -1000\nupdate account set money = money - 1000 where name = '\u5f20\u4e09';\n-- 3. \u5c06\u674e\u56db\u8d26\u6237\u4f59\u989d +1000\nupdate account set money = money + 1000 where name = '\u674e\u56db';\ncommit;\n")),(0,r.kt)("h2",{id:"\u4e8b\u52a1\u56db\u5927\u7279\u6027"},"\u4e8b\u52a1\u56db\u5927\u7279\u6027"),(0,r.kt)("p",null,"\u56db\u5927\u7279\u6027 ACID\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u539f\u5b50\u6027 (Atomicity)\uff1a\u4e8b\u52a1\u662f\u4e0d\u53ef\u5206\u5272\u7684\u6700\u5c0f\u64cd\u4f5c\u4f46\u613f\uff0c\u8981\u4e48\u5168\u90e8\u6210\u529f\uff0c\u8981\u4e48\u5168\u90e8\u5931\u8d25\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u81f4\u6027 (Consistency)\uff1a\u4e8b\u52a1\u5b8c\u6210\u65f6\uff0c\u5fc5\u987b\u4f7f\u6240\u6709\u6570\u636e\u90fd\u4fdd\u6301\u4e00\u81f4\u72b6\u6001\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9694\u79bb\u6027 (Isolation)\uff1a\u6570\u636e\u5e93\u7cfb\u7edf\u63d0\u4f9b\u7684\u9694\u79bb\u673a\u5236\uff0c\u4fdd\u8bc1\u4e8b\u52a1\u5728\u4e0d\u53d7\u5916\u90e8\u5e76\u53d1\u64cd\u4f5c\u5f71\u54cd\u7684\u72ec\u7acb\u73af\u5883\u4e0b\u8fd0\u884c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6301\u4e45\u6027 (Durability)\uff1a\u4e8b\u52a1\u4e00\u65e6\u63d0\u4ea4\u6216\u56de\u6eda\uff0c\u5b83\u5bf9\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\u7684\u6539\u53d8\u5c31\u662f\u6c38\u4e45\u7684\u3002")),(0,r.kt)("h2",{id:"\u5e76\u53d1\u4e8b\u52a1\u95ee\u9898"},"\u5e76\u53d1\u4e8b\u52a1\u95ee\u9898"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u95ee\u9898"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u810f\u8bfb"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e00\u4e2a\u4e8b\u52a1\u8bfb\u5230\u53e6\u4e00\u4e2a\u4e8b\u52a1\u8fd8\u6ca1\u63d0\u4ea4\u7684\u6570\u636e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u53ef\u91cd\u590d\u8bfb"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e00\u4e2a\u4e8b\u52a1\u5148\u540e\u8bfb\u53d6\u540c\u4e00\u6761\u8bb0\u5f55\uff0c\u4f46\u4e24\u6b21\u8bfb\u53d6\u7684\u6570\u636e\u4e0d\u540c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5e7b\u8bfb"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e00\u4e2a\u4e8b\u52a1\u6309\u7167\u6761\u4ef6\u67e5\u8be2\u6570\u636e\u65f6\uff0c\u6ca1\u6709\u5bf9\u5e94\u7684\u6570\u636e\u884c\uff0c\u4f46\u662f\u518d\u63d2\u5165\u6570\u636e\u65f6\uff0c\u53c8\u53d1\u73b0\u8fd9\u884c\u6570\u636e\u5df2\u7ecf\u5b58\u5728")))),(0,r.kt)("h3",{id:"\u810f\u8bfb"},"\u810f\u8bfb"),(0,r.kt)("p",null,"\u5982\u4e0b\u56fe\uff0c\u4e8b\u52a1 A \u66f4\u65b0 1\uff0c\u4f46\u8fd8\u672a\u63d0\u4ea4\uff0c\u6b64\u65f6\u88ab\u4e8b\u52a1 B \u67e5\u53bb\u4e86\uff0c\u8fd9\u5c31\u5bfc\u81f4\u53ef\u80fd\u4e8b\u52a1 A \u6700\u7ec8\u51b3\u5b9a\u4e0d\u63d0\u4ea4\uff0c\u4f46\u662f\u4e8b\u52a1 B \u62ff\u51fa\u6765\u540e\u5f53\u771f\u4e86\uff0c\u6240\u4ee5\u8fd9\u79cd\u73b0\u8c61\u53eb\u505a\u810f\u8bfb\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.7wate.com/img/2022/05/11/85c311e17a51d.png",alt:"img"})),(0,r.kt)("h3",{id:"\u4e0d\u53ef\u91cd\u590d\u8bfb"},"\u4e0d\u53ef\u91cd\u590d\u8bfb"),(0,r.kt)("p",null,"\u5982\u4e0b\u56fe\uff0c\u4e8b\u52a1 A \u67e5\u8be2\u7b2c\u4e00\u6b21\u540e\uff0c\u4e8b\u52a1 B \u66f4\u65b0\u4e86\u8fd9\u6761\u6570\u636e\uff0c\u4e8b\u52a1 A \u67e5\u8be2\u7b2c\u4e8c\u6b21\u65f6\u53d1\u73b0\u8ddf\u7b2c\u4e00\u6b21\u67e5\u8be2\u7684\u7ed3\u679c\u4e0d\u4e00\u6837\uff0c\u8fd9\u79cd\u73b0\u8c61\u53eb\u505a\u4e0d\u53ef\u91cd\u590d\u8bfb\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.7wate.com/img/2022/05/11/0d298382a22d4.png",alt:"img"})),(0,r.kt)("h3",{id:"\u5e7b\u8bfb"},"\u5e7b\u8bfb"),(0,r.kt)("p",null,"\u5e7b\u8bfb\u662f\u5728\u89e3\u51b3 ","[\u4e0d\u53ef\u91cd\u590d\u8bfb]"," \u7684\u57fa\u7840\u4e0a\u4ea7\u751f\u7684\u65b0\u95ee\u9898\uff0c\u5982\u4e0b\u56fe\uff0c\u4e8b\u52a1 A \u8bfb\u53d6 id \u4e3a 1 \u7684\u6570\u636e\u4e3a\u7a7a\uff0c\u4e8b\u52a1 B \u63d2\u5165 id \u4e3a 1 \u7684\u6570\u636e\uff0c\u4e4b\u540e\u4e8b\u52a1 A \u60f3\u8981\u63d2\u5165\u8fd9\u6761\u6570\u636e\u53d1\u73b0\u63d2\u5165\u4e0d\u4e86\uff08\u6bd4\u5982\u88ab\u4e3b\u952e\u7ea6\u675f\u4e86\uff09\uff0c\u7136\u540e\u4e8b\u52a1 A \u91cd\u65b0\u67e5\u8be2\u8fd8\u662f\u627e\u4e0d\u5230 id \u4e3a 1 \u7684\u6570\u636e\uff08\u56e0\u4e3a\u6211\u4eec\u89e3\u51b3\u4e86","[\u4e0d\u53ef\u91cd\u590d\u8bfb]","\uff0c\u6240\u4ee5\u67e5\u8be2\u51fa\u6765\u7684\u7ed3\u679c\u8ddf\u7b2c\u4e00\u6b21\u67e5\u662f\u4e00\u81f4\u7684\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.7wate.com/img/2022/05/11/b5bdbc0d6b4e0.png",alt:"img"})),(0,r.kt)("h2",{id:"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b"},"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b"),(0,r.kt)("p",null,"MySQL \u9ed8\u8ba4\u7684\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u662f Repeatable Read"),(0,r.kt)("p",null,"Oracle \u9ed8\u8ba4\u7684\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u662f Read committed"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9694\u79bb\u7ea7\u522b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u810f\u8bfb"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u4e0d\u53ef\u91cd\u590d\u8bfb"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5e7b\u8bfb"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Read uncommitted"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u221a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Read committed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xd7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u221a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Repeatable Read(\u9ed8\u8ba4)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xd7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xd7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u221a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Serializable"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xd7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xd7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xd7")))),(0,r.kt)("p",null,"\u221a \u8868\u793a\u5728\u5f53\u524d\u9694\u79bb\u7ea7\u522b\u4e0b\u8be5\u95ee\u9898\u4f1a\u51fa\u73b0\uff0c"),(0,r.kt)("p",null,"Serializable \u6027\u80fd\u6700\u4f4e\uff1bRead uncommitted \u6027\u80fd\u6700\u9ad8\uff0c\u6570\u636e\u5b89\u5168\u6027\u6700\u5dee\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u67e5\u770b\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\uff1a\nSELECT @@TRANSACTION_ISOLATION;\n-- \u8bbe\u7f6e\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\uff1a\nSET [ SESSION | GLOBAL ] TRANSACTION ISOLATION LEVEL {READ UNCOMMITTED | READ COMMITTED | REPEATABLE READ | SERIALIZABLE };\n-- SESSION \u662f\u4f1a\u8bdd\u7ea7\u522b\uff0c\u8868\u793a\u53ea\u9488\u5bf9\u5f53\u524d\u4f1a\u8bdd\u6709\u6548\n-- GLOBAL \u8868\u793a\u5bf9\u6240\u6709\u4f1a\u8bdd\u6709\u6548\n")))}c.isMDXComponent=!0}}]);