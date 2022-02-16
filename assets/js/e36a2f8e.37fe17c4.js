"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[5392],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),d=o,f=l["".concat(c,".").concat(d)]||l[d]||m[d]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=l;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},5232:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={},c=void 0,u={unversionedId:"DesignPatterns/Composite",id:"DesignPatterns/Composite",title:"Composite",description:"\u7ec4\u5408\u6a21\u5f0f\u662f\u4e00\u79cd\u7ed3\u6784\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c \u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u5c06\u5bf9\u8c61\u7ec4\u5408\u6210\u6811\u72b6\u7ed3\u6784\uff0c \u5e76\u4e14\u80fd\u50cf\u4f7f\u7528\u72ec\u7acb\u5bf9\u8c61\u4e00\u6837\u4f7f\u7528\u5b83\u4eec",source:"@site/docs/DesignPatterns/Composite.md",sourceDirName:"DesignPatterns",slug:"/DesignPatterns/Composite",permalink:"/docs/DesignPatterns/Composite",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DesignPatterns/Composite.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command",permalink:"/docs/DesignPatterns/Command"},next:{title:"Decorator",permalink:"/docs/DesignPatterns/Decorator"}},p=[],m={toc:p};function l(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u7ec4\u5408\u6a21\u5f0f\u662f\u4e00\u79cd\u7ed3\u6784\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c \u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u5c06\u5bf9\u8c61\u7ec4\u5408\u6210\u6811\u72b6\u7ed3\u6784\uff0c \u5e76\u4e14\u80fd\u50cf\u4f7f\u7528\u72ec\u7acb\u5bf9\u8c61\u4e00\u6837\u4f7f\u7528\u5b83\u4eec")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"class Equipment {\n    getPrice() {\n        return this.price ?? 0;\n    }\n\n    getName() {\n        return this.name;\n    }\n\n    setName(name) {\n        this.name = name;\n    }\n}\n\nclass Composite extends Equipment {\n    constructor() {\n        super();\n        this.equipments = [];\n    }\n\n    add(equipment) {\n        this.equipments.push(equipment);\n    }\n\n    getPrice() {\n        return this.equipments\n            .map((equipment) => equipment.getPrice())\n            .reduce((pre, cur) => pre + cur);\n    }\n}\n\nclass Cabinet extends Composite {\n    constructor() {\n        super();\n        this.setName('cabinet');\n    }\n}\n\nclass FloppyDisk extends Equipment {\n    constructor() {\n        super();\n        this.setName('Floppy Disk');\n        this.price = 70;\n    }\n}\n\nclass HardDrive extends Equipment {\n    constructor() {\n        super();\n        this.setName('Hard Drive');\n        this.price = 250;\n    }\n}\n\nclass Memory extends Equipment {\n    constructor() {\n        super();\n        this.setName('Memory');\n        this.price = 200;\n    }\n}\n\nconst cabinet = new Cabinet();\ncabinet.add(new FloppyDisk());\ncabinet.add(new HardDrive());\ncabinet.add(new Memory());\n\nconsole.log(cabinet.getPrice(), cabinet.getName(), cabinet);\n")))}l.isMDXComponent=!0}}]);