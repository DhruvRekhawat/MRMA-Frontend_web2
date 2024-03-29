import{j as e,C as m,a as w,b as C,B as i,c as F,d as P}from"./chunks/index.33d3cabe.js";import{r as v}from"./chunks/index.8487acad.js";import{o as j,s as o,d as T,u as $,I as O,F as R,a as t,b as l,c as a,e as n,f as x,g as c,$ as k,h as I,i as B,j as E,C as V,S as D,k as M,l as _,m as z,n as d,t as G,_ as h}from"./chunks/format.27075761.js";/* empty css                              */const J=()=>h.success("Form Submitted Successfully! Please check your mobile number for OTP"),L=()=>h.error("Error Registering User"),U=new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),q=j({email:o(),name:o(),mobileNumber:o().regex(U,"Invalid Number!"),address:j({street:o(),city:o(),state:o(),pincode:o()}),dob:T(),gender:o(),company:o(),userRole:o(),category:o()});function W(){const[u,b]=v.exports.useState(!1);function f(){b(!0)}const r=$({resolver:G(q),defaultValues:{email:"",name:"",gender:"",dob:new Date,address:{street:"",city:"",pincode:"",state:""},mobileNumber:"",company:"",category:"",userRole:"employer"}});async function y(s){const N=s;try{const p=await fetch("http://localhost:5000/user/register",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(N)}),S=await p.json();console.log(S),console.log(p.ok),p.ok&&(console.log("ok!"),J(),f())}catch(p){console.error(p),L()}}async function g(){console.log("clicked")}return e.exports.jsxs(m,{className:"md:p-16 px-4 py-8 mx-auto my-2 md:w-2/3 w-full bg-gray-800 flex flex-col justify-center items-center ",children:[u?e.exports.jsxs(m,{className:"bg-slate-900 p-8 flex flex-col justify-center items-center text-white fixed bottom-[50vh]",children:[e.exports.jsx(w,{children:"Input OTP"}),e.exports.jsx(C,{className:"my-2",children:"OTP has been sent to your registered mobile number."}),e.exports.jsx(O,{}),e.exports.jsx(i,{className:"w-full my-4",onClick:g,children:"Submit"})]}):e.exports.jsx("div",{}),e.exports.jsx(R,{...r,children:e.exports.jsxs("form",{onSubmit:r.handleSubmit(y),className:" w-full",children:[e.exports.jsx(t,{control:r.control,name:"name",render:({field:s})=>e.exports.jsxs(l,{children:[e.exports.jsx(a,{children:"Full Name"}),e.exports.jsx(n,{children:e.exports.jsx(x,{placeholder:"",...s,className:"m-0"})}),e.exports.jsx(c,{})]})}),e.exports.jsx(t,{control:r.control,name:"dob",render:({field:s})=>e.exports.jsxs(l,{className:"flex flex-col",children:[e.exports.jsx(a,{children:"Date of birth"}),e.exports.jsxs(k,{children:[e.exports.jsx(I,{asChild:!0,children:e.exports.jsx(n,{children:e.exports.jsxs(i,{variant:"outline",className:F("w-full text-left font-normal bg-gray-500 ",!s.value&&"text-muted-foreground"),children:[s.value?B(s.value,"PPP"):e.exports.jsx("span",{children:"Pick a date"}),e.exports.jsx(P,{className:"ml-auto h-4 w-4 opacity-50"})]})})}),e.exports.jsx(E,{className:"w-auto p-0 bg-white",align:"start",children:e.exports.jsx(V,{onChange:s.onChange})})]}),e.exports.jsx(c,{})]})}),e.exports.jsx(t,{control:r.control,name:"gender",render:({field:s})=>e.exports.jsxs(l,{children:[e.exports.jsx(a,{children:"Gender"}),e.exports.jsxs(D,{onValueChange:s.onChange,defaultValue:s.value,children:[e.exports.jsx(n,{children:e.exports.jsx(M,{className:"w-full bg-gray-300 h-12",children:e.exports.jsx(_,{placeholder:""})})}),e.exports.jsxs(z,{className:"bg-white",children:[e.exports.jsx(d,{value:"Male",children:"Male"}),e.exports.jsx(d,{value:"Female",children:"Female"}),e.exports.jsx(d,{value:"Non-Binary",children:"Non-Binary"}),e.exports.jsx(d,{value:"Rather Not Say",children:"Rather not say"})]})]})]})}),e.exports.jsx(t,{control:r.control,name:"address.street",render:({field:s})=>e.exports.jsxs(l,{children:[e.exports.jsx(a,{children:"Street"}),e.exports.jsx(n,{children:e.exports.jsx(x,{placeholder:"",...s,className:"m-0"})}),e.exports.jsx(c,{})]})}),e.exports.jsx(t,{control:r.control,name:"address.city",render:({field:s})=>e.exports.jsxs(l,{children:[e.exports.jsx(a,{children:"City"}),e.exports.jsx(n,{children:e.exports.jsx(x,{placeholder:"",...s,className:"m-0"})}),e.exports.jsx(c,{})]})}),e.exports.jsx(t,{control:r.control,name:"address.pincode",render:({field:s})=>e.exports.jsxs(l,{children:[e.exports.jsx(a,{children:"Pincode"}),e.exports.jsx(n,{children:e.exports.jsx(x,{placeholder:"",...s,className:"m-0"})}),e.exports.jsx(c,{})]})}),e.exports.jsx(t,{control:r.control,name:"address.state",render:({field:s})=>e.exports.jsxs(l,{children:[e.exports.jsx(a,{children:"State"}),e.exports.jsx(n,{children:e.exports.jsx(x,{placeholder:"",...s,className:"m-0"})}),e.exports.jsx(c,{})]})}),e.exports.jsx(t,{control:r.control,name:"company",render:({field:s})=>e.exports.jsxs(l,{children:[e.exports.jsx(a,{children:"Company"}),e.exports.jsx(n,{children:e.exports.jsx(x,{placeholder:"",...s,className:"m-0"})}),e.exports.jsx(c,{})]})}),e.exports.jsx(t,{control:r.control,name:"email",render:({field:s})=>e.exports.jsxs(l,{children:[e.exports.jsx(a,{children:"Email"}),e.exports.jsx(n,{children:e.exports.jsx(x,{placeholder:"",...s,className:"m-0"})}),e.exports.jsx(c,{})]})}),e.exports.jsx(t,{control:r.control,name:"mobileNumber",render:({field:s})=>e.exports.jsxs(l,{children:[e.exports.jsx(a,{children:"Phone Number"}),e.exports.jsx(n,{children:e.exports.jsx(x,{placeholder:"",...s,className:"m-0"})}),e.exports.jsx(c,{})]})}),e.exports.jsx(i,{type:"submit",size:"lg",className:"my-4 w-full",children:"Submit"})]})})]})}export{W as default};