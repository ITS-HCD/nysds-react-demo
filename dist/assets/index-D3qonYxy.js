function L8(i,l){for(var s=0;s<l.length;s++){const o=l[s];if(typeof o!="string"&&!Array.isArray(o)){for(const c in o)if(c!=="default"&&!(c in i)){const d=Object.getOwnPropertyDescriptor(o,c);d&&Object.defineProperty(i,c,d.get?d:{enumerable:!0,get:()=>o[c]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function s(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(c){if(c.ep)return;c.ep=!0;const d=s(c);fetch(c.href,d)}})();function A8(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var n5={exports:{}},ji={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function z8(){if(u0)return ji;u0=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function s(o,c,d){var h=null;if(d!==void 0&&(h=""+d),c.key!==void 0&&(h=""+c.key),"key"in c){d={};for(var g in c)g!=="key"&&(d[g]=c[g])}else d=c;return c=d.ref,{$$typeof:i,type:o,key:h,ref:c!==void 0?c:null,props:d}}return ji.Fragment=l,ji.jsx=s,ji.jsxs=s,ji}var d0;function T8(){return d0||(d0=1,n5.exports=z8()),n5.exports}var H=T8(),a5={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function R8(){if(h0)return xe;h0=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.iterator;function E(x){return x===null||typeof x!="object"?null:(x=w&&x[w]||x["@@iterator"],typeof x=="function"?x:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,F={};function J(x,B,ie){this.props=x,this.context=B,this.refs=F,this.updater=ie||A}J.prototype.isReactComponent={},J.prototype.setState=function(x,B){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,B,"setState")},J.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function Z(){}Z.prototype=J.prototype;function ye(x,B,ie){this.props=x,this.context=B,this.refs=F,this.updater=ie||A}var ee=ye.prototype=new Z;ee.constructor=ye,N(ee,J.prototype),ee.isPureReactComponent=!0;var be=Array.isArray,W={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function He(x,B,ie,I,K,we){return ie=we.ref,{$$typeof:i,type:x,key:B,ref:ie!==void 0?ie:null,props:we}}function Ve(x,B){return He(x.type,B,void 0,void 0,void 0,x.props)}function X(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function ve(x){var B={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ie){return B[ie]})}var Pe=/\/+/g;function Dt(x,B){return typeof x=="object"&&x!==null&&x.key!=null?ve(""+x.key):B.toString(36)}function vt(){}function De(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(vt,vt):(x.status="pending",x.then(function(B){x.status==="pending"&&(x.status="fulfilled",x.value=B)},function(B){x.status==="pending"&&(x.status="rejected",x.reason=B)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function Le(x,B,ie,I,K){var we=typeof x;(we==="undefined"||we==="boolean")&&(x=null);var ge=!1;if(x===null)ge=!0;else switch(we){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(x.$$typeof){case i:case l:ge=!0;break;case b:return ge=x._init,Le(ge(x._payload),B,ie,I,K)}}if(ge)return K=K(x),ge=I===""?"."+Dt(x,0):I,be(K)?(ie="",ge!=null&&(ie=ge.replace(Pe,"$&/")+"/"),Le(K,B,ie,"",function(nt){return nt})):K!=null&&(X(K)&&(K=Ve(K,ie+(K.key==null||x&&x.key===K.key?"":(""+K.key).replace(Pe,"$&/")+"/")+ge)),B.push(K)),1;ge=0;var Mt=I===""?".":I+":";if(be(x))for(var $e=0;$e<x.length;$e++)I=x[$e],we=Mt+Dt(I,$e),ge+=Le(I,B,ie,we,K);else if($e=E(x),typeof $e=="function")for(x=$e.call(x),$e=0;!(I=x.next()).done;)I=I.value,we=Mt+Dt(I,$e++),ge+=Le(I,B,ie,we,K);else if(we==="object"){if(typeof x.then=="function")return Le(De(x),B,ie,I,K);throw B=String(x),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return ge}function j(x,B,ie){if(x==null)return x;var I=[],K=0;return Le(x,I,"","",function(we){return B.call(ie,we,K++)}),I}function oe(x){if(x._status===-1){var B=x._result;B=B(),B.then(function(ie){(x._status===0||x._status===-1)&&(x._status=1,x._result=ie)},function(ie){(x._status===0||x._status===-1)&&(x._status=2,x._result=ie)}),x._status===-1&&(x._status=0,x._result=B)}if(x._status===1)return x._result.default;throw x._result}var ae=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function _e(){}return xe.Children={map:j,forEach:function(x,B,ie){j(x,function(){B.apply(this,arguments)},ie)},count:function(x){var B=0;return j(x,function(){B++}),B},toArray:function(x){return j(x,function(B){return B})||[]},only:function(x){if(!X(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},xe.Component=J,xe.Fragment=s,xe.Profiler=c,xe.PureComponent=ye,xe.StrictMode=o,xe.Suspense=y,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,xe.act=function(){throw Error("act(...) is not supported in production builds of React.")},xe.cache=function(x){return function(){return x.apply(null,arguments)}},xe.cloneElement=function(x,B,ie){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var I=N({},x.props),K=x.key,we=void 0;if(B!=null)for(ge in B.ref!==void 0&&(we=void 0),B.key!==void 0&&(K=""+B.key),B)!T.call(B,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&B.ref===void 0||(I[ge]=B[ge]);var ge=arguments.length-2;if(ge===1)I.children=ie;else if(1<ge){for(var Mt=Array(ge),$e=0;$e<ge;$e++)Mt[$e]=arguments[$e+2];I.children=Mt}return He(x.type,K,void 0,void 0,we,I)},xe.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:d,_context:x},x},xe.createElement=function(x,B,ie){var I,K={},we=null;if(B!=null)for(I in B.key!==void 0&&(we=""+B.key),B)T.call(B,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(K[I]=B[I]);var ge=arguments.length-2;if(ge===1)K.children=ie;else if(1<ge){for(var Mt=Array(ge),$e=0;$e<ge;$e++)Mt[$e]=arguments[$e+2];K.children=Mt}if(x&&x.defaultProps)for(I in ge=x.defaultProps,ge)K[I]===void 0&&(K[I]=ge[I]);return He(x,we,void 0,void 0,null,K)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(x){return{$$typeof:g,render:x}},xe.isValidElement=X,xe.lazy=function(x){return{$$typeof:b,_payload:{_status:-1,_result:x},_init:oe}},xe.memo=function(x,B){return{$$typeof:p,type:x,compare:B===void 0?null:B}},xe.startTransition=function(x){var B=W.T,ie={};W.T=ie;try{var I=x(),K=W.S;K!==null&&K(ie,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(_e,ae)}catch(we){ae(we)}finally{W.T=B}},xe.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},xe.use=function(x){return W.H.use(x)},xe.useActionState=function(x,B,ie){return W.H.useActionState(x,B,ie)},xe.useCallback=function(x,B){return W.H.useCallback(x,B)},xe.useContext=function(x){return W.H.useContext(x)},xe.useDebugValue=function(){},xe.useDeferredValue=function(x,B){return W.H.useDeferredValue(x,B)},xe.useEffect=function(x,B){return W.H.useEffect(x,B)},xe.useId=function(){return W.H.useId()},xe.useImperativeHandle=function(x,B,ie){return W.H.useImperativeHandle(x,B,ie)},xe.useInsertionEffect=function(x,B){return W.H.useInsertionEffect(x,B)},xe.useLayoutEffect=function(x,B){return W.H.useLayoutEffect(x,B)},xe.useMemo=function(x,B){return W.H.useMemo(x,B)},xe.useOptimistic=function(x,B){return W.H.useOptimistic(x,B)},xe.useReducer=function(x,B,ie){return W.H.useReducer(x,B,ie)},xe.useRef=function(x){return W.H.useRef(x)},xe.useState=function(x){return W.H.useState(x)},xe.useSyncExternalStore=function(x,B,ie){return W.H.useSyncExternalStore(x,B,ie)},xe.useTransition=function(){return W.H.useTransition()},xe.version="19.0.0",xe}var f0;function S5(){return f0||(f0=1,a5.exports=R8()),a5.exports}var O=S5();const H8=A8(O),Ke=L8({__proto__:null,default:H8},[O]);var l5={exports:{}},Zi={},i5={exports:{}},r5={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function O8(){return y0||(y0=1,function(i){function l(j,oe){var ae=j.length;j.push(oe);e:for(;0<ae;){var _e=ae-1>>>1,x=j[_e];if(0<c(x,oe))j[_e]=oe,j[ae]=x,ae=_e;else break e}}function s(j){return j.length===0?null:j[0]}function o(j){if(j.length===0)return null;var oe=j[0],ae=j.pop();if(ae!==oe){j[0]=ae;e:for(var _e=0,x=j.length,B=x>>>1;_e<B;){var ie=2*(_e+1)-1,I=j[ie],K=ie+1,we=j[K];if(0>c(I,ae))K<x&&0>c(we,I)?(j[_e]=we,j[K]=ae,_e=K):(j[_e]=I,j[ie]=ae,_e=ie);else if(K<x&&0>c(we,ae))j[_e]=we,j[K]=ae,_e=K;else break e}}return oe}function c(j,oe){var ae=j.sortIndex-oe.sortIndex;return ae!==0?ae:j.id-oe.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;i.unstable_now=function(){return d.now()}}else{var h=Date,g=h.now();i.unstable_now=function(){return h.now()-g}}var y=[],p=[],b=1,w=null,E=3,A=!1,N=!1,F=!1,J=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,ye=typeof setImmediate<"u"?setImmediate:null;function ee(j){for(var oe=s(p);oe!==null;){if(oe.callback===null)o(p);else if(oe.startTime<=j)o(p),oe.sortIndex=oe.expirationTime,l(y,oe);else break;oe=s(p)}}function be(j){if(F=!1,ee(j),!N)if(s(y)!==null)N=!0,De();else{var oe=s(p);oe!==null&&Le(be,oe.startTime-j)}}var W=!1,T=-1,He=5,Ve=-1;function X(){return!(i.unstable_now()-Ve<He)}function ve(){if(W){var j=i.unstable_now();Ve=j;var oe=!0;try{e:{N=!1,F&&(F=!1,Z(T),T=-1),A=!0;var ae=E;try{t:{for(ee(j),w=s(y);w!==null&&!(w.expirationTime>j&&X());){var _e=w.callback;if(typeof _e=="function"){w.callback=null,E=w.priorityLevel;var x=_e(w.expirationTime<=j);if(j=i.unstable_now(),typeof x=="function"){w.callback=x,ee(j),oe=!0;break t}w===s(y)&&o(y),ee(j)}else o(y);w=s(y)}if(w!==null)oe=!0;else{var B=s(p);B!==null&&Le(be,B.startTime-j),oe=!1}}break e}finally{w=null,E=ae,A=!1}oe=void 0}}finally{oe?Pe():W=!1}}}var Pe;if(typeof ye=="function")Pe=function(){ye(ve)};else if(typeof MessageChannel<"u"){var Dt=new MessageChannel,vt=Dt.port2;Dt.port1.onmessage=ve,Pe=function(){vt.postMessage(null)}}else Pe=function(){J(ve,0)};function De(){W||(W=!0,Pe())}function Le(j,oe){T=J(function(){j(i.unstable_now())},oe)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(j){j.callback=null},i.unstable_continueExecution=function(){N||A||(N=!0,De())},i.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):He=0<j?Math.floor(1e3/j):5},i.unstable_getCurrentPriorityLevel=function(){return E},i.unstable_getFirstCallbackNode=function(){return s(y)},i.unstable_next=function(j){switch(E){case 1:case 2:case 3:var oe=3;break;default:oe=E}var ae=E;E=oe;try{return j()}finally{E=ae}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(j,oe){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var ae=E;E=j;try{return oe()}finally{E=ae}},i.unstable_scheduleCallback=function(j,oe,ae){var _e=i.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?_e+ae:_e):ae=_e,j){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=ae+x,j={id:b++,callback:oe,priorityLevel:j,startTime:ae,expirationTime:x,sortIndex:-1},ae>_e?(j.sortIndex=ae,l(p,j),s(y)===null&&j===s(p)&&(F?(Z(T),T=-1):F=!0,Le(be,ae-_e))):(j.sortIndex=x,l(y,j),N||A||(N=!0,De())),j},i.unstable_shouldYield=X,i.unstable_wrapCallback=function(j){var oe=E;return function(){var ae=E;E=oe;try{return j.apply(this,arguments)}finally{E=ae}}}}(r5)),r5}var p0;function $8(){return p0||(p0=1,i5.exports=O8()),i5.exports}var s5={exports:{}},Nt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0;function U8(){if(v0)return Nt;v0=1;var i=S5();function l(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(l(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(y,p,b){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:w==null?null:""+w,children:y,containerInfo:p,implementation:b}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Nt.createPortal=function(y,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(l(299));return d(y,p,null,b)},Nt.flushSync=function(y){var p=h.T,b=o.p;try{if(h.T=null,o.p=2,y)return y()}finally{h.T=p,o.p=b,o.d.f()}},Nt.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(y,p))},Nt.prefetchDNS=function(y){typeof y=="string"&&o.d.D(y)},Nt.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var b=p.as,w=g(b,p.crossOrigin),E=typeof p.integrity=="string"?p.integrity:void 0,A=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?o.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:w,integrity:E,fetchPriority:A}):b==="script"&&o.d.X(y,{crossOrigin:w,integrity:E,fetchPriority:A,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nt.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=g(p.as,p.crossOrigin);o.d.M(y,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(y)},Nt.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,w=g(b,p.crossOrigin);o.d.L(y,b,{crossOrigin:w,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nt.preloadModule=function(y,p){if(typeof y=="string")if(p){var b=g(p.as,p.crossOrigin);o.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(y)},Nt.requestFormReset=function(y){o.d.r(y)},Nt.unstable_batchedUpdates=function(y,p){return y(p)},Nt.useFormState=function(y,p,b){return h.H.useFormState(y,p,b)},Nt.useFormStatus=function(){return h.H.useHostTransitionStatus()},Nt.version="19.0.0",Nt}var g0;function l3(){if(g0)return s5.exports;g0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),s5.exports=U8(),s5.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function N8(){if(m0)return Zi;m0=1;var i=$8(),l=S5(),s=l3();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var d=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),E=Symbol.for("react.consumer"),A=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),be=Symbol.for("react.memo_cache_sentinel"),W=Symbol.iterator;function T(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var He=Symbol.for("react.client.reference");function Ve(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===He?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case y:return"Fragment";case g:return"Portal";case b:return"Profiler";case p:return"StrictMode";case F:return"Suspense";case J:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case A:return(e.displayName||"Context")+".Provider";case E:return(e._context.displayName||"Context")+".Consumer";case N:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:Ve(e.type)||"Memo";case ye:t=e._payload,e=e._init;try{return Ve(e(t))}catch{}}return null}var X=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ve=Object.assign,Pe,Dt;function vt(e){if(Pe===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pe=t&&t[1]||"",Dt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pe+e+Dt}var De=!1;function Le(e,t){if(!e||De)return"";De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch($){var z=$}Reflect.construct(e,[],q)}else{try{q.call()}catch($){z=$}e.call(q.prototype)}}else{try{throw Error()}catch($){z=$}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch($){if($&&z&&typeof $.stack=="string")return[$.stack,z.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),f=u[0],v=u[1];if(f&&v){var m=f.split(`
`),S=v.split(`
`);for(r=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;if(a===m.length||r===S.length)for(a=m.length-1,r=S.length-1;1<=a&&0<=r&&m[a]!==S[r];)r--;for(;1<=a&&0<=r;a--,r--)if(m[a]!==S[r]){if(a!==1||r!==1)do if(a--,r--,0>r||m[a]!==S[r]){var U=`
`+m[a].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=a&&0<=r);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?vt(n):""}function j(e){switch(e.tag){case 26:case 27:case 5:return vt(e.type);case 16:return vt("Lazy");case 13:return vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return e=Le(e.type,!1),e;case 11:return e=Le(e.type.render,!1),e;case 1:return e=Le(e.type,!0),e;default:return""}}function oe(e){try{var t="";do t+=j(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function ae(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _e(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(ae(e)!==e)throw Error(o(188))}function B(e){var t=e.alternate;if(!t){if(t=ae(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var u=r.alternate;if(u===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===u.child){for(u=r.child;u;){if(u===n)return x(r),e;if(u===a)return x(r),t;u=u.sibling}throw Error(o(188))}if(n.return!==a.return)n=r,a=u;else{for(var f=!1,v=r.child;v;){if(v===n){f=!0,n=r,a=u;break}if(v===a){f=!0,a=r,n=u;break}v=v.sibling}if(!f){for(v=u.child;v;){if(v===n){f=!0,n=u,a=r;break}if(v===a){f=!0,a=u,n=r;break}v=v.sibling}if(!f)throw Error(o(189))}}if(n.alternate!==a)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function ie(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ie(e),t!==null)return t;e=e.sibling}return null}var I=Array.isArray,K=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,we={pending:!1,data:null,method:null,action:null},ge=[],Mt=-1;function $e(e){return{current:e}}function nt(e){0>Mt||(e.current=ge[Mt],ge[Mt]=null,Mt--)}function Ce(e,t){Mt++,ge[Mt]=e.current,e.current=t}var Lt=$e(null),Ea=$e(null),jn=$e(null),cn=$e(null);function X1(e,t){switch(Ce(jn,t),Ce(Ea,e),Ce(Lt,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?V7(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=V7(e),t=B7(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}nt(Lt),Ce(Lt,t)}function Da(){nt(Lt),nt(Ea),nt(jn)}function Q1(e){e.memoizedState!==null&&Ce(cn,e);var t=Lt.current,n=B7(t,e.type);t!==n&&(Ce(Ea,e),Ce(Lt,n))}function F1(e){Ea.current===e&&(nt(Lt),nt(Ea)),cn.current===e&&(nt(cn),Ui._currentValue=we)}var Gl=Object.prototype.hasOwnProperty,Xl=i.unstable_scheduleCallback,Ql=i.unstable_cancelCallback,aa=i.unstable_shouldYield,u1=i.unstable_requestPaint,Ft=i.unstable_now,Fl=i.unstable_getCurrentPriorityLevel,An=i.unstable_ImmediatePriority,un=i.unstable_UserBlockingPriority,d1=i.unstable_NormalPriority,Kl=i.unstable_LowPriority,gr=i.unstable_IdlePriority,Zn=i.log,mr=i.unstable_setDisableYieldValue,Ma=null,Ot=null;function Js(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Ma,e,void 0,(e.current.flags&128)===128)}catch{}}function zn(e){if(typeof Zn=="function"&&mr(e),Ot&&typeof Ot.setStrictMode=="function")try{Ot.setStrictMode(Ma,e)}catch{}}var Ct=Math.clz32?Math.clz32:Ps,br=Math.log,Jl=Math.LN2;function Ps(e){return e>>>=0,e===0?32:31-(br(e)/Jl|0)|0}var h1=128,K1=4194304;function Yn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function la(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,r=e.suspendedLanes,u=e.pingedLanes,f=e.warmLanes;e=e.finishedLanes!==0;var v=n&134217727;return v!==0?(n=v&~r,n!==0?a=Yn(n):(u&=v,u!==0?a=Yn(u):e||(f=v&~f,f!==0&&(a=Yn(f))))):(v=n&~r,v!==0?a=Yn(v):u!==0?a=Yn(u):e||(f=n&~f,f!==0&&(a=Yn(f)))),a===0?0:t!==0&&t!==a&&(t&r)===0&&(r=a&-a,f=t&-t,r>=f||r===32&&(f&4194176)!==0)?t:a}function Gn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ws(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _r(){var e=h1;return h1<<=1,(h1&4194176)===0&&(h1=128),e}function C(){var e=K1;return K1<<=1,(K1&62914560)===0&&(K1=4194304),e}function M(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function R(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Y(e,t,n,a,r,u){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var v=e.entanglements,m=e.expirationTimes,S=e.hiddenUpdates;for(n=f&~n;0<n;){var U=31-Ct(n),q=1<<U;v[U]=0,m[U]=-1;var z=S[U];if(z!==null)for(S[U]=null,U=0;U<z.length;U++){var $=z[U];$!==null&&($.lane&=-536870913)}n&=~q}a!==0&&Q(e,a,0),u!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=u&~(f&~t))}function Q(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Ct(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194218}function re(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Ct(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function ce(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function le(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:l0(e.type))}function de(e,t){var n=K.p;try{return K.p=e,t()}finally{K.p=n}}var ue=Math.random().toString(36).slice(2),te="__reactFiber$"+ue,P="__reactProps$"+ue,pe="__reactContainer$"+ue,qe="__reactEvents$"+ue,xt="__reactListeners$"+ue,At="__reactHandles$"+ue,Fe="__reactResources$"+ue,Be="__reactMarker$"+ue;function Tn(e){delete e[te],delete e[P],delete e[qe],delete e[xt],delete e[At]}function Kt(e){var t=e[te];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pe]||n[te]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Z7(e);e!==null;){if(n=e[te])return n;e=Z7(e)}return t}e=n,n=e.parentNode}return null}function Vt(e){if(e=e[te]||e[pe]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function $t(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Xn(e){var t=e[Fe];return t||(t=e[Fe]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[Be]=!0}var Qn=new Set,f1={};function dn(e,t){Ae(e,t),Ae(e+"Capture",t)}function Ae(e,t){for(f1[e]=t,e=0;e<t.length;e++)Qn.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),J1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),La={},at={};function P1(e){return Gl.call(at,e)?!0:Gl.call(La,e)?!1:J1.test(e)?at[e]=!0:(La[e]=!0,!1)}function y1(e,t,n){if(P1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function W1(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ia(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function hn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function j5(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kd(e){var t=j5(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(f){a=""+f,u.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cr(e){e._valueTracker||(e._valueTracker=kd(e))}function Z5(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=j5(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function xr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Sd=/[\n"\\]/g;function fn(e){return e.replace(Sd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Is(e,t,n,a,r,u,f,v){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+hn(t)):e.value!==""+hn(t)&&(e.value=""+hn(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?eo(e,f,hn(t)):n!=null?eo(e,f,hn(n)):a!=null&&e.removeAttribute("value"),r==null&&u!=null&&(e.defaultChecked=!!u),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+hn(v):e.removeAttribute("name")}function Y5(e,t,n,a,r,u,f,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;n=n!=null?""+hn(n):"",t=t!=null?""+hn(t):n,v||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=v?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function eo(e,t,n){t==="number"&&xr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function I1(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+hn(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function G5(e,t,n){if(t!=null&&(t=""+hn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+hn(n):""}function X5(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(o(92));if(I(a)){if(1<a.length)throw Error(o(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=hn(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function el(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ed=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Q5(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Ed.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function F5(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&Q5(e,r,a)}else for(var u in t)t.hasOwnProperty(u)&&Q5(e,u,t[u])}function to(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Md=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wr(e){return Md.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var no=null;function ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tl=null,nl=null;function K5(e){var t=Vt(e);if(t&&(e=t.stateNode)){var n=e[P]||null;e:switch(e=t.stateNode,t.type){case"input":if(Is(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+fn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[P]||null;if(!r)throw Error(o(90));Is(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Z5(a)}break e;case"textarea":G5(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&I1(e,!!n.multiple,t,!1)}}}var lo=!1;function J5(e,t,n){if(lo)return e(t,n);lo=!0;try{var a=e(t);return a}finally{if(lo=!1,(tl!==null||nl!==null)&&(rs(),tl&&(t=tl,e=nl,nl=tl=null,K5(t),e)))for(t=0;t<e.length;t++)K5(e[t])}}function Pl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[P]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var io=!1;if(Ge)try{var Wl={};Object.defineProperty(Wl,"passive",{get:function(){io=!0}}),window.addEventListener("test",Wl,Wl),window.removeEventListener("test",Wl,Wl)}catch{io=!1}var Aa=null,ro=null,kr=null;function P5(){if(kr)return kr;var e,t=ro,n=t.length,a,r="value"in Aa?Aa.value:Aa.textContent,u=r.length;for(e=0;e<n&&t[e]===r[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===r[u-a];a++);return kr=r.slice(e,1<a?1-a:void 0)}function Sr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Er(){return!0}function W5(){return!1}function Zt(e){function t(n,a,r,u,f){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=u,this.target=f,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Er:W5,this.isPropagationStopped=W5,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),t}var p1={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dr=Zt(p1),Il=ve({},p1,{view:0,detail:0}),Ld=Zt(Il),so,oo,ei,Mr=ve({},Il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(so=e.screenX-ei.screenX,oo=e.screenY-ei.screenY):oo=so=0,ei=e),so)},movementY:function(e){return"movementY"in e?e.movementY:oo}}),I5=Zt(Mr),Ad=ve({},Mr,{dataTransfer:0}),zd=Zt(Ad),Td=ve({},Il,{relatedTarget:0}),co=Zt(Td),Rd=ve({},p1,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=Zt(Rd),Od=ve({},p1,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$d=Zt(Od),Ud=ve({},p1,{data:0}),ec=Zt(Ud),Nd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bd[e])?!!t[e]:!1}function uo(){return qd}var jd=ve({},Il,{key:function(e){if(e.key){var t=Nd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uo,charCode:function(e){return e.type==="keypress"?Sr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zd=Zt(jd),Yd=ve({},Mr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tc=Zt(Yd),Gd=ve({},Il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uo}),Xd=Zt(Gd),Qd=ve({},p1,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fd=Zt(Qd),Kd=ve({},Mr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jd=Zt(Kd),Pd=ve({},p1,{newState:0,oldState:0}),Wd=Zt(Pd),Id=[9,13,27,32],ho=Ge&&"CompositionEvent"in window,ti=null;Ge&&"documentMode"in document&&(ti=document.documentMode);var e4=Ge&&"TextEvent"in window&&!ti,nc=Ge&&(!ho||ti&&8<ti&&11>=ti),ac=" ",lc=!1;function ic(e,t){switch(e){case"keyup":return Id.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var al=!1;function t4(e,t){switch(e){case"compositionend":return rc(t);case"keypress":return t.which!==32?null:(lc=!0,ac);case"textInput":return e=t.data,e===ac&&lc?null:e;default:return null}}function n4(e,t){if(al)return e==="compositionend"||!ho&&ic(e,t)?(e=P5(),kr=ro=Aa=null,al=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nc&&t.locale!=="ko"?null:t.data;default:return null}}var a4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!a4[e.type]:t==="textarea"}function oc(e,t,n,a){tl?nl?nl.push(a):nl=[a]:tl=a,t=ds(t,"onChange"),0<t.length&&(n=new Dr("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var ni=null,ai=null;function l4(e){H7(e,0)}function Lr(e){var t=$t(e);if(Z5(t))return e}function cc(e,t){if(e==="change")return t}var uc=!1;if(Ge){var fo;if(Ge){var yo="oninput"in document;if(!yo){var dc=document.createElement("div");dc.setAttribute("oninput","return;"),yo=typeof dc.oninput=="function"}fo=yo}else fo=!1;uc=fo&&(!document.documentMode||9<document.documentMode)}function hc(){ni&&(ni.detachEvent("onpropertychange",fc),ai=ni=null)}function fc(e){if(e.propertyName==="value"&&Lr(ai)){var t=[];oc(t,ai,e,ao(e)),J5(l4,t)}}function i4(e,t,n){e==="focusin"?(hc(),ni=t,ai=n,ni.attachEvent("onpropertychange",fc)):e==="focusout"&&hc()}function r4(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Lr(ai)}function s4(e,t){if(e==="click")return Lr(t)}function o4(e,t){if(e==="input"||e==="change")return Lr(t)}function c4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jt=typeof Object.is=="function"?Object.is:c4;function li(e,t){if(Jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!Gl.call(t,r)||!Jt(e[r],t[r]))return!1}return!0}function yc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pc(e,t){var n=yc(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yc(n)}}function vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=xr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xr(e.document)}return t}function po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function u4(e,t){var n=gc(t);t=e.focusedElem;var a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&vc(t.ownerDocument.documentElement,t)){if(a!==null&&po(t)){if(e=a.start,n=a.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,u=Math.min(a.start,r);a=a.end===void 0?u:Math.min(a.end,r),!n.extend&&u>a&&(r=a,a=u,u=r),r=pc(t,u);var f=pc(t,a);r&&f&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==f.node||n.focusOffset!==f.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),u>a?(n.addRange(e),n.extend(f.node,f.offset)):(e.setEnd(f.node,f.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var d4=Ge&&"documentMode"in document&&11>=document.documentMode,ll=null,vo=null,ii=null,go=!1;function mc(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;go||ll==null||ll!==xr(a)||(a=ll,"selectionStart"in a&&po(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ii&&li(ii,a)||(ii=a,a=ds(vo,"onSelect"),0<a.length&&(t=new Dr("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ll)))}function v1(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var il={animationend:v1("Animation","AnimationEnd"),animationiteration:v1("Animation","AnimationIteration"),animationstart:v1("Animation","AnimationStart"),transitionrun:v1("Transition","TransitionRun"),transitionstart:v1("Transition","TransitionStart"),transitioncancel:v1("Transition","TransitionCancel"),transitionend:v1("Transition","TransitionEnd")},mo={},bc={};Ge&&(bc=document.createElement("div").style,"AnimationEvent"in window||(delete il.animationend.animation,delete il.animationiteration.animation,delete il.animationstart.animation),"TransitionEvent"in window||delete il.transitionend.transition);function g1(e){if(mo[e])return mo[e];if(!il[e])return e;var t=il[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bc)return mo[e]=t[n];return e}var _c=g1("animationend"),Cc=g1("animationiteration"),xc=g1("animationstart"),h4=g1("transitionrun"),f4=g1("transitionstart"),y4=g1("transitioncancel"),wc=g1("transitionend"),kc=new Map,Sc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Rn(e,t){kc.set(e,t),dn(t,[e])}var yn=[],rl=0,bo=0;function Ar(){for(var e=rl,t=bo=rl=0;t<e;){var n=yn[t];yn[t++]=null;var a=yn[t];yn[t++]=null;var r=yn[t];yn[t++]=null;var u=yn[t];if(yn[t++]=null,a!==null&&r!==null){var f=a.pending;f===null?r.next=r:(r.next=f.next,f.next=r),a.pending=r}u!==0&&Ec(n,r,u)}}function zr(e,t,n,a){yn[rl++]=e,yn[rl++]=t,yn[rl++]=n,yn[rl++]=a,bo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function _o(e,t,n,a){return zr(e,t,n,a),Tr(e)}function za(e,t){return zr(e,null,null,t),Tr(e)}function Ec(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,u=e.return;u!==null;)u.childLanes|=n,a=u.alternate,a!==null&&(a.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(r=!0)),e=u,u=u.return;r&&t!==null&&e.tag===3&&(u=e.stateNode,r=31-Ct(n),u=u.hiddenUpdates,e=u[r],e===null?u[r]=[t]:e.push(t),t.lane=n|536870912)}function Tr(e){if(50<Ai)throw Ai=0,E2=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var sl={},Dc=new WeakMap;function pn(e,t){if(typeof e=="object"&&e!==null){var n=Dc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:oe(t)},Dc.set(e,t),t)}return{value:e,source:t,stack:oe(t)}}var ol=[],cl=0,Rr=null,Hr=0,vn=[],gn=0,m1=null,ra=1,sa="";function b1(e,t){ol[cl++]=Hr,ol[cl++]=Rr,Rr=e,Hr=t}function Mc(e,t,n){vn[gn++]=ra,vn[gn++]=sa,vn[gn++]=m1,m1=e;var a=ra;e=sa;var r=32-Ct(a)-1;a&=~(1<<r),n+=1;var u=32-Ct(t)+r;if(30<u){var f=r-r%5;u=(a&(1<<f)-1).toString(32),a>>=f,r-=f,ra=1<<32-Ct(t)+r|n<<r|a,sa=u+e}else ra=1<<u|n<<r|a,sa=e}function Co(e){e.return!==null&&(b1(e,1),Mc(e,1,0))}function xo(e){for(;e===Rr;)Rr=ol[--cl],ol[cl]=null,Hr=ol[--cl],ol[cl]=null;for(;e===m1;)m1=vn[--gn],vn[gn]=null,sa=vn[--gn],vn[gn]=null,ra=vn[--gn],vn[gn]=null}var Bt=null,zt=null,Ue=!1,Hn=null,Fn=!1,wo=Error(o(519));function _1(e){var t=Error(o(418,""));throw oi(pn(t,e)),wo}function Lc(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[te]=e,t[P]=a,n){case"dialog":ze("cancel",t),ze("close",t);break;case"iframe":case"object":case"embed":ze("load",t);break;case"video":case"audio":for(n=0;n<Ti.length;n++)ze(Ti[n],t);break;case"source":ze("error",t);break;case"img":case"image":case"link":ze("error",t),ze("load",t);break;case"details":ze("toggle",t);break;case"input":ze("invalid",t),Y5(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Cr(t);break;case"select":ze("invalid",t);break;case"textarea":ze("invalid",t),X5(t,a.value,a.defaultValue,a.children),Cr(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||N7(t.textContent,n)?(a.popover!=null&&(ze("beforetoggle",t),ze("toggle",t)),a.onScroll!=null&&ze("scroll",t),a.onScrollEnd!=null&&ze("scrollend",t),a.onClick!=null&&(t.onclick=hs),t=!0):t=!1,t||_1(e)}function Ac(e){for(Bt=e.return;Bt;)switch(Bt.tag){case 3:case 27:Fn=!0;return;case 5:case 13:Fn=!1;return;default:Bt=Bt.return}}function ri(e){if(e!==Bt)return!1;if(!Ue)return Ac(e),Ue=!0,!1;var t=!1,n;if((n=e.tag!==3&&e.tag!==27)&&((n=e.tag===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Z2(e.type,e.memoizedProps)),n=!n),n&&(t=!0),t&&zt&&_1(e),Ac(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){zt=$n(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}zt=null}}else zt=Bt?$n(e.stateNode.nextSibling):null;return!0}function si(){zt=Bt=null,Ue=!1}function oi(e){Hn===null?Hn=[e]:Hn.push(e)}var ci=Error(o(460)),zc=Error(o(474)),ko={then:function(){}};function Tc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Or(){}function Rc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Or,Or),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===ci?Error(o(483)):e;default:if(typeof t.status=="string")t.then(Or,Or);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===ci?Error(o(483)):e}throw ui=t,ci}}var ui=null;function Hc(){if(ui===null)throw Error(o(459));var e=ui;return ui=null,e}var ul=null,di=0;function $r(e){var t=di;return di+=1,ul===null&&(ul=[]),Rc(ul,e,t)}function hi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ur(e,t){throw t.$$typeof===d?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Oc(e){var t=e._init;return t(e._payload)}function $c(e){function t(D,k){if(e){var L=D.deletions;L===null?(D.deletions=[k],D.flags|=16):L.push(k)}}function n(D,k){if(!e)return null;for(;k!==null;)t(D,k),k=k.sibling;return null}function a(D){for(var k=new Map;D!==null;)D.key!==null?k.set(D.key,D):k.set(D.index,D),D=D.sibling;return k}function r(D,k){return D=Za(D,k),D.index=0,D.sibling=null,D}function u(D,k,L){return D.index=L,e?(L=D.alternate,L!==null?(L=L.index,L<k?(D.flags|=33554434,k):L):(D.flags|=33554434,k)):(D.flags|=1048576,k)}function f(D){return e&&D.alternate===null&&(D.flags|=33554434),D}function v(D,k,L,V){return k===null||k.tag!==6?(k=m2(L,D.mode,V),k.return=D,k):(k=r(k,L),k.return=D,k)}function m(D,k,L,V){var ne=L.type;return ne===y?U(D,k,L.props.children,V,L.key):k!==null&&(k.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===ye&&Oc(ne)===k.type)?(k=r(k,L.props),hi(k,L),k.return=D,k):(k=ts(L.type,L.key,L.props,null,D.mode,V),hi(k,L),k.return=D,k)}function S(D,k,L,V){return k===null||k.tag!==4||k.stateNode.containerInfo!==L.containerInfo||k.stateNode.implementation!==L.implementation?(k=b2(L,D.mode,V),k.return=D,k):(k=r(k,L.children||[]),k.return=D,k)}function U(D,k,L,V,ne){return k===null||k.tag!==7?(k=A1(L,D.mode,V,ne),k.return=D,k):(k=r(k,L),k.return=D,k)}function q(D,k,L){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=m2(""+k,D.mode,L),k.return=D,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case h:return L=ts(k.type,k.key,k.props,null,D.mode,L),hi(L,k),L.return=D,L;case g:return k=b2(k,D.mode,L),k.return=D,k;case ye:var V=k._init;return k=V(k._payload),q(D,k,L)}if(I(k)||T(k))return k=A1(k,D.mode,L,null),k.return=D,k;if(typeof k.then=="function")return q(D,$r(k),L);if(k.$$typeof===A)return q(D,Wr(D,k),L);Ur(D,k)}return null}function z(D,k,L,V){var ne=k!==null?k.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return ne!==null?null:v(D,k,""+L,V);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case h:return L.key===ne?m(D,k,L,V):null;case g:return L.key===ne?S(D,k,L,V):null;case ye:return ne=L._init,L=ne(L._payload),z(D,k,L,V)}if(I(L)||T(L))return ne!==null?null:U(D,k,L,V,null);if(typeof L.then=="function")return z(D,k,$r(L),V);if(L.$$typeof===A)return z(D,k,Wr(D,L),V);Ur(D,L)}return null}function $(D,k,L,V,ne){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return D=D.get(L)||null,v(k,D,""+V,ne);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case h:return D=D.get(V.key===null?L:V.key)||null,m(k,D,V,ne);case g:return D=D.get(V.key===null?L:V.key)||null,S(k,D,V,ne);case ye:var Se=V._init;return V=Se(V._payload),$(D,k,L,V,ne)}if(I(V)||T(V))return D=D.get(L)||null,U(k,D,V,ne,null);if(typeof V.then=="function")return $(D,k,L,$r(V),ne);if(V.$$typeof===A)return $(D,k,L,Wr(k,V),ne);Ur(k,V)}return null}function se(D,k,L,V){for(var ne=null,Se=null,he=k,fe=k=0,St=null;he!==null&&fe<L.length;fe++){he.index>fe?(St=he,he=null):St=he.sibling;var Ne=z(D,he,L[fe],V);if(Ne===null){he===null&&(he=St);break}e&&he&&Ne.alternate===null&&t(D,he),k=u(Ne,k,fe),Se===null?ne=Ne:Se.sibling=Ne,Se=Ne,he=St}if(fe===L.length)return n(D,he),Ue&&b1(D,fe),ne;if(he===null){for(;fe<L.length;fe++)he=q(D,L[fe],V),he!==null&&(k=u(he,k,fe),Se===null?ne=he:Se.sibling=he,Se=he);return Ue&&b1(D,fe),ne}for(he=a(he);fe<L.length;fe++)St=$(he,D,fe,L[fe],V),St!==null&&(e&&St.alternate!==null&&he.delete(St.key===null?fe:St.key),k=u(St,k,fe),Se===null?ne=St:Se.sibling=St,Se=St);return e&&he.forEach(function(Ja){return t(D,Ja)}),Ue&&b1(D,fe),ne}function me(D,k,L,V){if(L==null)throw Error(o(151));for(var ne=null,Se=null,he=k,fe=k=0,St=null,Ne=L.next();he!==null&&!Ne.done;fe++,Ne=L.next()){he.index>fe?(St=he,he=null):St=he.sibling;var Ja=z(D,he,Ne.value,V);if(Ja===null){he===null&&(he=St);break}e&&he&&Ja.alternate===null&&t(D,he),k=u(Ja,k,fe),Se===null?ne=Ja:Se.sibling=Ja,Se=Ja,he=St}if(Ne.done)return n(D,he),Ue&&b1(D,fe),ne;if(he===null){for(;!Ne.done;fe++,Ne=L.next())Ne=q(D,Ne.value,V),Ne!==null&&(k=u(Ne,k,fe),Se===null?ne=Ne:Se.sibling=Ne,Se=Ne);return Ue&&b1(D,fe),ne}for(he=a(he);!Ne.done;fe++,Ne=L.next())Ne=$(he,D,fe,Ne.value,V),Ne!==null&&(e&&Ne.alternate!==null&&he.delete(Ne.key===null?fe:Ne.key),k=u(Ne,k,fe),Se===null?ne=Ne:Se.sibling=Ne,Se=Ne);return e&&he.forEach(function(M8){return t(D,M8)}),Ue&&b1(D,fe),ne}function rt(D,k,L,V){if(typeof L=="object"&&L!==null&&L.type===y&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case h:e:{for(var ne=L.key;k!==null;){if(k.key===ne){if(ne=L.type,ne===y){if(k.tag===7){n(D,k.sibling),V=r(k,L.props.children),V.return=D,D=V;break e}}else if(k.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===ye&&Oc(ne)===k.type){n(D,k.sibling),V=r(k,L.props),hi(V,L),V.return=D,D=V;break e}n(D,k);break}else t(D,k);k=k.sibling}L.type===y?(V=A1(L.props.children,D.mode,V,L.key),V.return=D,D=V):(V=ts(L.type,L.key,L.props,null,D.mode,V),hi(V,L),V.return=D,D=V)}return f(D);case g:e:{for(ne=L.key;k!==null;){if(k.key===ne)if(k.tag===4&&k.stateNode.containerInfo===L.containerInfo&&k.stateNode.implementation===L.implementation){n(D,k.sibling),V=r(k,L.children||[]),V.return=D,D=V;break e}else{n(D,k);break}else t(D,k);k=k.sibling}V=b2(L,D.mode,V),V.return=D,D=V}return f(D);case ye:return ne=L._init,L=ne(L._payload),rt(D,k,L,V)}if(I(L))return se(D,k,L,V);if(T(L)){if(ne=T(L),typeof ne!="function")throw Error(o(150));return L=ne.call(L),me(D,k,L,V)}if(typeof L.then=="function")return rt(D,k,$r(L),V);if(L.$$typeof===A)return rt(D,k,Wr(D,L),V);Ur(D,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,k!==null&&k.tag===6?(n(D,k.sibling),V=r(k,L),V.return=D,D=V):(n(D,k),V=m2(L,D.mode,V),V.return=D,D=V),f(D)):n(D,k)}return function(D,k,L,V){try{di=0;var ne=rt(D,k,L,V);return ul=null,ne}catch(he){if(he===ci)throw he;var Se=Cn(29,he,null,D.mode);return Se.lanes=V,Se.return=D,Se}finally{}}}var C1=$c(!0),Uc=$c(!1),dl=$e(null),Nr=$e(0);function Nc(e,t){e=ma,Ce(Nr,e),Ce(dl,t),ma=e|t.baseLanes}function So(){Ce(Nr,ma),Ce(dl,dl.current)}function Eo(){ma=Nr.current,nt(dl),nt(Nr)}var mn=$e(null),Kn=null;function Ta(e){var t=e.alternate;Ce(gt,gt.current&1),Ce(mn,e),Kn===null&&(t===null||dl.current!==null||t.memoizedState!==null)&&(Kn=e)}function Vc(e){if(e.tag===22){if(Ce(gt,gt.current),Ce(mn,e),Kn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Kn=e)}}else Ra()}function Ra(){Ce(gt,gt.current),Ce(mn,mn.current)}function oa(e){nt(mn),Kn===e&&(Kn=null),nt(gt)}var gt=$e(0);function Vr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var p4=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},v4=i.unstable_scheduleCallback,g4=i.unstable_NormalPriority,mt={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Do(){return{controller:new p4,data:new Map,refCount:0}}function fi(e){e.refCount--,e.refCount===0&&v4(g4,function(){e.controller.abort()})}var yi=null,Mo=0,hl=0,fl=null;function m4(e,t){if(yi===null){var n=yi=[];Mo=0,hl=H2(),fl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Mo++,t.then(Bc,Bc),t}function Bc(){if(--Mo===0&&yi!==null){fl!==null&&(fl.status="fulfilled");var e=yi;yi=null,hl=0,fl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function b4(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var qc=X.S;X.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&m4(e,t),qc!==null&&qc(e,t)};var x1=$e(null);function Lo(){var e=x1.current;return e!==null?e:Xe.pooledCache}function Br(e,t){t===null?Ce(x1,x1.current):Ce(x1,t.pool)}function jc(){var e=Lo();return e===null?null:{parent:mt._currentValue,pool:e}}var Ha=0,ke=null,je=null,ht=null,qr=!1,yl=!1,w1=!1,jr=0,pi=0,pl=null,_4=0;function ot(){throw Error(o(321))}function Ao(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jt(e[n],t[n]))return!1;return!0}function zo(e,t,n,a,r,u){return Ha=u,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,X.H=e===null||e.memoizedState===null?k1:Oa,w1=!1,u=n(a,r),w1=!1,yl&&(u=Yc(t,n,a,r)),Zc(e),u}function Zc(e){X.H=Jn;var t=je!==null&&je.next!==null;if(Ha=0,ht=je=ke=null,qr=!1,pi=0,pl=null,t)throw Error(o(300));e===null||wt||(e=e.dependencies,e!==null&&Pr(e)&&(wt=!0))}function Yc(e,t,n,a){ke=e;var r=0;do{if(yl&&(pl=null),pi=0,yl=!1,25<=r)throw Error(o(301));if(r+=1,ht=je=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}X.H=S1,u=t(n,a)}while(yl);return u}function C4(){var e=X.H,t=e.useState()[0];return t=typeof t.then=="function"?vi(t):t,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(ke.flags|=1024),t}function To(){var e=jr!==0;return jr=0,e}function Ro(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ho(e){if(qr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}qr=!1}Ha=0,ht=je=ke=null,yl=!1,pi=jr=0,pl=null}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?ke.memoizedState=ht=e:ht=ht.next=e,ht}function ft(){if(je===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=ht===null?ke.memoizedState:ht.next;if(t!==null)ht=t,je=e;else{if(e===null)throw ke.alternate===null?Error(o(467)):Error(o(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},ht===null?ke.memoizedState=ht=e:ht=ht.next=e}return ht}var Zr;Zr=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function vi(e){var t=pi;return pi+=1,pl===null&&(pl=[]),e=Rc(pl,e,t),t=ke,(ht===null?t.memoizedState:ht.next)===null&&(t=t.alternate,X.H=t===null||t.memoizedState===null?k1:Oa),e}function Yr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vi(e);if(e.$$typeof===A)return Ut(e)}throw Error(o(438,String(e)))}function Oo(e){var t=null,n=ke.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ke.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Zr(),ke.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=be;return t.index++,n}function ca(e,t){return typeof t=="function"?t(e):t}function Gr(e){var t=ft();return $o(t,je,e)}function $o(e,t,n){var a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=n;var r=e.baseQueue,u=a.pending;if(u!==null){if(r!==null){var f=r.next;r.next=u.next,u.next=f}t.baseQueue=r=u,a.pending=null}if(u=e.baseState,r===null)e.memoizedState=u;else{t=r.next;var v=f=null,m=null,S=t,U=!1;do{var q=S.lane&-536870913;if(q!==S.lane?(Te&q)===q:(Ha&q)===q){var z=S.revertLane;if(z===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),q===hl&&(U=!0);else if((Ha&z)===z){S=S.next,z===hl&&(U=!0);continue}else q={lane:0,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},m===null?(v=m=q,f=u):m=m.next=q,ke.lanes|=z,Ya|=z;q=S.action,w1&&n(u,q),u=S.hasEagerState?S.eagerState:n(u,q)}else z={lane:q,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},m===null?(v=m=z,f=u):m=m.next=z,ke.lanes|=q,Ya|=q;S=S.next}while(S!==null&&S!==t);if(m===null?f=u:m.next=v,!Jt(u,e.memoizedState)&&(wt=!0,U&&(n=fl,n!==null)))throw n;e.memoizedState=u,e.baseState=f,e.baseQueue=m,a.lastRenderedState=u}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Uo(e){var t=ft(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,u=t.memoizedState;if(r!==null){n.pending=null;var f=r=r.next;do u=e(u,f.action),f=f.next;while(f!==r);Jt(u,t.memoizedState)||(wt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,a]}function Gc(e,t,n){var a=ke,r=ft(),u=Ue;if(u){if(n===void 0)throw Error(o(407));n=n()}else n=t();var f=!Jt((je||r).memoizedState,n);if(f&&(r.memoizedState=n,wt=!0),r=r.queue,Bo(Fc.bind(null,a,r,e),[e]),r.getSnapshot!==t||f||ht!==null&&ht.memoizedState.tag&1){if(a.flags|=2048,vl(9,Qc.bind(null,a,r,n,t),{destroy:void 0},null),Xe===null)throw Error(o(349));u||(Ha&60)!==0||Xc(a,t,n)}return n}function Xc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t=Zr(),ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qc(e,t,n,a){t.value=n,t.getSnapshot=a,Kc(t)&&Jc(e)}function Fc(e,t,n){return n(function(){Kc(t)&&Jc(e)})}function Kc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Jt(e,n)}catch{return!0}}function Jc(e){var t=za(e,2);t!==null&&qt(t,e,2)}function No(e){var t=Yt();if(typeof e=="function"){var n=e;if(e=n(),w1){zn(!0);try{n()}finally{zn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},t}function Pc(e,t,n,a){return e.baseState=n,$o(e,je,typeof a=="function"?a:ca)}function x4(e,t,n,a,r){if(Fr(e))throw Error(o(485));if(e=t.action,e!==null){var u={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){u.listeners.push(f)}};X.T!==null?n(!0):u.isTransition=!1,a(u),n=t.pending,n===null?(u.next=t.pending=u,Wc(t,u)):(u.next=n.next,t.pending=n.next=u)}}function Wc(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var u=X.T,f={};X.T=f;try{var v=n(r,a),m=X.S;m!==null&&m(f,v),Ic(e,t,v)}catch(S){Vo(e,t,S)}finally{X.T=u}}else try{u=n(r,a),Ic(e,t,u)}catch(S){Vo(e,t,S)}}function Ic(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){eu(e,t,a)},function(a){return Vo(e,t,a)}):eu(e,t,n)}function eu(e,t,n){t.status="fulfilled",t.value=n,tu(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Wc(e,n)))}function Vo(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,tu(t),t=t.next;while(t!==a)}e.action=null}function tu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function nu(e,t){return t}function au(e,t){if(Ue){var n=Xe.formState;if(n!==null){e:{var a=ke;if(Ue){if(zt){t:{for(var r=zt,u=Fn;r.nodeType!==8;){if(!u){r=null;break t}if(r=$n(r.nextSibling),r===null){r=null;break t}}u=r.data,r=u==="F!"||u==="F"?r:null}if(r){zt=$n(r.nextSibling),a=r.data==="F!";break e}}_1(a)}a=!1}a&&(t=n[0])}}return n=Yt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nu,lastRenderedState:t},n.queue=a,n=Cu.bind(null,ke,a),a.dispatch=n,a=No(!1),u=Go.bind(null,ke,!1,a.queue),a=Yt(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=x4.bind(null,ke,r,u,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function lu(e){var t=ft();return iu(t,je,e)}function iu(e,t,n){t=$o(e,t,nu)[0],e=Gr(ca)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?vi(t):t;var a=ft(),r=a.queue,u=r.dispatch;return n!==a.memoizedState&&(ke.flags|=2048,vl(9,w4.bind(null,r,n),{destroy:void 0},null)),[t,u,e]}function w4(e,t){e.action=t}function ru(e){var t=ft(),n=je;if(n!==null)return iu(t,n,e);ft(),t=t.memoizedState,n=ft();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function vl(e,t,n,a){return e={tag:e,create:t,inst:n,deps:a,next:null},t=ke.updateQueue,t===null&&(t=Zr(),ke.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function su(){return ft().memoizedState}function Xr(e,t,n,a){var r=Yt();ke.flags|=e,r.memoizedState=vl(1|t,n,{destroy:void 0},a===void 0?null:a)}function Qr(e,t,n,a){var r=ft();a=a===void 0?null:a;var u=r.memoizedState.inst;je!==null&&a!==null&&Ao(a,je.memoizedState.deps)?r.memoizedState=vl(t,n,u,a):(ke.flags|=e,r.memoizedState=vl(1|t,n,u,a))}function ou(e,t){Xr(8390656,8,e,t)}function Bo(e,t){Qr(2048,8,e,t)}function cu(e,t){return Qr(4,2,e,t)}function uu(e,t){return Qr(4,4,e,t)}function du(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hu(e,t,n){n=n!=null?n.concat([e]):null,Qr(4,4,du.bind(null,t,e),n)}function qo(){}function fu(e,t){var n=ft();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Ao(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function yu(e,t){var n=ft();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Ao(t,a[1]))return a[0];if(a=e(),w1){zn(!0);try{e()}finally{zn(!1)}}return n.memoizedState=[a,t],a}function jo(e,t,n){return n===void 0||(Ha&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=v7(),ke.lanes|=e,Ya|=e,n)}function pu(e,t,n,a){return Jt(n,t)?n:dl.current!==null?(e=jo(e,n,a),Jt(e,t)||(wt=!0),e):(Ha&42)===0?(wt=!0,e.memoizedState=n):(e=v7(),ke.lanes|=e,Ya|=e,t)}function vu(e,t,n,a,r){var u=K.p;K.p=u!==0&&8>u?u:8;var f=X.T,v={};X.T=v,Go(e,!1,t,n);try{var m=r(),S=X.S;if(S!==null&&S(v,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var U=b4(m,a);gi(e,t,U,en(e))}else gi(e,t,a,en(e))}catch(q){gi(e,t,{then:function(){},status:"rejected",reason:q},en())}finally{K.p=u,X.T=f}}function k4(){}function Zo(e,t,n,a){if(e.tag!==5)throw Error(o(476));var r=gu(e).queue;vu(e,r,t,we,n===null?k4:function(){return mu(e),n(a)})}function gu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:we,baseState:we,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:we},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function mu(e){var t=gu(e).next.queue;gi(e,t,{},en())}function Yo(){return Ut(Ui)}function bu(){return ft().memoizedState}function _u(){return ft().memoizedState}function S4(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=en();e=Na(n);var a=Va(t,e,n);a!==null&&(qt(a,t,n),_i(a,t,n)),t={cache:Do()},e.payload=t;return}t=t.return}}function E4(e,t,n){var a=en();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Fr(e)?xu(t,n):(n=_o(e,t,n,a),n!==null&&(qt(n,e,a),wu(n,t,a)))}function Cu(e,t,n){var a=en();gi(e,t,n,a)}function gi(e,t,n,a){var r={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fr(e))xu(t,r);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var f=t.lastRenderedState,v=u(f,n);if(r.hasEagerState=!0,r.eagerState=v,Jt(v,f))return zr(e,t,r,0),Xe===null&&Ar(),!1}catch{}finally{}if(n=_o(e,t,r,a),n!==null)return qt(n,e,a),wu(n,t,a),!0}return!1}function Go(e,t,n,a){if(a={lane:2,revertLane:H2(),action:a,hasEagerState:!1,eagerState:null,next:null},Fr(e)){if(t)throw Error(o(479))}else t=_o(e,n,a,2),t!==null&&qt(t,e,2)}function Fr(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function xu(e,t){yl=qr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wu(e,t,n){if((n&4194176)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,re(e,n)}}var Jn={readContext:Ut,use:Yr,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useLayoutEffect:ot,useInsertionEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useSyncExternalStore:ot,useId:ot};Jn.useCacheRefresh=ot,Jn.useMemoCache=ot,Jn.useHostTransitionStatus=ot,Jn.useFormState=ot,Jn.useActionState=ot,Jn.useOptimistic=ot;var k1={readContext:Ut,use:Yr,useCallback:function(e,t){return Yt().memoizedState=[e,t===void 0?null:t],e},useContext:Ut,useEffect:ou,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Xr(4194308,4,du.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xr(4194308,4,e,t)},useInsertionEffect:function(e,t){Xr(4,2,e,t)},useMemo:function(e,t){var n=Yt();t=t===void 0?null:t;var a=e();if(w1){zn(!0);try{e()}finally{zn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Yt();if(n!==void 0){var r=n(t);if(w1){zn(!0);try{n(t)}finally{zn(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=E4.bind(null,ke,e),[a.memoizedState,e]},useRef:function(e){var t=Yt();return e={current:e},t.memoizedState=e},useState:function(e){e=No(e);var t=e.queue,n=Cu.bind(null,ke,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:qo,useDeferredValue:function(e,t){var n=Yt();return jo(n,e,t)},useTransition:function(){var e=No(!1);return e=vu.bind(null,ke,e.queue,!0,!1),Yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ke,r=Yt();if(Ue){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Xe===null)throw Error(o(349));(Te&60)!==0||Xc(a,t,n)}r.memoizedState=n;var u={value:n,getSnapshot:t};return r.queue=u,ou(Fc.bind(null,a,u,e),[e]),a.flags|=2048,vl(9,Qc.bind(null,a,u,n,t),{destroy:void 0},null),n},useId:function(){var e=Yt(),t=Xe.identifierPrefix;if(Ue){var n=sa,a=ra;n=(a&~(1<<32-Ct(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_4++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return Yt().memoizedState=S4.bind(null,ke)}};k1.useMemoCache=Oo,k1.useHostTransitionStatus=Yo,k1.useFormState=au,k1.useActionState=au,k1.useOptimistic=function(e){var t=Yt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Go.bind(null,ke,!0,n),n.dispatch=t,[e,t]};var Oa={readContext:Ut,use:Yr,useCallback:fu,useContext:Ut,useEffect:Bo,useImperativeHandle:hu,useInsertionEffect:cu,useLayoutEffect:uu,useMemo:yu,useReducer:Gr,useRef:su,useState:function(){return Gr(ca)},useDebugValue:qo,useDeferredValue:function(e,t){var n=ft();return pu(n,je.memoizedState,e,t)},useTransition:function(){var e=Gr(ca)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:vi(e),t]},useSyncExternalStore:Gc,useId:bu};Oa.useCacheRefresh=_u,Oa.useMemoCache=Oo,Oa.useHostTransitionStatus=Yo,Oa.useFormState=lu,Oa.useActionState=lu,Oa.useOptimistic=function(e,t){var n=ft();return Pc(n,je,e,t)};var S1={readContext:Ut,use:Yr,useCallback:fu,useContext:Ut,useEffect:Bo,useImperativeHandle:hu,useInsertionEffect:cu,useLayoutEffect:uu,useMemo:yu,useReducer:Uo,useRef:su,useState:function(){return Uo(ca)},useDebugValue:qo,useDeferredValue:function(e,t){var n=ft();return je===null?jo(n,e,t):pu(n,je.memoizedState,e,t)},useTransition:function(){var e=Uo(ca)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:vi(e),t]},useSyncExternalStore:Gc,useId:bu};S1.useCacheRefresh=_u,S1.useMemoCache=Oo,S1.useHostTransitionStatus=Yo,S1.useFormState=ru,S1.useActionState=ru,S1.useOptimistic=function(e,t){var n=ft();return je!==null?Pc(n,je,e,t):(n.baseState=e,[e,n.queue.dispatch])};function Xo(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Qo={isMounted:function(e){return(e=e._reactInternals)?ae(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=en(),r=Na(a);r.payload=t,n!=null&&(r.callback=n),t=Va(e,r,a),t!==null&&(qt(t,e,a),_i(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=en(),r=Na(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Va(e,r,a),t!==null&&(qt(t,e,a),_i(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=en(),a=Na(n);a.tag=2,t!=null&&(a.callback=t),t=Va(e,a,n),t!==null&&(qt(t,e,n),_i(t,e,n))}};function ku(e,t,n,a,r,u,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,f):t.prototype&&t.prototype.isPureReactComponent?!li(n,a)||!li(r,u):!0}function Su(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Qo.enqueueReplaceState(t,t.state,null)}function E1(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=ve({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}var Kr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Eu(e){Kr(e)}function Du(e){console.error(e)}function Mu(e){Kr(e)}function Jr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Lu(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Fo(e,t,n){return n=Na(n),n.tag=3,n.payload={element:null},n.callback=function(){Jr(e,t)},n}function Au(e){return e=Na(e),e.tag=3,e}function zu(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var u=a.value;e.payload=function(){return r(u)},e.callback=function(){Lu(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Lu(t,n,a),typeof r!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var v=a.stack;this.componentDidCatch(a.value,{componentStack:v!==null?v:""})})}function D4(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&bi(t,n,r,!0),n=mn.current,n!==null){switch(n.tag){case 13:return Kn===null?L2():n.alternate===null&&it===0&&(it=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===ko?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),z2(e,a,r)),!1;case 22:return n.flags|=65536,a===ko?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),z2(e,a,r)),!1}throw Error(o(435,n.tag))}return z2(e,a,r),L2(),!1}if(Ue)return t=mn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==wo&&(e=Error(o(422),{cause:a}),oi(pn(e,n)))):(a!==wo&&(t=Error(o(423),{cause:a}),oi(pn(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=pn(a,n),r=Fo(e.stateNode,a,r),c2(e,r),it!==4&&(it=2)),!1;var u=Error(o(520),{cause:a});if(u=pn(u,n),Mi===null?Mi=[u]:Mi.push(u),it!==4&&(it=2),t===null)return!0;a=pn(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=Fo(n.stateNode,a,e),c2(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ga===null||!Ga.has(u))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Au(r),zu(r,e,n,a),c2(n,r),!1}n=n.return}while(n!==null);return!1}var Tu=Error(o(461)),wt=!1;function Tt(e,t,n,a){t.child=e===null?Uc(t,null,n,a):C1(t,e.child,n,a)}function Ru(e,t,n,a,r){n=n.render;var u=t.ref;if("ref"in a){var f={};for(var v in a)v!=="ref"&&(f[v]=a[v])}else f=a;return M1(t),a=zo(e,t,n,f,u,r),v=To(),e!==null&&!wt?(Ro(e,t,r),ua(e,t,r)):(Ue&&v&&Co(t),t.flags|=1,Tt(e,t,a,r),t.child)}function Hu(e,t,n,a,r){if(e===null){var u=n.type;return typeof u=="function"&&!g2(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,Ou(e,t,u,a,r)):(e=ts(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!a2(e,r)){var f=u.memoizedProps;if(n=n.compare,n=n!==null?n:li,n(f,a)&&e.ref===t.ref)return ua(e,t,r)}return t.flags|=1,e=Za(u,a),e.ref=t.ref,e.return=t,t.child=e}function Ou(e,t,n,a,r){if(e!==null){var u=e.memoizedProps;if(li(u,a)&&e.ref===t.ref)if(wt=!1,t.pendingProps=a=u,a2(e,r))(e.flags&131072)!==0&&(wt=!0);else return t.lanes=e.lanes,ua(e,t,r)}return Ko(e,t,n,a,r)}function $u(e,t,n){var a=t.pendingProps,r=a.children,u=(t.stateNode._pendingVisibility&2)!==0,f=e!==null?e.memoizedState:null;if(mi(e,t),a.mode==="hidden"||u){if((t.flags&128)!==0){if(a=f!==null?f.baseLanes|n:n,e!==null){for(r=t.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;t.childLanes=u&~a}else t.childLanes=0,t.child=null;return Uu(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Br(t,f!==null?f.cachePool:null),f!==null?Nc(t,f):So(),Vc(t);else return t.lanes=t.childLanes=536870912,Uu(e,t,f!==null?f.baseLanes|n:n,n)}else f!==null?(Br(t,f.cachePool),Nc(t,f),Ra(),t.memoizedState=null):(e!==null&&Br(t,null),So(),Ra());return Tt(e,t,r,n),t.child}function Uu(e,t,n,a){var r=Lo();return r=r===null?null:{parent:mt._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&Br(t,null),So(),Vc(t),e!==null&&bi(e,t,a,!0),null}function mi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=2097664)}}function Ko(e,t,n,a,r){return M1(t),n=zo(e,t,n,a,void 0,r),a=To(),e!==null&&!wt?(Ro(e,t,r),ua(e,t,r)):(Ue&&a&&Co(t),t.flags|=1,Tt(e,t,n,r),t.child)}function Nu(e,t,n,a,r,u){return M1(t),t.updateQueue=null,n=Yc(t,a,n,r),Zc(e),a=To(),e!==null&&!wt?(Ro(e,t,u),ua(e,t,u)):(Ue&&a&&Co(t),t.flags|=1,Tt(e,t,n,u),t.child)}function Vu(e,t,n,a,r){if(M1(t),t.stateNode===null){var u=sl,f=n.contextType;typeof f=="object"&&f!==null&&(u=Ut(f)),u=new n(a,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Qo,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=a,u.state=t.memoizedState,u.refs={},s2(t),f=n.contextType,u.context=typeof f=="object"&&f!==null?Ut(f):sl,u.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Xo(t,n,f,a),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(f=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),f!==u.state&&Qo.enqueueReplaceState(u,u.state,null),xi(t,a,u,r),Ci(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){u=t.stateNode;var v=t.memoizedProps,m=E1(n,v);u.props=m;var S=u.context,U=n.contextType;f=sl,typeof U=="object"&&U!==null&&(f=Ut(U));var q=n.getDerivedStateFromProps;U=typeof q=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,U||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||S!==f)&&Su(t,u,a,f),Ua=!1;var z=t.memoizedState;u.state=z,xi(t,a,u,r),Ci(),S=t.memoizedState,v||z!==S||Ua?(typeof q=="function"&&(Xo(t,n,q,a),S=t.memoizedState),(m=Ua||ku(t,n,m,a,z,S,f))?(U||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=S),u.props=a,u.state=S,u.context=f,a=m):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,o2(e,t),f=t.memoizedProps,U=E1(n,f),u.props=U,q=t.pendingProps,z=u.context,S=n.contextType,m=sl,typeof S=="object"&&S!==null&&(m=Ut(S)),v=n.getDerivedStateFromProps,(S=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==q||z!==m)&&Su(t,u,a,m),Ua=!1,z=t.memoizedState,u.state=z,xi(t,a,u,r),Ci();var $=t.memoizedState;f!==q||z!==$||Ua||e!==null&&e.dependencies!==null&&Pr(e.dependencies)?(typeof v=="function"&&(Xo(t,n,v,a),$=t.memoizedState),(U=Ua||ku(t,n,U,a,z,$,m)||e!==null&&e.dependencies!==null&&Pr(e.dependencies))?(S||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,$,m),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,$,m)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=$),u.props=a,u.state=$,u.context=m,a=U):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),a=!1)}return u=a,mi(e,t),a=(t.flags&128)!==0,u||a?(u=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&a?(t.child=C1(t,e.child,null,r),t.child=C1(t,null,n,r)):Tt(e,t,n,r),t.memoizedState=u.state,e=t.child):e=ua(e,t,r),e}function Bu(e,t,n,a){return si(),t.flags|=256,Tt(e,t,n,a),t.child}var Jo={dehydrated:null,treeContext:null,retryLane:0};function Po(e){return{baseLanes:e,cachePool:jc()}}function Wo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=xn),e}function qu(e,t,n){var a=t.pendingProps,r=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(gt.current&2)!==0),f&&(r=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ue){if(r?Ta(t):Ra(),Ue){var v=zt,m;if(m=v){e:{for(m=v,v=Fn;m.nodeType!==8;){if(!v){v=null;break e}if(m=$n(m.nextSibling),m===null){v=null;break e}}v=m}v!==null?(t.memoizedState={dehydrated:v,treeContext:m1!==null?{id:ra,overflow:sa}:null,retryLane:536870912},m=Cn(18,null,null,0),m.stateNode=v,m.return=t,t.child=m,Bt=t,zt=null,m=!0):m=!1}m||_1(t)}if(v=t.memoizedState,v!==null&&(v=v.dehydrated,v!==null))return v.data==="$!"?t.lanes=16:t.lanes=536870912,null;oa(t)}return v=a.children,a=a.fallback,r?(Ra(),r=t.mode,v=e2({mode:"hidden",children:v},r),a=A1(a,r,n,null),v.return=t,a.return=t,v.sibling=a,t.child=v,r=t.child,r.memoizedState=Po(n),r.childLanes=Wo(e,f,n),t.memoizedState=Jo,a):(Ta(t),Io(t,v))}if(m=e.memoizedState,m!==null&&(v=m.dehydrated,v!==null)){if(u)t.flags&256?(Ta(t),t.flags&=-257,t=t2(e,t,n)):t.memoizedState!==null?(Ra(),t.child=e.child,t.flags|=128,t=null):(Ra(),r=a.fallback,v=t.mode,a=e2({mode:"visible",children:a.children},v),r=A1(r,v,n,null),r.flags|=2,a.return=t,r.return=t,a.sibling=r,t.child=a,C1(t,e.child,null,n),a=t.child,a.memoizedState=Po(n),a.childLanes=Wo(e,f,n),t.memoizedState=Jo,t=r);else if(Ta(t),v.data==="$!"){if(f=v.nextSibling&&v.nextSibling.dataset,f)var S=f.dgst;f=S,a=Error(o(419)),a.stack="",a.digest=f,oi({value:a,source:null,stack:null}),t=t2(e,t,n)}else if(wt||bi(e,t,n,!1),f=(n&e.childLanes)!==0,wt||f){if(f=Xe,f!==null){if(a=n&-n,(a&42)!==0)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=(a&(f.suspendedLanes|n))!==0?0:a,a!==0&&a!==m.retryLane)throw m.retryLane=a,za(e,a),qt(f,e,a),Tu}v.data==="$?"||L2(),t=t2(e,t,n)}else v.data==="$?"?(t.flags|=128,t.child=e.child,t=j4.bind(null,e),v._reactRetry=t,t=null):(e=m.treeContext,zt=$n(v.nextSibling),Bt=t,Ue=!0,Hn=null,Fn=!1,e!==null&&(vn[gn++]=ra,vn[gn++]=sa,vn[gn++]=m1,ra=e.id,sa=e.overflow,m1=t),t=Io(t,a.children),t.flags|=4096);return t}return r?(Ra(),r=a.fallback,v=t.mode,m=e.child,S=m.sibling,a=Za(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&31457280,S!==null?r=Za(S,r):(r=A1(r,v,n,null),r.flags|=2),r.return=t,a.return=t,a.sibling=r,t.child=a,a=r,r=t.child,v=e.child.memoizedState,v===null?v=Po(n):(m=v.cachePool,m!==null?(S=mt._currentValue,m=m.parent!==S?{parent:S,pool:S}:m):m=jc(),v={baseLanes:v.baseLanes|n,cachePool:m}),r.memoizedState=v,r.childLanes=Wo(e,f,n),t.memoizedState=Jo,a):(Ta(t),n=e.child,e=n.sibling,n=Za(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Io(e,t){return t=e2({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function e2(e,t){return f7(e,t,0,null)}function t2(e,t,n){return C1(t,e.child,null,n),e=Io(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ju(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),i2(e.return,t,n)}function n2(e,t,n,a,r){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=n,u.tailMode=r)}function Zu(e,t,n){var a=t.pendingProps,r=a.revealOrder,u=a.tail;if(Tt(e,t,a.children,n),a=gt.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ju(e,n,t);else if(e.tag===19)ju(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(Ce(gt,a),r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Vr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),n2(t,!1,r,n,u);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Vr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}n2(t,!0,n,null,u);break;case"together":n2(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ua(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ya|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(bi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Za(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Za(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function a2(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Pr(e)))}function M4(e,t,n){switch(t.tag){case 3:X1(t,t.stateNode.containerInfo),$a(t,mt,e.memoizedState.cache),si();break;case 27:case 5:Q1(t);break;case 4:X1(t,t.stateNode.containerInfo);break;case 10:$a(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Ta(t),t.flags|=128,null):(n&t.child.childLanes)!==0?qu(e,t,n):(Ta(t),e=ua(e,t,n),e!==null?e.sibling:null);Ta(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(bi(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return Zu(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ce(gt,gt.current),a)break;return null;case 22:case 23:return t.lanes=0,$u(e,t,n);case 24:$a(t,mt,e.memoizedState.cache)}return ua(e,t,n)}function Yu(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)wt=!0;else{if(!a2(e,n)&&(t.flags&128)===0)return wt=!1,M4(e,t,n);wt=(e.flags&131072)!==0}else wt=!1,Ue&&(t.flags&1048576)!==0&&Mc(t,Hr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,r=a._init;if(a=r(a._payload),t.type=a,typeof a=="function")g2(a)?(e=E1(a,e),t.tag=1,t=Vu(null,t,a,e,n)):(t.tag=0,t=Ko(null,t,a,e,n));else{if(a!=null){if(r=a.$$typeof,r===N){t.tag=11,t=Ru(null,t,a,e,n);break e}else if(r===Z){t.tag=14,t=Hu(null,t,a,e,n);break e}}throw t=Ve(a)||a,Error(o(306,t,""))}}return t;case 0:return Ko(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=E1(a,t.pendingProps),Vu(e,t,a,r,n);case 3:e:{if(X1(t,t.stateNode.containerInfo),e===null)throw Error(o(387));var u=t.pendingProps;r=t.memoizedState,a=r.element,o2(e,t),xi(t,u,null,n);var f=t.memoizedState;if(u=f.cache,$a(t,mt,u),u!==r.cache&&r2(t,[mt],n,!0),Ci(),u=f.element,r.isDehydrated)if(r={element:u,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Bu(e,t,u,n);break e}else if(u!==a){a=pn(Error(o(424)),t),oi(a),t=Bu(e,t,u,n);break e}else for(zt=$n(t.stateNode.containerInfo.firstChild),Bt=t,Ue=!0,Hn=null,Fn=!0,n=Uc(t,null,u,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(si(),u===a){t=ua(e,t,n);break e}Tt(e,t,u,n)}t=t.child}return t;case 26:return mi(e,t),e===null?(n=Q7(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ue||(n=t.type,e=t.pendingProps,a=fs(jn.current).createElement(n),a[te]=t,a[P]=e,Rt(a,n,e),We(a),t.stateNode=a):t.memoizedState=Q7(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Q1(t),e===null&&Ue&&(a=t.stateNode=Y7(t.type,t.pendingProps,jn.current),Bt=t,Fn=!0,zt=$n(a.firstChild)),a=t.pendingProps.children,e!==null||Ue?Tt(e,t,a,n):t.child=C1(t,null,a,n),mi(e,t),t.child;case 5:return e===null&&Ue&&((r=a=zt)&&(a=l8(a,t.type,t.pendingProps,Fn),a!==null?(t.stateNode=a,Bt=t,zt=$n(a.firstChild),Fn=!1,r=!0):r=!1),r||_1(t)),Q1(t),r=t.type,u=t.pendingProps,f=e!==null?e.memoizedProps:null,a=u.children,Z2(r,u)?a=null:f!==null&&Z2(r,f)&&(t.flags|=32),t.memoizedState!==null&&(r=zo(e,t,C4,null,null,n),Ui._currentValue=r),mi(e,t),Tt(e,t,a,n),t.child;case 6:return e===null&&Ue&&((e=n=zt)&&(n=i8(n,t.pendingProps,Fn),n!==null?(t.stateNode=n,Bt=t,zt=null,e=!0):e=!1),e||_1(t)),null;case 13:return qu(e,t,n);case 4:return X1(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=C1(t,null,a,n):Tt(e,t,a,n),t.child;case 11:return Ru(e,t,t.type,t.pendingProps,n);case 7:return Tt(e,t,t.pendingProps,n),t.child;case 8:return Tt(e,t,t.pendingProps.children,n),t.child;case 12:return Tt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,$a(t,t.type,a.value),Tt(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,M1(t),r=Ut(r),a=a(r),t.flags|=1,Tt(e,t,a,n),t.child;case 14:return Hu(e,t,t.type,t.pendingProps,n);case 15:return Ou(e,t,t.type,t.pendingProps,n);case 19:return Zu(e,t,n);case 22:return $u(e,t,n);case 24:return M1(t),a=Ut(mt),e===null?(r=Lo(),r===null&&(r=Xe,u=Do(),r.pooledCache=u,u.refCount++,u!==null&&(r.pooledCacheLanes|=n),r=u),t.memoizedState={parent:a,cache:r},s2(t),$a(t,mt,r)):((e.lanes&n)!==0&&(o2(e,t),xi(t,null,null,n),Ci()),r=e.memoizedState,u=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),$a(t,mt,a)):(a=u.cache,$a(t,mt,a),a!==r.cache&&r2(t,[mt],n,!0))),Tt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}var l2=$e(null),D1=null,da=null;function $a(e,t,n){Ce(l2,t._currentValue),t._currentValue=n}function ha(e){e._currentValue=l2.current,nt(l2)}function i2(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function r2(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var u=r.dependencies;if(u!==null){var f=r.child;u=u.firstContext;e:for(;u!==null;){var v=u;u=r;for(var m=0;m<t.length;m++)if(v.context===t[m]){u.lanes|=n,v=u.alternate,v!==null&&(v.lanes|=n),i2(u.return,n,e),a||(f=null);break e}u=v.next}}else if(r.tag===18){if(f=r.return,f===null)throw Error(o(341));f.lanes|=n,u=f.alternate,u!==null&&(u.lanes|=n),i2(f,n,e),f=null}else f=r.child;if(f!==null)f.return=r;else for(f=r;f!==null;){if(f===e){f=null;break}if(r=f.sibling,r!==null){r.return=f.return,f=r;break}f=f.return}r=f}}function bi(e,t,n,a){e=null;for(var r=t,u=!1;r!==null;){if(!u){if((r.flags&524288)!==0)u=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var f=r.alternate;if(f===null)throw Error(o(387));if(f=f.memoizedProps,f!==null){var v=r.type;Jt(r.pendingProps.value,f.value)||(e!==null?e.push(v):e=[v])}}else if(r===cn.current){if(f=r.alternate,f===null)throw Error(o(387));f.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Ui):e=[Ui])}r=r.return}e!==null&&r2(t,e,n,a),t.flags|=262144}function Pr(e){for(e=e.firstContext;e!==null;){if(!Jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function M1(e){D1=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ut(e){return Gu(D1,e)}function Wr(e,t){return D1===null&&M1(e),Gu(e,t)}function Gu(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},da===null){if(e===null)throw Error(o(308));da=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else da=da.next=t;return n}var Ua=!1;function s2(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function o2(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Va(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(tt&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=Tr(e),Ec(e,null,n),t}return zr(e,a,t,n),Tr(e)}function _i(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194176)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,re(e,n)}}function c2(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?r=u=f:u=u.next=f,n=n.next}while(n!==null);u===null?r=u=t:u=u.next=t}else r=u=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var u2=!1;function Ci(){if(u2){var e=fl;if(e!==null)throw e}}function xi(e,t,n,a){u2=!1;var r=e.updateQueue;Ua=!1;var u=r.firstBaseUpdate,f=r.lastBaseUpdate,v=r.shared.pending;if(v!==null){r.shared.pending=null;var m=v,S=m.next;m.next=null,f===null?u=S:f.next=S,f=m;var U=e.alternate;U!==null&&(U=U.updateQueue,v=U.lastBaseUpdate,v!==f&&(v===null?U.firstBaseUpdate=S:v.next=S,U.lastBaseUpdate=m))}if(u!==null){var q=r.baseState;f=0,U=S=m=null,v=u;do{var z=v.lane&-536870913,$=z!==v.lane;if($?(Te&z)===z:(a&z)===z){z!==0&&z===hl&&(u2=!0),U!==null&&(U=U.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var se=e,me=v;z=t;var rt=n;switch(me.tag){case 1:if(se=me.payload,typeof se=="function"){q=se.call(rt,q,z);break e}q=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=me.payload,z=typeof se=="function"?se.call(rt,q,z):se,z==null)break e;q=ve({},q,z);break e;case 2:Ua=!0}}z=v.callback,z!==null&&(e.flags|=64,$&&(e.flags|=8192),$=r.callbacks,$===null?r.callbacks=[z]:$.push(z))}else $={lane:z,tag:v.tag,payload:v.payload,callback:v.callback,next:null},U===null?(S=U=$,m=q):U=U.next=$,f|=z;if(v=v.next,v===null){if(v=r.shared.pending,v===null)break;$=v,v=$.next,$.next=null,r.lastBaseUpdate=$,r.shared.pending=null}}while(!0);U===null&&(m=q),r.baseState=m,r.firstBaseUpdate=S,r.lastBaseUpdate=U,u===null&&(r.shared.lanes=0),Ya|=f,e.lanes=f,e.memoizedState=q}}function Xu(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Qu(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xu(n[e],t)}function wi(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var u=n.create,f=n.inst;a=u(),f.destroy=a}n=n.next}while(n!==r)}}catch(v){Ye(t,t.return,v)}}function Ba(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){var f=a.inst,v=f.destroy;if(v!==void 0){f.destroy=void 0,r=t;var m=n;try{v()}catch(S){Ye(r,m,S)}}}a=a.next}while(a!==u)}}catch(S){Ye(t,t.return,S)}}function Fu(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Qu(t,n)}catch(a){Ye(e,e.return,a)}}}function Ku(e,t,n){n.props=E1(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ye(e,t,a)}}function L1(e,t){try{var n=e.ref;if(n!==null){var a=e.stateNode;switch(e.tag){case 26:case 27:case 5:var r=a;break;default:r=a}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(u){Ye(e,t,u)}}function Pt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){Ye(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Ye(e,t,r)}else n.current=null}function Ju(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){Ye(e,e.return,r)}}function Pu(e,t,n){try{var a=e.stateNode;I4(a,e.type,n,t),a[P]=t}catch(r){Ye(e,e.return,r)}}function Wu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function d2(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function h2(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hs));else if(a!==4&&a!==27&&(e=e.child,e!==null))for(h2(e,t,n),e=e.sibling;e!==null;)h2(e,t,n),e=e.sibling}function Ir(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&a!==27&&(e=e.child,e!==null))for(Ir(e,t,n),e=e.sibling;e!==null;)Ir(e,t,n),e=e.sibling}var fa=!1,lt=!1,f2=!1,Iu=typeof WeakSet=="function"?WeakSet:Set,kt=null,e7=!1;function L4(e,t){if(e=e.containerInfo,q2=bs,e=gc(e),po(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var f=0,v=-1,m=-1,S=0,U=0,q=e,z=null;t:for(;;){for(var $;q!==n||r!==0&&q.nodeType!==3||(v=f+r),q!==u||a!==0&&q.nodeType!==3||(m=f+a),q.nodeType===3&&(f+=q.nodeValue.length),($=q.firstChild)!==null;)z=q,q=$;for(;;){if(q===e)break t;if(z===n&&++S===r&&(v=f),z===u&&++U===a&&(m=f),($=q.nextSibling)!==null)break;q=z,z=q.parentNode}q=$}n=v===-1||m===-1?null:{start:v,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(j2={focusedElem:e,selectionRange:n},bs=!1,kt=t;kt!==null;)if(t=kt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,kt=e;else for(;kt!==null;){switch(t=kt,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,r=u.memoizedProps,u=u.memoizedState,a=n.stateNode;try{var se=E1(n.type,r,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(se,u),a.__reactInternalSnapshotBeforeUpdate=e}catch(me){Ye(n,n.return,me)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)X2(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":X2(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,kt=e;break}kt=t.return}return se=e7,e7=!1,se}function t7(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:pa(e,n),a&4&&wi(5,n);break;case 1:if(pa(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(v){Ye(n,n.return,v)}else{var r=E1(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Ye(n,n.return,v)}}a&64&&Fu(n),a&512&&L1(n,n.return);break;case 3:if(pa(e,n),a&64&&(a=n.updateQueue,a!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Qu(a,e)}catch(v){Ye(n,n.return,v)}}break;case 26:pa(e,n),a&512&&L1(n,n.return);break;case 27:case 5:pa(e,n),t===null&&a&4&&Ju(n),a&512&&L1(n,n.return);break;case 12:pa(e,n);break;case 13:pa(e,n),a&4&&l7(e,n);break;case 22:if(r=n.memoizedState!==null||fa,!r){t=t!==null&&t.memoizedState!==null||lt;var u=fa,f=lt;fa=r,(lt=t)&&!f?qa(e,n,(n.subtreeFlags&8772)!==0):pa(e,n),fa=u,lt=f}a&512&&(n.memoizedProps.mode==="manual"?L1(n,n.return):Pt(n,n.return));break;default:pa(e,n)}}function n7(e){var t=e.alternate;t!==null&&(e.alternate=null,n7(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tn(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var yt=null,Wt=!1;function ya(e,t,n){for(n=n.child;n!==null;)a7(e,t,n),n=n.sibling}function a7(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Ma,n)}catch{}switch(n.tag){case 26:lt||Pt(n,t),ya(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:lt||Pt(n,t);var a=yt,r=Wt;for(yt=n.stateNode,ya(e,t,n),n=n.stateNode,t=n.attributes;t.length;)n.removeAttributeNode(t[0]);Tn(n),yt=a,Wt=r;break;case 5:lt||Pt(n,t);case 6:r=yt;var u=Wt;if(yt=null,ya(e,t,n),yt=r,Wt=u,yt!==null)if(Wt)try{e=yt,a=n.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)}catch(f){Ye(n,t,f)}else try{yt.removeChild(n.stateNode)}catch(f){Ye(n,t,f)}break;case 18:yt!==null&&(Wt?(t=yt,n=n.stateNode,t.nodeType===8?G2(t.parentNode,n):t.nodeType===1&&G2(t,n),qi(t)):G2(yt,n.stateNode));break;case 4:a=yt,r=Wt,yt=n.stateNode.containerInfo,Wt=!0,ya(e,t,n),yt=a,Wt=r;break;case 0:case 11:case 14:case 15:lt||Ba(2,n,t),lt||Ba(4,n,t),ya(e,t,n);break;case 1:lt||(Pt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Ku(n,t,a)),ya(e,t,n);break;case 21:ya(e,t,n);break;case 22:lt||Pt(n,t),lt=(a=lt)||n.memoizedState!==null,ya(e,t,n),lt=a;break;default:ya(e,t,n)}}function l7(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{qi(e)}catch(n){Ye(t,t.return,n)}}function A4(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Iu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Iu),t;default:throw Error(o(435,e.tag))}}function y2(e,t){var n=A4(e);t.forEach(function(a){var r=Z4.bind(null,e,a);n.has(a)||(n.add(a),a.then(r,r))})}function bn(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],u=e,f=t,v=f;e:for(;v!==null;){switch(v.tag){case 27:case 5:yt=v.stateNode,Wt=!1;break e;case 3:yt=v.stateNode.containerInfo,Wt=!0;break e;case 4:yt=v.stateNode.containerInfo,Wt=!0;break e}v=v.return}if(yt===null)throw Error(o(160));a7(u,f,r),yt=null,Wt=!1,u=r.alternate,u!==null&&(u.return=null),r.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)i7(t,e),t=t.sibling}var On=null;function i7(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bn(t,e),_n(e),a&4&&(Ba(3,e,e.return),wi(3,e),Ba(5,e,e.return));break;case 1:bn(t,e),_n(e),a&512&&(lt||n===null||Pt(n,n.return)),a&64&&fa&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=On;if(bn(t,e),_n(e),a&512&&(lt||n===null||Pt(n,n.return)),a&4){var u=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":u=r.getElementsByTagName("title")[0],(!u||u[Be]||u[te]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=r.createElement(a),r.head.insertBefore(u,r.querySelector("head > title"))),Rt(u,a,n),u[te]=e,We(u),a=u;break e;case"link":var f=J7("link","href",r).get(a+(n.href||""));if(f){for(var v=0;v<f.length;v++)if(u=f[v],u.getAttribute("href")===(n.href==null?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(v,1);break t}}u=r.createElement(a),Rt(u,a,n),r.head.appendChild(u);break;case"meta":if(f=J7("meta","content",r).get(a+(n.content||""))){for(v=0;v<f.length;v++)if(u=f[v],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(v,1);break t}}u=r.createElement(a),Rt(u,a,n),r.head.appendChild(u);break;default:throw Error(o(468,a))}u[te]=e,We(u),a=u}e.stateNode=a}else P7(r,e.type,e.stateNode);else e.stateNode=K7(r,a,e.memoizedProps);else u!==a?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,a===null?P7(r,e.type,e.stateNode):K7(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Pu(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(a&4&&e.alternate===null){r=e.stateNode,u=e.memoizedProps;try{for(var m=r.firstChild;m;){var S=m.nextSibling,U=m.nodeName;m[Be]||U==="HEAD"||U==="BODY"||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=S}for(var q=e.type,z=r.attributes;z.length;)r.removeAttributeNode(z[0]);Rt(r,q,u),r[te]=e,r[P]=u}catch(se){Ye(e,e.return,se)}}case 5:if(bn(t,e),_n(e),a&512&&(lt||n===null||Pt(n,n.return)),e.flags&32){r=e.stateNode;try{el(r,"")}catch(se){Ye(e,e.return,se)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,Pu(e,r,n!==null?n.memoizedProps:r)),a&1024&&(f2=!0);break;case 6:if(bn(t,e),_n(e),a&4){if(e.stateNode===null)throw Error(o(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(se){Ye(e,e.return,se)}}break;case 3:if(vs=null,r=On,On=ys(t.containerInfo),bn(t,e),On=r,_n(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{qi(t.containerInfo)}catch(se){Ye(e,e.return,se)}f2&&(f2=!1,r7(e));break;case 4:a=On,On=ys(e.stateNode.containerInfo),bn(t,e),_n(e),On=a;break;case 12:bn(t,e),_n(e);break;case 13:bn(t,e),_n(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(w2=Ft()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,y2(e,a)));break;case 22:if(a&512&&(lt||n===null||Pt(n,n.return)),m=e.memoizedState!==null,S=n!==null&&n.memoizedState!==null,U=fa,q=lt,fa=U||m,lt=q||S,bn(t,e),lt=q,fa=U,_n(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,a&8192&&(t._visibility=m?t._visibility&-2:t._visibility|1,m&&(t=fa||lt,n===null||S||t||gl(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(n=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(n===null){S=n=t;try{if(r=S.stateNode,m)u=r.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{f=S.stateNode,v=S.memoizedProps.style;var $=v!=null&&v.hasOwnProperty("display")?v.display:null;f.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(se){Ye(S,S.return,se)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=m?"":S.memoizedProps}catch(se){Ye(S,S.return,se)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,y2(e,n))));break;case 19:bn(t,e),_n(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,y2(e,a)));break;case 21:break;default:bn(t,e),_n(e)}}function _n(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var n=e.return;n!==null;){if(Wu(n)){var a=n;break e}n=n.return}throw Error(o(160))}switch(a.tag){case 27:var r=a.stateNode,u=d2(e);Ir(e,u,r);break;case 5:var f=a.stateNode;a.flags&32&&(el(f,""),a.flags&=-33);var v=d2(e);Ir(e,v,f);break;case 3:case 4:var m=a.stateNode.containerInfo,S=d2(e);h2(e,S,m);break;default:throw Error(o(161))}}}catch(U){Ye(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function r7(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;r7(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function pa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)t7(e,t.alternate,t),t=t.sibling}function gl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ba(4,t,t.return),gl(t);break;case 1:Pt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Ku(t,t.return,n),gl(t);break;case 26:case 27:case 5:Pt(t,t.return),gl(t);break;case 22:Pt(t,t.return),t.memoizedState===null&&gl(t);break;default:gl(t)}e=e.sibling}}function qa(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,u=t,f=u.flags;switch(u.tag){case 0:case 11:case 15:qa(r,u,n),wi(4,u);break;case 1:if(qa(r,u,n),a=u,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(S){Ye(a,a.return,S)}if(a=u,r=a.updateQueue,r!==null){var v=a.stateNode;try{var m=r.shared.hiddenCallbacks;if(m!==null)for(r.shared.hiddenCallbacks=null,r=0;r<m.length;r++)Xu(m[r],v)}catch(S){Ye(a,a.return,S)}}n&&f&64&&Fu(u),L1(u,u.return);break;case 26:case 27:case 5:qa(r,u,n),n&&a===null&&f&4&&Ju(u),L1(u,u.return);break;case 12:qa(r,u,n);break;case 13:qa(r,u,n),n&&f&4&&l7(r,u);break;case 22:u.memoizedState===null&&qa(r,u,n),L1(u,u.return);break;default:qa(r,u,n)}t=t.sibling}}function p2(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&fi(n))}function v2(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fi(e))}function ja(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)s7(e,t,n,a),t=t.sibling}function s7(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:ja(e,t,n,a),r&2048&&wi(9,t);break;case 3:ja(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fi(e)));break;case 12:if(r&2048){ja(e,t,n,a),e=t.stateNode;try{var u=t.memoizedProps,f=u.id,v=u.onPostCommit;typeof v=="function"&&v(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){Ye(t,t.return,m)}}else ja(e,t,n,a);break;case 23:break;case 22:u=t.stateNode,t.memoizedState!==null?u._visibility&4?ja(e,t,n,a):ki(e,t):u._visibility&4?ja(e,t,n,a):(u._visibility|=4,ml(e,t,n,a,(t.subtreeFlags&10256)!==0)),r&2048&&p2(t.alternate,t);break;case 24:ja(e,t,n,a),r&2048&&v2(t.alternate,t);break;default:ja(e,t,n,a)}}function ml(e,t,n,a,r){for(r=r&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,f=t,v=n,m=a,S=f.flags;switch(f.tag){case 0:case 11:case 15:ml(u,f,v,m,r),wi(8,f);break;case 23:break;case 22:var U=f.stateNode;f.memoizedState!==null?U._visibility&4?ml(u,f,v,m,r):ki(u,f):(U._visibility|=4,ml(u,f,v,m,r)),r&&S&2048&&p2(f.alternate,f);break;case 24:ml(u,f,v,m,r),r&&S&2048&&v2(f.alternate,f);break;default:ml(u,f,v,m,r)}t=t.sibling}}function ki(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:ki(n,a),r&2048&&p2(a.alternate,a);break;case 24:ki(n,a),r&2048&&v2(a.alternate,a);break;default:ki(n,a)}t=t.sibling}}var Si=8192;function bl(e){if(e.subtreeFlags&Si)for(e=e.child;e!==null;)o7(e),e=e.sibling}function o7(e){switch(e.tag){case 26:bl(e),e.flags&Si&&e.memoizedState!==null&&m8(On,e.memoizedState,e.memoizedProps);break;case 5:bl(e);break;case 3:case 4:var t=On;On=ys(e.stateNode.containerInfo),bl(e),On=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Si,Si=16777216,bl(e),Si=t):bl(e));break;default:bl(e)}}function c7(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ei(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];kt=a,d7(a,e)}c7(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)u7(e),e=e.sibling}function u7(e){switch(e.tag){case 0:case 11:case 15:Ei(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:Ei(e);break;case 12:Ei(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,es(e)):Ei(e);break;default:Ei(e)}}function es(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];kt=a,d7(a,e)}c7(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ba(8,t,t.return),es(t);break;case 22:n=t.stateNode,n._visibility&4&&(n._visibility&=-5,es(t));break;default:es(t)}e=e.sibling}}function d7(e,t){for(;kt!==null;){var n=kt;switch(n.tag){case 0:case 11:case 15:Ba(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:fi(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,kt=a;else e:for(n=e;kt!==null;){a=kt;var r=a.sibling,u=a.return;if(n7(a),a===n){kt=null;break e}if(r!==null){r.return=u,kt=r;break e}kt=u}}}function z4(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(e,t,n,a){return new z4(e,t,n,a)}function g2(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Za(e,t){var n=e.alternate;return n===null?(n=Cn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&31457280,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function h7(e,t){e.flags&=31457282;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ts(e,t,n,a,r,u){var f=0;if(a=e,typeof e=="function")g2(e)&&(f=1);else if(typeof e=="string")f=v8(e,n,Lt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case y:return A1(n.children,r,u,t);case p:f=8,r|=24;break;case b:return e=Cn(12,n,t,r|2),e.elementType=b,e.lanes=u,e;case F:return e=Cn(13,n,t,r),e.elementType=F,e.lanes=u,e;case J:return e=Cn(19,n,t,r),e.elementType=J,e.lanes=u,e;case ee:return f7(n,r,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:case A:f=10;break e;case E:f=9;break e;case N:f=11;break e;case Z:f=14;break e;case ye:f=16,a=null;break e}f=29,n=Error(o(130,e===null?"null":typeof e,"")),a=null}return t=Cn(f,n,t,r),t.elementType=e,t.type=a,t.lanes=u,t}function A1(e,t,n,a){return e=Cn(7,e,a,t),e.lanes=n,e}function f7(e,t,n,a){e=Cn(22,e,a,t),e.elementType=ee,e.lanes=n;var r={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var u=r._current;if(u===null)throw Error(o(456));if((r._pendingVisibility&2)===0){var f=za(u,2);f!==null&&(r._pendingVisibility|=2,qt(f,u,2))}},attach:function(){var u=r._current;if(u===null)throw Error(o(456));if((r._pendingVisibility&2)!==0){var f=za(u,2);f!==null&&(r._pendingVisibility&=-3,qt(f,u,2))}}};return e.stateNode=r,e}function m2(e,t,n){return e=Cn(6,e,null,t),e.lanes=n,e}function b2(e,t,n){return t=Cn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function va(e){e.flags|=4}function y7(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!W7(t)){if(t=mn.current,t!==null&&((Te&4194176)===Te?Kn!==null:(Te&62914560)!==Te&&(Te&536870912)===0||t!==Kn))throw ui=ko,zc;e.flags|=8192}}function ns(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?C():536870912,e.lanes|=t,Cl|=t)}function Di(e,t){if(!Ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&31457280,a|=r.flags&31457280,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function T4(e,t,n){var a=t.pendingProps;switch(xo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return et(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ha(mt),Da(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ri(t)?va(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Hn!==null&&(D2(Hn),Hn=null))),et(t),null;case 26:return n=t.memoizedState,e===null?(va(t),n!==null?(et(t),y7(t,n)):(et(t),t.flags&=-16777217)):n?n!==e.memoizedState?(va(t),et(t),y7(t,n)):(et(t),t.flags&=-16777217):(e.memoizedProps!==a&&va(t),et(t),t.flags&=-16777217),null;case 27:F1(t),n=jn.current;var r=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&va(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return et(t),null}e=Lt.current,ri(t)?Lc(t):(e=Y7(r,a,n),t.stateNode=e,va(t))}return et(t),null;case 5:if(F1(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&va(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return et(t),null}if(e=Lt.current,ri(t))Lc(t);else{switch(r=fs(jn.current),e){case 1:e=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?r.createElement(n,{is:a.is}):r.createElement(n)}}e[te]=t,e[P]=a;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=e;e:switch(Rt(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&va(t)}}return et(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&va(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(e=jn.current,ri(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=Bt,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[te]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||N7(e.nodeValue,n)),e||_1(t)}else e=fs(e).createTextNode(a),e[te]=t,t.stateNode=e}return et(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ri(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(o(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[te]=t}else si(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;et(t),r=!1}else Hn!==null&&(D2(Hn),Hn=null),r=!0;if(!r)return t.flags&256?(oa(t),t):(oa(t),null)}if(oa(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool);var u=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==r&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),ns(t,t.updateQueue),et(t),null;case 4:return Da(),e===null&&N2(t.stateNode.containerInfo),et(t),null;case 10:return ha(t.type),et(t),null;case 19:if(nt(gt),r=t.memoizedState,r===null)return et(t),null;if(a=(t.flags&128)!==0,u=r.rendering,u===null)if(a)Di(r,!1);else{if(it!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Vr(e),u!==null){for(t.flags|=128,Di(r,!1),e=u.updateQueue,t.updateQueue=e,ns(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)h7(n,e),n=n.sibling;return Ce(gt,gt.current&1|2),t.child}e=e.sibling}r.tail!==null&&Ft()>as&&(t.flags|=128,a=!0,Di(r,!1),t.lanes=4194304)}else{if(!a)if(e=Vr(u),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,ns(t,e),Di(r,!0),r.tail===null&&r.tailMode==="hidden"&&!u.alternate&&!Ue)return et(t),null}else 2*Ft()-r.renderingStartTime>as&&n!==536870912&&(t.flags|=128,a=!0,Di(r,!1),t.lanes=4194304);r.isBackwards?(u.sibling=t.child,t.child=u):(e=r.last,e!==null?e.sibling=u:t.child=u,r.last=u)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Ft(),t.sibling=null,e=gt.current,Ce(gt,a?e&1|2:e&1),t):(et(t),null);case 22:case 23:return oa(t),Eo(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),n=t.updateQueue,n!==null&&ns(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&nt(x1),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ha(mt),et(t),null;case 25:return null}throw Error(o(156,t.tag))}function R4(e,t){switch(xo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ha(mt),Da(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return F1(t),null;case 13:if(oa(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));si()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return nt(gt),null;case 4:return Da(),null;case 10:return ha(t.type),null;case 22:case 23:return oa(t),Eo(),e!==null&&nt(x1),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ha(mt),null;case 25:return null;default:return null}}function p7(e,t){switch(xo(t),t.tag){case 3:ha(mt),Da();break;case 26:case 27:case 5:F1(t);break;case 4:Da();break;case 13:oa(t);break;case 19:nt(gt);break;case 10:ha(t.type);break;case 22:case 23:oa(t),Eo(),e!==null&&nt(x1);break;case 24:ha(mt)}}var H4={getCacheForType:function(e){var t=Ut(mt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},O4=typeof WeakMap=="function"?WeakMap:Map,tt=0,Xe=null,Me=null,Te=0,Qe=0,It=null,ga=!1,_l=!1,_2=!1,ma=0,it=0,Ya=0,z1=0,C2=0,xn=0,Cl=0,Mi=null,Pn=null,x2=!1,w2=0,as=1/0,ls=null,Ga=null,is=!1,T1=null,Li=0,k2=0,S2=null,Ai=0,E2=null;function en(){if((tt&2)!==0&&Te!==0)return Te&-Te;if(X.T!==null){var e=hl;return e!==0?e:H2()}return le()}function v7(){xn===0&&(xn=(Te&536870912)===0||Ue?_r():536870912);var e=mn.current;return e!==null&&(e.flags|=32),xn}function qt(e,t,n){(e===Xe&&Qe===2||e.cancelPendingCommit!==null)&&(xl(e,0),ba(e,Te,xn,!1)),R(e,n),((tt&2)===0||e!==Xe)&&(e===Xe&&((tt&2)===0&&(z1|=n),it===4&&ba(e,Te,xn,!1)),Wn(e))}function g7(e,t,n){if((tt&6)!==0)throw Error(o(327));var a=!n&&(t&60)===0&&(t&e.expiredLanes)===0||Gn(e,t),r=a?N4(e,t):A2(e,t,!0),u=a;do{if(r===0){_l&&!a&&ba(e,t,0,!1);break}else if(r===6)ba(e,t,0,!ga);else{if(n=e.current.alternate,u&&!$4(n)){r=A2(e,t,!1),u=!1;continue}if(r===2){if(u=t,e.errorRecoveryDisabledLanes&u)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var v=e;r=Mi;var m=v.current.memoizedState.isDehydrated;if(m&&(xl(v,f).flags|=256),f=A2(v,f,!1),f!==2){if(_2&&!m){v.errorRecoveryDisabledLanes|=u,z1|=u,r=4;break e}u=Pn,Pn=r,u!==null&&D2(u)}r=f}if(u=!1,r!==2)continue}}if(r===1){xl(e,0),ba(e,t,0,!0);break}e:{switch(a=e,r){case 0:case 1:throw Error(o(345));case 4:if((t&4194176)===t){ba(a,t,xn,!ga);break e}break;case 2:Pn=null;break;case 3:case 5:break;default:throw Error(o(329))}if(a.finishedWork=n,a.finishedLanes=t,(t&62914560)===t&&(u=w2+300-Ft(),10<u)){if(ba(a,t,xn,!ga),la(a,0)!==0)break e;a.timeoutHandle=q7(m7.bind(null,a,n,Pn,ls,x2,t,xn,z1,Cl,ga,2,-0,0),u);break e}m7(a,n,Pn,ls,x2,t,xn,z1,Cl,ga,0,-0,0)}}break}while(!0);Wn(e)}function D2(e){Pn===null?Pn=e:Pn.push.apply(Pn,e)}function m7(e,t,n,a,r,u,f,v,m,S,U,q,z){var $=t.subtreeFlags;if(($&8192||($&16785408)===16785408)&&($i={stylesheets:null,count:0,unsuspend:g8},o7(t),t=b8(),t!==null)){e.cancelPendingCommit=t(S7.bind(null,e,n,a,r,f,v,m,1,q,z)),ba(e,u,f,!S);return}S7(e,n,a,r,f,v,m,U,q,z)}function $4(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],u=r.getSnapshot;r=r.value;try{if(!Jt(u(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ba(e,t,n,a){t&=~C2,t&=~z1,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var u=31-Ct(r),f=1<<u;a[u]=-1,r&=~f}n!==0&&Q(e,n,t)}function rs(){return(tt&6)===0?(zi(0),!1):!0}function M2(){if(Me!==null){if(Qe===0)var e=Me.return;else e=Me,da=D1=null,Ho(e),ul=null,di=0,e=Me;for(;e!==null;)p7(e.alternate,e),e=e.return;Me=null}}function xl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,t8(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),M2(),Xe=e,Me=n=Za(e.current,null),Te=t,Qe=0,It=null,ga=!1,_l=Gn(e,t),_2=!1,Cl=xn=C2=z1=Ya=it=0,Pn=Mi=null,x2=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-Ct(a),u=1<<r;t|=e[r],a&=~u}return ma=t,Ar(),n}function b7(e,t){ke=null,X.H=Jn,t===ci?(t=Hc(),Qe=3):t===zc?(t=Hc(),Qe=4):Qe=t===Tu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,It=t,Me===null&&(it=1,Jr(e,pn(t,e.current)))}function _7(){var e=X.H;return X.H=Jn,e===null?Jn:e}function C7(){var e=X.A;return X.A=H4,e}function L2(){it=4,ga||(Te&4194176)!==Te&&mn.current!==null||(_l=!0),(Ya&134217727)===0&&(z1&134217727)===0||Xe===null||ba(Xe,Te,xn,!1)}function A2(e,t,n){var a=tt;tt|=2;var r=_7(),u=C7();(Xe!==e||Te!==t)&&(ls=null,xl(e,t)),t=!1;var f=it;e:do try{if(Qe!==0&&Me!==null){var v=Me,m=It;switch(Qe){case 8:M2(),f=6;break e;case 3:case 2:case 6:mn.current===null&&(t=!0);var S=Qe;if(Qe=0,It=null,wl(e,v,m,S),n&&_l){f=0;break e}break;default:S=Qe,Qe=0,It=null,wl(e,v,m,S)}}U4(),f=it;break}catch(U){b7(e,U)}while(!0);return t&&e.shellSuspendCounter++,da=D1=null,tt=a,X.H=r,X.A=u,Me===null&&(Xe=null,Te=0,Ar()),f}function U4(){for(;Me!==null;)x7(Me)}function N4(e,t){var n=tt;tt|=2;var a=_7(),r=C7();Xe!==e||Te!==t?(ls=null,as=Ft()+500,xl(e,t)):_l=Gn(e,t);e:do try{if(Qe!==0&&Me!==null){t=Me;var u=It;t:switch(Qe){case 1:Qe=0,It=null,wl(e,t,u,1);break;case 2:if(Tc(u)){Qe=0,It=null,w7(t);break}t=function(){Qe===2&&Xe===e&&(Qe=7),Wn(e)},u.then(t,t);break e;case 3:Qe=7;break e;case 4:Qe=5;break e;case 7:Tc(u)?(Qe=0,It=null,w7(t)):(Qe=0,It=null,wl(e,t,u,7));break;case 5:var f=null;switch(Me.tag){case 26:f=Me.memoizedState;case 5:case 27:var v=Me;if(!f||W7(f)){Qe=0,It=null;var m=v.sibling;if(m!==null)Me=m;else{var S=v.return;S!==null?(Me=S,ss(S)):Me=null}break t}}Qe=0,It=null,wl(e,t,u,5);break;case 6:Qe=0,It=null,wl(e,t,u,6);break;case 8:M2(),it=6;break e;default:throw Error(o(462))}}V4();break}catch(U){b7(e,U)}while(!0);return da=D1=null,X.H=a,X.A=r,tt=n,Me!==null?0:(Xe=null,Te=0,Ar(),it)}function V4(){for(;Me!==null&&!aa();)x7(Me)}function x7(e){var t=Yu(e.alternate,e,ma);e.memoizedProps=e.pendingProps,t===null?ss(e):Me=t}function w7(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Nu(n,t,t.pendingProps,t.type,void 0,Te);break;case 11:t=Nu(n,t,t.pendingProps,t.type.render,t.ref,Te);break;case 5:Ho(t);default:p7(n,t),t=Me=h7(t,ma),t=Yu(n,t,ma)}e.memoizedProps=e.pendingProps,t===null?ss(e):Me=t}function wl(e,t,n,a){da=D1=null,Ho(t),ul=null,di=0;var r=t.return;try{if(D4(e,r,t,n,Te)){it=1,Jr(e,pn(n,e.current)),Me=null;return}}catch(u){if(r!==null)throw Me=r,u;it=1,Jr(e,pn(n,e.current)),Me=null;return}t.flags&32768?(Ue||a===1?e=!0:_l||(Te&536870912)!==0?e=!1:(ga=e=!0,(a===2||a===3||a===6)&&(a=mn.current,a!==null&&a.tag===13&&(a.flags|=16384))),k7(t,e)):ss(t)}function ss(e){var t=e;do{if((t.flags&32768)!==0){k7(t,ga);return}e=t.return;var n=T4(t.alternate,t,ma);if(n!==null){Me=n;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);it===0&&(it=5)}function k7(e,t){do{var n=R4(e.alternate,e);if(n!==null){n.flags&=32767,Me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Me=e;return}Me=e=n}while(e!==null);it=6,Me=null}function S7(e,t,n,a,r,u,f,v,m,S){var U=X.T,q=K.p;try{K.p=2,X.T=null,B4(e,t,n,a,q,r,u,f,v,m,S)}finally{X.T=U,K.p=q}}function B4(e,t,n,a,r,u,f,v){do kl();while(T1!==null);if((tt&6)!==0)throw Error(o(327));var m=e.finishedWork;if(a=e.finishedLanes,m===null)return null;if(e.finishedWork=null,e.finishedLanes=0,m===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var S=m.lanes|m.childLanes;if(S|=bo,Y(e,a,S,u,f,v),e===Xe&&(Me=Xe=null,Te=0),(m.subtreeFlags&10256)===0&&(m.flags&10256)===0||is||(is=!0,k2=S,S2=n,Y4(d1,function(){return kl(),null})),n=(m.flags&15990)!==0,(m.subtreeFlags&15990)!==0||n?(n=X.T,X.T=null,u=K.p,K.p=2,f=tt,tt|=4,L4(e,m),i7(m,e),u4(j2,e.containerInfo),bs=!!q2,j2=q2=null,e.current=m,t7(e,m.alternate,m),u1(),tt=f,K.p=u,X.T=n):e.current=m,is?(is=!1,T1=e,Li=a):E7(e,S),S=e.pendingLanes,S===0&&(Ga=null),Js(m.stateNode),Wn(e),t!==null)for(r=e.onRecoverableError,m=0;m<t.length;m++)S=t[m],r(S.value,{componentStack:S.stack});return(Li&3)!==0&&kl(),S=e.pendingLanes,(a&4194218)!==0&&(S&42)!==0?e===E2?Ai++:(Ai=0,E2=e):Ai=0,zi(0),null}function E7(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fi(t)))}function kl(){if(T1!==null){var e=T1,t=k2;k2=0;var n=ce(Li),a=X.T,r=K.p;try{if(K.p=32>n?32:n,X.T=null,T1===null)var u=!1;else{n=S2,S2=null;var f=T1,v=Li;if(T1=null,Li=0,(tt&6)!==0)throw Error(o(331));var m=tt;if(tt|=4,u7(f.current),s7(f,f.current,v,n),tt=m,zi(0,!1),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Ma,f)}catch{}u=!0}return u}finally{K.p=r,X.T=a,E7(e,t)}}return!1}function D7(e,t,n){t=pn(n,t),t=Fo(e.stateNode,t,2),e=Va(e,t,2),e!==null&&(R(e,2),Wn(e))}function Ye(e,t,n){if(e.tag===3)D7(e,e,n);else for(;t!==null;){if(t.tag===3){D7(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ga===null||!Ga.has(a))){e=pn(n,e),n=Au(2),a=Va(t,n,2),a!==null&&(zu(n,a,t,e),R(a,2),Wn(a));break}}t=t.return}}function z2(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new O4;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(_2=!0,r.add(n),e=q4.bind(null,e,t,n),t.then(e,e))}function q4(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Xe===e&&(Te&n)===n&&(it===4||it===3&&(Te&62914560)===Te&&300>Ft()-w2?(tt&2)===0&&xl(e,0):C2|=n,Cl===Te&&(Cl=0)),Wn(e)}function M7(e,t){t===0&&(t=C()),e=za(e,t),e!==null&&(R(e,t),Wn(e))}function j4(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),M7(e,n)}function Z4(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(t),M7(e,n)}function Y4(e,t){return Xl(e,t)}var os=null,Sl=null,T2=!1,cs=!1,R2=!1,R1=0;function Wn(e){e!==Sl&&e.next===null&&(Sl===null?os=Sl=e:Sl=Sl.next=e),cs=!0,T2||(T2=!0,X4(G4))}function zi(e,t){if(!R2&&cs){R2=!0;do for(var n=!1,a=os;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var u=0;else{var f=a.suspendedLanes,v=a.pingedLanes;u=(1<<31-Ct(42|e)+1)-1,u&=r&~(f&~v),u=u&201326677?u&201326677|1:u?u|2:0}u!==0&&(n=!0,z7(a,u))}else u=Te,u=la(a,a===Xe?u:0),(u&3)===0||Gn(a,u)||(n=!0,z7(a,u));a=a.next}while(n);R2=!1}}function G4(){cs=T2=!1;var e=0;R1!==0&&(e8()&&(e=R1),R1=0);for(var t=Ft(),n=null,a=os;a!==null;){var r=a.next,u=L7(a,t);u===0?(a.next=null,n===null?os=r:n.next=r,r===null&&(Sl=n)):(n=a,(e!==0||(u&3)!==0)&&(cs=!0)),a=r}zi(e)}function L7(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var f=31-Ct(u),v=1<<f,m=r[f];m===-1?((v&n)===0||(v&a)!==0)&&(r[f]=Ws(v,t)):m<=t&&(e.expiredLanes|=v),u&=~v}if(t=Xe,n=Te,n=la(e,e===t?n:0),a=e.callbackNode,n===0||e===t&&Qe===2||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ql(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Gn(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Ql(a),ce(n)){case 2:case 8:n=un;break;case 32:n=d1;break;case 268435456:n=gr;break;default:n=d1}return a=A7.bind(null,e),n=Xl(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Ql(a),e.callbackPriority=2,e.callbackNode=null,2}function A7(e,t){var n=e.callbackNode;if(kl()&&e.callbackNode!==n)return null;var a=Te;return a=la(e,e===Xe?a:0),a===0?null:(g7(e,a,t),L7(e,Ft()),e.callbackNode!=null&&e.callbackNode===n?A7.bind(null,e):null)}function z7(e,t){if(kl())return null;g7(e,t,!0)}function X4(e){n8(function(){(tt&6)!==0?Xl(An,e):e()})}function H2(){return R1===0&&(R1=_r()),R1}function T7(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wr(""+e)}function R7(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Q4(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var u=T7((r[P]||null).action),f=a.submitter;f&&(t=(t=f[P]||null)?T7(t.formAction):f.getAttribute("formAction"),t!==null&&(u=t,f=null));var v=new Dr("action","action",null,a,r);e.push({event:v,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(R1!==0){var m=f?R7(r,f):new FormData(r);Zo(n,{pending:!0,data:m,method:r.method,action:u},null,m)}}else typeof u=="function"&&(v.preventDefault(),m=f?R7(r,f):new FormData(r),Zo(n,{pending:!0,data:m,method:r.method,action:u},u,m))},currentTarget:r}]})}}for(var O2=0;O2<Sc.length;O2++){var $2=Sc[O2],F4=$2.toLowerCase(),K4=$2[0].toUpperCase()+$2.slice(1);Rn(F4,"on"+K4)}Rn(_c,"onAnimationEnd"),Rn(Cc,"onAnimationIteration"),Rn(xc,"onAnimationStart"),Rn("dblclick","onDoubleClick"),Rn("focusin","onFocus"),Rn("focusout","onBlur"),Rn(h4,"onTransitionRun"),Rn(f4,"onTransitionStart"),Rn(y4,"onTransitionCancel"),Rn(wc,"onTransitionEnd"),Ae("onMouseEnter",["mouseout","mouseover"]),Ae("onMouseLeave",["mouseout","mouseover"]),Ae("onPointerEnter",["pointerout","pointerover"]),Ae("onPointerLeave",["pointerout","pointerover"]),dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),dn("onBeforeInput",["compositionend","keypress","textInput","paste"]),dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J4=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ti));function H7(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var u=void 0;if(t)for(var f=a.length-1;0<=f;f--){var v=a[f],m=v.instance,S=v.currentTarget;if(v=v.listener,m!==u&&r.isPropagationStopped())break e;u=v,r.currentTarget=S;try{u(r)}catch(U){Kr(U)}r.currentTarget=null,u=m}else for(f=0;f<a.length;f++){if(v=a[f],m=v.instance,S=v.currentTarget,v=v.listener,m!==u&&r.isPropagationStopped())break e;u=v,r.currentTarget=S;try{u(r)}catch(U){Kr(U)}r.currentTarget=null,u=m}}}}function ze(e,t){var n=t[qe];n===void 0&&(n=t[qe]=new Set);var a=e+"__bubble";n.has(a)||(O7(t,e,2,!1),n.add(a))}function U2(e,t,n){var a=0;t&&(a|=4),O7(n,e,a,t)}var us="_reactListening"+Math.random().toString(36).slice(2);function N2(e){if(!e[us]){e[us]=!0,Qn.forEach(function(n){n!=="selectionchange"&&(J4.has(n)||U2(n,!1,e),U2(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[us]||(t[us]=!0,U2("selectionchange",!1,t))}}function O7(e,t,n,a){switch(l0(t)){case 2:var r=x8;break;case 8:r=w8;break;default:r=P2}n=r.bind(null,t,n,e),r=void 0,!io||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function V2(e,t,n,a,r){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var v=a.stateNode.containerInfo;if(v===r||v.nodeType===8&&v.parentNode===r)break;if(f===4)for(f=a.return;f!==null;){var m=f.tag;if((m===3||m===4)&&(m=f.stateNode.containerInfo,m===r||m.nodeType===8&&m.parentNode===r))return;f=f.return}for(;v!==null;){if(f=Kt(v),f===null)return;if(m=f.tag,m===5||m===6||m===26||m===27){a=u=f;continue e}v=v.parentNode}}a=a.return}J5(function(){var S=u,U=ao(n),q=[];e:{var z=kc.get(e);if(z!==void 0){var $=Dr,se=e;switch(e){case"keypress":if(Sr(n)===0)break e;case"keydown":case"keyup":$=Zd;break;case"focusin":se="focus",$=co;break;case"focusout":se="blur",$=co;break;case"beforeblur":case"afterblur":$=co;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=I5;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=zd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Xd;break;case _c:case Cc:case xc:$=Hd;break;case wc:$=Fd;break;case"scroll":case"scrollend":$=Ld;break;case"wheel":$=Jd;break;case"copy":case"cut":case"paste":$=$d;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=tc;break;case"toggle":case"beforetoggle":$=Wd}var me=(t&4)!==0,rt=!me&&(e==="scroll"||e==="scrollend"),D=me?z!==null?z+"Capture":null:z;me=[];for(var k=S,L;k!==null;){var V=k;if(L=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||L===null||D===null||(V=Pl(k,D),V!=null&&me.push(Ri(k,V,L))),rt)break;k=k.return}0<me.length&&(z=new $(z,se,null,n,U),q.push({event:z,listeners:me}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",z&&n!==no&&(se=n.relatedTarget||n.fromElement)&&(Kt(se)||se[pe]))break e;if(($||z)&&(z=U.window===U?U:(z=U.ownerDocument)?z.defaultView||z.parentWindow:window,$?(se=n.relatedTarget||n.toElement,$=S,se=se?Kt(se):null,se!==null&&(rt=ae(se),me=se.tag,se!==rt||me!==5&&me!==27&&me!==6)&&(se=null)):($=null,se=S),$!==se)){if(me=I5,V="onMouseLeave",D="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(me=tc,V="onPointerLeave",D="onPointerEnter",k="pointer"),rt=$==null?z:$t($),L=se==null?z:$t(se),z=new me(V,k+"leave",$,n,U),z.target=rt,z.relatedTarget=L,V=null,Kt(U)===S&&(me=new me(D,k+"enter",se,n,U),me.target=L,me.relatedTarget=rt,V=me),rt=V,$&&se)t:{for(me=$,D=se,k=0,L=me;L;L=El(L))k++;for(L=0,V=D;V;V=El(V))L++;for(;0<k-L;)me=El(me),k--;for(;0<L-k;)D=El(D),L--;for(;k--;){if(me===D||D!==null&&me===D.alternate)break t;me=El(me),D=El(D)}me=null}else me=null;$!==null&&$7(q,z,$,me,!1),se!==null&&rt!==null&&$7(q,rt,se,me,!0)}}e:{if(z=S?$t(S):window,$=z.nodeName&&z.nodeName.toLowerCase(),$==="select"||$==="input"&&z.type==="file")var ne=cc;else if(sc(z))if(uc)ne=o4;else{ne=r4;var Se=i4}else $=z.nodeName,!$||$.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?S&&to(S.elementType)&&(ne=cc):ne=s4;if(ne&&(ne=ne(e,S))){oc(q,ne,n,U);break e}Se&&Se(e,z,S),e==="focusout"&&S&&z.type==="number"&&S.memoizedProps.value!=null&&eo(z,"number",z.value)}switch(Se=S?$t(S):window,e){case"focusin":(sc(Se)||Se.contentEditable==="true")&&(ll=Se,vo=S,ii=null);break;case"focusout":ii=vo=ll=null;break;case"mousedown":go=!0;break;case"contextmenu":case"mouseup":case"dragend":go=!1,mc(q,n,U);break;case"selectionchange":if(d4)break;case"keydown":case"keyup":mc(q,n,U)}var he;if(ho)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else al?ic(e,n)&&(fe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(fe="onCompositionStart");fe&&(nc&&n.locale!=="ko"&&(al||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&al&&(he=P5()):(Aa=U,ro="value"in Aa?Aa.value:Aa.textContent,al=!0)),Se=ds(S,fe),0<Se.length&&(fe=new ec(fe,e,null,n,U),q.push({event:fe,listeners:Se}),he?fe.data=he:(he=rc(n),he!==null&&(fe.data=he)))),(he=e4?t4(e,n):n4(e,n))&&(fe=ds(S,"onBeforeInput"),0<fe.length&&(Se=new ec("onBeforeInput","beforeinput",null,n,U),q.push({event:Se,listeners:fe}),Se.data=he)),Q4(q,e,S,n,U)}H7(q,t)})}function Ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ds(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,u=r.stateNode;r=r.tag,r!==5&&r!==26&&r!==27||u===null||(r=Pl(e,n),r!=null&&a.unshift(Ri(e,r,u)),r=Pl(e,t),r!=null&&a.push(Ri(e,r,u))),e=e.return}return a}function El(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $7(e,t,n,a,r){for(var u=t._reactName,f=[];n!==null&&n!==a;){var v=n,m=v.alternate,S=v.stateNode;if(v=v.tag,m!==null&&m===a)break;v!==5&&v!==26&&v!==27||S===null||(m=S,r?(S=Pl(n,u),S!=null&&f.unshift(Ri(n,S,m))):r||(S=Pl(n,u),S!=null&&f.push(Ri(n,S,m)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var P4=/\r\n?/g,W4=/\u0000|\uFFFD/g;function U7(e){return(typeof e=="string"?e:""+e).replace(P4,`
`).replace(W4,"")}function N7(e,t){return t=U7(t),U7(e)===t}function hs(){}function Ze(e,t,n,a,r,u){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||el(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&el(e,""+a);break;case"className":W1(e,"class",a);break;case"tabIndex":W1(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":W1(e,n,a);break;case"style":F5(e,a,u);break;case"data":if(t!=="object"){W1(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=wr(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Ze(e,t,"name",r.name,r,null),Ze(e,t,"formEncType",r.formEncType,r,null),Ze(e,t,"formMethod",r.formMethod,r,null),Ze(e,t,"formTarget",r.formTarget,r,null)):(Ze(e,t,"encType",r.encType,r,null),Ze(e,t,"method",r.method,r,null),Ze(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=wr(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=hs);break;case"onScroll":a!=null&&ze("scroll",e);break;case"onScrollEnd":a!=null&&ze("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=wr(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ze("beforetoggle",e),ze("toggle",e),y1(e,"popover",a);break;case"xlinkActuate":ia(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ia(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ia(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ia(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ia(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ia(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ia(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ia(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ia(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":y1(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Dd.get(n)||n,y1(e,n,a))}}function B2(e,t,n,a,r,u){switch(n){case"style":F5(e,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof a=="string"?el(e,a):(typeof a=="number"||typeof a=="bigint")&&el(e,""+a);break;case"onScroll":a!=null&&ze("scroll",e);break;case"onScrollEnd":a!=null&&ze("scrollend",e);break;case"onClick":a!=null&&(e.onclick=hs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!f1.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),u=e[P]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,r),typeof a=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):y1(e,n,a)}}}function Rt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",e),ze("load",e);var a=!1,r=!1,u;for(u in n)if(n.hasOwnProperty(u)){var f=n[u];if(f!=null)switch(u){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ze(e,t,u,f,n,null)}}r&&Ze(e,t,"srcSet",n.srcSet,n,null),a&&Ze(e,t,"src",n.src,n,null);return;case"input":ze("invalid",e);var v=u=f=r=null,m=null,S=null;for(a in n)if(n.hasOwnProperty(a)){var U=n[a];if(U!=null)switch(a){case"name":r=U;break;case"type":f=U;break;case"checked":m=U;break;case"defaultChecked":S=U;break;case"value":u=U;break;case"defaultValue":v=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o(137,t));break;default:Ze(e,t,a,U,n,null)}}Y5(e,u,v,m,S,f,r,!1),Cr(e);return;case"select":ze("invalid",e),a=f=u=null;for(r in n)if(n.hasOwnProperty(r)&&(v=n[r],v!=null))switch(r){case"value":u=v;break;case"defaultValue":f=v;break;case"multiple":a=v;default:Ze(e,t,r,v,n,null)}t=u,n=f,e.multiple=!!a,t!=null?I1(e,!!a,t,!1):n!=null&&I1(e,!!a,n,!0);return;case"textarea":ze("invalid",e),u=r=a=null;for(f in n)if(n.hasOwnProperty(f)&&(v=n[f],v!=null))switch(f){case"value":a=v;break;case"defaultValue":r=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(91));break;default:Ze(e,t,f,v,n,null)}X5(e,a,r,u),Cr(e);return;case"option":for(m in n)if(n.hasOwnProperty(m)&&(a=n[m],a!=null))switch(m){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ze(e,t,m,a,n,null)}return;case"dialog":ze("cancel",e),ze("close",e);break;case"iframe":case"object":ze("load",e);break;case"video":case"audio":for(a=0;a<Ti.length;a++)ze(Ti[a],e);break;case"image":ze("error",e),ze("load",e);break;case"details":ze("toggle",e);break;case"embed":case"source":case"link":ze("error",e),ze("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in n)if(n.hasOwnProperty(S)&&(a=n[S],a!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ze(e,t,S,a,n,null)}return;default:if(to(t)){for(U in n)n.hasOwnProperty(U)&&(a=n[U],a!==void 0&&B2(e,t,U,a,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(a=n[v],a!=null&&Ze(e,t,v,a,n,null))}function I4(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,u=null,f=null,v=null,m=null,S=null,U=null;for($ in n){var q=n[$];if(n.hasOwnProperty($)&&q!=null)switch($){case"checked":break;case"value":break;case"defaultValue":m=q;default:a.hasOwnProperty($)||Ze(e,t,$,null,a,q)}}for(var z in a){var $=a[z];if(q=n[z],a.hasOwnProperty(z)&&($!=null||q!=null))switch(z){case"type":u=$;break;case"name":r=$;break;case"checked":S=$;break;case"defaultChecked":U=$;break;case"value":f=$;break;case"defaultValue":v=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(o(137,t));break;default:$!==q&&Ze(e,t,z,$,a,q)}}Is(e,f,v,m,S,U,u,r);return;case"select":$=f=v=z=null;for(u in n)if(m=n[u],n.hasOwnProperty(u)&&m!=null)switch(u){case"value":break;case"multiple":$=m;default:a.hasOwnProperty(u)||Ze(e,t,u,null,a,m)}for(r in a)if(u=a[r],m=n[r],a.hasOwnProperty(r)&&(u!=null||m!=null))switch(r){case"value":z=u;break;case"defaultValue":v=u;break;case"multiple":f=u;default:u!==m&&Ze(e,t,r,u,a,m)}t=v,n=f,a=$,z!=null?I1(e,!!n,z,!1):!!a!=!!n&&(t!=null?I1(e,!!n,t,!0):I1(e,!!n,n?[]:"",!1));return;case"textarea":$=z=null;for(v in n)if(r=n[v],n.hasOwnProperty(v)&&r!=null&&!a.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ze(e,t,v,null,a,r)}for(f in a)if(r=a[f],u=n[f],a.hasOwnProperty(f)&&(r!=null||u!=null))switch(f){case"value":z=r;break;case"defaultValue":$=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==u&&Ze(e,t,f,r,a,u)}G5(e,z,$);return;case"option":for(var se in n)if(z=n[se],n.hasOwnProperty(se)&&z!=null&&!a.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:Ze(e,t,se,null,a,z)}for(m in a)if(z=a[m],$=n[m],a.hasOwnProperty(m)&&z!==$&&(z!=null||$!=null))switch(m){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Ze(e,t,m,z,a,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in n)z=n[me],n.hasOwnProperty(me)&&z!=null&&!a.hasOwnProperty(me)&&Ze(e,t,me,null,a,z);for(S in a)if(z=a[S],$=n[S],a.hasOwnProperty(S)&&z!==$&&(z!=null||$!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,t));break;default:Ze(e,t,S,z,a,$)}return;default:if(to(t)){for(var rt in n)z=n[rt],n.hasOwnProperty(rt)&&z!==void 0&&!a.hasOwnProperty(rt)&&B2(e,t,rt,void 0,a,z);for(U in a)z=a[U],$=n[U],!a.hasOwnProperty(U)||z===$||z===void 0&&$===void 0||B2(e,t,U,z,a,$);return}}for(var D in n)z=n[D],n.hasOwnProperty(D)&&z!=null&&!a.hasOwnProperty(D)&&Ze(e,t,D,null,a,z);for(q in a)z=a[q],$=n[q],!a.hasOwnProperty(q)||z===$||z==null&&$==null||Ze(e,t,q,z,a,$)}var q2=null,j2=null;function fs(e){return e.nodeType===9?e:e.ownerDocument}function V7(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function B7(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Z2(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Y2=null;function e8(){var e=window.event;return e&&e.type==="popstate"?e===Y2?!1:(Y2=e,!0):(Y2=null,!1)}var q7=typeof setTimeout=="function"?setTimeout:void 0,t8=typeof clearTimeout=="function"?clearTimeout:void 0,j7=typeof Promise=="function"?Promise:void 0,n8=typeof queueMicrotask=="function"?queueMicrotask:typeof j7<"u"?function(e){return j7.resolve(null).then(e).catch(a8)}:q7;function a8(e){setTimeout(function(){throw e})}function G2(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(a===0){e.removeChild(r),qi(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=r}while(n);qi(t)}function X2(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":X2(n),Tn(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function l8(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Be])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==r.rel||e.getAttribute("href")!==(r.href==null?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=$n(e.nextSibling),e===null)break}return null}function i8(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=$n(e.nextSibling),e===null))return null;return e}function $n(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function Z7(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Y7(e,t,n){switch(t=fs(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}var wn=new Map,G7=new Set;function ys(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var _a=K.d;K.d={f:r8,r:s8,D:o8,C:c8,L:u8,m:d8,X:f8,S:h8,M:y8};function r8(){var e=_a.f(),t=rs();return e||t}function s8(e){var t=Vt(e);t!==null&&t.tag===5&&t.type==="form"?mu(t):_a.r(e)}var Dl=typeof document>"u"?null:document;function X7(e,t,n){var a=Dl;if(a&&typeof t=="string"&&t){var r=fn(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),G7.has(r)||(G7.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),Rt(t,"link",e),We(t),a.head.appendChild(t)))}}function o8(e){_a.D(e),X7("dns-prefetch",e,null)}function c8(e,t){_a.C(e,t),X7("preconnect",e,t)}function u8(e,t,n){_a.L(e,t,n);var a=Dl;if(a&&e&&t){var r='link[rel="preload"][as="'+fn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+fn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+fn(n.imageSizes)+'"]')):r+='[href="'+fn(e)+'"]';var u=r;switch(t){case"style":u=Ml(e);break;case"script":u=Ll(e)}wn.has(u)||(e=ve({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),wn.set(u,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(Hi(u))||t==="script"&&a.querySelector(Oi(u))||(t=a.createElement("link"),Rt(t,"link",e),We(t),a.head.appendChild(t)))}}function d8(e,t){_a.m(e,t);var n=Dl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+fn(a)+'"][href="'+fn(e)+'"]',u=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ll(e)}if(!wn.has(u)&&(e=ve({rel:"modulepreload",href:e},t),wn.set(u,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Oi(u)))return}a=n.createElement("link"),Rt(a,"link",e),We(a),n.head.appendChild(a)}}}function h8(e,t,n){_a.S(e,t,n);var a=Dl;if(a&&e){var r=Xn(a).hoistableStyles,u=Ml(e);t=t||"default";var f=r.get(u);if(!f){var v={loading:0,preload:null};if(f=a.querySelector(Hi(u)))v.loading=5;else{e=ve({rel:"stylesheet",href:e,"data-precedence":t},n),(n=wn.get(u))&&Q2(e,n);var m=f=a.createElement("link");We(m),Rt(m,"link",e),m._p=new Promise(function(S,U){m.onload=S,m.onerror=U}),m.addEventListener("load",function(){v.loading|=1}),m.addEventListener("error",function(){v.loading|=2}),v.loading|=4,ps(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:v},r.set(u,f)}}}function f8(e,t){_a.X(e,t);var n=Dl;if(n&&e){var a=Xn(n).hoistableScripts,r=Ll(e),u=a.get(r);u||(u=n.querySelector(Oi(r)),u||(e=ve({src:e,async:!0},t),(t=wn.get(r))&&F2(e,t),u=n.createElement("script"),We(u),Rt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(r,u))}}function y8(e,t){_a.M(e,t);var n=Dl;if(n&&e){var a=Xn(n).hoistableScripts,r=Ll(e),u=a.get(r);u||(u=n.querySelector(Oi(r)),u||(e=ve({src:e,async:!0,type:"module"},t),(t=wn.get(r))&&F2(e,t),u=n.createElement("script"),We(u),Rt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(r,u))}}function Q7(e,t,n,a){var r=(r=jn.current)?ys(r):null;if(!r)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ml(n.href),n=Xn(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ml(n.href);var u=Xn(r).hoistableStyles,f=u.get(e);if(f||(r=r.ownerDocument||r,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,f),(u=r.querySelector(Hi(e)))&&!u._p&&(f.instance=u,f.state.loading=5),wn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},wn.set(e,n),u||p8(r,e,n,f.state))),t&&a===null)throw Error(o(528,""));return f}if(t&&a!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ll(n),n=Xn(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ml(e){return'href="'+fn(e)+'"'}function Hi(e){return'link[rel="stylesheet"]['+e+"]"}function F7(e){return ve({},e,{"data-precedence":e.precedence,precedence:null})}function p8(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Rt(t,"link",n),We(t),e.head.appendChild(t))}function Ll(e){return'[src="'+fn(e)+'"]'}function Oi(e){return"script[async]"+e}function K7(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+fn(n.href)+'"]');if(a)return t.instance=a,We(a),a;var r=ve({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),We(a),Rt(a,"style",r),ps(a,n.precedence,e),t.instance=a;case"stylesheet":r=Ml(n.href);var u=e.querySelector(Hi(r));if(u)return t.state.loading|=4,t.instance=u,We(u),u;a=F7(n),(r=wn.get(r))&&Q2(a,r),u=(e.ownerDocument||e).createElement("link"),We(u);var f=u;return f._p=new Promise(function(v,m){f.onload=v,f.onerror=m}),Rt(u,"link",a),t.state.loading|=4,ps(u,n.precedence,e),t.instance=u;case"script":return u=Ll(n.src),(r=e.querySelector(Oi(u)))?(t.instance=r,We(r),r):(a=n,(r=wn.get(u))&&(a=ve({},n),F2(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),We(r),Rt(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,ps(a,n.precedence,e));return t.instance}function ps(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,u=r,f=0;f<a.length;f++){var v=a[f];if(v.dataset.precedence===t)u=v;else if(u!==r)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Q2(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function F2(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var vs=null;function J7(e,t,n){if(vs===null){var a=new Map,r=vs=new Map;r.set(n,a)}else r=vs,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var u=n[r];if(!(u[Be]||u[te]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var f=u.getAttribute(t)||"";f=e+f;var v=a.get(f);v?v.push(u):a.set(f,[u])}}return a}function P7(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function v8(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function W7(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var $i=null;function g8(){}function m8(e,t,n){if($i===null)throw Error(o(475));var a=$i;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=Ml(n.href),u=e.querySelector(Hi(r));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=gs.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=u,We(u);return}u=e.ownerDocument||e,n=F7(n),(r=wn.get(r))&&Q2(n,r),u=u.createElement("link"),We(u);var f=u;f._p=new Promise(function(v,m){f.onload=v,f.onerror=m}),Rt(u,"link",n),t.instance=u}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=gs.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function b8(){if($i===null)throw Error(o(475));var e=$i;return e.stylesheets&&e.count===0&&K2(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&K2(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function gs(){if(this.count--,this.count===0){if(this.stylesheets)K2(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ms=null;function K2(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ms=new Map,t.forEach(_8,e),ms=null,gs.call(e))}function _8(e,t){if(!(t.state.loading&4)){var n=ms.get(e);if(n)var a=n.get(null);else{n=new Map,ms.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<r.length;u++){var f=r[u];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}r=t.instance,f=r.getAttribute("data-precedence"),u=n.get(f)||a,u===a&&n.set(null,r),n.set(f,r),this.count++,a=gs.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),u?u.parentNode.insertBefore(r,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Ui={$$typeof:A,Provider:null,Consumer:null,_currentValue:we,_currentValue2:we,_threadCount:0};function C8(e,t,n,a,r,u,f,v){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=M(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=M(0),this.hiddenUpdates=M(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=u,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function I7(e,t,n,a,r,u,f,v,m,S,U,q){return e=new C8(e,t,n,f,v,m,S,q),t=1,u===!0&&(t|=24),u=Cn(3,null,null,t),e.current=u,u.stateNode=e,t=Do(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:a,isDehydrated:n,cache:t},s2(u),e}function e0(e){return e?(e=sl,e):sl}function t0(e,t,n,a,r,u){r=e0(r),a.context===null?a.context=r:a.pendingContext=r,a=Na(t),a.payload={element:n},u=u===void 0?null:u,u!==null&&(a.callback=u),n=Va(e,a,t),n!==null&&(qt(n,e,t),_i(n,e,t))}function n0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function J2(e,t){n0(e,t),(e=e.alternate)&&n0(e,t)}function a0(e){if(e.tag===13){var t=za(e,67108864);t!==null&&qt(t,e,67108864),J2(e,67108864)}}var bs=!0;function x8(e,t,n,a){var r=X.T;X.T=null;var u=K.p;try{K.p=2,P2(e,t,n,a)}finally{K.p=u,X.T=r}}function w8(e,t,n,a){var r=X.T;X.T=null;var u=K.p;try{K.p=8,P2(e,t,n,a)}finally{K.p=u,X.T=r}}function P2(e,t,n,a){if(bs){var r=W2(a);if(r===null)V2(e,t,a,_s,n),i0(e,a);else if(S8(r,e,t,n,a))a.stopPropagation();else if(i0(e,a),t&4&&-1<k8.indexOf(e)){for(;r!==null;){var u=Vt(r);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var f=Yn(u.pendingLanes);if(f!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;f;){var m=1<<31-Ct(f);v.entanglements[1]|=m,f&=~m}Wn(u),(tt&6)===0&&(as=Ft()+500,zi(0))}}break;case 13:v=za(u,2),v!==null&&qt(v,u,2),rs(),J2(u,2)}if(u=W2(a),u===null&&V2(e,t,a,_s,n),u===r)break;r=u}r!==null&&a.stopPropagation()}else V2(e,t,a,null,n)}}function W2(e){return e=ao(e),I2(e)}var _s=null;function I2(e){if(_s=null,e=Kt(e),e!==null){var t=ae(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=_e(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return _s=e,null}function l0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fl()){case An:return 2;case un:return 8;case d1:case Kl:return 32;case gr:return 268435456;default:return 32}default:return 32}}var e5=!1,Xa=null,Qa=null,Fa=null,Ni=new Map,Vi=new Map,Ka=[],k8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function i0(e,t){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":Ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(t.pointerId)}}function Bi(e,t,n,a,r,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:u,targetContainers:[r]},t!==null&&(t=Vt(t),t!==null&&a0(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function S8(e,t,n,a,r){switch(t){case"focusin":return Xa=Bi(Xa,e,t,n,a,r),!0;case"dragenter":return Qa=Bi(Qa,e,t,n,a,r),!0;case"mouseover":return Fa=Bi(Fa,e,t,n,a,r),!0;case"pointerover":var u=r.pointerId;return Ni.set(u,Bi(Ni.get(u)||null,e,t,n,a,r)),!0;case"gotpointercapture":return u=r.pointerId,Vi.set(u,Bi(Vi.get(u)||null,e,t,n,a,r)),!0}return!1}function r0(e){var t=Kt(e.target);if(t!==null){var n=ae(t);if(n!==null){if(t=n.tag,t===13){if(t=_e(n),t!==null){e.blockedOn=t,de(e.priority,function(){if(n.tag===13){var a=en(),r=za(n,a);r!==null&&qt(r,n,a),J2(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=W2(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);no=a,n.target.dispatchEvent(a),no=null}else return t=Vt(n),t!==null&&a0(t),e.blockedOn=n,!1;t.shift()}return!0}function s0(e,t,n){Cs(e)&&n.delete(t)}function E8(){e5=!1,Xa!==null&&Cs(Xa)&&(Xa=null),Qa!==null&&Cs(Qa)&&(Qa=null),Fa!==null&&Cs(Fa)&&(Fa=null),Ni.forEach(s0),Vi.forEach(s0)}function xs(e,t){e.blockedOn===t&&(e.blockedOn=null,e5||(e5=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,E8)))}var ws=null;function o0(e){ws!==e&&(ws=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ws===e&&(ws=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(I2(a||n)===null)continue;break}var u=Vt(n);u!==null&&(e.splice(t,3),t-=3,Zo(u,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function qi(e){function t(m){return xs(m,e)}Xa!==null&&xs(Xa,e),Qa!==null&&xs(Qa,e),Fa!==null&&xs(Fa,e),Ni.forEach(t),Vi.forEach(t);for(var n=0;n<Ka.length;n++){var a=Ka[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Ka.length&&(n=Ka[0],n.blockedOn===null);)r0(n),n.blockedOn===null&&Ka.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],u=n[a+1],f=r[P]||null;if(typeof u=="function")f||o0(n);else if(f){var v=null;if(u&&u.hasAttribute("formAction")){if(r=u,f=u[P]||null)v=f.formAction;else if(I2(r)!==null)continue}else v=f.action;typeof v=="function"?n[a+1]=v:(n.splice(a,3),a-=3),o0(n)}}}function t5(e){this._internalRoot=e}ks.prototype.render=t5.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,a=en();t0(n,a,e,t,null,null)},ks.prototype.unmount=t5.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&kl(),t0(e.current,2,null,e,null,null),rs(),t[pe]=null}};function ks(e){this._internalRoot=e}ks.prototype.unstable_scheduleHydration=function(e){if(e){var t=le();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ka.length&&t!==0&&t<Ka[n].priority;n++);Ka.splice(n,0,e),n===0&&r0(e)}};var c0=l.version;if(c0!=="19.0.0")throw Error(o(527,c0,"19.0.0"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=B(t),e=e!==null?ie(e):null,e=e===null?null:e.stateNode,e};var D8={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:X,findFiberByHostInstance:Kt,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ss.isDisabled&&Ss.supportsFiber)try{Ma=Ss.inject(D8),Ot=Ss}catch{}}return Zi.createRoot=function(e,t){if(!c(e))throw Error(o(299));var n=!1,a="",r=Eu,u=Du,f=Mu,v=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(v=t.unstable_transitionCallbacks)),t=I7(e,1,!1,null,null,n,a,r,u,f,v,null),e[pe]=t.current,N2(e.nodeType===8?e.parentNode:e),new t5(t)},Zi.hydrateRoot=function(e,t,n){if(!c(e))throw Error(o(299));var a=!1,r="",u=Eu,f=Du,v=Mu,m=null,S=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(m=n.unstable_transitionCallbacks),n.formState!==void 0&&(S=n.formState)),t=I7(e,1,!0,t,n??null,a,r,u,f,v,m,S),t.context=e0(null),n=t.current,a=en(),r=Na(a),r.callback=null,Va(n,r,a),t.current.lanes=a,R(t,a),Wn(t),e[pe]=t.current,N2(e),new ks(t)},Zi.version="19.0.0",Zi}var b0;function V8(){if(b0)return l5.exports;b0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),l5.exports=N8(),l5.exports}var B8=V8();/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var i3=i=>{throw TypeError(i)},q8=(i,l,s)=>l.has(i)||i3("Cannot "+s),o5=(i,l,s)=>(q8(i,l,"read from private field"),s?s.call(i):l.get(i)),j8=(i,l,s)=>l.has(i)?i3("Cannot add the same private member more than once"):l instanceof WeakSet?l.add(i):l.set(i,s),_0="popstate";function Z8(i={}){function l(o,c){let{pathname:d,search:h,hash:g}=o.location;return nr("",{pathname:d,search:h,hash:g},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function s(o,c){return typeof c=="string"?c:l1(c)}return G8(l,s,null,i)}function Ee(i,l){if(i===!1||i===null||typeof i>"u")throw new Error(l)}function ct(i,l){if(!i){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function Y8(){return Math.random().toString(36).substring(2,10)}function C0(i,l){return{usr:i.state,key:i.key,idx:l}}function nr(i,l,s=null,o){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof l=="string"?i1(l):l,state:s,key:l&&l.key||o||Y8()}}function l1({pathname:i="/",search:l="",hash:s=""}){return l&&l!=="?"&&(i+=l.charAt(0)==="?"?l:"?"+l),s&&s!=="#"&&(i+=s.charAt(0)==="#"?s:"#"+s),i}function i1(i){let l={};if(i){let s=i.indexOf("#");s>=0&&(l.hash=i.substring(s),i=i.substring(0,s));let o=i.indexOf("?");o>=0&&(l.search=i.substring(o),i=i.substring(0,o)),i&&(l.pathname=i)}return l}function G8(i,l,s,o={}){let{window:c=document.defaultView,v5Compat:d=!1}=o,h=c.history,g="POP",y=null,p=b();p==null&&(p=0,h.replaceState({...h.state,idx:p},""));function b(){return(h.state||{idx:null}).idx}function w(){g="POP";let J=b(),Z=J==null?null:J-p;p=J,y&&y({action:g,location:F.location,delta:Z})}function E(J,Z){g="PUSH";let ye=nr(F.location,J,Z);p=b()+1;let ee=C0(ye,p),be=F.createHref(ye);try{h.pushState(ee,"",be)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;c.location.assign(be)}d&&y&&y({action:g,location:F.location,delta:1})}function A(J,Z){g="REPLACE";let ye=nr(F.location,J,Z);p=b();let ee=C0(ye,p),be=F.createHref(ye);h.replaceState(ee,"",be),d&&y&&y({action:g,location:F.location,delta:0})}function N(J){return r3(J)}let F={get action(){return g},get location(){return i(c,h)},listen(J){if(y)throw new Error("A history only accepts one active listener");return c.addEventListener(_0,w),y=J,()=>{c.removeEventListener(_0,w),y=null}},createHref(J){return l(c,J)},createURL:N,encodeLocation(J){let Z=N(J);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:E,replace:A,go(J){return h.go(J)}};return F}function r3(i,l=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Ee(s,"No window.location.(origin|href) available to create URL");let o=typeof i=="string"?i:l1(i);return o=o.replace(/ $/,"%20"),!l&&o.startsWith("//")&&(o=s+o),new URL(o,s)}var Wi,x0=class{constructor(i){if(j8(this,Wi,new Map),i)for(let[l,s]of i)this.set(l,s)}get(i){if(o5(this,Wi).has(i))return o5(this,Wi).get(i);if(i.defaultValue!==void 0)return i.defaultValue;throw new Error("No value found for context")}set(i,l){o5(this,Wi).set(i,l)}};Wi=new WeakMap;var X8=new Set(["lazy","caseSensitive","path","id","index","children"]);function Q8(i){return X8.has(i)}var F8=new Set(["lazy","caseSensitive","path","id","index","unstable_middleware","children"]);function K8(i){return F8.has(i)}function J8(i){return i.index===!0}function ar(i,l,s=[],o={},c=!1){return i.map((d,h)=>{let g=[...s,String(h)],y=typeof d.id=="string"?d.id:g.join("-");if(Ee(d.index!==!0||!d.children,"Cannot specify children on an index route"),Ee(c||!o[y],`Found a route id collision on id "${y}".  Route id's must be globally unique within Data Router usages`),J8(d)){let p={...d,...l(d),id:y};return o[y]=p,p}else{let p={...d,...l(d),id:y,children:void 0};return o[y]=p,d.children&&(p.children=ar(d.children,l,g,o,c)),p}})}function e1(i,l,s="/"){return Ls(i,l,s,!1)}function Ls(i,l,s,o){let c=typeof l=="string"?i1(l):l,d=En(c.pathname||"/",s);if(d==null)return null;let h=s3(i);W8(h);let g=null;for(let y=0;g==null&&y<h.length;++y){let p=c6(d);g=s6(h[y],p,o)}return g}function P8(i,l){let{route:s,pathname:o,params:c}=i;return{id:s.id,pathname:o,params:c,data:l[s.id],handle:s.handle}}function s3(i,l=[],s=[],o=""){let c=(d,h,g)=>{let y={relativePath:g===void 0?d.path||"":g,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};y.relativePath.startsWith("/")&&(Ee(y.relativePath.startsWith(o),`Absolute route path "${y.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(o.length));let p=In([o,y.relativePath]),b=s.concat(y);d.children&&d.children.length>0&&(Ee(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),s3(d.children,l,b,p)),!(d.path==null&&!d.index)&&l.push({path:p,score:i6(p,d.index),routesMeta:b})};return i.forEach((d,h)=>{var g;if(d.path===""||!((g=d.path)!=null&&g.includes("?")))c(d,h);else for(let y of o3(d.path))c(d,h,y)}),l}function o3(i){let l=i.split("/");if(l.length===0)return[];let[s,...o]=l,c=s.endsWith("?"),d=s.replace(/\?$/,"");if(o.length===0)return c?[d,""]:[d];let h=o3(o.join("/")),g=[];return g.push(...h.map(y=>y===""?d:[d,y].join("/"))),c&&g.push(...h),g.map(y=>i.startsWith("/")&&y===""?"/":y)}function W8(i){i.sort((l,s)=>l.score!==s.score?s.score-l.score:r6(l.routesMeta.map(o=>o.childrenIndex),s.routesMeta.map(o=>o.childrenIndex)))}var I8=/^:[\w-]+$/,e6=3,t6=2,n6=1,a6=10,l6=-2,w0=i=>i==="*";function i6(i,l){let s=i.split("/"),o=s.length;return s.some(w0)&&(o+=l6),l&&(o+=t6),s.filter(c=>!w0(c)).reduce((c,d)=>c+(I8.test(d)?e6:d===""?n6:a6),o)}function r6(i,l){return i.length===l.length&&i.slice(0,-1).every((o,c)=>o===l[c])?i[i.length-1]-l[l.length-1]:0}function s6(i,l,s=!1){let{routesMeta:o}=i,c={},d="/",h=[];for(let g=0;g<o.length;++g){let y=o[g],p=g===o.length-1,b=d==="/"?l:l.slice(d.length)||"/",w=Hs({path:y.relativePath,caseSensitive:y.caseSensitive,end:p},b),E=y.route;if(!w&&p&&s&&!o[o.length-1].route.index&&(w=Hs({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},b)),!w)return null;Object.assign(c,w.params),h.push({params:c,pathname:In([d,w.pathname]),pathnameBase:f6(In([d,w.pathnameBase])),route:E}),w.pathnameBase!=="/"&&(d=In([d,w.pathnameBase]))}return h}function Hs(i,l){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[s,o]=o6(i.path,i.caseSensitive,i.end),c=l.match(s);if(!c)return null;let d=c[0],h=d.replace(/(.)\/+$/,"$1"),g=c.slice(1);return{params:o.reduce((p,{paramName:b,isOptional:w},E)=>{if(b==="*"){let N=g[E]||"";h=d.slice(0,d.length-N.length).replace(/(.)\/+$/,"$1")}const A=g[E];return w&&!A?p[b]=void 0:p[b]=(A||"").replace(/%2F/g,"/"),p},{}),pathname:d,pathnameBase:h,pattern:i}}function o6(i,l=!1,s=!0){ct(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let o=[],c="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,g,y)=>(o.push({paramName:g,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(o.push({paramName:"*"}),c+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?c+="\\/*$":i!==""&&i!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),o]}function c6(i){try{return i.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return ct(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),i}}function En(i,l){if(l==="/")return i;if(!i.toLowerCase().startsWith(l.toLowerCase()))return null;let s=l.endsWith("/")?l.length-1:l.length,o=i.charAt(s);return o&&o!=="/"?null:i.slice(s)||"/"}function u6({basename:i,pathname:l}){return l==="/"?i:In([i,l])}function d6(i,l="/"){let{pathname:s,search:o="",hash:c=""}=typeof i=="string"?i1(i):i;return{pathname:s?s.startsWith("/")?s:h6(s,l):l,search:y6(o),hash:p6(c)}}function h6(i,l){let s=l.replace(/\/+$/,"").split("/");return i.split("/").forEach(c=>{c===".."?s.length>1&&s.pop():c!=="."&&s.push(c)}),s.length>1?s.join("/"):"/"}function c5(i,l,s,o){return`Cannot include a '${i}' character in a manually specified \`to.${l}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function c3(i){return i.filter((l,s)=>s===0||l.route.path&&l.route.path.length>0)}function Vs(i){let l=c3(i);return l.map((s,o)=>o===l.length-1?s.pathname:s.pathnameBase)}function Bs(i,l,s,o=!1){let c;typeof i=="string"?c=i1(i):(c={...i},Ee(!c.pathname||!c.pathname.includes("?"),c5("?","pathname","search",c)),Ee(!c.pathname||!c.pathname.includes("#"),c5("#","pathname","hash",c)),Ee(!c.search||!c.search.includes("#"),c5("#","search","hash",c)));let d=i===""||c.pathname==="",h=d?"/":c.pathname,g;if(h==null)g=s;else{let w=l.length-1;if(!o&&h.startsWith("..")){let E=h.split("/");for(;E[0]==="..";)E.shift(),w-=1;c.pathname=E.join("/")}g=w>=0?l[w]:"/"}let y=d6(c,g),p=h&&h!=="/"&&h.endsWith("/"),b=(d||h===".")&&s.endsWith("/");return!y.pathname.endsWith("/")&&(p||b)&&(y.pathname+="/"),y}var In=i=>i.join("/").replace(/\/\/+/g,"/"),f6=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),y6=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,p6=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,Os=class{constructor(i,l,s,o=!1){this.status=i,this.statusText=l||"",this.internal=o,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function lr(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var u3=["POST","PUT","PATCH","DELETE"],v6=new Set(u3),g6=["GET",...u3],m6=new Set(g6),b6=new Set([301,302,303,307,308]),_6=new Set([307,308]),u5={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},C6={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Yi={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},x6=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,E5=i=>x6.test(i),w6=i=>({hasErrorBoundary:!!i.hasErrorBoundary}),d3="remix-router-transitions",h3=Symbol("ResetLoaderData");function k6(i){const l=i.window?i.window:typeof window<"u"?window:void 0,s=typeof l<"u"&&typeof l.document<"u"&&typeof l.document.createElement<"u";Ee(i.routes.length>0,"You must provide a non-empty routes array to createRouter");let o=i.hydrationRouteProperties||[],c=i.mapRouteProperties||w6,d={},h=ar(i.routes,c,void 0,d),g,y=i.basename||"/",p=i.dataStrategy||L6,b={unstable_middleware:!1,...i.future},w=null,E=new Set,A=null,N=null,F=null,J=i.hydrationData!=null,Z=e1(h,i.history.location,y),ye=!1,ee=null,be;if(Z==null&&!i.patchRoutesOnNavigation){let C=Sn(404,{pathname:i.history.location.pathname}),{matches:M,route:R}=O0(h);be=!0,Z=M,ee={[R.id]:C}}else if(Z&&!i.hydrationData&&la(Z,h,i.history.location.pathname).active&&(Z=null),Z)if(Z.some(C=>C.route.lazy))be=!1;else if(!Z.some(C=>C.route.loader))be=!0;else{let C=i.hydrationData?i.hydrationData.loaderData:null,M=i.hydrationData?i.hydrationData.errors:null;if(M){let R=Z.findIndex(Y=>M[Y.route.id]!==void 0);be=Z.slice(0,R+1).every(Y=>!b5(Y.route,C,M))}else be=Z.every(R=>!b5(R.route,C,M))}else{be=!1,Z=[];let C=la(null,h,i.history.location.pathname);C.active&&C.matches&&(ye=!0,Z=C.matches)}let W,T={historyAction:i.history.action,location:i.history.location,matches:Z,initialized:be,navigation:u5,restoreScrollPosition:i.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:i.hydrationData&&i.hydrationData.loaderData||{},actionData:i.hydrationData&&i.hydrationData.actionData||null,errors:i.hydrationData&&i.hydrationData.errors||ee,fetchers:new Map,blockers:new Map},He="POP",Ve=!1,X,ve=!1,Pe=new Map,Dt=null,vt=!1,De=!1,Le=new Set,j=new Map,oe=0,ae=-1,_e=new Map,x=new Set,B=new Map,ie=new Map,I=new Set,K=new Map,we,ge=null;function Mt(){if(w=i.history.listen(({action:C,location:M,delta:R})=>{if(we){we(),we=void 0;return}ct(K.size===0||R!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Y=br({currentLocation:T.location,nextLocation:M,historyAction:C});if(Y&&R!=null){let Q=new Promise(re=>{we=re});i.history.go(R*-1),Ct(Y,{state:"blocked",location:M,proceed(){Ct(Y,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),Q.then(()=>i.history.go(R))},reset(){let re=new Map(T.blockers);re.set(Y,Yi),Ce({blockers:re})}});return}return cn(C,M)}),s){B6(l,Pe);let C=()=>q6(l,Pe);l.addEventListener("pagehide",C),Dt=()=>l.removeEventListener("pagehide",C)}return T.initialized||cn("POP",T.location,{initialHydration:!0}),W}function $e(){w&&w(),Dt&&Dt(),E.clear(),X&&X.abort(),T.fetchers.forEach((C,M)=>Kl(M)),T.blockers.forEach((C,M)=>zn(M))}function nt(C){return E.add(C),()=>E.delete(C)}function Ce(C,M={}){C.matches&&(C.matches=C.matches.map(Q=>{let re=d[Q.route.id],ce=Q.route;return ce.element!==re.element||ce.errorElement!==re.errorElement||ce.hydrateFallbackElement!==re.hydrateFallbackElement?{...Q,route:re}:Q})),T={...T,...C};let R=[],Y=[];T.fetchers.forEach((Q,re)=>{Q.state==="idle"&&(I.has(re)?R.push(re):Y.push(re))}),I.forEach(Q=>{!T.fetchers.has(Q)&&!j.has(Q)&&R.push(Q)}),[...E].forEach(Q=>Q(T,{deletedFetchers:R,viewTransitionOpts:M.viewTransitionOpts,flushSync:M.flushSync===!0})),R.forEach(Q=>Kl(Q)),Y.forEach(Q=>T.fetchers.delete(Q))}function Lt(C,M,{flushSync:R}={}){var te,P;let Y=T.actionData!=null&&T.navigation.formMethod!=null&&Gt(T.navigation.formMethod)&&T.navigation.state==="loading"&&((te=C.state)==null?void 0:te._isRedirect)!==!0,Q;M.actionData?Object.keys(M.actionData).length>0?Q=M.actionData:Q=null:Y?Q=T.actionData:Q=null;let re=M.loaderData?R0(T.loaderData,M.loaderData,M.matches||[],M.errors):T.loaderData,ce=T.blockers;ce.size>0&&(ce=new Map(ce),ce.forEach((pe,qe)=>ce.set(qe,Yi)));let le=vt?!1:Yn(C,M.matches||T.matches),de=Ve===!0||T.navigation.formMethod!=null&&Gt(T.navigation.formMethod)&&((P=C.state)==null?void 0:P._isRedirect)!==!0;g&&(h=g,g=void 0),vt||He==="POP"||(He==="PUSH"?i.history.push(C,C.state):He==="REPLACE"&&i.history.replace(C,C.state));let ue;if(He==="POP"){let pe=Pe.get(T.location.pathname);pe&&pe.has(C.pathname)?ue={currentLocation:T.location,nextLocation:C}:Pe.has(C.pathname)&&(ue={currentLocation:C,nextLocation:T.location})}else if(ve){let pe=Pe.get(T.location.pathname);pe?pe.add(C.pathname):(pe=new Set([C.pathname]),Pe.set(T.location.pathname,pe)),ue={currentLocation:T.location,nextLocation:C}}Ce({...M,actionData:Q,loaderData:re,historyAction:He,location:C,initialized:!0,navigation:u5,revalidation:"idle",restoreScrollPosition:le,preventScrollReset:de,blockers:ce},{viewTransitionOpts:ue,flushSync:R===!0}),He="POP",Ve=!1,ve=!1,vt=!1,De=!1,ge==null||ge.resolve(),ge=null}async function Ea(C,M){if(typeof C=="number"){i.history.go(C);return}let R=m5(T.location,T.matches,y,C,M==null?void 0:M.fromRouteId,M==null?void 0:M.relative),{path:Y,submission:Q,error:re}=k0(!1,R,M),ce=T.location,le=nr(T.location,Y,M&&M.state);le={...le,...i.history.encodeLocation(le)};let de=M&&M.replace!=null?M.replace:void 0,ue="PUSH";de===!0?ue="REPLACE":de===!1||Q!=null&&Gt(Q.formMethod)&&Q.formAction===T.location.pathname+T.location.search&&(ue="REPLACE");let te=M&&"preventScrollReset"in M?M.preventScrollReset===!0:void 0,P=(M&&M.flushSync)===!0,pe=br({currentLocation:ce,nextLocation:le,historyAction:ue});if(pe){Ct(pe,{state:"blocked",location:le,proceed(){Ct(pe,{state:"proceeding",proceed:void 0,reset:void 0,location:le}),Ea(C,M)},reset(){let qe=new Map(T.blockers);qe.set(pe,Yi),Ce({blockers:qe})}});return}await cn(ue,le,{submission:Q,pendingError:re,preventScrollReset:te,replace:M&&M.replace,enableViewTransition:M&&M.viewTransition,flushSync:P})}function jn(){ge||(ge=j6()),Fl(),Ce({revalidation:"loading"});let C=ge.promise;return T.navigation.state==="submitting"?C:T.navigation.state==="idle"?(cn(T.historyAction,T.location,{startUninterruptedRevalidation:!0}),C):(cn(He||T.historyAction,T.navigation.location,{overrideNavigation:T.navigation,enableViewTransition:ve===!0}),C)}async function cn(C,M,R){X&&X.abort(),X=null,He=C,vt=(R&&R.startUninterruptedRevalidation)===!0,K1(T.location,T.matches),Ve=(R&&R.preventScrollReset)===!0,ve=(R&&R.enableViewTransition)===!0;let Y=g||h,Q=R&&R.overrideNavigation,re=R!=null&&R.initialHydration&&T.matches&&T.matches.length>0&&!ye?T.matches:e1(Y,M,y),ce=(R&&R.flushSync)===!0;if(re&&T.initialized&&!De&&O6(T.location,M)&&!(R&&R.submission&&Gt(R.submission.formMethod))){Lt(M,{matches:re},{flushSync:ce});return}let le=la(re,Y,M.pathname);if(le.active&&le.matches&&(re=le.matches),!re){let{error:At,notFoundMatches:Fe,route:Be}=Jl(M.pathname);Lt(M,{matches:Fe,loaderData:{},errors:{[Be.id]:At}},{flushSync:ce});return}X=new AbortController;let de=$l(i.history,M,X.signal,R&&R.submission),ue=new x0(i.unstable_getContext?await i.unstable_getContext():void 0),te;if(R&&R.pendingError)te=[O1(re).route.id,{type:"error",error:R.pendingError}];else if(R&&R.submission&&Gt(R.submission.formMethod)){let At=await X1(de,M,R.submission,re,ue,le.active,R&&R.initialHydration===!0,{replace:R.replace,flushSync:ce});if(At.shortCircuited)return;if(At.pendingActionResult){let[Fe,Be]=At.pendingActionResult;if(tn(Be)&&lr(Be.error)&&Be.error.status===404){X=null,Lt(M,{matches:At.matches,loaderData:{},errors:{[Fe]:Be.error}});return}}re=At.matches||re,te=At.pendingActionResult,Q=d5(M,R.submission),ce=!1,le.active=!1,de=$l(i.history,de.url,de.signal)}let{shortCircuited:P,matches:pe,loaderData:qe,errors:xt}=await Da(de,M,re,ue,le.active,Q,R&&R.submission,R&&R.fetcherSubmission,R&&R.replace,R&&R.initialHydration===!0,ce,te);P||(X=null,Lt(M,{matches:pe||re,...H0(te),loaderData:qe,errors:xt}))}async function X1(C,M,R,Y,Q,re,ce,le={}){Fl();let de=N6(M,R);if(Ce({navigation:de},{flushSync:le.flushSync===!0}),re){let P=await Gn(Y,M.pathname,C.signal);if(P.type==="aborted")return{shortCircuited:!0};if(P.type==="error"){let pe=O1(P.partialMatches).route.id;return{matches:P.partialMatches,pendingActionResult:[pe,{type:"error",error:P.error}]}}else if(P.matches)Y=P.matches;else{let{notFoundMatches:pe,error:qe,route:xt}=Jl(M.pathname);return{matches:pe,pendingActionResult:[xt.id,{type:"error",error:qe}]}}}let ue,te=As(Y,M);if(!te.route.action&&!te.route.lazy)ue={type:"error",error:Sn(405,{method:C.method,pathname:M.pathname,routeId:te.route.id})};else{let P=Nl(c,d,C,Y,te,ce?[]:o,Q),pe=await u1(C,P,Q,null);if(ue=pe[te.route.id],!ue){for(let qe of Y)if(pe[qe.route.id]){ue=pe[qe.route.id];break}}if(C.signal.aborted)return{shortCircuited:!0}}if($1(ue)){let P;return le&&le.replace!=null?P=le.replace:P=A0(ue.response.headers.get("Location"),new URL(C.url),y)===T.location.pathname+T.location.search,await aa(C,ue,!0,{submission:R,replace:P}),{shortCircuited:!0}}if(tn(ue)){let P=O1(Y,te.route.id);return(le&&le.replace)!==!0&&(He="PUSH"),{matches:Y,pendingActionResult:[P.route.id,ue,te.route.id]}}return{matches:Y,pendingActionResult:[te.route.id,ue]}}async function Da(C,M,R,Y,Q,re,ce,le,de,ue,te,P){let pe=re||d5(M,ce),qe=ce||le||U0(pe),xt=!vt&&!ue;if(Q){if(xt){let Ge=Q1(P);Ce({navigation:pe,...Ge!==void 0?{actionData:Ge}:{}},{flushSync:te})}let Ae=await Gn(R,M.pathname,C.signal);if(Ae.type==="aborted")return{shortCircuited:!0};if(Ae.type==="error"){let Ge=O1(Ae.partialMatches).route.id;return{matches:Ae.partialMatches,loaderData:{},errors:{[Ge]:Ae.error}}}else if(Ae.matches)R=Ae.matches;else{let{error:Ge,notFoundMatches:J1,route:La}=Jl(M.pathname);return{matches:J1,loaderData:{},errors:{[La.id]:Ge}}}}let At=g||h,{dsMatches:Fe,revalidatingFetchers:Be}=S0(C,Y,c,d,i.history,T,R,qe,M,ue?[]:o,ue===!0,De,Le,I,B,x,At,y,i.patchRoutesOnNavigation!=null,P);if(ae=++oe,!i.dataStrategy&&!Fe.some(Ae=>Ae.shouldLoad)&&Be.length===0){let Ae=Ma();return Lt(M,{matches:R,loaderData:{},errors:P&&tn(P[1])?{[P[0]]:P[1].error}:null,...H0(P),...Ae?{fetchers:new Map(T.fetchers)}:{}},{flushSync:te}),{shortCircuited:!0}}if(xt){let Ae={};if(!Q){Ae.navigation=pe;let Ge=Q1(P);Ge!==void 0&&(Ae.actionData=Ge)}Be.length>0&&(Ae.fetchers=F1(Be)),Ce(Ae,{flushSync:te})}Be.forEach(Ae=>{Zn(Ae.key),Ae.controller&&j.set(Ae.key,Ae.controller)});let Tn=()=>Be.forEach(Ae=>Zn(Ae.key));X&&X.signal.addEventListener("abort",Tn);let{loaderResults:Kt,fetcherResults:Vt}=await Ft(Fe,Be,C,Y);if(C.signal.aborted)return{shortCircuited:!0};X&&X.signal.removeEventListener("abort",Tn),Be.forEach(Ae=>j.delete(Ae.key));let $t=Es(Kt);if($t)return await aa(C,$t.result,!0,{replace:de}),{shortCircuited:!0};if($t=Es(Vt),$t)return x.add($t.key),await aa(C,$t.result,!0,{replace:de}),{shortCircuited:!0};let{loaderData:Xn,errors:We}=T0(T,R,Kt,P,Be,Vt);ue&&T.errors&&(We={...T.errors,...We});let Qn=Ma(),f1=Ot(ae),dn=Qn||f1||Be.length>0;return{matches:R,loaderData:Xn,errors:We,...dn?{fetchers:new Map(T.fetchers)}:{}}}function Q1(C){if(C&&!tn(C[1]))return{[C[0]]:C[1].data};if(T.actionData)return Object.keys(T.actionData).length===0?null:T.actionData}function F1(C){return C.forEach(M=>{let R=T.fetchers.get(M.key),Y=Gi(void 0,R?R.data:void 0);T.fetchers.set(M.key,Y)}),new Map(T.fetchers)}async function Gl(C,M,R,Y){Zn(C);let Q=(Y&&Y.flushSync)===!0,re=g||h,ce=m5(T.location,T.matches,y,R,M,Y==null?void 0:Y.relative),le=e1(re,ce,y),de=la(le,re,ce);if(de.active&&de.matches&&(le=de.matches),!le){un(C,M,Sn(404,{pathname:ce}),{flushSync:Q});return}let{path:ue,submission:te,error:P}=k0(!0,ce,Y);if(P){un(C,M,P,{flushSync:Q});return}let pe=new x0(i.unstable_getContext?await i.unstable_getContext():void 0),qe=(Y&&Y.preventScrollReset)===!0;if(te&&Gt(te.formMethod)){await Xl(C,M,ue,le,pe,de.active,Q,qe,te);return}B.set(C,{routeId:M,path:ue}),await Ql(C,M,ue,le,pe,de.active,Q,qe,te)}async function Xl(C,M,R,Y,Q,re,ce,le,de){Fl(),B.delete(C);let ue=T.fetchers.get(C);An(C,V6(de,ue),{flushSync:ce});let te=new AbortController,P=$l(i.history,R,te.signal,de);if(re){let at=await Gn(Y,new URL(P.url).pathname,P.signal,C);if(at.type==="aborted")return;if(at.type==="error"){un(C,M,at.error,{flushSync:ce});return}else if(at.matches)Y=at.matches;else{un(C,M,Sn(404,{pathname:R}),{flushSync:ce});return}}let pe=As(Y,R);if(!pe.route.action&&!pe.route.lazy){let at=Sn(405,{method:de.formMethod,pathname:R,routeId:M});un(C,M,at,{flushSync:ce});return}j.set(C,te);let qe=oe,xt=Nl(c,d,P,Y,pe,o,Q),Fe=(await u1(P,xt,Q,C))[pe.route.id];if(P.signal.aborted){j.get(C)===te&&j.delete(C);return}if(I.has(C)){if($1(Fe)||tn(Fe)){An(C,Ia(void 0));return}}else{if($1(Fe))if(j.delete(C),ae>qe){An(C,Ia(void 0));return}else return x.add(C),An(C,Gi(de)),aa(P,Fe,!1,{fetcherSubmission:de,preventScrollReset:le});if(tn(Fe)){un(C,M,Fe.error);return}}let Be=T.navigation.location||T.location,Tn=$l(i.history,Be,te.signal),Kt=g||h,Vt=T.navigation.state!=="idle"?e1(Kt,T.navigation.location,y):T.matches;Ee(Vt,"Didn't find any matches after fetcher action");let $t=++oe;_e.set(C,$t);let Xn=Gi(de,Fe.data);T.fetchers.set(C,Xn);let{dsMatches:We,revalidatingFetchers:Qn}=S0(Tn,Q,c,d,i.history,T,Vt,de,Be,o,!1,De,Le,I,B,x,Kt,y,i.patchRoutesOnNavigation!=null,[pe.route.id,Fe]);Qn.filter(at=>at.key!==C).forEach(at=>{let P1=at.key,y1=T.fetchers.get(P1),W1=Gi(void 0,y1?y1.data:void 0);T.fetchers.set(P1,W1),Zn(P1),at.controller&&j.set(P1,at.controller)}),Ce({fetchers:new Map(T.fetchers)});let f1=()=>Qn.forEach(at=>Zn(at.key));te.signal.addEventListener("abort",f1);let{loaderResults:dn,fetcherResults:Ae}=await Ft(We,Qn,Tn,Q);if(te.signal.aborted)return;if(te.signal.removeEventListener("abort",f1),_e.delete(C),j.delete(C),Qn.forEach(at=>j.delete(at.key)),T.fetchers.has(C)){let at=Ia(Fe.data);T.fetchers.set(C,at)}let Ge=Es(dn);if(Ge)return aa(Tn,Ge.result,!1,{preventScrollReset:le});if(Ge=Es(Ae),Ge)return x.add(Ge.key),aa(Tn,Ge.result,!1,{preventScrollReset:le});let{loaderData:J1,errors:La}=T0(T,Vt,dn,void 0,Qn,Ae);Ot($t),T.navigation.state==="loading"&&$t>ae?(Ee(He,"Expected pending action"),X&&X.abort(),Lt(T.navigation.location,{matches:Vt,loaderData:J1,errors:La,fetchers:new Map(T.fetchers)})):(Ce({errors:La,loaderData:R0(T.loaderData,J1,Vt,La),fetchers:new Map(T.fetchers)}),De=!1)}async function Ql(C,M,R,Y,Q,re,ce,le,de){let ue=T.fetchers.get(C);An(C,Gi(de,ue?ue.data:void 0),{flushSync:ce});let te=new AbortController,P=$l(i.history,R,te.signal);if(re){let Be=await Gn(Y,new URL(P.url).pathname,P.signal,C);if(Be.type==="aborted")return;if(Be.type==="error"){un(C,M,Be.error,{flushSync:ce});return}else if(Be.matches)Y=Be.matches;else{un(C,M,Sn(404,{pathname:R}),{flushSync:ce});return}}let pe=As(Y,R);j.set(C,te);let qe=oe,xt=Nl(c,d,P,Y,pe,o,Q),Fe=(await u1(P,xt,Q,C))[pe.route.id];if(j.get(C)===te&&j.delete(C),!P.signal.aborted){if(I.has(C)){An(C,Ia(void 0));return}if($1(Fe))if(ae>qe){An(C,Ia(void 0));return}else{x.add(C),await aa(P,Fe,!1,{preventScrollReset:le});return}if(tn(Fe)){un(C,M,Fe.error);return}An(C,Ia(Fe.data))}}async function aa(C,M,R,{submission:Y,fetcherSubmission:Q,preventScrollReset:re,replace:ce}={}){M.response.headers.has("X-Remix-Revalidate")&&(De=!0);let le=M.response.headers.get("Location");Ee(le,"Expected a Location header on the redirect Response"),le=A0(le,new URL(C.url),y);let de=nr(T.location,le,{_isRedirect:!0});if(s){let xt=!1;if(M.response.headers.has("X-Remix-Reload-Document"))xt=!0;else if(E5(le)){const At=r3(le,!0);xt=At.origin!==l.location.origin||En(At.pathname,y)==null}if(xt){ce?l.location.replace(le):l.location.assign(le);return}}X=null;let ue=ce===!0||M.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:te,formAction:P,formEncType:pe}=T.navigation;!Y&&!Q&&te&&P&&pe&&(Y=U0(T.navigation));let qe=Y||Q;if(_6.has(M.response.status)&&qe&&Gt(qe.formMethod))await cn(ue,de,{submission:{...qe,formAction:le},preventScrollReset:re||Ve,enableViewTransition:R?ve:void 0});else{let xt=d5(de,Y);await cn(ue,de,{overrideNavigation:xt,fetcherSubmission:Q,preventScrollReset:re||Ve,enableViewTransition:R?ve:void 0})}}async function u1(C,M,R,Y){let Q,re={};try{Q=await A6(p,C,M,Y,R,!1)}catch(ce){return M.filter(le=>le.shouldLoad).forEach(le=>{re[le.route.id]={type:"error",error:ce}}),re}if(C.signal.aborted)return re;for(let[ce,le]of Object.entries(Q))if($6(le)){let de=le.result;re[ce]={type:"redirect",response:R6(de,C,ce,M,y)}}else re[ce]=await T6(le);return re}async function Ft(C,M,R,Y){let Q=u1(R,C,Y,null),re=Promise.all(M.map(async de=>{if(de.matches&&de.match&&de.request&&de.controller){let te=(await u1(de.request,de.matches,Y,de.key))[de.match.route.id];return{[de.key]:te}}else return Promise.resolve({[de.key]:{type:"error",error:Sn(404,{pathname:de.path})}})})),ce=await Q,le=(await re).reduce((de,ue)=>Object.assign(de,ue),{});return{loaderResults:ce,fetcherResults:le}}function Fl(){De=!0,B.forEach((C,M)=>{j.has(M)&&Le.add(M),Zn(M)})}function An(C,M,R={}){T.fetchers.set(C,M),Ce({fetchers:new Map(T.fetchers)},{flushSync:(R&&R.flushSync)===!0})}function un(C,M,R,Y={}){let Q=O1(T.matches,M);Kl(C),Ce({errors:{[Q.route.id]:R},fetchers:new Map(T.fetchers)},{flushSync:(Y&&Y.flushSync)===!0})}function d1(C){return ie.set(C,(ie.get(C)||0)+1),I.has(C)&&I.delete(C),T.fetchers.get(C)||C6}function Kl(C){let M=T.fetchers.get(C);j.has(C)&&!(M&&M.state==="loading"&&_e.has(C))&&Zn(C),B.delete(C),_e.delete(C),x.delete(C),I.delete(C),Le.delete(C),T.fetchers.delete(C)}function gr(C){let M=(ie.get(C)||0)-1;M<=0?(ie.delete(C),I.add(C)):ie.set(C,M),Ce({fetchers:new Map(T.fetchers)})}function Zn(C){let M=j.get(C);M&&(M.abort(),j.delete(C))}function mr(C){for(let M of C){let R=d1(M),Y=Ia(R.data);T.fetchers.set(M,Y)}}function Ma(){let C=[],M=!1;for(let R of x){let Y=T.fetchers.get(R);Ee(Y,`Expected fetcher: ${R}`),Y.state==="loading"&&(x.delete(R),C.push(R),M=!0)}return mr(C),M}function Ot(C){let M=[];for(let[R,Y]of _e)if(Y<C){let Q=T.fetchers.get(R);Ee(Q,`Expected fetcher: ${R}`),Q.state==="loading"&&(Zn(R),_e.delete(R),M.push(R))}return mr(M),M.length>0}function Js(C,M){let R=T.blockers.get(C)||Yi;return K.get(C)!==M&&K.set(C,M),R}function zn(C){T.blockers.delete(C),K.delete(C)}function Ct(C,M){let R=T.blockers.get(C)||Yi;Ee(R.state==="unblocked"&&M.state==="blocked"||R.state==="blocked"&&M.state==="blocked"||R.state==="blocked"&&M.state==="proceeding"||R.state==="blocked"&&M.state==="unblocked"||R.state==="proceeding"&&M.state==="unblocked",`Invalid blocker state transition: ${R.state} -> ${M.state}`);let Y=new Map(T.blockers);Y.set(C,M),Ce({blockers:Y})}function br({currentLocation:C,nextLocation:M,historyAction:R}){if(K.size===0)return;K.size>1&&ct(!1,"A router only supports one blocker at a time");let Y=Array.from(K.entries()),[Q,re]=Y[Y.length-1],ce=T.blockers.get(Q);if(!(ce&&ce.state==="proceeding")&&re({currentLocation:C,nextLocation:M,historyAction:R}))return Q}function Jl(C){let M=Sn(404,{pathname:C}),R=g||h,{matches:Y,route:Q}=O0(R);return{notFoundMatches:Y,route:Q,error:M}}function Ps(C,M,R){if(A=C,F=M,N=R||null,!J&&T.navigation===u5){J=!0;let Y=Yn(T.location,T.matches);Y!=null&&Ce({restoreScrollPosition:Y})}return()=>{A=null,F=null,N=null}}function h1(C,M){return N&&N(C,M.map(Y=>P8(Y,T.loaderData)))||C.key}function K1(C,M){if(A&&F){let R=h1(C,M);A[R]=F()}}function Yn(C,M){if(A){let R=h1(C,M),Y=A[R];if(typeof Y=="number")return Y}return null}function la(C,M,R){if(i.patchRoutesOnNavigation)if(C){if(Object.keys(C[0].params).length>0)return{active:!0,matches:Ls(M,R,y,!0)}}else return{active:!0,matches:Ls(M,R,y,!0)||[]};return{active:!1,matches:null}}async function Gn(C,M,R,Y){if(!i.patchRoutesOnNavigation)return{type:"success",matches:C};let Q=C;for(;;){let re=g==null,ce=g||h,le=d;try{await i.patchRoutesOnNavigation({signal:R,path:M,matches:Q,fetcherKey:Y,patch:(te,P)=>{R.aborted||E0(te,P,ce,le,c,!1)}})}catch(te){return{type:"error",error:te,partialMatches:Q}}finally{re&&!R.aborted&&(h=[...h])}if(R.aborted)return{type:"aborted"};let de=e1(ce,M,y);if(de)return{type:"success",matches:de};let ue=Ls(ce,M,y,!0);if(!ue||Q.length===ue.length&&Q.every((te,P)=>te.route.id===ue[P].route.id))return{type:"success",matches:null};Q=ue}}function Ws(C){d={},g=ar(C,c,void 0,d)}function _r(C,M,R=!1){let Y=g==null;E0(C,M,g||h,d,c,R),Y&&(h=[...h],Ce({}))}return W={get basename(){return y},get future(){return b},get state(){return T},get routes(){return h},get window(){return l},initialize:Mt,subscribe:nt,enableScrollRestoration:Ps,navigate:Ea,fetch:Gl,revalidate:jn,createHref:C=>i.history.createHref(C),encodeLocation:C=>i.history.encodeLocation(C),getFetcher:d1,deleteFetcher:gr,dispose:$e,getBlocker:Js,deleteBlocker:zn,patchRoutes:_r,_internalFetchControllers:j,_internalSetRoutes:Ws,_internalSetStateDoNotUseOrYouWillBreakYourApp(C){Ce(C)}},W}function S6(i){return i!=null&&("formData"in i&&i.formData!=null||"body"in i&&i.body!==void 0)}function m5(i,l,s,o,c,d){let h,g;if(c){h=[];for(let p of l)if(h.push(p),p.route.id===c){g=p;break}}else h=l,g=l[l.length-1];let y=Bs(o||".",Vs(h),En(i.pathname,s)||i.pathname,d==="path");if(o==null&&(y.search=i.search,y.hash=i.hash),(o==null||o===""||o===".")&&g){let p=D5(y.search);if(g.route.index&&!p)y.search=y.search?y.search.replace(/^\?/,"?index&"):"?index";else if(!g.route.index&&p){let b=new URLSearchParams(y.search),w=b.getAll("index");b.delete("index"),w.filter(A=>A).forEach(A=>b.append("index",A));let E=b.toString();y.search=E?`?${E}`:""}}return s!=="/"&&(y.pathname=u6({basename:s,pathname:y.pathname})),l1(y)}function k0(i,l,s){if(!s||!S6(s))return{path:l};if(s.formMethod&&!U6(s.formMethod))return{path:l,error:Sn(405,{method:s.formMethod})};let o=()=>({path:l,error:Sn(400,{type:"invalid-body"})}),d=(s.formMethod||"get").toUpperCase(),h=m3(l);if(s.body!==void 0){if(s.formEncType==="text/plain"){if(!Gt(d))return o();let w=typeof s.body=="string"?s.body:s.body instanceof FormData||s.body instanceof URLSearchParams?Array.from(s.body.entries()).reduce((E,[A,N])=>`${E}${A}=${N}
`,""):String(s.body);return{path:l,submission:{formMethod:d,formAction:h,formEncType:s.formEncType,formData:void 0,json:void 0,text:w}}}else if(s.formEncType==="application/json"){if(!Gt(d))return o();try{let w=typeof s.body=="string"?JSON.parse(s.body):s.body;return{path:l,submission:{formMethod:d,formAction:h,formEncType:s.formEncType,formData:void 0,json:w,text:void 0}}}catch{return o()}}}Ee(typeof FormData=="function","FormData is not available in this environment");let g,y;if(s.formData)g=C5(s.formData),y=s.formData;else if(s.body instanceof FormData)g=C5(s.body),y=s.body;else if(s.body instanceof URLSearchParams)g=s.body,y=z0(g);else if(s.body==null)g=new URLSearchParams,y=new FormData;else try{g=new URLSearchParams(s.body),y=z0(g)}catch{return o()}let p={formMethod:d,formAction:h,formEncType:s&&s.formEncType||"application/x-www-form-urlencoded",formData:y,json:void 0,text:void 0};if(Gt(p.formMethod))return{path:l,submission:p};let b=i1(l);return i&&b.search&&D5(b.search)&&g.append("index",""),b.search=`?${g}`,{path:l1(b),submission:p}}function S0(i,l,s,o,c,d,h,g,y,p,b,w,E,A,N,F,J,Z,ye,ee){var vt;let be=ee?tn(ee[1])?ee[1].error:ee[1].data:void 0,W=c.createURL(d.location),T=c.createURL(y),He;if(b&&d.errors){let De=Object.keys(d.errors)[0];He=h.findIndex(Le=>Le.route.id===De)}else if(ee&&tn(ee[1])){let De=ee[0];He=h.findIndex(Le=>Le.route.id===De)-1}let Ve=ee?ee[1].statusCode:void 0,X=Ve&&Ve>=400,ve={currentUrl:W,currentParams:((vt=d.matches[0])==null?void 0:vt.params)||{},nextUrl:T,nextParams:h[0].params,...g,actionResult:be,actionStatus:Ve},Pe=h.map((De,Le)=>{let{route:j}=De,oe=null;if(He!=null&&Le>He?oe=!1:j.lazy?oe=!0:j.loader==null?oe=!1:b?oe=b5(j,d.loaderData,d.errors):E6(d.loaderData,d.matches[Le],De)&&(oe=!0),oe!==null)return _5(s,o,i,De,p,l,oe);let ae=X?!1:w||W.pathname+W.search===T.pathname+T.search||W.search!==T.search||D6(d.matches[Le],De),_e={...ve,defaultShouldRevalidate:ae},x=$s(De,_e);return _5(s,o,i,De,p,l,x,_e)}),Dt=[];return N.forEach((De,Le)=>{if(b||!h.some(I=>I.route.id===De.routeId)||A.has(Le))return;let j=d.fetchers.get(Le),oe=j&&j.state!=="idle"&&j.data===void 0,ae=e1(J,De.path,Z);if(!ae){if(ye&&oe)return;Dt.push({key:Le,routeId:De.routeId,path:De.path,matches:null,match:null,request:null,controller:null});return}if(F.has(Le))return;let _e=As(ae,De.path),x=new AbortController,B=$l(c,De.path,x.signal),ie=null;if(E.has(Le))E.delete(Le),ie=Nl(s,o,B,ae,_e,p,l);else if(oe)w&&(ie=Nl(s,o,B,ae,_e,p,l));else{let I={...ve,defaultShouldRevalidate:X?!1:w};$s(_e,I)&&(ie=Nl(s,o,B,ae,_e,p,l,I))}ie&&Dt.push({key:Le,routeId:De.routeId,path:De.path,matches:ie,match:_e,request:B,controller:x})}),{dsMatches:Pe,revalidatingFetchers:Dt}}function b5(i,l,s){if(i.lazy)return!0;if(!i.loader)return!1;let o=l!=null&&i.id in l,c=s!=null&&s[i.id]!==void 0;return!o&&c?!1:typeof i.loader=="function"&&i.loader.hydrate===!0?!0:!o&&!c}function E6(i,l,s){let o=!l||s.route.id!==l.route.id,c=!i.hasOwnProperty(s.route.id);return o||c}function D6(i,l){let s=i.route.path;return i.pathname!==l.pathname||s!=null&&s.endsWith("*")&&i.params["*"]!==l.params["*"]}function $s(i,l){if(i.route.shouldRevalidate){let s=i.route.shouldRevalidate(l);if(typeof s=="boolean")return s}return l.defaultShouldRevalidate}function E0(i,l,s,o,c,d){let h;if(i){let p=o[i];Ee(p,`No route found to patch children into: routeId = ${i}`),p.children||(p.children=[]),h=p.children}else h=s;let g=[],y=[];if(l.forEach(p=>{let b=h.find(w=>f3(p,w));b?y.push({existingRoute:b,newRoute:p}):g.push(p)}),g.length>0){let p=ar(g,c,[i||"_","patch",String((h==null?void 0:h.length)||"0")],o);h.push(...p)}if(d&&y.length>0)for(let p=0;p<y.length;p++){let{existingRoute:b,newRoute:w}=y[p],E=b,[A]=ar([w],c,[],{},!0);Object.assign(E,{element:A.element?A.element:E.element,errorElement:A.errorElement?A.errorElement:E.errorElement,hydrateFallbackElement:A.hydrateFallbackElement?A.hydrateFallbackElement:E.hydrateFallbackElement})}}function f3(i,l){return"id"in i&&"id"in l&&i.id===l.id?!0:i.index===l.index&&i.path===l.path&&i.caseSensitive===l.caseSensitive?(!i.children||i.children.length===0)&&(!l.children||l.children.length===0)?!0:i.children.every((s,o)=>{var c;return(c=l.children)==null?void 0:c.some(d=>f3(s,d))}):!1}var D0=new WeakMap,y3=({key:i,route:l,manifest:s,mapRouteProperties:o})=>{let c=s[l.id];if(Ee(c,"No route found in manifest"),!c.lazy||typeof c.lazy!="object")return;let d=c.lazy[i];if(!d)return;let h=D0.get(c);h||(h={},D0.set(c,h));let g=h[i];if(g)return g;let y=(async()=>{let p=Q8(i),w=c[i]!==void 0&&i!=="hasErrorBoundary";if(p)ct(!p,"Route property "+i+" is not a supported lazy route property. This property will be ignored."),h[i]=Promise.resolve();else if(w)ct(!1,`Route "${c.id}" has a static property "${i}" defined. The lazy property will be ignored.`);else{let E=await d();E!=null&&(Object.assign(c,{[i]:E}),Object.assign(c,o(c)))}typeof c.lazy=="object"&&(c.lazy[i]=void 0,Object.values(c.lazy).every(E=>E===void 0)&&(c.lazy=void 0))})();return h[i]=y,y},M0=new WeakMap;function M6(i,l,s,o,c){let d=s[i.id];if(Ee(d,"No route found in manifest"),!i.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof i.lazy=="function"){let b=M0.get(d);if(b)return{lazyRoutePromise:b,lazyHandlerPromise:b};let w=(async()=>{Ee(typeof i.lazy=="function","No lazy route function found");let E=await i.lazy(),A={};for(let N in E){let F=E[N];if(F===void 0)continue;let J=K8(N),ye=d[N]!==void 0&&N!=="hasErrorBoundary";J?ct(!J,"Route property "+N+" is not a supported property to be returned from a lazy route function. This property will be ignored."):ye?ct(!ye,`Route "${d.id}" has a static property "${N}" defined but its lazy function is also returning a value for this property. The lazy route property "${N}" will be ignored.`):A[N]=F}Object.assign(d,A),Object.assign(d,{...o(d),lazy:void 0})})();return M0.set(d,w),w.catch(()=>{}),{lazyRoutePromise:w,lazyHandlerPromise:w}}let h=Object.keys(i.lazy),g=[],y;for(let b of h){if(c&&c.includes(b))continue;let w=y3({key:b,route:i,manifest:s,mapRouteProperties:o});w&&(g.push(w),b===l&&(y=w))}let p=g.length>0?Promise.all(g).then(()=>{}):void 0;return p==null||p.catch(()=>{}),y==null||y.catch(()=>{}),{lazyRoutePromise:p,lazyHandlerPromise:y}}async function L0(i){let l=i.matches.filter(c=>c.shouldLoad),s={};return(await Promise.all(l.map(c=>c.resolve()))).forEach((c,d)=>{s[l[d].route.id]=c}),s}async function L6(i){return i.matches.some(l=>l.route.unstable_middleware)?p3(i,!1,()=>L0(i),(l,s)=>({[s]:{type:"error",result:l}})):L0(i)}async function p3(i,l,s,o){let{matches:c,request:d,params:h,context:g}=i,y={handlerResult:void 0};try{let p=c.flatMap(w=>w.route.unstable_middleware?w.route.unstable_middleware.map(E=>[w.route.id,E]):[]),b=await v3({request:d,params:h,context:g},p,l,y,s);return l?b:y.handlerResult}catch(p){if(!y.middlewareError)throw p;let b=await o(y.middlewareError.error,y.middlewareError.routeId);return y.handlerResult?Object.assign(y.handlerResult,b):b}}async function v3(i,l,s,o,c,d=0){let{request:h}=i;if(h.signal.aborted)throw h.signal.reason?h.signal.reason:new Error(`Request aborted without an \`AbortSignal.reason\`: ${h.method} ${h.url}`);let g=l[d];if(!g)return o.handlerResult=await c(),o.handlerResult;let[y,p]=g,b=!1,w,E=async()=>{if(b)throw new Error("You may only call `next()` once per middleware");b=!0,await v3(i,l,s,o,c,d+1)};try{let A=await p({request:i.request,params:i.params,context:i.context},E);return b?A===void 0?w:A:E()}catch(A){throw o.middlewareError?o.middlewareError.error!==A&&(o.middlewareError={routeId:y,error:A}):o.middlewareError={routeId:y,error:A},A}}function g3(i,l,s,o,c){let d=y3({key:"unstable_middleware",route:o.route,manifest:l,mapRouteProperties:i}),h=M6(o.route,Gt(s.method)?"action":"loader",l,i,c);return{middleware:d,route:h.lazyRoutePromise,handler:h.lazyHandlerPromise}}function _5(i,l,s,o,c,d,h,g=null){let y=!1,p=g3(i,l,s,o,c);return{...o,_lazyPromises:p,shouldLoad:h,unstable_shouldRevalidateArgs:g,unstable_shouldCallHandler(b){return y=!0,g?typeof b=="boolean"?$s(o,{...g,defaultShouldRevalidate:b}):$s(o,g):h},resolve(b){return y||h||b&&!Gt(s.method)&&(o.route.lazy||o.route.loader)?z6({request:s,match:o,lazyHandlerPromise:p==null?void 0:p.handler,lazyRoutePromise:p==null?void 0:p.route,handlerOverride:b,scopedContext:d}):Promise.resolve({type:"data",result:void 0})}}}function Nl(i,l,s,o,c,d,h,g=null){return o.map(y=>y.route.id!==c.route.id?{...y,shouldLoad:!1,unstable_shouldRevalidateArgs:g,unstable_shouldCallHandler:()=>!1,_lazyPromises:g3(i,l,s,y,d),resolve:()=>Promise.resolve({type:"data",result:void 0})}:_5(i,l,s,y,d,h,!0,g))}async function A6(i,l,s,o,c,d){s.some(p=>{var b;return(b=p._lazyPromises)==null?void 0:b.middleware})&&await Promise.all(s.map(p=>{var b;return(b=p._lazyPromises)==null?void 0:b.middleware}));let h={request:l,params:s[0].params,context:c,matches:s},y=await i({...h,fetcherKey:o,unstable_runClientMiddleware:p=>{let b=h;return p3(b,!1,()=>p({...b,fetcherKey:o,unstable_runClientMiddleware:()=>{throw new Error("Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler")}}),(w,E)=>({[E]:{type:"error",result:w}}))}});try{await Promise.all(s.flatMap(p=>{var b,w;return[(b=p._lazyPromises)==null?void 0:b.handler,(w=p._lazyPromises)==null?void 0:w.route]}))}catch{}return y}async function z6({request:i,match:l,lazyHandlerPromise:s,lazyRoutePromise:o,handlerOverride:c,scopedContext:d}){let h,g,y=Gt(i.method),p=y?"action":"loader",b=w=>{let E,A=new Promise((J,Z)=>E=Z);g=()=>E(),i.signal.addEventListener("abort",g);let N=J=>typeof w!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${p}" [routeId: ${l.route.id}]`)):w({request:i,params:l.params,context:d},...J!==void 0?[J]:[]),F=(async()=>{try{return{type:"data",result:await(c?c(Z=>N(Z)):N())}}catch(J){return{type:"error",result:J}}})();return Promise.race([F,A])};try{let w=y?l.route.action:l.route.loader;if(s||o)if(w){let E,[A]=await Promise.all([b(w).catch(N=>{E=N}),s,o]);if(E!==void 0)throw E;h=A}else{await s;let E=y?l.route.action:l.route.loader;if(E)[h]=await Promise.all([b(E),o]);else if(p==="action"){let A=new URL(i.url),N=A.pathname+A.search;throw Sn(405,{method:i.method,pathname:N,routeId:l.route.id})}else return{type:"data",result:void 0}}else if(w)h=await b(w);else{let E=new URL(i.url),A=E.pathname+E.search;throw Sn(404,{pathname:A})}}catch(w){return{type:"error",result:w}}finally{g&&i.signal.removeEventListener("abort",g)}return h}async function T6(i){var o,c,d,h,g,y;let{result:l,type:s}=i;if(b3(l)){let p;try{let b=l.headers.get("Content-Type");b&&/\bapplication\/json\b/.test(b)?l.body==null?p=null:p=await l.json():p=await l.text()}catch(b){return{type:"error",error:b}}return s==="error"?{type:"error",error:new Os(l.status,l.statusText,p),statusCode:l.status,headers:l.headers}:{type:"data",data:p,statusCode:l.status,headers:l.headers}}return s==="error"?$0(l)?l.data instanceof Error?{type:"error",error:l.data,statusCode:(o=l.init)==null?void 0:o.status,headers:(c=l.init)!=null&&c.headers?new Headers(l.init.headers):void 0}:{type:"error",error:new Os(((d=l.init)==null?void 0:d.status)||500,void 0,l.data),statusCode:lr(l)?l.status:void 0,headers:(h=l.init)!=null&&h.headers?new Headers(l.init.headers):void 0}:{type:"error",error:l,statusCode:lr(l)?l.status:void 0}:$0(l)?{type:"data",data:l.data,statusCode:(g=l.init)==null?void 0:g.status,headers:(y=l.init)!=null&&y.headers?new Headers(l.init.headers):void 0}:{type:"data",data:l}}function R6(i,l,s,o,c){let d=i.headers.get("Location");if(Ee(d,"Redirects returned/thrown from loaders/actions must have a Location header"),!E5(d)){let h=o.slice(0,o.findIndex(g=>g.route.id===s)+1);d=m5(new URL(l.url),h,c,d),i.headers.set("Location",d)}return i}function A0(i,l,s){if(E5(i)){let o=i,c=o.startsWith("//")?new URL(l.protocol+o):new URL(o),d=En(c.pathname,s)!=null;if(c.origin===l.origin&&d)return c.pathname+c.search+c.hash}return i}function $l(i,l,s,o){let c=i.createURL(m3(l)).toString(),d={signal:s};if(o&&Gt(o.formMethod)){let{formMethod:h,formEncType:g}=o;d.method=h.toUpperCase(),g==="application/json"?(d.headers=new Headers({"Content-Type":g}),d.body=JSON.stringify(o.json)):g==="text/plain"?d.body=o.text:g==="application/x-www-form-urlencoded"&&o.formData?d.body=C5(o.formData):d.body=o.formData}return new Request(c,d)}function C5(i){let l=new URLSearchParams;for(let[s,o]of i.entries())l.append(s,typeof o=="string"?o:o.name);return l}function z0(i){let l=new FormData;for(let[s,o]of i.entries())l.append(s,o);return l}function H6(i,l,s,o=!1,c=!1){let d={},h=null,g,y=!1,p={},b=s&&tn(s[1])?s[1].error:void 0;return i.forEach(w=>{if(!(w.route.id in l))return;let E=w.route.id,A=l[E];if(Ee(!$1(A),"Cannot handle redirect results in processLoaderData"),tn(A)){let N=A.error;if(b!==void 0&&(N=b,b=void 0),h=h||{},c)h[E]=N;else{let F=O1(i,E);h[F.route.id]==null&&(h[F.route.id]=N)}o||(d[E]=h3),y||(y=!0,g=lr(A.error)?A.error.status:500),A.headers&&(p[E]=A.headers)}else d[E]=A.data,A.statusCode&&A.statusCode!==200&&!y&&(g=A.statusCode),A.headers&&(p[E]=A.headers)}),b!==void 0&&s&&(h={[s[0]]:b},s[2]&&(d[s[2]]=void 0)),{loaderData:d,errors:h,statusCode:g||200,loaderHeaders:p}}function T0(i,l,s,o,c,d){let{loaderData:h,errors:g}=H6(l,s,o);return c.filter(y=>!y.matches||y.matches.some(p=>p.shouldLoad)).forEach(y=>{let{key:p,match:b,controller:w}=y,E=d[p];if(Ee(E,"Did not find corresponding fetcher result"),!(w&&w.signal.aborted))if(tn(E)){let A=O1(i.matches,b==null?void 0:b.route.id);g&&g[A.route.id]||(g={...g,[A.route.id]:E.error}),i.fetchers.delete(p)}else if($1(E))Ee(!1,"Unhandled fetcher revalidation redirect");else{let A=Ia(E.data);i.fetchers.set(p,A)}}),{loaderData:h,errors:g}}function R0(i,l,s,o){let c=Object.entries(l).filter(([,d])=>d!==h3).reduce((d,[h,g])=>(d[h]=g,d),{});for(let d of s){let h=d.route.id;if(!l.hasOwnProperty(h)&&i.hasOwnProperty(h)&&d.route.loader&&(c[h]=i[h]),o&&o.hasOwnProperty(h))break}return c}function H0(i){return i?tn(i[1])?{actionData:{}}:{actionData:{[i[0]]:i[1].data}}:{}}function O1(i,l){return(l?i.slice(0,i.findIndex(o=>o.route.id===l)+1):[...i]).reverse().find(o=>o.route.hasErrorBoundary===!0)||i[0]}function O0(i){let l=i.length===1?i[0]:i.find(s=>s.index||!s.path||s.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:l}],route:l}}function Sn(i,{pathname:l,routeId:s,method:o,type:c,message:d}={}){let h="Unknown Server Error",g="Unknown @remix-run/router error";return i===400?(h="Bad Request",o&&l&&s?g=`You made a ${o} request to "${l}" but did not provide a \`loader\` for route "${s}", so there is no way to handle the request.`:c==="invalid-body"&&(g="Unable to encode submission body")):i===403?(h="Forbidden",g=`Route "${s}" does not match URL "${l}"`):i===404?(h="Not Found",g=`No route matches URL "${l}"`):i===405&&(h="Method Not Allowed",o&&l&&s?g=`You made a ${o.toUpperCase()} request to "${l}" but did not provide an \`action\` for route "${s}", so there is no way to handle the request.`:o&&(g=`Invalid request method "${o.toUpperCase()}"`)),new Os(i||500,h,new Error(g),!0)}function Es(i){let l=Object.entries(i);for(let s=l.length-1;s>=0;s--){let[o,c]=l[s];if($1(c))return{key:o,result:c}}}function m3(i){let l=typeof i=="string"?i1(i):i;return l1({...l,hash:""})}function O6(i,l){return i.pathname!==l.pathname||i.search!==l.search?!1:i.hash===""?l.hash!=="":i.hash===l.hash?!0:l.hash!==""}function $6(i){return b3(i.result)&&b6.has(i.result.status)}function tn(i){return i.type==="error"}function $1(i){return(i&&i.type)==="redirect"}function $0(i){return typeof i=="object"&&i!=null&&"type"in i&&"data"in i&&"init"in i&&i.type==="DataWithResponseInit"}function b3(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.headers=="object"&&typeof i.body<"u"}function U6(i){return m6.has(i.toUpperCase())}function Gt(i){return v6.has(i.toUpperCase())}function D5(i){return new URLSearchParams(i).getAll("index").some(l=>l==="")}function As(i,l){let s=typeof l=="string"?i1(l).search:l.search;if(i[i.length-1].route.index&&D5(s||""))return i[i.length-1];let o=c3(i);return o[o.length-1]}function U0(i){let{formMethod:l,formAction:s,formEncType:o,text:c,formData:d,json:h}=i;if(!(!l||!s||!o)){if(c!=null)return{formMethod:l,formAction:s,formEncType:o,formData:void 0,json:void 0,text:c};if(d!=null)return{formMethod:l,formAction:s,formEncType:o,formData:d,json:void 0,text:void 0};if(h!==void 0)return{formMethod:l,formAction:s,formEncType:o,formData:void 0,json:h,text:void 0}}}function d5(i,l){return l?{state:"loading",location:i,formMethod:l.formMethod,formAction:l.formAction,formEncType:l.formEncType,formData:l.formData,json:l.json,text:l.text}:{state:"loading",location:i,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function N6(i,l){return{state:"submitting",location:i,formMethod:l.formMethod,formAction:l.formAction,formEncType:l.formEncType,formData:l.formData,json:l.json,text:l.text}}function Gi(i,l){return i?{state:"loading",formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text,data:l}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:l}}function V6(i,l){return{state:"submitting",formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text,data:l?l.data:void 0}}function Ia(i){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:i}}function B6(i,l){try{let s=i.sessionStorage.getItem(d3);if(s){let o=JSON.parse(s);for(let[c,d]of Object.entries(o||{}))d&&Array.isArray(d)&&l.set(c,new Set(d||[]))}}catch{}}function q6(i,l){if(l.size>0){let s={};for(let[o,c]of l)s[o]=[...c];try{i.sessionStorage.setItem(d3,JSON.stringify(s))}catch(o){ct(!1,`Failed to save applied view transitions in sessionStorage (${o}).`)}}}function j6(){let i,l,s=new Promise((o,c)=>{i=async d=>{o(d);try{await s}catch{}},l=async d=>{c(d);try{await s}catch{}}});return{promise:s,resolve:i,reject:l}}var V1=O.createContext(null);V1.displayName="DataRouter";var sr=O.createContext(null);sr.displayName="DataRouterState";O.createContext(!1);var M5=O.createContext({isTransitioning:!1});M5.displayName="ViewTransition";var _3=O.createContext(new Map);_3.displayName="Fetchers";var Z6=O.createContext(null);Z6.displayName="Await";var Un=O.createContext(null);Un.displayName="Navigation";var qs=O.createContext(null);qs.displayName="Location";var Nn=O.createContext({outlet:null,matches:[],isDataRoute:!1});Nn.displayName="Route";var L5=O.createContext(null);L5.displayName="RouteError";function Y6(i,{relative:l}={}){Ee(ql(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:o}=O.useContext(Un),{hash:c,pathname:d,search:h}=or(i,{relative:l}),g=d;return s!=="/"&&(g=d==="/"?s:In([s,d])),o.createHref({pathname:g,search:h,hash:c})}function ql(){return O.useContext(qs)!=null}function r1(){return Ee(ql(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(qs).location}var C3="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function x3(i){O.useContext(Un).static||O.useLayoutEffect(i)}function w3(){let{isDataRoute:i}=O.useContext(Nn);return i?i9():G6()}function G6(){Ee(ql(),"useNavigate() may be used only in the context of a <Router> component.");let i=O.useContext(V1),{basename:l,navigator:s}=O.useContext(Un),{matches:o}=O.useContext(Nn),{pathname:c}=r1(),d=JSON.stringify(Vs(o)),h=O.useRef(!1);return x3(()=>{h.current=!0}),O.useCallback((y,p={})=>{if(ct(h.current,C3),!h.current)return;if(typeof y=="number"){s.go(y);return}let b=Bs(y,JSON.parse(d),c,p.relative==="path");i==null&&l!=="/"&&(b.pathname=b.pathname==="/"?l:In([l,b.pathname])),(p.replace?s.replace:s.push)(b,p.state,p)},[l,s,d,c,i])}var X6=O.createContext(null);function Q6(i){let l=O.useContext(Nn).outlet;return l&&O.createElement(X6.Provider,{value:i},l)}function or(i,{relative:l}={}){let{matches:s}=O.useContext(Nn),{pathname:o}=r1(),c=JSON.stringify(Vs(s));return O.useMemo(()=>Bs(i,JSON.parse(c),o,l==="path"),[i,c,o,l])}function F6(i,l,s,o){Ee(ql(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=O.useContext(Un),{matches:d}=O.useContext(Nn),h=d[d.length-1],g=h?h.params:{},y=h?h.pathname:"/",p=h?h.pathnameBase:"/",b=h&&h.route;{let Z=b&&b.path||"";k3(y,!b||Z.endsWith("*")||Z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${Z==="/"?"*":`${Z}/*`}">.`)}let w=r1(),E;E=w;let A=E.pathname||"/",N=A;if(p!=="/"){let Z=p.replace(/^\//,"").split("/");N="/"+A.replace(/^\//,"").split("/").slice(Z.length).join("/")}let F=e1(i,{pathname:N});return ct(b||F!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),ct(F==null||F[F.length-1].route.element!==void 0||F[F.length-1].route.Component!==void 0||F[F.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),I6(F&&F.map(Z=>Object.assign({},Z,{params:Object.assign({},g,Z.params),pathname:In([p,c.encodeLocation?c.encodeLocation(Z.pathname).pathname:Z.pathname]),pathnameBase:Z.pathnameBase==="/"?p:In([p,c.encodeLocation?c.encodeLocation(Z.pathnameBase).pathname:Z.pathnameBase])})),d,s,o)}function K6(){let i=l9(),l=lr(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),s=i instanceof Error?i.stack:null,o="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},h=null;return console.error("Error handled by React Router default ErrorBoundary:",i),h=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:d},"ErrorBoundary")," or"," ",O.createElement("code",{style:d},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},l),s?O.createElement("pre",{style:c},s):null,h)}var J6=O.createElement(K6,null),P6=class extends O.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,l){return l.location!==i.location||l.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:l.error,location:l.location,revalidation:i.revalidation||l.revalidation}}componentDidCatch(i,l){console.error("React Router caught the following error during render",i,l)}render(){return this.state.error!==void 0?O.createElement(Nn.Provider,{value:this.props.routeContext},O.createElement(L5.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function W6({routeContext:i,match:l,children:s}){let o=O.useContext(V1);return o&&o.static&&o.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=l.route.id),O.createElement(Nn.Provider,{value:i},s)}function I6(i,l=[],s=null,o=null){if(i==null){if(!s)return null;if(s.errors)i=s.matches;else if(l.length===0&&!s.initialized&&s.matches.length>0)i=s.matches;else return null}let c=i,d=s==null?void 0:s.errors;if(d!=null){let y=c.findIndex(p=>p.route.id&&(d==null?void 0:d[p.route.id])!==void 0);Ee(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),c=c.slice(0,Math.min(c.length,y+1))}let h=!1,g=-1;if(s)for(let y=0;y<c.length;y++){let p=c[y];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(g=y),p.route.id){let{loaderData:b,errors:w}=s,E=p.route.loader&&!b.hasOwnProperty(p.route.id)&&(!w||w[p.route.id]===void 0);if(p.route.lazy||E){h=!0,g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}return c.reduceRight((y,p,b)=>{let w,E=!1,A=null,N=null;s&&(w=d&&p.route.id?d[p.route.id]:void 0,A=p.route.errorElement||J6,h&&(g<0&&b===0?(k3("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,N=null):g===b&&(E=!0,N=p.route.hydrateFallbackElement||null)));let F=l.concat(c.slice(0,b+1)),J=()=>{let Z;return w?Z=A:E?Z=N:p.route.Component?Z=O.createElement(p.route.Component,null):p.route.element?Z=p.route.element:Z=y,O.createElement(W6,{match:p,routeContext:{outlet:y,matches:F,isDataRoute:s!=null},children:Z})};return s&&(p.route.ErrorBoundary||p.route.errorElement||b===0)?O.createElement(P6,{location:s.location,revalidation:s.revalidation,component:A,error:w,children:J(),routeContext:{outlet:null,matches:F,isDataRoute:!0}}):J()},null)}function A5(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function e9(i){let l=O.useContext(V1);return Ee(l,A5(i)),l}function t9(i){let l=O.useContext(sr);return Ee(l,A5(i)),l}function n9(i){let l=O.useContext(Nn);return Ee(l,A5(i)),l}function z5(i){let l=n9(i),s=l.matches[l.matches.length-1];return Ee(s.route.id,`${i} can only be used on routes that contain a unique "id"`),s.route.id}function a9(){return z5("useRouteId")}function l9(){var o;let i=O.useContext(L5),l=t9("useRouteError"),s=z5("useRouteError");return i!==void 0?i:(o=l.errors)==null?void 0:o[s]}function i9(){let{router:i}=e9("useNavigate"),l=z5("useNavigate"),s=O.useRef(!1);return x3(()=>{s.current=!0}),O.useCallback(async(c,d={})=>{ct(s.current,C3),s.current&&(typeof c=="number"?i.navigate(c):await i.navigate(c,{fromRouteId:l,...d}))},[i,l])}var N0={};function k3(i,l,s){!l&&!N0[i]&&(N0[i]=!0,ct(!1,s))}var V0={};function B0(i,l){!i&&!V0[l]&&(V0[l]=!0,console.warn(l))}function r9(i){let l={hasErrorBoundary:i.hasErrorBoundary||i.ErrorBoundary!=null||i.errorElement!=null};return i.Component&&(i.element&&ct(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(l,{element:O.createElement(i.Component),Component:void 0})),i.HydrateFallback&&(i.hydrateFallbackElement&&ct(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(l,{hydrateFallbackElement:O.createElement(i.HydrateFallback),HydrateFallback:void 0})),i.ErrorBoundary&&(i.errorElement&&ct(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(l,{errorElement:O.createElement(i.ErrorBoundary),ErrorBoundary:void 0})),l}var s9=["HydrateFallback","hydrateFallbackElement"],o9=class{constructor(){this.status="pending",this.promise=new Promise((i,l)=>{this.resolve=s=>{this.status==="pending"&&(this.status="resolved",i(s))},this.reject=s=>{this.status==="pending"&&(this.status="rejected",l(s))}})}};function c9({router:i,flushSync:l}){let[s,o]=O.useState(i.state),[c,d]=O.useState(),[h,g]=O.useState({isTransitioning:!1}),[y,p]=O.useState(),[b,w]=O.useState(),[E,A]=O.useState(),N=O.useRef(new Map),F=O.useCallback((ee,{deletedFetchers:be,flushSync:W,viewTransitionOpts:T})=>{ee.fetchers.forEach((Ve,X)=>{Ve.data!==void 0&&N.current.set(X,Ve.data)}),be.forEach(Ve=>N.current.delete(Ve)),B0(W===!1||l!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let He=i.window!=null&&i.window.document!=null&&typeof i.window.document.startViewTransition=="function";if(B0(T==null||He,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!T||!He){l&&W?l(()=>o(ee)):O.startTransition(()=>o(ee));return}if(l&&W){l(()=>{b&&(y&&y.resolve(),b.skipTransition()),g({isTransitioning:!0,flushSync:!0,currentLocation:T.currentLocation,nextLocation:T.nextLocation})});let Ve=i.window.document.startViewTransition(()=>{l(()=>o(ee))});Ve.finished.finally(()=>{l(()=>{p(void 0),w(void 0),d(void 0),g({isTransitioning:!1})})}),l(()=>w(Ve));return}b?(y&&y.resolve(),b.skipTransition(),A({state:ee,currentLocation:T.currentLocation,nextLocation:T.nextLocation})):(d(ee),g({isTransitioning:!0,flushSync:!1,currentLocation:T.currentLocation,nextLocation:T.nextLocation}))},[i.window,l,b,y]);O.useLayoutEffect(()=>i.subscribe(F),[i,F]),O.useEffect(()=>{h.isTransitioning&&!h.flushSync&&p(new o9)},[h]),O.useEffect(()=>{if(y&&c&&i.window){let ee=c,be=y.promise,W=i.window.document.startViewTransition(async()=>{O.startTransition(()=>o(ee)),await be});W.finished.finally(()=>{p(void 0),w(void 0),d(void 0),g({isTransitioning:!1})}),w(W)}},[c,y,i.window]),O.useEffect(()=>{y&&c&&s.location.key===c.location.key&&y.resolve()},[y,b,s.location,c]),O.useEffect(()=>{!h.isTransitioning&&E&&(d(E.state),g({isTransitioning:!0,flushSync:!1,currentLocation:E.currentLocation,nextLocation:E.nextLocation}),A(void 0))},[h.isTransitioning,E]);let J=O.useMemo(()=>({createHref:i.createHref,encodeLocation:i.encodeLocation,go:ee=>i.navigate(ee),push:(ee,be,W)=>i.navigate(ee,{state:be,preventScrollReset:W==null?void 0:W.preventScrollReset}),replace:(ee,be,W)=>i.navigate(ee,{replace:!0,state:be,preventScrollReset:W==null?void 0:W.preventScrollReset})}),[i]),Z=i.basename||"/",ye=O.useMemo(()=>({router:i,navigator:J,static:!1,basename:Z}),[i,J,Z]);return O.createElement(O.Fragment,null,O.createElement(V1.Provider,{value:ye},O.createElement(sr.Provider,{value:s},O.createElement(_3.Provider,{value:N.current},O.createElement(M5.Provider,{value:h},O.createElement(y9,{basename:Z,location:s.location,navigationType:s.historyAction,navigator:J},O.createElement(u9,{routes:i.routes,future:i.future,state:s})))))),null)}var u9=O.memo(d9);function d9({routes:i,future:l,state:s}){return F6(i,void 0,s,l)}function h9({to:i,replace:l,state:s,relative:o}){Ee(ql(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=O.useContext(Un);ct(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=O.useContext(Nn),{pathname:h}=r1(),g=w3(),y=Bs(i,Vs(d),h,o==="path"),p=JSON.stringify(y);return O.useEffect(()=>{g(JSON.parse(p),{replace:l,state:s,relative:o})},[g,p,o,l,s]),null}function f9(i){return Q6(i.context)}function y9({basename:i="/",children:l=null,location:s,navigationType:o="POP",navigator:c,static:d=!1}){Ee(!ql(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=i.replace(/^\/*/,"/"),g=O.useMemo(()=>({basename:h,navigator:c,static:d,future:{}}),[h,c,d]);typeof s=="string"&&(s=i1(s));let{pathname:y="/",search:p="",hash:b="",state:w=null,key:E="default"}=s,A=O.useMemo(()=>{let N=En(y,h);return N==null?null:{location:{pathname:N,search:p,hash:b,state:w,key:E},navigationType:o}},[h,y,p,b,w,E,o]);return ct(A!=null,`<Router basename="${h}"> is not able to match the URL "${y}${p}${b}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:O.createElement(Un.Provider,{value:g},O.createElement(qs.Provider,{children:l,value:A}))}var zs="get",Ts="application/x-www-form-urlencoded";function js(i){return i!=null&&typeof i.tagName=="string"}function p9(i){return js(i)&&i.tagName.toLowerCase()==="button"}function v9(i){return js(i)&&i.tagName.toLowerCase()==="form"}function g9(i){return js(i)&&i.tagName.toLowerCase()==="input"}function m9(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function b9(i,l){return i.button===0&&(!l||l==="_self")&&!m9(i)}var Ds=null;function _9(){if(Ds===null)try{new FormData(document.createElement("form"),0),Ds=!1}catch{Ds=!0}return Ds}var C9=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function h5(i){return i!=null&&!C9.has(i)?(ct(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ts}"`),null):i}function x9(i,l){let s,o,c,d,h;if(v9(i)){let g=i.getAttribute("action");o=g?En(g,l):null,s=i.getAttribute("method")||zs,c=h5(i.getAttribute("enctype"))||Ts,d=new FormData(i)}else if(p9(i)||g9(i)&&(i.type==="submit"||i.type==="image")){let g=i.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=i.getAttribute("formaction")||g.getAttribute("action");if(o=y?En(y,l):null,s=i.getAttribute("formmethod")||g.getAttribute("method")||zs,c=h5(i.getAttribute("formenctype"))||h5(g.getAttribute("enctype"))||Ts,d=new FormData(g,i),!_9()){let{name:p,type:b,value:w}=i;if(b==="image"){let E=p?`${p}.`:"";d.append(`${E}x`,"0"),d.append(`${E}y`,"0")}else p&&d.append(p,w)}}else{if(js(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=zs,o=null,c=Ts,h=i}return d&&c==="text/plain"&&(h=d,d=void 0),{action:o,method:s.toLowerCase(),encType:c,formData:d,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function T5(i,l){if(i===!1||i===null||typeof i>"u")throw new Error(l)}function w9(i,l,s){let o=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return o.pathname==="/"?o.pathname=`_root.${s}`:l&&En(o.pathname,l)==="/"?o.pathname=`${l.replace(/\/$/,"")}/_root.${s}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${s}`,o}async function k9(i,l){if(i.id in l)return l[i.id];try{let s=await import(i.module);return l[i.id]=s,s}catch(s){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function S9(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function E9(i,l,s){let o=await Promise.all(i.map(async c=>{let d=l.routes[c.route.id];if(d){let h=await k9(d,s);return h.links?h.links():[]}return[]}));return A9(o.flat(1).filter(S9).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function q0(i,l,s,o,c,d){let h=(y,p)=>s[p]?y.route.id!==s[p].route.id:!0,g=(y,p)=>{var b;return s[p].pathname!==y.pathname||((b=s[p].route.path)==null?void 0:b.endsWith("*"))&&s[p].params["*"]!==y.params["*"]};return d==="assets"?l.filter((y,p)=>h(y,p)||g(y,p)):d==="data"?l.filter((y,p)=>{var w;let b=o.routes[y.route.id];if(!b||!b.hasLoader)return!1;if(h(y,p)||g(y,p))return!0;if(y.route.shouldRevalidate){let E=y.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((w=s[0])==null?void 0:w.params)||{},nextUrl:new URL(i,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function D9(i,l,{includeHydrateFallback:s}={}){return M9(i.map(o=>{let c=l.routes[o.route.id];if(!c)return[];let d=[c.module];return c.clientActionModule&&(d=d.concat(c.clientActionModule)),c.clientLoaderModule&&(d=d.concat(c.clientLoaderModule)),s&&c.hydrateFallbackModule&&(d=d.concat(c.hydrateFallbackModule)),c.imports&&(d=d.concat(c.imports)),d}).flat(1))}function M9(i){return[...new Set(i)]}function L9(i){let l={},s=Object.keys(i).sort();for(let o of s)l[o]=i[o];return l}function A9(i,l){let s=new Set;return new Set(l),i.reduce((o,c)=>{let d=JSON.stringify(L9(c));return s.has(d)||(s.add(d),o.push({key:d,link:c})),o},[])}function S3(){let i=O.useContext(V1);return T5(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function z9(){let i=O.useContext(sr);return T5(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var R5=O.createContext(void 0);R5.displayName="FrameworkContext";function E3(){let i=O.useContext(R5);return T5(i,"You must render this element inside a <HydratedRouter> element"),i}function T9(i,l){let s=O.useContext(R5),[o,c]=O.useState(!1),[d,h]=O.useState(!1),{onFocus:g,onBlur:y,onMouseEnter:p,onMouseLeave:b,onTouchStart:w}=l,E=O.useRef(null);O.useEffect(()=>{if(i==="render"&&h(!0),i==="viewport"){let F=Z=>{Z.forEach(ye=>{h(ye.isIntersecting)})},J=new IntersectionObserver(F,{threshold:.5});return E.current&&J.observe(E.current),()=>{J.disconnect()}}},[i]),O.useEffect(()=>{if(o){let F=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(F)}}},[o]);let A=()=>{c(!0)},N=()=>{c(!1),h(!1)};return s?i!=="intent"?[d,E,{}]:[d,E,{onFocus:Xi(g,A),onBlur:Xi(y,N),onMouseEnter:Xi(p,A),onMouseLeave:Xi(b,N),onTouchStart:Xi(w,A)}]:[!1,E,{}]}function Xi(i,l){return s=>{i&&i(s),s.defaultPrevented||l(s)}}function R9({page:i,...l}){let{router:s}=S3(),o=O.useMemo(()=>e1(s.routes,i,s.basename),[s.routes,i,s.basename]);return o?O.createElement(O9,{page:i,matches:o,...l}):null}function H9(i){let{manifest:l,routeModules:s}=E3(),[o,c]=O.useState([]);return O.useEffect(()=>{let d=!1;return E9(i,l,s).then(h=>{d||c(h)}),()=>{d=!0}},[i,l,s]),o}function O9({page:i,matches:l,...s}){let o=r1(),{manifest:c,routeModules:d}=E3(),{basename:h}=S3(),{loaderData:g,matches:y}=z9(),p=O.useMemo(()=>q0(i,l,y,c,o,"data"),[i,l,y,c,o]),b=O.useMemo(()=>q0(i,l,y,c,o,"assets"),[i,l,y,c,o]),w=O.useMemo(()=>{if(i===o.pathname+o.search+o.hash)return[];let N=new Set,F=!1;if(l.forEach(Z=>{var ee;let ye=c.routes[Z.route.id];!ye||!ye.hasLoader||(!p.some(be=>be.route.id===Z.route.id)&&Z.route.id in g&&((ee=d[Z.route.id])!=null&&ee.shouldRevalidate)||ye.hasClientLoader?F=!0:N.add(Z.route.id))}),N.size===0)return[];let J=w9(i,h,"data");return F&&N.size>0&&J.searchParams.set("_routes",l.filter(Z=>N.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[J.pathname+J.search]},[h,g,o,c,p,l,i,d]),E=O.useMemo(()=>D9(b,c),[b,c]),A=H9(b);return O.createElement(O.Fragment,null,w.map(N=>O.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...s})),E.map(N=>O.createElement("link",{key:N,rel:"modulepreload",href:N,...s})),A.map(({key:N,link:F})=>O.createElement("link",{key:N,...F})))}function $9(...i){return l=>{i.forEach(s=>{typeof s=="function"?s(l):s!=null&&(s.current=l)})}}var D3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{D3&&(window.__reactRouterVersion="7.7.1")}catch{}function U9(i,l){return k6({basename:l==null?void 0:l.basename,unstable_getContext:l==null?void 0:l.unstable_getContext,future:l==null?void 0:l.future,history:Z8({window:l==null?void 0:l.window}),hydrationData:N9(),routes:i,mapRouteProperties:r9,hydrationRouteProperties:s9,dataStrategy:l==null?void 0:l.dataStrategy,patchRoutesOnNavigation:l==null?void 0:l.patchRoutesOnNavigation,window:l==null?void 0:l.window}).initialize()}function N9(){let i=window==null?void 0:window.__staticRouterHydrationData;return i&&i.errors&&(i={...i,errors:V9(i.errors)}),i}function V9(i){if(!i)return null;let l=Object.entries(i),s={};for(let[o,c]of l)if(c&&c.__type==="RouteErrorResponse")s[o]=new Os(c.status,c.statusText,c.data,c.internal===!0);else if(c&&c.__type==="Error"){if(c.__subType){let d=window[c.__subType];if(typeof d=="function")try{let h=new d(c.message);h.stack="",s[o]=h}catch{}}if(s[o]==null){let d=new Error(c.message);d.stack="",s[o]=d}}else s[o]=c;return s}var M3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zs=O.forwardRef(function({onClick:l,discover:s="render",prefetch:o="none",relative:c,reloadDocument:d,replace:h,state:g,target:y,to:p,preventScrollReset:b,viewTransition:w,...E},A){let{basename:N}=O.useContext(Un),F=typeof p=="string"&&M3.test(p),J,Z=!1;if(typeof p=="string"&&F&&(J=p,D3))try{let X=new URL(window.location.href),ve=p.startsWith("//")?new URL(X.protocol+p):new URL(p),Pe=En(ve.pathname,N);ve.origin===X.origin&&Pe!=null?p=Pe+ve.search+ve.hash:Z=!0}catch{ct(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ye=Y6(p,{relative:c}),[ee,be,W]=T9(o,E),T=Z9(p,{replace:h,state:g,target:y,preventScrollReset:b,relative:c,viewTransition:w});function He(X){l&&l(X),X.defaultPrevented||T(X)}let Ve=O.createElement("a",{...E,...W,href:J||ye,onClick:Z||d?l:He,ref:$9(A,be),target:y,"data-discover":!F&&s==="render"?"true":void 0});return ee&&!F?O.createElement(O.Fragment,null,Ve,O.createElement(R9,{page:ye})):Ve});Zs.displayName="Link";var B9=O.forwardRef(function({"aria-current":l="page",caseSensitive:s=!1,className:o="",end:c=!1,style:d,to:h,viewTransition:g,children:y,...p},b){let w=or(h,{relative:p.relative}),E=r1(),A=O.useContext(sr),{navigator:N,basename:F}=O.useContext(Un),J=A!=null&&F9(w)&&g===!0,Z=N.encodeLocation?N.encodeLocation(w).pathname:w.pathname,ye=E.pathname,ee=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;s||(ye=ye.toLowerCase(),ee=ee?ee.toLowerCase():null,Z=Z.toLowerCase()),ee&&F&&(ee=En(ee,F)||ee);const be=Z!=="/"&&Z.endsWith("/")?Z.length-1:Z.length;let W=ye===Z||!c&&ye.startsWith(Z)&&ye.charAt(be)==="/",T=ee!=null&&(ee===Z||!c&&ee.startsWith(Z)&&ee.charAt(Z.length)==="/"),He={isActive:W,isPending:T,isTransitioning:J},Ve=W?l:void 0,X;typeof o=="function"?X=o(He):X=[o,W?"active":null,T?"pending":null,J?"transitioning":null].filter(Boolean).join(" ");let ve=typeof d=="function"?d(He):d;return O.createElement(Zs,{...p,"aria-current":Ve,className:X,ref:b,style:ve,to:h,viewTransition:g},typeof y=="function"?y(He):y)});B9.displayName="NavLink";var q9=O.forwardRef(({discover:i="render",fetcherKey:l,navigate:s,reloadDocument:o,replace:c,state:d,method:h=zs,action:g,onSubmit:y,relative:p,preventScrollReset:b,viewTransition:w,...E},A)=>{let N=X9(),F=Q9(g,{relative:p}),J=h.toLowerCase()==="get"?"get":"post",Z=typeof g=="string"&&M3.test(g),ye=ee=>{if(y&&y(ee),ee.defaultPrevented)return;ee.preventDefault();let be=ee.nativeEvent.submitter,W=(be==null?void 0:be.getAttribute("formmethod"))||h;N(be||ee.currentTarget,{fetcherKey:l,method:W,navigate:s,replace:c,state:d,relative:p,preventScrollReset:b,viewTransition:w})};return O.createElement("form",{ref:A,method:J,action:F,onSubmit:o?y:ye,...E,"data-discover":!Z&&i==="render"?"true":void 0})});q9.displayName="Form";function j9(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function L3(i){let l=O.useContext(V1);return Ee(l,j9(i)),l}function Z9(i,{target:l,replace:s,state:o,preventScrollReset:c,relative:d,viewTransition:h}={}){let g=w3(),y=r1(),p=or(i,{relative:d});return O.useCallback(b=>{if(b9(b,l)){b.preventDefault();let w=s!==void 0?s:l1(y)===l1(p);g(i,{replace:w,state:o,preventScrollReset:c,relative:d,viewTransition:h})}},[y,g,p,s,o,l,i,c,d,h])}var Y9=0,G9=()=>`__${String(++Y9)}__`;function X9(){let{router:i}=L3("useSubmit"),{basename:l}=O.useContext(Un),s=a9();return O.useCallback(async(o,c={})=>{let{action:d,method:h,encType:g,formData:y,body:p}=x9(o,l);if(c.navigate===!1){let b=c.fetcherKey||G9();await i.fetch(b,s,c.action||d,{preventScrollReset:c.preventScrollReset,formData:y,body:p,formMethod:c.method||h,formEncType:c.encType||g,flushSync:c.flushSync})}else await i.navigate(c.action||d,{preventScrollReset:c.preventScrollReset,formData:y,body:p,formMethod:c.method||h,formEncType:c.encType||g,replace:c.replace,state:c.state,fromRouteId:s,flushSync:c.flushSync,viewTransition:c.viewTransition})},[i,l,s])}function Q9(i,{relative:l}={}){let{basename:s}=O.useContext(Un),o=O.useContext(Nn);Ee(o,"useFormAction must be used inside a RouteContext");let[c]=o.matches.slice(-1),d={...or(i||".",{relative:l})},h=r1();if(i==null){d.search=h.search;let g=new URLSearchParams(d.search),y=g.getAll("index");if(y.some(b=>b==="")){g.delete("index"),y.filter(w=>w).forEach(w=>g.append("index",w));let b=g.toString();d.search=b?`?${b}`:""}}return(!i||i===".")&&c.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(d.pathname=d.pathname==="/"?s:In([s,d.pathname])),l1(d)}function F9(i,{relative:l}={}){let s=O.useContext(M5);Ee(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=L3("useViewTransitionState"),c=or(i,{relative:l});if(!s.isTransitioning)return!1;let d=En(s.currentLocation.pathname,o)||s.currentLocation.pathname,h=En(s.nextLocation.pathname,o)||s.nextLocation.pathname;return Hs(c.pathname,h)!=null||Hs(c.pathname,d)!=null}var K9=l3();function J9(i){return O.createElement(c9,{flushSync:K9.flushSync,...i})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P9=new Set(["children","localName","ref","style","className"]),j0=new WeakMap,Z0=(i,l,s,o,c)=>{const d=c==null?void 0:c[l];d===void 0?(i[l]=s,s==null&&l in HTMLElement.prototype&&i.removeAttribute(l)):s!==o&&((h,g,y)=>{let p=j0.get(h);p===void 0&&j0.set(h,p=new Map);let b=p.get(g);y!==void 0?b===void 0?(p.set(g,b={handleEvent:y}),h.addEventListener(g,b)):b.handleEvent=y:b!==void 0&&(p.delete(g),h.removeEventListener(g,b))})(i,d,s)},Je=({react:i,tagName:l,elementClass:s,events:o,displayName:c})=>{const d=new Set(Object.keys(o??{})),h=i.forwardRef((g,y)=>{const p=i.useRef(new Map),b=i.useRef(null),w={},E={};for(const[A,N]of Object.entries(g))P9.has(A)?w[A==="className"?"class":A]=N:d.has(A)||A in s.prototype?E[A]=N:w[A]=N;return i.useLayoutEffect(()=>{if(b.current===null)return;const A=new Map;for(const N in E)Z0(b.current,N,g[N],p.current.get(N),o),p.current.delete(N),A.set(N,g[N]);for(const[N,F]of p.current)Z0(b.current,N,void 0,F,o);p.current=A}),i.useLayoutEffect(()=>{var A;(A=b.current)==null||A.removeAttribute("defer-hydration")},[]),w.suppressHydrationWarning=!0,i.createElement(l,{...w,ref:i.useCallback(A=>{b.current=A,typeof y=="function"?y(A):y!==null&&(y.current=A)},[y])})});return h.displayName=c??s.name,h};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rs=globalThis,H5=Rs.ShadowRoot&&(Rs.ShadyCSS===void 0||Rs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,O5=Symbol(),Y0=new WeakMap;let A3=class{constructor(l,s,o){if(this._$cssResult$=!0,o!==O5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=l,this.t=s}get styleSheet(){let l=this.o;const s=this.t;if(H5&&l===void 0){const o=s!==void 0&&s.length===1;o&&(l=Y0.get(s)),l===void 0&&((this.o=l=new CSSStyleSheet).replaceSync(this.cssText),o&&Y0.set(s,l))}return l}toString(){return this.cssText}};const W9=i=>new A3(typeof i=="string"?i:i+"",void 0,O5),Ie=(i,...l)=>{const s=i.length===1?i[0]:l.reduce((o,c,d)=>o+(h=>{if(h._$cssResult$===!0)return h.cssText;if(typeof h=="number")return h;throw Error("Value passed to 'css' function must be a 'css' function result: "+h+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(c)+i[d+1],i[0]);return new A3(s,i,O5)},I9=(i,l)=>{if(H5)i.adoptedStyleSheets=l.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of l){const o=document.createElement("style"),c=Rs.litNonce;c!==void 0&&o.setAttribute("nonce",c),o.textContent=s.cssText,i.appendChild(o)}},G0=H5?i=>i:i=>i instanceof CSSStyleSheet?(l=>{let s="";for(const o of l.cssRules)s+=o.cssText;return W9(s)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:eh,defineProperty:th,getOwnPropertyDescriptor:nh,getOwnPropertyNames:ah,getOwnPropertySymbols:lh,getPrototypeOf:ih}=Object,a1=globalThis,X0=a1.trustedTypes,rh=X0?X0.emptyScript:"",f5=a1.reactiveElementPolyfillSupport,er=(i,l)=>i,Us={toAttribute(i,l){switch(l){case Boolean:i=i?rh:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,l){let s=i;switch(l){case Boolean:s=i!==null;break;case Number:s=i===null?null:Number(i);break;case Object:case Array:try{s=JSON.parse(i)}catch{s=null}}return s}},$5=(i,l)=>!eh(i,l),Q0={attribute:!0,type:String,converter:Us,reflect:!1,hasChanged:$5};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),a1.litPropertyMetadata??(a1.litPropertyMetadata=new WeakMap);let Ul=class extends HTMLElement{static addInitializer(l){this._$Ei(),(this.l??(this.l=[])).push(l)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(l,s=Q0){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(l,s),!s.noAccessor){const o=Symbol(),c=this.getPropertyDescriptor(l,o,s);c!==void 0&&th(this.prototype,l,c)}}static getPropertyDescriptor(l,s,o){const{get:c,set:d}=nh(this.prototype,l)??{get(){return this[s]},set(h){this[s]=h}};return{get(){return c==null?void 0:c.call(this)},set(h){const g=c==null?void 0:c.call(this);d.call(this,h),this.requestUpdate(l,g,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(l){return this.elementProperties.get(l)??Q0}static _$Ei(){if(this.hasOwnProperty(er("elementProperties")))return;const l=ih(this);l.finalize(),l.l!==void 0&&(this.l=[...l.l]),this.elementProperties=new Map(l.elementProperties)}static finalize(){if(this.hasOwnProperty(er("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(er("properties"))){const s=this.properties,o=[...ah(s),...lh(s)];for(const c of o)this.createProperty(c,s[c])}const l=this[Symbol.metadata];if(l!==null){const s=litPropertyMetadata.get(l);if(s!==void 0)for(const[o,c]of s)this.elementProperties.set(o,c)}this._$Eh=new Map;for(const[s,o]of this.elementProperties){const c=this._$Eu(s,o);c!==void 0&&this._$Eh.set(c,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(l){const s=[];if(Array.isArray(l)){const o=new Set(l.flat(1/0).reverse());for(const c of o)s.unshift(G0(c))}else l!==void 0&&s.push(G0(l));return s}static _$Eu(l,s){const o=s.attribute;return o===!1?void 0:typeof o=="string"?o:typeof l=="string"?l.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var l;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(l=this.constructor.l)==null||l.forEach(s=>s(this))}addController(l){var s;(this._$EO??(this._$EO=new Set)).add(l),this.renderRoot!==void 0&&this.isConnected&&((s=l.hostConnected)==null||s.call(l))}removeController(l){var s;(s=this._$EO)==null||s.delete(l)}_$E_(){const l=new Map,s=this.constructor.elementProperties;for(const o of s.keys())this.hasOwnProperty(o)&&(l.set(o,this[o]),delete this[o]);l.size>0&&(this._$Ep=l)}createRenderRoot(){const l=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return I9(l,this.constructor.elementStyles),l}connectedCallback(){var l;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(l=this._$EO)==null||l.forEach(s=>{var o;return(o=s.hostConnected)==null?void 0:o.call(s)})}enableUpdating(l){}disconnectedCallback(){var l;(l=this._$EO)==null||l.forEach(s=>{var o;return(o=s.hostDisconnected)==null?void 0:o.call(s)})}attributeChangedCallback(l,s,o){this._$AK(l,o)}_$EC(l,s){var d;const o=this.constructor.elementProperties.get(l),c=this.constructor._$Eu(l,o);if(c!==void 0&&o.reflect===!0){const h=(((d=o.converter)==null?void 0:d.toAttribute)!==void 0?o.converter:Us).toAttribute(s,o.type);this._$Em=l,h==null?this.removeAttribute(c):this.setAttribute(c,h),this._$Em=null}}_$AK(l,s){var d;const o=this.constructor,c=o._$Eh.get(l);if(c!==void 0&&this._$Em!==c){const h=o.getPropertyOptions(c),g=typeof h.converter=="function"?{fromAttribute:h.converter}:((d=h.converter)==null?void 0:d.fromAttribute)!==void 0?h.converter:Us;this._$Em=c,this[c]=g.fromAttribute(s,h.type),this._$Em=null}}requestUpdate(l,s,o){if(l!==void 0){if(o??(o=this.constructor.getPropertyOptions(l)),!(o.hasChanged??$5)(this[l],s))return;this.P(l,s,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(l,s,o){this._$AL.has(l)||this._$AL.set(l,s),o.reflect===!0&&this._$Em!==l&&(this._$Ej??(this._$Ej=new Set)).add(l)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const l=this.scheduleUpdate();return l!=null&&await l,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[d,h]of this._$Ep)this[d]=h;this._$Ep=void 0}const c=this.constructor.elementProperties;if(c.size>0)for(const[d,h]of c)h.wrapped!==!0||this._$AL.has(d)||this[d]===void 0||this.P(d,this[d],h)}let l=!1;const s=this._$AL;try{l=this.shouldUpdate(s),l?(this.willUpdate(s),(o=this._$EO)==null||o.forEach(c=>{var d;return(d=c.hostUpdate)==null?void 0:d.call(c)}),this.update(s)):this._$EU()}catch(c){throw l=!1,this._$EU(),c}l&&this._$AE(s)}willUpdate(l){}_$AE(l){var s;(s=this._$EO)==null||s.forEach(o=>{var c;return(c=o.hostUpdated)==null?void 0:c.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(l)),this.updated(l)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(l){return!0}update(l){this._$Ej&&(this._$Ej=this._$Ej.forEach(s=>this._$EC(s,this[s]))),this._$EU()}updated(l){}firstUpdated(l){}};Ul.elementStyles=[],Ul.shadowRootOptions={mode:"open"},Ul[er("elementProperties")]=new Map,Ul[er("finalized")]=new Map,f5==null||f5({ReactiveElement:Ul}),(a1.reactiveElementVersions??(a1.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tr=globalThis,Ns=tr.trustedTypes,F0=Ns?Ns.createPolicy("lit-html",{createHTML:i=>i}):void 0,z3="$lit$",t1=`lit$${Math.random().toFixed(9).slice(2)}$`,T3="?"+t1,sh=`<${T3}>`,N1=document,ir=()=>N1.createComment(""),rr=i=>i===null||typeof i!="object"&&typeof i!="function",U5=Array.isArray,oh=i=>U5(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",y5=`[ 	
\f\r]`,Qi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,K0=/-->/g,J0=/>/g,H1=RegExp(`>|${y5}(?:([^\\s"'>=/]+)(${y5}*=${y5}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),P0=/'/g,W0=/"/g,R3=/^(?:script|style|textarea|title)$/i,ch=i=>(l,...s)=>({_$litType$:i,strings:l,values:s}),G=ch(1),Vl=Symbol.for("lit-noChange"),_t=Symbol.for("lit-nothing"),I0=new WeakMap,U1=N1.createTreeWalker(N1,129);function H3(i,l){if(!U5(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return F0!==void 0?F0.createHTML(l):l}const uh=(i,l)=>{const s=i.length-1,o=[];let c,d=l===2?"<svg>":l===3?"<math>":"",h=Qi;for(let g=0;g<s;g++){const y=i[g];let p,b,w=-1,E=0;for(;E<y.length&&(h.lastIndex=E,b=h.exec(y),b!==null);)E=h.lastIndex,h===Qi?b[1]==="!--"?h=K0:b[1]!==void 0?h=J0:b[2]!==void 0?(R3.test(b[2])&&(c=RegExp("</"+b[2],"g")),h=H1):b[3]!==void 0&&(h=H1):h===H1?b[0]===">"?(h=c??Qi,w=-1):b[1]===void 0?w=-2:(w=h.lastIndex-b[2].length,p=b[1],h=b[3]===void 0?H1:b[3]==='"'?W0:P0):h===W0||h===P0?h=H1:h===K0||h===J0?h=Qi:(h=H1,c=void 0);const A=h===H1&&i[g+1].startsWith("/>")?" ":"";d+=h===Qi?y+sh:w>=0?(o.push(p),y.slice(0,w)+z3+y.slice(w)+t1+A):y+t1+(w===-2?g:A)}return[H3(i,d+(i[s]||"<?>")+(l===2?"</svg>":l===3?"</math>":"")),o]};let x5=class O3{constructor({strings:l,_$litType$:s},o){let c;this.parts=[];let d=0,h=0;const g=l.length-1,y=this.parts,[p,b]=uh(l,s);if(this.el=O3.createElement(p,o),U1.currentNode=this.el.content,s===2||s===3){const w=this.el.content.firstChild;w.replaceWith(...w.childNodes)}for(;(c=U1.nextNode())!==null&&y.length<g;){if(c.nodeType===1){if(c.hasAttributes())for(const w of c.getAttributeNames())if(w.endsWith(z3)){const E=b[h++],A=c.getAttribute(w).split(t1),N=/([.?@])?(.*)/.exec(E);y.push({type:1,index:d,name:N[2],strings:A,ctor:N[1]==="."?hh:N[1]==="?"?fh:N[1]==="@"?yh:Ys}),c.removeAttribute(w)}else w.startsWith(t1)&&(y.push({type:6,index:d}),c.removeAttribute(w));if(R3.test(c.tagName)){const w=c.textContent.split(t1),E=w.length-1;if(E>0){c.textContent=Ns?Ns.emptyScript:"";for(let A=0;A<E;A++)c.append(w[A],ir()),U1.nextNode(),y.push({type:2,index:++d});c.append(w[E],ir())}}}else if(c.nodeType===8)if(c.data===T3)y.push({type:2,index:d});else{let w=-1;for(;(w=c.data.indexOf(t1,w+1))!==-1;)y.push({type:7,index:d}),w+=t1.length-1}d++}}static createElement(l,s){const o=N1.createElement("template");return o.innerHTML=l,o}};function Bl(i,l,s=i,o){var h,g;if(l===Vl)return l;let c=o!==void 0?(h=s._$Co)==null?void 0:h[o]:s._$Cl;const d=rr(l)?void 0:l._$litDirective$;return(c==null?void 0:c.constructor)!==d&&((g=c==null?void 0:c._$AO)==null||g.call(c,!1),d===void 0?c=void 0:(c=new d(i),c._$AT(i,s,o)),o!==void 0?(s._$Co??(s._$Co=[]))[o]=c:s._$Cl=c),c!==void 0&&(l=Bl(i,c._$AS(i,l.values),c,o)),l}let dh=class{constructor(l,s){this._$AV=[],this._$AN=void 0,this._$AD=l,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(l){const{el:{content:s},parts:o}=this._$AD,c=((l==null?void 0:l.creationScope)??N1).importNode(s,!0);U1.currentNode=c;let d=U1.nextNode(),h=0,g=0,y=o[0];for(;y!==void 0;){if(h===y.index){let p;y.type===2?p=new N5(d,d.nextSibling,this,l):y.type===1?p=new y.ctor(d,y.name,y.strings,this,l):y.type===6&&(p=new ph(d,this,l)),this._$AV.push(p),y=o[++g]}h!==(y==null?void 0:y.index)&&(d=U1.nextNode(),h++)}return U1.currentNode=N1,c}p(l){let s=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(l,o,s),s+=o.strings.length-2):o._$AI(l[s])),s++}},N5=class $3{get _$AU(){var l;return((l=this._$AM)==null?void 0:l._$AU)??this._$Cv}constructor(l,s,o,c){this.type=2,this._$AH=_t,this._$AN=void 0,this._$AA=l,this._$AB=s,this._$AM=o,this.options=c,this._$Cv=(c==null?void 0:c.isConnected)??!0}get parentNode(){let l=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(l==null?void 0:l.nodeType)===11&&(l=s.parentNode),l}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(l,s=this){l=Bl(this,l,s),rr(l)?l===_t||l==null||l===""?(this._$AH!==_t&&this._$AR(),this._$AH=_t):l!==this._$AH&&l!==Vl&&this._(l):l._$litType$!==void 0?this.$(l):l.nodeType!==void 0?this.T(l):oh(l)?this.k(l):this._(l)}O(l){return this._$AA.parentNode.insertBefore(l,this._$AB)}T(l){this._$AH!==l&&(this._$AR(),this._$AH=this.O(l))}_(l){this._$AH!==_t&&rr(this._$AH)?this._$AA.nextSibling.data=l:this.T(N1.createTextNode(l)),this._$AH=l}$(l){var d;const{values:s,_$litType$:o}=l,c=typeof o=="number"?this._$AC(l):(o.el===void 0&&(o.el=x5.createElement(H3(o.h,o.h[0]),this.options)),o);if(((d=this._$AH)==null?void 0:d._$AD)===c)this._$AH.p(s);else{const h=new dh(c,this),g=h.u(this.options);h.p(s),this.T(g),this._$AH=h}}_$AC(l){let s=I0.get(l.strings);return s===void 0&&I0.set(l.strings,s=new x5(l)),s}k(l){U5(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let o,c=0;for(const d of l)c===s.length?s.push(o=new $3(this.O(ir()),this.O(ir()),this,this.options)):o=s[c],o._$AI(d),c++;c<s.length&&(this._$AR(o&&o._$AB.nextSibling,c),s.length=c)}_$AR(l=this._$AA.nextSibling,s){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,s);l&&l!==this._$AB;){const c=l.nextSibling;l.remove(),l=c}}setConnected(l){var s;this._$AM===void 0&&(this._$Cv=l,(s=this._$AP)==null||s.call(this,l))}},Ys=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(l,s,o,c,d){this.type=1,this._$AH=_t,this._$AN=void 0,this.element=l,this.name=s,this._$AM=c,this.options=d,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=_t}_$AI(l,s=this,o,c){const d=this.strings;let h=!1;if(d===void 0)l=Bl(this,l,s,0),h=!rr(l)||l!==this._$AH&&l!==Vl,h&&(this._$AH=l);else{const g=l;let y,p;for(l=d[0],y=0;y<d.length-1;y++)p=Bl(this,g[o+y],s,y),p===Vl&&(p=this._$AH[y]),h||(h=!rr(p)||p!==this._$AH[y]),p===_t?l=_t:l!==_t&&(l+=(p??"")+d[y+1]),this._$AH[y]=p}h&&!c&&this.j(l)}j(l){l===_t?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,l??"")}},hh=class extends Ys{constructor(){super(...arguments),this.type=3}j(l){this.element[this.name]=l===_t?void 0:l}},fh=class extends Ys{constructor(){super(...arguments),this.type=4}j(l){this.element.toggleAttribute(this.name,!!l&&l!==_t)}};class yh extends Ys{constructor(l,s,o,c,d){super(l,s,o,c,d),this.type=5}_$AI(l,s=this){if((l=Bl(this,l,s,0)??_t)===Vl)return;const o=this._$AH,c=l===_t&&o!==_t||l.capture!==o.capture||l.once!==o.once||l.passive!==o.passive,d=l!==_t&&(o===_t||c);c&&this.element.removeEventListener(this.name,this,o),d&&this.element.addEventListener(this.name,this,l),this._$AH=l}handleEvent(l){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,l):this._$AH.handleEvent(l)}}let ph=class{constructor(l,s,o){this.element=l,this.type=6,this._$AN=void 0,this._$AM=s,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(l){Bl(this,l)}};const p5=tr.litHtmlPolyfillSupport;p5==null||p5(x5,N5),(tr.litHtmlVersions??(tr.litHtmlVersions=[])).push("3.2.1");const vh=(i,l,s)=>{const o=(s==null?void 0:s.renderBefore)??l;let c=o._$litPart$;if(c===void 0){const d=(s==null?void 0:s.renderBefore)??null;o._$litPart$=c=new N5(l.insertBefore(ir(),d),d,void 0,s??{})}return c._$AI(i),c};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Oe=class extends Ul{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const l=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=l.firstChild),l}update(l){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(l),this._$Do=vh(s,this.renderRoot,this.renderOptions)}connectedCallback(){var l;super.connectedCallback(),(l=this._$Do)==null||l.setConnected(!0)}disconnectedCallback(){var l;super.disconnectedCallback(),(l=this._$Do)==null||l.setConnected(!1)}render(){return Vl}};var a3;Oe._$litElement$=!0,Oe.finalized=!0,(a3=globalThis.litElementHydrateSupport)==null||a3.call(globalThis,{LitElement:Oe});const v5=globalThis.litElementPolyfillSupport;v5==null||v5({LitElement:Oe});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gh={attribute:!0,type:String,converter:Us,reflect:!1,hasChanged:$5},mh=(i=gh,l,s)=>{const{kind:o,metadata:c}=s;let d=globalThis.litPropertyMetadata.get(c);if(d===void 0&&globalThis.litPropertyMetadata.set(c,d=new Map),d.set(s.name,i),o==="accessor"){const{name:h}=s;return{set(g){const y=l.get.call(this);l.set.call(this,g),this.requestUpdate(h,y,i)},init(g){return g!==void 0&&this.P(h,void 0,i),g}}}if(o==="setter"){const{name:h}=s;return function(g){const y=this[h];l.call(this,g),this.requestUpdate(h,y,i)}}throw Error("Unsupported decorator location: "+o)};function _(i){return(l,s)=>typeof s=="object"?mh(i,l,s):((o,c,d)=>{const h=c.hasOwnProperty(d);return c.constructor.createProperty(d,h?{...o,wrapped:!0}:o),h?Object.getOwnPropertyDescriptor(c,d):void 0})(i,l,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function nn(i){return _({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bh=(i,l,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof l!="object"&&Object.defineProperty(i,l,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _h(i,l){return(s,o,c)=>{const d=h=>{var g;return((g=h.renderRoot)==null?void 0:g.querySelector(i))??null};return bh(s,o,{get(){return d(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=i=>i??_t;/*!
   * New York State Design System (v1.7.0)
   * Description: A design system for New York State's digital products.
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
 */const U3=Ie`
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
`;var Ch=Object.defineProperty,cr=(i,l,s,o)=>{for(var c=void 0,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=h(l,s,c)||c);return c&&Ch(l,s,c),c};let xh=0;const N3=class extends Oe{constructor(){super(),this.id="",this.heading="",this.expanded=!1,this.bordered=!1}connectedCallback(){super.connectedCallback(),this.id||(this.id=this._generateUniqueId())}updated(l){l.has("expanded")&&this._updateHeight()}_generateUniqueId(){return`nys-accordionitem-${Date.now()}-${xh++}`}_dispatchEvent(){this.dispatchEvent(new CustomEvent("nys-accordionitem-toggle",{detail:{id:this.id,heading:this.heading,expanded:this.expanded},bubbles:!0,composed:!0}))}_handleExpand(){this.expanded=!this.expanded,this._updateHeight(),this._dispatchEvent()}_handleKeydown(l){(l.key===" "||l.key==="Enter")&&(l.preventDefault(),this._handleExpand())}_updateHeight(){if(this._contentContainer)if(this.expanded){const l=this._contentContainer.scrollHeight;this._contentContainer.style.height=`${l}px`}else this._contentContainer.style.height="0",this._contentContainer.style.overflow="hidden"}render(){const l=`${this.id}-content`;return G`<div id=${this.id} class="nys-accordionitem">
      <button
        class="nys-accordionitem__heading"
        type="button"
        @click=${this._handleExpand}
        @keydown=${this._handleKeydown}
        aria-expanded=${this.expanded?"true":"false"}
        aria-controls=${l}
      >
        <p class="nys-accordionitem__heading-title">${this.heading}</p>
        <nys-icon class="expand-icon" name="chevron_down" size="24"></nys-icon>
      </div>
      <div id=${l} class="nys-accordionitem__content ${this.expanded?"expanded":"collapsed"}" role="region">
        <div class="nys-accordionitem__content-slot-container">
          <div class="nys-accordionitem__content-slot-container-text">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>`}};N3.styles=U3;let B1=N3;cr([_({type:String})],B1.prototype,"id");cr([_({type:String})],B1.prototype,"heading");cr([_({type:Boolean,reflect:!0})],B1.prototype,"expanded");cr([_({type:Boolean,reflect:!0})],B1.prototype,"bordered");cr([_h(".nys-accordionitem__content")],B1.prototype,"_contentContainer");customElements.get("nys-accordionitem")||customElements.define("nys-accordionitem",B1);var wh=Object.defineProperty,V5=(i,l,s,o)=>{for(var c=void 0,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=h(l,s,c)||c);return c&&wh(l,s,c),c};let kh=0;const V3=class extends Oe{constructor(){super(),this.id="",this.singleSelect=!1,this.bordered=!1}connectedCallback(){super.connectedCallback(),this.id||(this.id=this._generateUniqueId())}updated(l){l.has("bordered")&&this._applyBordered()}_generateUniqueId(){return`nys-accordionitem-${Date.now()}-${kh++}`}_getAccordions(){var l;const s=(l=this.shadowRoot)==null?void 0:l.querySelector("slot");return((s==null?void 0:s.assignedElements())||[]).filter(o=>o.tagName.toLowerCase()==="nys-accordionitem")}_onAccordionToggle(l){if(!this.singleSelect)return;const s=l.detail.id;l.detail.expanded&&this._getAccordions().forEach(o=>{o.id!==s&&o.expanded&&(o.expanded=!1)})}_applyBordered(){this._getAccordions().forEach(l=>{l.bordered=this.bordered})}render(){return G`<div
      id=${this.id}
      class="nys-accordion"
      @nys-accordionitem-toggle=${this._onAccordionToggle}
    >
      <slot></slot>
    </div>`}};V3.styles=U3;let ur=V3;V5([_({type:String})],ur.prototype,"id");V5([_({type:Boolean,reflect:!0})],ur.prototype,"singleSelect");V5([_({type:Boolean,reflect:!0})],ur.prototype,"bordered");customElements.get("nys-accordion")||customElements.define("nys-accordion",ur);const Sh=Ie`
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
`;var Eh=Object.defineProperty,Dh=Object.getOwnPropertyDescriptor,an=(i,l,s,o)=>{for(var c=o>1?void 0:o?Dh(l,s):l,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=(o?h(l,s,c):h(c))||c);return o&&c&&Eh(l,s,c),c};let Mh=0;var Fi;const Xt=(Fi=class extends Oe{constructor(){super(...arguments),this.id="",this.heading="",this.icon="",this.dismissible=!1,this.duration=0,this.text="",this.primaryAction="",this.secondaryAction="",this.primaryLabel="Learn more",this.secondaryLabel="Dismiss",this._alertClosed=!1,this._slotHasContent=!0,this._type="base",this._timeoutId=null}get type(){return this._type}set type(i){this._type=Fi.VALID_TYPES.includes(i)?i:"base"}get ariaAttributes(){const i=this.type==="danger"||this.type==="emergency"?"alert":this.type==="success"?"status":"region",l=i==="region"?`${this.type} alert`:"";return{role:i,ariaLabel:l}}connectedCallback(){super.connectedCallback(),this.id||(this.id=this._generateUniqueId()),this.duration>0&&(this._timeoutId=setTimeout(()=>{this._closeAlert()},this.duration))}disconnectedCallback(){this._timeoutId&&clearTimeout(this._timeoutId),super.disconnectedCallback()}firstUpdated(){this._checkSlotContent()}_generateUniqueId(){return`nys-alert-${Date.now()}-${Mh++}`}_getIconName(){return this.icon?this.icon:this._checkAltNaming()}_checkAltNaming(){return this.type==="success"?"check_circle":this.type==="base"?"info":this.type==="danger"?"error":this.type==="emergency"?"emergency_home":this.type}_closeAlert(){this._alertClosed=!0,this.dispatchEvent(new CustomEvent("nys-alert-closed",{detail:{type:this.type,label:this.heading},bubbles:!0,composed:!0}))}async _checkSlotContent(){var i;const l=(i=this.shadowRoot)==null?void 0:i.querySelector("slot");if(l){const s=l.assignedNodes({flatten:!0}).filter(o=>{var c;return o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE&&((c=o.textContent)==null?void 0:c.trim())});await Promise.resolve(),this._slotHasContent=s.length>0}else await Promise.resolve(),this._slotHasContent=!1}render(){var i,l;const{role:s,ariaLabel:o}=this.ariaAttributes;return G`
      ${this._alertClosed?"":G` <div
            id=${this.id}
            class="nys-alert__container ${this._slotHasContent||((i=this.text)==null?void 0:i.trim().length)>0?"":"nys-alert--centered"}"
            aria-label=${Re(o.trim()!==""?o:void 0)}
          >
            <div part="nys-alert__icon" class="nys-alert__icon">
              <nys-icon
                name="${this._getIconName()}"
                size="3xl"
                label="${this.type} icon"
              ></nys-icon>
            </div>
            <div class="nys-alert__texts" role=${s}>
              <p class="nys-alert__header">${this.heading}</p>
              ${this._slotHasContent?G`<slot></slot>`:((l=this.text)==null?void 0:l.trim().length)>0?G`<p class="nys-alert__text">${this.text}</p>`:""}
              ${this.primaryAction||this.secondaryAction?G`<div class="nys-alert__actions">
                    ${this.primaryAction?G`<a
                          href=${Re(this.primaryAction||void 0)}
                          class="nys-alert__action nys-alert__primary"
                        >
                          ${this.primaryLabel}
                        </a>`:""}
                    ${this.secondaryAction?G`<a
                          href=${Re(this.secondaryAction||void 0)}
                          class="nys-alert__action nys-alert__secondary"
                        >
                          ${this.secondaryLabel}
                        </a>`:""}
                  </div> `:""}
            </div>
            ${this.dismissible?G` <nys-button
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
    `}},Fi.styles=Sh,Fi.VALID_TYPES=["base","info","success","warning","danger","emergency"],Fi);an([_({type:String})],Xt.prototype,"id",2);an([_({type:String})],Xt.prototype,"heading",2);an([_({type:String})],Xt.prototype,"icon",2);an([_({type:Boolean,reflect:!0})],Xt.prototype,"dismissible",2);an([_({type:Number,reflect:!0})],Xt.prototype,"duration",2);an([_({type:String})],Xt.prototype,"text",2);an([_({type:String})],Xt.prototype,"primaryAction",2);an([_({type:String})],Xt.prototype,"secondaryAction",2);an([_({type:String})],Xt.prototype,"primaryLabel",2);an([_({type:String})],Xt.prototype,"secondaryLabel",2);an([nn()],Xt.prototype,"_alertClosed",2);an([nn()],Xt.prototype,"_slotHasContent",2);an([_({reflect:!0})],Xt.prototype,"type",1);let B3=Xt;customElements.get("nys-alert")||customElements.define("nys-alert",B3);const Lh=Ie`
  :host {
    /* Global Avatar Styles */
    --_nys-avatar-shape: var(--nys-radius-round, 1776px);
    --_nys-avatar-border: var(--nys-font-size-6xl, 36px);
    --_nys-avatar-size: var(--nys-font-size-6xl, 36px);
  }

  .nys-avatar {
    display: inline-block;
  }

  .nys-avatar__component {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--_nys-avatar-shape);
    width: var(--_nys-avatar-size);
    height: var(--_nys-avatar-size);
    font-size: var(--_nys-avatar-size);
    overflow: hidden;
    box-sizing: border-box;
    color: white;
  }

  /* Shape */
  :host([shape="square"]) {
    --_nys-avatar-shape: var(--nys-radius-xs, var(--nys-space-1px, 1px));
  }

  :host([shape="rounded"]) {
    --_nys-avatar-shape: var(--nys-radius-md, var(--nys-space-50, 4px));
  }

  :host([shape="circle"]) {
    --_nys-avatar-shape: var(--nys-radius-round, 1776px);
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
    font-size: calc(var(--_nys-avatar-size) * 0.5);
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
`;var Ah=Object.defineProperty,zh=Object.getOwnPropertyDescriptor,xa=(i,l,s,o)=>{for(var c=o>1?void 0:o?zh(l,s):l,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=(o?h(l,s,c):h(c))||c);return o&&c&&Ah(l,s,c),c};let Th=0;var Ki;const ea=(Ki=class extends Oe{constructor(){super(...arguments),this.id="",this.ariaLabel="",this.image="",this.initials="",this.icon="",this.color="#555",this.lazy=!1,this._shape="circle",this._slotHasContent=!0}get shape(){return this._shape}set shape(i){this._shape=Ki.VALID_SHAPES.includes(i)?i:"circle",this.requestUpdate("shape")}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-avatar-${Date.now()}-${Th++}`)}firstUpdated(){this._checkSlotContent()}async _checkSlotContent(){var i;const l=(i=this.shadowRoot)==null?void 0:i.querySelector("slot");if(!l){this._slotHasContent=!1;return}await Promise.resolve();const s=l.assignedNodes({flatten:!0}).filter(o=>{var c;return o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE&&((c=o.textContent)==null?void 0:c.trim())});this._slotHasContent=s.length>0}render(){var i,l,s,o;return G`
      <label class="nys-avatar" id=${this.id}>
        <div class="nys-avatar__content">
          <div
            part="nys-avatar"
            class="nys-avatar__component"
            style="background-color: ${((i=this.color)==null?void 0:i.length)>0?this.color:"#555"};"
            role=${Re(this.image?void 0:"img")}
            aria-label=${Re(this.image?void 0:this.ariaLabel?this.ariaLabel:"avatar")}
          >
            ${((l=this.image)==null?void 0:l.length)>0?G`<img
                  part="nys-avatar__image"
                  class="nys-avatar__image"
                  src=${this.image}
                  alt=${this.ariaLabel||"avatar"}
                  loading=${this.lazy?"lazy":"eager"}
                />`:((s=this.initials)==null?void 0:s.length)>0?G`<span
                    part="nys-avatar__initials"
                    class="nys-avatar__initials"
                    aria-hidden="true"
                    >${this.initials}</span
                  >`:this._slotHasContent?G`<div part="nys-avatar__icon">
                      <slot></slot>
                    </div>`:G`<div part="nys-avatar__icon">
                      <nys-icon
                        label="nys-avatar__icon"
                        name=${((o=this.icon)==null?void 0:o.length)>0?this.icon:"account_circle"}
                        size="xl"
                      ></nys-icon>
                    </div>`}
          </div>
        </div>
      </label>
    `}},Ki.styles=Lh,Ki.VALID_SHAPES=["square","rounded","circle"],Ki);xa([_({type:String})],ea.prototype,"id",2);xa([_({type:String})],ea.prototype,"ariaLabel",2);xa([_({type:String})],ea.prototype,"image",2);xa([_({type:String})],ea.prototype,"initials",2);xa([_({type:String})],ea.prototype,"icon",2);xa([_({type:String})],ea.prototype,"color",2);xa([_({type:Boolean,reflect:!0})],ea.prototype,"lazy",2);xa([_({reflect:!0})],ea.prototype,"shape",1);xa([nn()],ea.prototype,"_slotHasContent",2);let q3=ea;customElements.get("nys-avatar")||customElements.define("nys-avatar",q3);const Rh=Ie`
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
`;var Hh=Object.defineProperty,Gs=(i,l,s,o)=>{for(var c=void 0,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=h(l,s,c)||c);return c&&Hh(l,s,c),c};const j3=class extends Oe{constructor(){super(),this.position="right",this.visible=!1,this.isMobile=!1,this.forceVisible=!1,this._handleScroll=this._handleScroll.bind(this),this._handleResize=this._handleResize.bind(this),this.mediaQuery=window.matchMedia("(max-width: 480px)")}connectedCallback(){super.connectedCallback(),this.forceVisible=this.hasAttribute("visible"),window.addEventListener("scroll",this._handleScroll),this.mediaQuery.addEventListener("change",this._handleResize),this._handleResize()}disconnectedCallback(){window.removeEventListener("scroll",this._handleScroll),this.mediaQuery.removeEventListener("change",this._handleResize),super.disconnectedCallback()}_handleScroll(){if(this.forceVisible)return;const l=window.innerHeight,s=document.documentElement.scrollHeight;this.visible=s>=l*4&&window.scrollY>l*1.5}_scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}_handleResize(){this.isMobile=this.mediaQuery.matches}render(){const l=["nys-backtotop",this.position,this.visible?"visible":""].filter(Boolean).join(" ");return G`<nys-button
      id="nys-backtotop"
      prefixIcon="chevron_up"
      variant="outline"
      label="Back to top"
      size="sm"
      class="${l}"
      .onClick=${this._scrollToTop}
      ?circle=${this.isMobile}
    ></nys-button>`}};j3.styles=Rh;let jl=j3;Gs([_({type:String})],jl.prototype,"position");Gs([_({type:Boolean,reflect:!0})],jl.prototype,"visible");Gs([nn()],jl.prototype,"isMobile");Gs([nn()],jl.prototype,"forceVisible");customElements.get("nys-backtotop")||customElements.define("nys-backtotop",jl);const Oh=Ie`
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
`;var $h=Object.defineProperty,Uh=Object.getOwnPropertyDescriptor,pt=(i,l,s,o)=>{for(var c=o>1?void 0:o?Uh(l,s):l,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=(o?h(l,s,c):h(c))||c);return o&&c&&$h(l,s,c),c};let Nh=0;var kn;const ut=(kn=class extends Oe{constructor(){super(),this.id="",this.name="",this._size="md",this.fullWidth=!1,this._variant="filled",this.inverted=!1,this.label="",this.ariaLabel="",this.prefixIcon="",this.suffixIcon="",this.circle=!1,this.icon="",this.disabled=!1,this.form="",this.value="",this.ariaDescription="",this._type="button",this.onClick=()=>{},this.href="",this._target="_self",this._internals=this.attachInternals()}get size(){return this._size}set size(i){this._size=kn.VALID_SIZES.includes(i)?i:"md"}get variant(){return this._variant}set variant(i){this._variant=kn.VALID_VARIANTS.includes(i)?i:"filled"}get type(){return this._type}set type(i){this._type=kn.VALID_TYPES.includes(i)?i:"button"}get target(){return this._target}set target(i){this._target=kn.VALID_TARGETS.includes(i)?i:"_self"}connectedCallback(){super.connectedCallback(),this.id||(this.id=this._generateUniqueId())}_generateUniqueId(){return`nys-button-${Date.now()}-${Nh++}`}_manageFormAction(i){typeof this.onClick=="function"&&this.onClick(i);const l=this._internals.form;if(l)switch(this.type){case"submit":l.requestSubmit();break;case"reset":l.reset();break}}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){var i;const l=(i=this.shadowRoot)==null?void 0:i.querySelector(".nys-button");l==null||l.classList.remove("active-focus"),this.dispatchEvent(new Event("nys-blur"))}_handleClick(i){if(this.disabled){i.preventDefault();return}this._manageFormAction(i),this.dispatchEvent(new Event("nys-click"))}_handleKeydown(i){if(i.code==="Space"||i.code==="Enter"||i.key===" "||i.key==="Enter"){if(this.disabled)return;if(i.preventDefault(),this.href){const l=this.renderRoot.querySelector("a.nys-button");l&&l.click()}else this.click()}}render(){return G`
      ${this.href?G`
            <div class="nys-button__linkwrapper">
              <a
                class="nys-button"
                id=${Re(this.id)}
                name=${Re(this.name?this.name:void 0)}
                ?disabled=${this.disabled}
                aria-disabled="${this.disabled?"true":"false"}"
                form=${Re(this.form?this.form:void 0)}
                value=${Re(this.value?this.value:void 0)}
                href=${this.href}
                target=${this.target}
                aria-label=${Re(this.ariaLabel||this.label||(this.circle?this.icon:null)||"button")}
                aria-description=${Re(this.ariaDescription||void 0)}
                @click=${this._handleClick}
                @focus="${this._handleFocus}"
                @blur="${this._handleBlur}"
                @keydown="${this._handleKeydown}"
                role="button"
                tabindex="${this.disabled?-1:0}"
              >
                ${this.prefixIcon&&this.variant!=="text"?G`<slot name="prefix-icon">
                      <nys-icon size="16" name=${this.prefixIcon}></nys-icon>
                    </slot>`:""}
                ${this.label&&!this.circle?G`<div class="nys-button__text">${this.label}</div>`:""}
                ${this.suffixIcon&&this.variant!=="text"?G`<slot name="suffix-icon">
                      <nys-icon size="16" name=${this.suffixIcon}></nys-icon>
                    </slot>`:""}
                ${this.circle&&this.icon?G`<slot name="circle-icon"
                      ><nys-icon
                        size=${this.size==="sm"?"24":this.size==="lg"?"40":"32"}
                        name=${this.icon}
                      ></nys-icon
                    ></slot>`:""}
              </a>
            </div>
          `:G`
            <button
              class="nys-button"
              id=${Re(this.id)}
              name=${Re(this.name?this.name:void 0)}
              ?disabled=${this.disabled}
              form=${Re(this.form?this.form:void 0)}
              value=${Re(this.value?this.value:void 0)}
              type=${this.type}
              aria-label=${Re(this.ariaLabel||this.label||(this.circle?this.icon:null)||this.prefixIcon||this.suffixIcon||"button")}
              aria-description=${Re(this.ariaDescription||void 0)}
              @click=${this._handleClick}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
              @keydown="${this._handleKeydown}"
              role="button"
            >
              ${this.prefixIcon&&this.variant!=="text"?G`<slot name="prefix-icon">
                    <nys-icon size="16" name=${this.prefixIcon}></nys-icon>
                  </slot>`:""}
              ${this.label&&!this.circle?G`<div class="nys-button__text">${this.label}</div>`:""}
              ${this.suffixIcon&&this.variant!=="text"?G`<slot name="suffix-icon">
                    <nys-icon size="16" name=${this.suffixIcon}></nys-icon>
                  </slot>`:""}
              ${this.circle&&this.icon?G`<slot name="circle-icon">
                    <nys-icon
                      size=${this.size==="sm"?"24":this.size==="lg"?"40":"32"}
                      name=${this.icon}
                    ></nys-icon>
                  </slot>`:""}
            </button>
          `}
    `}},kn.VALID_SIZES=["sm","md","lg"],kn.VALID_VARIANTS=["filled","outline","ghost","text"],kn.VALID_TYPES=["submit","reset","button"],kn.VALID_TARGETS=["_self","_blank","_parent","_top","framename"],kn.styles=Oh,kn.formAssociated=!0,kn);pt([_({type:String})],ut.prototype,"id",2);pt([_({type:String,reflect:!0})],ut.prototype,"name",2);pt([_({reflect:!0})],ut.prototype,"size",1);pt([_({type:Boolean,reflect:!0})],ut.prototype,"fullWidth",2);pt([_({reflect:!0})],ut.prototype,"variant",1);pt([_({type:Boolean,reflect:!0})],ut.prototype,"inverted",2);pt([_({type:String})],ut.prototype,"label",2);pt([_({type:String})],ut.prototype,"ariaLabel",2);pt([_({type:String})],ut.prototype,"prefixIcon",2);pt([_({type:String})],ut.prototype,"suffixIcon",2);pt([_({type:Boolean,reflect:!0})],ut.prototype,"circle",2);pt([_({type:String})],ut.prototype,"icon",2);pt([_({type:Boolean,reflect:!0})],ut.prototype,"disabled",2);pt([_({type:String})],ut.prototype,"form",2);pt([_({type:String})],ut.prototype,"value",2);pt([_({type:String})],ut.prototype,"ariaDescription",2);pt([_({reflect:!0})],ut.prototype,"type",1);pt([_({type:Function})],ut.prototype,"onClick",2);pt([_({type:String})],ut.prototype,"href",2);pt([_({reflect:!0})],ut.prototype,"target",1);let Z3=ut;customElements.get("nys-button")||customElements.define("nys-button",Z3);const Vh=Ie`
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
`;var Bh=Object.defineProperty,qh=Object.getOwnPropertyDescriptor,s1=(i,l,s,o)=>{for(var c=o>1?void 0:o?qh(l,s):l,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=(o?h(l,s,c):h(c))||c);return o&&c&&Bh(l,s,c),c},Ca;const wa=(Ca=class extends Oe{constructor(){super(...arguments),this.id="",this.name="",this._size="md",this._intent="neutral",this.prefixLabel="",this.label="",this._prefixIcon="",this._suffixIcon=""}get size(){return this._size}set size(i){this._size=Ca.VALID_SIZES.includes(i)?i:"md"}get intent(){return this._intent}set intent(i){this._intent=Ca.VALID_INTENT.includes(i)?i:"neutral"}get prefixIcon(){return this._prefixIcon}set prefixIcon(i){i===""||i===null?this._prefixIcon=!0:i==="false"||i===!1?this._prefixIcon="":this._prefixIcon=i}get suffixIcon(){return this._suffixIcon}set suffixIcon(i){i===""||i===null?this._suffixIcon=!0:i==="false"||i===!1?this._suffixIcon="":this._suffixIcon=i}connectedCallback(){super.connectedCallback();const i=this.getAttribute("prefixicon");i!==null&&this.prefixIcon===""&&(this.prefixIcon=i);const l=this.getAttribute("suffixicon");l!==null&&this.suffixIcon===""&&(this.suffixIcon=l)}resolveIcon(i){return i===!0?Ca.DEFAULT_ICONS[this.intent]??"info":typeof i=="string"&&i.trim()!==""?i:null}render(){const i=this.resolveIcon(this.prefixIcon),l=this.resolveIcon(this.suffixIcon);return G`
      <div class="nys-badge">
        ${i?G`<nys-icon size="16" name=${i}></nys-icon>`:""}
        ${this.prefixLabel?G`<div class="nys-badge__prefix">${this.prefixLabel}</div>`:""}
        <div class="nys-badge__label">${this.label}</div>
        ${l?G`<nys-icon size="16" name=${l}></nys-icon>`:""}
      </div>
    `}},Ca.VALID_SIZES=["sm","md"],Ca.VALID_INTENT=["neutral","error","success","warning"],Ca.styles=Vh,Ca.DEFAULT_ICONS={neutral:"info",error:"emergency_home",success:"check_circle",warning:"warning"},Ca);s1([_({type:String})],wa.prototype,"id",2);s1([_({type:String,reflect:!0})],wa.prototype,"name",2);s1([_({reflect:!0})],wa.prototype,"size",1);s1([_({reflect:!0})],wa.prototype,"intent",1);s1([_({type:String})],wa.prototype,"prefixLabel",2);s1([_({type:String})],wa.prototype,"label",2);s1([_({type:String,attribute:"prefixicon"})],wa.prototype,"prefixIcon",1);s1([_({type:String,attribute:"suffixicon"})],wa.prototype,"suffixIcon",1);let jh=wa;customElements.get("nys-badge")||customElements.define("nys-badge",jh);const Y3=Ie`
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
`;var Zh=Object.defineProperty,Yh=Object.getOwnPropertyDescriptor,Vn=(i,l,s,o)=>{for(var c=o>1?void 0:o?Yh(l,s):l,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=(o?h(l,s,c):h(c))||c);return o&&c&&Zh(l,s,c),c};let Gh=0;var Al;const Dn=(Al=class extends Oe{constructor(){super(),this.id="",this.name="",this.required=!1,this.optional=!1,this.showError=!1,this.errorMessage="",this.label="",this.description="",this.tile=!1,this._slottedDescriptionText="",this._size="md",this._internals=this.attachInternals()}get size(){return this._size}set size(i){this._size=Al.VALID_SIZES.includes(i)?i:"md"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-checkbox-${Date.now()}-${Gh++}`),this.addEventListener("nys-change",this._handleCheckboxChange),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("nys-change",this._handleCheckboxChange),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setGroupExist(),this._updateCheckboxSize(),this._updateCheckboxTile(),this._updateCheckboxShowError(),this._getSlotDescriptionForAria()}updated(i){i.has("required")&&this.required&&this._setupCheckboxRequired(),i.has("size")&&this._updateCheckboxSize(),i.has("tile")&&this._updateCheckboxTile(),i.has("showError")&&this._updateCheckboxShowError()}_setGroupExist(){this.querySelectorAll("nys-checkbox").forEach(i=>{i.groupExist=!0})}async _setupCheckboxRequired(){const i=this.querySelector("nys-checkbox"),l=this.errorMessage||"This field is required",s=i?await i.getInputElement():null;this._internals.setValidity({valueMissing:!0},l,s||this)}async _manageCheckboxRequired(){if(this.required){const i=this.errorMessage||"Please select at least one option.",l=this.querySelector("nys-checkbox"),s=l?await l.getInputElement():null;let o=!1;this.querySelectorAll("nys-checkbox").forEach(c=>{c.checked&&(o=!0)}),o?(this._internals.setValidity({}),this.showError=!1):(this._internals.setValidity({valueMissing:!0},i,s||this),this.showError=!0)}}_updateCheckboxSize(){this.querySelectorAll("nys-checkbox").forEach(i=>{i.setAttribute("size",this.size)})}_updateCheckboxTile(){this.querySelectorAll("nys-checkbox").forEach(i=>{this.tile?i.toggleAttribute("tile",!0):i.removeAttribute("tile")})}_updateCheckboxShowError(){this.querySelectorAll("nys-checkbox").forEach(i=>{this.showError?i.setAttribute("showError",""):i.removeAttribute("showError")})}_getSlotDescriptionForAria(){var i;const l=(i=this.shadowRoot)==null?void 0:i.querySelector('slot[name="description"]'),s=(l==null?void 0:l.assignedNodes({flatten:!0}))||[];this._slottedDescriptionText=s.map(o=>{var c;return(c=o.textContent)==null?void 0:c.trim()}).filter(Boolean).join(", ")}async _handleInvalid(i){i.preventDefault(),this.showError=!0,this._manageCheckboxRequired();const l=this.querySelector("nys-checkbox"),s=l?await l.getInputElement():null;if(s){const o=this._internals.form;o?Array.from(o.elements).find(c=>{if(c.tagName.toLowerCase()==="nys-checkboxgroup"){if(Array.from(this.querySelectorAll("nys-checkbox")).filter(d=>d.checked).length===0)return c}else return typeof c.checkValidity=="function"&&!c.checkValidity()})===this&&s.focus():s.focus()}}_handleCheckboxChange(i){const l=i,{name:s}=l.detail,o=Array.from(this.querySelectorAll("nys-checkbox")).filter(c=>c.checked).map(c=>c.value);this.name=s,this._internals.setFormValue(o.join(", ")),this._manageCheckboxRequired()}render(){return G`
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
    `}},Al.VALID_SIZES=["sm","md"],Al.styles=Y3,Al.formAssociated=!0,Al);Vn([_({type:String})],Dn.prototype,"id",2);Vn([_({type:String,reflect:!0})],Dn.prototype,"name",2);Vn([_({type:Boolean,reflect:!0})],Dn.prototype,"required",2);Vn([_({type:Boolean,reflect:!0})],Dn.prototype,"optional",2);Vn([_({type:Boolean,reflect:!0})],Dn.prototype,"showError",2);Vn([_({type:String})],Dn.prototype,"errorMessage",2);Vn([_({type:String})],Dn.prototype,"label",2);Vn([_({type:String})],Dn.prototype,"description",2);Vn([_({type:Boolean,reflect:!0})],Dn.prototype,"tile",2);Vn([nn()],Dn.prototype,"_slottedDescriptionText",2);Vn([_({reflect:!0})],Dn.prototype,"size",1);let G3=Dn;customElements.get("nys-checkboxgroup")||customElements.define("nys-checkboxgroup",G3);var Xh=Object.defineProperty,Qh=Object.getOwnPropertyDescriptor,ln=(i,l,s,o)=>{for(var c=o>1?void 0:o?Qh(l,s):l,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=(o?h(l,s,c):h(c))||c);return o&&c&&Xh(l,s,c),c};let Fh=0;var zl;const Qt=(zl=class extends Oe{constructor(){super(),this.checked=!1,this.disabled=!1,this.required=!1,this.label="",this.description="",this.id="",this.name="",this.value="",this.showError=!1,this.errorMessage="",this.groupExist=!1,this.tile=!1,this._size="md",this._internals=this.attachInternals()}get size(){return this._size}set size(i){this._size=zl.VALID_SIZES.includes(i)?i:"md"}async getInputElement(){var i;return await this.updateComplete,((i=this.shadowRoot)==null?void 0:i.querySelector("input"))||null}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-checkbox-${Date.now()}-${Fh++}`),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue(),this._manageRequire()}formResetCallback(){this.checked=!1}_setValue(){this.groupExist||this._internals.setFormValue(this.checked?this.value:null)}_manageRequire(){var i;const l=(i=this.shadowRoot)==null?void 0:i.querySelector("input"),s=this.errorMessage||"This field is required";l&&(this.required&&!this.checked?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},s,l)):this._internals.setValidity({}))}_setValidityMessage(i=""){var l,s;const o=(l=this.shadowRoot)==null?void 0:l.querySelector("input");o&&(this.showError=!!i,(s=this.errorMessage)!=null&&s.trim()&&i!==""&&(i=this.errorMessage),this._internals.setValidity(i?{customError:!0}:{},i,o))}_validate(){var i;const l=(i=this.shadowRoot)==null?void 0:i.querySelector("input");if(!l)return;const s=l.validity;let o="";s.valueMissing&&(o="This field is required"),this._setValidityMessage(o)}checkValidity(){var i;if(this.required&&!this.checked)return!1;const l=(i=this.shadowRoot)==null?void 0:i.querySelector("input");return l?l.checkValidity():!0}_handleInvalid(i){var l;i.preventDefault(),this.showError=!0,this._validate();const s=(l=this.shadowRoot)==null?void 0:l.querySelector("input");if(s){const o=this._internals.form;o?Array.from(o.elements).find(c=>typeof c.checkValidity=="function"&&!c.checkValidity())===this&&s.focus():s.focus()}}_emitChangeEvent(){this.dispatchEvent(new CustomEvent("nys-change",{detail:{checked:this.checked,name:this.name,value:this.value},bubbles:!0,composed:!0}))}_handleChange(i){const{checked:l}=i.target;this.checked=l,this.groupExist||this._internals.setFormValue(this.checked?this.value:null),this._validate(),this._emitChangeEvent()}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this.dispatchEvent(new Event("nys-blur"))}async _handleKeydown(i){i.code==="Space"&&(i.preventDefault(),this.disabled||(this.checked=!this.checked,this._internals.setFormValue(this.checked?this.value:null),await this.updateComplete,this._validate(),this._emitChangeEvent()))}render(){var i;return G`
      <label class="nys-checkbox">
        <div class="nys-checkbox__checkboxwrapper">
          <input
            id="${this.id}"
            class="nys-checkbox__checkbox"
            type="checkbox"
            name="${Re(this.name?this.name:void 0)}"
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
          ${this.checked?G`<nys-icon
                for="${this.id}"
                name="check"
                size="${this.size==="md"?"4xl":this.size==="sm"?"2xl":"xl"}"
                class="nys-checkbox__icon"
              ></nys-icon>`:""}
        </div>
        ${this.label&&G` <div class="nys-checkbox__text">
          <div class="nys-checkbox__requiredwrapper">
            <div class="nys-checkbox__label">${this.label}</div>
            ${this.required?G`<div class="nys-checkbox__required">*</div>`:""}
          </div>
          <div class="nys-checkbox__description">
            <slot name="description">${this.description}</slot>
          </div>
        </div>`}
      </label>
      ${((i=this.parentElement)==null?void 0:i.tagName.toLowerCase())!=="nys-checkboxgroup"?G`<nys-errormessage
            id="single-error-message"
            ?showError=${this.showError}
            errorMessage=${this._internals.validationMessage||this.errorMessage}
            .showDivider=${!this.tile}
          ></nys-errormessage>`:""}
    `}},zl.VALID_SIZES=["sm","md"],zl.styles=Y3,zl.formAssociated=!0,zl);ln([_({type:Boolean,reflect:!0})],Qt.prototype,"checked",2);ln([_({type:Boolean,reflect:!0})],Qt.prototype,"disabled",2);ln([_({type:Boolean,reflect:!0})],Qt.prototype,"required",2);ln([_({type:String})],Qt.prototype,"label",2);ln([_({type:String})],Qt.prototype,"description",2);ln([_({type:String})],Qt.prototype,"id",2);ln([_({type:String,reflect:!0})],Qt.prototype,"name",2);ln([_({type:String})],Qt.prototype,"value",2);ln([_({type:Boolean,reflect:!0})],Qt.prototype,"showError",2);ln([_({type:String})],Qt.prototype,"errorMessage",2);ln([_({type:Boolean})],Qt.prototype,"groupExist",2);ln([_({type:Boolean,reflect:!0})],Qt.prototype,"tile",2);ln([_({reflect:!0})],Qt.prototype,"size",1);let X3=Qt;customElements.get("nys-checkbox")||customElements.define("nys-checkbox",X3);const Kh=Ie`
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
`;var Jh=Object.defineProperty,B5=(i,l,s,o)=>{for(var c=void 0,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=h(l,s,c)||c);return c&&Jh(l,s,c),c};const w5=class extends Oe{constructor(){super(),this.showError=!1,this.errorMessage="",this.showDivider=!1,this._internals=this.attachInternals()}render(){return G`${this.showError?G`<div class="nys-errormessage" ?showDivider=${this.showDivider}>
          <nys-icon name="error" size="2xl"></nys-icon>
          ${this._internals.validationMessage||this.errorMessage}
        </div>`:""}`}};w5.styles=Kh,w5.formAssociated=!0;let Xs=w5;B5([_({type:Boolean})],Xs.prototype,"showError");B5([_({type:String})],Xs.prototype,"errorMessage");B5([_({type:Boolean,reflect:!0})],Xs.prototype,"showDivider");customElements.get("nys-errormessage")||customElements.define("nys-errormessage",Xs);async function Ph(i,l){if(!l||l.trim()==="")return!0;const s=l.toLowerCase().split(",").map(d=>d.trim()),o=i.name.toLowerCase(),c=o.includes(".")?o.split(".").pop():"";for(const d of s)if(d.startsWith(".")&&d.slice(1)===c||d.endsWith("/*")&&i.type.startsWith(d.slice(0,-1))||i.type===d)return!0;return!1}const Wh=Ie`
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
`,Ih=Ie`
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
`;var ef=Object.defineProperty,Qs=(i,l,s,o)=>{for(var c=void 0,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=h(l,s,c)||c);return c&&ef(l,s,c),c};const Q3=class extends Oe{constructor(){super(...arguments),this.filename="",this.status="pending",this.progress=0,this.errorMessage=""}_handleRemove(){this.dispatchEvent(new CustomEvent("nys-fileRemove",{detail:{filename:this.filename},bubbles:!0,composed:!0}))}splitFilename(l){const s=l.lastIndexOf("."),o=s!==-1?l.slice(s):"",c=s!==-1?l.slice(0,s):l,d=c.slice(0,c.length-3),h=c.slice(-3);return{startPart:d,endPart:h,extension:o}}render(){const{startPart:l,endPart:s,extension:o}=this.splitFilename(this.filename);return G`
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
              <span class="file-item__info-name-start">${l}</span>
              <span class="file-item__info-name-end"
                >${s}${o}</span
              >
            </div>
            ${this.errorMessage?G`<p
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
        ${this.status==="processing"?G`<div
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
    `}};Q3.styles=Ih;let dr=Q3;Qs([_({type:String})],dr.prototype,"filename");Qs([_({type:String})],dr.prototype,"status");Qs([_({type:Number})],dr.prototype,"progress");Qs([_({type:String})],dr.prototype,"errorMessage");customElements.define("nys-fileitem",dr);var tf=Object.defineProperty,rn=(i,l,s,o)=>{for(var c=void 0,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=h(l,s,c)||c);return c&&tf(l,s,c),c};let nf=0;const k5=class extends Oe{constructor(){super(),this.id="",this.name="",this.label="",this.description="",this.multiple=!1,this.accept="",this.disabled=!1,this.required=!1,this.optional=!1,this.showError=!1,this.errorMessage="",this.dropzone=!1,this.width="full",this._selectedFiles=[],this._dragActive=!1,this._internals=this.attachInternals()}get _isDropDisabled(){return this.disabled||!this.multiple&&this._selectedFiles.length>0}get _buttonAriaLabel(){return this._selectedFiles.length===0?this.multiple?"Choose files: ":"Choose file: ":this.multiple?"Change files: ":"Change file: "}get _buttonAriaDescription(){if(this._selectedFiles.length===0)return`${this.label+" "+this.description}`;const l=this._selectedFiles.some(o=>o.status==="error");let s="";if(this._selectedFiles.length===1)s=`You have selected ${this._selectedFiles[0].file.name}.`;else{const o=this._selectedFiles.map(c=>c.file.name).join(", ");s=`You have selected ${this._selectedFiles.length} files: ${o}`}return`${s}${l?" Error: One or more files are not valid file types.":""}`}get _innerNysButton(){var l;const s=this.renderRoot.querySelector('[name="file-btn"]');return(l=s==null?void 0:s.shadowRoot)==null?void 0:l.querySelector("button")}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-fileinput-${Date.now()}-${nf++}`),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}_setValue(){var l;if(this.multiple){const s=this._selectedFiles.map(o=>o.file);if(s.length>0){const o=new FormData;s.forEach(c=>{o.append(this.name,c)}),this._internals.setFormValue(o)}else this._internals.setFormValue(null)}else{const s=((l=this._selectedFiles[0])==null?void 0:l.file)||null;this._internals.setFormValue(s)}this._manageRequire()}_manageRequire(){var l;const s=(l=this.shadowRoot)==null?void 0:l.querySelector("input");if(!s)return;const o=this.errorMessage||"Please upload a file.";this.required&&this._selectedFiles.length==0?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},o,s)):(this._internals.ariaRequired="false",this._internals.setValidity({},"",s))}_setValidityMessage(l=""){var s,o;const c=(s=this.shadowRoot)==null?void 0:s.querySelector("input");c&&(this.showError=l===(this.errorMessage||"Please upload a file."),(o=this.errorMessage)!=null&&o.trim()&&l!==""&&(l=this.errorMessage),this._internals.setValidity(l?{customError:!0}:{},l,c))}_validate(){const l=this._selectedFiles.some(c=>c.status==="error"),s=this.required&&this._selectedFiles.length===0;let o="";s?o=this.errorMessage||"Please upload a file.":l&&(o="One or more files are invalid."),this._setValidityMessage(o)}checkValidity(){var l;const s=(l=this.shadowRoot)==null?void 0:l.querySelector("input");return s?s.checkValidity():!0}_handleInvalid(l){l.preventDefault(),this._validate();const s=this._innerNysButton;if(s){const o=this._internals.form;o?Array.from(o.elements).find(c=>typeof c.checkValidity=="function"&&!c.checkValidity())===this&&(s.focus(),s.classList.add("active-focus")):(s.focus(),s.classList.add("active-focus"))}}async _saveSelectedFiles(l){if(this._selectedFiles.some(o=>o.file.name==l.name)||!this.multiple&&this._selectedFiles.length>=1)return;const s={file:l,progress:0,status:"pending"};this._selectedFiles.push(s),await this._processFile(s),this._setValue(),this._validate()}async _processFile(l){l.status="processing";try{if(!await Ph(l.file,this.accept)){l.status="error",l.errorMsg="File type is invalid.",this.requestUpdate();return}const s=new FileReader;s.onprogress=o=>{if(o.lengthComputable){const c=Math.round(o.loaded*100/o.total);l.progress=c,this.requestUpdate()}},s.onload=()=>{l.progress=100,l.status="done",this.requestUpdate()},s.onerror=()=>{l.status="error",l.errorMsg="Failed to load file.",this.requestUpdate()},s.readAsArrayBuffer(l.file)}catch{l.status="error",l.errorMsg="Error validating file.",this.requestUpdate()}}_dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("nys-change",{detail:{files:this._selectedFiles},bubbles:!0,composed:!0}))}_openFileDialog(){const l=this.renderRoot.querySelector(".hidden-file-input");l==null||l.click()}_handlePostFileSelectionFocus(){if(this.multiple){const l=this._innerNysButton;l&&l.focus()}else this._focusFirstFileItemIfSingleMode()}async _focusFirstFileItemIfSingleMode(){var l;if(!this.multiple){await this.updateComplete;const s=this.renderRoot.querySelector("nys-fileitem"),o=(l=s==null?void 0:s.shadowRoot)==null?void 0:l.querySelector(".file-item");o&&(o.setAttribute("tabindex","-1"),o.focus())}}_handleFileChange(l){const s=l.target.files;(s?Array.from(s):[]).map(o=>{this._saveSelectedFiles(o)}),this.requestUpdate(),this._dispatchChangeEvent(),this._handlePostFileSelectionFocus()}_handleFileRemove(l){var s;const o=l.detail.filename;if(this._selectedFiles=this._selectedFiles.filter(c=>c.file.name!==o),this._selectedFiles.length===0){const c=(s=this.shadowRoot)==null?void 0:s.querySelector("input");c&&(c.value="")}this._setValue(),this._validate(),this.requestUpdate(),this._dispatchChangeEvent()}_onDragOver(l){this.disabled||(l.stopPropagation(),l.preventDefault(),this._dragActive||(this._dragActive=!0,this.requestUpdate()))}_onDragLeave(l){this.disabled||(l.stopPropagation(),l.preventDefault(),l.currentTarget===l.target&&(this._dragActive=!1,this.requestUpdate()))}_onDrop(l){var s;if(this.disabled)return;l.preventDefault(),this._dragActive=!1,this.requestUpdate();const o=(s=l.dataTransfer)==null?void 0:s.files;if(!o)return;const c=Array.from(o);this.multiple?c.forEach(d=>{this._saveSelectedFiles(d)}):this._saveSelectedFiles(c[0]),this.requestUpdate(),this._dispatchChangeEvent()}render(){return G`<div
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

      ${this.dropzone?G`<div
            class="nys-fileinput__dropzone
            ${this._dragActive?"drag-active":""}
            ${this._isDropDisabled?"disabled":""}
            ${this.showError&&!this._isDropDisabled?"error":""}"
            @click=${this._isDropDisabled?null:this._openFileDialog}
            @keydown=${l=>!this._isDropDisabled&&(l.key==="Enter"||l.key===" ")&&this._openFileDialog()}
            @dragover=${this._isDropDisabled?null:this._onDragOver}
            @dragleave=${this._isDropDisabled?null:this._onDragLeave}
            @drop=${this._isDropDisabled?null:this._onDrop}
            aria-label="Drag files here or choose from folder"
          >
            ${this._dragActive?G`<p>Drop file to upload</p>`:G` <nys-button
                    id=${this.id}
                    name="file-btn"
                    label=${this.multiple?"Choose files":"Choose file"}
                    variant="outline"
                    ariaLabel=${this._buttonAriaLabel}
                    ariaDescription=${this._buttonAriaDescription}
                    ?disabled=${this._isDropDisabled}
                    .onClick=${l=>{l.stopPropagation(),this._openFileDialog()}}
                  ></nys-button>
                  <p>or drag here</p>`}
          </div>`:G`<nys-button
            id=${this.id}
            name="file-btn"
            label=${this.multiple?"Choose files":"Choose file"}
            variant="outline"
            ariaLabel=${this._buttonAriaLabel}
            ariaDescription=${this._buttonAriaDescription}
            ?disabled=${this.disabled||!this.multiple&&this._selectedFiles.length>0}
            .onClick=${()=>this._openFileDialog()}
          ></nys-button>`}
      ${this.showError?G`
            <nys-errormessage
              ?showError=${this.showError}
              errorMessage=${this._internals.validationMessage||this.errorMessage}
            ></nys-errormessage>
          `:null}
      ${this._selectedFiles.length>0?G`
            <ul>
              ${this._selectedFiles.map(l=>G`<li>
                    <nys-fileitem
                      filename=${l.file.name}
                      status=${l.status}
                      progress=${l.progress}
                      errorMessage=${l.errorMsg||""}
                    ></nys-fileitem>
                  </li>`)}
            </ul>
          `:null}
    </div>`}};k5.styles=Wh,k5.formAssociated=!0;let jt=k5;rn([_({type:String})],jt.prototype,"id");rn([_({type:String,reflect:!0})],jt.prototype,"name");rn([_({type:String})],jt.prototype,"label");rn([_({type:String})],jt.prototype,"description");rn([_({type:Boolean})],jt.prototype,"multiple");rn([_({type:String})],jt.prototype,"accept");rn([_({type:Boolean,reflect:!0})],jt.prototype,"disabled");rn([_({type:Boolean,reflect:!0})],jt.prototype,"required");rn([_({type:Boolean,reflect:!0})],jt.prototype,"optional");rn([_({type:Boolean,reflect:!0})],jt.prototype,"showError");rn([_({type:String})],jt.prototype,"errorMessage");rn([_({type:Boolean})],jt.prototype,"dropzone");rn([_({type:String,reflect:!0})],jt.prototype,"width");customElements.get("nys-fileinput")||customElements.define("nys-fileinput",jt);const af={account_circle:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
</svg>`},lf=Ie`
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
`;var rf=Object.defineProperty,sf=Object.getOwnPropertyDescriptor,Zl=(i,l,s,o)=>{for(var c=o>1?void 0:o?sf(l,s):l,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=(o?h(l,s,c):h(c))||c);return o&&c&&rf(l,s,c),c},Ji;const q1=(Ji=class extends Oe{constructor(){super(...arguments),this.name="",this.ariaLabel="",this.rotate="0",this.flip="",this.color="",this._size="sm"}get size(){return this._size}set size(i){this._size=Ji.VALID_TYPES.includes(i)?i:"sm"}getIcon(){const i=af[this.name];if(!i)return null;const l=new DOMParser().parseFromString(i,"image/svg+xml").documentElement;return l instanceof SVGElement?(l.setAttribute("role","img"),this.ariaLabel?(l.setAttribute("aria-label",this.ariaLabel),l.removeAttribute("aria-hidden")):(l.setAttribute("aria-hidden","true"),l.removeAttribute("aria-label")),l.style.rotate=`${this.rotate}deg`,l.style.color=this.color||"currentcolor",l.classList.add(`nys-icon--${this.size}`),l.classList.add("nys-icon--svg"),this.flip&&l.classList.add(`nys-icon--flip-${this.flip}`),l):null}render(){const i=this.getIcon();return i?G`${i}`:null}},Ji.styles=lf,Ji.VALID_TYPES=["2xs","xs","sm","md","lg","xl","2xl","3xl","4xl","12","16","24","32","40","48","64"],Ji);Zl([_({type:String,reflect:!0})],q1.prototype,"name",2);Zl([_({type:String})],q1.prototype,"ariaLabel",2);Zl([_({type:String})],q1.prototype,"rotate",2);Zl([_({type:String})],q1.prototype,"flip",2);Zl([_({type:String})],q1.prototype,"color",2);Zl([_({reflect:!0})],q1.prototype,"size",1);let F3=q1;customElements.get("nys-icon")||customElements.define("nys-icon",F3);const of=Ie`
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
`;var cf=Object.defineProperty,Fs=(i,l,s,o)=>{for(var c=void 0,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=h(l,s,c)||c);return c&&cf(l,s,c),c};const K3=class extends Oe{constructor(){super(...arguments),this.for="",this.label="",this.description="",this.flag=""}render(){return G`
      <div class="nys-label">
        <label for=${this.id} class="nys-label__label"
          >${this.label}
          ${this.flag==="required"?G`<label class="nys-label__required">*</label>`:""}
          ${this.flag==="optional"?G`<label class="nys-label__optional">(Optional)</label>`:""}</label
        >
        <label for=${this.id} class="nys-label__description">
          <slot name="description">${this.description}</slot>
        </label>
      </div>
    `}};K3.styles=of;let hr=K3;Fs([_({type:String})],hr.prototype,"for");Fs([_({type:String})],hr.prototype,"label");Fs([_({type:String})],hr.prototype,"description");Fs([_({type:String})],hr.prototype,"flag");customElements.get("nys-label")||customElements.define("nys-label",hr);const J3=Ie`
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
`;var uf=Object.defineProperty,df=Object.getOwnPropertyDescriptor,Mn=(i,l,s,o)=>{for(var c=o>1?void 0:o?df(l,s):l,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=(o?h(l,s,c):h(c))||c);return o&&c&&uf(l,s,c),c};let hf=0;var Tl;const sn=(Tl=class extends Oe{constructor(){super(),this.id="",this.name="",this.required=!1,this.optional=!1,this.showError=!1,this.errorMessage="",this.label="",this.description="",this.tile=!1,this.selectedValue=null,this._slottedDescriptionText="",this._size="md",this._internals=this.attachInternals()}get size(){return this._size}set size(i){this._size=Tl.VALID_SIZES.includes(i)?i:"md"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-radiogroup-${Date.now()}-${hf++}`),this.addEventListener("nys-change",this._handleRadioButtonChange),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("nys-change",this._handleRadioButtonChange),this.removeEventListener("invalid",this._handleInvalid)}async firstUpdated(){this._initializeCheckedRadioValue(),this._setValue(),this._setRadioButtonRequire(),this._updateRadioButtonsSize(),this._updateRadioButtonsTile(),this._updateRadioButtonsShowError(),this._getSlotDescriptionForAria(),await this.updateComplete,this._initializeChildAttributes(),this._updateGroupTabIndex()}updated(i){(i.has("required")||i.has("selectedValue"))&&this._manageRequire(),i.has("size")&&this._updateRadioButtonsSize(),i.has("tile")&&this._updateRadioButtonsTile(),i.has("showError")&&this._updateRadioButtonsShowError()}formResetCallback(){this.querySelectorAll("nys-radiobutton").forEach(i=>{i.formResetUpdate()})}_setValue(){this._internals.setFormValue(this.selectedValue)}_setRadioButtonRequire(){this.querySelectorAll("nys-radiobutton").forEach((i,l)=>{this.required&&l===0&&i.setAttribute("required","required")})}async _manageRequire(){const i=this.errorMessage||"Please select an option.",l=this.querySelector("nys-radiobutton"),s=l?await l.getInputElement():null;s&&(this.required&&!this.selectedValue?this._internals.setValidity({valueMissing:!0},i,s):(this.showError=!1,this._internals.setValidity({},"",s)))}checkValidity(){const i=Array.from(this.querySelectorAll("nys-radiobutton"));return!this.required||i.some(l=>l.checked)}_initializeCheckedRadioValue(){const i=this.querySelector("nys-radiobutton[checked]");i&&(this.selectedValue=i.getAttribute("value"),this._internals.setFormValue(this.selectedValue))}_getAllRadios(){return Array.from(this.querySelectorAll("nys-radiobutton"))}async _handleKeyDown(i){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," ","Enter"].includes(i.key))return;i.preventDefault();const l=this._getAllRadios().filter(g=>!g.disabled),s=l.find(g=>g.checked)||l[0],o=i.key===" "||i.key==="Enter"?0:["ArrowUp","ArrowLeft"].includes(i.key)?-1:1;let c=l.indexOf(s)+o;c<0&&(c=l.length-1),c>=l.length&&(c=0);const d=l[c],h=await d.getInputElement();h==null||h.click(),this._updateGroupTabIndex(),d.focus()}_updateGroupTabIndex(){const i=this._getAllRadios(),l=i.find(s=>s.checked)||i[0];i.forEach(s=>{s.disabled?s.tabIndex=-1:s.tabIndex=s===l?0:-1,s.setAttribute("aria-checked",s.checked?"true":"false"),s.setAttribute("aria-disabled",s.disabled?"true":"false"),s.setAttribute("aria-required",this.required?"true":"false")})}_initializeChildAttributes(){this._getAllRadios().forEach(i=>{i.setAttribute("role","radio"),i.setAttribute("aria-checked",String(i.checked)),i.setAttribute("aria-required",String(i.required)),i.setAttribute("aria-disabled",String(i.disabled)),i.setAttribute("tabindex","-1")})}_updateRadioButtonsSize(){this.querySelectorAll("nys-radiobutton").forEach(i=>{i.setAttribute("size",this.size)})}_updateRadioButtonsTile(){this.querySelectorAll("nys-radiobutton").forEach(i=>{this.tile?i.toggleAttribute("tile",!0):i.removeAttribute("tile")})}_updateRadioButtonsShowError(){this.querySelectorAll("nys-radiobutton").forEach(i=>{this.showError?i.setAttribute("showError",""):i.removeAttribute("showError")})}_getSlotDescriptionForAria(){var i;const l=(i=this.shadowRoot)==null?void 0:i.querySelector('slot[name="description"]'),s=(l==null?void 0:l.assignedNodes({flatten:!0}))||[];this._slottedDescriptionText=s.map(o=>{var c;return(c=o.textContent)==null?void 0:c.trim()}).filter(Boolean).join(", ")}_handleRadioButtonChange(i){const l=i,{name:s,value:o}=l.detail;this.name=s,this.selectedValue=o,this._internals.setFormValue(this.selectedValue),this._updateGroupTabIndex()}async _handleInvalid(i){if(i.preventDefault(),this._internals.validity.valueMissing){this.showError=!0,this._manageRequire();const l=this.querySelector("nys-radiobutton");if(l){const s=this._internals.form;s?Array.from(s.elements).find(o=>typeof o.checkValidity=="function"&&!o.checkValidity())===this&&(l.focus(),l.classList.add("active-focus")):(l.focus(),l.classList.add("active-focus"))}}}render(){return G`<div class="nys-radiogroup">
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
    </div>`}},Tl.VALID_SIZES=["sm","md"],Tl.styles=J3,Tl.formAssociated=!0,Tl);Mn([_({type:String})],sn.prototype,"id",2);Mn([_({type:String,reflect:!0})],sn.prototype,"name",2);Mn([_({type:Boolean,reflect:!0})],sn.prototype,"required",2);Mn([_({type:Boolean,reflect:!0})],sn.prototype,"optional",2);Mn([_({type:Boolean,reflect:!0})],sn.prototype,"showError",2);Mn([_({type:String})],sn.prototype,"errorMessage",2);Mn([_({type:String})],sn.prototype,"label",2);Mn([_({type:String})],sn.prototype,"description",2);Mn([_({type:Boolean,reflect:!0})],sn.prototype,"tile",2);Mn([nn()],sn.prototype,"selectedValue",2);Mn([nn()],sn.prototype,"_slottedDescriptionText",2);Mn([_({reflect:!0})],sn.prototype,"size",1);let P3=sn;customElements.get("nys-radiogroup")||customElements.define("nys-radiogroup",P3);var ff=Object.defineProperty,yf=Object.getOwnPropertyDescriptor,ta=(i,l,s,o)=>{for(var c=o>1?void 0:o?yf(l,s):l,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=(o?h(l,s,c):h(c))||c);return o&&c&&ff(l,s,c),c};let pf=0;var bt;const Bn=(bt=class extends Oe{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.required=!1,this.label="",this.description="",this.id="",this.name="",this.value="",this._size="md",this.tile=!1}get size(){return this._size}set size(i){this._size=bt.VALID_SIZES.includes(i)?i:"md"}async getInputElement(){var i;return await this.updateComplete,((i=this.shadowRoot)==null?void 0:i.querySelector("input"))||null}formResetUpdate(){this.checked=!1}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-radiobutton-${Date.now()}-${pf++}`),this.checked&&(bt.buttonGroup[this.name]&&(bt.buttonGroup[this.name].checked=!1,bt.buttonGroup[this.name].requestUpdate()),bt.buttonGroup[this.name]=this),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur),this.addEventListener("click",this._handleChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}updated(i){i.has("checked")&&this.checked&&bt.buttonGroup[this.name]!==this&&(bt.buttonGroup[this.name]&&(bt.buttonGroup[this.name].checked=!1,bt.buttonGroup[this.name].requestUpdate()),bt.buttonGroup[this.name]=this)}checkValidity(){var i;if(this.required&&!this.checked)return!1;const l=(i=this.shadowRoot)==null?void 0:i.querySelector("input");return l?l.checkValidity():!0}_emitChangeEvent(){this.dispatchEvent(new CustomEvent("nys-change",{detail:{checked:this.checked,name:this.name,value:this.value},bubbles:!0,composed:!0}))}_handleChange(){this.classList.remove("active-focus"),this.checked||(bt.buttonGroup[this.name]&&(bt.buttonGroup[this.name].checked=!1,bt.buttonGroup[this.name].requestUpdate()),bt.buttonGroup[this.name]=this,this.checked=!0,this._emitChangeEvent())}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this.classList.remove("active-focus"),this.dispatchEvent(new Event("nys-blur"))}_callInputHandling(){var i;if(this.disabled)return;const l=(i=this.shadowRoot)==null?void 0:i.querySelector('input[type="radio"]');l&&(l.focus(),l.click())}render(){return G`
      <input
        id="${this.id}"
        type="radio"
        name="${Re(this.name?this.name:void 0)}"
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

        ${this.label&&G` <div class="nys-radiobutton__text">
          <div class="nys-radiobutton__label">${this.label}</div>
          <div class="nys-radiobutton__description">
            <slot name="description">${this.description}</slot>
          </div>
        </div>`}
      </label>
    `}},bt.VALID_SIZES=["sm","md"],bt.buttonGroup={},bt.styles=J3,bt);ta([_({type:Boolean,reflect:!0})],Bn.prototype,"checked",2);ta([_({type:Boolean,reflect:!0})],Bn.prototype,"disabled",2);ta([_({type:Boolean,reflect:!0})],Bn.prototype,"required",2);ta([_({type:String})],Bn.prototype,"label",2);ta([_({type:String})],Bn.prototype,"description",2);ta([_({type:String})],Bn.prototype,"id",2);ta([_({type:String,reflect:!0})],Bn.prototype,"name",2);ta([_({type:String})],Bn.prototype,"value",2);ta([_({reflect:!0})],Bn.prototype,"size",1);ta([_({type:Boolean,reflect:!0})],Bn.prototype,"tile",2);let W3=Bn;customElements.get("nys-radiobutton")||customElements.define("nys-radiobutton",W3);const vf=Ie`
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
`;var gf=Object.defineProperty,fr=(i,l,s,o)=>{for(var c=void 0,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=h(l,s,c)||c);return c&&gf(l,s,c),c};class o1 extends Oe{constructor(){super(...arguments),this.disabled=!1,this.selected=!1,this.value="",this.label="",this.hidden=!1}firstUpdated(){var l;const s=(l=this.shadowRoot)==null?void 0:l.querySelector("slot");s&&s.addEventListener("slotchange",()=>{var o;const c=s.assignedNodes({flatten:!0});c.length>0&&(this.label=((o=c[0].textContent)==null?void 0:o.trim())||"")})}render(){return G`
      <option
        ?disabled=${this.disabled}
        ?selected=${this.selected}
        value=${this.value}
        label=${this.label}
        ?hidden=${this.hidden}
      >
        <slot>${this.label}</slot>
      </option>
    `}}fr([_({type:Boolean,reflect:!0})],o1.prototype,"disabled");fr([_({type:Boolean,reflect:!0})],o1.prototype,"selected");fr([_({type:String})],o1.prototype,"value");fr([_({type:String})],o1.prototype,"label");fr([_({type:Boolean,reflect:!0})],o1.prototype,"hidden");customElements.define("nys-option",o1);var mf=Object.defineProperty,bf=Object.getOwnPropertyDescriptor,Ln=(i,l,s,o)=>{for(var c=o>1?void 0:o?bf(l,s):l,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=(o?h(l,s,c):h(c))||c);return o&&c&&mf(l,s,c),c};let _f=0;var Rl;const on=(Rl=class extends Oe{constructor(){super(),this.id="",this.name="",this.label="",this.description="",this.value="",this.disabled=!1,this.required=!1,this.optional=!1,this.form="",this.showError=!1,this.errorMessage="",this._width="md",this._hasUserInteracted=!1,this._internals=this.attachInternals()}get width(){return this._width}set width(i){this._width=Rl.VALID_WIDTHS.includes(i)?i:"full"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-select-${Date.now()}-${_f++}`),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}formResetCallback(){this.value=""}_handleSlotChange(){var i,l;const s=(i=this.shadowRoot)==null?void 0:i.querySelector('slot:not([name="description"])'),o=(l=this.shadowRoot)==null?void 0:l.querySelector("select");!s||!o||(o.querySelectorAll("option:not([hidden])").forEach(c=>c.remove()),s.assignedElements({flatten:!0}).forEach(c=>{var d;if(c instanceof o1){const h=document.createElement("option");h.value=c.value,h.textContent=c.label||((d=c.textContent)==null?void 0:d.trim())||"",h.disabled=c.disabled,h.selected=c.selected,o.appendChild(h)}}))}_setValue(){this._internals.setFormValue(this.value),this._manageRequire()}_manageRequire(){var i;const l=(i=this.shadowRoot)==null?void 0:i.querySelector("select");if(!l)return;const s=this.errorMessage||"Please select an option.";this.required&&!this.value?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},s,l)):(this._internals.ariaRequired="false",this._internals.setValidity({}),this._hasUserInteracted=!1)}_setValidityMessage(i=""){var l,s;const o=(l=this.shadowRoot)==null?void 0:l.querySelector("select");o&&(this.showError=!!i,(s=this.errorMessage)!=null&&s.trim()&&i!==""&&(i=this.errorMessage),this._internals.setValidity(i?{customError:!0}:{},i,o))}_validate(){var i;const l=(i=this.shadowRoot)==null?void 0:i.querySelector("select");if(!l)return;let s=l.validationMessage;this._manageRequire(),this._setValidityMessage(s)}checkValidity(){var i;const l=(i=this.shadowRoot)==null?void 0:i.querySelector("select");return l?l.checkValidity():!0}_handleInvalid(i){var l;i.preventDefault(),this._hasUserInteracted=!0,this._validate(),this.showError=!0;const s=(l=this.shadowRoot)==null?void 0:l.querySelector("select");if(s){const o=this._internals.form;o?Array.from(o.elements).find(c=>typeof c.checkValidity=="function"&&!c.checkValidity())===this&&s.focus():s.focus()}}_handleChange(i){const l=i.target;this.value=l.value,this._internals.setFormValue(this.value),this._hasUserInteracted&&this._validate(),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this._hasUserInteracted||(this._hasUserInteracted=!0),this._validate(),this.dispatchEvent(new Event("nys-blur"))}updated(i){var l;if(super.updated(i),i.has("value")){const s=(l=this.shadowRoot)==null?void 0:l.querySelector("select");s&&(s.value=this.value)}}render(){return G`
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
    `}},Rl.VALID_WIDTHS=["sm","md","lg","full"],Rl.styles=vf,Rl.formAssociated=!0,Rl);Ln([_({type:String})],on.prototype,"id",2);Ln([_({type:String,reflect:!0})],on.prototype,"name",2);Ln([_({type:String})],on.prototype,"label",2);Ln([_({type:String})],on.prototype,"description",2);Ln([_({type:String})],on.prototype,"value",2);Ln([_({type:Boolean,reflect:!0})],on.prototype,"disabled",2);Ln([_({type:Boolean,reflect:!0})],on.prototype,"required",2);Ln([_({type:Boolean,reflect:!0})],on.prototype,"optional",2);Ln([_({type:String})],on.prototype,"form",2);Ln([_({type:Boolean,reflect:!0})],on.prototype,"showError",2);Ln([_({type:String})],on.prototype,"errorMessage",2);Ln([_({reflect:!0})],on.prototype,"width",1);let I3=on;customElements.get("nys-select")||customElements.define("nys-select",I3);const Cf=Ie`
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
`;var xf=Object.defineProperty,ed=(i,l,s,o)=>{for(var c=void 0,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=h(l,s,c)||c);return c&&xf(l,s,c),c};const td=class extends Oe{constructor(){super(),this.id="",this.href=""}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-skipnav-${Date.now()}`)}_handleFocus(){var l;const s=(l=this.shadowRoot)==null?void 0:l.querySelector(".nys-skipnav__link");s==null||s.classList.add("show")}_handleBlur(){var l;const s=(l=this.shadowRoot)==null?void 0:l.querySelector(".nys-skipnav__link");s==null||s.classList.remove("show")}_handleClick(){const l=(this.href||"#main-content").replace("#",""),s=document.getElementById(l);s&&(s.setAttribute("tabindex","-1"),s.focus(),s.style.outline="none")}render(){return G`
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
    `}};td.styles=Cf;let Ks=td;ed([_({type:String})],Ks.prototype,"id");ed([_({type:String})],Ks.prototype,"href");customElements.get("nys-skipnav")||customElements.define("nys-skipnav",Ks);const nd=Ie`
  :host {
    /* Anything that can be overridden should be defined here */

    /* Global Stepper Styles */

    /* Typography */
    --_nys-stepper-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-stepper-font-weight: var(--nys-font-weight-semibold, 600);
    --_nys-stepper-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-stepper-font-family: var(
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
    --_nys-step-color: var(--nys-color-text, #1b1b1b);
    --_nys-stepper-background-color: var(--nys-color-surface-raised, #f6f6f6);
  }

  .nys-stepper {
    font-family: var(--_nys-stepper-font-family);
    font-size: var(--_nys-stepper-font-size);
    font-weight: var(--_nys-stepper-font-weight);
    line-height: var(--_nys-stepper-line-height);
    display: flex;
    flex-direction: column;
    counter-reset: step;
    background-color: var(--_nys-stepper-background-color);
    max-width: 100%;
    height: 100%;
  }

  .nys-stepper__header {
    display: flex;
    flex-direction: column;
    padding: var(--nys-space-400, 32px) var(--nys-space-400, 32px)
      var(--nys-space-150, 12px);
  }

  ::slotted(div[slot="actions"]) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: var(--nys-space-100, 8px);
    margin-bottom: var(--nys-space-300, 24px);
  }

  .nys-stepper__counter {
    display: none;
    text-decoration: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: auto;
    text-decoration-thickness: 7%; /* 1.12px */
    text-underline-offset: auto;
    text-underline-position: from-font;
    color: var(--nys-color-text, #1b1b1b);
    text-overflow: ellipsis;
    font-family: var(--nys-font-family-ui, "Proxima Nova");
    font-size: var(--nys-font-size-ui-md, 16px);
    font-style: normal;
    font-weight: 400;
    line-height: var(--nys-font-size-ui-md, 16px);
    cursor: pointer;
    width: fit-content;
  }

  .nys-stepper__steps {
    display: flex;
    flex-direction: column;
    padding: var(--nys-space-150, 12px) var(--nys-space-400, 32px)
      var(--nys-space-400, 32px);
    overflow-y: scroll;
    height: -webkit-fit-content;
    height: -moz-available;
    scrollbar-width: none;
    background:
    /* Shadow Cover TOP */
      linear-gradient(
          var(--nys-color-surface-raised, #f6f6f6) 30%,
          rgba(255, 255, 255, 0)
        )
        center top,
      /* Shadow Cover BOTTOM */
        linear-gradient(
          rgba(255, 255, 255, 0),
          var(--nys-color-surface-raised, #f6f6f6) 70%
        )
        center bottom,
      /* Shadow TOP */
        linear-gradient(to bottom, rgba(99, 99, 99, 0.2), rgba(0, 0, 0, 0)) top,
      /* Shadow BOTTOM */
        linear-gradient(to top, rgba(99, 99, 99, 0.2), rgba(0, 0, 0, 0)) bottom;

    background-repeat: no-repeat;
    background-size:
      100% 40px,
      100% 40px,
      100% 14px,
      100% 14px;
    background-attachment: local, local, scroll, scroll;
    background-color: var(--nys-color-surface-raised, #f6f6f6);
  }

  .nys-step {
    position: relative;
    counter-increment: step;
    display: flex;
    flex-direction: column;
  }

  .nys-step__contentwrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--nys-space-150, 12px);
    cursor: default;
    width: fit-content;
  }

  .nys-step__contentwrapper:focus-visible {
    outline: solid var(--nys-color-focus, #004dd1)
      var(--nys-border-width-md, 2px);
    outline-offset: var(--nys-space-2px, 2px);
    border-radius: var(--nys-radius-md, 4px);
  }

  .nys-step__linewrapper {
    width: 24px;
    display: flex;
    justify-content: center;
  }

  .nys-step__line {
    width: var(--nys-size-1px, 1px);
    height: var(--nys-size-300, 24px);
    border-radius: var(--nys-radius-round, 1776px);
    background: var(--nys-color-black-transparent-200, rgba(27, 27, 27, 0.2));
    margin: var(--nys-space-100, 8px) 0;
  }

  .nys-step__number {
    border-radius: var(--nys-radius-round, 1776px);
    border: var(--nys-size-1px, 1px) solid var(--nys-color-neutral-400, #909395);
    background: var(
      --nys-color-white-transparent-900,
      rgba(255, 255, 255, 0.9)
    );
    width: var(--nys-size-300, 24px);
    height: var(--nys-size-300, 24px);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--nys-color-text, #1b1b1b);
  }

  :host([previous]) .nys-step__number,
  :host([previous]) .nys-step__line,
  :host([current]) .nys-step__number,
  :host([current]) .nys-step__line {
    background-color: var(--nys-color-theme-stronger, #081b2b);
    color: var(--nys-color-text-reverse, #fff);
    border-color: var(--nys-color-theme-stronger, #081b2b);
  }

  :host([selected]) .nys-step__number {
    background-color: var(--nys-color-theme, #154973);
    color: var(--nys-color-text-reverse, #fff);
    border-color: var(--nys-color-theme, #154973);
    outline: var(--nys-size-50, 4px) solid var(--nys-color-theme-weak, #cddde9);
  }

  /* Hide the line wrapper in the last step */
  :host([first]) .nys-step__linewrapper {
    display: none !important;
  }

  .nys-step__content {
    display: flex;
    flex-direction: column;
    gap: var(--nys-space-100, 8px);
  }

  .nys-step__label {
    color: var(--_nys-step-color);
    font-family: var(--_nys-stepper-font-family);
    font-size: var(--_nys-stepper-font-size);
    font-weight: var(--_nys-stepper-font-weight);
    line-height: var(--_nys-stepper-line-height);
    line-height: var(--nys-font-size-ui-md, 16px);
    letter-spacing: var(--nys-font-letterspacing-ui-md, 0.044px);
    text-decoration-style: solid;
    text-decoration-skip-ink: auto;
    text-decoration-thickness: var(7%, 1.12px);
    text-underline-offset: auto;
  }

  :host([current]) .nys-step__label,
  :host([previous]) .nys-step__label {
    text-decoration-line: underline;
  }

  :host([current]) .nys-step__contentwrapper,
  :host([previous]) .nys-step__contentwrapper {
    cursor: pointer;
  }

  :host([selected]) .nys-step__label {
    /* UI/Medium/Bold */
    font-weight: 700;
    text-decoration-line: none;
  }

  :host([selected]) .nys-step__contentwrapper {
    cursor: default;
  }

  :host([selected]) .nys-step__contentwrapper:focus-visible {
    outline-offset: 6px;
  }

  @media (max-width: 1023px) {
    .nys-stepper {
      max-width: 1023px;
      width: 100%;
    }

    .nys-stepper__header {
      flex-direction: row-reverse;
      justify-content: space-between;
      padding: var(--nys-space-150, 12px);
      gap: var(--nys-space-200, 16px);
    }

    .nys-stepper__headertext {
      flex: 1 1 0;
      min-width: 0;
    }

    ::slotted(div[slot="actions"]) {
      margin-bottom: 0;
      min-width: 0;
      justify-content: end;
    }

    .nys-stepper__counter {
      display: block;
    }

    .nys-stepper__steps {
      flex-direction: row;
      gap: var(--nys-space-2px, 2px);
      padding: 0;
    }

    .nys-stepper__steps::slotted(*) {
      flex: 1;
    }

    .nys-step__number {
      border-radius: 0;
      border: none;
      background-color: var(--nys-color-neutral-200, #bec0c1);
      height: var(--nys-size-100, 8px);
      width: 100%;
      color: transparent;
    }

    :host([previous]) .nys-step__number,
    :host([current]) .nys-step__number {
      background-color: var(--nys-color-neutral-900, #1b1b1b);
      color: transparent;
    }

    :host([selected]) .nys-step__number {
      background-color: var(--nys-color-theme-mid, #457aa5);
      outline: none;
    }

    .nys-step__content,
    .nys-step__linewrapper {
      display: none;
    }

    .nys-step__contentwrapper {
      cursor: default;
      pointer-events: none;
      width: auto;
    }

    /* ---------------- Expanded Mode ---------------- */
    :host([isCompactExpanded]) .nys-step__content,
    :host([isCompactExpanded]) .nys-step__linewrapper {
      display: flex;
    }

    :host([isCompactExpanded]) .nys-stepper {
    }

    :host([isCompactExpanded]) .nys-stepper__header {
      padding-bottom: var(--nys-space-250, 20px);
    }

    :host([isCompactExpanded]) .nys-stepper__steps {
      width: -webkit-fill-available;
      width: -moz-available;
      z-index: 9999;
      overflow-y: auto;
      flex-direction: column;
      gap: 0;
      padding: var(--nys-space-150, 12px) var(--nys-space-400, 32px)
        var(--nys-space-400, 32px);
    }

    :host([isCompactExpanded]) .nys-stepper__steps::slotted(*) {
      flex: none;
    }

    :host([isCompactExpanded]) .nys-step__number {
      border-radius: var(--nys-radius-round, 1776px);
      border: 1px solid var(--nys-color-neutral-400, #909395);
      background: var(
        --nys-color-white-transparent-900,
        rgba(255, 255, 255, 0.9)
      );
      width: var(--nys-space-300, 24px);
      height: var(--nys-space-300, 24px);
      color: var(--nys-color-text, #1b1b1b);
    }

    :host([isCompactExpanded][previous]) .nys-step__number,
    :host([isCompactExpanded][previous]) .nys-step__line,
    :host([isCompactExpanded][current]) .nys-step__number,
    :host([isCompactExpanded][current]) .nys-step__line {
      background: var(--nys-color-theme-stronger, #081b2b);
      color: var(--nys-color-text-reverse, #fff);
      border-color: var(--nys-color-theme-stronger, #081b2b);
    }

    :host([isCompactExpanded][selected]) .nys-step__number {
      background: var(--nys-color-theme, #154973);
      color: var(--nys-color-text-reverse, #fff);
      border-color: var(--nys-color-theme, #154973);
      outline: 4px solid var(--nys-color-theme-weak, #cddde9);
    }

    :host([isCompactExpanded]) .nys-step__contentwrapper {
      pointer-events: all;
    }
  }
`;var wf=Object.defineProperty,j1=(i,l,s,o)=>{for(var c=void 0,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=h(l,s,c)||c);return c&&wf(l,s,c),c};const ad=class extends Oe{constructor(){super(...arguments),this.selected=!1,this.current=!1,this.label="",this.href="",this.isCompactExpanded=!1,this.stepNumber=0}_handleActivate(l){typeof this.onClick=="function"&&this.onClick(l);const s=new CustomEvent("nys-step-click",{bubbles:!0,composed:!0,cancelable:!0,detail:{href:this.href,label:this.label}});(this.hasAttribute("previous")||this.current)&&!this.selected&&(this.dispatchEvent(s),!s.defaultPrevented&&this.href&&(window.location.href=this.href))}_handleKeydown(l){(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this._handleActivate(l))}render(){return G`
      <div class="nys-step">
        <div class="nys-step__linewrapper">
          <div class="nys-step__line"></div>
        </div>
        <div
          class="nys-step__contentwrapper"
          @click=${this._handleActivate}
          @keydown=${this._handleKeydown}
          role="button"
          aria-label="${this.label} Step"
          ?disabled=${!(this.selected||this.current||this.hasAttribute("previous"))}
        >
          <div class="nys-step__number" tabindex="-1" aria-hidden="true">
            ${this.stepNumber}
          </div>
          <div class="nys-step__content" tabindex="-1" aria-hidden="true">
            <div
              class="nys-step__label"
              tabindex=${this.selected||this.current||this.hasAttribute("previous")?"0":"-1"}
              aria-hidden="true"
            >
              ${this.label}
            </div>
          </div>
        </div>
      </div>
    `}};ad.styles=nd;let ka=ad;j1([_({type:Boolean,reflect:!0})],ka.prototype,"selected");j1([_({type:Boolean,reflect:!0})],ka.prototype,"current");j1([_({type:String})],ka.prototype,"label");j1([_({type:String})],ka.prototype,"href");j1([_({type:Boolean})],ka.prototype,"isCompactExpanded");j1([_({type:Function})],ka.prototype,"onClick");j1([_({type:Number})],ka.prototype,"stepNumber");customElements.get("nys-step")||customElements.define("nys-step",ka);var kf=Object.defineProperty,yr=(i,l,s,o)=>{for(var c=void 0,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=h(l,s,c)||c);return c&&kf(l,s,c),c};const ld=class extends Oe{constructor(){super(),this.id="",this.name="",this.label="",this.counterText="initial",this.isCompactExpanded=!1,this._stepsNumbered=!1,this._onStepClick=async l=>{const s=l.composedPath().find(h=>h instanceof HTMLElement&&h.tagName.toLowerCase()==="nys-step");if(!s)return;const o=Array.from(this.querySelectorAll("nys-step")),c=o.findIndex(h=>h.hasAttribute("current")),d=o.indexOf(s);c!==-1&&d>c||s.hasAttribute("selected")||(o.forEach(h=>h.removeAttribute("selected")),s.setAttribute("selected",""),this._updateCounter(),this.isCompactExpanded=!1)}}connectedCallback(){super.connectedCallback(),this.addEventListener("nys-step-click",this._onStepClick),requestAnimationFrame(()=>this._validateSteps())}disconnectedCallback(){this.removeEventListener("nys-step-click",this._onStepClick),super.disconnectedCallback()}_validateSteps(){Array.from(this.children).forEach(l=>{const s=l instanceof HTMLElement&&l.tagName.toLowerCase()==="nys-step",o=l instanceof HTMLElement&&l.hasAttribute("slot")&&l.getAttribute("slot")==="actions";!s&&!o&&(console.warn("Only <nys-step> elements or the <div slot='actions'> container are allowed as direct children of <nys-stepper>. Removing:",l),l.remove())})}_validateButtonSlot(l){const s=l.target.assignedElements();if(s.length!==1||s[0].tagName.toLowerCase()!=="div"){console.warn("The 'actions' slot must have exactly one <div> as a direct child.");return}const o=s[0];Array.from(o.children).forEach(c=>{c instanceof HTMLElement&&c.tagName.toLowerCase()==="nys-button"?(c.setAttribute("size","sm"),c.hasAttribute("fullWidth")&&(c.style.flex="1 1 0")):(console.warn("The <div> inside 'actions' slot only accepts <nys-button> elements. Removing invalid node:",c),c.remove())})}_updateCounter(){if(this.isCompactExpanded){this.counterText="Back to Form",this.style.height="-webkit-fit-content",this.style.height="-moz-fit-content",this.style.height="fit-content";return}else this.style.height="auto";const l=this.querySelectorAll("nys-step"),s=Array.from(l).findIndex(c=>c.hasAttribute("selected")),o=l.length;this.counterText=s>=0?`Step ${s+1} of ${o}`:`Step 1 of ${o}`}updated(){const l=this.querySelectorAll("nys-step");this._stepsNumbered||(l.forEach((d,h)=>{d.stepNumber=h+1}),this._stepsNumbered=!0);let s=!1,o=!1,c=!1;l.forEach((d,h)=>{d.hasAttribute("current")&&(c?d.removeAttribute("current"):c=!0),h===0?d.setAttribute("first",""):d.removeAttribute("first"),d.hasAttribute("current")?(s=!0,d.removeAttribute("previous")):s?d.removeAttribute("previous"):d.setAttribute("previous",""),d.hasAttribute("selected")&&(s||o?d.removeAttribute("selected"):o=!0),this.hasAttribute("isCompactExpanded")?d.setAttribute("isCompactExpanded",""):d.removeAttribute("isCompactExpanded")}),o||(c?l.forEach(d=>{d.hasAttribute("current")&&!o&&(d.setAttribute("selected",""),o=!0)}):l.length>0&&(l[0].setAttribute("current",""),l[0].setAttribute("selected",""))),this._updateCounter()}_toggleCompact(){this.isCompactExpanded=!this.isCompactExpanded}_handleCounterKeydown(l){(l.key===" "||l.key==="Enter")&&(l.preventDefault(),this._toggleCompact())}render(){return G`
      <div class="nys-stepper" id=${this.id} name=${this.name}>
        <div class="nys-stepper__header">
          <slot name="actions" @slotchange=${this._validateButtonSlot}></slot>
          <div class="nys-stepper__headertext">
            <div class="nys-stepper__label">${this.label}</div>
            <div
              class="nys-stepper__counter"
              @click=${this._toggleCompact}
              @keydown=${this._handleCounterKeydown}
              role="button"
              tabindex="0"
              aria-label=${this.isCompactExpanded?"Collapse step navigation to view the form":`Expand step navigation. You are on ${this.counterText}`}
              aria-expanded=${this.isCompactExpanded?"true":"false"}
            >
              ${this.counterText}
            </div>
          </div>
        </div>
        <slot class="nys-stepper__steps"></slot>
      </div>
    `}};ld.styles=nd;let Z1=ld;yr([_({type:String})],Z1.prototype,"id");yr([_({type:String,reflect:!0})],Z1.prototype,"name");yr([_({type:String})],Z1.prototype,"label");yr([_({type:String})],Z1.prototype,"counterText");yr([_({type:Boolean,reflect:!0})],Z1.prototype,"isCompactExpanded");customElements.get("nys-stepper")||customElements.define("nys-stepper",Z1);const Sf=Ie`
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
`;var Ef=Object.defineProperty,Df=Object.getOwnPropertyDescriptor,Ht=(i,l,s,o)=>{for(var c=o>1?void 0:o?Df(l,s):l,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=(o?h(l,s,c):h(c))||c);return o&&c&&Ef(l,s,c),c};let Mf=0;var Pa;const Et=(Pa=class extends Oe{constructor(){super(),this.id="",this.name="",this.label="",this.description="",this.placeholder="",this.value="",this.disabled=!1,this.readonly=!1,this.required=!1,this.optional=!1,this.form="",this.maxlength=null,this.width="full",this.rows=4,this._resize="vertical",this.showError=!1,this.errorMessage="",this._hasUserInteracted=!1,this._internals=this.attachInternals()}get resize(){return this._resize}set resize(i){this._resize=Pa.VALID_RESIZE.includes(i)?i:"vertical"}async updated(i){await Promise.resolve(),i.has("width")&&(this.width=Pa.VALID_WIDTHS.includes(this.width)?this.width:"full"),i.has("rows")&&(this.rows=this.rows??4)}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-textarea-${Date.now()}-${Mf++}`),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}formResetCallback(){this.value=""}_setValue(){this._internals.setFormValue(this.value),this._manageRequire()}_manageRequire(){var i;const l=(i=this.shadowRoot)==null?void 0:i.querySelector("textarea");if(!l)return;const s=this.errorMessage||"This field is required";this.required&&!this.value?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},s,l)):(this._internals.ariaRequired="false",this._internals.setValidity({}),this._hasUserInteracted=!1)}_setValidityMessage(i=""){var l,s;const o=(l=this.shadowRoot)==null?void 0:l.querySelector("textarea");o&&(this.showError=!!i,(s=this.errorMessage)!=null&&s.trim()&&i!==""&&(i=this.errorMessage),this._internals.setValidity(i?{customError:!0}:{},i,o))}_validate(){var i;const l=(i=this.shadowRoot)==null?void 0:i.querySelector("textarea");if(!l)return;let s=l.validationMessage;this._setValidityMessage(s)}checkValidity(){var i;const l=(i=this.shadowRoot)==null?void 0:i.querySelector("textarea");return l?l.checkValidity():!0}_handleInvalid(i){var l;i.preventDefault(),this._hasUserInteracted=!0,this._validate();const s=(l=this.shadowRoot)==null?void 0:l.querySelector("textarea");if(s){const o=this._internals.form;o?Array.from(o.elements).find(c=>typeof c.checkValidity=="function"&&!c.checkValidity())===this&&s.focus():s.focus()}}_handleInput(i){const l=i.target;this.value=l.value,this._internals.setFormValue(this.value),this._hasUserInteracted&&this._validate(),this.dispatchEvent(new CustomEvent("nys-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this._hasUserInteracted||(this._hasUserInteracted=!0),this._validate(),this.dispatchEvent(new Event("nys-blur"))}_handleSelect(i){const l=i.target;this.value=l.value,this.dispatchEvent(new CustomEvent("nys-select",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleSelectionChange(i){const l=i.target;this.value=l.value,this.dispatchEvent(new CustomEvent("selectionchange",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return G`
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
          aria-disabled=${Re(this.disabled?"true":void 0)}
          aria-required=${Re(this.required?"true":void 0)}
          aria-label=${Re(this.label||void 0)}
          aria-description=${Re(this.description||void 0)}
          placeholder=${Re(this.placeholder?this.placeholder:void 0)}
          maxlength=${Re(this.maxlength!==""?this.maxlength:void 0)}
          .rows=${this.rows}
          form=${Re(this.form||void 0)}
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
    `}},Pa.VALID_WIDTHS=["sm","md","lg","full"],Pa.VALID_RESIZE=["vertical","none"],Pa.styles=Sf,Pa.formAssociated=!0,Pa);Ht([_({type:String})],Et.prototype,"id",2);Ht([_({type:String,reflect:!0})],Et.prototype,"name",2);Ht([_({type:String})],Et.prototype,"label",2);Ht([_({type:String})],Et.prototype,"description",2);Ht([_({type:String})],Et.prototype,"placeholder",2);Ht([_({type:String})],Et.prototype,"value",2);Ht([_({type:Boolean,reflect:!0})],Et.prototype,"disabled",2);Ht([_({type:Boolean,reflect:!0})],Et.prototype,"readonly",2);Ht([_({type:Boolean,reflect:!0})],Et.prototype,"required",2);Ht([_({type:Boolean,reflect:!0})],Et.prototype,"optional",2);Ht([_({type:String})],Et.prototype,"form",2);Ht([_({type:Number})],Et.prototype,"maxlength",2);Ht([_({reflect:!0})],Et.prototype,"width",2);Ht([_({type:Number})],Et.prototype,"rows",2);Ht([_({reflect:!0})],Et.prototype,"resize",1);Ht([_({type:Boolean,reflect:!0})],Et.prototype,"showError",2);Ht([_({type:String})],Et.prototype,"errorMessage",2);let id=Et;customElements.get("nys-textarea")||customElements.define("nys-textarea",id);const Lf=Ie`
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
`;var Af=Object.defineProperty,zf=Object.getOwnPropertyDescriptor,dt=(i,l,s,o)=>{for(var c=o>1?void 0:o?zf(l,s):l,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=(o?h(l,s,c):h(c))||c);return o&&c&&Af(l,s,c),c};let Tf=0;var Wa;const st=(Wa=class extends Oe{constructor(){super(),this.id="",this.name="",this._type="text",this.label="",this.description="",this.placeholder="",this.value="",this.disabled=!1,this.readonly=!1,this.required=!1,this.optional=!1,this.form="",this.pattern="",this.maxlength=null,this.width="full",this.step=null,this.min=null,this.max=null,this.showError=!1,this.errorMessage="",this.showPassword=!1,this._originalErrorMessage="",this._hasUserInteracted=!1,this._maskPatterns={tel:"(___) ___-____"},this._internals=this.attachInternals()}get type(){return this._type}set type(i){this._type=Wa.VALID_TYPES.includes(i)?i:"text"}async updated(i){var l,s;if(i.has("width")&&(await Promise.resolve(),this.width=Wa.VALID_WIDTHS.includes(this.width)?this.width:"full"),i.has("disabled")&&(this._validateButtonSlot("startButton"),this._validateButtonSlot("endButton")),i.has("type")){const o=this._maskPatterns[this.type],c=(l=this.shadowRoot)==null?void 0:l.querySelector("input");if(c)if(o)c.maxLength=o.length,this._updateOverlay(c.value,o);else{c.removeAttribute("maxLength");const d=(s=this.shadowRoot)==null?void 0:s.querySelector(".nys-textinput__mask-overlay");d&&(d.textContent="")}}}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-textinput-${Date.now()}-${Tf++}`),this._originalErrorMessage=this.errorMessage??"",this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}formResetCallback(){this.value=""}_setValue(){this._internals.setFormValue(this.value),this._manageRequire()}_manageRequire(){var i,l;const s=(i=this.shadowRoot)==null?void 0:i.querySelector("input");if(!s)return;const o=this.errorMessage||"This field is required";this.required&&(!this.value||((l=this.value)==null?void 0:l.trim())==="")?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},o,s)):(this._internals.ariaRequired="false",this._internals.setValidity({}),this._hasUserInteracted=!1)}_setValidityMessage(i=""){var l,s;const o=(l=this.shadowRoot)==null?void 0:l.querySelector("input");if(!o)return;this.showError=!!i,(s=this._originalErrorMessage)!=null&&s.trim()&&i!==""?this.errorMessage=this._originalErrorMessage:this.errorMessage=i;const c=i?{customError:!0}:{};this._internals.setValidity(c,this.errorMessage,o)}_validate(){var i;const l=(i=this.shadowRoot)==null?void 0:i.querySelector("input");if(!l)return;const s=l.validity;let o="";s.valueMissing?o="This field is required":s.typeMismatch?o="Invalid format for this type":s.patternMismatch?o="Invalid format":s.tooShort?o=`Value is too short. Minimum length is ${l.minLength}`:s.tooLong?o=`Value is too long. Maximum length is ${l.maxLength}`:s.rangeUnderflow?o=`Value must be at least ${l.min}`:s.rangeOverflow?o=`Value must be at most ${l.max}`:s.stepMismatch?o="Invalid step value":o=l.validationMessage,this._setValidityMessage(o)}checkValidity(){var i;const l=(i=this.shadowRoot)==null?void 0:i.querySelector("input");return l?l.checkValidity():!0}_handleInvalid(i){var l;i.preventDefault(),this._hasUserInteracted=!0,this._validate();const s=(l=this.shadowRoot)==null?void 0:l.querySelector("input");if(s){const o=this._internals.form;o?Array.from(o.elements).find(c=>typeof c.checkValidity=="function"&&!c.checkValidity())===this&&s.focus():s.focus()}}_togglePasswordVisibility(){this.showPassword=!this.showPassword}_updateOverlay(i,l){var s;const o=(s=this.shadowRoot)==null?void 0:s.querySelector(".nys-textinput__mask-overlay");if(!o)return;const c=i,d=l.slice(c.length);o.textContent=c+d}_applyMask(i,l){const s=i.replace(/\D/g,"");let o="";if(this.type==="tel")return s.length>0&&(o="("+s.substring(0,3)),s.length>=4&&(o+=") "+s.substring(3,6)),s.length>6&&(o+="-"+s.substring(6,10)),o;let c=0;for(let d=0;d<l.length;d++)if(l[d]==="_"||l[d].match(/[d9]/i))if(c<s.length)o+=s[c++];else break;else o+=l[d];return o}_handleInput(i){const l=i.target;let s=l.value;const o=this._maskPatterns[this.type];o&&(s=this._applyMask(s,o),l.value=s,this._updateOverlay(s,o)),this.value=s,this._internals.setFormValue(this.value),this._hasUserInteracted&&this._validate(),this.dispatchEvent(new CustomEvent("nys-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this._hasUserInteracted||(this._hasUserInteracted=!0),this._validate(),this.dispatchEvent(new Event("nys-blur"))}_validateButtonSlot(i){var l,s;const o=(l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="'+i+'"]'),c=(s=this.shadowRoot)==null?void 0:s.querySelector(".nys-textinput__buttoncontainer");if(!o||!c)return;const d=o.assignedElements();let h=!1;d.forEach(g=>{g instanceof HTMLElement&&g.tagName.toLowerCase()==="nys-button"&&!h?(h=!0,g.setAttribute("size","sm"),g.setAttribute("variant","primary"),this.disabled?g.setAttribute("disabled","true"):g.removeAttribute("disabled")):(console.warn("The '"+i+"' slot only accepts a single <nys-button> element. Removing invalid or extra node:",g),g.remove())}),i==="startButton"?c.classList.toggle("has-start-button",h):i==="endButton"&&c.classList.toggle("has-end-button",h)}render(){return G`
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
              placeholder=${Re(this.placeholder?this.placeholder:void 0)}
              pattern=${Re(this.pattern?this.pattern:void 0)}
              min=${Re(this.min!==""?this.min:void 0)}
              maxlength=${Re(this.maxlength!==""?this.maxlength:void 0)}
              step=${Re(this.step!==""?this.step:void 0)}
              max=${Re(this.max!==""?this.max:void 0)}
              form=${Re(this.form?this.form:void 0)}
              @input=${this._handleInput}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
            />
            ${this.type==="password"?G` <nys-button
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
    `}},Wa.VALID_TYPES=["email","number","password","search","tel","text","url"],Wa.VALID_WIDTHS=["sm","md","lg","full"],Wa.styles=Lf,Wa.formAssociated=!0,Wa);dt([_({type:String})],st.prototype,"id",2);dt([_({type:String,reflect:!0})],st.prototype,"name",2);dt([_({reflect:!0})],st.prototype,"type",1);dt([_({type:String})],st.prototype,"label",2);dt([_({type:String})],st.prototype,"description",2);dt([_({type:String})],st.prototype,"placeholder",2);dt([_({type:String})],st.prototype,"value",2);dt([_({type:Boolean,reflect:!0})],st.prototype,"disabled",2);dt([_({type:Boolean,reflect:!0})],st.prototype,"readonly",2);dt([_({type:Boolean,reflect:!0})],st.prototype,"required",2);dt([_({type:Boolean,reflect:!0})],st.prototype,"optional",2);dt([_({type:String})],st.prototype,"form",2);dt([_({type:String})],st.prototype,"pattern",2);dt([_({type:Number})],st.prototype,"maxlength",2);dt([_({reflect:!0})],st.prototype,"width",2);dt([_({type:Number})],st.prototype,"step",2);dt([_({type:Number})],st.prototype,"min",2);dt([_({type:Number})],st.prototype,"max",2);dt([_({type:Boolean,reflect:!0})],st.prototype,"showError",2);dt([_({type:String})],st.prototype,"errorMessage",2);dt([nn()],st.prototype,"showPassword",2);let rd=st;customElements.get("nys-textinput")||customElements.define("nys-textinput",rd);const Rf=Ie`
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
`;var Hf=Object.defineProperty,Of=Object.getOwnPropertyDescriptor,na=(i,l,s,o)=>{for(var c=o>1?void 0:o?Of(l,s):l,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=(o?h(l,s,c):h(c))||c);return o&&c&&Hf(l,s,c),c};let $f=0;var Hl;const qn=(Hl=class extends Oe{constructor(){super(),this.id="",this.name="",this.value="",this.checked=!1,this.disabled=!1,this.noIcon=!1,this.label="",this.description="",this._size="md",this.form="",this._internals=this.attachInternals()}get size(){return this._size}set size(i){this._size=Hl.VALID_SIZES.includes(i)?i:"md"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-toggle-${Date.now()}-${$f++}`)}updated(i){(i.has("checked")||i.has("value"))&&this._internals.setFormValue(this.checked?this.value:null)}_emitChangeEvent(){this.dispatchEvent(new CustomEvent("nys-change",{detail:{checked:this.checked},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this.dispatchEvent(new Event("nys-blur"))}_handleChange(i){const{checked:l}=i.target;this.checked=l,this._emitChangeEvent()}_handleKeyDown(i){!this.disabled&&(i.key===" "||i.key==="Enter")&&(i.preventDefault(),this.checked=!this.checked,this._emitChangeEvent())}render(){return G`
      <label class="nys-toggle">
        <div class="nys-toggle__content">
          <div class="nys-toggle__toggle">
            <input
              id="${this.id}"
              type="checkbox"
              name="${Re(this.name?this.name:void 0)}"
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
                ${this.noIcon?"":G`<nys-icon
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
    `}},Hl.VALID_SIZES=["sm","md"],Hl.styles=Rf,Hl.formAssociated=!0,Hl);na([_({type:String})],qn.prototype,"id",2);na([_({type:String,reflect:!0})],qn.prototype,"name",2);na([_({type:String})],qn.prototype,"value",2);na([_({type:Boolean,reflect:!0})],qn.prototype,"checked",2);na([_({type:Boolean,reflect:!0})],qn.prototype,"disabled",2);na([_({type:Boolean})],qn.prototype,"noIcon",2);na([_({type:String})],qn.prototype,"label",2);na([_({type:String})],qn.prototype,"description",2);na([_({reflect:!0})],qn.prototype,"size",1);na([_({type:String})],qn.prototype,"form",2);let sd=qn;customElements.get("nys-toggle")||customElements.define("nys-toggle",sd);const Uf=Ie`
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
`;var Nf=Object.defineProperty,Vf=Object.getOwnPropertyDescriptor,Yl=(i,l,s,o)=>{for(var c=o>1?void 0:o?Vf(l,s):l,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=(o?h(l,s,c):h(c))||c);return o&&c&&Nf(l,s,c),c};let Bf=0;const od=class extends Oe{constructor(){super(),this.id="",this.text="",this.inverted=!1,this.focusable=!1,this._active=!1,this._userHasSetPosition=!1,this._originalUserPosition=null,this._internallyUpdatingPosition=!1,this._position=null,this._handleTooltipEnter=()=>{if(this._active=!0,this._addScrollListeners(),this._userHasSetPosition&&this._originalUserPosition&&this._doesPositionFit(this._originalUserPosition)){this.position=this._originalUserPosition,this.updateComplete.then(()=>{var l;const s=(l=this.shadowRoot)==null?void 0:l.querySelector(".nys-tooltip__content");s&&this._shiftTooltipIntoViewport(s)});return}this.autoPositionTooltip()},this._handleBlurOrMouseLeave=()=>{var l;this._active=!1,this._removeScrollListeners();const s=(l=this.shadowRoot)==null?void 0:l.querySelector(".nys-tooltip__content");s&&this._resetTooltipPositioningStyles(s)},this._handleScrollOrResize=()=>{this._active&&(this._userHasSetPosition&&this._originalUserPosition?this._doesPositionFit(this._originalUserPosition)?(this._setInternalPosition(this._originalUserPosition),this.updateComplete.then(()=>{var l;const s=(l=this.shadowRoot)==null?void 0:l.querySelector(".nys-tooltip__content");s&&this._shiftTooltipIntoViewport(s)})):this.autoPositionTooltip():this.autoPositionTooltip())},this._handleEscapeKey=l=>{var s;if(l.key==="Escape"&&this._active){this._active=!1,this._removeScrollListeners();const o=(s=this.shadowRoot)==null?void 0:s.querySelector(".nys-tooltip__content");o&&this._resetTooltipPositioningStyles(o)}}}get position(){return this._position}set position(l){const s=this._position;this._position=l,this.requestUpdate("position",s),this._internallyUpdatingPosition||(this._userHasSetPosition=l!==null,this._originalUserPosition=l)}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-tooltip-${Date.now()}-${Bf++}`),window.addEventListener("keydown",this._handleEscapeKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._handleEscapeKey)}get _firstAssignedEl(){var l;const s=(l=this.shadowRoot)==null?void 0:l.querySelector("slot");return s==null?void 0:s.assignedElements({flatten:!0})[0]}firstUpdated(){var l;const s=(l=this.shadowRoot)==null?void 0:l.querySelector("slot");s&&s.addEventListener("slotchange",()=>{const o=this._firstAssignedEl;o&&this._applyFocusBehavior(o)})}updated(l){super.updated(l);const s=this._firstAssignedEl;s&&l.has("text")&&this._passAria(s)}_addScrollListeners(){window.addEventListener("scroll",this._handleScrollOrResize,!0),window.addEventListener("resize",this._handleScrollOrResize)}_removeScrollListeners(){window.removeEventListener("scroll",this._handleScrollOrResize,!0),window.removeEventListener("resize",this._handleScrollOrResize)}_passAria(l){const s=l.tagName.toLowerCase();if(s.startsWith("nys-"))if(s==="nys-icon"){const o=l.getAttribute("ariaLabel")||"",c=o?`${o}, ${this.text}`:this.text;l.setAttribute("ariaLabel",c)}else l.setAttribute("ariaDescription",this.text)}async _applyFocusBehavior(l){var s;if(this.focusable)if(l.tagName.toLowerCase()==="nys-icon"){"updateComplete"in l&&await l.updateComplete;const o=(s=l.shadowRoot)==null?void 0:s.querySelector("svg");o&&o.setAttribute("tabindex","0")}else l.setAttribute("tabindex","0")}_doesPositionFit(l){var s,o;const c=(s=this.shadowRoot)==null?void 0:s.querySelector(".nys-tooltip__wrapper"),d=(o=this.shadowRoot)==null?void 0:o.querySelector(".nys-tooltip__content");if(!c||!d||l==null)return;const h=c.getBoundingClientRect(),g=d.getBoundingClientRect(),y=8,p={top:h.top-y,left:h.left-y,bottom:window.innerHeight-h.bottom-y,right:window.innerWidth-h.right-y};return{top:p.top>=g.height,bottom:p.bottom>=g.height,left:p.left>=g.width,right:p.right>=g.width}[l]}async autoPositionTooltip(){var l,s;const o=(l=this.shadowRoot)==null?void 0:l.querySelector(".nys-tooltip__wrapper"),c=(s=this.shadowRoot)==null?void 0:s.querySelector(".nys-tooltip__content");if(!o||!c)return;const d=o.getBoundingClientRect(),h=8,g={top:d.top-h,left:d.left-h,bottom:window.innerHeight-d.bottom-h,right:window.innerWidth-d.right-h};let y=["top","bottom","right","left"];if(this._userHasSetPosition&&this._originalUserPosition){const w=this._originalUserPosition;w==="left"?y=["left","right","top","bottom"]:w==="right"?y=["right","left","top","bottom"]:w==="top"?y=["top","bottom","right","left"]:w==="bottom"&&(y=["bottom","top","right","left"])}for(const w of y)if(this._doesPositionFit(w)){this._setInternalPosition(w),await this.updateComplete,this._shiftTooltipIntoViewport(c);return}let p="top",b=g.top;for(const w of y)g[w]>b&&(b=g[w],p=w);this._setInternalPosition(p),await this.updateComplete,this._shiftTooltipIntoViewport(c)}_setInternalPosition(l){this._internallyUpdatingPosition=!0,this.position=l,this._internallyUpdatingPosition=!1}_shiftTooltipIntoViewport(l){var s;const o=((s=this.shadowRoot)==null?void 0:s.querySelector(".nys-tooltip__wrapper")).getBoundingClientRect(),c=l.getBoundingClientRect(),d=o.left+o.width/2,h=c.left<0,g=c.right>window.innerWidth;this._resetTooltipPositioningStyles(l),h?(l.style.left="0px",l.style.transform="none"):g&&(l.style.right="0px",l.style.left="auto",l.style.transform="none");const y=l.getBoundingClientRect(),p=(d-y.left)/y.width,b=Math.max(0,Math.min(1,p))*100;l.style.setProperty("--arrow-offset-x",`${b}%`)}_resetTooltipPositioningStyles(l){l.style.left="",l.style.right="",l.style.transform=""}render(){var l;return G`
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
        ${(l=this.text)!=null&&l.trim()?G`<div
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
    `}};od.styles=Uf;let c1=od;Yl([_({type:String})],c1.prototype,"id",2);Yl([_({type:String})],c1.prototype,"text",2);Yl([_({type:Boolean,reflect:!0})],c1.prototype,"inverted",2);Yl([_({type:Boolean,reflect:!0})],c1.prototype,"focusable",2);Yl([nn()],c1.prototype,"_active",2);Yl([_({type:String,reflect:!0})],c1.prototype,"position",1);customElements.get("nys-tooltip")||customElements.define("nys-tooltip",c1);const qf=Ie`
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
`,jf=`<svg xmlns="http://www.w3.org/2000/svg" width="91" height="55" viewBox="0 0 91 55" fill="none">
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
</svg>`;var Zf=Object.defineProperty,Y1=(i,l,s,o)=>{for(var c=void 0,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=h(l,s,c)||c);return c&&Zf(l,s,c),c};const cd=class extends Oe{constructor(){super(...arguments),this.trustbarVisible=!1,this.searchDropdownVisible=!1,this.languageVisible=!1,this.isSearchFocused=!1,this.hideTranslate=!1,this.hideSearch=!1,this.languages=[["English",""],["Español","es"],["中文","zh"],["繁體中文","zh-traditional"],["Русский","ru"],["יידיש","yi"],["বাংলা","bn"],["한국어","ko"],["Kreyòl Ayisyen","ht"],["Italiano","it"],["العربية","ar"],["Polski","pl"],["Français","fr"],["اردو","ur"]]}_getNysLogo(){return new DOMParser().parseFromString(jf,"image/svg+xml").documentElement}_toggleTrustbar(){this.trustbarVisible=!this.trustbarVisible,this.trustbarVisible&&(this.languageVisible=!1,this.searchDropdownVisible=!1)}_toggleLanguageList(){this.languageVisible=!this.languageVisible,this.languageVisible&&(this.trustbarVisible=!1,this.searchDropdownVisible=!1)}_toggleSearchDropdown(){this.searchDropdownVisible=!this.searchDropdownVisible,this.searchDropdownVisible&&(this.trustbarVisible=!1,this.languageVisible=!1)}_handleSearchFocus(){this.isSearchFocused=!0,this.trustbarVisible=!1,this.languageVisible=!1}_handleSearchBlur(){this.isSearchFocused=!1}_handleSearchKeyup(l){var s;if(l.key==="Escape"&&(this._handleSearchBlur(),l.target.blur()),l.key==="Enter"){const o=(s=l.target.value)==null?void 0:s.trim();o!==""&&this._handleSearch(o)}}_handleSearchButton(l){var s,o;const c=(o=((s=this.shadowRoot)==null?void 0:s.getElementById(l)).value)==null?void 0:o.trim();c!==""&&this._handleSearch(c)}_handleSearch(l){window.location.href=`https://search.its.ny.gov/search/search.html?btnG=Search&client=default_frontend&output=xml_no_dtd&proxystylesheet=default_frontend&ulang=en&sort=date:D:L:d1&entqr=3&entqrm=0&wc=200&wc_mc=1&oe=UTF-8&ie=UTF-8&ud=1&site=default_collection&q=${l}+inurl:${window.location.hostname}&site=default_collection`}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return G`
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
                @keydown="${l=>{(l.code==="Enter"||l.code==="Space"||l.key==="Enter"||l.key===" ")&&this._toggleTrustbar()}}"
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
              ${this.hideTranslate?null:G`<div class="nys-unavheader__translatewrapper">
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
                    ${this.isSearchFocused?null:G`<div class="nys-unavheader--lg nys-unavheader--xl">
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
                      ${this.languages.map(([l,s])=>G`<a
                            class="nys-unavheader__languagelink"
                            target="_self"
                            href="https://${s?s+".":""}${window.location.hostname}"
                            >${l}</a
                          >`)}
                    </div>
                  </div>`}
              ${this.hideSearch?null:G` <div
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
    `}};cd.styles=qf;let Sa=cd;Y1([_({type:Boolean})],Sa.prototype,"trustbarVisible");Y1([_({type:Boolean})],Sa.prototype,"searchDropdownVisible");Y1([_({type:Boolean})],Sa.prototype,"languageVisible");Y1([_({type:Boolean})],Sa.prototype,"isSearchFocused");Y1([_({type:Boolean})],Sa.prototype,"hideTranslate");Y1([_({type:Boolean})],Sa.prototype,"hideSearch");Y1([_({type:String,reflect:!0})],Sa.prototype,"languages");customElements.get("nys-unavheader")||customElements.define("nys-unavheader",Sa);const Yf=Ie`
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
`;var Gf=Object.defineProperty,pr=(i,l,s,o)=>{for(var c=void 0,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=h(l,s,c)||c);return c&&Gf(l,s,c),c};const ud=class extends Oe{constructor(){super(...arguments),this.appName="",this.agencyName="",this.homepageLink="",this.slotHasContent=!0,this.isMobileMenuOpen=!1}firstUpdated(){var l;const s=(l=this.shadowRoot)==null?void 0:l.querySelector("slot");s==null||s.addEventListener("slotchange",()=>this._handleSlotChange()),this._handleSlotChange()}async _handleSlotChange(){var l,s,o;const c=(l=this.shadowRoot)==null?void 0:l.querySelector("slot");if(!c)return;const d=c==null?void 0:c.assignedNodes({flatten:!0}).filter(y=>y.nodeType===Node.ELEMENT_NODE);await Promise.resolve(),this.slotHasContent=d.length>0;const h=(s=this.shadowRoot)==null?void 0:s.querySelector(".nys-globalheader__content"),g=(o=this.shadowRoot)==null?void 0:o.querySelector(".nys-globalheader__content-mobile");h&&g&&(h.innerHTML="",g.innerHTML="",d.forEach(y=>{if(y.nodeType===Node.ELEMENT_NODE){const p=y.cloneNode(!0),b=y.cloneNode(!0);["script","iframe","object","embed, img"].forEach(E=>{p.querySelectorAll(E).forEach(A=>A.remove())});const w=this._normalizePath(window.location.pathname);p.querySelectorAll("a").forEach(E=>{const A=E.getAttribute("href");if(this._normalizePath(A)===w){const N=E.closest("li");N&&N.classList.add("active")}}),b.querySelectorAll("a").forEach(E=>{const A=E.getAttribute("href");if(this._normalizePath(A)===w){const N=E.closest("li");N&&N.classList.add("active")}}),h.appendChild(p),g.appendChild(b),y.remove()}}))}_normalizePath(l){if(l)return l.startsWith("/")||(l="/"+l),l.length>1&&l.endsWith("/")&&(l=l.slice(0,-1)),l.toLowerCase()}_toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen}render(){var l,s,o,c,d,h,g,y;return G`
      <header class="nys-globalheader">
        <div class="nys-globalheader__main-container">
          ${this.slotHasContent?G` <div class="nys-globalheader__button-container">
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
          ${(l=this.homepageLink)!=null&&l.trim()?G`<a
                class="nys-globalheader__name-container-link"
                href=${(d=this.homepageLink)==null?void 0:d.trim()}
              >
                <div class="nys-globalheader__name-container">
                  ${((h=this.appName)==null?void 0:h.trim().length)>0?G`<div
                        class="nys-globalheader__appName nys-globalheader__name"
                      >
                        ${this.appName}
                      </div> `:""}
                  ${((g=this.agencyName)==null?void 0:g.trim().length)>0?G`<div
                        class="nys-globalheader__agencyName nys-globalheader__name ${((y=this.appName)==null?void 0:y.trim().length)>0?"":"main"}"
                      >
                        ${this.agencyName}
                      </div> `:""}
                </div>
              </a>`:G`
                <div class="nys-globalheader__name-container">
                  ${((s=this.appName)==null?void 0:s.trim().length)>0?G`<div
                        class="nys-globalheader__appName nys-globalheader__name"
                      >
                        ${this.appName}
                      </div> `:""}
                  ${((o=this.agencyName)==null?void 0:o.trim().length)>0?G`<div
                        class="nys-globalheader__agencyName nys-globalheader__name ${((c=this.appName)==null?void 0:c.trim().length)>0?"":"main"}"
                      >
                        ${this.agencyName}
                      </div> `:""}
                </div>
              `}
          ${this.slotHasContent?G`<div class="nys-globalheader__content">
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
    `}};ud.styles=Yf;let G1=ud;pr([_({type:String})],G1.prototype,"appName");pr([_({type:String})],G1.prototype,"agencyName");pr([_({type:String})],G1.prototype,"homepageLink");pr([nn()],G1.prototype,"slotHasContent");pr([nn()],G1.prototype,"isMobileMenuOpen");customElements.get("nys-globalheader")||customElements.define("nys-globalheader",G1);const Xf=Ie`
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
`;var Qf=Object.defineProperty,q5=(i,l,s,o)=>{for(var c=void 0,d=i.length-1,h;d>=0;d--)(h=i[d])&&(c=h(l,s,c)||c);return c&&Qf(l,s,c),c};const dd=class extends Oe{constructor(){super(...arguments),this.agencyName="",this.homepageLink="",this.slotHasContent=!0}firstUpdated(){var l;const s=(l=this.shadowRoot)==null?void 0:l.querySelector("slot");s==null||s.addEventListener("slotchange",()=>this._handleSlotChange()),this._handleSlotChange()}async _handleSlotChange(){var l,s;const o=(l=this.shadowRoot)==null?void 0:l.querySelector("slot");if(!o)return;const c=o==null?void 0:o.assignedNodes({flatten:!0}).filter(g=>g.nodeType===Node.ELEMENT_NODE);await Promise.resolve(),this.slotHasContent=c.length>0;const d=(s=this.shadowRoot)==null?void 0:s.querySelector(".nys-globalfooter__content"),h=c==null?void 0:c.some(g=>g.tagName==="H4");d&&(d.classList.toggle("columns",h),d.classList.toggle("small",!h),d.innerHTML="",c.forEach(g=>{if(g.nodeType===Node.ELEMENT_NODE){const y=g.cloneNode(!0);["script","iframe","object","embed","img"].forEach(p=>{y.querySelectorAll(p).forEach(b=>b.remove())}),d.appendChild(y),g.remove()}}))}render(){var l,s;return G`
      <footer class="nys-globalfooter">
        <div class="nys-globalfooter__main-container">
          ${(l=this.homepageLink)!=null&&l.trim()?G`<a href=${(s=this.homepageLink)==null?void 0:s.trim()}>
                <p class="nys-globalfooter__name">${this.agencyName}</p>
              </a>`:G`<p class="nys-globalfooter__name">${this.agencyName}</p>`}
          ${this.slotHasContent?G`<div class="nys-globalfooter__content">
                <slot
                  style="display: hidden"
                  @slotchange="${this._handleSlotChange}"
                ></slot>
              </div>`:""}
        </div>
      </footer>
    `}};dd.styles=Xf;let vr=dd;q5([_({type:String})],vr.prototype,"agencyName");q5([_({type:String})],vr.prototype,"homepageLink");q5([nn()],vr.prototype,"slotHasContent");customElements.get("nys-globalfooter")||customElements.define("nys-globalfooter",vr);const Ff=Ie`
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
`,Kf=`<svg xmlns="http://www.w3.org/2000/svg" width="91" height="55" viewBox="0 0 91 55" fill="none">
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
</svg>`,hd=class extends Oe{_getNysLogo(){return new DOMParser().parseFromString(Kf,"image/svg+xml").documentElement}render(){return G`
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
    `}};hd.styles=Ff;let fd=hd;customElements.get("nys-unavfooter")||customElements.define("nys-unavfooter",fd);const Jf=Je({react:Ke,tagName:"nys-accordion",elementClass:ur}),e3=Je({react:Ke,tagName:"nys-accordionitem",elementClass:B1,events:{onNysAccordionItemToggle:"nys-accordionitem-toggle"}}),t3=Je({react:Ke,tagName:"nys-alert",elementClass:B3,events:{onNysAlertClosed:"nys-close"}});Je({react:Ke,tagName:"nys-avatar",elementClass:q3});const yd=Je({react:Ke,tagName:"nys-backtotop",elementClass:jl,events:{onNysClick:"nys-click",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),Ii=Je({react:Ke,tagName:"nys-button",elementClass:Z3,events:{onNysClick:"nys-click",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),Ol=Je({react:Ke,tagName:"nys-checkbox",elementClass:X3,events:{onNysChange:"nys-change",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),Pf=Je({react:Ke,tagName:"nys-checkboxgroup",elementClass:G3}),Wf=Je({react:Ke,tagName:"nys-fileinput",elementClass:jt,events:{onNysFileChange:"nys-change"}}),pd=Je({react:Ke,tagName:"nys-globalfooter",elementClass:vr}),vd=Je({react:Ke,tagName:"nys-globalheader",elementClass:G1});Je({react:Ke,tagName:"nys-icon",elementClass:F3});const Pi=Je({react:Ke,tagName:"nys-option",elementClass:o1}),Ms=Je({react:Ke,tagName:"nys-radiobutton",elementClass:W3,events:{onNysChange:"nys-change",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),n3=Je({react:Ke,tagName:"nys-radiogroup",elementClass:P3}),If=Je({react:Ke,tagName:"nys-select",elementClass:I3,events:{onNysChange:"nys-change",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),gd=Je({react:Ke,tagName:"nys-skipnav",elementClass:Ks}),ey=Je({react:Ke,tagName:"nys-stepper",elementClass:Z1,events:{onNysStepClick:"nys-step-click"}}),g5=Je({react:Ke,tagName:"nys-step",elementClass:ka}),n1=Je({react:Ke,tagName:"nys-textinput",elementClass:rd,events:{onNysInput:"nys-input",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),md=Je({react:Ke,tagName:"nys-textarea",elementClass:id,events:{onNysInput:"nys-input",onNysFocus:"nys-focus",onNysBlur:"nys-blur",onNysSelect:"nys-select"}}),ty=Je({react:Ke,tagName:"nys-toggle",elementClass:sd,events:{onNysChange:"nys-change",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),ny=Je({react:Ke,tagName:"nys-tooltip",elementClass:c1}),bd=Je({react:Ke,tagName:"nys-unavfooter",elementClass:fd}),_d=Je({react:Ke,tagName:"nys-unavheader",elementClass:Sa});function ay(){return H.jsxs(H.Fragment,{children:[H.jsx(gd,{}),H.jsx(_d,{}),H.jsx(vd,{appName:"React Demo Form",agencyName:"Office of Information Technology Services",homepageLink:"/",children:H.jsxs("ul",{children:[H.jsx("li",{children:H.jsx("a",{href:"/",children:"Home"})}),H.jsx("li",{children:H.jsx("a",{href:"/basic-form",children:"Basic Form"})}),H.jsx("li",{children:H.jsx("a",{href:"/stepper",children:"Stepper"})}),H.jsx("li",{children:H.jsx("a",{href:"/about",children:"About"})})]})}),H.jsx("main",{className:"nys-flex-1 nys-display-flex nys-flex-column",children:H.jsx(f9,{})}),H.jsx(pd,{agencyName:"Office of Information Technology Services",children:H.jsxs("ul",{children:[H.jsx("li",{children:H.jsx("a",{href:"https://its.ny.gov",children:"ITS Home"})}),H.jsx("li",{children:H.jsx("a",{href:"https://its.ny.gov/about",children:"About ITS"})})]})}),H.jsx(bd,{}),H.jsx(yd,{})]})}const ly=()=>H.jsxs("div",{className:"main-content nys-display-flex nys-flex-column nys-flex-align-center",children:[H.jsx("h1",{children:"Welcome to the React Demo"}),H.jsx("img",{src:"homepage-grid.svg",alt:"",role:"presentation"}),H.jsxs("p",{className:"centered-link",children:["Please read the"," ",H.jsx(Zs,{to:"https://github.com/ITS-HCD/nysds-react-demo",children:"README"})," in the main repo for details on how this demo works."]})]}),iy=()=>{const[i,l]=O.useState(null),s=o=>{o.preventDefault();const c=new FormData(o.target),d={};for(const[h,g]of c.entries()){const y=c.getAll(h);y.length>1?d[h]=y.map(p=>p instanceof File?{fileName:p.name,fileType:p.type}:p):d[h]=g instanceof File?{name:g.name,type:g.type,size:g.size}:g}alert(`Form Data:
`+JSON.stringify(d,null,2)),l(d)};return H.jsxs("div",{className:"main-content",children:[H.jsx("h1",{className:"appTitle",children:"Vite + React + NYSDS"}),H.jsx(t3,{type:"info",heading:"NYSDS Components",text:"We make use of form-related NYSDS components in the native HTML form below.",primaryLabel:"Learn more on NYSDS reference site",primaryAction:"https://designsystem.ny.gov/",dismissible:!0}),H.jsxs("form",{id:"myForm",className:"nys-newsletter-form",method:"POST",onSubmit:s,children:["          ",H.jsxs(n3,{label:"Do you like cats or dogs?",description:"You must select one",size:"md",required:!0,children:[H.jsx(Ms,{name:"animal",label:"Dog",value:"dog"}),H.jsx(Ms,{name:"animal",label:"Cat",value:"cat"})]}),H.jsx(n1,{name:"fullName",label:"Full name",required:!0,onNysBlur:o=>{console.log("nys-blur event received 🔥",o)}}),H.jsx(n1,{name:"email",label:"Email",type:"email",required:!0}),H.jsx(md,{name:"quote",label:"Enter your favorite quote:",value:"Majorities, of course, start with minorities.",required:!0}),H.jsxs(If,{name:"newsletter_topic",label:"Select your preferred newsletter topic",id:"newsletter-topic",required:!0,children:[H.jsx(Pi,{value:"government_updates",label:"Government Updates"}),H.jsx(Pi,{value:"community_events",label:"Community Events"}),H.jsx(Pi,{value:"public_services",label:"Public Services & Resources"}),H.jsx(Pi,{value:"transportation_news",label:"Transportation & Infrastructure"}),H.jsx(Pi,{value:"environment",label:"Environment & Sustainability"})]}),H.jsx(Wf,{name:"uploadImg",label:"Upload a file",description:"Accepted file types: .jpg, .png, .pdf",accept:"image/png, image/jpeg, .pdf",multiple:!0,dropzone:!0,required:!0}),H.jsxs(n3,{label:"How often do you want updates?",description:"These updates will be sent directly to your email.",size:"md",required:!0,children:[H.jsx(Ms,{name:"frequency",label:"Weekly",value:"weekly"}),H.jsx(Ms,{name:"frequency",label:"Monthly",value:"monthly"})]}),H.jsx(Ol,{label:"Subscribe to NYS Government Updates",description:"Get notified via email about important updates and services.",id:"subscribe-checkbox-disabled-checked",name:"subscribe",value:"email-updates",required:!0}),H.jsxs(Pf,{label:"Select your favorite New York landmarks",description:"Choose from the options below",required:!0,children:[H.jsx(Ol,{name:"landmarks",label:"Adirondacks",value:"adirondacks"}),H.jsx(Ol,{name:"landmarks",value:"finger-lakes",label:"Finger Lakes"}),H.jsx(Ol,{name:"landmarks",value:"catskills",label:"Catskills"}),H.jsx(Ol,{name:"landmarks",value:"niagara-falls",label:"Niagara Falls"}),H.jsx(Ol,{name:"landmarks",value:"coney-island",label:"Coney Island"})]}),H.jsx(ty,{label:"Dark Mode",name:"toggle-switch",value:"access",children:H.jsx("p",{slot:"description",children:"Toggle switch is usually NOT recommended for forms (use checkboxes instead)."})}),H.jsx(ny,{text:"Hello",position:"bottom",children:H.jsx(Ii,{type:"submit",fullWidth:!0,label:"Subscribe"})})]}),H.jsx("br",{}),i&&H.jsx(t3,{type:"success",heading:"Form submitted successfully",text:`${i?`

Submitted Data:
`+JSON.stringify(i,null,2):""}`,dismissible:!0})]})},Cd=()=>H.jsxs("div",{className:"main-content stepper-content nys-display-flex nys-flex-column nys-flex-justify",children:[H.jsx("h1",{children:"Personal Details (Sample 1)"}),H.jsx("p",{children:"This is the form to enter your personal information. Fill in your name, address, and contact details here."}),H.jsx(n1,{name:"fullName",label:"Full Name",required:!0}),H.jsx(n1,{name:"email",label:"Email Address",type:"email",required:!0}),H.jsx(n1,{name:"phone",label:"Phone Number",type:"tel"}),H.jsx(n1,{name:"address",label:"Street Address"})]}),xd=()=>H.jsxs("div",{className:"main-content stepper-content nys-display-flex nys-flex-column nys-flex-justify",children:[H.jsx("h1",{children:"Team Information (Sample 2)"}),H.jsx("p",{children:"Provide details about your team. Who are you working with? What is your role?"}),H.jsx(n1,{name:"teamMembers",label:"Who are you working with?",required:!0}),H.jsx(n1,{name:"role",label:"What is your role?",required:!0}),H.jsxs(Jf,{singleSelect:!0,bordered:!0,children:[H.jsx(e3,{heading:"Eligibility Requirements",children:H.jsx("p",{children:"You must be a New York State resident and provide valid proof of identification. Additional documentation may be required depending on the type of service you are applying for."})}),H.jsx(e3,{heading:"Required Documents",children:H.jsxs("ul",{children:[H.jsx("li",{children:"Proof of Identity (Driver License, State ID, or Passport)"}),H.jsx("li",{children:"Proof of Residency (Utility Bill, Lease Agreement)"}),H.jsx("li",{children:"Completed Application Form"})]})})]})]}),wd=()=>H.jsxs("div",{className:"main-content stepper-content nys-display-flex nys-flex-column nys-flex-justify",children:[H.jsx("h1",{children:"Usage Survey (Sample 3)"}),H.jsx(md,{name:"quote",label:"Tell us how you plan to use this application?",description:"Your feedback helps us improve.",required:!0})]}),ry=()=>{const[i,l]=O.useState(1),[s,o]=O.useState(1),c=()=>l(y=>Math.max(y-1,1)),d=()=>{h()?l(y=>{const p=Math.min(y+1,3);return o(b=>Math.max(b,p)),p}):console.warn("Current step invalid. Cannot proceed.")},h=()=>{const y=document.querySelector(".stepper-form");if(!y)return!1;const p=y.querySelector(`.step-page:nth-child(${i})`),b=Array.from(Array.from(p.querySelectorAll("*")).filter(E=>typeof E.checkValidity=="function"));let w=!0;return b.forEach(E=>{E.checkValidity&&(E.checkValidity()||(w=!1,E.dispatchEvent(new Event("invalid",{bubbles:!0}))))}),w},g=y=>{y.preventDefault();const p=new FormData(y.target),b={};for(const[w,E]of p.entries()){const A=p.getAll(w);A.length>1?b[w]=A.map(N=>N instanceof File?{fileName:N.name,fileType:N.type}:N):b[w]=E instanceof File?{name:E.name,type:E.type,size:E.size}:E}alert(`Form Data:
`+JSON.stringify(b,null,2))};return H.jsxs("div",{className:"nys-grid-row",children:[H.jsxs(ey,{className:"nys-desktop:nys-grid-col-3",label:"Register for Design System Office Hours",children:[H.jsx(g5,{label:"Sample 1",onClick:()=>l(1),selected:i===1,current:s===1}),H.jsx(g5,{label:"Sample 2",onClick:()=>l(2),selected:i===2,current:s===2}),H.jsx(g5,{label:"Sample 3",onClick:()=>l(3),selected:i===3,current:s===3}),H.jsx("div",{slot:"actions",children:H.jsx(Ii,{variant:"outline",label:"Save & Exit",fullWidth:!0})})]}),H.jsxs("form",{action:"",className:"stepper-form",onSubmit:g,children:[H.jsx("div",{className:`step-page ${i===1?"":"hidden"}`,children:H.jsx(Cd,{})}),H.jsx("div",{className:`step-page ${i===2?"":"hidden"}`,children:H.jsx(xd,{})}),H.jsx("div",{className:`step-page ${i===3?"":"hidden"}`,children:H.jsx(wd,{})}),H.jsxs("div",{className:"button-container nys-display-flex",children:[i>1&&H.jsx(Ii,{type:"button",label:"Back",onClick:c}),i<3?H.jsx(Ii,{type:"button",label:"Next",onClick:d}):H.jsx(Ii,{type:"submit",label:"Submit",variant:"outline"})]})]})]})},sy=()=>H.jsxs(H.Fragment,{children:[H.jsx(gd,{}),H.jsx(_d,{}),H.jsx(vd,{appName:"React Demo Form",agencyName:"Office of Information Technology Services",homepageLink:"/",children:H.jsxs("ul",{children:[H.jsx("li",{children:H.jsx("a",{href:"/",children:"Home"})}),H.jsx("li",{children:H.jsx("a",{href:"basic-form",children:"Basic Form"})}),H.jsx("li",{children:H.jsx("a",{href:"stepper",children:"Stepper"})}),H.jsx("li",{children:H.jsx("a",{href:"about",children:"About"})})]})}),H.jsxs("div",{className:"main-content nys-flex-1 nys-display-flex nys-flex-column nys-flex-align-center",children:[H.jsx("h1",{children:"Oh no, this route doesn't exist!"}),H.jsx("img",{src:"error-image.png",alt:"",role:"presentation"}),H.jsx(Zs,{to:"/",className:"centered-link",children:"You can go back to the home page by clicking here, though!"})]}),H.jsx(pd,{agencyName:"Office of Information Technology Services",children:H.jsxs("ul",{children:[H.jsx("li",{children:H.jsx("a",{href:"https://its.ny.gov",children:"ITS Home"})}),H.jsx("li",{children:H.jsx("a",{href:"https://its.ny.gov/about",children:"About ITS"})})]})}),H.jsx(bd,{}),H.jsx(yd,{})]}),oy=U9([{path:"/",element:H.jsx(ay,{}),children:[{index:!0,element:H.jsx(ly,{})},{path:"basic-form",element:H.jsx(iy,{})},{path:"stepper",element:H.jsx(ry,{}),children:[{index:!0,element:H.jsx(h9,{to:"sample1",replace:!0})},{path:"sample1",element:H.jsx(Cd,{})},{path:"sample2",element:H.jsx(xd,{})},{path:"sample3",element:H.jsx(wd,{})}]}],errorElement:H.jsx(sy,{})}]),cy=()=>H.jsx(J9,{router:oy});B8.createRoot(document.getElementById("root")).render(H.jsx(O.StrictMode,{children:H.jsx(cy,{})}));
