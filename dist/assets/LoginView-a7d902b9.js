import{r as g,u as m,o as h,c as w,a as e,w as _,b as f,v as p,d as t,i as l,e as i,f as d,g as c,n as x,F as v,h as b,R as u}from"./index-a79e235b.js";const y={class:"bg-gray-200 min-h-screen flex items-center justify-center"},k={class:"bg-gray-700 p-8 rounded-lg shadow-lg max-w-md"},V=e("h2",{class:"text-2xl font-bold mb-4 text-white"},"Login",-1),R={class:"mb-4"},j=e("label",{class:"block text-white font-bold mb-2",for:"username"},"Username",-1),B={class:"mb-6"},C=e("label",{class:"block text-white font-bold mb-2",for:"password"},"Password",-1),L=e("button",{class:"bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit"},"Login",-1),N={class:"mt-4 text-white"},z={class:"mt-4 text-white"},F={class:"flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center"},S=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75"},null,-1),T=b('<div class="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-red-500 bg-red-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></div><p class="text-lg font-medium text-gray-800">Invalid username or password!</p>',2),U={class:"mt-6"},q={class:"px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-500"},E={__name:"LoginView",setup(D){let s=g(""),o=g("");const a=m();return(M,r)=>(h(),w(v,null,[e("div",y,[e("div",k,[V,e("form",{onSubmit:r[2]||(r[2]=_(n=>t(a).login(t(s),t(o)),["prevent"]))},[e("div",R,[j,f(e("input",{class:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text","onUpdate:modelValue":r[0]||(r[0]=n=>l(s)?s.value=n:s=n),required:""},null,512),[[p,t(s)]])]),e("div",B,[C,f(e("input",{class:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"password","onUpdate:modelValue":r[1]||(r[1]=n=>l(o)?o.value=n:o=n),required:""},null,512),[[p,t(o)]])]),L],32),e("p",N,[i("Don't have an account? "),d(t(u),{to:"/register",class:"underline hover:text-gray-400"},{default:c(()=>[i("Register here")]),_:1})]),e("p",z,[i("Forgot your password? "),d(t(u),{to:"/password_recovery",class:"underline hover:text-gray-400"},{default:c(()=>[i("Recover here")]),_:1})])])]),e("div",{class:x([t(a).error?"scale-100":"","fixed scale-0 z-10 inset-0 overflow-y-auto"])},[e("div",F,[S,e("div",{class:x([t(a).error?"scale-100":"","transform scale-0 transition-transform duration-300 relative z-10 w-full max-w-md p-6 bg-white rounded-lg shadow-lg"])},[T,e("div",U,[e("button",q,[d(t(u),{onClick:r[3]||(r[3]=n=>(t(a).error=!t(a).error,l(s)?s.value="":s="",l(o)?o.value="":o="")),to:"/login"},{default:c(()=>[i("Try again")]),_:1})])])],2)])],2)],64))}};export{E as default};
