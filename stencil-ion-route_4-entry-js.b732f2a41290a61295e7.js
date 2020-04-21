(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{160:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_route",(function(){return a})),n.d(e,"ion_route_redirect",(function(){return c})),n.d(e,"ion_router",(function(){return S})),n.d(e,"ion_router_link",(function(){return k}));var o=n(2),r=n(3),i=n(284),s=n(283);const a=class{constructor(t){Object(o.l)(this,t),this.url="",this.ionRouteDataChanged=Object(o.f)(this,"ionRouteDataChanged",7)}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const n=t?Object.keys(t):[],o=e?Object.keys(e):[];if(n.length===o.length){for(const o of n)if(t[o]!==e[o])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},c=class{constructor(t){Object(o.l)(this,t),this.ionRouteRedirectChanged=Object(o.f)(this,"ionRouteRedirectChanged",7)}propDidChange(){this.ionRouteRedirectChanged.emit()}connectedCallback(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}},u=t=>"/"+t.filter(t=>t.length>0).join("/"),h=t=>{if(null==t)return[""];const e=t.split("/").map(t=>t.trim()).filter(t=>t.length>0);return 0===e.length?[""]:e},l=async(t,e,n,o,r=!1)=>{try{const i=f(t);if(o>=e.length||!i)return r;await i.componentOnReady();const s=e[o],a=await i.setRouteId(s.id,s.params,n);return a.changed&&(n="root",r=!0),r=await l(a.element,e,n,o+1,r),a.markVisible&&await a.markVisible(),r}catch(t){return console.error(t),!1}},d=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",f=t=>{if(!t)return;if(t.matches(d))return t;const e=t.querySelector(d);return e||void 0},p=(t,e)=>e.find(e=>((t,e)=>{const{from:n,to:o}=e;if(void 0===o)return!1;if(n.length>t.length)return!1;for(let e=0;e<n.length;e++){const o=n[e];if("*"===o)return!0;if(o!==t[e])return!1}return n.length===t.length})(t,e)),g=(t,e)=>{const n=Math.min(t.length,e.length);let o=0;for(;o<n&&t[o].toLowerCase()===e[o].id;o++);return o},m=(t,e)=>{const n=new y(t);let o,r=!1;for(let t=0;t<e.length;t++){const i=e[t].path;if(""===i[0])r=!0;else{for(const e of i){const r=n.next();if(":"===e[0]){if(""===r)return null;o=o||[],(o[t]||(o[t]={}))[e.slice(1)]=r}else if(r!==e)return null}r=!1}}return!r||r===(""===n.next())?o?e.map((t,e)=>({id:t.id,path:t.path,params:w(t.params,o[e])})):e:null},w=(t,e)=>!t&&e?e:t&&!e?t:t&&e?Object.assign(Object.assign({},t),e):void 0,b=t=>{let e=1,n=1;for(const o of t)for(const t of o.path)":"===t[0]?e+=Math.pow(1,n):""!==t&&(e+=Math.pow(2,n)),n++;return e};class y{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}const R=t=>Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const e=O(t,"to");return{from:h(O(t,"from")),to:null==e?void 0:h(e)}}),v=t=>j(C(t)),C=(t,e=t)=>Array.from(e.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(e=>{const n=O(e,"component");if(null==n)throw new Error("component missing in ion-route");return{path:h(O(e,"url")),id:n.toLowerCase(),params:e.componentProps,children:C(t,e)}}),O=(t,e)=>e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null,j=t=>{const e=[];for(const n of t)P([],e,n);return e},P=(t,e,n)=>{const o=t.slice();if(o.push({id:n.id,path:n.path,params:n.params}),0!==n.children.length)for(const t of n.children)P(o,e,t);else e.push(o)},S=class{constructor(t){Object(o.l)(this,t),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0,this.ionRouteWillChange=Object(o.f)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(o.f)(this,"ionRouteDidChange",7)}async componentWillLoad(){console.debug("[ion-router] router will load"),await(f(document.body)?Promise.resolve():new Promise(t=>{window.addEventListener("ionNavWillLoad",t,{once:!0})})),console.debug("[ion-router] found nav"),await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",Object(i.e)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(i.e)(this.onRoutesChanged.bind(this),100))}onPopState(){const t=this.historyDirection(),e=this.getPath();return console.debug("[ion-router] URL changed -> update nav",e,t),this.writeNavStateRoot(e,t)}onBackButton(t){t.detail.register(0,()=>this.back())}push(t,e="forward"){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,e);const n=h(t);return this.setPath(n,e),this.writeNavStateRoot(n,e)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const e of t){const t=[];e.forEach(e=>t.push(...e.path));const n=e.map(t=>t.id);console.debug("%c "+u(t),"font-weight: bold; padding-left: 20px","=>\t",`(${n.join(", ")})`)}console.groupEnd()})(v(this.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const e of t)e.to&&console.debug("FROM: ","$c "+u(e.from),"font-weight: bold"," TO: ","$c "+u(e.to),"font-weight: bold");console.groupEnd()})(R(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:e,outlet:n}=await(async t=>{const e=[];let n,o=t;for(;n=f(o),n;){const t=await n.getRouteId();if(!t)break;o=t.element,t.element=void 0,e.push(t)}return{ids:e,outlet:n}})(window.document.body),o=((t,e)=>{let n=null,o=0;const r=t.map(t=>t.id);for(const t of e){const e=g(r,t);e>o&&(n=t,o=e)}return n?n.map((e,n)=>({id:e.id,path:e.path,params:w(e.params,t[n]&&t[n].params)})):null})(e,v(this.el));if(!o)return console.warn("[ion-router] no matching URL for ",e.map(t=>t.id)),!1;const r=(t=>{const e=[];for(const n of t)for(const t of n.path)if(":"===t[0]){const o=n.params&&n.params[t.slice(1)];if(!o)return null;e.push(o)}else""!==t&&e.push(t);return e})(o);return r?(console.debug("[ion-router] nav changed -> update URL",e,r),this.setPath(r,t),await this.safeWriteNavState(n,o,"root",r,null,e.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&p(t,R(this.el))&&this.writeNavStateRoot(t,"root")}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),"root")}historyDirection(){const t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));const e=t.history.state,n=this.lastState;return this.lastState=e,e>n?"forward":e<n?"back":"root"}async writeNavStateRoot(t,e){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const n=R(this.el),o=p(t,n);let r=null;o&&(this.setPath(o.to,e),r=o.from,t=o.to);const i=((t,e)=>{let n=null,o=0;for(const r of e){const e=m(t,r);if(null!==e){const t=b(e);t>o&&(o=t,n=e)}}return n})(t,v(this.el));return i?this.safeWriteNavState(document.body,i,e,t,r):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,e,n,o,r,i=0){const s=await this.lock();let a=!1;try{a=await this.writeNavState(t,e,n,o,r,i)}catch(t){console.error(t)}return s(),a}async lock(){const t=this.waitPromise;let e;return this.waitPromise=new Promise(t=>e=t),void 0!==t&&await t,e}async writeNavState(t,e,n,o,r,i=0){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const s=this.routeChangeEvent(o,r);s&&this.ionRouteWillChange.emit(s);const a=await l(t,e,n,i);return this.busy=!1,a&&console.debug("[ion-router] route changed",o),s&&this.ionRouteDidChange.emit(s),a}setPath(t,e){this.state++,((t,e,n,o,r,i)=>{let s=u([...h(e),...o]);n&&(s="#"+s),"forward"===r?t.pushState(i,"",s):t.replaceState(i,"",s)})(window.history,this.root,this.useHash,t,e,this.state)}getPath(){return((t,e,n)=>{let o=t.pathname;if(n){const e=t.hash;o="#"===e[0]?e.slice(1):""}return((t,e)=>{if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(let n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)})(h(e),h(o))})(window.location,this.root,this.useHash)}routeChangeEvent(t,e){const n=this.previousPath,o=u(t);return this.previousPath=o,o===n?null:{from:n,redirectedFrom:e?u(e):null,to:o}}get el(){return Object(o.g)(this)}},k=class{constructor(t){Object(o.l)(this,t),this.routerDirection="forward",this.onClick=t=>{Object(s.d)(this.href,t,this.routerDirection)}}render(){const t=Object(r.b)(this),e={href:this.href,rel:this.rel,target:this.target};return Object(o.j)(o.b,{onClick:this.onClick,class:Object.assign(Object.assign({},Object(s.a)(this.color)),{[t]:!0,"ion-activatable":!0})},Object(o.j)("a",Object.assign({},e),Object(o.j)("slot",null)))}};k.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},283:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a}));const o=(t,e)=>null!==e.closest(t),r=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-"+t]:!0}:void 0,i=t=>{const e={};return(t=>{if(void 0!==t){return(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t)}return[]})(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const o=document.querySelector("ion-router");if(o)return null!=e&&e.preventDefault(),o.push(t,n)}return!1}},284:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return i})),n.d(e,"g",(function(){return r})),n.d(e,"h",(function(){return l})),n.d(e,"i",(function(){return u})),n.d(e,"j",(function(){return h})),n.d(e,"k",(function(){return o}));const o=t=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"==typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t),r=t=>!!t.shadowRoot&&!!t.attachShadow,i=t=>{const e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},s=(t,e,n,o,i)=>{if(t||r(e)){let t=e.querySelector("input.aux-input");t||(t=e.ownerDocument.createElement("input"),t.type="hidden",t.classList.add("aux-input"),e.appendChild(t)),t.disabled=i,t.name=n,t.value=o||""}},a=(t,e,n)=>Math.max(t,Math.min(e,n)),c=(t,e)=>{if(!t){const t="ASSERT: "+e;throw console.error(t),new Error(t)}},u=t=>t.timeStamp||Date.now(),h=t=>{if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];return{x:t.clientX,y:t.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},l=t=>{const e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error(`"${t}" is not a valid value for [side]. Use "start" or "end" instead.`)}},d=(t,e)=>{const n=t._original||t;return{_original:t,emit:f(n.emit.bind(n),e)}},f=(t,e=0)=>{let n;return(...o)=>{clearTimeout(n),n=setTimeout(t,e,...o)}}}}]);