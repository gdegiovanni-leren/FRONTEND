import{K as e,n as b,q as w,T as d,e as v,v as y,i as h,Z as u,s as c,p as t,g as i,A as p,S as f,$ as m,t as x,X as k,a as j,j as q}from"./index-c2be6f26.js";const R={class:"bg-gray-200 min-h-screen flex items-center justify-center"},U={class:"bg-gray-700 p-8 rounded-lg shadow-lg max-w-md"},A=e("h2",{class:"text-2xl font-bold mb-4 text-white"},"Register",-1),C={class:"mb-4"},S=e("label",{class:"block text-white font-bold mb-2",for:"username"},"Username",-1),T={class:"mb-4"},V=e("label",{class:"block text-white font-bold mb-2",for:"password"},"Password",-1),_={class:"mb-6"},z=e("label",{class:"block text-white font-bold mb-2",for:"confirm-password"},"Confirm Password",-1),K=e("button",{class:"bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit"},"Register",-1),L={class:"mt-4 text-white"},P={class:"flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center"},B=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75"},null,-1),X=b('<div class="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-red-500 bg-red-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></div>',1),Z={class:"text-lg font-medium text-gray-800"},$={class:"mt-6"},D={class:"px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-500"},H={__name:"RegisterView",setup(E){const l=w();let r=d(""),o=d(""),n=d("");return(F,s)=>{const g=v("RouterLink");return q(),y(j,null,[e("div",R,[e("div",U,[A,e("form",{onSubmit:s[3]||(s[3]=h(a=>t(l).register(t(r),t(o),t(n)),["prevent"]))},[e("div",C,[S,u(e("input",{class:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",id:"username","onUpdate:modelValue":s[0]||(s[0]=a=>i(r)?r.value=a:r=a),required:""},null,512),[[c,t(r)]])]),e("div",T,[V,u(e("input",{class:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"password",id:"password","onUpdate:modelValue":s[1]||(s[1]=a=>i(o)?o.value=a:o=a),required:""},null,512),[[c,t(o)]])]),e("div",_,[z,u(e("input",{class:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"password",id:"confirm-password","onUpdate:modelValue":s[2]||(s[2]=a=>i(n)?n.value=a:n=a),required:""},null,512),[[c,t(n)]])]),K],32),e("p",L,[p("Already have an account? "),f(g,{to:"/login",class:"underline hover:text-gray-400"},{default:m(()=>[p("Login here")]),_:1})])])]),e("div",{class:x([t(l).error?"scale-100":"","fixed scale-0 z-10 inset-0 overflow-y-auto"])},[e("div",P,[B,e("div",{class:x([t(l).error?"scale-100":"","transform scale-0 transition-transform duration-300 relative z-10 w-full max-w-md p-6 bg-white rounded-lg shadow-lg"])},[X,e("p",Z,k(t(l).message)+"!",1),e("div",$,[e("button",D,[f(g,{onClick:s[4]||(s[4]=a=>(t(l).error=!t(l).error,i(r)?r.value="":r="",i(o)?o.value="":o="",i(n)?n.value="":n="")),to:"/register"},{default:m(()=>[p("Try again")]),_:1})])])],2)])],2)],64)}}};export{H as default};
