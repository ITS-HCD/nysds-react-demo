function J4(o,s){for(var c=0;c<s.length;c++){const r=s[c];if(typeof r!="string"&&!Array.isArray(r)){for(const d in r)if(d!=="default"&&!(d in o)){const y=Object.getOwnPropertyDescriptor(r,d);y&&Object.defineProperty(o,d,y.get?y:{enumerable:!0,get:()=>r[d]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const y of d)if(y.type==="childList")for(const v of y.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&r(v)}).observe(document,{childList:!0,subtree:!0});function c(d){const y={};return d.integrity&&(y.integrity=d.integrity),d.referrerPolicy&&(y.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?y.credentials="include":d.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function r(d){if(d.ep)return;d.ep=!0;const y=c(d);fetch(d.href,y)}})();function F4(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var C5={exports:{}},wl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k3;function W4(){if(k3)return wl;k3=1;var o=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(r,d,y){var v=null;if(y!==void 0&&(v=""+y),d.key!==void 0&&(v=""+d.key),"key"in d){y={};for(var A in d)A!=="key"&&(y[A]=d[A])}else y=d;return d=y.ref,{$$typeof:o,type:r,key:v,ref:d!==void 0?d:null,props:y}}return wl.Fragment=s,wl.jsx=c,wl.jsxs=c,wl}var S3;function I4(){return S3||(S3=1,C5.exports=W4()),C5.exports}var X=I4(),_5={exports:{}},K={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E3;function P4(){if(E3)return K;E3=1;var o=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),y=Symbol.for("react.consumer"),v=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),$=Symbol.iterator;function J(g){return g===null||typeof g!="object"?null:(g=$&&g[$]||g["@@iterator"],typeof g=="function"?g:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},le=Object.assign,at={};function ut(g,D,Z){this.props=g,this.context=D,this.refs=at,this.updater=Z||G}ut.prototype.isReactComponent={},ut.prototype.setState=function(g,D){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,D,"setState")},ut.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function i1(){}i1.prototype=ut.prototype;function We(g,D,Z){this.props=g,this.context=D,this.refs=at,this.updater=Z||G}var Nt=We.prototype=new i1;Nt.constructor=We,le(Nt,ut.prototype),Nt.isPureReactComponent=!0;var M1=Array.isArray,se={H:null,A:null,T:null,S:null},lt=Object.prototype.hasOwnProperty;function A1(g,D,Z,R,T,te){return Z=te.ref,{$$typeof:o,type:g,key:D,ref:Z!==void 0?Z:null,props:te}}function D1(g,D){return A1(g.type,D,void 0,void 0,void 0,g.props)}function B(g){return typeof g=="object"&&g!==null&&g.$$typeof===o}function oe(g){var D={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(Z){return D[Z]})}var xt=/\/+/g;function s1(g,D){return typeof g=="object"&&g!==null&&g.key!=null?oe(""+g.key):D.toString(36)}function Qt(){}function o1(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(Qt,Qt):(g.status="pending",g.then(function(D){g.status==="pending"&&(g.status="fulfilled",g.value=D)},function(D){g.status==="pending"&&(g.status="rejected",g.reason=D)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function nt(g,D,Z,R,T){var te=typeof g;(te==="undefined"||te==="boolean")&&(g=null);var F=!1;if(g===null)F=!0;else switch(te){case"bigint":case"string":case"number":F=!0;break;case"object":switch(g.$$typeof){case o:case s:F=!0;break;case O:return F=g._init,nt(F(g._payload),D,Z,R,T)}}if(F)return T=T(g),F=R===""?"."+s1(g,0):R,M1(T)?(Z="",F!=null&&(Z=F.replace(xt,"$&/")+"/"),nt(T,D,Z,"",function(ze){return ze})):T!=null&&(B(T)&&(T=D1(T,Z+(T.key==null||g&&g.key===T.key?"":(""+T.key).replace(xt,"$&/")+"/")+F)),D.push(T)),1;F=0;var Ie=R===""?".":R+":";if(M1(g))for(var re=0;re<g.length;re++)R=g[re],te=Ie+s1(R,re),F+=nt(R,D,Z,te,T);else if(re=J(g),typeof re=="function")for(g=re.call(g),re=0;!(R=g.next()).done;)R=R.value,te=Ie+s1(R,re++),F+=nt(R,D,Z,te,T);else if(te==="object"){if(typeof g.then=="function")return nt(o1(g),D,Z,R,T);throw D=String(g),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return F}function H(g,D,Z){if(g==null)return g;var R=[],T=0;return nt(g,R,"","",function(te){return D.call(Z,te,T++)}),R}function Q(g){if(g._status===-1){var D=g._result;D=D(),D.then(function(Z){(g._status===0||g._status===-1)&&(g._status=1,g._result=Z)},function(Z){(g._status===0||g._status===-1)&&(g._status=2,g._result=Z)}),g._status===-1&&(g._status=0,g._result=D)}if(g._status===1)return g._result.default;throw g._result}var j=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function ye(){}return K.Children={map:H,forEach:function(g,D,Z){H(g,function(){D.apply(this,arguments)},Z)},count:function(g){var D=0;return H(g,function(){D++}),D},toArray:function(g){return H(g,function(D){return D})||[]},only:function(g){if(!B(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},K.Component=ut,K.Fragment=c,K.Profiler=d,K.PureComponent=We,K.StrictMode=r,K.Suspense=k,K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=se,K.act=function(){throw Error("act(...) is not supported in production builds of React.")},K.cache=function(g){return function(){return g.apply(null,arguments)}},K.cloneElement=function(g,D,Z){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var R=le({},g.props),T=g.key,te=void 0;if(D!=null)for(F in D.ref!==void 0&&(te=void 0),D.key!==void 0&&(T=""+D.key),D)!lt.call(D,F)||F==="key"||F==="__self"||F==="__source"||F==="ref"&&D.ref===void 0||(R[F]=D[F]);var F=arguments.length-2;if(F===1)R.children=Z;else if(1<F){for(var Ie=Array(F),re=0;re<F;re++)Ie[re]=arguments[re+2];R.children=Ie}return A1(g.type,T,void 0,void 0,te,R)},K.createContext=function(g){return g={$$typeof:v,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:y,_context:g},g},K.createElement=function(g,D,Z){var R,T={},te=null;if(D!=null)for(R in D.key!==void 0&&(te=""+D.key),D)lt.call(D,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(T[R]=D[R]);var F=arguments.length-2;if(F===1)T.children=Z;else if(1<F){for(var Ie=Array(F),re=0;re<F;re++)Ie[re]=arguments[re+2];T.children=Ie}if(g&&g.defaultProps)for(R in F=g.defaultProps,F)T[R]===void 0&&(T[R]=F[R]);return A1(g,te,void 0,void 0,null,T)},K.createRef=function(){return{current:null}},K.forwardRef=function(g){return{$$typeof:A,render:g}},K.isValidElement=B,K.lazy=function(g){return{$$typeof:O,_payload:{_status:-1,_result:g},_init:Q}},K.memo=function(g,D){return{$$typeof:w,type:g,compare:D===void 0?null:D}},K.startTransition=function(g){var D=se.T,Z={};se.T=Z;try{var R=g(),T=se.S;T!==null&&T(Z,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(ye,j)}catch(te){j(te)}finally{se.T=D}},K.unstable_useCacheRefresh=function(){return se.H.useCacheRefresh()},K.use=function(g){return se.H.use(g)},K.useActionState=function(g,D,Z){return se.H.useActionState(g,D,Z)},K.useCallback=function(g,D){return se.H.useCallback(g,D)},K.useContext=function(g){return se.H.useContext(g)},K.useDebugValue=function(){},K.useDeferredValue=function(g,D){return se.H.useDeferredValue(g,D)},K.useEffect=function(g,D){return se.H.useEffect(g,D)},K.useId=function(){return se.H.useId()},K.useImperativeHandle=function(g,D,Z){return se.H.useImperativeHandle(g,D,Z)},K.useInsertionEffect=function(g,D){return se.H.useInsertionEffect(g,D)},K.useLayoutEffect=function(g,D){return se.H.useLayoutEffect(g,D)},K.useMemo=function(g,D){return se.H.useMemo(g,D)},K.useOptimistic=function(g,D){return se.H.useOptimistic(g,D)},K.useReducer=function(g,D,Z){return se.H.useReducer(g,D,Z)},K.useRef=function(g){return se.H.useRef(g)},K.useState=function(g){return se.H.useState(g)},K.useSyncExternalStore=function(g,D,Z){return se.H.useSyncExternalStore(g,D,Z)},K.useTransition=function(){return se.H.useTransition()},K.version="19.0.0",K}var z3;function H5(){return z3||(z3=1,_5.exports=P4()),_5.exports}var li=H5();const e6=F4(li),Be=J4({__proto__:null,default:e6},[li]);var m5={exports:{}},kl={},x5={exports:{}},w5={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M3;function t6(){return M3||(M3=1,function(o){function s(H,Q){var j=H.length;H.push(Q);e:for(;0<j;){var ye=j-1>>>1,g=H[ye];if(0<d(g,Q))H[ye]=Q,H[j]=g,j=ye;else break e}}function c(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var Q=H[0],j=H.pop();if(j!==Q){H[0]=j;e:for(var ye=0,g=H.length,D=g>>>1;ye<D;){var Z=2*(ye+1)-1,R=H[Z],T=Z+1,te=H[T];if(0>d(R,j))T<g&&0>d(te,R)?(H[ye]=te,H[T]=j,ye=T):(H[ye]=R,H[Z]=j,ye=Z);else if(T<g&&0>d(te,j))H[ye]=te,H[T]=j,ye=T;else break e}}return Q}function d(H,Q){var j=H.sortIndex-Q.sortIndex;return j!==0?j:H.id-Q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var y=performance;o.unstable_now=function(){return y.now()}}else{var v=Date,A=v.now();o.unstable_now=function(){return v.now()-A}}var k=[],w=[],O=1,$=null,J=3,G=!1,le=!1,at=!1,ut=typeof setTimeout=="function"?setTimeout:null,i1=typeof clearTimeout=="function"?clearTimeout:null,We=typeof setImmediate<"u"?setImmediate:null;function Nt(H){for(var Q=c(w);Q!==null;){if(Q.callback===null)r(w);else if(Q.startTime<=H)r(w),Q.sortIndex=Q.expirationTime,s(k,Q);else break;Q=c(w)}}function M1(H){if(at=!1,Nt(H),!le)if(c(k)!==null)le=!0,o1();else{var Q=c(w);Q!==null&&nt(M1,Q.startTime-H)}}var se=!1,lt=-1,A1=5,D1=-1;function B(){return!(o.unstable_now()-D1<A1)}function oe(){if(se){var H=o.unstable_now();D1=H;var Q=!0;try{e:{le=!1,at&&(at=!1,i1(lt),lt=-1),G=!0;var j=J;try{t:{for(Nt(H),$=c(k);$!==null&&!($.expirationTime>H&&B());){var ye=$.callback;if(typeof ye=="function"){$.callback=null,J=$.priorityLevel;var g=ye($.expirationTime<=H);if(H=o.unstable_now(),typeof g=="function"){$.callback=g,Nt(H),Q=!0;break t}$===c(k)&&r(k),Nt(H)}else r(k);$=c(k)}if($!==null)Q=!0;else{var D=c(w);D!==null&&nt(M1,D.startTime-H),Q=!1}}break e}finally{$=null,J=j,G=!1}Q=void 0}}finally{Q?xt():se=!1}}}var xt;if(typeof We=="function")xt=function(){We(oe)};else if(typeof MessageChannel<"u"){var s1=new MessageChannel,Qt=s1.port2;s1.port1.onmessage=oe,xt=function(){Qt.postMessage(null)}}else xt=function(){ut(oe,0)};function o1(){se||(se=!0,xt())}function nt(H,Q){lt=ut(function(){H(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_continueExecution=function(){le||G||(le=!0,o1())},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A1=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return J},o.unstable_getFirstCallbackNode=function(){return c(k)},o.unstable_next=function(H){switch(J){case 1:case 2:case 3:var Q=3;break;default:Q=J}var j=J;J=Q;try{return H()}finally{J=j}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(H,Q){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var j=J;J=H;try{return Q()}finally{J=j}},o.unstable_scheduleCallback=function(H,Q,j){var ye=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ye+j:ye):j=ye,H){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=j+g,H={id:O++,callback:Q,priorityLevel:H,startTime:j,expirationTime:g,sortIndex:-1},j>ye?(H.sortIndex=j,s(w,H),c(k)===null&&H===c(w)&&(at?(i1(lt),lt=-1):at=!0,nt(M1,j-ye))):(H.sortIndex=g,s(k,H),le||G||(le=!0,o1())),H},o.unstable_shouldYield=B,o.unstable_wrapCallback=function(H){var Q=J;return function(){var j=J;J=Q;try{return H.apply(this,arguments)}finally{J=j}}}}(w5)),w5}var A3;function a6(){return A3||(A3=1,x5.exports=t6()),x5.exports}var k5={exports:{}},Fe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D3;function l6(){if(D3)return Fe;D3=1;var o=H5();function s(k){var w="https://react.dev/errors/"+k;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)w+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+k+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var r={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function y(k,w,O){var $=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:$==null?null:""+$,children:k,containerInfo:w,implementation:O}}var v=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(k,w){if(k==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Fe.createPortal=function(k,w){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(s(299));return y(k,w,null,O)},Fe.flushSync=function(k){var w=v.T,O=r.p;try{if(v.T=null,r.p=2,k)return k()}finally{v.T=w,r.p=O,r.d.f()}},Fe.preconnect=function(k,w){typeof k=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,r.d.C(k,w))},Fe.prefetchDNS=function(k){typeof k=="string"&&r.d.D(k)},Fe.preinit=function(k,w){if(typeof k=="string"&&w&&typeof w.as=="string"){var O=w.as,$=A(O,w.crossOrigin),J=typeof w.integrity=="string"?w.integrity:void 0,G=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;O==="style"?r.d.S(k,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:$,integrity:J,fetchPriority:G}):O==="script"&&r.d.X(k,{crossOrigin:$,integrity:J,fetchPriority:G,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},Fe.preinitModule=function(k,w){if(typeof k=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var O=A(w.as,w.crossOrigin);r.d.M(k,{crossOrigin:O,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&r.d.M(k)},Fe.preload=function(k,w){if(typeof k=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var O=w.as,$=A(O,w.crossOrigin);r.d.L(k,O,{crossOrigin:$,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},Fe.preloadModule=function(k,w){if(typeof k=="string")if(w){var O=A(w.as,w.crossOrigin);r.d.m(k,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:O,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else r.d.m(k)},Fe.requestFormReset=function(k){r.d.r(k)},Fe.unstable_batchedUpdates=function(k,w){return k(w)},Fe.useFormState=function(k,w,O){return v.H.useFormState(k,w,O)},Fe.useFormStatus=function(){return v.H.useHostTransitionStatus()},Fe.version="19.0.0",Fe}var L3;function n6(){if(L3)return k5.exports;L3=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(s){console.error(s)}}return o(),k5.exports=l6(),k5.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H3;function i6(){if(H3)return kl;H3=1;var o=a6(),s=H5(),c=n6();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var y=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),J=Symbol.for("react.consumer"),G=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),at=Symbol.for("react.suspense"),ut=Symbol.for("react.suspense_list"),i1=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),Nt=Symbol.for("react.offscreen"),M1=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function lt(e){return e===null||typeof e!="object"?null:(e=se&&e[se]||e["@@iterator"],typeof e=="function"?e:null)}var A1=Symbol.for("react.client.reference");function D1(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===A1?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case A:return"Portal";case O:return"Profiler";case w:return"StrictMode";case at:return"Suspense";case ut:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case G:return(e.displayName||"Context")+".Provider";case J:return(e._context.displayName||"Context")+".Consumer";case le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case i1:return t=e.displayName||null,t!==null?t:D1(e.type)||"Memo";case We:t=e._payload,e=e._init;try{return D1(e(t))}catch{}}return null}var B=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=Object.assign,xt,s1;function Qt(e){if(xt===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);xt=t&&t[1]||"",s1=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xt+e+s1}var o1=!1;function nt(e,t){if(!e||o1)return"";o1=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(S){var x=S}Reflect.construct(e,[],M)}else{try{M.call()}catch(S){x=S}e.call(M.prototype)}}else{try{throw Error()}catch(S){x=S}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(S){if(S&&x&&typeof S.stack=="string")return[S.stack,x.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],h=i[1];if(u&&h){var f=u.split(`
`),C=h.split(`
`);for(n=l=0;l<f.length&&!f[l].includes("DetermineComponentFrameRoot");)l++;for(;n<C.length&&!C[n].includes("DetermineComponentFrameRoot");)n++;if(l===f.length||n===C.length)for(l=f.length-1,n=C.length-1;1<=l&&0<=n&&f[l]!==C[n];)n--;for(;1<=l&&0<=n;l--,n--)if(f[l]!==C[n]){if(l!==1||n!==1)do if(l--,n--,0>n||f[l]!==C[n]){var E=`
`+f[l].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=l&&0<=n);break}}}finally{o1=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Qt(a):""}function H(e){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return e=nt(e.type,!1),e;case 11:return e=nt(e.type.render,!1),e;case 1:return e=nt(e.type,!0),e;default:return""}}function Q(e){try{var t="";do t+=H(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function j(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function ye(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(j(e)!==e)throw Error(r(188))}function D(e){var t=e.alternate;if(!t){if(t=j(e),t===null)throw Error(r(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return g(n),e;if(i===l)return g(n),t;i=i.sibling}throw Error(r(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,h=n.child;h;){if(h===a){u=!0,a=n,l=i;break}if(h===l){u=!0,l=n,a=i;break}h=h.sibling}if(!u){for(h=i.child;h;){if(h===a){u=!0,a=i,l=n;break}if(h===l){u=!0,l=i,a=n;break}h=h.sibling}if(!u)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:t}function Z(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Z(e),t!==null)return t;e=e.sibling}return null}var R=Array.isArray,T=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},F=[],Ie=-1;function re(e){return{current:e}}function ze(e){0>Ie||(e.current=F[Ie],F[Ie]=null,Ie--)}function pe(e,t){Ie++,F[Ie]=e.current,e.current=t}var Kt=re(null),Ea=re(null),L1=re(null),Rl=re(null);function ql(e,t){switch(pe(L1,t),pe(Ea,e),pe(Kt,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?P7(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=P7(e),t=e3(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ze(Kt),pe(Kt,t)}function O2(){ze(Kt),ze(Ea),ze(L1)}function ui(e){e.memoizedState!==null&&pe(Rl,e);var t=Kt.current,a=e3(t,e.type);t!==a&&(pe(Ea,e),pe(Kt,a))}function Bl(e){Ea.current===e&&(ze(Kt),ze(Ea)),Rl.current===e&&(ze(Rl),bl._currentValue=te)}var di=Object.prototype.hasOwnProperty,hi=o.unstable_scheduleCallback,fi=o.unstable_cancelCallback,z0=o.unstable_shouldYield,M0=o.unstable_requestPaint,Jt=o.unstable_now,A0=o.unstable_getCurrentPriorityLevel,B5=o.unstable_ImmediatePriority,Z5=o.unstable_UserBlockingPriority,Zl=o.unstable_NormalPriority,D0=o.unstable_LowPriority,j5=o.unstable_IdlePriority,L0=o.log,H0=o.unstable_setDisableYieldValue,za=null,dt=null;function T0(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(za,e,void 0,(e.current.flags&128)===128)}catch{}}function H1(e){if(typeof L0=="function"&&H0(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(za,e)}catch{}}var ht=Math.clz32?Math.clz32:V0,O0=Math.log,U0=Math.LN2;function V0(e){return e>>>=0,e===0?32:31-(O0(e)/U0|0)|0}var jl=128,Gl=4194304;function s2(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yl(e,t){var a=e.pendingLanes;if(a===0)return 0;var l=0,n=e.suspendedLanes,i=e.pingedLanes,u=e.warmLanes;e=e.finishedLanes!==0;var h=a&134217727;return h!==0?(a=h&~n,a!==0?l=s2(a):(i&=h,i!==0?l=s2(i):e||(u=h&~u,u!==0&&(l=s2(u))))):(h=a&~n,h!==0?l=s2(h):i!==0?l=s2(i):e||(u=a&~u,u!==0&&(l=s2(u)))),l===0?0:t!==0&&t!==l&&(t&n)===0&&(n=l&-l,u=t&-t,n>=u||n===32&&(u&4194176)!==0)?t:l}function Ma(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $0(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G5(){var e=jl;return jl<<=1,(jl&4194176)===0&&(jl=128),e}function Y5(){var e=Gl;return Gl<<=1,(Gl&62914560)===0&&(Gl=4194304),e}function yi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Aa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function N0(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var h=e.entanglements,f=e.expirationTimes,C=e.hiddenUpdates;for(a=u&~a;0<a;){var E=31-ht(a),M=1<<E;h[E]=0,f[E]=-1;var x=C[E];if(x!==null)for(C[E]=null,E=0;E<x.length;E++){var S=x[E];S!==null&&(S.lane&=-536870913)}a&=~M}l!==0&&X5(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function X5(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ht(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194218}function Q5(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ht(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function K5(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function J5(){var e=T.p;return e!==0?e:(e=window.event,e===void 0?32:b3(e.type))}function R0(e,t){var a=T.p;try{return T.p=e,t()}finally{T.p=a}}var T1=Math.random().toString(36).slice(2),Ke="__reactFiber$"+T1,it="__reactProps$"+T1,U2="__reactContainer$"+T1,vi="__reactEvents$"+T1,q0="__reactListeners$"+T1,B0="__reactHandles$"+T1,F5="__reactResources$"+T1,Da="__reactMarker$"+T1;function gi(e){delete e[Ke],delete e[it],delete e[vi],delete e[q0],delete e[B0]}function o2(e){var t=e[Ke];if(t)return t;for(var a=e.parentNode;a;){if(t=a[U2]||a[Ke]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=l3(e);e!==null;){if(a=e[Ke])return a;e=l3(e)}return t}e=a,a=e.parentNode}return null}function V2(e){if(e=e[Ke]||e[U2]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function La(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function $2(e){var t=e[F5];return t||(t=e[F5]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(e){e[Da]=!0}var W5=new Set,I5={};function r2(e,t){N2(e,t),N2(e+"Capture",t)}function N2(e,t){for(I5[e]=t,e=0;e<t.length;e++)W5.add(t[e])}var r1=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Z0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),P5={},eo={};function j0(e){return di.call(eo,e)?!0:di.call(P5,e)?!1:Z0.test(e)?eo[e]=!0:(P5[e]=!0,!1)}function Xl(e,t,a){if(j0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ql(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function c1(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function to(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function G0(e){var t=to(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kl(e){e._valueTracker||(e._valueTracker=G0(e))}function ao(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=to(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Jl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Y0=/[\n"\\]/g;function kt(e){return e.replace(Y0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function pi(e,t,a,l,n,i,u,h){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wt(t)):e.value!==""+wt(t)&&(e.value=""+wt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?bi(e,u,wt(t)):a!=null?bi(e,u,wt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+wt(h):e.removeAttribute("name")}function lo(e,t,a,l,n,i,u,h){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+wt(a):"",t=t!=null?""+wt(t):a,h||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=h?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u)}function bi(e,t,a){t==="number"&&Jl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function R2(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+wt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function no(e,t,a){if(t!=null&&(t=""+wt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+wt(a):""}function io(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(r(92));if(R(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=wt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function q2(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var X0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function so(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||X0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function oo(e,t,a){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&so(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&so(e,i,t[i])}function Ci(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Q0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),K0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fl(e){return K0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var _i=null;function mi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var B2=null,Z2=null;function ro(e){var t=V2(e);if(t&&(e=t.stateNode)){var a=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(pi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[it]||null;if(!n)throw Error(r(90));pi(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&ao(l)}break e;case"textarea":no(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&R2(e,!!a.multiple,t,!1)}}}var xi=!1;function co(e,t,a){if(xi)return e(t,a);xi=!0;try{var l=e(t);return l}finally{if(xi=!1,(B2!==null||Z2!==null)&&(On(),B2&&(t=B2,e=Z2,Z2=B2=null,ro(t),e)))for(t=0;t<e.length;t++)ro(e[t])}}function Ha(e,t){var a=e.stateNode;if(a===null)return null;var l=a[it]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var wi=!1;if(r1)try{var Ta={};Object.defineProperty(Ta,"passive",{get:function(){wi=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{wi=!1}var O1=null,ki=null,Wl=null;function uo(){if(Wl)return Wl;var e,t=ki,a=t.length,l,n="value"in O1?O1.value:O1.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return Wl=n.slice(e,1<l?1-l:void 0)}function Il(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pl(){return!0}function ho(){return!1}function st(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(a=e[h],this[h]=a?a(i):i[h]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Pl:ho,this.isPropagationStopped=ho,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),t}var c2={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},en=st(c2),Oa=oe({},c2,{view:0,detail:0}),J0=st(Oa),Si,Ei,Ua,tn=oe({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ua&&(Ua&&e.type==="mousemove"?(Si=e.screenX-Ua.screenX,Ei=e.screenY-Ua.screenY):Ei=Si=0,Ua=e),Si)},movementY:function(e){return"movementY"in e?e.movementY:Ei}}),fo=st(tn),F0=oe({},tn,{dataTransfer:0}),W0=st(F0),I0=oe({},Oa,{relatedTarget:0}),zi=st(I0),P0=oe({},c2,{animationName:0,elapsedTime:0,pseudoElement:0}),e8=st(P0),t8=oe({},c2,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),a8=st(t8),l8=oe({},c2,{data:0}),yo=st(l8),n8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o8(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=s8[e])?!!t[e]:!1}function Mi(){return o8}var r8=oe({},Oa,{key:function(e){if(e.key){var t=n8[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?i8[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mi,charCode:function(e){return e.type==="keypress"?Il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),c8=st(r8),u8=oe({},tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vo=st(u8),d8=oe({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mi}),h8=st(d8),f8=oe({},c2,{propertyName:0,elapsedTime:0,pseudoElement:0}),y8=st(f8),v8=oe({},tn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),g8=st(v8),p8=oe({},c2,{newState:0,oldState:0}),b8=st(p8),C8=[9,13,27,32],Ai=r1&&"CompositionEvent"in window,Va=null;r1&&"documentMode"in document&&(Va=document.documentMode);var _8=r1&&"TextEvent"in window&&!Va,go=r1&&(!Ai||Va&&8<Va&&11>=Va),po=" ",bo=!1;function Co(e,t){switch(e){case"keyup":return C8.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _o(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var j2=!1;function m8(e,t){switch(e){case"compositionend":return _o(t);case"keypress":return t.which!==32?null:(bo=!0,po);case"textInput":return e=t.data,e===po&&bo?null:e;default:return null}}function x8(e,t){if(j2)return e==="compositionend"||!Ai&&Co(e,t)?(e=uo(),Wl=ki=O1=null,j2=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return go&&t.locale!=="ko"?null:t.data;default:return null}}var w8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!w8[e.type]:t==="textarea"}function xo(e,t,a,l){B2?Z2?Z2.push(l):Z2=[l]:B2=l,t=Rn(t,"onChange"),0<t.length&&(a=new en("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var $a=null,Na=null;function k8(e){K7(e,0)}function an(e){var t=La(e);if(ao(t))return e}function wo(e,t){if(e==="change")return t}var ko=!1;if(r1){var Di;if(r1){var Li="oninput"in document;if(!Li){var So=document.createElement("div");So.setAttribute("oninput","return;"),Li=typeof So.oninput=="function"}Di=Li}else Di=!1;ko=Di&&(!document.documentMode||9<document.documentMode)}function Eo(){$a&&($a.detachEvent("onpropertychange",zo),Na=$a=null)}function zo(e){if(e.propertyName==="value"&&an(Na)){var t=[];xo(t,Na,e,mi(e)),co(k8,t)}}function S8(e,t,a){e==="focusin"?(Eo(),$a=t,Na=a,$a.attachEvent("onpropertychange",zo)):e==="focusout"&&Eo()}function E8(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return an(Na)}function z8(e,t){if(e==="click")return an(t)}function M8(e,t){if(e==="input"||e==="change")return an(t)}function A8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:A8;function Ra(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!di.call(t,n)||!ft(e[n],t[n]))return!1}return!0}function Mo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ao(e,t){var a=Mo(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Mo(a)}}function Do(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Do(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Jl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Jl(e.document)}return t}function Hi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function D8(e,t){var a=Lo(t);t=e.focusedElem;var l=e.selectionRange;if(a!==t&&t&&t.ownerDocument&&Do(t.ownerDocument.documentElement,t)){if(l!==null&&Hi(t)){if(e=l.start,a=l.end,a===void 0&&(a=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(a,t.value.length);else if(a=(e=t.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var n=t.textContent.length,i=Math.min(l.start,n);l=l.end===void 0?i:Math.min(l.end,n),!a.extend&&i>l&&(n=l,l=i,i=n),n=Ao(t,i);var u=Ao(t,l);n&&u&&(a.rangeCount!==1||a.anchorNode!==n.node||a.anchorOffset!==n.offset||a.focusNode!==u.node||a.focusOffset!==u.offset)&&(e=e.createRange(),e.setStart(n.node,n.offset),a.removeAllRanges(),i>l?(a.addRange(e),a.extend(u.node,u.offset)):(e.setEnd(u.node,u.offset),a.addRange(e)))}}for(e=[],a=t;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)a=e[t],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var L8=r1&&"documentMode"in document&&11>=document.documentMode,G2=null,Ti=null,qa=null,Oi=!1;function Ho(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Oi||G2==null||G2!==Jl(l)||(l=G2,"selectionStart"in l&&Hi(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),qa&&Ra(qa,l)||(qa=l,l=Rn(Ti,"onSelect"),0<l.length&&(t=new en("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=G2)))}function u2(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Y2={animationend:u2("Animation","AnimationEnd"),animationiteration:u2("Animation","AnimationIteration"),animationstart:u2("Animation","AnimationStart"),transitionrun:u2("Transition","TransitionRun"),transitionstart:u2("Transition","TransitionStart"),transitioncancel:u2("Transition","TransitionCancel"),transitionend:u2("Transition","TransitionEnd")},Ui={},To={};r1&&(To=document.createElement("div").style,"AnimationEvent"in window||(delete Y2.animationend.animation,delete Y2.animationiteration.animation,delete Y2.animationstart.animation),"TransitionEvent"in window||delete Y2.transitionend.transition);function d2(e){if(Ui[e])return Ui[e];if(!Y2[e])return e;var t=Y2[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in To)return Ui[e]=t[a];return e}var Oo=d2("animationend"),Uo=d2("animationiteration"),Vo=d2("animationstart"),H8=d2("transitionrun"),T8=d2("transitionstart"),O8=d2("transitioncancel"),$o=d2("transitionend"),No=new Map,Ro="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Rt(e,t){No.set(e,t),r2(t,[e])}var St=[],X2=0,Vi=0;function ln(){for(var e=X2,t=Vi=X2=0;t<e;){var a=St[t];St[t++]=null;var l=St[t];St[t++]=null;var n=St[t];St[t++]=null;var i=St[t];if(St[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&qo(a,n,i)}}function nn(e,t,a,l){St[X2++]=e,St[X2++]=t,St[X2++]=a,St[X2++]=l,Vi|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function $i(e,t,a,l){return nn(e,t,a,l),sn(e)}function U1(e,t){return nn(e,null,null,t),sn(e)}function qo(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;n&&t!==null&&e.tag===3&&(i=e.stateNode,n=31-ht(a),i=i.hiddenUpdates,e=i[n],e===null?i[n]=[t]:e.push(t),t.lane=a|536870912)}function sn(e){if(50<dl)throw dl=0,js=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Q2={},Bo=new WeakMap;function Et(e,t){if(typeof e=="object"&&e!==null){var a=Bo.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Q(t)},Bo.set(e,t),t)}return{value:e,source:t,stack:Q(t)}}var K2=[],J2=0,on=null,rn=0,zt=[],Mt=0,h2=null,u1=1,d1="";function f2(e,t){K2[J2++]=rn,K2[J2++]=on,on=e,rn=t}function Zo(e,t,a){zt[Mt++]=u1,zt[Mt++]=d1,zt[Mt++]=h2,h2=e;var l=u1;e=d1;var n=32-ht(l)-1;l&=~(1<<n),a+=1;var i=32-ht(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,u1=1<<32-ht(t)+n|a<<n|l,d1=i+e}else u1=1<<i|a<<n|l,d1=e}function Ni(e){e.return!==null&&(f2(e,1),Zo(e,1,0))}function Ri(e){for(;e===on;)on=K2[--J2],K2[J2]=null,rn=K2[--J2],K2[J2]=null;for(;e===h2;)h2=zt[--Mt],zt[Mt]=null,d1=zt[--Mt],zt[Mt]=null,u1=zt[--Mt],zt[Mt]=null}var Pe=null,Ge=null,ne=!1,qt=null,Ft=!1,qi=Error(r(519));function y2(e){var t=Error(r(418,""));throw ja(Et(t,e)),qi}function jo(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ke]=e,t[it]=l,a){case"dialog":ee("cancel",t),ee("close",t);break;case"iframe":case"object":case"embed":ee("load",t);break;case"video":case"audio":for(a=0;a<fl.length;a++)ee(fl[a],t);break;case"source":ee("error",t);break;case"img":case"image":case"link":ee("error",t),ee("load",t);break;case"details":ee("toggle",t);break;case"input":ee("invalid",t),lo(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Kl(t);break;case"select":ee("invalid",t);break;case"textarea":ee("invalid",t),io(t,l.value,l.defaultValue,l.children),Kl(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||I7(t.textContent,a)?(l.popover!=null&&(ee("beforetoggle",t),ee("toggle",t)),l.onScroll!=null&&ee("scroll",t),l.onScrollEnd!=null&&ee("scrollend",t),l.onClick!=null&&(t.onclick=qn),t=!0):t=!1,t||y2(e)}function Go(e){for(Pe=e.return;Pe;)switch(Pe.tag){case 3:case 27:Ft=!0;return;case 5:case 13:Ft=!1;return;default:Pe=Pe.return}}function Ba(e){if(e!==Pe)return!1;if(!ne)return Go(e),ne=!0,!1;var t=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||s5(e.type,e.memoizedProps)),a=!a),a&&(t=!0),t&&Ge&&y2(e),Go(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Ge=Zt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Ge=null}}else Ge=Pe?Zt(e.stateNode.nextSibling):null;return!0}function Za(){Ge=Pe=null,ne=!1}function ja(e){qt===null?qt=[e]:qt.push(e)}var Ga=Error(r(460)),Yo=Error(r(474)),Bi={then:function(){}};function Xo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function cn(){}function Qo(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(cn,cn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Ga?Error(r(483)):e;default:if(typeof t.status=="string")t.then(cn,cn);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Ga?Error(r(483)):e}throw Ya=t,Ga}}var Ya=null;function Ko(){if(Ya===null)throw Error(r(459));var e=Ya;return Ya=null,e}var F2=null,Xa=0;function un(e){var t=Xa;return Xa+=1,F2===null&&(F2=[]),Qo(F2,e,t)}function Qa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function dn(e,t){throw t.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Jo(e){var t=e._init;return t(e._payload)}function Fo(e){function t(_,p){if(e){var m=_.deletions;m===null?(_.deletions=[p],_.flags|=16):m.push(p)}}function a(_,p){if(!e)return null;for(;p!==null;)t(_,p),p=p.sibling;return null}function l(_){for(var p=new Map;_!==null;)_.key!==null?p.set(_.key,_):p.set(_.index,_),_=_.sibling;return p}function n(_,p){return _=Q1(_,p),_.index=0,_.sibling=null,_}function i(_,p,m){return _.index=m,e?(m=_.alternate,m!==null?(m=m.index,m<p?(_.flags|=33554434,p):m):(_.flags|=33554434,p)):(_.flags|=1048576,p)}function u(_){return e&&_.alternate===null&&(_.flags|=33554434),_}function h(_,p,m,z){return p===null||p.tag!==6?(p=Us(m,_.mode,z),p.return=_,p):(p=n(p,m),p.return=_,p)}function f(_,p,m,z){var U=m.type;return U===k?E(_,p,m.props.children,z,m.key):p!==null&&(p.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===We&&Jo(U)===p.type)?(p=n(p,m.props),Qa(p,m),p.return=_,p):(p=An(m.type,m.key,m.props,null,_.mode,z),Qa(p,m),p.return=_,p)}function C(_,p,m,z){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Vs(m,_.mode,z),p.return=_,p):(p=n(p,m.children||[]),p.return=_,p)}function E(_,p,m,z,U){return p===null||p.tag!==7?(p=k2(m,_.mode,z,U),p.return=_,p):(p=n(p,m),p.return=_,p)}function M(_,p,m){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=Us(""+p,_.mode,m),p.return=_,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case v:return m=An(p.type,p.key,p.props,null,_.mode,m),Qa(m,p),m.return=_,m;case A:return p=Vs(p,_.mode,m),p.return=_,p;case We:var z=p._init;return p=z(p._payload),M(_,p,m)}if(R(p)||lt(p))return p=k2(p,_.mode,m,null),p.return=_,p;if(typeof p.then=="function")return M(_,un(p),m);if(p.$$typeof===G)return M(_,En(_,p),m);dn(_,p)}return null}function x(_,p,m,z){var U=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return U!==null?null:h(_,p,""+m,z);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case v:return m.key===U?f(_,p,m,z):null;case A:return m.key===U?C(_,p,m,z):null;case We:return U=m._init,m=U(m._payload),x(_,p,m,z)}if(R(m)||lt(m))return U!==null?null:E(_,p,m,z,null);if(typeof m.then=="function")return x(_,p,un(m),z);if(m.$$typeof===G)return x(_,p,En(_,m),z);dn(_,m)}return null}function S(_,p,m,z,U){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return _=_.get(m)||null,h(p,_,""+z,U);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case v:return _=_.get(z.key===null?m:z.key)||null,f(p,_,z,U);case A:return _=_.get(z.key===null?m:z.key)||null,C(p,_,z,U);case We:var I=z._init;return z=I(z._payload),S(_,p,m,z,U)}if(R(z)||lt(z))return _=_.get(m)||null,E(p,_,z,U,null);if(typeof z.then=="function")return S(_,p,m,un(z),U);if(z.$$typeof===G)return S(_,p,m,En(p,z),U);dn(p,z)}return null}function V(_,p,m,z){for(var U=null,I=null,N=p,q=p=0,qe=null;N!==null&&q<m.length;q++){N.index>q?(qe=N,N=null):qe=N.sibling;var ie=x(_,N,m[q],z);if(ie===null){N===null&&(N=qe);break}e&&N&&ie.alternate===null&&t(_,N),p=i(ie,p,q),I===null?U=ie:I.sibling=ie,I=ie,N=qe}if(q===m.length)return a(_,N),ne&&f2(_,q),U;if(N===null){for(;q<m.length;q++)N=M(_,m[q],z),N!==null&&(p=i(N,p,q),I===null?U=N:I.sibling=N,I=N);return ne&&f2(_,q),U}for(N=l(N);q<m.length;q++)qe=S(N,_,q,m[q],z),qe!==null&&(e&&qe.alternate!==null&&N.delete(qe.key===null?q:qe.key),p=i(qe,p,q),I===null?U=qe:I.sibling=qe,I=qe);return e&&N.forEach(function(e2){return t(_,e2)}),ne&&f2(_,q),U}function Y(_,p,m,z){if(m==null)throw Error(r(151));for(var U=null,I=null,N=p,q=p=0,qe=null,ie=m.next();N!==null&&!ie.done;q++,ie=m.next()){N.index>q?(qe=N,N=null):qe=N.sibling;var e2=x(_,N,ie.value,z);if(e2===null){N===null&&(N=qe);break}e&&N&&e2.alternate===null&&t(_,N),p=i(e2,p,q),I===null?U=e2:I.sibling=e2,I=e2,N=qe}if(ie.done)return a(_,N),ne&&f2(_,q),U;if(N===null){for(;!ie.done;q++,ie=m.next())ie=M(_,ie.value,z),ie!==null&&(p=i(ie,p,q),I===null?U=ie:I.sibling=ie,I=ie);return ne&&f2(_,q),U}for(N=l(N);!ie.done;q++,ie=m.next())ie=S(N,_,q,ie.value,z),ie!==null&&(e&&ie.alternate!==null&&N.delete(ie.key===null?q:ie.key),p=i(ie,p,q),I===null?U=ie:I.sibling=ie,I=ie);return e&&N.forEach(function(K4){return t(_,K4)}),ne&&f2(_,q),U}function we(_,p,m,z){if(typeof m=="object"&&m!==null&&m.type===k&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case v:e:{for(var U=m.key;p!==null;){if(p.key===U){if(U=m.type,U===k){if(p.tag===7){a(_,p.sibling),z=n(p,m.props.children),z.return=_,_=z;break e}}else if(p.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===We&&Jo(U)===p.type){a(_,p.sibling),z=n(p,m.props),Qa(z,m),z.return=_,_=z;break e}a(_,p);break}else t(_,p);p=p.sibling}m.type===k?(z=k2(m.props.children,_.mode,z,m.key),z.return=_,_=z):(z=An(m.type,m.key,m.props,null,_.mode,z),Qa(z,m),z.return=_,_=z)}return u(_);case A:e:{for(U=m.key;p!==null;){if(p.key===U)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){a(_,p.sibling),z=n(p,m.children||[]),z.return=_,_=z;break e}else{a(_,p);break}else t(_,p);p=p.sibling}z=Vs(m,_.mode,z),z.return=_,_=z}return u(_);case We:return U=m._init,m=U(m._payload),we(_,p,m,z)}if(R(m))return V(_,p,m,z);if(lt(m)){if(U=lt(m),typeof U!="function")throw Error(r(150));return m=U.call(m),Y(_,p,m,z)}if(typeof m.then=="function")return we(_,p,un(m),z);if(m.$$typeof===G)return we(_,p,En(_,m),z);dn(_,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,p!==null&&p.tag===6?(a(_,p.sibling),z=n(p,m),z.return=_,_=z):(a(_,p),z=Us(m,_.mode,z),z.return=_,_=z),u(_)):a(_,p)}return function(_,p,m,z){try{Xa=0;var U=we(_,p,m,z);return F2=null,U}catch(N){if(N===Ga)throw N;var I=Ht(29,N,null,_.mode);return I.lanes=z,I.return=_,I}finally{}}}var v2=Fo(!0),Wo=Fo(!1),W2=re(null),hn=re(0);function Io(e,t){e=x1,pe(hn,e),pe(W2,t),x1=e|t.baseLanes}function Zi(){pe(hn,x1),pe(W2,W2.current)}function ji(){x1=hn.current,ze(W2),ze(hn)}var At=re(null),Wt=null;function V1(e){var t=e.alternate;pe(Te,Te.current&1),pe(At,e),Wt===null&&(t===null||W2.current!==null||t.memoizedState!==null)&&(Wt=e)}function Po(e){if(e.tag===22){if(pe(Te,Te.current),pe(At,e),Wt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Wt=e)}}else $1()}function $1(){pe(Te,Te.current),pe(At,At.current)}function h1(e){ze(At),Wt===e&&(Wt=null),ze(Te)}var Te=re(0);function fn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var U8=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},V8=o.unstable_scheduleCallback,$8=o.unstable_NormalPriority,Oe={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gi(){return{controller:new U8,data:new Map,refCount:0}}function Ka(e){e.refCount--,e.refCount===0&&V8($8,function(){e.controller.abort()})}var Ja=null,Yi=0,I2=0,P2=null;function N8(e,t){if(Ja===null){var a=Ja=[];Yi=0,I2=Ws(),P2={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Yi++,t.then(er,er),t}function er(){if(--Yi===0&&Ja!==null){P2!==null&&(P2.status="fulfilled");var e=Ja;Ja=null,I2=0,P2=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function R8(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var tr=B.S;B.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&N8(e,t),tr!==null&&tr(e,t)};var g2=re(null);function Xi(){var e=g2.current;return e!==null?e:ve.pooledCache}function yn(e,t){t===null?pe(g2,g2.current):pe(g2,t.pool)}function ar(){var e=Xi();return e===null?null:{parent:Oe._currentValue,pool:e}}var N1=0,W=null,ce=null,Me=null,vn=!1,ea=!1,p2=!1,gn=0,Fa=0,ta=null,q8=0;function Se(){throw Error(r(321))}function Qi(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ft(e[a],t[a]))return!1;return!0}function Ki(e,t,a,l,n,i){return N1=i,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?b2:R1,p2=!1,i=a(l,n),p2=!1,ea&&(i=nr(t,a,l,n)),lr(e),i}function lr(e){B.H=It;var t=ce!==null&&ce.next!==null;if(N1=0,Me=ce=W=null,vn=!1,Fa=0,ta=null,t)throw Error(r(300));e===null||Ne||(e=e.dependencies,e!==null&&Sn(e)&&(Ne=!0))}function nr(e,t,a,l){W=e;var n=0;do{if(ea&&(ta=null),Fa=0,ea=!1,25<=n)throw Error(r(301));if(n+=1,Me=ce=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}B.H=C2,i=t(a,l)}while(ea);return i}function B8(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?Wa(t):t,e=e.useState()[0],(ce!==null?ce.memoizedState:null)!==e&&(W.flags|=1024),t}function Ji(){var e=gn!==0;return gn=0,e}function Fi(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Wi(e){if(vn){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vn=!1}N1=0,Me=ce=W=null,ea=!1,Fa=gn=0,ta=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?W.memoizedState=Me=e:Me=Me.next=e,Me}function Ae(){if(ce===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=Me===null?W.memoizedState:Me.next;if(t!==null)Me=t,ce=e;else{if(e===null)throw W.alternate===null?Error(r(467)):Error(r(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},Me===null?W.memoizedState=Me=e:Me=Me.next=e}return Me}var pn;pn=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Wa(e){var t=Fa;return Fa+=1,ta===null&&(ta=[]),e=Qo(ta,e,t),t=W,(Me===null?t.memoizedState:Me.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?b2:R1),e}function bn(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wa(e);if(e.$$typeof===G)return Je(e)}throw Error(r(438,String(e)))}function Ii(e){var t=null,a=W.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=W.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=pn(),W.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=M1;return t.index++,a}function f1(e,t){return typeof t=="function"?t(e):t}function Cn(e){var t=Ae();return Pi(t,ce,e)}function Pi(e,t,a){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var h=u=null,f=null,C=t,E=!1;do{var M=C.lane&-536870913;if(M!==C.lane?(ae&M)===M:(N1&M)===M){var x=C.revertLane;if(x===0)f!==null&&(f=f.next={lane:0,revertLane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),M===I2&&(E=!0);else if((N1&x)===x){C=C.next,x===I2&&(E=!0);continue}else M={lane:0,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},f===null?(h=f=M,u=i):f=f.next=M,W.lanes|=x,K1|=x;M=C.action,p2&&a(i,M),i=C.hasEagerState?C.eagerState:a(i,M)}else x={lane:M,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},f===null?(h=f=x,u=i):f=f.next=x,W.lanes|=M,K1|=M;C=C.next}while(C!==null&&C!==t);if(f===null?u=i:f.next=h,!ft(i,e.memoizedState)&&(Ne=!0,E&&(a=P2,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=f,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function es(e){var t=Ae(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);ft(i,t.memoizedState)||(Ne=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function ir(e,t,a){var l=W,n=Ae(),i=ne;if(i){if(a===void 0)throw Error(r(407));a=a()}else a=t();var u=!ft((ce||n).memoizedState,a);if(u&&(n.memoizedState=a,Ne=!0),n=n.queue,ls(rr.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||Me!==null&&Me.memoizedState.tag&1){if(l.flags|=2048,aa(9,or.bind(null,l,n,a,t),{destroy:void 0},null),ve===null)throw Error(r(349));i||(N1&60)!==0||sr(l,t,a)}return a}function sr(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=W.updateQueue,t===null?(t=pn(),W.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function or(e,t,a,l){t.value=a,t.getSnapshot=l,cr(t)&&ur(e)}function rr(e,t,a){return a(function(){cr(t)&&ur(e)})}function cr(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ft(e,a)}catch{return!0}}function ur(e){var t=U1(e,2);t!==null&&et(t,e,2)}function ts(e){var t=ot();if(typeof e=="function"){var a=e;if(e=a(),p2){H1(!0);try{a()}finally{H1(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:f1,lastRenderedState:e},t}function dr(e,t,a,l){return e.baseState=a,Pi(e,ce,typeof l=="function"?l:f1)}function Z8(e,t,a,l,n){if(xn(e))throw Error(r(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};B.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,hr(t,i)):(i.next=a.next,t.pending=a.next=i)}}function hr(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=B.T,u={};B.T=u;try{var h=a(n,l),f=B.S;f!==null&&f(u,h),fr(e,t,h)}catch(C){as(e,t,C)}finally{B.T=i}}else try{i=a(n,l),fr(e,t,i)}catch(C){as(e,t,C)}}function fr(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){yr(e,t,l)},function(l){return as(e,t,l)}):yr(e,t,a)}function yr(e,t,a){t.status="fulfilled",t.value=a,vr(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,hr(e,a)))}function as(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,vr(t),t=t.next;while(t!==l)}e.action=null}function vr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function gr(e,t){return t}function pr(e,t){if(ne){var a=ve.formState;if(a!==null){e:{var l=W;if(ne){if(Ge){t:{for(var n=Ge,i=Ft;n.nodeType!==8;){if(!i){n=null;break t}if(n=Zt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ge=Zt(n.nextSibling),l=n.data==="F!";break e}}y2(l)}l=!1}l&&(t=a[0])}}return a=ot(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:t},a.queue=l,a=Ur.bind(null,W,l),l.dispatch=a,l=ts(!1),i=rs.bind(null,W,!1,l.queue),l=ot(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Z8.bind(null,W,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function br(e){var t=Ae();return Cr(t,ce,e)}function Cr(e,t,a){t=Pi(e,t,gr)[0],e=Cn(f1)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?Wa(t):t;var l=Ae(),n=l.queue,i=n.dispatch;return a!==l.memoizedState&&(W.flags|=2048,aa(9,j8.bind(null,n,a),{destroy:void 0},null)),[t,i,e]}function j8(e,t){e.action=t}function _r(e){var t=Ae(),a=ce;if(a!==null)return Cr(t,a,e);Ae(),t=t.memoizedState,a=Ae();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function aa(e,t,a,l){return e={tag:e,create:t,inst:a,deps:l,next:null},t=W.updateQueue,t===null&&(t=pn(),W.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function mr(){return Ae().memoizedState}function _n(e,t,a,l){var n=ot();W.flags|=e,n.memoizedState=aa(1|t,a,{destroy:void 0},l===void 0?null:l)}function mn(e,t,a,l){var n=Ae();l=l===void 0?null:l;var i=n.memoizedState.inst;ce!==null&&l!==null&&Qi(l,ce.memoizedState.deps)?n.memoizedState=aa(t,a,i,l):(W.flags|=e,n.memoizedState=aa(1|t,a,i,l))}function xr(e,t){_n(8390656,8,e,t)}function ls(e,t){mn(2048,8,e,t)}function wr(e,t){return mn(4,2,e,t)}function kr(e,t){return mn(4,4,e,t)}function Sr(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Er(e,t,a){a=a!=null?a.concat([e]):null,mn(4,4,Sr.bind(null,t,e),a)}function ns(){}function zr(e,t){var a=Ae();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Qi(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Mr(e,t){var a=Ae();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Qi(t,l[1]))return l[0];if(l=e(),p2){H1(!0);try{e()}finally{H1(!1)}}return a.memoizedState=[l,t],l}function is(e,t,a){return a===void 0||(N1&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=D7(),W.lanes|=e,K1|=e,a)}function Ar(e,t,a,l){return ft(a,t)?a:W2.current!==null?(e=is(e,a,l),ft(e,t)||(Ne=!0),e):(N1&42)===0?(Ne=!0,e.memoizedState=a):(e=D7(),W.lanes|=e,K1|=e,t)}function Dr(e,t,a,l,n){var i=T.p;T.p=i!==0&&8>i?i:8;var u=B.T,h={};B.T=h,rs(e,!1,t,a);try{var f=n(),C=B.S;if(C!==null&&C(h,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var E=R8(f,l);Ia(e,t,E,pt(e))}else Ia(e,t,l,pt(e))}catch(M){Ia(e,t,{then:function(){},status:"rejected",reason:M},pt())}finally{T.p=i,B.T=u}}function G8(){}function ss(e,t,a,l){if(e.tag!==5)throw Error(r(476));var n=Lr(e).queue;Dr(e,n,t,te,a===null?G8:function(){return Hr(e),a(l)})}function Lr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:f1,lastRenderedState:te},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:f1,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Hr(e){var t=Lr(e).next.queue;Ia(e,t,{},pt())}function os(){return Je(bl)}function Tr(){return Ae().memoizedState}function Or(){return Ae().memoizedState}function Y8(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=pt();e=Z1(a);var l=j1(t,e,a);l!==null&&(et(l,t,a),tl(l,t,a)),t={cache:Gi()},e.payload=t;return}t=t.return}}function X8(e,t,a){var l=pt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},xn(e)?Vr(t,a):(a=$i(e,t,a,l),a!==null&&(et(a,e,l),$r(a,t,l)))}function Ur(e,t,a){var l=pt();Ia(e,t,a,l)}function Ia(e,t,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(xn(e))Vr(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,h=i(u,a);if(n.hasEagerState=!0,n.eagerState=h,ft(h,u))return nn(e,t,n,0),ve===null&&ln(),!1}catch{}finally{}if(a=$i(e,t,n,l),a!==null)return et(a,e,l),$r(a,t,l),!0}return!1}function rs(e,t,a,l){if(l={lane:2,revertLane:Ws(),action:l,hasEagerState:!1,eagerState:null,next:null},xn(e)){if(t)throw Error(r(479))}else t=$i(e,a,l,2),t!==null&&et(t,e,2)}function xn(e){var t=e.alternate;return e===W||t!==null&&t===W}function Vr(e,t){ea=vn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function $r(e,t,a){if((a&4194176)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Q5(e,a)}}var It={readContext:Je,use:bn,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useLayoutEffect:Se,useInsertionEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useSyncExternalStore:Se,useId:Se};It.useCacheRefresh=Se,It.useMemoCache=Se,It.useHostTransitionStatus=Se,It.useFormState=Se,It.useActionState=Se,It.useOptimistic=Se;var b2={readContext:Je,use:bn,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:xr,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,_n(4194308,4,Sr.bind(null,t,e),a)},useLayoutEffect:function(e,t){return _n(4194308,4,e,t)},useInsertionEffect:function(e,t){_n(4,2,e,t)},useMemo:function(e,t){var a=ot();t=t===void 0?null:t;var l=e();if(p2){H1(!0);try{e()}finally{H1(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=ot();if(a!==void 0){var n=a(t);if(p2){H1(!0);try{a(t)}finally{H1(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=X8.bind(null,W,e),[l.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=ts(e);var t=e.queue,a=Ur.bind(null,W,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ns,useDeferredValue:function(e,t){var a=ot();return is(a,e,t)},useTransition:function(){var e=ts(!1);return e=Dr.bind(null,W,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=W,n=ot();if(ne){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),ve===null)throw Error(r(349));(ae&60)!==0||sr(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,xr(rr.bind(null,l,i,e),[e]),l.flags|=2048,aa(9,or.bind(null,l,i,a,t),{destroy:void 0},null),a},useId:function(){var e=ot(),t=ve.identifierPrefix;if(ne){var a=d1,l=u1;a=(l&~(1<<32-ht(l)-1)).toString(32)+a,t=":"+t+"R"+a,a=gn++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=q8++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return ot().memoizedState=Y8.bind(null,W)}};b2.useMemoCache=Ii,b2.useHostTransitionStatus=os,b2.useFormState=pr,b2.useActionState=pr,b2.useOptimistic=function(e){var t=ot();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=rs.bind(null,W,!0,a),a.dispatch=t,[e,t]};var R1={readContext:Je,use:bn,useCallback:zr,useContext:Je,useEffect:ls,useImperativeHandle:Er,useInsertionEffect:wr,useLayoutEffect:kr,useMemo:Mr,useReducer:Cn,useRef:mr,useState:function(){return Cn(f1)},useDebugValue:ns,useDeferredValue:function(e,t){var a=Ae();return Ar(a,ce.memoizedState,e,t)},useTransition:function(){var e=Cn(f1)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:Wa(e),t]},useSyncExternalStore:ir,useId:Tr};R1.useCacheRefresh=Or,R1.useMemoCache=Ii,R1.useHostTransitionStatus=os,R1.useFormState=br,R1.useActionState=br,R1.useOptimistic=function(e,t){var a=Ae();return dr(a,ce,e,t)};var C2={readContext:Je,use:bn,useCallback:zr,useContext:Je,useEffect:ls,useImperativeHandle:Er,useInsertionEffect:wr,useLayoutEffect:kr,useMemo:Mr,useReducer:es,useRef:mr,useState:function(){return es(f1)},useDebugValue:ns,useDeferredValue:function(e,t){var a=Ae();return ce===null?is(a,e,t):Ar(a,ce.memoizedState,e,t)},useTransition:function(){var e=es(f1)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:Wa(e),t]},useSyncExternalStore:ir,useId:Tr};C2.useCacheRefresh=Or,C2.useMemoCache=Ii,C2.useHostTransitionStatus=os,C2.useFormState=_r,C2.useActionState=_r,C2.useOptimistic=function(e,t){var a=Ae();return ce!==null?dr(a,ce,e,t):(a.baseState=e,[e,a.queue.dispatch])};function cs(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:oe({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var us={isMounted:function(e){return(e=e._reactInternals)?j(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var l=pt(),n=Z1(l);n.payload=t,a!=null&&(n.callback=a),t=j1(e,n,l),t!==null&&(et(t,e,l),tl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=pt(),n=Z1(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=j1(e,n,l),t!==null&&(et(t,e,l),tl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=pt(),l=Z1(a);l.tag=2,t!=null&&(l.callback=t),t=j1(e,l,a),t!==null&&(et(t,e,a),tl(t,e,a))}};function Nr(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!Ra(a,l)||!Ra(n,i):!0}function Rr(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&us.enqueueReplaceState(t,t.state,null)}function _2(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=oe({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var wn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function qr(e){wn(e)}function Br(e){console.error(e)}function Zr(e){wn(e)}function kn(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function jr(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function ds(e,t,a){return a=Z1(a),a.tag=3,a.payload={element:null},a.callback=function(){kn(e,t)},a}function Gr(e){return e=Z1(e),e.tag=3,e}function Yr(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){jr(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){jr(t,a,l),typeof n!="function"&&(J1===null?J1=new Set([this]):J1.add(this));var h=l.stack;this.componentDidCatch(l.value,{componentStack:h!==null?h:""})})}function Q8(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&el(t,a,n,!0),a=At.current,a!==null){switch(a.tag){case 13:return Wt===null?Xs():a.alternate===null&&xe===0&&(xe=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Bi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Ks(e,l,n)),!1;case 22:return a.flags|=65536,l===Bi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Ks(e,l,n)),!1}throw Error(r(435,a.tag))}return Ks(e,l,n),Xs(),!1}if(ne)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==qi&&(e=Error(r(422),{cause:l}),ja(Et(e,a)))):(l!==qi&&(t=Error(r(423),{cause:l}),ja(Et(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Et(l,a),n=ds(e.stateNode,l,n),Es(e,n),xe!==4&&(xe=2)),!1;var i=Error(r(520),{cause:l});if(i=Et(i,a),cl===null?cl=[i]:cl.push(i),xe!==4&&(xe=2),t===null)return!0;l=Et(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=ds(a.stateNode,l,e),Es(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(J1===null||!J1.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Gr(n),Yr(n,e,a,l),Es(a,n),!1}a=a.return}while(a!==null);return!1}var Xr=Error(r(461)),Ne=!1;function Ye(e,t,a,l){t.child=e===null?Wo(t,null,a,l):v2(t,e.child,a,l)}function Qr(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var h in l)h!=="ref"&&(u[h]=l[h])}else u=l;return x2(t),l=Ki(e,t,a,u,i,n),h=Ji(),e!==null&&!Ne?(Fi(e,t,n),y1(e,t,n)):(ne&&h&&Ni(t),t.flags|=1,Ye(e,t,l,n),t.child)}function Kr(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Os(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Jr(e,t,i,l,n)):(e=An(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!_s(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Ra,a(u,l)&&e.ref===t.ref)return y1(e,t,n)}return t.flags|=1,e=Q1(i,l),e.ref=t.ref,e.return=t,t.child=e}function Jr(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Ra(i,l)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=l=i,_s(e,n))(e.flags&131072)!==0&&(Ne=!0);else return t.lanes=e.lanes,y1(e,t,n)}return hs(e,t,a,l,n)}function Fr(e,t,a){var l=t.pendingProps,n=l.children,i=(t.stateNode._pendingVisibility&2)!==0,u=e!==null?e.memoizedState:null;if(Pa(e,t),l.mode==="hidden"||i){if((t.flags&128)!==0){if(l=u!==null?u.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;t.childLanes=i&~l}else t.childLanes=0,t.child=null;return Wr(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&yn(t,u!==null?u.cachePool:null),u!==null?Io(t,u):Zi(),Po(t);else return t.lanes=t.childLanes=536870912,Wr(e,t,u!==null?u.baseLanes|a:a,a)}else u!==null?(yn(t,u.cachePool),Io(t,u),$1(),t.memoizedState=null):(e!==null&&yn(t,null),Zi(),$1());return Ye(e,t,n,a),t.child}function Wr(e,t,a,l){var n=Xi();return n=n===null?null:{parent:Oe._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&yn(t,null),Zi(),Po(t),e!==null&&el(e,t,l,!0),null}function Pa(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(t.flags|=2097664)}}function hs(e,t,a,l,n){return x2(t),a=Ki(e,t,a,l,void 0,n),l=Ji(),e!==null&&!Ne?(Fi(e,t,n),y1(e,t,n)):(ne&&l&&Ni(t),t.flags|=1,Ye(e,t,a,n),t.child)}function Ir(e,t,a,l,n,i){return x2(t),t.updateQueue=null,a=nr(t,l,a,n),lr(e),l=Ji(),e!==null&&!Ne?(Fi(e,t,i),y1(e,t,i)):(ne&&l&&Ni(t),t.flags|=1,Ye(e,t,a,i),t.child)}function Pr(e,t,a,l,n){if(x2(t),t.stateNode===null){var i=Q2,u=a.contextType;typeof u=="object"&&u!==null&&(i=Je(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=us,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},ks(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Je(u):Q2,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(cs(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&us.enqueueReplaceState(i,i.state,null),ll(t,l,i,n),al(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var h=t.memoizedProps,f=_2(a,h);i.props=f;var C=i.context,E=a.contextType;u=Q2,typeof E=="object"&&E!==null&&(u=Je(E));var M=a.getDerivedStateFromProps;E=typeof M=="function"||typeof i.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,E||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(h||C!==u)&&Rr(t,i,l,u),B1=!1;var x=t.memoizedState;i.state=x,ll(t,l,i,n),al(),C=t.memoizedState,h||x!==C||B1?(typeof M=="function"&&(cs(t,a,M,l),C=t.memoizedState),(f=B1||Nr(t,a,f,l,x,C,u))?(E||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=C),i.props=l,i.state=C,i.context=u,l=f):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Ss(e,t),u=t.memoizedProps,E=_2(a,u),i.props=E,M=t.pendingProps,x=i.context,C=a.contextType,f=Q2,typeof C=="object"&&C!==null&&(f=Je(C)),h=a.getDerivedStateFromProps,(C=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==M||x!==f)&&Rr(t,i,l,f),B1=!1,x=t.memoizedState,i.state=x,ll(t,l,i,n),al();var S=t.memoizedState;u!==M||x!==S||B1||e!==null&&e.dependencies!==null&&Sn(e.dependencies)?(typeof h=="function"&&(cs(t,a,h,l),S=t.memoizedState),(E=B1||Nr(t,a,E,l,x,S,f)||e!==null&&e.dependencies!==null&&Sn(e.dependencies))?(C||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,S,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,S,f)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=S),i.props=l,i.state=S,i.context=f,l=E):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Pa(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=v2(t,e.child,null,n),t.child=v2(t,null,a,n)):Ye(e,t,a,n),t.memoizedState=i.state,e=t.child):e=y1(e,t,n),e}function e7(e,t,a,l){return Za(),t.flags|=256,Ye(e,t,a,l),t.child}var fs={dehydrated:null,treeContext:null,retryLane:0};function ys(e){return{baseLanes:e,cachePool:ar()}}function vs(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Tt),e}function t7(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Te.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(ne){if(n?V1(t):$1(),ne){var h=Ge,f;if(f=h){e:{for(f=h,h=Ft;f.nodeType!==8;){if(!h){h=null;break e}if(f=Zt(f.nextSibling),f===null){h=null;break e}}h=f}h!==null?(t.memoizedState={dehydrated:h,treeContext:h2!==null?{id:u1,overflow:d1}:null,retryLane:536870912},f=Ht(18,null,null,0),f.stateNode=h,f.return=t,t.child=f,Pe=t,Ge=null,f=!0):f=!1}f||y2(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return h.data==="$!"?t.lanes=16:t.lanes=536870912,null;h1(t)}return h=l.children,l=l.fallback,n?($1(),n=t.mode,h=ps({mode:"hidden",children:h},n),l=k2(l,n,a,null),h.return=t,l.return=t,h.sibling=l,t.child=h,n=t.child,n.memoizedState=ys(a),n.childLanes=vs(e,u,a),t.memoizedState=fs,l):(V1(t),gs(t,h))}if(f=e.memoizedState,f!==null&&(h=f.dehydrated,h!==null)){if(i)t.flags&256?(V1(t),t.flags&=-257,t=bs(e,t,a)):t.memoizedState!==null?($1(),t.child=e.child,t.flags|=128,t=null):($1(),n=l.fallback,h=t.mode,l=ps({mode:"visible",children:l.children},h),n=k2(n,h,a,null),n.flags|=2,l.return=t,n.return=t,l.sibling=n,t.child=l,v2(t,e.child,null,a),l=t.child,l.memoizedState=ys(a),l.childLanes=vs(e,u,a),t.memoizedState=fs,t=n);else if(V1(t),h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var C=u.dgst;u=C,l=Error(r(419)),l.stack="",l.digest=u,ja({value:l,source:null,stack:null}),t=bs(e,t,a)}else if(Ne||el(e,t,a,!1),u=(a&e.childLanes)!==0,Ne||u){if(u=ve,u!==null){if(l=a&-a,(l&42)!==0)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=(l&(u.suspendedLanes|a))!==0?0:l,l!==0&&l!==f.retryLane)throw f.retryLane=l,U1(e,l),et(u,e,l),Xr}h.data==="$?"||Xs(),t=bs(e,t,a)}else h.data==="$?"?(t.flags|=128,t.child=e.child,t=r4.bind(null,e),h._reactRetry=t,t=null):(e=f.treeContext,Ge=Zt(h.nextSibling),Pe=t,ne=!0,qt=null,Ft=!1,e!==null&&(zt[Mt++]=u1,zt[Mt++]=d1,zt[Mt++]=h2,u1=e.id,d1=e.overflow,h2=t),t=gs(t,l.children),t.flags|=4096);return t}return n?($1(),n=l.fallback,h=t.mode,f=e.child,C=f.sibling,l=Q1(f,{mode:"hidden",children:l.children}),l.subtreeFlags=f.subtreeFlags&31457280,C!==null?n=Q1(C,n):(n=k2(n,h,a,null),n.flags|=2),n.return=t,l.return=t,l.sibling=n,t.child=l,l=n,n=t.child,h=e.child.memoizedState,h===null?h=ys(a):(f=h.cachePool,f!==null?(C=Oe._currentValue,f=f.parent!==C?{parent:C,pool:C}:f):f=ar(),h={baseLanes:h.baseLanes|a,cachePool:f}),n.memoizedState=h,n.childLanes=vs(e,u,a),t.memoizedState=fs,l):(V1(t),a=e.child,e=a.sibling,a=Q1(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function gs(e,t){return t=ps({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ps(e,t){return z7(e,t,0,null)}function bs(e,t,a){return v2(t,e.child,null,a),e=gs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function a7(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),xs(e.return,t,a)}function Cs(e,t,a,l,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=n)}function l7(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;if(Ye(e,t,l.children,a),l=Te.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&a7(e,a,t);else if(e.tag===19)a7(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(pe(Te,l),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&fn(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Cs(t,!1,n,a,i);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&fn(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Cs(t,!0,a,null,i);break;case"together":Cs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function y1(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),K1|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(el(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,a=Q1(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Q1(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function _s(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Sn(e)))}function K8(e,t,a){switch(t.tag){case 3:ql(t,t.stateNode.containerInfo),q1(t,Oe,e.memoizedState.cache),Za();break;case 27:case 5:ui(t);break;case 4:ql(t,t.stateNode.containerInfo);break;case 10:q1(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(V1(t),t.flags|=128,null):(a&t.child.childLanes)!==0?t7(e,t,a):(V1(t),e=y1(e,t,a),e!==null?e.sibling:null);V1(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(el(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return l7(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),pe(Te,Te.current),l)break;return null;case 22:case 23:return t.lanes=0,Fr(e,t,a);case 24:q1(t,Oe,e.memoizedState.cache)}return y1(e,t,a)}function n7(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ne=!0;else{if(!_s(e,a)&&(t.flags&128)===0)return Ne=!1,K8(e,t,a);Ne=(e.flags&131072)!==0}else Ne=!1,ne&&(t.flags&1048576)!==0&&Zo(t,rn,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,n=l._init;if(l=n(l._payload),t.type=l,typeof l=="function")Os(l)?(e=_2(l,e),t.tag=1,t=Pr(null,t,l,e,a)):(t.tag=0,t=hs(null,t,l,e,a));else{if(l!=null){if(n=l.$$typeof,n===le){t.tag=11,t=Qr(null,t,l,e,a);break e}else if(n===i1){t.tag=14,t=Kr(null,t,l,e,a);break e}}throw t=D1(l)||l,Error(r(306,t,""))}}return t;case 0:return hs(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=_2(l,t.pendingProps),Pr(e,t,l,n,a);case 3:e:{if(ql(t,t.stateNode.containerInfo),e===null)throw Error(r(387));var i=t.pendingProps;n=t.memoizedState,l=n.element,Ss(e,t),ll(t,i,null,a);var u=t.memoizedState;if(i=u.cache,q1(t,Oe,i),i!==n.cache&&ws(t,[Oe],a,!0),al(),i=u.element,n.isDehydrated)if(n={element:i,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=e7(e,t,i,a);break e}else if(i!==l){l=Et(Error(r(424)),t),ja(l),t=e7(e,t,i,a);break e}else for(Ge=Zt(t.stateNode.containerInfo.firstChild),Pe=t,ne=!0,qt=null,Ft=!0,a=Wo(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Za(),i===l){t=y1(e,t,a);break e}Ye(e,t,i,a)}t=t.child}return t;case 26:return Pa(e,t),e===null?(a=o3(t.type,null,t.pendingProps,null))?t.memoizedState=a:ne||(a=t.type,e=t.pendingProps,l=Bn(L1.current).createElement(a),l[Ke]=t,l[it]=e,Xe(l,a,e),$e(l),t.stateNode=l):t.memoizedState=o3(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ui(t),e===null&&ne&&(l=t.stateNode=n3(t.type,t.pendingProps,L1.current),Pe=t,Ft=!0,Ge=Zt(l.firstChild)),l=t.pendingProps.children,e!==null||ne?Ye(e,t,l,a):t.child=v2(t,null,l,a),Pa(e,t),t.child;case 5:return e===null&&ne&&((n=l=Ge)&&(l=k4(l,t.type,t.pendingProps,Ft),l!==null?(t.stateNode=l,Pe=t,Ge=Zt(l.firstChild),Ft=!1,n=!0):n=!1),n||y2(t)),ui(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,s5(n,i)?l=null:u!==null&&s5(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Ki(e,t,B8,null,null,a),bl._currentValue=n),Pa(e,t),Ye(e,t,l,a),t.child;case 6:return e===null&&ne&&((e=a=Ge)&&(a=S4(a,t.pendingProps,Ft),a!==null?(t.stateNode=a,Pe=t,Ge=null,e=!0):e=!1),e||y2(t)),null;case 13:return t7(e,t,a);case 4:return ql(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=v2(t,null,l,a):Ye(e,t,l,a),t.child;case 11:return Qr(e,t,t.type,t.pendingProps,a);case 7:return Ye(e,t,t.pendingProps,a),t.child;case 8:return Ye(e,t,t.pendingProps.children,a),t.child;case 12:return Ye(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,q1(t,t.type,l.value),Ye(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,x2(t),n=Je(n),l=l(n),t.flags|=1,Ye(e,t,l,a),t.child;case 14:return Kr(e,t,t.type,t.pendingProps,a);case 15:return Jr(e,t,t.type,t.pendingProps,a);case 19:return l7(e,t,a);case 22:return Fr(e,t,a);case 24:return x2(t),l=Je(Oe),e===null?(n=Xi(),n===null&&(n=ve,i=Gi(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},ks(t),q1(t,Oe,n)):((e.lanes&a)!==0&&(Ss(e,t),ll(t,null,null,a),al()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),q1(t,Oe,l)):(l=i.cache,q1(t,Oe,l),l!==n.cache&&ws(t,[Oe],a,!0))),Ye(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}var ms=re(null),m2=null,v1=null;function q1(e,t,a){pe(ms,t._currentValue),t._currentValue=a}function g1(e){e._currentValue=ms.current,ze(ms)}function xs(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function ws(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var h=i;i=n;for(var f=0;f<t.length;f++)if(h.context===t[f]){i.lanes|=a,h=i.alternate,h!==null&&(h.lanes|=a),xs(i.return,a,e),l||(u=null);break e}i=h.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(r(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),xs(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function el(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(r(387));if(u=u.memoizedProps,u!==null){var h=n.type;ft(n.pendingProps.value,u.value)||(e!==null?e.push(h):e=[h])}}else if(n===Rl.current){if(u=n.alternate,u===null)throw Error(r(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(bl):e=[bl])}n=n.return}e!==null&&ws(t,e,a,l),t.flags|=262144}function Sn(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function x2(e){m2=e,v1=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Je(e){return i7(m2,e)}function En(e,t){return m2===null&&x2(e),i7(e,t)}function i7(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},v1===null){if(e===null)throw Error(r(308));v1=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else v1=v1.next=t;return a}var B1=!1;function ks(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ss(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Z1(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function j1(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ce&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=sn(e),qo(e,null,a),t}return nn(e,l,t,a),sn(e)}function tl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194176)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Q5(e,a)}}function Es(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var zs=!1;function al(){if(zs){var e=P2;if(e!==null)throw e}}function ll(e,t,a,l){zs=!1;var n=e.updateQueue;B1=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,h=n.shared.pending;if(h!==null){n.shared.pending=null;var f=h,C=f.next;f.next=null,u===null?i=C:u.next=C,u=f;var E=e.alternate;E!==null&&(E=E.updateQueue,h=E.lastBaseUpdate,h!==u&&(h===null?E.firstBaseUpdate=C:h.next=C,E.lastBaseUpdate=f))}if(i!==null){var M=n.baseState;u=0,E=C=f=null,h=i;do{var x=h.lane&-536870913,S=x!==h.lane;if(S?(ae&x)===x:(l&x)===x){x!==0&&x===I2&&(zs=!0),E!==null&&(E=E.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var V=e,Y=h;x=t;var we=a;switch(Y.tag){case 1:if(V=Y.payload,typeof V=="function"){M=V.call(we,M,x);break e}M=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=Y.payload,x=typeof V=="function"?V.call(we,M,x):V,x==null)break e;M=oe({},M,x);break e;case 2:B1=!0}}x=h.callback,x!==null&&(e.flags|=64,S&&(e.flags|=8192),S=n.callbacks,S===null?n.callbacks=[x]:S.push(x))}else S={lane:x,tag:h.tag,payload:h.payload,callback:h.callback,next:null},E===null?(C=E=S,f=M):E=E.next=S,u|=x;if(h=h.next,h===null){if(h=n.shared.pending,h===null)break;S=h,h=S.next,S.next=null,n.lastBaseUpdate=S,n.shared.pending=null}}while(!0);E===null&&(f=M),n.baseState=f,n.firstBaseUpdate=C,n.lastBaseUpdate=E,i===null&&(n.shared.lanes=0),K1|=u,e.lanes=u,e.memoizedState=M}}function s7(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function o7(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)s7(a[e],t)}function nl(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(h){he(t,t.return,h)}}function G1(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,h=u.destroy;if(h!==void 0){u.destroy=void 0,n=t;var f=a;try{h()}catch(C){he(n,f,C)}}}l=l.next}while(l!==i)}}catch(C){he(t,t.return,C)}}function r7(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{o7(t,a)}catch(l){he(e,e.return,l)}}}function c7(e,t,a){a.props=_2(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){he(e,t,l)}}function w2(e,t){try{var a=e.ref;if(a!==null){var l=e.stateNode;switch(e.tag){case 26:case 27:case 5:var n=l;break;default:n=l}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){he(e,t,i)}}function yt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){he(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){he(e,t,n)}else a.current=null}function u7(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){he(e,e.return,n)}}function d7(e,t,a){try{var l=e.stateNode;C4(l,e.type,a,t),l[it]=t}catch(n){he(e,e.return,n)}}function h7(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Ms(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||h7(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function As(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=qn));else if(l!==4&&l!==27&&(e=e.child,e!==null))for(As(e,t,a),e=e.sibling;e!==null;)As(e,t,a),e=e.sibling}function zn(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&l!==27&&(e=e.child,e!==null))for(zn(e,t,a),e=e.sibling;e!==null;)zn(e,t,a),e=e.sibling}var p1=!1,me=!1,Ds=!1,f7=typeof WeakSet=="function"?WeakSet:Set,Re=null,y7=!1;function J8(e,t){if(e=e.containerInfo,n5=Qn,e=Lo(e),Hi(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,h=-1,f=-1,C=0,E=0,M=e,x=null;t:for(;;){for(var S;M!==a||n!==0&&M.nodeType!==3||(h=u+n),M!==i||l!==0&&M.nodeType!==3||(f=u+l),M.nodeType===3&&(u+=M.nodeValue.length),(S=M.firstChild)!==null;)x=M,M=S;for(;;){if(M===e)break t;if(x===a&&++C===n&&(h=u),x===i&&++E===l&&(f=u),(S=M.nextSibling)!==null)break;M=x,x=M.parentNode}M=S}a=h===-1||f===-1?null:{start:h,end:f}}else a=null}a=a||{start:0,end:0}}else a=null;for(i5={focusedElem:e,selectionRange:a},Qn=!1,Re=t;Re!==null;)if(t=Re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Re=e;else for(;Re!==null;){switch(t=Re,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var V=_2(a.type,n,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(V,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(Y){he(a,a.return,Y)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)c5(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":c5(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,Re=e;break}Re=t.return}return V=y7,y7=!1,V}function v7(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:C1(e,a),l&4&&nl(5,a);break;case 1:if(C1(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(h){he(a,a.return,h)}else{var n=_2(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){he(a,a.return,h)}}l&64&&r7(a),l&512&&w2(a,a.return);break;case 3:if(C1(e,a),l&64&&(l=a.updateQueue,l!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{o7(l,e)}catch(h){he(a,a.return,h)}}break;case 26:C1(e,a),l&512&&w2(a,a.return);break;case 27:case 5:C1(e,a),t===null&&l&4&&u7(a),l&512&&w2(a,a.return);break;case 12:C1(e,a);break;case 13:C1(e,a),l&4&&b7(e,a);break;case 22:if(n=a.memoizedState!==null||p1,!n){t=t!==null&&t.memoizedState!==null||me;var i=p1,u=me;p1=n,(me=t)&&!u?Y1(e,a,(a.subtreeFlags&8772)!==0):C1(e,a),p1=i,me=u}l&512&&(a.memoizedProps.mode==="manual"?w2(a,a.return):yt(a,a.return));break;default:C1(e,a)}}function g7(e){var t=e.alternate;t!==null&&(e.alternate=null,g7(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&gi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,vt=!1;function b1(e,t,a){for(a=a.child;a!==null;)p7(e,t,a),a=a.sibling}function p7(e,t,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(za,a)}catch{}switch(a.tag){case 26:me||yt(a,t),b1(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:me||yt(a,t);var l=De,n=vt;for(De=a.stateNode,b1(e,t,a),a=a.stateNode,t=a.attributes;t.length;)a.removeAttributeNode(t[0]);gi(a),De=l,vt=n;break;case 5:me||yt(a,t);case 6:n=De;var i=vt;if(De=null,b1(e,t,a),De=n,vt=i,De!==null)if(vt)try{e=De,l=a.stateNode,e.nodeType===8?e.parentNode.removeChild(l):e.removeChild(l)}catch(u){he(a,t,u)}else try{De.removeChild(a.stateNode)}catch(u){he(a,t,u)}break;case 18:De!==null&&(vt?(t=De,a=a.stateNode,t.nodeType===8?r5(t.parentNode,a):t.nodeType===1&&r5(t,a),xl(t)):r5(De,a.stateNode));break;case 4:l=De,n=vt,De=a.stateNode.containerInfo,vt=!0,b1(e,t,a),De=l,vt=n;break;case 0:case 11:case 14:case 15:me||G1(2,a,t),me||G1(4,a,t),b1(e,t,a);break;case 1:me||(yt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&c7(a,t,l)),b1(e,t,a);break;case 21:b1(e,t,a);break;case 22:me||yt(a,t),me=(l=me)||a.memoizedState!==null,b1(e,t,a),me=l;break;default:b1(e,t,a)}}function b7(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xl(e)}catch(a){he(t,t.return,a)}}function F8(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new f7),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new f7),t;default:throw Error(r(435,e.tag))}}function Ls(e,t){var a=F8(e);t.forEach(function(l){var n=c4.bind(null,e,l);a.has(l)||(a.add(l),l.then(n,n))})}function Dt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,h=u;e:for(;h!==null;){switch(h.tag){case 27:case 5:De=h.stateNode,vt=!1;break e;case 3:De=h.stateNode.containerInfo,vt=!0;break e;case 4:De=h.stateNode.containerInfo,vt=!0;break e}h=h.return}if(De===null)throw Error(r(160));p7(i,u,n),De=null,vt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)C7(t,e),t=t.sibling}var Bt=null;function C7(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Dt(t,e),Lt(e),l&4&&(G1(3,e,e.return),nl(3,e),G1(5,e,e.return));break;case 1:Dt(t,e),Lt(e),l&512&&(me||a===null||yt(a,a.return)),l&64&&p1&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Bt;if(Dt(t,e),Lt(e),l&512&&(me||a===null||yt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Da]||i[Ke]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Xe(i,l,a),i[Ke]=e,$e(i),l=i;break e;case"link":var u=u3("link","href",n).get(l+(a.href||""));if(u){for(var h=0;h<u.length;h++)if(i=u[h],i.getAttribute("href")===(a.href==null?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(h,1);break t}}i=n.createElement(l),Xe(i,l,a),n.head.appendChild(i);break;case"meta":if(u=u3("meta","content",n).get(l+(a.content||""))){for(h=0;h<u.length;h++)if(i=u[h],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(h,1);break t}}i=n.createElement(l),Xe(i,l,a),n.head.appendChild(i);break;default:throw Error(r(468,l))}i[Ke]=e,$e(i),l=i}e.stateNode=l}else d3(n,e.type,e.stateNode);else e.stateNode=c3(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?d3(n,e.type,e.stateNode):c3(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&d7(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(l&4&&e.alternate===null){n=e.stateNode,i=e.memoizedProps;try{for(var f=n.firstChild;f;){var C=f.nextSibling,E=f.nodeName;f[Da]||E==="HEAD"||E==="BODY"||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=C}for(var M=e.type,x=n.attributes;x.length;)n.removeAttributeNode(x[0]);Xe(n,M,i),n[Ke]=e,n[it]=i}catch(V){he(e,e.return,V)}}case 5:if(Dt(t,e),Lt(e),l&512&&(me||a===null||yt(a,a.return)),e.flags&32){n=e.stateNode;try{q2(n,"")}catch(V){he(e,e.return,V)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,d7(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Ds=!0);break;case 6:if(Dt(t,e),Lt(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(V){he(e,e.return,V)}}break;case 3:if(Gn=null,n=Bt,Bt=Zn(t.containerInfo),Dt(t,e),Bt=n,Lt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{xl(t.containerInfo)}catch(V){he(e,e.return,V)}Ds&&(Ds=!1,_7(e));break;case 4:l=Bt,Bt=Zn(e.stateNode.containerInfo),Dt(t,e),Lt(e),Bt=l;break;case 12:Dt(t,e),Lt(e);break;case 13:Dt(t,e),Lt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(qs=Jt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ls(e,l)));break;case 22:if(l&512&&(me||a===null||yt(a,a.return)),f=e.memoizedState!==null,C=a!==null&&a.memoizedState!==null,E=p1,M=me,p1=E||f,me=M||C,Dt(t,e),me=M,p1=E,Lt(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,l&8192&&(t._visibility=f?t._visibility&-2:t._visibility|1,f&&(t=p1||me,a===null||C||t||la(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(a=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(a===null){C=a=t;try{if(n=C.stateNode,f)i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{u=C.stateNode,h=C.memoizedProps.style;var S=h!=null&&h.hasOwnProperty("display")?h.display:null;u.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(V){he(C,C.return,V)}}}else if(t.tag===6){if(a===null){C=t;try{C.stateNode.nodeValue=f?"":C.memoizedProps}catch(V){he(C,C.return,V)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ls(e,a))));break;case 19:Dt(t,e),Lt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ls(e,l)));break;case 21:break;default:Dt(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var a=e.return;a!==null;){if(h7(a)){var l=a;break e}a=a.return}throw Error(r(160))}switch(l.tag){case 27:var n=l.stateNode,i=Ms(e);zn(e,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(q2(u,""),l.flags&=-33);var h=Ms(e);zn(e,h,u);break;case 3:case 4:var f=l.stateNode.containerInfo,C=Ms(e);As(e,C,f);break;default:throw Error(r(161))}}}catch(E){he(e,e.return,E)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _7(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;_7(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function C1(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)v7(e,t.alternate,t),t=t.sibling}function la(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:G1(4,t,t.return),la(t);break;case 1:yt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&c7(t,t.return,a),la(t);break;case 26:case 27:case 5:yt(t,t.return),la(t);break;case 22:yt(t,t.return),t.memoizedState===null&&la(t);break;default:la(t)}e=e.sibling}}function Y1(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Y1(n,i,a),nl(4,i);break;case 1:if(Y1(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(C){he(l,l.return,C)}if(l=i,n=l.updateQueue,n!==null){var h=l.stateNode;try{var f=n.shared.hiddenCallbacks;if(f!==null)for(n.shared.hiddenCallbacks=null,n=0;n<f.length;n++)s7(f[n],h)}catch(C){he(l,l.return,C)}}a&&u&64&&r7(i),w2(i,i.return);break;case 26:case 27:case 5:Y1(n,i,a),a&&l===null&&u&4&&u7(i),w2(i,i.return);break;case 12:Y1(n,i,a);break;case 13:Y1(n,i,a),a&&u&4&&b7(n,i);break;case 22:i.memoizedState===null&&Y1(n,i,a),w2(i,i.return);break;default:Y1(n,i,a)}t=t.sibling}}function Hs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ka(a))}function Ts(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ka(e))}function X1(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)m7(e,t,a,l),t=t.sibling}function m7(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:X1(e,t,a,l),n&2048&&nl(9,t);break;case 3:X1(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ka(e)));break;case 12:if(n&2048){X1(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,h=i.onPostCommit;typeof h=="function"&&h(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(f){he(t,t.return,f)}}else X1(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,t.memoizedState!==null?i._visibility&4?X1(e,t,a,l):il(e,t):i._visibility&4?X1(e,t,a,l):(i._visibility|=4,na(e,t,a,l,(t.subtreeFlags&10256)!==0)),n&2048&&Hs(t.alternate,t);break;case 24:X1(e,t,a,l),n&2048&&Ts(t.alternate,t);break;default:X1(e,t,a,l)}}function na(e,t,a,l,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,u=t,h=a,f=l,C=u.flags;switch(u.tag){case 0:case 11:case 15:na(i,u,h,f,n),nl(8,u);break;case 23:break;case 22:var E=u.stateNode;u.memoizedState!==null?E._visibility&4?na(i,u,h,f,n):il(i,u):(E._visibility|=4,na(i,u,h,f,n)),n&&C&2048&&Hs(u.alternate,u);break;case 24:na(i,u,h,f,n),n&&C&2048&&Ts(u.alternate,u);break;default:na(i,u,h,f,n)}t=t.sibling}}function il(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:il(a,l),n&2048&&Hs(l.alternate,l);break;case 24:il(a,l),n&2048&&Ts(l.alternate,l);break;default:il(a,l)}t=t.sibling}}var sl=8192;function ia(e){if(e.subtreeFlags&sl)for(e=e.child;e!==null;)x7(e),e=e.sibling}function x7(e){switch(e.tag){case 26:ia(e),e.flags&sl&&e.memoizedState!==null&&N4(Bt,e.memoizedState,e.memoizedProps);break;case 5:ia(e);break;case 3:case 4:var t=Bt;Bt=Zn(e.stateNode.containerInfo),ia(e),Bt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=sl,sl=16777216,ia(e),sl=t):ia(e));break;default:ia(e)}}function w7(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ol(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Re=l,S7(l,e)}w7(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)k7(e),e=e.sibling}function k7(e){switch(e.tag){case 0:case 11:case 15:ol(e),e.flags&2048&&G1(9,e,e.return);break;case 3:ol(e);break;case 12:ol(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,Mn(e)):ol(e);break;default:ol(e)}}function Mn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Re=l,S7(l,e)}w7(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:G1(8,t,t.return),Mn(t);break;case 22:a=t.stateNode,a._visibility&4&&(a._visibility&=-5,Mn(t));break;default:Mn(t)}e=e.sibling}}function S7(e,t){for(;Re!==null;){var a=Re;switch(a.tag){case 0:case 11:case 15:G1(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ka(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Re=l;else e:for(a=e;Re!==null;){l=Re;var n=l.sibling,i=l.return;if(g7(l),l===a){Re=null;break e}if(n!==null){n.return=i,Re=n;break e}Re=i}}}function W8(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,t,a,l){return new W8(e,t,a,l)}function Os(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Q1(e,t){var a=e.alternate;return a===null?(a=Ht(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function E7(e,t){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function An(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")Os(e)&&(u=1);else if(typeof e=="string")u=V4(e,a,Kt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case k:return k2(a.children,n,i,t);case w:u=8,n|=24;break;case O:return e=Ht(12,a,t,n|2),e.elementType=O,e.lanes=i,e;case at:return e=Ht(13,a,t,n),e.elementType=at,e.lanes=i,e;case ut:return e=Ht(19,a,t,n),e.elementType=ut,e.lanes=i,e;case Nt:return z7(a,n,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $:case G:u=10;break e;case J:u=9;break e;case le:u=11;break e;case i1:u=14;break e;case We:u=16,l=null;break e}u=29,a=Error(r(130,e===null?"null":typeof e,"")),l=null}return t=Ht(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function k2(e,t,a,l){return e=Ht(7,e,l,t),e.lanes=a,e}function z7(e,t,a,l){e=Ht(22,e,l,t),e.elementType=Nt,e.lanes=a;var n={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var i=n._current;if(i===null)throw Error(r(456));if((n._pendingVisibility&2)===0){var u=U1(i,2);u!==null&&(n._pendingVisibility|=2,et(u,i,2))}},attach:function(){var i=n._current;if(i===null)throw Error(r(456));if((n._pendingVisibility&2)!==0){var u=U1(i,2);u!==null&&(n._pendingVisibility&=-3,et(u,i,2))}}};return e.stateNode=n,e}function Us(e,t,a){return e=Ht(6,e,null,t),e.lanes=a,e}function Vs(e,t,a){return t=Ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _1(e){e.flags|=4}function M7(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!h3(t)){if(t=At.current,t!==null&&((ae&4194176)===ae?Wt!==null:(ae&62914560)!==ae&&(ae&536870912)===0||t!==Wt))throw Ya=Bi,Yo;e.flags|=8192}}function Dn(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Y5():536870912,e.lanes|=t,oa|=t)}function rl(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&31457280,l|=n.flags&31457280,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function I8(e,t,a){var l=t.pendingProps;switch(Ri(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return be(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),g1(Oe),O2(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ba(t)?_1(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,qt!==null&&(Gs(qt),qt=null))),be(t),null;case 26:return a=t.memoizedState,e===null?(_1(t),a!==null?(be(t),M7(t,a)):(be(t),t.flags&=-16777217)):a?a!==e.memoizedState?(_1(t),be(t),M7(t,a)):(be(t),t.flags&=-16777217):(e.memoizedProps!==l&&_1(t),be(t),t.flags&=-16777217),null;case 27:Bl(t),a=L1.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&_1(t);else{if(!l){if(t.stateNode===null)throw Error(r(166));return be(t),null}e=Kt.current,Ba(t)?jo(t):(e=n3(n,l,a),t.stateNode=e,_1(t))}return be(t),null;case 5:if(Bl(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&_1(t);else{if(!l){if(t.stateNode===null)throw Error(r(166));return be(t),null}if(e=Kt.current,Ba(t))jo(t);else{switch(n=Bn(L1.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}e[Ke]=t,e[it]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Xe(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&_1(t)}}return be(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&_1(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(r(166));if(e=L1.current,Ba(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Pe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ke]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||I7(e.nodeValue,a)),e||y2(t)}else e=Bn(e).createTextNode(l),e[Ke]=t,t.stateNode=e}return be(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ba(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(r(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));n[Ke]=t}else Za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),n=!1}else qt!==null&&(Gs(qt),qt=null),n=!0;if(!n)return t.flags&256?(h1(t),t):(h1(t),null)}if(h1(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Dn(t,t.updateQueue),be(t),null;case 4:return O2(),e===null&&t5(t.stateNode.containerInfo),be(t),null;case 10:return g1(t.type),be(t),null;case 19:if(ze(Te),n=t.memoizedState,n===null)return be(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)rl(n,!1);else{if(xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=fn(e),i!==null){for(t.flags|=128,rl(n,!1),e=i.updateQueue,t.updateQueue=e,Dn(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)E7(a,e),a=a.sibling;return pe(Te,Te.current&1|2),t.child}e=e.sibling}n.tail!==null&&Jt()>Ln&&(t.flags|=128,l=!0,rl(n,!1),t.lanes=4194304)}else{if(!l)if(e=fn(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Dn(t,e),rl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!ne)return be(t),null}else 2*Jt()-n.renderingStartTime>Ln&&a!==536870912&&(t.flags|=128,l=!0,rl(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Jt(),t.sibling=null,e=Te.current,pe(Te,l?e&1|2:e&1),t):(be(t),null);case 22:case 23:return h1(t),ji(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),a=t.updateQueue,a!==null&&Dn(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&ze(g2),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),g1(Oe),be(t),null;case 25:return null}throw Error(r(156,t.tag))}function P8(e,t){switch(Ri(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return g1(Oe),O2(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Bl(t),null;case 13:if(h1(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(Te),null;case 4:return O2(),null;case 10:return g1(t.type),null;case 22:case 23:return h1(t),ji(),e!==null&&ze(g2),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return g1(Oe),null;case 25:return null;default:return null}}function A7(e,t){switch(Ri(t),t.tag){case 3:g1(Oe),O2();break;case 26:case 27:case 5:Bl(t);break;case 4:O2();break;case 13:h1(t);break;case 19:ze(Te);break;case 10:g1(t.type);break;case 22:case 23:h1(t),ji(),e!==null&&ze(g2);break;case 24:g1(Oe)}}var e4={getCacheForType:function(e){var t=Je(Oe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},t4=typeof WeakMap=="function"?WeakMap:Map,Ce=0,ve=null,P=null,ae=0,ge=0,gt=null,m1=!1,sa=!1,$s=!1,x1=0,xe=0,K1=0,S2=0,Ns=0,Tt=0,oa=0,cl=null,Pt=null,Rs=!1,qs=0,Ln=1/0,Hn=null,J1=null,Tn=!1,E2=null,ul=0,Bs=0,Zs=null,dl=0,js=null;function pt(){if((Ce&2)!==0&&ae!==0)return ae&-ae;if(B.T!==null){var e=I2;return e!==0?e:Ws()}return J5()}function D7(){Tt===0&&(Tt=(ae&536870912)===0||ne?G5():536870912);var e=At.current;return e!==null&&(e.flags|=32),Tt}function et(e,t,a){(e===ve&&ge===2||e.cancelPendingCommit!==null)&&(ra(e,0),w1(e,ae,Tt,!1)),Aa(e,a),((Ce&2)===0||e!==ve)&&(e===ve&&((Ce&2)===0&&(S2|=a),xe===4&&w1(e,ae,Tt,!1)),e1(e))}function L7(e,t,a){if((Ce&6)!==0)throw Error(r(327));var l=!a&&(t&60)===0&&(t&e.expiredLanes)===0||Ma(e,t),n=l?n4(e,t):Qs(e,t,!0),i=l;do{if(n===0){sa&&!l&&w1(e,t,0,!1);break}else if(n===6)w1(e,t,0,!m1);else{if(a=e.current.alternate,i&&!a4(a)){n=Qs(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var h=e;n=cl;var f=h.current.memoizedState.isDehydrated;if(f&&(ra(h,u).flags|=256),u=Qs(h,u,!1),u!==2){if($s&&!f){h.errorRecoveryDisabledLanes|=i,S2|=i,n=4;break e}i=Pt,Pt=n,i!==null&&Gs(i)}n=u}if(i=!1,n!==2)continue}}if(n===1){ra(e,0),w1(e,t,0,!0);break}e:{switch(l=e,n){case 0:case 1:throw Error(r(345));case 4:if((t&4194176)===t){w1(l,t,Tt,!m1);break e}break;case 2:Pt=null;break;case 3:case 5:break;default:throw Error(r(329))}if(l.finishedWork=a,l.finishedLanes=t,(t&62914560)===t&&(i=qs+300-Jt(),10<i)){if(w1(l,t,Tt,!m1),Yl(l,0)!==0)break e;l.timeoutHandle=t3(H7.bind(null,l,a,Pt,Hn,Rs,t,Tt,S2,oa,m1,2,-0,0),i);break e}H7(l,a,Pt,Hn,Rs,t,Tt,S2,oa,m1,0,-0,0)}}break}while(!0);e1(e)}function Gs(e){Pt===null?Pt=e:Pt.push.apply(Pt,e)}function H7(e,t,a,l,n,i,u,h,f,C,E,M,x){var S=t.subtreeFlags;if((S&8192||(S&16785408)===16785408)&&(pl={stylesheets:null,count:0,unsuspend:$4},x7(t),t=R4(),t!==null)){e.cancelPendingCommit=t(R7.bind(null,e,a,l,n,u,h,f,1,M,x)),w1(e,i,u,!C);return}R7(e,a,l,n,u,h,f,E,M,x)}function a4(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ft(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function w1(e,t,a,l){t&=~Ns,t&=~S2,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-ht(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&X5(e,a,t)}function On(){return(Ce&6)===0?(hl(0),!1):!0}function Ys(){if(P!==null){if(ge===0)var e=P.return;else e=P,v1=m2=null,Wi(e),F2=null,Xa=0,e=P;for(;e!==null;)A7(e.alternate,e),e=e.return;P=null}}function ra(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,m4(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ys(),ve=e,P=a=Q1(e.current,null),ae=t,ge=0,gt=null,m1=!1,sa=Ma(e,t),$s=!1,oa=Tt=Ns=S2=K1=xe=0,Pt=cl=null,Rs=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ht(l),i=1<<n;t|=e[n],l&=~i}return x1=t,ln(),a}function T7(e,t){W=null,B.H=It,t===Ga?(t=Ko(),ge=3):t===Yo?(t=Ko(),ge=4):ge=t===Xr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,gt=t,P===null&&(xe=1,kn(e,Et(t,e.current)))}function O7(){var e=B.H;return B.H=It,e===null?It:e}function U7(){var e=B.A;return B.A=e4,e}function Xs(){xe=4,m1||(ae&4194176)!==ae&&At.current!==null||(sa=!0),(K1&134217727)===0&&(S2&134217727)===0||ve===null||w1(ve,ae,Tt,!1)}function Qs(e,t,a){var l=Ce;Ce|=2;var n=O7(),i=U7();(ve!==e||ae!==t)&&(Hn=null,ra(e,t)),t=!1;var u=xe;e:do try{if(ge!==0&&P!==null){var h=P,f=gt;switch(ge){case 8:Ys(),u=6;break e;case 3:case 2:case 6:At.current===null&&(t=!0);var C=ge;if(ge=0,gt=null,ca(e,h,f,C),a&&sa){u=0;break e}break;default:C=ge,ge=0,gt=null,ca(e,h,f,C)}}l4(),u=xe;break}catch(E){T7(e,E)}while(!0);return t&&e.shellSuspendCounter++,v1=m2=null,Ce=l,B.H=n,B.A=i,P===null&&(ve=null,ae=0,ln()),u}function l4(){for(;P!==null;)V7(P)}function n4(e,t){var a=Ce;Ce|=2;var l=O7(),n=U7();ve!==e||ae!==t?(Hn=null,Ln=Jt()+500,ra(e,t)):sa=Ma(e,t);e:do try{if(ge!==0&&P!==null){t=P;var i=gt;t:switch(ge){case 1:ge=0,gt=null,ca(e,t,i,1);break;case 2:if(Xo(i)){ge=0,gt=null,$7(t);break}t=function(){ge===2&&ve===e&&(ge=7),e1(e)},i.then(t,t);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:Xo(i)?(ge=0,gt=null,$7(t)):(ge=0,gt=null,ca(e,t,i,7));break;case 5:var u=null;switch(P.tag){case 26:u=P.memoizedState;case 5:case 27:var h=P;if(!u||h3(u)){ge=0,gt=null;var f=h.sibling;if(f!==null)P=f;else{var C=h.return;C!==null?(P=C,Un(C)):P=null}break t}}ge=0,gt=null,ca(e,t,i,5);break;case 6:ge=0,gt=null,ca(e,t,i,6);break;case 8:Ys(),xe=6;break e;default:throw Error(r(462))}}i4();break}catch(E){T7(e,E)}while(!0);return v1=m2=null,B.H=l,B.A=n,Ce=a,P!==null?0:(ve=null,ae=0,ln(),xe)}function i4(){for(;P!==null&&!z0();)V7(P)}function V7(e){var t=n7(e.alternate,e,x1);e.memoizedProps=e.pendingProps,t===null?Un(e):P=t}function $7(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Ir(a,t,t.pendingProps,t.type,void 0,ae);break;case 11:t=Ir(a,t,t.pendingProps,t.type.render,t.ref,ae);break;case 5:Wi(t);default:A7(a,t),t=P=E7(t,x1),t=n7(a,t,x1)}e.memoizedProps=e.pendingProps,t===null?Un(e):P=t}function ca(e,t,a,l){v1=m2=null,Wi(t),F2=null,Xa=0;var n=t.return;try{if(Q8(e,n,t,a,ae)){xe=1,kn(e,Et(a,e.current)),P=null;return}}catch(i){if(n!==null)throw P=n,i;xe=1,kn(e,Et(a,e.current)),P=null;return}t.flags&32768?(ne||l===1?e=!0:sa||(ae&536870912)!==0?e=!1:(m1=e=!0,(l===2||l===3||l===6)&&(l=At.current,l!==null&&l.tag===13&&(l.flags|=16384))),N7(t,e)):Un(t)}function Un(e){var t=e;do{if((t.flags&32768)!==0){N7(t,m1);return}e=t.return;var a=I8(t.alternate,t,x1);if(a!==null){P=a;return}if(t=t.sibling,t!==null){P=t;return}P=t=e}while(t!==null);xe===0&&(xe=5)}function N7(e,t){do{var a=P8(e.alternate,e);if(a!==null){a.flags&=32767,P=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){P=e;return}P=e=a}while(e!==null);xe=6,P=null}function R7(e,t,a,l,n,i,u,h,f,C){var E=B.T,M=T.p;try{T.p=2,B.T=null,s4(e,t,a,l,M,n,i,u,h,f,C)}finally{B.T=E,T.p=M}}function s4(e,t,a,l,n,i,u,h){do ua();while(E2!==null);if((Ce&6)!==0)throw Error(r(327));var f=e.finishedWork;if(l=e.finishedLanes,f===null)return null;if(e.finishedWork=null,e.finishedLanes=0,f===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var C=f.lanes|f.childLanes;if(C|=Vi,N0(e,l,C,i,u,h),e===ve&&(P=ve=null,ae=0),(f.subtreeFlags&10256)===0&&(f.flags&10256)===0||Tn||(Tn=!0,Bs=C,Zs=a,u4(Zl,function(){return ua(),null})),a=(f.flags&15990)!==0,(f.subtreeFlags&15990)!==0||a?(a=B.T,B.T=null,i=T.p,T.p=2,u=Ce,Ce|=4,J8(e,f),C7(f,e),D8(i5,e.containerInfo),Qn=!!n5,i5=n5=null,e.current=f,v7(e,f.alternate,f),M0(),Ce=u,T.p=i,B.T=a):e.current=f,Tn?(Tn=!1,E2=e,ul=l):q7(e,C),C=e.pendingLanes,C===0&&(J1=null),T0(f.stateNode),e1(e),t!==null)for(n=e.onRecoverableError,f=0;f<t.length;f++)C=t[f],n(C.value,{componentStack:C.stack});return(ul&3)!==0&&ua(),C=e.pendingLanes,(l&4194218)!==0&&(C&42)!==0?e===js?dl++:(dl=0,js=e):dl=0,hl(0),null}function q7(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ka(t)))}function ua(){if(E2!==null){var e=E2,t=Bs;Bs=0;var a=K5(ul),l=B.T,n=T.p;try{if(T.p=32>a?32:a,B.T=null,E2===null)var i=!1;else{a=Zs,Zs=null;var u=E2,h=ul;if(E2=null,ul=0,(Ce&6)!==0)throw Error(r(331));var f=Ce;if(Ce|=4,k7(u.current),m7(u,u.current,h,a),Ce=f,hl(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(za,u)}catch{}i=!0}return i}finally{T.p=n,B.T=l,q7(e,t)}}return!1}function B7(e,t,a){t=Et(a,t),t=ds(e.stateNode,t,2),e=j1(e,t,2),e!==null&&(Aa(e,2),e1(e))}function he(e,t,a){if(e.tag===3)B7(e,e,a);else for(;t!==null;){if(t.tag===3){B7(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(J1===null||!J1.has(l))){e=Et(a,e),a=Gr(2),l=j1(t,a,2),l!==null&&(Yr(a,l,t,e),Aa(l,2),e1(l));break}}t=t.return}}function Ks(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new t4;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||($s=!0,n.add(a),e=o4.bind(null,e,t,a),t.then(e,e))}function o4(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ve===e&&(ae&a)===a&&(xe===4||xe===3&&(ae&62914560)===ae&&300>Jt()-qs?(Ce&2)===0&&ra(e,0):Ns|=a,oa===ae&&(oa=0)),e1(e)}function Z7(e,t){t===0&&(t=Y5()),e=U1(e,t),e!==null&&(Aa(e,t),e1(e))}function r4(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Z7(e,a)}function c4(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(t),Z7(e,a)}function u4(e,t){return hi(e,t)}var Vn=null,da=null,Js=!1,$n=!1,Fs=!1,z2=0;function e1(e){e!==da&&e.next===null&&(da===null?Vn=da=e:da=da.next=e),$n=!0,Js||(Js=!0,h4(d4))}function hl(e,t){if(!Fs&&$n){Fs=!0;do for(var a=!1,l=Vn;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,h=l.pingedLanes;i=(1<<31-ht(42|e)+1)-1,i&=n&~(u&~h),i=i&201326677?i&201326677|1:i?i|2:0}i!==0&&(a=!0,Y7(l,i))}else i=ae,i=Yl(l,l===ve?i:0),(i&3)===0||Ma(l,i)||(a=!0,Y7(l,i));l=l.next}while(a);Fs=!1}}function d4(){$n=Js=!1;var e=0;z2!==0&&(_4()&&(e=z2),z2=0);for(var t=Jt(),a=null,l=Vn;l!==null;){var n=l.next,i=j7(l,t);i===0?(l.next=null,a===null?Vn=n:a.next=n,n===null&&(da=a)):(a=l,(e!==0||(i&3)!==0)&&($n=!0)),l=n}hl(e)}function j7(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-ht(i),h=1<<u,f=n[u];f===-1?((h&a)===0||(h&l)!==0)&&(n[u]=$0(h,t)):f<=t&&(e.expiredLanes|=h),i&=~h}if(t=ve,a=ae,a=Yl(e,e===t?a:0),l=e.callbackNode,a===0||e===t&&ge===2||e.cancelPendingCommit!==null)return l!==null&&l!==null&&fi(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ma(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&fi(l),K5(a)){case 2:case 8:a=Z5;break;case 32:a=Zl;break;case 268435456:a=j5;break;default:a=Zl}return l=G7.bind(null,e),a=hi(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&fi(l),e.callbackPriority=2,e.callbackNode=null,2}function G7(e,t){var a=e.callbackNode;if(ua()&&e.callbackNode!==a)return null;var l=ae;return l=Yl(e,e===ve?l:0),l===0?null:(L7(e,l,t),j7(e,Jt()),e.callbackNode!=null&&e.callbackNode===a?G7.bind(null,e):null)}function Y7(e,t){if(ua())return null;L7(e,t,!0)}function h4(e){x4(function(){(Ce&6)!==0?hi(B5,e):e()})}function Ws(){return z2===0&&(z2=G5()),z2}function X7(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fl(""+e)}function Q7(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function f4(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=X7((n[it]||null).action),u=l.submitter;u&&(t=(t=u[it]||null)?X7(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var h=new en("action","action",null,l,n);e.push({event:h,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(z2!==0){var f=u?Q7(n,u):new FormData(n);ss(a,{pending:!0,data:f,method:n.method,action:i},null,f)}}else typeof i=="function"&&(h.preventDefault(),f=u?Q7(n,u):new FormData(n),ss(a,{pending:!0,data:f,method:n.method,action:i},i,f))},currentTarget:n}]})}}for(var Is=0;Is<Ro.length;Is++){var Ps=Ro[Is],y4=Ps.toLowerCase(),v4=Ps[0].toUpperCase()+Ps.slice(1);Rt(y4,"on"+v4)}Rt(Oo,"onAnimationEnd"),Rt(Uo,"onAnimationIteration"),Rt(Vo,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(H8,"onTransitionRun"),Rt(T8,"onTransitionStart"),Rt(O8,"onTransitionCancel"),Rt($o,"onTransitionEnd"),N2("onMouseEnter",["mouseout","mouseover"]),N2("onMouseLeave",["mouseout","mouseover"]),N2("onPointerEnter",["pointerout","pointerover"]),N2("onPointerLeave",["pointerout","pointerover"]),r2("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),r2("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),r2("onBeforeInput",["compositionend","keypress","textInput","paste"]),r2("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),r2("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),r2("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g4=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function K7(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var h=l[u],f=h.instance,C=h.currentTarget;if(h=h.listener,f!==i&&n.isPropagationStopped())break e;i=h,n.currentTarget=C;try{i(n)}catch(E){wn(E)}n.currentTarget=null,i=f}else for(u=0;u<l.length;u++){if(h=l[u],f=h.instance,C=h.currentTarget,h=h.listener,f!==i&&n.isPropagationStopped())break e;i=h,n.currentTarget=C;try{i(n)}catch(E){wn(E)}n.currentTarget=null,i=f}}}}function ee(e,t){var a=t[vi];a===void 0&&(a=t[vi]=new Set);var l=e+"__bubble";a.has(l)||(J7(t,e,2,!1),a.add(l))}function e5(e,t,a){var l=0;t&&(l|=4),J7(a,e,l,t)}var Nn="_reactListening"+Math.random().toString(36).slice(2);function t5(e){if(!e[Nn]){e[Nn]=!0,W5.forEach(function(a){a!=="selectionchange"&&(g4.has(a)||e5(a,!1,e),e5(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nn]||(t[Nn]=!0,e5("selectionchange",!1,t))}}function J7(e,t,a,l){switch(b3(t)){case 2:var n=Z4;break;case 8:n=j4;break;default:n=y5}a=n.bind(null,t,a,e),n=void 0,!wi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function a5(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var h=l.stateNode.containerInfo;if(h===n||h.nodeType===8&&h.parentNode===n)break;if(u===4)for(u=l.return;u!==null;){var f=u.tag;if((f===3||f===4)&&(f=u.stateNode.containerInfo,f===n||f.nodeType===8&&f.parentNode===n))return;u=u.return}for(;h!==null;){if(u=o2(h),u===null)return;if(f=u.tag,f===5||f===6||f===26||f===27){l=i=u;continue e}h=h.parentNode}}l=l.return}co(function(){var C=i,E=mi(a),M=[];e:{var x=No.get(e);if(x!==void 0){var S=en,V=e;switch(e){case"keypress":if(Il(a)===0)break e;case"keydown":case"keyup":S=c8;break;case"focusin":V="focus",S=zi;break;case"focusout":V="blur",S=zi;break;case"beforeblur":case"afterblur":S=zi;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=fo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=W0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=h8;break;case Oo:case Uo:case Vo:S=e8;break;case $o:S=y8;break;case"scroll":case"scrollend":S=J0;break;case"wheel":S=g8;break;case"copy":case"cut":case"paste":S=a8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=vo;break;case"toggle":case"beforetoggle":S=b8}var Y=(t&4)!==0,we=!Y&&(e==="scroll"||e==="scrollend"),_=Y?x!==null?x+"Capture":null:x;Y=[];for(var p=C,m;p!==null;){var z=p;if(m=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||m===null||_===null||(z=Ha(p,_),z!=null&&Y.push(yl(p,z,m))),we)break;p=p.return}0<Y.length&&(x=new S(x,V,null,a,E),M.push({event:x,listeners:Y}))}}if((t&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",x&&a!==_i&&(V=a.relatedTarget||a.fromElement)&&(o2(V)||V[U2]))break e;if((S||x)&&(x=E.window===E?E:(x=E.ownerDocument)?x.defaultView||x.parentWindow:window,S?(V=a.relatedTarget||a.toElement,S=C,V=V?o2(V):null,V!==null&&(we=j(V),Y=V.tag,V!==we||Y!==5&&Y!==27&&Y!==6)&&(V=null)):(S=null,V=C),S!==V)){if(Y=fo,z="onMouseLeave",_="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(Y=vo,z="onPointerLeave",_="onPointerEnter",p="pointer"),we=S==null?x:La(S),m=V==null?x:La(V),x=new Y(z,p+"leave",S,a,E),x.target=we,x.relatedTarget=m,z=null,o2(E)===C&&(Y=new Y(_,p+"enter",V,a,E),Y.target=m,Y.relatedTarget=we,z=Y),we=z,S&&V)t:{for(Y=S,_=V,p=0,m=Y;m;m=ha(m))p++;for(m=0,z=_;z;z=ha(z))m++;for(;0<p-m;)Y=ha(Y),p--;for(;0<m-p;)_=ha(_),m--;for(;p--;){if(Y===_||_!==null&&Y===_.alternate)break t;Y=ha(Y),_=ha(_)}Y=null}else Y=null;S!==null&&F7(M,x,S,Y,!1),V!==null&&we!==null&&F7(M,we,V,Y,!0)}}e:{if(x=C?La(C):window,S=x.nodeName&&x.nodeName.toLowerCase(),S==="select"||S==="input"&&x.type==="file")var U=wo;else if(mo(x))if(ko)U=M8;else{U=E8;var I=S8}else S=x.nodeName,!S||S.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?C&&Ci(C.elementType)&&(U=wo):U=z8;if(U&&(U=U(e,C))){xo(M,U,a,E);break e}I&&I(e,x,C),e==="focusout"&&C&&x.type==="number"&&C.memoizedProps.value!=null&&bi(x,"number",x.value)}switch(I=C?La(C):window,e){case"focusin":(mo(I)||I.contentEditable==="true")&&(G2=I,Ti=C,qa=null);break;case"focusout":qa=Ti=G2=null;break;case"mousedown":Oi=!0;break;case"contextmenu":case"mouseup":case"dragend":Oi=!1,Ho(M,a,E);break;case"selectionchange":if(L8)break;case"keydown":case"keyup":Ho(M,a,E)}var N;if(Ai)e:{switch(e){case"compositionstart":var q="onCompositionStart";break e;case"compositionend":q="onCompositionEnd";break e;case"compositionupdate":q="onCompositionUpdate";break e}q=void 0}else j2?Co(e,a)&&(q="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(q="onCompositionStart");q&&(go&&a.locale!=="ko"&&(j2||q!=="onCompositionStart"?q==="onCompositionEnd"&&j2&&(N=uo()):(O1=E,ki="value"in O1?O1.value:O1.textContent,j2=!0)),I=Rn(C,q),0<I.length&&(q=new yo(q,e,null,a,E),M.push({event:q,listeners:I}),N?q.data=N:(N=_o(a),N!==null&&(q.data=N)))),(N=_8?m8(e,a):x8(e,a))&&(q=Rn(C,"onBeforeInput"),0<q.length&&(I=new yo("onBeforeInput","beforeinput",null,a,E),M.push({event:I,listeners:q}),I.data=N)),f4(M,e,C,a,E)}K7(M,t)})}function yl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Rn(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ha(e,a),n!=null&&l.unshift(yl(e,n,i)),n=Ha(e,t),n!=null&&l.push(yl(e,n,i))),e=e.return}return l}function ha(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function F7(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var h=a,f=h.alternate,C=h.stateNode;if(h=h.tag,f!==null&&f===l)break;h!==5&&h!==26&&h!==27||C===null||(f=C,n?(C=Ha(a,i),C!=null&&u.unshift(yl(a,C,f))):n||(C=Ha(a,i),C!=null&&u.push(yl(a,C,f)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var p4=/\r\n?/g,b4=/\u0000|\uFFFD/g;function W7(e){return(typeof e=="string"?e:""+e).replace(p4,`
`).replace(b4,"")}function I7(e,t){return t=W7(t),W7(e)===t}function qn(){}function ue(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||q2(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&q2(e,""+l);break;case"className":Ql(e,"class",l);break;case"tabIndex":Ql(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ql(e,a,l);break;case"style":oo(e,l,i);break;case"data":if(t!=="object"){Ql(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Fl(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ue(e,t,"name",n.name,n,null),ue(e,t,"formEncType",n.formEncType,n,null),ue(e,t,"formMethod",n.formMethod,n,null),ue(e,t,"formTarget",n.formTarget,n,null)):(ue(e,t,"encType",n.encType,n,null),ue(e,t,"method",n.method,n,null),ue(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Fl(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=qn);break;case"onScroll":l!=null&&ee("scroll",e);break;case"onScrollEnd":l!=null&&ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Fl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ee("beforetoggle",e),ee("toggle",e),Xl(e,"popover",l);break;case"xlinkActuate":c1(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":c1(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":c1(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":c1(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":c1(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":c1(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":c1(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":c1(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":c1(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Xl(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Q0.get(a)||a,Xl(e,a,l))}}function l5(e,t,a,l,n,i){switch(a){case"style":oo(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof l=="string"?q2(e,l):(typeof l=="number"||typeof l=="bigint")&&q2(e,""+l);break;case"onScroll":l!=null&&ee("scroll",e);break;case"onScrollEnd":l!=null&&ee("scrollend",e);break;case"onClick":l!=null&&(e.onclick=qn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!I5.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[it]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Xl(e,a,l)}}}function Xe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ee("error",e),ee("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ue(e,t,i,u,a,null)}}n&&ue(e,t,"srcSet",a.srcSet,a,null),l&&ue(e,t,"src",a.src,a,null);return;case"input":ee("invalid",e);var h=i=u=n=null,f=null,C=null;for(l in a)if(a.hasOwnProperty(l)){var E=a[l];if(E!=null)switch(l){case"name":n=E;break;case"type":u=E;break;case"checked":f=E;break;case"defaultChecked":C=E;break;case"value":i=E;break;case"defaultValue":h=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(137,t));break;default:ue(e,t,l,E,a,null)}}lo(e,i,h,f,C,u,n,!1),Kl(e);return;case"select":ee("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(h=a[n],h!=null))switch(n){case"value":i=h;break;case"defaultValue":u=h;break;case"multiple":l=h;default:ue(e,t,n,h,a,null)}t=i,a=u,e.multiple=!!l,t!=null?R2(e,!!l,t,!1):a!=null&&R2(e,!!l,a,!0);return;case"textarea":ee("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(h=a[u],h!=null))switch(u){case"value":l=h;break;case"defaultValue":n=h;break;case"children":i=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:ue(e,t,u,h,a,null)}io(e,l,n,i),Kl(e);return;case"option":for(f in a)if(a.hasOwnProperty(f)&&(l=a[f],l!=null))switch(f){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ue(e,t,f,l,a,null)}return;case"dialog":ee("cancel",e),ee("close",e);break;case"iframe":case"object":ee("load",e);break;case"video":case"audio":for(l=0;l<fl.length;l++)ee(fl[l],e);break;case"image":ee("error",e),ee("load",e);break;case"details":ee("toggle",e);break;case"embed":case"source":case"link":ee("error",e),ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(l=a[C],l!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ue(e,t,C,l,a,null)}return;default:if(Ci(t)){for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!==void 0&&l5(e,t,E,l,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(l=a[h],l!=null&&ue(e,t,h,l,a,null))}function C4(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,h=null,f=null,C=null,E=null;for(S in a){var M=a[S];if(a.hasOwnProperty(S)&&M!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":f=M;default:l.hasOwnProperty(S)||ue(e,t,S,null,l,M)}}for(var x in l){var S=l[x];if(M=a[x],l.hasOwnProperty(x)&&(S!=null||M!=null))switch(x){case"type":i=S;break;case"name":n=S;break;case"checked":C=S;break;case"defaultChecked":E=S;break;case"value":u=S;break;case"defaultValue":h=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(r(137,t));break;default:S!==M&&ue(e,t,x,S,l,M)}}pi(e,u,h,f,C,E,i,n);return;case"select":S=u=h=x=null;for(i in a)if(f=a[i],a.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":S=f;default:l.hasOwnProperty(i)||ue(e,t,i,null,l,f)}for(n in l)if(i=l[n],f=a[n],l.hasOwnProperty(n)&&(i!=null||f!=null))switch(n){case"value":x=i;break;case"defaultValue":h=i;break;case"multiple":u=i;default:i!==f&&ue(e,t,n,i,l,f)}t=h,a=u,l=S,x!=null?R2(e,!!a,x,!1):!!l!=!!a&&(t!=null?R2(e,!!a,t,!0):R2(e,!!a,a?[]:"",!1));return;case"textarea":S=x=null;for(h in a)if(n=a[h],a.hasOwnProperty(h)&&n!=null&&!l.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:ue(e,t,h,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":x=n;break;case"defaultValue":S=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(r(91));break;default:n!==i&&ue(e,t,u,n,l,i)}no(e,x,S);return;case"option":for(var V in a)if(x=a[V],a.hasOwnProperty(V)&&x!=null&&!l.hasOwnProperty(V))switch(V){case"selected":e.selected=!1;break;default:ue(e,t,V,null,l,x)}for(f in l)if(x=l[f],S=a[f],l.hasOwnProperty(f)&&x!==S&&(x!=null||S!=null))switch(f){case"selected":e.selected=x&&typeof x!="function"&&typeof x!="symbol";break;default:ue(e,t,f,x,l,S)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Y in a)x=a[Y],a.hasOwnProperty(Y)&&x!=null&&!l.hasOwnProperty(Y)&&ue(e,t,Y,null,l,x);for(C in l)if(x=l[C],S=a[C],l.hasOwnProperty(C)&&x!==S&&(x!=null||S!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(r(137,t));break;default:ue(e,t,C,x,l,S)}return;default:if(Ci(t)){for(var we in a)x=a[we],a.hasOwnProperty(we)&&x!==void 0&&!l.hasOwnProperty(we)&&l5(e,t,we,void 0,l,x);for(E in l)x=l[E],S=a[E],!l.hasOwnProperty(E)||x===S||x===void 0&&S===void 0||l5(e,t,E,x,l,S);return}}for(var _ in a)x=a[_],a.hasOwnProperty(_)&&x!=null&&!l.hasOwnProperty(_)&&ue(e,t,_,null,l,x);for(M in l)x=l[M],S=a[M],!l.hasOwnProperty(M)||x===S||x==null&&S==null||ue(e,t,M,x,l,S)}var n5=null,i5=null;function Bn(e){return e.nodeType===9?e:e.ownerDocument}function P7(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function e3(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function s5(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var o5=null;function _4(){var e=window.event;return e&&e.type==="popstate"?e===o5?!1:(o5=e,!0):(o5=null,!1)}var t3=typeof setTimeout=="function"?setTimeout:void 0,m4=typeof clearTimeout=="function"?clearTimeout:void 0,a3=typeof Promise=="function"?Promise:void 0,x4=typeof queueMicrotask=="function"?queueMicrotask:typeof a3<"u"?function(e){return a3.resolve(null).then(e).catch(w4)}:t3;function w4(e){setTimeout(function(){throw e})}function r5(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(l===0){e.removeChild(n),xl(t);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=n}while(a);xl(t)}function c5(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":c5(a),gi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function k4(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Da])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Zt(e.nextSibling),e===null)break}return null}function S4(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Zt(e.nextSibling),e===null))return null;return e}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function l3(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function n3(e,t,a){switch(t=Bn(a),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var Ot=new Map,i3=new Set;function Zn(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var k1=T.d;T.d={f:E4,r:z4,D:M4,C:A4,L:D4,m:L4,X:T4,S:H4,M:O4};function E4(){var e=k1.f(),t=On();return e||t}function z4(e){var t=V2(e);t!==null&&t.tag===5&&t.type==="form"?Hr(t):k1.r(e)}var fa=typeof document>"u"?null:document;function s3(e,t,a){var l=fa;if(l&&typeof t=="string"&&t){var n=kt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),i3.has(n)||(i3.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Xe(t,"link",e),$e(t),l.head.appendChild(t)))}}function M4(e){k1.D(e),s3("dns-prefetch",e,null)}function A4(e,t){k1.C(e,t),s3("preconnect",e,t)}function D4(e,t,a){k1.L(e,t,a);var l=fa;if(l&&e&&t){var n='link[rel="preload"][as="'+kt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+kt(a.imageSizes)+'"]')):n+='[href="'+kt(e)+'"]';var i=n;switch(t){case"style":i=ya(e);break;case"script":i=va(e)}Ot.has(i)||(e=oe({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ot.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(vl(i))||t==="script"&&l.querySelector(gl(i))||(t=l.createElement("link"),Xe(t,"link",e),$e(t),l.head.appendChild(t)))}}function L4(e,t){k1.m(e,t);var a=fa;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+kt(l)+'"][href="'+kt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=va(e)}if(!Ot.has(i)&&(e=oe({rel:"modulepreload",href:e},t),Ot.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(gl(i)))return}l=a.createElement("link"),Xe(l,"link",e),$e(l),a.head.appendChild(l)}}}function H4(e,t,a){k1.S(e,t,a);var l=fa;if(l&&e){var n=$2(l).hoistableStyles,i=ya(e);t=t||"default";var u=n.get(i);if(!u){var h={loading:0,preload:null};if(u=l.querySelector(vl(i)))h.loading=5;else{e=oe({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ot.get(i))&&u5(e,a);var f=u=l.createElement("link");$e(f),Xe(f,"link",e),f._p=new Promise(function(C,E){f.onload=C,f.onerror=E}),f.addEventListener("load",function(){h.loading|=1}),f.addEventListener("error",function(){h.loading|=2}),h.loading|=4,jn(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:h},n.set(i,u)}}}function T4(e,t){k1.X(e,t);var a=fa;if(a&&e){var l=$2(a).hoistableScripts,n=va(e),i=l.get(n);i||(i=a.querySelector(gl(n)),i||(e=oe({src:e,async:!0},t),(t=Ot.get(n))&&d5(e,t),i=a.createElement("script"),$e(i),Xe(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function O4(e,t){k1.M(e,t);var a=fa;if(a&&e){var l=$2(a).hoistableScripts,n=va(e),i=l.get(n);i||(i=a.querySelector(gl(n)),i||(e=oe({src:e,async:!0,type:"module"},t),(t=Ot.get(n))&&d5(e,t),i=a.createElement("script"),$e(i),Xe(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function o3(e,t,a,l){var n=(n=L1.current)?Zn(n):null;if(!n)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=ya(a.href),a=$2(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ya(a.href);var i=$2(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(vl(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Ot.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(e,a),i||U4(n,e,a,u.state))),t&&l===null)throw Error(r(528,""));return u}if(t&&l!==null)throw Error(r(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=va(a),a=$2(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ya(e){return'href="'+kt(e)+'"'}function vl(e){return'link[rel="stylesheet"]['+e+"]"}function r3(e){return oe({},e,{"data-precedence":e.precedence,precedence:null})}function U4(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Xe(t,"link",a),$e(t),e.head.appendChild(t))}function va(e){return'[src="'+kt(e)+'"]'}function gl(e){return"script[async]"+e}function c3(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+kt(a.href)+'"]');if(l)return t.instance=l,$e(l),l;var n=oe({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),$e(l),Xe(l,"style",n),jn(l,a.precedence,e),t.instance=l;case"stylesheet":n=ya(a.href);var i=e.querySelector(vl(n));if(i)return t.state.loading|=4,t.instance=i,$e(i),i;l=r3(a),(n=Ot.get(n))&&u5(l,n),i=(e.ownerDocument||e).createElement("link"),$e(i);var u=i;return u._p=new Promise(function(h,f){u.onload=h,u.onerror=f}),Xe(i,"link",l),t.state.loading|=4,jn(i,a.precedence,e),t.instance=i;case"script":return i=va(a.src),(n=e.querySelector(gl(i)))?(t.instance=n,$e(n),n):(l=a,(n=Ot.get(i))&&(l=oe({},a),d5(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),$e(n),Xe(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,jn(l,a.precedence,e));return t.instance}function jn(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var h=l[u];if(h.dataset.precedence===t)i=h;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function u5(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function d5(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gn=null;function u3(e,t,a){if(Gn===null){var l=new Map,n=Gn=new Map;n.set(a,l)}else n=Gn,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Da]||i[Ke]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var h=l.get(u);h?h.push(i):l.set(u,[i])}}return l}function d3(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function V4(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function h3(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var pl=null;function $4(){}function N4(e,t,a){if(pl===null)throw Error(r(475));var l=pl;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=ya(a.href),i=e.querySelector(vl(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Yn.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=i,$e(i);return}i=e.ownerDocument||e,a=r3(a),(n=Ot.get(n))&&u5(a,n),i=i.createElement("link"),$e(i);var u=i;u._p=new Promise(function(h,f){u.onload=h,u.onerror=f}),Xe(i,"link",a),t.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Yn.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function R4(){if(pl===null)throw Error(r(475));var e=pl;return e.stylesheets&&e.count===0&&h5(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&h5(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Yn(){if(this.count--,this.count===0){if(this.stylesheets)h5(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xn=null;function h5(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xn=new Map,t.forEach(q4,e),Xn=null,Yn.call(e))}function q4(e,t){if(!(t.state.loading&4)){var a=Xn.get(e);if(a)var l=a.get(null);else{a=new Map,Xn.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Yn.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var bl={$$typeof:G,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function B4(e,t,a,l,n,i,u,h){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yi(0),this.hiddenUpdates=yi(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function f3(e,t,a,l,n,i,u,h,f,C,E,M){return e=new B4(e,t,a,u,h,f,C,M),t=1,i===!0&&(t|=24),i=Ht(3,null,null,t),e.current=i,i.stateNode=e,t=Gi(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},ks(i),e}function y3(e){return e?(e=Q2,e):Q2}function v3(e,t,a,l,n,i){n=y3(n),l.context===null?l.context=n:l.pendingContext=n,l=Z1(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=j1(e,l,t),a!==null&&(et(a,e,t),tl(a,e,t))}function g3(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function f5(e,t){g3(e,t),(e=e.alternate)&&g3(e,t)}function p3(e){if(e.tag===13){var t=U1(e,67108864);t!==null&&et(t,e,67108864),f5(e,67108864)}}var Qn=!0;function Z4(e,t,a,l){var n=B.T;B.T=null;var i=T.p;try{T.p=2,y5(e,t,a,l)}finally{T.p=i,B.T=n}}function j4(e,t,a,l){var n=B.T;B.T=null;var i=T.p;try{T.p=8,y5(e,t,a,l)}finally{T.p=i,B.T=n}}function y5(e,t,a,l){if(Qn){var n=v5(l);if(n===null)a5(e,t,l,Kn,a),C3(e,l);else if(Y4(n,e,t,a,l))l.stopPropagation();else if(C3(e,l),t&4&&-1<G4.indexOf(e)){for(;n!==null;){var i=V2(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=s2(i.pendingLanes);if(u!==0){var h=i;for(h.pendingLanes|=2,h.entangledLanes|=2;u;){var f=1<<31-ht(u);h.entanglements[1]|=f,u&=~f}e1(i),(Ce&6)===0&&(Ln=Jt()+500,hl(0))}}break;case 13:h=U1(i,2),h!==null&&et(h,i,2),On(),f5(i,2)}if(i=v5(l),i===null&&a5(e,t,l,Kn,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else a5(e,t,l,null,a)}}function v5(e){return e=mi(e),g5(e)}var Kn=null;function g5(e){if(Kn=null,e=o2(e),e!==null){var t=j(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=ye(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Kn=e,null}function b3(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(A0()){case B5:return 2;case Z5:return 8;case Zl:case D0:return 32;case j5:return 268435456;default:return 32}default:return 32}}var p5=!1,F1=null,W1=null,I1=null,Cl=new Map,_l=new Map,P1=[],G4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function C3(e,t){switch(e){case"focusin":case"focusout":F1=null;break;case"dragenter":case"dragleave":W1=null;break;case"mouseover":case"mouseout":I1=null;break;case"pointerover":case"pointerout":Cl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(t.pointerId)}}function ml(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=V2(t),t!==null&&p3(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Y4(e,t,a,l,n){switch(t){case"focusin":return F1=ml(F1,e,t,a,l,n),!0;case"dragenter":return W1=ml(W1,e,t,a,l,n),!0;case"mouseover":return I1=ml(I1,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Cl.set(i,ml(Cl.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,_l.set(i,ml(_l.get(i)||null,e,t,a,l,n)),!0}return!1}function _3(e){var t=o2(e.target);if(t!==null){var a=j(t);if(a!==null){if(t=a.tag,t===13){if(t=ye(a),t!==null){e.blockedOn=t,R0(e.priority,function(){if(a.tag===13){var l=pt(),n=U1(a,l);n!==null&&et(n,a,l),f5(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=v5(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);_i=l,a.target.dispatchEvent(l),_i=null}else return t=V2(a),t!==null&&p3(t),e.blockedOn=a,!1;t.shift()}return!0}function m3(e,t,a){Jn(e)&&a.delete(t)}function X4(){p5=!1,F1!==null&&Jn(F1)&&(F1=null),W1!==null&&Jn(W1)&&(W1=null),I1!==null&&Jn(I1)&&(I1=null),Cl.forEach(m3),_l.forEach(m3)}function Fn(e,t){e.blockedOn===t&&(e.blockedOn=null,p5||(p5=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,X4)))}var Wn=null;function x3(e){Wn!==e&&(Wn=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Wn===e&&(Wn=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(g5(l||a)===null)continue;break}var i=V2(a);i!==null&&(e.splice(t,3),t-=3,ss(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function xl(e){function t(f){return Fn(f,e)}F1!==null&&Fn(F1,e),W1!==null&&Fn(W1,e),I1!==null&&Fn(I1,e),Cl.forEach(t),_l.forEach(t);for(var a=0;a<P1.length;a++){var l=P1[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<P1.length&&(a=P1[0],a.blockedOn===null);)_3(a),a.blockedOn===null&&P1.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[it]||null;if(typeof i=="function")u||x3(a);else if(u){var h=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[it]||null)h=u.formAction;else if(g5(n)!==null)continue}else h=u.action;typeof h=="function"?a[l+1]=h:(a.splice(l,3),l-=3),x3(a)}}}function b5(e){this._internalRoot=e}In.prototype.render=b5.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var a=t.current,l=pt();v3(a,l,e,t,null,null)},In.prototype.unmount=b5.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&ua(),v3(e.current,2,null,e,null,null),On(),t[U2]=null}};function In(e){this._internalRoot=e}In.prototype.unstable_scheduleHydration=function(e){if(e){var t=J5();e={blockedOn:null,target:e,priority:t};for(var a=0;a<P1.length&&t!==0&&t<P1[a].priority;a++);P1.splice(a,0,e),a===0&&_3(e)}};var w3=s.version;if(w3!=="19.0.0")throw Error(r(527,w3,"19.0.0"));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=D(t),e=e!==null?Z(e):null,e=e===null?null:e.stateNode,e};var Q4={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:B,findFiberByHostInstance:o2,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pn.isDisabled&&Pn.supportsFiber)try{za=Pn.inject(Q4),dt=Pn}catch{}}return kl.createRoot=function(e,t){if(!d(e))throw Error(r(299));var a=!1,l="",n=qr,i=Br,u=Zr,h=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=f3(e,1,!1,null,null,a,l,n,i,u,h,null),e[U2]=t.current,t5(e.nodeType===8?e.parentNode:e),new b5(t)},kl.hydrateRoot=function(e,t,a){if(!d(e))throw Error(r(299));var l=!1,n="",i=qr,u=Br,h=Zr,f=null,C=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(f=a.unstable_transitionCallbacks),a.formState!==void 0&&(C=a.formState)),t=f3(e,1,!0,t,a??null,l,n,i,u,h,f,C),t.context=y3(null),a=t.current,l=pt(),n=Z1(l),n.callback=null,j1(a,n,l),t.current.lanes=l,Aa(t,l),e1(t),e[U2]=t.current,t5(e),new In(t)},kl.version="19.0.0",kl}var T3;function s6(){if(T3)return m5.exports;T3=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(s){console.error(s)}}return o(),m5.exports=i6(),m5.exports}var o6=s6();/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r6=new Set(["children","localName","ref","style","className"]),O3=new WeakMap,U3=(o,s,c,r,d)=>{const y=d==null?void 0:d[s];y===void 0?(o[s]=c,c==null&&s in HTMLElement.prototype&&o.removeAttribute(s)):c!==r&&((v,A,k)=>{let w=O3.get(v);w===void 0&&O3.set(v,w=new Map);let O=w.get(A);k!==void 0?O===void 0?(w.set(A,O={handleEvent:k}),v.addEventListener(A,O)):O.handleEvent=k:O!==void 0&&(w.delete(A),v.removeEventListener(A,O))})(o,y,c)},Ze=({react:o,tagName:s,elementClass:c,events:r,displayName:d})=>{const y=new Set(Object.keys(r??{})),v=o.forwardRef((A,k)=>{const w=o.useRef(new Map),O=o.useRef(null),$={},J={};for(const[G,le]of Object.entries(A))r6.has(G)?$[G==="className"?"class":G]=le:y.has(G)||G in c.prototype?J[G]=le:$[G]=le;return o.useLayoutEffect(()=>{if(O.current===null)return;const G=new Map;for(const le in J)U3(O.current,le,A[le],w.current.get(le),r),w.current.delete(le),G.set(le,A[le]);for(const[le,at]of w.current)U3(O.current,le,void 0,at,r);w.current=G}),o.useLayoutEffect(()=>{var G;(G=O.current)==null||G.removeAttribute("defer-hydration")},[]),$.suppressHydrationWarning=!0,o.createElement(s,{...$,ref:o.useCallback(G=>{O.current=G,typeof k=="function"?k(G):k!==null&&(k.current=G)},[k])})});return v.displayName=d??c.name,v};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ei=globalThis,T5=ei.ShadowRoot&&(ei.ShadyCSS===void 0||ei.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,O5=Symbol(),V3=new WeakMap;let W3=class{constructor(s,c,r){if(this._$cssResult$=!0,r!==O5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=s,this.t=c}get styleSheet(){let s=this.o;const c=this.t;if(T5&&s===void 0){const r=c!==void 0&&c.length===1;r&&(s=V3.get(c)),s===void 0&&((this.o=s=new CSSStyleSheet).replaceSync(this.cssText),r&&V3.set(c,s))}return s}toString(){return this.cssText}};const c6=o=>new W3(typeof o=="string"?o:o+"",void 0,O5),Le=(o,...s)=>{const c=o.length===1?o[0]:s.reduce((r,d,y)=>r+(v=>{if(v._$cssResult$===!0)return v.cssText;if(typeof v=="number")return v;throw Error("Value passed to 'css' function must be a 'css' function result: "+v+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(d)+o[y+1],o[0]);return new W3(c,o,O5)},u6=(o,s)=>{if(T5)o.adoptedStyleSheets=s.map(c=>c instanceof CSSStyleSheet?c:c.styleSheet);else for(const c of s){const r=document.createElement("style"),d=ei.litNonce;d!==void 0&&r.setAttribute("nonce",d),r.textContent=c.cssText,o.appendChild(r)}},$3=T5?o=>o:o=>o instanceof CSSStyleSheet?(s=>{let c="";for(const r of s.cssRules)c+=r.cssText;return c6(c)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:d6,defineProperty:h6,getOwnPropertyDescriptor:f6,getOwnPropertyNames:y6,getOwnPropertySymbols:v6,getPrototypeOf:g6}=Object,n2=globalThis,N3=n2.trustedTypes,p6=N3?N3.emptyScript:"",S5=n2.reactiveElementPolyfillSupport,Dl=(o,s)=>o,ti={toAttribute(o,s){switch(s){case Boolean:o=o?p6:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,s){let c=o;switch(s){case Boolean:c=o!==null;break;case Number:c=o===null?null:Number(o);break;case Object:case Array:try{c=JSON.parse(o)}catch{c=null}}return c}},U5=(o,s)=>!d6(o,s),R3={attribute:!0,type:String,converter:ti,reflect:!1,hasChanged:U5};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),n2.litPropertyMetadata??(n2.litPropertyMetadata=new WeakMap);let xa=class extends HTMLElement{static addInitializer(s){this._$Ei(),(this.l??(this.l=[])).push(s)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(s,c=R3){if(c.state&&(c.attribute=!1),this._$Ei(),this.elementProperties.set(s,c),!c.noAccessor){const r=Symbol(),d=this.getPropertyDescriptor(s,r,c);d!==void 0&&h6(this.prototype,s,d)}}static getPropertyDescriptor(s,c,r){const{get:d,set:y}=f6(this.prototype,s)??{get(){return this[c]},set(v){this[c]=v}};return{get(){return d==null?void 0:d.call(this)},set(v){const A=d==null?void 0:d.call(this);y.call(this,v),this.requestUpdate(s,A,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(s){return this.elementProperties.get(s)??R3}static _$Ei(){if(this.hasOwnProperty(Dl("elementProperties")))return;const s=g6(this);s.finalize(),s.l!==void 0&&(this.l=[...s.l]),this.elementProperties=new Map(s.elementProperties)}static finalize(){if(this.hasOwnProperty(Dl("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Dl("properties"))){const c=this.properties,r=[...y6(c),...v6(c)];for(const d of r)this.createProperty(d,c[d])}const s=this[Symbol.metadata];if(s!==null){const c=litPropertyMetadata.get(s);if(c!==void 0)for(const[r,d]of c)this.elementProperties.set(r,d)}this._$Eh=new Map;for(const[c,r]of this.elementProperties){const d=this._$Eu(c,r);d!==void 0&&this._$Eh.set(d,c)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(s){const c=[];if(Array.isArray(s)){const r=new Set(s.flat(1/0).reverse());for(const d of r)c.unshift($3(d))}else s!==void 0&&c.push($3(s));return c}static _$Eu(s,c){const r=c.attribute;return r===!1?void 0:typeof r=="string"?r:typeof s=="string"?s.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var s;this._$ES=new Promise(c=>this.enableUpdating=c),this._$AL=new Map,this._$E_(),this.requestUpdate(),(s=this.constructor.l)==null||s.forEach(c=>c(this))}addController(s){var c;(this._$EO??(this._$EO=new Set)).add(s),this.renderRoot!==void 0&&this.isConnected&&((c=s.hostConnected)==null||c.call(s))}removeController(s){var c;(c=this._$EO)==null||c.delete(s)}_$E_(){const s=new Map,c=this.constructor.elementProperties;for(const r of c.keys())this.hasOwnProperty(r)&&(s.set(r,this[r]),delete this[r]);s.size>0&&(this._$Ep=s)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u6(s,this.constructor.elementStyles),s}connectedCallback(){var s;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(s=this._$EO)==null||s.forEach(c=>{var r;return(r=c.hostConnected)==null?void 0:r.call(c)})}enableUpdating(s){}disconnectedCallback(){var s;(s=this._$EO)==null||s.forEach(c=>{var r;return(r=c.hostDisconnected)==null?void 0:r.call(c)})}attributeChangedCallback(s,c,r){this._$AK(s,r)}_$EC(s,c){var y;const r=this.constructor.elementProperties.get(s),d=this.constructor._$Eu(s,r);if(d!==void 0&&r.reflect===!0){const v=(((y=r.converter)==null?void 0:y.toAttribute)!==void 0?r.converter:ti).toAttribute(c,r.type);this._$Em=s,v==null?this.removeAttribute(d):this.setAttribute(d,v),this._$Em=null}}_$AK(s,c){var y;const r=this.constructor,d=r._$Eh.get(s);if(d!==void 0&&this._$Em!==d){const v=r.getPropertyOptions(d),A=typeof v.converter=="function"?{fromAttribute:v.converter}:((y=v.converter)==null?void 0:y.fromAttribute)!==void 0?v.converter:ti;this._$Em=d,this[d]=A.fromAttribute(c,v.type),this._$Em=null}}requestUpdate(s,c,r){if(s!==void 0){if(r??(r=this.constructor.getPropertyOptions(s)),!(r.hasChanged??U5)(this[s],c))return;this.P(s,c,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(s,c,r){this._$AL.has(s)||this._$AL.set(s,c),r.reflect===!0&&this._$Em!==s&&(this._$Ej??(this._$Ej=new Set)).add(s)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(c){Promise.reject(c)}const s=this.scheduleUpdate();return s!=null&&await s,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[y,v]of this._$Ep)this[y]=v;this._$Ep=void 0}const d=this.constructor.elementProperties;if(d.size>0)for(const[y,v]of d)v.wrapped!==!0||this._$AL.has(y)||this[y]===void 0||this.P(y,this[y],v)}let s=!1;const c=this._$AL;try{s=this.shouldUpdate(c),s?(this.willUpdate(c),(r=this._$EO)==null||r.forEach(d=>{var y;return(y=d.hostUpdate)==null?void 0:y.call(d)}),this.update(c)):this._$EU()}catch(d){throw s=!1,this._$EU(),d}s&&this._$AE(c)}willUpdate(s){}_$AE(s){var c;(c=this._$EO)==null||c.forEach(r=>{var d;return(d=r.hostUpdated)==null?void 0:d.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(s)),this.updated(s)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(s){return!0}update(s){this._$Ej&&(this._$Ej=this._$Ej.forEach(c=>this._$EC(c,this[c]))),this._$EU()}updated(s){}firstUpdated(s){}};xa.elementStyles=[],xa.shadowRootOptions={mode:"open"},xa[Dl("elementProperties")]=new Map,xa[Dl("finalized")]=new Map,S5==null||S5({ReactiveElement:xa}),(n2.reactiveElementVersions??(n2.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ll=globalThis,ai=Ll.trustedTypes,q3=ai?ai.createPolicy("lit-html",{createHTML:o=>o}):void 0,I3="$lit$",l2=`lit$${Math.random().toFixed(9).slice(2)}$`,P3="?"+l2,b6=`<${P3}>`,D2=document,Hl=()=>D2.createComment(""),Tl=o=>o===null||typeof o!="object"&&typeof o!="function",V5=Array.isArray,C6=o=>V5(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",E5=`[ 	
\f\r]`,Sl=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B3=/-->/g,Z3=/>/g,M2=RegExp(`>|${E5}(?:([^\\s"'>=/]+)(${E5}*=${E5}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),j3=/'/g,G3=/"/g,e0=/^(?:script|style|textarea|title)$/i,_6=o=>(s,...c)=>({_$litType$:o,strings:s,values:c}),L=_6(1),wa=Symbol.for("lit-noChange"),Ue=Symbol.for("lit-nothing"),Y3=new WeakMap,A2=D2.createTreeWalker(D2,129);function t0(o,s){if(!V5(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return q3!==void 0?q3.createHTML(s):s}const m6=(o,s)=>{const c=o.length-1,r=[];let d,y=s===2?"<svg>":s===3?"<math>":"",v=Sl;for(let A=0;A<c;A++){const k=o[A];let w,O,$=-1,J=0;for(;J<k.length&&(v.lastIndex=J,O=v.exec(k),O!==null);)J=v.lastIndex,v===Sl?O[1]==="!--"?v=B3:O[1]!==void 0?v=Z3:O[2]!==void 0?(e0.test(O[2])&&(d=RegExp("</"+O[2],"g")),v=M2):O[3]!==void 0&&(v=M2):v===M2?O[0]===">"?(v=d??Sl,$=-1):O[1]===void 0?$=-2:($=v.lastIndex-O[2].length,w=O[1],v=O[3]===void 0?M2:O[3]==='"'?G3:j3):v===G3||v===j3?v=M2:v===B3||v===Z3?v=Sl:(v=M2,d=void 0);const G=v===M2&&o[A+1].startsWith("/>")?" ":"";y+=v===Sl?k+b6:$>=0?(r.push(w),k.slice(0,$)+I3+k.slice($)+l2+G):k+l2+($===-2?A:G)}return[t0(o,y+(o[c]||"<?>")+(s===2?"</svg>":s===3?"</math>":"")),r]};let A5=class a0{constructor({strings:s,_$litType$:c},r){let d;this.parts=[];let y=0,v=0;const A=s.length-1,k=this.parts,[w,O]=m6(s,c);if(this.el=a0.createElement(w,r),A2.currentNode=this.el.content,c===2||c===3){const $=this.el.content.firstChild;$.replaceWith(...$.childNodes)}for(;(d=A2.nextNode())!==null&&k.length<A;){if(d.nodeType===1){if(d.hasAttributes())for(const $ of d.getAttributeNames())if($.endsWith(I3)){const J=O[v++],G=d.getAttribute($).split(l2),le=/([.?@])?(.*)/.exec(J);k.push({type:1,index:y,name:le[2],strings:G,ctor:le[1]==="."?w6:le[1]==="?"?k6:le[1]==="@"?S6:ni}),d.removeAttribute($)}else $.startsWith(l2)&&(k.push({type:6,index:y}),d.removeAttribute($));if(e0.test(d.tagName)){const $=d.textContent.split(l2),J=$.length-1;if(J>0){d.textContent=ai?ai.emptyScript:"";for(let G=0;G<J;G++)d.append($[G],Hl()),A2.nextNode(),k.push({type:2,index:++y});d.append($[J],Hl())}}}else if(d.nodeType===8)if(d.data===P3)k.push({type:2,index:y});else{let $=-1;for(;($=d.data.indexOf(l2,$+1))!==-1;)k.push({type:7,index:y}),$+=l2.length-1}y++}}static createElement(s,c){const r=D2.createElement("template");return r.innerHTML=s,r}};function ka(o,s,c=o,r){var v,A;if(s===wa)return s;let d=r!==void 0?(v=c._$Co)==null?void 0:v[r]:c._$Cl;const y=Tl(s)?void 0:s._$litDirective$;return(d==null?void 0:d.constructor)!==y&&((A=d==null?void 0:d._$AO)==null||A.call(d,!1),y===void 0?d=void 0:(d=new y(o),d._$AT(o,c,r)),r!==void 0?(c._$Co??(c._$Co=[]))[r]=d:c._$Cl=d),d!==void 0&&(s=ka(o,d._$AS(o,s.values),d,r)),s}let x6=class{constructor(s,c){this._$AV=[],this._$AN=void 0,this._$AD=s,this._$AM=c}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(s){const{el:{content:c},parts:r}=this._$AD,d=((s==null?void 0:s.creationScope)??D2).importNode(c,!0);A2.currentNode=d;let y=A2.nextNode(),v=0,A=0,k=r[0];for(;k!==void 0;){if(v===k.index){let w;k.type===2?w=new $5(y,y.nextSibling,this,s):k.type===1?w=new k.ctor(y,k.name,k.strings,this,s):k.type===6&&(w=new E6(y,this,s)),this._$AV.push(w),k=r[++A]}v!==(k==null?void 0:k.index)&&(y=A2.nextNode(),v++)}return A2.currentNode=D2,d}p(s){let c=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(s,r,c),c+=r.strings.length-2):r._$AI(s[c])),c++}},$5=class l0{get _$AU(){var s;return((s=this._$AM)==null?void 0:s._$AU)??this._$Cv}constructor(s,c,r,d){this.type=2,this._$AH=Ue,this._$AN=void 0,this._$AA=s,this._$AB=c,this._$AM=r,this.options=d,this._$Cv=(d==null?void 0:d.isConnected)??!0}get parentNode(){let s=this._$AA.parentNode;const c=this._$AM;return c!==void 0&&(s==null?void 0:s.nodeType)===11&&(s=c.parentNode),s}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(s,c=this){s=ka(this,s,c),Tl(s)?s===Ue||s==null||s===""?(this._$AH!==Ue&&this._$AR(),this._$AH=Ue):s!==this._$AH&&s!==wa&&this._(s):s._$litType$!==void 0?this.$(s):s.nodeType!==void 0?this.T(s):C6(s)?this.k(s):this._(s)}O(s){return this._$AA.parentNode.insertBefore(s,this._$AB)}T(s){this._$AH!==s&&(this._$AR(),this._$AH=this.O(s))}_(s){this._$AH!==Ue&&Tl(this._$AH)?this._$AA.nextSibling.data=s:this.T(D2.createTextNode(s)),this._$AH=s}$(s){var y;const{values:c,_$litType$:r}=s,d=typeof r=="number"?this._$AC(s):(r.el===void 0&&(r.el=A5.createElement(t0(r.h,r.h[0]),this.options)),r);if(((y=this._$AH)==null?void 0:y._$AD)===d)this._$AH.p(c);else{const v=new x6(d,this),A=v.u(this.options);v.p(c),this.T(A),this._$AH=v}}_$AC(s){let c=Y3.get(s.strings);return c===void 0&&Y3.set(s.strings,c=new A5(s)),c}k(s){V5(this._$AH)||(this._$AH=[],this._$AR());const c=this._$AH;let r,d=0;for(const y of s)d===c.length?c.push(r=new l0(this.O(Hl()),this.O(Hl()),this,this.options)):r=c[d],r._$AI(y),d++;d<c.length&&(this._$AR(r&&r._$AB.nextSibling,d),c.length=d)}_$AR(s=this._$AA.nextSibling,c){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,c);s&&s!==this._$AB;){const d=s.nextSibling;s.remove(),s=d}}setConnected(s){var c;this._$AM===void 0&&(this._$Cv=s,(c=this._$AP)==null||c.call(this,s))}},ni=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(s,c,r,d,y){this.type=1,this._$AH=Ue,this._$AN=void 0,this.element=s,this.name=c,this._$AM=d,this.options=y,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Ue}_$AI(s,c=this,r,d){const y=this.strings;let v=!1;if(y===void 0)s=ka(this,s,c,0),v=!Tl(s)||s!==this._$AH&&s!==wa,v&&(this._$AH=s);else{const A=s;let k,w;for(s=y[0],k=0;k<y.length-1;k++)w=ka(this,A[r+k],c,k),w===wa&&(w=this._$AH[k]),v||(v=!Tl(w)||w!==this._$AH[k]),w===Ue?s=Ue:s!==Ue&&(s+=(w??"")+y[k+1]),this._$AH[k]=w}v&&!d&&this.j(s)}j(s){s===Ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,s??"")}},w6=class extends ni{constructor(){super(...arguments),this.type=3}j(s){this.element[this.name]=s===Ue?void 0:s}},k6=class extends ni{constructor(){super(...arguments),this.type=4}j(s){this.element.toggleAttribute(this.name,!!s&&s!==Ue)}},S6=class extends ni{constructor(s,c,r,d,y){super(s,c,r,d,y),this.type=5}_$AI(s,c=this){if((s=ka(this,s,c,0)??Ue)===wa)return;const r=this._$AH,d=s===Ue&&r!==Ue||s.capture!==r.capture||s.once!==r.once||s.passive!==r.passive,y=s!==Ue&&(r===Ue||d);d&&this.element.removeEventListener(this.name,this,r),y&&this.element.addEventListener(this.name,this,s),this._$AH=s}handleEvent(s){var c;typeof this._$AH=="function"?this._$AH.call(((c=this.options)==null?void 0:c.host)??this.element,s):this._$AH.handleEvent(s)}},E6=class{constructor(s,c,r){this.element=s,this.type=6,this._$AN=void 0,this._$AM=c,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(s){ka(this,s)}};const z5=Ll.litHtmlPolyfillSupport;z5==null||z5(A5,$5),(Ll.litHtmlVersions??(Ll.litHtmlVersions=[])).push("3.2.1");const z6=(o,s,c)=>{const r=(c==null?void 0:c.renderBefore)??s;let d=r._$litPart$;if(d===void 0){const y=(c==null?void 0:c.renderBefore)??null;r._$litPart$=d=new $5(s.insertBefore(Hl(),y),y,void 0,c??{})}return d._$AI(o),d};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let fe=class extends xa{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var c;const s=super.createRenderRoot();return(c=this.renderOptions).renderBefore??(c.renderBefore=s.firstChild),s}update(s){const c=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(s),this._$Do=z6(c,this.renderRoot,this.renderOptions)}connectedCallback(){var s;super.connectedCallback(),(s=this._$Do)==null||s.setConnected(!0)}disconnectedCallback(){var s;super.disconnectedCallback(),(s=this._$Do)==null||s.setConnected(!1)}render(){return wa}};var F3;fe._$litElement$=!0,fe.finalized=!0,(F3=globalThis.litElementHydrateSupport)==null||F3.call(globalThis,{LitElement:fe});const M5=globalThis.litElementPolyfillSupport;M5==null||M5({LitElement:fe});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M6={attribute:!0,type:String,converter:ti,reflect:!1,hasChanged:U5},A6=(o=M6,s,c)=>{const{kind:r,metadata:d}=c;let y=globalThis.litPropertyMetadata.get(d);if(y===void 0&&globalThis.litPropertyMetadata.set(d,y=new Map),y.set(c.name,o),r==="accessor"){const{name:v}=c;return{set(A){const k=s.get.call(this);s.set.call(this,A),this.requestUpdate(v,k,o)},init(A){return A!==void 0&&this.P(v,void 0,o),A}}}if(r==="setter"){const{name:v}=c;return function(A){const k=this[v];s.call(this,A),this.requestUpdate(v,k,o)}}throw Error("Unsupported decorator location: "+r)};function b(o){return(s,c)=>typeof c=="object"?A6(o,s,c):((r,d,y)=>{const v=d.hasOwnProperty(y);return d.constructor.createProperty(y,v?{...r,wrapped:!0}:r),v?Object.getOwnPropertyDescriptor(d,y):void 0})(o,s,c)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function S1(o){return b({...o,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=o=>o??Ue;/*!
   * New York State Design System (v1.4.0)
   * Description: A design system for New York State's digital products.
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
 */const D6=Le`
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
`;var L6=Object.defineProperty,H6=Object.getOwnPropertyDescriptor,bt=(o,s,c,r)=>{for(var d=r>1?void 0:r?H6(s,c):s,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=(r?v(s,c,d):v(d))||d);return r&&d&&L6(s,c,d),d};let T6=0;var El;const rt=(El=class extends fe{constructor(){super(...arguments),this.id="",this.heading="",this.icon="",this.dismissible=!1,this.duration=0,this.text="",this.primaryAction="",this.secondaryAction="",this.primaryLabel="Learn more",this.secondaryLabel="Dismiss",this._alertClosed=!1,this._slotHasContent=!0,this._type="base",this._timeoutId=null}get type(){return this._type}set type(o){this._type=El.VALID_TYPES.includes(o)?o:"base"}get ariaAttributes(){const o=this.type==="danger"||this.type==="emergency"?"alert":this.type==="success"?"status":"region",s=o==="region"?`${this.type} alert`:"";return{role:o,ariaLabel:s}}connectedCallback(){super.connectedCallback(),this.id||(this.id=this._generateUniqueId()),this.duration>0&&(this._timeoutId=setTimeout(()=>{this._closeAlert()},this.duration))}disconnectedCallback(){this._timeoutId&&clearTimeout(this._timeoutId),super.disconnectedCallback()}firstUpdated(){this._checkSlotContent()}_generateUniqueId(){return`nys-alert-${Date.now()}-${T6++}`}_getIconName(){return this.icon?this.icon:this._checkAltNaming()}_checkAltNaming(){return this.type==="success"?"check_circle":this.type==="base"?"info":this.type==="danger"?"error":this.type==="emergency"?"emergency_home":this.type}_closeAlert(){this._alertClosed=!0,this.dispatchEvent(new CustomEvent("nys-alertClosed",{detail:{type:this.type,label:this.heading},bubbles:!0,composed:!0}))}async _checkSlotContent(){var o;const s=(o=this.shadowRoot)==null?void 0:o.querySelector("slot");if(s){const c=s.assignedNodes({flatten:!0}).filter(r=>{var d;return r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&((d=r.textContent)==null?void 0:d.trim())});await Promise.resolve(),this._slotHasContent=c.length>0}else await Promise.resolve(),this._slotHasContent=!1}render(){var o,s;const{role:c,ariaLabel:r}=this.ariaAttributes;return L`
      ${this._alertClosed?"":L` <div
            id=${this.id}
            class="nys-alert__container ${this._slotHasContent||((o=this.text)==null?void 0:o.trim().length)>0?"":"nys-alert--centered"}"
            role=${c}
            aria-label=${de(r.trim()!==""?r:void 0)}
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
              ${this._slotHasContent?L`<slot></slot>`:((s=this.text)==null?void 0:s.trim().length)>0?L`<p class="nys-alert__text">${this.text}</p>`:""}
              ${this.primaryAction||this.secondaryAction?L`<div class="nys-alert__actions">
                    ${this.primaryAction?L`<a
                          href=${de(this.primaryAction||void 0)}
                          class="nys-alert__action nys-alert__primary"
                        >
                          ${this.primaryLabel}
                        </a>`:""}
                    ${this.secondaryAction?L`<a
                          href=${de(this.secondaryAction||void 0)}
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
                  ariaLabel="close button"
                  .onClick=${()=>this._closeAlert()}
                ></nys-button>`:""}
          </div>`}
    `}},El.styles=D6,El.VALID_TYPES=["base","info","success","warning","danger","emergency"],El);bt([b({type:String})],rt.prototype,"id",2);bt([b({type:String})],rt.prototype,"heading",2);bt([b({type:String})],rt.prototype,"icon",2);bt([b({type:Boolean,reflect:!0})],rt.prototype,"dismissible",2);bt([b({type:Number,reflect:!0})],rt.prototype,"duration",2);bt([b({type:String})],rt.prototype,"text",2);bt([b({type:String})],rt.prototype,"primaryAction",2);bt([b({type:String})],rt.prototype,"secondaryAction",2);bt([b({type:String})],rt.prototype,"primaryLabel",2);bt([b({type:String})],rt.prototype,"secondaryLabel",2);bt([S1()],rt.prototype,"_alertClosed",2);bt([S1()],rt.prototype,"_slotHasContent",2);bt([b({reflect:!0})],rt.prototype,"type",1);let n0=rt;customElements.get("nys-alert")||customElements.define("nys-alert",n0);const O6=Le`
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
`;var U6=Object.defineProperty,V6=Object.getOwnPropertyDescriptor,E1=(o,s,c,r)=>{for(var d=r>1?void 0:r?V6(s,c):s,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=(r?v(s,c,d):v(d))||d);return r&&d&&U6(s,c,d),d};let $6=0;var zl;const t1=(zl=class extends fe{constructor(){super(...arguments),this.id="",this.label="",this.image="",this.initials="",this.icon="",this.color="#555",this.lazy=!1,this._shape="circle",this._slotHasContent=!0}get shape(){return this._shape}set shape(o){this._shape=zl.VALID_SHAPES.includes(o)?o:"circle",this.requestUpdate("shape")}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-avatar-${Date.now()}-${$6++}`)}firstUpdated(){this._checkSlotContent()}async _checkSlotContent(){var o;const s=(o=this.shadowRoot)==null?void 0:o.querySelector("slot");if(!s){this._slotHasContent=!1;return}await Promise.resolve();const c=s.assignedNodes({flatten:!0}).filter(r=>{var d;return r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&((d=r.textContent)==null?void 0:d.trim())});this._slotHasContent=c.length>0}render(){var o,s,c,r;return L`
      <label class="nys-avatar" id=${this.id}>
        <div class="nys-avatar__content">
          <div
            part="nys-avatar"
            class="nys-avatar__component"
            style="background-color: ${((o=this.color)==null?void 0:o.length)>0?this.color:"#555"};"
            role=${de(this.image?void 0:"img")}
            aria-label=${de(this.image?void 0:this.label?this.label:"avatar")}
          >
            ${((s=this.image)==null?void 0:s.length)>0?L`<img
                  part="nys-avatar__image"
                  class="nys-avatar__image"
                  src=${this.image}
                  alt=${this.label||"avatar"}
                  loading=${this.lazy?"lazy":"eager"}
                />`:((c=this.initials)==null?void 0:c.length)>0?L`<span
                    part="nys-avatar__initials"
                    class="nys-avatar__initials"
                    aria-hidden="true"
                    >${this.initials}</span
                  >`:this._slotHasContent?L`<div part="nys-avatar__icon">
                      <slot></slot>
                    </div>`:L`<div part="nys-avatar__icon">
                      <nys-icon
                        label="nys-avatar__icon"
                        name=${((r=this.icon)==null?void 0:r.length)>0?this.icon:"account_circle"}
                        size="xl"
                      ></nys-icon>
                    </div>`}
          </div>
        </div>
      </label>
    `}},zl.styles=O6,zl.VALID_SHAPES=["square","rounded","circle"],zl);E1([b({type:String})],t1.prototype,"id",2);E1([b({type:String})],t1.prototype,"label",2);E1([b({type:String})],t1.prototype,"image",2);E1([b({type:String})],t1.prototype,"initials",2);E1([b({type:String})],t1.prototype,"icon",2);E1([b({type:String})],t1.prototype,"color",2);E1([b({type:Boolean,reflect:!0})],t1.prototype,"lazy",2);E1([b({reflect:!0})],t1.prototype,"shape",1);E1([S1()],t1.prototype,"_slotHasContent",2);let i0=t1;customElements.get("nys-avatar")||customElements.define("nys-avatar",i0);const N6=Le`
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
`;var R6=Object.defineProperty,N5=(o,s,c,r)=>{for(var d=void 0,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=v(s,c,d)||d);return d&&R6(s,c,d),d};const s0=class extends fe{constructor(){super(),this.position="right",this.visible=!1,this.isMobile=!1,this._handleScroll=this._handleScroll.bind(this),this._handleResize=this._handleResize.bind(this),this.mediaQuery=window.matchMedia("(max-width: 480px)")}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this._handleScroll),this.mediaQuery.addEventListener("change",this._handleResize),this._handleResize()}disconnectedCallback(){window.removeEventListener("scroll",this._handleScroll),this.mediaQuery.removeEventListener("change",this._handleResize),super.disconnectedCallback()}_handleScroll(){const s=window.innerHeight*1.5;this.visible=window.scrollY>s}_scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}_handleResize(){this.isMobile=this.mediaQuery.matches}render(){const s=["nys-backtotop",this.position,this.visible?"visible":""].filter(Boolean).join(" ");return L`<nys-button
      id="nys-backtotop"
      prefixIcon="chevron_up"
      variant="outline"
      label="Back To Top"
      class="${s}"
      .onClick=${this._scrollToTop}
      ?circle=${this.isMobile}
    ></nys-button>`}};s0.styles=N6;let ii=s0;N5([b({type:String})],ii.prototype,"position");N5([b({type:Boolean,reflect:!0})],ii.prototype,"visible");N5([S1()],ii.prototype,"isMobile");customElements.get("nys-backtotop")||customElements.define("nys-backtotop",ii);const q6=Le`
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
`;var B6=Object.defineProperty,Z6=Object.getOwnPropertyDescriptor,Ve=(o,s,c,r)=>{for(var d=r>1?void 0:r?Z6(s,c):s,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=(r?v(s,c,d):v(d))||d);return r&&d&&B6(s,c,d),d};let j6=0;var Ut;const He=(Ut=class extends fe{constructor(){super(),this.id="",this.name="",this._size="md",this.fullWidth=!1,this._variant="filled",this.inverted=!1,this.label="",this.ariaLabel="",this.prefixIcon="",this.suffixIcon="",this.circle=!1,this.icon="",this.disabled=!1,this.form="",this.value="",this._type="button",this.onClick=()=>{},this.href="",this._target="_self",this._internals=this.attachInternals()}get size(){return this._size}set size(o){this._size=Ut.VALID_SIZES.includes(o)?o:"md"}get variant(){return this._variant}set variant(o){this._variant=Ut.VALID_VARIANTS.includes(o)?o:"filled"}get type(){return this._type}set type(o){this._type=Ut.VALID_TYPES.includes(o)?o:"button"}get target(){return this._target}set target(o){this._target=Ut.VALID_TARGETS.includes(o)?o:"_self"}connectedCallback(){super.connectedCallback(),this.id||(this.id=this._generateUniqueId())}_generateUniqueId(){return`nys-button-${Date.now()}-${j6++}`}_manageFormAction(o){typeof this.onClick=="function"&&this.onClick(o);const s=this._internals.form;if(s)switch(this.type){case"submit":s.requestSubmit();break;case"reset":s.reset();break}}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this.dispatchEvent(new Event("nys-blur"))}_handleClick(o){if(this.disabled){o.preventDefault();return}this._manageFormAction(o),this.dispatchEvent(new Event("nys-click"))}_handleKeydown(o){(o.code==="Space"||o.code==="Enter"||o.key===" "||o.key==="Enter")&&(o.preventDefault(),this.disabled||this._manageFormAction(o))}render(){return L`
      ${this.href?L`
            <div class="nys-button__linkwrapper">
              <a
                class="nys-button"
                id=${de(this.id)}
                name=${de(this.name?this.name:void 0)}
                ?disabled=${this.disabled}
                aria-disabled="${this.disabled?"true":"false"}"
                form=${de(this.form?this.form:void 0)}
                value=${de(this.value?this.value:void 0)}
                href=${this.href}
                target=${this.target}
                aria-label=${this.ariaLabel||this.label||(this.circle?this.icon:null)||"button"}
                @click=${this._handleClick}
                @focus="${this._handleFocus}"
                @blur="${this._handleBlur}"
              >
                ${this.prefixIcon&&this.variant!=="text"?L`<slot name="prefix-icon">
                      <nys-icon size="16" name=${this.prefixIcon}></nys-icon>
                    </slot>`:""}
                ${this.label&&!this.circle?L`<label class="nys-button__text">${this.label}</label>`:""}
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
              id=${de(this.id)}
              name=${de(this.name?this.name:void 0)}
              ?disabled=${this.disabled}
              form=${de(this.form?this.form:void 0)}
              value=${de(this.value?this.value:void 0)}
              type=${this.type}
              aria-label=${this.ariaLabel||this.label||(this.circle?this.icon:null)||"button"}
              @click=${this._handleClick}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
              @keydown="${this._handleKeydown}"
            >
              ${this.prefixIcon&&this.variant!=="text"?L`<slot name="prefix-icon">
                    <nys-icon size="16" name=${this.prefixIcon}></nys-icon>
                  </slot>`:""}
              ${this.label&&!this.circle?L`<label class="nys-button__text">${this.label}</label>`:""}
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
    `}},Ut.VALID_SIZES=["sm","md","lg"],Ut.VALID_VARIANTS=["filled","outline","ghost","text"],Ut.VALID_TYPES=["submit","reset","button"],Ut.VALID_TARGETS=["_self","_blank","_parent","_top","framename"],Ut.styles=q6,Ut.formAssociated=!0,Ut);Ve([b({type:String})],He.prototype,"id",2);Ve([b({type:String,reflect:!0})],He.prototype,"name",2);Ve([b({reflect:!0})],He.prototype,"size",1);Ve([b({type:Boolean,reflect:!0})],He.prototype,"fullWidth",2);Ve([b({reflect:!0})],He.prototype,"variant",1);Ve([b({type:Boolean,reflect:!0})],He.prototype,"inverted",2);Ve([b({type:String})],He.prototype,"label",2);Ve([b({type:String})],He.prototype,"ariaLabel",2);Ve([b({type:String})],He.prototype,"prefixIcon",2);Ve([b({type:String})],He.prototype,"suffixIcon",2);Ve([b({type:Boolean,reflect:!0})],He.prototype,"circle",2);Ve([b({type:String})],He.prototype,"icon",2);Ve([b({type:Boolean,reflect:!0})],He.prototype,"disabled",2);Ve([b({type:String})],He.prototype,"form",2);Ve([b({type:String})],He.prototype,"value",2);Ve([b({reflect:!0})],He.prototype,"type",1);Ve([b({type:Function})],He.prototype,"onClick",2);Ve([b({type:String})],He.prototype,"href",2);Ve([b({reflect:!0})],He.prototype,"target",1);let o0=He;customElements.get("nys-button")||customElements.define("nys-button",o0);const r0=Le`
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
`;var G6=Object.defineProperty,Y6=Object.getOwnPropertyDescriptor,a1=(o,s,c,r)=>{for(var d=r>1?void 0:r?Y6(s,c):s,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=(r?v(s,c,d):v(d))||d);return r&&d&&G6(s,c,d),d};let X6=0;var ga;const jt=(ga=class extends fe{constructor(){super(),this.id="",this.name="",this.required=!1,this.optional=!1,this.showError=!1,this.errorMessage="",this.label="",this.description="",this.tile=!1,this._size="md",this._internals=this.attachInternals()}get size(){return this._size}set size(o){this._size=ga.VALID_SIZES.includes(o)?o:"md"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-checkbox-${Date.now()}-${X6++}`),this.addEventListener("nys-change",this._handleCheckboxChange),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("nys-change",this._handleCheckboxChange),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setGroupExist(),this.updateCheckboxSize(),this.updateCheckboxTile(),this.updateCheckboxShowError()}updated(o){o.has("required")&&this.required&&this._setupCheckboxRequired(),o.has("size")&&this.updateCheckboxSize(),o.has("tile")&&this.updateCheckboxTile(),o.has("showError")&&this.updateCheckboxShowError()}_setGroupExist(){this.querySelectorAll("nys-checkbox").forEach(o=>{o.groupExist=!0})}async _handleInvalid(o){o.preventDefault(),this.showError=!0,this._manageCheckboxRequired();const s=this.querySelector("nys-checkbox"),c=s?await s.getInputElement():null;if(c){const r=this._internals.form;r?Array.from(r.elements).find(d=>{if(d.tagName.toLowerCase()==="nys-checkboxgroup"){if(Array.from(this.querySelectorAll("nys-checkbox")).filter(y=>y.checked).length===0)return d}else return typeof d.checkValidity=="function"&&!d.checkValidity()})===this&&c.focus():c.focus()}}async _setupCheckboxRequired(){const o=this.querySelector("nys-checkbox"),s=this.errorMessage||"This field is required",c=o?await o.getInputElement():null;this._internals.setValidity({valueMissing:!0},s,c||this)}_handleCheckboxChange(o){const s=o,{name:c}=s.detail,r=Array.from(this.querySelectorAll("nys-checkbox")).filter(d=>d.checked).map(d=>d.value);this.name=c,this._internals.setFormValue(r.join(", ")),this._manageCheckboxRequired()}async _manageCheckboxRequired(){if(this.required){const o=this.errorMessage||"Please select at least one option.",s=this.querySelector("nys-checkbox"),c=s?await s.getInputElement():null;let r=!1;this.querySelectorAll("nys-checkbox").forEach(d=>{d.checked&&(r=!0)}),r?(this._internals.setValidity({}),this.showError=!1):(this._internals.setValidity({valueMissing:!0},o,c||this),this.showError=!0)}}updateCheckboxSize(){this.querySelectorAll("nys-checkbox").forEach(o=>{o.setAttribute("size",this.size)})}updateCheckboxTile(){this.querySelectorAll("nys-checkbox").forEach(o=>{this.tile?o.toggleAttribute("tile",!0):o.removeAttribute("tile")})}updateCheckboxShowError(){this.querySelectorAll("nys-checkbox").forEach(o=>{this.showError?o.setAttribute("showError",""):o.removeAttribute("showError")})}render(){return L` <div class="nys-checkboxgroup" role="group">
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
    </div>`}},ga.VALID_SIZES=["sm","md"],ga.styles=r0,ga.formAssociated=!0,ga);a1([b({type:String})],jt.prototype,"id",2);a1([b({type:String,reflect:!0})],jt.prototype,"name",2);a1([b({type:Boolean,reflect:!0})],jt.prototype,"required",2);a1([b({type:Boolean,reflect:!0})],jt.prototype,"optional",2);a1([b({type:Boolean,reflect:!0})],jt.prototype,"showError",2);a1([b({type:String})],jt.prototype,"errorMessage",2);a1([b({type:String})],jt.prototype,"label",2);a1([b({type:String})],jt.prototype,"description",2);a1([b({type:Boolean,reflect:!0})],jt.prototype,"tile",2);a1([b({reflect:!0})],jt.prototype,"size",1);let c0=jt;customElements.get("nys-checkboxgroup")||customElements.define("nys-checkboxgroup",c0);var Q6=Object.defineProperty,K6=Object.getOwnPropertyDescriptor,Ct=(o,s,c,r)=>{for(var d=r>1?void 0:r?K6(s,c):s,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=(r?v(s,c,d):v(d))||d);return r&&d&&Q6(s,c,d),d};let J6=0;var pa;const ct=(pa=class extends fe{constructor(){super(),this.checked=!1,this.disabled=!1,this.required=!1,this.label="",this.description="",this.id="",this.name="",this.value="",this.showError=!1,this.errorMessage="",this.groupExist=!1,this.tile=!1,this._size="md",this._internals=this.attachInternals()}get size(){return this._size}set size(o){this._size=pa.VALID_SIZES.includes(o)?o:"md"}async getInputElement(){var o;return await this.updateComplete,((o=this.shadowRoot)==null?void 0:o.querySelector("input"))||null}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-checkbox-${Date.now()}-${J6++}`),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue(),this._manageRequire()}formResetCallback(){this.checked=!1}_setValue(){this.groupExist||this._internals.setFormValue(this.checked?this.value:null)}_manageRequire(){var o;const s=(o=this.shadowRoot)==null?void 0:o.querySelector("input"),c=this.errorMessage||"This field is required";s&&(this.required&&!this.checked?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},c,s)):this._internals.setValidity({}))}_setValidityMessage(o=""){var s,c;const r=(s=this.shadowRoot)==null?void 0:s.querySelector("input");r&&(this.showError=!!o,(c=this.errorMessage)!=null&&c.trim()&&o!==""&&(o=this.errorMessage),this._internals.setValidity(o?{customError:!0}:{},o,r))}_validate(){var o;const s=(o=this.shadowRoot)==null?void 0:o.querySelector("input");if(!s)return;const c=s.validity;let r="";c.valueMissing&&(r="This field is required"),this._setValidityMessage(r)}checkValidity(){var o;if(this.required&&!this.checked)return!1;const s=(o=this.shadowRoot)==null?void 0:o.querySelector("input");return s?s.checkValidity():!0}_handleInvalid(o){var s;o.preventDefault(),this.showError=!0,this._validate();const c=(s=this.shadowRoot)==null?void 0:s.querySelector("input");if(c){const r=this._internals.form;r?Array.from(r.elements).find(d=>typeof d.checkValidity=="function"&&!d.checkValidity())===this&&c.focus():c.focus()}}_emitChangeEvent(){this.dispatchEvent(new CustomEvent("nys-change",{detail:{checked:this.checked,name:this.name,value:this.value},bubbles:!0,composed:!0}))}_handleChange(o){const{checked:s}=o.target;this.checked=s,this.groupExist||this._internals.setFormValue(this.checked?this.value:null),this._validate(),this._emitChangeEvent()}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this.dispatchEvent(new Event("nys-blur"))}async _handleKeydown(o){o.code==="Space"&&(o.preventDefault(),this.disabled||(this.checked=!this.checked,this._internals.setFormValue(this.checked?this.value:null),await this.updateComplete,this._validate(),this._emitChangeEvent()))}render(){var o;return L`
      <label class="nys-checkbox">
        <div class="nys-checkbox__checkboxwrapper">
          <input
            id="${this.id}"
            class="nys-checkbox__checkbox"
            type="checkbox"
            name="${de(this.name?this.name:void 0)}"
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
          ${this.checked?L`<nys-icon
                for="${this.id}"
                name="check"
                size="${this.size==="md"?"4xl":this.size==="sm"?"2xl":"xl"}"
                class="nys-checkbox__icon"
              ></nys-icon>`:""}
        </div>
        ${this.label&&L` <div class="nys-checkbox__text">
          <div class="nys-checkbox__requiredwrapper">
            <label for=${this.id} class="nys-checkbox__label"
              >${this.label}</label
            >
            ${this.required?L`<label class="nys-checkbox__required">*</label>`:""}
          </div>
          <label for=${this.id} class="nys-checkbox__description">
            <slot name="description">${this.description}</slot>
          </label>
        </div>`}
      </label>
      ${((o=this.parentElement)==null?void 0:o.tagName.toLowerCase())!=="nys-checkboxgroup"?L`<nys-errormessage
            id="single-error-message"
            ?showError=${this.showError}
            errorMessage=${this._internals.validationMessage||this.errorMessage}
            .showDivider=${!this.tile}
          ></nys-errormessage>`:""}
    `}},pa.VALID_SIZES=["sm","md"],pa.styles=r0,pa.formAssociated=!0,pa);Ct([b({type:Boolean,reflect:!0})],ct.prototype,"checked",2);Ct([b({type:Boolean,reflect:!0})],ct.prototype,"disabled",2);Ct([b({type:Boolean,reflect:!0})],ct.prototype,"required",2);Ct([b({type:String})],ct.prototype,"label",2);Ct([b({type:String})],ct.prototype,"description",2);Ct([b({type:String})],ct.prototype,"id",2);Ct([b({type:String,reflect:!0})],ct.prototype,"name",2);Ct([b({type:String})],ct.prototype,"value",2);Ct([b({type:Boolean,reflect:!0})],ct.prototype,"showError",2);Ct([b({type:String})],ct.prototype,"errorMessage",2);Ct([b({type:Boolean})],ct.prototype,"groupExist",2);Ct([b({type:Boolean,reflect:!0})],ct.prototype,"tile",2);Ct([b({reflect:!0})],ct.prototype,"size",1);let u0=ct;customElements.get("nys-checkbox")||customElements.define("nys-checkbox",u0);const F6=Le`
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
`;var W6=Object.defineProperty,R5=(o,s,c,r)=>{for(var d=void 0,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=v(s,c,d)||d);return d&&W6(s,c,d),d};const D5=class extends fe{constructor(){super(),this.showError=!1,this.errorMessage="",this.showDivider=!1,this._internals=this.attachInternals()}render(){return L`${this.showError?L`<div class="nys-errormessage" ?showDivider=${this.showDivider}>
          <nys-icon name="error" size="2xl"></nys-icon>
          ${this._internals.validationMessage||this.errorMessage}
        </div>`:""}`}};D5.styles=F6,D5.formAssociated=!0;let si=D5;R5([b({type:Boolean})],si.prototype,"showError");R5([b({type:String})],si.prototype,"errorMessage");R5([b({type:Boolean,reflect:!0})],si.prototype,"showDivider");customElements.get("nys-errormessage")||customElements.define("nys-errormessage",si);const I6={png:[137,80,78,71,13,10,26,10],jpg:o=>o.length>=4&&o[0]===255&&o[1]===216&&o[2]===255&&[224,225,219].includes(o[3]),pdf:o=>{let s=0;for(;s<o.length&&[32,10,13].includes(o[s]);)s++;return o[s]===37&&o[s+1]===80&&o[s+2]===68&&o[s+3]===70},gif:[71,73,70,56],mp4:o=>{const s=[102,116,121,112];for(let c=0;c<=o.length-s.length;c++){let r=!0;for(let d=0;d<s.length;d++)if(o[c+d]!==s[d]){r=!1;break}if(r)return!0}return!1}};function P6(o,s){if(typeof s=="function")return s(o);if(o.length<s.length)return!1;for(let c=0;c<s.length;c++)if(o[c]!==s[c])return!1;return!0}const X3={"image/png":["png"],"image/jpeg":["jpg"],"image/jpg":["jpg"],"image/*":["png","jpg","gif"],"video/mp4":["mp4"],"video/*":["mp4"],"application/pdf":["pdf"],".pdf":["pdf"],".jpg":["jpg"],".jpeg":["jpg"],".png":["png"],".mp4":["mp4"]};async function ec(o,s){if(!s||s.trim()==="")return!0;const c=await o.slice(0,32).arrayBuffer(),r=new Uint8Array(c),d=s.toLowerCase().split(",").map(v=>v.trim()),y=new Set;for(const v of d)if(X3[v])for(const A of X3[v])y.add(A);d.some(v=>v.startsWith("image/"))&&(y.add("png"),y.add("jpg")),d.some(v=>v.startsWith("video/"))&&y.add("mp4");for(const v of y){const A=I6[v];if(A&&P6(r,A))return!0}return y.size===0}const tc=Le`
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
`,ac=Le`
  :host {
    /* Global fileitem Styles */
    --_nys-fileitem-items-radius: var(--nys-radius-md, 4px);
    --_nys-fileitem-items-padding: var(--nys-space-100, 8px)
      var(--nys-space-200, 16px);
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
    width: 100%;
    font-family: var(--_nys-fileitem-font-family);
    font-size: var(--_nys-fileitem-font-size);
    font-style: normal;
    font-weight: var(--_nys-fileitem-font-weight-400);
    line-height: var(--_nys-fileitem-line-height);
    letter-spacing: var(--_nys-fileitem-letterspacing);
  }

  .file-item p {
    margin: 0;
  }

  .error-msg {
    color: var(--_nys-fileitem-error-color);
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
`;var lc=Object.defineProperty,oi=(o,s,c,r)=>{for(var d=void 0,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=v(s,c,d)||d);return d&&lc(s,c,d),d};const d0=class extends fe{constructor(){super(...arguments),this.filename="",this.status="pending",this.progress=0,this.errorMessage=""}_handleRemove(){this.dispatchEvent(new CustomEvent("nys-fileRemove",{detail:{filename:this.filename},bubbles:!0,composed:!0}))}truncateFilename(s){const c=s.lastIndexOf(".");if(c===-1)return s.length>30?s.slice(0,30)+"...":s;const r=s.slice(c),d=s.slice(0,c),y=30;if(d.length<=y)return s;const v=d.slice(0,y-3),A=d.slice(-3);return`${v}...${A}${r}`}render(){return L`
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
            ${this.errorMessage?L`<p
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
        ${this.status==="processing"?L`<div
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
    `}};d0.styles=ac;let Ol=d0;oi([b({type:String})],Ol.prototype,"filename");oi([b({type:String})],Ol.prototype,"status");oi([b({type:Number})],Ol.prototype,"progress");oi([b({type:String})],Ol.prototype,"errorMessage");customElements.define("nys-fileitem",Ol);var nc=Object.defineProperty,_t=(o,s,c,r)=>{for(var d=void 0,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=v(s,c,d)||d);return d&&nc(s,c,d),d};let ic=0;const L5=class extends fe{constructor(){super(),this.id="",this.name="",this.label="",this.description="",this.multiple=!1,this.accept="",this.disabled=!1,this.required=!1,this.optional=!1,this.showError=!1,this.errorMessage="",this.dropzone=!1,this.width="full",this._selectedFiles=[],this._dragActive=!1,this._internals=this.attachInternals()}get _isDropDisabled(){return this.disabled||!this.multiple&&this._selectedFiles.length>0}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-fileinput-${Date.now()}-${ic++}`),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}_setValue(){var s;if(this.multiple){const c=this._selectedFiles.map(r=>r.file);if(c.length>0){const r=new FormData;c.forEach(d=>{r.append(this.name,d)}),this._internals.setFormValue(r)}else this._internals.setFormValue(null)}else{const c=((s=this._selectedFiles[0])==null?void 0:s.file)||null;this._internals.setFormValue(c)}this._manageRequire()}_manageRequire(){var s;const c=(s=this.shadowRoot)==null?void 0:s.querySelector("input");if(!c)return;const r=this.errorMessage||"Please upload a file.";this.required&&this._selectedFiles.length==0?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},r,c)):(this._internals.ariaRequired="false",this._internals.setValidity({}))}_setValidityMessage(s=""){var c,r;const d=(c=this.shadowRoot)==null?void 0:c.querySelector("input");d&&(this.showError=s===(this.errorMessage||"Please upload a file."),(r=this.errorMessage)!=null&&r.trim()&&s!==""&&(s=this.errorMessage),this._internals.setValidity(s?{customError:!0}:{},s,d))}_validate(){const s=this._selectedFiles.some(d=>d.status==="error"),c=this.required&&this._selectedFiles.length===0;let r="";c?r=this.errorMessage||"Please upload a file.":s&&(r="One or more files are invalid."),this._setValidityMessage(r)}async _saveSelectedFiles(s){if(this._selectedFiles.some(r=>r.file.name==s.name)||!this.multiple&&this._selectedFiles.length>=1)return;const c={file:s,progress:0,status:"pending"};this._selectedFiles.push(c),await this._processFile(c),this._setValue(),this._validate()}async _processFile(s){s.status="processing";try{if(!await ec(s.file,this.accept)){s.status="error",s.errorMsg="File format does not match expected type.",this.requestUpdate();return}const c=new FileReader;c.onprogress=r=>{if(r.lengthComputable){const d=Math.round(r.loaded*100/r.total);s.progress=d,this.requestUpdate()}},c.onload=()=>{s.progress=100,s.status="done",this.requestUpdate()},c.onerror=()=>{s.status="error",s.errorMsg="Failed to load file.",this.requestUpdate()},c.readAsArrayBuffer(s.file)}catch{s.status="error",s.errorMsg="Error validating file.",this.requestUpdate()}}_dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("nys-change",{detail:{files:this._selectedFiles},bubbles:!0,composed:!0}))}_openFileDialog(){const s=this.renderRoot.querySelector(".hidden-file-input");s==null||s.click()}_handleFileChange(s){const c=s.target,r=c.files;(r?Array.from(r):[]).map(d=>{this._saveSelectedFiles(d)}),c.value="",this.requestUpdate(),this._dispatchChangeEvent()}_handleFileRemove(s){const c=s.detail.filename;this._selectedFiles=this._selectedFiles.filter(r=>r.file.name!==c),this._setValue(),this._validate(),this.requestUpdate(),this._dispatchChangeEvent()}_onDragOver(s){this.disabled||(s.stopPropagation(),s.preventDefault(),this._dragActive||(this._dragActive=!0,this.requestUpdate()))}_onDragLeave(s){this.disabled||(s.stopPropagation(),s.preventDefault(),s.currentTarget===s.target&&(this._dragActive=!1,this.requestUpdate()))}_onDrop(s){var c;if(this.disabled)return;s.preventDefault(),this._dragActive=!1,this.requestUpdate();const r=(c=s.dataTransfer)==null?void 0:c.files;if(!r)return;const d=Array.from(r);this.multiple?d.forEach(y=>{this._saveSelectedFiles(y)}):this._saveSelectedFiles(d[0]),this.requestUpdate(),this._dispatchChangeEvent()}_handleInvalid(s){var c;s.preventDefault(),this._validate();const r=(c=this.shadowRoot)==null?void 0:c.querySelector("input");if(r){const d=this._internals.form;d?Array.from(d.elements).find(y=>typeof y.checkValidity=="function"&&!y.checkValidity())===this&&r.focus():r.focus()}}render(){return L`<div
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

      ${this.dropzone?L`<div
            class="nys-fileinput__dropzone
            ${this._dragActive?"drag-active":""}
            ${this._isDropDisabled?"disabled":""}
            ${this.showError&&!this._isDropDisabled?"error":""}"
            @click=${this._isDropDisabled?null:this._openFileDialog}
            @keydown=${s=>!this._isDropDisabled&&(s.key==="Enter"||s.key===" ")&&this._openFileDialog()}
            @dragover=${this._isDropDisabled?null:this._onDragOver}
            @dragleave=${this._isDropDisabled?null:this._onDragLeave}
            @drop=${this._isDropDisabled?null:this._onDrop}
          >
            ${this._dragActive?L`<p>Drop file to upload</p>`:L` <nys-button
                    id="file-btn"
                    name="file-btn"
                    label=${this.multiple?"Choose files":"Choose file"}
                    variant="outline"
                    ?disabled=${this._isDropDisabled}
                    .onClick=${s=>{s.stopPropagation(),this._openFileDialog()}}
                  ></nys-button>
                  <p>or drag here</p>`}
          </div>`:L`<nys-button
            id="file-btn"
            name="file-btn"
            label=${this.multiple?"Choose files":"Choose file"}
            variant="outline"
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
              ${this._selectedFiles.map(s=>L`<li>
                    <nys-fileitem
                      filename=${s.file.name}
                      status=${s.status}
                      progress=${s.progress}
                      errorMessage=${s.errorMsg||""}
                    ></nys-fileitem>
                  </li>`)}
            </ul>
          `:null}
    </div>`}};L5.styles=tc,L5.formAssociated=!0;let tt=L5;_t([b({type:String})],tt.prototype,"id");_t([b({type:String,reflect:!0})],tt.prototype,"name");_t([b({type:String})],tt.prototype,"label");_t([b({type:String})],tt.prototype,"description");_t([b({type:Boolean})],tt.prototype,"multiple");_t([b({type:String})],tt.prototype,"accept");_t([b({type:Boolean,reflect:!0})],tt.prototype,"disabled");_t([b({type:Boolean,reflect:!0})],tt.prototype,"required");_t([b({type:Boolean,reflect:!0})],tt.prototype,"optional");_t([b({type:Boolean,reflect:!0})],tt.prototype,"showError");_t([b({type:String})],tt.prototype,"errorMessage");_t([b({type:Boolean})],tt.prototype,"dropzone");_t([b({type:String,reflect:!0})],tt.prototype,"width");customElements.get("nys-fileinput")||customElements.define("nys-fileinput",tt);const sc={account_circle:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
</svg>`},oc=Le`
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
`;var rc=Object.defineProperty,cc=Object.getOwnPropertyDescriptor,Sa=(o,s,c,r)=>{for(var d=r>1?void 0:r?cc(s,c):s,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=(r?v(s,c,d):v(d))||d);return r&&d&&rc(s,c,d),d},Ml;const L2=(Ml=class extends fe{constructor(){super(...arguments),this.name="",this.label="",this.rotate="0",this.flip="",this.color="",this._size="sm"}get size(){return this._size}set size(o){this._size=Ml.VALID_TYPES.includes(o)?o:"sm"}getIcon(){const o=sc[this.name];if(!o)return null;const s=new DOMParser().parseFromString(o,"image/svg+xml").documentElement;return s instanceof SVGElement?(s.setAttribute("role","img"),this.label?(s.setAttribute("aria-label",this.label),s.removeAttribute("aria-hidden")):(s.setAttribute("aria-hidden","true"),s.removeAttribute("aria-label")),s.style.rotate=`${this.rotate}deg`,s.style.color=this.color||"currentcolor",s.classList.add(`nys-icon--${this.size}`),s.classList.add("nys-icon--svg"),this.flip&&s.classList.add(`nys-icon--flip-${this.flip}`),s):null}render(){const o=this.getIcon();return o?L`${o}`:null}},Ml.styles=oc,Ml.VALID_TYPES=["2xs","xs","sm","md","lg","xl","2xl","3xl","4xl","12","16","24","32","40","48","64"],Ml);Sa([b({type:String,reflect:!0})],L2.prototype,"name",2);Sa([b({type:String})],L2.prototype,"label",2);Sa([b({type:String})],L2.prototype,"rotate",2);Sa([b({type:String})],L2.prototype,"flip",2);Sa([b({type:String})],L2.prototype,"color",2);Sa([b({reflect:!0})],L2.prototype,"size",1);let uc=L2;customElements.get("nys-icon")||customElements.define("nys-icon",uc);const dc=Le`
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
`;var hc=Object.defineProperty,ri=(o,s,c,r)=>{for(var d=void 0,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=v(s,c,d)||d);return d&&hc(s,c,d),d};const h0=class extends fe{constructor(){super(...arguments),this.id="",this.label="",this.description="",this.flag=""}render(){return L`
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
    `}};h0.styles=dc;let Ul=h0;ri([b({type:String})],Ul.prototype,"id");ri([b({type:String})],Ul.prototype,"label");ri([b({type:String})],Ul.prototype,"description");ri([b({type:String})],Ul.prototype,"flag");customElements.get("nys-label")||customElements.define("nys-label",Ul);const f0=Le`
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
`;var fc=Object.defineProperty,yc=Object.getOwnPropertyDescriptor,Gt=(o,s,c,r)=>{for(var d=r>1?void 0:r?yc(s,c):s,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=(r?v(s,c,d):v(d))||d);return r&&d&&fc(s,c,d),d};let vc=0;var ba;const Vt=(ba=class extends fe{constructor(){super(),this.id="",this.name="",this.required=!1,this.optional=!1,this.showError=!1,this.errorMessage="",this.label="",this.description="",this.selectedValue=null,this._size="md",this.tile=!1,this._internals=this.attachInternals()}get size(){return this._size}set size(o){this._size=ba.VALID_SIZES.includes(o)?o:"md"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-radiogroup-${Date.now()}-${vc++}`),this.addEventListener("nys-change",this._handleRadioButtonChange),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("nys-change",this._handleRadioButtonChange),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._initializeCheckedRadioValue(),this._setValue(),this.setRadioButtonRequire(),this._updateRadioButtonsSize(),this._updateRadioButtonsTile(),this._updateRadioButtonsShowError()}updated(o){(o.has("required")||o.has("selectedValue"))&&this._manageRequire(),o.has("size")&&this._updateRadioButtonsSize(),o.has("tile")&&this._updateRadioButtonsTile(),o.has("showError")&&this._updateRadioButtonsShowError()}formResetCallback(){this.querySelectorAll("nys-radiobutton").forEach(o=>{o.formResetUpdate()})}_setValue(){this._internals.setFormValue(this.selectedValue)}setRadioButtonRequire(){this.querySelectorAll("nys-radiobutton").forEach((o,s)=>{this.required&&s===0&&o.setAttribute("required","required")})}async _manageRequire(){const o=this.errorMessage||"Please select an option.",s=this.querySelector("nys-radiobutton"),c=s?await s.getInputElement():null;c&&(this.required&&!this.selectedValue?this._internals.setValidity({valueMissing:!0},o,c):(this.showError=!1,this._internals.setValidity({},"",c)))}_initializeCheckedRadioValue(){const o=this.querySelector("nys-radiobutton[checked]");o&&(this.selectedValue=o.getAttribute("value"),this._internals.setFormValue(this.selectedValue))}_updateRadioButtonsSize(){this.querySelectorAll("nys-radiobutton").forEach(o=>{o.setAttribute("size",this.size)})}_updateRadioButtonsTile(){this.querySelectorAll("nys-radiobutton").forEach(o=>{this.tile?o.toggleAttribute("tile",!0):o.removeAttribute("tile")})}_updateRadioButtonsShowError(){this.querySelectorAll("nys-radiobutton").forEach(o=>{this.showError?o.setAttribute("showError",""):o.removeAttribute("showError")})}_handleRadioButtonChange(o){const s=o,{name:c,value:r}=s.detail;this.name=c,this.selectedValue=r,this._internals.setFormValue(this.selectedValue)}async _handleInvalid(o){if(o.preventDefault(),this._internals.validity.valueMissing){this.showError=!0,this._manageRequire();const s=this.querySelector("nys-radiobutton"),c=s?await s.getInputElement():null;if(c){const r=this._internals.form;r?Array.from(r.elements).find(d=>{if(d.tagName.toLowerCase()==="nys-radiogroup"){if(!d.querySelector("nys-radiobutton").checkValidity())return d}else return typeof d.checkValidity=="function"&&!d.checkValidity()})===this&&c.focus():c.focus()}}}render(){return L` <div
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
    </div>`}},ba.VALID_SIZES=["sm","md"],ba.styles=f0,ba.formAssociated=!0,ba);Gt([b({type:String})],Vt.prototype,"id",2);Gt([b({type:String,reflect:!0})],Vt.prototype,"name",2);Gt([b({type:Boolean,reflect:!0})],Vt.prototype,"required",2);Gt([b({type:Boolean,reflect:!0})],Vt.prototype,"optional",2);Gt([b({type:Boolean,reflect:!0})],Vt.prototype,"showError",2);Gt([b({type:String})],Vt.prototype,"errorMessage",2);Gt([b({type:String})],Vt.prototype,"label",2);Gt([b({type:String})],Vt.prototype,"description",2);Gt([S1()],Vt.prototype,"selectedValue",2);Gt([b({reflect:!0})],Vt.prototype,"size",1);Gt([b({type:Boolean,reflect:!0})],Vt.prototype,"tile",2);let y0=Vt;customElements.get("nys-radiogroup")||customElements.define("nys-radiogroup",y0);var gc=Object.defineProperty,pc=Object.getOwnPropertyDescriptor,l1=(o,s,c,r)=>{for(var d=r>1?void 0:r?pc(s,c):s,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=(r?v(s,c,d):v(d))||d);return r&&d&&gc(s,c,d),d};let bc=0;var _e;const Yt=(_e=class extends fe{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.required=!1,this.label="",this.description="",this.id="",this.name="",this.value="",this._size="md",this.tile=!1}get size(){return this._size}set size(o){this._size=_e.VALID_SIZES.includes(o)?o:"md"}async getInputElement(){var o;return await this.updateComplete,((o=this.shadowRoot)==null?void 0:o.querySelector("input"))||null}formResetUpdate(){this.checked=!1}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-radiobutton-${Date.now()}-${bc++}`),this.checked&&(_e.buttonGroup[this.name]&&(_e.buttonGroup[this.name].checked=!1,_e.buttonGroup[this.name].requestUpdate()),_e.buttonGroup[this.name]=this)}updated(o){o.has("checked")&&this.checked&&_e.buttonGroup[this.name]!==this&&(_e.buttonGroup[this.name]&&(_e.buttonGroup[this.name].checked=!1,_e.buttonGroup[this.name].requestUpdate()),_e.buttonGroup[this.name]=this)}checkValidity(){var o;if(this.required&&!this.checked)return!1;const s=(o=this.shadowRoot)==null?void 0:o.querySelector("input");return s?s.checkValidity():!0}_emitChangeEvent(){this.dispatchEvent(new CustomEvent("nys-change",{detail:{checked:this.checked,name:this.name,value:this.value},bubbles:!0,composed:!0}))}_handleChange(){this.checked||(_e.buttonGroup[this.name]&&(_e.buttonGroup[this.name].checked=!1,_e.buttonGroup[this.name].requestUpdate()),_e.buttonGroup[this.name]=this,this.checked=!0,this._emitChangeEvent())}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this.dispatchEvent(new Event("nys-blur"))}_handleKeydown(o){o.code==="Space"&&(o.preventDefault(),!this.disabled&&!this.checked&&(_e.buttonGroup[this.name]&&(_e.buttonGroup[this.name].checked=!1,_e.buttonGroup[this.name].requestUpdate()),_e.buttonGroup[this.name]=this,this.checked=!0,this._emitChangeEvent()))}render(){return L`
      <label class="nys-radiobutton">
        <input
          id="${this.id}"
          class="nys-radiobutton__radio"
          type="radio"
          name="${de(this.name?this.name:void 0)}"
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
        ${this.label&&L` <div class="nys-radiobutton__text">
          <label for=${this.id} class="nys-radiobutton__label"
            >${this.label}</label
          >
          <label for=${this.id} class="nys-radiobutton__description">
            <slot name="description">${this.description}</slot>
          </label>
        </div>`}
      </label>
    `}},_e.VALID_SIZES=["sm","md"],_e.buttonGroup={},_e.styles=f0,_e);l1([b({type:Boolean,reflect:!0})],Yt.prototype,"checked",2);l1([b({type:Boolean,reflect:!0})],Yt.prototype,"disabled",2);l1([b({type:Boolean,reflect:!0})],Yt.prototype,"required",2);l1([b({type:String})],Yt.prototype,"label",2);l1([b({type:String})],Yt.prototype,"description",2);l1([b({type:String})],Yt.prototype,"id",2);l1([b({type:String,reflect:!0})],Yt.prototype,"name",2);l1([b({type:String})],Yt.prototype,"value",2);l1([b({reflect:!0})],Yt.prototype,"size",1);l1([b({type:Boolean,reflect:!0})],Yt.prototype,"tile",2);let v0=Yt;customElements.get("nys-radiobutton")||customElements.define("nys-radiobutton",v0);const Cc=Le`
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
`;var _c=Object.defineProperty,Vl=(o,s,c,r)=>{for(var d=void 0,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=v(s,c,d)||d);return d&&_c(s,c,d),d};class i2 extends fe{constructor(){super(...arguments),this.disabled=!1,this.selected=!1,this.value="",this.label="",this.hidden=!1}firstUpdated(){var s;const c=(s=this.shadowRoot)==null?void 0:s.querySelector("slot");c&&c.addEventListener("slotchange",()=>{var r;const d=c.assignedNodes({flatten:!0});d.length>0&&(this.label=((r=d[0].textContent)==null?void 0:r.trim())||"")})}render(){return L`
      <option
        ?disabled=${this.disabled}
        ?selected=${this.selected}
        value=${this.value}
        label=${this.label}
        ?hidden=${this.hidden}
      >
        <slot>${this.label}</slot>
      </option>
    `}}Vl([b({type:Boolean,reflect:!0})],i2.prototype,"disabled");Vl([b({type:Boolean,reflect:!0})],i2.prototype,"selected");Vl([b({type:String})],i2.prototype,"value");Vl([b({type:String})],i2.prototype,"label");Vl([b({type:Boolean,reflect:!0})],i2.prototype,"hidden");customElements.define("nys-option",i2);var mc=Object.defineProperty,xc=Object.getOwnPropertyDescriptor,$t=(o,s,c,r)=>{for(var d=r>1?void 0:r?xc(s,c):s,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=(r?v(s,c,d):v(d))||d);return r&&d&&mc(s,c,d),d};let wc=0;var Ca;const mt=(Ca=class extends fe{constructor(){super(),this.id="",this.name="",this.label="",this.description="",this.value="",this.disabled=!1,this.required=!1,this.optional=!1,this.form="",this.showError=!1,this.errorMessage="",this._width="md",this._hasUserInteracted=!1,this._internals=this.attachInternals()}get width(){return this._width}set width(o){this._width=Ca.VALID_WIDTHS.includes(o)?o:"full"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-select-${Date.now()}-${wc++}`),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}formResetCallback(){this.value=""}_handleSlotChange(){var o,s;const c=(o=this.shadowRoot)==null?void 0:o.querySelector('slot:not([name="description"])'),r=(s=this.shadowRoot)==null?void 0:s.querySelector("select");!c||!r||(r.querySelectorAll("option:not([hidden])").forEach(d=>d.remove()),c.assignedElements({flatten:!0}).forEach(d=>{var y;if(d instanceof i2){const v=document.createElement("option");v.value=d.value,v.textContent=d.label||((y=d.textContent)==null?void 0:y.trim())||"",v.disabled=d.disabled,v.selected=d.selected,r.appendChild(v)}}))}_setValue(){this._internals.setFormValue(this.value),this._manageRequire()}_manageRequire(){var o;const s=(o=this.shadowRoot)==null?void 0:o.querySelector("select");if(!s)return;const c=this.errorMessage||"Please select an option.";this.required&&!this.value?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},c,s)):(this._internals.ariaRequired="false",this._internals.setValidity({}),this._hasUserInteracted=!1)}_setValidityMessage(o=""){var s,c;const r=(s=this.shadowRoot)==null?void 0:s.querySelector("select");r&&(this.showError=!!o,(c=this.errorMessage)!=null&&c.trim()&&o!==""&&(o=this.errorMessage),this._internals.setValidity(o?{customError:!0}:{},o,r))}_validate(){var o;const s=(o=this.shadowRoot)==null?void 0:o.querySelector("select");if(!s)return;let c=s.validationMessage;this._manageRequire(),this._setValidityMessage(c)}checkValidity(){var o;const s=(o=this.shadowRoot)==null?void 0:o.querySelector("select");return s?s.checkValidity():!0}_handleInvalid(o){var s;o.preventDefault(),this._hasUserInteracted=!0,this._validate(),this.showError=!0;const c=(s=this.shadowRoot)==null?void 0:s.querySelector("select");if(c){const r=this._internals.form;r?Array.from(r.elements).find(d=>typeof d.checkValidity=="function"&&!d.checkValidity())===this&&c.focus():c.focus()}}_handleChange(o){const s=o.target;this.value=s.value,this._internals.setFormValue(this.value),this._hasUserInteracted&&this._validate(),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this._hasUserInteracted||(this._hasUserInteracted=!0),this._validate(),this.dispatchEvent(new Event("nys-blur"))}updated(o){var s;if(super.updated(o),o.has("value")){const c=(s=this.shadowRoot)==null?void 0:s.querySelector("select");c&&(c.value=this.value)}}render(){return L`
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
    `}},Ca.VALID_WIDTHS=["sm","md","lg","full"],Ca.styles=Cc,Ca.formAssociated=!0,Ca);$t([b({type:String})],mt.prototype,"id",2);$t([b({type:String,reflect:!0})],mt.prototype,"name",2);$t([b({type:String})],mt.prototype,"label",2);$t([b({type:String})],mt.prototype,"description",2);$t([b({type:String})],mt.prototype,"value",2);$t([b({type:Boolean,reflect:!0})],mt.prototype,"disabled",2);$t([b({type:Boolean,reflect:!0})],mt.prototype,"required",2);$t([b({type:Boolean,reflect:!0})],mt.prototype,"optional",2);$t([b({type:String})],mt.prototype,"form",2);$t([b({type:Boolean,reflect:!0})],mt.prototype,"showError",2);$t([b({type:String})],mt.prototype,"errorMessage",2);$t([b({reflect:!0})],mt.prototype,"width",1);let g0=mt;customElements.get("nys-select")||customElements.define("nys-select",g0);const kc=Le`
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
`;var Sc=Object.defineProperty,p0=(o,s,c,r)=>{for(var d=void 0,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=v(s,c,d)||d);return d&&Sc(s,c,d),d};const b0=class extends fe{constructor(){super(),this.id="",this.href=""}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-skipnav-${Date.now()}`)}_handleFocus(){var s;const c=(s=this.shadowRoot)==null?void 0:s.querySelector(".nys-skipnav__link");c==null||c.classList.add("show")}_handleBlur(){var s;const c=(s=this.shadowRoot)==null?void 0:s.querySelector(".nys-skipnav__link");c==null||c.classList.remove("show")}_handleClick(){const s=(this.href||"#main-content").replace("#",""),c=document.getElementById(s);c&&(c.setAttribute("tabindex","-1"),c.focus(),c.style.outline="none")}render(){return L`
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
    `}};b0.styles=kc;let ci=b0;p0([b({type:String})],ci.prototype,"id");p0([b({type:String})],ci.prototype,"href");customElements.get("nys-skipnav")||customElements.define("nys-skipnav",ci);const Ec=Le`
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
`;var zc=Object.defineProperty,Mc=Object.getOwnPropertyDescriptor,Qe=(o,s,c,r)=>{for(var d=r>1?void 0:r?Mc(s,c):s,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=(r?v(s,c,d):v(d))||d);return r&&d&&zc(s,c,d),d};let Ac=0;var t2;const je=(t2=class extends fe{constructor(){super(),this.id="",this.name="",this.label="",this.description="",this.placeholder="",this.value="",this.disabled=!1,this.readonly=!1,this.required=!1,this.optional=!1,this.form="",this.maxlength=null,this.width="full",this.rows=4,this._resize="vertical",this.showError=!1,this.errorMessage="",this._hasUserInteracted=!1,this._internals=this.attachInternals()}get resize(){return this._resize}set resize(o){this._resize=t2.VALID_RESIZE.includes(o)?o:"vertical"}async updated(o){await Promise.resolve(),o.has("width")&&(this.width=t2.VALID_WIDTHS.includes(this.width)?this.width:"full"),o.has("rows")&&(this.rows=this.rows??4)}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-textarea-${Date.now()}-${Ac++}`),this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}formResetCallback(){this.value=""}_setValue(){this._internals.setFormValue(this.value),this._manageRequire()}_manageRequire(){var o;const s=(o=this.shadowRoot)==null?void 0:o.querySelector("textarea");if(!s)return;const c=this.errorMessage||"This field is required";this.required&&!this.value?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},c,s)):(this._internals.ariaRequired="false",this._internals.setValidity({}),this._hasUserInteracted=!1)}_setValidityMessage(o=""){var s,c;const r=(s=this.shadowRoot)==null?void 0:s.querySelector("textarea");r&&(this.showError=!!o,(c=this.errorMessage)!=null&&c.trim()&&o!==""&&(o=this.errorMessage),this._internals.setValidity(o?{customError:!0}:{},o,r))}_validate(){var o;const s=(o=this.shadowRoot)==null?void 0:o.querySelector("textarea");if(!s)return;let c=s.validationMessage;this._setValidityMessage(c)}checkValidity(){var o;const s=(o=this.shadowRoot)==null?void 0:o.querySelector("textarea");return s?s.checkValidity():!0}_handleInvalid(o){var s;o.preventDefault(),this._hasUserInteracted=!0,this._validate();const c=(s=this.shadowRoot)==null?void 0:s.querySelector("textarea");if(c){const r=this._internals.form;r?Array.from(r.elements).find(d=>typeof d.checkValidity=="function"&&!d.checkValidity())===this&&c.focus():c.focus()}}_handleInput(o){const s=o.target;this.value=s.value,this._internals.setFormValue(this.value),this._hasUserInteracted&&this._validate(),this.dispatchEvent(new CustomEvent("nys-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this._hasUserInteracted||(this._hasUserInteracted=!0),this._validate(),this.dispatchEvent(new Event("nys-blur"))}_handleSelect(o){const s=o.target;this.value=s.value,this.dispatchEvent(new CustomEvent("nys-select",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleSelectionChange(o){const s=o.target;this.value=s.value,this.dispatchEvent(new CustomEvent("selectionchange",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return L`
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
          aria-disabled=${de(this.disabled?"true":void 0)}
          aria-required=${de(this.required?"true":void 0)}
          placeholder=${de(this.placeholder?this.placeholder:void 0)}
          maxlength=${de(this.maxlength!==""?this.maxlength:void 0)}
          .rows=${this.rows}
          form=${de(this.form||void 0)}
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
    `}},t2.VALID_WIDTHS=["sm","md","lg","full"],t2.VALID_RESIZE=["vertical","none"],t2.styles=Ec,t2.formAssociated=!0,t2);Qe([b({type:String})],je.prototype,"id",2);Qe([b({type:String,reflect:!0})],je.prototype,"name",2);Qe([b({type:String})],je.prototype,"label",2);Qe([b({type:String})],je.prototype,"description",2);Qe([b({type:String})],je.prototype,"placeholder",2);Qe([b({type:String})],je.prototype,"value",2);Qe([b({type:Boolean,reflect:!0})],je.prototype,"disabled",2);Qe([b({type:Boolean,reflect:!0})],je.prototype,"readonly",2);Qe([b({type:Boolean,reflect:!0})],je.prototype,"required",2);Qe([b({type:Boolean,reflect:!0})],je.prototype,"optional",2);Qe([b({type:String})],je.prototype,"form",2);Qe([b({type:Number})],je.prototype,"maxlength",2);Qe([b({reflect:!0})],je.prototype,"width",2);Qe([b({type:Number})],je.prototype,"rows",2);Qe([b({reflect:!0})],je.prototype,"resize",1);Qe([b({type:Boolean,reflect:!0})],je.prototype,"showError",2);Qe([b({type:String})],je.prototype,"errorMessage",2);let C0=je;customElements.get("nys-textarea")||customElements.define("nys-textarea",C0);const Dc=Le`
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
`;var Lc=Object.defineProperty,Hc=Object.getOwnPropertyDescriptor,Ee=(o,s,c,r)=>{for(var d=r>1?void 0:r?Hc(s,c):s,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=(r?v(s,c,d):v(d))||d);return r&&d&&Lc(s,c,d),d};let Tc=0;var a2;const ke=(a2=class extends fe{constructor(){super(),this.id="",this.name="",this._type="text",this.label="",this.description="",this.placeholder="",this.value="",this.disabled=!1,this.readonly=!1,this.required=!1,this.optional=!1,this.form="",this.pattern="",this.maxlength=null,this.width="full",this.step=null,this.min=null,this.max=null,this.showError=!1,this.errorMessage="",this.showPassword=!1,this._originalErrorMessage="",this._hasUserInteracted=!1,this._internals=this.attachInternals()}get type(){return this._type}set type(o){this._type=a2.VALID_TYPES.includes(o)?o:"text"}async updated(o){o.has("width")&&(await Promise.resolve(),this.width=a2.VALID_WIDTHS.includes(this.width)?this.width:"full"),o.has("disabled")&&(this._validateButtonSlot("startButton"),this._validateButtonSlot("endButton"))}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-textinput-${Date.now()}-${Tc++}`),this._originalErrorMessage=this.errorMessage??"",this.addEventListener("invalid",this._handleInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this._handleInvalid)}firstUpdated(){this._setValue()}formResetCallback(){this.value=""}_setValue(){this._internals.setFormValue(this.value),this._manageRequire()}_manageRequire(){var o,s;const c=(o=this.shadowRoot)==null?void 0:o.querySelector("input");if(!c)return;const r=this.errorMessage||"This field is required";this.required&&(!this.value||((s=this.value)==null?void 0:s.trim())==="")?(this._internals.ariaRequired="true",this._internals.setValidity({valueMissing:!0},r,c)):(this._internals.ariaRequired="false",this._internals.setValidity({}),this._hasUserInteracted=!1)}_setValidityMessage(o=""){var s,c;const r=(s=this.shadowRoot)==null?void 0:s.querySelector("input");if(!r)return;this.showError=!!o,(c=this._originalErrorMessage)!=null&&c.trim()&&o!==""?this.errorMessage=this._originalErrorMessage:this.errorMessage=o;const d=o?{customError:!0}:{};this._internals.setValidity(d,this.errorMessage,r)}_validate(){var o;const s=(o=this.shadowRoot)==null?void 0:o.querySelector("input");if(!s)return;const c=s.validity;let r="";c.valueMissing?r="This field is required":c.typeMismatch?r="Invalid format for this type":c.patternMismatch?r="Invalid format":c.tooShort?r=`Value is too short. Minimum length is ${s.minLength}`:c.tooLong?r=`Value is too long. Maximum length is ${s.maxLength}`:c.rangeUnderflow?r=`Value must be at least ${s.min}`:c.rangeOverflow?r=`Value must be at most ${s.max}`:c.stepMismatch?r="Invalid step value":r=s.validationMessage,this._setValidityMessage(r)}checkValidity(){var o;const s=(o=this.shadowRoot)==null?void 0:o.querySelector("input");return s?s.checkValidity():!0}_handleInvalid(o){var s;o.preventDefault(),this._hasUserInteracted=!0,this._validate();const c=(s=this.shadowRoot)==null?void 0:s.querySelector("input");if(c){const r=this._internals.form;r?Array.from(r.elements).find(d=>typeof d.checkValidity=="function"&&!d.checkValidity())===this&&c.focus():c.focus()}}_togglePasswordVisibility(){this.showPassword=!this.showPassword}_handleInput(o){const s=o.target;this.value=s.value,this._internals.setFormValue(this.value),this._hasUserInteracted&&this._validate(),this.dispatchEvent(new CustomEvent("nys-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this._hasUserInteracted||(this._hasUserInteracted=!0),this._validate(),this.dispatchEvent(new Event("nys-blur"))}_validateButtonSlot(o){var s,c;const r=(s=this.shadowRoot)==null?void 0:s.querySelector('slot[name="'+o+'"]'),d=(c=this.shadowRoot)==null?void 0:c.querySelector(".nys-textinput__buttoncontainer");if(!r||!d)return;const y=r.assignedElements();let v=!1;y.forEach(A=>{A instanceof HTMLElement&&A.tagName.toLowerCase()==="nys-button"&&!v?(v=!0,A.setAttribute("size","sm"),A.setAttribute("variant","primary"),this.disabled?A.setAttribute("disabled","true"):A.removeAttribute("disabled")):(console.warn("The '"+o+"' slot only accepts a single <nys-button> element. Removing invalid or extra node:",A),A.remove())}),o==="startButton"?d.classList.toggle("has-start-button",v):o==="endButton"&&d.classList.toggle("has-end-button",v)}render(){return L`
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
              placeholder=${de(this.placeholder?this.placeholder:void 0)}
              pattern=${de(this.pattern?this.pattern:void 0)}
              min=${de(this.min!==""?this.min:void 0)}
              maxlength=${de(this.maxlength!==""?this.maxlength:void 0)}
              step=${de(this.step!==""?this.step:void 0)}
              max=${de(this.max!==""?this.max:void 0)}
              form=${de(this.form?this.form:void 0)}
              @input=${this._handleInput}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
            />
            ${this.type==="password"?L` <nys-button
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
    `}},a2.VALID_TYPES=["email","number","password","search","tel","text","url"],a2.VALID_WIDTHS=["sm","md","lg","full"],a2.styles=Dc,a2.formAssociated=!0,a2);Ee([b({type:String})],ke.prototype,"id",2);Ee([b({type:String,reflect:!0})],ke.prototype,"name",2);Ee([b({reflect:!0})],ke.prototype,"type",1);Ee([b({type:String})],ke.prototype,"label",2);Ee([b({type:String})],ke.prototype,"description",2);Ee([b({type:String})],ke.prototype,"placeholder",2);Ee([b({type:String})],ke.prototype,"value",2);Ee([b({type:Boolean,reflect:!0})],ke.prototype,"disabled",2);Ee([b({type:Boolean,reflect:!0})],ke.prototype,"readonly",2);Ee([b({type:Boolean,reflect:!0})],ke.prototype,"required",2);Ee([b({type:Boolean,reflect:!0})],ke.prototype,"optional",2);Ee([b({type:String})],ke.prototype,"form",2);Ee([b({type:String})],ke.prototype,"pattern",2);Ee([b({type:Number})],ke.prototype,"maxlength",2);Ee([b({reflect:!0})],ke.prototype,"width",2);Ee([b({type:Number})],ke.prototype,"step",2);Ee([b({type:Number})],ke.prototype,"min",2);Ee([b({type:Number})],ke.prototype,"max",2);Ee([b({type:Boolean,reflect:!0})],ke.prototype,"showError",2);Ee([b({type:String})],ke.prototype,"errorMessage",2);Ee([S1()],ke.prototype,"showPassword",2);let _0=ke;customElements.get("nys-textinput")||customElements.define("nys-textinput",_0);const Oc=Le`
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
`;var Uc=Object.defineProperty,Vc=Object.getOwnPropertyDescriptor,n1=(o,s,c,r)=>{for(var d=r>1?void 0:r?Vc(s,c):s,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=(r?v(s,c,d):v(d))||d);return r&&d&&Uc(s,c,d),d};let $c=0;var _a;const Xt=(_a=class extends fe{constructor(){super(),this.id="",this.name="",this.value="",this.checked=!1,this.disabled=!1,this.noIcon=!1,this.label="",this.description="",this._size="md",this.form="",this._internals=this.attachInternals()}get size(){return this._size}set size(o){this._size=_a.VALID_SIZES.includes(o)?o:"md"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-toggle-${Date.now()}-${$c++}`)}updated(o){(o.has("checked")||o.has("value"))&&this._internals.setFormValue(this.checked?this.value:null)}_emitChangeEvent(){this.dispatchEvent(new CustomEvent("nys-change",{detail:{checked:this.checked},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("nys-focus"))}_handleBlur(){this.dispatchEvent(new Event("nys-blur"))}_handleChange(o){const{checked:s}=o.target;this.checked=s,this._emitChangeEvent()}_handleKeyDown(o){!this.disabled&&(o.key===" "||o.key==="Enter")&&(o.preventDefault(),this.checked=!this.checked,this._emitChangeEvent())}render(){return L`
      <label class="nys-toggle">
        <div class="nys-toggle__content">
          <div class="nys-toggle__toggle">
            <input
              id="${this.id}"
              type="checkbox"
              name="${de(this.name?this.name:void 0)}"
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
    `}},_a.VALID_SIZES=["sm","md"],_a.styles=Oc,_a.formAssociated=!0,_a);n1([b({type:String})],Xt.prototype,"id",2);n1([b({type:String,reflect:!0})],Xt.prototype,"name",2);n1([b({type:String})],Xt.prototype,"value",2);n1([b({type:Boolean,reflect:!0})],Xt.prototype,"checked",2);n1([b({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);n1([b({type:Boolean})],Xt.prototype,"noIcon",2);n1([b({type:String})],Xt.prototype,"label",2);n1([b({type:String})],Xt.prototype,"description",2);n1([b({reflect:!0})],Xt.prototype,"size",1);n1([b({type:String})],Xt.prototype,"form",2);let m0=Xt;customElements.get("nys-toggle")||customElements.define("nys-toggle",m0);const Nc=Le`
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
`,Rc=`<svg xmlns="http://www.w3.org/2000/svg" width="91" height="55" viewBox="0 0 91 55" fill="none">
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
</svg>`;var qc=Object.defineProperty,H2=(o,s,c,r)=>{for(var d=void 0,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=v(s,c,d)||d);return d&&qc(s,c,d),d};const x0=class extends fe{constructor(){super(...arguments),this.trustbarVisible=!1,this.searchDropdownVisible=!1,this.languageVisible=!1,this.isSearchFocused=!1,this.hideTranslate=!1,this.hideSearch=!1,this.languages=[["English",""],["Español","es"],["中文","zh"],["繁體中文","zh-traditional"],["Русский","ru"],["יידיש","yi"],["বাংলা","bn"],["한국어","ko"],["Kreyòl Ayisyen","ht"],["Italiano","it"],["العربية","ar"],["Polski","pl"],["Français","fr"],["اردو","ur"]]}_getNysLogo(){return new DOMParser().parseFromString(Rc,"image/svg+xml").documentElement}_toggleTrustbar(){this.trustbarVisible=!this.trustbarVisible,this.trustbarVisible&&(this.languageVisible=!1,this.searchDropdownVisible=!1)}_toggleLanguageList(){this.languageVisible=!this.languageVisible,this.languageVisible&&(this.trustbarVisible=!1,this.searchDropdownVisible=!1)}_toggleSearchDropdown(){this.searchDropdownVisible=!this.searchDropdownVisible,this.searchDropdownVisible&&(this.trustbarVisible=!1,this.languageVisible=!1)}_handleSearchFocus(){this.isSearchFocused=!0,this.trustbarVisible=!1,this.languageVisible=!1}_handleSearchBlur(){this.isSearchFocused=!1}_handleSearchKeyup(s){var c;if(s.key==="Escape"&&(this._handleSearchBlur(),s.target.blur()),s.key==="Enter"){const r=(c=s.target.value)==null?void 0:c.trim();r!==""&&this._handleSearch(r)}}_handleSearchButton(s){var c,r;const d=(r=((c=this.shadowRoot)==null?void 0:c.getElementById(s)).value)==null?void 0:r.trim();d!==""&&this._handleSearch(d)}_handleSearch(s){window.location.href=`https://search.its.ny.gov/search/search.html?btnG=Search&client=default_frontend&output=xml_no_dtd&proxystylesheet=default_frontend&ulang=en&sort=date:D:L:d1&entqr=3&entqrm=0&wc=200&wc_mc=1&oe=UTF-8&ie=UTF-8&ud=1&site=default_collection&q=${s}+inurl:${window.location.hostname}&site=default_collection`}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return L`
      <header class="nys-unavheader">
        <div class="nys-unavheader__trustbarwrapper">
          <div
            class="nys-unavheader__toptrustbar"
            @click="${this._toggleTrustbar}"
            @keydown="${s=>{(s.code==="Enter"||s.code==="Space"||s.key==="Enter"||s.key===" ")&&this._toggleTrustbar()}}"
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
                href="https://www.ny.gov"
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
              ${this.hideTranslate?null:L`<div class="nys-unavheader__translatewrapper">
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
                    ${this.isSearchFocused?null:L`<div class="nys-unavheader--lg nys-unavheader--xl">
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
                      ${this.languages.map(([s,c])=>L`<a
                            class="nys-unavheader__languagelink"
                            target="_self"
                            href="https://${c?c+".":""}${window.location.hostname}"
                            >${s}</a
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
    `}};x0.styles=Nc;let z1=x0;H2([b({type:Boolean})],z1.prototype,"trustbarVisible");H2([b({type:Boolean})],z1.prototype,"searchDropdownVisible");H2([b({type:Boolean})],z1.prototype,"languageVisible");H2([b({type:Boolean})],z1.prototype,"isSearchFocused");H2([b({type:Boolean})],z1.prototype,"hideTranslate");H2([b({type:Boolean})],z1.prototype,"hideSearch");H2([b({type:String,reflect:!0})],z1.prototype,"languages");customElements.get("nys-unavheader")||customElements.define("nys-unavheader",z1);const Bc=Le`
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
`;var Zc=Object.defineProperty,$l=(o,s,c,r)=>{for(var d=void 0,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=v(s,c,d)||d);return d&&Zc(s,c,d),d};const w0=class extends fe{constructor(){super(...arguments),this.appName="",this.agencyName="",this.homepageLink="",this.slotHasContent=!0,this.isMobileMenuOpen=!1}firstUpdated(){var s;const c=(s=this.shadowRoot)==null?void 0:s.querySelector("slot");c==null||c.addEventListener("slotchange",()=>this._handleSlotChange()),this._handleSlotChange()}async _handleSlotChange(){var s,c,r;const d=(s=this.shadowRoot)==null?void 0:s.querySelector("slot");if(!d)return;const y=d==null?void 0:d.assignedNodes({flatten:!0}).filter(k=>k.nodeType===Node.ELEMENT_NODE);await Promise.resolve(),this.slotHasContent=y.length>0;const v=(c=this.shadowRoot)==null?void 0:c.querySelector(".nys-globalheader__content"),A=(r=this.shadowRoot)==null?void 0:r.querySelector(".nys-globalheader__content-mobile");v&&A&&(v.innerHTML="",A.innerHTML="",y.forEach(k=>{if(k.nodeType===Node.ELEMENT_NODE){const w=k.cloneNode(!0),O=k.cloneNode(!0);["script","iframe","object","embed, img"].forEach($=>{w.querySelectorAll($).forEach(J=>J.remove())}),v.appendChild(w),A.appendChild(O),k.remove()}}))}_toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen}render(){var s,c,r,d,y,v,A,k;return L`
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
          ${(s=this.homepageLink)!=null&&s.trim()?L`<a
                class="nys-globalheader__name-container-link"
                href=${(y=this.homepageLink)==null?void 0:y.trim()}
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
                  ${((c=this.appName)==null?void 0:c.trim().length)>0?L`<div
                        class="nys-globalheader__appName nys-globalheader__name"
                      >
                        ${this.appName}
                      </div> `:""}
                  ${((r=this.agencyName)==null?void 0:r.trim().length)>0?L`<div
                        class="nys-globalheader__agencyName nys-globalheader__name ${((d=this.appName)==null?void 0:d.trim().length)>0?"":"main"}"
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
    `}};w0.styles=Bc;let T2=w0;$l([b({type:String})],T2.prototype,"appName");$l([b({type:String})],T2.prototype,"agencyName");$l([b({type:String})],T2.prototype,"homepageLink");$l([S1()],T2.prototype,"slotHasContent");$l([S1()],T2.prototype,"isMobileMenuOpen");customElements.get("nys-globalheader")||customElements.define("nys-globalheader",T2);const jc=Le`
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
`;var Gc=Object.defineProperty,q5=(o,s,c,r)=>{for(var d=void 0,y=o.length-1,v;y>=0;y--)(v=o[y])&&(d=v(s,c,d)||d);return d&&Gc(s,c,d),d};const k0=class extends fe{constructor(){super(...arguments),this.agencyName="",this.homepageLink="",this.slotHasContent=!0}firstUpdated(){var s;const c=(s=this.shadowRoot)==null?void 0:s.querySelector("slot");c==null||c.addEventListener("slotchange",()=>this._handleSlotChange()),this._handleSlotChange()}async _handleSlotChange(){var s,c;const r=(s=this.shadowRoot)==null?void 0:s.querySelector("slot");if(!r)return;const d=r==null?void 0:r.assignedNodes({flatten:!0}).filter(A=>A.nodeType===Node.ELEMENT_NODE);await Promise.resolve(),this.slotHasContent=d.length>0;const y=(c=this.shadowRoot)==null?void 0:c.querySelector(".nys-globalfooter__content"),v=d==null?void 0:d.some(A=>A.tagName==="H4");y&&(y.classList.toggle("columns",v),y.classList.toggle("small",!v),y.innerHTML="",d.forEach(A=>{if(A.nodeType===Node.ELEMENT_NODE){const k=A.cloneNode(!0);["script","iframe","object","embed","img"].forEach(w=>{k.querySelectorAll(w).forEach(O=>O.remove())}),y.appendChild(k),A.remove()}}))}render(){var s,c;return L`
      <footer class="nys-globalfooter">
        <div class="nys-globalfooter__main-container">
          ${(s=this.homepageLink)!=null&&s.trim()?L`<a href=${(c=this.homepageLink)==null?void 0:c.trim()}>
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
    `}};k0.styles=jc;let Nl=k0;q5([b({type:String})],Nl.prototype,"agencyName");q5([b({type:String})],Nl.prototype,"homepageLink");q5([S1()],Nl.prototype,"slotHasContent");customElements.get("nys-globalfooter")||customElements.define("nys-globalfooter",Nl);const Yc=Le`
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
`,Xc=`<svg xmlns="http://www.w3.org/2000/svg" width="91" height="55" viewBox="0 0 91 55" fill="none">
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
</svg>`,S0=class extends fe{_getNysLogo(){return new DOMParser().parseFromString(Xc,"image/svg+xml").documentElement}render(){return L`
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
    `}};S0.styles=Yc;let E0=S0;customElements.get("nys-unavfooter")||customElements.define("nys-unavfooter",E0);const Q3=Ze({react:Be,tagName:"nys-alert",elementClass:n0,events:{onNysAlertClosed:"nys-alertClosed"}});Ze({react:Be,tagName:"nys-avatar",elementClass:i0});const Qc=Ze({react:Be,tagName:"nys-button",elementClass:o0,events:{onNysClick:"nys-click",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),ma=Ze({react:Be,tagName:"nys-checkbox",elementClass:u0,events:{onNysChange:"nys-change",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),Kc=Ze({react:Be,tagName:"nys-checkboxgroup",elementClass:c0}),Jc=Ze({react:Be,tagName:"nys-fileinput",elementClass:tt,events:{onNysFileChange:"nys-change"}}),Fc=Ze({react:Be,tagName:"nys-globalfooter",elementClass:Nl}),Wc=Ze({react:Be,tagName:"nys-globalheader",elementClass:T2}),Al=Ze({react:Be,tagName:"nys-option",elementClass:i2}),K3=Ze({react:Be,tagName:"nys-radiobutton",elementClass:v0,events:{onNysChange:"nys-change",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),Ic=Ze({react:Be,tagName:"nys-radiogroup",elementClass:y0}),Pc=Ze({react:Be,tagName:"nys-select",elementClass:g0,events:{onNysChange:"nys-change",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),eu=Ze({react:Be,tagName:"nys-skipnav",elementClass:ci}),J3=Ze({react:Be,tagName:"nys-textinput",elementClass:_0,events:{onNysInput:"nys-input",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),tu=Ze({react:Be,tagName:"nys-textarea",elementClass:C0,events:{onNysInput:"nys-input",onNysFocus:"nys-focus",onNysBlur:"nys-blur",onNysSelect:"nys-select"}}),au=Ze({react:Be,tagName:"nys-toggle",elementClass:m0,events:{onNysChange:"nys-change",onNysFocus:"nys-focus",onNysBlur:"nys-blur"}}),lu=Ze({react:Be,tagName:"nys-unavfooter",elementClass:E0}),nu=Ze({react:Be,tagName:"nys-unavheader",elementClass:z1});function iu(){const[o,s]=li.useState(null),c=r=>{r.preventDefault();const d=new FormData(r.target),y={};for(const[v,A]of d.entries()){const k=d.getAll(v);k.length>1?y[v]=k.map(w=>w instanceof File?{fileName:w.name,fileType:w.type}:w):y[v]=A instanceof File?{name:A.name,type:A.type,size:A.size}:A}alert(`Form Data:
`+JSON.stringify(y,null,2)),s(y)};return X.jsxs(X.Fragment,{children:[X.jsx(eu,{}),X.jsx(nu,{}),X.jsx(Wc,{appName:"React Demo Form",agencyName:"Office of Information Technology Services"}),X.jsxs("main",{id:"main-content",children:[X.jsx("h1",{className:"appTitle",children:"Vite + React + NYSDS"}),X.jsx(Q3,{type:"info",heading:"NYSDS Components",text:"We make use of form-related NYSDS components in the native HTML form below.",primaryLabel:"Learn more on NYSDS reference site",primaryAction:"https://designsystem.ny.gov/",dismissible:!0}),X.jsxs("form",{id:"myForm",className:"nys-newsletter-form",method:"POST",onSubmit:c,children:[X.jsx(J3,{name:"fullName",label:"Full name",required:!0,onNysBlur:r=>{console.log("nys-blur event received 🔥",r)}}),X.jsx(J3,{name:"email",label:"Email",type:"email",required:!0}),X.jsx(tu,{name:"quote",label:"Enter your favorite quote:",value:"Majorities, of course, start with minorities.",required:!0}),X.jsxs(Pc,{name:"newsletter_topic",label:"Select your preferred newsletter topic",id:"newsletter-topic",required:!0,children:[X.jsx(Al,{value:"government_updates",label:"Government Updates"}),X.jsx(Al,{value:"community_events",label:"Community Events"}),X.jsx(Al,{value:"public_services",label:"Public Services & Resources"}),X.jsx(Al,{value:"transportation_news",label:"Transportation & Infrastructure"}),X.jsx(Al,{value:"environment",label:"Environment & Sustainability"})]}),X.jsx(Jc,{name:"uploadImg",label:"Upload a file",description:"Accepted file types: .jpg, .png, .pdf",accept:"image/png, image/jpeg, image/*,.pdf",multiple:!0,dropzone:!0,required:!0}),X.jsxs(Ic,{label:"How often do you want updates?",description:"These updates will be sent directly to your email.",size:"md",required:!0,children:[X.jsx(K3,{name:"frequency",label:"Weekly",value:"weekly"}),X.jsx(K3,{name:"frequency",label:"Monthly",value:"monthly"})]}),X.jsx(ma,{label:"Subscribe to NYS Government Updates",description:"Get notified via email about important updates and services.",id:"subscribe-checkbox-disabled-checked",name:"subscribe",value:"email-updates",required:!0}),X.jsxs(Kc,{label:"Select your favorite New York landmarks",description:"Choose from the options below",required:!0,children:[X.jsx(ma,{name:"landmarks",label:"Adirondacks",value:"adirondacks"}),X.jsx(ma,{name:"landmarks",value:"finger-lakes",label:"Finger Lakes"}),X.jsx(ma,{name:"landmarks",value:"catskills",label:"Catskills"}),X.jsx(ma,{name:"landmarks",value:"niagara-falls",label:"Niagara Falls"}),X.jsx(ma,{name:"landmarks",value:"coney-island",label:"Coney Island"})]}),X.jsx(au,{label:"Dark Mode",name:"toggle-switch",value:"access",children:X.jsx("p",{slot:"description",children:"Toggle switch is usually NOT recommended for forms (use checkboxes instead)."})}),X.jsx(Qc,{type:"submit",fullWidth:!0,label:"Subscribe"})]}),X.jsx("br",{}),o&&X.jsx(Q3,{type:"success",heading:"Form submitted successfully",text:`${o?`

Submitted Data:
`+JSON.stringify(o,null,2):""}`,dismissible:!0})]}),X.jsx(Fc,{agencyName:"Office of Information Technology Services",children:X.jsxs("ul",{children:[X.jsx("li",{children:X.jsx("a",{href:"https://its.ny.gov",children:"ITS Home"})}),X.jsx("li",{children:X.jsx("a",{href:"https://its.ny.gov/about",children:"About ITS"})})]})}),X.jsx(lu,{})]})}o6.createRoot(document.getElementById("root")).render(X.jsx(li.StrictMode,{children:X.jsx(iu,{})}));
