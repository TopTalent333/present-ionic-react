(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{277:function(t,e,r){"use strict";r.r(e),r.d(e,"deckgo_drr",(function(){return a}));var i=r(27),o=function(t,e,r,i){return new(r||(r=Promise))((function(o,n){function s(t){try{h(i.next(t))}catch(t){n(t)}}function a(t){try{h(i.throw(t))}catch(t){n(t)}}function h(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}h((i=i.apply(t,e||[])).next())}))},n=function(t,e){var r,i,o,n,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return n={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function a(n){return function(a){return function(n){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,i&&(o=2&n[0]?i.return:n[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,n[1])).done)return o;switch(i=0,o&&(n=[2&n[0],o.value]),n[0]){case 0:case 1:o=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,i=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==n[0]&&2!==n[0])){s=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){s.label=n[1];break}if(6===n[0]&&s.label<o[1]){s.label=o[1],o=n;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(n);break}o[2]&&s.ops.pop(),s.trys.pop();continue}n=e.call(t,s)}catch(t){n=[6,t],i=0}finally{r=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,a])}}};function s(t){return t.changedTouches?t.changedTouches[0]:t}var a=function(){function t(t){var e=this;Object(i.g)(this,t),this.unit="percentage",this.resize=!0,this.drag="all",this.rotation=!0,this.minWidth=10,this.minHeight=10,this.selected=!1,this.updated=!1,this.moving=!1,this.startX=null,this.startY=null,this.startWidth=null,this.startHeight=null,this.startTop=null,this.startLeft=null,this.dragTopEnd=!1,this.dragBottomEnd=!1,this.dragBottomStart=!1,this.dragTopStart=!1,this.dragTop=!1,this.dragEnd=!1,this.dragBottom=!1,this.dragStart=!1,this.parentWidth=null,this.parentHeight=null,this.rotating=!1,this.centerX=null,this.centerY=null,this.start=function(t){return o(e,void 0,void 0,(function(){var e;return n(this,(function(r){switch(r.label){case 0:return t&&t.target?(e=t.target.closest("deckgo-drr"))&&e.isEqualNode(this.el)?(this.drrSelect.emit(e),this.selected=!0,this.startMove(),[4,this.initStartPositions(t)]):(this.stopAndReset(!1),this.selected&&this.drrSelect.emit(void 0),this.selected=!1,[2]):[2];case 1:return r.sent(),[2]}}))}))},this.transform=function(t){var r=e.move(t),i=e.size(t),o=e.rotateShape(t);e.updated=r||i||o},this.stop=function(){e.stopAndReset(e.selected)},this.drrSelect=Object(i.d)(this,"drrSelect",7),this.drrDidChange=Object(i.d)(this,"drrDidChange",7)}return t.prototype.componentWillLoad=function(){return o(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return[4,this.init()];case 1:return t.sent(),[4,this.attachEventListeners()];case 2:return t.sent(),[2]}}))}))},t.prototype.componentDidLoad=function(){return o(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return[4,this.displaySlot()];case 1:return t.sent(),[2]}}))}))},t.prototype.componentWillUnload=function(){return o(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return"none"!==this.drag||this.resize?[4,this.detachEventListeners()]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}}))}))},t.prototype.attachEventListeners=function(){return o(this,void 0,void 0,(function(){return n(this,(function(t){return this.el&&this.el.parentElement&&!this.el.parentElement.classList.contains("deckgo-read-only")&&document&&("none"!==this.drag||this.resize)&&(document.addEventListener("mousedown",this.start.bind(this),{passive:!0}),document.addEventListener("touchstart",this.start.bind(this),{passive:!0}),document.addEventListener("mousemove",this.transform.bind(this),{passive:!0}),document.addEventListener("touchmove",this.transform.bind(this),{passive:!0}),document.addEventListener("mouseup",this.stop.bind(this),{passive:!0}),document.addEventListener("touchend",this.stop.bind(this),{passive:!0})),[2]}))}))},t.prototype.detachEventListeners=function(){return o(this,void 0,void 0,(function(){return n(this,(function(t){return document&&(document.removeEventListener("mousedown",this.start,!0),document.removeEventListener("touchstart",this.start,!0),document.removeEventListener("mousemove",this.transform,!0),document.removeEventListener("touchmove",this.transform,!0),document.removeEventListener("mouseup",this.stop,!0),document.removeEventListener("touchend",this.stop,!0)),[2]}))}))},t.prototype.init=function(){var t=this;return new Promise((function(e){t.width=t.el.style.getPropertyValue("--width")?parseFloat(t.el.style.getPropertyValue("--width")):0,t.height=t.el.style.getPropertyValue("--height")?parseFloat(t.el.style.getPropertyValue("--height")):0,t.top=t.el.style.getPropertyValue("--top")?parseFloat(t.el.style.getPropertyValue("--top")):0,t.left=t.el.style.getPropertyValue("--left")?parseFloat(t.el.style.getPropertyValue("--left")):0,t.rotate=t.el.style.getPropertyValue("--rotate")?parseFloat(t.el.style.getPropertyValue("--rotate")):0,e()}))},t.prototype.displaySlot=function(){return o(this,void 0,void 0,(function(){var t;return n(this,(function(e){return(t=this.el.querySelector(":scope > *"))&&"none"===t.style.display&&(t.style.display=""),[2]}))}))},t.prototype.initStartPositions=function(t){return o(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return this.startX=s(t).clientX,this.startY=s(t).clientY,[4,this.initParentSize()];case 1:return e.sent(),this.initStartPositionsMove(),this.initStartPositionsRotation(),this.initStartPositionsResize(),[2]}}))}))},t.prototype.initStartPositionsMove=function(){this.startWidth=this.width,this.startHeight=this.height,this.startTop=this.top,this.startLeft=this.left},t.prototype.initStartPositionsRotation=function(){var t=this.el.getBoundingClientRect();this.centerX=t.left+t.width/2,this.centerY=t.top+t.height/2},t.prototype.initStartPositionsResize=function(){var t=2*Math.PI*this.rotate/360,e=Math.cos(t),r=Math.sin(t),i=window.getComputedStyle(this.el),o=parseFloat(i.left),n=parseFloat(i.top),s=parseFloat(i.width),a=parseFloat(i.height),h=this.resizeMatrix(),d=o+s/2,c=n+a/2,u=o+h.a*s,l=n+h.b*a,p=o+h.c*s,g=n+h.d*a;this.qp0_x=u*e-l*r-d*e+c*r+d,this.qp0_y=u*r+l*e-d*r-c*e+c,this.pp_x=p*e-g*r-d*e+c*r+d,this.pp_y=p*r+g*e-d*r-c*e+c},t.prototype.initParentSize=function(){return o(this,void 0,void 0,(function(){var t;return n(this,(function(e){switch(e.label){case 0:return this.el.parentElement&&"function"==typeof this.el.parentElement.getContainer?[4,this.el.parentElement.getContainer()]:[3,2];case 1:return t=e.sent(),this.parentWidth="percentage"===this.unit?t.offsetWidth:this.convertToUnit(t.offsetWidth,"width"),this.parentHeight="percentage"===this.unit?t.offsetHeight:this.convertToUnit(t.offsetHeight,"height"),[3,3];case 2:this.parentWidth="percentage"===this.unit?this.el.parentElement.offsetWidth:this.convertToUnit(this.el.parentElement.offsetWidth,"width"),this.parentHeight="percentage"===this.unit?this.el.parentElement.offsetHeight:this.convertToUnit(this.el.parentElement.offsetHeight,"height"),e.label=3;case 3:return[2]}}))}))},t.prototype.move=function(t){return!(!this.moving||"none"===this.drag)&&("x-axis"===this.drag?this.deltaMove(t,!1,!0):"y-axis"===this.drag?this.deltaMove(t,!0,!1):this.deltaMove(t,!0,!0),!0)},t.prototype.size=function(t){return!!this.resize&&(!!(this.selected&&this.startX&&this.startY)&&(!!(this.dragBottomEnd||this.dragTopEnd||this.dragBottomStart||this.dragTopStart||this.dragTop||this.dragEnd||this.dragBottom||this.dragStart)&&(this.deltaResize(t),!0)))},t.prototype.deltaMove=function(t,e,r){var i=this.getDelta(t),o=this.convertToUnit(i.x,"width"),n=this.convertToUnit(i.y,"height");if(e){var s=this.convertParentUnit(this.parentHeight)-this.startHeight;this.top=this.startTop+n>0?this.startTop+n<s?this.startTop+n:s:0}if(r){var a=this.convertParentUnit(this.parentWidth)-this.startWidth;this.left=this.startLeft+o>0?this.startLeft+o<a?this.startLeft+o:a:0}},t.prototype.deltaResize=function(t){var e,r,i=this.getDelta(t),o=this.qp0_x+i.x,n=this.qp0_y+i.y,s=(o+this.pp_x)/2,a=(n+this.pp_y)/2,h=-1*Math.PI*2*this.rotate/360,d=Math.cos(h),c=Math.sin(h),u=o*d-n*c-d*s+c*a+s,l=o*c+n*d-c*s-d*a+a,p=this.pp_x*d-this.pp_y*c-d*s+c*a+s,g=this.pp_x*c+this.pp_y*d-c*s-d*a+a,f=this.resizeMatrix(),v=f.a*(u-p)+f.c*(p-u),m=f.b*(l-g)+f.d*(g-l);if(v<this.minWidth||m<this.minHeight){e=Math.max(this.minWidth,v),r=Math.max(this.minHeight,m);var b=-1*h,w=Math.cos(b),y=Math.sin(b),k=-y*r,x=w*r,E=w*e,S=y*e,T=this.pp_x+(f.a-f.c)*E+(f.b-f.d)*k,P=this.pp_y+(f.a-f.c)*S+(f.b-f.d)*x,M=(T+this.pp_x)/2,z=(P+this.pp_y)/2;u=T*d-P*c-d*M+c*z+M,l=T*c+P*d-c*M-d*z+z,p=this.pp_x*d-this.pp_y*c-d*M+c*z+M,g=this.pp_x*c+this.pp_y*d-c*M-d*z+z}else e=v,r=m;var B=f.c*u+f.a*p,L=f.d*l+f.b*g;this.left=this.convertToUnit(B,"width"),this.width=this.convertToUnit(e,"width"),this.top=this.convertToUnit(L,"height"),this.height=this.convertToUnit(r,"height")},t.prototype.rotateShape=function(t){if(!this.rotating)return!1;var e=s(t).clientX,r=s(t).clientY;return this.rotate=Math.atan2(e-this.centerX,r-this.centerY)*(180/Math.PI)*-1+180,!0},t.prototype.getDelta=function(t){var e=s(t).clientX,r=s(t).clientY;return{x:this.dragBottom||this.dragTop?0:e-this.startX,y:this.dragStart||this.dragEnd?0:r-this.startY}},t.prototype.convertToUnit=function(t,e){return"px"===this.unit?t:"viewport"===this.unit?100*t/("width"===e?window.innerWidth||screen.width:window.innerHeight||screen.height):100*t/("width"===e?this.parentWidth:this.parentHeight)},t.prototype.convertParentUnit=function(t){return"percentage"===this.unit?100:t},t.prototype.startMove=function(){this.dragBottomEnd||this.dragTopEnd||this.dragBottomStart||this.dragTopStart||this.dragTop||this.dragEnd||this.dragBottom||this.dragStart||this.rotating||(this.moving=!0)},t.prototype.stopAndReset=function(t){this.startX=null,this.startY=null,this.stopMove(),this.stopResize(),this.stopRotate(),t&&this.updated&&this.drrDidChange.emit(this.el.shadowRoot.host),this.updated=!1},t.prototype.stopMove=function(){this.moving=!1,this.startTop=null,this.startLeft=null},t.prototype.stopRotate=function(){this.rotating=!1,this.centerX=null,this.centerY=null},t.prototype.stopResize=function(){this.dragBottomEnd=!1,this.dragTopEnd=!1,this.dragBottomStart=!1,this.dragTopStart=!1,this.dragTop=!1,this.dragEnd=!1,this.dragBottom=!1,this.dragStart=!1,this.startWidth=null,this.startHeight=null},t.prototype.resizeMatrix=function(){var t=this.dragBottomEnd||this.dragTopEnd||this.dragEnd?1:0,e=this.dragBottomEnd||this.dragBottomStart||this.dragStart||this.dragBottom?1:0;return{a:t,b:e,c:1===t?0:1,d:1===e?0:1}},t.prototype.render=function(){var t="percentage"===this.unit?"%":"viewport"===this.unit?"vw":this.unit,e="percentage"===this.unit?"%":"viewport"===this.unit?"vh":this.unit;return Object(i.f)(i.a,{style:{"--width":""+this.width+t,"--height":""+this.height+e,"--top":""+this.top+e,"--left":""+this.left+t,"--rotate":this.rotate?this.rotate+"deg":"0deg"},class:(this.selected?"selected":"")+" "+("none"!==this.drag?"draggable":"")+" "+("none"!==this.drag&&this.moving?"drag":"")},this.renderEdgesAnchors(),this.renderBorderAnchors(),this.renderRotateAnchor(),Object(i.f)("slot",null))},t.prototype.renderEdgesAnchors=function(){var t=this;if(this.selected&&this.resize)return[Object(i.f)("div",{class:"anchor top end",onClick:function(t){return t.stopPropagation()},onMouseDown:function(){return t.dragTopEnd=!0},onTouchStart:function(){return t.dragTopEnd=!0}},Object(i.f)("div",null)),Object(i.f)("div",{class:"anchor bottom end",onClick:function(t){return t.stopPropagation()},onMouseDown:function(){return t.dragBottomEnd=!0},onTouchStart:function(){return t.dragBottomEnd=!0}},Object(i.f)("div",null)),Object(i.f)("div",{class:"anchor bottom start",onClick:function(t){return t.stopPropagation()},onMouseDown:function(){return t.dragBottomStart=!0},onTouchStart:function(){return t.dragBottomStart=!0}},Object(i.f)("div",null)),Object(i.f)("div",{class:"anchor top start",onClick:function(t){return t.stopPropagation()},onMouseDown:function(){return t.dragTopStart=!0},onTouchStart:function(){return t.dragTopStart=!0}},Object(i.f)("div",null))]},t.prototype.renderBorderAnchors=function(){var t=this;if(this.selected&&this.resize)return[Object(i.f)("div",{class:"border top",onClick:function(t){return t.stopPropagation()},onMouseDown:function(){return t.dragTop=!0},onTouchStart:function(){return t.dragTop=!0}}),Object(i.f)("div",{class:"border end",onClick:function(t){return t.stopPropagation()},onMouseDown:function(){return t.dragEnd=!0},onTouchStart:function(){return t.dragEnd=!0}}),Object(i.f)("div",{class:"border bottom",onClick:function(t){return t.stopPropagation()},onMouseDown:function(){return t.dragBottom=!0},onTouchStart:function(){return t.dragBottom=!0}}),Object(i.f)("div",{class:"border start",onClick:function(t){return t.stopPropagation()},onMouseDown:function(){return t.dragStart=!0},onTouchStart:function(){return t.dragStart=!0}})]},t.prototype.renderRotateAnchor=function(){var t=this;if(this.selected&&this.rotation)return Object(i.f)("div",{class:"rotate"},Object(i.f)("div",{class:"action",onClick:function(t){return t.stopPropagation()},onMouseDown:function(){return t.rotating=!0},onTouchStart:function(){return t.rotating=!0}},Object(i.f)("div",null)),Object(i.f)("div",{class:"presentation"}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.e)(this)},enumerable:!0,configurable:!0}),t}();a.style=":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;contain:size;width:var(--width);height:var(--height);-webkit-transform:rotate(var(--rotate, 0deg));transform:rotate(var(--rotate, 0deg));position:absolute;top:var(--top);left:var(--left);-webkit-user-select:var(--deckgo-drr-user-select, none);-moz-user-select:var(--deckgo-drr-user-select, none);-ms-user-select:var(--deckgo-drr-user-select, none);user-select:var(--deckgo-drr-user-select, none)}:host(.selected.draggable:not(.drag)){cursor:move}:host(.selected){outline:var(--deckgo-drr-border, 1px solid #3880ff)}::slotted(*){width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-touch-action:none;touch-action:none;pointer-events:none}div.anchor{position:absolute;width:var(--deckgo-drr-anchor-width, 16px);height:var(--deckgo-drr-anchor-height, 16px);padding:var(--deckgo-drr-anchor-padding-desktop, 16px)}div.anchor>div{width:100%;height:100%;border-radius:var(--deckgo-drr-anchor-border-radius, 50%);background:var(--deckgo-drr-anchor-background, #3880ff);border:var(--deckgo-drr-anchor-border)}div.anchor.top{top:0}div.anchor.top.end{cursor:ne-resize;-webkit-transform:translate(50%, -50%);transform:translate(50%, -50%)}div.anchor.top.start{cursor:nw-resize;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}div.anchor.end{right:0}div.anchor.bottom{bottom:0}div.anchor.bottom.end{cursor:se-resize;-webkit-transform:translate(50%, 50%);transform:translate(50%, 50%)}div.anchor.bottom.start{cursor:sw-resize;-webkit-transform:translate(-50%, 50%);transform:translate(-50%, 50%)}div.anchor.start{left:0}div.border{position:absolute}div.border.top,div.border.bottom{width:calc(100% - var(--deckgo-drr-anchor-width, 16px));height:16px}div.border.end,div.border.start{top:50%;height:calc(100% - var(--deckgo-drr-anchor-height, 16px));width:16px}div.border.top{top:0;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);cursor:n-resize}div.border.end{right:0;-webkit-transform:translate(50%, -50%);transform:translate(50%, -50%);cursor:e-resize}div.border.bottom{bottom:0;left:50%;-webkit-transform:translate(-50%, 50%);transform:translate(-50%, 50%);cursor:s-resize}div.border.start{left:0;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);cursor:w-resize}div.rotate{position:absolute;top:0;left:50%;-webkit-transform:translate(-50%, -100%);transform:translate(-50%, -100%);height:var(--deckgo-drr-rotate-anchor-width, 24px);width:var(--deckgo-drr-rotate-anchor-height, 32px)}div.rotate div.action{position:absolute;top:0;left:50%;-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);cursor:crosshair;width:var(--deckgo-drr-rotate-anchor-action-width, 16px);height:var(--deckgo-drr-rotate-anchor-action-height, 16px);border-radius:var(--deckgo-drr-rotate-anchor-action-border-radius, 50%);background:var(--deckgo-drr-rotate-anchor-action-background);border:var(--deckgo-drr-rotate-anchor-action-border, 1px solid #3880ff)}div.rotate div.presentation{position:absolute;bottom:0;left:50%;-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);height:var(--deckgo-drr-rotate-anchor-presentation-height, calc(100% - 16px - 1px));border-right:var(--deckgo-drr-rotate-anchor-presentation-border-right, 1px solid #3880ff)}@media (hover: none) and (pointer: coarse){div.anchor{padding:var(--deckgo-drr-anchor-padding-mobile)}div.border.top,div.border.bottom{height:4px}div.border.end,div.border.start{width:4px}}"}}]);