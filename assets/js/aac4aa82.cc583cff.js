"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[7631],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3769:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],u={},s=void 0,l={unversionedId:"DesignPatterns/Builder",id:"DesignPatterns/Builder",title:"Builder",description:"\u751f\u6210\u5668\u6a21\u5f0f\u662f\u4e00\u79cd\u521b\u5efa\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u4f7f\u4f60\u80fd\u591f\u5206\u6b65\u9aa4\u521b\u5efa\u590d\u6742\u5bf9\u8c61\u3002\u8be5\u6a21\u5f0f\u5141\u8bb8\u4f60\u4f7f\u7528\u76f8\u540c\u7684\u521b\u5efa\u4ee3\u7801\u751f\u6210\u4e0d\u540c\u7c7b\u578b\u548c\u5f62\u5f0f\u7684\u5bf9\u8c61",source:"@site/docs/DesignPatterns/Builder.md",sourceDirName:"DesignPatterns",slug:"/DesignPatterns/Builder",permalink:"/docs/DesignPatterns/Builder",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DesignPatterns/Builder.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bridge",permalink:"/docs/DesignPatterns/Bridge"},next:{title:"Chain-of-Responsibility",permalink:"/docs/DesignPatterns/Chain-of-Responsibility"}},c=[],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u751f\u6210\u5668\u6a21\u5f0f\u662f\u4e00\u79cd\u521b\u5efa\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u4f7f\u4f60\u80fd\u591f\u5206\u6b65\u9aa4\u521b\u5efa\u590d\u6742\u5bf9\u8c61\u3002\u8be5\u6a21\u5f0f\u5141\u8bb8\u4f60\u4f7f\u7528\u76f8\u540c\u7684\u521b\u5efa\u4ee3\u7801\u751f\u6210\u4e0d\u540c\u7c7b\u578b\u548c\u5f62\u5f0f\u7684\u5bf9\u8c61")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"class Request {\n    constructor() {\n        this.url = '';\n        this.method = '';\n        this.payload = {};\n    }\n}\n\nclass RequestBuilder {\n    constructor() {\n        this.request = new Request();\n    }\n\n    forUrl(url) {\n        this.request.url = url;\n        return this;\n    }\n\n    useMethod(method) {\n        this.request.method = method;\n        return this;\n    }\n\n    payload(payload) {\n        this.request.payload = payload;\n        return this;\n    }\n\n    build() {\n        return this.request;\n    }\n}\n\nconst requestBuilder = new RequestBuilder();\n\nrequestBuilder\n    .forUrl('http://localhost')\n    .useMethod('GET')\n    .payload(null)\n    .build(); //Request { url: 'http://localhost', method: 'GET', payload: null }\n")))}d.isMDXComponent=!0}}]);