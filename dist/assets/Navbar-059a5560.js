import{u as f,m as _,D as p,r as w,o as c,c as d,a as e,f as o,g as l,e as r,d as t,R as n,i as v,n as b,x as u}from"./index-4f3fb0fd.js";const g={class:"sticky top-0 z-10"},k={class:"bg-gray-900"},y={class:"container px-6 py-8 mx-auto md:flex md:justify-between md:items-center text-white"},M={class:"flex items-center justify-between"},z=e("button",{type:"button",class:"text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"},[e("svg",{viewBox:"0 0 24 24",class:"w-6 h-6 fill-current"},[e("path",{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})])],-1),C=[z],B={class:"text-sm font-bold text-white hover:text-blue-400"},H={key:0,class:"text-sm font-bold text-white hover:text-blue-400"},L={class:"text-sm font-bold text-white hover:text-blue-400"},N=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"mr-2 mt-1 h-6 w-6 flex items-center",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1),j={key:0,class:"flex absolute -mt-1 ml-4"},V=e("span",{class:"animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"},null,-1),R=e("span",{class:"relative inline-flex rounded-full h-3 w-3 bg-pink-500"},null,-1),S=[V,R],A=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"mr-2 mt-1 h-6 w-6 flex items-center",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})],-1),E={__name:"Navbar",setup(P){const i=f(),m=_(),h=p(()=>m.productsOnCart.length>0);let s=w(!1);return($,a)=>(c(),d("div",g,[e("div",k,[e("nav",y,[e("div",M,[o(t(n),{to:"/",class:"text-xl font-bold text-white md:text-2xl hover:text-blue-400"},{default:l(()=>[r(" My Shoes Market ")]),_:1}),e("div",{onClick:a[0]||(a[0]=x=>v(s)?s.value=!t(s):s=!t(s)),class:"flex md:hidden"},C)]),e("ul",{class:b([t(s)?"flex":"hidden","flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"])},[e("li",B,[o(t(n),{to:"/"},{default:l(()=>[r("Home")]),_:1})]),t(i).user.role=="admin"||t(i).user.role=="premium"?(c(),d("li",H,[o(t(n),{to:"/admin"},{default:l(()=>[r("Admin")]),_:1})])):u("",!0),e("li",L,[o(t(n),{to:"/profile"},{default:l(()=>[r("Profile")]),_:1})]),o(t(n),{to:"/cart",class:"flex"},{default:l(()=>[N,t(h)?(c(),d("span",j,S)):u("",!0)]),_:1}),o(t(n),{to:"/",class:"hover:text-gray-200 flex",href:"#"},{default:l(()=>[A]),_:1}),e("li",{onClick:a[1]||(a[1]=x=>t(i).logout()),class:"text-sm font-bold text-white hover:text-blue-400 cursor-pointer"}," Logout ")],2)])])]))}};export{E as _};
