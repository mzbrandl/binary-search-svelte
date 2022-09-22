(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function j(){}function ne(e){return e()}function X(){return Object.create(null)}function F(e){e.forEach(ne)}function q(e){return typeof e=="function"}function ie(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ue(e){return Object.keys(e).length===0}function Y(e){return e==null?"":e}function se(e){return e&&q(e.destroy)?e.destroy:j}function d(e,t){e.appendChild(t)}function G(e,t,n){e.insertBefore(t,n||null)}function R(e){e.parentNode.removeChild(e)}function ce(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function N(e){return document.createTextNode(e)}function S(){return N(" ")}function re(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function k(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function fe(e){return Array.from(e.childNodes)}function W(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let z;function D(e){z=e}function ae(){if(!z)throw new Error("Function called outside component initialization");return z}function de(e){ae().$$.on_mount.push(e)}const P=[],H=[],B=[],Z=[],he=Promise.resolve();let J=!1;function pe(){J||(J=!0,he.then(le))}function Q(e){B.push(e)}const K=new Set;let V=0;function le(){const e=z;do{for(;V<P.length;){const t=P[V];V++,D(t),me(t.$$)}for(D(null),P.length=0,V=0;H.length;)H.pop()();for(let t=0;t<B.length;t+=1){const n=B[t];K.has(n)||(K.add(n),n())}B.length=0}while(P.length);for(;Z.length;)Z.pop()();J=!1,K.clear(),D(e)}function me(e){if(e.fragment!==null){e.update(),F(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Q)}}const ge=new Set;function _e(e,t){e&&e.i&&(ge.delete(e),e.i(t))}function ye(e,t,n,i){const{fragment:l,on_mount:s,on_destroy:o,after_update:f}=e.$$;l&&l.m(t,n),i||Q(()=>{const c=s.map(ne).filter(q);o?o.push(...c):F(c),e.$$.on_mount=[]}),f.forEach(Q)}function be(e,t){const n=e.$$;n.fragment!==null&&(F(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ke(e,t){e.$$.dirty[0]===-1&&(P.push(e),pe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function we(e,t,n,i,l,s,o,f=[-1]){const c=z;D(e);const u=e.$$={fragment:null,ctx:null,props:s,update:j,not_equal:l,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:X(),dirty:f,skip_bound:!1,root:t.target||c.$$.root};o&&o(u.root);let y=!1;if(u.ctx=n?n(e,t.props||{},(h,g,...r)=>{const C=r.length?r[0]:g;return u.ctx&&l(u.ctx[h],u.ctx[h]=C)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](C),y&&ke(e,h)),g}):[],u.update(),y=!0,F(u.before_update),u.fragment=i?i(u.ctx):!1,t.target){if(t.hydrate){const h=fe(t.target);u.fragment&&u.fragment.l(h),h.forEach(R)}else u.fragment&&u.fragment.c();t.intro&&_e(e.$$.fragment),ye(e,t.target,t.anchor,t.customElement),le()}D(c)}class ve{$destroy(){be(this,1),this.$destroy=j}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!ue(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function x(e,t,n){const i=e.slice();return i[17]=t[n],i[18]=t,i[19]=n,i}function Ce(e){let t,n,i,l;return{c(){t=v("span"),t.textContent="Target",k(t,"class","search-target-text svelte-1ekedou")},m(s,o){G(s,t,o),i||(l=se(n=oe.call(null,t,{targetDigits:e[9]})),i=!0)},p(s,o){n&&q(n.update)&&o&512&&n.update.call(null,{targetDigits:s[9]})},d(s){s&&R(t),i=!1,l()}}}function Ee(e){let t,n,i,l;return{c(){t=v("span"),t.textContent="Target found!",k(t,"class","search-target-text svelte-1ekedou")},m(s,o){G(s,t,o),i||(l=se(n=oe.call(null,t,{targetDigits:e[9]})),i=!0)},p(s,o){n&&q(n.update)&&o&512&&n.update.call(null,{targetDigits:s[9]})},d(s){s&&R(t),i=!1,l()}}}function $(e){let t,n,i=e[17]+"",l,s,o,f,c=e[19],u,y;function h(p,E){if(p[17]===p[2][p[3]]&&p[17]===p[0])return Ee;if(p[17]===p[0])return Ce}let g=h(e),r=g&&g(e);const C=()=>e[13](t,c),T=()=>e[13](null,c);function I(){return e[14](e[17])}return{c(){t=v("div"),n=v("span"),l=N(i),s=S(),r&&r.c(),k(n,"class","number-text svelte-1ekedou"),k(t,"class",o=Y(`number${e[17]===e[0]?" search-target":""}${e[2].includes(e[17])?"":" excluded"}`)+" svelte-1ekedou"),k(t,"disabled",f=e[5]||!!e[0])},m(p,E){G(p,t,E),d(t,n),d(n,l),d(t,s),r&&r.m(t,null),C(),u||(y=re(t,"click",I),u=!0)},p(p,E){e=p,E&2&&i!==(i=e[17]+"")&&W(l,i),g===(g=h(e))&&r?r.p(e,E):(r&&r.d(1),r=g&&g(e),r&&(r.c(),r.m(t,null))),E&7&&o!==(o=Y(`number${e[17]===e[0]?" search-target":""}${e[2].includes(e[17])?"":" excluded"}`)+" svelte-1ekedou")&&k(t,"class",o),E&33&&f!==(f=e[5]||!!e[0])&&k(t,"disabled",f),c!==e[19]&&(T(),c=e[19],C())},d(p){p&&R(t),r&&r.d(),T(),u=!1,y()}}}function Ae(e){let t,n,i,l,s,o,f,c,u,y,h,g,r,C,T,I,p,E,M,a,b,A,L=e[1],w=[];for(let m=0;m<L.length;m+=1)w[m]=$(x(e,L,m));return{c(){t=v("main"),n=v("h1"),n.textContent="Binary search",i=S(),l=v("p"),l.innerHTML=`A binary search algorithm is a fast way to find an item in a sorted array.
    It works by selecting the item in the middle of the array. If the selected
    item is smaller or bigger than the searched item, the lower or upper half of
    the array is used to repeat the process until the searched item is found.
    <br/> 
    <br/>
    This animated visualization was created as an excercise for trying out Svlete.
    Code can be viewed
    <a href="https://github.com/mzbrandl/binary-search">here.</a>`,s=S(),o=v("div"),f=v("div");for(let m=0;m<w.length;m+=1)w[m].c();c=S(),u=v("div"),y=v("span"),h=N(e[4]),g=S(),r=v("span"),C=N(e[8]),T=N(" guess"),I=S(),p=v("p"),p.innerHTML="<b>Click on an item to search it!</b>",E=S(),M=v("button"),a=N("Generate sorted array"),k(n,"class","svelte-1ekedou"),k(y,"class","hint svelte-1ekedou"),k(r,"class","guess-text svelte-1ekedou"),k(u,"class","marker svelte-1ekedou"),k(f,"class","numbers svelte-1ekedou"),k(p,"class","propmt svelte-1ekedou"),M.disabled=e[5],k(M,"class","svelte-1ekedou"),k(o,"class","card")},m(m,O){G(m,t,O),d(t,n),d(t,i),d(t,l),d(t,s),d(t,o),d(o,f);for(let _=0;_<w.length;_+=1)w[_].m(f,null);d(f,c),d(f,u),d(u,y),d(y,h),d(u,g),d(u,r),d(r,C),d(r,T),e[15](u),d(o,I),d(o,p),d(o,E),d(o,M),d(M,a),b||(A=re(M,"click",e[10]),b=!0)},p(m,[O]){if(O&2671){L=m[1];let _;for(_=0;_<L.length;_+=1){const U=x(m,L,_);w[_]?w[_].p(U,O):(w[_]=$(U),w[_].c(),w[_].m(f,c))}for(;_<w.length;_+=1)w[_].d(1);w.length=L.length}O&16&&W(h,m[4]),O&256&&W(C,m[8]),O&32&&(M.disabled=m[5])},i:j,o:j,d(m){m&&R(t),ce(w,m),e[15](null),b=!1,A()}}}function ee(e,t){return Math.floor(Math.random()*(t-e+1))+e}function oe(e,t){return te(e,t),{update(n){te(e,n)}}}function te(e,t){for(const n in t)e.style.setProperty(`--${n}`,t[n])}function Le(e,t,n){let i,l;de(()=>{C()});let s=[],o=[],f,c,u=0,y="",h=!1,g=[],r;function C(){n(1,s=[]),n(0,f=void 0),n(3,c=void 0),n(12,u=0),n(7,r.style.display="none",r),n(7,r.style.transition="unset",r);const a=ee(12,18);for(;s.length<a;){const b=ee(0,99);s.includes(b)||s.push(b)}s.sort((b,A)=>b-A),n(2,o=s)}async function T(a=s){n(5,h=!0),n(3,c=Math.floor(a.length/2)),n(12,u++,u);const b=g.find((A,L)=>s[L]===o[c]);if(n(7,r.style.display="flex",r),n(7,r.style.left=`${b.offsetLeft}px`,r),n(7,r.style.top=`${b.offsetTop}px`,r),n(7,r.style.width=`${b.clientWidth}px`,r),n(7,r.style.height=`${b.clientHeight}px`,r),n(7,r.style.transition="all 1s cubic-bezier(0.19, 1, 0.22, 1)",r),f===a[c])return n(4,y=""),n(5,h=!1),c;if(f<a[c])return n(4,y="<"),await new Promise(A=>setTimeout(A,1e3)),n(2,o=[...a].splice(0,c)),await T(o);if(f>a[c]){n(4,y=">"),await new Promise(L=>setTimeout(L,1e3)),n(2,o=[...a].splice(c+1,a.length));const A=await T(o);return A===-1?-1:c+A}return-1}function I(a){n(0,f=a),T()}function p(a,b){H[a?"unshift":"push"](()=>{g[b]=a,n(6,g)})}const E=a=>!h&&!f&&I(a);function M(a){H[a?"unshift":"push"](()=>{r=a,n(7,r)})}return e.$$.update=()=>{e.$$.dirty&1&&n(9,i=f==null?void 0:f.toString().length),e.$$.dirty&4096&&n(8,l=`${u}${u<4?u<3?u<2?"st":"nd":"rd":"th"}`)},[f,s,o,c,y,h,g,r,l,i,C,I,u,p,E,M]}class Te extends ve{constructor(t){super(),we(this,t,Le,Ae,ie,{})}}new Te({target:document.getElementById("app")});