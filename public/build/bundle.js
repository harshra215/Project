var app=function(){"use strict";function e(){}const t=e=>e;function n(e,t,n,o,i){e.__svelte_meta={loc:{file:t,line:n,column:o,char:i}}}function o(e){return e()}function i(){return Object.create(null)}function c(e){e.forEach(o)}function r(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}const a="undefined"!=typeof window;let u=a?()=>window.performance.now():()=>Date.now(),l=a?e=>requestAnimationFrame(e):e;const f=new Set;let d,p=!1;function h(){f.forEach(e=>{e[0](u())||(f.delete(e),e[1]())}),(p=f.size>0)&&l(h)}function m(e){let t;return p||(p=!0,l(h)),{promise:new Promise(n=>{f.add(t=[e,n])}),abort(){f.delete(t)}}}function g(e){return document.createElement(e)}function b(e){return document.createTextNode(e)}function k(){return b(" ")}function y(){return b("")}function v(e,t,n,o){e.style.setProperty(t,n,o?"important":"")}function w(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}let $,S=0,x={};function N(e,t,n,o,i,c,r,s=0){const a=16.666/o;let u="{\n";for(let e=0;e<=1;e+=a){const o=t+(n-t)*c(e);u+=100*e+`%{${r(o,1-o)}}\n`}const l=u+`100% {${r(n,1-n)}}\n}`,f=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(l)}_${s}`;if(!x[f]){if(!d){const e=g("style");document.head.appendChild(e),d=e.sheet}x[f]=!0,d.insertRule(`@keyframes ${f} ${l}`,d.cssRules.length)}const p=e.style.animation||"";return e.style.animation=`${p?`${p}, `:""}${f} ${o}ms linear ${i}ms 1 both`,S+=1,f}function q(e,t){e.style.animation=(e.style.animation||"").split(", ").filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")).join(", "),t&&!--S&&l(()=>{if(S)return;let e=d.cssRules.length;for(;e--;)d.deleteRule(e);x={}})}function _(e){$=e}function C(){if(!$)throw new Error("Function called outside component initialization");return $}const M=[],R=[],B=[],E=[],A=Promise.resolve();let V,D=!1;function O(e){B.push(e)}function j(){const e=new Set;do{for(;M.length;){const e=M.shift();_(e),z(e.$$)}for(;R.length;)R.pop()();for(let t=0;t<B.length;t+=1){const n=B[t];e.has(n)||(n(),e.add(n))}B.length=0}while(M.length);for(;E.length;)E.pop()();D=!1}function z(e){null!==e.fragment&&(e.update(e.dirty),c(e.before_update),e.fragment&&e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(O))}function P(){return V||(V=Promise.resolve()).then(()=>{V=null}),V}function L(e,t,n){e.dispatchEvent(w(`${t?"intro":"outro"}${n}`))}const F=new Set;let T;function H(){T={r:0,c:[],p:T}}function I(){T.r||c(T.c),T=T.p}function Q(e,t){e&&e.i&&(F.delete(e),e.i(t))}function Y(e,t,n,o){if(e&&e.o){if(F.has(e))return;F.add(e),T.c.push(()=>{F.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}const X={duration:0};function Z(n,o,i){let c,s,a=o(n,i),l=!1,f=0;function d(){c&&q(n,c)}function p(){const{delay:o=0,duration:i=300,easing:r=t,tick:p=e,css:h}=a||X;h&&(c=N(n,0,1,i,o,r,h,f++)),p(0,1);const g=u()+o,b=g+i;s&&s.abort(),l=!0,O(()=>L(n,!0,"start")),s=m(e=>{if(l){if(e>=b)return p(1,0),L(n,!0,"end"),d(),l=!1;if(e>=g){const t=r((e-g)/i);p(t,1-t)}}return l})}let h=!1;return{start(){h||(q(n),r(a)?(a=a(),P().then(p)):p())},invalidate(){h=!1},end(){l&&(d(),l=!1)}}}function G(n,o,i){let s,a=o(n,i),l=!0;const f=T;function d(){const{delay:o=0,duration:i=300,easing:r=t,tick:d=e,css:p}=a||X;p&&(s=N(n,1,0,i,o,r,p));const h=u()+o,g=h+i;O(()=>L(n,!1,"start")),m(e=>{if(l){if(e>=g)return d(0,1),L(n,!1,"end"),--f.r||c(f.c),!1;if(e>=h){const t=r((e-h)/i);d(1-t,t)}}return l})}return f.r+=1,r(a)?P().then(()=>{a=a(),d()}):d(),{end(e){e&&a.tick&&a.tick(1,0),l&&(s&&q(n,s),l=!1)}}}function J(e){e&&e.c()}function K(e,t,n){const{fragment:i,on_mount:s,on_destroy:a,after_update:u}=e.$$;i&&i.m(t,n),O(()=>{const t=s.map(o).filter(r);a?a.push(...t):c(t),e.$$.on_mount=[]}),u.forEach(O)}function U(e,t){const n=e.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx={})}function W(e,t){e.$$.dirty||(M.push(e),D||(D=!0,A.then(j)),e.$$.dirty=i()),e.$$.dirty[t]=!0}function ee(t,n,o,r,s,a){const u=$;_(t);const l=n.props||{},f=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:s,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:i(),dirty:null};let d=!1;f.ctx=o?o(t,l,(e,n,o=n)=>(f.ctx&&s(f.ctx[e],f.ctx[e]=o)&&(f.bound[e]&&f.bound[e](o),d&&W(t,e)),n)):l,f.update(),d=!0,c(f.before_update),f.fragment=!!r&&r(f.ctx),n.target&&(n.hydrate?f.fragment&&f.fragment.l(function(e){return Array.from(e.childNodes)}(n.target)):f.fragment&&f.fragment.c(),n.intro&&Q(t.$$.fragment),K(t,n.target,n.anchor),j()),_(u)}class te{$destroy(){U(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function ne(e,t){document.dispatchEvent(w(e,t))}function oe(e,t){ne("SvelteDOMInsert",{target:e,node:t}),function(e,t){e.appendChild(t)}(e,t)}function ie(e,t,n){ne("SvelteDOMInsert",{target:e,node:t,anchor:n}),function(e,t,n){e.insertBefore(t,n||null)}(e,t,n)}function ce(e){ne("SvelteDOMRemove",{node:e}),function(e){e.parentNode.removeChild(e)}(e)}function re(e,t,n,o,i,c){const r=!0===o?["capture"]:o?Array.from(Object.keys(o)):[];i&&r.push("preventDefault"),c&&r.push("stopPropagation"),ne("SvelteDOMAddEventListener",{node:e,event:t,handler:n,modifiers:r});const s=function(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}(e,t,n,o);return()=>{ne("SvelteDOMRemoveEventListener",{node:e,event:t,handler:n,modifiers:r}),s()}}function se(e,t,n){!function(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}(e,t,n),null==n?ne("SvelteDOMRemoveAttribute",{node:e,attribute:t}):ne("SvelteDOMSetAttribute",{node:e,attribute:t,value:n})}function ae(e,t){t=""+t,e.data!==t&&(ne("SvelteDOMSetData",{node:e,data:t}),e.data=t)}class ue extends te{constructor(e){if(!e||!e.target&&!e.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}}const le="src\\Snackbar.svelte";function fe(e){let t,o;const i={c:function(){t=g("div"),(o=g("span")).textContent="Incorrect Answer",se(o,"class","svelte-dsde0r"),n(o,le,29,4,499),v(t,"background-color","red"),v(t,"box-shadow","0 0 5px red"),se(t,"class","svelte-dsde0r"),n(t,le,28,2,433)},m:function(e,n){ie(e,t,n),oe(t,o)},d:function(e){e&&ce(t)}};return ne("SvelteRegisterBlock",{block:i,id:fe.name,type:"else",source:"(28:0) {:else}",ctx:e}),i}function de(e){let t,o;const i={c:function(){t=g("div"),(o=g("span")).textContent="Correct Answer",se(o,"class","svelte-dsde0r"),n(o,le,25,4,386),v(t,"background-color","green"),v(t,"box-shadow","0 0 5px green"),se(t,"class","svelte-dsde0r"),n(t,le,24,2,316)},m:function(e,n){ie(e,t,n),oe(t,o)},d:function(e){e&&ce(t)}};return ne("SvelteRegisterBlock",{block:i,id:de.name,type:"if",source:"(24:0) {#if message}",ctx:e}),i}function pe(t){let n;function o(e,t){return t.message?de:fe}let i=o(0,t),c=i(t);const r={c:function(){c.c(),n=y()},l:function(e){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(e,t){c.m(e,t),ie(e,n,t)},p:function(e,t){i!==(i=o(0,t))&&(c.d(1),(c=i(t))&&(c.c(),c.m(n.parentNode,n)))},i:e,o:e,d:function(e){c.d(e),e&&ce(n)}};return ne("SvelteRegisterBlock",{block:r,id:pe.name,type:"component",source:"",ctx:t}),r}function he(e,t,n){let{message:o=""}=t;const i=["message"];return Object.keys(t).forEach(e=>{~i.indexOf(e)||"$$"===e.slice(0,2)||console.warn(`<Snackbar> was created with unknown prop '${e}'`)}),e.$set=e=>{"message"in e&&n("message",o=e.message)},e.$capture_state=()=>({message:o}),e.$inject_state=e=>{"message"in e&&n("message",o=e.message)},{message:o}}class me extends ue{constructor(e){super(e),ee(this,e,he,pe,s,{message:0}),ne("SvelteRegisterComponent",{component:this,tagName:"Snackbar",options:e,id:pe.name})}get message(){throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set message(e){throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function ge(e){return Math.sin(e*Math.PI/2)}const be=()=>({duration:250,delay:250,easing:ge,css:e=>`opacity: ${e}`}),ke=()=>({duration:250,delayZero:0,easing:ge,css:e=>`opacity: ${e}`});function ye(e){const t=document.createElement("textarea");return t.innerHTML=e,0===t.childNodes.length?"":t.childNodes[0].nodeValue}function ve(e=[]){const t=e;for(let n=e.length-1;n>0;n-=1){const e=Math.floor(Math.random()*(n+1));[t[n],t[e]]=[t[e],t[n]]}return t}const we="src\\QuizArea.svelte";function $e(e,t,n){const o=Object.create(e);return o.choice=t[n],o}function Se(t){let o;const i={c:function(){(o=g("span")).textContent="Fetching questions...",v(o,"position","absolute"),v(o,"left","50%"),v(o,"top","50%"),v(o,"transform","translateX(-50%) translateY(-50%)"),v(o,"font-weight","bolder"),v(o,"font-size","36px"),v(o,"margin","0"),se(o,"class","svelte-fhkhdp"),n(o,we,292,4,7108)},m:function(e,t){ie(e,o,t)},p:e,i:e,o:e,d:function(e){e&&ce(o)}};return ne("SvelteRegisterBlock",{block:i,id:Se.name,type:"else",source:"(292:2) {:else}",ctx:t}),i}function xe(t){let o,i,c,r,s,a,u,l,f,d;const p={c:function(){o=g("div"),i=g("p"),c=b("Final Score:\n        "),r=g("i"),s=b(t.score),a=b(" / 10"),u=k(),l=g("p"),f=k(),(d=g("p")).textContent="Refresh the page to play again",n(r,we,284,8,6910),se(i,"id","score"),se(i,"class","svelte-fhkhdp"),n(i,we,282,6,6866),v(l,"font-size","24px"),n(l,we,286,6,6947),v(d,"font-size","24px"),n(d,we,289,6,7021),se(o,"id","results"),se(o,"class","svelte-fhkhdp"),n(o,we,281,4,6841)},m:function(e,n){ie(e,o,n),oe(o,i),oe(i,c),oe(i,r),oe(r,s),oe(r,a),oe(o,u),oe(o,l),l.innerHTML=t.finalMessage,oe(o,f),oe(o,d)},p:function(e,t){e.score&&ae(s,t.score),e.finalMessage&&(l.innerHTML=t.finalMessage)},i:e,o:e,d:function(e){e&&ce(o)}};return ne("SvelteRegisterBlock",{block:p,id:xe.name,type:"if",source:"(281:26) ",ctx:t}),p}function Ne(e){let t,o,i,c,r,s,a,u,l,f,d,p,h,m,v,w,$,S,x,N=e.questionNo+1+"",q=e.representation[e.questionNo].category+"",_=e.representation[e.questionNo].question+"",C=e.representation[e.questionNo].difficulty+"",M=e.representation[e.questionNo].answerChoices&&qe(e),R=e.buttonBarVisibility&&De(e),B=e.snackbarVisibility&&ze(e);const E={c:function(){t=g("span"),o=b("Question "),i=b(N),c=k(),r=g("i"),s=b("(Category - "),a=b(q),u=b(")"),l=k(),f=g("span"),d=b(_),p=k(),h=g("div"),m=b(C),v=k(),M&&M.c(),w=k(),R&&R.c(),$=k(),B&&B.c(),S=y(),se(r,"id","category"),se(r,"class","svelte-fhkhdp"),n(r,we,217,6,4688),se(t,"id","heading"),se(t,"class","svelte-fhkhdp"),n(t,we,215,4,4630),se(f,"class","svelte-fhkhdp"),n(f,we,219,4,4776),se(h,"id","difficulty"),se(h,"class","svelte-fhkhdp"),n(h,we,220,4,4831)},m:function(e,n){ie(e,t,n),oe(t,o),oe(t,i),oe(t,c),oe(t,r),oe(r,s),oe(r,a),oe(r,u),ie(e,l,n),ie(e,f,n),oe(f,d),ie(e,p,n),ie(e,h,n),oe(h,m),ie(e,v,n),M&&M.m(e,n),ie(e,w,n),R&&R.m(e,n),ie(e,$,n),B&&B.m(e,n),ie(e,S,n),x=!0},p:function(e,t){x&&!e.questionNo||N===(N=t.questionNo+1+"")||ae(i,N),x&&!e.representation&&!e.questionNo||q===(q=t.representation[t.questionNo].category+"")||ae(a,q),x&&!e.representation&&!e.questionNo||_===(_=t.representation[t.questionNo].question+"")||ae(d,_),x&&!e.representation&&!e.questionNo||C===(C=t.representation[t.questionNo].difficulty+"")||ae(m,C),t.representation[t.questionNo].answerChoices?M?M.p(e,t):((M=qe(t)).c(),M.m(w.parentNode,w)):M&&(M.d(1),M=null),t.buttonBarVisibility?R?R.p(e,t):((R=De(t)).c(),R.m($.parentNode,$)):R&&(R.d(1),R=null),t.snackbarVisibility?B?(B.p(e,t),Q(B,1)):((B=ze(t)).c(),Q(B,1),B.m(S.parentNode,S)):B&&(H(),Y(B,1,1,()=>{B=null}),I())},i:function(e){x||(Q(B),x=!0)},o:function(e){Y(B),x=!1},d:function(e){e&&ce(t),e&&ce(l),e&&ce(f),e&&ce(p),e&&ce(h),e&&ce(v),M&&M.d(e),e&&ce(w),R&&R.d(e),e&&ce($),B&&B.d(e),e&&ce(S)}};return ne("SvelteRegisterBlock",{block:E,id:Ne.name,type:"if",source:"(215:2) {#if representation.length > 0 && !resultsScreen}",ctx:e}),E}function qe(e){let t,n=e.representation[e.questionNo].answerChoices,o=[];for(let t=0;t<n.length;t+=1)o[t]=Ve($e(e,n,t));const i={c:function(){for(let e=0;e<o.length;e+=1)o[e].c();t=y()},m:function(e,n){for(let t=0;t<o.length;t+=1)o[t].m(e,n);ie(e,t,n)},p:function(e,i){if(e.representation||e.questionNo||e.handleAnswerChoice){let c;for(n=i.representation[i.questionNo].answerChoices,c=0;c<n.length;c+=1){const r=$e(i,n,c);o[c]?o[c].p(e,r):(o[c]=Ve(r),o[c].c(),o[c].m(t.parentNode,t))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d:function(e){!function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(o,e),e&&ce(t)}};return ne("SvelteRegisterBlock",{block:i,id:qe.name,type:"if",source:"(223:4) {#if representation[questionNo].answerChoices}",ctx:e}),i}function _e(e){let t,o,i,c,r,s=e.choice+"";const a={c:function(){t=g("div"),o=g("i"),i=b(s),c=k(),n(o,we,252,12,6076),se(t,"id","choice"),se(t,"class","svelte-fhkhdp"),n(t,we,251,10,6008),r=re(t,"click",e.click_handler,!1,!1,!1)},m:function(e,n){ie(e,t,n),oe(t,o),oe(o,i),oe(t,c)},p:function(e,t){(e.representation||e.questionNo)&&s!==(s=t.choice+"")&&ae(i,s)},d:function(e){e&&ce(t),r()}};return ne("SvelteRegisterBlock",{block:a,id:_e.name,type:"else",source:"(251:8) {:else}",ctx:e}),a}function Ce(e){let t;function n(e,t){return t.choice===t.representation[t.questionNo].answer?Be:Re}let o=n(0,e),i=o(e);const c={c:function(){i.c(),t=y()},m:function(e,n){i.m(e,n),ie(e,t,n)},p:function(e,c){o===(o=n(0,c))&&i?i.p(e,c):(i.d(1),(i=o(c))&&(i.c(),i.m(t.parentNode,t)))},d:function(e){i.d(e),e&&ce(t)}};return ne("SvelteRegisterBlock",{block:c,id:Ce.name,type:"if",source:"(237:93) ",ctx:e}),c}function Me(e){let t;function n(e,t){return t.choice===t.representation[t.questionNo].answerChoice?Ae:Ee}let o=n(0,e),i=o(e);const c={c:function(){i.c(),t=y()},m:function(e,n){i.m(e,n),ie(e,t,n)},p:function(e,c){o===(o=n(0,c))&&i?i.p(e,c):(i.d(1),(i=o(c))&&(i.c(),i.m(t.parentNode,t)))},d:function(e){i.d(e),e&&ce(t)}};return ne("SvelteRegisterBlock",{block:c,id:Me.name,type:"if",source:"(225:8) {#if representation[questionNo].answered && representation[questionNo].correct}",ctx:e}),c}function Re(e){let t,o,i,c,r=e.choice+"";const s={c:function(){t=g("div"),o=g("i"),i=b(r),c=k(),n(o,we,247,14,5931),se(t,"id","choice"),v(t,"background","#DE3C4B"),v(t,"color","white"),v(t,"border-color","white"),se(t,"class","svelte-fhkhdp"),n(t,we,244,12,5808)},m:function(e,n){ie(e,t,n),oe(t,o),oe(o,i),oe(t,c)},p:function(e,t){(e.representation||e.questionNo)&&r!==(r=t.choice+"")&&ae(i,r)},d:function(e){e&&ce(t)}};return ne("SvelteRegisterBlock",{block:s,id:Re.name,type:"else",source:"(244:10) {:else}",ctx:e}),s}function Be(e){let t,o,i,c,r=e.choice+"";const s={c:function(){t=g("div"),o=g("i"),i=b(r),c=k(),n(o,we,241,14,5743),se(t,"id","choice"),v(t,"background","#7DDF64"),v(t,"color","white"),v(t,"border-color","white"),se(t,"class","svelte-fhkhdp"),n(t,we,238,12,5620)},m:function(e,n){ie(e,t,n),oe(t,o),oe(o,i),oe(t,c)},p:function(e,t){(e.representation||e.questionNo)&&r!==(r=t.choice+"")&&ae(i,r)},d:function(e){e&&ce(t)}};return ne("SvelteRegisterBlock",{block:s,id:Be.name,type:"if",source:"(238:10) {#if choice === representation[questionNo].answer}",ctx:e}),s}function Ee(e){let t,o,i,c,r=e.choice+"";const s={c:function(){t=g("div"),o=g("i"),i=b(r),c=k(),n(o,we,233,14,5402),se(t,"id","choice"),se(t,"class","svelte-fhkhdp"),n(t,we,232,12,5370)},m:function(e,n){ie(e,t,n),oe(t,o),oe(o,i),oe(t,c)},p:function(e,t){(e.representation||e.questionNo)&&r!==(r=t.choice+"")&&ae(i,r)},d:function(e){e&&ce(t)}};return ne("SvelteRegisterBlock",{block:s,id:Ee.name,type:"else",source:"(232:10) {:else}",ctx:e}),s}function Ae(e){let t,o,i,c,r=e.choice+"";const s={c:function(){t=g("div"),o=g("i"),i=b(r),c=k(),n(o,we,229,14,5305),se(t,"id","choice"),v(t,"background","#7DDF64"),v(t,"color","white"),v(t,"border-color","white"),se(t,"class","svelte-fhkhdp"),n(t,we,226,12,5182)},m:function(e,n){ie(e,t,n),oe(t,o),oe(o,i),oe(t,c)},p:function(e,t){(e.representation||e.questionNo)&&r!==(r=t.choice+"")&&ae(i,r)},d:function(e){e&&ce(t)}};return ne("SvelteRegisterBlock",{block:s,id:Ae.name,type:"if",source:"(226:10) {#if choice === representation[questionNo].answerChoice}",ctx:e}),s}function Ve(e){let t;function n(e,t){return t.representation[t.questionNo].answered&&t.representation[t.questionNo].correct?Me:t.representation[t.questionNo].answered&&!t.representation[t.questionNo].correct?Ce:_e}let o=n(0,e),i=o(e);const c={c:function(){i.c(),t=y()},m:function(e,n){i.m(e,n),ie(e,t,n)},p:function(e,c){o===(o=n(0,c))&&i?i.p(e,c):(i.d(1),(i=o(c))&&(i.c(),i.m(t.parentNode,t)))},d:function(e){i.d(e),e&&ce(t)}};return ne("SvelteRegisterBlock",{block:c,id:Ve.name,type:"each",source:"(224:6) {#each representation[questionNo].answerChoices as choice}",ctx:e}),c}function De(e){let t,o,i=e.questionNo<9&&Oe(e),c=e.questionNo>0&&je(e);const r={c:function(){t=g("div"),i&&i.c(),o=k(),c&&c.c(),se(t,"id","button-bar"),se(t,"class","svelte-fhkhdp"),n(t,we,259,6,6184)},m:function(e,n){ie(e,t,n),i&&i.m(t,null),oe(t,o),c&&c.m(t,null)},p:function(e,n){n.questionNo<9?i?i.p(e,n):((i=Oe(n)).c(),i.m(t,o)):i&&(i.d(1),i=null),n.questionNo>0?c?c.p(e,n):((c=je(n)).c(),c.m(t,null)):c&&(c.d(1),c=null)},d:function(e){e&&ce(t),i&&i.d(),c&&c.d()}};return ne("SvelteRegisterBlock",{block:r,id:De.name,type:"if",source:"(259:4) {#if buttonBarVisibility}",ctx:e}),r}function Oe(t){let o,i;const c={c:function(){(o=g("button")).textContent="Next",o.value="Next",se(o,"class","svelte-fhkhdp"),n(o,we,261,10,6245),i=re(o,"click",t.click_handler_1,!1,!1,!1)},m:function(e,t){ie(e,o,t)},p:e,d:function(e){e&&ce(o),i()}};return ne("SvelteRegisterBlock",{block:c,id:Oe.name,type:"if",source:"(261:8) {#if questionNo < 9}",ctx:t}),c}function je(t){let o,i;const c={c:function(){(o=g("button")).textContent="Previous",o.value="Back",se(o,"class","svelte-fhkhdp"),n(o,we,264,10,6367),i=re(o,"click",t.click_handler_2,!1,!1,!1)},m:function(e,t){ie(e,o,t)},p:e,d:function(e){e&&ce(o),i()}};return ne("SvelteRegisterBlock",{block:c,id:je.name,type:"if",source:"(264:8) {#if questionNo > 0}",ctx:t}),c}function ze(e){let t,o,i,c;const r=new me({props:{message:e.snackbarMessage},$$inline:!0}),s={c:function(){t=g("div"),J(r.$$.fragment),se(t,"id","snackbar"),se(t,"class","svelte-fhkhdp"),n(t,we,272,6,6537)},m:function(e,n){ie(e,t,n),K(r,t,null),c=!0},p:function(e,t){const n={};e.snackbarMessage&&(n.message=t.snackbarMessage),r.$set(n)},i:function(e){c||(Q(r.$$.fragment,e),O(()=>{i&&i.end(1),o||(o=Z(t,be,{})),o.start()}),c=!0)},o:function(e){Y(r.$$.fragment,e),o&&o.invalidate(),i=G(t,ke,{}),c=!1},d:function(e){e&&ce(t),U(r),e&&i&&i.end()}};return ne("SvelteRegisterBlock",{block:s,id:ze.name,type:"if",source:"(272:4) {#if snackbarVisibility}",ctx:e}),s}function Pe(e){let t,o,i,c,r,s;const a=[Ne,xe,Se],u=[];function l(e,t){return t.representation.length>0&&!t.resultsScreen?0:t.resultsScreen?1:2}o=l(0,e),i=u[o]=a[o](e);const f={c:function(){t=g("div"),i.c(),se(t,"id","main"),se(t,"class","svelte-fhkhdp"),n(t,we,212,0,4535)},l:function(e){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(e,n){ie(e,t,n),u[o].m(t,null),s=!0},p:function(e,n){let c=o;(o=l(0,n))===c?u[o].p(e,n):(H(),Y(u[c],1,1,()=>{u[c]=null}),I(),(i=u[o])||(i=u[o]=a[o](n)).c(),Q(i,1),i.m(t,null))},i:function(e){s||(Q(i),O(()=>{r&&r.end(1),c||(c=Z(t,be,{})),c.start()}),s=!0)},o:function(e){Y(i),c&&c.invalidate(),r=G(t,ke,{}),s=!1},d:function(e){e&&ce(t),u[o].d(),e&&r&&r.end()}};return ne("SvelteRegisterBlock",{block:f,id:Pe.name,type:"component",source:"",ctx:e}),f}function Le(e,t,n){const o=function(){const e=C();return(t,n)=>{const o=e.$$.callbacks[t];if(o){const i=w(t,n);o.slice().forEach(t=>{t.call(e,i)})}}}();let i=[],c=0,r=!0,s=!1,a=!1,u=!1;var l;function f(e){s&&n("snackbarVisibility",s=!s),n("questionNo","f"===e?c+=1:c-=1)}function d(e={}){if(!p[c].answered){const t={...p[c]};t.answered=!0,e.target.innerText===p[c].answer?(t.correct=!0,t.answerChoice=p[c].answer,n("representation",p[c]=t,p),n("score",h+=1),n("snackbarMessage",a=!0),o("score",{score:h})):(t.answerChoice=e.target.innerText,n("representation",p[c]=t,p),n("snackbarMessage",a=!1)),9===c&&(n("buttonBarVisibility",r=!1),n("resultsScreen",u=!0),o("resultsScreen",{showScore:!1}),n("finalMessage",m=h<5?"Are you on drugs? 😵":5===h?"Don't give up try harder. 🤓":"You're on fire!!! 🔥")),s||n("snackbarVisibility",s=!0)}}l=function(){fetch("https://opentdb.com/api.php?amount=10").then(e=>e.json()).then(e=>{i=e.results,n("representation",p=i.reduce((e,t)=>(e.push({question:ye(t.question),answerChoices:ve([...t.incorrect_answers,t.correct_answer].map(e=>ye(e))),answer:ye(t.correct_answer),category:ye(t.category),difficulty:t.difficulty,answerChoice:"",correct:!1,answered:!1}),e),[]))}).catch(e=>console.error(e))},C().$$.on_mount.push(l);let p,h,m;return e.$capture_state=()=>({}),e.$inject_state=e=>{"data"in e&&(i=e.data),"questionNo"in e&&n("questionNo",c=e.questionNo),"buttonBarVisibility"in e&&n("buttonBarVisibility",r=e.buttonBarVisibility),"snackbarVisibility"in e&&n("snackbarVisibility",s=e.snackbarVisibility),"snackbarMessage"in e&&n("snackbarMessage",a=e.snackbarMessage),"resultsScreen"in e&&n("resultsScreen",u=e.resultsScreen),"representation"in e&&n("representation",p=e.representation),"score"in e&&n("score",h=e.score),"finalMessage"in e&&n("finalMessage",m=e.finalMessage)},n("representation",p=[]),n("score",h=0),n("finalMessage",m=""),{questionNo:c,buttonBarVisibility:r,snackbarVisibility:s,snackbarMessage:a,resultsScreen:u,handleClick:f,handleAnswerChoice:d,representation:p,score:h,finalMessage:m,click_handler:e=>d(e),click_handler_1:()=>f("f"),click_handler_2:()=>f("b")}}class Fe extends ue{constructor(e){super(e),ee(this,e,Le,Pe,s,{}),ne("SvelteRegisterComponent",{component:this,tagName:"QuizArea",options:e,id:Pe.name})}}const Te="src\\App.svelte";function He(e){let t,o,i,c,r;const s={c:function(){t=g("p"),o=b("Score:\n      "),i=g("i"),c=b(e.playerScore),r=b(" / 10"),n(i,Te,37,6,526),v(t,"color","white"),v(t,"font-size","24px"),n(t,Te,35,4,465)},m:function(e,n){ie(e,t,n),oe(t,o),oe(t,i),oe(i,c),oe(i,r)},p:function(e,t){e.playerScore&&ae(c,t.playerScore)},d:function(e){e&&ce(t)}};return ne("SvelteRegisterBlock",{block:s,id:He.name,type:"if",source:"(35:2) {#if visible}",ctx:e}),s}function Ie(e){let t,o,i,c,r,s,a,u,l=e.visible&&He(e);const f=new Fe({$$inline:!0});f.$on("score",(function(){e.score_handler.apply(this,arguments)})),f.$on("resultsScreen",(function(){e.resultsScreen_handler.apply(this,arguments)}));const d={c:function(){t=g("main"),l&&l.c(),o=k(),J(f.$$.fragment),i=k(),c=g("footer"),r=b("Ⓒ Harsh Ranjan. Made with\n  "),(s=g("span")).textContent="❤",a=b("\n  using Svelte"),se(t,"class","svelte-hehxxu"),n(t,Te,32,0,437),v(s,"font-size","24px"),v(s,"color","red"),n(s,Te,53,2,777),se(c,"class","svelte-hehxxu"),n(c,Te,51,0,731)},l:function(e){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(e,n){ie(e,t,n),l&&l.m(t,null),oe(t,o),K(f,t,null),ie(e,i,n),ie(e,c,n),oe(c,r),oe(c,s),oe(c,a),u=!0},p:function(n,i){(e=i).visible?l?l.p(n,e):((l=He(e)).c(),l.m(t,o)):l&&(l.d(1),l=null)},i:function(e){u||(Q(f.$$.fragment,e),u=!0)},o:function(e){Y(f.$$.fragment,e),u=!1},d:function(e){e&&ce(t),l&&l.d(),U(f),e&&ce(i),e&&ce(c)}};return ne("SvelteRegisterBlock",{block:d,id:Ie.name,type:"component",source:"",ctx:e}),d}function Qe(e,t,n){let o=0,i=!0;return e.$capture_state=()=>({}),e.$inject_state=e=>{"playerScore"in e&&n("playerScore",o=e.playerScore),"visible"in e&&n("visible",i=e.visible)},{playerScore:o,visible:i,score_handler:e=>{n("playerScore",o=e.detail.score)},resultsScreen_handler:e=>{n("visible",i=e.detail.showScore)}}}return new class extends ue{constructor(e){super(e),ee(this,e,Qe,Ie,s,{}),ne("SvelteRegisterComponent",{component:this,tagName:"App",options:e,id:Ie.name})}}({target:document.body,intro:!0})}();
//# sourceMappingURL=bundle.js.map