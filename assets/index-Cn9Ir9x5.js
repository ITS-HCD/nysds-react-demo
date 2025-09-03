function r4(r,i){for(var o=0;o<i.length;o++){const c=i[o];if(typeof c!="string"&&!Array.isArray(c)){for(const u in c)if(u!=="default"&&!(u in r)){const f=Object.getOwnPropertyDescriptor(c,u);f&&Object.defineProperty(r,u,f.get?f:{enumerable:!0,get:()=>c[u]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))c(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const v of f.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&c(v)}).observe(document,{childList:!0,subtree:!0});function o(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(u){if(u.ep)return;u.ep=!0;const f=o(u);fetch(u.href,f)}})();function c4(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ao={exports:{}},Ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0;function u4(){if(T0)return Ll;T0=1;var r=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(c,u,f){var v=null;if(f!==void 0&&(v=""+f),u.key!==void 0&&(v=""+u.key),"key"in u){f={};for(var A in u)A!=="key"&&(f[A]=u[A])}else f=u;return u=f.ref,{$$typeof:r,type:c,key:v,ref:u!==void 0?u:null,props:f}}return Ll.Fragment=i,Ll.jsx=o,Ll.jsxs=o,Ll}var O0;function d4(){return O0||(O0=1,Ao.exports=u4()),Ao.exports}var X=d4(),Do={exports:{}},J={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function h4(){if(U0)return J;U0=1;var r=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),v=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),O=Symbol.iterator;function G(g){return g===null||typeof g!="object"?null:(g=O&&g[O]||g["@@iterator"],typeof g=="function"?g:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,nt={};function ut(g,M,j){this.props=g,this.context=M,this.refs=nt,this.updater=j||R}ut.prototype.isReactComponent={},ut.prototype.setState=function(g,M){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,M,"setState")},ut.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function o1(){}o1.prototype=ut.prototype;function We(g,M,j){this.props=g,this.context=M,this.refs=nt,this.updater=j||R}var Zt=We.prototype=new o1;Zt.constructor=We,I(Zt,ut.prototype),Zt.isPureReactComponent=!0;var M1=Array.isArray,oe={H:null,A:null,T:null,S:null},at=Object.prototype.hasOwnProperty;function L1(g,M,j,q,U,ae){return j=ae.ref,{$$typeof:r,type:g,key:M,ref:j!==void 0?j:null,props:ae}}function H1(g,M){return L1(g.type,M,void 0,void 0,void 0,g.props)}function Z(g){return typeof g=="object"&&g!==null&&g.$$typeof===r}function re(g){var M={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(j){return M[j]})}var kt=/\/+/g;function r1(g,M){return typeof g=="object"&&g!==null&&g.key!=null?re(""+g.key):M.toString(36)}function Ft(){}function c1(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(Ft,Ft):(g.status="pending",g.then(function(M){g.status==="pending"&&(g.status="fulfilled",g.value=M)},function(M){g.status==="pending"&&(g.status="rejected",g.reason=M)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function lt(g,M,j,q,U){var ae=typeof g;(ae==="undefined"||ae==="boolean")&&(g=null);var F=!1;if(g===null)F=!0;else switch(ae){case"bigint":case"string":case"number":F=!0;break;case"object":switch(g.$$typeof){case r:case i:F=!0;break;case H:return F=g._init,lt(F(g._payload),M,j,q,U)}}if(F)return U=U(g),F=q===""?"."+r1(g,0):q,M1(U)?(j="",F!=null&&(j=F.replace(kt,"$&/")+"/"),lt(U,M,j,"",function(Me){return Me})):U!=null&&(Z(U)&&(U=H1(U,j+(U.key==null||g&&g.key===U.key?"":(""+U.key).replace(kt,"$&/")+"/")+F)),M.push(U)),1;F=0;var Ie=q===""?".":q+":";if(M1(g))for(var ue=0;ue<g.length;ue++)q=g[ue],ae=Ie+r1(q,ue),F+=lt(q,M,j,ae,U);else if(ue=G(g),typeof ue=="function")for(g=ue.call(g),ue=0;!(q=g.next()).done;)q=q.value,ae=Ie+r1(q,ue++),F+=lt(q,M,j,ae,U);else if(ae==="object"){if(typeof g.then=="function")return lt(c1(g),M,j,q,U);throw M=String(g),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return F}function T(g,M,j){if(g==null)return g;var q=[],U=0;return lt(g,q,"","",function(ae){return M.call(j,ae,U++)}),q}function K(g){if(g._status===-1){var M=g._result;M=M(),M.then(function(j){(g._status===0||g._status===-1)&&(g._status=1,g._result=j)},function(j){(g._status===0||g._status===-1)&&(g._status=2,g._result=j)}),g._status===-1&&(g._status=0,g._result=M)}if(g._status===1)return g._result.default;throw g._result}var Y=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function ye(){}return J.Children={map:T,forEach:function(g,M,j){T(g,function(){M.apply(this,arguments)},j)},count:function(g){var M=0;return T(g,function(){M++}),M},toArray:function(g){return T(g,function(M){return M})||[]},only:function(g){if(!Z(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},J.Component=ut,J.Fragment=o,J.Profiler=u,J.PureComponent=We,J.StrictMode=c,J.Suspense=k,J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=oe,J.act=function(){throw Error("act(...) is not supported in production builds of React.")},J.cache=function(g){return function(){return g.apply(null,arguments)}},J.cloneElement=function(g,M,j){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var q=I({},g.props),U=g.key,ae=void 0;if(M!=null)for(F in M.ref!==void 0&&(ae=void 0),M.key!==void 0&&(U=""+M.key),M)!at.call(M,F)||F==="key"||F==="__self"||F==="__source"||F==="ref"&&M.ref===void 0||(q[F]=M[F]);var F=arguments.length-2;if(F===1)q.children=j;else if(1<F){for(var Ie=Array(F),ue=0;ue<F;ue++)Ie[ue]=arguments[ue+2];q.children=Ie}return L1(g.type,U,void 0,void 0,ae,q)},J.createContext=function(g){return g={$$typeof:v,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:f,_context:g},g},J.createElement=function(g,M,j){var q,U={},ae=null;if(M!=null)for(q in M.key!==void 0&&(ae=""+M.key),M)at.call(M,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(U[q]=M[q]);var F=arguments.length-2;if(F===1)U.children=j;else if(1<F){for(var Ie=Array(F),ue=0;ue<F;ue++)Ie[ue]=arguments[ue+2];U.children=Ie}if(g&&g.defaultProps)for(q in F=g.defaultProps,F)U[q]===void 0&&(U[q]=F[q]);return L1(g,ae,void 0,void 0,null,U)},J.createRef=function(){return{current:null}},J.forwardRef=function(g){return{$$typeof:A,render:g}},J.isValidElement=Z,J.lazy=function(g){return{$$typeof:H,_payload:{_status:-1,_result:g},_init:K}},J.memo=function(g,M){return{$$typeof:x,type:g,compare:M===void 0?null:M}},J.startTransition=function(g){var M=oe.T,j={};oe.T=j;try{var q=g(),U=oe.S;U!==null&&U(j,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(ye,Y)}catch(ae){Y(ae)}finally{oe.T=M}},J.unstable_useCacheRefresh=function(){return oe.H.useCacheRefresh()},J.use=function(g){return oe.H.use(g)},J.useActionState=function(g,M,j){return oe.H.useActionState(g,M,j)},J.useCallback=function(g,M){return oe.H.useCallback(g,M)},J.useContext=function(g){return oe.H.useContext(g)},J.useDebugValue=function(){},J.useDeferredValue=function(g,M){return oe.H.useDeferredValue(g,M)},J.useEffect=function(g,M){return oe.H.useEffect(g,M)},J.useId=function(){return oe.H.useId()},J.useImperativeHandle=function(g,M,j){return oe.H.useImperativeHandle(g,M,j)},J.useInsertionEffect=function(g,M){return oe.H.useInsertionEffect(g,M)},J.useLayoutEffect=function(g,M){return oe.H.useLayoutEffect(g,M)},J.useMemo=function(g,M){return oe.H.useMemo(g,M)},J.useOptimistic=function(g,M){return oe.H.useOptimistic(g,M)},J.useReducer=function(g,M,j){return oe.H.useReducer(g,M,j)},J.useRef=function(g){return oe.H.useRef(g)},J.useState=function(g){return oe.H.useState(g)},J.useSyncExternalStore=function(g,M,j){return oe.H.useSyncExternalStore(g,M,j)},J.useTransition=function(){return oe.H.useTransition()},J.version="19.0.0",J}var $0;function Zo(){return $0||($0=1,Do.exports=h4()),Do.exports}var di=Zo();const f4=c4(di),be=r4({__proto__:null,default:f4},[di]);var Mo={exports:{}},Hl={},Lo={exports:{}},Ho={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function y4(){return V0||(V0=1,function(r){function i(T,K){var Y=T.length;T.push(K);e:for(;0<Y;){var ye=Y-1>>>1,g=T[ye];if(0<u(g,K))T[ye]=K,T[Y]=g,Y=ye;else break e}}function o(T){return T.length===0?null:T[0]}function c(T){if(T.length===0)return null;var K=T[0],Y=T.pop();if(Y!==K){T[0]=Y;e:for(var ye=0,g=T.length,M=g>>>1;ye<M;){var j=2*(ye+1)-1,q=T[j],U=j+1,ae=T[U];if(0>u(q,Y))U<g&&0>u(ae,q)?(T[ye]=ae,T[U]=Y,ye=U):(T[ye]=q,T[j]=Y,ye=j);else if(U<g&&0>u(ae,Y))T[ye]=ae,T[U]=Y,ye=U;else break e}}return K}function u(T,K){var Y=T.sortIndex-K.sortIndex;return Y!==0?Y:T.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var v=Date,A=v.now();r.unstable_now=function(){return v.now()-A}}var k=[],x=[],H=1,O=null,G=3,R=!1,I=!1,nt=!1,ut=typeof setTimeout=="function"?setTimeout:null,o1=typeof clearTimeout=="function"?clearTimeout:null,We=typeof setImmediate<"u"?setImmediate:null;function Zt(T){for(var K=o(x);K!==null;){if(K.callback===null)c(x);else if(K.startTime<=T)c(x),K.sortIndex=K.expirationTime,i(k,K);else break;K=o(x)}}function M1(T){if(nt=!1,Zt(T),!I)if(o(k)!==null)I=!0,c1();else{var K=o(x);K!==null&&lt(M1,K.startTime-T)}}var oe=!1,at=-1,L1=5,H1=-1;function Z(){return!(r.unstable_now()-H1<L1)}function re(){if(oe){var T=r.unstable_now();H1=T;var K=!0;try{e:{I=!1,nt&&(nt=!1,o1(at),at=-1),R=!0;var Y=G;try{t:{for(Zt(T),O=o(k);O!==null&&!(O.expirationTime>T&&Z());){var ye=O.callback;if(typeof ye=="function"){O.callback=null,G=O.priorityLevel;var g=ye(O.expirationTime<=T);if(T=r.unstable_now(),typeof g=="function"){O.callback=g,Zt(T),K=!0;break t}O===o(k)&&c(k),Zt(T)}else c(k);O=o(k)}if(O!==null)K=!0;else{var M=o(x);M!==null&&lt(M1,M.startTime-T),K=!1}}break e}finally{O=null,G=Y,R=!1}K=void 0}}finally{K?kt():oe=!1}}}var kt;if(typeof We=="function")kt=function(){We(re)};else if(typeof MessageChannel<"u"){var r1=new MessageChannel,Ft=r1.port2;r1.port1.onmessage=re,kt=function(){Ft.postMessage(null)}}else kt=function(){ut(re,0)};function c1(){oe||(oe=!0,kt())}function lt(T,K){at=ut(function(){T(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(T){T.callback=null},r.unstable_continueExecution=function(){I||R||(I=!0,c1())},r.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L1=0<T?Math.floor(1e3/T):5},r.unstable_getCurrentPriorityLevel=function(){return G},r.unstable_getFirstCallbackNode=function(){return o(k)},r.unstable_next=function(T){switch(G){case 1:case 2:case 3:var K=3;break;default:K=G}var Y=G;G=K;try{return T()}finally{G=Y}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(T,K){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var Y=G;G=T;try{return K()}finally{G=Y}},r.unstable_scheduleCallback=function(T,K,Y){var ye=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ye+Y:ye):Y=ye,T){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=Y+g,T={id:H++,callback:K,priorityLevel:T,startTime:Y,expirationTime:g,sortIndex:-1},Y>ye?(T.sortIndex=Y,i(x,T),o(k)===null&&T===o(x)&&(nt?(o1(at),at=-1):nt=!0,lt(M1,Y-ye))):(T.sortIndex=g,i(k,T),I||R||(I=!0,c1())),T},r.unstable_shouldYield=Z,r.unstable_wrapCallback=function(T){var K=G;return function(){var Y=G;G=K;try{return T.apply(this,arguments)}finally{G=Y}}}}(Ho)),Ho}var N0;function v4(){return N0||(N0=1,Lo.exports=y4()),Lo.exports}var To={exports:{}},Fe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0;function p4(){if(R0)return Fe;R0=1;var r=Zo();function i(k){var x="https://react.dev/errors/"+k;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var H=2;H<arguments.length;H++)x+="&args[]="+encodeURIComponent(arguments[H])}return"Minified React error #"+k+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var c={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(k,x,H){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:O==null?null:""+O,children:k,containerInfo:x,implementation:H}}var v=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(k,x){if(k==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Fe.createPortal=function(k,x){var H=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(i(299));return f(k,x,null,H)},Fe.flushSync=function(k){var x=v.T,H=c.p;try{if(v.T=null,c.p=2,k)return k()}finally{v.T=x,c.p=H,c.d.f()}},Fe.preconnect=function(k,x){typeof k=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,c.d.C(k,x))},Fe.prefetchDNS=function(k){typeof k=="string"&&c.d.D(k)},Fe.preinit=function(k,x){if(typeof k=="string"&&x&&typeof x.as=="string"){var H=x.as,O=A(H,x.crossOrigin),G=typeof x.integrity=="string"?x.integrity:void 0,R=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;H==="style"?c.d.S(k,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:O,integrity:G,fetchPriority:R}):H==="script"&&c.d.X(k,{crossOrigin:O,integrity:G,fetchPriority:R,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Fe.preinitModule=function(k,x){if(typeof k=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var H=A(x.as,x.crossOrigin);c.d.M(k,{crossOrigin:H,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&c.d.M(k)},Fe.preload=function(k,x){if(typeof k=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var H=x.as,O=A(H,x.crossOrigin);c.d.L(k,H,{crossOrigin:O,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Fe.preloadModule=function(k,x){if(typeof k=="string")if(x){var H=A(x.as,x.crossOrigin);c.d.m(k,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:H,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else c.d.m(k)},Fe.requestFormReset=function(k){c.d.r(k)},Fe.unstable_batchedUpdates=function(k,x){return k(x)},Fe.useFormState=function(k,x,H){return v.H.useFormState(k,x,H)},Fe.useFormStatus=function(){return v.H.useHostTransitionStatus()},Fe.version="19.0.0",Fe}var q0;function g4(){if(q0)return To.exports;q0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(i){console.error(i)}}return r(),To.exports=p4(),To.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function b4(){if(B0)return Hl;B0=1;var r=v4(),i=Zo(),o=g4();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var f=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),G=Symbol.for("react.consumer"),R=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),nt=Symbol.for("react.suspense"),ut=Symbol.for("react.suspense_list"),o1=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),Zt=Symbol.for("react.offscreen"),M1=Symbol.for("react.memo_cache_sentinel"),oe=Symbol.iterator;function at(e){return e===null||typeof e!="object"?null:(e=oe&&e[oe]||e["@@iterator"],typeof e=="function"?e:null)}var L1=Symbol.for("react.client.reference");function H1(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===L1?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case A:return"Portal";case H:return"Profiler";case x:return"StrictMode";case nt:return"Suspense";case ut:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case R:return(e.displayName||"Context")+".Provider";case G:return(e._context.displayName||"Context")+".Consumer";case I:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case o1:return t=e.displayName||null,t!==null?t:H1(e.type)||"Memo";case We:t=e._payload,e=e._init;try{return H1(e(t))}catch{}}return null}var Z=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=Object.assign,kt,r1;function Ft(e){if(kt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kt=t&&t[1]||"",r1=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kt+e+r1}var c1=!1;function lt(e,t){if(!e||c1)return"";c1=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(S){var w=S}Reflect.construct(e,[],D)}else{try{D.call()}catch(S){w=S}e.call(D.prototype)}}else{try{throw Error()}catch(S){w=S}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(S){if(S&&w&&typeof S.stack=="string")return[S.stack,w.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),d=s[0],h=s[1];if(d&&h){var y=d.split(`
`),_=h.split(`
`);for(l=a=0;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;for(;l<_.length&&!_[l].includes("DetermineComponentFrameRoot");)l++;if(a===y.length||l===_.length)for(a=y.length-1,l=_.length-1;1<=a&&0<=l&&y[a]!==_[l];)l--;for(;1<=a&&0<=l;a--,l--)if(y[a]!==_[l]){if(a!==1||l!==1)do if(a--,l--,0>l||y[a]!==_[l]){var E=`
`+y[a].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=a&&0<=l);break}}}finally{c1=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ft(n):""}function T(e){switch(e.tag){case 26:case 27:case 5:return Ft(e.type);case 16:return Ft("Lazy");case 13:return Ft("Suspense");case 19:return Ft("SuspenseList");case 0:case 15:return e=lt(e.type,!1),e;case 11:return e=lt(e.type.render,!1),e;case 1:return e=lt(e.type,!0),e;default:return""}}function K(e){try{var t="";do t+=T(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Y(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ye(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(Y(e)!==e)throw Error(c(188))}function M(e){var t=e.alternate;if(!t){if(t=Y(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var s=l.alternate;if(s===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===n)return g(l),e;if(s===a)return g(l),t;s=s.sibling}throw Error(c(188))}if(n.return!==a.return)n=l,a=s;else{for(var d=!1,h=l.child;h;){if(h===n){d=!0,n=l,a=s;break}if(h===a){d=!0,a=l,n=s;break}h=h.sibling}if(!d){for(h=s.child;h;){if(h===n){d=!0,n=s,a=l;break}if(h===a){d=!0,a=s,n=l;break}h=h.sibling}if(!d)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function j(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=j(e),t!==null)return t;e=e.sibling}return null}var q=Array.isArray,U=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},F=[],Ie=-1;function ue(e){return{current:e}}function Me(e){0>Ie||(e.current=F[Ie],F[Ie]=null,Ie--)}function ge(e,t){Ie++,F[Ie]=e.current,e.current=t}var Wt=ue(null),Oa=ue(null),T1=ue(null),Kl=ue(null);function Jl(e,t){switch(ge(T1,t),ge(Oa,e),ge(Wt,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?r0(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=r0(e),t=c0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Me(Wt),ge(Wt,t)}function qn(){Me(Wt),Me(Oa),Me(T1)}function bi(e){e.memoizedState!==null&&ge(Kl,e);var t=Wt.current,n=c0(t,e.type);t!==n&&(ge(Oa,e),ge(Wt,n))}function Fl(e){Oa.current===e&&(Me(Wt),Me(Oa)),Kl.current===e&&(Me(Kl),El._currentValue=ae)}var _i=Object.prototype.hasOwnProperty,Ci=r.unstable_scheduleCallback,mi=r.unstable_cancelCallback,q3=r.unstable_shouldYield,B3=r.unstable_requestPaint,It=r.unstable_now,Z3=r.unstable_getCurrentPriorityLevel,Wo=r.unstable_ImmediatePriority,Io=r.unstable_UserBlockingPriority,Wl=r.unstable_NormalPriority,j3=r.unstable_LowPriority,Po=r.unstable_IdlePriority,G3=r.log,Y3=r.unstable_setDisableYieldValue,Ua=null,dt=null;function X3(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Ua,e,void 0,(e.current.flags&128)===128)}catch{}}function O1(e){if(typeof G3=="function"&&Y3(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(Ua,e)}catch{}}var ht=Math.clz32?Math.clz32:J3,Q3=Math.log,K3=Math.LN2;function J3(e){return e>>>=0,e===0?32:31-(Q3(e)/K3|0)|0}var Il=128,Pl=4194304;function dn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function e2(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,l=e.suspendedLanes,s=e.pingedLanes,d=e.warmLanes;e=e.finishedLanes!==0;var h=n&134217727;return h!==0?(n=h&~l,n!==0?a=dn(n):(s&=h,s!==0?a=dn(s):e||(d=h&~d,d!==0&&(a=dn(d))))):(h=n&~l,h!==0?a=dn(h):s!==0?a=dn(s):e||(d=n&~d,d!==0&&(a=dn(d)))),a===0?0:t!==0&&t!==a&&(t&l)===0&&(l=a&-a,d=t&-t,l>=d||l===32&&(d&4194176)!==0)?t:a}function $a(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function F3(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function er(){var e=Il;return Il<<=1,(Il&4194176)===0&&(Il=128),e}function tr(){var e=Pl;return Pl<<=1,(Pl&62914560)===0&&(Pl=4194304),e}function xi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Va(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function W3(e,t,n,a,l,s){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,y=e.expirationTimes,_=e.hiddenUpdates;for(n=d&~n;0<n;){var E=31-ht(n),D=1<<E;h[E]=0,y[E]=-1;var w=_[E];if(w!==null)for(_[E]=null,E=0;E<w.length;E++){var S=w[E];S!==null&&(S.lane&=-536870913)}n&=~D}a!==0&&nr(e,a,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function nr(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-ht(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194218}function ar(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-ht(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function lr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ir(){var e=U.p;return e!==0?e:(e=window.event,e===void 0?32:z0(e.type))}function I3(e,t){var n=U.p;try{return U.p=e,t()}finally{U.p=n}}var U1=Math.random().toString(36).slice(2),Ke="__reactFiber$"+U1,it="__reactProps$"+U1,Bn="__reactContainer$"+U1,wi="__reactEvents$"+U1,P3="__reactListeners$"+U1,ec="__reactHandles$"+U1,sr="__reactResources$"+U1,Na="__reactMarker$"+U1;function ki(e){delete e[Ke],delete e[it],delete e[wi],delete e[P3],delete e[ec]}function hn(e){var t=e[Ke];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bn]||n[Ke]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=h0(e);e!==null;){if(n=e[Ke])return n;e=h0(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){if(e=e[Ke]||e[Bn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ra(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function jn(e){var t=e[sr];return t||(t=e[sr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Re(e){e[Na]=!0}var or=new Set,rr={};function fn(e,t){Gn(e,t),Gn(e+"Capture",t)}function Gn(e,t){for(rr[e]=t,e=0;e<t.length;e++)or.add(t[e])}var u1=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cr={},ur={};function nc(e){return _i.call(ur,e)?!0:_i.call(cr,e)?!1:tc.test(e)?ur[e]=!0:(cr[e]=!0,!1)}function t2(e,t,n){if(nc(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function n2(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function d1(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ac(e){var t=dr(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(d){a=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function a2(e){e._valueTracker||(e._valueTracker=ac(e))}function hr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=dr(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function l2(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var lc=/[\n"\\]/g;function Et(e){return e.replace(lc,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Si(e,t,n,a,l,s,d,h){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+St(t)):e.value!==""+St(t)&&(e.value=""+St(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Ei(e,d,St(t)):n!=null?Ei(e,d,St(n)):a!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+St(h):e.removeAttribute("name")}function fr(e,t,n,a,l,s,d,h){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;n=n!=null?""+St(n):"",t=t!=null?""+St(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=h?e.checked:!!a,e.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function Ei(e,t,n){t==="number"&&l2(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Yn(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+St(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function yr(e,t,n){if(t!=null&&(t=""+St(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+St(n):""}function vr(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(q(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=St(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function Xn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ic=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pr(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||ic.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function gr(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&pr(e,l,a)}else for(var s in t)t.hasOwnProperty(s)&&pr(e,s,t[s])}function zi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),oc=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function i2(e){return oc.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ai=null;function Di(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qn=null,Kn=null;function br(e){var t=Zn(e);if(t&&(e=t.stateNode)){var n=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(Si(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Et(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[it]||null;if(!l)throw Error(c(90));Si(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&hr(a)}break e;case"textarea":yr(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Yn(e,!!n.multiple,t,!1)}}}var Mi=!1;function _r(e,t,n){if(Mi)return e(t,n);Mi=!0;try{var a=e(t);return a}finally{if(Mi=!1,(Qn!==null||Kn!==null)&&(Z2(),Qn&&(t=Qn,e=Kn,Kn=Qn=null,br(t),e)))for(t=0;t<e.length;t++)br(e[t])}}function qa(e,t){var n=e.stateNode;if(n===null)return null;var a=n[it]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Li=!1;if(u1)try{var Ba={};Object.defineProperty(Ba,"passive",{get:function(){Li=!0}}),window.addEventListener("test",Ba,Ba),window.removeEventListener("test",Ba,Ba)}catch{Li=!1}var $1=null,Hi=null,s2=null;function Cr(){if(s2)return s2;var e,t=Hi,n=t.length,a,l="value"in $1?$1.value:$1.textContent,s=l.length;for(e=0;e<n&&t[e]===l[e];e++);var d=n-e;for(a=1;a<=d&&t[n-a]===l[s-a];a++);return s2=l.slice(e,1<a?1-a:void 0)}function o2(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function r2(){return!0}function mr(){return!1}function st(e){function t(n,a,l,s,d){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(s):s[h]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?r2:mr,this.isPropagationStopped=mr,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=r2)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=r2)},persist:function(){},isPersistent:r2}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},c2=st(yn),Za=re({},yn,{view:0,detail:0}),rc=st(Za),Ti,Oi,ja,u2=re({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$i,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ja&&(ja&&e.type==="mousemove"?(Ti=e.screenX-ja.screenX,Oi=e.screenY-ja.screenY):Oi=Ti=0,ja=e),Ti)},movementY:function(e){return"movementY"in e?e.movementY:Oi}}),xr=st(u2),cc=re({},u2,{dataTransfer:0}),uc=st(cc),dc=re({},Za,{relatedTarget:0}),Ui=st(dc),hc=re({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),fc=st(hc),yc=re({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vc=st(yc),pc=re({},yn,{data:0}),wr=st(pc),gc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_c={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_c[e])?!!t[e]:!1}function $i(){return Cc}var mc=re({},Za,{key:function(e){if(e.key){var t=gc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=o2(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$i,charCode:function(e){return e.type==="keypress"?o2(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?o2(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xc=st(mc),wc=re({},u2,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kr=st(wc),kc=re({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$i}),Sc=st(kc),Ec=re({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zc=st(Ec),Ac=re({},u2,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dc=st(Ac),Mc=re({},yn,{newState:0,oldState:0}),Lc=st(Mc),Hc=[9,13,27,32],Vi=u1&&"CompositionEvent"in window,Ga=null;u1&&"documentMode"in document&&(Ga=document.documentMode);var Tc=u1&&"TextEvent"in window&&!Ga,Sr=u1&&(!Vi||Ga&&8<Ga&&11>=Ga),Er=" ",zr=!1;function Ar(e,t){switch(e){case"keyup":return Hc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function Oc(e,t){switch(e){case"compositionend":return Dr(t);case"keypress":return t.which!==32?null:(zr=!0,Er);case"textInput":return e=t.data,e===Er&&zr?null:e;default:return null}}function Uc(e,t){if(Jn)return e==="compositionend"||!Vi&&Ar(e,t)?(e=Cr(),s2=Hi=$1=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sr&&t.locale!=="ko"?null:t.data;default:return null}}var $c={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$c[e.type]:t==="textarea"}function Lr(e,t,n,a){Qn?Kn?Kn.push(a):Kn=[a]:Qn=a,t=Q2(t,"onChange"),0<t.length&&(n=new c2("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ya=null,Xa=null;function Vc(e){a0(e,0)}function d2(e){var t=Ra(e);if(hr(t))return e}function Hr(e,t){if(e==="change")return t}var Tr=!1;if(u1){var Ni;if(u1){var Ri="oninput"in document;if(!Ri){var Or=document.createElement("div");Or.setAttribute("oninput","return;"),Ri=typeof Or.oninput=="function"}Ni=Ri}else Ni=!1;Tr=Ni&&(!document.documentMode||9<document.documentMode)}function Ur(){Ya&&(Ya.detachEvent("onpropertychange",$r),Xa=Ya=null)}function $r(e){if(e.propertyName==="value"&&d2(Xa)){var t=[];Lr(t,Xa,e,Di(e)),_r(Vc,t)}}function Nc(e,t,n){e==="focusin"?(Ur(),Ya=t,Xa=n,Ya.attachEvent("onpropertychange",$r)):e==="focusout"&&Ur()}function Rc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return d2(Xa)}function qc(e,t){if(e==="click")return d2(t)}function Bc(e,t){if(e==="input"||e==="change")return d2(t)}function Zc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Zc;function Qa(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!_i.call(t,l)||!ft(e[l],t[l]))return!1}return!0}function Vr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Vr(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vr(n)}}function Rr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rr(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=l2(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=l2(e.document)}return t}function qi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jc(e,t){var n=qr(t);t=e.focusedElem;var a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Rr(t.ownerDocument.documentElement,t)){if(a!==null&&qi(t)){if(e=a.start,n=a.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var l=t.textContent.length,s=Math.min(a.start,l);a=a.end===void 0?s:Math.min(a.end,l),!n.extend&&s>a&&(l=a,a=s,s=l),l=Nr(t,s);var d=Nr(t,a);l&&d&&(n.rangeCount!==1||n.anchorNode!==l.node||n.anchorOffset!==l.offset||n.focusNode!==d.node||n.focusOffset!==d.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),n.removeAllRanges(),s>a?(n.addRange(e),n.extend(d.node,d.offset)):(e.setEnd(d.node,d.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Gc=u1&&"documentMode"in document&&11>=document.documentMode,Fn=null,Bi=null,Ka=null,Zi=!1;function Br(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zi||Fn==null||Fn!==l2(a)||(a=Fn,"selectionStart"in a&&qi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ka&&Qa(Ka,a)||(Ka=a,a=Q2(Bi,"onSelect"),0<a.length&&(t=new c2("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Fn)))}function vn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wn={animationend:vn("Animation","AnimationEnd"),animationiteration:vn("Animation","AnimationIteration"),animationstart:vn("Animation","AnimationStart"),transitionrun:vn("Transition","TransitionRun"),transitionstart:vn("Transition","TransitionStart"),transitioncancel:vn("Transition","TransitionCancel"),transitionend:vn("Transition","TransitionEnd")},ji={},Zr={};u1&&(Zr=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function pn(e){if(ji[e])return ji[e];if(!Wn[e])return e;var t=Wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zr)return ji[e]=t[n];return e}var jr=pn("animationend"),Gr=pn("animationiteration"),Yr=pn("animationstart"),Yc=pn("transitionrun"),Xc=pn("transitionstart"),Qc=pn("transitioncancel"),Xr=pn("transitionend"),Qr=new Map,Kr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function jt(e,t){Qr.set(e,t),fn(t,[e])}var zt=[],In=0,Gi=0;function h2(){for(var e=In,t=Gi=In=0;t<e;){var n=zt[t];zt[t++]=null;var a=zt[t];zt[t++]=null;var l=zt[t];zt[t++]=null;var s=zt[t];if(zt[t++]=null,a!==null&&l!==null){var d=a.pending;d===null?l.next=l:(l.next=d.next,d.next=l),a.pending=l}s!==0&&Jr(n,l,s)}}function f2(e,t,n,a){zt[In++]=e,zt[In++]=t,zt[In++]=n,zt[In++]=a,Gi|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Yi(e,t,n,a){return f2(e,t,n,a),y2(e)}function V1(e,t){return f2(e,null,null,t),y2(e)}function Jr(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,s=e.return;s!==null;)s.childLanes|=n,a=s.alternate,a!==null&&(a.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;l&&t!==null&&e.tag===3&&(s=e.stateNode,l=31-ht(n),s=s.hiddenUpdates,e=s[l],e===null?s[l]=[t]:e.push(t),t.lane=n|536870912)}function y2(e){if(50<_l)throw _l=0,Ws=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Pn={},Fr=new WeakMap;function At(e,t){if(typeof e=="object"&&e!==null){var n=Fr.get(e);return n!==void 0?n:(t={value:e,source:t,stack:K(t)},Fr.set(e,t),t)}return{value:e,source:t,stack:K(t)}}var ea=[],ta=0,v2=null,p2=0,Dt=[],Mt=0,gn=null,h1=1,f1="";function bn(e,t){ea[ta++]=p2,ea[ta++]=v2,v2=e,p2=t}function Wr(e,t,n){Dt[Mt++]=h1,Dt[Mt++]=f1,Dt[Mt++]=gn,gn=e;var a=h1;e=f1;var l=32-ht(a)-1;a&=~(1<<l),n+=1;var s=32-ht(t)+l;if(30<s){var d=l-l%5;s=(a&(1<<d)-1).toString(32),a>>=d,l-=d,h1=1<<32-ht(t)+l|n<<l|a,f1=s+e}else h1=1<<s|n<<l|a,f1=e}function Xi(e){e.return!==null&&(bn(e,1),Wr(e,1,0))}function Qi(e){for(;e===v2;)v2=ea[--ta],ea[ta]=null,p2=ea[--ta],ea[ta]=null;for(;e===gn;)gn=Dt[--Mt],Dt[Mt]=null,f1=Dt[--Mt],Dt[Mt]=null,h1=Dt[--Mt],Dt[Mt]=null}var Pe=null,Ge=null,ie=!1,Gt=null,Pt=!1,Ki=Error(c(519));function _n(e){var t=Error(c(418,""));throw Wa(At(t,e)),Ki}function Ir(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ke]=e,t[it]=a,n){case"dialog":te("cancel",t),te("close",t);break;case"iframe":case"object":case"embed":te("load",t);break;case"video":case"audio":for(n=0;n<ml.length;n++)te(ml[n],t);break;case"source":te("error",t);break;case"img":case"image":case"link":te("error",t),te("load",t);break;case"details":te("toggle",t);break;case"input":te("invalid",t),fr(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),a2(t);break;case"select":te("invalid",t);break;case"textarea":te("invalid",t),vr(t,a.value,a.defaultValue,a.children),a2(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||o0(t.textContent,n)?(a.popover!=null&&(te("beforetoggle",t),te("toggle",t)),a.onScroll!=null&&te("scroll",t),a.onScrollEnd!=null&&te("scrollend",t),a.onClick!=null&&(t.onclick=K2),t=!0):t=!1,t||_n(e)}function Pr(e){for(Pe=e.return;Pe;)switch(Pe.tag){case 3:case 27:Pt=!0;return;case 5:case 13:Pt=!1;return;default:Pe=Pe.return}}function Ja(e){if(e!==Pe)return!1;if(!ie)return Pr(e),ie=!0,!1;var t=!1,n;if((n=e.tag!==3&&e.tag!==27)&&((n=e.tag===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||vo(e.type,e.memoizedProps)),n=!n),n&&(t=!0),t&&Ge&&_n(e),Pr(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Ge=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Ge=null}}else Ge=Pe?Xt(e.stateNode.nextSibling):null;return!0}function Fa(){Ge=Pe=null,ie=!1}function Wa(e){Gt===null?Gt=[e]:Gt.push(e)}var Ia=Error(c(460)),e5=Error(c(474)),Ji={then:function(){}};function t5(e){return e=e.status,e==="fulfilled"||e==="rejected"}function g2(){}function n5(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(g2,g2),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Ia?Error(c(483)):e;default:if(typeof t.status=="string")t.then(g2,g2);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Ia?Error(c(483)):e}throw Pa=t,Ia}}var Pa=null;function a5(){if(Pa===null)throw Error(c(459));var e=Pa;return Pa=null,e}var na=null,el=0;function b2(e){var t=el;return el+=1,na===null&&(na=[]),n5(na,e,t)}function tl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function _2(e,t){throw t.$$typeof===f?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function l5(e){var t=e._init;return t(e._payload)}function i5(e){function t(C,b){if(e){var m=C.deletions;m===null?(C.deletions=[b],C.flags|=16):m.push(b)}}function n(C,b){if(!e)return null;for(;b!==null;)t(C,b),b=b.sibling;return null}function a(C){for(var b=new Map;C!==null;)C.key!==null?b.set(C.key,C):b.set(C.index,C),C=C.sibling;return b}function l(C,b){return C=J1(C,b),C.index=0,C.sibling=null,C}function s(C,b,m){return C.index=m,e?(m=C.alternate,m!==null?(m=m.index,m<b?(C.flags|=33554434,b):m):(C.flags|=33554434,b)):(C.flags|=1048576,b)}function d(C){return e&&C.alternate===null&&(C.flags|=33554434),C}function h(C,b,m,z){return b===null||b.tag!==6?(b=js(m,C.mode,z),b.return=C,b):(b=l(b,m),b.return=C,b)}function y(C,b,m,z){var $=m.type;return $===k?E(C,b,m.props.children,z,m.key):b!==null&&(b.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===We&&l5($)===b.type)?(b=l(b,m.props),tl(b,m),b.return=C,b):(b=V2(m.type,m.key,m.props,null,C.mode,z),tl(b,m),b.return=C,b)}function _(C,b,m,z){return b===null||b.tag!==4||b.stateNode.containerInfo!==m.containerInfo||b.stateNode.implementation!==m.implementation?(b=Gs(m,C.mode,z),b.return=C,b):(b=l(b,m.children||[]),b.return=C,b)}function E(C,b,m,z,$){return b===null||b.tag!==7?(b=Dn(m,C.mode,z,$),b.return=C,b):(b=l(b,m),b.return=C,b)}function D(C,b,m){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=js(""+b,C.mode,m),b.return=C,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case v:return m=V2(b.type,b.key,b.props,null,C.mode,m),tl(m,b),m.return=C,m;case A:return b=Gs(b,C.mode,m),b.return=C,b;case We:var z=b._init;return b=z(b._payload),D(C,b,m)}if(q(b)||at(b))return b=Dn(b,C.mode,m,null),b.return=C,b;if(typeof b.then=="function")return D(C,b2(b),m);if(b.$$typeof===R)return D(C,O2(C,b),m);_2(C,b)}return null}function w(C,b,m,z){var $=b!==null?b.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return $!==null?null:h(C,b,""+m,z);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case v:return m.key===$?y(C,b,m,z):null;case A:return m.key===$?_(C,b,m,z):null;case We:return $=m._init,m=$(m._payload),w(C,b,m,z)}if(q(m)||at(m))return $!==null?null:E(C,b,m,z,null);if(typeof m.then=="function")return w(C,b,b2(m),z);if(m.$$typeof===R)return w(C,b,O2(C,m),z);_2(C,m)}return null}function S(C,b,m,z,$){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return C=C.get(m)||null,h(b,C,""+z,$);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case v:return C=C.get(z.key===null?m:z.key)||null,y(b,C,z,$);case A:return C=C.get(z.key===null?m:z.key)||null,_(b,C,z,$);case We:var P=z._init;return z=P(z._payload),S(C,b,m,z,$)}if(q(z)||at(z))return C=C.get(m)||null,E(b,C,z,$,null);if(typeof z.then=="function")return S(C,b,m,b2(z),$);if(z.$$typeof===R)return S(C,b,m,O2(b,z),$);_2(b,z)}return null}function V(C,b,m,z){for(var $=null,P=null,N=b,B=b=0,Ze=null;N!==null&&B<m.length;B++){N.index>B?(Ze=N,N=null):Ze=N.sibling;var se=w(C,N,m[B],z);if(se===null){N===null&&(N=Ze);break}e&&N&&se.alternate===null&&t(C,N),b=s(se,b,B),P===null?$=se:P.sibling=se,P=se,N=Ze}if(B===m.length)return n(C,N),ie&&bn(C,B),$;if(N===null){for(;B<m.length;B++)N=D(C,m[B],z),N!==null&&(b=s(N,b,B),P===null?$=N:P.sibling=N,P=N);return ie&&bn(C,B),$}for(N=a(N);B<m.length;B++)Ze=S(N,C,B,m[B],z),Ze!==null&&(e&&Ze.alternate!==null&&N.delete(Ze.key===null?B:Ze.key),b=s(Ze,b,B),P===null?$=Ze:P.sibling=Ze,P=Ze);return e&&N.forEach(function(nn){return t(C,nn)}),ie&&bn(C,B),$}function Q(C,b,m,z){if(m==null)throw Error(c(151));for(var $=null,P=null,N=b,B=b=0,Ze=null,se=m.next();N!==null&&!se.done;B++,se=m.next()){N.index>B?(Ze=N,N=null):Ze=N.sibling;var nn=w(C,N,se.value,z);if(nn===null){N===null&&(N=Ze);break}e&&N&&nn.alternate===null&&t(C,N),b=s(nn,b,B),P===null?$=nn:P.sibling=nn,P=nn,N=Ze}if(se.done)return n(C,N),ie&&bn(C,B),$;if(N===null){for(;!se.done;B++,se=m.next())se=D(C,se.value,z),se!==null&&(b=s(se,b,B),P===null?$=se:P.sibling=se,P=se);return ie&&bn(C,B),$}for(N=a(N);!se.done;B++,se=m.next())se=S(N,C,B,se.value,z),se!==null&&(e&&se.alternate!==null&&N.delete(se.key===null?B:se.key),b=s(se,b,B),P===null?$=se:P.sibling=se,P=se);return e&&N.forEach(function(o4){return t(C,o4)}),ie&&bn(C,B),$}function Se(C,b,m,z){if(typeof m=="object"&&m!==null&&m.type===k&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case v:e:{for(var $=m.key;b!==null;){if(b.key===$){if($=m.type,$===k){if(b.tag===7){n(C,b.sibling),z=l(b,m.props.children),z.return=C,C=z;break e}}else if(b.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===We&&l5($)===b.type){n(C,b.sibling),z=l(b,m.props),tl(z,m),z.return=C,C=z;break e}n(C,b);break}else t(C,b);b=b.sibling}m.type===k?(z=Dn(m.props.children,C.mode,z,m.key),z.return=C,C=z):(z=V2(m.type,m.key,m.props,null,C.mode,z),tl(z,m),z.return=C,C=z)}return d(C);case A:e:{for($=m.key;b!==null;){if(b.key===$)if(b.tag===4&&b.stateNode.containerInfo===m.containerInfo&&b.stateNode.implementation===m.implementation){n(C,b.sibling),z=l(b,m.children||[]),z.return=C,C=z;break e}else{n(C,b);break}else t(C,b);b=b.sibling}z=Gs(m,C.mode,z),z.return=C,C=z}return d(C);case We:return $=m._init,m=$(m._payload),Se(C,b,m,z)}if(q(m))return V(C,b,m,z);if(at(m)){if($=at(m),typeof $!="function")throw Error(c(150));return m=$.call(m),Q(C,b,m,z)}if(typeof m.then=="function")return Se(C,b,b2(m),z);if(m.$$typeof===R)return Se(C,b,O2(C,m),z);_2(C,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,b!==null&&b.tag===6?(n(C,b.sibling),z=l(b,m),z.return=C,C=z):(n(C,b),z=js(m,C.mode,z),z.return=C,C=z),d(C)):n(C,b)}return function(C,b,m,z){try{el=0;var $=Se(C,b,m,z);return na=null,$}catch(N){if(N===Ia)throw N;var P=Ot(29,N,null,C.mode);return P.lanes=z,P.return=C,P}finally{}}}var Cn=i5(!0),s5=i5(!1),aa=ue(null),C2=ue(0);function o5(e,t){e=k1,ge(C2,e),ge(aa,t),k1=e|t.baseLanes}function Fi(){ge(C2,k1),ge(aa,aa.current)}function Wi(){k1=C2.current,Me(aa),Me(C2)}var Lt=ue(null),e1=null;function N1(e){var t=e.alternate;ge(Ue,Ue.current&1),ge(Lt,e),e1===null&&(t===null||aa.current!==null||t.memoizedState!==null)&&(e1=e)}function r5(e){if(e.tag===22){if(ge(Ue,Ue.current),ge(Lt,e),e1===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(e1=e)}}else R1()}function R1(){ge(Ue,Ue.current),ge(Lt,Lt.current)}function y1(e){Me(Lt),e1===e&&(e1=null),Me(Ue)}var Ue=ue(0);function m2(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kc=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Jc=r.unstable_scheduleCallback,Fc=r.unstable_NormalPriority,$e={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ii(){return{controller:new Kc,data:new Map,refCount:0}}function nl(e){e.refCount--,e.refCount===0&&Jc(Fc,function(){e.controller.abort()})}var al=null,Pi=0,la=0,ia=null;function Wc(e,t){if(al===null){var n=al=[];Pi=0,la=io(),ia={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Pi++,t.then(c5,c5),t}function c5(){if(--Pi===0&&al!==null){ia!==null&&(ia.status="fulfilled");var e=al;al=null,la=0,ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ic(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var u5=Z.S;Z.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Wc(e,t),u5!==null&&u5(e,t)};var mn=ue(null);function es(){var e=mn.current;return e!==null?e:ve.pooledCache}function x2(e,t){t===null?ge(mn,mn.current):ge(mn,t.pool)}function d5(){var e=es();return e===null?null:{parent:$e._currentValue,pool:e}}var q1=0,W=null,de=null,Le=null,w2=!1,sa=!1,xn=!1,k2=0,ll=0,oa=null,Pc=0;function ze(){throw Error(c(321))}function ts(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function ns(e,t,n,a,l,s){return q1=s,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Z.H=e===null||e.memoizedState===null?wn:B1,xn=!1,s=n(a,l),xn=!1,sa&&(s=f5(t,n,a,l)),h5(e),s}function h5(e){Z.H=t1;var t=de!==null&&de.next!==null;if(q1=0,Le=de=W=null,w2=!1,ll=0,oa=null,t)throw Error(c(300));e===null||qe||(e=e.dependencies,e!==null&&T2(e)&&(qe=!0))}function f5(e,t,n,a){W=e;var l=0;do{if(sa&&(oa=null),ll=0,sa=!1,25<=l)throw Error(c(301));if(l+=1,Le=de=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Z.H=kn,s=t(n,a)}while(sa);return s}function e8(){var e=Z.H,t=e.useState()[0];return t=typeof t.then=="function"?il(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(W.flags|=1024),t}function as(){var e=k2!==0;return k2=0,e}function ls(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function is(e){if(w2){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}w2=!1}q1=0,Le=de=W=null,sa=!1,ll=k2=0,oa=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?W.memoizedState=Le=e:Le=Le.next=e,Le}function He(){if(de===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=Le===null?W.memoizedState:Le.next;if(t!==null)Le=t,de=e;else{if(e===null)throw W.alternate===null?Error(c(467)):Error(c(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},Le===null?W.memoizedState=Le=e:Le=Le.next=e}return Le}var S2;S2=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function il(e){var t=ll;return ll+=1,oa===null&&(oa=[]),e=n5(oa,e,t),t=W,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,Z.H=t===null||t.memoizedState===null?wn:B1),e}function E2(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return il(e);if(e.$$typeof===R)return Je(e)}throw Error(c(438,String(e)))}function ss(e){var t=null,n=W.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=W.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=S2(),W.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=M1;return t.index++,n}function v1(e,t){return typeof t=="function"?t(e):t}function z2(e){var t=He();return os(t,de,e)}function os(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var l=e.baseQueue,s=a.pending;if(s!==null){if(l!==null){var d=l.next;l.next=s.next,s.next=d}t.baseQueue=l=s,a.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{t=l.next;var h=d=null,y=null,_=t,E=!1;do{var D=_.lane&-536870913;if(D!==_.lane?(le&D)===D:(q1&D)===D){var w=_.revertLane;if(w===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),D===la&&(E=!0);else if((q1&w)===w){_=_.next,w===la&&(E=!0);continue}else D={lane:0,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},y===null?(h=y=D,d=s):y=y.next=D,W.lanes|=w,F1|=w;D=_.action,xn&&n(s,D),s=_.hasEagerState?_.eagerState:n(s,D)}else w={lane:D,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},y===null?(h=y=w,d=s):y=y.next=w,W.lanes|=D,F1|=D;_=_.next}while(_!==null&&_!==t);if(y===null?d=s:y.next=h,!ft(s,e.memoizedState)&&(qe=!0,E&&(n=ia,n!==null)))throw n;e.memoizedState=s,e.baseState=d,e.baseQueue=y,a.lastRenderedState=s}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function rs(e){var t=He(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,s=t.memoizedState;if(l!==null){n.pending=null;var d=l=l.next;do s=e(s,d.action),d=d.next;while(d!==l);ft(s,t.memoizedState)||(qe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function y5(e,t,n){var a=W,l=He(),s=ie;if(s){if(n===void 0)throw Error(c(407));n=n()}else n=t();var d=!ft((de||l).memoizedState,n);if(d&&(l.memoizedState=n,qe=!0),l=l.queue,ds(g5.bind(null,a,l,e),[e]),l.getSnapshot!==t||d||Le!==null&&Le.memoizedState.tag&1){if(a.flags|=2048,ra(9,p5.bind(null,a,l,n,t),{destroy:void 0},null),ve===null)throw Error(c(349));s||(q1&60)!==0||v5(a,t,n)}return n}function v5(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t=S2(),W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function p5(e,t,n,a){t.value=n,t.getSnapshot=a,b5(t)&&_5(e)}function g5(e,t,n){return n(function(){b5(t)&&_5(e)})}function b5(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function _5(e){var t=V1(e,2);t!==null&&et(t,e,2)}function cs(e){var t=ot();if(typeof e=="function"){var n=e;if(e=n(),xn){O1(!0);try{n()}finally{O1(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:v1,lastRenderedState:e},t}function C5(e,t,n,a){return e.baseState=n,os(e,de,typeof a=="function"?a:v1)}function t8(e,t,n,a,l){if(M2(e))throw Error(c(485));if(e=t.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};Z.T!==null?n(!0):s.isTransition=!1,a(s),n=t.pending,n===null?(s.next=t.pending=s,m5(t,s)):(s.next=n.next,t.pending=n.next=s)}}function m5(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var s=Z.T,d={};Z.T=d;try{var h=n(l,a),y=Z.S;y!==null&&y(d,h),x5(e,t,h)}catch(_){us(e,t,_)}finally{Z.T=s}}else try{s=n(l,a),x5(e,t,s)}catch(_){us(e,t,_)}}function x5(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){w5(e,t,a)},function(a){return us(e,t,a)}):w5(e,t,n)}function w5(e,t,n){t.status="fulfilled",t.value=n,k5(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,m5(e,n)))}function us(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,k5(t),t=t.next;while(t!==a)}e.action=null}function k5(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function S5(e,t){return t}function E5(e,t){if(ie){var n=ve.formState;if(n!==null){e:{var a=W;if(ie){if(Ge){t:{for(var l=Ge,s=Pt;l.nodeType!==8;){if(!s){l=null;break t}if(l=Xt(l.nextSibling),l===null){l=null;break t}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){Ge=Xt(l.nextSibling),a=l.data==="F!";break e}}_n(a)}a=!1}a&&(t=n[0])}}return n=ot(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:S5,lastRenderedState:t},n.queue=a,n=G5.bind(null,W,a),a.dispatch=n,a=cs(!1),s=ps.bind(null,W,!1,a.queue),a=ot(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=t8.bind(null,W,l,s,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function z5(e){var t=He();return A5(t,de,e)}function A5(e,t,n){t=os(e,t,S5)[0],e=z2(v1)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?il(t):t;var a=He(),l=a.queue,s=l.dispatch;return n!==a.memoizedState&&(W.flags|=2048,ra(9,n8.bind(null,l,n),{destroy:void 0},null)),[t,s,e]}function n8(e,t){e.action=t}function D5(e){var t=He(),n=de;if(n!==null)return A5(t,n,e);He(),t=t.memoizedState,n=He();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ra(e,t,n,a){return e={tag:e,create:t,inst:n,deps:a,next:null},t=W.updateQueue,t===null&&(t=S2(),W.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function M5(){return He().memoizedState}function A2(e,t,n,a){var l=ot();W.flags|=e,l.memoizedState=ra(1|t,n,{destroy:void 0},a===void 0?null:a)}function D2(e,t,n,a){var l=He();a=a===void 0?null:a;var s=l.memoizedState.inst;de!==null&&a!==null&&ts(a,de.memoizedState.deps)?l.memoizedState=ra(t,n,s,a):(W.flags|=e,l.memoizedState=ra(1|t,n,s,a))}function L5(e,t){A2(8390656,8,e,t)}function ds(e,t){D2(2048,8,e,t)}function H5(e,t){return D2(4,2,e,t)}function T5(e,t){return D2(4,4,e,t)}function O5(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function U5(e,t,n){n=n!=null?n.concat([e]):null,D2(4,4,O5.bind(null,t,e),n)}function hs(){}function $5(e,t){var n=He();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&ts(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function V5(e,t){var n=He();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&ts(t,a[1]))return a[0];if(a=e(),xn){O1(!0);try{e()}finally{O1(!1)}}return n.memoizedState=[a,t],a}function fs(e,t,n){return n===void 0||(q1&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=R7(),W.lanes|=e,F1|=e,n)}function N5(e,t,n,a){return ft(n,t)?n:aa.current!==null?(e=fs(e,n,a),ft(e,t)||(qe=!0),e):(q1&42)===0?(qe=!0,e.memoizedState=n):(e=R7(),W.lanes|=e,F1|=e,t)}function R5(e,t,n,a,l){var s=U.p;U.p=s!==0&&8>s?s:8;var d=Z.T,h={};Z.T=h,ps(e,!1,t,n);try{var y=l(),_=Z.S;if(_!==null&&_(h,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var E=Ic(y,a);sl(e,t,E,gt(e))}else sl(e,t,a,gt(e))}catch(D){sl(e,t,{then:function(){},status:"rejected",reason:D},gt())}finally{U.p=s,Z.T=d}}function a8(){}function ys(e,t,n,a){if(e.tag!==5)throw Error(c(476));var l=q5(e).queue;R5(e,l,t,ae,n===null?a8:function(){return B5(e),n(a)})}function q5(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:v1,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:v1,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function B5(e){var t=q5(e).next.queue;sl(e,t,{},gt())}function vs(){return Je(El)}function Z5(){return He().memoizedState}function j5(){return He().memoizedState}function l8(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=gt();e=G1(n);var a=Y1(t,e,n);a!==null&&(et(a,t,n),cl(a,t,n)),t={cache:Ii()},e.payload=t;return}t=t.return}}function i8(e,t,n){var a=gt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},M2(e)?Y5(t,n):(n=Yi(e,t,n,a),n!==null&&(et(n,e,a),X5(n,t,a)))}function G5(e,t,n){var a=gt();sl(e,t,n,a)}function sl(e,t,n,a){var l={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(M2(e))Y5(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,h=s(d,n);if(l.hasEagerState=!0,l.eagerState=h,ft(h,d))return f2(e,t,l,0),ve===null&&h2(),!1}catch{}finally{}if(n=Yi(e,t,l,a),n!==null)return et(n,e,a),X5(n,t,a),!0}return!1}function ps(e,t,n,a){if(a={lane:2,revertLane:io(),action:a,hasEagerState:!1,eagerState:null,next:null},M2(e)){if(t)throw Error(c(479))}else t=Yi(e,n,a,2),t!==null&&et(t,e,2)}function M2(e){var t=e.alternate;return e===W||t!==null&&t===W}function Y5(e,t){sa=w2=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function X5(e,t,n){if((n&4194176)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ar(e,n)}}var t1={readContext:Je,use:E2,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze};t1.useCacheRefresh=ze,t1.useMemoCache=ze,t1.useHostTransitionStatus=ze,t1.useFormState=ze,t1.useActionState=ze,t1.useOptimistic=ze;var wn={readContext:Je,use:E2,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:L5,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,A2(4194308,4,O5.bind(null,t,e),n)},useLayoutEffect:function(e,t){return A2(4194308,4,e,t)},useInsertionEffect:function(e,t){A2(4,2,e,t)},useMemo:function(e,t){var n=ot();t=t===void 0?null:t;var a=e();if(xn){O1(!0);try{e()}finally{O1(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=ot();if(n!==void 0){var l=n(t);if(xn){O1(!0);try{n(t)}finally{O1(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=i8.bind(null,W,e),[a.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=cs(e);var t=e.queue,n=G5.bind(null,W,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hs,useDeferredValue:function(e,t){var n=ot();return fs(n,e,t)},useTransition:function(){var e=cs(!1);return e=R5.bind(null,W,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=W,l=ot();if(ie){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),ve===null)throw Error(c(349));(le&60)!==0||v5(a,t,n)}l.memoizedState=n;var s={value:n,getSnapshot:t};return l.queue=s,L5(g5.bind(null,a,s,e),[e]),a.flags|=2048,ra(9,p5.bind(null,a,s,n,t),{destroy:void 0},null),n},useId:function(){var e=ot(),t=ve.identifierPrefix;if(ie){var n=f1,a=h1;n=(a&~(1<<32-ht(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=k2++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Pc++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return ot().memoizedState=l8.bind(null,W)}};wn.useMemoCache=ss,wn.useHostTransitionStatus=vs,wn.useFormState=E5,wn.useActionState=E5,wn.useOptimistic=function(e){var t=ot();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ps.bind(null,W,!0,n),n.dispatch=t,[e,t]};var B1={readContext:Je,use:E2,useCallback:$5,useContext:Je,useEffect:ds,useImperativeHandle:U5,useInsertionEffect:H5,useLayoutEffect:T5,useMemo:V5,useReducer:z2,useRef:M5,useState:function(){return z2(v1)},useDebugValue:hs,useDeferredValue:function(e,t){var n=He();return N5(n,de.memoizedState,e,t)},useTransition:function(){var e=z2(v1)[0],t=He().memoizedState;return[typeof e=="boolean"?e:il(e),t]},useSyncExternalStore:y5,useId:Z5};B1.useCacheRefresh=j5,B1.useMemoCache=ss,B1.useHostTransitionStatus=vs,B1.useFormState=z5,B1.useActionState=z5,B1.useOptimistic=function(e,t){var n=He();return C5(n,de,e,t)};var kn={readContext:Je,use:E2,useCallback:$5,useContext:Je,useEffect:ds,useImperativeHandle:U5,useInsertionEffect:H5,useLayoutEffect:T5,useMemo:V5,useReducer:rs,useRef:M5,useState:function(){return rs(v1)},useDebugValue:hs,useDeferredValue:function(e,t){var n=He();return de===null?fs(n,e,t):N5(n,de.memoizedState,e,t)},useTransition:function(){var e=rs(v1)[0],t=He().memoizedState;return[typeof e=="boolean"?e:il(e),t]},useSyncExternalStore:y5,useId:Z5};kn.useCacheRefresh=j5,kn.useMemoCache=ss,kn.useHostTransitionStatus=vs,kn.useFormState=D5,kn.useActionState=D5,kn.useOptimistic=function(e,t){var n=He();return de!==null?C5(n,de,e,t):(n.baseState=e,[e,n.queue.dispatch])};function gs(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bs={isMounted:function(e){return(e=e._reactInternals)?Y(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=gt(),l=G1(a);l.payload=t,n!=null&&(l.callback=n),t=Y1(e,l,a),t!==null&&(et(t,e,a),cl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=gt(),l=G1(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Y1(e,l,a),t!==null&&(et(t,e,a),cl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),a=G1(n);a.tag=2,t!=null&&(a.callback=t),t=Y1(e,a,n),t!==null&&(et(t,e,n),cl(t,e,n))}};function Q5(e,t,n,a,l,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,d):t.prototype&&t.prototype.isPureReactComponent?!Qa(n,a)||!Qa(l,s):!0}function K5(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&bs.enqueueReplaceState(t,t.state,null)}function Sn(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=re({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var L2=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function J5(e){L2(e)}function F5(e){console.error(e)}function W5(e){L2(e)}function H2(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function I5(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function _s(e,t,n){return n=G1(n),n.tag=3,n.payload={element:null},n.callback=function(){H2(e,t)},n}function P5(e){return e=G1(e),e.tag=3,e}function e7(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var s=a.value;e.payload=function(){return l(s)},e.callback=function(){I5(t,n,a)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){I5(t,n,a),typeof l!="function"&&(W1===null?W1=new Set([this]):W1.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function s8(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&rl(t,n,l,!0),n=Lt.current,n!==null){switch(n.tag){case 13:return e1===null?eo():n.alternate===null&&ke===0&&(ke=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Ji?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),no(e,a,l)),!1;case 22:return n.flags|=65536,a===Ji?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),no(e,a,l)),!1}throw Error(c(435,n.tag))}return no(e,a,l),eo(),!1}if(ie)return t=Lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==Ki&&(e=Error(c(422),{cause:a}),Wa(At(e,n)))):(a!==Ki&&(t=Error(c(423),{cause:a}),Wa(At(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=At(a,n),l=_s(e.stateNode,a,l),Os(e,l),ke!==4&&(ke=2)),!1;var s=Error(c(520),{cause:a});if(s=At(s,n),gl===null?gl=[s]:gl.push(s),ke!==4&&(ke=2),t===null)return!0;a=At(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=_s(n.stateNode,a,e),Os(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(W1===null||!W1.has(s))))return n.flags|=65536,l&=-l,n.lanes|=l,l=P5(l),e7(l,e,n,a),Os(n,l),!1}n=n.return}while(n!==null);return!1}var t7=Error(c(461)),qe=!1;function Ye(e,t,n,a){t.child=e===null?s5(t,null,n,a):Cn(t,e.child,n,a)}function n7(e,t,n,a,l){n=n.render;var s=t.ref;if("ref"in a){var d={};for(var h in a)h!=="ref"&&(d[h]=a[h])}else d=a;return zn(t),a=ns(e,t,n,d,s,l),h=as(),e!==null&&!qe?(ls(e,t,l),p1(e,t,l)):(ie&&h&&Xi(t),t.flags|=1,Ye(e,t,a,l),t.child)}function a7(e,t,n,a,l){if(e===null){var s=n.type;return typeof s=="function"&&!Zs(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,l7(e,t,s,a,l)):(e=V2(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!As(e,l)){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qa,n(d,a)&&e.ref===t.ref)return p1(e,t,l)}return t.flags|=1,e=J1(s,a),e.ref=t.ref,e.return=t,t.child=e}function l7(e,t,n,a,l){if(e!==null){var s=e.memoizedProps;if(Qa(s,a)&&e.ref===t.ref)if(qe=!1,t.pendingProps=a=s,As(e,l))(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,p1(e,t,l)}return Cs(e,t,n,a,l)}function i7(e,t,n){var a=t.pendingProps,l=a.children,s=(t.stateNode._pendingVisibility&2)!==0,d=e!==null?e.memoizedState:null;if(ol(e,t),a.mode==="hidden"||s){if((t.flags&128)!==0){if(a=d!==null?d.baseLanes|n:n,e!==null){for(l=t.child=e.child,s=0;l!==null;)s=s|l.lanes|l.childLanes,l=l.sibling;t.childLanes=s&~a}else t.childLanes=0,t.child=null;return s7(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&x2(t,d!==null?d.cachePool:null),d!==null?o5(t,d):Fi(),r5(t);else return t.lanes=t.childLanes=536870912,s7(e,t,d!==null?d.baseLanes|n:n,n)}else d!==null?(x2(t,d.cachePool),o5(t,d),R1(),t.memoizedState=null):(e!==null&&x2(t,null),Fi(),R1());return Ye(e,t,l,n),t.child}function s7(e,t,n,a){var l=es();return l=l===null?null:{parent:$e._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&x2(t,null),Fi(),r5(t),e!==null&&rl(e,t,a,!0),null}function ol(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=2097664)}}function Cs(e,t,n,a,l){return zn(t),n=ns(e,t,n,a,void 0,l),a=as(),e!==null&&!qe?(ls(e,t,l),p1(e,t,l)):(ie&&a&&Xi(t),t.flags|=1,Ye(e,t,n,l),t.child)}function o7(e,t,n,a,l,s){return zn(t),t.updateQueue=null,n=f5(t,a,n,l),h5(e),a=as(),e!==null&&!qe?(ls(e,t,s),p1(e,t,s)):(ie&&a&&Xi(t),t.flags|=1,Ye(e,t,n,s),t.child)}function r7(e,t,n,a,l){if(zn(t),t.stateNode===null){var s=Pn,d=n.contextType;typeof d=="object"&&d!==null&&(s=Je(d)),s=new n(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=bs,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},Hs(t),d=n.contextType,s.context=typeof d=="object"&&d!==null?Je(d):Pn,s.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(gs(t,n,d,a),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&bs.enqueueReplaceState(s,s.state,null),dl(t,a,s,l),ul(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var h=t.memoizedProps,y=Sn(n,h);s.props=y;var _=s.context,E=n.contextType;d=Pn,typeof E=="object"&&E!==null&&(d=Je(E));var D=n.getDerivedStateFromProps;E=typeof D=="function"||typeof s.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,E||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(h||_!==d)&&K5(t,s,a,d),j1=!1;var w=t.memoizedState;s.state=w,dl(t,a,s,l),ul(),_=t.memoizedState,h||w!==_||j1?(typeof D=="function"&&(gs(t,n,D,a),_=t.memoizedState),(y=j1||Q5(t,n,y,a,w,_,d))?(E||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=_),s.props=a,s.state=_,s.context=d,a=y):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,Ts(e,t),d=t.memoizedProps,E=Sn(n,d),s.props=E,D=t.pendingProps,w=s.context,_=n.contextType,y=Pn,typeof _=="object"&&_!==null&&(y=Je(_)),h=n.getDerivedStateFromProps,(_=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==D||w!==y)&&K5(t,s,a,y),j1=!1,w=t.memoizedState,s.state=w,dl(t,a,s,l),ul();var S=t.memoizedState;d!==D||w!==S||j1||e!==null&&e.dependencies!==null&&T2(e.dependencies)?(typeof h=="function"&&(gs(t,n,h,a),S=t.memoizedState),(E=j1||Q5(t,n,E,a,w,S,y)||e!==null&&e.dependencies!==null&&T2(e.dependencies))?(_||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,S,y),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,S,y)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=S),s.props=a,s.state=S,s.context=y,a=E):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,ol(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=Cn(t,e.child,null,l),t.child=Cn(t,null,n,l)):Ye(e,t,n,l),t.memoizedState=s.state,e=t.child):e=p1(e,t,l),e}function c7(e,t,n,a){return Fa(),t.flags|=256,Ye(e,t,n,a),t.child}var ms={dehydrated:null,treeContext:null,retryLane:0};function xs(e){return{baseLanes:e,cachePool:d5()}}function ws(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ut),e}function u7(e,t,n){var a=t.pendingProps,l=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(Ue.current&2)!==0),d&&(l=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(ie){if(l?N1(t):R1(),ie){var h=Ge,y;if(y=h){e:{for(y=h,h=Pt;y.nodeType!==8;){if(!h){h=null;break e}if(y=Xt(y.nextSibling),y===null){h=null;break e}}h=y}h!==null?(t.memoizedState={dehydrated:h,treeContext:gn!==null?{id:h1,overflow:f1}:null,retryLane:536870912},y=Ot(18,null,null,0),y.stateNode=h,y.return=t,t.child=y,Pe=t,Ge=null,y=!0):y=!1}y||_n(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return h.data==="$!"?t.lanes=16:t.lanes=536870912,null;y1(t)}return h=a.children,a=a.fallback,l?(R1(),l=t.mode,h=Ss({mode:"hidden",children:h},l),a=Dn(a,l,n,null),h.return=t,a.return=t,h.sibling=a,t.child=h,l=t.child,l.memoizedState=xs(n),l.childLanes=ws(e,d,n),t.memoizedState=ms,a):(N1(t),ks(t,h))}if(y=e.memoizedState,y!==null&&(h=y.dehydrated,h!==null)){if(s)t.flags&256?(N1(t),t.flags&=-257,t=Es(e,t,n)):t.memoizedState!==null?(R1(),t.child=e.child,t.flags|=128,t=null):(R1(),l=a.fallback,h=t.mode,a=Ss({mode:"visible",children:a.children},h),l=Dn(l,h,n,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,Cn(t,e.child,null,n),a=t.child,a.memoizedState=xs(n),a.childLanes=ws(e,d,n),t.memoizedState=ms,t=l);else if(N1(t),h.data==="$!"){if(d=h.nextSibling&&h.nextSibling.dataset,d)var _=d.dgst;d=_,a=Error(c(419)),a.stack="",a.digest=d,Wa({value:a,source:null,stack:null}),t=Es(e,t,n)}else if(qe||rl(e,t,n,!1),d=(n&e.childLanes)!==0,qe||d){if(d=ve,d!==null){if(a=n&-n,(a&42)!==0)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=(a&(d.suspendedLanes|n))!==0?0:a,a!==0&&a!==y.retryLane)throw y.retryLane=a,V1(e,a),et(d,e,a),t7}h.data==="$?"||eo(),t=Es(e,t,n)}else h.data==="$?"?(t.flags|=128,t.child=e.child,t=m8.bind(null,e),h._reactRetry=t,t=null):(e=y.treeContext,Ge=Xt(h.nextSibling),Pe=t,ie=!0,Gt=null,Pt=!1,e!==null&&(Dt[Mt++]=h1,Dt[Mt++]=f1,Dt[Mt++]=gn,h1=e.id,f1=e.overflow,gn=t),t=ks(t,a.children),t.flags|=4096);return t}return l?(R1(),l=a.fallback,h=t.mode,y=e.child,_=y.sibling,a=J1(y,{mode:"hidden",children:a.children}),a.subtreeFlags=y.subtreeFlags&31457280,_!==null?l=J1(_,l):(l=Dn(l,h,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,h=e.child.memoizedState,h===null?h=xs(n):(y=h.cachePool,y!==null?(_=$e._currentValue,y=y.parent!==_?{parent:_,pool:_}:y):y=d5(),h={baseLanes:h.baseLanes|n,cachePool:y}),l.memoizedState=h,l.childLanes=ws(e,d,n),t.memoizedState=ms,a):(N1(t),n=e.child,e=n.sibling,n=J1(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function ks(e,t){return t=Ss({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ss(e,t){return $7(e,t,0,null)}function Es(e,t,n){return Cn(t,e.child,null,n),e=ks(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function d7(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ms(e.return,t,n)}function zs(e,t,n,a,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=l)}function h7(e,t,n){var a=t.pendingProps,l=a.revealOrder,s=a.tail;if(Ye(e,t,a.children,n),a=Ue.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&d7(e,n,t);else if(e.tag===19)d7(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(ge(Ue,a),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&m2(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),zs(t,!1,l,n,s);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&m2(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}zs(t,!0,n,null,s);break;case"together":zs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function p1(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),F1|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(rl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=J1(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=J1(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function As(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&T2(e)))}function o8(e,t,n){switch(t.tag){case 3:Jl(t,t.stateNode.containerInfo),Z1(t,$e,e.memoizedState.cache),Fa();break;case 27:case 5:bi(t);break;case 4:Jl(t,t.stateNode.containerInfo);break;case 10:Z1(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(N1(t),t.flags|=128,null):(n&t.child.childLanes)!==0?u7(e,t,n):(N1(t),e=p1(e,t,n),e!==null?e.sibling:null);N1(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(rl(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return h7(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ge(Ue,Ue.current),a)break;return null;case 22:case 23:return t.lanes=0,i7(e,t,n);case 24:Z1(t,$e,e.memoizedState.cache)}return p1(e,t,n)}function f7(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)qe=!0;else{if(!As(e,n)&&(t.flags&128)===0)return qe=!1,o8(e,t,n);qe=(e.flags&131072)!==0}else qe=!1,ie&&(t.flags&1048576)!==0&&Wr(t,p2,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,l=a._init;if(a=l(a._payload),t.type=a,typeof a=="function")Zs(a)?(e=Sn(a,e),t.tag=1,t=r7(null,t,a,e,n)):(t.tag=0,t=Cs(null,t,a,e,n));else{if(a!=null){if(l=a.$$typeof,l===I){t.tag=11,t=n7(null,t,a,e,n);break e}else if(l===o1){t.tag=14,t=a7(null,t,a,e,n);break e}}throw t=H1(a)||a,Error(c(306,t,""))}}return t;case 0:return Cs(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=Sn(a,t.pendingProps),r7(e,t,a,l,n);case 3:e:{if(Jl(t,t.stateNode.containerInfo),e===null)throw Error(c(387));var s=t.pendingProps;l=t.memoizedState,a=l.element,Ts(e,t),dl(t,s,null,n);var d=t.memoizedState;if(s=d.cache,Z1(t,$e,s),s!==l.cache&&Ls(t,[$e],n,!0),ul(),s=d.element,l.isDehydrated)if(l={element:s,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=c7(e,t,s,n);break e}else if(s!==a){a=At(Error(c(424)),t),Wa(a),t=c7(e,t,s,n);break e}else for(Ge=Xt(t.stateNode.containerInfo.firstChild),Pe=t,ie=!0,Gt=null,Pt=!0,n=s5(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fa(),s===a){t=p1(e,t,n);break e}Ye(e,t,s,n)}t=t.child}return t;case 26:return ol(e,t),e===null?(n=p0(t.type,null,t.pendingProps,null))?t.memoizedState=n:ie||(n=t.type,e=t.pendingProps,a=J2(T1.current).createElement(n),a[Ke]=t,a[it]=e,Xe(a,n,e),Re(a),t.stateNode=a):t.memoizedState=p0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return bi(t),e===null&&ie&&(a=t.stateNode=f0(t.type,t.pendingProps,T1.current),Pe=t,Pt=!0,Ge=Xt(a.firstChild)),a=t.pendingProps.children,e!==null||ie?Ye(e,t,a,n):t.child=Cn(t,null,a,n),ol(e,t),t.child;case 5:return e===null&&ie&&((l=a=Ge)&&(a=V8(a,t.type,t.pendingProps,Pt),a!==null?(t.stateNode=a,Pe=t,Ge=Xt(a.firstChild),Pt=!1,l=!0):l=!1),l||_n(t)),bi(t),l=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,a=s.children,vo(l,s)?a=null:d!==null&&vo(l,d)&&(t.flags|=32),t.memoizedState!==null&&(l=ns(e,t,e8,null,null,n),El._currentValue=l),ol(e,t),Ye(e,t,a,n),t.child;case 6:return e===null&&ie&&((e=n=Ge)&&(n=N8(n,t.pendingProps,Pt),n!==null?(t.stateNode=n,Pe=t,Ge=null,e=!0):e=!1),e||_n(t)),null;case 13:return u7(e,t,n);case 4:return Jl(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Cn(t,null,a,n):Ye(e,t,a,n),t.child;case 11:return n7(e,t,t.type,t.pendingProps,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Z1(t,t.type,a.value),Ye(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,zn(t),l=Je(l),a=a(l),t.flags|=1,Ye(e,t,a,n),t.child;case 14:return a7(e,t,t.type,t.pendingProps,n);case 15:return l7(e,t,t.type,t.pendingProps,n);case 19:return h7(e,t,n);case 22:return i7(e,t,n);case 24:return zn(t),a=Je($e),e===null?(l=es(),l===null&&(l=ve,s=Ii(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=n),l=s),t.memoizedState={parent:a,cache:l},Hs(t),Z1(t,$e,l)):((e.lanes&n)!==0&&(Ts(e,t),dl(t,null,null,n),ul()),l=e.memoizedState,s=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Z1(t,$e,a)):(a=s.cache,Z1(t,$e,a),a!==l.cache&&Ls(t,[$e],n,!0))),Ye(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}var Ds=ue(null),En=null,g1=null;function Z1(e,t,n){ge(Ds,t._currentValue),t._currentValue=n}function b1(e){e._currentValue=Ds.current,Me(Ds)}function Ms(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Ls(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var d=l.child;s=s.firstContext;e:for(;s!==null;){var h=s;s=l;for(var y=0;y<t.length;y++)if(h.context===t[y]){s.lanes|=n,h=s.alternate,h!==null&&(h.lanes|=n),Ms(s.return,n,e),a||(d=null);break e}s=h.next}}else if(l.tag===18){if(d=l.return,d===null)throw Error(c(341));d.lanes|=n,s=d.alternate,s!==null&&(s.lanes|=n),Ms(d,n,e),d=null}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===e){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}}function rl(e,t,n,a){e=null;for(var l=t,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var d=l.alternate;if(d===null)throw Error(c(387));if(d=d.memoizedProps,d!==null){var h=l.type;ft(l.pendingProps.value,d.value)||(e!==null?e.push(h):e=[h])}}else if(l===Kl.current){if(d=l.alternate,d===null)throw Error(c(387));d.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(El):e=[El])}l=l.return}e!==null&&Ls(t,e,n,a),t.flags|=262144}function T2(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zn(e){En=e,g1=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Je(e){return y7(En,e)}function O2(e,t){return En===null&&zn(e),y7(e,t)}function y7(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},g1===null){if(e===null)throw Error(c(308));g1=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else g1=g1.next=t;return n}var j1=!1;function Hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ts(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function G1(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Y1(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(me&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=y2(e),Jr(e,null,n),t}return f2(e,a,t,n),y2(e)}function cl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194176)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ar(e,n)}}function Os(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?l=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?l=s=t:s=s.next=t}else l=s=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Us=!1;function ul(){if(Us){var e=ia;if(e!==null)throw e}}function dl(e,t,n,a){Us=!1;var l=e.updateQueue;j1=!1;var s=l.firstBaseUpdate,d=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var y=h,_=y.next;y.next=null,d===null?s=_:d.next=_,d=y;var E=e.alternate;E!==null&&(E=E.updateQueue,h=E.lastBaseUpdate,h!==d&&(h===null?E.firstBaseUpdate=_:h.next=_,E.lastBaseUpdate=y))}if(s!==null){var D=l.baseState;d=0,E=_=y=null,h=s;do{var w=h.lane&-536870913,S=w!==h.lane;if(S?(le&w)===w:(a&w)===w){w!==0&&w===la&&(Us=!0),E!==null&&(E=E.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var V=e,Q=h;w=t;var Se=n;switch(Q.tag){case 1:if(V=Q.payload,typeof V=="function"){D=V.call(Se,D,w);break e}D=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=Q.payload,w=typeof V=="function"?V.call(Se,D,w):V,w==null)break e;D=re({},D,w);break e;case 2:j1=!0}}w=h.callback,w!==null&&(e.flags|=64,S&&(e.flags|=8192),S=l.callbacks,S===null?l.callbacks=[w]:S.push(w))}else S={lane:w,tag:h.tag,payload:h.payload,callback:h.callback,next:null},E===null?(_=E=S,y=D):E=E.next=S,d|=w;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;S=h,h=S.next,S.next=null,l.lastBaseUpdate=S,l.shared.pending=null}}while(!0);E===null&&(y=D),l.baseState=y,l.firstBaseUpdate=_,l.lastBaseUpdate=E,s===null&&(l.shared.lanes=0),F1|=d,e.lanes=d,e.memoizedState=D}}function v7(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function p7(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)v7(n[e],t)}function hl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var s=n.create,d=n.inst;a=s(),d.destroy=a}n=n.next}while(n!==l)}}catch(h){fe(t,t.return,h)}}function X1(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var s=l.next;a=s;do{if((a.tag&e)===e){var d=a.inst,h=d.destroy;if(h!==void 0){d.destroy=void 0,l=t;var y=n;try{h()}catch(_){fe(l,y,_)}}}a=a.next}while(a!==s)}}catch(_){fe(t,t.return,_)}}function g7(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{p7(t,n)}catch(a){fe(e,e.return,a)}}}function b7(e,t,n){n.props=Sn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){fe(e,t,a)}}function An(e,t){try{var n=e.ref;if(n!==null){var a=e.stateNode;switch(e.tag){case 26:case 27:case 5:var l=a;break;default:l=a}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(s){fe(e,t,s)}}function yt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){fe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){fe(e,t,l)}else n.current=null}function _7(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){fe(e,e.return,l)}}function C7(e,t,n){try{var a=e.stateNode;H8(a,e.type,n,t),a[it]=t}catch(l){fe(e,e.return,l)}}function m7(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function $s(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||m7(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vs(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=K2));else if(a!==4&&a!==27&&(e=e.child,e!==null))for(Vs(e,t,n),e=e.sibling;e!==null;)Vs(e,t,n),e=e.sibling}function U2(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&a!==27&&(e=e.child,e!==null))for(U2(e,t,n),e=e.sibling;e!==null;)U2(e,t,n),e=e.sibling}var _1=!1,we=!1,Ns=!1,x7=typeof WeakSet=="function"?WeakSet:Set,Be=null,w7=!1;function r8(e,t){if(e=e.containerInfo,fo=ti,e=qr(e),qi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,h=-1,y=-1,_=0,E=0,D=e,w=null;t:for(;;){for(var S;D!==n||l!==0&&D.nodeType!==3||(h=d+l),D!==s||a!==0&&D.nodeType!==3||(y=d+a),D.nodeType===3&&(d+=D.nodeValue.length),(S=D.firstChild)!==null;)w=D,D=S;for(;;){if(D===e)break t;if(w===n&&++_===l&&(h=d),w===s&&++E===a&&(y=d),(S=D.nextSibling)!==null)break;D=w,w=D.parentNode}D=S}n=h===-1||y===-1?null:{start:h,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(yo={focusedElem:e,selectionRange:n},ti=!1,Be=t;Be!==null;)if(t=Be,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Be=e;else for(;Be!==null;){switch(t=Be,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,l=s.memoizedProps,s=s.memoizedState,a=n.stateNode;try{var V=Sn(n.type,l,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(V,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(Q){fe(n,n.return,Q)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)bo(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Be=e;break}Be=t.return}return V=w7,w7=!1,V}function k7(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:m1(e,n),a&4&&hl(5,n);break;case 1:if(m1(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){fe(n,n.return,h)}else{var l=Sn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){fe(n,n.return,h)}}a&64&&g7(n),a&512&&An(n,n.return);break;case 3:if(m1(e,n),a&64&&(a=n.updateQueue,a!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{p7(a,e)}catch(h){fe(n,n.return,h)}}break;case 26:m1(e,n),a&512&&An(n,n.return);break;case 27:case 5:m1(e,n),t===null&&a&4&&_7(n),a&512&&An(n,n.return);break;case 12:m1(e,n);break;case 13:m1(e,n),a&4&&z7(e,n);break;case 22:if(l=n.memoizedState!==null||_1,!l){t=t!==null&&t.memoizedState!==null||we;var s=_1,d=we;_1=l,(we=t)&&!d?Q1(e,n,(n.subtreeFlags&8772)!==0):m1(e,n),_1=s,we=d}a&512&&(n.memoizedProps.mode==="manual"?An(n,n.return):yt(n,n.return));break;default:m1(e,n)}}function S7(e){var t=e.alternate;t!==null&&(e.alternate=null,S7(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ki(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Te=null,vt=!1;function C1(e,t,n){for(n=n.child;n!==null;)E7(e,t,n),n=n.sibling}function E7(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Ua,n)}catch{}switch(n.tag){case 26:we||yt(n,t),C1(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:we||yt(n,t);var a=Te,l=vt;for(Te=n.stateNode,C1(e,t,n),n=n.stateNode,t=n.attributes;t.length;)n.removeAttributeNode(t[0]);ki(n),Te=a,vt=l;break;case 5:we||yt(n,t);case 6:l=Te;var s=vt;if(Te=null,C1(e,t,n),Te=l,vt=s,Te!==null)if(vt)try{e=Te,a=n.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)}catch(d){fe(n,t,d)}else try{Te.removeChild(n.stateNode)}catch(d){fe(n,t,d)}break;case 18:Te!==null&&(vt?(t=Te,n=n.stateNode,t.nodeType===8?go(t.parentNode,n):t.nodeType===1&&go(t,n),Ml(t)):go(Te,n.stateNode));break;case 4:a=Te,l=vt,Te=n.stateNode.containerInfo,vt=!0,C1(e,t,n),Te=a,vt=l;break;case 0:case 11:case 14:case 15:we||X1(2,n,t),we||X1(4,n,t),C1(e,t,n);break;case 1:we||(yt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&b7(n,t,a)),C1(e,t,n);break;case 21:C1(e,t,n);break;case 22:we||yt(n,t),we=(a=we)||n.memoizedState!==null,C1(e,t,n),we=a;break;default:C1(e,t,n)}}function z7(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ml(e)}catch(n){fe(t,t.return,n)}}function c8(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new x7),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new x7),t;default:throw Error(c(435,e.tag))}}function Rs(e,t){var n=c8(e);t.forEach(function(a){var l=x8.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}function Ht(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],s=e,d=t,h=d;e:for(;h!==null;){switch(h.tag){case 27:case 5:Te=h.stateNode,vt=!1;break e;case 3:Te=h.stateNode.containerInfo,vt=!0;break e;case 4:Te=h.stateNode.containerInfo,vt=!0;break e}h=h.return}if(Te===null)throw Error(c(160));E7(s,d,l),Te=null,vt=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)A7(t,e),t=t.sibling}var Yt=null;function A7(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ht(t,e),Tt(e),a&4&&(X1(3,e,e.return),hl(3,e),X1(5,e,e.return));break;case 1:Ht(t,e),Tt(e),a&512&&(we||n===null||yt(n,n.return)),a&64&&_1&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Yt;if(Ht(t,e),Tt(e),a&512&&(we||n===null||yt(n,n.return)),a&4){var s=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Na]||s[Ke]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(a),l.head.insertBefore(s,l.querySelector("head > title"))),Xe(s,a,n),s[Ke]=e,Re(s),a=s;break e;case"link":var d=_0("link","href",l).get(a+(n.href||""));if(d){for(var h=0;h<d.length;h++)if(s=d[h],s.getAttribute("href")===(n.href==null?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(h,1);break t}}s=l.createElement(a),Xe(s,a,n),l.head.appendChild(s);break;case"meta":if(d=_0("meta","content",l).get(a+(n.content||""))){for(h=0;h<d.length;h++)if(s=d[h],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(h,1);break t}}s=l.createElement(a),Xe(s,a,n),l.head.appendChild(s);break;default:throw Error(c(468,a))}s[Ke]=e,Re(s),a=s}e.stateNode=a}else C0(l,e.type,e.stateNode);else e.stateNode=b0(l,a,e.memoizedProps);else s!==a?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,a===null?C0(l,e.type,e.stateNode):b0(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&C7(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(a&4&&e.alternate===null){l=e.stateNode,s=e.memoizedProps;try{for(var y=l.firstChild;y;){var _=y.nextSibling,E=y.nodeName;y[Na]||E==="HEAD"||E==="BODY"||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&y.rel.toLowerCase()==="stylesheet"||l.removeChild(y),y=_}for(var D=e.type,w=l.attributes;w.length;)l.removeAttributeNode(w[0]);Xe(l,D,s),l[Ke]=e,l[it]=s}catch(V){fe(e,e.return,V)}}case 5:if(Ht(t,e),Tt(e),a&512&&(we||n===null||yt(n,n.return)),e.flags&32){l=e.stateNode;try{Xn(l,"")}catch(V){fe(e,e.return,V)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,C7(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Ns=!0);break;case 6:if(Ht(t,e),Tt(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(V){fe(e,e.return,V)}}break;case 3:if(I2=null,l=Yt,Yt=F2(t.containerInfo),Ht(t,e),Yt=l,Tt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Ml(t.containerInfo)}catch(V){fe(e,e.return,V)}Ns&&(Ns=!1,D7(e));break;case 4:a=Yt,Yt=F2(e.stateNode.containerInfo),Ht(t,e),Tt(e),Yt=a;break;case 12:Ht(t,e),Tt(e);break;case 13:Ht(t,e),Tt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ks=It()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Rs(e,a)));break;case 22:if(a&512&&(we||n===null||yt(n,n.return)),y=e.memoizedState!==null,_=n!==null&&n.memoizedState!==null,E=_1,D=we,_1=E||y,we=D||_,Ht(t,e),we=D,_1=E,Tt(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,a&8192&&(t._visibility=y?t._visibility&-2:t._visibility|1,y&&(t=_1||we,n===null||_||t||ca(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(n=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(n===null){_=n=t;try{if(l=_.stateNode,y)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{d=_.stateNode,h=_.memoizedProps.style;var S=h!=null&&h.hasOwnProperty("display")?h.display:null;d.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(V){fe(_,_.return,V)}}}else if(t.tag===6){if(n===null){_=t;try{_.stateNode.nodeValue=y?"":_.memoizedProps}catch(V){fe(_,_.return,V)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Rs(e,n))));break;case 19:Ht(t,e),Tt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Rs(e,a)));break;case 21:break;default:Ht(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var n=e.return;n!==null;){if(m7(n)){var a=n;break e}n=n.return}throw Error(c(160))}switch(a.tag){case 27:var l=a.stateNode,s=$s(e);U2(e,s,l);break;case 5:var d=a.stateNode;a.flags&32&&(Xn(d,""),a.flags&=-33);var h=$s(e);U2(e,h,d);break;case 3:case 4:var y=a.stateNode.containerInfo,_=$s(e);Vs(e,_,y);break;default:throw Error(c(161))}}}catch(E){fe(e,e.return,E)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function D7(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;D7(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function m1(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)k7(e,t.alternate,t),t=t.sibling}function ca(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:X1(4,t,t.return),ca(t);break;case 1:yt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&b7(t,t.return,n),ca(t);break;case 26:case 27:case 5:yt(t,t.return),ca(t);break;case 22:yt(t,t.return),t.memoizedState===null&&ca(t);break;default:ca(t)}e=e.sibling}}function Q1(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:Q1(l,s,n),hl(4,s);break;case 1:if(Q1(l,s,n),a=s,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(_){fe(a,a.return,_)}if(a=s,l=a.updateQueue,l!==null){var h=a.stateNode;try{var y=l.shared.hiddenCallbacks;if(y!==null)for(l.shared.hiddenCallbacks=null,l=0;l<y.length;l++)v7(y[l],h)}catch(_){fe(a,a.return,_)}}n&&d&64&&g7(s),An(s,s.return);break;case 26:case 27:case 5:Q1(l,s,n),n&&a===null&&d&4&&_7(s),An(s,s.return);break;case 12:Q1(l,s,n);break;case 13:Q1(l,s,n),n&&d&4&&z7(l,s);break;case 22:s.memoizedState===null&&Q1(l,s,n),An(s,s.return);break;default:Q1(l,s,n)}t=t.sibling}}function qs(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&nl(n))}function Bs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&nl(e))}function K1(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)M7(e,t,n,a),t=t.sibling}function M7(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:K1(e,t,n,a),l&2048&&hl(9,t);break;case 3:K1(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&nl(e)));break;case 12:if(l&2048){K1(e,t,n,a),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,h=s.onPostCommit;typeof h=="function"&&h(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){fe(t,t.return,y)}}else K1(e,t,n,a);break;case 23:break;case 22:s=t.stateNode,t.memoizedState!==null?s._visibility&4?K1(e,t,n,a):fl(e,t):s._visibility&4?K1(e,t,n,a):(s._visibility|=4,ua(e,t,n,a,(t.subtreeFlags&10256)!==0)),l&2048&&qs(t.alternate,t);break;case 24:K1(e,t,n,a),l&2048&&Bs(t.alternate,t);break;default:K1(e,t,n,a)}}function ua(e,t,n,a,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,d=t,h=n,y=a,_=d.flags;switch(d.tag){case 0:case 11:case 15:ua(s,d,h,y,l),hl(8,d);break;case 23:break;case 22:var E=d.stateNode;d.memoizedState!==null?E._visibility&4?ua(s,d,h,y,l):fl(s,d):(E._visibility|=4,ua(s,d,h,y,l)),l&&_&2048&&qs(d.alternate,d);break;case 24:ua(s,d,h,y,l),l&&_&2048&&Bs(d.alternate,d);break;default:ua(s,d,h,y,l)}t=t.sibling}}function fl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:fl(n,a),l&2048&&qs(a.alternate,a);break;case 24:fl(n,a),l&2048&&Bs(a.alternate,a);break;default:fl(n,a)}t=t.sibling}}var yl=8192;function da(e){if(e.subtreeFlags&yl)for(e=e.child;e!==null;)L7(e),e=e.sibling}function L7(e){switch(e.tag){case 26:da(e),e.flags&yl&&e.memoizedState!==null&&W8(Yt,e.memoizedState,e.memoizedProps);break;case 5:da(e);break;case 3:case 4:var t=Yt;Yt=F2(e.stateNode.containerInfo),da(e),Yt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=yl,yl=16777216,da(e),yl=t):da(e));break;default:da(e)}}function H7(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function vl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Be=a,O7(a,e)}H7(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)T7(e),e=e.sibling}function T7(e){switch(e.tag){case 0:case 11:case 15:vl(e),e.flags&2048&&X1(9,e,e.return);break;case 3:vl(e);break;case 12:vl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,$2(e)):vl(e);break;default:vl(e)}}function $2(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Be=a,O7(a,e)}H7(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:X1(8,t,t.return),$2(t);break;case 22:n=t.stateNode,n._visibility&4&&(n._visibility&=-5,$2(t));break;default:$2(t)}e=e.sibling}}function O7(e,t){for(;Be!==null;){var n=Be;switch(n.tag){case 0:case 11:case 15:X1(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:nl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Be=a;else e:for(n=e;Be!==null;){a=Be;var l=a.sibling,s=a.return;if(S7(a),a===n){Be=null;break e}if(l!==null){l.return=s,Be=l;break e}Be=s}}}function u8(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,a){return new u8(e,t,n,a)}function Zs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function J1(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&31457280,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function U7(e,t){e.flags&=31457282;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function V2(e,t,n,a,l,s){var d=0;if(a=e,typeof e=="function")Zs(e)&&(d=1);else if(typeof e=="string")d=J8(e,n,Wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case k:return Dn(n.children,l,s,t);case x:d=8,l|=24;break;case H:return e=Ot(12,n,t,l|2),e.elementType=H,e.lanes=s,e;case nt:return e=Ot(13,n,t,l),e.elementType=nt,e.lanes=s,e;case ut:return e=Ot(19,n,t,l),e.elementType=ut,e.lanes=s,e;case Zt:return $7(n,l,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:case R:d=10;break e;case G:d=9;break e;case I:d=11;break e;case o1:d=14;break e;case We:d=16,a=null;break e}d=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=Ot(d,n,t,l),t.elementType=e,t.type=a,t.lanes=s,t}function Dn(e,t,n,a){return e=Ot(7,e,a,t),e.lanes=n,e}function $7(e,t,n,a){e=Ot(22,e,a,t),e.elementType=Zt,e.lanes=n;var l={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var s=l._current;if(s===null)throw Error(c(456));if((l._pendingVisibility&2)===0){var d=V1(s,2);d!==null&&(l._pendingVisibility|=2,et(d,s,2))}},attach:function(){var s=l._current;if(s===null)throw Error(c(456));if((l._pendingVisibility&2)!==0){var d=V1(s,2);d!==null&&(l._pendingVisibility&=-3,et(d,s,2))}}};return e.stateNode=l,e}function js(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function Gs(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function x1(e){e.flags|=4}function V7(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!m0(t)){if(t=Lt.current,t!==null&&((le&4194176)===le?e1!==null:(le&62914560)!==le&&(le&536870912)===0||t!==e1))throw Pa=Ji,e5;e.flags|=8192}}function N2(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?tr():536870912,e.lanes|=t,fa|=t)}function pl(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&31457280,a|=l.flags&31457280,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function d8(e,t,n){var a=t.pendingProps;switch(Qi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ce(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),b1($e),qn(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ja(t)?x1(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Gt!==null&&(Is(Gt),Gt=null))),Ce(t),null;case 26:return n=t.memoizedState,e===null?(x1(t),n!==null?(Ce(t),V7(t,n)):(Ce(t),t.flags&=-16777217)):n?n!==e.memoizedState?(x1(t),Ce(t),V7(t,n)):(Ce(t),t.flags&=-16777217):(e.memoizedProps!==a&&x1(t),Ce(t),t.flags&=-16777217),null;case 27:Fl(t),n=T1.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&x1(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Ce(t),null}e=Wt.current,Ja(t)?Ir(t):(e=f0(l,a,n),t.stateNode=e,x1(t))}return Ce(t),null;case 5:if(Fl(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&x1(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Ce(t),null}if(e=Wt.current,Ja(t))Ir(t);else{switch(l=J2(T1.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(n,{is:a.is}):l.createElement(n)}}e[Ke]=t,e[it]=a;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Xe(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&x1(t)}}return Ce(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&x1(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=T1.current,Ja(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=Pe,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[Ke]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||o0(e.nodeValue,n)),e||_n(t)}else e=J2(e).createTextNode(a),e[Ke]=t,t.stateNode=e}return Ce(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ja(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Ke]=t}else Fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),l=!1}else Gt!==null&&(Is(Gt),Gt=null),l=!0;if(!l)return t.flags&256?(y1(t),t):(y1(t),null)}if(y1(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var s=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==l&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),N2(t,t.updateQueue),Ce(t),null;case 4:return qn(),e===null&&co(t.stateNode.containerInfo),Ce(t),null;case 10:return b1(t.type),Ce(t),null;case 19:if(Me(Ue),l=t.memoizedState,l===null)return Ce(t),null;if(a=(t.flags&128)!==0,s=l.rendering,s===null)if(a)pl(l,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=m2(e),s!==null){for(t.flags|=128,pl(l,!1),e=s.updateQueue,t.updateQueue=e,N2(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)U7(n,e),n=n.sibling;return ge(Ue,Ue.current&1|2),t.child}e=e.sibling}l.tail!==null&&It()>R2&&(t.flags|=128,a=!0,pl(l,!1),t.lanes=4194304)}else{if(!a)if(e=m2(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,N2(t,e),pl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!ie)return Ce(t),null}else 2*It()-l.renderingStartTime>R2&&n!==536870912&&(t.flags|=128,a=!0,pl(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(e=l.last,e!==null?e.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=It(),t.sibling=null,e=Ue.current,ge(Ue,a?e&1|2:e&1),t):(Ce(t),null);case 22:case 23:return y1(t),Wi(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),n=t.updateQueue,n!==null&&N2(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Me(mn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),b1($e),Ce(t),null;case 25:return null}throw Error(c(156,t.tag))}function h8(e,t){switch(Qi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return b1($e),qn(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Fl(t),null;case 13:if(y1(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Me(Ue),null;case 4:return qn(),null;case 10:return b1(t.type),null;case 22:case 23:return y1(t),Wi(),e!==null&&Me(mn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return b1($e),null;case 25:return null;default:return null}}function N7(e,t){switch(Qi(t),t.tag){case 3:b1($e),qn();break;case 26:case 27:case 5:Fl(t);break;case 4:qn();break;case 13:y1(t);break;case 19:Me(Ue);break;case 10:b1(t.type);break;case 22:case 23:y1(t),Wi(),e!==null&&Me(mn);break;case 24:b1($e)}}var f8={getCacheForType:function(e){var t=Je($e),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},y8=typeof WeakMap=="function"?WeakMap:Map,me=0,ve=null,ee=null,le=0,pe=0,pt=null,w1=!1,ha=!1,Ys=!1,k1=0,ke=0,F1=0,Mn=0,Xs=0,Ut=0,fa=0,gl=null,n1=null,Qs=!1,Ks=0,R2=1/0,q2=null,W1=null,B2=!1,Ln=null,bl=0,Js=0,Fs=null,_l=0,Ws=null;function gt(){if((me&2)!==0&&le!==0)return le&-le;if(Z.T!==null){var e=la;return e!==0?e:io()}return ir()}function R7(){Ut===0&&(Ut=(le&536870912)===0||ie?er():536870912);var e=Lt.current;return e!==null&&(e.flags|=32),Ut}function et(e,t,n){(e===ve&&pe===2||e.cancelPendingCommit!==null)&&(ya(e,0),S1(e,le,Ut,!1)),Va(e,n),((me&2)===0||e!==ve)&&(e===ve&&((me&2)===0&&(Mn|=n),ke===4&&S1(e,le,Ut,!1)),a1(e))}function q7(e,t,n){if((me&6)!==0)throw Error(c(327));var a=!n&&(t&60)===0&&(t&e.expiredLanes)===0||$a(e,t),l=a?g8(e,t):to(e,t,!0),s=a;do{if(l===0){ha&&!a&&S1(e,t,0,!1);break}else if(l===6)S1(e,t,0,!w1);else{if(n=e.current.alternate,s&&!v8(n)){l=to(e,t,!1),s=!1;continue}if(l===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var h=e;l=gl;var y=h.current.memoizedState.isDehydrated;if(y&&(ya(h,d).flags|=256),d=to(h,d,!1),d!==2){if(Ys&&!y){h.errorRecoveryDisabledLanes|=s,Mn|=s,l=4;break e}s=n1,n1=l,s!==null&&Is(s)}l=d}if(s=!1,l!==2)continue}}if(l===1){ya(e,0),S1(e,t,0,!0);break}e:{switch(a=e,l){case 0:case 1:throw Error(c(345));case 4:if((t&4194176)===t){S1(a,t,Ut,!w1);break e}break;case 2:n1=null;break;case 3:case 5:break;default:throw Error(c(329))}if(a.finishedWork=n,a.finishedLanes=t,(t&62914560)===t&&(s=Ks+300-It(),10<s)){if(S1(a,t,Ut,!w1),e2(a,0)!==0)break e;a.timeoutHandle=u0(B7.bind(null,a,n,n1,q2,Qs,t,Ut,Mn,fa,w1,2,-0,0),s);break e}B7(a,n,n1,q2,Qs,t,Ut,Mn,fa,w1,0,-0,0)}}break}while(!0);a1(e)}function Is(e){n1===null?n1=e:n1.push.apply(n1,e)}function B7(e,t,n,a,l,s,d,h,y,_,E,D,w){var S=t.subtreeFlags;if((S&8192||(S&16785408)===16785408)&&(Sl={stylesheets:null,count:0,unsuspend:F8},L7(t),t=I8(),t!==null)){e.cancelPendingCommit=t(K7.bind(null,e,n,a,l,d,h,y,1,D,w)),S1(e,s,d,!_);return}K7(e,n,a,l,d,h,y,E,D,w)}function v8(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],s=l.getSnapshot;l=l.value;try{if(!ft(s(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function S1(e,t,n,a){t&=~Xs,t&=~Mn,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var s=31-ht(l),d=1<<s;a[s]=-1,l&=~d}n!==0&&nr(e,n,t)}function Z2(){return(me&6)===0?(Cl(0),!1):!0}function Ps(){if(ee!==null){if(pe===0)var e=ee.return;else e=ee,g1=En=null,is(e),na=null,el=0,e=ee;for(;e!==null;)N7(e.alternate,e),e=e.return;ee=null}}function ya(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,O8(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ps(),ve=e,ee=n=J1(e.current,null),le=t,pe=0,pt=null,w1=!1,ha=$a(e,t),Ys=!1,fa=Ut=Xs=Mn=F1=ke=0,n1=gl=null,Qs=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-ht(a),s=1<<l;t|=e[l],a&=~s}return k1=t,h2(),n}function Z7(e,t){W=null,Z.H=t1,t===Ia?(t=a5(),pe=3):t===e5?(t=a5(),pe=4):pe=t===t7?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,pt=t,ee===null&&(ke=1,H2(e,At(t,e.current)))}function j7(){var e=Z.H;return Z.H=t1,e===null?t1:e}function G7(){var e=Z.A;return Z.A=f8,e}function eo(){ke=4,w1||(le&4194176)!==le&&Lt.current!==null||(ha=!0),(F1&134217727)===0&&(Mn&134217727)===0||ve===null||S1(ve,le,Ut,!1)}function to(e,t,n){var a=me;me|=2;var l=j7(),s=G7();(ve!==e||le!==t)&&(q2=null,ya(e,t)),t=!1;var d=ke;e:do try{if(pe!==0&&ee!==null){var h=ee,y=pt;switch(pe){case 8:Ps(),d=6;break e;case 3:case 2:case 6:Lt.current===null&&(t=!0);var _=pe;if(pe=0,pt=null,va(e,h,y,_),n&&ha){d=0;break e}break;default:_=pe,pe=0,pt=null,va(e,h,y,_)}}p8(),d=ke;break}catch(E){Z7(e,E)}while(!0);return t&&e.shellSuspendCounter++,g1=En=null,me=a,Z.H=l,Z.A=s,ee===null&&(ve=null,le=0,h2()),d}function p8(){for(;ee!==null;)Y7(ee)}function g8(e,t){var n=me;me|=2;var a=j7(),l=G7();ve!==e||le!==t?(q2=null,R2=It()+500,ya(e,t)):ha=$a(e,t);e:do try{if(pe!==0&&ee!==null){t=ee;var s=pt;t:switch(pe){case 1:pe=0,pt=null,va(e,t,s,1);break;case 2:if(t5(s)){pe=0,pt=null,X7(t);break}t=function(){pe===2&&ve===e&&(pe=7),a1(e)},s.then(t,t);break e;case 3:pe=7;break e;case 4:pe=5;break e;case 7:t5(s)?(pe=0,pt=null,X7(t)):(pe=0,pt=null,va(e,t,s,7));break;case 5:var d=null;switch(ee.tag){case 26:d=ee.memoizedState;case 5:case 27:var h=ee;if(!d||m0(d)){pe=0,pt=null;var y=h.sibling;if(y!==null)ee=y;else{var _=h.return;_!==null?(ee=_,j2(_)):ee=null}break t}}pe=0,pt=null,va(e,t,s,5);break;case 6:pe=0,pt=null,va(e,t,s,6);break;case 8:Ps(),ke=6;break e;default:throw Error(c(462))}}b8();break}catch(E){Z7(e,E)}while(!0);return g1=En=null,Z.H=a,Z.A=l,me=n,ee!==null?0:(ve=null,le=0,h2(),ke)}function b8(){for(;ee!==null&&!q3();)Y7(ee)}function Y7(e){var t=f7(e.alternate,e,k1);e.memoizedProps=e.pendingProps,t===null?j2(e):ee=t}function X7(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=o7(n,t,t.pendingProps,t.type,void 0,le);break;case 11:t=o7(n,t,t.pendingProps,t.type.render,t.ref,le);break;case 5:is(t);default:N7(n,t),t=ee=U7(t,k1),t=f7(n,t,k1)}e.memoizedProps=e.pendingProps,t===null?j2(e):ee=t}function va(e,t,n,a){g1=En=null,is(t),na=null,el=0;var l=t.return;try{if(s8(e,l,t,n,le)){ke=1,H2(e,At(n,e.current)),ee=null;return}}catch(s){if(l!==null)throw ee=l,s;ke=1,H2(e,At(n,e.current)),ee=null;return}t.flags&32768?(ie||a===1?e=!0:ha||(le&536870912)!==0?e=!1:(w1=e=!0,(a===2||a===3||a===6)&&(a=Lt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Q7(t,e)):j2(t)}function j2(e){var t=e;do{if((t.flags&32768)!==0){Q7(t,w1);return}e=t.return;var n=d8(t.alternate,t,k1);if(n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ke===0&&(ke=5)}function Q7(e,t){do{var n=h8(e.alternate,e);if(n!==null){n.flags&=32767,ee=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ee=e;return}ee=e=n}while(e!==null);ke=6,ee=null}function K7(e,t,n,a,l,s,d,h,y,_){var E=Z.T,D=U.p;try{U.p=2,Z.T=null,_8(e,t,n,a,D,l,s,d,h,y,_)}finally{Z.T=E,U.p=D}}function _8(e,t,n,a,l,s,d,h){do pa();while(Ln!==null);if((me&6)!==0)throw Error(c(327));var y=e.finishedWork;if(a=e.finishedLanes,y===null)return null;if(e.finishedWork=null,e.finishedLanes=0,y===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var _=y.lanes|y.childLanes;if(_|=Gi,W3(e,a,_,s,d,h),e===ve&&(ee=ve=null,le=0),(y.subtreeFlags&10256)===0&&(y.flags&10256)===0||B2||(B2=!0,Js=_,Fs=n,w8(Wl,function(){return pa(),null})),n=(y.flags&15990)!==0,(y.subtreeFlags&15990)!==0||n?(n=Z.T,Z.T=null,s=U.p,U.p=2,d=me,me|=4,r8(e,y),A7(y,e),jc(yo,e.containerInfo),ti=!!fo,yo=fo=null,e.current=y,k7(e,y.alternate,y),B3(),me=d,U.p=s,Z.T=n):e.current=y,B2?(B2=!1,Ln=e,bl=a):J7(e,_),_=e.pendingLanes,_===0&&(W1=null),X3(y.stateNode),a1(e),t!==null)for(l=e.onRecoverableError,y=0;y<t.length;y++)_=t[y],l(_.value,{componentStack:_.stack});return(bl&3)!==0&&pa(),_=e.pendingLanes,(a&4194218)!==0&&(_&42)!==0?e===Ws?_l++:(_l=0,Ws=e):_l=0,Cl(0),null}function J7(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,nl(t)))}function pa(){if(Ln!==null){var e=Ln,t=Js;Js=0;var n=lr(bl),a=Z.T,l=U.p;try{if(U.p=32>n?32:n,Z.T=null,Ln===null)var s=!1;else{n=Fs,Fs=null;var d=Ln,h=bl;if(Ln=null,bl=0,(me&6)!==0)throw Error(c(331));var y=me;if(me|=4,T7(d.current),M7(d,d.current,h,n),me=y,Cl(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Ua,d)}catch{}s=!0}return s}finally{U.p=l,Z.T=a,J7(e,t)}}return!1}function F7(e,t,n){t=At(n,t),t=_s(e.stateNode,t,2),e=Y1(e,t,2),e!==null&&(Va(e,2),a1(e))}function fe(e,t,n){if(e.tag===3)F7(e,e,n);else for(;t!==null;){if(t.tag===3){F7(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(W1===null||!W1.has(a))){e=At(n,e),n=P5(2),a=Y1(t,n,2),a!==null&&(e7(n,a,t,e),Va(a,2),a1(a));break}}t=t.return}}function no(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new y8;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Ys=!0,l.add(n),e=C8.bind(null,e,t,n),t.then(e,e))}function C8(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ve===e&&(le&n)===n&&(ke===4||ke===3&&(le&62914560)===le&&300>It()-Ks?(me&2)===0&&ya(e,0):Xs|=n,fa===le&&(fa=0)),a1(e)}function W7(e,t){t===0&&(t=tr()),e=V1(e,t),e!==null&&(Va(e,t),a1(e))}function m8(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),W7(e,n)}function x8(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),W7(e,n)}function w8(e,t){return Ci(e,t)}var G2=null,ga=null,ao=!1,Y2=!1,lo=!1,Hn=0;function a1(e){e!==ga&&e.next===null&&(ga===null?G2=ga=e:ga=ga.next=e),Y2=!0,ao||(ao=!0,S8(k8))}function Cl(e,t){if(!lo&&Y2){lo=!0;do for(var n=!1,a=G2;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var s=0;else{var d=a.suspendedLanes,h=a.pingedLanes;s=(1<<31-ht(42|e)+1)-1,s&=l&~(d&~h),s=s&201326677?s&201326677|1:s?s|2:0}s!==0&&(n=!0,e0(a,s))}else s=le,s=e2(a,a===ve?s:0),(s&3)===0||$a(a,s)||(n=!0,e0(a,s));a=a.next}while(n);lo=!1}}function k8(){Y2=ao=!1;var e=0;Hn!==0&&(T8()&&(e=Hn),Hn=0);for(var t=It(),n=null,a=G2;a!==null;){var l=a.next,s=I7(a,t);s===0?(a.next=null,n===null?G2=l:n.next=l,l===null&&(ga=n)):(n=a,(e!==0||(s&3)!==0)&&(Y2=!0)),a=l}Cl(e)}function I7(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-ht(s),h=1<<d,y=l[d];y===-1?((h&n)===0||(h&a)!==0)&&(l[d]=F3(h,t)):y<=t&&(e.expiredLanes|=h),s&=~h}if(t=ve,n=le,n=e2(e,e===t?n:0),a=e.callbackNode,n===0||e===t&&pe===2||e.cancelPendingCommit!==null)return a!==null&&a!==null&&mi(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||$a(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&mi(a),lr(n)){case 2:case 8:n=Io;break;case 32:n=Wl;break;case 268435456:n=Po;break;default:n=Wl}return a=P7.bind(null,e),n=Ci(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&mi(a),e.callbackPriority=2,e.callbackNode=null,2}function P7(e,t){var n=e.callbackNode;if(pa()&&e.callbackNode!==n)return null;var a=le;return a=e2(e,e===ve?a:0),a===0?null:(q7(e,a,t),I7(e,It()),e.callbackNode!=null&&e.callbackNode===n?P7.bind(null,e):null)}function e0(e,t){if(pa())return null;q7(e,t,!0)}function S8(e){U8(function(){(me&6)!==0?Ci(Wo,e):e()})}function io(){return Hn===0&&(Hn=er()),Hn}function t0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:i2(""+e)}function n0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function E8(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var s=t0((l[it]||null).action),d=a.submitter;d&&(t=(t=d[it]||null)?t0(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var h=new c2("action","action",null,a,l);e.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Hn!==0){var y=d?n0(l,d):new FormData(l);ys(n,{pending:!0,data:y,method:l.method,action:s},null,y)}}else typeof s=="function"&&(h.preventDefault(),y=d?n0(l,d):new FormData(l),ys(n,{pending:!0,data:y,method:l.method,action:s},s,y))},currentTarget:l}]})}}for(var so=0;so<Kr.length;so++){var oo=Kr[so],z8=oo.toLowerCase(),A8=oo[0].toUpperCase()+oo.slice(1);jt(z8,"on"+A8)}jt(jr,"onAnimationEnd"),jt(Gr,"onAnimationIteration"),jt(Yr,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt(Yc,"onTransitionRun"),jt(Xc,"onTransitionStart"),jt(Qc,"onTransitionCancel"),jt(Xr,"onTransitionEnd"),Gn("onMouseEnter",["mouseout","mouseover"]),Gn("onMouseLeave",["mouseout","mouseover"]),Gn("onPointerEnter",["pointerout","pointerover"]),Gn("onPointerLeave",["pointerout","pointerover"]),fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fn("onBeforeInput",["compositionend","keypress","textInput","paste"]),fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D8=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ml));function a0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var d=a.length-1;0<=d;d--){var h=a[d],y=h.instance,_=h.currentTarget;if(h=h.listener,y!==s&&l.isPropagationStopped())break e;s=h,l.currentTarget=_;try{s(l)}catch(E){L2(E)}l.currentTarget=null,s=y}else for(d=0;d<a.length;d++){if(h=a[d],y=h.instance,_=h.currentTarget,h=h.listener,y!==s&&l.isPropagationStopped())break e;s=h,l.currentTarget=_;try{s(l)}catch(E){L2(E)}l.currentTarget=null,s=y}}}}function te(e,t){var n=t[wi];n===void 0&&(n=t[wi]=new Set);var a=e+"__bubble";n.has(a)||(l0(t,e,2,!1),n.add(a))}function ro(e,t,n){var a=0;t&&(a|=4),l0(n,e,a,t)}var X2="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[X2]){e[X2]=!0,or.forEach(function(n){n!=="selectionchange"&&(D8.has(n)||ro(n,!1,e),ro(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[X2]||(t[X2]=!0,ro("selectionchange",!1,t))}}function l0(e,t,n,a){switch(z0(t)){case 2:var l=t4;break;case 8:l=n4;break;default:l=wo}n=l.bind(null,t,n,e),l=void 0,!Li||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function uo(e,t,n,a,l){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var h=a.stateNode.containerInfo;if(h===l||h.nodeType===8&&h.parentNode===l)break;if(d===4)for(d=a.return;d!==null;){var y=d.tag;if((y===3||y===4)&&(y=d.stateNode.containerInfo,y===l||y.nodeType===8&&y.parentNode===l))return;d=d.return}for(;h!==null;){if(d=hn(h),d===null)return;if(y=d.tag,y===5||y===6||y===26||y===27){a=s=d;continue e}h=h.parentNode}}a=a.return}_r(function(){var _=s,E=Di(n),D=[];e:{var w=Qr.get(e);if(w!==void 0){var S=c2,V=e;switch(e){case"keypress":if(o2(n)===0)break e;case"keydown":case"keyup":S=xc;break;case"focusin":V="focus",S=Ui;break;case"focusout":V="blur",S=Ui;break;case"beforeblur":case"afterblur":S=Ui;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=xr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=uc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Sc;break;case jr:case Gr:case Yr:S=fc;break;case Xr:S=zc;break;case"scroll":case"scrollend":S=rc;break;case"wheel":S=Dc;break;case"copy":case"cut":case"paste":S=vc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=kr;break;case"toggle":case"beforetoggle":S=Lc}var Q=(t&4)!==0,Se=!Q&&(e==="scroll"||e==="scrollend"),C=Q?w!==null?w+"Capture":null:w;Q=[];for(var b=_,m;b!==null;){var z=b;if(m=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||m===null||C===null||(z=qa(b,C),z!=null&&Q.push(xl(b,z,m))),Se)break;b=b.return}0<Q.length&&(w=new S(w,V,null,n,E),D.push({event:w,listeners:Q}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",w&&n!==Ai&&(V=n.relatedTarget||n.fromElement)&&(hn(V)||V[Bn]))break e;if((S||w)&&(w=E.window===E?E:(w=E.ownerDocument)?w.defaultView||w.parentWindow:window,S?(V=n.relatedTarget||n.toElement,S=_,V=V?hn(V):null,V!==null&&(Se=Y(V),Q=V.tag,V!==Se||Q!==5&&Q!==27&&Q!==6)&&(V=null)):(S=null,V=_),S!==V)){if(Q=xr,z="onMouseLeave",C="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(Q=kr,z="onPointerLeave",C="onPointerEnter",b="pointer"),Se=S==null?w:Ra(S),m=V==null?w:Ra(V),w=new Q(z,b+"leave",S,n,E),w.target=Se,w.relatedTarget=m,z=null,hn(E)===_&&(Q=new Q(C,b+"enter",V,n,E),Q.target=m,Q.relatedTarget=Se,z=Q),Se=z,S&&V)t:{for(Q=S,C=V,b=0,m=Q;m;m=ba(m))b++;for(m=0,z=C;z;z=ba(z))m++;for(;0<b-m;)Q=ba(Q),b--;for(;0<m-b;)C=ba(C),m--;for(;b--;){if(Q===C||C!==null&&Q===C.alternate)break t;Q=ba(Q),C=ba(C)}Q=null}else Q=null;S!==null&&i0(D,w,S,Q,!1),V!==null&&Se!==null&&i0(D,Se,V,Q,!0)}}e:{if(w=_?Ra(_):window,S=w.nodeName&&w.nodeName.toLowerCase(),S==="select"||S==="input"&&w.type==="file")var $=Hr;else if(Mr(w))if(Tr)$=Bc;else{$=Rc;var P=Nc}else S=w.nodeName,!S||S.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?_&&zi(_.elementType)&&($=Hr):$=qc;if($&&($=$(e,_))){Lr(D,$,n,E);break e}P&&P(e,w,_),e==="focusout"&&_&&w.type==="number"&&_.memoizedProps.value!=null&&Ei(w,"number",w.value)}switch(P=_?Ra(_):window,e){case"focusin":(Mr(P)||P.contentEditable==="true")&&(Fn=P,Bi=_,Ka=null);break;case"focusout":Ka=Bi=Fn=null;break;case"mousedown":Zi=!0;break;case"contextmenu":case"mouseup":case"dragend":Zi=!1,Br(D,n,E);break;case"selectionchange":if(Gc)break;case"keydown":case"keyup":Br(D,n,E)}var N;if(Vi)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else Jn?Ar(e,n)&&(B="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(Sr&&n.locale!=="ko"&&(Jn||B!=="onCompositionStart"?B==="onCompositionEnd"&&Jn&&(N=Cr()):($1=E,Hi="value"in $1?$1.value:$1.textContent,Jn=!0)),P=Q2(_,B),0<P.length&&(B=new wr(B,e,null,n,E),D.push({event:B,listeners:P}),N?B.data=N:(N=Dr(n),N!==null&&(B.data=N)))),(N=Tc?Oc(e,n):Uc(e,n))&&(B=Q2(_,"onBeforeInput"),0<B.length&&(P=new wr("onBeforeInput","beforeinput",null,n,E),D.push({event:P,listeners:B}),P.data=N)),E8(D,e,_,n,E)}a0(D,t)})}function xl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Q2(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,s=l.stateNode;l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=qa(e,n),l!=null&&a.unshift(xl(e,l,s)),l=qa(e,t),l!=null&&a.push(xl(e,l,s))),e=e.return}return a}function ba(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function i0(e,t,n,a,l){for(var s=t._reactName,d=[];n!==null&&n!==a;){var h=n,y=h.alternate,_=h.stateNode;if(h=h.tag,y!==null&&y===a)break;h!==5&&h!==26&&h!==27||_===null||(y=_,l?(_=qa(n,s),_!=null&&d.unshift(xl(n,_,y))):l||(_=qa(n,s),_!=null&&d.push(xl(n,_,y)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var M8=/\r\n?/g,L8=/\u0000|\uFFFD/g;function s0(e){return(typeof e=="string"?e:""+e).replace(M8,`
`).replace(L8,"")}function o0(e,t){return t=s0(t),s0(e)===t}function K2(){}function he(e,t,n,a,l,s){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Xn(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Xn(e,""+a);break;case"className":n2(e,"class",a);break;case"tabIndex":n2(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":n2(e,n,a);break;case"style":gr(e,a,s);break;case"data":if(t!=="object"){n2(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=i2(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&he(e,t,"name",l.name,l,null),he(e,t,"formEncType",l.formEncType,l,null),he(e,t,"formMethod",l.formMethod,l,null),he(e,t,"formTarget",l.formTarget,l,null)):(he(e,t,"encType",l.encType,l,null),he(e,t,"method",l.method,l,null),he(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=i2(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=K2);break;case"onScroll":a!=null&&te("scroll",e);break;case"onScrollEnd":a!=null&&te("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=i2(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":te("beforetoggle",e),te("toggle",e),t2(e,"popover",a);break;case"xlinkActuate":d1(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":d1(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":d1(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":d1(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":d1(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":d1(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":d1(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":d1(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":d1(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":t2(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=sc.get(n)||n,t2(e,n,a))}}function ho(e,t,n,a,l,s){switch(n){case"style":gr(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Xn(e,a):(typeof a=="number"||typeof a=="bigint")&&Xn(e,""+a);break;case"onScroll":a!=null&&te("scroll",e);break;case"onScrollEnd":a!=null&&te("scrollend",e);break;case"onClick":a!=null&&(e.onclick=K2);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rr.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),s=e[it]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,l),typeof a=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):t2(e,n,a)}}}function Xe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":te("error",e),te("load",e);var a=!1,l=!1,s;for(s in n)if(n.hasOwnProperty(s)){var d=n[s];if(d!=null)switch(s){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:he(e,t,s,d,n,null)}}l&&he(e,t,"srcSet",n.srcSet,n,null),a&&he(e,t,"src",n.src,n,null);return;case"input":te("invalid",e);var h=s=d=l=null,y=null,_=null;for(a in n)if(n.hasOwnProperty(a)){var E=n[a];if(E!=null)switch(a){case"name":l=E;break;case"type":d=E;break;case"checked":y=E;break;case"defaultChecked":_=E;break;case"value":s=E;break;case"defaultValue":h=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(c(137,t));break;default:he(e,t,a,E,n,null)}}fr(e,s,h,y,_,d,l,!1),a2(e);return;case"select":te("invalid",e),a=d=s=null;for(l in n)if(n.hasOwnProperty(l)&&(h=n[l],h!=null))switch(l){case"value":s=h;break;case"defaultValue":d=h;break;case"multiple":a=h;default:he(e,t,l,h,n,null)}t=s,n=d,e.multiple=!!a,t!=null?Yn(e,!!a,t,!1):n!=null&&Yn(e,!!a,n,!0);return;case"textarea":te("invalid",e),s=l=a=null;for(d in n)if(n.hasOwnProperty(d)&&(h=n[d],h!=null))switch(d){case"value":a=h;break;case"defaultValue":l=h;break;case"children":s=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(c(91));break;default:he(e,t,d,h,n,null)}vr(e,a,l,s),a2(e);return;case"option":for(y in n)if(n.hasOwnProperty(y)&&(a=n[y],a!=null))switch(y){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:he(e,t,y,a,n,null)}return;case"dialog":te("cancel",e),te("close",e);break;case"iframe":case"object":te("load",e);break;case"video":case"audio":for(a=0;a<ml.length;a++)te(ml[a],e);break;case"image":te("error",e),te("load",e);break;case"details":te("toggle",e);break;case"embed":case"source":case"link":te("error",e),te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in n)if(n.hasOwnProperty(_)&&(a=n[_],a!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:he(e,t,_,a,n,null)}return;default:if(zi(t)){for(E in n)n.hasOwnProperty(E)&&(a=n[E],a!==void 0&&ho(e,t,E,a,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null&&he(e,t,h,a,n,null))}function H8(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,d=null,h=null,y=null,_=null,E=null;for(S in n){var D=n[S];if(n.hasOwnProperty(S)&&D!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":y=D;default:a.hasOwnProperty(S)||he(e,t,S,null,a,D)}}for(var w in a){var S=a[w];if(D=n[w],a.hasOwnProperty(w)&&(S!=null||D!=null))switch(w){case"type":s=S;break;case"name":l=S;break;case"checked":_=S;break;case"defaultChecked":E=S;break;case"value":d=S;break;case"defaultValue":h=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(c(137,t));break;default:S!==D&&he(e,t,w,S,a,D)}}Si(e,d,h,y,_,E,s,l);return;case"select":S=d=h=w=null;for(s in n)if(y=n[s],n.hasOwnProperty(s)&&y!=null)switch(s){case"value":break;case"multiple":S=y;default:a.hasOwnProperty(s)||he(e,t,s,null,a,y)}for(l in a)if(s=a[l],y=n[l],a.hasOwnProperty(l)&&(s!=null||y!=null))switch(l){case"value":w=s;break;case"defaultValue":h=s;break;case"multiple":d=s;default:s!==y&&he(e,t,l,s,a,y)}t=h,n=d,a=S,w!=null?Yn(e,!!n,w,!1):!!a!=!!n&&(t!=null?Yn(e,!!n,t,!0):Yn(e,!!n,n?[]:"",!1));return;case"textarea":S=w=null;for(h in n)if(l=n[h],n.hasOwnProperty(h)&&l!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:he(e,t,h,null,a,l)}for(d in a)if(l=a[d],s=n[d],a.hasOwnProperty(d)&&(l!=null||s!=null))switch(d){case"value":w=l;break;case"defaultValue":S=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==s&&he(e,t,d,l,a,s)}yr(e,w,S);return;case"option":for(var V in n)if(w=n[V],n.hasOwnProperty(V)&&w!=null&&!a.hasOwnProperty(V))switch(V){case"selected":e.selected=!1;break;default:he(e,t,V,null,a,w)}for(y in a)if(w=a[y],S=n[y],a.hasOwnProperty(y)&&w!==S&&(w!=null||S!=null))switch(y){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:he(e,t,y,w,a,S)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in n)w=n[Q],n.hasOwnProperty(Q)&&w!=null&&!a.hasOwnProperty(Q)&&he(e,t,Q,null,a,w);for(_ in a)if(w=a[_],S=n[_],a.hasOwnProperty(_)&&w!==S&&(w!=null||S!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(c(137,t));break;default:he(e,t,_,w,a,S)}return;default:if(zi(t)){for(var Se in n)w=n[Se],n.hasOwnProperty(Se)&&w!==void 0&&!a.hasOwnProperty(Se)&&ho(e,t,Se,void 0,a,w);for(E in a)w=a[E],S=n[E],!a.hasOwnProperty(E)||w===S||w===void 0&&S===void 0||ho(e,t,E,w,a,S);return}}for(var C in n)w=n[C],n.hasOwnProperty(C)&&w!=null&&!a.hasOwnProperty(C)&&he(e,t,C,null,a,w);for(D in a)w=a[D],S=n[D],!a.hasOwnProperty(D)||w===S||w==null&&S==null||he(e,t,D,w,a,S)}var fo=null,yo=null;function J2(e){return e.nodeType===9?e:e.ownerDocument}function r0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function vo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var po=null;function T8(){var e=window.event;return e&&e.type==="popstate"?e===po?!1:(po=e,!0):(po=null,!1)}var u0=typeof setTimeout=="function"?setTimeout:void 0,O8=typeof clearTimeout=="function"?clearTimeout:void 0,d0=typeof Promise=="function"?Promise:void 0,U8=typeof queueMicrotask=="function"?queueMicrotask:typeof d0<"u"?function(e){return d0.resolve(null).then(e).catch($8)}:u0;function $8(e){setTimeout(function(){throw e})}function go(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(a===0){e.removeChild(l),Ml(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=l}while(n);Ml(t)}function bo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":bo(n),ki(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function V8(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Na])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Xt(e.nextSibling),e===null)break}return null}function N8(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Xt(e.nextSibling),e===null))return null;return e}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function h0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function f0(e,t,n){switch(t=J2(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}var $t=new Map,y0=new Set;function F2(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var E1=U.d;U.d={f:R8,r:q8,D:B8,C:Z8,L:j8,m:G8,X:X8,S:Y8,M:Q8};function R8(){var e=E1.f(),t=Z2();return e||t}function q8(e){var t=Zn(e);t!==null&&t.tag===5&&t.type==="form"?B5(t):E1.r(e)}var _a=typeof document>"u"?null:document;function v0(e,t,n){var a=_a;if(a&&typeof t=="string"&&t){var l=Et(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),y0.has(l)||(y0.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Xe(t,"link",e),Re(t),a.head.appendChild(t)))}}function B8(e){E1.D(e),v0("dns-prefetch",e,null)}function Z8(e,t){E1.C(e,t),v0("preconnect",e,t)}function j8(e,t,n){E1.L(e,t,n);var a=_a;if(a&&e&&t){var l='link[rel="preload"][as="'+Et(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Et(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Et(n.imageSizes)+'"]')):l+='[href="'+Et(e)+'"]';var s=l;switch(t){case"style":s=Ca(e);break;case"script":s=ma(e)}$t.has(s)||(e=re({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),$t.set(s,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(wl(s))||t==="script"&&a.querySelector(kl(s))||(t=a.createElement("link"),Xe(t,"link",e),Re(t),a.head.appendChild(t)))}}function G8(e,t){E1.m(e,t);var n=_a;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Et(a)+'"][href="'+Et(e)+'"]',s=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=ma(e)}if(!$t.has(s)&&(e=re({rel:"modulepreload",href:e},t),$t.set(s,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(kl(s)))return}a=n.createElement("link"),Xe(a,"link",e),Re(a),n.head.appendChild(a)}}}function Y8(e,t,n){E1.S(e,t,n);var a=_a;if(a&&e){var l=jn(a).hoistableStyles,s=Ca(e);t=t||"default";var d=l.get(s);if(!d){var h={loading:0,preload:null};if(d=a.querySelector(wl(s)))h.loading=5;else{e=re({rel:"stylesheet",href:e,"data-precedence":t},n),(n=$t.get(s))&&_o(e,n);var y=d=a.createElement("link");Re(y),Xe(y,"link",e),y._p=new Promise(function(_,E){y.onload=_,y.onerror=E}),y.addEventListener("load",function(){h.loading|=1}),y.addEventListener("error",function(){h.loading|=2}),h.loading|=4,W2(d,t,a)}d={type:"stylesheet",instance:d,count:1,state:h},l.set(s,d)}}}function X8(e,t){E1.X(e,t);var n=_a;if(n&&e){var a=jn(n).hoistableScripts,l=ma(e),s=a.get(l);s||(s=n.querySelector(kl(l)),s||(e=re({src:e,async:!0},t),(t=$t.get(l))&&Co(e,t),s=n.createElement("script"),Re(s),Xe(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(l,s))}}function Q8(e,t){E1.M(e,t);var n=_a;if(n&&e){var a=jn(n).hoistableScripts,l=ma(e),s=a.get(l);s||(s=n.querySelector(kl(l)),s||(e=re({src:e,async:!0,type:"module"},t),(t=$t.get(l))&&Co(e,t),s=n.createElement("script"),Re(s),Xe(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(l,s))}}function p0(e,t,n,a){var l=(l=T1.current)?F2(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ca(n.href),n=jn(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ca(n.href);var s=jn(l).hoistableStyles,d=s.get(e);if(d||(l=l.ownerDocument||l,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=l.querySelector(wl(e)))&&!s._p&&(d.instance=s,d.state.loading=5),$t.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},$t.set(e,n),s||K8(l,e,n,d.state))),t&&a===null)throw Error(c(528,""));return d}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ma(n),n=jn(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ca(e){return'href="'+Et(e)+'"'}function wl(e){return'link[rel="stylesheet"]['+e+"]"}function g0(e){return re({},e,{"data-precedence":e.precedence,precedence:null})}function K8(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Xe(t,"link",n),Re(t),e.head.appendChild(t))}function ma(e){return'[src="'+Et(e)+'"]'}function kl(e){return"script[async]"+e}function b0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Et(n.href)+'"]');if(a)return t.instance=a,Re(a),a;var l=re({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Re(a),Xe(a,"style",l),W2(a,n.precedence,e),t.instance=a;case"stylesheet":l=Ca(n.href);var s=e.querySelector(wl(l));if(s)return t.state.loading|=4,t.instance=s,Re(s),s;a=g0(n),(l=$t.get(l))&&_o(a,l),s=(e.ownerDocument||e).createElement("link"),Re(s);var d=s;return d._p=new Promise(function(h,y){d.onload=h,d.onerror=y}),Xe(s,"link",a),t.state.loading|=4,W2(s,n.precedence,e),t.instance=s;case"script":return s=ma(n.src),(l=e.querySelector(kl(s)))?(t.instance=l,Re(l),l):(a=n,(l=$t.get(s))&&(a=re({},n),Co(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Re(l),Xe(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,W2(a,n.precedence,e));return t.instance}function W2(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,s=l,d=0;d<a.length;d++){var h=a[d];if(h.dataset.precedence===t)s=h;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function _o(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Co(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var I2=null;function _0(e,t,n){if(I2===null){var a=new Map,l=I2=new Map;l.set(n,a)}else l=I2,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var s=n[l];if(!(s[Na]||s[Ke]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var h=a.get(d);h?h.push(s):a.set(d,[s])}}return a}function C0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function J8(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function m0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Sl=null;function F8(){}function W8(e,t,n){if(Sl===null)throw Error(c(475));var a=Sl;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Ca(n.href),s=e.querySelector(wl(l));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=P2.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=s,Re(s);return}s=e.ownerDocument||e,n=g0(n),(l=$t.get(l))&&_o(n,l),s=s.createElement("link"),Re(s);var d=s;d._p=new Promise(function(h,y){d.onload=h,d.onerror=y}),Xe(s,"link",n),t.instance=s}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=P2.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function I8(){if(Sl===null)throw Error(c(475));var e=Sl;return e.stylesheets&&e.count===0&&mo(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&mo(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function P2(){if(this.count--,this.count===0){if(this.stylesheets)mo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ei=null;function mo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ei=new Map,t.forEach(P8,e),ei=null,P2.call(e))}function P8(e,t){if(!(t.state.loading&4)){var n=ei.get(e);if(n)var a=n.get(null);else{n=new Map,ei.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var d=l[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),a=d)}a&&n.set(null,a)}l=t.instance,d=l.getAttribute("data-precedence"),s=n.get(d)||a,s===a&&n.set(null,l),n.set(d,l),this.count++,a=P2.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var El={$$typeof:R,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function e4(e,t,n,a,l,s,d,h){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xi(0),this.hiddenUpdates=xi(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function x0(e,t,n,a,l,s,d,h,y,_,E,D){return e=new e4(e,t,n,d,h,y,_,D),t=1,s===!0&&(t|=24),s=Ot(3,null,null,t),e.current=s,s.stateNode=e,t=Ii(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:n,cache:t},Hs(s),e}function w0(e){return e?(e=Pn,e):Pn}function k0(e,t,n,a,l,s){l=w0(l),a.context===null?a.context=l:a.pendingContext=l,a=G1(t),a.payload={element:n},s=s===void 0?null:s,s!==null&&(a.callback=s),n=Y1(e,a,t),n!==null&&(et(n,e,t),cl(n,e,t))}function S0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xo(e,t){S0(e,t),(e=e.alternate)&&S0(e,t)}function E0(e){if(e.tag===13){var t=V1(e,67108864);t!==null&&et(t,e,67108864),xo(e,67108864)}}var ti=!0;function t4(e,t,n,a){var l=Z.T;Z.T=null;var s=U.p;try{U.p=2,wo(e,t,n,a)}finally{U.p=s,Z.T=l}}function n4(e,t,n,a){var l=Z.T;Z.T=null;var s=U.p;try{U.p=8,wo(e,t,n,a)}finally{U.p=s,Z.T=l}}function wo(e,t,n,a){if(ti){var l=ko(a);if(l===null)uo(e,t,a,ni,n),A0(e,a);else if(l4(l,e,t,n,a))a.stopPropagation();else if(A0(e,a),t&4&&-1<a4.indexOf(e)){for(;l!==null;){var s=Zn(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=dn(s.pendingLanes);if(d!==0){var h=s;for(h.pendingLanes|=2,h.entangledLanes|=2;d;){var y=1<<31-ht(d);h.entanglements[1]|=y,d&=~y}a1(s),(me&6)===0&&(R2=It()+500,Cl(0))}}break;case 13:h=V1(s,2),h!==null&&et(h,s,2),Z2(),xo(s,2)}if(s=ko(a),s===null&&uo(e,t,a,ni,n),s===l)break;l=s}l!==null&&a.stopPropagation()}else uo(e,t,a,null,n)}}function ko(e){return e=Di(e),So(e)}var ni=null;function So(e){if(ni=null,e=hn(e),e!==null){var t=Y(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=ye(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ni=e,null}function z0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z3()){case Wo:return 2;case Io:return 8;case Wl:case j3:return 32;case Po:return 268435456;default:return 32}default:return 32}}var Eo=!1,I1=null,P1=null,en=null,zl=new Map,Al=new Map,tn=[],a4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function A0(e,t){switch(e){case"focusin":case"focusout":I1=null;break;case"dragenter":case"dragleave":P1=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":zl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Al.delete(t.pointerId)}}function Dl(e,t,n,a,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[l]},t!==null&&(t=Zn(t),t!==null&&E0(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function l4(e,t,n,a,l){switch(t){case"focusin":return I1=Dl(I1,e,t,n,a,l),!0;case"dragenter":return P1=Dl(P1,e,t,n,a,l),!0;case"mouseover":return en=Dl(en,e,t,n,a,l),!0;case"pointerover":var s=l.pointerId;return zl.set(s,Dl(zl.get(s)||null,e,t,n,a,l)),!0;case"gotpointercapture":return s=l.pointerId,Al.set(s,Dl(Al.get(s)||null,e,t,n,a,l)),!0}return!1}function D0(e){var t=hn(e.target);if(t!==null){var n=Y(t);if(n!==null){if(t=n.tag,t===13){if(t=ye(n),t!==null){e.blockedOn=t,I3(e.priority,function(){if(n.tag===13){var a=gt(),l=V1(n,a);l!==null&&et(l,n,a),xo(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ko(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Ai=a,n.target.dispatchEvent(a),Ai=null}else return t=Zn(n),t!==null&&E0(t),e.blockedOn=n,!1;t.shift()}return!0}function M0(e,t,n){ai(e)&&n.delete(t)}function i4(){Eo=!1,I1!==null&&ai(I1)&&(I1=null),P1!==null&&ai(P1)&&(P1=null),en!==null&&ai(en)&&(en=null),zl.forEach(M0),Al.forEach(M0)}function li(e,t){e.blockedOn===t&&(e.blockedOn=null,Eo||(Eo=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,i4)))}var ii=null;function L0(e){ii!==e&&(ii=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ii===e&&(ii=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(So(a||n)===null)continue;break}var s=Zn(n);s!==null&&(e.splice(t,3),t-=3,ys(s,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function Ml(e){function t(y){return li(y,e)}I1!==null&&li(I1,e),P1!==null&&li(P1,e),en!==null&&li(en,e),zl.forEach(t),Al.forEach(t);for(var n=0;n<tn.length;n++){var a=tn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)D0(n),n.blockedOn===null&&tn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],s=n[a+1],d=l[it]||null;if(typeof s=="function")d||L0(n);else if(d){var h=null;if(s&&s.hasAttribute("formAction")){if(l=s,d=s[it]||null)h=d.formAction;else if(So(l)!==null)continue}else h=d.action;typeof h=="function"?n[a+1]=h:(n.splice(a,3),a-=3),L0(n)}}}function zo(e){this._internalRoot=e}si.prototype.render=zo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=gt();k0(n,a,e,t,null,null)},si.prototype.unmount=zo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&pa(),k0(e.current,2,null,e,null,null),Z2(),t[Bn]=null}};function si(e){this._internalRoot=e}si.prototype.unstable_scheduleHydration=function(e){if(e){var t=ir();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&D0(e)}};var H0=i.version;if(H0!=="19.0.0")throw Error(c(527,H0,"19.0.0"));U.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=M(t),e=e!==null?j(e):null,e=e===null?null:e.stateNode,e};var s4={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:Z,findFiberByHostInstance:hn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oi.isDisabled&&oi.supportsFiber)try{Ua=oi.inject(s4),dt=oi}catch{}}return Hl.createRoot=function(e,t){if(!u(e))throw Error(c(299));var n=!1,a="",l=J5,s=F5,d=W5,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=x0(e,1,!1,null,null,n,a,l,s,d,h,null),e[Bn]=t.current,co(e.nodeType===8?e.parentNode:e),new zo(t)},Hl.hydrateRoot=function(e,t,n){if(!u(e))throw Error(c(299));var a=!1,l="",s=J5,d=F5,h=W5,y=null,_=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(y=n.unstable_transitionCallbacks),n.formState!==void 0&&(_=n.formState)),t=x0(e,1,!0,t,n??null,a,l,s,d,h,y,_),t.context=w0(null),n=t.current,a=gt(),l=G1(a),l.callback=null,Y1(n,l,a),t.current.lanes=a,Va(t,a),a1(t),e[Bn]=t.current,co(e),new si(t)},Hl.version="19.0.0",Hl}var Z0;function _4(){if(Z0)return Mo.exports;Z0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(i){console.error(i)}}return r(),Mo.exports=b4(),Mo.exports}var C4=_4();/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m4=new Set(["children","localName","ref","style","className"]),j0=new WeakMap,G0=(r,i,o,c,u)=>{const f=u==null?void 0:u[i];f===void 0?(r[i]=o,o==null&&i in HTMLElement.prototype&&r.removeAttribute(i)):o!==c&&((v,A,k)=>{let x=j0.get(v);x===void 0&&j0.set(v,x=new Map);let H=x.get(A);k!==void 0?H===void 0?(x.set(A,H={handleEvent:k}),v.addEventListener(A,H)):H.handleEvent=k:H!==void 0&&(x.delete(A),v.removeEventListener(A,H))})(r,f,o)},_e=({react:r,tagName:i,elementClass:o,events:c,displayName:u})=>{const f=new Set(Object.keys(c??{})),v=r.forwardRef((A,k)=>{const x=r.useRef(new Map),H=r.useRef(null),O={},G={};for(const[R,I]of Object.entries(A))m4.has(R)?O[R==="className"?"class":R]=I:f.has(R)||R in o.prototype?G[R]=I:O[R]=I;return r.useLayoutEffect(()=>{if(H.current===null)return;const R=new Map;for(const I in G)G0(H.current,I,A[I],x.current.get(I),c),x.current.delete(I),R.set(I,A[I]);for(const[I,nt]of x.current)G0(H.current,I,void 0,nt,c);x.current=R}),r.useLayoutEffect(()=>{var R;(R=H.current)==null||R.removeAttribute("defer-hydration")},[]),O.suppressHydrationWarning=!0,r.createElement(i,{...O,ref:r.useCallback(R=>{H.current=R,typeof k=="function"?k(R):k!==null&&(k.current=R)},[k])})});return v.displayName=u??o.name,v};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ri=globalThis,jo=ri.ShadowRoot&&(ri.ShadyCSS===void 0||ri.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Go=Symbol(),Y0=new WeakMap;let l3=class{constructor(i,o,c){if(this._$cssResult$=!0,c!==Go)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=o}get styleSheet(){let i=this.o;const o=this.t;if(jo&&i===void 0){const c=o!==void 0&&o.length===1;c&&(i=Y0.get(o)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),c&&Y0.set(o,i))}return i}toString(){return this.cssText}};const x4=r=>new l3(typeof r=="string"?r:r+"",void 0,Go),xe=(r,...i)=>{const o=r.length===1?r[0]:i.reduce((c,u,f)=>c+(v=>{if(v._$cssResult$===!0)return v.cssText;if(typeof v=="number")return v;throw Error("Value passed to 'css' function must be a 'css' function result: "+v+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(u)+r[f+1],r[0]);return new l3(o,r,Go)},w4=(r,i)=>{if(jo)r.adoptedStyleSheets=i.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of i){const c=document.createElement("style"),u=ri.litNonce;u!==void 0&&c.setAttribute("nonce",u),c.textContent=o.cssText,r.appendChild(c)}},X0=jo?r=>r:r=>r instanceof CSSStyleSheet?(i=>{let o="";for(const c of i.cssRules)o+=c.cssText;return x4(o)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:k4,defineProperty:S4,getOwnPropertyDescriptor:E4,getOwnPropertyNames:z4,getOwnPropertySymbols:A4,getPrototypeOf:D4}=Object,on=globalThis,Q0=on.trustedTypes,M4=Q0?Q0.emptyScript:"",Oo=on.reactiveElementPolyfillSupport,Vl=(r,i)=>r,ci={toAttribute(r,i){switch(i){case Boolean:r=r?M4:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,i){let o=r;switch(i){case Boolean:o=r!==null;break;case Number:o=r===null?null:Number(r);break;case Object:case Array:try{o=JSON.parse(r)}catch{o=null}}return o}},Yo=(r,i)=>!k4(r,i),K0={attribute:!0,type:String,converter:ci,reflect:!1,hasChanged:Yo};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),on.litPropertyMetadata??(on.litPropertyMetadata=new WeakMap);class Aa extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??(this.l=[])).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,o=K0){if(o.state&&(o.attribute=!1),this._$Ei(),this.elementProperties.set(i,o),!o.noAccessor){const c=Symbol(),u=this.getPropertyDescriptor(i,c,o);u!==void 0&&S4(this.prototype,i,u)}}static getPropertyDescriptor(i,o,c){const{get:u,set:f}=E4(this.prototype,i)??{get(){return this[o]},set(v){this[o]=v}};return{get(){return u==null?void 0:u.call(this)},set(v){const A=u==null?void 0:u.call(this);f.call(this,v),this.requestUpdate(i,A,c)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??K0}static _$Ei(){if(this.hasOwnProperty(Vl("elementProperties")))return;const i=D4(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(Vl("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Vl("properties"))){const o=this.properties,c=[...z4(o),...A4(o)];for(const u of c)this.createProperty(u,o[u])}const i=this[Symbol.metadata];if(i!==null){const o=litPropertyMetadata.get(i);if(o!==void 0)for(const[c,u]of o)this.elementProperties.set(c,u)}this._$Eh=new Map;for(const[o,c]of this.elementProperties){const u=this._$Eu(o,c);u!==void 0&&this._$Eh.set(u,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){const o=[];if(Array.isArray(i)){const c=new Set(i.flat(1/0).reverse());for(const u of c)o.unshift(X0(u))}else i!==void 0&&o.push(X0(i));return o}static _$Eu(i,o){const c=o.attribute;return c===!1?void 0:typeof c=="string"?c:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var i;this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),(i=this.constructor.l)==null||i.forEach(o=>o(this))}addController(i){var o;(this._$EO??(this._$EO=new Set)).add(i),this.renderRoot!==void 0&&this.isConnected&&((o=i.hostConnected)==null||o.call(i))}removeController(i){var o;(o=this._$EO)==null||o.delete(i)}_$E_(){const i=new Map,o=this.constructor.elementProperties;for(const c of o.keys())this.hasOwnProperty(c)&&(i.set(c,this[c]),delete this[c]);i.size>0&&(this._$Ep=i)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return w4(i,this.constructor.elementStyles),i}connectedCallback(){var i;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$EO)==null||i.forEach(o=>{var c;return(c=o.hostConnected)==null?void 0:c.call(o)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$EO)==null||i.forEach(o=>{var c;return(c=o.hostDisconnected)==null?void 0:c.call(o)})}attributeChangedCallback(i,o,c){this._$AK(i,c)}_$EC(i,o){var f;const c=this.constructor.elementProperties.get(i),u=this.constructor._$Eu(i,c);if(u!==void 0&&c.reflect===!0){const v=(((f=c.converter)==null?void 0:f.toAttribute)!==void 0?c.converter:ci).toAttribute(o,c.type);this._$Em=i,v==null?this.removeAttribute(u):this.setAttribute(u,v),this._$Em=null}}_$AK(i,o){var f;const c=this.constructor,u=c._$Eh.get(i);if(u!==void 0&&this._$Em!==u){const v=c.getPropertyOptions(u),A=typeof v.converter=="function"?{fromAttribute:v.converter}:((f=v.converter)==null?void 0:f.fromAttribute)!==void 0?v.converter:ci;this._$Em=u,this[u]=A.fromAttribute(o,v.type),this._$Em=null}}requestUpdate(i,o,c){if(i!==void 0){if(c??(c=this.constructor.getPropertyOptions(i)),!(c.hasChanged??Yo)(this[i],o))return;this.P(i,o,c)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(i,o,c){this._$AL.has(i)||this._$AL.set(i,o),c.reflect===!0&&this._$Em!==i&&(this._$Ej??(this._$Ej=new Set)).add(i)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var c;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[f,v]of this._$Ep)this[f]=v;this._$Ep=void 0}const u=this.constructor.elementProperties;if(u.size>0)for(const[f,v]of u)v.wrapped!==!0||this._$AL.has(f)||this[f]===void 0||this.P(f,this[f],v)}let i=!1;const o=this._$AL;try{i=this.shouldUpdate(o),i?(this.willUpdate(o),(c=this._$EO)==null||c.forEach(u=>{var f;return(f=u.hostUpdate)==null?void 0:f.call(u)}),this.update(o)):this._$EU()}catch(u){throw i=!1,this._$EU(),u}i&&this._$AE(o)}willUpdate(i){}_$AE(i){var o;(o=this._$EO)==null||o.forEach(c=>{var u;return(u=c.hostUpdated)==null?void 0:u.call(c)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Ej&&(this._$Ej=this._$Ej.forEach(o=>this._$EC(o,this[o]))),this._$EU()}updated(i){}firstUpdated(i){}}Aa.elementStyles=[],Aa.shadowRootOptions={mode:"open"},Aa[Vl("elementProperties")]=new Map,Aa[Vl("finalized")]=new Map,Oo==null||Oo({ReactiveElement:Aa}),(on.reactiveElementVersions??(on.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nl=globalThis,ui=Nl.trustedTypes,J0=ui?ui.createPolicy("lit-html",{createHTML:r=>r}):void 0,i3="$lit$",sn=`lit$${Math.random().toFixed(9).slice(2)}$`,s3="?"+sn,L4=`<${s3}>`,Un=document,Rl=()=>Un.createComment(""),ql=r=>r===null||typeof r!="object"&&typeof r!="function",Xo=Array.isArray,H4=r=>Xo(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Uo=`[ 	
\f\r]`,Tl=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F0=/-->/g,W0=/>/g,Tn=RegExp(`>|${Uo}(?:([^\\s"'>=/]+)(${Uo}*=${Uo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),I0=/'/g,P0=/"/g,o3=/^(?:script|style|textarea|title)$/i,T4=r=>(i,...o)=>({_$litType$:r,strings:i,values:o}),L=T4(1),Da=Symbol.for("lit-noChange"),Ne=Symbol.for("lit-nothing"),e3=new WeakMap,On=Un.createTreeWalker(Un,129);function r3(r,i){if(!Xo(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return J0!==void 0?J0.createHTML(i):i}const O4=(r,i)=>{const o=r.length-1,c=[];let u,f=i===2?"<svg>":i===3?"<math>":"",v=Tl;for(let A=0;A<o;A++){const k=r[A];let x,H,O=-1,G=0;for(;G<k.length&&(v.lastIndex=G,H=v.exec(k),H!==null);)G=v.lastIndex,v===Tl?H[1]==="!--"?v=F0:H[1]!==void 0?v=W0:H[2]!==void 0?(o3.test(H[2])&&(u=RegExp("</"+H[2],"g")),v=Tn):H[3]!==void 0&&(v=Tn):v===Tn?H[0]===">"?(v=u??Tl,O=-1):H[1]===void 0?O=-2:(O=v.lastIndex-H[2].length,x=H[1],v=H[3]===void 0?Tn:H[3]==='"'?P0:I0):v===P0||v===I0?v=Tn:v===F0||v===W0?v=Tl:(v=Tn,u=void 0);const R=v===Tn&&r[A+1].startsWith("/>")?" ":"";f+=v===Tl?k+L4:O>=0?(c.push(x),k.slice(0,O)+i3+k.slice(O)+sn+R):k+sn+(O===-2?A:R)}return[r3(r,f+(r[o]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),c]};let Ro=class c3{constructor({strings:i,_$litType$:o},c){let u;this.parts=[];let f=0,v=0;const A=i.length-1,k=this.parts,[x,H]=O4(i,o);if(this.el=c3.createElement(x,c),On.currentNode=this.el.content,o===2||o===3){const O=this.el.content.firstChild;O.replaceWith(...O.childNodes)}for(;(u=On.nextNode())!==null&&k.length<A;){if(u.nodeType===1){if(u.hasAttributes())for(const O of u.getAttributeNames())if(O.endsWith(i3)){const G=H[v++],R=u.getAttribute(O).split(sn),I=/([.?@])?(.*)/.exec(G);k.push({type:1,index:f,name:I[2],strings:R,ctor:I[1]==="."?$4:I[1]==="?"?V4:I[1]==="@"?N4:hi}),u.removeAttribute(O)}else O.startsWith(sn)&&(k.push({type:6,index:f}),u.removeAttribute(O));if(o3.test(u.tagName)){const O=u.textContent.split(sn),G=O.length-1;if(G>0){u.textContent=ui?ui.emptyScript:"";for(let R=0;R<G;R++)u.append(O[R],Rl()),On.nextNode(),k.push({type:2,index:++f});u.append(O[G],Rl())}}}else if(u.nodeType===8)if(u.data===s3)k.push({type:2,index:f});else{let O=-1;for(;(O=u.data.indexOf(sn,O+1))!==-1;)k.push({type:7,index:f}),O+=sn.length-1}f++}}static createElement(i,o){const c=Un.createElement("template");return c.innerHTML=i,c}};function Ma(r,i,o=r,c){var v,A;if(i===Da)return i;let u=c!==void 0?(v=o._$Co)==null?void 0:v[c]:o._$Cl;const f=ql(i)?void 0:i._$litDirective$;return(u==null?void 0:u.constructor)!==f&&((A=u==null?void 0:u._$AO)==null||A.call(u,!1),f===void 0?u=void 0:(u=new f(r),u._$AT(r,o,c)),c!==void 0?(o._$Co??(o._$Co=[]))[c]=u:o._$Cl=u),u!==void 0&&(i=Ma(r,u._$AS(r,i.values),u,c)),i}let U4=class{constructor(i,o){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){const{el:{content:o},parts:c}=this._$AD,u=((i==null?void 0:i.creationScope)??Un).importNode(o,!0);On.currentNode=u;let f=On.nextNode(),v=0,A=0,k=c[0];for(;k!==void 0;){if(v===k.index){let x;k.type===2?x=new Qo(f,f.nextSibling,this,i):k.type===1?x=new k.ctor(f,k.name,k.strings,this,i):k.type===6&&(x=new R4(f,this,i)),this._$AV.push(x),k=c[++A]}v!==(k==null?void 0:k.index)&&(f=On.nextNode(),v++)}return On.currentNode=Un,u}p(i){let o=0;for(const c of this._$AV)c!==void 0&&(c.strings!==void 0?(c._$AI(i,c,o),o+=c.strings.length-2):c._$AI(i[o])),o++}},Qo=class u3{get _$AU(){var i;return((i=this._$AM)==null?void 0:i._$AU)??this._$Cv}constructor(i,o,c,u){this.type=2,this._$AH=Ne,this._$AN=void 0,this._$AA=i,this._$AB=o,this._$AM=c,this.options=u,this._$Cv=(u==null?void 0:u.isConnected)??!0}get parentNode(){let i=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(i==null?void 0:i.nodeType)===11&&(i=o.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,o=this){i=Ma(this,i,o),ql(i)?i===Ne||i==null||i===""?(this._$AH!==Ne&&this._$AR(),this._$AH=Ne):i!==this._$AH&&i!==Da&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):H4(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==Ne&&ql(this._$AH)?this._$AA.nextSibling.data=i:this.T(Un.createTextNode(i)),this._$AH=i}$(i){var f;const{values:o,_$litType$:c}=i,u=typeof c=="number"?this._$AC(i):(c.el===void 0&&(c.el=Ro.createElement(r3(c.h,c.h[0]),this.options)),c);if(((f=this._$AH)==null?void 0:f._$AD)===u)this._$AH.p(o);else{const v=new U4(u,this),A=v.u(this.options);v.p(o),this.T(A),this._$AH=v}}_$AC(i){let o=e3.get(i.strings);return o===void 0&&e3.set(i.strings,o=new Ro(i)),o}k(i){Xo(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let c,u=0;for(const f of i)u===o.length?o.push(c=new u3(this.O(Rl()),this.O(Rl()),this,this.options)):c=o[u],c._$AI(f),u++;u<o.length&&(this._$AR(c&&c._$AB.nextSibling,u),o.length=u)}_$AR(i=this._$AA.nextSibling,o){var c;for((c=this._$AP)==null?void 0:c.call(this,!1,!0,o);i&&i!==this._$AB;){const u=i.nextSibling;i.remove(),i=u}}setConnected(i){var o;this._$AM===void 0&&(this._$Cv=i,(o=this._$AP)==null||o.call(this,i))}},hi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,o,c,u,f){this.type=1,this._$AH=Ne,this._$AN=void 0,this.element=i,this.name=o,this._$AM=u,this.options=f,c.length>2||c[0]!==""||c[1]!==""?(this._$AH=Array(c.length-1).fill(new String),this.strings=c):this._$AH=Ne}_$AI(i,o=this,c,u){const f=this.strings;let v=!1;if(f===void 0)i=Ma(this,i,o,0),v=!ql(i)||i!==this._$AH&&i!==Da,v&&(this._$AH=i);else{const A=i;let k,x;for(i=f[0],k=0;k<f.length-1;k++)x=Ma(this,A[c+k],o,k),x===Da&&(x=this._$AH[k]),v||(v=!ql(x)||x!==this._$AH[k]),x===Ne?i=Ne:i!==Ne&&(i+=(x??"")+f[k+1]),this._$AH[k]=x}v&&!u&&this.j(i)}j(i){i===Ne?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},$4=class extends hi{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===Ne?void 0:i}},V4=class extends hi{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==Ne)}},N4=class extends hi{constructor(i,o,c,u,f){super(i,o,c,u,f),this.type=5}_$AI(i,o=this){if((i=Ma(this,i,o,0)??Ne)===Da)return;const c=this._$AH,u=i===Ne&&c!==Ne||i.capture!==c.capture||i.once!==c.once||i.passive!==c.passive,f=i!==Ne&&(c===Ne||u);u&&this.element.removeEventListener(this.name,this,c),f&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var o;typeof this._$AH=="function"?this._$AH.call(((o=this.options)==null?void 0:o.host)??this.element,i):this._$AH.handleEvent(i)}},R4=class{constructor(i,o,c){this.element=i,this.type=6,this._$AN=void 0,this._$AM=o,this.options=c}get _$AU(){return this._$AM._$AU}_$AI(i){Ma(this,i)}};const $o=Nl.litHtmlPolyfillSupport;$o==null||$o(Ro,Qo),(Nl.litHtmlVersions??(Nl.litHtmlVersions=[])).push("3.2.1");const q4=(r,i,o)=>{const c=(o==null?void 0:o.renderBefore)??i;let u=c._$litPart$;if(u===void 0){const f=(o==null?void 0:o.renderBefore)??null;c._$litPart$=u=new Qo(i.insertBefore(Rl(),f),f,void 0,o??{})}return u._$AI(r),u};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ce=class extends Aa{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;const i=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=i.firstChild),i}update(i){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=q4(o,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)==null||i.setConnected(!1)}render(){return Da}};var a3;ce._$litElement$=!0,ce.finalized=!0,(a3=globalThis.litElementHydrateSupport)==null||a3.call(globalThis,{LitElement:ce});const Vo=globalThis.litElementPolyfillSupport;Vo==null||Vo({LitElement:ce});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B4={attribute:!0,type:String,converter:ci,reflect:!1,hasChanged:Yo},Z4=(r=B4,i,o)=>{const{kind:c,metadata:u}=o;let f=globalThis.litPropertyMetadata.get(u);if(f===void 0&&globalThis.litPropertyMetadata.set(u,f=new Map),f.set(o.name,r),c==="accessor"){const{name:v}=o;return{set(A){const k=i.get.call(this);i.set.call(this,A),this.requestUpdate(v,k,r)},init(A){return A!==void 0&&this.P(v,void 0,r),A}}}if(c==="setter"){const{name:v}=o;return function(A){const k=this[v];i.call(this,A),this.requestUpdate(v,k,r)}}throw Error("Unsupported decorator location: "+c)};function p(r){return(i,o)=>typeof o=="object"?Z4(r,i,o):((c,u,f)=>{const v=u.hasOwnProperty(f);return u.constructor.createProperty(f,v?{...c,wrapped:!0}:c),v?Object.getOwnPropertyDescriptor(u,f):void 0})(r,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bt(r){return p({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j4=(r,i,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof i!="object"&&Object.defineProperty(r,i,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function G4(r,i){return(o,c,u)=>{const f=v=>{var A;return((A=v.renderRoot)==null?void 0:A.querySelector(r))??null};return j4(o,c,{get(){return f(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=r=>r??Ne;/*!
   * New York State Design System (v1.7.0)
   * Description: A design system for New York State's digital products.
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
 */const d3=xe`
  :host {
    /* Anything that can be overridden should be defined here */

    /* Global Accordion Styles */
    --_nys-accordion-width: fit-content;
    --_nys-accordion-radius: var(--nys-radius-md, 4px);
    --_nys-accordion-padding: var(--nys-space-200, 16px)
      var(--nys-space-250, 20px);
    --_nys-accordion-width-focus: var(--nys-border-width-md, 2px);
    --_nys-accordion-offset-focus: var(--nys-space-2px, 2px);
    --_nys-accordion-color-focus: var(--nys-color-focus, #004dd1);
    --_nys-accordion-gap: var(--nys-space-100, 8px);

    /* Header & Text container */
    --_nys-accordion-heading-background: var(--nys-color-neutral-50, #ededed);
    --_nys-accordion-heading-active-background: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
    --_nys-accordion-heading-gap: var(--nys-space-200, 16px);
    --_nys-accordion-content-background: var(--nys-color-ink-reverse, #fff);
    --_nys-accordion-content-padding: var(--nys-space-200, 16px)
      var(--local-xx-spacing-205, 20px);

    /* Typography */
    --_nys-accordion-font-size: var(--nys-type-size-ui-xl, 20px);
    --_nys-accordion-font-weight: var(--nys-font-weight-bold, 700);
    --_nys-accordion-line-height: var(--nys-font-lineheight-ui-xl, 28px);
    --_nys-accordion-line-letterspacing: var(
      --nys-font-letterspacing-ui-xl,
      0.017px
    );
    --_nys-accordion-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
  }

  /* CSS Resets */
  ::slotted(p),
  p {
    margin: 0 !important;
  }

  .nys-accordionitem {
    font-family: var(--_nys-accordion-font-family);
    font-size: var(--_nys-accordion-font-size);
    font-weight: var(--_nys-accordion-font-weight);
    line-height: var(--_nys-accordion-line-height);
    letter-spacing: var(--_nys-accordion-line-letterspacing);
    display: flex;
  }

  .nys-accordionitem__heading {
    all: unset;
    flex: 1;
    gap: var(--_nys-accordion-heading-gap);
    display: flex;
    padding: var(--_nys-accordion-padding);
    align-items: center;
    align-self: stretch;
    border-radius: var(--_nys-accordion-radius);
    background: var(--_nys-accordion-heading-background);
    cursor: pointer;
    transition: 0.05s all ease-in-out;
  }

  .nys-accordionitem__heading:hover {
    border-radius: var(--_nys-accordion-radius);
    background: var(--_nys-accordion-heading-active-background);
  }

  .nys-accordionitem__heading:focus-visible {
    outline-offset: var(--_nys-accordion-offset-focus);
    outline: solid var(--_nys-accordion-width-focus)
      var(--_nys-accordion-color-focus);
  }

  .nys-accordionitem__heading .nys-accordionitem__heading-title {
    flex: 1;
  }

  /*** Content layer ***/
  .nys-accordionitem__content {
    height: 0;
    overflow: hidden;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    visibility: hidden;
  }

  .nys-accordionitem__content.expanded {
    /* Accordion JS code takes care of setting the exact calculated height so we can open exact px height */
    visibility: visible;
  }

  .nys-accordionitem__content-slot-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--_nys-accordion-gap);
    align-self: stretch;
    padding: var(--_nys-accordion-content-padding);
    background: var(--_nys-accordion-content-background);
  }

  .nys-accordionitem__content-slot-container-text {
    max-width: 528px;
  }

  /*** Expanded Styling ***/
  .expand-icon {
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  :host([expanded]) .expand-icon {
    transform: rotate(180deg);
  }

  /*** Bordered Styling ***/
  :host([bordered][expanded]) .nys-accordionitem__heading {
    border-radius: var(--_nys-accordion-radius) var(--_nys-accordion-radius) 0 0;
  }

  :host([bordered]) .nys-accordionitem__content-slot-container {
    border: var(--nys-border-width-md, 2px) solid
      var(--nys-color-neutral-50, #ededed);
    border-radius: 0 0 var(--_nys-accordion-radius) var(--_nys-accordion-radius);
  }

  /*** Accordion Wrapper ***/
  .nys-accordion {
    display: flex;
    flex-direction: column;
    gap: var(--_nys-accordion-gap);
  }
`;var Y4=Object.defineProperty,Bl=(r,i,o,c)=>{for(var u=void 0,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=v(i,o,u)||u);return u&&Y4(i,o,u),u};let X4=0;const h3=class extends ce{constructor(){super(),this.id="",this.heading="",this.expanded=!1,this.bordered=!1}connectedCallback(){super.connectedCallback(),this.id||(this.id=this._generateUniqueId())}updated(i){i.has("expanded")&&this._updateHeight()}_generateUniqueId(){return`nys-accordionitem-${Date.now()}-${X4++}`}_dispatchEvent(){this.dispatchEvent(new CustomEvent("nys-accordionitem-toggle",{detail:{id:this.id,heading:this.heading,expanded:this.expanded},bubbles:!0,composed:!0}))}_handleExpand(){this.expanded=!this.expanded,this._updateHeight(),this._dispatchEvent()}_handleKeydown(i){(i.key===" "||i.key==="Enter")&&(i.preventDefault(),this._handleExpand())}_updateHeight(){if(this._contentContainer)if(this.expanded){const i=this._contentContainer.scrollHeight;this._contentContainer.style.height=`${i}px`}else this._contentContainer.style.height="0",this._contentContainer.style.overflow="hidden"}render(){const i=`${this.id}-content`;return L`<div id=${this.id} class="nys-accordionitem">
      <button
        class="nys-accordionitem__heading"
        type="button"
        @click=${this._handleExpand}
        @keydown=${this._handleKeydown}
        aria-expanded=${this.expanded?"true":"false"}
        aria-controls=${i}
      >
        <p class="nys-accordionitem__heading-title">${this.heading}</p>
        <nys-icon class="expand-icon" name="chevron_down" size="24"></nys-icon>
      </div>
      <div id=${i} class="nys-accordionitem__content ${this.expanded?"expanded":"collapsed"}" role="region">
        <div class="nys-accordionitem__content-slot-container">
          <div class="nys-accordionitem__content-slot-container-text">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>`}};h3.styles=d3;let $n=h3;Bl([p({type:String})],$n.prototype,"id");Bl([p({type:String})],$n.prototype,"heading");Bl([p({type:Boolean,reflect:!0})],$n.prototype,"expanded");Bl([p({type:Boolean,reflect:!0})],$n.prototype,"bordered");Bl([G4(".nys-accordionitem__content")],$n.prototype,"_contentContainer");customElements.get("nys-accordionitem")||customElements.define("nys-accordionitem",$n);var Q4=Object.defineProperty,Ko=(r,i,o,c)=>{for(var u=void 0,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=v(i,o,u)||u);return u&&Q4(i,o,u),u};let K4=0;const f3=class extends ce{constructor(){super(),this.id="",this.singleSelect=!1,this.bordered=!1}connectedCallback(){super.connectedCallback(),this.id||(this.id=this._generateUniqueId())}updated(i){i.has("bordered")&&this._applyBordered()}_generateUniqueId(){return`nys-accordionitem-${Date.now()}-${K4++}`}_getAccordions(){var i;const o=(i=this.shadowRoot)==null?void 0:i.querySelector("slot");return((o==null?void 0:o.assignedElements())||[]).filter(c=>c.tagName.toLowerCase()==="nys-accordionitem")}_onAccordionToggle(i){if(!this.singleSelect)return;const o=i.detail.id;i.detail.expanded&&this._getAccordions().forEach(c=>{c.id!==o&&c.expanded&&(c.expanded=!1)})}_applyBordered(){this._getAccordions().forEach(i=>{i.bordered=this.bordered})}render(){return L`<div
      id=${this.id}
      class="nys-accordion"
      @nys-accordionitem-toggle=${this._onAccordionToggle}
    >
      <slot></slot>
    </div>`}};f3.styles=d3;let Zl=f3;Ko([p({type:String})],Zl.prototype,"id");Ko([p({type:Boolean,reflect:!0})],Zl.prototype,"singleSelect");Ko([p({type:Boolean,reflect:!0})],Zl.prototype,"bordered");customElements.get("nys-accordion")||customElements.define("nys-accordion",Zl);const J4=xe`
  :host {
    /* Global Alert Styles */
    --_nys-alert-border-width: var(--nys-border-width-lg, 4px);
    --_nys-alert-border-radius: var(--nys-radius-md, 4px);
    --_nys-alert-hover-border-radius: var(--nys-radius-sm, 2px);
    --_nys-alert-text-color: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-alert-link-color: var(
      --nys-color-link,
      var(--nys-color-blue-600, #004dd1)
    );
    --_nys-alert-link-hover-color: var(
      --nys-color-link-strong,
      var(--nys-color-blue-700, #003ba1)
    );
    --_nys-alert-link-active-color: var(
      --nys-color-link-strongest,
      var(--nys-color-blue-800, #002971)
    );
    --_nys-alert-spacing: var(--nys-space-250, 20px);
    --_nys-alert-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-alert-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-alert-lineheight: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-alert-letterspacing: var(
      --nys-font-letterspacing-ui-md,
      var(--nys-font-letterspacing-400, 0.044px)
    );
    --_nys-alert-font-weight-regular: var(--nys-font-weight-regular, 400);
    --_nys-alert-font-weight-semibold: var(--nys-font-weight-semibold, 600);

    /* Border specifics */
    --_nys-alert-color-border-left: var(
      --nys-color-base,
      var(--nys-color-neutral-600, #62666a)
    );

    /* Background type specifics */
    --_nys-alert-color-bg: var(
      --nys-color-base-weak,
      var(--nys-color-neutral-10, #f6f6f6)
    );

    /* Theme Icon */
    --_nys-alert-gap-space-150: var(--nys-space-150, 12px);
    --_nys-alert-gap-space-50: var(--nys-space-50, 4px);
  }

  /* Main alert container */
  .nys-alert__container {
    display: flex;
    background-color: var(--_nys-alert-color-bg);
    border-left: var(--_nys-alert-border-width) solid
      var(--_nys-alert-color-border-left);
    border-radius: var(--_nys-alert-border-radius);
    color: var(--_nys-alert-text-color);
    padding: var(--_nys-alert-spacing);
    font-style: normal;
    font-family: var(--_nys-alert-font-family);
    font-size: var(--_nys-alert-font-size);
    line-height: var(--_nys-alert-lineheight);
    letter-spacing: var(--_nys-alert-letterspacing);
    gap: var(--_nys-alert-gap-space-150);
    text-align: left;
  }

  p {
    margin: 0;
  }

  ::slotted(p) {
    margin-bottom: 0 !important;
  }

  /* Icon */
  .nys-alert__icon {
    margin-top: -1.5px;
  }

  /* Links */
  a,
  a:visited {
    font-weight: var(--_nys-alert-font-weight-semibold);
    font-size: var(--_nys-alert-font-size);
    color: var(--_nys-alert-link-color);
  }
  a:hover {
    color: var(--_nys-alert-link-hover-color);
  }
  a:active {
    color: var(--_nys-alert-link-active-color);
  }

  /* For HTML elements put into the slot */
  ::slotted(a) {
    color: var(--_nys-alert-link-color);
  }

  /* Handles both header and description text */
  .nys-alert__texts {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: var(--_nys-alert-gap-space-50);
  }

  .nys-alert__header {
    margin: 0;
    font-weight: var(--_nys-alert-font-weight-semibold);
  }

  .nys-alert__text {
    font-weight: var(--_nys-alert-font-weight-regular);
    margin: 0;
  }

  /* For HTML elements put into the slot */
  ::slotted(*) {
    font-weight: var(--_nys-alert-font-weight-regular);
    margin: 0;
  }

  /* Centered variant: For no descriptions, we remove the <slot name="text"> via JS logic. In styling, centers the icon for a compact layout. */
  .nys-alert--centered {
    display: flex;
    align-items: center;
  }
  .nys-alert--centered .nys-alert__header {
    margin-bottom: -3px; /* Adjusts the header text to be centered */
  }
  .nys-alert--centered div[part="nys-alert__icon"] {
    margin-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Action Statement */
  .nys-alert__actions {
    display: flex;
    gap: var(--_nys-alert-gap-space-150);
    flex-wrap: wrap;
  }

  /* Alert Types */
  :host([type="info"]) {
    --_nys-alert-color-border-left: var(
      --nys-color-info,
      var(--nys-color-blue-600, #004dd1)
    );
    --_nys-alert-color-bg: var(
      --nys-color-info-weak,
      var(--nys-color-blue-50, #e5effa)
    );
  }
  :host([type="success"]) {
    --_nys-alert-color-border-left: var(
      --nys-color-success,
      var(--nys-color-green-600, #1e752e)
    );
    --_nys-alert-color-bg: var(
      --nys-color-success-weak,
      var(--nys-color-green-50, #e8f1ea)
    );
  }
  :host([type="warning"]) {
    --_nys-alert-color-border-left: var(
      --nys-color-warning,
      var(--nys-color-yellow-400, #face00)
    );
    --_nys-alert-color-bg: var(
      --nys-color-warning-weak,
      var(--nys-color-yellow-50, #fefae5)
    );
  }
  :host([type="danger"]) {
    --_nys-alert-color-border-left: var(
      --nys-color-danger,
      var(--nys-color-red-600, #b52c2c)
    );
    --_nys-alert-color-bg: var(
      --nys-color-danger-weak,
      var(--nys-color-red-50, #f7eaea)
    );
  }
  :host([type="emergency"]) {
    --_nys-alert-color-border-left: var(
      --nys-color-emergency,
      var(--nys-color-red-800, #721c1c)
    );
    --_nys-alert-color-bg: var(
      --nys-color-emergency,
      var(--nys-color-red-800, #721c1c)
    );
    --_nys-alert-text-color: var(
      --nys-color-text-reverse,
      var(--nys-color-white, #fff)
    );
    --_nys-alert-link-color: var(
      --nys-color-link-reverse-neutral,
      var(--nys-color-white, #fff)
    );
    --_nys-alert-link-hover-color: var(
      --nys-color-link-reverse-neutral,
      var(--nys-color-white, #fff)
    );
    --_nys-alert-link-active-color: var(
      --nys-color-link-reverse-neutral,
      var(--nys-color-white, #fff)
    );
  }
  :host([type="emergency"]) a:hover {
    text-decoration-thickness: 2px;
  }
  :host([type="emergency"]) a:active {
    text-decoration-thickness: 3px;
  }
`;var F4=Object.defineProperty,W4=Object.getOwnPropertyDescriptor,_t=(r,i,o,c)=>{for(var u=c>1?void 0:c?W4(i,o):i,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=(c?v(i,o,u):v(u))||u);return c&&u&&F4(i,o,u),u};let I4=0;var Ol;const rt=(Ol=class extends ce{constructor(){super(...arguments),this.id="",this.heading="",this.icon="",this.dismissible=!1,this.duration=0,this.text="",this.primaryAction="",this.secondaryAction="",this.primaryLabel="Learn more",this.secondaryLabel="Dismiss",this._alertClosed=!1,this._slotHasContent=!0,this._type="base",this._timeoutId=null}get type(){return this._type}set type(r){this._type=Ol.VALID_TYPES.includes(r)?r:"base"}get ariaAttributes(){const r=this.type==="danger"||this.type==="emergency"?"alert":this.type==="success"?"status":"region",i=r==="region"?`${this.type} alert`:"";return{role:r,ariaLabel:i}}connectedCallback(){super.connectedCallback(),this.id||(this.id=this._generateUniqueId()),this.duration>0&&(this._timeoutId=setTimeout(()=>{this._closeAlert()},this.duration))}disconnectedCallback(){this._timeoutId&&clearTimeout(this._timeoutId),super.disconnectedCallback()}firstUpdated(){this._checkSlotContent()}_generateUniqueId(){return`nys-alert-${Date.now()}-${I4++}`}_getIconName(){return this.icon?this.icon:this._checkAltNaming()}_checkAltNaming(){return this.type==="success"?"check_circle":this.type==="base"?"info":this.type==="danger"?"error":this.type==="emergency"?"emergency_home":this.type}_closeAlert(){this._alertClosed=!0,this.dispatchEvent(new CustomEvent("nys-alert-closed",{detail:{type:this.type,label:this.heading},bubbles:!0,composed:!0}))}async _checkSlotContent(){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("slot");if(i){const o=i.assignedNodes({flatten:!0}).filter(c=>{var u;return c.nodeType===Node.ELEMENT_NODE||c.nodeType===Node.TEXT_NODE&&((u=c.textContent)==null?void 0:u.trim())});await Promise.resolve(),this._slotHasContent=o.length>0}else await Promise.resolve(),this._slotHasContent=!1}render(){var r,i;const{role:o,ariaLabel:c}=this.ariaAttributes;return L`
      ${this._alertClosed?"":L` <div
            id=${this.id}
            class="nys-alert__container ${this._slotHasContent||((r=this.text)==null?void 0:r.trim().length)>0?"":"nys-alert--centered"}"
            aria-label=${ne(c.trim()!==""?c:void 0)}
          >
            <div part="nys-alert__icon" class="nys-alert__icon">
              <nys-icon
                name="${this._getIconName()}"
                size="3xl"
                label="${this.type} icon"
              ></nys-icon>
            </div>
            <div class="nys-alert__texts" role=${o}>
              <p class="nys-alert__header">${this.heading}</p>
              ${this._slotHasContent?L`<slot></slot>`:((i=this.text)==null?void 0:i.trim().length)>0?L`<p class="nys-alert__text">${this.text}</p>`:""}
              ${this.primaryAction||this.secondaryAction?L`<div class="nys-alert__actions">
                    ${this.primaryAction?L`<a
                          href=${ne(this.primaryAction||void 0)}
                          class="nys-alert__action nys-alert__primary"
                        >
                          ${this.primaryLabel}
                        </a>`:""}
                    ${this.secondaryAction?L`<a
                          href=${ne(this.secondaryAction||void 0)}
                          class="nys-alert__action nys-alert__secondary"
                        >
                          ${this.secondaryLabel}
                        </a>`:""}
                  </div> `:""}
            </div>
            ${this.dismissible?L` <nys-button
                  id="dismiss-btn"
                  variant="ghost"
                  circle
                  icon="close"
                  size="sm"
                  ?inverted=${this.type==="emergency"}
                  ariaLabel="${this.heading}, alert, Close"
                  .onClick=${()=>this._closeAlert()}
                ></nys-button>`:""}
          </div>`}
    `}},Ol.styles=J4,Ol.VALID_TYPES=["base","info","success","warning","danger","emergency"],Ol);_t([p({type:String})],rt.prototype,"id",2);_t([p({type:String})],rt.prototype,"heading",2);_t([p({type:String})],rt.prototype,"icon",2);_t([p({type:Boolean,reflect:!0})],rt.prototype,"dismissible",2);_t([p({type:Number,reflect:!0})],rt.prototype,"duration",2);_t([p({type:String})],rt.prototype,"text",2);_t([p({type:String})],rt.prototype,"primaryAction",2);_t([p({type:String})],rt.prototype,"secondaryAction",2);_t([p({type:String})],rt.prototype,"primaryLabel",2);_t([p({type:String})],rt.prototype,"secondaryLabel",2);_t([bt()],rt.prototype,"_alertClosed",2);_t([bt()],rt.prototype,"_slotHasContent",2);_t([p({reflect:!0})],rt.prototype,"type",1);let y3=rt;customElements.get("nys-alert")||customElements.define("nys-alert",y3);const P4=xe`
  :host {
    /* Global Avatar Styles */
    --_nys-avatar-shape: var(--nys-radius-round, 1776px);
    --_nys-avatar-border-color: var(--nys-color-ink-reverse, #fff);
    --_nys-avatar-border-size: var(--nys-border-width-sm, 1px);
    --_nys-avatar-width: var(--nys-font-size-6xl, 36px);
    --_nys-avatar-color: var(--nys-color-theme, #154973);
    --_nys-avatar-background-color: var(--nys-color-theme-weaker, #eff6fb);
    --_nys-avatar-outline-color: var(--nys-color-focus, #004dd1);
    --_nys-avatar-outline-width: var(--nys-border-width-md, 2px);
    --_nys-avatar-outline-offset: var(--nys-space-2px, 2px);
  }

  .nys-avatar {
    display: inline-block;
  }

  .nys-avatar__component {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--_nys-avatar-shape);
    width: var(--_nys-avatar-width);
    height: var(--_nys-avatar-width);
    font-size: var(--_nys-avatar-width);
    overflow: hidden;
    box-sizing: border-box;
    color: var(--_nys-avatar-color);
    background-color: var(--_nys-avatar-background-color);
    border: var(--_nys-avatar-border-size) solid var(--_nys-avatar-border-color);
    outline-offset: var(--_nys-avatar-outline-offset);
    transition: all 0.15s ease-in-out;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  /* Hover/Active states/Disabled */
  :host([interactive]) .nys-avatar__component:hover,
  :host([interactive]) .nys-avatar__component:active {
    --_nys-avatar-color: var(
      --nys-color-text-reverse,
      --nys-color-ink-reverse,
      #fff
    );
    cursor: pointer;
  }

  :host([interactive]) .nys-avatar__component:hover {
    --_nys-avatar-background-color: var(--nys-color-theme-mid, #457aa5);
  }

  :host([interactive]) .nys-avatar__component:active {
    --_nys-avatar-background-color: var(--nys-color-theme-strong, #0e324f);
  }

  :host([disabled]) .nys-avatar__component {
    --_nys-avatar-color: var(--nys-color-text-disabled, #bec0c1);
    --_nys-avatar-background-color: var(--nys-color-neutral-10, #f6f6f6);
    cursor: not-allowed;
  }

  :host([disabled]) .nys-avatar__component:focus-within {
    outline: solid var(--_nys-avatar-outline-width) var(--_nys-avatar-outline-color);
  }

  div[part="nys-avatar__icon"] {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Content styles */
  .nys-avatar__initials {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: calc(var(--_nys-avatar-width) * 0.5);
    font-weight: bold;
    text-transform: uppercase;
  }

  .nys-avatar__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .nys-avatar__icon {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;var e6=Object.defineProperty,l1=(r,i,o,c)=>{for(var u=void 0,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=v(i,o,u)||u);return u&&e6(i,o,u),u};let t6=0;const v3=class extends ce{constructor(){super(...arguments),this.id="",this.ariaLabel="",this.image="",this.initials="",this.icon="",this.color="",this.interactive=!1,this.disabled=!1,this.lazy=!1,this._slotHasContent=!0}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-avatar-${Date.now()}-${t6++}`)}firstUpdated(){this._checkSlotContent()}async _checkSlotContent(){var i;const o=(i=this.shadowRoot)==null?void 0:i.querySelector("slot");if(!o){this._slotHasContent=!1;return}await Promise.resolve();const c=o.assignedNodes({flatten:!0}).filter(u=>{var f;return u.nodeType===Node.ELEMENT_NODE||u.nodeType===Node.TEXT_NODE&&((f=u.textContent)==null?void 0:f.trim())});this._slotHasContent=c.length>0}getContrastForeground(){var i;const o="var(--nys-color-ink, #000)",c="var(--nys-color-ink-reverse, #fff)",u="var(--nys-color-text, #000)",f="var(--nys-color-text-reverse, #fff)";if(console.log("here"),!this.color)return;const v=document.createElement("div");v.style.color=this.color,document.body.appendChild(v);const A=getComputedStyle(v).color;document.body.removeChild(v);const k=A.match(/\d+/g);if(!k)return;const x=Number(k[0]),H=Number(k[1]),O=Number(k[2]),G=(.299*x+.587*H+.114*O)/255<.5;return((i=this.initials)==null?void 0:i.length)>0?G?f:u:G?c:o}render(){var i,o,c;return L`
      <label class="nys-avatar" id=${this.id}>
        <div class="nys-avatar__content">
          <div
            part="nys-avatar"
            class="nys-avatar__component"
            style=${this.color?`--_nys-avatar-background: ${this.color}; color: ${this.getContrastForeground()}`:""}
            role=${ne(this.interactive?"button":this.image?void 0:"img")}
            aria-label=${ne(this.image?void 0:this.ariaLabel?this.ariaLabel:"avatar")}
            tabindex=${this.interactive&&!this.disabled?"0":ne(void 0)}
          >
            ${((i=this.image)==null?void 0:i.length)>0?L`<img
                  part="nys-avatar__image"
                  class="nys-avatar__image"
                  src=${this.image}
                  alt=${this.ariaLabel||"avatar"}
                  loading=${this.lazy?"lazy":"eager"}
                />`:((o=this.initials)==null?void 0:o.length)>0?L`<span
                    part="nys-avatar__initials"
                    class="nys-avatar__initials"
                    aria-hidden="true"
                    >${this.initials}</span
                  >`:this._slotHasContent?L`<div part="nys-avatar__icon">
                      <slot></slot>
                    </div>`:L`<div part="nys-avatar__icon">
                      <nys-icon
                        label="nys-avatar__icon"
                        name=${((c=this.icon)==null?void 0:c.length)>0?this.icon:"account_circle"}
                      ></nys-icon>
                    </div>`}
          </div>
        </div>
      </label>
    `}};v3.styles=P4;let Nt=v3;l1([p({type:String})],Nt.prototype,"id");l1([p({type:String})],Nt.prototype,"ariaLabel");l1([p({type:String})],Nt.prototype,"image");l1([p({type:String})],Nt.prototype,"initials");l1([p({type:String})],Nt.prototype,"icon");l1([p({type:String})],Nt.prototype,"color");l1([p({type:Boolean,reflect:!0})],Nt.prototype,"interactive");l1([p({type:Boolean,reflect:!0})],Nt.prototype,"disabled");l1([p({type:Boolean,reflect:!0})],Nt.prototype,"lazy");l1([bt()],Nt.prototype,"_slotHasContent");customElements.get("nys-avatar")||customElements.define("nys-avatar",Nt);const n6=xe`
  :host {
  }

  .nys-backtotop {
    --_nys-button-radius-left: var(--nys-radius-round, 1776px);
    --_nys-button-radius-right: var(--nys-radius-round, 1776px);
    --_nys-button-padding-y: var(--nys-space-100, 8px);
    --_nys-button-padding-x: var(--nys-space-200, 16px);

    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 9999;
    display: none;
  }

  .left {
    left: 1rem;
    right: auto;
  }

  .visible {
    display: inline-flex;
  }
`;var a6=Object.defineProperty,fi=(r,i,o,c)=>{for(var u=void 0,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=v(i,o,u)||u);return u&&a6(i,o,u),u};const p3=class extends ce{constructor(){super(),this.position="right",this.visible=!1,this.isMobile=!1,this.forceVisible=!1,this._handleScroll=this._handleScroll.bind(this),this._handleResize=this._handleResize.bind(this),this.mediaQuery=window.matchMedia("(max-width: 480px)")}connectedCallback(){super.connectedCallback(),this.forceVisible=this.hasAttribute("visible"),window.addEventListener("scroll",this._handleScroll),this.mediaQuery.addEventListener("change",this._handleResize),this._handleResize()}disconnectedCallback(){window.removeEventListener("scroll",this._handleScroll),this.mediaQuery.removeEventListener("change",this._handleResize),super.disconnectedCallback()}_handleScroll(){if(this.forceVisible)return;const i=window.innerHeight,o=document.documentElement.scrollHeight;this.visible=o>=i*4&&window.scrollY>i*1.5}_scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}_handleResize(){this.isMobile=this.mediaQuery.matches}render(){const i=["nys-backtotop",this.position,this.visible?"visible":""].filter(Boolean).join(" ");return L`<nys-button
      id="nys-backtotop"
      prefixIcon="chevron_up"
      variant="outline"
      label="Back to top"
      size="sm"
      class="${i}"
      .onClick=${this._scrollToTop}
      ?circle=${this.isMobile}
    ></nys-button>`}};p3.styles=n6;let La=p3;fi([p({type:String})],La.prototype,"position");fi([p({type:Boolean,reflect:!0})],La.prototype,"visible");fi([bt()],La.prototype,"isMobile");fi([bt()],La.prototype,"forceVisible");customElements.get("nys-backtotop")||customElements.define("nys-backtotop",La);const l6=xe`
  :host {
    /* Anything that can be overridden should be defined here */

    /* Global Button Styles */
    --_nys-button-width: fit-content;
    --_nys-button-height: var(--nys-size-600, 48px);
    --_nys-button-radius-left: var(--nys-radius-xl, 12px);
    --_nys-button-radius-right: var(--nys-radius-xl, 12px);
    --_nys-button-padding-y: var(--nys-space-150, 12px);
    --_nys-button-padding-x: var(--nys-space-250, 20px);
    --_nys-button-gap: var(--nys-space-100, 8px);
    --_nys-button-width-border: var(--nys-border-width-md, 2px);
    --_nys-button-width-focus: var(--nys-border-width-md, 2px);
    --_nys-button-offset-focus: var(--nys-space-2px, 2px);
    --_nys-button-color-focus: var(--nys-color-focus, #004dd1);

    /* Global Button Colors */
    --_nys-button-color-bg: var(--nys-color-theme, #154973);
    --_nys-button-color-text: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border: var(--nys-color-theme, #154973);

    --_nys-button-color-bg-hover: var(--nys-color-theme-strong, #0e324f);
    --_nys-button-color-text-hover: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border-hover: var(--nys-color-theme-strong, #0e324f);

    --_nys-button-color-bg-active: var(--nys-color-theme-stronger, #081b2b);
    --_nys-button-color-text-active: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border-active: var(--nys-color-theme-stronger, #081b2b);

    --_nys-button-color-bg-disabled: var(--nys-color-neutral-10, #f6f6f6);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-button-color-border-disabled: var(--nys-color-neutral-10, #f6f6f6);

    /* Typography */
    --_nys-button-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-button-font-weight: var(--nys-font-weight-semibold, 600);
    --_nys-button-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-button-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
  }

  /* Sizes */
  :host([size="sm"]) {
    --_nys-button-height: var(--nys-size-500, 40px);
    --_nys-button-padding-y: var(--nys-space-100, 8px);
    --_nys-button-padding-x: var(--nys-space-200, 16px);
  }
  :host([size="md"]) {
    --_nys-button-height: var(--nys-size-600, 48px);
    --_nys-button-padding-y: var(--nys-space-150, 12px);
    --_nys-button-padding-x: var(--nys-space-250, 20px);
  }
  :host([size="lg"]) {
    --_nys-button-height: var(--nys-size-700, 56px);
    --_nys-button-padding-y: var(--nys-space-200, 16px);
    --_nys-button-padding-x: var(--nys-space-300, 24px);
  }
  :host([fullWidth]) {
    --_nys-button-width: 100%;
  }

  /* VARIANTS */

  /* Filled */
  :host([variant="filled"]) {
    /* Filled - Default */
    --_nys-button-color-bg: var(--nys-color-theme, #154973);
    --_nys-button-color-text: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Filled - Hover */
    --_nys-button-color-bg-hover: var(--nys-color-theme-strong, #0e324f);
    --_nys-button-color-text-hover: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Filled - Pressed/Active */
    --_nys-button-color-bg-active: var(--nys-color-theme-stronger, #081b2b);
    --_nys-button-color-text-active: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Filled - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-neutral-10, #f6f6f6);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);
  }

  /* Outline */
  :host([variant="outline"]) {
    /* Outline - Default */
    --_nys-button-color-bg: var(--nys-color-surface, #ffffff);
    --_nys-button-color-text: var(--nys-color-theme, #154973);
    --_nys-button-color-border: var(--nys-color-theme, #154973);

    /* Outline - Hover */
    --_nys-button-color-bg-hover: var(--nys-color-theme-weaker, #eff6fb);
    --_nys-button-color-text-hover: var(--nys-color-theme, #154973);
    --_nys-button-color-border-hover: var(--nys-color-theme, #154973);

    /* Outline - Pressed/Active */
    --_nys-button-color-bg-active: var(--nys-color-theme-weak, #cddde9);
    --_nys-button-color-text-active: var(--nys-color-theme, #154973);
    --_nys-button-color-border-active: var(--nys-color-theme, #154973);

    /* Outline - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-surface, #ffffff);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-button-color-border-disabled: var(--nys-color-neutral-100, #d0d0ce);
  }

  /* Text */
  :host([variant="text"]) {
    --_nys-button-height: fit-content;
    --_nys-button-radius-left: var(--nys-radius-md, 4px);
    --_nys-button-radius-right: var(--nys-radius-md, 4px);
    --_nys-button-padding-y: var(--nys-space-2px, 2px);
    --_nys-button-padding-x: var(--nys-space-50, 4px);
    --_nys-button-width-border: 0px;
    --_nys-button-text-decoration: underline;

    /* Text - Default */
    --_nys-button-color-bg: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text: var(--nys-color-link, #004dd1);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Text - Hover */
    --_nys-button-color-bg-hover: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-hover: var(--nys-color-link-strong, #003ba1);
    --_nys-button-color-border-hover: var(--nys-color-transparent, #ffffff00);

    /* Text - Pressed/Active */
    --_nys-button-color-bg-active: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-active: var(--nys-color-link-strongest, #002971);
    --_nys-button-color-border-active: var(--nys-color-transparent, #ffffff00);

    /* Text - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
  }

  /* Ghost */
  :host([variant="ghost"]) {
    /* Ghost - Default */
    --_nys-button-color-bg: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Ghost - Hover */
    --_nys-button-color-bg-hover: var(
      --nys-color-black-transparent-100,
      #0000001a
    );
    --_nys-button-color-text-hover: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-border-hover: var(--nys-color-transparent, #ffffff00);

    /* Ghost - Active */
    --_nys-button-color-bg-active: var(
      --nys-color-black-transparent-200,
      #00000033
    );
    --_nys-button-color-text-active: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-border-active: var(--nys-color-transparent, #ffffff00);

    /* Ghost - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
  }

  /* INVERTED VARIANTS */

  /* Filled Inverted */
  :host([variant="filled"][inverted]) {
    /* Filled Inverted - Default */
    --_nys-button-color-bg: var(--nys-color-surface, #ffffff);
    --_nys-button-color-text: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );

    /* Filled Inverted - Hover */
    --_nys-button-color-bg-hover: var(--nys-color-neutral-100, #d0d0ce);
    --_nys-button-color-text-hover: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );

    /* Filled Inverted - Pressed/Active */
    --_nys-button-color-bg-active: var(--nys-color-neutral-300, #a7a9ab);
    --_nys-button-color-text-active: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );

    /* Filled Inverted - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #62666a);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
  }

  /* Outline Inverted */
  :host([variant="outline"][inverted]) {
    /* Outline Inverted - Default */
    --_nys-button-color-bg: var(--nys-color-surface-reverse, #1b1b1b);
    --_nys-button-color-text: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border: var(--nys-color-ink-reverse, #ffffff);

    /* Outline Inverted - Hover */
    --_nys-button-color-bg-hover: var(--nys-color-surface-reverse, #1b1b1b);
    --_nys-button-color-text-hover: var(--nys-color-text-reverse-weak, #d0d0ce);
    --_nys-button-color-border-hover: var(--nys-color-neutral-100, #d0d0ce);

    /* Outline Inverted - Pressed/Active */
    --_nys-button-color-bg-active: var(--nys-color-surface-reverse, #1b1b1b);
    --_nys-button-color-text-active: var(
      --nys-color-text-reverse-weaker,
      #bec0c1
    );
    --_nys-button-color-border-active: var(--nys-color-neutral-300, #a7a9ab);

    /* Outline Inverted - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-surface-reverse, #1b1b1b);
    --_nys-button-color-text-disabled: var(
      --nys-color-text-reverse-disabled,
      #62666a
    );
    --_nys-button-color-border-disabled: var(--nys-color-neutral-600, #62666a);
  }

  /* Text Inverted */
  :host([variant="text"][inverted]) {
    --_nys-button-height: fit-content;
    --_nys-button-radius-left: var(--nys-radius-md, 4px);
    --_nys-button-radius-right: var(--nys-radius-md, 4px);
    --_nys-button-padding-y: var(--nys-space-2px, 2px);
    --_nys-button-padding-x: var(--nys-space-50, 4px);
    --_nys-button-width-border: 0px;
    --_nys-button-text-decoration: underline;

    /* Text Inverted - Default */
    --_nys-button-color-bg: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text: var(--nys-color-link-reverse, #a7a9ab);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Text Inverted - Hover */
    --_nys-button-color-bg-hover: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-hover: var(
      --nys-color-link-reverse-strong,
      #ededed
    );
    --_nys-button-color-border-hover: var(--nys-color-transparent, #ffffff00);

    /* Text Inverted - Pressed/Active */
    --_nys-button-color-bg-active: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-active: var(
      --nys-color-reverse-strongest,
      #ffffff
    );
    --_nys-button-color-border-active: var(--nys-color-transparent, #ffffff00);

    /* Text Inverted - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-disabled: var(
      --nys-color-text-reverse-disabled,
      #62666a
    );
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
  }

  /* Ghost Inverted */
  :host([variant="ghost"][inverted]) {
    /* Ghost Inverted - Default */
    --_nys-button-color-bg: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Ghost Inverted - Hover */
    --_nys-button-color-bg-hover: var(
      --nys-color-white-transparent-100,
      #ffffff1a
    );
    --_nys-button-color-text-hover: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border-hover: var(--nys-color-transparent, #ffffff00);

    /* Ghost Inverted - Pressed/Active */
    --_nys-button-color-bg-active: var(
      --nys-color-white-transparent-200,
      #ffffff33
    );
    --_nys-button-color-text-active: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border-active: var(--nys-color-transparent, #ffffff00);

    /* Ghost Inverted - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #62666a);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
  }

  /* Circle */
  :host([circle]) {
    --_nys-button-width: var(--_nys-button-height);
    --_nys-button-radius-left: var(--nys-radius-round, 1776px);
    --_nys-button-radius-right: var(--nys-radius-round, 1776px);
    --_nys-button-padding-y: 0;
    --_nys-button-padding-x: 0;
  }

  .nys-button {
    width: var(--_nys-button-width);
    min-height: var(--_nys-button-height);
    /* set every corner individually */
    border-top-left-radius: var(--_nys-button-radius-left);
    border-bottom-left-radius: var(--_nys-button-radius-left);
    border-top-right-radius: var(--_nys-button-radius-right);
    border-bottom-right-radius: var(--_nys-button-radius-right);
    padding: var(--_nys-button-padding-y) var(--_nys-button-padding-x);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--_nys-button-gap);
    font-family: var(--_nys-button-font-family);
    font-size: var(--_nys-button-font-size);
    font-weight: var(--_nys-button-font-weight);
    line-height: var(--_nys-button-line-height);
    text-decoration: var(--_nys-button-text-decoration);
    box-sizing: border-box;
    background-color: var(--_nys-button-color-bg);
    color: var(--_nys-button-color-text);
    border: solid var(--_nys-button-width-border)
      var(--_nys-button-color-border);
    cursor: pointer;
  }

  :host([circle]) .nys-button {
    max-width: var(--_nys-button-height);
    max-height: var(--_nys-button-height);
  }

  .nys-button:hover {
    background-color: var(--_nys-button-color-bg-hover);
    color: var(--_nys-button-color-text-hover);
    border-color: var(--_nys-button-color-border-hover);
  }

  .nys-button:active {
    background-color: var(--_nys-button-color-bg-active);
    color: var(--_nys-button-color-text-active);
    border-color: var(--_nys-button-color-border-active);
  }

  .nys-button:disabled,
  a[disabled] {
    background-color: var(--_nys-button-color-bg-disabled);
    color: var(--_nys-button-color-text-disabled);
    border-color: var(--_nys-button-color-border-disabled);
    cursor: not-allowed;
  }

  .nys-button__linkwrapper:has([disabled]) {
    cursor: not-allowed;
    width: fit-content;
  }

  /* Remove click functionality from disabled link button */
  a[disabled] {
    pointer-events: none;
  }

  a[disabled]:hover {
    background-color: var(--_nys-button-color-bg-disabled);
    color: var(--_nys-button-color-text-disabled);
    border-color: var(--_nys-button-color-border-disabled);
  }

  .nys-button * {
    cursor: pointer;
  }

  .nys-button:disabled * {
    cursor: not-allowed;
  }

  /* The .active-focus comes from components that wants to focus on the <nys-button>'s inner native button (e.g. <nys-fileinput> for form validation) */
  .nys-button:focus-visible,
  .active-focus {
    outline-offset: var(--_nys-button-offset-focus);
    outline: solid var(--_nys-button-width-focus) var(--_nys-button-color-focus);
  }

  .nys-button__text {
    display: flex;
    align-items: center;
    user-select: none;
  }
`;var i6=Object.defineProperty,s6=Object.getOwnPropertyDescriptor,Oe=(r,i,o,c)=>{for(var u=c>1?void 0:c?s6(i,o):i,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=(c?v(i,o,u):v(u))||u);return c&&u&&i6(i,o,u),u};let o6=0;var Vt;const Ae=(Vt=class extends ce{constructor(){super(),this.id="",this.name="",this._size="md",this.fullWidth=!1,this._variant="filled",this.inverted=!1,this.label="",this.ariaLabel="",this.prefixIcon="",this.suffixIcon="",this.circle=!1,this.icon="",this.disabled=!1,this.form="",this.value="",this.ariaDescription="",this._type="button",this.onClick=()=>{},this.href="",this._target="_self",this._internals=this.attachInternals()}get size(){return this._size}set size(r){this._size=Vt.VALID_SIZES.includes(r)?r:"md"}get variant(){return this._variant}set variant(r){this._variant=Vt.VALID_VARIANTS.includes(r)?r:"filled"}get type(){return this._type}set type(r){this._type=Vt.VALID_TYPES.includes(r)?r:"button"}get target(){return this._target}set target(r){this._target=Vt.VALID_TARGETS.includes(r)?r:"_self"}connectedCallback(){super.connectedCallback(),this.id||(this.id=this._generateUniqueId())}_generateUniqueId(){return`nys-button-${Date.now()}-${o6++}`}_manageFormAction(r){typeof this.onClick=="function"&&this.onClick(r);const i=this._internals.form;if(i)switch(this.type){case"submit":i.requestSubmit();break;case"reset":i.reset();break}}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector(".nys-button");i==null||i.classList.remove("active-focus"),this.dispatchEvent(new Event("nys-blur"))}_handleClick(r){if(this.disabled){r.preventDefault();return}this._manageFormAction(r),this.dispatchEvent(new Event("nys-click"))}_handleKeydown(r){if(r.code==="Space"||r.code==="Enter"||r.key===" "||r.key==="Enter"){if(this.disabled)return;if(r.preventDefault(),this.href){const i=this.renderRoot.querySelector("a.nys-button");i&&i.click()}else this.click()}}render(){return L`
      ${this.href?L`
            <div class="nys-button__linkwrapper">
              <a
                class="nys-button"
                id=${ne(this.id)}
                name=${ne(this.name?this.name:void 0)}
                ?disabled=${this.disabled}
                aria-disabled="${this.disabled?"true":"false"}"
                form=${ne(this.form?this.form:void 0)}
                value=${ne(this.value?this.value:void 0)}
                href=${this.href}
                target=${this.target}
                aria-label=${ne(this.ariaLabel||this.label||(this.circle?this.icon:null)||"button")}
                aria-description=${ne(this.ariaDescription||void 0)}
                @click=${this._handleClick}
                @focus="${this._handleFocus}"
                @blur="${this._handleBlur}"
                @keydown="${this._handleKeydown}"
                role="button"
                tabindex="${this.disabled?-1:0}"
              >
                ${this.prefixIcon&&this.variant!=="text"?L`<slot name="prefix-icon">
                      <nys-icon size="16" name=${this.prefixIcon}></nys-icon>
                    </slot>`:""}
                ${this.label&&!this.circle?L`<div class="nys-button__text">${this.label}</div>`:""}
                ${this.suffixIcon&&this.variant!=="text"?L`<slot name="suffix-icon">
                      <nys-icon size="16" name=${this.suffixIcon}></nys-icon>
                    </slot>`:""}
                ${this.circle&&this.icon?L`<slot name="circle-icon"
                      ><nys-icon
                        size=${this.size==="sm"?"24":this.size==="lg"?"40":"32"}
                        name=${this.icon}
                      ></nys-icon
                    ></slot>`:""}
              </a>
            </div>
          `:L`
            <button
              class="nys-button"
              id=${ne(this.id)}
              name=${ne(this.name?this.name:void 0)}
              ?disabled=${this.disabled}
              form=${ne(this.form?this.form:void 0)}
              value=${ne(this.value?this.value:void 0)}
              type=${this.type}
              aria-label=${ne(this.ariaLabel||this.label||(this.circle?this.icon:null)||this.prefixIcon||this.suffixIcon||"button")}
              aria-description=${ne(this.ariaDescription||void 0)}
              @click=${this._handleClick}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
              @keydown="${this._handleKeydown}"
              role="button"
            >
              ${this.prefixIcon&&this.variant!=="text"?L`<slot name="prefix-icon">
                    <nys-icon size="16" name=${this.prefixIcon}></nys-icon>
                  </slot>`:""}
              ${this.label&&!this.circle?L`<div class="nys-button__text">${this.label}</div>`:""}
              ${this.suffixIcon&&this.variant!=="text"?L`<slot name="suffix-icon">
                    <nys-icon size="16" name=${this.suffixIcon}></nys-icon>
                  </slot>`:""}
              ${this.circle&&this.icon?L`<slot name="circle-icon">
                    <nys-icon
                      size=${this.size==="sm"?"24":this.size==="lg"?"40":"32"}
                      name=${this.icon}
                    ></nys-icon>
                  </slot>`:""}
            </button>
          `}
    `}},Vt.VALID_SIZES=["sm","md","lg"],Vt.VALID_VARIANTS=["filled","outline","ghost","text"],Vt.VALID_TYPES=["submit","reset","button"],Vt.VALID_TARGETS=["_self","_blank","_parent","_top","framename"],Vt.styles=l6,Vt.formAssociated=!0,Vt);Oe([p({type:String})],Ae.prototype,"id",2);Oe([p({type:String,reflect:!0})],Ae.prototype,"name",2);Oe([p({reflect:!0})],Ae.prototype,"size",1);Oe([p({type:Boolean,reflect:!0})],Ae.prototype,"fullWidth",2);Oe([p({reflect:!0})],Ae.prototype,"variant",1);Oe([p({type:Boolean,reflect:!0})],Ae.prototype,"inverted",2);Oe([p({type:String})],Ae.prototype,"label",2);Oe([p({type:String})],Ae.prototype,"ariaLabel",2);Oe([p({type:String})],Ae.prototype,"prefixIcon",2);Oe([p({type:String})],Ae.prototype,"suffixIcon",2);Oe([p({type:Boolean,reflect:!0})],Ae.prototype,"circle",2);Oe([p({type:String})],Ae.prototype,"icon",2);Oe([p({type:Boolean,reflect:!0})],Ae.prototype,"disabled",2);Oe([p({type:String})],Ae.prototype,"form",2);Oe([p({type:String})],Ae.prototype,"value",2);Oe([p({type:String})],Ae.prototype,"ariaDescription",2);Oe([p({reflect:!0})],Ae.prototype,"type",1);Oe([p({type:Function})],Ae.prototype,"onClick",2);Oe([p({type:String})],Ae.prototype,"href",2);Oe([p({reflect:!0})],Ae.prototype,"target",1);let g3=Ae;customElements.get("nys-button")||customElements.define("nys-button",g3);const r6=xe`
  :host {
    /* Anything that can be overridden should be defined here */

    /* Global Badge Styles */
    --_nys-badge-width: fit-content;
    --_nys-badge-height: var(--nys-size-600, 48px);
    --_nys-badge-radius: var(--nys-radius-round, 1776px);
    --_nys-badge-padding: var(--nys-space-2-px, 2px) var(--nys-space-100, 8px);
    --_nys-badge-gap: var(--nys-space-50, 4px);
    --_nys-badge-background-color: var(--nys-color-base-weak, #f6f6f6);
    --_nys-badge-border-color: var(--nys-color-base, #62666a);
    --_nys-badge-border-width: var(--nys-border-width-sm, 1px);

    /* Typography */
    --_nys-badge-font-size: var(--nys-font-size-ui-sm, 14px);
    --_nys-badge-font-weight: var(--nys-font-weight-semibold, 600);
    --_nys-badge-line-height: var(--nys-font-lineheight-ui-sm, 24px);
    --_nys-badge-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );

    /* Prefix Font Size */
    --_nys-badge-prefix-font-weight: var(--nys-font-weight-regular, 400);
  }

  /* Sizes */
  :host([size="sm"]) {
    --_nys-badge-font-size: var(--nys-font-size-ui-xs, 12px);
    --_nys-badge-line-height: var(--nys-font-lineheight-ui-xs, 20px);
  }

  /* Intent */
  :host([intent="neutral"]) {
    --_nys-badge-background-color: var(--nys-color-base-weak, #f6f6f6);
    --_nys-badge-border-color: var(--nys-color-base, #62666a);
  }
  :host([intent="error"]) {
    --_nys-badge-background-color: var(--nys-color-error-weak, #f7eaea);
    --_nys-badge-border-color: var(--nys-color-error-strong, #721c1c);
  }
  :host([intent="success"]) {
    --_nys-badge-background-color: var(--nys-color-success-weak, #e8f1ea);
    --_nys-badge-border-color: var(--nys-color-success-strong, #0f3d18);
  }
  :host([intent="warning"]) {
    --_nys-badge-background-color: var(--nys-color-warning-weak, #fefae5);
    --_nys-badge-border-color: var(--nys-color-warning-strong, #6a5700);
  }

  .nys-badge {
    display: flex;
    width: fit-content;
    align-items: center;
    justify-content: center;
    gap: var(--_nys-badge-gap);
    padding: var(--_nys-badge-padding);
    border: var(--_nys-badge-border-width) solid var(--_nys-badge-border-color);
    background-color: var(--_nys-badge-background-color);
    border-radius: var(--_nys-badge-radius);
    font-family: var(--_nys-badge-font-family);
    font-size: var(--_nys-badge-font-size);
    font-weight: var(--_nys-badge-font-weight);
    line-height: var(--_nys-badge-line-height);
    cursor: default;
    --nys-icon-color: var(--_nys-badge-border-color);
  }

  .nys-badge__prefix {
    font-weight: var(--_nys-badge-prefix-font-weight);
  }
`;var c6=Object.defineProperty,u6=Object.getOwnPropertyDescriptor,rn=(r,i,o,c)=>{for(var u=c>1?void 0:c?u6(i,o):i,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=(c?v(i,o,u):v(u))||u);return c&&u&&c6(i,o,u),u},z1;const A1=(z1=class extends ce{constructor(){super(...arguments),this.id="",this.name="",this._size="md",this._intent="neutral",this.prefixLabel="",this.label="",this._prefixIcon="",this._suffixIcon=""}get size(){return this._size}set size(r){this._size=z1.VALID_SIZES.includes(r)?r:"md"}get intent(){return this._intent}set intent(r){this._intent=z1.VALID_INTENT.includes(r)?r:"neutral"}get prefixIcon(){return this._prefixIcon}set prefixIcon(r){r===""||r===null?this._prefixIcon=!0:r==="false"||r===!1?this._prefixIcon="":this._prefixIcon=r}get suffixIcon(){return this._suffixIcon}set suffixIcon(r){r===""||r===null?this._suffixIcon=!0:r==="false"||r===!1?this._suffixIcon="":this._suffixIcon=r}connectedCallback(){super.connectedCallback();const r=this.getAttribute("prefixicon");r!==null&&this.prefixIcon===""&&(this.prefixIcon=r);const i=this.getAttribute("suffixicon");i!==null&&this.suffixIcon===""&&(this.suffixIcon=i)}resolveIcon(r){return r===!0?z1.DEFAULT_ICONS[this.intent]??"info":typeof r=="string"&&r.trim()!==""?r:null}render(){const r=this.resolveIcon(this.prefixIcon),i=this.resolveIcon(this.suffixIcon);return L`
      <div class="nys-badge">
        ${r?L`<nys-icon size="16" name=${r}></nys-icon>`:""}
        ${this.prefixLabel?L`<div class="nys-badge__prefix">${this.prefixLabel}</div>`:""}
        <div class="nys-badge__label">${this.label}</div>
        ${i?L`<nys-icon size="16" name=${i}></nys-icon>`:""}
      </div>
    `}},z1.VALID_SIZES=["sm","md"],z1.VALID_INTENT=["neutral","error","success","warning"],z1.styles=r6,z1.DEFAULT_ICONS={neutral:"info",error:"emergency_home",success:"check_circle",warning:"warning"},z1);rn([p({type:String})],A1.prototype,"id",2);rn([p({type:String,reflect:!0})],A1.prototype,"name",2);rn([p({reflect:!0})],A1.prototype,"size",1);rn([p({reflect:!0})],A1.prototype,"intent",1);rn([p({type:String})],A1.prototype,"prefixLabel",2);rn([p({type:String})],A1.prototype,"label",2);rn([p({type:String,attribute:"prefixicon"})],A1.prototype,"prefixIcon",1);rn([p({type:String,attribute:"suffixicon"})],A1.prototype,"suffixIcon",1);let b3=A1;customElements.get("nys-badge")||customElements.define("nys-badge",b3);const _3=xe`
  :host {
    /* Anything that can be overridden should be defined here */

    /* Global Checkbox Styles */
    --_nys-checkbox-size: var(--nys-size-400, 32px);
    --_nys-checkbox-radius: var(--nys-radius-md, 4px);
    --_nys-checkbox-width-border: var(--nys-border-width-md, 2px);
    --_nys-checkbox-color-focus: var(--nys-color-focus, #004dd1);
    --_nys-checkbox-width-focus: var(--nys-border-width-md, 2px);
    --_nys-checkbox-outline-offset: var(--nys-space-2px, 2px);
    /* space between checkbox and it's label */
    --_nys-checkbox-gap: var(--nys-space-150, 12px);
    /* space between checkboxes */
    --_nys-checkboxgroup-gap: var(--nys-space-200, 16px);

    /* Typography */
    --_nys-checkbox-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-checkbox-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-checkbox-font-weight-400: var(--nys-font-weight-regular, 400);
    --_nys-checkbox-font-weight-600: var(--nys-font-weight-semibold, 600);
    --_nys-checkbox-line-height: var(--nys-font-lineheight-ui-md, 24px);

    /* Global Checkbox Colors */
    --_nys-checkbox-color: var(
      --nys-color-ink,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-checkbox-required-color: var(
      --nys-color-danger,
      var(--nys-color-red-600, #b52c2c)
    );

    /* Default (Empty) */
    --_nys-checkbox-color-bg: var(--nys-color-ink-reverse, #ffffff);
    --_nys-checkbox-color-border: var(--nys-color-neutral-600, #62666a);
    /* Empty + Hovered */
    --_nys-checkbox-hover-color-bg: var(--nys-color-neutral-50, #ededed);
    --_nys-checkbox-hover-color-border: var(--nys-color-ink, #1b1b1b);
    /* Empty + Pressed */
    --_nys-checkbox-pressed-color-bg: var(--nys-color-neutral-100, #d0d0ce);
    --_nys-checkbox-pressed-color-border: var(--nys-color-ink, #1b1b1b);
    /* Checked */
    --_nys-checkbox-checked-color-bg: var(--nys-color-theme, #154973);
    --_nys-checkbox-checked-color-border: var(--nys-color-theme, #154973);
    /* Checked + Hovered */
    --_nys-checkbox-checked-hover-color-bg: var(
      --nys-color-theme-strong,
      #0e324f
    );
    --_nys-checkbox-checked-hover-color-border: var(
      --nys-color-theme-strong,
      #0e324f
    );
    /* Checked + Pressed */
    --_nys-checkbox-checked-pressed-color-bg: var(
      --nys-color-theme-stronger,
      #081b2b
    );
    --_nys-checkbox-checked-pressed-color-border: var(
      --nys-color-theme-stronger,
      #081b2b
    );
    /* Disabled */
    --_nys-checkbox-disabled-color-bg: var(--nys-color-ink-reverse, #f0f0f0);
    --_nys-checkbox-disabled-color-border: var(
      --nys-color-neutral-400,
      #757575
    );
    --_nys-checkbox-disabled-color-text: var(
      --nys-color-text-disabled,
      #bec0c1
    );
    /* Disabled Checked */
    --_nys-checkbox-disabled-checked-color-bg: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
    --_nys-checkbox-disabled-checked-color-border: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
  }

  /* Small Variant */
  :host([size="sm"]) {
    --_nys-checkbox-size: var(--nys-size-300, 24px);
    --_nys-checkbox-radius: var(--nys-radius-sm, 2px);
    --_nys-checkboxgroup-gap: var(--nys-space-100, 8px);
    --_nys-checkbox-gap: var(--nys-space-100, 8px);
  }
  /* Medium Variant */
  :host([size="md"]) {
    --_nys-checkbox-size: var(--nys-size-400, 32px);
    --_nys-checkbox-radius: var(--nys-radius-md, 4px);
  }

  /* Tile Variant */
  :host([tile]) {
    --_nys-checkbox-font-weight-label: var(--nys-font-weight-semibold, 600);
    --_nys-checkbox-tile-border-width: var(--nys-border-width-sm, 1px);
    --_nys-checkbox-tile-border-radius: var(--nys-radius-md, 4px);
    --_nys-checkbox-tile-border-color: var(--nys-color-neutral-100, #d0d0ce);
    --_nys-checkbox-tile-bg-color: var(--nys-color-ink-reverse, #ffffff);
    --_nys-checkbox-tile-padding-x: var(--nys-space-250, 20px);
    --_nys-checkbox-tile-padding-y: var(--nys-space-200, 16px);
    /* Hover */
    --_nys-checkbox-hover-tile-border-color: var(
      --nys-color-neutral-700,
      #4a4d4f
    );
    --_nys-checkbox-hover-tile-bg-color: var(--nys-color-ink-reverse, #ffffff);
    /* Pressed */
    --_nys-checkbox-pressed-tile-border-color: var(
      --nys-color-neutral-900,
      #1b1b1b
    );
    --_nys-checkbox-pressed-tile-bg-color: var(
      --nys-color-ink-reverse,
      #ffffff
    );
    /* Checked */
    --_nys-checkbox-checked-tile-border-color: var(
      --nys-color-theme-mid,
      #457aa5
    );
    --_nys-checkbox-checked-tile-bg-color: var(
      --nys-color-theme-faint,
      #f7fafd
    );
    /* Disabled */
    --_nys-checkbox-disabled-tile-bg-color: var(
      --nys-color-ink-reverse,
      #f0f0f0
    );
    --_nys-checkbox-disabled-tile-border-color: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
  }

  :host([tile][size="sm"]) {
    --_nys-checkbox-tile-padding-x: var(--nys-space-200, 16px);
    --_nys-checkbox-tile-padding-y: var(--nys-space-150, 12px);
  }

  :host([tile][showError]) {
    --_nys-checkbox-tile-border-color: var(--nys-color-danger, #b52c2c);
    --_nys-checkbox-hover-tile-border-color: var(--nys-color-danger, #b52c2c);
    --_nys-checkbox-pressed-tile-border-color: var(--nys-color-danger, #b52c2c);
    --_nys-checkbox-checked-tile-border-color: var(--nys-color-danger, #b52c2c);
  }

  #single-error-message {
    --_nys-errormessage-margin-top: var(--nys-space-50, 4px);
  }

  .nys-checkboxgroup {
    display: flex;
    flex-direction: column;
    gap: var(--nys-space-200, 16px);
    font-family: var(--_nys-checkbox-font-family);
    font-size: var(--_nys-checkbox-font-size);
    line-height: var(--_nys-checkbox-line-height);
  }

  .nys-checkboxgroup__content {
    display: flex;
    flex-direction: column;
    gap: var(--_nys-checkboxgroup-gap);
  }

  .nys-checkbox {
    display: flex;
    font-family: var(--_nys-checkbox-font-family);
    font-size: var(--_nys-checkbox-font-size);
    line-height: var(--_nys-checkbox-line-height);

    /* Tile */
    border-radius: var(--_nys-checkbox-tile-border-radius);
    border: var(--_nys-checkbox-tile-border-width) solid
      var(--_nys-checkbox-tile-border-color);
    background: var(--_nys-checkbox-tile-bg-color);
    padding: var(--_nys-checkbox-tile-padding-y)
      var(--_nys-checkbox-tile-padding-x);
    gap: var(--_nys-checkbox-gap);
  }

  /* wraps the native checkbox and it's icon */
  .nys-checkbox__checkboxwrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: var(--_nys-checkbox-size);
  }

  .nys-checkbox__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Centering the icon visually */
    pointer-events: none;
    color: white;
  }

  .nys-checkbox__checkbox {
    appearance: none;
    background-repeat: no-repeat;
    background-position: center;
    width: var(--_nys-checkbox-size);
    min-width: var(--_nys-checkbox-size);
    min-height: var(--_nys-checkbox-size);
    height: var(--_nys-checkbox-size);
    max-width: var(--_nys-checkbox-size);
    max-height: var(--_nys-checkbox-size);
    border: solid var(--_nys-checkbox-width-border)
      var(--_nys-checkbox-color-border);
    background-color: var(--_nys-checkbox-color-bg);
    border-radius: var(--_nys-checkbox-radius);
    outline-offset: var(--_nys-checkbox-outline-offset);
    outline: none;
  }

  /* Pointer cursor for unchecked checkbox */
  .nys-checkbox:hover,
  .nys-checkbox:hover * {
    cursor: pointer;
  }

  /* Checked */
  .nys-checkbox__checkbox:not(:disabled):checked {
    background-color: var(--_nys-checkbox-checked-color-bg);
    border-color: var(--_nys-checkbox-checked-color-border);
  }
  :host([tile])
    .nys-checkbox:has(.nys-checkbox__checkbox:not(:disabled):checked) {
    border-color: var(--_nys-checkbox-checked-tile-border-color);
    background-color: var(--_nys-checkbox-checked-tile-bg-color);
  }

  /* Checked + Disabled */
  .nys-checkbox__checkbox:disabled:checked {
    background-color: var(--_nys-checkbox-disabled-checked-color-bg);
    border-color: var(--_nys-checkbox-disabled-checked-color-border);
  }
  :host([tile]) .nys-checkbox:has(.nys-checkbox__checkbox:disabled:checked) {
    border-color: var(--_nys-checkbox-disabled-tile-border-color);
    background-color: var(--_nys-checkbox-disabled-tile-bg-color);
  }

  /* Disabled */
  .nys-checkbox__checkbox:disabled {
    background-color: var(--_nys-checkbox-disabled-color-bg);
    border-color: var(--_nys-checkbox-disabled-color-border);
    cursor: not-allowed;
  }
  .nys-checkbox__content:has(.nys-checkbox__checkbox:disabled)
    .nys-checkbox__text
    * {
    color: var(--_nys-checkbox-disabled-color-text);
    cursor: not-allowed;
  }
  :host([tile]) .nys-checkbox:has(.nys-checkbox__checkbox:disabled) {
    background-color: var(--_nys-checkbox-disabled-color-bg);
    border-color: var(--_nys-checkbox-disabled-color-border);
    cursor: not-allowed;
  }

  /* Hover - not checked */
  .nys-checkbox__checkbox:hover:not(:disabled):not(:checked) {
    background-color: var(--_nys-checkbox-hover-color-bg);
    border-color: var(--_nys-checkbox-hover-color-border);
  }
  :host([tile])
    .nys-checkbox:hover:has(
      .nys-checkbox__checkbox:not(:disabled):not(:checked)
    ) {
    border-color: var(--_nys-checkbox-hover-tile-border-color);
    background-color: var(--_nys-checkbox-hover-tile-bg-color);
    outline: solid var(--_nys-checkbox-tile-border-width)
      var(--_nys-checkbox-hover-tile-border-color);
  }

  /* Hover + Checked */
  .nys-checkbox__checkbox:hover:not(:disabled):checked {
    border-color: var(--_nys-checkbox-checked-hover-color-border);
    background-color: var(--_nys-checkbox-checked-hover-color-bg);
  }
  :host([tile])
    .nys-checkbox:hover:has(.nys-checkbox__checkbox:not(:disabled):checked) {
    outline: solid var(--_nys-checkbox-tile-border-width)
      var(--_nys-checkbox-checked-tile-border-color);
  }

  /* Pressed - not checked */
  .nys-checkbox__checkbox:active:not(:disabled):not(:checked) {
    background-color: var(--_nys-checkbox-pressed-color-bg);
    border-color: var(--_nys-checkbox-pressed-color-border);
  }
  :host([tile])
    .nys-checkbox:has(
      .nys-checkbox__checkbox:active:not(:disabled):not(:checked)
    ) {
    border-color: var(--_nys-checkbox-pressed-tile-border-color);
    background-color: var(--_nys-checkbox-pressed-tile-bg-color);
    outline: solid var(--_nys-checkbox-tile-border-width)
      var(--_nys-checkbox-pressed-tile-border-color);
  }

  /* Pressed + Checked */
  .nys-checkbox__checkbox:active:not(:disabled):checked {
    border-color: var(--_nys-checkbox-checked-pressed-color-border);
    background-color: var(--_nys-checkbox-checked-pressed-color-bg);
  }

  /* Focused */
  :host(:not([tile])) .nys-checkbox__checkbox:focus {
    outline: solid var(--_nys-checkbox-width-focus)
      var(--_nys-checkbox-color-focus);
  }
  :host([tile]) .nys-checkbox:has(*:focus) {
    outline: solid var(--_nys-checkbox-tile-border-width)
      var(--_nys-checkbox-color-focus) !important;
    border-color: var(--_nys-checkbox-color-focus) !important;
  }

  /* Checkbox Label Holder */
  .nys-checkbox__text {
    display: flex;
    flex-direction: column;
    margin: auto 0; /* Center text if single line label */
    align-items: flex-start;
  }

  /* Label styling */
  .nys-checkbox__label {
    font-weight: var(--_nys-checkbox-font-weight-400);
    color: var(--nys-color-text, #1b1b1b);
  }

  /* Description styling */
  .nys-checkbox__description {
    font-weight: var(--_nys-checkbox-font-weight-400);
    font-style: italic;
    text-align: left;
  }

  /* Required */
  .nys-checkbox__required {
    color: var(--_nys-checkbox-required-color);
  }

  .nys-checkbox__requiredwrapper {
    display: flex;
    gap: 3px;
  }

  /* Screen readers ONLY */
  fieldset {
    all: unset;
    display: contents;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    border: 0;
  }
`;var d6=Object.defineProperty,h6=Object.getOwnPropertyDescriptor,Qt=(r,i,o,c)=>{for(var u=c>1?void 0:c?h6(i,o):i,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=(c?v(i,o,u):v(u))||u);return c&&u&&d6(i,o,u),u};let f6=0;var xa;const Rt=(xa=class extends ce{constructor(){super(),this.id="",this.name="",this.required=!1,this.optional=!1,this.showError=!1,this.errorMessage="",this.label="",this.description="",this.tile=!1,this._slottedDescriptionText="",this._size="md",this._internals=this.attachInternals()}get size(){return this._size}set size(r){this._size=xa.VALID_SIZES.includes(r)?r:"md"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-checkbox-${Date.now()}-${f6++}`),this.addEventListener("nys-change",this._handleCheckboxChange),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("nys-change",this._handleCheckboxChange),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setGroupExist(),this._updateCheckboxSize(),this._updateCheckboxTile(),this._updateCheckboxShowError(),this._getSlotDescriptionForAria()}updated(r){r.has("required")&&this.required&&this._setupCheckboxRequired(),r.has("size")&&this._updateCheckboxSize(),r.has("tile")&&this._updateCheckboxTile(),r.has("showError")&&this._updateCheckboxShowError()}_setGroupExist(){this.querySelectorAll("nys-checkbox").forEach(r=>{r.groupExist=!0})}async _setupCheckboxRequired(){const r=this.querySelector("nys-checkbox"),i=this.errorMessage||"This field is required",o=r?await r.getInputElement():null;this._internals.setValidity({valueMissing:!0},i,o||this)}async _manageCheckboxRequired(){if(this.required){const r=this.errorMessage||"Please select at least one option.",i=this.querySelector("nys-checkbox"),o=i?await i.getInputElement():null;let c=!1;this.querySelectorAll("nys-checkbox").forEach(u=>{u.checked&&(c=!0)}),c?(this._internals.setValidity({}),this.showError=!1):(this._internals.setValidity({valueMissing:!0},r,o||this),this.showError=!0)}}_updateCheckboxSize(){this.querySelectorAll("nys-checkbox").forEach(r=>{r.setAttribute("size",this.size)})}_updateCheckboxTile(){this.querySelectorAll("nys-checkbox").forEach(r=>{this.tile?r.toggleAttribute("tile",!0):r.removeAttribute("tile")})}_updateCheckboxShowError(){this.querySelectorAll("nys-checkbox").forEach(r=>{this.showError?r.setAttribute("showError",""):r.removeAttribute("showError")})}_getSlotDescriptionForAria(){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector('slot[name="description"]'),o=(i==null?void 0:i.assignedNodes({flatten:!0}))||[];this._slottedDescriptionText=o.map(c=>{var u;return(u=c.textContent)==null?void 0:u.trim()}).filter(Boolean).join(", ")}async _handleInvalid(r){r.preventDefault(),this.showError=!0,this._manageCheckboxRequired();const i=this.querySelector("nys-checkbox"),o=i?await i.getInputElement():null;if(o){const c=this._internals.form;c?Array.from(c.elements).find(u=>{if(u.tagName.toLowerCase()==="nys-checkboxgroup"){if(Array.from(this.querySelectorAll("nys-checkbox")).filter(f=>f.checked).length===0)return u}else return typeof u.checkValidity=="function"&&!u.checkValidity()})===this&&o.focus():o.focus()}}_handleCheckboxChange(r){const i=r,{name:o}=i.detail,c=Array.from(this.querySelectorAll("nys-checkbox")).filter(u=>u.checked).map(u=>u.value);this.name=o,this._internals.setFormValue(c.join(", ")),this._manageCheckboxRequired()}render(){return L`
      <div class="nys-checkboxgroup">
        <nys-label
          for=${this.id}
          label=${this.label}
          description=${this.description}
          flag=${this.required?"required":this.optional?"optional":""}
        >
          <slot name="description" slot="description">${this.description}</slot>
        </nys-label>
        <div class="nys-checkboxgroup__content">
          <fieldset>
            <legend class="sr-only">
              ${this.label}${this._slottedDescriptionText?` ${this._slottedDescriptionText}`:this.description?` ${this.description}`:""}
            </legend>
            <slot></slot>
          </fieldset>
        </div>
        <nys-errormessage
          ?showError=${this.showError}
          errorMessage=${this._internals.validationMessage||this.errorMessage}
          .showDivider=${!this.tile}
        ></nys-errormessage>
      </div>
    `}},xa.VALID_SIZES=["sm","md"],xa.styles=_3,xa.formAssociated=!0,xa);Qt([p({type:String})],Rt.prototype,"id",2);Qt([p({type:String,reflect:!0})],Rt.prototype,"name",2);Qt([p({type:Boolean,reflect:!0})],Rt.prototype,"required",2);Qt([p({type:Boolean,reflect:!0})],Rt.prototype,"optional",2);Qt([p({type:Boolean,reflect:!0})],Rt.prototype,"showError",2);Qt([p({type:String})],Rt.prototype,"errorMessage",2);Qt([p({type:String})],Rt.prototype,"label",2);Qt([p({type:String})],Rt.prototype,"description",2);Qt([p({type:Boolean,reflect:!0})],Rt.prototype,"tile",2);Qt([bt()],Rt.prototype,"_slottedDescriptionText",2);Qt([p({reflect:!0})],Rt.prototype,"size",1);let C3=Rt;customElements.get("nys-checkboxgroup")||customElements.define("nys-checkboxgroup",C3);var y6=Object.defineProperty,v6=Object.getOwnPropertyDescriptor,Ct=(r,i,o,c)=>{for(var u=c>1?void 0:c?v6(i,o):i,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=(c?v(i,o,u):v(u))||u);return c&&u&&y6(i,o,u),u};let p6=0;var wa;const ct=(wa=class extends ce{constructor(){super(),this.checked=!1,this.disabled=!1,this.required=!1,this.label="",this.description="",this.id="",this.name="",this.value="",this.showError=!1,this.errorMessage="",this.groupExist=!1,this.tile=!1,this._size="md",this._internals=this.attachInternals()}get size(){return this._size}set size(r){this._size=wa.VALID_SIZES.includes(r)?r:"md"}async getInputElement(){var r;return await this.updateComplete,((r=this.shadowRoot)==null?void 0:r.querySelector("input"))||null}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-checkbox-${Date.now()}-${p6++}`),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue(),this._manageRequire()}formResetCallback(){this.checked=!1}_setValue(){this.groupExist||this._internals.setFormValue(this.checked?this.value:null)}_manageRequire(){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("input"),o=this.errorMessage||"This field is required";i&&(this.required&&!this.checked?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},o,i)):this._internals.setValidity({}))}_setValidityMessage(r=""){var i,o;const c=(i=this.shadowRoot)==null?void 0:i.querySelector("input");c&&(this.showError=!!r,(o=this.errorMessage)!=null&&o.trim()&&r!==""&&(r=this.errorMessage),this._internals.setValidity(r?{customError:!0}:{},r,c))}_validate(){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("input");if(!i)return;const o=i.validity;let c="";o.valueMissing&&(c="This field is required"),this._setValidityMessage(c)}checkValidity(){var r;if(this.required&&!this.checked)return!1;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("input");return i?i.checkValidity():!0}_handleInvalid(r){var i;r.preventDefault(),this.showError=!0,this._validate();const o=(i=this.shadowRoot)==null?void 0:i.querySelector("input");if(o){const c=this._internals.form;c?Array.from(c.elements).find(u=>typeof u.checkValidity=="function"&&!u.checkValidity())===this&&o.focus():o.focus()}}_emitChangeEvent(){this.dispatchEvent(new CustomEvent("nys-change",{detail:{checked:this.checked,name:this.name,value:this.value},bubbles:!0,composed:!0}))}_handleChange(r){const{checked:i}=r.target;this.checked=i,this.groupExist||this._internals.setFormValue(this.checked?this.value:null),this._validate(),this._emitChangeEvent()}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this.dispatchEvent(new Event("nys-blur"))}async _handleKeydown(r){r.code==="Space"&&(r.preventDefault(),this.disabled||(this.checked=!this.checked,this._internals.setFormValue(this.checked?this.value:null),await this.updateComplete,this._validate(),this._emitChangeEvent()))}render(){var r;return L`
      <label class="nys-checkbox">
        <div class="nys-checkbox__checkboxwrapper">
          <input
            id="${this.id}"
            class="nys-checkbox__checkbox"
            type="checkbox"
            name="${ne(this.name?this.name:void 0)}"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            .value=${this.value}
            ?required="${this.required}"
            aria-checked="${this.checked}"
            aria-disabled="${this.disabled?"true":"false"}"
            aria-required="${this.required}"
            aria-describedby="group-info"
            @change="${this._handleChange}"
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
            @keydown="${this._handleKeydown}"
          />
          ${this.checked?L`<nys-icon
                for="${this.id}"
                name="check"
                size="${this.size==="md"?"4xl":this.size==="sm"?"2xl":"xl"}"
                class="nys-checkbox__icon"
              ></nys-icon>`:""}
        </div>
        ${this.label&&L` <div class="nys-checkbox__text">
          <div class="nys-checkbox__requiredwrapper">
            <div class="nys-checkbox__label">${this.label}</div>
            ${this.required?L`<div class="nys-checkbox__required">*</div>`:""}
          </div>
          <div class="nys-checkbox__description">
            <slot name="description">${this.description}</slot>
          </div>
        </div>`}
      </label>
      ${((r=this.parentElement)==null?void 0:r.tagName.toLowerCase())!=="nys-checkboxgroup"?L`<nys-errormessage
            id="single-error-message"
            ?showError=${this.showError}
            errorMessage=${this._internals.validationMessage||this.errorMessage}
            .showDivider=${!this.tile}
          ></nys-errormessage>`:""}
    `}},wa.VALID_SIZES=["sm","md"],wa.styles=_3,wa.formAssociated=!0,wa);Ct([p({type:Boolean,reflect:!0})],ct.prototype,"checked",2);Ct([p({type:Boolean,reflect:!0})],ct.prototype,"disabled",2);Ct([p({type:Boolean,reflect:!0})],ct.prototype,"required",2);Ct([p({type:String})],ct.prototype,"label",2);Ct([p({type:String})],ct.prototype,"description",2);Ct([p({type:String})],ct.prototype,"id",2);Ct([p({type:String,reflect:!0})],ct.prototype,"name",2);Ct([p({type:String})],ct.prototype,"value",2);Ct([p({type:Boolean,reflect:!0})],ct.prototype,"showError",2);Ct([p({type:String})],ct.prototype,"errorMessage",2);Ct([p({type:Boolean})],ct.prototype,"groupExist",2);Ct([p({type:Boolean,reflect:!0})],ct.prototype,"tile",2);Ct([p({reflect:!0})],ct.prototype,"size",1);let m3=ct;customElements.get("nys-checkbox")||customElements.define("nys-checkbox",m3);const g6=xe`
  :host {
    --_nys-errormessage-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-errormessage-font-weight: var(--nys-font-weight-regular, 400);
    --_nys-errormessage-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-errormessage-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-errormessage-letter-spacing: var(
      --nys-font-letterspacing-ui-md,
      0.044px
    );
    --_nys-errormessage-color: var(
      --nys-color-danger,
      var(--nys-color-red-600, #b52c2c)
    );

    /* Spacing */
    --_nys-errormessage-gap: var(--nys-space-100, 8px);
    --_nys-errormessage-divider-gap: var(--nys-space-50, 4px);
    --_nys-errormessage-divider-width: var(--nys-border-width-sm, 1px);

    --_nys-errormessage-margin-top: 0;
  }

  .nys-errormessage {
    display: flex;
    align-items: center;
    gap: var(--_nys-errormessage-gap);
    font-family: var(--_nys-errormessage-font-family);
    font-weight: var(--_nys-errormessage-font-weight);
    font-size: var(--_nys-errormessage-font-size);
    line-height: var(--_nys-errormessage-line-height);
    letter-spacing: var(--_nys-errormessage-letter-spacing);
    color: var(--_nys-errormessage-color);
    margin-top: var(--_nys-errormessage-margin-top);
  }

  .nys-errormessage[showDivider] {
    padding-top: var(--_nys-errormessage-divider-gap);
    margin-top: var(--_nys-errormessage-divider-gap);
    border-top: var(--_nys-errormessage-divider-width) solid
      var(--_nys-errormessage-color);
  }
`;var b6=Object.defineProperty,Jo=(r,i,o,c)=>{for(var u=void 0,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=v(i,o,u)||u);return u&&b6(i,o,u),u};const qo=class extends ce{constructor(){super(),this.showError=!1,this.errorMessage="",this.showDivider=!1,this._internals=this.attachInternals()}render(){return L`${this.showError?L`<div class="nys-errormessage" ?showDivider=${this.showDivider}>
          <nys-icon name="error" size="2xl"></nys-icon>
          ${this._internals.validationMessage||this.errorMessage}
        </div>`:""}`}};qo.styles=g6,qo.formAssociated=!0;let yi=qo;Jo([p({type:Boolean})],yi.prototype,"showError");Jo([p({type:String})],yi.prototype,"errorMessage");Jo([p({type:Boolean,reflect:!0})],yi.prototype,"showDivider");customElements.get("nys-errormessage")||customElements.define("nys-errormessage",yi);async function _6(r,i){if(!i||i.trim()==="")return!0;const o=i.toLowerCase().split(",").map(f=>f.trim()),c=r.name.toLowerCase(),u=c.includes(".")?c.split(".").pop():"";for(const f of o)if(f.startsWith(".")&&f.slice(1)===u||f.endsWith("/*")&&r.type.startsWith(f.slice(0,-1))||r.type===f)return!0;return!1}const C6=xe`
  :host {
    /* Global Fileinput Styles */
    --_nys-fileinput-gap: var(--nys-space-100, 8px);

    /* Typography */
    --_nys-fileinput-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-fileinput-font-weight: var(--nys-font-weight-semibold, 600);
    --_nys-fileinput-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-fileinput-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );

    /* Dropzone */
    --_nys-fileinput-dropzone-background: var(--nys-color-ink-reverse, #fff);
    --_nys-fileinput-dropzone-radius: var(
      --nys-radius-lg,
      var(--nys-space-100, 8px)
    );
    --_nys-fileinput-dropzone-border: var(--nys-border-width-sm, 1px) dashed
      var(--nys-color-neutral-200, #bec0c1);
    --_nys-fileinput-dropzone-color: var(--nys-color-text-disabled, #bec0c1);
  }

  .nys-fileinput {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(--_nys-fileinput-gap);
    font-family: var(--_nys-fileinput-font-family);
    font-size: var(--_nys-fileinput-font-size);
    font-weight: var(--_nys-fileinput-font-weight);
    line-height: var(--_nys-fileinput-line-height);
  }
  :host([width="lg"]) .nys-fileinput {
    max-width: var(--nys-form-width-lg, 384px);
  }

  ul {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--_nys-fileinput-gap);
  }

  /***** Dragzone *****/
  .nys-fileinput__dropzone {
    display: flex;
    padding: var(--nys-space-400, 32px) var(--nys-space-200, 16px);
    justify-content: center;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    border-radius: var(--_nys-fileinput-dropzone-radius);
    outline: var(--_nys-fileinput-dropzone-border);
    background: var(--_nys-fileinput-dropzone-background);
    transition: all 60ms ease-in-out;
  }

  .nys-fileinput__dropzone:hover {
    cursor: pointer;
    --_nys-fileinput-dropzone-border: var(--nys-border-width-md, 2px) dashed
      var(--nys-color-neutral-700, #4a4d4f);
  }

  .nys-fileinput__dropzone.drag-active {
    --_nys-fileinput-dropzone-border: var(--nys-border-width-md, 2px) solid
      var(--nys-color-theme, #154973);
    --_nys-fileinput-dropzone-background: var(--nys-color-theme-faint, #f7fafd);
  }

  .nys-fileinput__dropzone.error {
    --_nys-fileinput-dropzone-border: var(--nys-border-width-md, 1px) dashed
      var(--nys-color-danger, #b52c2c);
  }

  .nys-fileinput__dropzone.error:hover {
    --_nys-fileinput-dropzone-border: var(--nys-border-width-sm, 2px) dashed
      var(--nys-color-emergency, #721c1c);
  }

  .nys-fileinput__dropzone.disabled {
    cursor: not-allowed;
    --_nys-fileinput-dropzone-border: var(--nys-border-width-sm, 1px) dashed
      var(--nys-color-neutral-300, #a7a9ab);
    --_nys-fileinput-dropzone-background: var(--nys-color-neutral-10, #f6f6f6);
    color: var(--_nys-fileinput-dropzone-color);
  }

  progress {
    display: flex;
    width: 100%;
    height: 6px;
    border-radius: var(--nys-radius-round, 1776px);
    background: var(--_nys-fileinput-progress-background);
    overflow: hidden;
    appearance: none;
    border: none;
  }
  progress::-moz-progress-bar {
    background: var(--_nys-fileinput-progress-background);
  }
  progress::-webkit-progress-value {
    background: var(--_nys-fileinput-progress-background);
  }
  progress::-webkit-progress-bar {
    background: var(--_nys-fileinput-progress-background);
  }
`,m6=xe`
  :host {
    /* Global fileitem Styles */
    --_nys-fileitem-items-radius: var(--nys-radius-md, 4px);
    --_nys-fileitem-items-padding: var(--nys-space-100, 8px)
      var(--nys-space-200, 16px);
    --_nys-fileitem-items-background: var(--nys-color-ink-reverse, #fff);
    --_nys-fileitem-items-border: var(--nys-border-width-sm, 1px) solid
      var(--nys-color-neutral-100, #d0d0ce);
    --_nys-fileitem-error-color: var(--nys-color-danger, #b52c2c);

    /* Typography */
    --_nys-fileitem-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-fileitem-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-fileitem-font-weight-400: var(--nys-font-weight-regular, 400);
    --_nys-fileitem-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-fileitem-letterspacing: var(--nys-font-letterspacing-ui-md, 0.044px);

    /* Progress Bar */
    --_nys-fileitem-progress-background: var(--nys-color-neutral-50, #ededed);
    --_nys-fileitem-progress-fill-background: var(--nys-color-info, #004dd1);
  }

  /***** File List Item *****/
  .file-item {
    position: relative;
    border-radius: var(--_nys-fileitem-items-radius);
    border: var(--_nys-fileitem-items-border);
    background: var(--_nys-fileitem-items-background);
  }

  .file-item.error {
    --_nys-fileitem-items-border: var(--nys-border-width-sm, 1px) solid
      var(--nys-color-danger, #b52c2c);
  }

  .file-item__main {
    display: flex;
    justify-items: center;
    align-items: center;
    gap: var(--_nys-fileinput-gap);
    padding: var(--_nys-fileitem-items-padding);
    height: 56px;
    box-sizing: border-box;
  }

  .file-item__info {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    font-family: var(--_nys-fileitem-font-family);
    font-size: var(--_nys-fileitem-font-size);
    font-style: normal;
    font-weight: var(--_nys-fileitem-font-weight-400);
    line-height: var(--_nys-fileitem-line-height);
    letter-spacing: var(--_nys-fileitem-letterspacing);
  }

  .file-item__info-name {
    display: flex;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    align-items: center;
  }

  .file-item__info-name-start {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-shrink: 1;
    min-width: 0;
  }

  .file-item p {
    margin: 0;
  }

  .file-item__error {
    color: var(--_nys-fileitem-error-color);
    text-overflow: ellipsis;
    font-weight: 700;
  }

  /**** Progress Bar ****/
  progress {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 6px;
    border-radius: var(--nys-radius-round, 1776px);
    background: var(--_nys-fileitem-progress-fill-background);
    overflow: hidden;
    appearance: none;
  }
  /* Track */
  progress::-moz-progress-bar {
    background: var(--_nys-fileitem-progress-background);
  }
  /* Filled value (the blue bar) */
  progress::-webkit-progress-value {
    background: var(--_nys-fileitem-progress-fill-background);
  }
  /* Firefox */
  progress::-webkit-progress-bar {
    background: var(--_nys-fileitem-progress-background);
  }

  /**** Icon ****/
  .file-icon[name="progress_activity"] {
    animation: spin 1s linear infinite;
  }

  .file-icon[name="error"] {
    color: var(--_nys-fileitem-error-color);
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;var x6=Object.defineProperty,vi=(r,i,o,c)=>{for(var u=void 0,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=v(i,o,u)||u);return u&&x6(i,o,u),u};const x3=class extends ce{constructor(){super(...arguments),this.filename="",this.status="pending",this.progress=0,this.errorMessage=""}_handleRemove(){this.dispatchEvent(new CustomEvent("nys-fileRemove",{detail:{filename:this.filename},bubbles:!0,composed:!0}))}splitFilename(i){const o=i.lastIndexOf("."),c=o!==-1?i.slice(o):"",u=o!==-1?i.slice(0,o):i,f=u.slice(0,u.length-3),v=u.slice(-3);return{startPart:f,endPart:v,extension:c}}render(){const{startPart:i,endPart:o,extension:c}=this.splitFilename(this.filename);return L`
      <div
        class="file-item ${this.status}"
        aria-busy=${this.status==="processing"?"true":"false"}
        aria-label="You have selected ${this.filename}"
      >
        <div class="file-item__main" role="group">
          <nys-icon
            class="file-icon"
            name=${this.status==="processing"?"progress_activity":this.status==="error"?"error":"attach_file"}
            size="2xl"
          ></nys-icon>
          <div class="file-item__info">
            <div class="file-item__info-name">
              <span class="file-item__info-name-start">${i}</span>
              <span class="file-item__info-name-end"
                >${o}${c}</span
              >
            </div>
            ${this.errorMessage?L`<p
                  class="file-item__error"
                  role="alert"
                  aria-live="assertive"
                  aria-invalid="true"
                  aria-errormessage=${this.errorMessage}
                  id="${this.filename}-error"
                >
                  ${this.errorMessage}
                </p>`:null}
          </div>
          <nys-button
            circle
            icon="close"
            ariaLabel="close button"
            size="sm"
            variant="ghost"
            .onClick=${()=>this._handleRemove()}
            ariaLabel="Remove file: ${this.filename}"
          ></nys-button>
        </div>
        ${this.status==="processing"?L`<div
              class="file-item__progress-container"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow="${this.progress}"
              aria-label="Upload progress for ${this.filename}"
            >
              <progress value=${this.progress} max="100"></progress>
            </div>`:null}
      </div>
    `}};x3.styles=m6;let jl=x3;vi([p({type:String})],jl.prototype,"filename");vi([p({type:String})],jl.prototype,"status");vi([p({type:Number})],jl.prototype,"progress");vi([p({type:String})],jl.prototype,"errorMessage");customElements.define("nys-fileitem",jl);var w6=Object.defineProperty,mt=(r,i,o,c)=>{for(var u=void 0,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=v(i,o,u)||u);return u&&w6(i,o,u),u};let k6=0;const Bo=class extends ce{constructor(){super(),this.id="",this.name="",this.label="",this.description="",this.multiple=!1,this.accept="",this.disabled=!1,this.required=!1,this.optional=!1,this.showError=!1,this.errorMessage="",this.dropzone=!1,this.width="full",this._selectedFiles=[],this._dragActive=!1,this._internals=this.attachInternals()}get _isDropDisabled(){return this.disabled||!this.multiple&&this._selectedFiles.length>0}get _buttonAriaLabel(){return this._selectedFiles.length===0?this.multiple?"Choose files: ":"Choose file: ":this.multiple?"Change files: ":"Change file: "}get _buttonAriaDescription(){if(this._selectedFiles.length===0)return`${this.label+" "+this.description}`;const i=this._selectedFiles.some(c=>c.status==="error");let o="";if(this._selectedFiles.length===1)o=`You have selected ${this._selectedFiles[0].file.name}.`;else{const c=this._selectedFiles.map(u=>u.file.name).join(", ");o=`You have selected ${this._selectedFiles.length} files: ${c}`}return`${o}${i?" Error: One or more files are not valid file types.":""}`}get _innerNysButton(){var i;const o=this.renderRoot.querySelector('[name="file-btn"]');return(i=o==null?void 0:o.shadowRoot)==null?void 0:i.querySelector("button")}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-fileinput-${Date.now()}-${k6++}`),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}_setValue(){var i;if(this.multiple){const o=this._selectedFiles.map(c=>c.file);if(o.length>0){const c=new FormData;o.forEach(u=>{c.append(this.name,u)}),this._internals.setFormValue(c)}else this._internals.setFormValue(null)}else{const o=((i=this._selectedFiles[0])==null?void 0:i.file)||null;this._internals.setFormValue(o)}this._manageRequire()}_manageRequire(){var i;const o=(i=this.shadowRoot)==null?void 0:i.querySelector("input");if(!o)return;const c=this.errorMessage||"Please upload a file.";this.required&&this._selectedFiles.length==0?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},c,o)):(this._internals.ariaRequired="false",this._internals.setValidity({},"",o))}_setValidityMessage(i=""){var o,c;const u=(o=this.shadowRoot)==null?void 0:o.querySelector("input");u&&(this.showError=i===(this.errorMessage||"Please upload a file."),(c=this.errorMessage)!=null&&c.trim()&&i!==""&&(i=this.errorMessage),this._internals.setValidity(i?{customError:!0}:{},i,u))}_validate(){const i=this._selectedFiles.some(u=>u.status==="error"),o=this.required&&this._selectedFiles.length===0;let c="";o?c=this.errorMessage||"Please upload a file.":i&&(c="One or more files are invalid."),this._setValidityMessage(c)}checkValidity(){var i;const o=(i=this.shadowRoot)==null?void 0:i.querySelector("input");return o?o.checkValidity():!0}_handleInvalid(i){i.preventDefault(),this._validate();const o=this._innerNysButton;if(o){const c=this._internals.form;c?Array.from(c.elements).find(u=>typeof u.checkValidity=="function"&&!u.checkValidity())===this&&(o.focus(),o.classList.add("active-focus")):(o.focus(),o.classList.add("active-focus"))}}async _saveSelectedFiles(i){if(this._selectedFiles.some(c=>c.file.name==i.name)||!this.multiple&&this._selectedFiles.length>=1)return;const o={file:i,progress:0,status:"pending"};this._selectedFiles.push(o),await this._processFile(o),this._setValue(),this._validate()}async _processFile(i){i.status="processing";try{if(!await _6(i.file,this.accept)){i.status="error",i.errorMsg="File type is invalid.",this.requestUpdate();return}const o=new FileReader;o.onprogress=c=>{if(c.lengthComputable){const u=Math.round(c.loaded*100/c.total);i.progress=u,this.requestUpdate()}},o.onload=()=>{i.progress=100,i.status="done",this.requestUpdate()},o.onerror=()=>{i.status="error",i.errorMsg="Failed to load file.",this.requestUpdate()},o.readAsArrayBuffer(i.file)}catch{i.status="error",i.errorMsg="Error validating file.",this.requestUpdate()}}_dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("nys-change",{detail:{files:this._selectedFiles},bubbles:!0,composed:!0}))}_openFileDialog(){const i=this.renderRoot.querySelector(".hidden-file-input");i==null||i.click()}_handlePostFileSelectionFocus(){if(this.multiple){const i=this._innerNysButton;i&&i.focus()}else this._focusFirstFileItemIfSingleMode()}async _focusFirstFileItemIfSingleMode(){var i;if(!this.multiple){await this.updateComplete;const o=this.renderRoot.querySelector("nys-fileitem"),c=(i=o==null?void 0:o.shadowRoot)==null?void 0:i.querySelector(".file-item");c&&(c.setAttribute("tabindex","-1"),c.focus())}}_handleFileChange(i){const o=i.target.files;(o?Array.from(o):[]).map(c=>{this._saveSelectedFiles(c)}),this.requestUpdate(),this._dispatchChangeEvent(),this._handlePostFileSelectionFocus()}_handleFileRemove(i){var o;const c=i.detail.filename;if(this._selectedFiles=this._selectedFiles.filter(u=>u.file.name!==c),this._selectedFiles.length===0){const u=(o=this.shadowRoot)==null?void 0:o.querySelector("input");u&&(u.value="")}this._setValue(),this._validate(),this.requestUpdate(),this._dispatchChangeEvent()}_onDragOver(i){this.disabled||(i.stopPropagation(),i.preventDefault(),this._dragActive||(this._dragActive=!0,this.requestUpdate()))}_onDragLeave(i){this.disabled||(i.stopPropagation(),i.preventDefault(),i.currentTarget===i.target&&(this._dragActive=!1,this.requestUpdate()))}_onDrop(i){var o;if(this.disabled)return;i.preventDefault(),this._dragActive=!1,this.requestUpdate();const c=(o=i.dataTransfer)==null?void 0:o.files;if(!c)return;const u=Array.from(c);this.multiple?u.forEach(f=>{this._saveSelectedFiles(f)}):this._saveSelectedFiles(u[0]),this.requestUpdate(),this._dispatchChangeEvent()}render(){return L`<div
      class="nys-fileinput"
      @nys-fileRemove=${this._handleFileRemove}
    >
      <nys-label
        for=${this.id}
        label=${this.label}
        description=${this.description}
        flag=${this.required?"required":this.optional?"optional":""}
      >
        <slot name="description" slot="description">${this.description}</slot>
      </nys-label>

      <input
        class="hidden-file-input"
        tabindex="-1"
        type="file"
        name=${this.name}
        ?multiple=${this.multiple}
        accept=${this.accept}
        ?required=${this.required}
        ?disabled=${this.disabled||!this.multiple&&this._selectedFiles.length>0}
        aria-disabled="${this.disabled}"
        aria-hidden="true"
        @change=${this._handleFileChange}
        hidden
      />

      ${this.dropzone?L`<div
            class="nys-fileinput__dropzone
            ${this._dragActive?"drag-active":""}
            ${this._isDropDisabled?"disabled":""}
            ${this.showError&&!this._isDropDisabled?"error":""}"
            @click=${this._isDropDisabled?null:this._openFileDialog}
            @keydown=${i=>!this._isDropDisabled&&(i.key==="Enter"||i.key===" ")&&this._openFileDialog()}
            @dragover=${this._isDropDisabled?null:this._onDragOver}
            @dragleave=${this._isDropDisabled?null:this._onDragLeave}
            @drop=${this._isDropDisabled?null:this._onDrop}
            aria-label="Drag files here or choose from folder"
          >
            ${this._dragActive?L`<p>Drop file to upload</p>`:L` <nys-button
                    id=${this.id}
                    name="file-btn"
                    label=${this.multiple?"Choose files":"Choose file"}
                    variant="outline"
                    ariaLabel=${this._buttonAriaLabel}
                    ariaDescription=${this._buttonAriaDescription}
                    ?disabled=${this._isDropDisabled}
                    .onClick=${i=>{i.stopPropagation(),this._openFileDialog()}}
                  ></nys-button>
                  <p>or drag here</p>`}
          </div>`:L`<nys-button
            id=${this.id}
            name="file-btn"
            label=${this.multiple?"Choose files":"Choose file"}
            variant="outline"
            ariaLabel=${this._buttonAriaLabel}
            ariaDescription=${this._buttonAriaDescription}
            ?disabled=${this.disabled||!this.multiple&&this._selectedFiles.length>0}
            .onClick=${()=>this._openFileDialog()}
          ></nys-button>`}
      ${this.showError?L`
            <nys-errormessage
              ?showError=${this.showError}
              errorMessage=${this._internals.validationMessage||this.errorMessage}
            ></nys-errormessage>
          `:null}
      ${this._selectedFiles.length>0?L`
            <ul>
              ${this._selectedFiles.map(i=>L`<li>
                    <nys-fileitem
                      filename=${i.file.name}
                      status=${i.status}
                      progress=${i.progress}
                      errorMessage=${i.errorMsg||""}
                    ></nys-fileitem>
                  </li>`)}
            </ul>
          `:null}
    </div>`}};Bo.styles=C6,Bo.formAssociated=!0;let tt=Bo;mt([p({type:String})],tt.prototype,"id");mt([p({type:String,reflect:!0})],tt.prototype,"name");mt([p({type:String})],tt.prototype,"label");mt([p({type:String})],tt.prototype,"description");mt([p({type:Boolean})],tt.prototype,"multiple");mt([p({type:String})],tt.prototype,"accept");mt([p({type:Boolean,reflect:!0})],tt.prototype,"disabled");mt([p({type:Boolean,reflect:!0})],tt.prototype,"required");mt([p({type:Boolean,reflect:!0})],tt.prototype,"optional");mt([p({type:Boolean,reflect:!0})],tt.prototype,"showError");mt([p({type:String})],tt.prototype,"errorMessage");mt([p({type:Boolean})],tt.prototype,"dropzone");mt([p({type:String,reflect:!0})],tt.prototype,"width");customElements.get("nys-fileinput")||customElements.define("nys-fileinput",tt);const S6={account_circle:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_781" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_781)">
    <path d="M5.85 17.1C6.7 16.45 7.65 15.9375 8.7 15.5625C9.75 15.1875 10.85 15 12 15C13.15 15 14.25 15.1875 15.3 15.5625C16.35 15.9375 17.3 16.45 18.15 17.1C18.7333 16.4167 19.1875 15.6417 19.5125 14.775C19.8375 13.9083 20 12.9833 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 12.9833 4.1625 13.9083 4.4875 14.775C4.8125 15.6417 5.26667 16.4167 5.85 17.1ZM12 13C11.0167 13 10.1875 12.6625 9.5125 11.9875C8.8375 11.3125 8.5 10.4833 8.5 9.5C8.5 8.51667 8.8375 7.6875 9.5125 7.0125C10.1875 6.3375 11.0167 6 12 6C12.9833 6 13.8125 6.3375 14.4875 7.0125C15.1625 7.6875 15.5 8.51667 15.5 9.5C15.5 10.4833 15.1625 11.3125 14.4875 11.9875C13.8125 12.6625 12.9833 13 12 13ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,attach_file:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_4782_213" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
  <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_4782_213)">
  <path d="M18 15.75C18 17.4833 17.3917 18.9583 16.175 20.175C14.9583 21.3917 13.4833 22 11.75 22C10.0167 22 8.54167 21.3917 7.325 20.175C6.10833 18.9583 5.5 17.4833 5.5 15.75V6.5C5.5 5.25 5.9375 4.1875 6.8125 3.3125C7.6875 2.4375 8.75 2 10 2C11.25 2 12.3125 2.4375 13.1875 3.3125C14.0625 4.1875 14.5 5.25 14.5 6.5V15.25C14.5 16.0167 14.2333 16.6667 13.7 17.2C13.1667 17.7333 12.5167 18 11.75 18C10.9833 18 10.3333 17.7333 9.8 17.2C9.26667 16.6667 9 16.0167 9 15.25V7C9 6.71667 9.09583 6.47917 9.2875 6.2875C9.47917 6.09583 9.71667 6 10 6C10.2833 6 10.5208 6.09583 10.7125 6.2875C10.9042 6.47917 11 6.71667 11 7V15.25C11 15.4667 11.0708 15.6458 11.2125 15.7875C11.3542 15.9292 11.5333 16 11.75 16C11.9667 16 12.1458 15.9292 12.2875 15.7875C12.4292 15.6458 12.5 15.4667 12.5 15.25V6.5C12.4833 5.8 12.2375 5.20833 11.7625 4.725C11.2875 4.24167 10.7 4 10 4C9.3 4 8.70833 4.24167 8.225 4.725C7.74167 5.20833 7.5 5.8 7.5 6.5V15.75C7.48333 16.9333 7.89167 17.9375 8.725 18.7625C9.55833 19.5875 10.5667 20 11.75 20C12.9167 20 13.9083 19.5875 14.725 18.7625C15.5417 17.9375 15.9667 16.9333 16 15.75V7C16 6.71667 16.0958 6.47917 16.2875 6.2875C16.4792 6.09583 16.7167 6 17 6C17.2833 6 17.5208 6.09583 17.7125 6.2875C17.9042 6.47917 18 6.71667 18 7V15.75Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,calendar_month:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_304" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_304)">
    <path d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V3C6 2.71667 6.09583 2.47917 6.2875 2.2875C6.47917 2.09583 6.71667 2 7 2C7.28333 2 7.52083 2.09583 7.7125 2.2875C7.90417 2.47917 8 2.71667 8 3V4H16V3C16 2.71667 16.0958 2.47917 16.2875 2.2875C16.4792 2.09583 16.7167 2 17 2C17.2833 2 17.5208 2.09583 17.7125 2.2875C17.9042 2.47917 18 2.71667 18 3V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8ZM12 14C11.7167 14 11.4792 13.9042 11.2875 13.7125C11.0958 13.5208 11 13.2833 11 13C11 12.7167 11.0958 12.4792 11.2875 12.2875C11.4792 12.0958 11.7167 12 12 12C12.2833 12 12.5208 12.0958 12.7125 12.2875C12.9042 12.4792 13 12.7167 13 13C13 13.2833 12.9042 13.5208 12.7125 13.7125C12.5208 13.9042 12.2833 14 12 14ZM8 14C7.71667 14 7.47917 13.9042 7.2875 13.7125C7.09583 13.5208 7 13.2833 7 13C7 12.7167 7.09583 12.4792 7.2875 12.2875C7.47917 12.0958 7.71667 12 8 12C8.28333 12 8.52083 12.0958 8.7125 12.2875C8.90417 12.4792 9 12.7167 9 13C9 13.2833 8.90417 13.5208 8.7125 13.7125C8.52083 13.9042 8.28333 14 8 14ZM16 14C15.7167 14 15.4792 13.9042 15.2875 13.7125C15.0958 13.5208 15 13.2833 15 13C15 12.7167 15.0958 12.4792 15.2875 12.2875C15.4792 12.0958 15.7167 12 16 12C16.2833 12 16.5208 12.0958 16.7125 12.2875C16.9042 12.4792 17 12.7167 17 13C17 13.2833 16.9042 13.5208 16.7125 13.7125C16.5208 13.9042 16.2833 14 16 14ZM12 18C11.7167 18 11.4792 17.9042 11.2875 17.7125C11.0958 17.5208 11 17.2833 11 17C11 16.7167 11.0958 16.4792 11.2875 16.2875C11.4792 16.0958 11.7167 16 12 16C12.2833 16 12.5208 16.0958 12.7125 16.2875C12.9042 16.4792 13 16.7167 13 17C13 17.2833 12.9042 17.5208 12.7125 17.7125C12.5208 17.9042 12.2833 18 12 18ZM8 18C7.71667 18 7.47917 17.9042 7.2875 17.7125C7.09583 17.5208 7 17.2833 7 17C7 16.7167 7.09583 16.4792 7.2875 16.2875C7.47917 16.0958 7.71667 16 8 16C8.28333 16 8.52083 16.0958 8.7125 16.2875C8.90417 16.4792 9 16.7167 9 17C9 17.2833 8.90417 17.5208 8.7125 17.7125C8.52083 17.9042 8.28333 18 8 18ZM16 18C15.7167 18 15.4792 17.9042 15.2875 17.7125C15.0958 17.5208 15 17.2833 15 17C15 16.7167 15.0958 16.4792 15.2875 16.2875C15.4792 16.0958 15.7167 16 16 16C16.2833 16 16.5208 16.0958 16.7125 16.2875C16.9042 16.4792 17 16.7167 17 17C17 17.2833 16.9042 17.5208 16.7125 17.7125C16.5208 17.9042 16.2833 18 16 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,cancel:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_659" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_659)">
    <path d="M12 13.4L14.9 16.3C15.0833 16.4833 15.3167 16.575 15.6 16.575C15.8833 16.575 16.1167 16.4833 16.3 16.3C16.4833 16.1167 16.575 15.8833 16.575 15.6C16.575 15.3167 16.4833 15.0833 16.3 14.9L13.4 12L16.3 9.1C16.4833 8.91667 16.575 8.68333 16.575 8.4C16.575 8.11667 16.4833 7.88333 16.3 7.7C16.1167 7.51667 15.8833 7.425 15.6 7.425C15.3167 7.425 15.0833 7.51667 14.9 7.7L12 10.6L9.1 7.7C8.91667 7.51667 8.68333 7.425 8.4 7.425C8.11667 7.425 7.88333 7.51667 7.7 7.7C7.51667 7.88333 7.425 8.11667 7.425 8.4C7.425 8.68333 7.51667 8.91667 7.7 9.1L10.6 12L7.7 14.9C7.51667 15.0833 7.425 15.3167 7.425 15.6C7.425 15.8833 7.51667 16.1167 7.7 16.3C7.88333 16.4833 8.11667 16.575 8.4 16.575C8.68333 16.575 8.91667 16.4833 9.1 16.3L12 13.4ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_648" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_648)">
    <path d="M9.54996 15.15L18.025 6.675C18.225 6.475 18.4583 6.375 18.725 6.375C18.9916 6.375 19.225 6.475 19.425 6.675C19.625 6.875 19.725 7.1125 19.725 7.3875C19.725 7.6625 19.625 7.9 19.425 8.1L10.25 17.3C10.05 17.5 9.81663 17.6 9.54996 17.6C9.2833 17.6 9.04996 17.5 8.84996 17.3L4.54996 13C4.34996 12.8 4.25413 12.5625 4.26246 12.2875C4.2708 12.0125 4.37496 11.775 4.57496 11.575C4.77496 11.375 5.01246 11.275 5.28746 11.275C5.56246 11.275 5.79996 11.375 5.99996 11.575L9.54996 15.15Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,close:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12383_539" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12383_539)">
    <path d="M12 13.4L7.10005 18.3C6.91672 18.4833 6.68338 18.575 6.40005 18.575C6.11672 18.575 5.88338 18.4833 5.70005 18.3C5.51672 18.1167 5.42505 17.8833 5.42505 17.6C5.42505 17.3167 5.51672 17.0833 5.70005 16.9L10.6 12L5.70005 7.09999C5.51672 6.91665 5.42505 6.68332 5.42505 6.39999C5.42505 6.11665 5.51672 5.88332 5.70005 5.69999C5.88338 5.51665 6.11672 5.42499 6.40005 5.42499C6.68338 5.42499 6.91672 5.51665 7.10005 5.69999L12 10.6L16.9 5.69999C17.0834 5.51665 17.3167 5.42499 17.6 5.42499C17.8834 5.42499 18.1167 5.51665 18.3 5.69999C18.4834 5.88332 18.575 6.11665 18.575 6.39999C18.575 6.68332 18.4834 6.91665 18.3 7.09999L13.4 12L18.3 16.9C18.4834 17.0833 18.575 17.3167 18.575 17.6C18.575 17.8833 18.4834 18.1167 18.3 18.3C18.1167 18.4833 17.8834 18.575 17.6 18.575C17.3167 18.575 17.0834 18.4833 16.9 18.3L12 13.4Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,code:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_8115_296" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_8115_296)">
    <path d="M4.82505 12.025L8.70005 15.9C8.88338 16.0834 8.97505 16.3167 8.97505 16.6C8.97505 16.8834 8.88338 17.1167 8.70005 17.3C8.51672 17.4834 8.28338 17.575 8.00005 17.575C7.71672 17.575 7.48338 17.4834 7.30005 17.3L2.70005 12.7C2.60005 12.6 2.52922 12.4917 2.48755 12.375C2.44588 12.2584 2.42505 12.1334 2.42505 12C2.42505 11.8667 2.44588 11.7417 2.48755 11.625C2.52922 11.5084 2.60005 11.4 2.70005 11.3L7.30005 6.70002C7.50005 6.50002 7.73755 6.40002 8.01255 6.40002C8.28755 6.40002 8.52505 6.50002 8.72505 6.70002C8.92505 6.90002 9.02505 7.13752 9.02505 7.41252C9.02505 7.68752 8.92505 7.92502 8.72505 8.12502L4.82505 12.025ZM19.175 11.975L15.3 8.10002C15.1167 7.91669 15.025 7.68336 15.025 7.40002C15.025 7.11669 15.1167 6.88336 15.3 6.70002C15.4834 6.51669 15.7167 6.42502 16 6.42502C16.2834 6.42502 16.5167 6.51669 16.7 6.70002L21.3 11.3C21.4 11.4 21.4709 11.5084 21.5125 11.625C21.5542 11.7417 21.575 11.8667 21.575 12C21.575 12.1334 21.5542 12.2584 21.5125 12.375C21.4709 12.4917 21.4 12.6 21.3 12.7L16.7 17.3C16.5 17.5 16.2667 17.5959 16 17.5875C15.7334 17.5792 15.5 17.475 15.3 17.275C15.1 17.075 15 16.8375 15 16.5625C15 16.2875 15.1 16.05 15.3 15.85L19.175 11.975Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,download:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_255" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_255)">
    <path d="M12 15.575C11.8667 15.575 11.7417 15.5542 11.625 15.5125C11.5083 15.4708 11.4 15.4 11.3 15.3L7.7 11.7C7.5 11.5 7.40417 11.2667 7.4125 11C7.42083 10.7333 7.51667 10.5 7.7 10.3C7.9 10.1 8.1375 9.99583 8.4125 9.9875C8.6875 9.97917 8.925 10.075 9.125 10.275L11 12.15V5C11 4.71667 11.0958 4.47917 11.2875 4.2875C11.4792 4.09583 11.7167 4 12 4C12.2833 4 12.5208 4.09583 12.7125 4.2875C12.9042 4.47917 13 4.71667 13 5V12.15L14.875 10.275C15.075 10.075 15.3125 9.97917 15.5875 9.9875C15.8625 9.99583 16.1 10.1 16.3 10.3C16.4833 10.5 16.5792 10.7333 16.5875 11C16.5958 11.2667 16.5 11.5 16.3 11.7L12.7 15.3C12.6 15.4 12.4917 15.4708 12.375 15.5125C12.2583 15.5542 12.1333 15.575 12 15.575ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V16C4 15.7167 4.09583 15.4792 4.2875 15.2875C4.47917 15.0958 4.71667 15 5 15C5.28333 15 5.52083 15.0958 5.7125 15.2875C5.90417 15.4792 6 15.7167 6 16V18H18V16C18 15.7167 18.0958 15.4792 18.2875 15.2875C18.4792 15.0958 18.7167 15 19 15C19.2833 15 19.5208 15.0958 19.7125 15.2875C19.9042 15.4792 20 15.7167 20 16V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,download_done:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_634" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_634)">
    <path d="M9.54999 13.15L18 4.70002C18.2 4.50002 18.4375 4.40002 18.7125 4.40002C18.9875 4.40002 19.225 4.50002 19.425 4.70002C19.625 4.90002 19.725 5.13752 19.725 5.41252C19.725 5.68752 19.625 5.92502 19.425 6.12502L10.25 15.3C10.05 15.5 9.81665 15.6 9.54999 15.6C9.28332 15.6 9.04999 15.5 8.84999 15.3L4.57499 11.025C4.37499 10.825 4.27915 10.5875 4.28749 10.3125C4.29582 10.0375 4.39999 9.80002 4.59999 9.60002C4.79999 9.40002 5.03749 9.30002 5.31249 9.30002C5.58749 9.30002 5.82499 9.40002 6.02499 9.60002L9.54999 13.15ZM5.99999 20C5.71665 20 5.47915 19.9042 5.28749 19.7125C5.09582 19.5209 4.99999 19.2834 4.99999 19C4.99999 18.7167 5.09582 18.4792 5.28749 18.2875C5.47915 18.0959 5.71665 18 5.99999 18H18C18.2833 18 18.5208 18.0959 18.7125 18.2875C18.9042 18.4792 19 18.7167 19 19C19 19.2834 18.9042 19.5209 18.7125 19.7125C18.5208 19.9042 18.2833 20 18 20H12H5.99999Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,drive_folder_upload:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_546" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_546)">
    <path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H9.175C9.44167 4 9.69583 4.05 9.9375 4.15C10.1792 4.25 10.3917 4.39167 10.575 4.575L12 6H20C20.55 6 21.0208 6.19583 21.4125 6.5875C21.8042 6.97917 22 7.45 22 8V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM4 18H20V8H11.175L9.175 6H4V18ZM12 17C12.2833 17 12.5208 16.9042 12.7125 16.7125C12.9042 16.5208 13 16.2833 13 16V12.8L13.9 13.7C14.0833 13.8833 14.3167 13.975 14.6 13.975C14.8833 13.975 15.1167 13.8833 15.3 13.7C15.4833 13.5167 15.575 13.2833 15.575 13C15.575 12.7167 15.4833 12.4833 15.3 12.3L12.7 9.7C12.5 9.5 12.2667 9.4 12 9.4C11.7333 9.4 11.5 9.5 11.3 9.7L8.7 12.3C8.51667 12.4833 8.425 12.7167 8.425 13C8.425 13.2833 8.51667 13.5167 8.7 13.7C8.88333 13.8833 9.11667 13.975 9.4 13.975C9.68333 13.975 9.91667 13.8833 10.1 13.7L11 12.8V16C11 16.2833 11.0958 16.5208 11.2875 16.7125C11.4792 16.9042 11.7167 17 12 17Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,edit_square:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_616" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_616)">
    <path d="M5 21C4.45 21 3.97917 20.8041 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V4.99998C3 4.44998 3.19583 3.97914 3.5875 3.58748C3.97917 3.19581 4.45 2.99998 5 2.99998H11.525C11.8583 2.99998 12.1083 3.10414 12.275 3.31248C12.4417 3.52081 12.525 3.74998 12.525 3.99998C12.525 4.24998 12.4375 4.47914 12.2625 4.68748C12.0875 4.89581 11.8333 4.99998 11.5 4.99998H5V19H19V12.475C19 12.1416 19.1042 11.8916 19.3125 11.725C19.5208 11.5583 19.75 11.475 20 11.475C20.25 11.475 20.4792 11.5583 20.6875 11.725C20.8958 11.8916 21 12.1416 21 12.475V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8041 19.55 21 19 21H5ZM9 14V11.575C9 11.3083 9.05 11.0541 9.15 10.8125C9.25 10.5708 9.39167 10.3583 9.575 10.175L18.175 1.57498C18.375 1.37498 18.6 1.22498 18.85 1.12498C19.1 1.02498 19.35 0.974976 19.6 0.974976C19.8667 0.974976 20.1208 1.02498 20.3625 1.12498C20.6042 1.22498 20.825 1.37498 21.025 1.57498L22.425 2.99998C22.6083 3.19998 22.75 3.42081 22.85 3.66248C22.95 3.90414 23 4.14998 23 4.39998C23 4.64998 22.9542 4.89581 22.8625 5.13748C22.7708 5.37914 22.625 5.59998 22.425 5.79998L13.825 14.4C13.6417 14.5833 13.4292 14.7291 13.1875 14.8375C12.9458 14.9458 12.6917 15 12.425 15H10C9.71667 15 9.47917 14.9041 9.2875 14.7125C9.09583 14.5208 9 14.2833 9 14ZM11 13H12.4L18.2 7.19998L17.5 6.49998L16.775 5.79998L11 11.575V13Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,help:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_153" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_153)">
    <path d="M11.95 18C12.3 18 12.5958 17.8792 12.8375 17.6375C13.0792 17.3958 13.2 17.1 13.2 16.75C13.2 16.4 13.0792 16.1042 12.8375 15.8625C12.5958 15.6208 12.3 15.5 11.95 15.5C11.6 15.5 11.3042 15.6208 11.0625 15.8625C10.8208 16.1042 10.7 16.4 10.7 16.75C10.7 17.1 10.8208 17.3958 11.0625 17.6375C11.3042 17.8792 11.6 18 11.95 18ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20ZM12.1 7.7C12.5167 7.7 12.8792 7.83333 13.1875 8.1C13.4958 8.36667 13.65 8.7 13.65 9.1C13.65 9.46667 13.5375 9.79167 13.3125 10.075C13.0875 10.3583 12.8333 10.625 12.55 10.875C12.1667 11.2083 11.8292 11.575 11.5375 11.975C11.2458 12.375 11.1 12.825 11.1 13.325C11.1 13.5583 11.1875 13.7542 11.3625 13.9125C11.5375 14.0708 11.7417 14.15 11.975 14.15C12.225 14.15 12.4375 14.0667 12.6125 13.9C12.7875 13.7333 12.9 13.525 12.95 13.275C13.0167 12.925 13.1667 12.6125 13.4 12.3375C13.6333 12.0625 13.8833 11.8 14.15 11.55C14.5333 11.1833 14.8625 10.7833 15.1375 10.35C15.4125 9.91667 15.55 9.43333 15.55 8.9C15.55 8.05 15.2042 7.35417 14.5125 6.8125C13.8208 6.27083 13.0167 6 12.1 6C11.4667 6 10.8625 6.13333 10.2875 6.4C9.7125 6.66667 9.275 7.075 8.975 7.625C8.85833 7.825 8.82083 8.0375 8.8625 8.2625C8.90417 8.4875 9.01667 8.65833 9.2 8.775C9.43333 8.90833 9.675 8.95 9.925 8.9C10.175 8.85 10.3833 8.70833 10.55 8.475C10.7333 8.225 10.9625 8.03333 11.2375 7.9C11.5125 7.76667 11.8 7.7 12.1 7.7Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,language:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_211" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_211)">
    <path d="M12 22C10.6333 22 9.34167 21.7375 8.125 21.2125C6.90833 20.6875 5.84583 19.9708 4.9375 19.0625C4.02917 18.1542 3.3125 17.0917 2.7875 15.875C2.2625 14.6583 2 13.3667 2 12C2 10.6167 2.2625 9.32083 2.7875 8.1125C3.3125 6.90417 4.02917 5.84583 4.9375 4.9375C5.84583 4.02917 6.90833 3.3125 8.125 2.7875C9.34167 2.2625 10.6333 2 12 2C13.3833 2 14.6792 2.2625 15.8875 2.7875C17.0958 3.3125 18.1542 4.02917 19.0625 4.9375C19.9708 5.84583 20.6875 6.90417 21.2125 8.1125C21.7375 9.32083 22 10.6167 22 12C22 13.3667 21.7375 14.6583 21.2125 15.875C20.6875 17.0917 19.9708 18.1542 19.0625 19.0625C18.1542 19.9708 17.0958 20.6875 15.8875 21.2125C14.6792 21.7375 13.3833 22 12 22ZM12 19.95C12.4333 19.35 12.8083 18.725 13.125 18.075C13.4417 17.425 13.7 16.7333 13.9 16H10.1C10.3 16.7333 10.5583 17.425 10.875 18.075C11.1917 18.725 11.5667 19.35 12 19.95ZM9.4 19.55C9.1 19 8.8375 18.4292 8.6125 17.8375C8.3875 17.2458 8.2 16.6333 8.05 16H5.1C5.58333 16.8333 6.1875 17.5583 6.9125 18.175C7.6375 18.7917 8.46667 19.25 9.4 19.55ZM14.6 19.55C15.5333 19.25 16.3625 18.7917 17.0875 18.175C17.8125 17.5583 18.4167 16.8333 18.9 16H15.95C15.8 16.6333 15.6125 17.2458 15.3875 17.8375C15.1625 18.4292 14.9 19 14.6 19.55ZM4.25 14H7.65C7.6 13.6667 7.5625 13.3375 7.5375 13.0125C7.5125 12.6875 7.5 12.35 7.5 12C7.5 11.65 7.5125 11.3125 7.5375 10.9875C7.5625 10.6625 7.6 10.3333 7.65 10H4.25C4.16667 10.3333 4.10417 10.6625 4.0625 10.9875C4.02083 11.3125 4 11.65 4 12C4 12.35 4.02083 12.6875 4.0625 13.0125C4.10417 13.3375 4.16667 13.6667 4.25 14ZM9.65 14H14.35C14.4 13.6667 14.4375 13.3375 14.4625 13.0125C14.4875 12.6875 14.5 12.35 14.5 12C14.5 11.65 14.4875 11.3125 14.4625 10.9875C14.4375 10.6625 14.4 10.3333 14.35 10H9.65C9.6 10.3333 9.5625 10.6625 9.5375 10.9875C9.5125 11.3125 9.5 11.65 9.5 12C9.5 12.35 9.5125 12.6875 9.5375 13.0125C9.5625 13.3375 9.6 13.6667 9.65 14ZM16.35 14H19.75C19.8333 13.6667 19.8958 13.3375 19.9375 13.0125C19.9792 12.6875 20 12.35 20 12C20 11.65 19.9792 11.3125 19.9375 10.9875C19.8958 10.6625 19.8333 10.3333 19.75 10H16.35C16.4 10.3333 16.4375 10.6625 16.4625 10.9875C16.4875 11.3125 16.5 11.65 16.5 12C16.5 12.35 16.4875 12.6875 16.4625 13.0125C16.4375 13.3375 16.4 13.6667 16.35 14ZM15.95 8H18.9C18.4167 7.16667 17.8125 6.44167 17.0875 5.825C16.3625 5.20833 15.5333 4.75 14.6 4.45C14.9 5 15.1625 5.57083 15.3875 6.1625C15.6125 6.75417 15.8 7.36667 15.95 8ZM10.1 8H13.9C13.7 7.26667 13.4417 6.575 13.125 5.925C12.8083 5.275 12.4333 4.65 12 4.05C11.5667 4.65 11.1917 5.275 10.875 5.925C10.5583 6.575 10.3 7.26667 10.1 8ZM5.1 8H8.05C8.2 7.36667 8.3875 6.75417 8.6125 6.1625C8.8375 5.57083 9.1 5 9.4 4.45C8.46667 4.75 7.6375 5.20833 6.9125 5.825C6.1875 6.44167 5.58333 7.16667 5.1 8Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,link:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_7578_270" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_7578_270)">
    <path d="M7 17C5.61667 17 4.4375 16.5125 3.4625 15.5375C2.4875 14.5625 2 13.3833 2 12C2 10.6167 2.4875 9.4375 3.4625 8.4625C4.4375 7.4875 5.61667 7 7 7H10C10.2833 7 10.5208 7.09583 10.7125 7.2875C10.9042 7.47917 11 7.71667 11 8C11 8.28333 10.9042 8.52083 10.7125 8.7125C10.5208 8.90417 10.2833 9 10 9H7C6.16667 9 5.45833 9.29167 4.875 9.875C4.29167 10.4583 4 11.1667 4 12C4 12.8333 4.29167 13.5417 4.875 14.125C5.45833 14.7083 6.16667 15 7 15H10C10.2833 15 10.5208 15.0958 10.7125 15.2875C10.9042 15.4792 11 15.7167 11 16C11 16.2833 10.9042 16.5208 10.7125 16.7125C10.5208 16.9042 10.2833 17 10 17H7ZM9 13C8.71667 13 8.47917 12.9042 8.2875 12.7125C8.09583 12.5208 8 12.2833 8 12C8 11.7167 8.09583 11.4792 8.2875 11.2875C8.47917 11.0958 8.71667 11 9 11H15C15.2833 11 15.5208 11.0958 15.7125 11.2875C15.9042 11.4792 16 11.7167 16 12C16 12.2833 15.9042 12.5208 15.7125 12.7125C15.5208 12.9042 15.2833 13 15 13H9ZM14 17C13.7167 17 13.4792 16.9042 13.2875 16.7125C13.0958 16.5208 13 16.2833 13 16C13 15.7167 13.0958 15.4792 13.2875 15.2875C13.4792 15.0958 13.7167 15 14 15H17C17.8333 15 18.5417 14.7083 19.125 14.125C19.7083 13.5417 20 12.8333 20 12C20 11.1667 19.7083 10.4583 19.125 9.875C18.5417 9.29167 17.8333 9 17 9H14C13.7167 9 13.4792 8.90417 13.2875 8.7125C13.0958 8.52083 13 8.28333 13 8C13 7.71667 13.0958 7.47917 13.2875 7.2875C13.4792 7.09583 13.7167 7 14 7H17C18.3833 7 19.5625 7.4875 20.5375 8.4625C21.5125 9.4375 22 10.6167 22 12C22 13.3833 21.5125 14.5625 20.5375 15.5375C19.5625 16.5125 18.3833 17 17 17H14Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,mail:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_7578_308" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_7578_308)">
    <path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM20 8L12.525 12.675C12.4417 12.725 12.3542 12.7625 12.2625 12.7875C12.1708 12.8125 12.0833 12.825 12 12.825C11.9167 12.825 11.8292 12.8125 11.7375 12.7875C11.6458 12.7625 11.5583 12.725 11.475 12.675L4 8V18H20V8ZM12 11L20 6H4L12 11ZM4 8.25V6.775V6.8V6.7875V8.25Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,menu:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_150" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_150)">
    <path d="M4 18C3.71667 18 3.47917 17.9042 3.2875 17.7125C3.09583 17.5208 3 17.2833 3 17C3 16.7167 3.09583 16.4792 3.2875 16.2875C3.47917 16.0958 3.71667 16 4 16H20C20.2833 16 20.5208 16.0958 20.7125 16.2875C20.9042 16.4792 21 16.7167 21 17C21 17.2833 20.9042 17.5208 20.7125 17.7125C20.5208 17.9042 20.2833 18 20 18H4ZM4 13C3.71667 13 3.47917 12.9042 3.2875 12.7125C3.09583 12.5208 3 12.2833 3 12C3 11.7167 3.09583 11.4792 3.2875 11.2875C3.47917 11.0958 3.71667 11 4 11H20C20.2833 11 20.5208 11.0958 20.7125 11.2875C20.9042 11.4792 21 11.7167 21 12C21 12.2833 20.9042 12.5208 20.7125 12.7125C20.5208 12.9042 20.2833 13 20 13H4ZM4 8C3.71667 8 3.47917 7.90417 3.2875 7.7125C3.09583 7.52083 3 7.28333 3 7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6H20C20.2833 6 20.5208 6.09583 20.7125 6.2875C20.9042 6.47917 21 6.71667 21 7C21 7.28333 20.9042 7.52083 20.7125 7.7125C20.5208 7.90417 20.2833 8 20 8H4Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,more_vert:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_728" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_728)">
    <path d="M12 20C11.45 20 10.9792 19.8042 10.5875 19.4125C10.1958 19.0208 10 18.55 10 18C10 17.45 10.1958 16.9792 10.5875 16.5875C10.9792 16.1958 11.45 16 12 16C12.55 16 13.0208 16.1958 13.4125 16.5875C13.8042 16.9792 14 17.45 14 18C14 18.55 13.8042 19.0208 13.4125 19.4125C13.0208 19.8042 12.55 20 12 20ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM12 8C11.45 8 10.9792 7.80417 10.5875 7.4125C10.1958 7.02083 10 6.55 10 6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6C14 6.55 13.8042 7.02083 13.4125 7.4125C13.0208 7.80417 12.55 8 12 8Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,open_in_new:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_351" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_351)">
    <path d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H11C11.2833 3 11.5208 3.09583 11.7125 3.2875C11.9042 3.47917 12 3.71667 12 4C12 4.28333 11.9042 4.52083 11.7125 4.7125C11.5208 4.90417 11.2833 5 11 5H5V19H19V13C19 12.7167 19.0958 12.4792 19.2875 12.2875C19.4792 12.0958 19.7167 12 20 12C20.2833 12 20.5208 12.0958 20.7125 12.2875C20.9042 12.4792 21 12.7167 21 13V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM19 6.4L10.4 15C10.2167 15.1833 9.98333 15.275 9.7 15.275C9.41667 15.275 9.18333 15.1833 9 15C8.81667 14.8167 8.725 14.5833 8.725 14.3C8.725 14.0167 8.81667 13.7833 9 13.6L17.6 5H15C14.7167 5 14.4792 4.90417 14.2875 4.7125C14.0958 4.52083 14 4.28333 14 4C14 3.71667 14.0958 3.47917 14.2875 3.2875C14.4792 3.09583 14.7167 3 15 3H20C20.2833 3 20.5208 3.09583 20.7125 3.2875C20.9042 3.47917 21 3.71667 21 4V9C21 9.28333 20.9042 9.52083 20.7125 9.7125C20.5208 9.90417 20.2833 10 20 10C19.7167 10 19.4792 9.90417 19.2875 9.7125C19.0958 9.52083 19 9.28333 19 9V6.4Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,print:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_5058_681" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_5058_681)">
    <path d="M8 21C7.45 21 6.97917 20.8042 6.5875 20.4125C6.19583 20.0208 6 19.55 6 19V17H4C3.45 17 2.97917 16.8042 2.5875 16.4125C2.19583 16.0208 2 15.55 2 15V11C2 10.15 2.29167 9.4375 2.875 8.8625C3.45833 8.2875 4.16667 8 5 8H19C19.85 8 20.5625 8.2875 21.1375 8.8625C21.7125 9.4375 22 10.15 22 11V15C22 15.55 21.8042 16.0208 21.4125 16.4125C21.0208 16.8042 20.55 17 20 17H18V19C18 19.55 17.8042 20.0208 17.4125 20.4125C17.0208 20.8042 16.55 21 16 21H8ZM4 15H6C6 14.45 6.19583 13.9792 6.5875 13.5875C6.97917 13.1958 7.45 13 8 13H16C16.55 13 17.0208 13.1958 17.4125 13.5875C17.8042 13.9792 18 14.45 18 15H20V11C20 10.7167 19.9042 10.4792 19.7125 10.2875C19.5208 10.0958 19.2833 10 19 10H5C4.71667 10 4.47917 10.0958 4.2875 10.2875C4.09583 10.4792 4 10.7167 4 11V15ZM16 8V5H8V8H6V5C6 4.45 6.19583 3.97917 6.5875 3.5875C6.97917 3.19583 7.45 3 8 3H16C16.55 3 17.0208 3.19583 17.4125 3.5875C17.8042 3.97917 18 4.45 18 5V8H16ZM18 12.5C18.2833 12.5 18.5208 12.4042 18.7125 12.2125C18.9042 12.0208 19 11.7833 19 11.5C19 11.2167 18.9042 10.9792 18.7125 10.7875C18.5208 10.5958 18.2833 10.5 18 10.5C17.7167 10.5 17.4792 10.5958 17.2875 10.7875C17.0958 10.9792 17 11.2167 17 11.5C17 11.7833 17.0958 12.0208 17.2875 12.2125C17.4792 12.4042 17.7167 12.5 18 12.5ZM16 19V15H8V19H16Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,progress_activity:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_4782_166" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
  <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_4782_166)">
  <path d="M12 22C10.6333 22 9.34167 21.7375 8.125 21.2125C6.90833 20.6875 5.84583 19.9708 4.9375 19.0625C4.02917 18.1542 3.3125 17.0917 2.7875 15.875C2.2625 14.6583 2 13.3667 2 12C2 10.6167 2.2625 9.32083 2.7875 8.1125C3.3125 6.90417 4.02917 5.84583 4.9375 4.9375C5.84583 4.02917 6.90833 3.3125 8.125 2.7875C9.34167 2.2625 10.6333 2 12 2C12.2833 2 12.5208 2.09583 12.7125 2.2875C12.9042 2.47917 13 2.71667 13 3C13 3.28333 12.9042 3.52083 12.7125 3.7125C12.5208 3.90417 12.2833 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 11.7167 20.0958 11.4792 20.2875 11.2875C20.4792 11.0958 20.7167 11 21 11C21.2833 11 21.5208 11.0958 21.7125 11.2875C21.9042 11.4792 22 11.7167 22 12C22 13.3667 21.7375 14.6583 21.2125 15.875C20.6875 17.0917 19.9708 18.1542 19.0625 19.0625C18.1542 19.9708 17.0958 20.6875 15.8875 21.2125C14.6792 21.7375 13.3833 22 12 22Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,publish:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_447" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_447)">
    <path d="M11 11.85L9.125 13.725C8.925 13.925 8.6875 14.0208 8.4125 14.0125C8.1375 14.0042 7.9 13.9 7.7 13.7C7.51667 13.5 7.42083 13.2667 7.4125 13C7.40417 12.7333 7.5 12.5 7.7 12.3L11.3 8.7C11.4 8.6 11.5083 8.52917 11.625 8.4875C11.7417 8.44583 11.8667 8.425 12 8.425C12.1333 8.425 12.2583 8.44583 12.375 8.4875C12.4917 8.52917 12.6 8.6 12.7 8.7L16.3 12.3C16.5 12.5 16.5958 12.7333 16.5875 13C16.5792 13.2667 16.4833 13.5 16.3 13.7C16.1 13.9 15.8625 14.0042 15.5875 14.0125C15.3125 14.0208 15.075 13.925 14.875 13.725L13 11.85V19C13 19.2833 12.9042 19.5208 12.7125 19.7125C12.5208 19.9042 12.2833 20 12 20C11.7167 20 11.4792 19.9042 11.2875 19.7125C11.0958 19.5208 11 19.2833 11 19V11.85ZM4 8V6C4 5.45 4.19583 4.97917 4.5875 4.5875C4.97917 4.19583 5.45 4 6 4H18C18.55 4 19.0208 4.19583 19.4125 4.5875C19.8042 4.97917 20 5.45 20 6V8C20 8.28333 19.9042 8.52083 19.7125 8.7125C19.5208 8.90417 19.2833 9 19 9C18.7167 9 18.4792 8.90417 18.2875 8.7125C18.0958 8.52083 18 8.28333 18 8V6H6V8C6 8.28333 5.90417 8.52083 5.7125 8.7125C5.52083 8.90417 5.28333 9 5 9C4.71667 9 4.47917 8.90417 4.2875 8.7125C4.09583 8.52083 4 8.28333 4 8Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,search:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_692" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_692)">
    <path d="M9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,share:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_689" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_689)">
    <path d="M17 22C16.1667 22 15.4583 21.7083 14.875 21.125C14.2917 20.5417 14 19.8333 14 19C14 18.9 14.025 18.6667 14.075 18.3L7.05 14.2C6.78333 14.45 6.475 14.6458 6.125 14.7875C5.775 14.9292 5.4 15 5 15C4.16667 15 3.45833 14.7083 2.875 14.125C2.29167 13.5417 2 12.8333 2 12C2 11.1667 2.29167 10.4583 2.875 9.875C3.45833 9.29167 4.16667 9 5 9C5.4 9 5.775 9.07083 6.125 9.2125C6.475 9.35417 6.78333 9.55 7.05 9.8L14.075 5.7C14.0417 5.58333 14.0208 5.47083 14.0125 5.3625C14.0042 5.25417 14 5.13333 14 5C14 4.16667 14.2917 3.45833 14.875 2.875C15.4583 2.29167 16.1667 2 17 2C17.8333 2 18.5417 2.29167 19.125 2.875C19.7083 3.45833 20 4.16667 20 5C20 5.83333 19.7083 6.54167 19.125 7.125C18.5417 7.70833 17.8333 8 17 8C16.6 8 16.225 7.92917 15.875 7.7875C15.525 7.64583 15.2167 7.45 14.95 7.2L7.925 11.3C7.95833 11.4167 7.97917 11.5292 7.9875 11.6375C7.99583 11.7458 8 11.8667 8 12C8 12.1333 7.99583 12.2542 7.9875 12.3625C7.97917 12.4708 7.95833 12.5833 7.925 12.7L14.95 16.8C15.2167 16.55 15.525 16.3542 15.875 16.2125C16.225 16.0708 16.6 16 17 16C17.8333 16 18.5417 16.2917 19.125 16.875C19.7083 17.4583 20 18.1667 20 19C20 19.8333 19.7083 20.5417 19.125 21.125C18.5417 21.7083 17.8333 22 17 22ZM17 20C17.2833 20 17.5208 19.9042 17.7125 19.7125C17.9042 19.5208 18 19.2833 18 19C18 18.7167 17.9042 18.4792 17.7125 18.2875C17.5208 18.0958 17.2833 18 17 18C16.7167 18 16.4792 18.0958 16.2875 18.2875C16.0958 18.4792 16 18.7167 16 19C16 19.2833 16.0958 19.5208 16.2875 19.7125C16.4792 19.9042 16.7167 20 17 20ZM5 13C5.28333 13 5.52083 12.9042 5.7125 12.7125C5.90417 12.5208 6 12.2833 6 12C6 11.7167 5.90417 11.4792 5.7125 11.2875C5.52083 11.0958 5.28333 11 5 11C4.71667 11 4.47917 11.0958 4.2875 11.2875C4.09583 11.4792 4 11.7167 4 12C4 12.2833 4.09583 12.5208 4.2875 12.7125C4.47917 12.9042 4.71667 13 5 13ZM17 6C17.2833 6 17.5208 5.90417 17.7125 5.7125C17.9042 5.52083 18 5.28333 18 5C18 4.71667 17.9042 4.47917 17.7125 4.2875C17.5208 4.09583 17.2833 4 17 4C16.7167 4 16.4792 4.09583 16.2875 4.2875C16.0958 4.47917 16 4.71667 16 5C16 5.28333 16.0958 5.52083 16.2875 5.7125C16.4792 5.90417 16.7167 6 17 6Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,sms:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_651" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_651)">
    <path d="M6 18L3.7 20.3C3.38333 20.6167 3.02083 20.6875 2.6125 20.5125C2.20417 20.3375 2 20.025 2 19.575V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H6ZM5.15 16H20V4H4V17.125L5.15 16ZM8 11C8.28333 11 8.52083 10.9042 8.7125 10.7125C8.90417 10.5208 9 10.2833 9 10C9 9.71667 8.90417 9.47917 8.7125 9.2875C8.52083 9.09583 8.28333 9 8 9C7.71667 9 7.47917 9.09583 7.2875 9.2875C7.09583 9.47917 7 9.71667 7 10C7 10.2833 7.09583 10.5208 7.2875 10.7125C7.47917 10.9042 7.71667 11 8 11ZM12 11C12.2833 11 12.5208 10.9042 12.7125 10.7125C12.9042 10.5208 13 10.2833 13 10C13 9.71667 12.9042 9.47917 12.7125 9.2875C12.5208 9.09583 12.2833 9 12 9C11.7167 9 11.4792 9.09583 11.2875 9.2875C11.0958 9.47917 11 9.71667 11 10C11 10.2833 11.0958 10.5208 11.2875 10.7125C11.4792 10.9042 11.7167 11 12 11ZM16 11C16.2833 11 16.5208 10.9042 16.7125 10.7125C16.9042 10.5208 17 10.2833 17 10C17 9.71667 16.9042 9.47917 16.7125 9.2875C16.5208 9.09583 16.2833 9 16 9C15.7167 9 15.4792 9.09583 15.2875 9.2875C15.0958 9.47917 15 9.71667 15 10C15 10.2833 15.0958 10.5208 15.2875 10.7125C15.4792 10.9042 15.7167 11 16 11Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,thumb_down:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_558" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_558)">
    <path d="M3 16C2.46667 16 2 15.8 1.6 15.4C1.2 15 1 14.5333 1 14V12C1 11.8833 1.0125 11.7583 1.0375 11.625C1.0625 11.4917 1.1 11.3667 1.15 11.25L4.15 4.2C4.3 3.86667 4.55 3.58333 4.9 3.35C5.25 3.11667 5.61667 3 6 3H14C14.55 3 15.0208 3.19583 15.4125 3.5875C15.8042 3.97917 16 4.45 16 5V15.175C16 15.4417 15.9458 15.6958 15.8375 15.9375C15.7292 16.1792 15.5833 16.3917 15.4 16.575L9.975 21.975C9.725 22.2083 9.42917 22.35 9.0875 22.4C8.74583 22.45 8.41667 22.3917 8.1 22.225C7.78333 22.0583 7.55417 21.825 7.4125 21.525C7.27083 21.225 7.24167 20.9167 7.325 20.6L8.45 16H3ZM20 3C20.55 3 21.0208 3.19583 21.4125 3.5875C21.8042 3.97917 22 4.45 22 5V14C22 14.55 21.8042 15.0208 21.4125 15.4125C21.0208 15.8042 20.55 16 20 16C19.45 16 18.9792 15.8042 18.5875 15.4125C18.1958 15.0208 18 14.55 18 14V5C18 4.45 18.1958 3.97917 18.5875 3.5875C18.9792 3.19583 19.45 3 20 3Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,thumb_up:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_583" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_583)">
    <path d="M21 8.00007C21.5333 8.00007 22 8.20007 22.4 8.60007C22.8 9.00007 23 9.46674 23 10.0001V12.0001C23 12.1167 22.9875 12.2417 22.9625 12.3751C22.9375 12.5084 22.9 12.6334 22.85 12.7501L19.85 19.8001C19.7 20.1334 19.45 20.4167 19.1 20.6501C18.75 20.8834 18.3833 21.0001 18 21.0001H10C9.45 21.0001 8.97917 20.8042 8.5875 20.4126C8.19583 20.0209 8 19.5501 8 19.0001V8.82507C8 8.5584 8.05417 8.30424 8.1625 8.06257C8.27083 7.82091 8.41667 7.6084 8.6 7.42507L14.025 2.02507C14.275 1.79174 14.5708 1.65007 14.9125 1.60007C15.2542 1.55007 15.5833 1.6084 15.9 1.77507C16.2167 1.94174 16.4458 2.17507 16.5875 2.47507C16.7292 2.77507 16.7583 3.0834 16.675 3.40007L15.55 8.00007H21ZM4 21.0001C3.45 21.0001 2.97917 20.8042 2.5875 20.4126C2.19583 20.0209 2 19.5501 2 19.0001V10.0001C2 9.45007 2.19583 8.97924 2.5875 8.58757C2.97917 8.1959 3.45 8.00007 4 8.00007C4.55 8.00007 5.02083 8.1959 5.4125 8.58757C5.80417 8.97924 6 9.45007 6 10.0001V19.0001C6 19.5501 5.80417 20.0209 5.4125 20.4126C5.02083 20.8042 4.55 21.0001 4 21.0001Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,upload_file:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_596" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_596)">
    <path d="M11 14.825V18C11 18.2833 11.0958 18.5208 11.2875 18.7125C11.4792 18.9042 11.7167 19 12 19C12.2833 19 12.5208 18.9042 12.7125 18.7125C12.9042 18.5208 13 18.2833 13 18V14.825L13.9 15.725C14 15.825 14.1125 15.9 14.2375 15.95C14.3625 16 14.4875 16.0208 14.6125 16.0125C14.7375 16.0042 14.8583 15.975 14.975 15.925C15.0917 15.875 15.2 15.8 15.3 15.7C15.4833 15.5 15.5792 15.2667 15.5875 15C15.5958 14.7333 15.5 14.5 15.3 14.3L12.7 11.7C12.6 11.6 12.4917 11.5292 12.375 11.4875C12.2583 11.4458 12.1333 11.425 12 11.425C11.8667 11.425 11.7417 11.4458 11.625 11.4875C11.5083 11.5292 11.4 11.6 11.3 11.7L8.7 14.3C8.5 14.5 8.40417 14.7333 8.4125 15C8.42083 15.2667 8.525 15.5 8.725 15.7C8.925 15.8833 9.15833 15.9792 9.425 15.9875C9.69167 15.9958 9.925 15.9 10.125 15.7L11 14.825ZM6 22C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V4C4 3.45 4.19583 2.97917 4.5875 2.5875C4.97917 2.19583 5.45 2 6 2H13.175C13.4417 2 13.6958 2.05 13.9375 2.15C14.1792 2.25 14.3917 2.39167 14.575 2.575L19.425 7.425C19.6083 7.60833 19.75 7.82083 19.85 8.0625C19.95 8.30417 20 8.55833 20 8.825V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6ZM13 8V4H6V20H18V9H14C13.7167 9 13.4792 8.90417 13.2875 8.7125C13.0958 8.52083 13 8.28333 13 8Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,visibility:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_393" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_393)">
    <path d="M12 16C13.25 16 14.3125 15.5625 15.1875 14.6875C16.0625 13.8125 16.5 12.75 16.5 11.5C16.5 10.25 16.0625 9.1875 15.1875 8.3125C14.3125 7.4375 13.25 7 12 7C10.75 7 9.68752 7.4375 8.81252 8.3125C7.93752 9.1875 7.50002 10.25 7.50002 11.5C7.50002 12.75 7.93752 13.8125 8.81252 14.6875C9.68752 15.5625 10.75 16 12 16ZM12 14.2C11.25 14.2 10.6125 13.9375 10.0875 13.4125C9.56252 12.8875 9.30002 12.25 9.30002 11.5C9.30002 10.75 9.56252 10.1125 10.0875 9.5875C10.6125 9.0625 11.25 8.8 12 8.8C12.75 8.8 13.3875 9.0625 13.9125 9.5875C14.4375 10.1125 14.7 10.75 14.7 11.5C14.7 12.25 14.4375 12.8875 13.9125 13.4125C13.3875 13.9375 12.75 14.2 12 14.2ZM12 19C9.76669 19 7.72919 18.4 5.88752 17.2C4.04586 16 2.59169 14.4167 1.52502 12.45C1.44169 12.3 1.37919 12.1458 1.33752 11.9875C1.29586 11.8292 1.27502 11.6667 1.27502 11.5C1.27502 11.3333 1.29586 11.1708 1.33752 11.0125C1.37919 10.8542 1.44169 10.7 1.52502 10.55C2.59169 8.58333 4.04586 7 5.88752 5.8C7.72919 4.6 9.76669 4 12 4C14.2334 4 16.2709 4.6 18.1125 5.8C19.9542 7 21.4084 8.58333 22.475 10.55C22.5584 10.7 22.6209 10.8542 22.6625 11.0125C22.7042 11.1708 22.725 11.3333 22.725 11.5C22.725 11.6667 22.7042 11.8292 22.6625 11.9875C22.6209 12.1458 22.5584 12.3 22.475 12.45C21.4084 14.4167 19.9542 16 18.1125 17.2C16.2709 18.4 14.2334 19 12 19ZM12 17C13.8834 17 15.6125 16.5042 17.1875 15.5125C18.7625 14.5208 19.9667 13.1833 20.8 11.5C19.9667 9.81667 18.7625 8.47917 17.1875 7.4875C15.6125 6.49583 13.8834 6 12 6C10.1167 6 8.38752 6.49583 6.81252 7.4875C5.23752 8.47917 4.03336 9.81667 3.20002 11.5C4.03336 13.1833 5.23752 14.5208 6.81252 15.5125C8.38752 16.5042 10.1167 17 12 17Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>
`,visibility_off:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_398" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_398)">
    <path d="M15.175 8.32498C15.6583 8.80831 16.0125 9.35831 16.2375 9.97498C16.4625 10.5916 16.5417 11.225 16.475 11.875C16.475 12.125 16.3833 12.3375 16.2 12.5125C16.0167 12.6875 15.8 12.775 15.55 12.775C15.3 12.775 15.0875 12.6875 14.9125 12.5125C14.7375 12.3375 14.65 12.125 14.65 11.875C14.7333 11.4416 14.7083 11.025 14.575 10.625C14.4417 10.225 14.2333 9.88331 13.95 9.59998C13.6667 9.31664 13.325 9.09998 12.925 8.94998C12.525 8.79998 12.1 8.76664 11.65 8.84998C11.4 8.84998 11.1875 8.75831 11.0125 8.57498C10.8375 8.39164 10.75 8.17498 10.75 7.92498C10.75 7.67498 10.8375 7.46248 11.0125 7.28748C11.1875 7.11248 11.4 7.02498 11.65 7.02498C12.2833 6.95831 12.9083 7.03748 13.525 7.26248C14.1417 7.48748 14.6917 7.84164 15.175 8.32498ZM12 5.99998C11.6833 5.99998 11.375 6.01248 11.075 6.03748C10.775 6.06248 10.475 6.10831 10.175 6.17498C9.89167 6.22498 9.6375 6.18331 9.4125 6.04998C9.1875 5.91664 9.03333 5.71664 8.95 5.44998C8.86667 5.18331 8.89583 4.92498 9.0375 4.67498C9.17917 4.42498 9.38333 4.27498 9.65 4.22498C10.0333 4.14164 10.4208 4.08331 10.8125 4.04998C11.2042 4.01664 11.6 3.99998 12 3.99998C14.2833 3.99998 16.3708 4.59998 18.2625 5.79998C20.1542 6.99998 21.6 8.61664 22.6 10.65C22.6667 10.7833 22.7167 10.9208 22.75 11.0625C22.7833 11.2041 22.8 11.35 22.8 11.5C22.8 11.65 22.7875 11.7958 22.7625 11.9375C22.7375 12.0791 22.6917 12.2166 22.625 12.35C22.325 13.0166 21.9542 13.6416 21.5125 14.225C21.0708 14.8083 20.5833 15.3416 20.05 15.825C19.85 16.0083 19.6167 16.0833 19.35 16.05C19.0833 16.0166 18.8667 15.8833 18.7 15.65C18.5333 15.4166 18.4625 15.1625 18.4875 14.8875C18.5125 14.6125 18.625 14.3833 18.825 14.2C19.225 13.8166 19.5917 13.4 19.925 12.95C20.2583 12.5 20.55 12.0166 20.8 11.5C19.9667 9.81664 18.7625 8.47914 17.1875 7.48748C15.6125 6.49581 13.8833 5.99998 12 5.99998ZM12 19C9.76667 19 7.725 18.3958 5.875 17.1875C4.025 15.9791 2.56667 14.3916 1.5 12.425C1.41667 12.2916 1.35417 12.1458 1.3125 11.9875C1.27083 11.8291 1.25 11.6666 1.25 11.5C1.25 11.3333 1.26667 11.175 1.3 11.025C1.33333 10.875 1.39167 10.725 1.475 10.575C1.80833 9.90831 2.19583 9.27081 2.6375 8.66248C3.07917 8.05414 3.58333 7.49998 4.15 6.99998L2.075 4.89998C1.89167 4.69998 1.80417 4.46248 1.8125 4.18748C1.82083 3.91248 1.91667 3.68331 2.1 3.49998C2.28333 3.31664 2.51667 3.22498 2.8 3.22498C3.08333 3.22498 3.31667 3.31664 3.5 3.49998L20.5 20.5C20.6833 20.6833 20.7792 20.9125 20.7875 21.1875C20.7958 21.4625 20.7 21.7 20.5 21.9C20.3167 22.0833 20.0833 22.175 19.8 22.175C19.5167 22.175 19.2833 22.0833 19.1 21.9L15.6 18.45C15.0167 18.6333 14.425 18.7708 13.825 18.8625C13.225 18.9541 12.6167 19 12 19ZM5.55 8.39998C5.06667 8.83331 4.625 9.30831 4.225 9.82498C3.825 10.3416 3.48333 10.9 3.2 11.5C4.03333 13.1833 5.2375 14.5208 6.8125 15.5125C8.3875 16.5041 10.1167 17 12 17C12.3333 17 12.6583 16.9791 12.975 16.9375C13.2917 16.8958 13.6167 16.85 13.95 16.8L13.05 15.85C12.8667 15.9 12.6917 15.9375 12.525 15.9625C12.3583 15.9875 12.1833 16 12 16C10.75 16 9.6875 15.5625 8.8125 14.6875C7.9375 13.8125 7.5 12.75 7.5 11.5C7.5 11.3166 7.5125 11.1416 7.5375 10.975C7.5625 10.8083 7.6 10.6333 7.65 10.45L5.55 8.39998Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>
`,notifications:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_409" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_409)">
    <path d="M5 19C4.71667 19 4.47917 18.9042 4.2875 18.7125C4.09583 18.5208 4 18.2833 4 18C4 17.7167 4.09583 17.4792 4.2875 17.2875C4.47917 17.0958 4.71667 17 5 17H6V10C6 8.61667 6.41667 7.3875 7.25 6.3125C8.08333 5.2375 9.16667 4.53333 10.5 4.2V3.5C10.5 3.08333 10.6458 2.72917 10.9375 2.4375C11.2292 2.14583 11.5833 2 12 2C12.4167 2 12.7708 2.14583 13.0625 2.4375C13.3542 2.72917 13.5 3.08333 13.5 3.5V4.2C14.8333 4.53333 15.9167 5.2375 16.75 6.3125C17.5833 7.3875 18 8.61667 18 10V17H19C19.2833 17 19.5208 17.0958 19.7125 17.2875C19.9042 17.4792 20 17.7167 20 18C20 18.2833 19.9042 18.5208 19.7125 18.7125C19.5208 18.9042 19.2833 19 19 19H5ZM12 22C11.45 22 10.9792 21.8042 10.5875 21.4125C10.1958 21.0208 10 20.55 10 20H14C14 20.55 13.8042 21.0208 13.4125 21.4125C13.0208 21.8042 12.55 22 12 22ZM8 17H16V10C16 8.9 15.6083 7.95833 14.825 7.175C14.0417 6.39167 13.1 6 12 6C10.9 6 9.95833 6.39167 9.175 7.175C8.39167 7.95833 8 8.9 8 10V17Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,add:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_14011_362" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_14011_362)">
    <path d="M11 13H6C5.71667 13 5.47917 12.9042 5.2875 12.7125C5.09583 12.5208 5 12.2833 5 12C5 11.7167 5.09583 11.4792 5.2875 11.2875C5.47917 11.0958 5.71667 11 6 11H11V6C11 5.71667 11.0958 5.47917 11.2875 5.2875C11.4792 5.09583 11.7167 5 12 5C12.2833 5 12.5208 5.09583 12.7125 5.2875C12.9042 5.47917 13 5.71667 13 6V11H18C18.2833 11 18.5208 11.0958 18.7125 11.2875C18.9042 11.4792 19 11.7167 19 12C19 12.2833 18.9042 12.5208 18.7125 12.7125C18.5208 12.9042 18.2833 13 18 13H13V18C13 18.2833 12.9042 18.5208 12.7125 18.7125C12.5208 18.9042 12.2833 19 12 19C11.7167 19 11.4792 18.9042 11.2875 18.7125C11.0958 18.5208 11 18.2833 11 18V13Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,remove:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_14011_713" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_14011_713)">
    <path d="M6 13C5.71667 13 5.47917 12.9042 5.2875 12.7125C5.09583 12.5208 5 12.2833 5 12C5 11.7167 5.09583 11.4792 5.2875 11.2875C5.47917 11.0958 5.71667 11 6 11H18C18.2833 11 18.5208 11.0958 18.7125 11.2875C18.9042 11.4792 19 11.7167 19 12C19 12.2833 18.9042 12.5208 18.7125 12.7125C18.5208 12.9042 18.2833 13 18 13H6Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,content_copy:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_525_15" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_525_15)">
    <path d="M9 18C8.45 18 7.97917 17.8042 7.5875 17.4125C7.19583 17.0208 7 16.55 7 16V4C7 3.45 7.19583 2.97917 7.5875 2.5875C7.97917 2.19583 8.45 2 9 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H9ZM9 16H18V4H9V16ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6C4.28333 6 4.52083 6.09583 4.7125 6.2875C4.90417 6.47917 5 6.71667 5 7V20H15C15.2833 20 15.5208 20.0958 15.7125 20.2875C15.9042 20.4792 16 20.7167 16 21C16 21.2833 15.9042 21.5208 15.7125 21.7125C15.5208 21.9042 15.2833 22 15 22H5Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,arrow_back:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_673" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_673)">
    <path d="M7.82505 13L12.725 17.9C12.925 18.1 13.0209 18.3334 13.0125 18.6C13.0042 18.8667 12.9 19.1 12.7 19.3C12.5 19.4834 12.2667 19.5792 12 19.5875C11.7334 19.5959 11.5 19.5 11.3 19.3L4.70005 12.7C4.60005 12.6 4.52922 12.4917 4.48755 12.375C4.44588 12.2584 4.42505 12.1334 4.42505 12C4.42505 11.8667 4.44588 11.7417 4.48755 11.625C4.52922 11.5084 4.60005 11.4 4.70005 11.3L11.3 4.70005C11.4834 4.51672 11.7125 4.42505 11.9875 4.42505C12.2625 4.42505 12.5 4.51672 12.7 4.70005C12.9 4.90005 13 5.13755 13 5.41255C13 5.68755 12.9 5.92505 12.7 6.12505L7.82505 11H19C19.2834 11 19.5209 11.0959 19.7125 11.2875C19.9042 11.4792 20 11.7167 20 12C20 12.2834 19.9042 12.5209 19.7125 12.7125C19.5209 12.9042 19.2834 13 19 13H7.82505Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,arrow_downward:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_7578_114" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_7578_114)">
    <path d="M11 16.175V5C11 4.71667 11.0959 4.47917 11.2875 4.2875C11.4792 4.09583 11.7167 4 12 4C12.2834 4 12.5209 4.09583 12.7125 4.2875C12.9042 4.47917 13 4.71667 13 5V16.175L17.9 11.275C18.1 11.075 18.3334 10.9792 18.6 10.9875C18.8667 10.9958 19.1 11.1 19.3 11.3C19.4834 11.5 19.5792 11.7333 19.5875 12C19.5959 12.2667 19.5 12.5 19.3 12.7L12.7 19.3C12.6 19.4 12.4917 19.4708 12.375 19.5125C12.2584 19.5542 12.1334 19.575 12 19.575C11.8667 19.575 11.7417 19.5542 11.625 19.5125C11.5084 19.4708 11.4 19.4 11.3 19.3L4.70005 12.7C4.51672 12.5167 4.42505 12.2875 4.42505 12.0125C4.42505 11.7375 4.51672 11.5 4.70005 11.3C4.90005 11.1 5.13755 11 5.41255 11C5.68755 11 5.92505 11.1 6.12505 11.3L11 16.175Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,arrow_forward:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_7578_474" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_7578_474)">
    <path d="M16.175 13H5C4.71667 13 4.47917 12.9042 4.2875 12.7125C4.09583 12.5208 4 12.2833 4 12C4 11.7167 4.09583 11.4792 4.2875 11.2875C4.47917 11.0958 4.71667 11 5 11H16.175L11.275 6.1C11.075 5.9 10.9792 5.66667 10.9875 5.4C10.9958 5.13334 11.1 4.9 11.3 4.7C11.5 4.51667 11.7333 4.42084 12 4.4125C12.2667 4.40417 12.5 4.5 12.7 4.7L19.3 11.3C19.4 11.4 19.4708 11.5083 19.5125 11.625C19.5542 11.7417 19.575 11.8667 19.575 12C19.575 12.1333 19.5542 12.2583 19.5125 12.375C19.4708 12.4917 19.4 12.6 19.3 12.7L12.7 19.3C12.5167 19.4833 12.2875 19.575 12.0125 19.575C11.7375 19.575 11.5 19.4833 11.3 19.3C11.1 19.1 11 18.8625 11 18.5875C11 18.3125 11.1 18.075 11.3 17.875L16.175 13Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,arrow_upward:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_7578_90" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_7578_90)">
    <path d="M11 7.825L6.09999 12.725C5.89999 12.925 5.66665 13.0208 5.39999 13.0125C5.13332 13.0042 4.89999 12.9 4.69999 12.7C4.51665 12.5 4.42082 12.2667 4.41249 12C4.40415 11.7333 4.49999 11.5 4.69999 11.3L11.3 4.7C11.4 4.6 11.5083 4.52917 11.625 4.4875C11.7417 4.44584 11.8667 4.425 12 4.425C12.1333 4.425 12.2583 4.44584 12.375 4.4875C12.4917 4.52917 12.6 4.6 12.7 4.7L19.3 11.3C19.4833 11.4833 19.575 11.7125 19.575 11.9875C19.575 12.2625 19.4833 12.5 19.3 12.7C19.1 12.9 18.8625 13 18.5875 13C18.3125 13 18.075 12.9 17.875 12.7L13 7.825V19C13 19.2833 12.9042 19.5208 12.7125 19.7125C12.5208 19.9042 12.2833 20 12 20C11.7167 20 11.4792 19.9042 11.2875 19.7125C11.0958 19.5208 11 19.2833 11 19V7.825Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,chevron_down:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_190" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_190)">
    <path d="M12 14.725L19.35 7.375C19.6 7.125 19.8917 7.00417 20.225 7.0125C20.5583 7.02083 20.85 7.15 21.1 7.4C21.35 7.65 21.475 7.94167 21.475 8.275C21.475 8.60833 21.35 8.9 21.1 9.15L13.425 16.85C13.225 17.05 13 17.2 12.75 17.3C12.5 17.4 12.25 17.45 12 17.45C11.75 17.45 11.5 17.4 11.25 17.3C11 17.2 10.775 17.05 10.575 16.85L2.87499 9.15C2.62499 8.9 2.50415 8.60417 2.51249 8.2625C2.52082 7.92083 2.64999 7.625 2.89999 7.375C3.14999 7.125 3.44165 7 3.77499 7C4.10832 7 4.39999 7.125 4.64999 7.375L12 14.725Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,chevron_up:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_435" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_435)">
    <path d="M12 9.82485L4.65002 17.1749C4.40002 17.4249 4.10836 17.5457 3.77502 17.5374C3.44169 17.529 3.15002 17.3999 2.90002 17.1499C2.65002 16.8999 2.52502 16.6082 2.52502 16.2749C2.52502 15.9415 2.65002 15.6499 2.90002 15.3999L10.575 7.69985C10.775 7.49985 11 7.34985 11.25 7.24985C11.5 7.14985 11.75 7.09985 12 7.09985C12.25 7.09985 12.5 7.14985 12.75 7.24985C13 7.34985 13.225 7.49985 13.425 7.69985L21.125 15.3999C21.375 15.6499 21.4959 15.9457 21.4875 16.2874C21.4792 16.629 21.35 16.9249 21.1 17.1749C20.85 17.4249 20.5584 17.5499 20.225 17.5499C19.8917 17.5499 19.6 17.4249 19.35 17.1749L12 9.82485Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,chevron_left:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_376" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_376)">
    <path d="M9.54995 12.0001L16.9 19.3501C17.15 19.6001 17.2708 19.8918 17.2625 20.2251C17.2541 20.5584 17.125 20.8501 16.875 21.1001C16.625 21.3501 16.3333 21.4751 16 21.4751C15.6666 21.4751 15.375 21.3501 15.125 21.1001L7.42495 13.4251C7.22495 13.2251 7.07495 13.0001 6.97495 12.7501C6.87495 12.5001 6.82495 12.2501 6.82495 12.0001C6.82495 11.7501 6.87495 11.5001 6.97495 11.2501C7.07495 11.0001 7.22495 10.7751 7.42495 10.5751L15.125 2.87511C15.375 2.62511 15.6708 2.50428 16.0125 2.51261C16.3541 2.52094 16.65 2.65011 16.9 2.90011C17.15 3.15011 17.275 3.44178 17.275 3.77511C17.275 4.10844 17.15 4.40011 16.9 4.65011L9.54995 12.0001Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,chevron_right:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_247" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_247)">
    <path d="M14.7238 12.4865L7.37494 19.8353C7.12498 20.0853 7.00417 20.3769 7.0125 20.7102C7.02083 21.0435 7.14998 21.3351 7.39994 21.5851C7.6499 21.835 7.94152 21.96 8.2748 21.96C8.60809 21.96 8.89971 21.835 9.14967 21.5851L16.8485 13.9112C17.0485 13.7113 17.1984 13.4863 17.2984 13.2363C17.3984 12.9864 17.4484 12.7364 17.4484 12.4865C17.4484 12.2365 17.3984 11.9865 17.2984 11.7366C17.1984 11.4866 17.0485 11.2616 16.8485 11.0617L9.14967 3.36285C8.89971 3.11289 8.60392 2.99207 8.26231 3.0004C7.92069 3.00874 7.6249 3.13788 7.37494 3.38784C7.12498 3.63781 7 3.92943 7 4.26271C7 4.59599 7.12498 4.88761 7.37494 5.13758L14.7238 12.4865Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,ac_unit:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_444" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_444)">
    <path d="M11 17.85L8.425 20.375C8.24167 20.5583 8.0125 20.65 7.7375 20.65C7.4625 20.65 7.23333 20.55 7.05 20.35C6.85 20.1667 6.75 19.9375 6.75 19.6625C6.75 19.3875 6.85 19.15 7.05 18.95L11 15V13H9L5.025 16.975C4.84167 17.1583 4.6125 17.25 4.3375 17.25C4.0625 17.25 3.825 17.15 3.625 16.95C3.44167 16.7667 3.35 16.5375 3.35 16.2625C3.35 15.9875 3.44167 15.7583 3.625 15.575L6.15 13H2.975C2.69167 13 2.45833 12.9042 2.275 12.7125C2.09167 12.5208 2 12.2833 2 12C2 11.7167 2.09583 11.4792 2.2875 11.2875C2.47917 11.0958 2.71667 11 3 11H6.15L3.625 8.45C3.44167 8.26667 3.35 8.0375 3.35 7.7625C3.35 7.4875 3.45 7.25 3.65 7.05C3.83333 6.86667 4.0625 6.775 4.3375 6.775C4.6125 6.775 4.85 6.86667 5.05 7.05L9 11H11V9L7.025 5.05C6.84167 4.86667 6.75 4.6375 6.75 4.3625C6.75 4.0875 6.85 3.85 7.05 3.65C7.23333 3.46667 7.4625 3.375 7.7375 3.375C8.0125 3.375 8.24167 3.46667 8.425 3.65L11 6.15V3C11 2.71667 11.0958 2.47917 11.2875 2.2875C11.4792 2.09583 11.7167 2 12 2C12.2833 2 12.5208 2.09583 12.7125 2.2875C12.9042 2.47917 13 2.71667 13 3V6.15L15.55 3.65C15.7333 3.46667 15.9625 3.375 16.2375 3.375C16.5125 3.375 16.75 3.46667 16.95 3.65C17.1333 3.85 17.225 4.0875 17.225 4.3625C17.225 4.6375 17.1333 4.86667 16.95 5.05L13 9V11H15L18.95 7.05C19.1333 6.86667 19.3625 6.775 19.6375 6.775C19.9125 6.775 20.15 6.875 20.35 7.075C20.5333 7.25833 20.625 7.4875 20.625 7.7625C20.625 8.0375 20.5333 8.26667 20.35 8.45L17.85 11H21C21.2833 11 21.5208 11.0958 21.7125 11.2875C21.9042 11.4792 22 11.7167 22 12C22 12.2833 21.9042 12.5208 21.7125 12.7125C21.5208 12.9042 21.2833 13 21 13H17.85L20.35 15.575C20.5333 15.7583 20.625 15.9875 20.625 16.2625C20.625 16.5375 20.5333 16.7667 20.35 16.95C20.15 17.15 19.9125 17.25 19.6375 17.25C19.3625 17.25 19.1333 17.15 18.95 16.95L15 13H13V15L16.95 18.975C17.1333 19.1583 17.225 19.3875 17.225 19.6625C17.225 19.9375 17.125 20.175 16.925 20.375C16.7417 20.5583 16.5125 20.65 16.2375 20.65C15.9625 20.65 15.7333 20.5583 15.55 20.375L13 17.85V21.025C13 21.3083 12.9042 21.5417 12.7125 21.725C12.5208 21.9083 12.2833 22 12 22C11.7167 22 11.4792 21.9042 11.2875 21.7125C11.0958 21.5208 11 21.2833 11 21V17.85Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,air:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_423" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_423)">
    <path d="M11.5 20C10.9667 20 10.4708 19.8667 10.0125 19.6C9.55417 19.3333 9.18333 18.9667 8.9 18.5C8.71667 18.1667 8.7125 17.8333 8.8875 17.5C9.0625 17.1667 9.33333 17 9.7 17C9.91667 17 10.1083 17.0667 10.275 17.2C10.4417 17.3333 10.5917 17.4833 10.725 17.65C10.8083 17.7667 10.9208 17.8542 11.0625 17.9125C11.2042 17.9708 11.35 18 11.5 18C11.7833 18 12.0208 17.9042 12.2125 17.7125C12.4042 17.5208 12.5 17.2833 12.5 17C12.5 16.7167 12.4042 16.4792 12.2125 16.2875C12.0208 16.0958 11.7833 16 11.5 16H3C2.71667 16 2.47917 15.9042 2.2875 15.7125C2.09583 15.5208 2 15.2833 2 15C2 14.7167 2.09583 14.4792 2.2875 14.2875C2.47917 14.0958 2.71667 14 3 14H11.5C12.3333 14 13.0417 14.2917 13.625 14.875C14.2083 15.4583 14.5 16.1667 14.5 17C14.5 17.8333 14.2083 18.5417 13.625 19.125C13.0417 19.7083 12.3333 20 11.5 20ZM3 10C2.71667 10 2.47917 9.90417 2.2875 9.7125C2.09583 9.52083 2 9.28333 2 9C2 8.71667 2.09583 8.47917 2.2875 8.2875C2.47917 8.09583 2.71667 8 3 8H15.5C15.9167 8 16.2708 7.85417 16.5625 7.5625C16.8542 7.27083 17 6.91667 17 6.5C17 6.08333 16.8542 5.72917 16.5625 5.4375C16.2708 5.14583 15.9167 5 15.5 5C15.2333 5 14.9833 5.0625 14.75 5.1875C14.5167 5.3125 14.3333 5.49167 14.2 5.725C14.0833 5.925 13.9417 6.10417 13.775 6.2625C13.6083 6.42083 13.4083 6.5 13.175 6.5C12.8417 6.5 12.5708 6.375 12.3625 6.125C12.1542 5.875 12.1 5.60833 12.2 5.325C12.4333 4.625 12.8542 4.0625 13.4625 3.6375C14.0708 3.2125 14.75 3 15.5 3C16.4667 3 17.2917 3.34167 17.975 4.025C18.6583 4.70833 19 5.53333 19 6.5C19 7.46667 18.6583 8.29167 17.975 8.975C17.2917 9.65833 16.4667 10 15.5 10H3ZM19.95 17.7C19.6167 17.85 19.2917 17.8292 18.975 17.6375C18.6583 17.4458 18.5 17.1667 18.5 16.8C18.5 16.5667 18.5792 16.3708 18.7375 16.2125C18.8958 16.0542 19.075 15.9167 19.275 15.8C19.5083 15.6667 19.6875 15.4833 19.8125 15.25C19.9375 15.0167 20 14.7667 20 14.5C20 14.0833 19.8542 13.7292 19.5625 13.4375C19.2708 13.1458 18.9167 13 18.5 13H3C2.71667 13 2.47917 12.9042 2.2875 12.7125C2.09583 12.5208 2 12.2833 2 12C2 11.7167 2.09583 11.4792 2.2875 11.2875C2.47917 11.0958 2.71667 11 3 11H18.5C19.4667 11 20.2917 11.3417 20.975 12.025C21.6583 12.7083 22 13.5333 22 14.5C22 15.2 21.8167 15.8375 21.45 16.4125C21.0833 16.9875 20.5833 17.4167 19.95 17.7Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,clear_day:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_705" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_705)">
    <path d="M12 5C11.7167 5 11.4792 4.90417 11.2875 4.7125C11.0958 4.52083 11 4.28333 11 4V2C11 1.71667 11.0958 1.47917 11.2875 1.2875C11.4792 1.09583 11.7167 1 12 1C12.2833 1 12.5208 1.09583 12.7125 1.2875C12.9042 1.47917 13 1.71667 13 2V4C13 4.28333 12.9042 4.52083 12.7125 4.7125C12.5208 4.90417 12.2833 5 12 5ZM16.95 7.05C16.7667 6.86667 16.675 6.6375 16.675 6.3625C16.675 6.0875 16.7667 5.85 16.95 5.65L18.35 4.225C18.55 4.025 18.7875 3.925 19.0625 3.925C19.3375 3.925 19.575 4.025 19.775 4.225C19.9583 4.40833 20.05 4.64167 20.05 4.925C20.05 5.20833 19.9583 5.44167 19.775 5.625L18.35 7.05C18.1667 7.23333 17.9333 7.325 17.65 7.325C17.3667 7.325 17.1333 7.23333 16.95 7.05ZM20 13C19.7167 13 19.4792 12.9042 19.2875 12.7125C19.0958 12.5208 19 12.2833 19 12C19 11.7167 19.0958 11.4792 19.2875 11.2875C19.4792 11.0958 19.7167 11 20 11H22C22.2833 11 22.5208 11.0958 22.7125 11.2875C22.9042 11.4792 23 11.7167 23 12C23 12.2833 22.9042 12.5208 22.7125 12.7125C22.5208 12.9042 22.2833 13 22 13H20ZM12 23C11.7167 23 11.4792 22.9042 11.2875 22.7125C11.0958 22.5208 11 22.2833 11 22V20C11 19.7167 11.0958 19.4792 11.2875 19.2875C11.4792 19.0958 11.7167 19 12 19C12.2833 19 12.5208 19.0958 12.7125 19.2875C12.9042 19.4792 13 19.7167 13 20V22C13 22.2833 12.9042 22.5208 12.7125 22.7125C12.5208 22.9042 12.2833 23 12 23ZM5.65 7.05L4.225 5.65C4.025 5.45 3.925 5.20833 3.925 4.925C3.925 4.64167 4.025 4.40833 4.225 4.225C4.40833 4.04167 4.64167 3.95 4.925 3.95C5.20833 3.95 5.44167 4.04167 5.625 4.225L7.05 5.65C7.23333 5.83333 7.325 6.06667 7.325 6.35C7.325 6.63333 7.23333 6.86667 7.05 7.05C6.85 7.23333 6.61667 7.325 6.35 7.325C6.08333 7.325 5.85 7.23333 5.65 7.05ZM18.35 19.775L16.95 18.35C16.7667 18.15 16.675 17.9125 16.675 17.6375C16.675 17.3625 16.7667 17.1333 16.95 16.95C17.1333 16.7667 17.3625 16.675 17.6375 16.675C17.9125 16.675 18.15 16.7667 18.35 16.95L19.775 18.35C19.975 18.5333 20.0708 18.7667 20.0625 19.05C20.0542 19.3333 19.9583 19.575 19.775 19.775C19.575 19.975 19.3333 20.075 19.05 20.075C18.7667 20.075 18.5333 19.975 18.35 19.775ZM2 13C1.71667 13 1.47917 12.9042 1.2875 12.7125C1.09583 12.5208 1 12.2833 1 12C1 11.7167 1.09583 11.4792 1.2875 11.2875C1.47917 11.0958 1.71667 11 2 11H4C4.28333 11 4.52083 11.0958 4.7125 11.2875C4.90417 11.4792 5 11.7167 5 12C5 12.2833 4.90417 12.5208 4.7125 12.7125C4.52083 12.9042 4.28333 13 4 13H2ZM4.225 19.775C4.04167 19.5917 3.95 19.3583 3.95 19.075C3.95 18.7917 4.04167 18.5583 4.225 18.375L5.65 16.95C5.83333 16.7667 6.0625 16.675 6.3375 16.675C6.6125 16.675 6.85 16.7667 7.05 16.95C7.25 17.15 7.35 17.3875 7.35 17.6625C7.35 17.9375 7.25 18.175 7.05 18.375L5.65 19.775C5.45 19.975 5.20833 20.075 4.925 20.075C4.64167 20.075 4.40833 19.975 4.225 19.775ZM12 18C10.3333 18 8.91667 17.4167 7.75 16.25C6.58333 15.0833 6 13.6667 6 12C6 10.3333 6.58333 8.91667 7.75 7.75C8.91667 6.58333 10.3333 6 12 6C13.6667 6 15.0833 6.58333 16.25 7.75C17.4167 8.91667 18 10.3333 18 12C18 13.6667 17.4167 15.0833 16.25 16.25C15.0833 17.4167 13.6667 18 12 18ZM12 16C13.1 16 14.0417 15.6083 14.825 14.825C15.6083 14.0417 16 13.1 16 12C16 10.9 15.6083 9.95833 14.825 9.175C14.0417 8.39167 13.1 8 12 8C10.9 8 9.95833 8.39167 9.175 9.175C8.39167 9.95833 8 10.9 8 12C8 13.1 8.39167 14.0417 9.175 14.825C9.95833 15.6083 10.9 16 12 16Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,coronavirus:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_778" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_778)">
    <path d="M11.25 22C11.05 22 10.875 21.925 10.725 21.775C10.575 21.625 10.5 21.45 10.5 21.25C10.5 21.05 10.575 20.875 10.725 20.725C10.875 20.575 11.05 20.5 11.25 20.5V18.95C10.55 18.8667 9.89167 18.7 9.275 18.45C8.65833 18.2 8.1 17.8667 7.6 17.45L6.525 18.55C6.675 18.7 6.75 18.875 6.75 19.075C6.75 19.275 6.675 19.45 6.525 19.6C6.375 19.75 6.2 19.825 6 19.825C5.8 19.825 5.625 19.75 5.475 19.6L4.4 18.55C4.25 18.4 4.175 18.2208 4.175 18.0125C4.175 17.8042 4.25 17.625 4.4 17.475C4.55 17.325 4.725 17.2542 4.925 17.2625C5.125 17.2708 5.3 17.3417 5.45 17.475L6.55 16.375C6.13333 15.8583 5.8 15.3 5.55 14.7C5.3 14.1 5.13333 13.45 5.05 12.75H3.5C3.5 12.95 3.425 13.125 3.275 13.275C3.125 13.425 2.95 13.5 2.75 13.5C2.55 13.5 2.375 13.425 2.225 13.275C2.075 13.125 2 12.95 2 12.75V11.25C2 11.05 2.075 10.875 2.225 10.725C2.375 10.575 2.55 10.5 2.75 10.5C2.95 10.5 3.125 10.575 3.275 10.725C3.425 10.875 3.5 11.05 3.5 11.25H5.05C5.13333 10.55 5.30417 9.9 5.5625 9.3C5.82083 8.7 6.15 8.14167 6.55 7.625L5.45 6.525C5.3 6.65833 5.125 6.72917 4.925 6.7375C4.725 6.74583 4.55 6.675 4.4 6.525C4.25 6.375 4.175 6.19583 4.175 5.9875C4.175 5.77917 4.25 5.6 4.4 5.45L5.45 4.4C5.6 4.25 5.77917 4.175 5.9875 4.175C6.19583 4.175 6.375 4.25 6.525 4.4C6.675 4.55 6.75 4.72917 6.75 4.9375C6.75 5.14583 6.675 5.325 6.525 5.475L7.6 6.55C8.11667 6.13333 8.675 5.8 9.275 5.55C9.875 5.3 10.525 5.13333 11.225 5.05V3.5C11.025 3.5 10.8542 3.425 10.7125 3.275C10.5708 3.125 10.5 2.95 10.5 2.75C10.5 2.55 10.575 2.375 10.725 2.225C10.875 2.075 11.05 2 11.25 2H12.75C12.95 2 13.125 2.075 13.275 2.225C13.425 2.375 13.5 2.55 13.5 2.75C13.5 2.95 13.425 3.125 13.275 3.275C13.125 3.425 12.95 3.5 12.75 3.5V5.05C13.45 5.13333 14.1 5.3 14.7 5.55C15.3 5.8 15.8583 6.13333 16.375 6.55L17.475 5.45C17.325 5.3 17.25 5.125 17.25 4.925C17.25 4.725 17.325 4.55 17.475 4.4C17.625 4.25 17.8042 4.175 18.0125 4.175C18.2208 4.175 18.4 4.25 18.55 4.4L19.6 5.475C19.75 5.625 19.825 5.8 19.825 6C19.825 6.2 19.75 6.375 19.6 6.525C19.45 6.675 19.2708 6.75 19.0625 6.75C18.8542 6.75 18.675 6.675 18.525 6.525L17.45 7.6C17.8667 8.11667 18.2 8.67917 18.45 9.2875C18.7 9.89583 18.8667 10.55 18.95 11.25H20.5C20.5 11.05 20.575 10.875 20.725 10.725C20.875 10.575 21.05 10.5 21.25 10.5C21.45 10.5 21.625 10.575 21.775 10.725C21.925 10.875 22 11.05 22 11.25V12.75C22 12.95 21.925 13.125 21.775 13.275C21.625 13.425 21.45 13.5 21.25 13.5C21.05 13.5 20.875 13.425 20.725 13.275C20.575 13.125 20.5 12.95 20.5 12.75H18.95C18.8667 13.45 18.7 14.1042 18.45 14.7125C18.2 15.3208 17.8667 15.8833 17.45 16.4L18.525 17.475C18.675 17.325 18.8542 17.25 19.0625 17.25C19.2708 17.25 19.45 17.325 19.6 17.475C19.75 17.625 19.825 17.8042 19.825 18.0125C19.825 18.2208 19.75 18.4 19.6 18.55L18.55 19.6C18.4 19.75 18.2208 19.825 18.0125 19.825C17.8042 19.825 17.625 19.75 17.475 19.6C17.325 19.45 17.2542 19.275 17.2625 19.075C17.2708 18.875 17.3417 18.7 17.475 18.55L16.375 17.45C15.8583 17.8667 15.3 18.2042 14.7 18.4625C14.1 18.7208 13.45 18.8917 12.75 18.975V20.5C12.95 20.5 13.125 20.575 13.275 20.725C13.425 20.875 13.5 21.05 13.5 21.25C13.5 21.45 13.425 21.625 13.275 21.775C13.125 21.925 12.95 22 12.75 22H11.25ZM12 17C13.3833 17 14.5625 16.5125 15.5375 15.5375C16.5125 14.5625 17 13.3833 17 12C17 10.6167 16.5125 9.4375 15.5375 8.4625C14.5625 7.4875 13.3833 7 12 7C10.6167 7 9.4375 7.4875 8.4625 8.4625C7.4875 9.4375 7 10.6167 7 12C7 13.3833 7.4875 14.5625 8.4625 15.5375C9.4375 16.5125 10.6167 17 12 17ZM10.25 16C10.5333 16 10.7708 15.9042 10.9625 15.7125C11.1542 15.5208 11.25 15.2833 11.25 15C11.25 14.7167 11.1542 14.4792 10.9625 14.2875C10.7708 14.0958 10.5333 14 10.25 14C9.96667 14 9.72917 14.0958 9.5375 14.2875C9.34583 14.4792 9.25 14.7167 9.25 15C9.25 15.2833 9.34583 15.5208 9.5375 15.7125C9.72917 15.9042 9.96667 16 10.25 16ZM13.75 16C14.0333 16 14.2708 15.9042 14.4625 15.7125C14.6542 15.5208 14.75 15.2833 14.75 15C14.75 14.7167 14.6542 14.4792 14.4625 14.2875C14.2708 14.0958 14.0333 14 13.75 14C13.4667 14 13.2292 14.0958 13.0375 14.2875C12.8458 14.4792 12.75 14.7167 12.75 15C12.75 15.2833 12.8458 15.5208 13.0375 15.7125C13.2292 15.9042 13.4667 16 13.75 16ZM8.5 13C8.78333 13 9.02083 12.9042 9.2125 12.7125C9.40417 12.5208 9.5 12.2833 9.5 12C9.5 11.7167 9.40417 11.4792 9.2125 11.2875C9.02083 11.0958 8.78333 11 8.5 11C8.21667 11 7.97917 11.0958 7.7875 11.2875C7.59583 11.4792 7.5 11.7167 7.5 12C7.5 12.2833 7.59583 12.5208 7.7875 12.7125C7.97917 12.9042 8.21667 13 8.5 13ZM12 13C12.2833 13 12.5208 12.9042 12.7125 12.7125C12.9042 12.5208 13 12.2833 13 12C13 11.7167 12.9042 11.4792 12.7125 11.2875C12.5208 11.0958 12.2833 11 12 11C11.7167 11 11.4792 11.0958 11.2875 11.2875C11.0958 11.4792 11 11.7167 11 12C11 12.2833 11.0958 12.5208 11.2875 12.7125C11.4792 12.9042 11.7167 13 12 13ZM15.5 13C15.7833 13 16.0208 12.9042 16.2125 12.7125C16.4042 12.5208 16.5 12.2833 16.5 12C16.5 11.7167 16.4042 11.4792 16.2125 11.2875C16.0208 11.0958 15.7833 11 15.5 11C15.2167 11 14.9792 11.0958 14.7875 11.2875C14.5958 11.4792 14.5 11.7167 14.5 12C14.5 12.2833 14.5958 12.5208 14.7875 12.7125C14.9792 12.9042 15.2167 13 15.5 13ZM10.25 10C10.5333 10 10.7708 9.90417 10.9625 9.7125C11.1542 9.52083 11.25 9.28333 11.25 9C11.25 8.71667 11.1542 8.47917 10.9625 8.2875C10.7708 8.09583 10.5333 8 10.25 8C9.96667 8 9.72917 8.09583 9.5375 8.2875C9.34583 8.47917 9.25 8.71667 9.25 9C9.25 9.28333 9.34583 9.52083 9.5375 9.7125C9.72917 9.90417 9.96667 10 10.25 10ZM13.75 10C14.0333 10 14.2708 9.90417 14.4625 9.7125C14.6542 9.52083 14.75 9.28333 14.75 9C14.75 8.71667 14.6542 8.47917 14.4625 8.2875C14.2708 8.09583 14.0333 8 13.75 8C13.4667 8 13.2292 8.09583 13.0375 8.2875C12.8458 8.47917 12.75 8.71667 12.75 9C12.75 9.28333 12.8458 9.52083 13.0375 9.7125C13.2292 9.90417 13.4667 10 13.75 10Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,rainy:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_566" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_566)">
    <path d="M13.95 21.9C13.7 22.0333 13.4458 22.0542 13.1875 21.9625C12.9292 21.8708 12.7333 21.7 12.6 21.45L11.1 18.45C10.9667 18.2 10.9458 17.9458 11.0375 17.6875C11.1292 17.4292 11.3 17.2333 11.55 17.1C11.8 16.9667 12.0542 16.9458 12.3125 17.0375C12.5708 17.1292 12.7667 17.3 12.9 17.55L14.4 20.55C14.5333 20.8 14.5542 21.0542 14.4625 21.3125C14.3708 21.5708 14.2 21.7667 13.95 21.9ZM19.95 21.9C19.7 22.0333 19.4458 22.0542 19.1875 21.9625C18.9292 21.8708 18.7333 21.7 18.6 21.45L17.1 18.45C16.9667 18.2 16.9458 17.9458 17.0375 17.6875C17.1292 17.4292 17.3 17.2333 17.55 17.1C17.8 16.9667 18.0542 16.9458 18.3125 17.0375C18.5708 17.1292 18.7667 17.3 18.9 17.55L20.4 20.55C20.5333 20.8 20.5542 21.0542 20.4625 21.3125C20.3708 21.5708 20.2 21.7667 19.95 21.9ZM7.95 21.9C7.7 22.0333 7.44583 22.0542 7.1875 21.9625C6.92917 21.8708 6.73333 21.7 6.6 21.45L5.1 18.45C4.96667 18.2 4.94583 17.9458 5.0375 17.6875C5.12917 17.4292 5.3 17.2333 5.55 17.1C5.8 16.9667 6.05417 16.9458 6.3125 17.0375C6.57083 17.1292 6.76667 17.3 6.9 17.55L8.4 20.55C8.53333 20.8 8.55417 21.0542 8.4625 21.3125C8.37083 21.5708 8.2 21.7667 7.95 21.9ZM7.5 16C5.98333 16 4.6875 15.4625 3.6125 14.3875C2.5375 13.3125 2 12.0167 2 10.5C2 9.11667 2.45833 7.90833 3.375 6.875C4.29167 5.84167 5.425 5.23333 6.775 5.05C7.30833 4.1 8.0375 3.35417 8.9625 2.8125C9.8875 2.27083 10.9 2 12 2C13.5 2 14.8042 2.47917 15.9125 3.4375C17.0208 4.39583 17.6917 5.59167 17.925 7.025C19.075 7.125 20.0417 7.6 20.825 8.45C21.6083 9.3 22 10.3167 22 11.5C22 12.75 21.5625 13.8125 20.6875 14.6875C19.8125 15.5625 18.75 16 17.5 16H7.5ZM7.5 14H17.5C18.2 14 18.7917 13.7583 19.275 13.275C19.7583 12.7917 20 12.2 20 11.5C20 10.8 19.7583 10.2083 19.275 9.725C18.7917 9.24167 18.2 9 17.5 9H16V8C16 6.9 15.6083 5.95833 14.825 5.175C14.0417 4.39167 13.1 4 12 4C11.2 4 10.4708 4.21667 9.8125 4.65C9.15417 5.08333 8.65833 5.66667 8.325 6.4L8.075 7H7.45C6.5 7.03333 5.6875 7.3875 5.0125 8.0625C4.3375 8.7375 4 9.55 4 10.5C4 11.4667 4.34167 12.2917 5.025 12.975C5.70833 13.6583 6.53333 14 7.5 14Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,check_circle:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_373" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_373)">
    <path d="M10.6 13.8L8.45 11.65C8.26667 11.4667 8.03333 11.375 7.75 11.375C7.46667 11.375 7.23333 11.4667 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.1 16.1 10.3333 16.2 10.6 16.2C10.8667 16.2 11.1 16.1 11.3 15.9L16.95 10.25C17.1333 10.0667 17.225 9.83333 17.225 9.55C17.225 9.26667 17.1333 9.03333 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,emergency_home:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_416" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_416)">
    <path d="M12 22.0251C11.7333 22.0251 11.4791 21.9751 11.2375 21.8751C10.9958 21.7751 10.775 21.6334 10.575 21.4501L2.54998 13.4251C2.36664 13.2251 2.22498 13.0043 2.12498 12.7626C2.02498 12.5209 1.97498 12.2668 1.97498 12.0001C1.97498 11.7334 2.02498 11.4751 2.12498 11.2251C2.22498 10.9751 2.36664 10.7584 2.54998 10.5751L10.575 2.5501C10.775 2.3501 10.9958 2.20426 11.2375 2.1126C11.4791 2.02093 11.7333 1.9751 12 1.9751C12.2666 1.9751 12.525 2.02093 12.775 2.1126C13.025 2.20426 13.2416 2.3501 13.425 2.5501L21.45 10.5751C21.65 10.7584 21.7958 10.9751 21.8875 11.2251C21.9791 11.4751 22.025 11.7334 22.025 12.0001C22.025 12.2668 21.9791 12.5209 21.8875 12.7626C21.7958 13.0043 21.65 13.2251 21.45 13.4251L13.425 21.4501C13.2416 21.6334 13.025 21.7751 12.775 21.8751C12.525 21.9751 12.2666 22.0251 12 22.0251ZM12 20.0251L20.025 12.0001L12 3.9751L3.97498 12.0001L12 20.0251ZM12 13.0001C12.2833 13.0001 12.5208 12.9043 12.7125 12.7126C12.9041 12.5209 13 12.2834 13 12.0001V8.0001C13 7.71676 12.9041 7.47926 12.7125 7.2876C12.5208 7.09593 12.2833 7.0001 12 7.0001C11.7166 7.0001 11.4791 7.09593 11.2875 7.2876C11.0958 7.47926 11 7.71676 11 8.0001V12.0001C11 12.2834 11.0958 12.5209 11.2875 12.7126C11.4791 12.9043 11.7166 13.0001 12 13.0001ZM12 16.0001C12.2833 16.0001 12.5208 15.9043 12.7125 15.7126C12.9041 15.5209 13 15.2834 13 15.0001C13 14.7168 12.9041 14.4793 12.7125 14.2876C12.5208 14.0959 12.2833 14.0001 12 14.0001C11.7166 14.0001 11.4791 14.0959 11.2875 14.2876C11.0958 14.4793 11 14.7168 11 15.0001C11 15.2834 11.0958 15.5209 11.2875 15.7126C11.4791 15.9043 11.7166 16.0001 12 16.0001Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,error:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_472" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_472)">
    <path d="M12 17C12.2833 17 12.5208 16.9042 12.7125 16.7125C12.9042 16.5208 13 16.2833 13 16C13 15.7167 12.9042 15.4792 12.7125 15.2875C12.5208 15.0958 12.2833 15 12 15C11.7167 15 11.4792 15.0958 11.2875 15.2875C11.0958 15.4792 11 15.7167 11 16C11 16.2833 11.0958 16.5208 11.2875 16.7125C11.4792 16.9042 11.7167 17 12 17ZM12 13C12.2833 13 12.5208 12.9042 12.7125 12.7125C12.9042 12.5208 13 12.2833 13 12V8C13 7.71667 12.9042 7.47917 12.7125 7.2875C12.5208 7.09583 12.2833 7 12 7C11.7167 7 11.4792 7.09583 11.2875 7.2875C11.0958 7.47917 11 7.71667 11 8V12C11 12.2833 11.0958 12.5208 11.2875 12.7125C11.4792 12.9042 11.7167 13 12 13ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,info:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_603" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_603)">
    <path d="M12 17C12.2833 17 12.5208 16.9042 12.7125 16.7125C12.9042 16.5208 13 16.2833 13 16V12C13 11.7167 12.9042 11.4792 12.7125 11.2875C12.5208 11.0958 12.2833 11 12 11C11.7167 11 11.4792 11.0958 11.2875 11.2875C11.0958 11.4792 11 11.7167 11 12V16C11 16.2833 11.0958 16.5208 11.2875 16.7125C11.4792 16.9042 11.7167 17 12 17ZM12 9C12.2833 9 12.5208 8.90417 12.7125 8.7125C12.9042 8.52083 13 8.28333 13 8C13 7.71667 12.9042 7.47917 12.7125 7.2875C12.5208 7.09583 12.2833 7 12 7C11.7167 7 11.4792 7.09583 11.2875 7.2875C11.0958 7.47917 11 7.71667 11 8C11 8.28333 11.0958 8.52083 11.2875 8.7125C11.4792 8.90417 11.7167 9 12 9ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,warning:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_475" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_475)">
    <path d="M2.72503 21C2.5417 21 2.37503 20.9542 2.22503 20.8625C2.07503 20.7708 1.95837 20.65 1.87503 20.5C1.7917 20.35 1.74587 20.1875 1.73753 20.0125C1.7292 19.8375 1.77503 19.6667 1.87503 19.5L11.125 3.5C11.225 3.33333 11.3542 3.20833 11.5125 3.125C11.6709 3.04167 11.8334 3 12 3C12.1667 3 12.3292 3.04167 12.4875 3.125C12.6459 3.20833 12.775 3.33333 12.875 3.5L22.125 19.5C22.225 19.6667 22.2709 19.8375 22.2625 20.0125C22.2542 20.1875 22.2084 20.35 22.125 20.5C22.0417 20.65 21.925 20.7708 21.775 20.8625C21.625 20.9542 21.4584 21 21.275 21H2.72503ZM4.45003 19H19.55L12 6L4.45003 19ZM12 18C12.2834 18 12.5209 17.9042 12.7125 17.7125C12.9042 17.5208 13 17.2833 13 17C13 16.7167 12.9042 16.4792 12.7125 16.2875C12.5209 16.0958 12.2834 16 12 16C11.7167 16 11.4792 16.0958 11.2875 16.2875C11.0959 16.4792 11 16.7167 11 17C11 17.2833 11.0959 17.5208 11.2875 17.7125C11.4792 17.9042 11.7167 18 12 18ZM12 15C12.2834 15 12.5209 14.9042 12.7125 14.7125C12.9042 14.5208 13 14.2833 13 14V11C13 10.7167 12.9042 10.4792 12.7125 10.2875C12.5209 10.0958 12.2834 10 12 10C11.7167 10 11.4792 10.0958 11.2875 10.2875C11.0959 10.4792 11 10.7167 11 11V14C11 14.2833 11.0959 14.5208 11.2875 14.7125C11.4792 14.9042 11.7167 15 12 15Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,social_bluesky:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_8703_408" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_8703_408)">
    <path d="M17.6652 3.95118C15.3724 5.71095 12.906 9.27859 12.0004 11.1932C11.0952 9.27859 8.62837 5.71095 6.33557 3.95118C4.68117 2.68168 2.00037 1.69909 2.00037 4.82495C2.00037 5.4489 2.35037 10.0696 2.55597 10.8195C3.26957 13.4274 5.87117 14.0921 8.18517 13.6898C4.14037 14.3937 3.11157 16.724 5.33357 19.0548C9.55397 23.4815 11.3996 17.9442 11.872 16.5255C11.9596 16.2635 12 16.142 12 16.2496C12 16.142 12.0404 16.2635 12.128 16.5255C12.6004 17.9442 14.446 23.4815 18.6664 19.0548C20.8884 16.724 19.86 14.3937 15.8148 13.6898C18.1288 14.0925 20.7304 13.4274 21.444 10.8195C21.6496 10.0692 21.9996 5.4489 21.9996 4.82495C21.9996 1.69909 19.3188 2.68168 17.6644 3.95077L17.6652 3.95118Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,social_facebook:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_332" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_332)">
    <path d="M12.0367 2C6.49365 2 2 6.49365 2 12.0367C2 16.7436 5.24066 20.6932 9.61226 21.778V15.104H7.54269V12.0367H9.61226V10.7151C9.61226 7.29899 11.1583 5.7156 14.5122 5.7156C15.1481 5.7156 16.2453 5.84046 16.6942 5.96491V8.74509C16.4573 8.7202 16.0458 8.70775 15.5347 8.70775C13.8891 8.70775 13.2532 9.33123 13.2532 10.952V12.0367H16.5316L15.9683 15.104H13.2532V22C18.223 21.3998 22.0739 17.1683 22.0739 12.0367C22.0735 6.49365 17.5798 2 12.0367 2Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,social_flickr:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_698" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_698)">
    <path d="M20.4375 2H3.5625C2.69922 2 2 2.69922 2 3.5625V20.4375C2 21.3008 2.69922 22 3.5625 22H20.4375C21.3008 22 22 21.3008 22 20.4375V3.5625C22 2.69922 21.3008 2 20.4375 2ZM9.20313 14.2031C7.98828 14.2031 7 13.2148 7 12C7 10.7852 7.98438 9.79688 9.20313 9.79688C10.4219 9.79688 11.4063 10.7852 11.4063 12C11.4063 13.2148 10.4219 14.2031 9.20313 14.2031ZM14.7969 14.2031C13.5781 14.2031 12.5938 13.2148 12.5938 12C12.5938 10.7852 13.5781 9.79688 14.7969 9.79688C16.0117 9.79688 17 10.7852 17 12C17 13.2148 16.0156 14.2031 14.7969 14.2031Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,social_google_play:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_532" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_532)">
    <path d="M6.1202 2.50833L17.0372 8.79667L14.6972 11.1408L6.1202 2.50833ZM3.85845 2L13.8795 12L3.85928 22C3.34937 21.7742 3 21.2717 3 20.6875C3 20.6683 3 20.6492 3.00083 20.6308V20.6333V3.3675C3 3.35167 3 3.3325 3 3.31333C3 2.72917 3.34937 2.22667 3.85013 2.00417L3.85928 2.00083L3.85845 2ZM20.4302 10.8283C20.7746 11.0842 20.995 11.4908 20.995 11.9483C20.995 11.9667 20.995 11.9842 20.9942 12.0025V12C20.9975 12.0358 21 12.0783 21 12.1208C21 12.5508 20.792 12.9325 20.471 13.1692L20.4676 13.1717L18.1277 14.4992L15.5939 12L18.1285 9.46083L20.4302 10.8283ZM6.1202 21.4917L14.698 12.8592L17.038 15.2033L6.1202 21.4917Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,social_instagram:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_637" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_637)">
    <path d="M12.002 3.80113C14.6744 3.80113 14.9908 3.81285 16.0418 3.85974C17.0186 3.90272 17.546 4.06681 17.8976 4.20356C18.3626 4.38328 18.6986 4.60207 19.0463 4.9498C19.3979 5.30143 19.6128 5.63352 19.7925 6.09846C19.9293 6.45009 20.0934 6.98144 20.1364 7.95429C20.1832 9.00918 20.195 9.32565 20.195 11.9941C20.195 14.6665 20.1832 14.983 20.1364 16.034C20.0934 17.0107 19.9293 17.5382 19.7925 17.8898C19.6128 18.3548 19.394 18.6908 19.0463 19.0385C18.6947 19.3901 18.3626 19.605 17.8976 19.7847C17.546 19.9215 17.0147 20.0856 16.0418 20.1285C14.9869 20.1754 14.6704 20.1871 12.002 20.1871C9.32956 20.1871 9.01309 20.1754 7.9621 20.1285C6.98535 20.0856 6.4579 19.9215 6.10627 19.7847C5.64134 19.605 5.30533 19.3862 4.95761 19.0385C4.60598 18.6869 4.39109 18.3548 4.21137 17.8898C4.07462 17.5382 3.91053 17.0068 3.86755 16.034C3.82067 14.9791 3.80895 14.6626 3.80895 11.9941C3.80895 9.32174 3.82067 9.00527 3.86755 7.95429C3.91053 6.97753 4.07462 6.45009 4.21137 6.09846C4.39109 5.63352 4.60988 5.29752 4.95761 4.9498C5.30924 4.59816 5.64134 4.38328 6.10627 4.20356C6.4579 4.06681 6.98926 3.90272 7.9621 3.85974C9.01309 3.81285 9.32956 3.80113 12.002 3.80113ZM12.002 2C9.28658 2 8.94667 2.01172 7.88006 2.05861C6.81735 2.10549 6.08674 2.2774 5.4538 2.52354C4.79351 2.7814 4.23481 3.12131 3.68002 3.68002C3.12131 4.23481 2.7814 4.79351 2.52354 5.44989C2.2774 6.08674 2.10549 6.81344 2.05861 7.87615C2.01172 8.94667 2 9.28658 2 12.002C2 14.7173 2.01172 15.0572 2.05861 16.1239C2.10549 17.1866 2.2774 17.9172 2.52354 18.5501C2.7814 19.2104 3.12131 19.7691 3.68002 20.3239C4.23481 20.8787 4.79351 21.2225 5.44989 21.4765C6.08674 21.7226 6.81344 21.8945 7.87615 21.9414C8.94276 21.9883 9.28267 22 11.998 22C14.7134 22 15.0533 21.9883 16.1199 21.9414C17.1827 21.8945 17.9133 21.7226 18.5462 21.4765C19.2026 21.2225 19.7613 20.8787 20.3161 20.3239C20.8709 19.7691 21.2147 19.2104 21.4686 18.554C21.7148 17.9172 21.8867 17.1905 21.9336 16.1278C21.9805 15.0611 21.9922 14.7212 21.9922 12.0059C21.9922 9.29049 21.9805 8.95058 21.9336 7.88396C21.8867 6.82125 21.7148 6.09064 21.4686 5.45771C21.2225 4.79351 20.8826 4.23481 20.3239 3.68002C19.7691 3.12522 19.2104 2.7814 18.554 2.52745C17.9172 2.2813 17.1905 2.1094 16.1278 2.06251C15.0572 2.01172 14.7173 2 12.002 2Z" fill="var(--nys-icon-color, currentcolor)"/>
    <path d="M12.002 6.86423C9.16546 6.86423 6.86423 9.16546 6.86423 12.002C6.86423 14.8384 9.16546 17.1397 12.002 17.1397C14.8384 17.1397 17.1397 14.8384 17.1397 12.002C17.1397 9.16546 14.8384 6.86423 12.002 6.86423ZM12.002 15.3346C10.1618 15.3346 8.66927 13.8422 8.66927 12.002C8.66927 10.1618 10.1618 8.66927 12.002 8.66927C13.8422 8.66927 15.3346 10.1618 15.3346 12.002C15.3346 13.8422 13.8422 15.3346 12.002 15.3346Z" fill="var(--nys-icon-color, currentcolor)"/>
    <path d="M18.5423 6.66103C18.5423 7.32522 18.0031 7.86048 17.3428 7.86048C16.6786 7.86048 16.1434 7.32131 16.1434 6.66103C16.1434 5.99683 16.6826 5.46157 17.3428 5.46157C18.0031 5.46157 18.5423 6.00074 18.5423 6.66103Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,social_linkedin:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_708" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_708)">
    <path d="M20.5195 2H3.47656C2.66016 2 2 2.64453 2 3.44141V20.5547C2 21.3516 2.66016 22 3.47656 22H20.5195C21.3359 22 22 21.3516 22 20.5586V3.44141C22 2.64453 21.3359 2 20.5195 2ZM7.93359 19.043H4.96484V9.49609H7.93359V19.043ZM6.44922 8.19531C5.49609 8.19531 4.72656 7.42578 4.72656 6.47656C4.72656 5.52734 5.49609 4.75781 6.44922 4.75781C7.39844 4.75781 8.16797 5.52734 8.16797 6.47656C8.16797 7.42188 7.39844 8.19531 6.44922 8.19531ZM19.043 19.043H16.0781V14.4023C16.0781 13.2969 16.0586 11.8711 14.5352 11.8711C12.9922 11.8711 12.7578 13.0781 12.7578 14.3242V19.043H9.79688V9.49609H12.6406V10.8008H12.6797C13.0742 10.0508 14.043 9.25781 15.4844 9.25781C18.4883 9.25781 19.043 11.2344 19.043 13.8047V19.043Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,social_pinterest:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_656" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_656)">
    <path d="M12 2C6.47656 2 2 6.47656 2 12C2 16.2383 4.63672 19.8555 8.35547 21.3125C8.26953 20.5195 8.1875 19.3086 8.39063 18.4453C8.57422 17.6641 9.5625 13.4766 9.5625 13.4766C9.5625 13.4766 9.26172 12.8789 9.26172 11.9922C9.26172 10.6016 10.0664 9.5625 11.0703 9.5625C11.9219 9.5625 12.3359 10.2031 12.3359 10.9727C12.3359 11.832 11.7891 13.1133 11.5078 14.3008C11.2734 15.2969 12.0078 16.1094 12.9883 16.1094C14.7656 16.1094 16.1328 14.2344 16.1328 11.5312C16.1328 9.13672 14.4141 7.46094 11.957 7.46094C9.11328 7.46094 7.44141 9.59375 7.44141 11.8008C7.44141 12.6602 7.77344 13.582 8.1875 14.082C8.26953 14.1797 8.28125 14.2695 8.25781 14.3672C8.18359 14.6836 8.01172 15.3633 7.98047 15.5C7.9375 15.6836 7.83594 15.7227 7.64453 15.6328C6.39453 15.0508 5.61328 13.2266 5.61328 11.7578C5.61328 8.60156 7.90625 5.70703 12.2188 5.70703C15.6875 5.70703 18.3828 8.17969 18.3828 11.4844C18.3828 14.9297 16.2109 17.7031 13.1953 17.7031C12.1836 17.7031 11.2305 17.1758 10.9023 16.5547C10.9023 16.5547 10.4023 18.4648 10.2812 18.9336C10.0547 19.8008 9.44531 20.8906 9.03906 21.5547C9.97656 21.8438 10.9687 22 12 22C17.5234 22 22 17.5234 22 12C22 6.47656 17.5234 2 12 2Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,social_rss:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_723" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_723)">
    <path d="M2 8.79688V12.6172C4.49219 12.6172 6.85156 13.6016 8.61719 15.3672C10.3828 17.1328 11.3594 19.4922 11.3594 21.9922V22H15.1953C15.1953 18.3594 13.7109 15.0703 11.3203 12.6719C8.9375 10.2812 5.64062 8.80469 2 8.79688Z" fill="var(--nys-icon-color, currentcolor)"/>
    <path d="M4.65625 16.6797C3.92188 16.6797 3.26562 16.9766 2.78125 17.4609C2.29688 17.9453 2 18.6016 2 19.3359C2 20.0625 2.29688 20.7188 2.78125 21.2031C3.26562 21.6797 3.92188 21.9766 4.65625 21.9766C5.39062 21.9766 6.04688 21.6875 6.53125 21.2031C7.01562 20.7188 7.3125 20.0625 7.3125 19.3359C7.3125 18.6016 7.01562 17.9453 6.53125 17.4609C6.04688 16.9766 5.39062 16.6797 4.65625 16.6797Z" fill="var(--nys-icon-color, currentcolor)"/>
    <path d="M16.1328 7.86719C12.5156 4.24219 7.52344 2 2.00781 2V5.82031C10.9219 5.82812 18.1641 13.0859 18.1719 22H22C22 16.4844 19.7578 11.4922 16.1328 7.86719Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,social_snapchat:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_686" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_686)">
    <path d="M20.581 16.7331C17.4839 15.2334 16.9903 12.9179 16.9683 12.7462C16.9417 12.5381 16.9116 12.3746 17.141 12.163C17.3623 11.9585 18.3439 11.3508 18.6162 11.1606C19.0664 10.8457 19.2647 10.5314 19.1185 10.145C19.0163 9.87763 18.7675 9.77694 18.5053 9.77694C18.4227 9.77719 18.3402 9.78645 18.2596 9.80454C17.7649 9.91188 17.2846 10.1598 17.0066 10.2267C16.9732 10.2354 16.9389 10.24 16.9044 10.2405C16.7562 10.2405 16.7 10.1746 16.7143 9.99622C16.7491 9.45543 16.8226 8.39991 16.7373 7.41391C16.6203 6.05733 16.1829 5.38517 15.6642 4.79071C15.4133 4.50242 14.2483 3.26392 11.9999 3.26392C9.75152 3.26392 8.58799 4.50242 8.33862 4.78713C7.81843 5.38159 7.38153 6.05375 7.26554 7.41033C7.1802 8.39633 7.25685 9.45134 7.28853 9.99264C7.29875 10.1623 7.24663 10.237 7.09844 10.237C7.06395 10.2364 7.02965 10.2317 6.99624 10.2232C6.71877 10.1562 6.23844 9.9083 5.7438 9.80096C5.66311 9.78287 5.5807 9.77361 5.49801 9.77336C5.23485 9.77336 4.98702 9.87559 4.88482 10.1414C4.73867 10.5278 4.93592 10.8422 5.38764 11.157C5.66 11.3472 6.64161 11.9544 6.86287 12.1594C7.0918 12.371 7.06216 12.5346 7.03559 12.7426C7.01362 12.9169 6.51949 15.2324 3.42287 16.7295C3.24146 16.8175 2.93282 17.0035 3.47703 17.3041C4.33141 17.7764 4.90015 17.7258 5.34216 18.0105C5.71723 18.2522 5.49546 18.7736 5.76833 18.9617C6.10354 19.1933 7.09435 18.9454 8.37439 19.3681C9.44748 19.7218 10.0995 20.7211 12.0024 20.7211C13.9054 20.7211 14.5763 19.7172 15.6305 19.3681C16.908 18.9454 17.9008 19.1933 18.2366 18.9617C18.5089 18.7736 18.2877 18.2522 18.6627 18.0105C19.1047 17.7258 19.673 17.7764 20.5279 17.3041C21.071 17.0071 20.7624 16.821 20.581 16.7331Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,social_soundcloud:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_645" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_645)">
    <path d="M2.9661 12.6702C2.92334 12.6702 2.88837 12.7054 2.88284 12.7539L2.68627 14.6152L2.88284 16.4351C2.88837 16.4837 2.92334 16.5191 2.9661 16.5191C3.00823 16.5191 3.04239 16.4843 3.04914 16.4353L3.27292 14.615L3.04914 12.7537C3.04239 12.7043 3.00823 12.6702 2.9661 12.6702Z" fill="var(--nys-icon-color, currentcolor)"/>
    <path d="M2.22664 13.3833C2.18512 13.3833 2.15198 13.4163 2.14646 13.4644L2 14.6152L2.14646 15.7464C2.15178 15.7943 2.18491 15.8274 2.22664 15.8274C2.26714 15.8274 2.30008 15.7943 2.30662 15.7469L2.47988 14.6152L2.30662 13.4634C2.30008 13.4163 2.26714 13.3833 2.22664 13.3833Z" fill="var(--nys-icon-color, currentcolor)"/>
    <path d="M3.75178 12.3052C3.699 12.3052 3.65687 12.348 3.65155 12.4069L3.46479 14.6152L3.65155 16.7427C3.65687 16.8018 3.699 16.8444 3.75178 16.8444C3.80353 16.8444 3.84567 16.8018 3.8518 16.7429L4.06372 14.615L3.8518 12.4067C3.84567 12.348 3.80353 12.3052 3.75178 12.3052Z" fill="var(--nys-icon-color, currentcolor)"/>
    <path d="M4.544 12.2272C4.48182 12.2272 4.4313 12.2785 4.42639 12.3468L4.25006 14.6158L4.42639 16.8105C4.4313 16.8783 4.48182 16.9298 4.544 16.9298C4.60516 16.9298 4.65548 16.8783 4.66121 16.8105L4.86147 14.6158L4.66121 12.3463C4.65548 12.2785 4.60516 12.2272 4.544 12.2272Z" fill="var(--nys-icon-color, currentcolor)"/>
    <path d="M5.47655 12.5102C5.47164 12.4328 5.41355 12.3737 5.34237 12.3737C5.27016 12.3737 5.21248 12.4326 5.20798 12.5108L5.04147 14.6156L5.20798 16.8287C5.21248 16.9065 5.27037 16.9657 5.34237 16.9657C5.41376 16.9657 5.47164 16.9067 5.47655 16.8289L5.66535 14.6156L5.47655 12.5102Z" fill="var(--nys-icon-color, currentcolor)"/>
    <path d="M6.14748 11.037C6.06648 11.037 6.0002 11.1053 5.99611 11.1924L5.83984 14.6167L5.99611 16.8296C6.00041 16.9156 6.06668 16.9841 6.14748 16.9841C6.22767 16.9841 6.29394 16.9159 6.29885 16.8289V16.8298L6.47558 14.6169L6.29885 11.1924C6.29374 11.1053 6.22746 11.037 6.14748 11.037Z" fill="var(--nys-icon-color, currentcolor)"/>
    <path d="M6.94625 10.2483C6.85564 10.2483 6.78179 10.3242 6.7777 10.4211C6.7777 10.4215 6.63145 14.6285 6.63145 14.6285L6.77791 16.8277C6.782 16.9241 6.85564 17 6.94625 17C7.03626 17 7.11071 16.9241 7.1146 16.8273V16.8285L7.28008 14.6285L7.1146 10.4211C7.11071 10.3242 7.03626 10.2483 6.94625 10.2483Z" fill="var(--nys-icon-color, currentcolor)"/>
    <path d="M7.77673 9.86804C7.6763 9.86804 7.59468 9.95198 7.5912 10.0588L7.45518 14.6177L7.5912 16.7942C7.59489 16.9002 7.6763 16.9839 7.77673 16.9839C7.87655 16.9839 7.95817 16.9002 7.96226 16.7935V16.7948L8.11588 14.6179L7.96226 10.0588C7.95796 9.95198 7.87655 9.86804 7.77673 9.86804Z" fill="var(--nys-icon-color, currentcolor)"/>
    <path d="M8.80337 9.90556C8.7999 9.78855 8.71092 9.69677 8.60107 9.69677C8.49041 9.69677 8.40143 9.78877 8.39836 9.90556L8.27236 14.6177L8.39857 16.7806C8.40164 16.8964 8.49041 16.9879 8.60107 16.9879C8.71092 16.9879 8.8001 16.8964 8.80337 16.78L8.94533 14.6184L8.80337 9.90556Z" fill="var(--nys-icon-color, currentcolor)"/>
    <path d="M9.43176 9.8C9.31107 9.8 9.21473 9.89941 9.21186 10.0264L9.09609 14.6186L9.21227 16.7605C9.21493 16.8862 9.31107 16.986 9.43176 16.986C9.55162 16.986 9.64797 16.886 9.65124 16.7592V16.7609L9.78174 14.6182L9.65124 10.0257C9.64797 9.89899 9.55162 9.8 9.43176 9.8Z" fill="var(--nys-icon-color, currentcolor)"/>
    <path d="M10.269 9.94986C10.1389 9.94986 10.0346 10.0573 10.0321 10.1943L9.92636 14.6186L10.0321 16.7478C10.0346 16.8834 10.1389 16.9905 10.269 16.9905C10.3989 16.9905 10.503 16.8834 10.5054 16.7463V16.748L10.6241 14.6192L10.5054 10.1945C10.503 10.0573 10.3989 9.94986 10.269 9.94986Z" fill="var(--nys-icon-color, currentcolor)"/>
    <path d="M11.2529 9.13676C11.2128 9.10857 11.1643 9.09204 11.1126 9.09204C11.0622 9.09204 11.0154 9.10794 10.9759 9.13464C10.9066 9.18149 10.8601 9.26225 10.8589 9.35424L10.8581 9.40384L10.7628 14.6177C10.7628 14.6207 10.8589 16.734 10.8589 16.734C10.8589 16.7374 10.8593 16.7397 10.8595 16.7429C10.8624 16.8018 10.8839 16.8561 10.9184 16.8991C10.9653 16.957 11.035 16.9943 11.1126 16.9943C11.1815 16.9943 11.2443 16.9648 11.2901 16.9173C11.3361 16.8701 11.3652 16.8048 11.3664 16.7323L11.4734 14.619L11.3666 9.35403C11.365 9.26352 11.32 9.18382 11.2529 9.13676Z" fill="var(--nys-icon-color, currentcolor)"/>
    <path d="M12.0903 8.63759C12.0502 8.61215 12.0028 8.59732 11.9526 8.59732C11.888 8.59732 11.8285 8.62148 11.7816 8.66133C11.7215 8.71284 11.6826 8.79041 11.6814 8.87732L11.6808 8.90615L11.5703 14.6199L11.6814 16.7039C11.6837 16.8559 11.805 16.9818 11.9526 16.9818C12.0997 16.9818 12.221 16.8559 12.2231 16.702V16.7045L12.3437 14.6201L12.2235 8.8769C12.222 8.77537 12.1684 8.68655 12.0903 8.63759Z" fill="var(--nys-icon-color, currentcolor)"/>
    <path d="M19.5399 11.9014C19.2032 11.9014 18.8812 11.9722 18.5887 12.0992C18.3925 9.80212 16.5336 8 14.2659 8C13.7108 8 13.1701 8.11319 12.6923 8.30459C12.5068 8.3792 12.4577 8.45551 12.4558 8.60431V16.6946C12.4577 16.8504 12.5743 16.9718 12.7213 16.9869C12.7277 16.9877 19.5403 16.9869 19.5403 16.9869C20.8989 16.9869 22 15.8584 22 14.4503C21.9998 13.0426 20.8987 11.9014 19.5399 11.9014Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,social_tiktok:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_642" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_642)">
    <path d="M17.883 6.27729C17.7506 6.20752 17.6217 6.13104 17.4968 6.04813C17.1337 5.80333 16.8007 5.51489 16.5051 5.18901C15.7655 4.32613 15.4893 3.45076 15.3876 2.83787H15.3917C15.3067 2.32915 15.3418 2 15.3471 2H11.9785V15.2818C11.9785 15.4602 11.9785 15.6364 11.9712 15.8106C11.9712 15.8322 11.9691 15.8522 11.9679 15.8756C11.9679 15.8851 11.9679 15.8951 11.9658 15.9051C11.9658 15.9076 11.9658 15.9101 11.9658 15.9126C11.9303 16.3892 11.7805 16.8495 11.5296 17.2532C11.2786 17.6568 10.9342 17.9914 10.5267 18.2275C10.102 18.4739 9.62159 18.6032 9.13293 18.6025C7.56344 18.6025 6.29143 17.2976 6.29143 15.686C6.29143 14.0744 7.56344 12.7695 9.13293 12.7695C9.43002 12.7692 9.72529 12.8169 10.0078 12.9107L10.0119 9.41338C9.15432 9.30043 8.28314 9.36992 7.45327 9.61747C6.62339 9.86502 5.85284 10.2852 5.19021 10.8516C4.6096 11.366 4.12148 11.9798 3.74781 12.6653C3.60561 12.9153 3.0691 13.9198 3.00413 15.5502C2.96327 16.4755 3.23582 17.4342 3.36575 17.8305V17.8388C3.44748 18.0721 3.76415 18.8683 4.28023 19.5395C4.69638 20.078 5.18804 20.5509 5.73939 20.9432V20.9349L5.74756 20.9432C7.37834 22.0732 9.18645 21.999 9.18645 21.999C9.49945 21.9861 10.548 21.999 11.7387 21.4236C13.0593 20.7857 13.8111 19.8354 13.8111 19.8354C14.2915 19.2675 14.6734 18.6204 14.9405 17.9217C15.2454 17.1047 15.3471 16.1247 15.3471 15.7331V8.68675C15.388 8.71175 15.9323 9.07881 15.9323 9.07881C15.9323 9.07881 16.7164 9.59129 17.9398 9.92502C18.8175 10.1625 20 10.2125 20 10.2125V6.80268C19.5857 6.84851 18.7443 6.71518 17.883 6.27729Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,social_threads:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_8703_592" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_8703_592)">
    <path d="M12.6885 11.9189C13.0794 11.9258 13.4486 11.9685 13.791 12.0469C13.7832 12.134 13.7735 12.2225 13.7617 12.3115C13.697 12.7932 13.5053 13.4354 12.9629 13.7637C12.5851 13.992 12.0197 14.0489 11.5566 13.9033C11.3229 13.8298 11.0137 13.673 10.8672 13.3447C10.6962 12.962 10.8025 12.5488 11.1377 12.292C11.466 12.0406 11.9426 11.918 12.5928 11.918C12.6241 11.918 12.6561 11.918 12.6885 11.9189Z" fill="var(--nys-icon-color, currentcolor)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.73926C17.5141 1.73926 22 6.22519 22 11.7393C21.9998 17.2532 17.514 21.7393 12 21.7393C6.48604 21.7393 2.00017 17.2532 2 11.7393C2 6.22519 6.48594 1.73926 12 1.73926ZM11.8076 5.15039C10.4347 5.2205 9.30138 5.60456 8.43945 6.29199C7.32998 7.17703 6.78999 8.51263 6.53223 9.47754C6.0476 11.2917 6.18684 13.3229 6.91602 15.0508C7.57804 16.6203 8.82441 17.7118 10.4248 18.125C10.9349 18.2568 11.5227 18.3389 12.1387 18.3389C13.3215 18.3389 14.6081 18.0365 15.6455 17.2051C16.5957 16.4435 17.1204 15.4692 17.1621 14.3867C17.2042 13.2995 16.8238 12.3987 16.0625 11.7812C15.7563 11.5334 15.4109 11.3248 15.0342 11.1592C15.0013 10.6574 14.8983 10.1062 14.6572 9.625C14.2368 8.78705 13.3903 8.24879 12.3916 8.18457C11.3066 8.11449 10.2369 8.61512 9.66797 9.45898L10.6943 10.1504C11.0222 9.66385 11.6583 9.37631 12.3125 9.41895C12.8754 9.4553 13.3274 9.73236 13.5518 10.1797C13.635 10.3457 13.6986 10.5482 13.7422 10.7764C13.412 10.7196 13.0671 10.688 12.709 10.6816C11.7223 10.666 10.9595 10.8697 10.3848 11.3096C9.59047 11.9177 9.33024 12.9382 9.73633 13.8486C9.99698 14.4336 10.5115 14.8727 11.1855 15.084C11.9916 15.3368 12.9179 15.2368 13.6025 14.8232C14.341 14.3769 14.8295 13.5622 14.9805 12.5264C15.0866 12.5929 15.1873 12.6649 15.2822 12.7422C15.7355 13.1092 15.9522 13.6469 15.9258 14.3389C15.8978 15.0621 15.5433 15.7012 14.8721 16.2393C13.8655 17.0459 12.2408 17.3154 10.7334 16.9268C9.51525 16.6126 8.5643 15.7748 8.05566 14.5693C7.43137 13.0899 7.31198 11.3508 7.72754 9.79688C8.02402 8.68694 8.55085 7.78607 9.21094 7.25977C9.86663 6.73688 10.7616 6.4421 11.8711 6.38574C14.2878 6.26097 16.0368 7.49129 16.5469 9.6709L17.752 9.3877C17.1039 6.6202 14.8261 4.99652 11.8076 5.15039Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,social_tumblr:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_356" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_356)">
    <path d="M14.1667 22C11.1667 22 8.91675 20.4583 8.91675 16.75V10.8333H6.16675V7.625C9.16675 6.83333 10.4167 4.25 10.5834 2H13.7084V7.08333H17.3334V10.8333H13.7084V16C13.7084 17.5417 14.5001 18.0833 15.7501 18.0833H17.5001V22H14.1667Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,social_vimeo:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_631" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_631)">
    <path d="M21.8881 4.69862C21.5362 3.22947 19.8797 2.81423 18.2069 3.07121C17.3489 3.20497 14.4525 4.49916 13.4656 7.60025C15.2117 7.46356 16.1279 7.72713 15.9598 9.67303C15.8886 10.4885 15.4838 11.3805 15.0286 12.2362C14.5054 13.2241 13.5212 15.1601 12.2329 13.7655C11.0727 12.5073 11.1617 10.1053 10.8975 8.5037C10.7477 7.60315 10.5914 6.48589 10.3004 5.56221C10.0519 4.76626 9.47709 3.80956 8.77407 3.59995C8.01998 3.37796 7.08804 3.72783 6.54143 4.05518C4.83909 5.06578 3.56386 6.45811 2.10226 7.65849C1.91782 7.84616 2.02704 8.00379 2.08913 8.14342C2.29904 8.47202 2.38014 8.67144 2.78041 8.73002C3.81954 8.88433 4.8077 7.74937 5.4963 8.93241C5.9175 9.65239 6.0489 10.4421 6.31772 11.2177C6.67544 12.2568 6.95332 13.3843 7.2476 14.5768C7.74663 16.592 8.35542 19.6046 10.0787 20.3458C10.9563 20.7212 12.276 20.218 12.9437 19.8167C14.7553 18.7305 16.2286 17.2052 17.375 15.5542C20.3584 11.2609 21.7887 6.94699 21.9442 6.12531C22.0548 5.52978 21.9823 5.0383 21.8881 4.69862Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,social_x:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_289" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_289)">
    <path d="M18.4256 2H21.8185L14.4062 10.4718L23.1262 22H16.2985L10.9508 15.0082L4.83179 22H1.43692L9.36513 12.9385L1 2H8.00103L12.8349 8.39077L18.4256 2ZM17.2349 19.9692H19.1149L6.97949 3.9241H4.96205L17.2349 19.9692Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,social_youtube:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_535" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_535)">
    <path d="M21.8008 8.03516C21.8008 8.03516 21.6055 6.65625 21.0039 6.05078C20.2422 5.25391 19.3906 5.25 19 5.20312C16.2031 5 12.0039 5 12.0039 5H11.9961C11.9961 5 7.79688 5 5 5.20312C4.60938 5.25 3.75781 5.25391 2.99609 6.05078C2.39453 6.65625 2.20312 8.03516 2.20312 8.03516C2.20312 8.03516 2 9.65625 2 11.2734V12.7891C2 14.4062 2.19922 16.0273 2.19922 16.0273C2.19922 16.0273 2.39453 17.4062 2.99219 18.0117C3.75391 18.8086 4.75391 18.7812 5.19922 18.8672C6.80078 19.0195 12 19.0664 12 19.0664C12 19.0664 16.2031 19.0586 19 18.8594C19.3906 18.8125 20.2422 18.8086 21.0039 18.0117C21.6055 17.4062 21.8008 16.0273 21.8008 16.0273C21.8008 16.0273 22 14.4102 22 12.7891V11.2734C22 9.65625 21.8008 8.03516 21.8008 8.03516ZM9.93359 14.6289V9.00781L15.3359 11.8281L9.93359 14.6289Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,account_balance_filled:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_695" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_695)">
    <path d="M4.22502 15.875V11.65C4.22502 11.2666 4.36252 10.9416 4.63752 10.675C4.91252 10.4083 5.24169 10.275 5.62502 10.275C6.00836 10.275 6.33336 10.4083 6.60002 10.675C6.86669 10.9416 7.00002 11.2666 7.00002 11.65V15.9C7.00002 16.2833 6.86669 16.6083 6.60002 16.875C6.33336 17.1416 6.00836 17.275 5.62502 17.275C5.24169 17.275 4.91252 17.1375 4.63752 16.8625C4.36252 16.5875 4.22502 16.2583 4.22502 15.875ZM10.625 15.9V11.65C10.625 11.2666 10.7584 10.9416 11.025 10.675C11.2917 10.4083 11.6167 10.275 12 10.275C12.3834 10.275 12.7084 10.4083 12.975 10.675C13.2417 10.9416 13.375 11.2666 13.375 11.65V15.9C13.375 16.2833 13.2417 16.6083 12.975 16.875C12.7084 17.1416 12.3834 17.275 12 17.275C11.6167 17.275 11.2917 17.1416 11.025 16.875C10.7584 16.6083 10.625 16.2833 10.625 15.9ZM2.72502 21.65C2.29169 21.65 1.92086 21.4958 1.61252 21.1875C1.30419 20.8791 1.15002 20.5083 1.15002 20.075C1.15002 19.6416 1.30419 19.2708 1.61252 18.9625C1.92086 18.6541 2.29169 18.5 2.72502 18.5H21.275C21.7084 18.5 22.0792 18.6541 22.3875 18.9625C22.6959 19.2708 22.85 19.6416 22.85 20.075C22.85 20.5083 22.6959 20.8791 22.3875 21.1875C22.0792 21.4958 21.7084 21.65 21.275 21.65H2.72502ZM17 15.875V11.65C17 11.2666 17.1375 10.9416 17.4125 10.675C17.6875 10.4083 18.0167 10.275 18.4 10.275C18.7834 10.275 19.1084 10.4083 19.375 10.675C19.6417 10.9416 19.775 11.2666 19.775 11.65V15.9C19.775 16.2833 19.6417 16.6083 19.375 16.875C19.1084 17.1416 18.7834 17.275 18.4 17.275C18.0167 17.275 17.6875 17.1375 17.4125 16.8625C17.1375 16.5875 17 16.2583 17 15.875ZM21.175 9.02495H2.65002C2.23336 9.02495 1.87919 8.87912 1.58752 8.58745C1.29586 8.29578 1.15002 7.94162 1.15002 7.52495V6.57495C1.15002 6.29162 1.22502 6.02912 1.37502 5.78745C1.52502 5.54578 1.72502 5.35828 1.97502 5.22495L10.6 0.924951C11.0334 0.691618 11.5 0.574951 12 0.574951C12.5 0.574951 12.9667 0.691618 13.4 0.924951L21.925 5.17495C22.2084 5.30828 22.4334 5.51245 22.6 5.78745C22.7667 6.06245 22.85 6.36662 22.85 6.69995V7.32495C22.85 7.79162 22.6875 8.19162 22.3625 8.52495C22.0375 8.85828 21.6417 9.02495 21.175 9.02495Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,cancel_filled:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_549" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_549)">
    <path d="M11.9242 13.3033L14.8242 16.2033C15.0075 16.3867 15.2409 16.4783 15.5242 16.4783C15.8075 16.4783 16.0409 16.3867 16.2242 16.2033C16.4075 16.02 16.4992 15.7867 16.4992 15.5033C16.4992 15.22 16.4075 14.9867 16.2242 14.8033L13.3242 11.9033L16.2242 9.00332C16.4075 8.81999 16.4992 8.58665 16.4992 8.30332C16.4992 8.01999 16.4075 7.78665 16.2242 7.60332C16.0409 7.41999 15.8075 7.32832 15.5242 7.32832C15.2409 7.32832 15.0075 7.41999 14.8242 7.60332L11.9242 10.5033L9.02419 7.60332C8.84086 7.41999 8.60753 7.32832 8.32419 7.32832C8.04086 7.32832 7.80753 7.41999 7.62419 7.60332C7.44086 7.78665 7.34919 8.01999 7.34919 8.30332C7.34919 8.58665 7.44086 8.81999 7.62419 9.00332L10.5242 11.9033L7.62419 14.8033C7.44086 14.9867 7.34919 15.22 7.34919 15.5033C7.34919 15.7867 7.44086 16.02 7.62419 16.2033C7.80753 16.3867 8.04086 16.4783 8.32419 16.4783C8.60753 16.4783 8.84086 16.3867 9.02419 16.2033L11.9242 13.3033ZM11.9242 21.9033C10.5409 21.9033 9.24086 21.6408 8.02419 21.1158C6.80753 20.5908 5.74919 19.8783 4.84919 18.9783C3.94919 18.0783 3.23669 17.02 2.71169 15.8033C2.18669 14.5867 1.92419 13.2867 1.92419 11.9033C1.92419 10.52 2.18669 9.21999 2.71169 8.00332C3.23669 6.78665 3.94919 5.72832 4.84919 4.82832C5.74919 3.92832 6.80753 3.21582 8.02419 2.69082C9.24086 2.16582 10.5409 1.90332 11.9242 1.90332C13.3075 1.90332 14.6075 2.16582 15.8242 2.69082C17.0409 3.21582 18.0992 3.92832 18.9992 4.82832C19.8992 5.72832 20.6117 6.78665 21.1367 8.00332C21.6617 9.21999 21.9242 10.52 21.9242 11.9033C21.9242 13.2867 21.6617 14.5867 21.1367 15.8033C20.6117 17.02 19.8992 18.0783 18.9992 18.9783C18.0992 19.8783 17.0409 20.5908 15.8242 21.1158C14.6075 21.6408 13.3075 21.9033 11.9242 21.9033Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,language_filled:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_563" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_563)">
    <path d="M12 22.8499C10.5167 22.8499 9.11669 22.5624 7.80002 21.9874C6.48336 21.4124 5.33336 20.6332 4.35002 19.6499C3.36669 18.6666 2.58752 17.5166 2.01252 16.1999C1.43752 14.8832 1.15002 13.4832 1.15002 11.9999C1.15002 10.5166 1.43752 9.11657 2.01252 7.7999C2.58752 6.48324 3.36669 5.33324 4.35002 4.3499C5.33336 3.36657 6.48336 2.5874 7.80002 2.0124C9.11669 1.4374 10.5167 1.1499 12 1.1499C13.4834 1.1499 14.8834 1.4374 16.2 2.0124C17.5167 2.5874 18.6667 3.36657 19.65 4.3499C20.6334 5.33324 21.4125 6.48324 21.9875 7.7999C22.5625 9.11657 22.85 10.5166 22.85 11.9999C22.85 13.4832 22.5625 14.8832 21.9875 16.1999C21.4125 17.5166 20.6334 18.6666 19.65 19.6499C18.6667 20.6332 17.5167 21.4124 16.2 21.9874C14.8834 22.5624 13.4834 22.8499 12 22.8499ZM11.95 19.6749C12.3167 19.1082 12.6584 18.5041 12.975 17.8624C13.2917 17.2207 13.55 16.5499 13.75 15.8499H10.225C10.425 16.5499 10.6709 17.2207 10.9625 17.8624C11.2542 18.5041 11.5834 19.1082 11.95 19.6749ZM9.47502 19.2749C9.14169 18.7582 8.87919 18.2041 8.68752 17.6124C8.49586 17.0207 8.32502 16.4332 8.17502 15.8499H5.37502C5.80836 16.6499 6.37502 17.3499 7.07502 17.9499C7.77502 18.5499 8.57502 18.9916 9.47502 19.2749ZM14.45 19.2749C15.35 18.9916 16.1584 18.5499 16.875 17.9499C17.5917 17.3499 18.1667 16.6499 18.6 15.8499H15.8C15.65 16.4332 15.4709 17.0207 15.2625 17.6124C15.0542 18.2041 14.7834 18.7582 14.45 19.2749ZM4.55002 13.9249H7.77502C7.72502 13.5916 7.68752 13.2707 7.66252 12.9624C7.63752 12.6541 7.62502 12.3332 7.62502 11.9999C7.62502 11.6499 7.63752 11.3249 7.66252 11.0249C7.68752 10.7249 7.72502 10.4082 7.77502 10.0749H4.55002C4.46669 10.3916 4.40419 10.7041 4.36252 11.0124C4.32086 11.3207 4.30002 11.6499 4.30002 11.9999C4.30002 12.3332 4.32086 12.6582 4.36252 12.9749C4.40419 13.2916 4.46669 13.6082 4.55002 13.9249ZM9.77502 13.9249H14.2C14.25 13.5916 14.2792 13.2707 14.2875 12.9624C14.2959 12.6541 14.3 12.3332 14.3 11.9999C14.3 11.6499 14.2959 11.3249 14.2875 11.0249C14.2792 10.7249 14.25 10.4082 14.2 10.0749H9.77502C9.72502 10.4082 9.68752 10.7249 9.66252 11.0249C9.63752 11.3249 9.62502 11.6499 9.62502 11.9999C9.62502 12.3332 9.63752 12.6541 9.66252 12.9624C9.68752 13.2707 9.72502 13.5916 9.77502 13.9249ZM16.2 13.9249H19.4C19.4834 13.6082 19.5459 13.2916 19.5875 12.9749C19.6292 12.6582 19.65 12.3332 19.65 11.9999C19.65 11.6499 19.6292 11.3207 19.5875 11.0124C19.5459 10.7041 19.4834 10.3916 19.4 10.0749H16.2C16.2334 10.4082 16.2584 10.7249 16.275 11.0249C16.2917 11.3249 16.3 11.6499 16.3 11.9999C16.3 12.3332 16.2917 12.6541 16.275 12.9624C16.2584 13.2707 16.2334 13.5916 16.2 13.9249ZM15.8 8.1249H18.6C18.1667 7.3249 17.5917 6.62907 16.875 6.0374C16.1584 5.44574 15.35 5.00824 14.45 4.7249C14.7834 5.24157 15.0542 5.79157 15.2625 6.3749C15.4709 6.95824 15.65 7.54157 15.8 8.1249ZM10.225 8.1249H13.75C13.5667 7.4249 13.3167 6.75824 13 6.1249C12.6834 5.49157 12.3334 4.89157 11.95 4.3249C11.5834 4.89157 11.2542 5.49157 10.9625 6.1249C10.6709 6.75824 10.425 7.4249 10.225 8.1249ZM5.37502 8.1249H8.17502C8.32502 7.54157 8.49586 6.95824 8.68752 6.3749C8.87919 5.79157 9.14169 5.24157 9.47502 4.7249C8.57502 5.00824 7.77502 5.44574 7.07502 6.0374C6.37502 6.62907 5.80836 7.3249 5.37502 8.1249Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`,lock_filled:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_12372_621" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_12372_621)">
    <path d="M6.30002 22.7751C5.43369 22.7751 4.69211 22.4667 4.07527 21.8498C3.45844 21.2328 3.15002 20.4913 3.15002 19.6251V10.2251C3.15002 9.35893 3.45844 8.61735 4.07527 8.00035C4.69211 7.38351 5.43369 7.0751 6.30002 7.0751H6.62502V5.8001C6.62502 4.28343 7.14586 2.99593 8.18752 1.9376C9.22919 0.879264 10.5 0.350098 12 0.350098C13.5 0.350098 14.7709 0.879264 15.8125 1.9376C16.8542 2.99593 17.375 4.28343 17.375 5.8001V7.0751H17.7C18.5662 7.0751 19.3078 7.38351 19.9248 8.00035C20.5416 8.61735 20.85 9.35893 20.85 10.2251V19.6251C20.85 20.4913 20.5416 21.2328 19.9248 21.8498C19.3078 22.4667 18.5662 22.7751 17.7 22.7751H6.30002ZM12 16.9251C12.55 16.9251 13.0209 16.7293 13.4125 16.3376C13.8042 15.9459 14 15.4751 14 14.9251C14 14.3751 13.8042 13.9043 13.4125 13.5126C13.0209 13.1209 12.55 12.9251 12 12.9251C11.45 12.9251 10.9792 13.1209 10.5875 13.5126C10.1959 13.9043 10 14.3751 10 14.9251C10 15.4751 10.1959 15.9459 10.5875 16.3376C10.9792 16.7293 11.45 16.9251 12 16.9251ZM9.77502 7.0751H14.225V5.8001C14.225 5.16126 14.0125 4.61818 13.5875 4.17085C13.1625 3.72368 12.6334 3.5001 12 3.5001C11.3667 3.5001 10.8375 3.72368 10.4125 4.17085C9.98752 4.61818 9.77502 5.16126 9.77502 5.8001V7.0751Z" fill="var(--nys-icon-color, currentcolor)"/>
  </g>
</svg>`},E6=xe`
  :host {
    display: inline-block;
    --_nys-icon-size: 0.7em; /* If cap isn't supported, a fallback value of 0.7em is used, as it closely approximates the height of capital letters in most fonts. */
    box-sizing: content-box !important;
  }

  /* Use 'cap' if supported */
  @supports (font-size: 1cap) {
    :host {
      --_nys-icon-size: 1cap;
    }
  }

  /* SVG size and color is initially determined by the parent's font-size and text-color */
  .nys-icon--svg {
    width: var(--_nys-icon-size, 1em);
    height: var(--_nys-icon-size, 1em);
    display: block;
    white-space: nowrap;
  }

  /* Relative Sizes */
  .nys-icon--2xs {
    width: calc(var(--_nys-icon-size) * 0.75);
    height: calc(var(--_nys-icon-size) * 0.75);
  }
  .nys-icon--xs {
    width: calc(var(--_nys-icon-size) * 0.875);
    height: calc(var(--_nys-icon-size) * 0.875);
  }
  .nys-icon--sm {
    width: var(--_nys-icon-size);
    height: var(--_nys-icon-size);
  }
  .nys-icon--md {
    width: calc(var(--_nys-icon-size) * 1.125);
    height: calc(var(--_nys-icon-size) * 1.125);
  }
  .nys-icon--lg {
    width: calc(var(--_nys-icon-size) * 1.25);
    height: calc(var(--_nys-icon-size) * 1.25);
  }
  .nys-icon--xl {
    width: calc(var(--_nys-icon-size) * 1.5);
    height: calc(var(--_nys-icon-size) * 1.5);
  }
  .nys-icon--2xl {
    width: calc(var(--_nys-icon-size) * 1.875);
    height: calc(var(--_nys-icon-size) * 1.875);
  }
  .nys-icon--3xl {
    width: calc(var(--_nys-icon-size) * 2.25);
    height: calc(var(--_nys-icon-size) * 2.25);
  }
  .nys-icon--4xl {
    width: calc(var(--_nys-icon-size) * 3);
    height: calc(var(--_nys-icon-size) * 3);
  }

  /* Literal Sizing */
  .nys-icon--12 {
    width: 0.75rem;
    height: 0.75rem;
  }
  .nys-icon--16 {
    width: 1rem;
    height: 1rem;
  }
  .nys-icon--24 {
    width: 1.5rem;
    height: 1.5rem;
  }
  .nys-icon--32 {
    width: 2rem;
    height: 2rem;
  }
  .nys-icon--40 {
    width: 2.5rem;
    height: 2.5rem;
  }
  .nys-icon--48 {
    width: 3rem;
    height: 3rem;
  }
  .nys-icon--64 {
    width: 4rem;
    height: 4rem;
  }

  /* Flipping Icons */
  .nys-icon--flip-horizontal {
    transform: scaleX(-1);
  }
  .nys-icon--flip-vertical {
    transform: scaleY(-1);
  }
  .nys-icon--flip-both {
    transform: scale(-1, -1);
  }
`;var z6=Object.defineProperty,A6=Object.getOwnPropertyDescriptor,Ha=(r,i,o,c)=>{for(var u=c>1?void 0:c?A6(i,o):i,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=(c?v(i,o,u):v(u))||u);return c&&u&&z6(i,o,u),u},Ul;const Vn=(Ul=class extends ce{constructor(){super(...arguments),this.name="",this.ariaLabel="",this.rotate="0",this.flip="",this.color="",this._size="sm"}get size(){return this._size}set size(r){this._size=Ul.VALID_TYPES.includes(r)?r:"sm"}getIcon(){const r=S6[this.name];if(!r)return null;const i=new DOMParser().parseFromString(r,"image/svg+xml").documentElement;return i instanceof SVGElement?(i.setAttribute("role","img"),this.ariaLabel?(i.setAttribute("aria-label",this.ariaLabel),i.removeAttribute("aria-hidden")):(i.setAttribute("aria-hidden","true"),i.removeAttribute("aria-label")),i.style.rotate=`${this.rotate}deg`,i.style.color=this.color||"currentcolor",i.classList.add(`nys-icon--${this.size}`),i.classList.add("nys-icon--svg"),this.flip&&i.classList.add(`nys-icon--flip-${this.flip}`),i):null}render(){const r=this.getIcon();return r?L`${r}`:null}},Ul.styles=E6,Ul.VALID_TYPES=["2xs","xs","sm","md","lg","xl","2xl","3xl","4xl","12","16","24","32","40","48","64"],Ul);Ha([p({type:String,reflect:!0})],Vn.prototype,"name",2);Ha([p({type:String})],Vn.prototype,"ariaLabel",2);Ha([p({type:String})],Vn.prototype,"rotate",2);Ha([p({type:String})],Vn.prototype,"flip",2);Ha([p({type:String})],Vn.prototype,"color",2);Ha([p({reflect:!0})],Vn.prototype,"size",1);let w3=Vn;customElements.get("nys-icon")||customElements.define("nys-icon",w3);const D6=xe`
  :host {
    /* Label Typography */
    --_nys-label-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-label-font-weight: var(--nys-font-weight-semibold, 600);
    --_nys-label-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-label-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-label-letter-spacing: var(--nys-font-letterspacing-ui-md, 0.044px);
    --_nys-label-font-color: var(--nys-color-text, #1b1b1b);

    /* Description */
    --nys-description-font-weight: var(--nys-font-weight-regular, 400);
    --nys-description-font-style: italic;
    --nys-description-font-color: var(--nys-color-text, #1b1b1b);

    /* Required Flag */
    --nys-required-font-color: var(--nys-color-danger, #b52c2c);

    /* Optional Flag */
    --nys-optional-font-weight: var(--nys-font-weight-regular, 400);
    --nys-optional-font-color: var(--nys-color-text-weak, #4a4d4f);

    /* Spacing */
    --_nys-label-flag-gap: var(--nys-space-2px, 2px);
  }

  .nys-label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: var(--_nys-label-font-family);
    font-size: var(--_nys-label-font-size);
    line-height: var(--_nys-label-line-height);
    letter-spacing: var(--_nys-label-letter-spacing);
  }

  .nys-label__labelwrapper {
    display: flex;
    gap: var(--_nys-label-flag-gap);
  }

  .nys-label__label {
    text-align: left;
    font-weight: var(--_nys-label-font-weight);
    color: var(--_nys-label-font-color);
  }

  .nys-label__description {
    text-align: left;
    font-weight: var(--nys-description-font-weight);
    font-style: var(--nys-description-font-style);
    color: var(--nys-description-font-color);
  }

  .nys-label__required {
    font-weight: var(--_nys-label-font-weight);
    color: var(--nys-required-font-color);
  }

  .nys-label__optional {
    font-weight: var(--nys-optional-font-weight);
    color: var(--nys-optional-font-color);
  }
`;var M6=Object.defineProperty,pi=(r,i,o,c)=>{for(var u=void 0,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=v(i,o,u)||u);return u&&M6(i,o,u),u};const k3=class extends ce{constructor(){super(...arguments),this.for="",this.label="",this.description="",this.flag=""}render(){return L`
      <div class="nys-label">
        <label for=${this.id} class="nys-label__label"
          >${this.label}
          ${this.flag==="required"?L`<label class="nys-label__required">*</label>`:""}
          ${this.flag==="optional"?L`<label class="nys-label__optional">(Optional)</label>`:""}</label
        >
        <label for=${this.id} class="nys-label__description">
          <slot name="description">${this.description}</slot>
        </label>
      </div>
    `}};k3.styles=D6;let Gl=k3;pi([p({type:String})],Gl.prototype,"for");pi([p({type:String})],Gl.prototype,"label");pi([p({type:String})],Gl.prototype,"description");pi([p({type:String})],Gl.prototype,"flag");customElements.get("nys-label")||customElements.define("nys-label",Gl);const S3=xe`
  :host {
    /* Global Radiobutton Styles */
    --_nys-radiobutton-size: var(--nys-size-400, 32px);
    --_nys-radiobutton-radius: var(--nys-radius-md, 4px);
    --_nys-radiobutton-width-border: var(--nys-border-width-md, 2px);
    --_nys-radiobutton-color-focus: var(--nys-color-focus, #004dd1);
    --_nys-radiobutton-width-focus: var(--nys-border-width-md, 2px);
    --_nys-radiobutton-outline-offset: var(--nys-space-2px, 2px);
    /* space between radio and it's label */
    --_nys-radiobutton-gap: var(--nys-space-150, 12px);
    /* space between radio buttons */
    --_nys-radiogroup-gap: var(--nys-space-200, 16px);

    /* Typography */
    --_nys-radiobutton-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-radiobutton-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-radiobutton-font-weight-label: var(--nys-font-weight-regular, 400);
    --_nys-radiobutton-font-weight-description: var(
      --nys-font-weight-regular,
      400
    );
    --_nys-radiobutton-line-height: var(--nys-font-lineheight-ui-md, 24px);

    /* Global Radio Button Colors */
    --_nys-radiobutton-color: var(
      --nys-color-ink,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-radiobutton-color-text: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );

    /* Default (Empty) */
    --_nys-radiobutton-color-bg: var(--nys-color-ink-reverse, #ffffff);
    --_nys-radiobutton-color-border: var(--nys-color-neutral-600, #62666a);
    /* Empty + Hovered */
    --_nys-radiobutton-hover-color-bg: var(--nys-color-neutral-50, #ededed);
    --_nys-radiobutton-hover-color-border: var(--nys-color-ink, #1b1b1b);
    /* Empty + Pressed */
    --_nys-radiobutton-pressed-color-bg: var(--nys-color-neutral-100, #d0d0ce);
    --_nys-radiobutton-pressed-color-border: var(--nys-color-ink, #1b1b1b);
    /* Checked */
    --_nys-radiobutton-checked-color-bg: var(--nys-color-theme, #154973);
    /* Checked + Hovered */
    --_nys-radiobutton-checked-hover-color-bg: var(
      --nys-color-theme-strong,
      var(--nys-color-state-blue-800, #0e324f)
    );
    --_nys-radiobutton-checked-hover-color-border: var(
      --nys-color-ink,
      #1b1b1b
    );
    /* Checked + Pressed */
    --_nys-radiobutton-checked-pressed-color-bg: var(
      --nys-color-theme-strong,
      var(--nys-color-state-blue-800, #0e324f)
    );
    --_nys-radiobutton-checked-pressed-color-border: var(
      --nys-color-ink,
      #1b1b1b
    );
    /* Disabled */
    --_nys-radiobutton-disabled-color-bg: var(--nys-color-ink-reverse, #f0f0f0);
    --_nys-radiobutton-disabled-color-text: var(
      --nys-color-text-disabled,
      var(--nys-color-neutral-200, #bec0c1)
    );
    --_nys-radiobutton-disabled-color-border: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
    /* Disabled Checked */
    --_nys-radiobutton-disabled-checked-color-bg: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
    --_nys-radiobutton-disabled-checked-color-border: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
  }

  /* Small Variant */
  :host([size="sm"]) {
    --_nys-radiobutton-size: var(--nys-size-300, 24px);
    --_nys-radiobutton-radius: var(--nys-radius-sm, 2px);
    --_nys-radiogroup-gap: var(--nys-space-100, 8px);
    --_nys-radiobutton-gap: var(--nys-space-100, 8px);
  }
  /* Medium Variant */
  :host([size="md"]) {
    --_nys-radiobutton-size: var(--nys-size-400, 32px);
    --_nys-radiobutton-radius: var(--nys-radius-md, 4px);
    --_nys-radiogroup-gap: var(--nys-space-200, 16px);
    --_nys-radiobutton-gap: var(--nys-space-150, 12px);
  }

  /* Tile Variant */
  :host([tile]) {
    --_nys-radiobutton-font-weight-label: var(--nys-font-weight-semibold, 600);
    --_nys-radiobutton-tile-border-width: var(--nys-border-width-sm, 1px);
    --_nys-radiobutton-tile-border-radius: var(--nys-radius-md, 4px);
    --_nys-radiobutton-tile-border-color: var(--nys-color-neutral-100, #d0d0ce);
    --_nys-radiobutton-tile-bg-color: var(--nys-color-ink-reverse, #ffffff);
    --_nys-radiobutton-tile-padding-x: var(--nys-space-250, 20px);
    --_nys-radiobutton-tile-padding-y: var(--nys-space-200, 16px);
    /* Hover */
    --_nys-radiobutton-hover-tile-border-color: var(
      --nys-color-neutral-700,
      #4a4d4f
    );
    --_nys-radiobutton-hover-tile-bg-color: var(
      --nys-color-ink-reverse,
      #ffffff
    );
    /* Pressed */
    --_nys-radiobutton-pressed-tile-border-color: var(
      --nys-color-neutral-900,
      #1b1b1b
    );
    --_nys-radiobutton-pressed-tile-bg-color: var(
      --nys-color-ink-reverse,
      #ffffff
    );
    /* Checked */
    --_nys-radiobutton-checked-tile-border-color: var(
      --nys-color-theme-mid,
      #457aa5
    );
    --_nys-radiobutton-checked-tile-bg-color: var(
      --nys-color-theme-faint,
      #f7fafd
    );
    /* Disabled */
    --_nys-radiobutton-disabled-tile-bg-color: var(
      --nys-color-ink-reverse,
      #f0f0f0
    );
    --_nys-radiobutton-disabled-tile-border-color: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
  }

  :host([tile][size="sm"]) {
    --_nys-radiobutton-tile-padding-x: var(--nys-space-200, 16px);
    --_nys-radiobutton-tile-padding-y: var(--nys-space-150, 12px);
  }

  :host([tile][showError]) {
    --_nys-radiobutton-tile-border-color: var(--nys-color-danger, #b52c2c);
    --_nys-radiobutton-hover-tile-border-color: var(
      --nys-color-danger,
      #b52c2c
    );
    --_nys-radiobutton-pressed-tile-border-color: var(
      --nys-color-danger,
      #b52c2c
    );
    --_nys-radiobutton-checked-tile-border-color: var(
      --nys-color-danger,
      #b52c2c
    );
  }

  .nys-radiogroup {
    display: flex;
    flex-direction: column;
    gap: var(--nys-space-200, 16px);
    font-family: var(--_nys-radiobutton-font-family);
    font-size: var(--_nys-radiobutton-font-size);
    line-height: var(--_nys-radiobutton-line-height);
  }

  .nys-radiogroup__content {
    gap: var(--_nys-radiogroup-gap);
    display: flex;
    flex-direction: column;
  }

  .nys-radiobutton {
    display: flex;
    align-items: center;
    font-family: var(--_nys-radiobutton-font-family);
    font-size: var(--_nys-radiobutton-font-size);
    line-height: var(--_nys-radiobutton-line-height);

    /* Tile */
    border-radius: var(--_nys-radiobutton-tile-border-radius);
    border: var(--_nys-radiobutton-tile-border-width) solid
      var(--_nys-radiobutton-tile-border-color);
    background: var(--_nys-radiobutton-tile-bg-color);
    padding: var(--_nys-radiobutton-tile-padding-y)
      var(--_nys-radiobutton-tile-padding-x);
  }

  .nys-radiobutton__radio {
    appearance: none;
    width: var(--_nys-radiobutton-size);
    height: var(--_nys-radiobutton-size);
    min-width: var(--_nys-radiobutton-size);
    min-height: var(--_nys-radiobutton-size);
    max-width: var(--_nys-radiobutton-size);
    max-height: var(--_nys-radiobutton-size);
    border: solid var(--_nys-radiobutton-width-border)
      var(--_nys-radiobutton-color-border);
    background-color: var(--_nys-radiobutton-color-bg);
    border-radius: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    outline-offset: var(--_nys-radiobutton-outline-offset);
    outline: none;
    margin: 0 0 auto 0; /* Causes centered radio button if single line of label but top aligned if multiline */
    box-sizing: border-box;
  }

  /* Pointer cursor for unchecked radio button */
  .nys-radiobutton:hover,
  .nys-radiobutton:hover * {
    cursor: pointer;
  }

  /* Checked */
  input:not(:disabled):checked + .nys-radiobutton .nys-radiobutton__radio {
    background-image: url('data:image/svg+xml;utf8,<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="11" stroke="white" stroke-width="6"/></svg>');
    background-color: var(--_nys-radiobutton-checked-color-bg);
  }
  :host([tile])
    .nys-radiobutton:has(input:not(:disabled):checked)
    + .nys-radiobutton
    .nys-radiobutton__radio {
    border-color: var(--_nys-radiobutton-checked-tile-border-color);
    background-color: var(--_nys-radiobutton-checked-tile-bg-color);
  }
  :host([tile])
    .nys-radiobutton:has(input:not(:disabled):checked:hover)
    + .nys-radiobutton
    .nys-radiobutton__radio {
    cursor: default;
  }

  /* Checked + Disabled */
  input:disabled:checked + .nys-radiobutton .nys-radiobutton__radio {
    background-image: url('data:image/svg+xml;utf8,<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="11" stroke="white" stroke-width="6"/></svg>');
    border-color: var(--_nys-radiobutton-disabled-checked-color-border);
    background-color: var(--_nys-radiobutton-disabled-checked-color-bg);
  }
  :host([tile])
    .nys-radiobutton:has(input:disabled:checked)
    + .nys-radiobutton
    .nys-radiobutton__radio {
    border-color: var(--_nys-radiobutton-disabled-tile-border-color);
    background-color: var(--_nys-radiobutton-disabled-tile-bg-color);
  }

  /* Disabled */
  input:disabled + .nys-radiobutton .nys-radiobutton__radio {
    background-color: var(--_nys-radiobutton-disabled-color-bg);
    border-color: var(--_nys-radiobutton-disabled-color-border);
    cursor: not-allowed;
  }
  :host([tile])
    .nys-radiobutton:has(input:disabled)
    + .nys-radiobutton
    .nys-radiobutton__radio {
    background-color: var(--_nys-radiobutton-disabled-color-bg);
    border-color: var(--_nys-radiobutton-disabled-color-border);
    cursor: not-allowed;
  }

  /* Hover - only allow hover on unchecked */
  input:hover:not(:disabled):not(:checked)
    + .nys-radiobutton
    .nys-radiobutton__radio {
    border-color: var(--_nys-radiobutton-hover-color-border);
    background-color: var(--_nys-radiobutton-hover-color-bg);
  }
  :host([tile])
    .nys-radiobutton:has(
      input:hover:not(:disabled):not(:checked)
        + .nys-radiobutton
        .nys-radiobutton__radio
    ) {
    border-color: var(--_nys-radiobutton-hover-tile-border-color);
    background-color: var(--_nys-radiobutton-hover-tile-bg-color);
    outline: solid var(--_nys-radiobutton-tile-border-width)
      var(--_nys-radiobutton-hover-tile-border-color);
  }

  /* Pressed - only allow pressed on unchecked */
  input:active:not(:disabled):not(:checked)
    + .nys-radiobutton
    .nys-radiobutton__radio {
    border-color: var(--_nys-radiobutton-pressed-color-border);
    background-color: var(--_nys-radiobutton-pressed-color-bg);
  }
  :host([tile])
    .nys-radiobutton:has(
      input:active:not(:disabled):not(:checked)
        + .nys-radiobutton
        .nys-radiobutton__radio
    ) {
    border-color: var(--_nys-radiobutton-pressed-tile-border-color);
    background-color: var(--_nys-radiobutton-pressed-tile-bg-color);
    outline: solid var(--_nys-radiobutton-tile-border-width)
      var(--_nys-radiobutton-pressed-tile-border-color);
  }

  /* Focused */
  :host:focus-visible,
  :host(.active-focus) {
    outline: solid var(--_nys-radiobutton-width-focus)
      var(--_nys-radiobutton-color-focus);
  }
  /* Radiobutton Label Holder */
  .nys-radiobutton__text {
    line-height: var(--_nys-radiobutton-line-height);
    display: flex;
    flex-direction: column;
  }

  /* Label styling */
  .nys-radiobutton__label {
    font-weight: var(--_nys-radiobutton-font-weight-label);
    color: var(--_nys-radiobutton-color-text);
  }

  /* Description styling */
  .nys-radiobutton__description {
    font-weight: var(--_nys-radiobutton-font-weight-description);
    font-style: italic;
    text-align: left;
  }
  :host([tile]) .nys-radiobutton__description {
    font-style: normal;
  }

  /* gap between radio and it's label */
  .nys-radiobutton__label,
  .nys-radiobutton__description {
    margin-inline-start: var(--_nys-radiobutton-gap);
  }

  /* Disabled label */
  input:disabled + span + .nys-radiobutton__text .nys-radiobutton__label,
  input:disabled + span + .nys-radiobutton__text .nys-radiobutton__description {
    color: var(--_nys-radiobutton-disabled-color-text);
    cursor: not-allowed;
  }

  /* Screen readers ONLY */
  fieldset {
    all: unset;
    display: contents;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    border: 0;
  }
`;var L6=Object.defineProperty,H6=Object.getOwnPropertyDescriptor,qt=(r,i,o,c)=>{for(var u=c>1?void 0:c?H6(i,o):i,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=(c?v(i,o,u):v(u))||u);return c&&u&&L6(i,o,u),u};let T6=0;var ka;const xt=(ka=class extends ce{constructor(){super(),this.id="",this.name="",this.required=!1,this.optional=!1,this.showError=!1,this.errorMessage="",this.label="",this.description="",this.tile=!1,this.selectedValue=null,this._slottedDescriptionText="",this._size="md",this._internals=this.attachInternals()}get size(){return this._size}set size(r){this._size=ka.VALID_SIZES.includes(r)?r:"md"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-radiogroup-${Date.now()}-${T6++}`),this.addEventListener("nys-change",this._handleRadioButtonChange),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("nys-change",this._handleRadioButtonChange),this.removeEventListener("invalid",this._handleInvalid)}async firstUpdated(){this._initializeCheckedRadioValue(),this._setValue(),this._setRadioButtonRequire(),this._updateRadioButtonsSize(),this._updateRadioButtonsTile(),this._updateRadioButtonsShowError(),this._getSlotDescriptionForAria(),await this.updateComplete,this._initializeChildAttributes(),this._updateGroupTabIndex()}updated(r){(r.has("required")||r.has("selectedValue"))&&this._manageRequire(),r.has("size")&&this._updateRadioButtonsSize(),r.has("tile")&&this._updateRadioButtonsTile(),r.has("showError")&&this._updateRadioButtonsShowError()}formResetCallback(){this.querySelectorAll("nys-radiobutton").forEach(r=>{r.formResetUpdate()})}_setValue(){this._internals.setFormValue(this.selectedValue)}_setRadioButtonRequire(){this.querySelectorAll("nys-radiobutton").forEach((r,i)=>{this.required&&i===0&&r.setAttribute("required","required")})}async _manageRequire(){const r=this.errorMessage||"Please select an option.",i=this.querySelector("nys-radiobutton"),o=i?await i.getInputElement():null;o&&(this.required&&!this.selectedValue?this._internals.setValidity({valueMissing:!0},r,o):(this.showError=!1,this._internals.setValidity({},"",o)))}checkValidity(){const r=Array.from(this.querySelectorAll("nys-radiobutton"));return!this.required||r.some(i=>i.checked)}_initializeCheckedRadioValue(){const r=this.querySelector("nys-radiobutton[checked]");r&&(this.selectedValue=r.getAttribute("value"),this._internals.setFormValue(this.selectedValue))}_getAllRadios(){return Array.from(this.querySelectorAll("nys-radiobutton"))}async _handleKeyDown(r){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," ","Enter"].includes(r.key))return;r.preventDefault();const i=this._getAllRadios().filter(A=>!A.disabled),o=i.find(A=>A.checked)||i[0],c=r.key===" "||r.key==="Enter"?0:["ArrowUp","ArrowLeft"].includes(r.key)?-1:1;let u=i.indexOf(o)+c;u<0&&(u=i.length-1),u>=i.length&&(u=0);const f=i[u],v=await f.getInputElement();v==null||v.click(),this._updateGroupTabIndex(),f.focus()}_updateGroupTabIndex(){const r=this._getAllRadios(),i=r.find(o=>o.checked)||r[0];r.forEach(o=>{o.disabled?o.tabIndex=-1:o.tabIndex=o===i?0:-1,o.setAttribute("aria-checked",o.checked?"true":"false"),o.setAttribute("aria-disabled",o.disabled?"true":"false"),o.setAttribute("aria-required",this.required?"true":"false")})}_initializeChildAttributes(){this._getAllRadios().forEach(r=>{r.setAttribute("role","radio"),r.setAttribute("aria-checked",String(r.checked)),r.setAttribute("aria-required",String(r.required)),r.setAttribute("aria-disabled",String(r.disabled)),r.setAttribute("tabindex","-1")})}_updateRadioButtonsSize(){this.querySelectorAll("nys-radiobutton").forEach(r=>{r.setAttribute("size",this.size)})}_updateRadioButtonsTile(){this.querySelectorAll("nys-radiobutton").forEach(r=>{this.tile?r.toggleAttribute("tile",!0):r.removeAttribute("tile")})}_updateRadioButtonsShowError(){this.querySelectorAll("nys-radiobutton").forEach(r=>{this.showError?r.setAttribute("showError",""):r.removeAttribute("showError")})}_getSlotDescriptionForAria(){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector('slot[name="description"]'),o=(i==null?void 0:i.assignedNodes({flatten:!0}))||[];this._slottedDescriptionText=o.map(c=>{var u;return(u=c.textContent)==null?void 0:u.trim()}).filter(Boolean).join(", ")}_handleRadioButtonChange(r){const i=r,{name:o,value:c}=i.detail;this.name=o,this.selectedValue=c,this._internals.setFormValue(this.selectedValue),this._updateGroupTabIndex()}async _handleInvalid(r){if(r.preventDefault(),this._internals.validity.valueMissing){this.showError=!0,this._manageRequire();const i=this.querySelector("nys-radiobutton");if(i){const o=this._internals.form;o?Array.from(o.elements).find(c=>typeof c.checkValidity=="function"&&!c.checkValidity())===this&&(i.focus(),i.classList.add("active-focus")):(i.focus(),i.classList.add("active-focus"))}}}render(){return L`<div class="nys-radiogroup">
      <nys-label
        for=${this.id}
        label=${this.label}
        description=${this.description}
        flag=${this.required?"required":this.optional?"optional":""}
      >
        <slot name="description" slot="description">${this.description}</slot>
      </nys-label>
      <div class="nys-radiogroup__content">
        <fieldset role="radiogroup" @keydown=${this._handleKeyDown}>
          <legend class="sr-only">
            ${this.label}${this._slottedDescriptionText?` ${this._slottedDescriptionText}`:this.description?` ${this.description}`:""}
          </legend>
          <slot></slot>
        </fieldset>
      </div>
      <nys-errormessage
        ?showError=${this.showError}
        errorMessage=${this._internals.validationMessage||this.errorMessage}
        .showDivider=${!this.tile}
      ></nys-errormessage>
    </div>`}},ka.VALID_SIZES=["sm","md"],ka.styles=S3,ka.formAssociated=!0,ka);qt([p({type:String})],xt.prototype,"id",2);qt([p({type:String,reflect:!0})],xt.prototype,"name",2);qt([p({type:Boolean,reflect:!0})],xt.prototype,"required",2);qt([p({type:Boolean,reflect:!0})],xt.prototype,"optional",2);qt([p({type:Boolean,reflect:!0})],xt.prototype,"showError",2);qt([p({type:String})],xt.prototype,"errorMessage",2);qt([p({type:String})],xt.prototype,"label",2);qt([p({type:String})],xt.prototype,"description",2);qt([p({type:Boolean,reflect:!0})],xt.prototype,"tile",2);qt([bt()],xt.prototype,"selectedValue",2);qt([bt()],xt.prototype,"_slottedDescriptionText",2);qt([p({reflect:!0})],xt.prototype,"size",1);let E3=xt;customElements.get("nys-radiogroup")||customElements.define("nys-radiogroup",E3);var O6=Object.defineProperty,U6=Object.getOwnPropertyDescriptor,i1=(r,i,o,c)=>{for(var u=c>1?void 0:c?U6(i,o):i,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=(c?v(i,o,u):v(u))||u);return c&&u&&O6(i,o,u),u};let $6=0;var Ve;const Kt=(Ve=class extends ce{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.required=!1,this.label="",this.description="",this.id="",this.name="",this.value="",this._size="md",this.tile=!1}get size(){return this._size}set size(r){this._size=Ve.VALID_SIZES.includes(r)?r:"md"}async getInputElement(){var r;return await this.updateComplete,((r=this.shadowRoot)==null?void 0:r.querySelector("input"))||null}formResetUpdate(){this.checked=!1}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-radiobutton-${Date.now()}-${$6++}`),this.checked&&(Ve.buttonGroup[this.name]&&(Ve.buttonGroup[this.name].checked=!1,Ve.buttonGroup[this.name].requestUpdate()),Ve.buttonGroup[this.name]=this),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur),this.addEventListener("click",this._handleChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}updated(r){r.has("checked")&&this.checked&&Ve.buttonGroup[this.name]!==this&&(Ve.buttonGroup[this.name]&&(Ve.buttonGroup[this.name].checked=!1,Ve.buttonGroup[this.name].requestUpdate()),Ve.buttonGroup[this.name]=this)}checkValidity(){var r;if(this.required&&!this.checked)return!1;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("input");return i?i.checkValidity():!0}_emitChangeEvent(){this.dispatchEvent(new CustomEvent("nys-change",{detail:{checked:this.checked,name:this.name,value:this.value},bubbles:!0,composed:!0}))}_handleChange(){this.classList.remove("active-focus"),this.checked||(Ve.buttonGroup[this.name]&&(Ve.buttonGroup[this.name].checked=!1,Ve.buttonGroup[this.name].requestUpdate()),Ve.buttonGroup[this.name]=this,this.checked=!0,this._emitChangeEvent())}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this.classList.remove("active-focus"),this.dispatchEvent(new Event("nys-blur"))}_callInputHandling(){var r;if(this.disabled)return;const i=(r=this.shadowRoot)==null?void 0:r.querySelector('input[type="radio"]');i&&(i.focus(),i.click())}render(){return L`
      <input
        id="${this.id}"
        type="radio"
        name="${ne(this.name?this.name:void 0)}"
        .checked=${this.checked}
        ?disabled=${this.disabled}
        .value=${this.value}
        ?required="${this.required}"
        @change="${this._handleChange}"
        hidden
        aria-hidden="true"
      />

      <label
        class="nys-radiobutton"
        for="${this.id}"
        @click="${this._callInputHandling}"
      >
        <span class="nys-radiobutton__radio"></span>

        ${this.label&&L` <div class="nys-radiobutton__text">
          <div class="nys-radiobutton__label">${this.label}</div>
          <div class="nys-radiobutton__description">
            <slot name="description">${this.description}</slot>
          </div>
        </div>`}
      </label>
    `}},Ve.VALID_SIZES=["sm","md"],Ve.buttonGroup={},Ve.styles=S3,Ve);i1([p({type:Boolean,reflect:!0})],Kt.prototype,"checked",2);i1([p({type:Boolean,reflect:!0})],Kt.prototype,"disabled",2);i1([p({type:Boolean,reflect:!0})],Kt.prototype,"required",2);i1([p({type:String})],Kt.prototype,"label",2);i1([p({type:String})],Kt.prototype,"description",2);i1([p({type:String})],Kt.prototype,"id",2);i1([p({type:String,reflect:!0})],Kt.prototype,"name",2);i1([p({type:String})],Kt.prototype,"value",2);i1([p({reflect:!0})],Kt.prototype,"size",1);i1([p({type:Boolean,reflect:!0})],Kt.prototype,"tile",2);let z3=Kt;customElements.get("nys-radiobutton")||customElements.define("nys-radiobutton",z3);const V6=xe`
  :host {
    /* Global Select Styles */
    --_nys-select-width: 100%;
    --_nys-select-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-select-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-select-font-weight: var(--nys-font-weight-regular, 400);
    --_nys-select-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-select-gap: var(--nys-space-50, 4px);
    --_nys-select-radius: var(--nys-radius-md, var(--nys-space-50, 4px));
    --_nys-select-padding: var(--nys-space-100, 8px) var(--nys-space-400, 32px)
      var(--nys-space-100, 8px) var(--nys-space-100, 8px);

    /* Global Select Colors */
    --_nys-select-text-color: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-select-icon-color: var(
      --nys-color-ink,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-select-error-color: var(
      --nys-color-danger,
      var(--nys-color-red-600, #b52c2c)
    );
    --_nys-select-bg-color: var(--nys-color-ink-reverse, #fff);
    --_nys-select-bg-disabled-color: var(--nys-color-neutral-50, #ededed);
    --_nys-select-text-disabled-color: var(
      --nys-color-text-disabled,
      var(--nys-color-neutral-200, #bec0c1)
    );
    --_nys-select-icon-disabled-color: var(--nys-color-neutral-200, #bec0c1);

    /* Select Outline & Border States */
    --_nys-select-border-default: var(--nys-border-width-sm, 1px) solid
      var(--nys-color-neutral-400, #909395);
    --_nys-select-border-focus: var(--nys-border-width-sm, 1px) solid
      var(--nys-color-focus, var(--nys-color-blue-600, #004dd1));
    --_nys-select-border-disabled: var(--nys-border-width-sm, 1px) solid
      var(--nys-color-neutral-200, #bec0c1);
    --_nys-select-border-hover: var(--nys-border-width-sm, 1px) solid
      var(--nys-color-neutral-900, #1b1b1b);
  }

  .nys-select {
    display: flex;
    flex-direction: column;
    gap: var(--_nys-select-gap);
    font-family: var(--_nys-select-font-family);
  }

  .nys-select__select {
    color: var(--_nys-select-text-color);
    font-weight: var(--_nys-select-font-weight);
    border-radius: var(--_nys-select-radius);
    border: var(--_nys-select-border-default);
    font-size: var(--_nys-select-font-size);
    padding: var(--_nys-select-padding);
    width: var(--_nys-select-width);
    max-width: 100%;
    text-indent: 1px;
    text-overflow: "";
    background: var(--_nys-select-bg-color);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    text-overflow: ellipsis;
  }

  .nys-select__selectwrapper {
    position: relative;
    display: inline-block;
    width: var(--_nys-select-width);
    max-width: 100%;
  }

  .nys-select__icon {
    color: var(--_nys-select-icon-color);
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  :host([width="sm"]) {
    --_nys-select-width: var(--nys-select-form-width-sm, 88px);
  }

  :host([width="md"]) {
    --_nys-select-width: var(--nys-select-form-width-md, 200px);
  }

  :host([width="lg"]) {
    --_nys-select-width: var(--nys-select-form-width-lg, 384px);
  }

  :host([width="full"]) {
    --_nys-select-width: 100%;
    flex: 1; /* stretches width for flex container */
  }

  /* Hover */
  .nys-select__select:hover:not(:disabled) {
    cursor: pointer;
    border: var(--_nys-select-border-hover);
    outline: var(--_nys-select-border-hover);
  }

  /* Focused */
  .nys-select__select:focus {
    border: var(--_nys-select-border-focus);
    outline: var(--_nys-select-border-focus);
  }

  /* When both focus and hover are active, prioritize focus */
  .nys-select__select:focus:hover {
    border: var(--_nys-select-border-focus);
    outline: var(--_nys-select-border-focus);
  }

  /* Disabled */
  .nys-select__select:disabled {
    background-color: var(--_nys-select-bg-disabled-color);
    border: var(--_nys-select-border-disabled);
    cursor: not-allowed;
    color: var(--_nys-select-text-disabled-color);
  }
  .nys-select__select:disabled ~ .nys-select__icon {
    color: var(--_nys-select-icon-disabled-color);
  }

  :host([showError]) {
    --_nys-select-border-default: var(--nys-border-width-sm, 1px) solid
      var(--_nys-select-error-color);
  }
`;var N6=Object.defineProperty,Yl=(r,i,o,c)=>{for(var u=void 0,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=v(i,o,u)||u);return u&&N6(i,o,u),u};class cn extends ce{constructor(){super(...arguments),this.disabled=!1,this.selected=!1,this.value="",this.label="",this.hidden=!1}firstUpdated(){var i;const o=(i=this.shadowRoot)==null?void 0:i.querySelector("slot");o&&o.addEventListener("slotchange",()=>{var c;const u=o.assignedNodes({flatten:!0});u.length>0&&(this.label=((c=u[0].textContent)==null?void 0:c.trim())||"")})}render(){return L`
      <option
        ?disabled=${this.disabled}
        ?selected=${this.selected}
        value=${this.value}
        label=${this.label}
        ?hidden=${this.hidden}
      >
        <slot>${this.label}</slot>
      </option>
    `}}Yl([p({type:Boolean,reflect:!0})],cn.prototype,"disabled");Yl([p({type:Boolean,reflect:!0})],cn.prototype,"selected");Yl([p({type:String})],cn.prototype,"value");Yl([p({type:String})],cn.prototype,"label");Yl([p({type:Boolean,reflect:!0})],cn.prototype,"hidden");customElements.define("nys-option",cn);var R6=Object.defineProperty,q6=Object.getOwnPropertyDescriptor,Bt=(r,i,o,c)=>{for(var u=c>1?void 0:c?q6(i,o):i,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=(c?v(i,o,u):v(u))||u);return c&&u&&R6(i,o,u),u};let B6=0;var Sa;const wt=(Sa=class extends ce{constructor(){super(),this.id="",this.name="",this.label="",this.description="",this.value="",this.disabled=!1,this.required=!1,this.optional=!1,this.form="",this.showError=!1,this.errorMessage="",this._width="md",this._hasUserInteracted=!1,this._internals=this.attachInternals()}get width(){return this._width}set width(r){this._width=Sa.VALID_WIDTHS.includes(r)?r:"full"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-select-${Date.now()}-${B6++}`),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}formResetCallback(){this.value=""}_handleSlotChange(){var r,i;const o=(r=this.shadowRoot)==null?void 0:r.querySelector('slot:not([name="description"])'),c=(i=this.shadowRoot)==null?void 0:i.querySelector("select");!o||!c||(c.querySelectorAll("option:not([hidden])").forEach(u=>u.remove()),o.assignedElements({flatten:!0}).forEach(u=>{var f;if(u instanceof cn){const v=document.createElement("option");v.value=u.value,v.textContent=u.label||((f=u.textContent)==null?void 0:f.trim())||"",v.disabled=u.disabled,v.selected=u.selected,c.appendChild(v)}}))}_setValue(){this._internals.setFormValue(this.value),this._manageRequire()}_manageRequire(){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("select");if(!i)return;const o=this.errorMessage||"Please select an option.";this.required&&!this.value?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},o,i)):(this._internals.ariaRequired="false",this._internals.setValidity({}),this._hasUserInteracted=!1)}_setValidityMessage(r=""){var i,o;const c=(i=this.shadowRoot)==null?void 0:i.querySelector("select");c&&(this.showError=!!r,(o=this.errorMessage)!=null&&o.trim()&&r!==""&&(r=this.errorMessage),this._internals.setValidity(r?{customError:!0}:{},r,c))}_validate(){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("select");if(!i)return;let o=i.validationMessage;this._manageRequire(),this._setValidityMessage(o)}checkValidity(){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("select");return i?i.checkValidity():!0}_handleInvalid(r){var i;r.preventDefault(),this._hasUserInteracted=!0,this._validate(),this.showError=!0;const o=(i=this.shadowRoot)==null?void 0:i.querySelector("select");if(o){const c=this._internals.form;c?Array.from(c.elements).find(u=>typeof u.checkValidity=="function"&&!u.checkValidity())===this&&o.focus():o.focus()}}_handleChange(r){const i=r.target;this.value=i.value,this._internals.setFormValue(this.value),this._hasUserInteracted&&this._validate(),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this._hasUserInteracted||(this._hasUserInteracted=!0),this._validate(),this.dispatchEvent(new Event("nys-blur"))}updated(r){var i;if(super.updated(r),r.has("value")){const o=(i=this.shadowRoot)==null?void 0:i.querySelector("select");o&&(o.value=this.value)}}render(){return L`
      <div class="nys-select">
        <nys-label
          for=${this.id}
          label=${this.label}
          description=${this.description}
          flag=${this.required?"required":this.optional?"optional":""}
        >
          <slot name="description" slot="description">${this.description}</slot>
        </nys-label>
        <div class="nys-select__selectwrapper">
          <select
            class="nys-select__select"
            name=${this.name}
            id=${this.id}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-disabled="${this.disabled}"
            aria-label="${[this.label,this.description].filter(Boolean).join(" ")}"
            .value=${this.value}
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
            @change="${this._handleChange}"
          >
            <option hidden disabled selected value></option>
          </select>
          <slot
            @slotchange="${this._handleSlotChange}"
            style="display: none;"
          ></slot>
          <nys-icon
            name="chevron_down"
            size="xl"
            class="nys-select__icon"
          ></nys-icon>
        </div>
        <nys-errormessage
          ?showError=${this.showError}
          errorMessage=${this._internals.validationMessage||this.errorMessage}
        ></nys-errormessage>
      </div>
    `}},Sa.VALID_WIDTHS=["sm","md","lg","full"],Sa.styles=V6,Sa.formAssociated=!0,Sa);Bt([p({type:String})],wt.prototype,"id",2);Bt([p({type:String,reflect:!0})],wt.prototype,"name",2);Bt([p({type:String})],wt.prototype,"label",2);Bt([p({type:String})],wt.prototype,"description",2);Bt([p({type:String})],wt.prototype,"value",2);Bt([p({type:Boolean,reflect:!0})],wt.prototype,"disabled",2);Bt([p({type:Boolean,reflect:!0})],wt.prototype,"required",2);Bt([p({type:Boolean,reflect:!0})],wt.prototype,"optional",2);Bt([p({type:String})],wt.prototype,"form",2);Bt([p({type:Boolean,reflect:!0})],wt.prototype,"showError",2);Bt([p({type:String})],wt.prototype,"errorMessage",2);Bt([p({reflect:!0})],wt.prototype,"width",1);let A3=wt;customElements.get("nys-select")||customElements.define("nys-select",A3);const Z6=xe`
  :host {
    /* Global Skipnav Styles */
    --_nys-skipnav-padding-vertical: var(--nys-space-100, 8px);
    --_nys-skipnav-padding-horizontal: var(--nys-space-200, 16px);
    --_nys-skipnav-gap: var(--nys-space-100, 8px);

    /* Focus Styles */
    --_nys-skipnav-focus-border: var(--nys-border-width-md, 2px);
    --_nys-skipnav-focus-border-radius: var(--nys-radius-sm, 2px);

    /* Typography */
    --_nys-skipnav-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-skipnav-font-weight: var(--nys-font-weight-semibold, 600);
    --_nys-skipnav-font-letterspacing: var(
      --nys-font-letterspacing-ui-md,
      0.044px
    );
    --_nys-skipnav-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-skipnav-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );

    /* Color */
    --_nys-skipnav-color-link: var(--nys-color-link, #004dd1);
    --_nys-skipnav-color-background: var(--nys-color-surface, #fff);
  }

  .nys-skipnav__link {
    position: absolute;
    left: auto;
    top: -4.8rem;
    display: inline-flex;
    padding: var(--_nys-skipnav-padding-vertical)
      var(--_nys-skipnav-padding-horizontal);
    align-items: flex-end;
    gap: var(--_nys-skipnav-gap);
    background: var(--_nys-skipnav-color-background);
    color: var(--_nys-skipnav-color-link);
    border: var(--_nys-skipnav-focus-border) solid
      var(--_nys-skipnav-color-link);
    border-radius: var(--_nys-skipnav-focus-border-radius);
    font-family: var(--_nys-skipnav-font-family);
    font-size: var(--_nys-skipnav-font-size);
    font-style: normal;
    font-weight: var(--_nys-skipnav-font-weight);
    line-height: var(--_nys-skipnav-line-height);
    letter-spacing: var(--_nys-skipnav-font-letterspacing);
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: auto;
    text-decoration-thickness: 7%; /* 1.12px */
    text-underline-offset: auto;
    text-underline-position: from-font;
    z-index: 100;
    transition: 0.15s ease-in-out;
  }

  .nys-skipnav__link:focus,
  .nys-skipnav__link.show {
    top: 0;
    left: auto;
    outline: none;
  }
`;var j6=Object.defineProperty,D3=(r,i,o,c)=>{for(var u=void 0,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=v(i,o,u)||u);return u&&j6(i,o,u),u};const M3=class extends ce{constructor(){super(),this.id="",this.href=""}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-skipnav-${Date.now()}`)}_handleFocus(){var i;const o=(i=this.shadowRoot)==null?void 0:i.querySelector(".nys-skipnav__link");o==null||o.classList.add("show")}_handleBlur(){var i;const o=(i=this.shadowRoot)==null?void 0:i.querySelector(".nys-skipnav__link");o==null||o.classList.remove("show")}_handleClick(){const i=(this.href||"#main-content").replace("#",""),o=document.getElementById(i);o&&(o.setAttribute("tabindex","-1"),o.focus(),o.style.outline="none")}render(){return L`
      <div class="nys-skipnav">
        <a
          id=${this.id}
          href=${this.href?this.href:"#main-content"}
          tabindex="0"
          class="nys-skipnav__link"
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
          @click="${this._handleClick}"
        >
          Skip to main content
        </a>
      </div>
    `}};M3.styles=Z6;let gi=M3;D3([p({type:String})],gi.prototype,"id");D3([p({type:String})],gi.prototype,"href");customElements.get("nys-skipnav")||customElements.define("nys-skipnav",gi);const G6=xe`
  :host {
    /* Anything that can be overridden should be defined here */

    /* Global Text Input Styles */
    --_nys-textarea-width: 100%;
    --_nys-textarea-radius: var(--nys-radius-md, 4px);
    --_nys-textarea-width-border: var(--nys-border-width-sm, 1px);
    --_nys-textarea-color-border: var(--nys-color-neutral-400, #909395);
    --_nys-textarea-padding: var(--nys-space-100, 8px);
    --_nys-textarea-gap: var(--nys-space-50, 4px);
    --_nys-textarea-color: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-textarea-placeholder-color: var(
      --nys-color-text-weaker,
      var(--nys-color-neutral-500, #797c7f)
    );

    /* Hovered */
    --_nys-textarea-hover-color-outline: var(--nys-color-neutral-900, #1b1b1b);
    --_nys-textarea-hover-width-outline: var(--nys-border-width-sm, 1px);

    /* Focused */
    --_nys-textarea-focus-color-outline: var(--nys-color-focus, #004dd1);
    --_nys-textarea-focus-width-outline: var(--nys-border-width-sm, 1px);

    /* Disabled */
    --_nys-textarea-disabled-bg-color: var(--nys-color-neutral-10, #f6f6f6);
    --_nys-textarea-disabled-color-border: var(
      --nys-color-neutral-200,
      #bec0c1
    );
    --_nys-textarea-disabled-color-text: var(
      --nys-color-text-disabled,
      var(--nys-color-neutral-200, #bec0c1)
    );

    /* Global Font Styles */
    --_nys-textarea-family-ui: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-textarea-size-ui-md: var(--nys-font-size-ui-md, 16px);
    --_nys-textarea-weight-ui: var(--nys-font-weight-regular, 400);
    --_nys-textarea-lineheight-ui: var(--nys-font-lineheight-ui-md, 24px);
    --nys-textarea-letterspacing-ui: var(
      --nys-font-letterspacing-ui-md,
      var(--nys-font-letterspacing-400, 0.044px)
    );
    --_nys-textarea-color-ui: var(--nys-color-ink, #1b1b1b);
  }

  :host([width="sm"]) {
    --_nys-textarea-width: var(--nys-form-width-sm, 88px);
  }

  :host([width="md"]) {
    --_nys-textarea-width: var(--nys-form-width-md, 200px);
  }

  :host([width="lg"]) {
    --_nys-textarea-width: var(--nys-form-width-lg, 384px);
  }

  :host([width="full"]) {
    --_nys-textarea-width: 100%;
    flex: 1; /* stretches width for flex container */
  }

  :host([showError]) {
    --_nys-textarea-color-border: var(--nys-color-danger, #b52c2c);
  }

  .nys-textarea {
    font-weight: var(--_nys-textarea-weight-ui);
    font-family: var(--_nys-textarea-family-ui);
    line-height: var(--_nys-textarea-lineheight-ui);
    letter-spacing: var(--nys-textarea-letterspacing-ui);
    color: var(--_nys-textarea-color-ui);
    gap: var(--_nys-textarea-gap);
    display: flex;
    flex-direction: column;
  }

  .nys-textarea__textarea {
    color: var(--_nys-textarea-color);
    font-size: var(--_nys-textarea-size-ui-md);
    font-family: var(--_nys-textarea-family-ui);
    border-radius: var(--_nys-textarea-radius);
    border: solid var(--_nys-textarea-color-border)
      var(--_nys-textarea-width-border);
    padding: var(--_nys-textarea-padding);
    width: var(--_nys-textarea-width);
    line-height: var(--_nys-textarea-lineheight-ui);
    min-width: var(--_nys-textarea-width);
    max-width: var(--_nys-textarea-width);
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  .nys-textarea__textarea::placeholder {
    color: var(--_nys-textarea-placeholder-color);
  }

  /* Resize */
  .nys-textarea__textarea.none {
    resize: none;
  }

  /* Hovered */
  .nys-textarea__textarea:hover:not(:disabled):not(:focus) {
    outline: solid var(--_nys-textarea-hover-width-outline)
      var(--_nys-textarea-hover-color-outline);
    border-color: var(--_nys-textarea-hover-color-outline);
  }

  /* Focused */
  .nys-textarea__textarea:focus {
    outline: solid var(--_nys-textarea-focus-width-outline)
      var(--_nys-textarea-focus-color-outline);
    border-color: var(--_nys-textarea-focus-color-outline);
    caret-color: var(--_nys-textarea-focus-color-outline);
  }

  /* Disabled */
  .nys-textarea__textarea:disabled,
  .nys-textarea__textarea:disabled::placeholder {
    background-color: var(--_nys-textarea-disabled-bg-color);
    border-color: var(--_nys-textarea-disabled-color-border);
    color: var(--_nys-textarea-disabled-color-text);
    cursor: not-allowed;
  }
`;var Y6=Object.defineProperty,X6=Object.getOwnPropertyDescriptor,Qe=(r,i,o,c)=>{for(var u=c>1?void 0:c?X6(i,o):i,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=(c?v(i,o,u):v(u))||u);return c&&u&&Y6(i,o,u),u};let Q6=0;var an;const je=(an=class extends ce{constructor(){super(),this.id="",this.name="",this.label="",this.description="",this.placeholder="",this.value="",this.disabled=!1,this.readonly=!1,this.required=!1,this.optional=!1,this.form="",this.maxlength=null,this.width="full",this.rows=4,this._resize="vertical",this.showError=!1,this.errorMessage="",this._hasUserInteracted=!1,this._internals=this.attachInternals()}get resize(){return this._resize}set resize(r){this._resize=an.VALID_RESIZE.includes(r)?r:"vertical"}async updated(r){await Promise.resolve(),r.has("width")&&(this.width=an.VALID_WIDTHS.includes(this.width)?this.width:"full"),r.has("rows")&&(this.rows=this.rows??4)}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-textarea-${Date.now()}-${Q6++}`),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}formResetCallback(){this.value=""}_setValue(){this._internals.setFormValue(this.value),this._manageRequire()}_manageRequire(){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("textarea");if(!i)return;const o=this.errorMessage||"This field is required";this.required&&!this.value?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},o,i)):(this._internals.ariaRequired="false",this._internals.setValidity({}),this._hasUserInteracted=!1)}_setValidityMessage(r=""){var i,o;const c=(i=this.shadowRoot)==null?void 0:i.querySelector("textarea");c&&(this.showError=!!r,(o=this.errorMessage)!=null&&o.trim()&&r!==""&&(r=this.errorMessage),this._internals.setValidity(r?{customError:!0}:{},r,c))}_validate(){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("textarea");if(!i)return;let o=i.validationMessage;this._setValidityMessage(o)}checkValidity(){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("textarea");return i?i.checkValidity():!0}_handleInvalid(r){var i;r.preventDefault(),this._hasUserInteracted=!0,this._validate();const o=(i=this.shadowRoot)==null?void 0:i.querySelector("textarea");if(o){const c=this._internals.form;c?Array.from(c.elements).find(u=>typeof u.checkValidity=="function"&&!u.checkValidity())===this&&o.focus():o.focus()}}_handleInput(r){const i=r.target;this.value=i.value,this._internals.setFormValue(this.value),this._hasUserInteracted&&this._validate(),this.dispatchEvent(new CustomEvent("nys-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this._hasUserInteracted||(this._hasUserInteracted=!0),this._validate(),this.dispatchEvent(new Event("nys-blur"))}_handleSelect(r){const i=r.target;this.value=i.value,this.dispatchEvent(new CustomEvent("nys-select",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleSelectionChange(r){const i=r.target;this.value=i.value,this.dispatchEvent(new CustomEvent("selectionchange",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return L`
      <label class="nys-textarea">
        <nys-label
          for=${this.id}
          label=${this.label}
          description=${this.description}
          flag=${this.required?"required":this.optional?"optional":""}
        >
          <slot name="description" slot="description">${this.description}</slot>
        </nys-label>
        <textarea
          class="nys-textarea__textarea ${this.resize}"
          name=${this.name}
          id=${this.id}
          ?disabled=${this.disabled}
          ?required=${this.required}
          ?readonly=${this.readonly}
          aria-disabled=${ne(this.disabled?"true":void 0)}
          aria-required=${ne(this.required?"true":void 0)}
          aria-label=${ne(this.label||void 0)}
          aria-description=${ne(this.description||void 0)}
          placeholder=${ne(this.placeholder?this.placeholder:void 0)}
          maxlength=${ne(this.maxlength!==""?this.maxlength:void 0)}
          .rows=${this.rows}
          form=${ne(this.form||void 0)}
          @input=${this._handleInput}
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
          @select="${this._handleSelect}"
          @selectionchange="${this._handleSelectionChange}"
        >
${this.value}</textarea
        >
        <nys-errormessage
          ?showError=${this.showError}
          errorMessage=${this._internals.validationMessage||this.errorMessage}
        ></nys-errormessage>
      </label>
    `}},an.VALID_WIDTHS=["sm","md","lg","full"],an.VALID_RESIZE=["vertical","none"],an.styles=G6,an.formAssociated=!0,an);Qe([p({type:String})],je.prototype,"id",2);Qe([p({type:String,reflect:!0})],je.prototype,"name",2);Qe([p({type:String})],je.prototype,"label",2);Qe([p({type:String})],je.prototype,"description",2);Qe([p({type:String})],je.prototype,"placeholder",2);Qe([p({type:String})],je.prototype,"value",2);Qe([p({type:Boolean,reflect:!0})],je.prototype,"disabled",2);Qe([p({type:Boolean,reflect:!0})],je.prototype,"readonly",2);Qe([p({type:Boolean,reflect:!0})],je.prototype,"required",2);Qe([p({type:Boolean,reflect:!0})],je.prototype,"optional",2);Qe([p({type:String})],je.prototype,"form",2);Qe([p({type:Number})],je.prototype,"maxlength",2);Qe([p({reflect:!0})],je.prototype,"width",2);Qe([p({type:Number})],je.prototype,"rows",2);Qe([p({reflect:!0})],je.prototype,"resize",1);Qe([p({type:Boolean,reflect:!0})],je.prototype,"showError",2);Qe([p({type:String})],je.prototype,"errorMessage",2);let L3=je;customElements.get("nys-textarea")||customElements.define("nys-textarea",L3);const K6=xe`
  :host {
    /* Anything that can be overridden should be defined here */

    /* Global Text Input Styles */
    --_nys-textinput-width: 100%;
    --_nys-textinput-height: var(--nys-size-500, 40px);
    --_nys-textinput-radius: var(--nys-radius-md, 4px);
    --_nys-textinput-width-border: var(--nys-border-width-sm, 1px);
    --_nys-textinput-color-border: var(--nys-color-neutral-400, #909395);
    --_nys-textinput-text-color: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-textinput-placeholder-color: var(
      --nys-color-text-weaker,
      var(--nys-color-neutral-500, #797c7f)
    );
    --_nys-textinput-padding: var(--nys-space-100, 8px);
    --_nys-textinput-gap: var(--nys-space-50, 4px);
    --_nys-textinput-background-color: var(
      --nys-color-ink-reverse,
      var(--nys-color-white, #ffffff)
    );
    --_nys-textinput-icon-color: var(
      --nys-color-ink,
      var(--nys-color-neutral-900, #1b1b1b)
    );

    /* Hovered */
    --_nys-textinput-hover-color-outline: var(--nys-color-neutral-900, #1b1b1b);
    --_nys-textinput-hover-width-outline: var(--nys-border-width-sm, 1px);

    /* Focused */
    --_nys-textinput-focus-color-outline: var(--nys-color-focus, #004dd1);
    --_nys-textinput-focus-width-outline: var(--nys-border-width-sm, 1px);

    /* Disabled */
    --_nys-textinput-disabled-color: var(--nys-color-neutral-10, #f6f6f6);
    --_nys-textinput-disabled-color-border: var(
      --nys-color-neutral-200,
      #bec0c1
    );
    --_nys-textinput-disabled-color-text: var(
      --nys-color-text-disabled,
      var(--nys-color-neutral-200, #bec0c1)
    );

    /* Global Font Styles */
    --_nys-textinput-family-ui: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-textinput-size-ui-md: var(--nys-font-size-ui-md, 16px);
    --_nys-textinput-weight-ui: var(--nys-font-weight-regular, 400);
    --_nys-textinput-lineheight-ui: var(--nys-font-lineheight-ui-md, 24px);
    --nys-textinput-letterspacing-ui: var(
      --nys-font-letterspacing-ui-md,
      var(--nys-font-letterspacing-400, 0.044px)
    );
    --_nys-textinput-color-ui: var(--nys-color-ink, #1b1b1b);
  }

  :host([width="sm"]) {
    --_nys-textinput-width: var(--nys-form-width-sm, 88px);
  }

  :host([width="md"]) {
    --_nys-textinput-width: var(--nys-form-width-md, 200px);
  }

  :host([width="lg"]) {
    --_nys-textinput-width: var(--nys-form-width-lg, 384px);
  }

  :host([width="full"]) {
    --_nys-textinput-width: 100%;
    flex: 1; /* stretches width for flex container */
  }

  :host([showError]) {
    --_nys-textinput-color-border: var(--nys-color-danger, #b52c2c);
  }

  .nys-textinput {
    font-weight: var(--_nys-textinput-weight-ui);
    font-family: var(--_nys-textinput-family-ui);
    line-height: var(--_nys-textinput-lineheight-ui);
    letter-spacing: var(--nys-textinput-letterspacing-ui);
    color: var(--_nys-textinput-color-ui);
    gap: var(--_nys-textinput-gap);
    display: flex;
    flex-direction: column;
  }

  .nys-textinput__mask-overlay {
    position: absolute;
    margin: calc(
      var(--_nys-textinput-padding) + var(--_nys-textinput-width-border)
    );
    color: var(--nys-color-text-weaker, #797c7f);
    display: inline;
    overflow: hidden;
    white-space: nowrap;
    width: stretch;
    width: -webkit-fill-available;
    width: -moz-available;
    font: inherit;
    letter-spacing: normal;
  }

  .nys-textinput__input {
    color: var(--_nys-textinput-text-color);
    border-radius: var(--_nys-textinput-radius);
    border: solid var(--_nys-textinput-color-border)
      var(--_nys-textinput-width-border);
    padding: var(--_nys-textinput-padding);
    width: 100%;
    height: var(--_nys-textinput-height);
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    background-color: transparent;
    position: relative;
    font: inherit;
  }
  .nys-textinput__input::placeholder {
    color: var(--_nys-textinput-placeholder-color);
  }

  .nys-textinput__buttoncontainer {
    width: var(--_nys-textinput-width);
    max-width: 100%;
    display: flex;
  }

  .nys-textinput__buttoncontainer.has-end-button .nys-textinput__input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
  }

  .nys-textinput__buttoncontainer.has-start-button .nys-textinput__input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: none;
  }

  .nys-textinput__container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    background-color: var(--_nys-textinput-background-color);
    border-radius: var(--_nys-textinput-radius);
  }

  ::slotted(nys-button) {
    --_nys-button-height: var(--_nys-textinput-height);
    --_nys-button-radius-left: var(--_nys-textinput-radius);
    --_nys-button-radius-right: var(--_nys-textinput-radius);
    --_nys-button-color-bg-disabled: var(--_nys-textinput-disabled-color);
    --_nys-button-color-border-disabled: var(
      --_nys-textinput-disabled-color-text
    );
    --_nys-button-color-text-disabled: var(
      --_nys-textinput-disabled-color-text
    );
    --_nys-button-width-border: var(--_nys-textinput-width-border);
    z-index: 1; /* to make sure the button outline renders on top of the input */
  }

  .nys-textinput__buttoncontainer.has-start-button ::slotted(nys-button) {
    --_nys-button-radius-right: 0;
  }

  .nys-textinput__buttoncontainer.has-end-button ::slotted(nys-button) {
    --_nys-button-radius-left: 0;
  }

  .eye-icon {
    position: absolute;
    right: var(--nys-space-50, 4px);
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: var(--_nys-textinput-icon-color);
    --_nys-button-color-bg: var(--_nys-textinput-background-color);
    --_nys-button-color-bg-hover: var(--_nys-textinput-background-color);
    --_nys-button-color-bg-active: var(--_nys-textinput-background-color);
    --_nys-button-offset-focus: calc(
      var(--_nys-button-width-focus) * -1
    ); /* Needs to be negative of the offset width */
    --_nys-button-padding-y: var(--nys-space-50, 4px);
    --_nys-button-padding-x: var(--nys-space-50, 4px);
    --_nys-button-height: var(--nys-size-300, 32px);
    --_nys-button-width: var(--nys-size-400, 32px);
  }

  /* Hovered */
  .nys-textinput__input:hover:not(:disabled):not(:focus) {
    outline: solid var(--_nys-textinput-hover-width-outline)
      var(--_nys-textinput-hover-color-outline);
    border-color: var(--_nys-textinput-hover-color-outline);
  }

  /* Focused */
  .nys-textinput__input:focus {
    outline: solid var(--_nys-textinput-focus-width-outline)
      var(--_nys-textinput-focus-color-outline);
    border-color: var(--_nys-textinput-focus-color-outline);
    caret-color: var(--_nys-textinput-focus-color-outline);
  }

  /* Disabled */
  .nys-textinput__input:disabled,
  .nys-textinput__input:disabled::placeholder,
  .nys-textinput__input:disabled + .eye-icon {
    background-color: var(--_nys-textinput-disabled-color);
    border-color: var(--_nys-textinput-disabled-color-border);
    color: var(--_nys-textinput-disabled-color-text);
    cursor: not-allowed;
  }
`;var J6=Object.defineProperty,F6=Object.getOwnPropertyDescriptor,De=(r,i,o,c)=>{for(var u=c>1?void 0:c?F6(i,o):i,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=(c?v(i,o,u):v(u))||u);return c&&u&&J6(i,o,u),u};let W6=0;var ln;const Ee=(ln=class extends ce{constructor(){super(),this.id="",this.name="",this._type="text",this.label="",this.description="",this.placeholder="",this.value="",this.disabled=!1,this.readonly=!1,this.required=!1,this.optional=!1,this.form="",this.pattern="",this.maxlength=null,this.width="full",this.step=null,this.min=null,this.max=null,this.showError=!1,this.errorMessage="",this.showPassword=!1,this._originalErrorMessage="",this._hasUserInteracted=!1,this._maskPatterns={tel:"(___) ___-____"},this._internals=this.attachInternals()}get type(){return this._type}set type(r){this._type=ln.VALID_TYPES.includes(r)?r:"text"}async updated(r){var i,o;if(r.has("width")&&(await Promise.resolve(),this.width=ln.VALID_WIDTHS.includes(this.width)?this.width:"full"),r.has("disabled")&&(this._validateButtonSlot("startButton"),this._validateButtonSlot("endButton")),r.has("type")){const c=this._maskPatterns[this.type],u=(i=this.shadowRoot)==null?void 0:i.querySelector("input");if(u)if(c)u.maxLength=c.length,this._updateOverlay(u.value,c);else{u.removeAttribute("maxLength");const f=(o=this.shadowRoot)==null?void 0:o.querySelector(".nys-textinput__mask-overlay");f&&(f.textContent="")}}}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-textinput-${Date.now()}-${W6++}`),this._originalErrorMessage=this.errorMessage??"",this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}formResetCallback(){this.value=""}_setValue(){this._internals.setFormValue(this.value),this._manageRequire()}_manageRequire(){var r,i;const o=(r=this.shadowRoot)==null?void 0:r.querySelector("input");if(!o)return;const c=this.errorMessage||"This field is required";this.required&&(!this.value||((i=this.value)==null?void 0:i.trim())==="")?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},c,o)):(this._internals.ariaRequired="false",this._internals.setValidity({}),this._hasUserInteracted=!1)}_setValidityMessage(r=""){var i,o;const c=(i=this.shadowRoot)==null?void 0:i.querySelector("input");if(!c)return;this.showError=!!r,(o=this._originalErrorMessage)!=null&&o.trim()&&r!==""?this.errorMessage=this._originalErrorMessage:this.errorMessage=r;const u=r?{customError:!0}:{};this._internals.setValidity(u,this.errorMessage,c)}_validate(){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("input");if(!i)return;const o=i.validity;let c="";o.valueMissing?c="This field is required":o.typeMismatch?c="Invalid format for this type":o.patternMismatch?c="Invalid format":o.tooShort?c=`Value is too short. Minimum length is ${i.minLength}`:o.tooLong?c=`Value is too long. Maximum length is ${i.maxLength}`:o.rangeUnderflow?c=`Value must be at least ${i.min}`:o.rangeOverflow?c=`Value must be at most ${i.max}`:o.stepMismatch?c="Invalid step value":c=i.validationMessage,this._setValidityMessage(c)}checkValidity(){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("input");return i?i.checkValidity():!0}_handleInvalid(r){var i;r.preventDefault(),this._hasUserInteracted=!0,this._validate();const o=(i=this.shadowRoot)==null?void 0:i.querySelector("input");if(o){const c=this._internals.form;c?Array.from(c.elements).find(u=>typeof u.checkValidity=="function"&&!u.checkValidity())===this&&o.focus():o.focus()}}_togglePasswordVisibility(){this.showPassword=!this.showPassword}_updateOverlay(r,i){var o;const c=(o=this.shadowRoot)==null?void 0:o.querySelector(".nys-textinput__mask-overlay");if(!c)return;const u=r,f=i.slice(u.length);c.textContent=u+f}_applyMask(r,i){const o=r.replace(/\D/g,"");let c="";if(this.type==="tel")return o.length>0&&(c="("+o.substring(0,3)),o.length>=4&&(c+=") "+o.substring(3,6)),o.length>6&&(c+="-"+o.substring(6,10)),c;let u=0;for(let f=0;f<i.length;f++)if(i[f]==="_"||i[f].match(/[d9]/i))if(u<o.length)c+=o[u++];else break;else c+=i[f];return c}_handleInput(r){const i=r.target;let o=i.value;const c=this._maskPatterns[this.type];c&&(o=this._applyMask(o,c),i.value=o,this._updateOverlay(o,c)),this.value=o,this._internals.setFormValue(this.value),this._hasUserInteracted&&this._validate(),this.dispatchEvent(new CustomEvent("nys-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this._hasUserInteracted||(this._hasUserInteracted=!0),this._validate(),this.dispatchEvent(new Event("nys-blur"))}_validateButtonSlot(r){var i,o;const c=(i=this.shadowRoot)==null?void 0:i.querySelector('slot[name="'+r+'"]'),u=(o=this.shadowRoot)==null?void 0:o.querySelector(".nys-textinput__buttoncontainer");if(!c||!u)return;const f=c.assignedElements();let v=!1;f.forEach(A=>{A instanceof HTMLElement&&A.tagName.toLowerCase()==="nys-button"&&!v?(v=!0,A.setAttribute("size","sm"),A.setAttribute("variant","primary"),this.disabled?A.setAttribute("disabled","true"):A.removeAttribute("disabled")):(console.warn("The '"+r+"' slot only accepts a single <nys-button> element. Removing invalid or extra node:",A),A.remove())}),r==="startButton"?u.classList.toggle("has-start-button",v):r==="endButton"&&u.classList.toggle("has-end-button",v)}render(){return L`
      <div class="nys-textinput">
        <nys-label
          for=${this.id}
          label=${this.label}
          description=${this.description}
          flag=${this.required?"required":this.optional?"optional":""}
        >
          <slot name="description" slot="description">${this.description}</slot>
        </nys-label>
        <div class="nys-textinput__buttoncontainer">
          <slot
            name="startButton"
            @slotchange=${this._validateButtonSlot("startButton")}
          ></slot>
          <div class="nys-textinput__container">
            <span class="nys-textinput__mask-overlay"></span>
            <input
              class="nys-textinput__input"
              type=${this.type==="password"?this.showPassword?"text":"password":this.type}
              name=${this.name}
              id=${this.id}
              ?disabled=${this.disabled}
              ?required=${this.required}
              ?readonly=${this.readonly}
              aria-required=${this.required}
              aria-disabled="${this.disabled}"
              aria-label="${[this.label,this.description].filter(Boolean).join(" ")}"
              .value=${this.value}
              placeholder=${ne(this.placeholder?this.placeholder:void 0)}
              pattern=${ne(this.pattern?this.pattern:void 0)}
              min=${ne(this.min!==""?this.min:void 0)}
              maxlength=${ne(this.maxlength!==""?this.maxlength:void 0)}
              step=${ne(this.step!==""?this.step:void 0)}
              max=${ne(this.max!==""?this.max:void 0)}
              form=${ne(this.form?this.form:void 0)}
              @input=${this._handleInput}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
            />
            ${this.type==="password"?L` <nys-button
                  class="eye-icon"
                  id="password-toggle"
                  suffixIcon="slotted"
                  ariaLabel="password toggle"
                  .onClick=${()=>!this.disabled&&this._togglePasswordVisibility()}
                  variant="ghost"
                  size="sm"
                >
                  <nys-icon
                    slot="suffix-icon"
                    size="2xl"
                    name=${this.showPassword?"visibility_off":"visibility"}
                  ></nys-icon>
                </nys-button>`:""}
          </div>
          <slot
            name="endButton"
            @slotchange=${this._validateButtonSlot("endButton")}
          ></slot>
        </div>
        <nys-errormessage
          ?showError=${this.showError}
          errorMessage=${this.errorMessage}
        ></nys-errormessage>
      </div>
    `}},ln.VALID_TYPES=["email","number","password","search","tel","text","url"],ln.VALID_WIDTHS=["sm","md","lg","full"],ln.styles=K6,ln.formAssociated=!0,ln);De([p({type:String})],Ee.prototype,"id",2);De([p({type:String,reflect:!0})],Ee.prototype,"name",2);De([p({reflect:!0})],Ee.prototype,"type",1);De([p({type:String})],Ee.prototype,"label",2);De([p({type:String})],Ee.prototype,"description",2);De([p({type:String})],Ee.prototype,"placeholder",2);De([p({type:String})],Ee.prototype,"value",2);De([p({type:Boolean,reflect:!0})],Ee.prototype,"disabled",2);De([p({type:Boolean,reflect:!0})],Ee.prototype,"readonly",2);De([p({type:Boolean,reflect:!0})],Ee.prototype,"required",2);De([p({type:Boolean,reflect:!0})],Ee.prototype,"optional",2);De([p({type:String})],Ee.prototype,"form",2);De([p({type:String})],Ee.prototype,"pattern",2);De([p({type:Number})],Ee.prototype,"maxlength",2);De([p({reflect:!0})],Ee.prototype,"width",2);De([p({type:Number})],Ee.prototype,"step",2);De([p({type:Number})],Ee.prototype,"min",2);De([p({type:Number})],Ee.prototype,"max",2);De([p({type:Boolean,reflect:!0})],Ee.prototype,"showError",2);De([p({type:String})],Ee.prototype,"errorMessage",2);De([bt()],Ee.prototype,"showPassword",2);let H3=Ee;customElements.get("nys-textinput")||customElements.define("nys-textinput",H3);const I6=xe`
  :host {
    /* Global Toggle Styles */
    --_nys-toggle-width: var(--nys-font-size-8xl, 44px);
    --_nys-toggle-height: var(--nys-size-300, 24px);
    --_nys-toggle-border-radius: var(--nys-radius-round, 1776px);
    --_nys-toggle-width-border: var(--nys-border-width-md, 2px);
    --_nys-toggle-slider-diameter: var(--nys-font-size-lg, 18px);
    --_nys-toggle-slider-offset: calc(
      (var(--_nys-toggle-height) - var(--_nys-toggle-slider-diameter)) / 2
    );
    --_nys-toggle-slider-checked-translate: calc(
      var(--_nys-toggle-width) - var(--_nys-toggle-slider-diameter) - var(
          --_nys-toggle-slider-offset
        ) -
        2px
    );
    --_nys-toggle-slider-round: var(--nys-radius-round, 1776px);
    /* space between toggle and it's label */
    --_nys-toggle-gap: var(--nys-space-150, 12px);

    --_nys-toggle-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-toggle-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-toggle-font-weight: var(--nys-font-weight-regular, 400);
    --_nys-toggle-line-height: var(--nys-font-lineheight-ui-md, 24px);

    --_nys-toggle-transition-duration: 0.3s;

    /* Focus outline */
    --_nys-toggle-border-focus-color: var(--nys-color-focus, #004dd1);
    --_nys-toggle-border-width-focus: var(--nys-border-width-md, 2px);

    /* Slider colors */
    --_nys-toggle-color-base: var(--nys-color-neutral-500, #797c7f);
    --_nys-toggle-color-base-weak: var(--nys-color-neutral-100, #d0d0ce);
    --_nys-toggle-color-theme: var(
      --nys-color-theme,
      var(--nys-color-state-blue-700, #154973)
    );
    --_nys-toggle-color-neutral: var(--nys-color-neutral-600, #62666a);
    --_nys-toggle-color-neutral-700: var(--nys-color-neutral-700, #4a4d4f);
    --_nys-toggle-color-theme-strong: var(
      --nys-color-theme-strong,
      var(--nys-color-state-blue-800, #0e324f)
    );
    --_nys-toggle-color-theme-stronger: var(
      --nys-color-theme-stronger,
      var(--nys-color-state-blue-900, #081b2b)
    );
    --_nys-toggle-color-ink-reverse: var(
      --nys-color-ink-reverse,
      var(--nys-color-white, #fff)
    );

    /* Font sizes, color, and spacing for labels, descriptions, and icons */
    --_nys-toggle-text-color: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-toggle-disabled-color: var(
      --nys-color-text-weaker,
      var(--nys-color-neutral-500, #797c7f)
    );
    --_nys-toggle-icon-font-size-xs: var(
      --nys-font-size-body-xs,
      var(--nys-font-size-xs, 12px)
    );
    --_nys-toggle-icon-font-size-sm: var(
      --nys-font-size-body-sm,
      var(--nys-font-size-sm, 14px)
    );
  }

  /* Slotted styling (e.g. HTML <p> tags for descriptions) */
  ::slotted([slot^="description"]) {
    font-style: italic;
    margin: 0;
  }
  slot[name="description"] {
    font-style: italic;
    text-align: left;
    display: flex;
  }

  /* Toggle switch overall container */
  .nys-toggle__content {
    display: flex;
    gap: var(--_nys-toggle-gap);
  }

  /* Label & description text container */
  .nys-toggle__text {
    color: var(--_nys-toggle-text-color);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: var(--_nys-toggle-font-size);
    font-family: var(--_nys-toggle-font-family);
    font-weight: var(--_nys-toggle-font-weight);
    line-height: var(--_nys-toggle-line-height);
  }

  .nys-toggle__content:has(input:disabled) .nys-toggle__text * {
    color: var(--_nys-toggle-disabled-color);
    cursor: not-allowed;
  }

  /* Toggle Switch component */
  .nys-toggle__toggle {
    position: relative;
    display: inline-block;
    width: var(--_nys-toggle-width);
    min-width: var(--_nys-toggle-width);
    max-width: var(--_nys-toggle-width);
    height: var(--_nys-toggle-height);
    min-height: var(--_nys-toggle-height);
    max-height: var(--_nys-toggle-height);
  }

  .nys-toggle__toggle input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    border-radius: var(--_nys-toggle-border-radius);
    outline-offset: var(--_nys-toggle-width-border);
    width: var(--_nys-toggle-width);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--_nys-toggle-color-base);
  }

  .knob {
    content: "";
    position: absolute;
    height: var(--_nys-toggle-slider-diameter);
    width: var(--_nys-toggle-slider-diameter);
    left: var(--_nys-toggle-slider-offset);
    bottom: var(--_nys-toggle-slider-offset);
    border-radius: var(--_nys-toggle-slider-round);
    background-color: var(--_nys-toggle-color-ink-reverse, #fff);
    transition: all var(--_nys-toggle-transition-duration)
      cubic-bezier(0.27, 0.2, 0.25, 1.51);
    overflow: hidden;
    display: flex; /* Center icon inside the knob */
    align-items: center;
    justify-content: center;
  }

  /* Switch BG: Checked */
  input:checked + .slider {
    background-color: var(--_nys-toggle-color-theme, #154973);
  }

  /* Switch BG: Hover */
  .slider:hover {
    background-color: var(--_nys-toggle-color-neutral, #62666a);
  }

  /* Switch BG: Hover + Checked */
  input:checked + .slider:hover {
    background-color: var(--_nys-toggle-color-theme-strong, #0e324f);
  }

  /* Switch Icon color: Hover */
  .slider:hover .knob .toggle-icon {
    color: var(--_nys-toggle-color-neutral, #62666a);
  }

  /* Switch Icon color: Hover + Checked */
  input:checked:not(:disabled) + .slider:hover .knob .toggle-icon {
    color: var(--_nys-toggle-color-theme-strong, #0e324f);
  }

  /* Switch BG: Active */
  input:active:not(:disabled) + .slider {
    background-color: var(--_nys-toggle-color-neutral-700, #4a4d4f);
    outline: solid var(--_nys-toggle-border-width-focus)
      var(--_nys-toggle-border-focus-color);
  }

  /* Switch BG: Active + Checked */
  input:active:checked + .slider {
    background-color: var(--_nys-toggle-color-theme-stronger, #081b2b);
  }

  /* Switch Outline: Focus */
  input:focus + .slider {
    outline: solid var(--_nys-toggle-border-width-focus)
      var(--_nys-toggle-border-focus-color);
  }

  /* Switch Knob: Checked */
  input:checked + .slider .knob {
    transform: translateX(var(--_nys-toggle-slider-checked-translate));
  }

  /* Icon Styling */
  .toggle-icon {
    position: absolute;
    color: var(--_nys-toggle-color-base);
  }
  input:checked + .slider .knob .toggle-icon {
    color: var(--_nys-toggle-color-theme, #154973);
  }
  input:active + .slider .knob .toggle-icon {
    color: var(--_nys-toggle-color-neutral-700, #4a4d4f);
  }
  input:active:checked + .slider .knob .toggle-icon {
    color: var(--_nys-toggle-color-theme-stronger, #081b2b);
  }
  :host([size="sm"]) .toggle-icon {
    font-size: var(--_nys-toggle-icon-font-size-xs);
  }
  :host([size="md"]) .toggle-icon {
    font-size: var(--_nys-toggle-icon-font-size-sm);
  }
  /* If 'cap' is not supported, account for the extra padding from svg due to nys-icon's 'display:inline' */
  @supports not (font-size: 1cap) {
    :host([size="sm"]) .toggle-icon {
      font-size: var(--_nys-toggle-icon-font-size-xs);
    }
    :host([size="md"]) .toggle-icon {
      font-size: calc(var(--_nys-toggle-icon-font-size-sm) - 1px);
    }
  }

  /*** Disabled State ***/
  /* Switch BG: Disabled */
  input:disabled + .slider,
  input:disabled + .slider:hover {
    background-color: var(--_nys-toggle-color-base-weak, #d0d0ce);
    cursor: not-allowed;
  }
  input:disabled + .slider .knob .toggle-icon,
  input:disabled:active + .slider .knob .toggle-icon {
    color: var(--_nys-toggle-color-base-weak, #d0d0ce);
  }

  /* Sizes */
  :host([size="sm"]) {
    --_nys-toggle-width: var(--nys-toggle-font-size-6xl, 36px);
    --_nys-toggle-height: var(--nys-toggle-size-250, 20px);
    --_nys-toggle-slider-diameter: var(--nys-toggle--font-size-md, 16px);
    --_nys-toggle-icon-font-size: var(--nys-toggle-font-size-sm, 14px);
    --_nys-toggle-gap: var(--nys-space-100, 8px);
  }

  :host([size="md"]) {
    --_nys-toggle-width: var(--nys-toggle-font-size-8xl, 44px);
    --_nys-toggle-height: var(--nys-toggle-size-300, 24px);
    --_nys-toggle-slider-diameter: var(--nys-toggle-font-size-xl, 20px);
    --_nys-toggle-icon-font-size: var(--nys-toggle-font-size-md, 16px);
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      --toggle-transition-duration: 0s; /* Disable animation */
    }
  }
`;var P6=Object.defineProperty,eu=Object.getOwnPropertyDescriptor,s1=(r,i,o,c)=>{for(var u=c>1?void 0:c?eu(i,o):i,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=(c?v(i,o,u):v(u))||u);return c&&u&&P6(i,o,u),u};let tu=0;var Ea;const Jt=(Ea=class extends ce{constructor(){super(),this.id="",this.name="",this.value="",this.checked=!1,this.disabled=!1,this.noIcon=!1,this.label="",this.description="",this._size="md",this.form="",this._internals=this.attachInternals()}get size(){return this._size}set size(r){this._size=Ea.VALID_SIZES.includes(r)?r:"md"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-toggle-${Date.now()}-${tu++}`)}updated(r){(r.has("checked")||r.has("value"))&&this._internals.setFormValue(this.checked?this.value:null)}_emitChangeEvent(){this.dispatchEvent(new CustomEvent("nys-change",{detail:{checked:this.checked},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this.dispatchEvent(new Event("nys-blur"))}_handleChange(r){const{checked:i}=r.target;this.checked=i,this._emitChangeEvent()}_handleKeyDown(r){!this.disabled&&(r.key===" "||r.key==="Enter")&&(r.preventDefault(),this.checked=!this.checked,this._emitChangeEvent())}render(){return L`
      <label class="nys-toggle">
        <div class="nys-toggle__content">
          <div class="nys-toggle__toggle">
            <input
              id="${this.id}"
              type="checkbox"
              name="${ne(this.name?this.name:void 0)}"
              .value=${this.value}
              form=${this.form}
              .checked=${this.checked}
              ?disabled=${this.disabled}
              role="switch"
              aria-checked="${this.checked?"true":"false"}"
              aria-disabled="${this.disabled?"true":"false"}"
              @change=${this._handleChange}
              @focus=${this._handleFocus}
              @blur=${this._handleBlur}
              @keydown=${this._handleKeyDown}
            />
            <span class="slider">
              <div class="knob">
                ${this.noIcon?"":L`<nys-icon
                      class="toggle-icon"
                      name="${this.checked?"check":"close"}"
                      size="2xl"
                    ></nys-icon>`}
              </div>
            </span>
          </div>
          <div class="nys-toggle__text">
            <div class="nys-toggle__label">${this.label}</div>
            <slot name="description">${this.description}</slot>
          </div>
        </div>
      </label>
    `}},Ea.VALID_SIZES=["sm","md"],Ea.styles=I6,Ea.formAssociated=!0,Ea);s1([p({type:String})],Jt.prototype,"id",2);s1([p({type:String,reflect:!0})],Jt.prototype,"name",2);s1([p({type:String})],Jt.prototype,"value",2);s1([p({type:Boolean,reflect:!0})],Jt.prototype,"checked",2);s1([p({type:Boolean,reflect:!0})],Jt.prototype,"disabled",2);s1([p({type:Boolean})],Jt.prototype,"noIcon",2);s1([p({type:String})],Jt.prototype,"label",2);s1([p({type:String})],Jt.prototype,"description",2);s1([p({reflect:!0})],Jt.prototype,"size",1);s1([p({type:String})],Jt.prototype,"form",2);let T3=Jt;customElements.get("nys-toggle")||customElements.define("nys-toggle",T3);const nu=xe`
  :host {
    /* Global Tooltip Styles */
    --_nys-tooltip-color: var(--nys-color-text-reverse, #ffffff);
    --_nys-tooltip-background: var(--nys-color-ink, #1b1b1b);
    --_nys-tooltip-border-radius: var(--nys-radius-md, 4px);
    --_nys-tooltip-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-tooltip-font-size: var(--nys-type-size-ui-sm, 14px);
    --_nys-tooltip-letterspacing: var(--nys-font-letterspacing-ui-sm, 0.044px);
    --_nys-tooltip-lineheight: var(--nys-font-lineheight-ui-sm, 24px);
  }

  .nys-tooltip__main {
    position: relative;
    width: fit-content;
  }

  .nys-tooltip__wrapper {
    width: fit-content;
    display: flex;
    cursor: pointer;
  }

  .nys-tooltip__trigger {
    display: flex;
  }

  .nys-tooltip__content {
    position: absolute;
    display: none;
    max-width: 400px;
    width: max-content;
    max-height: 120px;
    padding: var(--nys-space-50, 4px) var(--nys-space-100, 8px);
    background: var(--_nys-tooltip-background);
    border-radius: var(--_nys-tooltip-border-radius);
    cursor: auto;
    z-index: 1;
  }

  .nys-tooltip__inner {
    display: block;
    color: var(--_nys-tooltip-color);
    font-family: var(--_nys-tooltip-font-family);
    font-size: var(--_nys-tooltip-font-size);
    font-weight: 400;
    line-height: var(--_nys-tooltip-lineheight);
    letter-spacing: var(--_nys-tooltip-letterspacing);
    white-space: normal;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  /* Tooltip Arrow (default) */
  .nys-tooltip__arrow {
    position: absolute;
    width: 14px;
    height: 6px;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="6" viewBox="0 0 15 6" fill="none"><path d="M8.15079 5.44218C7.7763 5.76317 7.2237 5.76317 6.84921 5.44218L0.5 0H14.5L8.15079 5.44218Z" fill="%231B1B1B"/></svg>')
      no-repeat center;
  }

  .nys-tooltip__content[active] {
    display: block;
  }

  /* ===================== POSITIONING ===================== */
  /* Top */
  :host([position="top"]) .nys-tooltip__content {
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 10px;
  }

  :host([position="top"]) .nys-tooltip__arrow {
    top: 100%;
    left: var(--arrow-offset-x, 50%);
    transform: translateX(-50%);
  }

  /* Bottom */
  :host([position="bottom"]) .nys-tooltip__content {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 10px;
  }

  :host([position="bottom"]) .nys-tooltip__arrow {
    bottom: 100%;
    left: var(--arrow-offset-x, 50%);
    transform: translateX(-50%) rotate(180deg);
  }

  /* Left */
  :host([position="left"]) .nys-tooltip__content {
    left: auto;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 10px;
  }

  :host([position="left"]) .nys-tooltip__arrow {
    left: 100%;
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);
    margin-left: -4px;
  }
  /* Right */
  :host([position="right"]) .nys-tooltip__content {
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 10px;
  }

  :host([position="right"]) .nys-tooltip__arrow {
    right: 100%;
    top: 50%;
    transform: translateY(-50%) rotate(90deg);
    margin-right: -4px;
  }

  :host([inverted]) .nys-tooltip__content {
    --_nys-tooltip-color: var(--nys-color-text, #1b1b1b);
    --_nys-tooltip-background: var(--nys-color-ink-reverse, #fff);
  }

  :host([inverted]) .nys-tooltip__arrow {
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="6" viewBox="0 0 15 6" fill="none"><path d="M8.15079 5.44218C7.7763 5.76317 7.2237 5.76317 6.84921 5.44218L0.5 0H14.5L8.15079 5.44218Z" fill="white"/></svg>')
      no-repeat center;
  }

  @media (max-width: 400px) {
    .nys-tooltip__content {
      max-width: calc(
        100vw - 2rem
      ); /* 2rem = 32px = 16px margin on each side */
    }
  }
`;var au=Object.defineProperty,lu=Object.getOwnPropertyDescriptor,Ta=(r,i,o,c)=>{for(var u=c>1?void 0:c?lu(i,o):i,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=(c?v(i,o,u):v(u))||u);return c&&u&&au(i,o,u),u};let iu=0;const O3=class extends ce{constructor(){super(),this.id="",this.text="",this.inverted=!1,this.focusable=!1,this._active=!1,this._userHasSetPosition=!1,this._originalUserPosition=null,this._internallyUpdatingPosition=!1,this._position=null,this._handleTooltipEnter=()=>{if(this._active=!0,this._addScrollListeners(),this._userHasSetPosition&&this._originalUserPosition&&this._doesPositionFit(this._originalUserPosition)){this.position=this._originalUserPosition,this.updateComplete.then(()=>{var i;const o=(i=this.shadowRoot)==null?void 0:i.querySelector(".nys-tooltip__content");o&&this._shiftTooltipIntoViewport(o)});return}this.autoPositionTooltip()},this._handleBlurOrMouseLeave=()=>{var i;this._active=!1,this._removeScrollListeners();const o=(i=this.shadowRoot)==null?void 0:i.querySelector(".nys-tooltip__content");o&&this._resetTooltipPositioningStyles(o)},this._handleScrollOrResize=()=>{this._active&&(this._userHasSetPosition&&this._originalUserPosition?this._doesPositionFit(this._originalUserPosition)?(this._setInternalPosition(this._originalUserPosition),this.updateComplete.then(()=>{var i;const o=(i=this.shadowRoot)==null?void 0:i.querySelector(".nys-tooltip__content");o&&this._shiftTooltipIntoViewport(o)})):this.autoPositionTooltip():this.autoPositionTooltip())},this._handleEscapeKey=i=>{var o;if(i.key==="Escape"&&this._active){this._active=!1,this._removeScrollListeners();const c=(o=this.shadowRoot)==null?void 0:o.querySelector(".nys-tooltip__content");c&&this._resetTooltipPositioningStyles(c)}}}get position(){return this._position}set position(i){const o=this._position;this._position=i,this.requestUpdate("position",o),this._internallyUpdatingPosition||(this._userHasSetPosition=i!==null,this._originalUserPosition=i)}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-tooltip-${Date.now()}-${iu++}`),window.addEventListener("keydown",this._handleEscapeKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._handleEscapeKey)}get _firstAssignedEl(){var i;const o=(i=this.shadowRoot)==null?void 0:i.querySelector("slot");return o==null?void 0:o.assignedElements({flatten:!0})[0]}firstUpdated(){var i;const o=(i=this.shadowRoot)==null?void 0:i.querySelector("slot");o&&o.addEventListener("slotchange",()=>{const c=this._firstAssignedEl;c&&this._applyFocusBehavior(c)})}updated(i){super.updated(i);const o=this._firstAssignedEl;o&&i.has("text")&&this._passAria(o)}_addScrollListeners(){window.addEventListener("scroll",this._handleScrollOrResize,!0),window.addEventListener("resize",this._handleScrollOrResize)}_removeScrollListeners(){window.removeEventListener("scroll",this._handleScrollOrResize,!0),window.removeEventListener("resize",this._handleScrollOrResize)}_passAria(i){const o=i.tagName.toLowerCase();if(o.startsWith("nys-"))if(o==="nys-icon"){const c=i.getAttribute("ariaLabel")||"",u=c?`${c}, ${this.text}`:this.text;i.setAttribute("ariaLabel",u)}else i.setAttribute("ariaDescription",this.text)}async _applyFocusBehavior(i){var o;if(this.focusable)if(i.tagName.toLowerCase()==="nys-icon"){"updateComplete"in i&&await i.updateComplete;const c=(o=i.shadowRoot)==null?void 0:o.querySelector("svg");c&&c.setAttribute("tabindex","0")}else i.setAttribute("tabindex","0")}_doesPositionFit(i){var o,c;const u=(o=this.shadowRoot)==null?void 0:o.querySelector(".nys-tooltip__wrapper"),f=(c=this.shadowRoot)==null?void 0:c.querySelector(".nys-tooltip__content");if(!u||!f||i==null)return;const v=u.getBoundingClientRect(),A=f.getBoundingClientRect(),k=8,x={top:v.top-k,left:v.left-k,bottom:window.innerHeight-v.bottom-k,right:window.innerWidth-v.right-k};return{top:x.top>=A.height,bottom:x.bottom>=A.height,left:x.left>=A.width,right:x.right>=A.width}[i]}async autoPositionTooltip(){var i,o;const c=(i=this.shadowRoot)==null?void 0:i.querySelector(".nys-tooltip__wrapper"),u=(o=this.shadowRoot)==null?void 0:o.querySelector(".nys-tooltip__content");if(!c||!u)return;const f=c.getBoundingClientRect(),v=8,A={top:f.top-v,left:f.left-v,bottom:window.innerHeight-f.bottom-v,right:window.innerWidth-f.right-v};let k=["top","bottom","right","left"];if(this._userHasSetPosition&&this._originalUserPosition){const O=this._originalUserPosition;O==="left"?k=["left","right","top","bottom"]:O==="right"?k=["right","left","top","bottom"]:O==="top"?k=["top","bottom","right","left"]:O==="bottom"&&(k=["bottom","top","right","left"])}for(const O of k)if(this._doesPositionFit(O)){this._setInternalPosition(O),await this.updateComplete,this._shiftTooltipIntoViewport(u);return}let x="top",H=A.top;for(const O of k)A[O]>H&&(H=A[O],x=O);this._setInternalPosition(x),await this.updateComplete,this._shiftTooltipIntoViewport(u)}_setInternalPosition(i){this._internallyUpdatingPosition=!0,this.position=i,this._internallyUpdatingPosition=!1}_shiftTooltipIntoViewport(i){var o;const c=((o=this.shadowRoot)==null?void 0:o.querySelector(".nys-tooltip__wrapper")).getBoundingClientRect(),u=i.getBoundingClientRect(),f=c.left+c.width/2,v=u.left<0,A=u.right>window.innerWidth;this._resetTooltipPositioningStyles(i),v?(i.style.left="0px",i.style.transform="none"):A&&(i.style.right="0px",i.style.left="auto",i.style.transform="none");const k=i.getBoundingClientRect(),x=(f-k.left)/k.width,H=Math.max(0,Math.min(1,x))*100;i.style.setProperty("--arrow-offset-x",`${H}%`)}_resetTooltipPositioningStyles(i){i.style.left="",i.style.right="",i.style.transform=""}render(){var i;return L`
      <div class="nys-tooltip__main">
        <div
          class="nys-tooltip__wrapper"
          @mouseenter=${this._handleTooltipEnter}
          @mouseleave=${this._handleBlurOrMouseLeave}
          @focusin=${this._handleTooltipEnter}
          @focusout=${this._handleBlurOrMouseLeave}
        >
          <span class="nys-tooltip__trigger">
            <slot></slot>
          </span>
        </div>
        ${(i=this.text)!=null&&i.trim()?L`<div
              id=${this.id}
              class="nys-tooltip__content"
              role="tooltip"
              aria-hidden=${!this._active}
              ?active=${this._active}
            >
              <div class="nys-tooltip__inner">${this.text}</div>
              <span class="nys-tooltip__arrow"></span>
            </div>`:""}
      </div>
    `}};O3.styles=nu;let un=O3;Ta([p({type:String})],un.prototype,"id",2);Ta([p({type:String})],un.prototype,"text",2);Ta([p({type:Boolean,reflect:!0})],un.prototype,"inverted",2);Ta([p({type:Boolean,reflect:!0})],un.prototype,"focusable",2);Ta([bt()],un.prototype,"_active",2);Ta([p({type:String,reflect:!0})],un.prototype,"position",1);customElements.get("nys-tooltip")||customElements.define("nys-tooltip",un);const su=xe`
  :host {
    /* Global Unav Header Styles */
    --_nys-unavheader-gutter: var(--nys-gutter-xs, 20px);
    --_nys-unavheader-bg-color: var(
      --nys-color-surface,
      var(--nys-color-white, #ffffff)
    );
    --_nys-unavheader-text-color: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );

    /* Trustbar, Search Bar, and Language */
    --_nys-unavheader-surface-raised-color: var(
      --nys-color-surface-raised,
      var(--nys-color-neutral-10, #f6f6f6)
    );

    /* Typography */
    font-size: var(--nys-font-size-ui-md, 16px);
    font-weight: var(--nys-font-weight-semibold, 600);
    line-height: var(--nys-font-lineheight-ui-md, 24px);
    font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
  }

  :host {
    display: block;
    width: 100%;
  }

  .nys-unavheader {
    display: grid;
  }

  .nys-unavheader__mainwrapper {
    background-color: var(--_nys-unavheader-bg-color);
    display: flex;
    justify-content: center;
  }

  .nys-unavheader--xs,
  .nys-unavheader--sm,
  .nys-unavheader--md,
  .nys-unavheader--lg,
  .nys-unavheader--xl {
    display: none;
  }

  .nys-unavheader__officialmessage {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--nys-space-100, 8px);
    height: fit-content;
    /* Typography */
    font-size: var(--nys-font-size-ui-xs, 12px);
    font-weight: var(--nys-font-weight-regular, 400);
    line-height: var(--nys-font-lineheight-ui-xs, 20px);
    font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
  }

  .nys-unavheader__maincontent {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
  }

  a#nys-unavheader__logolink {
    outline-offset: var(--nys-space-2px, 2px);
  }

  .nys-unavheader__logo svg {
    vertical-align: top;
    height: var(--nys-size-500, 40px);
    width: auto;
  }

  .nys-unavheader__toptrustbar {
    display: flex;
    justify-content: space-between;
    background-color: var(--nys-color-neutral-100, #d0d0ce);
    padding: var(--nys-space-100, 8px) var(--_nys-unavheader-gutter);
    cursor: pointer;
  }

  .nys-unavheader__toptrustbar * {
    cursor: pointer;
  }

  .nys-unavheader__left,
  .nys-unavheader__right {
    display: flex;
    align-items: center;
    gap: var(--nys-space-300, 24px);
    padding-top: var(--nys-space-100, 8px);
    padding-bottom: var(--nys-space-100, 8px);
  }

  .nys-unavheader__left {
    order: 2;
    padding-left: var(--_nys-unavheader-gutter);
  }
  .nys-unavheader__right {
    order: 3;
    padding-right: var(--_nys-unavheader-gutter);
  }

  .nys-unavheader__trustbarwrapper {
    order: 1;
    width: 100%;
  }

  #nys-unavheader__translate,
  #nys-unavheader__searchbutton {
    --_nys-button-color-text: var(--nys-color-state-blue-700, #154973);
    --_nys-button-color-text-hover: var(--nys-color-state-blue-700, #154973);
    --_nys-button-color-text-active: var(--nys-color-state-blue-700, #154973);
  }

  .nys-unavheader__iconbutton {
    --_nys-button-width: var(--nys-size-400, 32px);
    --_nys-button-height: var(--nys-size-400, 32px);
    --_nys-button-padding-y: 0;
    --_nys-button-padding-x: 0;
  }

  .nys-unavheader__search {
    width: var(--nys-form-width-md, 200px);
    transition: width 0.5s ease;
  }

  /* Grow size on focus */
  .nys-unavheader__search:focus {
    width: var(--nys-form-width-lg, 384px);
  }

  #nys-unavheader__official {
    width: max-content;
    color: var(--_nys-unavheader-text-color);
  }

  #nys-unavheader__know {
    width: max-content;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: var(--nys-space-50, 4px);

    --_nys-button-height: var(--nys-font-lineheight-ui-xs, 20px);
    --_nys-button-radius: var(--nys-radius-md, 4px);
    --_nys-button-padding-y: var(--nys-space-2px, 2px);
    --_nys-button-padding-x: var(--nys-space-50, 4px);
    --_nys-button-width-border: 0px;
    --_nys-button-text-decoration: underline;
    --_nys-button-color-text: var(--nys-color-link, #004dd1);
    --_nys-button-color-text-hover: var(--nys-color-link-strong, #003ba1);
    --_nys-button-color-text-active: var(--nys-color-link-strongest, #002971);
    --_nys-button-color-bg-hover: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-bg-active: var(--nys-color-transparent, #ffffff00);

    /* typography */
    --_nys-button-font-size: var(--nys-font-size-ui-xs, 12px);
    --_nys-button-font-weight: var(--nys-font-weight-regular, 400);
    --_nys-button-line-height: var(--nys-font-lineheight-ui-xs, 20px);
    --_nys-button-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
  }

  .nys-unavheader__translatewrapper {
    position: relative;
  }

  .nys-unavheader__trustbar.hide,
  .nys-unavheader__languagelist.hide,
  .nys-unavheader__searchdropdown.hide {
    display: none;
  }

  .nys-unavheader__searchdropdown.show {
    background-color: var(--_nys-unavheader-surface-raised-color);
    padding: var(--nys-space-250, 20px) var(--_nys-unavheader-gutter);
  }

  .nys-unavheader__trustbar.show {
    background-color: var(--_nys-unavheader-surface-raised-color);
    color: var(--_nys-unavheader-text-color);
    display: flex;
    justify-content: center;
    padding: var(--nys-space-400, 32px) var(--_nys-unavheader-gutter);
    margin: auto;
  }

  .nys-unavheader__trustcontent {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: var(--nys-space-400, 24px);
    font-weight: var(--nys-font-weight-regular, 400);
    max-width: 1280px;
  }

  .nys-unavheader__trustcontentmessage {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: var(--nys-space-100, 8px);
    line-height: var(--nys-font-lineheight-ui-md, 32px);
  }

  .nys-unavheader__languagelist.show {
    position: absolute;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    width: max-content;
    z-index: 99999;
    background-color: var(--_nys-unavheader-surface-raised-color);
    color: var(--nys-color-state-blue-700, #154973);
    margin-top: var(--nys-space-150, 12px);
    right: 0;
  }

  a.nys-unavheader__languagelink {
    padding: var(--nys-space-200, 16px) var(--nys-space-250, 20px);
    color: var(--nys-color-state-blue-700, #154973);
    text-decoration: none;
  }

  a.nys-unavheader__languagelink:hover {
    background-color: var(--nys-color-neutral-100, #d0d0ce);
  }

  a.nys-unavheader__languagelink:active {
    background-color: var(--nys-color-neutral-200, #bec0c1);
  }

  /* Breakpoints using NYSDS Grid Guidelines */
  @media (min-width: 0) and (max-width: 479px) {
    /* Mobile (XS) */
    :host {
      --_nys-unavheader-gutter: var(--nys-gutter-xs, 20px);
    }

    #nys-unavheader__know {
      --_nys-button-padding-x: 0px;
      --_nys-button-padding-y: 0px;
    }

    .nys-unavheader__officialmessage {
      flex-direction: column;
      align-items: flex-start;
      gap: 0;
    }

    .nys-unavheader--xs {
      display: contents;
    }
  }

  @media (min-width: 480px) and (max-width: 767px) {
    /* Mobile Large (SM - Above 480px) */
    :host {
      --_nys-unavheader-gutter: var(--nys-gutter-sm, 20px);
    }

    .nys-unavheader--sm {
      display: contents;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    /* Tablet (MD - Above 768px) */
    :host {
      --_nys-unavheader-gutter: var(--nys-gutter-md, 32px);
    }
    .nys-unavheader__trustcontent {
      flex-direction: row;
    }

    .nys-unavheader--md {
      display: contents;
    }
    .nys-unavheader__trustbarwrapper {
      order: 4;
    }
    .nys-unavheader__toptrustbar {
      display: none;
    }
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    /* Desktop (LG - Above 1024px) */
    :host {
      --_nys-unavheader-gutter: var(--nys-gutter-lg, 32px);
    }
    .nys-unavheader__languagelist.show {
      margin-top: var(--nys-space-100, 8px);
    }
    .nys-unavheader__trustcontent {
      flex-direction: row;
    }
    .nys-unavheader--lg {
      display: contents;
    }
    .nys-unavheader__trustbarwrapper {
      order: 4;
    }
    .nys-unavheader__toptrustbar {
      display: none;
    }
  }

  @media (min-width: 1280px) {
    /* Desktop Large (XL - Above 1280px) */
    :host {
      --_nys-unavheader-gutter: var(--nys-gutter-xl, 64px);
    }
    .nys-unavheader__trustcontent {
      flex-direction: row;
    }
    .nys-unavheader--xl {
      display: contents;
    }
    .nys-unavheader__trustbarwrapper {
      order: 4;
    }
    .nys-unavheader__toptrustbar {
      display: none;
    }
  }
`,ou=`<svg xmlns="http://www.w3.org/2000/svg" width="91" height="55" viewBox="0 0 91 55" fill="none">
  <path d="M55.1158 7.50499L58.2905 12.6494V7.5189C58.2905 7.5189 58.6487 7.26356 59.5098 7.26356C60.3708 7.26356 60.7378 7.5189 60.7378 7.5189V16.4327C60.7378 16.4327 60.3942 16.689 59.5215 16.689C58.6487 16.689 58.3295 16.4605 58.3295 16.4605L55.1421 11.3171V16.4337C55.1421 16.4337 54.7848 16.69 53.9111 16.69C53.0374 16.69 52.7065 16.4337 52.7065 16.4337V7.51989C52.7065 7.51989 53.0384 7.26456 53.9248 7.26456C54.8112 7.26456 55.1148 7.50697 55.1148 7.50697L55.1158 7.50499Z" fill="#457AA5"/>
  <path d="M67.2209 12.5948H64.9063V14.8709H68.2538C68.2538 14.8709 68.5047 15.1531 68.5047 15.772C68.5047 16.391 68.2538 16.688 68.2538 16.688H62.4589V7.26257H67.9892C67.9892 7.26257 68.2538 7.54572 68.2538 8.17859C68.2538 8.81146 67.9892 9.09362 67.9892 9.09362H64.9063V10.7637H67.2209C67.2209 10.7637 67.4728 11.0598 67.4728 11.6787C67.4728 12.2977 67.2209 12.5948 67.2209 12.5948Z" fill="#457AA5"/>
  <path d="M71.4802 16.4327L68.9791 7.5189C68.9791 7.5189 69.3491 7.26356 70.2101 7.26356C71.0711 7.26356 71.4275 7.5189 71.4275 7.5189L72.6839 12.0434C72.7766 12.3802 72.8166 12.6365 72.8557 12.7845C72.8557 12.7428 72.9221 12.3663 73.0011 12.0573L74.0984 7.5189C74.0984 7.5189 74.5211 7.26356 75.1176 7.26356C75.7141 7.26356 76.084 7.5189 76.084 7.5189L77.3004 12.7845C77.3004 12.6623 77.3795 12.3255 77.4586 12.0573L78.756 7.5189C78.7686 7.5189 79.1132 7.26356 79.9596 7.26356C80.806 7.26356 81.1897 7.5189 81.1897 7.5189L78.6496 16.4327C78.6496 16.4327 78.2922 16.6751 77.4859 16.689C76.5468 16.689 76.2158 16.4327 76.2158 16.4327L75.223 12.2987C75.1449 11.9887 75.0902 11.6529 75.0785 11.5844L74.9184 12.2987L73.9266 16.4327C73.9266 16.4327 73.583 16.689 72.7092 16.689C71.8355 16.689 71.4802 16.4327 71.4802 16.4327Z" fill="#457AA5"/>
  <path d="M54.3485 19.2195L55.4331 21.1579C55.804 21.8176 56.0022 22.5587 56.0285 22.6521C56.0559 22.5587 56.2404 21.8315 56.624 21.1579L57.735 19.2195C57.735 19.2195 58.0659 18.9771 58.8723 18.9771C59.786 18.9771 60.1697 19.2861 60.1697 19.2861L57.2449 24.4295V28.1453C57.2449 28.1453 56.9013 28.4026 56.0276 28.4026C55.1539 28.4026 54.8239 28.1453 54.8239 28.1453V24.3898L51.8991 19.2871C51.8991 19.2871 52.2965 18.9781 53.2082 18.9781C53.9892 18.9781 54.3465 19.2205 54.3465 19.2205L54.3485 19.2195Z" fill="#457AA5"/>
  <path d="M64.6017 28.497C61.4788 28.497 60.117 26.6381 60.117 23.7033C60.117 20.7684 61.4798 18.8827 64.6017 18.8827C67.7237 18.8827 69.0865 20.7674 69.0865 23.7033C69.0865 26.6391 67.711 28.497 64.6017 28.497ZM64.6017 26.6778C65.9235 26.6778 66.6391 25.4667 66.6391 23.7033C66.6391 21.9398 65.9235 20.7138 64.6017 20.7138C63.2799 20.7138 62.5653 21.9398 62.5653 23.7033C62.5653 25.4667 63.2789 26.6778 64.6017 26.6778Z" fill="#457AA5"/>
  <path d="M72.844 28.1463C72.844 28.1463 72.4867 28.4036 71.6129 28.4036C70.7392 28.4036 70.4083 28.1463 70.4083 28.1463V19.3546C70.4083 19.3546 71.4011 18.8837 73.2266 18.8837C75.9913 18.8837 77.275 19.9607 77.275 21.8454C77.275 23.7301 75.8722 24.4563 75.7004 24.4712L77.8432 28.0936C77.5796 28.2675 76.8523 28.4026 76.3623 28.4026C75.7267 28.4026 75.225 28.1741 75.225 28.1741L73.6113 25.3068C73.5175 25.1041 73.3858 24.9561 73.1612 24.9561H72.844V28.1463ZM73.5322 20.7148C73.1349 20.7148 72.844 20.7952 72.844 20.7952V23.138H73.5049C74.4694 23.138 74.8413 22.4514 74.8413 21.9269C74.8413 21.2403 74.3786 20.7148 73.5322 20.7148Z" fill="#457AA5"/>
  <path d="M87.211 28.0787C87.211 28.0787 86.5901 28.4026 85.5836 28.4026C84.7236 28.4026 84.3663 28.1741 84.3663 28.1741L81.2317 23.8384V28.1463C81.2317 28.1463 80.9007 28.4036 80.027 28.4036C79.1533 28.4036 78.797 28.1463 78.797 28.1463V19.2344C78.797 19.2344 79.1533 18.9781 80.027 18.9781C80.9007 18.9781 81.2317 19.2344 81.2317 19.2344V23.4221L84.2618 19.2205C84.2618 19.2205 84.6182 18.9781 85.4782 18.9781C86.4701 18.9781 86.8684 19.3139 86.8684 19.3139L83.9045 23.4221L87.212 28.0797L87.211 28.0787Z" fill="#457AA5"/>
  <path d="M58.9806 31.3374C59.1515 32.1988 58.7014 32.8853 58.1987 33.0602C57.7096 32.7244 56.9296 32.4273 56.1096 32.4273C55.2895 32.4273 54.8122 32.7502 54.8122 33.2082C54.8122 33.6394 55.1958 33.7874 56.214 34.1252L57.4841 34.5415C58.8479 34.9985 59.6933 35.7 59.6933 37.1803C59.6933 38.8911 58.5823 40.2105 55.8831 40.2105C53.9912 40.2105 52.8256 39.5637 52.4029 39.1335C52.2711 38.5007 52.6137 37.7059 53.1057 37.4505C53.5284 37.7744 54.7848 38.3934 56.0676 38.3934C56.8359 38.3934 57.2596 38.1112 57.2596 37.5986C57.2596 37.2359 57.034 37.0064 56.5049 36.8306L54.3758 36.1719C53.2365 35.8073 52.3775 34.9737 52.3775 33.6126C52.3775 31.6732 53.6729 30.5973 56.0676 30.5973C57.5895 30.5973 58.4779 31.0145 58.9806 31.3374Z" fill="#457AA5"/>
  <path d="M60.3542 32.5227C60.3542 32.5227 60.1023 32.2534 60.1023 31.6067C60.1023 30.9599 60.3542 30.6906 60.3542 30.6906H67.5382C67.5382 30.6906 67.7901 30.9738 67.7901 31.6067C67.7901 32.2395 67.5382 32.5227 67.5382 32.5227H65.1562V39.8608C65.1562 39.8608 64.8136 40.1161 63.9525 40.1161C63.0915 40.1161 62.7088 39.8608 62.7088 39.8608V32.5227H60.3542Z" fill="#457AA5"/>
  <path d="M72.7502 30.9341L76.3232 39.8201C76.3232 39.8201 75.9659 40.1171 75.0658 40.1171C74.2321 40.1171 73.9032 39.8747 73.9032 39.8747L73.254 38.3258H69.8538L69.2446 39.8747C69.2446 39.8747 68.901 40.1171 68.081 40.1171C67.1819 40.1171 66.7972 39.8201 66.7972 39.8201L70.3702 30.9341C70.3702 30.9341 70.7002 30.6916 71.5592 30.6916C72.4183 30.6916 72.7502 30.9341 72.7502 30.9341ZM70.5674 36.5216H72.5394L71.8775 34.9051C71.7457 34.5822 71.5729 33.9226 71.5583 33.855C71.5329 33.9226 71.3337 34.5822 71.2156 34.9051L70.5674 36.5216Z" fill="#457AA5"/>
  <path d="M75.5949 32.5227C75.5949 32.5227 75.3431 32.2534 75.3431 31.6067C75.3431 30.9599 75.5949 30.6906 75.5949 30.6906H82.779C82.779 30.6906 83.0298 30.9738 83.0298 31.6067C83.0298 32.2395 82.779 32.5227 82.779 32.5227H80.397V39.8608C80.397 39.8608 80.0543 40.1161 79.1933 40.1161C78.3323 40.1161 77.9496 39.8608 77.9496 39.8608V32.5227H75.5949Z" fill="#457AA5"/>
  <path d="M88.9047 36.0228H86.5891V38.299H89.9356C89.9356 38.299 90.1875 38.5821 90.1875 39.2001C90.1875 39.8181 89.9356 40.1161 89.9356 40.1161H84.1408V30.6897H89.6711C89.6711 30.6897 89.9356 30.9728 89.9356 31.6057C89.9356 32.2385 89.6711 32.5217 89.6711 32.5217H86.5882V34.1908H88.9038C88.9038 34.1908 89.1547 34.4879 89.1547 35.1078C89.1547 35.7278 88.9038 36.0219 88.9038 36.0219L88.9047 36.0228Z" fill="#457AA5"/>
  <path d="M51.7107 54.9999C51.577 54.9999 51.4335 54.974 51.2939 54.8965C51.085 54.7803 50.9395 54.5876 50.8858 54.3551C50.8233 54.0868 50.8936 53.7868 51.082 53.5116L51.1426 53.4202C51.2041 53.3268 51.2685 53.2354 51.3407 53.1519C51.4218 53.0595 51.5047 52.995 51.5741 52.9493C51.5243 52.6691 51.5418 52.4267 51.5682 52.2061C51.5877 52.0233 51.6346 51.8683 51.6726 51.7451C51.6892 51.6925 51.7058 51.6388 51.7185 51.5812C51.8201 51.145 51.8855 50.7397 51.9206 50.3453C51.9528 49.9916 51.947 49.9846 51.8864 49.9061C51.7 49.6707 51.3847 49.5018 51.0498 49.3229C50.8878 49.2365 50.7286 49.1491 50.5754 49.0557C49.607 48.4536 48.6376 47.8505 47.6701 47.2465L47.3294 47.0339C47.2513 46.9862 47.1147 46.9156 46.9516 46.8282C45.8817 46.2659 45.172 45.8526 45.0539 45.2595C45.0363 45.173 44.9465 44.9644 44.884 44.864C44.8411 44.8611 44.7307 44.8521 44.6546 44.8471C44.3032 44.8183 43.7711 44.7726 43.3484 44.3196C43.2635 44.2272 43.1786 44.1408 43.1005 44.0583C42.5098 43.4443 42.0003 42.9148 41.9329 41.5993C41.9241 41.4275 41.9251 41.2506 41.928 41.0728C41.9339 40.5283 41.927 40.1836 41.7103 39.962C41.6078 39.8567 41.435 39.7862 41.2349 39.7037C40.9889 39.6034 40.7097 39.4881 40.45 39.2686C40.37 39.2 40.2792 39.1007 40.1776 38.9854C40.0712 38.8602 39.9082 38.6724 39.7969 38.6337C38.974 38.3436 37.986 38.3178 36.96 38.3178L3.07245 38.2909C2.85964 38.2909 2.66927 38.3138 2.48477 38.3347C2.07378 38.3823 1.60812 38.437 1.2313 38.0962C0.866192 37.7664 0.815429 37.2607 0.814452 36.8076L0.8125 34.3993C0.8125 34.2722 0.847644 34.147 0.913051 34.0387C1.22544 33.529 1.83265 33.2558 2.3686 33.0144C2.56872 32.924 2.77666 32.8316 2.88795 32.7571C3.17593 32.5623 3.43561 32.302 3.7109 32.0248C3.91688 31.8182 4.13068 31.6046 4.36887 31.4059C4.69786 31.1317 5.07078 30.931 5.43296 30.7372C5.74535 30.5703 6.03821 30.4124 6.24127 30.2395C6.38575 30.1173 6.49216 29.9146 6.61906 29.6792C6.75476 29.4238 6.90998 29.1337 7.15208 28.8804C7.41273 28.6081 7.7427 28.4194 8.03263 28.2535C8.69744 27.871 8.68182 27.8322 8.57736 27.5769C8.52855 27.4577 8.48072 27.3553 8.43972 27.2639C8.24447 26.8357 8.07754 26.4681 8.19078 25.7051C8.2025 25.6306 8.21616 25.5521 8.22983 25.4706C8.25619 25.3325 8.30305 25.0772 8.27571 25.0037C8.27571 25.0037 8.26204 24.9927 8.23471 24.9778C8.21128 24.9659 8.12928 24.9669 8.06875 24.9679C7.87448 24.9659 7.51914 24.9768 7.2497 24.6689C6.98124 24.3629 6.99686 23.9555 7.03982 23.6356C7.08179 23.3127 7.06032 23.1051 7.03982 22.9223C6.95684 22.1453 7.21358 21.7817 8.10097 21.424C10.7524 20.351 12.901 19.9884 14.8613 20.2805C14.9775 20.2974 15.1356 20.2656 15.3182 20.2269C15.5944 20.1702 15.9351 20.1017 16.312 20.1752L18.3952 20.5766C19.2475 20.7415 19.6653 20.9054 20.3047 21.4995C20.6327 21.8046 20.7655 21.7718 21.3327 21.5661C21.6168 21.4638 21.9399 21.3485 22.3323 21.2949C22.9727 21.2084 23.5731 21.2661 24.153 21.3227C24.4136 21.3475 24.6762 21.3734 24.9408 21.3843C25.2356 21.3952 25.6085 21.2561 25.9717 21.121C26.1318 21.0614 26.2889 21.0028 26.4412 20.9541C26.78 20.8468 27.0973 20.7991 27.4038 20.7514C27.5551 20.7266 27.7064 20.7037 27.8607 20.6729C27.8714 20.6531 27.8821 20.6332 27.8939 20.6113C27.9417 20.5249 27.9944 20.4345 28.0598 20.3411C28.3419 19.9497 28.7471 19.7003 29.0722 19.4966L29.2078 19.4122C29.5564 19.1916 29.8629 18.9879 30.105 18.7386C30.5423 18.2796 31.1232 18.3114 31.5108 18.3312C31.6455 18.3392 31.8495 18.3481 31.91 18.3223C32.1678 18.207 31.9413 17.3993 31.8065 16.9165C31.7119 16.5777 31.6299 16.2846 31.6133 16.0183C31.5664 15.2642 31.9764 14.7317 32.3064 14.3045C32.5651 13.9687 32.7213 13.7481 32.7164 13.5355C32.7164 13.4948 32.7027 13.4382 32.6851 13.3845C32.4587 13.4948 32.0955 13.6369 31.6796 13.4421C31.0129 13.1302 30.6468 12.0264 30.8508 11.3985C31.0197 10.8779 31.54 10.5421 31.9198 10.2957L32.0565 10.2053C32.3806 9.98471 32.7242 9.79792 33.0542 9.6181C33.5159 9.36873 33.9513 9.13227 34.2949 8.82726C34.4404 8.69711 34.5761 8.56994 34.7089 8.44376C35.0076 8.1626 35.3161 7.8715 35.6792 7.61319C35.7056 7.5188 35.728 7.34096 35.7437 7.22571C35.7729 7.00714 35.8022 6.78062 35.8803 6.5849C36.2513 5.64304 37.1592 4.90884 37.9597 4.25908C38.2252 4.04448 38.4771 3.84081 38.6743 3.65602C38.7992 3.53878 38.9222 3.42055 39.0452 3.30332C39.6388 2.73701 40.2509 2.15084 40.9967 1.68289C41.601 1.30536 42.3898 0.833439 43.1249 0.552274C44.0972 0.1807 44.5579 0.208518 45.4766 0.262168L45.6474 0.27111C47.3607 0.371455 49.1384 0.32476 50.8575 0.281045C51.7205 0.258194 52.5796 0.235343 53.4347 0.230376C53.6651 0.230376 54.0156 0.185667 54.3836 0.138972C55.6078 -0.0140291 56.994 -0.188888 57.7818 0.503592C58.1118 0.792705 58.2924 1.19806 58.3031 1.67594C58.311 2.05248 58.1567 2.33464 58.0435 2.54129C58.0064 2.60686 57.9527 2.7082 57.9458 2.74297C57.9488 2.73205 57.9849 2.78768 58.0103 2.82742C58.1362 3.01718 58.3686 3.37088 58.2748 3.89843C58.2397 4.10111 58.1811 4.3167 58.1216 4.53528C58.0464 4.81147 57.9693 5.09761 57.9624 5.31419C57.9498 5.69073 57.6335 5.99376 57.2703 5.97289C56.9013 5.95998 56.6104 5.64603 56.6231 5.26849C56.6367 4.89195 56.7392 4.50944 56.831 4.17264C56.8788 3.9948 56.9276 3.82094 56.9569 3.65502C56.9481 3.65502 56.9218 3.62323 56.8993 3.58746C56.791 3.42254 56.6065 3.14535 56.6065 2.73701C56.6065 2.36345 56.7607 2.08328 56.873 1.87862C56.9072 1.81702 56.9589 1.72462 56.9657 1.69084C56.9608 1.58354 56.9267 1.55274 56.9072 1.53685C56.5694 1.23979 55.2544 1.40372 54.5496 1.49313C54.1386 1.5438 53.752 1.59348 53.4435 1.59547C52.5971 1.60043 51.7439 1.62229 50.8907 1.64315C49.1442 1.68886 47.3382 1.73654 45.5722 1.63421L45.3985 1.62328C44.5345 1.57162 44.3022 1.55871 43.5964 1.82894C42.9618 2.07235 42.2101 2.5244 41.7006 2.84431C41.0699 3.23973 40.533 3.75338 39.9648 4.29683C39.8379 4.41804 39.712 4.53925 39.5831 4.65947C39.3479 4.87804 39.0794 5.09661 38.7953 5.32611C38.1237 5.87056 37.3642 6.48555 37.1231 7.09457C37.1065 7.14425 37.085 7.30221 37.0713 7.40753C37.0147 7.84666 36.9424 8.3931 36.5041 8.69016C36.1927 8.90277 35.9145 9.16704 35.6187 9.44523C35.4771 9.57935 35.3317 9.71546 35.1774 9.85257C34.7186 10.2629 34.1924 10.548 33.6838 10.8222C33.3675 10.9931 33.0698 11.1541 32.8033 11.3369C32.7554 11.3707 32.6978 11.4064 32.6373 11.4462C32.5114 11.5276 32.2332 11.7065 32.1346 11.8217C32.1424 11.8992 32.1726 12.0115 32.2117 12.1009C32.3757 12.0214 32.6041 11.924 32.8804 11.9459C33.6633 12.0135 34.0401 12.8937 34.0558 13.4988C34.0743 14.2191 33.677 14.7337 33.3587 15.145C33.0971 15.4868 32.9351 15.7074 32.9487 15.9319C32.9565 16.0511 33.0288 16.3114 33.0932 16.5419C33.3314 17.3933 33.7746 18.978 32.4479 19.5701C32.0965 19.7281 31.7314 19.7082 31.4375 19.6933C31.3126 19.6864 31.1046 19.6764 31.047 19.7023C30.7171 20.051 30.3227 20.3113 29.9166 20.5706L29.7692 20.663C29.5212 20.816 29.2654 20.976 29.1405 21.1488C29.1083 21.1935 29.0819 21.2412 29.0585 21.2859C28.9345 21.5085 28.7256 21.884 28.174 21.9993C27.9827 22.04 27.7943 22.0708 27.6059 22.0996C27.3364 22.1414 27.0807 22.1811 26.8386 22.2566C26.7087 22.2993 26.5711 22.35 26.4334 22.4017C25.9697 22.5745 25.4435 22.7732 24.8871 22.7474C24.5981 22.7355 24.3131 22.7087 24.027 22.6808C23.4989 22.6282 22.9981 22.5805 22.511 22.6481C22.2572 22.6828 22.0258 22.7653 21.7817 22.8537C21.1716 23.0733 20.3369 23.3733 19.4046 22.508C18.9927 22.1265 18.8267 22.049 18.1473 21.9178L16.065 21.5164C15.942 21.4936 15.775 21.5264 15.5818 21.5651C15.3289 21.6168 15.0136 21.6784 14.6719 21.6297C12.9508 21.3724 11.0218 21.7112 8.59689 22.6928C8.49829 22.7325 8.42703 22.7643 8.37431 22.7891C8.39579 22.9779 8.42312 23.2491 8.39091 23.6217C8.53343 23.6416 8.69353 23.6843 8.86047 23.7737C9.81228 24.2834 9.63461 25.256 9.5487 25.724C9.53601 25.7876 9.52528 25.8511 9.51551 25.9127C9.4628 26.2694 9.49501 26.3429 9.65511 26.6917C9.70392 26.798 9.75664 26.9162 9.81326 27.0543C10.3941 28.4681 9.28415 29.1039 8.68865 29.4447C8.46705 29.5719 8.23764 29.701 8.11268 29.8331C7.99944 29.9524 7.89987 30.1372 7.79541 30.3329C7.62945 30.6448 7.44104 30.9975 7.10522 31.2847C6.79088 31.5529 6.41894 31.7536 6.05871 31.9454C5.74144 32.1153 5.44077 32.2762 5.21623 32.464C5.02782 32.6219 4.84527 32.8048 4.65295 32.9985C4.34252 33.3085 4.02524 33.6294 3.62499 33.8976C3.41901 34.0347 3.17203 34.147 2.9104 34.2652C2.69661 34.3606 2.33443 34.5225 2.14992 34.6626L2.15383 36.8096C2.15383 36.8881 2.15578 36.9527 2.15871 37.0023C2.21533 36.9974 2.27586 36.9904 2.32662 36.9835C2.5287 36.9606 2.77959 36.9308 3.06952 36.9308L36.9581 36.9566C38.0573 36.9566 39.2141 36.9884 40.2304 37.3471C40.6755 37.5021 40.9801 37.8538 41.1812 38.0853C41.2281 38.1399 41.2681 38.1896 41.3052 38.2234C41.4018 38.3048 41.5551 38.3674 41.7328 38.441C42.0129 38.5562 42.3615 38.7003 42.6572 39.0043C43.2811 39.6411 43.2713 40.4469 43.2645 41.0927C43.2606 41.2417 43.2606 41.3897 43.2664 41.5328C43.3084 42.3326 43.5261 42.5581 44.0532 43.1055C44.1372 43.1929 44.2251 43.2853 44.3188 43.3847C44.3842 43.4542 44.5287 43.4701 44.761 43.491C45.0412 43.5138 45.3897 43.5417 45.6953 43.7751C46.0291 44.0275 46.2546 44.5888 46.3376 44.8809C46.5455 45.0846 47.2777 45.4711 47.5647 45.6211C47.7639 45.7264 47.9298 45.8158 48.0265 45.8754L48.3672 46.088C49.3346 46.6891 50.3011 47.2922 51.2705 47.8943C51.3993 47.9727 51.533 48.0463 51.6707 48.1188C52.0924 48.3443 52.5698 48.6006 52.9291 49.0567C53.3215 49.5544 53.2942 50.0045 53.259 50.4029C53.3156 50.2936 53.3781 50.1893 53.4513 50.0879C53.5841 49.8982 53.7393 49.7541 53.877 49.626C54.0136 49.4998 54.1073 49.4104 54.1396 49.3388C54.1132 49.2772 54.0527 49.1739 54.0117 49.1034C53.8487 48.8232 53.6271 48.4387 53.7315 47.9857C53.7725 47.8108 53.8789 47.6588 54.0283 47.5634C54.0849 47.5276 54.205 47.4591 54.3631 47.3717C54.5818 47.2495 55.1373 46.9405 55.475 46.71C54.9723 45.5913 55.1392 44.2163 55.2886 42.9843C55.3345 42.6038 55.3784 42.2451 55.3989 41.9222C55.4204 41.5467 55.7337 41.2606 56.1076 41.2834C56.4776 41.3063 56.7588 41.6301 56.7353 42.0057C56.7148 42.3693 56.667 42.7498 56.6182 43.1522C56.4776 44.3166 56.3165 45.637 56.833 46.3911C56.954 46.5669 56.994 46.7895 56.9452 47.0021C56.8417 47.4502 56.3898 47.7879 55.1958 48.4606C55.352 48.7308 55.5395 49.0904 55.4731 49.5167C55.4623 49.5812 55.4487 49.6428 55.4321 49.7015C55.766 49.5793 56.1154 49.464 56.4845 49.3577C57.8775 48.9543 59.3409 48.7745 61.225 48.7745C62.0587 48.7745 62.8006 48.5053 63.5874 48.2211C64.2103 47.9946 64.8546 47.7621 65.576 47.6508C66.1852 47.5555 66.5005 47.7562 66.7728 47.9688C66.8636 48.0403 66.93 48.09 67.0442 48.1357C67.3625 48.2619 67.7325 48.2211 68.1601 48.1754C68.5925 48.1277 69.0836 48.0731 69.5844 48.2042C69.8821 48.2837 70.09 48.5579 70.0861 48.8709C70.0744 50.0571 68.5076 50.5459 67.7549 50.7814L67.0384 51.0099C66.4985 51.1848 65.9567 51.3586 65.41 51.5176C65.1631 51.5881 64.918 51.6587 64.672 51.7223C64.3889 51.7948 64.099 51.9597 63.7944 52.1316C63.481 52.3094 63.1579 52.4922 62.786 52.6174C62.1426 52.83 61.4837 52.9413 60.6471 52.9761C60.4069 52.987 60.1746 53.0943 59.9295 53.2056C59.5674 53.3735 59.1154 53.5801 58.6107 53.4132C58.3949 53.3864 57.5534 53.6775 57.1502 53.8196C56.832 53.9289 56.5577 54.0242 56.3419 54.0759C55.598 54.2528 54.8415 54.3918 54.1103 54.527L53.5968 54.6223C53.1516 54.7058 52.7035 54.7922 52.2613 54.8926L52.2076 54.9085C52.0797 54.9482 51.9021 55.0038 51.7078 55.0038L51.7107 54.9999ZM53.0735 51.6746C53.0569 51.7471 53.0403 51.8196 53.0237 51.8941C53.0032 51.9806 52.9788 52.064 52.9544 52.1455C52.9281 52.2359 52.9066 52.3055 52.8988 52.3651C52.8793 52.5379 52.8773 52.6313 52.8978 52.7247C52.9495 52.9791 52.9388 53.1907 52.8949 53.3645C53.0482 53.3347 53.2024 53.3049 53.3566 53.2751L53.875 53.1808C54.5896 53.0486 55.3296 52.9125 56.0412 52.7436C56.1906 52.7078 56.4483 52.6194 56.7217 52.525C57.7721 52.1604 58.4994 51.9359 59.0295 52.1127C59.0646 52.1058 59.2559 52.0173 59.3828 51.9597C59.7001 51.8137 60.0945 51.6328 60.5924 51.611C61.3021 51.5812 61.8498 51.4908 62.372 51.3169C62.622 51.2345 62.8748 51.0914 63.1442 50.9374C63.5123 50.7298 63.892 50.5142 64.3469 50.3969C64.5793 50.3373 64.8136 50.2707 65.0459 50.2042C65.5789 50.0482 66.11 49.8773 66.6362 49.7064L67.1253 49.5514C66.9388 49.5246 66.7504 49.4779 66.56 49.4014C66.2672 49.2862 66.0836 49.1411 65.9616 49.0457C65.9313 49.0229 65.906 48.999 65.8757 48.9812C65.8737 48.9851 65.8405 48.9851 65.7781 48.9941C65.1845 49.0855 64.6281 49.2862 64.0394 49.4998C63.1794 49.8107 62.293 50.1326 61.2279 50.1326C59.4717 50.1326 58.1235 50.2966 56.8535 50.6642C55.7142 50.992 54.7868 51.3984 54.0166 51.9031C53.7901 52.0521 53.5001 52.0481 53.2776 51.8951C53.1917 51.8365 53.1214 51.76 53.0735 51.6716V51.6746Z" fill="#154973"/>
  <path d="M67.6348 51.8019C67.6348 51.8019 67.6173 51.782 67.6173 51.7303C67.6173 51.6787 67.6348 51.6588 67.6348 51.6588H68.5564C68.5564 51.6588 68.5749 51.6806 68.5749 51.7303C68.5749 51.78 68.5564 51.8019 68.5564 51.8019H68.1932V52.9205C68.1932 52.9205 68.1659 52.9404 68.0976 52.9404C68.0292 52.9404 67.998 52.9205 67.998 52.9205V51.8019H67.6348Z" fill="#154973"/>
  <path d="M69.4282 52.8659C69.4135 52.8748 69.3891 52.8858 69.3471 52.8858C69.3178 52.8858 69.2837 52.8798 69.27 52.8659L68.9889 52.1476C68.9723 52.1088 68.9459 52.0323 68.944 52.0214C68.944 52.0264 68.9371 52.1277 68.9332 52.1565L68.8815 52.9205C68.8815 52.9205 68.8561 52.9404 68.7858 52.9404C68.7155 52.9404 68.6862 52.9205 68.6862 52.9205L68.7839 51.6787C68.7839 51.6787 68.8112 51.6588 68.8776 51.6588C68.9518 51.6588 68.9781 51.6787 68.9781 51.6787L69.3042 52.5162L69.3471 52.6533C69.3481 52.6473 69.3774 52.5559 69.392 52.5162L69.7181 51.6787C69.7181 51.6787 69.7464 51.6588 69.8206 51.6588C69.886 51.6588 69.9124 51.6787 69.9124 51.6787L70.01 52.9205C70.01 52.9205 69.9807 52.9404 69.9104 52.9404C69.8401 52.9404 69.8167 52.9205 69.8167 52.9205L69.763 52.1546L69.7523 52.0194C69.7523 52.0194 69.722 52.1148 69.7093 52.1456L69.4282 52.8659Z" fill="#154973"/>
</svg>`;var ru=Object.defineProperty,Nn=(r,i,o,c)=>{for(var u=void 0,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=v(i,o,u)||u);return u&&ru(i,o,u),u};const U3=class extends ce{constructor(){super(...arguments),this.trustbarVisible=!1,this.searchDropdownVisible=!1,this.languageVisible=!1,this.isSearchFocused=!1,this.hideTranslate=!1,this.hideSearch=!1,this.languages=[["English",""],["Español","es"],["中文","zh"],["繁體中文","zh-traditional"],["Русский","ru"],["יידיש","yi"],["বাংলা","bn"],["한국어","ko"],["Kreyòl Ayisyen","ht"],["Italiano","it"],["العربية","ar"],["Polski","pl"],["Français","fr"],["اردو","ur"]]}_getNysLogo(){return new DOMParser().parseFromString(ou,"image/svg+xml").documentElement}_toggleTrustbar(){this.trustbarVisible=!this.trustbarVisible,this.trustbarVisible&&(this.languageVisible=!1,this.searchDropdownVisible=!1)}_toggleLanguageList(){this.languageVisible=!this.languageVisible,this.languageVisible&&(this.trustbarVisible=!1,this.searchDropdownVisible=!1)}_toggleSearchDropdown(){this.searchDropdownVisible=!this.searchDropdownVisible,this.searchDropdownVisible&&(this.trustbarVisible=!1,this.languageVisible=!1)}_handleSearchFocus(){this.isSearchFocused=!0,this.trustbarVisible=!1,this.languageVisible=!1}_handleSearchBlur(){this.isSearchFocused=!1}_handleSearchKeyup(i){var o;if(i.key==="Escape"&&(this._handleSearchBlur(),i.target.blur()),i.key==="Enter"){const c=(o=i.target.value)==null?void 0:o.trim();c!==""&&this._handleSearch(c)}}_handleSearchButton(i){var o,c;const u=(c=((o=this.shadowRoot)==null?void 0:o.getElementById(i)).value)==null?void 0:c.trim();u!==""&&this._handleSearch(u)}_handleSearch(i){window.location.href=`https://search.its.ny.gov/search/search.html?btnG=Search&client=default_frontend&output=xml_no_dtd&proxystylesheet=default_frontend&ulang=en&sort=date:D:L:d1&entqr=3&entqrm=0&wc=200&wc_mc=1&oe=UTF-8&ie=UTF-8&ud=1&site=default_collection&q=${i}+inurl:${window.location.hostname}&site=default_collection`}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return L`
      <header class="nys-unavheader">
        <div class="nys-unavheader__mainwrapper" id="nys-universal-navigation">
          <div class="nys-unavheader__maincontent">
            <div class="nys-unavheader__left">
              <a
                href="https://www.ny.gov"
                id="nys-unavheader__logolink"
                aria-label="Visit the NY.gov homepage"
              >
                <div class="nys-unavheader__logo">${this._getNysLogo()}</div></a
              >
              <div
                class="nys-unavheader--md nys-unavheader--lg nys-unavheader--xl"
              >
                <div class="nys-unavheader__officialmessage">
                  <label id="nys-unavheader__official"
                    >An official website of New York State</label
                  >
                  <nys-button
                    id="nys-unavheader__know"
                    label="Here's how you know"
                    ariaLabel=${this.trustbarVisible?"Here's how you know expanded":"Here's how you know collapsed"}
                    variant="ghost"
                    size="sm"
                    suffixIcon="slotted"
                    .onClick="${()=>this._toggleTrustbar()}"
                  >
                    <nys-icon
                      slot="suffix-icon"
                      size="12"
                      name="${this.trustbarVisible?"chevron_up":"chevron_down"}"
                    ></nys-icon>
                  </nys-button>
                </div>
              </div>
            </div>
            <div class="nys-unavheader__trustbarwrapper">
              <div
                class="nys-unavheader__toptrustbar"
                @click="${this._toggleTrustbar}"
                @keydown="${i=>{(i.code==="Enter"||i.code==="Space"||i.key==="Enter"||i.key===" ")&&this._toggleTrustbar()}}"
              >
                <div class="nys-unavheader__officialmessage">
                  <label id="nys-unavheader__official"
                    >An official website of New York State</label
                  >
                  <nys-button
                    id="nys-unavheader__know"
                    label="Here's how you know"
                    ariaLabel=${this.trustbarVisible?"Here's how you know expanded":"Here's how you know collapsed"}
                    variant="ghost"
                    size="sm"
                    suffixIcon="slotted"
                  >
                    <nys-icon
                      slot="suffix-icon"
                      size="12"
                      name=${this.trustbarVisible?"chevron_up":"chevron_down"}
                    ></nys-icon>
                  </nys-button>
                </div>
              </div>
              <div
                class="nys-unavheader__trustbar ${this.trustbarVisible?"show":"hide"}"
              >
                <div class="nys-unavheader__trustcontent">
                  <div class="nys-unavheader__trustcontentmessage">
                    <nys-icon
                      size="3xl"
                      name="account_balance_filled"
                    ></nys-icon>
                    <label><b>Official websites use ny.gov</b></label>
                    <label
                      >A <b>ny.gov</b> website belongs to an official New York
                      State government organization.</label
                    >
                  </div>
                  <div class="nys-unavheader__trustcontentmessage">
                    <nys-icon size="3xl" name="lock_filled"></nys-icon>
                    <label><b>Secure ny.gov websites use HTTPS</b></label>
                    <label
                      >A <b>lock icon</b> or <b>https://</b> means you've safely
                      connected to the ny.gov website. Share sensitive
                      information only on official, secure websites.</label
                    >
                  </div>
                </div>
                <nys-button
                  id="nys-unavheader__closetrustbar"
                  class="nys-unavheader__iconbutton"
                  variant="ghost"
                  circle
                  icon="close"
                  size="sm"
                  ariaLabel="Close this notice"
                  .onClick="${()=>this._toggleTrustbar()}"
                ></nys-button>
              </div>
            </div>
            <div class="nys-unavheader__right">
              ${this.hideTranslate?null:L`<div class="nys-unavheader__translatewrapper">
                    <div
                      class="nys-unavheader--xs nys-unavheader--sm nys-unavheader--md"
                    >
                      <nys-button
                        variant="ghost"
                        circle
                        icon="slotted"
                        ariaLabel=${this.languageVisible?"Translate expanded":"Translate collapsed"}
                        id="nys-unavheader__translate"
                        class="nys-unavheader__iconbutton"
                        .onClick="${()=>this._toggleLanguageList()}"
                      >
                        <nys-icon
                          slot="circle-icon"
                          name="language"
                          size="16"
                        ></nys-icon>
                      </nys-button>
                    </div>
                    ${this.isSearchFocused?null:L`<div class="nys-unavheader--lg nys-unavheader--xl">
                          <nys-button
                            variant="ghost"
                            label="Translate"
                            size="sm"
                            prefixIcon="language_filled"
                            suffixIcon=${this.languageVisible?"chevron_up":"chevron_down"}
                            ariaLabel=${this.languageVisible?"Translate expanded":"Translate collapsed"}
                            id="nys-unavheader__translate"
                            .onClick="${()=>this._toggleLanguageList()}"
                          ></nys-button>
                        </div>`}
                    <div
                      class="nys-unavheader__languagelist ${this.languageVisible?"show":"hide"}"
                    >
                      ${this.languages.map(([i,o])=>L`<a
                            class="nys-unavheader__languagelink"
                            target="_self"
                            href="https://${o?o+".":""}${window.location.hostname}"
                            >${i}</a
                          >`)}
                    </div>
                  </div>`}
              ${this.hideSearch?null:L` <div
                      class="nys-unavheader--xs nys-unavheader--sm nys-unavheader--md"
                    >
                      <nys-button
                        variant="ghost"
                        circle
                        icon="search"
                        ariaLabel=${this.searchDropdownVisible?"Search expanded":"Search collapsed"}
                        id="nys-unavheader__searchbutton"
                        class="nys-unavheader__iconbutton"
                        .onClick="${()=>this._toggleSearchDropdown()}"
                      >
                        <nys-icon
                          slot="circle-icon"
                          name="search"
                          size="16"
                        ></nys-icon>
                      </nys-button>
                    </div>
                    <div class="nys-unavheader--lg nys-unavheader--xl">
                      <nys-textinput
                        class="nys-unavheader__search"
                        id="nys-unavheader__searchbar"
                        placeholder="Search"
                        type="search"
                        @focus="${this._handleSearchFocus}"
                        @blur="${this._handleSearchBlur}"
                        @keyup="${this._handleSearchKeyup}"
                      >
                        <nys-button
                          slot="endButton"
                          type="submit"
                          prefixIcon="search"
                          ariaLabel="Search Button"
                          .onClick="${()=>this._handleSearchButton("nys-unavheader__searchbar")}"
                        ></nys-button
                      ></nys-textinput>
                    </div>`}
            </div>
          </div>
        </div>
        <div class="nys-unavheader--xs nys-unavheader--sm nys-unavheader--md">
          <div
            class="nys-unavheader__searchdropdown ${this.searchDropdownVisible?"show":"hide"}"
          >
            <nys-textinput
              class="nys-unavheader__search"
              id="nys-unavheader__searchbardropdown"
              placeholder="Search"
              type="search"
              @focus="${this._handleSearchFocus}"
              @blur="${this._handleSearchBlur}"
              @keyup="${this._handleSearchKeyup}"
            >
              <nys-button
                slot="endButton"
                type="submit"
                prefixIcon="search"
                ariaLabel="Search Button"
                .onClick="${()=>this._handleSearchButton("nys-unavheader__searchbardropdown")}"
              ></nys-button
            ></nys-textinput>
          </div>
        </div>
      </header>
    `}};U3.styles=su;let D1=U3;Nn([p({type:Boolean})],D1.prototype,"trustbarVisible");Nn([p({type:Boolean})],D1.prototype,"searchDropdownVisible");Nn([p({type:Boolean})],D1.prototype,"languageVisible");Nn([p({type:Boolean})],D1.prototype,"isSearchFocused");Nn([p({type:Boolean})],D1.prototype,"hideTranslate");Nn([p({type:Boolean})],D1.prototype,"hideSearch");Nn([p({type:String,reflect:!0})],D1.prototype,"languages");customElements.get("nys-unavheader")||customElements.define("nys-unavheader",D1);const cu=xe`
  :host {
    /* Global Header Styles */
    --_nys-globalheader-text-color: var(
      --nys-color-text-reverse,
      var(--nys-color-white, #ffffff)
    );
    --_nys-globalheader-link-color: var(
      --nys-color-link-reverse-neutral,
      var(--nys-color-white, #fff)
    );
    --_nys-globalheader-background: var(
      --nys-color-theme,
      var(--nys-color-state-blue-700, #154973)
    );
    --_nys-globalheader-main-gap-spacing: var(--nys-space-300, 24px);
    --_nys-globalheader-padding: var(--nys-space-250, 20px);
    --_nys-globalheader-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-globalheader-lineheight: normal;
    --_nys-globalheader-letterspacing: normal;
    --_nys-globalheader-font-weight-bold: var(--nys-font-weight-bold, 700);
    --_nys-globalheader-font-weight-semibold: var(
      --nys-font-weight-semibold,
      600
    );
    --_nys-globalheader-content-max-width: var(--nys-max-content-width, 1280px);

    /* Agency and App Name Styling */
    --_nys-globalheader-name-gap-spacing: var(--nys-space-100, 8px);
    --_nys-globalheader-font-size-main-name: var(
      --nys-font-size-agency-xl,
      var(--nys-font-size-2xl, 22px)
    );
    --_nys-globalheader-font-size-sub-name: var(
      --nys-font-size-agency-md,
      var(--nys-font-size-md, 16px)
    );
    --_nys-globalheader-font-family-agency: var(
      --nys-font-family-agency,
      "D Sari",
      Arial,
      sans-serif
    );

    /* Menu Content Styling */
    --_nys-globalheader-link-lineheight: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-globalheader-link-letterspacing: var(
      --nys-font-letterspacing-ui-md,
      var(--nys-font-letterspacing-400, 0.044px)
    );
    --_nys-globalheader-link-weight-decoration: var(--nys-size-2px, 2px);
    --_nys-globalheader-link-padding: var(--nys-space-300, 24px)
      var(--nys-space-200, 16px);

    /* Mobile Menu */
    --_nys-globalheader-mobile-btn-font-size: var(--nys-type-size-ui-xs, 12px);
    --_nys-globalheader-mobile-btn-lineheight: var(
      --nys-font-lineheight-ui-xs,
      20px
    );
    --_nys-globalheader-mobile-btn-letterspacing: var(
      --nys-font-letterspacing-ui-xs,
      0.057px
    );
    --_nys-globalheader-mobile-li-border-color: var(
      --nys-color-theme-mid,
      #457aa5
    );
    --_nys-globalheader-mobile-li-hover-bg: var(
      --nys-color-theme-strong,
      #0e324f
    );
    --_nys-globalheader-mobile-li-active-bg: var(
      --nys-color-theme-stronger,
      #081b2b
    );
  }

  /* Slotted content (menu links) basic resets */
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: block;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: var(--_nys-globalheader-link-color);
    text-decoration: none;
    font-family: var(--_nys-globalheader-font-family);
    font-size: var(--_nys-globalheader-font-size-links);
    font-style: normal;
    font-weight: 400;
    line-height: var(--_nys-globalheader-link-lineheight);
    letter-spacing: var(--_nys-globalheader-link-letterspacing);
  }

  .nys-globalheader {
    display: flex;
    justify-content: center;
    padding: var(--_nys-globalheader-padding);
    background-color: var(--_nys-globalheader-background);
    color: var(--_nys-globalheader-text-color);
    width: 100%;
    min-height: 76px;
    box-sizing: border-box;
  }

  /* Main container */
  .nys-globalheader__main-container {
    display: flex;
    gap: var(--_nys-globalheader-main-gap-spacing);
    max-width: var(--_nys-globalheader-content-max-width);
    width: 100%;
  }

  /* Left-hand side Agency and App names */
  .nys-globalheader__name-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: var(--_nys-globalheader-name-gap-spacing);
  }
  .nys-globalheader__name {
    margin: 0;
    color: var(--_nys-globalheader-text-color);
    font-family: var(--_nys-globalheader-font-family-agency);
    font-size: var(--_nys-globalheader-font-size-main-name);
    font-style: normal;
    font-weight: var(--_nys-globalheader-font-weight-semibold);
    line-height: var(--_nys-globalheader-lineheight);
    letter-spacing: var(--_nys-globalheader-letterspacing);
    text-wrap: wrap;
  }

  .nys-globalheader__agencyName {
    font-size: var(--_nys-globalheader-font-size-sub-name);
  }

  /* Set the font size for the agency to be the main font if appName is not defined */
  .nys-globalheader__agencyName.main {
    font-size: var(--_nys-globalheader-font-size-main-name);
  }

  /* Slotted content */
  .nys-globalheader__content {
    display: none;
    font-family: var(--_nys-globalheader-font-family);
  }

  .nys-globalheader__content ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }

  .nys-globalheader__content ul a:hover {
    text-decoration: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: auto;
    text-decoration-thickness: 7%;
    text-underline-offset: auto;
    text-underline-position: from-font;
  }

  .nys-globalheader__content ul a:active {
    text-decoration-thickness: var(--_nys-globalheader-link-weight-decoration);
  }

  /* Active Links */
  .nys-globalheader__content li.active a,
  .nys-globalheader__content-mobile li.active a {
    font-weight: 700;
  }
  .nys-globalheader__content li.active {
    border-bottom: 8px solid var(--nys-color-theme-weak, #cddde9);
  }
  .nys-globalheader__content li.active a {
    margin-bottom: calc(-1 * var(--nys-space-100, 8px));
  }
  .nys-globalheader__content-mobile li.active a {
    border-left: 8px solid var(--nys-color-theme-weak, #cddde9);
    border-bottom: 1px solid var(--_nys-globalheader-mobile-li-border-color);
  }
  .nys-globalheader__content ul li.active a:hover {
    text-decoration: none;
  }

  /* Mobile Menu */
  .nys-globalheader__content-mobile {
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--_nys-globalheader-background);
    width: fit-content;
  }
  .nys-globalheader__content-mobile.close {
    display: none;
  }
  .nys-globalheader__content-mobile ul {
    display: flex;
    flex-direction: column;
  }
  .nys-globalheader__content-mobile ul li:first-child a {
    border-top: 1px solid var(--_nys-globalheader-text-color);
  }
  .nys-globalheader__content-mobile ul li a {
    display: flex;
    padding: 24px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-bottom: 1px solid var(--_nys-globalheader-mobile-li-border-color);
    background: var(--_nys-globalheader-background);
  }
  .nys-globalheader__content-mobile ul li a:hover {
    background: var(--_nys-globalheader-mobile-li-hover-bg);
  }
  .nys-globalheader__content-mobile ul li a:active {
    background: var(--_nys-globalheader-mobile-li-active-bg);
  }
  .nys-globalheader__name-container-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  /* Mobile Menu (OPEN/CLOSE Button Container) */
  .nys-globalheader__button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nys-globalheader__mobile-menu-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3px;
    width: 50px;
    height: 50px;
    background-color: var(--_nys-globalheader-background);
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    color: var(--_nys-globalheader-text-color);
  }
  .nys-globalheader__mobile-menu-button-text {
    font-size: var(--_nys-globalheader-mobile-btn-font-size);
    line-height: var(--_nys-globalheader-mobile-btn-lineheight);
    letter-spacing: var(--_nys-globalheader-mobile-btn-letterspacing);
  }

  /* Breakpoints using NYSDS Guidelines (Menu Links) */
  /* https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=1170-340 */
  @media (min-width: 1024px) {
    /* Desktop (MD - Above 1024px) */
    .nys-globalheader__content {
      display: flex;
    }
    .nys-globalheader__content ul {
      flex-direction: row;
    }
    .nys-globalheader__content-mobile,
    .nys-globalheader__button-container {
      display: none;
    }
    li {
      display: flex;
      align-items: center;
      padding: var(--_nys-globalheader-link-padding);
    }
    :host {
      --_nys-globalheader-main-gap-spacing: var(--nys-space-500, 40px);
      --_nys-globalheader-padding: var(--nys-space-50, 4px)
        var(--nys-size-400, 32px) 0;
    }
  }

  @media (min-width: 1280px) {
    /* Large Desktop (LG - Above 1280px) */
    :host {
      --_nys-globalheader-padding: var(--nys-space-50, 4px)
        var(--nys-space-800, 64px) 0;
    }
  }
`;var uu=Object.defineProperty,Xl=(r,i,o,c)=>{for(var u=void 0,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=v(i,o,u)||u);return u&&uu(i,o,u),u};const $3=class extends ce{constructor(){super(...arguments),this.appName="",this.agencyName="",this.homepageLink="",this.slotHasContent=!0,this.isMobileMenuOpen=!1}firstUpdated(){var i;const o=(i=this.shadowRoot)==null?void 0:i.querySelector("slot");o==null||o.addEventListener("slotchange",()=>this._handleSlotChange()),this._handleSlotChange()}async _handleSlotChange(){var i,o,c;const u=(i=this.shadowRoot)==null?void 0:i.querySelector("slot");if(!u)return;const f=u==null?void 0:u.assignedNodes({flatten:!0}).filter(k=>k.nodeType===Node.ELEMENT_NODE);await Promise.resolve(),this.slotHasContent=f.length>0;const v=(o=this.shadowRoot)==null?void 0:o.querySelector(".nys-globalheader__content"),A=(c=this.shadowRoot)==null?void 0:c.querySelector(".nys-globalheader__content-mobile");v&&A&&(v.innerHTML="",A.innerHTML="",f.forEach(k=>{if(k.nodeType===Node.ELEMENT_NODE){const x=k.cloneNode(!0),H=k.cloneNode(!0);["script","iframe","object","embed, img"].forEach(G=>{x.querySelectorAll(G).forEach(R=>R.remove())});const O=this._normalizePath(window.location.pathname);x.querySelectorAll("a").forEach(G=>{const R=G.getAttribute("href");if(this._normalizePath(R)===O){const I=G.closest("li");I&&I.classList.add("active")}}),H.querySelectorAll("a").forEach(G=>{const R=G.getAttribute("href");if(this._normalizePath(R)===O){const I=G.closest("li");I&&I.classList.add("active")}}),v.appendChild(x),A.appendChild(H),k.remove()}}))}_normalizePath(i){if(i)return i.startsWith("/")||(i="/"+i),i.length>1&&i.endsWith("/")&&(i=i.slice(0,-1)),i.toLowerCase()}_toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen}render(){var i,o,c,u,f,v,A,k;return L`
      <header class="nys-globalheader">
        <div class="nys-globalheader__main-container">
          ${this.slotHasContent?L` <div class="nys-globalheader__button-container">
                <button
                  class="nys-globalheader__mobile-menu-button"
                  @click="${this._toggleMobileMenu}"
                >
                  <nys-icon
                    name="${this.isMobileMenuOpen?"close":"menu"}"
                    size="32"
                    label="${this.isMobileMenuOpen?"close":"menu"} icon"
                  ></nys-icon>
                  <span class="nys-globalheader__mobile-menu-button-text"
                    >${this.isMobileMenuOpen?"CLOSE":"MENU"}</span
                  >
                </button>
              </div>`:""}
          ${(i=this.homepageLink)!=null&&i.trim()?L`<a
                class="nys-globalheader__name-container-link"
                href=${(f=this.homepageLink)==null?void 0:f.trim()}
              >
                <div class="nys-globalheader__name-container">
                  ${((v=this.appName)==null?void 0:v.trim().length)>0?L`<div
                        class="nys-globalheader__appName nys-globalheader__name"
                      >
                        ${this.appName}
                      </div> `:""}
                  ${((A=this.agencyName)==null?void 0:A.trim().length)>0?L`<div
                        class="nys-globalheader__agencyName nys-globalheader__name ${((k=this.appName)==null?void 0:k.trim().length)>0?"":"main"}"
                      >
                        ${this.agencyName}
                      </div> `:""}
                </div>
              </a>`:L`
                <div class="nys-globalheader__name-container">
                  ${((o=this.appName)==null?void 0:o.trim().length)>0?L`<div
                        class="nys-globalheader__appName nys-globalheader__name"
                      >
                        ${this.appName}
                      </div> `:""}
                  ${((c=this.agencyName)==null?void 0:c.trim().length)>0?L`<div
                        class="nys-globalheader__agencyName nys-globalheader__name ${((u=this.appName)==null?void 0:u.trim().length)>0?"":"main"}"
                      >
                        ${this.agencyName}
                      </div> `:""}
                </div>
              `}
          ${this.slotHasContent?L`<div class="nys-globalheader__content">
                <slot
                  style="display: hidden"
                  @slotchange="${this._handleSlotChange}"
                ></slot>
              </div>`:""}
        </div>
      </header>
      <div
        class="nys-globalheader__content-mobile ${this.isMobileMenuOpen?"":"close"}"
      ></div>
    `}};$3.styles=cu;let Rn=$3;Xl([p({type:String})],Rn.prototype,"appName");Xl([p({type:String})],Rn.prototype,"agencyName");Xl([p({type:String})],Rn.prototype,"homepageLink");Xl([bt()],Rn.prototype,"slotHasContent");Xl([bt()],Rn.prototype,"isMobileMenuOpen");customElements.get("nys-globalheader")||customElements.define("nys-globalheader",Rn);const du=xe`
  :host {
    /* Global Footer Styles */
    --_nys-globalfooter-text-color: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-globalfooter-link-color: var(
      --nys-color-link-neutral,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-globalfooter-background: var(
      --nys-color-theme-weaker,
      var(--nys-color-state-blue-50, #eff6fb)
    );
    --_nys-globalfooter-gap-spacing: var(--nys-space-300, 24px);
    --_nys-globalfooter-padding: var(--nys-space-400, 32px);
    --_nys-globalfooter-gutter: var(--nys-gutter-sm, 20px);
    --_nys-globalfooter-font-size: var(
      --nys-font-size-agency-xl,
      var(--nys-font-size-2xl, 22px)
    );
    --_nys-globalfooter-font-size-links: var(
      --nys-font-size-body-md,
      var(--nys-font-size-md, 16px)
    );
    --_nys-globalfooter-lineheight: normal;
    --_nys-globalfooter-font-weight-semibold: var(
      --nys-font-weight-semibold,
      600
    );
    --_nys-globalfooter-content-max-width: var(--nys-max-content-width, 1280px);

    /* Agency Name */
    --_nys-globalfooter-font-family-agency: var(
      --nys-font-family-agency,
      "D Sari",
      Arial,
      sans-serif
    );

    /* Links */
    --_nys-globalfooter-link-gap-spacing-row: var(--nys-space-400, 32px);
    --_nys-globalfooter-link-gap-spacing-column: var(--nys-space-400, 32px);
    --_nys-globalfooter-lineheight-links: var(
      --nys-font-lineheight-ui-md,
      24px
    );
    --_nys-globalfooter-link-letterspacing: var(
      --nys-font-letterspacing-ui-md,
      var(--nys-font-letterspacing-400, 0.044px)
    );
    --_nys-globalfooter-link-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-globalfooter-link-weight-decoration: var(--nys-size-2px, 2px);
  }

  .nys-globalfooter {
    display: flex;
    padding: var(--_nys-globalfooter-padding) var(--_nys-globalfooter-gutter);
    justify-content: center;
    background-color: var(--_nys-globalfooter-background);
    color: var(--_nys-globalfooter-text-color);
    width: 100%;
    box-sizing: border-box;
  }

  /* Main Container */
  .nys-globalfooter__main-container {
    display: flex;
    flex-direction: column;
    gap: var(--_nys-globalfooter-gap-spacing);
    width: 100%;
    max-width: var(--_nys-globalfooter-content-max-width);
  }

  /* The Agency Name */
  .nys-globalfooter__name {
    text-align: left;
    margin: 0;
    color: var(--_nys-globalfooter-text-color);
    font-family: var(--_nys-globalfooter-font-family-agency);
    font-size: var(--_nys-globalfooter-font-size);
    font-style: normal;
    font-weight: var(--_nys-globalfooter-font-weight-semibold);
    line-height: var(--_nys-globalfooter-lineheight);
    letter-spacing: normal;
  }

  /* Slotted content (menu links) basic resets */
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--_nys-globalfooter-link-color);
    text-decoration: none;
    font-family: var(--_nys-globalfooter-link-font-family);
    font-size: var(--_nys-globalfooter-font-size-links);
    font-style: normal;
    font-weight: var(--_nys-globalfooter-font-weight-semibold);
    line-height: var(--_nys-globalfooter-lineheight-links);
    letter-spacing: var(--_nys-globalfooter-link-letterspacing);
  }

  a:hover {
    text-decoration: underline;
  }
  a:active {
    text-decoration-thickness: var(--_nys-globalfooter-link-weight-decoration);
  }

  /* Specific layout for menu links (grouped or singular list of menus) */
  .nys-globalfooter__content {
    width: 100%;
  }

  .nys-globalfooter__content ul {
    display: flex;
    gap: var(--_nys-globalfooter-link-gap-spacing-row)
      var(--_nys-globalfooter-link-gap-spacing-column);
    flex-wrap: wrap;
  }

  /* Breakpoints using NYSDS Guidelines (Menu Links) */
  @media (min-width: 768px) {
    /* Tablet (MD - Above 768px) */
    :host {
      --_nys-globalfooter-gutter: var(--nys-gutter-lg, 32px);
      --_nys-globalfooter-link-gap-spacing-column: var(--nys-space-600, 48px);
    }
  }

  @media (min-width: 1280px) {
    /* Large Desktop (XL - Above 1280px) */
    :host {
      --_nys-globalfooter-gutter: var(--nys-gutter-xl, 64px);
    }
  }
`;var hu=Object.defineProperty,Fo=(r,i,o,c)=>{for(var u=void 0,f=r.length-1,v;f>=0;f--)(v=r[f])&&(u=v(i,o,u)||u);return u&&hu(i,o,u),u};const V3=class extends ce{constructor(){super(...arguments),this.agencyName="",this.homepageLink="",this.slotHasContent=!0}firstUpdated(){var i;const o=(i=this.shadowRoot)==null?void 0:i.querySelector("slot");o==null||o.addEventListener("slotchange",()=>this._handleSlotChange()),this._handleSlotChange()}async _handleSlotChange(){var i,o;const c=(i=this.shadowRoot)==null?void 0:i.querySelector("slot");if(!c)return;const u=c==null?void 0:c.assignedNodes({flatten:!0}).filter(A=>A.nodeType===Node.ELEMENT_NODE);await Promise.resolve(),this.slotHasContent=u.length>0;const f=(o=this.shadowRoot)==null?void 0:o.querySelector(".nys-globalfooter__content"),v=u==null?void 0:u.some(A=>A.tagName==="H4");f&&(f.classList.toggle("columns",v),f.classList.toggle("small",!v),f.innerHTML="",u.forEach(A=>{if(A.nodeType===Node.ELEMENT_NODE){const k=A.cloneNode(!0);["script","iframe","object","embed","img"].forEach(x=>{k.querySelectorAll(x).forEach(H=>H.remove())}),f.appendChild(k),A.remove()}}))}render(){var i,o;return L`
      <footer class="nys-globalfooter">
        <div class="nys-globalfooter__main-container">
          ${(i=this.homepageLink)!=null&&i.trim()?L`<a href=${(o=this.homepageLink)==null?void 0:o.trim()}>
                <p class="nys-globalfooter__name">${this.agencyName}</p>
              </a>`:L`<p class="nys-globalfooter__name">${this.agencyName}</p>`}
          ${this.slotHasContent?L`<div class="nys-globalfooter__content">
                <slot
                  style="display: hidden"
                  @slotchange="${this._handleSlotChange}"
                ></slot>
              </div>`:""}
        </div>
      </footer>
    `}};V3.styles=du;let Ql=V3;Fo([p({type:String})],Ql.prototype,"agencyName");Fo([p({type:String})],Ql.prototype,"homepageLink");Fo([bt()],Ql.prototype,"slotHasContent");customElements.get("nys-globalfooter")||customElements.define("nys-globalfooter",Ql);const fu=xe`
  :host {
    /* Global Footer Styles */
    --_nys-unavfooter-link-color: var(
      --nys-color-link-reverse-neutral,
      var(--nys-color-white, #ffffff)
    );
    --_nys-unavfooter-background: var(
      --nys-color-surface-reverse,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-unavfooter-gap-spacing: var(--nys-space-200, 16px);
    --_nys-unavfooter-padding: var(--nys-space-250, 20px);
    --_nys-unavfooter-gutter: var(--nys-gutter-sm, 20px);
    --_nys-unavfooter-font-size: var(
      --nys-font-size-agency-xl,
      var(--nys-font-size-2xl, 22px)
    );
    --_nys-unavfooter-font-size-links: var(
      --nys-font-size-body-md,
      var(--nys-font-size-md, 16px)
    );
    --_nys-unavfooter-font-weight-semibold: var(
      --nys-font-weight-semibold,
      600
    );
    --_nys-unavfooter-content-max-width: var(--nys-max-content-width, 1280px);

    /* Links */
    --_nys-unavfooter-link-gap-spacing-row: var(--nys-space-250, 20px);
    --_nys-unavfooter-link-gap-spacing-column: var(--nys-space-600, 48px);
    --_nys-unavfooter-link-lineheight: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-unavfooter-link-letterspacing: var(
      --nys-font-letterspacing-ui-md,
      var(--nys-font-letterspacing-400, 0.044px)
    );
    --_nys-unavfooter-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-unavfooter-link-weight-decoration: var(--nys-size-2px, 2px);
  }

  /* Slotted content (menu links) basic resets */
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--_nys-unavfooter-link-color);
    text-decoration: none;
    font-family: var(--_nys-unavfooter-font-family);
    font-size: var(--_nys-unavfooter-font-size-links);
    font-style: normal;
    font-weight: var(--_nys-unavfooter-font-weight-semibold);
    line-height: var(--_nys-unavfooter-link-lineheight);
    letter-spacing: var(--_nys-unavfooter-link-letterspacing);
    text-decoration-style: solid;
    text-decoration-skip-ink: auto;
    text-decoration-thickness: 7%;
    text-underline-offset: auto;
    text-underline-position: from-font;
  }
  a:hover {
    text-decoration-line: underline;
  }
  a:active {
    text-decoration-thickness: var(--_nys-unavfooter-link-weight-decoration);
  }

  .nys-unavfooter {
    display: flex;
    flex-direction: column;
    gap: var(--_nys-unavfooter-gap-spacing);
    align-items: flex-start;
    background-color: var(--_nys-unavfooter-background);
    width: 100%;
    box-sizing: border-box;
  }

  /* Main container */
  .nys-unavfooter__main-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  /* Top level container for the footer (NYS Logo and Menu links) */
  .nys-unavfooter__container_menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: var(--_nys-unavfooter-content-max-width);
    padding: var(--_nys-unavfooter-padding) var(--_nys-unavfooter-gutter);
    gap: var(--_nys-unavfooter-gap-spacing);
    box-sizing: border-box;
  }

  .nys-unavfooter__logo a {
    display: flex;
    align-items: center;
    line-height: 0;
  }

  /* Specific layout for menu links (grouped or singular list of menus) */
  .nys-unavfooter__content {
    display: flex;
    align-items: center;
  }

  .nys-unavfooter__content ul {
    display: flex;
    justify-content: center;
    gap: var(--_nys-unavfooter-link-gap-spacing-row)
      var(--_nys-unavfooter-link-gap-spacing-column);
    flex-wrap: wrap;
  }

  /* Breakpoints using NYSDS Grid Guidelines (Menu Links) */
  @media (min-width: 768px) {
    /* Tablet (MD - Above 768px) */
    .nys-unavfooter__container_menu {
      flex-direction: row;
    }
    .nys-unavfooter__content ul {
      justify-content: flex-start;
    }
    :host {
      --_nys-unavfooter-gutter: var(--nys-gutter-lg, 32px);
      --_nys-unavfooter-link-gap-spacing-column: var(--nys-space-600, 48px);
      --_nys-unavfooter-gap-spacing: var(--nys-space-800, 64px);
    }
  }

  @media (min-width: 1280px) {
    /* Large Desktop (XL - Above 1280px) */
    :host {
      --_nys-unavfooter-gutter: var(--nys-gutter-xl, 64px);
    }
  }
`,yu=`<svg xmlns="http://www.w3.org/2000/svg" width="91" height="55" viewBox="0 0 91 55" fill="none">
  <path d="M55.1158 7.50499L58.2905 12.6494V7.5189C58.2905 7.5189 58.6487 7.26356 59.5098 7.26356C60.3708 7.26356 60.7378 7.5189 60.7378 7.5189V16.4327C60.7378 16.4327 60.3942 16.689 59.5215 16.689C58.6487 16.689 58.3295 16.4605 58.3295 16.4605L55.1421 11.3171V16.4337C55.1421 16.4337 54.7848 16.69 53.9111 16.69C53.0374 16.69 52.7065 16.4337 52.7065 16.4337V7.51989C52.7065 7.51989 53.0384 7.26456 53.9248 7.26456C54.8112 7.26456 55.1148 7.50697 55.1148 7.50697L55.1158 7.50499Z" fill="white"/>
  <path d="M67.2209 12.5948H64.9063V14.8709H68.2538C68.2538 14.8709 68.5047 15.1531 68.5047 15.772C68.5047 16.391 68.2538 16.688 68.2538 16.688H62.4589V7.26257H67.9892C67.9892 7.26257 68.2538 7.54572 68.2538 8.17859C68.2538 8.81146 67.9892 9.09362 67.9892 9.09362H64.9063V10.7637H67.2209C67.2209 10.7637 67.4728 11.0598 67.4728 11.6787C67.4728 12.2977 67.2209 12.5948 67.2209 12.5948Z" fill="white"/>
  <path d="M71.4802 16.4327L68.9791 7.5189C68.9791 7.5189 69.3491 7.26356 70.2101 7.26356C71.0711 7.26356 71.4275 7.5189 71.4275 7.5189L72.6839 12.0434C72.7766 12.3802 72.8166 12.6365 72.8557 12.7845C72.8557 12.7428 72.9221 12.3663 73.0011 12.0573L74.0984 7.5189C74.0984 7.5189 74.5211 7.26356 75.1176 7.26356C75.7141 7.26356 76.084 7.5189 76.084 7.5189L77.3004 12.7845C77.3004 12.6623 77.3795 12.3255 77.4586 12.0573L78.756 7.5189C78.7686 7.5189 79.1132 7.26356 79.9596 7.26356C80.806 7.26356 81.1897 7.5189 81.1897 7.5189L78.6496 16.4327C78.6496 16.4327 78.2922 16.6751 77.4859 16.689C76.5468 16.689 76.2158 16.4327 76.2158 16.4327L75.223 12.2987C75.1449 11.9887 75.0902 11.6529 75.0785 11.5844L74.9184 12.2987L73.9266 16.4327C73.9266 16.4327 73.583 16.689 72.7092 16.689C71.8355 16.689 71.4802 16.4327 71.4802 16.4327Z" fill="white"/>
  <path d="M54.3485 19.2195L55.4331 21.1579C55.804 21.8176 56.0022 22.5587 56.0285 22.6521C56.0559 22.5587 56.2404 21.8315 56.624 21.1579L57.735 19.2195C57.735 19.2195 58.0659 18.9771 58.8723 18.9771C59.786 18.9771 60.1697 19.2861 60.1697 19.2861L57.2449 24.4295V28.1453C57.2449 28.1453 56.9013 28.4026 56.0276 28.4026C55.1539 28.4026 54.8239 28.1453 54.8239 28.1453V24.3898L51.8991 19.2871C51.8991 19.2871 52.2965 18.9781 53.2082 18.9781C53.9892 18.9781 54.3465 19.2205 54.3465 19.2205L54.3485 19.2195Z" fill="white"/>
  <path d="M64.6017 28.497C61.4788 28.497 60.117 26.6381 60.117 23.7033C60.117 20.7684 61.4798 18.8827 64.6017 18.8827C67.7237 18.8827 69.0865 20.7674 69.0865 23.7033C69.0865 26.6391 67.711 28.497 64.6017 28.497ZM64.6017 26.6778C65.9235 26.6778 66.6391 25.4667 66.6391 23.7033C66.6391 21.9398 65.9235 20.7138 64.6017 20.7138C63.2799 20.7138 62.5653 21.9398 62.5653 23.7033C62.5653 25.4667 63.2789 26.6778 64.6017 26.6778Z" fill="white"/>
  <path d="M72.844 28.1463C72.844 28.1463 72.4867 28.4036 71.6129 28.4036C70.7392 28.4036 70.4083 28.1463 70.4083 28.1463V19.3546C70.4083 19.3546 71.4011 18.8837 73.2266 18.8837C75.9913 18.8837 77.275 19.9607 77.275 21.8454C77.275 23.7301 75.8722 24.4563 75.7004 24.4712L77.8432 28.0936C77.5796 28.2675 76.8523 28.4026 76.3623 28.4026C75.7267 28.4026 75.225 28.1741 75.225 28.1741L73.6113 25.3068C73.5175 25.1041 73.3858 24.9561 73.1612 24.9561H72.844V28.1463ZM73.5322 20.7148C73.1349 20.7148 72.844 20.7952 72.844 20.7952V23.138H73.5049C74.4694 23.138 74.8413 22.4514 74.8413 21.9269C74.8413 21.2403 74.3786 20.7148 73.5322 20.7148Z" fill="white"/>
  <path d="M87.211 28.0787C87.211 28.0787 86.5901 28.4026 85.5836 28.4026C84.7236 28.4026 84.3663 28.1741 84.3663 28.1741L81.2317 23.8384V28.1463C81.2317 28.1463 80.9007 28.4036 80.027 28.4036C79.1533 28.4036 78.797 28.1463 78.797 28.1463V19.2344C78.797 19.2344 79.1533 18.9781 80.027 18.9781C80.9007 18.9781 81.2317 19.2344 81.2317 19.2344V23.4221L84.2618 19.2205C84.2618 19.2205 84.6182 18.9781 85.4782 18.9781C86.4701 18.9781 86.8684 19.3139 86.8684 19.3139L83.9045 23.4221L87.212 28.0797L87.211 28.0787Z" fill="white"/>
  <path d="M58.9806 31.3374C59.1515 32.1988 58.7014 32.8853 58.1987 33.0602C57.7096 32.7244 56.9296 32.4273 56.1096 32.4273C55.2895 32.4273 54.8122 32.7502 54.8122 33.2082C54.8122 33.6394 55.1958 33.7874 56.214 34.1252L57.4841 34.5415C58.8479 34.9985 59.6933 35.7 59.6933 37.1803C59.6933 38.8911 58.5823 40.2105 55.8831 40.2105C53.9912 40.2105 52.8256 39.5637 52.4029 39.1335C52.2711 38.5007 52.6137 37.7059 53.1057 37.4505C53.5284 37.7744 54.7848 38.3934 56.0676 38.3934C56.8359 38.3934 57.2596 38.1112 57.2596 37.5986C57.2596 37.2359 57.034 37.0064 56.5049 36.8306L54.3758 36.1719C53.2365 35.8073 52.3775 34.9737 52.3775 33.6126C52.3775 31.6732 53.6729 30.5973 56.0676 30.5973C57.5895 30.5973 58.4779 31.0145 58.9806 31.3374Z" fill="white"/>
  <path d="M60.3542 32.5227C60.3542 32.5227 60.1023 32.2534 60.1023 31.6067C60.1023 30.9599 60.3542 30.6906 60.3542 30.6906H67.5382C67.5382 30.6906 67.7901 30.9738 67.7901 31.6067C67.7901 32.2395 67.5382 32.5227 67.5382 32.5227H65.1562V39.8608C65.1562 39.8608 64.8136 40.1161 63.9525 40.1161C63.0915 40.1161 62.7088 39.8608 62.7088 39.8608V32.5227H60.3542Z" fill="white"/>
  <path d="M72.7502 30.9341L76.3232 39.8201C76.3232 39.8201 75.9659 40.1171 75.0658 40.1171C74.2321 40.1171 73.9032 39.8747 73.9032 39.8747L73.254 38.3258H69.8538L69.2446 39.8747C69.2446 39.8747 68.901 40.1171 68.081 40.1171C67.1819 40.1171 66.7972 39.8201 66.7972 39.8201L70.3702 30.9341C70.3702 30.9341 70.7002 30.6916 71.5592 30.6916C72.4183 30.6916 72.7502 30.9341 72.7502 30.9341ZM70.5674 36.5216H72.5394L71.8775 34.9051C71.7457 34.5822 71.5729 33.9226 71.5583 33.855C71.5329 33.9226 71.3337 34.5822 71.2156 34.9051L70.5674 36.5216Z" fill="white"/>
  <path d="M75.5949 32.5227C75.5949 32.5227 75.3431 32.2534 75.3431 31.6067C75.3431 30.9599 75.5949 30.6906 75.5949 30.6906H82.779C82.779 30.6906 83.0298 30.9738 83.0298 31.6067C83.0298 32.2395 82.779 32.5227 82.779 32.5227H80.397V39.8608C80.397 39.8608 80.0543 40.1161 79.1933 40.1161C78.3323 40.1161 77.9496 39.8608 77.9496 39.8608V32.5227H75.5949Z" fill="white"/>
  <path d="M88.9047 36.0228H86.5891V38.299H89.9356C89.9356 38.299 90.1875 38.5821 90.1875 39.2001C90.1875 39.8181 89.9356 40.1161 89.9356 40.1161H84.1408V30.6897H89.6711C89.6711 30.6897 89.9356 30.9728 89.9356 31.6057C89.9356 32.2385 89.6711 32.5217 89.6711 32.5217H86.5882V34.1908H88.9038C88.9038 34.1908 89.1547 34.4879 89.1547 35.1078C89.1547 35.7278 88.9038 36.0219 88.9038 36.0219L88.9047 36.0228Z" fill="white"/>
  <path d="M51.7107 54.9999C51.577 54.9999 51.4335 54.974 51.2939 54.8965C51.085 54.7803 50.9395 54.5876 50.8858 54.3551C50.8233 54.0868 50.8936 53.7868 51.082 53.5116L51.1426 53.4202C51.2041 53.3268 51.2685 53.2354 51.3407 53.1519C51.4218 53.0595 51.5047 52.995 51.5741 52.9493C51.5243 52.6691 51.5418 52.4267 51.5682 52.2061C51.5877 52.0233 51.6346 51.8683 51.6726 51.7451C51.6892 51.6925 51.7058 51.6388 51.7185 51.5812C51.8201 51.145 51.8855 50.7397 51.9206 50.3453C51.9528 49.9916 51.947 49.9846 51.8864 49.9061C51.7 49.6707 51.3847 49.5018 51.0498 49.3229C50.8878 49.2365 50.7286 49.1491 50.5754 49.0557C49.607 48.4536 48.6376 47.8505 47.6701 47.2465L47.3294 47.0339C47.2513 46.9862 47.1147 46.9156 46.9516 46.8282C45.8817 46.2659 45.172 45.8526 45.0539 45.2595C45.0363 45.173 44.9465 44.9644 44.884 44.864C44.8411 44.8611 44.7307 44.8521 44.6546 44.8471C44.3032 44.8183 43.7711 44.7726 43.3484 44.3196C43.2635 44.2272 43.1786 44.1408 43.1005 44.0583C42.5098 43.4443 42.0003 42.9148 41.9329 41.5993C41.9241 41.4275 41.9251 41.2506 41.928 41.0728C41.9339 40.5283 41.927 40.1836 41.7103 39.962C41.6078 39.8567 41.435 39.7862 41.2349 39.7037C40.9889 39.6034 40.7097 39.4881 40.45 39.2686C40.37 39.2 40.2792 39.1007 40.1776 38.9854C40.0712 38.8602 39.9082 38.6724 39.7969 38.6337C38.974 38.3436 37.986 38.3178 36.96 38.3178L3.07245 38.2909C2.85964 38.2909 2.66927 38.3138 2.48477 38.3347C2.07378 38.3823 1.60812 38.437 1.2313 38.0962C0.866192 37.7664 0.815429 37.2607 0.814452 36.8076L0.8125 34.3993C0.8125 34.2722 0.847644 34.147 0.913051 34.0387C1.22544 33.529 1.83265 33.2558 2.3686 33.0144C2.56872 32.924 2.77666 32.8316 2.88795 32.7571C3.17593 32.5623 3.43561 32.302 3.7109 32.0248C3.91688 31.8182 4.13068 31.6046 4.36887 31.4059C4.69786 31.1317 5.07078 30.931 5.43296 30.7372C5.74535 30.5703 6.03821 30.4124 6.24127 30.2395C6.38575 30.1173 6.49216 29.9146 6.61906 29.6792C6.75476 29.4238 6.90998 29.1337 7.15208 28.8804C7.41273 28.6081 7.7427 28.4194 8.03263 28.2535C8.69744 27.871 8.68182 27.8322 8.57736 27.5769C8.52855 27.4577 8.48072 27.3553 8.43972 27.2639C8.24447 26.8357 8.07754 26.4681 8.19078 25.7051C8.2025 25.6306 8.21616 25.5521 8.22983 25.4706C8.25619 25.3325 8.30305 25.0772 8.27571 25.0037C8.27571 25.0037 8.26204 24.9927 8.23471 24.9778C8.21128 24.9659 8.12928 24.9669 8.06875 24.9679C7.87448 24.9659 7.51914 24.9768 7.2497 24.6689C6.98124 24.3629 6.99686 23.9555 7.03982 23.6356C7.08179 23.3127 7.06032 23.1051 7.03982 22.9223C6.95684 22.1453 7.21358 21.7817 8.10097 21.424C10.7524 20.351 12.901 19.9884 14.8613 20.2805C14.9775 20.2974 15.1356 20.2656 15.3182 20.2269C15.5944 20.1702 15.9351 20.1017 16.312 20.1752L18.3952 20.5766C19.2475 20.7415 19.6653 20.9054 20.3047 21.4995C20.6327 21.8046 20.7655 21.7718 21.3327 21.5661C21.6168 21.4638 21.9399 21.3485 22.3323 21.2949C22.9727 21.2084 23.5731 21.2661 24.153 21.3227C24.4136 21.3475 24.6762 21.3734 24.9408 21.3843C25.2356 21.3952 25.6085 21.2561 25.9717 21.121C26.1318 21.0614 26.2889 21.0028 26.4412 20.9541C26.78 20.8468 27.0973 20.7991 27.4038 20.7514C27.5551 20.7266 27.7064 20.7037 27.8607 20.6729C27.8714 20.6531 27.8821 20.6332 27.8939 20.6113C27.9417 20.5249 27.9944 20.4345 28.0598 20.3411C28.3419 19.9497 28.7471 19.7003 29.0722 19.4966L29.2078 19.4122C29.5564 19.1916 29.8629 18.9879 30.105 18.7386C30.5423 18.2796 31.1232 18.3114 31.5108 18.3312C31.6455 18.3392 31.8495 18.3481 31.91 18.3223C32.1678 18.207 31.9413 17.3993 31.8065 16.9165C31.7119 16.5777 31.6299 16.2846 31.6133 16.0183C31.5664 15.2642 31.9764 14.7317 32.3064 14.3045C32.5651 13.9687 32.7213 13.7481 32.7164 13.5355C32.7164 13.4948 32.7027 13.4382 32.6851 13.3845C32.4587 13.4948 32.0955 13.6369 31.6796 13.4421C31.0129 13.1302 30.6468 12.0264 30.8508 11.3985C31.0197 10.8779 31.54 10.5421 31.9198 10.2957L32.0565 10.2053C32.3806 9.98471 32.7242 9.79792 33.0542 9.6181C33.5159 9.36873 33.9513 9.13227 34.2949 8.82726C34.4404 8.69711 34.5761 8.56994 34.7089 8.44376C35.0076 8.1626 35.3161 7.8715 35.6792 7.61319C35.7056 7.5188 35.728 7.34096 35.7437 7.22571C35.7729 7.00714 35.8022 6.78062 35.8803 6.5849C36.2513 5.64304 37.1592 4.90884 37.9597 4.25908C38.2252 4.04448 38.4771 3.84081 38.6743 3.65602C38.7992 3.53878 38.9222 3.42055 39.0452 3.30332C39.6388 2.73701 40.2509 2.15084 40.9967 1.68289C41.601 1.30536 42.3898 0.833439 43.1249 0.552274C44.0972 0.1807 44.5579 0.208518 45.4766 0.262168L45.6474 0.27111C47.3607 0.371455 49.1384 0.32476 50.8575 0.281045C51.7205 0.258194 52.5796 0.235343 53.4347 0.230376C53.6651 0.230376 54.0156 0.185667 54.3836 0.138972C55.6078 -0.0140291 56.994 -0.188888 57.7818 0.503592C58.1118 0.792705 58.2924 1.19806 58.3031 1.67594C58.311 2.05248 58.1567 2.33464 58.0435 2.54129C58.0064 2.60686 57.9527 2.7082 57.9458 2.74297C57.9488 2.73205 57.9849 2.78768 58.0103 2.82742C58.1362 3.01718 58.3686 3.37088 58.2748 3.89843C58.2397 4.10111 58.1811 4.3167 58.1216 4.53528C58.0464 4.81147 57.9693 5.09761 57.9624 5.31419C57.9498 5.69073 57.6335 5.99376 57.2703 5.97289C56.9013 5.95998 56.6104 5.64603 56.6231 5.26849C56.6367 4.89195 56.7392 4.50944 56.831 4.17264C56.8788 3.9948 56.9276 3.82094 56.9569 3.65502C56.9481 3.65502 56.9218 3.62323 56.8993 3.58746C56.791 3.42254 56.6065 3.14535 56.6065 2.73701C56.6065 2.36345 56.7607 2.08328 56.873 1.87862C56.9072 1.81702 56.9589 1.72462 56.9657 1.69084C56.9608 1.58354 56.9267 1.55274 56.9072 1.53685C56.5694 1.23979 55.2544 1.40372 54.5496 1.49313C54.1386 1.5438 53.752 1.59348 53.4435 1.59547C52.5971 1.60043 51.7439 1.62229 50.8907 1.64315C49.1442 1.68886 47.3382 1.73654 45.5722 1.63421L45.3985 1.62328C44.5345 1.57162 44.3022 1.55871 43.5964 1.82894C42.9618 2.07235 42.2101 2.5244 41.7006 2.84431C41.0699 3.23973 40.533 3.75338 39.9648 4.29683C39.8379 4.41804 39.712 4.53925 39.5831 4.65947C39.3479 4.87804 39.0794 5.09661 38.7953 5.32611C38.1237 5.87056 37.3642 6.48555 37.1231 7.09457C37.1065 7.14425 37.085 7.30221 37.0713 7.40753C37.0147 7.84666 36.9424 8.3931 36.5041 8.69016C36.1927 8.90277 35.9145 9.16704 35.6187 9.44523C35.4771 9.57935 35.3317 9.71546 35.1774 9.85257C34.7186 10.2629 34.1924 10.548 33.6838 10.8222C33.3675 10.9931 33.0698 11.1541 32.8033 11.3369C32.7554 11.3707 32.6978 11.4064 32.6373 11.4462C32.5114 11.5276 32.2332 11.7065 32.1346 11.8217C32.1424 11.8992 32.1726 12.0115 32.2117 12.1009C32.3757 12.0214 32.6041 11.924 32.8804 11.9459C33.6633 12.0135 34.0401 12.8937 34.0558 13.4988C34.0743 14.2191 33.677 14.7337 33.3587 15.145C33.0971 15.4868 32.9351 15.7074 32.9487 15.9319C32.9565 16.0511 33.0288 16.3114 33.0932 16.5419C33.3314 17.3933 33.7746 18.978 32.4479 19.5701C32.0965 19.7281 31.7314 19.7082 31.4375 19.6933C31.3126 19.6864 31.1046 19.6764 31.047 19.7023C30.7171 20.051 30.3227 20.3113 29.9166 20.5706L29.7692 20.663C29.5212 20.816 29.2654 20.976 29.1405 21.1488C29.1083 21.1935 29.0819 21.2412 29.0585 21.2859C28.9345 21.5085 28.7256 21.884 28.174 21.9993C27.9827 22.04 27.7943 22.0708 27.6059 22.0996C27.3364 22.1414 27.0807 22.1811 26.8386 22.2566C26.7087 22.2993 26.5711 22.35 26.4334 22.4017C25.9697 22.5745 25.4435 22.7732 24.8871 22.7474C24.5981 22.7355 24.3131 22.7087 24.027 22.6808C23.4989 22.6282 22.9981 22.5805 22.511 22.6481C22.2572 22.6828 22.0258 22.7653 21.7817 22.8537C21.1716 23.0733 20.3369 23.3733 19.4046 22.508C18.9927 22.1265 18.8267 22.049 18.1473 21.9178L16.065 21.5164C15.942 21.4936 15.775 21.5264 15.5818 21.5651C15.3289 21.6168 15.0136 21.6784 14.6719 21.6297C12.9508 21.3724 11.0218 21.7112 8.59689 22.6928C8.49829 22.7325 8.42703 22.7643 8.37431 22.7891C8.39579 22.9779 8.42312 23.2491 8.39091 23.6217C8.53343 23.6416 8.69353 23.6843 8.86047 23.7737C9.81228 24.2834 9.63461 25.256 9.5487 25.724C9.53601 25.7876 9.52528 25.8511 9.51551 25.9127C9.4628 26.2694 9.49501 26.3429 9.65511 26.6917C9.70392 26.798 9.75664 26.9162 9.81326 27.0543C10.3941 28.4681 9.28415 29.1039 8.68865 29.4447C8.46705 29.5719 8.23764 29.701 8.11268 29.8331C7.99944 29.9524 7.89987 30.1372 7.79541 30.3329C7.62945 30.6448 7.44104 30.9975 7.10522 31.2847C6.79088 31.5529 6.41894 31.7536 6.05871 31.9454C5.74144 32.1153 5.44077 32.2762 5.21623 32.464C5.02782 32.6219 4.84527 32.8048 4.65295 32.9985C4.34252 33.3085 4.02524 33.6294 3.62499 33.8976C3.41901 34.0347 3.17203 34.147 2.9104 34.2652C2.69661 34.3606 2.33443 34.5225 2.14992 34.6626L2.15383 36.8096C2.15383 36.8881 2.15578 36.9527 2.15871 37.0023C2.21533 36.9974 2.27586 36.9904 2.32662 36.9835C2.5287 36.9606 2.77959 36.9308 3.06952 36.9308L36.9581 36.9566C38.0573 36.9566 39.2141 36.9884 40.2304 37.3471C40.6755 37.5021 40.9801 37.8538 41.1812 38.0853C41.2281 38.1399 41.2681 38.1896 41.3052 38.2234C41.4018 38.3048 41.5551 38.3674 41.7328 38.441C42.0129 38.5562 42.3615 38.7003 42.6572 39.0043C43.2811 39.6411 43.2713 40.4469 43.2645 41.0927C43.2606 41.2417 43.2606 41.3897 43.2664 41.5328C43.3084 42.3326 43.5261 42.5581 44.0532 43.1055C44.1372 43.1929 44.2251 43.2853 44.3188 43.3847C44.3842 43.4542 44.5287 43.4701 44.761 43.491C45.0412 43.5138 45.3897 43.5417 45.6953 43.7751C46.0291 44.0275 46.2546 44.5888 46.3376 44.8809C46.5455 45.0846 47.2777 45.4711 47.5647 45.6211C47.7639 45.7264 47.9298 45.8158 48.0265 45.8754L48.3672 46.088C49.3346 46.6891 50.3011 47.2922 51.2705 47.8943C51.3993 47.9727 51.533 48.0463 51.6707 48.1188C52.0924 48.3443 52.5698 48.6006 52.9291 49.0567C53.3215 49.5544 53.2942 50.0045 53.259 50.4029C53.3156 50.2936 53.3781 50.1893 53.4513 50.0879C53.5841 49.8982 53.7393 49.7541 53.877 49.626C54.0136 49.4998 54.1073 49.4104 54.1396 49.3388C54.1132 49.2772 54.0527 49.1739 54.0117 49.1034C53.8487 48.8232 53.6271 48.4387 53.7315 47.9857C53.7725 47.8108 53.8789 47.6588 54.0283 47.5634C54.0849 47.5276 54.205 47.4591 54.3631 47.3717C54.5818 47.2495 55.1373 46.9405 55.475 46.71C54.9723 45.5913 55.1392 44.2163 55.2886 42.9843C55.3345 42.6038 55.3784 42.2451 55.3989 41.9222C55.4204 41.5467 55.7337 41.2606 56.1076 41.2834C56.4776 41.3063 56.7588 41.6301 56.7353 42.0057C56.7148 42.3693 56.667 42.7498 56.6182 43.1522C56.4776 44.3166 56.3165 45.637 56.833 46.3911C56.954 46.5669 56.994 46.7895 56.9452 47.0021C56.8417 47.4502 56.3898 47.7879 55.1958 48.4606C55.352 48.7308 55.5395 49.0904 55.4731 49.5167C55.4623 49.5812 55.4487 49.6428 55.4321 49.7015C55.766 49.5793 56.1154 49.464 56.4845 49.3577C57.8775 48.9543 59.3409 48.7745 61.225 48.7745C62.0587 48.7745 62.8006 48.5053 63.5874 48.2211C64.2103 47.9946 64.8546 47.7621 65.576 47.6508C66.1852 47.5555 66.5005 47.7562 66.7728 47.9688C66.8636 48.0403 66.93 48.09 67.0442 48.1357C67.3625 48.2619 67.7325 48.2211 68.1601 48.1754C68.5925 48.1277 69.0836 48.0731 69.5844 48.2042C69.8821 48.2837 70.09 48.5579 70.0861 48.8709C70.0744 50.0571 68.5076 50.5459 67.7549 50.7814L67.0384 51.0099C66.4985 51.1848 65.9567 51.3586 65.41 51.5176C65.1631 51.5881 64.918 51.6587 64.672 51.7223C64.3889 51.7948 64.099 51.9597 63.7944 52.1316C63.481 52.3094 63.1579 52.4922 62.786 52.6174C62.1426 52.83 61.4837 52.9413 60.6471 52.9761C60.4069 52.987 60.1746 53.0943 59.9295 53.2056C59.5674 53.3735 59.1154 53.5801 58.6107 53.4132C58.3949 53.3864 57.5534 53.6775 57.1502 53.8196C56.832 53.9289 56.5577 54.0242 56.3419 54.0759C55.598 54.2528 54.8415 54.3918 54.1103 54.527L53.5968 54.6223C53.1516 54.7058 52.7035 54.7922 52.2613 54.8926L52.2076 54.9085C52.0797 54.9482 51.9021 55.0038 51.7078 55.0038L51.7107 54.9999ZM53.0735 51.6746C53.0569 51.7471 53.0403 51.8196 53.0237 51.8941C53.0032 51.9806 52.9788 52.064 52.9544 52.1455C52.9281 52.2359 52.9066 52.3055 52.8988 52.3651C52.8793 52.5379 52.8773 52.6313 52.8978 52.7247C52.9495 52.9791 52.9388 53.1907 52.8949 53.3645C53.0482 53.3347 53.2024 53.3049 53.3566 53.2751L53.875 53.1808C54.5896 53.0486 55.3296 52.9125 56.0412 52.7436C56.1906 52.7078 56.4483 52.6194 56.7217 52.525C57.7721 52.1604 58.4994 51.9359 59.0295 52.1127C59.0646 52.1058 59.2559 52.0173 59.3828 51.9597C59.7001 51.8137 60.0945 51.6328 60.5924 51.611C61.3021 51.5812 61.8498 51.4908 62.372 51.3169C62.622 51.2345 62.8748 51.0914 63.1442 50.9374C63.5123 50.7298 63.892 50.5142 64.3469 50.3969C64.5793 50.3373 64.8136 50.2707 65.0459 50.2042C65.5789 50.0482 66.11 49.8773 66.6362 49.7064L67.1253 49.5514C66.9388 49.5246 66.7504 49.4779 66.56 49.4014C66.2672 49.2862 66.0836 49.1411 65.9616 49.0457C65.9313 49.0229 65.906 48.999 65.8757 48.9812C65.8737 48.9851 65.8405 48.9851 65.7781 48.9941C65.1845 49.0855 64.6281 49.2862 64.0394 49.4998C63.1794 49.8107 62.293 50.1326 61.2279 50.1326C59.4717 50.1326 58.1235 50.2966 56.8535 50.6642C55.7142 50.992 54.7868 51.3984 54.0166 51.9031C53.7901 52.0521 53.5001 52.0481 53.2776 51.8951C53.1917 51.8365 53.1214 51.76 53.0735 51.6716V51.6746Z" fill="white"/>
  <path d="M67.6348 51.8019C67.6348 51.8019 67.6173 51.782 67.6173 51.7303C67.6173 51.6787 67.6348 51.6588 67.6348 51.6588H68.5564C68.5564 51.6588 68.5749 51.6806 68.5749 51.7303C68.5749 51.78 68.5564 51.8019 68.5564 51.8019H68.1932V52.9205C68.1932 52.9205 68.1659 52.9404 68.0976 52.9404C68.0292 52.9404 67.998 52.9205 67.998 52.9205V51.8019H67.6348Z" fill="white"/>
  <path d="M69.4282 52.8659C69.4135 52.8748 69.3891 52.8858 69.3471 52.8858C69.3178 52.8858 69.2837 52.8798 69.27 52.8659L68.9889 52.1476C68.9723 52.1088 68.9459 52.0323 68.944 52.0214C68.944 52.0264 68.9371 52.1277 68.9332 52.1565L68.8815 52.9205C68.8815 52.9205 68.8561 52.9404 68.7858 52.9404C68.7155 52.9404 68.6862 52.9205 68.6862 52.9205L68.7839 51.6787C68.7839 51.6787 68.8112 51.6588 68.8776 51.6588C68.9518 51.6588 68.9781 51.6787 68.9781 51.6787L69.3042 52.5162L69.3471 52.6533C69.3481 52.6473 69.3774 52.5559 69.392 52.5162L69.7181 51.6787C69.7181 51.6787 69.7464 51.6588 69.8206 51.6588C69.886 51.6588 69.9124 51.6787 69.9124 51.6787L70.01 52.9205C70.01 52.9205 69.9807 52.9404 69.9104 52.9404C69.8401 52.9404 69.8167 52.9205 69.8167 52.9205L69.763 52.1546L69.7523 52.0194C69.7523 52.0194 69.722 52.1148 69.7093 52.1456L69.4282 52.8659Z" fill="white"/>
</svg>`,N3=class extends ce{_getNysLogo(){return new DOMParser().parseFromString(yu,"image/svg+xml").documentElement}render(){return L`
      <footer class="nys-unavfooter">
        <div class="nys-unavfooter__main-container">
          <div class="nys-unavfooter__container_menu">
            <div class="nys-unavfooter__logo">
              <a
                href="https://www.ny.gov"
                target="_blank"
                id="nys-unavheader__logolink"
                aria-label="logo of New York State"
                >${this._getNysLogo()}</a
              >
            </div>
            <div class="nys-unavfooter__content">
              <ul>
                <li><a href="https://www.ny.gov/agencies">Agencies</a></li>
                <li>
                  <a href="https://www.ny.gov/mobileapps">App Directory</a>
                </li>
                <li><a href="https://www.ny.gov/counties">Counties</a></li>
                <li><a href="https://www.ny.gov/events">Events</a></li>
                <li><a href="https://www.ny.gov/programs">Programs</a></li>
                <li><a href="https://www.ny.gov/services">Services</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    `}};N3.styles=fu;let R3=N3;customElements.get("nys-unavfooter")||customElements.define("nys-unavfooter",R3);_e({react:be,tagName:"nys-accordion",elementClass:Zl});_e({react:be,tagName:"nys-accordionitem",elementClass:$n,events:{onNysAccordionItemToggle:"nys-accordionitem-toggle"}});const t3=_e({react:be,tagName:"nys-alert",elementClass:y3,events:{onNysAlertClosed:"nys-close"}});_e({react:be,tagName:"nys-avatar",elementClass:Nt});const vu=_e({react:be,tagName:"nys-backtotop",elementClass:La,events:{onNysClick:"nys-click",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}});_e({react:be,tagName:"nys-badge",elementClass:b3});const pu=_e({react:be,tagName:"nys-button",elementClass:g3,events:{onNysClick:"nys-click",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),za=_e({react:be,tagName:"nys-checkbox",elementClass:m3,events:{onNysChange:"nys-change",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),gu=_e({react:be,tagName:"nys-checkboxgroup",elementClass:C3}),bu=_e({react:be,tagName:"nys-fileinput",elementClass:tt,events:{onNysFileChange:"nys-change"}}),_u=_e({react:be,tagName:"nys-globalfooter",elementClass:Ql}),Cu=_e({react:be,tagName:"nys-globalheader",elementClass:Rn});_e({react:be,tagName:"nys-icon",elementClass:w3});const $l=_e({react:be,tagName:"nys-option",elementClass:cn}),n3=_e({react:be,tagName:"nys-radiobutton",elementClass:z3,events:{onNysChange:"nys-change",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),mu=_e({react:be,tagName:"nys-radiogroup",elementClass:E3}),xu=_e({react:be,tagName:"nys-select",elementClass:A3,events:{onNysChange:"nys-change",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),wu=_e({react:be,tagName:"nys-skipnav",elementClass:gi}),No=_e({react:be,tagName:"nys-textinput",elementClass:H3,events:{onNysInput:"nys-input",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),ku=_e({react:be,tagName:"nys-textarea",elementClass:L3,events:{onNysInput:"nys-input",onNysFocus:"nys-focus",onNysBlur:"nys-blur",onNysSelect:"nys-select"}}),Su=_e({react:be,tagName:"nys-toggle",elementClass:T3,events:{onNysChange:"nys-change",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),Eu=_e({react:be,tagName:"nys-tooltip",elementClass:un}),zu=_e({react:be,tagName:"nys-unavfooter",elementClass:R3}),Au=_e({react:be,tagName:"nys-unavheader",elementClass:D1});function Du(){const[r,i]=di.useState(null),o=c=>{c.preventDefault();const u=new FormData(c.target),f={};for(const[v,A]of u.entries()){const k=u.getAll(v);k.length>1?f[v]=k.map(x=>x instanceof File?{fileName:x.name,fileType:x.type}:x):f[v]=A instanceof File?{name:A.name,type:A.type,size:A.size}:A}alert(`Form Data:
`+JSON.stringify(f,null,2)),i(f)};return X.jsxs(X.Fragment,{children:[X.jsx(wu,{}),X.jsx(Au,{}),X.jsx(Cu,{appName:"React Demo Form",agencyName:"Office of Information Technology Services"}),X.jsxs("main",{id:"main-content",children:[X.jsx("h1",{className:"appTitle",children:"Vite + React + NYSDS"}),X.jsx(t3,{type:"info",heading:"NYSDS Components",text:"We make use of form-related NYSDS components in the native HTML form below.",primaryLabel:"Learn more on NYSDS reference site",primaryAction:"https://designsystem.ny.gov/",dismissible:!0}),X.jsxs("form",{id:"myForm",className:"nys-newsletter-form",method:"POST",onSubmit:o,children:[X.jsx(No,{name:"fullName",label:"Full name",required:!0,onNysBlur:c=>{console.log("nys-blur event received 🔥",c)}}),X.jsx(No,{name:"email",label:"Email",type:"email",required:!0}),X.jsx(ku,{name:"quote",label:"Enter your favorite quote:",value:"Majorities, of course, start with minorities.",required:!0}),X.jsxs(xu,{name:"newsletter_topic",label:"Select your preferred newsletter topic",id:"newsletter-topic",required:!0,children:[X.jsx($l,{value:"government_updates",label:"Government Updates"}),X.jsx($l,{value:"community_events",label:"Community Events"}),X.jsx($l,{value:"public_services",label:"Public Services & Resources"}),X.jsx($l,{value:"transportation_news",label:"Transportation & Infrastructure"}),X.jsx($l,{value:"environment",label:"Environment & Sustainability"})]}),X.jsx(bu,{name:"uploadImg",label:"Upload a file",description:"Accepted file types: .jpg, .png, .pdf",accept:"image/png, image/jpeg, .pdf",multiple:!0,dropzone:!0,required:!0}),X.jsx(No,{name:"test",label:"test",type:"text",required:!0}),X.jsxs(mu,{label:"How often do you want updates?",description:"These updates will be sent directly to your email.",size:"md",required:!0,children:[X.jsx(n3,{name:"frequency",label:"Weekly",value:"weekly"}),X.jsx(n3,{name:"frequency",label:"Monthly",value:"monthly"})]}),X.jsx(za,{label:"Subscribe to NYS Government Updates",description:"Get notified via email about important updates and services.",id:"subscribe-checkbox-disabled-checked",name:"subscribe",value:"email-updates",required:!0}),X.jsxs(gu,{label:"Select your favorite New York landmarks",description:"Choose from the options below",required:!0,children:[X.jsx(za,{name:"landmarks",label:"Adirondacks",value:"adirondacks"}),X.jsx(za,{name:"landmarks",value:"finger-lakes",label:"Finger Lakes"}),X.jsx(za,{name:"landmarks",value:"catskills",label:"Catskills"}),X.jsx(za,{name:"landmarks",value:"niagara-falls",label:"Niagara Falls"}),X.jsx(za,{name:"landmarks",value:"coney-island",label:"Coney Island"})]}),X.jsx(Su,{label:"Dark Mode",name:"toggle-switch",value:"access",children:X.jsx("p",{slot:"description",children:"Toggle switch is usually NOT recommended for forms (use checkboxes instead)."})}),X.jsx(Eu,{text:"Hello",position:"bottom",children:X.jsx(pu,{type:"submit",fullWidth:!0,label:"Subscribe"})})]}),X.jsx("br",{}),r&&X.jsx(t3,{type:"success",heading:"Form submitted successfully",text:`${r?`

Submitted Data:
`+JSON.stringify(r,null,2):""}`,dismissible:!0})]}),X.jsx(_u,{agencyName:"Office of Information Technology Services",children:X.jsxs("ul",{children:[X.jsx("li",{children:X.jsx("a",{href:"https://its.ny.gov",children:"ITS Home"})}),X.jsx("li",{children:X.jsx("a",{href:"https://its.ny.gov/about",children:"About ITS"})})]})}),X.jsx(zu,{}),X.jsx(vu,{})]})}C4.createRoot(document.getElementById("root")).render(X.jsx(di.StrictMode,{children:X.jsx(Du,{})}));
