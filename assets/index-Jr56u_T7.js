import{x as N,w as v,r as a,j as e,o as b,p as m,F as j,t as f}from"./vendor-CCYQAUK3.js";import{w as I,s as R}from"./index-C-3H9A0e.js";import{t as A,s as D,G as L}from"./selector-DY5CAtJ6.js";import{b as B,c as k,e as U}from"./index-DgxbrRkJ.js";const _=(o,h,d)=>[{headerName:"Name",field:"name"},{headerName:"Expense flag",field:"isExpense"},{headerName:"Chart Color",field:"chartColor",width:100,cellStyle:r=>({backgroundColor:r.value,color:"white"})},{headerName:"Action",type:"rightAligned",width:140,cellRenderer:"rowActionCellRenderer",cellRendererParams:{deleteItem:o,toggleItem:h,editItem:d}}];function G(){const o=N(A),h=v(D),[d,r]=a.useState(""),g=a.useCallback(async(t,s,n)=>{r("");const c=await B({name:t,chartColor:s,isExpense:n});return c.error?r("Failed to create new source"):o(!0),c},[o]),p=a.useCallback(async(t,s,n,c)=>{r("");const i=await k(t,{name:s,chartColor:n,isExpense:c});return i.error?r(`Failed to update source ${s}`):o(!0),i},[o]),u=a.useCallback(async t=>{r("");const s=await U(t.id);return s.error?r(`Failed to delete source with id ${t.id}`):o(!0),s},[o]),C=a.useCallback(async t=>{const s=await k(t.id,{isEnabled:!t.isEnabled});return s.error?r(`Failed to update source ${t.name}`):o(!0),s},[o]);return{sourceList:h,error:d,onSave:g,onUpdate:p,onDelete:u,onToggleStatus:C}}const T=()=>{const{error:o,sourceList:h,onDelete:d,onSave:r,onToggleStatus:g,onUpdate:p}=G(),[u,C]=a.useState(null),[t,s]=a.useState("#000000"),[n,c]=a.useState(""),[i,S]=a.useState(null),x=a.useCallback(()=>{C(null),c(""),s(""),S(null)},[]),y=a.useCallback(()=>{r(n,t,i).then(()=>{x()})},[r,n,t,i,x]),E=a.useCallback(()=>{p(u,n,t,i).then(()=>{x()})},[p,u,n,t,i,x]),w=a.useCallback(l=>{C(l.id),c(l.name),s(l.chartColor),S(l.isExpense)},[]),F=a.useMemo(()=>_(d,g,w),[d,g,w]);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Source Settings"}),e.jsxs(b,{className:"mb-2",children:[e.jsx(m,{sm:4,children:e.jsx(j.Control,{placeholder:"Enter Label",value:n,onChange:l=>c(l.target.value)})}),e.jsx(m,{sm:1,children:e.jsx(j.Check,{onChange:l=>S(l.target.checked),checked:i,label:"Expense",type:"checkbox"})}),e.jsx(m,{sm:1,children:e.jsx(j.Control,{type:"color",value:t,onChange:l=>s(l.target.value),title:"Choose your color"})})]}),e.jsx(b,{children:e.jsxs(m,{className:"text-end",children:[e.jsx(f,{className:"mx-2",disabled:!n||!t,onClick:u?E:y,children:u?"Update":"Add Source"}),e.jsx(f,{variant:"outline-secondary",onClick:x,children:"Clear"})]})}),e.jsx(b,{children:e.jsxs(m,{children:[e.jsx("p",{children:o}),e.jsx(L,{colDefs:F,rowData:h,components:R})]})})]})},z=I(T);export{T as SourceSettings,z as default};
