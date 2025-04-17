import{r as l,j as e,F as u,x as S,M as x,S as y,y as g,s as j,t as h,A as T}from"./vendor-WuEm8xFn.js";import{f as b,u as F,a as v,b as A,A as N,L as M,M as w}from"./TransactionUtils-DK2lR0uV.js";import{G as L}from"./ApiBase-7SY5Fh78.js";import"./index-BF4sXYAs.js";const k={account:"Account",creditCard:"Credit Card"},P={filter:!0,sortable:!0},B=()=>[{headerName:"Date",field:"date",filter:"agDateColumnFilter",minWidth:120,valueFormatter:a=>b(a.value)},{headerName:"From",field:"accountType",minWidth:120,valueFormatter:a=>k[a.value]},{headerName:"Transaction",field:"transactionSource",minWidth:500},{headerName:"Amount",field:"amount",filter:"agNumberColumnFilter"},{headerName:"Category",field:"category",valueFormatter:a=>{var t;return((t=a.value)==null?void 0:t.name)??""}},{headerName:"Source",field:"source",valueFormatter:a=>{var t;return((t=a.value)==null?void 0:t.name)??""}}],D=({month:a,year:t})=>{const[n]=F(t,a),s=l.useMemo(()=>B(),[]);return e.jsx(L,{defaultColDef:P,colDefs:s,rowData:n})},C=({options:a,selected:t,onSelect:n,ariaLabel:s})=>{const o=l.useCallback(r=>{n(r.currentTarget.value)},[n]);return e.jsx(u.Select,{value:t,"aria-label":s,onChange:o,children:a.map(({value:r,label:c},d)=>e.jsx("option",{value:r,children:c},`${r}${d}`))})},E=({modalTitle:a,buttonText:t,children:n,onPrimaryAction:s,primaryButtonText:o,isLoading:r})=>{const[c,d]=l.useState(!1),m=()=>d(!1),f=()=>d(!0),i=l.useCallback(()=>{s(m)},[s]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{variant:"primary",size:"lg",onClick:f,children:t}),e.jsxs(x,{size:"lg",backdrop:"static",show:c,onHide:m,keyboard:!1,children:[e.jsx(x.Header,{closeButton:!0,children:e.jsx(x.Title,{children:a})}),e.jsx(x.Body,{children:n}),e.jsxs(x.Footer,{children:[r&&e.jsx(y,{animation:"border"}),e.jsx(S,{variant:"secondary",onClick:m,children:"Close"}),e.jsx(S,{variant:"primary",onClick:i,children:o})]})]})]})},U=a=>new Promise((t,n)=>{g.parse(a,{skipEmptyLines:!0,complete:s=>{if(s.errors.length>0)n(s.errors);else{const o=v(s.data);t(o)}}})}),Y=()=>{const{mutateAsync:a,isPending:t,isSuccess:n,isError:s}=A(),[o,r]=l.useState(null),[c,d]=l.useState(""),m=l.useCallback(i=>{const p=i.currentTarget.files;p.length>0&&r(p.item(0))},[]),f=l.useCallback(async i=>{if(o&&c){const p=await U(o);await a({accountType:c,payload:p}),i()}else alert("Please select file to upload")},[o,c,a]);return e.jsxs(E,{modalTitle:"Upload Latest Transactions",buttonText:"Upload",primaryButtonText:"Upload",onPrimaryAction:f,isLoading:t,children:[e.jsx(j,{className:"mb-4",children:e.jsx(h,{children:e.jsxs(u.Group,{controlId:"formFile",className:"mb-3",children:[e.jsx(u.Label,{children:"Account type for transactions"}),e.jsx(C,{ariaLabel:"Account Type",selected:c,options:N,onSelect:i=>d(i)})]})})}),e.jsx(j,{children:e.jsx(h,{children:e.jsxs(u.Group,{controlId:"formFile",className:"mb-3",children:[e.jsx(u.Label,{children:"Select CSV file"}),e.jsx(u.Control,{type:"file",accept:"text/csv",onChange:m})]})})}),n&&e.jsxs(T,{variant:"success",children:["Successfully uploaded ",c," transactions"]}),s&&e.jsx(T,{variant:"error",children:"Something went wrong while uploading transaction, try again later"})]})},R=()=>{const[a,t]=l.useState(""),[n,s]=l.useState(""),o=r=>{s(""),t(r)};return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Transactions"}),e.jsxs(j,{className:"mb-4",children:[e.jsx(h,{children:e.jsx(C,{ariaLabel:"Year selection",selected:a,options:M,onSelect:o})}),e.jsx(h,{children:e.jsx(C,{ariaLabel:"Month Selection",selected:n,options:w,onSelect:r=>s(r)})}),e.jsx(h,{className:"d-grid",children:e.jsx(Y,{})})]}),e.jsx(j,{children:e.jsx(h,{children:a&&n&&e.jsx(D,{month:n,year:a})})})]})};export{R as default};
