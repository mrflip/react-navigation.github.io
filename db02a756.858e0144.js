(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{422:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(1),i=t(9),o=(t(0),t(474)),a={id:"use-link-builder",title:"useLinkBuilder",sidebar_label:"useLinkBuilder"},c={id:"version-5.x/use-link-builder",title:"useLinkBuilder",description:"> Note: This API is experimental and might change in a minor version.",source:"@site/versioned_docs/version-5.x/use-link-builder.md",permalink:"/docs/use-link-builder",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/use-link-builder.md",version:"5.x",sidebar_label:"useLinkBuilder",sidebar:"version-5.x/docs",previous:{title:"useLinkProps",permalink:"/docs/use-link-props"},next:{title:"useLinking",permalink:"/docs/use-linking"}},s=[],u={rightToc:s};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: This API is experimental and might change in a minor version.")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"useLinkBuilder")," hook let's us build a path to use for links for a screen in the current navigator's state. It returns a function that takes ",Object(o.b)("inlineCode",{parentName:"p"},"name")," and ",Object(o.b)("inlineCode",{parentName:"p"},"params")," for the screen to focus and returns path based on the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/navigation-container#linking"}),Object(o.b)("inlineCode",{parentName:"a"},"linking")," options"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { Link, CommonActions, useLinkBuilder } from '@react-navigation/native';\n\n// ...\n\nfunction DrawerContent({ state, navigation, descriptors }) {\n  const buildLink = useLinkBuilder();\n\n  return state.routes((route) => (\n    <Link\n      to={buildLink(route.name, route.params)}\n      action={CommonActions.navigate(route.name)}\n    >\n      {descriptors[route.key].options.title}\n    </Link>\n  ));\n}\n")),Object(o.b)("p",null,"This hook is intended to be used in navigators to show links to various pages in it, such as drawer and tab navigators. If you're building a custom navigator, custom drawer content, custom tab bar etc. then you might want to use this hook."),Object(o.b)("p",null,"There are couple of important things to note:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The destination screen must be present in the current navigator. It cannot be in a parent navigator or a navigator nested in a child. For example, in the above case, the navigator containing ",Object(o.b)("inlineCode",{parentName:"li"},"Home")," should also contain the ",Object(o.b)("inlineCode",{parentName:"li"},"Profile")," screen."),Object(o.b)("li",{parentName:"ul"},"It's intended to be only used in custom navigators to keep them reusable in multiple apps. For your regular app code, use paths directly instead of building paths for screens.")))}l.isMDXComponent=!0},474:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),l=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},p=function(e){var n=l(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return t?i.a.createElement(m,c({ref:n},u,{components:t})):i.a.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);