(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".vue-tab-complete-wrapper{position:relative}.vue-tab-complete-wrapper input{z-index:10;padding:.5rem;padding-left:14px;width:100%;height:100%;color:#fff;border-color:#ced7d0;caret-color:#63666c}.vue-tab-complete-wrapper .input-overlay{position:absolute;left:.75rem;top:50%;transform:translateY(-50%)}.vue-tab-complete-wrapper .input-overlay .result-query{padding-top:.25rem;padding-bottom:.25rem;margin-left:.125rem;color:#000}.vue-tab-complete-wrapper .input-overlay .result-suggest{color:#9ca3af}.vue-tab-complete-wrapper .input-overlay .result-suggest .swiper{position:relative;margin-left:.8rem;font-size:.8rem;color:#cfd0d1}.vue-tab-complete-wrapper .input-overlay .result-suggest .swiper svg{position:absolute;top:-2px;right:-60%;width:18px;height:18px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
(function(y,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(y=typeof globalThis<"u"?globalThis:y||self,e(y.VueNextHint={},y.Vue))})(this,function(y,e){"use strict";const ee="";function T(t){return e.getCurrentScope()?(e.onScopeDispose(t),!0):!1}function N(t){return typeof t=="function"?t():e.unref(t)}const L=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const I=Object.prototype.toString,O=t=>I.call(t)==="[object Object]",b=()=>{};function W(t){return t||e.getCurrentInstance()}function H(t,n=!0,o){W()?e.onMounted(t,o):n?t():e.nextTick(t)}function R(t){var n;const o=N(t);return(n=o==null?void 0:o.$el)!=null?n:o}const _=L?window:void 0;function x(...t){let n,o,a,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([o,a,s]=t,n=_):[n,o,a,s]=t,!n)return b;Array.isArray(o)||(o=[o]),Array.isArray(a)||(a=[a]);const p=[],u=()=>{p.forEach(f=>f()),p.length=0},r=(f,c,h,m)=>(f.addEventListener(c,h,m),()=>f.removeEventListener(c,h,m)),i=e.watch(()=>[R(n),N(s)],([f,c])=>{if(u(),!f)return;const h=O(c)?{...c}:c;p.push(...o.flatMap(m=>a.map(E=>r(f,m,E,h))))},{immediate:!0,flush:"post"}),d=()=>{i(),u()};return T(d),d}function D(){const t=e.ref(!1),n=e.getCurrentInstance();return n&&e.onMounted(()=>{t.value=!0},n),t}function j(t){const n=D();return e.computed(()=>(n.value,!!t()))}function A(t,n={}){const{window:o=_}=n,a=j(()=>o&&"matchMedia"in o&&typeof o.matchMedia=="function");let s;const p=e.ref(!1),u=d=>{p.value=d.matches},r=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",u):s.removeListener(u))},i=e.watchEffect(()=>{a.value&&(r(),s=o.matchMedia(N(t)),"addEventListener"in s?s.addEventListener("change",u):s.addListener(u),p.value=s.matches)});return T(()=>{i(),r(),s=void 0}),p}function B(t,n={}){const{threshold:o=50,onSwipe:a,onSwipeEnd:s,onSwipeStart:p,passive:u=!0,window:r=_}=n,i=e.reactive({x:0,y:0}),d=e.reactive({x:0,y:0}),f=e.computed(()=>i.x-d.x),c=e.computed(()=>i.y-d.y),{max:h,abs:m}=Math,E=e.computed(()=>h(m(f.value),m(c.value))>=o),w=e.ref(!1),M=e.computed(()=>E.value?m(f.value)>m(c.value)?f.value>0?"left":"right":c.value>0?"up":"down":"none"),V=l=>[l.touches[0].clientX,l.touches[0].clientY],$=(l,v)=>{i.x=l,i.y=v},C=(l,v)=>{d.x=l,d.y=v};let g;const k=P(r==null?void 0:r.document);u?g=k?{passive:!0}:{capture:!1}:g=k?{passive:!1,capture:!0}:{capture:!0};const J=l=>{w.value&&(s==null||s(l,M.value)),w.value=!1},Z=[x(t,"touchstart",l=>{if(l.touches.length!==1)return;g.capture&&!g.passive&&l.preventDefault();const[v,S]=V(l);$(v,S),C(v,S),p==null||p(l)},g),x(t,"touchmove",l=>{if(l.touches.length!==1)return;const[v,S]=V(l);C(v,S),!w.value&&E.value&&(w.value=!0),w.value&&(a==null||a(l))},g),x(t,["touchend","touchcancel"],J,g)];return{isPassiveEventSupported:k,isSwiping:w,direction:M,coordsStart:i,coordsEnd:d,lengthX:f,lengthY:c,stop:()=>Z.forEach(l=>l())}}function P(t){if(!t)return!1;let n=!1;const o={get passive(){return n=!0,!1}};return t.addEventListener("x",b,o),t.removeEventListener("x",b),n}function Y(t={}){const{window:n=_,initialWidth:o=Number.POSITIVE_INFINITY,initialHeight:a=Number.POSITIVE_INFINITY,listenOrientation:s=!0,includeScrollbar:p=!0}=t,u=e.ref(o),r=e.ref(a),i=()=>{n&&(p?(u.value=n.innerWidth,r.value=n.innerHeight):(u.value=n.document.documentElement.clientWidth,r.value=n.document.documentElement.clientHeight))};if(i(),H(i),x("resize",i,{passive:!0}),s){const d=A("(orientation: portrait)");e.watch(d,()=>i())}return{width:u,height:r}}const q=["placeholder"],Q={class:"input-overlay"},X={class:"result-query"},z={class:"result-suggest"},F={key:0,class:"swiper"},G=e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"})],-1),K=e.defineComponent({__name:"NextHint",props:{suggestions:{type:Array,required:!0,default:()=>[]},placeholder:{type:String,required:!0,default:""}},emits:["change"],setup(t,{emit:n}){const o=t,a=n,s=e.ref(null),{width:p}=Y(),{direction:u}=B(s),r=e.ref(""),i=e.computed(()=>r.value===""?null:o.suggestions.find(h=>h.toLowerCase().startsWith(r.value.toLowerCase()))),d=e.computed(()=>{var c;return r.value===""||i.value===null?null:(c=i.value)==null?void 0:c.substring(r.value.length)}),f=c=>{c.key==="Tab"&&(c.preventDefault(),i.value&&(r.value=i.value))};return e.watch(r,()=>{a("change",r.value)}),e.watch(u,c=>{c==="right"&&i.value&&(r.value=i.value)}),(c,h)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"nexthintRef",ref:s,class:"vue-tab-complete-wrapper"},[e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":h[0]||(h[0]=m=>r.value=m),type:"text",class:"vue-tab-complete-input",onKeydown:f,placeholder:o.placeholder},null,40,q),[[e.vModelText,r.value]]),e.createElementVNode("div",Q,[e.createElementVNode("span",X,e.toDisplayString(r.value),1),e.createElementVNode("span",z,[e.createTextVNode(e.toDisplayString(d.value)+" ",1),d.value&&e.unref(p)<768?(e.openBlock(),e.createElementBlock("span",F,[e.createTextVNode(" swipe "),G])):e.createCommentVNode("v-if",!0)])])],512))}}),te="",U=((t,n)=>{const o=t.__vccOpts||t;for(const[a,s]of n)o[a]=s;return o})(K,[["__file","/opt/lampp/htdocs/phuc/vue-nexthint/src/NextHint.vue"]]);y.NextHint=U,Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})});
