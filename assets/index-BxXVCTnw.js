import{r as c,o as l,j as a,p as b,A as H,q as k,s as w,B as L,t as V,v as W}from"./vendor-Ce-Gnf-x.js";import{u as X,g as G,t as _,M as K}from"./TransactionUtils-BcZVEwCk.js";import{G as Z}from"./ApiBase-ConkYzvp.js";import{f as v}from"./NumberUtils-DGiqd6yw.js";import"./index-DhtVKsNP.js";var D={},p=l&&l.__assign||function(){return p=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++){e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},p.apply(this,arguments)},q=l&&l.__createBinding||(Object.create?function(t,e,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(e,r);(!n||("get"in n?!e.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,i,n)}:function(t,e,r,i){i===void 0&&(i=r),t[i]=e[r]}),$=l&&l.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),J=l&&l.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&q(e,t,r);return $(e,t),e};Object.defineProperty(D,"__esModule",{value:!0});var S=J(c),N=c,Q=function(t){var e=p({cardStyles:{back:{},front:{}},cardZIndex:"auto",containerStyle:{},flipDirection:"horizontal",flipSpeedBackToFront:.6,flipSpeedFrontToBack:.6,infinite:!1,isFlipped:!1},t),r=e.cardStyles,i=r.back,n=r.front,o=e.cardZIndex,d=e.containerStyle,f=e.containerClassName,u=e.flipDirection,m=e.flipSpeedFrontToBack,g=e.flipSpeedBackToFront,h=e.infinite,s=e.isFlipped,C=(0,N.useState)(s),O=C[0],E=C[1],F=(0,N.useState)(0),y=F[0],R=F[1];(0,N.useEffect)(function(){s!==O&&(E(s),R(function(x){return x+180}))},[s]);var A=(0,N.useMemo)(function(){var x="react-card-flip";return f&&(x+=" ".concat(f)),x},[f]),T=function(x){if(t.children.length!==2)throw new Error("Component ReactCardFlip requires 2 children to function");return t.children[x]},I="rotateY(".concat(h?y:s?180:0,"deg)"),P="rotateY(".concat(h?y+180:s?0:-180,"deg)"),z="rotateX(".concat(h?y:s?180:0,"deg)"),Y="rotateX(".concat(h?y+180:s?0:-180,"deg)"),j={back:p({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:s?"relative":"absolute",top:"0",transform:u==="horizontal"?P:Y,transformStyle:"preserve-3d",transition:"".concat(m,"s"),width:"100%"},i),container:{perspective:"1000px",zIndex:"".concat(o)},flipper:{height:"100%",position:"relative",width:"100%"},front:p({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:s?"absolute":"relative",top:"0",transform:u==="horizontal"?I:z,transformStyle:"preserve-3d",transition:"".concat(g,"s"),width:"100%",zIndex:"2"},n)};return S.createElement("div",{className:A,style:p(p({},j.container),d)},S.createElement("div",{className:"react-card-flipper",style:j.flipper},S.createElement("div",{className:"react-card-front",style:j.front},T(0)),S.createElement("div",{className:"react-card-back",style:j.back},T(1))))},U=D.default=Q;const ee={sortable:!0},te=[{headerName:"Category",field:"categoryName"},{headerName:"Budget",field:"amount",minWidth:120,type:"rightAligned",valueFormatter:t=>v(parseInt(t.value??"0"),!1)},{headerName:"Amount",field:"amount",minWidth:120,type:"rightAligned",valueFormatter:t=>v(parseInt(t.value??"0"),!1)}],ae=({transactionList:t})=>a.jsx(Z,{rowHeight:25,styles:{height:"100%"},defaultColDef:ee,colDefs:te,rowData:t,pagination:!1}),B=({height:t="250px",body:e,children:r,actionText:i,onClick:n})=>a.jsx("div",{className:"rounded",style:{height:t,boxShadow:"#3399F3 5px 5px 5px"},children:a.jsxs(b,{className:"h-100",children:[e?a.jsxs(b.Body,{className:"border-bottom text-center",children:[a.jsx(b.Title,{className:"text-black-50",children:e.title}),a.jsx(b.Text,{className:"p-1 display-6",children:e.text})]}):r,a.jsx(b.Footer,{className:"ms-auto border-0",children:a.jsx(b.Link,{href:"#",onClick:n,children:i})})]})}),ne=({title:t,total:e,transactions:r})=>{const[i,n]=c.useState(!1),o=c.useCallback(()=>{n(!i)},[i]),d=v(e,!1);return a.jsxs(U,{isFlipped:i,children:[a.jsx(B,{body:{title:t,text:d},actionText:"Breakdown",onClick:o}),a.jsx(B,{actionText:"Summary",onClick:o,children:a.jsx(ae,{transactionList:r})})]})},re=({year:t,month:e})=>{const[r]=X(t,e),i=c.useMemo(()=>G(r),[r]),n=c.useMemo(()=>{const f=i.filter(s=>s.isAccount),{credit:u,debit:m}=Object.groupBy(f,s=>s.isExpense?"debit":"credit");if(!u||!m)return 0;const g=_(u.map(({transactions:s})=>_(s))),h=_(m.map(({transactions:s})=>_(s)));return g-Math.abs(h)},[i]);if(r.length===0)return a.jsx(H,{variant:"info",children:"Transaction Missing, please upload for the month"});const o=a.jsxs("span",{children:[a.jsx("strong",{children:v(n)})," saved"]}),d=a.jsxs("span",{children:["Spent ",a.jsx("strong",{children:v(n)})," more than total income"]});return a.jsxs(a.Fragment,{children:[a.jsx(k,{className:"mb-3",children:a.jsx(w,{children:a.jsx("h5",{children:a.jsx(L,{bg:n>0?"info":"warning",children:n>0?o:d})})})}),a.jsx(k,{className:"row-cols-3",children:i.map(({title:f,total:u,transactions:m},g)=>a.jsx(w,{className:"mb-4",children:a.jsx(ne,{title:f,total:u,transactions:m})},`income-${g}`))})]})},[de,...M]=K,fe=()=>{const[t,e]=c.useState(M[0].label.toLowerCase()),{month:r,year:i}=c.useMemo(()=>{const n=new Date;return n.setMonth(n.getMonth()-1),{month:n.getMonth(),year:n.getFullYear().toString()}},[]);return a.jsxs(a.Fragment,{children:[a.jsx("h2",{children:"Monthly Expense Report"}),a.jsx(V,{activeKey:t,onSelect:n=>e(n),className:"mb-3",children:M.map(({label:n,value:o},d)=>a.jsx(W,{eventKey:n.toLowerCase(),title:n,disabled:d>r,unmountOnExit:!0,children:a.jsx(re,{month:o,year:i})},o))})]})};export{fe as default};