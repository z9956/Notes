"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[7089],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6147:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},s=void 0,u={unversionedId:"DesignPatterns/Iterator",id:"DesignPatterns/Iterator",title:"Iterator",description:"\u8fed\u4ee3\u5668\u6a21\u5f0f\u662f\u4e00\u79cd\u884c\u4e3a\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u8ba9\u4f60\u80fd\u5728\u4e0d\u66b4\u9732\u96c6\u5408\u5e95\u5c42\u8868\u73b0\u5f62\u5f0f\uff08\u5217\u8868\u3001\u6808\u548c\u6811\u7b49\uff09\u7684\u60c5\u51b5\u4e0b\u904d\u5386\u96c6\u5408\u4e2d\u6240\u6709\u7684\u5143\u7d20",source:"@site/docs/DesignPatterns/Iterator.md",sourceDirName:"DesignPatterns",slug:"/DesignPatterns/Iterator",permalink:"/docs/DesignPatterns/Iterator",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DesignPatterns/Iterator.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flyweight",permalink:"/docs/DesignPatterns/Flyweight"},next:{title:"Mediator",permalink:"/docs/DesignPatterns/Mediator"}},l=[],p={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fed\u4ee3\u5668\u6a21\u5f0f\u662f\u4e00\u79cd\u884c\u4e3a\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u8ba9\u4f60\u80fd\u5728\u4e0d\u66b4\u9732\u96c6\u5408\u5e95\u5c42\u8868\u73b0\u5f62\u5f0f\uff08\u5217\u8868\u3001\u6808\u548c\u6811\u7b49\uff09\u7684\u60c5\u51b5\u4e0b\u904d\u5386\u96c6\u5408\u4e2d\u6240\u6709\u7684\u5143\u7d20")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Iterator {\n    constructor(el) {\n        this.index = 0;\n        this.elements = el;\n    }\n\n    next() {\n        return this.elements[this.index++];\n    }\n\n    hasNext() {\n        return this.index < this.elements.length;\n    }\n}\n\nconst list = new Iterator([1, 2, 3]);\nlist.next(); //1\nlist.next(); //2\nlist.next(); //3\nlist.hasNext(); //false\n")))}f.isMDXComponent=!0}}]);