import{t as q}from"./index.CKuX_8to.js";import{r as z}from"./scheduler.C0FFGZse.js";const D=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function E(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function F(n,o){n.d(1),o.delete(n.key)}function G(n,o,S,T,x,p,l,A,y,j,w,k){let i=n.length,f=p.length,d=i;const a={};for(;d--;)a[n[d].key]=d;const c=[],u=new Map,g=new Map,b=[];for(d=f;d--;){const e=k(x,p,d),s=S(e);let t=l.get(s);t?T&&b.push(()=>t.p(e,o)):(t=j(s,e),t.c()),u.set(s,c[d]=t),s in a&&g.set(s,Math.abs(d-a[s]))}const M=new Set,v=new Set;function m(e){q(e,1),e.m(A,w),l.set(e.key,e),w=e.first,f--}for(;i&&f;){const e=c[f-1],s=n[i-1],t=e.key,h=s.key;e===s?(w=e.first,i--,f--):u.has(h)?!l.has(t)||M.has(t)?m(e):v.has(h)?i--:g.get(t)>g.get(h)?(v.add(t),m(e)):(M.add(h),i--):(y(s,l),i--)}for(;i--;){const e=n[i];u.has(e.key)||y(e,l)}for(;f;)m(c[f-1]);return z(b),c}export{F as d,E as e,D as g,G as u};