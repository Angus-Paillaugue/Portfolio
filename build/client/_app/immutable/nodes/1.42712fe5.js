import{s as D,n as z,h as V}from"../chunks/scheduler.0b304ea0.js";import{S as F,i as G,s as y,g as b,m as B,z as J,f as i,c as H,h as _,j as x,n as I,k as c,a as C,A as r,o as T}from"../chunks/index.c9e9b062.js";import{d as K}from"../chunks/singletons.538fc4c0.js";const L=()=>{const t=K;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},M={subscribe(t){return L().page.subscribe(t)}};function N(t){let n,u,e,l,d=(t[0].status||"404")+"",v,P,p,h=(t[0].error.message||"Page not found")+"",E,S,s,f=(t[0].error.buttonText||"Back to Homepage")+"",k,A,g,w;return document.title=n=(t[0].status||"404")+" Error",{c(){u=y(),e=b("div"),l=b("h1"),v=B(d),P=y(),p=b("p"),E=B(h),S=y(),s=b("a"),k=B(f),A=y(),g=b("i"),this.h()},l(a){J("svelte-ccuw5n",document.head).forEach(i),u=H(a),e=_(a,"DIV",{class:!0});var m=x(e);l=_(m,"H1",{class:!0});var j=x(l);v=I(j,d),j.forEach(i),P=H(m),p=_(m,"P",{class:!0});var q=x(p);E=I(q,h),q.forEach(i),S=H(m),s=_(m,"A",{href:!0,class:!0});var $=x(s);k=I($,f),A=H($),g=_($,"I",{class:!0}),x(g).forEach(i),$.forEach(i),m.forEach(i),this.h()},h(){c(l,"class","mb-6 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500"),c(p,"class","mb-6 text-2xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white"),c(g,"class","bi bi-arrow-right text-xl font-bold transition-all"),c(s,"href",w=t[0].error.link||"/"),c(s,"class","button-primary w-fit mx-auto hover:gap-4"),c(e,"class","mx-auto max-w-screen-md text-center py-8 px-4 lg:py-16 lg:px-6")},m(a,o){C(a,u,o),C(a,e,o),r(e,l),r(l,v),r(e,P),r(e,p),r(p,E),r(e,S),r(e,s),r(s,k),r(s,A),r(s,g)},p(a,[o]){o&1&&n!==(n=(a[0].status||"404")+" Error")&&(document.title=n),o&1&&d!==(d=(a[0].status||"404")+"")&&T(v,d),o&1&&h!==(h=(a[0].error.message||"Page not found")+"")&&T(E,h),o&1&&f!==(f=(a[0].error.buttonText||"Back to Homepage")+"")&&T(k,f),o&1&&w!==(w=a[0].error.link||"/")&&c(s,"href",w)},i:z,o:z,d(a){a&&(i(u),i(e))}}}function O(t,n,u){let e;return V(t,M,l=>u(0,e=l)),[e]}let W=class extends F{constructor(n){super(),G(this,n,O,N,D,{})}};export{W as component};