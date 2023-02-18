"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8230],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>g});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var k=n.createContext({}),d=function(e){var t=n.useContext(k),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},i=function(e){var t=d(e.components);return n.createElement(k.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,k=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),N=d(a),g=l,o=N["".concat(k,".").concat(g)]||N[g]||u[g]||r;return a?n.createElement(o,p(p({ref:t},i),{},{components:a})):n.createElement(o,p({ref:t},i))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,p=new Array(r);p[0]=N;var m={};for(var k in t)hasOwnProperty.call(t,k)&&(m[k]=t[k]);m.originalType=e,m.mdxType="string"==typeof e?e:l,p[1]=m;for(var d=2;d<r;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},9033:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>m,toc:()=>d});var n=a(7462),l=(a(7294),a(3905));const r={title:"SQL \u8bed\u53e5",description:"SQL \u8bed\u53e5",keywords:["SQL","\u8bed\u53e5"],tags:["SQL"],sidebar_position:2,author:"7Wate",date:new Date("2022-08-31T00:00:00.000Z")},p=void 0,m={unversionedId:"MySQL/SQL \u8bed\u53e5",id:"MySQL/SQL \u8bed\u53e5",title:"SQL \u8bed\u53e5",description:"SQL \u8bed\u53e5",source:"@site/wiki/programming-language/MySQL/SQL \u8bed\u53e5.md",sourceDirName:"MySQL",slug:"/MySQL/SQL \u8bed\u53e5",permalink:"/programming-language/MySQL/SQL \u8bed\u53e5",draft:!1,tags:[{label:"SQL",permalink:"/programming-language/tags/sql"}],version:"current",sidebarPosition:2,frontMatter:{title:"SQL \u8bed\u53e5",description:"SQL \u8bed\u53e5",keywords:["SQL","\u8bed\u53e5"],tags:["SQL"],sidebar_position:2,author:"7Wate",date:"2022-08-31T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u5e93\u6982\u8ff0",permalink:"/programming-language/MySQL/\u6570\u636e\u5e93\u6982\u8ff0"},next:{title:"SQL \u51fd\u6570",permalink:"/programming-language/MySQL/SQL \u51fd\u6570"}},k={},d=[{value:"SQL",id:"sql",level:2},{value:"DDL",id:"ddl",level:2},{value:"\u6570\u636e\u5e93\u64cd\u4f5c",id:"\u6570\u636e\u5e93\u64cd\u4f5c",level:3},{value:"\u6570\u636e\u8868\u64cd\u4f5c",id:"\u6570\u636e\u8868\u64cd\u4f5c",level:3},{value:"DML",id:"dml",level:2},{value:"DQL",id:"dql",level:2},{value:"\u57fa\u7840\u67e5\u8be2",id:"\u57fa\u7840\u67e5\u8be2",level:3},{value:"\u6761\u4ef6\u67e5\u8be2",id:"\u6761\u4ef6\u67e5\u8be2",level:3},{value:"\u805a\u5408\u67e5\u8be2",id:"\u805a\u5408\u67e5\u8be2",level:3},{value:"\u5206\u7ec4\u67e5\u8be2",id:"\u5206\u7ec4\u67e5\u8be2",level:3},{value:"\u6392\u5e8f\u67e5\u8be2",id:"\u6392\u5e8f\u67e5\u8be2",level:3},{value:"\u5206\u9875\u67e5\u8be2",id:"\u5206\u9875\u67e5\u8be2",level:3},{value:"DQL \u7ec3\u4e60",id:"dql-\u7ec3\u4e60",level:3},{value:"DCL",id:"dcl",level:2},{value:"\u7528\u6237\u7ba1\u7406",id:"\u7528\u6237\u7ba1\u7406",level:3},{value:"\u6743\u9650\u7ba1\u7406",id:"\u6743\u9650\u7ba1\u7406",level:3}],i={toc:d};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"sql"},"SQL"),(0,l.kt)("p",null,"\u5168\u79f0 Structured Query Language\uff0c\u7ed3\u6784\u5316\u67e5\u8be2\u8bed\u8a00\u3002\u64cd\u4f5c\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u5b9a\u4e49\u4e86\u4e00\u5957\u64cd\u4f5c\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7edf\u4e00\u6807\u51c6\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.7wate.com/img/2022/05/11/9459b0983c451.png",alt:"img"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"SQL \u8bed\u53e5\u53ef\u4ee5\u5355\u884c\u6216\u591a\u884c\u4e66\u5199\uff0c\u4ee5\u5206\u53f7\u7ed3\u5c3e\u3002"),(0,l.kt)("li",{parentName:"ol"},"SQL \u8bed\u53e5\u53ef\u4ee5\u4f7f\u7528\u7a7a\u683c / \u7f29\u8fdb\u6765\u589e\u5f3a\u8bed\u53e5\u7684\u53ef\u8bfb\u6027\u3002"),(0,l.kt)("li",{parentName:"ol"},"MySQL \u6570\u636e\u5e93\u7684 SQL \u8bed\u53e5\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff0c",(0,l.kt)("strong",{parentName:"li"},"\u5173\u952e\u5b57\u5efa\u8bae\u4f7f\u7528\u5927\u5199"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6ce8\u91ca\uff1a",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u5355\u884c\u6ce8\u91ca\uff1a-- \u6ce8\u91ca\u5185\u5bb9 \u6216 # \u6ce8\u91ca\u5185\u5bb9"),(0,l.kt)("li",{parentName:"ol"},"\u591a\u884c\u6ce8\u91ca\uff1a/ ",(0,l.kt)("em",{parentName:"li"},"\u6ce8\u91ca\u5185\u5bb9")," /")))),(0,l.kt)("p",null,"SQL \u8bed\u53e5\uff0c\u6839\u636e\u5176\u529f\u80fd\uff0c\u4e3b\u8981\u5206\u4e3a\u56db\u7c7b\uff1aDDL\u3001DML\u3001DQL\u3001DCL\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5206\u7c7b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DDL"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u5b9a\u4e49\u8bed\u8a00\uff0c\u7528\u6765\u5b9a\u4e49\u6570\u636e\u5e93\u5bf9\u8c61 (\u6570\u636e\u5e93\uff0c\u8868\uff0c\u5b57\u6bb5)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DML"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u64cd\u4f5c\u8bed\u8a00, \u7528\u6765\u5bf9\u6570\u636e\u5e93\u8868\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u589e\u5220\u6539")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DQL"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u67e5\u8be2\u8bed\u8a00\uff0c\u7528\u6765\u67e5\u8be2\u6570\u636e\u5e93\u4e2d\u8868\u7684\u8bb0\u5f55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DCL"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u63a7\u5236\u8bed\u8a00\uff0c\u7528\u6765\u521b\u5efa\u6570\u636e\u5e93\u7528\u6237\u3001\u63a7\u5236\u6570\u636e\u5e93\u7684\u8bbf\u95ee\u6743\u9650")))),(0,l.kt)("h2",{id:"ddl"},"DDL"),(0,l.kt)("p",null,"\u6570\u636e\u5b9a\u4e49\u8bed\u8a00\uff0c\u5b9a\u4e49\u6570\u636e\u5e93\u5bf9\u8c61 (\u6570\u636e\u5e93\uff0c\u8868\uff0c\u5b57\u6bb5)"),(0,l.kt)("h3",{id:"\u6570\u636e\u5e93\u64cd\u4f5c"},"\u6570\u636e\u5e93\u64cd\u4f5c"),(0,l.kt)("p",null,"\u67e5\u8be2\u6240\u6709\u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u67d0\u4e2a\u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"USE \u6570\u636e\u5e93\u540d;\n")),(0,l.kt)("p",null,"\u67e5\u8be2\u5f53\u524d\u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DATABASE();\n")),(0,l.kt)("p",null,"\u521b\u5efa\u6570\u636e\u5e93"),(0,l.kt)("p",null,"UTF8 \u5b57\u7b26\u96c6\u957f\u5ea6\u4e3a 3 \u5b57\u8282\uff0c\u6709\u4e9b\u7b26\u53f7\u5360 4 \u5b57\u8282\uff0c\u6240\u4ee5\u521b\u5efa\u6570\u636e\u5e93\u65f6\u63a8\u8350\u7528 utf8mb4 \u5b57\u7b26\u96c6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE [ IF NOT EXISTS ] \u6570\u636e\u5e93\u540d [ DEFAULT CHARSET \u5b57\u7b26\u96c6] [COLLATE \u6392\u5e8f\u89c4\u5219 ];\n")),(0,l.kt)("p",null,"\u5220\u9664\u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP DATABASE [ IF EXISTS ] \u6570\u636e\u5e93\u540d;\n")),(0,l.kt)("h3",{id:"\u6570\u636e\u8868\u64cd\u4f5c"},"\u6570\u636e\u8868\u64cd\u4f5c"),(0,l.kt)("p",null,"\u521b\u5efa\u8868"),(0,l.kt)("p",null,"\u6700\u540e\u4e00\u4e2a\u5b57\u6bb5\u540e\u9762\u662f\u6ca1\u6709\u9017\u53f7\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE \u8868\u540d(\n    \u5b57\u6bb51 \u5b57\u6bb51\u7c7b\u578b [COMMENT \u5b57\u6bb51\u6ce8\u91ca],\n    \u5b57\u6bb52 \u5b57\u6bb52\u7c7b\u578b [COMMENT \u5b57\u6bb52\u6ce8\u91ca],\n    \u5b57\u6bb53 \u5b57\u6bb53\u7c7b\u578b [COMMENT \u5b57\u6bb53\u6ce8\u91ca],\n    ...\n    \u5b57\u6bb5n \u5b57\u6bb5n\u7c7b\u578b [COMMENT \u5b57\u6bb5n\u6ce8\u91ca]\n)[ COMMENT \u8868\u6ce8\u91ca ];\n")),(0,l.kt)("p",null,"\u67e5\u8be2\u8868\u7ed3\u6784"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DESC \u8868\u540d;\n")),(0,l.kt)("p",null,"\u67e5\u8be2\u5f53\u524d\u6570\u636e\u5e93\u6240\u6709\u8868\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u5fc5\u987b\u5904\u5728\u6570\u636e\u5e93\u4e2d")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLES;\n")),(0,l.kt)("p",null,"\u67e5\u8be2\u67d0\u8868\u7684\u5efa\u8868\u8bed\u53e5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE \u8868\u540d;\n")),(0,l.kt)("p",null,"\u8868\u4e2d\u6dfb\u52a0\u5b57\u6bb5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE \u8868\u540d ADD \u5b57\u6bb5\u540d \u7c7b\u578b(\u957f\u5ea6) [COMMENT \u6ce8\u91ca] [\u7ea6\u675f];\n-- \u4f8b\u5982\nALTER TABLE emp ADD nickname varchar(20) COMMENT '\u7528\u6237\u6635\u79f0';\n")),(0,l.kt)("p",null,"\u4fee\u6539\u6570\u636e\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE \u8868\u540d MODIFY \u5b57\u6bb5\u540d \u65b0\u6570\u636e\u7c7b\u578b(\u957f\u5ea6);\n-- \u4f8b\u5982\nALTER TABLE emp MODIFY nickname varchar(30);\n")),(0,l.kt)("p",null,"\u4fee\u6539\u5b57\u6bb5\u540d\u548c\u5b57\u6bb5\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE \u8868\u540d CHANGE \u65e7\u5b57\u6bb5\u540d \u65b0\u5b57\u6bb5\u540d \u7c7b\u578b(\u957f\u5ea6) [COMMENT \u6ce8\u91ca] [\u7ea6\u675f];\n-- \u4f8b\u5982\nALTER TABLE emp CHANGE nickname name varchar(40);\n")),(0,l.kt)("p",null,"\u5220\u9664\u5b57\u6bb5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE \u8868\u540d DROP \u5b57\u6bb5\u540d;\n-- \u4f8b\u5982\nALTER TABLE emp drop nickname;\n")),(0,l.kt)("p",null,"\u4fee\u6539\u8868\u540d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE \u8868\u540d RENAME TO \u65b0\u8868\u540d;\n-- \u4f8b\u5982\nALTER TABLE emp RENAME TO empNew;\n")),(0,l.kt)("p",null,"\u5220\u9664\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE [IF EXISTS] \u8868\u540d;\n-- \u4f8b\u5982\nDROP TABLE [IF EXISTS] emp;\n")),(0,l.kt)("p",null,"\u5220\u9664\u8868\uff0c\u5e76\u91cd\u65b0\u521b\u5efa\u8be5\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"TRUNCATE TABLE \u8868\u540d;\n-- \u4f8b\u5982\nTRUNCATE TABLE emp;\n")),(0,l.kt)("h2",{id:"dml"},"DML"),(0,l.kt)("p",null,"\u6570\u636e\u64cd\u4f5c\u8bed\u8a00\uff0c\u7528\u6765\u5bf9\u6570\u636e\u5e93\u8868\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u589e\u5220\u6539"),(0,l.kt)("p",null,"\u5b57\u7b26\u4e32\u548c\u65e5\u671f\u7c7b\u578b\u6570\u636e\u5e94\u8be5\u5305\u542b\u5728\u5f15\u53f7\u4e2d"),(0,l.kt)("p",null,"\u63d2\u5165\u7684\u6570\u636e\u5927\u5c0f\u5e94\u8be5\u5728",(0,l.kt)("strong",{parentName:"p"},"\u5b57\u6bb5\u7684\u89c4\u5b9a\u8303\u56f4"),"\u5185"),(0,l.kt)("p",null,"\u6307\u5b9a\u5b57\u6bb5\u6dfb\u52a0\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO \u8868\u540d (\u5b57\u6bb5\u540d1, \u5b57\u6bb5\u540d2, ...) VALUES (\u503c1, \u503c2, ...);\n")),(0,l.kt)("p",null,"\u5168\u90e8\u5b57\u6bb5\u6dfb\u52a0\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO \u8868\u540d VALUES (\u503c1, \u503c2, ...);\n")),(0,l.kt)("p",null,"\u6279\u91cf\u6dfb\u52a0\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"--\u6307\u5b9a\u5b57\u6bb5\nINSERT INTO \u8868\u540d (\u5b57\u6bb5\u540d1, \u5b57\u6bb5\u540d2, ...) VALUES (\u503c1, \u503c2, ...), (\u503c1, \u503c2, ...), (\u503c1, \u503c2, ...);\n--\u5168\u90e8\u5b57\u6bb5\nINSERT INTO \u8868\u540d VALUES (\u503c1, \u503c2, ...), (\u503c1, \u503c2, ...), (\u503c1, \u503c2, ...);\n")),(0,l.kt)("p",null,"\u4fee\u6539\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE \u8868\u540d SET \u5b57\u6bb5\u540d1 = \u503c1, \u5b57\u6bb5\u540d2 = \u503c2, ... [ WHERE \u6761\u4ef6 ];\n-- \u4f8b\u5982\nUPDATE emp SET nickname = '\u4e50\u5fc3\u6e56' WHERE id = 1;\n")),(0,l.kt)("p",null,"\u5220\u9664\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM \u8868\u540d [ WHERE \u6761\u4ef6 ];\n")),(0,l.kt)("h2",{id:"dql"},"DQL"),(0,l.kt)("p",null,"\u6570\u636e\u67e5\u8be2\u8bed\u8a00\uff0c\u7528\u6765\u67e5\u8be2\u6570\u636e\u5e93\u4e2d\u8868\u7684\u8bb0\u5f55"),(0,l.kt)("h3",{id:"\u57fa\u7840\u67e5\u8be2"},"\u57fa\u7840\u67e5\u8be2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    \u5b57\u6bb5\u5217\u8868\nFROM\n    \u8868\u540d\u5b57\u6bb5\nWHERE\n    \u6761\u4ef6\u5217\u8868\nGROUP BY\n    \u5206\u7ec4\u5b57\u6bb5\u5217\u8868\nHAVING\n    \u5206\u7ec4\u540e\u7684\u6761\u4ef6\u5217\u8868\nORDER BY\n    \u6392\u5e8f\u5b57\u6bb5\u5217\u8868\nLIMIT\n    \u5206\u9875\u53c2\u6570\n")),(0,l.kt)("p",null,"\u67e5\u8be2\u6240\u6709\u5b57\u6bb5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM \u8868\u540d; \n-- \u5b9e\u9645\u5f00\u53d1\u4e2d\u5c3d\u91cf\u4e0d\u8981\u5199 * \u800c\u662f\u5efa\u8bae\u628a\u6bcf\u4e2a\u5b57\u6bb5\u90fd\u5199\u51fa\u6765\nSELECT id,name,age... FROM emp;\n")),(0,l.kt)("p",null,"\u67e5\u8be2\u7ed3\u679c\u5b57\u6bb5\u5e26\u522b\u540d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT \u5b57\u6bb51 [ AS \u522b\u540d1 ], \u5b57\u6bb52 [ AS \u522b\u540d2 ], \u5b57\u6bb53 [ AS \u522b\u540d3 ], ... FROM \u8868\u540d;\nSELECT \u5b57\u6bb51 [ \u522b\u540d1 ], \u5b57\u6bb52 [ \u522b\u540d2 ], \u5b57\u6bb53 [ \u522b\u540d3 ], ... FROM \u8868\u540d;\n")),(0,l.kt)("p",null,"\u53bb\u9664\u91cd\u590d\u8bb0\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT \u5b57\u6bb5\u5217\u8868 FROM \u8868\u540d;\n")),(0,l.kt)("h3",{id:"\u6761\u4ef6\u67e5\u8be2"},"\u6761\u4ef6\u67e5\u8be2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT \u5b57\u6bb5\u5217\u8868 FROM \u8868\u540d WHERE \u6761\u4ef6\u5217\u8868;\n")),(0,l.kt)("p",null,"\u6761\u4ef6\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6bd4\u8f83\u8fd0\u7b97\u7b26"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u529f\u80fd"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5927\u4e8e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},">="),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5927\u4e8e\u7b49\u4e8e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5c0f\u4e8e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<="),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5c0f\u4e8e\u7b49\u4e8e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"="),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7b49\u4e8e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"<>")," \u6216 !="),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u7b49\u4e8e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"BETWEEN \u2026 AND \u2026"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5728\u67d0\u4e2a\u8303\u56f4\u5185\uff08\u542b\u6700\u5c0f\u3001\u6700\u5927\u503c\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"IN(\u2026)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5728 in \u4e4b\u540e\u7684\u5217\u8868\u4e2d\u7684\u503c\uff0c\u591a\u9009\u4e00\uff0c\u6216\u7684\u610f\u601d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"LIKE \u5360\u4f4d\u7b26"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6a21\u7cca\u5339\u914d\uff08_\u5339\u914d\u5355\u4e2a\u5b57\u7b26\uff0c% \u5339\u914d\u4efb\u610f\u4e2a\u5b57\u7b26\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"IS NULL"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f NULL")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u903b\u8f91\u8fd0\u7b97\u7b26"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u529f\u80fd"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"AND \u6216 &&"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5e76\u4e14\uff08\u591a\u4e2a\u6761\u4ef6\u540c\u65f6\u6210\u7acb\uff09"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"OR \u6216 \\ "),(0,l.kt)("td",{parentName:"tr",align:"left"},"\\ "),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6216\u8005\uff08\u591a\u4e2a\u6761\u4ef6\u4efb\u610f\u4e00\u4e2a\u6210\u7acb\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"NOT \u6216 !"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\uff0c\u4e0d\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u5e74\u9f84\u7b49\u4e8e30\nselect * from emp where age = 30;\n-- \u6ca1\u6709\u8eab\u4efd\u8bc1\nselect * from emp where idcard is null or idcard = '';\n-- \u6709\u8eab\u4efd\u8bc1\nselect * from emp where idcard;\nselect * from emp where idcard is not null;\n-- \u4e0d\u7b49\u4e8e\nselect * from emp where age != 30;\n-- \u5e74\u9f84\u572820\u523030\u4e4b\u95f4\nselect * from emp where age between 20 and 30;\nselect * from emp where age >= 20 and age <= 30;\n-- \u4e0b\u9762\u8bed\u53e5\u4e0d\u62a5\u9519\uff0c\u4f46\u67e5\u4e0d\u5230\u4efb\u4f55\u4fe1\u606f\uff0c\u56e0\u6b64\u4e00\u5b9a\u8981\u4ece\u5148\u5199\u5c0f\u518d\u5199\u5927\nselect * from emp where age between 30 and 20;\n-- \u6027\u522b\u4e3a\u5973\u4e14\u5e74\u9f84\u5c0f\u4e8e30\nselect * from emp where age < 30 and gender = '\u5973';\n-- \u5e74\u9f84\u7b49\u4e8e25\u621630\u621635\nselect * from emp where age = 25 or age = 30 or age = 35;\nselect * from emp where age in (25, 30, 35);\n-- \u59d3\u540d\u4e3a\u4e24\u4e2a\u5b57\nselect * from emp where name like '__';\n-- \u59d3\u540d\u7b2c\u4e00\u4e2a\u5b57\u4e3a\u949f\nselect * from emp where name like '\u949f%';\n-- \u59d3\u540d\u6700\u540e\u7b2c\u4e00\u4e2a\u5b57\u4e3a\u96ea\nselect * from emp where name like '%\u96ea';\n-- \u8eab\u4efd\u8bc1\u6700\u540e\u4e3aX\nselect * from emp where idcard like '%X';\n")),(0,l.kt)("h3",{id:"\u805a\u5408\u67e5\u8be2"},"\u805a\u5408\u67e5\u8be2"),(0,l.kt)("p",null,"\u5c06\u4e00\u5217\u6570\u636e\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\uff0c\u8fdb\u884c\u7eb5\u5411\u8ba1\u7b97\u3002\u76f4\u63a5\u4f5c\u7528\u4e8e\u5b57\u6bb5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT \u805a\u5408\u51fd\u6570(\u5b57\u6bb5\u5217\u8868) FROM \u8868\u540d;\n")),(0,l.kt)("p",null,"\u5e38\u89c1\u805a\u5408\u51fd\u6570\u5982\u4e0b\uff0c\u6ce8\u610f\uff1a\u6240\u6709 null \u503c\u4e0d\u53c2\u4e0e\u805a\u5408\u8fd0\u7b97\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u51fd\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u529f\u80fd"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"count"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7edf\u8ba1\u6570\u91cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"max"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6700\u5927\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"min"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6700\u5c0f\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"avg"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5e73\u5747\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sum"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6c42\u548c")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u7edf\u8ba1\u4f01\u4e1a\u5458\u5de5\u6570\u91cf\nselect count(id) from emp;\n-- \u7edf\u8ba1\u4f01\u4e1a\u5e73\u5747\u5e74\u9f84\nselect avg(age) from emp;\n-- \u7edf\u8ba1\u897f\u5b89\u5730\u533a\u5458\u5de5\u7684\u5e74\u9f84\u4e4b\u548c\nselect sum(age) from emp where workaddr = '\u897f\u5b89';\n")),(0,l.kt)("h3",{id:"\u5206\u7ec4\u67e5\u8be2"},"\u5206\u7ec4\u67e5\u8be2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT \u5b57\u6bb5\u5217\u8868 FROM \u8868\u540d [ WHERE \u6761\u4ef6 ] GROUP BY \u5206\u7ec4\u5b57\u6bb5\u540d [ HAVING \u5206\u7ec4\u540e\u7684\u8fc7\u6ee4\u6761\u4ef6 ];\n")),(0,l.kt)("p",null,"\u5206\u7ec4\u5f80\u5f80\u4f34\u968f\u7740\u805a\u5408"),(0,l.kt)("p",null,"where \u548c having \u7684\u533a\u522b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u65f6\u673a\u4e0d\u540c\uff1awhere \u662f\u5206\u7ec4\u4e4b\u524d\u8fdb\u884c\u8fc7\u6ee4\uff0c\u4e0d\u6ee1\u8db3 where \u6761\u4ef6\u4e0d\u53c2\u4e0e\u5206\u7ec4\uff1bhaving \u662f\u5206\u7ec4\u540e\u5bf9\u7ed3\u679c\u8fdb\u884c\u8fc7\u6ee4\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5224\u65ad\u6761\u4ef6\u4e0d\u540c\uff1awhere \u4e0d\u80fd\u5bf9\u805a\u5408\u51fd\u6570\u8fdb\u884c\u5224\u65ad\uff0c\u800c having \u53ef\u4ee5\u3002")),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u987a\u5e8f\uff1awhere > \u805a\u5408\u51fd\u6570 > having"),(0,l.kt)("li",{parentName:"ul"},"\u5206\u7ec4\u4e4b\u540e\uff0c",(0,l.kt)("strong",{parentName:"li"},"\u67e5\u8be2\u7684\u5b57\u6bb5\u4e00\u822c\u4e3a\u805a\u5408\u51fd\u6570\u548c\u5206\u7ec4\u5b57\u6bb5"),"\uff0c\u67e5\u8be2\u5176\u4ed6\u5b57\u6bb5\u65e0\u4efb\u4f55\u610f\u4e49")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u6839\u636e\u6027\u522b\u5206\u7ec4\uff0c\u7edf\u8ba1\u7537\u6027\u548c\u5973\u6027\u6570\u91cf\uff08\u53ea\u663e\u793a\u5206\u7ec4\u6570\u91cf\uff0c\u4e0d\u663e\u793a\u54ea\u4e2a\u662f\u7537\u54ea\u4e2a\u662f\u5973\uff09\nselect count(*) from emp group by gender;\n-- \u6839\u636e\u6027\u522b\u5206\u7ec4\uff0c\u7edf\u8ba1\u7537\u6027\u548c\u5973\u6027\u6570\u91cf\nselect gender, count(*) from emp group by gender;\n-- \u6839\u636e\u6027\u522b\u5206\u7ec4\uff0c\u7edf\u8ba1\u7537\u6027\u548c\u5973\u6027\u7684\u5e73\u5747\u5e74\u9f84\nselect gender, avg(age) from emp group by gender;\n-- \u5e74\u9f84\u5c0f\u4e8e45\uff0c\u5e76\u6839\u636e\u5de5\u4f5c\u5730\u5740\u5206\u7ec4\uff0c\u83b7\u53d6\u5458\u5de5\u6570\u91cf\nselect workaddr, count(*) from emp where age < 45 group by workaddr;\n-- \u5e74\u9f84\u5c0f\u4e8e45\uff0c\u5e76\u6839\u636e\u5de5\u4f5c\u5730\u5740\u5206\u7ec4\uff0c\u83b7\u53d6\u5458\u5de5\u6570\u91cf\u5927\u4e8e\u7b49\u4e8e3\u7684\u5de5\u4f5c\u5730\u5740\nselect workaddr, count(*) address_count from emp where age < 45 group by workaddr having address_count >= 3;\n")),(0,l.kt)("h3",{id:"\u6392\u5e8f\u67e5\u8be2"},"\u6392\u5e8f\u67e5\u8be2"),(0,l.kt)("p",null,"\u5982\u679c\u662f\u591a\u5b57\u6bb5\u6392\u5e8f\uff0c\u5f53\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u503c\u76f8\u540c\u65f6\uff0c\u624d\u4f1a\u6839\u636e\u7b2c\u4e8c\u4e2a\u5b57\u6bb5\u8fdb\u884c\u6392\u5e8f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT \u5b57\u6bb5\u5217\u8868 FROM \u8868\u540d ORDER BY \u5b57\u6bb51 \u6392\u5e8f\u65b9\u5f0f1, \u5b57\u6bb52 \u6392\u5e8f\u65b9\u5f0f2;\n")),(0,l.kt)("p",null,"\u6392\u5e8f\u65b9\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ASC\uff1a\u5347\u5e8f\uff08\u9ed8\u8ba4\uff09"),(0,l.kt)("li",{parentName:"ul"},"DESC\uff1a\u964d\u5e8f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u6839\u636e\u5e74\u9f84\u5347\u5e8f\u6392\u5e8f\nselect * from emp order by age ASC;\nselect * from emp order by age;\n-- \u6839\u636e\u5e74\u9f84\u5bf9\u516c\u53f8\u7684\u5458\u5de5\u8fdb\u884c\u5347\u5e8f\u6392\u5e8f\uff0c\u5e74\u9f84\u76f8\u540c\uff0c\u518d\u6309\u7167\u5165\u804c\u65f6\u95f4\u8fdb\u884c\u964d\u5e8f\u6392\u5e8f\nselect * from emp order by age ASC, entrydate DESC;\n")),(0,l.kt)("h3",{id:"\u5206\u9875\u67e5\u8be2"},"\u5206\u9875\u67e5\u8be2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT \u5b57\u6bb5\u5217\u8868 FROM \u8868\u540d LIMIT \u8d77\u59cb\u7d22\u5f15, \u67e5\u8be2\u8bb0\u5f55\u6570;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8d77\u59cb\u7d22\u5f15\u4ece 0 \u5f00\u59cb\uff0c\u6240\u4ee5\u8fd9\u91cc\u6709\u4e2a\u516c\u5f0f\uff0c\u8d77\u59cb\u7d22\u5f15 = (\u67e5\u8be2\u9875\u7801 - 1) * \u6bcf\u9875\u663e\u793a\u8bb0\u5f55\u6570"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5206\u9875\u67e5\u8be2\u662f\u6570\u636e\u5e93\u7684\u65b9\u8a00\uff0c\u4e0d\u540c\u6570\u636e\u5e93\u6709\u4e0d\u540c\u5b9e\u73b0\uff0cMySQL \u662f LIMIT")),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u67e5\u8be2\u7684\u662f\u7b2c\u4e00\u9875\u6570\u636e\uff0c\u8d77\u59cb\u7d22\u5f15\u53ef\u4ee5\u7701\u7565\uff0c\u76f4\u63a5\u7b80\u5199 LIMIT 10")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u67e5\u8be2\u7b2c\u4e00\u9875\u6570\u636e\uff0c\u5c55\u793a10\u6761\nselect * from emp limit 0, 10;\n-- \u67e5\u8be2\u7b2c\u4e8c\u9875\uff0c\u6bcf\u9875\u5c55\u793a10\u6761\nselect * from emp limit 10, 10;\n")),(0,l.kt)("h3",{id:"dql-\u7ec3\u4e60"},"DQL \u7ec3\u4e60"),(0,l.kt)("p",null,"DQL \u7f16\u5199\u987a\u5e8f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY -> LIMIT\n")),(0,l.kt)("p",null,"DQL \u6267\u884c\u987a\u5e8f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.7wate.com/img/2022/05/11/e526304cef38f.png",alt:"img"})),(0,l.kt)("p",null,"\u6309\u7167\u9700\u6c42\u5b8c\u6210\u5982\u4e0b DQL \u8bed\u53e5\u7f16\u5199"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- 1\uff0e\u67e5\u8be2\u5e74\u9f84\u4e3a20,21,22,23\u5c81\u7684\u5458\u5de5\u4fe1\u606f\u3002\nselect * from emp where age in(20,21,22,23);\n-- 2\uff0e\u67e5\u8be2\u6027\u522b\u4e3a\u7537\uff0c\u5e76\u4e14\u5e74\u9f84\u572820-40\u5c81(\u542b)\u4ee5\u5185\u7684\u59d3\u540d\u4e3a\u4e09\u4e2a\u5b57\u7684\u5458\u5de5\u3002\nselect * from emp where gender = '\u7537' and age between 20 and 40 and name like '___';\n-- 3\uff0e\u7edf\u8ba1\u5458\u5de5\u8868\u4e2d\uff0c\u5e74\u9f84\u5c0f\u4e8e60\u5c81\u7684\uff0c\u7537\u6027\u5458\u5de5\u548c\u5973\u6027\u5458\u5de5\u7684\u4eba\u6570\u3002\nselect gender, count(*) from emp where age < 60 group by gender;\n-- 4\uff0e\u67e5\u8be2\u6240\u6709\u5e74\u9f84\u5c0f\u4e8e\u7b49\u4e8e35\u5c81\u5458\u5de5\u7684\u59d3\u540d\u548c\u5e74\u9f84\uff0c\u5e76\u5bf9\u67e5\u8be2\u7ed3\u679c\u6309\u5e74\u9f84\u5347\u5e8f\u6392\u5e8f\uff0c\u5982\u679c\u5e74\u9f84\u76f8\u540c\u6309\u5165\u804c\u65f6\u95f4\u964d\u5e8f\u6392\u5e8f\u3002\nselect name, age from emp where age < 35 order by age ASC, entrydata DESC;\n-- 5\u3001\u67e5\u8be2\u6027\u522b\u4e3a\u7537\uff0c\u4e14\u5e74\u9f84\u572820-40\u5c81(\u542b)\u4ee5\u5185\u7684\u524d5\u4e2a\u5458\u5de5\u4fe1\u606f\uff0c\u5bf9\u67e5\u8be2\u7684\u7ed3\u679c\u6309\u5e74\u9f84\u5347\u5e8f\u6392\u5e8f\uff0c\u5e74\u9f84\u76f8\u540c\u6309\u5165\u804c\u65f6\u95f4\u5347\u5e8f\u6392\u5e8f\u3002\nselect * from emp where (gender = '\u7537') and (age >= 20 and age <=40) order by age ASC,entrydata DESC limit 5;\n")),(0,l.kt)("h2",{id:"dcl"},"DCL"),(0,l.kt)("p",null,"\u6570\u636e\u63a7\u5236\u8bed\u8a00\uff0c\u7528\u6765\u521b\u5efa\u6570\u636e\u5e93\u7528\u6237\u3001\u63a7\u5236\u6570\u636e\u5e93\u7684\u8bbf\u95ee\u6743\u9650"),(0,l.kt)("h3",{id:"\u7528\u6237\u7ba1\u7406"},"\u7528\u6237\u7ba1\u7406"),(0,l.kt)("p",null,"\u67e5\u8be2\u7528\u6237"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"use mysql;\nselect * from user;\n")),(0,l.kt)("p",null,"\u521b\u5efa\u7528\u6237"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER '\u7528\u6237\u540d'@'\u4e3b\u673a\u540d' IDENTIFIED BY '\u5bc6\u7801';\n")),(0,l.kt)("p",null,"\u4fee\u6539\u7528\u6237\u5bc6\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER '\u7528\u6237\u540d'@'\u4e3b\u673a\u540d' IDENTIFIED WITH mysql_native_password BY '\u65b0\u5bc6\u7801';\n")),(0,l.kt)("p",null,"\u5220\u9664\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP USER '\u7528\u6237\u540d'@'\u4e3b\u673a\u540d';\n")),(0,l.kt)("p",null,"\u4f8b\u5b50"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u521b\u5efa\u7528\u6237lxh\uff0c\u53ea\u80fd\u5728\u5f53\u524d\u4e3b\u673alocalhost\u8bbf\u95ee\ncreate user 'lxh'@'localhost' identified by '123456';\n-- \u521b\u5efa\u7528\u6237test\uff0c\u80fd\u5728\u4efb\u610f\u4e3b\u673a\u8bbf\u95ee\uff0c\u4f7f\u7528 % \u901a\u914d\u7b26\u53f7\ncreate user 'lxh'@'%' identified by '123456';\ncreate user 'lxh' identified by '123456';\n-- \u4fee\u6539\u5bc6\u7801\nalter user 'lxh'@'localhost' identified with mysql_native_password by '123';\n-- \u5220\u9664\u7528\u6237\ndrop user 'lxh'@'localhost';\n")),(0,l.kt)("h3",{id:"\u6743\u9650\u7ba1\u7406"},"\u6743\u9650\u7ba1\u7406"),(0,l.kt)("p",null,"\u5e38\u89c1\u7684\u6743\u9650\u5982\u4e0b\uff0c\u66f4\u5177\u4f53\u9700\u8981\u767e\u5ea6\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6743\u9650"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ALL, ALL PRIVILEGES"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6240\u6709\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"SELECT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u6570\u636e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"INSERT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u63d2\u5165\u6570\u636e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"UPDATE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4fee\u6539\u6570\u636e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DELETE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5220\u9664\u6570\u636e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ALTER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4fee\u6539\u8868")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DROP"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5220\u9664\u6570\u636e\u5e93 / \u8868 / \u89c6\u56fe")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"CREATE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u521b\u5efa\u6570\u636e\u5e93 / \u8868")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u67e5\u8be2\u6743\u9650\uff1a\nSHOW GRANTS FOR '\u7528\u6237\u540d'@'\u4e3b\u673a\u540d';\n\n-- \u6388\u4e88\u6743\u9650\uff1a\nGRANT \u6743\u9650\u5217\u8868 ON \u6570\u636e\u5e93\u540d.\u8868\u540d TO '\u7528\u6237\u540d'@'\u4e3b\u673a\u540d';\n\n-- \u64a4\u9500\u6743\u9650\uff1a\nREVOKE \u6743\u9650\u5217\u8868 ON \u6570\u636e\u5e93\u540d.\u8868\u540d FROM '\u7528\u6237\u540d'@'\u4e3b\u673a\u540d';\n\n-- \u6ce8\u610f\uff1a\n    -- \u591a\u4e2a\u6743\u9650\u7528\u9017\u53f7\u5206\u9694\n    -- \u6388\u6743\u65f6\uff0c\u6570\u636e\u5e93\u540d\u548c\u8868\u540d\u53ef\u4ee5\u7528 * \u8fdb\u884c\u901a\u914d\uff0c\u4ee3\u8868\u6240\u6709\n")))}u.isMDXComponent=!0}}]);