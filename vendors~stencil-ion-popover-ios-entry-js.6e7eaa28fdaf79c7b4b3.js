(window.webpackJsonp=window.webpackJsonp||[]).push([[100,7],{147:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_popover",(function(){return h}));var n=o(2),i=o(3),r=(o(284),o(289)),a=o(288),s=(o(285),o(286)),c=o(283),p=o(292);const l=(e,t)=>{let o="top",n="left";const i=e.querySelector(".popover-content"),a=i.getBoundingClientRect(),s=a.width,c=a.height,p=e.ownerDocument.defaultView.innerWidth,l=e.ownerDocument.defaultView.innerHeight,u=t&&t.target&&t.target.getBoundingClientRect(),m=null!=u&&"top"in u?u.top:l/2-c/2,f=null!=u&&"left"in u?u.left:p/2,h=u&&u.width||0,v=u&&u.height||0,b=e.querySelector(".popover-arrow"),g=b.getBoundingClientRect(),w=g.width,y=g.height;null==u&&(b.style.display="none");const x={top:m+v,left:f+h/2-w/2},E={top:m+v+(y-1),left:f+h/2-s/2};let k=!1,O=!1;E.left<d+25?(k=!0,E.left=d):s+d+E.left+25>p&&(O=!0,E.left=p-s-d,n="right"),m+v+c>l&&m-c>0?(x.top=m-(y+1),E.top=m-c-(y-1),e.className=e.className+" popover-bottom",o="bottom"):m+v+c>l&&(i.style.bottom=d+"%"),b.style.top=x.top+"px",b.style.left=x.left+"px",i.style.top=E.top+"px",i.style.left=E.left+"px",k&&(i.style.left=`calc(${E.left}px + var(--ion-safe-area-left, 0px))`),O&&(i.style.left=`calc(${E.left}px - var(--ion-safe-area-right, 0px))`),i.style.transformOrigin=o+" "+n;const j=Object(r.a)(),D=Object(r.a)(),P=Object(r.a)();return D.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),P.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),j.addElement(e).easing("ease").duration(100).addAnimation([D,P])},d=5,u=e=>{const t=Object(r.a)(),o=Object(r.a)(),n=Object(r.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,n])},m=(e,t)=>{const o=e.ownerDocument,n="rtl"===o.dir;let i="top",a=n?"right":"left";const s=e.querySelector(".popover-content"),c=s.getBoundingClientRect(),p=c.width,l=c.height,d=o.defaultView.innerWidth,u=o.defaultView.innerHeight,m=t&&t.target&&t.target.getBoundingClientRect(),f=null!=m&&"bottom"in m?m.bottom:u/2-l/2,h=null!=m&&"left"in m?n?m.left-p+m.width:m.left:d/2-p/2,v=m&&m.height||0,b={top:f,left:h};b.left<12?(b.left=12,a="left"):p+12+b.left>d&&(b.left=d-p-12,a="right"),f+v+l>u&&f-l>0?(b.top=f-l-v,e.className=e.className+" popover-bottom",i="bottom"):f+v+l>u&&(s.style.bottom="12px");const g=Object(r.a)(),w=Object(r.a)(),y=Object(r.a)(),x=Object(r.a)(),E=Object(r.a)();return w.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),y.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),x.addElement(s).beforeStyles({top:b.top+"px",left:b.left+"px","transform-origin":`${i} ${a}`}).fromTo("transform","scale(0.001)","scale(1)"),E.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),g.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([w,y,x,E])},f=e=>{const t=Object(r.a)(),o=Object(r.a)(),n=Object(r.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,n])},h=class{constructor(e){Object(n.l)(this,e),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=e=>{e.stopPropagation(),e.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,s.a)},this.onLifecycle=e=>{const t=this.usersElement,o=v[e.type];if(t&&o){const n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(n)}},Object(s.e)(this.el),this.didPresent=Object(n.f)(this,"ionPopoverDidPresent",7),this.willPresent=Object(n.f)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(n.f)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(n.f)(this,"ionPopoverDidDismiss",7)}async present(){if(this.presented)return;const e=this.el.querySelector(".popover-content");if(!e)throw new Error("container is undefined");const t=Object.assign(Object.assign({},this.componentProps),{popover:this.el});return this.usersElement=await Object(p.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t),await Object(a.d)(this.usersElement),Object(s.f)(this,"popoverEnter",l,m,this.event)}async dismiss(e,t){const o=await Object(s.g)(this,e,t,"popoverLeave",u,f,this.event);return o&&await Object(p.b)(this.delegate,this.usersElement),o}onDidDismiss(){return Object(s.h)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return Object(s.h)(this.el,"ionPopoverWillDismiss")}render(){const e=Object(i.b)(this),{onLifecycle:t}=this;return Object(n.j)(n.b,{"aria-modal":"true","no-router":!0,style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(c.b)(this.cssClass)),{[e]:!0,"popover-translucent":this.translucent}),onIonPopoverDidPresent:t,onIonPopoverWillPresent:t,onIonPopoverWillDismiss:t,onIonPopoverDidDismiss:t,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(n.j)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(n.j)("div",{class:"popover-wrapper"},Object(n.j)("div",{class:"popover-arrow"}),Object(n.j)("div",{class:"popover-content"})))}get el(){return Object(n.g)(this)}},v={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};h.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"}},283:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return n})),o.d(t,"d",(function(){return s}));const n=(e,t)=>null!==t.closest(e),i=e=>"string"==typeof e&&e.length>0?{"ion-color":!0,["ion-color-"+e]:!0}:void 0,r=e=>{const t={};return(e=>{if(void 0!==e){return(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e)}return[]})(e).forEach(e=>t[e]=!0),t},a=/^[a-z][a-z0-9+\-.]*:/,s=async(e,t,o)=>{if(null!=e&&"#"!==e[0]&&!a.test(e)){const n=document.querySelector("ion-router");if(n)return null!=t&&t.preventDefault(),n.push(e,o)}return!1}},284:function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return c})),o.d(t,"c",(function(){return s})),o.d(t,"d",(function(){return u})),o.d(t,"e",(function(){return m})),o.d(t,"f",(function(){return r})),o.d(t,"g",(function(){return i})),o.d(t,"h",(function(){return d})),o.d(t,"i",(function(){return p})),o.d(t,"j",(function(){return l})),o.d(t,"k",(function(){return n}));const n=e=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e),i=e=>!!e.shadowRoot&&!!e.attachShadow,r=e=>{const t=e.closest("ion-item");return t?t.querySelector("ion-label"):null},a=(e,t,o,n,r)=>{if(e||i(t)){let e=t.querySelector("input.aux-input");e||(e=t.ownerDocument.createElement("input"),e.type="hidden",e.classList.add("aux-input"),t.appendChild(e)),e.disabled=r,e.name=o,e.value=n||""}},s=(e,t,o)=>Math.max(e,Math.min(t,o)),c=(e,t)=>{if(!e){const e="ASSERT: "+t;throw console.error(e),new Error(e)}},p=e=>e.timeStamp||Date.now(),l=e=>{if(e){const t=e.changedTouches;if(t&&t.length>0){const e=t[0];return{x:e.clientX,y:e.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},d=e=>{const t="rtl"===document.dir;switch(e){case"start":return t;case"end":return!t;default:throw new Error(`"${e}" is not a valid value for [side]. Use "start" or "end" instead.`)}},u=(e,t)=>{const o=e._original||e;return{_original:e,emit:m(o.emit.bind(o),t)}},m=(e,t=0)=>{let o;return(...n)=>{clearTimeout(o),o=setTimeout(e,t,...n)}}},285:function(e,t,o){"use strict";o.r(t),o.d(t,"MENU_BACK_BUTTON_PRIORITY",(function(){return a})),o.d(t,"OVERLAY_BACK_BUTTON_PRIORITY",(function(){return r})),o.d(t,"startHardwareBackButton",(function(){return n}));const n=()=>{const e=document;let t=!1;e.addEventListener("backbutton",()=>{if(t)return;const o=[],n=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(e,t){o.push({priority:e,handler:t})}}});if(e.dispatchEvent(n),o.length>0){let e,n=Number.MIN_SAFE_INTEGER;o.forEach(({priority:t,handler:o})=>{t>=n&&(n=t,e=o)}),t=!0,i(e).then(()=>t=!1)}})},i=async e=>{try{if(e){const t=e();null!=t&&await t}}catch(e){console.error(e)}},r=100,a=99},286:function(e,t,o){"use strict";o.d(t,"a",(function(){return P})),o.d(t,"b",(function(){return c})),o.d(t,"c",(function(){return p})),o.d(t,"d",(function(){return d})),o.d(t,"e",(function(){return u})),o.d(t,"f",(function(){return b})),o.d(t,"g",(function(){return g})),o.d(t,"h",(function(){return x})),o.d(t,"i",(function(){return a})),o.d(t,"j",(function(){return k})),o.d(t,"k",(function(){return l})),o.d(t,"l",(function(){return D}));var n=o(3),i=o(285);let r=0;const a=new WeakMap,s=e=>({create:t=>m(e,t),dismiss:(t,o,n)=>h(document,t,o,e,n),getTop:async()=>v(document,e)}),c=s("ion-alert"),p=s("ion-action-sheet"),l=s("ion-picker"),d=s("ion-popover"),u=e=>{const t=document;f(t);const o=r++;e.overlayIndex=o,e.hasAttribute("id")||(e.id="ion-overlay-"+o)},m=(e,t)=>customElements.whenDefined(e).then(()=>{const o=document,n=o.createElement(e);return n.classList.add("overlay-hidden"),Object.assign(n,t),w(o).appendChild(n),n.componentOnReady()}),f=e=>{0===r&&(r=1,e.addEventListener("focusin",t=>{const o=v(e);if(o&&o.backdropDismiss&&!O(o,t.target)){const e=o.querySelector("input,button");e&&e.focus()}}),e.addEventListener("ionBackButton",t=>{const o=v(e);o&&o.backdropDismiss&&t.detail.register(i.OVERLAY_BACK_BUTTON_PRIORITY,()=>o.dismiss(void 0,P))}),e.addEventListener("keyup",t=>{if("Escape"===t.key){const t=v(e);t&&t.backdropDismiss&&t.dismiss(void 0,P)}}))},h=(e,t,o,n,i)=>{const r=v(e,n,i);return r?r.dismiss(t,o):Promise.reject("overlay does not exist")},v=(e,t,o)=>{const n=((e,t)=>(void 0===t&&(t="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(e.querySelectorAll(t)).filter(e=>e.overlayIndex>0)))(e,t);return void 0===o?n[n.length-1]:n.find(e=>e.id===o)},b=async(e,t,o,i,r)=>{if(e.presented)return;e.presented=!0,e.willPresent.emit();const a=Object(n.b)(e),s=e.enterAnimation?e.enterAnimation:n.c.get(t,"ios"===a?o:i);await y(e,s,e.el,r)&&e.didPresent.emit()},g=async(e,t,o,i,r,s,c)=>{if(!e.presented)return!1;e.presented=!1;try{e.willDismiss.emit({data:t,role:o});const p=Object(n.b)(e),l=e.leaveAnimation?e.leaveAnimation:n.c.get(i,"ios"===p?r:s);"gesture"!==o&&await y(e,l,e.el,c),e.didDismiss.emit({data:t,role:o}),a.delete(e)}catch(e){console.error(e)}return e.el.remove(),!0},w=e=>e.querySelector("ion-app")||e.body,y=async(e,t,o,i)=>{o.classList.remove("overlay-hidden");const r=t(o.shadowRoot||e.el,i);e.animated&&n.c.getBoolean("animated",!0)||r.duration(0),e.keyboardClose&&r.beforeAddWrite(()=>{const e=o.ownerDocument.activeElement;e&&e.matches("input, ion-input, ion-textarea")&&e.blur()});const s=a.get(e)||[];return a.set(e,[...s,r]),await r.play(),!0},x=(e,t)=>{let o;const n=new Promise(e=>o=e);return E(e,t,e=>{o(e.detail)}),n},E=(e,t,o)=>{const n=i=>{e.removeEventListener(t,n),o(i)};e.addEventListener(t,n)},k=e=>"cancel"===e||e===P,O=(e,t)=>{for(;t;){if(t===e)return!0;t=t.parentElement}return!1},j=e=>e(),D=(e,t)=>{if("function"==typeof e){return n.c.get("_zoneGate",j)(()=>{try{return e(t)}catch(e){console.error(e)}})}},P="backdrop"},288:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return a})),o.d(t,"d",(function(){return x})),o.d(t,"e",(function(){return O})),o.d(t,"f",(function(){return w})),o.d(t,"g",(function(){return E})),o.d(t,"h",(function(){return s}));var n=o(2);const i="ionViewWillLeave",r="ionViewDidLeave",a="ionViewWillUnload",s=e=>new Promise((t,o)=>{Object(n.n)(()=>{c(e),p(e).then(o=>{o.animation&&o.animation.destroy(),l(e),t(o)},t=>{l(e),o(t)})})}),c=e=>{const t=e.enteringEl,o=e.leavingEl;k(t,o,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),E(t,!1),o&&E(o,!1)},p=async e=>{const t=await d(e);return t&&n.a.isBrowser?u(t,e):m(e)},l=e=>{const t=e.enteringEl,o=e.leavingEl;t.classList.remove("ion-page-invisible"),void 0!==o&&o.classList.remove("ion-page-invisible")},d=async e=>{if(!e.leavingEl||!e.animated||0===e.duration)return;if(e.animationBuilder)return e.animationBuilder;return"ios"===e.mode?(await Promise.all([o.e(0),o.e(143)]).then(o.bind(null,293))).iosTransitionAnimation:(await Promise.all([o.e(0),o.e(144)]).then(o.bind(null,294))).mdTransitionAnimation},u=async(e,t)=>{await f(t,!0);const o=e(t.baseEl,t);b(t.enteringEl,t.leavingEl);const n=await v(o,t);return t.progressCallback&&t.progressCallback(void 0),n&&g(t.enteringEl,t.leavingEl),{hasCompleted:n,animation:o}},m=async e=>{const t=e.enteringEl,o=e.leavingEl;return await f(e,!1),b(t,o),g(t,o),{hasCompleted:!0}},f=async(e,t)=>{const o=(void 0!==e.deepWait?e.deepWait:t)?[x(e.enteringEl),x(e.leavingEl)]:[y(e.enteringEl),y(e.leavingEl)];await Promise.all(o),await h(e.viewIsReady,e.enteringEl)},h=async(e,t)=>{e&&await e(t)},v=(e,t)=>{const o=t.progressCallback,n=new Promise(t=>{e.onFinish(e=>t(1===e))});return o?(e.progressStart(!0),o(e)):e.play(),n},b=(e,t)=>{w(t,i),w(e,"ionViewWillEnter")},g=(e,t)=>{w(e,"ionViewDidEnter"),w(t,r)},w=(e,t)=>{if(e){const o=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(o)}},y=e=>e&&e.componentOnReady?e.componentOnReady():Promise.resolve(),x=async e=>{const t=e;if(t){if(null!=t.componentOnReady){if(null!=await t.componentOnReady())return}await Promise.all(Array.from(t.children).map(x))}},E=(e,t)=>{t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},k=(e,t,o)=>{void 0!==e&&(e.style.zIndex="back"===o?"99":"101"),void 0!==t&&(t.style.zIndex="100")},O=e=>{if(e.classList.contains("ion-page"))return e;const t=e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return t||e}},292:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return i}));const n=async(e,t,o,n,i)=>{if(e)return e.attachViewToDom(t,o,i,n);if("string"!=typeof o&&!(o instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof o?t.ownerDocument&&t.ownerDocument.createElement(o):o;return n&&n.forEach(e=>r.classList.add(e)),i&&Object.assign(r,i),t.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},i=(e,t)=>{if(t){if(e){const o=t.parentElement;return e.removeViewFromDom(o,t)}t.remove()}return Promise.resolve()}}}]);