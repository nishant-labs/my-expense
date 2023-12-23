import{j as e,N as h,C as _,a as R,b as p,r as i,S as A,O as $,c as O,R as T,d as m,e as E,f as S,g as B,h as C,i as I,k,T as G}from"./vendor-VA6rW78p.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const D="modulepreload",H=function(t){return"/my-expense/"+t},x={},g=function(r,s,c){let n=Promise.resolve();if(s&&s.length>0){const a=document.getElementsByTagName("link");n=Promise.all(s.map(o=>{if(o=H(o),o in x)return;x[o]=!0;const u=o.endsWith(".css"),P=u?'[rel="stylesheet"]':"";if(!!c)for(let d=a.length-1;d>=0;d--){const f=a[d];if(f.href===o&&(!u||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${P}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":D,u||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),u)return new Promise((d,f)=>{l.addEventListener("load",d),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}return n.then(()=>r()).catch(a=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a})},z=()=>e.jsx(h,{bg:"light",expand:"lg",children:e.jsxs(_,{fluid:!0,children:[e.jsx(h.Brand,{href:"/",children:"My Home Expense"}),e.jsx(h.Toggle,{"aria-controls":"basic-navbar-nav"}),e.jsx(h.Collapse,{id:"basic-navbar-nav",children:e.jsxs(R,{className:"me-auto",children:[e.jsx(p,{to:"/",className:"nav-link",children:"Home"}),e.jsx(p,{to:"/summary",className:"nav-link",children:"Year End Summary"}),e.jsx(p,{to:"/manage",className:"nav-link",children:"Transactions"}),e.jsx(p,{to:"/settings",className:"nav-link",children:"Settings"})]})})]})}),F=()=>e.jsx(z,{}),V=()=>e.jsx(_,{className:"p-4 h-100",fluid:!0,children:e.jsx(i.Suspense,{fallback:e.jsx(A,{animation:"border"}),children:e.jsx($,{})})}),M=()=>e.jsx("footer",{className:"page-footer font-small blue fixed-bottom",children:e.jsx("div",{className:"footer-copyright text-center py-3",children:e.jsxs("span",{children:["Created by ",e.jsx("a",{href:"https://github.com/nishant-labs",children:"Nishant Labs"})]})})});function q(){return e.jsxs(e.Fragment,{children:[e.jsx(F,{}),e.jsx(V,{}),e.jsx(M,{})]})}const U=i.lazy(()=>g(()=>import("./index-l9w1Vn62.js"),__vite__mapDeps([0,1,2,3,4]))),K=i.lazy(()=>g(()=>import("./index-qLCA8vZs.js"),__vite__mapDeps([5,1]))),W=i.lazy(()=>g(()=>import("./index-82Q-m-tX.js"),__vite__mapDeps([6,1,2,3,7,8]))),X=i.lazy(()=>g(()=>import("./index-tR9I4BRF.js"),__vite__mapDeps([9,1,4,3,7,8,10]))),Y=O([{path:"/",element:e.jsx(q,{}),children:[{index:!0,path:"/",element:e.jsx(U,{})},{path:"/summary",element:e.jsx(K,{})},{path:"/manage",element:e.jsx(W,{})},{path:"/settings",element:e.jsx(X,{})}]}]),J=()=>e.jsx(T,{router:Y}),y=()=>window.EXPENSE_API_HOST??"http://localhost:7800";async function w(t,r){var s;try{return(s=(await m.post(`${y()}${t}`,r)).data)==null?void 0:s.data}catch(c){return{error:c}}}async function b(t){var r;try{return(r=(await m.get(`${y()}${t}`)).data)==null?void 0:r.data}catch(s){return{error:s}}}async function L(t){var r;try{return(r=(await m.delete(`${y()}${t}`)).data)==null?void 0:r.data}catch(s){return{error:s}}}async function N(t,r){var s;try{return(s=(await m.put(`${y()}${t}`,r)).data)==null?void 0:s.data}catch(c){return{error:c}}}const j=async()=>await b("/api/settings/sources"),ae=async t=>await w("/api/settings/sources",t),oe=async t=>await L(`/api/settings/sources/${t}`),ie=async(t,r)=>await N(`/api/settings/sources/${t}`,r),Q=E({key:"transactionSource",default:{sourceList:[],fetchAgain:!1}}),Z=i.memo(()=>{const[{fetchAgain:t},r]=S(Q);return i.useEffect(()=>{j().then(s=>{s.error||r({fetchAgain:!1,sourceList:s})})},[]),i.useEffect(()=>{t&&j().then(s=>{s.error||r({fetchAgain:!1,sourceList:s})})},[t,r]),e.jsx(e.Fragment,{})}),v=async()=>await b("/api/settings/groups"),ce=async t=>await w("/api/settings/groups",t),le=async t=>await L(`/api/settings/groups/${t}`),ue=async(t,r)=>await N(`/api/settings/groups/${t}`,r),ee=E({key:"transactionGroup",default:{groupList:[],fetchAgain:!1}}),te=i.memo(()=>{const[{fetchAgain:t},r]=S(ee);return i.useEffect(()=>{v().then(s=>{s.error||r({fetchAgain:!1,groupList:s})})},[]),i.useEffect(()=>{t&&v().then(s=>{s.error||r({fetchAgain:!1,groupList:s})})},[t,r]),e.jsx(e.Fragment,{})}),se=B.createRoot(document.getElementById("root"));se.render(e.jsx(C.StrictMode,{children:e.jsxs(I,{children:[e.jsx(k,{}),e.jsxs(G,{children:[e.jsx(J,{}),e.jsx(Z,{}),e.jsx(te,{})]})]})}));export{b as a,ae as b,ie as c,le as d,oe as e,Q as f,w as h,ce as i,ee as t,ue as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-l9w1Vn62.js","assets/vendor-VA6rW78p.js","assets/TransactionUtils-E5sNhV_l.js","assets/defineProperty-ynNbcTjd.js","assets/useSourceSettings-vMrjCDnv.js","assets/index-qLCA8vZs.js","assets/index-82Q-m-tX.js","assets/index--53aY6y3.js","assets/index-ap3mdRkD.css","assets/index-tR9I4BRF.js","assets/index-EV0itupQ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}