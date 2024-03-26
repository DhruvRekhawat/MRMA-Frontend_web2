import{j as e,C as j,a as k,b as F,B as i,c as P,d as T}from"./chunks/index.d3e96f18.js";import{r as W}from"./chunks/index.ae4d9e2b.js";import{o as u,s as o,d as O,u as $,I,F as R,a as t,b as a,c as l,e as x,f as c,g as n,$ as D,h as V,i as B,j as H,C as L,S as b,k as f,l as y,m as g,n as p,t as M,_ as N}from"./chunks/index.3feccfa2.js";const E=()=>N.success("Form Submitted Successfully! Please check your mobile number for OTP"),_=()=>N.error("Error Registering User"),z=u({email:o(),name:o(),mobileNumber:o(),address:u({street:o(),city:o(),state:o(),pincode:o()}),dob:O(),gender:o(),company:o(),photo:o(),aadharCard:o(),labourCard:o(),userRole:o(),categoriesOfWork:o()});function U(){const[C,S]=W.exports.useState(!1);function v(){S(!0)}const r=$({resolver:M(z),defaultValues:{email:"",name:"",gender:"",dob:new Date,address:{street:"",city:"",pincode:"",state:""},mobileNumber:"",photo:"",aadharCard:"",labourCard:"",company:"",categoriesOfWork:"",userRole:"worker"}});async function w(s){const d=s;try{const m=await(await fetch("http://localhost:5000/user/register",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(d)})).json();console.log(m.message),m&&(E(),v())}catch(h){console.error(h),_()}}return e.exports.jsxs(j,{className:"md:p-16 px-4 py-8 mx-auto my-2 md:w-2/3 w-full bg-gray-800 flex flex-col justify-center items-center ",children:[C?e.exports.jsxs(j,{className:"bg-slate-900 p-8 flex flex-col justify-center items-center text-white fixed bottom-[50vh]",children:[e.exports.jsx(k,{children:"Input OTP"}),e.exports.jsx(F,{className:"my-2",children:"OTP has been sent to your registered mobile number."}),e.exports.jsx(I,{}),e.exports.jsx(i,{className:"w-full my-4",children:"Submit"})]}):e.exports.jsx("div",{}),e.exports.jsx(R,{...r,children:e.exports.jsxs("form",{onSubmit:r.handleSubmit(w),className:" w-full",children:[e.exports.jsx(t,{control:r.control,name:"name",render:({field:s})=>e.exports.jsxs(a,{children:[e.exports.jsx(l,{children:"Full Name"}),e.exports.jsx(x,{children:e.exports.jsx(c,{placeholder:"",...s,className:"m-0"})}),e.exports.jsx(n,{})]})}),e.exports.jsx(t,{control:r.control,name:"dob",render:({field:s})=>e.exports.jsxs(a,{className:"flex flex-col",children:[e.exports.jsx(l,{children:"Date of birth"}),e.exports.jsxs(D,{children:[e.exports.jsx(V,{asChild:!0,children:e.exports.jsx(x,{children:e.exports.jsxs(i,{variant:"outline",className:P("w-full pl-3 text-left font-normal bg-gray-300 h-12",!s.value&&"text-muted-foreground"),children:[s.value?B(s.value,"PPP"):e.exports.jsx("span",{children:"Date Of Birth"}),e.exports.jsx(T,{className:"ml-auto h-4 w-4 opacity-50"})]})})}),e.exports.jsx(H,{className:"w-auto p-0",align:"start",children:e.exports.jsx(L,{mode:"single",selected:s.value,onSelect:s.onChange,disabled:d=>d>new Date||d<new Date("1900-01-01"),initialFocus:!0})})]}),e.exports.jsx(n,{})]})}),e.exports.jsx(t,{control:r.control,name:"gender",render:({field:s})=>e.exports.jsxs(a,{children:[e.exports.jsx(l,{children:"Gender"}),e.exports.jsxs(b,{onValueChange:s.onChange,defaultValue:s.value,children:[e.exports.jsx(x,{children:e.exports.jsx(f,{className:"w-full bg-gray-300 h-12",children:e.exports.jsx(y,{placeholder:""})})}),e.exports.jsxs(g,{className:"bg-white",children:[e.exports.jsx(p,{value:"Male",children:"Male"}),e.exports.jsx(p,{value:"Female",children:"Female"}),e.exports.jsx(p,{value:"Non-Binary",children:"Non-Binary"}),e.exports.jsx(p,{value:"Rather Not Say",children:"Rather not say"})]})]})]})}),e.exports.jsx(t,{control:r.control,name:"address.street",render:({field:s})=>e.exports.jsxs(a,{children:[e.exports.jsx(l,{children:"Street"}),e.exports.jsx(x,{children:e.exports.jsx(c,{placeholder:"",...s,className:"m-0"})}),e.exports.jsx(n,{})]})}),e.exports.jsx(t,{control:r.control,name:"address.city",render:({field:s})=>e.exports.jsxs(a,{children:[e.exports.jsx(l,{children:"City"}),e.exports.jsx(x,{children:e.exports.jsx(c,{placeholder:"",...s,className:"m-0"})}),e.exports.jsx(n,{})]})}),e.exports.jsx(t,{control:r.control,name:"address.pincode",render:({field:s})=>e.exports.jsxs(a,{children:[e.exports.jsx(l,{children:"Pincode"}),e.exports.jsx(x,{children:e.exports.jsx(c,{placeholder:"",...s,className:"m-0"})}),e.exports.jsx(n,{})]})}),e.exports.jsx(t,{control:r.control,name:"address.state",render:({field:s})=>e.exports.jsxs(a,{children:[e.exports.jsx(l,{children:"State"}),e.exports.jsx(x,{children:e.exports.jsx(c,{placeholder:"",...s,className:"m-0"})}),e.exports.jsx(n,{})]})}),e.exports.jsx(t,{control:r.control,name:"company",render:({field:s})=>e.exports.jsxs(a,{children:[e.exports.jsx(l,{children:"Company"}),e.exports.jsx(x,{children:e.exports.jsx(c,{placeholder:"",...s,className:"m-0"})}),e.exports.jsx(n,{})]})}),e.exports.jsx(t,{control:r.control,name:"email",render:({field:s})=>e.exports.jsxs(a,{children:[e.exports.jsx(l,{children:"Email"}),e.exports.jsx(x,{children:e.exports.jsx(c,{placeholder:"",...s,className:"m-0"})}),e.exports.jsx(n,{})]})}),e.exports.jsx(t,{control:r.control,name:"mobileNumber",render:({field:s})=>e.exports.jsxs(a,{children:[e.exports.jsx(l,{children:"Phone Number"}),e.exports.jsx(x,{children:e.exports.jsx(c,{placeholder:"",...s,className:"m-0"})}),e.exports.jsx(n,{})]})}),e.exports.jsx(t,{control:r.control,name:"photo",render:({field:s})=>e.exports.jsxs(a,{children:[e.exports.jsx(l,{children:"Photo"}),e.exports.jsx(x,{children:e.exports.jsx(c,{placeholder:"",...s,className:"m-0",type:"file"})}),e.exports.jsx(n,{})]})}),e.exports.jsx(t,{control:r.control,name:"aadharCard",render:({field:s})=>e.exports.jsxs(a,{children:[e.exports.jsx(l,{children:"Aadhar Card"}),e.exports.jsx(x,{children:e.exports.jsx(c,{placeholder:"",...s,className:"m-0",type:"file"})}),e.exports.jsx(n,{})]})}),e.exports.jsx(t,{control:r.control,name:"labourCard",render:({field:s})=>e.exports.jsxs(a,{children:[e.exports.jsx(l,{children:"Labour Card"}),e.exports.jsx(x,{children:e.exports.jsx(c,{placeholder:"",...s,className:"m-0",type:"file"})}),e.exports.jsx(n,{})]})}),e.exports.jsx(t,{control:r.control,name:"categoriesOfWork",render:({field:s})=>e.exports.jsxs(a,{children:[e.exports.jsx(l,{children:"Category of Work"}),e.exports.jsxs(b,{onValueChange:s.onChange,defaultValue:s.value,children:[e.exports.jsx(x,{children:e.exports.jsx(f,{className:"w-full bg-gray-300 h-12",children:e.exports.jsx(y,{placeholder:""})})}),e.exports.jsxs(g,{className:"bg-white",children:[e.exports.jsx(p,{value:"Construction Worker",children:"Construction Worker"}),e.exports.jsx(p,{value:"Household Helper",children:"Household Helper"}),e.exports.jsx(p,{value:"Factory Workers",children:"Factory Workers"}),e.exports.jsx(p,{value:"Farm Laborers",children:"Farm Laborers"}),e.exports.jsx(p,{value:"Transportation Worker",children:"Transportation Worker"}),e.exports.jsx(p,{value:"Skilled Workers",children:"Skilled Workers"}),e.exports.jsx(p,{value:"Service workers",children:"Service workers"})]})]})]})}),e.exports.jsx(i,{type:"submit",size:"lg",className:"my-4 w-full",children:"Submit"})]})})]})}export{U as default};