function O4(l,r){for(var o=0;o<r.length;o++){const s=r[o];if(typeof s!="string"&&!Array.isArray(s)){for(const c in s)if(c!=="default"&&!(c in l)){const d=Object.getOwnPropertyDescriptor(s,c);d&&Object.defineProperty(l,c,d.get?d:{enumerable:!0,get:()=>s[c]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function o(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=o(c);fetch(c.href,d)}})();function N4(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var l5={exports:{}},F1={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function U4(){if(y0)return F1;y0=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(s,c,d){var h=null;if(d!==void 0&&(h=""+d),c.key!==void 0&&(h=""+c.key),"key"in c){d={};for(var g in c)g!=="key"&&(d[g]=c[g])}else d=c;return c=d.ref,{$$typeof:l,type:s,key:h,ref:c!==void 0?c:null,props:d}}return F1.Fragment=r,F1.jsx=o,F1.jsxs=o,F1}var p0;function V4(){return p0||(p0=1,l5.exports=U4()),l5.exports}var R=V4(),o5={exports:{}},we={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0;function B4(){if(v0)return we;v0=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),w=Symbol.iterator;function E(x){return x===null||typeof x!="object"?null:(x=w&&x[w]||x["@@iterator"],typeof x=="function"?x:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,F={};function K(x,B,le){this.props=x,this.context=B,this.refs=F,this.updater=le||L}K.prototype.isReactComponent={},K.prototype.setState=function(x,B){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,B,"setState")},K.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function j(){}j.prototype=K.prototype;function fe(x,B,le){this.props=x,this.context=B,this.refs=F,this.updater=le||L}var J=fe.prototype=new j;J.constructor=fe,U(J,K.prototype),J.isPureReactComponent=!0;var me=Array.isArray,W={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function $e(x,B,le,ee,P,ke){return le=ke.ref,{$$typeof:l,type:x,key:B,ref:le!==void 0?le:null,props:ke}}function Ve(x,B){return $e(x.type,B,void 0,void 0,void 0,x.props)}function X(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function ve(x){var B={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(le){return B[le]})}var We=/\/+/g;function At(x,B){return typeof x=="object"&&x!==null&&x.key!=null?ve(""+x.key):B.toString(36)}function vt(){}function Me(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(vt,vt):(x.status="pending",x.then(function(B){x.status==="pending"&&(x.status="fulfilled",x.value=B)},function(B){x.status==="pending"&&(x.status="rejected",x.reason=B)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function ze(x,B,le,ee,P){var ke=typeof x;(ke==="undefined"||ke==="boolean")&&(x=null);var ge=!1;if(x===null)ge=!0;else switch(ke){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(x.$$typeof){case l:case r:ge=!0;break;case _:return ge=x._init,ze(ge(x._payload),B,le,ee,P)}}if(ge)return P=P(x),ge=ee===""?"."+At(x,0):ee,me(P)?(le="",ge!=null&&(le=ge.replace(We,"$&/")+"/"),ze(P,B,le,"",function(at){return at})):P!=null&&(X(P)&&(P=Ve(P,le+(P.key==null||x&&x.key===P.key?"":(""+P.key).replace(We,"$&/")+"/")+ge)),B.push(P)),1;ge=0;var Lt=ee===""?".":ee+":";if(me(x))for(var Oe=0;Oe<x.length;Oe++)ee=x[Oe],ke=Lt+At(ee,Oe),ge+=ze(ee,B,le,ke,P);else if(Oe=E(x),typeof Oe=="function")for(x=Oe.call(x),Oe=0;!(ee=x.next()).done;)ee=ee.value,ke=Lt+At(ee,Oe++),ge+=ze(ee,B,le,ke,P);else if(ke==="object"){if(typeof x.then=="function")return ze(Me(x),B,le,ee,P);throw B=String(x),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return ge}function Z(x,B,le){if(x==null)return x;var ee=[],P=0;return ze(x,ee,"","",function(ke){return B.call(le,ke,P++)}),ee}function se(x){if(x._status===-1){var B=x._result;B=B(),B.then(function(le){(x._status===0||x._status===-1)&&(x._status=1,x._result=le)},function(le){(x._status===0||x._status===-1)&&(x._status=2,x._result=le)}),x._status===-1&&(x._status=0,x._result=B)}if(x._status===1)return x._result.default;throw x._result}var ae=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function Ce(){}return we.Children={map:Z,forEach:function(x,B,le){Z(x,function(){B.apply(this,arguments)},le)},count:function(x){var B=0;return Z(x,function(){B++}),B},toArray:function(x){return Z(x,function(B){return B})||[]},only:function(x){if(!X(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},we.Component=K,we.Fragment=o,we.Profiler=c,we.PureComponent=fe,we.StrictMode=s,we.Suspense=y,we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,we.act=function(){throw Error("act(...) is not supported in production builds of React.")},we.cache=function(x){return function(){return x.apply(null,arguments)}},we.cloneElement=function(x,B,le){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var ee=U({},x.props),P=x.key,ke=void 0;if(B!=null)for(ge in B.ref!==void 0&&(ke=void 0),B.key!==void 0&&(P=""+B.key),B)!T.call(B,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&B.ref===void 0||(ee[ge]=B[ge]);var ge=arguments.length-2;if(ge===1)ee.children=le;else if(1<ge){for(var Lt=Array(ge),Oe=0;Oe<ge;Oe++)Lt[Oe]=arguments[Oe+2];ee.children=Lt}return $e(x.type,P,void 0,void 0,ke,ee)},we.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:d,_context:x},x},we.createElement=function(x,B,le){var ee,P={},ke=null;if(B!=null)for(ee in B.key!==void 0&&(ke=""+B.key),B)T.call(B,ee)&&ee!=="key"&&ee!=="__self"&&ee!=="__source"&&(P[ee]=B[ee]);var ge=arguments.length-2;if(ge===1)P.children=le;else if(1<ge){for(var Lt=Array(ge),Oe=0;Oe<ge;Oe++)Lt[Oe]=arguments[Oe+2];P.children=Lt}if(x&&x.defaultProps)for(ee in ge=x.defaultProps,ge)P[ee]===void 0&&(P[ee]=ge[ee]);return $e(x,ke,void 0,void 0,null,P)},we.createRef=function(){return{current:null}},we.forwardRef=function(x){return{$$typeof:g,render:x}},we.isValidElement=X,we.lazy=function(x){return{$$typeof:_,_payload:{_status:-1,_result:x},_init:se}},we.memo=function(x,B){return{$$typeof:p,type:x,compare:B===void 0?null:B}},we.startTransition=function(x){var B=W.T,le={};W.T=le;try{var ee=x(),P=W.S;P!==null&&P(le,ee),typeof ee=="object"&&ee!==null&&typeof ee.then=="function"&&ee.then(Ce,ae)}catch(ke){ae(ke)}finally{W.T=B}},we.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},we.use=function(x){return W.H.use(x)},we.useActionState=function(x,B,le){return W.H.useActionState(x,B,le)},we.useCallback=function(x,B){return W.H.useCallback(x,B)},we.useContext=function(x){return W.H.useContext(x)},we.useDebugValue=function(){},we.useDeferredValue=function(x,B){return W.H.useDeferredValue(x,B)},we.useEffect=function(x,B){return W.H.useEffect(x,B)},we.useId=function(){return W.H.useId()},we.useImperativeHandle=function(x,B,le){return W.H.useImperativeHandle(x,B,le)},we.useInsertionEffect=function(x,B){return W.H.useInsertionEffect(x,B)},we.useLayoutEffect=function(x,B){return W.H.useLayoutEffect(x,B)},we.useMemo=function(x,B){return W.H.useMemo(x,B)},we.useOptimistic=function(x,B){return W.H.useOptimistic(x,B)},we.useReducer=function(x,B,le){return W.H.useReducer(x,B,le)},we.useRef=function(x){return W.H.useRef(x)},we.useState=function(x){return W.H.useState(x)},we.useSyncExternalStore=function(x,B,le){return W.H.useSyncExternalStore(x,B,le)},we.useTransition=function(){return W.H.useTransition()},we.version="19.0.0",we}var g0;function M5(){return g0||(g0=1,o5.exports=B4()),o5.exports}var $=M5();const q4=N4($),Ye=O4({__proto__:null,default:q4},[$]);var i5={exports:{}},K1={},s5={exports:{}},c5={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function j4(){return m0||(m0=1,function(l){function r(Z,se){var ae=Z.length;Z.push(se);e:for(;0<ae;){var Ce=ae-1>>>1,x=Z[Ce];if(0<c(x,se))Z[Ce]=se,Z[ae]=x,ae=Ce;else break e}}function o(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var se=Z[0],ae=Z.pop();if(ae!==se){Z[0]=ae;e:for(var Ce=0,x=Z.length,B=x>>>1;Ce<B;){var le=2*(Ce+1)-1,ee=Z[le],P=le+1,ke=Z[P];if(0>c(ee,ae))P<x&&0>c(ke,ee)?(Z[Ce]=ke,Z[P]=ae,Ce=P):(Z[Ce]=ee,Z[le]=ae,Ce=le);else if(P<x&&0>c(ke,ae))Z[Ce]=ke,Z[P]=ae,Ce=P;else break e}}return se}function c(Z,se){var ae=Z.sortIndex-se.sortIndex;return ae!==0?ae:Z.id-se.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var h=Date,g=h.now();l.unstable_now=function(){return h.now()-g}}var y=[],p=[],_=1,w=null,E=3,L=!1,U=!1,F=!1,K=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;function J(Z){for(var se=o(p);se!==null;){if(se.callback===null)s(p);else if(se.startTime<=Z)s(p),se.sortIndex=se.expirationTime,r(y,se);else break;se=o(p)}}function me(Z){if(F=!1,J(Z),!U)if(o(y)!==null)U=!0,Me();else{var se=o(p);se!==null&&ze(me,se.startTime-Z)}}var W=!1,T=-1,$e=5,Ve=-1;function X(){return!(l.unstable_now()-Ve<$e)}function ve(){if(W){var Z=l.unstable_now();Ve=Z;var se=!0;try{e:{U=!1,F&&(F=!1,j(T),T=-1),L=!0;var ae=E;try{t:{for(J(Z),w=o(y);w!==null&&!(w.expirationTime>Z&&X());){var Ce=w.callback;if(typeof Ce=="function"){w.callback=null,E=w.priorityLevel;var x=Ce(w.expirationTime<=Z);if(Z=l.unstable_now(),typeof x=="function"){w.callback=x,J(Z),se=!0;break t}w===o(y)&&s(y),J(Z)}else s(y);w=o(y)}if(w!==null)se=!0;else{var B=o(p);B!==null&&ze(me,B.startTime-Z),se=!1}}break e}finally{w=null,E=ae,L=!1}se=void 0}}finally{se?We():W=!1}}}var We;if(typeof fe=="function")We=function(){fe(ve)};else if(typeof MessageChannel<"u"){var At=new MessageChannel,vt=At.port2;At.port1.onmessage=ve,We=function(){vt.postMessage(null)}}else We=function(){K(ve,0)};function Me(){W||(W=!0,We())}function ze(Z,se){T=K(function(){Z(l.unstable_now())},se)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(Z){Z.callback=null},l.unstable_continueExecution=function(){U||L||(U=!0,Me())},l.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$e=0<Z?Math.floor(1e3/Z):5},l.unstable_getCurrentPriorityLevel=function(){return E},l.unstable_getFirstCallbackNode=function(){return o(y)},l.unstable_next=function(Z){switch(E){case 1:case 2:case 3:var se=3;break;default:se=E}var ae=E;E=se;try{return Z()}finally{E=ae}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(Z,se){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ae=E;E=Z;try{return se()}finally{E=ae}},l.unstable_scheduleCallback=function(Z,se,ae){var Ce=l.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Ce+ae:Ce):ae=Ce,Z){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=ae+x,Z={id:_++,callback:se,priorityLevel:Z,startTime:ae,expirationTime:x,sortIndex:-1},ae>Ce?(Z.sortIndex=ae,r(p,Z),o(y)===null&&Z===o(p)&&(F?(j(T),T=-1):F=!0,ze(me,ae-Ce))):(Z.sortIndex=x,r(y,Z),U||L||(U=!0,Me())),Z},l.unstable_shouldYield=X,l.unstable_wrapCallback=function(Z){var se=E;return function(){var ae=E;E=se;try{return Z.apply(this,arguments)}finally{E=ae}}}}(c5)),c5}var b0;function Z4(){return b0||(b0=1,s5.exports=j4()),s5.exports}var u5={exports:{}},Vt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function Y4(){if(_0)return Vt;_0=1;var l=M5();function r(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(y,p,_){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:w==null?null:""+w,children:y,containerInfo:p,implementation:_}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Vt.createPortal=function(y,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return d(y,p,null,_)},Vt.flushSync=function(y){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,y)return y()}finally{h.T=p,s.p=_,s.d.f()}},Vt.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(y,p))},Vt.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},Vt.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var _=p.as,w=g(_,p.crossOrigin),E=typeof p.integrity=="string"?p.integrity:void 0,L=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:w,integrity:E,fetchPriority:L}):_==="script"&&s.d.X(y,{crossOrigin:w,integrity:E,fetchPriority:L,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Vt.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=g(p.as,p.crossOrigin);s.d.M(y,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(y)},Vt.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,w=g(_,p.crossOrigin);s.d.L(y,_,{crossOrigin:w,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Vt.preloadModule=function(y,p){if(typeof y=="string")if(p){var _=g(p.as,p.crossOrigin);s.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(y)},Vt.requestFormReset=function(y){s.d.r(y)},Vt.unstable_batchedUpdates=function(y,p){return y(p)},Vt.useFormState=function(y,p,_){return h.H.useFormState(y,p,_)},Vt.useFormStatus=function(){return h.H.useHostTransitionStatus()},Vt.version="19.0.0",Vt}var C0;function sd(){if(C0)return u5.exports;C0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),u5.exports=Y4(),u5.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x0;function G4(){if(x0)return K1;x0=1;var l=Z4(),r=M5(),o=sd();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var d=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),E=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),me=Symbol.for("react.memo_cache_sentinel"),W=Symbol.iterator;function T(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Symbol.for("react.client.reference");function Ve(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$e?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case y:return"Fragment";case g:return"Portal";case _:return"Profiler";case p:return"StrictMode";case F:return"Suspense";case K:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case L:return(e.displayName||"Context")+".Provider";case E:return(e._context.displayName||"Context")+".Consumer";case U:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case j:return t=e.displayName||null,t!==null?t:Ve(e.type)||"Memo";case fe:t=e._payload,e=e._init;try{return Ve(e(t))}catch{}}return null}var X=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ve=Object.assign,We,At;function vt(e){if(We===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);We=t&&t[1]||"",At=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+We+e+At}var Me=!1;function ze(e,t){if(!e||Me)return"";Me=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(O){var z=O}Reflect.construct(e,[],q)}else{try{q.call()}catch(O){z=O}e.call(q.prototype)}}else{try{throw Error()}catch(O){z=O}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(O){if(O&&z&&typeof O.stack=="string")return[O.stack,z.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),f=u[0],v=u[1];if(f&&v){var b=f.split(`
`),S=v.split(`
`);for(i=a=0;a<b.length&&!b[a].includes("DetermineComponentFrameRoot");)a++;for(;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;if(a===b.length||i===S.length)for(a=b.length-1,i=S.length-1;1<=a&&0<=i&&b[a]!==S[i];)i--;for(;1<=a&&0<=i;a--,i--)if(b[a]!==S[i]){if(a!==1||i!==1)do if(a--,i--,0>i||b[a]!==S[i]){var N=`
`+b[a].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=a&&0<=i);break}}}finally{Me=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?vt(n):""}function Z(e){switch(e.tag){case 26:case 27:case 5:return vt(e.type);case 16:return vt("Lazy");case 13:return vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return e=ze(e.type,!1),e;case 11:return e=ze(e.type.render,!1),e;case 1:return e=ze(e.type,!0),e;default:return""}}function se(e){try{var t="";do t+=Z(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function ae(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ce(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(ae(e)!==e)throw Error(s(188))}function B(e){var t=e.alternate;if(!t){if(t=ae(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var u=i.alternate;if(u===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===n)return x(i),e;if(u===a)return x(i),t;u=u.sibling}throw Error(s(188))}if(n.return!==a.return)n=i,a=u;else{for(var f=!1,v=i.child;v;){if(v===n){f=!0,n=i,a=u;break}if(v===a){f=!0,a=i,n=u;break}v=v.sibling}if(!f){for(v=u.child;v;){if(v===n){f=!0,n=u,a=i;break}if(v===a){f=!0,a=u,n=i;break}v=v.sibling}if(!f)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function le(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=le(e),t!==null)return t;e=e.sibling}return null}var ee=Array.isArray,P=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ke={pending:!1,data:null,method:null,action:null},ge=[],Lt=-1;function Oe(e){return{current:e}}function at(e){0>Lt||(e.current=ge[Lt],ge[Lt]=null,Lt--)}function xe(e,t){Lt++,ge[Lt]=e.current,e.current=t}var zt=Oe(null),Ma=Oe(null),Yn=Oe(null),fn=Oe(null);function Jr(e,t){switch(xe(Yn,t),xe(Ma,e),xe(zt,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?Z7(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=Z7(e),t=Y7(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}at(zt),xe(zt,t)}function Aa(){at(zt),at(Ma),at(Yn)}function Wr(e){e.memoizedState!==null&&xe(fn,e);var t=zt.current,n=Y7(t,e.type);t!==n&&(xe(Ma,e),xe(zt,n))}function Ir(e){Ma.current===e&&(at(zt),at(Ma)),fn.current===e&&(at(fn),Z1._currentValue=ke)}var Jl=Object.prototype.hasOwnProperty,Wl=l.unstable_scheduleCallback,Il=l.unstable_cancelCallback,ra=l.unstable_shouldYield,fr=l.unstable_requestPaint,tn=l.unstable_now,e1=l.unstable_getCurrentPriorityLevel,Rn=l.unstable_ImmediatePriority,yn=l.unstable_UserBlockingPriority,yr=l.unstable_NormalPriority,t1=l.unstable_LowPriority,wo=l.unstable_IdlePriority,Gn=l.log,ko=l.unstable_setDisableYieldValue,La=null,Ot=null;function es(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(La,e,void 0,(e.current.flags&128)===128)}catch{}}function Hn(e){if(typeof Gn=="function"&&ko(e),Ot&&typeof Ot.setStrictMode=="function")try{Ot.setStrictMode(La,e)}catch{}}var xt=Math.clz32?Math.clz32:ts,So=Math.log,n1=Math.LN2;function ts(e){return e>>>=0,e===0?32:31-(So(e)/n1|0)|0}var pr=128,el=4194304;function Xn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function la(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,i=e.suspendedLanes,u=e.pingedLanes,f=e.warmLanes;e=e.finishedLanes!==0;var v=n&134217727;return v!==0?(n=v&~i,n!==0?a=Xn(n):(u&=v,u!==0?a=Xn(u):e||(f=v&~f,f!==0&&(a=Xn(f))))):(v=n&~i,v!==0?a=Xn(v):u!==0?a=Xn(u):e||(f=n&~f,f!==0&&(a=Xn(f)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,f=t&-t,i>=f||i===32&&(f&4194176)!==0)?t:a}function Qn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ns(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Eo(){var e=pr;return pr<<=1,(pr&4194176)===0&&(pr=128),e}function C(){var e=el;return el<<=1,(el&62914560)===0&&(el=4194304),e}function M(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function H(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function G(e,t,n,a,i,u){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var v=e.entanglements,b=e.expirationTimes,S=e.hiddenUpdates;for(n=f&~n;0<n;){var N=31-xt(n),q=1<<N;v[N]=0,b[N]=-1;var z=S[N];if(z!==null)for(S[N]=null,N=0;N<z.length;N++){var O=z[N];O!==null&&(O.lane&=-536870913)}n&=~q}a!==0&&Q(e,a,0),u!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=u&~(f&~t))}function Q(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-xt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194218}function oe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-xt(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function ce(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function re(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:s0(e.type))}function de(e,t){var n=P.p;try{return P.p=e,t()}finally{P.p=n}}var ue=Math.random().toString(36).slice(2),te="__reactFiber$"+ue,I="__reactProps$"+ue,pe="__reactContainer$"+ue,qe="__reactEvents$"+ue,wt="__reactListeners$"+ue,Tt="__reactHandles$"+ue,Je="__reactResources$"+ue,Be="__reactMarker$"+ue;function $n(e){delete e[te],delete e[I],delete e[qe],delete e[wt],delete e[Tt]}function nn(e){var t=e[te];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pe]||n[te]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Q7(e);e!==null;){if(n=e[te])return n;e=Q7(e)}return t}e=n,n=e.parentNode}return null}function qt(e){if(e=e[te]||e[pe]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Nt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Fn(e){var t=e[Je];return t||(t=e[Je]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ie(e){e[Be]=!0}var Kn=new Set,vr={};function pn(e,t){Te(e,t),Te(e+"Capture",t)}function Te(e,t){for(vr[e]=t,e=0;e<t.length;e++)Kn.add(t[e])}var Fe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),za={},rt={};function nl(e){return Jl.call(rt,e)?!0:Jl.call(za,e)?!1:tl.test(e)?rt[e]=!0:(za[e]=!0,!1)}function gr(e,t,n){if(nl(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function al(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function oa(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function vn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function X5(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function z3(e){var t=X5(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){a=""+f,u.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Do(e){e._valueTracker||(e._valueTracker=z3(e))}function Q5(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=X5(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Mo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var T3=/[\n"\\]/g;function gn(e){return e.replace(T3,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function as(e,t,n,a,i,u,f,v){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vn(t)):e.value!==""+vn(t)&&(e.value=""+vn(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?rs(e,f,vn(t)):n!=null?rs(e,f,vn(n)):a!=null&&e.removeAttribute("value"),i==null&&u!=null&&(e.defaultChecked=!!u),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+vn(v):e.removeAttribute("name")}function F5(e,t,n,a,i,u,f,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;n=n!=null?""+vn(n):"",t=t!=null?""+vn(t):n,v||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=v?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function rs(e,t,n){t==="number"&&Mo(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function rl(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+vn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function K5(e,t,n){if(t!=null&&(t=""+vn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+vn(n):""}function P5(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(ee(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=vn(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function ll(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var R3=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function J5(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||R3.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function W5(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&J5(e,i,a)}else for(var u in t)t.hasOwnProperty(u)&&J5(e,u,t[u])}function ls(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H3=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$3=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ao(e){return $3.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var os=null;function is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ol=null,il=null;function I5(e){var t=qt(e);if(t&&(e=t.stateNode)){var n=e[I]||null;e:switch(e=t.stateNode,t.type){case"input":if(as(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+gn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[I]||null;if(!i)throw Error(s(90));as(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Q5(a)}break e;case"textarea":K5(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&rl(e,!!n.multiple,t,!1)}}}var ss=!1;function ec(e,t,n){if(ss)return e(t,n);ss=!0;try{var a=e(t);return a}finally{if(ss=!1,(ol!==null||il!==null)&&(hi(),ol&&(t=ol,e=il,il=ol=null,I5(t),e)))for(t=0;t<e.length;t++)I5(e[t])}}function a1(e,t){var n=e.stateNode;if(n===null)return null;var a=n[I]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var cs=!1;if(Fe)try{var r1={};Object.defineProperty(r1,"passive",{get:function(){cs=!0}}),window.addEventListener("test",r1,r1),window.removeEventListener("test",r1,r1)}catch{cs=!1}var Ta=null,us=null,Lo=null;function tc(){if(Lo)return Lo;var e,t=us,n=t.length,a,i="value"in Ta?Ta.value:Ta.textContent,u=i.length;for(e=0;e<n&&t[e]===i[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===i[u-a];a++);return Lo=i.slice(e,1<a?1-a:void 0)}function zo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function To(){return!0}function nc(){return!1}function Qt(e){function t(n,a,i,u,f){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=u,this.target=f,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?To:nc,this.isPropagationStopped=nc,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),t}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ro=Qt(mr),l1=ve({},mr,{view:0,detail:0}),O3=Qt(l1),ds,hs,o1,Ho=ve({},l1,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==o1&&(o1&&e.type==="mousemove"?(ds=e.screenX-o1.screenX,hs=e.screenY-o1.screenY):hs=ds=0,o1=e),ds)},movementY:function(e){return"movementY"in e?e.movementY:hs}}),ac=Qt(Ho),N3=ve({},Ho,{dataTransfer:0}),U3=Qt(N3),V3=ve({},l1,{relatedTarget:0}),fs=Qt(V3),B3=ve({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),q3=Qt(B3),j3=ve({},mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Z3=Qt(j3),Y3=ve({},mr,{data:0}),rc=Qt(Y3),G3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F3(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Q3[e])?!!t[e]:!1}function ys(){return F3}var K3=ve({},l1,{key:function(e){if(e.key){var t=G3[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?X3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(e){return e.type==="keypress"?zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),P3=Qt(K3),J3=ve({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lc=Qt(J3),W3=ve({},l1,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),I3=Qt(W3),e8=ve({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),t8=Qt(e8),n8=ve({},Ho,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),a8=Qt(n8),r8=ve({},mr,{newState:0,oldState:0}),l8=Qt(r8),o8=[9,13,27,32],ps=Fe&&"CompositionEvent"in window,i1=null;Fe&&"documentMode"in document&&(i1=document.documentMode);var i8=Fe&&"TextEvent"in window&&!i1,oc=Fe&&(!ps||i1&&8<i1&&11>=i1),ic=" ",sc=!1;function cc(e,t){switch(e){case"keyup":return o8.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sl=!1;function s8(e,t){switch(e){case"compositionend":return uc(t);case"keypress":return t.which!==32?null:(sc=!0,ic);case"textInput":return e=t.data,e===ic&&sc?null:e;default:return null}}function c8(e,t){if(sl)return e==="compositionend"||!ps&&cc(e,t)?(e=tc(),Lo=us=Ta=null,sl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oc&&t.locale!=="ko"?null:t.data;default:return null}}var u8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!u8[e.type]:t==="textarea"}function hc(e,t,n,a){ol?il?il.push(a):il=[a]:ol=a,t=gi(t,"onChange"),0<t.length&&(n=new Ro("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var s1=null,c1=null;function d8(e){U7(e,0)}function $o(e){var t=Nt(e);if(Q5(t))return e}function fc(e,t){if(e==="change")return t}var yc=!1;if(Fe){var vs;if(Fe){var gs="oninput"in document;if(!gs){var pc=document.createElement("div");pc.setAttribute("oninput","return;"),gs=typeof pc.oninput=="function"}vs=gs}else vs=!1;yc=vs&&(!document.documentMode||9<document.documentMode)}function vc(){s1&&(s1.detachEvent("onpropertychange",gc),c1=s1=null)}function gc(e){if(e.propertyName==="value"&&$o(c1)){var t=[];hc(t,c1,e,is(e)),ec(d8,t)}}function h8(e,t,n){e==="focusin"?(vc(),s1=t,c1=n,s1.attachEvent("onpropertychange",gc)):e==="focusout"&&vc()}function f8(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o(c1)}function y8(e,t){if(e==="click")return $o(t)}function p8(e,t){if(e==="input"||e==="change")return $o(t)}function v8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var an=typeof Object.is=="function"?Object.is:v8;function u1(e,t){if(an(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Jl.call(t,i)||!an(e[i],t[i]))return!1}return!0}function mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bc(e,t){var n=mc(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mc(n)}}function _c(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_c(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Mo(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mo(e.document)}return t}function ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function g8(e,t){var n=Cc(t);t=e.focusedElem;var a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&_c(t.ownerDocument.documentElement,t)){if(a!==null&&ms(t)){if(e=a.start,n=a.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var i=t.textContent.length,u=Math.min(a.start,i);a=a.end===void 0?u:Math.min(a.end,i),!n.extend&&u>a&&(i=a,a=u,u=i),i=bc(t,u);var f=bc(t,a);i&&f&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==f.node||n.focusOffset!==f.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),n.removeAllRanges(),u>a?(n.addRange(e),n.extend(f.node,f.offset)):(e.setEnd(f.node,f.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var m8=Fe&&"documentMode"in document&&11>=document.documentMode,cl=null,bs=null,d1=null,_s=!1;function xc(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_s||cl==null||cl!==Mo(a)||(a=cl,"selectionStart"in a&&ms(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),d1&&u1(d1,a)||(d1=a,a=gi(bs,"onSelect"),0<a.length&&(t=new Ro("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=cl)))}function br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ul={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionrun:br("Transition","TransitionRun"),transitionstart:br("Transition","TransitionStart"),transitioncancel:br("Transition","TransitionCancel"),transitionend:br("Transition","TransitionEnd")},Cs={},wc={};Fe&&(wc=document.createElement("div").style,"AnimationEvent"in window||(delete ul.animationend.animation,delete ul.animationiteration.animation,delete ul.animationstart.animation),"TransitionEvent"in window||delete ul.transitionend.transition);function _r(e){if(Cs[e])return Cs[e];if(!ul[e])return e;var t=ul[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wc)return Cs[e]=t[n];return e}var kc=_r("animationend"),Sc=_r("animationiteration"),Ec=_r("animationstart"),b8=_r("transitionrun"),_8=_r("transitionstart"),C8=_r("transitioncancel"),Dc=_r("transitionend"),Mc=new Map,Ac="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function On(e,t){Mc.set(e,t),pn(t,[e])}var mn=[],dl=0,xs=0;function Oo(){for(var e=dl,t=xs=dl=0;t<e;){var n=mn[t];mn[t++]=null;var a=mn[t];mn[t++]=null;var i=mn[t];mn[t++]=null;var u=mn[t];if(mn[t++]=null,a!==null&&i!==null){var f=a.pending;f===null?i.next=i:(i.next=f.next,f.next=i),a.pending=i}u!==0&&Lc(n,i,u)}}function No(e,t,n,a){mn[dl++]=e,mn[dl++]=t,mn[dl++]=n,mn[dl++]=a,xs|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function ws(e,t,n,a){return No(e,t,n,a),Uo(e)}function Ra(e,t){return No(e,null,null,t),Uo(e)}function Lc(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,u=e.return;u!==null;)u.childLanes|=n,a=u.alternate,a!==null&&(a.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(i=!0)),e=u,u=u.return;i&&t!==null&&e.tag===3&&(u=e.stateNode,i=31-xt(n),u=u.hiddenUpdates,e=u[i],e===null?u[i]=[t]:e.push(t),t.lane=n|536870912)}function Uo(e){if(50<O1)throw O1=0,A2=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hl={},zc=new WeakMap;function bn(e,t){if(typeof e=="object"&&e!==null){var n=zc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:se(t)},zc.set(e,t),t)}return{value:e,source:t,stack:se(t)}}var fl=[],yl=0,Vo=null,Bo=0,_n=[],Cn=0,Cr=null,ia=1,sa="";function xr(e,t){fl[yl++]=Bo,fl[yl++]=Vo,Vo=e,Bo=t}function Tc(e,t,n){_n[Cn++]=ia,_n[Cn++]=sa,_n[Cn++]=Cr,Cr=e;var a=ia;e=sa;var i=32-xt(a)-1;a&=~(1<<i),n+=1;var u=32-xt(t)+i;if(30<u){var f=i-i%5;u=(a&(1<<f)-1).toString(32),a>>=f,i-=f,ia=1<<32-xt(t)+i|n<<i|a,sa=u+e}else ia=1<<u|n<<i|a,sa=e}function ks(e){e.return!==null&&(xr(e,1),Tc(e,1,0))}function Ss(e){for(;e===Vo;)Vo=fl[--yl],fl[yl]=null,Bo=fl[--yl],fl[yl]=null;for(;e===Cr;)Cr=_n[--Cn],_n[Cn]=null,sa=_n[--Cn],_n[Cn]=null,ia=_n[--Cn],_n[Cn]=null}var jt=null,Rt=null,Ne=!1,Nn=null,Pn=!1,Es=Error(s(519));function wr(e){var t=Error(s(418,""));throw y1(bn(t,e)),Es}function Rc(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[te]=e,t[I]=a,n){case"dialog":Re("cancel",t),Re("close",t);break;case"iframe":case"object":case"embed":Re("load",t);break;case"video":case"audio":for(n=0;n<U1.length;n++)Re(U1[n],t);break;case"source":Re("error",t);break;case"img":case"image":case"link":Re("error",t),Re("load",t);break;case"details":Re("toggle",t);break;case"input":Re("invalid",t),F5(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Do(t);break;case"select":Re("invalid",t);break;case"textarea":Re("invalid",t),P5(t,a.value,a.defaultValue,a.children),Do(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||j7(t.textContent,n)?(a.popover!=null&&(Re("beforetoggle",t),Re("toggle",t)),a.onScroll!=null&&Re("scroll",t),a.onScrollEnd!=null&&Re("scrollend",t),a.onClick!=null&&(t.onclick=mi),t=!0):t=!1,t||wr(e)}function Hc(e){for(jt=e.return;jt;)switch(jt.tag){case 3:case 27:Pn=!0;return;case 5:case 13:Pn=!1;return;default:jt=jt.return}}function h1(e){if(e!==jt)return!1;if(!Ne)return Hc(e),Ne=!0,!1;var t=!1,n;if((n=e.tag!==3&&e.tag!==27)&&((n=e.tag===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||X2(e.type,e.memoizedProps)),n=!n),n&&(t=!0),t&&Rt&&wr(e),Hc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Rt=Vn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Rt=null}}else Rt=jt?Vn(e.stateNode.nextSibling):null;return!0}function f1(){Rt=jt=null,Ne=!1}function y1(e){Nn===null?Nn=[e]:Nn.push(e)}var p1=Error(s(460)),$c=Error(s(474)),Ds={then:function(){}};function Oc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function qo(){}function Nc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(qo,qo),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===p1?Error(s(483)):e;default:if(typeof t.status=="string")t.then(qo,qo);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===p1?Error(s(483)):e}throw v1=t,p1}}var v1=null;function Uc(){if(v1===null)throw Error(s(459));var e=v1;return v1=null,e}var pl=null,g1=0;function jo(e){var t=g1;return g1+=1,pl===null&&(pl=[]),Nc(pl,e,t)}function m1(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Zo(e,t){throw t.$$typeof===d?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Vc(e){var t=e._init;return t(e._payload)}function Bc(e){function t(D,k){if(e){var A=D.deletions;A===null?(D.deletions=[k],D.flags|=16):A.push(k)}}function n(D,k){if(!e)return null;for(;k!==null;)t(D,k),k=k.sibling;return null}function a(D){for(var k=new Map;D!==null;)D.key!==null?k.set(D.key,D):k.set(D.index,D),D=D.sibling;return k}function i(D,k){return D=Ga(D,k),D.index=0,D.sibling=null,D}function u(D,k,A){return D.index=A,e?(A=D.alternate,A!==null?(A=A.index,A<k?(D.flags|=33554434,k):A):(D.flags|=33554434,k)):(D.flags|=1048576,k)}function f(D){return e&&D.alternate===null&&(D.flags|=33554434),D}function v(D,k,A,V){return k===null||k.tag!==6?(k=C2(A,D.mode,V),k.return=D,k):(k=i(k,A),k.return=D,k)}function b(D,k,A,V){var ne=A.type;return ne===y?N(D,k,A.props.children,V,A.key):k!==null&&(k.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===fe&&Vc(ne)===k.type)?(k=i(k,A.props),m1(k,A),k.return=D,k):(k=ii(A.type,A.key,A.props,null,D.mode,V),m1(k,A),k.return=D,k)}function S(D,k,A,V){return k===null||k.tag!==4||k.stateNode.containerInfo!==A.containerInfo||k.stateNode.implementation!==A.implementation?(k=x2(A,D.mode,V),k.return=D,k):(k=i(k,A.children||[]),k.return=D,k)}function N(D,k,A,V,ne){return k===null||k.tag!==7?(k=Rr(A,D.mode,V,ne),k.return=D,k):(k=i(k,A),k.return=D,k)}function q(D,k,A){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=C2(""+k,D.mode,A),k.return=D,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case h:return A=ii(k.type,k.key,k.props,null,D.mode,A),m1(A,k),A.return=D,A;case g:return k=x2(k,D.mode,A),k.return=D,k;case fe:var V=k._init;return k=V(k._payload),q(D,k,A)}if(ee(k)||T(k))return k=Rr(k,D.mode,A,null),k.return=D,k;if(typeof k.then=="function")return q(D,jo(k),A);if(k.$$typeof===L)return q(D,ri(D,k),A);Zo(D,k)}return null}function z(D,k,A,V){var ne=k!==null?k.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return ne!==null?null:v(D,k,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case h:return A.key===ne?b(D,k,A,V):null;case g:return A.key===ne?S(D,k,A,V):null;case fe:return ne=A._init,A=ne(A._payload),z(D,k,A,V)}if(ee(A)||T(A))return ne!==null?null:N(D,k,A,V,null);if(typeof A.then=="function")return z(D,k,jo(A),V);if(A.$$typeof===L)return z(D,k,ri(D,A),V);Zo(D,A)}return null}function O(D,k,A,V,ne){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return D=D.get(A)||null,v(k,D,""+V,ne);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case h:return D=D.get(V.key===null?A:V.key)||null,b(k,D,V,ne);case g:return D=D.get(V.key===null?A:V.key)||null,S(k,D,V,ne);case fe:var Ee=V._init;return V=Ee(V._payload),O(D,k,A,V,ne)}if(ee(V)||T(V))return D=D.get(A)||null,N(k,D,V,ne,null);if(typeof V.then=="function")return O(D,k,A,jo(V),ne);if(V.$$typeof===L)return O(D,k,A,ri(k,V),ne);Zo(k,V)}return null}function ie(D,k,A,V){for(var ne=null,Ee=null,he=k,ye=k=0,Et=null;he!==null&&ye<A.length;ye++){he.index>ye?(Et=he,he=null):Et=he.sibling;var Ue=z(D,he,A[ye],V);if(Ue===null){he===null&&(he=Et);break}e&&he&&Ue.alternate===null&&t(D,he),k=u(Ue,k,ye),Ee===null?ne=Ue:Ee.sibling=Ue,Ee=Ue,he=Et}if(ye===A.length)return n(D,he),Ne&&xr(D,ye),ne;if(he===null){for(;ye<A.length;ye++)he=q(D,A[ye],V),he!==null&&(k=u(he,k,ye),Ee===null?ne=he:Ee.sibling=he,Ee=he);return Ne&&xr(D,ye),ne}for(he=a(he);ye<A.length;ye++)Et=O(he,D,ye,A[ye],V),Et!==null&&(e&&Et.alternate!==null&&he.delete(Et.key===null?ye:Et.key),k=u(Et,k,ye),Ee===null?ne=Et:Ee.sibling=Et,Ee=Et);return e&&he.forEach(function(Wa){return t(D,Wa)}),Ne&&xr(D,ye),ne}function be(D,k,A,V){if(A==null)throw Error(s(151));for(var ne=null,Ee=null,he=k,ye=k=0,Et=null,Ue=A.next();he!==null&&!Ue.done;ye++,Ue=A.next()){he.index>ye?(Et=he,he=null):Et=he.sibling;var Wa=z(D,he,Ue.value,V);if(Wa===null){he===null&&(he=Et);break}e&&he&&Wa.alternate===null&&t(D,he),k=u(Wa,k,ye),Ee===null?ne=Wa:Ee.sibling=Wa,Ee=Wa,he=Et}if(Ue.done)return n(D,he),Ne&&xr(D,ye),ne;if(he===null){for(;!Ue.done;ye++,Ue=A.next())Ue=q(D,Ue.value,V),Ue!==null&&(k=u(Ue,k,ye),Ee===null?ne=Ue:Ee.sibling=Ue,Ee=Ue);return Ne&&xr(D,ye),ne}for(he=a(he);!Ue.done;ye++,Ue=A.next())Ue=O(he,D,ye,Ue.value,V),Ue!==null&&(e&&Ue.alternate!==null&&he.delete(Ue.key===null?ye:Ue.key),k=u(Ue,k,ye),Ee===null?ne=Ue:Ee.sibling=Ue,Ee=Ue);return e&&he.forEach(function($4){return t(D,$4)}),Ne&&xr(D,ye),ne}function it(D,k,A,V){if(typeof A=="object"&&A!==null&&A.type===y&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case h:e:{for(var ne=A.key;k!==null;){if(k.key===ne){if(ne=A.type,ne===y){if(k.tag===7){n(D,k.sibling),V=i(k,A.props.children),V.return=D,D=V;break e}}else if(k.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===fe&&Vc(ne)===k.type){n(D,k.sibling),V=i(k,A.props),m1(V,A),V.return=D,D=V;break e}n(D,k);break}else t(D,k);k=k.sibling}A.type===y?(V=Rr(A.props.children,D.mode,V,A.key),V.return=D,D=V):(V=ii(A.type,A.key,A.props,null,D.mode,V),m1(V,A),V.return=D,D=V)}return f(D);case g:e:{for(ne=A.key;k!==null;){if(k.key===ne)if(k.tag===4&&k.stateNode.containerInfo===A.containerInfo&&k.stateNode.implementation===A.implementation){n(D,k.sibling),V=i(k,A.children||[]),V.return=D,D=V;break e}else{n(D,k);break}else t(D,k);k=k.sibling}V=x2(A,D.mode,V),V.return=D,D=V}return f(D);case fe:return ne=A._init,A=ne(A._payload),it(D,k,A,V)}if(ee(A))return ie(D,k,A,V);if(T(A)){if(ne=T(A),typeof ne!="function")throw Error(s(150));return A=ne.call(A),be(D,k,A,V)}if(typeof A.then=="function")return it(D,k,jo(A),V);if(A.$$typeof===L)return it(D,k,ri(D,A),V);Zo(D,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,k!==null&&k.tag===6?(n(D,k.sibling),V=i(k,A),V.return=D,D=V):(n(D,k),V=C2(A,D.mode,V),V.return=D,D=V),f(D)):n(D,k)}return function(D,k,A,V){try{g1=0;var ne=it(D,k,A,V);return pl=null,ne}catch(he){if(he===p1)throw he;var Ee=Sn(29,he,null,D.mode);return Ee.lanes=V,Ee.return=D,Ee}finally{}}}var kr=Bc(!0),qc=Bc(!1),vl=Oe(null),Yo=Oe(0);function jc(e,t){e=ba,xe(Yo,e),xe(vl,t),ba=e|t.baseLanes}function Ms(){xe(Yo,ba),xe(vl,vl.current)}function As(){ba=Yo.current,at(vl),at(Yo)}var xn=Oe(null),Jn=null;function Ha(e){var t=e.alternate;xe(gt,gt.current&1),xe(xn,e),Jn===null&&(t===null||vl.current!==null||t.memoizedState!==null)&&(Jn=e)}function Zc(e){if(e.tag===22){if(xe(gt,gt.current),xe(xn,e),Jn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Jn=e)}}else $a()}function $a(){xe(gt,gt.current),xe(xn,xn.current)}function ca(e){at(xn),Jn===e&&(Jn=null),at(gt)}var gt=Oe(0);function Go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var x8=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},w8=l.unstable_scheduleCallback,k8=l.unstable_NormalPriority,mt={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ls(){return{controller:new x8,data:new Map,refCount:0}}function b1(e){e.refCount--,e.refCount===0&&w8(k8,function(){e.controller.abort()})}var _1=null,zs=0,gl=0,ml=null;function S8(e,t){if(_1===null){var n=_1=[];zs=0,gl=N2(),ml={status:"pending",value:void 0,then:function(a){n.push(a)}}}return zs++,t.then(Yc,Yc),t}function Yc(){if(--zs===0&&_1!==null){ml!==null&&(ml.status="fulfilled");var e=_1;_1=null,gl=0,ml=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function E8(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var Gc=X.S;X.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&S8(e,t),Gc!==null&&Gc(e,t)};var Sr=Oe(null);function Ts(){var e=Sr.current;return e!==null?e:Ke.pooledCache}function Xo(e,t){t===null?xe(Sr,Sr.current):xe(Sr,t.pool)}function Xc(){var e=Ts();return e===null?null:{parent:mt._currentValue,pool:e}}var Oa=0,Se=null,je=null,ft=null,Qo=!1,bl=!1,Er=!1,Fo=0,C1=0,_l=null,D8=0;function dt(){throw Error(s(321))}function Rs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!an(e[n],t[n]))return!1;return!0}function Hs(e,t,n,a,i,u){return Oa=u,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,X.H=e===null||e.memoizedState===null?Dr:Na,Er=!1,u=n(a,i),Er=!1,bl&&(u=Fc(t,n,a,i)),Qc(e),u}function Qc(e){X.H=Wn;var t=je!==null&&je.next!==null;if(Oa=0,ft=je=Se=null,Qo=!1,C1=0,_l=null,t)throw Error(s(300));e===null||kt||(e=e.dependencies,e!==null&&ai(e)&&(kt=!0))}function Fc(e,t,n,a){Se=e;var i=0;do{if(bl&&(_l=null),C1=0,bl=!1,25<=i)throw Error(s(301));if(i+=1,ft=je=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}X.H=Mr,u=t(n,a)}while(bl);return u}function M8(){var e=X.H,t=e.useState()[0];return t=typeof t.then=="function"?x1(t):t,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(Se.flags|=1024),t}function $s(){var e=Fo!==0;return Fo=0,e}function Os(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ns(e){if(Qo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Qo=!1}Oa=0,ft=je=Se=null,bl=!1,C1=Fo=0,_l=null}function Ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Se.memoizedState=ft=e:ft=ft.next=e,ft}function yt(){if(je===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=ft===null?Se.memoizedState:ft.next;if(t!==null)ft=t,je=e;else{if(e===null)throw Se.alternate===null?Error(s(467)):Error(s(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},ft===null?Se.memoizedState=ft=e:ft=ft.next=e}return ft}var Ko;Ko=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function x1(e){var t=C1;return C1+=1,_l===null&&(_l=[]),e=Nc(_l,e,t),t=Se,(ft===null?t.memoizedState:ft.next)===null&&(t=t.alternate,X.H=t===null||t.memoizedState===null?Dr:Na),e}function Po(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return x1(e);if(e.$$typeof===L)return Ut(e)}throw Error(s(438,String(e)))}function Us(e){var t=null,n=Se.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Se.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ko(),Se.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=me;return t.index++,n}function ua(e,t){return typeof t=="function"?t(e):t}function Jo(e){var t=yt();return Vs(t,je,e)}function Vs(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var i=e.baseQueue,u=a.pending;if(u!==null){if(i!==null){var f=i.next;i.next=u.next,u.next=f}t.baseQueue=i=u,a.pending=null}if(u=e.baseState,i===null)e.memoizedState=u;else{t=i.next;var v=f=null,b=null,S=t,N=!1;do{var q=S.lane&-536870913;if(q!==S.lane?(He&q)===q:(Oa&q)===q){var z=S.revertLane;if(z===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),q===gl&&(N=!0);else if((Oa&z)===z){S=S.next,z===gl&&(N=!0);continue}else q={lane:0,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},b===null?(v=b=q,f=u):b=b.next=q,Se.lanes|=z,Xa|=z;q=S.action,Er&&n(u,q),u=S.hasEagerState?S.eagerState:n(u,q)}else z={lane:q,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},b===null?(v=b=z,f=u):b=b.next=z,Se.lanes|=q,Xa|=q;S=S.next}while(S!==null&&S!==t);if(b===null?f=u:b.next=v,!an(u,e.memoizedState)&&(kt=!0,N&&(n=ml,n!==null)))throw n;e.memoizedState=u,e.baseState=f,e.baseQueue=b,a.lastRenderedState=u}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Bs(e){var t=yt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,u=t.memoizedState;if(i!==null){n.pending=null;var f=i=i.next;do u=e(u,f.action),f=f.next;while(f!==i);an(u,t.memoizedState)||(kt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,a]}function Kc(e,t,n){var a=Se,i=yt(),u=Ne;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=t();var f=!an((je||i).memoizedState,n);if(f&&(i.memoizedState=n,kt=!0),i=i.queue,Zs(Wc.bind(null,a,i,e),[e]),i.getSnapshot!==t||f||ft!==null&&ft.memoizedState.tag&1){if(a.flags|=2048,Cl(9,Jc.bind(null,a,i,n,t),{destroy:void 0},null),Ke===null)throw Error(s(349));u||(Oa&60)!==0||Pc(a,t,n)}return n}function Pc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t=Ko(),Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jc(e,t,n,a){t.value=n,t.getSnapshot=a,Ic(t)&&eu(e)}function Wc(e,t,n){return n(function(){Ic(t)&&eu(e)})}function Ic(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!an(e,n)}catch{return!0}}function eu(e){var t=Ra(e,2);t!==null&&Zt(t,e,2)}function qs(e){var t=Ft();if(typeof e=="function"){var n=e;if(e=n(),Er){Hn(!0);try{n()}finally{Hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:e},t}function tu(e,t,n,a){return e.baseState=n,Vs(e,je,typeof a=="function"?a:ua)}function A8(e,t,n,a,i){if(ei(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){u.listeners.push(f)}};X.T!==null?n(!0):u.isTransition=!1,a(u),n=t.pending,n===null?(u.next=t.pending=u,nu(t,u)):(u.next=n.next,t.pending=n.next=u)}}function nu(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var u=X.T,f={};X.T=f;try{var v=n(i,a),b=X.S;b!==null&&b(f,v),au(e,t,v)}catch(S){js(e,t,S)}finally{X.T=u}}else try{u=n(i,a),au(e,t,u)}catch(S){js(e,t,S)}}function au(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){ru(e,t,a)},function(a){return js(e,t,a)}):ru(e,t,n)}function ru(e,t,n){t.status="fulfilled",t.value=n,lu(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,nu(e,n)))}function js(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,lu(t),t=t.next;while(t!==a)}e.action=null}function lu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ou(e,t){return t}function iu(e,t){if(Ne){var n=Ke.formState;if(n!==null){e:{var a=Se;if(Ne){if(Rt){t:{for(var i=Rt,u=Pn;i.nodeType!==8;){if(!u){i=null;break t}if(i=Vn(i.nextSibling),i===null){i=null;break t}}u=i.data,i=u==="F!"||u==="F"?i:null}if(i){Rt=Vn(i.nextSibling),a=i.data==="F!";break e}}wr(a)}a=!1}a&&(t=n[0])}}return n=Ft(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ou,lastRenderedState:t},n.queue=a,n=Su.bind(null,Se,a),a.dispatch=n,a=qs(!1),u=Fs.bind(null,Se,!1,a.queue),a=Ft(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=A8.bind(null,Se,i,u,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function su(e){var t=yt();return cu(t,je,e)}function cu(e,t,n){t=Vs(e,t,ou)[0],e=Jo(ua)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?x1(t):t;var a=yt(),i=a.queue,u=i.dispatch;return n!==a.memoizedState&&(Se.flags|=2048,Cl(9,L8.bind(null,i,n),{destroy:void 0},null)),[t,u,e]}function L8(e,t){e.action=t}function uu(e){var t=yt(),n=je;if(n!==null)return cu(t,n,e);yt(),t=t.memoizedState,n=yt();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Cl(e,t,n,a){return e={tag:e,create:t,inst:n,deps:a,next:null},t=Se.updateQueue,t===null&&(t=Ko(),Se.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function du(){return yt().memoizedState}function Wo(e,t,n,a){var i=Ft();Se.flags|=e,i.memoizedState=Cl(1|t,n,{destroy:void 0},a===void 0?null:a)}function Io(e,t,n,a){var i=yt();a=a===void 0?null:a;var u=i.memoizedState.inst;je!==null&&a!==null&&Rs(a,je.memoizedState.deps)?i.memoizedState=Cl(t,n,u,a):(Se.flags|=e,i.memoizedState=Cl(1|t,n,u,a))}function hu(e,t){Wo(8390656,8,e,t)}function Zs(e,t){Io(2048,8,e,t)}function fu(e,t){return Io(4,2,e,t)}function yu(e,t){return Io(4,4,e,t)}function pu(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vu(e,t,n){n=n!=null?n.concat([e]):null,Io(4,4,pu.bind(null,t,e),n)}function Ys(){}function gu(e,t){var n=yt();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Rs(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function mu(e,t){var n=yt();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Rs(t,a[1]))return a[0];if(a=e(),Er){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[a,t],a}function Gs(e,t,n){return n===void 0||(Oa&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=_7(),Se.lanes|=e,Xa|=e,n)}function bu(e,t,n,a){return an(n,t)?n:vl.current!==null?(e=Gs(e,n,a),an(e,t)||(kt=!0),e):(Oa&42)===0?(kt=!0,e.memoizedState=n):(e=_7(),Se.lanes|=e,Xa|=e,t)}function _u(e,t,n,a,i){var u=P.p;P.p=u!==0&&8>u?u:8;var f=X.T,v={};X.T=v,Fs(e,!1,t,n);try{var b=i(),S=X.S;if(S!==null&&S(v,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var N=E8(b,a);w1(e,t,N,sn(e))}else w1(e,t,a,sn(e))}catch(q){w1(e,t,{then:function(){},status:"rejected",reason:q},sn())}finally{P.p=u,X.T=f}}function z8(){}function Xs(e,t,n,a){if(e.tag!==5)throw Error(s(476));var i=Cu(e).queue;_u(e,i,t,ke,n===null?z8:function(){return xu(e),n(a)})}function Cu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ke,baseState:ke,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:ke},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function xu(e){var t=Cu(e).next.queue;w1(e,t,{},sn())}function Qs(){return Ut(Z1)}function wu(){return yt().memoizedState}function ku(){return yt().memoizedState}function T8(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=sn();e=Ba(n);var a=qa(t,e,n);a!==null&&(Zt(a,t,n),E1(a,t,n)),t={cache:Ls()},e.payload=t;return}t=t.return}}function R8(e,t,n){var a=sn();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ei(e)?Eu(t,n):(n=ws(e,t,n,a),n!==null&&(Zt(n,e,a),Du(n,t,a)))}function Su(e,t,n){var a=sn();w1(e,t,n,a)}function w1(e,t,n,a){var i={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ei(e))Eu(t,i);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var f=t.lastRenderedState,v=u(f,n);if(i.hasEagerState=!0,i.eagerState=v,an(v,f))return No(e,t,i,0),Ke===null&&Oo(),!1}catch{}finally{}if(n=ws(e,t,i,a),n!==null)return Zt(n,e,a),Du(n,t,a),!0}return!1}function Fs(e,t,n,a){if(a={lane:2,revertLane:N2(),action:a,hasEagerState:!1,eagerState:null,next:null},ei(e)){if(t)throw Error(s(479))}else t=ws(e,n,a,2),t!==null&&Zt(t,e,2)}function ei(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Eu(e,t){bl=Qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Du(e,t,n){if((n&4194176)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,oe(e,n)}}var Wn={readContext:Ut,use:Po,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useLayoutEffect:dt,useInsertionEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useSyncExternalStore:dt,useId:dt};Wn.useCacheRefresh=dt,Wn.useMemoCache=dt,Wn.useHostTransitionStatus=dt,Wn.useFormState=dt,Wn.useActionState=dt,Wn.useOptimistic=dt;var Dr={readContext:Ut,use:Po,useCallback:function(e,t){return Ft().memoizedState=[e,t===void 0?null:t],e},useContext:Ut,useEffect:hu,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Wo(4194308,4,pu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wo(4194308,4,e,t)},useInsertionEffect:function(e,t){Wo(4,2,e,t)},useMemo:function(e,t){var n=Ft();t=t===void 0?null:t;var a=e();if(Er){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Ft();if(n!==void 0){var i=n(t);if(Er){Hn(!0);try{n(t)}finally{Hn(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=R8.bind(null,Se,e),[a.memoizedState,e]},useRef:function(e){var t=Ft();return e={current:e},t.memoizedState=e},useState:function(e){e=qs(e);var t=e.queue,n=Su.bind(null,Se,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ys,useDeferredValue:function(e,t){var n=Ft();return Gs(n,e,t)},useTransition:function(){var e=qs(!1);return e=_u.bind(null,Se,e.queue,!0,!1),Ft().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Se,i=Ft();if(Ne){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ke===null)throw Error(s(349));(He&60)!==0||Pc(a,t,n)}i.memoizedState=n;var u={value:n,getSnapshot:t};return i.queue=u,hu(Wc.bind(null,a,u,e),[e]),a.flags|=2048,Cl(9,Jc.bind(null,a,u,n,t),{destroy:void 0},null),n},useId:function(){var e=Ft(),t=Ke.identifierPrefix;if(Ne){var n=sa,a=ia;n=(a&~(1<<32-xt(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=D8++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return Ft().memoizedState=T8.bind(null,Se)}};Dr.useMemoCache=Us,Dr.useHostTransitionStatus=Qs,Dr.useFormState=iu,Dr.useActionState=iu,Dr.useOptimistic=function(e){var t=Ft();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,Se,!0,n),n.dispatch=t,[e,t]};var Na={readContext:Ut,use:Po,useCallback:gu,useContext:Ut,useEffect:Zs,useImperativeHandle:vu,useInsertionEffect:fu,useLayoutEffect:yu,useMemo:mu,useReducer:Jo,useRef:du,useState:function(){return Jo(ua)},useDebugValue:Ys,useDeferredValue:function(e,t){var n=yt();return bu(n,je.memoizedState,e,t)},useTransition:function(){var e=Jo(ua)[0],t=yt().memoizedState;return[typeof e=="boolean"?e:x1(e),t]},useSyncExternalStore:Kc,useId:wu};Na.useCacheRefresh=ku,Na.useMemoCache=Us,Na.useHostTransitionStatus=Qs,Na.useFormState=su,Na.useActionState=su,Na.useOptimistic=function(e,t){var n=yt();return tu(n,je,e,t)};var Mr={readContext:Ut,use:Po,useCallback:gu,useContext:Ut,useEffect:Zs,useImperativeHandle:vu,useInsertionEffect:fu,useLayoutEffect:yu,useMemo:mu,useReducer:Bs,useRef:du,useState:function(){return Bs(ua)},useDebugValue:Ys,useDeferredValue:function(e,t){var n=yt();return je===null?Gs(n,e,t):bu(n,je.memoizedState,e,t)},useTransition:function(){var e=Bs(ua)[0],t=yt().memoizedState;return[typeof e=="boolean"?e:x1(e),t]},useSyncExternalStore:Kc,useId:wu};Mr.useCacheRefresh=ku,Mr.useMemoCache=Us,Mr.useHostTransitionStatus=Qs,Mr.useFormState=uu,Mr.useActionState=uu,Mr.useOptimistic=function(e,t){var n=yt();return je!==null?tu(n,je,e,t):(n.baseState=e,[e,n.queue.dispatch])};function Ks(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ps={isMounted:function(e){return(e=e._reactInternals)?ae(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=sn(),i=Ba(a);i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,a),t!==null&&(Zt(t,e,a),E1(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=sn(),i=Ba(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,a),t!==null&&(Zt(t,e,a),E1(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=sn(),a=Ba(n);a.tag=2,t!=null&&(a.callback=t),t=qa(e,a,n),t!==null&&(Zt(t,e,n),E1(t,e,n))}};function Mu(e,t,n,a,i,u,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,f):t.prototype&&t.prototype.isPureReactComponent?!u1(n,a)||!u1(i,u):!0}function Au(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Ps.enqueueReplaceState(t,t.state,null)}function Ar(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=ve({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var ti=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Lu(e){ti(e)}function zu(e){console.error(e)}function Tu(e){ti(e)}function ni(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Ru(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Js(e,t,n){return n=Ba(n),n.tag=3,n.payload={element:null},n.callback=function(){ni(e,t)},n}function Hu(e){return e=Ba(e),e.tag=3,e}function $u(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var u=a.value;e.payload=function(){return i(u)},e.callback=function(){Ru(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Ru(t,n,a),typeof i!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var v=a.stack;this.componentDidCatch(a.value,{componentStack:v!==null?v:""})})}function H8(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&S1(t,n,i,!0),n=xn.current,n!==null){switch(n.tag){case 13:return Jn===null?T2():n.alternate===null&&ot===0&&(ot=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===Ds?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),H2(e,a,i)),!1;case 22:return n.flags|=65536,a===Ds?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),H2(e,a,i)),!1}throw Error(s(435,n.tag))}return H2(e,a,i),T2(),!1}if(Ne)return t=xn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==Es&&(e=Error(s(422),{cause:a}),y1(bn(e,n)))):(a!==Es&&(t=Error(s(423),{cause:a}),y1(bn(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=bn(a,n),i=Js(e.stateNode,a,i),h2(e,i),ot!==4&&(ot=2)),!1;var u=Error(s(520),{cause:a});if(u=bn(u,n),H1===null?H1=[u]:H1.push(u),ot!==4&&(ot=2),t===null)return!0;a=bn(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Js(n.stateNode,a,e),h2(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Qa===null||!Qa.has(u))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Hu(i),$u(i,e,n,a),h2(n,i),!1}n=n.return}while(n!==null);return!1}var Ou=Error(s(461)),kt=!1;function Ht(e,t,n,a){t.child=e===null?qc(t,null,n,a):kr(t,e.child,n,a)}function Nu(e,t,n,a,i){n=n.render;var u=t.ref;if("ref"in a){var f={};for(var v in a)v!=="ref"&&(f[v]=a[v])}else f=a;return zr(t),a=Hs(e,t,n,f,u,i),v=$s(),e!==null&&!kt?(Os(e,t,i),da(e,t,i)):(Ne&&v&&ks(t),t.flags|=1,Ht(e,t,a,i),t.child)}function Uu(e,t,n,a,i){if(e===null){var u=n.type;return typeof u=="function"&&!_2(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,Vu(e,t,u,a,i)):(e=ii(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!o2(e,i)){var f=u.memoizedProps;if(n=n.compare,n=n!==null?n:u1,n(f,a)&&e.ref===t.ref)return da(e,t,i)}return t.flags|=1,e=Ga(u,a),e.ref=t.ref,e.return=t,t.child=e}function Vu(e,t,n,a,i){if(e!==null){var u=e.memoizedProps;if(u1(u,a)&&e.ref===t.ref)if(kt=!1,t.pendingProps=a=u,o2(e,i))(e.flags&131072)!==0&&(kt=!0);else return t.lanes=e.lanes,da(e,t,i)}return Ws(e,t,n,a,i)}function Bu(e,t,n){var a=t.pendingProps,i=a.children,u=(t.stateNode._pendingVisibility&2)!==0,f=e!==null?e.memoizedState:null;if(k1(e,t),a.mode==="hidden"||u){if((t.flags&128)!==0){if(a=f!==null?f.baseLanes|n:n,e!==null){for(i=t.child=e.child,u=0;i!==null;)u=u|i.lanes|i.childLanes,i=i.sibling;t.childLanes=u&~a}else t.childLanes=0,t.child=null;return qu(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xo(t,f!==null?f.cachePool:null),f!==null?jc(t,f):Ms(),Zc(t);else return t.lanes=t.childLanes=536870912,qu(e,t,f!==null?f.baseLanes|n:n,n)}else f!==null?(Xo(t,f.cachePool),jc(t,f),$a(),t.memoizedState=null):(e!==null&&Xo(t,null),Ms(),$a());return Ht(e,t,i,n),t.child}function qu(e,t,n,a){var i=Ts();return i=i===null?null:{parent:mt._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Xo(t,null),Ms(),Zc(t),e!==null&&S1(e,t,a,!0),null}function k1(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=2097664)}}function Ws(e,t,n,a,i){return zr(t),n=Hs(e,t,n,a,void 0,i),a=$s(),e!==null&&!kt?(Os(e,t,i),da(e,t,i)):(Ne&&a&&ks(t),t.flags|=1,Ht(e,t,n,i),t.child)}function ju(e,t,n,a,i,u){return zr(t),t.updateQueue=null,n=Fc(t,a,n,i),Qc(e),a=$s(),e!==null&&!kt?(Os(e,t,u),da(e,t,u)):(Ne&&a&&ks(t),t.flags|=1,Ht(e,t,n,u),t.child)}function Zu(e,t,n,a,i){if(zr(t),t.stateNode===null){var u=hl,f=n.contextType;typeof f=="object"&&f!==null&&(u=Ut(f)),u=new n(a,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Ps,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=a,u.state=t.memoizedState,u.refs={},u2(t),f=n.contextType,u.context=typeof f=="object"&&f!==null?Ut(f):hl,u.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Ks(t,n,f,a),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(f=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),f!==u.state&&Ps.enqueueReplaceState(u,u.state,null),M1(t,a,u,i),D1(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){u=t.stateNode;var v=t.memoizedProps,b=Ar(n,v);u.props=b;var S=u.context,N=n.contextType;f=hl,typeof N=="object"&&N!==null&&(f=Ut(N));var q=n.getDerivedStateFromProps;N=typeof q=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,N||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||S!==f)&&Au(t,u,a,f),Va=!1;var z=t.memoizedState;u.state=z,M1(t,a,u,i),D1(),S=t.memoizedState,v||z!==S||Va?(typeof q=="function"&&(Ks(t,n,q,a),S=t.memoizedState),(b=Va||Mu(t,n,b,a,z,S,f))?(N||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=S),u.props=a,u.state=S,u.context=f,a=b):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,d2(e,t),f=t.memoizedProps,N=Ar(n,f),u.props=N,q=t.pendingProps,z=u.context,S=n.contextType,b=hl,typeof S=="object"&&S!==null&&(b=Ut(S)),v=n.getDerivedStateFromProps,(S=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==q||z!==b)&&Au(t,u,a,b),Va=!1,z=t.memoizedState,u.state=z,M1(t,a,u,i),D1();var O=t.memoizedState;f!==q||z!==O||Va||e!==null&&e.dependencies!==null&&ai(e.dependencies)?(typeof v=="function"&&(Ks(t,n,v,a),O=t.memoizedState),(N=Va||Mu(t,n,N,a,z,O,b)||e!==null&&e.dependencies!==null&&ai(e.dependencies))?(S||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,O,b),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,O,b)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=O),u.props=a,u.state=O,u.context=b,a=N):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),a=!1)}return u=a,k1(e,t),a=(t.flags&128)!==0,u||a?(u=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&a?(t.child=kr(t,e.child,null,i),t.child=kr(t,null,n,i)):Ht(e,t,n,i),t.memoizedState=u.state,e=t.child):e=da(e,t,i),e}function Yu(e,t,n,a){return f1(),t.flags|=256,Ht(e,t,n,a),t.child}var Is={dehydrated:null,treeContext:null,retryLane:0};function e2(e){return{baseLanes:e,cachePool:Xc()}}function t2(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=En),e}function Gu(e,t,n){var a=t.pendingProps,i=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(gt.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ne){if(i?Ha(t):$a(),Ne){var v=Rt,b;if(b=v){e:{for(b=v,v=Pn;b.nodeType!==8;){if(!v){v=null;break e}if(b=Vn(b.nextSibling),b===null){v=null;break e}}v=b}v!==null?(t.memoizedState={dehydrated:v,treeContext:Cr!==null?{id:ia,overflow:sa}:null,retryLane:536870912},b=Sn(18,null,null,0),b.stateNode=v,b.return=t,t.child=b,jt=t,Rt=null,b=!0):b=!1}b||wr(t)}if(v=t.memoizedState,v!==null&&(v=v.dehydrated,v!==null))return v.data==="$!"?t.lanes=16:t.lanes=536870912,null;ca(t)}return v=a.children,a=a.fallback,i?($a(),i=t.mode,v=a2({mode:"hidden",children:v},i),a=Rr(a,i,n,null),v.return=t,a.return=t,v.sibling=a,t.child=v,i=t.child,i.memoizedState=e2(n),i.childLanes=t2(e,f,n),t.memoizedState=Is,a):(Ha(t),n2(t,v))}if(b=e.memoizedState,b!==null&&(v=b.dehydrated,v!==null)){if(u)t.flags&256?(Ha(t),t.flags&=-257,t=r2(e,t,n)):t.memoizedState!==null?($a(),t.child=e.child,t.flags|=128,t=null):($a(),i=a.fallback,v=t.mode,a=a2({mode:"visible",children:a.children},v),i=Rr(i,v,n,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,kr(t,e.child,null,n),a=t.child,a.memoizedState=e2(n),a.childLanes=t2(e,f,n),t.memoizedState=Is,t=i);else if(Ha(t),v.data==="$!"){if(f=v.nextSibling&&v.nextSibling.dataset,f)var S=f.dgst;f=S,a=Error(s(419)),a.stack="",a.digest=f,y1({value:a,source:null,stack:null}),t=r2(e,t,n)}else if(kt||S1(e,t,n,!1),f=(n&e.childLanes)!==0,kt||f){if(f=Ke,f!==null){if(a=n&-n,(a&42)!==0)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=(a&(f.suspendedLanes|n))!==0?0:a,a!==0&&a!==b.retryLane)throw b.retryLane=a,Ra(e,a),Zt(f,e,a),Ou}v.data==="$?"||T2(),t=r2(e,t,n)}else v.data==="$?"?(t.flags|=128,t.child=e.child,t=K8.bind(null,e),v._reactRetry=t,t=null):(e=b.treeContext,Rt=Vn(v.nextSibling),jt=t,Ne=!0,Nn=null,Pn=!1,e!==null&&(_n[Cn++]=ia,_n[Cn++]=sa,_n[Cn++]=Cr,ia=e.id,sa=e.overflow,Cr=t),t=n2(t,a.children),t.flags|=4096);return t}return i?($a(),i=a.fallback,v=t.mode,b=e.child,S=b.sibling,a=Ga(b,{mode:"hidden",children:a.children}),a.subtreeFlags=b.subtreeFlags&31457280,S!==null?i=Ga(S,i):(i=Rr(i,v,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,v=e.child.memoizedState,v===null?v=e2(n):(b=v.cachePool,b!==null?(S=mt._currentValue,b=b.parent!==S?{parent:S,pool:S}:b):b=Xc(),v={baseLanes:v.baseLanes|n,cachePool:b}),i.memoizedState=v,i.childLanes=t2(e,f,n),t.memoizedState=Is,a):(Ha(t),n=e.child,e=n.sibling,n=Ga(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function n2(e,t){return t=a2({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function a2(e,t){return g7(e,t,0,null)}function r2(e,t,n){return kr(t,e.child,null,n),e=n2(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xu(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),s2(e.return,t,n)}function l2(e,t,n,a,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=n,u.tailMode=i)}function Qu(e,t,n){var a=t.pendingProps,i=a.revealOrder,u=a.tail;if(Ht(e,t,a.children,n),a=gt.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xu(e,n,t);else if(e.tag===19)Xu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(xe(gt,a),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),l2(t,!1,i,n,u);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}l2(t,!0,n,null,u);break;case"together":l2(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function da(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(S1(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Ga(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ga(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function o2(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ai(e)))}function $8(e,t,n){switch(t.tag){case 3:Jr(t,t.stateNode.containerInfo),Ua(t,mt,e.memoizedState.cache),f1();break;case 27:case 5:Wr(t);break;case 4:Jr(t,t.stateNode.containerInfo);break;case 10:Ua(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Ha(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Gu(e,t,n):(Ha(t),e=da(e,t,n),e!==null?e.sibling:null);Ha(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(S1(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return Qu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(gt,gt.current),a)break;return null;case 22:case 23:return t.lanes=0,Bu(e,t,n);case 24:Ua(t,mt,e.memoizedState.cache)}return da(e,t,n)}function Fu(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)kt=!0;else{if(!o2(e,n)&&(t.flags&128)===0)return kt=!1,$8(e,t,n);kt=(e.flags&131072)!==0}else kt=!1,Ne&&(t.flags&1048576)!==0&&Tc(t,Bo,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,i=a._init;if(a=i(a._payload),t.type=a,typeof a=="function")_2(a)?(e=Ar(a,e),t.tag=1,t=Zu(null,t,a,e,n)):(t.tag=0,t=Ws(null,t,a,e,n));else{if(a!=null){if(i=a.$$typeof,i===U){t.tag=11,t=Nu(null,t,a,e,n);break e}else if(i===j){t.tag=14,t=Uu(null,t,a,e,n);break e}}throw t=Ve(a)||a,Error(s(306,t,""))}}return t;case 0:return Ws(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=Ar(a,t.pendingProps),Zu(e,t,a,i,n);case 3:e:{if(Jr(t,t.stateNode.containerInfo),e===null)throw Error(s(387));var u=t.pendingProps;i=t.memoizedState,a=i.element,d2(e,t),M1(t,u,null,n);var f=t.memoizedState;if(u=f.cache,Ua(t,mt,u),u!==i.cache&&c2(t,[mt],n,!0),D1(),u=f.element,i.isDehydrated)if(i={element:u,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Yu(e,t,u,n);break e}else if(u!==a){a=bn(Error(s(424)),t),y1(a),t=Yu(e,t,u,n);break e}else for(Rt=Vn(t.stateNode.containerInfo.firstChild),jt=t,Ne=!0,Nn=null,Pn=!0,n=qc(t,null,u,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(f1(),u===a){t=da(e,t,n);break e}Ht(e,t,u,n)}t=t.child}return t;case 26:return k1(e,t),e===null?(n=J7(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ne||(n=t.type,e=t.pendingProps,a=bi(Yn.current).createElement(n),a[te]=t,a[I]=e,$t(a,n,e),Ie(a),t.stateNode=a):t.memoizedState=J7(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Wr(t),e===null&&Ne&&(a=t.stateNode=F7(t.type,t.pendingProps,Yn.current),jt=t,Pn=!0,Rt=Vn(a.firstChild)),a=t.pendingProps.children,e!==null||Ne?Ht(e,t,a,n):t.child=kr(t,null,a,n),k1(e,t),t.child;case 5:return e===null&&Ne&&((i=a=Rt)&&(a=d4(a,t.type,t.pendingProps,Pn),a!==null?(t.stateNode=a,jt=t,Rt=Vn(a.firstChild),Pn=!1,i=!0):i=!1),i||wr(t)),Wr(t),i=t.type,u=t.pendingProps,f=e!==null?e.memoizedProps:null,a=u.children,X2(i,u)?a=null:f!==null&&X2(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=Hs(e,t,M8,null,null,n),Z1._currentValue=i),k1(e,t),Ht(e,t,a,n),t.child;case 6:return e===null&&Ne&&((e=n=Rt)&&(n=h4(n,t.pendingProps,Pn),n!==null?(t.stateNode=n,jt=t,Rt=null,e=!0):e=!1),e||wr(t)),null;case 13:return Gu(e,t,n);case 4:return Jr(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=kr(t,null,a,n):Ht(e,t,a,n),t.child;case 11:return Nu(e,t,t.type,t.pendingProps,n);case 7:return Ht(e,t,t.pendingProps,n),t.child;case 8:return Ht(e,t,t.pendingProps.children,n),t.child;case 12:return Ht(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Ua(t,t.type,a.value),Ht(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,zr(t),i=Ut(i),a=a(i),t.flags|=1,Ht(e,t,a,n),t.child;case 14:return Uu(e,t,t.type,t.pendingProps,n);case 15:return Vu(e,t,t.type,t.pendingProps,n);case 19:return Qu(e,t,n);case 22:return Bu(e,t,n);case 24:return zr(t),a=Ut(mt),e===null?(i=Ts(),i===null&&(i=Ke,u=Ls(),i.pooledCache=u,u.refCount++,u!==null&&(i.pooledCacheLanes|=n),i=u),t.memoizedState={parent:a,cache:i},u2(t),Ua(t,mt,i)):((e.lanes&n)!==0&&(d2(e,t),M1(t,null,null,n),D1()),i=e.memoizedState,u=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ua(t,mt,a)):(a=u.cache,Ua(t,mt,a),a!==i.cache&&c2(t,[mt],n,!0))),Ht(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}var i2=Oe(null),Lr=null,ha=null;function Ua(e,t,n){xe(i2,t._currentValue),t._currentValue=n}function fa(e){e._currentValue=i2.current,at(i2)}function s2(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function c2(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var u=i.dependencies;if(u!==null){var f=i.child;u=u.firstContext;e:for(;u!==null;){var v=u;u=i;for(var b=0;b<t.length;b++)if(v.context===t[b]){u.lanes|=n,v=u.alternate,v!==null&&(v.lanes|=n),s2(u.return,n,e),a||(f=null);break e}u=v.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(s(341));f.lanes|=n,u=f.alternate,u!==null&&(u.lanes|=n),s2(f,n,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function S1(e,t,n,a){e=null;for(var i=t,u=!1;i!==null;){if(!u){if((i.flags&524288)!==0)u=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(s(387));if(f=f.memoizedProps,f!==null){var v=i.type;an(i.pendingProps.value,f.value)||(e!==null?e.push(v):e=[v])}}else if(i===fn.current){if(f=i.alternate,f===null)throw Error(s(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Z1):e=[Z1])}i=i.return}e!==null&&c2(t,e,n,a),t.flags|=262144}function ai(e){for(e=e.firstContext;e!==null;){if(!an(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zr(e){Lr=e,ha=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ut(e){return Ku(Lr,e)}function ri(e,t){return Lr===null&&zr(e),Ku(e,t)}function Ku(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ha===null){if(e===null)throw Error(s(308));ha=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ha=ha.next=t;return n}var Va=!1;function u2(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function d2(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(tt&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=Uo(e),Lc(e,null,n),t}return No(e,a,t,n),Uo(e)}function E1(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194176)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,oe(e,n)}}function h2(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?i=u=f:u=u.next=f,n=n.next}while(n!==null);u===null?i=u=t:u=u.next=t}else i=u=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var f2=!1;function D1(){if(f2){var e=ml;if(e!==null)throw e}}function M1(e,t,n,a){f2=!1;var i=e.updateQueue;Va=!1;var u=i.firstBaseUpdate,f=i.lastBaseUpdate,v=i.shared.pending;if(v!==null){i.shared.pending=null;var b=v,S=b.next;b.next=null,f===null?u=S:f.next=S,f=b;var N=e.alternate;N!==null&&(N=N.updateQueue,v=N.lastBaseUpdate,v!==f&&(v===null?N.firstBaseUpdate=S:v.next=S,N.lastBaseUpdate=b))}if(u!==null){var q=i.baseState;f=0,N=S=b=null,v=u;do{var z=v.lane&-536870913,O=z!==v.lane;if(O?(He&z)===z:(a&z)===z){z!==0&&z===gl&&(f2=!0),N!==null&&(N=N.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var ie=e,be=v;z=t;var it=n;switch(be.tag){case 1:if(ie=be.payload,typeof ie=="function"){q=ie.call(it,q,z);break e}q=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=be.payload,z=typeof ie=="function"?ie.call(it,q,z):ie,z==null)break e;q=ve({},q,z);break e;case 2:Va=!0}}z=v.callback,z!==null&&(e.flags|=64,O&&(e.flags|=8192),O=i.callbacks,O===null?i.callbacks=[z]:O.push(z))}else O={lane:z,tag:v.tag,payload:v.payload,callback:v.callback,next:null},N===null?(S=N=O,b=q):N=N.next=O,f|=z;if(v=v.next,v===null){if(v=i.shared.pending,v===null)break;O=v,v=O.next,O.next=null,i.lastBaseUpdate=O,i.shared.pending=null}}while(!0);N===null&&(b=q),i.baseState=b,i.firstBaseUpdate=S,i.lastBaseUpdate=N,u===null&&(i.shared.lanes=0),Xa|=f,e.lanes=f,e.memoizedState=q}}function Pu(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Ju(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Pu(n[e],t)}function A1(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var u=n.create,f=n.inst;a=u(),f.destroy=a}n=n.next}while(n!==i)}}catch(v){Xe(t,t.return,v)}}function ja(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var u=i.next;a=u;do{if((a.tag&e)===e){var f=a.inst,v=f.destroy;if(v!==void 0){f.destroy=void 0,i=t;var b=n;try{v()}catch(S){Xe(i,b,S)}}}a=a.next}while(a!==u)}}catch(S){Xe(t,t.return,S)}}function Wu(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ju(t,n)}catch(a){Xe(e,e.return,a)}}}function Iu(e,t,n){n.props=Ar(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Xe(e,t,a)}}function Tr(e,t){try{var n=e.ref;if(n!==null){var a=e.stateNode;switch(e.tag){case 26:case 27:case 5:var i=a;break;default:i=a}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(u){Xe(e,t,u)}}function rn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){Xe(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Xe(e,t,i)}else n.current=null}function e7(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){Xe(e,e.return,i)}}function t7(e,t,n){try{var a=e.stateNode;o4(a,e.type,n,t),a[I]=t}catch(i){Xe(e,e.return,i)}}function n7(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function y2(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||n7(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function p2(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mi));else if(a!==4&&a!==27&&(e=e.child,e!==null))for(p2(e,t,n),e=e.sibling;e!==null;)p2(e,t,n),e=e.sibling}function li(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&a!==27&&(e=e.child,e!==null))for(li(e,t,n),e=e.sibling;e!==null;)li(e,t,n),e=e.sibling}var ya=!1,lt=!1,v2=!1,a7=typeof WeakSet=="function"?WeakSet:Set,St=null,r7=!1;function O8(e,t){if(e=e.containerInfo,Y2=Si,e=Cc(e),ms(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var f=0,v=-1,b=-1,S=0,N=0,q=e,z=null;t:for(;;){for(var O;q!==n||i!==0&&q.nodeType!==3||(v=f+i),q!==u||a!==0&&q.nodeType!==3||(b=f+a),q.nodeType===3&&(f+=q.nodeValue.length),(O=q.firstChild)!==null;)z=q,q=O;for(;;){if(q===e)break t;if(z===n&&++S===i&&(v=f),z===u&&++N===a&&(b=f),(O=q.nextSibling)!==null)break;q=z,z=q.parentNode}q=O}n=v===-1||b===-1?null:{start:v,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(G2={focusedElem:e,selectionRange:n},Si=!1,St=t;St!==null;)if(t=St,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,St=e;else for(;St!==null;){switch(t=St,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,i=u.memoizedProps,u=u.memoizedState,a=n.stateNode;try{var ie=Ar(n.type,i,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(ie,u),a.__reactInternalSnapshotBeforeUpdate=e}catch(be){Xe(n,n.return,be)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)K2(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":K2(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,St=e;break}St=t.return}return ie=r7,r7=!1,ie}function l7(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:va(e,n),a&4&&A1(5,n);break;case 1:if(va(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(v){Xe(n,n.return,v)}else{var i=Ar(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Xe(n,n.return,v)}}a&64&&Wu(n),a&512&&Tr(n,n.return);break;case 3:if(va(e,n),a&64&&(a=n.updateQueue,a!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Ju(a,e)}catch(v){Xe(n,n.return,v)}}break;case 26:va(e,n),a&512&&Tr(n,n.return);break;case 27:case 5:va(e,n),t===null&&a&4&&e7(n),a&512&&Tr(n,n.return);break;case 12:va(e,n);break;case 13:va(e,n),a&4&&s7(e,n);break;case 22:if(i=n.memoizedState!==null||ya,!i){t=t!==null&&t.memoizedState!==null||lt;var u=ya,f=lt;ya=i,(lt=t)&&!f?Za(e,n,(n.subtreeFlags&8772)!==0):va(e,n),ya=u,lt=f}a&512&&(n.memoizedProps.mode==="manual"?Tr(n,n.return):rn(n,n.return));break;default:va(e,n)}}function o7(e){var t=e.alternate;t!==null&&(e.alternate=null,o7(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$n(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var pt=null,ln=!1;function pa(e,t,n){for(n=n.child;n!==null;)i7(e,t,n),n=n.sibling}function i7(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(La,n)}catch{}switch(n.tag){case 26:lt||rn(n,t),pa(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:lt||rn(n,t);var a=pt,i=ln;for(pt=n.stateNode,pa(e,t,n),n=n.stateNode,t=n.attributes;t.length;)n.removeAttributeNode(t[0]);$n(n),pt=a,ln=i;break;case 5:lt||rn(n,t);case 6:i=pt;var u=ln;if(pt=null,pa(e,t,n),pt=i,ln=u,pt!==null)if(ln)try{e=pt,a=n.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)}catch(f){Xe(n,t,f)}else try{pt.removeChild(n.stateNode)}catch(f){Xe(n,t,f)}break;case 18:pt!==null&&(ln?(t=pt,n=n.stateNode,t.nodeType===8?F2(t.parentNode,n):t.nodeType===1&&F2(t,n),Q1(t)):F2(pt,n.stateNode));break;case 4:a=pt,i=ln,pt=n.stateNode.containerInfo,ln=!0,pa(e,t,n),pt=a,ln=i;break;case 0:case 11:case 14:case 15:lt||ja(2,n,t),lt||ja(4,n,t),pa(e,t,n);break;case 1:lt||(rn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Iu(n,t,a)),pa(e,t,n);break;case 21:pa(e,t,n);break;case 22:lt||rn(n,t),lt=(a=lt)||n.memoizedState!==null,pa(e,t,n),lt=a;break;default:pa(e,t,n)}}function s7(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Q1(e)}catch(n){Xe(t,t.return,n)}}function N8(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new a7),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new a7),t;default:throw Error(s(435,e.tag))}}function g2(e,t){var n=N8(e);t.forEach(function(a){var i=P8.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}function wn(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],u=e,f=t,v=f;e:for(;v!==null;){switch(v.tag){case 27:case 5:pt=v.stateNode,ln=!1;break e;case 3:pt=v.stateNode.containerInfo,ln=!0;break e;case 4:pt=v.stateNode.containerInfo,ln=!0;break e}v=v.return}if(pt===null)throw Error(s(160));i7(u,f,i),pt=null,ln=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)c7(t,e),t=t.sibling}var Un=null;function c7(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:wn(t,e),kn(e),a&4&&(ja(3,e,e.return),A1(3,e),ja(5,e,e.return));break;case 1:wn(t,e),kn(e),a&512&&(lt||n===null||rn(n,n.return)),a&64&&ya&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=Un;if(wn(t,e),kn(e),a&512&&(lt||n===null||rn(n,n.return)),a&4){var u=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":u=i.getElementsByTagName("title")[0],(!u||u[Be]||u[te]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=i.createElement(a),i.head.insertBefore(u,i.querySelector("head > title"))),$t(u,a,n),u[te]=e,Ie(u),a=u;break e;case"link":var f=e0("link","href",i).get(a+(n.href||""));if(f){for(var v=0;v<f.length;v++)if(u=f[v],u.getAttribute("href")===(n.href==null?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(v,1);break t}}u=i.createElement(a),$t(u,a,n),i.head.appendChild(u);break;case"meta":if(f=e0("meta","content",i).get(a+(n.content||""))){for(v=0;v<f.length;v++)if(u=f[v],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(v,1);break t}}u=i.createElement(a),$t(u,a,n),i.head.appendChild(u);break;default:throw Error(s(468,a))}u[te]=e,Ie(u),a=u}e.stateNode=a}else t0(i,e.type,e.stateNode);else e.stateNode=I7(i,a,e.memoizedProps);else u!==a?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,a===null?t0(i,e.type,e.stateNode):I7(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&t7(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(a&4&&e.alternate===null){i=e.stateNode,u=e.memoizedProps;try{for(var b=i.firstChild;b;){var S=b.nextSibling,N=b.nodeName;b[Be]||N==="HEAD"||N==="BODY"||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&b.rel.toLowerCase()==="stylesheet"||i.removeChild(b),b=S}for(var q=e.type,z=i.attributes;z.length;)i.removeAttributeNode(z[0]);$t(i,q,u),i[te]=e,i[I]=u}catch(ie){Xe(e,e.return,ie)}}case 5:if(wn(t,e),kn(e),a&512&&(lt||n===null||rn(n,n.return)),e.flags&32){i=e.stateNode;try{ll(i,"")}catch(ie){Xe(e,e.return,ie)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,t7(e,i,n!==null?n.memoizedProps:i)),a&1024&&(v2=!0);break;case 6:if(wn(t,e),kn(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(ie){Xe(e,e.return,ie)}}break;case 3:if(xi=null,i=Un,Un=_i(t.containerInfo),wn(t,e),Un=i,kn(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Q1(t.containerInfo)}catch(ie){Xe(e,e.return,ie)}v2&&(v2=!1,u7(e));break;case 4:a=Un,Un=_i(e.stateNode.containerInfo),wn(t,e),kn(e),Un=a;break;case 12:wn(t,e),kn(e);break;case 13:wn(t,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(E2=tn()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,g2(e,a)));break;case 22:if(a&512&&(lt||n===null||rn(n,n.return)),b=e.memoizedState!==null,S=n!==null&&n.memoizedState!==null,N=ya,q=lt,ya=N||b,lt=q||S,wn(t,e),lt=q,ya=N,kn(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,a&8192&&(t._visibility=b?t._visibility&-2:t._visibility|1,b&&(t=ya||lt,n===null||S||t||xl(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(n=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(n===null){S=n=t;try{if(i=S.stateNode,b)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{f=S.stateNode,v=S.memoizedProps.style;var O=v!=null&&v.hasOwnProperty("display")?v.display:null;f.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(ie){Xe(S,S.return,ie)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=b?"":S.memoizedProps}catch(ie){Xe(S,S.return,ie)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,g2(e,n))));break;case 19:wn(t,e),kn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,g2(e,a)));break;case 21:break;default:wn(t,e),kn(e)}}function kn(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var n=e.return;n!==null;){if(n7(n)){var a=n;break e}n=n.return}throw Error(s(160))}switch(a.tag){case 27:var i=a.stateNode,u=y2(e);li(e,u,i);break;case 5:var f=a.stateNode;a.flags&32&&(ll(f,""),a.flags&=-33);var v=y2(e);li(e,v,f);break;case 3:case 4:var b=a.stateNode.containerInfo,S=y2(e);p2(e,S,b);break;default:throw Error(s(161))}}}catch(N){Xe(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function u7(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;u7(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function va(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)l7(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ja(4,t,t.return),xl(t);break;case 1:rn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Iu(t,t.return,n),xl(t);break;case 26:case 27:case 5:rn(t,t.return),xl(t);break;case 22:rn(t,t.return),t.memoizedState===null&&xl(t);break;default:xl(t)}e=e.sibling}}function Za(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,u=t,f=u.flags;switch(u.tag){case 0:case 11:case 15:Za(i,u,n),A1(4,u);break;case 1:if(Za(i,u,n),a=u,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(S){Xe(a,a.return,S)}if(a=u,i=a.updateQueue,i!==null){var v=a.stateNode;try{var b=i.shared.hiddenCallbacks;if(b!==null)for(i.shared.hiddenCallbacks=null,i=0;i<b.length;i++)Pu(b[i],v)}catch(S){Xe(a,a.return,S)}}n&&f&64&&Wu(u),Tr(u,u.return);break;case 26:case 27:case 5:Za(i,u,n),n&&a===null&&f&4&&e7(u),Tr(u,u.return);break;case 12:Za(i,u,n);break;case 13:Za(i,u,n),n&&f&4&&s7(i,u);break;case 22:u.memoizedState===null&&Za(i,u,n),Tr(u,u.return);break;default:Za(i,u,n)}t=t.sibling}}function m2(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&b1(n))}function b2(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&b1(e))}function Ya(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)d7(e,t,n,a),t=t.sibling}function d7(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ya(e,t,n,a),i&2048&&A1(9,t);break;case 3:Ya(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&b1(e)));break;case 12:if(i&2048){Ya(e,t,n,a),e=t.stateNode;try{var u=t.memoizedProps,f=u.id,v=u.onPostCommit;typeof v=="function"&&v(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Xe(t,t.return,b)}}else Ya(e,t,n,a);break;case 23:break;case 22:u=t.stateNode,t.memoizedState!==null?u._visibility&4?Ya(e,t,n,a):L1(e,t):u._visibility&4?Ya(e,t,n,a):(u._visibility|=4,wl(e,t,n,a,(t.subtreeFlags&10256)!==0)),i&2048&&m2(t.alternate,t);break;case 24:Ya(e,t,n,a),i&2048&&b2(t.alternate,t);break;default:Ya(e,t,n,a)}}function wl(e,t,n,a,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,f=t,v=n,b=a,S=f.flags;switch(f.tag){case 0:case 11:case 15:wl(u,f,v,b,i),A1(8,f);break;case 23:break;case 22:var N=f.stateNode;f.memoizedState!==null?N._visibility&4?wl(u,f,v,b,i):L1(u,f):(N._visibility|=4,wl(u,f,v,b,i)),i&&S&2048&&m2(f.alternate,f);break;case 24:wl(u,f,v,b,i),i&&S&2048&&b2(f.alternate,f);break;default:wl(u,f,v,b,i)}t=t.sibling}}function L1(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:L1(n,a),i&2048&&m2(a.alternate,a);break;case 24:L1(n,a),i&2048&&b2(a.alternate,a);break;default:L1(n,a)}t=t.sibling}}var z1=8192;function kl(e){if(e.subtreeFlags&z1)for(e=e.child;e!==null;)h7(e),e=e.sibling}function h7(e){switch(e.tag){case 26:kl(e),e.flags&z1&&e.memoizedState!==null&&S4(Un,e.memoizedState,e.memoizedProps);break;case 5:kl(e);break;case 3:case 4:var t=Un;Un=_i(e.stateNode.containerInfo),kl(e),Un=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=z1,z1=16777216,kl(e),z1=t):kl(e));break;default:kl(e)}}function f7(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function T1(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];St=a,p7(a,e)}f7(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)y7(e),e=e.sibling}function y7(e){switch(e.tag){case 0:case 11:case 15:T1(e),e.flags&2048&&ja(9,e,e.return);break;case 3:T1(e);break;case 12:T1(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,oi(e)):T1(e);break;default:T1(e)}}function oi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];St=a,p7(a,e)}f7(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ja(8,t,t.return),oi(t);break;case 22:n=t.stateNode,n._visibility&4&&(n._visibility&=-5,oi(t));break;default:oi(t)}e=e.sibling}}function p7(e,t){for(;St!==null;){var n=St;switch(n.tag){case 0:case 11:case 15:ja(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:b1(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,St=a;else e:for(n=e;St!==null;){a=St;var i=a.sibling,u=a.return;if(o7(a),a===n){St=null;break e}if(i!==null){i.return=u,St=i;break e}St=u}}}function U8(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(e,t,n,a){return new U8(e,t,n,a)}function _2(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ga(e,t){var n=e.alternate;return n===null?(n=Sn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&31457280,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function v7(e,t){e.flags&=31457282;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ii(e,t,n,a,i,u){var f=0;if(a=e,typeof e=="function")_2(e)&&(f=1);else if(typeof e=="string")f=w4(e,n,zt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case y:return Rr(n.children,i,u,t);case p:f=8,i|=24;break;case _:return e=Sn(12,n,t,i|2),e.elementType=_,e.lanes=u,e;case F:return e=Sn(13,n,t,i),e.elementType=F,e.lanes=u,e;case K:return e=Sn(19,n,t,i),e.elementType=K,e.lanes=u,e;case J:return g7(n,i,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:case L:f=10;break e;case E:f=9;break e;case U:f=11;break e;case j:f=14;break e;case fe:f=16,a=null;break e}f=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=Sn(f,n,t,i),t.elementType=e,t.type=a,t.lanes=u,t}function Rr(e,t,n,a){return e=Sn(7,e,a,t),e.lanes=n,e}function g7(e,t,n,a){e=Sn(22,e,a,t),e.elementType=J,e.lanes=n;var i={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var u=i._current;if(u===null)throw Error(s(456));if((i._pendingVisibility&2)===0){var f=Ra(u,2);f!==null&&(i._pendingVisibility|=2,Zt(f,u,2))}},attach:function(){var u=i._current;if(u===null)throw Error(s(456));if((i._pendingVisibility&2)!==0){var f=Ra(u,2);f!==null&&(i._pendingVisibility&=-3,Zt(f,u,2))}}};return e.stateNode=i,e}function C2(e,t,n){return e=Sn(6,e,null,t),e.lanes=n,e}function x2(e,t,n){return t=Sn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ga(e){e.flags|=4}function m7(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!n0(t)){if(t=xn.current,t!==null&&((He&4194176)===He?Jn!==null:(He&62914560)!==He&&(He&536870912)===0||t!==Jn))throw v1=Ds,$c;e.flags|=8192}}function si(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?C():536870912,e.lanes|=t,El|=t)}function R1(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&31457280,a|=i.flags&31457280,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function V8(e,t,n){var a=t.pendingProps;switch(Ss(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return et(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),fa(mt),Aa(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(h1(t)?ga(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nn!==null&&(L2(Nn),Nn=null))),et(t),null;case 26:return n=t.memoizedState,e===null?(ga(t),n!==null?(et(t),m7(t,n)):(et(t),t.flags&=-16777217)):n?n!==e.memoizedState?(ga(t),et(t),m7(t,n)):(et(t),t.flags&=-16777217):(e.memoizedProps!==a&&ga(t),et(t),t.flags&=-16777217),null;case 27:Ir(t),n=Yn.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&ga(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return et(t),null}e=zt.current,h1(t)?Rc(t):(e=F7(i,a,n),t.stateNode=e,ga(t))}return et(t),null;case 5:if(Ir(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&ga(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return et(t),null}if(e=zt.current,h1(t))Rc(t);else{switch(i=bi(Yn.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}e[te]=t,e[I]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch($t(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ga(t)}}return et(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&ga(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=Yn.current,h1(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=jt,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[te]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||j7(e.nodeValue,n)),e||wr(t)}else e=bi(e).createTextNode(a),e[te]=t,t.stateNode=e}return et(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=h1(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[te]=t}else f1(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;et(t),i=!1}else Nn!==null&&(L2(Nn),Nn=null),i=!0;if(!i)return t.flags&256?(ca(t),t):(ca(t),null)}if(ca(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var u=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==i&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),si(t,t.updateQueue),et(t),null;case 4:return Aa(),e===null&&q2(t.stateNode.containerInfo),et(t),null;case 10:return fa(t.type),et(t),null;case 19:if(at(gt),i=t.memoizedState,i===null)return et(t),null;if(a=(t.flags&128)!==0,u=i.rendering,u===null)if(a)R1(i,!1);else{if(ot!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Go(e),u!==null){for(t.flags|=128,R1(i,!1),e=u.updateQueue,t.updateQueue=e,si(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)v7(n,e),n=n.sibling;return xe(gt,gt.current&1|2),t.child}e=e.sibling}i.tail!==null&&tn()>ci&&(t.flags|=128,a=!0,R1(i,!1),t.lanes=4194304)}else{if(!a)if(e=Go(u),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,si(t,e),R1(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Ne)return et(t),null}else 2*tn()-i.renderingStartTime>ci&&n!==536870912&&(t.flags|=128,a=!0,R1(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(e=i.last,e!==null?e.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=tn(),t.sibling=null,e=gt.current,xe(gt,a?e&1|2:e&1),t):(et(t),null);case 22:case 23:return ca(t),As(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),n=t.updateQueue,n!==null&&si(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&at(Sr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),fa(mt),et(t),null;case 25:return null}throw Error(s(156,t.tag))}function B8(e,t){switch(Ss(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fa(mt),Aa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ir(t),null;case 13:if(ca(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));f1()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return at(gt),null;case 4:return Aa(),null;case 10:return fa(t.type),null;case 22:case 23:return ca(t),As(),e!==null&&at(Sr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return fa(mt),null;case 25:return null;default:return null}}function b7(e,t){switch(Ss(t),t.tag){case 3:fa(mt),Aa();break;case 26:case 27:case 5:Ir(t);break;case 4:Aa();break;case 13:ca(t);break;case 19:at(gt);break;case 10:fa(t.type);break;case 22:case 23:ca(t),As(),e!==null&&at(Sr);break;case 24:fa(mt)}}var q8={getCacheForType:function(e){var t=Ut(mt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},j8=typeof WeakMap=="function"?WeakMap:Map,tt=0,Ke=null,Ae=null,He=0,Pe=0,on=null,ma=!1,Sl=!1,w2=!1,ba=0,ot=0,Xa=0,Hr=0,k2=0,En=0,El=0,H1=null,In=null,S2=!1,E2=0,ci=1/0,ui=null,Qa=null,di=!1,$r=null,$1=0,D2=0,M2=null,O1=0,A2=null;function sn(){if((tt&2)!==0&&He!==0)return He&-He;if(X.T!==null){var e=gl;return e!==0?e:N2()}return re()}function _7(){En===0&&(En=(He&536870912)===0||Ne?Eo():536870912);var e=xn.current;return e!==null&&(e.flags|=32),En}function Zt(e,t,n){(e===Ke&&Pe===2||e.cancelPendingCommit!==null)&&(Dl(e,0),_a(e,He,En,!1)),H(e,n),((tt&2)===0||e!==Ke)&&(e===Ke&&((tt&2)===0&&(Hr|=n),ot===4&&_a(e,He,En,!1)),ea(e))}function C7(e,t,n){if((tt&6)!==0)throw Error(s(327));var a=!n&&(t&60)===0&&(t&e.expiredLanes)===0||Qn(e,t),i=a?G8(e,t):R2(e,t,!0),u=a;do{if(i===0){Sl&&!a&&_a(e,t,0,!1);break}else if(i===6)_a(e,t,0,!ma);else{if(n=e.current.alternate,u&&!Z8(n)){i=R2(e,t,!1),u=!1;continue}if(i===2){if(u=t,e.errorRecoveryDisabledLanes&u)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var v=e;i=H1;var b=v.current.memoizedState.isDehydrated;if(b&&(Dl(v,f).flags|=256),f=R2(v,f,!1),f!==2){if(w2&&!b){v.errorRecoveryDisabledLanes|=u,Hr|=u,i=4;break e}u=In,In=i,u!==null&&L2(u)}i=f}if(u=!1,i!==2)continue}}if(i===1){Dl(e,0),_a(e,t,0,!0);break}e:{switch(a=e,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194176)===t){_a(a,t,En,!ma);break e}break;case 2:In=null;break;case 3:case 5:break;default:throw Error(s(329))}if(a.finishedWork=n,a.finishedLanes=t,(t&62914560)===t&&(u=E2+300-tn(),10<u)){if(_a(a,t,En,!ma),la(a,0)!==0)break e;a.timeoutHandle=G7(x7.bind(null,a,n,In,ui,S2,t,En,Hr,El,ma,2,-0,0),u);break e}x7(a,n,In,ui,S2,t,En,Hr,El,ma,0,-0,0)}}break}while(!0);ea(e)}function L2(e){In===null?In=e:In.push.apply(In,e)}function x7(e,t,n,a,i,u,f,v,b,S,N,q,z){var O=t.subtreeFlags;if((O&8192||(O&16785408)===16785408)&&(j1={stylesheets:null,count:0,unsuspend:k4},h7(t),t=E4(),t!==null)){e.cancelPendingCommit=t(A7.bind(null,e,n,a,i,f,v,b,1,q,z)),_a(e,u,f,!S);return}A7(e,n,a,i,f,v,b,N,q,z)}function Z8(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],u=i.getSnapshot;i=i.value;try{if(!an(u(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _a(e,t,n,a){t&=~k2,t&=~Hr,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var u=31-xt(i),f=1<<u;a[u]=-1,i&=~f}n!==0&&Q(e,n,t)}function hi(){return(tt&6)===0?(N1(0),!1):!0}function z2(){if(Ae!==null){if(Pe===0)var e=Ae.return;else e=Ae,ha=Lr=null,Ns(e),pl=null,g1=0,e=Ae;for(;e!==null;)b7(e.alternate,e),e=e.return;Ae=null}}function Dl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,s4(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),z2(),Ke=e,Ae=n=Ga(e.current,null),He=t,Pe=0,on=null,ma=!1,Sl=Qn(e,t),w2=!1,El=En=k2=Hr=Xa=ot=0,In=H1=null,S2=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-xt(a),u=1<<i;t|=e[i],a&=~u}return ba=t,Oo(),n}function w7(e,t){Se=null,X.H=Wn,t===p1?(t=Uc(),Pe=3):t===$c?(t=Uc(),Pe=4):Pe=t===Ou?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,on=t,Ae===null&&(ot=1,ni(e,bn(t,e.current)))}function k7(){var e=X.H;return X.H=Wn,e===null?Wn:e}function S7(){var e=X.A;return X.A=q8,e}function T2(){ot=4,ma||(He&4194176)!==He&&xn.current!==null||(Sl=!0),(Xa&134217727)===0&&(Hr&134217727)===0||Ke===null||_a(Ke,He,En,!1)}function R2(e,t,n){var a=tt;tt|=2;var i=k7(),u=S7();(Ke!==e||He!==t)&&(ui=null,Dl(e,t)),t=!1;var f=ot;e:do try{if(Pe!==0&&Ae!==null){var v=Ae,b=on;switch(Pe){case 8:z2(),f=6;break e;case 3:case 2:case 6:xn.current===null&&(t=!0);var S=Pe;if(Pe=0,on=null,Ml(e,v,b,S),n&&Sl){f=0;break e}break;default:S=Pe,Pe=0,on=null,Ml(e,v,b,S)}}Y8(),f=ot;break}catch(N){w7(e,N)}while(!0);return t&&e.shellSuspendCounter++,ha=Lr=null,tt=a,X.H=i,X.A=u,Ae===null&&(Ke=null,He=0,Oo()),f}function Y8(){for(;Ae!==null;)E7(Ae)}function G8(e,t){var n=tt;tt|=2;var a=k7(),i=S7();Ke!==e||He!==t?(ui=null,ci=tn()+500,Dl(e,t)):Sl=Qn(e,t);e:do try{if(Pe!==0&&Ae!==null){t=Ae;var u=on;t:switch(Pe){case 1:Pe=0,on=null,Ml(e,t,u,1);break;case 2:if(Oc(u)){Pe=0,on=null,D7(t);break}t=function(){Pe===2&&Ke===e&&(Pe=7),ea(e)},u.then(t,t);break e;case 3:Pe=7;break e;case 4:Pe=5;break e;case 7:Oc(u)?(Pe=0,on=null,D7(t)):(Pe=0,on=null,Ml(e,t,u,7));break;case 5:var f=null;switch(Ae.tag){case 26:f=Ae.memoizedState;case 5:case 27:var v=Ae;if(!f||n0(f)){Pe=0,on=null;var b=v.sibling;if(b!==null)Ae=b;else{var S=v.return;S!==null?(Ae=S,fi(S)):Ae=null}break t}}Pe=0,on=null,Ml(e,t,u,5);break;case 6:Pe=0,on=null,Ml(e,t,u,6);break;case 8:z2(),ot=6;break e;default:throw Error(s(462))}}X8();break}catch(N){w7(e,N)}while(!0);return ha=Lr=null,X.H=a,X.A=i,tt=n,Ae!==null?0:(Ke=null,He=0,Oo(),ot)}function X8(){for(;Ae!==null&&!ra();)E7(Ae)}function E7(e){var t=Fu(e.alternate,e,ba);e.memoizedProps=e.pendingProps,t===null?fi(e):Ae=t}function D7(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ju(n,t,t.pendingProps,t.type,void 0,He);break;case 11:t=ju(n,t,t.pendingProps,t.type.render,t.ref,He);break;case 5:Ns(t);default:b7(n,t),t=Ae=v7(t,ba),t=Fu(n,t,ba)}e.memoizedProps=e.pendingProps,t===null?fi(e):Ae=t}function Ml(e,t,n,a){ha=Lr=null,Ns(t),pl=null,g1=0;var i=t.return;try{if(H8(e,i,t,n,He)){ot=1,ni(e,bn(n,e.current)),Ae=null;return}}catch(u){if(i!==null)throw Ae=i,u;ot=1,ni(e,bn(n,e.current)),Ae=null;return}t.flags&32768?(Ne||a===1?e=!0:Sl||(He&536870912)!==0?e=!1:(ma=e=!0,(a===2||a===3||a===6)&&(a=xn.current,a!==null&&a.tag===13&&(a.flags|=16384))),M7(t,e)):fi(t)}function fi(e){var t=e;do{if((t.flags&32768)!==0){M7(t,ma);return}e=t.return;var n=V8(t.alternate,t,ba);if(n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);ot===0&&(ot=5)}function M7(e,t){do{var n=B8(e.alternate,e);if(n!==null){n.flags&=32767,Ae=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=n}while(e!==null);ot=6,Ae=null}function A7(e,t,n,a,i,u,f,v,b,S){var N=X.T,q=P.p;try{P.p=2,X.T=null,Q8(e,t,n,a,q,i,u,f,v,b,S)}finally{X.T=N,P.p=q}}function Q8(e,t,n,a,i,u,f,v){do Al();while($r!==null);if((tt&6)!==0)throw Error(s(327));var b=e.finishedWork;if(a=e.finishedLanes,b===null)return null;if(e.finishedWork=null,e.finishedLanes=0,b===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var S=b.lanes|b.childLanes;if(S|=xs,G(e,a,S,u,f,v),e===Ke&&(Ae=Ke=null,He=0),(b.subtreeFlags&10256)===0&&(b.flags&10256)===0||di||(di=!0,D2=S,M2=n,J8(yr,function(){return Al(),null})),n=(b.flags&15990)!==0,(b.subtreeFlags&15990)!==0||n?(n=X.T,X.T=null,u=P.p,P.p=2,f=tt,tt|=4,O8(e,b),c7(b,e),g8(G2,e.containerInfo),Si=!!Y2,G2=Y2=null,e.current=b,l7(e,b.alternate,b),fr(),tt=f,P.p=u,X.T=n):e.current=b,di?(di=!1,$r=e,$1=a):L7(e,S),S=e.pendingLanes,S===0&&(Qa=null),es(b.stateNode),ea(e),t!==null)for(i=e.onRecoverableError,b=0;b<t.length;b++)S=t[b],i(S.value,{componentStack:S.stack});return($1&3)!==0&&Al(),S=e.pendingLanes,(a&4194218)!==0&&(S&42)!==0?e===A2?O1++:(O1=0,A2=e):O1=0,N1(0),null}function L7(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,b1(t)))}function Al(){if($r!==null){var e=$r,t=D2;D2=0;var n=ce($1),a=X.T,i=P.p;try{if(P.p=32>n?32:n,X.T=null,$r===null)var u=!1;else{n=M2,M2=null;var f=$r,v=$1;if($r=null,$1=0,(tt&6)!==0)throw Error(s(331));var b=tt;if(tt|=4,y7(f.current),d7(f,f.current,v,n),tt=b,N1(0,!1),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(La,f)}catch{}u=!0}return u}finally{P.p=i,X.T=a,L7(e,t)}}return!1}function z7(e,t,n){t=bn(n,t),t=Js(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(H(e,2),ea(e))}function Xe(e,t,n){if(e.tag===3)z7(e,e,n);else for(;t!==null;){if(t.tag===3){z7(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Qa===null||!Qa.has(a))){e=bn(n,e),n=Hu(2),a=qa(t,n,2),a!==null&&($u(n,a,t,e),H(a,2),ea(a));break}}t=t.return}}function H2(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new j8;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(w2=!0,i.add(n),e=F8.bind(null,e,t,n),t.then(e,e))}function F8(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ke===e&&(He&n)===n&&(ot===4||ot===3&&(He&62914560)===He&&300>tn()-E2?(tt&2)===0&&Dl(e,0):k2|=n,El===He&&(El=0)),ea(e)}function T7(e,t){t===0&&(t=C()),e=Ra(e,t),e!==null&&(H(e,t),ea(e))}function K8(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),T7(e,n)}function P8(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),T7(e,n)}function J8(e,t){return Wl(e,t)}var yi=null,Ll=null,$2=!1,pi=!1,O2=!1,Or=0;function ea(e){e!==Ll&&e.next===null&&(Ll===null?yi=Ll=e:Ll=Ll.next=e),pi=!0,$2||($2=!0,I8(W8))}function N1(e,t){if(!O2&&pi){O2=!0;do for(var n=!1,a=yi;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var u=0;else{var f=a.suspendedLanes,v=a.pingedLanes;u=(1<<31-xt(42|e)+1)-1,u&=i&~(f&~v),u=u&201326677?u&201326677|1:u?u|2:0}u!==0&&(n=!0,$7(a,u))}else u=He,u=la(a,a===Ke?u:0),(u&3)===0||Qn(a,u)||(n=!0,$7(a,u));a=a.next}while(n);O2=!1}}function W8(){pi=$2=!1;var e=0;Or!==0&&(i4()&&(e=Or),Or=0);for(var t=tn(),n=null,a=yi;a!==null;){var i=a.next,u=R7(a,t);u===0?(a.next=null,n===null?yi=i:n.next=i,i===null&&(Ll=n)):(n=a,(e!==0||(u&3)!==0)&&(pi=!0)),a=i}N1(e)}function R7(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var f=31-xt(u),v=1<<f,b=i[f];b===-1?((v&n)===0||(v&a)!==0)&&(i[f]=ns(v,t)):b<=t&&(e.expiredLanes|=v),u&=~v}if(t=Ke,n=He,n=la(e,e===t?n:0),a=e.callbackNode,n===0||e===t&&Pe===2||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Il(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Qn(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Il(a),ce(n)){case 2:case 8:n=yn;break;case 32:n=yr;break;case 268435456:n=wo;break;default:n=yr}return a=H7.bind(null,e),n=Wl(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Il(a),e.callbackPriority=2,e.callbackNode=null,2}function H7(e,t){var n=e.callbackNode;if(Al()&&e.callbackNode!==n)return null;var a=He;return a=la(e,e===Ke?a:0),a===0?null:(C7(e,a,t),R7(e,tn()),e.callbackNode!=null&&e.callbackNode===n?H7.bind(null,e):null)}function $7(e,t){if(Al())return null;C7(e,t,!0)}function I8(e){c4(function(){(tt&6)!==0?Wl(Rn,e):e()})}function N2(){return Or===0&&(Or=Eo()),Or}function O7(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ao(""+e)}function N7(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function e4(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var u=O7((i[I]||null).action),f=a.submitter;f&&(t=(t=f[I]||null)?O7(t.formAction):f.getAttribute("formAction"),t!==null&&(u=t,f=null));var v=new Ro("action","action",null,a,i);e.push({event:v,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Or!==0){var b=f?N7(i,f):new FormData(i);Xs(n,{pending:!0,data:b,method:i.method,action:u},null,b)}}else typeof u=="function"&&(v.preventDefault(),b=f?N7(i,f):new FormData(i),Xs(n,{pending:!0,data:b,method:i.method,action:u},u,b))},currentTarget:i}]})}}for(var U2=0;U2<Ac.length;U2++){var V2=Ac[U2],t4=V2.toLowerCase(),n4=V2[0].toUpperCase()+V2.slice(1);On(t4,"on"+n4)}On(kc,"onAnimationEnd"),On(Sc,"onAnimationIteration"),On(Ec,"onAnimationStart"),On("dblclick","onDoubleClick"),On("focusin","onFocus"),On("focusout","onBlur"),On(b8,"onTransitionRun"),On(_8,"onTransitionStart"),On(C8,"onTransitionCancel"),On(Dc,"onTransitionEnd"),Te("onMouseEnter",["mouseout","mouseover"]),Te("onMouseLeave",["mouseout","mouseover"]),Te("onPointerEnter",["pointerout","pointerover"]),Te("onPointerLeave",["pointerout","pointerover"]),pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var U1="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a4=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(U1));function U7(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var u=void 0;if(t)for(var f=a.length-1;0<=f;f--){var v=a[f],b=v.instance,S=v.currentTarget;if(v=v.listener,b!==u&&i.isPropagationStopped())break e;u=v,i.currentTarget=S;try{u(i)}catch(N){ti(N)}i.currentTarget=null,u=b}else for(f=0;f<a.length;f++){if(v=a[f],b=v.instance,S=v.currentTarget,v=v.listener,b!==u&&i.isPropagationStopped())break e;u=v,i.currentTarget=S;try{u(i)}catch(N){ti(N)}i.currentTarget=null,u=b}}}}function Re(e,t){var n=t[qe];n===void 0&&(n=t[qe]=new Set);var a=e+"__bubble";n.has(a)||(V7(t,e,2,!1),n.add(a))}function B2(e,t,n){var a=0;t&&(a|=4),V7(n,e,a,t)}var vi="_reactListening"+Math.random().toString(36).slice(2);function q2(e){if(!e[vi]){e[vi]=!0,Kn.forEach(function(n){n!=="selectionchange"&&(a4.has(n)||B2(n,!1,e),B2(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vi]||(t[vi]=!0,B2("selectionchange",!1,t))}}function V7(e,t,n,a){switch(s0(t)){case 2:var i=A4;break;case 8:i=L4;break;default:i=e5}n=i.bind(null,t,n,e),i=void 0,!cs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function j2(e,t,n,a,i){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var v=a.stateNode.containerInfo;if(v===i||v.nodeType===8&&v.parentNode===i)break;if(f===4)for(f=a.return;f!==null;){var b=f.tag;if((b===3||b===4)&&(b=f.stateNode.containerInfo,b===i||b.nodeType===8&&b.parentNode===i))return;f=f.return}for(;v!==null;){if(f=nn(v),f===null)return;if(b=f.tag,b===5||b===6||b===26||b===27){a=u=f;continue e}v=v.parentNode}}a=a.return}ec(function(){var S=u,N=is(n),q=[];e:{var z=Mc.get(e);if(z!==void 0){var O=Ro,ie=e;switch(e){case"keypress":if(zo(n)===0)break e;case"keydown":case"keyup":O=P3;break;case"focusin":ie="focus",O=fs;break;case"focusout":ie="blur",O=fs;break;case"beforeblur":case"afterblur":O=fs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=U3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=I3;break;case kc:case Sc:case Ec:O=q3;break;case Dc:O=t8;break;case"scroll":case"scrollend":O=O3;break;case"wheel":O=a8;break;case"copy":case"cut":case"paste":O=Z3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=lc;break;case"toggle":case"beforetoggle":O=l8}var be=(t&4)!==0,it=!be&&(e==="scroll"||e==="scrollend"),D=be?z!==null?z+"Capture":null:z;be=[];for(var k=S,A;k!==null;){var V=k;if(A=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||A===null||D===null||(V=a1(k,D),V!=null&&be.push(V1(k,V,A))),it)break;k=k.return}0<be.length&&(z=new O(z,ie,null,n,N),q.push({event:z,listeners:be}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",z&&n!==os&&(ie=n.relatedTarget||n.fromElement)&&(nn(ie)||ie[pe]))break e;if((O||z)&&(z=N.window===N?N:(z=N.ownerDocument)?z.defaultView||z.parentWindow:window,O?(ie=n.relatedTarget||n.toElement,O=S,ie=ie?nn(ie):null,ie!==null&&(it=ae(ie),be=ie.tag,ie!==it||be!==5&&be!==27&&be!==6)&&(ie=null)):(O=null,ie=S),O!==ie)){if(be=ac,V="onMouseLeave",D="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(be=lc,V="onPointerLeave",D="onPointerEnter",k="pointer"),it=O==null?z:Nt(O),A=ie==null?z:Nt(ie),z=new be(V,k+"leave",O,n,N),z.target=it,z.relatedTarget=A,V=null,nn(N)===S&&(be=new be(D,k+"enter",ie,n,N),be.target=A,be.relatedTarget=it,V=be),it=V,O&&ie)t:{for(be=O,D=ie,k=0,A=be;A;A=zl(A))k++;for(A=0,V=D;V;V=zl(V))A++;for(;0<k-A;)be=zl(be),k--;for(;0<A-k;)D=zl(D),A--;for(;k--;){if(be===D||D!==null&&be===D.alternate)break t;be=zl(be),D=zl(D)}be=null}else be=null;O!==null&&B7(q,z,O,be,!1),ie!==null&&it!==null&&B7(q,it,ie,be,!0)}}e:{if(z=S?Nt(S):window,O=z.nodeName&&z.nodeName.toLowerCase(),O==="select"||O==="input"&&z.type==="file")var ne=fc;else if(dc(z))if(yc)ne=p8;else{ne=f8;var Ee=h8}else O=z.nodeName,!O||O.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?S&&ls(S.elementType)&&(ne=fc):ne=y8;if(ne&&(ne=ne(e,S))){hc(q,ne,n,N);break e}Ee&&Ee(e,z,S),e==="focusout"&&S&&z.type==="number"&&S.memoizedProps.value!=null&&rs(z,"number",z.value)}switch(Ee=S?Nt(S):window,e){case"focusin":(dc(Ee)||Ee.contentEditable==="true")&&(cl=Ee,bs=S,d1=null);break;case"focusout":d1=bs=cl=null;break;case"mousedown":_s=!0;break;case"contextmenu":case"mouseup":case"dragend":_s=!1,xc(q,n,N);break;case"selectionchange":if(m8)break;case"keydown":case"keyup":xc(q,n,N)}var he;if(ps)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else sl?cc(e,n)&&(ye="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ye="onCompositionStart");ye&&(oc&&n.locale!=="ko"&&(sl||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&sl&&(he=tc()):(Ta=N,us="value"in Ta?Ta.value:Ta.textContent,sl=!0)),Ee=gi(S,ye),0<Ee.length&&(ye=new rc(ye,e,null,n,N),q.push({event:ye,listeners:Ee}),he?ye.data=he:(he=uc(n),he!==null&&(ye.data=he)))),(he=i8?s8(e,n):c8(e,n))&&(ye=gi(S,"onBeforeInput"),0<ye.length&&(Ee=new rc("onBeforeInput","beforeinput",null,n,N),q.push({event:Ee,listeners:ye}),Ee.data=he)),e4(q,e,S,n,N)}U7(q,t)})}function V1(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gi(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,u=i.stateNode;i=i.tag,i!==5&&i!==26&&i!==27||u===null||(i=a1(e,n),i!=null&&a.unshift(V1(e,i,u)),i=a1(e,t),i!=null&&a.push(V1(e,i,u))),e=e.return}return a}function zl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function B7(e,t,n,a,i){for(var u=t._reactName,f=[];n!==null&&n!==a;){var v=n,b=v.alternate,S=v.stateNode;if(v=v.tag,b!==null&&b===a)break;v!==5&&v!==26&&v!==27||S===null||(b=S,i?(S=a1(n,u),S!=null&&f.unshift(V1(n,S,b))):i||(S=a1(n,u),S!=null&&f.push(V1(n,S,b)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var r4=/\r\n?/g,l4=/\u0000|\uFFFD/g;function q7(e){return(typeof e=="string"?e:""+e).replace(r4,`
`).replace(l4,"")}function j7(e,t){return t=q7(t),q7(e)===t}function mi(){}function Ze(e,t,n,a,i,u){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ll(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ll(e,""+a);break;case"className":al(e,"class",a);break;case"tabIndex":al(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":al(e,n,a);break;case"style":W5(e,a,u);break;case"data":if(t!=="object"){al(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ao(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Ze(e,t,"name",i.name,i,null),Ze(e,t,"formEncType",i.formEncType,i,null),Ze(e,t,"formMethod",i.formMethod,i,null),Ze(e,t,"formTarget",i.formTarget,i,null)):(Ze(e,t,"encType",i.encType,i,null),Ze(e,t,"method",i.method,i,null),Ze(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ao(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=mi);break;case"onScroll":a!=null&&Re("scroll",e);break;case"onScrollEnd":a!=null&&Re("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Ao(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Re("beforetoggle",e),Re("toggle",e),gr(e,"popover",a);break;case"xlinkActuate":oa(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":oa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":oa(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":oa(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":oa(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":oa(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":oa(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":oa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":oa(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":gr(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=H3.get(n)||n,gr(e,n,a))}}function Z2(e,t,n,a,i,u){switch(n){case"style":W5(e,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ll(e,a):(typeof a=="number"||typeof a=="bigint")&&ll(e,""+a);break;case"onScroll":a!=null&&Re("scroll",e);break;case"onScrollEnd":a!=null&&Re("scrollend",e);break;case"onClick":a!=null&&(e.onclick=mi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vr.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),u=e[I]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,i),typeof a=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):gr(e,n,a)}}}function $t(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",e),Re("load",e);var a=!1,i=!1,u;for(u in n)if(n.hasOwnProperty(u)){var f=n[u];if(f!=null)switch(u){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ze(e,t,u,f,n,null)}}i&&Ze(e,t,"srcSet",n.srcSet,n,null),a&&Ze(e,t,"src",n.src,n,null);return;case"input":Re("invalid",e);var v=u=f=i=null,b=null,S=null;for(a in n)if(n.hasOwnProperty(a)){var N=n[a];if(N!=null)switch(a){case"name":i=N;break;case"type":f=N;break;case"checked":b=N;break;case"defaultChecked":S=N;break;case"value":u=N;break;case"defaultValue":v=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,t));break;default:Ze(e,t,a,N,n,null)}}F5(e,u,v,b,S,f,i,!1),Do(e);return;case"select":Re("invalid",e),a=f=u=null;for(i in n)if(n.hasOwnProperty(i)&&(v=n[i],v!=null))switch(i){case"value":u=v;break;case"defaultValue":f=v;break;case"multiple":a=v;default:Ze(e,t,i,v,n,null)}t=u,n=f,e.multiple=!!a,t!=null?rl(e,!!a,t,!1):n!=null&&rl(e,!!a,n,!0);return;case"textarea":Re("invalid",e),u=i=a=null;for(f in n)if(n.hasOwnProperty(f)&&(v=n[f],v!=null))switch(f){case"value":a=v;break;case"defaultValue":i=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(s(91));break;default:Ze(e,t,f,v,n,null)}P5(e,a,i,u),Do(e);return;case"option":for(b in n)if(n.hasOwnProperty(b)&&(a=n[b],a!=null))switch(b){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ze(e,t,b,a,n,null)}return;case"dialog":Re("cancel",e),Re("close",e);break;case"iframe":case"object":Re("load",e);break;case"video":case"audio":for(a=0;a<U1.length;a++)Re(U1[a],e);break;case"image":Re("error",e),Re("load",e);break;case"details":Re("toggle",e);break;case"embed":case"source":case"link":Re("error",e),Re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in n)if(n.hasOwnProperty(S)&&(a=n[S],a!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ze(e,t,S,a,n,null)}return;default:if(ls(t)){for(N in n)n.hasOwnProperty(N)&&(a=n[N],a!==void 0&&Z2(e,t,N,a,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(a=n[v],a!=null&&Ze(e,t,v,a,n,null))}function o4(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,u=null,f=null,v=null,b=null,S=null,N=null;for(O in n){var q=n[O];if(n.hasOwnProperty(O)&&q!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":b=q;default:a.hasOwnProperty(O)||Ze(e,t,O,null,a,q)}}for(var z in a){var O=a[z];if(q=n[z],a.hasOwnProperty(z)&&(O!=null||q!=null))switch(z){case"type":u=O;break;case"name":i=O;break;case"checked":S=O;break;case"defaultChecked":N=O;break;case"value":f=O;break;case"defaultValue":v=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,t));break;default:O!==q&&Ze(e,t,z,O,a,q)}}as(e,f,v,b,S,N,u,i);return;case"select":O=f=v=z=null;for(u in n)if(b=n[u],n.hasOwnProperty(u)&&b!=null)switch(u){case"value":break;case"multiple":O=b;default:a.hasOwnProperty(u)||Ze(e,t,u,null,a,b)}for(i in a)if(u=a[i],b=n[i],a.hasOwnProperty(i)&&(u!=null||b!=null))switch(i){case"value":z=u;break;case"defaultValue":v=u;break;case"multiple":f=u;default:u!==b&&Ze(e,t,i,u,a,b)}t=v,n=f,a=O,z!=null?rl(e,!!n,z,!1):!!a!=!!n&&(t!=null?rl(e,!!n,t,!0):rl(e,!!n,n?[]:"",!1));return;case"textarea":O=z=null;for(v in n)if(i=n[v],n.hasOwnProperty(v)&&i!=null&&!a.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ze(e,t,v,null,a,i)}for(f in a)if(i=a[f],u=n[f],a.hasOwnProperty(f)&&(i!=null||u!=null))switch(f){case"value":z=i;break;case"defaultValue":O=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==u&&Ze(e,t,f,i,a,u)}K5(e,z,O);return;case"option":for(var ie in n)if(z=n[ie],n.hasOwnProperty(ie)&&z!=null&&!a.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Ze(e,t,ie,null,a,z)}for(b in a)if(z=a[b],O=n[b],a.hasOwnProperty(b)&&z!==O&&(z!=null||O!=null))switch(b){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Ze(e,t,b,z,a,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in n)z=n[be],n.hasOwnProperty(be)&&z!=null&&!a.hasOwnProperty(be)&&Ze(e,t,be,null,a,z);for(S in a)if(z=a[S],O=n[S],a.hasOwnProperty(S)&&z!==O&&(z!=null||O!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,t));break;default:Ze(e,t,S,z,a,O)}return;default:if(ls(t)){for(var it in n)z=n[it],n.hasOwnProperty(it)&&z!==void 0&&!a.hasOwnProperty(it)&&Z2(e,t,it,void 0,a,z);for(N in a)z=a[N],O=n[N],!a.hasOwnProperty(N)||z===O||z===void 0&&O===void 0||Z2(e,t,N,z,a,O);return}}for(var D in n)z=n[D],n.hasOwnProperty(D)&&z!=null&&!a.hasOwnProperty(D)&&Ze(e,t,D,null,a,z);for(q in a)z=a[q],O=n[q],!a.hasOwnProperty(q)||z===O||z==null&&O==null||Ze(e,t,q,z,a,O)}var Y2=null,G2=null;function bi(e){return e.nodeType===9?e:e.ownerDocument}function Z7(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Y7(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function X2(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Q2=null;function i4(){var e=window.event;return e&&e.type==="popstate"?e===Q2?!1:(Q2=e,!0):(Q2=null,!1)}var G7=typeof setTimeout=="function"?setTimeout:void 0,s4=typeof clearTimeout=="function"?clearTimeout:void 0,X7=typeof Promise=="function"?Promise:void 0,c4=typeof queueMicrotask=="function"?queueMicrotask:typeof X7<"u"?function(e){return X7.resolve(null).then(e).catch(u4)}:G7;function u4(e){setTimeout(function(){throw e})}function F2(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(a===0){e.removeChild(i),Q1(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=i}while(n);Q1(t)}function K2(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":K2(n),$n(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function d4(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Be])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==i.rel||e.getAttribute("href")!==(i.href==null?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Vn(e.nextSibling),e===null)break}return null}function h4(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Vn(e.nextSibling),e===null))return null;return e}function Vn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function Q7(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function F7(e,t,n){switch(t=bi(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var Dn=new Map,K7=new Set;function _i(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Ca=P.d;P.d={f:f4,r:y4,D:p4,C:v4,L:g4,m:m4,X:_4,S:b4,M:C4};function f4(){var e=Ca.f(),t=hi();return e||t}function y4(e){var t=qt(e);t!==null&&t.tag===5&&t.type==="form"?xu(t):Ca.r(e)}var Tl=typeof document>"u"?null:document;function P7(e,t,n){var a=Tl;if(a&&typeof t=="string"&&t){var i=gn(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),K7.has(i)||(K7.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),$t(t,"link",e),Ie(t),a.head.appendChild(t)))}}function p4(e){Ca.D(e),P7("dns-prefetch",e,null)}function v4(e,t){Ca.C(e,t),P7("preconnect",e,t)}function g4(e,t,n){Ca.L(e,t,n);var a=Tl;if(a&&e&&t){var i='link[rel="preload"][as="'+gn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+gn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+gn(n.imageSizes)+'"]')):i+='[href="'+gn(e)+'"]';var u=i;switch(t){case"style":u=Rl(e);break;case"script":u=Hl(e)}Dn.has(u)||(e=ve({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Dn.set(u,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(B1(u))||t==="script"&&a.querySelector(q1(u))||(t=a.createElement("link"),$t(t,"link",e),Ie(t),a.head.appendChild(t)))}}function m4(e,t){Ca.m(e,t);var n=Tl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+gn(a)+'"][href="'+gn(e)+'"]',u=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Hl(e)}if(!Dn.has(u)&&(e=ve({rel:"modulepreload",href:e},t),Dn.set(u,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(q1(u)))return}a=n.createElement("link"),$t(a,"link",e),Ie(a),n.head.appendChild(a)}}}function b4(e,t,n){Ca.S(e,t,n);var a=Tl;if(a&&e){var i=Fn(a).hoistableStyles,u=Rl(e);t=t||"default";var f=i.get(u);if(!f){var v={loading:0,preload:null};if(f=a.querySelector(B1(u)))v.loading=5;else{e=ve({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Dn.get(u))&&P2(e,n);var b=f=a.createElement("link");Ie(b),$t(b,"link",e),b._p=new Promise(function(S,N){b.onload=S,b.onerror=N}),b.addEventListener("load",function(){v.loading|=1}),b.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Ci(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:v},i.set(u,f)}}}function _4(e,t){Ca.X(e,t);var n=Tl;if(n&&e){var a=Fn(n).hoistableScripts,i=Hl(e),u=a.get(i);u||(u=n.querySelector(q1(i)),u||(e=ve({src:e,async:!0},t),(t=Dn.get(i))&&J2(e,t),u=n.createElement("script"),Ie(u),$t(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(i,u))}}function C4(e,t){Ca.M(e,t);var n=Tl;if(n&&e){var a=Fn(n).hoistableScripts,i=Hl(e),u=a.get(i);u||(u=n.querySelector(q1(i)),u||(e=ve({src:e,async:!0,type:"module"},t),(t=Dn.get(i))&&J2(e,t),u=n.createElement("script"),Ie(u),$t(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(i,u))}}function J7(e,t,n,a){var i=(i=Yn.current)?_i(i):null;if(!i)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Rl(n.href),n=Fn(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Rl(n.href);var u=Fn(i).hoistableStyles,f=u.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,f),(u=i.querySelector(B1(e)))&&!u._p&&(f.instance=u,f.state.loading=5),Dn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Dn.set(e,n),u||x4(i,e,n,f.state))),t&&a===null)throw Error(s(528,""));return f}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Hl(n),n=Fn(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Rl(e){return'href="'+gn(e)+'"'}function B1(e){return'link[rel="stylesheet"]['+e+"]"}function W7(e){return ve({},e,{"data-precedence":e.precedence,precedence:null})}function x4(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),$t(t,"link",n),Ie(t),e.head.appendChild(t))}function Hl(e){return'[src="'+gn(e)+'"]'}function q1(e){return"script[async]"+e}function I7(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+gn(n.href)+'"]');if(a)return t.instance=a,Ie(a),a;var i=ve({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ie(a),$t(a,"style",i),Ci(a,n.precedence,e),t.instance=a;case"stylesheet":i=Rl(n.href);var u=e.querySelector(B1(i));if(u)return t.state.loading|=4,t.instance=u,Ie(u),u;a=W7(n),(i=Dn.get(i))&&P2(a,i),u=(e.ownerDocument||e).createElement("link"),Ie(u);var f=u;return f._p=new Promise(function(v,b){f.onload=v,f.onerror=b}),$t(u,"link",a),t.state.loading|=4,Ci(u,n.precedence,e),t.instance=u;case"script":return u=Hl(n.src),(i=e.querySelector(q1(u)))?(t.instance=i,Ie(i),i):(a=n,(i=Dn.get(u))&&(a=ve({},n),J2(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ie(i),$t(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ci(a,n.precedence,e));return t.instance}function Ci(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,u=i,f=0;f<a.length;f++){var v=a[f];if(v.dataset.precedence===t)u=v;else if(u!==i)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function P2(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function J2(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var xi=null;function e0(e,t,n){if(xi===null){var a=new Map,i=xi=new Map;i.set(n,a)}else i=xi,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var u=n[i];if(!(u[Be]||u[te]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var f=u.getAttribute(t)||"";f=e+f;var v=a.get(f);v?v.push(u):a.set(f,[u])}}return a}function t0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function w4(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function n0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var j1=null;function k4(){}function S4(e,t,n){if(j1===null)throw Error(s(475));var a=j1;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Rl(n.href),u=e.querySelector(B1(i));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=wi.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=u,Ie(u);return}u=e.ownerDocument||e,n=W7(n),(i=Dn.get(i))&&P2(n,i),u=u.createElement("link"),Ie(u);var f=u;f._p=new Promise(function(v,b){f.onload=v,f.onerror=b}),$t(u,"link",n),t.instance=u}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=wi.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function E4(){if(j1===null)throw Error(s(475));var e=j1;return e.stylesheets&&e.count===0&&W2(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&W2(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function wi(){if(this.count--,this.count===0){if(this.stylesheets)W2(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ki=null;function W2(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ki=new Map,t.forEach(D4,e),ki=null,wi.call(e))}function D4(e,t){if(!(t.state.loading&4)){var n=ki.get(e);if(n)var a=n.get(null);else{n=new Map,ki.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<i.length;u++){var f=i[u];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}i=t.instance,f=i.getAttribute("data-precedence"),u=n.get(f)||a,u===a&&n.set(null,i),n.set(f,i),this.count++,a=wi.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),u?u.parentNode.insertBefore(i,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Z1={$$typeof:L,Provider:null,Consumer:null,_currentValue:ke,_currentValue2:ke,_threadCount:0};function M4(e,t,n,a,i,u,f,v){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=M(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=M(0),this.hiddenUpdates=M(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=u,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function a0(e,t,n,a,i,u,f,v,b,S,N,q){return e=new M4(e,t,n,f,v,b,S,q),t=1,u===!0&&(t|=24),u=Sn(3,null,null,t),e.current=u,u.stateNode=e,t=Ls(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:a,isDehydrated:n,cache:t},u2(u),e}function r0(e){return e?(e=hl,e):hl}function l0(e,t,n,a,i,u){i=r0(i),a.context===null?a.context=i:a.pendingContext=i,a=Ba(t),a.payload={element:n},u=u===void 0?null:u,u!==null&&(a.callback=u),n=qa(e,a,t),n!==null&&(Zt(n,e,t),E1(n,e,t))}function o0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function I2(e,t){o0(e,t),(e=e.alternate)&&o0(e,t)}function i0(e){if(e.tag===13){var t=Ra(e,67108864);t!==null&&Zt(t,e,67108864),I2(e,67108864)}}var Si=!0;function A4(e,t,n,a){var i=X.T;X.T=null;var u=P.p;try{P.p=2,e5(e,t,n,a)}finally{P.p=u,X.T=i}}function L4(e,t,n,a){var i=X.T;X.T=null;var u=P.p;try{P.p=8,e5(e,t,n,a)}finally{P.p=u,X.T=i}}function e5(e,t,n,a){if(Si){var i=t5(a);if(i===null)j2(e,t,a,Ei,n),c0(e,a);else if(T4(i,e,t,n,a))a.stopPropagation();else if(c0(e,a),t&4&&-1<z4.indexOf(e)){for(;i!==null;){var u=qt(i);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var f=Xn(u.pendingLanes);if(f!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;f;){var b=1<<31-xt(f);v.entanglements[1]|=b,f&=~b}ea(u),(tt&6)===0&&(ci=tn()+500,N1(0))}}break;case 13:v=Ra(u,2),v!==null&&Zt(v,u,2),hi(),I2(u,2)}if(u=t5(a),u===null&&j2(e,t,a,Ei,n),u===i)break;i=u}i!==null&&a.stopPropagation()}else j2(e,t,a,null,n)}}function t5(e){return e=is(e),n5(e)}var Ei=null;function n5(e){if(Ei=null,e=nn(e),e!==null){var t=ae(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Ce(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ei=e,null}function s0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(e1()){case Rn:return 2;case yn:return 8;case yr:case t1:return 32;case wo:return 268435456;default:return 32}default:return 32}}var a5=!1,Fa=null,Ka=null,Pa=null,Y1=new Map,G1=new Map,Ja=[],z4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function c0(e,t){switch(e){case"focusin":case"focusout":Fa=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":Y1.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":G1.delete(t.pointerId)}}function X1(e,t,n,a,i,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:u,targetContainers:[i]},t!==null&&(t=qt(t),t!==null&&i0(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function T4(e,t,n,a,i){switch(t){case"focusin":return Fa=X1(Fa,e,t,n,a,i),!0;case"dragenter":return Ka=X1(Ka,e,t,n,a,i),!0;case"mouseover":return Pa=X1(Pa,e,t,n,a,i),!0;case"pointerover":var u=i.pointerId;return Y1.set(u,X1(Y1.get(u)||null,e,t,n,a,i)),!0;case"gotpointercapture":return u=i.pointerId,G1.set(u,X1(G1.get(u)||null,e,t,n,a,i)),!0}return!1}function u0(e){var t=nn(e.target);if(t!==null){var n=ae(t);if(n!==null){if(t=n.tag,t===13){if(t=Ce(n),t!==null){e.blockedOn=t,de(e.priority,function(){if(n.tag===13){var a=sn(),i=Ra(n,a);i!==null&&Zt(i,n,a),I2(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Di(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=t5(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);os=a,n.target.dispatchEvent(a),os=null}else return t=qt(n),t!==null&&i0(t),e.blockedOn=n,!1;t.shift()}return!0}function d0(e,t,n){Di(e)&&n.delete(t)}function R4(){a5=!1,Fa!==null&&Di(Fa)&&(Fa=null),Ka!==null&&Di(Ka)&&(Ka=null),Pa!==null&&Di(Pa)&&(Pa=null),Y1.forEach(d0),G1.forEach(d0)}function Mi(e,t){e.blockedOn===t&&(e.blockedOn=null,a5||(a5=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,R4)))}var Ai=null;function h0(e){Ai!==e&&(Ai=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Ai===e&&(Ai=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(n5(a||n)===null)continue;break}var u=qt(n);u!==null&&(e.splice(t,3),t-=3,Xs(u,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function Q1(e){function t(b){return Mi(b,e)}Fa!==null&&Mi(Fa,e),Ka!==null&&Mi(Ka,e),Pa!==null&&Mi(Pa,e),Y1.forEach(t),G1.forEach(t);for(var n=0;n<Ja.length;n++){var a=Ja[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Ja.length&&(n=Ja[0],n.blockedOn===null);)u0(n),n.blockedOn===null&&Ja.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],u=n[a+1],f=i[I]||null;if(typeof u=="function")f||h0(n);else if(f){var v=null;if(u&&u.hasAttribute("formAction")){if(i=u,f=u[I]||null)v=f.formAction;else if(n5(i)!==null)continue}else v=f.action;typeof v=="function"?n[a+1]=v:(n.splice(a,3),a-=3),h0(n)}}}function r5(e){this._internalRoot=e}Li.prototype.render=r5.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=sn();l0(n,a,e,t,null,null)},Li.prototype.unmount=r5.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&Al(),l0(e.current,2,null,e,null,null),hi(),t[pe]=null}};function Li(e){this._internalRoot=e}Li.prototype.unstable_scheduleHydration=function(e){if(e){var t=re();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ja.length&&t!==0&&t<Ja[n].priority;n++);Ja.splice(n,0,e),n===0&&u0(e)}};var f0=r.version;if(f0!=="19.0.0")throw Error(s(527,f0,"19.0.0"));P.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=B(t),e=e!==null?le(e):null,e=e===null?null:e.stateNode,e};var H4={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:X,findFiberByHostInstance:nn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zi.isDisabled&&zi.supportsFiber)try{La=zi.inject(H4),Ot=zi}catch{}}return K1.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,a="",i=Lu,u=zu,f=Tu,v=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(v=t.unstable_transitionCallbacks)),t=a0(e,1,!1,null,null,n,a,i,u,f,v,null),e[pe]=t.current,q2(e.nodeType===8?e.parentNode:e),new r5(t)},K1.hydrateRoot=function(e,t,n){if(!c(e))throw Error(s(299));var a=!1,i="",u=Lu,f=zu,v=Tu,b=null,S=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks),n.formState!==void 0&&(S=n.formState)),t=a0(e,1,!0,t,n??null,a,i,u,f,v,b,S),t.context=r0(null),n=t.current,a=sn(),i=Ba(a),i.callback=null,qa(n,i,a),t.current.lanes=a,H(t,a),ea(t),e[pe]=t.current,q2(e),new Li(t)},K1.version="19.0.0",K1}var w0;function X4(){if(w0)return i5.exports;w0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),i5.exports=G4(),i5.exports}var Q4=X4();/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var cd=l=>{throw TypeError(l)},F4=(l,r,o)=>r.has(l)||cd("Cannot "+o),d5=(l,r,o)=>(F4(l,r,"read from private field"),o?o.call(l):r.get(l)),K4=(l,r,o)=>r.has(l)?cd("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(l):r.set(l,o),k0="popstate";function P4(l={}){function r(c,d){let{pathname:h="/",search:g="",hash:y=""}=wa(c.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),io("",{pathname:h,search:g,hash:y},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(c,d){let h=c.document.querySelector("base"),g="";if(h&&h.getAttribute("href")){let y=c.location.href,p=y.indexOf("#");g=p===-1?y:y.slice(0,p)}return g+"#"+(typeof d=="string"?d:ir(d))}function s(c,d){st(c.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return W4(r,o,s,l)}function De(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function st(l,r){if(!l){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function J4(){return Math.random().toString(36).substring(2,10)}function S0(l,r){return{usr:l.state,key:l.key,idx:r}}function io(l,r,o=null,s){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof r=="string"?wa(r):r,state:o,key:r&&r.key||s||J4()}}function ir({pathname:l="/",search:r="",hash:o=""}){return r&&r!=="?"&&(l+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(l+=o.charAt(0)==="#"?o:"#"+o),l}function wa(l){let r={};if(l){let o=l.indexOf("#");o>=0&&(r.hash=l.substring(o),l=l.substring(0,o));let s=l.indexOf("?");s>=0&&(r.search=l.substring(s),l=l.substring(0,s)),l&&(r.pathname=l)}return r}function W4(l,r,o,s={}){let{window:c=document.defaultView,v5Compat:d=!1}=s,h=c.history,g="POP",y=null,p=_();p==null&&(p=0,h.replaceState({...h.state,idx:p},""));function _(){return(h.state||{idx:null}).idx}function w(){g="POP";let K=_(),j=K==null?null:K-p;p=K,y&&y({action:g,location:F.location,delta:j})}function E(K,j){g="PUSH";let fe=io(F.location,K,j);o&&o(fe,K),p=_()+1;let J=S0(fe,p),me=F.createHref(fe);try{h.pushState(J,"",me)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;c.location.assign(me)}d&&y&&y({action:g,location:F.location,delta:1})}function L(K,j){g="REPLACE";let fe=io(F.location,K,j);o&&o(fe,K),p=_();let J=S0(fe,p),me=F.createHref(fe);h.replaceState(J,"",me),d&&y&&y({action:g,location:F.location,delta:0})}function U(K){return ud(K)}let F={get action(){return g},get location(){return l(c,h)},listen(K){if(y)throw new Error("A history only accepts one active listener");return c.addEventListener(k0,w),y=K,()=>{c.removeEventListener(k0,w),y=null}},createHref(K){return r(c,K)},createURL:U,encodeLocation(K){let j=U(K);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:E,replace:L,go(K){return h.go(K)}};return F}function ud(l,r=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),De(o,"No window.location.(origin|href) available to create URL");let s=typeof l=="string"?l:ir(l);return s=s.replace(/ $/,"%20"),!r&&s.startsWith("//")&&(s=o+s),new URL(s,o)}var ro,E0=class{constructor(l){if(K4(this,ro,new Map),l)for(let[r,o]of l)this.set(r,o)}get(l){if(d5(this,ro).has(l))return d5(this,ro).get(l);if(l.defaultValue!==void 0)return l.defaultValue;throw new Error("No value found for context")}set(l,r){d5(this,ro).set(l,r)}};ro=new WeakMap;var I4=new Set(["lazy","caseSensitive","path","id","index","children"]);function e6(l){return I4.has(l)}var t6=new Set(["lazy","caseSensitive","path","id","index","unstable_middleware","children"]);function n6(l){return t6.has(l)}function a6(l){return l.index===!0}function so(l,r,o=[],s={},c=!1){return l.map((d,h)=>{let g=[...o,String(h)],y=typeof d.id=="string"?d.id:g.join("-");if(De(d.index!==!0||!d.children,"Cannot specify children on an index route"),De(c||!s[y],`Found a route id collision on id "${y}".  Route id's must be globally unique within Data Router usages`),a6(d)){let p={...d,...r(d),id:y};return s[y]=p,p}else{let p={...d,...r(d),id:y,children:void 0};return s[y]=p,d.children&&(p.children=so(d.children,r,g,s,c)),p}})}function nr(l,r,o="/"){return Hi(l,r,o,!1)}function Hi(l,r,o,s){let c=typeof r=="string"?wa(r):r,d=Ln(c.pathname||"/",o);if(d==null)return null;let h=dd(l);l6(h);let g=null;for(let y=0;g==null&&y<h.length;++y){let p=v6(d);g=y6(h[y],p,s)}return g}function r6(l,r){let{route:o,pathname:s,params:c}=l;return{id:o.id,pathname:s,params:c,data:r[o.id],handle:o.handle}}function dd(l,r=[],o=[],s=""){let c=(d,h,g)=>{let y={relativePath:g===void 0?d.path||"":g,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};y.relativePath.startsWith("/")&&(De(y.relativePath.startsWith(s),`Absolute route path "${y.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(s.length));let p=ta([s,y.relativePath]),_=o.concat(y);d.children&&d.children.length>0&&(De(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),dd(d.children,r,_,p)),!(d.path==null&&!d.index)&&r.push({path:p,score:h6(p,d.index),routesMeta:_})};return l.forEach((d,h)=>{var g;if(d.path===""||!((g=d.path)!=null&&g.includes("?")))c(d,h);else for(let y of hd(d.path))c(d,h,y)}),r}function hd(l){let r=l.split("/");if(r.length===0)return[];let[o,...s]=r,c=o.endsWith("?"),d=o.replace(/\?$/,"");if(s.length===0)return c?[d,""]:[d];let h=hd(s.join("/")),g=[];return g.push(...h.map(y=>y===""?d:[d,y].join("/"))),c&&g.push(...h),g.map(y=>l.startsWith("/")&&y===""?"/":y)}function l6(l){l.sort((r,o)=>r.score!==o.score?o.score-r.score:f6(r.routesMeta.map(s=>s.childrenIndex),o.routesMeta.map(s=>s.childrenIndex)))}var o6=/^:[\w-]+$/,i6=3,s6=2,c6=1,u6=10,d6=-2,D0=l=>l==="*";function h6(l,r){let o=l.split("/"),s=o.length;return o.some(D0)&&(s+=d6),r&&(s+=s6),o.filter(c=>!D0(c)).reduce((c,d)=>c+(o6.test(d)?i6:d===""?c6:u6),s)}function f6(l,r){return l.length===r.length&&l.slice(0,-1).every((s,c)=>s===r[c])?l[l.length-1]-r[r.length-1]:0}function y6(l,r,o=!1){let{routesMeta:s}=l,c={},d="/",h=[];for(let g=0;g<s.length;++g){let y=s[g],p=g===s.length-1,_=d==="/"?r:r.slice(d.length)||"/",w=Vi({path:y.relativePath,caseSensitive:y.caseSensitive,end:p},_),E=y.route;if(!w&&p&&o&&!s[s.length-1].route.index&&(w=Vi({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},_)),!w)return null;Object.assign(c,w.params),h.push({params:c,pathname:ta([d,w.pathname]),pathnameBase:_6(ta([d,w.pathnameBase])),route:E}),w.pathnameBase!=="/"&&(d=ta([d,w.pathnameBase]))}return h}function Vi(l,r){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[o,s]=p6(l.path,l.caseSensitive,l.end),c=r.match(o);if(!c)return null;let d=c[0],h=d.replace(/(.)\/+$/,"$1"),g=c.slice(1);return{params:s.reduce((p,{paramName:_,isOptional:w},E)=>{if(_==="*"){let U=g[E]||"";h=d.slice(0,d.length-U.length).replace(/(.)\/+$/,"$1")}const L=g[E];return w&&!L?p[_]=void 0:p[_]=(L||"").replace(/%2F/g,"/"),p},{}),pathname:d,pathnameBase:h,pattern:l}}function p6(l,r=!1,o=!0){st(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let s=[],c="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,g,y)=>(s.push({paramName:g,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(s.push({paramName:"*"}),c+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":l!==""&&l!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,r?void 0:"i"),s]}function v6(l){try{return l.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return st(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),l}}function Ln(l,r){if(r==="/")return l;if(!l.toLowerCase().startsWith(r.toLowerCase()))return null;let o=r.endsWith("/")?r.length-1:r.length,s=l.charAt(o);return s&&s!=="/"?null:l.slice(o)||"/"}function g6({basename:l,pathname:r}){return r==="/"?l:ta([l,r])}function m6(l,r="/"){let{pathname:o,search:s="",hash:c=""}=typeof l=="string"?wa(l):l;return{pathname:o?o.startsWith("/")?o:b6(o,r):r,search:C6(s),hash:x6(c)}}function b6(l,r){let o=r.replace(/\/+$/,"").split("/");return l.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function h5(l,r,o,s){return`Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function fd(l){return l.filter((r,o)=>o===0||r.route.path&&r.route.path.length>0)}function Yi(l){let r=fd(l);return r.map((o,s)=>s===r.length-1?o.pathname:o.pathnameBase)}function Gi(l,r,o,s=!1){let c;typeof l=="string"?c=wa(l):(c={...l},De(!c.pathname||!c.pathname.includes("?"),h5("?","pathname","search",c)),De(!c.pathname||!c.pathname.includes("#"),h5("#","pathname","hash",c)),De(!c.search||!c.search.includes("#"),h5("#","search","hash",c)));let d=l===""||c.pathname==="",h=d?"/":c.pathname,g;if(h==null)g=o;else{let w=r.length-1;if(!s&&h.startsWith("..")){let E=h.split("/");for(;E[0]==="..";)E.shift(),w-=1;c.pathname=E.join("/")}g=w>=0?r[w]:"/"}let y=m6(c,g),p=h&&h!=="/"&&h.endsWith("/"),_=(d||h===".")&&o.endsWith("/");return!y.pathname.endsWith("/")&&(p||_)&&(y.pathname+="/"),y}var ta=l=>l.join("/").replace(/\/\/+/g,"/"),_6=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),C6=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,x6=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,Bi=class{constructor(l,r,o,s=!1){this.status=l,this.statusText=r||"",this.internal=s,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function co(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var yd=["POST","PUT","PATCH","DELETE"],w6=new Set(yd),k6=["GET",...yd],S6=new Set(k6),E6=new Set([301,302,303,307,308]),D6=new Set([307,308]),f5={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},M6={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},P1={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},A6=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,A5=l=>A6.test(l),L6=l=>({hasErrorBoundary:!!l.hasErrorBoundary}),pd="remix-router-transitions",vd=Symbol("ResetLoaderData");function z6(l){const r=l.window?l.window:typeof window<"u"?window:void 0,o=typeof r<"u"&&typeof r.document<"u"&&typeof r.document.createElement<"u";De(l.routes.length>0,"You must provide a non-empty routes array to createRouter");let s=l.hydrationRouteProperties||[],c=l.mapRouteProperties||L6,d={},h=so(l.routes,c,void 0,d),g,y=l.basename||"/",p=l.dataStrategy||O6,_={unstable_middleware:!1,...l.future},w=null,E=new Set,L=null,U=null,F=null,K=l.hydrationData!=null,j=nr(h,l.history.location,y),fe=!1,J=null,me;if(j==null&&!l.patchRoutesOnNavigation){let C=An(404,{pathname:l.history.location.pathname}),{matches:M,route:H}=V0(h);me=!0,j=M,J={[H.id]:C}}else if(j&&!l.hydrationData&&la(j,h,l.history.location.pathname).active&&(j=null),j)if(j.some(C=>C.route.lazy))me=!1;else if(!j.some(C=>C.route.loader))me=!0;else{let C=l.hydrationData?l.hydrationData.loaderData:null,M=l.hydrationData?l.hydrationData.errors:null;if(M){let H=j.findIndex(G=>M[G.route.id]!==void 0);me=j.slice(0,H+1).every(G=>!x5(G.route,C,M))}else me=j.every(H=>!x5(H.route,C,M))}else{me=!1,j=[];let C=la(null,h,l.history.location.pathname);C.active&&C.matches&&(fe=!0,j=C.matches)}let W,T={historyAction:l.history.action,location:l.history.location,matches:j,initialized:me,navigation:f5,restoreScrollPosition:l.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:l.hydrationData&&l.hydrationData.loaderData||{},actionData:l.hydrationData&&l.hydrationData.actionData||null,errors:l.hydrationData&&l.hydrationData.errors||J,fetchers:new Map,blockers:new Map},$e="POP",Ve=!1,X,ve=!1,We=new Map,At=null,vt=!1,Me=!1,ze=new Set,Z=new Map,se=0,ae=-1,Ce=new Map,x=new Set,B=new Map,le=new Map,ee=new Set,P=new Map,ke,ge=null;function Lt(){if(w=l.history.listen(({action:C,location:M,delta:H})=>{if(ke){ke(),ke=void 0;return}st(P.size===0||H!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let G=So({currentLocation:T.location,nextLocation:M,historyAction:C});if(G&&H!=null){let Q=new Promise(oe=>{ke=oe});l.history.go(H*-1),xt(G,{state:"blocked",location:M,proceed(){xt(G,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),Q.then(()=>l.history.go(H))},reset(){let oe=new Map(T.blockers);oe.set(G,P1),xe({blockers:oe})}});return}return fn(C,M)}),o){Q6(r,We);let C=()=>F6(r,We);r.addEventListener("pagehide",C),At=()=>r.removeEventListener("pagehide",C)}return T.initialized||fn("POP",T.location,{initialHydration:!0}),W}function Oe(){w&&w(),At&&At(),E.clear(),X&&X.abort(),T.fetchers.forEach((C,M)=>t1(M)),T.blockers.forEach((C,M)=>Hn(M))}function at(C){return E.add(C),()=>E.delete(C)}function xe(C,M={}){C.matches&&(C.matches=C.matches.map(Q=>{let oe=d[Q.route.id],ce=Q.route;return ce.element!==oe.element||ce.errorElement!==oe.errorElement||ce.hydrateFallbackElement!==oe.hydrateFallbackElement?{...Q,route:oe}:Q})),T={...T,...C};let H=[],G=[];T.fetchers.forEach((Q,oe)=>{Q.state==="idle"&&(ee.has(oe)?H.push(oe):G.push(oe))}),ee.forEach(Q=>{!T.fetchers.has(Q)&&!Z.has(Q)&&H.push(Q)}),[...E].forEach(Q=>Q(T,{deletedFetchers:H,viewTransitionOpts:M.viewTransitionOpts,flushSync:M.flushSync===!0})),H.forEach(Q=>t1(Q)),G.forEach(Q=>T.fetchers.delete(Q))}function zt(C,M,{flushSync:H}={}){var te,I;let G=T.actionData!=null&&T.navigation.formMethod!=null&&Kt(T.navigation.formMethod)&&T.navigation.state==="loading"&&((te=C.state)==null?void 0:te._isRedirect)!==!0,Q;M.actionData?Object.keys(M.actionData).length>0?Q=M.actionData:Q=null:G?Q=T.actionData:Q=null;let oe=M.loaderData?N0(T.loaderData,M.loaderData,M.matches||[],M.errors):T.loaderData,ce=T.blockers;ce.size>0&&(ce=new Map(ce),ce.forEach((pe,qe)=>ce.set(qe,P1)));let re=vt?!1:Xn(C,M.matches||T.matches),de=Ve===!0||T.navigation.formMethod!=null&&Kt(T.navigation.formMethod)&&((I=C.state)==null?void 0:I._isRedirect)!==!0;g&&(h=g,g=void 0),vt||$e==="POP"||($e==="PUSH"?l.history.push(C,C.state):$e==="REPLACE"&&l.history.replace(C,C.state));let ue;if($e==="POP"){let pe=We.get(T.location.pathname);pe&&pe.has(C.pathname)?ue={currentLocation:T.location,nextLocation:C}:We.has(C.pathname)&&(ue={currentLocation:C,nextLocation:T.location})}else if(ve){let pe=We.get(T.location.pathname);pe?pe.add(C.pathname):(pe=new Set([C.pathname]),We.set(T.location.pathname,pe)),ue={currentLocation:T.location,nextLocation:C}}xe({...M,actionData:Q,loaderData:oe,historyAction:$e,location:C,initialized:!0,navigation:f5,revalidation:"idle",restoreScrollPosition:re,preventScrollReset:de,blockers:ce},{viewTransitionOpts:ue,flushSync:H===!0}),$e="POP",Ve=!1,ve=!1,vt=!1,Me=!1,ge==null||ge.resolve(),ge=null}async function Ma(C,M){if(typeof C=="number"){l.history.go(C);return}let H=C5(T.location,T.matches,y,C,M==null?void 0:M.fromRouteId,M==null?void 0:M.relative),{path:G,submission:Q,error:oe}=M0(!1,H,M),ce=T.location,re=io(T.location,G,M&&M.state);re={...re,...l.history.encodeLocation(re)};let de=M&&M.replace!=null?M.replace:void 0,ue="PUSH";de===!0?ue="REPLACE":de===!1||Q!=null&&Kt(Q.formMethod)&&Q.formAction===T.location.pathname+T.location.search&&(ue="REPLACE");let te=M&&"preventScrollReset"in M?M.preventScrollReset===!0:void 0,I=(M&&M.flushSync)===!0,pe=So({currentLocation:ce,nextLocation:re,historyAction:ue});if(pe){xt(pe,{state:"blocked",location:re,proceed(){xt(pe,{state:"proceeding",proceed:void 0,reset:void 0,location:re}),Ma(C,M)},reset(){let qe=new Map(T.blockers);qe.set(pe,P1),xe({blockers:qe})}});return}await fn(ue,re,{submission:Q,pendingError:oe,preventScrollReset:te,replace:M&&M.replace,enableViewTransition:M&&M.viewTransition,flushSync:I})}function Yn(){ge||(ge=K6()),e1(),xe({revalidation:"loading"});let C=ge.promise;return T.navigation.state==="submitting"?C:T.navigation.state==="idle"?(fn(T.historyAction,T.location,{startUninterruptedRevalidation:!0}),C):(fn($e||T.historyAction,T.navigation.location,{overrideNavigation:T.navigation,enableViewTransition:ve===!0}),C)}async function fn(C,M,H){X&&X.abort(),X=null,$e=C,vt=(H&&H.startUninterruptedRevalidation)===!0,el(T.location,T.matches),Ve=(H&&H.preventScrollReset)===!0,ve=(H&&H.enableViewTransition)===!0;let G=g||h,Q=H&&H.overrideNavigation,oe=H!=null&&H.initialHydration&&T.matches&&T.matches.length>0&&!fe?T.matches:nr(G,M,y),ce=(H&&H.flushSync)===!0;if(oe&&T.initialized&&!Me&&j6(T.location,M)&&!(H&&H.submission&&Kt(H.submission.formMethod))){zt(M,{matches:oe},{flushSync:ce});return}let re=la(oe,G,M.pathname);if(re.active&&re.matches&&(oe=re.matches),!oe){let{error:Tt,notFoundMatches:Je,route:Be}=n1(M.pathname);zt(M,{matches:Je,loaderData:{},errors:{[Be.id]:Tt}},{flushSync:ce});return}X=new AbortController;let de=ql(l.history,M,X.signal,H&&H.submission),ue=new E0(l.unstable_getContext?await l.unstable_getContext():void 0),te;if(H&&H.pendingError)te=[Ur(oe).route.id,{type:"error",error:H.pendingError}];else if(H&&H.submission&&Kt(H.submission.formMethod)){let Tt=await Jr(de,M,H.submission,oe,ue,re.active,H&&H.initialHydration===!0,{replace:H.replace,flushSync:ce});if(Tt.shortCircuited)return;if(Tt.pendingActionResult){let[Je,Be]=Tt.pendingActionResult;if(cn(Be)&&co(Be.error)&&Be.error.status===404){X=null,zt(M,{matches:Tt.matches,loaderData:{},errors:{[Je]:Be.error}});return}}oe=Tt.matches||oe,te=Tt.pendingActionResult,Q=y5(M,H.submission),ce=!1,re.active=!1,de=ql(l.history,de.url,de.signal)}let{shortCircuited:I,matches:pe,loaderData:qe,errors:wt}=await Aa(de,M,oe,ue,re.active,Q,H&&H.submission,H&&H.fetcherSubmission,H&&H.replace,H&&H.initialHydration===!0,ce,te);I||(X=null,zt(M,{matches:pe||oe,...U0(te),loaderData:qe,errors:wt}))}async function Jr(C,M,H,G,Q,oe,ce,re={}){e1();let de=G6(M,H);if(xe({navigation:de},{flushSync:re.flushSync===!0}),oe){let I=await Qn(G,M.pathname,C.signal);if(I.type==="aborted")return{shortCircuited:!0};if(I.type==="error"){let pe=Ur(I.partialMatches).route.id;return{matches:I.partialMatches,pendingActionResult:[pe,{type:"error",error:I.error}]}}else if(I.matches)G=I.matches;else{let{notFoundMatches:pe,error:qe,route:wt}=n1(M.pathname);return{matches:pe,pendingActionResult:[wt.id,{type:"error",error:qe}]}}}let ue,te=$i(G,M);if(!te.route.action&&!te.route.lazy)ue={type:"error",error:An(405,{method:C.method,pathname:M.pathname,routeId:te.route.id})};else{let I=Zl(c,d,C,G,te,ce?[]:s,Q),pe=await fr(C,I,Q,null);if(ue=pe[te.route.id],!ue){for(let qe of G)if(pe[qe.route.id]){ue=pe[qe.route.id];break}}if(C.signal.aborted)return{shortCircuited:!0}}if(Vr(ue)){let I;return re&&re.replace!=null?I=re.replace:I=H0(ue.response.headers.get("Location"),new URL(C.url),y)===T.location.pathname+T.location.search,await ra(C,ue,!0,{submission:H,replace:I}),{shortCircuited:!0}}if(cn(ue)){let I=Ur(G,te.route.id);return(re&&re.replace)!==!0&&($e="PUSH"),{matches:G,pendingActionResult:[I.route.id,ue,te.route.id]}}return{matches:G,pendingActionResult:[te.route.id,ue]}}async function Aa(C,M,H,G,Q,oe,ce,re,de,ue,te,I){let pe=oe||y5(M,ce),qe=ce||re||q0(pe),wt=!vt&&!ue;if(Q){if(wt){let Fe=Wr(I);xe({navigation:pe,...Fe!==void 0?{actionData:Fe}:{}},{flushSync:te})}let Te=await Qn(H,M.pathname,C.signal);if(Te.type==="aborted")return{shortCircuited:!0};if(Te.type==="error"){let Fe=Ur(Te.partialMatches).route.id;return{matches:Te.partialMatches,loaderData:{},errors:{[Fe]:Te.error}}}else if(Te.matches)H=Te.matches;else{let{error:Fe,notFoundMatches:tl,route:za}=n1(M.pathname);return{matches:tl,loaderData:{},errors:{[za.id]:Fe}}}}let Tt=g||h,{dsMatches:Je,revalidatingFetchers:Be}=A0(C,G,c,d,l.history,T,H,qe,M,ue?[]:s,ue===!0,Me,ze,ee,B,x,Tt,y,l.patchRoutesOnNavigation!=null,I);if(ae=++se,!l.dataStrategy&&!Je.some(Te=>Te.shouldLoad)&&Be.length===0){let Te=La();return zt(M,{matches:H,loaderData:{},errors:I&&cn(I[1])?{[I[0]]:I[1].error}:null,...U0(I),...Te?{fetchers:new Map(T.fetchers)}:{}},{flushSync:te}),{shortCircuited:!0}}if(wt){let Te={};if(!Q){Te.navigation=pe;let Fe=Wr(I);Fe!==void 0&&(Te.actionData=Fe)}Be.length>0&&(Te.fetchers=Ir(Be)),xe(Te,{flushSync:te})}Be.forEach(Te=>{Gn(Te.key),Te.controller&&Z.set(Te.key,Te.controller)});let $n=()=>Be.forEach(Te=>Gn(Te.key));X&&X.signal.addEventListener("abort",$n);let{loaderResults:nn,fetcherResults:qt}=await tn(Je,Be,C,G);if(C.signal.aborted)return{shortCircuited:!0};X&&X.signal.removeEventListener("abort",$n),Be.forEach(Te=>Z.delete(Te.key));let Nt=Ti(nn);if(Nt)return await ra(C,Nt.result,!0,{replace:de}),{shortCircuited:!0};if(Nt=Ti(qt),Nt)return x.add(Nt.key),await ra(C,Nt.result,!0,{replace:de}),{shortCircuited:!0};let{loaderData:Fn,errors:Ie}=O0(T,H,nn,I,Be,qt);ue&&T.errors&&(Ie={...T.errors,...Ie});let Kn=La(),vr=Ot(ae),pn=Kn||vr||Be.length>0;return{matches:H,loaderData:Fn,errors:Ie,...pn?{fetchers:new Map(T.fetchers)}:{}}}function Wr(C){if(C&&!cn(C[1]))return{[C[0]]:C[1].data};if(T.actionData)return Object.keys(T.actionData).length===0?null:T.actionData}function Ir(C){return C.forEach(M=>{let H=T.fetchers.get(M.key),G=J1(void 0,H?H.data:void 0);T.fetchers.set(M.key,G)}),new Map(T.fetchers)}async function Jl(C,M,H,G){Gn(C);let Q=(G&&G.flushSync)===!0,oe=g||h,ce=C5(T.location,T.matches,y,H,M,G==null?void 0:G.relative),re=nr(oe,ce,y),de=la(re,oe,ce);if(de.active&&de.matches&&(re=de.matches),!re){yn(C,M,An(404,{pathname:ce}),{flushSync:Q});return}let{path:ue,submission:te,error:I}=M0(!0,ce,G);if(I){yn(C,M,I,{flushSync:Q});return}let pe=new E0(l.unstable_getContext?await l.unstable_getContext():void 0),qe=(G&&G.preventScrollReset)===!0;if(te&&Kt(te.formMethod)){await Wl(C,M,ue,re,pe,de.active,Q,qe,te);return}B.set(C,{routeId:M,path:ue}),await Il(C,M,ue,re,pe,de.active,Q,qe,te)}async function Wl(C,M,H,G,Q,oe,ce,re,de){e1(),B.delete(C);let ue=T.fetchers.get(C);Rn(C,X6(de,ue),{flushSync:ce});let te=new AbortController,I=ql(l.history,H,te.signal,de);if(oe){let rt=await Qn(G,new URL(I.url).pathname,I.signal,C);if(rt.type==="aborted")return;if(rt.type==="error"){yn(C,M,rt.error,{flushSync:ce});return}else if(rt.matches)G=rt.matches;else{yn(C,M,An(404,{pathname:H}),{flushSync:ce});return}}let pe=$i(G,H);if(!pe.route.action&&!pe.route.lazy){let rt=An(405,{method:de.formMethod,pathname:H,routeId:M});yn(C,M,rt,{flushSync:ce});return}Z.set(C,te);let qe=se,wt=Zl(c,d,I,G,pe,s,Q),Je=(await fr(I,wt,Q,C))[pe.route.id];if(I.signal.aborted){Z.get(C)===te&&Z.delete(C);return}if(ee.has(C)){if(Vr(Je)||cn(Je)){Rn(C,tr(void 0));return}}else{if(Vr(Je))if(Z.delete(C),ae>qe){Rn(C,tr(void 0));return}else return x.add(C),Rn(C,J1(de)),ra(I,Je,!1,{fetcherSubmission:de,preventScrollReset:re});if(cn(Je)){yn(C,M,Je.error);return}}let Be=T.navigation.location||T.location,$n=ql(l.history,Be,te.signal),nn=g||h,qt=T.navigation.state!=="idle"?nr(nn,T.navigation.location,y):T.matches;De(qt,"Didn't find any matches after fetcher action");let Nt=++se;Ce.set(C,Nt);let Fn=J1(de,Je.data);T.fetchers.set(C,Fn);let{dsMatches:Ie,revalidatingFetchers:Kn}=A0($n,Q,c,d,l.history,T,qt,de,Be,s,!1,Me,ze,ee,B,x,nn,y,l.patchRoutesOnNavigation!=null,[pe.route.id,Je]);Kn.filter(rt=>rt.key!==C).forEach(rt=>{let nl=rt.key,gr=T.fetchers.get(nl),al=J1(void 0,gr?gr.data:void 0);T.fetchers.set(nl,al),Gn(nl),rt.controller&&Z.set(nl,rt.controller)}),xe({fetchers:new Map(T.fetchers)});let vr=()=>Kn.forEach(rt=>Gn(rt.key));te.signal.addEventListener("abort",vr);let{loaderResults:pn,fetcherResults:Te}=await tn(Ie,Kn,$n,Q);if(te.signal.aborted)return;if(te.signal.removeEventListener("abort",vr),Ce.delete(C),Z.delete(C),Kn.forEach(rt=>Z.delete(rt.key)),T.fetchers.has(C)){let rt=tr(Je.data);T.fetchers.set(C,rt)}let Fe=Ti(pn);if(Fe)return ra($n,Fe.result,!1,{preventScrollReset:re});if(Fe=Ti(Te),Fe)return x.add(Fe.key),ra($n,Fe.result,!1,{preventScrollReset:re});let{loaderData:tl,errors:za}=O0(T,qt,pn,void 0,Kn,Te);Ot(Nt),T.navigation.state==="loading"&&Nt>ae?(De($e,"Expected pending action"),X&&X.abort(),zt(T.navigation.location,{matches:qt,loaderData:tl,errors:za,fetchers:new Map(T.fetchers)})):(xe({errors:za,loaderData:N0(T.loaderData,tl,qt,za),fetchers:new Map(T.fetchers)}),Me=!1)}async function Il(C,M,H,G,Q,oe,ce,re,de){let ue=T.fetchers.get(C);Rn(C,J1(de,ue?ue.data:void 0),{flushSync:ce});let te=new AbortController,I=ql(l.history,H,te.signal);if(oe){let Be=await Qn(G,new URL(I.url).pathname,I.signal,C);if(Be.type==="aborted")return;if(Be.type==="error"){yn(C,M,Be.error,{flushSync:ce});return}else if(Be.matches)G=Be.matches;else{yn(C,M,An(404,{pathname:H}),{flushSync:ce});return}}let pe=$i(G,H);Z.set(C,te);let qe=se,wt=Zl(c,d,I,G,pe,s,Q),Je=(await fr(I,wt,Q,C))[pe.route.id];if(Z.get(C)===te&&Z.delete(C),!I.signal.aborted){if(ee.has(C)){Rn(C,tr(void 0));return}if(Vr(Je))if(ae>qe){Rn(C,tr(void 0));return}else{x.add(C),await ra(I,Je,!1,{preventScrollReset:re});return}if(cn(Je)){yn(C,M,Je.error);return}Rn(C,tr(Je.data))}}async function ra(C,M,H,{submission:G,fetcherSubmission:Q,preventScrollReset:oe,replace:ce}={}){M.response.headers.has("X-Remix-Revalidate")&&(Me=!0);let re=M.response.headers.get("Location");De(re,"Expected a Location header on the redirect Response"),re=H0(re,new URL(C.url),y);let de=io(T.location,re,{_isRedirect:!0});if(o){let wt=!1;if(M.response.headers.has("X-Remix-Reload-Document"))wt=!0;else if(A5(re)){const Tt=ud(re,!0);wt=Tt.origin!==r.location.origin||Ln(Tt.pathname,y)==null}if(wt){ce?r.location.replace(re):r.location.assign(re);return}}X=null;let ue=ce===!0||M.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:te,formAction:I,formEncType:pe}=T.navigation;!G&&!Q&&te&&I&&pe&&(G=q0(T.navigation));let qe=G||Q;if(D6.has(M.response.status)&&qe&&Kt(qe.formMethod))await fn(ue,de,{submission:{...qe,formAction:re},preventScrollReset:oe||Ve,enableViewTransition:H?ve:void 0});else{let wt=y5(de,G);await fn(ue,de,{overrideNavigation:wt,fetcherSubmission:Q,preventScrollReset:oe||Ve,enableViewTransition:H?ve:void 0})}}async function fr(C,M,H,G){let Q,oe={};try{Q=await N6(p,C,M,G,H,!1)}catch(ce){return M.filter(re=>re.shouldLoad).forEach(re=>{oe[re.route.id]={type:"error",error:ce}}),oe}if(C.signal.aborted)return oe;for(let[ce,re]of Object.entries(Q))if(Z6(re)){let de=re.result;oe[ce]={type:"redirect",response:B6(de,C,ce,M,y)}}else oe[ce]=await V6(re);return oe}async function tn(C,M,H,G){let Q=fr(H,C,G,null),oe=Promise.all(M.map(async de=>{if(de.matches&&de.match&&de.request&&de.controller){let te=(await fr(de.request,de.matches,G,de.key))[de.match.route.id];return{[de.key]:te}}else return Promise.resolve({[de.key]:{type:"error",error:An(404,{pathname:de.path})}})})),ce=await Q,re=(await oe).reduce((de,ue)=>Object.assign(de,ue),{});return{loaderResults:ce,fetcherResults:re}}function e1(){Me=!0,B.forEach((C,M)=>{Z.has(M)&&ze.add(M),Gn(M)})}function Rn(C,M,H={}){T.fetchers.set(C,M),xe({fetchers:new Map(T.fetchers)},{flushSync:(H&&H.flushSync)===!0})}function yn(C,M,H,G={}){let Q=Ur(T.matches,M);t1(C),xe({errors:{[Q.route.id]:H},fetchers:new Map(T.fetchers)},{flushSync:(G&&G.flushSync)===!0})}function yr(C){return le.set(C,(le.get(C)||0)+1),ee.has(C)&&ee.delete(C),T.fetchers.get(C)||M6}function t1(C){let M=T.fetchers.get(C);Z.has(C)&&!(M&&M.state==="loading"&&Ce.has(C))&&Gn(C),B.delete(C),Ce.delete(C),x.delete(C),ee.delete(C),ze.delete(C),T.fetchers.delete(C)}function wo(C){let M=(le.get(C)||0)-1;M<=0?(le.delete(C),ee.add(C)):le.set(C,M),xe({fetchers:new Map(T.fetchers)})}function Gn(C){let M=Z.get(C);M&&(M.abort(),Z.delete(C))}function ko(C){for(let M of C){let H=yr(M),G=tr(H.data);T.fetchers.set(M,G)}}function La(){let C=[],M=!1;for(let H of x){let G=T.fetchers.get(H);De(G,`Expected fetcher: ${H}`),G.state==="loading"&&(x.delete(H),C.push(H),M=!0)}return ko(C),M}function Ot(C){let M=[];for(let[H,G]of Ce)if(G<C){let Q=T.fetchers.get(H);De(Q,`Expected fetcher: ${H}`),Q.state==="loading"&&(Gn(H),Ce.delete(H),M.push(H))}return ko(M),M.length>0}function es(C,M){let H=T.blockers.get(C)||P1;return P.get(C)!==M&&P.set(C,M),H}function Hn(C){T.blockers.delete(C),P.delete(C)}function xt(C,M){let H=T.blockers.get(C)||P1;De(H.state==="unblocked"&&M.state==="blocked"||H.state==="blocked"&&M.state==="blocked"||H.state==="blocked"&&M.state==="proceeding"||H.state==="blocked"&&M.state==="unblocked"||H.state==="proceeding"&&M.state==="unblocked",`Invalid blocker state transition: ${H.state} -> ${M.state}`);let G=new Map(T.blockers);G.set(C,M),xe({blockers:G})}function So({currentLocation:C,nextLocation:M,historyAction:H}){if(P.size===0)return;P.size>1&&st(!1,"A router only supports one blocker at a time");let G=Array.from(P.entries()),[Q,oe]=G[G.length-1],ce=T.blockers.get(Q);if(!(ce&&ce.state==="proceeding")&&oe({currentLocation:C,nextLocation:M,historyAction:H}))return Q}function n1(C){let M=An(404,{pathname:C}),H=g||h,{matches:G,route:Q}=V0(H);return{notFoundMatches:G,route:Q,error:M}}function ts(C,M,H){if(L=C,F=M,U=H||null,!K&&T.navigation===f5){K=!0;let G=Xn(T.location,T.matches);G!=null&&xe({restoreScrollPosition:G})}return()=>{L=null,F=null,U=null}}function pr(C,M){return U&&U(C,M.map(G=>r6(G,T.loaderData)))||C.key}function el(C,M){if(L&&F){let H=pr(C,M);L[H]=F()}}function Xn(C,M){if(L){let H=pr(C,M),G=L[H];if(typeof G=="number")return G}return null}function la(C,M,H){if(l.patchRoutesOnNavigation)if(C){if(Object.keys(C[0].params).length>0)return{active:!0,matches:Hi(M,H,y,!0)}}else return{active:!0,matches:Hi(M,H,y,!0)||[]};return{active:!1,matches:null}}async function Qn(C,M,H,G){if(!l.patchRoutesOnNavigation)return{type:"success",matches:C};let Q=C;for(;;){let oe=g==null,ce=g||h,re=d;try{await l.patchRoutesOnNavigation({signal:H,path:M,matches:Q,fetcherKey:G,patch:(te,I)=>{H.aborted||L0(te,I,ce,re,c,!1)}})}catch(te){return{type:"error",error:te,partialMatches:Q}}finally{oe&&!H.aborted&&(h=[...h])}if(H.aborted)return{type:"aborted"};let de=nr(ce,M,y);if(de)return{type:"success",matches:de};let ue=Hi(ce,M,y,!0);if(!ue||Q.length===ue.length&&Q.every((te,I)=>te.route.id===ue[I].route.id))return{type:"success",matches:null};Q=ue}}function ns(C){d={},g=so(C,c,void 0,d)}function Eo(C,M,H=!1){let G=g==null;L0(C,M,g||h,d,c,H),G&&(h=[...h],xe({}))}return W={get basename(){return y},get future(){return _},get state(){return T},get routes(){return h},get window(){return r},initialize:Lt,subscribe:at,enableScrollRestoration:ts,navigate:Ma,fetch:Jl,revalidate:Yn,createHref:C=>l.history.createHref(C),encodeLocation:C=>l.history.encodeLocation(C),getFetcher:yr,deleteFetcher:wo,dispose:Oe,getBlocker:es,deleteBlocker:Hn,patchRoutes:Eo,_internalFetchControllers:Z,_internalSetRoutes:ns,_internalSetStateDoNotUseOrYouWillBreakYourApp(C){xe(C)}},W}function T6(l){return l!=null&&("formData"in l&&l.formData!=null||"body"in l&&l.body!==void 0)}function C5(l,r,o,s,c,d){let h,g;if(c){h=[];for(let p of r)if(h.push(p),p.route.id===c){g=p;break}}else h=r,g=r[r.length-1];let y=Gi(s||".",Yi(h),Ln(l.pathname,o)||l.pathname,d==="path");if(s==null&&(y.search=l.search,y.hash=l.hash),(s==null||s===""||s===".")&&g){let p=L5(y.search);if(g.route.index&&!p)y.search=y.search?y.search.replace(/^\?/,"?index&"):"?index";else if(!g.route.index&&p){let _=new URLSearchParams(y.search),w=_.getAll("index");_.delete("index"),w.filter(L=>L).forEach(L=>_.append("index",L));let E=_.toString();y.search=E?`?${E}`:""}}return o!=="/"&&(y.pathname=g6({basename:o,pathname:y.pathname})),ir(y)}function M0(l,r,o){if(!o||!T6(o))return{path:r};if(o.formMethod&&!Y6(o.formMethod))return{path:r,error:An(405,{method:o.formMethod})};let s=()=>({path:r,error:An(400,{type:"invalid-body"})}),d=(o.formMethod||"get").toUpperCase(),h=xd(r);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!Kt(d))return s();let w=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((E,[L,U])=>`${E}${L}=${U}
`,""):String(o.body);return{path:r,submission:{formMethod:d,formAction:h,formEncType:o.formEncType,formData:void 0,json:void 0,text:w}}}else if(o.formEncType==="application/json"){if(!Kt(d))return s();try{let w=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:r,submission:{formMethod:d,formAction:h,formEncType:o.formEncType,formData:void 0,json:w,text:void 0}}}catch{return s()}}}De(typeof FormData=="function","FormData is not available in this environment");let g,y;if(o.formData)g=k5(o.formData),y=o.formData;else if(o.body instanceof FormData)g=k5(o.body),y=o.body;else if(o.body instanceof URLSearchParams)g=o.body,y=$0(g);else if(o.body==null)g=new URLSearchParams,y=new FormData;else try{g=new URLSearchParams(o.body),y=$0(g)}catch{return s()}let p={formMethod:d,formAction:h,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:y,json:void 0,text:void 0};if(Kt(p.formMethod))return{path:r,submission:p};let _=wa(r);return l&&_.search&&L5(_.search)&&g.append("index",""),_.search=`?${g}`,{path:ir(_),submission:p}}function A0(l,r,o,s,c,d,h,g,y,p,_,w,E,L,U,F,K,j,fe,J){var vt;let me=J?cn(J[1])?J[1].error:J[1].data:void 0,W=c.createURL(d.location),T=c.createURL(y),$e;if(_&&d.errors){let Me=Object.keys(d.errors)[0];$e=h.findIndex(ze=>ze.route.id===Me)}else if(J&&cn(J[1])){let Me=J[0];$e=h.findIndex(ze=>ze.route.id===Me)-1}let Ve=J?J[1].statusCode:void 0,X=Ve&&Ve>=400,ve={currentUrl:W,currentParams:((vt=d.matches[0])==null?void 0:vt.params)||{},nextUrl:T,nextParams:h[0].params,...g,actionResult:me,actionStatus:Ve},We=h.map((Me,ze)=>{let{route:Z}=Me,se=null;if($e!=null&&ze>$e?se=!1:Z.lazy?se=!0:Z.loader==null?se=!1:_?se=x5(Z,d.loaderData,d.errors):R6(d.loaderData,d.matches[ze],Me)&&(se=!0),se!==null)return w5(o,s,l,Me,p,r,se);let ae=X?!1:w||W.pathname+W.search===T.pathname+T.search||W.search!==T.search||H6(d.matches[ze],Me),Ce={...ve,defaultShouldRevalidate:ae},x=qi(Me,Ce);return w5(o,s,l,Me,p,r,x,Ce)}),At=[];return U.forEach((Me,ze)=>{if(_||!h.some(ee=>ee.route.id===Me.routeId)||L.has(ze))return;let Z=d.fetchers.get(ze),se=Z&&Z.state!=="idle"&&Z.data===void 0,ae=nr(K,Me.path,j);if(!ae){if(fe&&se)return;At.push({key:ze,routeId:Me.routeId,path:Me.path,matches:null,match:null,request:null,controller:null});return}if(F.has(ze))return;let Ce=$i(ae,Me.path),x=new AbortController,B=ql(c,Me.path,x.signal),le=null;if(E.has(ze))E.delete(ze),le=Zl(o,s,B,ae,Ce,p,r);else if(se)w&&(le=Zl(o,s,B,ae,Ce,p,r));else{let ee={...ve,defaultShouldRevalidate:X?!1:w};qi(Ce,ee)&&(le=Zl(o,s,B,ae,Ce,p,r,ee))}le&&At.push({key:ze,routeId:Me.routeId,path:Me.path,matches:le,match:Ce,request:B,controller:x})}),{dsMatches:We,revalidatingFetchers:At}}function x5(l,r,o){if(l.lazy)return!0;if(!l.loader)return!1;let s=r!=null&&l.id in r,c=o!=null&&o[l.id]!==void 0;return!s&&c?!1:typeof l.loader=="function"&&l.loader.hydrate===!0?!0:!s&&!c}function R6(l,r,o){let s=!r||o.route.id!==r.route.id,c=!l.hasOwnProperty(o.route.id);return s||c}function H6(l,r){let o=l.route.path;return l.pathname!==r.pathname||o!=null&&o.endsWith("*")&&l.params["*"]!==r.params["*"]}function qi(l,r){if(l.route.shouldRevalidate){let o=l.route.shouldRevalidate(r);if(typeof o=="boolean")return o}return r.defaultShouldRevalidate}function L0(l,r,o,s,c,d){let h;if(l){let p=s[l];De(p,`No route found to patch children into: routeId = ${l}`),p.children||(p.children=[]),h=p.children}else h=o;let g=[],y=[];if(r.forEach(p=>{let _=h.find(w=>gd(p,w));_?y.push({existingRoute:_,newRoute:p}):g.push(p)}),g.length>0){let p=so(g,c,[l||"_","patch",String((h==null?void 0:h.length)||"0")],s);h.push(...p)}if(d&&y.length>0)for(let p=0;p<y.length;p++){let{existingRoute:_,newRoute:w}=y[p],E=_,[L]=so([w],c,[],{},!0);Object.assign(E,{element:L.element?L.element:E.element,errorElement:L.errorElement?L.errorElement:E.errorElement,hydrateFallbackElement:L.hydrateFallbackElement?L.hydrateFallbackElement:E.hydrateFallbackElement})}}function gd(l,r){return"id"in l&&"id"in r&&l.id===r.id?!0:l.index===r.index&&l.path===r.path&&l.caseSensitive===r.caseSensitive?(!l.children||l.children.length===0)&&(!r.children||r.children.length===0)?!0:l.children.every((o,s)=>{var c;return(c=r.children)==null?void 0:c.some(d=>gd(o,d))}):!1}var z0=new WeakMap,md=({key:l,route:r,manifest:o,mapRouteProperties:s})=>{let c=o[r.id];if(De(c,"No route found in manifest"),!c.lazy||typeof c.lazy!="object")return;let d=c.lazy[l];if(!d)return;let h=z0.get(c);h||(h={},z0.set(c,h));let g=h[l];if(g)return g;let y=(async()=>{let p=e6(l),w=c[l]!==void 0&&l!=="hasErrorBoundary";if(p)st(!p,"Route property "+l+" is not a supported lazy route property. This property will be ignored."),h[l]=Promise.resolve();else if(w)st(!1,`Route "${c.id}" has a static property "${l}" defined. The lazy property will be ignored.`);else{let E=await d();E!=null&&(Object.assign(c,{[l]:E}),Object.assign(c,s(c)))}typeof c.lazy=="object"&&(c.lazy[l]=void 0,Object.values(c.lazy).every(E=>E===void 0)&&(c.lazy=void 0))})();return h[l]=y,y},T0=new WeakMap;function $6(l,r,o,s,c){let d=o[l.id];if(De(d,"No route found in manifest"),!l.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof l.lazy=="function"){let _=T0.get(d);if(_)return{lazyRoutePromise:_,lazyHandlerPromise:_};let w=(async()=>{De(typeof l.lazy=="function","No lazy route function found");let E=await l.lazy(),L={};for(let U in E){let F=E[U];if(F===void 0)continue;let K=n6(U),fe=d[U]!==void 0&&U!=="hasErrorBoundary";K?st(!K,"Route property "+U+" is not a supported property to be returned from a lazy route function. This property will be ignored."):fe?st(!fe,`Route "${d.id}" has a static property "${U}" defined but its lazy function is also returning a value for this property. The lazy route property "${U}" will be ignored.`):L[U]=F}Object.assign(d,L),Object.assign(d,{...s(d),lazy:void 0})})();return T0.set(d,w),w.catch(()=>{}),{lazyRoutePromise:w,lazyHandlerPromise:w}}let h=Object.keys(l.lazy),g=[],y;for(let _ of h){if(c&&c.includes(_))continue;let w=md({key:_,route:l,manifest:o,mapRouteProperties:s});w&&(g.push(w),_===r&&(y=w))}let p=g.length>0?Promise.all(g).then(()=>{}):void 0;return p==null||p.catch(()=>{}),y==null||y.catch(()=>{}),{lazyRoutePromise:p,lazyHandlerPromise:y}}async function R0(l){let r=l.matches.filter(c=>c.shouldLoad),o={};return(await Promise.all(r.map(c=>c.resolve()))).forEach((c,d)=>{o[r[d].route.id]=c}),o}async function O6(l){return l.matches.some(r=>r.route.unstable_middleware)?bd(l,!1,()=>R0(l),(r,o)=>({[o]:{type:"error",result:r}})):R0(l)}async function bd(l,r,o,s){let{matches:c,request:d,params:h,context:g}=l,y={handlerResult:void 0};try{let p=c.flatMap(w=>w.route.unstable_middleware?w.route.unstable_middleware.map(E=>[w.route.id,E]):[]),_=await _d({request:d,params:h,context:g},p,r,y,o);return r?_:y.handlerResult}catch(p){if(!y.middlewareError)throw p;let _=await s(y.middlewareError.error,y.middlewareError.routeId);return y.handlerResult?Object.assign(y.handlerResult,_):_}}async function _d(l,r,o,s,c,d=0){let{request:h}=l;if(h.signal.aborted)throw h.signal.reason?h.signal.reason:new Error(`Request aborted without an \`AbortSignal.reason\`: ${h.method} ${h.url}`);let g=r[d];if(!g)return s.handlerResult=await c(),s.handlerResult;let[y,p]=g,_=!1,w,E=async()=>{if(_)throw new Error("You may only call `next()` once per middleware");_=!0,await _d(l,r,o,s,c,d+1)};try{let L=await p({request:l.request,params:l.params,context:l.context},E);return _?L===void 0?w:L:E()}catch(L){throw s.middlewareError?s.middlewareError.error!==L&&(s.middlewareError={routeId:y,error:L}):s.middlewareError={routeId:y,error:L},L}}function Cd(l,r,o,s,c){let d=md({key:"unstable_middleware",route:s.route,manifest:r,mapRouteProperties:l}),h=$6(s.route,Kt(o.method)?"action":"loader",r,l,c);return{middleware:d,route:h.lazyRoutePromise,handler:h.lazyHandlerPromise}}function w5(l,r,o,s,c,d,h,g=null){let y=!1,p=Cd(l,r,o,s,c);return{...s,_lazyPromises:p,shouldLoad:h,unstable_shouldRevalidateArgs:g,unstable_shouldCallHandler(_){return y=!0,g?typeof _=="boolean"?qi(s,{...g,defaultShouldRevalidate:_}):qi(s,g):h},resolve(_){return y||h||_&&!Kt(o.method)&&(s.route.lazy||s.route.loader)?U6({request:o,match:s,lazyHandlerPromise:p==null?void 0:p.handler,lazyRoutePromise:p==null?void 0:p.route,handlerOverride:_,scopedContext:d}):Promise.resolve({type:"data",result:void 0})}}}function Zl(l,r,o,s,c,d,h,g=null){return s.map(y=>y.route.id!==c.route.id?{...y,shouldLoad:!1,unstable_shouldRevalidateArgs:g,unstable_shouldCallHandler:()=>!1,_lazyPromises:Cd(l,r,o,y,d),resolve:()=>Promise.resolve({type:"data",result:void 0})}:w5(l,r,o,y,d,h,!0,g))}async function N6(l,r,o,s,c,d){o.some(p=>{var _;return(_=p._lazyPromises)==null?void 0:_.middleware})&&await Promise.all(o.map(p=>{var _;return(_=p._lazyPromises)==null?void 0:_.middleware}));let h={request:r,params:o[0].params,context:c,matches:o},y=await l({...h,fetcherKey:s,unstable_runClientMiddleware:p=>{let _=h;return bd(_,!1,()=>p({..._,fetcherKey:s,unstable_runClientMiddleware:()=>{throw new Error("Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler")}}),(w,E)=>({[E]:{type:"error",result:w}}))}});try{await Promise.all(o.flatMap(p=>{var _,w;return[(_=p._lazyPromises)==null?void 0:_.handler,(w=p._lazyPromises)==null?void 0:w.route]}))}catch{}return y}async function U6({request:l,match:r,lazyHandlerPromise:o,lazyRoutePromise:s,handlerOverride:c,scopedContext:d}){let h,g,y=Kt(l.method),p=y?"action":"loader",_=w=>{let E,L=new Promise((K,j)=>E=j);g=()=>E(),l.signal.addEventListener("abort",g);let U=K=>typeof w!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${p}" [routeId: ${r.route.id}]`)):w({request:l,params:r.params,context:d},...K!==void 0?[K]:[]),F=(async()=>{try{return{type:"data",result:await(c?c(j=>U(j)):U())}}catch(K){return{type:"error",result:K}}})();return Promise.race([F,L])};try{let w=y?r.route.action:r.route.loader;if(o||s)if(w){let E,[L]=await Promise.all([_(w).catch(U=>{E=U}),o,s]);if(E!==void 0)throw E;h=L}else{await o;let E=y?r.route.action:r.route.loader;if(E)[h]=await Promise.all([_(E),s]);else if(p==="action"){let L=new URL(l.url),U=L.pathname+L.search;throw An(405,{method:l.method,pathname:U,routeId:r.route.id})}else return{type:"data",result:void 0}}else if(w)h=await _(w);else{let E=new URL(l.url),L=E.pathname+E.search;throw An(404,{pathname:L})}}catch(w){return{type:"error",result:w}}finally{g&&l.signal.removeEventListener("abort",g)}return h}async function V6(l){var s,c,d,h,g,y;let{result:r,type:o}=l;if(wd(r)){let p;try{let _=r.headers.get("Content-Type");_&&/\bapplication\/json\b/.test(_)?r.body==null?p=null:p=await r.json():p=await r.text()}catch(_){return{type:"error",error:_}}return o==="error"?{type:"error",error:new Bi(r.status,r.statusText,p),statusCode:r.status,headers:r.headers}:{type:"data",data:p,statusCode:r.status,headers:r.headers}}return o==="error"?B0(r)?r.data instanceof Error?{type:"error",error:r.data,statusCode:(s=r.init)==null?void 0:s.status,headers:(c=r.init)!=null&&c.headers?new Headers(r.init.headers):void 0}:{type:"error",error:new Bi(((d=r.init)==null?void 0:d.status)||500,void 0,r.data),statusCode:co(r)?r.status:void 0,headers:(h=r.init)!=null&&h.headers?new Headers(r.init.headers):void 0}:{type:"error",error:r,statusCode:co(r)?r.status:void 0}:B0(r)?{type:"data",data:r.data,statusCode:(g=r.init)==null?void 0:g.status,headers:(y=r.init)!=null&&y.headers?new Headers(r.init.headers):void 0}:{type:"data",data:r}}function B6(l,r,o,s,c){let d=l.headers.get("Location");if(De(d,"Redirects returned/thrown from loaders/actions must have a Location header"),!A5(d)){let h=s.slice(0,s.findIndex(g=>g.route.id===o)+1);d=C5(new URL(r.url),h,c,d),l.headers.set("Location",d)}return l}function H0(l,r,o){if(A5(l)){let s=l,c=s.startsWith("//")?new URL(r.protocol+s):new URL(s),d=Ln(c.pathname,o)!=null;if(c.origin===r.origin&&d)return c.pathname+c.search+c.hash}return l}function ql(l,r,o,s){let c=l.createURL(xd(r)).toString(),d={signal:o};if(s&&Kt(s.formMethod)){let{formMethod:h,formEncType:g}=s;d.method=h.toUpperCase(),g==="application/json"?(d.headers=new Headers({"Content-Type":g}),d.body=JSON.stringify(s.json)):g==="text/plain"?d.body=s.text:g==="application/x-www-form-urlencoded"&&s.formData?d.body=k5(s.formData):d.body=s.formData}return new Request(c,d)}function k5(l){let r=new URLSearchParams;for(let[o,s]of l.entries())r.append(o,typeof s=="string"?s:s.name);return r}function $0(l){let r=new FormData;for(let[o,s]of l.entries())r.append(o,s);return r}function q6(l,r,o,s=!1,c=!1){let d={},h=null,g,y=!1,p={},_=o&&cn(o[1])?o[1].error:void 0;return l.forEach(w=>{if(!(w.route.id in r))return;let E=w.route.id,L=r[E];if(De(!Vr(L),"Cannot handle redirect results in processLoaderData"),cn(L)){let U=L.error;if(_!==void 0&&(U=_,_=void 0),h=h||{},c)h[E]=U;else{let F=Ur(l,E);h[F.route.id]==null&&(h[F.route.id]=U)}s||(d[E]=vd),y||(y=!0,g=co(L.error)?L.error.status:500),L.headers&&(p[E]=L.headers)}else d[E]=L.data,L.statusCode&&L.statusCode!==200&&!y&&(g=L.statusCode),L.headers&&(p[E]=L.headers)}),_!==void 0&&o&&(h={[o[0]]:_},o[2]&&(d[o[2]]=void 0)),{loaderData:d,errors:h,statusCode:g||200,loaderHeaders:p}}function O0(l,r,o,s,c,d){let{loaderData:h,errors:g}=q6(r,o,s);return c.filter(y=>!y.matches||y.matches.some(p=>p.shouldLoad)).forEach(y=>{let{key:p,match:_,controller:w}=y,E=d[p];if(De(E,"Did not find corresponding fetcher result"),!(w&&w.signal.aborted))if(cn(E)){let L=Ur(l.matches,_==null?void 0:_.route.id);g&&g[L.route.id]||(g={...g,[L.route.id]:E.error}),l.fetchers.delete(p)}else if(Vr(E))De(!1,"Unhandled fetcher revalidation redirect");else{let L=tr(E.data);l.fetchers.set(p,L)}}),{loaderData:h,errors:g}}function N0(l,r,o,s){let c=Object.entries(r).filter(([,d])=>d!==vd).reduce((d,[h,g])=>(d[h]=g,d),{});for(let d of o){let h=d.route.id;if(!r.hasOwnProperty(h)&&l.hasOwnProperty(h)&&d.route.loader&&(c[h]=l[h]),s&&s.hasOwnProperty(h))break}return c}function U0(l){return l?cn(l[1])?{actionData:{}}:{actionData:{[l[0]]:l[1].data}}:{}}function Ur(l,r){return(r?l.slice(0,l.findIndex(s=>s.route.id===r)+1):[...l]).reverse().find(s=>s.route.hasErrorBoundary===!0)||l[0]}function V0(l){let r=l.length===1?l[0]:l.find(o=>o.index||!o.path||o.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:r}],route:r}}function An(l,{pathname:r,routeId:o,method:s,type:c,message:d}={}){let h="Unknown Server Error",g="Unknown @remix-run/router error";return l===400?(h="Bad Request",s&&r&&o?g=`You made a ${s} request to "${r}" but did not provide a \`loader\` for route "${o}", so there is no way to handle the request.`:c==="invalid-body"&&(g="Unable to encode submission body")):l===403?(h="Forbidden",g=`Route "${o}" does not match URL "${r}"`):l===404?(h="Not Found",g=`No route matches URL "${r}"`):l===405&&(h="Method Not Allowed",s&&r&&o?g=`You made a ${s.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${o}", so there is no way to handle the request.`:s&&(g=`Invalid request method "${s.toUpperCase()}"`)),new Bi(l||500,h,new Error(g),!0)}function Ti(l){let r=Object.entries(l);for(let o=r.length-1;o>=0;o--){let[s,c]=r[o];if(Vr(c))return{key:s,result:c}}}function xd(l){let r=typeof l=="string"?wa(l):l;return ir({...r,hash:""})}function j6(l,r){return l.pathname!==r.pathname||l.search!==r.search?!1:l.hash===""?r.hash!=="":l.hash===r.hash?!0:r.hash!==""}function Z6(l){return wd(l.result)&&E6.has(l.result.status)}function cn(l){return l.type==="error"}function Vr(l){return(l&&l.type)==="redirect"}function B0(l){return typeof l=="object"&&l!=null&&"type"in l&&"data"in l&&"init"in l&&l.type==="DataWithResponseInit"}function wd(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.headers=="object"&&typeof l.body<"u"}function Y6(l){return S6.has(l.toUpperCase())}function Kt(l){return w6.has(l.toUpperCase())}function L5(l){return new URLSearchParams(l).getAll("index").some(r=>r==="")}function $i(l,r){let o=typeof r=="string"?wa(r).search:r.search;if(l[l.length-1].route.index&&L5(o||""))return l[l.length-1];let s=fd(l);return s[s.length-1]}function q0(l){let{formMethod:r,formAction:o,formEncType:s,text:c,formData:d,json:h}=l;if(!(!r||!o||!s)){if(c!=null)return{formMethod:r,formAction:o,formEncType:s,formData:void 0,json:void 0,text:c};if(d!=null)return{formMethod:r,formAction:o,formEncType:s,formData:d,json:void 0,text:void 0};if(h!==void 0)return{formMethod:r,formAction:o,formEncType:s,formData:void 0,json:h,text:void 0}}}function y5(l,r){return r?{state:"loading",location:l,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}:{state:"loading",location:l,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function G6(l,r){return{state:"submitting",location:l,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}}function J1(l,r){return l?{state:"loading",formMethod:l.formMethod,formAction:l.formAction,formEncType:l.formEncType,formData:l.formData,json:l.json,text:l.text,data:r}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:r}}function X6(l,r){return{state:"submitting",formMethod:l.formMethod,formAction:l.formAction,formEncType:l.formEncType,formData:l.formData,json:l.json,text:l.text,data:r?r.data:void 0}}function tr(l){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:l}}function Q6(l,r){try{let o=l.sessionStorage.getItem(pd);if(o){let s=JSON.parse(o);for(let[c,d]of Object.entries(s||{}))d&&Array.isArray(d)&&r.set(c,new Set(d||[]))}}catch{}}function F6(l,r){if(r.size>0){let o={};for(let[s,c]of r)o[s]=[...c];try{l.sessionStorage.setItem(pd,JSON.stringify(o))}catch(s){st(!1,`Failed to save applied view transitions in sessionStorage (${s}).`)}}}function K6(){let l,r,o=new Promise((s,c)=>{l=async d=>{s(d);try{await o}catch{}},r=async d=>{c(d);try{await o}catch{}}});return{promise:o,resolve:l,reject:r}}var jr=$.createContext(null);jr.displayName="DataRouter";var fo=$.createContext(null);fo.displayName="DataRouterState";$.createContext(!1);var z5=$.createContext({isTransitioning:!1});z5.displayName="ViewTransition";var kd=$.createContext(new Map);kd.displayName="Fetchers";var P6=$.createContext(null);P6.displayName="Await";var Bn=$.createContext(null);Bn.displayName="Navigation";var Xi=$.createContext(null);Xi.displayName="Location";var qn=$.createContext({outlet:null,matches:[],isDataRoute:!1});qn.displayName="Route";var T5=$.createContext(null);T5.displayName="RouteError";function J6(l,{relative:r}={}){De(Xl(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:s}=$.useContext(Bn),{hash:c,pathname:d,search:h}=yo(l,{relative:r}),g=d;return o!=="/"&&(g=d==="/"?o:ta([o,d])),s.createHref({pathname:g,search:h,hash:c})}function Xl(){return $.useContext(Xi)!=null}function sr(){return De(Xl(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(Xi).location}var Sd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ed(l){$.useContext(Bn).static||$.useLayoutEffect(l)}function Dd(){let{isDataRoute:l}=$.useContext(qn);return l?hh():W6()}function W6(){De(Xl(),"useNavigate() may be used only in the context of a <Router> component.");let l=$.useContext(jr),{basename:r,navigator:o}=$.useContext(Bn),{matches:s}=$.useContext(qn),{pathname:c}=sr(),d=JSON.stringify(Yi(s)),h=$.useRef(!1);return Ed(()=>{h.current=!0}),$.useCallback((y,p={})=>{if(st(h.current,Sd),!h.current)return;if(typeof y=="number"){o.go(y);return}let _=Gi(y,JSON.parse(d),c,p.relative==="path");l==null&&r!=="/"&&(_.pathname=_.pathname==="/"?r:ta([r,_.pathname])),(p.replace?o.replace:o.push)(_,p.state,p)},[r,o,d,c,l])}var I6=$.createContext(null);function eh(l){let r=$.useContext(qn).outlet;return r&&$.createElement(I6.Provider,{value:l},r)}function yo(l,{relative:r}={}){let{matches:o}=$.useContext(qn),{pathname:s}=sr(),c=JSON.stringify(Yi(o));return $.useMemo(()=>Gi(l,JSON.parse(c),s,r==="path"),[l,c,s,r])}function th(l,r,o,s){De(Xl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=$.useContext(Bn),{matches:d}=$.useContext(qn),h=d[d.length-1],g=h?h.params:{},y=h?h.pathname:"/",p=h?h.pathnameBase:"/",_=h&&h.route;{let j=_&&_.path||"";Md(y,!_||j.endsWith("*")||j.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j==="/"?"*":`${j}/*`}">.`)}let w=sr(),E;E=w;let L=E.pathname||"/",U=L;if(p!=="/"){let j=p.replace(/^\//,"").split("/");U="/"+L.replace(/^\//,"").split("/").slice(j.length).join("/")}let F=nr(l,{pathname:U});return st(_||F!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),st(F==null||F[F.length-1].route.element!==void 0||F[F.length-1].route.Component!==void 0||F[F.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),oh(F&&F.map(j=>Object.assign({},j,{params:Object.assign({},g,j.params),pathname:ta([p,c.encodeLocation?c.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?p:ta([p,c.encodeLocation?c.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),d,o,s)}function nh(){let l=dh(),r=co(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),o=l instanceof Error?l.stack:null,s="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:s},d={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",l),h=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:d},"ErrorBoundary")," or"," ",$.createElement("code",{style:d},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},r),o?$.createElement("pre",{style:c},o):null,h)}var ah=$.createElement(nh,null),rh=class extends $.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,r){return r.location!==l.location||r.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:r.error,location:r.location,revalidation:l.revalidation||r.revalidation}}componentDidCatch(l,r){console.error("React Router caught the following error during render",l,r)}render(){return this.state.error!==void 0?$.createElement(qn.Provider,{value:this.props.routeContext},$.createElement(T5.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function lh({routeContext:l,match:r,children:o}){let s=$.useContext(jr);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),$.createElement(qn.Provider,{value:l},o)}function oh(l,r=[],o=null,s=null){if(l==null){if(!o)return null;if(o.errors)l=o.matches;else if(r.length===0&&!o.initialized&&o.matches.length>0)l=o.matches;else return null}let c=l,d=o==null?void 0:o.errors;if(d!=null){let y=c.findIndex(p=>p.route.id&&(d==null?void 0:d[p.route.id])!==void 0);De(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),c=c.slice(0,Math.min(c.length,y+1))}let h=!1,g=-1;if(o)for(let y=0;y<c.length;y++){let p=c[y];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(g=y),p.route.id){let{loaderData:_,errors:w}=o,E=p.route.loader&&!_.hasOwnProperty(p.route.id)&&(!w||w[p.route.id]===void 0);if(p.route.lazy||E){h=!0,g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}return c.reduceRight((y,p,_)=>{let w,E=!1,L=null,U=null;o&&(w=d&&p.route.id?d[p.route.id]:void 0,L=p.route.errorElement||ah,h&&(g<0&&_===0?(Md("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,U=null):g===_&&(E=!0,U=p.route.hydrateFallbackElement||null)));let F=r.concat(c.slice(0,_+1)),K=()=>{let j;return w?j=L:E?j=U:p.route.Component?j=$.createElement(p.route.Component,null):p.route.element?j=p.route.element:j=y,$.createElement(lh,{match:p,routeContext:{outlet:y,matches:F,isDataRoute:o!=null},children:j})};return o&&(p.route.ErrorBoundary||p.route.errorElement||_===0)?$.createElement(rh,{location:o.location,revalidation:o.revalidation,component:L,error:w,children:K(),routeContext:{outlet:null,matches:F,isDataRoute:!0}}):K()},null)}function R5(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ih(l){let r=$.useContext(jr);return De(r,R5(l)),r}function sh(l){let r=$.useContext(fo);return De(r,R5(l)),r}function ch(l){let r=$.useContext(qn);return De(r,R5(l)),r}function H5(l){let r=ch(l),o=r.matches[r.matches.length-1];return De(o.route.id,`${l} can only be used on routes that contain a unique "id"`),o.route.id}function uh(){return H5("useRouteId")}function dh(){var s;let l=$.useContext(T5),r=sh("useRouteError"),o=H5("useRouteError");return l!==void 0?l:(s=r.errors)==null?void 0:s[o]}function hh(){let{router:l}=ih("useNavigate"),r=H5("useNavigate"),o=$.useRef(!1);return Ed(()=>{o.current=!0}),$.useCallback(async(c,d={})=>{st(o.current,Sd),o.current&&(typeof c=="number"?l.navigate(c):await l.navigate(c,{fromRouteId:r,...d}))},[l,r])}var j0={};function Md(l,r,o){!r&&!j0[l]&&(j0[l]=!0,st(!1,o))}var Z0={};function Y0(l,r){!l&&!Z0[r]&&(Z0[r]=!0,console.warn(r))}function fh(l){let r={hasErrorBoundary:l.hasErrorBoundary||l.ErrorBoundary!=null||l.errorElement!=null};return l.Component&&(l.element&&st(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(r,{element:$.createElement(l.Component),Component:void 0})),l.HydrateFallback&&(l.hydrateFallbackElement&&st(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(r,{hydrateFallbackElement:$.createElement(l.HydrateFallback),HydrateFallback:void 0})),l.ErrorBoundary&&(l.errorElement&&st(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(r,{errorElement:$.createElement(l.ErrorBoundary),ErrorBoundary:void 0})),r}var yh=["HydrateFallback","hydrateFallbackElement"],ph=class{constructor(){this.status="pending",this.promise=new Promise((l,r)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",l(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",r(o))}})}};function vh({router:l,flushSync:r}){let[o,s]=$.useState(l.state),[c,d]=$.useState(),[h,g]=$.useState({isTransitioning:!1}),[y,p]=$.useState(),[_,w]=$.useState(),[E,L]=$.useState(),U=$.useRef(new Map),F=$.useCallback((J,{deletedFetchers:me,flushSync:W,viewTransitionOpts:T})=>{J.fetchers.forEach((Ve,X)=>{Ve.data!==void 0&&U.current.set(X,Ve.data)}),me.forEach(Ve=>U.current.delete(Ve)),Y0(W===!1||r!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let $e=l.window!=null&&l.window.document!=null&&typeof l.window.document.startViewTransition=="function";if(Y0(T==null||$e,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!T||!$e){r&&W?r(()=>s(J)):$.startTransition(()=>s(J));return}if(r&&W){r(()=>{_&&(y&&y.resolve(),_.skipTransition()),g({isTransitioning:!0,flushSync:!0,currentLocation:T.currentLocation,nextLocation:T.nextLocation})});let Ve=l.window.document.startViewTransition(()=>{r(()=>s(J))});Ve.finished.finally(()=>{r(()=>{p(void 0),w(void 0),d(void 0),g({isTransitioning:!1})})}),r(()=>w(Ve));return}_?(y&&y.resolve(),_.skipTransition(),L({state:J,currentLocation:T.currentLocation,nextLocation:T.nextLocation})):(d(J),g({isTransitioning:!0,flushSync:!1,currentLocation:T.currentLocation,nextLocation:T.nextLocation}))},[l.window,r,_,y]);$.useLayoutEffect(()=>l.subscribe(F),[l,F]),$.useEffect(()=>{h.isTransitioning&&!h.flushSync&&p(new ph)},[h]),$.useEffect(()=>{if(y&&c&&l.window){let J=c,me=y.promise,W=l.window.document.startViewTransition(async()=>{$.startTransition(()=>s(J)),await me});W.finished.finally(()=>{p(void 0),w(void 0),d(void 0),g({isTransitioning:!1})}),w(W)}},[c,y,l.window]),$.useEffect(()=>{y&&c&&o.location.key===c.location.key&&y.resolve()},[y,_,o.location,c]),$.useEffect(()=>{!h.isTransitioning&&E&&(d(E.state),g({isTransitioning:!0,flushSync:!1,currentLocation:E.currentLocation,nextLocation:E.nextLocation}),L(void 0))},[h.isTransitioning,E]);let K=$.useMemo(()=>({createHref:l.createHref,encodeLocation:l.encodeLocation,go:J=>l.navigate(J),push:(J,me,W)=>l.navigate(J,{state:me,preventScrollReset:W==null?void 0:W.preventScrollReset}),replace:(J,me,W)=>l.navigate(J,{replace:!0,state:me,preventScrollReset:W==null?void 0:W.preventScrollReset})}),[l]),j=l.basename||"/",fe=$.useMemo(()=>({router:l,navigator:K,static:!1,basename:j}),[l,K,j]);return $.createElement($.Fragment,null,$.createElement(jr.Provider,{value:fe},$.createElement(fo.Provider,{value:o},$.createElement(kd.Provider,{value:U.current},$.createElement(z5.Provider,{value:h},$.createElement(Ch,{basename:j,location:o.location,navigationType:o.historyAction,navigator:K},$.createElement(gh,{routes:l.routes,future:l.future,state:o})))))),null)}var gh=$.memo(mh);function mh({routes:l,future:r,state:o}){return th(l,void 0,o,r)}function bh({to:l,replace:r,state:o,relative:s}){De(Xl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=$.useContext(Bn);st(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=$.useContext(qn),{pathname:h}=sr(),g=Dd(),y=Gi(l,Yi(d),h,s==="path"),p=JSON.stringify(y);return $.useEffect(()=>{g(JSON.parse(p),{replace:r,state:o,relative:s})},[g,p,s,r,o]),null}function _h(l){return eh(l.context)}function Ch({basename:l="/",children:r=null,location:o,navigationType:s="POP",navigator:c,static:d=!1}){De(!Xl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=l.replace(/^\/*/,"/"),g=$.useMemo(()=>({basename:h,navigator:c,static:d,future:{}}),[h,c,d]);typeof o=="string"&&(o=wa(o));let{pathname:y="/",search:p="",hash:_="",state:w=null,key:E="default"}=o,L=$.useMemo(()=>{let U=Ln(y,h);return U==null?null:{location:{pathname:U,search:p,hash:_,state:w,key:E},navigationType:s}},[h,y,p,_,w,E,s]);return st(L!=null,`<Router basename="${h}"> is not able to match the URL "${y}${p}${_}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:$.createElement(Bn.Provider,{value:g},$.createElement(Xi.Provider,{children:r,value:L}))}var Oi="get",Ni="application/x-www-form-urlencoded";function Qi(l){return l!=null&&typeof l.tagName=="string"}function xh(l){return Qi(l)&&l.tagName.toLowerCase()==="button"}function wh(l){return Qi(l)&&l.tagName.toLowerCase()==="form"}function kh(l){return Qi(l)&&l.tagName.toLowerCase()==="input"}function Sh(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function Eh(l,r){return l.button===0&&(!r||r==="_self")&&!Sh(l)}var Ri=null;function Dh(){if(Ri===null)try{new FormData(document.createElement("form"),0),Ri=!1}catch{Ri=!0}return Ri}var Mh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function p5(l){return l!=null&&!Mh.has(l)?(st(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ni}"`),null):l}function Ah(l,r){let o,s,c,d,h;if(wh(l)){let g=l.getAttribute("action");s=g?Ln(g,r):null,o=l.getAttribute("method")||Oi,c=p5(l.getAttribute("enctype"))||Ni,d=new FormData(l)}else if(xh(l)||kh(l)&&(l.type==="submit"||l.type==="image")){let g=l.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=l.getAttribute("formaction")||g.getAttribute("action");if(s=y?Ln(y,r):null,o=l.getAttribute("formmethod")||g.getAttribute("method")||Oi,c=p5(l.getAttribute("formenctype"))||p5(g.getAttribute("enctype"))||Ni,d=new FormData(g,l),!Dh()){let{name:p,type:_,value:w}=l;if(_==="image"){let E=p?`${p}.`:"";d.append(`${E}x`,"0"),d.append(`${E}y`,"0")}else p&&d.append(p,w)}}else{if(Qi(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Oi,s=null,c=Ni,h=l}return d&&c==="text/plain"&&(h=d,d=void 0),{action:s,method:o.toLowerCase(),encType:c,formData:d,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $5(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function Lh(l,r,o){let s=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return s.pathname==="/"?s.pathname=`_root.${o}`:r&&Ln(s.pathname,r)==="/"?s.pathname=`${r.replace(/\/$/,"")}/_root.${o}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${o}`,s}async function zh(l,r){if(l.id in r)return r[l.id];try{let o=await import(l.module);return r[l.id]=o,o}catch(o){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Th(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function Rh(l,r,o){let s=await Promise.all(l.map(async c=>{let d=r.routes[c.route.id];if(d){let h=await zh(d,o);return h.links?h.links():[]}return[]}));return Nh(s.flat(1).filter(Th).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function G0(l,r,o,s,c,d){let h=(y,p)=>o[p]?y.route.id!==o[p].route.id:!0,g=(y,p)=>{var _;return o[p].pathname!==y.pathname||((_=o[p].route.path)==null?void 0:_.endsWith("*"))&&o[p].params["*"]!==y.params["*"]};return d==="assets"?r.filter((y,p)=>h(y,p)||g(y,p)):d==="data"?r.filter((y,p)=>{var w;let _=s.routes[y.route.id];if(!_||!_.hasLoader)return!1;if(h(y,p)||g(y,p))return!0;if(y.route.shouldRevalidate){let E=y.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((w=o[0])==null?void 0:w.params)||{},nextUrl:new URL(l,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function Hh(l,r,{includeHydrateFallback:o}={}){return $h(l.map(s=>{let c=r.routes[s.route.id];if(!c)return[];let d=[c.module];return c.clientActionModule&&(d=d.concat(c.clientActionModule)),c.clientLoaderModule&&(d=d.concat(c.clientLoaderModule)),o&&c.hydrateFallbackModule&&(d=d.concat(c.hydrateFallbackModule)),c.imports&&(d=d.concat(c.imports)),d}).flat(1))}function $h(l){return[...new Set(l)]}function Oh(l){let r={},o=Object.keys(l).sort();for(let s of o)r[s]=l[s];return r}function Nh(l,r){let o=new Set;return new Set(r),l.reduce((s,c)=>{let d=JSON.stringify(Oh(c));return o.has(d)||(o.add(d),s.push({key:d,link:c})),s},[])}function Ad(){let l=$.useContext(jr);return $5(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function Uh(){let l=$.useContext(fo);return $5(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var O5=$.createContext(void 0);O5.displayName="FrameworkContext";function Ld(){let l=$.useContext(O5);return $5(l,"You must render this element inside a <HydratedRouter> element"),l}function Vh(l,r){let o=$.useContext(O5),[s,c]=$.useState(!1),[d,h]=$.useState(!1),{onFocus:g,onBlur:y,onMouseEnter:p,onMouseLeave:_,onTouchStart:w}=r,E=$.useRef(null);$.useEffect(()=>{if(l==="render"&&h(!0),l==="viewport"){let F=j=>{j.forEach(fe=>{h(fe.isIntersecting)})},K=new IntersectionObserver(F,{threshold:.5});return E.current&&K.observe(E.current),()=>{K.disconnect()}}},[l]),$.useEffect(()=>{if(s){let F=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(F)}}},[s]);let L=()=>{c(!0)},U=()=>{c(!1),h(!1)};return o?l!=="intent"?[d,E,{}]:[d,E,{onFocus:W1(g,L),onBlur:W1(y,U),onMouseEnter:W1(p,L),onMouseLeave:W1(_,U),onTouchStart:W1(w,L)}]:[!1,E,{}]}function W1(l,r){return o=>{l&&l(o),o.defaultPrevented||r(o)}}function Bh({page:l,...r}){let{router:o}=Ad(),s=$.useMemo(()=>nr(o.routes,l,o.basename),[o.routes,l,o.basename]);return s?$.createElement(jh,{page:l,matches:s,...r}):null}function qh(l){let{manifest:r,routeModules:o}=Ld(),[s,c]=$.useState([]);return $.useEffect(()=>{let d=!1;return Rh(l,r,o).then(h=>{d||c(h)}),()=>{d=!0}},[l,r,o]),s}function jh({page:l,matches:r,...o}){let s=sr(),{manifest:c,routeModules:d}=Ld(),{basename:h}=Ad(),{loaderData:g,matches:y}=Uh(),p=$.useMemo(()=>G0(l,r,y,c,s,"data"),[l,r,y,c,s]),_=$.useMemo(()=>G0(l,r,y,c,s,"assets"),[l,r,y,c,s]),w=$.useMemo(()=>{if(l===s.pathname+s.search+s.hash)return[];let U=new Set,F=!1;if(r.forEach(j=>{var J;let fe=c.routes[j.route.id];!fe||!fe.hasLoader||(!p.some(me=>me.route.id===j.route.id)&&j.route.id in g&&((J=d[j.route.id])!=null&&J.shouldRevalidate)||fe.hasClientLoader?F=!0:U.add(j.route.id))}),U.size===0)return[];let K=Lh(l,h,"data");return F&&U.size>0&&K.searchParams.set("_routes",r.filter(j=>U.has(j.route.id)).map(j=>j.route.id).join(",")),[K.pathname+K.search]},[h,g,s,c,p,r,l,d]),E=$.useMemo(()=>Hh(_,c),[_,c]),L=qh(_);return $.createElement($.Fragment,null,w.map(U=>$.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...o})),E.map(U=>$.createElement("link",{key:U,rel:"modulepreload",href:U,...o})),L.map(({key:U,link:F})=>$.createElement("link",{key:U,...F})))}function Zh(...l){return r=>{l.forEach(o=>{typeof o=="function"?o(r):o!=null&&(o.current=r)})}}var zd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zd&&(window.__reactRouterVersion="7.7.1")}catch{}function Yh(l,r){return z6({basename:r==null?void 0:r.basename,unstable_getContext:r==null?void 0:r.unstable_getContext,future:r==null?void 0:r.future,history:P4({window:r==null?void 0:r.window}),hydrationData:Gh(),routes:l,mapRouteProperties:fh,hydrationRouteProperties:yh,dataStrategy:r==null?void 0:r.dataStrategy,patchRoutesOnNavigation:r==null?void 0:r.patchRoutesOnNavigation,window:r==null?void 0:r.window}).initialize()}function Gh(){let l=window==null?void 0:window.__staticRouterHydrationData;return l&&l.errors&&(l={...l,errors:Xh(l.errors)}),l}function Xh(l){if(!l)return null;let r=Object.entries(l),o={};for(let[s,c]of r)if(c&&c.__type==="RouteErrorResponse")o[s]=new Bi(c.status,c.statusText,c.data,c.internal===!0);else if(c&&c.__type==="Error"){if(c.__subType){let d=window[c.__subType];if(typeof d=="function")try{let h=new d(c.message);h.stack="",o[s]=h}catch{}}if(o[s]==null){let d=new Error(c.message);d.stack="",o[s]=d}}else o[s]=c;return o}var Td=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fi=$.forwardRef(function({onClick:r,discover:o="render",prefetch:s="none",relative:c,reloadDocument:d,replace:h,state:g,target:y,to:p,preventScrollReset:_,viewTransition:w,...E},L){let{basename:U}=$.useContext(Bn),F=typeof p=="string"&&Td.test(p),K,j=!1;if(typeof p=="string"&&F&&(K=p,zd))try{let X=new URL(window.location.href),ve=p.startsWith("//")?new URL(X.protocol+p):new URL(p),We=Ln(ve.pathname,U);ve.origin===X.origin&&We!=null?p=We+ve.search+ve.hash:j=!0}catch{st(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let fe=J6(p,{relative:c}),[J,me,W]=Vh(s,E),T=Ph(p,{replace:h,state:g,target:y,preventScrollReset:_,relative:c,viewTransition:w});function $e(X){r&&r(X),X.defaultPrevented||T(X)}let Ve=$.createElement("a",{...E,...W,href:K||fe,onClick:j||d?r:$e,ref:Zh(L,me),target:y,"data-discover":!F&&o==="render"?"true":void 0});return J&&!F?$.createElement($.Fragment,null,Ve,$.createElement(Bh,{page:fe})):Ve});Fi.displayName="Link";var Qh=$.forwardRef(function({"aria-current":r="page",caseSensitive:o=!1,className:s="",end:c=!1,style:d,to:h,viewTransition:g,children:y,...p},_){let w=yo(h,{relative:p.relative}),E=sr(),L=$.useContext(fo),{navigator:U,basename:F}=$.useContext(Bn),K=L!=null&&t9(w)&&g===!0,j=U.encodeLocation?U.encodeLocation(w).pathname:w.pathname,fe=E.pathname,J=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;o||(fe=fe.toLowerCase(),J=J?J.toLowerCase():null,j=j.toLowerCase()),J&&F&&(J=Ln(J,F)||J);const me=j!=="/"&&j.endsWith("/")?j.length-1:j.length;let W=fe===j||!c&&fe.startsWith(j)&&fe.charAt(me)==="/",T=J!=null&&(J===j||!c&&J.startsWith(j)&&J.charAt(j.length)==="/"),$e={isActive:W,isPending:T,isTransitioning:K},Ve=W?r:void 0,X;typeof s=="function"?X=s($e):X=[s,W?"active":null,T?"pending":null,K?"transitioning":null].filter(Boolean).join(" ");let ve=typeof d=="function"?d($e):d;return $.createElement(Fi,{...p,"aria-current":Ve,className:X,ref:_,style:ve,to:h,viewTransition:g},typeof y=="function"?y($e):y)});Qh.displayName="NavLink";var Fh=$.forwardRef(({discover:l="render",fetcherKey:r,navigate:o,reloadDocument:s,replace:c,state:d,method:h=Oi,action:g,onSubmit:y,relative:p,preventScrollReset:_,viewTransition:w,...E},L)=>{let U=Ih(),F=e9(g,{relative:p}),K=h.toLowerCase()==="get"?"get":"post",j=typeof g=="string"&&Td.test(g),fe=J=>{if(y&&y(J),J.defaultPrevented)return;J.preventDefault();let me=J.nativeEvent.submitter,W=(me==null?void 0:me.getAttribute("formmethod"))||h;U(me||J.currentTarget,{fetcherKey:r,method:W,navigate:o,replace:c,state:d,relative:p,preventScrollReset:_,viewTransition:w})};return $.createElement("form",{ref:L,method:K,action:F,onSubmit:s?y:fe,...E,"data-discover":!j&&l==="render"?"true":void 0})});Fh.displayName="Form";function Kh(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rd(l){let r=$.useContext(jr);return De(r,Kh(l)),r}function Ph(l,{target:r,replace:o,state:s,preventScrollReset:c,relative:d,viewTransition:h}={}){let g=Dd(),y=sr(),p=yo(l,{relative:d});return $.useCallback(_=>{if(Eh(_,r)){_.preventDefault();let w=o!==void 0?o:ir(y)===ir(p);g(l,{replace:w,state:s,preventScrollReset:c,relative:d,viewTransition:h})}},[y,g,p,o,s,r,l,c,d,h])}var Jh=0,Wh=()=>`__${String(++Jh)}__`;function Ih(){let{router:l}=Rd("useSubmit"),{basename:r}=$.useContext(Bn),o=uh();return $.useCallback(async(s,c={})=>{let{action:d,method:h,encType:g,formData:y,body:p}=Ah(s,r);if(c.navigate===!1){let _=c.fetcherKey||Wh();await l.fetch(_,o,c.action||d,{preventScrollReset:c.preventScrollReset,formData:y,body:p,formMethod:c.method||h,formEncType:c.encType||g,flushSync:c.flushSync})}else await l.navigate(c.action||d,{preventScrollReset:c.preventScrollReset,formData:y,body:p,formMethod:c.method||h,formEncType:c.encType||g,replace:c.replace,state:c.state,fromRouteId:o,flushSync:c.flushSync,viewTransition:c.viewTransition})},[l,r,o])}function e9(l,{relative:r}={}){let{basename:o}=$.useContext(Bn),s=$.useContext(qn);De(s,"useFormAction must be used inside a RouteContext");let[c]=s.matches.slice(-1),d={...yo(l||".",{relative:r})},h=sr();if(l==null){d.search=h.search;let g=new URLSearchParams(d.search),y=g.getAll("index");if(y.some(_=>_==="")){g.delete("index"),y.filter(w=>w).forEach(w=>g.append("index",w));let _=g.toString();d.search=_?`?${_}`:""}}return(!l||l===".")&&c.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(d.pathname=d.pathname==="/"?o:ta([o,d.pathname])),ir(d)}function t9(l,{relative:r}={}){let o=$.useContext(z5);De(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Rd("useViewTransitionState"),c=yo(l,{relative:r});if(!o.isTransitioning)return!1;let d=Ln(o.currentLocation.pathname,s)||o.currentLocation.pathname,h=Ln(o.nextLocation.pathname,s)||o.nextLocation.pathname;return Vi(c.pathname,h)!=null||Vi(c.pathname,d)!=null}var n9=sd();function a9(l){return $.createElement(vh,{flushSync:n9.flushSync,...l})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r9=new Set(["children","localName","ref","style","className"]),X0=new WeakMap,Q0=(l,r,o,s,c)=>{const d=c==null?void 0:c[r];d===void 0?(l[r]=o,o==null&&r in HTMLElement.prototype&&l.removeAttribute(r)):o!==s&&((h,g,y)=>{let p=X0.get(h);p===void 0&&X0.set(h,p=new Map);let _=p.get(g);y!==void 0?_===void 0?(p.set(g,_={handleEvent:y}),h.addEventListener(g,_)):_.handleEvent=y:_!==void 0&&(p.delete(g),h.removeEventListener(g,_))})(l,d,o)},Ge=({react:l,tagName:r,elementClass:o,events:s,displayName:c})=>{const d=new Set(Object.keys(s??{})),h=l.forwardRef((g,y)=>{const p=l.useRef(new Map),_=l.useRef(null),w={},E={};for(const[L,U]of Object.entries(g))r9.has(L)?w[L==="className"?"class":L]=U:d.has(L)||L in o.prototype?E[L]=U:w[L]=U;return l.useLayoutEffect(()=>{if(_.current===null)return;const L=new Map;for(const U in E)Q0(_.current,U,g[U],p.current.get(U),s),p.current.delete(U),L.set(U,g[U]);for(const[U,F]of p.current)Q0(_.current,U,void 0,F,s);p.current=L}),l.useLayoutEffect(()=>{var L;(L=_.current)==null||L.removeAttribute("defer-hydration")},[]),w.suppressHydrationWarning=!0,l.createElement(r,{...w,ref:l.useCallback(L=>{_.current=L,typeof y=="function"?y(L):y!==null&&(y.current=L)},[y])})});return h.displayName=c??o.name,h};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ui=globalThis,N5=Ui.ShadowRoot&&(Ui.ShadyCSS===void 0||Ui.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,U5=Symbol(),F0=new WeakMap;let Hd=class{constructor(r,o,s){if(this._$cssResult$=!0,s!==U5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=o}get styleSheet(){let r=this.o;const o=this.t;if(N5&&r===void 0){const s=o!==void 0&&o.length===1;s&&(r=F0.get(o)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),s&&F0.set(o,r))}return r}toString(){return this.cssText}};const l9=l=>new Hd(typeof l=="string"?l:l+"",void 0,U5),Qe=(l,...r)=>{const o=l.length===1?l[0]:r.reduce((s,c,d)=>s+(h=>{if(h._$cssResult$===!0)return h.cssText;if(typeof h=="number")return h;throw Error("Value passed to 'css' function must be a 'css' function result: "+h+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(c)+l[d+1],l[0]);return new Hd(o,l,U5)},o9=(l,r)=>{if(N5)l.adoptedStyleSheets=r.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of r){const s=document.createElement("style"),c=Ui.litNonce;c!==void 0&&s.setAttribute("nonce",c),s.textContent=o.cssText,l.appendChild(s)}},K0=N5?l=>l:l=>l instanceof CSSStyleSheet?(r=>{let o="";for(const s of r.cssRules)o+=s.cssText;return l9(o)})(l):l;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i9,defineProperty:s9,getOwnPropertyDescriptor:c9,getOwnPropertyNames:u9,getOwnPropertySymbols:d9,getPrototypeOf:h9}=Object,or=globalThis,P0=or.trustedTypes,f9=P0?P0.emptyScript:"",v5=or.reactiveElementPolyfillSupport,lo=(l,r)=>l,ji={toAttribute(l,r){switch(r){case Boolean:l=l?f9:null;break;case Object:case Array:l=l==null?l:JSON.stringify(l)}return l},fromAttribute(l,r){let o=l;switch(r){case Boolean:o=l!==null;break;case Number:o=l===null?null:Number(l);break;case Object:case Array:try{o=JSON.parse(l)}catch{o=null}}return o}},V5=(l,r)=>!i9(l,r),J0={attribute:!0,type:String,converter:ji,reflect:!1,hasChanged:V5};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),or.litPropertyMetadata??(or.litPropertyMetadata=new WeakMap);let jl=class extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??(this.l=[])).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,o=J0){if(o.state&&(o.attribute=!1),this._$Ei(),this.elementProperties.set(r,o),!o.noAccessor){const s=Symbol(),c=this.getPropertyDescriptor(r,s,o);c!==void 0&&s9(this.prototype,r,c)}}static getPropertyDescriptor(r,o,s){const{get:c,set:d}=c9(this.prototype,r)??{get(){return this[o]},set(h){this[o]=h}};return{get(){return c==null?void 0:c.call(this)},set(h){const g=c==null?void 0:c.call(this);d.call(this,h),this.requestUpdate(r,g,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??J0}static _$Ei(){if(this.hasOwnProperty(lo("elementProperties")))return;const r=h9(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(lo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(lo("properties"))){const o=this.properties,s=[...u9(o),...d9(o)];for(const c of s)this.createProperty(c,o[c])}const r=this[Symbol.metadata];if(r!==null){const o=litPropertyMetadata.get(r);if(o!==void 0)for(const[s,c]of o)this.elementProperties.set(s,c)}this._$Eh=new Map;for(const[o,s]of this.elementProperties){const c=this._$Eu(o,s);c!==void 0&&this._$Eh.set(c,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){const o=[];if(Array.isArray(r)){const s=new Set(r.flat(1/0).reverse());for(const c of s)o.unshift(K0(c))}else r!==void 0&&o.push(K0(r));return o}static _$Eu(r,o){const s=o.attribute;return s===!1?void 0:typeof s=="string"?s:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var r;this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),(r=this.constructor.l)==null||r.forEach(o=>o(this))}addController(r){var o;(this._$EO??(this._$EO=new Set)).add(r),this.renderRoot!==void 0&&this.isConnected&&((o=r.hostConnected)==null||o.call(r))}removeController(r){var o;(o=this._$EO)==null||o.delete(r)}_$E_(){const r=new Map,o=this.constructor.elementProperties;for(const s of o.keys())this.hasOwnProperty(s)&&(r.set(s,this[s]),delete this[s]);r.size>0&&(this._$Ep=r)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return o9(r,this.constructor.elementStyles),r}connectedCallback(){var r;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$EO)==null||r.forEach(o=>{var s;return(s=o.hostConnected)==null?void 0:s.call(o)})}enableUpdating(r){}disconnectedCallback(){var r;(r=this._$EO)==null||r.forEach(o=>{var s;return(s=o.hostDisconnected)==null?void 0:s.call(o)})}attributeChangedCallback(r,o,s){this._$AK(r,s)}_$EC(r,o){var d;const s=this.constructor.elementProperties.get(r),c=this.constructor._$Eu(r,s);if(c!==void 0&&s.reflect===!0){const h=(((d=s.converter)==null?void 0:d.toAttribute)!==void 0?s.converter:ji).toAttribute(o,s.type);this._$Em=r,h==null?this.removeAttribute(c):this.setAttribute(c,h),this._$Em=null}}_$AK(r,o){var d;const s=this.constructor,c=s._$Eh.get(r);if(c!==void 0&&this._$Em!==c){const h=s.getPropertyOptions(c),g=typeof h.converter=="function"?{fromAttribute:h.converter}:((d=h.converter)==null?void 0:d.fromAttribute)!==void 0?h.converter:ji;this._$Em=c,this[c]=g.fromAttribute(o,h.type),this._$Em=null}}requestUpdate(r,o,s){if(r!==void 0){if(s??(s=this.constructor.getPropertyOptions(r)),!(s.hasChanged??V5)(this[r],o))return;this.P(r,o,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(r,o,s){this._$AL.has(r)||this._$AL.set(r,o),s.reflect===!0&&this._$Em!==r&&(this._$Ej??(this._$Ej=new Set)).add(r)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[d,h]of this._$Ep)this[d]=h;this._$Ep=void 0}const c=this.constructor.elementProperties;if(c.size>0)for(const[d,h]of c)h.wrapped!==!0||this._$AL.has(d)||this[d]===void 0||this.P(d,this[d],h)}let r=!1;const o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),(s=this._$EO)==null||s.forEach(c=>{var d;return(d=c.hostUpdate)==null?void 0:d.call(c)}),this.update(o)):this._$EU()}catch(c){throw r=!1,this._$EU(),c}r&&this._$AE(o)}willUpdate(r){}_$AE(r){var o;(o=this._$EO)==null||o.forEach(s=>{var c;return(c=s.hostUpdated)==null?void 0:c.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Ej&&(this._$Ej=this._$Ej.forEach(o=>this._$EC(o,this[o]))),this._$EU()}updated(r){}firstUpdated(r){}};jl.elementStyles=[],jl.shadowRootOptions={mode:"open"},jl[lo("elementProperties")]=new Map,jl[lo("finalized")]=new Map,v5==null||v5({ReactiveElement:jl}),(or.reactiveElementVersions??(or.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oo=globalThis,Zi=oo.trustedTypes,W0=Zi?Zi.createPolicy("lit-html",{createHTML:l=>l}):void 0,$d="$lit$",ar=`lit$${Math.random().toFixed(9).slice(2)}$`,Od="?"+ar,y9=`<${Od}>`,qr=document,uo=()=>qr.createComment(""),ho=l=>l===null||typeof l!="object"&&typeof l!="function",B5=Array.isArray,p9=l=>B5(l)||typeof(l==null?void 0:l[Symbol.iterator])=="function",g5=`[ 	
\f\r]`,I1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I0=/-->/g,ed=/>/g,Nr=RegExp(`>|${g5}(?:([^\\s"'>=/]+)(${g5}*=${g5}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),td=/'/g,nd=/"/g,Nd=/^(?:script|style|textarea|title)$/i,v9=l=>(r,...o)=>({_$litType$:l,strings:r,values:o}),Y=v9(1),Yl=Symbol.for("lit-noChange"),_t=Symbol.for("lit-nothing"),ad=new WeakMap,Br=qr.createTreeWalker(qr,129);function Ud(l,r){if(!B5(l)||!l.hasOwnProperty("raw"))throw Error("invalid template strings array");return W0!==void 0?W0.createHTML(r):r}const g9=(l,r)=>{const o=l.length-1,s=[];let c,d=r===2?"<svg>":r===3?"<math>":"",h=I1;for(let g=0;g<o;g++){const y=l[g];let p,_,w=-1,E=0;for(;E<y.length&&(h.lastIndex=E,_=h.exec(y),_!==null);)E=h.lastIndex,h===I1?_[1]==="!--"?h=I0:_[1]!==void 0?h=ed:_[2]!==void 0?(Nd.test(_[2])&&(c=RegExp("</"+_[2],"g")),h=Nr):_[3]!==void 0&&(h=Nr):h===Nr?_[0]===">"?(h=c??I1,w=-1):_[1]===void 0?w=-2:(w=h.lastIndex-_[2].length,p=_[1],h=_[3]===void 0?Nr:_[3]==='"'?nd:td):h===nd||h===td?h=Nr:h===I0||h===ed?h=I1:(h=Nr,c=void 0);const L=h===Nr&&l[g+1].startsWith("/>")?" ":"";d+=h===I1?y+y9:w>=0?(s.push(p),y.slice(0,w)+$d+y.slice(w)+ar+L):y+ar+(w===-2?g:L)}return[Ud(l,d+(l[o]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),s]};let S5=class Vd{constructor({strings:r,_$litType$:o},s){let c;this.parts=[];let d=0,h=0;const g=r.length-1,y=this.parts,[p,_]=g9(r,o);if(this.el=Vd.createElement(p,s),Br.currentNode=this.el.content,o===2||o===3){const w=this.el.content.firstChild;w.replaceWith(...w.childNodes)}for(;(c=Br.nextNode())!==null&&y.length<g;){if(c.nodeType===1){if(c.hasAttributes())for(const w of c.getAttributeNames())if(w.endsWith($d)){const E=_[h++],L=c.getAttribute(w).split(ar),U=/([.?@])?(.*)/.exec(E);y.push({type:1,index:d,name:U[2],strings:L,ctor:U[1]==="."?b9:U[1]==="?"?_9:U[1]==="@"?C9:Ki}),c.removeAttribute(w)}else w.startsWith(ar)&&(y.push({type:6,index:d}),c.removeAttribute(w));if(Nd.test(c.tagName)){const w=c.textContent.split(ar),E=w.length-1;if(E>0){c.textContent=Zi?Zi.emptyScript:"";for(let L=0;L<E;L++)c.append(w[L],uo()),Br.nextNode(),y.push({type:2,index:++d});c.append(w[E],uo())}}}else if(c.nodeType===8)if(c.data===Od)y.push({type:2,index:d});else{let w=-1;for(;(w=c.data.indexOf(ar,w+1))!==-1;)y.push({type:7,index:d}),w+=ar.length-1}d++}}static createElement(r,o){const s=qr.createElement("template");return s.innerHTML=r,s}};function Gl(l,r,o=l,s){var h,g;if(r===Yl)return r;let c=s!==void 0?(h=o._$Co)==null?void 0:h[s]:o._$Cl;const d=ho(r)?void 0:r._$litDirective$;return(c==null?void 0:c.constructor)!==d&&((g=c==null?void 0:c._$AO)==null||g.call(c,!1),d===void 0?c=void 0:(c=new d(l),c._$AT(l,o,s)),s!==void 0?(o._$Co??(o._$Co=[]))[s]=c:o._$Cl=c),c!==void 0&&(r=Gl(l,c._$AS(l,r.values),c,s)),r}let m9=class{constructor(r,o){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){const{el:{content:o},parts:s}=this._$AD,c=((r==null?void 0:r.creationScope)??qr).importNode(o,!0);Br.currentNode=c;let d=Br.nextNode(),h=0,g=0,y=s[0];for(;y!==void 0;){if(h===y.index){let p;y.type===2?p=new q5(d,d.nextSibling,this,r):y.type===1?p=new y.ctor(d,y.name,y.strings,this,r):y.type===6&&(p=new x9(d,this,r)),this._$AV.push(p),y=s[++g]}h!==(y==null?void 0:y.index)&&(d=Br.nextNode(),h++)}return Br.currentNode=qr,c}p(r){let o=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(r,s,o),o+=s.strings.length-2):s._$AI(r[o])),o++}},q5=class Bd{get _$AU(){var r;return((r=this._$AM)==null?void 0:r._$AU)??this._$Cv}constructor(r,o,s,c){this.type=2,this._$AH=_t,this._$AN=void 0,this._$AA=r,this._$AB=o,this._$AM=s,this.options=c,this._$Cv=(c==null?void 0:c.isConnected)??!0}get parentNode(){let r=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(r==null?void 0:r.nodeType)===11&&(r=o.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,o=this){r=Gl(this,r,o),ho(r)?r===_t||r==null||r===""?(this._$AH!==_t&&this._$AR(),this._$AH=_t):r!==this._$AH&&r!==Yl&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):p9(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==_t&&ho(this._$AH)?this._$AA.nextSibling.data=r:this.T(qr.createTextNode(r)),this._$AH=r}$(r){var d;const{values:o,_$litType$:s}=r,c=typeof s=="number"?this._$AC(r):(s.el===void 0&&(s.el=S5.createElement(Ud(s.h,s.h[0]),this.options)),s);if(((d=this._$AH)==null?void 0:d._$AD)===c)this._$AH.p(o);else{const h=new m9(c,this),g=h.u(this.options);h.p(o),this.T(g),this._$AH=h}}_$AC(r){let o=ad.get(r.strings);return o===void 0&&ad.set(r.strings,o=new S5(r)),o}k(r){B5(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let s,c=0;for(const d of r)c===o.length?o.push(s=new Bd(this.O(uo()),this.O(uo()),this,this.options)):s=o[c],s._$AI(d),c++;c<o.length&&(this._$AR(s&&s._$AB.nextSibling,c),o.length=c)}_$AR(r=this._$AA.nextSibling,o){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,o);r&&r!==this._$AB;){const c=r.nextSibling;r.remove(),r=c}}setConnected(r){var o;this._$AM===void 0&&(this._$Cv=r,(o=this._$AP)==null||o.call(this,r))}},Ki=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,o,s,c,d){this.type=1,this._$AH=_t,this._$AN=void 0,this.element=r,this.name=o,this._$AM=c,this.options=d,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=_t}_$AI(r,o=this,s,c){const d=this.strings;let h=!1;if(d===void 0)r=Gl(this,r,o,0),h=!ho(r)||r!==this._$AH&&r!==Yl,h&&(this._$AH=r);else{const g=r;let y,p;for(r=d[0],y=0;y<d.length-1;y++)p=Gl(this,g[s+y],o,y),p===Yl&&(p=this._$AH[y]),h||(h=!ho(p)||p!==this._$AH[y]),p===_t?r=_t:r!==_t&&(r+=(p??"")+d[y+1]),this._$AH[y]=p}h&&!c&&this.j(r)}j(r){r===_t?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}},b9=class extends Ki{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===_t?void 0:r}},_9=class extends Ki{constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==_t)}},C9=class extends Ki{constructor(r,o,s,c,d){super(r,o,s,c,d),this.type=5}_$AI(r,o=this){if((r=Gl(this,r,o,0)??_t)===Yl)return;const s=this._$AH,c=r===_t&&s!==_t||r.capture!==s.capture||r.once!==s.once||r.passive!==s.passive,d=r!==_t&&(s===_t||c);c&&this.element.removeEventListener(this.name,this,s),d&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){var o;typeof this._$AH=="function"?this._$AH.call(((o=this.options)==null?void 0:o.host)??this.element,r):this._$AH.handleEvent(r)}},x9=class{constructor(r,o,s){this.element=r,this.type=6,this._$AN=void 0,this._$AM=o,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(r){Gl(this,r)}};const m5=oo.litHtmlPolyfillSupport;m5==null||m5(S5,q5),(oo.litHtmlVersions??(oo.litHtmlVersions=[])).push("3.2.1");const w9=(l,r,o)=>{const s=(o==null?void 0:o.renderBefore)??r;let c=s._$litPart$;if(c===void 0){const d=(o==null?void 0:o.renderBefore)??null;s._$litPart$=c=new q5(r.insertBefore(uo(),d),d,void 0,o??{})}return c._$AI(l),c};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Le=class extends jl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;const r=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=r.firstChild),r}update(r){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=w9(o,this.renderRoot,this.renderOptions)}connectedCallback(){var r;super.connectedCallback(),(r=this._$Do)==null||r.setConnected(!0)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this._$Do)==null||r.setConnected(!1)}render(){return Yl}};var id;Le._$litElement$=!0,Le.finalized=!0,(id=globalThis.litElementHydrateSupport)==null||id.call(globalThis,{LitElement:Le});const b5=globalThis.litElementPolyfillSupport;b5==null||b5({LitElement:Le});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k9={attribute:!0,type:String,converter:ji,reflect:!1,hasChanged:V5},S9=(l=k9,r,o)=>{const{kind:s,metadata:c}=o;let d=globalThis.litPropertyMetadata.get(c);if(d===void 0&&globalThis.litPropertyMetadata.set(c,d=new Map),d.set(o.name,l),s==="accessor"){const{name:h}=o;return{set(g){const y=r.get.call(this);r.set.call(this,g),this.requestUpdate(h,y,l)},init(g){return g!==void 0&&this.P(h,void 0,l),g}}}if(s==="setter"){const{name:h}=o;return function(g){const y=this[h];r.call(this,g),this.requestUpdate(h,y,l)}}throw Error("Unsupported decorator location: "+s)};function m(l){return(r,o)=>typeof o=="object"?S9(l,r,o):((s,c,d)=>{const h=c.hasOwnProperty(d);return c.constructor.createProperty(d,h?{...s,wrapped:!0}:s),h?Object.getOwnPropertyDescriptor(c,d):void 0})(l,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Yt(l){return m({...l,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E9=(l,r,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof r!="object"&&Object.defineProperty(l,r,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function D9(l,r){return(o,s,c)=>{const d=h=>{var g;return((g=h.renderRoot)==null?void 0:g.querySelector(l))??null};return E9(o,s,{get(){return d(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=l=>l??_t;/*!
   * New York State Design System (v1.10.0)
   * Description: A design system for New York State's digital products.
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
 */const qd=Qe`
  :host {
    /* Anything that can be overridden should be defined here */

    /* Global Accordion Styles */
    --_nys-accordion-border-radius: var(--nys-radius-md, 4px);
    --_nys-accordion-border-width: var(--nys-border-width-md, 2px);
    --_nys-accordion-border-color: var(--nys-color-neutral-50, #ededed);
    --_nys-accordion-padding--x: var(--nys-space-250, 20px);
    --_nys-accordion-padding--y: var(--nys-space-200, 16px);
    --_nys-accordion-outline-width: var(--nys-border-width-md, 2px);
    --_nys-accordion-outline-offset: var(--nys-space-2px, 2px);
    --_nys-accordion-outline-color: var(--nys-color-focus, #004dd1);
    --_nys-accordion-gap: var(--nys-space-100, 8px);

    /* Header & Text container */
    --_nys-accordion-background-color: var(--nys-color-neutral-50, #ededed);
    --_nys-accordion-background-color--hover: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
    --_nys-accordionitem-gap: var(--nys-space-200, 16px);
    --_nys-accordionitem-background-color: var(--nys-color-ink-reverse, #fff);
    --_nys-accordionitem-padding: var(--nys-space-200, 16px)
      var(--local-xx-spacing-205, 20px);

    /* Typography */
    --_nys-accordion-font-size: var(--nys-type-size-ui-xl, 20px);
    --_nys-accordion-font-weight: var(--nys-font-weight-bold, 700);
    --_nys-accordion-line-height: var(--nys-font-lineheight-ui-xl, 28px);
    --_nys-accordion-letter-spacing: var(
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
    letter-spacing: var(--_nys-accordion-letter-spacing);
    display: flex;
  }

  .nys-accordionitem__heading {
    all: unset;
    flex: 1;
    gap: var(--_nys-accordionitem-gap);
    display: flex;
    padding: var(--_nys-accordion-padding--y) var(--_nys-accordion-padding--x);
    align-items: center;
    align-self: stretch;
    border-radius: var(--_nys-accordion-border-radius);
    background-color: var(--_nys-accordion-background-color);
    cursor: pointer;
    transition: 0.05s all ease-in-out;
  }

  .nys-accordionitem__heading:hover {
    border-radius: var(--_nys-accordion-border-radius);
    background-color: var(--_nys-accordion-background-color--hover);
  }

  .nys-accordionitem__heading:focus-visible {
    outline-offset: var(--_nys-accordion-outline-offset);
    outline: solid var(--_nys-accordion-outline-width)
      var(--_nys-accordion-outline-color);
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
    padding: var(--_nys-accordionitem-padding);
    background-color: var(--_nys-accordionitem-background-color);
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
    border-radius: var(--_nys-accordion-border-radius)
      var(--_nys-accordion-border-radius) 0 0;
  }

  :host([bordered]) .nys-accordionitem__content-slot-container {
    border: var(--_nys-accordion-border-width) solid
      var(--_nys-accordion-border-color);
    border-radius: 0 0 var(--_nys-accordion-border-radius)
      var(--_nys-accordion-border-radius);
  }

  /*** Accordion Wrapper ***/
  .nys-accordion {
    display: flex;
    flex-direction: column;
    gap: var(--_nys-accordion-gap);
  }
`;var M9=Object.defineProperty,po=(l,r,o,s)=>{for(var c=void 0,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=h(r,o,c)||c);return c&&M9(r,o,c),c};let A9=0;const jd=class extends Le{constructor(){super(),this.id="",this.heading="",this.expanded=!1,this.bordered=!1}connectedCallback(){super.connectedCallback(),this.id||(this.id=this._generateUniqueId())}firstUpdated(){var r;const o=(r=this.shadowRoot)==null?void 0:r.querySelector("slot");this.expanded&&o&&o.addEventListener("slotchange",()=>{this._updateHeight()})}updated(r){r.has("expanded")&&this._updateHeight()}_generateUniqueId(){return`nys-accordionitem-${Date.now()}-${A9++}`}_dispatchEvent(){this.dispatchEvent(new CustomEvent("nys-accordionitem-toggle",{detail:{id:this.id,heading:this.heading,expanded:this.expanded},bubbles:!0,composed:!0}))}_handleExpand(){this.expanded=!this.expanded,this._updateHeight(),this._dispatchEvent()}_handleKeydown(r){(r.key===" "||r.key==="Enter")&&(r.preventDefault(),this._handleExpand())}_updateHeight(){if(this._contentContainer)if(this.expanded){const r=this._contentContainer.scrollHeight;this._contentContainer.style.height=`${r}px`}else this._contentContainer.style.height="0",this._contentContainer.style.overflow="hidden"}render(){const r=`${this.id}-content`;return Y`
    <div id=${this.id} class="nys-accordionitem">
      <button
        class="nys-accordionitem__heading"
        type="button"
        @click=${this._handleExpand}
        @keydown=${this._handleKeydown}
        aria-expanded=${this.expanded?"true":"false"}
        aria-controls=${r}
      >
        <p class="nys-accordionitem__heading-title">${this.heading}</p>
        <nys-icon class="expand-icon" name="chevron_down" size="24"></nys-icon>
      </button>
      </div>
      <div id=${r} class="nys-accordionitem__content ${this.expanded?"expanded":"collapsed"}" role="region">
        <div class="nys-accordionitem__content-slot-container">
          <div class="nys-accordionitem__content-slot-container-text">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>`}};jd.styles=qd;let Zr=jd;po([m({type:String})],Zr.prototype,"id");po([m({type:String})],Zr.prototype,"heading");po([m({type:Boolean,reflect:!0})],Zr.prototype,"expanded");po([m({type:Boolean,reflect:!0})],Zr.prototype,"bordered");po([D9(".nys-accordionitem__content")],Zr.prototype,"_contentContainer");customElements.get("nys-accordionitem")||customElements.define("nys-accordionitem",Zr);var L9=Object.defineProperty,j5=(l,r,o,s)=>{for(var c=void 0,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=h(r,o,c)||c);return c&&L9(r,o,c),c};let z9=0;const Zd=class extends Le{constructor(){super(),this.id="",this.singleSelect=!1,this.bordered=!1}connectedCallback(){super.connectedCallback(),this.id||(this.id=this._generateUniqueId())}updated(r){r.has("bordered")&&this._applyBordered()}_generateUniqueId(){return`nys-accordionitem-${Date.now()}-${z9++}`}_getAccordions(){var r;const o=(r=this.shadowRoot)==null?void 0:r.querySelector("slot");return((o==null?void 0:o.assignedElements())||[]).filter(s=>s.tagName.toLowerCase()==="nys-accordionitem")}_onAccordionToggle(r){if(!this.singleSelect)return;const o=r.detail.id;r.detail.expanded&&this._getAccordions().forEach(s=>{s.id!==o&&s.expanded&&(s.expanded=!1)})}_applyBordered(){this._getAccordions().forEach(r=>{r.bordered=this.bordered})}render(){return Y`<div
      id=${this.id}
      class="nys-accordion"
      @nys-accordionitem-toggle=${this._onAccordionToggle}
    >
      <slot></slot>
    </div>`}};Zd.styles=qd;let vo=Zd;j5([m({type:String})],vo.prototype,"id");j5([m({type:Boolean,reflect:!0})],vo.prototype,"singleSelect");j5([m({type:Boolean,reflect:!0})],vo.prototype,"bordered");customElements.get("nys-accordion")||customElements.define("nys-accordion",vo);const T9=Qe`
  :host {
    /* Global Alert Styles */
    --_nys-alert-border-width: var(--nys-border-width-lg, 4px);
    --_nys-alert-border-radius: var(--nys-radius-md, 4px);
    --_nys-alert-color: var(
      --nys-alert-color,
      var(--nys-color-text, var(--nys-color-neutral-900, #1b1b1b))
    );
    --_nys-alert-color--link: var(
      --nys-alert-color--link,
      var(--nys-color-link, var(--nys-color-blue-600, #004dd1))
    );
    --_nys-alert-color--link--hover: var(
      --nys-alert-color--link--hover,
      var(--nys-color-link-strong, var(--nys-color-blue-700, #003ba1))
    );
    --_nys-alert-color--link--active: var(
      --nys-alert-color--link--active,
      var(--nys-color-link-strongest, var(--nys-color-blue-800, #002971))
    );
    --_nys-alert-padding: var(--nys-space-250, 20px);
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
    --_nys-alert-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-alert-letter-spacing: var(
      --nys-font-letterspacing-ui-md,
      var(--nys-font-letterspacing-400, 0.044px)
    );
    --_nys-alert-font-weight--regular: var(--nys-font-weight-regular, 400);
    --_nys-alert-font-weight--semibold: var(--nys-font-weight-semibold, 600);

    /* Border specifics */
    --_nys-alert-border-color: var(
      --nys-alert-border-color,
      var(--nys-color-base, var(--nys-color-neutral-600, #62666a))
    );

    /* Background type specifics */
    --_nys-alert-background-color: var(
      --nys-alert-background-color,
      var(--nys-color-base-weak, var(--nys-color-neutral-10, #f6f6f6))
    );

    /* Theme Icon */
    --_nys-alert-gap--icon: var(--nys-space-150, 12px);
    --_nys-alert-gap--text: var(--nys-space-50, 4px);

    /* Action Statement */
    --_nys-alert-gap--actions: var(--nys-space-150, 12px);
  }

  /* Main alert container */
  .nys-alert__container {
    display: flex;
    background-color: var(--_nys-alert-background-color);
    border-left: var(--_nys-alert-border-width) solid
      var(--_nys-alert-border-color);
    border-radius: var(--_nys-alert-border-radius);
    color: var(--_nys-alert-color);
    padding: var(--_nys-alert-padding);
    font-style: normal;
    font-family: var(--_nys-alert-font-family);
    font-size: var(--_nys-alert-font-size);
    line-height: var(--_nys-alert-line-height);
    letter-spacing: var(--_nys-alert-letter-spacing);
    gap: var(--_nys-alert-gap--icon);
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
    font-weight: var(--_nys-alert-font-weight--semibold);
    font-size: var(--_nys-alert-font-size);
    color: var(--_nys-alert-color--link);
  }
  a:hover {
    color: var(--_nys-alert-color--link--hover);
  }
  a:active {
    color: var(--_nys-alert-color--link--active);
  }

  /* For HTML elements put into the slot */
  ::slotted(a) {
    color: var(--_nys-alert-color--link);
  }

  /* Handles both header and description text */
  .nys-alert__texts {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: var(--_nys-alert-gap--text);
  }

  .nys-alert__header {
    margin: 0;
    font-weight: var(--_nys-alert-font-weight--semibold);
  }

  .nys-alert__text {
    font-weight: var(--_nys-alert-font-weight--regular);
    margin: 0;
  }

  /* For HTML elements put into the slot */
  ::slotted(*) {
    font-weight: var(--_nys-alert-font-weight--regular);
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
    gap: var(--_nys-alert-gap--actions);
    flex-wrap: wrap;
  }

  /* Dismiss Button */
  #dismiss-btn {
    margin-top: -8px;
  }

  /* Alert Types */
  :host([type="info"]) {
    --_nys-alert-border-color: var(
      --nys-alert-border-color,
      var(--nys-color-info, var(--nys-color-blue-600, #004dd1))
    );
    --_nys-alert-background-color: var(
      --nys-alert-background-color,
      var(--nys-color-info-weak, var(--nys-color-blue-50, #e5effa))
    );
  }
  :host([type="success"]) {
    --_nys-alert-border-color: var(
      --nys-alert-border-color,
      var(--nys-color-success, var(--nys-color-green-600, #1e752e))
    );
    --_nys-alert-background-color: var(
      --nys-alert-background-color,
      var(--nys-color-success-weak, var(--nys-color-green-50, #e8f1ea))
    );
  }
  :host([type="warning"]) {
    --_nys-alert-border-color: var(
      --nys-alert-border-color,
      var(--nys-color-warning, var(--nys-color-yellow-400, #face00))
    );
    --_nys-alert-background-color: var(
      --nys-alert-background-color,
      var(--nys-color-warning-weak, var(--nys-color-yellow-50, #fefae5))
    );
  }
  :host([type="danger"]) {
    --_nys-alert-border-color: var(
      --nys-alert-border-color,
      var(--nys-color-danger, var(--nys-color-red-600, #b52c2c))
    );
    --_nys-alert-background-color: var(
      --nys-alert-background-color,
      var(--nys-color-danger-weak, var(--nys-color-red-50, #f7eaea))
    );
  }
  :host([type="emergency"]) {
    --_nys-alert-border-color: var(
      --nys-alert-border-color,
      var(--nys-color-emergency, var(--nys-color-red-800, #721c1c))
    );
    --_nys-alert-background-color: var(
      --nys-alert-background-color,
      var(--nys-color-emergency, var(--nys-color-red-800, #721c1c))
    );
    --_nys-alert-color: var(
      --nys-alert-color,
      var(--nys-color-text-reverse, var(--nys-color-white, #fff))
    );
    --_nys-alert-color--link: var(
      --nys-alert-color--link,
      var(--nys-color-link-reverse-neutral, var(--nys-color-white, #fff))
    );
    --_nys-alert-color--link--hover: var(
      --nys-alert-color--link--hover,
      var(--nys-color-link-reverse-neutral, var(--nys-color-white, #fff))
    );
    --_nys-alert-color--link--active: var(
      --nys-alert-color--link--active,
      var(--nys-color-link-reverse-neutral, var(--nys-color-white, #fff))
    );
  }
  :host([type="emergency"]) a:hover {
    text-decoration-thickness: 2px;
  }
  :host([type="emergency"]) a:active {
    text-decoration-thickness: 3px;
  }
`;var R9=Object.defineProperty,H9=Object.getOwnPropertyDescriptor,un=(l,r,o,s)=>{for(var c=s>1?void 0:s?H9(r,o):r,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=(s?h(r,o,c):h(c))||c);return s&&c&&R9(r,o,c),c};let $9=0;var eo;const Pt=(eo=class extends Le{constructor(){super(...arguments),this.id="",this.heading="",this.icon="",this.dismissible=!1,this.duration=0,this.text="",this.primaryAction="",this.secondaryAction="",this.primaryLabel="Learn more",this.secondaryLabel="Dismiss",this._alertClosed=!1,this._slotHasContent=!0,this._type="base",this._timeoutId=null}get type(){return this._type}set type(l){this._type=eo.VALID_TYPES.includes(l)?l:"base"}get ariaAttributes(){const l=this.type==="danger"||this.type==="emergency"?"alert":this.type==="success"?"status":"region",r=l==="region"?`${this.type} alert`:"";return{role:l,ariaLabel:r}}connectedCallback(){super.connectedCallback(),this.id||(this.id=this._generateUniqueId()),this.duration>0&&(this._timeoutId=setTimeout(()=>{this._closeAlert()},this.duration))}disconnectedCallback(){this._timeoutId&&clearTimeout(this._timeoutId),super.disconnectedCallback()}firstUpdated(){this._checkSlotContent()}_generateUniqueId(){return`nys-alert-${Date.now()}-${$9++}`}_getIconName(){return this.icon?this.icon:this._checkAltNaming()}_checkAltNaming(){return this.type==="success"?"check_circle":this.type==="base"?"info":this.type==="danger"?"error":this.type==="emergency"?"emergency_home":this.type}_closeAlert(){this._alertClosed=!0,this.dispatchEvent(new CustomEvent("nys-close",{detail:{id:this.id,type:this.type,label:this.heading},bubbles:!0,composed:!0}))}async _checkSlotContent(){var l;const r=(l=this.shadowRoot)==null?void 0:l.querySelector("slot");if(r){const o=r.assignedNodes({flatten:!0}).filter(s=>{var c;return s.nodeType===Node.ELEMENT_NODE||s.nodeType===Node.TEXT_NODE&&((c=s.textContent)==null?void 0:c.trim())});await Promise.resolve(),this._slotHasContent=o.length>0}else await Promise.resolve(),this._slotHasContent=!1}render(){var l,r;const{role:o,ariaLabel:s}=this.ariaAttributes;return Y`
      ${this._alertClosed?"":Y` <div
            id=${this.id}
            class="nys-alert__container ${this._slotHasContent||((l=this.text)==null?void 0:l.trim().length)>0?"":"nys-alert--centered"}"
            aria-label=${_e(s.trim()!==""?s:void 0)}
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
              ${this._slotHasContent?Y`<slot></slot>`:((r=this.text)==null?void 0:r.trim().length)>0?Y`<p class="nys-alert__text">${this.text}</p>`:""}
              ${this.primaryAction||this.secondaryAction?Y`<div class="nys-alert__actions">
                    ${this.primaryAction?Y`<a
                          href=${_e(this.primaryAction||void 0)}
                          class="nys-alert__action nys-alert__primary"
                        >
                          ${this.primaryLabel}
                        </a>`:""}
                    ${this.secondaryAction?Y`<a
                          href=${_e(this.secondaryAction||void 0)}
                          class="nys-alert__action nys-alert__secondary"
                        >
                          ${this.secondaryLabel}
                        </a>`:""}
                  </div> `:""}
            </div>
            ${this.dismissible?Y` <nys-button
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
    `}},eo.styles=T9,eo.VALID_TYPES=["base","info","success","warning","danger","emergency"],eo);un([m({type:String})],Pt.prototype,"id",2);un([m({type:String})],Pt.prototype,"heading",2);un([m({type:String})],Pt.prototype,"icon",2);un([m({type:Boolean,reflect:!0})],Pt.prototype,"dismissible",2);un([m({type:Number,reflect:!0})],Pt.prototype,"duration",2);un([m({type:String})],Pt.prototype,"text",2);un([m({type:String})],Pt.prototype,"primaryAction",2);un([m({type:String})],Pt.prototype,"secondaryAction",2);un([m({type:String})],Pt.prototype,"primaryLabel",2);un([m({type:String})],Pt.prototype,"secondaryLabel",2);un([Yt()],Pt.prototype,"_alertClosed",2);un([Yt()],Pt.prototype,"_slotHasContent",2);un([m({reflect:!0})],Pt.prototype,"type",1);let Yd=Pt;customElements.get("nys-alert")||customElements.define("nys-alert",Yd);const O9=Qe`
  :host {
    /* Global Avatar Styles */

    --_nys-avatar-border-radius: var(--nys-radius-round, 1776px);
    --_nys-avatar-size: var(--nys-avatar-size, var(--nys-font-size-6xl, 36px));
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
    border-radius: var(--_nys-avatar-border-radius);
    width: var(--_nys-avatar-size);
    height: var(--_nys-avatar-size);
    font-size: var(--_nys-avatar-size);

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
    outline: solid var(--_nys-avatar-outline-width)
      var(--_nys-avatar-outline-color);
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
`;var N9=Object.defineProperty,na=(l,r,o,s)=>{for(var c=void 0,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=h(r,o,c)||c);return c&&N9(r,o,c),c};let U9=0;const Gd=class extends Le{constructor(){super(...arguments),this.id="",this.ariaLabel="",this.image="",this.initials="",this.icon="",this.color="",this.interactive=!1,this.disabled=!1,this.lazy=!1,this._slotHasContent=!0}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-avatar-${Date.now()}-${U9++}`)}firstUpdated(){this._checkSlotContent()}async _checkSlotContent(){var r;const o=(r=this.shadowRoot)==null?void 0:r.querySelector("slot");if(!o){this._slotHasContent=!1;return}await Promise.resolve();const s=o.assignedNodes({flatten:!0}).filter(c=>{var d;return c.nodeType===Node.ELEMENT_NODE||c.nodeType===Node.TEXT_NODE&&((d=c.textContent)==null?void 0:d.trim())});this._slotHasContent=s.length>0}getContrastForeground(){var r;const o="var(--nys-color-ink, #000)",s="var(--nys-color-ink-reverse, #fff)",c="var(--nys-color-text, #000)",d="var(--nys-color-text-reverse, #fff)";if(!this.color)return;const h=document.createElement("div");h.style.color=this.color,document.body.appendChild(h);const g=getComputedStyle(h).color;document.body.removeChild(h);const y=g.match(/\d+/g);if(!y)return;const p=Number(y[0]),_=Number(y[1]),w=Number(y[2]),E=(.299*p+.587*_+.114*w)/255<.5;return((r=this.initials)==null?void 0:r.length)>0?E?d:c:E?s:o}render(){var r,o,s;return Y`
      <label class="nys-avatar" id=${this.id}>
        <div class="nys-avatar__content">
          <div
            part="nys-avatar"
            class="nys-avatar__component"
            style=${this.color?`--_nys-avatar-background-color: ${this.color}; color: ${this.getContrastForeground()}`:""}
            role=${_e(this.interactive?"button":this.image?void 0:"img")}
            aria-label=${_e(this.image?void 0:this.ariaLabel?this.ariaLabel:"avatar")}
            tabindex=${this.interactive&&!this.disabled?"0":_e(void 0)}
          >
            ${((r=this.image)==null?void 0:r.length)>0?Y`<img
                  part="nys-avatar__image"
                  class="nys-avatar__image"
                  src=${this.image}
                  alt=${this.ariaLabel||"avatar"}
                  loading=${this.lazy?"lazy":"eager"}
                />`:((o=this.initials)==null?void 0:o.length)>0?Y`<span
                    part="nys-avatar__initials"
                    class="nys-avatar__initials"
                    aria-hidden="true"
                    >${this.initials}</span
                  >`:this._slotHasContent?Y`<div part="nys-avatar__icon">
                      <slot></slot>
                    </div>`:Y`<div part="nys-avatar__icon">
                      <nys-icon
                        label="nys-avatar__icon"
                        name=${((s=this.icon)==null?void 0:s.length)>0?this.icon:"account_circle"}
                      ></nys-icon>
                    </div>`}
          </div>
        </div>
      </label>
    `}};Gd.styles=O9;let zn=Gd;na([m({type:String})],zn.prototype,"id");na([m({type:String})],zn.prototype,"ariaLabel");na([m({type:String})],zn.prototype,"image");na([m({type:String})],zn.prototype,"initials");na([m({type:String})],zn.prototype,"icon");na([m({type:String})],zn.prototype,"color");na([m({type:Boolean,reflect:!0})],zn.prototype,"interactive");na([m({type:Boolean,reflect:!0})],zn.prototype,"disabled");na([m({type:Boolean,reflect:!0})],zn.prototype,"lazy");na([Yt()],zn.prototype,"_slotHasContent");customElements.get("nys-avatar")||customElements.define("nys-avatar",zn);const V9=Qe`
  .nys-backtotop {
    /* These props ARE NOT publicly overridable */
    --_nys-button-border-radius--start: var(--nys-radius-round, 1776px);
    --_nys-button-border-radius--end: var(--nys-radius-round, 1776px);
    --_nys-button-padding--y: var(--nys-space-100, 8px);
    --_nys-button-padding--x: var(--nys-space-200, 16px);

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
`;var B9=Object.defineProperty,Pi=(l,r,o,s)=>{for(var c=void 0,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=h(r,o,c)||c);return c&&B9(r,o,c),c};const Xd=class extends Le{constructor(){super(),this.position="right",this.visible=!1,this.isMobile=!1,this.forceVisible=!1,this._handleScroll=this._handleScroll.bind(this),this._handleResize=this._handleResize.bind(this),this.mediaQuery=window.matchMedia("(max-width: 480px)")}connectedCallback(){super.connectedCallback(),this.forceVisible=this.hasAttribute("visible"),window.addEventListener("scroll",this._handleScroll),this.mediaQuery.addEventListener("change",this._handleResize),this._handleResize()}disconnectedCallback(){window.removeEventListener("scroll",this._handleScroll),this.mediaQuery.removeEventListener("change",this._handleResize),super.disconnectedCallback()}_handleScroll(){if(this.forceVisible)return;const r=window.innerHeight,o=document.documentElement.scrollHeight;this.visible=o>=r*4&&window.scrollY>r*1.5}_scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}_handleResize(){this.isMobile=this.mediaQuery.matches}render(){const r=["nys-backtotop",this.position,this.visible?"visible":""].filter(Boolean).join(" ");return Y`<nys-button
      id="nys-backtotop"
      prefixIcon="chevron_up"
      variant="outline"
      label="Back to top"
      size="sm"
      class="${r}"
      .onClick=${this._scrollToTop}
      ?circle=${this.isMobile}
    ></nys-button>`}};Xd.styles=V9;let Ql=Xd;Pi([m({type:String})],Ql.prototype,"position");Pi([m({type:Boolean,reflect:!0})],Ql.prototype,"visible");Pi([Yt()],Ql.prototype,"isMobile");Pi([Yt()],Ql.prototype,"forceVisible");customElements.get("nys-backtotop")||customElements.define("nys-backtotop",Ql);const q9=Qe`
  :host {
    /* Anything that can be overridden should be defined here */

    /* Global Button Styles */
    --_nys-button-width: fit-content;
    --_nys-button-height: var(--nys-size-600, 48px);
    --_nys-button-border-radius--start: var(--nys-radius-xl, 12px);
    --_nys-button-border-radius--end: var(--nys-radius-xl, 12px);
    --_nys-button-padding--y: var(--nys-space-150, 12px);
    --_nys-button-padding--x: var(--nys-space-250, 20px);
    --_nys-button-gap: var(--nys-space-100, 8px);
    --_nys-button-border-width: var(--nys-border-width-md, 2px);
    --_nys-button-outline-width: var(--nys-border-width-md, 2px);
    --_nys-button-outline-offset: var(--nys-space-2px, 2px);
    --_nys-button-outline-color: var(--nys-color-focus, #004dd1);

    /* Global Button Colors */
    --_nys-button-background-color: var(
      --nys-button-background-color,
      var(--nys-color-theme, #154973)
    );
    --_nys-button-color: var(
      --nys-button-color,
      var(--nys-color-text-reverse, #ffffff)
    );
    --_nys-button-border-color: var(
      --nys-button-border-color,
      var(--nys-color-theme, #154973)
    );

    --_nys-button-background-color--hover: var(
      --nys-button-background-color--hover,
      var(--nys-color-theme-strong, #0e324f)
    );
    --_nys-button-color--hover: var(
      --nys-button-color--hover,
      var(--nys-color-text-reverse, #ffffff)
    );
    --_nys-button-border-color--hover: var(
      --nys-button-border-color--hover,
      var(--nys-color-theme-strong, #0e324f)
    );

    --_nys-button-background-color--active: var(
      --nys-button-background-color--active,
      var(--nys-color-theme-stronger, #081b2b)
    );
    --_nys-button-color--active: var(
      --nys-button-color--active,
      var(--nys-color-text-reverse, #ffffff)
    );
    --_nys-button-border-color--active: var(
      --nys-button-border-color--active,
      var(--nys-color-theme-stronger, #081b2b)
    );

    --_nys-button-background-color--disabled: var(
      --nys-color-neutral-10,
      #f6f6f6
    );
    --_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-button-border-color--disabled: var(--nys-color-neutral-10, #f6f6f6);

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
    --_nys-button-padding--y: var(--nys-space-100, 8px);
    --_nys-button-padding--x: var(--nys-space-200, 16px);
  }
  :host([size="md"]) {
    --_nys-button-height: var(--nys-size-600, 48px);
    --_nys-button-padding--y: var(--nys-space-150, 12px);
    --_nys-button-padding--x: var(--nys-space-250, 20px);
  }
  :host([size="lg"]) {
    --_nys-button-height: var(--nys-size-700, 56px);
    --_nys-button-padding--y: var(--nys-space-200, 16px);
    --_nys-button-padding--x: var(--nys-space-300, 24px);
  }
  :host([fullWidth]) {
    --_nys-button-width: 100%;
  }

  /* VARIANTS */

  /* Filled */
  :host([variant="filled"]) {
    /* Filled - Default */
    --_nys-button-background-color: var(
      --nys-button-background-color,
      var(--nys-color-theme, #154973)
    );
    --_nys-button-color: var(
      --nys-button-color,
      var(--nys-color-text-reverse, #ffffff)
    );
    --_nys-button-border-color: var(
      --nys-button-border-color,
      var(--nys-color-transparent, #ffffff00)
    );

    /* Filled - Hover */
    --_nys-button-background-color--hover: var(
      --nys-button-background-color--hover,
      var(--nys-color-theme-strong, #0e324f)
    );
    --_nys-button-color--hover: var(
      --nys-button-color--hover,
      var(--nys-color-text-reverse, #ffffff)
    );
    --_nys-button-border-color: var(
      --nys-button-border-color,
      var(--nys-color-transparent, #ffffff00)
    );

    /* Filled - Pressed/Active */
    --_nys-button-background-color--active: var(
      --nys-button-background-color--active,
      var(--nys-color-theme-stronger, #081b2b)
    );
    --_nys-button-color--active: var(
      --nys-button-color--active,
      var(--nys-color-text-reverse, #ffffff)
    );
    --_nys-button-border-color: var(
      --nys-button-border-color,
      var(--nys-color-transparent, #ffffff00)
    );

    /* Filled - Disabled */
    --_nys-button-background-color--disabled: var(
      --nys-color-neutral-10,
      #f6f6f6
    );
    --_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-button-border-color: var(
      --nys-button-border-color,
      var(--nys-color-transparent, #ffffff00)
    );
  }

  /* Outline */
  :host([variant="outline"]) {
    /* Outline - Default */
    --_nys-button-background-color: var(
      --nys-button-background-color,
      var(--nys-color-surface, #ffffff)
    );
    --_nys-button-color: var(
      --nys-button-color,
      var(--nys-color-theme, #154973)
    );
    --_nys-button-border-color: var(
      --nys-button-border-color,
      var(--nys-color-theme, #154973)
    );

    /* Outline - Hover */
    --_nys-button-background-color--hover: var(
      --nys-button-background-color--hover,
      var(--nys-color-theme-weaker, #eff6fb)
    );
    --_nys-button-color--hover: var(
      --nys-button-color--hover,
      var(--nys-color-theme, #154973)
    );
    --_nys-button-border-color--hover: var(
      --nys-button-border-color--hover,
      var(--nys-color-theme, #154973)
    );

    /* Outline - Pressed/Active */
    --_nys-button-background-color--active: var(
      --nys-button-background-color--active,
      var(--nys-color-theme-weak, #cddde9)
    );
    --_nys-button-color--active: var(
      --nys-button-color--active,
      var(--nys-color-theme, #154973)
    );
    --_nys-button-border-color--active: var(
      --nys-button-border-color--active,
      var(--nys-color-theme, #154973)
    );

    /* Outline - Disabled */
    --_nys-button-background-color--disabled: var(--nys-color-surface, #ffffff);
    --_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-button-border-color--disabled: var(--nys-color-neutral-100, #d0d0ce);
  }

  /* Text */
  :host([variant="text"]) {
    --_nys-button-height: fit-content;
    --_nys-button-border-radius--start: var(--nys-radius-md, 4px);
    --_nys-button-border-radius--end: var(--nys-radius-md, 4px);
    --_nys-button-padding--y: var(--nys-space-2px, 2px);
    --_nys-button-padding--x: var(--nys-space-50, 4px);
    --_nys-button-border-width: 0px;
    --_nys-button-text-decoration: underline;

    /* Text - Default */
    --_nys-button-background-color: var(
      --nys-button-background-color,
      var(--nys-color-transparent, #ffffff00)
    );
    --_nys-button-color: var(
      --nys-button-color,
      var(--nys-color-link, #004dd1)
    );
    --_nys-button-border-color: var(
      --nys-button-border-color,
      var(--nys-color-transparent, #ffffff00)
    );

    /* Text - Hover */
    --_nys-button-background-color--hover: var(
      --nys-button-background-color--hover,
      var(--nys-color-transparent, #ffffff00)
    );
    --_nys-button-color--hover: var(
      --nys-button-color--hover,
      var(--nys-color-link-strong, #003ba1)
    );
    --_nys-button-border-color--hover: var(
      --nys-button-border-color--hover,
      var(--nys-color-transparent, #ffffff00)
    );

    /* Text - Pressed/Active */
    --_nys-button-background-color--active: var(
      --nys-button-background-color--active,
      var(--nys-color-transparent, #ffffff00)
    );
    --_nys-button-color--active: var(
      --nys-button-color--active,
      var(--nys-color-link-strongest, #002971)
    );
    --_nys-button-border-color--active: var(
      --nys-button-border-color--active,
      var(--nys-color-transparent, #ffffff00)
    );

    /* Text - Disabled */
    --_nys-button-background-color--disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
    --_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-button-border-color--disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
  }

  /* Ghost */
  :host([variant="ghost"]) {
    /* Ghost - Default */
    --_nys-button-background-color: var(
      --nys-button-background-color,
      var(--nys-color-transparent, #ffffff00)
    );
    --_nys-button-color: var(
      --nys-button-color,
      var(--nys-color-text, #1b1b1b)
    );
    --_nys-button-border-color: var(
      --nys-button-border-color,
      var(--nys-color-transparent, #ffffff00)
    );

    /* Ghost - Hover */
    --_nys-button-background-color--hover: var(
      --nys-button-background-color--hover,
      var(--nys-color-black-transparent-100, #0000001a)
    );
    --_nys-button-color--hover: var(
      --nys-button-color--hover,
      var(--nys-color-text, #1b1b1b)
    );
    --_nys-button-border-color--hover: var(
      --nys-button-border-color--hover,
      var(--nys-color-transparent, #ffffff00)
    );

    /* Ghost - Active */
    --_nys-button-background-color--active: var(
      --nys-button-background-color--active,
      var(--nys-color-black-transparent-200, #00000033)
    );
    --_nys-button-color--active: var(
      --nys-button-color--active,
      var(--nys-color-text, #1b1b1b)
    );
    --_nys-button-border-color--active: var(
      --nys-button-border-color--active,
      var(--nys-color-transparent, #ffffff00)
    );

    /* Ghost - Disabled */
    --_nys-button-background-color--disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
    --_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-button-border-color--disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
  }

  /* INVERTED VARIANTS */

  /* Filled Inverted */
  :host([variant="filled"][inverted]) {
    /* Filled Inverted - Default */
    --_nys-button-background-color: var(
      --nys-button-background-color,
      var(--nys-color-surface, #ffffff)
    );
    --_nys-button-color: var(
      --nys-button-color,
      var(--nys-color-text, #1b1b1b)
    );
    --_nys-button-border-color--disabled: var(
      --nys-color-transparent,
      #ffffff00
    );

    /* Filled Inverted - Hover */
    --_nys-button-background-color--hover: var(
      --nys-button-background-color--hover,
      var(--nys-color-neutral-100, #d0d0ce)
    );
    --_nys-button-color--hover: var(
      --nys-button-color--hover,
      var(--nys-color-text, #1b1b1b)
    );
    --_nys-button-border-color--disabled: var(
      --nys-color-transparent,
      #ffffff00
    );

    /* Filled Inverted - Pressed/Active */
    --_nys-button-background-color--active: var(
      --nys-button-background-color--active,
      var(--nys-color-neutral-300, #a7a9ab)
    );
    --_nys-button-color--active: var(
      --nys-button-color--active,
      var(--nys-color-text, #1b1b1b)
    );
    --_nys-button-border-color--disabled: var(
      --nys-color-transparent,
      #ffffff00
    );

    /* Filled Inverted - Disabled */
    --_nys-button-background-color--disabled: var(--nys-color-text, #1b1b1b);
    --_nys-button-color--disabled: var(--nys-color-text-disabled, #62666a);
    --_nys-button-border-color--disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
  }

  /* Outline Inverted */
  :host([variant="outline"][inverted]) {
    /* Outline Inverted - Default */
    --_nys-button-background-color: var(
      --nys-button-background-color,
      var(--nys-color-surface-reverse, #1b1b1b)
    );
    --_nys-button-color: var(
      --nys-button-color,
      var(--nys-color-text-reverse, #ffffff)
    );
    --_nys-button-border-color: var(
      --nys-button-border-color,
      var(--nys-color-ink-reverse, #ffffff)
    );

    /* Outline Inverted - Hover */
    --_nys-button-background-color--hover: var(
      --nys-button-background-color--hover,
      var(--nys-color-surface-reverse, #1b1b1b)
    );
    --_nys-button-color--hover: var(
      --nys-button-color--hover,
      var(--nys-color-text-reverse-weak, #d0d0ce)
    );
    --_nys-button-border-color--hover: var(
      --nys-button-border-color--hover,
      var(--nys-color-neutral-100, #d0d0ce)
    );

    /* Outline Inverted - Pressed/Active */
    --_nys-button-background-color--active: var(
      --nys-button-background-color--active,
      var(--nys-color-surface-reverse, #1b1b1b)
    );
    --_nys-button-color--active: var(
      --nys-button-color--active,
      var(--nys-color-text-reverse-weaker, #bec0c1)
    );
    --_nys-button-border-color--active: var(
      --nys-button-border-color--active,
      var(--nys-color-neutral-300, #a7a9ab)
    );

    /* Outline Inverted - Disabled */
    --_nys-button-background-color--disabled: var(
      --nys-color-surface-reverse,
      #1b1b1b
    );
    --_nys-button-color--disabled: var(
      --nys-color-text-reverse-disabled,
      #62666a
    );
    --_nys-button-border-color--disabled: var(--nys-color-neutral-600, #62666a);
  }

  /* Text Inverted */
  :host([variant="text"][inverted]) {
    --_nys-button-height: fit-content;
    --_nys-button-border-radius--start: var(--nys-radius-md, 4px);
    --_nys-button-border-radius--end: var(--nys-radius-md, 4px);
    --_nys-button-padding--y: var(--nys-space-2px, 2px);
    --_nys-button-padding--x: var(--nys-space-50, 4px);
    --_nys-button-border-width: 0px;
    --_nys-button-text-decoration: underline;

    /* Text Inverted - Default */
    --_nys-button-background-color: var(
      --nys-button-background-color,
      var(--nys-color-transparent, #ffffff00)
    );
    --_nys-button-color: var(
      --nys-button-color,
      var(--nys-color-link-reverse, #a7a9ab)
    );
    --_nys-button-border-color: var(
      --nys-button-border-color,
      var(--nys-color-transparent, #ffffff00)
    );

    /* Text Inverted - Hover */
    --_nys-button-background-color--hover: var(
      --nys-button-background-color--hover,
      var(--nys-color-transparent, #ffffff00)
    );
    --_nys-button-color--hover: var(
      --nys-button-color--hover,
      var(--nys-color-link-reverse-strong, #ededed)
    );
    --_nys-button-border-color--hover: var(
      --nys-button-border-color--hover,
      var(--nys-color-transparent, #ffffff00)
    );

    /* Text Inverted - Pressed/Active */
    --_nys-button-background-color--active: var(
      --nys-button-background-color--active,
      var(--nys-color-transparent, #ffffff00)
    );
    --_nys-button-color--active: var(
      --nys-button-color--active,
      var(--nys-color-reverse-strongest, #ffffff)
    );
    --_nys-button-border-color--active: var(
      --nys-button-border-color--active,
      var(--nys-color-transparent, #ffffff00)
    );

    /* Text Inverted - Disabled */
    --_nys-button-background-color--disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
    --_nys-button-color--disabled: var(
      --nys-color-text-reverse-disabled,
      #62666a
    );
    --_nys-button-border-color--disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
  }

  /* Ghost Inverted */
  :host([variant="ghost"][inverted]) {
    /* Ghost Inverted - Default */
    --_nys-button-background-color: var(
      --nys-button-background-color,
      var(--nys-color-transparent, #ffffff00)
    );
    --_nys-button-color: var(
      --nys-button-color,
      var(--nys-color-text-reverse, #ffffff)
    );
    --_nys-button-border-color: var(
      --nys-button-border-color,
      var(--nys-color-transparent, #ffffff00)
    );

    /* Ghost Inverted - Hover */
    --_nys-button-background-color--hover: var(
      --nys-button-background-color--hover,
      var(--nys-color-white-transparent-100, #ffffff1a)
    );
    --_nys-button-color--hover: var(
      --nys-button-color--hover,
      var(--nys-color-text-reverse, #ffffff)
    );
    --_nys-button-border-color--hover: var(
      --nys-button-border-color--hover,
      var(--nys-color-transparent, #ffffff00)
    );

    /* Ghost Inverted - Pressed/Active */
    --_nys-button-background-color--active: var(
      --nys-button-background-color--active,
      var(--nys-color-white-transparent-200, #ffffff33)
    );
    --_nys-button-color--active: var(
      --nys-button-color--active,
      var(--nys-color-text-reverse, #ffffff)
    );
    --_nys-button-border-color--active: var(
      --nys-button-border-color--active,
      var(--nys-color-transparent, #ffffff00)
    );

    /* Ghost Inverted - Disabled */
    --_nys-button-background-color--disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
    --_nys-button-color--disabled: var(--nys-color-text-disabled, #62666a);
    --_nys-button-border-color--disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
  }

  /* Circle */
  :host([circle]) {
    --_nys-button-width: var(--_nys-button-height);
    --_nys-button-border-radius--start: var(--nys-radius-round, 1776px);
    --_nys-button-border-radius--end: var(--nys-radius-round, 1776px);
    --_nys-button-padding--y: 0;
    --_nys-button-padding--x: 0;
  }

  .nys-button {
    width: var(--_nys-button-width);
    min-height: var(--_nys-button-height);
    height: var(--_nys-button-height);
    /* set every corner individually */
    border-start-start-radius: var(--_nys-button-border-radius--start);
    border-end-start-radius: var(--_nys-button-border-radius--start);
    border-start-end-radius: var(--_nys-button-border-radius--end);
    border-end-end-radius: var(--_nys-button-border-radius--end);
    padding: var(--_nys-button-padding--y) var(--_nys-button-padding--x);
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
    background-color: var(--_nys-button-background-color);
    color: var(--_nys-button-color);
    border: solid var(--_nys-button-border-width)
      var(--_nys-button-border-color);
    cursor: var(--_nys-button-cursor, pointer);
  }

  :host([circle]) .nys-button {
    max-width: var(--_nys-button-height);
    max-height: var(--_nys-button-height);
  }

  .nys-button:hover {
    background-color: var(--_nys-button-background-color--hover);
    color: var(--_nys-button-color--hover);
    border-color: var(--_nys-button-border-color--hover);
  }

  .nys-button:active {
    background-color: var(--_nys-button-background-color--active);
    color: var(--_nys-button-color--active);
    border-color: var(--_nys-button-border-color--active);
  }

  .nys-button:disabled,
  a[disabled] {
    background-color: var(--_nys-button-background-color--disabled);
    color: var(--_nys-button-color--disabled);
    border-color: var(--_nys-button-border-color--disabled);
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
    background-color: var(--_nys-button-background-color--disabled);
    color: var(--_nys-button-color--disabled);
    border-color: var(--_nys-button-border-color--disabled);
  }

  .nys-button * {
    cursor: var(--_nys-button-cursor, pointer);
  }

  .nys-button:disabled * {
    cursor: not-allowed;
  }

  .nys-button:focus-visible {
    outline-offset: var(--_nys-button-outline-offset);
    outline: solid var(--_nys-button-outline-width)
      var(--_nys-button-outline-color);
  }

  .nys-button__text {
    display: flex;
    align-items: center;
    user-select: none;
  }
`;var j9=Object.defineProperty,Z9=Object.getOwnPropertyDescriptor,ht=(l,r,o,s)=>{for(var c=s>1?void 0:s?Z9(r,o):r,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=(s?h(r,o,c):h(c))||c);return s&&c&&j9(r,o,c),c};let Y9=0;var Mn;const ct=(Mn=class extends Le{constructor(){super(),this.id="",this.name="",this._size="md",this.fullWidth=!1,this._variant="filled",this.inverted=!1,this.label="",this.ariaLabel="",this.ariaControls="",this.prefixIcon="",this.suffixIcon="",this.circle=!1,this.icon="",this.disabled=!1,this.form=null,this.value="",this.ariaDescription="",this._type="button",this.onClick=()=>{},this.href="",this._target="_self",this._internals=this.attachInternals()}get size(){return this._size}set size(l){this._size=Mn.VALID_SIZES.includes(l)?l:"md"}get variant(){return this._variant}set variant(l){this._variant=Mn.VALID_VARIANTS.includes(l)?l:"filled"}get type(){return this._type}set type(l){this._type=Mn.VALID_TYPES.includes(l)?l:"button"}get target(){return this._target}set target(l){this._target=Mn.VALID_TARGETS.includes(l)?l:"_self"}async getButtonElement(){var l,r;await this.updateComplete;const o=((l=this.shadowRoot)==null?void 0:l.querySelector("a.nys-button"))||null;return o||((r=this.shadowRoot)==null?void 0:r.querySelector("button.nys-button"))||null||null}connectedCallback(){super.connectedCallback(),this.id||(this.id=this._generateUniqueId())}_generateUniqueId(){return`nys-button-${Date.now()}-${Y9++}`}_manageFormAction(l){typeof this.onClick=="function"&&this.onClick(l);const r=this._internals.form;if(r)switch(this.type){case"submit":r.requestSubmit();break;case"reset":r.reset();break}}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){var l;const r=(l=this.shadowRoot)==null?void 0:l.querySelector(".nys-button");r==null||r.classList.remove("active-focus"),this.dispatchEvent(new Event("nys-blur"))}_handleClick(l){if(this.disabled){l.preventDefault();return}this._manageFormAction(l),this.dispatchEvent(new Event("nys-click"))}_handleKeydown(l){if(l.code==="Space"||l.code==="Enter"||l.key===" "||l.key==="Enter"){if(this.disabled)return;if(l.preventDefault(),this.href){const r=this.renderRoot.querySelector("a.nys-button");r&&r.click()}else this._handleClick(l)}}focus(l){const r=this.renderRoot.querySelector(this.href?"a.nys-button":"button.nys-button");r?r.focus(l):super.focus(l)}render(){return Y`
      ${this.href?Y`
            <div class="nys-button__linkwrapper">
              <a
                class="nys-button"
                id=${_e(this.id)}
                name=${_e(this.name?this.name:void 0)}
                ?disabled=${this.disabled}
                aria-disabled="${this.disabled?"true":"false"}"
                value=${_e(this.value?this.value:void 0)}
                href=${this.href}
                target=${this.target}
                aria-label=${_e(this.ariaLabel||this.label||(this.circle?this.icon:null)||"button")}
                aria-description=${_e(this.ariaDescription||void 0)}
                @click=${this._handleClick}
                @focus="${this._handleFocus}"
                @blur="${this._handleBlur}"
                @keydown="${this._handleKeydown}"
                role="button"
                tabindex="${this.disabled?-1:0}"
              >
                ${this.prefixIcon&&this.variant!=="text"?Y`<slot name="prefix-icon">
                      <nys-icon size="16" name=${this.prefixIcon}></nys-icon>
                    </slot>`:""}
                ${this.label&&!this.circle?Y`<div class="nys-button__text">${this.label}</div>`:""}
                ${this.suffixIcon&&this.variant!=="text"?Y`<slot name="suffix-icon">
                      <nys-icon size="16" name=${this.suffixIcon}></nys-icon>
                    </slot>`:""}
                ${this.circle&&this.icon?Y`<slot name="circle-icon"
                      ><nys-icon
                        size=${this.size==="sm"?"24":this.size==="lg"?"40":"32"}
                        name=${this.icon}
                      ></nys-icon
                    ></slot>`:""}
              </a>
            </div>
          `:Y`
            <button
              class="nys-button"
              id=${_e(this.id)}
              name=${_e(this.name?this.name:void 0)}
              ?disabled=${this.disabled}
              form=${_e(this.form||void 0)}
              value=${_e(this.value?this.value:void 0)}
              type=${this.type}
              aria-controls=${_e(this.ariaControls||void 0)}
              aria-label=${_e(this.ariaLabel||this.label||(this.circle?this.icon:null)||this.prefixIcon||this.suffixIcon||"button")}
              aria-description=${_e(this.ariaDescription||void 0)}
              onclick="${this.onClick}"
              @click=${this._handleClick}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
              @keydown="${this._handleKeydown}"
              role="button"
            >
              ${this.prefixIcon&&this.variant!=="text"?Y`<slot name="prefix-icon">
                    <nys-icon size="16" name=${this.prefixIcon}></nys-icon>
                  </slot>`:""}
              ${this.label&&!this.circle?Y`<div class="nys-button__text">${this.label}</div>`:""}
              ${this.suffixIcon&&this.variant!=="text"?Y`<slot name="suffix-icon">
                    <nys-icon size="16" name=${this.suffixIcon}></nys-icon>
                  </slot>`:""}
              ${this.circle&&this.icon?Y`<slot name="circle-icon">
                    <nys-icon
                      size=${this.size==="sm"?"24":this.size==="lg"?"40":"32"}
                      name=${this.icon}
                    ></nys-icon>
                  </slot>`:""}
            </button>
          `}
    `}},Mn.VALID_SIZES=["sm","md","lg"],Mn.VALID_VARIANTS=["filled","outline","ghost","text"],Mn.VALID_TYPES=["submit","reset","button"],Mn.VALID_TARGETS=["_self","_blank","_parent","_top","framename"],Mn.styles=q9,Mn.formAssociated=!0,Mn);ht([m({type:String})],ct.prototype,"id",2);ht([m({type:String,reflect:!0})],ct.prototype,"name",2);ht([m({reflect:!0})],ct.prototype,"size",1);ht([m({type:Boolean,reflect:!0})],ct.prototype,"fullWidth",2);ht([m({reflect:!0})],ct.prototype,"variant",1);ht([m({type:Boolean,reflect:!0})],ct.prototype,"inverted",2);ht([m({type:String})],ct.prototype,"label",2);ht([m({type:String})],ct.prototype,"ariaLabel",2);ht([m({type:String})],ct.prototype,"ariaControls",2);ht([m({type:String})],ct.prototype,"prefixIcon",2);ht([m({type:String})],ct.prototype,"suffixIcon",2);ht([m({type:Boolean,reflect:!0})],ct.prototype,"circle",2);ht([m({type:String})],ct.prototype,"icon",2);ht([m({type:Boolean,reflect:!0})],ct.prototype,"disabled",2);ht([m({type:String,reflect:!0})],ct.prototype,"form",2);ht([m({type:String})],ct.prototype,"value",2);ht([m({type:String})],ct.prototype,"ariaDescription",2);ht([m({reflect:!0})],ct.prototype,"type",1);ht([m({type:Function})],ct.prototype,"onClick",2);ht([m({type:String})],ct.prototype,"href",2);ht([m({reflect:!0})],ct.prototype,"target",1);let Qd=ct;customElements.get("nys-button")||customElements.define("nys-button",Qd);const G9=Qe`
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
`;var X9=Object.defineProperty,Q9=Object.getOwnPropertyDescriptor,cr=(l,r,o,s)=>{for(var c=s>1?void 0:s?Q9(r,o):r,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=(s?h(r,o,c):h(c))||c);return s&&c&&X9(r,o,c),c},xa;const ka=(xa=class extends Le{constructor(){super(...arguments),this.id="",this.name="",this._size="md",this._intent="neutral",this.prefixLabel="",this.label="",this._prefixIcon="",this._suffixIcon=""}get size(){return this._size}set size(l){this._size=xa.VALID_SIZES.includes(l)?l:"md"}get intent(){return this._intent}set intent(l){this._intent=xa.VALID_INTENT.includes(l)?l:"neutral"}get prefixIcon(){return this._prefixIcon}set prefixIcon(l){l===""||l===null?this._prefixIcon=!0:l==="false"||l===!1?this._prefixIcon="":this._prefixIcon=l}get suffixIcon(){return this._suffixIcon}set suffixIcon(l){l===""||l===null?this._suffixIcon=!0:l==="false"||l===!1?this._suffixIcon="":this._suffixIcon=l}connectedCallback(){super.connectedCallback();const l=this.getAttribute("prefixicon");l!==null&&this.prefixIcon===""&&(this.prefixIcon=l);const r=this.getAttribute("suffixicon");r!==null&&this.suffixIcon===""&&(this.suffixIcon=r)}resolveIcon(l){return l===!0?xa.DEFAULT_ICONS[this.intent]??"info":typeof l=="string"&&l.trim()!==""?l:null}render(){const l=this.resolveIcon(this.prefixIcon),r=this.resolveIcon(this.suffixIcon);return Y`
      <div class="nys-badge">
        ${l?Y`<nys-icon size="16" name=${l}></nys-icon>`:""}
        ${this.prefixLabel?Y`<div class="nys-badge__prefix">${this.prefixLabel}</div>`:""}
        <div class="nys-badge__label">${this.label}</div>
        ${r?Y`<nys-icon size="16" name=${r}></nys-icon>`:""}
      </div>
    `}},xa.VALID_SIZES=["sm","md"],xa.VALID_INTENT=["neutral","error","success","warning"],xa.styles=G9,xa.DEFAULT_ICONS={neutral:"info",error:"emergency_home",success:"check_circle",warning:"warning"},xa);cr([m({type:String})],ka.prototype,"id",2);cr([m({type:String,reflect:!0})],ka.prototype,"name",2);cr([m({reflect:!0})],ka.prototype,"size",1);cr([m({reflect:!0})],ka.prototype,"intent",1);cr([m({type:String})],ka.prototype,"prefixLabel",2);cr([m({type:String})],ka.prototype,"label",2);cr([m({type:String,attribute:"prefixicon"})],ka.prototype,"prefixIcon",1);cr([m({type:String,attribute:"suffixicon"})],ka.prototype,"suffixIcon",1);let F9=ka;customElements.get("nys-badge")||customElements.define("nys-badge",F9);const Fd=Qe`
  :host {
    /* Anything that can be overridden should be defined here */

    /* Global Checkbox Styles */
    --_nys-checkbox-size: var(--nys-size-400, 32px);
    --_nys-checkbox-border-radius: var(--nys-radius-md, 4px);
    --_nys-checkbox-border-width: var(--nys-border-width-md, 2px);
    --_nys-checkbox-outline-color: var(--nys-color-focus, #004dd1);
    --_nys-checkbox-outline-width: var(--nys-border-width-md, 2px);
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
    --_nys-checkbox-font-weight: var(--nys-font-weight-regular, 400);
    --_nys-checkbox-line-height: var(--nys-font-lineheight-ui-md, 24px);

    /* Global Checkbox Colors */
    --_nys-checkbox-color: var(
      --nys-color-ink,
      var(--nys-color-neutral-900, #1b1b1b)
    );

    /* Default (Empty) */
    --_nys-checkbox-background-color: var(--nys-color-ink-reverse, #ffffff);
    --_nys-checkbox-border-color: var(--nys-color-neutral-600, #62666a);
    /* Empty + Hovered */
    --_nys-checkbox-background-color--hover: var(
      --nys-color-neutral-50,
      #ededed
    );
    --_nys-checkbox-border-color--hover: var(--nys-color-ink, #1b1b1b);
    /* Empty + Pressed */
    --_nys-checkbox-background-color--active: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
    --_nys-checkbox-border-color--active: var(--nys-color-ink, #1b1b1b);
    /* Checked */
    --_nys-checkbox-background-color--checked: var(--nys-color-theme, #154973);
    --_nys-checkbox-border-color--checked: var(--nys-color-theme, #154973);
    /* Checked + Hovered */
    --_nys-checkbox-background-color--checked--hover: var(
      --nys-color-theme-strong,
      #0e324f
    );
    --_nys-checkbox-border-color--checked--hover: var(
      --nys-color-theme-strong,
      #0e324f
    );
    /* Checked + Pressed */
    --_nys-checkbox-background-color--checked--active: var(
      --nys-color-theme-stronger,
      #081b2b
    );
    --_nys-checkbox-border-color--checked--active: var(
      --nys-color-theme-stronger,
      #081b2b
    );
    /* Disabled */
    --_nys-checkbox-background-color--disabled: var(
      --nys-color-ink-reverse,
      #f0f0f0
    );
    --_nys-checkbox-border-color--disabled: var(
      --nys-color-neutral-400,
      #757575
    );
    --_nys-checkbox-color--disabled: var(--nys-color-text-disabled, #bec0c1);
    /* Disabled Checked */
    --_nys-checkbox-background-color--checked--disabled: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
    --_nys-checkbox-border-color--checked--disabled: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
  }

  /* Small Variant */
  :host([size="sm"]) {
    --_nys-checkbox-size: var(--nys-size-300, 24px);
    --_nys-checkbox-border-radius: var(--nys-radius-sm, 2px);
    --_nys-checkboxgroup-gap: var(--nys-space-100, 8px);
    --_nys-checkbox-gap: var(--nys-space-100, 8px);
  }
  /* Medium Variant */
  :host([size="md"]) {
    --_nys-checkbox-size: var(--nys-size-400, 32px);
    --_nys-checkbox-border-radius: var(--nys-radius-md, 4px);
  }

  /* Tile Variant */
  :host([tile]) {
    --_nys-checkbox-border-width--tile: var(--nys-border-width-sm, 1px);
    --_nys-checkbox-border-radius--tile: var(--nys-radius-md, 4px);
    --_nys-checkbox-border-color--tile: var(--nys-color-neutral-100, #d0d0ce);
    --_nys-checkbox-background-color--tile: var(
      --nys-color-ink-reverse,
      #ffffff
    );
    --_nys-checkbox-padding--x--tile: var(--nys-space-250, 20px);
    --_nys-checkbox-padding--y--tile: var(--nys-space-200, 16px);
    /* Hover */
    --_nys-checkbox-border-color--tile--hover: var(
      --nys-color-neutral-700,
      #4a4d4f
    );
    --_nys-checkbox-background-color--tile--hover: var(
      --nys-color-ink-reverse,
      #ffffff
    );
    /* Pressed */
    --_nys-checkbox-border-color--tile--active: var(
      --nys-color-neutral-900,
      #1b1b1b
    );
    --_nys-checkbox-background-color--tile--active: var(
      --nys-color-ink-reverse,
      #ffffff
    );
    /* Checked */
    --_nys-checkbox-border-color--tile--checked: var(
      --nys-color-theme-mid,
      #457aa5
    );
    --_nys-checkbox-background-color--tile--checked: var(
      --nys-color-theme-faint,
      #f7fafd
    );
    /* Disabled */
    --_nys-checkbox-background-color--tile--disabled: var(
      --nys-color-ink-reverse,
      #f0f0f0
    );
    --_nys-checkbox-border-color--tile--disabled: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
  }

  :host([tile][size="sm"]) {
    --_nys-checkbox-padding--x--tile: var(--nys-space-200, 16px);
    --_nys-checkbox-padding--y--tile: var(--nys-space-150, 12px);
  }

  :host([tile][showError]) {
    --_nys-checkbox-border-color--tile: var(--nys-color-danger, #b52c2c);
    --_nys-checkbox-border-color--tile--hover: var(--nys-color-danger, #b52c2c);
    --_nys-checkbox-border-color--tile--active: var(
      --nys-color-danger,
      #b52c2c
    );
    --_nys-checkbox-border-color--tile--checked: var(
      --nys-color-danger,
      #b52c2c
    );
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
    border-radius: var(--_nys-checkbox-border-radius--tile);
    border: var(--_nys-checkbox-border-width--tile) solid
      var(--_nys-checkbox-border-color--tile);
    background: var(--_nys-checkbox-background-color--tile);
    padding: var(--_nys-checkbox-padding--y--tile)
      var(--_nys-checkbox-padding--x--tile);
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
    border: solid var(--_nys-checkbox-border-width)
      var(--_nys-checkbox-border-color);
    background-color: var(--_nys-checkbox-background-color);
    border-radius: var(--_nys-checkbox-border-radius);
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
    background-color: var(--_nys-checkbox-background-color--checked);
    border-color: var(--_nys-checkbox-border-color--checked);
  }
  :host([tile])
    .nys-checkbox:has(.nys-checkbox__checkbox:not(:disabled):checked) {
    border-color: var(--_nys-checkbox-border-color--tile--checked);
    background-color: var(--_nys-checkbox-background-color--tile--checked);
  }

  /* Checked + Disabled */
  .nys-checkbox__checkbox:disabled:checked {
    background-color: var(--_nys-checkbox-background-color--checked--disabled);
    border-color: var(--_nys-checkbox-border-color--checked--disabled);
  }
  :host([tile]) .nys-checkbox:has(.nys-checkbox__checkbox:disabled:checked) {
    border-color: var(--_nys-checkbox-border-color--tile--disabled);
    background-color: var(--_nys-checkbox-background-color--tile--disabled);
  }

  /* Disabled */
  .nys-checkbox__checkbox:disabled {
    background-color: var(--_nys-checkbox-background-color--disabled);
    border-color: var(--_nys-checkbox-border-color--disabled);
    cursor: not-allowed;
  }
  .nys-checkbox:has(.nys-checkbox__checkbox:disabled) * {
    color: var(--_nys-checkbox-color--disabled);
    cursor: not-allowed;
    --_nys-label-cursor: not-allowed;
    --_nys-label-color: var(--_nys-checkbox-color--disabled);
  }
  :host([tile]) .nys-checkbox:has(.nys-checkbox__checkbox:disabled) {
    background-color: var(--_nys-checkbox-background-color--disabled);
    border-color: var(--_nys-checkbox-border-color--disabled);
    cursor: not-allowed;
  }

  /* Hover - not checked */
  .nys-checkbox__checkbox:hover:not(:disabled):not(:checked) {
    background-color: var(--_nys-checkbox-background-color--hover);
    border-color: var(--_nys-checkbox-border-color--hover);
  }
  :host([tile])
    .nys-checkbox:hover:has(
      .nys-checkbox__checkbox:not(:disabled):not(:checked)
    ) {
    border-color: var(--_nys-checkbox-border-color--tile--hover);
    background-color: var(--_nys-checkbox-background-color--tile--hover);
    outline: solid var(--_nys-checkbox-border-width--tile)
      var(--_nys-checkbox-border-color--tile--hover);
  }

  /* Hover + Checked */
  .nys-checkbox__checkbox:hover:not(:disabled):checked {
    border-color: var(--_nys-checkbox-border-color--checked--hover);
    background-color: var(--_nys-checkbox-background-color--checked--hover);
  }
  :host([tile])
    .nys-checkbox:hover:has(.nys-checkbox__checkbox:not(:disabled):checked) {
    outline: solid var(--_nys-checkbox-border-width--tile)
      var(--_nys-checkbox-border-color--tile--checked);
  }

  /* Pressed - not checked */
  .nys-checkbox__checkbox:active:not(:disabled):not(:checked) {
    background-color: var(--_nys-checkbox-background-color--active);
    border-color: var(--_nys-checkbox-border-color--active);
  }
  :host([tile])
    .nys-checkbox:has(
      .nys-checkbox__checkbox:active:not(:disabled):not(:checked)
    ) {
    border-color: var(--_nys-checkbox-border-color--tile--active);
    background-color: var(--_nys-checkbox-background-color--tile--active);
    outline: solid var(--_nys-checkbox-border-width--tile)
      var(--_nys-checkbox-border-color--tile--active);
  }

  /* Pressed + Checked */
  .nys-checkbox__checkbox:active:not(:disabled):checked {
    border-color: var(--_nys-checkbox-border-color--checked--active);
    background-color: var(--_nys-checkbox-background-color--checked--active);
  }

  /* Focused */
  :host(:not([tile])) .nys-checkbox__checkbox:focus {
    outline: solid var(--_nys-checkbox-outline-width)
      var(--_nys-checkbox-outline-color);
  }
  :host([tile]) .nys-checkbox:has(*:focus) {
    outline: solid var(--_nys-checkbox-border-width--tile)
      var(--_nys-checkbox-outline-color) !important;
    border-color: var(--_nys-checkbox-outline-color) !important;
  }

  :host(:not([tile])) .nys-checkbox > nys-label {
    --_nys-label-font-weight: var(--_nys-checkbox-font-weight);
  }

  :host([tile]) .nys-checkbox > nys-label {
    --_nys-description-font-style: normal;
  }

  /* Required */
  .nys-checkbox__required {
    color: var(--nys-color-danger, #b52c2c);
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
`;var K9=Object.defineProperty,P9=Object.getOwnPropertyDescriptor,dn=(l,r,o,s)=>{for(var c=s>1?void 0:s?P9(r,o):r,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=(s?h(r,o,c):h(c))||c);return s&&c&&K9(r,o,c),c};let J9=0;var $l;const Jt=($l=class extends Le{constructor(){super(),this.id="",this.name="",this.required=!1,this.optional=!1,this.showError=!1,this.errorMessage="",this.label="",this.description="",this.tile=!1,this._tooltip="",this.form=null,this._slottedDescriptionText="",this._size="md",this._internals=this.attachInternals()}get size(){return this._size}set size(l){this._size=$l.VALID_SIZES.includes(l)?l:"md"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-checkbox-${Date.now()}-${J9++}`),this.addEventListener("nys-change",this._handleCheckboxChange),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("nys-change",this._handleCheckboxChange),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setGroupExist(),this._updateCheckboxSize(),this._updateCheckboxTile(),this._updateCheckboxShowError(),this._getSlotDescriptionForAria()}updated(l){l.has("required")&&this.required&&this._setupCheckboxRequired(),l.has("size")&&this._updateCheckboxSize(),l.has("tile")&&this._updateCheckboxTile(),l.has("showError")&&this._updateCheckboxShowError(),l.has("form")&&this._updateCheckboxForm()}_setGroupExist(){this.querySelectorAll("nys-checkbox").forEach(l=>{l.groupExist=!0})}async _setupCheckboxRequired(){const l=this.querySelector("nys-checkbox"),r=this.errorMessage||"This field is required",o=l?await l.getInputElement():null;this._internals.setValidity({valueMissing:!0},r,o||this)}async _manageRequire(){if(this.required){const l=this.errorMessage||"Please select at least one option.",r=this.querySelector("nys-checkbox"),o=r?await r.getInputElement().catch(()=>null):null,s=this.querySelectorAll("nys-checkbox");Array.from(s).some(c=>c.checked)?(this._internals.setValidity({}),this.showError=!1):(this._internals.setValidity({valueMissing:!0},l,o||this),this.showError=!0)}}_updateCheckboxSize(){this.querySelectorAll("nys-checkbox").forEach(l=>{l.setAttribute("size",this.size)})}_updateCheckboxTile(){this.querySelectorAll("nys-checkbox").forEach(l=>{this.tile?l.toggleAttribute("tile",!0):l.removeAttribute("tile")})}_updateCheckboxShowError(){this.querySelectorAll("nys-checkbox").forEach(l=>{this.showError?l.setAttribute("showError",""):l.removeAttribute("showError")})}_updateCheckboxForm(){this.querySelectorAll("nys-checkbox").forEach(l=>{this.showError&&this.form!==null?l.setAttribute("form",this.form):l.removeAttribute("form")})}_getSlotDescriptionForAria(){var l;const r=(l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="description"]'),o=(r==null?void 0:r.assignedNodes({flatten:!0}))||[];this._slottedDescriptionText=o.map(s=>{var c;return(c=s.textContent)==null?void 0:c.trim()}).filter(Boolean).join(", ")}async _handleInvalid(l){l.preventDefault(),this.showError=!0,this._manageRequire();const r=this.querySelector("nys-checkbox"),o=r?await r.getInputElement():null;if(o){const s=this._internals.form;s?Array.from(s.elements).find(c=>{if(c.tagName.toLowerCase()==="nys-checkboxgroup"){if(Array.from(this.querySelectorAll("nys-checkbox")).filter(d=>d.checked).length===0)return c}else return typeof c.checkValidity=="function"&&!c.checkValidity()})===this&&o.focus():o.focus()}}_handleCheckboxChange(l){const r=l,{name:o}=r.detail,s=Array.from(this.querySelectorAll("nys-checkbox")).filter(c=>c.checked).map(c=>c.value);this.name=o,this._internals.setFormValue(s.join(", ")),this._manageRequire()}render(){return Y`
      <div class="nys-checkboxgroup">
        <nys-label
          for=${this.id}
          label=${this.label}
          description=${this.description}
          flag=${this.required?"required":this.optional?"optional":""}
          tooltip=${this._tooltip}
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
    `}},$l.VALID_SIZES=["sm","md"],$l.styles=Fd,$l.formAssociated=!0,$l);dn([m({type:String})],Jt.prototype,"id",2);dn([m({type:String,reflect:!0})],Jt.prototype,"name",2);dn([m({type:Boolean,reflect:!0})],Jt.prototype,"required",2);dn([m({type:Boolean,reflect:!0})],Jt.prototype,"optional",2);dn([m({type:Boolean,reflect:!0})],Jt.prototype,"showError",2);dn([m({type:String})],Jt.prototype,"errorMessage",2);dn([m({type:String})],Jt.prototype,"label",2);dn([m({type:String})],Jt.prototype,"description",2);dn([m({type:Boolean,reflect:!0})],Jt.prototype,"tile",2);dn([m({type:String})],Jt.prototype,"_tooltip",2);dn([m({type:String,reflect:!0})],Jt.prototype,"form",2);dn([Yt()],Jt.prototype,"_slottedDescriptionText",2);dn([m({reflect:!0})],Jt.prototype,"size",1);let Kd=Jt;customElements.get("nys-checkboxgroup")||customElements.define("nys-checkboxgroup",Kd);var W9=Object.defineProperty,I9=Object.getOwnPropertyDescriptor,Wt=(l,r,o,s)=>{for(var c=s>1?void 0:s?I9(r,o):r,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=(s?h(r,o,c):h(c))||c);return s&&c&&W9(r,o,c),c};let ef=0;var Ol;const Gt=(Ol=class extends Le{constructor(){super(),this.checked=!1,this.disabled=!1,this.required=!1,this.label="",this.description="",this.id="",this.name="",this.value="",this.form=null,this.showError=!1,this.errorMessage="",this.groupExist=!1,this.tile=!1,this._size="md",this._manageLabelClick=()=>{var l,r;const o=(l=this.shadowRoot)==null?void 0:l.querySelector("nys-label"),s=(r=this.shadowRoot)==null?void 0:r.querySelector("input");o&&s&&o.addEventListener("click",()=>s.click())},this._internals=this.attachInternals()}get size(){return this._size}set size(l){this._size=Ol.VALID_SIZES.includes(l)?l:"md"}async getInputElement(){var l;return await this.updateComplete,((l=this.shadowRoot)==null?void 0:l.querySelector("input"))||null}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-checkbox-${Date.now()}-${ef++}`),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue(),this._manageRequire(),this._manageLabelClick()}formResetCallback(){this.checked=!1}_setValue(){this.groupExist||this._internals.setFormValue(this.checked?this.value:null)}_manageRequire(){var l;const r=(l=this.shadowRoot)==null?void 0:l.querySelector("input"),o=this.errorMessage||"This field is required";r&&(this.required&&!this.checked?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},o,r)):this._internals.setValidity({}))}_setValidityMessage(l=""){var r,o;const s=(r=this.shadowRoot)==null?void 0:r.querySelector("input");s&&(this.showError=!!l,(o=this.errorMessage)!=null&&o.trim()&&l!==""&&(l=this.errorMessage),this._internals.setValidity(l?{customError:!0}:{},l,s))}_validate(){var l;const r=(l=this.shadowRoot)==null?void 0:l.querySelector("input");if(!r)return;const o=r.validity;let s="";o.valueMissing&&(s="This field is required"),this._setValidityMessage(s)}checkValidity(){var l;if(this.required&&!this.checked)return!1;const r=(l=this.shadowRoot)==null?void 0:l.querySelector("input");return r?r.checkValidity():!0}_handleInvalid(l){var r;l.preventDefault(),this.showError=!0,this._validate();const o=(r=this.shadowRoot)==null?void 0:r.querySelector("input");if(o){const s=this._internals.form;s?Array.from(s.elements).find(c=>typeof c.checkValidity=="function"&&!c.checkValidity())===this&&o.focus():o.focus()}}_emitChangeEvent(){this.dispatchEvent(new CustomEvent("nys-change",{detail:{id:this.id,checked:this.checked,name:this.name,value:this.value},bubbles:!0,composed:!0}))}_handleChange(l){const{checked:r}=l.target;this.checked=r,this.groupExist||this._internals.setFormValue(this.checked?this.value:null),this._validate(),this._emitChangeEvent()}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this.dispatchEvent(new Event("nys-blur"))}async _handleKeydown(l){l.code==="Space"&&(l.preventDefault(),this.disabled||(this.checked=!this.checked,this._internals.setFormValue(this.checked?this.value:null),await this.updateComplete,this._validate(),this._emitChangeEvent()))}render(){var l;return Y`
      <label class="nys-checkbox">
        <div class="nys-checkbox__checkboxwrapper">
          <input
            id="${this.id}"
            class="nys-checkbox__checkbox"
            type="checkbox"
            name="${_e(this.name?this.name:void 0)}"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            .value=${this.value}
            ?required="${this.required}"
            form=${_e(this.form||void 0)}
            aria-checked="${this.checked}"
            aria-disabled="${this.disabled?"true":"false"}"
            aria-required="${this.required}"
            aria-describedby="group-info"
            @change="${this._handleChange}"
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
            @keydown="${this._handleKeydown}"
            aria-label="${this.label}"
          />
          ${this.checked?Y`<nys-icon
                for="${this.id}"
                name="check"
                size="${this.size==="md"?"4xl":this.size==="sm"?"2xl":"xl"}"
                class="nys-checkbox__icon"
              ></nys-icon>`:""}
        </div>
        ${this.label&&Y`
          <nys-label
            for=${this.id}
            label=${this.label}
            description=${_e(this.description??void 0)}
            flag=${_e(this.required?"required":void 0)}
          >
            <slot name="description" slot="description"
              >${this.description}</slot
            >
          </nys-label>
        `}
      </label>
      ${((l=this.parentElement)==null?void 0:l.tagName.toLowerCase())!=="nys-checkboxgroup"?Y`<nys-errormessage
            id="single-error-message"
            ?showError=${this.showError}
            errorMessage=${this._internals.validationMessage||this.errorMessage}
            .showDivider=${!this.tile}
          ></nys-errormessage>`:""}
    `}},Ol.VALID_SIZES=["sm","md"],Ol.styles=Fd,Ol.formAssociated=!0,Ol);Wt([m({type:Boolean,reflect:!0})],Gt.prototype,"checked",2);Wt([m({type:Boolean,reflect:!0})],Gt.prototype,"disabled",2);Wt([m({type:Boolean,reflect:!0})],Gt.prototype,"required",2);Wt([m({type:String})],Gt.prototype,"label",2);Wt([m({type:String})],Gt.prototype,"description",2);Wt([m({type:String})],Gt.prototype,"id",2);Wt([m({type:String,reflect:!0})],Gt.prototype,"name",2);Wt([m({type:String})],Gt.prototype,"value",2);Wt([m({type:String,reflect:!0})],Gt.prototype,"form",2);Wt([m({type:Boolean,reflect:!0})],Gt.prototype,"showError",2);Wt([m({type:String})],Gt.prototype,"errorMessage",2);Wt([m({type:Boolean})],Gt.prototype,"groupExist",2);Wt([m({type:Boolean,reflect:!0})],Gt.prototype,"tile",2);Wt([m({reflect:!0})],Gt.prototype,"size",1);let Pd=Gt;customElements.get("nys-checkbox")||customElements.define("nys-checkbox",Pd);const tf=Qe`
  :host {
    /* Anything that can be overridden should be defined here */

    /* Global Divider Styles */
    --_nys-divider-size: var(--nys-size-1px, 1px);
    --_nys-divider-color: var(--nys-color-neutral-200, #bec0c1);
    --_nys-divider-width: 100%;
  }
  /* Inverted */
  :host([inverted]) {
    --_nys-divider-color: var(--nys-color-ink-reverse, #fff);
  }

  .nys-divider {
    width: var(--_nys-divider-width);
    height: var(--_nys-divider-size);
    background-color: var(--_nys-divider-color);
    flex: 1 0 0;
    margin: 0;
    border: none;
  }
`;var nf=Object.defineProperty,af=(l,r,o,s)=>{for(var c=void 0,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=h(r,o,c)||c);return c&&nf(r,o,c),c};const Jd=class extends Le{constructor(){super(),this.inverted=!1}render(){return Y`<hr class="nys-divider" />`}};Jd.styles=tf;let Z5=Jd;af([m({type:Boolean,reflect:!0})],Z5.prototype,"inverted");customElements.get("nys-divider")||customElements.define("nys-divider",Z5);const rf=Qe`
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
    --_nys-errormessage-color: var(--nys-color-danger, #b52c2c);

    /* Spacing */
    --_nys-errormessage-gap: var(--nys-space-100, 8px);
    --_nys-errormessage-padding--divider: var(--nys-space-50, 4px);
    --_nys-errormessage-width--divider: var(--nys-border-width-sm, 1px);

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
    padding-top: var(--_nys-errormessage-padding--divider);
    margin-top: var(--_nys-errormessage-padding--divider);
    border-top: var(--_nys-errormessage-width--divider) solid
      var(--_nys-errormessage-color);
  }
`;var lf=Object.defineProperty,Y5=(l,r,o,s)=>{for(var c=void 0,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=h(r,o,c)||c);return c&&lf(r,o,c),c};const E5=class extends Le{constructor(){super(),this.showError=!1,this.errorMessage="",this.showDivider=!1,this._internals=this.attachInternals()}render(){return Y`${this.showError?Y`<div class="nys-errormessage" ?showDivider=${this.showDivider}>
          <nys-icon name="error" size="2xl"></nys-icon>
          ${this._internals.validationMessage||this.errorMessage}
        </div>`:""}`}};E5.styles=rf,E5.formAssociated=!0;let Ji=E5;Y5([m({type:Boolean})],Ji.prototype,"showError");Y5([m({type:String})],Ji.prototype,"errorMessage");Y5([m({type:Boolean,reflect:!0})],Ji.prototype,"showDivider");customElements.get("nys-errormessage")||customElements.define("nys-errormessage",Ji);async function of(l,r){if(!r||r.trim()==="")return!0;const o=r.toLowerCase().split(",").map(d=>d.trim()),s=l.name.toLowerCase(),c=s.includes(".")?s.split(".").pop():"";for(const d of o)if(d.startsWith(".")&&d.slice(1)===c||d.endsWith("/*")&&l.type.startsWith(d.slice(0,-1))||l.type===d)return!0;return!1}const sf=Qe`
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
    --_nys-fileinput-background-color--dropzone: var(
      --nys-color-ink-reverse,
      #fff
    );
    --_nys-fileinput-background-color--dropzone--disabled: var(
      --nys-color-neutral-10,
      #f6f6f6
    );
    --_nys-fileinput-background-color--dropzone--active: var(
      --nys-color-theme-faint,
      #f7fafd
    );
    --_nys-fileinput-border-radius--dropzone: var(
      --nys-radius-lg,
      var(--nys-space-100, 8px)
    );
    --_nys-fileinput-border-style: dashed;
    --_nys-fileinput-border-color: var(--nys-color-neutral-200, #bec0c1);
    --_nys-fileinput-border-width: var(--nys-border-width-sm, 1px);
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

  /***** Dropzone *****/
  .nys-fileinput__dropzone {
    display: flex;
    padding: var(--nys-space-400, 32px) var(--nys-space-200, 16px);
    justify-content: center;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    border-radius: var(--_nys-fileinput-border-radius--dropzone);
    outline: var(--_nys-fileinput-border-width)
      var(--_nys-fileinput-border-style) var(--_nys-fileinput-border-color);
    background-color: var(--_nys-fileinput-background-color--dropzone);
    transition: all 60ms ease-in-out;
  }

  .nys-fileinput__dropzone:hover {
    cursor: pointer;
    --_nys-fileinput-border-width: var(--nys-border-width-md, 2px);
    --_nys-fileinput-border-color: var(--nys-color-neutral-700, #4a4d4f);
  }

  .nys-fileinput__dropzone.drag-active {
    --_nys-fileinput-border-width: var(--nys-border-width-md, 2px);
    --_nys-fileinput-border-color: var(--nys-color-theme, #154973);
    --_nys-fileinput-border-style: solid;
  }

  .nys-fileinput__dropzone.error {
    --_nys-fileinput-border-color: var(--nys-color-danger, #b52c2c);
  }

  .nys-fileinput__dropzone.error:hover {
    --_nys-fileinput-border-width: var(--nys-border-width-md, 2px);
    --_nys-fileinput-border-color: var(--nys-color-emergency, #721c1c);
  }

  .nys-fileinput__dropzone.disabled {
    cursor: not-allowed;
    --_nys-fileinput-border-color: var(--nys-color-neutral-300, #a7a9ab);
    --_nys-fileinput-border-width: var(--nys-border-width-sm, 1px);
    background-color: var(
      --_nys-fileinput-background-color--dropzone--disabled
    );
    color: var(--_nys-fileinput-color--dropzone--disabled);
  }

  progress {
    display: flex;
    width: 100%;
    height: 6px;
    border-radius: var(--nys-radius-round, 1776px);
    background-color: var(--_nys-fileinput-progress-background);
    overflow: hidden;
    appearance: none;
    border: none;
  }
  progress::-moz-progress-bar {
    background-color: var(--_nys-fileinput-progress-background);
  }
  progress::-webkit-progress-value {
    background-color: var(--_nys-fileinput-progress-background);
  }
  progress::-webkit-progress-bar {
    background-color: var(--_nys-fileinput-progress-background);
  }
`,cf=Qe`
  :host {
    /* Global fileitem Styles */
    --_nys-fileitem-border-radius: var(--nys-radius-md, 4px);
    --_nys-fileitem-padding: var(--nys-space-100, 8px)
      var(--nys-space-200, 16px);
    --_nys-fileitem-background-color: var(--nys-color-ink-reverse, #fff);
    --_nys-fileitem-border-color: var(--nys-color-neutral-100, #d0d0ce);

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
    --_nys-fileitem-font-weight: var(--nys-font-weight-regular, 400);
    --_nys-fileitem-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-fileitem-letter-spacing: var(
      --nys-font-letterspacing-ui-md,
      0.044px
    );

    /* Progress Bar */
    --_nys-fileitem-background-color--progress: var(
      --nys-color-neutral-50,
      #ededed
    );
    --_nys-fileitem-background-color--progress--fill: var(
      --nys-color-info,
      #004dd1
    );
  }

  /***** File List Item *****/
  .file-item {
    position: relative;
    border-radius: var(--_nys-fileitem-border-radius);
    border-width: var(--nys-border-width-sm, 1px);
    border-style: solid;
    border-color: var(--_nys-fileitem-border-color);
    background-color: var(--_nys-fileitem-background-color);
  }

  .file-item.error {
    --_nys-fileitem-border-color: var(--nys-color-danger, #b52c2c);
  }

  .file-item__main {
    display: flex;
    justify-items: center;
    align-items: center;
    gap: var(--_nys-fileinput-gap);
    padding: var(--_nys-fileitem-padding);
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
    font-weight: var(--_nys-fileitem-font-weight);
    line-height: var(--_nys-fileitem-line-height);
    letter-spacing: var(--_nys-fileitem-letter-spacing);
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
    color: var(--nys-color-danger, #b52c2c);
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
    background: var(--_nys-fileitem-background-color--progress--fill);
    overflow: hidden;
    appearance: none;
  }
  /* Track */
  progress::-moz-progress-bar {
    background-color: var(--_nys-fileitem-background-color--progress);
  }
  /* Filled value (the blue bar) */
  progress::-webkit-progress-value {
    background-color: var(--_nys-fileitem-background-color--progress--fill);
  }
  /* Firefox */
  progress::-webkit-progress-bar {
    background-color: var(--_nys-fileitem-background-color--progress);
  }

  /**** Icon ****/
  .file-icon[name="progress_activity"] {
    animation: spin 1s linear infinite;
  }

  .file-icon[name="error"] {
    color: var(--nys-color-danger, #b52c2c);
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;var uf=Object.defineProperty,Wi=(l,r,o,s)=>{for(var c=void 0,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=h(r,o,c)||c);return c&&uf(r,o,c),c};const Wd=class extends Le{constructor(){super(...arguments),this.filename="",this.status="pending",this.progress=0,this.errorMessage=""}_handleRemove(){this.dispatchEvent(new CustomEvent("nys-fileRemove",{detail:{filename:this.filename},bubbles:!0,composed:!0}))}splitFilename(r){const o=r.lastIndexOf("."),s=o!==-1?r.slice(o):"",c=o!==-1?r.slice(0,o):r,d=c.slice(0,c.length-3),h=c.slice(-3);return{startPart:d,endPart:h,extension:s}}render(){const{startPart:r,endPart:o,extension:s}=this.splitFilename(this.filename);return Y`
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
              <span class="file-item__info-name-start">${r}</span>
              <span class="file-item__info-name-end"
                >${o}${s}</span
              >
            </div>
            ${this.errorMessage?Y`<p
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
        ${this.status==="processing"?Y`<div
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
    `}};Wd.styles=cf;let go=Wd;Wi([m({type:String})],go.prototype,"filename");Wi([m({type:String})],go.prototype,"status");Wi([m({type:Number})],go.prototype,"progress");Wi([m({type:String})],go.prototype,"errorMessage");customElements.define("nys-fileitem",go);var df=Object.defineProperty,Bt=(l,r,o,s)=>{for(var c=void 0,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=h(r,o,c)||c);return c&&df(r,o,c),c};let hf=0;const D5=class extends Le{constructor(){super(),this.id="",this.name="",this.label="",this.description="",this.multiple=!1,this.form=null,this._tooltip="",this.accept="",this.disabled=!1,this.required=!1,this.optional=!1,this.showError=!1,this.errorMessage="",this.dropzone=!1,this.width="full",this.invert=!1,this._selectedFiles=[],this._dragActive=!1,this._internals=this.attachInternals()}get _isDropDisabled(){return this.disabled||!this.multiple&&this._selectedFiles.length>0}get _buttonAriaLabel(){return this._selectedFiles.length===0?this.multiple?"Choose files: ":"Choose file: ":this.multiple?"Change files: ":"Change file: "}get _buttonAriaDescription(){if(this._selectedFiles.length===0)return`${this.label+" "+this.description}`;const r=this._selectedFiles.some(s=>s.status==="error");let o="";if(this._selectedFiles.length===1)o=`You have selected ${this._selectedFiles[0].file.name}.`;else{const s=this._selectedFiles.map(c=>c.file.name).join(", ");o=`You have selected ${this._selectedFiles.length} files: ${s}`}return`${o}${r?" Error: One or more files are not valid file types.":""}`}get _innerNysButton(){var r;const o=this.renderRoot.querySelector('[name="file-btn"]');return(r=o==null?void 0:o.shadowRoot)==null?void 0:r.querySelector("button")}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-fileinput-${Date.now()}-${hf++}`),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}_setValue(){var r;if(this.multiple){const o=this._selectedFiles.map(s=>s.file);if(o.length>0){const s=new FormData;o.forEach(c=>{s.append(this.name,c)}),this._internals.setFormValue(s)}else this._internals.setFormValue(null)}else{const o=((r=this._selectedFiles[0])==null?void 0:r.file)||null;this._internals.setFormValue(o)}this._manageRequire()}_manageRequire(){var r;const o=(r=this.shadowRoot)==null?void 0:r.querySelector("input");if(!o)return;const s=this.errorMessage||"Please upload a file.";this.required&&this._selectedFiles.length==0?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},s,o)):(this._internals.ariaRequired="false",this._internals.setValidity({},"",o))}_setValidityMessage(r=""){var o,s;const c=(o=this.shadowRoot)==null?void 0:o.querySelector("input");c&&(this.showError=r===(this.errorMessage||"Please upload a file."),(s=this.errorMessage)!=null&&s.trim()&&r!==""&&(r=this.errorMessage),this._internals.setValidity(r?{customError:!0}:{},r,c))}_validate(){const r=this._selectedFiles.some(c=>c.status==="error"),o=this.required&&this._selectedFiles.length===0;let s="";o?s=this.errorMessage||"Please upload a file.":r&&(s="One or more files are invalid."),this._setValidityMessage(s)}checkValidity(){var r;const o=(r=this.shadowRoot)==null?void 0:r.querySelector("input");return o?o.checkValidity():!0}_handleInvalid(r){r.preventDefault(),this._validate();const o=this._innerNysButton;if(o){const s=this._internals.form;s?Array.from(s.elements).find(c=>typeof c.checkValidity=="function"&&!c.checkValidity())===this&&(o.focus(),o.classList.add("active-focus")):(o.focus(),o.classList.add("active-focus"))}}async _saveSelectedFiles(r){if(this._selectedFiles.some(s=>s.file.name==r.name)||!this.multiple&&this._selectedFiles.length>=1)return;const o={file:r,progress:0,status:"pending"};this._selectedFiles.push(o),await this._processFile(o),this._setValue(),this._validate()}async _processFile(r){r.status="processing";try{if(!await of(r.file,this.accept)){r.status="error",r.errorMsg="File type is invalid.",this.requestUpdate();return}const o=new FileReader;o.onprogress=s=>{if(s.lengthComputable){const c=Math.round(s.loaded*100/s.total);r.progress=c,this.requestUpdate()}},o.onload=()=>{r.progress=100,r.status="done",this.requestUpdate()},o.onerror=()=>{r.status="error",r.errorMsg="Failed to load file.",this.requestUpdate()},o.readAsArrayBuffer(r.file)}catch{r.status="error",r.errorMsg="Error validating file.",this.requestUpdate()}}_dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("nys-change",{detail:{id:this.id,files:this._selectedFiles},bubbles:!0,composed:!0}))}_openFileDialog(){const r=this.renderRoot.querySelector(".hidden-file-input");r==null||r.click()}_handlePostFileSelectionFocus(){if(this.multiple){const r=this._innerNysButton;r&&r.focus()}else this._focusFirstFileItemIfSingleMode()}async _focusFirstFileItemIfSingleMode(){var r;if(!this.multiple){await this.updateComplete;const o=this.renderRoot.querySelector("nys-fileitem"),s=(r=o==null?void 0:o.shadowRoot)==null?void 0:r.querySelector(".file-item");s&&(s.setAttribute("tabindex","-1"),s.focus())}}_handleFileChange(r){const o=r.target.files;(o?Array.from(o):[]).map(s=>{this._saveSelectedFiles(s)}),this.requestUpdate(),this._dispatchChangeEvent(),this._handlePostFileSelectionFocus()}_handleFileRemove(r){var o;const s=r.detail.filename;if(this._selectedFiles=this._selectedFiles.filter(c=>c.file.name!==s),this._selectedFiles.length===0){const c=(o=this.shadowRoot)==null?void 0:o.querySelector("input");c&&(c.value="")}this._setValue(),this._validate(),this.requestUpdate(),this._dispatchChangeEvent()}_onDragOver(r){this.disabled||(r.stopPropagation(),r.preventDefault(),this._dragActive||(this._dragActive=!0,this.requestUpdate()))}_onDragLeave(r){this.disabled||(r.stopPropagation(),r.preventDefault(),r.currentTarget===r.target&&(this._dragActive=!1,this.requestUpdate()))}_onDrop(r){var o;if(this.disabled)return;r.preventDefault(),this._dragActive=!1,this.requestUpdate();const s=(o=r.dataTransfer)==null?void 0:o.files;if(!s)return;const c=Array.from(s);this.multiple?c.forEach(d=>{this._saveSelectedFiles(d)}):this._saveSelectedFiles(c[0]),this.requestUpdate(),this._dispatchChangeEvent()}render(){return Y`<div
      class="nys-fileinput"
      @nys-fileRemove=${this._handleFileRemove}
    >
      <nys-label
        for=${this.id}
        label=${this.label}
        description=${this.description}
        flag=${this.required?"required":this.optional?"optional":""}
        _tooltip=${this._tooltip}
        ?invert=${this.invert}
      >
        <slot name="description" slot="description">${this.description}</slot>
      </nys-label>

      <input
        class="hidden-file-input"
        tabindex="-1"
        type="file"
        name=${this.name}
        accept=${this.accept}
        form=${_e(this.form||void 0)}
        ?multiple=${this.multiple}
        ?required=${this.required}
        ?disabled=${this.disabled||!this.multiple&&this._selectedFiles.length>0}
        aria-disabled="${this.disabled}"
        aria-hidden="true"
        @change=${this._handleFileChange}
        hidden
      />

      ${this.dropzone?Y`<div
            class="nys-fileinput__dropzone
            ${this._dragActive?"drag-active":""}
            ${this._isDropDisabled?"disabled":""}
            ${this.showError&&!this._isDropDisabled?"error":""}"
            @click=${this._isDropDisabled?null:this._openFileDialog}
            @keydown=${r=>!this._isDropDisabled&&(r.key==="Enter"||r.key===" ")&&this._openFileDialog()}
            @dragover=${this._isDropDisabled?null:this._onDragOver}
            @dragleave=${this._isDropDisabled?null:this._onDragLeave}
            @drop=${this._isDropDisabled?null:this._onDrop}
            aria-label="Drag files here or choose from folder"
          >
            ${this._dragActive?Y`<p>Drop file to upload</p>`:Y` <nys-button
                    id=${this.id}
                    name="file-btn"
                    label=${this.multiple?"Choose files":"Choose file"}
                    variant="outline"
                    ariaLabel=${this._buttonAriaLabel}
                    ariaDescription=${this._buttonAriaDescription}
                    ?disabled=${this._isDropDisabled}
                    .onClick=${r=>{r.stopPropagation(),this._openFileDialog()}}
                  ></nys-button>
                  <p>or drag here</p>`}
          </div>`:Y`<nys-button
            id=${this.id}
            name="file-btn"
            label=${this.multiple?"Choose files":"Choose file"}
            variant="outline"
            ariaLabel=${this._buttonAriaLabel}
            ariaDescription=${this._buttonAriaDescription}
            ?disabled=${this.disabled||!this.multiple&&this._selectedFiles.length>0}
            .onClick=${()=>this._openFileDialog()}
          ></nys-button>`}
      ${this.showError?Y`
            <nys-errormessage
              ?showError=${this.showError}
              errorMessage=${this._internals.validationMessage||this.errorMessage}
            ></nys-errormessage>
          `:null}
      ${this._selectedFiles.length>0?Y`
            <ul>
              ${this._selectedFiles.map(r=>Y`<li>
                    <nys-fileitem
                      filename=${r.file.name}
                      status=${r.status}
                      progress=${r.progress}
                      errorMessage=${r.errorMsg||""}
                    ></nys-fileitem>
                  </li>`)}
            </ul>
          `:null}
    </div>`}};D5.styles=sf,D5.formAssociated=!0;let Dt=D5;Bt([m({type:String})],Dt.prototype,"id");Bt([m({type:String,reflect:!0})],Dt.prototype,"name");Bt([m({type:String})],Dt.prototype,"label");Bt([m({type:String})],Dt.prototype,"description");Bt([m({type:Boolean})],Dt.prototype,"multiple");Bt([m({type:String,reflect:!0})],Dt.prototype,"form");Bt([m({type:String})],Dt.prototype,"_tooltip");Bt([m({type:String})],Dt.prototype,"accept");Bt([m({type:Boolean,reflect:!0})],Dt.prototype,"disabled");Bt([m({type:Boolean,reflect:!0})],Dt.prototype,"required");Bt([m({type:Boolean,reflect:!0})],Dt.prototype,"optional");Bt([m({type:Boolean,reflect:!0})],Dt.prototype,"showError");Bt([m({type:String})],Dt.prototype,"errorMessage");Bt([m({type:Boolean})],Dt.prototype,"dropzone");Bt([m({type:String,reflect:!0})],Dt.prototype,"width");Bt([m({type:Boolean,reflect:!0})],Dt.prototype,"invert");customElements.get("nys-fileinput")||customElements.define("nys-fileinput",Dt);const ff={account_circle:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
</svg>`,phone_in_talk:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_10908_589" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_10908_589)">
    <path d="M20 12C19.7333 12 19.4958 11.9042 19.2875 11.7125C19.0792 11.5208 18.9583 11.2833 18.925 11C18.7083 9.45 18.0542 8.12917 16.9625 7.0375C15.8708 5.94583 14.55 5.29167 13 5.075C12.7167 5.04167 12.4792 4.925 12.2875 4.725C12.0958 4.525 12 4.28333 12 4C12 3.71667 12.1 3.47917 12.3 3.2875C12.5 3.09583 12.7333 3.01667 13 3.05C15.1 3.28333 16.8917 4.14167 18.375 5.625C19.8583 7.10833 20.7167 8.9 20.95 11C20.9833 11.2667 20.9042 11.5 20.7125 11.7C20.5208 11.9 20.2833 12 20 12ZM15.825 12C15.6083 12 15.4167 11.925 15.25 11.775C15.0833 11.625 14.9583 11.425 14.875 11.175C14.7417 10.6917 14.4875 10.2625 14.1125 9.8875C13.7375 9.5125 13.3083 9.25833 12.825 9.125C12.575 9.04167 12.375 8.91667 12.225 8.75C12.075 8.58333 12 8.38333 12 8.15C12 7.81667 12.1167 7.54583 12.35 7.3375C12.5833 7.12917 12.8417 7.05833 13.125 7.125C14.0583 7.34167 14.8625 7.7875 15.5375 8.4625C16.2125 9.1375 16.6583 9.94167 16.875 10.875C16.9417 11.1583 16.8667 11.4167 16.65 11.65C16.4333 11.8833 16.1583 12 15.825 12ZM19.95 21C17.8667 21 15.8083 20.5458 13.775 19.6375C11.7417 18.7292 9.89167 17.4417 8.225 15.775C6.55833 14.1083 5.27083 12.2583 4.3625 10.225C3.45417 8.19167 3 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07917 8.725 3.2375C8.90833 3.39583 9.01667 3.58333 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.70417 12.1125 8.1625 12.6875C8.62083 13.2625 9.125 13.8167 9.675 14.35C10.1917 14.8667 10.7333 15.3458 11.3 15.7875C11.8667 16.2292 12.4667 16.6333 13.1 17L15.45 14.65C15.6 14.5 15.7958 14.3875 16.0375 14.3125C16.2792 14.2375 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1375 20.775 15.3125C20.925 15.4875 21 15.6833 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21ZM6.025 9L7.675 7.35L7.25 5H5.025C5.10833 5.68333 5.225 6.35833 5.375 7.025C5.525 7.69167 5.74167 8.35 6.025 9ZM14.975 17.95C15.625 18.2333 16.2875 18.4583 16.9625 18.625C17.6375 18.7917 18.3167 18.9 19 18.95V16.75L16.65 16.275L14.975 17.95Z" fill="var(--nys-icon-color, currentcolor)"/>
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
</svg>`},yf=Qe`
  :host {
    display: inline-block;
    --_nys-icon-size: var(
      --nys-icon-size,
      0.7em
    ); /* If cap isn't supported, a fallback value of 0.7em is used, as it closely approximates the height of capital letters in most fonts. */
    box-sizing: content-box !important;
  }

  /* Use 'cap' if supported */
  @supports (font-size: 1cap) {
    :host {
      --_nys-icon-size: var(--nys-icon-size, 1cap);
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
`;var pf=Object.defineProperty,vf=Object.getOwnPropertyDescriptor,Fl=(l,r,o,s)=>{for(var c=s>1?void 0:s?vf(r,o):r,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=(s?h(r,o,c):h(c))||c);return s&&c&&pf(r,o,c),c},to;const Yr=(to=class extends Le{constructor(){super(...arguments),this.name="",this.ariaLabel="",this.rotate="0",this.flip="",this.color="",this._size="sm"}get size(){return this._size}set size(l){this._size=to.VALID_TYPES.includes(l)?l:"sm"}getIcon(){const l=ff[this.name];if(!l)return null;const r=new DOMParser().parseFromString(l,"image/svg+xml").documentElement;return r instanceof SVGElement?(r.setAttribute("role","img"),this.ariaLabel?(r.setAttribute("aria-label",this.ariaLabel),r.removeAttribute("aria-hidden")):(r.setAttribute("aria-hidden","true"),r.removeAttribute("aria-label")),r.style.rotate=`${this.rotate}deg`,r.style.color=this.color||"currentcolor",r.classList.add(`nys-icon--${this.size}`),r.classList.add("nys-icon--svg"),this.flip&&r.classList.add(`nys-icon--flip-${this.flip}`),r):null}render(){const l=this.getIcon();return l?Y`${l}`:null}},to.styles=yf,to.VALID_TYPES=["2xs","xs","sm","md","lg","xl","2xl","3xl","4xl","12","16","24","32","40","48","64"],to);Fl([m({type:String,reflect:!0})],Yr.prototype,"name",2);Fl([m({type:String})],Yr.prototype,"ariaLabel",2);Fl([m({type:String})],Yr.prototype,"rotate",2);Fl([m({type:String})],Yr.prototype,"flip",2);Fl([m({type:String})],Yr.prototype,"color",2);Fl([m({reflect:!0})],Yr.prototype,"size",1);let Id=Yr;customElements.get("nys-icon")||customElements.define("nys-icon",Id);const gf=Qe`
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
    --_nys-label-color: var(--nys-color-text, #1b1b1b);
    --_nys-label-cursor: normal;

    /* Description */
    --_nys-description-font-weight: var(--nys-font-weight-regular, 400);
    --_nys-description-font-style: italic;
    --_nys-description-font-color: var(--nys-color-text, #1b1b1b);

    /* Required Flag */
    --_nys-required-font-color: var(--nys-color-danger, #b52c2c);

    /* Optional Flag */
    --_nys-optional-font-weight: var(--nys-font-weight-regular, 400);
    --_nys-optional-font-color: var(--nys-color-text-weak, #4a4d4f);

    /* Spacing */
    --_nys-label-gap: var(--nys-space-4px, 4px);
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

  .nys-label * {
    cursor: var(--_nys-label-cursor);
  }

  .nys-label__label {
    display: flex;
    gap: var(--_nys-label-gap);
    text-align: left;
    font-weight: var(--_nys-label-font-weight);
    color: var(--_nys-label-color);
  }

  .nys-label__description {
    text-align: left;
    font-weight: var(--_nys-description-font-weight);
    font-style: var(--_nys-description-font-style);
    color: var(--_nys-description-font-color);
  }

  .nys-label__required {
    display: contents;
    font-weight: var(--_nys-label-font-weight);
    color: var(--_nys-required-font-color);
  }

  .nys-label__optional {
    display: contents;
    font-weight: var(--_nys-optional-font-weight);
    color: var(--_nys-optional-font-color);
  }

  .nys-label__tooltip-wrapper {
    display: flex;
    gap: 5px;
  }

  .nys-label__tooltip-icon {
    margin-top: -2px;
  }

  .nys-label.invert .nys-label__label,
  .nys-label.invert .nys-label__description,
  .nys-label.invert .nys-label__optional {
    color: var(--nys-color-text-inverse, #fff);
  }

  .nys-label.invert .nys-label__tooltip-icon {
    color: var(--nys-color-ink-inverse, #fff);
  }
`;var mf=Object.defineProperty,bf=Object.getOwnPropertyDescriptor,Kl=(l,r,o,s)=>{for(var c=s>1?void 0:s?bf(r,o):r,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=(s?h(r,o,c):h(c))||c);return s&&c&&mf(r,o,c),c};const e3=class extends Le{constructor(){super(...arguments),this.for="",this.label="",this.description="",this.flag="",this.invert=!1,this._tooltip=""}get tooltip(){return this._tooltip}set tooltip(r){this._tooltip=r}render(){return Y`
      <div class="nys-label ${this.invert?"invert":""}">
        <div class="nys-label__tooltip-wrapper">
          <label
            for=${this.for}
            class="nys-label__label"
            >${this.label}
            ${this.flag==="required"?Y`<div class="nys-label__required">*</div>`:""}
            ${this.flag==="optional"?Y`<div class="nys-label__optional">(Optional)</div>`:""}</label
          >
          ${this._tooltip?Y`<nys-tooltip
                text="${this._tooltip}"
                position="top"
                focusable
                ?inverted=${this.invert}
              >
                <div class="nys-label__tooltip-icon">
                  <nys-icon name="info" size="3xl"></nys-icon>
                </div>
              </nys-tooltip>`:""}
        </div>
        <label
          for=${this.for}
          class="nys-label__description"
        >
          <slot name="description">${this.description}</slot>
        </label>
      </div>
    `}};e3.styles=gf;let Gr=e3;Kl([m({type:String})],Gr.prototype,"for",2);Kl([m({type:String})],Gr.prototype,"label",2);Kl([m({type:String})],Gr.prototype,"description",2);Kl([m({type:String})],Gr.prototype,"flag",2);Kl([m({type:Boolean,reflect:!0})],Gr.prototype,"invert",2);Kl([m({type:String})],Gr.prototype,"tooltip",1);customElements.get("nys-label")||customElements.define("nys-label",Gr);const _f=Qe`
  :host {
    /* Global Modal Styles */
    --_nys-modal-width: 480px;
    --_nys-modal-min-width: 320px;
    --_nys-modal-border-radius: var(--nys-radius-lg, 8px);
    --_nys-modal-border-color: var(--nys-color-neutral-200, #bec0c1);
    --_nys-modal-border-width: 1px;
    --_nys-modal-background-color: var(--nys-color-surface, #fff);
    --_nys-modal-margin: var(--nys-space-250, 20px);
    --_nys-modal-padding: var(--nys-space-300, 24px);
    --_nys-modal-gap: var(--nys-space-200, 16px);

    /* Modal Overlay */
    --_nys-modal-background-color--overlay: var(
      --nys-color-black-transparent-700,
      rgba(27, 27, 27, 0.7)
    );

    /* Modal Header */
    --_nys-modal-gap--header: var(--nys-space-100, 8px);

    /* Modal Footer */
    --_nys-modal-gap--footer: var(--nys-space-250, 20px);

    /* Typography */
    --_nys-modal-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-modal-font-weight--header: var(--nys-font-weight-bold, 700);
    --_nys-modal-font-weight--subheader: var(--nys-font-weight-regular, 400);
    --_nys-modal-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-modal-font-family: var(
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

  /*** CSS & Slot resets ***/
  * {
    box-sizing: border-box;
  }

  ::slotted(p) {
    margin: 0 !important;
  }

  h2,
  p {
    flex: 1;
    margin: 0;
    margin-bottom: 0;
  }

  /*** Modal Overlay (black transparent background) ***/
  .nys-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    background: var(--_nys-modal-background-color--overlay);
  }

  /*** Base ***/
  .nys-modal {
    display: flex;
    flex-direction: column;
    margin: var(--_nys-modal-margin);
    padding: var(--_nys-modal-padding);
    gap: var(--_nys-modal-gap);
    width: var(--_nys-modal-width);
    min-width: var(--_nys-modal-min-width);
    border-radius: var(--_nys-modal-border-radius);
    border: var(--_nys-modal-border-width) solid var(--_nys-modal-border-color);
    font-family: var(--_nys-modal-font-family);
    font-size: var(--_nys-modal-font-size);
    line-height: var(--_nys-modal-line-height);
    background: var(--_nys-modal-background-color);
    position: relative;
    z-index: 10000;
  }

  /*** Modal Header ***/
  .nys-modal_header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--_nys-modal-gap--header);
  }

  .nys-modal_header p {
    font-weight: var(--_nys-modal-font-weight--subheader);
  }

  .nys-modal_header-inner {
    display: flex;
    align-items: center;
    width: 100%;
    font-weight: var(--_nys-modal-font-weight--header);
  }

  /*** Modal Body ***/
  .nys-modal_body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .nys-modal_body-inner {
    overflow: auto;
    width: 100%;
    max-height: 45vh;
  }

  .nys-modal_body.hidden {
    display: none;
  }

  /*** Modal Footer (i.e. where the button slot is) ***/
  .nys-modal_footer ::slotted(*) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    gap: var(--_nys-modal-gap--footer);
    align-self: stretch;
  }

  .nys-modal_footer.hidden ::slotted(*) {
    display: none;
  }

  @media (min-width: 480px) {
    .nys-modal_body-inner {
      max-height: 25vh;
    }
    .nys-modal_footer ::slotted(*) {
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }
  }
`;var Cf=Object.defineProperty,xf=Object.getOwnPropertyDescriptor,ur=(l,r,o,s)=>{for(var c=s>1?void 0:s?xf(r,o):r,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=(s?h(r,o,c):h(c))||c);return s&&c&&Cf(r,o,c),c};let wf=0;var no;const Sa=(no=class extends Le{constructor(){super(),this.id="",this.heading="",this.subheading="",this.open=!1,this.mandatory=!1,this._width="md",this._actionButtonSlot=null,this._prevFocusedElement=null,this._originalBodyOverflow=null,this.hasBodySlots=!1,this.hasActionSlots=!1}get width(){return this._width}set width(l){this._width=no.VALID_WIDTHS.includes(l)?l:"md"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-{{componentName}}-${Date.now()}-${wf++}`),window.addEventListener("resize",()=>this._updateSlottedButtonWidth()),window.addEventListener("keydown",l=>this._handleKeydown(l))}disconnectedCallback(){super.disconnectedCallback(),this._restoreBodyScroll(),window.removeEventListener("keydown",l=>this._handleKeydown(l))}firstUpdated(){this._handleBodySlotChange(),this._handleActionSlotChange()}async updated(l){l.has("open")&&(this.open?(this._hideBodyScroll(),this._dispatchOpenEvent(),await this.updateComplete,this._savePrevFocused(),this._focusOnModal(),this._updateDismissAria()):(this._restorePrevFocused(),this._restoreBodyScroll(),this._dispatchCloseEvent(),this._updateDismissAria()))}_hideBodyScroll(){this._originalBodyOverflow===null&&(this._originalBodyOverflow=document.body.style.overflow),document.body.style.overflow="hidden"}_restoreBodyScroll(){this._originalBodyOverflow!==null&&(document.body.style.overflow=this._originalBodyOverflow,this._originalBodyOverflow=null)}_savePrevFocused(){this._prevFocusedElement=document.activeElement}_focusOnModal(){var l;const r=(l=this.shadowRoot)==null?void 0:l.querySelector(".nys-modal");r==null||r.focus()}async _restorePrevFocused(){var l;const r=this._prevFocusedElement;if(r&&r.tagName.toLowerCase()==="nys-button"){const o=await r.getButtonElement();if(o){o.focus();return}}else(l=this._prevFocusedElement)==null||l.focus();this._prevFocusedElement=null}async _handleBodySlotChange(){var l;const r=(l=this.shadowRoot)==null?void 0:l.querySelector("slot");r&&(this.hasBodySlots=r.assignedNodes({flatten:!0}).some(o=>{var s;return o.nodeType===Node.ELEMENT_NODE||((s=o.textContent)==null?void 0:s.trim())}))}async _handleActionSlotChange(){var l;const r=(l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="actions"]');r&&(this.hasActionSlots=r.assignedNodes({flatten:!0}).some(o=>{var s;return o.nodeType===Node.ELEMENT_NODE||((s=o.textContent)==null?void 0:s.trim())}),this._actionButtonSlot=r,this._updateSlottedButtonWidth())}_updateSlottedButtonWidth(){if(!this._actionButtonSlot)return;const l=window.innerWidth<=480;this._actionButtonSlot.assignedElements().forEach(r=>{r.querySelectorAll("nys-button").forEach(o=>{l?o==null||o.setAttribute("fullWidth",""):o==null||o.removeAttribute("fullWidth")})})}_dispatchOpenEvent(){this.dispatchEvent(new CustomEvent("nys-open",{detail:{id:this.id},bubbles:!0,composed:!0}))}_dispatchCloseEvent(){this.dispatchEvent(new CustomEvent("nys-close",{detail:{id:this.id},bubbles:!0,composed:!0}))}_getAriaDescribedBy(){const l=[];return this.subheading&&l.push(`${this.id}-subheading`),this.hasBodySlots&&l.push(`${this.id}-desc`),l.join(" ")}_updateDismissAria(){var l;const r=(l=this.shadowRoot)==null?void 0:l.querySelector("nys-button");r&&(r.setAttribute("ariaLabel"," "),this.open&&setTimeout(()=>{r.setAttribute("ariaLabel","Close this window")},100))}async _handleKeydown(l){var r;if(this.open&&(l.key==="Escape"&&!this.mandatory&&(l.preventDefault(),this._closeModal()),l.key==="Tab")){const o=(r=this.shadowRoot)==null?void 0:r.querySelector(".nys-modal");if(!o)return;const s='a[href], area[href], button:not([disabled]), details, iframe, object, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [contentEditable="true"], [tabindex]:not([tabindex^="-"])',c=[],d=o.querySelector("nys-button");d&&c.push(d);const h=Array.from(o.querySelectorAll("slot"));for(const g of h){const y=g.assignedElements({flatten:!0});for(const p of y)p instanceof HTMLElement&&p.matches(s)&&c.push(p),p.querySelectorAll("nys-button").forEach(_=>{c.push(_)})}if(c.length>0){const g=c[0],y=c[c.length-1];let p=document.activeElement,_=c.indexOf(p);if(l.shiftKey){l.preventDefault();let w=_-1;w<0&&(w=c.length-1);const E=c[w];if(c[w].tagName.toLowerCase()==="nys-button"){const L=await E.getButtonElement();L==null||L.focus()}else E.focus()}else if(p===y)if(l.preventDefault(),g.tagName.toLowerCase()==="nys-button"){const w=await g.getButtonElement();w==null||w.focus()}else g.focus()}}}_closeModal(){this.open=!1,this._dispatchCloseEvent()}render(){return this.open?Y`<div
          id=${this.id}
          class="nys-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="${this.id}-heading"
          aria-describedby="${this._getAriaDescribedBy()}"
        >
          <div class="nys-modal" tabindex="-1">
            <div class="nys-modal_header">
              <div class="nys-modal_header-inner">
                <h2 id="${this.id}-heading">${this.heading}</h2>
                ${this.mandatory?"":Y`<nys-button
                      circle
                      icon="close"
                      variant="ghost"
                      .onClick=${()=>this._closeModal()}
                    ></nys-button>`}
              </div>
              ${this.subheading?Y`<p id="${this.id}-subheading">${this.subheading}</p>`:""}
            </div>

            <div
              id="${this.id}-desc"
              class="nys-modal_body ${this.hasBodySlots?"":"hidden"}"
            >
              <div class="nys-modal_body-inner">
                <slot @slotchange=${this._handleBodySlotChange}></slot>
              </div>
            </div>

            <div
              class="nys-modal_footer ${this.hasActionSlots?"":"hidden"}"
            >
              <slot
                name="actions"
                @slotchange=${this._handleActionSlotChange}
              ></slot>
            </div>
          </div>
        </div>`:""}},no.VALID_WIDTHS=["sm","md","lg"],no.styles=_f,no);ur([m({type:String})],Sa.prototype,"id",2);ur([m({type:String})],Sa.prototype,"heading",2);ur([m({type:String})],Sa.prototype,"subheading",2);ur([m({type:Boolean,reflect:!0})],Sa.prototype,"open",2);ur([m({type:Boolean,reflect:!0})],Sa.prototype,"mandatory",2);ur([m({reflect:!0})],Sa.prototype,"width",1);ur([Yt()],Sa.prototype,"hasBodySlots",2);ur([Yt()],Sa.prototype,"hasActionSlots",2);let t3=Sa;customElements.get("nys-modal")||customElements.define("nys-modal",t3);const kf=Qe`
  :host {
    /* Anything that can be overridden should be defined here */

    /* Global Pagination Styles */
    --_nys-pagination-width: fit-content;
    --_nys-pagination-height: var(--nys-size-500, 40px);
    --_nys-pagination-radius: var(--nys-radius-xl, 12px);
    --_nys-pagination-gap: var(--nys-space-100, 8px);

    /* Typography */
    --_nys-pagination-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-pagination-font-weight: var(--nys-font-weight-semibold, 600);
    --_nys-pagination-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-pagination-font-family: var(
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

  .nys-pagination {
    width: var(--_nys-pagination-width);
    height: var(--_nys-pagination-height);
    border-radius: var(--_nys-pagination-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--_nys-pagination-gap);
    font-family: var(--_nys-pagination-font-family);
    font-size: var(--_nys-pagination-font-size);
    font-weight: var(--_nys-pagination-font-weight);
    line-height: var(--_nys-pagination-line-height);
  }

  nys-button {
    --_nys-button-height: var(--_nys-pagination-height);
    --_nys-button-border-width: var(--nys-border-width-sm, 1px);
    --_nys-button-border-radius--start: var(--nys-radius-md, 4px);
    --_nys-button-border-radius--end: var(--nys-radius-md, 4px);
    --_nys-button-padding--x: var(--nys-space-200, 16px);
  }

  nys-button[variant="outline"] {
    --nys-button-background-color: var(--nys-color-ink-reverse, #fff);
    --nys-button-background-color--hover: var(--nys-color-neutral-10, #f6f6f6);
    --nys-button-background-color--active: var(--nys-color-neutral-50, #ededed);
    --nys-button-border-color: var(--nys-color-neutral-200, #bec0c1);
    --nys-button-border-color--hover: var(--nys-color-neutral-600, #62666a);
    --nys-button-border-color--active: var(--nys-color-neutral-900, #1b1b1b);
    --nys-button-color: var(--nys-color-link, #004dd1);
    --nys-button-color--hover: var(--nys-color-link-strong, #003ba1);
    --nys-button-color--active: var(--nys-color-link-strong, #003ba1);
  }

  nys-button[variant="filled"] {
    --nys-button-background-color: var(--nys-color-link, #004dd1);
    --nys-button-background-color--hover: var(
      --nys-color-link-strong,
      ##003ba1
    );
    --nys-button-background-color--active: var(
      --nys-color-link-strongest,
      ##002971
    );
    --nys-button-border-color: var(--nys-color-link, #004dd1);
    --nys-button-border-color--hover: var(--nys-color-link-strong, ##003ba1);
    --nys-button-border-color--active: var(
      --nys-color-link-strongest,
      ##002971
    );
    --nys-button-color: var(--nys-color-ink-reverse, #fff);
    --nys-button-color--hover: var(--nys-color-ink-reverse, #fff);
    --nys-button-color--active: var(--nys-color-ink-reverse, #fff);
  }

  nys-button#previous,
  nys-button#next,
  nys-button#previous--mobile,
  nys-button#next--mobile {
    --nys-button-color: var(--nys-color-text, ##1b1b1b);
    --nys-button-color--hover: var(--nys-color-text, ##1b1b1b);
    --nys-button-color--active: var(--nys-color-text, ##1b1b1b);
    --_nys-button-padding--x: var(--nys-space-150, 12px);
  }

  nys-button#previous--mobile,
  nys-button#next--mobile {
    display: none;
  }

  nys-button.spacer {
    --nys-button-border-color: transparent;
    --nys-button-border-color--hover: transparent;
    --nys-button-border-color--active: transparent;
    --nys-button-background-color: transparent;
    --nys-button-background-color--hover: transparent;
    --nys-button-background-color--active: transparent;
    --nys-button-color: var(--nys-color-text, ##1b1b1b);
    --nys-button-color--hover: var(--nys-color-text, ##1b1b1b);
    --nys-button-color--active: var(--nys-color-text, ##1b1b1b);
    --_nys-button-padding--x: var(--nys-space-1px, 1px);
    --_nys-button-cursor: default;
  }

  :host([currentPage="3"]) nys-button#first-spacer,
  :host([_twoBeforeLast]) nys-button#last-spacer {
    display: none;
  }

  @media (min-width: 0) and (max-width: 767px) {
    /* Mobile (XS) and Mobile Large (SM) */

    /* Hide 1 less and more than currentPage */
    nys-button#prev-page,
    nys-button#next-page {
      display: none;
    }

    /* Show spacer instead of 1 less and more than currentPage*/
    :host([currentPage="3"]) nys-button#first-spacer,
    :host([_twoBeforeLast]) nys-button#last-spacer {
      display: block;
    }

    /* Swap to icon only previous and next buttons */
    nys-button#previous--mobile,
    nys-button#next--mobile {
      display: block;
    }
    nys-button#previous,
    nys-button#next {
      display: none;
    }
  }
`;var Sf=Object.defineProperty,mo=(l,r,o,s)=>{for(var c=void 0,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=h(r,o,c)||c);return c&&Sf(r,o,c),c};let Ef=0;const n3=class extends Le{constructor(){super(),this.id="",this.name="",this.currentPage=1,this.totalPages=1,this._twoBeforeLast=!1}updated(r){super.updated(r),this.currentPage=this._clampPage(this.currentPage),this._twoBeforeLast=this.currentPage===this.totalPages-2}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-pagination-${Date.now()}-${Ef++}`)}_clampPage(r){return r<1?1:r>this.totalPages?this.totalPages:r}renderPageButtons(){const r=[],o=(g,y)=>{r.push(Y`
        <nys-button
          label=${String(g)}
          ariaLabel="Page ${g}"
          id=${_e(y)}
          variant=${this.currentPage===g?"filled":"outline"}
          @nys-click="${()=>this._handlePageClick(g)}"
        ></nys-button>
      `)},s=g=>{r.push(Y`<nys-button
          label="..."
          class="spacer"
          tabindex="-1"
          id=${g}
        ></nys-button>`)},c=this.totalPages,d=this.currentPage-1,h=this.currentPage+1;return o(1),this.currentPage>2&&s("first-spacer"),d>1&&o(d,"prev-page"),this.currentPage!==1&&this.currentPage!==c&&o(this.currentPage,"current-page"),h<c&&o(h,"next-page"),this.currentPage<c-1&&s("last-spacer"),c>1&&o(c),r}_handlePageClick(r){this.currentPage=this._clampPage(r),this.dispatchEvent(new CustomEvent("nys-change",{detail:{page:this.currentPage},bubbles:!0,composed:!0}))}render(){return this.totalPages<=1?null:Y`<div class="nys-pagination">
      ${this.currentPage>1?Y`
            <nys-button
              id="previous"
              label="Previous"
              prefixIcon="chevron_left"
              variant="outline"
              @nys-click="${()=>this._handlePageClick(this.currentPage-1)}"
            ></nys-button>
            <nys-button
              id="previous--mobile"
              prefixIcon="chevron_left"
              ariaLabel="Previous Page"
              variant="outline"
              @nys-click="${()=>this._handlePageClick(this.currentPage-1)}"
            ></nys-button>
          `:null}
      ${this.renderPageButtons()}
      ${this.currentPage<this.totalPages?Y`
            <nys-button
              id="next"
              label="Next"
              suffixIcon="chevron_right"
              variant="outline"
              @nys-click="${()=>this._handlePageClick(this.currentPage+1)}"
            ></nys-button>
            <nys-button
              id="next--mobile"
              suffixIcon="chevron_right"
              ariaLabel="Next Page"
              variant="outline"
              @nys-click="${()=>this._handlePageClick(this.currentPage+1)}"
            ></nys-button>
          `:null}
    </div>`}};n3.styles=kf;let Xr=n3;mo([m({type:String})],Xr.prototype,"id");mo([m({type:String,reflect:!0})],Xr.prototype,"name");mo([m({type:Number,reflect:!0})],Xr.prototype,"currentPage");mo([m({type:Number,reflect:!0})],Xr.prototype,"totalPages");mo([m({type:Boolean,reflect:!0})],Xr.prototype,"_twoBeforeLast");customElements.get("nys-pagination")||customElements.define("nys-pagination",Xr);const a3=Qe`
  :host {
    /* Global Radiobutton Styles */
    --_nys-radiobutton-size: var(--nys-size-400, 32px);
    --_nys-radiobutton-border-radius: var(--nys-radius-md, 4px);
    --_nys-radiobutton-border-width: var(--nys-border-width-md, 2px);
    --_nys-radiobutton-outline-color: var(--nys-color-focus, #004dd1);
    --_nys-radiobutton-outline-width: var(--nys-border-width-md, 2px);
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
    --_nys-radiobutton-font-weight--label: var(--nys-font-weight-regular, 400);
    --_nys-radiobutton-line-height: var(--nys-font-lineheight-ui-md, 24px);

    /* Global Radio Button Colors */
    --_nys-radiobutton-color: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );

    /* Default (Empty) */
    --_nys-radiobutton-background-color: var(--nys-color-ink-reverse, #ffffff);
    --_nys-radiobutton-border-color: var(--nys-color-neutral-600, #62666a);
    /* Empty + Hovered */
    --_nys-radiobutton-background-color--hover: var(
      --nys-color-neutral-50,
      #ededed
    );
    --_nys-radiobutton-border-color--hover: var(--nys-color-ink, #1b1b1b);
    /* Empty + Pressed */
    --_nys-radiobutton-background-color--active: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
    --_nys-radiobutton-border-color--active: var(--nys-color-ink, #1b1b1b);
    /* Checked */
    --_nys-radiobutton-background-color--checked: var(
      --nys-color-theme,
      #154973
    );
    /* Disabled */
    --_nys-radiobutton-background-color--disabled: var(
      --nys-color-ink-reverse,
      #f0f0f0
    );
    --_nys-radiobutton-color--disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-radiobutton-border-color--disabled: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
    /* Disabled Checked */
    --_nys-radiobutton-background-color--checked--disabled: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
    --_nys-radiobutton-border-color--checked--disabled: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
  }

  /* Small Variant */
  :host([size="sm"]) {
    --_nys-radiobutton-size: var(--nys-size-300, 24px);
    --_nys-radiobutton-border-radius: var(--nys-radius-sm, 2px);
    --_nys-radiogroup-gap: var(--nys-space-100, 8px);
    --_nys-radiobutton-gap: var(--nys-space-100, 8px);
  }
  /* Medium Variant */
  :host([size="md"]) {
    --_nys-radiobutton-size: var(--nys-size-400, 32px);
    --_nys-radiobutton-border-radius: var(--nys-radius-md, 4px);
    --_nys-radiogroup-gap: var(--nys-space-200, 16px);
    --_nys-radiobutton-gap: var(--nys-space-150, 12px);
  }

  /* Tile Variant */
  :host([tile]) {
    --_nys-radiobutton-font-weight--label: var(--nys-font-weight-semibold, 600);
    --_nys-radiobutton-border-width--tile: var(--nys-border-width-sm, 1px);
    --_nys-radiobutton-border-radius--tile: var(--nys-radius-md, 4px);
    --_nys-radiobutton-border-color--tile: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
    --_nys-radiobutton-background-color--tile: var(
      --nys-color-ink-reverse,
      #ffffff
    );
    --_nys-radiobutton-padding--x--tile: var(--nys-space-250, 20px);
    --_nys-radiobutton-padding--y--tile: var(--nys-space-200, 16px);
    /* Hover */
    --_nys-radiobutton-border-color--tile--hover: var(
      --nys-color-neutral-700,
      #4a4d4f
    );
    --_nys-radiobutton-background-color--tile--hover: var(
      --nys-color-ink-reverse,
      #ffffff
    );
    /* Pressed */
    --_nys-radiobutton-border-color--tile--active: var(
      --nys-color-neutral-900,
      #1b1b1b
    );
    --_nys-radiobutton-background-color--tile--active: var(
      --nys-color-ink-reverse,
      #ffffff
    );
    /* Checked */
    --_nys-radiobutton-border-color--tile--checked: var(
      --nys-color-theme-mid,
      #457aa5
    );
    --_nys-radiobutton-background-color--tile--checked: var(
      --nys-color-theme-faint,
      #f7fafd
    );
    /* Disabled */
    --_nys-radiobutton-border-color--tile--disabled: var(
      --nys-color-ink-reverse,
      #f0f0f0
    );
    --_nys-radiobutton-background-color--tile--disabled: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
  }

  :host([tile][size="sm"]) {
    --_nys-radiobutton-padding--x--tile: var(--nys-space-200, 16px);
    --_nys-radiobutton-padding--y--tile: var(--nys-space-150, 12px);
  }

  :host([tile][showError]) {
    --_nys-radiobutton-border-color--tile: var(--nys-color-danger, #b52c2c);
    --_nys-radiobutton-border-color--tile--hover: var(
      --nys-color-danger,
      #b52c2c
    );
    --_nys-radiobutton-border-color--tile--active: var(
      --nys-color-danger,
      #b52c2c
    );
    --_nys-radiobutton-border-color--tile--checked: var(
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
    border-radius: var(--_nys-radiobutton-border-radius--tile);
    border: var(--_nys-radiobutton-border-width--tile) solid
      var(--_nys-radiobutton-border-color--tile);
    background-color: var(--_nys-radiobutton-background-color--tile);
    padding: var(--_nys-radiobutton-padding--y--tile)
      var(--_nys-radiobutton-padding--x--tile);
  }

  .nys-radiobutton__radio {
    appearance: none;
    width: var(--_nys-radiobutton-size);
    height: var(--_nys-radiobutton-size);
    min-width: var(--_nys-radiobutton-size);
    min-height: var(--_nys-radiobutton-size);
    max-width: var(--_nys-radiobutton-size);
    max-height: var(--_nys-radiobutton-size);
    border: solid var(--_nys-radiobutton-border-width)
      var(--_nys-radiobutton-border-color);
    background-color: var(--_nys-radiobutton-background-color);
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
    background-color: var(--_nys-radiobutton-background-color--checked);
  }
  :host([tile])
    .nys-radiobutton:has(input:not(:disabled):checked)
    + .nys-radiobutton
    .nys-radiobutton__radio {
    border-color: var(--_nys-radiobutton-border-color--tile--checked);
    background-color: var(--_nys-radiobutton-background-color--tile--checked);
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
    border-color: var(--_nys-radiobutton-border-color--checked--disabled);
    background-color: var(
      --_nys-radiobutton-background-color--checked--disabled
    );
  }

  :host([tile])
    .nys-radiobutton:has(input:disabled:checked)
    + .nys-radiobutton
    .nys-radiobutton__radio {
    border-color: var(--_nys-radiobutton-background-color--tile--disabled);
    background-color: var(--_nys-radiobutton-border-color--tile--disabled);
  }

  /* Disabled */
  input:disabled + .nys-radiobutton,
  input:disabled + .nys-radiobutton * {
    cursor: not-allowed;
  }

  input:disabled + .nys-radiobutton .nys-radiobutton__radio {
    background-color: var(--_nys-radiobutton-background-color--disabled);
    border-color: var(--_nys-radiobutton-border-color--disabled);
    cursor: not-allowed;
  }
  :host([tile])
    .nys-radiobutton:has(input:disabled)
    + .nys-radiobutton
    .nys-radiobutton__radio {
    background-color: var(--_nys-radiobutton-background-color--disabled);
    border-color: var(--_nys-radiobutton-border-color--disabled);
    cursor: not-allowed;
  }

  /* Hover - only allow hover on unchecked */
  input:hover:not(:disabled):not(:checked)
    + .nys-radiobutton
    .nys-radiobutton__radio {
    border-color: var(--_nys-radiobutton-border-color--hover);
    background-color: var(--_nys-radiobutton-background-color--hover);
  }
  :host([tile])
    .nys-radiobutton:has(
      input:hover:not(:disabled):not(:checked)
        + .nys-radiobutton
        .nys-radiobutton__radio
    ) {
    border-color: var(--_nys-radiobutton-border-color--tile--hover);
    background-color: var(--_nys-radiobutton-background-color--tile--hover);
    outline: solid var(--_nys-radiobutton-border-width--tile)
      var(--_nys-radiobutton-border-color--tile--hover);
  }

  /* Pressed - only allow pressed on unchecked */
  input:active:not(:disabled):not(:checked)
    + .nys-radiobutton
    .nys-radiobutton__radio {
    border-color: var(--_nys-radiobutton-border-color--active);
    background-color: var(--_nys-radiobutton-background-color--active);
  }
  :host([tile])
    .nys-radiobutton:has(
      input:active:not(:disabled):not(:checked)
        + .nys-radiobutton
        .nys-radiobutton__radio
    ) {
    border-color: var(--_nys-radiobutton-border-color--tile--active);
    background-color: var(--_nys-radiobutton-background-color--tile--active);
    outline: solid var(--_nys-radiobutton-border-width--tile)
      var(--_nys-radiobutton-border-color--tile--active);
  }

  /* Focused */
  :host:focus-visible,
  :host(.active-focus) {
    outline: solid var(--_nys-radiobutton-outline-width)
      var(--_nys-radiobutton-outline-color);
  }

  .nys-radiobutton > nys-label {
    --_nys-label-font-weight: var(--_nys-radiobutton-font-weight--label);
    display: flex;
    padding-inline-start: var(--_nys-radiobutton-gap);
  }

  :host([tile]) .nys-radiobutton > nys-label {
    --_nys-description-font-style: normal;
  }

  input:disabled + .nys-radiobutton > nys-label,
  input:disabled + .nys-radiobutton > nys-label * {
    cursor: not-allowed;
    --_nys-label-cursor: not-allowed;
    --_nys-label-color: var(--_nys-radiobutton-color--disabled);
    --_nys-description-color: var(--_nys-radiobutton-color--disabled);
    color: var(--_nys-radiobutton-color--disabled);
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
`;var Df=Object.defineProperty,Mf=Object.getOwnPropertyDescriptor,It=(l,r,o,s)=>{for(var c=s>1?void 0:s?Mf(r,o):r,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=(s?h(r,o,c):h(c))||c);return s&&c&&Df(r,o,c),c};let Af=0;var Nl;const Xt=(Nl=class extends Le{constructor(){super(),this.id="",this.name="",this.required=!1,this.optional=!1,this.showError=!1,this.errorMessage="",this.label="",this.description="",this.tile=!1,this._tooltip="",this.form=null,this.selectedValue=null,this._slottedDescriptionText="",this._size="md",this._internals=this.attachInternals()}get size(){return this._size}set size(l){this._size=Nl.VALID_SIZES.includes(l)?l:"md"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-radiogroup-${Date.now()}-${Af++}`),this.addEventListener("nys-change",this._handleRadioButtonChange),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("nys-change",this._handleRadioButtonChange),this.removeEventListener("invalid",this._handleInvalid)}async firstUpdated(){this._initializeCheckedRadioValue(),this._setValue(),this._setRadioButtonRequire(),this._updateRadioButtonsSize(),this._updateRadioButtonsTile(),this._updateRadioButtonsShowError(),this._getSlotDescriptionForAria(),await this.updateComplete,this._initializeChildAttributes(),this._updateGroupTabIndex()}updated(l){(l.has("required")||l.has("selectedValue"))&&this._manageRequire(),l.has("size")&&this._updateRadioButtonsSize(),l.has("tile")&&this._updateRadioButtonsTile(),l.has("showError")&&this._updateRadioButtonsShowError(),l.has("form")&&this._updateRadioButtonsForm()}formResetCallback(){this.querySelectorAll("nys-radiobutton").forEach(l=>{l.formResetUpdate()})}_setValue(){this._internals.setFormValue(this.selectedValue)}_setRadioButtonRequire(){this.querySelectorAll("nys-radiobutton").forEach((l,r)=>{this.required&&r===0&&l.setAttribute("required","required")})}async _manageRequire(){const l=this.errorMessage||"Please select an option.",r=Array.from(this.querySelectorAll("nys-radiobutton"))[0];r&&(this.required&&!this.selectedValue?this._internals.setValidity({valueMissing:!0},l,r):(this.showError=!1,this._internals.setValidity({},"",r)))}checkValidity(){const l=Array.from(this.querySelectorAll("nys-radiobutton"));return!this.required||l.some(r=>r.checked)}_initializeCheckedRadioValue(){const l=this.querySelector("nys-radiobutton[checked]");l&&(this.selectedValue=l.getAttribute("value"),this._internals.setFormValue(this.selectedValue))}_getAllRadios(){return Array.from(this.querySelectorAll("nys-radiobutton"))}async _handleKeyDown(l){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," ","Enter"].includes(l.key))return;l.preventDefault();const r=this._getAllRadios().filter(g=>!g.disabled),o=r.find(g=>g.checked)||r[0],s=l.key===" "||l.key==="Enter"?0:["ArrowUp","ArrowLeft"].includes(l.key)?-1:1;let c=r.indexOf(o)+s;c<0&&(c=r.length-1),c>=r.length&&(c=0);const d=r[c],h=await d.getInputElement();h==null||h.click(),this._updateGroupTabIndex(),d.focus()}_updateGroupTabIndex(){const l=this._getAllRadios(),r=l.find(o=>o.checked)||l[0];l.forEach(o=>{o.disabled?o.tabIndex=-1:o.tabIndex=o===r?0:-1,o.setAttribute("aria-checked",o.checked?"true":"false"),o.setAttribute("aria-disabled",o.disabled?"true":"false"),o.setAttribute("aria-required",this.required?"true":"false")})}_initializeChildAttributes(){this._getAllRadios().forEach(l=>{l.setAttribute("role","radio"),l.setAttribute("aria-checked",String(l.checked)),l.setAttribute("aria-required",String(l.required)),l.setAttribute("aria-disabled",String(l.disabled)),l.setAttribute("tabindex","-1")})}_updateRadioButtonsSize(){this.querySelectorAll("nys-radiobutton").forEach(l=>{l.setAttribute("size",this.size)})}_updateRadioButtonsTile(){this.querySelectorAll("nys-radiobutton").forEach(l=>{this.tile?l.toggleAttribute("tile",!0):l.removeAttribute("tile")})}_updateRadioButtonsShowError(){this.querySelectorAll("nys-radiobutton").forEach(l=>{this.showError?l.setAttribute("showError",""):l.removeAttribute("showError")})}_updateRadioButtonsForm(){this.querySelectorAll("nys-radiobutton").forEach(l=>{this.showError&&this.form!==null?l.setAttribute("form",this.form):l.removeAttribute("form")})}_getSlotDescriptionForAria(){var l;const r=(l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="description"]'),o=(r==null?void 0:r.assignedNodes({flatten:!0}))||[];this._slottedDescriptionText=o.map(s=>{var c;return(c=s.textContent)==null?void 0:c.trim()}).filter(Boolean).join(", ")}_handleRadioButtonChange(l){const r=l,{name:o,value:s}=r.detail;this.name=o,this.selectedValue=s,this._internals.setFormValue(this.selectedValue),this._updateGroupTabIndex()}async _handleInvalid(l){if(l.preventDefault(),this._internals.validity.valueMissing){this.showError=!0,this._manageRequire();const r=this.querySelector("nys-radiobutton");if(r){const o=this._internals.form;o?Array.from(o.elements).find(s=>typeof s.checkValidity=="function"&&!s.checkValidity())===this&&(r.focus(),r.classList.add("active-focus")):(r.focus(),r.classList.add("active-focus"))}}}render(){return Y`<div class="nys-radiogroup">
      <nys-label
        for=${this.id}
        label=${this.label}
        description=${this.description}
        flag=${this.required?"required":this.optional?"optional":""}
        _tooltip=${this._tooltip}
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
    </div>`}},Nl.VALID_SIZES=["sm","md"],Nl.styles=a3,Nl.formAssociated=!0,Nl);It([m({type:String})],Xt.prototype,"id",2);It([m({type:String,reflect:!0})],Xt.prototype,"name",2);It([m({type:Boolean,reflect:!0})],Xt.prototype,"required",2);It([m({type:Boolean,reflect:!0})],Xt.prototype,"optional",2);It([m({type:Boolean,reflect:!0})],Xt.prototype,"showError",2);It([m({type:String})],Xt.prototype,"errorMessage",2);It([m({type:String})],Xt.prototype,"label",2);It([m({type:String})],Xt.prototype,"description",2);It([m({type:Boolean,reflect:!0})],Xt.prototype,"tile",2);It([m({type:String})],Xt.prototype,"_tooltip",2);It([m({type:String,reflect:!0})],Xt.prototype,"form",2);It([Yt()],Xt.prototype,"selectedValue",2);It([Yt()],Xt.prototype,"_slottedDescriptionText",2);It([m({reflect:!0})],Xt.prototype,"size",1);let r3=Xt;customElements.get("nys-radiogroup")||customElements.define("nys-radiogroup",r3);var Lf=Object.defineProperty,zf=Object.getOwnPropertyDescriptor,jn=(l,r,o,s)=>{for(var c=s>1?void 0:s?zf(r,o):r,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=(s?h(r,o,c):h(c))||c);return s&&c&&Lf(r,o,c),c};let Tf=0;var bt;const Tn=(bt=class extends Le{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.required=!1,this.label="",this.description="",this.id="",this.name="",this.value="",this.form=null,this._size="md",this.tile=!1}get size(){return this._size}set size(l){this._size=bt.VALID_SIZES.includes(l)?l:"md"}async getInputElement(){var l;return await this.updateComplete,((l=this.shadowRoot)==null?void 0:l.querySelector("input"))||null}formResetUpdate(){this.checked=!1}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-radiobutton-${Date.now()}-${Tf++}`),this.checked&&(bt.buttonGroup[this.name]&&(bt.buttonGroup[this.name].checked=!1,bt.buttonGroup[this.name].requestUpdate()),bt.buttonGroup[this.name]=this),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur),this.addEventListener("click",this._handleChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}updated(l){l.has("checked")&&this.checked&&bt.buttonGroup[this.name]!==this&&(bt.buttonGroup[this.name]&&(bt.buttonGroup[this.name].checked=!1,bt.buttonGroup[this.name].requestUpdate()),bt.buttonGroup[this.name]=this)}checkValidity(){var l;if(this.required&&!this.checked)return!1;const r=(l=this.shadowRoot)==null?void 0:l.querySelector("input");return r?r.checkValidity():!0}_emitChangeEvent(){this.dispatchEvent(new CustomEvent("nys-change",{detail:{id:this.id,checked:this.checked,name:this.name,value:this.value},bubbles:!0,composed:!0}))}_handleChange(){this.classList.remove("active-focus"),!this.checked&&!this.disabled&&(bt.buttonGroup[this.name]&&(bt.buttonGroup[this.name].checked=!1,bt.buttonGroup[this.name].requestUpdate()),bt.buttonGroup[this.name]=this,this.checked=!0,this._emitChangeEvent())}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this.classList.remove("active-focus"),this.dispatchEvent(new Event("nys-blur"))}_callInputHandling(){var l;if(this.disabled)return;const r=(l=this.shadowRoot)==null?void 0:l.querySelector('input[type="radio"]');r&&(r.focus(),r.click())}render(){return Y`
      <input
        id="${this.id}"
        type="radio"
        name="${_e(this.name?this.name:void 0)}"
        .checked=${this.checked}
        ?disabled=${this.disabled}
        .value=${this.value}
        ?required="${this.required}"
        form=${_e(this.form||void 0)}
        @change="${this._handleChange}"
        hidden
        aria-hidden="true"
      />
      <label
        class="nys-radiobutton"
        for="${this.id}"
        @click="${this._callInputHandling}"
        aria-label=${this.label}
      >
        <span class="nys-radiobutton__radio"></span>
        ${this.label&&Y`<nys-label
          for=${this.id}
          label=${this.label}
          description=${_e(this.description||void 0)}
        >
          <slot name="description" slot="description">${this.description}</slot>
        </nys-label> `}
      </label>
    `}},bt.VALID_SIZES=["sm","md"],bt.buttonGroup={},bt.styles=a3,bt);jn([m({type:Boolean,reflect:!0})],Tn.prototype,"checked",2);jn([m({type:Boolean,reflect:!0})],Tn.prototype,"disabled",2);jn([m({type:Boolean,reflect:!0})],Tn.prototype,"required",2);jn([m({type:String})],Tn.prototype,"label",2);jn([m({type:String})],Tn.prototype,"description",2);jn([m({type:String})],Tn.prototype,"id",2);jn([m({type:String,reflect:!0})],Tn.prototype,"name",2);jn([m({type:String})],Tn.prototype,"value",2);jn([m({type:String,reflect:!0})],Tn.prototype,"form",2);jn([m({reflect:!0})],Tn.prototype,"size",1);jn([m({type:Boolean,reflect:!0})],Tn.prototype,"tile",2);let l3=Tn;customElements.get("nys-radiobutton")||customElements.define("nys-radiobutton",l3);const Rf=Qe`
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
    --_nys-select-border-radius: var(--nys-radius-md, 4px);
    --_nys-select-padding: var(--nys-space-100, 8px) var(--nys-space-400, 32px)
      var(--nys-space-100, 8px) var(--nys-space-100, 8px);

    /* Global Select Colors */
    --_nys-select-color: var(--nys-color-text, #1b1b1b);
    --_nys-select-color--error: var(
      --nys-color-danger,
      var(--nys-color-red-600, #b52c2c)
    );
    --_nys-select-background-color: var(--nys-color-ink-reverse, #fff);
    --_nys-select-background-color--disabled: var(
      --nys-color-neutral-50,
      #ededed
    );
    --_nys-select-color--disabled: var(--nys-color-text-disabled, #bec0c1);

    /* Select Outline & Border States */
    --_nys-select-border-width: var(--nys-border-width-sm, 1px);

    --_nys-select-border-color: var(--nys-color-neutral-400, #909395);
    --_nys-select-border-color--hover: var(--nys-color-neutral-900, #1b1b1b);
    --_nys-select-border-color--focus: var(--nys-color-focus, #004dd1);
    --_nys-select-border-color--disabled: var(--nys-color-neutral-200, #bec0c1);

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
    color: var(--_nys-select-color);
    font-weight: var(--_nys-select-font-weight);
    border-radius: var(--_nys-select-border-radius);
    border: solid var(--_nys-select-border-width)
      var(--_nys-select-border-color);
    font-size: var(--_nys-select-font-size);
    padding: var(--_nys-select-padding);
    width: var(--_nys-select-width);
    max-width: 100%;
    text-indent: 1px;
    text-overflow: "";
    background: var(--_nys-select-background-color);
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
    color: var(--_nys-select-color);
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
    border-color: var(--_nys-select-border-color--hover);
    outline: solid var(--_nys-select-border-width)
      var(--_nys-select-border-color--hover);
  }

  /* Focused */
  .nys-select__select:focus {
    border-color: var(--_nys-select-border-color--focus);
    outline: solid var(--_nys-select-border-width)
      var(--_nys-select-border-color--focus);
  }

  /* Disabled */
  .nys-select__select:disabled {
    background-color: var(--_nys-select-background-color--disabled);
    border-color: var(--_nys-select-border-color--disabled);
    cursor: not-allowed;
    color: var(--_nys-select-color--disabled);
  }
  .nys-select__select:disabled ~ .nys-select__icon {
    color: var(--_nys-select-color--disabled);
  }

  :host([showError]) {
    --_nys-select-border-default: var(--nys-border-width-sm, 1px) solid
      var(--_nys-select-color--error);
  }
`;var Hf=Object.defineProperty,bo=(l,r,o,s)=>{for(var c=void 0,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=h(r,o,c)||c);return c&&Hf(r,o,c),c};class dr extends Le{constructor(){super(...arguments),this.disabled=!1,this.selected=!1,this.value="",this.label="",this.hidden=!1}firstUpdated(){var r;const o=(r=this.shadowRoot)==null?void 0:r.querySelector("slot");o&&o.addEventListener("slotchange",()=>{var s;const c=o.assignedNodes({flatten:!0});c.length>0&&(this.label=((s=c[0].textContent)==null?void 0:s.trim())||"")})}render(){return Y`
      <option
        ?disabled=${this.disabled}
        ?selected=${this.selected}
        value=${this.value}
        label=${this.label}
        ?hidden=${this.hidden}
      >
        <slot>${this.label}</slot>
      </option>
    `}}bo([m({type:Boolean,reflect:!0})],dr.prototype,"disabled");bo([m({type:Boolean,reflect:!0})],dr.prototype,"selected");bo([m({type:String})],dr.prototype,"value");bo([m({type:String})],dr.prototype,"label");bo([m({type:Boolean,reflect:!0})],dr.prototype,"hidden");customElements.define("nys-option",dr);var $f=Object.defineProperty,Of=Object.getOwnPropertyDescriptor,hn=(l,r,o,s)=>{for(var c=s>1?void 0:s?Of(r,o):r,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=(s?h(r,o,c):h(c))||c);return s&&c&&$f(r,o,c),c};let Nf=0;var Ul;const en=(Ul=class extends Le{constructor(){super(),this.id="",this.name="",this.label="",this.description="",this.value="",this.disabled=!1,this.required=!1,this.optional=!1,this._tooltip="",this.form=null,this.showError=!1,this.errorMessage="",this._width="md",this._hasUserInteracted=!1,this._internals=this.attachInternals()}get width(){return this._width}set width(l){this._width=Ul.VALID_WIDTHS.includes(l)?l:"full"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-select-${Date.now()}-${Nf++}`),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}formResetCallback(){this.value=""}_handleSlotChange(){var l,r;const o=(l=this.shadowRoot)==null?void 0:l.querySelector('slot:not([name="description"])'),s=(r=this.shadowRoot)==null?void 0:r.querySelector("select");!o||!s||(s.querySelectorAll("option:not([hidden])").forEach(c=>c.remove()),o.assignedElements({flatten:!0}).forEach(c=>{var d;if(c instanceof dr){const h=document.createElement("option");h.value=c.value,h.textContent=c.label||((d=c.textContent)==null?void 0:d.trim())||"",h.disabled=c.disabled,h.selected=c.selected,s.appendChild(h)}}))}_setValue(){this._internals.setFormValue(this.value),this._manageRequire()}_manageRequire(){var l;const r=(l=this.shadowRoot)==null?void 0:l.querySelector("select");if(!r)return;const o=this.errorMessage||"Please select an option.";this.required&&!this.value?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},o,r)):(this._internals.ariaRequired="false",this._internals.setValidity({}),this._hasUserInteracted=!1)}_setValidityMessage(l=""){var r,o;const s=(r=this.shadowRoot)==null?void 0:r.querySelector("select");s&&(this.showError=!!l,(o=this.errorMessage)!=null&&o.trim()&&l!==""&&(l=this.errorMessage),this._internals.setValidity(l?{customError:!0}:{},l,s))}_validate(){var l;const r=(l=this.shadowRoot)==null?void 0:l.querySelector("select");if(!r)return;let o=r.validationMessage;this._manageRequire(),this._setValidityMessage(o)}checkValidity(){var l;const r=(l=this.shadowRoot)==null?void 0:l.querySelector("select");return r?r.checkValidity():!0}_handleInvalid(l){var r;l.preventDefault(),this._hasUserInteracted=!0,this._validate(),this.showError=!0;const o=(r=this.shadowRoot)==null?void 0:r.querySelector("select");if(o){const s=this._internals.form;s?Array.from(s.elements).find(c=>typeof c.checkValidity=="function"&&!c.checkValidity())===this&&o.focus():o.focus()}}_handleChange(l){const r=l.target;this.value=r.value,this._internals.setFormValue(this.value),this._hasUserInteracted&&this._validate(),this.dispatchEvent(new CustomEvent("nys-change",{detail:{id:this.id,value:this.value},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this._hasUserInteracted||(this._hasUserInteracted=!0),this._validate(),this.dispatchEvent(new Event("nys-blur"))}updated(l){var r;if(super.updated(l),l.has("value")){const o=(r=this.shadowRoot)==null?void 0:r.querySelector("select");o&&(o.value=this.value)}}render(){return Y`
      <div class="nys-select">
        <nys-label
          for=${this.id}
          label=${this.label}
          description=${this.description}
          flag=${this.required?"required":this.optional?"optional":""}
          _tooltip=${this._tooltip}
        >
          <slot name="description" slot="description">${this.description}</slot>
        </nys-label>
        <div class="nys-select__selectwrapper">
          <select
            class="nys-select__select"
            name=${this.name}
            id=${this.id}
            form=${_e(this.form||void 0)}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-disabled="${this.disabled}"
            aria-label="${[this.label,this.description].filter(Boolean).join(" ")}"
            .value=${this.value}
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
            @change="${this._handleChange}"
          >
            <option hidden disabled selected value=""></option>
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
    `}},Ul.VALID_WIDTHS=["sm","md","lg","full"],Ul.styles=Rf,Ul.formAssociated=!0,Ul);hn([m({type:String})],en.prototype,"id",2);hn([m({type:String,reflect:!0})],en.prototype,"name",2);hn([m({type:String})],en.prototype,"label",2);hn([m({type:String})],en.prototype,"description",2);hn([m({type:String})],en.prototype,"value",2);hn([m({type:Boolean,reflect:!0})],en.prototype,"disabled",2);hn([m({type:Boolean,reflect:!0})],en.prototype,"required",2);hn([m({type:Boolean,reflect:!0})],en.prototype,"optional",2);hn([m({type:String})],en.prototype,"_tooltip",2);hn([m({type:String,reflect:!0})],en.prototype,"form",2);hn([m({type:Boolean,reflect:!0})],en.prototype,"showError",2);hn([m({type:String})],en.prototype,"errorMessage",2);hn([m({reflect:!0})],en.prototype,"width",1);let o3=en;customElements.get("nys-select")||customElements.define("nys-select",o3);const Uf=Qe`
  :host {
    /* Global Skipnav Styles */
    --_nys-skipnav-padding--y: var(--nys-space-100, 8px);
    --_nys-skipnav-padding--x: var(--nys-space-200, 16px);
    --_nys-skipnav-gap: var(--nys-space-100, 8px);

    /* Focus Styles */
    --_nys-skipnav-border-width: var(--nys-border-width-md, 2px);
    --_nys-skipnav-border-color: var(--nys-color-link, #004dd1);
    --_nys-skipnav-border-radius: var(--nys-radius-sm, 2px);

    /* Typography */
    --_nys-skipnav-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-skipnav-font-weight: var(--nys-font-weight-semibold, 600);
    --_nys-skipnav-letter-spacing: var(--nys-font-letterspacing-ui-md, 0.044px);
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
    --_nys-skipnav-color: var(--nys-color-link, #004dd1);
    --_nys-skipnav-background-color: var(--nys-color-surface, #fff);
  }

  .nys-skipnav__link {
    position: absolute;
    left: auto;
    top: -4.8rem;
    display: inline-flex;
    padding: var(--_nys-skipnav-padding--y) var(--_nys-skipnav-padding--x);
    align-items: flex-end;
    gap: var(--_nys-skipnav-gap);
    background: var(--_nys-skipnav-background-color);
    color: var(--_nys-skipnav-color);
    border: var(--_nys-skipnav-border-width) solid
      var(--_nys-skipnav-border-color);
    border-radius: var(--_nys-skipnav-border-radius);
    font-family: var(--_nys-skipnav-font-family);
    font-size: var(--_nys-skipnav-font-size);
    font-style: normal;
    font-weight: var(--_nys-skipnav-font-weight);
    line-height: var(--_nys-skipnav-line-height);
    letter-spacing: var(--_nys-skipnav-letter-spacing);
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
`;var Vf=Object.defineProperty,i3=(l,r,o,s)=>{for(var c=void 0,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=h(r,o,c)||c);return c&&Vf(r,o,c),c};const s3=class extends Le{constructor(){super(),this.id="",this.href=""}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-skipnav-${Date.now()}`)}_handleFocus(){var r;const o=(r=this.shadowRoot)==null?void 0:r.querySelector(".nys-skipnav__link");o==null||o.classList.add("show")}_handleBlur(){var r;const o=(r=this.shadowRoot)==null?void 0:r.querySelector(".nys-skipnav__link");o==null||o.classList.remove("show")}_handleClick(){const r=(this.href||"#main-content").replace("#",""),o=document.getElementById(r);o&&(o.setAttribute("tabindex","-1"),o.focus(),o.style.outline="none")}render(){return Y`
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
    `}};s3.styles=Uf;let Ii=s3;i3([m({type:String})],Ii.prototype,"id");i3([m({type:String})],Ii.prototype,"href");customElements.get("nys-skipnav")||customElements.define("nys-skipnav",Ii);const c3=Qe`
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
`;var Bf=Object.defineProperty,Qr=(l,r,o,s)=>{for(var c=void 0,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=h(r,o,c)||c);return c&&Bf(r,o,c),c};const u3=class extends Le{constructor(){super(...arguments),this.selected=!1,this.current=!1,this.label="",this.href="",this.isCompactExpanded=!1,this.stepNumber=0}_handleActivate(r){typeof this.onClick=="function"&&this.onClick(r);const o=new CustomEvent("nys-step-click",{bubbles:!0,composed:!0,cancelable:!0,detail:{href:this.href,label:this.label}});(this.hasAttribute("previous")||this.current)&&!this.selected&&(this.dispatchEvent(o),!o.defaultPrevented&&this.href&&(window.location.href=this.href))}_handleKeydown(r){(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),this._handleActivate(r))}render(){return Y`
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
    `}};u3.styles=c3;let Ea=u3;Qr([m({type:Boolean,reflect:!0})],Ea.prototype,"selected");Qr([m({type:Boolean,reflect:!0})],Ea.prototype,"current");Qr([m({type:String})],Ea.prototype,"label");Qr([m({type:String})],Ea.prototype,"href");Qr([m({type:Boolean})],Ea.prototype,"isCompactExpanded");Qr([m({type:Function})],Ea.prototype,"onClick");Qr([m({type:Number})],Ea.prototype,"stepNumber");customElements.get("nys-step")||customElements.define("nys-step",Ea);var qf=Object.defineProperty,_o=(l,r,o,s)=>{for(var c=void 0,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=h(r,o,c)||c);return c&&qf(r,o,c),c};const d3=class extends Le{constructor(){super(),this.id="",this.name="",this.label="",this.counterText="initial",this.isCompactExpanded=!1,this._stepsNumbered=!1,this._onStepClick=async r=>{const o=r.composedPath().find(h=>h instanceof HTMLElement&&h.tagName.toLowerCase()==="nys-step");if(!o)return;const s=Array.from(this.querySelectorAll("nys-step")),c=s.findIndex(h=>h.hasAttribute("current")),d=s.indexOf(o);c!==-1&&d>c||o.hasAttribute("selected")||(s.forEach(h=>h.removeAttribute("selected")),o.setAttribute("selected",""),this._updateCounter(),this.isCompactExpanded=!1)}}connectedCallback(){super.connectedCallback(),this.addEventListener("nys-step-click",this._onStepClick),requestAnimationFrame(()=>this._validateSteps())}disconnectedCallback(){this.removeEventListener("nys-step-click",this._onStepClick),super.disconnectedCallback()}_validateSteps(){Array.from(this.children).forEach(r=>{const o=r instanceof HTMLElement&&r.tagName.toLowerCase()==="nys-step",s=r instanceof HTMLElement&&r.hasAttribute("slot")&&r.getAttribute("slot")==="actions";!o&&!s&&(console.warn("Only <nys-step> elements or the <div slot='actions'> container are allowed as direct children of <nys-stepper>. Removing:",r),r.remove())})}_validateButtonSlot(r){const o=r.target.assignedElements();if(o.length!==1||o[0].tagName.toLowerCase()!=="div"){console.warn("The 'actions' slot must have exactly one <div> as a direct child.");return}const s=o[0];Array.from(s.children).forEach(c=>{c instanceof HTMLElement&&c.tagName.toLowerCase()==="nys-button"?(c.setAttribute("size","sm"),c.hasAttribute("fullWidth")&&(c.style.flex="1 1 0")):(console.warn("The <div> inside 'actions' slot only accepts <nys-button> elements. Removing invalid node:",c),c.remove())})}_updateCounter(){if(this.isCompactExpanded){this.counterText="Back to Form",this.style.height="-webkit-fit-content",this.style.height="-moz-fit-content",this.style.height="fit-content";return}else this.style.height="auto";const r=this.querySelectorAll("nys-step"),o=Array.from(r).findIndex(c=>c.hasAttribute("selected")),s=r.length;this.counterText=o>=0?`Step ${o+1} of ${s}`:`Step 1 of ${s}`}updated(){const r=this.querySelectorAll("nys-step");this._stepsNumbered||(r.forEach((d,h)=>{d.stepNumber=h+1}),this._stepsNumbered=!0);let o=!1,s=!1,c=!1;r.forEach((d,h)=>{d.hasAttribute("current")&&(c?d.removeAttribute("current"):c=!0),h===0?d.setAttribute("first",""):d.removeAttribute("first"),d.hasAttribute("current")?(o=!0,d.removeAttribute("previous")):o?d.removeAttribute("previous"):d.setAttribute("previous",""),d.hasAttribute("selected")&&(o||s?d.removeAttribute("selected"):s=!0),this.hasAttribute("isCompactExpanded")?d.setAttribute("isCompactExpanded",""):d.removeAttribute("isCompactExpanded")}),s||(c?r.forEach(d=>{d.hasAttribute("current")&&!s&&(d.setAttribute("selected",""),s=!0)}):r.length>0&&(r[0].setAttribute("current",""),r[0].setAttribute("selected",""))),this._updateCounter()}_toggleCompact(){this.isCompactExpanded=!this.isCompactExpanded}_handleCounterKeydown(r){(r.key===" "||r.key==="Enter")&&(r.preventDefault(),this._toggleCompact())}render(){return Y`
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
    `}};d3.styles=c3;let Fr=d3;_o([m({type:String})],Fr.prototype,"id");_o([m({type:String,reflect:!0})],Fr.prototype,"name");_o([m({type:String})],Fr.prototype,"label");_o([m({type:String})],Fr.prototype,"counterText");_o([m({type:Boolean,reflect:!0})],Fr.prototype,"isCompactExpanded");customElements.get("nys-stepper")||customElements.define("nys-stepper",Fr);const jf=Qe`
  :host {
    /* Anything that can be overridden should be defined here */

    /* Global Text Input Styles */
    --_nys-textarea-width: 100%;
    --_nys-textarea-border-radius: var(--nys-radius-md, 4px);
    --_nys-textarea-border-width: var(--nys-border-width-sm, 1px);
    --_nys-textarea-border-color: var(--nys-color-neutral-400, #909395);
    --_nys-textarea-padding: var(--nys-space-100, 8px);
    --_nys-textarea-gap: var(--nys-space-50, 4px);
    --_nys-textarea-color: var(--nys-color-ink, #1b1b1b);
    --_nys-textarea-color--placeholder: var(
      --nys-color-text-weaker,
      var(--nys-color-neutral-500, #797c7f)
    );

    /* Hovered */
    --_nys-textarea-outline-color--hover: var(--nys-color-neutral-900, #1b1b1b);
    --_nys-textarea-outline-width: var(--nys-border-width-sm, 1px);

    /* Focused */
    --_nys-textarea-outline-color--focus: var(--nys-color-focus, #004dd1);

    /* Disabled */
    --_nys-textarea-background-color--disabled: var(
      --nys-color-neutral-10,
      #f6f6f6
    );
    --_nys-textarea-border-color--disabled: var(
      --nys-color-neutral-200,
      #bec0c1
    );
    --_nys-textarea-color--disabled: var(
      --nys-color-text-disabled,
      var(--nys-color-neutral-200, #bec0c1)
    );

    /* Global Font Styles */
    --_nys-textarea-font-family: var(
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
    --_nys-textarea-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-textarea-font-weight: var(--nys-font-weight-regular, 400);
    --_nys-textarea-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --nys-textarea-letterspacing-ui: var(
      --nys-font-letterspacing-ui-md,
      var(--nys-font-letterspacing-400, 0.044px)
    );
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
    --_nys-textarea-border-color: var(--nys-color-danger, #b52c2c);
  }

  .nys-textarea {
    font-weight: var(--_nys-textarea-font-weight);
    font-family: var(--_nys-textarea-font-family);
    line-height: var(--_nys-textarea-line-height);
    letter-spacing: var(--nys-textarea-letterspacing-ui);
    color: var(--_nys-textarea-color);
    gap: var(--_nys-textarea-gap);
    display: flex;
    flex-direction: column;
  }

  .nys-textarea__textarea {
    color: var(--_nys-textarea-color);
    font-size: var(--_nys-textarea-font-size);
    font-family: var(--_nys-textarea-font-family);
    border-radius: var(--_nys-textarea-border-radius);
    border: solid var(--_nys-textarea-border-color)
      var(--_nys-textarea-border-width);
    padding: var(--_nys-textarea-padding);
    width: var(--_nys-textarea-width);
    line-height: var(--_nys-textarea-line-height);
    max-width: var(--_nys-textarea-width);
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  .nys-textarea__textarea::placeholder {
    color: var(--_nys-textarea-color--placeholder);
  }

  /* Resize */
  .nys-textarea__textarea.none {
    resize: none;
  }

  /* Hovered */
  .nys-textarea__textarea:hover:not(:disabled):not(:focus) {
    outline: solid var(--_nys-textarea-outline-width)
      var(--_nys-textarea-outline-color--hover);
    border-color: var(--_nys-textarea-outline-color--hover);
  }

  /* Focused */
  .nys-textarea__textarea:focus {
    outline: solid var(--_nys-textarea-outline-width)
      var(--_nys-textarea-outline-color--focus);
    border-color: var(--_nys-textarea-outline-color--focus);
    caret-color: var(--_nys-textarea-outline-color--focus);
  }

  /* Disabled */
  .nys-textarea__textarea:disabled,
  .nys-textarea__textarea:disabled::placeholder {
    background-color: var(--_nys-textarea-background-color--disabled);
    border-color: var(--_nys-textarea-border-color--disabled);
    color: var(--_nys-textarea-color--disabled);
    cursor: not-allowed;
  }
`;var Zf=Object.defineProperty,Yf=Object.getOwnPropertyDescriptor,Mt=(l,r,o,s)=>{for(var c=s>1?void 0:s?Yf(r,o):r,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=(s?h(r,o,c):h(c))||c);return s&&c&&Zf(r,o,c),c};let Gf=0;var Ia;const Ct=(Ia=class extends Le{constructor(){super(),this.id="",this.name="",this.label="",this.description="",this.placeholder="",this.value="",this.disabled=!1,this.readonly=!1,this.required=!1,this.optional=!1,this._tooltip="",this.form=null,this.maxlength=null,this.width="full",this.rows=4,this._resize="vertical",this.showError=!1,this.errorMessage="",this._hasUserInteracted=!1,this._internals=this.attachInternals()}get resize(){return this._resize}set resize(l){this._resize=Ia.VALID_RESIZE.includes(l)?l:"vertical"}async updated(l){await Promise.resolve(),l.has("width")&&(this.width=Ia.VALID_WIDTHS.includes(this.width)?this.width:"full"),l.has("rows")&&(this.rows=this.rows??4)}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-textarea-${Date.now()}-${Gf++}`),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}formResetCallback(){this.value=""}_setValue(){this._internals.setFormValue(this.value),this._manageRequire()}_manageRequire(){var l;const r=(l=this.shadowRoot)==null?void 0:l.querySelector("textarea");if(!r)return;const o=this.errorMessage||"This field is required";this.required&&!this.value?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},o,r)):(this._internals.ariaRequired="false",this._internals.setValidity({}),this._hasUserInteracted=!1)}_setValidityMessage(l=""){var r,o;const s=(r=this.shadowRoot)==null?void 0:r.querySelector("textarea");s&&(this.showError=!!l,(o=this.errorMessage)!=null&&o.trim()&&l!==""&&(l=this.errorMessage),this._internals.setValidity(l?{customError:!0}:{},l,s))}_validate(){var l;const r=(l=this.shadowRoot)==null?void 0:l.querySelector("textarea");if(!r)return;let o=r.validationMessage;this._setValidityMessage(o)}checkValidity(){var l;const r=(l=this.shadowRoot)==null?void 0:l.querySelector("textarea");return r?r.checkValidity():!0}_handleInvalid(l){var r;l.preventDefault(),this._hasUserInteracted=!0,this._validate();const o=(r=this.shadowRoot)==null?void 0:r.querySelector("textarea");if(o){const s=this._internals.form;s?Array.from(s.elements).find(c=>typeof c.checkValidity=="function"&&!c.checkValidity())===this&&o.focus():o.focus()}}_handleInput(l){const r=l.target;this.value=r.value,this._internals.setFormValue(this.value),this._hasUserInteracted&&this._validate(),this.dispatchEvent(new CustomEvent("nys-input",{detail:{id:this.id,value:this.value},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this._hasUserInteracted||(this._hasUserInteracted=!0),this._validate(),this.dispatchEvent(new Event("nys-blur"))}_handleSelect(l){const r=l.target;this.value=r.value,this.dispatchEvent(new CustomEvent("nys-select",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleSelectionChange(l){const r=l.target;this.value=r.value,this.dispatchEvent(new CustomEvent("nys-selectionchange",{detail:{id:this.id,value:this.value},bubbles:!0,composed:!0}))}render(){return Y`
      <label class="nys-textarea">
        <nys-label
          for=${this.id}
          label=${this.label}
          description=${this.description}
          flag=${this.required?"required":this.optional?"optional":""}
          _tooltip=${this._tooltip}
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
          aria-disabled=${_e(this.disabled?"true":void 0)}
          aria-required=${_e(this.required?"true":void 0)}
          aria-label=${_e(this.label||void 0)}
          aria-description=${_e(this.description||void 0)}
          placeholder=${_e(this.placeholder?this.placeholder:void 0)}
          maxlength=${_e(this.maxlength??void 0)}
          .rows=${this.rows}
          form=${_e(this.form||void 0)}
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
    `}},Ia.VALID_WIDTHS=["sm","md","lg","full"],Ia.VALID_RESIZE=["vertical","none"],Ia.styles=jf,Ia.formAssociated=!0,Ia);Mt([m({type:String})],Ct.prototype,"id",2);Mt([m({type:String,reflect:!0})],Ct.prototype,"name",2);Mt([m({type:String})],Ct.prototype,"label",2);Mt([m({type:String})],Ct.prototype,"description",2);Mt([m({type:String})],Ct.prototype,"placeholder",2);Mt([m({type:String})],Ct.prototype,"value",2);Mt([m({type:Boolean,reflect:!0})],Ct.prototype,"disabled",2);Mt([m({type:Boolean,reflect:!0})],Ct.prototype,"readonly",2);Mt([m({type:Boolean,reflect:!0})],Ct.prototype,"required",2);Mt([m({type:Boolean,reflect:!0})],Ct.prototype,"optional",2);Mt([m({type:String})],Ct.prototype,"_tooltip",2);Mt([m({type:String,reflect:!0})],Ct.prototype,"form",2);Mt([m({type:Number})],Ct.prototype,"maxlength",2);Mt([m({reflect:!0})],Ct.prototype,"width",2);Mt([m({type:Number})],Ct.prototype,"rows",2);Mt([m({reflect:!0})],Ct.prototype,"resize",1);Mt([m({type:Boolean,reflect:!0})],Ct.prototype,"showError",2);Mt([m({type:String})],Ct.prototype,"errorMessage",2);let h3=Ct;customElements.get("nys-textarea")||customElements.define("nys-textarea",h3);const Xf=Qe`
  :host {
    /* Anything that can be overridden should be defined here */

    /* Global Text Input Styles */
    --_nys-textinput-width: 100%;
    --_nys-textinput-height: var(--nys-size-500, 40px);
    --_nys-textinput-border-radius: var(--nys-radius-md, 4px);
    --_nys-textinput-border-width: var(--nys-border-width-sm, 1px);
    --_nys-textinput-border-color: var(--nys-color-neutral-400, #909395);
    --_nys-textinput-color: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-textinput-color--placeholder: var(
      --nys-color-text-weaker,
      var(--nys-color-neutral-500, #797c7f)
    );
    --_nys-textinput-padding: var(--nys-space-100, 8px);
    --_nys-textinput-gap: var(--nys-space-50, 4px);
    --_nys-textinput-background-color: var(
      --nys-color-ink-reverse,
      var(--nys-color-white, #ffffff)
    );
    --_nys-textinput-color: var(
      --nys-color-ink,
      var(--nys-color-neutral-900, #1b1b1b)
    );

    /* Hovered */
    --_nys-textinput-outline-color--hover: var(
      --nys-color-neutral-900,
      #1b1b1b
    );
    --_nys-textinput-outline-width: var(--nys-border-width-sm, 1px);

    /* Focused */
    --_nys-textinput-outline-color--focus: var(--nys-color-focus, #004dd1);

    /* Disabled */
    --_nys-textinput-background-color--disabled: var(
      --nys-color-neutral-10,
      #f6f6f6
    );
    --_nys-textinput-border-color--disabled: var(
      --nys-color-neutral-200,
      #bec0c1
    );
    --_nys-textinput-color--disabled: var(
      --nys-color-text-disabled,
      var(--nys-color-neutral-200, #bec0c1)
    );

    /* Global Font Styles */
    --_nys-textinput-font-family: var(
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
    --_nys-textinput-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-textinput-font-weight: var(--nys-font-weight-regular, 400);
    --_nys-textinput-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-textinput-letter-spacing: var(
      --nys-font-letterspacing-ui-md,
      var(--nys-font-letterspacing-400, 0.044px)
    );
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
    --_nys-textinput-border-color: var(--nys-color-danger, #b52c2c);
  }

  .nys-textinput {
    font-weight: var(--_nys-textinput-font-weight);
    font-family: var(--_nys-textinput-font-family);
    font-size: var(--_nys-textinput-font-size);
    line-height: var(--_nys-textinput-line-height);
    letter-spacing: var(--_nys-textinput-letter-spacing);
    color: var(--_nys-textinput-color);
    gap: var(--_nys-textinput-gap);
    display: flex;
    flex-direction: column;
  }

  .nys-textinput__mask-overlay {
    position: absolute;
    margin: calc(
      var(--_nys-textinput-padding) + var(--_nys-textinput-border-width)
    );
    color: var(--nys-color-text-weaker, #797c7f);
    display: inline;
    overflow: hidden;
    white-space: nowrap;
    font: inherit;
    letter-spacing: normal;
  }

  .nys-textinput__input {
    color: var(--_nys-textinput-color);
    border-radius: var(--_nys-textinput-border-radius);
    border: solid var(--_nys-textinput-border-color)
      var(--_nys-textinput-border-width);
    outline-color: transparent;
    outline-width: var(--_nys-textinput-outline-width);
    outline-style: solid;
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
    color: var(--_nys-textinput-color--placeholder);
  }

  .nys-textinput__buttoncontainer {
    width: var(--_nys-textinput-width);
    max-width: 100%;
    display: flex;
  }

  .nys-textinput__buttoncontainer.has-end-button .nys-textinput__input {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
    border-inline-end: none;
  }

  .nys-textinput__buttoncontainer.has-start-button .nys-textinput__input {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
    border-inline-start: none;
  }

  .nys-textinput__container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    background-color: var(--_nys-textinput-background-color);
    border-radius: var(--_nys-textinput-border-radius);
  }

  ::slotted(nys-button) {
    /* These props ARE NOT publicly overridable */
    --_nys-button-height: var(--_nys-textinput-height);
    --_nys-button-border-radius--start: var(--_nys-textinput-border-radius);
    --_nys-button-border-radius--end: var(--_nys-textinput-border-radius);
    --_nys-button-background-color--disabled: var(
      --_nys-textinput-background-color--disabled
    );
    --_nys-button-border-color--disabled: var(--_nys-textinput-color--disabled);
    --_nys-button-color--disabled: var(--_nys-textinput-color--disabled);
    --_nys-button-border-width: var(--_nys-textinput-border-width);
    z-index: 1; /* to make sure the button outline renders on top of the input */
  }

  .nys-textinput__buttoncontainer.has-start-button ::slotted(nys-button) {
    --_nys-button-border-radius--end: 0;
  }

  .nys-textinput__buttoncontainer.has-end-button ::slotted(nys-button) {
    --_nys-button-border-radius--start: 0;
  }

  .eye-icon {
    position: absolute;
    right: var(--nys-space-50, 4px);
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: var(--_nys-textinput-color--icon);
    /* These props ARE publicly overridable */
    --nys-button-background-color: var(--_nys-textinput-background-color);
    --nys-button-background-color--hover: var(
      --_nys-textinput-background-color
    );
    --nys-button-background-color--active: var(
      --_nys-textinput-background-color
    );
    /* These props ARE NOT publicly overridable */
    --_nys-button-outline-focus: calc(
      var(--_nys-button-outline-width) * -1
    ); /* Needs to be negative of the offset width */
    --_nys-button-padding--y: var(--nys-space-50, 4px);
    --_nys-button-padding--x: var(--nys-space-50, 4px);
    --_nys-button-height: var(--nys-size-300, 32px);
    --_nys-button-width: var(--nys-size-400, 32px);
  }

  /* Hovered */
  .nys-textinput__input:hover:not(:disabled):not(:focus) {
    outline-color: var(--_nys-textinput-outline-color--hover);
    border-color: var(--_nys-textinput-outline-color--hover);
  }

  /* Focused */
  .nys-textinput__input:focus {
    outline-color: var(--_nys-textinput-outline-color--focus);
    border-color: var(--_nys-textinput-outline-color--focus);
    caret-color: var(--_nys-textinput-outline-color--focus);
  }

  /* Disabled */
  .nys-textinput__input:disabled,
  .nys-textinput__input:disabled::placeholder,
  .nys-textinput__input:disabled + .eye-icon {
    background-color: var(--_nys-textinput-background-color--disabled);
    border-color: var(--_nys-textinput-border-color--disabled);
    color: var(--_nys-textinput-color--disabled);
    cursor: not-allowed;
  }
`;var Qf=Object.defineProperty,Ff=Object.getOwnPropertyDescriptor,ut=(l,r,o,s)=>{for(var c=s>1?void 0:s?Ff(r,o):r,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=(s?h(r,o,c):h(c))||c);return s&&c&&Qf(r,o,c),c};let Kf=0;var er;const nt=(er=class extends Le{constructor(){super(),this.id="",this.name="",this._type="text",this.label="",this.description="",this.placeholder="",this.value="",this.disabled=!1,this.readonly=!1,this.required=!1,this.optional=!1,this._tooltip="",this.form=null,this.pattern="",this.maxlength=null,this.width="full",this.step=null,this.min=null,this.max=null,this.showError=!1,this.errorMessage="",this.showPassword=!1,this._originalErrorMessage="",this._hasUserInteracted=!1,this._maskPatterns={tel:"(___) ___-____"},this._internals=this.attachInternals()}get type(){return this._type}set type(l){this._type=er.VALID_TYPES.includes(l)?l:"text"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-textinput-${Date.now()}-${Kf++}`),this._originalErrorMessage=this.errorMessage??"",this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}async updated(l){var r,o;if(l.has("width")&&(await Promise.resolve(),this.width=er.VALID_WIDTHS.includes(this.width)?this.width:"full"),l.has("disabled")&&(this._validateButtonSlot("startButton"),this._validateButtonSlot("endButton")),l.has("type")){const s=this._maskPatterns[this.type],c=(r=this.shadowRoot)==null?void 0:r.querySelector("input");if(c)if(s)c.maxLength=s.length,this._updateOverlay(c.value,s);else{c.removeAttribute("maxLength");const d=(o=this.shadowRoot)==null?void 0:o.querySelector(".nys-textinput__mask-overlay");d&&(d.textContent="")}}}formResetCallback(){this.value=""}_setValue(){this._internals.setFormValue(this.value),this._manageRequire()}_manageRequire(){var l,r;const o=(l=this.shadowRoot)==null?void 0:l.querySelector("input");if(!o)return;const s=this.errorMessage||"This field is required";this.required&&(!this.value||((r=this.value)==null?void 0:r.trim())==="")?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},s,o)):(this._internals.ariaRequired="false",this._internals.setValidity({}),this._hasUserInteracted=!1)}_setValidityMessage(l=""){var r,o;const s=(r=this.shadowRoot)==null?void 0:r.querySelector("input");if(!s)return;this.showError=!!l,(o=this._originalErrorMessage)!=null&&o.trim()&&l!==""?this.errorMessage=this._originalErrorMessage:this.errorMessage=l;const c=l?{customError:!0}:{};this._internals.setValidity(c,this.errorMessage,s)}_validate(){var l;const r=(l=this.shadowRoot)==null?void 0:l.querySelector("input");if(!r)return;const o=r.validity;let s="";o.valueMissing?s="This field is required":o.typeMismatch?s="Invalid format for this type":o.patternMismatch?s="Invalid format":o.tooShort?s=`Value is too short. Minimum length is ${r.minLength}`:o.tooLong?s=`Value is too long. Maximum length is ${r.maxLength}`:o.rangeUnderflow?s=`Value must be at least ${r.min}`:o.rangeOverflow?s=`Value must be at most ${r.max}`:o.stepMismatch?s="Invalid step value":s=r.validationMessage,this._setValidityMessage(s)}checkValidity(){var l;const r=(l=this.shadowRoot)==null?void 0:l.querySelector("input");return r?r.checkValidity():!0}_handleInvalid(l){var r;l.preventDefault(),this._hasUserInteracted=!0,this._validate();const o=(r=this.shadowRoot)==null?void 0:r.querySelector("input");if(o){const s=this._internals.form;s?Array.from(s.elements).find(c=>typeof c.checkValidity=="function"&&!c.checkValidity())===this&&o.focus():o.focus()}}_togglePasswordVisibility(){this.showPassword=!this.showPassword}_updateOverlay(l,r){var o;const s=(o=this.shadowRoot)==null?void 0:o.querySelector(".nys-textinput__mask-overlay");if(!s)return;const c=l,d=r.slice(c.length);s.textContent=c+d}_applyMask(l,r){const o=l.replace(/\D/g,"");let s="";if(this.type==="tel")return o.length>0&&(s="("+o.substring(0,3)),o.length>=4&&(s+=") "+o.substring(3,6)),o.length>6&&(s+="-"+o.substring(6,10)),s;let c=0;for(let d=0;d<r.length;d++)if(r[d]==="_"||r[d].match(/[d9]/i))if(c<o.length)s+=o[c++];else break;else s+=r[d];return s}_handleInput(l){const r=l.target;let o=r.value;const s=this._maskPatterns[this.type];s&&(o=this._applyMask(o,s),r.value=o,this._updateOverlay(o,s)),this.value=o,this._internals.setFormValue(this.value),this._hasUserInteracted&&this._validate(),this.dispatchEvent(new CustomEvent("nys-input",{detail:{id:this.id,value:this.value},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this._hasUserInteracted||(this._hasUserInteracted=!0),this._validate(),this.dispatchEvent(new Event("nys-blur"))}_validateButtonSlot(l){var r,o;const s=(r=this.shadowRoot)==null?void 0:r.querySelector('slot[name="'+l+'"]'),c=(o=this.shadowRoot)==null?void 0:o.querySelector(".nys-textinput__buttoncontainer");if(!s||!c)return;const d=s.assignedElements();let h=!1;d.forEach(g=>{g instanceof HTMLElement&&g.tagName.toLowerCase()==="nys-button"&&!h?(h=!0,g.setAttribute("size","sm"),g.setAttribute("variant","primary"),this.disabled?g.setAttribute("disabled","true"):g.removeAttribute("disabled")):(console.warn("The '"+l+"' slot only accepts a single <nys-button> element. Removing invalid or extra node:",g),g.remove())}),l==="startButton"?c.classList.toggle("has-start-button",h):l==="endButton"&&c.classList.toggle("has-end-button",h)}render(){return Y`
      <div class="nys-textinput">
        <nys-label
          for=${this.id}
          label=${this.label}
          description=${this.description}
          flag=${this.required?"required":this.optional?"optional":""}
          _tooltip=${this._tooltip}
        >
          <slot name="description" slot="description">${this.description}</slot>
        </nys-label>
        <div class="nys-textinput__buttoncontainer">
          <slot
            name="startButton"
            @slotchange=${()=>this._validateButtonSlot("startButton")}
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
              placeholder=${_e(this.placeholder?this.placeholder:void 0)}
              pattern=${_e(this.pattern?this.pattern:void 0)}
              min=${_e(this.min!==null?this.min:void 0)}
              maxlength=${_e(this.maxlength!==null?this.maxlength:void 0)}
              step=${_e(this.step!==null?this.step:void 0)}
              max=${_e(this.max!==null?this.max:void 0)}
              form=${_e(this.form||void 0)}
              @input=${this._handleInput}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
            />
            ${this.type==="password"?Y` <nys-button
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
            @slotchange=${()=>this._validateButtonSlot("endButton")}
          ></slot>
        </div>
        <nys-errormessage
          ?showError=${this.showError}
          errorMessage=${this.errorMessage}
        ></nys-errormessage>
      </div>
    `}},er.VALID_TYPES=["email","number","password","search","tel","text","url"],er.VALID_WIDTHS=["sm","md","lg","full"],er.styles=Xf,er.formAssociated=!0,er);ut([m({type:String})],nt.prototype,"id",2);ut([m({type:String,reflect:!0})],nt.prototype,"name",2);ut([m({reflect:!0})],nt.prototype,"type",1);ut([m({type:String})],nt.prototype,"label",2);ut([m({type:String})],nt.prototype,"description",2);ut([m({type:String})],nt.prototype,"placeholder",2);ut([m({type:String})],nt.prototype,"value",2);ut([m({type:Boolean,reflect:!0})],nt.prototype,"disabled",2);ut([m({type:Boolean,reflect:!0})],nt.prototype,"readonly",2);ut([m({type:Boolean,reflect:!0})],nt.prototype,"required",2);ut([m({type:Boolean,reflect:!0})],nt.prototype,"optional",2);ut([m({type:String})],nt.prototype,"_tooltip",2);ut([m({type:String,reflect:!0})],nt.prototype,"form",2);ut([m({type:String})],nt.prototype,"pattern",2);ut([m({type:Number})],nt.prototype,"maxlength",2);ut([m({reflect:!0})],nt.prototype,"width",2);ut([m({type:Number})],nt.prototype,"step",2);ut([m({type:Number})],nt.prototype,"min",2);ut([m({type:Number})],nt.prototype,"max",2);ut([m({type:Boolean,reflect:!0})],nt.prototype,"showError",2);ut([m({type:String})],nt.prototype,"errorMessage",2);ut([Yt()],nt.prototype,"showPassword",2);let f3=nt;customElements.get("nys-textinput")||customElements.define("nys-textinput",f3);const Pf=Qe`
  :host {
    /* Global Toggle Styles */
    --_nys-toggle-width: var(--nys-font-size-8xl, 44px);
    --_nys-toggle-height: var(--nys-size-300, 24px);
    --_nys-toggle-border-radius: var(--nys-radius-round, 1776px);
    --_nys-toggle-border-width: var(--nys-border-width-md, 2px);
    --_nys-toggle-size--knob: var(--nys-font-size-lg, 18px);
    --_nys-toggle-margin--knob: calc(
      (var(--_nys-toggle-height) - var(--_nys-toggle-size--knob)) / 2
    );
    --_nys-toggle-transform--translateX: calc(
      var(--_nys-toggle-width) - var(--_nys-toggle-size--knob) - var(
          --_nys-toggle-margin--knob
        ) -
        2px
    );
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
    --_nys-toggle-outline-color: var(--nys-color-focus, #004dd1);
    --_nys-toggle-outline-width: var(--nys-border-width-md, 2px);

    /* Slider colors */
    --_nys-toggle-background-color: var(--nys-color-neutral-500, #797c7f);
    --_nys-toggle-background-color--disabled: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
    --_nys-toggle-background-color--checked: var(--nys-color-theme, #154973);
    --_nys-toggle-background-color--hover: var(
      --nys-color-neutral-600,
      #62666a
    );
    --_nys-toggle-background-color--active: var(
      --nys-color-neutral-700,
      #4a4d4f
    );
    --_nys-toggle-background-color--checked--hover: var(
      --nys-color-theme-strong,
      #0e324f
    );
    --_nys-toggle-background-color--checked--active: var(
      --nys-color-theme-stronger,
      #081b2b
    );
    --_nys-toggle-color-ink-reverse: var(--nys-color-ink-reverse, #fff);

    /* Font sizes, color, and spacing for labels, descriptions, and icons */
    --_nys-toggle-color: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-toggle-color--disabled: var(--nys-color-neutral-500, #797c7f);
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
    color: var(--_nys-toggle-color);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: var(--_nys-toggle-font-size);
    font-family: var(--_nys-toggle-font-family);
    font-weight: var(--_nys-toggle-font-weight);
    line-height: var(--_nys-toggle-line-height);
  }

  .nys-toggle__content:has(input:disabled) .nys-toggle__text * {
    color: var(--_nys-toggle-color--disabled);
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
    outline-offset: var(--_nys-toggle-border-width);
    width: var(--_nys-toggle-width);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--_nys-toggle-background-color);
    display: flex;
    align-items: center;
  }

  .knob {
    content: "";
    height: var(--_nys-toggle-size--knob);
    width: var(--_nys-toggle-size--knob);
    margin: var(--_nys-toggle-margin--knob);
    border-radius: var(--nys-radius-round, 1776px);
    background-color: var(--_nys-toggle-color-ink-reverse);
    transition: all var(--_nys-toggle-transition-duration)
      cubic-bezier(0.27, 0.2, 0.25, 1.51);
    overflow: hidden;
    display: flex; /* Center icon inside the knob */
    align-items: center;
    justify-content: center;
  }

  /* Switch BG: Checked */
  input:checked + .slider {
    background-color: var(--_nys-toggle-background-color--checked);
  }

  /* Switch BG: Hover */
  .slider:hover {
    background-color: var(--_nys-toggle-background-color--hover);
  }

  /* Switch BG: Hover + Checked */
  input:checked + .slider:hover {
    background-color: var(--_nys-toggle-background-color--checked--hover);
  }

  /* Switch Icon color: Hover */
  .slider:hover .knob .toggle-icon {
    color: var(--_nys-toggle-background-color--hover);
  }

  /* Switch Icon color: Hover + Checked */
  input:checked:not(:disabled) + .slider:hover .knob .toggle-icon {
    color: var(--_nys-toggle-background-color--checked--hover);
  }

  /* Switch BG: Active */
  input:active:not(:disabled) + .slider {
    background-color: var(--_nys-toggle-background-color--active);
    outline: solid var(--_nys-toggle-outline-width)
      var(--_nys-toggle-outline-color);
  }

  /* Switch BG: Active + Checked */
  input:active:checked + .slider {
    background-color: var(--_nys-toggle-background-color--checked--active);
  }

  /* Switch Outline: Focus */
  input:focus + .slider {
    outline: solid var(--_nys-toggle-outline-width)
      var(--_nys-toggle-outline-color);
  }

  /* Switch Knob: Checked */
  input:checked + .slider .knob {
    transform: translateX(var(--_nys-toggle-transform--translateX));
  }

  /* Icon Styling */
  .toggle-icon {
    position: absolute;
    color: var(--_nys-toggle-background-color);
  }
  input:checked + .slider .knob .toggle-icon {
    color: var(--_nys-toggle-background-color--checked);
  }
  input:active + .slider .knob .toggle-icon {
    color: var(--_nys-toggle-background-color--active);
  }
  input:active:checked + .slider .knob .toggle-icon {
    color: var(--_nys-toggle-background-color--checked--active);
  }
  :host([size="sm"]) .toggle-icon {
    font-size: var(--nys-font-size-body-xs, 12px);
  }
  :host([size="md"]) .toggle-icon {
    font-size: var(--nys-font-size-body-sm, 14px);
  }
  /* If 'cap' is not supported, account for the extra padding from svg due to nys-icon's 'display:inline' */
  @supports not (font-size: 1cap) {
    :host([size="sm"]) .toggle-icon {
      font-size: var(--nys-font-size-body-xs, 12px);
    }
    :host([size="md"]) .toggle-icon {
      font-size: calc(var(--nys-font-size-body-sm, 14px) - 1px);
    }
  }

  /*** Disabled State ***/
  /* Switch BG: Disabled */
  input:disabled + .slider,
  input:disabled + .slider:hover {
    background-color: var(--_nys-toggle-background-color--disabled);
    cursor: not-allowed;
  }
  input:disabled + .slider .knob .toggle-icon,
  input:disabled:active + .slider .knob .toggle-icon {
    color: var(--_nys-toggle-background-color--disabled);
  }

  /* Sizes */
  :host([size="sm"]) {
    --_nys-toggle-width: var(--nys-size-450, 36px);
    --_nys-toggle-height: var(--nys-size-250, 20px);
    --_nys-toggle-size--knob: var(--nys-size-200, 16px);
    --_nys-toggle-gap: var(--nys-space-100, 8px);
  }

  :host([size="md"]) {
    --_nys-toggle-width: var(--nys-size-550, 44px);
    --_nys-toggle-height: var(--nys-size-300, 24px);
    --_nys-toggle-size--knob: var(--nys-size-250, 20px);
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      --toggle-transition-duration: 0s; /* Disable animation */
    }
  }
`;var Jf=Object.defineProperty,Wf=Object.getOwnPropertyDescriptor,aa=(l,r,o,s)=>{for(var c=s>1?void 0:s?Wf(r,o):r,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=(s?h(r,o,c):h(c))||c);return s&&c&&Jf(r,o,c),c};let If=0;var Vl;const Zn=(Vl=class extends Le{constructor(){super(),this.id="",this.name="",this.value="",this.label="",this.description="",this.form=null,this.checked=!1,this.disabled=!1,this.noIcon=!1,this._size="md",this._internals=this.attachInternals()}get size(){return this._size}set size(l){this._size=Vl.VALID_SIZES.includes(l)?l:"md"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-toggle-${Date.now()}-${If++}`)}updated(l){(l.has("checked")||l.has("value"))&&this._internals.setFormValue(this.checked?this.value:null)}_emitChangeEvent(){this.dispatchEvent(new CustomEvent("nys-change",{detail:{id:this.id,checked:this.checked},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this.dispatchEvent(new Event("nys-blur"))}_handleChange(l){const{checked:r}=l.target;this.checked=r,this._emitChangeEvent()}_handleKeyDown(l){!this.disabled&&(l.key===" "||l.key==="Enter")&&(l.preventDefault(),this.checked=!this.checked,this._emitChangeEvent())}render(){return Y`
      <label class="nys-toggle">
        <div class="nys-toggle__content">
          <div class="nys-toggle__toggle">
            <input
              id="${this.id}"
              type="checkbox"
              name="${_e(this.name?this.name:void 0)}"
              .value=${this.value}
              form=${_e(this.form||void 0)}
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
                ${this.noIcon?"":Y`<nys-icon
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
    `}},Vl.VALID_SIZES=["sm","md"],Vl.styles=Pf,Vl.formAssociated=!0,Vl);aa([m({type:String})],Zn.prototype,"id",2);aa([m({type:String,reflect:!0})],Zn.prototype,"name",2);aa([m({type:String})],Zn.prototype,"value",2);aa([m({type:String})],Zn.prototype,"label",2);aa([m({type:String})],Zn.prototype,"description",2);aa([m({type:String,reflect:!0})],Zn.prototype,"form",2);aa([m({type:Boolean,reflect:!0})],Zn.prototype,"checked",2);aa([m({type:Boolean,reflect:!0})],Zn.prototype,"disabled",2);aa([m({type:Boolean})],Zn.prototype,"noIcon",2);aa([m({reflect:!0})],Zn.prototype,"size",1);let y3=Zn;customElements.get("nys-toggle")||customElements.define("nys-toggle",y3);const ey=Qe`
  :host {
    /* Global Tooltip Styles */
    --_nys-tooltip-color: var(--nys-color-text-reverse, #ffffff);
    --_nys-tooltip-background-color: var(--nys-color-ink, #1b1b1b);
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
    --_nys-tooltip-letter-spacing: var(--nys-font-letterspacing-ui-sm, 0.044px);
    --_nys-tooltip-line-height: var(--nys-font-lineheight-ui-sm, 24px);
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
    background-color: var(--_nys-tooltip-background-color);
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
    line-height: var(--_nys-tooltip-line-height);
    letter-spacing: var(--_nys-tooltip-letter-spacing);
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
    --_nys-tooltip-background-color: var(--nys-color-ink-reverse, #fff);
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
`;var ty=Object.defineProperty,ny=Object.getOwnPropertyDescriptor,Pl=(l,r,o,s)=>{for(var c=s>1?void 0:s?ny(r,o):r,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=(s?h(r,o,c):h(c))||c);return s&&c&&ty(r,o,c),c};let ay=0;const p3=class extends Le{constructor(){super(),this.id="",this.text="",this.inverted=!1,this.focusable=!1,this._active=!1,this._userHasSetPosition=!1,this._originalUserPosition=null,this._internallyUpdatingPosition=!1,this._position=null,this._handleTooltipEnter=()=>{if(this._active=!0,this._addScrollListeners(),this._userHasSetPosition&&this._originalUserPosition&&this._doesPositionFit(this._originalUserPosition)){this.position=this._originalUserPosition,this.updateComplete.then(()=>{var r;const o=(r=this.shadowRoot)==null?void 0:r.querySelector(".nys-tooltip__content");o&&this._shiftTooltipIntoViewport(o)});return}this.autoPositionTooltip()},this._handleBlurOrMouseLeave=()=>{var r;this._active=!1,this._removeScrollListeners();const o=(r=this.shadowRoot)==null?void 0:r.querySelector(".nys-tooltip__content");o&&this._resetTooltipPositioningStyles(o)},this._handleScrollOrResize=()=>{this._active&&(this._userHasSetPosition&&this._originalUserPosition?this._doesPositionFit(this._originalUserPosition)?(this._setInternalPosition(this._originalUserPosition),this.updateComplete.then(()=>{var r;const o=(r=this.shadowRoot)==null?void 0:r.querySelector(".nys-tooltip__content");o&&this._shiftTooltipIntoViewport(o)})):this.autoPositionTooltip():this.autoPositionTooltip())},this._handleEscapeKey=r=>{var o;if(r.key==="Escape"&&this._active){this._active=!1,this._removeScrollListeners();const s=(o=this.shadowRoot)==null?void 0:o.querySelector(".nys-tooltip__content");s&&this._resetTooltipPositioningStyles(s)}}}get position(){return this._position}set position(r){const o=this._position;this._position=r,this.requestUpdate("position",o),this._internallyUpdatingPosition||(this._userHasSetPosition=r!==null,this._originalUserPosition=r)}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-tooltip-${Date.now()}-${ay++}`),window.addEventListener("keydown",this._handleEscapeKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._handleEscapeKey)}get _firstAssignedEl(){var r;const o=(r=this.shadowRoot)==null?void 0:r.querySelector("slot");return o==null?void 0:o.assignedElements({flatten:!0})[0]}firstUpdated(){var r;const o=(r=this.shadowRoot)==null?void 0:r.querySelector("slot");o&&o.addEventListener("slotchange",()=>{const s=this._firstAssignedEl;s&&this._applyFocusBehavior(s)})}updated(r){super.updated(r);const o=this._firstAssignedEl;o&&(r.has("text")&&this._passAria(o),r.has("focusable")&&this._applyFocusBehavior(o))}_addScrollListeners(){window.addEventListener("scroll",this._handleScrollOrResize,!0),window.addEventListener("resize",this._handleScrollOrResize)}_removeScrollListeners(){window.removeEventListener("scroll",this._handleScrollOrResize,!0),window.removeEventListener("resize",this._handleScrollOrResize)}_passAria(r){const o=r.tagName.toLowerCase();if(o.startsWith("nys-"))if(o==="nys-icon"){const s=r.getAttribute("ariaLabel")||"",c=s?`${s}, ${this.text}`:this.text;r.setAttribute("ariaLabel",c)}else r.setAttribute("ariaDescription",this.text)}async _applyFocusBehavior(r){var o;if(this.focusable)if(r.tagName.toLowerCase()==="nys-icon"){"updateComplete"in r&&await r.updateComplete;const s=(o=r.shadowRoot)==null?void 0:o.querySelector("svg");s&&s.setAttribute("tabindex","0")}else r.setAttribute("tabindex","0")}_doesPositionFit(r){var o,s;const c=(o=this.shadowRoot)==null?void 0:o.querySelector(".nys-tooltip__wrapper"),d=(s=this.shadowRoot)==null?void 0:s.querySelector(".nys-tooltip__content");if(!c||!d||r==null)return;const h=c.getBoundingClientRect(),g=d.getBoundingClientRect(),y=8,p={top:h.top-y,left:h.left-y,bottom:window.innerHeight-h.bottom-y,right:window.innerWidth-h.right-y};return{top:p.top>=g.height,bottom:p.bottom>=g.height,left:p.left>=g.width,right:p.right>=g.width}[r]}async autoPositionTooltip(){var r,o;const s=(r=this.shadowRoot)==null?void 0:r.querySelector(".nys-tooltip__wrapper"),c=(o=this.shadowRoot)==null?void 0:o.querySelector(".nys-tooltip__content");if(!s||!c)return;const d=s.getBoundingClientRect(),h=8,g={top:d.top-h,left:d.left-h,bottom:window.innerHeight-d.bottom-h,right:window.innerWidth-d.right-h};let y=["top","bottom","right","left"];if(this._userHasSetPosition&&this._originalUserPosition){const w=this._originalUserPosition;w==="left"?y=["left","right","top","bottom"]:w==="right"?y=["right","left","top","bottom"]:w==="top"?y=["top","bottom","right","left"]:w==="bottom"&&(y=["bottom","top","right","left"])}for(const w of y)if(this._doesPositionFit(w)){this._setInternalPosition(w),await this.updateComplete,this._shiftTooltipIntoViewport(c);return}let p="top",_=g.top;for(const w of y)g[w]>_&&(_=g[w],p=w);this._setInternalPosition(p),await this.updateComplete,this._shiftTooltipIntoViewport(c)}_setInternalPosition(r){this._internallyUpdatingPosition=!0,this.position=r,this._internallyUpdatingPosition=!1}_shiftTooltipIntoViewport(r){var o;const s=((o=this.shadowRoot)==null?void 0:o.querySelector(".nys-tooltip__wrapper")).getBoundingClientRect(),c=r.getBoundingClientRect(),d=s.left+s.width/2,h=c.left<0,g=c.right>window.innerWidth;this._resetTooltipPositioningStyles(r),h?(r.style.left="0px",r.style.transform="none"):g&&(r.style.right="0px",r.style.left="auto",r.style.transform="none");const y=r.getBoundingClientRect(),p=(d-y.left)/y.width,_=Math.max(0,Math.min(1,p))*100;r.style.setProperty("--arrow-offset-x",`${_}%`)}_resetTooltipPositioningStyles(r){r.style.left="",r.style.right="",r.style.transform=""}render(){var r;return Y`
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
        ${(r=this.text)!=null&&r.trim()?Y`<div
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
    `}};p3.styles=ey;let hr=p3;Pl([m({type:String})],hr.prototype,"id",2);Pl([m({type:String})],hr.prototype,"text",2);Pl([m({type:Boolean,reflect:!0})],hr.prototype,"inverted",2);Pl([m({type:Boolean,reflect:!0})],hr.prototype,"focusable",2);Pl([Yt()],hr.prototype,"_active",2);Pl([m({type:String,reflect:!0})],hr.prototype,"position",1);customElements.get("nys-tooltip")||customElements.define("nys-tooltip",hr);const ry=Qe`
  :host {
    /* Global Unav Header Styles */
    --_nys-unavheader-padding--gutter: var(--nys-gutter-xs, 20px);
    --_nys-unavheader-background-color: var(
      --nys-color-surface,
      var(--nys-color-white, #ffffff)
    );
    --_nys-unavheader-color: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );

    /* Trustbar, Search Bar, and Language */
    --_nys-unavheader-background-color--section-raised: var(
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

  .nys-unavheader {
    display: flex;
    flex-direction: column;
  }

  .nys-unavheader > * {
    padding: 0 var(--_nys-unavheader-padding--gutter);
  }

  .nys-unavheader__main.wrapper {
    background-color: var(--_nys-unavheader-background-color);
  }

  .nys-unavheader__main.content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--nys-space-300, 24px);
    padding-top: var(--nys-space-100, 8px);
    padding-bottom: var(--nys-space-100, 8px);
  }

  .nys-unavheader__spacer {
    flex: 1;
  }

  .nys-unavheader__trustbar.wrapper {
    background-color: var(--nys-color-neutral-100, #d0d0ce);
    padding-top: var(--nys-space-100, 8px);
    padding-bottom: var(--nys-space-100, 8px);
  }
  .nys-unavheader__trustbar.wrapper > .content,
  .nys-unavheader__trustbar.wrapper > .content * {
    cursor: pointer;
  }
  .nys-unavheader__trustbar.inline,
  .nys-unavheader__trustbar.inline #nys-unavheader__official {
    background-color: transparent;
    cursor: default;
  }

  /*
  .content -> small screens
  .inline -> large screens
  */
  .nys-unavheader__trustbar > .content,
  .nys-unavheader__trustbar.inline {
    display: flex;
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

  a#nys-unavheader__logolink {
    outline-offset: var(--nys-space-2px, 2px);
  }

  .nys-unavheader__logo svg {
    vertical-align: top;
    height: var(--nys-size-500, 40px);
    width: auto;
  }

  #nys-unavheader__know,
  #nys-unavheader__know--inline {
    width: max-content;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: var(--nys-space-50, 4px);
    /* These props ARE NOT publicly overridable */
    --_nys-button-height: var(--nys-font-lineheight-ui-xs, 20px);
    --_nys-button-border-radius--start: var(--nys-radius-md, 4px);
    --_nys-button-border-radius--end: var(--nys-radius-md, 4px);
    --_nys-button-padding--y: var(--nys-space-2px, 2px);
    --_nys-button-padding--x: var(--nys-space-50, 4px);
    --_nys-button-border-width: 0px;
    --_nys-button-text-decoration: underline;
    /* These props ARE publicly overridable */
    --nys-button-color: var(--nys-color-link, #004dd1);
    --nys-button-color--hover: var(--nys-color-link-strong, #003ba1);
    --nys-button-color--active: var(--nys-color-link-strongest, #002971);
    --nys-button-background-color--hover: var(
      --nys-color-transparent,
      #ffffff00
    );
    --nys-button-background-color--active: var(
      --nys-color-transparent,
      #ffffff00
    );

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

  .hide {
    display: none;
  }

  .nys-unavheader__trustpanel.wrapper.show {
    background-color: var(--_nys-unavheader-background-color--section-raised);
    display: flex;
    padding-top: var(--nys-space-400, 32px);
    padding-bottom: var(--nys-space-400, 32px);
  }
  .nys-unavheader__messagewrapper {
    display: flex;
    gap: var(--nys-space-400, 32px);
  }

  .nys-unavheader__trustpanel.content {
    display: flex;
    flex-direction: row-reverse;
  }

  .nys-unavheader__trustcontentmessage {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--nys-space-100, 8px);

    /* UI/Small/Bold */
    font-family: var(--nys-type-family-ui, "Proxima Nova");
    font-size: var(--nys-type-size-ui-sm, 14px);
    font-style: normal;
    font-weight: 400;
    line-height: var(--nys-typography-font-lineheight-ui-sm, 24px);
    letter-spacing: var(--nys-typography-font-letterspacing-ui-sm, 0.044px);
  }
  .nys-unavheader__searchdropdown.wrapper {
    background-color: var(--_nys-unavheader-background-color--section-raised);
    padding-top: var(--nys-space-250, 20px);
    padding-bottom: var(--nys-space-250, 20px);
  }

  .nys-unavheader__trustpanel.wrapper > .content,
  .nys-unavheader__main.wrapper > .content,
  .nys-unavheader__trustbar > .content,
  .nys-unavheader__searchdropdown.wrapper > .content {
    max-width: 1280px;
    margin: 0 auto;
  }

  .nys-unavheader__search {
    max-width: var(--nys-form-width-md, 200px);
    transition: max-width 0.5s ease;
    --_nys-textinput-gap: 0px;
  }

  /* Grow size on focus */
  .nys-unavheader__search:focus {
    width: var(--nys-form-width-lg, 384px);
    max-width: var(--nys-form-width-lg, 384px);
  }

  #nys-unavheader__translate,
  #nys-unavheader__searchbutton {
    /* These props ARE publicly overridable */
    --nys-button-color: var(--nys-color-state-blue-700, #154973);
    --nys-button-color--hover: var(--nys-color-state-blue-700, #154973);
    --nys-button-color--active: var(--nys-color-state-blue-700, #154973);
    --_nys-button-border-width: 0px;
  }

  .nys-unavheader__iconbutton {
    /* These props ARE NOT publicly overridable */
    --_nys-button-width: var(--nys-size-400, 32px);
    --_nys-button-height: var(--nys-size-400, 32px);
    --_nys-button-padding--y: 0;
    --_nys-button-padding--x: 0;
  }

  .nys-unavheader__translatewrapper {
    position: relative;
  }

  .nys-unavheader__languagelist.show {
    position: absolute;
    display: flex;
    flex-direction: column;
    min-width: fit-content;
    width: max-content;
    z-index: 99999;
    background-color: var(--_nys-unavheader-background-color--section-raised);
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
      --_nys-unavheader-padding--gutter: var(--nys-gutter-xs, 20px);
    }

    #nys-unavheader__know {
      --_nys-button-padding--x: 0px;
      --_nys-button-padding--y: 0px;
    }

    .nys-unavheader__trustbar > .content {
      flex-direction: column;
      align-items: flex-start;
      gap: 0px;
      line-height: 16px;
    }

    .nys-unavheader__trustbar.wrapper {
      padding-top: var(--nys-space-2px, 2px);
      padding-bottom: var(--nys-space-2px, 2px);
    }

    .nys-unavheader__trustbar.inline {
      display: none;
    }

    .nys-unavheader__messagewrapper {
      flex-direction: column;
    }

    #nys-unavheader__translate:not([circle]),
    #nys-unavheader__searchbar {
      display: none;
    }
  }

  @media (min-width: 480px) and (max-width: 767px) {
    /* Mobile Large (SM - Above 480px) */
    :host {
      --_nys-unavheader-padding--gutter: var(--nys-gutter-sm, 20px);
    }

    .nys-unavheader__trustbar.inline {
      display: none;
    }

    .nys-unavheader__messagewrapper {
      flex-direction: column;
    }

    #nys-unavheader__translate:not([circle]),
    #nys-unavheader__searchbar {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    /* Tablet (MD - Above 768px) */
    :host {
      --_nys-unavheader-padding--gutter: var(--nys-gutter-md, 32px);
    }

    .nys-unavheader__trustbar.wrapper {
      display: none;
    }

    #nys-unavheader__translate:not([circle]),
    #nys-unavheader__searchbar {
      display: none;
    }

    .nys-unavheader__trustpanel.wrapper.show {
      order: 2;
    }
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    /* Desktop (LG - Above 1024px) */
    :host {
      --_nys-unavheader-padding--gutter: var(--nys-gutter-lg, 32px);
    }
    .nys-unavheader__trustbar.wrapper {
      display: none;
    }

    #nys-unavheader__translate[circle],
    #nys-unavheader__searchbutton[circle] {
      display: none;
    }

    .nys-unavheader__searchdropdown.wrapper {
      display: none;
    }

    .nys-unavheader__languagelist.show {
      margin-top: var(--nys-space-100, 8px);
    }

    .nys-unavheader__trustpanel.wrapper.show {
      order: 2;
    }
  }

  @media (min-width: 1280px) {
    /* Desktop Large (XL - Above 1280px) */
    :host {
      --_nys-unavheader-padding--gutter: var(--nys-gutter-xl, 64px);
    }
    .nys-unavheader__trustbar.wrapper {
      display: none;
    }

    #nys-unavheader__translate[circle],
    #nys-unavheader__searchbutton[circle] {
      display: none;
    }

    .nys-unavheader__searchdropdown.wrapper {
      display: none;
    }

    .nys-unavheader__languagelist.show {
      margin-top: var(--nys-space-100, 8px);
    }

    .nys-unavheader__trustpanel.wrapper.show {
      order: 2;
    }
  }
`,ly=`<svg xmlns="http://www.w3.org/2000/svg" width="91" height="55" viewBox="0 0 91 55" fill="none">
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
</svg>`;var oy=Object.defineProperty,Kr=(l,r,o,s)=>{for(var c=void 0,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=h(r,o,c)||c);return c&&oy(r,o,c),c};const v3=class extends Le{constructor(){super(...arguments),this.trustbarVisible=!1,this.searchDropdownVisible=!1,this.languageVisible=!1,this.isSearchFocused=!1,this.hideTranslate=!1,this.hideSearch=!1,this.languages=[["English",""],["Español","es"],["中文","zh"],["繁體中文","zh-traditional"],["Русский","ru"],["יידיש","yi"],["বাংলা","bn"],["한국어","ko"],["Kreyòl Ayisyen","ht"],["Italiano","it"],["العربية","ar"],["Polski","pl"],["Français","fr"],["اردو","ur"]]}_getNysLogo(){return new DOMParser().parseFromString(ly,"image/svg+xml").documentElement}_toggleTrustbar(){this.trustbarVisible=!this.trustbarVisible,this.trustbarVisible?(this.languageVisible=!1,this.searchDropdownVisible=!1,this.updateComplete.then(()=>{var r;const o=(r=this.shadowRoot)==null?void 0:r.getElementById("nys-unavheader__closetrustbar");o==null||o.focus()})):this.updateComplete.then(()=>{var r;const o=(r=this.shadowRoot)==null?void 0:r.getElementById("nys-unavheader__know--inline");o==null||o.focus()})}_toggleLanguageList(){this.languageVisible=!this.languageVisible,this.languageVisible&&(this.trustbarVisible=!1,this.searchDropdownVisible=!1)}_toggleSearchDropdown(){this.searchDropdownVisible=!this.searchDropdownVisible,this.searchDropdownVisible&&(this.trustbarVisible=!1,this.languageVisible=!1)}_handleSearchFocus(){this.isSearchFocused=!0,this.trustbarVisible=!1,this.languageVisible=!1}_handleSearchBlur(){this.isSearchFocused=!1}_handleSearchKeyup(r){var o;if(r.key==="Escape"&&(this._handleSearchBlur(),r.target.blur()),r.key==="Enter"){const s=(o=r.target.value)==null?void 0:o.trim();s!==""&&this._handleSearch(s)}}_handleSearchButton(r){var o,s;const c=(s=((o=this.shadowRoot)==null?void 0:o.getElementById(r)).value)==null?void 0:s.trim();c!==""&&this._handleSearch(c)}_handleSearch(r){window.location.href=`https://search.its.ny.gov/search/search.html?btnG=Search&client=default_frontend&output=xml_no_dtd&proxystylesheet=default_frontend&ulang=en&sort=date:D:L:d1&entqr=3&entqrm=0&wc=200&wc_mc=1&oe=UTF-8&ie=UTF-8&ud=1&site=default_collection&q=${r}+inurl:${window.location.hostname}&site=default_collection`}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return Y`
      <header class="nys-unavheader">
        <div
          class="nys-unavheader__trustbar wrapper"
          @click="${this._toggleTrustbar}"
        >
          <div class="content">
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
              @keydown="${r=>{(r.code==="Enter"||r.code==="Space"||r.key==="Enter"||r.key===" ")&&this._toggleTrustbar()}}"
            >
              <nys-icon
                slot="suffix-icon"
                size="12"
                name="${this.trustbarVisible?"chevron_up":"chevron_down"}"
              ></nys-icon>
            </nys-button>
          </div>
        </div>
        <div
          class="nys-unavheader__trustpanel wrapper ${this.trustbarVisible?"show":"hide"}"
          aria-expanded="${this.trustbarVisible}"
        >
          <div class="nys-unavheader__trustpanel content">
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
            <div class="nys-unavheader__messagewrapper">
              <div
                class="nys-unavheader__trustcontentmessage"
                id="trust_official"
              >
                <nys-icon size="3xl" name="account_balance_filled"></nys-icon>
                <label><b>Official websites use ny.gov</b></label>
                <label
                  >A <b>ny.gov</b> website belongs to an official New York State
                  government organization.</label
                >
              </div>
              <div
                class="nys-unavheader__trustcontentmessage"
                id="trust_secure"
              >
                <nys-icon size="3xl" name="lock_filled"></nys-icon>
                <label><b>Secure ny.gov websites use HTTPS</b></label>
                <label
                  >A <b>lock icon</b> or <b>https://</b> means you've safely
                  connected to the ny.gov website. Share sensitive information
                  only on official, secure websites.</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="nys-unavheader__main wrapper" id="nys-universal-navigation">
          <div class="nys-unavheader__main content">
            <a
              href="https://www.ny.gov"
              id="nys-unavheader__logolink"
              aria-label="Visit the NY.gov homepage"
            >
              <div class="nys-unavheader__logo">${this._getNysLogo()}</div></a
            >
            <div class="nys-unavheader__trustbar inline">
              <label id="nys-unavheader__official"
                >An official website of New York State</label
              >
              <nys-button
                id="nys-unavheader__know--inline"
                label="Here's how you know"
                ariaControls="trust_official"
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
            <div class="nys-unavheader__spacer"></div>
            ${this.hideTranslate?null:Y`<div class="nys-unavheader__translatewrapper">
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

                  ${this.isSearchFocused?null:Y`
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
                      `}
                  <div
                    class="nys-unavheader__languagelist ${this.languageVisible?"show":"hide"}"
                  >
                    ${this.languages.map(([r,o])=>Y`<a
                          class="nys-unavheader__languagelink"
                          target="_self"
                          href="https://${o?o+".":""}${window.location.hostname}"
                          >${r}</a
                        >`)}
                  </div>
                </div>`}
            ${this.hideSearch?null:Y`
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
                    ></nys-button>
                  </nys-textinput>
                `}
          </div>
        </div>
        <div
          class="nys-unavheader__searchdropdown wrapper ${this.searchDropdownVisible?"show":"hide"}"
        >
          <div class="content">
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
    `}};v3.styles=ry;let Da=v3;Kr([m({type:Boolean})],Da.prototype,"trustbarVisible");Kr([m({type:Boolean})],Da.prototype,"searchDropdownVisible");Kr([m({type:Boolean})],Da.prototype,"languageVisible");Kr([m({type:Boolean})],Da.prototype,"isSearchFocused");Kr([m({type:Boolean})],Da.prototype,"hideTranslate");Kr([m({type:Boolean})],Da.prototype,"hideSearch");Kr([m({type:Array,reflect:!0})],Da.prototype,"languages");customElements.get("nys-unavheader")||customElements.define("nys-unavheader",Da);const iy=Qe`
  :host {
    /* Global Header Styles */
    --_nys-globalheader-color: var(
      --nys-color-text-reverse,
      var(--nys-color-white, #ffffff)
    );
    --_nys-globalheader-link-color: var(
      --nys-color-link-reverse-neutral,
      var(--nys-color-white, #fff)
    );
    --_nys-globalheader-background-color: var(
      --nys-color-theme,
      var(--nys-color-state-blue-700, #154973)
    );
    --_nys-globalheader-gap: var(--nys-space-300, 24px);
    --_nys-globalheader-padding: var(--nys-space-250, 20px);
    --_nys-globalheader-font-family--menu: var(
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
    --_nys-globalheader-line-height: normal;
    --_nys-globalheader-letter-spacing: normal;
    --_nys-globalheader-font-weight: var(--nys-font-weight-semibold, 600);
    --_nys-globalheader-max-width: var(--nys-max-content-width, 1280px);

    /* Agency and App Name Styling */
    --_nys-globalheader-gap--text: var(--nys-space-100, 8px);
    --_nys-globalheader-font-size--heading: var(
      --nys-font-size-agency-xl,
      var(--nys-font-size-2xl, 22px)
    );
    --_nys-globalheader-font-size--subheading: var(
      --nys-font-size-agency-md,
      var(--nys-font-size-md, 16px)
    );
    --_nys-globalheader-font-family--headings: var(
      --nys-font-family-agency,
      "D Sari",
      Arial,
      sans-serif
    );

    /* Menu Content Styling */
    --_nys-globalheader-line-height--menu: var(
      --nys-font-lineheight-ui-md,
      24px
    );
    --_nys-globalheader-letter-spacing--menu: var(
      --nys-font-letterspacing-ui-md,
      var(--nys-font-letterspacing-400, 0.044px)
    );
    --_nys-globalheader-text-decoration-thickness--menu: var(
      --nys-size-2px,
      2px
    );
    --_nys-globalheader-link-padding: var(--nys-space-300, 24px)
      var(--nys-space-200, 16px);

    /* Mobile Menu */
    --_nys-globalheader-font-size--menu-btn: var(--nys-type-size-ui-xs, 12px);
    --_nys-globalheader-line-height--menu-btn: var(
      --nys-font-lineheight-ui-xs,
      20px
    );
    --_nys-globalheader-letter-spacing--menu-btn: var(
      --nys-font-letterspacing-ui-xs,
      0.057px
    );
    --_nys-globalheader-border-color--menu: var(--nys-color-theme-mid, #457aa5);
    --_nys-globalheader-background-color--menu--hover: var(
      --nys-color-theme-strong,
      #0e324f
    );
    --_nys-globalheader-background-color--menu--active: var(
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
    color: var(--_nys-globalheader-color);
    text-decoration: none;
    font-family: var(--_nys-globalheader-font-family--menu);
    font-style: normal;
    font-weight: 400;
    line-height: var(--_nys-globalheader-line-height--menu);
    letter-spacing: var(--_nys-globalheader-letter-spacing--menu);
  }

  .nys-globalheader {
    display: flex;
    justify-content: center;
    padding: var(--_nys-globalheader-padding);
    background-color: var(--_nys-globalheader-background-color);
    color: var(--_nys-globalheader-color);
    width: 100%;
    min-height: 76px;
    box-sizing: border-box;
  }

  /* Main container */
  .nys-globalheader__main-container {
    display: flex;
    gap: var(--_nys-globalheader-gap);
    max-width: var(--_nys-globalheader-max-width);
    width: 100%;
  }

  /* Left-hand side Agency and App names */
  .nys-globalheader__name-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: var(--_nys-globalheader-gap--text);
  }
  .nys-globalheader__name {
    margin: 0;
    color: var(--_nys-globalheader-color);
    font-family: var(--_nys-globalheader-font-family--headings);
    font-size: var(--_nys-globalheader-font-size--heading);
    font-style: normal;
    font-weight: var(--_nys-globalheader-font-weight);
    line-height: var(--_nys-globalheader-line-height);
    letter-spacing: var(--_nys-globalheader-letter-spacing);
    text-wrap: wrap;
  }

  .nys-globalheader__agencyName {
    font-size: var(--_nys-globalheader-font-size--subheading);
  }

  /* Set the font size for the agency to be the main font if appName is not defined */
  .nys-globalheader__agencyName.main {
    font-size: var(--_nys-globalheader-font-size--heading);
  }

  /* Slotted content */
  .nys-globalheader__content {
    display: none;
    font-family: var(--_nys-globalheader-font-family--menu);
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
    text-decoration-thickness: var(
      --_nys-globalheader-text-decoration-thickness--menu
    );
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
    border-bottom: 1px solid var(--_nys-globalheader-border-color--menu);
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
    background-color: var(--_nys-globalheader-background-color);
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
    border-top: 1px solid var(--_nys-globalheader-color);
  }
  .nys-globalheader__content-mobile ul li a {
    display: flex;
    padding: 24px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-bottom: 1px solid var(--_nys-globalheader-border-color--menu);
    background-color: var(--_nys-globalheader-background-color);
  }
  .nys-globalheader__content-mobile ul li a:hover {
    background-color: var(--_nys-globalheader-background-color--menu--hover);
  }
  .nys-globalheader__content-mobile ul li a:active {
    background-color: var(--_nys-globalheader-background-color--menu--active);
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
    background-color: var(--_nys-globalheader-background-color);
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    color: var(--_nys-globalheader-color);
  }
  .nys-globalheader__mobile-menu-button-text {
    font-size: var(--_nys-globalheader-font-size--menu-btn);
    line-height: var(--_nys-globalheader-line-height--menu-btn);
    letter-spacing: var(--_nys-globalheader-letter-spacing--menu-btn);
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
      --_nys-globalheader-gap: var(--nys-space-500, 40px);
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
`;var sy=Object.defineProperty,Co=(l,r,o,s)=>{for(var c=void 0,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=h(r,o,c)||c);return c&&sy(r,o,c),c};const g3=class extends Le{constructor(){super(...arguments),this.appName="",this.agencyName="",this.homepageLink="",this.slotHasContent=!0,this.isMobileMenuOpen=!1}firstUpdated(){var r;const o=(r=this.shadowRoot)==null?void 0:r.querySelector("slot");o==null||o.addEventListener("slotchange",()=>this._handleSlotChange()),this._handleSlotChange(),this._listenLinkClicks()}async _handleSlotChange(){var r,o,s;const c=(r=this.shadowRoot)==null?void 0:r.querySelector("slot");if(!c)return;const d=c==null?void 0:c.assignedNodes({flatten:!0}).filter(y=>y.nodeType===Node.ELEMENT_NODE);await Promise.resolve(),this.slotHasContent=d.length>0;const h=(o=this.shadowRoot)==null?void 0:o.querySelector(".nys-globalheader__content"),g=(s=this.shadowRoot)==null?void 0:s.querySelector(".nys-globalheader__content-mobile");if(h&&g){h.innerHTML="",g.innerHTML="";const y=this._normalizePath(window.location.pathname+window.location.hash);d.forEach(p=>{if(p.nodeType===Node.ELEMENT_NODE){const _=p.cloneNode(!0),w=p.cloneNode(!0);["script","iframe","object","embed, img"].forEach(L=>{_.querySelectorAll(L).forEach(U=>U.remove())});const E=L=>{const U=Array.from(L.querySelectorAll("a"));let F={li:null,length:0};U.forEach(K=>{var j;const fe=K.getAttribute("href"),J=this._normalizePath(fe);J&&(J==="/"&&y==="/"?F={li:K.closest("li"),length:1}:y!=null&&y.startsWith(J)&&J.length>F.length&&(F={li:K.closest("li"),length:J.length}),U.forEach(me=>{var W;return(W=me.closest("li"))==null?void 0:W.classList.remove("active")}),(j=F.li)==null||j.classList.add("active"))})};E(_),E(w),h.appendChild(_),g.appendChild(w),p.remove()}})}}_normalizePath(r){if(r)return r.startsWith("/")||(r="/"+r),r.length>1&&r.endsWith("/")&&(r=r.slice(0,-1)),r.toLowerCase()}_toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen}_listenLinkClicks(){var r;const o=(r=this.shadowRoot)==null?void 0:r.querySelectorAll(".nys-globalheader__content, .nys-globalheader__content-mobile");o==null||o.forEach(s=>{s==null||s.addEventListener("click",c=>{const d=c.target.closest("a");if(!d)return;s.querySelectorAll("li.active").forEach(g=>g.classList.remove("active"));const h=d.closest("li");h&&h.classList.add("active")})})}render(){var r,o,s,c,d,h,g,y;return Y`
      <header class="nys-globalheader">
        <div class="nys-globalheader__main-container">
          ${this.slotHasContent?Y` <div class="nys-globalheader__button-container">
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
          ${(r=this.homepageLink)!=null&&r.trim()?Y`<a
                class="nys-globalheader__name-container-link"
                href=${(d=this.homepageLink)==null?void 0:d.trim()}
              >
                <div class="nys-globalheader__name-container">
                  ${((h=this.appName)==null?void 0:h.trim().length)>0?Y`<div
                        class="nys-globalheader__appName nys-globalheader__name"
                      >
                        ${this.appName}
                      </div> `:""}
                  ${((g=this.agencyName)==null?void 0:g.trim().length)>0?Y`<div
                        class="nys-globalheader__agencyName nys-globalheader__name ${((y=this.appName)==null?void 0:y.trim().length)>0?"":"main"}"
                      >
                        ${this.agencyName}
                      </div> `:""}
                </div>
              </a>`:Y`
                <div class="nys-globalheader__name-container">
                  ${((o=this.appName)==null?void 0:o.trim().length)>0?Y`<div
                        class="nys-globalheader__appName nys-globalheader__name"
                      >
                        ${this.appName}
                      </div> `:""}
                  ${((s=this.agencyName)==null?void 0:s.trim().length)>0?Y`<div
                        class="nys-globalheader__agencyName nys-globalheader__name ${((c=this.appName)==null?void 0:c.trim().length)>0?"":"main"}"
                      >
                        ${this.agencyName}
                      </div> `:""}
                </div>
              `}
          ${this.slotHasContent?Y`<div class="nys-globalheader__content">
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
    `}};g3.styles=iy;let Pr=g3;Co([m({type:String})],Pr.prototype,"appName");Co([m({type:String})],Pr.prototype,"agencyName");Co([m({type:String})],Pr.prototype,"homepageLink");Co([Yt()],Pr.prototype,"slotHasContent");Co([Yt()],Pr.prototype,"isMobileMenuOpen");customElements.get("nys-globalheader")||customElements.define("nys-globalheader",Pr);const cy=Qe`
  :host {
    /* Global Footer Styles */
    --_nys-globalfooter-color: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-globalfooter-background-color: var(
      --nys-color-theme-weaker,
      var(--nys-color-state-blue-50, #eff6fb)
    );
    --_nys-globalfooter-gap: var(--nys-space-300, 24px);
    --_nys-globalfooter-padding--y: var(--nys-space-400, 32px);
    --_nys-globalfooter-padding--gutter: var(--nys-gutter-sm, 20px);
    --_nys-globalfooter-font-size--agency: var(
      --nys-font-size-agency-xl,
      var(--nys-font-size-2xl, 22px)
    );
    --_nys-globalfooter-font-size--link: var(
      --nys-font-size-body-md,
      var(--nys-font-size-md, 16px)
    );
    --_nys-globalfooter-line-height--agency: normal;
    --_nys-globalfooter-font-weight: var(--nys-font-weight-semibold, 600);
    --_nys-globalfooter-max-width: var(--nys-max-content-width, 1280px);

    /* Agency Name */
    --_nys-globalfooter-font-family--agency: var(
      --nys-font-family-agency,
      "D Sari",
      Arial,
      sans-serif
    );

    /* Links */
    --_nys-globalfooter-column-gap: var(--nys-space-400, 32px);
    --_nys-globalfooter-row-gap: var(--nys-space-400, 32px);
    --_nys-globalfooter-line-height--link: var(
      --nys-font-lineheight-ui-md,
      24px
    );
    --_nys-globalfooter-letter-spacing: var(
      --nys-font-letterspacing-ui-md,
      var(--nys-font-letterspacing-400, 0.044px)
    );
    --_nys-globalfooter-font-family--link: var(
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
    --_nys-globalfooter-text-decoration-thickness: var(--nys-size-2px, 2px);
  }

  .nys-globalfooter {
    display: flex;
    padding: var(--_nys-globalfooter-padding--y)
      var(--_nys-globalfooter-padding--gutter);
    justify-content: center;
    background-color: var(--_nys-globalfooter-background-color);
    color: var(--_nys-globalfooter-color);
    width: 100%;
    box-sizing: border-box;
  }

  /* Main Container */
  .nys-globalfooter__main-container {
    display: flex;
    flex-direction: column;
    gap: var(--_nys-globalfooter-gap);
    width: 100%;
    max-width: var(--_nys-globalfooter-max-width);
  }

  /* The Agency Name */
  .nys-globalfooter__name {
    text-align: left;
    margin: 0;
    color: var(--_nys-globalfooter-color);
    font-family: var(--_nys-globalfooter-font-family--agency);
    font-size: var(--_nys-globalfooter-font-size--agency);
    font-style: normal;
    font-weight: var(--_nys-globalfooter-font-weight);
    line-height: var(--_nys-globalfooter-line-height--agency);
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
    color: var(--_nys-globalfooter-color);
    text-decoration: none;
    font-family: var(--_nys-globalfooter-font-family--link);
    font-size: var(--_nys-globalfooter-font-size--link);
    font-style: normal;
    font-weight: var(--_nys-globalfooter-font-weight);
    line-height: var(--_nys-globalfooter-line-height--link);
    letter-spacing: var(--_nys-globalfooter-letter-spacing);
  }

  a:hover {
    text-decoration: underline;
  }
  a:active {
    text-decoration-thickness: var(
      --_nys-globalfooter-text-decoration-thickness
    );
  }

  /* Specific layout for menu links (grouped or singular list of menus) */
  .nys-globalfooter__content {
    width: 100%;
  }

  .nys-globalfooter__content ul {
    display: flex;
    gap: var(--_nys-globalfooter-row-gap) var(--_nys-globalfooter-column-gap);
    flex-wrap: wrap;
  }

  /* Breakpoints using NYSDS Guidelines (Menu Links) */
  @media (min-width: 768px) {
    /* Tablet (MD - Above 768px) */
    :host {
      --_nys-globalfooter-padding--gutter: var(--nys-gutter-lg, 32px);
      --_nys-globalfooter-row-gap: var(--nys-space-600, 48px);
    }
  }

  @media (min-width: 1280px) {
    /* Large Desktop (XL - Above 1280px) */
    :host {
      --_nys-globalfooter-padding--gutter: var(--nys-gutter-xl, 64px);
    }
  }
`;var uy=Object.defineProperty,G5=(l,r,o,s)=>{for(var c=void 0,d=l.length-1,h;d>=0;d--)(h=l[d])&&(c=h(r,o,c)||c);return c&&uy(r,o,c),c};const m3=class extends Le{constructor(){super(...arguments),this.agencyName="",this.homepageLink="",this.slotHasContent=!0}firstUpdated(){var r;const o=(r=this.shadowRoot)==null?void 0:r.querySelector("slot");o==null||o.addEventListener("slotchange",()=>this._handleSlotChange()),this._handleSlotChange()}async _handleSlotChange(){var r,o;const s=(r=this.shadowRoot)==null?void 0:r.querySelector("slot");if(!s)return;const c=s==null?void 0:s.assignedNodes({flatten:!0}).filter(g=>g.nodeType===Node.ELEMENT_NODE);await Promise.resolve(),this.slotHasContent=c.length>0;const d=(o=this.shadowRoot)==null?void 0:o.querySelector(".nys-globalfooter__content"),h=c==null?void 0:c.some(g=>g.tagName==="H4");d&&(d.classList.toggle("columns",h),d.classList.toggle("small",!h),d.innerHTML="",c.forEach(g=>{if(g.nodeType===Node.ELEMENT_NODE){const y=g.cloneNode(!0);["script","iframe","object","embed","img"].forEach(p=>{y.querySelectorAll(p).forEach(_=>_.remove())}),d.appendChild(y),g.remove()}}))}render(){var r,o;return Y`
      <footer class="nys-globalfooter">
        <div class="nys-globalfooter__main-container">
          ${(r=this.homepageLink)!=null&&r.trim()?Y`<a href=${(o=this.homepageLink)==null?void 0:o.trim()}>
                <p class="nys-globalfooter__name">${this.agencyName}</p>
              </a>`:Y`<p class="nys-globalfooter__name">${this.agencyName}</p>`}
          ${this.slotHasContent?Y`<div class="nys-globalfooter__content">
                <slot
                  style="display: hidden"
                  @slotchange="${this._handleSlotChange}"
                ></slot>
              </div>`:""}
        </div>
      </footer>
    `}};m3.styles=cy;let xo=m3;G5([m({type:String})],xo.prototype,"agencyName");G5([m({type:String})],xo.prototype,"homepageLink");G5([Yt()],xo.prototype,"slotHasContent");customElements.get("nys-globalfooter")||customElements.define("nys-globalfooter",xo);const dy=Qe`
  :host {
    /* Global Footer Styles */
    --_nys-unavfooter-color: var(
      --nys-color-link-reverse-neutral,
      var(--nys-color-white, #ffffff)
    );
    --_nys-unavfooter-background-color: var(
      --nys-color-surface-reverse,
      #1b1b1b
    );
    --_nys-unavfooter-gap: var(--nys-space-200, 16px);
    --_nys-unavfooter-padding: var(--nys-space-250, 20px);
    --_nys-unavfooter-padding--gutter: var(--nys-gutter-sm, 20px);
    --_nys-unavfooter-font-size: var(
      --nys-font-size-body-md,
      var(--nys-font-size-md, 16px)
    );
    --_nys-unavfooter-font-weight: var(--nys-font-weight-semibold, 600);
    --_nys-unavfooter-max-width: var(--nys-max-content-width, 1280px);

    /* Links */
    --_nys-unavfooter-row-gap: var(--nys-space-250, 20px);
    --_nys-unavfooter-column-gap: var(--nys-space-600, 48px);
    --_nys-unavfooter-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-unavfooter-letter-spacing: var(
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
    --_nys-unavfooter-text-decoration-thickness: var(--nys-size-2px, 2px);
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
    color: var(--_nys-unavfooter-color);
    text-decoration: none;
    font-family: var(--_nys-unavfooter-font-family);
    font-size: var(--_nys-unavfooter-font-size);
    font-style: normal;
    font-weight: var(--_nys-unavfooter-font-weight);
    line-height: var(--_nys-unavfooter-line-height);
    letter-spacing: var(--_nys-unavfooter-letter-spacing);
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
    text-decoration-thickness: var(--_nys-unavfooter-text-decoration-thickness);
  }

  .nys-unavfooter {
    display: flex;
    flex-direction: column;
    gap: var(--_nys-unavfooter-gap);
    align-items: flex-start;
    background-color: var(--_nys-unavfooter-background-color);
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
    max-width: var(--_nys-unavfooter-max-width);
    padding: var(--_nys-unavfooter-padding)
      var(--_nys-unavfooter-padding--gutter);
    gap: var(--_nys-unavfooter-gap);
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
    gap: var(--_nys-unavfooter-row-gap) var(--_nys-unavfooter-column-gap);
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
      --_nys-unavfooter-padding--gutter: var(--nys-gutter-lg, 32px);
      --_nys-unavfooter-column-gap: var(--nys-space-600, 48px);
      --_nys-unavfooter-gap-spacing: var(--nys-space-800, 64px);
    }
  }

  @media (min-width: 1280px) {
    /* Large Desktop (XL - Above 1280px) */
    :host {
      --_nys-unavfooter-padding--gutter: var(--nys-gutter-xl, 64px);
    }
  }
`,hy=`<svg xmlns="http://www.w3.org/2000/svg" width="91" height="55" viewBox="0 0 91 55" fill="none">
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
</svg>`,b3=class extends Le{_getNysLogo(){return new DOMParser().parseFromString(hy,"image/svg+xml").documentElement}render(){return Y`
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
    `}};b3.styles=dy;let _3=b3;customElements.get("nys-unavfooter")||customElements.define("nys-unavfooter",_3);const fy=Ge({react:Ye,tagName:"nys-accordion",elementClass:vo}),rd=Ge({react:Ye,tagName:"nys-accordionitem",elementClass:Zr,events:{onNysAccordionItemToggle:"nys-accordionitem-toggle"}}),ld=Ge({react:Ye,tagName:"nys-alert",elementClass:Yd,events:{onNysAlertClosed:"nys-close"}});Ge({react:Ye,tagName:"nys-avatar",elementClass:zn});const C3=Ge({react:Ye,tagName:"nys-backtotop",elementClass:Ql,events:{onNysClick:"nys-click",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),rr=Ge({react:Ye,tagName:"nys-button",elementClass:Qd,events:{onNysClick:"nys-click",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),Bl=Ge({react:Ye,tagName:"nys-checkbox",elementClass:Pd,events:{onNysChange:"nys-change",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),yy=Ge({react:Ye,tagName:"nys-checkboxgroup",elementClass:Kd});Ge({react:Ye,tagName:"nys-divider",elementClass:Z5});const py=Ge({react:Ye,tagName:"nys-fileinput",elementClass:Dt,events:{onNysFileChange:"nys-change"}}),x3=Ge({react:Ye,tagName:"nys-globalfooter",elementClass:xo}),w3=Ge({react:Ye,tagName:"nys-globalheader",elementClass:Pr});Ge({react:Ye,tagName:"nys-icon",elementClass:Id});const vy=Ge({react:Ye,tagName:"nys-modal",elementClass:t3,events:{onNysOpen:"nys-open",onNysClose:"nys-close"}});Ge({react:Ye,tagName:"nys-pagination",elementClass:Xr,events:{onNysChange:"nys-change"}});const ao=Ge({react:Ye,tagName:"nys-option",elementClass:dr}),od=Ge({react:Ye,tagName:"nys-radiobutton",elementClass:l3,events:{onNysChange:"nys-change",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),gy=Ge({react:Ye,tagName:"nys-radiogroup",elementClass:r3}),my=Ge({react:Ye,tagName:"nys-select",elementClass:o3,events:{onNysChange:"nys-change",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),k3=Ge({react:Ye,tagName:"nys-skipnav",elementClass:Ii}),by=Ge({react:Ye,tagName:"nys-stepper",elementClass:Fr,events:{onNysStepClick:"nys-step-click"}}),_5=Ge({react:Ye,tagName:"nys-step",elementClass:Ea}),lr=Ge({react:Ye,tagName:"nys-textinput",elementClass:f3,events:{onNysInput:"nys-input",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),S3=Ge({react:Ye,tagName:"nys-textarea",elementClass:h3,events:{onNysInput:"nys-input",onNysFocus:"nys-focus",onNysBlur:"nys-blur",onNysSelect:"nys-select"}}),_y=Ge({react:Ye,tagName:"nys-toggle",elementClass:y3,events:{onNysChange:"nys-change",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),Cy=Ge({react:Ye,tagName:"nys-tooltip",elementClass:hr}),E3=Ge({react:Ye,tagName:"nys-unavfooter",elementClass:_3}),D3=Ge({react:Ye,tagName:"nys-unavheader",elementClass:Da});function xy(){return R.jsxs(R.Fragment,{children:[R.jsx(k3,{}),R.jsx(D3,{}),R.jsx(w3,{appName:"React Demo Form",agencyName:"Office of Information Technology Services",homepageLink:"/nysds-react-demo",children:R.jsxs("ul",{children:[R.jsx("li",{children:R.jsx("a",{href:"/nysds-react-demo",children:"Home"})}),R.jsx("li",{children:R.jsx("a",{href:"/nysds-react-demo/#/basic-form",children:"Basic Form"})}),R.jsx("li",{children:R.jsx("a",{href:"/nysds-react-demo/#/stepper",children:"Stepper"})}),R.jsx("li",{children:R.jsx("a",{href:"/nysds-react-demo/#/about",children:"About"})})]})}),R.jsx("main",{className:"nys-flex-1 nys-display-flex nys-flex-column",children:R.jsx(_h,{})}),R.jsx(x3,{agencyName:"Office of Information Technology Services",children:R.jsxs("ul",{children:[R.jsx("li",{children:R.jsx("a",{href:"https://its.ny.gov",children:"ITS Home"})}),R.jsx("li",{children:R.jsx("a",{href:"https://its.ny.gov/about",children:"About ITS"})})]})}),R.jsx(E3,{}),R.jsx(C3,{})]})}const wy=()=>R.jsxs("div",{className:"main-content nys-display-flex nys-flex-column nys-flex-align-center",children:[R.jsx("h1",{children:"Welcome to the React Demo"}),R.jsx("img",{src:"/nysds-react-demo/homepage-grid.svg",alt:"",role:"presentation"}),R.jsxs("p",{className:"centered-link",children:["Please read the"," ",R.jsx(Fi,{to:"https://github.com/ITS-HCD/nysds-react-demo",children:"README"})," in the main repo for details on how this demo works."]})]}),ky=()=>{const[l,r]=$.useState(null),o=$.useRef(null),s=y=>{y.preventDefault();const p=c(y.target);alert(`Form Data:
`+JSON.stringify(p,null,2)),r(p)},c=y=>{const p={},_=new FormData(y);for(const[w,E]of _.entries()){const L=_.getAll(w);L.length>1?p[w]=L.map(U=>U instanceof File?{fileName:U.name,fileType:U.type}:U):p[w]=E instanceof File?{name:E.name,type:E.type,size:E.size}:E}return p},d=()=>{o.current&&(o.current.open=!0)},h=()=>{o.current&&(o.current.open=!1)},g=()=>{alert(`*Slaps face* >:[ 
 WE WILL ASK THE QUESTIONS!!  
 
 (The Office: Season 5, Episode 19) `),h()};return R.jsxs("div",{className:"main-content",children:[R.jsx("h1",{className:"appTitle",children:"Vite + React + NYSDS"}),R.jsx(ld,{type:"info",heading:"NYSDS Components",text:"We make use of form-related NYSDS components in the native HTML form below.",primaryLabel:"Learn more on NYSDS reference site",primaryAction:"https://designsystem.ny.gov/",dismissible:!0}),R.jsxs("form",{id:"myForm",className:"nys-newsletter-form",method:"POST",onSubmit:s,children:[R.jsx(lr,{name:"fullName",label:"Full name",required:!0,onNysBlur:y=>{console.log("nys-blur event received 🔥",y)}}),R.jsx(lr,{name:"email",label:"Email",type:"email",required:!0}),R.jsx(S3,{name:"quote",label:"Enter your favorite quote:",value:"Majorities, of course, start with minorities.",required:!0}),R.jsxs(my,{name:"newsletter_topic",label:"Select your preferred newsletter topic",id:"newsletter-topic",required:!0,children:[R.jsx(ao,{value:"government_updates",label:"Government Updates"}),R.jsx(ao,{value:"community_events",label:"Community Events"}),R.jsx(ao,{value:"public_services",label:"Public Services & Resources"}),R.jsx(ao,{value:"transportation_news",label:"Transportation & Infrastructure"}),R.jsx(ao,{value:"environment",label:"Environment & Sustainability"})]}),R.jsx(py,{name:"uploadImg",label:"Upload a file",description:"Accepted file types: .jpg, .png, .pdf",accept:"image/png, image/jpeg, .pdf",multiple:!0,dropzone:!0,required:!0}),R.jsxs(gy,{label:"How often do you want updates?",description:"These updates will be sent directly to your email.",size:"md",required:!0,children:[R.jsx(od,{name:"frequency",label:"Weekly",value:"weekly"}),R.jsx(od,{name:"frequency",label:"Monthly",value:"monthly"})]}),R.jsx(Bl,{label:"Subscribe to NYS Government Updates",description:"Get notified via email about important updates and services.",id:"subscribe-checkbox-disabled-checked",name:"subscribe",value:"email-updates",required:!0}),R.jsxs(yy,{label:"Select your favorite New York landmarks",description:"Choose from the options below",required:!0,children:[R.jsx(Bl,{name:"landmarks",label:"Adirondacks",value:"adirondacks"}),R.jsx(Bl,{name:"landmarks",value:"finger-lakes",label:"Finger Lakes"}),R.jsx(Bl,{name:"landmarks",value:"catskills",label:"Catskills"}),R.jsx(Bl,{name:"landmarks",value:"niagara-falls",label:"Niagara Falls"}),R.jsx(Bl,{name:"landmarks",value:"coney-island",label:"Coney Island"})]}),R.jsx(_y,{label:"Dark Mode",name:"toggle-switch",value:"dark_mode_on",children:R.jsx("p",{slot:"description",children:"Toggle switch is usually NOT recommended for forms (use checkboxes instead)."})}),R.jsx(Cy,{text:"Hello",position:"bottom",children:R.jsx(rr,{type:"submit",fullWidth:!0,label:"Subscribe"})})]}),R.jsx("br",{}),l&&R.jsx(ld,{type:"success",heading:"Form submitted successfully",text:`${l?`

Submitted Data:
`+JSON.stringify(l,null,2):""}`,dismissible:!0}),R.jsx(rr,{label:"Knock Knock (Show Modal)",onNysClick:d,variant:"outline"}),R.jsxs(vy,{ref:o,id:"myModal",heading:"Who's there?",subheading:"KGB...",children:[R.jsx("p",{children:"Ipsum Lorem. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}),R.jsxs("div",{slot:"actions",children:[R.jsx(rr,{label:"Don't answer",variant:"outline",onNysClick:h}),R.jsx(rr,{label:"KGB who?",onNysClick:g})]})]})]})},M3=()=>R.jsxs("div",{className:"main-content stepper-content nys-display-flex nys-flex-column nys-flex-justify",children:[R.jsx("h1",{children:"Personal Details (Sample 1)"}),R.jsx("p",{children:"This is the form to enter your personal information. Fill in your name, address, and contact details here."}),R.jsx(lr,{name:"fullName",label:"Full Name",required:!0}),R.jsx(lr,{name:"email",label:"Email Address",type:"email",required:!0}),R.jsx(lr,{name:"phone",label:"Phone Number",type:"tel"}),R.jsx(lr,{name:"address",label:"Street Address"})]}),A3=()=>R.jsxs("div",{className:"main-content stepper-content nys-display-flex nys-flex-column nys-flex-justify",children:[R.jsx("h1",{children:"Team Information (Sample 2)"}),R.jsx("p",{children:"Provide details about your team. Who are you working with? What is your role?"}),R.jsx(lr,{name:"teamMembers",label:"Who are you working with?",required:!0}),R.jsx(lr,{name:"role",label:"What is your role?",required:!0}),R.jsxs(fy,{singleSelect:!0,bordered:!0,children:[R.jsx(rd,{heading:"Eligibility Requirements",children:R.jsx("p",{children:"You must be a New York State resident and provide valid proof of identification. Additional documentation may be required depending on the type of service you are applying for."})}),R.jsx(rd,{heading:"Required Documents",children:R.jsxs("ul",{children:[R.jsx("li",{children:"Proof of Identity (Driver License, State ID, or Passport)"}),R.jsx("li",{children:"Proof of Residency (Utility Bill, Lease Agreement)"}),R.jsx("li",{children:"Completed Application Form"})]})})]})]}),L3=()=>R.jsxs("div",{className:"main-content stepper-content nys-display-flex nys-flex-column nys-flex-justify",children:[R.jsx("h1",{children:"Usage Survey (Sample 3)"}),R.jsx(S3,{name:"quote",label:"Tell us how you plan to use this application?",description:"Your feedback helps us improve.",required:!0})]}),Sy=()=>{const[l,r]=$.useState(1),[o,s]=$.useState(1),c=()=>r(y=>Math.max(y-1,1)),d=()=>{h()?r(y=>{const p=Math.min(y+1,3);return s(_=>Math.max(_,p)),p}):console.warn("Current step invalid. Cannot proceed.")},h=()=>{const y=document.querySelector(".stepper-form");if(!y)return!1;const p=y.querySelector(`.step-page:nth-child(${l})`),_=Array.from(Array.from(p.querySelectorAll("*")).filter(E=>typeof E.checkValidity=="function"));let w=!0;return _.forEach(E=>{E.checkValidity&&(E.checkValidity()||(w=!1,E.dispatchEvent(new Event("invalid",{bubbles:!0}))))}),w},g=y=>{y.preventDefault();const p=new FormData(y.target),_={};for(const[w,E]of p.entries()){const L=p.getAll(w);L.length>1?_[w]=L.map(U=>U instanceof File?{fileName:U.name,fileType:U.type}:U):_[w]=E instanceof File?{name:E.name,type:E.type,size:E.size}:E}alert(`Form Data:
`+JSON.stringify(_,null,2))};return R.jsxs("div",{className:"nys-flex-1 nys-grid-row",children:[R.jsxs(by,{className:"nys-desktop:nys-grid-col-3",label:"Register for Design System Office Hours",children:[R.jsx(_5,{label:"Sample 1",onClick:()=>r(1),selected:l===1,current:o===1}),R.jsx(_5,{label:"Sample 2",onClick:()=>r(2),selected:l===2,current:o===2}),R.jsx(_5,{label:"Sample 3",onClick:()=>r(3),selected:l===3,current:o===3}),R.jsx("div",{slot:"actions",children:R.jsx(rr,{variant:"outline",label:"Save & Exit",fullWidth:!0})})]}),R.jsxs("form",{action:"",className:"stepper-form",onSubmit:g,children:[R.jsx("div",{className:`step-page ${l===1?"":"hidden"}`,children:R.jsx(M3,{})}),R.jsx("div",{className:`step-page ${l===2?"":"hidden"}`,children:R.jsx(A3,{})}),R.jsx("div",{className:`step-page ${l===3?"":"hidden"}`,children:R.jsx(L3,{})}),R.jsxs("div",{className:"stepper-content button-container nys-display-flex",children:[l>1&&R.jsx(rr,{type:"button",label:"Back",onClick:c}),l<3?R.jsx(rr,{type:"button",label:"Next",onClick:d}):R.jsx(rr,{type:"submit",label:"Submit",variant:"outline"})]})]})]})},Ey=()=>R.jsxs(R.Fragment,{children:[R.jsx(k3,{}),R.jsx(D3,{}),R.jsx(w3,{appName:"React Demo Form",agencyName:"Office of Information Technology Services",homepageLink:"/",children:R.jsxs("ul",{children:[R.jsx("li",{children:R.jsx("a",{href:"/nysds-react-demo",children:"Home"})}),R.jsx("li",{children:R.jsx("a",{href:"/nysds-react-demo/#/basic-form",children:"Basic Form"})}),R.jsx("li",{children:R.jsx("a",{href:"/nysds-react-demo/#/stepper",children:"Stepper"})}),R.jsx("li",{children:R.jsx("a",{href:"/nysds-react-demo/#/about",children:"About"})})]})}),R.jsxs("div",{className:"main-content nys-flex-1 nys-display-flex nys-flex-column nys-flex-align-center",children:[R.jsx("h1",{children:"Oh no, this route doesn't exist!"}),R.jsx("img",{src:"error-image.png",alt:"",role:"presentation"}),R.jsx(Fi,{to:"/",className:"centered-link",children:"You can go back to the home page by clicking here, though!"})]}),R.jsx(x3,{agencyName:"Office of Information Technology Services",children:R.jsxs("ul",{children:[R.jsx("li",{children:R.jsx("a",{href:"https://its.ny.gov",children:"ITS Home"})}),R.jsx("li",{children:R.jsx("a",{href:"https://its.ny.gov/about",children:"About ITS"})})]})}),R.jsx(E3,{}),R.jsx(C3,{})]}),Dy=Yh([{path:"/",element:R.jsx(xy,{}),children:[{index:!0,element:R.jsx(wy,{})},{path:"basic-form",element:R.jsx(ky,{})},{path:"stepper",element:R.jsx(Sy,{}),children:[{index:!0,element:R.jsx(bh,{to:"sample1",replace:!0})},{path:"sample1",element:R.jsx(M3,{})},{path:"sample2",element:R.jsx(A3,{})},{path:"sample3",element:R.jsx(L3,{})}]}],errorElement:R.jsx(Ey,{})}]),My=()=>R.jsx(a9,{router:Dy});Q4.createRoot(document.getElementById("root")).render(R.jsx($.StrictMode,{children:R.jsx(My,{})}));
