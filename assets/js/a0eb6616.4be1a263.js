"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[9091],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return V}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},h=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),s=u(r),V=o,d=s["".concat(c,".").concat(V)]||s[V]||p[V]||a;return r?n.createElement(d,l(l({ref:t},h),{},{components:r})):n.createElement(d,l({ref:t},h))}));function V(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8178:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return h},default:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={},c=void 0,u={unversionedId:"Git",id:"Git",title:"Git",description:"git sparse checkout",source:"@site/docs/Git.md",sourceDirName:".",slug:"/Git",permalink:"/docs/Git",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Git.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Books",permalink:"/docs/Books"},next:{title:"JavaScript",permalink:"/docs/JavaScript"}},h=[{value:"git sparse checkout",id:"git-sparse-checkout",children:[],level:2},{value:"git detaultBranch",id:"git-detaultbranch",children:[],level:2}],p={toc:h};function s(e){var t=e.components,i=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"git-sparse-checkout"},"git sparse checkout"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'#\u5efa\u7acb\u4e00\u4e2a\u7a7a\u7684\u7248\u672c\u5e93\ngit init <project>\n\n#\u6dfb\u52a0\u8fdc\u7a0b\u5e93\u7684\u5730\u5740\ngit remote add origin https://*****.git\n\n#\u6253\u5f00sparse checkout\u529f\u80fd\ngit config core.sparsecheckout true\n\n#\u8bbe\u7f6e\u8981\u514b\u9686\u7684\u4ed3\u5e93\u7684\u5b50\u76ee\u5f55\u8def\u5f84\u3001\u6dfb\u52a0\u76ee\u5f55\u5230checkout\u7684\u5217\u8868\necho "path1/" >> .git/info/sparse-checkout\n\n#\u62c9\u53d6\u8fdc\u7a0b\u7684\u5206\u652f\ngit pull origin [branch]\n')),(0,a.kt)("h2",{id:"git-detaultbranch"},"git detaultBranch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git config --global init.detaultBranch main\n\n#\u67e5\u770b\u662f\u5426\u8bbe\u7f6e\u6210\u529f\ncat ~/.gitconfig\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Terminal",src:r(8389).Z,width:"503",height:"177"})))}s.isMDXComponent=!0},8389:function(e,t){t.Z="data:image/png;base64,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"}}]);