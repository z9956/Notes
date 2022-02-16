"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[5681],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=i,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2748:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={},u=void 0,l={unversionedId:"Configuration/prettier",id:"Configuration/prettier",title:"prettier",description:"\u5b89\u88c5\u4f9d\u8d56",source:"@site/docs/Configuration/prettier.md",sourceDirName:"Configuration",slug:"/Configuration/prettier",permalink:"/docs/Configuration/prettier",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Configuration/prettier.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"npmrc",permalink:"/docs/Configuration/npmrc"},next:{title:"tsconfig",permalink:"/docs/Configuration/tsconfig"}},p=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",children:[],level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[],level:2},{value:".husky/pre-commit",id:"huskypre-commit",children:[],level:2},{value:".prettierrc",id:"prettierrc",children:[],level:2}],s={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D husky prettier pretty-quick\n")),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx husky install\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'npm set-script prepare "husky install"\n')),(0,o.kt)("h2",{id:"huskypre-commit"},".husky/pre-commit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx pretty-quick --staged\n#or\nnpx --no-install pretty-quick --staged\n#or\nyarn pretty-quick --staged\n")),(0,o.kt)("h2",{id:"prettierrc"},".prettierrc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},"{\n    trailingComma: 'all',\n    semi: true,\n    printWidth: 80,\n    tabWidth: 2,\n    useTabs: true,\n    singleQuote: true,\n    jsxBracketSameLine: true,\n}\n")))}f.isMDXComponent=!0}}]);