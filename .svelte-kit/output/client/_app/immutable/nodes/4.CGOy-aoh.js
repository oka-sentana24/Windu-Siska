import{J as Ae,s as He,e as C,a as D,z as le,o as Ne,c as W,f as b,g as L,p as Q,b as H,q as v,K as G,h as S,i as T,I as ee,L as Se,n as se,k as Pe,t as N,d as P,B as J,M as De,j as te,N as Me,O as Te,P as ie}from"../chunks/scheduler.mRS13lKS.js";import{a as Le,S as Oe,i as Xe}from"../chunks/index.DJNCrarQ.js";import{p as ze,i as Ie,a as Fe,r as qe}from"../chunks/entry.Cphln5J0.js";const Be=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function F(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Ce(n,e){n.d(1),e.delete(n.key)}function We(n,e,t,a,i,r,s,l,u,g,h,_){let m=n.length,f=r.length,c=m;const o={};for(;c--;)o[n[c].key]=c;const p=[],M=new Map,y=new Map,A=[];for(c=f;c--;){const k=_(i,r,c),E=t(k);let d=s.get(E);d?a&&A.push(()=>d.p(k,e)):(d=g(E,k),d.c()),M.set(E,p[c]=d),E in o&&y.set(E,Math.abs(c-o[E]))}const X=new Set,I=new Set;function O(k){Le(k,1),k.m(l,h),s.set(k.key,k),h=k.first,f--}for(;m&&f;){const k=p[f-1],E=n[m-1],d=k.key,w=E.key;k===E?(h=k.first,m--,f--):M.has(w)?!s.has(d)||X.has(d)?O(k):I.has(w)?m--:y.get(d)>y.get(w)?(I.add(d),O(k)):(X.add(w),m--):(u(E,s),m--)}for(;m--;){const k=n[m];M.has(k.key)||u(k,s)}for(;f;)O(p[f-1]);return Ae(A),p}const Ve=(n,e={})=>{de(e);let{colors:t=["#FFC700","#FF0000","#2E3191","#41BBC7"],duration:a=3500,force:i=.5,particleCount:r=150,particleShape:s="mix",particleSize:l=12,destroyAfterDone:u=!0,stageHeight:g=800,stageWidth:h=1600}=e;(function(o){const p=Y("style");p.dataset.neoconfetti="",p.textContent='@keyframes fk9XWG_y-axis{to{transform:translate3d(0,var(--stage-height),0)}}@keyframes fk9XWG_x-axis{to{transform:translate3d(var(--x-landing-point),0,0)}}@keyframes fk9XWG_rotation{50%{transform:rotate3d(var(--half-rotation),180deg)}to{transform:rotate3d(var(--rotation),360deg)}}.fk9XWG_container{width:0;height:0;z-index:1200;position:relative;overflow:visible}.fk9XWG_particle{animation:x-axis var(--duration-chaos)forwards cubic-bezier(var(--x1),var(--x2),var(--x3),var(--x4));animation-name:fk9XWG_x-axis}.fk9XWG_particle>div{animation:y-axis var(--duration-chaos)forwards cubic-bezier(var(--y1),var(--y2),var(--y3),var(--y4));width:var(--width);height:var(--height);animation-name:fk9XWG_y-axis;position:absolute;top:0;left:0}.fk9XWG_particle>div:before{height:100%;width:100%;content:"";background-color:var(--bgcolor);animation:rotation var(--rotation-duration)infinite linear;border-radius:var(--border-radius);animation-name:fk9XWG_rotation;display:block}',Z(document.head,p)})(),n.classList.add("fk9XWG_container"),n.style.setProperty("--stage-height",g+"px");let _,m=fe(r,t),f=oe(n,m);function c(o,p){const M=V(z()*(Ke-1)),y=s!=="rectangles"&&(s==="circles"||Qe(M)),A=(O,k)=>o.style.setProperty(O,k+"");A("--x-landing-point",R(U(ue(p,90)-180),0,180,-h/2,h/2)+"px"),A("--duration-chaos",a-V(1e3*z())+"ms");const X=z()<xe?q(z()*Je,2):0;A("--x1",X),A("--x2",-1*X),A("--x3",X),A("--x4",q(U(R(U(ue(p,90)-180),0,180,-1,1)),4)),A("--y1",q(z()*ce,4)),A("--y2",q(z()*i*(je()?1:-1),4)),A("--y3",ce),A("--y4",q(Re(R(U(p-180),0,180,i,-i),0),4)),A("--width",(y?l:V(4*z())+l/2)+"px"),A("--height",(y?l:V(2*z())+l)+"px");const I=M.toString(2).padStart(3,"0").split("");A("--half-rotation",I.map(O=>+O/2+"")),A("--rotation",I),A("--rotation-duration",q(z()*(Ue-re)+re)+"ms"),A("--border-radius",y?"50%":0)}for(const[o,p]of Object.entries(f))c(p,m[+o].degree);return Promise.resolve().then(()=>_=setTimeout(()=>u&&(n.innerHTML=""),a)),{update(o){de(o);const p=o.particleCount??r,M=o.colors??t,y=o.stageHeight??g;if(m=fe(p,M),p===r&&JSON.stringify(t)!==JSON.stringify(M))for(const[A,{color:X}]of Object.entries(m))f[+A].style.setProperty("--bgcolor",X);p!==r&&(n.innerHTML="",f=oe(n,m)),u&&!o.destroyAfterDone&&clearTimeout(_),n.style.setProperty("--stage-height",y+"px"),t=M,a=o.duration??a,i=o.force??i,r=p,s=o.particleShape??s,l=o.particleSize??l,u=o.destroyAfterDone??u,g=y,h=o.stageWidth??h},destroy(){clearTimeout(_)}}};function oe(n,e=[]){const t=[];for(const{color:a}of e){const i=Y("div");i.className="fk9XWG_particle",i.style.setProperty("--bgcolor",a);const r=Y("div");Z(i,r),Z(n,i),t.push(i)}return t}const re=200,Ue=800,xe=.1,Je=.3,ce=.5,U=Math.abs,z=Math.random,V=Math.round,Re=Math.max,Y=n=>document.createElement(n),Z=(n,e)=>n.appendChild(e),fe=(n,e)=>Array.from({length:n},(t,a)=>({color:e[a%e.length],degree:360*a/n})),q=(n,e=2)=>V((n+Number.EPSILON)*10**e)/10**e,R=(n,e,t,a,i)=>(n-e)*(i-a)/(t-e)+a,ue=(n,e)=>n+e>360?n+e-360:n+e,je=()=>z()>.5,Ke=6,Qe=n=>n!==1&&je(),$=n=>n===void 0,B=(n,e)=>{if(!$(n)&&Number.isSafeInteger(n)&&n<0)throw new Error(e+" must be a positive integer")},de=({particleCount:n,duration:e,colors:t,particleSize:a,force:i,stageHeight:r,stageWidth:s,particleShape:l})=>{if(B(n,"particleCount"),B(e,"duration"),B(a,"particleSize"),B(i,"force"),B(r,"stageHeight"),B(s,"stageWidth"),!$(l)&&!/^(mix|circles|rectangles)$/i.test(l))throw new Error('particlesShape should be either "mix" or "circles" or "rectangle"');if(!$(t)&&!Array.isArray(t))throw new Error("colors must be an array of strings");if(i>1)throw new Error("force must be within 0 and 1")};function Ye(n){const e=JSON.parse(n);return e.data&&(e.data=ze(e.data)),e}function he(n){return HTMLElement.prototype.cloneNode.call(n)}function Ze(n,e=()=>{}){const t=async({action:i,result:r,reset:s=!0,invalidateAll:l=!0})=>{r.type==="success"&&(s&&HTMLFormElement.prototype.reset.call(n),l&&await Ie()),(location.origin+location.pathname===i.origin+i.pathname||r.type==="redirect"||r.type==="error")&&Fe(r)};async function a(i){var c,o,p,M;if(((c=i.submitter)!=null&&c.hasAttribute("formmethod")?i.submitter.formMethod:he(n).method)!=="post")return;i.preventDefault();const s=new URL((o=i.submitter)!=null&&o.hasAttribute("formaction")?i.submitter.formAction:he(n).action),l=new FormData(n),u=(p=i.submitter)==null?void 0:p.getAttribute("name");u&&l.append(u,((M=i.submitter)==null?void 0:M.getAttribute("value"))??"");const g=new AbortController;let h=!1;const m=await e({action:s,cancel:()=>h=!0,controller:g,formData:l,formElement:n,submitter:i.submitter})??t;if(h)return;let f;try{const y=await fetch(s,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:l,signal:g.signal});f=Ye(await y.text()),f.type==="error"&&(f.status=y.status)}catch(y){if((y==null?void 0:y.name)==="AbortError")return;f={type:"error",error:y}}m({action:s,formData:l,formElement:n,update:y=>t({action:s,result:f,reset:y==null?void 0:y.reset,invalidateAll:y==null?void 0:y.invalidateAll}),result:f})}return HTMLFormElement.prototype.addEventListener.call(n,"submit",a),{destroy(){HTMLFormElement.prototype.removeEventListener.call(n,"submit",a)}}}const Ge="(prefers-reduced-motion: reduce)",$e=()=>window.matchMedia(Ge).matches,et=qe($e(),n=>{{const e=a=>{n(a.matches)},t=window.matchMedia(Ge);return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}}),{document:K,window:tt}=Be;function me(n,e,t){const a=n.slice();return a[11]=e[t],a}function pe(n,e,t){const a=n.slice();return a[14]=e[t],a}function _e(n,e,t){const a=n.slice();a[11]=e[t];const i=a[11]===a[4];return a[17]=i,a}function be(n,e,t){var _,m;const a=n.slice();a[20]=e[t];const i=a[17]?a[3]:a[1].guesses[a[11]];a[21]=i;const r=(_=a[1].answers[a[11]])==null?void 0:_[a[20]];a[22]=r;const s=((m=a[21])==null?void 0:m[a[20]])??"";a[23]=s;const l=a[17]&&a[20]===a[21].length;a[24]=l;const u=a[22]==="x";a[25]=u;const g=a[22]==="c";a[26]=g;const h=a[22]==="_";return a[27]=h,a}function nt(n){let e;return{c(){e=N("empty")},l(t){e=P(t,"empty")},m(t,a){T(t,e,a)},d(t){t&&b(e)}}}function at(n){let e;return{c(){e=N("(absent)")},l(t){e=P(t,"(absent)")},m(t,a){T(t,e,a)},d(t){t&&b(e)}}}function lt(n){let e;return{c(){e=N("(present)")},l(t){e=P(t,"(present)")},m(t,a){T(t,e,a)},d(t){t&&b(e)}}}function st(n){let e;return{c(){e=N("(correct)")},l(t){e=P(t,"(correct)")},m(t,a){T(t,e,a)},d(t){t&&b(e)}}}function ge(n,e){let t,a=e[23]+"",i,r,s,l,u,g,h;function _(c,o){return c[25]?st:c[26]?lt:c[27]?at:nt}let m=_(e),f=m(e);return{key:n,first:null,c(){t=C("div"),i=N(a),r=D(),s=C("span"),f.c(),l=D(),u=C("input"),this.h()},l(c){t=W(c,"DIV",{class:!0});var o=H(t);i=P(o,a),r=L(o),s=W(o,"SPAN",{class:!0});var p=H(s);f.l(p),p.forEach(b),l=L(o),u=W(o,"INPUT",{name:!0,type:!0}),o.forEach(b),this.h()},h(){v(s,"class","visually-hidden"),v(u,"name","guess"),u.disabled=g=!e[17],v(u,"type","hidden"),u.value=h=e[23],v(t,"class","letter svelte-1pg2j5l"),G(t,"exact",e[25]),G(t,"close",e[26]),G(t,"missing",e[27]),G(t,"selected",e[24]),this.first=t},m(c,o){T(c,t,o),S(t,i),S(t,r),S(t,s),f.m(s,null),S(t,l),S(t,u)},p(c,o){e=c,o&26&&a!==(a=e[23]+"")&&te(i,a),m!==(m=_(e))&&(f.d(1),f=m(e),f&&(f.c(),f.m(s,null))),o&16&&g!==(g=!e[17])&&(u.disabled=g),o&26&&h!==(h=e[23])&&(u.value=h),o&2&&G(t,"exact",e[25]),o&2&&G(t,"close",e[26]),o&2&&G(t,"missing",e[27]),o&26&&G(t,"selected",e[24])},d(c){c&&b(t),f.d()}}}function ye(n,e){let t,a,i=e[11]+1+"",r,s,l,u=[],g=new Map,h,_=F(Array.from(Array(5).keys()));const m=f=>f[20];for(let f=0;f<_.length;f+=1){let c=be(e,_,f),o=m(c);g.set(o,u[f]=ge(o,c))}return{key:n,first:null,c(){t=C("h2"),a=N("Row "),r=N(i),s=D(),l=C("div");for(let f=0;f<u.length;f+=1)u[f].c();h=D(),this.h()},l(f){t=W(f,"H2",{class:!0});var c=H(t);a=P(c,"Row "),r=P(c,i),c.forEach(b),s=L(f),l=W(f,"DIV",{class:!0});var o=H(l);for(let p=0;p<u.length;p+=1)u[p].l(o);h=L(o),o.forEach(b),this.h()},h(){v(t,"class","visually-hidden"),v(l,"class","row svelte-1pg2j5l"),G(l,"current",e[17]),this.first=t},m(f,c){T(f,t,c),S(t,a),S(t,r),T(f,s,c),T(f,l,c);for(let o=0;o<u.length;o+=1)u[o]&&u[o].m(l,null);S(l,h)},p(f,c){e=f,c&26&&(_=F(Array.from(Array(5).keys())),u=We(u,c,m,1,e,_,g,l,Ce,ge,h,be)),c&16&&G(l,"current",e[17])},d(f){f&&(b(t),b(s),b(l));for(let c=0;c<u.length;c+=1)u[c].d()}}}function it(n){let e,t,a,i,r,s,l="back",u,g,h,_=F(["qwertyuiop","asdfghjkl","zxcvbnm"]),m=[];for(let f=0;f<3;f+=1)m[f]=ke(me(n,_,f));return{c(){e=C("div"),t=C("button"),a=N("enter"),r=D(),s=C("button"),s.textContent=l,u=D();for(let f=0;f<3;f+=1)m[f].c();this.h()},l(f){e=W(f,"DIV",{class:!0});var c=H(e);t=W(c,"BUTTON",{"data-key":!0,class:!0});var o=H(t);a=P(o,"enter"),o.forEach(b),r=L(c),s=W(c,"BUTTON",{"data-key":!0,formaction:!0,name:!0,class:!0,"data-svelte-h":!0}),Q(s)!=="svelte-1ptb1bp"&&(s.textContent=l),u=L(c);for(let p=0;p<3;p+=1)m[p].l(c);c.forEach(b),this.h()},h(){v(t,"data-key","enter"),t.disabled=i=!n[7],v(t,"class","svelte-1pg2j5l"),G(t,"selected",n[7]),v(s,"data-key","backspace"),v(s,"formaction","?/update"),v(s,"name","key"),s.value="backspace",v(s,"class","svelte-1pg2j5l"),v(e,"class","keyboard svelte-1pg2j5l")},m(f,c){T(f,e,c),S(e,t),S(t,a),S(e,r),S(e,s),S(e,u);for(let o=0;o<3;o+=1)m[o]&&m[o].m(e,null);g||(h=ee(s,"click",Me(n[9])),g=!0)},p(f,c){if(c&128&&i!==(i=!f[7])&&(t.disabled=i),c&128&&G(t,"selected",f[7]),c&708){_=F(["qwertyuiop","asdfghjkl","zxcvbnm"]);let o;for(o=0;o<3;o+=1){const p=me(f,_,o);m[o]?m[o].p(p,c):(m[o]=ke(p),m[o].c(),m[o].m(e,null))}for(;o<3;o+=1)m[o].d(1)}},d(f){f&&b(e),Te(m,f),g=!1,h()}}}function ot(n){let e,t,a=n[5]?"you won :)":"game over :(",i,r,s=!n[5]&&n[1].answer&&we(n);return{c(){s&&s.c(),e=D(),t=C("button"),i=N(a),r=N(" play again?"),this.h()},l(l){s&&s.l(l),e=L(l),t=W(l,"BUTTON",{"data-key":!0,class:!0,formaction:!0});var u=H(t);i=P(u,a),r=P(u," play again?"),u.forEach(b),this.h()},h(){v(t,"data-key","enter"),v(t,"class","restart selected svelte-1pg2j5l"),v(t,"formaction","?/restart")},m(l,u){s&&s.m(l,u),T(l,e,u),T(l,t,u),S(t,i),S(t,r)},p(l,u){!l[5]&&l[1].answer?s?s.p(l,u):(s=we(l),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),u&32&&a!==(a=l[5]?"you won :)":"game over :(")&&te(i,a)},d(l){l&&(b(e),b(t)),s&&s.d(l)}}}function ve(n){let e,t,a,i,r,s;return{c(){e=C("button"),t=N(n[14]),this.h()},l(l){e=W(l,"BUTTON",{"data-key":!0,class:!0,formaction:!0,name:!0,"aria-label":!0});var u=H(e);t=P(u,n[14]),u.forEach(b),this.h()},h(){v(e,"data-key",n[14]),v(e,"class",a=ie(n[2][n[14]])+" svelte-1pg2j5l"),e.disabled=n[7],v(e,"formaction","?/update"),v(e,"name","key"),e.value=n[14],v(e,"aria-label",i=n[14]+" "+(n[6][n[14]]||""))},m(l,u){T(l,e,u),S(e,t),r||(s=ee(e,"click",Me(n[9])),r=!0)},p(l,u){u&4&&a!==(a=ie(l[2][l[14]])+" svelte-1pg2j5l")&&v(e,"class",a),u&128&&(e.disabled=l[7]),u&64&&i!==(i=l[14]+" "+(l[6][l[14]]||""))&&v(e,"aria-label",i)},d(l){l&&b(e),r=!1,s()}}}function ke(n){let e,t,a=F(n[11]),i=[];for(let r=0;r<a.length;r+=1)i[r]=ve(pe(n,a,r));return{c(){e=C("div");for(let r=0;r<i.length;r+=1)i[r].c();t=D(),this.h()},l(r){e=W(r,"DIV",{class:!0});var s=H(e);for(let l=0;l<i.length;l+=1)i[l].l(s);t=L(s),s.forEach(b),this.h()},h(){v(e,"class","row svelte-1pg2j5l")},m(r,s){T(r,e,s);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(e,null);S(e,t)},p(r,s){if(s&708){a=F(r[11]);let l;for(l=0;l<a.length;l+=1){const u=pe(r,a,l);i[l]?i[l].p(u,s):(i[l]=ve(u),i[l].c(),i[l].m(e,t))}for(;l<i.length;l+=1)i[l].d(1);i.length=a.length}},d(r){r&&b(e),Te(i,r)}}}function we(n){let e,t,a=n[1].answer+"",i,r;return{c(){e=C("p"),t=N('the answer was "'),i=N(a),r=N('"')},l(s){e=W(s,"P",{});var l=H(e);t=P(l,'the answer was "'),i=P(l,a),r=P(l,'"'),l.forEach(b)},m(s,l){T(s,e,l),S(e,t),S(e,i),S(e,r)},p(s,l){l&2&&a!==(a=s[1].answer+"")&&te(i,a)},d(s){s&&b(e)}}}function Ee(n){let e,t,a,i;return{c(){e=C("div"),this.h()},l(r){e=W(r,"DIV",{style:!0}),H(e).forEach(b),this.h()},h(){J(e,"position","absolute"),J(e,"left","50%"),J(e,"top","30%")},m(r,s){T(r,e,s),a||(i=Se(t=Ve.call(null,e,{particleCount:n[8]?0:void 0,force:.7,stageWidth:window.innerWidth,stageHeight:window.innerHeight,colors:["#ff3e00","#40b3ff","#676778"]})),a=!0)},p(r,s){t&&De(t.update)&&s&256&&t.update.call(null,{particleCount:r[8]?0:void 0,force:.7,stageWidth:window.innerWidth,stageHeight:window.innerHeight,colors:["#ff3e00","#40b3ff","#676778"]})},d(r){r&&b(e),a=!1,i()}}}function rt(n){let e,t,a,i="Sverdle",r,s,l,u="How to play",g,h,_=[],m=new Map,f,c,o,p,M,y,A=F(Array.from(Array(6).keys()));const X=d=>d[11];for(let d=0;d<A.length;d+=1){let w=_e(n,A,d),j=X(w);m.set(j,_[d]=ye(j,w))}function I(d,w){return d[5]||d[1].answers.length>=6?ot:it}let O=I(n),k=O(n),E=n[5]&&Ee(n);return{c(){e=C("meta"),t=D(),a=C("h1"),a.textContent=i,r=D(),s=C("form"),l=C("a"),l.textContent=u,g=D(),h=C("div");for(let d=0;d<_.length;d+=1)_[d].c();f=D(),c=C("div"),k.c(),o=D(),E&&E.c(),p=le(),this.h()},l(d){const w=Ne("svelte-18lvto8",K.head);e=W(w,"META",{name:!0,content:!0}),w.forEach(b),t=L(d),a=W(d,"H1",{class:!0,"data-svelte-h":!0}),Q(a)!=="svelte-16hvqlg"&&(a.textContent=i),r=L(d),s=W(d,"FORM",{method:!0,action:!0,class:!0});var j=H(s);l=W(j,"A",{class:!0,href:!0,"data-svelte-h":!0}),Q(l)!=="svelte-1w3fhu3"&&(l.textContent=u),g=L(j),h=W(j,"DIV",{class:!0});var ne=H(h);for(let x=0;x<_.length;x+=1)_[x].l(ne);ne.forEach(b),f=L(j),c=W(j,"DIV",{class:!0});var ae=H(c);k.l(ae),ae.forEach(b),j.forEach(b),o=L(d),E&&E.l(d),p=le(),this.h()},h(){var d;K.title="Sverdle",v(e,"name","description"),v(e,"content","A Wordle clone written in SvelteKit"),v(a,"class","visually-hidden"),v(l,"class","how-to-play svelte-1pg2j5l"),v(l,"href","/sverdle/how-to-play"),v(h,"class","grid svelte-1pg2j5l"),G(h,"playing",!n[5]),G(h,"bad-guess",(d=n[0])==null?void 0:d.badGuess),v(c,"class","controls svelte-1pg2j5l"),v(s,"method","POST"),v(s,"action","?/enter"),v(s,"class","svelte-1pg2j5l")},m(d,w){S(K.head,e),T(d,t,w),T(d,a,w),T(d,r,w),T(d,s,w),S(s,l),S(s,g),S(s,h);for(let j=0;j<_.length;j+=1)_[j]&&_[j].m(h,null);S(s,f),S(s,c),k.m(c,null),T(d,o,w),E&&E.m(d,w),T(d,p,w),M||(y=[ee(tt,"keydown",n[10]),Se(Ze.call(null,s,ct))],M=!0)},p(d,[w]){var j;w&26&&(A=F(Array.from(Array(6).keys())),_=We(_,w,X,1,d,A,m,h,Ce,ye,null,_e)),w&32&&G(h,"playing",!d[5]),w&1&&G(h,"bad-guess",(j=d[0])==null?void 0:j.badGuess),O===(O=I(d))&&k?k.p(d,w):(k.d(1),k=O(d),k&&(k.c(),k.m(c,null))),d[5]?E?E.p(d,w):(E=Ee(d),E.c(),E.m(p.parentNode,p)):E&&(E.d(1),E=null)},i:se,o:se,d(d){d&&(b(t),b(a),b(r),b(s),b(o),b(p)),b(e);for(let w=0;w<_.length;w+=1)_[w].d();k.d(),E&&E.d(d),M=!1,Ae(y)}}}const ct=()=>({update:n})=>{n({reset:!1})};function ft(n,e,t){let a,i,r,s,l;Pe(n,et,c=>t(8,l=c));let{data:u}=e,{form:g}=e,h,_;function m(c){const o=c.target.getAttribute("data-key");o==="backspace"?(t(3,r=r.slice(0,-1)),g!=null&&g.badGuess&&t(0,g.badGuess=!1,g)):r.length<5&&t(3,r+=o)}function f(c){var o;c.metaKey||c.key==="Enter"&&!s||(o=document.querySelector(`[data-key="${c.key}" i]`))==null||o.dispatchEvent(new MouseEvent("click",{cancelable:!0}))}return n.$$set=c=>{"data"in c&&t(1,u=c.data),"form"in c&&t(0,g=c.form)},n.$$.update=()=>{n.$$.dirty&2&&t(5,a=u.answers.at(-1)==="xxxxx"),n.$$.dirty&34&&t(4,i=a?-1:u.answers.length),n.$$.dirty&18&&t(3,r=u.guesses[i]||""),n.$$.dirty&8&&t(7,s=r.length===5),n.$$.dirty&6&&(t(2,h={}),t(6,_={}),u.answers.forEach((c,o)=>{const p=u.guesses[o];for(let M=0;M<5;M+=1){const y=p[M];c[M]==="x"?(t(2,h[y]="exact",h),t(6,_[y]="correct",_)):h[y]||(t(2,h[y]=c[M]==="c"?"close":"missing",h),t(6,_[y]=c[M]==="c"?"present":"absent",_))}}))},[g,u,h,r,i,a,_,s,l,m,f]}class mt extends Oe{constructor(e){super(),Xe(this,e,ft,rt,He,{data:1,form:0})}}export{mt as component};
