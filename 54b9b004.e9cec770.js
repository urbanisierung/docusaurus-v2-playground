(window.webpackJsonp=window.webpackJsonp||[]).push([[647],{2105:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,b=d["".concat(c,".").concat(m)]||d[m]||l[m]||a;return t?o.a.createElement(b,i(i({ref:r},s),{},{components:t})):o.a.createElement(b,i({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},703:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return u})),t.d(r,"Highlight",(function(){return s})),t.d(r,"default",(function(){return d}));var n=t(2),o=t(6),a=(t(0),t(2105)),c={id:"mdx",title:"Powered by MDX"},i={unversionedId:"mdx",id:"version-1.2.0/mdx",isDocsHomePage:!1,title:"Powered by MDX",description:"You can write JSX and use React components within your Markdown thanks to MDX.",source:"@site/versioned_docs/version-1.2.0/mdx.md",slug:"/mdx",permalink:"/docusaurus-v2-playground/docs/1.2.0/mdx",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.2.0/mdx.md",version:"1.2.0",sidebar:"version-1.2.0/someSidebar",previous:{title:"This is Document Number 4",permalink:"/docusaurus-v2-playground/docs/1.2.0/doc4"}},u=[],s=function(e){var r=e.children,t=e.color;return Object(a.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},p={rightToc:u,Highlight:s};function d(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can write JSX and use React components within your Markdown thanks to ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://mdxjs.com/"}),"MDX"),"."),Object(a.b)(s,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",Object(a.b)(s,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",Object(a.b)("p",null,"I can write ",Object(a.b)("strong",{parentName:"p"},"Markdown")," alongside my ",Object(a.b)("em",{parentName:"p"},"JSX"),"!"))}d.isMDXComponent=!0}}]);