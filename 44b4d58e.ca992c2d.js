(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return g}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,g=u["".concat(a,".").concat(f)]||u[f]||b[f]||i;return r?o.a.createElement(g,c(c({ref:t},s),{},{components:r})):o.a.createElement(g,c({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),o=(r(0),r(106));const i={id:"contributors",title:"Contributors"},a={unversionedId:"poller/contributors",id:"poller/contributors",isDocsHomePage:!1,title:"Contributors",description:"Many thanks to mabunixda for helping begin our Docker support!",source:"@site/docs/poller/contributors.md",slug:"/poller/contributors",permalink:"/docs/poller/contributors",version:"current",sidebar:"someSidebar",previous:{title:"Other Guides",permalink:"/docs/poller/otherguides"},next:{title:"Change Log",permalink:"/docs/poller/changelog"}},c=[{value:"Integrations",id:"integrations",children:[]}],l={toc:c};function s({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Many thanks to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mabunixda"},"mabunixda")," for helping begin our Docker support!\nThe images are built automatically by Docker Cloud using the Dockerfile included in the main repo."),Object(o.b)("p",null,"The Docker Compose file and example environment variable configuration were graciously\nprovided ",Object(o.b)("a",{parentName:"p",href:"https://github.com/jonbloom"},"@jonbloom"),"."),Object(o.b)("p",null,"Thanks to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/lux4rd0"},"@lux4rd0")," for the Loki Docker compose example."),Object(o.b)("p",null,"Thanks to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/camprr"},"@camprr")," for the work on installing UniFi Poller on a Cloud Key."),Object(o.b)("p",null,"Sir ",Object(o.b)("a",{parentName:"p",href:"https://github.com/PianSom"},"@PianSom")," spent many painstaking weeks putting this\nincredible website together. The community loves you for this!"),Object(o.b)("h3",{id:"integrations"},"Integrations"),Object(o.b)("p",null,"The following fine folks are providing their services, completely free!\nThese service integrations are used for things like storage, building, compiling,\ndistribution and documentation support. This project succeeds because of them. Thank you!"),Object(o.b)("a",{title:"PackageCloud",alt:"PackageCloud",href:"https://packagecloud.io"},Object(o.b)("img",{src:"https://docs.golift.io/integrations/packagecloud.png"}))," \xa0",Object(o.b)("a",{title:"GitHub",alt:"GitHub",href:"https://GitHub.com"},Object(o.b)("img",{src:"https://docs.golift.io/integrations/octocat.png"}))," \xa0",Object(o.b)("a",{title:"Docker Cloud",alt:"Docker",href:"https://cloud.docker.com"},Object(o.b)("img",{src:"https://docs.golift.io/integrations/docker.png"}))," \xa0",Object(o.b)("a",{title:"Travis-CI",alt:"Travis-CI",href:"https://Travis-CI.com"},Object(o.b)("img",{src:"https://docs.golift.io/integrations/travis-ci.png"}))," \xa0",Object(o.b)("a",{title:"Homebrew",alt:"Homebrew",href:"https://brew.sh"},Object(o.b)("img",{src:"https://docs.golift.io/integrations/homebrew.png"}))," \xa0",Object(o.b)("a",{title:"Go Lift",alt:"Go Lift",href:"https://golift.io"},Object(o.b)("img",{src:"https://docs.golift.io/integrations/golift.png"}))," \xa0",Object(o.b)("a",{title:"Grafana",alt:"Grafana",href:"https://grafana.com"},Object(o.b)("img",{src:"https://docs.golift.io/integrations/grafana.png"}))," \xa0")}s.isMDXComponent=!0}}]);