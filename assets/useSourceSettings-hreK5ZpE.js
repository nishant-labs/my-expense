import{a2 as y,v as S,r as o}from"./vendor-FSvL8nI4.js";import{j as f,a as b}from"./defineProperty-C3uLx3ZM.js";import{b as F,c as l,e as w}from"./index-dOe4kbx6.js";const B=(e,c=!0,a=2)=>e.toLocaleString("en-GB",{minimumFractionDigits:a,maximumFractionDigits:a,signDisplay:c?"auto":"never",style:"currency",currency:"GBP"});function E(){const e=y(f),c=S(b),[a,s]=o.useState(""),d=o.useCallback(async(r,t,i)=>{s("");const n=await F({name:r,chartColor:t,isExpense:i});return n.error?s("Failed to create new source"):e(!0),n},[e]),g=o.useCallback(async(r,t,i,n)=>{s("");const u=await l(r,{name:t,chartColor:i,isExpense:n});return u.error?s(`Failed to update source ${t}`):e(!0),u},[e]),m=o.useCallback(async r=>{s("");const t=await w(r.id);return t.error?s(`Failed to delete source with id ${r.id}`):e(!0),t},[e]),p=o.useCallback(async r=>{const t=await l(r.id,{isEnabled:!r.isEnabled});return t.error?s(`Failed to update source ${r.name}`):e(!0),t},[e]);return{sourceList:c,error:a,onSave:d,onUpdate:g,onDelete:m,onToggleStatus:p}}export{B as f,E as u};