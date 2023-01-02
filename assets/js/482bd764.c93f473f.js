"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[5928],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||l;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const l={id:"\u63a7\u5236\u8bed\u53e5",title:"\u63a7\u5236\u8bed\u53e5",sidebar_position:3,data:"2022\u5e744\u670826\u65e5"},i=void 0,o={unversionedId:"Java/\u63a7\u5236\u8bed\u53e5",id:"Java/\u63a7\u5236\u8bed\u53e5",title:"\u63a7\u5236\u8bed\u53e5",description:"Java \u4e2d\u7684\u63a7\u5236\u8bed\u53e5\u5176\u5b9e\u548c C \u4e00\u6837\uff0c\u4f1a\u6d89\u53ca\u5200\u5305\u62ec if-else\u3001while\u3001do-while\u3001for\u3001return\u3001break\u3001switch\u3002",source:"@site/wiki/programming-language/Java/\u63a7\u5236\u8bed\u53e5.md",sourceDirName:"Java",slug:"/Java/\u63a7\u5236\u8bed\u53e5",permalink:"/programming-language/Java/\u63a7\u5236\u8bed\u53e5",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"\u63a7\u5236\u8bed\u53e5",title:"\u63a7\u5236\u8bed\u53e5",sidebar_position:3,data:"2022\u5e744\u670826\u65e5"},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u672c\u8bed\u6cd5",permalink:"/programming-language/Java/\u57fa\u672c\u8bed\u6cd5"},next:{title:"\u9762\u5bf9\u5bf9\u8c61",permalink:"/programming-language/Java/\u9762\u5bf9\u5bf9\u8c61"}},u={},s=[{value:"\u6761\u4ef6\u8bed\u53e5",id:"\u6761\u4ef6\u8bed\u53e5",level:2},{value:"if \u8bed\u53e5",id:"if-\u8bed\u53e5",level:3},{value:"if...else \u8bed\u53e5",id:"ifelse-\u8bed\u53e5",level:3},{value:"if...else if \u591a\u5206\u652f\u8bed\u53e5",id:"ifelse-if-\u591a\u5206\u652f\u8bed\u53e5",level:3},{value:"switch \u591a\u5206\u652f\u8bed\u53e5",id:"switch-\u591a\u5206\u652f\u8bed\u53e5",level:3},{value:"\u5faa\u73af\u8bed\u53e5",id:"\u5faa\u73af\u8bed\u53e5",level:2},{value:"while \u5faa\u73af\u8bed\u53e5",id:"while-\u5faa\u73af\u8bed\u53e5",level:3},{value:"do...while \u5faa\u73af\u8bed\u53e5",id:"dowhile-\u5faa\u73af\u8bed\u53e5",level:3},{value:"for \u5faa\u73af\u8bed\u53e5",id:"for-\u5faa\u73af\u8bed\u53e5",level:3},{value:"\u9017\u53f7\u64cd\u4f5c\u7b26",id:"\u9017\u53f7\u64cd\u4f5c\u7b26",level:4},{value:"for-each \u8bed\u53e5",id:"for-each-\u8bed\u53e5",level:4},{value:"\u8df3\u8f6c\u8bed\u53e5",id:"\u8df3\u8f6c\u8bed\u53e5",level:2},{value:"break \u8bed\u53e5",id:"break-\u8bed\u53e5",level:3},{value:"continue \u8bed\u53e5",id:"continue-\u8bed\u53e5",level:3},{value:"return \u8bed\u53e5",id:"return-\u8bed\u53e5",level:3}],p={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Java \u4e2d\u7684\u63a7\u5236\u8bed\u53e5\u5176\u5b9e\u548c C \u4e00\u6837\uff0c\u4f1a\u6d89\u53ca\u5200\u5305\u62ec ",(0,a.kt)("strong",{parentName:"p"},"if-else\u3001while\u3001do-while\u3001for\u3001return\u3001break\u3001switch"),"\u3002"),(0,a.kt)("h2",{id:"\u6761\u4ef6\u8bed\u53e5"},"\u6761\u4ef6\u8bed\u53e5"),(0,a.kt)("h3",{id:"if-\u8bed\u53e5"},"if \u8bed\u53e5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"int a = 10;\n\nif(a > 10){\n return true;\n}\n\nreturn false;\n")),(0,a.kt)("h3",{id:"ifelse-\u8bed\u53e5"},"if...else \u8bed\u53e5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'int a = 10;\nint b = 11;\n\nif(a >= b){\n System.out.println("a >= b");\n}else{\n System.out.println("a < b");\n}\n')),(0,a.kt)("h3",{id:"ifelse-if-\u591a\u5206\u652f\u8bed\u53e5"},"if...else if \u591a\u5206\u652f\u8bed\u53e5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'int x = 40;\n\nif(x > 60) {\n System.out.println("x\u7684\u503c\u5927\u4e8e60");\n} else if (x > 30) {\n System.out.println("x\u7684\u503c\u5927\u4e8e30\u4f46\u5c0f\u4e8e60");\n} else if (x > 0) {\n System.out.println("x\u7684\u503c\u5927\u4e8e0\u4f46\u5c0f\u4e8e30");\n} else {\n System.out.println("x\u7684\u503c\u5c0f\u4e8e\u7b49\u4e8e0");\n}\n')),(0,a.kt)("h3",{id:"switch-\u591a\u5206\u652f\u8bed\u53e5"},"switch \u591a\u5206\u652f\u8bed\u53e5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'switch (week) {\n case 1:\n  System.out.println("Monday");\n  break;\n case 2:\n        System.out.println("Tuesday");\n        break;\n case 3:\n        System.out.println("Wednesday");\n        break;\n case 4:\n        System.out.println("Thursday");\n        break;\n case 5:\n        System.out.println("Friday");\n        break;\n case 6:\n        System.out.println("Saturday");\n        break;\n case 7:\n        System.out.println("Sunday");\n        break;\n default:\n        System.out.println("No Else");\n        break;\n}\n')),(0,a.kt)("h2",{id:"\u5faa\u73af\u8bed\u53e5"},"\u5faa\u73af\u8bed\u53e5"),(0,a.kt)("h3",{id:"while-\u5faa\u73af\u8bed\u53e5"},"while \u5faa\u73af\u8bed\u53e5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"while\uff08\u5e03\u5c14\u503c\uff09{\n \u8868\u8fbe\u5f0f\n}\n")),(0,a.kt)("h3",{id:"dowhile-\u5faa\u73af\u8bed\u53e5"},"do...while \u5faa\u73af\u8bed\u53e5"),(0,a.kt)("p",null,"while \u4e0e do...while \u5faa\u73af\u7684\u552f\u4e00\u533a\u522b\u662f do...while \u8bed\u53e5\u6700\u5c11\u6267\u884c\u4e00\u6b21\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'int b = 10;\ndo {\n System.out.println("b== " + b);\n b--;\n} while(b == 1);\n')),(0,a.kt)("h3",{id:"for-\u5faa\u73af\u8bed\u53e5"},"for \u5faa\u73af\u8bed\u53e5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"for\uff08\u521d\u59cb\u5316; \u5e03\u5c14\u8868\u8fbe\u5f0f; \u6b65\u8fdb){}\n")),(0,a.kt)("p",null,"\u6bcf\u6b21\u8fed\u4ee3\u524d\u4f1a\u6d4b\u8bd5\u5e03\u5c14\u8868\u8fbe\u5f0f\uff0c\u5982\u679c\u83b7\u5f97\u7684\u7ed3\u679c\u662f false\uff0c\u5c31\u4f1a\u6267\u884c for \u8bed\u53e5\u540e\u9762\u7684\u4ee3\u7801\uff1b\u6bcf\u6b21\u5faa\u73af\u7ed3\u675f\uff0c\u4f1a\u6309\u7167\u6b65\u8fdb\u7684\u503c\u6267\u884c\u4e0b\u4e00\u6b21\u5faa\u73af\u3002"),(0,a.kt)("h4",{id:"\u9017\u53f7\u64cd\u4f5c\u7b26"},"\u9017\u53f7\u64cd\u4f5c\u7b26"),(0,a.kt)("p",null,"\u5728 for \u8bed\u53e5\u8868\u8fbe\u5f0f\u521d\u59cb\u5316\u90e8\u5206\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e00\u7cfb\u5217\u7684\u9017\u53f7\u5206\u9694\u7684\u8bed\u53e5\uff1b\u901a\u8fc7\u9017\u53f7\u64cd\u4f5c\u7b26\uff0c\u53ef\u4ee5\u5728 for \u8bed\u53e5\u5185\u5b9a\u4e49\u591a\u4e2a\u53d8\u91cf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"for(int i = 1; j = i + 10;i < 5;i++, j = j * 2){}\n")),(0,a.kt)("h4",{id:"for-each-\u8bed\u53e5"},"for-each \u8bed\u53e5"),(0,a.kt)("p",null,"for-each \u8bed\u53e5\u662f\u4e00\u79cd\u66f4\u52a0\u7b80\u4ecb\u7684\u3001\u65b9\u4fbf\u5bf9\u6570\u7ec4\u548c\u96c6\u5408\u8fdb\u884c\u904d\u5386\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"int array[] = {7, 8, 9};\n\nfor (int arr : array) {\n System.out.println(arr);\n}\n")),(0,a.kt)("h2",{id:"\u8df3\u8f6c\u8bed\u53e5"},"\u8df3\u8f6c\u8bed\u53e5"),(0,a.kt)("h3",{id:"break-\u8bed\u53e5"},"break \u8bed\u53e5"),(0,a.kt)("p",null,"\u7ec8\u6b62\u5faa\u73af"),(0,a.kt)("h3",{id:"continue-\u8bed\u53e5"},"continue \u8bed\u53e5"),(0,a.kt)("p",null,"\u8df3\u51fa\u5f53\u524d\u5faa\u73af\u3001\u6267\u884c\u4e0b\u6b21\u5faa\u73af\u3002"),(0,a.kt)("h3",{id:"return-\u8bed\u53e5"},"return \u8bed\u53e5"),(0,a.kt)("p",null,"\u8fd4\u56de\u8bed\u53e5"))}c.isMDXComponent=!0}}]);