(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function jc(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Re={},Ur=[],bt=()=>{},vy=()=>!1,ra=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),qc=t=>t.startsWith("onUpdate:"),Qe=Object.assign,Hc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ey=Object.prototype.hasOwnProperty,ce=(t,e)=>Ey.call(t,e),z=Array.isArray,Br=t=>Ti(t)==="[object Map]",sa=t=>Ti(t)==="[object Set]",Ih=t=>Ti(t)==="[object Date]",X=t=>typeof t=="function",Le=t=>typeof t=="string",Fn=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",Hf=t=>(Ie(t)||X(t))&&X(t.then)&&X(t.catch),zf=Object.prototype.toString,Ti=t=>zf.call(t),Ty=t=>Ti(t).slice(8,-1),Kf=t=>Ti(t)==="[object Object]",zc=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,lo=jc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ia=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Iy=/-(\w)/g,Xt=ia(t=>t.replace(Iy,(e,n)=>n?n.toUpperCase():"")),wy=/\B([A-Z])/g,hs=ia(t=>t.replace(wy,"-$1").toLowerCase()),oa=ia(t=>t.charAt(0).toUpperCase()+t.slice(1)),al=ia(t=>t?`on${oa(t)}`:""),Un=(t,e)=>!Object.is(t,e),co=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ro=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},So=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wh;const Wf=()=>wh||(wh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kc(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Le(r)?Py(r):Kc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Le(t)||Ie(t))return t}const Ay=/;(?![^(]*\))/g,Ry=/:([^]+)/,Sy=/\/\*[^]*?\*\//g;function Py(t){const e={};return t.replace(Sy,"").split(Ay).forEach(n=>{if(n){const r=n.split(Ry);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function aa(t){let e="";if(Le(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const r=aa(t[n]);r&&(e+=r+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Cy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",by=jc(Cy);function Gf(t){return!!t||t===""}function ky(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=la(t[r],e[r]);return n}function la(t,e){if(t===e)return!0;let n=Ih(t),r=Ih(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Fn(t),r=Fn(e),n||r)return t===e;if(n=z(t),r=z(e),n||r)return n&&r?ky(t,e):!1;if(n=Ie(t),r=Ie(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!la(t[o],e[o]))return!1}}return String(t)===String(e)}function Oy(t,e){return t.findIndex(n=>la(n,e))}const sr=t=>Le(t)?t:t==null?"":z(t)||Ie(t)&&(t.toString===zf||!X(t.toString))?JSON.stringify(t,Qf,2):String(t),Qf=(t,e)=>e&&e.__v_isRef?Qf(t,e.value):Br(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ll(r,i)+" =>"]=s,n),{})}:sa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ll(n))}:Fn(e)?ll(e):Ie(e)&&!z(e)&&!Kf(e)?String(e):e,ll=(t,e="")=>{var n;return Fn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let yt;class Yf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=yt,!e&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=yt;try{return yt=this,e()}finally{yt=n}}}on(){yt=this}off(){yt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Jf(t){return new Yf(t)}function Ny(t,e=yt){e&&e.active&&e.effects.push(t)}function Xf(){return yt}function Dy(t){yt&&yt.cleanups.push(t)}let ir;class Wc{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,Ny(this,s)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,Er();for(const e of this.deps)if(e.computed&&(Vy(e.computed),this._dirtyLevel>=2))break;Tr(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Nn,n=ir;try{return Nn=!0,ir=this,this._runnings++,Ah(this),this.fn()}finally{Rh(this),this._runnings--,ir=n,Nn=e}}stop(){var e;this.active&&(Ah(this),Rh(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Vy(t){return t.value}function Ah(t){t._trackId++,t._depsLength=0}function Rh(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Zf(t.deps[e],t);t.deps.length=t._depsLength}}function Zf(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Nn=!0,Ul=0;const ep=[];function Er(){ep.push(Nn),Nn=!1}function Tr(){const t=ep.pop();Nn=t===void 0?!0:t}function Gc(){Ul++}function Qc(){for(Ul--;!Ul&&Bl.length;)Bl.shift()()}function tp(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Zf(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Bl=[];function np(t,e,n){Gc();for(const r of t.keys())if(!(!r.allowRecurse&&r._runnings)&&r._dirtyLevel<e&&(!r._runnings||e!==2)){const s=r._dirtyLevel;r._dirtyLevel=e,s===0&&(!r._queryings||e!==2)&&(r.trigger(),r.scheduler&&Bl.push(r.scheduler))}Qc()}const rp=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Po=new WeakMap,or=Symbol(""),$l=Symbol("");function gt(t,e,n){if(Nn&&ir){let r=Po.get(t);r||Po.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=rp(()=>r.delete(n))),tp(ir,s)}}function un(t,e,n,r,s,i){const o=Po.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!Fn(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?zc(n)&&a.push(o.get("length")):(a.push(o.get(or)),Br(t)&&a.push(o.get($l)));break;case"delete":z(t)||(a.push(o.get(or)),Br(t)&&a.push(o.get($l)));break;case"set":Br(t)&&a.push(o.get(or));break}Gc();for(const l of a)l&&np(l,3);Qc()}function My(t,e){var n;return(n=Po.get(t))==null?void 0:n.get(e)}const Ly=jc("__proto__,__v_isRef,__isVue"),sp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fn)),Sh=xy();function xy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)gt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Er(),Gc();const r=G(this)[e].apply(this,n);return Qc(),Tr(),r}}),t}function Fy(t){const e=G(this);return gt(e,"has",t),e.hasOwnProperty(t)}class ip{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Jy:cp:i?lp:ap).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=z(e);if(!s){if(o&&ce(Sh,n))return Reflect.get(Sh,n,r);if(n==="hasOwnProperty")return Fy}const a=Reflect.get(e,n,r);return(Fn(n)?sp.has(n):Ly(n))||(s||gt(e,"get",n),i)?a:Oe(a)?o&&zc(n)?a:a.value:Ie(a)?s?hp(a):xt(a):a}}class op extends ip{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const l=Qr(i);if(!Mr(r)&&!Qr(r)&&(i=G(i),r=G(r)),!z(e)&&Oe(i)&&!Oe(r))return l?!1:(i.value=r,!0)}const o=z(e)&&zc(n)?Number(n)<e.length:ce(e,n),a=Reflect.set(e,n,r,s);return e===G(s)&&(o?Un(r,i)&&un(e,"set",n,r):un(e,"add",n,r)),a}deleteProperty(e,n){const r=ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&un(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Fn(n)||!sp.has(n))&&gt(e,"has",n),r}ownKeys(e){return gt(e,"iterate",z(e)?"length":or),Reflect.ownKeys(e)}}class Uy extends ip{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const By=new op,$y=new Uy,jy=new op(!0),Yc=t=>t,ca=t=>Reflect.getPrototypeOf(t);function Ki(t,e,n=!1,r=!1){t=t.__v_raw;const s=G(t),i=G(e);n||(Un(e,i)&&gt(s,"get",e),gt(s,"get",i));const{has:o}=ca(s),a=r?Yc:n?Zc:Qs;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Wi(t,e=!1){const n=this.__v_raw,r=G(n),s=G(t);return e||(Un(t,s)&&gt(r,"has",t),gt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Gi(t,e=!1){return t=t.__v_raw,!e&&gt(G(t),"iterate",or),Reflect.get(t,"size",t)}function Ph(t){t=G(t);const e=G(this);return ca(e).has.call(e,t)||(e.add(t),un(e,"add",t,t)),this}function Ch(t,e){e=G(e);const n=G(this),{has:r,get:s}=ca(n);let i=r.call(n,t);i||(t=G(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Un(e,o)&&un(n,"set",t,e):un(n,"add",t,e),this}function bh(t){const e=G(this),{has:n,get:r}=ca(e);let s=n.call(e,t);s||(t=G(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&un(e,"delete",t,void 0),i}function kh(){const t=G(this),e=t.size!==0,n=t.clear();return e&&un(t,"clear",void 0,void 0),n}function Qi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=G(o),l=e?Yc:t?Zc:Qs;return!t&&gt(a,"iterate",or),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Yi(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=Br(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Yc:e?Zc:Qs;return!e&&gt(i,"iterate",l?$l:or),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function En(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function qy(){const t={get(i){return Ki(this,i)},get size(){return Gi(this)},has:Wi,add:Ph,set:Ch,delete:bh,clear:kh,forEach:Qi(!1,!1)},e={get(i){return Ki(this,i,!1,!0)},get size(){return Gi(this)},has:Wi,add:Ph,set:Ch,delete:bh,clear:kh,forEach:Qi(!1,!0)},n={get(i){return Ki(this,i,!0)},get size(){return Gi(this,!0)},has(i){return Wi.call(this,i,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:Qi(!0,!1)},r={get(i){return Ki(this,i,!0,!0)},get size(){return Gi(this,!0)},has(i){return Wi.call(this,i,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:Qi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Yi(i,!1,!1),n[i]=Yi(i,!0,!1),e[i]=Yi(i,!1,!0),r[i]=Yi(i,!0,!0)}),[t,n,e,r]}const[Hy,zy,Ky,Wy]=qy();function Jc(t,e){const n=e?t?Wy:Ky:t?zy:Hy;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ce(n,s)&&s in r?n:r,s,i)}const Gy={get:Jc(!1,!1)},Qy={get:Jc(!1,!0)},Yy={get:Jc(!0,!1)},ap=new WeakMap,lp=new WeakMap,cp=new WeakMap,Jy=new WeakMap;function Xy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zy(t){return t.__v_skip||!Object.isExtensible(t)?0:Xy(Ty(t))}function xt(t){return Qr(t)?t:Xc(t,!1,By,Gy,ap)}function up(t){return Xc(t,!1,jy,Qy,lp)}function hp(t){return Xc(t,!0,$y,Yy,cp)}function Xc(t,e,n,r,s){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Zy(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function hn(t){return Qr(t)?hn(t.__v_raw):!!(t&&t.__v_isReactive)}function Qr(t){return!!(t&&t.__v_isReadonly)}function Mr(t){return!!(t&&t.__v_isShallow)}function dp(t){return hn(t)||Qr(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function ua(t){return Ro(t,"__v_skip",!0),t}const Qs=t=>Ie(t)?xt(t):t,Zc=t=>Ie(t)?hp(t):t;class fp{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Wc(()=>e(this._value),()=>jl(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=G(this);return pp(e),(!e._cacheable||e.effect.dirty)&&Un(e._value,e._value=e.effect.run())&&jl(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function ev(t,e,n=!1){let r,s;const i=X(t);return i?(r=t,s=bt):(r=t.get,s=t.set),new fp(r,s,i||!s,n)}function pp(t){Nn&&ir&&(t=G(t),tp(ir,t.dep||(t.dep=rp(()=>t.dep=void 0,t instanceof fp?t:void 0))))}function jl(t,e=3,n){t=G(t);const r=t.dep;r&&np(r,e)}function Oe(t){return!!(t&&t.__v_isRef===!0)}function nt(t){return gp(t,!1)}function tv(t){return gp(t,!0)}function gp(t,e){return Oe(t)?t:new nv(t,e)}class nv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:Qs(e)}get value(){return pp(this),this._value}set value(e){const n=this.__v_isShallow||Mr(e)||Qr(e);e=n?e:G(e),Un(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Qs(e),jl(this,3))}}function Nt(t){return Oe(t)?t.value:t}const rv={get:(t,e,n)=>Nt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Oe(s)&&!Oe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function mp(t){return hn(t)?t:new Proxy(t,rv)}function sv(t){const e=z(t)?new Array(t.length):{};for(const n in t)e[n]=_p(t,n);return e}class iv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return My(G(this._object),this._key)}}class ov{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function av(t,e,n){return Oe(t)?t:X(t)?new ov(t):Ie(t)&&arguments.length>1?_p(t,e,n):nt(t)}function _p(t,e,n){const r=t[e];return Oe(r)?r:new iv(t,e,n)}function Dn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ha(i,e,n)}return s}function Dt(t,e,n,r){if(X(t)){const i=Dn(t,e,n,r);return i&&Hf(i)&&i.catch(o=>{ha(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Dt(t[i],e,n,r));return s}function ha(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/errors/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Dn(l,null,10,[t,o,a]);return}}lv(t,n,s,r)}function lv(t,e,n,r=!0){console.error(t)}let Ys=!1,ql=!1;const tt=[];let jt=0;const $r=[];let sn=null,Zn=0;const yp=Promise.resolve();let eu=null;function Ii(t){const e=eu||yp;return t?e.then(this?t.bind(this):t):e}function cv(t){let e=jt+1,n=tt.length;for(;e<n;){const r=e+n>>>1,s=tt[r],i=Js(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function tu(t){(!tt.length||!tt.includes(t,Ys&&t.allowRecurse?jt+1:jt))&&(t.id==null?tt.push(t):tt.splice(cv(t.id),0,t),vp())}function vp(){!Ys&&!ql&&(ql=!0,eu=yp.then(Tp))}function uv(t){const e=tt.indexOf(t);e>jt&&tt.splice(e,1)}function hv(t){z(t)?$r.push(...t):(!sn||!sn.includes(t,t.allowRecurse?Zn+1:Zn))&&$r.push(t),vp()}function Oh(t,e,n=Ys?jt+1:0){for(;n<tt.length;n++){const r=tt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;tt.splice(n,1),n--,r()}}}function Ep(t){if($r.length){const e=[...new Set($r)];if($r.length=0,sn){sn.push(...e);return}for(sn=e,sn.sort((n,r)=>Js(n)-Js(r)),Zn=0;Zn<sn.length;Zn++)sn[Zn]();sn=null,Zn=0}}const Js=t=>t.id==null?1/0:t.id,dv=(t,e)=>{const n=Js(t)-Js(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Tp(t){ql=!1,Ys=!0,tt.sort(dv);try{for(jt=0;jt<tt.length;jt++){const e=tt[jt];e&&e.active!==!1&&Dn(e,null,14)}}finally{jt=0,tt.length=0,Ep(),Ys=!1,eu=null,(tt.length||$r.length)&&Tp()}}function fv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Re;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Re;d&&(s=n.map(p=>Le(p)?p.trim():p)),h&&(s=n.map(So))}let a,l=r[a=al(e)]||r[a=al(Xt(e))];!l&&i&&(l=r[a=al(hs(e))]),l&&Dt(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Dt(c,t,6,s)}}function Ip(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!X(t)){const l=c=>{const u=Ip(c,e,!0);u&&(a=!0,Qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Ie(t)&&r.set(t,null),null):(z(i)?i.forEach(l=>o[l]=null):Qe(o,i),Ie(t)&&r.set(t,o),o)}function da(t,e){return!t||!ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,hs(e))||ce(t,e))}let Tt=null,fa=null;function Co(t){const e=Tt;return Tt=t,fa=t&&t.type.__scopeId||null,e}function pv(t){fa=t}function gv(){fa=null}function mv(t,e=Tt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&jh(-1);const i=Co(e);let o;try{o=t(...s)}finally{Co(i),r._d&&jh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function cl(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:_,inheritAttrs:T}=t;let E,P;const b=Co(t);try{if(n.shapeFlag&4){const U=s||r,M=U;E=$t(u.call(M,U,h,i,p,d,_)),P=l}else{const U=e;E=$t(U.length>1?U(i,{attrs:l,slots:a,emit:c}):U(i,null)),P=e.props?l:_v(l)}}catch(U){xs.length=0,ha(U,t,1),E=te(ur)}let V=E;if(P&&T!==!1){const U=Object.keys(P),{shapeFlag:M}=V;U.length&&M&7&&(o&&U.some(qc)&&(P=yv(P,o)),V=hr(V,P))}return n.dirs&&(V=hr(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),E=V,Co(b),E}const _v=t=>{let e;for(const n in t)(n==="class"||n==="style"||ra(n))&&((e||(e={}))[n]=t[n]);return e},yv=(t,e)=>{const n={};for(const r in t)(!qc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function vv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Nh(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!da(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Nh(r,o,c):!0:!!o;return!1}function Nh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!da(n,i))return!0}return!1}function Ev({vnode:t,parent:e},n){if(n)for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const wp="components";function Tv(t,e){return wv(wp,t,!0,e)||t}const Iv=Symbol.for("v-ndc");function wv(t,e,n=!0,r=!1){const s=Tt||Ue;if(s){const i=s.type;if(t===wp){const a=gE(i,!1);if(a&&(a===e||a===Xt(e)||a===oa(Xt(e))))return i}const o=Dh(s[t]||i[t],e)||Dh(s.appContext[t],e);return!o&&r?i:o}}function Dh(t,e){return t&&(t[e]||t[Xt(e)]||t[oa(Xt(e))])}const Av=t=>t.__isSuspense;function Rv(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):hv(t)}const Sv=Symbol.for("v-scx"),Pv=()=>Kt(Sv);function uo(t,e){return nu(t,null,e)}const Ji={};function Ms(t,e,n){return nu(t,e,n)}function nu(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Re){var l;if(e&&i){const M=e;e=(...ne)=>{M(...ne),U()}}const c=Xf()===((l=Ue)==null?void 0:l.scope)?Ue:null;let u,h=!1,d=!1;if(Oe(t)?(u=()=>t.value,h=Mr(t)):hn(t)?(u=Mr(t)||r===!1?()=>on(t,1):()=>on(t),h=!0):z(t)?(d=!0,h=t.some(M=>hn(M)||Mr(M)),u=()=>t.map(M=>{if(Oe(M))return M.value;if(hn(M))return on(M,Mr(M)||r===!1?1:void 0);if(X(M))return Dn(M,c,2)})):X(t)?e?u=()=>Dn(t,c,2):u=()=>{if(!(c&&c.isUnmounted))return p&&p(),Dt(t,c,3,[_])}:u=bt,e&&r){const M=u;u=()=>on(M())}let p,_=M=>{p=V.onStop=()=>{Dn(M,c,4),p=V.onStop=void 0}},T;if(va)if(_=bt,e?n&&Dt(e,c,3,[u(),d?[]:void 0,_]):u(),s==="sync"){const M=Pv();T=M.__watcherHandles||(M.__watcherHandles=[])}else return bt;let E=d?new Array(t.length).fill(Ji):Ji;const P=()=>{if(!(!V.active||!V.dirty))if(e){const M=V.run();(r||h||(d?M.some((ne,Te)=>Un(ne,E[Te])):Un(M,E)))&&(p&&p(),Dt(e,c,3,[M,E===Ji?void 0:d&&E[0]===Ji?[]:E,_]),E=M)}else V.run()};P.allowRecurse=!!e;let b;s==="sync"?b=P:s==="post"?b=()=>ft(P,c&&c.suspense):(P.pre=!0,c&&(P.id=c.uid),b=()=>tu(P));const V=new Wc(u,bt,b),U=()=>{V.stop(),c&&c.scope&&Hc(c.scope.effects,V)};return e?n?P():E=V.run():s==="post"?ft(V.run.bind(V),c&&c.suspense):V.run(),T&&T.push(U),U}function Cv(t,e,n){const r=this.proxy,s=Le(t)?t.includes(".")?Ap(r,t):()=>r[t]:t.bind(r,r);let i;X(e)?i=e:(i=e.handler,n=e);const o=Ue;Yr(this);const a=nu(s,i.bind(r),n);return o?Yr(o):ar(),a}function Ap(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function on(t,e,n=0,r){if(!Ie(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),Oe(t))on(t.value,e,n,r);else if(z(t))for(let s=0;s<t.length;s++)on(t[s],e,n,r);else if(sa(t)||Br(t))t.forEach(s=>{on(s,e,n,r)});else if(Kf(t))for(const s in t)on(t[s],e,n,r);return t}function bo(t,e){const n=Tt;if(n===null)return t;const r=Ea(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=Re]=e[i];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&on(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Yn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Er(),Dt(l,n,8,[t.el,a,t,e]),Tr())}}/*! #__NO_SIDE_EFFECTS__ */function ds(t,e){return X(t)?Qe({name:t.name},e,{setup:t}):t}const ho=t=>!!t.type.__asyncLoader,Rp=t=>t.type.__isKeepAlive;function bv(t,e){Sp(t,"a",e)}function kv(t,e){Sp(t,"da",e)}function Sp(t,e,n=Ue){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(pa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Rp(s.parent.vnode)&&Ov(r,e,n,s),s=s.parent}}function Ov(t,e,n,r){const s=pa(e,t,r,!0);ma(()=>{Hc(r[e],s)},n)}function pa(t,e,n=Ue,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Er(),Yr(n);const a=Dt(e,n,t,o);return ar(),Tr(),a});return r?s.unshift(i):s.push(i),i}}const mn=t=>(e,n=Ue)=>(!va||t==="sp")&&pa(t,(...r)=>e(...r),n),Nv=mn("bm"),ga=mn("m"),Dv=mn("bu"),Vv=mn("u"),Mv=mn("bum"),ma=mn("um"),Lv=mn("sp"),xv=mn("rtg"),Fv=mn("rtc");function Uv(t,e=Ue){pa("ec",t,e)}function Hl(t,e,n,r){let s;const i=n&&n[r];if(z(t)||Le(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ie(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const zl=t=>t?Bp(t)?Ea(t)||t.proxy:zl(t.parent):null,Ls=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zl(t.parent),$root:t=>zl(t.root),$emit:t=>t.emit,$options:t=>ru(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,tu(t.update)}),$nextTick:t=>t.n||(t.n=Ii.bind(t.proxy)),$watch:t=>Cv.bind(t)}),ul=(t,e)=>t!==Re&&!t.__isScriptSetup&&ce(t,e),Bv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ul(r,e))return o[e]=1,r[e];if(s!==Re&&ce(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ce(c,e))return o[e]=3,i[e];if(n!==Re&&ce(n,e))return o[e]=4,n[e];Kl&&(o[e]=0)}}const u=Ls[e];let h,d;if(u)return e==="$attrs"&&gt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Re&&ce(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ce(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ul(s,e)?(s[e]=n,!0):r!==Re&&ce(r,e)?(r[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Re&&ce(t,o)||ul(e,o)||(a=i[0])&&ce(a,o)||ce(r,o)||ce(Ls,o)||ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vh(t){return z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Kl=!0;function $v(t){const e=ru(t),n=t.proxy,r=t.ctx;Kl=!1,e.beforeCreate&&Mh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:_,activated:T,deactivated:E,beforeDestroy:P,beforeUnmount:b,destroyed:V,unmounted:U,render:M,renderTracked:ne,renderTriggered:Te,errorCaptured:re,serverPrefetch:ee,expose:we,inheritAttrs:Ye,components:mt,directives:Rt,filters:Qn}=e;if(c&&jv(c,r,null),o)for(const ve in o){const fe=o[ve];X(fe)&&(r[ve]=fe.bind(n))}if(s){const ve=s.call(n,n);Ie(ve)&&(t.data=xt(ve))}if(Kl=!0,i)for(const ve in i){const fe=i[ve],nn=X(fe)?fe.bind(n,n):X(fe.get)?fe.get.bind(n,n):bt,vn=!X(fe)&&X(fe.set)?fe.set.bind(n):bt,Ft=_e({get:nn,set:vn});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>Ft.value,set:dt=>Ft.value=dt})}if(a)for(const ve in a)Pp(a[ve],r,n,ve);if(l){const ve=X(l)?l.call(n):l;Reflect.ownKeys(ve).forEach(fe=>{fo(fe,ve[fe])})}u&&Mh(u,t,"c");function he(ve,fe){z(fe)?fe.forEach(nn=>ve(nn.bind(n))):fe&&ve(fe.bind(n))}if(he(Nv,h),he(ga,d),he(Dv,p),he(Vv,_),he(bv,T),he(kv,E),he(Uv,re),he(Fv,ne),he(xv,Te),he(Mv,b),he(ma,U),he(Lv,ee),z(we))if(we.length){const ve=t.exposed||(t.exposed={});we.forEach(fe=>{Object.defineProperty(ve,fe,{get:()=>n[fe],set:nn=>n[fe]=nn})})}else t.exposed||(t.exposed={});M&&t.render===bt&&(t.render=M),Ye!=null&&(t.inheritAttrs=Ye),mt&&(t.components=mt),Rt&&(t.directives=Rt)}function jv(t,e,n=bt){z(t)&&(t=Wl(t));for(const r in t){const s=t[r];let i;Ie(s)?"default"in s?i=Kt(s.from||r,s.default,!0):i=Kt(s.from||r):i=Kt(s),Oe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Mh(t,e,n){Dt(z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pp(t,e,n,r){const s=r.includes(".")?Ap(n,r):()=>n[r];if(Le(t)){const i=e[t];X(i)&&Ms(s,i)}else if(X(t))Ms(s,t.bind(n));else if(Ie(t))if(z(t))t.forEach(i=>Pp(i,e,n,r));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)&&Ms(s,i,t)}}function ru(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>ko(l,c,o,!0)),ko(l,e,o)),Ie(e)&&i.set(e,l),l}function ko(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ko(t,i,n,!0),s&&s.forEach(o=>ko(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=qv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const qv={data:Lh,props:xh,emits:xh,methods:Cs,computed:Cs,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:Cs,directives:Cs,watch:zv,provide:Lh,inject:Hv};function Lh(t,e){return e?t?function(){return Qe(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function Hv(t,e){return Cs(Wl(t),Wl(e))}function Wl(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function Cs(t,e){return t?Qe(Object.create(null),t,e):e}function xh(t,e){return t?z(t)&&z(e)?[...new Set([...t,...e])]:Qe(Object.create(null),Vh(t),Vh(e??{})):e}function zv(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const r in e)n[r]=lt(t[r],e[r]);return n}function Cp(){return{app:null,config:{isNativeTag:vy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kv=0;function Wv(t,e){return function(r,s=null){X(r)||(r=Qe({},r)),s!=null&&!Ie(s)&&(s=null);const i=Cp(),o=new WeakSet;let a=!1;const l=i.app={_uid:Kv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:_E,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&X(c.install)?(o.add(c),c.install(l,...u)):X(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=te(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Ea(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Xs=l;try{return c()}finally{Xs=null}}};return l}}let Xs=null;function fo(t,e){if(Ue){let n=Ue.provides;const r=Ue.parent&&Ue.parent.provides;r===n&&(n=Ue.provides=Object.create(r)),n[t]=e}}function Kt(t,e,n=!1){const r=Ue||Tt;if(r||Xs){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Xs._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&X(e)?e.call(r&&r.proxy):e}}function Gv(){return!!(Ue||Tt||Xs)}function Qv(t,e,n,r=!1){const s={},i={};Ro(i,ya,1),t.propsDefaults=Object.create(null),bp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:up(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Yv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=G(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(da(t.emitsOptions,d))continue;const p=e[d];if(l)if(ce(i,d))p!==i[d]&&(i[d]=p,c=!0);else{const _=Xt(d);s[_]=Gl(l,a,_,p,t,!1)}else p!==i[d]&&(i[d]=p,c=!0)}}}else{bp(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!ce(e,h)&&((u=hs(h))===h||!ce(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Gl(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ce(e,h))&&(delete i[h],c=!0)}c&&un(t,"set","$attrs")}function bp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(lo(l))continue;const c=e[l];let u;s&&ce(s,u=Xt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:da(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=G(n),c=a||Re;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Gl(s,l,h,c[h],t,!ce(c,h))}}return o}function Gl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&X(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(Yr(s),r=c[n]=l.call(null,e),ar())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===hs(n))&&(r=!0))}return r}function kp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!X(t)){const u=h=>{l=!0;const[d,p]=kp(h,e,!0);Qe(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Ie(t)&&r.set(t,Ur),Ur;if(z(i))for(let u=0;u<i.length;u++){const h=Xt(i[u]);Fh(h)&&(o[h]=Re)}else if(i)for(const u in i){const h=Xt(u);if(Fh(h)){const d=i[u],p=o[h]=z(d)||X(d)?{type:d}:Qe({},d);if(p){const _=$h(Boolean,p.type),T=$h(String,p.type);p[0]=_>-1,p[1]=T<0||_<T,(_>-1||ce(p,"default"))&&a.push(h)}}}const c=[o,a];return Ie(t)&&r.set(t,c),c}function Fh(t){return t[0]!=="$"}function Uh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Bh(t,e){return Uh(t)===Uh(e)}function $h(t,e){return z(e)?e.findIndex(n=>Bh(n,t)):X(e)&&Bh(e,t)?0:-1}const Op=t=>t[0]==="_"||t==="$stable",su=t=>z(t)?t.map($t):[$t(t)],Jv=(t,e,n)=>{if(e._n)return e;const r=mv((...s)=>su(e(...s)),n);return r._c=!1,r},Np=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Op(s))continue;const i=t[s];if(X(i))e[s]=Jv(s,i,r);else if(i!=null){const o=su(i);e[s]=()=>o}}},Dp=(t,e)=>{const n=su(e);t.slots.default=()=>n},Xv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),Ro(e,"_",n)):Np(e,t.slots={})}else t.slots={},e&&Dp(t,e);Ro(t.slots,ya,1)},Zv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Qe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Np(e,s)),o=e}else e&&(Dp(t,e),o={default:1});if(i)for(const a in s)!Op(a)&&o[a]==null&&delete s[a]};function Ql(t,e,n,r,s=!1){if(z(t)){t.forEach((d,p)=>Ql(d,e&&(z(e)?e[p]:e),n,r,s));return}if(ho(r)&&!s)return;const i=r.shapeFlag&4?Ea(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Le(c)?(u[c]=null,ce(h,c)&&(h[c]=null)):Oe(c)&&(c.value=null)),X(l))Dn(l,a,12,[o,u]);else{const d=Le(l),p=Oe(l);if(d||p){const _=()=>{if(t.f){const T=d?ce(h,l)?h[l]:u[l]:l.value;s?z(T)&&Hc(T,i):z(T)?T.includes(i)||T.push(i):d?(u[l]=[i],ce(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ce(h,l)&&(h[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,ft(_,n)):_()}}}const ft=Rv;function eE(t){return tE(t)}function tE(t,e){const n=Wf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=bt,insertStaticContent:_}=t,T=(f,g,m,y=null,I=null,w=null,D=void 0,C=null,k=!!g.dynamicChildren)=>{if(f===g)return;f&&!Ts(f,g)&&(y=v(f),dt(f,I,w,!0),f=null),g.patchFlag===-2&&(k=!1,g.dynamicChildren=null);const{type:R,ref:L,shapeFlag:j}=g;switch(R){case _a:E(f,g,m,y);break;case ur:P(f,g,m,y);break;case dl:f==null&&b(g,m,y,D);break;case vt:mt(f,g,m,y,I,w,D,C,k);break;default:j&1?M(f,g,m,y,I,w,D,C,k):j&6?Rt(f,g,m,y,I,w,D,C,k):(j&64||j&128)&&R.process(f,g,m,y,I,w,D,C,k,O)}L!=null&&I&&Ql(L,f&&f.ref,w,g||f,!g)},E=(f,g,m,y)=>{if(f==null)r(g.el=a(g.children),m,y);else{const I=g.el=f.el;g.children!==f.children&&c(I,g.children)}},P=(f,g,m,y)=>{f==null?r(g.el=l(g.children||""),m,y):g.el=f.el},b=(f,g,m,y)=>{[f.el,f.anchor]=_(f.children,g,m,y,f.el,f.anchor)},V=({el:f,anchor:g},m,y)=>{let I;for(;f&&f!==g;)I=d(f),r(f,m,y),f=I;r(g,m,y)},U=({el:f,anchor:g})=>{let m;for(;f&&f!==g;)m=d(f),s(f),f=m;s(g)},M=(f,g,m,y,I,w,D,C,k)=>{g.type==="svg"?D="svg":g.type==="math"&&(D="mathml"),f==null?ne(g,m,y,I,w,D,C,k):ee(f,g,I,w,D,C,k)},ne=(f,g,m,y,I,w,D,C)=>{let k,R;const{props:L,shapeFlag:j,transition:$,dirs:Y}=f;if(k=f.el=o(f.type,w,L&&L.is,L),j&8?u(k,f.children):j&16&&re(f.children,k,null,y,I,hl(f,w),D,C),Y&&Yn(f,null,y,"created"),Te(k,f,f.scopeId,D,y),L){for(const Ee in L)Ee!=="value"&&!lo(Ee)&&i(k,Ee,null,L[Ee],w,f.children,y,I,Je);"value"in L&&i(k,"value",null,L.value,w),(R=L.onVnodeBeforeMount)&&Bt(R,y,f)}Y&&Yn(f,null,y,"beforeMount");const se=nE(I,$);se&&$.beforeEnter(k),r(k,g,m),((R=L&&L.onVnodeMounted)||se||Y)&&ft(()=>{R&&Bt(R,y,f),se&&$.enter(k),Y&&Yn(f,null,y,"mounted")},I)},Te=(f,g,m,y,I)=>{if(m&&p(f,m),y)for(let w=0;w<y.length;w++)p(f,y[w]);if(I){let w=I.subTree;if(g===w){const D=I.vnode;Te(f,D,D.scopeId,D.slotScopeIds,I.parent)}}},re=(f,g,m,y,I,w,D,C,k=0)=>{for(let R=k;R<f.length;R++){const L=f[R]=C?An(f[R]):$t(f[R]);T(null,L,g,m,y,I,w,D,C)}},ee=(f,g,m,y,I,w,D)=>{const C=g.el=f.el;let{patchFlag:k,dynamicChildren:R,dirs:L}=g;k|=f.patchFlag&16;const j=f.props||Re,$=g.props||Re;let Y;if(m&&Jn(m,!1),(Y=$.onVnodeBeforeUpdate)&&Bt(Y,m,g,f),L&&Yn(g,f,m,"beforeUpdate"),m&&Jn(m,!0),R?we(f.dynamicChildren,R,C,m,y,hl(g,I),w):D||fe(f,g,C,null,m,y,hl(g,I),w,!1),k>0){if(k&16)Ye(C,g,j,$,m,y,I);else if(k&2&&j.class!==$.class&&i(C,"class",null,$.class,I),k&4&&i(C,"style",j.style,$.style,I),k&8){const se=g.dynamicProps;for(let Ee=0;Ee<se.length;Ee++){const Pe=se[Ee],xe=j[Pe],kt=$[Pe];(kt!==xe||Pe==="value")&&i(C,Pe,xe,kt,I,f.children,m,y,Je)}}k&1&&f.children!==g.children&&u(C,g.children)}else!D&&R==null&&Ye(C,g,j,$,m,y,I);((Y=$.onVnodeUpdated)||L)&&ft(()=>{Y&&Bt(Y,m,g,f),L&&Yn(g,f,m,"updated")},y)},we=(f,g,m,y,I,w,D)=>{for(let C=0;C<g.length;C++){const k=f[C],R=g[C],L=k.el&&(k.type===vt||!Ts(k,R)||k.shapeFlag&70)?h(k.el):m;T(k,R,L,null,y,I,w,D,!0)}},Ye=(f,g,m,y,I,w,D)=>{if(m!==y){if(m!==Re)for(const C in m)!lo(C)&&!(C in y)&&i(f,C,m[C],null,D,g.children,I,w,Je);for(const C in y){if(lo(C))continue;const k=y[C],R=m[C];k!==R&&C!=="value"&&i(f,C,R,k,D,g.children,I,w,Je)}"value"in y&&i(f,"value",m.value,y.value,D)}},mt=(f,g,m,y,I,w,D,C,k)=>{const R=g.el=f?f.el:a(""),L=g.anchor=f?f.anchor:a("");let{patchFlag:j,dynamicChildren:$,slotScopeIds:Y}=g;Y&&(C=C?C.concat(Y):Y),f==null?(r(R,m,y),r(L,m,y),re(g.children,m,L,I,w,D,C,k)):j>0&&j&64&&$&&f.dynamicChildren?(we(f.dynamicChildren,$,m,I,w,D,C),(g.key!=null||I&&g===I.subTree)&&Vp(f,g,!0)):fe(f,g,m,L,I,w,D,C,k)},Rt=(f,g,m,y,I,w,D,C,k)=>{g.slotScopeIds=C,f==null?g.shapeFlag&512?I.ctx.activate(g,m,y,D,k):Qn(g,m,y,I,w,D,k):St(f,g,k)},Qn=(f,g,m,y,I,w,D)=>{const C=f.component=uE(f,y,I);if(Rp(f)&&(C.ctx.renderer=O),hE(C),C.asyncDep){if(I&&I.registerDep(C,he),!f.el){const k=C.subTree=te(ur);P(null,k,g,m)}}else he(C,f,g,m,I,w,D)},St=(f,g,m)=>{const y=g.component=f.component;if(vv(f,g,m))if(y.asyncDep&&!y.asyncResolved){ve(y,g,m);return}else y.next=g,uv(y.update),y.effect.dirty=!0,y.update();else g.el=f.el,y.vnode=g},he=(f,g,m,y,I,w,D)=>{const C=()=>{if(f.isMounted){let{next:L,bu:j,u:$,parent:Y,vnode:se}=f;{const Cr=Mp(f);if(Cr){L&&(L.el=se.el,ve(f,L,D)),Cr.asyncDep.then(()=>{f.isUnmounted||C()});return}}let Ee=L,Pe;Jn(f,!1),L?(L.el=se.el,ve(f,L,D)):L=se,j&&co(j),(Pe=L.props&&L.props.onVnodeBeforeUpdate)&&Bt(Pe,Y,L,se),Jn(f,!0);const xe=cl(f),kt=f.subTree;f.subTree=xe,T(kt,xe,h(kt.el),v(kt),f,I,w),L.el=xe.el,Ee===null&&Ev(f,xe.el),$&&ft($,I),(Pe=L.props&&L.props.onVnodeUpdated)&&ft(()=>Bt(Pe,Y,L,se),I)}else{let L;const{el:j,props:$}=g,{bm:Y,m:se,parent:Ee}=f,Pe=ho(g);if(Jn(f,!1),Y&&co(Y),!Pe&&(L=$&&$.onVnodeBeforeMount)&&Bt(L,Ee,g),Jn(f,!0),j&&pe){const xe=()=>{f.subTree=cl(f),pe(j,f.subTree,f,I,null)};Pe?g.type.__asyncLoader().then(()=>!f.isUnmounted&&xe()):xe()}else{const xe=f.subTree=cl(f);T(null,xe,m,y,f,I,w),g.el=xe.el}if(se&&ft(se,I),!Pe&&(L=$&&$.onVnodeMounted)){const xe=g;ft(()=>Bt(L,Ee,xe),I)}(g.shapeFlag&256||Ee&&ho(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&f.a&&ft(f.a,I),f.isMounted=!0,g=m=y=null}},k=f.effect=new Wc(C,bt,()=>tu(R),f.scope),R=f.update=()=>{k.dirty&&k.run()};R.id=f.uid,Jn(f,!0),R()},ve=(f,g,m)=>{g.component=f;const y=f.vnode.props;f.vnode=g,f.next=null,Yv(f,g.props,y,m),Zv(f,g.children,m),Er(),Oh(f),Tr()},fe=(f,g,m,y,I,w,D,C,k=!1)=>{const R=f&&f.children,L=f?f.shapeFlag:0,j=g.children,{patchFlag:$,shapeFlag:Y}=g;if($>0){if($&128){vn(R,j,m,y,I,w,D,C,k);return}else if($&256){nn(R,j,m,y,I,w,D,C,k);return}}Y&8?(L&16&&Je(R,I,w),j!==R&&u(m,j)):L&16?Y&16?vn(R,j,m,y,I,w,D,C,k):Je(R,I,w,!0):(L&8&&u(m,""),Y&16&&re(j,m,y,I,w,D,C,k))},nn=(f,g,m,y,I,w,D,C,k)=>{f=f||Ur,g=g||Ur;const R=f.length,L=g.length,j=Math.min(R,L);let $;for($=0;$<j;$++){const Y=g[$]=k?An(g[$]):$t(g[$]);T(f[$],Y,m,null,I,w,D,C,k)}R>L?Je(f,I,w,!0,!1,j):re(g,m,y,I,w,D,C,k,j)},vn=(f,g,m,y,I,w,D,C,k)=>{let R=0;const L=g.length;let j=f.length-1,$=L-1;for(;R<=j&&R<=$;){const Y=f[R],se=g[R]=k?An(g[R]):$t(g[R]);if(Ts(Y,se))T(Y,se,m,null,I,w,D,C,k);else break;R++}for(;R<=j&&R<=$;){const Y=f[j],se=g[$]=k?An(g[$]):$t(g[$]);if(Ts(Y,se))T(Y,se,m,null,I,w,D,C,k);else break;j--,$--}if(R>j){if(R<=$){const Y=$+1,se=Y<L?g[Y].el:y;for(;R<=$;)T(null,g[R]=k?An(g[R]):$t(g[R]),m,se,I,w,D,C,k),R++}}else if(R>$)for(;R<=j;)dt(f[R],I,w,!0),R++;else{const Y=R,se=R,Ee=new Map;for(R=se;R<=$;R++){const _t=g[R]=k?An(g[R]):$t(g[R]);_t.key!=null&&Ee.set(_t.key,R)}let Pe,xe=0;const kt=$-se+1;let Cr=!1,vh=0;const Es=new Array(kt);for(R=0;R<kt;R++)Es[R]=0;for(R=Y;R<=j;R++){const _t=f[R];if(xe>=kt){dt(_t,I,w,!0);continue}let Ut;if(_t.key!=null)Ut=Ee.get(_t.key);else for(Pe=se;Pe<=$;Pe++)if(Es[Pe-se]===0&&Ts(_t,g[Pe])){Ut=Pe;break}Ut===void 0?dt(_t,I,w,!0):(Es[Ut-se]=R+1,Ut>=vh?vh=Ut:Cr=!0,T(_t,g[Ut],m,null,I,w,D,C,k),xe++)}const Eh=Cr?rE(Es):Ur;for(Pe=Eh.length-1,R=kt-1;R>=0;R--){const _t=se+R,Ut=g[_t],Th=_t+1<L?g[_t+1].el:y;Es[R]===0?T(null,Ut,m,Th,I,w,D,C,k):Cr&&(Pe<0||R!==Eh[Pe]?Ft(Ut,m,Th,2):Pe--)}}},Ft=(f,g,m,y,I=null)=>{const{el:w,type:D,transition:C,children:k,shapeFlag:R}=f;if(R&6){Ft(f.component.subTree,g,m,y);return}if(R&128){f.suspense.move(g,m,y);return}if(R&64){D.move(f,g,m,O);return}if(D===vt){r(w,g,m);for(let j=0;j<k.length;j++)Ft(k[j],g,m,y);r(f.anchor,g,m);return}if(D===dl){V(f,g,m);return}if(y!==2&&R&1&&C)if(y===0)C.beforeEnter(w),r(w,g,m),ft(()=>C.enter(w),I);else{const{leave:j,delayLeave:$,afterLeave:Y}=C,se=()=>r(w,g,m),Ee=()=>{j(w,()=>{se(),Y&&Y()})};$?$(w,se,Ee):Ee()}else r(w,g,m)},dt=(f,g,m,y=!1,I=!1)=>{const{type:w,props:D,ref:C,children:k,dynamicChildren:R,shapeFlag:L,patchFlag:j,dirs:$}=f;if(C!=null&&Ql(C,null,m,f,!0),L&256){g.ctx.deactivate(f);return}const Y=L&1&&$,se=!ho(f);let Ee;if(se&&(Ee=D&&D.onVnodeBeforeUnmount)&&Bt(Ee,g,f),L&6)zi(f.component,m,y);else{if(L&128){f.suspense.unmount(m,y);return}Y&&Yn(f,null,g,"beforeUnmount"),L&64?f.type.remove(f,g,m,I,O,y):R&&(w!==vt||j>0&&j&64)?Je(R,g,m,!1,!0):(w===vt&&j&384||!I&&L&16)&&Je(k,g,m),y&&Sr(f)}(se&&(Ee=D&&D.onVnodeUnmounted)||Y)&&ft(()=>{Ee&&Bt(Ee,g,f),Y&&Yn(f,null,g,"unmounted")},m)},Sr=f=>{const{type:g,el:m,anchor:y,transition:I}=f;if(g===vt){Pr(m,y);return}if(g===dl){U(f);return}const w=()=>{s(m),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:D,delayLeave:C}=I,k=()=>D(m,w);C?C(f.el,w,k):k()}else w()},Pr=(f,g)=>{let m;for(;f!==g;)m=d(f),s(f),f=m;s(g)},zi=(f,g,m)=>{const{bum:y,scope:I,update:w,subTree:D,um:C}=f;y&&co(y),I.stop(),w&&(w.active=!1,dt(D,f,g,m)),C&&ft(C,g),ft(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Je=(f,g,m,y=!1,I=!1,w=0)=>{for(let D=w;D<f.length;D++)dt(f[D],g,m,y,I)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),x=(f,g,m)=>{f==null?g._vnode&&dt(g._vnode,null,null,!0):T(g._vnode||null,f,g,null,null,null,m),Oh(),Ep(),g._vnode=f},O={p:T,um:dt,m:Ft,r:Sr,mt:Qn,mc:re,pc:fe,pbc:we,n:v,o:t};let B,pe;return e&&([B,pe]=e(O)),{render:x,hydrate:B,createApp:Wv(x,B)}}function hl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Jn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function nE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Vp(t,e,n=!1){const r=t.children,s=e.children;if(z(r)&&z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=An(s[i]),a.el=o.el),n||Vp(o,a)),a.type===_a&&(a.el=o.el)}}function rE(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Mp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Mp(e)}const sE=t=>t.__isTeleport,vt=Symbol.for("v-fgt"),_a=Symbol.for("v-txt"),ur=Symbol.for("v-cmt"),dl=Symbol.for("v-stc"),xs=[];let Ot=null;function He(t=!1){xs.push(Ot=t?null:[])}function iE(){xs.pop(),Ot=xs[xs.length-1]||null}let Zs=1;function jh(t){Zs+=t}function Lp(t){return t.dynamicChildren=Zs>0?Ot||Ur:null,iE(),Zs>0&&Ot&&Ot.push(t),t}function ct(t,e,n,r,s,i){return Lp(ie(t,e,n,r,s,i,!0))}function xp(t,e,n,r,s){return Lp(te(t,e,n,r,s,!0))}function ei(t){return t?t.__v_isVNode===!0:!1}function Ts(t,e){return t.type===e.type&&t.key===e.key}const ya="__vInternal",Fp=({key:t})=>t??null,po=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Le(t)||Oe(t)||X(t)?{i:Tt,r:t,k:e,f:!!n}:t:null);function ie(t,e=null,n=null,r=0,s=null,i=t===vt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fp(e),ref:e&&po(e),scopeId:fa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tt};return a?(iu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Le(n)?8:16),Zs>0&&!o&&Ot&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ot.push(l),l}const te=oE;function oE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Iv)&&(t=ur),ei(t)){const a=hr(t,e,!0);return n&&iu(a,n),Zs>0&&!i&&Ot&&(a.shapeFlag&6?Ot[Ot.indexOf(t)]=a:Ot.push(a)),a.patchFlag|=-2,a}if(mE(t)&&(t=t.__vccOpts),e){e=aE(e);let{class:a,style:l}=e;a&&!Le(a)&&(e.class=aa(a)),Ie(l)&&(dp(l)&&!z(l)&&(l=Qe({},l)),e.style=Kc(l))}const o=Le(t)?1:Av(t)?128:sE(t)?64:Ie(t)?4:X(t)?2:0;return ie(t,e,n,r,s,o,i,!0)}function aE(t){return t?dp(t)||ya in t?Qe({},t):t:null}function hr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?_n(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Fp(a),ref:e&&e.ref?n&&s?z(s)?s.concat(po(e)):[s,po(e)]:po(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==vt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hr(t.ssContent),ssFallback:t.ssFallback&&hr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Up(t=" ",e=0){return te(_a,null,t,e)}function qh(t="",e=!1){return e?(He(),xp(ur,null,t)):te(ur,null,t)}function $t(t){return t==null||typeof t=="boolean"?te(ur):z(t)?te(vt,null,t.slice()):typeof t=="object"?An(t):te(_a,null,String(t))}function An(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hr(t)}function iu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),iu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ya in e)?e._ctx=Tt:s===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:Tt},n=32):(e=String(e),r&64?(n=16,e=[Up(e)]):n=8);t.children=e,t.shapeFlag|=n}function _n(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=aa([e.class,r.class]));else if(s==="style")e.style=Kc([e.style,r.style]);else if(ra(s)){const i=e[s],o=r[s];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Bt(t,e,n,r=null){Dt(t,e,7,[n,r])}const lE=Cp();let cE=0;function uE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||lE,i={uid:cE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Yf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kp(r,s),emitsOptions:Ip(r,s),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=fv.bind(null,i),t.ce&&t.ce(i),i}let Ue=null,ou,Yl;{const t=Wf(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ou=e("__VUE_INSTANCE_SETTERS__",n=>Ue=n),Yl=e("__VUE_SSR_SETTERS__",n=>va=n)}const Yr=t=>{ou(t),t.scope.on()},ar=()=>{Ue&&Ue.scope.off(),ou(null)};function Bp(t){return t.vnode.shapeFlag&4}let va=!1;function hE(t,e=!1){e&&Yl(e);const{props:n,children:r}=t.vnode,s=Bp(t);Qv(t,n,s,e),Xv(t,r);const i=s?dE(t,e):void 0;return e&&Yl(!1),i}function dE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ua(new Proxy(t.ctx,Bv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?pE(t):null;Yr(t),Er();const i=Dn(r,t,0,[t.props,s]);if(Tr(),ar(),Hf(i)){if(i.then(ar,ar),e)return i.then(o=>{Hh(t,o,e)}).catch(o=>{ha(o,t,0)});t.asyncDep=i}else Hh(t,i,e)}else $p(t,e)}function Hh(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=mp(e)),$p(t,n)}let zh;function $p(t,e,n){const r=t.type;if(!t.render){if(!e&&zh&&!r.render){const s=r.template||ru(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Qe(Qe({isCustomElement:i,delimiters:a},o),l);r.render=zh(s,c)}}t.render=r.render||bt}{Yr(t),Er();try{$v(t)}finally{Tr(),ar()}}}function fE(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return gt(t,"get","$attrs"),e[n]}}))}function pE(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return fE(t)},slots:t.slots,emit:t.emit,expose:e}}function Ea(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(mp(ua(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ls)return Ls[n](t)},has(e,n){return n in e||n in Ls}}))}function gE(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function mE(t){return X(t)&&"__vccOpts"in t}const _e=(t,e)=>ev(t,e,va);function Lr(t,e,n){const r=arguments.length;return r===2?Ie(e)&&!z(e)?ei(e)?te(t,null,[e]):te(t,e):te(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ei(n)&&(n=[n]),te(t,e,n))}const _E="3.4.3",yE="http://www.w3.org/2000/svg",vE="http://www.w3.org/1998/Math/MathML",Rn=typeof document<"u"?document:null,Kh=Rn&&Rn.createElement("template"),EE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Rn.createElementNS(yE,t):e==="mathml"?Rn.createElementNS(vE,t):Rn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Rn.createTextNode(t),createComment:t=>Rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Kh.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Kh.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},TE=Symbol("_vtc");function IE(t,e,n){const r=t[TE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wE=Symbol("_vod"),AE=Symbol("");function RE(t,e,n){const r=t.style,s=Le(n);if(n&&!s){if(e&&!Le(e))for(const i in e)n[i]==null&&Jl(r,i,"");for(const i in n)Jl(r,i,n[i])}else{const i=r.display;if(s){if(e!==n){const o=r[AE];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");wE in t&&(r.display=i)}}const Wh=/\s*!important$/;function Jl(t,e,n){if(z(n))n.forEach(r=>Jl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=SE(t,e);Wh.test(n)?t.setProperty(hs(r),n.replace(Wh,""),"important"):t[r]=n}}const Gh=["Webkit","Moz","ms"],fl={};function SE(t,e){const n=fl[e];if(n)return n;let r=Xt(e);if(r!=="filter"&&r in t)return fl[e]=r;r=oa(r);for(let s=0;s<Gh.length;s++){const i=Gh[s]+r;if(i in t)return fl[e]=i}return e}const Qh="http://www.w3.org/1999/xlink";function PE(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Qh,e.slice(6,e.length)):t.setAttributeNS(Qh,e,n);else{const i=by(e);n==null||i&&!Gf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function CE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Gf(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function er(t,e,n,r){t.addEventListener(e,n,r)}function bE(t,e,n,r){t.removeEventListener(e,n,r)}const Yh=Symbol("_vei");function kE(t,e,n,r,s=null){const i=t[Yh]||(t[Yh]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=OE(e);if(r){const c=i[e]=VE(r,s);er(t,a,c,l)}else o&&(bE(t,a,o,l),i[e]=void 0)}}const Jh=/(?:Once|Passive|Capture)$/;function OE(t){let e;if(Jh.test(t)){e={};let r;for(;r=t.match(Jh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):hs(t.slice(2)),e]}let pl=0;const NE=Promise.resolve(),DE=()=>pl||(NE.then(()=>pl=0),pl=Date.now());function VE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Dt(ME(r,n.value),e,5,[r])};return n.value=t,n.attached=DE(),n}function ME(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Xh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,LE=(t,e,n,r,s,i,o,a,l)=>{const c=s==="svg";e==="class"?IE(t,r,c):e==="style"?RE(t,n,r):ra(e)?qc(e)||kE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xE(t,e,r,c))?CE(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),PE(t,e,r,c))};function xE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Xh(e)&&X(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Xh(e)&&Le(n)?!1:e in t}const Oo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>co(e,n):e};function FE(t){t.target.composing=!0}function Zh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const jr=Symbol("_assign"),Xl={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[jr]=Oo(s);const i=r||s.props&&s.props.type==="number";er(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=So(a)),t[jr](a)}),n&&er(t,"change",()=>{t.value=t.value.trim()}),e||(er(t,"compositionstart",FE),er(t,"compositionend",Zh),er(t,"change",Zh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[jr]=Oo(i),t.composing)return;const o=s||t.type==="number"?So(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},UE={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=sa(e);er(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?So(No(o)):No(o));t[jr](t.multiple?s?new Set(i):i:i[0])}),t[jr]=Oo(r)},mounted(t,{value:e}){ed(t,e)},beforeUpdate(t,e,n){t[jr]=Oo(n)},updated(t,{value:e}){ed(t,e)}};function ed(t,e){const n=t.multiple;if(!(n&&!z(e)&&!sa(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=No(i);if(n)z(e)?i.selected=Oy(e,o)>-1:i.selected=e.has(o);else if(la(No(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function No(t){return"_value"in t?t._value:t.value}const BE=["ctrl","shift","alt","meta"],$E={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>BE.some(n=>t[`${n}Key`]&&!e.includes(n))},jp=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=$E[e[o]];if(a&&a(s,e))return}return t(s,...i)})},jE=Qe({patchProp:LE},EE);let td;function qE(){return td||(td=eE(jE))}const qp=(...t)=>{const e=qE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=zE(r);if(!s)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,HE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function HE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function zE(t){return Le(t)?document.querySelector(t):t}var KE=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Hp;const Ta=t=>Hp=t,zp=Symbol();function Zl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Fs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Fs||(Fs={}));function WE(){const t=Jf(!0),e=t.run(()=>nt({}));let n=[],r=[];const s=ua({install(i){Ta(s),s._a=i,i.provide(zp,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!KE?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Kp=()=>{};function nd(t,e,n,r=Kp){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Xf()&&Dy(s),s}function br(t,...e){t.slice().forEach(n=>{n(...e)})}const GE=t=>t();function ec(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Zl(s)&&Zl(r)&&t.hasOwnProperty(n)&&!Oe(r)&&!hn(r)?t[n]=ec(s,r):t[n]=r}return t}const QE=Symbol();function YE(t){return!Zl(t)||!t.hasOwnProperty(QE)}const{assign:wn}=Object;function JE(t){return!!(Oe(t)&&t.effect)}function XE(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=sv(n.state.value[t]);return wn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=ua(_e(()=>{Ta(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return l=Wp(t,c,e,n,r,!0),l}function Wp(t,e,n={},r,s,i){let o;const a=wn({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],p;const _=r.state.value[t];!i&&!_&&(r.state.value[t]={}),nt({});let T;function E(re){let ee;c=u=!1,typeof re=="function"?(re(r.state.value[t]),ee={type:Fs.patchFunction,storeId:t,events:p}):(ec(r.state.value[t],re),ee={type:Fs.patchObject,payload:re,storeId:t,events:p});const we=T=Symbol();Ii().then(()=>{T===we&&(c=!0)}),u=!0,br(h,ee,r.state.value[t])}const P=i?function(){const{state:ee}=n,we=ee?ee():{};this.$patch(Ye=>{wn(Ye,we)})}:Kp;function b(){o.stop(),h=[],d=[],r._s.delete(t)}function V(re,ee){return function(){Ta(r);const we=Array.from(arguments),Ye=[],mt=[];function Rt(he){Ye.push(he)}function Qn(he){mt.push(he)}br(d,{args:we,name:re,store:M,after:Rt,onError:Qn});let St;try{St=ee.apply(this&&this.$id===t?this:M,we)}catch(he){throw br(mt,he),he}return St instanceof Promise?St.then(he=>(br(Ye,he),he)).catch(he=>(br(mt,he),Promise.reject(he))):(br(Ye,St),St)}}const U={_p:r,$id:t,$onAction:nd.bind(null,d),$patch:E,$reset:P,$subscribe(re,ee={}){const we=nd(h,re,ee.detached,()=>Ye()),Ye=o.run(()=>Ms(()=>r.state.value[t],mt=>{(ee.flush==="sync"?u:c)&&re({storeId:t,type:Fs.direct,events:p},mt)},wn({},l,ee)));return we},$dispose:b},M=xt(U);r._s.set(t,M);const Te=(r._a&&r._a.runWithContext||GE)(()=>r._e.run(()=>(o=Jf()).run(e)));for(const re in Te){const ee=Te[re];if(Oe(ee)&&!JE(ee)||hn(ee))i||(_&&YE(ee)&&(Oe(ee)?ee.value=_[re]:ec(ee,_[re])),r.state.value[t][re]=ee);else if(typeof ee=="function"){const we=V(re,ee);Te[re]=we,a.actions[re]=ee}}return wn(M,Te),wn(G(M),Te),Object.defineProperty(M,"$state",{get:()=>r.state.value[t],set:re=>{E(ee=>{wn(ee,re)})}}),r._p.forEach(re=>{wn(M,o.run(()=>re({store:M,app:r._a,pinia:r,options:a})))}),_&&i&&n.hydrate&&n.hydrate(M.$state,_),c=!0,u=!0,M}function ZE(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const c=Gv();return a=a||(c?Kt(zp,null):null),a&&Ta(a),a=Hp,a._s.has(r)||(i?Wp(r,e,s,a):XE(r,s,a)),a._s.get(r)}return o.$id=r,o}function eT(t){{t=G(t);const e={};for(const n in t){const r=t[n];(Oe(r)||hn(r))&&(e[n]=av(t,n))}return e}}const au=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},tT={};function nT(t,e){const n=Tv("router-view");return He(),xp(n)}const rT=au(tT,[["render",nT]]);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Or=typeof window<"u";function sT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const me=Object.assign;function gl(t,e){const n={};for(const r in e){const s=e[r];n[r]=Vt(s)?s.map(t):t(s)}return n}const Us=()=>{},Vt=Array.isArray,iT=/\/$/,oT=t=>t.replace(iT,"");function ml(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=uT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function aT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function rd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function lT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Jr(e.matched[r],n.matched[s])&&Gp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Jr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Gp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!cT(t[n],e[n]))return!1;return!0}function cT(t,e){return Vt(t)?sd(t,e):Vt(e)?sd(e,t):t===e}function sd(t,e){return Vt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function uT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ti;(function(t){t.pop="pop",t.push="push"})(ti||(ti={}));var Bs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Bs||(Bs={}));function hT(t){if(!t)if(Or){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),oT(t)}const dT=/^[^#]+#/;function fT(t,e){return t.replace(dT,"#")+e}function pT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ia=()=>({left:window.pageXOffset,top:window.pageYOffset});function gT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=pT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function id(t,e){return(history.state?history.state.position-e:-1)+t}const tc=new Map;function mT(t,e){tc.set(t,e)}function _T(t){const e=tc.get(t);return tc.delete(t),e}let yT=()=>location.protocol+"//"+location.host;function Qp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),rd(l,"")}return rd(n,t)+r+s}function vT(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=Qp(t,location),_=n.value,T=e.value;let E=0;if(d){if(n.value=p,e.value=d,o&&o===_){o=null;return}E=T?d.position-T.position:0}else r(p);s.forEach(P=>{P(n.value,_,{delta:E,type:ti.pop,direction:E?E>0?Bs.forward:Bs.back:Bs.unknown})})};function l(){o=n.value}function c(d){s.push(d);const p=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(me({},d.state,{scroll:Ia()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function od(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ia():null}}function ET(t){const{history:e,location:n}=window,r={value:Qp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:yT()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=me({},e.state,od(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=me({},s.value,e.state,{forward:l,scroll:Ia()});i(u.current,u,!0);const h=me({},od(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function TT(t){t=hT(t);const e=ET(t),n=vT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=me({location:"",base:t,go:r,createHref:fT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function IT(t){return typeof t=="string"||t&&typeof t=="object"}function Yp(t){return typeof t=="string"||typeof t=="symbol"}const Tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Jp=Symbol("");var ad;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ad||(ad={}));function Xr(t,e){return me(new Error,{type:t,[Jp]:!0},e)}function rn(t,e){return t instanceof Error&&Jp in t&&(e==null||!!(t.type&e))}const ld="[^/]+?",wT={sensitive:!1,strict:!1,start:!0,end:!0},AT=/[.+*?^${}()[\]/\\]/g;function RT(t,e){const n=me({},wT,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(AT,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:T,optional:E,regexp:P}=d;i.push({name:_,repeatable:T,optional:E});const b=P||ld;if(b!==ld){p+=10;try{new RegExp(`(${b})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+U.message)}}let V=T?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(V=E&&c.length<2?`(?:/${V})`:"/"+V),E&&(V+="?"),s+=V,p+=20,E&&(p+=-8),T&&(p+=-20),b===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",_=i[d-1];h[_.name]=p&&_.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:T,optional:E}=p,P=_ in c?c[_]:"";if(Vt(P)&&!T)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=Vt(P)?P.join("/"):P;if(!b)if(E)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=b}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function ST(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function PT(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ST(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(cd(r))return 1;if(cd(s))return-1}return s.length-r.length}function cd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const CT={type:0,value:""},bT=/[a-zA-Z0-9_]/;function kT(t){if(!t)return[[]];if(t==="/")return[[CT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:bT.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function OT(t,e,n){const r=RT(kT(t.path),n),s=me(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function NT(t,e){const n=[],r=new Map;e=dd({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,_=DT(u);_.aliasOf=d&&d.record;const T=dd(e,u),E=[_];if("alias"in u){const V=typeof u.alias=="string"?[u.alias]:u.alias;for(const U of V)E.push(me({},_,{components:d?d.record.components:_.components,path:U,aliasOf:d?d.record:_}))}let P,b;for(const V of E){const{path:U}=V;if(h&&U[0]!=="/"){const M=h.record.path,ne=M[M.length-1]==="/"?"":"/";V.path=h.record.path+(U&&ne+U)}if(P=OT(V,h,T),d?d.alias.push(P):(b=b||P,b!==P&&b.alias.push(P),p&&u.name&&!hd(P)&&o(u.name)),_.children){const M=_.children;for(let ne=0;ne<M.length;ne++)i(M[ne],P,d&&d.children[ne])}d=d||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&l(P)}return b?()=>{o(b)}:Us}function o(u){if(Yp(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&PT(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Xp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!hd(u)&&r.set(u.record.name,u)}function c(u,h){let d,p={},_,T;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Xr(1,{location:u});T=d.record.name,p=me(ud(h.params,d.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&ud(u.params,d.keys.map(b=>b.name))),_=d.stringify(p)}else if("path"in u)_=u.path,d=n.find(b=>b.re.test(_)),d&&(p=d.parse(_),T=d.record.name);else{if(d=h.name?r.get(h.name):n.find(b=>b.re.test(h.path)),!d)throw Xr(1,{location:u,currentLocation:h});T=d.record.name,p=me({},h.params,u.params),_=d.stringify(p)}const E=[];let P=d;for(;P;)E.unshift(P.record),P=P.parent;return{name:T,path:_,params:p,matched:E,meta:MT(E)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ud(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function DT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:VT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function VT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function hd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function MT(t){return t.reduce((e,n)=>me(e,n.meta),{})}function dd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Xp(t,e){return e.children.some(n=>n===t||Xp(t,n))}const Zp=/#/g,LT=/&/g,xT=/\//g,FT=/=/g,UT=/\?/g,eg=/\+/g,BT=/%5B/g,$T=/%5D/g,tg=/%5E/g,jT=/%60/g,ng=/%7B/g,qT=/%7C/g,rg=/%7D/g,HT=/%20/g;function lu(t){return encodeURI(""+t).replace(qT,"|").replace(BT,"[").replace($T,"]")}function zT(t){return lu(t).replace(ng,"{").replace(rg,"}").replace(tg,"^")}function nc(t){return lu(t).replace(eg,"%2B").replace(HT,"+").replace(Zp,"%23").replace(LT,"%26").replace(jT,"`").replace(ng,"{").replace(rg,"}").replace(tg,"^")}function KT(t){return nc(t).replace(FT,"%3D")}function WT(t){return lu(t).replace(Zp,"%23").replace(UT,"%3F")}function GT(t){return t==null?"":WT(t).replace(xT,"%2F")}function Do(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function QT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(eg," "),o=i.indexOf("="),a=Do(o<0?i:i.slice(0,o)),l=o<0?null:Do(i.slice(o+1));if(a in e){let c=e[a];Vt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function fd(t){let e="";for(let n in t){const r=t[n];if(n=KT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Vt(r)?r.map(i=>i&&nc(i)):[r&&nc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function YT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Vt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const JT=Symbol(""),pd=Symbol(""),cu=Symbol(""),sg=Symbol(""),rc=Symbol("");function Is(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Sn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Xr(4,{from:n,to:e})):h instanceof Error?a(h):IT(h)?a(Xr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function _l(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(XT(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Sn(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=sT(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Sn(d,n,r,i,o)()}))}}return s}function XT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function gd(t){const e=Kt(cu),n=Kt(sg),r=_e(()=>e.resolve(Nt(t.to))),s=_e(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Jr.bind(null,u));if(d>-1)return d;const p=md(l[c-2]);return c>1&&md(u)===p&&h[h.length-1].path!==p?h.findIndex(Jr.bind(null,l[c-2])):d}),i=_e(()=>s.value>-1&&nI(n.params,r.value.params)),o=_e(()=>s.value>-1&&s.value===n.matched.length-1&&Gp(n.params,r.value.params));function a(l={}){return tI(l)?e[Nt(t.replace)?"replace":"push"](Nt(t.to)).catch(Us):Promise.resolve()}return{route:r,href:_e(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const ZT=ds({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:gd,setup(t,{slots:e}){const n=xt(gd(t)),{options:r}=Kt(cu),s=_e(()=>({[_d(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_d(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Lr("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),eI=ZT;function tI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Vt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function md(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _d=(t,e,n)=>t??e??n,rI=ds({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Kt(rc),s=_e(()=>t.route||r.value),i=Kt(pd,0),o=_e(()=>{let c=Nt(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=_e(()=>s.value.matched[o.value]);fo(pd,_e(()=>o.value+1)),fo(JT,a),fo(rc,s);const l=nt();return Ms(()=>[l.value,a.value,t.name],([c,u,h],[d,p,_])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Jr(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(T=>T(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return yd(n.default,{Component:d,route:c});const p=h.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,E=Lr(d,me({},_,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return yd(n.default,{Component:E,route:c})||E}}});function yd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const sI=rI;function iI(t){const e=NT(t.routes,t),n=t.parseQuery||QT,r=t.stringifyQuery||fd,s=t.history,i=Is(),o=Is(),a=Is(),l=tv(Tn);let c=Tn;Or&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=gl.bind(null,v=>""+v),h=gl.bind(null,GT),d=gl.bind(null,Do);function p(v,x){let O,B;return Yp(v)?(O=e.getRecordMatcher(v),B=x):B=v,e.addRoute(B,O)}function _(v){const x=e.getRecordMatcher(v);x&&e.removeRoute(x)}function T(){return e.getRoutes().map(v=>v.record)}function E(v){return!!e.getRecordMatcher(v)}function P(v,x){if(x=me({},x||l.value),typeof v=="string"){const m=ml(n,v,x.path),y=e.resolve({path:m.path},x),I=s.createHref(m.fullPath);return me(m,y,{params:d(y.params),hash:Do(m.hash),redirectedFrom:void 0,href:I})}let O;if("path"in v)O=me({},v,{path:ml(n,v.path,x.path).path});else{const m=me({},v.params);for(const y in m)m[y]==null&&delete m[y];O=me({},v,{params:h(m)}),x.params=h(x.params)}const B=e.resolve(O,x),pe=v.hash||"";B.params=u(d(B.params));const f=aT(r,me({},v,{hash:zT(pe),path:B.path})),g=s.createHref(f);return me({fullPath:f,hash:pe,query:r===fd?YT(v.query):v.query||{}},B,{redirectedFrom:void 0,href:g})}function b(v){return typeof v=="string"?ml(n,v,l.value.path):me({},v)}function V(v,x){if(c!==v)return Xr(8,{from:x,to:v})}function U(v){return Te(v)}function M(v){return U(me(b(v),{replace:!0}))}function ne(v){const x=v.matched[v.matched.length-1];if(x&&x.redirect){const{redirect:O}=x;let B=typeof O=="function"?O(v):O;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=b(B):{path:B},B.params={}),me({query:v.query,hash:v.hash,params:"path"in B?{}:v.params},B)}}function Te(v,x){const O=c=P(v),B=l.value,pe=v.state,f=v.force,g=v.replace===!0,m=ne(O);if(m)return Te(me(b(m),{state:typeof m=="object"?me({},pe,m.state):pe,force:f,replace:g}),x||O);const y=O;y.redirectedFrom=x;let I;return!f&&lT(r,B,O)&&(I=Xr(16,{to:y,from:B}),Ft(B,B,!0,!1)),(I?Promise.resolve(I):we(y,B)).catch(w=>rn(w)?rn(w,2)?w:vn(w):fe(w,y,B)).then(w=>{if(w){if(rn(w,2))return Te(me({replace:g},b(w.to),{state:typeof w.to=="object"?me({},pe,w.to.state):pe,force:f}),x||y)}else w=mt(y,B,!0,g,pe);return Ye(y,B,w),w})}function re(v,x){const O=V(v,x);return O?Promise.reject(O):Promise.resolve()}function ee(v){const x=Pr.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(v):v()}function we(v,x){let O;const[B,pe,f]=oI(v,x);O=_l(B.reverse(),"beforeRouteLeave",v,x);for(const m of B)m.leaveGuards.forEach(y=>{O.push(Sn(y,v,x))});const g=re.bind(null,v,x);return O.push(g),Je(O).then(()=>{O=[];for(const m of i.list())O.push(Sn(m,v,x));return O.push(g),Je(O)}).then(()=>{O=_l(pe,"beforeRouteUpdate",v,x);for(const m of pe)m.updateGuards.forEach(y=>{O.push(Sn(y,v,x))});return O.push(g),Je(O)}).then(()=>{O=[];for(const m of f)if(m.beforeEnter)if(Vt(m.beforeEnter))for(const y of m.beforeEnter)O.push(Sn(y,v,x));else O.push(Sn(m.beforeEnter,v,x));return O.push(g),Je(O)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),O=_l(f,"beforeRouteEnter",v,x),O.push(g),Je(O))).then(()=>{O=[];for(const m of o.list())O.push(Sn(m,v,x));return O.push(g),Je(O)}).catch(m=>rn(m,8)?m:Promise.reject(m))}function Ye(v,x,O){a.list().forEach(B=>ee(()=>B(v,x,O)))}function mt(v,x,O,B,pe){const f=V(v,x);if(f)return f;const g=x===Tn,m=Or?history.state:{};O&&(B||g?s.replace(v.fullPath,me({scroll:g&&m&&m.scroll},pe)):s.push(v.fullPath,pe)),l.value=v,Ft(v,x,O,g),vn()}let Rt;function Qn(){Rt||(Rt=s.listen((v,x,O)=>{if(!zi.listening)return;const B=P(v),pe=ne(B);if(pe){Te(me(pe,{replace:!0}),B).catch(Us);return}c=B;const f=l.value;Or&&mT(id(f.fullPath,O.delta),Ia()),we(B,f).catch(g=>rn(g,12)?g:rn(g,2)?(Te(g.to,B).then(m=>{rn(m,20)&&!O.delta&&O.type===ti.pop&&s.go(-1,!1)}).catch(Us),Promise.reject()):(O.delta&&s.go(-O.delta,!1),fe(g,B,f))).then(g=>{g=g||mt(B,f,!1),g&&(O.delta&&!rn(g,8)?s.go(-O.delta,!1):O.type===ti.pop&&rn(g,20)&&s.go(-1,!1)),Ye(B,f,g)}).catch(Us)}))}let St=Is(),he=Is(),ve;function fe(v,x,O){vn(v);const B=he.list();return B.length?B.forEach(pe=>pe(v,x,O)):console.error(v),Promise.reject(v)}function nn(){return ve&&l.value!==Tn?Promise.resolve():new Promise((v,x)=>{St.add([v,x])})}function vn(v){return ve||(ve=!v,Qn(),St.list().forEach(([x,O])=>v?O(v):x()),St.reset()),v}function Ft(v,x,O,B){const{scrollBehavior:pe}=t;if(!Or||!pe)return Promise.resolve();const f=!O&&_T(id(v.fullPath,0))||(B||!O)&&history.state&&history.state.scroll||null;return Ii().then(()=>pe(v,x,f)).then(g=>g&&gT(g)).catch(g=>fe(g,v,x))}const dt=v=>s.go(v);let Sr;const Pr=new Set,zi={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,hasRoute:E,getRoutes:T,resolve:P,options:t,push:U,replace:M,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:he.add,isReady:nn,install(v){const x=this;v.component("RouterLink",eI),v.component("RouterView",sI),v.config.globalProperties.$router=x,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Nt(l)}),Or&&!Sr&&l.value===Tn&&(Sr=!0,U(s.location).catch(pe=>{}));const O={};for(const pe in Tn)Object.defineProperty(O,pe,{get:()=>l.value[pe],enumerable:!0});v.provide(cu,x),v.provide(sg,up(O)),v.provide(rc,l);const B=v.unmount;Pr.add(v),v.unmount=function(){Pr.delete(v),Pr.size<1&&(c=Tn,Rt&&Rt(),Rt=null,l.value=Tn,Sr=!1,ve=!1),B()}}};function Je(v){return v.reduce((x,O)=>x.then(()=>ee(O)),Promise.resolve())}return zi}function oI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Jr(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Jr(c,l))||s.push(l))}return[n,r,s]}var vd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},aI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},og={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ig(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new lI;const d=i<<2|a>>4;if(r.push(d),c!==64){const p=a<<4&240|c>>2;if(r.push(p),h!==64){const _=c<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cI=function(t){const e=ig(t);return og.encodeByteArray(e,!0)},Vo=function(t){return cI(t).replace(/\./g,"")},ag=function(t){try{return og.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=()=>uI().__FIREBASE_DEFAULTS__,dI=()=>{if(typeof process>"u"||typeof vd>"u")return;const t=vd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ag(t[1]);return e&&JSON.parse(e)},uu=()=>{try{return hI()||dI()||fI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lg=t=>{var e,n;return(n=(e=uu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pI=t=>{const e=lg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},cg=()=>{var t;return(t=uu())===null||t===void 0?void 0:t.config},ug=t=>{var e;return(e=uu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vo(JSON.stringify(n)),Vo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _I(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function yI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function EI(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function TI(){try{return typeof indexedDB=="object"}catch{return!1}}function II(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wI,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wi.prototype.create)}}class wi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?AI(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new yn(s,a,r)}}function AI(t,e){return t.replace(RI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const RI=/\{\$([^}]+)}/g;function SI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ed(i)&&Ed(o)){if(!Mo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ed(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function PI(t,e){const n=new CI(t,e);return n.subscribe.bind(n)}class CI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=yl),s.error===void 0&&(s.error=yl),s.complete===void 0&&(s.complete=yl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){return t&&t._delegate?t._delegate:t}class dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NI(e))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xn){return this.instances.has(e)}getOptions(e=Xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xn){return this.component?this.component.multipleInstances?e:Xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OI(t){return t===Xn?void 0:t}function NI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const VI={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},MI=ae.INFO,LI={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},xI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=LI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hu{constructor(e){this.name=e,this._logLevel=MI,this._logHandler=xI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const FI=(t,e)=>e.some(n=>t instanceof n);let Td,Id;function UI(){return Td||(Td=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BI(){return Id||(Id=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hg=new WeakMap,sc=new WeakMap,dg=new WeakMap,vl=new WeakMap,du=new WeakMap;function $I(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Vn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hg.set(n,t)}).catch(()=>{}),du.set(e,t),e}function jI(t){if(sc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});sc.set(t,e)}let ic={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qI(t){ic=t(ic)}function HI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(El(this),e,...n);return dg.set(r,e.sort?e.sort():[e]),Vn(r)}:BI().includes(t)?function(...e){return t.apply(El(this),e),Vn(hg.get(this))}:function(...e){return Vn(t.apply(El(this),e))}}function zI(t){return typeof t=="function"?HI(t):(t instanceof IDBTransaction&&jI(t),FI(t,UI())?new Proxy(t,ic):t)}function Vn(t){if(t instanceof IDBRequest)return $I(t);if(vl.has(t))return vl.get(t);const e=zI(t);return e!==t&&(vl.set(t,e),du.set(e,t)),e}const El=t=>du.get(t);function KI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Vn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Vn(o.result),l.oldVersion,l.newVersion,Vn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const WI=["get","getKey","getAll","getAllKeys","count"],GI=["put","add","delete","clear"],Tl=new Map;function wd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tl.get(e))return Tl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=GI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||WI.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Tl.set(e,i),i}qI(t=>({...t,get:(e,n,r)=>wd(e,n)||t.get(e,n,r),has:(e,n)=>!!wd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oc="@firebase/app",Ad="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new hu("@firebase/app"),JI="@firebase/app-compat",XI="@firebase/analytics-compat",ZI="@firebase/analytics",ew="@firebase/app-check-compat",tw="@firebase/app-check",nw="@firebase/auth",rw="@firebase/auth-compat",sw="@firebase/database",iw="@firebase/database-compat",ow="@firebase/functions",aw="@firebase/functions-compat",lw="@firebase/installations",cw="@firebase/installations-compat",uw="@firebase/messaging",hw="@firebase/messaging-compat",dw="@firebase/performance",fw="@firebase/performance-compat",pw="@firebase/remote-config",gw="@firebase/remote-config-compat",mw="@firebase/storage",_w="@firebase/storage-compat",yw="@firebase/firestore",vw="@firebase/firestore-compat",Ew="firebase",Tw="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="[DEFAULT]",Iw={[oc]:"fire-core",[JI]:"fire-core-compat",[ZI]:"fire-analytics",[XI]:"fire-analytics-compat",[tw]:"fire-app-check",[ew]:"fire-app-check-compat",[nw]:"fire-auth",[rw]:"fire-auth-compat",[sw]:"fire-rtdb",[iw]:"fire-rtdb-compat",[ow]:"fire-fn",[aw]:"fire-fn-compat",[lw]:"fire-iid",[cw]:"fire-iid-compat",[uw]:"fire-fcm",[hw]:"fire-fcm-compat",[dw]:"fire-perf",[fw]:"fire-perf-compat",[pw]:"fire-rc",[gw]:"fire-rc-compat",[mw]:"fire-gcs",[_w]:"fire-gcs-compat",[yw]:"fire-fst",[vw]:"fire-fst-compat","fire-js":"fire-js",[Ew]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new Map,lc=new Map;function ww(t,e){try{t.container.addComponent(e)}catch(n){fr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zr(t){const e=t.name;if(lc.has(e))return fr.debug(`There were multiple attempts to register component ${e}.`),!1;lc.set(e,t);for(const n of Lo.values())ww(n,t);return!0}function fu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mn=new wi("app","Firebase",Aw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=Tw;function fg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ac,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Mn.create("bad-app-name",{appName:String(s)});if(n||(n=cg()),!n)throw Mn.create("no-options");const i=Lo.get(s);if(i){if(Mo(n,i.options)&&Mo(r,i.config))return i;throw Mn.create("duplicate-app",{appName:s})}const o=new DI(s);for(const l of lc.values())o.addComponent(l);const a=new Rw(n,r,o);return Lo.set(s,a),a}function pg(t=ac){const e=Lo.get(t);if(!e&&t===ac&&cg())return fg();if(!e)throw Mn.create("no-app",{appName:t});return e}function Ln(t,e,n){var r;let s=(r=Iw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fr.warn(a.join(" "));return}Zr(new dr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="firebase-heartbeat-database",Pw=1,ni="firebase-heartbeat-store";let Il=null;function gg(){return Il||(Il=KI(Sw,Pw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ni)}}}).catch(t=>{throw Mn.create("idb-open",{originalErrorMessage:t.message})})),Il}async function Cw(t){try{return await(await gg()).transaction(ni).objectStore(ni).get(mg(t))}catch(e){if(e instanceof yn)fr.warn(e.message);else{const n=Mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fr.warn(n.message)}}}async function Rd(t,e){try{const r=(await gg()).transaction(ni,"readwrite");await r.objectStore(ni).put(e,mg(t)),await r.done}catch(n){if(n instanceof yn)fr.warn(n.message);else{const r=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fr.warn(r.message)}}}function mg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=1024,kw=30*24*60*60*1e3;class Ow{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Sd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=kw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sd(),{heartbeatsToSend:r,unsentEntries:s}=Nw(this._heartbeatsCache.heartbeats),i=Vo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Sd(){return new Date().toISOString().substring(0,10)}function Nw(t,e=bw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Pd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Pd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return TI()?II().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Cw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Pd(t){return Vo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(t){Zr(new dr("platform-logger",e=>new QI(e),"PRIVATE")),Zr(new dr("heartbeat",e=>new Ow(e),"PRIVATE")),Ln(oc,Ad,t),Ln(oc,Ad,"esm2017"),Ln("fire-js","")}Vw("");var Mw="firebase",Lw="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln(Mw,Lw,"app");function pu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function _g(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xw=_g,yg=new wi("auth","Firebase",_g());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new hu("@firebase/auth");function Fw(t,...e){xo.logLevel<=ae.WARN&&xo.warn(`Auth (${fs}): ${t}`,...e)}function go(t,...e){xo.logLevel<=ae.ERROR&&xo.error(`Auth (${fs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,...e){throw gu(t,...e)}function Wt(t,...e){return gu(t,...e)}function Uw(t,e,n){const r=Object.assign(Object.assign({},xw()),{[e]:n});return new wi("auth","Firebase",r).create(e,{appName:t.name})}function gu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return yg.create(t,...e)}function K(t,e,...n){if(!t)throw gu(e,...n)}function an(t){const e="INTERNAL ASSERTION FAILED: "+t;throw go(e),new Error(e)}function dn(t,e){t||an(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Bw(){return Cd()==="http:"||Cd()==="https:"}function Cd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bw()||yI()||"connection"in navigator)?navigator.onLine:!0}function jw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=_I()||vI()}get(){return $w()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=new Ri(3e4,6e4);function qn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hn(t,e,n,r,s={}){return Eg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ai(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),vg.fetch()(Tg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Eg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},qw),e);try{const s=new Kw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Xi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Xi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Xi(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Uw(t,u,c);Mt(t,u)}}catch(s){if(s instanceof yn)throw s;Mt(t,"network-request-failed",{message:String(s)})}}async function Si(t,e,n,r,s={}){const i=await Hn(t,e,n,r,s);return"mfaPendingCredential"in i&&Mt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Tg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?mu(t.config,s):`${t.config.apiScheme}://${s}`}function zw(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Kw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Wt(this.auth,"network-request-failed")),Hw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Wt(t,e,r);return s.customData._tokenResponse=n,s}function bd(t){return t!==void 0&&t.enterprise!==void 0}class Ww{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zw(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Gw(t,e){return Hn(t,"GET","/v2/recaptchaConfig",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qw(t,e){return Hn(t,"POST","/v1/accounts:delete",e)}async function Yw(t,e){return Hn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jw(t,e=!1){const n=ot(t),r=await n.getIdToken(e),s=_u(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:$s(wl(s.auth_time)),issuedAtTime:$s(wl(s.iat)),expirationTime:$s(wl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wl(t){return Number(t)*1e3}function _u(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const s=ag(n);return s?JSON.parse(s):(go("Failed to decode base64 JWT payload"),null)}catch(s){return go("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Xw(t){const e=_u(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&Zw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Zw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$s(this.lastLoginAt),this.creationTime=$s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ri(t,Yw(n,{idToken:r}));K(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?rA(i.providerUserInfo):[],a=nA(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ig(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function tA(t){const e=ot(t);await Fo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function rA(t){return t.map(e=>{var{providerId:n}=e,r=pu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sA(t,e){const n=await Eg(t,{},async()=>{const r=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Tg(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",vg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function iA(t,e){return Hn(t,"POST","/v2/accounts:revokeToken",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await sA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new si;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new si,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class lr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=pu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ig(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ri(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Jw(this,e)}reload(){return tA(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ri(this,Qw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,P=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:V,emailVerified:U,isAnonymous:M,providerData:ne,stsTokenManager:Te}=n;K(V&&Te,e,"internal-error");const re=si.fromJSON(this.name,Te);K(typeof V=="string",e,"internal-error"),In(h,e.name),In(d,e.name),K(typeof U=="boolean",e,"internal-error"),K(typeof M=="boolean",e,"internal-error"),In(p,e.name),In(_,e.name),In(T,e.name),In(E,e.name),In(P,e.name),In(b,e.name);const ee=new lr({uid:V,auth:e,email:d,emailVerified:U,displayName:h,isAnonymous:M,photoURL:_,phoneNumber:p,tenantId:T,stsTokenManager:re,createdAt:P,lastLoginAt:b});return ne&&Array.isArray(ne)&&(ee.providerData=ne.map(we=>Object.assign({},we))),E&&(ee._redirectEventId=E),ee}static async _fromIdTokenResponse(e,n,r=!1){const s=new si;s.updateFromServerResponse(n);const i=new lr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fo(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=new Map;function ln(t){dn(t instanceof Function,"Expected a class definition");let e=kd.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wg.type="NONE";const Od=wg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t,e,n){return`firebase:${t}:${e}:${n}`}class qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=mo(this.userKey,s.apiKey,i),this.fullPersistenceKey=mo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qr(ln(Od),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||ln(Od);const o=mo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=lr._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new qr(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new qr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ag(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cg(e))return"Blackberry";if(bg(e))return"Webos";if(yu(e))return"Safari";if((e.includes("chrome/")||Rg(e))&&!e.includes("edge/"))return"Chrome";if(Pg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ag(t=it()){return/firefox\//i.test(t)}function yu(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rg(t=it()){return/crios\//i.test(t)}function Sg(t=it()){return/iemobile/i.test(t)}function Pg(t=it()){return/android/i.test(t)}function Cg(t=it()){return/blackberry/i.test(t)}function bg(t=it()){return/webos/i.test(t)}function wa(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oA(t=it()){var e;return wa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function aA(){return EI()&&document.documentMode===10}function kg(t=it()){return wa(t)||Pg(t)||bg(t)||Cg(t)||/windows phone/i.test(t)||Sg(t)}function lA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t,e=[]){let n;switch(t){case"Browser":n=Nd(it());break;case"Worker":n=`${Nd(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(t,e={}){return Hn(t,"GET","/v2/passwordPolicy",qn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=6;class dA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:hA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dd(this),this.idTokenSubscription=new Dd(this),this.beforeStateQueue=new cA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ln(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ot(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uA(this),n=new dA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await iA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ln(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await qr.create(this,[ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Og(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Fw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ir(t){return ot(t)}class Dd{constructor(e){this.auth=e,this.observer=null,this.addObserver=PI(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ng(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Wt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",pA().appendChild(r)})}function gA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const mA="https://www.google.com/recaptcha/enterprise.js?render=",_A="recaptcha-enterprise",yA="NO_RECAPTCHA";class vA{constructor(e){this.type=_A,this.auth=Ir(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Gw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Ww(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;bd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(yA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&bd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ng(mA+a).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Vd(t,e,n,r=!1){const s=new vA(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function uc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Vd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Vd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t,e){const n=fu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Mo(i,e??{}))return s;Mt(s,"already-initialized")}return n.initialize({options:e})}function TA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function IA(t,e,n){const r=Ir(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Dg(e),{host:o,port:a}=wA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||AA()}function Dg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wA(t){const e=Dg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Md(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Md(o)}}}function Md(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function AA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,n){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}async function RA(t,e){return Hn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(t,e){return Si(t,"POST","/v1/accounts:signInWithPassword",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PA(t,e){return Si(t,"POST","/v1/accounts:signInWithEmailLink",qn(t,e))}async function CA(t,e){return Si(t,"POST","/v1/accounts:signInWithEmailLink",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends vu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ii(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ii(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uc(e,n,"signInWithPassword",SA);case"emailLink":return PA(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uc(e,r,"signUpPassword",RA);case"emailLink":return CA(e,{idToken:n,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(t,e){return Si(t,"POST","/v1/accounts:signInWithIdp",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA="http://localhost";class pr extends vu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=pu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new pr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hr(e,n)}buildRequest(){const e={requestUri:bA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ai(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OA(t){const e=bs(ks(t)).link,n=e?bs(ks(e)).deep_link_id:null,r=bs(ks(t)).deep_link_id;return(r?bs(ks(r)).link:null)||r||n||e||t}class Eu{constructor(e){var n,r,s,i,o,a;const l=bs(ks(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=kA((s=l.mode)!==null&&s!==void 0?s:null);K(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=OA(e);try{return new Eu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.providerId=ps.PROVIDER_ID}static credential(e,n){return ii._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Eu.parseLink(n);return K(r,"argument-error"),ii._fromEmailAndCode(e,r.code,r.tenantId)}}ps.PROVIDER_ID="password";ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Vg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Pi{constructor(){super("facebook.com")}static credential(e){return pr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Pi{constructor(){super("github.com")}static credential(e){return pr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Pi{constructor(){super("twitter.com")}static credential(e,n){return pr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(t,e){return Si(t,"POST","/v1/accounts:signUp",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await lr._fromIdTokenResponse(e,r,s),o=Ld(r);return new gr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ld(r);return new gr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ld(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends yn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Uo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Uo(e,n,r,s)}}function Mg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Uo._fromErrorAndOperation(t,i,e,r):i})}async function DA(t,e,n=!1){const r=await ri(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VA(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await ri(t,Mg(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=_u(i.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),gr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Mt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lg(t,e,n=!1){const r="signIn",s=await Mg(t,r,e),i=await gr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function MA(t,e){return Lg(Ir(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xg(t){const e=Ir(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function LA(t,e,n){const r=Ir(t),o=await uc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",NA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&xg(t),l}),a=await gr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function xA(t,e,n){return MA(ot(t),ps.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xg(t),r})}function FA(t,e,n,r){return ot(t).onIdTokenChanged(e,n,r)}function UA(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}function BA(t,e,n,r){return ot(t).onAuthStateChanged(e,n,r)}function $A(t){return ot(t).signOut()}const Bo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bo,"1"),this.storage.removeItem(Bo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(){const t=it();return yu(t)||wa(t)}const qA=1e3,HA=10;class Ug extends Fg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jA()&&lA(),this.fallbackToPolling=kg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);aA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,HA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ug.type="LOCAL";const zA=Ug;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg extends Fg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bg.type="SESSION";const $g=Bg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Aa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await KA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Aa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Tu("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function GA(t){Gt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function QA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function JA(){return jg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="firebaseLocalStorageDb",XA=1,$o="firebaseLocalStorage",Hg="fbase_key";class Ci{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ra(t,e){return t.transaction([$o],e?"readwrite":"readonly").objectStore($o)}function ZA(){const t=indexedDB.deleteDatabase(qg);return new Ci(t).toPromise()}function hc(){const t=indexedDB.open(qg,XA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($o,{keyPath:Hg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($o)?e(r):(r.close(),await ZA(),e(await hc()))})})}async function xd(t,e,n){const r=Ra(t,!0).put({[Hg]:e,value:n});return new Ci(r).toPromise()}async function e0(t,e){const n=Ra(t,!1).get(e),r=await new Ci(n).toPromise();return r===void 0?null:r.value}function Fd(t,e){const n=Ra(t,!0).delete(e);return new Ci(n).toPromise()}const t0=800,n0=3;class zg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>n0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Aa._getInstance(JA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await QA(),!this.activeServiceWorker)return;this.sender=new WA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hc();return await xd(e,Bo,"1"),await Fd(e,Bo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>e0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ra(s,!1).getAll();return new Ci(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),t0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zg.type="LOCAL";const r0=zg;new Ri(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(t,e){return e?ln(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu extends vu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function i0(t){return Lg(t.auth,new Iu(t),t.bypassAuthState)}function o0(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),VA(n,new Iu(t),t.bypassAuthState)}async function a0(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),DA(n,new Iu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return i0;case"linkViaPopup":case"linkViaRedirect":return a0;case"reauthViaPopup":case"reauthViaRedirect":return o0;default:Mt(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=new Ri(2e3,1e4);class xr extends Kg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=Tu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,l0.get())};e()}}xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0="pendingRedirect",_o=new Map;class u0 extends Kg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const r=await h0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function h0(t,e){const n=p0(e),r=f0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function d0(t,e){_o.set(t._key(),e)}function f0(t){return ln(t._redirectPersistence)}function p0(t){return mo(c0,t.config.apiKey,t.name)}async function g0(t,e,n=!1){const r=Ir(t),s=s0(r,e),o=await new u0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=10*60*1e3;class _0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!y0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Wg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Wt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=m0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ud(e))}saveEventToCache(e){this.cachedEventUids.add(Ud(e)),this.lastProcessedEventTime=Date.now()}}function Ud(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function y0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v0(t,e={}){return Hn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,T0=/^https?/;async function I0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await v0(t);for(const n of e)try{if(w0(n))return}catch{}Mt(t,"unauthorized-domain")}function w0(t){const e=cc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!T0.test(n))return!1;if(E0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=new Ri(3e4,6e4);function Bd(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function R0(t){return new Promise((e,n)=>{var r,s,i;function o(){Bd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bd(),n(Wt(t,"network-request-failed"))},timeout:A0.get()})}if(!((s=(r=Gt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Gt().gapi)===null||i===void 0)&&i.load)o();else{const a=gA("iframefcb");return Gt()[a]=()=>{gapi.load?o():n(Wt(t,"network-request-failed"))},Ng(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw yo=null,e})}let yo=null;function S0(t){return yo=yo||R0(t),yo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=new Ri(5e3,15e3),C0="__/auth/iframe",b0="emulator/auth/iframe",k0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},O0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function N0(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mu(e,b0):`https://${t.config.authDomain}/${C0}`,r={apiKey:e.apiKey,appName:t.name,v:fs},s=O0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ai(r).slice(1)}`}async function D0(t){const e=await S0(t),n=Gt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:N0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:k0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Wt(t,"network-request-failed"),a=Gt().setTimeout(()=>{i(o)},P0.get());function l(){Gt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},M0=500,L0=600,x0="_blank",F0="http://localhost";class $d{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function U0(t,e,n,r=M0,s=L0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},V0),{width:r.toString(),height:s.toString(),top:i,left:o}),c=it().toLowerCase();n&&(a=Rg(c)?x0:n),Ag(c)&&(e=e||F0,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,_])=>`${d}${p}=${_},`,"");if(oA(c)&&a!=="_self")return B0(e||"",a),new $d(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new $d(h)}function B0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="__/auth/handler",j0="emulator/auth/handler",q0=encodeURIComponent("fac");async function jd(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fs,eventId:s};if(e instanceof Vg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",SI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Pi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${q0}=${encodeURIComponent(l)}`:"";return`${H0(t)}?${Ai(a).slice(1)}${c}`}function H0({config:t}){return t.emulator?mu(t,j0):`https://${t.authDomain}/${$0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="webStorageSupport";class z0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$g,this._completeRedirectFn=g0,this._overrideRedirectResult=d0}async _openPopup(e,n,r,s){var i;dn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await jd(e,n,r,cc(),s);return U0(e,o,Tu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await jd(e,n,r,cc(),s);return GA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(dn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await D0(e),r=new _0(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Al,{type:Al},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Al];o!==void 0&&n(!!o),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=I0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kg()||yu()||wa()}}const K0=z0;var qd="@firebase/auth",Hd="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Q0(t){Zr(new dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Og(t)},c=new fA(r,s,i,l);return TA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zr(new dr("auth-internal",e=>{const n=Ir(e.getProvider("auth").getImmediate());return(r=>new W0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ln(qd,Hd,G0(t)),Ln(qd,Hd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=5*60,J0=ug("authIdTokenMaxAge")||Y0;let zd=null;const X0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>J0)return;const s=n==null?void 0:n.token;zd!==s&&(zd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Z0(t=pg()){const e=fu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=EA(t,{popupRedirectResolver:K0,persistence:[r0,zA,$g]}),r=ug("authTokenSyncURL");if(r){const i=X0(r);UA(n,i,()=>i(n.currentUser)),FA(n,o=>i(o))}const s=lg("auth");return s&&IA(n,`http://${s}`),n}Q0("Browser");var eR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,wu=wu||{},W=eR||self;function Sa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function tR(t){return Object.prototype.hasOwnProperty.call(t,Rl)&&t[Rl]||(t[Rl]=++nR)}var Rl="closure_uid_"+(1e9*Math.random()>>>0),nR=0;function rR(t,e,n){return t.call.apply(t.bind,arguments)}function sR(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=rR:rt=sR,rt.apply(null,arguments)}function Zi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function zn(){this.s=this.s,this.o=this.o}var iR=0;zn.prototype.s=!1;zn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),iR!=0)&&tR(this)};zn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Gg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Au(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Kd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Sa(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var oR=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};W.addEventListener("test",n,e),W.removeEventListener("test",n,e)}catch{}return t}();function oi(t){return/^[\s\xa0]*$/.test(t)}function Pa(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function qt(t){return Pa().indexOf(t)!=-1}function Ru(t){return Ru[" "](t),t}Ru[" "]=function(){};function aR(t,e){var n=ZR;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var lR=qt("Opera"),es=qt("Trident")||qt("MSIE"),Qg=qt("Edge"),dc=Qg||es,Yg=qt("Gecko")&&!(Pa().toLowerCase().indexOf("webkit")!=-1&&!qt("Edge"))&&!(qt("Trident")||qt("MSIE"))&&!qt("Edge"),cR=Pa().toLowerCase().indexOf("webkit")!=-1&&!qt("Edge");function Jg(){var t=W.document;return t?t.documentMode:void 0}var fc;e:{var Sl="",Pl=function(){var t=Pa();if(Yg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Qg)return/Edge\/([\d\.]+)/.exec(t);if(es)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(cR)return/WebKit\/(\S+)/.exec(t);if(lR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Pl&&(Sl=Pl?Pl[1]:""),es){var Cl=Jg();if(Cl!=null&&Cl>parseFloat(Sl)){fc=String(Cl);break e}}fc=Sl}var pc;if(W.document&&es){var Wd=Jg();pc=Wd||parseInt(fc,10)||void 0}else pc=void 0;var uR=pc;function ai(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Yg){e:{try{Ru(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:hR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ai.$.h.call(this)}}$e(ai,st);var hR={2:"touch",3:"pen",4:"mouse"};ai.prototype.h=function(){ai.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ki="closure_listenable_"+(1e6*Math.random()|0),dR=0;function fR(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++dR,this.fa=this.ia=!1}function Ca(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Su(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function pR(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Xg(t){const e={};for(const n in t)e[n]=t[n];return e}const Gd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Gd.length;i++)n=Gd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ba(t){this.src=t,this.g={},this.h=0}ba.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=mc(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new fR(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function gc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Gg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ca(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function mc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Pu="closure_lm_"+(1e6*Math.random()|0),bl={};function em(t,e,n,r,s){if(r&&r.once)return nm(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)em(t,e[i],n,r,s);return null}return n=ku(n),t&&t[ki]?t.O(e,n,bi(r)?!!r.capture:!!r,s):tm(t,e,n,!1,r,s)}function tm(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=bi(s)?!!s.capture:!!s,a=bu(t);if(a||(t[Pu]=a=new ba(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=gR(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)oR||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(sm(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function gR(){function t(n){return e.call(t.src,t.listener,n)}const e=mR;return t}function nm(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)nm(t,e[i],n,r,s);return null}return n=ku(n),t&&t[ki]?t.P(e,n,bi(r)?!!r.capture:!!r,s):tm(t,e,n,!0,r,s)}function rm(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)rm(t,e[i],n,r,s);else r=bi(r)?!!r.capture:!!r,n=ku(n),t&&t[ki]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=mc(i,n,r,s),-1<n&&(Ca(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=bu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mc(e,n,r,s)),(n=-1<t?e[t]:null)&&Cu(n))}function Cu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ki])gc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(sm(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=bu(e))?(gc(n,t),n.h==0&&(n.src=null,e[Pu]=null)):Ca(t)}}}function sm(t){return t in bl?bl[t]:bl[t]="on"+t}function mR(t,e){if(t.fa)t=!0;else{e=new ai(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Cu(t),t=n.call(r,e)}return t}function bu(t){return t=t[Pu],t instanceof ba?t:null}var kl="__closure_events_fn_"+(1e9*Math.random()>>>0);function ku(t){return typeof t=="function"?t:(t[kl]||(t[kl]=function(e){return t.handleEvent(e)}),t[kl])}function Be(){zn.call(this),this.i=new ba(this),this.S=this,this.J=null}$e(Be,zn);Be.prototype[ki]=!0;Be.prototype.removeEventListener=function(t,e,n,r){rm(this,t,e,n,r)};function We(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var s=e;e=new st(r,t),Zg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=eo(o,r,!0,e)&&s}if(o=e.g=t,s=eo(o,r,!0,e)&&s,s=eo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=eo(o,r,!1,e)&&s}Be.prototype.N=function(){if(Be.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ca(n[r]);delete t.g[e],t.h--}}this.J=null};Be.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Be.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function eo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&gc(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ou=W.JSON.stringify;class _R{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function yR(){var t=Nu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class vR{constructor(){this.h=this.g=null}add(e,n){const r=im.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var im=new _R(()=>new ER,t=>t.reset());class ER{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function TR(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function IR(t){W.setTimeout(()=>{throw t},0)}let li,ci=!1,Nu=new vR,om=()=>{const t=W.Promise.resolve(void 0);li=()=>{t.then(wR)}};var wR=()=>{for(var t;t=yR();){try{t.h.call(t.g)}catch(n){IR(n)}var e=im;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ci=!1};function ka(t,e){Be.call(this),this.h=t||1,this.g=e||W,this.j=rt(this.qb,this),this.l=Date.now()}$e(ka,Be);N=ka.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),We(this,"tick"),this.ga&&(Du(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Du(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){ka.$.N.call(this),Du(this),delete this.g};function Vu(t,e,n){if(typeof t=="function")n&&(t=rt(t,n));else if(t&&typeof t.handleEvent=="function")t=rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function am(t){t.g=Vu(()=>{t.g=null,t.i&&(t.i=!1,am(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class AR extends zn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:am(this)}N(){super.N(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ui(t){zn.call(this),this.h=t,this.g={}}$e(ui,zn);var Qd=[];function lm(t,e,n,r){Array.isArray(n)||(n&&(Qd[0]=n.toString()),n=Qd);for(var s=0;s<n.length;s++){var i=em(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function cm(t){Su(t.g,function(e,n){this.g.hasOwnProperty(n)&&Cu(e)},t),t.g={}}ui.prototype.N=function(){ui.$.N.call(this),cm(this)};ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Oa(){this.g=!0}Oa.prototype.Ea=function(){this.g=!1};function RR(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function SR(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Fr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+CR(t,n)+(r?" "+r:"")})}function PR(t,e){t.info(function(){return"TIMEOUT: "+e})}Oa.prototype.info=function(){};function CR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ou(n)}catch{return e}}var wr={},Yd=null;function Na(){return Yd=Yd||new Be}wr.Ta="serverreachability";function um(t){st.call(this,wr.Ta,t)}$e(um,st);function hi(t){const e=Na();We(e,new um(e))}wr.STAT_EVENT="statevent";function hm(t,e){st.call(this,wr.STAT_EVENT,t),this.stat=e}$e(hm,st);function ut(t){const e=Na();We(e,new hm(e,t))}wr.Ua="timingevent";function dm(t,e){st.call(this,wr.Ua,t),this.size=e}$e(dm,st);function Oi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var Da={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},fm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Mu(){}Mu.prototype.h=null;function Jd(t){return t.h||(t.h=t.i())}function pm(){}var Ni={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Lu(){st.call(this,"d")}$e(Lu,st);function xu(){st.call(this,"c")}$e(xu,st);var _c;function Va(){}$e(Va,Mu);Va.prototype.g=function(){return new XMLHttpRequest};Va.prototype.i=function(){return{}};_c=new Va;function Di(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ui(this),this.P=bR,t=dc?125:void 0,this.V=new ka(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new gm}function gm(){this.i=null,this.g="",this.h=!1}var bR=45e3,mm={},yc={};N=Di.prototype;N.setTimeout=function(t){this.P=t};function vc(t,e,n){t.L=1,t.A=La(fn(e)),t.u=n,t.S=!0,_m(t,null)}function _m(t,e){t.G=Date.now(),Vi(t),t.B=fn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Rm(n.i,"t",r),t.o=0,n=t.l.J,t.h=new gm,t.g=Km(t.l,n?e:null,!t.u),0<t.O&&(t.M=new AR(rt(t.Pa,t,t.g),t.O)),lm(t.U,t.g,"readystatechange",t.nb),e=t.I?Xg(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),hi(),RR(t.j,t.v,t.B,t.m,t.W,t.u)}N.nb=function(t){t=t.target;const e=this.M;e&&Ht(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const u=Ht(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||dc||this.g&&(this.h.h||this.g.ja()||tf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?hi(3):hi(2)),Ma(this);var n=this.g.da();this.ca=n;t:if(ym(this)){var r=tf(this.g);t="";var s=r.length,i=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tr(this),js(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,SR(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oi(a)){var c=a;break t}}c=null}if(n=c)Fr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ec(this,n);else{this.i=!1,this.s=3,ut(12),tr(this),js(this);break e}}this.S?(vm(this,u,o),dc&&this.i&&u==3&&(lm(this.U,this.V,"tick",this.mb),this.V.start())):(Fr(this.j,this.m,o,null),Ec(this,o)),u==4&&tr(this),this.i&&!this.J&&(u==4?jm(this.l,this):(this.i=!1,Vi(this)))}else YR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),tr(this),js(this)}}}catch{}finally{}};function ym(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function vm(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=kR(t,n),s==yc){e==4&&(t.s=4,ut(14),r=!1),Fr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==mm){t.s=4,ut(15),Fr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Fr(t.j,t.m,s,null),Ec(t,s);ym(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,ut(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),qu(e),e.M=!0,ut(11))):(Fr(t.j,t.m,n,"[Invalid Chunked Response]"),tr(t),js(t))}N.mb=function(){if(this.g){var t=Ht(this.g),e=this.g.ja();this.o<e.length&&(Ma(this),vm(this,t,e),this.i&&t!=4&&Vi(this))}};function kR(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?yc:(n=Number(e.substring(n,r)),isNaN(n)?mm:(r+=1,r+n>e.length?yc:(e=e.slice(r,r+n),t.o=r+n,e)))}N.cancel=function(){this.J=!0,tr(this)};function Vi(t){t.Y=Date.now()+t.P,Em(t,t.P)}function Em(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Oi(rt(t.lb,t),e)}function Ma(t){t.C&&(W.clearTimeout(t.C),t.C=null)}N.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(PR(this.j,this.B),this.L!=2&&(hi(),ut(17)),tr(this),this.s=2,js(this)):Em(this,this.Y-t)};function js(t){t.l.H==0||t.J||jm(t.l,t)}function tr(t){Ma(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Du(t.V),cm(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ec(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Tc(n.i,t))){if(!t.K&&Tc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ho(n),Ba(n);else break e;ju(n),ut(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Oi(rt(n.ib,n),6e3));if(1>=Cm(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else nr(n,11)}else if((t.K||n.g==t)&&Ho(n),!oi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Fu(i,i.h),i.h=null))}if(r.F){const T=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,Se(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=zm(r,r.J?r.pa:null,r.Y),o.K){bm(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Ma(a),Vi(a)),r.g=o}else Bm(r);0<n.j.length&&$a(n)}else c[0]!="stop"&&c[0]!="close"||nr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?nr(n,7):$u(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}hi(4)}catch{}}function OR(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Sa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function NR(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Sa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Tm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Sa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=NR(t),r=OR(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Im=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function DR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function cr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof cr){this.h=t.h,jo(this,t.j),this.s=t.s,this.g=t.g,qo(this,t.m),this.l=t.l;var e=t.i,n=new di;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Xd(this,n),this.o=t.o}else t&&(e=String(t).match(Im))?(this.h=!1,jo(this,e[1]||"",!0),this.s=Os(e[2]||""),this.g=Os(e[3]||"",!0),qo(this,e[4]),this.l=Os(e[5]||"",!0),Xd(this,e[6]||"",!0),this.o=Os(e[7]||"")):(this.h=!1,this.i=new di(null,this.h))}cr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ns(e,Zd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ns(e,Zd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ns(n,n.charAt(0)=="/"?LR:MR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ns(n,FR)),t.join("")};function fn(t){return new cr(t)}function jo(t,e,n){t.j=n?Os(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function qo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xd(t,e,n){e instanceof di?(t.i=e,UR(t.i,t.h)):(n||(e=Ns(e,xR)),t.i=new di(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function La(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Os(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ns(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,VR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function VR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Zd=/[#\/\?@]/g,MR=/[#\?:]/g,LR=/[#\?]/g,xR=/[#\?@]/g,FR=/#/g;function di(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Kn(t){t.g||(t.g=new Map,t.h=0,t.i&&DR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=di.prototype;N.add=function(t,e){Kn(this),this.i=null,t=gs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function wm(t,e){Kn(t),e=gs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Am(t,e){return Kn(t),e=gs(t,e),t.g.has(e)}N.forEach=function(t,e){Kn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};N.ta=function(){Kn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};N.Z=function(t){Kn(this);let e=[];if(typeof t=="string")Am(this,t)&&(e=e.concat(this.g.get(gs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Kn(this),this.i=null,t=gs(this,t),Am(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Rm(t,e,n){wm(t,e),0<n.length&&(t.i=null,t.g.set(gs(t,e),Au(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function gs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function UR(t,e){e&&!t.j&&(Kn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(wm(this,r),Rm(this,s,n))},t)),t.j=e}var BR=class{constructor(t,e){this.g=t,this.map=e}};function Sm(t){this.l=t||$R,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ka&&W.g.Ka()&&W.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $R=10;function Pm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Cm(t){return t.h?1:t.g?t.g.size:0}function Tc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Fu(t,e){t.g?t.g.add(e):t.h=e}function bm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Sm.prototype.cancel=function(){if(this.i=km(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function km(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Au(t.i)}var jR=class{stringify(t){return W.JSON.stringify(t,void 0)}parse(t){return W.JSON.parse(t,void 0)}};function qR(){this.g=new jR}function HR(t,e,n){const r=n||"";try{Tm(t,function(s,i){let o=s;bi(s)&&(o=Ou(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function zR(t,e){const n=new Oa;if(W.Image){const r=new Image;r.onload=Zi(to,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Zi(to,n,r,"TestLoadImage: error",!1,e),r.onabort=Zi(to,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Zi(to,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function to(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function xa(t){this.l=t.ec||null,this.j=t.ob||!1}$e(xa,Mu);xa.prototype.g=function(){return new Fa(this.l,this.j)};xa.prototype.i=function(t){return function(){return t}}({});function Fa(t,e){Be.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Uu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(Fa,Be);var Uu=0;N=Fa.prototype;N.open=function(t,e){if(this.readyState!=Uu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,fi(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||W).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mi(this)),this.readyState=Uu};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,fi(this)),this.g&&(this.readyState=3,fi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Om(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Om(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Mi(this):fi(this),this.readyState==3&&Om(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,Mi(this))};N.Ya=function(t){this.g&&(this.response=t,Mi(this))};N.ka=function(){this.g&&Mi(this)};function Mi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,fi(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function fi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Fa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var KR=W.JSON.parse;function ke(t){Be.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Nm,this.L=this.M=!1}$e(ke,Be);var Nm="",WR=/^https?$/i,GR=["POST","PUT"];N=ke.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():_c.g(),this.C=this.u?Jd(this.u):Jd(_c),this.g.onreadystatechange=rt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){ef(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=W.FormData&&t instanceof W.FormData,!(0<=Gg(GR,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Mm(this),0<this.B&&((this.L=QR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.ua,this)):this.A=Vu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ef(this,i)}};function QR(t){return es&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof wu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,We(this,"timeout"),this.abort(8))};function ef(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Dm(t),Ua(t)}function Dm(t){t.F||(t.F=!0,We(t,"complete"),We(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,We(this,"complete"),We(this,"abort"),Ua(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ua(this,!0)),ke.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?Vm(this):this.kb())};N.kb=function(){Vm(this)};function Vm(t){if(t.h&&typeof wu<"u"&&(!t.C[1]||Ht(t)!=4||t.da()!=2)){if(t.v&&Ht(t)==4)Vu(t.La,0,t);else if(We(t,"readystatechange"),Ht(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Im)[1]||null;!s&&W.self&&W.self.location&&(s=W.self.location.protocol.slice(0,-1)),r=!WR.test(s?s.toLowerCase():"")}n=r}if(n)We(t,"complete"),We(t,"success");else{t.m=6;try{var i=2<Ht(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Dm(t)}}finally{Ua(t)}}}}function Ua(t,e){if(t.g){Mm(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||We(t,"ready");try{n.onreadystatechange=r}catch{}}}function Mm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function Ht(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),KR(e)}};function tf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Nm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function YR(t){const e={};t=(t.g&&2<=Ht(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(oi(t[r]))continue;var n=TR(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}pR(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Lm(t){let e="";return Su(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Bu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Lm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function ws(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function xm(t){this.Ga=0,this.j=[],this.l=new Oa,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ws("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ws("baseRetryDelayMs",5e3,t),this.hb=ws("retryDelaySeedMs",1e4,t),this.eb=ws("forwardChannelMaxRetries",2,t),this.xa=ws("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Sm(t&&t.concurrentRequestLimit),this.Ja=new qR,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=xm.prototype;N.ra=8;N.H=1;function $u(t){if(Fm(t),t.H==3){var e=t.W++,n=fn(t.I);if(Se(n,"SID",t.K),Se(n,"RID",e),Se(n,"TYPE","terminate"),Li(t,n),e=new Di(t,t.l,e),e.L=2,e.A=La(fn(n)),n=!1,W.navigator&&W.navigator.sendBeacon)try{n=W.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&W.Image&&(new Image().src=e.A,n=!0),n||(e.g=Km(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Vi(e)}Hm(t)}function Ba(t){t.g&&(qu(t),t.g.cancel(),t.g=null)}function Fm(t){Ba(t),t.u&&(W.clearTimeout(t.u),t.u=null),Ho(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function $a(t){if(!Pm(t.i)&&!t.m){t.m=!0;var e=t.Na;li||om(),ci||(li(),ci=!0),Nu.add(e,t),t.C=0}}function JR(t,e){return Cm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Oi(rt(t.Na,t,e),qm(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Di(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Xg(i),Zg(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Um(this,s,e),n=fn(this.I),Se(n,"RID",t),Se(n,"CVER",22),this.F&&Se(n,"X-HTTP-Session-Id",this.F),Li(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Lm(i)))+"&"+e:this.o&&Bu(n,this.o,i)),Fu(this.i,s),this.bb&&Se(n,"TYPE","init"),this.P?(Se(n,"$req",e),Se(n,"SID","null"),s.aa=!0,vc(s,n,null)):vc(s,n,e),this.H=2}}else this.H==3&&(t?nf(this,t):this.j.length==0||Pm(this.i)||nf(this))};function nf(t,e){var n;e?n=e.m:n=t.W++;const r=fn(t.I);Se(r,"SID",t.K),Se(r,"RID",n),Se(r,"AID",t.V),Li(t,r),t.o&&t.s&&Bu(r,t.o,t.s),n=new Di(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Um(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Fu(t.i,n),vc(n,r,e)}function Li(t,e){t.na&&Su(t.na,function(n,r){Se(e,r,n)}),t.h&&Tm({},function(n,r){Se(e,r,n)})}function Um(t,e,n){n=Math.min(t.j.length,n);var r=t.h?rt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{HR(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Bm(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;li||om(),ci||(li(),ci=!0),Nu.add(e,t),t.A=0}}function ju(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Oi(rt(t.Ma,t),qm(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,$m(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Oi(rt(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ut(10),Ba(this),$m(this))};function qu(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function $m(t){t.g=new Di(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=fn(t.wa);Se(e,"RID","rpc"),Se(e,"SID",t.K),Se(e,"AID",t.V),Se(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Se(e,"TO",t.qa),Se(e,"TYPE","xmlhttp"),Li(t,e),t.o&&t.s&&Bu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=La(fn(e)),n.u=null,n.S=!0,_m(n,t)}N.ib=function(){this.v!=null&&(this.v=null,Ba(this),ju(this),ut(19))};function Ho(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function jm(t,e){var n=null;if(t.g==e){Ho(t),qu(t),t.g=null;var r=2}else if(Tc(t.i,e))n=e.F,bm(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Na(),We(r,new dm(r,n)),$a(t)}else Bm(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&JR(t,e)||r==2&&ju(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:nr(t,5);break;case 4:nr(t,10);break;case 3:nr(t,6);break;default:nr(t,2)}}}function qm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function nr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=rt(t.pb,t);n||(n=new cr("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||jo(n,"https"),La(n)),zR(n.toString(),r)}else ut(2);t.H=0,t.h&&t.h.za(e),Hm(t),Fm(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ut(2)):(this.l.info("Failed to ping google.com"),ut(1))};function Hm(t){if(t.H=0,t.ma=[],t.h){const e=km(t.i);(e.length!=0||t.j.length!=0)&&(Kd(t.ma,e),Kd(t.ma,t.j),t.i.i.length=0,Au(t.j),t.j.length=0),t.h.ya()}}function zm(t,e,n){var r=n instanceof cr?fn(n):new cr(n);if(r.g!="")e&&(r.g=e+"."+r.g),qo(r,r.m);else{var s=W.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new cr(null);r&&jo(i,r),e&&(i.g=e),s&&qo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Se(r,n,e),Se(r,"VER",t.ra),Li(t,r),r}function Km(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new ke(new xa({ob:n})):new ke(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function Wm(){}N=Wm.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function zo(){if(es&&!(10<=Number(uR)))throw Error("Environmental error: no available transport.")}zo.prototype.g=function(t,e){return new At(t,e)};function At(t,e){Be.call(this),this.g=new xm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!oi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!oi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ms(this)}$e(At,Be);At.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ut(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=zm(t,null,t.Y),$a(t)};At.prototype.close=function(){$u(this.g)};At.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ou(t),t=n);e.j.push(new BR(e.fb++,t)),e.H==3&&$a(e)};At.prototype.N=function(){this.g.h=null,delete this.j,$u(this.g),delete this.g,At.$.N.call(this)};function Gm(t){Lu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(Gm,Lu);function Qm(){xu.call(this),this.status=1}$e(Qm,xu);function ms(t){this.g=t}$e(ms,Wm);ms.prototype.Ba=function(){We(this.g,"a")};ms.prototype.Aa=function(t){We(this.g,new Gm(t))};ms.prototype.za=function(t){We(this.g,new Qm)};ms.prototype.ya=function(){We(this.g,"b")};function XR(){this.blockSize=-1}function Lt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}$e(Lt,XR);Lt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ol(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Lt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Ol(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Ol(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Ol(this,r),s=0;break}}this.h=s,this.i+=e};Lt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ye(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var ZR={};function Hu(t){return-128<=t&&128>t?aR(t,function(e){return new ye([e|0],0>e?-1:0)}):new ye([t|0],0>t?-1:0)}function zt(t){if(isNaN(t)||!isFinite(t))return zr;if(0>t)return ze(zt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Ic;return new ye(e,0)}function Ym(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ze(Ym(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=zt(Math.pow(e,8)),r=zr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=zt(Math.pow(e,i)),r=r.R(i).add(zt(o))):(r=r.R(n),r=r.add(zt(o)))}return r}var Ic=4294967296,zr=Hu(0),wc=Hu(1),rf=Hu(16777216);N=ye.prototype;N.ea=function(){if(Ct(this))return-ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Ic+r)*e,e*=Ic}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(cn(this))return"0";if(Ct(this))return"-"+ze(this).toString(t);for(var e=zt(Math.pow(t,6)),n=this,r="";;){var s=Wo(n,e).g;n=Ko(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,cn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function cn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ct(t){return t.h==-1}N.X=function(t){return t=Ko(this,t),Ct(t)?-1:cn(t)?0:1};function ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ye(n,~t.h).add(wc)}N.abs=function(){return Ct(this)?ze(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ye(n,n[n.length-1]&-2147483648?-1:0)};function Ko(t,e){return t.add(ze(e))}N.R=function(t){if(cn(this)||cn(t))return zr;if(Ct(this))return Ct(t)?ze(this).R(ze(t)):ze(ze(this).R(t));if(Ct(t))return ze(this.R(ze(t)));if(0>this.X(rf)&&0>t.X(rf))return zt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,no(n,2*r+2*s),n[2*r+2*s+1]+=i*l,no(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,no(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,no(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ye(n,0)};function no(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function As(t,e){this.g=t,this.h=e}function Wo(t,e){if(cn(e))throw Error("division by zero");if(cn(t))return new As(zr,zr);if(Ct(t))return e=Wo(ze(t),e),new As(ze(e.g),ze(e.h));if(Ct(e))return e=Wo(t,ze(e)),new As(ze(e.g),e.h);if(30<t.g.length){if(Ct(t)||Ct(e))throw Error("slowDivide_ only works with positive integers.");for(var n=wc,r=e;0>=r.X(t);)n=sf(n),r=sf(r);var s=kr(n,1),i=kr(r,1);for(r=kr(r,2),n=kr(n,2);!cn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=kr(r,1),n=kr(n,1)}return e=Ko(t,s.R(e)),new As(s,e)}for(s=zr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=zt(n),o=i.R(e);Ct(o)||0<o.X(t);)n-=r,i=zt(n),o=i.R(e);cn(i)&&(i=wc),s=s.add(i),t=Ko(t,o)}return new As(s,t)}N.gb=function(t){return Wo(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ye(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ye(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ye(n,this.h^t.h)};function sf(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ye(n,t.h)}function kr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ye(s,t.h)}zo.prototype.createWebChannel=zo.prototype.g;At.prototype.send=At.prototype.u;At.prototype.open=At.prototype.m;At.prototype.close=At.prototype.close;Da.NO_ERROR=0;Da.TIMEOUT=8;Da.HTTP_ERROR=6;fm.COMPLETE="complete";pm.EventType=Ni;Ni.OPEN="a";Ni.CLOSE="b";Ni.ERROR="c";Ni.MESSAGE="d";Be.prototype.listen=Be.prototype.O;ke.prototype.listenOnce=ke.prototype.P;ke.prototype.getLastError=ke.prototype.Sa;ke.prototype.getLastErrorCode=ke.prototype.Ia;ke.prototype.getStatus=ke.prototype.da;ke.prototype.getResponseJson=ke.prototype.Wa;ke.prototype.getResponseText=ke.prototype.ja;ke.prototype.send=ke.prototype.ha;ke.prototype.setWithCredentials=ke.prototype.Oa;Lt.prototype.digest=Lt.prototype.l;Lt.prototype.reset=Lt.prototype.reset;Lt.prototype.update=Lt.prototype.j;ye.prototype.add=ye.prototype.add;ye.prototype.multiply=ye.prototype.R;ye.prototype.modulo=ye.prototype.gb;ye.prototype.compare=ye.prototype.X;ye.prototype.toNumber=ye.prototype.ea;ye.prototype.toString=ye.prototype.toString;ye.prototype.getBits=ye.prototype.D;ye.fromNumber=zt;ye.fromString=Ym;var eS=function(){return new zo},tS=function(){return Na()},Nl=Da,nS=fm,rS=wr,of={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ro=pm,sS=ke,iS=Lt,Kr=ye;const af="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new hu("@firebase/firestore");function Rs(){return mr.logLevel}function F(t,...e){if(mr.logLevel<=ae.DEBUG){const n=e.map(zu);mr.debug(`Firestore (${_s}): ${t}`,...n)}}function pn(t,...e){if(mr.logLevel<=ae.ERROR){const n=e.map(zu);mr.error(`Firestore (${_s}): ${t}`,...n)}}function ts(t,...e){if(mr.logLevel<=ae.WARN){const n=e.map(zu);mr.warn(`Firestore (${_s}): ${t}`,...n)}}function zu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${_s}) INTERNAL ASSERTION FAILED: `+t;throw pn(e),new Error(e)}function Ae(t,e){t||Q()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class aS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lS{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new xn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new Jm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new Ze(e)}}class cS{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class uS{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new cS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.R=n.token,new hS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=fS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function ns(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Me(0,0))}static max(){return new J(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends pi{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new be(n)}static emptyPath(){return new be([])}}const pS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends pi{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return pS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new q(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new q(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(be.fromString(e))}static fromName(e){return new H(be.fromString(e).popFirst(5))}static empty(){return new H(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new be(e.slice()))}}function gS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new Bn(s,H.empty(),e)}function mS(t){return new Bn(t.readTime,t.key,-1)}class Bn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Bn(J.min(),H.empty(),-1)}static max(){return new Bn(J.max(),H.empty(),-1)}}function _S(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==yS)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(s=>s?A.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new A((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new A((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Fi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Ku._e=-1;function ja(t){return t==null}function Go(t){return t===0&&1/t==-1/0}function ES(t){return typeof t=="number"&&Number.isInteger(t)&&!Go(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ar(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Zm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new so(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new so(this.root,e,this.comparator,!1)}getReverseIterator(){return new so(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new so(this.root,e,this.comparator,!0)}}class so{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??qe.RED,this.left=s??qe.EMPTY,this.right=i??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new qe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,s,i){return this}insert(e,n,r){return new qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cf(this.data.getIterator())}getIteratorFrom(e){return new cf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class cf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new It([])}unionWith(e){let n=new Ge(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new It(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new e_("Invalid base64 string: "+i):i}}(e);return new at(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const TS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $n(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=TS.exec(t);if(Ae(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _r(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gu(t){const e=t.mapValue.fields.__previous_value__;return Wu(e)?Gu(e):e}function gi(t){const e=$n(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class mi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new mi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wu(t)?4:wS(t)?9007199254740991:10:Q()}function Zt(t,e){if(t===e)return!0;const n=yr(t);if(n!==yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gi(t).isEqual(gi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=$n(s.timestampValue),a=$n(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return _r(s.bytesValue).isEqual(_r(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return De(s.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return De(s.integerValue)===De(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=De(s.doubleValue),a=De(i.doubleValue);return o===a?Go(o)===Go(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ns(t.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(lf(o)!==lf(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Zt(o[l],a[l])))return!1;return!0}(t,e);default:return Q()}}function _i(t,e){return(t.values||[]).find(n=>Zt(n,e))!==void 0}function rs(t,e){if(t===e)return 0;const n=yr(t),r=yr(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=De(i.integerValue||i.doubleValue),l=De(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return uf(t.timestampValue,e.timestampValue);case 4:return uf(gi(t),gi(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(i,o){const a=_r(i),l=_r(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=de(a[c],l[c]);if(u!==0)return u}return de(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=de(De(i.latitude),De(o.latitude));return a!==0?a:de(De(i.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=rs(a[c],l[c]);if(u)return u}return de(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===io.mapValue&&o===io.mapValue)return 0;if(i===io.mapValue)return 1;if(o===io.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=de(l[h],u[h]);if(d!==0)return d;const p=rs(a[l[h]],c[u[h]]);if(p!==0)return p}return de(l.length,u.length)}(t.mapValue,e.mapValue);default:throw Q()}}function uf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=$n(t),r=$n(e),s=de(n.seconds,r.seconds);return s!==0?s:de(n.nanos,r.nanos)}function ss(t){return Ac(t)}function Ac(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=$n(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ac(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ac(n.fields[o])}`;return s+"}"}(t.mapValue):Q()}function Rc(t){return!!t&&"integerValue"in t}function Qu(t){return!!t&&"arrayValue"in t}function hf(t){return!!t&&"nullValue"in t}function df(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vo(t){return!!t&&"mapValue"in t}function qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ar(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!vo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qs(n)}setAll(e){let n=Ke.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=qs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());vo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];vo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ar(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new pt(qs(this.value))}}function t_(t){const e=[];return Ar(t.fields,(n,r)=>{const s=new Ke([n]);if(vo(r)){const i=t_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new It(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new et(e,0,J.min(),J.min(),J.min(),pt.empty(),0)}static newFoundDocument(e,n,r,s){return new et(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new et(e,2,n,J.min(),J.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,J.min(),J.min(),pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n){this.position=e,this.inclusive=n}}function ff(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function pf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n="asc"){this.field=e,this.dir=n}}function AS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{}class Ve extends n_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new SS(e,n,r):n==="array-contains"?new bS(e,r):n==="in"?new kS(e,r):n==="not-in"?new OS(e,r):n==="array-contains-any"?new NS(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new PS(e,r):new CS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(rs(n,this.value)):n!==null&&yr(this.value)===yr(n)&&this.matchesComparison(rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends n_{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new en(e,n)}matches(e){return r_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function r_(t){return t.op==="and"}function s_(t){return RS(t)&&r_(t)}function RS(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function Sc(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+ss(t.value);if(s_(t))return t.filters.map(e=>Sc(e)).join(",");{const e=t.filters.map(n=>Sc(n)).join(",");return`${t.op}(${e})`}}function i_(t,e){return t instanceof Ve?function(r,s){return s instanceof Ve&&r.op===s.op&&r.field.isEqual(s.field)&&Zt(r.value,s.value)}(t,e):t instanceof en?function(r,s){return s instanceof en&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&i_(o,s.filters[a]),!0):!1}(t,e):void Q()}function o_(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${ss(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(o_).join(" ,")+"}"}(t):"Filter"}class SS extends Ve{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class PS extends Ve{constructor(e,n){super(e,"in",n),this.keys=a_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class CS extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=a_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function a_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class bS extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qu(n)&&_i(n.arrayValue,this.value)}}class kS extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_i(this.value.arrayValue,n)}}class OS extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(_i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_i(this.value.arrayValue,n)}}class NS extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_i(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function gf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new DS(t,e,n,r,s,i,o)}function Yu(t){const e=Z(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ja(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ss(r)).join(",")),e.ce=n}return e.ce}function Ju(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!AS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!i_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pf(t.startAt,e.startAt)&&pf(t.endAt,e.endAt)}function Pc(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function VS(t,e,n,r,s,i,o,a){return new qa(t,e,n,r,s,i,o,a)}function Xu(t){return new qa(t)}function mf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function MS(t){return t.collectionGroup!==null}function Hs(t){const e=Z(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ge(Ke.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new Yo(i,r))}),n.has(Ke.keyField().canonicalString())||e.le.push(new Yo(Ke.keyField(),r))}return e.le}function Qt(t){const e=Z(t);return e.he||(e.he=LS(e,Hs(t))),e.he}function LS(t,e){if(t.limitType==="F")return gf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Yo(s.field,i)});const n=t.endAt?new Qo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qo(t.startAt.position,t.startAt.inclusive):null;return gf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Cc(t,e,n){return new qa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ha(t,e){return Ju(Qt(t),Qt(e))&&t.limitType===e.limitType}function l_(t){return`${Yu(Qt(t))}|lt:${t.limitType}`}function Nr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>o_(s)).join(", ")}]`),ja(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ss(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ss(s)).join(",")),`Target(${r})`}(Qt(t))}; limitType=${t.limitType})`}function za(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):H.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Hs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=ff(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Hs(r),s)||r.endAt&&!function(o,a,l){const c=ff(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Hs(r),s))}(t,e)}function xS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function c_(t){return(e,n)=>{let r=!1;for(const s of Hs(t)){const i=FS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function FS(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?rs(l,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ar(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Zm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=new Ce(H.comparator);function gn(){return US}const u_=new Ce(H.comparator);function Ds(...t){let e=u_;for(const n of t)e=e.insert(n.key,n);return e}function h_(t){let e=u_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function rr(){return zs()}function d_(){return zs()}function zs(){return new ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const BS=new Ce(H.comparator),$S=new Ge(H.comparator);function oe(...t){let e=$S;for(const n of t)e=e.add(n);return e}const jS=new Ge(de);function qS(){return jS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Go(e)?"-0":e}}function p_(t){return{integerValue:""+t}}function HS(t,e){return ES(e)?p_(e):f_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this._=void 0}}function zS(t,e,n){return t instanceof Jo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Wu(i)&&(i=Gu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof is?m_(t,e):t instanceof yi?__(t,e):function(s,i){const o=g_(s,i),a=_f(o)+_f(s.Ie);return Rc(o)&&Rc(s.Ie)?p_(a):f_(s.serializer,a)}(t,e)}function KS(t,e,n){return t instanceof is?m_(t,e):t instanceof yi?__(t,e):n}function g_(t,e){return t instanceof Xo?function(r){return Rc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Jo extends Ka{}class is extends Ka{constructor(e){super(),this.elements=e}}function m_(t,e){const n=y_(e);for(const r of t.elements)n.some(s=>Zt(s,r))||n.push(r);return{arrayValue:{values:n}}}class yi extends Ka{constructor(e){super(),this.elements=e}}function __(t,e){let n=y_(e);for(const r of t.elements)n=n.filter(s=>!Zt(s,r));return{arrayValue:{values:n}}}class Xo extends Ka{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function _f(t){return De(t.integerValue||t.doubleValue)}function y_(t){return Qu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n){this.field=e,this.transform=n}}function GS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof is&&s instanceof is||r instanceof yi&&s instanceof yi?ns(r.elements,s.elements,Zt):r instanceof Xo&&s instanceof Xo?Zt(r.Ie,s.Ie):r instanceof Jo&&s instanceof Jo}(t.transform,e.transform)}class QS{constructor(e,n){this.version=e,this.transformResults=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Eo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wa{}function v_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new T_(t.key,Yt.none()):new Ui(t.key,t.data,Yt.none());{const n=t.data,r=pt.empty();let s=new Ge(Ke.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Wn(t.key,r,new It(s.toArray()),Yt.none())}}function YS(t,e,n){t instanceof Ui?function(s,i,o){const a=s.value.clone(),l=vf(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Wn?function(s,i,o){if(!Eo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=vf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(E_(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ks(t,e,n,r){return t instanceof Ui?function(i,o,a,l){if(!Eo(i.precondition,o))return a;const c=i.value.clone(),u=Ef(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Wn?function(i,o,a,l){if(!Eo(i.precondition,o))return a;const c=Ef(i.fieldTransforms,l,o),u=o.data;return u.setAll(E_(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Eo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function JS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=g_(r.transform,s||null);i!=null&&(n===null&&(n=pt.empty()),n.set(r.field,i))}return n||null}function yf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ns(r,s,(i,o)=>GS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ui extends Wa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Wn extends Wa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function E_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vf(t,e,n){const r=new Map;Ae(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,KS(o,a,n[s]))}return r}function Ef(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,zS(i,o,e))}return r}class T_ extends Wa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XS extends Wa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&YS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ks(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ks(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=d_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=v_(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,(n,r)=>yf(n,r))&&ns(this.baseMutations,e.baseMutations,(n,r)=>yf(n,r))}}class Zu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ae(e.mutations.length===r.length);let s=function(){return BS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Zu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,le;function nP(t){switch(t){default:return Q();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function I_(t){if(t===void 0)return pn("GRPC error has no .code"),S.UNKNOWN;switch(t){case Ne.OK:return S.OK;case Ne.CANCELLED:return S.CANCELLED;case Ne.UNKNOWN:return S.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return S.INTERNAL;case Ne.UNAVAILABLE:return S.UNAVAILABLE;case Ne.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ne.NOT_FOUND:return S.NOT_FOUND;case Ne.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ne.ABORTED:return S.ABORTED;case Ne.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ne.DATA_LOSS:return S.DATA_LOSS;default:return Q()}}(le=Ne||(Ne={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP=new Kr([4294967295,4294967295],0);function Tf(t){const e=rP().encode(t),n=new iS;return n.update(e),new Uint8Array(n.digest())}function If(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Kr([n,r],0),new Kr([s,i],0)]}class eh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Vs(`Invalid padding: ${n}`);if(r<0)throw new Vs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Vs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Kr.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Kr.fromNumber(r)));return s.compare(sP)===1&&(s=new Kr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Tf(e),[r,s]=If(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new eh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Tf(e),[r,s]=If(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Bi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ga(J.min(),s,new Ce(de),gn(),oe())}}class Bi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Bi(r,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class w_{constructor(e,n){this.targetId=e,this.fe=n}}class A_{constructor(e,n,r=at.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class wf{constructor(){this.ge=0,this.pe=Rf(),this.ye=at.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=oe(),n=oe(),r=oe();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q()}}),new Bi(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Rf()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ae(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class iP{constructor(e){this.Le=e,this.ke=new Map,this.qe=gn(),this.Qe=Af(),this.Ke=new Ce(de)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Pc(i))if(r===0){const o=new H(i.path);this.We(n,o,et.newNoDocument(o,J.min()))}else Ae(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=_r(r).toUint8Array()}catch(l){if(l instanceof e_)return ts("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new eh(o,s,i)}catch(l){return ts(l instanceof Vs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Pc(a.target)){const l=new H(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,et.newNoDocument(l,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=oe();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new Ga(e,n,this.Ke,this.qe,r);return this.qe=gn(),this.Qe=Af(),this.Ke=new Ce(de),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new wf,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Ge(de),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new wf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Af(){return new Ce(H.comparator)}function Rf(){return new Ce(H.comparator)}const oP={asc:"ASCENDING",desc:"DESCENDING"},aP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lP={and:"AND",or:"OR"};class cP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bc(t,e){return t.useProto3Json||ja(e)?e:{value:e}}function Zo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function R_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function uP(t,e){return Zo(t,e.toTimestamp())}function Jt(t){return Ae(!!t),J.fromTimestamp(function(n){const r=$n(n);return new Me(r.seconds,r.nanos)}(t))}function th(t,e){return function(r){return new be(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function S_(t){const e=be.fromString(t);return Ae(k_(e)),e}function kc(t,e){return th(t.databaseId,e.path)}function Dl(t,e){const n=S_(e);if(n.get(1)!==t.databaseId.projectId)throw new q(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(P_(n))}function Oc(t,e){return th(t.databaseId,e)}function hP(t){const e=S_(t);return e.length===4?be.emptyPath():P_(e)}function Nc(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function P_(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sf(t,e,n){return{name:kc(t,e),fields:n.value.mapValue.fields}}function dP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(Ae(u===void 0||typeof u=="string"),at.fromBase64String(u||"")):(Ae(u===void 0||u instanceof Uint8Array),at.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?S.UNKNOWN:I_(c.code);return new q(u,c.message||"")}(o);n=new A_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Dl(t,r.document.name),i=Jt(r.document.updateTime),o=r.document.createTime?Jt(r.document.createTime):J.min(),a=new pt({mapValue:{fields:r.document.fields}}),l=et.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new To(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Dl(t,r.document),i=r.readTime?Jt(r.readTime):J.min(),o=et.newNoDocument(s,i),a=r.removedTargetIds||[];n=new To([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Dl(t,r.document),i=r.removedTargetIds||[];n=new To([],i,s,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new tP(s,i),a=r.targetId;n=new w_(a,o)}}return n}function fP(t,e){let n;if(e instanceof Ui)n={update:Sf(t,e.key,e.value)};else if(e instanceof T_)n={delete:kc(t,e.key)};else if(e instanceof Wn)n={update:Sf(t,e.key,e.data),updateMask:IP(e.fieldMask)};else{if(!(e instanceof XS))return Q();n={verify:kc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Jo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof is)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof yi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Xo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:uP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(t,e.precondition)),n}function pP(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Jt(s.updateTime):Jt(i);return o.isEqual(J.min())&&(o=Jt(i)),new QS(o,s.transformResults||[])}(n,e))):[]}function gP(t,e){return{documents:[Oc(t,e.path)]}}function mP(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Oc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Oc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return b_(en.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Dr(h.field),direction:vP(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=bc(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function _P(t){let e=hP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ae(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=C_(h);return d instanceof en&&s_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new Yo(Vr(_.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,ja(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new Qo(p,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,p=h.values||[];return new Qo(p,d)}(n.endAt)),VS(e,s,o,i,a,"F",l,c)}function yP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function C_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Vr(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Vr(n.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vr(n.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Vr(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(Vr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>C_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function vP(t){return oP[t]}function EP(t){return aP[t]}function TP(t){return lP[t]}function Dr(t){return{fieldPath:t.canonicalString()}}function Vr(t){return Ke.fromServerFormat(t.fieldPath)}function b_(t){return t instanceof Ve?function(n){if(n.op==="=="){if(df(n.value))return{unaryFilter:{field:Dr(n.field),op:"IS_NAN"}};if(hf(n.value))return{unaryFilter:{field:Dr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(df(n.value))return{unaryFilter:{field:Dr(n.field),op:"IS_NOT_NAN"}};if(hf(n.value))return{unaryFilter:{field:Dr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dr(n.field),op:EP(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(s=>b_(s));return r.length===1?r[0]:{compositeFilter:{op:TP(n.op),filters:r}}}(t):Q()}function IP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function k_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,n,r,s,i=J.min(),o=J.min(),a=at.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new On(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e){this.ut=e}}function AP(t){const e=_P({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(){this.on=new SP}addToCollectionParentIndex(e,n){return this.on.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Bn.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Bn.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class SP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ge(be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ge(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new os(0)}static Nn(){return new os(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(){this.changes=new ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ks(r.mutation,s,It.empty(),Me.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const s=rr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ds();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=rr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=gn();const o=zs(),a=function(){return zs()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Wn)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Ks(u.mutation,c,u.mutation.getFieldMask(),Me.now())):o.set(c.key,It.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new CP(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=zs();let s=new Ce((o,a)=>o-a),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||It.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||oe()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=d_();u.forEach(d=>{if(!i.has(d)){const p=v_(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):MS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):A.resolve(rr());let a=-1,l=i;return o.next(c=>A.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,oe())).next(u=>({batchId:a,changes:h_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let s=Ds();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ds();return this.indexManager.getCollectionParents(e,i).next(a=>A.forEach(a,l=>{const c=function(h,d){return new qa(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,et.newInvalidDocument(u)))});let a=Ds();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&Ks(u.mutation,c,It.empty(),Me.now()),za(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return A.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Jt(s.createTime)}}(n)),A.resolve()}getNamedQuery(e,n){return A.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:AP(s.bundledQuery),readTime:Jt(s.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(){this.overlays=new Ce(H.comparator),this.lr=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=rr();return A.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const s=rr(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return A.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ce((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=rr(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=rr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return A.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new eP(n,r));let i=this.lr.get(n);i===void 0&&(i=oe(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this.hr=new Ge(Fe.Pr),this.Ir=new Ge(Fe.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Fe(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new H(new be([])),r=new Fe(n,e),s=new Fe(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new H(new be([])),r=new Fe(n,e),s=new Fe(n,e+1);let i=oe();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Fe(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return H.comparator(e.key,n.key)||de(e.gr,n.gr)}static Tr(e,n){return de(e.gr,n.gr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Ge(Fe.Pr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ZS(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Fe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),s=new Fe(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(de);return n.forEach(s=>{const i=new Fe(s,0),o=new Fe(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),A.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new Fe(new H(i),0);let a=new Ge(de);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.gr)),!0)},o),A.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ae(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return A.forEach(n.mutations,s=>{const i=new Fe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Fe(n,0),s=this.yr.firstAfterOrEqual(r);return A.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e){this.Cr=e,this.docs=function(){return new Ce(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=gn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():et.newInvalidDocument(s))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=gn();const o=n.path,a=new H(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||_S(mS(u),r)<=0||(s.has(u.key)||za(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q()}vr(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new VP(this)}getSize(e){return A.resolve(this.size)}}class VP extends PP{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e){this.persistence=e,this.Fr=new ys(n=>Yu(n),Ju),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Mr=0,this.Or=new nh,this.targetCount=0,this.Nr=os.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),A.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new os(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.kn(n),A.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),A.waitFor(i).next(()=>s)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Ku(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new MP(this),this.indexManager=new RP,this.remoteDocumentCache=function(s){return new DP(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new wP(n),this.Kr=new kP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new OP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new NP(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const s=new xP(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return A.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class xP extends vS{constructor(e){super(),this.currentSequenceNumber=e}}class rh{constructor(e){this.persistence=e,this.Gr=new nh,this.zr=null}static jr(e){return new rh(e)}get Hr(){if(this.zr)return this.zr;throw Q()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),A.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Hr,r=>{const s=H.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return A.or([()=>A.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=oe(),s=oe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new sh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new FP;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(Rs()<=ae.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Nr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),A.resolve()):(Rs()<=ae.DEBUG&&F("QueryEngine","Query:",Nr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Rs()<=ae.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Nr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qt(n))):A.resolve())}zi(e,n){if(mf(n))return A.resolve(null);let r=Qt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Cc(n,null,"F"),r=Qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=oe(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(e,Cc(n,null,"F")):this.Xi(e,c,n,l)}))})))}ji(e,n,r,s){return mf(n)||s.isEqual(J.min())?A.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?A.resolve(null):(Rs()<=ae.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Nr(n)),this.Xi(e,o,n,gS(s,-1)).next(a=>a))})}Yi(e,n){let r=new Ge(c_(e));return n.forEach((s,i)=>{za(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return Rs()<=ae.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Nr(n)),this.Gi.getDocumentsMatchingQuery(e,n,Bn.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new Ce(de),this.ns=new ys(i=>Yu(i),Ju),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bP(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function $P(t,e,n,r){return new BP(t,e,n,r)}async function O_(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=oe();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function jP(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let p=A.resolve();return d.forEach(_=>{p=p.next(()=>u.getEntry(l,_)).next(T=>{const E=c.docVersions.get(_);Ae(E!==null),T.version.compareTo(E)<0&&(h.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),u.addEntry(T)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=oe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function N_(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function qP(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(at.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(T,E,P){return T.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(d,p,u)&&a.push(n.qr.updateTargetData(i,p))});let l=gn(),c=oe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(HP(i,o,e.documentUpdates).next(u=>{l=u.us,c=u.cs})),!r.isEqual(J.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ts=s,i))}function HP(t,e,n){let r=oe(),s=oe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=gn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:s}})}function zP(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function KP(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,A.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new On(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Dc(t,e,n){const r=Z(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Fi(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function Pf(t,e,n){const r=Z(t);let s=J.min(),i=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=Z(l),d=h.ns.get(u);return d!==void 0?A.resolve(h.ts.get(d)):h.qr.getTargetData(c,u)}(r,o,Qt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:oe())).next(a=>(WP(r,xS(e),a),{documents:a,ls:i})))}function WP(t,e,n){let r=t.rs.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class Cf{constructor(){this.activeTargetIds=qS()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GP{constructor(){this.eo=new Cf,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Cf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo=null;function Vl(){return oo===null?oo=function(){return 268435456+Math.round(2147483648*Math.random())}():oo++,"0x"+oo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection";class XP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=Vl(),l=this.So(n,r);F("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,i,o),this.Do(n,l,c,s).then(u=>(F("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ts("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_s}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=YP[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=Vl();return new Promise((o,a)=>{const l=new sS;l.setWithCredentials(!0),l.listenOnce(nS.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Nl.NO_ERROR:const u=l.getResponseJson();F(Xe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Nl.TIMEOUT:F(Xe,`RPC '${e}' ${i} timed out`),a(new q(S.DEADLINE_EXCEEDED,"Request time out"));break;case Nl.HTTP_ERROR:const h=l.getStatus();if(F(Xe,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const _=function(E){const P=E.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(P)>=0?P:S.UNKNOWN}(p.status);a(new q(_,p.message))}else a(new q(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new q(S.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{F(Xe,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);F(Xe,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}vo(e,n,r){const s=Vl(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=eS(),a=tS(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");F(Xe,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,p=!1;const _=new JP({co:E=>{p?F(Xe,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(d||(F(Xe,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),F(Xe,`RPC '${e}' stream ${s} sending:`,E),h.send(E))},lo:()=>h.close()}),T=(E,P,b)=>{E.listen(P,V=>{try{b(V)}catch(U){setTimeout(()=>{throw U},0)}})};return T(h,ro.EventType.OPEN,()=>{p||F(Xe,`RPC '${e}' stream ${s} transport opened.`)}),T(h,ro.EventType.CLOSE,()=>{p||(p=!0,F(Xe,`RPC '${e}' stream ${s} transport closed`),_.Ro())}),T(h,ro.EventType.ERROR,E=>{p||(p=!0,ts(Xe,`RPC '${e}' stream ${s} transport errored:`,E),_.Ro(new q(S.UNAVAILABLE,"The operation could not be completed")))}),T(h,ro.EventType.MESSAGE,E=>{var P;if(!p){const b=E.data[0];Ae(!!b);const V=b,U=V.error||((P=V[0])===null||P===void 0?void 0:P.error);if(U){F(Xe,`RPC '${e}' stream ${s} received error:`,U);const M=U.status;let ne=function(ee){const we=Ne[ee];if(we!==void 0)return I_(we)}(M),Te=U.message;ne===void 0&&(ne=S.INTERNAL,Te="Unknown error status: "+M+" with message "+U.message),p=!0,_.Ro(new q(ne,Te)),h.close()}else F(Xe,`RPC '${e}' stream ${s} received:`,b),_.Vo(b)}}),T(a,rS.STAT_EVENT,E=>{E.stat===of.PROXY?F(Xe,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===of.NOPROXY&&F(Xe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.Ao()},0),_}}function Ml(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(t){return new cP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n,r,s,i,o,a,l){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new D_(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(pn(n.toString()),pn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new q(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZP extends V_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=dP(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Jt(o.readTime):J.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Nc(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Pc(l)?{documents:gP(i,l)}:{query:mP(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=R_(i,o.resumeToken);const c=bc(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=Zo(i,o.snapshotVersion.toTimestamp());const c=bc(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=yP(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Nc(this.serializer),n.removeTarget=e,this.e_(n)}}class eC extends V_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=pP(e.writeResults,e.commitTime),r=Jt(e.commitTime);return this.listener.I_(r,n)}return Ae(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Nc(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>fP(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new q(S.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(S.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(S.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class nC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(pn(n),this.f_=!1):F("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Rr(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=Z(l);c.C_.add(4),await $i(c),c.M_.set("Unknown"),c.C_.delete(4),await Ya(c)}(this))})}),this.M_=new nC(r,s)}}async function Ya(t){if(Rr(t))for(const e of t.v_)await e(!0)}async function $i(t){for(const e of t.v_)await e(!1)}function M_(t,e){const n=Z(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),ah(n)?oh(n):vs(n).Ho()&&ih(n,e))}function L_(t,e){const n=Z(t),r=vs(n);n.D_.delete(e),r.Ho()&&x_(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Rr(n)&&n.M_.set("Unknown"))}function ih(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vs(t).u_(e)}function x_(t,e){t.x_.Oe(e),vs(t).c_(e)}function oh(t){t.x_=new iP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),vs(t).start(),t.M_.g_()}function ah(t){return Rr(t)&&!vs(t).jo()&&t.D_.size>0}function Rr(t){return Z(t).C_.size===0}function F_(t){t.x_=void 0}async function sC(t){t.D_.forEach((e,n)=>{ih(t,e)})}async function iC(t,e){F_(t),ah(t)?(t.M_.w_(e),oh(t)):t.M_.set("Unknown")}async function oC(t,e,n){if(t.M_.set("Online"),e instanceof A_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ea(t,r)}else if(e instanceof To?t.x_.$e(e):e instanceof w_?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(J.min()))try{const r=await N_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.D_.get(c);u&&i.D_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.D_.get(l);if(!u)return;i.D_.set(l,u.withResumeToken(at.EMPTY_BYTE_STRING,u.snapshotVersion)),x_(i,l);const h=new On(u.target,l,c,u.sequenceNumber);ih(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await ea(t,r)}}async function ea(t,e,n){if(!Fi(e))throw e;t.C_.add(1),await $i(t),t.M_.set("Offline"),n||(n=()=>N_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Ya(t)})}function U_(t,e){return e().catch(n=>ea(t,n,e))}async function Ja(t){const e=Z(t),n=jn(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;aC(e);)try{const s=await zP(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,lC(e,s)}catch(s){await ea(e,s)}B_(e)&&$_(e)}function aC(t){return Rr(t)&&t.b_.length<10}function lC(t,e){t.b_.push(e);const n=jn(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function B_(t){return Rr(t)&&!jn(t).jo()&&t.b_.length>0}function $_(t){jn(t).start()}async function cC(t){jn(t).E_()}async function uC(t){const e=jn(t);for(const n of t.b_)e.P_(n.mutations)}async function hC(t,e,n){const r=t.b_.shift(),s=Zu.from(r,e,n);await U_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ja(t)}async function dC(t,e){e&&jn(t).h_&&await async function(r,s){if(function(o){return nP(o)&&o!==S.ABORTED}(s.code)){const i=r.b_.shift();jn(r).Yo(),await U_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ja(r)}}(t,e),B_(t)&&$_(t)}async function kf(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Rr(n);n.C_.add(3),await $i(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Ya(n)}async function fC(t,e){const n=Z(t);e?(n.C_.delete(2),await Ya(n)):e||(n.C_.add(2),await $i(n),n.M_.set("Unknown"))}function vs(t){return t.O_||(t.O_=function(n,r,s){const i=Z(n);return i.A_(),new ZP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:sC.bind(null,t),Io:iC.bind(null,t),a_:oC.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),ah(t)?oh(t):t.M_.set("Unknown")):(await t.O_.stop(),F_(t))})),t.O_}function jn(t){return t.N_||(t.N_=function(n,r,s){const i=Z(n);return i.A_(),new eC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:cC.bind(null,t),Io:dC.bind(null,t),T_:uC.bind(null,t),I_:hC.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Ja(t)):(await t.N_.stop(),t.b_.length>0&&(F("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new lh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ch(t,e){if(pn("AsyncQueue",`${e}: ${t}`),Fi(t))return new q(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Ds(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new Wr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Wr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Wr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.B_=new Ce(H.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):Q():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class as{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new as(e,n,Wr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(){this.k_=void 0,this.listeners=[]}}class gC{constructor(){this.queries=new ys(e=>l_(e),Ha),this.onlineState="Unknown",this.q_=new Set}}async function mC(t,e){const n=Z(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new pC),s)try{i.k_=await n.onListen(r)}catch(o){const a=ch(o,`Initialization of query '${Nr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&uh(n)}async function _C(t,e){const n=Z(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function yC(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&uh(n)}function vC(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function uh(t){t.q_.forEach(e=>{e.next()})}class EC{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new as(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=as.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.key=e}}class q_{constructor(e){this.key=e}}class TC{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=oe(),this.mutatedKeys=oe(),this._a=c_(e),this.aa=new Wr(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Of,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=za(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),T=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?_!==T&&(r.track({type:3,doc:p}),E=!0):this.ha(d,p)||(r.track({type:2,doc:p}),E=!0,(l&&this._a(p,l)>0||c&&this._a(p,c)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),E=!0):d&&!p&&(r.track({type:1,doc:d}),E=!0,(l||c)&&(a=!0)),E&&(p?(o=o.add(p),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(p,_){const T=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return T(p)-T(_)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],l=this.oa.size===0&&this.current&&!s?1:0,c=l!==this.sa;return this.sa=l,o.length!==0||c?{snapshot:new as(this.query,e.aa,i,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Of,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=oe(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new q_(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new j_(r))}),n}da(e){this.ia=e.ls,this.oa=oe();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return as.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class IC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class wC{constructor(e){this.key=e,this.Ra=!1}}class AC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new ys(a=>l_(a),Ha),this.fa=new Map,this.ga=new Set,this.pa=new Ce(H.comparator),this.ya=new Map,this.wa=new nh,this.Sa={},this.ba=new Map,this.Da=os.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function RC(t,e){const n=MC(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await KP(n.localStore,Qt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await SC(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&M_(n.remoteStore,o)}return s}async function SC(t,e,n,r,s){t.va=(h,d,p)=>async function(T,E,P,b){let V=E.view.ca(P);V.Zi&&(V=await Pf(T.localStore,E.query,!1).then(({documents:Te})=>E.view.ca(Te,V)));const U=b&&b.targetChanges.get(E.targetId),M=b&&b.targetMismatches.get(E.targetId)!=null,ne=E.view.applyChanges(V,T.isPrimaryClient,U,M);return Df(T,E.targetId,ne.Ta),ne.snapshot}(t,h,d,p);const i=await Pf(t.localStore,e,!0),o=new TC(e,i.ls),a=o.ca(i.documents),l=Bi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Df(t,n,c.Ta);const u=new IC(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),c.snapshot}async function PC(t,e){const n=Z(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!Ha(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Dc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),L_(n.remoteStore,r.targetId),Vc(n,r.targetId)}).catch(xi)):(Vc(n,r.targetId),await Dc(n.localStore,r.targetId,!0))}async function CC(t,e,n){const r=LC(t);try{const s=await function(o,a){const l=Z(o),c=Me.now(),u=a.reduce((p,_)=>p.add(_.key),oe());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let _=gn(),T=oe();return l.ss.getEntries(p,u).next(E=>{_=E,_.forEach((P,b)=>{b.isValidDocument()||(T=T.add(P))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,_)).next(E=>{h=E;const P=[];for(const b of a){const V=JS(b,h.get(b.key).overlayedDocument);V!=null&&P.push(new Wn(b.key,V,t_(V.value.mapValue),Yt.exists(!0)))}return l.mutationQueue.addMutationBatch(p,c,P,a)}).next(E=>{d=E;const P=E.applyToLocalDocumentSet(h,T);return l.documentOverlayCache.saveOverlays(p,E.batchId,P)})}).then(()=>({batchId:d.batchId,changes:h_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Sa[o.currentUser.toKey()];c||(c=new Ce(de)),c=c.insert(a,l),o.Sa[o.currentUser.toKey()]=c}(r,s.batchId,n),await ji(r,s.changes),await Ja(r.remoteStore)}catch(s){const i=ch(s,"Failed to persist write");n.reject(i)}}async function H_(t,e){const n=Z(t);try{const r=await qP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(Ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?Ae(o.Ra):s.removedDocuments.size>0&&(Ae(o.Ra),o.Ra=!1))}),await ji(n,r,e)}catch(r){await xi(r)}}function Nf(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=Z(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(c=!0)}),c&&uh(l)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bC(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new Ce(H.comparator);o=o.insert(i,et.newNoDocument(i,J.min()));const a=oe().add(i),l=new Ga(J.min(),new Map,new Ce(de),o,a);await H_(r,l),r.pa=r.pa.remove(i),r.ya.delete(e),hh(r)}else await Dc(r.localStore,e,!1).then(()=>Vc(r,e,n)).catch(xi)}async function kC(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await jP(n.localStore,e);K_(n,r,null),z_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ji(n,s)}catch(s){await xi(s)}}async function OC(t,e,n){const r=Z(t);try{const s=await function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Ae(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);K_(r,e,n),z_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ji(r,s)}catch(s){await xi(s)}}function z_(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function K_(t,e,n){const r=Z(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function Vc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||W_(t,r)})}function W_(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(L_(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),hh(t))}function Df(t,e,n){for(const r of n)r instanceof j_?(t.wa.addReference(r.key,e),NC(t,r)):r instanceof q_?(F("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||W_(t,r.key)):Q()}function NC(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(F("SyncEngine","New document in limbo: "+n),t.ga.add(r),hh(t))}function hh(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new H(be.fromString(e)),r=t.Da.next();t.ya.set(r,new wC(n)),t.pa=t.pa.insert(n,r),M_(t.remoteStore,new On(Qt(Xu(n.path)),r,"TargetPurposeLimboResolution",Ku._e))}}async function ji(t,e,n){const r=Z(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=sh.Qi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(l,c){const u=Z(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(c,d=>A.forEach(d.ki,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>A.forEach(d.qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Fi(h))throw h;F("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const p=u.ts.get(d),_=p.snapshotVersion,T=p.withLastLimboFreeSnapshotVersion(_);u.ts=u.ts.insert(d,T)}}}(r.localStore,i))}async function DC(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await O_(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(l=>{l.reject(new q(S.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ji(n,r._s)}}function VC(t,e){const n=Z(t),r=n.ya.get(e);if(r&&r.Ra)return oe().add(r.key);{let s=oe();const i=n.fa.get(e);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function MC(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=H_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bC.bind(null,e),e.Va.a_=yC.bind(null,e.eventManager),e.Va.Fa=vC.bind(null,e.eventManager),e}function LC(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OC.bind(null,e),e}class Vf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Qa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return $P(this.persistence,new UP,e.initialUser,this.serializer)}createPersistence(e){return new LP(rh.jr,this.serializer)}createSharedClientState(e){return new GP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DC.bind(null,this.syncEngine),await fC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gC}()}createDatastore(e){const n=Qa(e.databaseInfo.databaseId),r=function(i){return new XP(i)}(e.databaseInfo);return function(i,o,a,l){return new tC(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new rC(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Nf(this.syncEngine,n,0),function(){return bf.D()?new bf:new QP}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new AC(s,i,o,a,l,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);F("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await $i(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):pn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=Xm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ch(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ll(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await O_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Mf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $C(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>kf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>kf(e.remoteStore,i)),t._onlineComponents=e}function BC(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function $C(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ll(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!BC(n))throw n;ts("Error using user provided cache. Falling back to memory cache: "+n),await Ll(t,new Vf)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await Ll(t,new Vf);return t._offlineComponents}async function G_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await Mf(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await Mf(t,new xC))),t._onlineComponents}function jC(t){return G_(t).then(e=>e.syncEngine)}async function qC(t){const e=await G_(t),n=e.eventManager;return n.onListen=RC.bind(null,e.syncEngine),n.onUnlisten=PC.bind(null,e.syncEngine),n}function HC(t,e,n={}){const r=new xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new FC({next:d=>{o.enqueueAndForget(()=>_C(i,h));const p=d.docs.has(a);!p&&d.fromCache?c.reject(new q(S.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&l&&l.source==="server"?c.reject(new q(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new EC(Xu(a.path),u,{includeMetadataChanges:!0,J_:!0});return mC(i,h)}(await qC(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(t,e,n){if(!n)throw new q(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KC(t,e,n,r){if(e===!0&&r===!0)throw new q(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xf(t){if(!H.isDocumentKey(t))throw new q(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function vr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dh(t);throw new q(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Q_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new q(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new q(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new q(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fh{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ff({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ff(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oS;switch(r.type){case"firstParty":return new uS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Lf.get(n);r&&(F("ComponentProvider","Removing Datastore"),Lf.delete(n),r.terminate())}(this),Promise.resolve()}}function WC(t,e,n,r={}){var s;const i=(t=vr(t,fh))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ze.MOCK_USER;else{a=mI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ze(c)}t._authCredentials=new aS(new Jm(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ph(this.firestore,e,this._query)}}class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class vi extends ph{constructor(e,n,r){super(e,n,Xu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new H(e))}withConverter(e){return new vi(this.firestore,e,this._path)}}function Ss(t,e,...n){if(t=ot(t),arguments.length===1&&(e=Xm.newId()),zC("doc","path",e),t instanceof fh){const r=be.fromString(e,...n);return xf(r),new wt(t,null,new H(r))}{if(!(t instanceof wt||t instanceof vi))throw new q(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return xf(r),new wt(t.firestore,t instanceof vi?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new D_(this,"async_queue_retry"),this.iu=()=>{const n=Ml();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Ml();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Ml();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new xn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Fi(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw pn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=lh.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&Q()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class Xa extends fh{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new GC}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||J_(this),this._firestoreClient.terminate()}}function QC(t,e){const n=typeof t=="object"?t:pg(),r=typeof t=="string"?t:e||"(default)",s=fu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=pI("firestore");i&&WC(s,...i)}return s}function Y_(t){return t._firestoreClient||J_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function J_(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new IS(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Q_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new UC(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ls(at.fromBase64String(e))}catch(n){throw new q(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ls(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=/^__.*__$/;class JC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Wn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ui(e,this.data,n,this.fieldTransforms)}}class X_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Wn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Z_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class tl{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new tl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return ta(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(Z_(this.Iu)&&YC.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class XC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Qa(e)}pu(e,n,r,s=!1){return new tl({Iu:e,methodName:n,gu:r,path:Ke.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ey(t){const e=t._freezeSettings(),n=Qa(t._databaseId);return new XC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ZC(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);mh("Data must be an object, but it was:",o,r);const a=ty(r,o);let l,c;if(i.merge)l=new It(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Mc(e,h,n);if(!o.contains(d))throw new q(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ry(u,d)||u.push(d)}l=new It(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new JC(new pt(a),l,c)}class nl extends el{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nl}}function eb(t,e,n){return new tl({Iu:3,gu:e.settings.gu,methodName:t._methodName,du:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class tb extends el{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=eb(this,e,!0),r=this.yu.map(i=>qi(i,n)),s=new is(r);return new WS(e.path,s)}isEqual(e){return this===e}}function nb(t,e,n,r){const s=t.pu(1,e,n);mh("Data must be an object, but it was:",s,r);const i=[],o=pt.empty();Ar(r,(l,c)=>{const u=_h(e,l,n);c=ot(c);const h=s.Ru(u);if(c instanceof nl)i.push(u);else{const d=qi(c,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new It(i);return new X_(o,a,s.fieldTransforms)}function rb(t,e,n,r,s,i){const o=t.pu(1,e,n),a=[Mc(e,r,n)],l=[s];if(i.length%2!=0)throw new q(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Mc(e,i[d])),l.push(i[d+1]);const c=[],u=pt.empty();for(let d=a.length-1;d>=0;--d)if(!ry(c,a[d])){const p=a[d];let _=l[d];_=ot(_);const T=o.Ru(p);if(_ instanceof nl)c.push(p);else{const E=qi(_,T);E!=null&&(c.push(p),u.set(p,E))}}const h=new It(c);return new X_(u,h,o.fieldTransforms)}function qi(t,e){if(ny(t=ot(t)))return mh("Unsupported field value:",e,t),ty(t,e);if(t instanceof el)return function(r,s){if(!Z_(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=qi(a,s.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return HS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Me.fromDate(r);return{timestampValue:Zo(s.serializer,i)}}if(r instanceof Me){const i=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zo(s.serializer,i)}}if(r instanceof gh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ls)return{bytesValue:R_(s.serializer,r._byteString)};if(r instanceof wt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:th(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${dh(r)}`)}(t,e)}function ty(t,e){const n={};return Zm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ar(t,(r,s)=>{const i=qi(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ny(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof gh||t instanceof ls||t instanceof wt||t instanceof el)}function mh(t,e,n){if(!ny(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=dh(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Mc(t,e,n){if((e=ot(e))instanceof Za)return e._internalPath;if(typeof e=="string")return _h(t,e);throw ta("Field path arguments must be of type string or ",t,!1,void 0,n)}const sb=new RegExp("[~\\*/\\[\\]]");function _h(t,e,n){if(e.search(sb)>=0)throw ta(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Za(...e.split("."))._internalPath}catch{throw ta(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ta(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new q(S.INVALID_ARGUMENT,a+t+l)}function ry(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ib(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(iy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ib extends sy{data(){return super.data()}}function iy(t,e){return typeof e=="string"?_h(t,e):e instanceof Za?e._internalPath:e._delegate._internalPath}class ob{convertValue(e,n="none"){switch(yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ar(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new gh(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gi(e));default:return null}}convertTimestamp(e){const n=$n(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);Ae(k_(r));const s=new mi(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||pn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oy extends sy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cb(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(iy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class cb extends oy{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t){t=vr(t,wt);const e=vr(t.firestore,Xa);return HC(Y_(e),t._key).then(n=>db(e,t,n))}class ub extends ob{constructor(e){super(),this.firestore=e}convertBytes(e){return new ls(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function hb(t,e,n){t=vr(t,wt);const r=vr(t.firestore,Xa),s=ab(t.converter,e,n);return ay(r,[ZC(ey(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Yt.none())])}function xl(t,e,n,...r){t=vr(t,wt);const s=vr(t.firestore,Xa),i=ey(s);let o;return o=typeof(e=ot(e))=="string"||e instanceof Za?rb(i,"updateDoc",t._key,e,n,r):nb(i,"updateDoc",t._key,e),ay(s,[o.toMutation(t._key,Yt.exists(!0))])}function ay(t,e){return function(r,s){const i=new xn;return r.asyncQueue.enqueueAndForget(async()=>CC(await jC(r),s,i)),i.promise}(Y_(t),e)}function db(t,e,n){const r=n.docs.get(e._key),s=new ub(t);return new oy(t,s,e._key,r,new lb(n.hasPendingWrites,n.fromCache),e.converter)}function fb(...t){return new tb("arrayUnion",t)}(function(e,n=!0){(function(s){_s=s})(fs),Zr(new dr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Xa(new lS(r.getProvider("auth-internal")),new dS(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mi(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Ln(af,"4.4.0",e),Ln(af,"4.4.0","esm2017")})();const pb={apiKey:"AIzaSyC8hPGHdoqSMHKNJkladSfQA_h-EZ8wLg4",authDomain:"my-tasks-5557d.firebaseapp.com",projectId:"my-tasks-5557d",storageBucket:"my-tasks-5557d.appspot.com",messagingSenderId:"246772966266",appId:"1:246772966266:web:08bf7729c3023c10a12cc3"},ly=fg(pb),Pt=Z0(ly),Ps=QC(ly),Hi={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},cs={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},ht={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},gb={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom",NONE:"none"},cy={dangerouslyHTMLString:!1,multiple:!0,position:Hi.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},mb={rtl:!1,newestOnTop:!1,toastClassName:""},uy={...cy,...mb};({...cy,type:ht.DEFAULT});var ge=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(ge||{}),Lc=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(Lc||{});const _b={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},yb={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},vb={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},Eb={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"},Uf="Toastify--animate Toastify__none-enter";function hy(t,e=!1){var n;let r=_b;if(!t||typeof t=="string")switch(t){case"flip":r=Eb;break;case"zoom":r=vb;break;case"slide":r=yb;break}else r=t;if(e)r.enter=Uf;else if(r.enter===Uf){const s=(n=r.exit.split("__")[1])==null?void 0:n.split("-")[0];r.enter="Toastify--animate Toastify__".concat(s,"-enter")}return r}function Tb(t){return t.containerId||String(t.position)}const rl="will-unmount";function Ib(t=Hi.TOP_RIGHT){return!!document.querySelector(".".concat(ge.CSS_NAMESPACE,"__toast-container--").concat(t))}function wb(t=Hi.TOP_RIGHT){return"".concat(ge.CSS_NAMESPACE,"__toast-container--").concat(t)}function Ab(t,e,n=!1){const r=["".concat(ge.CSS_NAMESPACE,"__toast-container"),"".concat(ge.CSS_NAMESPACE,"__toast-container--").concat(t),n?"".concat(ge.CSS_NAMESPACE,"__toast-container--rtl"):null].filter(Boolean).join(" ");return Gr(e)?e({position:t,rtl:n,defaultClassName:r}):"".concat(r," ").concat(e||"")}function Rb(t){var e;const{position:n,containerClassName:r,rtl:s=!1,style:i={}}=t,o=ge.CSS_NAMESPACE,a=wb(n),l=document.querySelector(".".concat(o)),c=document.querySelector(".".concat(a)),u=!!c&&!((e=c.className)!=null&&e.includes(rl)),h=l||document.createElement("div"),d=document.createElement("div");d.className=Ab(n,r,s),d.dataset.testid="".concat(ge.CSS_NAMESPACE,"__toast-container--").concat(n),d.id=Tb(t);for(const p in i)if(Object.prototype.hasOwnProperty.call(i,p)){const _=i[p];d.style[p]=_}return l||(h.className=ge.CSS_NAMESPACE,document.body.appendChild(h)),u||h.appendChild(d),d}function xc(t){var e,n,r;const s=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),i=document.getElementById(s);i&&i.removeEventListener("animationend",xc,!1);try{Ei[s].unmount(),(r=document.getElementById(s))==null||r.remove(),delete Ei[s],delete je[s]}catch{}}const Ei=xt({});function Sb(t,e){const n=document.getElementById(String(e));n&&(Ei[n.id]=t)}function Fc(t,e=!0){const n=String(t);if(!Ei[n])return;const r=document.getElementById(n);r&&r.classList.add(rl),e?(Cb(t),r&&r.addEventListener("animationend",xc,!1)):xc(n),tn.items=tn.items.filter(s=>s.containerId!==t)}function Pb(t){for(const e in Ei)Fc(e,t);tn.items=[]}function dy(t,e){const n=document.getElementById(t.toastId);if(n){let r=t;r={...r,...hy(r.transition)};const s=r.appendPosition?"".concat(r.exit,"--").concat(r.position):r.exit;n.className+=" ".concat(s),e&&e(n)}}function Cb(t){for(const e in je)if(e===t)for(const n of je[e]||[])dy(n)}function bb(t){const e=us().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function yh(t){return document.getElementById(t)}function kb(t){const e=yh(t.containerId);return e&&e.classList.contains(rl)}function Bf(t){var e;const n=ei(t.content)?G(t.content.props):null;return n??G((e=t.data)!=null?e:{})}function Ob(t){return t?tn.items.filter(e=>e.containerId===t).length>0:tn.items.length>0}function Nb(){if(tn.items.length>0){const t=tn.items.shift();Io(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const je=xt({}),tn=xt({items:[]});function us(){const t=G(je);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function Db(t){return us().find(e=>e.toastId===t)}function Io(t,e={}){if(kb(e)){const n=yh(e.containerId);n&&n.addEventListener("animationend",Uc.bind(null,t,e),!1)}else Uc(t,e)}function Uc(t,e={}){const n=yh(e.containerId);n&&n.removeEventListener("animationend",Uc.bind(null,t,e),!1);const r=je[e.containerId]||[],s=r.length>0;if(!s&&!Ib(e.position)){const i=Rb(e),o=qp(Xb,e);o.mount(i),Sb(o,i.id)}s&&!e.updateId&&(e.position=r[0].position),Ii(()=>{e.updateId?Et.update(e):Et.add(t,e)})}const Et={add(t,e){const{containerId:n=""}=e;n&&(je[n]=je[n]||[],je[n].find(r=>r.toastId===e.toastId)||setTimeout(()=>{var r,s;e.newestOnTop?(r=je[n])==null||r.unshift(e):(s=je[n])==null||s.push(e),e.onOpen&&e.onOpen(Bf(e))},e.delay||0))},remove(t){if(t){const e=bb(t);if(e){const n=je[e];let r=n.find(s=>s.toastId===t);je[e]=n.filter(s=>s.toastId!==t),!je[e].length&&!Ob(e)&&Fc(e,!1),Nb(),Ii(()=>{r!=null&&r.onClose&&(r.onClose(Bf(r)),r=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){je[e]=je[e]||[];const n=je[e].find(i=>i.toastId===t.toastId),r=(n==null?void 0:n.position)!==t.position||(n==null?void 0:n.transition)!==t.transition,s={...t,disabledEnterTransition:!r,updateId:void 0};Et.dismissForce(t==null?void 0:t.toastId),setTimeout(()=>{ue(s.content,s)},t.delay||0)}},clear(t,e=!0){t?Fc(t,e):Pb(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,r=document.getElementById(n);r&&(r.removeEventListener("animationend",Et.dismissCallback,!1),setTimeout(()=>{Et.remove(n)}))},dismiss(t){if(t){const e=us();for(const n of e)if(n.toastId===t){dy(n,r=>{r.addEventListener("animationend",Et.dismissCallback,!1)});break}}},dismissForce(t){if(t){const e=us();for(const n of e)if(n.toastId===t){const r=document.getElementById(t);r&&(r.remove(),r.removeEventListener("animationend",Et.dismissCallback,!1),Et.remove(t));break}}}},fy=xt({}),na=xt({});function py(){return Math.random().toString(36).substring(2,9)}function Vb(t){return typeof t=="number"&&!isNaN(t)}function Bc(t){return typeof t=="string"}function Gr(t){return typeof t=="function"}function sl(...t){return _n(...t)}function wo(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function Mb(t={}){fy["".concat(ge.CSS_NAMESPACE,"-default-options")]=t}function Lb(){return fy["".concat(ge.CSS_NAMESPACE,"-default-options")]||uy}function xb(){return document.documentElement.classList.contains("dark")?"dark":"light"}var Ao=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(Ao||{});const gy={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},disabledEnterTransition:{type:Boolean,required:!1,default:!1},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:Hi.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:cs.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:ht.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},Fb={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:ht.DEFAULT},theme:{type:String,required:!1,default:cs.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},Ub=ds({name:"ProgressBar",props:Fb,setup(t,{attrs:e}){const n=nt(),r=_e(()=>t.hide?"true":"false"),s=_e(()=>({...e.style||{},animationDuration:"".concat(t.autoClose===!0?5e3:t.autoClose,"ms"),animationPlayState:t.isRunning?"running":"paused",opacity:t.hide||t.autoClose===!1?0:1,transform:t.controlledProgress?"scaleX(".concat(t.progress,")"):"none"})),i=_e(()=>["".concat(ge.CSS_NAMESPACE,"__progress-bar"),t.controlledProgress?"".concat(ge.CSS_NAMESPACE,"__progress-bar--controlled"):"".concat(ge.CSS_NAMESPACE,"__progress-bar--animated"),"".concat(ge.CSS_NAMESPACE,"__progress-bar-theme--").concat(t.theme),"".concat(ge.CSS_NAMESPACE,"__progress-bar--").concat(t.type),t.rtl?"".concat(ge.CSS_NAMESPACE,"__progress-bar--rtl"):null].filter(Boolean).join(" ")),o=_e(()=>"".concat(i.value," ").concat((e==null?void 0:e.class)||"")),a=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},l=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),a())},c=_e(()=>t.controlledProgress?null:l),u=_e(()=>t.controlledProgress?l:null);return uo(()=>{n.value&&(a(),n.value.onanimationend=c.value,n.value.ontransitionend=u.value)}),()=>te("div",{ref:n,role:"progressbar","aria-hidden":r.value,"aria-label":"notification timer",class:o.value,style:s.value},null)}}),Bb=ds({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:cs.AUTO},type:{type:String,required:!1,default:cs.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>te("button",{class:"".concat(ge.CSS_NAMESPACE,"__close-button ").concat(ge.CSS_NAMESPACE,"__close-button--").concat(t.theme),type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[te("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[te("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),il=({theme:t,type:e,path:n,...r})=>te("svg",_n({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-".concat(e,")")},r),[te("path",{d:n},null)]);function $b(t){return te(il,_n(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function jb(t){return te(il,_n(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function qb(t){return te(il,_n(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function Hb(t){return te(il,_n(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function zb(){return te("div",{class:"".concat(ge.CSS_NAMESPACE,"__spinner")},null)}const $c={info:jb,warning:$b,success:qb,error:Hb,spinner:zb},Kb=t=>t in $c;function Wb({theme:t,type:e,isLoading:n,icon:r}){let s;const i={theme:t,type:e};return n?s=$c.spinner():r===!1?s=void 0:wo(r)?s=G(r):Gr(r)?s=r(i):ei(r)?s=hr(r,i):Bc(r)||Vb(r)?s=r:Kb(e)&&(s=$c[e](i)),s}const Gb=()=>{};function Qb(t,e,n=ge.COLLAPSE_DURATION){const{scrollHeight:r,style:s}=t,i=n;requestAnimationFrame(()=>{s.minHeight="initial",s.height=r+"px",s.transition="all ".concat(i,"ms"),requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(e,i)})})}function Yb(t){const e=nt(!1),n=nt(!1),r=nt(!1),s=nt(Ao.Enter),i=xt({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||ge.COLLAPSE_DURATION}),o=i.done||Gb,a=_e(()=>i.appendPosition?"".concat(i.enter,"--").concat(i.position):i.enter),l=_e(()=>i.appendPosition?"".concat(i.exit,"--").concat(i.position):i.exit),c=_e(()=>t.pauseOnHover?{onMouseenter:E,onMouseleave:T}:{});function u(){const b=a.value.split(" ");d().addEventListener(Lc.ENTRANCE_ANIMATION_END,T,{once:!0});const V=M=>{const ne=d();M.target===ne&&(ne.dispatchEvent(new Event(Lc.ENTRANCE_ANIMATION_END)),ne.removeEventListener("animationend",V),ne.removeEventListener("animationcancel",V),s.value===Ao.Enter&&M.type!=="animationcancel"&&ne.classList.remove(...b))},U=()=>{const M=d();M.classList.add(...b),M.addEventListener("animationend",V),M.addEventListener("animationcancel",V)};t.pauseOnFocusLoss&&p(),U()}function h(){if(!d())return;const b=()=>{const U=d();U.removeEventListener("animationend",b),i.collapse?Qb(U,o,i.collapseDuration):o()},V=()=>{const U=d();s.value=Ao.Exit,U&&(U.className+=" ".concat(l.value),U.addEventListener("animationend",b))};n.value||(r.value?b():setTimeout(V))}function d(){return t.toastRef.value}function p(){document.hasFocus()||E(),window.addEventListener("focus",T),window.addEventListener("blur",E)}function _(){window.removeEventListener("focus",T),window.removeEventListener("blur",E)}function T(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function E(){e.value=!1}function P(b){b&&(b.stopPropagation(),b.preventDefault()),n.value=!1}return uo(h),uo(()=>{const b=us();n.value=b.findIndex(V=>V.toastId===i.toastId)>-1}),uo(()=>{t.isLoading!==void 0&&(t.loading.value?E():T())}),ga(u),ma(()=>{t.pauseOnFocusLoss&&_()}),{isIn:n,isRunning:e,hideToast:P,eventHandlers:c}}const Jb=ds({name:"ToastItem",inheritAttrs:!1,props:gy,setup(t){const e=nt(),n=_e(()=>!!t.isLoading),r=_e(()=>t.progress!==void 0&&t.progress!==null),s=_e(()=>Wb(t)),i=_e(()=>["".concat(ge.CSS_NAMESPACE,"__toast"),"".concat(ge.CSS_NAMESPACE,"__toast-theme--").concat(t.theme),"".concat(ge.CSS_NAMESPACE,"__toast--").concat(t.type),t.rtl?"".concat(ge.CSS_NAMESPACE,"__toast--rtl"):void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:o,isIn:a,hideToast:l,eventHandlers:c}=Yb({toastRef:e,loading:n,done:()=>{Et.remove(t.toastId)},...hy(t.transition,t.disabledEnterTransition),...t});return()=>te("div",_n({id:t.toastId,class:i.value,style:t.toastStyle||{},ref:e,"data-testid":"toast-item-".concat(t.toastId),onClick:u=>{t.closeOnClick&&l(),t.onClick&&t.onClick(u)}},c.value),[te("div",{role:t.role,"data-testid":"toast-body",class:"".concat(ge.CSS_NAMESPACE,"__toast-body ").concat(t.bodyClassName||"")},[s.value!=null&&te("div",{"data-testid":"toast-icon-".concat(t.type),class:["".concat(ge.CSS_NAMESPACE,"__toast-icon"),t.isLoading?"":"".concat(ge.CSS_NAMESPACE,"--animate-icon ").concat(ge.CSS_NAMESPACE,"__zoom-enter")].join(" ")},[wo(s.value)?Lr(G(s.value),{theme:t.theme,type:t.type}):Gr(s.value)?s.value({theme:t.theme,type:t.type}):s.value]),te("div",{"data-testid":"toast-content"},[wo(t.content)?Lr(G(t.content),{toastProps:G(t),closeToast:l,data:t.data}):Gr(t.content)?t.content({toastProps:G(t),closeToast:l,data:t.data}):t.dangerouslyHTMLString?Lr("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&te(Bb,{theme:t.theme,closeToast:u=>{u.stopPropagation(),u.preventDefault(),l()}},null),wo(t.closeButton)?Lr(G(t.closeButton),{closeToast:l,type:t.type,theme:t.theme}):Gr(t.closeButton)?t.closeButton({closeToast:l,type:t.type,theme:t.theme}):null,te(Ub,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:a.value,type:t.type,hide:t.hideProgressBar,isRunning:o.value,autoClose:t.autoClose,controlledProgress:r.value,progress:t.progress,closeToast:t.isLoading?void 0:l},null)])}});let Ws=0;function my(){typeof window>"u"||(Ws&&window.cancelAnimationFrame(Ws),Ws=window.requestAnimationFrame(my),na.lastUrl!==window.location.href&&(na.lastUrl=window.location.href,Et.clear()))}const Xb=ds({name:"ToastifyContainer",inheritAttrs:!1,props:gy,setup(t){const e=_e(()=>t.containerId),n=_e(()=>je[e.value]||[]),r=_e(()=>n.value.filter(s=>s.position===t.position));return ga(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(my)}),ma(()=>{typeof window<"u"&&Ws&&(window.cancelAnimationFrame(Ws),na.lastUrl="")}),()=>te(vt,null,[r.value.map(s=>{const{toastId:i=""}=s;return te(Jb,_n({key:i},s),null)})])}});let Fl=!1;function _y(){const t=[];return us().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(rl)&&t.push(e)}),t}function Zb(t){const e=_y().length,n=t??0;return n>0&&e+tn.items.length>=n}function e1(t){Zb(t.limit)&&!t.updateId&&tn.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function Gn(t,e,n={}){if(Fl)return;n=sl(Lb(),{type:e},G(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=py()),n={...n,content:t,containerId:n.containerId||String(n.position)};const r=Number(n==null?void 0:n.progress);return r<0&&(n.progress=0),r>1&&(n.progress=1),n.theme==="auto"&&(n.theme=xb()),e1(n),na.lastUrl=window.location.href,n.multiple?tn.items.length?n.updateId&&Io(t,n):Io(t,n):(Fl=!0,ue.clearAll(void 0,!1),setTimeout(()=>{Io(t,n)},0),setTimeout(()=>{Fl=!1},390)),n.toastId}const ue=(t,e)=>Gn(t,ht.DEFAULT,e);ue.info=(t,e)=>Gn(t,ht.DEFAULT,{...e,type:ht.INFO});ue.error=(t,e)=>Gn(t,ht.DEFAULT,{...e,type:ht.ERROR});ue.warning=(t,e)=>Gn(t,ht.DEFAULT,{...e,type:ht.WARNING});ue.warn=ue.warning;ue.success=(t,e)=>Gn(t,ht.DEFAULT,{...e,type:ht.SUCCESS});ue.loading=(t,e)=>Gn(t,ht.DEFAULT,sl(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));ue.dark=(t,e)=>Gn(t,ht.DEFAULT,sl(e,{theme:cs.DARK}));ue.remove=t=>{t?Et.dismiss(t):Et.clear()};ue.clearAll=(t,e)=>{Et.clear(t,e)};ue.isActive=t=>{let e=!1;return e=_y().findIndex(n=>n.toastId===t)>-1,e};ue.update=(t,e={})=>{setTimeout(()=>{const n=Db(t);if(n){const r=G(n),{content:s}=r,i={...r,...e,toastId:e.toastId||t,updateId:py()},o=i.render||s;delete i.render,Gn(o,i.type,i)}},0)};ue.done=t=>{ue.update(t,{isLoading:!1,progress:1})};ue.promise=t1;function t1(t,{pending:e,error:n,success:r},s){var i,o,a;let l;const c={...s||{},autoClose:!1};e&&(l=Bc(e)?ue.loading(e,c):ue.loading(e.render,{...c,...e}));const u={autoClose:(i=s==null?void 0:s.autoClose)!=null?i:!0,closeOnClick:(o=s==null?void 0:s.closeOnClick)!=null?o:!0,closeButton:(a=s==null?void 0:s.autoClose)!=null?a:null,isLoading:void 0,draggable:null,delay:100},h=(p,_,T)=>{if(_==null){ue.remove(l);return}const E={type:p,...u,...s,data:T},P=Bc(_)?{render:_}:_;return l?ue.update(l,{...E,...P,isLoading:!1}):ue(P.render,{...E,...P,isLoading:!1}),T},d=Gr(t)?t():t;return d.then(p=>{h("success",r,p)}).catch(p=>{h("error",n,p)}),d}ue.POSITION=Hi;ue.THEME=cs;ue.TYPE=ht;ue.TRANSITIONS=gb;const yy={install(t,e={}){n1(e)}};typeof window<"u"&&(window.Vue3Toastify=yy);function n1(t={}){const e=sl(uy,t);Mb(e)}const ol=ZE("taskStore",{state:()=>({user:{},loading:!1}),getters:{tasks(){return this.user.tasks},favs(){return this.user.tasks.filter(t=>t.isFav)},favCount(){return this.favs.length},totalCount(){var t,e;return(e=(t=this.user)==null?void 0:t.tasks)==null?void 0:e.length}},actions:{addId(t){this.user.id=t},async addUser(){const t=Ss(Ps,"users",Pt.currentUser.uid);hb(t,{tasks:[]},{merge:!0})},async getUser(){var n,r;const t=Ss(Ps,"users",(n=Pt==null?void 0:Pt.currentUser)==null?void 0:n.uid),e=await ao(t);this.user={id:Pt.currentUser.uid,tasks:(r=e==null?void 0:e.data())==null?void 0:r.tasks}},async addTask(t){this.user.tasks.push(t);const e=Ss(Ps,"users",Pt.currentUser.uid);(await ao(e)).exists()?await xl(e,{tasks:fb(t)}):console.log("Error: getDoc(userRef)")},async deleteTask(t){const e=Ss(Ps,"users",Pt.currentUser.uid);this.user.tasks=this.user.tasks.filter(r=>JSON.stringify(r)!==JSON.stringify(t)),console.log("after delete:",this.user),(await ao(e)).exists()?await xl(e,{tasks:this.user.tasks}):console.log("Error: deleteTask(userRef)")},async toggleFav(t){const e=this.user.tasks.find(s=>JSON.stringify(s)===JSON.stringify(t));e.isFav=!e.isFav;const n=Ss(Ps,"users",Pt.currentUser.uid);(await ao(n)).exists()?await xl(n,{tasks:this.user.tasks}):console.log("Error: deleteTask(userRef)")}}}),r1=ie("h1",null,"Sign In To Manage Your Daily Tasks",-1),s1={style:{"margin-top":"8rem","margin-right":"4rem"}},i1=ie("label",{for:"email",class:"signInlabel"},"Email",-1),o1=ie("label",{for:"password",style:{"margin-left":"-1rem","margin-right":"1rem"}},"Password",-1),a1={class:"signin-button",type:"submit"},$f={__name:"SignIn",setup(t){const e=ol(),n=()=>{ue("You are a member now 🥳",{autoClose:3e3,position:ue.POSITION.TOP_RIGHT})},r=()=>{ue("You need a better password !",{autoClose:3e3,position:ue.POSITION.TOP_RIGHT})},s=()=>{ue("Your email or password is invalid !",{autoClose:3e3,position:ue.POSITION.TOP_RIGHT})},i=nt("login"),o=nt(null),a=nt({email:"",password:""}),l=d=>{i.value=d,d=="register"&&Gs.push({name:"SignUp"})},c=async(d,p)=>{await xA(Pt,d,p).then(_=>{console.log(_),Gs.push({name:"TaskPage"})}).catch(_=>{const T=_.code,E=_.message;s(),console.log(T,E)})},u=async(d,p)=>{await LA(Pt,d,p).then(_=>{e.addUser(),n(),setTimeout(()=>{i.value="login",Gs.push({name:"SignIn"})},4e3)}).catch(_=>{r(),_.code,_.message})},h=()=>{let d=a.value.email,p=a.value.password;i.value==="login"?c(d,p):u(d,p)};return BA(Pt,d=>{o.value=d}),(d,p)=>(He(),ct("div",null,[ie("form",{onSubmit:jp(h,["prevent"]),class:"checkout-form"},[ie("div",null,[r1,ie("div",s1,[ie("div",null,[i1,bo(ie("input",{type:"email",id:"email","onUpdate:modelValue":p[0]||(p[0]=_=>a.value.email=_),required:""},null,512),[[Xl,a.value.email]])]),ie("div",null,[o1,bo(ie("input",{type:"password",id:"password","onUpdate:modelValue":p[1]||(p[1]=_=>a.value.password=_),required:""},null,512),[[Xl,a.value.password]])])]),ie("div",null,[ie("button",a1,sr(i.value==="login"?"Login":"Register"),1),ie("div",null,[Up(sr(i.value==="login"?"Not a user?":"Already the user?")+" ",1),i.value==="login"?(He(),ct("a",{key:0,class:"log-link",onClick:p[2]||(p[2]=_=>l("register"))}," Register")):(He(),ct("a",{key:1,class:"log-link",onClick:p[3]||(p[3]=_=>l("login"))}," Login"))])])])],32)]))}},l1="/assets/Pinialogo-OAnYRDmB.svg",c1={class:"task"},u1={class:"icons"},jf={__name:"TaskDetails",props:{task:{type:Object,required:!0}},setup(t){const e=ol();return(n,r)=>(He(),ct("div",c1,[ie("h3",null,sr(t.task.title),1),ie("div",u1,[ie("i",{class:"material-icons",onClick:r[0]||(r[0]=s=>Nt(e).deleteTask(t.task))},"delete"),ie("i",{class:aa(["material-icons",{active:t.task.isFav}]),onClick:r[1]||(r[1]=s=>Nt(e).toggleFav(t.task))},"favorite",2)])]))}},h1=ie("button",{class:"taskpage-button"},"Add",-1),d1={__name:"TaskForm",setup(t){const e=ol(),n=nt(""),r=()=>{n.value&&e.addTask({title:n.value,isFav:!1}),n.value=""};return(s,i)=>(He(),ct("form",{onSubmit:jp(r,["prevent"]),class:"task-form"},[bo(ie("input",{type:"text",placeholder:"I need to ...","onUpdate:modelValue":i[0]||(i[0]=o=>n.value=o)},null,512),[[Xl,n.value]]),h1],32))}},f1=t=>(pv("data-v-df3aa1fb"),t=t(),gv(),t),p1={style:{"padding-top":"0.8rem","margin-left":"auto"}},g1=f1(()=>ie("option",{disabled:""},"Select a car",-1)),m1=["value"],_1={__name:"SelectOptions",props:{filter:{type:String,required:!0}},emits:["selectOption"],setup(t,{emit:e}){const n=e,s=nt(t.filter),i=[{id:"all",value:"All"},{id:"favs",value:"Favorites"}],o=()=>{n("selectOption",s)};return(a,l)=>(He(),ct("div",p1,[bo(ie("select",{"onUpdate:modelValue":l[0]||(l[0]=c=>s.value=c),onChange:o},[g1,(He(),ct(vt,null,Hl(i,c=>ie("option",{key:c,value:c.id},sr(c.value),9,m1)),64))],544),[[UE,s.value]])]))}},qf=au(_1,[["__scopeId","data-v-df3aa1fb"]]),y1=ie("header",null,[ie("img",{src:l1,alt:"pinia logo"}),ie("h1",null,"My Tasks")],-1),v1={class:"new-task-form"},E1={style:{"max-width":"700px","margin-left":"auto","margin-right":"auto"}},T1={key:0,class:"task-list"},I1={class:"aligneItems"},w1={key:1,class:"task-list"},A1={class:"aligneItems"},R1={__name:"TaskPage",setup(t){const e=ol(),{favs:n,totalCount:r,favCount:s}=eT(e);ga(()=>{e.getUser()});const i=nt("all"),o=c=>{i.value=c.value},a=()=>{$A(Pt).then(c=>{Gs.push({name:"SignIn"})}).catch(c=>{console.log(c)})},l=_e(()=>e.tasks);return(c,u)=>(He(),ct("main",null,[y1,ie("div",v1,[te(d1)]),ie("div",E1,[i.value==="all"?(He(),ct("div",T1,[ie("div",I1,[ie("p",null,"You have "+sr(Nt(r))+" task(s) left to do",1),te(qf,{filter:i.value,onSelectOption:o},null,8,["filter"])]),(He(!0),ct(vt,null,Hl(l.value,h=>(He(),ct("div",{key:h.id},[te(jf,{task:h},null,8,["task"])]))),128))])):qh("",!0),i.value==="favs"?(He(),ct("div",w1,[ie("div",A1,[ie("p",null,"You have "+sr(Nt(s))+" favorite(s) left to do",1),te(qf,{filter:i.value,onSelectOption:o},null,8,["filter"])]),(He(!0),ct(vt,null,Hl(Nt(n),h=>(He(),ct("div",{key:h.id},[te(jf,{task:h},null,8,["task"])]))),128))])):qh("",!0),ie("p",null,sr(c.newTasks),1),ie("nav",{class:"filter"},[ie("button",{onClick:a},"Sign out")])])]))}},S1={};function P1(t,e){return He(),ct("h1",null,"Oops, it looks like the page you're looking for doesn't exist.")}const C1=au(S1,[["render",P1]]),b1=[{path:"/",name:"SignIn",component:$f},{path:"/register",name:"SignUp",component:$f},{path:"/user",name:"TaskPage",component:R1},{path:"/:catchAll(.*)",component:C1}],Gs=iI({history:TT(),routes:b1});qp(rT).use(WE()).use(Gs).use(yy,{autoClose:3e3}).mount("#app");
