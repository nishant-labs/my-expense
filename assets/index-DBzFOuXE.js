import{y as U,x as R,r as s,j as e,p as F,q as C,F as y,u as T}from"./vendor-Drc8NLae.js";import{f as $}from"./NumberUtils-DGiqd6yw.js";import{T as _,s as G}from"./index-cpuBNOG-.js";import{s as M,G as L}from"./selector-D-_UcjaI.js";import{t as P,s as q}from"./selector-C2NJ2-qS.js";import{i as H,d as W,u as k,w as z}from"./index-HEC23uW1.js";const J=(n,m,f,p,a)=>[{headerName:"Name",field:"name"},{headerName:"Transactions",field:"matchers",cellRenderer:"listItemWithEditCellRenderer",cellRendererParams:{updateItem:f},valueFormatter:l=>{var i;return(i=l==null?void 0:l.value)==null?void 0:i.join("")},width:350,autoHeight:!0},{headerName:"Budget",field:"budget",width:100,valueFormatter:l=>$(Number(l.value??0),!0,0)},{headerName:"Chart Color",field:"chartColor",width:110,cellStyle:l=>({backgroundColor:l.value,color:"white"}),valueFormatter:()=>" "},{headerName:"Transaction Source",field:"sourceId",valueFormatter:l=>{var i;return((i=a==null?void 0:a.find(x=>x.id===l.value))==null?void 0:i.name)??"Source Not Found"}},{headerName:"Action",type:"rightAligned",width:140,cellRenderer:"rowActionCellRenderer",cellRendererParams:{deleteItem:n,toggleItem:m,editItem:p}}];function K(){const n=U(P),m=R(q),f=R(M),[p,a]=s.useState(""),l=s.useCallback(async(t,o,c,g,d)=>{a("");const h=await H({name:o,matchers:t,chartColor:c,sourceId:g,budget:d});return h.error?a("Failed to create new category"):n(!0),h},[n]),i=s.useCallback(async t=>{a("");const o=await W(t.id);return o.error?a(`Failed to delete category with id ${t.id}`):n(!0),o},[n]),x=s.useCallback(async t=>{a("");const o=await k(t.id,{isEnabled:!t.isEnabled});return o.error?a(`Failed to toggle status for ${t.name}`):n(!0),o},[n]),S=s.useCallback(async(t,o,c,g,d,h)=>{a("");const u=await k(t,{name:c,matchers:o,chartColor:g,sourceId:d,budget:h});return u.error?a(`Failed to update for ${c}`):n(!0),u},[n]),w=s.useCallback(async(t,o)=>{a("");const c=await k(t.id,{matchers:o});return c.error?a(`Failed to update transaction for ${t.name}`):n(!0),c},[n]);return{categories:m,sourceList:f,error:p,onSave:l,onDelete:i,onUpdate:S,onToggleStatus:x,onUpdateTransactions:w}}const O=()=>{const{categories:n,sourceList:m,error:f,onDelete:p,onSave:a,onUpdate:l,onToggleStatus:i,onUpdateTransactions:x}=K(),[S,w]=s.useState(null),[t,o]=s.useState([]),[c,g]=s.useState("#000000"),[d,h]=s.useState(""),[u,I]=s.useState(""),[j,N]=s.useState(""),b=s.useCallback(()=>{w(null),o([]),h(""),g(""),I(""),N("")},[]),A=s.useCallback(()=>{a(t,d,c,u,parseInt(j)).then(()=>{b()})},[a,t,d,c,u,j,b]),B=s.useCallback(()=>{l(S,t,d,c,u,parseInt(j)).then(()=>{b()})},[l,S,t,d,c,u,j,b]),E=s.useCallback(r=>{var v;w(r.id),o(r.matchers),h(r.name),g(r.chartColor),I(r.sourceId),N(((v=r.budget)==null?void 0:v.toString())||"")},[]),D=s.useMemo(()=>J(p,i,x,E,m),[E,p,i,x,m]);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Category Settings"}),e.jsxs(F,{className:"mb-2",children:[e.jsx(C,{children:e.jsx(y.Control,{placeholder:"Enter Label",value:d,onChange:r=>h(r.target.value)})}),e.jsx(C,{children:e.jsx(_,{selected:t,options:t,onChange:o})}),e.jsx(C,{sm:2,children:e.jsx(y.Control,{placeholder:"Enter Budget",type:"number",step:"any",min:"1",value:j,onChange:r=>N(r.target.value)})}),e.jsx(C,{sm:1,children:e.jsx(y.Control,{type:"color",value:c,onChange:r=>g(r.target.value),title:"Choose your color"})}),e.jsx(C,{children:e.jsxs(y.Select,{"aria-label":"Source Selector",value:u,onChange:r=>I(r.target.value),children:[e.jsx("option",{children:"Select Source"}),m.map((r,v)=>e.jsx("option",{value:r.id,children:r.name},`source-${v}`))]})})]}),e.jsx(F,{children:e.jsxs(C,{className:"text-end",children:[e.jsx(T,{className:"mx-2",disabled:!d||t.length===0||!c||!u,onClick:S?B:A,children:S?"Update":"Add Category"}),e.jsx(T,{variant:"outline-secondary",onClick:b,children:"Clear"})]})}),e.jsx(F,{children:e.jsxs(C,{children:[e.jsx("p",{children:f}),e.jsx(L,{colDefs:D,rowData:n,components:G})]})})]})},te=z(O);export{O as CategorySettings,te as default};
