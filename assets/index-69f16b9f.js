import{R as n}from"./index-feeb6332.js";import"./_commonjsHelpers-48992372.js";const u=n.createContext({});function s(t){return e;function e(o){const r=c(o.components);return n.createElement(t,{...o,allComponents:r})}}function c(t){const e=n.useContext(u);return n.useMemo(()=>typeof t=="function"?t(e):{...e,...t},[e,t])}const i={};function C({components:t,children:e,disableParentContext:o}){let r=c(t);return o&&(r=t||i),n.createElement(u.Provider,{value:r},e)}export{u as MDXContext,C as MDXProvider,c as useMDXComponents,s as withMDXComponents};
//# sourceMappingURL=index-69f16b9f.js.map