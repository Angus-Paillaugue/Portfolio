import{c as d,s as b,d as V,u as C,g as U,e as q,f as z,n as D}from"../chunks/scheduler.0b304ea0.js";import{S as E,i as I,e as m,a as v,t as u,b as L,d as c,f,g as M,h as N,j as P,x as T,y as w,p as A}from"../chunks/index.c9e9b062.js";function B({url:r}){return{url:r.pathname}}const Q=Object.freeze(Object.defineProperty({__proto__:null,load:B},Symbol.toStringTag,{value:"Module"}));function F(r){const n=r-1;return n*n*n+1}function p(r,{delay:n=0,duration:s=400,easing:l=F,x:e=0,y:a=0,opacity:t=0}={}){const o=getComputedStyle(r),i=+o.opacity,k=o.transform==="none"?"":o.transform,g=i*(1-t),[h,$]=d(e),[S,j]=d(a);return{delay:n,duration:s,easing:l,css:(_,O)=>`
			transform: ${k} translate(${(1-_)*h}${$}, ${(1-_)*S}${j});
			opacity: ${i-g*O}`}}function y(r){let n,s,l,e;const a=r[2].default,t=V(a,r,r[1],null);return{c(){n=M("div"),t&&t.c()},l(o){n=N(o,"DIV",{});var i=P(n);t&&t.l(i),i.forEach(f)},m(o,i){v(o,n,i),t&&t.m(n,null),e=!0},p(o,i){t&&t.p&&(!e||i&2)&&C(t,a,o,o[1],e?q(a,o[1],i,null):U(o[1]),null)},i(o){e||(c(t,o),o&&z(()=>{e&&(l&&l.end(1),s=T(n,p,{x:-200,duration:300,delay:300}),s.start())}),e=!0)},o(o){u(t,o),s&&s.invalidate(),o&&(l=w(n,p,{x:200,duration:300})),e=!1},d(o){o&&f(n),t&&t.d(o),o&&l&&l.end()}}}function G(r){let n=r[0].url,s,l,e=y(r);return{c(){e.c(),s=m()},l(a){e.l(a),s=m()},m(a,t){e.m(a,t),v(a,s,t),l=!0},p(a,[t]){t&1&&b(n,n=a[0].url)?(A(),u(e,1,1,D),L(),e=y(a),e.c(),c(e,1),e.m(s.parentNode,s)):e.p(a,t)},i(a){l||(c(e),l=!0)},o(a){u(e),l=!1},d(a){a&&f(s),e.d(a)}}}function H(r,n,s){let{$$slots:l={},$$scope:e}=n,{data:a}=n;return r.$$set=t=>{"data"in t&&s(0,a=t.data),"$$scope"in t&&s(1,e=t.$$scope)},[a,e,l]}class R extends E{constructor(n){super(),I(this,n,H,G,b,{data:0})}}export{R as component,Q as universal};