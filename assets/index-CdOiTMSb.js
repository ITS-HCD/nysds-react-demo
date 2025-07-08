function Su(a,n){for(var l=0;l<n.length;l++){const r=n[l];if(typeof r!="string"&&!Array.isArray(r)){for(const c in r)if(c!=="default"&&!(c in a)){const h=Object.getOwnPropertyDescriptor(r,c);h&&Object.defineProperty(a,c,h.get?h:{enumerable:!0,get:()=>r[c]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function l(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function r(c){if(c.ep)return;c.ep=!0;const h=l(c);fetch(c.href,h)}})();function Eu(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var ao={exports:{}},dn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H8;function $u(){if(H8)return dn;H8=1;var a=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function l(r,c,h){var d=null;if(h!==void 0&&(d=""+h),c.key!==void 0&&(d=""+c.key),"key"in c){h={};for(var v in c)v!=="key"&&(h[v]=c[v])}else h=c;return c=h.ref,{$$typeof:a,type:r,key:d,ref:c!==void 0?c:null,props:h}}return dn.Fragment=n,dn.jsx=l,dn.jsxs=l,dn}var U8;function Au(){return U8||(U8=1,ao.exports=$u()),ao.exports}var K=Au(),lo={exports:{}},J={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O8;function Mu(){if(O8)return J;O8=1;var a=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),d=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),E=Symbol.iterator;function V(g){return g===null||typeof g!="object"?null:(g=E&&g[E]||g["@@iterator"],typeof g=="function"?g:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,yt={};function xt(g,H,G){this.props=g,this.context=H,this.refs=yt,this.updater=G||U}xt.prototype.isReactComponent={},xt.prototype.setState=function(g,H){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,H,"setState")},xt.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function be(){}be.prototype=xt.prototype;function ct(g,H,G){this.props=g,this.context=H,this.refs=yt,this.updater=G||U}var Wt=ct.prototype=new be;Wt.constructor=ct,X(Wt,xt.prototype),Wt.isPureReactComponent=!0;var qe=Array.isArray,r1={H:null,A:null,T:null,S:null},pt=Object.prototype.hasOwnProperty;function je(g,H,G,B,T,s1){return G=s1.ref,{$$typeof:a,type:g,key:H,ref:G!==void 0?G:null,props:s1}}function Ge(g,H){return je(g.type,H,void 0,void 0,void 0,g.props)}function j(g){return typeof g=="object"&&g!==null&&g.$$typeof===a}function o1(g){var H={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(G){return H[G]})}var Ut=/\/+/g;function _e(g,H){return typeof g=="object"&&g!==null&&g.key!=null?o1(""+g.key):H.toString(36)}function re(){}function me(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(re,re):(g.status="pending",g.then(function(H){g.status==="pending"&&(g.status="fulfilled",g.value=H)},function(H){g.status==="pending"&&(g.status="rejected",g.reason=H)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function vt(g,H,G,B,T){var s1=typeof g;(s1==="undefined"||s1==="boolean")&&(g=null);var F=!1;if(g===null)F=!0;else switch(s1){case"bigint":case"string":case"number":F=!0;break;case"object":switch(g.$$typeof){case a:case n:F=!0;break;case M:return F=g._init,vt(F(g._payload),H,G,B,T)}}if(F)return T=T(g),F=B===""?"."+_e(g,0):B,qe(T)?(G="",F!=null&&(G=F.replace(Ut,"$&/")+"/"),vt(T,H,G,"",function(z1){return z1})):T!=null&&(j(T)&&(T=Ge(T,G+(T.key==null||g&&g.key===T.key?"":(""+T.key).replace(Ut,"$&/")+"/")+F)),H.push(T)),1;F=0;var ut=B===""?".":B+":";if(qe(g))for(var c1=0;c1<g.length;c1++)B=g[c1],s1=ut+_e(B,c1),F+=vt(B,H,G,s1,T);else if(c1=V(g),typeof c1=="function")for(g=c1.call(g),c1=0;!(B=g.next()).done;)B=B.value,s1=ut+_e(B,c1++),F+=vt(B,H,G,s1,T);else if(s1==="object"){if(typeof g.then=="function")return vt(me(g),H,G,B,T);throw H=String(g),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return F}function O(g,H,G){if(g==null)return g;var B=[],T=0;return vt(g,B,"","",function(s1){return H.call(G,s1,T++)}),B}function P(g){if(g._status===-1){var H=g._result;H=H(),H.then(function(G){(g._status===0||g._status===-1)&&(g._status=1,g._result=G)},function(G){(g._status===0||g._status===-1)&&(g._status=2,g._result=G)}),g._status===-1&&(g._status=0,g._result=H)}if(g._status===1)return g._result.default;throw g._result}var Y=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function y1(){}return J.Children={map:O,forEach:function(g,H,G){O(g,function(){H.apply(this,arguments)},G)},count:function(g){var H=0;return O(g,function(){H++}),H},toArray:function(g){return O(g,function(H){return H})||[]},only:function(g){if(!j(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},J.Component=xt,J.Fragment=l,J.Profiler=c,J.PureComponent=ct,J.StrictMode=r,J.Suspense=C,J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r1,J.act=function(){throw Error("act(...) is not supported in production builds of React.")},J.cache=function(g){return function(){return g.apply(null,arguments)}},J.cloneElement=function(g,H,G){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var B=X({},g.props),T=g.key,s1=void 0;if(H!=null)for(F in H.ref!==void 0&&(s1=void 0),H.key!==void 0&&(T=""+H.key),H)!pt.call(H,F)||F==="key"||F==="__self"||F==="__source"||F==="ref"&&H.ref===void 0||(B[F]=H[F]);var F=arguments.length-2;if(F===1)B.children=G;else if(1<F){for(var ut=Array(F),c1=0;c1<F;c1++)ut[c1]=arguments[c1+2];B.children=ut}return je(g.type,T,void 0,void 0,s1,B)},J.createContext=function(g){return g={$$typeof:d,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:h,_context:g},g},J.createElement=function(g,H,G){var B,T={},s1=null;if(H!=null)for(B in H.key!==void 0&&(s1=""+H.key),H)pt.call(H,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(T[B]=H[B]);var F=arguments.length-2;if(F===1)T.children=G;else if(1<F){for(var ut=Array(F),c1=0;c1<F;c1++)ut[c1]=arguments[c1+2];T.children=ut}if(g&&g.defaultProps)for(B in F=g.defaultProps,F)T[B]===void 0&&(T[B]=F[B]);return je(g,s1,void 0,void 0,null,T)},J.createRef=function(){return{current:null}},J.forwardRef=function(g){return{$$typeof:v,render:g}},J.isValidElement=j,J.lazy=function(g){return{$$typeof:M,_payload:{_status:-1,_result:g},_init:P}},J.memo=function(g,H){return{$$typeof:w,type:g,compare:H===void 0?null:H}},J.startTransition=function(g){var H=r1.T,G={};r1.T=G;try{var B=g(),T=r1.S;T!==null&&T(G,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(y1,Y)}catch(s1){Y(s1)}finally{r1.T=H}},J.unstable_useCacheRefresh=function(){return r1.H.useCacheRefresh()},J.use=function(g){return r1.H.use(g)},J.useActionState=function(g,H,G){return r1.H.useActionState(g,H,G)},J.useCallback=function(g,H){return r1.H.useCallback(g,H)},J.useContext=function(g){return r1.H.useContext(g)},J.useDebugValue=function(){},J.useDeferredValue=function(g,H){return r1.H.useDeferredValue(g,H)},J.useEffect=function(g,H){return r1.H.useEffect(g,H)},J.useId=function(){return r1.H.useId()},J.useImperativeHandle=function(g,H,G){return r1.H.useImperativeHandle(g,H,G)},J.useInsertionEffect=function(g,H){return r1.H.useInsertionEffect(g,H)},J.useLayoutEffect=function(g,H){return r1.H.useLayoutEffect(g,H)},J.useMemo=function(g,H){return r1.H.useMemo(g,H)},J.useOptimistic=function(g,H){return r1.H.useOptimistic(g,H)},J.useReducer=function(g,H,G){return r1.H.useReducer(g,H,G)},J.useRef=function(g){return r1.H.useRef(g)},J.useState=function(g){return r1.H.useState(g)},J.useSyncExternalStore=function(g,H,G){return r1.H.useSyncExternalStore(g,H,G)},J.useTransition=function(){return r1.H.useTransition()},J.version="19.0.0",J}var V8;function So(){return V8||(V8=1,lo.exports=Mu()),lo.exports}var Va=So();const Du=Eu(Va),I1=Su({__proto__:null,default:Du},[Va]);var ro={exports:{}},fn={},oo={exports:{}},co={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T8;function zu(){return T8||(T8=1,function(a){function n(O,P){var Y=O.length;O.push(P);t:for(;0<Y;){var y1=Y-1>>>1,g=O[y1];if(0<c(g,P))O[y1]=P,O[Y]=g,Y=y1;else break t}}function l(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var P=O[0],Y=O.pop();if(Y!==P){O[0]=Y;t:for(var y1=0,g=O.length,H=g>>>1;y1<H;){var G=2*(y1+1)-1,B=O[G],T=G+1,s1=O[T];if(0>c(B,Y))T<g&&0>c(s1,B)?(O[y1]=s1,O[T]=Y,y1=T):(O[y1]=B,O[G]=Y,y1=G);else if(T<g&&0>c(s1,Y))O[y1]=s1,O[T]=Y,y1=T;else break t}}return P}function c(O,P){var Y=O.sortIndex-P.sortIndex;return Y!==0?Y:O.id-P.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var d=Date,v=d.now();a.unstable_now=function(){return d.now()-v}}var C=[],w=[],M=1,E=null,V=3,U=!1,X=!1,yt=!1,xt=typeof setTimeout=="function"?setTimeout:null,be=typeof clearTimeout=="function"?clearTimeout:null,ct=typeof setImmediate<"u"?setImmediate:null;function Wt(O){for(var P=l(w);P!==null;){if(P.callback===null)r(w);else if(P.startTime<=O)r(w),P.sortIndex=P.expirationTime,n(C,P);else break;P=l(w)}}function qe(O){if(yt=!1,Wt(O),!X)if(l(C)!==null)X=!0,me();else{var P=l(w);P!==null&&vt(qe,P.startTime-O)}}var r1=!1,pt=-1,je=5,Ge=-1;function j(){return!(a.unstable_now()-Ge<je)}function o1(){if(r1){var O=a.unstable_now();Ge=O;var P=!0;try{t:{X=!1,yt&&(yt=!1,be(pt),pt=-1),U=!0;var Y=V;try{e:{for(Wt(O),E=l(C);E!==null&&!(E.expirationTime>O&&j());){var y1=E.callback;if(typeof y1=="function"){E.callback=null,V=E.priorityLevel;var g=y1(E.expirationTime<=O);if(O=a.unstable_now(),typeof g=="function"){E.callback=g,Wt(O),P=!0;break e}E===l(C)&&r(C),Wt(O)}else r(C);E=l(C)}if(E!==null)P=!0;else{var H=l(w);H!==null&&vt(qe,H.startTime-O),P=!1}}break t}finally{E=null,V=Y,U=!1}P=void 0}}finally{P?Ut():r1=!1}}}var Ut;if(typeof ct=="function")Ut=function(){ct(o1)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,re=_e.port2;_e.port1.onmessage=o1,Ut=function(){re.postMessage(null)}}else Ut=function(){xt(o1,0)};function me(){r1||(r1=!0,Ut())}function vt(O,P){pt=xt(function(){O(a.unstable_now())},P)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(O){O.callback=null},a.unstable_continueExecution=function(){X||U||(X=!0,me())},a.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<O?Math.floor(1e3/O):5},a.unstable_getCurrentPriorityLevel=function(){return V},a.unstable_getFirstCallbackNode=function(){return l(C)},a.unstable_next=function(O){switch(V){case 1:case 2:case 3:var P=3;break;default:P=V}var Y=V;V=P;try{return O()}finally{V=Y}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(O,P){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Y=V;V=O;try{return P()}finally{V=Y}},a.unstable_scheduleCallback=function(O,P,Y){var y1=a.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?y1+Y:y1):Y=y1,O){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=Y+g,O={id:M++,callback:P,priorityLevel:O,startTime:Y,expirationTime:g,sortIndex:-1},Y>y1?(O.sortIndex=Y,n(w,O),l(C)===null&&O===l(w)&&(yt?(be(pt),pt=-1):yt=!0,vt(qe,Y-y1))):(O.sortIndex=g,n(C,O),X||U||(X=!0,me())),O},a.unstable_shouldYield=j,a.unstable_wrapCallback=function(O){var P=V;return function(){var Y=V;V=P;try{return O.apply(this,arguments)}finally{V=Y}}}}(co)),co}var R8;function Lu(){return R8||(R8=1,oo.exports=zu()),oo.exports}var uo={exports:{}},ot={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z8;function Hu(){if(Z8)return ot;Z8=1;var a=So();function n(C){var w="https://react.dev/errors/"+C;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)w+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+C+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var r={d:{f:l,r:function(){throw Error(n(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},c=Symbol.for("react.portal");function h(C,w,M){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:E==null?null:""+E,children:C,containerInfo:w,implementation:M}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(C,w){if(C==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ot.createPortal=function(C,w){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(n(299));return h(C,w,null,M)},ot.flushSync=function(C){var w=d.T,M=r.p;try{if(d.T=null,r.p=2,C)return C()}finally{d.T=w,r.p=M,r.d.f()}},ot.preconnect=function(C,w){typeof C=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,r.d.C(C,w))},ot.prefetchDNS=function(C){typeof C=="string"&&r.d.D(C)},ot.preinit=function(C,w){if(typeof C=="string"&&w&&typeof w.as=="string"){var M=w.as,E=v(M,w.crossOrigin),V=typeof w.integrity=="string"?w.integrity:void 0,U=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;M==="style"?r.d.S(C,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:E,integrity:V,fetchPriority:U}):M==="script"&&r.d.X(C,{crossOrigin:E,integrity:V,fetchPriority:U,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},ot.preinitModule=function(C,w){if(typeof C=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var M=v(w.as,w.crossOrigin);r.d.M(C,{crossOrigin:M,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&r.d.M(C)},ot.preload=function(C,w){if(typeof C=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var M=w.as,E=v(M,w.crossOrigin);r.d.L(C,M,{crossOrigin:E,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},ot.preloadModule=function(C,w){if(typeof C=="string")if(w){var M=v(w.as,w.crossOrigin);r.d.m(C,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:M,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else r.d.m(C)},ot.requestFormReset=function(C){r.d.r(C)},ot.unstable_batchedUpdates=function(C,w){return C(w)},ot.useFormState=function(C,w,M){return d.H.useFormState(C,w,M)},ot.useFormStatus=function(){return d.H.useHostTransitionStatus()},ot.version="19.0.0",ot}var N8;function Uu(){if(N8)return uo.exports;N8=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(n){console.error(n)}}return a(),uo.exports=Hu(),uo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B8;function Ou(){if(B8)return fn;B8=1;var a=Lu(),n=So(),l=Uu();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)e+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var h=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),U=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),yt=Symbol.for("react.suspense"),xt=Symbol.for("react.suspense_list"),be=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),Wt=Symbol.for("react.offscreen"),qe=Symbol.for("react.memo_cache_sentinel"),r1=Symbol.iterator;function pt(t){return t===null||typeof t!="object"?null:(t=r1&&t[r1]||t["@@iterator"],typeof t=="function"?t:null)}var je=Symbol.for("react.client.reference");function Ge(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===je?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case v:return"Portal";case M:return"Profiler";case w:return"StrictMode";case yt:return"Suspense";case xt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case U:return(t.displayName||"Context")+".Provider";case V:return(t._context.displayName||"Context")+".Consumer";case X:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case be:return e=t.displayName||null,e!==null?e:Ge(t.type)||"Memo";case ct:e=t._payload,t=t._init;try{return Ge(t(e))}catch{}}return null}var j=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,o1=Object.assign,Ut,_e;function re(t){if(Ut===void 0)try{throw Error()}catch(s){var e=s.stack.trim().match(/\n( *(at )?)/);Ut=e&&e[1]||"",_e=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ut+t+_e}var me=!1;function vt(t,e){if(!t||me)return"";me=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch($){var S=$}Reflect.construct(t,[],L)}else{try{L.call()}catch($){S=$}t.call(L.prototype)}}else{try{throw Error()}catch($){S=$}(L=t())&&typeof L.catch=="function"&&L.catch(function(){})}}catch($){if($&&S&&typeof $.stack=="string")return[$.stack,S.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),f=u[0],y=u[1];if(f&&y){var p=f.split(`
`),m=y.split(`
`);for(o=i=0;i<p.length&&!p[i].includes("DetermineComponentFrameRoot");)i++;for(;o<m.length&&!m[o].includes("DetermineComponentFrameRoot");)o++;if(i===p.length||o===m.length)for(i=p.length-1,o=m.length-1;1<=i&&0<=o&&p[i]!==m[o];)o--;for(;1<=i&&0<=o;i--,o--)if(p[i]!==m[o]){if(i!==1||o!==1)do if(i--,o--,0>o||p[i]!==m[o]){var A=`
`+p[i].replace(" at new "," at ");return t.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",t.displayName)),A}while(1<=i&&0<=o);break}}}finally{me=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?re(s):""}function O(t){switch(t.tag){case 26:case 27:case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 15:return t=vt(t.type,!1),t;case 11:return t=vt(t.type.render,!1),t;case 1:return t=vt(t.type,!0),t;default:return""}}function P(t){try{var e="";do e+=O(t),t=t.return;while(t);return e}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Y(t){var e=t,s=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(s=e.return),t=e.return;while(t)}return e.tag===3?s:null}function y1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(Y(t)!==t)throw Error(r(188))}function H(t){var e=t.alternate;if(!e){if(e=Y(t),e===null)throw Error(r(188));return e!==t?null:t}for(var s=t,i=e;;){var o=s.return;if(o===null)break;var u=o.alternate;if(u===null){if(i=o.return,i!==null){s=i;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===s)return g(o),t;if(u===i)return g(o),e;u=u.sibling}throw Error(r(188))}if(s.return!==i.return)s=o,i=u;else{for(var f=!1,y=o.child;y;){if(y===s){f=!0,s=o,i=u;break}if(y===i){f=!0,i=o,s=u;break}y=y.sibling}if(!f){for(y=u.child;y;){if(y===s){f=!0,s=u,i=o;break}if(y===i){f=!0,i=u,s=o;break}y=y.sibling}if(!f)throw Error(r(189))}}if(s.alternate!==i)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:e}function G(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=G(t),e!==null)return e;t=t.sibling}return null}var B=Array.isArray,T=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,s1={pending:!1,data:null,method:null,action:null},F=[],ut=-1;function c1(t){return{current:t}}function z1(t){0>ut||(t.current=F[ut],F[ut]=null,ut--)}function g1(t,e){ut++,F[ut]=t.current,t.current=e}var oe=c1(null),ys=c1(null),Ye=c1(null),Wn=c1(null);function In(t,e){switch(g1(Ye,e),g1(ys,t),g1(oe,null),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?o8(e):0;break;default:if(t=t===8?e.parentNode:e,e=t.tagName,t=t.namespaceURI)t=o8(t),e=c8(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z1(oe),g1(oe,e)}function h5(){z1(oe),z1(ys),z1(Ye)}function Ja(t){t.memoizedState!==null&&g1(Wn,t);var e=oe.current,s=c8(e,t.type);e!==s&&(g1(ys,t),g1(oe,s))}function ti(t){ys.current===t&&(z1(oe),z1(ys)),Wn.current===t&&(z1(Wn),rn._currentValue=s1)}var Fa=Object.prototype.hasOwnProperty,Wa=a.unstable_scheduleCallback,Ia=a.unstable_cancelCallback,n9=a.unstable_shouldYield,i9=a.unstable_requestPaint,ce=a.unstable_now,a9=a.unstable_getCurrentPriorityLevel,Fo=a.unstable_ImmediatePriority,Wo=a.unstable_UserBlockingPriority,ei=a.unstable_NormalPriority,l9=a.unstable_LowPriority,Io=a.unstable_IdlePriority,r9=a.log,o9=a.unstable_setDisableYieldValue,ps=null,wt=null;function c9(t){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(ps,t,void 0,(t.current.flags&128)===128)}catch{}}function Xe(t){if(typeof r9=="function"&&o9(t),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(ps,t)}catch{}}var kt=Math.clz32?Math.clz32:d9,u9=Math.log,h9=Math.LN2;function d9(t){return t>>>=0,t===0?32:31-(u9(t)/h9|0)|0}var si=128,ni=4194304;function E2(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ii(t,e){var s=t.pendingLanes;if(s===0)return 0;var i=0,o=t.suspendedLanes,u=t.pingedLanes,f=t.warmLanes;t=t.finishedLanes!==0;var y=s&134217727;return y!==0?(s=y&~o,s!==0?i=E2(s):(u&=y,u!==0?i=E2(u):t||(f=y&~f,f!==0&&(i=E2(f))))):(y=s&~o,y!==0?i=E2(y):u!==0?i=E2(u):t||(f=s&~f,f!==0&&(i=E2(f)))),i===0?0:e!==0&&e!==i&&(e&o)===0&&(o=i&-i,f=e&-e,o>=f||o===32&&(f&4194176)!==0)?e:i}function vs(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function f9(t,e){switch(t){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function t7(){var t=si;return si<<=1,(si&4194176)===0&&(si=128),t}function e7(){var t=ni;return ni<<=1,(ni&62914560)===0&&(ni=4194304),t}function tl(t){for(var e=[],s=0;31>s;s++)e.push(t);return e}function Cs(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function y9(t,e,s,i,o,u){var f=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var y=t.entanglements,p=t.expirationTimes,m=t.hiddenUpdates;for(s=f&~s;0<s;){var A=31-kt(s),L=1<<A;y[A]=0,p[A]=-1;var S=m[A];if(S!==null)for(m[A]=null,A=0;A<S.length;A++){var $=S[A];$!==null&&($.lane&=-536870913)}s&=~L}i!==0&&s7(t,i,0),u!==0&&o===0&&t.tag!==0&&(t.suspendedLanes|=u&~(f&~e))}function s7(t,e,s){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-kt(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|s&4194218}function n7(t,e){var s=t.entangledLanes|=e;for(t=t.entanglements;s;){var i=31-kt(s),o=1<<i;o&e|t[i]&e&&(t[i]|=e),s&=~o}}function i7(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function a7(){var t=T.p;return t!==0?t:(t=window.event,t===void 0?32:$8(t.type))}function p9(t,e){var s=T.p;try{return T.p=t,e()}finally{T.p=s}}var Qe=Math.random().toString(36).slice(2),lt="__reactFiber$"+Qe,Ct="__reactProps$"+Qe,d5="__reactContainer$"+Qe,el="__reactEvents$"+Qe,v9="__reactListeners$"+Qe,C9="__reactHandles$"+Qe,l7="__reactResources$"+Qe,gs="__reactMarker$"+Qe;function sl(t){delete t[lt],delete t[Ct],delete t[el],delete t[v9],delete t[C9]}function $2(t){var e=t[lt];if(e)return e;for(var s=t.parentNode;s;){if(e=s[d5]||s[lt]){if(s=e.alternate,e.child!==null||s!==null&&s.child!==null)for(t=d8(t);t!==null;){if(s=t[lt])return s;t=d8(t)}return e}t=s,s=t.parentNode}return null}function f5(t){if(t=t[lt]||t[d5]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function bs(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function y5(t){var e=t[l7];return e||(e=t[l7]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function P1(t){t[gs]=!0}var r7=new Set,o7={};function A2(t,e){p5(t,e),p5(t+"Capture",e)}function p5(t,e){for(o7[t]=e,t=0;t<e.length;t++)r7.add(e[t])}var xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g9=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),c7={},u7={};function b9(t){return Fa.call(u7,t)?!0:Fa.call(c7,t)?!1:g9.test(t)?u7[t]=!0:(c7[t]=!0,!1)}function ai(t,e,s){if(b9(e))if(s===null)t.removeAttribute(e);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+s)}}function li(t,e,s){if(s===null)t.removeAttribute(e);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+s)}}function we(t,e,s,i){if(i===null)t.removeAttribute(s);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(e,s,""+i)}}function Ot(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function h7(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _9(t){var e=h7(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var o=s.get,u=s.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return o.call(this)},set:function(f){i=""+f,u.call(this,f)}}),Object.defineProperty(t,e,{enumerable:s.enumerable}),{getValue:function(){return i},setValue:function(f){i=""+f},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ri(t){t._valueTracker||(t._valueTracker=_9(t))}function d7(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var s=e.getValue(),i="";return t&&(i=h7(t)?t.checked?"true":"false":t.value),t=i,t!==s?(e.setValue(t),!0):!1}function oi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var m9=/[\n"\\]/g;function Vt(t){return t.replace(m9,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function nl(t,e,s,i,o,u,f,y){t.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.type=f:t.removeAttribute("type"),e!=null?f==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ot(e)):t.value!==""+Ot(e)&&(t.value=""+Ot(e)):f!=="submit"&&f!=="reset"||t.removeAttribute("value"),e!=null?il(t,f,Ot(e)):s!=null?il(t,f,Ot(s)):i!=null&&t.removeAttribute("value"),o==null&&u!=null&&(t.defaultChecked=!!u),o!=null&&(t.checked=o&&typeof o!="function"&&typeof o!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.name=""+Ot(y):t.removeAttribute("name")}function f7(t,e,s,i,o,u,f,y){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||s!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;s=s!=null?""+Ot(s):"",e=e!=null?""+Ot(e):s,y||e===t.value||(t.value=e),t.defaultValue=e}i=i??o,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=y?t.checked:!!i,t.defaultChecked=!!i,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.name=f)}function il(t,e,s){e==="number"&&oi(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function v5(t,e,s,i){if(t=t.options,e){e={};for(var o=0;o<s.length;o++)e["$"+s[o]]=!0;for(s=0;s<t.length;s++)o=e.hasOwnProperty("$"+t[s].value),t[s].selected!==o&&(t[s].selected=o),o&&i&&(t[s].defaultSelected=!0)}else{for(s=""+Ot(s),e=null,o=0;o<t.length;o++){if(t[o].value===s){t[o].selected=!0,i&&(t[o].defaultSelected=!0);return}e!==null||t[o].disabled||(e=t[o])}e!==null&&(e.selected=!0)}}function y7(t,e,s){if(e!=null&&(e=""+Ot(e),e!==t.value&&(t.value=e),s==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=s!=null?""+Ot(s):""}function p7(t,e,s,i){if(e==null){if(i!=null){if(s!=null)throw Error(r(92));if(B(i)){if(1<i.length)throw Error(r(93));i=i[0]}s=i}s==null&&(s=""),e=s}s=Ot(e),t.defaultValue=s,i=t.textContent,i===s&&i!==""&&i!==null&&(t.value=i)}function C5(t,e){if(e){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=e;return}}t.textContent=e}var x9=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function v7(t,e,s){var i=e.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,s):typeof s!="number"||s===0||x9.has(e)?e==="float"?t.cssFloat=s:t[e]=(""+s).trim():t[e]=s+"px"}function C7(t,e,s){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,s!=null){for(var i in s)!s.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var o in e)i=e[o],e.hasOwnProperty(o)&&s[o]!==i&&v7(t,o,i)}else for(var u in e)e.hasOwnProperty(u)&&v7(t,u,e[u])}function al(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w9=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),k9=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ci(t){return k9.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ll=null;function rl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var g5=null,b5=null;function g7(t){var e=f5(t);if(e&&(t=e.stateNode)){var s=t[Ct]||null;t:switch(t=e.stateNode,e.type){case"input":if(nl(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),e=s.name,s.type==="radio"&&e!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Vt(""+e)+'"][type="radio"]'),e=0;e<s.length;e++){var i=s[e];if(i!==t&&i.form===t.form){var o=i[Ct]||null;if(!o)throw Error(r(90));nl(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(e=0;e<s.length;e++)i=s[e],i.form===t.form&&d7(i)}break t;case"textarea":y7(t,s.value,s.defaultValue);break t;case"select":e=s.value,e!=null&&v5(t,!!s.multiple,e,!1)}}}var ol=!1;function b7(t,e,s){if(ol)return t(e,s);ol=!0;try{var i=t(e);return i}finally{if(ol=!1,(g5!==null||b5!==null)&&(Xi(),g5&&(e=g5,t=b5,b5=g5=null,g7(e),t)))for(e=0;e<t.length;e++)g7(t[e])}}function _s(t,e){var s=t.stateNode;if(s===null)return null;var i=s[Ct]||null;if(i===null)return null;s=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,e,typeof s));return s}var cl=!1;if(xe)try{var ms={};Object.defineProperty(ms,"passive",{get:function(){cl=!0}}),window.addEventListener("test",ms,ms),window.removeEventListener("test",ms,ms)}catch{cl=!1}var Ke=null,ul=null,ui=null;function _7(){if(ui)return ui;var t,e=ul,s=e.length,i,o="value"in Ke?Ke.value:Ke.textContent,u=o.length;for(t=0;t<s&&e[t]===o[t];t++);var f=s-t;for(i=1;i<=f&&e[s-i]===o[u-i];i++);return ui=o.slice(t,1<i?1-i:void 0)}function hi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function di(){return!0}function m7(){return!1}function gt(t){function e(s,i,o,u,f){this._reactName=s,this._targetInst=o,this.type=i,this.nativeEvent=u,this.target=f,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(s=t[y],this[y]=s?s(u):u[y]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?di:m7,this.isPropagationStopped=m7,this}return o1(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),e}var M2={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fi=gt(M2),xs=o1({},M2,{view:0,detail:0}),S9=gt(xs),hl,dl,ws,yi=o1({},xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ws&&(ws&&t.type==="mousemove"?(hl=t.screenX-ws.screenX,dl=t.screenY-ws.screenY):dl=hl=0,ws=t),hl)},movementY:function(t){return"movementY"in t?t.movementY:dl}}),x7=gt(yi),E9=o1({},yi,{dataTransfer:0}),$9=gt(E9),A9=o1({},xs,{relatedTarget:0}),fl=gt(A9),M9=o1({},M2,{animationName:0,elapsedTime:0,pseudoElement:0}),D9=gt(M9),z9=o1({},M2,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),L9=gt(z9),H9=o1({},M2,{data:0}),w7=gt(H9),U9={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O9={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V9={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T9(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=V9[t])?!!e[t]:!1}function yl(){return T9}var R9=o1({},xs,{key:function(t){if(t.key){var e=U9[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?O9[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yl,charCode:function(t){return t.type==="keypress"?hi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Z9=gt(R9),N9=o1({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),k7=gt(N9),B9=o1({},xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yl}),q9=gt(B9),j9=o1({},M2,{propertyName:0,elapsedTime:0,pseudoElement:0}),G9=gt(j9),Y9=o1({},yi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),X9=gt(Y9),Q9=o1({},M2,{newState:0,oldState:0}),K9=gt(Q9),P9=[9,13,27,32],pl=xe&&"CompositionEvent"in window,ks=null;xe&&"documentMode"in document&&(ks=document.documentMode);var J9=xe&&"TextEvent"in window&&!ks,S7=xe&&(!pl||ks&&8<ks&&11>=ks),E7=" ",$7=!1;function A7(t,e){switch(t){case"keyup":return P9.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function M7(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _5=!1;function F9(t,e){switch(t){case"compositionend":return M7(e);case"keypress":return e.which!==32?null:($7=!0,E7);case"textInput":return t=e.data,t===E7&&$7?null:t;default:return null}}function W9(t,e){if(_5)return t==="compositionend"||!pl&&A7(t,e)?(t=_7(),ui=ul=Ke=null,_5=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return S7&&e.locale!=="ko"?null:e.data;default:return null}}var I9={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function D7(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!I9[t.type]:e==="textarea"}function z7(t,e,s,i){g5?b5?b5.push(i):b5=[i]:g5=i,e=Fi(e,"onChange"),0<e.length&&(s=new fi("onChange","change",null,s,i),t.push({event:s,listeners:e}))}var Ss=null,Es=null;function tc(t){n8(t,0)}function pi(t){var e=bs(t);if(d7(e))return t}function L7(t,e){if(t==="change")return e}var H7=!1;if(xe){var vl;if(xe){var Cl="oninput"in document;if(!Cl){var U7=document.createElement("div");U7.setAttribute("oninput","return;"),Cl=typeof U7.oninput=="function"}vl=Cl}else vl=!1;H7=vl&&(!document.documentMode||9<document.documentMode)}function O7(){Ss&&(Ss.detachEvent("onpropertychange",V7),Es=Ss=null)}function V7(t){if(t.propertyName==="value"&&pi(Es)){var e=[];z7(e,Es,t,rl(t)),b7(tc,e)}}function ec(t,e,s){t==="focusin"?(O7(),Ss=e,Es=s,Ss.attachEvent("onpropertychange",V7)):t==="focusout"&&O7()}function sc(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pi(Es)}function nc(t,e){if(t==="click")return pi(e)}function ic(t,e){if(t==="input"||t==="change")return pi(e)}function ac(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var St=typeof Object.is=="function"?Object.is:ac;function $s(t,e){if(St(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var s=Object.keys(t),i=Object.keys(e);if(s.length!==i.length)return!1;for(i=0;i<s.length;i++){var o=s[i];if(!Fa.call(e,o)||!St(t[o],e[o]))return!1}return!0}function T7(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function R7(t,e){var s=T7(t);t=0;for(var i;s;){if(s.nodeType===3){if(i=t+s.textContent.length,t<=e&&i>=e)return{node:s,offset:e-t};t=i}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=T7(s)}}function Z7(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Z7(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function N7(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=oi(t.document);e instanceof t.HTMLIFrameElement;){try{var s=typeof e.contentWindow.location.href=="string"}catch{s=!1}if(s)t=e.contentWindow;else break;e=oi(t.document)}return e}function gl(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lc(t,e){var s=N7(e);e=t.focusedElem;var i=t.selectionRange;if(s!==e&&e&&e.ownerDocument&&Z7(e.ownerDocument.documentElement,e)){if(i!==null&&gl(e)){if(t=i.start,s=i.end,s===void 0&&(s=t),"selectionStart"in e)e.selectionStart=t,e.selectionEnd=Math.min(s,e.value.length);else if(s=(t=e.ownerDocument||document)&&t.defaultView||window,s.getSelection){s=s.getSelection();var o=e.textContent.length,u=Math.min(i.start,o);i=i.end===void 0?u:Math.min(i.end,o),!s.extend&&u>i&&(o=i,i=u,u=o),o=R7(e,u);var f=R7(e,i);o&&f&&(s.rangeCount!==1||s.anchorNode!==o.node||s.anchorOffset!==o.offset||s.focusNode!==f.node||s.focusOffset!==f.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),s.removeAllRanges(),u>i?(s.addRange(t),s.extend(f.node,f.offset)):(t.setEnd(f.node,f.offset),s.addRange(t)))}}for(t=[],s=e;s=s.parentNode;)s.nodeType===1&&t.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<t.length;e++)s=t[e],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var rc=xe&&"documentMode"in document&&11>=document.documentMode,m5=null,bl=null,As=null,_l=!1;function B7(t,e,s){var i=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;_l||m5==null||m5!==oi(i)||(i=m5,"selectionStart"in i&&gl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),As&&$s(As,i)||(As=i,i=Fi(bl,"onSelect"),0<i.length&&(e=new fi("onSelect","select",null,e,s),t.push({event:e,listeners:i}),e.target=m5)))}function D2(t,e){var s={};return s[t.toLowerCase()]=e.toLowerCase(),s["Webkit"+t]="webkit"+e,s["Moz"+t]="moz"+e,s}var x5={animationend:D2("Animation","AnimationEnd"),animationiteration:D2("Animation","AnimationIteration"),animationstart:D2("Animation","AnimationStart"),transitionrun:D2("Transition","TransitionRun"),transitionstart:D2("Transition","TransitionStart"),transitioncancel:D2("Transition","TransitionCancel"),transitionend:D2("Transition","TransitionEnd")},ml={},q7={};xe&&(q7=document.createElement("div").style,"AnimationEvent"in window||(delete x5.animationend.animation,delete x5.animationiteration.animation,delete x5.animationstart.animation),"TransitionEvent"in window||delete x5.transitionend.transition);function z2(t){if(ml[t])return ml[t];if(!x5[t])return t;var e=x5[t],s;for(s in e)if(e.hasOwnProperty(s)&&s in q7)return ml[t]=e[s];return t}var j7=z2("animationend"),G7=z2("animationiteration"),Y7=z2("animationstart"),oc=z2("transitionrun"),cc=z2("transitionstart"),uc=z2("transitioncancel"),X7=z2("transitionend"),Q7=new Map,K7="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function It(t,e){Q7.set(t,e),A2(e,[t])}var Tt=[],w5=0,xl=0;function vi(){for(var t=w5,e=xl=w5=0;e<t;){var s=Tt[e];Tt[e++]=null;var i=Tt[e];Tt[e++]=null;var o=Tt[e];Tt[e++]=null;var u=Tt[e];if(Tt[e++]=null,i!==null&&o!==null){var f=i.pending;f===null?o.next=o:(o.next=f.next,f.next=o),i.pending=o}u!==0&&P7(s,o,u)}}function Ci(t,e,s,i){Tt[w5++]=t,Tt[w5++]=e,Tt[w5++]=s,Tt[w5++]=i,xl|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function wl(t,e,s,i){return Ci(t,e,s,i),gi(t)}function Pe(t,e){return Ci(t,null,null,e),gi(t)}function P7(t,e,s){t.lanes|=s;var i=t.alternate;i!==null&&(i.lanes|=s);for(var o=!1,u=t.return;u!==null;)u.childLanes|=s,i=u.alternate,i!==null&&(i.childLanes|=s),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(o=!0)),t=u,u=u.return;o&&e!==null&&t.tag===3&&(u=t.stateNode,o=31-kt(s),u=u.hiddenUpdates,t=u[o],t===null?u[o]=[e]:t.push(e),e.lane=s|536870912)}function gi(t){if(50<Is)throw Is=0,Mr=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var k5={},J7=new WeakMap;function Rt(t,e){if(typeof t=="object"&&t!==null){var s=J7.get(t);return s!==void 0?s:(e={value:t,source:e,stack:P(e)},J7.set(t,e),e)}return{value:t,source:e,stack:P(e)}}var S5=[],E5=0,bi=null,_i=0,Zt=[],Nt=0,L2=null,ke=1,Se="";function H2(t,e){S5[E5++]=_i,S5[E5++]=bi,bi=t,_i=e}function F7(t,e,s){Zt[Nt++]=ke,Zt[Nt++]=Se,Zt[Nt++]=L2,L2=t;var i=ke;t=Se;var o=32-kt(i)-1;i&=~(1<<o),s+=1;var u=32-kt(e)+o;if(30<u){var f=o-o%5;u=(i&(1<<f)-1).toString(32),i>>=f,o-=f,ke=1<<32-kt(e)+o|s<<o|i,Se=u+t}else ke=1<<u|s<<o|i,Se=t}function kl(t){t.return!==null&&(H2(t,1),F7(t,1,0))}function Sl(t){for(;t===bi;)bi=S5[--E5],S5[E5]=null,_i=S5[--E5],S5[E5]=null;for(;t===L2;)L2=Zt[--Nt],Zt[Nt]=null,Se=Zt[--Nt],Zt[Nt]=null,ke=Zt[--Nt],Zt[Nt]=null}var ht=null,st=null,a1=!1,te=null,ue=!1,El=Error(r(519));function U2(t){var e=Error(r(418,""));throw zs(Rt(e,t)),El}function W7(t){var e=t.stateNode,s=t.type,i=t.memoizedProps;switch(e[lt]=t,e[Ct]=i,s){case"dialog":e1("cancel",e),e1("close",e);break;case"iframe":case"object":case"embed":e1("load",e);break;case"video":case"audio":for(s=0;s<en.length;s++)e1(en[s],e);break;case"source":e1("error",e);break;case"img":case"image":case"link":e1("error",e),e1("load",e);break;case"details":e1("toggle",e);break;case"input":e1("invalid",e),f7(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),ri(e);break;case"select":e1("invalid",e);break;case"textarea":e1("invalid",e),p7(e,i.value,i.defaultValue,i.children),ri(e)}s=i.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||e.textContent===""+s||i.suppressHydrationWarning===!0||r8(e.textContent,s)?(i.popover!=null&&(e1("beforetoggle",e),e1("toggle",e)),i.onScroll!=null&&e1("scroll",e),i.onScrollEnd!=null&&e1("scrollend",e),i.onClick!=null&&(e.onclick=Wi),e=!0):e=!1,e||U2(t)}function I7(t){for(ht=t.return;ht;)switch(ht.tag){case 3:case 27:ue=!0;return;case 5:case 13:ue=!1;return;default:ht=ht.return}}function Ms(t){if(t!==ht)return!1;if(!a1)return I7(t),a1=!0,!1;var e=!1,s;if((s=t.tag!==3&&t.tag!==27)&&((s=t.tag===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Xr(t.type,t.memoizedProps)),s=!s),s&&(e=!0),e&&st&&U2(t),I7(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(e===0){st=se(t.nextSibling);break t}e--}else s!=="$"&&s!=="$!"&&s!=="$?"||e++;t=t.nextSibling}st=null}}else st=ht?se(t.stateNode.nextSibling):null;return!0}function Ds(){st=ht=null,a1=!1}function zs(t){te===null?te=[t]:te.push(t)}var Ls=Error(r(460)),t3=Error(r(474)),$l={then:function(){}};function e3(t){return t=t.status,t==="fulfilled"||t==="rejected"}function mi(){}function s3(t,e,s){switch(s=t[s],s===void 0?t.push(e):s!==e&&(e.then(mi,mi),e=s),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===Ls?Error(r(483)):t;default:if(typeof e.status=="string")e.then(mi,mi);else{if(t=p1,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var o=e;o.status="fulfilled",o.value=i}},function(i){if(e.status==="pending"){var o=e;o.status="rejected",o.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===Ls?Error(r(483)):t}throw Hs=e,Ls}}var Hs=null;function n3(){if(Hs===null)throw Error(r(459));var t=Hs;return Hs=null,t}var $5=null,Us=0;function xi(t){var e=Us;return Us+=1,$5===null&&($5=[]),s3($5,t,e)}function Os(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function wi(t,e){throw e.$$typeof===h?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function i3(t){var e=t._init;return e(t._payload)}function a3(t){function e(x,b){if(t){var k=x.deletions;k===null?(x.deletions=[b],x.flags|=16):k.push(b)}}function s(x,b){if(!t)return null;for(;b!==null;)e(x,b),b=b.sibling;return null}function i(x){for(var b=new Map;x!==null;)x.key!==null?b.set(x.key,x):b.set(x.index,x),x=x.sibling;return b}function o(x,b){return x=r2(x,b),x.index=0,x.sibling=null,x}function u(x,b,k){return x.index=k,t?(k=x.alternate,k!==null?(k=k.index,k<b?(x.flags|=33554434,b):k):(x.flags|=33554434,b)):(x.flags|=1048576,b)}function f(x){return t&&x.alternate===null&&(x.flags|=33554434),x}function y(x,b,k,D){return b===null||b.tag!==6?(b=mr(k,x.mode,D),b.return=x,b):(b=o(b,k),b.return=x,b)}function p(x,b,k,D){var R=k.type;return R===C?A(x,b,k.props.children,D,k.key):b!==null&&(b.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ct&&i3(R)===b.type)?(b=o(b,k.props),Os(b,k),b.return=x,b):(b=Bi(k.type,k.key,k.props,null,x.mode,D),Os(b,k),b.return=x,b)}function m(x,b,k,D){return b===null||b.tag!==4||b.stateNode.containerInfo!==k.containerInfo||b.stateNode.implementation!==k.implementation?(b=xr(k,x.mode,D),b.return=x,b):(b=o(b,k.children||[]),b.return=x,b)}function A(x,b,k,D,R){return b===null||b.tag!==7?(b=G2(k,x.mode,D,R),b.return=x,b):(b=o(b,k),b.return=x,b)}function L(x,b,k){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=mr(""+b,x.mode,k),b.return=x,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case d:return k=Bi(b.type,b.key,b.props,null,x.mode,k),Os(k,b),k.return=x,k;case v:return b=xr(b,x.mode,k),b.return=x,b;case ct:var D=b._init;return b=D(b._payload),L(x,b,k)}if(B(b)||pt(b))return b=G2(b,x.mode,k,null),b.return=x,b;if(typeof b.then=="function")return L(x,xi(b),k);if(b.$$typeof===U)return L(x,Ri(x,b),k);wi(x,b)}return null}function S(x,b,k,D){var R=b!==null?b.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return R!==null?null:y(x,b,""+k,D);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case d:return k.key===R?p(x,b,k,D):null;case v:return k.key===R?m(x,b,k,D):null;case ct:return R=k._init,k=R(k._payload),S(x,b,k,D)}if(B(k)||pt(k))return R!==null?null:A(x,b,k,D,null);if(typeof k.then=="function")return S(x,b,xi(k),D);if(k.$$typeof===U)return S(x,b,Ri(x,k),D);wi(x,k)}return null}function $(x,b,k,D,R){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return x=x.get(k)||null,y(b,x,""+D,R);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case d:return x=x.get(D.key===null?k:D.key)||null,p(b,x,D,R);case v:return x=x.get(D.key===null?k:D.key)||null,m(b,x,D,R);case ct:var I=D._init;return D=I(D._payload),$(x,b,k,D,R)}if(B(D)||pt(D))return x=x.get(k)||null,A(b,x,D,R,null);if(typeof D.then=="function")return $(x,b,k,xi(D),R);if(D.$$typeof===U)return $(x,b,k,Ri(b,D),R);wi(b,D)}return null}function Z(x,b,k,D){for(var R=null,I=null,N=b,q=b=0,W1=null;N!==null&&q<k.length;q++){N.index>q?(W1=N,N=null):W1=N.sibling;var l1=S(x,N,k[q],D);if(l1===null){N===null&&(N=W1);break}t&&N&&l1.alternate===null&&e(x,N),b=u(l1,b,q),I===null?R=l1:I.sibling=l1,I=l1,N=W1}if(q===k.length)return s(x,N),a1&&H2(x,q),R;if(N===null){for(;q<k.length;q++)N=L(x,k[q],D),N!==null&&(b=u(N,b,q),I===null?R=N:I.sibling=N,I=N);return a1&&H2(x,q),R}for(N=i(N);q<k.length;q++)W1=$(N,x,q,k[q],D),W1!==null&&(t&&W1.alternate!==null&&N.delete(W1.key===null?q:W1.key),b=u(W1,b,q),I===null?R=W1:I.sibling=W1,I=W1);return t&&N.forEach(function(y2){return e(x,y2)}),a1&&H2(x,q),R}function Q(x,b,k,D){if(k==null)throw Error(r(151));for(var R=null,I=null,N=b,q=b=0,W1=null,l1=k.next();N!==null&&!l1.done;q++,l1=k.next()){N.index>q?(W1=N,N=null):W1=N.sibling;var y2=S(x,N,l1.value,D);if(y2===null){N===null&&(N=W1);break}t&&N&&y2.alternate===null&&e(x,N),b=u(y2,b,q),I===null?R=y2:I.sibling=y2,I=y2,N=W1}if(l1.done)return s(x,N),a1&&H2(x,q),R;if(N===null){for(;!l1.done;q++,l1=k.next())l1=L(x,l1.value,D),l1!==null&&(b=u(l1,b,q),I===null?R=l1:I.sibling=l1,I=l1);return a1&&H2(x,q),R}for(N=i(N);!l1.done;q++,l1=k.next())l1=$(N,x,q,l1.value,D),l1!==null&&(t&&l1.alternate!==null&&N.delete(l1.key===null?q:l1.key),b=u(l1,b,q),I===null?R=l1:I.sibling=l1,I=l1);return t&&N.forEach(function(ku){return e(x,ku)}),a1&&H2(x,q),R}function k1(x,b,k,D){if(typeof k=="object"&&k!==null&&k.type===C&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case d:t:{for(var R=k.key;b!==null;){if(b.key===R){if(R=k.type,R===C){if(b.tag===7){s(x,b.sibling),D=o(b,k.props.children),D.return=x,x=D;break t}}else if(b.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ct&&i3(R)===b.type){s(x,b.sibling),D=o(b,k.props),Os(D,k),D.return=x,x=D;break t}s(x,b);break}else e(x,b);b=b.sibling}k.type===C?(D=G2(k.props.children,x.mode,D,k.key),D.return=x,x=D):(D=Bi(k.type,k.key,k.props,null,x.mode,D),Os(D,k),D.return=x,x=D)}return f(x);case v:t:{for(R=k.key;b!==null;){if(b.key===R)if(b.tag===4&&b.stateNode.containerInfo===k.containerInfo&&b.stateNode.implementation===k.implementation){s(x,b.sibling),D=o(b,k.children||[]),D.return=x,x=D;break t}else{s(x,b);break}else e(x,b);b=b.sibling}D=xr(k,x.mode,D),D.return=x,x=D}return f(x);case ct:return R=k._init,k=R(k._payload),k1(x,b,k,D)}if(B(k))return Z(x,b,k,D);if(pt(k)){if(R=pt(k),typeof R!="function")throw Error(r(150));return k=R.call(k),Q(x,b,k,D)}if(typeof k.then=="function")return k1(x,b,xi(k),D);if(k.$$typeof===U)return k1(x,b,Ri(x,k),D);wi(x,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,b!==null&&b.tag===6?(s(x,b.sibling),D=o(b,k),D.return=x,x=D):(s(x,b),D=mr(k,x.mode,D),D.return=x,x=D),f(x)):s(x,b)}return function(x,b,k,D){try{Us=0;var R=k1(x,b,k,D);return $5=null,R}catch(N){if(N===Ls)throw N;var I=Gt(29,N,null,x.mode);return I.lanes=D,I.return=x,I}finally{}}}var O2=a3(!0),l3=a3(!1),A5=c1(null),ki=c1(0);function r3(t,e){t=Ve,g1(ki,t),g1(A5,e),Ve=t|e.baseLanes}function Al(){g1(ki,Ve),g1(A5,A5.current)}function Ml(){Ve=ki.current,z1(A5),z1(ki)}var Bt=c1(null),he=null;function Je(t){var e=t.alternate;g1(R1,R1.current&1),g1(Bt,t),he===null&&(e===null||A5.current!==null||e.memoizedState!==null)&&(he=t)}function o3(t){if(t.tag===22){if(g1(R1,R1.current),g1(Bt,t),he===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(he=t)}}else Fe()}function Fe(){g1(R1,R1.current),g1(Bt,Bt.current)}function Ee(t){z1(Bt),he===t&&(he=null),z1(R1)}var R1=c1(0);function Si(t){for(var e=t;e!==null;){if(e.tag===13){var s=e.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hc=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(s,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(s){return s()})}},dc=a.unstable_scheduleCallback,fc=a.unstable_NormalPriority,Z1={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dl(){return{controller:new hc,data:new Map,refCount:0}}function Vs(t){t.refCount--,t.refCount===0&&dc(fc,function(){t.controller.abort()})}var Ts=null,zl=0,M5=0,D5=null;function yc(t,e){if(Ts===null){var s=Ts=[];zl=0,M5=Tr(),D5={status:"pending",value:void 0,then:function(i){s.push(i)}}}return zl++,e.then(c3,c3),e}function c3(){if(--zl===0&&Ts!==null){D5!==null&&(D5.status="fulfilled");var t=Ts;Ts=null,M5=0,D5=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function pc(t,e){var s=[],i={status:"pending",value:null,reason:null,then:function(o){s.push(o)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var o=0;o<s.length;o++)(0,s[o])(e)},function(o){for(i.status="rejected",i.reason=o,o=0;o<s.length;o++)(0,s[o])(void 0)}),i}var u3=j.S;j.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&yc(t,e),u3!==null&&u3(t,e)};var V2=c1(null);function Ll(){var t=V2.current;return t!==null?t:p1.pooledCache}function Ei(t,e){e===null?g1(V2,V2.current):g1(V2,e.pool)}function h3(){var t=Ll();return t===null?null:{parent:Z1._currentValue,pool:t}}var We=0,W=null,u1=null,L1=null,$i=!1,z5=!1,T2=!1,Ai=0,Rs=0,L5=null,vc=0;function $1(){throw Error(r(321))}function Hl(t,e){if(e===null)return!1;for(var s=0;s<e.length&&s<t.length;s++)if(!St(t[s],e[s]))return!1;return!0}function Ul(t,e,s,i,o,u){return We=u,W=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,j.H=t===null||t.memoizedState===null?R2:Ie,T2=!1,u=s(i,o),T2=!1,z5&&(u=f3(e,s,i,o)),d3(t),u}function d3(t){j.H=de;var e=u1!==null&&u1.next!==null;if(We=0,L1=u1=W=null,$i=!1,Rs=0,L5=null,e)throw Error(r(300));t===null||J1||(t=t.dependencies,t!==null&&Ti(t)&&(J1=!0))}function f3(t,e,s,i){W=t;var o=0;do{if(z5&&(L5=null),Rs=0,z5=!1,25<=o)throw Error(r(301));if(o+=1,L1=u1=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}j.H=Z2,u=e(s,i)}while(z5);return u}function Cc(){var t=j.H,e=t.useState()[0];return e=typeof e.then=="function"?Zs(e):e,t=t.useState()[0],(u1!==null?u1.memoizedState:null)!==t&&(W.flags|=1024),e}function Ol(){var t=Ai!==0;return Ai=0,t}function Vl(t,e,s){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s}function Tl(t){if($i){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}$i=!1}We=0,L1=u1=W=null,z5=!1,Rs=Ai=0,L5=null}function bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return L1===null?W.memoizedState=L1=t:L1=L1.next=t,L1}function H1(){if(u1===null){var t=W.alternate;t=t!==null?t.memoizedState:null}else t=u1.next;var e=L1===null?W.memoizedState:L1.next;if(e!==null)L1=e,u1=t;else{if(t===null)throw W.alternate===null?Error(r(467)):Error(r(310));u1=t,t={memoizedState:u1.memoizedState,baseState:u1.baseState,baseQueue:u1.baseQueue,queue:u1.queue,next:null},L1===null?W.memoizedState=L1=t:L1=L1.next=t}return L1}var Mi;Mi=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Zs(t){var e=Rs;return Rs+=1,L5===null&&(L5=[]),t=s3(L5,t,e),e=W,(L1===null?e.memoizedState:L1.next)===null&&(e=e.alternate,j.H=e===null||e.memoizedState===null?R2:Ie),t}function Di(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Zs(t);if(t.$$typeof===U)return rt(t)}throw Error(r(438,String(t)))}function Rl(t){var e=null,s=W.updateQueue;if(s!==null&&(e=s.memoCache),e==null){var i=W.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(o){return o.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),s===null&&(s=Mi(),W.updateQueue=s),s.memoCache=e,s=e.data[e.index],s===void 0)for(s=e.data[e.index]=Array(t),i=0;i<t;i++)s[i]=qe;return e.index++,s}function $e(t,e){return typeof e=="function"?e(t):e}function zi(t){var e=H1();return Zl(e,u1,t)}function Zl(t,e,s){var i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=s;var o=t.baseQueue,u=i.pending;if(u!==null){if(o!==null){var f=o.next;o.next=u.next,u.next=f}e.baseQueue=o=u,i.pending=null}if(u=t.baseState,o===null)t.memoizedState=u;else{e=o.next;var y=f=null,p=null,m=e,A=!1;do{var L=m.lane&-536870913;if(L!==m.lane?(n1&L)===L:(We&L)===L){var S=m.revertLane;if(S===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),L===M5&&(A=!0);else if((We&S)===S){m=m.next,S===M5&&(A=!0);continue}else L={lane:0,revertLane:m.revertLane,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},p===null?(y=p=L,f=u):p=p.next=L,W.lanes|=S,o2|=S;L=m.action,T2&&s(u,L),u=m.hasEagerState?m.eagerState:s(u,L)}else S={lane:L,revertLane:m.revertLane,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},p===null?(y=p=S,f=u):p=p.next=S,W.lanes|=L,o2|=L;m=m.next}while(m!==null&&m!==e);if(p===null?f=u:p.next=y,!St(u,t.memoizedState)&&(J1=!0,A&&(s=D5,s!==null)))throw s;t.memoizedState=u,t.baseState=f,t.baseQueue=p,i.lastRenderedState=u}return o===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Nl(t){var e=H1(),s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var i=s.dispatch,o=s.pending,u=e.memoizedState;if(o!==null){s.pending=null;var f=o=o.next;do u=t(u,f.action),f=f.next;while(f!==o);St(u,e.memoizedState)||(J1=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),s.lastRenderedState=u}return[u,i]}function y3(t,e,s){var i=W,o=H1(),u=a1;if(u){if(s===void 0)throw Error(r(407));s=s()}else s=e();var f=!St((u1||o).memoizedState,s);if(f&&(o.memoizedState=s,J1=!0),o=o.queue,jl(C3.bind(null,i,o,t),[t]),o.getSnapshot!==e||f||L1!==null&&L1.memoizedState.tag&1){if(i.flags|=2048,H5(9,v3.bind(null,i,o,s,e),{destroy:void 0},null),p1===null)throw Error(r(349));u||(We&60)!==0||p3(i,e,s)}return s}function p3(t,e,s){t.flags|=16384,t={getSnapshot:e,value:s},e=W.updateQueue,e===null?(e=Mi(),W.updateQueue=e,e.stores=[t]):(s=e.stores,s===null?e.stores=[t]:s.push(t))}function v3(t,e,s,i){e.value=s,e.getSnapshot=i,g3(e)&&b3(t)}function C3(t,e,s){return s(function(){g3(e)&&b3(t)})}function g3(t){var e=t.getSnapshot;t=t.value;try{var s=e();return!St(t,s)}catch{return!0}}function b3(t){var e=Pe(t,2);e!==null&&dt(e,t,2)}function Bl(t){var e=bt();if(typeof t=="function"){var s=t;if(t=s(),T2){Xe(!0);try{s()}finally{Xe(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$e,lastRenderedState:t},e}function _3(t,e,s,i){return t.baseState=s,Zl(t,u1,typeof i=="function"?i:$e)}function gc(t,e,s,i,o){if(Ui(t))throw Error(r(485));if(t=e.action,t!==null){var u={payload:o,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){u.listeners.push(f)}};j.T!==null?s(!0):u.isTransition=!1,i(u),s=e.pending,s===null?(u.next=e.pending=u,m3(e,u)):(u.next=s.next,e.pending=s.next=u)}}function m3(t,e){var s=e.action,i=e.payload,o=t.state;if(e.isTransition){var u=j.T,f={};j.T=f;try{var y=s(o,i),p=j.S;p!==null&&p(f,y),x3(t,e,y)}catch(m){ql(t,e,m)}finally{j.T=u}}else try{u=s(o,i),x3(t,e,u)}catch(m){ql(t,e,m)}}function x3(t,e,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(i){w3(t,e,i)},function(i){return ql(t,e,i)}):w3(t,e,s)}function w3(t,e,s){e.status="fulfilled",e.value=s,k3(e),t.state=s,e=t.pending,e!==null&&(s=e.next,s===e?t.pending=null:(s=s.next,e.next=s,m3(t,s)))}function ql(t,e,s){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=s,k3(e),e=e.next;while(e!==i)}t.action=null}function k3(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function S3(t,e){return e}function E3(t,e){if(a1){var s=p1.formState;if(s!==null){t:{var i=W;if(a1){if(st){e:{for(var o=st,u=ue;o.nodeType!==8;){if(!u){o=null;break e}if(o=se(o.nextSibling),o===null){o=null;break e}}u=o.data,o=u==="F!"||u==="F"?o:null}if(o){st=se(o.nextSibling),i=o.data==="F!";break t}}U2(i)}i=!1}i&&(e=s[0])}}return s=bt(),s.memoizedState=s.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:S3,lastRenderedState:e},s.queue=i,s=G3.bind(null,W,i),i.dispatch=s,i=Bl(!1),u=Kl.bind(null,W,!1,i.queue),i=bt(),o={state:e,dispatch:null,action:t,pending:null},i.queue=o,s=gc.bind(null,W,o,u,s),o.dispatch=s,i.memoizedState=t,[e,s,!1]}function $3(t){var e=H1();return A3(e,u1,t)}function A3(t,e,s){e=Zl(t,e,S3)[0],t=zi($e)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?Zs(e):e;var i=H1(),o=i.queue,u=o.dispatch;return s!==i.memoizedState&&(W.flags|=2048,H5(9,bc.bind(null,o,s),{destroy:void 0},null)),[e,u,t]}function bc(t,e){t.action=e}function M3(t){var e=H1(),s=u1;if(s!==null)return A3(e,s,t);H1(),e=e.memoizedState,s=H1();var i=s.queue.dispatch;return s.memoizedState=t,[e,i,!1]}function H5(t,e,s,i){return t={tag:t,create:e,inst:s,deps:i,next:null},e=W.updateQueue,e===null&&(e=Mi(),W.updateQueue=e),s=e.lastEffect,s===null?e.lastEffect=t.next=t:(i=s.next,s.next=t,t.next=i,e.lastEffect=t),t}function D3(){return H1().memoizedState}function Li(t,e,s,i){var o=bt();W.flags|=t,o.memoizedState=H5(1|e,s,{destroy:void 0},i===void 0?null:i)}function Hi(t,e,s,i){var o=H1();i=i===void 0?null:i;var u=o.memoizedState.inst;u1!==null&&i!==null&&Hl(i,u1.memoizedState.deps)?o.memoizedState=H5(e,s,u,i):(W.flags|=t,o.memoizedState=H5(1|e,s,u,i))}function z3(t,e){Li(8390656,8,t,e)}function jl(t,e){Hi(2048,8,t,e)}function L3(t,e){return Hi(4,2,t,e)}function H3(t,e){return Hi(4,4,t,e)}function U3(t,e){if(typeof e=="function"){t=t();var s=e(t);return function(){typeof s=="function"?s():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function O3(t,e,s){s=s!=null?s.concat([t]):null,Hi(4,4,U3.bind(null,e,t),s)}function Gl(){}function V3(t,e){var s=H1();e=e===void 0?null:e;var i=s.memoizedState;return e!==null&&Hl(e,i[1])?i[0]:(s.memoizedState=[t,e],t)}function T3(t,e){var s=H1();e=e===void 0?null:e;var i=s.memoizedState;if(e!==null&&Hl(e,i[1]))return i[0];if(i=t(),T2){Xe(!0);try{t()}finally{Xe(!1)}}return s.memoizedState=[i,e],i}function Yl(t,e,s){return s===void 0||(We&1073741824)!==0?t.memoizedState=e:(t.memoizedState=s,t=Z0(),W.lanes|=t,o2|=t,s)}function R3(t,e,s,i){return St(s,e)?s:A5.current!==null?(t=Yl(t,s,i),St(t,e)||(J1=!0),t):(We&42)===0?(J1=!0,t.memoizedState=s):(t=Z0(),W.lanes|=t,o2|=t,e)}function Z3(t,e,s,i,o){var u=T.p;T.p=u!==0&&8>u?u:8;var f=j.T,y={};j.T=y,Kl(t,!1,e,s);try{var p=o(),m=j.S;if(m!==null&&m(y,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var A=pc(p,i);Ns(t,e,A,Mt(t))}else Ns(t,e,i,Mt(t))}catch(L){Ns(t,e,{then:function(){},status:"rejected",reason:L},Mt())}finally{T.p=u,j.T=f}}function _c(){}function Xl(t,e,s,i){if(t.tag!==5)throw Error(r(476));var o=N3(t).queue;Z3(t,o,e,s1,s===null?_c:function(){return B3(t),s(i)})}function N3(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:s1,baseState:s1,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$e,lastRenderedState:s1},next:null};var s={};return e.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$e,lastRenderedState:s},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function B3(t){var e=N3(t).next.queue;Ns(t,e,{},Mt())}function Ql(){return rt(rn)}function q3(){return H1().memoizedState}function j3(){return H1().memoizedState}function mc(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var s=Mt();t=s2(s);var i=n2(e,t,s);i!==null&&(dt(i,e,s),js(i,e,s)),e={cache:Dl()},t.payload=e;return}e=e.return}}function xc(t,e,s){var i=Mt();s={lane:i,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Ui(t)?Y3(e,s):(s=wl(t,e,s,i),s!==null&&(dt(s,t,i),X3(s,e,i)))}function G3(t,e,s){var i=Mt();Ns(t,e,s,i)}function Ns(t,e,s,i){var o={lane:i,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Ui(t))Y3(e,o);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var f=e.lastRenderedState,y=u(f,s);if(o.hasEagerState=!0,o.eagerState=y,St(y,f))return Ci(t,e,o,0),p1===null&&vi(),!1}catch{}finally{}if(s=wl(t,e,o,i),s!==null)return dt(s,t,i),X3(s,e,i),!0}return!1}function Kl(t,e,s,i){if(i={lane:2,revertLane:Tr(),action:i,hasEagerState:!1,eagerState:null,next:null},Ui(t)){if(e)throw Error(r(479))}else e=wl(t,s,i,2),e!==null&&dt(e,t,2)}function Ui(t){var e=t.alternate;return t===W||e!==null&&e===W}function Y3(t,e){z5=$i=!0;var s=t.pending;s===null?e.next=e:(e.next=s.next,s.next=e),t.pending=e}function X3(t,e,s){if((s&4194176)!==0){var i=e.lanes;i&=t.pendingLanes,s|=i,e.lanes=s,n7(t,s)}}var de={readContext:rt,use:Di,useCallback:$1,useContext:$1,useEffect:$1,useImperativeHandle:$1,useLayoutEffect:$1,useInsertionEffect:$1,useMemo:$1,useReducer:$1,useRef:$1,useState:$1,useDebugValue:$1,useDeferredValue:$1,useTransition:$1,useSyncExternalStore:$1,useId:$1};de.useCacheRefresh=$1,de.useMemoCache=$1,de.useHostTransitionStatus=$1,de.useFormState=$1,de.useActionState=$1,de.useOptimistic=$1;var R2={readContext:rt,use:Di,useCallback:function(t,e){return bt().memoizedState=[t,e===void 0?null:e],t},useContext:rt,useEffect:z3,useImperativeHandle:function(t,e,s){s=s!=null?s.concat([t]):null,Li(4194308,4,U3.bind(null,e,t),s)},useLayoutEffect:function(t,e){return Li(4194308,4,t,e)},useInsertionEffect:function(t,e){Li(4,2,t,e)},useMemo:function(t,e){var s=bt();e=e===void 0?null:e;var i=t();if(T2){Xe(!0);try{t()}finally{Xe(!1)}}return s.memoizedState=[i,e],i},useReducer:function(t,e,s){var i=bt();if(s!==void 0){var o=s(e);if(T2){Xe(!0);try{s(e)}finally{Xe(!1)}}}else o=e;return i.memoizedState=i.baseState=o,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:o},i.queue=t,t=t.dispatch=xc.bind(null,W,t),[i.memoizedState,t]},useRef:function(t){var e=bt();return t={current:t},e.memoizedState=t},useState:function(t){t=Bl(t);var e=t.queue,s=G3.bind(null,W,e);return e.dispatch=s,[t.memoizedState,s]},useDebugValue:Gl,useDeferredValue:function(t,e){var s=bt();return Yl(s,t,e)},useTransition:function(){var t=Bl(!1);return t=Z3.bind(null,W,t.queue,!0,!1),bt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,s){var i=W,o=bt();if(a1){if(s===void 0)throw Error(r(407));s=s()}else{if(s=e(),p1===null)throw Error(r(349));(n1&60)!==0||p3(i,e,s)}o.memoizedState=s;var u={value:s,getSnapshot:e};return o.queue=u,z3(C3.bind(null,i,u,t),[t]),i.flags|=2048,H5(9,v3.bind(null,i,u,s,e),{destroy:void 0},null),s},useId:function(){var t=bt(),e=p1.identifierPrefix;if(a1){var s=Se,i=ke;s=(i&~(1<<32-kt(i)-1)).toString(32)+s,e=":"+e+"R"+s,s=Ai++,0<s&&(e+="H"+s.toString(32)),e+=":"}else s=vc++,e=":"+e+"r"+s.toString(32)+":";return t.memoizedState=e},useCacheRefresh:function(){return bt().memoizedState=mc.bind(null,W)}};R2.useMemoCache=Rl,R2.useHostTransitionStatus=Ql,R2.useFormState=E3,R2.useActionState=E3,R2.useOptimistic=function(t){var e=bt();e.memoizedState=e.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=s,e=Kl.bind(null,W,!0,s),s.dispatch=e,[t,e]};var Ie={readContext:rt,use:Di,useCallback:V3,useContext:rt,useEffect:jl,useImperativeHandle:O3,useInsertionEffect:L3,useLayoutEffect:H3,useMemo:T3,useReducer:zi,useRef:D3,useState:function(){return zi($e)},useDebugValue:Gl,useDeferredValue:function(t,e){var s=H1();return R3(s,u1.memoizedState,t,e)},useTransition:function(){var t=zi($e)[0],e=H1().memoizedState;return[typeof t=="boolean"?t:Zs(t),e]},useSyncExternalStore:y3,useId:q3};Ie.useCacheRefresh=j3,Ie.useMemoCache=Rl,Ie.useHostTransitionStatus=Ql,Ie.useFormState=$3,Ie.useActionState=$3,Ie.useOptimistic=function(t,e){var s=H1();return _3(s,u1,t,e)};var Z2={readContext:rt,use:Di,useCallback:V3,useContext:rt,useEffect:jl,useImperativeHandle:O3,useInsertionEffect:L3,useLayoutEffect:H3,useMemo:T3,useReducer:Nl,useRef:D3,useState:function(){return Nl($e)},useDebugValue:Gl,useDeferredValue:function(t,e){var s=H1();return u1===null?Yl(s,t,e):R3(s,u1.memoizedState,t,e)},useTransition:function(){var t=Nl($e)[0],e=H1().memoizedState;return[typeof t=="boolean"?t:Zs(t),e]},useSyncExternalStore:y3,useId:q3};Z2.useCacheRefresh=j3,Z2.useMemoCache=Rl,Z2.useHostTransitionStatus=Ql,Z2.useFormState=M3,Z2.useActionState=M3,Z2.useOptimistic=function(t,e){var s=H1();return u1!==null?_3(s,u1,t,e):(s.baseState=t,[t,s.queue.dispatch])};function Pl(t,e,s,i){e=t.memoizedState,s=s(i,e),s=s==null?e:o1({},e,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Jl={isMounted:function(t){return(t=t._reactInternals)?Y(t)===t:!1},enqueueSetState:function(t,e,s){t=t._reactInternals;var i=Mt(),o=s2(i);o.payload=e,s!=null&&(o.callback=s),e=n2(t,o,i),e!==null&&(dt(e,t,i),js(e,t,i))},enqueueReplaceState:function(t,e,s){t=t._reactInternals;var i=Mt(),o=s2(i);o.tag=1,o.payload=e,s!=null&&(o.callback=s),e=n2(t,o,i),e!==null&&(dt(e,t,i),js(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var s=Mt(),i=s2(s);i.tag=2,e!=null&&(i.callback=e),e=n2(t,i,s),e!==null&&(dt(e,t,s),js(e,t,s))}};function Q3(t,e,s,i,o,u,f){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,u,f):e.prototype&&e.prototype.isPureReactComponent?!$s(s,i)||!$s(o,u):!0}function K3(t,e,s,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(s,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(s,i),e.state!==t&&Jl.enqueueReplaceState(e,e.state,null)}function N2(t,e){var s=e;if("ref"in e){s={};for(var i in e)i!=="ref"&&(s[i]=e[i])}if(t=t.defaultProps){s===e&&(s=o1({},s));for(var o in t)s[o]===void 0&&(s[o]=t[o])}return s}var Oi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function P3(t){Oi(t)}function J3(t){console.error(t)}function F3(t){Oi(t)}function Vi(t,e){try{var s=t.onUncaughtError;s(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function W3(t,e,s){try{var i=t.onCaughtError;i(s.value,{componentStack:s.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Fl(t,e,s){return s=s2(s),s.tag=3,s.payload={element:null},s.callback=function(){Vi(t,e)},s}function I3(t){return t=s2(t),t.tag=3,t}function t0(t,e,s,i){var o=s.type.getDerivedStateFromError;if(typeof o=="function"){var u=i.value;t.payload=function(){return o(u)},t.callback=function(){W3(e,s,i)}}var f=s.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(t.callback=function(){W3(e,s,i),typeof o!="function"&&(c2===null?c2=new Set([this]):c2.add(this));var y=i.stack;this.componentDidCatch(i.value,{componentStack:y!==null?y:""})})}function wc(t,e,s,i,o){if(s.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=s.alternate,e!==null&&qs(e,s,o,!0),s=Bt.current,s!==null){switch(s.tag){case 13:return he===null?Lr():s.alternate===null&&w1===0&&(w1=3),s.flags&=-257,s.flags|=65536,s.lanes=o,i===$l?s.flags|=16384:(e=s.updateQueue,e===null?s.updateQueue=new Set([i]):e.add(i),Ur(t,i,o)),!1;case 22:return s.flags|=65536,i===$l?s.flags|=16384:(e=s.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},s.updateQueue=e):(s=e.retryQueue,s===null?e.retryQueue=new Set([i]):s.add(i)),Ur(t,i,o)),!1}throw Error(r(435,s.tag))}return Ur(t,i,o),Lr(),!1}if(a1)return e=Bt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=o,i!==El&&(t=Error(r(422),{cause:i}),zs(Rt(t,s)))):(i!==El&&(e=Error(r(423),{cause:i}),zs(Rt(e,s))),t=t.current.alternate,t.flags|=65536,o&=-o,t.lanes|=o,i=Rt(i,s),o=Fl(t.stateNode,i,o),dr(t,o),w1!==4&&(w1=2)),!1;var u=Error(r(520),{cause:i});if(u=Rt(u,s),Fs===null?Fs=[u]:Fs.push(u),w1!==4&&(w1=2),e===null)return!0;i=Rt(i,s),s=e;do{switch(s.tag){case 3:return s.flags|=65536,t=o&-o,s.lanes|=t,t=Fl(s.stateNode,i,t),dr(s,t),!1;case 1:if(e=s.type,u=s.stateNode,(s.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(c2===null||!c2.has(u))))return s.flags|=65536,o&=-o,s.lanes|=o,o=I3(o),t0(o,t,s,i),dr(s,o),!1}s=s.return}while(s!==null);return!1}var e0=Error(r(461)),J1=!1;function nt(t,e,s,i){e.child=t===null?l3(e,null,s,i):O2(e,t.child,s,i)}function s0(t,e,s,i,o){s=s.render;var u=e.ref;if("ref"in i){var f={};for(var y in i)y!=="ref"&&(f[y]=i[y])}else f=i;return q2(e),i=Ul(t,e,s,f,u,o),y=Ol(),t!==null&&!J1?(Vl(t,e,o),Ae(t,e,o)):(a1&&y&&kl(e),e.flags|=1,nt(t,e,i,o),e.child)}function n0(t,e,s,i,o){if(t===null){var u=s.type;return typeof u=="function"&&!_r(u)&&u.defaultProps===void 0&&s.compare===null?(e.tag=15,e.type=u,i0(t,e,u,i,o)):(t=Bi(s.type,null,i,e,e.mode,o),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!lr(t,o)){var f=u.memoizedProps;if(s=s.compare,s=s!==null?s:$s,s(f,i)&&t.ref===e.ref)return Ae(t,e,o)}return e.flags|=1,t=r2(u,i),t.ref=e.ref,t.return=e,e.child=t}function i0(t,e,s,i,o){if(t!==null){var u=t.memoizedProps;if($s(u,i)&&t.ref===e.ref)if(J1=!1,e.pendingProps=i=u,lr(t,o))(t.flags&131072)!==0&&(J1=!0);else return e.lanes=t.lanes,Ae(t,e,o)}return Wl(t,e,s,i,o)}function a0(t,e,s){var i=e.pendingProps,o=i.children,u=(e.stateNode._pendingVisibility&2)!==0,f=t!==null?t.memoizedState:null;if(Bs(t,e),i.mode==="hidden"||u){if((e.flags&128)!==0){if(i=f!==null?f.baseLanes|s:s,t!==null){for(o=e.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;e.childLanes=u&~i}else e.childLanes=0,e.child=null;return l0(t,e,i,s)}if((s&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ei(e,f!==null?f.cachePool:null),f!==null?r3(e,f):Al(),o3(e);else return e.lanes=e.childLanes=536870912,l0(t,e,f!==null?f.baseLanes|s:s,s)}else f!==null?(Ei(e,f.cachePool),r3(e,f),Fe(),e.memoizedState=null):(t!==null&&Ei(e,null),Al(),Fe());return nt(t,e,o,s),e.child}function l0(t,e,s,i){var o=Ll();return o=o===null?null:{parent:Z1._currentValue,pool:o},e.memoizedState={baseLanes:s,cachePool:o},t!==null&&Ei(e,null),Al(),o3(e),t!==null&&qs(t,e,i,!0),null}function Bs(t,e){var s=e.ref;if(s===null)t!==null&&t.ref!==null&&(e.flags|=2097664);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(e.flags|=2097664)}}function Wl(t,e,s,i,o){return q2(e),s=Ul(t,e,s,i,void 0,o),i=Ol(),t!==null&&!J1?(Vl(t,e,o),Ae(t,e,o)):(a1&&i&&kl(e),e.flags|=1,nt(t,e,s,o),e.child)}function r0(t,e,s,i,o,u){return q2(e),e.updateQueue=null,s=f3(e,i,s,o),d3(t),i=Ol(),t!==null&&!J1?(Vl(t,e,u),Ae(t,e,u)):(a1&&i&&kl(e),e.flags|=1,nt(t,e,s,u),e.child)}function o0(t,e,s,i,o){if(q2(e),e.stateNode===null){var u=k5,f=s.contextType;typeof f=="object"&&f!==null&&(u=rt(f)),u=new s(i,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Jl,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=i,u.state=e.memoizedState,u.refs={},ur(e),f=s.contextType,u.context=typeof f=="object"&&f!==null?rt(f):k5,u.state=e.memoizedState,f=s.getDerivedStateFromProps,typeof f=="function"&&(Pl(e,s,f,i),u.state=e.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(f=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),f!==u.state&&Jl.enqueueReplaceState(u,u.state,null),Ys(e,i,u,o),Gs(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){u=e.stateNode;var y=e.memoizedProps,p=N2(s,y);u.props=p;var m=u.context,A=s.contextType;f=k5,typeof A=="object"&&A!==null&&(f=rt(A));var L=s.getDerivedStateFromProps;A=typeof L=="function"||typeof u.getSnapshotBeforeUpdate=="function",y=e.pendingProps!==y,A||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(y||m!==f)&&K3(e,u,i,f),e2=!1;var S=e.memoizedState;u.state=S,Ys(e,i,u,o),Gs(),m=e.memoizedState,y||S!==m||e2?(typeof L=="function"&&(Pl(e,s,L,i),m=e.memoizedState),(p=e2||Q3(e,s,p,i,S,m,f))?(A||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=m),u.props=i,u.state=m,u.context=f,i=p):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{u=e.stateNode,hr(t,e),f=e.memoizedProps,A=N2(s,f),u.props=A,L=e.pendingProps,S=u.context,m=s.contextType,p=k5,typeof m=="object"&&m!==null&&(p=rt(m)),y=s.getDerivedStateFromProps,(m=typeof y=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==L||S!==p)&&K3(e,u,i,p),e2=!1,S=e.memoizedState,u.state=S,Ys(e,i,u,o),Gs();var $=e.memoizedState;f!==L||S!==$||e2||t!==null&&t.dependencies!==null&&Ti(t.dependencies)?(typeof y=="function"&&(Pl(e,s,y,i),$=e.memoizedState),(A=e2||Q3(e,s,A,i,S,$,p)||t!==null&&t.dependencies!==null&&Ti(t.dependencies))?(m||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,$,p),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,$,p)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===t.memoizedProps&&S===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&S===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=$),u.props=i,u.state=$,u.context=p,i=A):(typeof u.componentDidUpdate!="function"||f===t.memoizedProps&&S===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&S===t.memoizedState||(e.flags|=1024),i=!1)}return u=i,Bs(t,e),i=(e.flags&128)!==0,u||i?(u=e.stateNode,s=i&&typeof s.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&i?(e.child=O2(e,t.child,null,o),e.child=O2(e,null,s,o)):nt(t,e,s,o),e.memoizedState=u.state,t=e.child):t=Ae(t,e,o),t}function c0(t,e,s,i){return Ds(),e.flags|=256,nt(t,e,s,i),e.child}var Il={dehydrated:null,treeContext:null,retryLane:0};function tr(t){return{baseLanes:t,cachePool:h3()}}function er(t,e,s){return t=t!==null?t.childLanes&~s:0,e&&(t|=Yt),t}function u0(t,e,s){var i=e.pendingProps,o=!1,u=(e.flags&128)!==0,f;if((f=u)||(f=t!==null&&t.memoizedState===null?!1:(R1.current&2)!==0),f&&(o=!0,e.flags&=-129),f=(e.flags&32)!==0,e.flags&=-33,t===null){if(a1){if(o?Je(e):Fe(),a1){var y=st,p;if(p=y){t:{for(p=y,y=ue;p.nodeType!==8;){if(!y){y=null;break t}if(p=se(p.nextSibling),p===null){y=null;break t}}y=p}y!==null?(e.memoizedState={dehydrated:y,treeContext:L2!==null?{id:ke,overflow:Se}:null,retryLane:536870912},p=Gt(18,null,null,0),p.stateNode=y,p.return=e,e.child=p,ht=e,st=null,p=!0):p=!1}p||U2(e)}if(y=e.memoizedState,y!==null&&(y=y.dehydrated,y!==null))return y.data==="$!"?e.lanes=16:e.lanes=536870912,null;Ee(e)}return y=i.children,i=i.fallback,o?(Fe(),o=e.mode,y=nr({mode:"hidden",children:y},o),i=G2(i,o,s,null),y.return=e,i.return=e,y.sibling=i,e.child=y,o=e.child,o.memoizedState=tr(s),o.childLanes=er(t,f,s),e.memoizedState=Il,i):(Je(e),sr(e,y))}if(p=t.memoizedState,p!==null&&(y=p.dehydrated,y!==null)){if(u)e.flags&256?(Je(e),e.flags&=-257,e=ir(t,e,s)):e.memoizedState!==null?(Fe(),e.child=t.child,e.flags|=128,e=null):(Fe(),o=i.fallback,y=e.mode,i=nr({mode:"visible",children:i.children},y),o=G2(o,y,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,O2(e,t.child,null,s),i=e.child,i.memoizedState=tr(s),i.childLanes=er(t,f,s),e.memoizedState=Il,e=o);else if(Je(e),y.data==="$!"){if(f=y.nextSibling&&y.nextSibling.dataset,f)var m=f.dgst;f=m,i=Error(r(419)),i.stack="",i.digest=f,zs({value:i,source:null,stack:null}),e=ir(t,e,s)}else if(J1||qs(t,e,s,!1),f=(s&t.childLanes)!==0,J1||f){if(f=p1,f!==null){if(i=s&-s,(i&42)!==0)i=1;else switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=64;break;case 268435456:i=134217728;break;default:i=0}if(i=(i&(f.suspendedLanes|s))!==0?0:i,i!==0&&i!==p.retryLane)throw p.retryLane=i,Pe(t,i),dt(f,t,i),e0}y.data==="$?"||Lr(),e=ir(t,e,s)}else y.data==="$?"?(e.flags|=128,e.child=t.child,e=Rc.bind(null,t),y._reactRetry=e,e=null):(t=p.treeContext,st=se(y.nextSibling),ht=e,a1=!0,te=null,ue=!1,t!==null&&(Zt[Nt++]=ke,Zt[Nt++]=Se,Zt[Nt++]=L2,ke=t.id,Se=t.overflow,L2=e),e=sr(e,i.children),e.flags|=4096);return e}return o?(Fe(),o=i.fallback,y=e.mode,p=t.child,m=p.sibling,i=r2(p,{mode:"hidden",children:i.children}),i.subtreeFlags=p.subtreeFlags&31457280,m!==null?o=r2(m,o):(o=G2(o,y,s,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,y=t.child.memoizedState,y===null?y=tr(s):(p=y.cachePool,p!==null?(m=Z1._currentValue,p=p.parent!==m?{parent:m,pool:m}:p):p=h3(),y={baseLanes:y.baseLanes|s,cachePool:p}),o.memoizedState=y,o.childLanes=er(t,f,s),e.memoizedState=Il,i):(Je(e),s=t.child,t=s.sibling,s=r2(s,{mode:"visible",children:i.children}),s.return=e,s.sibling=null,t!==null&&(f=e.deletions,f===null?(e.deletions=[t],e.flags|=16):f.push(t)),e.child=s,e.memoizedState=null,s)}function sr(t,e){return e=nr({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function nr(t,e){return V0(t,e,0,null)}function ir(t,e,s){return O2(e,t.child,null,s),t=sr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function h0(t,e,s){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),or(t.return,e,s)}function ar(t,e,s,i,o){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:s,tailMode:o}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=i,u.tail=s,u.tailMode=o)}function d0(t,e,s){var i=e.pendingProps,o=i.revealOrder,u=i.tail;if(nt(t,e,i.children,s),i=R1.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&h0(t,s,e);else if(t.tag===19)h0(t,s,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}switch(g1(R1,i),o){case"forwards":for(s=e.child,o=null;s!==null;)t=s.alternate,t!==null&&Si(t)===null&&(o=s),s=s.sibling;s=o,s===null?(o=e.child,e.child=null):(o=s.sibling,s.sibling=null),ar(e,!1,o,s,u);break;case"backwards":for(s=null,o=e.child,e.child=null;o!==null;){if(t=o.alternate,t!==null&&Si(t)===null){e.child=o;break}t=o.sibling,o.sibling=s,s=o,o=t}ar(e,!0,s,null,u);break;case"together":ar(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ae(t,e,s){if(t!==null&&(e.dependencies=t.dependencies),o2|=e.lanes,(s&e.childLanes)===0)if(t!==null){if(qs(t,e,s,!1),(s&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,s=r2(t,t.pendingProps),e.child=s,s.return=e;t.sibling!==null;)t=t.sibling,s=s.sibling=r2(t,t.pendingProps),s.return=e;s.sibling=null}return e.child}function lr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Ti(t)))}function kc(t,e,s){switch(e.tag){case 3:In(e,e.stateNode.containerInfo),t2(e,Z1,t.memoizedState.cache),Ds();break;case 27:case 5:Ja(e);break;case 4:In(e,e.stateNode.containerInfo);break;case 10:t2(e,e.type,e.memoizedProps.value);break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Je(e),e.flags|=128,null):(s&e.child.childLanes)!==0?u0(t,e,s):(Je(e),t=Ae(t,e,s),t!==null?t.sibling:null);Je(e);break;case 19:var o=(t.flags&128)!==0;if(i=(s&e.childLanes)!==0,i||(qs(t,e,s,!1),i=(s&e.childLanes)!==0),o){if(i)return d0(t,e,s);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),g1(R1,R1.current),i)break;return null;case 22:case 23:return e.lanes=0,a0(t,e,s);case 24:t2(e,Z1,t.memoizedState.cache)}return Ae(t,e,s)}function f0(t,e,s){if(t!==null)if(t.memoizedProps!==e.pendingProps)J1=!0;else{if(!lr(t,s)&&(e.flags&128)===0)return J1=!1,kc(t,e,s);J1=(t.flags&131072)!==0}else J1=!1,a1&&(e.flags&1048576)!==0&&F7(e,_i,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var i=e.elementType,o=i._init;if(i=o(i._payload),e.type=i,typeof i=="function")_r(i)?(t=N2(i,t),e.tag=1,e=o0(null,e,i,t,s)):(e.tag=0,e=Wl(null,e,i,t,s));else{if(i!=null){if(o=i.$$typeof,o===X){e.tag=11,e=s0(null,e,i,t,s);break t}else if(o===be){e.tag=14,e=n0(null,e,i,t,s);break t}}throw e=Ge(i)||i,Error(r(306,e,""))}}return e;case 0:return Wl(t,e,e.type,e.pendingProps,s);case 1:return i=e.type,o=N2(i,e.pendingProps),o0(t,e,i,o,s);case 3:t:{if(In(e,e.stateNode.containerInfo),t===null)throw Error(r(387));var u=e.pendingProps;o=e.memoizedState,i=o.element,hr(t,e),Ys(e,u,null,s);var f=e.memoizedState;if(u=f.cache,t2(e,Z1,u),u!==o.cache&&cr(e,[Z1],s,!0),Gs(),u=f.element,o.isDehydrated)if(o={element:u,isDehydrated:!1,cache:f.cache},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){e=c0(t,e,u,s);break t}else if(u!==i){i=Rt(Error(r(424)),e),zs(i),e=c0(t,e,u,s);break t}else for(st=se(e.stateNode.containerInfo.firstChild),ht=e,a1=!0,te=null,ue=!0,s=l3(e,null,u,s),e.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Ds(),u===i){e=Ae(t,e,s);break t}nt(t,e,u,s)}e=e.child}return e;case 26:return Bs(t,e),t===null?(s=v8(e.type,null,e.pendingProps,null))?e.memoizedState=s:a1||(s=e.type,t=e.pendingProps,i=Ii(Ye.current).createElement(s),i[lt]=e,i[Ct]=t,it(i,s,t),P1(i),e.stateNode=i):e.memoizedState=v8(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ja(e),t===null&&a1&&(i=e.stateNode=f8(e.type,e.pendingProps,Ye.current),ht=e,ue=!0,st=se(i.firstChild)),i=e.pendingProps.children,t!==null||a1?nt(t,e,i,s):e.child=O2(e,null,i,s),Bs(t,e),e.child;case 5:return t===null&&a1&&((o=i=st)&&(i=tu(i,e.type,e.pendingProps,ue),i!==null?(e.stateNode=i,ht=e,st=se(i.firstChild),ue=!1,o=!0):o=!1),o||U2(e)),Ja(e),o=e.type,u=e.pendingProps,f=t!==null?t.memoizedProps:null,i=u.children,Xr(o,u)?i=null:f!==null&&Xr(o,f)&&(e.flags|=32),e.memoizedState!==null&&(o=Ul(t,e,Cc,null,null,s),rn._currentValue=o),Bs(t,e),nt(t,e,i,s),e.child;case 6:return t===null&&a1&&((t=s=st)&&(s=eu(s,e.pendingProps,ue),s!==null?(e.stateNode=s,ht=e,st=null,t=!0):t=!1),t||U2(e)),null;case 13:return u0(t,e,s);case 4:return In(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=O2(e,null,i,s):nt(t,e,i,s),e.child;case 11:return s0(t,e,e.type,e.pendingProps,s);case 7:return nt(t,e,e.pendingProps,s),e.child;case 8:return nt(t,e,e.pendingProps.children,s),e.child;case 12:return nt(t,e,e.pendingProps.children,s),e.child;case 10:return i=e.pendingProps,t2(e,e.type,i.value),nt(t,e,i.children,s),e.child;case 9:return o=e.type._context,i=e.pendingProps.children,q2(e),o=rt(o),i=i(o),e.flags|=1,nt(t,e,i,s),e.child;case 14:return n0(t,e,e.type,e.pendingProps,s);case 15:return i0(t,e,e.type,e.pendingProps,s);case 19:return d0(t,e,s);case 22:return a0(t,e,s);case 24:return q2(e),i=rt(Z1),t===null?(o=Ll(),o===null&&(o=p1,u=Dl(),o.pooledCache=u,u.refCount++,u!==null&&(o.pooledCacheLanes|=s),o=u),e.memoizedState={parent:i,cache:o},ur(e),t2(e,Z1,o)):((t.lanes&s)!==0&&(hr(t,e),Ys(e,null,null,s),Gs()),o=t.memoizedState,u=e.memoizedState,o.parent!==i?(o={parent:i,cache:i},e.memoizedState=o,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=o),t2(e,Z1,i)):(i=u.cache,t2(e,Z1,i),i!==o.cache&&cr(e,[Z1],s,!0))),nt(t,e,e.pendingProps.children,s),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}var rr=c1(null),B2=null,Me=null;function t2(t,e,s){g1(rr,e._currentValue),e._currentValue=s}function De(t){t._currentValue=rr.current,z1(rr)}function or(t,e,s){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===s)break;t=t.return}}function cr(t,e,s,i){var o=t.child;for(o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){var f=o.child;u=u.firstContext;t:for(;u!==null;){var y=u;u=o;for(var p=0;p<e.length;p++)if(y.context===e[p]){u.lanes|=s,y=u.alternate,y!==null&&(y.lanes|=s),or(u.return,s,t),i||(f=null);break t}u=y.next}}else if(o.tag===18){if(f=o.return,f===null)throw Error(r(341));f.lanes|=s,u=f.alternate,u!==null&&(u.lanes|=s),or(f,s,t),f=null}else f=o.child;if(f!==null)f.return=o;else for(f=o;f!==null;){if(f===t){f=null;break}if(o=f.sibling,o!==null){o.return=f.return,f=o;break}f=f.return}o=f}}function qs(t,e,s,i){t=null;for(var o=e,u=!1;o!==null;){if(!u){if((o.flags&524288)!==0)u=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var f=o.alternate;if(f===null)throw Error(r(387));if(f=f.memoizedProps,f!==null){var y=o.type;St(o.pendingProps.value,f.value)||(t!==null?t.push(y):t=[y])}}else if(o===Wn.current){if(f=o.alternate,f===null)throw Error(r(387));f.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(t!==null?t.push(rn):t=[rn])}o=o.return}t!==null&&cr(e,t,s,i),e.flags|=262144}function Ti(t){for(t=t.firstContext;t!==null;){if(!St(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function q2(t){B2=t,Me=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function rt(t){return y0(B2,t)}function Ri(t,e){return B2===null&&q2(t),y0(t,e)}function y0(t,e){var s=e._currentValue;if(e={context:e,memoizedValue:s,next:null},Me===null){if(t===null)throw Error(r(308));Me=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Me=Me.next=e;return s}var e2=!1;function ur(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function s2(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function n2(t,e,s){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(_1&2)!==0){var o=i.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),i.pending=e,e=gi(t),P7(t,null,s),e}return Ci(t,i,e,s),gi(t)}function js(t,e,s){if(e=e.updateQueue,e!==null&&(e=e.shared,(s&4194176)!==0)){var i=e.lanes;i&=t.pendingLanes,s|=i,e.lanes=s,n7(t,s)}}function dr(t,e){var s=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,s===i)){var o=null,u=null;if(s=s.firstBaseUpdate,s!==null){do{var f={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};u===null?o=u=f:u=u.next=f,s=s.next}while(s!==null);u===null?o=u=e:u=u.next=e}else o=u=e;s={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=e:t.next=e,s.lastBaseUpdate=e}var fr=!1;function Gs(){if(fr){var t=D5;if(t!==null)throw t}}function Ys(t,e,s,i){fr=!1;var o=t.updateQueue;e2=!1;var u=o.firstBaseUpdate,f=o.lastBaseUpdate,y=o.shared.pending;if(y!==null){o.shared.pending=null;var p=y,m=p.next;p.next=null,f===null?u=m:f.next=m,f=p;var A=t.alternate;A!==null&&(A=A.updateQueue,y=A.lastBaseUpdate,y!==f&&(y===null?A.firstBaseUpdate=m:y.next=m,A.lastBaseUpdate=p))}if(u!==null){var L=o.baseState;f=0,A=m=p=null,y=u;do{var S=y.lane&-536870913,$=S!==y.lane;if($?(n1&S)===S:(i&S)===S){S!==0&&S===M5&&(fr=!0),A!==null&&(A=A.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});t:{var Z=t,Q=y;S=e;var k1=s;switch(Q.tag){case 1:if(Z=Q.payload,typeof Z=="function"){L=Z.call(k1,L,S);break t}L=Z;break t;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=Q.payload,S=typeof Z=="function"?Z.call(k1,L,S):Z,S==null)break t;L=o1({},L,S);break t;case 2:e2=!0}}S=y.callback,S!==null&&(t.flags|=64,$&&(t.flags|=8192),$=o.callbacks,$===null?o.callbacks=[S]:$.push(S))}else $={lane:S,tag:y.tag,payload:y.payload,callback:y.callback,next:null},A===null?(m=A=$,p=L):A=A.next=$,f|=S;if(y=y.next,y===null){if(y=o.shared.pending,y===null)break;$=y,y=$.next,$.next=null,o.lastBaseUpdate=$,o.shared.pending=null}}while(!0);A===null&&(p=L),o.baseState=p,o.firstBaseUpdate=m,o.lastBaseUpdate=A,u===null&&(o.shared.lanes=0),o2|=f,t.lanes=f,t.memoizedState=L}}function p0(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function v0(t,e){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)p0(s[t],e)}function Xs(t,e){try{var s=e.updateQueue,i=s!==null?s.lastEffect:null;if(i!==null){var o=i.next;s=o;do{if((s.tag&t)===t){i=void 0;var u=s.create,f=s.inst;i=u(),f.destroy=i}s=s.next}while(s!==o)}}catch(y){f1(e,e.return,y)}}function i2(t,e,s){try{var i=e.updateQueue,o=i!==null?i.lastEffect:null;if(o!==null){var u=o.next;i=u;do{if((i.tag&t)===t){var f=i.inst,y=f.destroy;if(y!==void 0){f.destroy=void 0,o=e;var p=s;try{y()}catch(m){f1(o,p,m)}}}i=i.next}while(i!==u)}}catch(m){f1(e,e.return,m)}}function C0(t){var e=t.updateQueue;if(e!==null){var s=t.stateNode;try{v0(e,s)}catch(i){f1(t,t.return,i)}}}function g0(t,e,s){s.props=N2(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(i){f1(t,e,i)}}function j2(t,e){try{var s=t.ref;if(s!==null){var i=t.stateNode;switch(t.tag){case 26:case 27:case 5:var o=i;break;default:o=i}typeof s=="function"?t.refCleanup=s(o):s.current=o}}catch(u){f1(t,e,u)}}function Et(t,e){var s=t.ref,i=t.refCleanup;if(s!==null)if(typeof i=="function")try{i()}catch(o){f1(t,e,o)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(o){f1(t,e,o)}else s.current=null}function b0(t){var e=t.type,s=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":s.autoFocus&&i.focus();break t;case"img":s.src?i.src=s.src:s.srcSet&&(i.srcset=s.srcSet)}}catch(o){f1(t,t.return,o)}}function _0(t,e,s){try{var i=t.stateNode;Pc(i,t.type,s,e),i[Ct]=e}catch(o){f1(t,t.return,o)}}function m0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function yr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||m0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pr(t,e,s){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?s.nodeType===8?s.parentNode.insertBefore(t,e):s.insertBefore(t,e):(s.nodeType===8?(e=s.parentNode,e.insertBefore(t,s)):(e=s,e.appendChild(t)),s=s._reactRootContainer,s!=null||e.onclick!==null||(e.onclick=Wi));else if(i!==4&&i!==27&&(t=t.child,t!==null))for(pr(t,e,s),t=t.sibling;t!==null;)pr(t,e,s),t=t.sibling}function Zi(t,e,s){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?s.insertBefore(t,e):s.appendChild(t);else if(i!==4&&i!==27&&(t=t.child,t!==null))for(Zi(t,e,s),t=t.sibling;t!==null;)Zi(t,e,s),t=t.sibling}var ze=!1,x1=!1,vr=!1,x0=typeof WeakSet=="function"?WeakSet:Set,F1=null,w0=!1;function Sc(t,e){if(t=t.containerInfo,Gr=aa,t=N7(t),gl(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var i=s.getSelection&&s.getSelection();if(i&&i.rangeCount!==0){s=i.anchorNode;var o=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{s.nodeType,u.nodeType}catch{s=null;break t}var f=0,y=-1,p=-1,m=0,A=0,L=t,S=null;e:for(;;){for(var $;L!==s||o!==0&&L.nodeType!==3||(y=f+o),L!==u||i!==0&&L.nodeType!==3||(p=f+i),L.nodeType===3&&(f+=L.nodeValue.length),($=L.firstChild)!==null;)S=L,L=$;for(;;){if(L===t)break e;if(S===s&&++m===o&&(y=f),S===u&&++A===i&&(p=f),($=L.nextSibling)!==null)break;L=S,S=L.parentNode}L=$}s=y===-1||p===-1?null:{start:y,end:p}}else s=null}s=s||{start:0,end:0}}else s=null;for(Yr={focusedElem:t,selectionRange:s},aa=!1,F1=e;F1!==null;)if(e=F1,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,F1=t;else for(;F1!==null;){switch(e=F1,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,s=e,o=u.memoizedProps,u=u.memoizedState,i=s.stateNode;try{var Z=N2(s.type,o,s.elementType===s.type);t=i.getSnapshotBeforeUpdate(Z,u),i.__reactInternalSnapshotBeforeUpdate=t}catch(Q){f1(s,s.return,Q)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,s=t.nodeType,s===9)Pr(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Pr(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,F1=t;break}F1=e.return}return Z=w0,w0=!1,Z}function k0(t,e,s){var i=s.flags;switch(s.tag){case 0:case 11:case 15:He(t,s),i&4&&Xs(5,s);break;case 1:if(He(t,s),i&4)if(t=s.stateNode,e===null)try{t.componentDidMount()}catch(y){f1(s,s.return,y)}else{var o=N2(s.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(o,e,t.__reactInternalSnapshotBeforeUpdate)}catch(y){f1(s,s.return,y)}}i&64&&C0(s),i&512&&j2(s,s.return);break;case 3:if(He(t,s),i&64&&(i=s.updateQueue,i!==null)){if(t=null,s.child!==null)switch(s.child.tag){case 27:case 5:t=s.child.stateNode;break;case 1:t=s.child.stateNode}try{v0(i,t)}catch(y){f1(s,s.return,y)}}break;case 26:He(t,s),i&512&&j2(s,s.return);break;case 27:case 5:He(t,s),e===null&&i&4&&b0(s),i&512&&j2(s,s.return);break;case 12:He(t,s);break;case 13:He(t,s),i&4&&$0(t,s);break;case 22:if(o=s.memoizedState!==null||ze,!o){e=e!==null&&e.memoizedState!==null||x1;var u=ze,f=x1;ze=o,(x1=e)&&!f?a2(t,s,(s.subtreeFlags&8772)!==0):He(t,s),ze=u,x1=f}i&512&&(s.memoizedProps.mode==="manual"?j2(s,s.return):Et(s,s.return));break;default:He(t,s)}}function S0(t){var e=t.alternate;e!==null&&(t.alternate=null,S0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&sl(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var U1=null,$t=!1;function Le(t,e,s){for(s=s.child;s!==null;)E0(t,e,s),s=s.sibling}function E0(t,e,s){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(ps,s)}catch{}switch(s.tag){case 26:x1||Et(s,e),Le(t,e,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:x1||Et(s,e);var i=U1,o=$t;for(U1=s.stateNode,Le(t,e,s),s=s.stateNode,e=s.attributes;e.length;)s.removeAttributeNode(e[0]);sl(s),U1=i,$t=o;break;case 5:x1||Et(s,e);case 6:o=U1;var u=$t;if(U1=null,Le(t,e,s),U1=o,$t=u,U1!==null)if($t)try{t=U1,i=s.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)}catch(f){f1(s,e,f)}else try{U1.removeChild(s.stateNode)}catch(f){f1(s,e,f)}break;case 18:U1!==null&&($t?(e=U1,s=s.stateNode,e.nodeType===8?Kr(e.parentNode,s):e.nodeType===1&&Kr(e,s),hn(e)):Kr(U1,s.stateNode));break;case 4:i=U1,o=$t,U1=s.stateNode.containerInfo,$t=!0,Le(t,e,s),U1=i,$t=o;break;case 0:case 11:case 14:case 15:x1||i2(2,s,e),x1||i2(4,s,e),Le(t,e,s);break;case 1:x1||(Et(s,e),i=s.stateNode,typeof i.componentWillUnmount=="function"&&g0(s,e,i)),Le(t,e,s);break;case 21:Le(t,e,s);break;case 22:x1||Et(s,e),x1=(i=x1)||s.memoizedState!==null,Le(t,e,s),x1=i;break;default:Le(t,e,s)}}function $0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{hn(t)}catch(s){f1(e,e.return,s)}}function Ec(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new x0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new x0),e;default:throw Error(r(435,t.tag))}}function Cr(t,e){var s=Ec(t);e.forEach(function(i){var o=Zc.bind(null,t,i);s.has(i)||(s.add(i),i.then(o,o))})}function qt(t,e){var s=e.deletions;if(s!==null)for(var i=0;i<s.length;i++){var o=s[i],u=t,f=e,y=f;t:for(;y!==null;){switch(y.tag){case 27:case 5:U1=y.stateNode,$t=!1;break t;case 3:U1=y.stateNode.containerInfo,$t=!0;break t;case 4:U1=y.stateNode.containerInfo,$t=!0;break t}y=y.return}if(U1===null)throw Error(r(160));E0(u,f,o),U1=null,$t=!1,u=o.alternate,u!==null&&(u.return=null),o.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)A0(e,t),e=e.sibling}var ee=null;function A0(t,e){var s=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:qt(e,t),jt(t),i&4&&(i2(3,t,t.return),Xs(3,t),i2(5,t,t.return));break;case 1:qt(e,t),jt(t),i&512&&(x1||s===null||Et(s,s.return)),i&64&&ze&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?i:s.concat(i))));break;case 26:var o=ee;if(qt(e,t),jt(t),i&512&&(x1||s===null||Et(s,s.return)),i&4){var u=s!==null?s.memoizedState:null;if(i=t.memoizedState,s===null)if(i===null)if(t.stateNode===null){t:{i=t.type,s=t.memoizedProps,o=o.ownerDocument||o;e:switch(i){case"title":u=o.getElementsByTagName("title")[0],(!u||u[gs]||u[lt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=o.createElement(i),o.head.insertBefore(u,o.querySelector("head > title"))),it(u,i,s),u[lt]=t,P1(u),i=u;break t;case"link":var f=b8("link","href",o).get(i+(s.href||""));if(f){for(var y=0;y<f.length;y++)if(u=f[y],u.getAttribute("href")===(s.href==null?null:s.href)&&u.getAttribute("rel")===(s.rel==null?null:s.rel)&&u.getAttribute("title")===(s.title==null?null:s.title)&&u.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){f.splice(y,1);break e}}u=o.createElement(i),it(u,i,s),o.head.appendChild(u);break;case"meta":if(f=b8("meta","content",o).get(i+(s.content||""))){for(y=0;y<f.length;y++)if(u=f[y],u.getAttribute("content")===(s.content==null?null:""+s.content)&&u.getAttribute("name")===(s.name==null?null:s.name)&&u.getAttribute("property")===(s.property==null?null:s.property)&&u.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&u.getAttribute("charset")===(s.charSet==null?null:s.charSet)){f.splice(y,1);break e}}u=o.createElement(i),it(u,i,s),o.head.appendChild(u);break;default:throw Error(r(468,i))}u[lt]=t,P1(u),i=u}t.stateNode=i}else _8(o,t.type,t.stateNode);else t.stateNode=g8(o,i,t.memoizedProps);else u!==i?(u===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):u.count--,i===null?_8(o,t.type,t.stateNode):g8(o,i,t.memoizedProps)):i===null&&t.stateNode!==null&&_0(t,t.memoizedProps,s.memoizedProps)}break;case 27:if(i&4&&t.alternate===null){o=t.stateNode,u=t.memoizedProps;try{for(var p=o.firstChild;p;){var m=p.nextSibling,A=p.nodeName;p[gs]||A==="HEAD"||A==="BODY"||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&p.rel.toLowerCase()==="stylesheet"||o.removeChild(p),p=m}for(var L=t.type,S=o.attributes;S.length;)o.removeAttributeNode(S[0]);it(o,L,u),o[lt]=t,o[Ct]=u}catch(Z){f1(t,t.return,Z)}}case 5:if(qt(e,t),jt(t),i&512&&(x1||s===null||Et(s,s.return)),t.flags&32){o=t.stateNode;try{C5(o,"")}catch(Z){f1(t,t.return,Z)}}i&4&&t.stateNode!=null&&(o=t.memoizedProps,_0(t,o,s!==null?s.memoizedProps:o)),i&1024&&(vr=!0);break;case 6:if(qt(e,t),jt(t),i&4){if(t.stateNode===null)throw Error(r(162));i=t.memoizedProps,s=t.stateNode;try{s.nodeValue=i}catch(Z){f1(t,t.return,Z)}}break;case 3:if(sa=null,o=ee,ee=ta(e.containerInfo),qt(e,t),ee=o,jt(t),i&4&&s!==null&&s.memoizedState.isDehydrated)try{hn(e.containerInfo)}catch(Z){f1(t,t.return,Z)}vr&&(vr=!1,M0(t));break;case 4:i=ee,ee=ta(t.stateNode.containerInfo),qt(e,t),jt(t),ee=i;break;case 12:qt(e,t),jt(t);break;case 13:qt(e,t),jt(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Er=ce()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Cr(t,i)));break;case 22:if(i&512&&(x1||s===null||Et(s,s.return)),p=t.memoizedState!==null,m=s!==null&&s.memoizedState!==null,A=ze,L=x1,ze=A||p,x1=L||m,qt(e,t),x1=L,ze=A,jt(t),e=t.stateNode,e._current=t,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,i&8192&&(e._visibility=p?e._visibility&-2:e._visibility|1,p&&(e=ze||x1,s===null||m||e||U5(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(s=null,e=t;;){if(e.tag===5||e.tag===26||e.tag===27){if(s===null){m=s=e;try{if(o=m.stateNode,p)u=o.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{f=m.stateNode,y=m.memoizedProps.style;var $=y!=null&&y.hasOwnProperty("display")?y.display:null;f.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Z){f1(m,m.return,Z)}}}else if(e.tag===6){if(s===null){m=e;try{m.stateNode.nodeValue=p?"":m.memoizedProps}catch(Z){f1(m,m.return,Z)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;s===e&&(s=null),e=e.return}s===e&&(s=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(s=i.retryQueue,s!==null&&(i.retryQueue=null,Cr(t,s))));break;case 19:qt(e,t),jt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Cr(t,i)));break;case 21:break;default:qt(e,t),jt(t)}}function jt(t){var e=t.flags;if(e&2){try{if(t.tag!==27){t:{for(var s=t.return;s!==null;){if(m0(s)){var i=s;break t}s=s.return}throw Error(r(160))}switch(i.tag){case 27:var o=i.stateNode,u=yr(t);Zi(t,u,o);break;case 5:var f=i.stateNode;i.flags&32&&(C5(f,""),i.flags&=-33);var y=yr(t);Zi(t,y,f);break;case 3:case 4:var p=i.stateNode.containerInfo,m=yr(t);pr(t,m,p);break;default:throw Error(r(161))}}}catch(A){f1(t,t.return,A)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function M0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;M0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function He(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)k0(t,e.alternate,e),e=e.sibling}function U5(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:i2(4,e,e.return),U5(e);break;case 1:Et(e,e.return);var s=e.stateNode;typeof s.componentWillUnmount=="function"&&g0(e,e.return,s),U5(e);break;case 26:case 27:case 5:Et(e,e.return),U5(e);break;case 22:Et(e,e.return),e.memoizedState===null&&U5(e);break;default:U5(e)}t=t.sibling}}function a2(t,e,s){for(s=s&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,o=t,u=e,f=u.flags;switch(u.tag){case 0:case 11:case 15:a2(o,u,s),Xs(4,u);break;case 1:if(a2(o,u,s),i=u,o=i.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(m){f1(i,i.return,m)}if(i=u,o=i.updateQueue,o!==null){var y=i.stateNode;try{var p=o.shared.hiddenCallbacks;if(p!==null)for(o.shared.hiddenCallbacks=null,o=0;o<p.length;o++)p0(p[o],y)}catch(m){f1(i,i.return,m)}}s&&f&64&&C0(u),j2(u,u.return);break;case 26:case 27:case 5:a2(o,u,s),s&&i===null&&f&4&&b0(u),j2(u,u.return);break;case 12:a2(o,u,s);break;case 13:a2(o,u,s),s&&f&4&&$0(o,u);break;case 22:u.memoizedState===null&&a2(o,u,s),j2(u,u.return);break;default:a2(o,u,s)}e=e.sibling}}function gr(t,e){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Vs(s))}function br(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Vs(t))}function l2(t,e,s,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)D0(t,e,s,i),e=e.sibling}function D0(t,e,s,i){var o=e.flags;switch(e.tag){case 0:case 11:case 15:l2(t,e,s,i),o&2048&&Xs(9,e);break;case 3:l2(t,e,s,i),o&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Vs(t)));break;case 12:if(o&2048){l2(t,e,s,i),t=e.stateNode;try{var u=e.memoizedProps,f=u.id,y=u.onPostCommit;typeof y=="function"&&y(f,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(p){f1(e,e.return,p)}}else l2(t,e,s,i);break;case 23:break;case 22:u=e.stateNode,e.memoizedState!==null?u._visibility&4?l2(t,e,s,i):Qs(t,e):u._visibility&4?l2(t,e,s,i):(u._visibility|=4,O5(t,e,s,i,(e.subtreeFlags&10256)!==0)),o&2048&&gr(e.alternate,e);break;case 24:l2(t,e,s,i),o&2048&&br(e.alternate,e);break;default:l2(t,e,s,i)}}function O5(t,e,s,i,o){for(o=o&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,f=e,y=s,p=i,m=f.flags;switch(f.tag){case 0:case 11:case 15:O5(u,f,y,p,o),Xs(8,f);break;case 23:break;case 22:var A=f.stateNode;f.memoizedState!==null?A._visibility&4?O5(u,f,y,p,o):Qs(u,f):(A._visibility|=4,O5(u,f,y,p,o)),o&&m&2048&&gr(f.alternate,f);break;case 24:O5(u,f,y,p,o),o&&m&2048&&br(f.alternate,f);break;default:O5(u,f,y,p,o)}e=e.sibling}}function Qs(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var s=t,i=e,o=i.flags;switch(i.tag){case 22:Qs(s,i),o&2048&&gr(i.alternate,i);break;case 24:Qs(s,i),o&2048&&br(i.alternate,i);break;default:Qs(s,i)}e=e.sibling}}var Ks=8192;function V5(t){if(t.subtreeFlags&Ks)for(t=t.child;t!==null;)z0(t),t=t.sibling}function z0(t){switch(t.tag){case 26:V5(t),t.flags&Ks&&t.memoizedState!==null&&yu(ee,t.memoizedState,t.memoizedProps);break;case 5:V5(t);break;case 3:case 4:var e=ee;ee=ta(t.stateNode.containerInfo),V5(t),ee=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Ks,Ks=16777216,V5(t),Ks=e):V5(t));break;default:V5(t)}}function L0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ps(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var s=0;s<e.length;s++){var i=e[s];F1=i,U0(i,t)}L0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)H0(t),t=t.sibling}function H0(t){switch(t.tag){case 0:case 11:case 15:Ps(t),t.flags&2048&&i2(9,t,t.return);break;case 3:Ps(t);break;case 12:Ps(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&4&&(t.return===null||t.return.tag!==13)?(e._visibility&=-5,Ni(t)):Ps(t);break;default:Ps(t)}}function Ni(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var s=0;s<e.length;s++){var i=e[s];F1=i,U0(i,t)}L0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:i2(8,e,e.return),Ni(e);break;case 22:s=e.stateNode,s._visibility&4&&(s._visibility&=-5,Ni(e));break;default:Ni(e)}t=t.sibling}}function U0(t,e){for(;F1!==null;){var s=F1;switch(s.tag){case 0:case 11:case 15:i2(8,s,e);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var i=s.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Vs(s.memoizedState.cache)}if(i=s.child,i!==null)i.return=s,F1=i;else t:for(s=t;F1!==null;){i=F1;var o=i.sibling,u=i.return;if(S0(i),i===s){F1=null;break t}if(o!==null){o.return=u,F1=o;break t}F1=u}}}function $c(t,e,s,i){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(t,e,s,i){return new $c(t,e,s,i)}function _r(t){return t=t.prototype,!(!t||!t.isReactComponent)}function r2(t,e){var s=t.alternate;return s===null?(s=Gt(t.tag,e,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=e,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&31457280,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,e=t.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function O0(t,e){t.flags&=31457282;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,e=s.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Bi(t,e,s,i,o,u){var f=0;if(i=t,typeof t=="function")_r(t)&&(f=1);else if(typeof t=="string")f=du(t,s,oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case C:return G2(s.children,o,u,e);case w:f=8,o|=24;break;case M:return t=Gt(12,s,e,o|2),t.elementType=M,t.lanes=u,t;case yt:return t=Gt(13,s,e,o),t.elementType=yt,t.lanes=u,t;case xt:return t=Gt(19,s,e,o),t.elementType=xt,t.lanes=u,t;case Wt:return V0(s,o,u,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:case U:f=10;break t;case V:f=9;break t;case X:f=11;break t;case be:f=14;break t;case ct:f=16,i=null;break t}f=29,s=Error(r(130,t===null?"null":typeof t,"")),i=null}return e=Gt(f,s,e,o),e.elementType=t,e.type=i,e.lanes=u,e}function G2(t,e,s,i){return t=Gt(7,t,i,e),t.lanes=s,t}function V0(t,e,s,i){t=Gt(22,t,i,e),t.elementType=Wt,t.lanes=s;var o={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var u=o._current;if(u===null)throw Error(r(456));if((o._pendingVisibility&2)===0){var f=Pe(u,2);f!==null&&(o._pendingVisibility|=2,dt(f,u,2))}},attach:function(){var u=o._current;if(u===null)throw Error(r(456));if((o._pendingVisibility&2)!==0){var f=Pe(u,2);f!==null&&(o._pendingVisibility&=-3,dt(f,u,2))}}};return t.stateNode=o,t}function mr(t,e,s){return t=Gt(6,t,null,e),t.lanes=s,t}function xr(t,e,s){return e=Gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=s,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ue(t){t.flags|=4}function T0(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!m8(e)){if(e=Bt.current,e!==null&&((n1&4194176)===n1?he!==null:(n1&62914560)!==n1&&(n1&536870912)===0||e!==he))throw Hs=$l,t3;t.flags|=8192}}function qi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?e7():536870912,t.lanes|=e,R5|=e)}function Js(t,e){if(!a1)switch(t.tailMode){case"hidden":e=t.tail;for(var s=null;e!==null;)e.alternate!==null&&(s=e),e=e.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var i=null;s!==null;)s.alternate!==null&&(i=s),s=s.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function b1(t){var e=t.alternate!==null&&t.alternate.child===t.child,s=0,i=0;if(e)for(var o=t.child;o!==null;)s|=o.lanes|o.childLanes,i|=o.subtreeFlags&31457280,i|=o.flags&31457280,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)s|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=i,t.childLanes=s,e}function Ac(t,e,s){var i=e.pendingProps;switch(Sl(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return b1(e),null;case 1:return b1(e),null;case 3:return s=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),De(Z1),h5(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Ms(e)?Ue(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,te!==null&&(Dr(te),te=null))),b1(e),null;case 26:return s=e.memoizedState,t===null?(Ue(e),s!==null?(b1(e),T0(e,s)):(b1(e),e.flags&=-16777217)):s?s!==t.memoizedState?(Ue(e),b1(e),T0(e,s)):(b1(e),e.flags&=-16777217):(t.memoizedProps!==i&&Ue(e),b1(e),e.flags&=-16777217),null;case 27:ti(e),s=Ye.current;var o=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ue(e);else{if(!i){if(e.stateNode===null)throw Error(r(166));return b1(e),null}t=oe.current,Ms(e)?W7(e):(t=f8(o,i,s),e.stateNode=t,Ue(e))}return b1(e),null;case 5:if(ti(e),s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ue(e);else{if(!i){if(e.stateNode===null)throw Error(r(166));return b1(e),null}if(t=oe.current,Ms(e))W7(e);else{switch(o=Ii(Ye.current),t){case 1:t=o.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=o.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=o.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=o.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?t.multiple=!0:i.size&&(t.size=i.size);break;default:t=typeof i.is=="string"?o.createElement(s,{is:i.is}):o.createElement(s)}}t[lt]=e,t[Ct]=i;t:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break t;for(;o.sibling===null;){if(o.return===null||o.return===e)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=t;t:switch(it(t,s,i),s){case"button":case"input":case"select":case"textarea":t=!!i.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Ue(e)}}return b1(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Ue(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(r(166));if(t=Ye.current,Ms(e)){if(t=e.stateNode,s=e.memoizedProps,i=null,o=ht,o!==null)switch(o.tag){case 27:case 5:i=o.memoizedProps}t[lt]=e,t=!!(t.nodeValue===s||i!==null&&i.suppressHydrationWarning===!0||r8(t.nodeValue,s)),t||U2(e)}else t=Ii(t).createTextNode(i),t[lt]=e,e.stateNode=t}return b1(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(o=Ms(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(r(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(r(317));o[lt]=e}else Ds(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;b1(e),o=!1}else te!==null&&(Dr(te),te=null),o=!0;if(!o)return e.flags&256?(Ee(e),e):(Ee(e),null)}if(Ee(e),(e.flags&128)!==0)return e.lanes=s,e;if(s=i!==null,t=t!==null&&t.memoizedState!==null,s){i=e.child,o=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(o=i.alternate.memoizedState.cachePool.pool);var u=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==o&&(i.flags|=2048)}return s!==t&&s&&(e.child.flags|=8192),qi(e,e.updateQueue),b1(e),null;case 4:return h5(),t===null&&Br(e.stateNode.containerInfo),b1(e),null;case 10:return De(e.type),b1(e),null;case 19:if(z1(R1),o=e.memoizedState,o===null)return b1(e),null;if(i=(e.flags&128)!==0,u=o.rendering,u===null)if(i)Js(o,!1);else{if(w1!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Si(t),u!==null){for(e.flags|=128,Js(o,!1),t=u.updateQueue,e.updateQueue=t,qi(e,t),e.subtreeFlags=0,t=s,s=e.child;s!==null;)O0(s,t),s=s.sibling;return g1(R1,R1.current&1|2),e.child}t=t.sibling}o.tail!==null&&ce()>ji&&(e.flags|=128,i=!0,Js(o,!1),e.lanes=4194304)}else{if(!i)if(t=Si(u),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,qi(e,t),Js(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!a1)return b1(e),null}else 2*ce()-o.renderingStartTime>ji&&s!==536870912&&(e.flags|=128,i=!0,Js(o,!1),e.lanes=4194304);o.isBackwards?(u.sibling=e.child,e.child=u):(t=o.last,t!==null?t.sibling=u:e.child=u,o.last=u)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ce(),e.sibling=null,t=R1.current,g1(R1,i?t&1|2:t&1),e):(b1(e),null);case 22:case 23:return Ee(e),Ml(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(s&536870912)!==0&&(e.flags&128)===0&&(b1(e),e.subtreeFlags&6&&(e.flags|=8192)):b1(e),s=e.updateQueue,s!==null&&qi(e,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==s&&(e.flags|=2048),t!==null&&z1(V2),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),e.memoizedState.cache!==s&&(e.flags|=2048),De(Z1),b1(e),null;case 25:return null}throw Error(r(156,e.tag))}function Mc(t,e){switch(Sl(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return De(Z1),h5(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ti(e),null;case 13:if(Ee(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));Ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return z1(R1),null;case 4:return h5(),null;case 10:return De(e.type),null;case 22:case 23:return Ee(e),Ml(),t!==null&&z1(V2),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return De(Z1),null;case 25:return null;default:return null}}function R0(t,e){switch(Sl(e),e.tag){case 3:De(Z1),h5();break;case 26:case 27:case 5:ti(e);break;case 4:h5();break;case 13:Ee(e);break;case 19:z1(R1);break;case 10:De(e.type);break;case 22:case 23:Ee(e),Ml(),t!==null&&z1(V2);break;case 24:De(Z1)}}var Dc={getCacheForType:function(t){var e=rt(Z1),s=e.data.get(t);return s===void 0&&(s=t(),e.data.set(t,s)),s}},zc=typeof WeakMap=="function"?WeakMap:Map,_1=0,p1=null,t1=null,n1=0,v1=0,At=null,Oe=!1,T5=!1,wr=!1,Ve=0,w1=0,o2=0,Y2=0,kr=0,Yt=0,R5=0,Fs=null,fe=null,Sr=!1,Er=0,ji=1/0,Gi=null,c2=null,Yi=!1,X2=null,Ws=0,$r=0,Ar=null,Is=0,Mr=null;function Mt(){if((_1&2)!==0&&n1!==0)return n1&-n1;if(j.T!==null){var t=M5;return t!==0?t:Tr()}return a7()}function Z0(){Yt===0&&(Yt=(n1&536870912)===0||a1?t7():536870912);var t=Bt.current;return t!==null&&(t.flags|=32),Yt}function dt(t,e,s){(t===p1&&v1===2||t.cancelPendingCommit!==null)&&(Z5(t,0),Te(t,n1,Yt,!1)),Cs(t,s),((_1&2)===0||t!==p1)&&(t===p1&&((_1&2)===0&&(Y2|=s),w1===4&&Te(t,n1,Yt,!1)),ye(t))}function N0(t,e,s){if((_1&6)!==0)throw Error(r(327));var i=!s&&(e&60)===0&&(e&t.expiredLanes)===0||vs(t,e),o=i?Uc(t,e):Hr(t,e,!0),u=i;do{if(o===0){T5&&!i&&Te(t,e,0,!1);break}else if(o===6)Te(t,e,0,!Oe);else{if(s=t.current.alternate,u&&!Lc(s)){o=Hr(t,e,!1),u=!1;continue}if(o===2){if(u=e,t.errorRecoveryDisabledLanes&u)var f=0;else f=t.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){e=f;t:{var y=t;o=Fs;var p=y.current.memoizedState.isDehydrated;if(p&&(Z5(y,f).flags|=256),f=Hr(y,f,!1),f!==2){if(wr&&!p){y.errorRecoveryDisabledLanes|=u,Y2|=u,o=4;break t}u=fe,fe=o,u!==null&&Dr(u)}o=f}if(u=!1,o!==2)continue}}if(o===1){Z5(t,0),Te(t,e,0,!0);break}t:{switch(i=t,o){case 0:case 1:throw Error(r(345));case 4:if((e&4194176)===e){Te(i,e,Yt,!Oe);break t}break;case 2:fe=null;break;case 3:case 5:break;default:throw Error(r(329))}if(i.finishedWork=s,i.finishedLanes=e,(e&62914560)===e&&(u=Er+300-ce(),10<u)){if(Te(i,e,Yt,!Oe),ii(i,0)!==0)break t;i.timeoutHandle=u8(B0.bind(null,i,s,fe,Gi,Sr,e,Yt,Y2,R5,Oe,2,-0,0),u);break t}B0(i,s,fe,Gi,Sr,e,Yt,Y2,R5,Oe,0,-0,0)}}break}while(!0);ye(t)}function Dr(t){fe===null?fe=t:fe.push.apply(fe,t)}function B0(t,e,s,i,o,u,f,y,p,m,A,L,S){var $=e.subtreeFlags;if(($&8192||($&16785408)===16785408)&&(ln={stylesheets:null,count:0,unsuspend:fu},z0(e),e=pu(),e!==null)){t.cancelPendingCommit=e(K0.bind(null,t,s,i,o,f,y,p,1,L,S)),Te(t,u,f,!m);return}K0(t,s,i,o,f,y,p,A,L,S)}function Lc(t){for(var e=t;;){var s=e.tag;if((s===0||s===11||s===15)&&e.flags&16384&&(s=e.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var i=0;i<s.length;i++){var o=s[i],u=o.getSnapshot;o=o.value;try{if(!St(u(),o))return!1}catch{return!1}}if(s=e.child,e.subtreeFlags&16384&&s!==null)s.return=e,e=s;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Te(t,e,s,i){e&=~kr,e&=~Y2,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var o=e;0<o;){var u=31-kt(o),f=1<<u;i[u]=-1,o&=~f}s!==0&&s7(t,s,e)}function Xi(){return(_1&6)===0?(tn(0),!1):!0}function zr(){if(t1!==null){if(v1===0)var t=t1.return;else t=t1,Me=B2=null,Tl(t),$5=null,Us=0,t=t1;for(;t!==null;)R0(t.alternate,t),t=t.return;t1=null}}function Z5(t,e){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Fc(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),zr(),p1=t,t1=s=r2(t.current,null),n1=e,v1=0,At=null,Oe=!1,T5=vs(t,e),wr=!1,R5=Yt=kr=Y2=o2=w1=0,fe=Fs=null,Sr=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var o=31-kt(i),u=1<<o;e|=t[o],i&=~u}return Ve=e,vi(),s}function q0(t,e){W=null,j.H=de,e===Ls?(e=n3(),v1=3):e===t3?(e=n3(),v1=4):v1=e===e0?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,At=e,t1===null&&(w1=1,Vi(t,Rt(e,t.current)))}function j0(){var t=j.H;return j.H=de,t===null?de:t}function G0(){var t=j.A;return j.A=Dc,t}function Lr(){w1=4,Oe||(n1&4194176)!==n1&&Bt.current!==null||(T5=!0),(o2&134217727)===0&&(Y2&134217727)===0||p1===null||Te(p1,n1,Yt,!1)}function Hr(t,e,s){var i=_1;_1|=2;var o=j0(),u=G0();(p1!==t||n1!==e)&&(Gi=null,Z5(t,e)),e=!1;var f=w1;t:do try{if(v1!==0&&t1!==null){var y=t1,p=At;switch(v1){case 8:zr(),f=6;break t;case 3:case 2:case 6:Bt.current===null&&(e=!0);var m=v1;if(v1=0,At=null,N5(t,y,p,m),s&&T5){f=0;break t}break;default:m=v1,v1=0,At=null,N5(t,y,p,m)}}Hc(),f=w1;break}catch(A){q0(t,A)}while(!0);return e&&t.shellSuspendCounter++,Me=B2=null,_1=i,j.H=o,j.A=u,t1===null&&(p1=null,n1=0,vi()),f}function Hc(){for(;t1!==null;)Y0(t1)}function Uc(t,e){var s=_1;_1|=2;var i=j0(),o=G0();p1!==t||n1!==e?(Gi=null,ji=ce()+500,Z5(t,e)):T5=vs(t,e);t:do try{if(v1!==0&&t1!==null){e=t1;var u=At;e:switch(v1){case 1:v1=0,At=null,N5(t,e,u,1);break;case 2:if(e3(u)){v1=0,At=null,X0(e);break}e=function(){v1===2&&p1===t&&(v1=7),ye(t)},u.then(e,e);break t;case 3:v1=7;break t;case 4:v1=5;break t;case 7:e3(u)?(v1=0,At=null,X0(e)):(v1=0,At=null,N5(t,e,u,7));break;case 5:var f=null;switch(t1.tag){case 26:f=t1.memoizedState;case 5:case 27:var y=t1;if(!f||m8(f)){v1=0,At=null;var p=y.sibling;if(p!==null)t1=p;else{var m=y.return;m!==null?(t1=m,Qi(m)):t1=null}break e}}v1=0,At=null,N5(t,e,u,5);break;case 6:v1=0,At=null,N5(t,e,u,6);break;case 8:zr(),w1=6;break t;default:throw Error(r(462))}}Oc();break}catch(A){q0(t,A)}while(!0);return Me=B2=null,j.H=i,j.A=o,_1=s,t1!==null?0:(p1=null,n1=0,vi(),w1)}function Oc(){for(;t1!==null&&!n9();)Y0(t1)}function Y0(t){var e=f0(t.alternate,t,Ve);t.memoizedProps=t.pendingProps,e===null?Qi(t):t1=e}function X0(t){var e=t,s=e.alternate;switch(e.tag){case 15:case 0:e=r0(s,e,e.pendingProps,e.type,void 0,n1);break;case 11:e=r0(s,e,e.pendingProps,e.type.render,e.ref,n1);break;case 5:Tl(e);default:R0(s,e),e=t1=O0(e,Ve),e=f0(s,e,Ve)}t.memoizedProps=t.pendingProps,e===null?Qi(t):t1=e}function N5(t,e,s,i){Me=B2=null,Tl(e),$5=null,Us=0;var o=e.return;try{if(wc(t,o,e,s,n1)){w1=1,Vi(t,Rt(s,t.current)),t1=null;return}}catch(u){if(o!==null)throw t1=o,u;w1=1,Vi(t,Rt(s,t.current)),t1=null;return}e.flags&32768?(a1||i===1?t=!0:T5||(n1&536870912)!==0?t=!1:(Oe=t=!0,(i===2||i===3||i===6)&&(i=Bt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Q0(e,t)):Qi(e)}function Qi(t){var e=t;do{if((e.flags&32768)!==0){Q0(e,Oe);return}t=e.return;var s=Ac(e.alternate,e,Ve);if(s!==null){t1=s;return}if(e=e.sibling,e!==null){t1=e;return}t1=e=t}while(e!==null);w1===0&&(w1=5)}function Q0(t,e){do{var s=Mc(t.alternate,t);if(s!==null){s.flags&=32767,t1=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!e&&(t=t.sibling,t!==null)){t1=t;return}t1=t=s}while(t!==null);w1=6,t1=null}function K0(t,e,s,i,o,u,f,y,p,m){var A=j.T,L=T.p;try{T.p=2,j.T=null,Vc(t,e,s,i,L,o,u,f,y,p,m)}finally{j.T=A,T.p=L}}function Vc(t,e,s,i,o,u,f,y){do B5();while(X2!==null);if((_1&6)!==0)throw Error(r(327));var p=t.finishedWork;if(i=t.finishedLanes,p===null)return null;if(t.finishedWork=null,t.finishedLanes=0,p===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var m=p.lanes|p.childLanes;if(m|=xl,y9(t,i,m,u,f,y),t===p1&&(t1=p1=null,n1=0),(p.subtreeFlags&10256)===0&&(p.flags&10256)===0||Yi||(Yi=!0,$r=m,Ar=s,Nc(ei,function(){return B5(),null})),s=(p.flags&15990)!==0,(p.subtreeFlags&15990)!==0||s?(s=j.T,j.T=null,u=T.p,T.p=2,f=_1,_1|=4,Sc(t,p),A0(p,t),lc(Yr,t.containerInfo),aa=!!Gr,Yr=Gr=null,t.current=p,k0(t,p.alternate,p),i9(),_1=f,T.p=u,j.T=s):t.current=p,Yi?(Yi=!1,X2=t,Ws=i):P0(t,m),m=t.pendingLanes,m===0&&(c2=null),c9(p.stateNode),ye(t),e!==null)for(o=t.onRecoverableError,p=0;p<e.length;p++)m=e[p],o(m.value,{componentStack:m.stack});return(Ws&3)!==0&&B5(),m=t.pendingLanes,(i&4194218)!==0&&(m&42)!==0?t===Mr?Is++:(Is=0,Mr=t):Is=0,tn(0),null}function P0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Vs(e)))}function B5(){if(X2!==null){var t=X2,e=$r;$r=0;var s=i7(Ws),i=j.T,o=T.p;try{if(T.p=32>s?32:s,j.T=null,X2===null)var u=!1;else{s=Ar,Ar=null;var f=X2,y=Ws;if(X2=null,Ws=0,(_1&6)!==0)throw Error(r(331));var p=_1;if(_1|=4,H0(f.current),D0(f,f.current,y,s),_1=p,tn(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(ps,f)}catch{}u=!0}return u}finally{T.p=o,j.T=i,P0(t,e)}}return!1}function J0(t,e,s){e=Rt(s,e),e=Fl(t.stateNode,e,2),t=n2(t,e,2),t!==null&&(Cs(t,2),ye(t))}function f1(t,e,s){if(t.tag===3)J0(t,t,s);else for(;e!==null;){if(e.tag===3){J0(e,t,s);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(c2===null||!c2.has(i))){t=Rt(s,t),s=I3(2),i=n2(e,s,2),i!==null&&(t0(s,i,e,t),Cs(i,2),ye(i));break}}e=e.return}}function Ur(t,e,s){var i=t.pingCache;if(i===null){i=t.pingCache=new zc;var o=new Set;i.set(e,o)}else o=i.get(e),o===void 0&&(o=new Set,i.set(e,o));o.has(s)||(wr=!0,o.add(s),t=Tc.bind(null,t,e,s),e.then(t,t))}function Tc(t,e,s){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,p1===t&&(n1&s)===s&&(w1===4||w1===3&&(n1&62914560)===n1&&300>ce()-Er?(_1&2)===0&&Z5(t,0):kr|=s,R5===n1&&(R5=0)),ye(t)}function F0(t,e){e===0&&(e=e7()),t=Pe(t,e),t!==null&&(Cs(t,e),ye(t))}function Rc(t){var e=t.memoizedState,s=0;e!==null&&(s=e.retryLane),F0(t,s)}function Zc(t,e){var s=0;switch(t.tag){case 13:var i=t.stateNode,o=t.memoizedState;o!==null&&(s=o.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(r(314))}i!==null&&i.delete(e),F0(t,s)}function Nc(t,e){return Wa(t,e)}var Ki=null,q5=null,Or=!1,Pi=!1,Vr=!1,Q2=0;function ye(t){t!==q5&&t.next===null&&(q5===null?Ki=q5=t:q5=q5.next=t),Pi=!0,Or||(Or=!0,qc(Bc))}function tn(t,e){if(!Vr&&Pi){Vr=!0;do for(var s=!1,i=Ki;i!==null;){if(t!==0){var o=i.pendingLanes;if(o===0)var u=0;else{var f=i.suspendedLanes,y=i.pingedLanes;u=(1<<31-kt(42|t)+1)-1,u&=o&~(f&~y),u=u&201326677?u&201326677|1:u?u|2:0}u!==0&&(s=!0,t8(i,u))}else u=n1,u=ii(i,i===p1?u:0),(u&3)===0||vs(i,u)||(s=!0,t8(i,u));i=i.next}while(s);Vr=!1}}function Bc(){Pi=Or=!1;var t=0;Q2!==0&&(Jc()&&(t=Q2),Q2=0);for(var e=ce(),s=null,i=Ki;i!==null;){var o=i.next,u=W0(i,e);u===0?(i.next=null,s===null?Ki=o:s.next=o,o===null&&(q5=s)):(s=i,(t!==0||(u&3)!==0)&&(Pi=!0)),i=o}tn(t)}function W0(t,e){for(var s=t.suspendedLanes,i=t.pingedLanes,o=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var f=31-kt(u),y=1<<f,p=o[f];p===-1?((y&s)===0||(y&i)!==0)&&(o[f]=f9(y,e)):p<=e&&(t.expiredLanes|=y),u&=~y}if(e=p1,s=n1,s=ii(t,t===e?s:0),i=t.callbackNode,s===0||t===e&&v1===2||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Ia(i),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||vs(t,s)){if(e=s&-s,e===t.callbackPriority)return e;switch(i!==null&&Ia(i),i7(s)){case 2:case 8:s=Wo;break;case 32:s=ei;break;case 268435456:s=Io;break;default:s=ei}return i=I0.bind(null,t),s=Wa(s,i),t.callbackPriority=e,t.callbackNode=s,e}return i!==null&&i!==null&&Ia(i),t.callbackPriority=2,t.callbackNode=null,2}function I0(t,e){var s=t.callbackNode;if(B5()&&t.callbackNode!==s)return null;var i=n1;return i=ii(t,t===p1?i:0),i===0?null:(N0(t,i,e),W0(t,ce()),t.callbackNode!=null&&t.callbackNode===s?I0.bind(null,t):null)}function t8(t,e){if(B5())return null;N0(t,e,!0)}function qc(t){Wc(function(){(_1&6)!==0?Wa(Fo,t):t()})}function Tr(){return Q2===0&&(Q2=t7()),Q2}function e8(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ci(""+t)}function s8(t,e){var s=e.ownerDocument.createElement("input");return s.name=e.name,s.value=e.value,t.id&&s.setAttribute("form",t.id),e.parentNode.insertBefore(s,e),t=new FormData(t),s.parentNode.removeChild(s),t}function jc(t,e,s,i,o){if(e==="submit"&&s&&s.stateNode===o){var u=e8((o[Ct]||null).action),f=i.submitter;f&&(e=(e=f[Ct]||null)?e8(e.formAction):f.getAttribute("formAction"),e!==null&&(u=e,f=null));var y=new fi("action","action",null,i,o);t.push({event:y,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Q2!==0){var p=f?s8(o,f):new FormData(o);Xl(s,{pending:!0,data:p,method:o.method,action:u},null,p)}}else typeof u=="function"&&(y.preventDefault(),p=f?s8(o,f):new FormData(o),Xl(s,{pending:!0,data:p,method:o.method,action:u},u,p))},currentTarget:o}]})}}for(var Rr=0;Rr<K7.length;Rr++){var Zr=K7[Rr],Gc=Zr.toLowerCase(),Yc=Zr[0].toUpperCase()+Zr.slice(1);It(Gc,"on"+Yc)}It(j7,"onAnimationEnd"),It(G7,"onAnimationIteration"),It(Y7,"onAnimationStart"),It("dblclick","onDoubleClick"),It("focusin","onFocus"),It("focusout","onBlur"),It(oc,"onTransitionRun"),It(cc,"onTransitionStart"),It(uc,"onTransitionCancel"),It(X7,"onTransitionEnd"),p5("onMouseEnter",["mouseout","mouseover"]),p5("onMouseLeave",["mouseout","mouseover"]),p5("onPointerEnter",["pointerout","pointerover"]),p5("onPointerLeave",["pointerout","pointerover"]),A2("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A2("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A2("onBeforeInput",["compositionend","keypress","textInput","paste"]),A2("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A2("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A2("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var en="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xc=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(en));function n8(t,e){e=(e&4)!==0;for(var s=0;s<t.length;s++){var i=t[s],o=i.event;i=i.listeners;t:{var u=void 0;if(e)for(var f=i.length-1;0<=f;f--){var y=i[f],p=y.instance,m=y.currentTarget;if(y=y.listener,p!==u&&o.isPropagationStopped())break t;u=y,o.currentTarget=m;try{u(o)}catch(A){Oi(A)}o.currentTarget=null,u=p}else for(f=0;f<i.length;f++){if(y=i[f],p=y.instance,m=y.currentTarget,y=y.listener,p!==u&&o.isPropagationStopped())break t;u=y,o.currentTarget=m;try{u(o)}catch(A){Oi(A)}o.currentTarget=null,u=p}}}}function e1(t,e){var s=e[el];s===void 0&&(s=e[el]=new Set);var i=t+"__bubble";s.has(i)||(i8(e,t,2,!1),s.add(i))}function Nr(t,e,s){var i=0;e&&(i|=4),i8(s,t,i,e)}var Ji="_reactListening"+Math.random().toString(36).slice(2);function Br(t){if(!t[Ji]){t[Ji]=!0,r7.forEach(function(s){s!=="selectionchange"&&(Xc.has(s)||Nr(s,!1,t),Nr(s,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ji]||(e[Ji]=!0,Nr("selectionchange",!1,e))}}function i8(t,e,s,i){switch($8(e)){case 2:var o=gu;break;case 8:o=bu;break;default:o=to}s=o.bind(null,e,s,t),o=void 0,!cl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),i?o!==void 0?t.addEventListener(e,s,{capture:!0,passive:o}):t.addEventListener(e,s,!0):o!==void 0?t.addEventListener(e,s,{passive:o}):t.addEventListener(e,s,!1)}function qr(t,e,s,i,o){var u=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var f=i.tag;if(f===3||f===4){var y=i.stateNode.containerInfo;if(y===o||y.nodeType===8&&y.parentNode===o)break;if(f===4)for(f=i.return;f!==null;){var p=f.tag;if((p===3||p===4)&&(p=f.stateNode.containerInfo,p===o||p.nodeType===8&&p.parentNode===o))return;f=f.return}for(;y!==null;){if(f=$2(y),f===null)return;if(p=f.tag,p===5||p===6||p===26||p===27){i=u=f;continue t}y=y.parentNode}}i=i.return}b7(function(){var m=u,A=rl(s),L=[];t:{var S=Q7.get(t);if(S!==void 0){var $=fi,Z=t;switch(t){case"keypress":if(hi(s)===0)break t;case"keydown":case"keyup":$=Z9;break;case"focusin":Z="focus",$=fl;break;case"focusout":Z="blur",$=fl;break;case"beforeblur":case"afterblur":$=fl;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=x7;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=$9;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=q9;break;case j7:case G7:case Y7:$=D9;break;case X7:$=G9;break;case"scroll":case"scrollend":$=S9;break;case"wheel":$=X9;break;case"copy":case"cut":case"paste":$=L9;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=k7;break;case"toggle":case"beforetoggle":$=K9}var Q=(e&4)!==0,k1=!Q&&(t==="scroll"||t==="scrollend"),x=Q?S!==null?S+"Capture":null:S;Q=[];for(var b=m,k;b!==null;){var D=b;if(k=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||k===null||x===null||(D=_s(b,x),D!=null&&Q.push(sn(b,D,k))),k1)break;b=b.return}0<Q.length&&(S=new $(S,Z,null,s,A),L.push({event:S,listeners:Q}))}}if((e&7)===0){t:{if(S=t==="mouseover"||t==="pointerover",$=t==="mouseout"||t==="pointerout",S&&s!==ll&&(Z=s.relatedTarget||s.fromElement)&&($2(Z)||Z[d5]))break t;if(($||S)&&(S=A.window===A?A:(S=A.ownerDocument)?S.defaultView||S.parentWindow:window,$?(Z=s.relatedTarget||s.toElement,$=m,Z=Z?$2(Z):null,Z!==null&&(k1=Y(Z),Q=Z.tag,Z!==k1||Q!==5&&Q!==27&&Q!==6)&&(Z=null)):($=null,Z=m),$!==Z)){if(Q=x7,D="onMouseLeave",x="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(Q=k7,D="onPointerLeave",x="onPointerEnter",b="pointer"),k1=$==null?S:bs($),k=Z==null?S:bs(Z),S=new Q(D,b+"leave",$,s,A),S.target=k1,S.relatedTarget=k,D=null,$2(A)===m&&(Q=new Q(x,b+"enter",Z,s,A),Q.target=k,Q.relatedTarget=k1,D=Q),k1=D,$&&Z)e:{for(Q=$,x=Z,b=0,k=Q;k;k=j5(k))b++;for(k=0,D=x;D;D=j5(D))k++;for(;0<b-k;)Q=j5(Q),b--;for(;0<k-b;)x=j5(x),k--;for(;b--;){if(Q===x||x!==null&&Q===x.alternate)break e;Q=j5(Q),x=j5(x)}Q=null}else Q=null;$!==null&&a8(L,S,$,Q,!1),Z!==null&&k1!==null&&a8(L,k1,Z,Q,!0)}}t:{if(S=m?bs(m):window,$=S.nodeName&&S.nodeName.toLowerCase(),$==="select"||$==="input"&&S.type==="file")var R=L7;else if(D7(S))if(H7)R=ic;else{R=sc;var I=ec}else $=S.nodeName,!$||$.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?m&&al(m.elementType)&&(R=L7):R=nc;if(R&&(R=R(t,m))){z7(L,R,s,A);break t}I&&I(t,S,m),t==="focusout"&&m&&S.type==="number"&&m.memoizedProps.value!=null&&il(S,"number",S.value)}switch(I=m?bs(m):window,t){case"focusin":(D7(I)||I.contentEditable==="true")&&(m5=I,bl=m,As=null);break;case"focusout":As=bl=m5=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,B7(L,s,A);break;case"selectionchange":if(rc)break;case"keydown":case"keyup":B7(L,s,A)}var N;if(pl)t:{switch(t){case"compositionstart":var q="onCompositionStart";break t;case"compositionend":q="onCompositionEnd";break t;case"compositionupdate":q="onCompositionUpdate";break t}q=void 0}else _5?A7(t,s)&&(q="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(q="onCompositionStart");q&&(S7&&s.locale!=="ko"&&(_5||q!=="onCompositionStart"?q==="onCompositionEnd"&&_5&&(N=_7()):(Ke=A,ul="value"in Ke?Ke.value:Ke.textContent,_5=!0)),I=Fi(m,q),0<I.length&&(q=new w7(q,t,null,s,A),L.push({event:q,listeners:I}),N?q.data=N:(N=M7(s),N!==null&&(q.data=N)))),(N=J9?F9(t,s):W9(t,s))&&(q=Fi(m,"onBeforeInput"),0<q.length&&(I=new w7("onBeforeInput","beforeinput",null,s,A),L.push({event:I,listeners:q}),I.data=N)),jc(L,t,m,s,A)}n8(L,e)})}function sn(t,e,s){return{instance:t,listener:e,currentTarget:s}}function Fi(t,e){for(var s=e+"Capture",i=[];t!==null;){var o=t,u=o.stateNode;o=o.tag,o!==5&&o!==26&&o!==27||u===null||(o=_s(t,s),o!=null&&i.unshift(sn(t,o,u)),o=_s(t,e),o!=null&&i.push(sn(t,o,u))),t=t.return}return i}function j5(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function a8(t,e,s,i,o){for(var u=e._reactName,f=[];s!==null&&s!==i;){var y=s,p=y.alternate,m=y.stateNode;if(y=y.tag,p!==null&&p===i)break;y!==5&&y!==26&&y!==27||m===null||(p=m,o?(m=_s(s,u),m!=null&&f.unshift(sn(s,m,p))):o||(m=_s(s,u),m!=null&&f.push(sn(s,m,p)))),s=s.return}f.length!==0&&t.push({event:e,listeners:f})}var Qc=/\r\n?/g,Kc=/\u0000|\uFFFD/g;function l8(t){return(typeof t=="string"?t:""+t).replace(Qc,`
`).replace(Kc,"")}function r8(t,e){return e=l8(e),l8(t)===e}function Wi(){}function h1(t,e,s,i,o,u){switch(s){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||C5(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&C5(t,""+i);break;case"className":li(t,"class",i);break;case"tabIndex":li(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":li(t,s,i);break;case"style":C7(t,i,u);break;case"data":if(e!=="object"){li(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||s!=="href")){t.removeAttribute(s);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(s);break}i=ci(""+i),t.setAttribute(s,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(s==="formAction"?(e!=="input"&&h1(t,e,"name",o.name,o,null),h1(t,e,"formEncType",o.formEncType,o,null),h1(t,e,"formMethod",o.formMethod,o,null),h1(t,e,"formTarget",o.formTarget,o,null)):(h1(t,e,"encType",o.encType,o,null),h1(t,e,"method",o.method,o,null),h1(t,e,"target",o.target,o,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(s);break}i=ci(""+i),t.setAttribute(s,i);break;case"onClick":i!=null&&(t.onclick=Wi);break;case"onScroll":i!=null&&e1("scroll",t);break;case"onScrollEnd":i!=null&&e1("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(r(61));if(s=i.__html,s!=null){if(o.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}s=ci(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(s,""+i):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":i===!0?t.setAttribute(s,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(s,i):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(s,i):t.removeAttribute(s);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(s):t.setAttribute(s,i);break;case"popover":e1("beforetoggle",t),e1("toggle",t),ai(t,"popover",i);break;case"xlinkActuate":we(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":we(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":we(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":we(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":we(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":we(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":we(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":we(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":we(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ai(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=w9.get(s)||s,ai(t,s,i))}}function jr(t,e,s,i,o,u){switch(s){case"style":C7(t,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(r(61));if(s=i.__html,s!=null){if(o.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof i=="string"?C5(t,i):(typeof i=="number"||typeof i=="bigint")&&C5(t,""+i);break;case"onScroll":i!=null&&e1("scroll",t);break;case"onScrollEnd":i!=null&&e1("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!o7.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(o=s.endsWith("Capture"),e=s.slice(2,o?s.length-7:void 0),u=t[Ct]||null,u=u!=null?u[s]:null,typeof u=="function"&&t.removeEventListener(e,u,o),typeof i=="function")){typeof u!="function"&&u!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(e,i,o);break t}s in t?t[s]=i:i===!0?t.setAttribute(s,""):ai(t,s,i)}}}function it(t,e,s){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":e1("error",t),e1("load",t);var i=!1,o=!1,u;for(u in s)if(s.hasOwnProperty(u)){var f=s[u];if(f!=null)switch(u){case"src":i=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:h1(t,e,u,f,s,null)}}o&&h1(t,e,"srcSet",s.srcSet,s,null),i&&h1(t,e,"src",s.src,s,null);return;case"input":e1("invalid",t);var y=u=f=o=null,p=null,m=null;for(i in s)if(s.hasOwnProperty(i)){var A=s[i];if(A!=null)switch(i){case"name":o=A;break;case"type":f=A;break;case"checked":p=A;break;case"defaultChecked":m=A;break;case"value":u=A;break;case"defaultValue":y=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(137,e));break;default:h1(t,e,i,A,s,null)}}f7(t,u,y,p,m,f,o,!1),ri(t);return;case"select":e1("invalid",t),i=f=u=null;for(o in s)if(s.hasOwnProperty(o)&&(y=s[o],y!=null))switch(o){case"value":u=y;break;case"defaultValue":f=y;break;case"multiple":i=y;default:h1(t,e,o,y,s,null)}e=u,s=f,t.multiple=!!i,e!=null?v5(t,!!i,e,!1):s!=null&&v5(t,!!i,s,!0);return;case"textarea":e1("invalid",t),u=o=i=null;for(f in s)if(s.hasOwnProperty(f)&&(y=s[f],y!=null))switch(f){case"value":i=y;break;case"defaultValue":o=y;break;case"children":u=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(r(91));break;default:h1(t,e,f,y,s,null)}p7(t,i,o,u),ri(t);return;case"option":for(p in s)if(s.hasOwnProperty(p)&&(i=s[p],i!=null))switch(p){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:h1(t,e,p,i,s,null)}return;case"dialog":e1("cancel",t),e1("close",t);break;case"iframe":case"object":e1("load",t);break;case"video":case"audio":for(i=0;i<en.length;i++)e1(en[i],t);break;case"image":e1("error",t),e1("load",t);break;case"details":e1("toggle",t);break;case"embed":case"source":case"link":e1("error",t),e1("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in s)if(s.hasOwnProperty(m)&&(i=s[m],i!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:h1(t,e,m,i,s,null)}return;default:if(al(e)){for(A in s)s.hasOwnProperty(A)&&(i=s[A],i!==void 0&&jr(t,e,A,i,s,void 0));return}}for(y in s)s.hasOwnProperty(y)&&(i=s[y],i!=null&&h1(t,e,y,i,s,null))}function Pc(t,e,s,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,u=null,f=null,y=null,p=null,m=null,A=null;for($ in s){var L=s[$];if(s.hasOwnProperty($)&&L!=null)switch($){case"checked":break;case"value":break;case"defaultValue":p=L;default:i.hasOwnProperty($)||h1(t,e,$,null,i,L)}}for(var S in i){var $=i[S];if(L=s[S],i.hasOwnProperty(S)&&($!=null||L!=null))switch(S){case"type":u=$;break;case"name":o=$;break;case"checked":m=$;break;case"defaultChecked":A=$;break;case"value":f=$;break;case"defaultValue":y=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,e));break;default:$!==L&&h1(t,e,S,$,i,L)}}nl(t,f,y,p,m,A,u,o);return;case"select":$=f=y=S=null;for(u in s)if(p=s[u],s.hasOwnProperty(u)&&p!=null)switch(u){case"value":break;case"multiple":$=p;default:i.hasOwnProperty(u)||h1(t,e,u,null,i,p)}for(o in i)if(u=i[o],p=s[o],i.hasOwnProperty(o)&&(u!=null||p!=null))switch(o){case"value":S=u;break;case"defaultValue":y=u;break;case"multiple":f=u;default:u!==p&&h1(t,e,o,u,i,p)}e=y,s=f,i=$,S!=null?v5(t,!!s,S,!1):!!i!=!!s&&(e!=null?v5(t,!!s,e,!0):v5(t,!!s,s?[]:"",!1));return;case"textarea":$=S=null;for(y in s)if(o=s[y],s.hasOwnProperty(y)&&o!=null&&!i.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:h1(t,e,y,null,i,o)}for(f in i)if(o=i[f],u=s[f],i.hasOwnProperty(f)&&(o!=null||u!=null))switch(f){case"value":S=o;break;case"defaultValue":$=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:o!==u&&h1(t,e,f,o,i,u)}y7(t,S,$);return;case"option":for(var Z in s)if(S=s[Z],s.hasOwnProperty(Z)&&S!=null&&!i.hasOwnProperty(Z))switch(Z){case"selected":t.selected=!1;break;default:h1(t,e,Z,null,i,S)}for(p in i)if(S=i[p],$=s[p],i.hasOwnProperty(p)&&S!==$&&(S!=null||$!=null))switch(p){case"selected":t.selected=S&&typeof S!="function"&&typeof S!="symbol";break;default:h1(t,e,p,S,i,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in s)S=s[Q],s.hasOwnProperty(Q)&&S!=null&&!i.hasOwnProperty(Q)&&h1(t,e,Q,null,i,S);for(m in i)if(S=i[m],$=s[m],i.hasOwnProperty(m)&&S!==$&&(S!=null||$!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(r(137,e));break;default:h1(t,e,m,S,i,$)}return;default:if(al(e)){for(var k1 in s)S=s[k1],s.hasOwnProperty(k1)&&S!==void 0&&!i.hasOwnProperty(k1)&&jr(t,e,k1,void 0,i,S);for(A in i)S=i[A],$=s[A],!i.hasOwnProperty(A)||S===$||S===void 0&&$===void 0||jr(t,e,A,S,i,$);return}}for(var x in s)S=s[x],s.hasOwnProperty(x)&&S!=null&&!i.hasOwnProperty(x)&&h1(t,e,x,null,i,S);for(L in i)S=i[L],$=s[L],!i.hasOwnProperty(L)||S===$||S==null&&$==null||h1(t,e,L,S,i,$)}var Gr=null,Yr=null;function Ii(t){return t.nodeType===9?t:t.ownerDocument}function o8(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c8(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Xr(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qr=null;function Jc(){var t=window.event;return t&&t.type==="popstate"?t===Qr?!1:(Qr=t,!0):(Qr=null,!1)}var u8=typeof setTimeout=="function"?setTimeout:void 0,Fc=typeof clearTimeout=="function"?clearTimeout:void 0,h8=typeof Promise=="function"?Promise:void 0,Wc=typeof queueMicrotask=="function"?queueMicrotask:typeof h8<"u"?function(t){return h8.resolve(null).then(t).catch(Ic)}:u8;function Ic(t){setTimeout(function(){throw t})}function Kr(t,e){var s=e,i=0;do{var o=s.nextSibling;if(t.removeChild(s),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(i===0){t.removeChild(o),hn(e);return}i--}else s!=="$"&&s!=="$?"&&s!=="$!"||i++;s=o}while(s);hn(e)}function Pr(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var s=e;switch(e=e.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Pr(s),sl(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function tu(t,e,s,i){for(;t.nodeType===1;){var o=s;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[gs])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==o.rel||t.getAttribute("href")!==(o.href==null?null:o.href)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||t.getAttribute("title")!==(o.title==null?null:o.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(o.src==null?null:o.src)||t.getAttribute("type")!==(o.type==null?null:o.type)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=o.name==null?null:""+o.name;if(o.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=se(t.nextSibling),t===null)break}return null}function eu(t,e,s){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=se(t.nextSibling),t===null))return null;return t}function se(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}function d8(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(e===0)return t;e--}else s==="/$"&&e++}t=t.previousSibling}return null}function f8(t,e,s){switch(e=Ii(s),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var Xt=new Map,y8=new Set;function ta(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Re=T.d;T.d={f:su,r:nu,D:iu,C:au,L:lu,m:ru,X:cu,S:ou,M:uu};function su(){var t=Re.f(),e=Xi();return t||e}function nu(t){var e=f5(t);e!==null&&e.tag===5&&e.type==="form"?B3(e):Re.r(t)}var G5=typeof document>"u"?null:document;function p8(t,e,s){var i=G5;if(i&&typeof e=="string"&&e){var o=Vt(e);o='link[rel="'+t+'"][href="'+o+'"]',typeof s=="string"&&(o+='[crossorigin="'+s+'"]'),y8.has(o)||(y8.add(o),t={rel:t,crossOrigin:s,href:e},i.querySelector(o)===null&&(e=i.createElement("link"),it(e,"link",t),P1(e),i.head.appendChild(e)))}}function iu(t){Re.D(t),p8("dns-prefetch",t,null)}function au(t,e){Re.C(t,e),p8("preconnect",t,e)}function lu(t,e,s){Re.L(t,e,s);var i=G5;if(i&&t&&e){var o='link[rel="preload"][as="'+Vt(e)+'"]';e==="image"&&s&&s.imageSrcSet?(o+='[imagesrcset="'+Vt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(o+='[imagesizes="'+Vt(s.imageSizes)+'"]')):o+='[href="'+Vt(t)+'"]';var u=o;switch(e){case"style":u=Y5(t);break;case"script":u=X5(t)}Xt.has(u)||(t=o1({rel:"preload",href:e==="image"&&s&&s.imageSrcSet?void 0:t,as:e},s),Xt.set(u,t),i.querySelector(o)!==null||e==="style"&&i.querySelector(nn(u))||e==="script"&&i.querySelector(an(u))||(e=i.createElement("link"),it(e,"link",t),P1(e),i.head.appendChild(e)))}}function ru(t,e){Re.m(t,e);var s=G5;if(s&&t){var i=e&&typeof e.as=="string"?e.as:"script",o='link[rel="modulepreload"][as="'+Vt(i)+'"][href="'+Vt(t)+'"]',u=o;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=X5(t)}if(!Xt.has(u)&&(t=o1({rel:"modulepreload",href:t},e),Xt.set(u,t),s.querySelector(o)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(an(u)))return}i=s.createElement("link"),it(i,"link",t),P1(i),s.head.appendChild(i)}}}function ou(t,e,s){Re.S(t,e,s);var i=G5;if(i&&t){var o=y5(i).hoistableStyles,u=Y5(t);e=e||"default";var f=o.get(u);if(!f){var y={loading:0,preload:null};if(f=i.querySelector(nn(u)))y.loading=5;else{t=o1({rel:"stylesheet",href:t,"data-precedence":e},s),(s=Xt.get(u))&&Jr(t,s);var p=f=i.createElement("link");P1(p),it(p,"link",t),p._p=new Promise(function(m,A){p.onload=m,p.onerror=A}),p.addEventListener("load",function(){y.loading|=1}),p.addEventListener("error",function(){y.loading|=2}),y.loading|=4,ea(f,e,i)}f={type:"stylesheet",instance:f,count:1,state:y},o.set(u,f)}}}function cu(t,e){Re.X(t,e);var s=G5;if(s&&t){var i=y5(s).hoistableScripts,o=X5(t),u=i.get(o);u||(u=s.querySelector(an(o)),u||(t=o1({src:t,async:!0},e),(e=Xt.get(o))&&Fr(t,e),u=s.createElement("script"),P1(u),it(u,"link",t),s.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(o,u))}}function uu(t,e){Re.M(t,e);var s=G5;if(s&&t){var i=y5(s).hoistableScripts,o=X5(t),u=i.get(o);u||(u=s.querySelector(an(o)),u||(t=o1({src:t,async:!0,type:"module"},e),(e=Xt.get(o))&&Fr(t,e),u=s.createElement("script"),P1(u),it(u,"link",t),s.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(o,u))}}function v8(t,e,s,i){var o=(o=Ye.current)?ta(o):null;if(!o)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(e=Y5(s.href),s=y5(o).hoistableStyles,i=s.get(e),i||(i={type:"style",instance:null,count:0,state:null},s.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Y5(s.href);var u=y5(o).hoistableStyles,f=u.get(t);if(f||(o=o.ownerDocument||o,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,f),(u=o.querySelector(nn(t)))&&!u._p&&(f.instance=u,f.state.loading=5),Xt.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Xt.set(t,s),u||hu(o,t,s,f.state))),e&&i===null)throw Error(r(528,""));return f}if(e&&i!==null)throw Error(r(529,""));return null;case"script":return e=s.async,s=s.src,typeof s=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=X5(s),s=y5(o).hoistableScripts,i=s.get(e),i||(i={type:"script",instance:null,count:0,state:null},s.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Y5(t){return'href="'+Vt(t)+'"'}function nn(t){return'link[rel="stylesheet"]['+t+"]"}function C8(t){return o1({},t,{"data-precedence":t.precedence,precedence:null})}function hu(t,e,s,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),it(e,"link",s),P1(e),t.head.appendChild(e))}function X5(t){return'[src="'+Vt(t)+'"]'}function an(t){return"script[async]"+t}function g8(t,e,s){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Vt(s.href)+'"]');if(i)return e.instance=i,P1(i),i;var o=o1({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),P1(i),it(i,"style",o),ea(i,s.precedence,t),e.instance=i;case"stylesheet":o=Y5(s.href);var u=t.querySelector(nn(o));if(u)return e.state.loading|=4,e.instance=u,P1(u),u;i=C8(s),(o=Xt.get(o))&&Jr(i,o),u=(t.ownerDocument||t).createElement("link"),P1(u);var f=u;return f._p=new Promise(function(y,p){f.onload=y,f.onerror=p}),it(u,"link",i),e.state.loading|=4,ea(u,s.precedence,t),e.instance=u;case"script":return u=X5(s.src),(o=t.querySelector(an(u)))?(e.instance=o,P1(o),o):(i=s,(o=Xt.get(u))&&(i=o1({},s),Fr(i,o)),t=t.ownerDocument||t,o=t.createElement("script"),P1(o),it(o,"link",i),t.head.appendChild(o),e.instance=o);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,ea(i,s.precedence,t));return e.instance}function ea(t,e,s){for(var i=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=i.length?i[i.length-1]:null,u=o,f=0;f<i.length;f++){var y=i[f];if(y.dataset.precedence===e)u=y;else if(u!==o)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=s.nodeType===9?s.head:s,e.insertBefore(t,e.firstChild))}function Jr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Fr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var sa=null;function b8(t,e,s){if(sa===null){var i=new Map,o=sa=new Map;o.set(s,i)}else o=sa,i=o.get(s),i||(i=new Map,o.set(s,i));if(i.has(t))return i;for(i.set(t,null),s=s.getElementsByTagName(t),o=0;o<s.length;o++){var u=s[o];if(!(u[gs]||u[lt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var f=u.getAttribute(e)||"";f=t+f;var y=i.get(f);y?y.push(u):i.set(f,[u])}}return i}function _8(t,e,s){t=t.ownerDocument||t,t.head.insertBefore(s,e==="title"?t.querySelector("head > title"):null)}function du(t,e,s){if(s===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function m8(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var ln=null;function fu(){}function yu(t,e,s){if(ln===null)throw Error(r(475));var i=ln;if(e.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var o=Y5(s.href),u=t.querySelector(nn(o));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(i.count++,i=na.bind(i),t.then(i,i)),e.state.loading|=4,e.instance=u,P1(u);return}u=t.ownerDocument||t,s=C8(s),(o=Xt.get(o))&&Jr(s,o),u=u.createElement("link"),P1(u);var f=u;f._p=new Promise(function(y,p){f.onload=y,f.onerror=p}),it(u,"link",s),e.instance=u}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(i.count++,e=na.bind(i),t.addEventListener("load",e),t.addEventListener("error",e))}}function pu(){if(ln===null)throw Error(r(475));var t=ln;return t.stylesheets&&t.count===0&&Wr(t,t.stylesheets),0<t.count?function(e){var s=setTimeout(function(){if(t.stylesheets&&Wr(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(s)}}:null}function na(){if(this.count--,this.count===0){if(this.stylesheets)Wr(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ia=null;function Wr(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ia=new Map,e.forEach(vu,t),ia=null,na.call(t))}function vu(t,e){if(!(e.state.loading&4)){var s=ia.get(t);if(s)var i=s.get(null);else{s=new Map,ia.set(t,s);for(var o=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<o.length;u++){var f=o[u];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(s.set(f.dataset.precedence,f),i=f)}i&&s.set(null,i)}o=e.instance,f=o.getAttribute("data-precedence"),u=s.get(f)||i,u===i&&s.set(null,o),s.set(f,o),this.count++,i=na.bind(this),o.addEventListener("load",i),o.addEventListener("error",i),u?u.parentNode.insertBefore(o,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(o,t.firstChild)),e.state.loading|=4}}var rn={$$typeof:U,Provider:null,Consumer:null,_currentValue:s1,_currentValue2:s1,_threadCount:0};function Cu(t,e,s,i,o,u,f,y){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tl(0),this.hiddenUpdates=tl(null),this.identifierPrefix=i,this.onUncaughtError=o,this.onCaughtError=u,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function x8(t,e,s,i,o,u,f,y,p,m,A,L){return t=new Cu(t,e,s,f,y,p,m,L),e=1,u===!0&&(e|=24),u=Gt(3,null,null,e),t.current=u,u.stateNode=t,e=Dl(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:i,isDehydrated:s,cache:e},ur(u),t}function w8(t){return t?(t=k5,t):k5}function k8(t,e,s,i,o,u){o=w8(o),i.context===null?i.context=o:i.pendingContext=o,i=s2(e),i.payload={element:s},u=u===void 0?null:u,u!==null&&(i.callback=u),s=n2(t,i,e),s!==null&&(dt(s,t,e),js(s,t,e))}function S8(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<e?s:e}}function Ir(t,e){S8(t,e),(t=t.alternate)&&S8(t,e)}function E8(t){if(t.tag===13){var e=Pe(t,67108864);e!==null&&dt(e,t,67108864),Ir(t,67108864)}}var aa=!0;function gu(t,e,s,i){var o=j.T;j.T=null;var u=T.p;try{T.p=2,to(t,e,s,i)}finally{T.p=u,j.T=o}}function bu(t,e,s,i){var o=j.T;j.T=null;var u=T.p;try{T.p=8,to(t,e,s,i)}finally{T.p=u,j.T=o}}function to(t,e,s,i){if(aa){var o=eo(i);if(o===null)qr(t,e,i,la,s),A8(t,i);else if(mu(o,t,e,s,i))i.stopPropagation();else if(A8(t,i),e&4&&-1<_u.indexOf(t)){for(;o!==null;){var u=f5(o);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var f=E2(u.pendingLanes);if(f!==0){var y=u;for(y.pendingLanes|=2,y.entangledLanes|=2;f;){var p=1<<31-kt(f);y.entanglements[1]|=p,f&=~p}ye(u),(_1&6)===0&&(ji=ce()+500,tn(0))}}break;case 13:y=Pe(u,2),y!==null&&dt(y,u,2),Xi(),Ir(u,2)}if(u=eo(i),u===null&&qr(t,e,i,la,s),u===o)break;o=u}o!==null&&i.stopPropagation()}else qr(t,e,i,null,s)}}function eo(t){return t=rl(t),so(t)}var la=null;function so(t){if(la=null,t=$2(t),t!==null){var e=Y(t);if(e===null)t=null;else{var s=e.tag;if(s===13){if(t=y1(e),t!==null)return t;t=null}else if(s===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return la=t,null}function $8(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(a9()){case Fo:return 2;case Wo:return 8;case ei:case l9:return 32;case Io:return 268435456;default:return 32}default:return 32}}var no=!1,u2=null,h2=null,d2=null,on=new Map,cn=new Map,f2=[],_u="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function A8(t,e){switch(t){case"focusin":case"focusout":u2=null;break;case"dragenter":case"dragleave":h2=null;break;case"mouseover":case"mouseout":d2=null;break;case"pointerover":case"pointerout":on.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":cn.delete(e.pointerId)}}function un(t,e,s,i,o,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:s,eventSystemFlags:i,nativeEvent:u,targetContainers:[o]},e!==null&&(e=f5(e),e!==null&&E8(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),t)}function mu(t,e,s,i,o){switch(e){case"focusin":return u2=un(u2,t,e,s,i,o),!0;case"dragenter":return h2=un(h2,t,e,s,i,o),!0;case"mouseover":return d2=un(d2,t,e,s,i,o),!0;case"pointerover":var u=o.pointerId;return on.set(u,un(on.get(u)||null,t,e,s,i,o)),!0;case"gotpointercapture":return u=o.pointerId,cn.set(u,un(cn.get(u)||null,t,e,s,i,o)),!0}return!1}function M8(t){var e=$2(t.target);if(e!==null){var s=Y(e);if(s!==null){if(e=s.tag,e===13){if(e=y1(s),e!==null){t.blockedOn=e,p9(t.priority,function(){if(s.tag===13){var i=Mt(),o=Pe(s,i);o!==null&&dt(o,s,i),Ir(s,i)}});return}}else if(e===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ra(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var s=eo(t.nativeEvent);if(s===null){s=t.nativeEvent;var i=new s.constructor(s.type,s);ll=i,s.target.dispatchEvent(i),ll=null}else return e=f5(s),e!==null&&E8(e),t.blockedOn=s,!1;e.shift()}return!0}function D8(t,e,s){ra(t)&&s.delete(e)}function xu(){no=!1,u2!==null&&ra(u2)&&(u2=null),h2!==null&&ra(h2)&&(h2=null),d2!==null&&ra(d2)&&(d2=null),on.forEach(D8),cn.forEach(D8)}function oa(t,e){t.blockedOn===e&&(t.blockedOn=null,no||(no=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,xu)))}var ca=null;function z8(t){ca!==t&&(ca=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){ca===t&&(ca=null);for(var e=0;e<t.length;e+=3){var s=t[e],i=t[e+1],o=t[e+2];if(typeof i!="function"){if(so(i||s)===null)continue;break}var u=f5(s);u!==null&&(t.splice(e,3),e-=3,Xl(u,{pending:!0,data:o,method:s.method,action:i},i,o))}}))}function hn(t){function e(p){return oa(p,t)}u2!==null&&oa(u2,t),h2!==null&&oa(h2,t),d2!==null&&oa(d2,t),on.forEach(e),cn.forEach(e);for(var s=0;s<f2.length;s++){var i=f2[s];i.blockedOn===t&&(i.blockedOn=null)}for(;0<f2.length&&(s=f2[0],s.blockedOn===null);)M8(s),s.blockedOn===null&&f2.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(i=0;i<s.length;i+=3){var o=s[i],u=s[i+1],f=o[Ct]||null;if(typeof u=="function")f||z8(s);else if(f){var y=null;if(u&&u.hasAttribute("formAction")){if(o=u,f=u[Ct]||null)y=f.formAction;else if(so(o)!==null)continue}else y=f.action;typeof y=="function"?s[i+1]=y:(s.splice(i,3),i-=3),z8(s)}}}function io(t){this._internalRoot=t}ua.prototype.render=io.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var s=e.current,i=Mt();k8(s,i,t,e,null,null)},ua.prototype.unmount=io.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t.tag===0&&B5(),k8(t.current,2,null,t,null,null),Xi(),e[d5]=null}};function ua(t){this._internalRoot=t}ua.prototype.unstable_scheduleHydration=function(t){if(t){var e=a7();t={blockedOn:null,target:t,priority:e};for(var s=0;s<f2.length&&e!==0&&e<f2[s].priority;s++);f2.splice(s,0,t),s===0&&M8(t)}};var L8=n.version;if(L8!=="19.0.0")throw Error(r(527,L8,"19.0.0"));T.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=H(e),t=t!==null?G(t):null,t=t===null?null:t.stateNode,t};var wu={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:j,findFiberByHostInstance:$2,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ha.isDisabled&&ha.supportsFiber)try{ps=ha.inject(wu),wt=ha}catch{}}return fn.createRoot=function(t,e){if(!c(t))throw Error(r(299));var s=!1,i="",o=P3,u=J3,f=F3,y=null;return e!=null&&(e.unstable_strictMode===!0&&(s=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(o=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(f=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(y=e.unstable_transitionCallbacks)),e=x8(t,1,!1,null,null,s,i,o,u,f,y,null),t[d5]=e.current,Br(t.nodeType===8?t.parentNode:t),new io(e)},fn.hydrateRoot=function(t,e,s){if(!c(t))throw Error(r(299));var i=!1,o="",u=P3,f=J3,y=F3,p=null,m=null;return s!=null&&(s.unstable_strictMode===!0&&(i=!0),s.identifierPrefix!==void 0&&(o=s.identifierPrefix),s.onUncaughtError!==void 0&&(u=s.onUncaughtError),s.onCaughtError!==void 0&&(f=s.onCaughtError),s.onRecoverableError!==void 0&&(y=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(p=s.unstable_transitionCallbacks),s.formState!==void 0&&(m=s.formState)),e=x8(t,1,!0,e,s??null,i,o,u,f,y,p,m),e.context=w8(null),s=e.current,i=Mt(),o=s2(i),o.callback=null,n2(s,o,i),e.current.lanes=i,Cs(e,i),ye(e),t[d5]=e.current,Br(t),new ua(e)},fn.version="19.0.0",fn}var q8;function Vu(){if(q8)return ro.exports;q8=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(n){console.error(n)}}return a(),ro.exports=Ou(),ro.exports}var Tu=Vu();/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ru=new Set(["children","localName","ref","style","className"]),j8=new WeakMap,G8=(a,n,l,r,c)=>{const h=c==null?void 0:c[n];h===void 0?(a[n]=l,l==null&&n in HTMLElement.prototype&&a.removeAttribute(n)):l!==r&&((d,v,C)=>{let w=j8.get(d);w===void 0&&j8.set(d,w=new Map);let M=w.get(v);C!==void 0?M===void 0?(w.set(v,M={handleEvent:C}),d.addEventListener(v,M)):M.handleEvent=C:M!==void 0&&(w.delete(v),d.removeEventListener(v,M))})(a,h,l)},tt=({react:a,tagName:n,elementClass:l,events:r,displayName:c})=>{const h=new Set(Object.keys(r??{})),d=a.forwardRef((v,C)=>{const w=a.useRef(new Map),M=a.useRef(null),E={},V={};for(const[U,X]of Object.entries(v))Ru.has(U)?E[U==="className"?"class":U]=X:h.has(U)||U in l.prototype?V[U]=X:E[U]=X;return a.useLayoutEffect(()=>{if(M.current===null)return;const U=new Map;for(const X in V)G8(M.current,X,v[X],w.current.get(X),r),w.current.delete(X),U.set(X,v[X]);for(const[X,yt]of w.current)G8(M.current,X,void 0,yt,r);w.current=U}),a.useLayoutEffect(()=>{var U;(U=M.current)==null||U.removeAttribute("defer-hydration")},[]),E.suppressHydrationWarning=!0,a.createElement(n,{...E,ref:a.useCallback(U=>{M.current=U,typeof C=="function"?C(U):C!==null&&(C.current=U)},[C])})});return d.displayName=c??l.name,d};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const da=globalThis,Eo=da.ShadowRoot&&(da.ShadyCSS===void 0||da.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$o=Symbol(),Y8=new WeakMap;let s4=class{constructor(n,l,r){if(this._$cssResult$=!0,r!==$o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=l}get styleSheet(){let n=this.o;const l=this.t;if(Eo&&n===void 0){const r=l!==void 0&&l.length===1;r&&(n=Y8.get(l)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),r&&Y8.set(l,n))}return n}toString(){return this.cssText}};const Zu=a=>new s4(typeof a=="string"?a:a+"",void 0,$o),C1=(a,...n)=>{const l=a.length===1?a[0]:n.reduce((r,c,h)=>r+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(c)+a[h+1],a[0]);return new s4(l,a,$o)},Nu=(a,n)=>{if(Eo)a.adoptedStyleSheets=n.map(l=>l instanceof CSSStyleSheet?l:l.styleSheet);else for(const l of n){const r=document.createElement("style"),c=da.litNonce;c!==void 0&&r.setAttribute("nonce",c),r.textContent=l.cssText,a.appendChild(r)}},X8=Eo?a=>a:a=>a instanceof CSSStyleSheet?(n=>{let l="";for(const r of n.cssRules)l+=r.cssText;return Zu(l)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Bu,defineProperty:qu,getOwnPropertyDescriptor:ju,getOwnPropertyNames:Gu,getOwnPropertySymbols:Yu,getPrototypeOf:Xu}=Object,k2=globalThis,Q8=k2.trustedTypes,Qu=Q8?Q8.emptyScript:"",ho=k2.reactiveElementPolyfillSupport,Mn=(a,n)=>a,ba={toAttribute(a,n){switch(n){case Boolean:a=a?Qu:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,n){let l=a;switch(n){case Boolean:l=a!==null;break;case Number:l=a===null?null:Number(a);break;case Object:case Array:try{l=JSON.parse(a)}catch{l=null}}return l}},Ao=(a,n)=>!Bu(a,n),K8={attribute:!0,type:String,converter:ba,reflect:!1,hasChanged:Ao};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),k2.litPropertyMetadata??(k2.litPropertyMetadata=new WeakMap);let I5=class extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??(this.l=[])).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,l=K8){if(l.state&&(l.attribute=!1),this._$Ei(),this.elementProperties.set(n,l),!l.noAccessor){const r=Symbol(),c=this.getPropertyDescriptor(n,r,l);c!==void 0&&qu(this.prototype,n,c)}}static getPropertyDescriptor(n,l,r){const{get:c,set:h}=ju(this.prototype,n)??{get(){return this[l]},set(d){this[l]=d}};return{get(){return c==null?void 0:c.call(this)},set(d){const v=c==null?void 0:c.call(this);h.call(this,d),this.requestUpdate(n,v,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??K8}static _$Ei(){if(this.hasOwnProperty(Mn("elementProperties")))return;const n=Xu(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(Mn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Mn("properties"))){const l=this.properties,r=[...Gu(l),...Yu(l)];for(const c of r)this.createProperty(c,l[c])}const n=this[Symbol.metadata];if(n!==null){const l=litPropertyMetadata.get(n);if(l!==void 0)for(const[r,c]of l)this.elementProperties.set(r,c)}this._$Eh=new Map;for(const[l,r]of this.elementProperties){const c=this._$Eu(l,r);c!==void 0&&this._$Eh.set(c,l)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){const l=[];if(Array.isArray(n)){const r=new Set(n.flat(1/0).reverse());for(const c of r)l.unshift(X8(c))}else n!==void 0&&l.push(X8(n));return l}static _$Eu(n,l){const r=l.attribute;return r===!1?void 0:typeof r=="string"?r:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var n;this._$ES=new Promise(l=>this.enableUpdating=l),this._$AL=new Map,this._$E_(),this.requestUpdate(),(n=this.constructor.l)==null||n.forEach(l=>l(this))}addController(n){var l;(this._$EO??(this._$EO=new Set)).add(n),this.renderRoot!==void 0&&this.isConnected&&((l=n.hostConnected)==null||l.call(n))}removeController(n){var l;(l=this._$EO)==null||l.delete(n)}_$E_(){const n=new Map,l=this.constructor.elementProperties;for(const r of l.keys())this.hasOwnProperty(r)&&(n.set(r,this[r]),delete this[r]);n.size>0&&(this._$Ep=n)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Nu(n,this.constructor.elementStyles),n}connectedCallback(){var n;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(n=this._$EO)==null||n.forEach(l=>{var r;return(r=l.hostConnected)==null?void 0:r.call(l)})}enableUpdating(n){}disconnectedCallback(){var n;(n=this._$EO)==null||n.forEach(l=>{var r;return(r=l.hostDisconnected)==null?void 0:r.call(l)})}attributeChangedCallback(n,l,r){this._$AK(n,r)}_$EC(n,l){var h;const r=this.constructor.elementProperties.get(n),c=this.constructor._$Eu(n,r);if(c!==void 0&&r.reflect===!0){const d=(((h=r.converter)==null?void 0:h.toAttribute)!==void 0?r.converter:ba).toAttribute(l,r.type);this._$Em=n,d==null?this.removeAttribute(c):this.setAttribute(c,d),this._$Em=null}}_$AK(n,l){var h;const r=this.constructor,c=r._$Eh.get(n);if(c!==void 0&&this._$Em!==c){const d=r.getPropertyOptions(c),v=typeof d.converter=="function"?{fromAttribute:d.converter}:((h=d.converter)==null?void 0:h.fromAttribute)!==void 0?d.converter:ba;this._$Em=c,this[c]=v.fromAttribute(l,d.type),this._$Em=null}}requestUpdate(n,l,r){if(n!==void 0){if(r??(r=this.constructor.getPropertyOptions(n)),!(r.hasChanged??Ao)(this[n],l))return;this.P(n,l,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(n,l,r){this._$AL.has(n)||this._$AL.set(n,l),r.reflect===!0&&this._$Em!==n&&(this._$Ej??(this._$Ej=new Set)).add(n)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(l){Promise.reject(l)}const n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[h,d]of this._$Ep)this[h]=d;this._$Ep=void 0}const c=this.constructor.elementProperties;if(c.size>0)for(const[h,d]of c)d.wrapped!==!0||this._$AL.has(h)||this[h]===void 0||this.P(h,this[h],d)}let n=!1;const l=this._$AL;try{n=this.shouldUpdate(l),n?(this.willUpdate(l),(r=this._$EO)==null||r.forEach(c=>{var h;return(h=c.hostUpdate)==null?void 0:h.call(c)}),this.update(l)):this._$EU()}catch(c){throw n=!1,this._$EU(),c}n&&this._$AE(l)}willUpdate(n){}_$AE(n){var l;(l=this._$EO)==null||l.forEach(r=>{var c;return(c=r.hostUpdated)==null?void 0:c.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Ej&&(this._$Ej=this._$Ej.forEach(l=>this._$EC(l,this[l]))),this._$EU()}updated(n){}firstUpdated(n){}};I5.elementStyles=[],I5.shadowRootOptions={mode:"open"},I5[Mn("elementProperties")]=new Map,I5[Mn("finalized")]=new Map,ho==null||ho({ReactiveElement:I5}),(k2.reactiveElementVersions??(k2.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dn=globalThis,_a=Dn.trustedTypes,P8=_a?_a.createPolicy("lit-html",{createHTML:a=>a}):void 0,n4="$lit$",_2=`lit$${Math.random().toFixed(9).slice(2)}$`,i4="?"+_2,Ku=`<${i4}>`,n5=document,Tn=()=>n5.createComment(""),Rn=a=>a===null||typeof a!="object"&&typeof a!="function",Mo=Array.isArray,Pu=a=>Mo(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",fo=`[ 	
\f\r]`,yn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J8=/-->/g,F8=/>/g,K2=RegExp(`>|${fo}(?:([^\\s"'>=/]+)(${fo}*=${fo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),W8=/'/g,I8=/"/g,a4=/^(?:script|style|textarea|title)$/i,Ju=a=>(n,...l)=>({_$litType$:a,strings:n,values:l}),z=Ju(1),ts=Symbol.for("lit-noChange"),N1=Symbol.for("lit-nothing"),t6=new WeakMap,I2=n5.createTreeWalker(n5,129);function l4(a,n){if(!Mo(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return P8!==void 0?P8.createHTML(n):n}const Fu=(a,n)=>{const l=a.length-1,r=[];let c,h=n===2?"<svg>":n===3?"<math>":"",d=yn;for(let v=0;v<l;v++){const C=a[v];let w,M,E=-1,V=0;for(;V<C.length&&(d.lastIndex=V,M=d.exec(C),M!==null);)V=d.lastIndex,d===yn?M[1]==="!--"?d=J8:M[1]!==void 0?d=F8:M[2]!==void 0?(a4.test(M[2])&&(c=RegExp("</"+M[2],"g")),d=K2):M[3]!==void 0&&(d=K2):d===K2?M[0]===">"?(d=c??yn,E=-1):M[1]===void 0?E=-2:(E=d.lastIndex-M[2].length,w=M[1],d=M[3]===void 0?K2:M[3]==='"'?I8:W8):d===I8||d===W8?d=K2:d===J8||d===F8?d=yn:(d=K2,c=void 0);const U=d===K2&&a[v+1].startsWith("/>")?" ":"";h+=d===yn?C+Ku:E>=0?(r.push(w),C.slice(0,E)+n4+C.slice(E)+_2+U):C+_2+(E===-2?v:U)}return[l4(a,h+(a[l]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),r]};let bo=class r4{constructor({strings:n,_$litType$:l},r){let c;this.parts=[];let h=0,d=0;const v=n.length-1,C=this.parts,[w,M]=Fu(n,l);if(this.el=r4.createElement(w,r),I2.currentNode=this.el.content,l===2||l===3){const E=this.el.content.firstChild;E.replaceWith(...E.childNodes)}for(;(c=I2.nextNode())!==null&&C.length<v;){if(c.nodeType===1){if(c.hasAttributes())for(const E of c.getAttributeNames())if(E.endsWith(n4)){const V=M[d++],U=c.getAttribute(E).split(_2),X=/([.?@])?(.*)/.exec(V);C.push({type:1,index:h,name:X[2],strings:U,ctor:X[1]==="."?Iu:X[1]==="?"?th:X[1]==="@"?eh:Ta}),c.removeAttribute(E)}else E.startsWith(_2)&&(C.push({type:6,index:h}),c.removeAttribute(E));if(a4.test(c.tagName)){const E=c.textContent.split(_2),V=E.length-1;if(V>0){c.textContent=_a?_a.emptyScript:"";for(let U=0;U<V;U++)c.append(E[U],Tn()),I2.nextNode(),C.push({type:2,index:++h});c.append(E[V],Tn())}}}else if(c.nodeType===8)if(c.data===i4)C.push({type:2,index:h});else{let E=-1;for(;(E=c.data.indexOf(_2,E+1))!==-1;)C.push({type:7,index:h}),E+=_2.length-1}h++}}static createElement(n,l){const r=n5.createElement("template");return r.innerHTML=n,r}};function es(a,n,l=a,r){var d,v;if(n===ts)return n;let c=r!==void 0?(d=l._$Co)==null?void 0:d[r]:l._$Cl;const h=Rn(n)?void 0:n._$litDirective$;return(c==null?void 0:c.constructor)!==h&&((v=c==null?void 0:c._$AO)==null||v.call(c,!1),h===void 0?c=void 0:(c=new h(a),c._$AT(a,l,r)),r!==void 0?(l._$Co??(l._$Co=[]))[r]=c:l._$Cl=c),c!==void 0&&(n=es(a,c._$AS(a,n.values),c,r)),n}let Wu=class{constructor(n,l){this._$AV=[],this._$AN=void 0,this._$AD=n,this._$AM=l}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(n){const{el:{content:l},parts:r}=this._$AD,c=((n==null?void 0:n.creationScope)??n5).importNode(l,!0);I2.currentNode=c;let h=I2.nextNode(),d=0,v=0,C=r[0];for(;C!==void 0;){if(d===C.index){let w;C.type===2?w=new Do(h,h.nextSibling,this,n):C.type===1?w=new C.ctor(h,C.name,C.strings,this,n):C.type===6&&(w=new sh(h,this,n)),this._$AV.push(w),C=r[++v]}d!==(C==null?void 0:C.index)&&(h=I2.nextNode(),d++)}return I2.currentNode=n5,c}p(n){let l=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(n,r,l),l+=r.strings.length-2):r._$AI(n[l])),l++}},Do=class o4{get _$AU(){var n;return((n=this._$AM)==null?void 0:n._$AU)??this._$Cv}constructor(n,l,r,c){this.type=2,this._$AH=N1,this._$AN=void 0,this._$AA=n,this._$AB=l,this._$AM=r,this.options=c,this._$Cv=(c==null?void 0:c.isConnected)??!0}get parentNode(){let n=this._$AA.parentNode;const l=this._$AM;return l!==void 0&&(n==null?void 0:n.nodeType)===11&&(n=l.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,l=this){n=es(this,n,l),Rn(n)?n===N1||n==null||n===""?(this._$AH!==N1&&this._$AR(),this._$AH=N1):n!==this._$AH&&n!==ts&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):Pu(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==N1&&Rn(this._$AH)?this._$AA.nextSibling.data=n:this.T(n5.createTextNode(n)),this._$AH=n}$(n){var h;const{values:l,_$litType$:r}=n,c=typeof r=="number"?this._$AC(n):(r.el===void 0&&(r.el=bo.createElement(l4(r.h,r.h[0]),this.options)),r);if(((h=this._$AH)==null?void 0:h._$AD)===c)this._$AH.p(l);else{const d=new Wu(c,this),v=d.u(this.options);d.p(l),this.T(v),this._$AH=d}}_$AC(n){let l=t6.get(n.strings);return l===void 0&&t6.set(n.strings,l=new bo(n)),l}k(n){Mo(this._$AH)||(this._$AH=[],this._$AR());const l=this._$AH;let r,c=0;for(const h of n)c===l.length?l.push(r=new o4(this.O(Tn()),this.O(Tn()),this,this.options)):r=l[c],r._$AI(h),c++;c<l.length&&(this._$AR(r&&r._$AB.nextSibling,c),l.length=c)}_$AR(n=this._$AA.nextSibling,l){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,l);n&&n!==this._$AB;){const c=n.nextSibling;n.remove(),n=c}}setConnected(n){var l;this._$AM===void 0&&(this._$Cv=n,(l=this._$AP)==null||l.call(this,n))}},Ta=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(n,l,r,c,h){this.type=1,this._$AH=N1,this._$AN=void 0,this.element=n,this.name=l,this._$AM=c,this.options=h,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=N1}_$AI(n,l=this,r,c){const h=this.strings;let d=!1;if(h===void 0)n=es(this,n,l,0),d=!Rn(n)||n!==this._$AH&&n!==ts,d&&(this._$AH=n);else{const v=n;let C,w;for(n=h[0],C=0;C<h.length-1;C++)w=es(this,v[r+C],l,C),w===ts&&(w=this._$AH[C]),d||(d=!Rn(w)||w!==this._$AH[C]),w===N1?n=N1:n!==N1&&(n+=(w??"")+h[C+1]),this._$AH[C]=w}d&&!c&&this.j(n)}j(n){n===N1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}},Iu=class extends Ta{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===N1?void 0:n}},th=class extends Ta{constructor(){super(...arguments),this.type=4}j(n){this.element.toggleAttribute(this.name,!!n&&n!==N1)}},eh=class extends Ta{constructor(n,l,r,c,h){super(n,l,r,c,h),this.type=5}_$AI(n,l=this){if((n=es(this,n,l,0)??N1)===ts)return;const r=this._$AH,c=n===N1&&r!==N1||n.capture!==r.capture||n.once!==r.once||n.passive!==r.passive,h=n!==N1&&(r===N1||c);c&&this.element.removeEventListener(this.name,this,r),h&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){var l;typeof this._$AH=="function"?this._$AH.call(((l=this.options)==null?void 0:l.host)??this.element,n):this._$AH.handleEvent(n)}},sh=class{constructor(n,l,r){this.element=n,this.type=6,this._$AN=void 0,this._$AM=l,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(n){es(this,n)}};const yo=Dn.litHtmlPolyfillSupport;yo==null||yo(bo,Do),(Dn.litHtmlVersions??(Dn.litHtmlVersions=[])).push("3.2.1");const nh=(a,n,l)=>{const r=(l==null?void 0:l.renderBefore)??n;let c=r._$litPart$;if(c===void 0){const h=(l==null?void 0:l.renderBefore)??null;r._$litPart$=c=new Do(n.insertBefore(Tn(),h),h,void 0,l??{})}return c._$AI(a),c};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i1=class extends I5{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var l;const n=super.createRenderRoot();return(l=this.renderOptions).renderBefore??(l.renderBefore=n.firstChild),n}update(n){const l=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=nh(l,this.renderRoot,this.renderOptions)}connectedCallback(){var n;super.connectedCallback(),(n=this._$Do)==null||n.setConnected(!0)}disconnectedCallback(){var n;super.disconnectedCallback(),(n=this._$Do)==null||n.setConnected(!1)}render(){return ts}};var e4;i1._$litElement$=!0,i1.finalized=!0,(e4=globalThis.litElementHydrateSupport)==null||e4.call(globalThis,{LitElement:i1});const po=globalThis.litElementPolyfillSupport;po==null||po({LitElement:i1});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ih={attribute:!0,type:String,converter:ba,reflect:!1,hasChanged:Ao},ah=(a=ih,n,l)=>{const{kind:r,metadata:c}=l;let h=globalThis.litPropertyMetadata.get(c);if(h===void 0&&globalThis.litPropertyMetadata.set(c,h=new Map),h.set(l.name,a),r==="accessor"){const{name:d}=l;return{set(v){const C=n.get.call(this);n.set.call(this,v),this.requestUpdate(d,C,a)},init(v){return v!==void 0&&this.P(d,void 0,a),v}}}if(r==="setter"){const{name:d}=l;return function(v){const C=this[d];n.call(this,v),this.requestUpdate(d,C,a)}}throw Error("Unsupported decorator location: "+r)};function _(a){return(n,l)=>typeof l=="object"?ah(a,n,l):((r,c,h)=>{const d=c.hasOwnProperty(h);return c.constructor.createProperty(h,d?{...r,wrapped:!0}:r),d?Object.getOwnPropertyDescriptor(c,h):void 0})(a,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ze(a){return _({...a,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d1=a=>a??N1;/*!
   * New York State Design System (v1.3.0)
   * Description: A design system for New York State's digital products.
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
 */const lh=C1`
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
`;/*!
   * ▒█▄░▒█ ▒█░░▒█ ▒█▀▀▀█ ▒█▀▀▄ ▒█▀▀▀█ 
   * ▒█▒█▒█ ▒█▄▄▄█ ░▀▀▀▄▄ ▒█░▒█ ░▀▀▀▄▄ 
   * ▒█░░▀█ ░░▒█░░ ▒█▄▄▄█ ▒█▄▄▀ ▒█▄▄▄█
   * 
   * Icon Component
   * Part of the New York State Design System
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fa=globalThis,zo=fa.ShadowRoot&&(fa.ShadyCSS===void 0||fa.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c4=Symbol(),e6=new WeakMap;let rh=class{constructor(a,n,l){if(this._$cssResult$=!0,l!==c4)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a,this.t=n}get styleSheet(){let a=this.o;const n=this.t;if(zo&&a===void 0){const l=n!==void 0&&n.length===1;l&&(a=e6.get(n)),a===void 0&&((this.o=a=new CSSStyleSheet).replaceSync(this.cssText),l&&e6.set(n,a))}return a}toString(){return this.cssText}};const oh=a=>new rh(typeof a=="string"?a:a+"",void 0,c4),ch=(a,n)=>{if(zo)a.adoptedStyleSheets=n.map(l=>l instanceof CSSStyleSheet?l:l.styleSheet);else for(const l of n){const r=document.createElement("style"),c=fa.litNonce;c!==void 0&&r.setAttribute("nonce",c),r.textContent=l.cssText,a.appendChild(r)}},s6=zo?a=>a:a=>a instanceof CSSStyleSheet?(n=>{let l="";for(const r of n.cssRules)l+=r.cssText;return oh(l)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:uh,defineProperty:hh,getOwnPropertyDescriptor:dh,getOwnPropertyNames:fh,getOwnPropertySymbols:yh,getPrototypeOf:ph}=Object,ss=globalThis,n6=ss.trustedTypes,vh=n6?n6.emptyScript:"",i6=ss.reactiveElementPolyfillSupport,zn=(a,n)=>a,ma={toAttribute(a,n){switch(n){case Boolean:a=a?vh:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,n){let l=a;switch(n){case Boolean:l=a!==null;break;case Number:l=a===null?null:Number(a);break;case Object:case Array:try{l=JSON.parse(a)}catch{l=null}}return l}},Lo=(a,n)=>!uh(a,n),a6={attribute:!0,type:String,converter:ma,reflect:!1,hasChanged:Lo};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ss.litPropertyMetadata??(ss.litPropertyMetadata=new WeakMap);let pn=class extends HTMLElement{static addInitializer(a){this._$Ei(),(this.l??(this.l=[])).push(a)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(a,n=a6){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(a,n),!n.noAccessor){const l=Symbol(),r=this.getPropertyDescriptor(a,l,n);r!==void 0&&hh(this.prototype,a,r)}}static getPropertyDescriptor(a,n,l){const{get:r,set:c}=dh(this.prototype,a)??{get(){return this[n]},set(h){this[n]=h}};return{get(){return r==null?void 0:r.call(this)},set(h){const d=r==null?void 0:r.call(this);c.call(this,h),this.requestUpdate(a,d,l)},configurable:!0,enumerable:!0}}static getPropertyOptions(a){return this.elementProperties.get(a)??a6}static _$Ei(){if(this.hasOwnProperty(zn("elementProperties")))return;const a=ph(this);a.finalize(),a.l!==void 0&&(this.l=[...a.l]),this.elementProperties=new Map(a.elementProperties)}static finalize(){if(this.hasOwnProperty(zn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(zn("properties"))){const n=this.properties,l=[...fh(n),...yh(n)];for(const r of l)this.createProperty(r,n[r])}const a=this[Symbol.metadata];if(a!==null){const n=litPropertyMetadata.get(a);if(n!==void 0)for(const[l,r]of n)this.elementProperties.set(l,r)}this._$Eh=new Map;for(const[n,l]of this.elementProperties){const r=this._$Eu(n,l);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(a){const n=[];if(Array.isArray(a)){const l=new Set(a.flat(1/0).reverse());for(const r of l)n.unshift(s6(r))}else a!==void 0&&n.push(s6(a));return n}static _$Eu(a,n){const l=n.attribute;return l===!1?void 0:typeof l=="string"?l:typeof a=="string"?a.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var a;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(a=this.constructor.l)==null||a.forEach(n=>n(this))}addController(a){var n;(this._$EO??(this._$EO=new Set)).add(a),this.renderRoot!==void 0&&this.isConnected&&((n=a.hostConnected)==null||n.call(a))}removeController(a){var n;(n=this._$EO)==null||n.delete(a)}_$E_(){const a=new Map,n=this.constructor.elementProperties;for(const l of n.keys())this.hasOwnProperty(l)&&(a.set(l,this[l]),delete this[l]);a.size>0&&(this._$Ep=a)}createRenderRoot(){const a=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ch(a,this.constructor.elementStyles),a}connectedCallback(){var a;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(a=this._$EO)==null||a.forEach(n=>{var l;return(l=n.hostConnected)==null?void 0:l.call(n)})}enableUpdating(a){}disconnectedCallback(){var a;(a=this._$EO)==null||a.forEach(n=>{var l;return(l=n.hostDisconnected)==null?void 0:l.call(n)})}attributeChangedCallback(a,n,l){this._$AK(a,l)}_$EC(a,n){var l;const r=this.constructor.elementProperties.get(a),c=this.constructor._$Eu(a,r);if(c!==void 0&&r.reflect===!0){const h=(((l=r.converter)==null?void 0:l.toAttribute)!==void 0?r.converter:ma).toAttribute(n,r.type);this._$Em=a,h==null?this.removeAttribute(c):this.setAttribute(c,h),this._$Em=null}}_$AK(a,n){var l;const r=this.constructor,c=r._$Eh.get(a);if(c!==void 0&&this._$Em!==c){const h=r.getPropertyOptions(c),d=typeof h.converter=="function"?{fromAttribute:h.converter}:((l=h.converter)==null?void 0:l.fromAttribute)!==void 0?h.converter:ma;this._$Em=c,this[c]=d.fromAttribute(n,h.type),this._$Em=null}}requestUpdate(a,n,l){if(a!==void 0){if(l??(l=this.constructor.getPropertyOptions(a)),!(l.hasChanged??Lo)(this[a],n))return;this.P(a,n,l)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(a,n,l){this._$AL.has(a)||this._$AL.set(a,n),l.reflect===!0&&this._$Em!==a&&(this._$Ej??(this._$Ej=new Set)).add(a)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const a=this.scheduleUpdate();return a!=null&&await a,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var a;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[c,h]of this._$Ep)this[c]=h;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[c,h]of r)h.wrapped!==!0||this._$AL.has(c)||this[c]===void 0||this.P(c,this[c],h)}let n=!1;const l=this._$AL;try{n=this.shouldUpdate(l),n?(this.willUpdate(l),(a=this._$EO)==null||a.forEach(r=>{var c;return(c=r.hostUpdate)==null?void 0:c.call(r)}),this.update(l)):this._$EU()}catch(r){throw n=!1,this._$EU(),r}n&&this._$AE(l)}willUpdate(a){}_$AE(a){var n;(n=this._$EO)==null||n.forEach(l=>{var r;return(r=l.hostUpdated)==null?void 0:r.call(l)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(a)),this.updated(a)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(a){return!0}update(a){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(a){}firstUpdated(a){}};pn.elementStyles=[],pn.shadowRootOptions={mode:"open"},pn[zn("elementProperties")]=new Map,pn[zn("finalized")]=new Map,i6==null||i6({ReactiveElement:pn}),(ss.reactiveElementVersions??(ss.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ch={attribute:!0,type:String,converter:ma,reflect:!1,hasChanged:Lo},gh=(a=Ch,n,l)=>{const{kind:r,metadata:c}=l;let h=globalThis.litPropertyMetadata.get(c);if(h===void 0&&globalThis.litPropertyMetadata.set(c,h=new Map),h.set(l.name,a),r==="accessor"){const{name:d}=l;return{set(v){const C=n.get.call(this);n.set.call(this,v),this.requestUpdate(d,C,a)},init(v){return v!==void 0&&this.P(d,void 0,a),v}}}if(r==="setter"){const{name:d}=l;return function(v){const C=this[d];n.call(this,v),this.requestUpdate(d,C,a)}}throw Error("Unsupported decorator location: "+r)};function hs(a){return(n,l)=>typeof l=="object"?gh(a,n,l):((r,c,h)=>{const d=c.hasOwnProperty(h);return c.constructor.createProperty(h,d?{...r,wrapped:!0}:r),d?Object.getOwnPropertyDescriptor(c,h):void 0})(a,n,l)}const bh={account_circle:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
</svg>`},_h=C1`
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
`;var mh=Object.defineProperty,xh=Object.getOwnPropertyDescriptor,ds=(a,n,l,r)=>{for(var c=r>1?void 0:r?xh(n,l):n,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=(r?d(n,l,c):d(c))||c);return r&&c&&mh(n,l,c),c},vn;const r5=(vn=class extends i1{constructor(){super(...arguments),this.name="",this.label="",this.rotate="0",this.flip="",this.color="",this._size="sm"}get size(){return this._size}set size(a){this._size=vn.VALID_TYPES.includes(a)?a:"sm"}getIcon(){const a=bh[this.name];if(!a)return null;const n=new DOMParser().parseFromString(a,"image/svg+xml").documentElement;return n instanceof SVGElement?(n.setAttribute("role","img"),this.label?(n.setAttribute("aria-label",this.label),n.removeAttribute("aria-hidden")):(n.setAttribute("aria-hidden","true"),n.removeAttribute("aria-label")),n.style.rotate=`${this.rotate}deg`,n.style.color=this.color||"currentcolor",n.classList.add(`nys-icon--${this.size}`),n.classList.add("nys-icon--svg"),this.flip&&n.classList.add(`nys-icon--flip-${this.flip}`),n):null}render(){const a=this.getIcon();return a?z`${a}`:null}},vn.styles=_h,vn.VALID_TYPES=["2xs","xs","sm","md","lg","xl","2xl","3xl","4xl","12","16","24","32","40","48","64"],vn);ds([hs({type:String,reflect:!0})],r5.prototype,"name",2);ds([hs({type:String})],r5.prototype,"label",2);ds([hs({type:String})],r5.prototype,"rotate",2);ds([hs({type:String})],r5.prototype,"flip",2);ds([hs({type:String})],r5.prototype,"color",2);ds([hs({reflect:!0})],r5.prototype,"size",1);let wh=r5;customElements.get("nys-icon")||customElements.define("nys-icon",wh);/*!
   * 
   * ▒█▄░▒█ ▒█░░▒█ ▒█▀▀▀█ ▒█▀▀▄ ▒█▀▀▀█ 
   * ▒█▒█▒█ ▒█▄▄▄█ ░▀▀▀▄▄ ▒█░▒█ ░▀▀▀▄▄ 
   * ▒█░░▀█ ░░▒█░░ ▒█▄▄▄█ ▒█▄▄▀ ▒█▄▄▄█
   * 
   * Button Component
   * Part of the New York State Design System
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ya=globalThis,Ho=ya.ShadowRoot&&(ya.ShadyCSS===void 0||ya.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,u4=Symbol(),l6=new WeakMap;let kh=class{constructor(a,n,l){if(this._$cssResult$=!0,l!==u4)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a,this.t=n}get styleSheet(){let a=this.o;const n=this.t;if(Ho&&a===void 0){const l=n!==void 0&&n.length===1;l&&(a=l6.get(n)),a===void 0&&((this.o=a=new CSSStyleSheet).replaceSync(this.cssText),l&&l6.set(n,a))}return a}toString(){return this.cssText}};const Sh=a=>new kh(typeof a=="string"?a:a+"",void 0,u4),Eh=(a,n)=>{if(Ho)a.adoptedStyleSheets=n.map(l=>l instanceof CSSStyleSheet?l:l.styleSheet);else for(const l of n){const r=document.createElement("style"),c=ya.litNonce;c!==void 0&&r.setAttribute("nonce",c),r.textContent=l.cssText,a.appendChild(r)}},r6=Ho?a=>a:a=>a instanceof CSSStyleSheet?(n=>{let l="";for(const r of n.cssRules)l+=r.cssText;return Sh(l)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$h,defineProperty:Ah,getOwnPropertyDescriptor:Mh,getOwnPropertyNames:Dh,getOwnPropertySymbols:zh,getPrototypeOf:Lh}=Object,ns=globalThis,o6=ns.trustedTypes,Hh=o6?o6.emptyScript:"",c6=ns.reactiveElementPolyfillSupport,Ln=(a,n)=>a,xa={toAttribute(a,n){switch(n){case Boolean:a=a?Hh:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,n){let l=a;switch(n){case Boolean:l=a!==null;break;case Number:l=a===null?null:Number(a);break;case Object:case Array:try{l=JSON.parse(a)}catch{l=null}}return l}},Uo=(a,n)=>!$h(a,n),u6={attribute:!0,type:String,converter:xa,reflect:!1,hasChanged:Uo};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ns.litPropertyMetadata??(ns.litPropertyMetadata=new WeakMap);let Cn=class extends HTMLElement{static addInitializer(a){this._$Ei(),(this.l??(this.l=[])).push(a)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(a,n=u6){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(a,n),!n.noAccessor){const l=Symbol(),r=this.getPropertyDescriptor(a,l,n);r!==void 0&&Ah(this.prototype,a,r)}}static getPropertyDescriptor(a,n,l){const{get:r,set:c}=Mh(this.prototype,a)??{get(){return this[n]},set(h){this[n]=h}};return{get(){return r==null?void 0:r.call(this)},set(h){const d=r==null?void 0:r.call(this);c.call(this,h),this.requestUpdate(a,d,l)},configurable:!0,enumerable:!0}}static getPropertyOptions(a){return this.elementProperties.get(a)??u6}static _$Ei(){if(this.hasOwnProperty(Ln("elementProperties")))return;const a=Lh(this);a.finalize(),a.l!==void 0&&(this.l=[...a.l]),this.elementProperties=new Map(a.elementProperties)}static finalize(){if(this.hasOwnProperty(Ln("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ln("properties"))){const n=this.properties,l=[...Dh(n),...zh(n)];for(const r of l)this.createProperty(r,n[r])}const a=this[Symbol.metadata];if(a!==null){const n=litPropertyMetadata.get(a);if(n!==void 0)for(const[l,r]of n)this.elementProperties.set(l,r)}this._$Eh=new Map;for(const[n,l]of this.elementProperties){const r=this._$Eu(n,l);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(a){const n=[];if(Array.isArray(a)){const l=new Set(a.flat(1/0).reverse());for(const r of l)n.unshift(r6(r))}else a!==void 0&&n.push(r6(a));return n}static _$Eu(a,n){const l=n.attribute;return l===!1?void 0:typeof l=="string"?l:typeof a=="string"?a.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var a;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(a=this.constructor.l)==null||a.forEach(n=>n(this))}addController(a){var n;(this._$EO??(this._$EO=new Set)).add(a),this.renderRoot!==void 0&&this.isConnected&&((n=a.hostConnected)==null||n.call(a))}removeController(a){var n;(n=this._$EO)==null||n.delete(a)}_$E_(){const a=new Map,n=this.constructor.elementProperties;for(const l of n.keys())this.hasOwnProperty(l)&&(a.set(l,this[l]),delete this[l]);a.size>0&&(this._$Ep=a)}createRenderRoot(){const a=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Eh(a,this.constructor.elementStyles),a}connectedCallback(){var a;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(a=this._$EO)==null||a.forEach(n=>{var l;return(l=n.hostConnected)==null?void 0:l.call(n)})}enableUpdating(a){}disconnectedCallback(){var a;(a=this._$EO)==null||a.forEach(n=>{var l;return(l=n.hostDisconnected)==null?void 0:l.call(n)})}attributeChangedCallback(a,n,l){this._$AK(a,l)}_$EC(a,n){var l;const r=this.constructor.elementProperties.get(a),c=this.constructor._$Eu(a,r);if(c!==void 0&&r.reflect===!0){const h=(((l=r.converter)==null?void 0:l.toAttribute)!==void 0?r.converter:xa).toAttribute(n,r.type);this._$Em=a,h==null?this.removeAttribute(c):this.setAttribute(c,h),this._$Em=null}}_$AK(a,n){var l;const r=this.constructor,c=r._$Eh.get(a);if(c!==void 0&&this._$Em!==c){const h=r.getPropertyOptions(c),d=typeof h.converter=="function"?{fromAttribute:h.converter}:((l=h.converter)==null?void 0:l.fromAttribute)!==void 0?h.converter:xa;this._$Em=c,this[c]=d.fromAttribute(n,h.type),this._$Em=null}}requestUpdate(a,n,l){if(a!==void 0){if(l??(l=this.constructor.getPropertyOptions(a)),!(l.hasChanged??Uo)(this[a],n))return;this.P(a,n,l)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(a,n,l){this._$AL.has(a)||this._$AL.set(a,n),l.reflect===!0&&this._$Em!==a&&(this._$Ej??(this._$Ej=new Set)).add(a)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const a=this.scheduleUpdate();return a!=null&&await a,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var a;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[c,h]of this._$Ep)this[c]=h;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[c,h]of r)h.wrapped!==!0||this._$AL.has(c)||this[c]===void 0||this.P(c,this[c],h)}let n=!1;const l=this._$AL;try{n=this.shouldUpdate(l),n?(this.willUpdate(l),(a=this._$EO)==null||a.forEach(r=>{var c;return(c=r.hostUpdate)==null?void 0:c.call(r)}),this.update(l)):this._$EU()}catch(r){throw n=!1,this._$EU(),r}n&&this._$AE(l)}willUpdate(a){}_$AE(a){var n;(n=this._$EO)==null||n.forEach(l=>{var r;return(r=l.hostUpdated)==null?void 0:r.call(l)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(a)),this.updated(a)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(a){return!0}update(a){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(a){}firstUpdated(a){}};Cn.elementStyles=[],Cn.shadowRootOptions={mode:"open"},Cn[Ln("elementProperties")]=new Map,Cn[Ln("finalized")]=new Map,c6==null||c6({ReactiveElement:Cn}),(ns.reactiveElementVersions??(ns.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uh={attribute:!0,type:String,converter:xa,reflect:!1,hasChanged:Uo},Oh=(a=Uh,n,l)=>{const{kind:r,metadata:c}=l;let h=globalThis.litPropertyMetadata.get(c);if(h===void 0&&globalThis.litPropertyMetadata.set(c,h=new Map),h.set(l.name,a),r==="accessor"){const{name:d}=l;return{set(v){const C=n.get.call(this);n.set.call(this,v),this.requestUpdate(d,C,a)},init(v){return v!==void 0&&this.P(d,void 0,a),v}}}if(r==="setter"){const{name:d}=l;return function(v){const C=this[d];n.call(this,v),this.requestUpdate(d,C,a)}}throw Error("Unsupported decorator location: "+r)};function G1(a){return(n,l)=>typeof l=="object"?Oh(a,n,l):((r,c,h)=>{const d=c.hasOwnProperty(h);return c.constructor.createProperty(h,d?{...r,wrapped:!0}:r),d?Object.getOwnPropertyDescriptor(c,h):void 0})(a,n,l)}const Vh=C1`
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

  .nys-button:focus-visible {
    outline-offset: var(--_nys-button-offset-focus);
    outline: solid var(--_nys-button-width-focus) var(--_nys-button-color-focus);
  }

  .nys-button__text {
    display: flex;
    align-items: center;
    user-select: none;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wa=globalThis,ka=wa.trustedTypes,h6=ka?ka.createPolicy("lit-html",{createHTML:a=>a}):void 0,h4="$lit$",m2=`lit$${Math.random().toFixed(9).slice(2)}$`,d4="?"+m2,Th=`<${d4}>`,i5=document,Sa=()=>i5.createComment(""),Zn=a=>a===null||typeof a!="object"&&typeof a!="function",Oo=Array.isArray,Rh=a=>Oo(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",vo=`[ 	
\f\r]`,gn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,d6=/-->/g,f6=/>/g,P2=RegExp(`>|${vo}(?:([^\\s"'>=/]+)(${vo}*=${vo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),y6=/'/g,p6=/"/g,f4=/^(?:script|style|textarea|title)$/i,Nn=Symbol.for("lit-noChange"),B1=Symbol.for("lit-nothing"),v6=new WeakMap,t5=i5.createTreeWalker(i5,129);function y4(a,n){if(!Oo(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return h6!==void 0?h6.createHTML(n):n}const Zh=(a,n)=>{const l=a.length-1,r=[];let c,h=n===2?"<svg>":n===3?"<math>":"",d=gn;for(let v=0;v<l;v++){const C=a[v];let w,M,E=-1,V=0;for(;V<C.length&&(d.lastIndex=V,M=d.exec(C),M!==null);)V=d.lastIndex,d===gn?M[1]==="!--"?d=d6:M[1]!==void 0?d=f6:M[2]!==void 0?(f4.test(M[2])&&(c=RegExp("</"+M[2],"g")),d=P2):M[3]!==void 0&&(d=P2):d===P2?M[0]===">"?(d=c??gn,E=-1):M[1]===void 0?E=-2:(E=d.lastIndex-M[2].length,w=M[1],d=M[3]===void 0?P2:M[3]==='"'?p6:y6):d===p6||d===y6?d=P2:d===d6||d===f6?d=gn:(d=P2,c=void 0);const U=d===P2&&a[v+1].startsWith("/>")?" ":"";h+=d===gn?C+Th:E>=0?(r.push(w),C.slice(0,E)+h4+C.slice(E)+m2+U):C+m2+(E===-2?v:U)}return[y4(a,h+(a[l]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),r]};let _o=class p4{constructor({strings:n,_$litType$:l},r){let c;this.parts=[];let h=0,d=0;const v=n.length-1,C=this.parts,[w,M]=Zh(n,l);if(this.el=p4.createElement(w,r),t5.currentNode=this.el.content,l===2||l===3){const E=this.el.content.firstChild;E.replaceWith(...E.childNodes)}for(;(c=t5.nextNode())!==null&&C.length<v;){if(c.nodeType===1){if(c.hasAttributes())for(const E of c.getAttributeNames())if(E.endsWith(h4)){const V=M[d++],U=c.getAttribute(E).split(m2),X=/([.?@])?(.*)/.exec(V);C.push({type:1,index:h,name:X[2],strings:U,ctor:X[1]==="."?Bh:X[1]==="?"?qh:X[1]==="@"?jh:Ra}),c.removeAttribute(E)}else E.startsWith(m2)&&(C.push({type:6,index:h}),c.removeAttribute(E));if(f4.test(c.tagName)){const E=c.textContent.split(m2),V=E.length-1;if(V>0){c.textContent=ka?ka.emptyScript:"";for(let U=0;U<V;U++)c.append(E[U],Sa()),t5.nextNode(),C.push({type:2,index:++h});c.append(E[V],Sa())}}}else if(c.nodeType===8)if(c.data===d4)C.push({type:2,index:h});else{let E=-1;for(;(E=c.data.indexOf(m2,E+1))!==-1;)C.push({type:7,index:h}),E+=m2.length-1}h++}}static createElement(n,l){const r=i5.createElement("template");return r.innerHTML=n,r}};function is(a,n,l=a,r){var c,h;if(n===Nn)return n;let d=r!==void 0?(c=l._$Co)==null?void 0:c[r]:l._$Cl;const v=Zn(n)?void 0:n._$litDirective$;return(d==null?void 0:d.constructor)!==v&&((h=d==null?void 0:d._$AO)==null||h.call(d,!1),v===void 0?d=void 0:(d=new v(a),d._$AT(a,l,r)),r!==void 0?(l._$Co??(l._$Co=[]))[r]=d:l._$Cl=d),d!==void 0&&(n=is(a,d._$AS(a,n.values),d,r)),n}let Nh=class{constructor(a,n){this._$AV=[],this._$AN=void 0,this._$AD=a,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(a){const{el:{content:n},parts:l}=this._$AD,r=((a==null?void 0:a.creationScope)??i5).importNode(n,!0);t5.currentNode=r;let c=t5.nextNode(),h=0,d=0,v=l[0];for(;v!==void 0;){if(h===v.index){let C;v.type===2?C=new v4(c,c.nextSibling,this,a):v.type===1?C=new v.ctor(c,v.name,v.strings,this,a):v.type===6&&(C=new Gh(c,this,a)),this._$AV.push(C),v=l[++d]}h!==(v==null?void 0:v.index)&&(c=t5.nextNode(),h++)}return t5.currentNode=i5,r}p(a){let n=0;for(const l of this._$AV)l!==void 0&&(l.strings!==void 0?(l._$AI(a,l,n),n+=l.strings.length-2):l._$AI(a[n])),n++}},v4=class C4{get _$AU(){var n;return((n=this._$AM)==null?void 0:n._$AU)??this._$Cv}constructor(n,l,r,c){this.type=2,this._$AH=B1,this._$AN=void 0,this._$AA=n,this._$AB=l,this._$AM=r,this.options=c,this._$Cv=(c==null?void 0:c.isConnected)??!0}get parentNode(){let n=this._$AA.parentNode;const l=this._$AM;return l!==void 0&&(n==null?void 0:n.nodeType)===11&&(n=l.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,l=this){n=is(this,n,l),Zn(n)?n===B1||n==null||n===""?(this._$AH!==B1&&this._$AR(),this._$AH=B1):n!==this._$AH&&n!==Nn&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):Rh(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==B1&&Zn(this._$AH)?this._$AA.nextSibling.data=n:this.T(i5.createTextNode(n)),this._$AH=n}$(n){var l;const{values:r,_$litType$:c}=n,h=typeof c=="number"?this._$AC(n):(c.el===void 0&&(c.el=_o.createElement(y4(c.h,c.h[0]),this.options)),c);if(((l=this._$AH)==null?void 0:l._$AD)===h)this._$AH.p(r);else{const d=new Nh(h,this),v=d.u(this.options);d.p(r),this.T(v),this._$AH=d}}_$AC(n){let l=v6.get(n.strings);return l===void 0&&v6.set(n.strings,l=new _o(n)),l}k(n){Oo(this._$AH)||(this._$AH=[],this._$AR());const l=this._$AH;let r,c=0;for(const h of n)c===l.length?l.push(r=new C4(this.O(Sa()),this.O(Sa()),this,this.options)):r=l[c],r._$AI(h),c++;c<l.length&&(this._$AR(r&&r._$AB.nextSibling,c),l.length=c)}_$AR(n=this._$AA.nextSibling,l){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,l);n&&n!==this._$AB;){const c=n.nextSibling;n.remove(),n=c}}setConnected(n){var l;this._$AM===void 0&&(this._$Cv=n,(l=this._$AP)==null||l.call(this,n))}},Ra=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(a,n,l,r,c){this.type=1,this._$AH=B1,this._$AN=void 0,this.element=a,this.name=n,this._$AM=r,this.options=c,l.length>2||l[0]!==""||l[1]!==""?(this._$AH=Array(l.length-1).fill(new String),this.strings=l):this._$AH=B1}_$AI(a,n=this,l,r){const c=this.strings;let h=!1;if(c===void 0)a=is(this,a,n,0),h=!Zn(a)||a!==this._$AH&&a!==Nn,h&&(this._$AH=a);else{const d=a;let v,C;for(a=c[0],v=0;v<c.length-1;v++)C=is(this,d[l+v],n,v),C===Nn&&(C=this._$AH[v]),h||(h=!Zn(C)||C!==this._$AH[v]),C===B1?a=B1:a!==B1&&(a+=(C??"")+c[v+1]),this._$AH[v]=C}h&&!r&&this.j(a)}j(a){a===B1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,a??"")}},Bh=class extends Ra{constructor(){super(...arguments),this.type=3}j(a){this.element[this.name]=a===B1?void 0:a}},qh=class extends Ra{constructor(){super(...arguments),this.type=4}j(a){this.element.toggleAttribute(this.name,!!a&&a!==B1)}},jh=class extends Ra{constructor(a,n,l,r,c){super(a,n,l,r,c),this.type=5}_$AI(a,n=this){if((a=is(this,a,n,0)??B1)===Nn)return;const l=this._$AH,r=a===B1&&l!==B1||a.capture!==l.capture||a.once!==l.once||a.passive!==l.passive,c=a!==B1&&(l===B1||r);r&&this.element.removeEventListener(this.name,this,l),c&&this.element.addEventListener(this.name,this,a),this._$AH=a}handleEvent(a){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,a):this._$AH.handleEvent(a)}},Gh=class{constructor(a,n,l){this.element=a,this.type=6,this._$AN=void 0,this._$AM=n,this.options=l}get _$AU(){return this._$AM._$AU}_$AI(a){is(this,a)}};const C6=wa.litHtmlPolyfillSupport;C6==null||C6(_o,v4),(wa.litHtmlVersions??(wa.litHtmlVersions=[])).push("3.2.1");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p2=a=>a??B1;var Yh=Object.defineProperty,Xh=Object.getOwnPropertyDescriptor,Y1=(a,n,l,r)=>{for(var c=r>1?void 0:r?Xh(n,l):n,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=(r?d(n,l,c):d(c))||c);return r&&c&&Yh(n,l,c),c};let Qh=0;var Qt;const O1=(Qt=class extends i1{constructor(){super(),this.id="",this.name="",this._size="md",this.fullWidth=!1,this._variant="filled",this.inverted=!1,this.label="",this.ariaLabel="",this.prefixIcon="",this.suffixIcon="",this.circle=!1,this.icon="",this.disabled=!1,this.form="",this.value="",this._type="button",this.onClick=()=>{},this.href="",this._target="_self",this._internals=this.attachInternals()}get size(){return this._size}set size(a){this._size=Qt.VALID_SIZES.includes(a)?a:"md"}get variant(){return this._variant}set variant(a){this._variant=Qt.VALID_VARIANTS.includes(a)?a:"filled"}get type(){return this._type}set type(a){this._type=Qt.VALID_TYPES.includes(a)?a:"button"}get target(){return this._target}set target(a){this._target=Qt.VALID_TARGETS.includes(a)?a:"_self"}connectedCallback(){super.connectedCallback(),this.id||(this.id=this._generateUniqueId())}_generateUniqueId(){return`nys-button-${Date.now()}-${Qh++}`}_manageFormAction(a){typeof this.onClick=="function"&&this.onClick(a);const n=this._internals.form;if(n)switch(this.type){case"submit":n.requestSubmit();break;case"reset":n.reset();break}}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this.dispatchEvent(new Event("nys-blur"))}_handleClick(a){if(this.disabled){a.preventDefault();return}this._manageFormAction(a),this.dispatchEvent(new Event("nys-click"))}_handleKeydown(a){(a.code==="Space"||a.code==="Enter"||a.key===" "||a.key==="Enter")&&(a.preventDefault(),this.disabled||this._manageFormAction(a))}render(){return z`
      ${this.href?z`
            <div class="nys-button__linkwrapper">
              <a
                class="nys-button"
                id=${p2(this.id)}
                name=${p2(this.name?this.name:void 0)}
                ?disabled=${this.disabled}
                aria-disabled="${this.disabled?"true":"false"}"
                form=${p2(this.form?this.form:void 0)}
                value=${p2(this.value?this.value:void 0)}
                href=${this.href}
                target=${this.target}
                aria-label=${this.ariaLabel||this.label||(this.circle?this.icon:null)||"button"}
                @click=${this._handleClick}
                @focus="${this._handleFocus}"
                @blur="${this._handleBlur}"
              >
                ${this.prefixIcon&&this.variant!=="text"?z`<slot name="prefix-icon">
                      <nys-icon size="16" name=${this.prefixIcon}></nys-icon>
                    </slot>`:""}
                ${this.label&&!this.circle?z`<label class="nys-button__text">${this.label}</label>`:""}
                ${this.suffixIcon&&this.variant!=="text"?z`<slot name="suffix-icon">
                      <nys-icon size="16" name=${this.suffixIcon}></nys-icon>
                    </slot>`:""}
                ${this.circle&&this.icon?z`<slot name="circle-icon"
                      ><nys-icon
                        size=${this.size==="sm"?"24":this.size==="lg"?"40":"32"}
                        name=${this.icon}
                      ></nys-icon
                    ></slot>`:""}
              </a>
            </div>
          `:z`
            <button
              class="nys-button"
              id=${p2(this.id)}
              name=${p2(this.name?this.name:void 0)}
              ?disabled=${this.disabled}
              form=${p2(this.form?this.form:void 0)}
              value=${p2(this.value?this.value:void 0)}
              type=${this.type}
              aria-label=${this.ariaLabel||this.label||(this.circle?this.icon:null)||"button"}
              @click=${this._handleClick}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
              @keydown="${this._handleKeydown}"
            >
              ${this.prefixIcon&&this.variant!=="text"?z`<slot name="prefix-icon">
                    <nys-icon size="16" name=${this.prefixIcon}></nys-icon>
                  </slot>`:""}
              ${this.label&&!this.circle?z`<label class="nys-button__text">${this.label}</label>`:""}
              ${this.suffixIcon&&this.variant!=="text"?z`<slot name="suffix-icon">
                    <nys-icon size="16" name=${this.suffixIcon}></nys-icon>
                  </slot>`:""}
              ${this.circle&&this.icon?z`<slot name="circle-icon">
                    <nys-icon
                      size=${this.size==="sm"?"24":this.size==="lg"?"40":"32"}
                      name=${this.icon}
                    ></nys-icon>
                  </slot>`:""}
            </button>
          `}
    `}},Qt.VALID_SIZES=["sm","md","lg"],Qt.VALID_VARIANTS=["filled","outline","ghost","text"],Qt.VALID_TYPES=["submit","reset","button"],Qt.VALID_TARGETS=["_self","_blank","_parent","_top","framename"],Qt.styles=Vh,Qt.formAssociated=!0,Qt);Y1([G1({type:String})],O1.prototype,"id",2);Y1([G1({type:String,reflect:!0})],O1.prototype,"name",2);Y1([G1({reflect:!0})],O1.prototype,"size",1);Y1([G1({type:Boolean,reflect:!0})],O1.prototype,"fullWidth",2);Y1([G1({reflect:!0})],O1.prototype,"variant",1);Y1([G1({type:Boolean,reflect:!0})],O1.prototype,"inverted",2);Y1([G1({type:String})],O1.prototype,"label",2);Y1([G1({type:String})],O1.prototype,"ariaLabel",2);Y1([G1({type:String})],O1.prototype,"prefixIcon",2);Y1([G1({type:String})],O1.prototype,"suffixIcon",2);Y1([G1({type:Boolean,reflect:!0})],O1.prototype,"circle",2);Y1([G1({type:String})],O1.prototype,"icon",2);Y1([G1({type:Boolean,reflect:!0})],O1.prototype,"disabled",2);Y1([G1({type:String})],O1.prototype,"form",2);Y1([G1({type:String})],O1.prototype,"value",2);Y1([G1({reflect:!0})],O1.prototype,"type",1);Y1([G1({type:Function})],O1.prototype,"onClick",2);Y1([G1({type:String})],O1.prototype,"href",2);Y1([G1({reflect:!0})],O1.prototype,"target",1);let Kh=O1;customElements.get("nys-button")||customElements.define("nys-button",Kh);var Ph=Object.defineProperty,Jh=Object.getOwnPropertyDescriptor,Dt=(a,n,l,r)=>{for(var c=r>1?void 0:r?Jh(n,l):n,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=(r?d(n,l,c):d(c))||c);return r&&c&&Ph(n,l,c),c};let Fh=0;var bn;const _t=(bn=class extends i1{constructor(){super(...arguments),this.id="",this.heading="",this.icon="",this.dismissible=!1,this.duration=0,this.text="",this.primaryAction="",this.secondaryAction="",this.primaryLabel="Learn more",this.secondaryLabel="Dismiss",this._alertClosed=!1,this._slotHasContent=!0,this._type="base",this._timeoutId=null}get type(){return this._type}set type(a){this._type=bn.VALID_TYPES.includes(a)?a:"base"}get ariaAttributes(){const a=this.type==="danger"||this.type==="emergency"?"alert":this.type==="success"?"status":"region",n=a==="region"?`${this.type} alert`:"";return{role:a,ariaLabel:n}}connectedCallback(){super.connectedCallback(),this.id||(this.id=this._generateUniqueId()),this.duration>0&&(this._timeoutId=setTimeout(()=>{this._closeAlert()},this.duration))}disconnectedCallback(){this._timeoutId&&clearTimeout(this._timeoutId),super.disconnectedCallback()}firstUpdated(){this._checkSlotContent()}_generateUniqueId(){return`nys-alert-${Date.now()}-${Fh++}`}_getIconName(){return this.icon?this.icon:this._checkAltNaming()}_checkAltNaming(){return this.type==="success"?"check_circle":this.type==="base"?"info":this.type==="danger"?"error":this.type==="emergency"?"emergency_home":this.type}_closeAlert(){this._alertClosed=!0,this.dispatchEvent(new CustomEvent("nys-alertClosed",{detail:{type:this.type,label:this.heading},bubbles:!0,composed:!0}))}async _checkSlotContent(){var a;const n=(a=this.shadowRoot)==null?void 0:a.querySelector("slot");if(n){const l=n.assignedNodes({flatten:!0}).filter(r=>{var c;return r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&((c=r.textContent)==null?void 0:c.trim())});await Promise.resolve(),this._slotHasContent=l.length>0}else await Promise.resolve(),this._slotHasContent=!1}render(){var a,n;const{role:l,ariaLabel:r}=this.ariaAttributes;return z`
      ${this._alertClosed?"":z` <div
            id=${this.id}
            class="nys-alert__container ${this._slotHasContent||((a=this.text)==null?void 0:a.trim().length)>0?"":"nys-alert--centered"}"
            role=${l}
            aria-label=${d1(r.trim()!==""?r:void 0)}
          >
            <div part="nys-alert__icon" class="nys-alert__icon">
              <nys-icon
                name="${this._getIconName()}"
                size="3xl"
                label="${this.type} icon"
              ></nys-icon>
            </div>
            <div class="nys-alert__texts">
              <p class="nys-alert__header">${this.heading}</p>
              ${this._slotHasContent?z`<slot></slot>`:((n=this.text)==null?void 0:n.trim().length)>0?z`<p class="nys-alert__text">${this.text}</p>`:""}
              ${this.primaryAction||this.secondaryAction?z`<div class="nys-alert__actions">
                    ${this.primaryAction?z`<a
                          href=${d1(this.primaryAction||void 0)}
                          class="nys-alert__action nys-alert__primary"
                        >
                          ${this.primaryLabel}
                        </a>`:""}
                    ${this.secondaryAction?z`<a
                          href=${d1(this.secondaryAction||void 0)}
                          class="nys-alert__action nys-alert__secondary"
                        >
                          ${this.secondaryLabel}
                        </a>`:""}
                  </div> `:""}
            </div>
            ${this.dismissible?z` <nys-button
                  id="dismiss-btn"
                  variant="ghost"
                  circle
                  icon="close"
                  size="sm"
                  ?inverted=${this.type==="emergency"}
                  ariaLabel="close button"
                  .onClick=${()=>this._closeAlert()}
                ></nys-button>`:""}
          </div>`}
    `}},bn.styles=lh,bn.VALID_TYPES=["base","info","success","warning","danger","emergency"],bn);Dt([_({type:String})],_t.prototype,"id",2);Dt([_({type:String})],_t.prototype,"heading",2);Dt([_({type:String})],_t.prototype,"icon",2);Dt([_({type:Boolean,reflect:!0})],_t.prototype,"dismissible",2);Dt([_({type:Number,reflect:!0})],_t.prototype,"duration",2);Dt([_({type:String})],_t.prototype,"text",2);Dt([_({type:String})],_t.prototype,"primaryAction",2);Dt([_({type:String})],_t.prototype,"secondaryAction",2);Dt([_({type:String})],_t.prototype,"primaryLabel",2);Dt([_({type:String})],_t.prototype,"secondaryLabel",2);Dt([Ze()],_t.prototype,"_alertClosed",2);Dt([Ze()],_t.prototype,"_slotHasContent",2);Dt([_({reflect:!0})],_t.prototype,"type",1);let g4=_t;customElements.get("nys-alert")||customElements.define("nys-alert",g4);const Wh=C1`
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
`;var Ih=Object.defineProperty,td=Object.getOwnPropertyDescriptor,Ne=(a,n,l,r)=>{for(var c=r>1?void 0:r?td(n,l):n,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=(r?d(n,l,c):d(c))||c);return r&&c&&Ih(n,l,c),c};let ed=0;var _n;const pe=(_n=class extends i1{constructor(){super(...arguments),this.id="",this.label="",this.image="",this.initials="",this.icon="",this.color="#555",this.lazy=!1,this._shape="circle",this._slotHasContent=!0}get shape(){return this._shape}set shape(a){this._shape=_n.VALID_SHAPES.includes(a)?a:"circle",this.requestUpdate("shape")}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-avatar-${Date.now()}-${ed++}`)}firstUpdated(){this._checkSlotContent()}async _checkSlotContent(){var a;const n=(a=this.shadowRoot)==null?void 0:a.querySelector("slot");if(!n){this._slotHasContent=!1;return}await Promise.resolve();const l=n.assignedNodes({flatten:!0}).filter(r=>{var c;return r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&((c=r.textContent)==null?void 0:c.trim())});this._slotHasContent=l.length>0}render(){var a,n,l,r;return z`
      <label class="nys-avatar" id=${this.id}>
        <div class="nys-avatar__content">
          <div
            part="nys-avatar"
            class="nys-avatar__component"
            style="background-color: ${((a=this.color)==null?void 0:a.length)>0?this.color:"#555"};"
            role=${d1(this.image?void 0:"img")}
            aria-label=${d1(this.image?void 0:this.label?this.label:"avatar")}
          >
            ${((n=this.image)==null?void 0:n.length)>0?z`<img
                  part="nys-avatar__image"
                  class="nys-avatar__image"
                  src=${this.image}
                  alt=${this.label||"avatar"}
                  loading=${this.lazy?"lazy":"eager"}
                />`:((l=this.initials)==null?void 0:l.length)>0?z`<span
                    part="nys-avatar__initials"
                    class="nys-avatar__initials"
                    aria-hidden="true"
                    >${this.initials}</span
                  >`:this._slotHasContent?z`<div part="nys-avatar__icon">
                      <slot></slot>
                    </div>`:z`<div part="nys-avatar__icon">
                      <nys-icon
                        label="nys-avatar__icon"
                        name=${((r=this.icon)==null?void 0:r.length)>0?this.icon:"account_circle"}
                        size="xl"
                      ></nys-icon>
                    </div>`}
          </div>
        </div>
      </label>
    `}},_n.styles=Wh,_n.VALID_SHAPES=["square","rounded","circle"],_n);Ne([_({type:String})],pe.prototype,"id",2);Ne([_({type:String})],pe.prototype,"label",2);Ne([_({type:String})],pe.prototype,"image",2);Ne([_({type:String})],pe.prototype,"initials",2);Ne([_({type:String})],pe.prototype,"icon",2);Ne([_({type:String})],pe.prototype,"color",2);Ne([_({type:Boolean,reflect:!0})],pe.prototype,"lazy",2);Ne([_({reflect:!0})],pe.prototype,"shape",1);Ne([Ze()],pe.prototype,"_slotHasContent",2);let b4=pe;customElements.get("nys-avatar")||customElements.define("nys-avatar",b4);const sd=C1`
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
  }

  .left {
    left: 1rem;
    right: auto;
  }

  .visible {
    display: inline-flex;
  }
`;var nd=Object.defineProperty,Vo=(a,n,l,r)=>{for(var c=void 0,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=d(n,l,c)||c);return c&&nd(n,l,c),c};const _4=class extends i1{constructor(){super(),this.position="right",this.visible=!1,this.isMobile=!1,this._handleScroll=this._handleScroll.bind(this),this._handleResize=this._handleResize.bind(this),this.mediaQuery=window.matchMedia("(max-width: 480px)")}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this._handleScroll),this.mediaQuery.addEventListener("change",this._handleResize),this._handleResize()}disconnectedCallback(){window.removeEventListener("scroll",this._handleScroll),this.mediaQuery.removeEventListener("change",this._handleResize),super.disconnectedCallback()}_handleScroll(){const n=window.innerHeight*1.5;this.visible=window.scrollY>n}_scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}_handleResize(){this.isMobile=this.mediaQuery.matches}render(){const n=["nys-backtotop",this.position,this.visible?"visible":""].filter(Boolean).join(" ");return z`<nys-button
      id="nys-backtotop"
      prefixIcon="chevron_up"
      variant="outline"
      label="Back To Top"
      class="${n}"
      .onClick=${this._scrollToTop}
      ?circle=${this.isMobile}
    ></nys-button>`}};_4.styles=sd;let Za=_4;Vo([_({type:String})],Za.prototype,"position");Vo([_({type:Boolean,reflect:!0})],Za.prototype,"visible");Vo([Ze()],Za.prototype,"isMobile");customElements.get("nys-backtotop")||customElements.define("nys-backtotop",Za);const id=C1`
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

  .nys-button:focus-visible {
    outline-offset: var(--_nys-button-offset-focus);
    outline: solid var(--_nys-button-width-focus) var(--_nys-button-color-focus);
  }

  .nys-button__text {
    display: flex;
    align-items: center;
    user-select: none;
  }
`;var ad=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,X1=(a,n,l,r)=>{for(var c=r>1?void 0:r?ld(n,l):n,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=(r?d(n,l,c):d(c))||c);return r&&c&&ad(n,l,c),c};let rd=0;var Kt;const V1=(Kt=class extends i1{constructor(){super(),this.id="",this.name="",this._size="md",this.fullWidth=!1,this._variant="filled",this.inverted=!1,this.label="",this.ariaLabel="",this.prefixIcon="",this.suffixIcon="",this.circle=!1,this.icon="",this.disabled=!1,this.form="",this.value="",this._type="button",this.onClick=()=>{},this.href="",this._target="_self",this._internals=this.attachInternals()}get size(){return this._size}set size(a){this._size=Kt.VALID_SIZES.includes(a)?a:"md"}get variant(){return this._variant}set variant(a){this._variant=Kt.VALID_VARIANTS.includes(a)?a:"filled"}get type(){return this._type}set type(a){this._type=Kt.VALID_TYPES.includes(a)?a:"button"}get target(){return this._target}set target(a){this._target=Kt.VALID_TARGETS.includes(a)?a:"_self"}connectedCallback(){super.connectedCallback(),this.id||(this.id=this._generateUniqueId())}_generateUniqueId(){return`nys-button-${Date.now()}-${rd++}`}_manageFormAction(a){typeof this.onClick=="function"&&this.onClick(a);const n=this._internals.form;if(n)switch(this.type){case"submit":n.requestSubmit();break;case"reset":n.reset();break}}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this.dispatchEvent(new Event("nys-blur"))}_handleClick(a){if(this.disabled){a.preventDefault();return}this._manageFormAction(a),this.dispatchEvent(new Event("nys-click"))}_handleKeydown(a){(a.code==="Space"||a.code==="Enter"||a.key===" "||a.key==="Enter")&&(a.preventDefault(),this.disabled||this._manageFormAction(a))}render(){return z`
      ${this.href?z`
            <div class="nys-button__linkwrapper">
              <a
                class="nys-button"
                id=${d1(this.id)}
                name=${d1(this.name?this.name:void 0)}
                ?disabled=${this.disabled}
                aria-disabled="${this.disabled?"true":"false"}"
                form=${d1(this.form?this.form:void 0)}
                value=${d1(this.value?this.value:void 0)}
                href=${this.href}
                target=${this.target}
                aria-label=${this.ariaLabel||this.label||(this.circle?this.icon:null)||"button"}
                @click=${this._handleClick}
                @focus="${this._handleFocus}"
                @blur="${this._handleBlur}"
              >
                ${this.prefixIcon&&this.variant!=="text"?z`<slot name="prefix-icon">
                      <nys-icon size="16" name=${this.prefixIcon}></nys-icon>
                    </slot>`:""}
                ${this.label&&!this.circle?z`<label class="nys-button__text">${this.label}</label>`:""}
                ${this.suffixIcon&&this.variant!=="text"?z`<slot name="suffix-icon">
                      <nys-icon size="16" name=${this.suffixIcon}></nys-icon>
                    </slot>`:""}
                ${this.circle&&this.icon?z`<slot name="circle-icon"
                      ><nys-icon
                        size=${this.size==="sm"?"24":this.size==="lg"?"40":"32"}
                        name=${this.icon}
                      ></nys-icon
                    ></slot>`:""}
              </a>
            </div>
          `:z`
            <button
              class="nys-button"
              id=${d1(this.id)}
              name=${d1(this.name?this.name:void 0)}
              ?disabled=${this.disabled}
              form=${d1(this.form?this.form:void 0)}
              value=${d1(this.value?this.value:void 0)}
              type=${this.type}
              aria-label=${this.ariaLabel||this.label||(this.circle?this.icon:null)||"button"}
              @click=${this._handleClick}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
              @keydown="${this._handleKeydown}"
            >
              ${this.prefixIcon&&this.variant!=="text"?z`<slot name="prefix-icon">
                    <nys-icon size="16" name=${this.prefixIcon}></nys-icon>
                  </slot>`:""}
              ${this.label&&!this.circle?z`<label class="nys-button__text">${this.label}</label>`:""}
              ${this.suffixIcon&&this.variant!=="text"?z`<slot name="suffix-icon">
                    <nys-icon size="16" name=${this.suffixIcon}></nys-icon>
                  </slot>`:""}
              ${this.circle&&this.icon?z`<slot name="circle-icon">
                    <nys-icon
                      size=${this.size==="sm"?"24":this.size==="lg"?"40":"32"}
                      name=${this.icon}
                    ></nys-icon>
                  </slot>`:""}
            </button>
          `}
    `}},Kt.VALID_SIZES=["sm","md","lg"],Kt.VALID_VARIANTS=["filled","outline","ghost","text"],Kt.VALID_TYPES=["submit","reset","button"],Kt.VALID_TARGETS=["_self","_blank","_parent","_top","framename"],Kt.styles=id,Kt.formAssociated=!0,Kt);X1([_({type:String})],V1.prototype,"id",2);X1([_({type:String,reflect:!0})],V1.prototype,"name",2);X1([_({reflect:!0})],V1.prototype,"size",1);X1([_({type:Boolean,reflect:!0})],V1.prototype,"fullWidth",2);X1([_({reflect:!0})],V1.prototype,"variant",1);X1([_({type:Boolean,reflect:!0})],V1.prototype,"inverted",2);X1([_({type:String})],V1.prototype,"label",2);X1([_({type:String})],V1.prototype,"ariaLabel",2);X1([_({type:String})],V1.prototype,"prefixIcon",2);X1([_({type:String})],V1.prototype,"suffixIcon",2);X1([_({type:Boolean,reflect:!0})],V1.prototype,"circle",2);X1([_({type:String})],V1.prototype,"icon",2);X1([_({type:Boolean,reflect:!0})],V1.prototype,"disabled",2);X1([_({type:String})],V1.prototype,"form",2);X1([_({type:String})],V1.prototype,"value",2);X1([_({reflect:!0})],V1.prototype,"type",1);X1([_({type:Function})],V1.prototype,"onClick",2);X1([_({type:String})],V1.prototype,"href",2);X1([_({reflect:!0})],V1.prototype,"target",1);let m4=V1;customElements.get("nys-button")||customElements.define("nys-button",m4);const x4=C1`
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
  :host([tile])
    .nys-checkbox:hover:has(.nys-checkbox__checkbox:not(:disabled):checked) {
    outline: solid var(--_nys-checkbox-tile-border-width)
      var(--_nys-checkbox-checked-tile-border-color);
  }

  /* Pressed - only allow pressed on unchecked */
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

  /* Focused */
  :host(:not([tile])) .nys-checkbox__checkbox:focus-visible {
    outline: solid var(--_nys-checkbox-width-focus)
      var(--_nys-checkbox-color-focus);
  }
  :host([tile]) .nys-checkbox:has(*:focus-visible) {
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
    display: inline;
  }
`;/*!
   * Label
   * Part of the New York State Design System
   * A design system for New York State's digital products.
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pa=globalThis,To=pa.ShadowRoot&&(pa.ShadyCSS===void 0||pa.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,w4=Symbol(),g6=new WeakMap;let od=class{constructor(a,n,l){if(this._$cssResult$=!0,l!==w4)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a,this.t=n}get styleSheet(){let a=this.o;const n=this.t;if(To&&a===void 0){const l=n!==void 0&&n.length===1;l&&(a=g6.get(n)),a===void 0&&((this.o=a=new CSSStyleSheet).replaceSync(this.cssText),l&&g6.set(n,a))}return a}toString(){return this.cssText}};const cd=a=>new od(typeof a=="string"?a:a+"",void 0,w4),ud=(a,n)=>{if(To)a.adoptedStyleSheets=n.map(l=>l instanceof CSSStyleSheet?l:l.styleSheet);else for(const l of n){const r=document.createElement("style"),c=pa.litNonce;c!==void 0&&r.setAttribute("nonce",c),r.textContent=l.cssText,a.appendChild(r)}},b6=To?a=>a:a=>a instanceof CSSStyleSheet?(n=>{let l="";for(const r of n.cssRules)l+=r.cssText;return cd(l)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:hd,defineProperty:dd,getOwnPropertyDescriptor:fd,getOwnPropertyNames:yd,getOwnPropertySymbols:pd,getPrototypeOf:vd}=Object,as=globalThis,_6=as.trustedTypes,Cd=_6?_6.emptyScript:"",m6=as.reactiveElementPolyfillSupport,Hn=(a,n)=>a,Ea={toAttribute(a,n){switch(n){case Boolean:a=a?Cd:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,n){let l=a;switch(n){case Boolean:l=a!==null;break;case Number:l=a===null?null:Number(a);break;case Object:case Array:try{l=JSON.parse(a)}catch{l=null}}return l}},Ro=(a,n)=>!hd(a,n),x6={attribute:!0,type:String,converter:Ea,reflect:!1,hasChanged:Ro};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),as.litPropertyMetadata??(as.litPropertyMetadata=new WeakMap);let mn=class extends HTMLElement{static addInitializer(a){this._$Ei(),(this.l??(this.l=[])).push(a)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(a,n=x6){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(a,n),!n.noAccessor){const l=Symbol(),r=this.getPropertyDescriptor(a,l,n);r!==void 0&&dd(this.prototype,a,r)}}static getPropertyDescriptor(a,n,l){const{get:r,set:c}=fd(this.prototype,a)??{get(){return this[n]},set(h){this[n]=h}};return{get(){return r==null?void 0:r.call(this)},set(h){const d=r==null?void 0:r.call(this);c.call(this,h),this.requestUpdate(a,d,l)},configurable:!0,enumerable:!0}}static getPropertyOptions(a){return this.elementProperties.get(a)??x6}static _$Ei(){if(this.hasOwnProperty(Hn("elementProperties")))return;const a=vd(this);a.finalize(),a.l!==void 0&&(this.l=[...a.l]),this.elementProperties=new Map(a.elementProperties)}static finalize(){if(this.hasOwnProperty(Hn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Hn("properties"))){const n=this.properties,l=[...yd(n),...pd(n)];for(const r of l)this.createProperty(r,n[r])}const a=this[Symbol.metadata];if(a!==null){const n=litPropertyMetadata.get(a);if(n!==void 0)for(const[l,r]of n)this.elementProperties.set(l,r)}this._$Eh=new Map;for(const[n,l]of this.elementProperties){const r=this._$Eu(n,l);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(a){const n=[];if(Array.isArray(a)){const l=new Set(a.flat(1/0).reverse());for(const r of l)n.unshift(b6(r))}else a!==void 0&&n.push(b6(a));return n}static _$Eu(a,n){const l=n.attribute;return l===!1?void 0:typeof l=="string"?l:typeof a=="string"?a.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var a;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(a=this.constructor.l)==null||a.forEach(n=>n(this))}addController(a){var n;(this._$EO??(this._$EO=new Set)).add(a),this.renderRoot!==void 0&&this.isConnected&&((n=a.hostConnected)==null||n.call(a))}removeController(a){var n;(n=this._$EO)==null||n.delete(a)}_$E_(){const a=new Map,n=this.constructor.elementProperties;for(const l of n.keys())this.hasOwnProperty(l)&&(a.set(l,this[l]),delete this[l]);a.size>0&&(this._$Ep=a)}createRenderRoot(){const a=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ud(a,this.constructor.elementStyles),a}connectedCallback(){var a;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(a=this._$EO)==null||a.forEach(n=>{var l;return(l=n.hostConnected)==null?void 0:l.call(n)})}enableUpdating(a){}disconnectedCallback(){var a;(a=this._$EO)==null||a.forEach(n=>{var l;return(l=n.hostDisconnected)==null?void 0:l.call(n)})}attributeChangedCallback(a,n,l){this._$AK(a,l)}_$EC(a,n){var l;const r=this.constructor.elementProperties.get(a),c=this.constructor._$Eu(a,r);if(c!==void 0&&r.reflect===!0){const h=(((l=r.converter)==null?void 0:l.toAttribute)!==void 0?r.converter:Ea).toAttribute(n,r.type);this._$Em=a,h==null?this.removeAttribute(c):this.setAttribute(c,h),this._$Em=null}}_$AK(a,n){var l;const r=this.constructor,c=r._$Eh.get(a);if(c!==void 0&&this._$Em!==c){const h=r.getPropertyOptions(c),d=typeof h.converter=="function"?{fromAttribute:h.converter}:((l=h.converter)==null?void 0:l.fromAttribute)!==void 0?h.converter:Ea;this._$Em=c,this[c]=d.fromAttribute(n,h.type),this._$Em=null}}requestUpdate(a,n,l){if(a!==void 0){if(l??(l=this.constructor.getPropertyOptions(a)),!(l.hasChanged??Ro)(this[a],n))return;this.P(a,n,l)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(a,n,l){this._$AL.has(a)||this._$AL.set(a,n),l.reflect===!0&&this._$Em!==a&&(this._$Ej??(this._$Ej=new Set)).add(a)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const a=this.scheduleUpdate();return a!=null&&await a,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var a;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[c,h]of this._$Ep)this[c]=h;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[c,h]of r)h.wrapped!==!0||this._$AL.has(c)||this[c]===void 0||this.P(c,this[c],h)}let n=!1;const l=this._$AL;try{n=this.shouldUpdate(l),n?(this.willUpdate(l),(a=this._$EO)==null||a.forEach(r=>{var c;return(c=r.hostUpdate)==null?void 0:c.call(r)}),this.update(l)):this._$EU()}catch(r){throw n=!1,this._$EU(),r}n&&this._$AE(l)}willUpdate(a){}_$AE(a){var n;(n=this._$EO)==null||n.forEach(l=>{var r;return(r=l.hostUpdated)==null?void 0:r.call(l)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(a)),this.updated(a)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(a){return!0}update(a){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(a){}firstUpdated(a){}};mn.elementStyles=[],mn.shadowRootOptions={mode:"open"},mn[Hn("elementProperties")]=new Map,mn[Hn("finalized")]=new Map,m6==null||m6({ReactiveElement:mn}),(as.reactiveElementVersions??(as.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gd={attribute:!0,type:String,converter:Ea,reflect:!1,hasChanged:Ro},bd=(a=gd,n,l)=>{const{kind:r,metadata:c}=l;let h=globalThis.litPropertyMetadata.get(c);if(h===void 0&&globalThis.litPropertyMetadata.set(c,h=new Map),h.set(l.name,a),r==="accessor"){const{name:d}=l;return{set(v){const C=n.get.call(this);n.set.call(this,v),this.requestUpdate(d,C,a)},init(v){return v!==void 0&&this.P(d,void 0,a),v}}}if(r==="setter"){const{name:d}=l;return function(v){const C=this[d];n.call(this,v),this.requestUpdate(d,C,a)}}throw Error("Unsupported decorator location: "+r)};function Na(a){return(n,l)=>typeof l=="object"?bd(a,n,l):((r,c,h)=>{const d=c.hasOwnProperty(h);return c.constructor.createProperty(h,d?{...r,wrapped:!0}:r),d?Object.getOwnPropertyDescriptor(c,h):void 0})(a,n,l)}const _d=C1`
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
`;var md=Object.defineProperty,Ba=(a,n,l,r)=>{for(var c=void 0,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=d(n,l,c)||c);return c&&md(n,l,c),c};const k4=class extends i1{constructor(){super(...arguments),this.id="",this.label="",this.description="",this.flag=""}render(){return z`
      <div class="nys-label">
        <label for=${this.id} class="nys-label__label"
          >${this.label}
          ${this.flag==="required"?z`<label class="nys-label__required">*</label>`:""}
          ${this.flag==="optional"?z`<label class="nys-label__optional">(Optional)</label>`:""}</label
        >
        <label for=${this.id} class="nys-label__description">
          <slot name="description">${this.description}</slot>
        </label>
      </div>
    `}};k4.styles=_d;let Xn=k4;Ba([Na({type:String})],Xn.prototype,"id");Ba([Na({type:String})],Xn.prototype,"label");Ba([Na({type:String})],Xn.prototype,"description");Ba([Na({type:String})],Xn.prototype,"flag");customElements.get("nys-label")||customElements.define("nys-label",Xn);/*!
   * Error Message
   * Part of the New York State Design System
   * A design system for New York State's digital products.
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const va=globalThis,Zo=va.ShadowRoot&&(va.ShadyCSS===void 0||va.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,S4=Symbol(),w6=new WeakMap;let xd=class{constructor(a,n,l){if(this._$cssResult$=!0,l!==S4)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a,this.t=n}get styleSheet(){let a=this.o;const n=this.t;if(Zo&&a===void 0){const l=n!==void 0&&n.length===1;l&&(a=w6.get(n)),a===void 0&&((this.o=a=new CSSStyleSheet).replaceSync(this.cssText),l&&w6.set(n,a))}return a}toString(){return this.cssText}};const wd=a=>new xd(typeof a=="string"?a:a+"",void 0,S4),kd=(a,n)=>{if(Zo)a.adoptedStyleSheets=n.map(l=>l instanceof CSSStyleSheet?l:l.styleSheet);else for(const l of n){const r=document.createElement("style"),c=va.litNonce;c!==void 0&&r.setAttribute("nonce",c),r.textContent=l.cssText,a.appendChild(r)}},k6=Zo?a=>a:a=>a instanceof CSSStyleSheet?(n=>{let l="";for(const r of n.cssRules)l+=r.cssText;return wd(l)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Sd,defineProperty:Ed,getOwnPropertyDescriptor:$d,getOwnPropertyNames:Ad,getOwnPropertySymbols:Md,getPrototypeOf:Dd}=Object,ls=globalThis,S6=ls.trustedTypes,zd=S6?S6.emptyScript:"",E6=ls.reactiveElementPolyfillSupport,Un=(a,n)=>a,$a={toAttribute(a,n){switch(n){case Boolean:a=a?zd:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,n){let l=a;switch(n){case Boolean:l=a!==null;break;case Number:l=a===null?null:Number(a);break;case Object:case Array:try{l=JSON.parse(a)}catch{l=null}}return l}},No=(a,n)=>!Sd(a,n),$6={attribute:!0,type:String,converter:$a,reflect:!1,hasChanged:No};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ls.litPropertyMetadata??(ls.litPropertyMetadata=new WeakMap);class xn extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??(this.l=[])).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,l=$6){if(l.state&&(l.attribute=!1),this._$Ei(),this.elementProperties.set(n,l),!l.noAccessor){const r=Symbol(),c=this.getPropertyDescriptor(n,r,l);c!==void 0&&Ed(this.prototype,n,c)}}static getPropertyDescriptor(n,l,r){const{get:c,set:h}=$d(this.prototype,n)??{get(){return this[l]},set(d){this[l]=d}};return{get(){return c==null?void 0:c.call(this)},set(d){const v=c==null?void 0:c.call(this);h.call(this,d),this.requestUpdate(n,v,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??$6}static _$Ei(){if(this.hasOwnProperty(Un("elementProperties")))return;const n=Dd(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(Un("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Un("properties"))){const l=this.properties,r=[...Ad(l),...Md(l)];for(const c of r)this.createProperty(c,l[c])}const n=this[Symbol.metadata];if(n!==null){const l=litPropertyMetadata.get(n);if(l!==void 0)for(const[r,c]of l)this.elementProperties.set(r,c)}this._$Eh=new Map;for(const[l,r]of this.elementProperties){const c=this._$Eu(l,r);c!==void 0&&this._$Eh.set(c,l)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){const l=[];if(Array.isArray(n)){const r=new Set(n.flat(1/0).reverse());for(const c of r)l.unshift(k6(c))}else n!==void 0&&l.push(k6(n));return l}static _$Eu(n,l){const r=l.attribute;return r===!1?void 0:typeof r=="string"?r:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var n;this._$ES=new Promise(l=>this.enableUpdating=l),this._$AL=new Map,this._$E_(),this.requestUpdate(),(n=this.constructor.l)==null||n.forEach(l=>l(this))}addController(n){var l;(this._$EO??(this._$EO=new Set)).add(n),this.renderRoot!==void 0&&this.isConnected&&((l=n.hostConnected)==null||l.call(n))}removeController(n){var l;(l=this._$EO)==null||l.delete(n)}_$E_(){const n=new Map,l=this.constructor.elementProperties;for(const r of l.keys())this.hasOwnProperty(r)&&(n.set(r,this[r]),delete this[r]);n.size>0&&(this._$Ep=n)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return kd(n,this.constructor.elementStyles),n}connectedCallback(){var n;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(n=this._$EO)==null||n.forEach(l=>{var r;return(r=l.hostConnected)==null?void 0:r.call(l)})}enableUpdating(n){}disconnectedCallback(){var n;(n=this._$EO)==null||n.forEach(l=>{var r;return(r=l.hostDisconnected)==null?void 0:r.call(l)})}attributeChangedCallback(n,l,r){this._$AK(n,r)}_$EC(n,l){var r;const c=this.constructor.elementProperties.get(n),h=this.constructor._$Eu(n,c);if(h!==void 0&&c.reflect===!0){const d=(((r=c.converter)==null?void 0:r.toAttribute)!==void 0?c.converter:$a).toAttribute(l,c.type);this._$Em=n,d==null?this.removeAttribute(h):this.setAttribute(h,d),this._$Em=null}}_$AK(n,l){var r;const c=this.constructor,h=c._$Eh.get(n);if(h!==void 0&&this._$Em!==h){const d=c.getPropertyOptions(h),v=typeof d.converter=="function"?{fromAttribute:d.converter}:((r=d.converter)==null?void 0:r.fromAttribute)!==void 0?d.converter:$a;this._$Em=h,this[h]=v.fromAttribute(l,d.type),this._$Em=null}}requestUpdate(n,l,r){if(n!==void 0){if(r??(r=this.constructor.getPropertyOptions(n)),!(r.hasChanged??No)(this[n],l))return;this.P(n,l,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(n,l,r){this._$AL.has(n)||this._$AL.set(n,l),r.reflect===!0&&this._$Em!==n&&(this._$Ej??(this._$Ej=new Set)).add(n)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(l){Promise.reject(l)}const n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[h,d]of this._$Ep)this[h]=d;this._$Ep=void 0}const c=this.constructor.elementProperties;if(c.size>0)for(const[h,d]of c)d.wrapped!==!0||this._$AL.has(h)||this[h]===void 0||this.P(h,this[h],d)}let l=!1;const r=this._$AL;try{l=this.shouldUpdate(r),l?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(c=>{var h;return(h=c.hostUpdate)==null?void 0:h.call(c)}),this.update(r)):this._$EU()}catch(c){throw l=!1,this._$EU(),c}l&&this._$AE(r)}willUpdate(n){}_$AE(n){var l;(l=this._$EO)==null||l.forEach(r=>{var c;return(c=r.hostUpdated)==null?void 0:c.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Ej&&(this._$Ej=this._$Ej.forEach(l=>this._$EC(l,this[l]))),this._$EU()}updated(n){}firstUpdated(n){}}xn.elementStyles=[],xn.shadowRootOptions={mode:"open"},xn[Un("elementProperties")]=new Map,xn[Un("finalized")]=new Map,E6==null||E6({ReactiveElement:xn}),(ls.reactiveElementVersions??(ls.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ld={attribute:!0,type:String,converter:$a,reflect:!1,hasChanged:No},Hd=(a=Ld,n,l)=>{const{kind:r,metadata:c}=l;let h=globalThis.litPropertyMetadata.get(c);if(h===void 0&&globalThis.litPropertyMetadata.set(c,h=new Map),h.set(l.name,a),r==="accessor"){const{name:d}=l;return{set(v){const C=n.get.call(this);n.set.call(this,v),this.requestUpdate(d,C,a)},init(v){return v!==void 0&&this.P(d,void 0,a),v}}}if(r==="setter"){const{name:d}=l;return function(v){const C=this[d];n.call(this,v),this.requestUpdate(d,C,a)}}throw Error("Unsupported decorator location: "+r)};function Bo(a){return(n,l)=>typeof l=="object"?Hd(a,n,l):((r,c,h)=>{const d=c.hasOwnProperty(h);return c.constructor.createProperty(h,d?{...r,wrapped:!0}:r),d?Object.getOwnPropertyDescriptor(c,h):void 0})(a,n,l)}const Ud=C1`
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
`;var Od=Object.defineProperty,qo=(a,n,l,r)=>{for(var c=void 0,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=d(n,l,c)||c);return c&&Od(n,l,c),c};const mo=class extends i1{constructor(){super(),this.showError=!1,this.errorMessage="",this.showDivider=!1,this._internals=this.attachInternals()}render(){return z`${this.showError?z`<div class="nys-errormessage" ?showDivider=${this.showDivider}>
          <nys-icon name="error" size="2xl"></nys-icon>
          ${this._internals.validationMessage||this.errorMessage}
        </div>`:""}`}};mo.styles=Ud,mo.formAssociated=!0;let qa=mo;qo([Bo({type:Boolean})],qa.prototype,"showError");qo([Bo({type:String})],qa.prototype,"errorMessage");qo([Bo({type:Boolean,reflect:!0})],qa.prototype,"showDivider");customElements.get("nys-errormessage")||customElements.define("nys-errormessage",qa);var Vd=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,ve=(a,n,l,r)=>{for(var c=r>1?void 0:r?Td(n,l):n,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=(r?d(n,l,c):d(c))||c);return r&&c&&Vd(n,l,c),c};let Rd=0;var Q5;const ne=(Q5=class extends i1{constructor(){super(),this.id="",this.name="",this.required=!1,this.optional=!1,this.showError=!1,this.errorMessage="",this.label="",this.description="",this.tile=!1,this._size="md",this._internals=this.attachInternals()}get size(){return this._size}set size(a){this._size=Q5.VALID_SIZES.includes(a)?a:"md"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-checkbox-${Date.now()}-${Rd++}`),this.addEventListener("nys-change",this._handleCheckboxChange),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("nys-change",this._handleCheckboxChange),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setGroupExist(),this.updateCheckboxSize(),this.updateCheckboxTile(),this.updateCheckboxShowError()}updated(a){a.has("required")&&this.required&&this._setupCheckboxRequired(),a.has("size")&&this.updateCheckboxSize(),a.has("tile")&&this.updateCheckboxTile(),a.has("showError")&&this.updateCheckboxShowError()}_setGroupExist(){this.querySelectorAll("nys-checkbox").forEach(a=>{a.groupExist=!0})}async _handleInvalid(a){a.preventDefault(),this.showError=!0,this._manageCheckboxRequired();const n=this.querySelector("nys-checkbox"),l=n?await n.getInputElement():null;if(l){const r=this._internals.form;r?Array.from(r.elements).find(c=>{if(c.tagName.toLowerCase()==="nys-checkboxgroup"){if(Array.from(this.querySelectorAll("nys-checkbox")).filter(h=>h.checked).length===0)return c}else return typeof c.checkValidity=="function"&&!c.checkValidity()})===this&&l.focus():l.focus()}}async _setupCheckboxRequired(){const a=this.querySelector("nys-checkbox"),n=this.errorMessage||"This field is required",l=a?await a.getInputElement():null;this._internals.setValidity({valueMissing:!0},n,l||this)}_handleCheckboxChange(a){const n=a,{name:l}=n.detail,r=Array.from(this.querySelectorAll("nys-checkbox")).filter(c=>c.checked).map(c=>c.value);this.name=l,this._internals.setFormValue(r.join(", ")),this._manageCheckboxRequired()}async _manageCheckboxRequired(){if(this.required){const a=this.errorMessage||"Please select at least one option.",n=this.querySelector("nys-checkbox"),l=n?await n.getInputElement():null;let r=!1;this.querySelectorAll("nys-checkbox").forEach(c=>{c.checked&&(r=!0)}),r?(this._internals.setValidity({}),this.showError=!1):(this._internals.setValidity({valueMissing:!0},a,l||this),this.showError=!0)}}updateCheckboxSize(){this.querySelectorAll("nys-checkbox").forEach(a=>{a.setAttribute("size",this.size)})}updateCheckboxTile(){this.querySelectorAll("nys-checkbox").forEach(a=>{this.tile?a.toggleAttribute("tile",!0):a.removeAttribute("tile")})}updateCheckboxShowError(){this.querySelectorAll("nys-checkbox").forEach(a=>{this.showError?a.setAttribute("showError",""):a.removeAttribute("showError")})}render(){return z` <div class="nys-checkboxgroup" role="group">
      <nys-label
        id=${this.id}
        label=${this.label}
        description=${this.description}
        flag=${this.required?"required":this.optional?"optional":""}
      >
        <slot name="description" slot="description">${this.description}</slot>
      </nys-label>
      <div class="nys-checkboxgroup__content">
        <slot></slot>
      </div>
      <nys-errormessage
        ?showError=${this.showError}
        errorMessage=${this._internals.validationMessage||this.errorMessage}
        .showDivider=${!this.tile}
      ></nys-errormessage>
    </div>`}},Q5.VALID_SIZES=["sm","md"],Q5.styles=x4,Q5.formAssociated=!0,Q5);ve([_({type:String})],ne.prototype,"id",2);ve([_({type:String,reflect:!0})],ne.prototype,"name",2);ve([_({type:Boolean,reflect:!0})],ne.prototype,"required",2);ve([_({type:Boolean,reflect:!0})],ne.prototype,"optional",2);ve([_({type:Boolean,reflect:!0})],ne.prototype,"showError",2);ve([_({type:String})],ne.prototype,"errorMessage",2);ve([_({type:String})],ne.prototype,"label",2);ve([_({type:String})],ne.prototype,"description",2);ve([_({type:Boolean,reflect:!0})],ne.prototype,"tile",2);ve([_({reflect:!0})],ne.prototype,"size",1);let E4=ne;customElements.get("nys-checkboxgroup")||customElements.define("nys-checkboxgroup",E4);var Zd=Object.defineProperty,Nd=Object.getOwnPropertyDescriptor,zt=(a,n,l,r)=>{for(var c=r>1?void 0:r?Nd(n,l):n,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=(r?d(n,l,c):d(c))||c);return r&&c&&Zd(n,l,c),c};let Bd=0;var K5;const mt=(K5=class extends i1{constructor(){super(),this.checked=!1,this.disabled=!1,this.required=!1,this.label="",this.description="",this.id="",this.name="",this.value="",this.showError=!1,this.errorMessage="",this.groupExist=!1,this.tile=!1,this._size="md",this._internals=this.attachInternals()}get size(){return this._size}set size(a){this._size=K5.VALID_SIZES.includes(a)?a:"md"}async getInputElement(){var a;return await this.updateComplete,((a=this.shadowRoot)==null?void 0:a.querySelector("input"))||null}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-checkbox-${Date.now()}-${Bd++}`),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue(),this._manageRequire()}formResetCallback(){this.checked=!1}_setValue(){this.groupExist||this._internals.setFormValue(this.checked?this.value:null)}_manageRequire(){var a;const n=(a=this.shadowRoot)==null?void 0:a.querySelector("input"),l=this.errorMessage||"This field is required";n&&(this.required&&!this.checked?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},l,n)):this._internals.setValidity({}))}_setValidityMessage(a=""){var n,l;const r=(n=this.shadowRoot)==null?void 0:n.querySelector("input");r&&(this.showError=!!a,(l=this.errorMessage)!=null&&l.trim()&&a!==""&&(a=this.errorMessage),this._internals.setValidity(a?{customError:!0}:{},a,r))}_validate(){var a;const n=(a=this.shadowRoot)==null?void 0:a.querySelector("input");if(!n)return;const l=n.validity;let r="";l.valueMissing&&(r="This field is required"),this._setValidityMessage(r)}checkValidity(){var a;if(this.required&&!this.checked)return!1;const n=(a=this.shadowRoot)==null?void 0:a.querySelector("input");return n?n.checkValidity():!0}_handleInvalid(a){var n;a.preventDefault(),this.showError=!0,this._validate();const l=(n=this.shadowRoot)==null?void 0:n.querySelector("input");if(l){const r=this._internals.form;r?Array.from(r.elements).find(c=>typeof c.checkValidity=="function"&&!c.checkValidity())===this&&l.focus():l.focus()}}_emitChangeEvent(){this.dispatchEvent(new CustomEvent("nys-change",{detail:{checked:this.checked,name:this.name,value:this.value},bubbles:!0,composed:!0}))}_handleChange(a){const{checked:n}=a.target;this.checked=n,this.groupExist||this._internals.setFormValue(this.checked?this.value:null),this._validate(),this._emitChangeEvent()}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this.dispatchEvent(new Event("nys-blur"))}async _handleKeydown(a){a.code==="Space"&&(a.preventDefault(),this.disabled||(this.checked=!this.checked,this._internals.setFormValue(this.checked?this.value:null),await this.updateComplete,this._validate(),this._emitChangeEvent()))}render(){var a;return z`
      <label class="nys-checkbox">
        <div class="nys-checkbox__checkboxwrapper">
          <input
            id="${this.id}"
            class="nys-checkbox__checkbox"
            type="checkbox"
            name="${d1(this.name?this.name:void 0)}"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            .value=${this.value}
            ?required="${this.required}"
            aria-checked="${this.checked}"
            aria-disabled="${this.disabled?"true":"false"}"
            aria-required="${this.required}"
            @change="${this._handleChange}"
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
            @keydown="${this._handleKeydown}"
          />
          ${this.checked?z`<nys-icon
                for="${this.id}"
                name="check"
                size="${this.size==="md"?"4xl":this.size==="sm"?"2xl":"xl"}"
                class="nys-checkbox__icon"
              ></nys-icon>`:""}
        </div>
        ${this.label&&z` <div class="nys-checkbox__text">
          <div class="nys-checkbox__requiredwrapper">
            <label for=${this.id} class="nys-checkbox__label"
              >${this.label}</label
            >
            ${this.required?z`<label class="nys-checkbox__required">*</label>`:""}
          </div>
          <label for=${this.id} class="nys-checkbox__description">
            <slot name="description">${this.description}</slot>
          </label>
        </div>`}
      </label>
      ${((a=this.parentElement)==null?void 0:a.tagName.toLowerCase())!=="nys-checkboxgroup"?z`<nys-errormessage
            id="single-error-message"
            ?showError=${this.showError}
            errorMessage=${this._internals.validationMessage||this.errorMessage}
            .showDivider=${!this.tile}
          ></nys-errormessage>`:""}
    `}},K5.VALID_SIZES=["sm","md"],K5.styles=x4,K5.formAssociated=!0,K5);zt([_({type:Boolean,reflect:!0})],mt.prototype,"checked",2);zt([_({type:Boolean,reflect:!0})],mt.prototype,"disabled",2);zt([_({type:Boolean,reflect:!0})],mt.prototype,"required",2);zt([_({type:String})],mt.prototype,"label",2);zt([_({type:String})],mt.prototype,"description",2);zt([_({type:String})],mt.prototype,"id",2);zt([_({type:String,reflect:!0})],mt.prototype,"name",2);zt([_({type:String})],mt.prototype,"value",2);zt([_({type:Boolean,reflect:!0})],mt.prototype,"showError",2);zt([_({type:String})],mt.prototype,"errorMessage",2);zt([_({type:Boolean})],mt.prototype,"groupExist",2);zt([_({type:Boolean,reflect:!0})],mt.prototype,"tile",2);zt([_({reflect:!0})],mt.prototype,"size",1);let $4=mt;customElements.get("nys-checkbox")||customElements.define("nys-checkbox",$4);const qd=C1`
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
`;var jd=Object.defineProperty,jo=(a,n,l,r)=>{for(var c=void 0,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=d(n,l,c)||c);return c&&jd(n,l,c),c};const xo=class extends i1{constructor(){super(),this.showError=!1,this.errorMessage="",this.showDivider=!1,this._internals=this.attachInternals()}render(){return z`${this.showError?z`<div class="nys-errormessage" ?showDivider=${this.showDivider}>
          <nys-icon name="error" size="2xl"></nys-icon>
          ${this._internals.validationMessage||this.errorMessage}
        </div>`:""}`}};xo.styles=qd,xo.formAssociated=!0;let ja=xo;jo([_({type:Boolean})],ja.prototype,"showError");jo([_({type:String})],ja.prototype,"errorMessage");jo([_({type:Boolean,reflect:!0})],ja.prototype,"showDivider");customElements.get("nys-errormessage")||customElements.define("nys-errormessage",ja);async function Gd(a,n){const l=await a.slice(0,8).arrayBuffer(),r=new Uint8Array(l),c=r.length>=8&&r[0]===137&&r[1]===80&&r[2]===78&&r[3]===71&&r[4]===13&&r[5]===10&&r[6]===26&&r[7]===10,h=r.length>=4&&r[0]===37&&r[1]===80&&r[2]===68&&r[3]===70,d=r.length>=3&&r[0]===255&&r[1]===216&&r[2]===255,v=n.includes("image/")||n.includes("jpg")||n.includes("jpeg")||n.includes("png"),C=n.includes("pdf");return c&&v||d&&v||h&&C?!0:!n}const Yd=C1`
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
      var(--nys-color-neutral-300, #a7a9ab);
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
    border: var(--_nys-fileinput-dropzone-border);
    background: var(--_nys-fileinput-dropzone-background);
  }

  .nys-fileinput__dropzone:hover {
    cursor: pointer;
    --_nys-fileinput-dropzone-border: var(--nys-border-width-sm, 1px) dashed
      var(--nys-color-neutral-900, #1b1b1b);
  }

  .nys-fileinput__dropzone.drag-active {
    --_nys-fileinput-dropzone-border: var(--nys-border-width-sm, 1px) solid
      var(--nys-color-neutral-900, #1b1b1b);
    --_nys-fileinput-dropzone-background: var(--nys-color-theme-faint, #f7fafd);
  }

  .nys-fileinput__dropzone.error {
    --_nys-fileinput-dropzone-border: var(--nys-border-width-md, 2px) dashed
      var(--nys-color-danger, #b52c2c);
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
`,Xd=C1`
  :host {
    /* Global Filelistitem Styles */
    --_nys-filelistitem-items-radius: var(--nys-radius-md, 4px);
    --_nys-filelistitem-items-padding: var(--nys-space-100, 8px)
      var(--nys-space-200, 16px);
    --_nys-filelistitem-items-border: var(--nys-border-width-sm, 1px) solid
      var(--nys-color-neutral-100, #d0d0ce);
    --_nys-filelistitem-error-color: var(--nys-color-danger, #b52c2c);

    /* Typography */
    --_nys-filelistitem-font-family: var(
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
    --_nys-filelistitem-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-filelistitem-font-weight-400: var(--nys-font-weight-regular, 400);
    --_nys-filelistitem-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-filelistitem-letterspacing: var(
      --nys-font-letterspacing-ui-md,
      0.044px
    );

    /* Progress Bar */
    --_nys-filelistitem-progress-background: var(
      --nys-color-neutral-50,
      #ededed
    );
    --_nys-filelistitem-progress-fill-background: var(
      --nys-color-info,
      #004dd1
    );
  }

  /***** File List Item *****/
  .file-item {
    position: relative;
    border-radius: var(--_nys-filelistitem-items-radius);
    border: var(--_nys-filelistitem-items-border);
  }

  .file-item.error {
    --_nys-filelistitem-items-border: var(--nys-border-width-sm, 1px) solid
      var(--nys-color-danger, #b52c2c);
  }

  .file-item__main {
    display: flex;
    justify-items: center;
    align-items: center;
    gap: var(--_nys-fileinput-gap);
    padding: var(--_nys-filelistitem-items-padding);
    height: 56px;
    box-sizing: border-box;
  }

  .file-item__info {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: var(--_nys-filelistitem-font-family);
    font-size: var(--_nys-filelistitem-font-size);
    font-style: normal;
    font-weight: var(--_nys-filelistitem-font-weight-400);
    line-height: var(--_nys-filelistitem-line-height);
    letter-spacing: var(--_nys-filelistitem-letterspacing);
  }

  .file-item p {
    margin: 0;
  }

  .error-msg {
    color: var(--_nys-filelistitem-error-color);
    text-overflow: ellipsis;
  }

  /**** Progress Bar ****/
  progress {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 6px;
    border-radius: var(--nys-radius-round, 1776px);
    background: var(--_nys-filelistitem-progress-fill-background);
    overflow: hidden;
    appearance: none;
  }
  /* Track */
  progress::-moz-progress-bar {
    background: var(--_nys-filelistitem-progress-background);
  }
  /* Filled value (the blue bar) */
  progress::-webkit-progress-value {
    background: var(--_nys-filelistitem-progress-fill-background);
  }
  /* Firefox */
  progress::-webkit-progress-bar {
    background: var(--_nys-filelistitem-progress-background);
  }

  /**** Icon ****/
  .file-icon[name="progress_activity"] {
    animation: spin 1s linear infinite;
  }

  .file-icon[name="error"] {
    color: var(--_nys-filelistitem-error-color);
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;var Qd=Object.defineProperty,Ga=(a,n,l,r)=>{for(var c=void 0,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=d(n,l,c)||c);return c&&Qd(n,l,c),c};const A4=class extends i1{constructor(){super(...arguments),this.filename="",this.status="pending",this.progress=0,this.errorMessage=""}_handleRemove(){this.dispatchEvent(new CustomEvent("nys-fileRemove",{detail:{filename:this.filename},bubbles:!0,composed:!0}))}truncateFilename(n){const l=n.lastIndexOf(".");if(l===-1)return n.length>30?n.slice(0,30)+"...":n;const r=n.slice(l),c=n.slice(0,l),h=30;if(c.length<=h)return n;const d=c.slice(0,h-3),v=c.slice(-3);return`${d}...${v}${r}`}render(){return z`
      <div class="file-item ${this.status}">
        <div class="file-item__main" role="group" aria-label="Filename: ${this.filename}">
          <nys-icon
            class="file-icon"
            name=${this.status==="processing"?"progress_activity":this.status==="error"?"error":"attach_file"}
            size="2xl"
          ></nys-icon>
          <div class="file-item__info">
            <p">
              ${this.truncateFilename(this.filename)}
            </p>
            ${this.errorMessage?z`<p
                    class="error-msg"
                    role="alert"
                    aria-live="assertive"
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
          ></nys-button>
        </div>
        ${this.status==="processing"?z`<div
                class="progress-container"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="${this.progress}"
                aria-label="Upload progress for ${this.filename}"
              >
                <progress value=${this.progress} max="100"></progress>
              </div>`:null}
      </div>
    `}};A4.styles=Xd;let Qn=A4;Ga([_({type:String})],Qn.prototype,"filename");Ga([_({type:String})],Qn.prototype,"status");Ga([_({type:Number})],Qn.prototype,"progress");Ga([_({type:String})],Qn.prototype,"errorMessage");customElements.define("nys-filelistitem",Qn);var Kd=Object.defineProperty,Lt=(a,n,l,r)=>{for(var c=void 0,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=d(n,l,c)||c);return c&&Kd(n,l,c),c};let Pd=0;const wo=class extends i1{constructor(){super(),this.id="",this.name="",this.label="",this.description="",this.multiple=!1,this.accept="",this.disabled=!1,this.required=!1,this.optional=!1,this.showError=!1,this.errorMessage="",this.dropzone=!1,this.width="full",this._selectedFiles=[],this._dragActive=!1,this._internals=this.attachInternals()}get _isDropDisabled(){return this.disabled||!this.multiple&&this._selectedFiles.length>0}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-checkbox-${Date.now()}-${Pd++}`),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}_setValue(){var n;if(this.multiple){const l=this._selectedFiles.map(r=>r.file);if(l.length>0){const r=new FormData;l.forEach(c=>{r.append(this.name,c)}),this._internals.setFormValue(r)}else this._internals.setFormValue(null)}else{const l=((n=this._selectedFiles[0])==null?void 0:n.file)||null;this._internals.setFormValue(l)}this._manageRequire()}_manageRequire(){var n;const l=(n=this.shadowRoot)==null?void 0:n.querySelector("input");if(!l)return;const r=this.errorMessage||"Please upload a file.";this.required&&this._selectedFiles.length==0?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},r,l)):(this._internals.ariaRequired="false",this._internals.setValidity({}))}_setValidityMessage(n=""){var l,r;const c=(l=this.shadowRoot)==null?void 0:l.querySelector("input");c&&(this.showError=n===(this.errorMessage||"Please upload a file."),(r=this.errorMessage)!=null&&r.trim()&&n!==""&&(n=this.errorMessage),this._internals.setValidity(n?{customError:!0}:{},n,c))}_validate(){const n=this._selectedFiles.some(c=>c.status==="error"),l=this.required&&this._selectedFiles.length===0;let r="";l?r=this.errorMessage||"Please upload a file.":n&&(r="One or more files are invalid."),this._setValidityMessage(r)}async _saveSelectedFiles(n){if(this._selectedFiles.some(r=>r.file.name==n.name)||!this.multiple&&this._selectedFiles.length>=1)return;const l={file:n,progress:0,status:"pending"};this._selectedFiles.push(l),await this._processFile(l),this._setValue(),this._validate()}async _processFile(n){n.status="processing";try{if(!await Gd(n.file,this.accept)){n.status="error",n.errorMsg="File format does not match expected type.",this.requestUpdate();return}const l=new FileReader;l.onprogress=r=>{if(r.lengthComputable){const c=Math.round(r.loaded*100/r.total);n.progress=c,this.requestUpdate()}},l.onload=()=>{n.progress=100,n.status="done",this.requestUpdate()},l.onerror=()=>{n.status="error",n.errorMsg="Failed to load file.",this.requestUpdate()},l.readAsArrayBuffer(n.file)}catch{n.status="error",n.errorMsg="Error validating file.",this.requestUpdate()}}_dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("nys-change",{detail:{files:this._selectedFiles},bubbles:!0,composed:!0}))}_openFileDialog(){const n=this.renderRoot.querySelector(".hidden-file-input");n==null||n.click()}_handleFileChange(n){const l=n.target,r=l.files;(r?Array.from(r):[]).map(c=>{this._saveSelectedFiles(c)}),l.value="",this.requestUpdate(),this._dispatchChangeEvent()}_handleFileRemove(n){const l=n.detail.filename;this._selectedFiles=this._selectedFiles.filter(r=>r.file.name!==l),this._setValue(),this._validate(),this.requestUpdate(),this._dispatchChangeEvent()}_onDragOver(n){this.disabled||(n.stopPropagation(),n.preventDefault(),this._dragActive||(this._dragActive=!0,this.requestUpdate()))}_onDragLeave(n){this.disabled||(n.stopPropagation(),n.preventDefault(),n.currentTarget===n.target&&(this._dragActive=!1,this.requestUpdate()))}_onDrop(n){var l;if(this.disabled)return;n.preventDefault(),this._dragActive=!1,this.requestUpdate();const r=(l=n.dataTransfer)==null?void 0:l.files;if(!r)return;const c=Array.from(r);this.multiple?c.forEach(h=>{this._saveSelectedFiles(h)}):this._saveSelectedFiles(c[0]),this.requestUpdate(),this._dispatchChangeEvent()}_handleInvalid(n){var l;n.preventDefault(),this._validate();const r=(l=this.shadowRoot)==null?void 0:l.querySelector("input");if(r){const c=this._internals.form;c?Array.from(c.elements).find(h=>typeof h.checkValidity=="function"&&!h.checkValidity())===this&&r.focus():r.focus()}}render(){return z`<div
      class="nys-fileinput"
      @nys-fileRemove=${this._handleFileRemove}
    >
      <nys-label
        id=${this.id}
        label=${this.label}
        description=${this.description}
        flag=${this.required?"required":this.optional?"optional":""}
      >
        <slot name="description" slot="description">${this.description}</slot>
      </nys-label>

      <input
        id=${this.id}
        class="hidden-file-input"
        type="file"
        name=${this.name}
        ?multiple=${this.multiple}
        accept=${this.accept}
        ?required=${this.required}
        ?disabled=${this.disabled||!this.multiple&&this._selectedFiles.length>0}
        aria-disabled="${this.disabled}"
        aria-label="Drag files here or choose from folder"
        aria-describedby="file-input-specific-hint"
        style="position: absolute; width: 1px; height: 1px; opacity: 0;"
        @change=${this._handleFileChange}
      />

      ${this.dropzone?z`<div
            class="nys-fileinput__dropzone
            ${this._dragActive?"drag-active":""}
            ${this._isDropDisabled?"disabled":""}
            ${this.showError&&!this._isDropDisabled?"error":""}"
            @click=${this._isDropDisabled?null:this._openFileDialog}
            @keydown=${n=>!this._isDropDisabled&&(n.key==="Enter"||n.key===" ")&&this._openFileDialog()}
            @dragover=${this._isDropDisabled?null:this._onDragOver}
            @dragleave=${this._isDropDisabled?null:this._onDragLeave}
            @drop=${this._isDropDisabled?null:this._onDrop}
          >
            ${this._dragActive?z`<p>Drop file to upload</p>`:z` <nys-button
                    id="file-btn"
                    name="file-btn"
                    label=${this.multiple?"Choose files":"Choose file"}
                    variant="outline"
                    ?disabled=${this._isDropDisabled}
                    .onClick=${n=>{n.stopPropagation(),this._openFileDialog()}}
                  ></nys-button>
                  <p>or drag here</p>`}
          </div>`:z`<nys-button
            id="file-btn"
            name="file-btn"
            label=${this.multiple?"Choose files":"Choose file"}
            variant="outline"
            ?disabled=${this.disabled||!this.multiple&&this._selectedFiles.length>0}
            .onClick=${()=>this._openFileDialog()}
          ></nys-button>`}
      ${this.showError?z`
            <nys-errormessage
              ?showError=${this.showError}
              errorMessage=${this._internals.validationMessage||this.errorMessage}
            ></nys-errormessage>
          `:null}
      ${this._selectedFiles.length>0?z`
            <ul>
              ${this._selectedFiles.map(n=>z`<li>
                    <nys-filelistitem filename=${n.file.name} status=${n.status} progress=${n.progress} errorMessage=${n.errorMsg||""}></nys-filelistitem>
                  </li>`)}
            </ul>
          `:null}
    </div>`}};wo.styles=Yd,wo.formAssociated=!0;let ft=wo;Lt([_({type:String})],ft.prototype,"id");Lt([_({type:String,reflect:!0})],ft.prototype,"name");Lt([_({type:String})],ft.prototype,"label");Lt([_({type:String})],ft.prototype,"description");Lt([_({type:Boolean})],ft.prototype,"multiple");Lt([_({type:String})],ft.prototype,"accept");Lt([_({type:Boolean,reflect:!0})],ft.prototype,"disabled");Lt([_({type:Boolean,reflect:!0})],ft.prototype,"required");Lt([_({type:Boolean,reflect:!0})],ft.prototype,"optional");Lt([_({type:Boolean,reflect:!0})],ft.prototype,"showError");Lt([_({type:String})],ft.prototype,"errorMessage");Lt([_({type:Boolean})],ft.prototype,"dropzone");Lt([_({type:String,reflect:!0})],ft.prototype,"width");customElements.get("nys-fileinput")||customElements.define("nys-fileinput",ft);const Jd={account_circle:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
</svg>`},Fd=C1`
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
`;var Wd=Object.defineProperty,Id=Object.getOwnPropertyDescriptor,fs=(a,n,l,r)=>{for(var c=r>1?void 0:r?Id(n,l):n,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=(r?d(n,l,c):d(c))||c);return r&&c&&Wd(n,l,c),c},wn;const o5=(wn=class extends i1{constructor(){super(...arguments),this.name="",this.label="",this.rotate="0",this.flip="",this.color="",this._size="sm"}get size(){return this._size}set size(a){this._size=wn.VALID_TYPES.includes(a)?a:"sm"}getIcon(){const a=Jd[this.name];if(!a)return null;const n=new DOMParser().parseFromString(a,"image/svg+xml").documentElement;return n instanceof SVGElement?(n.setAttribute("role","img"),this.label?(n.setAttribute("aria-label",this.label),n.removeAttribute("aria-hidden")):(n.setAttribute("aria-hidden","true"),n.removeAttribute("aria-label")),n.style.rotate=`${this.rotate}deg`,n.style.color=this.color||"currentcolor",n.classList.add(`nys-icon--${this.size}`),n.classList.add("nys-icon--svg"),this.flip&&n.classList.add(`nys-icon--flip-${this.flip}`),n):null}render(){const a=this.getIcon();return a?z`${a}`:null}},wn.styles=Fd,wn.VALID_TYPES=["2xs","xs","sm","md","lg","xl","2xl","3xl","4xl","12","16","24","32","40","48","64"],wn);fs([_({type:String,reflect:!0})],o5.prototype,"name",2);fs([_({type:String})],o5.prototype,"label",2);fs([_({type:String})],o5.prototype,"rotate",2);fs([_({type:String})],o5.prototype,"flip",2);fs([_({type:String})],o5.prototype,"color",2);fs([_({reflect:!0})],o5.prototype,"size",1);let tf=o5;customElements.get("nys-icon")||customElements.define("nys-icon",tf);const ef=C1`
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
`;var sf=Object.defineProperty,Ya=(a,n,l,r)=>{for(var c=void 0,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=d(n,l,c)||c);return c&&sf(n,l,c),c};const M4=class extends i1{constructor(){super(...arguments),this.id="",this.label="",this.description="",this.flag=""}render(){return z`
      <div class="nys-label">
        <label for=${this.id} class="nys-label__label"
          >${this.label}
          ${this.flag==="required"?z`<label class="nys-label__required">*</label>`:""}
          ${this.flag==="optional"?z`<label class="nys-label__optional">(Optional)</label>`:""}</label
        >
        <label for=${this.id} class="nys-label__description">
          <slot name="description">${this.description}</slot>
        </label>
      </div>
    `}};M4.styles=ef;let Kn=M4;Ya([_({type:String})],Kn.prototype,"id");Ya([_({type:String})],Kn.prototype,"label");Ya([_({type:String})],Kn.prototype,"description");Ya([_({type:String})],Kn.prototype,"flag");customElements.get("nys-label")||customElements.define("nys-label",Kn);const D4=C1`
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
  }

  /* Pointer cursor for unchecked radio button */
  .nys-radiobutton:hover,
  .nys-radiobutton:hover * {
    cursor: pointer;
  }

  /* Checked */
  .nys-radiobutton__radio:not(:disabled):checked {
    background-image: url('data:image/svg+xml;utf8,<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="11" stroke="white" stroke-width="6"/></svg>');
    background-color: var(--_nys-radiobutton-checked-color-bg);
  }
  :host([tile])
    .nys-radiobutton:has(.nys-radiobutton__radio:not(:disabled):checked) {
    border-color: var(--_nys-radiobutton-checked-tile-border-color);
    background-color: var(--_nys-radiobutton-checked-tile-bg-color);
  }
  :host([tile])
    .nys-radiobutton:has(.nys-radiobutton__radio:not(:disabled):checked:hover) {
    cursor: default;
  }

  /* Checked + Disabled */
  .nys-radiobutton__radio:disabled:checked {
    background-image: url('data:image/svg+xml;utf8,<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="11" stroke="white" stroke-width="6"/></svg>');
    border-color: var(--_nys-radiobutton-disabled-checked-color-border);
    background-color: var(--_nys-radiobutton-disabled-checked-color-bg);
  }
  :host([tile]) .nys-radiobutton:has(.nys-radiobutton__radio:disabled:checked) {
    border-color: var(--_nys-radiobutton-disabled-tile-border-color);
    background-color: var(--_nys-radiobutton-disabled-tile-bg-color);
  }

  /* Disabled */
  .nys-radiobutton__radio:disabled {
    background-color: var(--_nys-radiobutton-disabled-color-bg);
    border-color: var(--_nys-radiobutton-disabled-color-border);
    cursor: not-allowed;
  }
  :host([tile]) .nys-radiobutton:has(.nys-radiobutton__radio:disabled) {
    background-color: var(--_nys-radiobutton-disabled-color-bg);
    border-color: var(--_nys-radiobutton-disabled-color-border);
    cursor: not-allowed;
  }

  /* Hover - only allow hover on unchecked */
  .nys-radiobutton__radio:hover:not(:disabled):not(:checked) {
    border-color: var(--_nys-radiobutton-hover-color-border);
    background-color: var(--_nys-radiobutton-hover-color-bg);
  }
  :host([tile])
    .nys-radiobutton:has(
      .nys-radiobutton__radio:hover:not(:disabled):not(:checked)
    ) {
    border-color: var(--_nys-radiobutton-hover-tile-border-color);
    background-color: var(--_nys-radiobutton-hover-tile-bg-color);
    outline: solid var(--_nys-radiobutton-tile-border-width)
      var(--_nys-radiobutton-hover-tile-border-color);
  }

  /* Pressed - only allow pressed on unchecked */
  .nys-radiobutton__radio:active:not(:disabled):not(:checked) {
    border-color: var(--_nys-radiobutton-pressed-color-border);
    background-color: var(--_nys-radiobutton-pressed-color-bg);
  }
  :host([tile])
    .nys-radiobutton:has(
      .nys-radiobutton__radio:active:not(:disabled):not(:checked)
    ) {
    border-color: var(--_nys-radiobutton-pressed-tile-border-color);
    background-color: var(--_nys-radiobutton-pressed-tile-bg-color);
    outline: solid var(--_nys-radiobutton-tile-border-width)
      var(--_nys-radiobutton-pressed-tile-border-color);
  }

  /* Focused */
  :host(:not([tile])) .nys-radiobutton__radio:focus-visible {
    outline: solid var(--_nys-radiobutton-width-focus)
      var(--_nys-radiobutton-color-focus);
  }
  :host([tile]) .nys-radiobutton:has(*:focus-visible) {
    outline: solid var(--_nys-radiobutton-tile-border-width)
      var(--_nys-radiobutton-color-focus) !important;
    border-color: var(--_nys-radiobutton-color-focus) !important;
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
  .nys-radiobutton__radio:disabled
    + .nys-radiobutton__text
    .nys-radiobutton__label,
  .nys-radiobutton__radio:disabled
    + .nys-radiobutton__text
    .nys-radiobutton__description {
    color: var(--_nys-radiobutton-disabled-color-text);
    cursor: not-allowed;
  }
`;var nf=Object.defineProperty,af=Object.getOwnPropertyDescriptor,ie=(a,n,l,r)=>{for(var c=r>1?void 0:r?af(n,l):n,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=(r?d(n,l,c):d(c))||c);return r&&c&&nf(n,l,c),c};let lf=0;var P5;const Jt=(P5=class extends i1{constructor(){super(),this.id="",this.name="",this.required=!1,this.optional=!1,this.showError=!1,this.errorMessage="",this.label="",this.description="",this.selectedValue=null,this._size="md",this.tile=!1,this._internals=this.attachInternals()}get size(){return this._size}set size(a){this._size=P5.VALID_SIZES.includes(a)?a:"md"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-radiogroup-${Date.now()}-${lf++}`),this.addEventListener("nys-change",this._handleRadioButtonChange),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("nys-change",this._handleRadioButtonChange),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._initializeCheckedRadioValue(),this._setValue(),this.setRadioButtonRequire(),this._updateRadioButtonsSize(),this._updateRadioButtonsTile(),this._updateRadioButtonsShowError()}updated(a){(a.has("required")||a.has("selectedValue"))&&this._manageRequire(),a.has("size")&&this._updateRadioButtonsSize(),a.has("tile")&&this._updateRadioButtonsTile(),a.has("showError")&&this._updateRadioButtonsShowError()}formResetCallback(){this.querySelectorAll("nys-radiobutton").forEach(a=>{a.formResetUpdate()})}_setValue(){this._internals.setFormValue(this.selectedValue)}setRadioButtonRequire(){this.querySelectorAll("nys-radiobutton").forEach((a,n)=>{this.required&&n===0&&a.setAttribute("required","required")})}async _manageRequire(){const a=this.errorMessage||"Please select an option.",n=this.querySelector("nys-radiobutton"),l=n?await n.getInputElement():null;l&&(this.required&&!this.selectedValue?this._internals.setValidity({valueMissing:!0},a,l):(this.showError=!1,this._internals.setValidity({},"",l)))}_initializeCheckedRadioValue(){const a=this.querySelector("nys-radiobutton[checked]");a&&(this.selectedValue=a.getAttribute("value"),this._internals.setFormValue(this.selectedValue))}_updateRadioButtonsSize(){this.querySelectorAll("nys-radiobutton").forEach(a=>{a.setAttribute("size",this.size)})}_updateRadioButtonsTile(){this.querySelectorAll("nys-radiobutton").forEach(a=>{this.tile?a.toggleAttribute("tile",!0):a.removeAttribute("tile")})}_updateRadioButtonsShowError(){this.querySelectorAll("nys-radiobutton").forEach(a=>{this.showError?a.setAttribute("showError",""):a.removeAttribute("showError")})}_handleRadioButtonChange(a){const n=a,{name:l,value:r}=n.detail;this.name=l,this.selectedValue=r,this._internals.setFormValue(this.selectedValue)}async _handleInvalid(a){if(a.preventDefault(),this._internals.validity.valueMissing){this.showError=!0,this._manageRequire();const n=this.querySelector("nys-radiobutton"),l=n?await n.getInputElement():null;if(l){const r=this._internals.form;r?Array.from(r.elements).find(c=>{if(c.tagName.toLowerCase()==="nys-radiogroup"){if(!c.querySelector("nys-radiobutton").checkValidity())return c}else return typeof c.checkValidity=="function"&&!c.checkValidity()})===this&&l.focus():l.focus()}}}render(){return z` <div
      role="radiogroup"
      class="nys-radiogroup"
      aria-required="${this.required?"true":"false"}"
      aria-invalid="${this.showError?"true":"false"}"
    >
      <nys-label
        id=${this.id}
        label=${this.label}
        description=${this.description}
        flag=${this.required?"required":this.optional?"optional":""}
      >
        <slot name="description" slot="description">${this.description}</slot>
      </nys-label>
      <div class="nys-radiogroup__content">
        <slot></slot>
      </div>
      <nys-errormessage
        ?showError=${this.showError}
        errorMessage=${this._internals.validationMessage||this.errorMessage}
        .showDivider=${!this.tile}
      ></nys-errormessage>
    </div>`}},P5.VALID_SIZES=["sm","md"],P5.styles=D4,P5.formAssociated=!0,P5);ie([_({type:String})],Jt.prototype,"id",2);ie([_({type:String,reflect:!0})],Jt.prototype,"name",2);ie([_({type:Boolean,reflect:!0})],Jt.prototype,"required",2);ie([_({type:Boolean,reflect:!0})],Jt.prototype,"optional",2);ie([_({type:Boolean,reflect:!0})],Jt.prototype,"showError",2);ie([_({type:String})],Jt.prototype,"errorMessage",2);ie([_({type:String})],Jt.prototype,"label",2);ie([_({type:String})],Jt.prototype,"description",2);ie([Ze()],Jt.prototype,"selectedValue",2);ie([_({reflect:!0})],Jt.prototype,"size",1);ie([_({type:Boolean,reflect:!0})],Jt.prototype,"tile",2);let z4=Jt;customElements.get("nys-radiogroup")||customElements.define("nys-radiogroup",z4);var rf=Object.defineProperty,of=Object.getOwnPropertyDescriptor,Ce=(a,n,l,r)=>{for(var c=r>1?void 0:r?of(n,l):n,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=(r?d(n,l,c):d(c))||c);return r&&c&&rf(n,l,c),c};let cf=0;var m1;const ae=(m1=class extends i1{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.required=!1,this.label="",this.description="",this.id="",this.name="",this.value="",this._size="md",this.tile=!1}get size(){return this._size}set size(a){this._size=m1.VALID_SIZES.includes(a)?a:"md"}async getInputElement(){var a;return await this.updateComplete,((a=this.shadowRoot)==null?void 0:a.querySelector("input"))||null}formResetUpdate(){this.checked=!1}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-radiobutton-${Date.now()}-${cf++}`),this.checked&&(m1.buttonGroup[this.name]&&(m1.buttonGroup[this.name].checked=!1,m1.buttonGroup[this.name].requestUpdate()),m1.buttonGroup[this.name]=this)}updated(a){a.has("checked")&&this.checked&&m1.buttonGroup[this.name]!==this&&(m1.buttonGroup[this.name]&&(m1.buttonGroup[this.name].checked=!1,m1.buttonGroup[this.name].requestUpdate()),m1.buttonGroup[this.name]=this)}checkValidity(){var a;if(this.required&&!this.checked)return!1;const n=(a=this.shadowRoot)==null?void 0:a.querySelector("input");return n?n.checkValidity():!0}_emitChangeEvent(){this.dispatchEvent(new CustomEvent("nys-change",{detail:{checked:this.checked,name:this.name,value:this.value},bubbles:!0,composed:!0}))}_handleChange(){this.checked||(m1.buttonGroup[this.name]&&(m1.buttonGroup[this.name].checked=!1,m1.buttonGroup[this.name].requestUpdate()),m1.buttonGroup[this.name]=this,this.checked=!0,this._emitChangeEvent())}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this.dispatchEvent(new Event("nys-blur"))}_handleKeydown(a){a.code==="Space"&&(a.preventDefault(),!this.disabled&&!this.checked&&(m1.buttonGroup[this.name]&&(m1.buttonGroup[this.name].checked=!1,m1.buttonGroup[this.name].requestUpdate()),m1.buttonGroup[this.name]=this,this.checked=!0,this._emitChangeEvent()))}render(){return z`
      <label class="nys-radiobutton">
        <input
          id="${this.id}"
          class="nys-radiobutton__radio"
          type="radio"
          name="${d1(this.name?this.name:void 0)}"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          .value=${this.value}
          ?required="${this.required}"
          aria-checked="${this.checked?"true":"false"}"
          aria-disabled="${this.disabled?"true":"false"}"
          aria-required="${this.required?"true":"false"}"
          @change="${this._handleChange}"
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
          @keydown="${this._handleKeydown}"
        />
        ${this.label&&z` <div class="nys-radiobutton__text">
          <label for=${this.id} class="nys-radiobutton__label"
            >${this.label}</label
          >
          <label for=${this.id} class="nys-radiobutton__description">
            <slot name="description">${this.description}</slot>
          </label>
        </div>`}
      </label>
    `}},m1.VALID_SIZES=["sm","md"],m1.buttonGroup={},m1.styles=D4,m1);Ce([_({type:Boolean,reflect:!0})],ae.prototype,"checked",2);Ce([_({type:Boolean,reflect:!0})],ae.prototype,"disabled",2);Ce([_({type:Boolean,reflect:!0})],ae.prototype,"required",2);Ce([_({type:String})],ae.prototype,"label",2);Ce([_({type:String})],ae.prototype,"description",2);Ce([_({type:String})],ae.prototype,"id",2);Ce([_({type:String,reflect:!0})],ae.prototype,"name",2);Ce([_({type:String})],ae.prototype,"value",2);Ce([_({reflect:!0})],ae.prototype,"size",1);Ce([_({type:Boolean,reflect:!0})],ae.prototype,"tile",2);let L4=ae;customElements.get("nys-radiobutton")||customElements.define("nys-radiobutton",L4);const uf=C1`
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
    min-width: var(--_nys-select-width);
    max-width: var(--_nys-select-width);
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
`;var hf=Object.defineProperty,Pn=(a,n,l,r)=>{for(var c=void 0,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=d(n,l,c)||c);return c&&hf(n,l,c),c};class S2 extends i1{constructor(){super(...arguments),this.disabled=!1,this.selected=!1,this.value="",this.label="",this.hidden=!1}firstUpdated(){var n;const l=(n=this.shadowRoot)==null?void 0:n.querySelector("slot");l&&l.addEventListener("slotchange",()=>{var r;const c=l.assignedNodes({flatten:!0});c.length>0&&(this.label=((r=c[0].textContent)==null?void 0:r.trim())||"")})}render(){return z`
      <option
        ?disabled=${this.disabled}
        ?selected=${this.selected}
        value=${this.value}
        label=${this.label}
        ?hidden=${this.hidden}
      >
        <slot>${this.label}</slot>
      </option>
    `}}Pn([_({type:Boolean,reflect:!0})],S2.prototype,"disabled");Pn([_({type:Boolean,reflect:!0})],S2.prototype,"selected");Pn([_({type:String})],S2.prototype,"value");Pn([_({type:String})],S2.prototype,"label");Pn([_({type:Boolean,reflect:!0})],S2.prototype,"hidden");customElements.define("nys-option",S2);var df=Object.defineProperty,ff=Object.getOwnPropertyDescriptor,Ft=(a,n,l,r)=>{for(var c=r>1?void 0:r?ff(n,l):n,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=(r?d(n,l,c):d(c))||c);return r&&c&&df(n,l,c),c};let yf=0;var J5;const Ht=(J5=class extends i1{constructor(){super(),this.id="",this.name="",this.label="",this.description="",this.value="",this.disabled=!1,this.required=!1,this.optional=!1,this.form="",this.showError=!1,this.errorMessage="",this._width="md",this._hasUserInteracted=!1,this._internals=this.attachInternals()}get width(){return this._width}set width(a){this._width=J5.VALID_WIDTHS.includes(a)?a:"full"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-select-${Date.now()}-${yf++}`),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}formResetCallback(){this.value=""}_handleSlotChange(){var a,n;const l=(a=this.shadowRoot)==null?void 0:a.querySelector('slot:not([name="description"])'),r=(n=this.shadowRoot)==null?void 0:n.querySelector("select");!l||!r||(r.querySelectorAll("option:not([hidden])").forEach(c=>c.remove()),l.assignedElements({flatten:!0}).forEach(c=>{var h;if(c instanceof S2){const d=document.createElement("option");d.value=c.value,d.textContent=c.label||((h=c.textContent)==null?void 0:h.trim())||"",d.disabled=c.disabled,d.selected=c.selected,r.appendChild(d)}}))}_setValue(){this._internals.setFormValue(this.value),this._manageRequire()}_manageRequire(){var a;const n=(a=this.shadowRoot)==null?void 0:a.querySelector("select");if(!n)return;const l=this.errorMessage||"Please select an option.";this.required&&!this.value?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},l,n)):(this._internals.ariaRequired="false",this._internals.setValidity({}),this._hasUserInteracted=!1)}_setValidityMessage(a=""){var n,l;const r=(n=this.shadowRoot)==null?void 0:n.querySelector("select");r&&(this.showError=!!a,(l=this.errorMessage)!=null&&l.trim()&&a!==""&&(a=this.errorMessage),this._internals.setValidity(a?{customError:!0}:{},a,r))}_validate(){var a;const n=(a=this.shadowRoot)==null?void 0:a.querySelector("select");if(!n)return;let l=n.validationMessage;this._manageRequire(),this._setValidityMessage(l)}checkValidity(){var a;const n=(a=this.shadowRoot)==null?void 0:a.querySelector("select");return n?n.checkValidity():!0}_handleInvalid(a){var n;a.preventDefault(),this._hasUserInteracted=!0,this._validate(),this.showError=!0;const l=(n=this.shadowRoot)==null?void 0:n.querySelector("select");if(l){const r=this._internals.form;r?Array.from(r.elements).find(c=>typeof c.checkValidity=="function"&&!c.checkValidity())===this&&l.focus():l.focus()}}_handleChange(a){const n=a.target;this.value=n.value,this._internals.setFormValue(this.value),this._hasUserInteracted&&this._validate(),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this._hasUserInteracted||(this._hasUserInteracted=!0),this._validate(),this.dispatchEvent(new Event("nys-blur"))}updated(a){var n;if(super.updated(a),a.has("value")){const l=(n=this.shadowRoot)==null?void 0:n.querySelector("select");l&&(l.value=this.value)}}render(){return z`
      <div class="nys-select">
        <nys-label
          id=${this.id}
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
    `}},J5.VALID_WIDTHS=["sm","md","lg","full"],J5.styles=uf,J5.formAssociated=!0,J5);Ft([_({type:String})],Ht.prototype,"id",2);Ft([_({type:String,reflect:!0})],Ht.prototype,"name",2);Ft([_({type:String})],Ht.prototype,"label",2);Ft([_({type:String})],Ht.prototype,"description",2);Ft([_({type:String})],Ht.prototype,"value",2);Ft([_({type:Boolean,reflect:!0})],Ht.prototype,"disabled",2);Ft([_({type:Boolean,reflect:!0})],Ht.prototype,"required",2);Ft([_({type:Boolean,reflect:!0})],Ht.prototype,"optional",2);Ft([_({type:String})],Ht.prototype,"form",2);Ft([_({type:Boolean,reflect:!0})],Ht.prototype,"showError",2);Ft([_({type:String})],Ht.prototype,"errorMessage",2);Ft([_({reflect:!0})],Ht.prototype,"width",1);let H4=Ht;customElements.get("nys-select")||customElements.define("nys-select",H4);const pf=C1`
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
`;var vf=Object.defineProperty,U4=(a,n,l,r)=>{for(var c=void 0,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=d(n,l,c)||c);return c&&vf(n,l,c),c};const O4=class extends i1{constructor(){super(),this.id="",this.href=""}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-skipnav-${Date.now()}`)}_handleFocus(){var n;const l=(n=this.shadowRoot)==null?void 0:n.querySelector(".nys-skipnav__link");l==null||l.classList.add("show")}_handleBlur(){var n;const l=(n=this.shadowRoot)==null?void 0:n.querySelector(".nys-skipnav__link");l==null||l.classList.remove("show")}_handleClick(){const n=(this.href||"#main-content").replace("#",""),l=document.getElementById(n);l&&(l.setAttribute("tabindex","-1"),l.focus(),l.style.outline="none")}render(){return z`
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
    `}};O4.styles=pf;let Xa=O4;U4([_({type:String})],Xa.prototype,"id");U4([_({type:String})],Xa.prototype,"href");customElements.get("nys-skipnav")||customElements.define("nys-skipnav",Xa);const Cf=C1`
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
`;var gf=Object.defineProperty,bf=Object.getOwnPropertyDescriptor,at=(a,n,l,r)=>{for(var c=r>1?void 0:r?bf(n,l):n,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=(r?d(n,l,c):d(c))||c);return r&&c&&gf(n,l,c),c};let _f=0;var v2;const et=(v2=class extends i1{constructor(){super(),this.id="",this.name="",this.label="",this.description="",this.placeholder="",this.value="",this.disabled=!1,this.readonly=!1,this.required=!1,this.optional=!1,this.form="",this.maxlength=null,this.width="full",this.rows=4,this._resize="vertical",this.showError=!1,this.errorMessage="",this._hasUserInteracted=!1,this._internals=this.attachInternals()}get resize(){return this._resize}set resize(a){this._resize=v2.VALID_RESIZE.includes(a)?a:"vertical"}async updated(a){await Promise.resolve(),a.has("width")&&(this.width=v2.VALID_WIDTHS.includes(this.width)?this.width:"full"),a.has("rows")&&(this.rows=this.rows??4)}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-textarea-${Date.now()}-${_f++}`),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}formResetCallback(){this.value=""}_setValue(){this._internals.setFormValue(this.value),this._manageRequire()}_manageRequire(){var a;const n=(a=this.shadowRoot)==null?void 0:a.querySelector("textarea");if(!n)return;const l=this.errorMessage||"This field is required";this.required&&!this.value?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},l,n)):(this._internals.ariaRequired="false",this._internals.setValidity({}),this._hasUserInteracted=!1)}_setValidityMessage(a=""){var n,l;const r=(n=this.shadowRoot)==null?void 0:n.querySelector("textarea");r&&(this.showError=!!a,(l=this.errorMessage)!=null&&l.trim()&&a!==""&&(a=this.errorMessage),this._internals.setValidity(a?{customError:!0}:{},a,r))}_validate(){var a;const n=(a=this.shadowRoot)==null?void 0:a.querySelector("textarea");if(!n)return;let l=n.validationMessage;this._setValidityMessage(l)}checkValidity(){var a;const n=(a=this.shadowRoot)==null?void 0:a.querySelector("textarea");return n?n.checkValidity():!0}_handleInvalid(a){var n;a.preventDefault(),this._hasUserInteracted=!0,this._validate();const l=(n=this.shadowRoot)==null?void 0:n.querySelector("textarea");if(l){const r=this._internals.form;r?Array.from(r.elements).find(c=>typeof c.checkValidity=="function"&&!c.checkValidity())===this&&l.focus():l.focus()}}_handleInput(a){const n=a.target;this.value=n.value,this._internals.setFormValue(this.value),this._hasUserInteracted&&this._validate(),this.dispatchEvent(new CustomEvent("nys-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this._hasUserInteracted||(this._hasUserInteracted=!0),this._validate(),this.dispatchEvent(new Event("nys-blur"))}_handleSelect(a){const n=a.target;this.value=n.value,this.dispatchEvent(new CustomEvent("nys-select",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleSelectionChange(a){const n=a.target;this.value=n.value,this.dispatchEvent(new CustomEvent("selectionchange",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return z`
      <label class="nys-textarea">
        <nys-label
          id=${this.id}
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
          aria-disabled=${d1(this.disabled?"true":void 0)}
          aria-required=${d1(this.required?"true":void 0)}
          placeholder=${d1(this.placeholder?this.placeholder:void 0)}
          maxlength=${d1(this.maxlength!==""?this.maxlength:void 0)}
          .rows=${this.rows}
          form=${d1(this.form||void 0)}
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
    `}},v2.VALID_WIDTHS=["sm","md","lg","full"],v2.VALID_RESIZE=["vertical","none"],v2.styles=Cf,v2.formAssociated=!0,v2);at([_({type:String})],et.prototype,"id",2);at([_({type:String,reflect:!0})],et.prototype,"name",2);at([_({type:String})],et.prototype,"label",2);at([_({type:String})],et.prototype,"description",2);at([_({type:String})],et.prototype,"placeholder",2);at([_({type:String})],et.prototype,"value",2);at([_({type:Boolean,reflect:!0})],et.prototype,"disabled",2);at([_({type:Boolean,reflect:!0})],et.prototype,"readonly",2);at([_({type:Boolean,reflect:!0})],et.prototype,"required",2);at([_({type:Boolean,reflect:!0})],et.prototype,"optional",2);at([_({type:String})],et.prototype,"form",2);at([_({type:Number})],et.prototype,"maxlength",2);at([_({reflect:!0})],et.prototype,"width",2);at([_({type:Number})],et.prototype,"rows",2);at([_({reflect:!0})],et.prototype,"resize",1);at([_({type:Boolean,reflect:!0})],et.prototype,"showError",2);at([_({type:String})],et.prototype,"errorMessage",2);let V4=et;customElements.get("nys-textarea")||customElements.define("nys-textarea",V4);const mf=C1`
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

  .nys-textinput__input {
    color: var(--_nys-textinput-text-color);
    font-size: var(--_nys-textinput-size-ui-md);
    border-radius: var(--_nys-textinput-radius);
    border: solid var(--_nys-textinput-color-border)
      var(--_nys-textinput-width-border);
    padding: var(--_nys-textinput-padding);
    width: 100%;
    height: var(--_nys-textinput-height);
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    background-color: var(--_nys-textinput-background-color);
  }
  .nys-textinput__input::placeholder {
    color: var(--_nys-textinput-placeholder-color);
  }

  .nys-textinput__buttoncontainer {
    width: var(--_nys-textinput-width);
    min-width: var(--_nys-textinput-width);
    max-width: var(--_nys-textinput-width);
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

  /* This container exist to mainly style the type="password" eye icon */
  .nys-textinput__container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
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
`;var xf=Object.defineProperty,wf=Object.getOwnPropertyDescriptor,A1=(a,n,l,r)=>{for(var c=r>1?void 0:r?wf(n,l):n,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=(r?d(n,l,c):d(c))||c);return r&&c&&xf(n,l,c),c};let kf=0;var C2;const S1=(C2=class extends i1{constructor(){super(),this.id="",this.name="",this._type="text",this.label="",this.description="",this.placeholder="",this.value="",this.disabled=!1,this.readonly=!1,this.required=!1,this.optional=!1,this.form="",this.pattern="",this.maxlength=null,this.width="full",this.step=null,this.min=null,this.max=null,this.showError=!1,this.errorMessage="",this.showPassword=!1,this._originalErrorMessage="",this._hasUserInteracted=!1,this._internals=this.attachInternals()}get type(){return this._type}set type(a){this._type=C2.VALID_TYPES.includes(a)?a:"text"}async updated(a){a.has("width")&&(await Promise.resolve(),this.width=C2.VALID_WIDTHS.includes(this.width)?this.width:"full"),a.has("disabled")&&(this._validateButtonSlot("startButton"),this._validateButtonSlot("endButton"))}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-textinput-${Date.now()}-${kf++}`),this._originalErrorMessage=this.errorMessage??"",this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}formResetCallback(){this.value=""}_setValue(){this._internals.setFormValue(this.value),this._manageRequire()}_manageRequire(){var a,n;const l=(a=this.shadowRoot)==null?void 0:a.querySelector("input");if(!l)return;const r=this.errorMessage||"This field is required";this.required&&(!this.value||((n=this.value)==null?void 0:n.trim())==="")?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},r,l)):(this._internals.ariaRequired="false",this._internals.setValidity({}),this._hasUserInteracted=!1)}_setValidityMessage(a=""){var n,l;const r=(n=this.shadowRoot)==null?void 0:n.querySelector("input");if(!r)return;this.showError=!!a,(l=this._originalErrorMessage)!=null&&l.trim()&&a!==""?this.errorMessage=this._originalErrorMessage:this.errorMessage=a;const c=a?{customError:!0}:{};this._internals.setValidity(c,this.errorMessage,r)}_validate(){var a;const n=(a=this.shadowRoot)==null?void 0:a.querySelector("input");if(!n)return;const l=n.validity;let r="";l.valueMissing?r="This field is required":l.typeMismatch?r="Invalid format for this type":l.patternMismatch?r="Invalid format":l.tooShort?r=`Value is too short. Minimum length is ${n.minLength}`:l.tooLong?r=`Value is too long. Maximum length is ${n.maxLength}`:l.rangeUnderflow?r=`Value must be at least ${n.min}`:l.rangeOverflow?r=`Value must be at most ${n.max}`:l.stepMismatch?r="Invalid step value":r=n.validationMessage,this._setValidityMessage(r)}checkValidity(){var a;const n=(a=this.shadowRoot)==null?void 0:a.querySelector("input");return n?n.checkValidity():!0}_handleInvalid(a){var n;a.preventDefault(),this._hasUserInteracted=!0,this._validate();const l=(n=this.shadowRoot)==null?void 0:n.querySelector("input");if(l){const r=this._internals.form;r?Array.from(r.elements).find(c=>typeof c.checkValidity=="function"&&!c.checkValidity())===this&&l.focus():l.focus()}}_togglePasswordVisibility(){this.showPassword=!this.showPassword}_handleInput(a){const n=a.target;this.value=n.value,this._internals.setFormValue(this.value),this._hasUserInteracted&&this._validate(),this.dispatchEvent(new CustomEvent("nys-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this._hasUserInteracted||(this._hasUserInteracted=!0),this._validate(),this.dispatchEvent(new Event("nys-blur"))}_validateButtonSlot(a){var n,l;const r=(n=this.shadowRoot)==null?void 0:n.querySelector('slot[name="'+a+'"]'),c=(l=this.shadowRoot)==null?void 0:l.querySelector(".nys-textinput__buttoncontainer");if(!r||!c)return;const h=r.assignedElements();let d=!1;h.forEach(v=>{v instanceof HTMLElement&&v.tagName.toLowerCase()==="nys-button"&&!d?(d=!0,v.setAttribute("size","sm"),v.setAttribute("variant","primary"),this.disabled?v.setAttribute("disabled","true"):v.removeAttribute("disabled")):(console.warn("The '"+a+"' slot only accepts a single <nys-button> element. Removing invalid or extra node:",v),v.remove())}),a==="startButton"?c.classList.toggle("has-start-button",d):a==="endButton"&&c.classList.toggle("has-end-button",d)}render(){return z`
      <div class="nys-textinput">
        <nys-label
          id=${this.id}
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
              placeholder=${d1(this.placeholder?this.placeholder:void 0)}
              pattern=${d1(this.pattern?this.pattern:void 0)}
              min=${d1(this.min!==""?this.min:void 0)}
              maxlength=${d1(this.maxlength!==""?this.maxlength:void 0)}
              step=${d1(this.step!==""?this.step:void 0)}
              max=${d1(this.max!==""?this.max:void 0)}
              form=${d1(this.form?this.form:void 0)}
              @input=${this._handleInput}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
            />
            ${this.type==="password"?z` <nys-button
                  class="eye-icon"
                  id="password-toggle"
                  suffixIcon="slotted"
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
    `}},C2.VALID_TYPES=["email","number","password","search","tel","text","url"],C2.VALID_WIDTHS=["sm","md","lg","full"],C2.styles=mf,C2.formAssociated=!0,C2);A1([_({type:String})],S1.prototype,"id",2);A1([_({type:String,reflect:!0})],S1.prototype,"name",2);A1([_({reflect:!0})],S1.prototype,"type",1);A1([_({type:String})],S1.prototype,"label",2);A1([_({type:String})],S1.prototype,"description",2);A1([_({type:String})],S1.prototype,"placeholder",2);A1([_({type:String})],S1.prototype,"value",2);A1([_({type:Boolean,reflect:!0})],S1.prototype,"disabled",2);A1([_({type:Boolean,reflect:!0})],S1.prototype,"readonly",2);A1([_({type:Boolean,reflect:!0})],S1.prototype,"required",2);A1([_({type:Boolean,reflect:!0})],S1.prototype,"optional",2);A1([_({type:String})],S1.prototype,"form",2);A1([_({type:String})],S1.prototype,"pattern",2);A1([_({type:Number})],S1.prototype,"maxlength",2);A1([_({reflect:!0})],S1.prototype,"width",2);A1([_({type:Number})],S1.prototype,"step",2);A1([_({type:Number})],S1.prototype,"min",2);A1([_({type:Number})],S1.prototype,"max",2);A1([_({type:Boolean,reflect:!0})],S1.prototype,"showError",2);A1([_({type:String})],S1.prototype,"errorMessage",2);A1([Ze()],S1.prototype,"showPassword",2);let T4=S1;customElements.get("nys-textinput")||customElements.define("nys-textinput",T4);const Sf=C1`
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
`;var Ef=Object.defineProperty,$f=Object.getOwnPropertyDescriptor,ge=(a,n,l,r)=>{for(var c=r>1?void 0:r?$f(n,l):n,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=(r?d(n,l,c):d(c))||c);return r&&c&&Ef(n,l,c),c};let Af=0;var F5;const le=(F5=class extends i1{constructor(){super(),this.id="",this.name="",this.value="",this.checked=!1,this.disabled=!1,this.noIcon=!1,this.label="",this.description="",this._size="md",this.form="",this._internals=this.attachInternals()}get size(){return this._size}set size(a){this._size=F5.VALID_SIZES.includes(a)?a:"md"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-toggle-${Date.now()}-${Af++}`)}updated(a){(a.has("checked")||a.has("value"))&&this._internals.setFormValue(this.checked?this.value:null)}_emitChangeEvent(){this.dispatchEvent(new CustomEvent("nys-change",{detail:{checked:this.checked},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this.dispatchEvent(new Event("nys-blur"))}_handleChange(a){const{checked:n}=a.target;this.checked=n,this._emitChangeEvent()}_handleKeyDown(a){!this.disabled&&(a.key===" "||a.key==="Enter")&&(a.preventDefault(),this.checked=!this.checked,this._emitChangeEvent())}render(){return z`
      <label class="nys-toggle">
        <div class="nys-toggle__content">
          <div class="nys-toggle__toggle">
            <input
              id="${this.id}"
              type="checkbox"
              name="${d1(this.name?this.name:void 0)}"
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
                ${this.noIcon?"":z`<nys-icon
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
    `}},F5.VALID_SIZES=["sm","md"],F5.styles=Sf,F5.formAssociated=!0,F5);ge([_({type:String})],le.prototype,"id",2);ge([_({type:String,reflect:!0})],le.prototype,"name",2);ge([_({type:String})],le.prototype,"value",2);ge([_({type:Boolean,reflect:!0})],le.prototype,"checked",2);ge([_({type:Boolean,reflect:!0})],le.prototype,"disabled",2);ge([_({type:Boolean})],le.prototype,"noIcon",2);ge([_({type:String})],le.prototype,"label",2);ge([_({type:String})],le.prototype,"description",2);ge([_({reflect:!0})],le.prototype,"size",1);ge([_({type:String})],le.prototype,"form",2);let R4=le;customElements.get("nys-toggle")||customElements.define("nys-toggle",R4);const Mf=C1`
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
    padding: var(--nys-space-100, 8px) var(--_nys-unavheader-gutter);
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
      order: 999;
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
      order: 999;
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
      order: 999;
    }
    .nys-unavheader__toptrustbar {
      display: none;
    }
  }
`,Df=`<svg xmlns="http://www.w3.org/2000/svg" width="91" height="55" viewBox="0 0 91 55" fill="none">
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
</svg>`;/*!
   * ▒█▄░▒█ ▒█░░▒█ ▒█▀▀▀█ ▒█▀▀▄ ▒█▀▀▀█ 
   * ▒█▒█▒█ ▒█▄▄▄█ ░▀▀▀▄▄ ▒█░▒█ ░▀▀▀▄▄ 
   * ▒█░░▀█ ░░▒█░░ ▒█▄▄▄█ ▒█▄▄▀ ▒█▄▄▄█
   * 
   * TextInput Component
   * Part of the New York State Design System
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ca=globalThis,Go=Ca.ShadowRoot&&(Ca.ShadyCSS===void 0||Ca.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z4=Symbol(),A6=new WeakMap;let zf=class{constructor(a,n,l){if(this._$cssResult$=!0,l!==Z4)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a,this.t=n}get styleSheet(){let a=this.o;const n=this.t;if(Go&&a===void 0){const l=n!==void 0&&n.length===1;l&&(a=A6.get(n)),a===void 0&&((this.o=a=new CSSStyleSheet).replaceSync(this.cssText),l&&A6.set(n,a))}return a}toString(){return this.cssText}};const Lf=a=>new zf(typeof a=="string"?a:a+"",void 0,Z4),Hf=(a,n)=>{if(Go)a.adoptedStyleSheets=n.map(l=>l instanceof CSSStyleSheet?l:l.styleSheet);else for(const l of n){const r=document.createElement("style"),c=Ca.litNonce;c!==void 0&&r.setAttribute("nonce",c),r.textContent=l.cssText,a.appendChild(r)}},M6=Go?a=>a:a=>a instanceof CSSStyleSheet?(n=>{let l="";for(const r of n.cssRules)l+=r.cssText;return Lf(l)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Uf,defineProperty:Of,getOwnPropertyDescriptor:Vf,getOwnPropertyNames:Tf,getOwnPropertySymbols:Rf,getPrototypeOf:Zf}=Object,rs=globalThis,D6=rs.trustedTypes,Nf=D6?D6.emptyScript:"",z6=rs.reactiveElementPolyfillSupport,On=(a,n)=>a,Aa={toAttribute(a,n){switch(n){case Boolean:a=a?Nf:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,n){let l=a;switch(n){case Boolean:l=a!==null;break;case Number:l=a===null?null:Number(a);break;case Object:case Array:try{l=JSON.parse(a)}catch{l=null}}return l}},Yo=(a,n)=>!Uf(a,n),L6={attribute:!0,type:String,converter:Aa,reflect:!1,hasChanged:Yo};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),rs.litPropertyMetadata??(rs.litPropertyMetadata=new WeakMap);class kn extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??(this.l=[])).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,l=L6){if(l.state&&(l.attribute=!1),this._$Ei(),this.elementProperties.set(n,l),!l.noAccessor){const r=Symbol(),c=this.getPropertyDescriptor(n,r,l);c!==void 0&&Of(this.prototype,n,c)}}static getPropertyDescriptor(n,l,r){const{get:c,set:h}=Vf(this.prototype,n)??{get(){return this[l]},set(d){this[l]=d}};return{get(){return c==null?void 0:c.call(this)},set(d){const v=c==null?void 0:c.call(this);h.call(this,d),this.requestUpdate(n,v,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??L6}static _$Ei(){if(this.hasOwnProperty(On("elementProperties")))return;const n=Zf(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(On("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(On("properties"))){const l=this.properties,r=[...Tf(l),...Rf(l)];for(const c of r)this.createProperty(c,l[c])}const n=this[Symbol.metadata];if(n!==null){const l=litPropertyMetadata.get(n);if(l!==void 0)for(const[r,c]of l)this.elementProperties.set(r,c)}this._$Eh=new Map;for(const[l,r]of this.elementProperties){const c=this._$Eu(l,r);c!==void 0&&this._$Eh.set(c,l)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){const l=[];if(Array.isArray(n)){const r=new Set(n.flat(1/0).reverse());for(const c of r)l.unshift(M6(c))}else n!==void 0&&l.push(M6(n));return l}static _$Eu(n,l){const r=l.attribute;return r===!1?void 0:typeof r=="string"?r:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var n;this._$ES=new Promise(l=>this.enableUpdating=l),this._$AL=new Map,this._$E_(),this.requestUpdate(),(n=this.constructor.l)==null||n.forEach(l=>l(this))}addController(n){var l;(this._$EO??(this._$EO=new Set)).add(n),this.renderRoot!==void 0&&this.isConnected&&((l=n.hostConnected)==null||l.call(n))}removeController(n){var l;(l=this._$EO)==null||l.delete(n)}_$E_(){const n=new Map,l=this.constructor.elementProperties;for(const r of l.keys())this.hasOwnProperty(r)&&(n.set(r,this[r]),delete this[r]);n.size>0&&(this._$Ep=n)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Hf(n,this.constructor.elementStyles),n}connectedCallback(){var n;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(n=this._$EO)==null||n.forEach(l=>{var r;return(r=l.hostConnected)==null?void 0:r.call(l)})}enableUpdating(n){}disconnectedCallback(){var n;(n=this._$EO)==null||n.forEach(l=>{var r;return(r=l.hostDisconnected)==null?void 0:r.call(l)})}attributeChangedCallback(n,l,r){this._$AK(n,r)}_$EC(n,l){var r;const c=this.constructor.elementProperties.get(n),h=this.constructor._$Eu(n,c);if(h!==void 0&&c.reflect===!0){const d=(((r=c.converter)==null?void 0:r.toAttribute)!==void 0?c.converter:Aa).toAttribute(l,c.type);this._$Em=n,d==null?this.removeAttribute(h):this.setAttribute(h,d),this._$Em=null}}_$AK(n,l){var r;const c=this.constructor,h=c._$Eh.get(n);if(h!==void 0&&this._$Em!==h){const d=c.getPropertyOptions(h),v=typeof d.converter=="function"?{fromAttribute:d.converter}:((r=d.converter)==null?void 0:r.fromAttribute)!==void 0?d.converter:Aa;this._$Em=h,this[h]=v.fromAttribute(l,d.type),this._$Em=null}}requestUpdate(n,l,r){if(n!==void 0){if(r??(r=this.constructor.getPropertyOptions(n)),!(r.hasChanged??Yo)(this[n],l))return;this.P(n,l,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(n,l,r){this._$AL.has(n)||this._$AL.set(n,l),r.reflect===!0&&this._$Em!==n&&(this._$Ej??(this._$Ej=new Set)).add(n)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(l){Promise.reject(l)}const n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[h,d]of this._$Ep)this[h]=d;this._$Ep=void 0}const c=this.constructor.elementProperties;if(c.size>0)for(const[h,d]of c)d.wrapped!==!0||this._$AL.has(h)||this[h]===void 0||this.P(h,this[h],d)}let l=!1;const r=this._$AL;try{l=this.shouldUpdate(r),l?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(c=>{var h;return(h=c.hostUpdate)==null?void 0:h.call(c)}),this.update(r)):this._$EU()}catch(c){throw l=!1,this._$EU(),c}l&&this._$AE(r)}willUpdate(n){}_$AE(n){var l;(l=this._$EO)==null||l.forEach(r=>{var c;return(c=r.hostUpdated)==null?void 0:c.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Ej&&(this._$Ej=this._$Ej.forEach(l=>this._$EC(l,this[l]))),this._$EU()}updated(n){}firstUpdated(n){}}kn.elementStyles=[],kn.shadowRootOptions={mode:"open"},kn[On("elementProperties")]=new Map,kn[On("finalized")]=new Map,z6==null||z6({ReactiveElement:kn}),(rs.reactiveElementVersions??(rs.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bf={attribute:!0,type:String,converter:Aa,reflect:!1,hasChanged:Yo},qf=(a=Bf,n,l)=>{const{kind:r,metadata:c}=l;let h=globalThis.litPropertyMetadata.get(c);if(h===void 0&&globalThis.litPropertyMetadata.set(c,h=new Map),h.set(l.name,a),r==="accessor"){const{name:d}=l;return{set(v){const C=n.get.call(this);n.set.call(this,v),this.requestUpdate(d,C,a)},init(v){return v!==void 0&&this.P(d,void 0,a),v}}}if(r==="setter"){const{name:d}=l;return function(v){const C=this[d];n.call(this,v),this.requestUpdate(d,C,a)}}throw Error("Unsupported decorator location: "+r)};function M1(a){return(n,l)=>typeof l=="object"?qf(a,n,l):((r,c,h)=>{const d=c.hasOwnProperty(h);return c.constructor.createProperty(h,d?{...r,wrapped:!0}:r),d?Object.getOwnPropertyDescriptor(c,h):void 0})(a,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function jf(a){return M1({...a,state:!0,attribute:!1})}const Gf=C1`
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

  .nys-textinput__input {
    color: var(--_nys-textinput-text-color);
    font-size: var(--_nys-textinput-size-ui-md);
    border-radius: var(--_nys-textinput-radius);
    border: solid var(--_nys-textinput-color-border)
      var(--_nys-textinput-width-border);
    padding: var(--_nys-textinput-padding);
    width: 100%;
    height: var(--_nys-textinput-height);
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    background-color: var(--_nys-textinput-background-color);
  }
  .nys-textinput__input::placeholder {
    color: var(--_nys-textinput-placeholder-color);
  }

  .nys-textinput__buttoncontainer {
    width: var(--_nys-textinput-width);
    min-width: var(--_nys-textinput-width);
    max-width: var(--_nys-textinput-width);
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

  /* This container exist to mainly style the type="password" eye icon */
  .nys-textinput__container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
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
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ma=globalThis,Da=Ma.trustedTypes,H6=Da?Da.createPolicy("lit-html",{createHTML:a=>a}):void 0,N4="$lit$",x2=`lit$${Math.random().toFixed(9).slice(2)}$`,B4="?"+x2,Yf=`<${B4}>`,a5=document,za=()=>a5.createComment(""),Bn=a=>a===null||typeof a!="object"&&typeof a!="function",Xo=Array.isArray,Xf=a=>Xo(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",Co=`[ 	
\f\r]`,Sn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U6=/-->/g,O6=/>/g,J2=RegExp(`>|${Co}(?:([^\\s"'>=/]+)(${Co}*=${Co}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),V6=/'/g,T6=/"/g,q4=/^(?:script|style|textarea|title)$/i,qn=Symbol.for("lit-noChange"),q1=Symbol.for("lit-nothing"),R6=new WeakMap,e5=a5.createTreeWalker(a5,129);function j4(a,n){if(!Xo(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return H6!==void 0?H6.createHTML(n):n}const Qf=(a,n)=>{const l=a.length-1,r=[];let c,h=n===2?"<svg>":n===3?"<math>":"",d=Sn;for(let v=0;v<l;v++){const C=a[v];let w,M,E=-1,V=0;for(;V<C.length&&(d.lastIndex=V,M=d.exec(C),M!==null);)V=d.lastIndex,d===Sn?M[1]==="!--"?d=U6:M[1]!==void 0?d=O6:M[2]!==void 0?(q4.test(M[2])&&(c=RegExp("</"+M[2],"g")),d=J2):M[3]!==void 0&&(d=J2):d===J2?M[0]===">"?(d=c??Sn,E=-1):M[1]===void 0?E=-2:(E=d.lastIndex-M[2].length,w=M[1],d=M[3]===void 0?J2:M[3]==='"'?T6:V6):d===T6||d===V6?d=J2:d===U6||d===O6?d=Sn:(d=J2,c=void 0);const U=d===J2&&a[v+1].startsWith("/>")?" ":"";h+=d===Sn?C+Yf:E>=0?(r.push(w),C.slice(0,E)+N4+C.slice(E)+x2+U):C+x2+(E===-2?v:U)}return[j4(a,h+(a[l]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),r]};let ko=class G4{constructor({strings:n,_$litType$:l},r){let c;this.parts=[];let h=0,d=0;const v=n.length-1,C=this.parts,[w,M]=Qf(n,l);if(this.el=G4.createElement(w,r),e5.currentNode=this.el.content,l===2||l===3){const E=this.el.content.firstChild;E.replaceWith(...E.childNodes)}for(;(c=e5.nextNode())!==null&&C.length<v;){if(c.nodeType===1){if(c.hasAttributes())for(const E of c.getAttributeNames())if(E.endsWith(N4)){const V=M[d++],U=c.getAttribute(E).split(x2),X=/([.?@])?(.*)/.exec(V);C.push({type:1,index:h,name:X[2],strings:U,ctor:X[1]==="."?Pf:X[1]==="?"?Jf:X[1]==="@"?Ff:Qa}),c.removeAttribute(E)}else E.startsWith(x2)&&(C.push({type:6,index:h}),c.removeAttribute(E));if(q4.test(c.tagName)){const E=c.textContent.split(x2),V=E.length-1;if(V>0){c.textContent=Da?Da.emptyScript:"";for(let U=0;U<V;U++)c.append(E[U],za()),e5.nextNode(),C.push({type:2,index:++h});c.append(E[V],za())}}}else if(c.nodeType===8)if(c.data===B4)C.push({type:2,index:h});else{let E=-1;for(;(E=c.data.indexOf(x2,E+1))!==-1;)C.push({type:7,index:h}),E+=x2.length-1}h++}}static createElement(n,l){const r=a5.createElement("template");return r.innerHTML=n,r}};function os(a,n,l=a,r){var c,h;if(n===qn)return n;let d=r!==void 0?(c=l._$Co)==null?void 0:c[r]:l._$Cl;const v=Bn(n)?void 0:n._$litDirective$;return(d==null?void 0:d.constructor)!==v&&((h=d==null?void 0:d._$AO)==null||h.call(d,!1),v===void 0?d=void 0:(d=new v(a),d._$AT(a,l,r)),r!==void 0?(l._$Co??(l._$Co=[]))[r]=d:l._$Cl=d),d!==void 0&&(n=os(a,d._$AS(a,n.values),d,r)),n}let Kf=class{constructor(a,n){this._$AV=[],this._$AN=void 0,this._$AD=a,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(a){const{el:{content:n},parts:l}=this._$AD,r=((a==null?void 0:a.creationScope)??a5).importNode(n,!0);e5.currentNode=r;let c=e5.nextNode(),h=0,d=0,v=l[0];for(;v!==void 0;){if(h===v.index){let C;v.type===2?C=new Y4(c,c.nextSibling,this,a):v.type===1?C=new v.ctor(c,v.name,v.strings,this,a):v.type===6&&(C=new Wf(c,this,a)),this._$AV.push(C),v=l[++d]}h!==(v==null?void 0:v.index)&&(c=e5.nextNode(),h++)}return e5.currentNode=a5,r}p(a){let n=0;for(const l of this._$AV)l!==void 0&&(l.strings!==void 0?(l._$AI(a,l,n),n+=l.strings.length-2):l._$AI(a[n])),n++}},Y4=class X4{get _$AU(){var n;return((n=this._$AM)==null?void 0:n._$AU)??this._$Cv}constructor(n,l,r,c){this.type=2,this._$AH=q1,this._$AN=void 0,this._$AA=n,this._$AB=l,this._$AM=r,this.options=c,this._$Cv=(c==null?void 0:c.isConnected)??!0}get parentNode(){let n=this._$AA.parentNode;const l=this._$AM;return l!==void 0&&(n==null?void 0:n.nodeType)===11&&(n=l.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,l=this){n=os(this,n,l),Bn(n)?n===q1||n==null||n===""?(this._$AH!==q1&&this._$AR(),this._$AH=q1):n!==this._$AH&&n!==qn&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):Xf(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==q1&&Bn(this._$AH)?this._$AA.nextSibling.data=n:this.T(a5.createTextNode(n)),this._$AH=n}$(n){var l;const{values:r,_$litType$:c}=n,h=typeof c=="number"?this._$AC(n):(c.el===void 0&&(c.el=ko.createElement(j4(c.h,c.h[0]),this.options)),c);if(((l=this._$AH)==null?void 0:l._$AD)===h)this._$AH.p(r);else{const d=new Kf(h,this),v=d.u(this.options);d.p(r),this.T(v),this._$AH=d}}_$AC(n){let l=R6.get(n.strings);return l===void 0&&R6.set(n.strings,l=new ko(n)),l}k(n){Xo(this._$AH)||(this._$AH=[],this._$AR());const l=this._$AH;let r,c=0;for(const h of n)c===l.length?l.push(r=new X4(this.O(za()),this.O(za()),this,this.options)):r=l[c],r._$AI(h),c++;c<l.length&&(this._$AR(r&&r._$AB.nextSibling,c),l.length=c)}_$AR(n=this._$AA.nextSibling,l){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,l);n&&n!==this._$AB;){const c=n.nextSibling;n.remove(),n=c}}setConnected(n){var l;this._$AM===void 0&&(this._$Cv=n,(l=this._$AP)==null||l.call(this,n))}},Qa=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(a,n,l,r,c){this.type=1,this._$AH=q1,this._$AN=void 0,this.element=a,this.name=n,this._$AM=r,this.options=c,l.length>2||l[0]!==""||l[1]!==""?(this._$AH=Array(l.length-1).fill(new String),this.strings=l):this._$AH=q1}_$AI(a,n=this,l,r){const c=this.strings;let h=!1;if(c===void 0)a=os(this,a,n,0),h=!Bn(a)||a!==this._$AH&&a!==qn,h&&(this._$AH=a);else{const d=a;let v,C;for(a=c[0],v=0;v<c.length-1;v++)C=os(this,d[l+v],n,v),C===qn&&(C=this._$AH[v]),h||(h=!Bn(C)||C!==this._$AH[v]),C===q1?a=q1:a!==q1&&(a+=(C??"")+c[v+1]),this._$AH[v]=C}h&&!r&&this.j(a)}j(a){a===q1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,a??"")}};class Pf extends Qa{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===q1?void 0:n}}let Jf=class extends Qa{constructor(){super(...arguments),this.type=4}j(a){this.element.toggleAttribute(this.name,!!a&&a!==q1)}},Ff=class extends Qa{constructor(a,n,l,r,c){super(a,n,l,r,c),this.type=5}_$AI(a,n=this){if((a=os(this,a,n,0)??q1)===qn)return;const l=this._$AH,r=a===q1&&l!==q1||a.capture!==l.capture||a.once!==l.once||a.passive!==l.passive,c=a!==q1&&(l===q1||r);r&&this.element.removeEventListener(this.name,this,l),c&&this.element.addEventListener(this.name,this,a),this._$AH=a}handleEvent(a){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,a):this._$AH.handleEvent(a)}},Wf=class{constructor(a,n,l){this.element=a,this.type=6,this._$AN=void 0,this._$AM=n,this.options=l}get _$AU(){return this._$AM._$AU}_$AI(a){os(this,a)}};const Z6=Ma.litHtmlPolyfillSupport;Z6==null||Z6(ko,Y4),(Ma.litHtmlVersions??(Ma.litHtmlVersions=[])).push("3.2.1");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F2=a=>a??q1;/*!
   * 
   * ▒█▄░▒█ ▒█░░▒█ ▒█▀▀▀█ ▒█▀▀▄ ▒█▀▀▀█ 
   * ▒█▒█▒█ ▒█▄▄▄█ ░▀▀▀▄▄ ▒█░▒█ ░▀▀▀▄▄ 
   * ▒█░░▀█ ░░▒█░░ ▒█▄▄▄█ ▒█▄▄▀ ▒█▄▄▄█
   * 
   * Button Component
   * Part of the New York State Design System
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ga=globalThis,Qo=ga.ShadowRoot&&(ga.ShadyCSS===void 0||ga.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q4=Symbol(),N6=new WeakMap;let If=class{constructor(a,n,l){if(this._$cssResult$=!0,l!==Q4)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a,this.t=n}get styleSheet(){let a=this.o;const n=this.t;if(Qo&&a===void 0){const l=n!==void 0&&n.length===1;l&&(a=N6.get(n)),a===void 0&&((this.o=a=new CSSStyleSheet).replaceSync(this.cssText),l&&N6.set(n,a))}return a}toString(){return this.cssText}};const ty=a=>new If(typeof a=="string"?a:a+"",void 0,Q4),ey=(a,n)=>{if(Qo)a.adoptedStyleSheets=n.map(l=>l instanceof CSSStyleSheet?l:l.styleSheet);else for(const l of n){const r=document.createElement("style"),c=ga.litNonce;c!==void 0&&r.setAttribute("nonce",c),r.textContent=l.cssText,a.appendChild(r)}},B6=Qo?a=>a:a=>a instanceof CSSStyleSheet?(n=>{let l="";for(const r of n.cssRules)l+=r.cssText;return ty(l)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:sy,defineProperty:ny,getOwnPropertyDescriptor:iy,getOwnPropertyNames:ay,getOwnPropertySymbols:ly,getPrototypeOf:ry}=Object,cs=globalThis,q6=cs.trustedTypes,oy=q6?q6.emptyScript:"",j6=cs.reactiveElementPolyfillSupport,Vn=(a,n)=>a,La={toAttribute(a,n){switch(n){case Boolean:a=a?oy:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,n){let l=a;switch(n){case Boolean:l=a!==null;break;case Number:l=a===null?null:Number(a);break;case Object:case Array:try{l=JSON.parse(a)}catch{l=null}}return l}},Ko=(a,n)=>!sy(a,n),G6={attribute:!0,type:String,converter:La,reflect:!1,hasChanged:Ko};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),cs.litPropertyMetadata??(cs.litPropertyMetadata=new WeakMap);class En extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??(this.l=[])).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,l=G6){if(l.state&&(l.attribute=!1),this._$Ei(),this.elementProperties.set(n,l),!l.noAccessor){const r=Symbol(),c=this.getPropertyDescriptor(n,r,l);c!==void 0&&ny(this.prototype,n,c)}}static getPropertyDescriptor(n,l,r){const{get:c,set:h}=iy(this.prototype,n)??{get(){return this[l]},set(d){this[l]=d}};return{get(){return c==null?void 0:c.call(this)},set(d){const v=c==null?void 0:c.call(this);h.call(this,d),this.requestUpdate(n,v,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??G6}static _$Ei(){if(this.hasOwnProperty(Vn("elementProperties")))return;const n=ry(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(Vn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Vn("properties"))){const l=this.properties,r=[...ay(l),...ly(l)];for(const c of r)this.createProperty(c,l[c])}const n=this[Symbol.metadata];if(n!==null){const l=litPropertyMetadata.get(n);if(l!==void 0)for(const[r,c]of l)this.elementProperties.set(r,c)}this._$Eh=new Map;for(const[l,r]of this.elementProperties){const c=this._$Eu(l,r);c!==void 0&&this._$Eh.set(c,l)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){const l=[];if(Array.isArray(n)){const r=new Set(n.flat(1/0).reverse());for(const c of r)l.unshift(B6(c))}else n!==void 0&&l.push(B6(n));return l}static _$Eu(n,l){const r=l.attribute;return r===!1?void 0:typeof r=="string"?r:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var n;this._$ES=new Promise(l=>this.enableUpdating=l),this._$AL=new Map,this._$E_(),this.requestUpdate(),(n=this.constructor.l)==null||n.forEach(l=>l(this))}addController(n){var l;(this._$EO??(this._$EO=new Set)).add(n),this.renderRoot!==void 0&&this.isConnected&&((l=n.hostConnected)==null||l.call(n))}removeController(n){var l;(l=this._$EO)==null||l.delete(n)}_$E_(){const n=new Map,l=this.constructor.elementProperties;for(const r of l.keys())this.hasOwnProperty(r)&&(n.set(r,this[r]),delete this[r]);n.size>0&&(this._$Ep=n)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ey(n,this.constructor.elementStyles),n}connectedCallback(){var n;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(n=this._$EO)==null||n.forEach(l=>{var r;return(r=l.hostConnected)==null?void 0:r.call(l)})}enableUpdating(n){}disconnectedCallback(){var n;(n=this._$EO)==null||n.forEach(l=>{var r;return(r=l.hostDisconnected)==null?void 0:r.call(l)})}attributeChangedCallback(n,l,r){this._$AK(n,r)}_$EC(n,l){var r;const c=this.constructor.elementProperties.get(n),h=this.constructor._$Eu(n,c);if(h!==void 0&&c.reflect===!0){const d=(((r=c.converter)==null?void 0:r.toAttribute)!==void 0?c.converter:La).toAttribute(l,c.type);this._$Em=n,d==null?this.removeAttribute(h):this.setAttribute(h,d),this._$Em=null}}_$AK(n,l){var r;const c=this.constructor,h=c._$Eh.get(n);if(h!==void 0&&this._$Em!==h){const d=c.getPropertyOptions(h),v=typeof d.converter=="function"?{fromAttribute:d.converter}:((r=d.converter)==null?void 0:r.fromAttribute)!==void 0?d.converter:La;this._$Em=h,this[h]=v.fromAttribute(l,d.type),this._$Em=null}}requestUpdate(n,l,r){if(n!==void 0){if(r??(r=this.constructor.getPropertyOptions(n)),!(r.hasChanged??Ko)(this[n],l))return;this.P(n,l,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(n,l,r){this._$AL.has(n)||this._$AL.set(n,l),r.reflect===!0&&this._$Em!==n&&(this._$Ej??(this._$Ej=new Set)).add(n)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(l){Promise.reject(l)}const n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[h,d]of this._$Ep)this[h]=d;this._$Ep=void 0}const c=this.constructor.elementProperties;if(c.size>0)for(const[h,d]of c)d.wrapped!==!0||this._$AL.has(h)||this[h]===void 0||this.P(h,this[h],d)}let l=!1;const r=this._$AL;try{l=this.shouldUpdate(r),l?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(c=>{var h;return(h=c.hostUpdate)==null?void 0:h.call(c)}),this.update(r)):this._$EU()}catch(c){throw l=!1,this._$EU(),c}l&&this._$AE(r)}willUpdate(n){}_$AE(n){var l;(l=this._$EO)==null||l.forEach(r=>{var c;return(c=r.hostUpdated)==null?void 0:c.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Ej&&(this._$Ej=this._$Ej.forEach(l=>this._$EC(l,this[l]))),this._$EU()}updated(n){}firstUpdated(n){}}En.elementStyles=[],En.shadowRootOptions={mode:"open"},En[Vn("elementProperties")]=new Map,En[Vn("finalized")]=new Map,j6==null||j6({ReactiveElement:En}),(cs.reactiveElementVersions??(cs.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cy={attribute:!0,type:String,converter:La,reflect:!1,hasChanged:Ko},uy=(a=cy,n,l)=>{const{kind:r,metadata:c}=l;let h=globalThis.litPropertyMetadata.get(c);if(h===void 0&&globalThis.litPropertyMetadata.set(c,h=new Map),h.set(l.name,a),r==="accessor"){const{name:d}=l;return{set(v){const C=n.get.call(this);n.set.call(this,v),this.requestUpdate(d,C,a)},init(v){return v!==void 0&&this.P(d,void 0,a),v}}}if(r==="setter"){const{name:d}=l;return function(v){const C=this[d];n.call(this,v),this.requestUpdate(d,C,a)}}throw Error("Unsupported decorator location: "+r)};function Q1(a){return(n,l)=>typeof l=="object"?uy(a,n,l):((r,c,h)=>{const d=c.hasOwnProperty(h);return c.constructor.createProperty(h,d?{...r,wrapped:!0}:r),d?Object.getOwnPropertyDescriptor(c,h):void 0})(a,n,l)}const hy=C1`
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

  .nys-button:focus-visible {
    outline-offset: var(--_nys-button-offset-focus);
    outline: solid var(--_nys-button-width-focus) var(--_nys-button-color-focus);
  }

  .nys-button__text {
    display: flex;
    align-items: center;
    user-select: none;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ha=globalThis,Ua=Ha.trustedTypes,Y6=Ua?Ua.createPolicy("lit-html",{createHTML:a=>a}):void 0,K4="$lit$",w2=`lit$${Math.random().toFixed(9).slice(2)}$`,P4="?"+w2,dy=`<${P4}>`,l5=document,Oa=()=>l5.createComment(""),jn=a=>a===null||typeof a!="object"&&typeof a!="function",Po=Array.isArray,fy=a=>Po(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",go=`[ 	
\f\r]`,$n=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X6=/-->/g,Q6=/>/g,W2=RegExp(`>|${go}(?:([^\\s"'>=/]+)(${go}*=${go}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),K6=/'/g,P6=/"/g,J4=/^(?:script|style|textarea|title)$/i,Gn=Symbol.for("lit-noChange"),j1=Symbol.for("lit-nothing"),J6=new WeakMap,s5=l5.createTreeWalker(l5,129);function F4(a,n){if(!Po(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Y6!==void 0?Y6.createHTML(n):n}const yy=(a,n)=>{const l=a.length-1,r=[];let c,h=n===2?"<svg>":n===3?"<math>":"",d=$n;for(let v=0;v<l;v++){const C=a[v];let w,M,E=-1,V=0;for(;V<C.length&&(d.lastIndex=V,M=d.exec(C),M!==null);)V=d.lastIndex,d===$n?M[1]==="!--"?d=X6:M[1]!==void 0?d=Q6:M[2]!==void 0?(J4.test(M[2])&&(c=RegExp("</"+M[2],"g")),d=W2):M[3]!==void 0&&(d=W2):d===W2?M[0]===">"?(d=c??$n,E=-1):M[1]===void 0?E=-2:(E=d.lastIndex-M[2].length,w=M[1],d=M[3]===void 0?W2:M[3]==='"'?P6:K6):d===P6||d===K6?d=W2:d===X6||d===Q6?d=$n:(d=W2,c=void 0);const U=d===W2&&a[v+1].startsWith("/>")?" ":"";h+=d===$n?C+dy:E>=0?(r.push(w),C.slice(0,E)+K4+C.slice(E)+w2+U):C+w2+(E===-2?v:U)}return[F4(a,h+(a[l]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),r]};class Yn{constructor({strings:n,_$litType$:l},r){let c;this.parts=[];let h=0,d=0;const v=n.length-1,C=this.parts,[w,M]=yy(n,l);if(this.el=Yn.createElement(w,r),s5.currentNode=this.el.content,l===2||l===3){const E=this.el.content.firstChild;E.replaceWith(...E.childNodes)}for(;(c=s5.nextNode())!==null&&C.length<v;){if(c.nodeType===1){if(c.hasAttributes())for(const E of c.getAttributeNames())if(E.endsWith(K4)){const V=M[d++],U=c.getAttribute(E).split(w2),X=/([.?@])?(.*)/.exec(V);C.push({type:1,index:h,name:X[2],strings:U,ctor:X[1]==="."?vy:X[1]==="?"?Cy:X[1]==="@"?gy:Pa}),c.removeAttribute(E)}else E.startsWith(w2)&&(C.push({type:6,index:h}),c.removeAttribute(E));if(J4.test(c.tagName)){const E=c.textContent.split(w2),V=E.length-1;if(V>0){c.textContent=Ua?Ua.emptyScript:"";for(let U=0;U<V;U++)c.append(E[U],Oa()),s5.nextNode(),C.push({type:2,index:++h});c.append(E[V],Oa())}}}else if(c.nodeType===8)if(c.data===P4)C.push({type:2,index:h});else{let E=-1;for(;(E=c.data.indexOf(w2,E+1))!==-1;)C.push({type:7,index:h}),E+=w2.length-1}h++}}static createElement(n,l){const r=l5.createElement("template");return r.innerHTML=n,r}}function us(a,n,l=a,r){var c,h;if(n===Gn)return n;let d=r!==void 0?(c=l._$Co)==null?void 0:c[r]:l._$Cl;const v=jn(n)?void 0:n._$litDirective$;return(d==null?void 0:d.constructor)!==v&&((h=d==null?void 0:d._$AO)==null||h.call(d,!1),v===void 0?d=void 0:(d=new v(a),d._$AT(a,l,r)),r!==void 0?(l._$Co??(l._$Co=[]))[r]=d:l._$Cl=d),d!==void 0&&(n=us(a,d._$AS(a,n.values),d,r)),n}class py{constructor(n,l){this._$AV=[],this._$AN=void 0,this._$AD=n,this._$AM=l}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(n){const{el:{content:l},parts:r}=this._$AD,c=((n==null?void 0:n.creationScope)??l5).importNode(l,!0);s5.currentNode=c;let h=s5.nextNode(),d=0,v=0,C=r[0];for(;C!==void 0;){if(d===C.index){let w;C.type===2?w=new Ka(h,h.nextSibling,this,n):C.type===1?w=new C.ctor(h,C.name,C.strings,this,n):C.type===6&&(w=new by(h,this,n)),this._$AV.push(w),C=r[++v]}d!==(C==null?void 0:C.index)&&(h=s5.nextNode(),d++)}return s5.currentNode=l5,c}p(n){let l=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(n,r,l),l+=r.strings.length-2):r._$AI(n[l])),l++}}class Ka{get _$AU(){var n;return((n=this._$AM)==null?void 0:n._$AU)??this._$Cv}constructor(n,l,r,c){this.type=2,this._$AH=j1,this._$AN=void 0,this._$AA=n,this._$AB=l,this._$AM=r,this.options=c,this._$Cv=(c==null?void 0:c.isConnected)??!0}get parentNode(){let n=this._$AA.parentNode;const l=this._$AM;return l!==void 0&&(n==null?void 0:n.nodeType)===11&&(n=l.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,l=this){n=us(this,n,l),jn(n)?n===j1||n==null||n===""?(this._$AH!==j1&&this._$AR(),this._$AH=j1):n!==this._$AH&&n!==Gn&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):fy(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==j1&&jn(this._$AH)?this._$AA.nextSibling.data=n:this.T(l5.createTextNode(n)),this._$AH=n}$(n){var l;const{values:r,_$litType$:c}=n,h=typeof c=="number"?this._$AC(n):(c.el===void 0&&(c.el=Yn.createElement(F4(c.h,c.h[0]),this.options)),c);if(((l=this._$AH)==null?void 0:l._$AD)===h)this._$AH.p(r);else{const d=new py(h,this),v=d.u(this.options);d.p(r),this.T(v),this._$AH=d}}_$AC(n){let l=J6.get(n.strings);return l===void 0&&J6.set(n.strings,l=new Yn(n)),l}k(n){Po(this._$AH)||(this._$AH=[],this._$AR());const l=this._$AH;let r,c=0;for(const h of n)c===l.length?l.push(r=new Ka(this.O(Oa()),this.O(Oa()),this,this.options)):r=l[c],r._$AI(h),c++;c<l.length&&(this._$AR(r&&r._$AB.nextSibling,c),l.length=c)}_$AR(n=this._$AA.nextSibling,l){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,l);n&&n!==this._$AB;){const c=n.nextSibling;n.remove(),n=c}}setConnected(n){var l;this._$AM===void 0&&(this._$Cv=n,(l=this._$AP)==null||l.call(this,n))}}class Pa{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(n,l,r,c,h){this.type=1,this._$AH=j1,this._$AN=void 0,this.element=n,this.name=l,this._$AM=c,this.options=h,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=j1}_$AI(n,l=this,r,c){const h=this.strings;let d=!1;if(h===void 0)n=us(this,n,l,0),d=!jn(n)||n!==this._$AH&&n!==Gn,d&&(this._$AH=n);else{const v=n;let C,w;for(n=h[0],C=0;C<h.length-1;C++)w=us(this,v[r+C],l,C),w===Gn&&(w=this._$AH[C]),d||(d=!jn(w)||w!==this._$AH[C]),w===j1?n=j1:n!==j1&&(n+=(w??"")+h[C+1]),this._$AH[C]=w}d&&!c&&this.j(n)}j(n){n===j1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}}class vy extends Pa{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===j1?void 0:n}}class Cy extends Pa{constructor(){super(...arguments),this.type=4}j(n){this.element.toggleAttribute(this.name,!!n&&n!==j1)}}class gy extends Pa{constructor(n,l,r,c,h){super(n,l,r,c,h),this.type=5}_$AI(n,l=this){if((n=us(this,n,l,0)??j1)===Gn)return;const r=this._$AH,c=n===j1&&r!==j1||n.capture!==r.capture||n.once!==r.once||n.passive!==r.passive,h=n!==j1&&(r===j1||c);c&&this.element.removeEventListener(this.name,this,r),h&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){var l;typeof this._$AH=="function"?this._$AH.call(((l=this.options)==null?void 0:l.host)??this.element,n):this._$AH.handleEvent(n)}}class by{constructor(n,l,r){this.element=n,this.type=6,this._$AN=void 0,this._$AM=l,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(n){us(this,n)}}const F6=Ha.litHtmlPolyfillSupport;F6==null||F6(Yn,Ka),(Ha.litHtmlVersions??(Ha.litHtmlVersions=[])).push("3.2.1");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g2=a=>a??j1;var _y=Object.defineProperty,my=Object.getOwnPropertyDescriptor,K1=(a,n,l,r)=>{for(var c=r>1?void 0:r?my(n,l):n,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=(r?d(n,l,c):d(c))||c);return r&&c&&_y(n,l,c),c};let xy=0;var Pt;const T1=(Pt=class extends i1{constructor(){super(),this.id="",this.name="",this._size="md",this.fullWidth=!1,this._variant="filled",this.inverted=!1,this.label="",this.ariaLabel="",this.prefixIcon="",this.suffixIcon="",this.circle=!1,this.icon="",this.disabled=!1,this.form="",this.value="",this._type="button",this.onClick=()=>{},this.href="",this._target="_self",this._internals=this.attachInternals()}get size(){return this._size}set size(a){this._size=Pt.VALID_SIZES.includes(a)?a:"md"}get variant(){return this._variant}set variant(a){this._variant=Pt.VALID_VARIANTS.includes(a)?a:"filled"}get type(){return this._type}set type(a){this._type=Pt.VALID_TYPES.includes(a)?a:"button"}get target(){return this._target}set target(a){this._target=Pt.VALID_TARGETS.includes(a)?a:"_self"}connectedCallback(){super.connectedCallback(),this.id||(this.id=this._generateUniqueId())}_generateUniqueId(){return`nys-button-${Date.now()}-${xy++}`}_manageFormAction(a){typeof this.onClick=="function"&&this.onClick(a);const n=this._internals.form;if(n)switch(this.type){case"submit":n.requestSubmit();break;case"reset":n.reset();break}}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this.dispatchEvent(new Event("nys-blur"))}_handleClick(a){if(this.disabled){a.preventDefault();return}this._manageFormAction(a),this.dispatchEvent(new Event("nys-click"))}_handleKeydown(a){(a.code==="Space"||a.code==="Enter"||a.key===" "||a.key==="Enter")&&(a.preventDefault(),this.disabled||this._manageFormAction(a))}render(){return z`
      ${this.href?z`
            <div class="nys-button__linkwrapper">
              <a
                class="nys-button"
                id=${g2(this.id)}
                name=${g2(this.name?this.name:void 0)}
                ?disabled=${this.disabled}
                aria-disabled="${this.disabled?"true":"false"}"
                form=${g2(this.form?this.form:void 0)}
                value=${g2(this.value?this.value:void 0)}
                href=${this.href}
                target=${this.target}
                aria-label=${this.ariaLabel||this.label||(this.circle?this.icon:null)||"button"}
                @click=${this._handleClick}
                @focus="${this._handleFocus}"
                @blur="${this._handleBlur}"
              >
                ${this.prefixIcon&&this.variant!=="text"?z`<slot name="prefix-icon">
                      <nys-icon size="16" name=${this.prefixIcon}></nys-icon>
                    </slot>`:""}
                ${this.label&&!this.circle?z`<label class="nys-button__text">${this.label}</label>`:""}
                ${this.suffixIcon&&this.variant!=="text"?z`<slot name="suffix-icon">
                      <nys-icon size="16" name=${this.suffixIcon}></nys-icon>
                    </slot>`:""}
                ${this.circle&&this.icon?z`<slot name="circle-icon"
                      ><nys-icon
                        size=${this.size==="sm"?"24":this.size==="lg"?"40":"32"}
                        name=${this.icon}
                      ></nys-icon
                    ></slot>`:""}
              </a>
            </div>
          `:z`
            <button
              class="nys-button"
              id=${g2(this.id)}
              name=${g2(this.name?this.name:void 0)}
              ?disabled=${this.disabled}
              form=${g2(this.form?this.form:void 0)}
              value=${g2(this.value?this.value:void 0)}
              type=${this.type}
              aria-label=${this.ariaLabel||this.label||(this.circle?this.icon:null)||"button"}
              @click=${this._handleClick}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
              @keydown="${this._handleKeydown}"
            >
              ${this.prefixIcon&&this.variant!=="text"?z`<slot name="prefix-icon">
                    <nys-icon size="16" name=${this.prefixIcon}></nys-icon>
                  </slot>`:""}
              ${this.label&&!this.circle?z`<label class="nys-button__text">${this.label}</label>`:""}
              ${this.suffixIcon&&this.variant!=="text"?z`<slot name="suffix-icon">
                    <nys-icon size="16" name=${this.suffixIcon}></nys-icon>
                  </slot>`:""}
              ${this.circle&&this.icon?z`<slot name="circle-icon">
                    <nys-icon
                      size=${this.size==="sm"?"24":this.size==="lg"?"40":"32"}
                      name=${this.icon}
                    ></nys-icon>
                  </slot>`:""}
            </button>
          `}
    `}},Pt.VALID_SIZES=["sm","md","lg"],Pt.VALID_VARIANTS=["filled","outline","ghost","text"],Pt.VALID_TYPES=["submit","reset","button"],Pt.VALID_TARGETS=["_self","_blank","_parent","_top","framename"],Pt.styles=hy,Pt.formAssociated=!0,Pt);K1([Q1({type:String})],T1.prototype,"id",2);K1([Q1({type:String,reflect:!0})],T1.prototype,"name",2);K1([Q1({reflect:!0})],T1.prototype,"size",1);K1([Q1({type:Boolean,reflect:!0})],T1.prototype,"fullWidth",2);K1([Q1({reflect:!0})],T1.prototype,"variant",1);K1([Q1({type:Boolean,reflect:!0})],T1.prototype,"inverted",2);K1([Q1({type:String})],T1.prototype,"label",2);K1([Q1({type:String})],T1.prototype,"ariaLabel",2);K1([Q1({type:String})],T1.prototype,"prefixIcon",2);K1([Q1({type:String})],T1.prototype,"suffixIcon",2);K1([Q1({type:Boolean,reflect:!0})],T1.prototype,"circle",2);K1([Q1({type:String})],T1.prototype,"icon",2);K1([Q1({type:Boolean,reflect:!0})],T1.prototype,"disabled",2);K1([Q1({type:String})],T1.prototype,"form",2);K1([Q1({type:String})],T1.prototype,"value",2);K1([Q1({reflect:!0})],T1.prototype,"type",1);K1([Q1({type:Function})],T1.prototype,"onClick",2);K1([Q1({type:String})],T1.prototype,"href",2);K1([Q1({reflect:!0})],T1.prototype,"target",1);let wy=T1;customElements.get("nys-button")||customElements.define("nys-button",wy);var ky=Object.defineProperty,Sy=Object.getOwnPropertyDescriptor,D1=(a,n,l,r)=>{for(var c=r>1?void 0:r?Sy(n,l):n,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=(r?d(n,l,c):d(c))||c);return r&&c&&ky(n,l,c),c};let Ey=0;var b2;const E1=(b2=class extends i1{constructor(){super(),this.id="",this.name="",this._type="text",this.label="",this.description="",this.placeholder="",this.value="",this.disabled=!1,this.readonly=!1,this.required=!1,this.optional=!1,this.form="",this.pattern="",this.maxlength=null,this.width="full",this.step=null,this.min=null,this.max=null,this.showError=!1,this.errorMessage="",this.showPassword=!1,this._originalErrorMessage="",this._hasUserInteracted=!1,this._internals=this.attachInternals()}get type(){return this._type}set type(a){this._type=b2.VALID_TYPES.includes(a)?a:"text"}async updated(a){a.has("width")&&(await Promise.resolve(),this.width=b2.VALID_WIDTHS.includes(this.width)?this.width:"full"),a.has("disabled")&&(this._validateButtonSlot("startButton"),this._validateButtonSlot("endButton"))}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-textinput-${Date.now()}-${Ey++}`),this._originalErrorMessage=this.errorMessage??"",this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}formResetCallback(){this.value=""}_setValue(){this._internals.setFormValue(this.value),this._manageRequire()}_manageRequire(){var a,n;const l=(a=this.shadowRoot)==null?void 0:a.querySelector("input");if(!l)return;const r=this.errorMessage||"This field is required";this.required&&(!this.value||((n=this.value)==null?void 0:n.trim())==="")?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},r,l)):(this._internals.ariaRequired="false",this._internals.setValidity({}),this._hasUserInteracted=!1)}_setValidityMessage(a=""){var n,l;const r=(n=this.shadowRoot)==null?void 0:n.querySelector("input");if(!r)return;this.showError=!!a,(l=this._originalErrorMessage)!=null&&l.trim()&&a!==""?this.errorMessage=this._originalErrorMessage:this.errorMessage=a;const c=a?{customError:!0}:{};this._internals.setValidity(c,this.errorMessage,r)}_validate(){var a;const n=(a=this.shadowRoot)==null?void 0:a.querySelector("input");if(!n)return;const l=n.validity;let r="";l.valueMissing?r="This field is required":l.typeMismatch?r="Invalid format for this type":l.patternMismatch?r="Invalid format":l.tooShort?r=`Value is too short. Minimum length is ${n.minLength}`:l.tooLong?r=`Value is too long. Maximum length is ${n.maxLength}`:l.rangeUnderflow?r=`Value must be at least ${n.min}`:l.rangeOverflow?r=`Value must be at most ${n.max}`:l.stepMismatch?r="Invalid step value":r=n.validationMessage,this._setValidityMessage(r)}checkValidity(){var a;const n=(a=this.shadowRoot)==null?void 0:a.querySelector("input");return n?n.checkValidity():!0}_handleInvalid(a){var n;a.preventDefault(),this._hasUserInteracted=!0,this._validate();const l=(n=this.shadowRoot)==null?void 0:n.querySelector("input");if(l){const r=this._internals.form;r?Array.from(r.elements).find(c=>typeof c.checkValidity=="function"&&!c.checkValidity())===this&&l.focus():l.focus()}}_togglePasswordVisibility(){this.showPassword=!this.showPassword}_handleInput(a){const n=a.target;this.value=n.value,this._internals.setFormValue(this.value),this._hasUserInteracted&&this._validate(),this.dispatchEvent(new CustomEvent("nys-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this._hasUserInteracted||(this._hasUserInteracted=!0),this._validate(),this.dispatchEvent(new Event("nys-blur"))}_validateButtonSlot(a){var n,l;const r=(n=this.shadowRoot)==null?void 0:n.querySelector('slot[name="'+a+'"]'),c=(l=this.shadowRoot)==null?void 0:l.querySelector(".nys-textinput__buttoncontainer");if(!r||!c)return;const h=r.assignedElements();let d=!1;h.forEach(v=>{v instanceof HTMLElement&&v.tagName.toLowerCase()==="nys-button"&&!d?(d=!0,v.setAttribute("size","sm"),v.setAttribute("variant","primary"),this.disabled?v.setAttribute("disabled","true"):v.removeAttribute("disabled")):(console.warn("The '"+a+"' slot only accepts a single <nys-button> element. Removing invalid or extra node:",v),v.remove())}),a==="startButton"?c.classList.toggle("has-start-button",d):a==="endButton"&&c.classList.toggle("has-end-button",d)}render(){return z`
      <div class="nys-textinput">
        <nys-label
          id=${this.id}
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
              placeholder=${F2(this.placeholder?this.placeholder:void 0)}
              pattern=${F2(this.pattern?this.pattern:void 0)}
              min=${F2(this.min!==""?this.min:void 0)}
              maxlength=${F2(this.maxlength!==""?this.maxlength:void 0)}
              step=${F2(this.step!==""?this.step:void 0)}
              max=${F2(this.max!==""?this.max:void 0)}
              form=${F2(this.form?this.form:void 0)}
              @input=${this._handleInput}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
            />
            ${this.type==="password"?z` <nys-button
                  class="eye-icon"
                  id="password-toggle"
                  suffixIcon="slotted"
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
    `}},b2.VALID_TYPES=["email","number","password","search","tel","text","url"],b2.VALID_WIDTHS=["sm","md","lg","full"],b2.styles=Gf,b2.formAssociated=!0,b2);D1([M1({type:String})],E1.prototype,"id",2);D1([M1({type:String,reflect:!0})],E1.prototype,"name",2);D1([M1({reflect:!0})],E1.prototype,"type",1);D1([M1({type:String})],E1.prototype,"label",2);D1([M1({type:String})],E1.prototype,"description",2);D1([M1({type:String})],E1.prototype,"placeholder",2);D1([M1({type:String})],E1.prototype,"value",2);D1([M1({type:Boolean,reflect:!0})],E1.prototype,"disabled",2);D1([M1({type:Boolean,reflect:!0})],E1.prototype,"readonly",2);D1([M1({type:Boolean,reflect:!0})],E1.prototype,"required",2);D1([M1({type:Boolean,reflect:!0})],E1.prototype,"optional",2);D1([M1({type:String})],E1.prototype,"form",2);D1([M1({type:String})],E1.prototype,"pattern",2);D1([M1({type:Number})],E1.prototype,"maxlength",2);D1([M1({reflect:!0})],E1.prototype,"width",2);D1([M1({type:Number})],E1.prototype,"step",2);D1([M1({type:Number})],E1.prototype,"min",2);D1([M1({type:Number})],E1.prototype,"max",2);D1([M1({type:Boolean,reflect:!0})],E1.prototype,"showError",2);D1([M1({type:String})],E1.prototype,"errorMessage",2);D1([jf()],E1.prototype,"showPassword",2);let $y=E1;customElements.get("nys-textinput")||customElements.define("nys-textinput",$y);var Ay=Object.defineProperty,c5=(a,n,l,r)=>{for(var c=void 0,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=d(n,l,c)||c);return c&&Ay(n,l,c),c};const W4=class extends i1{constructor(){super(...arguments),this.trustbarVisible=!1,this.searchDropdownVisible=!1,this.languageVisible=!1,this.isSearchFocused=!1,this.hideTranslate=!1,this.hideSearch=!1,this.languages=[["English",""],["Español","es"],["中文","zh"],["繁體中文","zh-traditional"],["Русский","ru"],["יידיש","yi"],["বাংলা","bn"],["한국어","ko"],["Kreyòl Ayisyen","ht"],["Italiano","it"],["العربية","ar"],["Polski","pl"],["Français","fr"],["اردو","ur"]]}_getNysLogo(){return new DOMParser().parseFromString(Df,"image/svg+xml").documentElement}_toggleTrustbar(){this.trustbarVisible=!this.trustbarVisible,this.trustbarVisible&&(this.languageVisible=!1,this.searchDropdownVisible=!1)}_toggleLanguageList(){this.languageVisible=!this.languageVisible,this.languageVisible&&(this.trustbarVisible=!1,this.searchDropdownVisible=!1)}_toggleSearchDropdown(){this.searchDropdownVisible=!this.searchDropdownVisible,this.searchDropdownVisible&&(this.trustbarVisible=!1,this.languageVisible=!1)}_handleSearchFocus(){this.isSearchFocused=!0,this.trustbarVisible=!1,this.languageVisible=!1}_handleSearchBlur(){this.isSearchFocused=!1}_handleSearchKeyup(n){var l;if(n.key==="Escape"&&(this._handleSearchBlur(),n.target.blur()),n.key==="Enter"){const r=(l=n.target.value)==null?void 0:l.trim();r!==""&&this._handleSearch(r)}}_handleSearchButton(n){var l,r;const c=(r=((l=this.shadowRoot)==null?void 0:l.getElementById(n)).value)==null?void 0:r.trim();c!==""&&this._handleSearch(c)}_handleSearch(n){window.location.href=`https://search.its.ny.gov/search/search.html?btnG=Search&client=default_frontend&output=xml_no_dtd&proxystylesheet=default_frontend&ulang=en&sort=date:D:L:d1&entqr=3&entqrm=0&wc=200&wc_mc=1&oe=UTF-8&ie=UTF-8&ud=1&site=default_collection&q=${n}+inurl:${window.location.hostname}&site=default_collection`}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return z`
      <header class="nys-unavheader">
        <div class="nys-unavheader__trustbarwrapper">
          <div
            class="nys-unavheader__toptrustbar"
            @click="${this._toggleTrustbar}"
            @keydown="${n=>{(n.code==="Enter"||n.code==="Space"||n.key==="Enter"||n.key===" ")&&this._toggleTrustbar()}}"
          >
            <div class="nys-unavheader__officialmessage">
              <label id="nys-unavheader__official"
                >An official website of New York State</label
              >
              <nys-button
                id="nys-unavheader__know"
                label="Here's how you know"
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
                <nys-icon size="3xl" name="account_balance_filled"></nys-icon>
                <label><b>Official websites use ny.gov</b></label>
                <label
                  >A <b>ny.gov</b> website belongs to an official New York State
                  government organization.</label
                >
              </div>
              <div class="nys-unavheader__trustcontentmessage">
                <nys-icon size="3xl" name="lock_filled"></nys-icon>
                <label><b>Secure ny.gov websites use HTTPS</b></label>
                <label
                  >A <b>lock icon</b> or <b>https://</b> means you've safely
                  connected to the ny.gov website. Share sensitive information
                  only on official, secure websites.</label
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
              ariaLabel="Close trustbar"
              .onClick="${()=>this._toggleTrustbar()}"
            ></nys-button>
          </div>
        </div>
        <div class="nys-unavheader__mainwrapper" id="nys-universal-navigation">
          <div class="nys-unavheader__maincontent">
            <div class="nys-unavheader__left">
              <a
                href="https://ny.gov"
                id="nys-unavheader__logolink"
                aria-label="logo of New York State"
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
            <div class="nys-unavheader__right">
              ${this.hideTranslate?null:z`<div class="nys-unavheader__translatewrapper">
                    <div
                      class="nys-unavheader--xs nys-unavheader--sm nys-unavheader--md"
                    >
                      <nys-button
                        variant="ghost"
                        circle
                        icon="slotted"
                        ariaLabel="Translate"
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
                    ${this.isSearchFocused?null:z`<div class="nys-unavheader--lg nys-unavheader--xl">
                          <nys-button
                            variant="ghost"
                            label="Translate"
                            prefixIcon="language_filled"
                            suffixIcon=${this.languageVisible?"chevron_up":"chevron_down"}
                            ariaLabel="Translate"
                            id="nys-unavheader__translate"
                            .onClick="${()=>this._toggleLanguageList()}"
                          ></nys-button>
                        </div>`}
                    <div
                      class="nys-unavheader__languagelist ${this.languageVisible?"show":"hide"}"
                    >
                      ${this.languages.map(([n,l])=>z`<a
                            class="nys-unavheader__languagelink"
                            target="_self"
                            href="https://${l?l+".":""}${window.location.hostname}"
                            >${n}</a
                          >`)}
                    </div>
                  </div>`}
              ${this.hideSearch?null:z` <div
                      class="nys-unavheader--xs nys-unavheader--sm nys-unavheader--md"
                    >
                      <nys-button
                        variant="ghost"
                        circle
                        icon="search"
                        ariaLabel="Search"
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
                .onClick="${()=>this._handleSearchButton("nys-unavheader__searchbardropdown")}"
              ></nys-button
            ></nys-textinput>
          </div>
        </div>
      </header>
    `}};W4.styles=Mf;let Be=W4;c5([_({type:Boolean})],Be.prototype,"trustbarVisible");c5([_({type:Boolean})],Be.prototype,"searchDropdownVisible");c5([_({type:Boolean})],Be.prototype,"languageVisible");c5([_({type:Boolean})],Be.prototype,"isSearchFocused");c5([_({type:Boolean})],Be.prototype,"hideTranslate");c5([_({type:Boolean})],Be.prototype,"hideSearch");c5([_({type:String,reflect:!0})],Be.prototype,"languages");customElements.get("nys-unavheader")||customElements.define("nys-unavheader",Be);const My=C1`
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
    --_nys-globalheader-gutter: var(--nys-gutter-sm, 20px);
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
    --_nys-globalfooter-link-gap-spacing-row: var(--nys-space-300, 24px);
    --_nys-globalfooter-link-gap-spacing-column: var(--nys-space-400, 32px);
    --_nys-globalheader-link-lineheight: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-globalheader-link-letterspacing: var(
      --nys-font-letterspacing-ui-md,
      var(--nys-font-letterspacing-400, 0.044px)
    );
    --_nys-globalheader-link-weight-decoration: var(--nys-size-2px, 2px);

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
    margin: 0;
    padding: 0;
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
    padding: var(--_nys-globalheader-padding) var(--_nys-globalheader-gutter);
    background-color: var(--_nys-globalheader-background);
    color: var(--_nys-globalheader-text-color);
    width: 100%;
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
  @media (min-width: 768px) {
    /* Tablet (MD - Above 768px) */
    .nys-globalheader__content {
      display: flex;
    }
    .nys-globalheader__content ul {
      flex-direction: row;
      gap: var(--_nys-globalfooter-link-gap-spacing-row)
        var(--_nys-globalfooter-link-gap-spacing-column);
    }
    .nys-globalheader__content-mobile,
    .nys-globalheader__button-container {
      display: none;
    }
    :host {
      --_nys-globalheader-main-gap-spacing: var(--nys-space-500, 40px);
      --_nys-globalheader-gutter: var(--nys-gutter-lg, 32px);
    }
  }

  @media (min-width: 1280px) {
    /* Large Desktop (XL - Above 1280px) */
    :host {
      --_nys-globalheader-gutter: var(--nys-gutter-xl, 64px);
    }
  }
`;var Dy=Object.defineProperty,Jn=(a,n,l,r)=>{for(var c=void 0,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=d(n,l,c)||c);return c&&Dy(n,l,c),c};const I4=class extends i1{constructor(){super(...arguments),this.appName="",this.agencyName="",this.homepageLink="",this.slotHasContent=!0,this.isMobileMenuOpen=!1}firstUpdated(){var n;const l=(n=this.shadowRoot)==null?void 0:n.querySelector("slot");l==null||l.addEventListener("slotchange",()=>this._handleSlotChange()),this._handleSlotChange()}async _handleSlotChange(){var n,l,r;const c=(n=this.shadowRoot)==null?void 0:n.querySelector("slot");if(!c)return;const h=c==null?void 0:c.assignedNodes({flatten:!0}).filter(C=>C.nodeType===Node.ELEMENT_NODE);await Promise.resolve(),this.slotHasContent=h.length>0;const d=(l=this.shadowRoot)==null?void 0:l.querySelector(".nys-globalheader__content"),v=(r=this.shadowRoot)==null?void 0:r.querySelector(".nys-globalheader__content-mobile");d&&v&&(d.innerHTML="",v.innerHTML="",h.forEach(C=>{if(C.nodeType===Node.ELEMENT_NODE){const w=C.cloneNode(!0),M=C.cloneNode(!0);["script","iframe","object","embed, img"].forEach(E=>{w.querySelectorAll(E).forEach(V=>V.remove())}),d.appendChild(w),v.appendChild(M),C.remove()}}))}_toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen}render(){var n,l,r,c,h,d,v,C;return z`
      <header class="nys-globalheader">
        <div class="nys-globalheader__main-container">
          ${this.slotHasContent?z` <div class="nys-globalheader__button-container">
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
          ${(n=this.homepageLink)!=null&&n.trim()?z`<a
                class="nys-globalheader__name-container-link"
                href=${(h=this.homepageLink)==null?void 0:h.trim()}
              >
                <div class="nys-globalheader__name-container">
                  ${((d=this.appName)==null?void 0:d.trim().length)>0?z`<div
                        class="nys-globalheader__appName nys-globalheader__name"
                      >
                        ${this.appName}
                      </div> `:""}
                  ${((v=this.agencyName)==null?void 0:v.trim().length)>0?z`<div
                        class="nys-globalheader__agencyName nys-globalheader__name ${((C=this.appName)==null?void 0:C.trim().length)>0?"":"main"}"
                      >
                        ${this.agencyName}
                      </div> `:""}
                </div>
              </a>`:z`
                <div class="nys-globalheader__name-container">
                  ${((l=this.appName)==null?void 0:l.trim().length)>0?z`<div
                        class="nys-globalheader__appName nys-globalheader__name"
                      >
                        ${this.appName}
                      </div> `:""}
                  ${((r=this.agencyName)==null?void 0:r.trim().length)>0?z`<div
                        class="nys-globalheader__agencyName nys-globalheader__name ${((c=this.appName)==null?void 0:c.trim().length)>0?"":"main"}"
                      >
                        ${this.agencyName}
                      </div> `:""}
                </div>
              `}
          ${this.slotHasContent?z`<div class="nys-globalheader__content">
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
    `}};I4.styles=My;let u5=I4;Jn([_({type:String})],u5.prototype,"appName");Jn([_({type:String})],u5.prototype,"agencyName");Jn([_({type:String})],u5.prototype,"homepageLink");Jn([Ze()],u5.prototype,"slotHasContent");Jn([Ze()],u5.prototype,"isMobileMenuOpen");customElements.get("nys-globalheader")||customElements.define("nys-globalheader",u5);const zy=C1`
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
`;var Ly=Object.defineProperty,Jo=(a,n,l,r)=>{for(var c=void 0,h=a.length-1,d;h>=0;h--)(d=a[h])&&(c=d(n,l,c)||c);return c&&Ly(n,l,c),c};const t9=class extends i1{constructor(){super(...arguments),this.agencyName="",this.homepageLink="",this.slotHasContent=!0}firstUpdated(){var n;const l=(n=this.shadowRoot)==null?void 0:n.querySelector("slot");l==null||l.addEventListener("slotchange",()=>this._handleSlotChange()),this._handleSlotChange()}async _handleSlotChange(){var n,l;const r=(n=this.shadowRoot)==null?void 0:n.querySelector("slot");if(!r)return;const c=r==null?void 0:r.assignedNodes({flatten:!0}).filter(v=>v.nodeType===Node.ELEMENT_NODE);await Promise.resolve(),this.slotHasContent=c.length>0;const h=(l=this.shadowRoot)==null?void 0:l.querySelector(".nys-globalfooter__content"),d=c==null?void 0:c.some(v=>v.tagName==="H4");h&&(h.classList.toggle("columns",d),h.classList.toggle("small",!d),h.innerHTML="",c.forEach(v=>{if(v.nodeType===Node.ELEMENT_NODE){const C=v.cloneNode(!0);["script","iframe","object","embed","img"].forEach(w=>{C.querySelectorAll(w).forEach(M=>M.remove())}),h.appendChild(C),v.remove()}}))}render(){var n,l;return z`
      <footer class="nys-globalfooter">
        <div class="nys-globalfooter__main-container">
          ${(n=this.homepageLink)!=null&&n.trim()?z`<a href=${(l=this.homepageLink)==null?void 0:l.trim()}>
                <p class="nys-globalfooter__name">${this.agencyName}</p>
              </a>`:z`<p class="nys-globalfooter__name">${this.agencyName}</p>`}
          ${this.slotHasContent?z`<div class="nys-globalfooter__content">
                <slot
                  style="display: hidden"
                  @slotchange="${this._handleSlotChange}"
                ></slot>
              </div>`:""}
        </div>
      </footer>
    `}};t9.styles=zy;let Fn=t9;Jo([_({type:String})],Fn.prototype,"agencyName");Jo([_({type:String})],Fn.prototype,"homepageLink");Jo([Ze()],Fn.prototype,"slotHasContent");customElements.get("nys-globalfooter")||customElements.define("nys-globalfooter",Fn);const Hy=C1`
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
`,Uy=`<svg xmlns="http://www.w3.org/2000/svg" width="91" height="55" viewBox="0 0 91 55" fill="none">
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
</svg>`,e9=class extends i1{_getNysLogo(){return new DOMParser().parseFromString(Uy,"image/svg+xml").documentElement}render(){return z`
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
    `}};e9.styles=Hy;let s9=e9;customElements.get("nys-unavfooter")||customElements.define("nys-unavfooter",s9);const W6=tt({react:I1,tagName:"nys-alert",elementClass:g4,events:{onNysAlertClosed:"nys-alertClosed"}});tt({react:I1,tagName:"nys-avatar",elementClass:b4});const Oy=tt({react:I1,tagName:"nys-button",elementClass:m4,events:{onNysClick:"nys-click",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),W5=tt({react:I1,tagName:"nys-checkbox",elementClass:$4,events:{onNysChange:"nys-change",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),Vy=tt({react:I1,tagName:"nys-checkboxgroup",elementClass:E4}),Ty=tt({react:I1,tagName:"nys-fileinput",elementClass:ft,events:{onNysFileChange:"nys-change"}}),Ry=tt({react:I1,tagName:"nys-globalfooter",elementClass:Fn}),Zy=tt({react:I1,tagName:"nys-globalheader",elementClass:u5}),An=tt({react:I1,tagName:"nys-option",elementClass:S2}),I6=tt({react:I1,tagName:"nys-radiobutton",elementClass:L4,events:{onNysChange:"nys-change",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),Ny=tt({react:I1,tagName:"nys-radiogroup",elementClass:z4}),By=tt({react:I1,tagName:"nys-select",elementClass:H4,events:{onNysChange:"nys-change",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),qy=tt({react:I1,tagName:"nys-skipnav",elementClass:Xa}),t4=tt({react:I1,tagName:"nys-textinput",elementClass:T4,events:{onNysInput:"nys-input",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),jy=tt({react:I1,tagName:"nys-textarea",elementClass:V4,events:{onNysInput:"nys-input",onNysFocus:"nys-focus",onNysBlur:"nys-blur",onNysSelect:"nys-select"}}),Gy=tt({react:I1,tagName:"nys-toggle",elementClass:R4,events:{onNysChange:"nys-change",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),Yy=tt({react:I1,tagName:"nys-unavfooter",elementClass:s9}),Xy=tt({react:I1,tagName:"nys-unavheader",elementClass:Be});function Qy(){const[a,n]=Va.useState(null),l=r=>{r.preventDefault();const c=new FormData(r.target),h={};for(const[d,v]of c.entries()){const C=c.getAll(d);C.length>1?h[d]=C.map(w=>w instanceof File?{fileName:w.name,fileType:w.type}:w):h[d]=v instanceof File?{name:v.name,type:v.type,size:v.size}:v}alert(`Form Data:
`+JSON.stringify(h,null,2)),n(h)};return K.jsxs(K.Fragment,{children:[K.jsx(qy,{}),K.jsx(Xy,{}),K.jsx(Zy,{appName:"React Demo Form",agencyName:"Office of Information Technology Services"}),K.jsxs("main",{id:"main-content",children:[K.jsx("h1",{className:"appTitle",children:"Vite + React + NYSDS"}),K.jsx(W6,{type:"info",heading:"NYSDS Components",text:"We make use of form-related NYSDS components in the native HTML form below.",primaryLabel:"Learn more on NYSDS reference site",primaryAction:"https://designsystem.ny.gov/",dismissible:!0}),K.jsxs("form",{id:"myForm",className:"nys-newsletter-form",method:"POST",onSubmit:l,children:[K.jsx(t4,{name:"fullName",label:"Full name",required:!0,onNysBlur:r=>{console.log("nys-blur event received 🔥",r)}}),K.jsx(t4,{name:"email",label:"Email",type:"email",required:!0}),K.jsx(jy,{name:"quote",label:"Enter your favorite quote:",value:"Majorities, of course, start with minorities.",required:!0}),K.jsxs(By,{name:"newsletter_topic",label:"Select your preferred newsletter topic",id:"newsletter-topic",required:!0,children:[K.jsx(An,{value:"government_updates",label:"Government Updates"}),K.jsx(An,{value:"community_events",label:"Community Events"}),K.jsx(An,{value:"public_services",label:"Public Services & Resources"}),K.jsx(An,{value:"transportation_news",label:"Transportation & Infrastructure"}),K.jsx(An,{value:"environment",label:"Environment & Sustainability"})]}),K.jsx(Ty,{name:"uploadImg",label:"Upload a file",description:"Accepted file types: .jpg, .png, .pdf",accept:"image/png, image/jpeg, image/*,.pdf",multiple:!0,dropzone:!0,required:!0}),K.jsxs(Ny,{label:"How often do you want updates?",description:"These updates will be sent directly to your email.",size:"md",required:!0,children:[K.jsx(I6,{name:"frequency",label:"Weekly",value:"weekly"}),K.jsx(I6,{name:"frequency",label:"Monthly",value:"monthly"})]}),K.jsx(W5,{label:"Subscribe to NYS Government Updates",description:"Get notified via email about important updates and services.",id:"subscribe-checkbox-disabled-checked",name:"subscribe",value:"email-updates",required:!0}),K.jsxs(Vy,{label:"Select your favorite New York landmarks",description:"Choose from the options below",required:!0,children:[K.jsx(W5,{name:"landmarks",label:"Adirondacks",value:"adirondacks"}),K.jsx(W5,{name:"landmarks",value:"finger-lakes",label:"Finger Lakes"}),K.jsx(W5,{name:"landmarks",value:"catskills",label:"Catskills"}),K.jsx(W5,{name:"landmarks",value:"niagara-falls",label:"Niagara Falls"}),K.jsx(W5,{name:"landmarks",value:"coney-island",label:"Coney Island"})]}),K.jsx(Gy,{label:"Dark Mode",name:"toggle-switch",value:"access",children:K.jsx("p",{slot:"description",children:"Toggle switch is usually NOT recommended for forms (use checkboxes instead)."})}),K.jsx(Oy,{type:"submit",fullWidth:!0,label:"Subscribe"})]}),K.jsx("br",{}),a&&K.jsx(W6,{type:"success",heading:"Form submitted successfully",text:`${a?`

Submitted Data:
`+JSON.stringify(a,null,2):""}`,dismissible:!0})]}),K.jsx(Ry,{agencyName:"Office of Information Technology Services",children:K.jsxs("ul",{children:[K.jsx("li",{children:K.jsx("a",{href:"https://its.ny.gov",children:"ITS Home"})}),K.jsx("li",{children:K.jsx("a",{href:"https://its.ny.gov/about",children:"About ITS"})})]})}),K.jsx(Yy,{})]})}Tu.createRoot(document.getElementById("root")).render(K.jsx(Va.StrictMode,{children:K.jsx(Qy,{})}));
