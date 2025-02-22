(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();var ie,m,je,Ve,L,ke,Ge,$e,Je,be,he,pe,Q={},Ke=[],mt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ve=Array.isArray;function k(t,n){for(var i in n)t[i]=n[i];return t}function we(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function ft(t,n,i){var a,r,s,c={};for(s in n)s=="key"?a=n[s]:s=="ref"?r=n[s]:c[s]=n[s];if(arguments.length>2&&(c.children=arguments.length>3?ie.call(arguments,2):i),typeof t=="function"&&t.defaultProps!=null)for(s in t.defaultProps)c[s]===void 0&&(c[s]=t.defaultProps[s]);return Y(t,c,a,r,null)}function Y(t,n,i,a,r){var s={type:t,props:n,key:i,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++je,__i:-1,__u:0};return r==null&&m.vnode!=null&&m.vnode(s),s}function w(t){return t.children}function B(t,n){this.props=t,this.context=n}function q(t,n){if(n==null)return t.__?q(t.__,t.__i+1):null;for(var i;n<t.__k.length;n++)if((i=t.__k[n])!=null&&i.__e!=null)return i.__e;return typeof t.type=="function"?q(t):null}function Ye(t){var n,i;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if((i=t.__k[n])!=null&&i.__e!=null){t.__e=t.__c.base=i.__e;break}return Ye(t)}}function Le(t){(!t.__d&&(t.__d=!0)&&L.push(t)&&!Z.__r++||ke!==m.debounceRendering)&&((ke=m.debounceRendering)||Ge)(Z)}function Z(){for(var t,n,i,a,r,s,c,l=1;L.length;)L.length>l&&L.sort($e),t=L.shift(),l=L.length,t.__d&&(i=void 0,r=(a=(n=t).__v).__e,s=[],c=[],n.__P&&((i=k({},a)).__v=a.__v+1,m.vnode&&m.vnode(i),_e(n.__P,i,a,n.__n,n.__P.namespaceURI,32&a.__u?[r]:null,s,r??q(a),!!(32&a.__u),c),i.__v=a.__v,i.__.__k[i.__i]=i,et(s,i,c),i.__e!=r&&Ye(i)));Z.__r=0}function Xe(t,n,i,a,r,s,c,l,u,d,p){var o,v,h,x,C,S,g=a&&a.__k||Ke,y=n.length;for(u=gt(i,n,g,u,y),o=0;o<y;o++)(h=i.__k[o])!=null&&(v=h.__i===-1?Q:g[h.__i]||Q,h.__i=o,S=_e(t,h,v,r,s,c,l,u,d,p),x=h.__e,h.ref&&v.ref!=h.ref&&(v.ref&&xe(v.ref,null,h),p.push(h.ref,h.__c||x,h)),C==null&&x!=null&&(C=x),4&h.__u||v.__k===h.__k?u=Ze(h,u,t):typeof h.type=="function"&&S!==void 0?u=S:x&&(u=x.nextSibling),h.__u&=-7);return i.__e=C,u}function gt(t,n,i,a,r){var s,c,l,u,d,p=i.length,o=p,v=0;for(t.__k=new Array(r),s=0;s<r;s++)(c=n[s])!=null&&typeof c!="boolean"&&typeof c!="function"?(u=s+v,(c=t.__k[s]=typeof c=="string"||typeof c=="number"||typeof c=="bigint"||c.constructor==String?Y(null,c,null,null,null):ve(c)?Y(w,{children:c},null,null,null):c.constructor===void 0&&c.__b>0?Y(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c).__=t,c.__b=t.__b+1,l=null,(d=c.__i=yt(c,i,u,o))!==-1&&(o--,(l=i[d])&&(l.__u|=2)),l==null||l.__v===null?(d==-1&&v--,typeof c.type!="function"&&(c.__u|=4)):d!=u&&(d==u-1?v--:d==u+1?v++:(d>u?v--:v++,c.__u|=4))):t.__k[s]=null;if(o)for(s=0;s<p;s++)(l=i[s])!=null&&!(2&l.__u)&&(l.__e==a&&(a=q(l)),tt(l,l));return a}function Ze(t,n,i){var a,r;if(typeof t.type=="function"){for(a=t.__k,r=0;a&&r<a.length;r++)a[r]&&(a[r].__=t,n=Ze(a[r],n,i));return n}t.__e!=n&&(n&&t.type&&!i.contains(n)&&(n=q(t)),i.insertBefore(t.__e,n||null),n=t.__e);do n=n&&n.nextSibling;while(n!=null&&n.nodeType==8);return n}function yt(t,n,i,a){var r,s,c=t.key,l=t.type,u=n[i];if(u===null||u&&c==u.key&&l===u.type&&!(2&u.__u))return i;if(a>(u!=null&&!(2&u.__u)?1:0))for(r=i-1,s=i+1;r>=0||s<n.length;){if(r>=0){if((u=n[r])&&!(2&u.__u)&&c==u.key&&l===u.type)return r;r--}if(s<n.length){if((u=n[s])&&!(2&u.__u)&&c==u.key&&l===u.type)return s;s++}}return-1}function Ie(t,n,i){n[0]=="-"?t.setProperty(n,i??""):t[n]=i==null?"":typeof i!="number"||mt.test(n)?i:i+"px"}function J(t,n,i,a,r){var s;e:if(n=="style")if(typeof i=="string")t.style.cssText=i;else{if(typeof a=="string"&&(t.style.cssText=a=""),a)for(n in a)i&&n in i||Ie(t.style,n,"");if(i)for(n in i)a&&i[n]===a[n]||Ie(t.style,n,i[n])}else if(n[0]=="o"&&n[1]=="n")s=n!=(n=n.replace(Je,"$1")),n=n.toLowerCase()in t||n=="onFocusOut"||n=="onFocusIn"?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+s]=i,i?a?i.u=a.u:(i.u=be,t.addEventListener(n,s?pe:he,s)):t.removeEventListener(n,s?pe:he,s);else{if(r=="http://www.w3.org/2000/svg")n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!="width"&&n!="height"&&n!="href"&&n!="list"&&n!="form"&&n!="tabIndex"&&n!="download"&&n!="rowSpan"&&n!="colSpan"&&n!="role"&&n!="popover"&&n in t)try{t[n]=i??"";break e}catch{}typeof i=="function"||(i==null||i===!1&&n[4]!="-"?t.removeAttribute(n):t.setAttribute(n,n=="popover"&&i==1?"":i))}}function qe(t){return function(n){if(this.l){var i=this.l[n.type+t];if(n.t==null)n.t=be++;else if(n.t<i.u)return;return i(m.event?m.event(n):n)}}}function _e(t,n,i,a,r,s,c,l,u,d){var p,o,v,h,x,C,S,g,y,M,R,V,W,Re,G,Ae,$,oe,O=n.type;if(n.constructor!==void 0)return null;128&i.__u&&(u=!!(32&i.__u),s=[l=n.__e=i.__e]),(p=m.__b)&&p(n);e:if(typeof O=="function")try{if(g=n.props,y="prototype"in O&&O.prototype.render,M=(p=O.contextType)&&a[p.__c],R=p?M?M.props.value:p.__:a,i.__c?S=(o=n.__c=i.__c).__=o.__E:(y?n.__c=o=new O(g,R):(n.__c=o=new B(g,R),o.constructor=O,o.render=vt),M&&M.sub(o),o.props=g,o.state||(o.state={}),o.context=R,o.__n=a,v=o.__d=!0,o.__h=[],o._sb=[]),y&&o.__s==null&&(o.__s=o.state),y&&O.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=k({},o.__s)),k(o.__s,O.getDerivedStateFromProps(g,o.__s))),h=o.props,x=o.state,o.__v=n,v)y&&O.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),y&&o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(y&&O.getDerivedStateFromProps==null&&g!==h&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(g,R),!o.__e&&(o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(g,o.__s,R)===!1||n.__v==i.__v)){for(n.__v!=i.__v&&(o.props=g,o.state=o.__s,o.__d=!1),n.__e=i.__e,n.__k=i.__k,n.__k.some(function(U){U&&(U.__=n)}),V=0;V<o._sb.length;V++)o.__h.push(o._sb[V]);o._sb=[],o.__h.length&&c.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(g,o.__s,R),y&&o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(h,x,C)})}if(o.context=R,o.props=g,o.__P=t,o.__e=!1,W=m.__r,Re=0,y){for(o.state=o.__s,o.__d=!1,W&&W(n),p=o.render(o.props,o.state,o.context),G=0;G<o._sb.length;G++)o.__h.push(o._sb[G]);o._sb=[]}else do o.__d=!1,W&&W(n),p=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++Re<25);o.state=o.__s,o.getChildContext!=null&&(a=k(k({},a),o.getChildContext())),y&&!v&&o.getSnapshotBeforeUpdate!=null&&(C=o.getSnapshotBeforeUpdate(h,x)),$=(Ae=p!=null&&p.type===w&&p.key==null)?p.props.children:p,Ae&&(p.props.children=null),l=Xe(t,ve($)?$:[$],n,i,a,r,s,c,l,u,d),o.base=n.__e,n.__u&=-161,o.__h.length&&c.push(o),S&&(o.__E=o.__=null)}catch(U){if(n.__v=null,u||s!=null)if(U.then){for(n.__u|=u?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;s[s.indexOf(l)]=null,n.__e=l}else for(oe=s.length;oe--;)we(s[oe]);else n.__e=i.__e,n.__k=i.__k;m.__e(U,n,i)}else s==null&&n.__v==i.__v?(n.__k=i.__k,n.__e=i.__e):l=n.__e=bt(i.__e,n,i,a,r,s,c,u,d);return(p=m.diffed)&&p(n),128&n.__u?void 0:l}function et(t,n,i){for(var a=0;a<i.length;a++)xe(i[a],i[++a],i[++a]);m.__c&&m.__c(n,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(s){s.call(r)})}catch(s){m.__e(s,r.__v)}})}function bt(t,n,i,a,r,s,c,l,u){var d,p,o,v,h,x,C,S=i.props,g=n.props,y=n.type;if(y=="svg"?r="http://www.w3.org/2000/svg":y=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),s!=null){for(d=0;d<s.length;d++)if((h=s[d])&&"setAttribute"in h==!!y&&(y?h.localName==y:h.nodeType==3)){t=h,s[d]=null;break}}if(t==null){if(y==null)return document.createTextNode(g);t=document.createElementNS(r,y,g.is&&g),l&&(m.__m&&m.__m(n,s),l=!1),s=null}if(y===null)S===g||l&&t.data===g||(t.data=g);else{if(s=s&&ie.call(t.childNodes),S=i.props||Q,!l&&s!=null)for(S={},d=0;d<t.attributes.length;d++)S[(h=t.attributes[d]).name]=h.value;for(d in S)if(h=S[d],d!="children"){if(d=="dangerouslySetInnerHTML")o=h;else if(!(d in g)){if(d=="value"&&"defaultValue"in g||d=="checked"&&"defaultChecked"in g)continue;J(t,d,null,h,r)}}for(d in g)h=g[d],d=="children"?v=h:d=="dangerouslySetInnerHTML"?p=h:d=="value"?x=h:d=="checked"?C=h:l&&typeof h!="function"||S[d]===h||J(t,d,h,S[d],r);if(p)l||o&&(p.__html===o.__html||p.__html===t.innerHTML)||(t.innerHTML=p.__html),n.__k=[];else if(o&&(t.innerHTML=""),Xe(n.type==="template"?t.content:t,ve(v)?v:[v],n,i,a,y=="foreignObject"?"http://www.w3.org/1999/xhtml":r,s,c,s?s[0]:i.__k&&q(i,0),l,u),s!=null)for(d=s.length;d--;)we(s[d]);l||(d="value",y=="progress"&&x==null?t.removeAttribute("value"):x!==void 0&&(x!==t[d]||y=="progress"&&!x||y=="option"&&x!==S[d])&&J(t,d,x,S[d],r),d="checked",C!==void 0&&C!==t[d]&&J(t,d,C,S[d],r))}return t}function xe(t,n,i){try{if(typeof t=="function"){var a=typeof t.__u=="function";a&&t.__u(),a&&n==null||(t.__u=t(n))}else t.current=n}catch(r){m.__e(r,i)}}function tt(t,n,i){var a,r;if(m.unmount&&m.unmount(t),(a=t.ref)&&(a.current&&a.current!==t.__e||xe(a,null,n)),(a=t.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(s){m.__e(s,n)}a.base=a.__P=null}if(a=t.__k)for(r=0;r<a.length;r++)a[r]&&tt(a[r],n,i||typeof t.type!="function");i||we(t.__e),t.__c=t.__=t.__e=void 0}function vt(t,n,i){return this.constructor(t,i)}function wt(t,n,i){var a,r,s,c;n==document&&(n=document.documentElement),m.__&&m.__(t,n),r=(a=!1)?null:n.__k,s=[],c=[],_e(n,t=n.__k=ft(w,null,[t]),r||Q,Q,n.namespaceURI,r?null:n.firstChild?ie.call(n.childNodes):null,s,r?r.__e:n.firstChild,a,c),et(s,t,c)}ie=Ke.slice,m={__e:function(t,n,i,a){for(var r,s,c;n=n.__;)if((r=n.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(t)),c=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,a||{}),c=r.__d),c)return r.__E=r}catch(l){t=l}throw t}},je=0,Ve=function(t){return t!=null&&t.constructor==null},B.prototype.setState=function(t,n){var i;i=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof t=="function"&&(t=t(k({},i),this.props)),t&&k(i,t),t!=null&&this.__v&&(n&&this._sb.push(n),Le(this))},B.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Le(this))},B.prototype.render=w,L=[],Ge=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,$e=function(t,n){return t.__v.__b-n.__v.__b},Z.__r=0,Je=/(PointerCapture)$|Capture$/i,be=0,he=qe(!1),pe=qe(!0);var _t=0;function e(t,n,i,a,r,s){n||(n={});var c,l,u=n;if("ref"in u)for(l in u={},n)l=="ref"?c=n[l]:u[l]=n[l];var d={type:t,props:u,key:i,ref:c,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--_t,__i:-1,__u:0,__source:r,__self:s};if(typeof t=="function"&&(c=t.defaultProps))for(l in c)u[l]===void 0&&(u[l]=c[l]);return m.vnode&&m.vnode(d),d}var ee,T,ce,De,me=0,nt=[],_=m,Ne=_.__b,Pe=_.__r,Me=_.diffed,We=_.__c,Ue=_.unmount,He=_.__;function it(t,n){_.__h&&_.__h(T,t,me||n),me=0;var i=T.__H||(T.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function xt(t,n){var i=it(ee++,3);!_.__s&&st(i.__H,n)&&(i.__=t,i.u=n,T.__H.__h.push(i))}function at(t){return me=5,ae(function(){return{current:t}},[])}function ae(t,n){var i=it(ee++,7);return st(i.__H,n)&&(i.__=t(),i.__H=n,i.__h=t),i.__}function St(){for(var t;t=nt.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(X),t.__H.__h.forEach(fe),t.__H.__h=[]}catch(n){t.__H.__h=[],_.__e(n,t.__v)}}_.__b=function(t){T=null,Ne&&Ne(t)},_.__=function(t,n){t&&n.__k&&n.__k.__m&&(t.__m=n.__k.__m),He&&He(t,n)},_.__r=function(t){Pe&&Pe(t),ee=0;var n=(T=t.__c).__H;n&&(ce===T?(n.__h=[],T.__h=[],n.__.forEach(function(i){i.__N&&(i.__=i.__N),i.u=i.__N=void 0})):(n.__h.forEach(X),n.__h.forEach(fe),n.__h=[],ee=0)),ce=T},_.diffed=function(t){Me&&Me(t);var n=t.__c;n&&n.__H&&(n.__H.__h.length&&(nt.push(n)!==1&&De===_.requestAnimationFrame||((De=_.requestAnimationFrame)||Et)(St)),n.__H.__.forEach(function(i){i.u&&(i.__H=i.u),i.u=void 0})),ce=T=null},_.__c=function(t,n){n.some(function(i){try{i.__h.forEach(X),i.__h=i.__h.filter(function(a){return!a.__||fe(a)})}catch(a){n.some(function(r){r.__h&&(r.__h=[])}),n=[],_.__e(a,i.__v)}}),We&&We(t,n)},_.unmount=function(t){Ue&&Ue(t);var n,i=t.__c;i&&i.__H&&(i.__H.__.forEach(function(a){try{X(a)}catch(r){n=r}}),i.__H=void 0,n&&_.__e(n,i.__v))};var Fe=typeof requestAnimationFrame=="function";function Et(t){var n,i=function(){clearTimeout(a),Fe&&cancelAnimationFrame(n),setTimeout(t)},a=setTimeout(i,100);Fe&&(n=requestAnimationFrame(i))}function X(t){var n=T,i=t.__c;typeof i=="function"&&(t.__c=void 0,i()),T=n}function fe(t){var n=T;t.__c=t.__(),T=n}function st(t,n){return!t||t.length!==n.length||n.some(function(i,a){return i!==t[a]})}var Tt=Symbol.for("preact-signals");function Se(){if(I>1)I--;else{for(var t,n=!1;z!==void 0;){var i=z;for(z=void 0,ge++;i!==void 0;){var a=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&ct(i))try{i.c()}catch(r){n||(t=r,n=!0)}i=a}}if(ge=0,I--,n)throw t}}var f=void 0,z=void 0,I=0,ge=0,te=0;function rt(t){if(f!==void 0){var n=t.n;if(n===void 0||n.t!==f)return n={i:0,S:t,p:f.s,n:void 0,t:f,e:void 0,x:void 0,r:n},f.s!==void 0&&(f.s.n=n),f.s=n,t.n=n,32&f.f&&t.S(n),n;if(n.i===-1)return n.i=0,n.n!==void 0&&(n.n.p=n.p,n.p!==void 0&&(n.p.n=n.n),n.p=f.s,n.n=void 0,f.s.n=n,f.s=n),n}}function E(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}E.prototype.brand=Tt;E.prototype.h=function(){return!0};E.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};E.prototype.U=function(t){if(this.t!==void 0){var n=t.e,i=t.x;n!==void 0&&(n.x=i,t.e=void 0),i!==void 0&&(i.e=n,t.x=void 0),t===this.t&&(this.t=i)}};E.prototype.subscribe=function(t){var n=this;return Te(function(){var i=n.value,a=f;f=void 0;try{t(i)}finally{f=a}})};E.prototype.valueOf=function(){return this.value};E.prototype.toString=function(){return this.value+""};E.prototype.toJSON=function(){return this.value};E.prototype.peek=function(){var t=f;f=void 0;try{return this.value}finally{f=t}};Object.defineProperty(E.prototype,"value",{get:function(){var t=rt(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if(ge>100)throw new Error("Cycle detected");this.v=t,this.i++,te++,I++;try{for(var n=this.t;n!==void 0;n=n.x)n.t.N()}finally{Se()}}}});function ot(t){return new E(t)}function ct(t){for(var n=t.s;n!==void 0;n=n.n)if(n.S.i!==n.i||!n.S.h()||n.S.i!==n.i)return!0;return!1}function lt(t){for(var n=t.s;n!==void 0;n=n.n){var i=n.S.n;if(i!==void 0&&(n.r=i),n.S.n=n,n.i=-1,n.n===void 0){t.s=n;break}}}function dt(t){for(var n=t.s,i=void 0;n!==void 0;){var a=n.p;n.i===-1?(n.S.U(n),a!==void 0&&(a.n=n.n),n.n!==void 0&&(n.n.p=a)):i=n,n.S.n=n.r,n.r!==void 0&&(n.r=void 0),n=a}t.s=i}function D(t){E.call(this,void 0),this.x=t,this.s=void 0,this.g=te-1,this.f=4}(D.prototype=new E).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===te))return!0;if(this.g=te,this.f|=1,this.i>0&&!ct(this))return this.f&=-2,!0;var t=f;try{lt(this),f=this;var n=this.x();(16&this.f||this.v!==n||this.i===0)&&(this.v=n,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return f=t,dt(this),this.f&=-2,!0};D.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var n=this.s;n!==void 0;n=n.n)n.S.S(n)}E.prototype.S.call(this,t)};D.prototype.U=function(t){if(this.t!==void 0&&(E.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var n=this.s;n!==void 0;n=n.n)n.S.U(n)}};D.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};Object.defineProperty(D.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var t=rt(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function ut(t){return new D(t)}function ht(t){var n=t.u;if(t.u=void 0,typeof n=="function"){I++;var i=f;f=void 0;try{n()}catch(a){throw t.f&=-2,t.f|=8,Ee(t),a}finally{f=i,Se()}}}function Ee(t){for(var n=t.s;n!==void 0;n=n.n)n.S.U(n);t.x=void 0,t.s=void 0,ht(t)}function Ct(t){if(f!==this)throw new Error("Out-of-order effect");dt(this),f=t,this.f&=-2,8&this.f&&Ee(this),Se()}function j(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}j.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var n=this.x();typeof n=="function"&&(this.u=n)}finally{t()}};j.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,ht(this),lt(this),I++;var t=f;return f=this,Ct.bind(this,t)};j.prototype.N=function(){2&this.f||(this.f|=2,this.o=z,z=this)};j.prototype.d=function(){this.f|=8,1&this.f||Ee(this)};function Te(t){var n=new j(t);try{n.c()}catch(i){throw n.d(),i}return n.d.bind(n)}var se,le;function N(t,n){m[t]=n.bind(null,m[t]||function(){})}function ne(t){le&&le(),le=t&&t.S()}function pt(t){var n=this,i=t.data,a=P(i);a.value=i;var r=ae(function(){for(var s=n.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return n.__$u.c=function(){var c,l=n.__$u.S(),u=r.value;l(),Ve(u)||((c=n.base)==null?void 0:c.nodeType)!==3?(n.__$f|=1,n.setState({})):n.base.data=u},ut(function(){var c=a.value.value;return c===0?0:c===!0?"":c||""})},[]);return r.value}pt.displayName="_st";Object.defineProperties(E.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:pt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});N("__b",function(t,n){if(typeof n.type=="string"){var i,a=n.props;for(var r in a)if(r!=="children"){var s=a[r];s instanceof E&&(i||(n.__np=i={}),i[r]=s,a[r]=s.peek())}}t(n)});N("__r",function(t,n){ne();var i,a=n.__c;a&&(a.__$f&=-2,(i=a.__$u)===void 0&&(a.__$u=i=function(r){var s;return Te(function(){s=this}),s.c=function(){a.__$f|=1,a.setState({})},s}())),se=a,ne(i),t(n)});N("__e",function(t,n,i,a){ne(),se=void 0,t(n,i,a)});N("diffed",function(t,n){ne(),se=void 0;var i;if(typeof n.type=="string"&&(i=n.__e)){var a=n.__np,r=n.props;if(a){var s=i.U;if(s)for(var c in s){var l=s[c];l!==void 0&&!(c in a)&&(l.d(),s[c]=void 0)}else i.U=s={};for(var u in a){var d=s[u],p=a[u];d===void 0?(d=Ot(i,u,p,r),s[u]=d):d.o(p,r)}}}t(n)});function Ot(t,n,i,a){var r=n in t&&t.ownerSVGElement===void 0,s=ot(i);return{o:function(c,l){s.value=c,a=l},d:Te(function(){var c=s.value.value;a[n]!==c&&(a[n]=c,r?t[n]=c:c?t.setAttribute(n,c):t.removeAttribute(n))})}}N("unmount",function(t,n){if(typeof n.type=="string"){var i=n.__e;if(i){var a=i.U;if(a){i.U=void 0;for(var r in a){var s=a[r];s&&s.d()}}}}else{var c=n.__c;if(c){var l=c.__$u;l&&(c.__$u=void 0,l.d())}}t(n)});N("__h",function(t,n,i,a){(a<3||a===9)&&(n.__$f|=2),t(n,i,a)});B.prototype.shouldComponentUpdate=function(t,n){var i=this.__$u,a=i&&i.s!==void 0;for(var r in n)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(a||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(a||4&this.__$f)||3&this.__$f)return!0;for(var s in t)if(s!=="__source"&&t[s]!==this.props[s])return!0;for(var c in this.props)if(!(c in t))return!0;return!1};function P(t){return ae(function(){return ot(t)},[])}function re(t){var n=at(t);return n.current=t,se.__$f|=4,ae(function(){return ut(function(){return n.current()})},[])}const Rt="green",At="yellow-green",kt="yellow",Lt="orange",It="red",Ce={best:Rt,good:At,fair:kt,bad:Lt,worst:It,"N/A":"gray","Ω(n)":"yellow","Θ(n^2)":"red","O(n^2)":"red","O(1)":"green","Ω(n^2)":"red","Ω(n log(n))":"orange","Θ(n log(n))":"orange","O(n log(n))":"orange","O(n)":"yellow","O(log(n))":"yellow-green","Ω(nk)":"green","Θ(nk)":"green","O(nk)":"green","O(n + k)":"green","Ω(n + k)":"green","Θ(n + k)":"green","Θ((n log(n))^2)":"red","O(n(log(n))^2)":"red","O(k)":"yellow","Θ(1)":"green","Θ(log(n))":"yellow-green","Θ(n)":"yellow","O(V + E)":"gray"},qt=[{name:"Big-O",notation:"O",description:"Represents an (upper) bound on the growth rate of a function or the maximum resource consumption of an algorithm.",note:"Associated with (worst-case) scenarios, indicating that the actual runtime will never exceed this upper limit.",simplified:"Order at Most <="},{name:"Big-Theta",notation:"Θ",description:"Represents a (tight) bound on the growth rate of a function or both the upper and lower bounds together.",note:"Associated with (average-case) scenarios, indicating that the actual runtime will consistently fall within this bound.",simplified:"Order Exactly =="},{name:"Big-Omega",notation:"Ω",description:"Represents a (lower) bound on the growth rate of a function or the minimum resource consumption of an algorithm.",note:"Associated with (best-case) scenarios, indicating that the actual runtime will never exceed this lower limit.",simplified:"Order at Least >="}],Dt=[{name:"Constant",notation:"O(1)",description:"Constant time regardless of input size",level:"best"},{name:"Logarithmic",notation:"O(log n)",description:"Increases logarithmically with input size",level:"good"},{name:"Linear",notation:"O(n)",description:"Increases linearly with input size",level:"fair"},{name:"Linearithmic",notation:"O(n log n)",description:"Increases in proportion to the product of input size and its logarithm",level:"fair"},{name:"Quadratic",notation:"O(n^2)",description:"Increases quadratically with input size",level:"bad"},{name:"Cubic",notation:"O(n^3)",description:"Increases cubically with input size",level:"bad"},{name:"Exponential",notation:"O(2^n)",description:"Doubles with each additional element in input",level:"worst"},{name:"Factorial",notation:"O(n!)",description:"Grows factorially with input size",level:"worst"}],Nt=[{name:"Heap",description:"Uses a binary heap to extract the maximum (or minimum) element and place it in the sorted array.",time:{best:"Ω(n log(n))",average:"Θ(n log(n))",worst:"O(n log(n))"},space:{worst:"O(1)"}},{name:"Merge",description:"Divides the array, recursively sorts halves, and merges them.",time:{best:"Ω(n log(n))",average:"Θ(n log(n))",worst:"O(n log(n))"},space:{worst:"O(n)"}},{name:"Quick",description:"Chooses a pivot, partitions the array, and recursively sorts partitions.",time:{best:"Ω(n log(n))",average:"Θ(n log(n))",worst:"O(n^2)"},space:{worst:"O(log(n))"}},{name:"Tree",description:"A sorting algorithm that builds a binary search tree from the elements to be sorted, then traverses the tree to retrieve the elements in sorted order.",time:{best:"Ω(n log(n))",average:"Θ(n log(n))",worst:"O(n^2)"},space:{worst:"O(n)"}},{name:"Comb",description:"Improves upon bubble sort by using a gap sequence to eliminate turtles, or small values near the end of the list, which slows down the sorting process in bubble sort.",time:{best:"Ω(n log(n))",average:"Θ(n^2)",worst:"O(n^2)"},space:{worst:"O(1)"}},{name:"Shell",description:"Extension of insertion sort that allows the exchange of items that are far apart. It starts by sorting pairs of elements far apart from each other, then progressively reduces the gap between elements to be compared.",time:{best:"Ω(n log(n))",average:"Θ((n log(n))^2)",worst:"O(n(log(n))^2)"},space:{worst:"O(1)"}},{name:"Cube",description:"Operates by recursively dividing the array into sub-cubes, sorting each cube individually, and then merging them back together, offering a balance between time complexity and space complexity.",time:{best:"Ω(n)",average:"Θ(n log(n))",worst:"O(n log(n))"},space:{worst:"O(n)"}},{name:"Tim",description:"A hybrid sorting algorithm derived from merge sort and insertion sort, designed to perform well on real-world data and exploit existing order in the input sequence.",time:{best:"Ω(n)",average:"Θ(n log(n))",worst:"O(n log(n))"},space:{worst:"O(n)"}},{name:"Bubble",description:"Repeatedly compares adjacent elements and swaps them if they are in the wrong order.",time:{best:"Ω(n)",average:"Θ(n^2)",worst:"O(n^2)"},space:{worst:"O(1)"}},{name:"Insertion",description:"Builds the final sorted array one element at a time by inserting each element into its position.",time:{best:"Ω(n)",average:"Θ(n^2)",worst:"O(n^2)"},space:{worst:"O(1)"}},{name:"Selection",description:"Finds the smallest (or largest) element and places it at the beginning (or end) of the array.",time:{best:"Ω(n^2)",average:"Θ(n^2)",worst:"O(n^2)"},space:{worst:"O(1)"}},{name:"Bucket",description:"Divides the input array into a number of buckets, each of which is then sorted individually, typically with another sorting algorithm or by recursively applying bucket sort.",time:{best:"Ω(n + k)",average:"Θ(n + k)",worst:"O(n^2)"},space:{worst:"O(n)"}},{name:"Counting",description:"An integer sorting algorithm that works by determining the number of objects having distinct key values and using arithmetic to determine their position in the output array.",time:{best:"Ω(n + k)",average:"Θ(n + k)",worst:"O(n + k)"},space:{worst:"O(k)"}},{name:"Radix",description:"Sorts based on individual digits or characters, from least to most significant.",time:{best:"Ω(nk)",average:"Θ(nk)",worst:"O(nk)"},space:{worst:"O(n + k)"}}],Pt=[{name:"Linear",description:"Sequentially checks each element in a list until a match is found.",average:"Θ(n)",worst:"O(n)"},{name:"Binary",description:"Efficiently locates a target value within a sorted array by repeatedly dividing the search interval in half.",average:"Θ(log n)",worst:"O(log n)"}],Mt=[{name:"Depth-First",description:"Traverses as far as possible along each branch before backtracking.",average:"Θ(v + e)",worst:"O(v + e)"},{name:"Breadth-First",description:"Explores all neighbor nodes at the present depth prior to moving on to nodes at the next depth level.",average:"Θ(v + e)",worst:"O(v + e)"},{name:"Bellman-Ford",description:"Finds the shortest path from a single source vertex to all other vertices in a weighted graph, including negative edge weights.",average:"Θ(v * e)",worst:"O(v * e)"},{name:"Dijkstra's",description:"Finds the shortest path from a single source vertex to all other vertices in a weighted graph, with non-negative edge weights.",average:"Θ((v + e) log v)",worst:"O((v + e) log v)"},{name:"A-Star (A*)",description:"An informed search algorithm that uses a heuristic to estimate the cost of reaching the goal, combining the cost to reach the current node and the estimated cost to reach the goal.",average:"Θ(b ^ d)",worst:"O(b ^ d)"}],Be={array:Pt,graph:Mt},Wt=[{name:"Array",shape:"Array.png",group:"List",description:"A collection of elements, each identified by an index or a key",time:{average:{access:"Θ(1)",search:"Θ(n)",insertion:"Θ(n)",deletion:"Θ(n)"},worst:{access:"O(1)",search:"O(n)",insertion:"O(n)",deletion:"O(n)"}},space:{worst:"O(n)"}},{name:"Stack",shape:"Stack.png",group:"List",description:"Follows the Last-In-First-Out (LIFO) principle",time:{average:{access:"Θ(n)",search:"Θ(n)",insertion:"Θ(1)",deletion:"Θ(1)"},worst:{access:"O(n)",search:"O(n)",insertion:"O(1)",deletion:"O(1)"}},space:{worst:"O(n)"}},{name:"Queue",shape:"Queue.png",group:"List",description:"Follows the First-In-First-Out (FIFO) principle",time:{average:{access:"Θ(n)",search:"Θ(n)",insertion:"Θ(1)",deletion:"Θ(1)"},worst:{access:"O(n)",search:"O(n)",insertion:"O(1)",deletion:"O(1)"}},space:{worst:"O(n)"}},{name:"Single-Linked-List",shape:"Single-Linked-List.png",group:"List",description:"Consists of nodes, each containing data and a reference to the next node. It allows efficient insertion and deletion at the head or tail",time:{average:{access:"Θ(n)",search:"Θ(n)",insertion:"Θ(1)",deletion:"Θ(1)"},worst:{access:"O(n)",search:"O(n)",insertion:"O(1)",deletion:"O(1)"}},space:{worst:"O(n)"}},{name:"Double-Linked-List",shape:"Double-Linked-List.png",group:"List",description:"Extends the single-linked list by having references to both the next and previous nodes. It enables bidirectional traversal",time:{average:{access:"Θ(n)",search:"Θ(n)",insertion:"Θ(1)",deletion:"Θ(1)"},worst:{access:"O(n)",search:"O(n)",insertion:"O(1)",deletion:"O(1)"}},space:{worst:"O(n)"}},{name:"Skip-List",shape:"Skip-List.png",group:"List",description:"Probabilistic data structure, it uses multiple levels of linked lists",time:{average:{access:"Θ(log(n))",search:"Θ(log(n))",insertion:"Θ(log(n))",deletion:"Θ(log(n))"},worst:{access:"O(n)",search:"O(n)",insertion:"O(n)",deletion:"O(n)"}},space:{worst:"O(n log(n))"}},{name:"Binary-Search-Tree",shape:"Binary-AVL-Tree.png",group:"Tree",description:"Consists of nodes, each having at most two children",time:{average:{access:"Θ(log(n))",search:"Θ(log(n))",insertion:"Θ(log(n))",deletion:"Θ(log(n))"},worst:{access:"O(n)",search:"O(n)",insertion:"O(n)",deletion:"O(n)"}},space:{worst:"O(n)"}},{name:"Cartesian-Tree",shape:"Cartesian-Tree.png",group:"Tree",description:"Binary tree where the values of nodes satisfy the heap property with respect to both the parent and the child",time:{average:{access:"N/A",search:"Θ(log(n))",insertion:"Θ(log(n))",deletion:"Θ(log(n))"},worst:{access:"N/A",search:"O(n)",insertion:"O(n)",deletion:"O(n)"}},space:{worst:"O(n)"}},{name:"B-Tree",shape:"B-Tree.png",group:"Tree",description:"Self-balancing tree structure that maintains sorted data and is commonly used in databases and file systems",time:{average:{access:"Θ(log(n))",search:"Θ(log(n))",insertion:"Θ(log(n))",deletion:"Θ(log(n))"},worst:{access:"O(log(n))",search:"O(log(n))",insertion:"O(log(n))",deletion:"O(log(n))"}},space:{worst:"O(n)"}},{name:"Red-Black-Tree",shape:"Red-Black-Tree.png",group:"Tree",description:"Self-balancing binary search tree that maintains balance through color-coded nodes",time:{average:{access:"Θ(log(n))",search:"Θ(log(n))",insertion:"Θ(log(n))",deletion:"Θ(log(n))"},worst:{access:"O(log(n))",search:"O(log(n))",insertion:"O(log(n))",deletion:"O(log(n))"}},space:{worst:"O(n)"}},{name:"Splay-Tree",shape:"Splay-Tree.png",group:"Tree",description:"Self-adjusting binary search tree. It reorganizes itself during operations to improve access times for frequently accessed nodes",time:{average:{access:"N/A",search:"Θ(log(n))",insertion:"Θ(log(n))",deletion:"Θ(log(n))"},worst:{access:"N/A",search:"O(log(n))",insertion:"O(log(n))",deletion:"O(log(n))"}},space:{worst:"O(n)"}},{name:"AVL-Tree",shape:"Binary-AVL-Tree.png",group:"Tree",description:"Self-balancing binary search tree. It ensures that the height difference between left and right subtrees is at most one",time:{average:{access:"Θ(log(n))",search:"Θ(log(n))",insertion:"Θ(log(n))",deletion:"Θ(log(n))"},worst:{access:"O(log(n))",search:"O(log(n))",insertion:"O(log(n))",deletion:"O(log(n))"}},space:{worst:"O(n)"}},{name:"KD-Tree",shape:"KD-Tree.png",group:"Tree",description:"Binary tree used for efficient multidimensional data search. It partitions space into regions based on data points",time:{average:{access:"Θ(log(n))",search:"Θ(log(n))",insertion:"Θ(log(n))",deletion:"Θ(log(n))"},worst:{access:"O(n)",search:"O(n)",insertion:"O(n)",deletion:"O(n)"}},space:{worst:"O(n)"}},{name:"Min-Heap",shape:"Min-Heap.png",group:"Tree",description:"The parent is less than or equal to its children",time:{average:{access:"Θ(1)",search:"Θ(n)",insertion:"Θ(log(n))",deletion:"Θ(log(n))"},worst:{access:"O(1)",search:"O(n)",insertion:"O(log(n))",deletion:"O(log(n))"}},space:{worst:"O(n)"}},{name:"Max-Heap",shape:"Max-Heap.png",group:"Tree",description:"The parent is greater than or equal to its children",time:{average:{access:"Θ(1)",search:"Θ(n)",insertion:"Θ(log(n))",deletion:"Θ(log(n))"},worst:{access:"O(1)",search:"O(n)",insertion:"O(log(n))",deletion:"O(log(n))"}},space:{worst:"O(n)"}},{name:"Hash-Table",shape:"Hash-Table.png",group:"Other",description:"Uses a hash function to map keys to indices in an array",time:{average:{access:"N/A",search:"Θ(1)",insertion:"Θ(1)",deletion:"Θ(1)"},worst:{access:"N/A",search:"O(n)",insertion:"O(n)",deletion:"O(n)"}},space:{worst:"O(n)"}},{name:"Graph",shape:"Graph.png",group:"Other",description:"Consists of nodes connected by edges",time:{average:{access:"Θ(1)",search:"Θ(V + E)",insertion:"Θ(1)",deletion:"Θ(1)"},worst:{access:"O(1)",search:"O(V + E)",insertion:"O(1)",deletion:"O(1)"}},space:{worst:"O(V + E)"}}],Ut=[{name:"Object",description:"An instance of a class that encapsulates data and behavior."},{name:"Class",description:"A blueprint for creating objects, defining their attributes (data) and methods (behavior)."},{name:"Inheritance",description:"A mechanism in OOP that allows a class to inherit properties and behaviors from another class, promoting code reusability and establishing a parent-child relationship."},{name:"Polymorphism",description:"The ability for objects of different classes to be treated as objects of a common superclass, enabling methods to be invoked dynamically based on the type of object."},{name:"Abstraction",description:"The process of hiding complex implementation details and exposing only the essential features of an object, making it easier to understand and use."},{name:"Encapsulation",description:"The bundling of data and methods within a class, restricting access to the internal state of an object and promoting data integrity by controlling how data is accessed and modified."}],Ht=[{name:"Single Responsibility",description:"A class should have only one reason to change, meaning it should have only one responsibility or job."},{name:"Open / Closed",description:"Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification, allowing new functionality to be added without altering existing code."},{name:"Liskov Substitution",description:"Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program."},{name:"Interface Segregation",description:"Clients should not be forced to depend on interfaces they do not use. Instead, interfaces should be specific to the needs of the client."},{name:"Dependency Inversion",description:"High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions."}],Ft=[{name:"Singleton",description:"Ensures that a class has only one instance and provides a global point of access to that instance."},{name:"Factory Method",description:"Defines an interface for creating an object but allows subclasses to alter the type of objects that will be created."},{name:"Abstract Factory",description:"Provides an interface for creating families of related or dependent objects without specifying their concrete classes."},{name:"Builder",description:"Separates the construction of a complex object from its representation, allowing the same construction process to create different representations."},{name:"Prototype",description:"Creates new objects by copying an existing object, typically used when the creation of a new instance is more efficient than creating it from scratch or with initial parameters."},{name:"Adapter",description:"Allows incompatible interfaces to work together by providing a bridge between them."},{name:"Decorator",description:"Attaches additional responsibilities to an object dynamically, providing a flexible alternative to subclassing for extending functionality."},{name:"Observer",description:"Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically."},{name:"Strategy",description:"Defines a family of algorithms, encapsulates each one, and makes them interchangeable."},{name:"Command",description:"Encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations."}],Bt=[{name:"Procedural Programming",description:"Focuses on procedures or routines to execute a series of computational steps."},{name:"Object-Oriented Programming (OOP)",description:"Organizes software design around objects that encapsulate data and behavior."},{name:"Functional Programming",description:"Emphasizes the use of pure functions and immutable data to model computation."},{name:"Imperative Programming",description:"Specifies a series of statements that change a program's state."},{name:"Declarative Programming",description:"Describes what the program should accomplish rather than how to achieve it, allowing for a more abstract approach."},{name:"Event-Driven Programming",description:"Relies on events triggered by user actions or system events to determine program flow."},{name:"Aspect-Oriented Programming (AOP)",description:"Separates cross-cutting concerns (such as logging or security) from the main application logic."},{name:"Service-Oriented Architecture (SOA)",description:"Designs software as a collection of services that communicate through standardized protocols."},{name:"Microservices Architecture",description:"Breaks down applications into small, independently deployable services that work together."},{name:"Component-Based Architecture",description:"Constructs software from reusable, self-contained components with well-defined interfaces."},{name:"Model-View-Controller (MVC)",description:"Separates the application into three interconnected components: Model (data), View (user interface), and Controller (logic)."},{name:"Model-View-ViewModel (MVVM)",description:"A variation of MVC where the ViewModel mediates communication between the View and Model."},{name:"Model-Driven Architecture (MDA)",description:"Focuses on models as the primary artifacts of the development process, generating code from these models."},{name:"Domain-Driven Design (DDD)",description:"Centers software design around a rich understanding of the domain and domain logic."},{name:"Event Sourcing",description:"Stores all changes to application state as a sequence of events, allowing for easy replay and auditing."},{name:"CQRS (Command Query Responsibility Segregation)",description:"Separates read and write operations for data storage, optimizing each for its specific purpose."},{name:"Actor Model",description:"Models concurrent computation as a collection of actors that communicate via asynchronous messages."},{name:"Reactive Programming",description:"Deals with asynchronous data streams and the propagation of changes, allowing for reactive and scalable systems."},{name:"Service-Oriented Integration (SOI)",description:"Integrates software systems using services exposed via well-defined interfaces."},{name:"Distributed Computing",description:"Designs software to run across multiple interconnected computers, enabling scalability and fault tolerance."}],zt=[{name:"Modularity",description:"Divide the software into separate modules to enhance maintainability, reusability, and scalability."},{name:"Decoupling",description:"Minimize dependencies between modules or components to improve flexibility and facilitate easier updates or replacements."},{name:"SoC (Separation of Concerns)",description:"Divide a software system into distinct sections, each addressing a separate concern, to improve readability and maintainability."},{name:"KISS (Keep It Simple, Stupid)",description:"Strive for simplicity in design and implementation, avoiding unnecessary complexity that can lead to confusion and maintenance difficulties."},{name:"DRY (Don't Repeat Yourself)",description:"Eliminate redundancy in code by abstracting common functionalities into reusable components, reducing the risk of errors and improving maintainability."},{name:"YAGNI (You Aren't Gonna Need It)",description:"Avoid implementing features or functionalities until they are actually needed, preventing unnecessary complexity and over-engineering."},{name:"Fail-Fast",description:"Detect and report errors as soon as possible to prevent them from propagating and causing further issues, facilitating faster debugging and resolution."},{name:"Convention Over Configuration",description:"Use sensible defaults and conventions to minimize the need for explicit configuration, promoting consistency and reducing cognitive load."}],H={oop:Ut,solid:Ht,design:Ft,paradigms:Bt,principles:zt},Qt=[{title:"PEP 8 (Style Guide)",notes:"black | isort | pylint | mypy | pyright | ruff"},{title:"PEP 484",notes:"Type Hints"},{title:"Immutables",notes:"tuple | frozenset | int | float | str | bool"},{title:"Testing",notes:"pytest"},{title:"Dependency Manager",notes:"pip | pdm | conda | poetry"},{title:"Virtual Environments",notes:"venv"}],jt=[{index:1,description:"Beautiful is better than ugly."},{index:2,description:"Explicit is better than implicit."},{index:3,description:"Simple is better than complex."},{index:4,description:"Complex is better than complicated."},{index:5,description:"Flat is better than nested."},{index:6,description:"Sparse is better than dense."},{index:7,description:"Readability counts."},{index:8,description:"Special cases aren't special enough to break the rules."},{index:9,description:"Although practicality beats purity."},{index:10,description:"Errors should never pass silently."},{index:11,description:"Unless explicitly silenced."},{index:12,description:"In the face of ambiguity, refuse the temptation to guess."},{index:13,description:"There should be one-- and preferably only one --obvious way to do it."},{index:14,description:"Although that way may not be obvious at first unless you're Dutch."},{index:15,description:"Now is better than never."},{index:16,description:"Although never is often better than *right* now."},{index:17,description:"If the implementation is hard to explain, it's a bad idea."},{index:18,description:"If the implementation is easy to explain, it may be a good idea."},{index:19,description:"Namespaces are one honking great idea -- let's do more of those!"}],Vt=[{method:"__new__",description:"Creates a new instance of a class."},{method:"__init__",description:"Initializes an object when it is created."},{method:"__call__",description:"Enables objects to be called like functions."},{method:"__dir__",description:"Returns the attributes of a class."},{method:"__repr__",description:"Returns an unambiguous string representation of the object."},{method:"__str__",description:"Returns a readable string representation of the object."},{method:"__len__",description:"Returns the length of the object."},{method:"__getitem__",description:"Enables indexing and slicing operations."},{method:"__setitem__",description:"Enables setting values using indexing."},{method:"__delitem__",description:"Enables deletion of items using indexing."},{method:"__iter__",description:"Returns an iterator object for iteration."},{method:"__next__",description:"Retrieves the next item in the iteration sequence."},{method:"__enter__",description:"Sets up the context for a with statement."},{method:"__exit__",description:"Cleans up resources when the with statement exits."},{method:"__getattr__",description:"Handles attribute access when an attribute is not found."},{method:"__setattr__",description:"Handles setting attribute values."},{method:"__delattr__",description:"Handles deletion of attributes."},{method:"__eq__",description:"Defines equality comparison."},{method:"__ne__",description:"Defines inequality comparison."},{method:"__lt__",description:"Defines less than comparison."},{method:"__gt__",description:"Defines greater than comparison."},{method:"__le__",description:"Defines less than or equal to comparison."},{method:"__ge__",description:"Defines greater than or equal to comparison."},{method:"__del__",description:"Cleans up resources when an object is about to be destroyed."},{method:"__hash__",description:"Returns the hash value of the object."}],Oe={others:Qt,zen:jt,magic:Vt},Gt=[{method:"functools.partial(function, *args, **keywords)",description:"Returns a new partial object which when called will behave like func called with the positional arguments args and keyword arguments keywords."},{method:"functools.wraps(function)",description:"Decorator used to update the metadata (such as __name__, __doc__) of the wrapper function to look more like the wrapped function."},{method:"functools.reduce(function, iterable)",description:"Applies function of two arguments cumulatively to the items of iterable, from left to right, so as to reduce the iterable to a single value."},{method:"functools.lru_cache(maxsize=None, typed=False)",description:"Decorator to wrap a function with a memoizing callable that saves up to the maxsize most recent calls. It can save time when an expensive or I/O bound function is periodically called with the same arguments."}],$t=[{method:"zip(*iterables, strict=False)",description:"Returns an iterator that aggregates elements from each of the iterables. It continues until the shortest iterable is exhausted, and if strict is True, raises a ValueError if the iterables are of unequal length."},{method:"any(iterable)",description:"Returns True if at least one element in the iterable is True. Otherwise, returns False."},{method:"all(iterable)",description:"Returns True if all elements in the iterable are True, or if the iterable is empty. Otherwise, returns False."},{method:"enumerate(iterable, start=0)",description:"Returns an iterator that yields tuples containing an index and the value of each item in the iterable. The index starts at the specified start value (default is 0)."},{method:"map(function, iterable, *iterables)",description:"Returns an iterator that applies the specified function to each item in the iterable(s) and yields the result. If multiple iterables are passed, the function is called with corresponding items from each iterable."}],Jt=[{method:"itertools.product(*iterables, repeat=1)",description:"Returns the Cartesian product of the input iterables, yielding tuples containing elements from each iterable."},{method:"itertools.permutations(iterable, r=None)",description:"Returns all possible r-length tuples of elements from the iterable."},{method:"itertools.combinations(iterable, r)",description:"Returns all possible r-length combinations of elements from the iterable."},{method:"itertools.combinations_with_replacement(iterable, r)",description:"Returns all possible r-length combinations of elements from the iterable, allowing individual elements to be repeated."},{method:"itertools.accumulate(iterable, func=operator.add)",description:"Returns an iterator that produces accumulated sums (or other binary functions) of the elements."},{method:"itertools.groupby(iterable, key=None)",description:"Returns an iterator that generates tuples of a key and an iterator of grouped items from the input iterable. The key function defaults to None for a simple grouping based on the identity of the items."}],Kt=[{method:"collections.Counter",description:"A dict subclass for counting hashable objects. It is a collection where elements are stored as dictionary keys and their counts are stored as dictionary values."},{method:"collections.OrderedDict",description:"A dict subclass that maintains the order of insertion of its keys."},{method:"collections.ChainMap",description:"A class for quickly combining several mappings into one single mapping."},{method:"collections.defaultdict",description:"A subclass of the built-in dict class that returns a default value when a non-existent key is accessed."},{method:"collections.namedtuple",description:"A factory function for creating tuple subclasses with named fields, which increases code readability and maintainability."}],Yt=[{method:"random.random()",description:"Returns a random floating point number in the range (0.0, 1.0)."},{method:"random.randint(a, b)",description:"Returns a random integer between a and b (inclusive)."},{method:"random.choice(seq)",description:"Returns a random element from the non-empty sequence."},{method:"random.shuffle(seq)",description:"Randomly shuffles the elements of the sequence in place."},{method:"random.sample(seq, k)",description:"Returns a list of k unique elements chosen randomly from the population sequence or set."},{method:"random.randrange(start, stop, step)",description:"Returns a randomly selected element from the range(start, stop, step)."}],Xt=[{method:"abs(x)",description:"Returns the absolute value of x."},{method:"min(iterable)",description:"Returns the smallest item in the iterable."},{method:"max(iterable)",description:"Returns the largest item in the iterable."},{method:"pow(x, y)",description:"Returns x raised to the power of y."},{method:"divmod(x, y)",description:"Returns the quotient and remainder of the division of x by y."},{method:"math.ceil(x)",description:"Returns the smallest integer greater than or equal to x."},{method:"math.floor(x)",description:"Returns the largest integer less than or equal to x."},{method:"math.sqrt(x)",description:"Returns the square root of x."},{method:"math.sin(x)",description:"Returns the sine of x (in radians)."},{method:"math.cos(x)",description:"Returns the cosine of x (in radians)."},{method:"math.tan(x)",description:"Returns the tangent of x (in radians)."},{method:"statistics.mean(iterable)",description:"Returns the arithmetic mean of the iterable."},{method:"statistics.median(iterable)",description:"Returns the median (middle value) of the iterable."}],ze={functools:Gt,iterables:$t,itertools:Jt,collections:Kt,random:Yt,numeric:Xt},Zt=[{name:"POST",description:"Create"},{name:"GET",description:"Read"},{name:"PUT",description:"Update"},{name:"PATCH",description:"Specific-Update"},{name:"DELETE",description:"Delete"}],en=[{name:"Client-Server (Decoupling)",description:"Separation of concerns between the client and server, allowing them to evolve independently and improve scalability, reliability, and portability."},{name:"Stateless",description:"Each request from the client to the server must contain all the information necessary to understand and fulfill the request, meaning no client context is stored on the server between requests."},{name:"Cacheability",description:"Responses must define themselves as cacheable or non-cacheable, improving efficiency, scalability, and user-perceived performance through the use of caching."},{name:"Uniform Interface",description:"A uniform and standardized way of interacting with resources through well-defined operations (HTTP methods) and resource representations (media types)."},{name:"Layered System",description:"A hierarchical system where intermediaries (proxies, gateways, etc.) can be used to improve scalability, security, and encapsulation by providing additional layers of abstraction."},{name:"Code-On-Demand (Optional)",description:"Servers can temporarily extend the functionality of a client by transferring executable code (e.g., JavaScript) within a response, enhancing flexibility and reducing client-server coupling."}],tn=[{name:"Schema",description:"Defines the structure of the data in the GraphQL API, including types, fields, and relationships."},{name:"Query",description:"Defines how clients can fetch data from the GraphQL server. Queries are used to retrieve data from the server."},{name:"Mutation",description:"Defines how clients can modify data on the GraphQL server. Mutations are used to create, update, or delete data."},{name:"Subscription",description:"Defines how clients can subscribe to real-time data updates from the GraphQL server. Subscriptions allow clients to receive data as it changes."},{name:"Resolver",description:"Functions that define how GraphQL fields are resolved. Resolvers are responsible for fetching the data associated with each field."},{name:"Scalar",description:"Primitive data types in GraphQL that represent single values, such as integers, strings, booleans, and floats."},{name:"Type",description:"Composite data types in GraphQL that represent complex objects with multiple fields. Object types define the structure of the data returned by queries and mutations."},{name:"Input",description:"Similar to object types, input types represent complex input data for mutations. Input types define the structure of the data that clients can provide when executing mutations."},{name:"Enum",description:"An enumeration type in GraphQL that represents a predefined set of possible values. Enums are used to define a specific domain of valid options for a field."},{name:"Union",description:"A type in GraphQL that represents a combination of one or more object types. Unions allow for flexibility in query responses by allowing a field to return different types of objects."},{name:"Interface",description:"A type in GraphQL that defines a common set of fields that multiple object types can implement. Interfaces enable polymorphism and ensure consistent field structures across related types."}],de={rest_methods:Zt,rest_constraints:en,graphql:tn},nn=[{statement:"WHERE",description:"Filters rows based on a specified condition.",example:"SELECT * FROM table_name WHERE condition_1;"},{statement:"AND",description:"Combines multiple conditions in a WHERE clause, requiring all to be true.",example:"SELECT * FROM table_name WHERE condition_1 AND condition_2;"},{statement:"OR",description:"Combines multiple conditions in a WHERE clause, requiring at least one to be true.",example:"SELECT * FROM table_name WHERE condition_1 OR condition_2;"},{statement:"LIMIT",description:"Limits the number of rows returned by a query.",example:"SELECT * FROM table_name LIMIT 10;"},{statement:"GROUP BY",description:"Groups rows that have the same values into summary rows.",example:"SELECT column_name, COUNT(*) FROM table_name GROUP BY column_name;"},{statement:"ORDER BY",description:"Sorts the result set by specified columns (ASC or DESC).",example:"SELECT * FROM table_name ORDER BY column_name ASC|DESC;"},{statement:"COUNT",description:"Counts the number of rows in a specified column or all rows.",example:"SELECT COUNT(*) FROM table_name;"},{statement:"AS",description:"Aliases are used to rename a table or column in a SQL query result.",example:"SELECT column_name AS alias_name FROM table_name;"},{statement:"INNER JOIN",description:"Returns records that have matching values in both tables.",example:"SELECT * FROM table1 INNER JOIN table2 ON table1.column_name = table2.column_name;"},{statement:"LEFT JOIN",description:"Returns all records from the left table and the matched records from the right table.",example:"SELECT * FROM table1 LEFT JOIN table2 ON table1.column_name = table2.column_name;"},{statement:"RIGHT JOIN",description:"Returns all records from the right table and the matched records from the left table.",example:"SELECT * FROM table1 RIGHT JOIN table2 ON table1.column_name = table2.column_name;"},{statement:"FULL JOIN",description:"Returns all records when there is a match in either left or right table.",example:"SELECT * FROM table1 FULL JOIN table2 ON table1.column_name = table2.column_name;"}],an=[{title:"Cracking the Coding Interview",url:"https://www.crackingthecodinginterview.com/"},{title:"Big-O Cheat-Sheet",url:"https://www.bigocheatsheet.com/"},{title:"Big-O Cheat-Sheet IO",url:"https://www.bigocheatsheet.com/"},{title:"Python: PEP-8",url:"https://peps.python.org/pep-0008"},{title:"Python: PEP-20",url:"https://peps.python.org/pep-0020"},{title:"Python: PEP-484",url:"https://peps.python.org/pep-0484/"},{title:"Python: Heap",url:"https://docs.python.org/3/library/heapq.html#module-heapq"},{title:"Python: Binary Search & Insertion",url:"https://docs.python.org/3/library/bisect.html#module-bisect"},{title:"Python: Specialized Container Data-Types",url:"https://docs.python.org/3/library/collections.html#module-collections"},{title:"Python: Queue FIFO & Stack LIFO",url:"https://docs.python.org/3/library/queue.html#module-queue"},{title:"Python: Deque (Queue + Stack)",url:"https://docs.python.org/3/library/collections.html#collections.deque"},{title:"Python: Built-in",url:"https://docs.python.org/3/library/functions.html"},{title:"Python: Functools",url:"https://docs.python.org/3/library/functools.html"},{title:"Python: Collections",url:"https://docs.python.org/3/library/collections.html"},{title:"Python: Itertools",url:"https://docs.python.org/3/library/itertools.html"},{title:"Python: Random",url:"https://docs.python.org/3/library/random.html"},{title:"Python: Math",url:"https://docs.python.org/3/library/math.html"}],sn=[{question:"What is SQL?",answer:"SQL (Structured Query Language) is a standard programming language used to communicate with relational databases. It allows users to create, read, update, and delete data, and provides commands to define database schema and manage database security.",code_example:""},{question:"What is a database?",answer:"A database is a collection of data organized in a way that allows for efficient storage, retrieval, and management of information.",code_example:""},{question:"What are the main types of SQL commands?",answer:`SQL commands are broadly classified into four categories:

1. DDL (Data Definition Language): Commands like CREATE, ALTER, DROP, TRUNCATE that define and modify database structure

2. DML (Data Manipulation Language): Commands like SELECT, INSERT, UPDATE, DELETE that manipulate data within tables

3. DCL (Data Control Language): Commands like GRANT and REVOKE that control user access and permissions

4. TCL (Transaction Control Language): Commands like COMMIT, ROLLBACK, SAVEPOINT that manage database transactions`,code_example:""},{question:"What is the difference between CHAR and VARCHAR2 data types?",answer:`CHAR: Fixed-length storage. If the defined length is not fully used, it is padded with spaces.

VARCHAR2: Variable-length storage. Only the actual data is stored, saving space when the full length is not needed.`,code_example:""},{question:"What is a primary key?",answer:"A primary key is a unique identifier for each record in a table. It ensures that no two rows have the same value in the primary key column(s), and it does not allow NULL values.",code_example:""},{question:"What is a foreign key?",answer:"A foreign key is a column (or set of columns) in one table that refers to the primary key in another table. It establishes and enforces a relationship between the two tables, ensuring data integrity.",code_example:""},{question:"What is the purpose of the DEFAULT constraint?",answer:"The DEFAULT constraint assigns a default value to a column when no value is provided during an INSERT operation. This helps maintain consistent data and simplifies data entry.",code_example:""},{question:"What is normalization in databases?",answer:"Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. This involves dividing large tables into smaller, related tables and defining relationships between them to ensure consistency and avoid anomalies.",code_example:""},{question:"What is denormalization, and when is it used?",answer:"Denormalization is the process of combining normalized tables into larger tables for performance reasons. It is used when complex queries and joins slow down data retrieval, and the performance benefits outweigh the drawbacks of redundancy.",code_example:""},{question:"What is a query in SQL?",answer:"A query is a SQL statement used to retrieve, update, or manipulate data in a database. The most common type of query is a SELECT statement, which fetches data from one or more tables based on specified conditions.",code_example:""},{question:"What are the different operators available in SQL?",answer:`SQL operators can be categorized into several types:

1. Arithmetic Operators: +, -, *, /, %

2. Comparison Operators: =, !=, <>, >, <, >=, <=

3. Logical Operators: AND, OR, NOT

4. Set Operators: UNION, INTERSECT, EXCEPT

5. Special Operators: BETWEEN, IN, LIKE, IS NULL`,code_example:""},{question:"What is a view in SQL?",answer:"A view is a virtual table created by a SELECT query. It does not store data itself, but presents data from one or more tables in a structured way. Views simplify complex queries, improve readability, and enhance security by restricting access to specific rows or columns.",code_example:""},{question:"What is the purpose of the UNIQUE constraint?",answer:"The UNIQUE constraint ensures that all values in a column (or combination of columns) are distinct. This prevents duplicate values and helps maintain data integrity.",code_example:""},{question:"What are the different types of joins in SQL?",answer:`The main types of SQL joins are:

1. INNER JOIN: Returns rows that have matching values in both tables

2. LEFT JOIN (LEFT OUTER JOIN): Returns all rows from the left table, and matching rows from the right table

3. RIGHT JOIN (RIGHT OUTER JOIN): Returns all rows from the right table, and matching rows from the left table

4. FULL JOIN (FULL OUTER JOIN): Returns all rows when there is a match in either table

5. CROSS JOIN: Produces the Cartesian product of two tables`,code_example:""},{question:"What is the difference between INNER JOIN and OUTER JOIN?",answer:`INNER JOIN: Returns only rows where there is a match in both tables.

OUTER JOIN: Returns all rows from one table (LEFT, RIGHT, or FULL), and the matching rows from the other table. If there is no match, NULL values are returned for the non-matching side.`,code_example:""},{question:"What is the purpose of the GROUP BY clause?",answer:"The GROUP BY clause is used to arrange identical data into groups. It is typically used with aggregate functions (such as COUNT, SUM, AVG) to perform calculations on each group rather than on the entire dataset.",code_example:""},{question:"What are aggregate functions in SQL?",answer:`Aggregate functions perform calculations on a set of values and return a single value. Common aggregate functions include:

1. COUNT(): Returns the number of rows

2. SUM(): Returns the total sum of values

3. AVG(): Returns the average of values

4. MIN(): Returns the smallest value

5. MAX(): Returns the largest value`,code_example:""},{question:"What is a subquery?",answer:"A subquery is a query nested within another query. It is often used in the WHERE clause to filter data based on the results of another query, making it easier to handle complex conditions.",code_example:""},{question:"What is the difference between the WHERE and HAVING clauses?",answer:`WHERE: Filters rows before any grouping takes place.

HAVING: Filters grouped data after the GROUP BY clause has been applied.

In short, WHERE applies to individual rows, while HAVING applies to groups.`,code_example:""},{question:"What are indexes, and why are they used?",answer:"Indexes are database objects that improve query performance by allowing faster retrieval of rows. They function like a book's index, making it quicker to find specific data without scanning the entire table. However, indexes require additional storage and can slightly slow down data modification operations.",code_example:""},{question:"What is the difference between DELETE and TRUNCATE commands?",answer:`DELETE: Removes rows one at a time and records each deletion in the transaction log, allowing rollback. It can have a WHERE clause.

TRUNCATE: Removes all rows at once without logging individual row deletions. It cannot have a WHERE clause and is faster than DELETE for large data sets.`,code_example:""},{question:"What is the purpose of the SQL ORDER BY clause?",answer:"The ORDER BY clause sorts the result set of a query in either ascending (default) or descending order, based on one or more columns. This helps present the data in a more meaningful or readable sequence.",code_example:""},{question:"What are the differences between SQL and NoSQL databases?",answer:`SQL Databases:
- Use structured tables with rows and columns
- Rely on a fixed schema
- Offer ACID properties

NoSQL Databases:
- Use flexible, schema-less structures (e.g., key-value pairs, document stores)
- Are designed for horizontal scaling
- Often focus on performance and scalability over strict consistency`,code_example:""},{question:"What is a table in SQL?",answer:"A table is a structured collection of related data organized into rows and columns. Columns define the type of data stored, while rows contain individual records.",code_example:""},{question:"What are the types of constraints in SQL?",answer:`Common constraints include:

1. NOT NULL: Ensures a column cannot have NULL values

2. UNIQUE: Ensures all values in a column are distinct

3. PRIMARY KEY: Uniquely identifies each row in a table

4. FOREIGN KEY: Ensures referential integrity by linking to a primary key in another table

5. CHECK: Ensures that all values in a column satisfy a specific condition

6. DEFAULT: Sets a default value for a column when no value is specified`,code_example:""},{question:"What is a cursor in SQL?",answer:"A cursor is a database object used to retrieve, manipulate, and traverse through rows in a result set one row at a time. Cursors are helpful when performing operations that must be processed sequentially rather than in a set-based manner.",code_example:""},{question:"What is a trigger in SQL?",answer:"A trigger is a set of SQL statements that automatically execute in response to certain events on a table, such as INSERT, UPDATE, or DELETE. Triggers help maintain data consistency, enforce business rules, and implement complex integrity constraints.",code_example:""},{question:"What is the purpose of the SQL SELECT statement?",answer:"The SELECT statement retrieves data from one or more tables. It is the most commonly used command in SQL, allowing users to filter, sort, and display data based on specific criteria.",code_example:""},{question:"What are NULL values in SQL?",answer:"NULL represents a missing or unknown value. It is different from zero or an empty string. NULL values indicate that the data is not available or applicable.",code_example:""},{question:"What is a stored procedure?",answer:"A stored procedure is a precompiled set of SQL statements stored in the database. It can take input parameters, perform logic and queries, and return output values or result sets. Stored procedures improve performance and maintainability by centralizing business logic.",code_example:""},{question:"What is the difference between DDL and DML commands in SQL?",answer:`DDL (Data Definition Language):
- Used to define and modify database structure/schema
- Examples: CREATE, ALTER, DROP, TRUNCATE
- Affects database objects like tables and indexes

DML (Data Manipulation Language):
- Used to manipulate data within database objects
`,code_example:`CREATE TABLE Employees (
    ID INT PRIMARY KEY,
    Name VARCHAR(50)
);

INSERT INTO Employees (ID, Name) VALUES (1, 'Alice');`},{question:"What is the purpose of the ALTER command in SQL?",answer:`The ALTER command is used to modify the structure of an existing database object. Common uses include:

- Adding, modifying, or dropping columns in a table
- Adding or removing constraints
- Modifying column data types
- Renaming tables or columns

Example: ALTER TABLE Employees ADD COLUMN Email VARCHAR(100);`,code_example:""},{question:"What is a composite primary key?",answer:`A composite primary key is a primary key made up of two or more columns. Together, these columns must form a unique combination for each row in the table. It's used when a single column isn't sufficient to uniquely identify a record.

`,code_example:`CREATE TABLE OrderDetails (
    OrderID INT,
    ProductID INT,
    Quantity INT,
    PRIMARY KEY (OrderID, ProductID)
);`},{question:"How is data integrity maintained in SQL databases?",answer:`Data integrity refers to the accuracy, consistency, and reliability of the data stored in the database. SQL databases maintain data integrity through several mechanisms:

1. Constraints: Ensuring that certain conditions are always met. For example, NOT NULL ensures a column cannot have missing values, FOREIGN KEY ensures a valid relationship between tables, and UNIQUE ensures no duplicate values.

2. Transactions: Ensuring that a series of operations either all succeed or all fail, preserving data consistency.

3. Triggers: Automatically enforcing rules or validations before or after changes to data.

4. Normalization: Organizing data into multiple related tables to minimize redundancy and prevent anomalies.

These measures collectively ensure that the data remains reliable and meaningful over time.`,code_example:""},{question:"What are the advantages of using stored procedures?",answer:`Stored procedures offer several key advantages:

1. Improved Performance:
- Precompiled and cached in the database
- Faster execution compared to individual queries

2. Reduced Network Traffic:
- Complex logic executes on the server
- Fewer round trips between application and database

3. Enhanced Security:
- Restrict direct table access
- Users can only execute authorized operations

4. Reusability and Maintenance:
- Can be reused across multiple applications
- Changes to business logic only need to be made in one place`,code_example:""},{question:"What is a UNION operation, and how is it used?",answer:`The UNION operator combines the result sets of two or more SELECT queries into a single result set, removing duplicate rows. This is useful when we need a consolidated view of data from multiple tables or queries that have similar structure.

`,code_example:`SELECT Name FROM Customers
UNION
SELECT Name FROM Employees;`},{question:"What is the difference between UNION and UNION ALL?",answer:`UNION: Removes duplicate rows from the result set, ensuring only unique rows are returned.
UNION ALL: Includes all rows from each query, including duplicates.
Performance-wise, UNION ALL is faster because it doesn't require an additional step to remove duplicates.

Example:

SELECT Name FROM Customers
UNION ALL
SELECT Name FROM Employees;`,code_example:`SELECT Name FROM Customers
UNION ALL
SELECT Name FROM Employees;`},{question:"How does the CASE statement work in SQL?",answer:`The CASE statement is SQL's way of implementing conditional logic in queries. It evaluates conditions and returns a value based on the first condition that evaluates to true. If no condition is met, it can return a default value using the ELSE clause.

`,code_example:`SELECT ID,
       CASE
           WHEN Salary > 100000 THEN 'High'
           WHEN Salary BETWEEN 50000 AND 100000 THEN 'Medium'
           ELSE 'Low'
       END AS SalaryLevel
FROM Employees;`},{question:"What are scalar functions in SQL?",answer:`Scalar functions operate on individual values and return a single value as a result. They are often used for formatting or converting data. Common examples include:

- LEN(): Returns the length of a string
- ROUND(): Rounds a numeric value
- CONVERT(): Converts a value from one data type to another

Example:

`,code_example:"SELECT LEN('Example') AS StringLength;"},{question:"What is the purpose of the COALESCE function?",answer:`The COALESCE function returns the first non-NULL value from a list of expressions. It's commonly used to provide default values or handle missing data gracefully.

Example:

SELECT COALESCE(NULL, NULL, 'Default Value') AS Result;`,code_example:"SELECT COALESCE(NULL, NULL, 'Default Value') AS Result;"},{question:"What are the differences between SQL's COUNT() and SUM() functions?",answer:`1. COUNT(): Counts the number of rows or non-NULL values in a column.

`,code_example:"SELECT COUNT(*) FROM Orders;   SELECT SUM(TotalAmount) FROM Orders;"},{question:"What is the difference between the NVL and NVL2 functions?",answer:`NVL(): Replaces a NULL value with a specified replacement value.

NVL2(): Evaluates two values:
- If the first argument is NOT NULL, returns the second argument
- If the first argument is NULL, returns the third argument

`,code_example:"SELECT NVL(Salary, 0) AS AdjustedSalary  FROM Employees;"},{question:"How does the RANK() function differ from DENSE_RANK()?",answer:`RANK(): Assigns a rank to each row, with gaps if there are ties.
DENSE_RANK(): Assigns consecutive ranks without any gaps.

`,code_example:`SELECT Name, Salary, RANK() OVER (ORDER BY Salary DESC) AS Rank
FROM Employees;`},{question:"What is the difference between ROW_NUMBER() and RANK()?",answer:`ROW_NUMBER(): Assigns a unique number to each row regardless of ties.
RANK(): Assigns the same number to tied rows and leaves gaps for subsequent ranks.

`,code_example:`SELECT Name, ROW_NUMBER() OVER (ORDER BY Salary DESC) AS RowNum
FROM Employees;`},{question:"What are common table expressions (CTEs) in SQL?",answer:`A CTE is a temporary result set defined within a query. It improves query readability and can be referenced multiple times.

`,code_example:`WITH TopSalaries AS (
    SELECT Name, Salary
    FROM Employees
    WHERE Salary > 50000
)
SELECT * FROM TopSalaries WHERE Name LIKE 'A%';`},{question:"What are window functions, and how are they used?",answer:"Window functions perform calculations across a set of rows that are related to the current row. Unlike aggregate functions, they don't collapse the result set.",code_example:`SELECT Name, Salary, SUM(Salary) OVER (ORDER BY Salary) AS RunningTotal
FROM Employees;`},{question:"What is the difference between an index and a key in SQL?",answer:`1. Index:
- An index is a database object created to speed up data retrieval
- It stores a sorted reference to table data
- Helps database engine find rows more quickly than scanning entire table
- Example: A non-unique index on LastName allows quick lookups

2. Key:
- A logical concept enforcing rules for uniqueness or relationships
- PRIMARY KEY uniquely identifies each row
- FOREIGN KEY maintains referential integrity between tables`,code_example:""},{question:"How does indexing improve query performance?",answer:`Indexing allows the database to locate and access rows corresponding to query conditions much faster than scanning the entire table. Instead of reading each row sequentially, the database uses the index to jump directly to relevant data pages. This reduces disk I/O operations and speeds up query execution.

`,code_example:`CREATE INDEX idx_lastname ON Employees(LastName);
SELECT * FROM Employees WHERE LastName = 'Smith';`},{question:"What are the trade-offs of using indexes in SQL databases?",answer:`Advantages:
- Faster query performance for SELECT queries with WHERE clauses
- Improved sorting and filtering efficiency
- Better JOIN performance

Disadvantages:
- Increased storage space for index structures
- Additional overhead for write operations (INSERT, UPDATE, DELETE)
- Slower bulk data loads due to index maintenance

In short, indexes make read operations faster but can slow down write operations and increase storage requirements.`,code_example:""},{question:"What is the difference between clustered and non-clustered indexes?",answer:`1. Clustered Index:
- Organizes physical data in the table itself by indexed column(s)
- Table can have only one clustered index
- Improves range queries and sorting
- Example: If EmployeeID is clustered, rows are physically sorted by EmployeeID

2. Non-Clustered Index:
- Maintains separate structure with references to physical data
- Table can have multiple non-clustered indexes
- Useful for specific query conditions
- Example: Non-clustered index on LastName enables fast lookups even if table is sorted differently`,code_example:""},{question:"What are temporary tables, and how are they used?",answer:`Temporary tables are tables that exist only for the duration of a session or transaction. They come in two types:

1. Local Temporary Tables (#):
- Prefixed with # (e.g., #TempTable)
- Only visible to creating session
- Automatically dropped when session ends

2. Global Temporary Tables (##):
- Prefixed with ## (e.g., ##GlobalTempTable)
- Visible to all sessions
- Dropped when all referencing sessions close

`,code_example:`CREATE TABLE #TempResults (ID INT, Value VARCHAR(50));
INSERT INTO #TempResults VALUES (1, 'Test');
SELECT * FROM #TempResults;`},{question:"What is a materialized view, and how does it differ from a standard view?",answer:`Standard View:
- Virtual table defined by a query
- No stored data; query executes each time view is referenced
- Shows real-time data

Materialized View:
- Physical table storing query results
- Data is precomputed and stored for faster reads
- Requires periodic refreshes to stay current

Example: A materialized view storing aggregated sales data that updates nightly for fast reporting.`,code_example:""},{question:"What is a sequence in SQL?",answer:"A sequence is a database object that generates unique numeric values in series. It's commonly used for unique identifiers like primary keys.",code_example:`CREATE SEQUENCE seq_emp_id START WITH 1 INCREMENT BY 1;
SELECT NEXT VALUE FOR seq_emp_id; -- Returns 1
SELECT NEXT VALUE FOR seq_emp_id; -- Returns 2`},{question:"What are the advantages of using sequences over identity columns?",answer:`Sequences offer several benefits over identity columns:

1. Greater Flexibility:
- Can specify start values, increments, and maximum values
- Can be reused across multiple tables

2. Dynamic Adjustment:
- Can alter sequence without modifying table structure

3. Cross-Table Consistency:
- Use single sequence for multiple related tables
- Ensures unique identifiers across tables`,code_example:""},{question:"How do constraints improve database integrity?",answer:`Constraints enforce data rules that prevent invalid or inconsistent data:

1. NOT NULL: Ensures column cannot contain NULL values

2. UNIQUE: Ensures all values in column are distinct

3. PRIMARY KEY: Combines NOT NULL and UNIQUE for unique row identification

4. FOREIGN KEY: Ensures referential integrity between tables

5. CHECK: Validates values meet specific criteria
   Example: CHECK (Salary > 0)

By automatically enforcing these rules, constraints maintain data reliability and consistency.`,code_example:""},{question:"What is the difference between a local and a global temporary table?",answer:`Local Temporary Table:
- Prefixed with # (e.g., #TempTable)
- Exists only within the session that created it
- Automatically dropped when the session ends

Global Temporary Table:
- Prefixed with ## (e.g., ##GlobalTempTable)
- Visible to all sessions
- Dropped only when all sessions referencing it are closed

`,code_example:`CREATE TABLE #LocalTemp (ID INT);
CREATE TABLE ##GlobalTemp (ID INT);`},{question:"What is the purpose of the SQL MERGE statement?",answer:`The MERGE statement combines multiple operations INSERT, UPDATE, and DELETE into one. It is used to synchronize two tables by:

- Inserting rows that don't exist in the target table
- Updating rows that already exist
- Deleting rows from the target table based on conditions`,code_example:`MERGE INTO TargetTable T  
USING SourceTable S  
ON T.ID = S.ID  
WHEN MATCHED THEN  
    UPDATE SET T.Value = S.Value  
WHEN NOT MATCHED THEN  
    INSERT (ID, Value) VALUES (S.ID, S.Value);`},{question:"How can you handle duplicates in a query without using DISTINCT?",answer:"1. GROUP BY: Aggregate rows to eliminate duplicates 2. ROW_NUMBER(): Assign a unique number to each row and filter by that",code_example:`-- Using GROUP BY
SELECT Column1, MAX(Column2)  
FROM TableName  
GROUP BY Column1;

-- Using ROW_NUMBER
WITH CTE AS (  
    SELECT Column1, Column2, ROW_NUMBER() OVER (PARTITION BY Column1 ORDER BY Column2) AS RowNum  
    FROM TableName  
)  
SELECT * FROM CTE WHERE RowNum = 1;`},{question:"What is a correlated subquery?",answer:"A correlated subquery is a subquery that references columns from the outer query. It is re-executed for each row processed by the outer query. This makes it more dynamic, but potentially less efficient.",code_example:`SELECT Name,  
       (SELECT COUNT(*)  
        FROM Orders  
        WHERE Orders.CustomerID = Customers.CustomerID) AS OrderCount  
FROM Customers;`},{question:"What are partitioned tables, and when should we use them?",answer:`Partitioned tables divide data into smaller, more manageable segments based on a column's value (e.g., date or region). Each partition is stored separately, making queries that target a specific partition more efficient. It is used when:

- Large tables with millions or billions of rows
- Scenarios where queries frequently filter on partitioned columns (e.g., year, region)
- To improve maintenance operations, such as archiving older partitions without affecting the rest of the table`,code_example:""},{question:"What are the ACID properties of a transaction?",answer:`ACID is an acronym that stands for Atomicity, Consistency, Isolation, and Durability—four key properties that ensure database transactions are processed reliably:

1. Atomicity:
- A transaction is treated as a single unit of work, meaning all operations must succeed or fail as a whole
- If any part of the transaction fails, the entire transaction is rolled back

2. Consistency:
- A transaction must take the database from one valid state to another, maintaining all defined rules and constraints
- This ensures data integrity is preserved throughout the transaction process

3. Isolation:
- Transactions should not interfere with each other
- Even if multiple transactions occur simultaneously, each must operate as if it were the only one in the system until it is complete

4. Durability:
- Once a transaction is committed, its changes must persist, even in the event of a system failure
- This ensures the data remains stable after the transaction is successfully completed`,code_example:""},{question:"What are the differences between isolation levels in SQL?",answer:`Isolation levels control how transactions interact with each other:

1. Read Uncommitted:
- Lowest isolation level
- Can read uncommitted changes from other transactions
- Allows dirty reads (reading data that may be rolled back)
- No locking, highest concurrency

2. Read Committed:
- Default in most databases
- Only reads committed data
- Prevents dirty reads
- Still allows non-repeatable reads and phantom reads

3. Repeatable Read:
- Ensures consistent reads within transaction
- Prevents both dirty reads and non-repeatable reads
- May still allow phantom reads
- Uses more locks than Read Committed

4. Serializable:
- Highest isolation level
- Complete transaction isolation
- Prevents all concurrency phenomena
- Highest locking overhead, lowest concurrency

Higher isolation levels provide better data consistency but reduce concurrent performance due to increased locking.`,code_example:""},{question:"What is the purpose of the WITH (NOLOCK) hint in SQL Server?",answer:`The WITH (NOLOCK) hint is a query optimization feature in SQL Server that:

1. Read Behavior:
- Allows reading data without acquiring shared locks
- Reads uncommitted data ("dirty reads")
- Can read data that may be rolled back

2. Performance Benefits:
- Reduces lock contention
- Improves query performance on frequently updated tables
- Useful for reporting queries that don't require perfect accuracy

3. Risks and Considerations:
- May return inconsistent or incorrect results
- Can miss or duplicate rows if data changes during query execution
- Should not be used for transactions requiring data accuracy

`,code_example:"SELECT *  FROM Orders WITH (NOLOCK);"},{question:"How do you handle deadlocks in SQL databases?",answer:`Deadlocks occur when two or more transactions hold resources that the other transactions need, resulting in a cycle of dependency. Strategies to handle deadlocks include:

1. Deadlock Detection and Retry:
- Database systems detect deadlocks and terminate one transaction
- Terminated transaction can be retried after others complete
- Example: Using TRY/CATCH blocks to catch deadlock errors and retry

2. Reducing Lock Contention:
- Use indexes and optimized queries to minimize lock duration
- Break transactions into smaller steps
- Keep transactions short and focused

3. Proper Isolation Levels:
- Lower isolation levels can reduce locking overhead
- Higher levels like Serializable ensure predictable ordering
- Choose based on consistency vs performance needs

4. Consistent Resource Access:
- Ensure transactions acquire resources in same order
- Prevents cyclical dependencies between transactions
- Example: Always update Table A before Table B`,code_example:""},{question:"What is a database snapshot, and how is it used?",answer:`A database snapshot is a read-only, static view of a database at a specific point in time. Key uses include:

1. Reporting:
- Allows querying consistent dataset without affecting live operations
- Provides stable data for analysis and reporting

2. Backup and Recovery:
- Serves as point-in-time recovery source
- Useful for reverting unwanted changes

3. Testing:
- Provides stable dataset for testing
- No risk of modifying original data`,code_example:`CREATE DATABASE MySnapshot ON
(
    NAME = MyDatabase_Data,
    FILENAME = 'C:\\Snapshots\\MyDatabase_Snapshot.ss'
)
AS SNAPSHOT OF MyDatabase;`},{question:"What are the differences between OLTP and OLAP systems?",answer:`1. OLTP (Online Transaction Processing):
- Handles large volumes of simple transactions (e.g., order entry, inventory updates)
- Optimized for fast, frequent reads and writes
- Normalized schema to ensure data integrity and consistency
- Examples: e-commerce sites, banking systems

2. OLAP (Online Analytical Processing):
- Handles complex queries and analysis on large datasets
- Optimized for read-heavy workloads and data aggregation
- Denormalized schema (e.g., star or snowflake schemas) to support faster querying
- Examples: Business intelligence reporting, data warehousing`,code_example:""},{question:"What is a live lock, and how does it differ from a deadlock?",answer:`1. Live Lock:
- Occurs when two or more transactions keep responding to each other's changes, but no progress is made
- Unlike a deadlock, the transactions are not blocked; they are actively running, but they cannot complete
- Example: Two transactions repeatedly rolling back and retrying due to conflicts

2. Deadlock:
- Occurs when transactions are blocked waiting for each other to release locks
- No progress can be made unless one of the transactions is terminated
- Example: Transaction A holds lock on Table 1 and needs Table 2, while Transaction B holds Table 2 and needs Table 1`,code_example:`-- Example scenario that could cause a live lock:
BEGIN TRANSACTION;
  UPDATE AccountA SET Balance = Balance - 100
  WHERE Balance >= 100;
  
  -- Another transaction might update AccountA
  -- causing this transaction to roll back and retry
  -- creating a cycle of retries without progress
  
  UPDATE AccountB SET Balance = Balance + 100;
COMMIT;`},{question:"What is the purpose of the SQL EXCEPT operator?",answer:`The EXCEPT operator is used to return rows from one query's result set that are not present in another query's result set. It effectively performs a set difference, showing only the data that is unique to the first query.

Use Case:
- To find discrepancies between datasets
- To verify that certain data exists in one dataset but not in another

Performance Considerations:
- EXCEPT works best when the datasets involved have appropriate indexing and when the result sets are relatively small
- Large datasets without indexes may cause slower performance because the database has to compare each row`,code_example:`SELECT ProductID FROM ProductsSold
EXCEPT
SELECT ProductID FROM ProductsReturned;`},{question:"How do you implement dynamic SQL, and what are its advantages and risks?",answer:`Dynamic SQL is SQL code that is constructed and executed at runtime rather than being fully defined and static. Key aspects include:

1. Advantages:
- Flexibility: Can adapt to different conditions, tables, or columns at runtime
- Simplifies Complex Logic: Single dynamically constructed query handles multiple scenarios
- Reusability: Can generate queries based on parameters and conditions

2. Risks:
- SQL Injection Vulnerabilities: User input must be carefully sanitized
- Performance Overhead: May not benefit from cached execution plans
- Complexity in Debugging: Dynamic queries are harder to read and troubleshoot

3. Best Practices:
- Always use parameterized queries
- Validate and sanitize all inputs
- Consider stored procedures for common dynamic scenarios
- Document complex dynamic SQL thoroughly`,code_example:`DECLARE @sql NVARCHAR(MAX);
DECLARE @TableName NVARCHAR(128) = 'Customers';

SET @sql = N'SELECT * FROM ' + QUOTENAME(@TableName) + 
          N' WHERE Status = @Status';

EXEC sp_executesql @sql,
     N'@Status varchar(20)',
     @Status = 'Active';`},{question:"What is the difference between horizontal and vertical partitioning?",answer:`Partitioning is a database technique used to divide data into smaller, more manageable pieces:

1. Horizontal Partitioning:
- Divides the rows of a table into multiple partitions based on values in a specific column
- Example: Splitting a customer table into separate partitions by geographic region or by year
- Use Case: When dealing with large datasets, horizontal partitioning can improve performance by limiting the number of rows scanned for a query

2. Vertical Partitioning:
- Divides the columns of a table into multiple partitions
- Example: Storing infrequently accessed columns (e.g., large text or binary fields) in a separate table or partition
- Use Case: Helps in optimizing storage and query performance by separating commonly used columns from less frequently accessed data

3. Key Difference:
- Horizontal partitioning is row-based, focusing on distributing the dataset's rows across partitions
- Vertical partitioning is column-based, aiming to separate less-used columns into different partitions or tables`,code_example:`-- Horizontal Partitioning Example
CREATE TABLE Customers_USA PARTITION OF Customers
    FOR VALUES IN ('USA');

-- Vertical Partitioning Example
CREATE TABLE Customer_Basic (
    customer_id INT,
    name VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE Customer_Details (
    customer_id INT,
    profile_photo BLOB,
    biography TEXT
);`},{question:"What are the considerations for indexing very large tables?",answer:`Indexing large tables requires careful planning and monitoring. Key considerations include:

1. Indexing Strategy:
- Focus on frequently queried columns and JOIN/WHERE conditions
- Avoid over-indexing as it increases storage and maintenance costs

2. Index Types:
- Use clustered indexes for primary key lookups and range queries
- Use non-clustered indexes for filtering, ordering, and covering specific queries

3. Partitioned Indexes:
- Consider local indexes for each partition in partitioned tables
- Improves manageability and query performance for specific partitions

4. Maintenance Overhead:
- Plan index rebuilds during off-peak hours
- Monitor and manage index fragmentation
- Consider the impact on DML operations

5. Monitoring and Tuning:
- Regularly evaluate query performance and execution plans
- Remove unused or rarely accessed indexes
- Balance query performance gains against maintenance costs`,code_example:`-- Create clustered index
CREATE CLUSTERED INDEX IX_OrderDate
ON Orders(OrderDate);

-- Create covering index
CREATE NONCLUSTERED INDEX IX_CustomerOrders
ON Orders(CustomerID, OrderDate)
INCLUDE (OrderTotal, Status);

-- Monitor index usage
SELECT 
    DB_NAME(database_id) as DatabaseName,
    OBJECT_NAME(object_id) as TableName,
    index_id,
    user_seeks,
    user_scans
FROM sys.dm_db_index_usage_stats
WHERE database_id = DB_ID();`},{question:"What is the difference between database sharding and partitioning?",answer:`1. Sharding:
- Splits database into multiple smaller, independent databases (shards)
- Each shard operates on separate servers with its own subset of data
- Used for horizontal scaling to handle massive data volumes
- Example: Global user database divided by region (NA, EU, Asia shards)
- Key benefit: Independent querying reduces load on individual servers

2. Partitioning:
- Splits a single table into smaller, logical pieces within same database
- Logical organization of data to optimize performance
- Used to improve query speed and simplify maintenance
- Example: Sales table partitioned by year for efficient historical queries
- Key benefit: Reduces data scan requirements for targeted queries`,code_example:`-- Sharding Example (conceptual)
CREATE DATABASE shard_na;  -- North America shard
CREATE DATABASE shard_eu;  -- Europe shard

-- Partitioning Example
CREATE TABLE Sales (
    sale_id INT,
    sale_date DATE,
    amount DECIMAL
) PARTITION BY RANGE (YEAR(sale_date)) (
    PARTITION p2021 VALUES LESS THAN (2022),
    PARTITION p2022 VALUES LESS THAN (2023),
    PARTITION p2023 VALUES LESS THAN (2024)
);`},{question:"What are the best practices for writing optimized SQL queries?",answer:`Key best practices for writing optimized SQL queries include:

1. Write Simple, Clear Queries:
- Avoid overly complex joins and subqueries
- Use straightforward, well-structured SQL
- Break down complex logic into manageable parts

2. Filter Data Early:
- Apply WHERE clauses as early as possible
- Use indexed columns in WHERE clauses
- Filter before joins to reduce data volume

3. Avoid SELECT *:
- Only retrieve needed columns
- Reduces I/O and network traffic
- Improves overall query performance

4. Use Indexes Effectively:
- Create indexes for frequently filtered columns
- Index JOIN and ORDER BY columns
- Regularly maintain and monitor indexes

5. Optimize Joins:
- Choose appropriate join types (INNER, LEFT, etc.)
- Join on indexed columns when possible
- Consider join order for best performance

6. Use Query Analysis Tools:
- Review execution plans regularly
- Monitor query performance metrics
- Identify and address bottlenecks

7. Consider Data Volume:
- Use temporary tables or CTEs for complex operations
- Pre-aggregate frequently accessed data
- Partition large tables when appropriate`,code_example:`-- Bad Practice
SELECT * 
FROM Orders o 
JOIN Customers c ON o.CustomerID = c.CustomerID;

-- Good Practice
SELECT 
    o.OrderID,
    o.OrderDate,
    c.CustomerName
FROM Orders o 
INNER JOIN Customers c ON o.CustomerID = c.CustomerID
WHERE o.OrderDate >= '2023-01-01'
AND c.Region = 'North'
INDEX HINT(Orders IX_OrderDate);`},{question:"How can you monitor query performance in a production database?",answer:`1. Use Execution Plans:
- Review the execution plan of queries to understand how the database is retrieving data
- Identify which indexes are being used and potential bottlenecks
- Analyze query costs and resource usage

2. Analyze Wait Statistics:
- Identify where queries are waiting (locks, I/O, CPU)
- Pinpoint the cause of slowdowns
- Track blocking and deadlock events

3. Leverage Built-in Monitoring Tools:
- SQL Server: Query Store, DMVs, performance dashboards
- MySQL: EXPLAIN, SHOW PROFILE, Performance Schema
- PostgreSQL: EXPLAIN (ANALYZE), pg_stat_statements

4. Set Up Alerts and Baselines:
- Monitor key performance metrics (query duration, IOPS, CPU)
- Set thresholds for alerts
- Establish baselines to identify performance degradation

5. Continuous Query Tuning:
- Regularly review and tune queries as data grows
- Remove unused or inefficient indexes
- Re-evaluate indexing strategy periodically`,code_example:`-- SQL Server monitoring examples

-- Check query execution stats
SELECT 
    qs.execution_count,
    qs.total_elapsed_time / 1000 as total_ms,
    qs.total_elapsed_time / 1000 / qs.execution_count as avg_ms,
    qt.text
FROM sys.dm_exec_query_stats qs
CROSS APPLY sys.dm_exec_sql_text(qs.sql_handle) qt
ORDER BY avg_ms DESC;

-- Monitor wait statistics
SELECT 
    wait_type,
    waiting_tasks_count,
    wait_time_ms
FROM sys.dm_os_wait_stats
WHERE wait_time_ms > 0
ORDER BY wait_time_ms DESC;`},{question:"What are the trade-offs of using indexing versus denormalization?",answer:`1. Indexing:

Advantages:
- Speeds up read operations and improves query performance without changing the data structure
- Can be applied incrementally and is reversible if not effective
- Consider indexing when you need faster lookups without altering the data model

Disadvantages:
- Slows down write operations as indexes need to be maintained
- Requires additional storage

2. Denormalization:

Advantages:
- Simplifies query logic by storing pre-joined or aggregated data
- Can improve performance for read-heavy workloads where complex joins are frequent
- Consider denormalization when complex joins or repeated aggregations significantly slow down queries

Disadvantages:
- Introduces data redundancy, which can lead to inconsistencies
- Increases storage requirements
- Makes updates more complex, as redundant data must be synchronized`,code_example:`-- Indexing Example
CREATE INDEX idx_customer_name 
ON Customers(LastName, FirstName);

-- Denormalization Example
CREATE TABLE OrderSummary (
    OrderID INT,
    CustomerName VARCHAR(100),  -- Denormalized from Customers
    TotalAmount DECIMAL(10,2), -- Pre-calculated
    OrderStatus VARCHAR(50),
    ShippingAddress TEXT       -- Denormalized from Addresses
);`},{question:"How does SQL handle recursive queries?",answer:`SQL handles recursive queries using Common Table Expressions (CTEs). Key components include:

1. Anchor Member:
- The initial query that starts the recursion
- Typically selects root nodes or starting points

2. Recursive Member:
- Query that references the CTE to continue building results
- Joins with the original table to get next level of data

3. Termination Condition:
- Ensures recursion stops at certain depth/condition
- Prevents infinite loops

4. Common Use Cases:
- Processing hierarchical data (org charts, categories)
- Traversing graphs or trees
- Finding paths between nodes

5. Performance Considerations:
- Use indexes on join/filter columns
- Avoid deep recursion levels
- Consider materialized paths for static hierarchies`,code_example:`WITH RecursiveCTE (ID, ParentID, Name, Level) AS (
    -- Anchor member: Get root nodes
    SELECT ID, ParentID, Name, 0 AS Level
    FROM Categories
    WHERE ParentID IS NULL
    
    UNION ALL
    
    -- Recursive member: Get child nodes
    SELECT c.ID, c.ParentID, c.Name, r.Level + 1
    FROM Categories c
    INNER JOIN RecursiveCTE r ON c.ParentID = r.ID
    WHERE r.Level < 5  -- Termination condition
)
SELECT * FROM RecursiveCTE
ORDER BY Level, ID;`},{question:"What are the differences between transactional and analytical queries?",answer:`1. Transactional Queries:
- Focus on individual, short-term operations such as inserts, updates, and deletes
- Optimize for high-throughput and low-latency
- Often used in OLTP (Online Transaction Processing) systems
- Typically involve small amounts of data per operation

2. Analytical Queries:
- Involve complex aggregations, multi-dimensional analysis, and data transformations
- Typically read-heavy, processing large amounts of historical or aggregated data
- Often used in OLAP (Online Analytical Processing) systems
- Focus on data insights and trends

3. Key Differences:
- Query Complexity: Transactional queries are simple and focused, while analytical queries involve complex joins and aggregations
- Data Volume: Transactional queries process small data sets, analytical queries process large historical datasets
- Performance Goals: Transactional queries prioritize response time, analytical queries prioritize throughput
- System Design: OLTP systems optimize for concurrent transactions, OLAP systems optimize for complex analysis`,code_example:`-- Transactional Query Example
INSERT INTO Orders (CustomerID, ProductID, Quantity)
VALUES (1001, 5502, 2);

-- Analytical Query Example
SELECT 
    c.CustomerSegment,
    p.Category,
    YEAR(o.OrderDate) as Year,
    SUM(o.Quantity * p.Price) as TotalRevenue,
    COUNT(DISTINCT o.OrderID) as OrderCount,
    AVG(o.Quantity) as AvgOrderSize
FROM Orders o
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN Products p ON o.ProductID = p.ProductID
GROUP BY 
    c.CustomerSegment,
    p.Category,
    YEAR(o.OrderDate)
HAVING COUNT(DISTINCT o.OrderID) > 100;`},{question:"How can you ensure data consistency across distributed databases?",answer:`1. Use Distributed Transactions:
- Implement two-phase commit (2PC) to ensure all participating databases commit changes simultaneously or roll back if any part fails
- Provides strong consistency guarantees but can impact performance

2. Implement Eventual Consistency:
- Allow data to become consistent over time when strong consistency isn't required
- Common in distributed systems prioritizing high availability
- Use version numbers or timestamps to track changes

3. Conflict Resolution Mechanisms:
- Use versioning, timestamps, or conflict detection rules
- Define clear resolution strategies for conflicting updates
- Implement retry logic for failed transactions

4. Data Replication and Synchronization:
- Use reliable replication strategies (synchronous/asynchronous)
- Monitor replication lag and health
- Implement failover and recovery procedures

5. Regular Audits and Validation:
- Periodically verify data consistency across databases
- Implement automated consistency checks
- Maintain audit logs for troubleshooting`,code_example:`-- Two-Phase Commit Example
BEGIN DISTRIBUTED TRANSACTION;

-- Update Order in Database 1
UPDATE OrdersDB1.dbo.Orders
SET Status = 'Completed'
WHERE OrderID = 12345;

-- Update Inventory in Database 2
UPDATE InventoryDB2.dbo.Stock
SET Quantity = Quantity - 1
WHERE ProductID = 789;

COMMIT TRANSACTION;

-- Consistency Check Example
SELECT 
    o1.OrderID,
    o1.Status as DB1_Status,
    o2.Status as DB2_Status
FROM OrdersDB1.dbo.Orders o1
FULL OUTER JOIN OrdersDB2.dbo.Orders o2
    ON o1.OrderID = o2.OrderID
WHERE o1.Status != o2.Status
    OR o1.OrderID IS NULL
    OR o2.OrderID IS NULL;`},{question:"What is the purpose of the SQL PIVOT operator?",answer:`The PIVOT operator transforms rows into columns, making it easier to create summary reports. Key aspects include:

1. Row-to-Column Transformation:
- Converts row values into column headers
- Aggregates data based on specified columns
- Creates a cross-tabulated view of the data

2. Common Use Cases:
- Creating summary reports with dynamic columns
- Transforming transactional data into analytical formats
- Generating crosstab queries for data analysis

3. Important Considerations:
- Requires an aggregation function (SUM, COUNT, etc.)
- Column values must be known in advance
- Can make queries more complex and harder to maintain

4. Alternatives:
- CASE statements for simple pivoting
- Dynamic SQL for unknown column values
- Application-level pivoting for complex scenarios`,code_example:`SELECT ProductID, [2021], [2022]  
FROM (
    SELECT ProductID, YEAR(SaleDate) AS SaleYear, Amount  
    FROM Sales  
) AS Source  
PIVOT (
    SUM(Amount)  
    FOR SaleYear IN ([2021], [2022])  
) AS PivotTable;`},{question:"What is a bitmap index, and how does it differ from a B-tree index?",answer:`1. Bitmap Index:
- Represents data with bitmaps (arrays of bits) to indicate the presence or absence of a value in each row
- Efficient for low-cardinality columns, such as "gender" or "yes/no" fields
- Can perform fast logical operations (AND, OR, NOT) on multiple columns simultaneously

2. B-tree Index:
- Uses a balanced tree structure to store indexed data in a sorted order
- Suitable for high-cardinality columns (e.g., unique identifiers, large ranges of values)
- Supports range-based queries efficiently

3. Key Differences:
- Bitmap indexes excel with low-cardinality data and complex boolean conditions
- B-tree indexes are better for unique or high-cardinality data and range queries
- Storage requirements differ: bitmap indexes can be more space-efficient for low-cardinality data
- Maintenance overhead varies: bitmap indexes require more work during DML operations`,code_example:`-- Create B-tree index (common in most databases)
CREATE INDEX btree_idx_customer_id
ON Customers(customer_id);

-- Create bitmap index (Oracle syntax)
CREATE BITMAP INDEX bmp_idx_status
ON Orders(status);

-- Query using bitmap index
SELECT COUNT(*)
FROM Orders
WHERE status = 'COMPLETED'
AND payment_method = 'CREDIT_CARD';`}],rn=[{question:"What is cybersecurity, and why is it important?",answer:"Cybersecurity protects computer systems, networks, and data from theft, damage, or unauthorized access. It's important to safeguard sensitive information, maintain privacy, prevent financial losses, and protect critical infrastructure from cyber threats.",type:"general"},{question:"Define the terms Virus, Malware, and Ransomware.",answer:`Virus: A program that replicates itself and spreads to other files or systems, often causing harm.
Malware: A broader term encompassing any malicious software that disrupts or gains unauthorized access to computer systems.
Ransomware: A malicious software encrypting files or computer systems and requesting a ransom for their decryption.`,type:"general"},{question:"Explain the difference between a Threat, Vulnerability, and Risk in cybersecurity.",answer:`Threat: Any potential danger or harmful event that can exploit vulnerabilities and negatively impact security.
Vulnerability: Weaknesses or gaps in security measures that threats can exploit.
Risk: The probability of a threat capitalizing on a vulnerability and the potential consequences or damage it may inflict.`,type:"general"},{question:"What is Phishing? Provide an example.",answer:`Phishing: A cyberattack in which malicious actors employ deceptive emails or messages to deceive individuals into disclosing sensitive information.
Example: An email claiming to be from a bank, requesting the recipient to provide their login credentials by clicking a link that leads to a fake website.`,type:"general"},{question:"How do firewalls protect network security?",answer:"Firewalls serve as protective barriers, overseeing and screening both inbound and outbound network traffic in accordance with established security regulations. They block unauthorized access and help prevent malicious data from entering or leaving a network.",type:"general"},{question:"What is a VPN and why is it used?",answer:"A Virtual Private Network encrypts and secures internet connections, ensuring privacy and anonymity. It protects data from eavesdropping, accesses restricted content, and enhances public Wi-Fi security.",type:"general"},{question:"Explain the concept of a secure Password.",answer:"A secure password is complex, lengthy, and difficult to guess. It comprises a combination of uppercase and lowercase letters, numbers, and special characters, with the requirement that this combination should be distinct for every individual account.",type:"general"},{question:"What are the common techniques for securing a computer network?",answer:"Techniques include using strong passwords, regular updates and patch management, implementing firewalls, using intrusion detection systems, and conducting security audits.",type:"general"},{question:"What is two-factor authentication, and why is it important?",answer:`Two-factor authentication enhances security by necessitating users to furnish two distinct forms of verification, typically a password and a temporary code, thereby bolstering protection.
It's important because even if a password is compromised, unauthorized access is prevented without the second factor.`,type:"general"},{question:"Define the terms Encryption and Decryption.",answer:`Encryption: Converting plaintext data into a coded format to protect it from unauthorized access.
Decryption: Converting encrypted data back into its original, readable form.`,type:"general"},{question:"What is SSL encryption?",answer:"SSL (Secure Sockets Layer) encryption is a protocol that ensures secure data transmission between a user's web browser and a website server, protecting data during transit.",type:"general"},{question:"What is the difference between IDS and IPS?",answer:`IDS (Intrusion Detection System): Monitors network traffic and generates alerts when suspicious activity is detected.
IPS (Intrusion Prevention System): Not only detects but also actively blocks or prevents suspicious network activity.`,type:"general"},{question:"Explain what a security audit Is.",answer:"A security audit systematically evaluates an organization's information systems and security policies to assess their effectiveness, identify vulnerabilities, and recommend improvements.",type:"general"},{question:"What steps would you take if you discovered a security breach?",answer:"Isolate affected systems, contain the breach, notify relevant parties, investigate the incident, remediate vulnerabilities, and implement measures to prevent future breaches.",type:"general"},{question:"What is social engineering? Give an example.",answer:`Social engineering manipulates individuals to disclose confidential information or perform actions for malicious purposes.
Example: Pretending to be a trusted colleague and asking for login credentials over the phone.`,type:"general"},{question:"What are cookies in a web browser?",answer:"Cookies are stored by websites on a user's device. They are used to track user preferences, session information, and provide a personalized browsing experience.",type:"general"},{question:"What is a DDoS attack and how does it work?",answer:"A Distributed Denial of Service (DDoS) attack inundates a target server or network with excessive traffic originating from numerous sources, making it inaccessible to genuine users.",type:"general"},{question:"Explain what a security policy is.",answer:"A security policy comprises a collection of formally documented regulations, recommendations, and protocols that delineate an organization's methods to safeguard its information, assets, and technological resources.",type:"general"},{question:"What is the difference between symmetric and asymmetric encryption?",answer:`Symmetric Encryption uses a similar key for encryption and decryption.
Asymmetric Encryption employs a pair of keys, one public and one private. Data that is encrypted with one key can only be deciphered using the complementary key.`,type:"general"},{question:"How can you prevent a Man-In-The-Middle attack?",answer:"Use secure communication protocols, verify digital certificates, and avoid public Wi-Fi for sensitive transactions. Implementing strong encryption also helps.",type:"general"},{question:"What is a honeypot in cybersecurity?",answer:"A honeypot is a decoy system or network designed to attract attackers. It allows security professionals to study their tactics, techniques, and motivations.",type:"general"},{question:"Explain the concept of a digital signature.",answer:"A digital signature employs cryptographic methods to confirm the genuineness and unaltered state of a digital document or message, assuring both the sender's authenticity and the content's integrity.",type:"general"},{question:"What is a brute force attack?",answer:"It involves attackers employing a trial-and-error approach to find a password or encryption key by systematically testing every conceivable combination until they discover the correct one.",type:"general"},{question:"What are the common cyber threats today?",answer:"Common threats include malware, ransomware, phishing, DDoS attacks, insider threats, and zero-day vulnerabilities.",type:"general"},{question:"What is the role of patch management in maintaining security?",answer:"Patch management regularly applies updates and patches to software and systems to fix security vulnerabilities. It's crucial for preventing the exploitation of known weaknesses by attackers.",type:"general"},{question:"What is Public Key Infrastructure (PKI)?",answer:"PKI is a system of cryptographic techniques that enables secure communication over an insecure network. A public key and a private key pair are employed for various cryptographic operations such as encryption, decryption, the creation of digital signatures, and the validation of public keys through the use of certificate authorities (CAs) to ensure their authenticity.",type:"general"},{question:"What are the key elements of a strong security policy?",answer:"A strong security policy includes elements like access control, encryption, regular updates, user training, incident response plans, and compliance with relevant regulations.",type:"general"},{question:"How does a rootkit work and how would you detect it?",answer:"A rootkit is malicious software that gives attackers unauthorized access to a computer or network. Detection involves using specialized anti-rootkit tools and monitoring for suspicious system behavior.",type:"general"},{question:"Explain cross-site scripting and SQL injection.",answer:"XSS involves injecting malicious scripts into web applications, which can compromise user data. SQL Injection exploits vulnerabilities in SQL queries to manipulate a database. Both are forms of web application vulnerabilities.",type:"general"},{question:"What is a zero-day vulnerability?",answer:"It refers to a security vulnerability present in software or hardware that is undisclosed to the vendor and lacks an existing solution. This loophole can be leveraged by malicious actors before a remedy is created.",type:"general"},{question:"Discuss the ISO 27001/27002 standards.",answer:"It is a framework for information security management systems (ISMS), while ISO 27002 provides guidelines for implementing security controls and practices within an organization.",type:"general"},{question:"How do threat detection systems work?",answer:"Threat detection systems monitor network traffic and system logs to identify suspicious activities or potential security threats using predefined rules and machine learning algorithms.",type:"general"},{question:"What are the principles of ethical hacking?",answer:"Ethical hacking involves testing systems and networks for vulnerabilities to strengthen security. Principles include obtaining proper authorization, maintaining confidentiality, and responsible disclosure of findings.",type:"general"},{question:"What are the different types of network security?",answer:"Network security includes perimeter security, firewall protection, intrusion detection systems, VPNs, and network segmentation to safeguard data and resources.",type:"general"},{question:"What is risk assessment in cybersecurity?",answer:"Risk assessment in cybersecurity involves identifying, assessing, and prioritizing potential threats and vulnerabilities to make informed decisions on security measures.",type:"general"},{question:"How do you manage cryptographic keys?",answer:"Cryptographic keys should be securely generated, stored, rotated, and protected to maintain the confidentiality and integrity of encrypted data.",type:"general"},{question:"What are the common methods for secure data disposal?",answer:"Common methods include data shredding, overwriting, degaussing, and physical destruction to ensure that sensitive information cannot be recovered from storage media.",type:"general"},{question:"Explain the concept of endpoint security.",answer:"Endpoint security focuses on securing individual devices (endpoints) like computers and mobile devices by using antivirus, anti-malware, and intrusion detection systems.",type:"general"},{question:"Discuss the role of artificial intelligence in cybersecurity.",answer:"AI is used for threat detection, pattern recognition, and anomaly detection to improve cybersecurity defenses and automate incident response.",type:"general"},{question:"What is SQL injection and how can it be prevented?",answer:`SQL injection is a code injection technique where malicious SQL statements are inserted into input fields for execution. It can allow attackers to view, modify or delete database data.

Prevention methods include:
- Using parameterized queries/prepared statements
- Input validation and sanitization
- Limiting database permissions
- Using stored procedures
- Escaping special characters`,type:"software"},{question:"How do you secure an API?",answer:`Key methods to secure an API include:
- Authentication using tokens (JWT, OAuth)
- HTTPS/TLS encryption for data in transit
- Rate limiting to prevent abuse
- Input validation and sanitization
- Proper error handling without exposing details
- API key management
- Role-based access control (RBAC)
- Regular security audits and monitoring
- Using secure headers (CORS, CSP)
- Keeping dependencies updated`,type:"software"},{question:"What is security testing and what are its key components?",answer:`Security testing is a process of assessing and validating software systems to identify vulnerabilities, threats, and risks. Key components include:
- Vulnerability scanning to detect known security flaws
- Penetration testing to actively attempt exploiting vulnerabilities
- Security audits to review configurations and controls
- Code review to identify security issues in source code
- Compliance testing to ensure security standards are met
- Risk assessment to evaluate potential threats
- Authentication testing to verify access controls
- Encryption testing to validate data protection`,type:"software"},{question:"What is the CIA triad in cybersecurity?",answer:`The CIA triad is a fundamental security model consisting of three main components:

Confidentiality: Ensuring that information is accessible only to authorized parties and preventing unauthorized access.

Integrity: Maintaining and assuring the accuracy and completeness of data throughout its lifecycle, preventing unauthorized modification.

Availability: Ensuring that systems, services and data are accessible to authorized users when needed.

These three principles form the core foundation of information security and guide the development of security policies and controls.`,type:"general"}],on={security_q_a:rn},cn=[{name:"REST (Representational State Transfer)",description:"An architectural style for distributed hypermedia systems, emphasizing scalability, stateless operations, and standardized interfaces.",key_concepts:["Resources identified by URIs","Stateless operations","Uniform interface (GET, POST, PUT, DELETE)","Client-server architecture","Cacheable responses","Layered system"],characteristics:[{name:"Message Format",details:"Typically JSON or XML, with JSON being more common"},{name:"Transport",details:"HTTP/HTTPS"},{name:"Service Interface",details:"Uniform interface using standard HTTP methods"},{name:"Security",details:"HTTPS, API Keys, JWT, OAuth"}],advantages:["Simpler to use and implement","Better performance and scalability","Caching capabilities","Platform and language independent","Supports multiple data formats"],disadvantages:["Less standardized than SOAP","Lack of built-in security features","No strict contracts like WSDL","Limited to HTTP/HTTPS"],best_practices:["Use appropriate HTTP methods","Implement proper error handling","Version your APIs","Use meaningful resource URLs","Implement proper security measures"]},{name:"SOAP (Simple Object Access Protocol)",description:"A protocol for exchanging structured information in web services using XML, with built-in standards for security, transactions, and reliability.",key_concepts:["XML-based messaging","WSDL (Web Services Description Language)","Strong typing","Built-in error handling","Platform independent"],characteristics:[{name:"Message Format",details:"XML only"},{name:"Transport",details:"HTTP, SMTP, TCP, JMS"},{name:"Service Interface",details:"Defined by WSDL"},{name:"Security",details:"WS-Security, SSL"}],advantages:["Built-in error handling","Language, platform, and transport independent","Works well with enterprise-level security","Standardized","Built-in ACID compliance"],disadvantages:["More complex to use and implement","Requires more bandwidth","Slower than REST","Less flexible","Steeper learning curve"],best_practices:["Use WSDL for service definition","Implement proper error handling","Follow WS-I Basic Profile","Use appropriate security standards","Consider message size and performance"]}],ln={criteria:[{aspect:"Message Format",REST:"Supports multiple formats (JSON, XML, etc.)",SOAP:"XML only"},{aspect:"Transport Protocol",REST:"HTTP/HTTPS only",SOAP:"Multiple protocols (HTTP, SMTP, TCP, etc.)"},{aspect:"Security",REST:"HTTPS, custom implementation required",SOAP:"WS-Security, built-in standards"},{aspect:"Performance",REST:"Lightweight, better performance",SOAP:"More overhead, slower performance"},{aspect:"Caching",REST:"Can leverage HTTP caching",SOAP:"No built-in caching"},{aspect:"Service Contract",REST:"No strict contract, implicit",SOAP:"Explicit contract using WSDL"}],use_cases:{REST:["Public APIs","Mobile applications","Web services","Cloud services","Microservices"],SOAP:["Enterprise applications","Financial services","Payment gateways","Telecommunication services","Legacy system integration"]}},K={web_services:cn,comparison:ln},dn=[{name:"Microservices",description:"Architecture that structures an application as a collection of loosely coupled, independently deployable services.",key_characteristics:["Independent deployability","Decentralized data management","Service autonomy","Failure isolation","Scalability per service"],advantages:["Independent scaling","Technology flexibility","Faster deployment","Improved fault isolation"],challenges:["Distributed system complexity","Network latency","Data consistency","Service coordination"]},{name:"Monolithic",description:"Traditional unified model where all components of an application are interconnected and interdependent.",key_characteristics:["Single codebase","Shared database","Single deployment unit","Tightly coupled components"],advantages:["Simpler development","Easier testing","Faster communication","ACID transactions"],challenges:["Scaling difficulties","Technology lock-in","Large deployment risk","Complex maintenance"]}],un=[{name:"Load Balancing",description:"Distributes incoming network traffic across multiple servers.",types:["Round Robin","Least Connections","IP Hash","Weighted Round Robin"],use_cases:["High-traffic websites","API services","Distributed systems"]},{name:"Caching",description:"Stores frequently accessed data in faster storage to reduce database load.",types:["Client-side caching","CDN caching","Application caching","Database caching"],strategies:["Write-through","Write-back","Write-around","Cache-aside"]},{name:"Database Sharding",description:"Horizontally partitions data across multiple databases.",strategies:["Range based","Hash based","Directory based","Geographic based"],considerations:["Join complexity","Rebalancing overhead","Hot spot prevention","Global transactions"]},{name:"Horizontal Scaling",description:"Adding more machines to handle increased load instead of upgrading existing hardware.",strategies:["Stateless design","Session management","Distributed caching","Load balancing"],advantages:["Linear scaling capability","Better fault tolerance","Cost-effective","No hardware limits"],considerations:["Data consistency","Network complexity","Service discovery","Infrastructure management"]},{name:"Vertical Scaling",description:"Upgrading existing hardware resources (CPU, RAM, Storage) to handle increased load.",strategies:["Hardware upgrade","Resource optimization","Performance tuning","Memory management"],advantages:["Simpler architecture","Less operational complexity","Better data consistency","Lower network overhead"],considerations:["Hardware limits","Single point of failure","Downtime during upgrades","Cost efficiency"]},{name:"Database Replication",description:"Creating and maintaining copies of database across multiple servers.",types:["Master-Slave","Master-Master","Multi-Master","Circular Replication"],use_cases:["Read scaling","High availability","Disaster recovery","Geographic distribution"],challenges:["Replication lag","Consistency management","Conflict resolution","Failover complexity"]},{name:"Message Queues",description:"Decoupling system components through asynchronous message passing.",patterns:["Publisher-Subscriber","Point-to-Point","Request-Reply","Competing Consumers"],benefits:["Load leveling","System decoupling","Asynchronous processing","Peak handling"],implementations:["Apache Kafka","RabbitMQ","Amazon SQS","Redis Pub/Sub"]},{name:"CDN (Content Delivery Network)",description:"Distributed network of servers that delivers content based on user's geographic location.",use_cases:["Static content delivery","Media streaming","Dynamic content caching","Security (DDoS protection)"],benefits:["Reduced latency","Lower bandwidth costs","Improved availability","Global reach"],considerations:["Cache invalidation","Cost management","HTTPS setup","Origin fallback"]},{name:"Microservices",description:"Breaking down application into small, independent services that can be scaled independently.",benefits:["Independent scaling","Technology flexibility","Isolated failures","Faster deployment"],patterns:["API Gateway","Service Discovery","Circuit Breaker","Saga Pattern"],challenges:["Distributed transactions","Service coordination","Monitoring complexity","Network latency"]},{name:"Elastic Computing",description:"Automatically scaling resources up or down based on demand.",strategies:["Auto-scaling groups","Serverless computing","Container orchestration","Load-based scaling"],benefits:["Cost optimization","Automatic scaling","Resource efficiency","High availability"],platforms:["AWS Auto Scaling","Kubernetes HPA","Azure Scale Sets","Google Cloud Autoscaler"]},{name:"Data Partitioning",description:"Dividing data across multiple storage units to improve performance and manageability.",types:["Horizontal (Sharding)","Vertical (Functional)","Directory-Based","Hash-Based"],benefits:["Improved query performance","Better maintenance","Increased availability","Scalable data growth"],challenges:["Join operations","Rebalancing data","Schema changes","Transaction handling"]},{name:"Read Replicas",description:"Creating copies of database specifically for handling read operations.",use_cases:["Analytics queries","Reporting","Read-heavy workloads","Geographic distribution"],benefits:["Reduced main DB load","Better read performance","Geographical optimization","Analytics isolation"],challenges:["Replication lag","Consistency model","Additional costs","Maintenance overhead"]}],hn=[{name:"API Gateway",description:"Single entry point for all clients, handles routing, composition, and protocol translation.",responsibilities:["Authentication","SSL termination","Rate limiting","Load balancing","Request routing"]},{name:"Message Queue",description:"Enables asynchronous communication between components via messages.",use_cases:["Decoupling","Spike handling","Async processing","Work distribution"],examples:["RabbitMQ","Apache Kafka","Amazon SQS"]},{name:"Cache",description:"Temporary data store for faster access to frequently used data.",types:["In-memory (Redis)","CDN","Browser cache","Application cache"],considerations:["Expiration policy","Consistency","Cache invalidation","Storage capacity"]}],pn=[{category:"Scalability",practices:["Design for horizontal scaling","Use caching appropriately","Implement proper database indexing","Consider eventual consistency","Use asynchronous processing"]},{category:"Reliability",practices:["Implement circuit breakers","Use health checks","Plan for failure","Implement proper logging","Use monitoring and alerts"]},{category:"Security",practices:["Implement authentication/authorization","Use HTTPS everywhere","Validate all inputs","Follow least privilege principle","Regular security audits"]}],mn={steps:[{phase:"1. Requirements Clarification",description:"Spend 5-10 minutes understanding the problem and scope",key_questions:["Who are the users of the system?","What are the core features needed?","What are the non-functional requirements (scale, performance, latency)?","What are the limitations or constraints?","What is the expected traffic and data volume?","What is the expected read-to-write ratio?"]},{phase:"2. System Interface Definition",description:"Define what APIs are expected",key_points:["Define key APIs and their parameters","Outline basic data contracts","Discuss API authentication requirements","Consider rate limiting needs","Think about error handling"]},{phase:"3. Back-of-the-envelope Estimation",description:"Estimate the scale of the system",calculations:["Traffic estimates (QPS, peak vs average)","Storage requirements","Network bandwidth usage","Memory requirements (caching)","Number of servers needed"]},{phase:"4. Define Data Model",description:"Design the data schema and how data will flow",considerations:["What database type fits best (SQL vs NoSQL)?","What are the entities and their relationships?","How will the data be partitioned/sharded?","What indices are needed?","How will the data evolve over time?"]},{phase:"5. High-level Design",description:"Draw the basic architecture diagram",components:["Application servers","Database servers","Caching layer","Load balancers","CDN if needed","Queue services if needed"]},{phase:"6. Detailed Design",description:"Deep dive into 2-3 core components",focus_areas:["Critical components that need scaling","Unique challenges in the system","Data partitioning approach","Caching strategy","Load balancing methods"]},{phase:"7. Identifying Bottlenecks",description:"Discuss potential issues and solutions",areas:["Single points of failure","Data consistency challenges","Monitoring and alerting needs","Security concerns","Resource constraints"]}],important_questions:{scalability:["How do we handle increased load?","What happens when a server fails?","How do we handle data growth?","How do we improve response time?","What's the strategy for geographic distribution?"],availability:["What is our uptime requirement?","How do we handle failures?","What's our disaster recovery plan?","How do we monitor system health?","What's our backup strategy?"],performance:["What's the expected latency?","How do we handle slow queries?","What's our caching strategy?","How do we optimize the critical path?","What metrics should we track?"],security:["How do we handle authentication?","How do we protect sensitive data?","How do we prevent DDoS attacks?","What's our encryption strategy?","How do we handle access control?"],data:["What type of database should we use?","How do we ensure data consistency?","What's our sharding strategy?","How do we handle data backup?","What's our data retention policy?"]},common_numbers:{latency_numbers:[{operation:"L1 cache reference",latency:"0.5 ns"},{operation:"Branch mispredict",latency:"5 ns"},{operation:"L2 cache reference",latency:"7 ns"},{operation:"Mutex lock/unlock",latency:"100 ns"},{operation:"Main memory reference",latency:"100 ns"},{operation:"Compress 1K bytes with Zippy",latency:"10,000 ns"},{operation:"Send 2K bytes over 1 Gbps network",latency:"20,000 ns"},{operation:"Read 1 MB sequentially from memory",latency:"250,000 ns"},{operation:"Round trip within same datacenter",latency:"500,000 ns"},{operation:"Disk seek",latency:"10,000,000 ns"},{operation:"Read 1 MB sequentially from disk",latency:"20,000,000 ns"},{operation:"Send packet CA->Netherlands->CA",latency:"150,000,000 ns"}],availability_numbers:[{availability:"99% (two nines)",downtime_per_year:"3.65 days"},{availability:"99.9% (three nines)",downtime_per_year:"8.77 hours"},{availability:"99.99% (four nines)",downtime_per_year:"52.60 minutes"},{availability:"99.999% (five nines)",downtime_per_year:"5.26 minutes"}]}},A={architectural_patterns:dn,scalability_patterns:un,common_components:hn,best_practices:pn,interview_process:mn},fn={title:"JavaScript & React Fundamentals",description:"JavaScript is a programming language that, together with HTML and CSS, is one of the core technologies of the World Wide Web. Over 97% of websites employ JavaScript on the client-side for web page behaviour, typically combining third-party libraries. When it comes to web development, JavaScript is one of the most popular languages owing to its features and capabilities.",purpose:"This article includes a JavaScript cheat sheet as well as rich JavaScript documentation and how-tos to make it easy for our readers to work with JavaScript. The purpose of the cheat sheet is to give you some quick, correct, and ready to use code snippets for common circumstances. In a nutshell, this article makes JavaScript simple for both novice and professional coders."},gn=[{name:"Closures & Scope",description:"Understanding lexical scope and closure mechanisms in JavaScript - one of the most commonly tested concepts in interviews",example:`function makeCounter() {
  let count = 0;  // Private variable
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = makeCounter();
counter.increment();  // 1
counter.increment();  // 2
counter.getCount();   // 2`,key_points:["Lexical scope rules","Data privacy through closures","Module pattern implementation","Memory considerations","Common closure pitfalls"],interview_questions:["What is a closure and how does it work?","How can closures be used for data privacy?","What is the difference between lexical and dynamic scope?","How do closures affect memory management?","Explain the module pattern using closures"]},{name:"this Keyword & Binding",description:"Understanding 'this' context and different binding mechanisms - a crucial concept for JavaScript interviews",example:`const obj = {
  name: 'Object',
  regularFn: function() {
    console.log(this.name);
  },
  arrowFn: () => {
    console.log(this.name);
  },
  delayed: function() {
    setTimeout(function() {
      console.log(this.name);
    }.bind(this), 100);
  }
};

obj.regularFn();  // 'Object'
const fn = obj.regularFn;
fn();  // undefined`,key_points:["Default binding rules","Implicit vs explicit binding","Arrow functions and this","bind, call, and apply","Common pitfalls"],interview_questions:["How does 'this' work in JavaScript?","What's the difference between call, apply, and bind?","How do arrow functions handle 'this'?","What are the four rules of 'this' binding?","How do you handle 'this' in callbacks?"]},{name:"Event Loop & Async",description:"How JavaScript handles asynchronous operations - essential for understanding JavaScript's execution model",example:`console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

setTimeout(() => {
  console.log('Timeout 2');
}, 0);

console.log('End');

// Output:
// Start
// End
// Promise
// Timeout 1
// Timeout 2`,key_points:["Call stack execution","Microtask vs Macrotask queues","Event loop phases","Task prioritization","Browser rendering timing"],interview_questions:["Explain how the event loop works in JavaScript","What's the difference between microtasks and macrotasks?","How does Promise execution differ from setTimeout?","What is the call stack and how does it work?","How does JavaScript handle concurrent operations?"]},{name:"Promises & Async/Await",description:"Modern asynchronous programming patterns - fundamental for handling async operations in JavaScript",example:`// Promise chain
fetch('/api/data')
  .then(response => response.json())
  .then(data => processData(data))
  .catch(error => console.error(error));

// Async/Await
async function getData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return processData(data);
  } catch (error) {
    console.error(error);
  }
}

// Promise methods
Promise.all([fetch('/api/1'), fetch('/api/2')])
  .then(([res1, res2]) => {
    // Handle both responses
  });`,key_points:["Promise states and flow","Error handling patterns","Async/Await syntax","Promise methods (all, race, allSettled)","Sequential vs parallel execution"],interview_questions:["What are the states of a Promise?","How does async/await work under the hood?","What's the difference between Promise.all and Promise.race?","How do you handle errors in async/await?","How do you execute promises in parallel?"]},{name:"Prototypes & Inheritance",description:"JavaScript's prototype-based inheritance model - a unique aspect of JavaScript that often comes up in interviews",example:`function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(\`\${this.name} makes a sound\`);
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog('Rex');
dog.speak(); // 'Rex makes a sound'`,key_points:["Prototype chain","Constructor functions","Object.create() vs new","Property lookup mechanism","Inheritance patterns"],interview_questions:["How does prototypal inheritance work in JavaScript?","What's the difference between __proto__ and prototype?","How do you implement inheritance in JavaScript?","Explain the prototype chain","What are the advantages of prototypal inheritance?"]}],yn=[{name:"Components & Props",description:"Building blocks of React applications and how data flows between them",example:`// Function Component with Props
function Welcome({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}

// Usage
<Welcome name="John" age={25} />

// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`,key_points:["Functional vs Class Components","Props are read-only and immutable","Props can be any JavaScript value","Default props and prop types","Children prop and composition"],interview_questions:["What's the difference between functional and class components?","Why are props immutable?","How do you handle default prop values?","Explain component composition vs inheritance","When would you use Class components over Function components?"]},{name:"State & Lifecycle",description:"Managing component state and understanding component lifecycle",example:`function Counter() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // ComponentDidMount equivalent
    fetchUser().then(setUser);
    
    return () => {
      // ComponentWillUnmount equivalent
      cleanup();
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}`,key_points:["useState for local state management","State updates may be asynchronous","State updates trigger re-renders","useEffect for side effects","Cleanup in useEffect"],interview_questions:["How does setState work and why is it async?","What are the main differences between props and state?","Explain the useEffect cleanup function","When would you use multiple state variables vs. one state object?","How do you optimize re-renders with state updates?"]},{name:"Hooks",description:"React Hooks fundamentals and common use cases",example:`// Custom Hook Example
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

// Common Hooks Usage
function App() {
  const [data, setData] = useState(null);
  const size = useWindowSize();
  const memoizedCallback = useCallback(() => {
    doSomething(data);
  }, [data]);

  const memoizedValue = useMemo(() => computeExpensive(data), [data]);

  return <div>...</div>;
}`,key_points:["Rules of Hooks","Built-in Hooks (useState, useEffect, useContext, etc.)","Custom Hooks for reusable logic","Performance Hooks (useMemo, useCallback)","Side-effect management"],interview_questions:["What are the Rules of Hooks and why do they exist?","When should you use useMemo vs useCallback?","How do you share logic between components using Custom Hooks?","Explain the dependency array in useEffect","What problems do Hooks solve that class components don't?"]},{name:"Context & State Management",description:"Managing global state and sharing data between components",example:`// Create Context
const ThemeContext = React.createContext('light');

// Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer Component
function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  );
}`,key_points:["Context API vs Props drilling","Provider pattern","Multiple contexts","Context limitations","Performance considerations"],interview_questions:["When should you use Context vs Props?","How does Context affect component re-rendering?","What are the alternatives to Context for state management?","How do you optimize Context with many consumers?","Explain the difference between Context and Redux"]},{name:"Performance Optimization",description:"Techniques and patterns for optimizing React applications",example:`// React.memo for preventing unnecessary re-renders
const MemoizedComponent = React.memo(function MyComponent({ data }) {
  return <div>{data.text}</div>;
});

// useMemo for expensive calculations
function SearchResults({ items, query }) {
  const filteredItems = useMemo(() => 
    items.filter(item => 
      item.text.toLowerCase().includes(query.toLowerCase())
    ),
    [items, query]
  );

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}`,key_points:["React.memo for component memoization","useMemo and useCallback hooks","Code splitting and lazy loading","Virtual DOM and reconciliation","Key prop importance in lists"],interview_questions:["When should you use React.memo?","How does virtual DOM help with performance?","What are the common causes of re-renders?","How do you implement code splitting in React?","Explain the importance of keys in lists"]}],F={introduction:fn,javascript:gn,react:yn},bn="Generative AI Concepts",vn=[{question:"What is the difference between traditional ML models and Large Language Models?",answer:"Traditional ML models are typically task-specific and require structured data, while LLMs are trained on vast amounts of text data and can handle multiple tasks through natural language understanding. LLMs use transformer architectures and can generate human-like text, while traditional ML models often use simpler architectures for specific classification or regression tasks."},{question:"Explain how RAG (Retrieval-Augmented Generation) works and its benefits.",answer:"RAG combines an LLM with a knowledge retrieval system. When a query is received, it first retrieves relevant documents from a knowledge base, then uses these documents to augment the LLM's prompt. Benefits include: more accurate and up-to-date responses, reduced hallucinations, and the ability to cite sources. It's particularly useful when dealing with domain-specific or proprietary information."},{question:"What are embeddings and how are they used in GenAI applications?",answer:"Embeddings are dense vector representations of text that capture semantic meaning. In GenAI, they're used for: similarity search (finding related content), clustering (grouping similar items), information retrieval, and as input features for downstream tasks. They enable efficient search and comparison of text by converting words/sentences into numerical vectors that preserve semantic relationships."},{question:"How do you handle bias and ethical concerns in GenAI applications?",answer:"Key approaches include: careful dataset curation and cleaning, regular bias testing and monitoring, implementing content filters, using model cards for transparency, getting diverse feedback during development, implementing user feedback mechanisms, and having clear documentation about model limitations and potential biases. It's also important to have human oversight and clear escalation paths for issues."},{question:"What are the key considerations when fine-tuning an LLM?",answer:"Important considerations include: quality and quantity of training data, computational resources required, choice of fine-tuning method (full fine-tuning vs PEFT/LoRA), preventing catastrophic forgetting, maintaining model performance on general tasks, evaluation metrics, and cost-benefit analysis compared to prompt engineering alternatives."},{question:"Explain the concept of prompt engineering and its best practices.",answer:"Prompt engineering is the process of designing inputs to get optimal outputs from LLMs. Best practices include: being specific and clear, providing context and examples (few-shot learning), using consistent formatting, breaking complex tasks into steps, and including system-level instructions. It's important to test prompts across different scenarios and implement proper error handling."},{question:"How do you evaluate the performance of a GenAI model?",answer:"Evaluation involves multiple approaches: automated metrics (perplexity, ROUGE, BLEU scores), human evaluation for quality and relevance, task-specific benchmarks, A/B testing, monitoring of production metrics (user engagement, error rates), and specific tests for hallucination, bias, and toxicity. It's important to have a comprehensive evaluation framework that covers both technical and user-centric metrics."},{question:"What strategies can be used to reduce hallucinations in LLMs?",answer:"Key strategies include: implementing RAG to ground responses in verified data, using structured prompts that encourage step-by-step reasoning, setting appropriate temperature values, implementing fact-checking mechanisms, using system prompts to encourage admitting uncertainty, and maintaining up-to-date knowledge bases for domain-specific applications."},{question:"How do you handle context window limitations in LLMs?",answer:"Strategies include: text chunking and summarization, implementing sliding window approaches, using embeddings to select most relevant context, recursive summarization for long documents, and implementing efficient token management. It's also important to consider the trade-offs between context length and computational resources."},{question:"What are the key differences between zero-shot, few-shot, and fine-tuning approaches?",answer:"Zero-shot requires no examples but may have lower accuracy. Few-shot provides examples in the prompt, improving accuracy without training but using more tokens. Fine-tuning modifies model weights with new data, potentially providing best performance but requiring more resources and data. The choice depends on factors like data availability, performance requirements, and resource constraints."}],Qe={title:bn,interview_questions:vn};function ye(t){return e("div",{class:"note-box",children:[e("div",{class:"note-title",children:t.title||"Note"}),e("span",{class:"note-text",children:t.children})]})}function b(t){return e("div",{class:"title-bar",children:[e("span",{class:"title",children:t.text}),t.children]})}const ue=t=>{const n=at(null);return xt(()=>{n.current&&hljs.highlightBlock(n.current)},[t.text]),e("pre",{children:e("code",{ref:n,className:`language-${t.lang}`,children:t.text})})};function wn(){return e("img",{src:"./big-o-chart.png"})}function _n(){const t=qt.map(a=>e("tr",{children:[e("td",{children:a.name}),e("td",{children:a.notation}),e("td",{class:"tal",children:a.description}),e("td",{children:a.simplified}),e("td",{class:"tal",children:a.note})]})),n=a=>e("td",{class:`${Ce[a.item]}`,children:a.name||a.item}),i=Dt.map(a=>e("tr",{children:[e("td",{children:a.name}),e(n,{name:a.notation,item:a.level}),e("td",{class:"tal",children:a.description}),e(n,{item:a.level})]}));return e(w,{children:[e(b,{text:"Asymptotic Notations"}),e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{style:"width: 100px",children:"Name"}),e("th",{children:"Notation"}),e("th",{children:"Description"}),e("th",{style:"width: 120px",children:"Simplified"}),e("th",{children:"Note"})]})}),e("tbody",{children:t})]}),e(ye,{children:["Asymptotic notations like ",e("strong",{children:"Big O"}),","," ",e("strong",{children:"Big Omega"})," and ",e("strong",{children:"Big Theta"}),", provide insights into the runtime performance characteristics of algorithms.",e("br",{}),"On the other hand, terms like ",e("strong",{children:"Best Case"}),","," ",e("strong",{children:"Worst Case"})," and ",e("strong",{children:"Expected Case"})," describe the algorithm's performance under specific conditions or input.",e("br",{}),"Please note that there is"," ",e("strong",{children:"no specific relationship between these two concepts"}),"."]}),e("br",{}),e(b,{text:"Time & Space Complexities"}),e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Notation"}),e("th",{children:"Description"}),e("th",{children:"Quality"})]})}),e("tbody",{children:i})]}),e(ye,{children:[e("strong",{children:"Log(n)"})," without a specified base, it's usually assumed to be ",e("strong",{children:"base 2"}),"."]}),e("br",{}),e("div",{class:"tac",children:[e("div",{class:"title-bar",style:"justify-content:center;",children:e("span",{class:"title",children:"Visual Chart"})}),e(wn,{})]})]})}function xn(){const t=P(""),n=re(()=>Wt.filter(s=>s.name.toLowerCase().includes(t.value.toLowerCase())||s.group.toLowerCase().includes(t.value.toLowerCase()))),i=s=>e("td",{class:`${Ce[s.item]}`,children:s.item}),a=n.value.map(s=>e("tr",{children:[e("td",{children:s.name}),e("td",{children:e("img",{class:"shape",src:`./shapes/${s.shape}`})}),e("td",{children:s.group}),e("td",{class:"tal",children:s.description}),e(i,{item:s.time.average.access}),e(i,{item:s.time.average.search}),e(i,{item:s.time.average.insertion}),e(i,{item:s.time.average.deletion}),e(i,{item:s.time.worst.access}),e(i,{item:s.time.worst.search}),e(i,{item:s.time.worst.insertion}),e(i,{item:s.time.worst.deletion}),e(i,{item:s.space.worst})]})),r=["Access","Search","Insertion","Deletion"].map(s=>e("th",{children:s}));return e(w,{children:[e(b,{text:"Data Structures",children:e("input",{onInput:s=>t.value=s.target.value,placeholder:"Search"})}),e("table",{children:[e("thead",{children:[e("tr",{children:[e("th",{colspan:4}),e("th",{colspan:8,children:"Time Complexity"}),e("th",{children:"Space Complexity"})]}),e("tr",{children:[e("th",{colspan:4}),e("th",{colspan:4,children:"Average"}),e("th",{colspan:4,children:"Worst"}),e("th",{children:"Worst"})]}),e("tr",{children:[e("th",{style:"width: 140px",children:"Data Structure"}),e("th",{style:"width: 100px",children:"Shape"}),e("th",{style:"width: 60px",children:"Group"}),e("th",{style:"width: 240px",children:"Description"}),r,r,e("th",{})]})]}),e("tbody",{children:a})]})]})}function Sn(){const t=P(""),n=re(()=>Nt.filter(r=>r.name.toLowerCase().includes(t.value.toLowerCase()))),i=r=>e("td",{class:`${Ce[r.item]}`,children:r.item}),a=n.value.map(r=>e("tr",{children:[e("td",{children:r.name}),e("td",{class:"tal",style:"height: 60px",children:r.description}),e(i,{item:r.time.best}),e(i,{item:r.time.average}),e(i,{item:r.time.worst}),e(i,{item:r.space.worst})]}));return e(w,{children:[e(b,{text:"Sorting Algorithms",children:e("input",{onInput:r=>t.value=r.target.value,placeholder:"Search"})}),e("table",{children:[e("thead",{children:[e("tr",{children:[e("th",{colspan:2}),e("th",{colspan:3,children:"Time Complexity"}),e("th",{children:"Space Complexity"})]}),e("tr",{children:[e("th",{style:"width: 100px",children:"Algorithm"}),e("th",{style:"width: 600px",children:"Description"}),e("th",{children:"Best"}),e("th",{children:"Average"}),e("th",{children:"Worst"}),e("th",{children:"Worst"})]})]}),e("tbody",{children:a})]})]})}function En(){const t=Be.array.map(i=>e("tr",{children:[e("td",{children:i.name}),e("td",{class:"tal",children:i.description}),e("td",{children:i.average}),e("td",{children:i.worst})]})),n=Be.graph.map(i=>e("tr",{children:[e("td",{children:i.name}),e("td",{class:"tal",children:i.description}),e("td",{children:i.average}),e("td",{children:i.worst})]}));return e(w,{children:[e(b,{text:"Array Search Operations"}),e("div",{children:e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{style:"width: 100px",children:"Algorithm"}),e("th",{children:"Description"}),e("th",{children:"Average Time Complexity"}),e("th",{children:"Worst Time Complexity"})]})}),e("tbody",{children:[t," "]})]})}),e("br",{}),e(b,{text:"Graph Search Operations"}),e("div",{style:"display: flex",children:[e("div",{children:e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{style:"width: 100px",children:"Algorithm"}),e("th",{children:"Description"}),e("th",{children:"Average Time Complexity"}),e("th",{children:"Worst Time Complexity"})]})}),e("tbody",{children:[n," "]})]})}),e("div",{class:"graph-help",style:"width: 440px",children:e("ul",{children:[e("li",{children:[e("code",{children:"v"}),": Number of vertices (nodes) in the graph."]}),e("li",{children:[e("code",{children:"e"}),": Number of edges in the graph."]}),e("li",{children:[e("code",{children:"b"}),": Branching factor of the search tree."]}),e("li",{children:[e("code",{children:"d"}),": Depth of the optimal solution."]})]})})]})]})}function Tn(){const t=n=>e("tr",{children:[e("td",{children:n.name}),e("td",{class:"tal",children:n.description})]});return e(w,{children:[e(b,{text:"Object-Oriented Programming (OOP)"}),e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{style:"width: 100px",children:"Name"}),e("th",{children:"Description"})]})}),e("tbody",{children:H.oop.map(t)})]}),e("br",{}),e(b,{text:"Solid Principles"}),e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{style:"width: 160px",children:"Name"}),e("th",{children:"Description"})]})}),e("tbody",{children:H.solid.map(t)})]}),e("br",{}),e(b,{text:"Software Design Patterns"}),e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{style:"width: 160px",children:"Pattern"}),e("th",{children:"Description"})]})}),e("tbody",{children:H.design.map(t)})]}),e("br",{}),e(b,{text:"Software Development Principles"}),e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{style:"width: 260px",children:"Name"}),e("th",{children:"Description"})]})}),e("tbody",{children:H.principles.map(t)})]}),e("br",{}),e(b,{text:"Software Development Paradigms"}),e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{style:"width: 360px",children:"Name"}),e("th",{children:"Description"})]})}),e("tbody",{children:H.paradigms.map(t)})]})]})}function Cn(){return e(w,{children:[e("div",{style:"display: flex; ",children:[e("div",{children:[e(b,{text:"REST Architectural Constraints"}),e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{style:"width: 200px",children:"Name"}),e("th",{children:"Description"})]})}),e("tbody",{children:de.rest_constraints.map(t=>e("tr",{children:[e("td",{children:t.name}),e("td",{class:"tal",children:t.description})]}))})]}),e(ye,{children:[e("strong",{children:"REST"})," stands for"," ",e("strong",{children:"REpresentational State Transfer"})]})]}),e("div",{style:"margin-left: 30px;",children:[e(b,{text:"REST Methods"}),e("table",{style:"width:300px",children:[e("thead",{children:e("tr",{children:[e("th",{children:"Name"}),e("th",{children:"CRUD"})]})}),e("tbody",{children:de.rest_methods.map(t=>e("tr",{children:[e("td",{children:t.name}),e("td",{children:t.description})]}))})]})]})]}),e("br",{}),e("div",{children:[e(b,{text:"GraphQL"}),e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{style:"width: 160px",children:"Name"}),e("th",{children:"Description"})]})}),e("tbody",{children:de.graphql.map(t=>e("tr",{children:[e("td",{children:t.name}),e("td",{class:"tal",children:t.description})]}))})]})]})]})}function On(){return e(w,{children:[e(b,{text:"SQL (Structured Query Language)"}),e(ue,{lang:"sql",text:"SELECT column_1, column_2 FROM table_name;"}),e("br",{}),e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{style:"width: 120px",children:"Statement"}),e("th",{children:"Description"}),e("th",{children:"Example"})]})}),e("tbody",{children:nn.map(t=>e("tr",{children:[e("td",{children:t.statement}),e("td",{class:"tal",children:t.description}),e("td",{class:"tal",children:e(ue,{lang:"sql",text:t.example})})]}))})]}),e("br",{}),e(b,{text:"SQL Interview Questions"}),e("div",{class:"qa-list",children:sn.map((t,n)=>e("details",{children:[e("summary",{children:`${n+1}. ${t.question}`}),e("div",{class:"answer",children:[t.answer.split(`
`).map(i=>e("div",{children:i})),e("div",{class:"code-example",children:e(ue,{lang:"sql",text:t.code_example})})]})]}))}),e("style",{children:`
          .answer {
            padding: 12px;
            line-height: 1.8;
            background-color: #f8f8f8;
            border-radius: 4px;
            margin: 8px 0;
          }
          .code-example {
            margin-top: 12px;
          }
          details {
            margin: 8px 0;
          }
          summary {
            cursor: pointer;
            padding: 8px;
            background-color: #eee;
            border-radius: 4px;
          }
          summary:hover {
            background-color: #ddd;
          }
        `})]})}function Rn(){const t=P(""),n=re(()=>Oe.magic.filter(i=>i.method.toLowerCase().includes(t.value.toLowerCase())||i.description.toLowerCase().includes(t.value.toLowerCase())));return e(w,{children:[e(b,{text:"Dunder Methods",children:e("input",{onInput:i=>t.value=i.target.value,placeholder:"Search"})}),e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{style:"width: 110px",children:"Magic Method"}),e("th",{children:"Description"})]})}),e("tbody",{children:n.value.map(i=>e("tr",{children:[e("td",{children:i.method}),e("td",{class:"tal",children:i.description})]}))})]})]})}function An(){return e(w,{children:[e(b,{text:"PEP 20 – The Zen of Python"}),e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{style:"width: 30px",children:"Index"}),e("th",{children:"Description"})]})}),e("tbody",{children:Oe.zen.map(t=>e("tr",{children:[e("td",{children:t.index}),e("td",{class:"tal",children:t.description})]}))})]})]})}function kn(){return e(w,{children:[e(b,{text:"Useful Notes"}),e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{style:"width: 160px",children:"Title"}),e("th",{children:"Notes"})]})}),e("tbody",{children:Oe.others.map(t=>e("tr",{children:[e("td",{children:t.title}),e("td",{class:"tal",children:t.notes})]}))})]})]})}function Ln(){return e("div",{style:"display: flex; justify-content: space-between",children:[e("div",{children:e(Rn,{})}),e("div",{children:e(An,{})}),e("div",{children:e(kn,{})})]})}function In(){const t=[];Object.keys(ze).forEach(a=>{ze[a].forEach(r=>{t.push({method:r.method,group:a,description:r.description})})});const n=P(""),i=re(()=>t.filter(a=>a.method.toLowerCase().includes(n.value.toLowerCase())||a.group.toLowerCase().includes(n.value.toLowerCase())||a.description.toLowerCase().includes(n.value.toLowerCase())));return e(w,{children:[e(b,{text:"Common Methods",children:e("input",{onInput:a=>n.value=a.target.value,placeholder:"Search"})}),e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{style:"width: 380px",children:"Method"}),e("th",{children:"Group"}),e("th",{children:"Description"})]})}),e("tbody",{children:i.value.map(a=>e("tr",{children:[e("td",{children:a.method}),e("td",{children:a.group}),e("td",{class:"tal",children:a.description})]}))})]})]})}function qn(){return e("div",{style:"display: flex; justify-content: space-between",children:e("div",{children:e(In,{})})})}function Dn(){return e(w,{children:[e("div",{class:"title-bar",children:e("span",{class:"title",children:"Resources Links"})}),e("ul",{class:"links",children:an.map(t=>e("li",{children:e("a",{href:t.url,target:"_blank",children:t.title})}))}),e("div",{children:[e("strong",{children:"Disclaimer:"})," The information in this website was gather with the help of ChatGPT and Copilot."]})]})}function Nn(){return e(w,{children:[e(b,{text:"Web Services: REST vs SOAP"}),e("div",{class:"web-services-container",children:[e("div",{class:"services-grid",children:K.web_services.map(t=>e("div",{class:"service-card",children:[e("h3",{children:t.name}),e("p",{class:"description",children:t.description}),e("div",{class:"concepts-section",children:[e("h4",{children:"Key Concepts"}),e("ul",{children:t.key_concepts.map(n=>e("li",{children:n}))})]}),e("div",{class:"characteristics-section",children:[e("h4",{children:"Characteristics"}),t.characteristics.map(n=>e("div",{class:"characteristic",children:[e("strong",{children:[n.name,":"]})," ",n.details]}))]}),e("div",{class:"pros-cons",children:[e("div",{class:"advantages",children:[e("h4",{children:"Advantages"}),e("ul",{children:t.advantages.map(n=>e("li",{children:n}))})]}),e("div",{class:"disadvantages",children:[e("h4",{children:"Disadvantages"}),e("ul",{children:t.disadvantages.map(n=>e("li",{children:n}))})]})]}),e("div",{class:"best-practices",children:[e("h4",{children:"Best Practices"}),e("ul",{children:t.best_practices.map(n=>e("li",{children:n}))})]})]}))}),e("div",{class:"comparison-section",children:[e("h3",{children:"Comparison"}),e("table",{class:"comparison-table",children:[e("thead",{children:e("tr",{children:[e("th",{children:"Aspect"}),e("th",{children:"REST"}),e("th",{children:"SOAP"})]})}),e("tbody",{children:K.comparison.criteria.map(t=>e("tr",{children:[e("td",{children:e("strong",{children:t.aspect})}),e("td",{children:t.REST}),e("td",{children:t.SOAP})]}))})]}),e("div",{class:"use-cases",children:[e("h3",{children:"Common Use Cases"}),e("div",{class:"use-cases-grid",children:[e("div",{children:[e("h4",{children:"REST"}),e("ul",{children:K.comparison.use_cases.REST.map(t=>e("li",{children:t}))})]}),e("div",{children:[e("h4",{children:"SOAP"}),e("ul",{children:K.comparison.use_cases.SOAP.map(t=>e("li",{children:t}))})]})]})]})]})]}),e("style",{children:`
        .web-services-container {
          padding: 20px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }

        .service-card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 25px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .service-card h3 {
          color: #2c3e50;
          margin-top: 0;
          margin-bottom: 15px;
          border-bottom: 2px solid #3498db;
          padding-bottom: 10px;
        }

        .concepts-section,
        .characteristics-section,
        .pros-cons,
        .best-practices {
          margin-top: 20px;
        }

        .characteristic {
          margin: 10px 0;
        }

        .pros-cons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }

        .comparison-table th,
        .comparison-table td {
          padding: 12px;
          border: 1px solid #ddd;
          text-align: left;
        }

        .comparison-table th {
          background: #f5f6fa;
        }

        .use-cases-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 20px;
        }

        ul {
          list-style-type: none;
          padding-left: 0;
        }

        li {
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
        }

        li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #3498db;
        }

        .advantages li:before {
          color: #27ae60;
        }

        .disadvantages li:before {
          color: #e74c3c;
        }

        @media (max-width: 768px) {
          .services-grid,
          .pros-cons,
          .use-cases-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Pn(){return e(w,{children:[e(b,{text:"System Design Patterns"}),e("div",{class:"system-design-container",children:[e("section",{class:"design-section",children:[e("h3",{children:"Architectural Patterns"}),e("div",{class:"patterns-grid",children:A.architectural_patterns.map(t=>e("div",{class:"pattern-card",children:[e("h4",{children:t.name}),e("p",{children:t.description}),e("div",{class:"characteristics",children:[e("h5",{children:"Key Characteristics"}),e("ul",{children:t.key_characteristics.map(n=>e("li",{children:n}))})]}),e("div",{class:"pros-cons",children:[e("div",{class:"advantages",children:[e("h5",{children:"Advantages"}),e("ul",{children:t.advantages.map(n=>e("li",{children:n}))})]}),e("div",{class:"challenges",children:[e("h5",{children:"Challenges"}),e("ul",{children:t.challenges.map(n=>e("li",{children:n}))})]})]})]}))})]}),e("section",{class:"design-section",children:[e("h3",{children:"Scalability Patterns"}),e("div",{class:"patterns-grid",children:A.scalability_patterns.map(t=>e("div",{class:"pattern-card",children:[e("h4",{children:t.name}),e("p",{children:t.description}),t.types&&e("div",{class:"types",children:[e("h5",{children:"Types"}),e("ul",{children:t.types.map(n=>e("li",{children:n}))})]}),t.strategies&&e("div",{class:"strategies",children:[e("h5",{children:"Strategies"}),e("ul",{children:t.strategies.map(n=>e("li",{children:n}))})]}),t.considerations&&e("div",{class:"considerations",children:[e("h5",{children:"Considerations"}),e("ul",{children:t.considerations.map(n=>e("li",{children:n}))})]})]}))})]}),e("section",{class:"design-section",children:[e("h3",{children:"Common Components"}),e("div",{class:"components-grid",children:A.common_components.map(t=>e("div",{class:"component-card",children:[e("h4",{children:t.name}),e("p",{children:t.description}),t.responsibilities&&e("div",{class:"responsibilities",children:[e("h5",{children:"Responsibilities"}),e("ul",{children:t.responsibilities.map(n=>e("li",{children:n}))})]}),t.use_cases&&e("div",{class:"use-cases",children:[e("h5",{children:"Use Cases"}),e("ul",{children:t.use_cases.map(n=>e("li",{children:n}))})]})]}))})]}),e("section",{class:"design-section",children:[e("h3",{children:"Best Practices"}),e("div",{class:"practices-grid",children:A.best_practices.map(t=>e("div",{class:"practice-card",children:[e("h4",{children:t.category}),e("ul",{children:t.practices.map(n=>e("li",{children:n}))})]}))})]}),e("section",{class:"design-section",children:[e("h3",{children:"System Design Interview Process"}),e("div",{class:"process-grid",children:A.interview_process.steps.map(t=>e("div",{class:"process-card",children:[e("h4",{children:t.phase}),e("p",{children:t.description}),t.key_questions&&e("div",{class:"questions",children:[e("h5",{children:"Key Questions"}),e("ul",{children:t.key_questions.map(n=>e("li",{children:n}))})]}),t.key_points&&e("div",{class:"points",children:[e("h5",{children:"Key Points"}),e("ul",{children:t.key_points.map(n=>e("li",{children:n}))})]}),t.considerations&&e("div",{class:"considerations",children:[e("h5",{children:"Considerations"}),e("ul",{children:t.considerations.map(n=>e("li",{children:n}))})]}),t.components&&e("div",{class:"components",children:[e("h5",{children:"Components"}),e("ul",{children:t.components.map(n=>e("li",{children:n}))})]})]}))})]}),e("section",{class:"design-section",children:[e("h3",{children:"Important Questions by Category"}),e("div",{class:"questions-grid",children:Object.entries(A.interview_process.important_questions).map(([t,n])=>e("div",{class:"question-card",children:[e("h4",{children:t.charAt(0).toUpperCase()+t.slice(1)}),e("ul",{children:n.map(i=>e("li",{children:i}))})]}))})]}),e("section",{class:"design-section",children:[e("h3",{children:"Common Numbers to Know"}),e("div",{class:"numbers-container",children:[e("div",{class:"latency-table",children:[e("h4",{children:"Latency Numbers"}),e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{children:"Operation"}),e("th",{children:"Latency"})]})}),e("tbody",{children:A.interview_process.common_numbers.latency_numbers.map(t=>e("tr",{children:[e("td",{children:t.operation}),e("td",{children:t.latency})]}))})]})]}),e("div",{class:"availability-table",children:[e("h4",{children:"Availability Numbers"}),e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{children:"Availability"}),e("th",{children:"Downtime per Year"})]})}),e("tbody",{children:A.interview_process.common_numbers.availability_numbers.map(t=>e("tr",{children:[e("td",{children:t.availability}),e("td",{children:t.downtime_per_year})]}))})]})]})]})]})]}),e("style",{children:`
        .system-design-container {
          padding: 20px;
        }

        .design-section {
          margin-bottom: 40px;
        }

        .design-section h3 {
          color: #2c3e50;
          margin-bottom: 20px;
          border-bottom: 2px solid #3498db;
          padding-bottom: 10px;
        }

        .patterns-grid,
        .components-grid,
        .practices-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 20px;
        }

        .pattern-card,
        .component-card,
        .practice-card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        h4 {
          color: #2c3e50;
          margin-top: 0;
          margin-bottom: 15px;
        }

        h5 {
          color: #34495e;
          margin-top: 15px;
          margin-bottom: 10px;
        }

        p {
          color: #555;
          line-height: 1.5;
          margin-bottom: 15px;
        }

        ul {
          list-style-type: none;
          padding-left: 0;
        }

        li {
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
        }

        li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #3498db;
        }

        .advantages li:before {
          color: #27ae60;
        }

        .challenges li:before {
          color: #e74c3c;
        }

        .pros-cons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-top: 15px;
        }

        @media (max-width: 768px) {
          .pros-cons {
            grid-template-columns: 1fr;
          }
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .process-card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .questions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .numbers-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 15px;
        }

        th, td {
          padding: 10px;
          border: 1px solid #ddd;
          text-align: left;
        }

        th {
          background: #f5f6fa;
        }

        .question-card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
      `})]})}function Mn({topic:t}){return e("div",{class:"dom-section",children:[Object.entries(t.sections).map(([n,i])=>e("div",{class:"section-container",children:[e("h4",{children:i.title}),e("p",{children:i.description}),e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{style:"width: 200px",children:"Name"}),e("th",{children:"Description"})]})}),e("tbody",{children:i[n==="node_properties"?"properties":"methods"].map(a=>e("tr",{children:[e("td",{class:"method-name",children:a.name}),e("td",{class:"tal",children:a.description})]}))})]})]})),e("div",{class:"example-section",children:[e("h4",{children:"Example Usage"}),e("div",{class:"code-example",children:e("pre",{children:e("code",{children:t.example})})})]}),e("style",{children:`
        .dom-section {
          margin-bottom: 30px;
        }

        .section-container {
          margin-bottom: 25px;
        }

        .method-name {
          font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
          color: #0366d6;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin: 15px 0;
          background: white;
        }

        th, td {
          padding: 12px;
          border: 1px solid #e1e4e8;
        }

        th {
          background: #f6f8fa;
          text-align: left;
        }

        .tal {
          text-align: left;
        }

        .example-section {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          margin-top: 20px;
        }
      `})]})}function Wn(){return e(w,{children:[e(b,{text:F.introduction.title}),e("section",{class:"introduction-section",children:[e("p",{class:"intro-text",children:F.introduction.description}),e("p",{class:"purpose-text",children:F.introduction.purpose})]}),e("section",{class:"fundamentals-section",children:[e("h3",{children:"JavaScript Fundamentals"}),e("div",{class:"resource-link",children:e("a",{href:"https://www.interviewbit.com/javascript-cheat-sheet/",target:"_blank",rel:"noopener noreferrer",children:"📚 Comprehensive JavaScript Cheat Sheet by InterviewBit"})}),e("div",{class:"fundamentals-grid",children:F.javascript.map(t=>t.name==="DOM Properties & Methods"?e(Mn,{topic:t}):e("div",{class:"topic-card",children:[e("h4",{children:t.name}),e("p",{children:t.description}),t.example&&e("div",{class:"code-example",children:[e("h5",{children:"Example:"}),e("pre",{children:e("code",{children:t.example})})]})]}))})]}),e("section",{class:"fundamentals-section",children:[e("h3",{children:"React Fundamentals"}),e("div",{class:"resource-link",children:e("a",{href:"https://github.com/sudheerj/reactjs-interview-questions",target:"_blank",rel:"noopener noreferrer",children:"📚 Top 500 ReactJS Interview Questions & Answers"})}),e("div",{class:"fundamentals-grid",children:F.react.map(t=>e("div",{class:"topic-card",children:[e("h4",{children:t.name}),e("p",{children:t.description}),t.example&&e("div",{class:"code-example",children:[e("h5",{children:"Example:"}),e("pre",{children:e("code",{children:t.example})})]}),t.key_points&&e("div",{class:"key-points",children:[e("h5",{children:"Key Points:"}),e("ul",{children:t.key_points.map(n=>e("li",{children:n}))})]})]}))})]}),e("style",{children:`
        .fundamentals-section {
          margin-bottom: 40px;
        }

        .fundamentals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .topic-card {
          background: #fff;
          border: 1px solid #e1e4e8;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        h3 {
          color: #2c3e50;
          border-bottom: 2px solid #3498db;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }

        h4 {
          color: #2c3e50;
          margin-top: 0;
          margin-bottom: 15px;
          font-size: 1.2em;
        }

        h5 {
          color: #34495e;
          margin-top: 15px;
          margin-bottom: 10px;
          font-size: 1em;
        }

        p {
          color: #555;
          line-height: 1.5;
          margin-bottom: 15px;
        }

        .code-example {
          background: #f6f8fa;
          border-radius: 6px;
          padding: 15px;
          margin: 10px 0;
          overflow-x: auto;
        }

        pre {
          margin: 0;
          white-space: pre-wrap;
        }

        code {
          font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
          font-size: 0.9em;
        }

        ul {
          list-style-type: none;
          padding-left: 0;
          margin: 0;
        }

        li {
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
          line-height: 1.4;
        }

        li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #3498db;
        }

        .key-points li:before {
          color: #2ecc71;
        }

        .best-practices li:before {
          color: #e74c3c;
        }

        @media (max-width: 768px) {
          .fundamentals-grid {
            grid-template-columns: 1fr;
          }
        }

        .introduction-section {
          margin-bottom: 30px;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #3498db;
        }

        .intro-text, .purpose-text {
          margin-bottom: 15px;
          line-height: 1.6;
          color: #2c3e50;
        }

        .intro-text {
          font-size: 1.1em;
        }

        .purpose-text {
          font-style: italic;
          color: #34495e;
        }

        .key-methods {
          margin-top: 15px;
        }

        .method-category {
          margin-bottom: 15px;
        }

        .method-category h6 {
          color: #2c3e50;
          margin-bottom: 8px;
          font-size: 0.9em;
          font-weight: 600;
        }

        .method-category ul {
          margin-left: 15px;
        }

        .best-practices {
          margin-top: 15px;
          padding: 15px;
          background: #fff5f5;
          border-radius: 6px;
        }

        .best-practices li {
          color: #e74c3c;
        }

        .resource-link {
          margin: 1rem 0;
          padding: 0.5rem;
          background: #f8f9fa;
          border-radius: 4px;
          text-align: center;
        }
        
        .resource-link a {
          color: #0366d6;
          text-decoration: none;
        }
        
        .resource-link a:hover {
          text-decoration: underline;
        }
      `})]})}function Un(){const t=P(0),n=(i,a)=>t.value===i?a:null;return e(w,{children:[e("ul",{class:"navbar",children:[e("li",{onClick:()=>t.value=0,children:"Big-O"}),e("li",{onClick:()=>t.value=1,children:"Data Structures"}),e("li",{onClick:()=>t.value=2,children:"Sorting"}),e("li",{onClick:()=>t.value=3,children:"Searching"}),e("li",{onClick:()=>t.value=4,children:"Principles & Design"}),e("li",{onClick:()=>t.value=5,children:"APIs"}),e("li",{onClick:()=>t.value=6,children:"SQL"}),e("li",{onClick:()=>t.value=7,children:"Python"}),e("li",{onClick:()=>t.value=8,children:"Python Extended"}),e("li",{onClick:()=>t.value=9,children:"Security"}),e("li",{onClick:()=>t.value=10,children:"Web Services"}),e("li",{onClick:()=>t.value=11,children:"System Design"}),e("li",{onClick:()=>t.value=14,children:"JS/React Fundamentals"}),e("li",{onClick:()=>t.value=15,children:"GenAI"}),e("li",{onClick:()=>t.value=99,children:"Resources"})]}),n(0,e(_n,{})),n(1,e(xn,{})),n(2,e(Sn,{})),n(3,e(En,{})),n(4,e(Tn,{})),n(5,e(Cn,{})),n(6,e(On,{})),n(7,e(Ln,{})),n(8,e(qn,{})),n(9,e(Hn,{})),n(10,e(Nn,{})),n(11,e(Pn,{})),n(14,e(Wn,{})),n(15,e(Fn,{})),n(99,e(Dn,{}))]})}function Hn(){return e(w,{children:[e(b,{text:"OWASP Top 10"}),e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{children:"Category"}),e("th",{children:"Description"})]})}),e("tbody",{children:[e("tr",{children:[e("td",{children:"Broken Access Control"}),e("td",{children:"Restrictions on authenticated users are not properly enforced. Attackers can exploit to access unauthorized functionality."})]}),e("tr",{children:[e("td",{children:"Cryptographic Failures"}),e("td",{children:"Failures related to cryptography that often lead to exposure of sensitive data. Previously known as Sensitive Data Exposure."})]}),e("tr",{children:[e("td",{children:"Injection"}),e("td",{children:"User-supplied data is not validated, filtered, or sanitized by the application. Includes SQL, NoSQL, OS, and LDAP injection."})]}),e("tr",{children:[e("td",{children:"Insecure Design"}),e("td",{children:"Risks related to design and architectural flaws, calling for more use of threat modeling, secure design patterns, and reference architectures."})]}),e("tr",{children:[e("td",{children:"Security Misconfiguration"}),e("td",{children:"Security settings in applications, frameworks, application server, web server, database server, and platform are not secure."})]}),e("tr",{children:[e("td",{children:"Vulnerable Components"}),e("td",{children:"Using components (libraries, frameworks) with known vulnerabilities can undermine application defenses and enable attacks."})]}),e("tr",{children:[e("td",{children:"Auth. & ID Failures"}),e("td",{children:"Authentication and session management functions are often implemented incorrectly, allowing attackers to compromise passwords, keys, or tokens."})]}),e("tr",{children:[e("td",{children:"Software & Data Integrity"}),e("td",{children:"Software updates, critical data, and CI/CD pipelines without integrity verification can lead to malicious software installation."})]}),e("tr",{children:[e("td",{children:"Security Logging Failures"}),e("td",{children:"Insufficient logging and monitoring, coupled with missing incident response, allows attackers to further attack systems."})]}),e("tr",{children:[e("td",{children:"Server-Side Request Forgery"}),e("td",{children:"Occurs when a web application fetches a remote resource without validating the user-supplied URL, allowing attackers to forge requests."})]})]})]}),e("br",{}),e("div",{class:"tac",children:e("a",{href:"https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/REST_Security_Cheat_Sheet.md#rest-security-cheat-sheet",target:"_blank",children:"OWASP REST Security Cheat Sheet"})}),e("br",{}),e("div",{class:"tac",children:e("a",{href:"https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.md",target:"_blank",children:"OWASP SQL Injection Prevention Cheat Sheet"})}),e("br",{}),e(b,{text:"Security Concepts"}),e("div",{class:"qa-list",children:on.security_q_a.map((t,n)=>e("details",{children:[e("summary",{children:`${n+1}. ${t.question}`}),e("div",{class:"answer",children:t.answer.split(`
`).map(i=>e("div",{children:i}))})]}))}),e("br",{}),e("style",{children:`
          .answer {
            padding: 12px;
            line-height: 1.8;
            background-color: #f8f8f8;
            border-radius: 4px;
            margin: 8px 0;
          }
          details {
            margin: 8px 0;
          }
          summary {
            cursor: pointer;
            padding: 8px;
            background-color: #eee;
            border-radius: 4px;
          }
          summary:hover {
            background-color: #ddd;
          }
        `})]})}function Fn(){return e(w,{children:[e(b,{text:Qe.title}),e("table",{}),e("br",{}),e("div",{class:"interview-questions",children:[e("h3",{children:"Top Interview Questions"}),Qe.interview_questions.map((t,n)=>e("details",{class:"question-detail",children:[e("summary",{children:`${n+1}. ${t.question}`}),e("div",{class:"answer",children:t.answer})]}))]}),e("br",{}),e("div",{class:"resource-links"}),e("style",{children:`
        // ... existing styles ...

        .interview-questions {
          margin: 20px 0;
        }

        .question-detail {
          margin: 15px 0;
          border: 1px solid #e1e4e8;
          border-radius: 6px;
          overflow: hidden;
        }

        .question-detail summary {
          padding: 12px;
          background: #f6f8fa;
          cursor: pointer;
          font-weight: 500;
        }

        .question-detail summary:hover {
          background: #f0f3f6;
        }

        .answer {
          padding: 15px;
          line-height: 1.6;
          background: white;
        }
      `})]})}wt(e(Un,{}),document.getElementById("app"));
