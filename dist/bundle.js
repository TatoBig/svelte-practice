(()=>{"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t){return 0===Object.keys(t).length}new Set;let i,l=!1;function u(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function d(t){i=t}new Map;const f=[],h=[],$=[],p=[],m=Promise.resolve();let g=!1;function b(t){$.push(t)}const y=new Set;let _=0;function w(){const t=i;do{for(;_<f.length;){const t=f[_];_++,d(t),k(t.$$)}for(d(null),f.length=0,_=0;h.length;)h.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];y.has(e)||(y.add(e),e())}$.length=0}while(f.length);for(;p.length;)p.pop()();g=!1,y.clear(),d(t)}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const x=new Set;let v;function E(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function C(r,c,a,h,$,p,y,_=[-1]){const k=i;d(r);const v=r.$$={fragment:null,ctx:null,props:p,update:t,not_equal:$,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(k?k.$$.context:[])),callbacks:n(),dirty:_,skip_bound:!1,root:c.target||k.$$.root};y&&y(v.root);let E=!1;if(v.ctx=a?a(r,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return v.ctx&&$(v.ctx[t],v.ctx[t]=o)&&(!v.skip_bound&&v.bound[t]&&v.bound[t](o),E&&function(t,e){-1===t.$$.dirty[0]&&(f.push(t),g||(g=!0,m.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(r,t)),e})):[],v.update(),E=!0,o(v.before_update),v.fragment=!!h&&h(v.ctx),c.target){if(c.hydrate){l=!0;const t=(M=c.target,Array.from(M.childNodes));v.fragment&&v.fragment.l(t),t.forEach(u)}else v.fragment&&v.fragment.c();c.intro&&((C=r.$$.fragment)&&C.i&&(x.delete(C),C.i(S))),function(t,n,r,c){const{fragment:i,on_mount:l,on_destroy:u,after_update:a}=t.$$;i&&i.m(n,r),c||b((()=>{const n=l.map(e).filter(s);u?u.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(b)}(r,c.target,c.anchor,c.customElement),l=!1,w()}var C,S,M;d(k)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(v=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){E(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function S(t){!function(t,e,n){const o=function(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}(t);if(!o.getElementById(e)){const t=a("style");t.id=e,t.textContent="body{background-color:#676778;color:white}",function(t,e){!function(t,e){t.appendChild(e)}(t.head||t,e)}(o,t)}}(t,"svelte-19hxupt")}function M(e){let n;return{c(){var t,e,o;n=a("div"),n.innerHTML="<h1>Hello pugstagram</h1>",t=n,e="class",null==(o="main")?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}new class extends class{$destroy(){E(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),C(this,t,null,M,r,{},S)}}({target:document.querySelector("main")})})();