function vE(r,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function wE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var dc={exports:{}},gs={},fc={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function EE(){if(Yp)return oe;Yp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function v(C){return C===null||typeof C!="object"?null:(C=y&&C[y]||C["@@iterator"],typeof C=="function"?C:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,P={};function I(C,O,ie){this.props=C,this.context=O,this.refs=P,this.updater=ie||R}I.prototype.isReactComponent={},I.prototype.setState=function(C,O){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,O,"setState")},I.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function z(){}z.prototype=I.prototype;function B(C,O,ie){this.props=C,this.context=O,this.refs=P,this.updater=ie||R}var W=B.prototype=new z;W.constructor=B,N(W,I.prototype),W.isPureReactComponent=!0;var Q=Array.isArray,fe=Object.prototype.hasOwnProperty,he={current:null},se={key:!0,ref:!0,__self:!0,__source:!0};function ne(C,O,ie){var le,pe={},ge=null,ke=null;if(O!=null)for(le in O.ref!==void 0&&(ke=O.ref),O.key!==void 0&&(ge=""+O.key),O)fe.call(O,le)&&!se.hasOwnProperty(le)&&(pe[le]=O[le]);var we=arguments.length-2;if(we===1)pe.children=ie;else if(1<we){for(var Ae=Array(we),Ct=0;Ct<we;Ct++)Ae[Ct]=arguments[Ct+2];pe.children=Ae}if(C&&C.defaultProps)for(le in we=C.defaultProps,we)pe[le]===void 0&&(pe[le]=we[le]);return{$$typeof:r,type:C,key:ge,ref:ke,props:pe,_owner:he.current}}function ve(C,O){return{$$typeof:r,type:C.type,key:O,ref:C.ref,props:C.props,_owner:C._owner}}function Se(C){return typeof C=="object"&&C!==null&&C.$$typeof===r}function ye(C){var O={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ie){return O[ie]})}var Me=/\/+/g;function st(C,O){return typeof C=="object"&&C!==null&&C.key!=null?ye(""+C.key):O.toString(36)}function Fe(C,O,ie,le,pe){var ge=typeof C;(ge==="undefined"||ge==="boolean")&&(C=null);var ke=!1;if(C===null)ke=!0;else switch(ge){case"string":case"number":ke=!0;break;case"object":switch(C.$$typeof){case r:case e:ke=!0}}if(ke)return ke=C,pe=pe(ke),C=le===""?"."+st(ke,0):le,Q(pe)?(ie="",C!=null&&(ie=C.replace(Me,"$&/")+"/"),Fe(pe,O,ie,"",function(Ct){return Ct})):pe!=null&&(Se(pe)&&(pe=ve(pe,ie+(!pe.key||ke&&ke.key===pe.key?"":(""+pe.key).replace(Me,"$&/")+"/")+C)),O.push(pe)),1;if(ke=0,le=le===""?".":le+":",Q(C))for(var we=0;we<C.length;we++){ge=C[we];var Ae=le+st(ge,we);ke+=Fe(ge,O,ie,Ae,pe)}else if(Ae=v(C),typeof Ae=="function")for(C=Ae.call(C),we=0;!(ge=C.next()).done;)ge=ge.value,Ae=le+st(ge,we++),ke+=Fe(ge,O,ie,Ae,pe);else if(ge==="object")throw O=String(C),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return ke}function Ve(C,O,ie){if(C==null)return C;var le=[],pe=0;return Fe(C,le,"","",function(ge){return O.call(ie,ge,pe++)}),le}function Be(C){if(C._status===-1){var O=C._result;O=O(),O.then(function(ie){(C._status===0||C._status===-1)&&(C._status=1,C._result=ie)},function(ie){(C._status===0||C._status===-1)&&(C._status=2,C._result=ie)}),C._status===-1&&(C._status=0,C._result=O)}if(C._status===1)return C._result.default;throw C._result}var Ie={current:null},j={transition:null},G={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:j,ReactCurrentOwner:he};function $(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:Ve,forEach:function(C,O,ie){Ve(C,function(){O.apply(this,arguments)},ie)},count:function(C){var O=0;return Ve(C,function(){O++}),O},toArray:function(C){return Ve(C,function(O){return O})||[]},only:function(C){if(!Se(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},oe.Component=I,oe.Fragment=t,oe.Profiler=o,oe.PureComponent=B,oe.StrictMode=s,oe.Suspense=h,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,oe.act=$,oe.cloneElement=function(C,O,ie){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var le=N({},C.props),pe=C.key,ge=C.ref,ke=C._owner;if(O!=null){if(O.ref!==void 0&&(ge=O.ref,ke=he.current),O.key!==void 0&&(pe=""+O.key),C.type&&C.type.defaultProps)var we=C.type.defaultProps;for(Ae in O)fe.call(O,Ae)&&!se.hasOwnProperty(Ae)&&(le[Ae]=O[Ae]===void 0&&we!==void 0?we[Ae]:O[Ae])}var Ae=arguments.length-2;if(Ae===1)le.children=ie;else if(1<Ae){we=Array(Ae);for(var Ct=0;Ct<Ae;Ct++)we[Ct]=arguments[Ct+2];le.children=we}return{$$typeof:r,type:C.type,key:pe,ref:ge,props:le,_owner:ke}},oe.createContext=function(C){return C={$$typeof:c,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:l,_context:C},C.Consumer=C},oe.createElement=ne,oe.createFactory=function(C){var O=ne.bind(null,C);return O.type=C,O},oe.createRef=function(){return{current:null}},oe.forwardRef=function(C){return{$$typeof:f,render:C}},oe.isValidElement=Se,oe.lazy=function(C){return{$$typeof:_,_payload:{_status:-1,_result:C},_init:Be}},oe.memo=function(C,O){return{$$typeof:g,type:C,compare:O===void 0?null:O}},oe.startTransition=function(C){var O=j.transition;j.transition={};try{C()}finally{j.transition=O}},oe.unstable_act=$,oe.useCallback=function(C,O){return Ie.current.useCallback(C,O)},oe.useContext=function(C){return Ie.current.useContext(C)},oe.useDebugValue=function(){},oe.useDeferredValue=function(C){return Ie.current.useDeferredValue(C)},oe.useEffect=function(C,O){return Ie.current.useEffect(C,O)},oe.useId=function(){return Ie.current.useId()},oe.useImperativeHandle=function(C,O,ie){return Ie.current.useImperativeHandle(C,O,ie)},oe.useInsertionEffect=function(C,O){return Ie.current.useInsertionEffect(C,O)},oe.useLayoutEffect=function(C,O){return Ie.current.useLayoutEffect(C,O)},oe.useMemo=function(C,O){return Ie.current.useMemo(C,O)},oe.useReducer=function(C,O,ie){return Ie.current.useReducer(C,O,ie)},oe.useRef=function(C){return Ie.current.useRef(C)},oe.useState=function(C){return Ie.current.useState(C)},oe.useSyncExternalStore=function(C,O,ie){return Ie.current.useSyncExternalStore(C,O,ie)},oe.useTransition=function(){return Ie.current.useTransition()},oe.version="18.3.1",oe}var Qp;function od(){return Qp||(Qp=1,fc.exports=EE()),fc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function SE(){if(Jp)return gs;Jp=1;var r=od(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,g){var _,y={},v=null,R=null;g!==void 0&&(v=""+g),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(R=h.ref);for(_ in h)s.call(h,_)&&!l.hasOwnProperty(_)&&(y[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)y[_]===void 0&&(y[_]=h[_]);return{$$typeof:e,type:f,key:v,ref:R,props:y,_owner:o.current}}return gs.Fragment=t,gs.jsx=c,gs.jsxs=c,gs}var Xp;function CE(){return Xp||(Xp=1,dc.exports=SE()),dc.exports}var U=CE(),F=od();const IE=wE(F),TE=vE({__proto__:null,default:IE},[F]);var _a={},hc={exports:{}},wt={},pc={exports:{}},gc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function kE(){return Zp||(Zp=1,function(r){function e(j,G){var $=j.length;j.push(G);e:for(;0<$;){var C=$-1>>>1,O=j[C];if(0<o(O,G))j[C]=G,j[$]=O,$=C;else break e}}function t(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var G=j[0],$=j.pop();if($!==G){j[0]=$;e:for(var C=0,O=j.length,ie=O>>>1;C<ie;){var le=2*(C+1)-1,pe=j[le],ge=le+1,ke=j[ge];if(0>o(pe,$))ge<O&&0>o(ke,pe)?(j[C]=ke,j[ge]=$,C=ge):(j[C]=pe,j[le]=$,C=le);else if(ge<O&&0>o(ke,$))j[C]=ke,j[ge]=$,C=ge;else break e}}return G}function o(j,G){var $=j.sortIndex-G.sortIndex;return $!==0?$:j.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var h=[],g=[],_=1,y=null,v=3,R=!1,N=!1,P=!1,I=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(j){for(var G=t(g);G!==null;){if(G.callback===null)s(g);else if(G.startTime<=j)s(g),G.sortIndex=G.expirationTime,e(h,G);else break;G=t(g)}}function Q(j){if(P=!1,W(j),!N)if(t(h)!==null)N=!0,Be(fe);else{var G=t(g);G!==null&&Ie(Q,G.startTime-j)}}function fe(j,G){N=!1,P&&(P=!1,z(ne),ne=-1),R=!0;var $=v;try{for(W(G),y=t(h);y!==null&&(!(y.expirationTime>G)||j&&!ye());){var C=y.callback;if(typeof C=="function"){y.callback=null,v=y.priorityLevel;var O=C(y.expirationTime<=G);G=r.unstable_now(),typeof O=="function"?y.callback=O:y===t(h)&&s(h),W(G)}else s(h);y=t(h)}if(y!==null)var ie=!0;else{var le=t(g);le!==null&&Ie(Q,le.startTime-G),ie=!1}return ie}finally{y=null,v=$,R=!1}}var he=!1,se=null,ne=-1,ve=5,Se=-1;function ye(){return!(r.unstable_now()-Se<ve)}function Me(){if(se!==null){var j=r.unstable_now();Se=j;var G=!0;try{G=se(!0,j)}finally{G?st():(he=!1,se=null)}}else he=!1}var st;if(typeof B=="function")st=function(){B(Me)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,Ve=Fe.port2;Fe.port1.onmessage=Me,st=function(){Ve.postMessage(null)}}else st=function(){I(Me,0)};function Be(j){se=j,he||(he=!0,st())}function Ie(j,G){ne=I(function(){j(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_continueExecution=function(){N||R||(N=!0,Be(fe))},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(j){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var $=v;v=G;try{return j()}finally{v=$}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(j,G){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var $=v;v=j;try{return G()}finally{v=$}},r.unstable_scheduleCallback=function(j,G,$){var C=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?C+$:C):$=C,j){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=$+O,j={id:_++,callback:G,priorityLevel:j,startTime:$,expirationTime:O,sortIndex:-1},$>C?(j.sortIndex=$,e(g,j),t(h)===null&&j===t(g)&&(P?(z(ne),ne=-1):P=!0,Ie(Q,$-C))):(j.sortIndex=O,e(h,j),N||R||(N=!0,Be(fe))),j},r.unstable_shouldYield=ye,r.unstable_wrapCallback=function(j){var G=v;return function(){var $=v;v=G;try{return j.apply(this,arguments)}finally{v=$}}}}(gc)),gc}var eg;function RE(){return eg||(eg=1,pc.exports=kE()),pc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function NE(){if(tg)return wt;tg=1;var r=od(),e=RE();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function v(n){return h.call(y,n)?!0:h.call(_,n)?!1:g.test(n)?y[n]=!0:(_[n]=!0,!1)}function R(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function N(n,i,a,u){if(i===null||typeof i>"u"||R(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function P(n,i,a,u,d,p,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=m}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){I[n]=new P(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];I[i]=new P(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){I[n]=new P(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){I[n]=new P(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){I[n]=new P(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){I[n]=new P(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){I[n]=new P(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){I[n]=new P(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){I[n]=new P(n,5,!1,n.toLowerCase(),null,!1,!1)});var z=/[\-:]([a-z])/g;function B(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(z,B);I[i]=new P(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(z,B);I[i]=new P(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(z,B);I[i]=new P(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){I[n]=new P(n,1,!1,n.toLowerCase(),null,!1,!1)}),I.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){I[n]=new P(n,1,!1,n.toLowerCase(),null,!0,!0)});function W(n,i,a,u){var d=I.hasOwnProperty(i)?I[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(N(i,a,d,u)&&(a=null),u||d===null?v(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var Q=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fe=Symbol.for("react.element"),he=Symbol.for("react.portal"),se=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),Se=Symbol.for("react.provider"),ye=Symbol.for("react.context"),Me=Symbol.for("react.forward_ref"),st=Symbol.for("react.suspense"),Fe=Symbol.for("react.suspense_list"),Ve=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),Ie=Symbol.for("react.offscreen"),j=Symbol.iterator;function G(n){return n===null||typeof n!="object"?null:(n=j&&n[j]||n["@@iterator"],typeof n=="function"?n:null)}var $=Object.assign,C;function O(n){if(C===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);C=i&&i[1]||""}return`
`+C+n}var ie=!1;function le(n,i){if(!n||ie)return"";ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(x){var u=x}Reflect.construct(n,[],i)}else{try{i.call()}catch(x){u=x}n.call(i.prototype)}else{try{throw Error()}catch(x){u=x}n()}}catch(x){if(x&&u&&typeof x.stack=="string"){for(var d=x.stack.split(`
`),p=u.stack.split(`
`),m=d.length-1,w=p.length-1;1<=m&&0<=w&&d[m]!==p[w];)w--;for(;1<=m&&0<=w;m--,w--)if(d[m]!==p[w]){if(m!==1||w!==1)do if(m--,w--,0>w||d[m]!==p[w]){var E=`
`+d[m].replace(" at new "," at ");return n.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",n.displayName)),E}while(1<=m&&0<=w);break}}}finally{ie=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?O(n):""}function pe(n){switch(n.tag){case 5:return O(n.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return n=le(n.type,!1),n;case 11:return n=le(n.type.render,!1),n;case 1:return n=le(n.type,!0),n;default:return""}}function ge(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case se:return"Fragment";case he:return"Portal";case ve:return"Profiler";case ne:return"StrictMode";case st:return"Suspense";case Fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ye:return(n.displayName||"Context")+".Consumer";case Se:return(n._context.displayName||"Context")+".Provider";case Me:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ve:return i=n.displayName||null,i!==null?i:ge(n.type)||"Memo";case Be:i=n._payload,n=n._init;try{return ge(n(i))}catch{}}return null}function ke(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===ne?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ae(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ct(n){var i=Ae(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(m){u=""+m,p.call(this,m)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(m){u=""+m},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function oo(n){n._valueTracker||(n._valueTracker=Ct(n))}function ef(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Ae(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function ao(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function yl(n,i){var a=i.checked;return $({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function tf(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=we(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function nf(n,i){i=i.checked,i!=null&&W(n,"checked",i,!1)}function vl(n,i){nf(n,i);var a=we(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?wl(n,i.type,a):i.hasOwnProperty("defaultValue")&&wl(n,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function rf(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function wl(n,i,a){(i!=="number"||ao(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var xi=Array.isArray;function Mr(n,i,a,u){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+we(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function El(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function sf(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(xi(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:we(a)}}function of(n,i){var a=we(i.value),u=we(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function af(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function lf(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sl(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?lf(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var lo,uf=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=lo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Oi(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iv=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(n){Iv.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ai[i]=Ai[n]})});function cf(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ai.hasOwnProperty(n)&&Ai[n]?(""+i).trim():i+"px"}function df(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=cf(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var Tv=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cl(n,i){if(i){if(Tv[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Il(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tl=null;function kl(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Rl=null,Fr=null,Ur=null;function ff(n){if(n=es(n)){if(typeof Rl!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ao(i),Rl(n.stateNode,n.type,i))}}function hf(n){Fr?Ur?Ur.push(n):Ur=[n]:Fr=n}function pf(){if(Fr){var n=Fr,i=Ur;if(Ur=Fr=null,ff(n),i)for(n=0;n<i.length;n++)ff(i[n])}}function gf(n,i){return n(i)}function mf(){}var Nl=!1;function _f(n,i,a){if(Nl)return n(i,a);Nl=!0;try{return gf(n,i,a)}finally{Nl=!1,(Fr!==null||Ur!==null)&&(mf(),pf())}}function Li(n,i){var a=n.stateNode;if(a===null)return null;var u=Ao(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Pl=!1;if(f)try{var Di={};Object.defineProperty(Di,"passive",{get:function(){Pl=!0}}),window.addEventListener("test",Di,Di),window.removeEventListener("test",Di,Di)}catch{Pl=!1}function kv(n,i,a,u,d,p,m,w,E){var x=Array.prototype.slice.call(arguments,3);try{i.apply(a,x)}catch(L){this.onError(L)}}var bi=!1,uo=null,co=!1,xl=null,Rv={onError:function(n){bi=!0,uo=n}};function Nv(n,i,a,u,d,p,m,w,E){bi=!1,uo=null,kv.apply(Rv,arguments)}function Pv(n,i,a,u,d,p,m,w,E){if(Nv.apply(this,arguments),bi){if(bi){var x=uo;bi=!1,uo=null}else throw Error(t(198));co||(co=!0,xl=x)}}function ur(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function yf(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function vf(n){if(ur(n)!==n)throw Error(t(188))}function xv(n){var i=n.alternate;if(!i){if(i=ur(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return vf(d),n;if(p===u)return vf(d),i;p=p.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=p;else{for(var m=!1,w=d.child;w;){if(w===a){m=!0,a=d,u=p;break}if(w===u){m=!0,u=d,a=p;break}w=w.sibling}if(!m){for(w=p.child;w;){if(w===a){m=!0,a=p,u=d;break}if(w===u){m=!0,u=p,a=d;break}w=w.sibling}if(!m)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function wf(n){return n=xv(n),n!==null?Ef(n):null}function Ef(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ef(n);if(i!==null)return i;n=n.sibling}return null}var Sf=e.unstable_scheduleCallback,Cf=e.unstable_cancelCallback,Ov=e.unstable_shouldYield,Av=e.unstable_requestPaint,$e=e.unstable_now,Lv=e.unstable_getCurrentPriorityLevel,Ol=e.unstable_ImmediatePriority,If=e.unstable_UserBlockingPriority,fo=e.unstable_NormalPriority,Dv=e.unstable_LowPriority,Tf=e.unstable_IdlePriority,ho=null,qt=null;function bv(n){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(ho,n,void 0,(n.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:Uv,Mv=Math.log,Fv=Math.LN2;function Uv(n){return n>>>=0,n===0?32:31-(Mv(n)/Fv|0)|0}var po=64,go=4194304;function Mi(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function mo(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,p=n.pingedLanes,m=a&268435455;if(m!==0){var w=m&~d;w!==0?u=Mi(w):(p&=m,p!==0&&(u=Mi(p)))}else m=a&~d,m!==0?u=Mi(m):p!==0&&(u=Mi(p));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if(u&4&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Mt(i),d=1<<a,u|=n[a],i&=~d;return u}function jv(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $v(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var m=31-Mt(p),w=1<<m,E=d[m];E===-1?(!(w&a)||w&u)&&(d[m]=jv(w,i)):E<=i&&(n.expiredLanes|=w),p&=~w}}function Al(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function kf(){var n=po;return po<<=1,!(po&4194240)&&(po=64),n}function Ll(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Fi(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Mt(i),n[i]=a}function zv(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Mt(a),p=1<<d;i[d]=0,u[d]=-1,n[d]=-1,a&=~p}}function Dl(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Mt(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}var Ee=0;function Rf(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Nf,bl,Pf,xf,Of,Ml=!1,_o=[],Rn=null,Nn=null,Pn=null,Ui=new Map,ji=new Map,xn=[],Vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Af(n,i){switch(n){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Ui.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(i.pointerId)}}function $i(n,i,a,u,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},i!==null&&(i=es(i),i!==null&&bl(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Bv(n,i,a,u,d){switch(i){case"focusin":return Rn=$i(Rn,n,i,a,u,d),!0;case"dragenter":return Nn=$i(Nn,n,i,a,u,d),!0;case"mouseover":return Pn=$i(Pn,n,i,a,u,d),!0;case"pointerover":var p=d.pointerId;return Ui.set(p,$i(Ui.get(p)||null,n,i,a,u,d)),!0;case"gotpointercapture":return p=d.pointerId,ji.set(p,$i(ji.get(p)||null,n,i,a,u,d)),!0}return!1}function Lf(n){var i=cr(n.target);if(i!==null){var a=ur(i);if(a!==null){if(i=a.tag,i===13){if(i=yf(a),i!==null){n.blockedOn=i,Of(n.priority,function(){Pf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function yo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ul(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Tl=u,a.target.dispatchEvent(u),Tl=null}else return i=es(a),i!==null&&bl(i),n.blockedOn=a,!1;i.shift()}return!0}function Df(n,i,a){yo(n)&&a.delete(i)}function Wv(){Ml=!1,Rn!==null&&yo(Rn)&&(Rn=null),Nn!==null&&yo(Nn)&&(Nn=null),Pn!==null&&yo(Pn)&&(Pn=null),Ui.forEach(Df),ji.forEach(Df)}function zi(n,i){n.blockedOn===i&&(n.blockedOn=null,Ml||(Ml=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Wv)))}function Vi(n){function i(d){return zi(d,n)}if(0<_o.length){zi(_o[0],n);for(var a=1;a<_o.length;a++){var u=_o[a];u.blockedOn===n&&(u.blockedOn=null)}}for(Rn!==null&&zi(Rn,n),Nn!==null&&zi(Nn,n),Pn!==null&&zi(Pn,n),Ui.forEach(i),ji.forEach(i),a=0;a<xn.length;a++)u=xn[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<xn.length&&(a=xn[0],a.blockedOn===null);)Lf(a),a.blockedOn===null&&xn.shift()}var jr=Q.ReactCurrentBatchConfig,vo=!0;function Hv(n,i,a,u){var d=Ee,p=jr.transition;jr.transition=null;try{Ee=1,Fl(n,i,a,u)}finally{Ee=d,jr.transition=p}}function Kv(n,i,a,u){var d=Ee,p=jr.transition;jr.transition=null;try{Ee=4,Fl(n,i,a,u)}finally{Ee=d,jr.transition=p}}function Fl(n,i,a,u){if(vo){var d=Ul(n,i,a,u);if(d===null)tu(n,i,u,wo,a),Af(n,u);else if(Bv(d,n,i,a,u))u.stopPropagation();else if(Af(n,u),i&4&&-1<Vv.indexOf(n)){for(;d!==null;){var p=es(d);if(p!==null&&Nf(p),p=Ul(n,i,a,u),p===null&&tu(n,i,u,wo,a),p===d)break;d=p}d!==null&&u.stopPropagation()}else tu(n,i,u,null,a)}}var wo=null;function Ul(n,i,a,u){if(wo=null,n=kl(u),n=cr(n),n!==null)if(i=ur(n),i===null)n=null;else if(a=i.tag,a===13){if(n=yf(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return wo=n,null}function bf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lv()){case Ol:return 1;case If:return 4;case fo:case Dv:return 16;case Tf:return 536870912;default:return 16}default:return 16}}var On=null,jl=null,Eo=null;function Mf(){if(Eo)return Eo;var n,i=jl,a=i.length,u,d="value"in On?On.value:On.textContent,p=d.length;for(n=0;n<a&&i[n]===d[n];n++);var m=a-n;for(u=1;u<=m&&i[a-u]===d[p-u];u++);return Eo=d.slice(n,1<u?1-u:void 0)}function So(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Co(){return!0}function Ff(){return!1}function It(n){function i(a,u,d,p,m){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=m,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(a=n[w],this[w]=a?a(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Co:Ff,this.isPropagationStopped=Ff,this}return $(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),i}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=It($r),Bi=$({},$r,{view:0,detail:0}),Gv=It(Bi),zl,Vl,Wi,Io=$({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wl,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Wi&&(Wi&&n.type==="mousemove"?(zl=n.screenX-Wi.screenX,Vl=n.screenY-Wi.screenY):Vl=zl=0,Wi=n),zl)},movementY:function(n){return"movementY"in n?n.movementY:Vl}}),Uf=It(Io),qv=$({},Io,{dataTransfer:0}),Yv=It(qv),Qv=$({},Bi,{relatedTarget:0}),Bl=It(Qv),Jv=$({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),Xv=It(Jv),Zv=$({},$r,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ew=It(Zv),tw=$({},$r,{data:0}),jf=It(tw),nw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sw(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=iw[n])?!!i[n]:!1}function Wl(){return sw}var ow=$({},Bi,{key:function(n){if(n.key){var i=nw[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=So(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?rw[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wl,charCode:function(n){return n.type==="keypress"?So(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?So(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),aw=It(ow),lw=$({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$f=It(lw),uw=$({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wl}),cw=It(uw),dw=$({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),fw=It(dw),hw=$({},Io,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),pw=It(hw),gw=[9,13,27,32],Hl=f&&"CompositionEvent"in window,Hi=null;f&&"documentMode"in document&&(Hi=document.documentMode);var mw=f&&"TextEvent"in window&&!Hi,zf=f&&(!Hl||Hi&&8<Hi&&11>=Hi),Vf=" ",Bf=!1;function Wf(n,i){switch(n){case"keyup":return gw.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var zr=!1;function _w(n,i){switch(n){case"compositionend":return Hf(i);case"keypress":return i.which!==32?null:(Bf=!0,Vf);case"textInput":return n=i.data,n===Vf&&Bf?null:n;default:return null}}function yw(n,i){if(zr)return n==="compositionend"||!Hl&&Wf(n,i)?(n=Mf(),Eo=jl=On=null,zr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return zf&&i.locale!=="ko"?null:i.data;default:return null}}var vw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!vw[n.type]:i==="textarea"}function Gf(n,i,a,u){hf(u),i=Po(i,"onChange"),0<i.length&&(a=new $l("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Ki=null,Gi=null;function ww(n){dh(n,0)}function To(n){var i=Kr(n);if(ef(i))return n}function Ew(n,i){if(n==="change")return i}var qf=!1;if(f){var Kl;if(f){var Gl="oninput"in document;if(!Gl){var Yf=document.createElement("div");Yf.setAttribute("oninput","return;"),Gl=typeof Yf.oninput=="function"}Kl=Gl}else Kl=!1;qf=Kl&&(!document.documentMode||9<document.documentMode)}function Qf(){Ki&&(Ki.detachEvent("onpropertychange",Jf),Gi=Ki=null)}function Jf(n){if(n.propertyName==="value"&&To(Gi)){var i=[];Gf(i,Gi,n,kl(n)),_f(ww,i)}}function Sw(n,i,a){n==="focusin"?(Qf(),Ki=i,Gi=a,Ki.attachEvent("onpropertychange",Jf)):n==="focusout"&&Qf()}function Cw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return To(Gi)}function Iw(n,i){if(n==="click")return To(i)}function Tw(n,i){if(n==="input"||n==="change")return To(i)}function kw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ft=typeof Object.is=="function"?Object.is:kw;function qi(n,i){if(Ft(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(i,d)||!Ft(n[d],i[d]))return!1}return!0}function Xf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Zf(n,i){var a=Xf(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xf(a)}}function eh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?eh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function th(){for(var n=window,i=ao();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ao(n.document)}return i}function ql(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Rw(n){var i=th(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&eh(a.ownerDocument.documentElement,a)){if(u!==null&&ql(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!n.extend&&p>u&&(d=u,u=p,p=d),d=Zf(a,p);var m=Zf(a,u);d&&m&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==m.node||n.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>u?(n.addRange(i),n.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Nw=f&&"documentMode"in document&&11>=document.documentMode,Vr=null,Yl=null,Yi=null,Ql=!1;function nh(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ql||Vr==null||Vr!==ao(u)||(u=Vr,"selectionStart"in u&&ql(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Yi&&qi(Yi,u)||(Yi=u,u=Po(Yl,"onSelect"),0<u.length&&(i=new $l("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=Vr)))}function ko(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Br={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},Jl={},rh={};f&&(rh=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function Ro(n){if(Jl[n])return Jl[n];if(!Br[n])return n;var i=Br[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in rh)return Jl[n]=i[a];return n}var ih=Ro("animationend"),sh=Ro("animationiteration"),oh=Ro("animationstart"),ah=Ro("transitionend"),lh=new Map,uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(n,i){lh.set(n,i),l(i,[n])}for(var Xl=0;Xl<uh.length;Xl++){var Zl=uh[Xl],Pw=Zl.toLowerCase(),xw=Zl[0].toUpperCase()+Zl.slice(1);An(Pw,"on"+xw)}An(ih,"onAnimationEnd"),An(sh,"onAnimationIteration"),An(oh,"onAnimationStart"),An("dblclick","onDoubleClick"),An("focusin","onFocus"),An("focusout","onBlur"),An(ah,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ow=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));function ch(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Pv(u,i,void 0,n),n.currentTarget=null}function dh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var m=u.length-1;0<=m;m--){var w=u[m],E=w.instance,x=w.currentTarget;if(w=w.listener,E!==p&&d.isPropagationStopped())break e;ch(d,w,x),p=E}else for(m=0;m<u.length;m++){if(w=u[m],E=w.instance,x=w.currentTarget,w=w.listener,E!==p&&d.isPropagationStopped())break e;ch(d,w,x),p=E}}}if(co)throw n=xl,co=!1,xl=null,n}function Pe(n,i){var a=i[au];a===void 0&&(a=i[au]=new Set);var u=n+"__bubble";a.has(u)||(fh(i,n,2,!1),a.add(u))}function eu(n,i,a){var u=0;i&&(u|=4),fh(a,n,u,i)}var No="_reactListening"+Math.random().toString(36).slice(2);function Ji(n){if(!n[No]){n[No]=!0,s.forEach(function(a){a!=="selectionchange"&&(Ow.has(a)||eu(a,!1,n),eu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[No]||(i[No]=!0,eu("selectionchange",!1,i))}}function fh(n,i,a,u){switch(bf(i)){case 1:var d=Hv;break;case 4:d=Kv;break;default:d=Fl}a=d.bind(null,i,a,n),d=void 0,!Pl||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function tu(n,i,a,u,d){var p=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var m=u.tag;if(m===3||m===4){var w=u.stateNode.containerInfo;if(w===d||w.nodeType===8&&w.parentNode===d)break;if(m===4)for(m=u.return;m!==null;){var E=m.tag;if((E===3||E===4)&&(E=m.stateNode.containerInfo,E===d||E.nodeType===8&&E.parentNode===d))return;m=m.return}for(;w!==null;){if(m=cr(w),m===null)return;if(E=m.tag,E===5||E===6){u=p=m;continue e}w=w.parentNode}}u=u.return}_f(function(){var x=p,L=kl(a),D=[];e:{var A=lh.get(n);if(A!==void 0){var V=$l,K=n;switch(n){case"keypress":if(So(a)===0)break e;case"keydown":case"keyup":V=aw;break;case"focusin":K="focus",V=Bl;break;case"focusout":K="blur",V=Bl;break;case"beforeblur":case"afterblur":V=Bl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=Yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=cw;break;case ih:case sh:case oh:V=Xv;break;case ah:V=fw;break;case"scroll":V=Gv;break;case"wheel":V=pw;break;case"copy":case"cut":case"paste":V=ew;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=$f}var q=(i&4)!==0,ze=!q&&n==="scroll",T=q?A!==null?A+"Capture":null:A;q=[];for(var S=x,k;S!==null;){k=S;var b=k.stateNode;if(k.tag===5&&b!==null&&(k=b,T!==null&&(b=Li(S,T),b!=null&&q.push(Xi(S,b,k)))),ze)break;S=S.return}0<q.length&&(A=new V(A,K,null,a,L),D.push({event:A,listeners:q}))}}if(!(i&7)){e:{if(A=n==="mouseover"||n==="pointerover",V=n==="mouseout"||n==="pointerout",A&&a!==Tl&&(K=a.relatedTarget||a.fromElement)&&(cr(K)||K[an]))break e;if((V||A)&&(A=L.window===L?L:(A=L.ownerDocument)?A.defaultView||A.parentWindow:window,V?(K=a.relatedTarget||a.toElement,V=x,K=K?cr(K):null,K!==null&&(ze=ur(K),K!==ze||K.tag!==5&&K.tag!==6)&&(K=null)):(V=null,K=x),V!==K)){if(q=Uf,b="onMouseLeave",T="onMouseEnter",S="mouse",(n==="pointerout"||n==="pointerover")&&(q=$f,b="onPointerLeave",T="onPointerEnter",S="pointer"),ze=V==null?A:Kr(V),k=K==null?A:Kr(K),A=new q(b,S+"leave",V,a,L),A.target=ze,A.relatedTarget=k,b=null,cr(L)===x&&(q=new q(T,S+"enter",K,a,L),q.target=k,q.relatedTarget=ze,b=q),ze=b,V&&K)t:{for(q=V,T=K,S=0,k=q;k;k=Wr(k))S++;for(k=0,b=T;b;b=Wr(b))k++;for(;0<S-k;)q=Wr(q),S--;for(;0<k-S;)T=Wr(T),k--;for(;S--;){if(q===T||T!==null&&q===T.alternate)break t;q=Wr(q),T=Wr(T)}q=null}else q=null;V!==null&&hh(D,A,V,q,!1),K!==null&&ze!==null&&hh(D,ze,K,q,!0)}}e:{if(A=x?Kr(x):window,V=A.nodeName&&A.nodeName.toLowerCase(),V==="select"||V==="input"&&A.type==="file")var Y=Ew;else if(Kf(A))if(qf)Y=Tw;else{Y=Cw;var J=Sw}else(V=A.nodeName)&&V.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(Y=Iw);if(Y&&(Y=Y(n,x))){Gf(D,Y,a,L);break e}J&&J(n,A,x),n==="focusout"&&(J=A._wrapperState)&&J.controlled&&A.type==="number"&&wl(A,"number",A.value)}switch(J=x?Kr(x):window,n){case"focusin":(Kf(J)||J.contentEditable==="true")&&(Vr=J,Yl=x,Yi=null);break;case"focusout":Yi=Yl=Vr=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,nh(D,a,L);break;case"selectionchange":if(Nw)break;case"keydown":case"keyup":nh(D,a,L)}var X;if(Hl)e:{switch(n){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else zr?Wf(n,a)&&(te="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(zf&&a.locale!=="ko"&&(zr||te!=="onCompositionStart"?te==="onCompositionEnd"&&zr&&(X=Mf()):(On=L,jl="value"in On?On.value:On.textContent,zr=!0)),J=Po(x,te),0<J.length&&(te=new jf(te,n,null,a,L),D.push({event:te,listeners:J}),X?te.data=X:(X=Hf(a),X!==null&&(te.data=X)))),(X=mw?_w(n,a):yw(n,a))&&(x=Po(x,"onBeforeInput"),0<x.length&&(L=new jf("onBeforeInput","beforeinput",null,a,L),D.push({event:L,listeners:x}),L.data=X))}dh(D,i)})}function Xi(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Po(n,i){for(var a=i+"Capture",u=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Li(n,a),p!=null&&u.unshift(Xi(n,p,d)),p=Li(n,i),p!=null&&u.push(Xi(n,p,d))),n=n.return}return u}function Wr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function hh(n,i,a,u,d){for(var p=i._reactName,m=[];a!==null&&a!==u;){var w=a,E=w.alternate,x=w.stateNode;if(E!==null&&E===u)break;w.tag===5&&x!==null&&(w=x,d?(E=Li(a,p),E!=null&&m.unshift(Xi(a,E,w))):d||(E=Li(a,p),E!=null&&m.push(Xi(a,E,w)))),a=a.return}m.length!==0&&n.push({event:i,listeners:m})}var Aw=/\r\n?/g,Lw=/\u0000|\uFFFD/g;function ph(n){return(typeof n=="string"?n:""+n).replace(Aw,`
`).replace(Lw,"")}function xo(n,i,a){if(i=ph(i),ph(n)!==i&&a)throw Error(t(425))}function Oo(){}var nu=null,ru=null;function iu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var su=typeof setTimeout=="function"?setTimeout:void 0,Dw=typeof clearTimeout=="function"?clearTimeout:void 0,gh=typeof Promise=="function"?Promise:void 0,bw=typeof queueMicrotask=="function"?queueMicrotask:typeof gh<"u"?function(n){return gh.resolve(null).then(n).catch(Mw)}:su;function Mw(n){setTimeout(function(){throw n})}function ou(n,i){var a=i,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),Vi(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);Vi(i)}function Ln(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function mh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Hr,Zi="__reactProps$"+Hr,an="__reactContainer$"+Hr,au="__reactEvents$"+Hr,Fw="__reactListeners$"+Hr,Uw="__reactHandles$"+Hr;function cr(n){var i=n[Yt];if(i)return i;for(var a=n.parentNode;a;){if(i=a[an]||a[Yt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=mh(n);n!==null;){if(a=n[Yt])return a;n=mh(n)}return i}n=a,a=n.parentNode}return null}function es(n){return n=n[Yt]||n[an],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Kr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ao(n){return n[Zi]||null}var lu=[],Gr=-1;function Dn(n){return{current:n}}function xe(n){0>Gr||(n.current=lu[Gr],lu[Gr]=null,Gr--)}function Re(n,i){Gr++,lu[Gr]=n.current,n.current=i}var bn={},ot=Dn(bn),gt=Dn(!1),dr=bn;function qr(n,i){var a=n.type.contextTypes;if(!a)return bn;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function mt(n){return n=n.childContextTypes,n!=null}function Lo(){xe(gt),xe(ot)}function _h(n,i,a){if(ot.current!==bn)throw Error(t(168));Re(ot,i),Re(gt,a)}function yh(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,ke(n)||"Unknown",d));return $({},a,u)}function Do(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||bn,dr=ot.current,Re(ot,n),Re(gt,gt.current),!0}function vh(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=yh(n,i,dr),u.__reactInternalMemoizedMergedChildContext=n,xe(gt),xe(ot),Re(ot,n)):xe(gt),Re(gt,a)}var ln=null,bo=!1,uu=!1;function wh(n){ln===null?ln=[n]:ln.push(n)}function jw(n){bo=!0,wh(n)}function Mn(){if(!uu&&ln!==null){uu=!0;var n=0,i=Ee;try{var a=ln;for(Ee=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}ln=null,bo=!1}catch(d){throw ln!==null&&(ln=ln.slice(n+1)),Sf(Ol,Mn),d}finally{Ee=i,uu=!1}}return null}var Yr=[],Qr=0,Mo=null,Fo=0,xt=[],Ot=0,fr=null,un=1,cn="";function hr(n,i){Yr[Qr++]=Fo,Yr[Qr++]=Mo,Mo=n,Fo=i}function Eh(n,i,a){xt[Ot++]=un,xt[Ot++]=cn,xt[Ot++]=fr,fr=n;var u=un;n=cn;var d=32-Mt(u)-1;u&=~(1<<d),a+=1;var p=32-Mt(i)+d;if(30<p){var m=d-d%5;p=(u&(1<<m)-1).toString(32),u>>=m,d-=m,un=1<<32-Mt(i)+d|a<<d|u,cn=p+n}else un=1<<p|a<<d|u,cn=n}function cu(n){n.return!==null&&(hr(n,1),Eh(n,1,0))}function du(n){for(;n===Mo;)Mo=Yr[--Qr],Yr[Qr]=null,Fo=Yr[--Qr],Yr[Qr]=null;for(;n===fr;)fr=xt[--Ot],xt[Ot]=null,cn=xt[--Ot],xt[Ot]=null,un=xt[--Ot],xt[Ot]=null}var Tt=null,kt=null,Le=!1,Ut=null;function Sh(n,i){var a=bt(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Ch(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Tt=n,kt=Ln(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Tt=n,kt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=fr!==null?{id:un,overflow:cn}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=bt(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Tt=n,kt=null,!0):!1;default:return!1}}function fu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function hu(n){if(Le){var i=kt;if(i){var a=i;if(!Ch(n,i)){if(fu(n))throw Error(t(418));i=Ln(a.nextSibling);var u=Tt;i&&Ch(n,i)?Sh(u,a):(n.flags=n.flags&-4097|2,Le=!1,Tt=n)}}else{if(fu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Le=!1,Tt=n}}}function Ih(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Tt=n}function Uo(n){if(n!==Tt)return!1;if(!Le)return Ih(n),Le=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!iu(n.type,n.memoizedProps)),i&&(i=kt)){if(fu(n))throw Th(),Error(t(418));for(;i;)Sh(n,i),i=Ln(i.nextSibling)}if(Ih(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){kt=Ln(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}kt=null}}else kt=Tt?Ln(n.stateNode.nextSibling):null;return!0}function Th(){for(var n=kt;n;)n=Ln(n.nextSibling)}function Jr(){kt=Tt=null,Le=!1}function pu(n){Ut===null?Ut=[n]:Ut.push(n)}var $w=Q.ReactCurrentBatchConfig;function ts(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(m){var w=d.refs;m===null?delete w[p]:w[p]=m},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function jo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function kh(n){var i=n._init;return i(n._payload)}function Rh(n){function i(T,S){if(n){var k=T.deletions;k===null?(T.deletions=[S],T.flags|=16):k.push(S)}}function a(T,S){if(!n)return null;for(;S!==null;)i(T,S),S=S.sibling;return null}function u(T,S){for(T=new Map;S!==null;)S.key!==null?T.set(S.key,S):T.set(S.index,S),S=S.sibling;return T}function d(T,S){return T=Wn(T,S),T.index=0,T.sibling=null,T}function p(T,S,k){return T.index=k,n?(k=T.alternate,k!==null?(k=k.index,k<S?(T.flags|=2,S):k):(T.flags|=2,S)):(T.flags|=1048576,S)}function m(T){return n&&T.alternate===null&&(T.flags|=2),T}function w(T,S,k,b){return S===null||S.tag!==6?(S=sc(k,T.mode,b),S.return=T,S):(S=d(S,k),S.return=T,S)}function E(T,S,k,b){var Y=k.type;return Y===se?L(T,S,k.props.children,b,k.key):S!==null&&(S.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Be&&kh(Y)===S.type)?(b=d(S,k.props),b.ref=ts(T,S,k),b.return=T,b):(b=ua(k.type,k.key,k.props,null,T.mode,b),b.ref=ts(T,S,k),b.return=T,b)}function x(T,S,k,b){return S===null||S.tag!==4||S.stateNode.containerInfo!==k.containerInfo||S.stateNode.implementation!==k.implementation?(S=oc(k,T.mode,b),S.return=T,S):(S=d(S,k.children||[]),S.return=T,S)}function L(T,S,k,b,Y){return S===null||S.tag!==7?(S=Er(k,T.mode,b,Y),S.return=T,S):(S=d(S,k),S.return=T,S)}function D(T,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return S=sc(""+S,T.mode,k),S.return=T,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case fe:return k=ua(S.type,S.key,S.props,null,T.mode,k),k.ref=ts(T,null,S),k.return=T,k;case he:return S=oc(S,T.mode,k),S.return=T,S;case Be:var b=S._init;return D(T,b(S._payload),k)}if(xi(S)||G(S))return S=Er(S,T.mode,k,null),S.return=T,S;jo(T,S)}return null}function A(T,S,k,b){var Y=S!==null?S.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return Y!==null?null:w(T,S,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case fe:return k.key===Y?E(T,S,k,b):null;case he:return k.key===Y?x(T,S,k,b):null;case Be:return Y=k._init,A(T,S,Y(k._payload),b)}if(xi(k)||G(k))return Y!==null?null:L(T,S,k,b,null);jo(T,k)}return null}function V(T,S,k,b,Y){if(typeof b=="string"&&b!==""||typeof b=="number")return T=T.get(k)||null,w(S,T,""+b,Y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case fe:return T=T.get(b.key===null?k:b.key)||null,E(S,T,b,Y);case he:return T=T.get(b.key===null?k:b.key)||null,x(S,T,b,Y);case Be:var J=b._init;return V(T,S,k,J(b._payload),Y)}if(xi(b)||G(b))return T=T.get(k)||null,L(S,T,b,Y,null);jo(S,b)}return null}function K(T,S,k,b){for(var Y=null,J=null,X=S,te=S=0,Xe=null;X!==null&&te<k.length;te++){X.index>te?(Xe=X,X=null):Xe=X.sibling;var me=A(T,X,k[te],b);if(me===null){X===null&&(X=Xe);break}n&&X&&me.alternate===null&&i(T,X),S=p(me,S,te),J===null?Y=me:J.sibling=me,J=me,X=Xe}if(te===k.length)return a(T,X),Le&&hr(T,te),Y;if(X===null){for(;te<k.length;te++)X=D(T,k[te],b),X!==null&&(S=p(X,S,te),J===null?Y=X:J.sibling=X,J=X);return Le&&hr(T,te),Y}for(X=u(T,X);te<k.length;te++)Xe=V(X,T,te,k[te],b),Xe!==null&&(n&&Xe.alternate!==null&&X.delete(Xe.key===null?te:Xe.key),S=p(Xe,S,te),J===null?Y=Xe:J.sibling=Xe,J=Xe);return n&&X.forEach(function(Hn){return i(T,Hn)}),Le&&hr(T,te),Y}function q(T,S,k,b){var Y=G(k);if(typeof Y!="function")throw Error(t(150));if(k=Y.call(k),k==null)throw Error(t(151));for(var J=Y=null,X=S,te=S=0,Xe=null,me=k.next();X!==null&&!me.done;te++,me=k.next()){X.index>te?(Xe=X,X=null):Xe=X.sibling;var Hn=A(T,X,me.value,b);if(Hn===null){X===null&&(X=Xe);break}n&&X&&Hn.alternate===null&&i(T,X),S=p(Hn,S,te),J===null?Y=Hn:J.sibling=Hn,J=Hn,X=Xe}if(me.done)return a(T,X),Le&&hr(T,te),Y;if(X===null){for(;!me.done;te++,me=k.next())me=D(T,me.value,b),me!==null&&(S=p(me,S,te),J===null?Y=me:J.sibling=me,J=me);return Le&&hr(T,te),Y}for(X=u(T,X);!me.done;te++,me=k.next())me=V(X,T,te,me.value,b),me!==null&&(n&&me.alternate!==null&&X.delete(me.key===null?te:me.key),S=p(me,S,te),J===null?Y=me:J.sibling=me,J=me);return n&&X.forEach(function(yE){return i(T,yE)}),Le&&hr(T,te),Y}function ze(T,S,k,b){if(typeof k=="object"&&k!==null&&k.type===se&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case fe:e:{for(var Y=k.key,J=S;J!==null;){if(J.key===Y){if(Y=k.type,Y===se){if(J.tag===7){a(T,J.sibling),S=d(J,k.props.children),S.return=T,T=S;break e}}else if(J.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Be&&kh(Y)===J.type){a(T,J.sibling),S=d(J,k.props),S.ref=ts(T,J,k),S.return=T,T=S;break e}a(T,J);break}else i(T,J);J=J.sibling}k.type===se?(S=Er(k.props.children,T.mode,b,k.key),S.return=T,T=S):(b=ua(k.type,k.key,k.props,null,T.mode,b),b.ref=ts(T,S,k),b.return=T,T=b)}return m(T);case he:e:{for(J=k.key;S!==null;){if(S.key===J)if(S.tag===4&&S.stateNode.containerInfo===k.containerInfo&&S.stateNode.implementation===k.implementation){a(T,S.sibling),S=d(S,k.children||[]),S.return=T,T=S;break e}else{a(T,S);break}else i(T,S);S=S.sibling}S=oc(k,T.mode,b),S.return=T,T=S}return m(T);case Be:return J=k._init,ze(T,S,J(k._payload),b)}if(xi(k))return K(T,S,k,b);if(G(k))return q(T,S,k,b);jo(T,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,S!==null&&S.tag===6?(a(T,S.sibling),S=d(S,k),S.return=T,T=S):(a(T,S),S=sc(k,T.mode,b),S.return=T,T=S),m(T)):a(T,S)}return ze}var Xr=Rh(!0),Nh=Rh(!1),$o=Dn(null),zo=null,Zr=null,gu=null;function mu(){gu=Zr=zo=null}function _u(n){var i=$o.current;xe($o),n._currentValue=i}function yu(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function ei(n,i){zo=n,gu=Zr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(_t=!0),n.firstContext=null)}function At(n){var i=n._currentValue;if(gu!==n)if(n={context:n,memoizedValue:i,next:null},Zr===null){if(zo===null)throw Error(t(308));Zr=n,zo.dependencies={lanes:0,firstContext:n}}else Zr=Zr.next=n;return i}var pr=null;function vu(n){pr===null?pr=[n]:pr.push(n)}function Ph(n,i,a,u){var d=i.interleaved;return d===null?(a.next=a,vu(i)):(a.next=d.next,d.next=a),i.interleaved=a,dn(n,u)}function dn(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Fn=!1;function wu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function fn(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Un(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,de&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,dn(n,a)}return d=u.interleaved,d===null?(i.next=i,vu(u)):(i.next=d.next,d.next=i),u.interleaved=i,dn(n,a)}function Vo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Dl(n,a)}}function Oh(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var m={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=m:p=p.next=m,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Bo(n,i,a,u){var d=n.updateQueue;Fn=!1;var p=d.firstBaseUpdate,m=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var E=w,x=E.next;E.next=null,m===null?p=x:m.next=x,m=E;var L=n.alternate;L!==null&&(L=L.updateQueue,w=L.lastBaseUpdate,w!==m&&(w===null?L.firstBaseUpdate=x:w.next=x,L.lastBaseUpdate=E))}if(p!==null){var D=d.baseState;m=0,L=x=E=null,w=p;do{var A=w.lane,V=w.eventTime;if((u&A)===A){L!==null&&(L=L.next={eventTime:V,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var K=n,q=w;switch(A=i,V=a,q.tag){case 1:if(K=q.payload,typeof K=="function"){D=K.call(V,D,A);break e}D=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=q.payload,A=typeof K=="function"?K.call(V,D,A):K,A==null)break e;D=$({},D,A);break e;case 2:Fn=!0}}w.callback!==null&&w.lane!==0&&(n.flags|=64,A=d.effects,A===null?d.effects=[w]:A.push(w))}else V={eventTime:V,lane:A,tag:w.tag,payload:w.payload,callback:w.callback,next:null},L===null?(x=L=V,E=D):L=L.next=V,m|=A;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;A=w,w=A.next,A.next=null,d.lastBaseUpdate=A,d.shared.pending=null}}while(!0);if(L===null&&(E=D),d.baseState=E,d.firstBaseUpdate=x,d.lastBaseUpdate=L,i=d.shared.interleaved,i!==null){d=i;do m|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);_r|=m,n.lanes=m,n.memoizedState=D}}function Ah(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var ns={},Qt=Dn(ns),rs=Dn(ns),is=Dn(ns);function gr(n){if(n===ns)throw Error(t(174));return n}function Eu(n,i){switch(Re(is,i),Re(rs,n),Re(Qt,ns),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Sl(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Sl(i,n)}xe(Qt),Re(Qt,i)}function ti(){xe(Qt),xe(rs),xe(is)}function Lh(n){gr(is.current);var i=gr(Qt.current),a=Sl(i,n.type);i!==a&&(Re(rs,n),Re(Qt,a))}function Su(n){rs.current===n&&(xe(Qt),xe(rs))}var De=Dn(0);function Wo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Cu=[];function Iu(){for(var n=0;n<Cu.length;n++)Cu[n]._workInProgressVersionPrimary=null;Cu.length=0}var Ho=Q.ReactCurrentDispatcher,Tu=Q.ReactCurrentBatchConfig,mr=0,be=null,Ke=null,Qe=null,Ko=!1,ss=!1,os=0,zw=0;function at(){throw Error(t(321))}function ku(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ft(n[a],i[a]))return!1;return!0}function Ru(n,i,a,u,d,p){if(mr=p,be=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ho.current=n===null||n.memoizedState===null?Hw:Kw,n=a(u,d),ss){p=0;do{if(ss=!1,os=0,25<=p)throw Error(t(301));p+=1,Qe=Ke=null,i.updateQueue=null,Ho.current=Gw,n=a(u,d)}while(ss)}if(Ho.current=Yo,i=Ke!==null&&Ke.next!==null,mr=0,Qe=Ke=be=null,Ko=!1,i)throw Error(t(300));return n}function Nu(){var n=os!==0;return os=0,n}function Jt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?be.memoizedState=Qe=n:Qe=Qe.next=n,Qe}function Lt(){if(Ke===null){var n=be.alternate;n=n!==null?n.memoizedState:null}else n=Ke.next;var i=Qe===null?be.memoizedState:Qe.next;if(i!==null)Qe=i,Ke=n;else{if(n===null)throw Error(t(310));Ke=n,n={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Qe===null?be.memoizedState=Qe=n:Qe=Qe.next=n}return Qe}function as(n,i){return typeof i=="function"?i(n):i}function Pu(n){var i=Lt(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Ke,d=u.baseQueue,p=a.pending;if(p!==null){if(d!==null){var m=d.next;d.next=p.next,p.next=m}u.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,u=u.baseState;var w=m=null,E=null,x=p;do{var L=x.lane;if((mr&L)===L)E!==null&&(E=E.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),u=x.hasEagerState?x.eagerState:n(u,x.action);else{var D={lane:L,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};E===null?(w=E=D,m=u):E=E.next=D,be.lanes|=L,_r|=L}x=x.next}while(x!==null&&x!==p);E===null?m=u:E.next=w,Ft(u,i.memoizedState)||(_t=!0),i.memoizedState=u,i.baseState=m,i.baseQueue=E,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do p=d.lane,be.lanes|=p,_r|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function xu(n){var i=Lt(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var m=d=d.next;do p=n(p,m.action),m=m.next;while(m!==d);Ft(p,i.memoizedState)||(_t=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,u]}function Dh(){}function bh(n,i){var a=be,u=Lt(),d=i(),p=!Ft(u.memoizedState,d);if(p&&(u.memoizedState=d,_t=!0),u=u.queue,Ou(Uh.bind(null,a,u,n),[n]),u.getSnapshot!==i||p||Qe!==null&&Qe.memoizedState.tag&1){if(a.flags|=2048,ls(9,Fh.bind(null,a,u,d,i),void 0,null),Je===null)throw Error(t(349));mr&30||Mh(a,i,d)}return d}function Mh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=be.updateQueue,i===null?(i={lastEffect:null,stores:null},be.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Fh(n,i,a,u){i.value=a,i.getSnapshot=u,jh(i)&&$h(n)}function Uh(n,i,a){return a(function(){jh(i)&&$h(n)})}function jh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ft(n,a)}catch{return!0}}function $h(n){var i=dn(n,1);i!==null&&Vt(i,n,1,-1)}function zh(n){var i=Jt();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:n},i.queue=n,n=n.dispatch=Ww.bind(null,be,n),[i.memoizedState,n]}function ls(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=be.updateQueue,i===null?(i={lastEffect:null,stores:null},be.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Vh(){return Lt().memoizedState}function Go(n,i,a,u){var d=Jt();be.flags|=n,d.memoizedState=ls(1|i,a,void 0,u===void 0?null:u)}function qo(n,i,a,u){var d=Lt();u=u===void 0?null:u;var p=void 0;if(Ke!==null){var m=Ke.memoizedState;if(p=m.destroy,u!==null&&ku(u,m.deps)){d.memoizedState=ls(i,a,p,u);return}}be.flags|=n,d.memoizedState=ls(1|i,a,p,u)}function Bh(n,i){return Go(8390656,8,n,i)}function Ou(n,i){return qo(2048,8,n,i)}function Wh(n,i){return qo(4,2,n,i)}function Hh(n,i){return qo(4,4,n,i)}function Kh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Gh(n,i,a){return a=a!=null?a.concat([n]):null,qo(4,4,Kh.bind(null,i,n),a)}function Au(){}function qh(n,i){var a=Lt();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&ku(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Yh(n,i){var a=Lt();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&ku(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Qh(n,i,a){return mr&21?(Ft(a,i)||(a=kf(),be.lanes|=a,_r|=a,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,_t=!0),n.memoizedState=a)}function Vw(n,i){var a=Ee;Ee=a!==0&&4>a?a:4,n(!0);var u=Tu.transition;Tu.transition={};try{n(!1),i()}finally{Ee=a,Tu.transition=u}}function Jh(){return Lt().memoizedState}function Bw(n,i,a){var u=Vn(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Xh(n))Zh(i,a);else if(a=Ph(n,i,a,u),a!==null){var d=ft();Vt(a,n,u,d),ep(a,i,u)}}function Ww(n,i,a){var u=Vn(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xh(n))Zh(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var m=i.lastRenderedState,w=p(m,a);if(d.hasEagerState=!0,d.eagerState=w,Ft(w,m)){var E=i.interleaved;E===null?(d.next=d,vu(i)):(d.next=E.next,E.next=d),i.interleaved=d;return}}catch{}finally{}a=Ph(n,i,d,u),a!==null&&(d=ft(),Vt(a,n,u,d),ep(a,i,u))}}function Xh(n){var i=n.alternate;return n===be||i!==null&&i===be}function Zh(n,i){ss=Ko=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function ep(n,i,a){if(a&4194240){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Dl(n,a)}}var Yo={readContext:At,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},Hw={readContext:At,useCallback:function(n,i){return Jt().memoizedState=[n,i===void 0?null:i],n},useContext:At,useEffect:Bh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Go(4194308,4,Kh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Go(4194308,4,n,i)},useInsertionEffect:function(n,i){return Go(4,2,n,i)},useMemo:function(n,i){var a=Jt();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Jt();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Bw.bind(null,be,n),[u.memoizedState,n]},useRef:function(n){var i=Jt();return n={current:n},i.memoizedState=n},useState:zh,useDebugValue:Au,useDeferredValue:function(n){return Jt().memoizedState=n},useTransition:function(){var n=zh(!1),i=n[0];return n=Vw.bind(null,n[1]),Jt().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=be,d=Jt();if(Le){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Je===null)throw Error(t(349));mr&30||Mh(u,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,Bh(Uh.bind(null,u,p,n),[n]),u.flags|=2048,ls(9,Fh.bind(null,u,p,a,i),void 0,null),a},useId:function(){var n=Jt(),i=Je.identifierPrefix;if(Le){var a=cn,u=un;a=(u&~(1<<32-Mt(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=os++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=zw++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Kw={readContext:At,useCallback:qh,useContext:At,useEffect:Ou,useImperativeHandle:Gh,useInsertionEffect:Wh,useLayoutEffect:Hh,useMemo:Yh,useReducer:Pu,useRef:Vh,useState:function(){return Pu(as)},useDebugValue:Au,useDeferredValue:function(n){var i=Lt();return Qh(i,Ke.memoizedState,n)},useTransition:function(){var n=Pu(as)[0],i=Lt().memoizedState;return[n,i]},useMutableSource:Dh,useSyncExternalStore:bh,useId:Jh,unstable_isNewReconciler:!1},Gw={readContext:At,useCallback:qh,useContext:At,useEffect:Ou,useImperativeHandle:Gh,useInsertionEffect:Wh,useLayoutEffect:Hh,useMemo:Yh,useReducer:xu,useRef:Vh,useState:function(){return xu(as)},useDebugValue:Au,useDeferredValue:function(n){var i=Lt();return Ke===null?i.memoizedState=n:Qh(i,Ke.memoizedState,n)},useTransition:function(){var n=xu(as)[0],i=Lt().memoizedState;return[n,i]},useMutableSource:Dh,useSyncExternalStore:bh,useId:Jh,unstable_isNewReconciler:!1};function jt(n,i){if(n&&n.defaultProps){i=$({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Lu(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:$({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Qo={isMounted:function(n){return(n=n._reactInternals)?ur(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=ft(),d=Vn(n),p=fn(u,d);p.payload=i,a!=null&&(p.callback=a),i=Un(n,p,d),i!==null&&(Vt(i,n,d,u),Vo(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=ft(),d=Vn(n),p=fn(u,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=Un(n,p,d),i!==null&&(Vt(i,n,d,u),Vo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=ft(),u=Vn(n),d=fn(a,u);d.tag=2,i!=null&&(d.callback=i),i=Un(n,d,u),i!==null&&(Vt(i,n,u,a),Vo(i,n,u))}};function tp(n,i,a,u,d,p,m){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,m):i.prototype&&i.prototype.isPureReactComponent?!qi(a,u)||!qi(d,p):!0}function np(n,i,a){var u=!1,d=bn,p=i.contextType;return typeof p=="object"&&p!==null?p=At(p):(d=mt(i)?dr:ot.current,u=i.contextTypes,p=(u=u!=null)?qr(n,d):bn),i=new i(a,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qo,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function rp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&Qo.enqueueReplaceState(i,i.state,null)}function Du(n,i,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},wu(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=At(p):(p=mt(i)?dr:ot.current,d.context=qr(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Lu(n,i,p,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Qo.enqueueReplaceState(d,d.state,null),Bo(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ni(n,i){try{var a="",u=i;do a+=pe(u),u=u.return;while(u);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function bu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Mu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var qw=typeof WeakMap=="function"?WeakMap:Map;function ip(n,i,a){a=fn(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){ra||(ra=!0,Ju=u),Mu(n,i)},a}function sp(n,i,a){a=fn(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){Mu(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Mu(n,i),typeof u!="function"&&($n===null?$n=new Set([this]):$n.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),a}function op(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new qw;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),n=lE.bind(null,n,i,a),i.then(n,n))}function ap(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function lp(n,i,a,u,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=fn(-1,1),i.tag=2,Un(a,i,1))),a.lanes|=1),n)}var Yw=Q.ReactCurrentOwner,_t=!1;function dt(n,i,a,u){i.child=n===null?Nh(i,null,a,u):Xr(i,n.child,a,u)}function up(n,i,a,u,d){a=a.render;var p=i.ref;return ei(i,d),u=Ru(n,i,a,u,p,d),a=Nu(),n!==null&&!_t?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,hn(n,i,d)):(Le&&a&&cu(i),i.flags|=1,dt(n,i,u,d),i.child)}function cp(n,i,a,u,d){if(n===null){var p=a.type;return typeof p=="function"&&!ic(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,dp(n,i,p,u,d)):(n=ua(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,!(n.lanes&d)){var m=p.memoizedProps;if(a=a.compare,a=a!==null?a:qi,a(m,u)&&n.ref===i.ref)return hn(n,i,d)}return i.flags|=1,n=Wn(p,u),n.ref=i.ref,n.return=i,i.child=n}function dp(n,i,a,u,d){if(n!==null){var p=n.memoizedProps;if(qi(p,u)&&n.ref===i.ref)if(_t=!1,i.pendingProps=u=p,(n.lanes&d)!==0)n.flags&131072&&(_t=!0);else return i.lanes=n.lanes,hn(n,i,d)}return Fu(n,i,a,u,d)}function fp(n,i,a){var u=i.pendingProps,d=u.children,p=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(ii,Rt),Rt|=a;else{if(!(a&1073741824))return n=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Re(ii,Rt),Rt|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:a,Re(ii,Rt),Rt|=u}else p!==null?(u=p.baseLanes|a,i.memoizedState=null):u=a,Re(ii,Rt),Rt|=u;return dt(n,i,d,a),i.child}function hp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Fu(n,i,a,u,d){var p=mt(a)?dr:ot.current;return p=qr(i,p),ei(i,d),a=Ru(n,i,a,u,p,d),u=Nu(),n!==null&&!_t?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,hn(n,i,d)):(Le&&u&&cu(i),i.flags|=1,dt(n,i,a,d),i.child)}function pp(n,i,a,u,d){if(mt(a)){var p=!0;Do(i)}else p=!1;if(ei(i,d),i.stateNode===null)Xo(n,i),np(i,a,u),Du(i,a,u,d),u=!0;else if(n===null){var m=i.stateNode,w=i.memoizedProps;m.props=w;var E=m.context,x=a.contextType;typeof x=="object"&&x!==null?x=At(x):(x=mt(a)?dr:ot.current,x=qr(i,x));var L=a.getDerivedStateFromProps,D=typeof L=="function"||typeof m.getSnapshotBeforeUpdate=="function";D||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==u||E!==x)&&rp(i,m,u,x),Fn=!1;var A=i.memoizedState;m.state=A,Bo(i,u,m,d),E=i.memoizedState,w!==u||A!==E||gt.current||Fn?(typeof L=="function"&&(Lu(i,a,L,u),E=i.memoizedState),(w=Fn||tp(i,a,w,u,A,E,x))?(D||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=E),m.props=u,m.state=E,m.context=x,u=w):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{m=i.stateNode,xh(n,i),w=i.memoizedProps,x=i.type===i.elementType?w:jt(i.type,w),m.props=x,D=i.pendingProps,A=m.context,E=a.contextType,typeof E=="object"&&E!==null?E=At(E):(E=mt(a)?dr:ot.current,E=qr(i,E));var V=a.getDerivedStateFromProps;(L=typeof V=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==D||A!==E)&&rp(i,m,u,E),Fn=!1,A=i.memoizedState,m.state=A,Bo(i,u,m,d);var K=i.memoizedState;w!==D||A!==K||gt.current||Fn?(typeof V=="function"&&(Lu(i,a,V,u),K=i.memoizedState),(x=Fn||tp(i,a,x,u,A,K,E)||!1)?(L||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,K,E),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,K,E)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||w===n.memoizedProps&&A===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&A===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=K),m.props=u,m.state=K,m.context=E,u=x):(typeof m.componentDidUpdate!="function"||w===n.memoizedProps&&A===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&A===n.memoizedState||(i.flags|=1024),u=!1)}return Uu(n,i,a,u,p,d)}function Uu(n,i,a,u,d,p){hp(n,i);var m=(i.flags&128)!==0;if(!u&&!m)return d&&vh(i,a,!1),hn(n,i,p);u=i.stateNode,Yw.current=i;var w=m&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&m?(i.child=Xr(i,n.child,null,p),i.child=Xr(i,null,w,p)):dt(n,i,w,p),i.memoizedState=u.state,d&&vh(i,a,!0),i.child}function gp(n){var i=n.stateNode;i.pendingContext?_h(n,i.pendingContext,i.pendingContext!==i.context):i.context&&_h(n,i.context,!1),Eu(n,i.containerInfo)}function mp(n,i,a,u,d){return Jr(),pu(d),i.flags|=256,dt(n,i,a,u),i.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function $u(n){return{baseLanes:n,cachePool:null,transitions:null}}function _p(n,i,a){var u=i.pendingProps,d=De.current,p=!1,m=(i.flags&128)!==0,w;if((w=m)||(w=n!==null&&n.memoizedState===null?!1:(d&2)!==0),w?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Re(De,d&1),n===null)return hu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(m=u.children,n=u.fallback,p?(u=i.mode,p=i.child,m={mode:"hidden",children:m},!(u&1)&&p!==null?(p.childLanes=0,p.pendingProps=m):p=ca(m,u,0,null),n=Er(n,u,a,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=$u(a),i.memoizedState=ju,n):zu(i,m));if(d=n.memoizedState,d!==null&&(w=d.dehydrated,w!==null))return Qw(n,i,m,u,w,d,a);if(p){p=u.fallback,m=i.mode,d=n.child,w=d.sibling;var E={mode:"hidden",children:u.children};return!(m&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=E,i.deletions=null):(u=Wn(d,E),u.subtreeFlags=d.subtreeFlags&14680064),w!==null?p=Wn(w,p):(p=Er(p,m,a,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,m=n.child.memoizedState,m=m===null?$u(a):{baseLanes:m.baseLanes|a,cachePool:null,transitions:m.transitions},p.memoizedState=m,p.childLanes=n.childLanes&~a,i.memoizedState=ju,u}return p=n.child,n=p.sibling,u=Wn(p,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function zu(n,i){return i=ca({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Jo(n,i,a,u){return u!==null&&pu(u),Xr(i,n.child,null,a),n=zu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Qw(n,i,a,u,d,p,m){if(a)return i.flags&256?(i.flags&=-257,u=bu(Error(t(422))),Jo(n,i,m,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=u.fallback,d=i.mode,u=ca({mode:"visible",children:u.children},d,0,null),p=Er(p,d,m,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,i.mode&1&&Xr(i,n.child,null,m),i.child.memoizedState=$u(m),i.memoizedState=ju,p);if(!(i.mode&1))return Jo(n,i,m,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var w=u.dgst;return u=w,p=Error(t(419)),u=bu(p,u,void 0),Jo(n,i,m,u)}if(w=(m&n.childLanes)!==0,_t||w){if(u=Je,u!==null){switch(m&-m){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|m)?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,dn(n,d),Vt(u,n,d,-1))}return rc(),u=bu(Error(t(421))),Jo(n,i,m,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=uE.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,kt=Ln(d.nextSibling),Tt=i,Le=!0,Ut=null,n!==null&&(xt[Ot++]=un,xt[Ot++]=cn,xt[Ot++]=fr,un=n.id,cn=n.overflow,fr=i),i=zu(i,u.children),i.flags|=4096,i)}function yp(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),yu(n.return,i,a)}function Vu(n,i,a,u,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=a,p.tailMode=d)}function vp(n,i,a){var u=i.pendingProps,d=u.revealOrder,p=u.tail;if(dt(n,i,u.children,a),u=De.current,u&2)u=u&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&yp(n,a,i);else if(n.tag===19)yp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Re(De,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Wo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Vu(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Wo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Vu(i,!0,a,null,p);break;case"together":Vu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Xo(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function hn(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),_r|=i.lanes,!(a&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Wn(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Wn(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Jw(n,i,a){switch(i.tag){case 3:gp(i),Jr();break;case 5:Lh(i);break;case 1:mt(i.type)&&Do(i);break;case 4:Eu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Re($o,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Re(De,De.current&1),i.flags|=128,null):a&i.child.childLanes?_p(n,i,a):(Re(De,De.current&1),n=hn(n,i,a),n!==null?n.sibling:null);Re(De,De.current&1);break;case 19:if(u=(a&i.childLanes)!==0,n.flags&128){if(u)return vp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Re(De,De.current),u)break;return null;case 22:case 23:return i.lanes=0,fp(n,i,a)}return hn(n,i,a)}var wp,Bu,Ep,Sp;wp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Bu=function(){},Ep=function(n,i,a,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,gr(Qt.current);var p=null;switch(a){case"input":d=yl(n,d),u=yl(n,u),p=[];break;case"select":d=$({},d,{value:void 0}),u=$({},u,{value:void 0}),p=[];break;case"textarea":d=El(n,d),u=El(n,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Oo)}Cl(a,u);var m;a=null;for(x in d)if(!u.hasOwnProperty(x)&&d.hasOwnProperty(x)&&d[x]!=null)if(x==="style"){var w=d[x];for(m in w)w.hasOwnProperty(m)&&(a||(a={}),a[m]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?p||(p=[]):(p=p||[]).push(x,null));for(x in u){var E=u[x];if(w=d!=null?d[x]:void 0,u.hasOwnProperty(x)&&E!==w&&(E!=null||w!=null))if(x==="style")if(w){for(m in w)!w.hasOwnProperty(m)||E&&E.hasOwnProperty(m)||(a||(a={}),a[m]="");for(m in E)E.hasOwnProperty(m)&&w[m]!==E[m]&&(a||(a={}),a[m]=E[m])}else a||(p||(p=[]),p.push(x,a)),a=E;else x==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,w=w?w.__html:void 0,E!=null&&w!==E&&(p=p||[]).push(x,E)):x==="children"?typeof E!="string"&&typeof E!="number"||(p=p||[]).push(x,""+E):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(o.hasOwnProperty(x)?(E!=null&&x==="onScroll"&&Pe("scroll",n),p||w===E||(p=[])):(p=p||[]).push(x,E))}a&&(p=p||[]).push("style",a);var x=p;(i.updateQueue=x)&&(i.flags|=4)}},Sp=function(n,i,a,u){a!==u&&(i.flags|=4)};function us(n,i){if(!Le)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function lt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Xw(n,i,a){var u=i.pendingProps;switch(du(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(i),null;case 1:return mt(i.type)&&Lo(),lt(i),null;case 3:return u=i.stateNode,ti(),xe(gt),xe(ot),Iu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Uo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Ut!==null&&(ec(Ut),Ut=null))),Bu(n,i),lt(i),null;case 5:Su(i);var d=gr(is.current);if(a=i.type,n!==null&&i.stateNode!=null)Ep(n,i,a,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return lt(i),null}if(n=gr(Qt.current),Uo(i)){u=i.stateNode,a=i.type;var p=i.memoizedProps;switch(u[Yt]=i,u[Zi]=p,n=(i.mode&1)!==0,a){case"dialog":Pe("cancel",u),Pe("close",u);break;case"iframe":case"object":case"embed":Pe("load",u);break;case"video":case"audio":for(d=0;d<Qi.length;d++)Pe(Qi[d],u);break;case"source":Pe("error",u);break;case"img":case"image":case"link":Pe("error",u),Pe("load",u);break;case"details":Pe("toggle",u);break;case"input":tf(u,p),Pe("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Pe("invalid",u);break;case"textarea":sf(u,p),Pe("invalid",u)}Cl(a,p),d=null;for(var m in p)if(p.hasOwnProperty(m)){var w=p[m];m==="children"?typeof w=="string"?u.textContent!==w&&(p.suppressHydrationWarning!==!0&&xo(u.textContent,w,n),d=["children",w]):typeof w=="number"&&u.textContent!==""+w&&(p.suppressHydrationWarning!==!0&&xo(u.textContent,w,n),d=["children",""+w]):o.hasOwnProperty(m)&&w!=null&&m==="onScroll"&&Pe("scroll",u)}switch(a){case"input":oo(u),rf(u,p,!0);break;case"textarea":oo(u),af(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Oo)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{m=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lf(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=m.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=m.createElement(a,{is:u.is}):(n=m.createElement(a),a==="select"&&(m=n,u.multiple?m.multiple=!0:u.size&&(m.size=u.size))):n=m.createElementNS(n,a),n[Yt]=i,n[Zi]=u,wp(n,i,!1,!1),i.stateNode=n;e:{switch(m=Il(a,u),a){case"dialog":Pe("cancel",n),Pe("close",n),d=u;break;case"iframe":case"object":case"embed":Pe("load",n),d=u;break;case"video":case"audio":for(d=0;d<Qi.length;d++)Pe(Qi[d],n);d=u;break;case"source":Pe("error",n),d=u;break;case"img":case"image":case"link":Pe("error",n),Pe("load",n),d=u;break;case"details":Pe("toggle",n),d=u;break;case"input":tf(n,u),d=yl(n,u),Pe("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=$({},u,{value:void 0}),Pe("invalid",n);break;case"textarea":sf(n,u),d=El(n,u),Pe("invalid",n);break;default:d=u}Cl(a,d),w=d;for(p in w)if(w.hasOwnProperty(p)){var E=w[p];p==="style"?df(n,E):p==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&uf(n,E)):p==="children"?typeof E=="string"?(a!=="textarea"||E!=="")&&Oi(n,E):typeof E=="number"&&Oi(n,""+E):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?E!=null&&p==="onScroll"&&Pe("scroll",n):E!=null&&W(n,p,E,m))}switch(a){case"input":oo(n),rf(n,u,!1);break;case"textarea":oo(n),af(n);break;case"option":u.value!=null&&n.setAttribute("value",""+we(u.value));break;case"select":n.multiple=!!u.multiple,p=u.value,p!=null?Mr(n,!!u.multiple,p,!1):u.defaultValue!=null&&Mr(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Oo)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return lt(i),null;case 6:if(n&&i.stateNode!=null)Sp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=gr(is.current),gr(Qt.current),Uo(i)){if(u=i.stateNode,a=i.memoizedProps,u[Yt]=i,(p=u.nodeValue!==a)&&(n=Tt,n!==null))switch(n.tag){case 3:xo(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xo(u.nodeValue,a,(n.mode&1)!==0)}p&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Yt]=i,i.stateNode=u}return lt(i),null;case 13:if(xe(De),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Le&&kt!==null&&i.mode&1&&!(i.flags&128))Th(),Jr(),i.flags|=98560,p=!1;else if(p=Uo(i),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Yt]=i}else Jr(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;lt(i),p=!1}else Ut!==null&&(ec(Ut),Ut=null),p=!0;if(!p)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(n===null||De.current&1?Ge===0&&(Ge=3):rc())),i.updateQueue!==null&&(i.flags|=4),lt(i),null);case 4:return ti(),Bu(n,i),n===null&&Ji(i.stateNode.containerInfo),lt(i),null;case 10:return _u(i.type._context),lt(i),null;case 17:return mt(i.type)&&Lo(),lt(i),null;case 19:if(xe(De),p=i.memoizedState,p===null)return lt(i),null;if(u=(i.flags&128)!==0,m=p.rendering,m===null)if(u)us(p,!1);else{if(Ge!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(m=Wo(n),m!==null){for(i.flags|=128,us(p,!1),u=m.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)p=a,n=u,p.flags&=14680066,m=p.alternate,m===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=m.childLanes,p.lanes=m.lanes,p.child=m.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=m.memoizedProps,p.memoizedState=m.memoizedState,p.updateQueue=m.updateQueue,p.type=m.type,n=m.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Re(De,De.current&1|2),i.child}n=n.sibling}p.tail!==null&&$e()>si&&(i.flags|=128,u=!0,us(p,!1),i.lanes=4194304)}else{if(!u)if(n=Wo(m),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),us(p,!0),p.tail===null&&p.tailMode==="hidden"&&!m.alternate&&!Le)return lt(i),null}else 2*$e()-p.renderingStartTime>si&&a!==1073741824&&(i.flags|=128,u=!0,us(p,!1),i.lanes=4194304);p.isBackwards?(m.sibling=i.child,i.child=m):(a=p.last,a!==null?a.sibling=m:i.child=m,p.last=m)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=$e(),i.sibling=null,a=De.current,Re(De,u?a&1|2:a&1),i):(lt(i),null);case 22:case 23:return nc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?Rt&1073741824&&(lt(i),i.subtreeFlags&6&&(i.flags|=8192)):lt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Zw(n,i){switch(du(i),i.tag){case 1:return mt(i.type)&&Lo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ti(),xe(gt),xe(ot),Iu(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Su(i),null;case 13:if(xe(De),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Jr()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return xe(De),null;case 4:return ti(),null;case 10:return _u(i.type._context),null;case 22:case 23:return nc(),null;case 24:return null;default:return null}}var Zo=!1,ut=!1,eE=typeof WeakSet=="function"?WeakSet:Set,H=null;function ri(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Ue(n,i,u)}else a.current=null}function Wu(n,i,a){try{a()}catch(u){Ue(n,i,u)}}var Cp=!1;function tE(n,i){if(nu=vo,n=th(),ql(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var m=0,w=-1,E=-1,x=0,L=0,D=n,A=null;t:for(;;){for(var V;D!==a||d!==0&&D.nodeType!==3||(w=m+d),D!==p||u!==0&&D.nodeType!==3||(E=m+u),D.nodeType===3&&(m+=D.nodeValue.length),(V=D.firstChild)!==null;)A=D,D=V;for(;;){if(D===n)break t;if(A===a&&++x===d&&(w=m),A===p&&++L===u&&(E=m),(V=D.nextSibling)!==null)break;D=A,A=D.parentNode}D=V}a=w===-1||E===-1?null:{start:w,end:E}}else a=null}a=a||{start:0,end:0}}else a=null;for(ru={focusedElem:n,selectionRange:a},vo=!1,H=i;H!==null;)if(i=H,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,H=n;else for(;H!==null;){i=H;try{var K=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var q=K.memoizedProps,ze=K.memoizedState,T=i.stateNode,S=T.getSnapshotBeforeUpdate(i.elementType===i.type?q:jt(i.type,q),ze);T.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var k=i.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(b){Ue(i,i.return,b)}if(n=i.sibling,n!==null){n.return=i.return,H=n;break}H=i.return}return K=Cp,Cp=!1,K}function cs(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Wu(i,a,p)}d=d.next}while(d!==u)}}function ea(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Hu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Ip(n){var i=n.alternate;i!==null&&(n.alternate=null,Ip(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Yt],delete i[Zi],delete i[au],delete i[Fw],delete i[Uw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Tp(n){return n.tag===5||n.tag===3||n.tag===4}function kp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Tp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ku(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Oo));else if(u!==4&&(n=n.child,n!==null))for(Ku(n,i,a),n=n.sibling;n!==null;)Ku(n,i,a),n=n.sibling}function Gu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Gu(n,i,a),n=n.sibling;n!==null;)Gu(n,i,a),n=n.sibling}var tt=null,$t=!1;function jn(n,i,a){for(a=a.child;a!==null;)Rp(n,i,a),a=a.sibling}function Rp(n,i,a){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(ho,a)}catch{}switch(a.tag){case 5:ut||ri(a,i);case 6:var u=tt,d=$t;tt=null,jn(n,i,a),tt=u,$t=d,tt!==null&&($t?(n=tt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):tt.removeChild(a.stateNode));break;case 18:tt!==null&&($t?(n=tt,a=a.stateNode,n.nodeType===8?ou(n.parentNode,a):n.nodeType===1&&ou(n,a),Vi(n)):ou(tt,a.stateNode));break;case 4:u=tt,d=$t,tt=a.stateNode.containerInfo,$t=!0,jn(n,i,a),tt=u,$t=d;break;case 0:case 11:case 14:case 15:if(!ut&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,m=p.destroy;p=p.tag,m!==void 0&&(p&2||p&4)&&Wu(a,i,m),d=d.next}while(d!==u)}jn(n,i,a);break;case 1:if(!ut&&(ri(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(w){Ue(a,i,w)}jn(n,i,a);break;case 21:jn(n,i,a);break;case 22:a.mode&1?(ut=(u=ut)||a.memoizedState!==null,jn(n,i,a),ut=u):jn(n,i,a);break;default:jn(n,i,a)}}function Np(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new eE),i.forEach(function(u){var d=cE.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function zt(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var p=n,m=i,w=m;e:for(;w!==null;){switch(w.tag){case 5:tt=w.stateNode,$t=!1;break e;case 3:tt=w.stateNode.containerInfo,$t=!0;break e;case 4:tt=w.stateNode.containerInfo,$t=!0;break e}w=w.return}if(tt===null)throw Error(t(160));Rp(p,m,d),tt=null,$t=!1;var E=d.alternate;E!==null&&(E.return=null),d.return=null}catch(x){Ue(d,i,x)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Pp(i,n),i=i.sibling}function Pp(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(zt(i,n),Xt(n),u&4){try{cs(3,n,n.return),ea(3,n)}catch(q){Ue(n,n.return,q)}try{cs(5,n,n.return)}catch(q){Ue(n,n.return,q)}}break;case 1:zt(i,n),Xt(n),u&512&&a!==null&&ri(a,a.return);break;case 5:if(zt(i,n),Xt(n),u&512&&a!==null&&ri(a,a.return),n.flags&32){var d=n.stateNode;try{Oi(d,"")}catch(q){Ue(n,n.return,q)}}if(u&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,m=a!==null?a.memoizedProps:p,w=n.type,E=n.updateQueue;if(n.updateQueue=null,E!==null)try{w==="input"&&p.type==="radio"&&p.name!=null&&nf(d,p),Il(w,m);var x=Il(w,p);for(m=0;m<E.length;m+=2){var L=E[m],D=E[m+1];L==="style"?df(d,D):L==="dangerouslySetInnerHTML"?uf(d,D):L==="children"?Oi(d,D):W(d,L,D,x)}switch(w){case"input":vl(d,p);break;case"textarea":of(d,p);break;case"select":var A=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var V=p.value;V!=null?Mr(d,!!p.multiple,V,!1):A!==!!p.multiple&&(p.defaultValue!=null?Mr(d,!!p.multiple,p.defaultValue,!0):Mr(d,!!p.multiple,p.multiple?[]:"",!1))}d[Zi]=p}catch(q){Ue(n,n.return,q)}}break;case 6:if(zt(i,n),Xt(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(q){Ue(n,n.return,q)}}break;case 3:if(zt(i,n),Xt(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Vi(i.containerInfo)}catch(q){Ue(n,n.return,q)}break;case 4:zt(i,n),Xt(n);break;case 13:zt(i,n),Xt(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Qu=$e())),u&4&&Np(n);break;case 22:if(L=a!==null&&a.memoizedState!==null,n.mode&1?(ut=(x=ut)||L,zt(i,n),ut=x):zt(i,n),Xt(n),u&8192){if(x=n.memoizedState!==null,(n.stateNode.isHidden=x)&&!L&&n.mode&1)for(H=n,L=n.child;L!==null;){for(D=H=L;H!==null;){switch(A=H,V=A.child,A.tag){case 0:case 11:case 14:case 15:cs(4,A,A.return);break;case 1:ri(A,A.return);var K=A.stateNode;if(typeof K.componentWillUnmount=="function"){u=A,a=A.return;try{i=u,K.props=i.memoizedProps,K.state=i.memoizedState,K.componentWillUnmount()}catch(q){Ue(u,a,q)}}break;case 5:ri(A,A.return);break;case 22:if(A.memoizedState!==null){Ap(D);continue}}V!==null?(V.return=A,H=V):Ap(D)}L=L.sibling}e:for(L=null,D=n;;){if(D.tag===5){if(L===null){L=D;try{d=D.stateNode,x?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(w=D.stateNode,E=D.memoizedProps.style,m=E!=null&&E.hasOwnProperty("display")?E.display:null,w.style.display=cf("display",m))}catch(q){Ue(n,n.return,q)}}}else if(D.tag===6){if(L===null)try{D.stateNode.nodeValue=x?"":D.memoizedProps}catch(q){Ue(n,n.return,q)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===n)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===n)break e;for(;D.sibling===null;){if(D.return===null||D.return===n)break e;L===D&&(L=null),D=D.return}L===D&&(L=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:zt(i,n),Xt(n),u&4&&Np(n);break;case 21:break;default:zt(i,n),Xt(n)}}function Xt(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Tp(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Oi(d,""),u.flags&=-33);var p=kp(n);Gu(n,p,d);break;case 3:case 4:var m=u.stateNode.containerInfo,w=kp(n);Ku(n,w,m);break;default:throw Error(t(161))}}catch(E){Ue(n,n.return,E)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function nE(n,i,a){H=n,xp(n)}function xp(n,i,a){for(var u=(n.mode&1)!==0;H!==null;){var d=H,p=d.child;if(d.tag===22&&u){var m=d.memoizedState!==null||Zo;if(!m){var w=d.alternate,E=w!==null&&w.memoizedState!==null||ut;w=Zo;var x=ut;if(Zo=m,(ut=E)&&!x)for(H=d;H!==null;)m=H,E=m.child,m.tag===22&&m.memoizedState!==null?Lp(d):E!==null?(E.return=m,H=E):Lp(d);for(;p!==null;)H=p,xp(p),p=p.sibling;H=d,Zo=w,ut=x}Op(n)}else d.subtreeFlags&8772&&p!==null?(p.return=d,H=p):Op(n)}}function Op(n){for(;H!==null;){var i=H;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:ut||ea(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!ut)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:jt(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Ah(i,p,u);break;case 3:var m=i.updateQueue;if(m!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ah(i,m,a)}break;case 5:var w=i.stateNode;if(a===null&&i.flags&4){a=w;var E=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&a.focus();break;case"img":E.src&&(a.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var x=i.alternate;if(x!==null){var L=x.memoizedState;if(L!==null){var D=L.dehydrated;D!==null&&Vi(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}ut||i.flags&512&&Hu(i)}catch(A){Ue(i,i.return,A)}}if(i===n){H=null;break}if(a=i.sibling,a!==null){a.return=i.return,H=a;break}H=i.return}}function Ap(n){for(;H!==null;){var i=H;if(i===n){H=null;break}var a=i.sibling;if(a!==null){a.return=i.return,H=a;break}H=i.return}}function Lp(n){for(;H!==null;){var i=H;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ea(4,i)}catch(E){Ue(i,a,E)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(E){Ue(i,d,E)}}var p=i.return;try{Hu(i)}catch(E){Ue(i,p,E)}break;case 5:var m=i.return;try{Hu(i)}catch(E){Ue(i,m,E)}}}catch(E){Ue(i,i.return,E)}if(i===n){H=null;break}var w=i.sibling;if(w!==null){w.return=i.return,H=w;break}H=i.return}}var rE=Math.ceil,ta=Q.ReactCurrentDispatcher,qu=Q.ReactCurrentOwner,Dt=Q.ReactCurrentBatchConfig,de=0,Je=null,We=null,nt=0,Rt=0,ii=Dn(0),Ge=0,ds=null,_r=0,na=0,Yu=0,fs=null,yt=null,Qu=0,si=1/0,pn=null,ra=!1,Ju=null,$n=null,ia=!1,zn=null,sa=0,hs=0,Xu=null,oa=-1,aa=0;function ft(){return de&6?$e():oa!==-1?oa:oa=$e()}function Vn(n){return n.mode&1?de&2&&nt!==0?nt&-nt:$w.transition!==null?(aa===0&&(aa=kf()),aa):(n=Ee,n!==0||(n=window.event,n=n===void 0?16:bf(n.type)),n):1}function Vt(n,i,a,u){if(50<hs)throw hs=0,Xu=null,Error(t(185));Fi(n,a,u),(!(de&2)||n!==Je)&&(n===Je&&(!(de&2)&&(na|=a),Ge===4&&Bn(n,nt)),vt(n,u),a===1&&de===0&&!(i.mode&1)&&(si=$e()+500,bo&&Mn()))}function vt(n,i){var a=n.callbackNode;$v(n,i);var u=mo(n,n===Je?nt:0);if(u===0)a!==null&&Cf(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Cf(a),i===1)n.tag===0?jw(bp.bind(null,n)):wh(bp.bind(null,n)),bw(function(){!(de&6)&&Mn()}),a=null;else{switch(Rf(u)){case 1:a=Ol;break;case 4:a=If;break;case 16:a=fo;break;case 536870912:a=Tf;break;default:a=fo}a=Bp(a,Dp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Dp(n,i){if(oa=-1,aa=0,de&6)throw Error(t(327));var a=n.callbackNode;if(oi()&&n.callbackNode!==a)return null;var u=mo(n,n===Je?nt:0);if(u===0)return null;if(u&30||u&n.expiredLanes||i)i=la(n,u);else{i=u;var d=de;de|=2;var p=Fp();(Je!==n||nt!==i)&&(pn=null,si=$e()+500,vr(n,i));do try{oE();break}catch(w){Mp(n,w)}while(!0);mu(),ta.current=p,de=d,We!==null?i=0:(Je=null,nt=0,i=Ge)}if(i!==0){if(i===2&&(d=Al(n),d!==0&&(u=d,i=Zu(n,d))),i===1)throw a=ds,vr(n,0),Bn(n,u),vt(n,$e()),a;if(i===6)Bn(n,u);else{if(d=n.current.alternate,!(u&30)&&!iE(d)&&(i=la(n,u),i===2&&(p=Al(n),p!==0&&(u=p,i=Zu(n,p))),i===1))throw a=ds,vr(n,0),Bn(n,u),vt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:wr(n,yt,pn);break;case 3:if(Bn(n,u),(u&130023424)===u&&(i=Qu+500-$e(),10<i)){if(mo(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){ft(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=su(wr.bind(null,n,yt,pn),i);break}wr(n,yt,pn);break;case 4:if(Bn(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var m=31-Mt(u);p=1<<m,m=i[m],m>d&&(d=m),u&=~p}if(u=d,u=$e()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*rE(u/1960))-u,10<u){n.timeoutHandle=su(wr.bind(null,n,yt,pn),u);break}wr(n,yt,pn);break;case 5:wr(n,yt,pn);break;default:throw Error(t(329))}}}return vt(n,$e()),n.callbackNode===a?Dp.bind(null,n):null}function Zu(n,i){var a=fs;return n.current.memoizedState.isDehydrated&&(vr(n,i).flags|=256),n=la(n,i),n!==2&&(i=yt,yt=a,i!==null&&ec(i)),n}function ec(n){yt===null?yt=n:yt.push.apply(yt,n)}function iE(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],p=d.getSnapshot;d=d.value;try{if(!Ft(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Bn(n,i){for(i&=~Yu,i&=~na,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Mt(i),u=1<<a;n[a]=-1,i&=~u}}function bp(n){if(de&6)throw Error(t(327));oi();var i=mo(n,0);if(!(i&1))return vt(n,$e()),null;var a=la(n,i);if(n.tag!==0&&a===2){var u=Al(n);u!==0&&(i=u,a=Zu(n,u))}if(a===1)throw a=ds,vr(n,0),Bn(n,i),vt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,wr(n,yt,pn),vt(n,$e()),null}function tc(n,i){var a=de;de|=1;try{return n(i)}finally{de=a,de===0&&(si=$e()+500,bo&&Mn())}}function yr(n){zn!==null&&zn.tag===0&&!(de&6)&&oi();var i=de;de|=1;var a=Dt.transition,u=Ee;try{if(Dt.transition=null,Ee=1,n)return n()}finally{Ee=u,Dt.transition=a,de=i,!(de&6)&&Mn()}}function nc(){Rt=ii.current,xe(ii)}function vr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Dw(a)),We!==null)for(a=We.return;a!==null;){var u=a;switch(du(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Lo();break;case 3:ti(),xe(gt),xe(ot),Iu();break;case 5:Su(u);break;case 4:ti();break;case 13:xe(De);break;case 19:xe(De);break;case 10:_u(u.type._context);break;case 22:case 23:nc()}a=a.return}if(Je=n,We=n=Wn(n.current,null),nt=Rt=i,Ge=0,ds=null,Yu=na=_r=0,yt=fs=null,pr!==null){for(i=0;i<pr.length;i++)if(a=pr[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,p=a.pending;if(p!==null){var m=p.next;p.next=d,u.next=m}a.pending=u}pr=null}return n}function Mp(n,i){do{var a=We;try{if(mu(),Ho.current=Yo,Ko){for(var u=be.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ko=!1}if(mr=0,Qe=Ke=be=null,ss=!1,os=0,qu.current=null,a===null||a.return===null){Ge=1,ds=i,We=null;break}e:{var p=n,m=a.return,w=a,E=i;if(i=nt,w.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var x=E,L=w,D=L.tag;if(!(L.mode&1)&&(D===0||D===11||D===15)){var A=L.alternate;A?(L.updateQueue=A.updateQueue,L.memoizedState=A.memoizedState,L.lanes=A.lanes):(L.updateQueue=null,L.memoizedState=null)}var V=ap(m);if(V!==null){V.flags&=-257,lp(V,m,w,p,i),V.mode&1&&op(p,x,i),i=V,E=x;var K=i.updateQueue;if(K===null){var q=new Set;q.add(E),i.updateQueue=q}else K.add(E);break e}else{if(!(i&1)){op(p,x,i),rc();break e}E=Error(t(426))}}else if(Le&&w.mode&1){var ze=ap(m);if(ze!==null){!(ze.flags&65536)&&(ze.flags|=256),lp(ze,m,w,p,i),pu(ni(E,w));break e}}p=E=ni(E,w),Ge!==4&&(Ge=2),fs===null?fs=[p]:fs.push(p),p=m;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var T=ip(p,E,i);Oh(p,T);break e;case 1:w=E;var S=p.type,k=p.stateNode;if(!(p.flags&128)&&(typeof S.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&($n===null||!$n.has(k)))){p.flags|=65536,i&=-i,p.lanes|=i;var b=sp(p,w,i);Oh(p,b);break e}}p=p.return}while(p!==null)}jp(a)}catch(Y){i=Y,We===a&&a!==null&&(We=a=a.return);continue}break}while(!0)}function Fp(){var n=ta.current;return ta.current=Yo,n===null?Yo:n}function rc(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Je===null||!(_r&268435455)&&!(na&268435455)||Bn(Je,nt)}function la(n,i){var a=de;de|=2;var u=Fp();(Je!==n||nt!==i)&&(pn=null,vr(n,i));do try{sE();break}catch(d){Mp(n,d)}while(!0);if(mu(),de=a,ta.current=u,We!==null)throw Error(t(261));return Je=null,nt=0,Ge}function sE(){for(;We!==null;)Up(We)}function oE(){for(;We!==null&&!Ov();)Up(We)}function Up(n){var i=Vp(n.alternate,n,Rt);n.memoizedProps=n.pendingProps,i===null?jp(n):We=i,qu.current=null}function jp(n){var i=n;do{var a=i.alternate;if(n=i.return,i.flags&32768){if(a=Zw(a,i),a!==null){a.flags&=32767,We=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ge=6,We=null;return}}else if(a=Xw(a,i,Rt),a!==null){We=a;return}if(i=i.sibling,i!==null){We=i;return}We=i=n}while(i!==null);Ge===0&&(Ge=5)}function wr(n,i,a){var u=Ee,d=Dt.transition;try{Dt.transition=null,Ee=1,aE(n,i,a,u)}finally{Dt.transition=d,Ee=u}return null}function aE(n,i,a,u){do oi();while(zn!==null);if(de&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(zv(n,p),n===Je&&(We=Je=null,nt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||ia||(ia=!0,Bp(fo,function(){return oi(),null})),p=(a.flags&15990)!==0,a.subtreeFlags&15990||p){p=Dt.transition,Dt.transition=null;var m=Ee;Ee=1;var w=de;de|=4,qu.current=null,tE(n,a),Pp(a,n),Rw(ru),vo=!!nu,ru=nu=null,n.current=a,nE(a),Av(),de=w,Ee=m,Dt.transition=p}else n.current=a;if(ia&&(ia=!1,zn=n,sa=d),p=n.pendingLanes,p===0&&($n=null),bv(a.stateNode),vt(n,$e()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(ra)throw ra=!1,n=Ju,Ju=null,n;return sa&1&&n.tag!==0&&oi(),p=n.pendingLanes,p&1?n===Xu?hs++:(hs=0,Xu=n):hs=0,Mn(),null}function oi(){if(zn!==null){var n=Rf(sa),i=Dt.transition,a=Ee;try{if(Dt.transition=null,Ee=16>n?16:n,zn===null)var u=!1;else{if(n=zn,zn=null,sa=0,de&6)throw Error(t(331));var d=de;for(de|=4,H=n.current;H!==null;){var p=H,m=p.child;if(H.flags&16){var w=p.deletions;if(w!==null){for(var E=0;E<w.length;E++){var x=w[E];for(H=x;H!==null;){var L=H;switch(L.tag){case 0:case 11:case 15:cs(8,L,p)}var D=L.child;if(D!==null)D.return=L,H=D;else for(;H!==null;){L=H;var A=L.sibling,V=L.return;if(Ip(L),L===x){H=null;break}if(A!==null){A.return=V,H=A;break}H=V}}}var K=p.alternate;if(K!==null){var q=K.child;if(q!==null){K.child=null;do{var ze=q.sibling;q.sibling=null,q=ze}while(q!==null)}}H=p}}if(p.subtreeFlags&2064&&m!==null)m.return=p,H=m;else e:for(;H!==null;){if(p=H,p.flags&2048)switch(p.tag){case 0:case 11:case 15:cs(9,p,p.return)}var T=p.sibling;if(T!==null){T.return=p.return,H=T;break e}H=p.return}}var S=n.current;for(H=S;H!==null;){m=H;var k=m.child;if(m.subtreeFlags&2064&&k!==null)k.return=m,H=k;else e:for(m=S;H!==null;){if(w=H,w.flags&2048)try{switch(w.tag){case 0:case 11:case 15:ea(9,w)}}catch(Y){Ue(w,w.return,Y)}if(w===m){H=null;break e}var b=w.sibling;if(b!==null){b.return=w.return,H=b;break e}H=w.return}}if(de=d,Mn(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(ho,n)}catch{}u=!0}return u}finally{Ee=a,Dt.transition=i}}return!1}function $p(n,i,a){i=ni(a,i),i=ip(n,i,1),n=Un(n,i,1),i=ft(),n!==null&&(Fi(n,1,i),vt(n,i))}function Ue(n,i,a){if(n.tag===3)$p(n,n,a);else for(;i!==null;){if(i.tag===3){$p(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&($n===null||!$n.has(u))){n=ni(a,n),n=sp(i,n,1),i=Un(i,n,1),n=ft(),i!==null&&(Fi(i,1,n),vt(i,n));break}}i=i.return}}function lE(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=ft(),n.pingedLanes|=n.suspendedLanes&a,Je===n&&(nt&a)===a&&(Ge===4||Ge===3&&(nt&130023424)===nt&&500>$e()-Qu?vr(n,0):Yu|=a),vt(n,i)}function zp(n,i){i===0&&(n.mode&1?(i=go,go<<=1,!(go&130023424)&&(go=4194304)):i=1);var a=ft();n=dn(n,i),n!==null&&(Fi(n,i,a),vt(n,a))}function uE(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),zp(n,a)}function cE(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),zp(n,a)}var Vp;Vp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||gt.current)_t=!0;else{if(!(n.lanes&a)&&!(i.flags&128))return _t=!1,Jw(n,i,a);_t=!!(n.flags&131072)}else _t=!1,Le&&i.flags&1048576&&Eh(i,Fo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Xo(n,i),n=i.pendingProps;var d=qr(i,ot.current);ei(i,a),d=Ru(null,i,u,n,d,a);var p=Nu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,mt(u)?(p=!0,Do(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,wu(i),d.updater=Qo,i.stateNode=d,d._reactInternals=i,Du(i,u,n,a),i=Uu(null,i,u,!0,p,a)):(i.tag=0,Le&&p&&cu(i),dt(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Xo(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=fE(u),n=jt(u,n),d){case 0:i=Fu(null,i,u,n,a);break e;case 1:i=pp(null,i,u,n,a);break e;case 11:i=up(null,i,u,n,a);break e;case 14:i=cp(null,i,u,jt(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:jt(u,d),Fu(n,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:jt(u,d),pp(n,i,u,d,a);case 3:e:{if(gp(i),n===null)throw Error(t(387));u=i.pendingProps,p=i.memoizedState,d=p.element,xh(n,i),Bo(i,u,null,a);var m=i.memoizedState;if(u=m.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=ni(Error(t(423)),i),i=mp(n,i,u,a,d);break e}else if(u!==d){d=ni(Error(t(424)),i),i=mp(n,i,u,a,d);break e}else for(kt=Ln(i.stateNode.containerInfo.firstChild),Tt=i,Le=!0,Ut=null,a=Nh(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Jr(),u===d){i=hn(n,i,a);break e}dt(n,i,u,a)}i=i.child}return i;case 5:return Lh(i),n===null&&hu(i),u=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,m=d.children,iu(u,d)?m=null:p!==null&&iu(u,p)&&(i.flags|=32),hp(n,i),dt(n,i,m,a),i.child;case 6:return n===null&&hu(i),null;case 13:return _p(n,i,a);case 4:return Eu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Xr(i,null,u,a):dt(n,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:jt(u,d),up(n,i,u,d,a);case 7:return dt(n,i,i.pendingProps,a),i.child;case 8:return dt(n,i,i.pendingProps.children,a),i.child;case 12:return dt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,p=i.memoizedProps,m=d.value,Re($o,u._currentValue),u._currentValue=m,p!==null)if(Ft(p.value,m)){if(p.children===d.children&&!gt.current){i=hn(n,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var w=p.dependencies;if(w!==null){m=p.child;for(var E=w.firstContext;E!==null;){if(E.context===u){if(p.tag===1){E=fn(-1,a&-a),E.tag=2;var x=p.updateQueue;if(x!==null){x=x.shared;var L=x.pending;L===null?E.next=E:(E.next=L.next,L.next=E),x.pending=E}}p.lanes|=a,E=p.alternate,E!==null&&(E.lanes|=a),yu(p.return,a,i),w.lanes|=a;break}E=E.next}}else if(p.tag===10)m=p.type===i.type?null:p.child;else if(p.tag===18){if(m=p.return,m===null)throw Error(t(341));m.lanes|=a,w=m.alternate,w!==null&&(w.lanes|=a),yu(m,a,i),m=p.sibling}else m=p.child;if(m!==null)m.return=p;else for(m=p;m!==null;){if(m===i){m=null;break}if(p=m.sibling,p!==null){p.return=m.return,m=p;break}m=m.return}p=m}dt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,ei(i,a),d=At(d),u=u(d),i.flags|=1,dt(n,i,u,a),i.child;case 14:return u=i.type,d=jt(u,i.pendingProps),d=jt(u.type,d),cp(n,i,u,d,a);case 15:return dp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:jt(u,d),Xo(n,i),i.tag=1,mt(u)?(n=!0,Do(i)):n=!1,ei(i,a),np(i,u,d),Du(i,u,d,a),Uu(null,i,u,!0,n,a);case 19:return vp(n,i,a);case 22:return fp(n,i,a)}throw Error(t(156,i.tag))};function Bp(n,i){return Sf(n,i)}function dE(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(n,i,a,u){return new dE(n,i,a,u)}function ic(n){return n=n.prototype,!(!n||!n.isReactComponent)}function fE(n){if(typeof n=="function")return ic(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Me)return 11;if(n===Ve)return 14}return 2}function Wn(n,i){var a=n.alternate;return a===null?(a=bt(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ua(n,i,a,u,d,p){var m=2;if(u=n,typeof n=="function")ic(n)&&(m=1);else if(typeof n=="string")m=5;else e:switch(n){case se:return Er(a.children,d,p,i);case ne:m=8,d|=8;break;case ve:return n=bt(12,a,i,d|2),n.elementType=ve,n.lanes=p,n;case st:return n=bt(13,a,i,d),n.elementType=st,n.lanes=p,n;case Fe:return n=bt(19,a,i,d),n.elementType=Fe,n.lanes=p,n;case Ie:return ca(a,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Se:m=10;break e;case ye:m=9;break e;case Me:m=11;break e;case Ve:m=14;break e;case Be:m=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=bt(m,a,i,d),i.elementType=n,i.type=u,i.lanes=p,i}function Er(n,i,a,u){return n=bt(7,n,u,i),n.lanes=a,n}function ca(n,i,a,u){return n=bt(22,n,u,i),n.elementType=Ie,n.lanes=a,n.stateNode={isHidden:!1},n}function sc(n,i,a){return n=bt(6,n,null,i),n.lanes=a,n}function oc(n,i,a){return i=bt(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function hE(n,i,a,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ac(n,i,a,u,d,p,m,w,E){return n=new hE(n,i,a,w,E),i===1?(i=1,p===!0&&(i|=8)):i=0,p=bt(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},wu(p),n}function pE(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:he,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Wp(n){if(!n)return bn;n=n._reactInternals;e:{if(ur(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(mt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(mt(a))return yh(n,a,i)}return i}function Hp(n,i,a,u,d,p,m,w,E){return n=ac(a,u,!0,n,d,p,m,w,E),n.context=Wp(null),a=n.current,u=ft(),d=Vn(a),p=fn(u,d),p.callback=i??null,Un(a,p,d),n.current.lanes=d,Fi(n,d,u),vt(n,u),n}function da(n,i,a,u){var d=i.current,p=ft(),m=Vn(d);return a=Wp(a),i.context===null?i.context=a:i.pendingContext=a,i=fn(p,m),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Un(d,i,m),n!==null&&(Vt(n,d,m,p),Vo(n,d,m)),m}function fa(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Kp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function lc(n,i){Kp(n,i),(n=n.alternate)&&Kp(n,i)}var Gp=typeof reportError=="function"?reportError:function(n){console.error(n)};function uc(n){this._internalRoot=n}ha.prototype.render=uc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));da(n,i,null,null)},ha.prototype.unmount=uc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;yr(function(){da(null,n,null,null)}),i[an]=null}};function ha(n){this._internalRoot=n}ha.prototype.unstable_scheduleHydration=function(n){if(n){var i=xf();n={blockedOn:null,target:n,priority:i};for(var a=0;a<xn.length&&i!==0&&i<xn[a].priority;a++);xn.splice(a,0,n),a===0&&Lf(n)}};function cc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pa(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function qp(){}function gE(n,i,a,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var x=fa(m);p.call(x)}}var m=Hp(i,u,n,0,null,!1,!1,"",qp);return n._reactRootContainer=m,n[an]=m.current,Ji(n.nodeType===8?n.parentNode:n),yr(),m}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var w=u;u=function(){var x=fa(E);w.call(x)}}var E=ac(n,0,!1,null,null,!1,!1,"",qp);return n._reactRootContainer=E,n[an]=E.current,Ji(n.nodeType===8?n.parentNode:n),yr(function(){da(i,E,a,u)}),E}function ga(n,i,a,u,d){var p=a._reactRootContainer;if(p){var m=p;if(typeof d=="function"){var w=d;d=function(){var E=fa(m);w.call(E)}}da(i,m,n,d)}else m=gE(a,i,n,d,u);return fa(m)}Nf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Mi(i.pendingLanes);a!==0&&(Dl(i,a|1),vt(i,$e()),!(de&6)&&(si=$e()+500,Mn()))}break;case 13:yr(function(){var u=dn(n,1);if(u!==null){var d=ft();Vt(u,n,1,d)}}),lc(n,1)}},bl=function(n){if(n.tag===13){var i=dn(n,134217728);if(i!==null){var a=ft();Vt(i,n,134217728,a)}lc(n,134217728)}},Pf=function(n){if(n.tag===13){var i=Vn(n),a=dn(n,i);if(a!==null){var u=ft();Vt(a,n,i,u)}lc(n,i)}},xf=function(){return Ee},Of=function(n,i){var a=Ee;try{return Ee=n,i()}finally{Ee=a}},Rl=function(n,i,a){switch(i){case"input":if(vl(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var d=Ao(u);if(!d)throw Error(t(90));ef(u),vl(u,d)}}}break;case"textarea":of(n,a);break;case"select":i=a.value,i!=null&&Mr(n,!!a.multiple,i,!1)}},gf=tc,mf=yr;var mE={usingClientEntryPoint:!1,Events:[es,Kr,Ao,hf,pf,tc]},ps={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_E={bundleType:ps.bundleType,version:ps.version,rendererPackageName:ps.rendererPackageName,rendererConfig:ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Q.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=wf(n),n===null?null:n.stateNode},findFiberByHostInstance:ps.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{ho=ma.inject(_E),qt=ma}catch{}}return wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mE,wt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cc(i))throw Error(t(200));return pE(n,i,null,a)},wt.createRoot=function(n,i){if(!cc(n))throw Error(t(299));var a=!1,u="",d=Gp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ac(n,1,!1,null,null,a,!1,u,d),n[an]=i.current,Ji(n.nodeType===8?n.parentNode:n),new uc(i)},wt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=wf(i),n=n===null?null:n.stateNode,n},wt.flushSync=function(n){return yr(n)},wt.hydrate=function(n,i,a){if(!pa(i))throw Error(t(200));return ga(null,n,i,!0,a)},wt.hydrateRoot=function(n,i,a){if(!cc(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,p="",m=Gp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(m=a.onRecoverableError)),i=Hp(i,null,n,1,a??null,d,!1,p,m),n[an]=i.current,Ji(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new ha(i)},wt.render=function(n,i,a){if(!pa(i))throw Error(t(200));return ga(null,n,i,!1,a)},wt.unmountComponentAtNode=function(n){if(!pa(n))throw Error(t(40));return n._reactRootContainer?(yr(function(){ga(null,null,n,!1,function(){n._reactRootContainer=null,n[an]=null})}),!0):!1},wt.unstable_batchedUpdates=tc,wt.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!pa(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ga(n,i,a,!1,u)},wt.version="18.3.1-next-f1338f8080-20240426",wt}var ng;function Wm(){if(ng)return hc.exports;ng=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hc.exports=NE(),hc.exports}var rg;function PE(){if(rg)return _a;rg=1;var r=Wm();return _a.createRoot=r.createRoot,_a.hydrateRoot=r.hydrateRoot,_a}var xE=PE();Wm();/**
 * @remix-run/router v1.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function As(){return As=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},As.apply(this,arguments)}var Jn;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Jn||(Jn={}));const ig="popstate";function OE(r){r===void 0&&(r={});function e(s,o){let{pathname:l,search:c,hash:f}=s.location;return Lc("",{pathname:l,search:c,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Km(o)}return LE(e,t,null,r)}function He(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Hm(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function AE(){return Math.random().toString(36).substr(2,8)}function sg(r,e){return{usr:r.state,key:r.key,idx:e}}function Lc(r,e,t,s){return t===void 0&&(t=null),As({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?Si(e):e,{state:t,key:e&&e.key||s||AE()})}function Km(r){let{pathname:e="/",search:t="",hash:s=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function Si(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function LE(r,e,t,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:l=!1}=s,c=o.history,f=Jn.Pop,h=null,g=_();g==null&&(g=0,c.replaceState(As({},c.state,{idx:g}),""));function _(){return(c.state||{idx:null}).idx}function y(){f=Jn.Pop;let I=_(),z=I==null?null:I-g;g=I,h&&h({action:f,location:P.location,delta:z})}function v(I,z){f=Jn.Push;let B=Lc(P.location,I,z);g=_()+1;let W=sg(B,g),Q=P.createHref(B);try{c.pushState(W,"",Q)}catch(fe){if(fe instanceof DOMException&&fe.name==="DataCloneError")throw fe;o.location.assign(Q)}l&&h&&h({action:f,location:P.location,delta:1})}function R(I,z){f=Jn.Replace;let B=Lc(P.location,I,z);g=_();let W=sg(B,g),Q=P.createHref(B);c.replaceState(W,"",Q),l&&h&&h({action:f,location:P.location,delta:0})}function N(I){let z=o.location.origin!=="null"?o.location.origin:o.location.href,B=typeof I=="string"?I:Km(I);return B=B.replace(/ $/,"%20"),He(z,"No window.location.(origin|href) available to create URL for href: "+B),new URL(B,z)}let P={get action(){return f},get location(){return r(o,c)},listen(I){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(ig,y),h=I,()=>{o.removeEventListener(ig,y),h=null}},createHref(I){return e(o,I)},createURL:N,encodeLocation(I){let z=N(I);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:v,replace:R,go(I){return c.go(I)}};return P}var og;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(og||(og={}));function DE(r,e,t){return t===void 0&&(t="/"),bE(r,e,t)}function bE(r,e,t,s){let o=typeof e=="string"?Si(e):e,l=Ym(o.pathname||"/",t);if(l==null)return null;let c=Gm(r);ME(c);let f=null;for(let h=0;f==null&&h<c.length;++h){let g=qE(l);f=HE(c[h],g)}return f}function Gm(r,e,t,s){e===void 0&&(e=[]),t===void 0&&(t=[]),s===void 0&&(s="");let o=(l,c,f)=>{let h={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};h.relativePath.startsWith("/")&&(He(h.relativePath.startsWith(s),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(s.length));let g=Tr([s,h.relativePath]),_=t.concat(h);l.children&&l.children.length>0&&(He(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),Gm(l.children,e,_,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:BE(g,l.index),routesMeta:_})};return r.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,c);else for(let h of qm(l.path))o(l,c,h)}),e}function qm(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let c=qm(s.join("/")),f=[];return f.push(...c.map(h=>h===""?l:[l,h].join("/"))),o&&f.push(...c),f.map(h=>r.startsWith("/")&&h===""?"/":h)}function ME(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:WE(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const FE=/^:[\w-]+$/,UE=3,jE=2,$E=1,zE=10,VE=-2,ag=r=>r==="*";function BE(r,e){let t=r.split("/"),s=t.length;return t.some(ag)&&(s+=VE),e&&(s+=jE),t.filter(o=>!ag(o)).reduce((o,l)=>o+(FE.test(l)?UE:l===""?$E:zE),s)}function WE(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function HE(r,e,t){let{routesMeta:s}=r,o={},l="/",c=[];for(let f=0;f<s.length;++f){let h=s[f],g=f===s.length-1,_=l==="/"?e:e.slice(l.length)||"/",y=KE({path:h.relativePath,caseSensitive:h.caseSensitive,end:g},_),v=h.route;if(!y)return null;Object.assign(o,y.params),c.push({params:o,pathname:Tr([l,y.pathname]),pathnameBase:XE(Tr([l,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(l=Tr([l,y.pathnameBase]))}return c}function KE(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=GE(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((g,_,y)=>{let{paramName:v,isOptional:R}=_;if(v==="*"){let P=f[y]||"";c=l.slice(0,l.length-P.length).replace(/(.)\/+$/,"$1")}const N=f[y];return R&&!N?g[v]=void 0:g[v]=(N||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:r}}function GE(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Hm(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h)=>(s.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function qE(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Hm(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function Ym(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function YE(r,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?Si(r):r;return{pathname:t?t.startsWith("/")?t:QE(t,e):e,search:ZE(s),hash:eS(o)}}function QE(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function mc(r,e,t,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function JE(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Qm(r,e){let t=JE(r);return e?t.map((s,o)=>o===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function Jm(r,e,t,s){s===void 0&&(s=!1);let o;typeof r=="string"?o=Si(r):(o=As({},r),He(!o.pathname||!o.pathname.includes("?"),mc("?","pathname","search",o)),He(!o.pathname||!o.pathname.includes("#"),mc("#","pathname","hash",o)),He(!o.search||!o.search.includes("#"),mc("#","search","hash",o)));let l=r===""||o.pathname==="",c=l?"/":o.pathname,f;if(c==null)f=t;else{let y=e.length-1;if(!s&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),y-=1;o.pathname=v.join("/")}f=y>=0?e[y]:"/"}let h=YE(o,f),g=c&&c!=="/"&&c.endsWith("/"),_=(l||c===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(g||_)&&(h.pathname+="/"),h}const Tr=r=>r.join("/").replace(/\/\/+/g,"/"),XE=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),ZE=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,eS=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function tS(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const Xm=["post","put","patch","delete"];new Set(Xm);const nS=["get",...Xm];new Set(nS);/**
 * React Router v6.28.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ls(){return Ls=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Ls.apply(this,arguments)}const ad=F.createContext(null),rS=F.createContext(null),Gs=F.createContext(null),nl=F.createContext(null),Ar=F.createContext({outlet:null,matches:[],isDataRoute:!1}),Zm=F.createContext(null);function qs(){return F.useContext(nl)!=null}function rl(){return qs()||He(!1),F.useContext(nl).location}function e_(r){F.useContext(Gs).static||F.useLayoutEffect(r)}function ld(){let{isDataRoute:r}=F.useContext(Ar);return r?mS():iS()}function iS(){qs()||He(!1);let r=F.useContext(ad),{basename:e,future:t,navigator:s}=F.useContext(Gs),{matches:o}=F.useContext(Ar),{pathname:l}=rl(),c=JSON.stringify(Qm(o,t.v7_relativeSplatPath)),f=F.useRef(!1);return e_(()=>{f.current=!0}),F.useCallback(function(g,_){if(_===void 0&&(_={}),!f.current)return;if(typeof g=="number"){s.go(g);return}let y=Jm(g,JSON.parse(c),l,_.relative==="path");r==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:Tr([e,y.pathname])),(_.replace?s.replace:s.push)(y,_.state,_)},[e,s,c,l,r])}function sS(r,e){return oS(r,e)}function oS(r,e,t,s){qs()||He(!1);let{navigator:o}=F.useContext(Gs),{matches:l}=F.useContext(Ar),c=l[l.length-1],f=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let g=rl(),_;if(e){var y;let I=typeof e=="string"?Si(e):e;h==="/"||(y=I.pathname)!=null&&y.startsWith(h)||He(!1),_=I}else _=g;let v=_.pathname||"/",R=v;if(h!=="/"){let I=h.replace(/^\//,"").split("/");R="/"+v.replace(/^\//,"").split("/").slice(I.length).join("/")}let N=DE(r,{pathname:R}),P=dS(N&&N.map(I=>Object.assign({},I,{params:Object.assign({},f,I.params),pathname:Tr([h,o.encodeLocation?o.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?h:Tr([h,o.encodeLocation?o.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),l,t,s);return e&&P?F.createElement(nl.Provider,{value:{location:Ls({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:Jn.Pop}},P):P}function aS(){let r=gS(),e=tS(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),t?F.createElement("pre",{style:o},t):null,null)}const lS=F.createElement(aS,null);class uS extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?F.createElement(Ar.Provider,{value:this.props.routeContext},F.createElement(Zm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cS(r){let{routeContext:e,match:t,children:s}=r,o=F.useContext(ad);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),F.createElement(Ar.Provider,{value:e},s)}function dS(r,e,t,s){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),s===void 0&&(s=null),r==null){var l;if(!t)return null;if(t.errors)r=t.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let c=r,f=(o=t)==null?void 0:o.errors;if(f!=null){let _=c.findIndex(y=>y.route.id&&(f==null?void 0:f[y.route.id])!==void 0);_>=0||He(!1),c=c.slice(0,Math.min(c.length,_+1))}let h=!1,g=-1;if(t&&s&&s.v7_partialHydration)for(let _=0;_<c.length;_++){let y=c[_];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(g=_),y.route.id){let{loaderData:v,errors:R}=t,N=y.route.loader&&v[y.route.id]===void 0&&(!R||R[y.route.id]===void 0);if(y.route.lazy||N){h=!0,g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}return c.reduceRight((_,y,v)=>{let R,N=!1,P=null,I=null;t&&(R=f&&y.route.id?f[y.route.id]:void 0,P=y.route.errorElement||lS,h&&(g<0&&v===0?(N=!0,I=null):g===v&&(N=!0,I=y.route.hydrateFallbackElement||null)));let z=e.concat(c.slice(0,v+1)),B=()=>{let W;return R?W=P:N?W=I:y.route.Component?W=F.createElement(y.route.Component,null):y.route.element?W=y.route.element:W=_,F.createElement(cS,{match:y,routeContext:{outlet:_,matches:z,isDataRoute:t!=null},children:W})};return t&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?F.createElement(uS,{location:t.location,revalidation:t.revalidation,component:P,error:R,children:B(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):B()},null)}var t_=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(t_||{}),Na=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(Na||{});function fS(r){let e=F.useContext(ad);return e||He(!1),e}function hS(r){let e=F.useContext(rS);return e||He(!1),e}function pS(r){let e=F.useContext(Ar);return e||He(!1),e}function n_(r){let e=pS(),t=e.matches[e.matches.length-1];return t.route.id||He(!1),t.route.id}function gS(){var r;let e=F.useContext(Zm),t=hS(Na.UseRouteError),s=n_(Na.UseRouteError);return e!==void 0?e:(r=t.errors)==null?void 0:r[s]}function mS(){let{router:r}=fS(t_.UseNavigateStable),e=n_(Na.UseNavigateStable),t=F.useRef(!1);return e_(()=>{t.current=!0}),F.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,Ls({fromRouteId:e},l)))},[r,e])}const lg={};function _S(r,e){lg[e]||(lg[e]=!0,console.warn(e))}const ug=(r,e,t)=>_S(r,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+r+"` future flag to opt-in early. ")+("For more information, see "+t+"."));function yS(r,e){(r==null?void 0:r.v7_startTransition)===void 0&&ug("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),(r==null?void 0:r.v7_relativeSplatPath)===void 0&&ug("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function vS(r){let{to:e,replace:t,state:s,relative:o}=r;qs()||He(!1);let{future:l,static:c}=F.useContext(Gs),{matches:f}=F.useContext(Ar),{pathname:h}=rl(),g=ld(),_=Jm(e,Qm(f,l.v7_relativeSplatPath),h,o==="path"),y=JSON.stringify(_);return F.useEffect(()=>g(JSON.parse(y),{replace:t,state:s,relative:o}),[g,y,o,t,s]),null}function Ss(r){He(!1)}function wS(r){let{basename:e="/",children:t=null,location:s,navigationType:o=Jn.Pop,navigator:l,static:c=!1,future:f}=r;qs()&&He(!1);let h=e.replace(/^\/*/,"/"),g=F.useMemo(()=>({basename:h,navigator:l,static:c,future:Ls({v7_relativeSplatPath:!1},f)}),[h,f,l,c]);typeof s=="string"&&(s=Si(s));let{pathname:_="/",search:y="",hash:v="",state:R=null,key:N="default"}=s,P=F.useMemo(()=>{let I=Ym(_,h);return I==null?null:{location:{pathname:I,search:y,hash:v,state:R,key:N},navigationType:o}},[h,_,y,v,R,N,o]);return P==null?null:F.createElement(Gs.Provider,{value:g},F.createElement(nl.Provider,{children:t,value:P}))}function ES(r){let{children:e,location:t}=r;return sS(Dc(e),t)}new Promise(()=>{});function Dc(r,e){e===void 0&&(e=[]);let t=[];return F.Children.forEach(r,(s,o)=>{if(!F.isValidElement(s))return;let l=[...e,o];if(s.type===F.Fragment){t.push.apply(t,Dc(s.props.children,l));return}s.type!==Ss&&He(!1),!s.props.index||!s.props.children||He(!1);let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Dc(s.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.28.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const SS="6";try{window.__reactRouterVersion=SS}catch{}const CS="startTransition",cg=TE[CS];function IS(r){let{basename:e,children:t,future:s,window:o}=r,l=F.useRef();l.current==null&&(l.current=OE({window:o,v5Compat:!0}));let c=l.current,[f,h]=F.useState({action:c.action,location:c.location}),{v7_startTransition:g}=s||{},_=F.useCallback(y=>{g&&cg?cg(()=>h(y)):h(y)},[h,g]);return F.useLayoutEffect(()=>c.listen(_),[c,_]),F.useEffect(()=>yS(s),[s]),F.createElement(wS,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:c,future:s})}var dg;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(dg||(dg={}));var fg;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(fg||(fg={}));const TS=(r,e,t,s)=>{var l,c,f,h;const o=[t,{code:e,...s||{}}];if((c=(l=r==null?void 0:r.services)==null?void 0:l.logger)!=null&&c.forward)return r.services.logger.forward(o,"warn","react-i18next::",!0);kr(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(h=(f=r==null?void 0:r.services)==null?void 0:f.logger)!=null&&h.warn?r.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},hg={},bc=(r,e,t,s)=>{kr(t)&&hg[t]||(kr(t)&&(hg[t]=new Date),TS(r,e,t,s))},r_=(r,e)=>()=>{if(r.isInitialized)e();else{const t=()=>{setTimeout(()=>{r.off("initialized",t)},0),e()};r.on("initialized",t)}},Mc=(r,e,t)=>{r.loadNamespaces(e,r_(r,t))},pg=(r,e,t,s)=>{if(kr(t)&&(t=[t]),r.options.preload&&r.options.preload.indexOf(e)>-1)return Mc(r,t,s);t.forEach(o=>{r.options.ns.indexOf(o)<0&&r.options.ns.push(o)}),r.loadLanguages(e,r_(r,s))},kS=(r,e,t={})=>!e.languages||!e.languages.length?(bc(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(r,{lng:t.lng,precheck:(s,o)=>{var l;if(((l=t.bindI18n)==null?void 0:l.indexOf("languageChanging"))>-1&&s.services.backendConnector.backend&&s.isLanguageChangingTo&&!o(s.isLanguageChangingTo,r))return!1}}),kr=r=>typeof r=="string",RS=r=>typeof r=="object"&&r!==null,NS=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,PS={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},xS=r=>PS[r],OS=r=>r.replace(NS,xS);let Fc={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:OS};const AS=(r={})=>{Fc={...Fc,...r}},LS=()=>Fc;let i_;const DS=r=>{i_=r},bS=()=>i_,MS={type:"3rdParty",init(r){AS(r.options.react),DS(r)}},s_=F.createContext();class FS{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(t=>{this.usedNamespaces[t]||(this.usedNamespaces[t]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const US=(r,e)=>{const t=F.useRef();return F.useEffect(()=>{t.current=r},[r,e]),t.current},o_=(r,e,t,s)=>r.getFixedT(e,t,s),jS=(r,e,t,s)=>F.useCallback(o_(r,e,t,s),[r,e,t,s]),Ci=(r,e={})=>{var Q,fe,he,se;const{i18n:t}=e,{i18n:s,defaultNS:o}=F.useContext(s_)||{},l=t||s||bS();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new FS),!l){bc(l,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const ne=(Se,ye)=>kr(ye)?ye:RS(ye)&&kr(ye.defaultValue)?ye.defaultValue:Array.isArray(Se)?Se[Se.length-1]:Se,ve=[ne,{},!1];return ve.t=ne,ve.i18n={},ve.ready=!1,ve}(Q=l.options.react)!=null&&Q.wait&&bc(l,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const c={...LS(),...l.options.react,...e},{useSuspense:f,keyPrefix:h}=c;let g=o||((fe=l.options)==null?void 0:fe.defaultNS);g=kr(g)?[g]:g||["translation"],(se=(he=l.reportNamespaces).addUsedNamespaces)==null||se.call(he,g);const _=(l.isInitialized||l.initializedStoreOnce)&&g.every(ne=>kS(ne,l,c)),y=jS(l,e.lng||null,c.nsMode==="fallback"?g:g[0],h),v=()=>y,R=()=>o_(l,e.lng||null,c.nsMode==="fallback"?g:g[0],h),[N,P]=F.useState(v);let I=g.join();e.lng&&(I=`${e.lng}${I}`);const z=US(I),B=F.useRef(!0);F.useEffect(()=>{const{bindI18n:ne,bindI18nStore:ve}=c;B.current=!0,!_&&!f&&(e.lng?pg(l,e.lng,g,()=>{B.current&&P(R)}):Mc(l,g,()=>{B.current&&P(R)})),_&&z&&z!==I&&B.current&&P(R);const Se=()=>{B.current&&P(R)};return ne&&(l==null||l.on(ne,Se)),ve&&(l==null||l.store.on(ve,Se)),()=>{B.current=!1,l&&(ne==null||ne.split(" ").forEach(ye=>l.off(ye,Se))),ve&&l&&ve.split(" ").forEach(ye=>l.store.off(ye,Se))}},[l,I]),F.useEffect(()=>{B.current&&_&&P(v)},[l,h,_]);const W=[N,l,_];if(W.t=N,W.i18n=l,W.ready=_,_||!_&&!f)return W;throw new Promise(ne=>{e.lng?pg(l,e.lng,g,()=>ne()):Mc(l,g,()=>ne())})};function $S({i18n:r,defaultNS:e,children:t}){const s=F.useMemo(()=>({i18n:r,defaultNS:e}),[r,e]);return F.createElement(s_.Provider,{value:s},t)}const re=r=>typeof r=="string",ms=()=>{let r,e;const t=new Promise((s,o)=>{r=s,e=o});return t.resolve=r,t.reject=e,t},gg=r=>r==null?"":""+r,zS=(r,e,t)=>{r.forEach(s=>{e[s]&&(t[s]=e[s])})},VS=/###/g,mg=r=>r&&r.indexOf("###")>-1?r.replace(VS,"."):r,_g=r=>!r||re(r),Ts=(r,e,t)=>{const s=re(e)?e.split("."):e;let o=0;for(;o<s.length-1;){if(_g(r))return{};const l=mg(s[o]);!r[l]&&t&&(r[l]=new t),Object.prototype.hasOwnProperty.call(r,l)?r=r[l]:r={},++o}return _g(r)?{}:{obj:r,k:mg(s[o])}},yg=(r,e,t)=>{const{obj:s,k:o}=Ts(r,e,Object);if(s!==void 0||e.length===1){s[o]=t;return}let l=e[e.length-1],c=e.slice(0,e.length-1),f=Ts(r,c,Object);for(;f.obj===void 0&&c.length;)l=`${c[c.length-1]}.${l}`,c=c.slice(0,c.length-1),f=Ts(r,c,Object),f!=null&&f.obj&&typeof f.obj[`${f.k}.${l}`]<"u"&&(f.obj=void 0);f.obj[`${f.k}.${l}`]=t},BS=(r,e,t,s)=>{const{obj:o,k:l}=Ts(r,e,Object);o[l]=o[l]||[],o[l].push(t)},Pa=(r,e)=>{const{obj:t,k:s}=Ts(r,e);if(t&&Object.prototype.hasOwnProperty.call(t,s))return t[s]},WS=(r,e,t)=>{const s=Pa(r,t);return s!==void 0?s:Pa(e,t)},a_=(r,e,t)=>{for(const s in e)s!=="__proto__"&&s!=="constructor"&&(s in r?re(r[s])||r[s]instanceof String||re(e[s])||e[s]instanceof String?t&&(r[s]=e[s]):a_(r[s],e[s],t):r[s]=e[s]);return r},ai=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var HS={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const KS=r=>re(r)?r.replace(/[&<>"'\/]/g,e=>HS[e]):r;class GS{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const s=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,s),this.regExpQueue.push(e),s}}const qS=[" ",",","?","!",";"],YS=new GS(20),QS=(r,e,t)=>{e=e||"",t=t||"";const s=qS.filter(c=>e.indexOf(c)<0&&t.indexOf(c)<0);if(s.length===0)return!0;const o=YS.getRegExp(`(${s.map(c=>c==="?"?"\\?":c).join("|")})`);let l=!o.test(r);if(!l){const c=r.indexOf(t);c>0&&!o.test(r.substring(0,c))&&(l=!0)}return l},Uc=function(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!r)return;if(r[e])return Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0;const s=e.split(t);let o=r;for(let l=0;l<s.length;){if(!o||typeof o!="object")return;let c,f="";for(let h=l;h<s.length;++h)if(h!==l&&(f+=t),f+=s[h],c=o[f],c!==void 0){if(["string","number","boolean"].indexOf(typeof c)>-1&&h<s.length-1)continue;l+=h-l+1;break}o=c}return o},xa=r=>r==null?void 0:r.replace("_","-"),JS={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){var t,s;(s=(t=console==null?void 0:console[r])==null?void 0:t.apply)==null||s.call(t,console,e)}};let XS=class jc{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||JS,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,s,o){return o&&!this.debug?null:(re(e[0])&&(e[0]=`${s}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new jc(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new jc(this.logger,e)}};var Zt=new XS;let il=class{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(s=>{this.observers[s]||(this.observers[s]=new Map);const o=this.observers[s].get(t)||0;this.observers[s].set(t,o+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,s=new Array(t>1?t-1:0),o=1;o<t;o++)s[o-1]=arguments[o];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(c=>{let[f,h]=c;for(let g=0;g<h;g++)f(...s)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(c=>{let[f,h]=c;for(let g=0;g<h;g++)f.apply(f,[e,...s])})}};class vg extends il{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,s){var g,_;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,c=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let f;e.indexOf(".")>-1?f=e.split("."):(f=[e,t],s&&(Array.isArray(s)?f.push(...s):re(s)&&l?f.push(...s.split(l)):f.push(s)));const h=Pa(this.data,f);return!h&&!t&&!s&&e.indexOf(".")>-1&&(e=f[0],t=f[1],s=f.slice(2).join(".")),h||!c||!re(s)?h:Uc((_=(g=this.data)==null?void 0:g[e])==null?void 0:_[t],s,l)}addResource(e,t,s,o){let l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const c=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator;let f=[e,t];s&&(f=f.concat(c?s.split(c):s)),e.indexOf(".")>-1&&(f=e.split("."),o=t,t=f[1]),this.addNamespaces(t),yg(this.data,f,o),l.silent||this.emit("added",e,t,s,o)}addResources(e,t,s){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const l in s)(re(s[l])||Array.isArray(s[l]))&&this.addResource(e,t,l,s[l],{silent:!0});o.silent||this.emit("added",e,t,s)}addResourceBundle(e,t,s,o,l){let c=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},f=[e,t];e.indexOf(".")>-1&&(f=e.split("."),o=s,s=t,t=f[1]),this.addNamespaces(t);let h=Pa(this.data,f)||{};c.skipCopy||(s=JSON.parse(JSON.stringify(s))),o?a_(h,s,l):h={...h,...s},yg(this.data,f,h),c.silent||this.emit("added",e,t,s)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(o=>t[o]&&Object.keys(t[o]).length>0)}toJSON(){return this.data}}var l_={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,t,s,o){return r.forEach(l=>{var c;e=((c=this.processors[l])==null?void 0:c.process(e,t,s,o))??e}),e}};const wg={},Eg=r=>!re(r)&&typeof r!="boolean"&&typeof r!="number";class Oa extends il{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),zS(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Zt.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const s=this.resolve(e,t);return(s==null?void 0:s.res)!==void 0}extractFromKey(e,t){let s=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;s===void 0&&(s=":");const o=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let l=t.ns||this.options.defaultNS||[];const c=s&&e.indexOf(s)>-1,f=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!QS(e,s,o);if(c&&!f){const h=e.match(this.interpolator.nestingRegexp);if(h&&h.length>0)return{key:e,namespaces:re(l)?[l]:l};const g=e.split(s);(s!==o||s===o&&this.options.ns.indexOf(g[0])>-1)&&(l=g.shift()),e=g.join(o)}return{key:e,namespaces:re(l)?[l]:l}}translate(e,t,s){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const o=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,l=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:c,namespaces:f}=this.extractFromKey(e[e.length-1],t),h=f[f.length-1],g=t.lng||this.language,_=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((g==null?void 0:g.toLowerCase())==="cimode"){if(_){const ye=t.nsSeparator||this.options.nsSeparator;return o?{res:`${h}${ye}${c}`,usedKey:c,exactUsedKey:c,usedLng:g,usedNS:h,usedParams:this.getUsedParamsDetails(t)}:`${h}${ye}${c}`}return o?{res:c,usedKey:c,exactUsedKey:c,usedLng:g,usedNS:h,usedParams:this.getUsedParamsDetails(t)}:c}const y=this.resolve(e,t);let v=y==null?void 0:y.res;const R=(y==null?void 0:y.usedKey)||c,N=(y==null?void 0:y.exactUsedKey)||c,P=["[object Number]","[object Function]","[object RegExp]"],I=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,z=!this.i18nFormat||this.i18nFormat.handleAsObject,B=t.count!==void 0&&!re(t.count),W=Oa.hasDefaultValue(t),Q=B?this.pluralResolver.getSuffix(g,t.count,t):"",fe=t.ordinal&&B?this.pluralResolver.getSuffix(g,t.count,{ordinal:!1}):"",he=B&&!t.ordinal&&t.count===0,se=he&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${Q}`]||t[`defaultValue${fe}`]||t.defaultValue;let ne=v;z&&!v&&W&&(ne=se);const ve=Eg(ne),Se=Object.prototype.toString.apply(ne);if(z&&ne&&ve&&P.indexOf(Se)<0&&!(re(I)&&Array.isArray(ne))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const ye=this.options.returnedObjectHandler?this.options.returnedObjectHandler(R,ne,{...t,ns:f}):`key '${c} (${this.language})' returned an object instead of string.`;return o?(y.res=ye,y.usedParams=this.getUsedParamsDetails(t),y):ye}if(l){const ye=Array.isArray(ne),Me=ye?[]:{},st=ye?N:R;for(const Fe in ne)if(Object.prototype.hasOwnProperty.call(ne,Fe)){const Ve=`${st}${l}${Fe}`;W&&!v?Me[Fe]=this.translate(Ve,{...t,defaultValue:Eg(se)?se[Fe]:void 0,joinArrays:!1,ns:f}):Me[Fe]=this.translate(Ve,{...t,joinArrays:!1,ns:f}),Me[Fe]===Ve&&(Me[Fe]=ne[Fe])}v=Me}}else if(z&&re(I)&&Array.isArray(v))v=v.join(I),v&&(v=this.extendTranslation(v,e,t,s));else{let ye=!1,Me=!1;!this.isValidLookup(v)&&W&&(ye=!0,v=se),this.isValidLookup(v)||(Me=!0,v=c);const Fe=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&Me?void 0:v,Ve=W&&se!==v&&this.options.updateMissing;if(Me||ye||Ve){if(this.logger.log(Ve?"updateKey":"missingKey",g,h,c,Ve?se:v),l){const G=this.resolve(c,{...t,keySeparator:!1});G&&G.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let Be=[];const Ie=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Ie&&Ie[0])for(let G=0;G<Ie.length;G++)Be.push(Ie[G]);else this.options.saveMissingTo==="all"?Be=this.languageUtils.toResolveHierarchy(t.lng||this.language):Be.push(t.lng||this.language);const j=(G,$,C)=>{var ie;const O=W&&C!==v?C:Fe;this.options.missingKeyHandler?this.options.missingKeyHandler(G,h,$,O,Ve,t):(ie=this.backendConnector)!=null&&ie.saveMissing&&this.backendConnector.saveMissing(G,h,$,O,Ve,t),this.emit("missingKey",G,h,$,v)};this.options.saveMissing&&(this.options.saveMissingPlurals&&B?Be.forEach(G=>{const $=this.pluralResolver.getSuffixes(G,t);he&&t[`defaultValue${this.options.pluralSeparator}zero`]&&$.indexOf(`${this.options.pluralSeparator}zero`)<0&&$.push(`${this.options.pluralSeparator}zero`),$.forEach(C=>{j([G],c+C,t[`defaultValue${C}`]||se)})}):j(Be,c,se))}v=this.extendTranslation(v,e,t,y,s),Me&&v===c&&this.options.appendNamespaceToMissingKey&&(v=`${h}:${c}`),(Me||ye)&&this.options.parseMissingKeyHandler&&(v=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${h}:${c}`:c,ye?v:void 0))}return o?(y.res=v,y.usedParams=this.getUsedParamsDetails(t),y):v}extendTranslation(e,t,s,o,l){var g,_;var c=this;if((g=this.i18nFormat)!=null&&g.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...s},s.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!s.skipInterpolation){s.interpolation&&this.interpolator.init({...s,interpolation:{...this.options.interpolation,...s.interpolation}});const y=re(e)&&(((_=s==null?void 0:s.interpolation)==null?void 0:_.skipOnVariables)!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let v;if(y){const N=e.match(this.interpolator.nestingRegexp);v=N&&N.length}let R=s.replace&&!re(s.replace)?s.replace:s;if(this.options.interpolation.defaultVariables&&(R={...this.options.interpolation.defaultVariables,...R}),e=this.interpolator.interpolate(e,R,s.lng||this.language||o.usedLng,s),y){const N=e.match(this.interpolator.nestingRegexp),P=N&&N.length;v<P&&(s.nest=!1)}!s.lng&&o&&o.res&&(s.lng=this.language||o.usedLng),s.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var N=arguments.length,P=new Array(N),I=0;I<N;I++)P[I]=arguments[I];return(l==null?void 0:l[0])===P[0]&&!s.context?(c.logger.warn(`It seems you are nesting recursively key: ${P[0]} in key: ${t[0]}`),null):c.translate(...P,t)},s)),s.interpolation&&this.interpolator.reset()}const f=s.postProcess||this.options.postProcess,h=re(f)?[f]:f;return e!=null&&(h!=null&&h.length)&&s.applyPostProcessor!==!1&&(e=l_.handle(h,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(s)},...s}:s,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s,o,l,c,f;return re(e)&&(e=[e]),e.forEach(h=>{if(this.isValidLookup(s))return;const g=this.extractFromKey(h,t),_=g.key;o=_;let y=g.namespaces;this.options.fallbackNS&&(y=y.concat(this.options.fallbackNS));const v=t.count!==void 0&&!re(t.count),R=v&&!t.ordinal&&t.count===0,N=t.context!==void 0&&(re(t.context)||typeof t.context=="number")&&t.context!=="",P=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);y.forEach(I=>{var z,B;this.isValidLookup(s)||(f=I,!wg[`${P[0]}-${I}`]&&((z=this.utils)!=null&&z.hasLoadedNamespace)&&!((B=this.utils)!=null&&B.hasLoadedNamespace(f))&&(wg[`${P[0]}-${I}`]=!0,this.logger.warn(`key "${o}" for languages "${P.join(", ")}" won't get resolved as namespace "${f}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),P.forEach(W=>{var he;if(this.isValidLookup(s))return;c=W;const Q=[_];if((he=this.i18nFormat)!=null&&he.addLookupKeys)this.i18nFormat.addLookupKeys(Q,_,W,I,t);else{let se;v&&(se=this.pluralResolver.getSuffix(W,t.count,t));const ne=`${this.options.pluralSeparator}zero`,ve=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(v&&(Q.push(_+se),t.ordinal&&se.indexOf(ve)===0&&Q.push(_+se.replace(ve,this.options.pluralSeparator)),R&&Q.push(_+ne)),N){const Se=`${_}${this.options.contextSeparator}${t.context}`;Q.push(Se),v&&(Q.push(Se+se),t.ordinal&&se.indexOf(ve)===0&&Q.push(Se+se.replace(ve,this.options.pluralSeparator)),R&&Q.push(Se+ne))}}let fe;for(;fe=Q.pop();)this.isValidLookup(s)||(l=fe,s=this.getResource(W,I,fe,t))}))})}),{res:s,usedKey:o,exactUsedKey:l,usedLng:c,usedNS:f}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,s){var l;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(l=this.i18nFormat)!=null&&l.getResource?this.i18nFormat.getResource(e,t,s,o):this.resourceStore.getResource(e,t,s,o)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],s=e.replace&&!re(e.replace);let o=s?e.replace:e;if(s&&typeof e.count<"u"&&(o.count=e.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!s){o={...o};for(const l of t)delete o[l]}return o}static hasDefaultValue(e){const t="defaultValue";for(const s in e)if(Object.prototype.hasOwnProperty.call(e,s)&&t===s.substring(0,t.length)&&e[s]!==void 0)return!0;return!1}}class Sg{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Zt.create("languageUtils")}getScriptPartFromCode(e){if(e=xa(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=xa(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(re(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(s=>{if(t)return;const o=this.formatLanguageCode(s);(!this.options.supportedLngs||this.isSupportedCode(o))&&(t=o)}),!t&&this.options.supportedLngs&&e.forEach(s=>{if(t)return;const o=this.getLanguagePartFromCode(s);if(this.isSupportedCode(o))return t=o;t=this.options.supportedLngs.find(l=>{if(l===o)return l;if(!(l.indexOf("-")<0&&o.indexOf("-")<0)&&(l.indexOf("-")>0&&o.indexOf("-")<0&&l.substring(0,l.indexOf("-"))===o||l.indexOf(o)===0&&o.length>1))return l})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),re(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let s=e[t];return s||(s=e[this.getScriptPartFromCode(t)]),s||(s=e[this.formatLanguageCode(t)]),s||(s=e[this.getLanguagePartFromCode(t)]),s||(s=e.default),s||[]}toResolveHierarchy(e,t){const s=this.getFallbackCodes(t||this.options.fallbackLng||[],e),o=[],l=c=>{c&&(this.isSupportedCode(c)?o.push(c):this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`))};return re(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(e))):re(e)&&l(this.formatLanguageCode(e)),s.forEach(c=>{o.indexOf(c)<0&&l(this.formatLanguageCode(c))}),o}}const Cg={zero:0,one:1,two:2,few:3,many:4,other:5},Ig={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class ZS{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=Zt.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=xa(e==="dev"?"en":e),o=t.ordinal?"ordinal":"cardinal",l=JSON.stringify({cleanedCode:s,type:o});if(l in this.pluralRulesCache)return this.pluralRulesCache[l];let c;try{c=new Intl.PluralRules(s,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Ig;if(!e.match(/-|_/))return Ig;const h=this.languageUtils.getLanguagePartFromCode(e);c=this.getRule(h,t)}return this.pluralRulesCache[l]=c,c}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=this.getRule(e,t);return s||(s=this.getRule("dev",t)),(s==null?void 0:s.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,s).map(o=>`${t}${o}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=this.getRule(e,t);return s||(s=this.getRule("dev",t)),s?s.resolvedOptions().pluralCategories.sort((o,l)=>Cg[o]-Cg[l]).map(o=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(e,s);return o?`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${o.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,s))}}const Tg=function(r,e,t){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=WS(r,e,t);return!l&&o&&re(t)&&(l=Uc(r,t,s),l===void 0&&(l=Uc(e,t,s))),l},_c=r=>r.replace(/\$/g,"$$$$");class eC{constructor(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Zt.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(s=>s),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:s,useRawValueToEscape:o,prefix:l,prefixEscaped:c,suffix:f,suffixEscaped:h,formatSeparator:g,unescapeSuffix:_,unescapePrefix:y,nestingPrefix:v,nestingPrefixEscaped:R,nestingSuffix:N,nestingSuffixEscaped:P,nestingOptionsSeparator:I,maxReplaces:z,alwaysFormat:B}=e.interpolation;this.escape=t!==void 0?t:KS,this.escapeValue=s!==void 0?s:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=l?ai(l):c||"{{",this.suffix=f?ai(f):h||"}}",this.formatSeparator=g||",",this.unescapePrefix=_?"":y||"-",this.unescapeSuffix=this.unescapePrefix?"":_||"",this.nestingPrefix=v?ai(v):R||ai("$t("),this.nestingSuffix=N?ai(N):P||ai(")"),this.nestingOptionsSeparator=I||",",this.maxReplaces=z||1e3,this.alwaysFormat=B!==void 0?B:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,s)=>(t==null?void 0:t.source)===s?(t.lastIndex=0,t):new RegExp(s,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,s,o){var R;let l,c,f;const h=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},g=N=>{if(N.indexOf(this.formatSeparator)<0){const B=Tg(t,h,N,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(B,void 0,s,{...o,...t,interpolationkey:N}):B}const P=N.split(this.formatSeparator),I=P.shift().trim(),z=P.join(this.formatSeparator).trim();return this.format(Tg(t,h,I,this.options.keySeparator,this.options.ignoreJSONStructure),z,s,{...o,...t,interpolationkey:I})};this.resetRegExp();const _=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,y=((R=o==null?void 0:o.interpolation)==null?void 0:R.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:N=>_c(N)},{regex:this.regexp,safeValue:N=>this.escapeValue?_c(this.escape(N)):_c(N)}].forEach(N=>{for(f=0;l=N.regex.exec(e);){const P=l[1].trim();if(c=g(P),c===void 0)if(typeof _=="function"){const z=_(e,l,o);c=re(z)?z:""}else if(o&&Object.prototype.hasOwnProperty.call(o,P))c="";else if(y){c=l[0];continue}else this.logger.warn(`missed to pass in variable ${P} for interpolating ${e}`),c="";else!re(c)&&!this.useRawValueToEscape&&(c=gg(c));const I=N.safeValue(c);if(e=e.replace(l[0],I),y?(N.regex.lastIndex+=c.length,N.regex.lastIndex-=l[0].length):N.regex.lastIndex=0,f++,f>=this.maxReplaces)break}}),e}nest(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,l,c;const f=(h,g)=>{const _=this.nestingOptionsSeparator;if(h.indexOf(_)<0)return h;const y=h.split(new RegExp(`${_}[ ]*{`));let v=`{${y[1]}`;h=y[0],v=this.interpolate(v,c);const R=v.match(/'/g),N=v.match(/"/g);(((R==null?void 0:R.length)??0)%2===0&&!N||N.length%2!==0)&&(v=v.replace(/'/g,'"'));try{c=JSON.parse(v),g&&(c={...g,...c})}catch(P){return this.logger.warn(`failed parsing options string in nesting for key ${h}`,P),`${h}${_}${v}`}return c.defaultValue&&c.defaultValue.indexOf(this.prefix)>-1&&delete c.defaultValue,h};for(;o=this.nestingRegexp.exec(e);){let h=[];c={...s},c=c.replace&&!re(c.replace)?c.replace:c,c.applyPostProcessor=!1,delete c.defaultValue;let g=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const _=o[1].split(this.formatSeparator).map(y=>y.trim());o[1]=_.shift(),h=_,g=!0}if(l=t(f.call(this,o[1].trim(),c),c),l&&o[0]===e&&!re(l))return l;re(l)||(l=gg(l)),l||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),l=""),g&&(l=h.reduce((_,y)=>this.format(_,y,s.lng,{...s,interpolationkey:o[1].trim()}),l.trim())),e=e.replace(o[0],l),this.regexp.lastIndex=0}return e}}const tC=r=>{let e=r.toLowerCase().trim();const t={};if(r.indexOf("(")>-1){const s=r.split("(");e=s[0].toLowerCase().trim();const o=s[1].substring(0,s[1].length-1);e==="currency"&&o.indexOf(":")<0?t.currency||(t.currency=o.trim()):e==="relativetime"&&o.indexOf(":")<0?t.range||(t.range=o.trim()):o.split(";").forEach(c=>{if(c){const[f,...h]=c.split(":"),g=h.join(":").trim().replace(/^'+|'+$/g,""),_=f.trim();t[_]||(t[_]=g),g==="false"&&(t[_]=!1),g==="true"&&(t[_]=!0),isNaN(g)||(t[_]=parseInt(g,10))}})}return{formatName:e,formatOptions:t}},li=r=>{const e={};return(t,s,o)=>{let l=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(l={...l,[o.interpolationkey]:void 0});const c=s+JSON.stringify(l);let f=e[c];return f||(f=r(xa(s),o),e[c]=f),f(t)}};class nC{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Zt.create("formatter"),this.options=e,this.formats={number:li((t,s)=>{const o=new Intl.NumberFormat(t,{...s});return l=>o.format(l)}),currency:li((t,s)=>{const o=new Intl.NumberFormat(t,{...s,style:"currency"});return l=>o.format(l)}),datetime:li((t,s)=>{const o=new Intl.DateTimeFormat(t,{...s});return l=>o.format(l)}),relativetime:li((t,s)=>{const o=new Intl.RelativeTimeFormat(t,{...s});return l=>o.format(l,s.range||"day")}),list:li((t,s)=>{const o=new Intl.ListFormat(t,{...s});return l=>o.format(l)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=li(t)}format(e,t,s){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=t.split(this.formatSeparator);if(l.length>1&&l[0].indexOf("(")>1&&l[0].indexOf(")")<0&&l.find(f=>f.indexOf(")")>-1)){const f=l.findIndex(h=>h.indexOf(")")>-1);l[0]=[l[0],...l.splice(1,f)].join(this.formatSeparator)}return l.reduce((f,h)=>{var y;const{formatName:g,formatOptions:_}=tC(h);if(this.formats[g]){let v=f;try{const R=((y=o==null?void 0:o.formatParams)==null?void 0:y[o.interpolationkey])||{},N=R.locale||R.lng||o.locale||o.lng||s;v=this.formats[g](f,N,{..._,...o,...R})}catch(R){this.logger.warn(R)}return v}else this.logger.warn(`there was no format function for ${g}`);return f},e)}}const rC=(r,e)=>{r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)};class iC extends il{constructor(e,t,s){var l,c;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=s,this.languageUtils=s.languageUtils,this.options=o,this.logger=Zt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(c=(l=this.backend)==null?void 0:l.init)==null||c.call(l,s,o.backend,o)}queueLoad(e,t,s,o){const l={},c={},f={},h={};return e.forEach(g=>{let _=!0;t.forEach(y=>{const v=`${g}|${y}`;!s.reload&&this.store.hasResourceBundle(g,y)?this.state[v]=2:this.state[v]<0||(this.state[v]===1?c[v]===void 0&&(c[v]=!0):(this.state[v]=1,_=!1,c[v]===void 0&&(c[v]=!0),l[v]===void 0&&(l[v]=!0),h[y]===void 0&&(h[y]=!0)))}),_||(f[g]=!0)}),(Object.keys(l).length||Object.keys(c).length)&&this.queue.push({pending:c,pendingCount:Object.keys(c).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(l),pending:Object.keys(c),toLoadLanguages:Object.keys(f),toLoadNamespaces:Object.keys(h)}}loaded(e,t,s){const o=e.split("|"),l=o[0],c=o[1];t&&this.emit("failedLoading",l,c,t),!t&&s&&this.store.addResourceBundle(l,c,s,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&s&&(this.state[e]=0);const f={};this.queue.forEach(h=>{BS(h.loaded,[l],c),rC(h,e),t&&h.errors.push(t),h.pendingCount===0&&!h.done&&(Object.keys(h.loaded).forEach(g=>{f[g]||(f[g]={});const _=h.loaded[g];_.length&&_.forEach(y=>{f[g][y]===void 0&&(f[g][y]=!0)})}),h.done=!0,h.errors.length?h.callback(h.errors):h.callback())}),this.emit("loaded",f),this.queue=this.queue.filter(h=>!h.done)}read(e,t,s){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,c=arguments.length>5?arguments[5]:void 0;if(!e.length)return c(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:s,tried:o,wait:l,callback:c});return}this.readingCalls++;const f=(g,_)=>{if(this.readingCalls--,this.waitingReads.length>0){const y=this.waitingReads.shift();this.read(y.lng,y.ns,y.fcName,y.tried,y.wait,y.callback)}if(g&&_&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,s,o+1,l*2,c)},l);return}c(g,_)},h=this.backend[s].bind(this.backend);if(h.length===2){try{const g=h(e,t);g&&typeof g.then=="function"?g.then(_=>f(null,_)).catch(f):f(null,g)}catch(g){f(g)}return}return h(e,t,f)}prepareLoading(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();re(e)&&(e=this.languageUtils.toResolveHierarchy(e)),re(t)&&(t=[t]);const l=this.queueLoad(e,t,s,o);if(!l.toLoad.length)return l.pending.length||o(),null;l.toLoad.forEach(c=>{this.loadOne(c)})}load(e,t,s){this.prepareLoading(e,t,{},s)}reload(e,t,s){this.prepareLoading(e,t,{reload:!0},s)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const s=e.split("|"),o=s[0],l=s[1];this.read(o,l,"read",void 0,void 0,(c,f)=>{c&&this.logger.warn(`${t}loading namespace ${l} for language ${o} failed`,c),!c&&f&&this.logger.log(`${t}loaded namespace ${l} for language ${o}`,f),this.loaded(e,c,f)})}saveMissing(e,t,s,o,l){var h,g,_,y,v;let c=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},f=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((g=(h=this.services)==null?void 0:h.utils)!=null&&g.hasLoadedNamespace&&!((y=(_=this.services)==null?void 0:_.utils)!=null&&y.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(s==null||s==="")){if((v=this.backend)!=null&&v.create){const R={...c,isUpdate:l},N=this.backend.create.bind(this.backend);if(N.length<6)try{let P;N.length===5?P=N(e,t,s,o,R):P=N(e,t,s,o),P&&typeof P.then=="function"?P.then(I=>f(null,I)).catch(f):f(null,P)}catch(P){f(P)}else N(e,t,s,o,f,R)}!e||!e[0]||this.store.addResource(e[0],t,s,o)}}}const kg=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let e={};if(typeof r[1]=="object"&&(e=r[1]),re(r[1])&&(e.defaultValue=r[1]),re(r[2])&&(e.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const t=r[3]||r[2];Object.keys(t).forEach(s=>{e[s]=t[s]})}return e},interpolation:{escapeValue:!0,format:r=>r,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Rg=r=>{var e,t;return re(r.ns)&&(r.ns=[r.ns]),re(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),re(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),((t=(e=r.supportedLngs)==null?void 0:e.indexOf)==null?void 0:t.call(e,"cimode"))<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),typeof r.initImmediate=="boolean"&&(r.initAsync=r.initImmediate),r},ya=()=>{},sC=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(t=>{typeof r[t]=="function"&&(r[t]=r[t].bind(r))})};class Ds extends il{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Rg(e),this.services={},this.logger=Zt,this.modules={external:[]},sC(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(s=t,t={}),t.defaultNS==null&&t.ns&&(re(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const o=kg();this.options={...o,...this.options,...Rg(t)},this.options.interpolation={...o.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const l=_=>_?typeof _=="function"?new _:_:null;if(!this.options.isClone){this.modules.logger?Zt.init(l(this.modules.logger),this.options):Zt.init(null,this.options);let _;this.modules.formatter?_=this.modules.formatter:_=nC;const y=new Sg(this.options);this.store=new vg(this.options.resources,this.options);const v=this.services;v.logger=Zt,v.resourceStore=this.store,v.languageUtils=y,v.pluralResolver=new ZS(y,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),_&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(v.formatter=l(_),v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new eC(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new iC(l(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",function(R){for(var N=arguments.length,P=new Array(N>1?N-1:0),I=1;I<N;I++)P[I-1]=arguments[I];e.emit(R,...P)}),this.modules.languageDetector&&(v.languageDetector=l(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=l(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new Oa(this.services,this.options),this.translator.on("*",function(R){for(var N=arguments.length,P=new Array(N>1?N-1:0),I=1;I<N;I++)P[I-1]=arguments[I];e.emit(R,...P)}),this.modules.external.forEach(R=>{R.init&&R.init(this)})}if(this.format=this.options.interpolation.format,s||(s=ya),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const _=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);_.length>0&&_[0]!=="dev"&&(this.options.lng=_[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(_=>{this[_]=function(){return e.store[_](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(_=>{this[_]=function(){return e.store[_](...arguments),e}});const h=ms(),g=()=>{const _=(y,v)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),h.resolve(v),s(y,v)};if(this.languages&&!this.isInitialized)return _(null,this.t.bind(this));this.changeLanguage(this.options.lng,_)};return this.options.resources||!this.options.initAsync?g():setTimeout(g,0),h}loadResources(e){var l,c;let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ya;const o=re(e)?e:this.language;if(typeof e=="function"&&(s=e),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return s();const f=[],h=g=>{if(!g||g==="cimode")return;this.services.languageUtils.toResolveHierarchy(g).forEach(y=>{y!=="cimode"&&f.indexOf(y)<0&&f.push(y)})};o?h(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(_=>h(_)),(c=(l=this.options.preload)==null?void 0:l.forEach)==null||c.call(l,g=>h(g)),this.services.backendConnector.load(f,this.options.ns,g=>{!g&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),s(g)})}else s(null)}reloadResources(e,t,s){const o=ms();return typeof e=="function"&&(s=e,e=void 0),typeof t=="function"&&(s=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),s||(s=ya),this.services.backendConnector.reload(e,t,l=>{o.resolve(),s(l)}),o}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&l_.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const s=this.languages[t];if(!(["cimode","dev"].indexOf(s)>-1)&&this.store.hasLanguageSomeTranslations(s)){this.resolvedLanguage=s;break}}}changeLanguage(e,t){var s=this;this.isLanguageChangingTo=e;const o=ms();this.emit("languageChanging",e);const l=h=>{this.language=h,this.languages=this.services.languageUtils.toResolveHierarchy(h),this.resolvedLanguage=void 0,this.setResolvedLanguage(h)},c=(h,g)=>{g?(l(g),this.translator.changeLanguage(g),this.isLanguageChangingTo=void 0,this.emit("languageChanged",g),this.logger.log("languageChanged",g)):this.isLanguageChangingTo=void 0,o.resolve(function(){return s.t(...arguments)}),t&&t(h,function(){return s.t(...arguments)})},f=h=>{var _,y;!e&&!h&&this.services.languageDetector&&(h=[]);const g=re(h)?h:this.services.languageUtils.getBestMatchFromCodes(h);g&&(this.language||l(g),this.translator.language||this.translator.changeLanguage(g),(y=(_=this.services.languageDetector)==null?void 0:_.cacheUserLanguage)==null||y.call(_,g)),this.loadResources(g,v=>{c(v,g)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?f(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(f):this.services.languageDetector.detect(f):f(e),o}getFixedT(e,t,s){var o=this;const l=function(c,f){let h;if(typeof f!="object"){for(var g=arguments.length,_=new Array(g>2?g-2:0),y=2;y<g;y++)_[y-2]=arguments[y];h=o.options.overloadTranslationOptionHandler([c,f].concat(_))}else h={...f};h.lng=h.lng||l.lng,h.lngs=h.lngs||l.lngs,h.ns=h.ns||l.ns,h.keyPrefix!==""&&(h.keyPrefix=h.keyPrefix||s||l.keyPrefix);const v=o.options.keySeparator||".";let R;return h.keyPrefix&&Array.isArray(c)?R=c.map(N=>`${h.keyPrefix}${v}${N}`):R=h.keyPrefix?`${h.keyPrefix}${v}${c}`:c,o.t(R,h)};return re(e)?l.lng=e:l.lngs=e,l.ns=t,l.keyPrefix=s,l}t(){var o;for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return(o=this.translator)==null?void 0:o.translate(...t)}exists(){var o;for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return(o=this.translator)==null?void 0:o.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const s=t.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,l=this.languages[this.languages.length-1];if(s.toLowerCase()==="cimode")return!0;const c=(f,h)=>{const g=this.services.backendConnector.state[`${f}|${h}`];return g===-1||g===0||g===2};if(t.precheck){const f=t.precheck(this,c);if(f!==void 0)return f}return!!(this.hasResourceBundle(s,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||c(s,e)&&(!o||c(l,e)))}loadNamespaces(e,t){const s=ms();return this.options.ns?(re(e)&&(e=[e]),e.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{s.resolve(),t&&t(o)}),s):(t&&t(),Promise.resolve())}loadLanguages(e,t){const s=ms();re(e)&&(e=[e]);const o=this.options.preload||[],l=e.filter(c=>o.indexOf(c)<0&&this.services.languageUtils.isSupportedCode(c));return l.length?(this.options.preload=o.concat(l),this.loadResources(c=>{s.resolve(),t&&t(c)}),s):(t&&t(),Promise.resolve())}dir(e){var o,l;if(e||(e=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=((l=this.services)==null?void 0:l.languageUtils)||new Sg(kg());return t.indexOf(s.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Ds(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ya;const s=e.forkResourceStore;s&&delete e.forkResourceStore;const o={...this.options,...e,isClone:!0},l=new Ds(o);if((e.debug!==void 0||e.prefix!==void 0)&&(l.logger=l.logger.clone(e)),["store","services","language"].forEach(f=>{l[f]=this[f]}),l.services={...this.services},l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},s){const f=Object.keys(this.store.data).reduce((h,g)=>(h[g]={...this.store.data[g]},Object.keys(h[g]).reduce((_,y)=>(_[y]={...h[g][y]},_),{})),{});l.store=new vg(f,o),l.services.resourceStore=l.store}return l.translator=new Oa(l.services,o),l.translator.on("*",function(f){for(var h=arguments.length,g=new Array(h>1?h-1:0),_=1;_<h;_++)g[_-1]=arguments[_];l.emit(f,...g)}),l.init(o,t),l.translator.options=o,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const it=Ds.createInstance();it.createInstance=Ds.createInstance;it.createInstance;it.dir;it.init;it.loadResources;it.reloadResources;it.use;it.changeLanguage;it.getFixedT;it.t;it.exists;it.setDefaultNamespace;it.hasLoadedNamespace;it.loadNamespaces;it.loadLanguages;const oC="Art by Mina 🤍",aC="Home",lC="Gallery",uC="Draw",cC="About",dC="Start",fC="End",hC={logo:oC,home:aC,gallery:lC,draw:uC,about:cC,"hero-welcome":"Welcome to My Art World","gallery-title":"Gallery","gallery-random":"Show A Random Artwork","drawing-title":"Try Your Hand at Drawing !","about-title":"About the Artist","about-description":"Mina is a passionate artist who loves expressing emotions through vibrant colors and unique styles. Each painting tells a story and reflects a piece of her soul.","footer-text":"Art by Mina. All rights reserved.","go-to-admin":"Gallery Admin",Start:dC,End:fC},pC="الفن مع مينا 🤍",gC="الرئيسية",mC="المعرض",_C="ارسم",yC="عن الفنان",vC="البداية",wC="النهاية",EC={logo:pC,home:gC,gallery:mC,draw:_C,about:yC,"hero-welcome":"مرحبا بكم في عالمي الفني","gallery-title":"المعرض","gallery-random":"عرض عمل فني عشوائي","drawing-title":"! جرب الرسم","about-title":"عن الفنان","about-description":"مينا فنانة شغوفة تحب التعبير عن المشاعر من خلال الألوان النابضة بالحياة والأساليب الفريدة. تحكي كل لوحة قصة وتعكس قطعة من روحها","footer-text":"فن بواسطة مينا. كل الحقوق محفوظة","go-to-admin":"إدارة المعرض",Start:vC,End:wC},SC="Art par Mina 🤍",CC="Accueil",IC="Galerie",TC="Dessiner",kC="À propos",RC="Démarrer",NC="Fin",PC={logo:SC,home:CC,gallery:IC,draw:TC,about:kC,"hero-welcome":"Bienvenue dans Mon Monde Artistique","gallery-title":"Galerie","gallery-random":"Afficher une œuvre d’art aléatoire","drawing-title":"Essayez de Dessiner !","about-title":"À propos de l'artiste","about-description":"Mina est une artiste passionnée qui aime exprimer des émotions à travers des couleurs vibrantes et des styles uniques. Chaque peinture raconte une histoire et reflète un morceau de son âme.","footer-text":"Art par Mina. Tous droits réservés.","go-to-admin":"Administration de la galerie",Start:RC,End:NC},xC="미나의 예술 🤍",OC="홈",AC="갤러리",LC="그리기",DC="작가 소개",bC="시작",MC="끝",FC={logo:xC,home:OC,gallery:AC,draw:LC,about:DC,"hero-welcome":"나의 예술 세계에 오신 것을 환영합니다","gallery-title":"갤러리","gallery-random":"무작위 아트웍 표시","drawing-title":"그리기 시도해보기 !","about-title":"작가 소개","about-description":"미나는 감정을 색감과 독특한 스타일로 표현하는 예술가입니다. 그녀의 그림 하나하나에는 이야기가 담겨있고, 그녀의 영혼이 녹아 있습니다.","footer-text":"미나의 예술. 모든 권리 보유.","go-to-admin":"갤러리 관리자",Start:bC,End:MC};it.use(MS).init({resources:{en:{translation:hC},ar:{translation:EC},fr:{translation:PC},ko:{translation:FC}},lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}});const UC=()=>{const{t:r,i18n:e}=Ci(),t=s=>{e.changeLanguage(s)};return U.jsxs("header",{children:[U.jsx("div",{className:"logo","data-key":"logo",children:r("logo")}),U.jsx("div",{className:"language-selector",children:U.jsxs("select",{onChange:s=>t(s.target.value),children:[U.jsx("option",{value:"en",children:"EN"}),U.jsx("option",{value:"ar",children:"AR"}),U.jsx("option",{value:"fr",children:"FR"}),U.jsx("option",{value:"ko",children:"KO"})]})}),U.jsx("nav",{children:U.jsxs("ul",{children:[U.jsx("li",{children:U.jsx("a",{href:"#hero","data-key":"home",children:r("home")})}),U.jsx("li",{children:U.jsx("a",{href:"#gallery","data-key":"gallery",children:r("gallery")})}),U.jsx("li",{children:U.jsx("a",{href:"#painting-game","data-key":"draw",children:r("draw")})}),U.jsx("li",{children:U.jsx("a",{href:"#about","data-key":"about",children:r("about")})})]})})]})},jC=()=>{const{t:r}=Ci();return U.jsx("section",{id:"hero",className:"hero",children:U.jsx("div",{children:U.jsx("h1",{"data-key":"hero-welcome",className:"section-fade",children:r("hero-welcome")})})})};var Ng={};/**
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
 */const u_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const M=function(r,e){if(!r)throw Ii(e)},Ii=function(r){return new Error("Firebase Database ("+u_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
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
 */const c_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},$C=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],c=r[t++],f=r[t++],h=((o&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const l=r[t++],c=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},ud={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],c=o+1<r.length,f=c?r[o+1]:0,h=o+2<r.length,g=h?r[o+2]:0,_=l>>2,y=(l&3)<<4|f>>4;let v=(f&15)<<2|g>>6,R=g&63;h||(R=64,c||(v=64)),s.push(t[_],t[y],t[v],t[R])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(c_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):$C(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const g=o<r.length?t[r.charAt(o)]:64;++o;const y=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||g==null||y==null)throw new zC;const v=l<<2|f>>4;if(s.push(v),g!==64){const R=f<<4&240|g>>2;if(s.push(R),y!==64){const N=g<<6&192|y;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class zC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const d_=function(r){const e=c_(r);return ud.encodeByteArray(e,!0)},Aa=function(r){return d_(r).replace(/\./g,"")},La=function(r){try{return ud.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function VC(r){return f_(void 0,r)}function f_(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!BC(t)||(r[t]=f_(r[t],e[t]));return r}function BC(r){return r!=="__proto__"}/**
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
 */function WC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const HC=()=>WC().__FIREBASE_DEFAULTS__,KC=()=>{if(typeof process>"u"||typeof Ng>"u")return;const r=Ng.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},GC=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&La(r[1]);return e&&JSON.parse(e)},cd=()=>{try{return HC()||KC()||GC()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},h_=r=>{var e,t;return(t=(e=cd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},p_=r=>{const e=h_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},g_=()=>{var r;return(r=cd())===null||r===void 0?void 0:r.config},m_=r=>{var e;return(e=cd())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class dd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function __(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Aa(JSON.stringify(t)),Aa(JSON.stringify(c)),""].join(".")}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function qC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function YC(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function y_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QC(){const r=pt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function JC(){return u_.NODE_ADMIN===!0}function XC(){try{return typeof indexedDB=="object"}catch{return!1}}function ZC(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const eI="FirebaseError";class In extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=eI,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ys.prototype.create)}}class Ys{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?tI(l,s):"Error",f=`${this.serviceName}: ${c} (${o}).`;return new In(o,f,s)}}function tI(r,e){return r.replace(nI,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const nI=/\{\$([^}]+)}/g;/**
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
 */function bs(r){return JSON.parse(r)}function qe(r){return JSON.stringify(r)}/**
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
 */const v_=function(r){let e={},t={},s={},o="";try{const l=r.split(".");e=bs(La(l[0])||""),t=bs(La(l[1])||""),o=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:o}},rI=function(r){const e=v_(r),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},iI=function(r){const e=v_(r).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Tn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function _i(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function $c(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Da(r,e,t){const s={};for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&(s[o]=e.call(t,r[o],o,r));return s}function ba(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],c=e[o];if(Pg(l)&&Pg(c)){if(!ba(l,c))return!1}else if(l!==c)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Pg(r){return r!==null&&typeof r=="object"}/**
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
 */function Ti(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Cs(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Is(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}/**
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
 */class sI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let y=0;y<16;y++)s[y]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let y=0;y<16;y++)s[y]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let y=16;y<80;y++){const v=s[y-3]^s[y-8]^s[y-14]^s[y-16];s[y]=(v<<1|v>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],c=this.chain_[2],f=this.chain_[3],h=this.chain_[4],g,_;for(let y=0;y<80;y++){y<40?y<20?(g=f^l&(c^f),_=1518500249):(g=l^c^f,_=1859775393):y<60?(g=l&c|f&(l|c),_=2400959708):(g=l^c^f,_=3395469782);const v=(o<<5|o>>>27)+g+h+_+s[y]&4294967295;h=f,f=c,c=(l<<30|l>>>2)&4294967295,l=o,o=v}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let o=0;const l=this.buf_;let c=this.inbuf_;for(;o<t;){if(c===0)for(;o<=s;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(l[c]=e.charCodeAt(o),++c,++o,c===this.blockSize){this.compress_(l),c=0;break}}else for(;o<t;)if(l[c]=e[o],++c,++o,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[o]>>l&255,++s;return e}}function oI(r,e){const t=new aI(r,e);return t.subscribe.bind(t)}class aI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");lI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=yc),o.error===void 0&&(o.error=yc),o.complete===void 0&&(o.complete=yc);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lI(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function yc(){}function w_(r,e){return`${r} failed: ${e} argument `}/**
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
 */const uI=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);if(o>=55296&&o<=56319){const l=o-55296;s++,M(s<r.length,"Surrogate pair missing trail surrogate.");const c=r.charCodeAt(s)-56320;o=65536+(l<<10)+c}o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):o<65536?(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},sl=function(r){let e=0;for(let t=0;t<r.length;t++){const s=r.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Pt(r){return r&&r._delegate?r._delegate:r}class rr{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Sr="[DEFAULT]";/**
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
 */class cI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new dd;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fI(e))try{this.getOrInitializeService({instanceIdentifier:Sr})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=Sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sr){return this.instances.has(e)}getOptions(e=Sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&c.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:dI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Sr){return this.component?this.component.multipleInstances?e:Sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dI(r){return r===Sr?void 0:r}function fI(r){return r.instantiationMode==="EAGER"}/**
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
 */class hI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ce||(Ce={}));const pI={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},gI=Ce.INFO,mI={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},_I=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=mI[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hd{constructor(e){this.name=e,this._logLevel=gI,this._logHandler=_I,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const yI=(r,e)=>e.some(t=>r instanceof t);let xg,Og;function vI(){return xg||(xg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wI(){return Og||(Og=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const E_=new WeakMap,zc=new WeakMap,S_=new WeakMap,vc=new WeakMap,pd=new WeakMap;function EI(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",c)},l=()=>{t(Xn(r.result)),o()},c=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&E_.set(t,r)}).catch(()=>{}),pd.set(e,r),e}function SI(r){if(zc.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",c),r.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",c),r.addEventListener("abort",c)});zc.set(r,e)}let Vc={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return zc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||S_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Xn(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function CI(r){Vc=r(Vc)}function II(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(wc(this),e,...t);return S_.set(s,e.sort?e.sort():[e]),Xn(s)}:wI().includes(r)?function(...e){return r.apply(wc(this),e),Xn(E_.get(this))}:function(...e){return Xn(r.apply(wc(this),e))}}function TI(r){return typeof r=="function"?II(r):(r instanceof IDBTransaction&&SI(r),yI(r,vI())?new Proxy(r,Vc):r)}function Xn(r){if(r instanceof IDBRequest)return EI(r);if(vc.has(r))return vc.get(r);const e=TI(r);return e!==r&&(vc.set(r,e),pd.set(e,r)),e}const wc=r=>pd.get(r);function kI(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const c=indexedDB.open(r,e),f=Xn(c);return s&&c.addEventListener("upgradeneeded",h=>{s(Xn(c.result),h.oldVersion,h.newVersion,Xn(c.transaction),h)}),t&&c.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),f.then(h=>{l&&h.addEventListener("close",()=>l()),o&&h.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const RI=["get","getKey","getAll","getAllKeys","count"],NI=["put","add","delete","clear"],Ec=new Map;function Ag(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ec.get(e))return Ec.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=NI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||RI.includes(t)))return;const l=async function(c,...f){const h=this.transaction(c,o?"readwrite":"readonly");let g=h.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[t](...f),o&&h.done]))[0]};return Ec.set(e,l),l}CI(r=>({...r,get:(e,t,s)=>Ag(e,t)||r.get(e,t,s),has:(e,t)=>!!Ag(e,t)||r.has(e,t)}));/**
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
 */class PI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(xI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function xI(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bc="@firebase/app",Lg="0.10.18";/**
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
 */const En=new hd("@firebase/app"),OI="@firebase/app-compat",AI="@firebase/analytics-compat",LI="@firebase/analytics",DI="@firebase/app-check-compat",bI="@firebase/app-check",MI="@firebase/auth",FI="@firebase/auth-compat",UI="@firebase/database",jI="@firebase/data-connect",$I="@firebase/database-compat",zI="@firebase/functions",VI="@firebase/functions-compat",BI="@firebase/installations",WI="@firebase/installations-compat",HI="@firebase/messaging",KI="@firebase/messaging-compat",GI="@firebase/performance",qI="@firebase/performance-compat",YI="@firebase/remote-config",QI="@firebase/remote-config-compat",JI="@firebase/storage",XI="@firebase/storage-compat",ZI="@firebase/firestore",eT="@firebase/vertexai",tT="@firebase/firestore-compat",nT="firebase",rT="11.2.0";/**
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
 */const Wc="[DEFAULT]",iT={[Bc]:"fire-core",[OI]:"fire-core-compat",[LI]:"fire-analytics",[AI]:"fire-analytics-compat",[bI]:"fire-app-check",[DI]:"fire-app-check-compat",[MI]:"fire-auth",[FI]:"fire-auth-compat",[UI]:"fire-rtdb",[jI]:"fire-data-connect",[$I]:"fire-rtdb-compat",[zI]:"fire-fn",[VI]:"fire-fn-compat",[BI]:"fire-iid",[WI]:"fire-iid-compat",[HI]:"fire-fcm",[KI]:"fire-fcm-compat",[GI]:"fire-perf",[qI]:"fire-perf-compat",[YI]:"fire-rc",[QI]:"fire-rc-compat",[JI]:"fire-gcs",[XI]:"fire-gcs-compat",[ZI]:"fire-fst",[tT]:"fire-fst-compat",[eT]:"fire-vertex","fire-js":"fire-js",[nT]:"fire-js-all"};/**
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
 */const Ma=new Map,sT=new Map,Hc=new Map;function Dg(r,e){try{r.container.addComponent(e)}catch(t){En.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Rr(r){const e=r.name;if(Hc.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;Hc.set(e,r);for(const t of Ma.values())Dg(t,r);for(const t of sT.values())Dg(t,r);return!0}function ol(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function gn(r){return r.settings!==void 0}/**
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
 */const oT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zn=new Ys("app","Firebase",oT);/**
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
 */class aT{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
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
 */const Lr=rT;function C_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Wc,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw Zn.create("bad-app-name",{appName:String(o)});if(t||(t=g_()),!t)throw Zn.create("no-options");const l=Ma.get(o);if(l){if(ba(t,l.options)&&ba(s,l.config))return l;throw Zn.create("duplicate-app",{appName:o})}const c=new hI(o);for(const h of Hc.values())c.addComponent(h);const f=new aT(t,s,c);return Ma.set(o,f),f}function gd(r=Wc){const e=Ma.get(r);if(!e&&r===Wc&&g_())return C_();if(!e)throw Zn.create("no-app",{appName:r});return e}function tn(r,e,t){var s;let o=(s=iT[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(f.join(" "));return}Rr(new rr(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const lT="firebase-heartbeat-database",uT=1,Ms="firebase-heartbeat-store";let Sc=null;function I_(){return Sc||(Sc=kI(lT,uT,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ms)}catch(t){console.warn(t)}}}}).catch(r=>{throw Zn.create("idb-open",{originalErrorMessage:r.message})})),Sc}async function cT(r){try{const t=(await I_()).transaction(Ms),s=await t.objectStore(Ms).get(T_(r));return await t.done,s}catch(e){if(e instanceof In)En.warn(e.message);else{const t=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(t.message)}}}async function bg(r,e){try{const s=(await I_()).transaction(Ms,"readwrite");await s.objectStore(Ms).put(e,T_(r)),await s.done}catch(t){if(t instanceof In)En.warn(t.message);else{const s=Zn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});En.warn(s.message)}}}function T_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const dT=1024,fT=30*24*60*60*1e3;class hT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Mg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const f=new Date(c.date).valueOf();return Date.now()-f<=fT}),this._storage.overwrite(this._heartbeatsCache))}catch(s){En.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Mg(),{heartbeatsToSend:s,unsentEntries:o}=pT(this._heartbeatsCache.heartbeats),l=Aa(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return En.warn(t),""}}}function Mg(){return new Date().toISOString().substring(0,10)}function pT(r,e=dT){const t=[];let s=r.slice();for(const o of r){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),Fg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Fg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class gT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XC()?ZC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await cT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return bg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return bg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Fg(r){return Aa(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function mT(r){Rr(new rr("platform-logger",e=>new PI(e),"PRIVATE")),Rr(new rr("heartbeat",e=>new hT(e),"PRIVATE")),tn(Bc,Lg,r),tn(Bc,Lg,"esm2017"),tn("fire-js","")}mT("");var Ug={};const jg="@firebase/database",$g="1.0.11";/**
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
 */let k_="";function _T(r){k_=r}/**
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
 */class yT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),qe(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:bs(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class vT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Tn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const R_=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new yT(e)}}catch{}return new vT},Ir=R_("localStorage"),wT=R_("sessionStorage");/**
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
 */const fi=new hd("@firebase/database"),ET=function(){let r=1;return function(){return r++}}(),N_=function(r){const e=uI(r),t=new sI;t.update(e);const s=t.digest();return ud.encodeByteArray(s)},Qs=function(...r){let e="";for(let t=0;t<r.length;t++){const s=r[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Qs.apply(null,s):typeof s=="object"?e+=qe(s):e+=s,e+=" "}return e};let ks=null,zg=!0;const ST=function(r,e){M(!0,"Can't turn on custom loggers persistently."),fi.logLevel=Ce.VERBOSE,ks=fi.log.bind(fi)},ct=function(...r){if(zg===!0&&(zg=!1,ks===null&&wT.get("logging_enabled")===!0&&ST()),ks){const e=Qs.apply(null,r);ks(e)}},Js=function(r){return function(...e){ct(r,...e)}},Kc=function(...r){const e="FIREBASE INTERNAL ERROR: "+Qs(...r);fi.error(e)},Sn=function(...r){const e=`FIREBASE FATAL ERROR: ${Qs(...r)}`;throw fi.error(e),new Error(e)},Nt=function(...r){const e="FIREBASE WARNING: "+Qs(...r);fi.warn(e)},CT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Nt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},P_=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},IT=function(r){if(document.readyState==="complete")r();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},yi="[MIN_NAME]",Nr="[MAX_NAME]",ki=function(r,e){if(r===e)return 0;if(r===yi||e===Nr)return-1;if(e===yi||r===Nr)return 1;{const t=Vg(r),s=Vg(e);return t!==null?s!==null?t-s===0?r.length-e.length:t-s:-1:s!==null?1:r<e?-1:1}},TT=function(r,e){return r===e?0:r<e?-1:1},_s=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+qe(e))},md=function(r){if(typeof r!="object"||r===null)return qe(r);const e=[];for(const s in r)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=qe(e[s]),t+=":",t+=md(r[e[s]]);return t+="}",t},x_=function(r,e){const t=r.length;if(t<=e)return[r];const s=[];for(let o=0;o<t;o+=e)o+e>t?s.push(r.substring(o,t)):s.push(r.substring(o,o+e));return s};function St(r,e){for(const t in r)r.hasOwnProperty(t)&&e(t,r[t])}const O_=function(r){M(!P_(r),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let o,l,c,f,h;r===0?(l=0,c=0,o=1/r===-1/0?1:0):(o=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),l=f+s,c=Math.round(r*Math.pow(2,t-f)-Math.pow(2,t))):(l=0,c=Math.round(r/Math.pow(2,1-s-t))));const g=[];for(h=t;h;h-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(h=e;h;h-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(o?1:0),g.reverse();const _=g.join("");let y="";for(h=0;h<64;h+=8){let v=parseInt(_.substr(h,8),2).toString(16);v.length===1&&(v="0"+v),y=y+v}return y.toLowerCase()},kT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},RT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function NT(r,e){let t="Unknown Error";r==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?t="Client doesn't have permission to access the desired data.":r==="unavailable"&&(t="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+t);return s.code=r.toUpperCase(),s}const PT=new RegExp("^-?(0*)\\d{1,10}$"),xT=-2147483648,OT=2147483647,Vg=function(r){if(PT.test(r)){const e=Number(r);if(e>=xT&&e<=OT)return e}return null},Xs=function(r){try{r()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Nt("Exception was thrown by user callback.",t),e},Math.floor(0))}},AT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Rs=function(r,e){const t=setTimeout(r,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class LT{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Nt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class DT{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ct("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Nt(e)}}class Ca{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ca.OWNER="owner";/**
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
 */const _d="5",A_="v",L_="s",D_="r",b_="f",M_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,F_="ls",U_="p",Gc="ac",j_="websocket",$_="long_polling";/**
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
 */class z_{constructor(e,t,s,o,l=!1,c="",f=!1,h=!1){this.secure=t,this.namespace=s,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ir.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ir.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function bT(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function V_(r,e,t){M(typeof e=="string","typeof type must == string"),M(typeof t=="object","typeof params must == object");let s;if(e===j_)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===$_)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);bT(r)&&(t.ns=r.namespace);const o=[];return St(t,(l,c)=>{o.push(l+"="+c)}),s+o.join("&")}/**
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
 */class MT{constructor(){this.counters_={}}incrementCounter(e,t=1){Tn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return VC(this.counters_)}}/**
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
 */const Cc={},Ic={};function yd(r){const e=r.toString();return Cc[e]||(Cc[e]=new MT),Cc[e]}function FT(r,e){const t=r.toString();return Ic[t]||(Ic[t]=e()),Ic[t]}/**
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
 */class UT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<s.length;++o)s[o]&&Xs(()=>{this.onMessage_(s[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Bg="start",jT="close",$T="pLPCommand",zT="pRTLPCB",B_="id",W_="pw",H_="ser",VT="cb",BT="seg",WT="ts",HT="d",KT="dframe",K_=1870,G_=30,GT=K_-G_,qT=25e3,YT=3e4;class ui{constructor(e,t,s,o,l,c,f){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.transportSessionId=c,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Js(e),this.stats_=yd(t),this.urlFn=h=>(this.appCheckToken&&(h[Gc]=this.appCheckToken),V_(t,$_,h))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new UT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(YT)),IT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new vd((...l)=>{const[c,f,h,g,_]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===Bg)this.id=f,this.password=h;else if(c===jT)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[Bg]="t",s[H_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[VT]=this.scriptTagHolder.uniqueCallbackIdentifier),s[A_]=_d,this.transportSessionId&&(s[L_]=this.transportSessionId),this.lastSessionId&&(s[F_]=this.lastSessionId),this.applicationId&&(s[U_]=this.applicationId),this.appCheckToken&&(s[Gc]=this.appCheckToken),typeof location<"u"&&location.hostname&&M_.test(location.hostname)&&(s[D_]=b_);const o=this.urlFn(s);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ui.forceAllow_=!0}static forceDisallow(){ui.forceDisallow_=!0}static isAvailable(){return ui.forceAllow_?!0:!ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!kT()&&!RT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=qe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=d_(t),o=x_(s,GT);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[KT]="t",s[B_]=e,s[W_]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=qe(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class vd{constructor(e,t,s,o){this.onDisconnect=s,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ET(),window[$T+this.uniqueCallbackIdentifier]=e,window[zT+this.uniqueCallbackIdentifier]=t,this.myIFrame=vd.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(f){ct("frame writing exception"),f.stack&&ct(f.stack),ct(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ct("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[B_]=this.myID,e[W_]=this.myPW,e[H_]=this.currentSerial;let t=this.urlFn(e),s="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+G_+s.length<=K_;){const c=this.pendingSegs.shift();s=s+"&"+BT+o+"="+c.seg+"&"+WT+o+"="+c.ts+"&"+HT+o+"="+c.d,o++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},o=setTimeout(s,Math.floor(qT)),l=()=>{clearTimeout(o),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const o=s.readyState;(!o||o==="loaded"||o==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ct("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const QT=16384,JT=45e3;let Fa=null;typeof MozWebSocket<"u"?Fa=MozWebSocket:typeof WebSocket<"u"&&(Fa=WebSocket);class en{constructor(e,t,s,o,l,c,f){this.connId=e,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Js(this.connId),this.stats_=yd(t),this.connURL=en.connectionURL_(t,c,f,o,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,o,l){const c={};return c[A_]=_d,typeof location<"u"&&location.hostname&&M_.test(location.hostname)&&(c[D_]=b_),t&&(c[L_]=t),s&&(c[F_]=s),o&&(c[Gc]=o),l&&(c[U_]=l),V_(e,j_,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ir.set("previous_websocket_failure",!0);try{let s;JC(),this.mySock=new Fa(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Fa!==null&&!en.forceDisallow_}static previouslyFailed(){return Ir.isInMemoryStorage||Ir.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ir.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=bs(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=qe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=x_(t,QT);s.length>1&&this.sendString_(String(s.length));for(let o=0;o<s.length;o++)this.sendString_(s[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(JT))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}en.responsesRequiredToBeHealthy=2;en.healthyTimeout=3e4;/**
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
 */class Fs{static get ALL_TRANSPORTS(){return[ui,en]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=en.isAvailable();let s=t&&!en.previouslyFailed();if(e.webSocketOnly&&(t||Nt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[en];else{const o=this.transports_=[];for(const l of Fs.ALL_TRANSPORTS)l&&l.isAvailable()&&o.push(l);Fs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Fs.globalTransportInitialized_=!1;/**
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
 */const XT=6e4,ZT=5e3,ek=10*1024,tk=100*1024,Tc="t",Wg="d",nk="s",Hg="r",rk="e",Kg="o",Gg="a",qg="n",Yg="p",ik="h";class sk{constructor(e,t,s,o,l,c,f,h,g,_){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=c,this.onReady_=f,this.onDisconnect_=h,this.onKill_=g,this.lastSessionId=_,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Js("c:"+this.id+":"),this.transportManager_=new Fs(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=Rs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>tk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ek?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Tc in e){const t=e[Tc];t===Gg?this.upgradeIfSecondaryHealthy_():t===Hg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Kg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=_s("t",e),s=_s("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=_s("t",e),s=_s("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=_s(Tc,e);if(Wg in e){const s=e[Wg];if(t===ik){const o=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(t===qg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===nk?this.onConnectionShutdown_(s):t===Hg?this.onReset_(s):t===rk?Kc("Server Error: "+s):t===Kg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Kc("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),_d!==s&&Nt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Rs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(XT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Rs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ZT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ir.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class q_{put(e,t,s,o){}merge(e,t,s,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Y_{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let o=0;o<s.length;o++)s[o].callback.apply(s[o].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const o=this.getInitialEvent(e);o&&t.apply(s,o)}off(e,t,s){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let l=0;l<o.length;l++)if(o[l].callback===t&&(!s||s===o[l].context)){o.splice(l,1);return}}validateEventType_(e){M(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Ua extends Y_{static getInstance(){return new Ua}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return M(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Qg=32,Jg=768;class Te{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[s]=this.pieces_[o],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function _e(){return new Te("")}function ce(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function ir(r){return r.pieces_.length-r.pieceNum_}function Ne(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new Te(r.pieces_,e)}function Q_(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function ok(r){let e="";for(let t=r.pieceNum_;t<r.pieces_.length;t++)r.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[t])));return e||"/"}function J_(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function X_(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let t=r.pieceNum_;t<r.pieces_.length-1;t++)e.push(r.pieces_[t]);return new Te(e,0)}function Ye(r,e){const t=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)t.push(r.pieces_[s]);if(e instanceof Te)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let o=0;o<s.length;o++)s[o].length>0&&t.push(s[o])}return new Te(t,0)}function ue(r){return r.pieceNum_>=r.pieces_.length}function ht(r,e){const t=ce(r),s=ce(e);if(t===null)return e;if(t===s)return ht(Ne(r),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function Z_(r,e){if(ir(r)!==ir(e))return!1;for(let t=r.pieceNum_,s=e.pieceNum_;t<=r.pieces_.length;t++,s++)if(r.pieces_[t]!==e.pieces_[s])return!1;return!0}function Bt(r,e){let t=r.pieceNum_,s=e.pieceNum_;if(ir(r)>ir(e))return!1;for(;t<r.pieces_.length;){if(r.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class ak{constructor(e,t){this.errorPrefix_=t,this.parts_=J_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=sl(this.parts_[s]);ey(this)}}function lk(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=sl(e),ey(r)}function uk(r){const e=r.parts_.pop();r.byteLength_-=sl(e),r.parts_.length>0&&(r.byteLength_-=1)}function ey(r){if(r.byteLength_>Jg)throw new Error(r.errorPrefix_+"has a key path longer than "+Jg+" bytes ("+r.byteLength_+").");if(r.parts_.length>Qg)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qg+") or object contains a cycle "+Cr(r))}function Cr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
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
 */class wd extends Y_{static getInstance(){return new wd}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return M(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ys=1e3,ck=60*5*1e3,Xg=30*1e3,dk=1.3,fk=3e4,hk="server_kill",Zg=3;class wn extends q_{constructor(e,t,s,o,l,c,f,h){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=f,this.authOverride_=h,this.id=wn.nextPersistentConnectionId_++,this.log_=Js("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ys,this.maxReconnectDelay_=ck,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,h)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ua.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const o=++this.requestNumber_,l={r:o,a:e,b:t};this.log_(qe(l)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[o]=s)}get(e){this.initConnection_();const t=new dd,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const f=c.d;c.s==="ok"?t.resolve(f):t.reject(f)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,o){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const f={onComplete:o,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),o=t._queryIdentifier;this.log_("Listen on "+s+" for "+o);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,f=>{const h=f.d,g=f.s;wn.warnOnListenWarnings_(h,t),(this.listens.get(s)&&this.listens.get(s).get(o))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,o),e.onComplete&&e.onComplete(g,h))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Tn(e,"w")){const s=_i(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const o='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Nt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||iI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=rI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,o=>{const l=o.s,c=o.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+o),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,o)&&this.connected_&&this.sendUnlisten_(s,o,e._queryObject,t)}sendUnlisten_(e,t,s,o){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";o&&(l.q=s,l.t=o),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,o){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{o&&setTimeout(()=>{o(c.s,c.d)},Math.floor(0))})}put(e,t,s,o){this.putInternal("p",e,t,s,o)}merge(e,t,s,o){this.putInternal("m",e,t,s,o)}putInternal(e,t,s,o,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:o}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+qe(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Kc("Unrecognized action received from server: "+qe(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ys,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ys,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>fk&&(this.reconnectDelay_=ys),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+wn.nextConnectionId_++,l=this.lastSessionId;let c=!1,f=null;const h=function(){f?f.close():(c=!0,s())},g=function(y){M(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(y)};this.realtime_={close:h,sendRequest:g};const _=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,v]=await Promise.all([this.authTokenProvider_.getToken(_),this.appCheckTokenProvider_.getToken(_)]);c?ct("getToken() completed but was canceled"):(ct("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=v&&v.token,f=new sk(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,R=>{Nt(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(hk)},l))}catch(y){this.log_("Failed to get token: "+y),c||(this.repoInfo_.nodeAdmin&&Nt(y),h())}}}interrupt(e){ct("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ct("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$c(this.interruptReasons_)&&(this.reconnectDelay_=ys,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>md(l)).join("$"):s="default";const o=this.removeListen_(e,s);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,t){const s=new Te(e).toString();let o;if(this.listens.has(s)){const l=this.listens.get(s);o=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else o=void 0;return o}onAuthRevoked_(e,t){ct("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zg&&(this.reconnectDelay_=Xg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ct("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+k_.replace(/\./g,"-")]=1,fd()?e["framework.cordova"]=1:y_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ua.getInstance().currentlyOnline();return $c(this.interruptReasons_)&&e}}wn.nextPersistentConnectionId_=0;wn.nextConnectionId_=0;/**
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
 */class ae{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ae(e,t)}}/**
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
 */class al{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new ae(yi,e),o=new ae(yi,t);return this.compare(s,o)!==0}minPost(){return ae.MIN}}/**
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
 */let va;class ty extends al{static get __EMPTY_NODE(){return va}static set __EMPTY_NODE(e){va=e}compare(e,t){return ki(e.name,t.name)}isDefinedOn(e){throw Ii("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ae.MIN}maxPost(){return new ae(Nr,va)}makePost(e,t){return M(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,va)}toString(){return".key"}}const hi=new ty;/**
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
 */class wa{constructor(e,t,s,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,o&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class et{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??et.RED,this.left=o??Et.EMPTY_NODE,this.right=l??Et.EMPTY_NODE}copy(e,t,s,o,l){return new et(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o=o.copy(null,t,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Et.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,o;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Et.EMPTY_NODE;o=s.right.min_(),s=s.copy(o.key,o.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}et.RED=!0;et.BLACK=!1;class pk{copy(e,t,s,o,l){return this}insert(e,t,s){return new et(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Et{constructor(e,t=Et.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Et(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,et.BLACK,null,null))}remove(e){return new Et(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,et.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,o=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return o?o.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(o=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new wa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new wa(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new wa(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new wa(this.root_,null,this.comparator_,!0,e)}}Et.EMPTY_NODE=new pk;/**
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
 */function gk(r,e){return ki(r.name,e.name)}function Ed(r,e){return ki(r,e)}/**
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
 */let qc;function mk(r){qc=r}const ny=function(r){return typeof r=="number"?"number:"+O_(r):"string:"+r},ry=function(r){if(r.isLeafNode()){const e=r.val();M(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Tn(e,".sv"),"Priority must be a string or number.")}else M(r===qc||r.isEmpty(),"priority of unexpected type.");M(r===qc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let em;class Ze{static set __childrenNodeConstructor(e){em=e}static get __childrenNodeConstructor(){return em}constructor(e,t=Ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,M(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ry(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:ce(e)===".priority"?this.priorityNode_:Ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=ce(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(M(s!==".priority"||ir(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ny(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=O_(this.value_):e+=this.value_,this.lazyHash_=N_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ze.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,o=Ze.VALUE_TYPE_ORDER.indexOf(t),l=Ze.VALUE_TYPE_ORDER.indexOf(s);return M(o>=0,"Unknown leaf type: "+t),M(l>=0,"Unknown leaf type: "+s),o===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let iy,sy;function _k(r){iy=r}function yk(r){sy=r}class vk extends al{compare(e,t){const s=e.node.getPriority(),o=t.node.getPriority(),l=s.compareTo(o);return l===0?ki(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(Nr,new Ze("[PRIORITY-POST]",sy))}makePost(e,t){const s=iy(e);return new ae(t,new Ze("[PRIORITY-POST]",s))}toString(){return".priority"}}const je=new vk;/**
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
 */const wk=Math.log(2);class Ek{constructor(e){const t=l=>parseInt(Math.log(l)/wk,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const o=s(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ja=function(r,e,t,s){r.sort(e);const o=function(h,g){const _=g-h;let y,v;if(_===0)return null;if(_===1)return y=r[h],v=t?t(y):y,new et(v,y.node,et.BLACK,null,null);{const R=parseInt(_/2,10)+h,N=o(h,R),P=o(R+1,g);return y=r[R],v=t?t(y):y,new et(v,y.node,et.BLACK,N,P)}},l=function(h){let g=null,_=null,y=r.length;const v=function(N,P){const I=y-N,z=y;y-=N;const B=o(I+1,z),W=r[I],Q=t?t(W):W;R(new et(Q,W.node,P,null,B))},R=function(N){g?(g.left=N,g=N):(_=N,g=N)};for(let N=0;N<h.count;++N){const P=h.nextBitIsOne(),I=Math.pow(2,h.count-(N+1));P?v(I,et.BLACK):(v(I,et.BLACK),v(I,et.RED))}return _},c=new Ek(r.length),f=l(c);return new Et(s||e,f)};/**
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
 */let kc;const vs={};class mn{static get Default(){return M(je,"ChildrenNode.ts has not been loaded"),kc=kc||new mn({".priority":vs},{".priority":je}),kc}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=_i(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Et?t:null}hasIndex(e){return Tn(this.indexSet_,e.toString())}addIndex(e,t){M(e!==hi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let o=!1;const l=t.getIterator(ae.Wrap);let c=l.getNext();for(;c;)o=o||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let f;o?f=ja(s,e.getCompare()):f=vs;const h=e.toString(),g=Object.assign({},this.indexSet_);g[h]=e;const _=Object.assign({},this.indexes_);return _[h]=f,new mn(_,g)}addToIndexes(e,t){const s=Da(this.indexes_,(o,l)=>{const c=_i(this.indexSet_,l);if(M(c,"Missing index implementation for "+l),o===vs)if(c.isDefinedOn(e.node)){const f=[],h=t.getIterator(ae.Wrap);let g=h.getNext();for(;g;)g.name!==e.name&&f.push(g),g=h.getNext();return f.push(e),ja(f,c.getCompare())}else return vs;else{const f=t.get(e.name);let h=o;return f&&(h=h.remove(new ae(e.name,f))),h.insert(e,e.node)}});return new mn(s,this.indexSet_)}removeFromIndexes(e,t){const s=Da(this.indexes_,o=>{if(o===vs)return o;{const l=t.get(e.name);return l?o.remove(new ae(e.name,l)):o}});return new mn(s,this.indexSet_)}}/**
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
 */let ws;class Z{static get EMPTY_NODE(){return ws||(ws=new Z(new Et(Ed),null,mn.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ry(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ws}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ws:t}}getChild(e){const t=ce(e);return t===null?this:this.getImmediateChild(t).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(M(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new ae(e,t);let o,l;t.isEmpty()?(o=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(o=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=o.isEmpty()?ws:this.priorityNode_;return new Z(o,c,l)}}updateChild(e,t){const s=ce(e);if(s===null)return t;{M(ce(e)!==".priority"||ir(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(s).updateChild(Ne(e),t);return this.updateImmediateChild(s,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,o=0,l=!0;if(this.forEachChild(je,(c,f)=>{t[c]=f.val(e),s++,l&&Z.INTEGER_REGEXP_.test(c)?o=Math.max(o,Number(c)):l=!1}),!e&&l&&o<2*s){const c=[];for(const f in t)c[f]=t[f];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ny(this.getPriority().val())+":"),this.forEachChild(je,(t,s)=>{const o=s.hash();o!==""&&(e+=":"+t+":"+o)}),this.lazyHash_=e===""?"":N_(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const o=this.resolveIndex_(s);if(o){const l=o.getPredecessorKey(new ae(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ae(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ae(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(o=>t(o.name,o.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,ae.Wrap);let l=o.peek();for(;l!=null&&t.compare(l,e)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let l=o.peek();for(;l!=null&&t.compare(l,e)>0;)o.getNext(),l=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zs?-1:0}withIndex(e){if(e===hi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===hi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(je),o=t.getIterator(je);let l=s.getNext(),c=o.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=o.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===hi?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Sk extends Z{constructor(){super(new Et(Ed),Z.EMPTY_NODE,mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const Zs=new Sk;Object.defineProperties(ae,{MIN:{value:new ae(yi,Z.EMPTY_NODE)},MAX:{value:new ae(Nr,Zs)}});ty.__EMPTY_NODE=Z.EMPTY_NODE;Ze.__childrenNodeConstructor=Z;mk(Zs);yk(Zs);/**
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
 */const Ck=!0;function rt(r,e=null){if(r===null)return Z.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),M(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const t=r;return new Ze(t,rt(e))}if(!(r instanceof Array)&&Ck){const t=[];let s=!1;if(St(r,(c,f)=>{if(c.substring(0,1)!=="."){const h=rt(f);h.isEmpty()||(s=s||!h.getPriority().isEmpty(),t.push(new ae(c,h)))}}),t.length===0)return Z.EMPTY_NODE;const l=ja(t,gk,c=>c.name,Ed);if(s){const c=ja(t,je.getCompare());return new Z(l,rt(e),new mn({".priority":c},{".priority":je}))}else return new Z(l,rt(e),mn.Default)}else{let t=Z.EMPTY_NODE;return St(r,(s,o)=>{if(Tn(r,s)&&s.substring(0,1)!=="."){const l=rt(o);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(rt(e))}}_k(rt);/**
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
 */class Ik extends al{constructor(e){super(),this.indexPath_=e,M(!ue(e)&&ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),o=this.extractChild(t.node),l=s.compareTo(o);return l===0?ki(e.name,t.name):l}makePost(e,t){const s=rt(e),o=Z.EMPTY_NODE.updateChild(this.indexPath_,s);return new ae(t,o)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,Zs);return new ae(Nr,e)}toString(){return J_(this.indexPath_,0).join("/")}}/**
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
 */class Tk extends al{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ki(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,t){const s=rt(e);return new ae(t,s)}toString(){return".value"}}const kk=new Tk;/**
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
 */function oy(r){return{type:"value",snapshotNode:r}}function vi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Us(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function js(r,e,t){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:t}}function Rk(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
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
 */class Sd{constructor(e){this.index_=e}updateChild(e,t,s,o,l,c){M(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(t);return f.getChild(o).equals(s.getChild(o))&&f.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(Us(t,f)):M(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?c.trackChildChange(vi(t,s)):c.trackChildChange(js(t,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(je,(o,l)=>{t.hasChild(o)||s.trackChildChange(Us(o,l))}),t.isLeafNode()||t.forEachChild(je,(o,l)=>{if(e.hasChild(o)){const c=e.getImmediateChild(o);c.equals(l)||s.trackChildChange(js(o,l,c))}else s.trackChildChange(vi(o,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class $s{constructor(e){this.indexedFilter_=new Sd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$s.getStartPost_(e),this.endPost_=$s.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,o,l,c){return this.matches(new ae(t,s))||(s=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,o,l,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Z.EMPTY_NODE);let o=t.withIndex(this.index_);o=o.updatePriority(Z.EMPTY_NODE);const l=this;return t.forEachChild(je,(c,f)=>{l.matches(new ae(c,f))||(o=o.updateImmediateChild(c,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Nk{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new $s(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,o,l,c){return this.rangedFilter_.matches(new ae(t,s))||(s=Z.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,o,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let o;if(t.isLeafNode()||t.isEmpty())o=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){o=Z.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const f=l.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))o=o.updateImmediateChild(f.name,f.node),c++;else break;else continue}}else{o=t.withIndex(this.index_),o=o.updatePriority(Z.EMPTY_NODE);let l;this.reverse_?l=o.getReverseIterator(this.index_):l=o.getIterator(this.index_);let c=0;for(;l.hasNext();){const f=l.getNext();c<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?c++:o=o.updateImmediateChild(f.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,o,l){let c;if(this.reverse_){const y=this.index_.getCompare();c=(v,R)=>y(R,v)}else c=this.index_.getCompare();const f=e;M(f.numChildren()===this.limit_,"");const h=new ae(t,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),_=this.rangedFilter_.matches(h);if(f.hasChild(t)){const y=f.getImmediateChild(t);let v=o.getChildAfterChild(this.index_,g,this.reverse_);for(;v!=null&&(v.name===t||f.hasChild(v.name));)v=o.getChildAfterChild(this.index_,v,this.reverse_);const R=v==null?1:c(v,h);if(_&&!s.isEmpty()&&R>=0)return l!=null&&l.trackChildChange(js(t,s,y)),f.updateImmediateChild(t,s);{l!=null&&l.trackChildChange(Us(t,y));const P=f.updateImmediateChild(t,Z.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(l!=null&&l.trackChildChange(vi(v.name,v.node)),P.updateImmediateChild(v.name,v.node)):P}}else return s.isEmpty()?e:_&&c(g,h)>=0?(l!=null&&(l.trackChildChange(Us(g.name,g.node)),l.trackChildChange(vi(t,s))),f.updateImmediateChild(t,s).updateImmediateChild(g.name,Z.EMPTY_NODE)):e}}/**
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
 */class Cd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=je}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return M(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:yi}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return M(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===je}copy(){const e=new Cd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Pk(r){return r.loadsAllData()?new Sd(r.getIndex()):r.hasLimit()?new Nk(r):new $s(r)}function tm(r){const e={};if(r.isDefault())return e;let t;if(r.index_===je?t="$priority":r.index_===kk?t="$value":r.index_===hi?t="$key":(M(r.index_ instanceof Ik,"Unrecognized index type!"),t=r.index_.toString()),e.orderBy=qe(t),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=qe(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+qe(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=qe(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+qe(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function nm(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let t=r.viewFrom_;t===""&&(r.isViewFromLeft()?t="l":t="r"),e.vf=t}return r.index_!==je&&(e.i=r.index_.toString()),e}/**
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
 */class $a extends q_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,o){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.log_=Js("p:rest:"),this.listens_={}}listen(e,t,s,o){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=$a.getListenId_(e,s),f={};this.listens_[c]=f;const h=tm(e._queryParams);this.restRequest_(l+".json",h,(g,_)=>{let y=_;if(g===404&&(y=null,g=null),g===null&&this.onDataUpdate_(l,y,!1,s),_i(this.listens_,c)===f){let v;g?g===401?v="permission_denied":v="rest_error:"+g:v="ok",o(v,null)}})}unlisten(e,t){const s=$a.getListenId_(e,t);delete this.listens_[s]}get(e){const t=tm(e._queryParams),s=e._path.toString(),o=new dd;return this.restRequest_(s+".json",t,(l,c)=>{let f=c;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(s,f,!1,null),o.resolve(f)):o.reject(new Error(f))}),o.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(t.auth=o.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ti(t);this.log_("Sending REST request for "+c);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+c+" received. status:",f.status,"response:",f.responseText);let h=null;if(f.status>=200&&f.status<300){try{h=bs(f.responseText)}catch{Nt("Failed to parse JSON response for "+c+": "+f.responseText)}s(null,h)}else f.status!==401&&f.status!==404&&Nt("Got unsuccessful REST response for "+c+" Status: "+f.status),s(f.status);s=null}},f.open("GET",c,!0),f.send()})}}/**
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
 */class xk{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function za(){return{value:null,children:new Map}}function ay(r,e,t){if(ue(e))r.value=t,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,t);else{const s=ce(e);r.children.has(s)||r.children.set(s,za());const o=r.children.get(s);e=Ne(e),ay(o,e,t)}}function Yc(r,e,t){r.value!==null?t(e,r.value):Ok(r,(s,o)=>{const l=new Te(e.toString()+"/"+s);Yc(o,l,t)})}function Ok(r,e){r.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class Ak{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&St(this.last_,(s,o)=>{t[s]=t[s]-o}),this.last_=e,t}}/**
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
 */const rm=10*1e3,Lk=30*1e3,Dk=5*60*1e3;class bk{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ak(e);const s=rm+(Lk-rm)*Math.random();Rs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;St(e,(o,l)=>{l>0&&Tn(this.statsToReport_,o)&&(t[o]=l,s=!0)}),s&&this.server_.reportStats(t),Rs(this.reportStats_.bind(this),Math.floor(Math.random()*2*Dk))}}/**
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
 */var Wt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Wt||(Wt={}));function ly(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Id(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Td(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
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
 */class Va{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Wt.ACK_USER_WRITE,this.source=ly()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Te(e));return new Va(_e(),t,this.revert)}}else return M(ce(this.path)===e,"operationForChild called for unrelated child."),new Va(Ne(this.path),this.affectedTree,this.revert)}}/**
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
 */class zs{constructor(e,t){this.source=e,this.path=t,this.type=Wt.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new zs(this.source,_e()):new zs(this.source,Ne(this.path))}}/**
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
 */class Pr{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Wt.OVERWRITE}operationForChild(e){return ue(this.path)?new Pr(this.source,_e(),this.snap.getImmediateChild(e)):new Pr(this.source,Ne(this.path),this.snap)}}/**
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
 */class Vs{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Wt.MERGE}operationForChild(e){if(ue(this.path)){const t=this.children.subtree(new Te(e));return t.isEmpty()?null:t.value?new Pr(this.source,_e(),t.value):new Vs(this.source,_e(),t)}else return M(ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vs(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class sr{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const t=ce(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Mk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Fk(r,e,t,s){const o=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&r.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(Rk(c.childName,c.snapshotNode))}),Es(r,o,"child_removed",e,s,t),Es(r,o,"child_added",e,s,t),Es(r,o,"child_moved",l,s,t),Es(r,o,"child_changed",e,s,t),Es(r,o,"value",e,s,t),o}function Es(r,e,t,s,o,l){const c=s.filter(f=>f.type===t);c.sort((f,h)=>jk(r,f,h)),c.forEach(f=>{const h=Uk(r,f,l);o.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(h,r.query_))})})}function Uk(r,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function jk(r,e,t){if(e.childName==null||t.childName==null)throw Ii("Should only compare child_ events.");const s=new ae(e.childName,e.snapshotNode),o=new ae(t.childName,t.snapshotNode);return r.index_.compare(s,o)}/**
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
 */function ll(r,e){return{eventCache:r,serverCache:e}}function Ns(r,e,t,s){return ll(new sr(e,t,s),r.serverCache)}function uy(r,e,t,s){return ll(r.eventCache,new sr(e,t,s))}function Ba(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function xr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
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
 */let Rc;const $k=()=>(Rc||(Rc=new Et(TT)),Rc);class Oe{static fromObject(e){let t=new Oe(null);return St(e,(s,o)=>{t=t.set(new Te(s),o)}),t}constructor(e,t=$k()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:_e(),value:this.value};if(ue(e))return null;{const s=ce(e),o=this.children.get(s);if(o!==null){const l=o.findRootMostMatchingPathAndValue(Ne(e),t);return l!=null?{path:Ye(new Te(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const t=ce(e),s=this.children.get(t);return s!==null?s.subtree(Ne(e)):new Oe(null)}}set(e,t){if(ue(e))return new Oe(t,this.children);{const s=ce(e),l=(this.children.get(s)||new Oe(null)).set(Ne(e),t),c=this.children.insert(s,l);return new Oe(this.value,c)}}remove(e){if(ue(e))return this.children.isEmpty()?new Oe(null):new Oe(null,this.children);{const t=ce(e),s=this.children.get(t);if(s){const o=s.remove(Ne(e));let l;return o.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,o),this.value===null&&l.isEmpty()?new Oe(null):new Oe(this.value,l)}else return this}}get(e){if(ue(e))return this.value;{const t=ce(e),s=this.children.get(t);return s?s.get(Ne(e)):null}}setTree(e,t){if(ue(e))return t;{const s=ce(e),l=(this.children.get(s)||new Oe(null)).setTree(Ne(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new Oe(this.value,c)}}fold(e){return this.fold_(_e(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((o,l)=>{s[o]=l.fold_(Ye(e,o),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,_e(),t)}findOnPath_(e,t,s){const o=this.value?s(t,this.value):!1;if(o)return o;if(ue(e))return null;{const l=ce(e),c=this.children.get(l);return c?c.findOnPath_(Ne(e),Ye(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,_e(),t)}foreachOnPath_(e,t,s){if(ue(e))return this;{this.value&&s(t,this.value);const o=ce(e),l=this.children.get(o);return l?l.foreachOnPath_(Ne(e),Ye(t,o),s):new Oe(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,t){this.children.inorderTraversal((s,o)=>{o.foreach_(Ye(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class Kt{constructor(e){this.writeTree_=e}static empty(){return new Kt(new Oe(null))}}function Ps(r,e,t){if(ue(e))return new Kt(new Oe(t));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const o=s.path;let l=s.value;const c=ht(o,e);return l=l.updateChild(c,t),new Kt(r.writeTree_.set(o,l))}else{const o=new Oe(t),l=r.writeTree_.setTree(e,o);return new Kt(l)}}}function im(r,e,t){let s=r;return St(t,(o,l)=>{s=Ps(s,Ye(e,o),l)}),s}function sm(r,e){if(ue(e))return Kt.empty();{const t=r.writeTree_.setTree(e,new Oe(null));return new Kt(t)}}function Qc(r,e){return Dr(r,e)!=null}function Dr(r,e){const t=r.writeTree_.findRootMostValueAndPath(e);return t!=null?r.writeTree_.get(t.path).getChild(ht(t.path,e)):null}function om(r){const e=[],t=r.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(je,(s,o)=>{e.push(new ae(s,o))}):r.writeTree_.children.inorderTraversal((s,o)=>{o.value!=null&&e.push(new ae(s,o.value))}),e}function er(r,e){if(ue(e))return r;{const t=Dr(r,e);return t!=null?new Kt(new Oe(t)):new Kt(r.writeTree_.subtree(e))}}function Jc(r){return r.writeTree_.isEmpty()}function wi(r,e){return cy(_e(),r.writeTree_,e)}function cy(r,e,t){if(e.value!=null)return t.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((o,l)=>{o===".priority"?(M(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=cy(Ye(r,o),l,t)}),!t.getChild(r).isEmpty()&&s!==null&&(t=t.updateChild(Ye(r,".priority"),s)),t}}/**
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
 */function ul(r,e){return py(e,r)}function zk(r,e,t,s,o){M(s>r.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),r.allWrites.push({path:e,snap:t,writeId:s,visible:o}),o&&(r.visibleWrites=Ps(r.visibleWrites,e,t)),r.lastWriteId=s}function Vk(r,e){for(let t=0;t<r.allWrites.length;t++){const s=r.allWrites[t];if(s.writeId===e)return s}return null}function Bk(r,e){const t=r.allWrites.findIndex(f=>f.writeId===e);M(t>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[t];r.allWrites.splice(t,1);let o=s.visible,l=!1,c=r.allWrites.length-1;for(;o&&c>=0;){const f=r.allWrites[c];f.visible&&(c>=t&&Wk(f,s.path)?o=!1:Bt(s.path,f.path)&&(l=!0)),c--}if(o){if(l)return Hk(r),!0;if(s.snap)r.visibleWrites=sm(r.visibleWrites,s.path);else{const f=s.children;St(f,h=>{r.visibleWrites=sm(r.visibleWrites,Ye(s.path,h))})}return!0}else return!1}function Wk(r,e){if(r.snap)return Bt(r.path,e);for(const t in r.children)if(r.children.hasOwnProperty(t)&&Bt(Ye(r.path,t),e))return!0;return!1}function Hk(r){r.visibleWrites=dy(r.allWrites,Kk,_e()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function Kk(r){return r.visible}function dy(r,e,t){let s=Kt.empty();for(let o=0;o<r.length;++o){const l=r[o];if(e(l)){const c=l.path;let f;if(l.snap)Bt(t,c)?(f=ht(t,c),s=Ps(s,f,l.snap)):Bt(c,t)&&(f=ht(c,t),s=Ps(s,_e(),l.snap.getChild(f)));else if(l.children){if(Bt(t,c))f=ht(t,c),s=im(s,f,l.children);else if(Bt(c,t))if(f=ht(c,t),ue(f))s=im(s,_e(),l.children);else{const h=_i(l.children,ce(f));if(h){const g=h.getChild(Ne(f));s=Ps(s,_e(),g)}}}else throw Ii("WriteRecord should have .snap or .children")}}return s}function fy(r,e,t,s,o){if(!s&&!o){const l=Dr(r.visibleWrites,e);if(l!=null)return l;{const c=er(r.visibleWrites,e);if(Jc(c))return t;if(t==null&&!Qc(c,_e()))return null;{const f=t||Z.EMPTY_NODE;return wi(c,f)}}}else{const l=er(r.visibleWrites,e);if(!o&&Jc(l))return t;if(!o&&t==null&&!Qc(l,_e()))return null;{const c=function(g){return(g.visible||o)&&(!s||!~s.indexOf(g.writeId))&&(Bt(g.path,e)||Bt(e,g.path))},f=dy(r.allWrites,c,e),h=t||Z.EMPTY_NODE;return wi(f,h)}}}function Gk(r,e,t){let s=Z.EMPTY_NODE;const o=Dr(r.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(je,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=er(r.visibleWrites,e);return t.forEachChild(je,(c,f)=>{const h=wi(er(l,new Te(c)),f);s=s.updateImmediateChild(c,h)}),om(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=er(r.visibleWrites,e);return om(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function qk(r,e,t,s,o){M(s||o,"Either existingEventSnap or existingServerSnap must exist");const l=Ye(e,t);if(Qc(r.visibleWrites,l))return null;{const c=er(r.visibleWrites,l);return Jc(c)?o.getChild(t):wi(c,o.getChild(t))}}function Yk(r,e,t,s){const o=Ye(e,t),l=Dr(r.visibleWrites,o);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=er(r.visibleWrites,o);return wi(c,s.getNode().getImmediateChild(t))}else return null}function Qk(r,e){return Dr(r.visibleWrites,e)}function Jk(r,e,t,s,o,l,c){let f;const h=er(r.visibleWrites,e),g=Dr(h,_e());if(g!=null)f=g;else if(t!=null)f=wi(h,t);else return[];if(f=f.withIndex(c),!f.isEmpty()&&!f.isLeafNode()){const _=[],y=c.getCompare(),v=l?f.getReverseIteratorFrom(s,c):f.getIteratorFrom(s,c);let R=v.getNext();for(;R&&_.length<o;)y(R,s)!==0&&_.push(R),R=v.getNext();return _}else return[]}function Xk(){return{visibleWrites:Kt.empty(),allWrites:[],lastWriteId:-1}}function Wa(r,e,t,s){return fy(r.writeTree,r.treePath,e,t,s)}function kd(r,e){return Gk(r.writeTree,r.treePath,e)}function am(r,e,t,s){return qk(r.writeTree,r.treePath,e,t,s)}function Ha(r,e){return Qk(r.writeTree,Ye(r.treePath,e))}function Zk(r,e,t,s,o,l){return Jk(r.writeTree,r.treePath,e,t,s,o,l)}function Rd(r,e,t){return Yk(r.writeTree,r.treePath,e,t)}function hy(r,e){return py(Ye(r.treePath,e),r.writeTree)}function py(r,e){return{treePath:r,writeTree:e}}/**
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
 */class e0{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;M(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),M(s!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(s);if(o){const l=o.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,js(s,e.snapshotNode,o.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,Us(s,o.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,vi(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,js(s,e.snapshotNode,o.oldSnap));else throw Ii("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class t0{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const gy=new t0;class Nd{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new sr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Rd(this.writes_,e,s)}}getChildAfterChild(e,t,s){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xr(this.viewCache_),l=Zk(this.writes_,o,t,1,s,e);return l.length===0?null:l[0]}}/**
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
 */function n0(r){return{filter:r}}function r0(r,e){M(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),M(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function i0(r,e,t,s,o){const l=new e0;let c,f;if(t.type===Wt.OVERWRITE){const g=t;g.source.fromUser?c=Xc(r,e,g.path,g.snap,s,o,l):(M(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!ue(g.path),c=Ka(r,e,g.path,g.snap,s,o,f,l))}else if(t.type===Wt.MERGE){const g=t;g.source.fromUser?c=o0(r,e,g.path,g.children,s,o,l):(M(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),c=Zc(r,e,g.path,g.children,s,o,f,l))}else if(t.type===Wt.ACK_USER_WRITE){const g=t;g.revert?c=u0(r,e,g.path,s,o,l):c=a0(r,e,g.path,g.affectedTree,s,o,l)}else if(t.type===Wt.LISTEN_COMPLETE)c=l0(r,e,t.path,s,l);else throw Ii("Unknown operation type: "+t.type);const h=l.getChanges();return s0(e,c,h),{viewCache:c,changes:h}}function s0(r,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const o=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=Ba(r);(t.length>0||!r.eventCache.isFullyInitialized()||o&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(oy(Ba(e)))}}function my(r,e,t,s,o,l){const c=e.eventCache;if(Ha(s,t)!=null)return e;{let f,h;if(ue(t))if(M(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=xr(e),_=g instanceof Z?g:Z.EMPTY_NODE,y=kd(s,_);f=r.filter.updateFullNode(e.eventCache.getNode(),y,l)}else{const g=Wa(s,xr(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=ce(t);if(g===".priority"){M(ir(t)===1,"Can't have a priority with additional path components");const _=c.getNode();h=e.serverCache.getNode();const y=am(s,t,_,h);y!=null?f=r.filter.updatePriority(_,y):f=c.getNode()}else{const _=Ne(t);let y;if(c.isCompleteForChild(g)){h=e.serverCache.getNode();const v=am(s,t,c.getNode(),h);v!=null?y=c.getNode().getImmediateChild(g).updateChild(_,v):y=c.getNode().getImmediateChild(g)}else y=Rd(s,g,e.serverCache);y!=null?f=r.filter.updateChild(c.getNode(),g,y,_,o,l):f=c.getNode()}}return Ns(e,f,c.isFullyInitialized()||ue(t),r.filter.filtersNodes())}}function Ka(r,e,t,s,o,l,c,f){const h=e.serverCache;let g;const _=c?r.filter:r.filter.getIndexedFilter();if(ue(t))g=_.updateFullNode(h.getNode(),s,null);else if(_.filtersNodes()&&!h.isFiltered()){const R=h.getNode().updateChild(t,s);g=_.updateFullNode(h.getNode(),R,null)}else{const R=ce(t);if(!h.isCompleteForPath(t)&&ir(t)>1)return e;const N=Ne(t),I=h.getNode().getImmediateChild(R).updateChild(N,s);R===".priority"?g=_.updatePriority(h.getNode(),I):g=_.updateChild(h.getNode(),R,I,N,gy,null)}const y=uy(e,g,h.isFullyInitialized()||ue(t),_.filtersNodes()),v=new Nd(o,y,l);return my(r,y,t,o,v,f)}function Xc(r,e,t,s,o,l,c){const f=e.eventCache;let h,g;const _=new Nd(o,e,l);if(ue(t))g=r.filter.updateFullNode(e.eventCache.getNode(),s,c),h=Ns(e,g,!0,r.filter.filtersNodes());else{const y=ce(t);if(y===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),h=Ns(e,g,f.isFullyInitialized(),f.isFiltered());else{const v=Ne(t),R=f.getNode().getImmediateChild(y);let N;if(ue(v))N=s;else{const P=_.getCompleteChild(y);P!=null?Q_(v)===".priority"&&P.getChild(X_(v)).isEmpty()?N=P:N=P.updateChild(v,s):N=Z.EMPTY_NODE}if(R.equals(N))h=e;else{const P=r.filter.updateChild(f.getNode(),y,N,v,_,c);h=Ns(e,P,f.isFullyInitialized(),r.filter.filtersNodes())}}}return h}function lm(r,e){return r.eventCache.isCompleteForChild(e)}function o0(r,e,t,s,o,l,c){let f=e;return s.foreach((h,g)=>{const _=Ye(t,h);lm(e,ce(_))&&(f=Xc(r,f,_,g,o,l,c))}),s.foreach((h,g)=>{const _=Ye(t,h);lm(e,ce(_))||(f=Xc(r,f,_,g,o,l,c))}),f}function um(r,e,t){return t.foreach((s,o)=>{e=e.updateChild(s,o)}),e}function Zc(r,e,t,s,o,l,c,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let h=e,g;ue(t)?g=s:g=new Oe(null).setTree(t,s);const _=e.serverCache.getNode();return g.children.inorderTraversal((y,v)=>{if(_.hasChild(y)){const R=e.serverCache.getNode().getImmediateChild(y),N=um(r,R,v);h=Ka(r,h,new Te(y),N,o,l,c,f)}}),g.children.inorderTraversal((y,v)=>{const R=!e.serverCache.isCompleteForChild(y)&&v.value===null;if(!_.hasChild(y)&&!R){const N=e.serverCache.getNode().getImmediateChild(y),P=um(r,N,v);h=Ka(r,h,new Te(y),P,o,l,c,f)}}),h}function a0(r,e,t,s,o,l,c){if(Ha(o,t)!=null)return e;const f=e.serverCache.isFiltered(),h=e.serverCache;if(s.value!=null){if(ue(t)&&h.isFullyInitialized()||h.isCompleteForPath(t))return Ka(r,e,t,h.getNode().getChild(t),o,l,f,c);if(ue(t)){let g=new Oe(null);return h.getNode().forEachChild(hi,(_,y)=>{g=g.set(new Te(_),y)}),Zc(r,e,t,g,o,l,f,c)}else return e}else{let g=new Oe(null);return s.foreach((_,y)=>{const v=Ye(t,_);h.isCompleteForPath(v)&&(g=g.set(_,h.getNode().getChild(v)))}),Zc(r,e,t,g,o,l,f,c)}}function l0(r,e,t,s,o){const l=e.serverCache,c=uy(e,l.getNode(),l.isFullyInitialized()||ue(t),l.isFiltered());return my(r,c,t,s,gy,o)}function u0(r,e,t,s,o,l){let c;if(Ha(s,t)!=null)return e;{const f=new Nd(s,e,o),h=e.eventCache.getNode();let g;if(ue(t)||ce(t)===".priority"){let _;if(e.serverCache.isFullyInitialized())_=Wa(s,xr(e));else{const y=e.serverCache.getNode();M(y instanceof Z,"serverChildren would be complete if leaf node"),_=kd(s,y)}_=_,g=r.filter.updateFullNode(h,_,l)}else{const _=ce(t);let y=Rd(s,_,e.serverCache);y==null&&e.serverCache.isCompleteForChild(_)&&(y=h.getImmediateChild(_)),y!=null?g=r.filter.updateChild(h,_,y,Ne(t),f,l):e.eventCache.getNode().hasChild(_)?g=r.filter.updateChild(h,_,Z.EMPTY_NODE,Ne(t),f,l):g=h,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Wa(s,xr(e)),c.isLeafNode()&&(g=r.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||Ha(s,_e())!=null,Ns(e,g,c,r.filter.filtersNodes())}}/**
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
 */class c0{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,o=new Sd(s.getIndex()),l=Pk(s);this.processor_=n0(l);const c=t.serverCache,f=t.eventCache,h=o.updateFullNode(Z.EMPTY_NODE,c.getNode(),null),g=l.updateFullNode(Z.EMPTY_NODE,f.getNode(),null),_=new sr(h,c.isFullyInitialized(),o.filtersNodes()),y=new sr(g,f.isFullyInitialized(),l.filtersNodes());this.viewCache_=ll(y,_),this.eventGenerator_=new Mk(this.query_)}get query(){return this.query_}}function d0(r){return r.viewCache_.serverCache.getNode()}function f0(r){return Ba(r.viewCache_)}function h0(r,e){const t=xr(r.viewCache_);return t&&(r.query._queryParams.loadsAllData()||!ue(e)&&!t.getImmediateChild(ce(e)).isEmpty())?t.getChild(e):null}function cm(r){return r.eventRegistrations_.length===0}function p0(r,e){r.eventRegistrations_.push(e)}function dm(r,e,t){const s=[];if(t){M(e==null,"A cancel should cancel all event registrations.");const o=r.query._path;r.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,o);c&&s.push(c)})}if(e){let o=[];for(let l=0;l<r.eventRegistrations_.length;++l){const c=r.eventRegistrations_[l];if(!c.matches(e))o.push(c);else if(e.hasAnyCallback()){o=o.concat(r.eventRegistrations_.slice(l+1));break}}r.eventRegistrations_=o}else r.eventRegistrations_=[];return s}function fm(r,e,t,s){e.type===Wt.MERGE&&e.source.queryId!==null&&(M(xr(r.viewCache_),"We should always have a full cache before handling merges"),M(Ba(r.viewCache_),"Missing event cache, even though we have a server cache"));const o=r.viewCache_,l=i0(r.processor_,o,e,t,s);return r0(r.processor_,l.viewCache),M(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=l.viewCache,_y(r,l.changes,l.viewCache.eventCache.getNode(),null)}function g0(r,e){const t=r.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(je,(l,c)=>{s.push(vi(l,c))}),t.isFullyInitialized()&&s.push(oy(t.getNode())),_y(r,s,t.getNode(),e)}function _y(r,e,t,s){const o=s?[s]:r.eventRegistrations_;return Fk(r.eventGenerator_,e,t,o)}/**
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
 */let Ga;class yy{constructor(){this.views=new Map}}function m0(r){M(!Ga,"__referenceConstructor has already been defined"),Ga=r}function _0(){return M(Ga,"Reference.ts has not been loaded"),Ga}function y0(r){return r.views.size===0}function Pd(r,e,t,s){const o=e.source.queryId;if(o!==null){const l=r.views.get(o);return M(l!=null,"SyncTree gave us an op for an invalid query."),fm(l,e,t,s)}else{let l=[];for(const c of r.views.values())l=l.concat(fm(c,e,t,s));return l}}function vy(r,e,t,s,o){const l=e._queryIdentifier,c=r.views.get(l);if(!c){let f=Wa(t,o?s:null),h=!1;f?h=!0:s instanceof Z?(f=kd(t,s),h=!1):(f=Z.EMPTY_NODE,h=!1);const g=ll(new sr(f,h,!1),new sr(s,o,!1));return new c0(e,g)}return c}function v0(r,e,t,s,o,l){const c=vy(r,e,s,o,l);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,c),p0(c,t),g0(c,t)}function w0(r,e,t,s){const o=e._queryIdentifier,l=[];let c=[];const f=or(r);if(o==="default")for(const[h,g]of r.views.entries())c=c.concat(dm(g,t,s)),cm(g)&&(r.views.delete(h),g.query._queryParams.loadsAllData()||l.push(g.query));else{const h=r.views.get(o);h&&(c=c.concat(dm(h,t,s)),cm(h)&&(r.views.delete(o),h.query._queryParams.loadsAllData()||l.push(h.query)))}return f&&!or(r)&&l.push(new(_0())(e._repo,e._path)),{removed:l,events:c}}function wy(r){const e=[];for(const t of r.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function tr(r,e){let t=null;for(const s of r.views.values())t=t||h0(s,e);return t}function Ey(r,e){if(e._queryParams.loadsAllData())return cl(r);{const s=e._queryIdentifier;return r.views.get(s)}}function Sy(r,e){return Ey(r,e)!=null}function or(r){return cl(r)!=null}function cl(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let qa;function E0(r){M(!qa,"__referenceConstructor has already been defined"),qa=r}function S0(){return M(qa,"Reference.ts has not been loaded"),qa}let C0=1;class hm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Oe(null),this.pendingWriteTree_=Xk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function I0(r,e,t,s,o){return zk(r.pendingWriteTree_,e,t,s,o),o?to(r,new Pr(ly(),e,t)):[]}function ci(r,e,t=!1){const s=Vk(r.pendingWriteTree_,e);if(Bk(r.pendingWriteTree_,e)){let l=new Oe(null);return s.snap!=null?l=l.set(_e(),!0):St(s.children,c=>{l=l.set(new Te(c),!0)}),to(r,new Va(s.path,l,t))}else return[]}function eo(r,e,t){return to(r,new Pr(Id(),e,t))}function T0(r,e,t){const s=Oe.fromObject(t);return to(r,new Vs(Id(),e,s))}function k0(r,e){return to(r,new zs(Id(),e))}function R0(r,e,t){const s=xd(r,t);if(s){const o=Od(s),l=o.path,c=o.queryId,f=ht(l,e),h=new zs(Td(c),f);return Ad(r,l,h)}else return[]}function Cy(r,e,t,s,o=!1){const l=e._path,c=r.syncPointTree_.get(l);let f=[];if(c&&(e._queryIdentifier==="default"||Sy(c,e))){const h=w0(c,e,t,s);y0(c)&&(r.syncPointTree_=r.syncPointTree_.remove(l));const g=h.removed;if(f=h.events,!o){const _=g.findIndex(v=>v._queryParams.loadsAllData())!==-1,y=r.syncPointTree_.findOnPath(l,(v,R)=>or(R));if(_&&!y){const v=r.syncPointTree_.subtree(l);if(!v.isEmpty()){const R=O0(v);for(let N=0;N<R.length;++N){const P=R[N],I=P.query,z=Ny(r,P);r.listenProvider_.startListening(xs(I),Bs(r,I),z.hashFn,z.onComplete)}}}!y&&g.length>0&&!s&&(_?r.listenProvider_.stopListening(xs(e),null):g.forEach(v=>{const R=r.queryToTagMap.get(dl(v));r.listenProvider_.stopListening(xs(v),R)}))}A0(r,g)}return f}function Iy(r,e,t,s){const o=xd(r,s);if(o!=null){const l=Od(o),c=l.path,f=l.queryId,h=ht(c,e),g=new Pr(Td(f),h,t);return Ad(r,c,g)}else return[]}function N0(r,e,t,s){const o=xd(r,s);if(o){const l=Od(o),c=l.path,f=l.queryId,h=ht(c,e),g=Oe.fromObject(t),_=new Vs(Td(f),h,g);return Ad(r,c,_)}else return[]}function P0(r,e,t,s=!1){const o=e._path;let l=null,c=!1;r.syncPointTree_.foreachOnPath(o,(v,R)=>{const N=ht(v,o);l=l||tr(R,N),c=c||or(R)});let f=r.syncPointTree_.get(o);f?(c=c||or(f),l=l||tr(f,_e())):(f=new yy,r.syncPointTree_=r.syncPointTree_.set(o,f));let h;l!=null?h=!0:(h=!1,l=Z.EMPTY_NODE,r.syncPointTree_.subtree(o).foreachChild((R,N)=>{const P=tr(N,_e());P&&(l=l.updateImmediateChild(R,P))}));const g=Sy(f,e);if(!g&&!e._queryParams.loadsAllData()){const v=dl(e);M(!r.queryToTagMap.has(v),"View does not exist, but we have a tag");const R=L0();r.queryToTagMap.set(v,R),r.tagToQueryMap.set(R,v)}const _=ul(r.pendingWriteTree_,o);let y=v0(f,e,t,_,l,h);if(!g&&!c&&!s){const v=Ey(f,e);y=y.concat(D0(r,e,v))}return y}function Ty(r,e,t){const o=r.pendingWriteTree_,l=r.syncPointTree_.findOnPath(e,(c,f)=>{const h=ht(c,e),g=tr(f,h);if(g)return g});return fy(o,e,l,t,!0)}function x0(r,e){const t=e._path;let s=null;r.syncPointTree_.foreachOnPath(t,(g,_)=>{const y=ht(g,t);s=s||tr(_,y)});let o=r.syncPointTree_.get(t);o?s=s||tr(o,_e()):(o=new yy,r.syncPointTree_=r.syncPointTree_.set(t,o));const l=s!=null,c=l?new sr(s,!0,!1):null,f=ul(r.pendingWriteTree_,e._path),h=vy(o,e,f,l?c.getNode():Z.EMPTY_NODE,l);return f0(h)}function to(r,e){return ky(e,r.syncPointTree_,null,ul(r.pendingWriteTree_,_e()))}function ky(r,e,t,s){if(ue(r.path))return Ry(r,e,t,s);{const o=e.get(_e());t==null&&o!=null&&(t=tr(o,_e()));let l=[];const c=ce(r.path),f=r.operationForChild(c),h=e.children.get(c);if(h&&f){const g=t?t.getImmediateChild(c):null,_=hy(s,c);l=l.concat(ky(f,h,g,_))}return o&&(l=l.concat(Pd(o,r,s,t))),l}}function Ry(r,e,t,s){const o=e.get(_e());t==null&&o!=null&&(t=tr(o,_e()));let l=[];return e.children.inorderTraversal((c,f)=>{const h=t?t.getImmediateChild(c):null,g=hy(s,c),_=r.operationForChild(c);_&&(l=l.concat(Ry(_,f,h,g)))}),o&&(l=l.concat(Pd(o,r,s,t))),l}function Ny(r,e){const t=e.query,s=Bs(r,t);return{hashFn:()=>(d0(e)||Z.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return s?R0(r,t._path,s):k0(r,t._path);{const l=NT(o,t);return Cy(r,t,null,l)}}}}function Bs(r,e){const t=dl(e);return r.queryToTagMap.get(t)}function dl(r){return r._path.toString()+"$"+r._queryIdentifier}function xd(r,e){return r.tagToQueryMap.get(e)}function Od(r){const e=r.indexOf("$");return M(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new Te(r.substr(0,e))}}function Ad(r,e,t){const s=r.syncPointTree_.get(e);M(s,"Missing sync point for query tag that we're tracking");const o=ul(r.pendingWriteTree_,e);return Pd(s,t,o,null)}function O0(r){return r.fold((e,t,s)=>{if(t&&or(t))return[cl(t)];{let o=[];return t&&(o=wy(t)),St(s,(l,c)=>{o=o.concat(c)}),o}})}function xs(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(S0())(r._repo,r._path):r}function A0(r,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const o=dl(s),l=r.queryToTagMap.get(o);r.queryToTagMap.delete(o),r.tagToQueryMap.delete(l)}}}function L0(){return C0++}function D0(r,e,t){const s=e._path,o=Bs(r,e),l=Ny(r,t),c=r.listenProvider_.startListening(xs(e),o,l.hashFn,l.onComplete),f=r.syncPointTree_.subtree(s);if(o)M(!or(f.value),"If we're adding a query, it shouldn't be shadowed");else{const h=f.fold((g,_,y)=>{if(!ue(g)&&_&&or(_))return[cl(_).query];{let v=[];return _&&(v=v.concat(wy(_).map(R=>R.query))),St(y,(R,N)=>{v=v.concat(N)}),v}});for(let g=0;g<h.length;++g){const _=h[g];r.listenProvider_.stopListening(xs(_),Bs(r,_))}}return c}/**
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
 */class Ld{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ld(t)}node(){return this.node_}}class Dd{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ye(this.path_,e);return new Dd(this.syncTree_,t)}node(){return Ty(this.syncTree_,this.path_)}}const b0=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},pm=function(r,e,t){if(!r||typeof r!="object")return r;if(M(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return M0(r[".sv"],e,t);if(typeof r[".sv"]=="object")return F0(r[".sv"],e);M(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},M0=function(r,e,t){switch(r){case"timestamp":return t.timestamp;default:M(!1,"Unexpected server value: "+r)}},F0=function(r,e,t){r.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&M(!1,"Unexpected increment value: "+s);const o=e.node();if(M(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return s;const c=o.getValue();return typeof c!="number"?s:c+s},U0=function(r,e,t,s){return bd(e,new Dd(t,r),s)},j0=function(r,e,t){return bd(r,new Ld(e),t)};function bd(r,e,t){const s=r.getPriority().val(),o=pm(s,e.getImmediateChild(".priority"),t);let l;if(r.isLeafNode()){const c=r,f=pm(c.getValue(),e,t);return f!==c.getValue()||o!==c.getPriority().val()?new Ze(f,rt(o)):r}else{const c=r;return l=c,o!==c.getPriority().val()&&(l=l.updatePriority(new Ze(o))),c.forEachChild(je,(f,h)=>{const g=bd(h,e.getImmediateChild(f),t);g!==h&&(l=l.updateImmediateChild(f,g))}),l}}/**
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
 */class Md{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Fd(r,e){let t=e instanceof Te?e:new Te(e),s=r,o=ce(t);for(;o!==null;){const l=_i(s.node.children,o)||{children:{},childCount:0};s=new Md(o,s,l),t=Ne(t),o=ce(t)}return s}function Ri(r){return r.node.value}function Py(r,e){r.node.value=e,ed(r)}function xy(r){return r.node.childCount>0}function $0(r){return Ri(r)===void 0&&!xy(r)}function fl(r,e){St(r.node.children,(t,s)=>{e(new Md(t,r,s))})}function Oy(r,e,t,s){t&&e(r),fl(r,o=>{Oy(o,e,!0)})}function z0(r,e,t){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function no(r){return new Te(r.parent===null?r.name:no(r.parent)+"/"+r.name)}function ed(r){r.parent!==null&&V0(r.parent,r.name,r)}function V0(r,e,t){const s=$0(t),o=Tn(r.node.children,e);s&&o?(delete r.node.children[e],r.node.childCount--,ed(r)):!s&&!o&&(r.node.children[e]=t.node,r.node.childCount++,ed(r))}/**
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
 */const B0=/[\[\].#$\/\u0000-\u001F\u007F]/,W0=/[\[\].#$\u0000-\u001F\u007F]/,Nc=10*1024*1024,Ay=function(r){return typeof r=="string"&&r.length!==0&&!B0.test(r)},Ly=function(r){return typeof r=="string"&&r.length!==0&&!W0.test(r)},H0=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Ly(r)},Dy=function(r,e,t){const s=t instanceof Te?new ak(t,r):t;if(e===void 0)throw new Error(r+"contains undefined "+Cr(s));if(typeof e=="function")throw new Error(r+"contains a function "+Cr(s)+" with contents = "+e.toString());if(P_(e))throw new Error(r+"contains "+e.toString()+" "+Cr(s));if(typeof e=="string"&&e.length>Nc/3&&sl(e)>Nc)throw new Error(r+"contains a string greater than "+Nc+" utf8 bytes "+Cr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,l=!1;if(St(e,(c,f)=>{if(c===".value")o=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!Ay(c)))throw new Error(r+" contains an invalid key ("+c+") "+Cr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);lk(s,c),Dy(r,f,s),uk(s)}),o&&l)throw new Error(r+' contains ".value" child '+Cr(s)+" in addition to actual children.")}},by=function(r,e,t,s){if(!Ly(t))throw new Error(w_(r,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},K0=function(r,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),by(r,e,t)},G0=function(r,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ay(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!H0(t))throw new Error(w_(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class q0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Y0(r,e){let t=null;for(let s=0;s<e.length;s++){const o=e[s],l=o.getPath();t!==null&&!Z_(l,t.path)&&(r.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(o)}t&&r.eventLists_.push(t)}function ar(r,e,t){Y0(r,t),Q0(r,s=>Bt(s,e)||Bt(e,s))}function Q0(r,e){r.recursionDepth_++;let t=!0;for(let s=0;s<r.eventLists_.length;s++){const o=r.eventLists_[s];if(o){const l=o.path;e(l)?(J0(r.eventLists_[s]),r.eventLists_[s]=null):t=!1}}t&&(r.eventLists_=[]),r.recursionDepth_--}function J0(r){for(let e=0;e<r.events.length;e++){const t=r.events[e];if(t!==null){r.events[e]=null;const s=t.getEventRunner();ks&&ct("event: "+t.toString()),Xs(s)}}}/**
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
 */const X0="repo_interrupt",Z0=25;class eR{constructor(e,t,s,o){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new q0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=za(),this.transactionQueueTree_=new Md,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function tR(r,e,t){if(r.stats_=yd(r.repoInfo_),r.forceRestClient_||AT())r.server_=new $a(r.repoInfo_,(s,o,l,c)=>{gm(r,s,o,l,c)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>mm(r,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{qe(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new wn(r.repoInfo_,e,(s,o,l,c)=>{gm(r,s,o,l,c)},s=>{mm(r,s)},s=>{rR(r,s)},r.authTokenProvider_,r.appCheckProvider_,t),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=FT(r.repoInfo_,()=>new bk(r.stats_,r.server_)),r.infoData_=new xk,r.infoSyncTree_=new hm({startListening:(s,o,l,c)=>{let f=[];const h=r.infoData_.getNode(s._path);return h.isEmpty()||(f=eo(r.infoSyncTree_,s._path,h),setTimeout(()=>{c("ok")},0)),f},stopListening:()=>{}}),Ud(r,"connected",!1),r.serverSyncTree_=new hm({startListening:(s,o,l,c)=>(r.server_.listen(s,l,o,(f,h)=>{const g=c(f,h);ar(r.eventQueue_,s._path,g)}),[]),stopListening:(s,o)=>{r.server_.unlisten(s,o)}})}function nR(r){const t=r.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function My(r){return b0({timestamp:nR(r)})}function gm(r,e,t,s,o){r.dataUpdateCount++;const l=new Te(e);t=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,t):t;let c=[];if(o)if(s){const h=Da(t,g=>rt(g));c=N0(r.serverSyncTree_,l,h,o)}else{const h=rt(t);c=Iy(r.serverSyncTree_,l,h,o)}else if(s){const h=Da(t,g=>rt(g));c=T0(r.serverSyncTree_,l,h)}else{const h=rt(t);c=eo(r.serverSyncTree_,l,h)}let f=l;c.length>0&&(f=zd(r,l)),ar(r.eventQueue_,f,c)}function mm(r,e){Ud(r,"connected",e),e===!1&&oR(r)}function rR(r,e){St(e,(t,s)=>{Ud(r,t,s)})}function Ud(r,e,t){const s=new Te("/.info/"+e),o=rt(t);r.infoData_.updateSnapshot(s,o);const l=eo(r.infoSyncTree_,s,o);ar(r.eventQueue_,s,l)}function iR(r){return r.nextWriteId_++}function sR(r,e,t){const s=x0(r.serverSyncTree_,e);return s!=null?Promise.resolve(s):r.server_.get(e).then(o=>{const l=rt(o).withIndex(e._queryParams.getIndex());P0(r.serverSyncTree_,e,t,!0);let c;if(e._queryParams.loadsAllData())c=eo(r.serverSyncTree_,e._path,l);else{const f=Bs(r.serverSyncTree_,e);c=Iy(r.serverSyncTree_,e._path,l,f)}return ar(r.eventQueue_,e._path,c),Cy(r.serverSyncTree_,e,t,null,!0),l},o=>(jd(r,"get for query "+qe(e)+" failed: "+o),Promise.reject(new Error(o))))}function oR(r){jd(r,"onDisconnectEvents");const e=My(r),t=za();Yc(r.onDisconnect_,_e(),(o,l)=>{const c=U0(o,l,r.serverSyncTree_,e);ay(t,o,c)});let s=[];Yc(t,_e(),(o,l)=>{s=s.concat(eo(r.serverSyncTree_,o,l));const c=cR(r,o);zd(r,c)}),r.onDisconnect_=za(),ar(r.eventQueue_,_e(),s)}function aR(r){r.persistentConnection_&&r.persistentConnection_.interrupt(X0)}function jd(r,...e){let t="";r.persistentConnection_&&(t=r.persistentConnection_.id+":"),ct(t,...e)}function Fy(r,e,t){return Ty(r.serverSyncTree_,e,t)||Z.EMPTY_NODE}function $d(r,e=r.transactionQueueTree_){if(e||hl(r,e),Ri(e)){const t=jy(r,e);M(t.length>0,"Sending zero length transaction queue"),t.every(o=>o.status===0)&&lR(r,no(e),t)}else xy(e)&&fl(e,t=>{$d(r,t)})}function lR(r,e,t){const s=t.map(g=>g.currentWriteId),o=Fy(r,e,s);let l=o;const c=o.hash();for(let g=0;g<t.length;g++){const _=t[g];M(_.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),_.status=1,_.retryCount++;const y=ht(e,_.path);l=l.updateChild(y,_.currentOutputSnapshotRaw)}const f=l.val(!0),h=e;r.server_.put(h.toString(),f,g=>{jd(r,"transaction put response",{path:h.toString(),status:g});let _=[];if(g==="ok"){const y=[];for(let v=0;v<t.length;v++)t[v].status=2,_=_.concat(ci(r.serverSyncTree_,t[v].currentWriteId)),t[v].onComplete&&y.push(()=>t[v].onComplete(null,!0,t[v].currentOutputSnapshotResolved)),t[v].unwatcher();hl(r,Fd(r.transactionQueueTree_,e)),$d(r,r.transactionQueueTree_),ar(r.eventQueue_,e,_);for(let v=0;v<y.length;v++)Xs(y[v])}else{if(g==="datastale")for(let y=0;y<t.length;y++)t[y].status===3?t[y].status=4:t[y].status=0;else{Nt("transaction at "+h.toString()+" failed: "+g);for(let y=0;y<t.length;y++)t[y].status=4,t[y].abortReason=g}zd(r,e)}},c)}function zd(r,e){const t=Uy(r,e),s=no(t),o=jy(r,t);return uR(r,o,s),s}function uR(r,e,t){if(e.length===0)return;const s=[];let o=[];const c=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const h=e[f],g=ht(t,h.path);let _=!1,y;if(M(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),h.status===4)_=!0,y=h.abortReason,o=o.concat(ci(r.serverSyncTree_,h.currentWriteId,!0));else if(h.status===0)if(h.retryCount>=Z0)_=!0,y="maxretry",o=o.concat(ci(r.serverSyncTree_,h.currentWriteId,!0));else{const v=Fy(r,h.path,c);h.currentInputSnapshot=v;const R=e[f].update(v.val());if(R!==void 0){Dy("transaction failed: Data returned ",R,h.path);let N=rt(R);typeof R=="object"&&R!=null&&Tn(R,".priority")||(N=N.updatePriority(v.getPriority()));const I=h.currentWriteId,z=My(r),B=j0(N,v,z);h.currentOutputSnapshotRaw=N,h.currentOutputSnapshotResolved=B,h.currentWriteId=iR(r),c.splice(c.indexOf(I),1),o=o.concat(I0(r.serverSyncTree_,h.path,B,h.currentWriteId,h.applyLocally)),o=o.concat(ci(r.serverSyncTree_,I,!0))}else _=!0,y="nodata",o=o.concat(ci(r.serverSyncTree_,h.currentWriteId,!0))}ar(r.eventQueue_,t,o),o=[],_&&(e[f].status=2,function(v){setTimeout(v,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(y==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(y),!1,null))))}hl(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)Xs(s[f]);$d(r,r.transactionQueueTree_)}function Uy(r,e){let t,s=r.transactionQueueTree_;for(t=ce(e);t!==null&&Ri(s)===void 0;)s=Fd(s,t),e=Ne(e),t=ce(e);return s}function jy(r,e){const t=[];return $y(r,e,t),t.sort((s,o)=>s.order-o.order),t}function $y(r,e,t){const s=Ri(e);if(s)for(let o=0;o<s.length;o++)t.push(s[o]);fl(e,o=>{$y(r,o,t)})}function hl(r,e){const t=Ri(e);if(t){let s=0;for(let o=0;o<t.length;o++)t[o].status!==2&&(t[s]=t[o],s++);t.length=s,Py(e,t.length>0?t:void 0)}fl(e,s=>{hl(r,s)})}function cR(r,e){const t=no(Uy(r,e)),s=Fd(r.transactionQueueTree_,e);return z0(s,o=>{Pc(r,o)}),Pc(r,s),Oy(s,o=>{Pc(r,o)}),t}function Pc(r,e){const t=Ri(e);if(t){const s=[];let o=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(M(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(M(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),o=o.concat(ci(r.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?Py(e,void 0):t.length=l+1,ar(r.eventQueue_,no(e),o);for(let c=0;c<s.length;c++)Xs(s[c])}}/**
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
 */function dR(r){let e="";const t=r.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let o=t[s];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function fR(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const t of r.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Nt(`Invalid query segment '${t}' in query '${r}'`)}return e}const _m=function(r,e){const t=hR(r),s=t.namespace;t.domain==="firebase.com"&&Sn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Sn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||CT();const o=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new z_(t.host,t.secure,s,o,e,"",s!==t.subdomain),path:new Te(t.pathString)}},hR=function(r){let e="",t="",s="",o="",l="",c=!0,f="https",h=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let _=r.indexOf("/");_===-1&&(_=r.length);let y=r.indexOf("?");y===-1&&(y=r.length),e=r.substring(0,Math.min(_,y)),_<y&&(o=dR(r.substring(_,y)));const v=fR(r.substring(Math.min(r.length,y)));g=e.indexOf(":"),g>=0?(c=f==="https"||f==="wss",h=parseInt(e.substring(g+1),10)):g=e.length;const R=e.slice(0,g);if(R.toLowerCase()==="localhost")t="localhost";else if(R.split(".").length<=2)t=R;else{const N=e.indexOf(".");s=e.substring(0,N).toLowerCase(),t=e.substring(N+1),l=s}"ns"in v&&(l=v.ns)}return{host:e,port:h,domain:t,subdomain:s,secure:c,scheme:f,pathString:o,namespace:l}};/**
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
 */class pR{constructor(e,t,s,o){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+qe(this.snapshot.exportVal())}}class gR{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class mR{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return M(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Vd{constructor(e,t,s,o){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=o}get key(){return ue(this._path)?null:Q_(this._path)}get ref(){return new kn(this._repo,this._path)}get _queryIdentifier(){const e=nm(this._queryParams),t=md(e);return t==="{}"?"default":t}get _queryObject(){return nm(this._queryParams)}isEqual(e){if(e=Pt(e),!(e instanceof Vd))return!1;const t=this._repo===e._repo,s=Z_(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return t&&s&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+ok(this._path)}}class kn extends Vd{constructor(e,t){super(e,t,new Cd,!1)}get parent(){const e=X_(this._path);return e===null?null:new kn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ws{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Te(e),s=td(this.ref,e);return new Ws(this._node.getChild(t),s,je)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,o)=>e(new Ws(o,td(this.ref,s),je)))}hasChild(e){const t=new Te(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function _R(r,e){return r=Pt(r),r._checkNotDeleted("ref"),td(r._root,e)}function td(r,e){return r=Pt(r),ce(r._path)===null?K0("child","path",e):by("child","path",e),new kn(r._repo,Ye(r._path,e))}function yR(r){r=Pt(r);const e=new mR(()=>{}),t=new Bd(e);return sR(r._repo,r,t).then(s=>new Ws(s,new kn(r._repo,r._path),r._queryParams.getIndex()))}class Bd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new pR("value",this,new Ws(e.snapshotNode,new kn(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new gR(this,e,t):null}matches(e){return e instanceof Bd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}m0(kn);E0(kn);/**
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
 */const vR="FIREBASE_DATABASE_EMULATOR_HOST",nd={};let wR=!1;function ER(r,e,t,s){r.repoInfo_=new z_(`${e}:${t}`,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0),s&&(r.authTokenProvider_=s)}function SR(r,e,t,s,o){let l=s||r.options.databaseURL;l===void 0&&(r.options.projectId||Sn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ct("Using default host for project ",r.options.projectId),l=`${r.options.projectId}-default-rtdb.firebaseio.com`);let c=_m(l,o),f=c.repoInfo,h;typeof process<"u"&&Ug&&(h=Ug[vR]),h?(l=`http://${h}?ns=${f.namespace}`,c=_m(l,o),f=c.repoInfo):c.repoInfo.secure;const g=new DT(r.name,r.options,e);G0("Invalid Firebase Database URL",c),ue(c.path)||Sn("Database URL must point to the root of a Firebase Database (not including a child path).");const _=IR(f,r,g,new LT(r.name,t));return new TR(_,r)}function CR(r,e){const t=nd[e];(!t||t[r.key]!==r)&&Sn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),aR(r),delete t[r.key]}function IR(r,e,t,s){let o=nd[e.name];o||(o={},nd[e.name]=o);let l=o[r.toURLString()];return l&&Sn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new eR(r,wR,t,s),o[r.toURLString()]=l,l}class TR{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(tR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new kn(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(CR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Sn("Cannot call "+e+" on a deleted database.")}}function kR(r=gd(),e){const t=ol(r,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=p_("database");s&&RR(t,...s)}return t}function RR(r,e,t,s={}){r=Pt(r),r._checkNotDeleted("useEmulator"),r._instanceStarted&&Sn("Cannot call useEmulator() after instance has already been initialized.");const o=r._repoInternal;let l;if(o.repoInfo_.nodeAdmin)s.mockUserToken&&Sn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),l=new Ca(Ca.OWNER);else if(s.mockUserToken){const c=typeof s.mockUserToken=="string"?s.mockUserToken:__(s.mockUserToken,r.app.options.projectId);l=new Ca(c)}ER(o,e,t,l)}/**
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
 */function NR(r){_T(Lr),Rr(new rr("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return SR(s,o,l,t)},"PUBLIC").setMultipleInstances(!0)),tn(jg,$g,r),tn(jg,$g,"esm2017")}wn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};wn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};NR();var PR="firebase",xR="11.2.0";/**
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
 */tn(PR,xR,"app");function Wd(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function zy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OR=zy,Vy=new Ys("auth","Firebase",zy());/**
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
 */const Ya=new hd("@firebase/auth");function AR(r,...e){Ya.logLevel<=Ce.WARN&&Ya.warn(`Auth (${Lr}): ${r}`,...e)}function Ia(r,...e){Ya.logLevel<=Ce.ERROR&&Ya.error(`Auth (${Lr}): ${r}`,...e)}/**
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
 */function Gt(r,...e){throw Hd(r,...e)}function nn(r,...e){return Hd(r,...e)}function By(r,e,t){const s=Object.assign(Object.assign({},OR()),{[e]:t});return new Ys("auth","Firebase",s).create(e,{appName:r.name})}function nr(r){return By(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return Vy.create(r,...e)}function ee(r,e,...t){if(!r)throw Hd(e,...t)}function _n(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ia(e),new Error(e)}function Cn(r,e){r||_n(e)}/**
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
 */function rd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function LR(){return ym()==="http:"||ym()==="https:"}function ym(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function DR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LR()||YC()||"connection"in navigator)?navigator.onLine:!0}function bR(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class ro{constructor(e,t){this.shortDelay=e,this.longDelay=t,Cn(t>e,"Short delay should be less than long delay!"),this.isMobile=fd()||y_()}get(){return DR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Kd(r,e){Cn(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Wy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const MR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const FR=new ro(3e4,6e4);function br(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function lr(r,e,t,s,o={}){return Hy(r,o,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const f=Ti(Object.assign({key:r.config.apiKey},c)).slice(1),h=await r._getAdditionalHeaders();h["Content-Type"]="application/json",r.languageCode&&(h["X-Firebase-Locale"]=r.languageCode);const g=Object.assign({method:e,headers:h},l);return qC()||(g.referrerPolicy="no-referrer"),Wy.fetch()(Ky(r,r.config.apiHost,t,f),g)})}async function Hy(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},MR),e);try{const o=new jR(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Ea(r,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[h,g]=f.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ea(r,"credential-already-in-use",c);if(h==="EMAIL_EXISTS")throw Ea(r,"email-already-in-use",c);if(h==="USER_DISABLED")throw Ea(r,"user-disabled",c);const _=s[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw By(r,_,g);Gt(r,_)}}catch(o){if(o instanceof In)throw o;Gt(r,"network-request-failed",{message:String(o)})}}async function pl(r,e,t,s,o={}){const l=await lr(r,e,t,s,o);return"mfaPendingCredential"in l&&Gt(r,"multi-factor-auth-required",{_serverResponse:l}),l}function Ky(r,e,t,s){const o=`${e}${t}?${s}`;return r.config.emulator?Kd(r.config,o):`${r.config.apiScheme}://${o}`}function UR(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(nn(this.auth,"network-request-failed")),FR.get())})}}function Ea(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=nn(r,e,s);return o.customData._tokenResponse=t,o}function vm(r){return r!==void 0&&r.enterprise!==void 0}class $R{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return UR(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function zR(r,e){return lr(r,"GET","/v2/recaptchaConfig",br(r,e))}/**
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
 */async function VR(r,e){return lr(r,"POST","/v1/accounts:delete",e)}async function Gy(r,e){return lr(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Os(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BR(r,e=!1){const t=Pt(r),s=await t.getIdToken(e),o=Gd(s);ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Os(xc(o.auth_time)),issuedAtTime:Os(xc(o.iat)),expirationTime:Os(xc(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function xc(r){return Number(r)*1e3}function Gd(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Ia("JWT malformed, contained fewer than 3 sections"),null;try{const o=La(t);return o?JSON.parse(o):(Ia("Failed to decode base64 JWT payload"),null)}catch(o){return Ia("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function wm(r){const e=Gd(r);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hs(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof In&&WR(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function WR({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class HR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class id{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Os(this.lastLoginAt),this.creationTime=Os(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qa(r){var e;const t=r.auth,s=await r.getIdToken(),o=await Hs(r,Gy(t,{idToken:s}));ee(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?qy(l.providerUserInfo):[],f=GR(r.providerData,c),h=r.isAnonymous,g=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),_=h?g:!1,y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new id(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(r,y)}async function KR(r){const e=Pt(r);await Qa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GR(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function qy(r){return r.map(e=>{var{providerId:t}=e,s=Wd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function qR(r,e){const t=await Hy(r,{},async()=>{const s=Ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,c=Ky(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",Wy.fetch()(c,{method:"POST",headers:f,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function YR(r,e){return lr(r,"POST","/v2/accounts:revokeToken",br(r,e))}/**
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
 */class pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const t=wm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await qR(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,c=new pi;return s&&(ee(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),o&&(ee(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(ee(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pi,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
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
 */function Kn(r,e){ee(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class yn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=Wd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new id(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Hs(this,this.stsTokenManager.getToken(this.auth,e));return ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return BR(this,e)}reload(){return KR(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Qa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(nr(this.auth));const e=await this.getIdToken();return await Hs(this,VR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,c,f,h,g,_;const y=(s=t.displayName)!==null&&s!==void 0?s:void 0,v=(o=t.email)!==null&&o!==void 0?o:void 0,R=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,N=(c=t.photoURL)!==null&&c!==void 0?c:void 0,P=(f=t.tenantId)!==null&&f!==void 0?f:void 0,I=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,z=(g=t.createdAt)!==null&&g!==void 0?g:void 0,B=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:W,emailVerified:Q,isAnonymous:fe,providerData:he,stsTokenManager:se}=t;ee(W&&se,e,"internal-error");const ne=pi.fromJSON(this.name,se);ee(typeof W=="string",e,"internal-error"),Kn(y,e.name),Kn(v,e.name),ee(typeof Q=="boolean",e,"internal-error"),ee(typeof fe=="boolean",e,"internal-error"),Kn(R,e.name),Kn(N,e.name),Kn(P,e.name),Kn(I,e.name),Kn(z,e.name),Kn(B,e.name);const ve=new yn({uid:W,auth:e,email:v,emailVerified:Q,displayName:y,isAnonymous:fe,photoURL:N,phoneNumber:R,tenantId:P,stsTokenManager:ne,createdAt:z,lastLoginAt:B});return he&&Array.isArray(he)&&(ve.providerData=he.map(Se=>Object.assign({},Se))),I&&(ve._redirectEventId=I),ve}static async _fromIdTokenResponse(e,t,s=!1){const o=new pi;o.updateFromServerResponse(t);const l=new yn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Qa(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ee(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?qy(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new pi;f.updateFromIdToken(s);const h=new yn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new id(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(h,g),h}}/**
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
 */const Em=new Map;function vn(r){Cn(r instanceof Function,"Expected a class definition");let e=Em.get(r);return e?(Cn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Em.set(r,e),e)}/**
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
 */class Yy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Yy.type="NONE";const Sm=Yy;/**
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
 */function Ta(r,e,t){return`firebase:${r}:${e}:${t}`}class gi{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Ta(this.userKey,o.apiKey,l),this.fullPersistenceKey=Ta("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new gi(vn(Sm),e,s);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=o[0]||vn(Sm);const c=Ta(s,e.config.apiKey,e.name);let f=null;for(const g of t)try{const _=await g._get(c);if(_){const y=yn._fromJSON(e,_);g!==l&&(f=y),l=g;break}}catch{}const h=o.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!h.length?new gi(l,e,s):(l=h[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new gi(l,e,s))}}/**
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
 */function Cm(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tv(e))return"Blackberry";if(nv(e))return"Webos";if(Jy(e))return"Safari";if((e.includes("chrome/")||Xy(e))&&!e.includes("edge/"))return"Chrome";if(ev(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Qy(r=pt()){return/firefox\//i.test(r)}function Jy(r=pt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xy(r=pt()){return/crios\//i.test(r)}function Zy(r=pt()){return/iemobile/i.test(r)}function ev(r=pt()){return/android/i.test(r)}function tv(r=pt()){return/blackberry/i.test(r)}function nv(r=pt()){return/webos/i.test(r)}function qd(r=pt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function QR(r=pt()){var e;return qd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JR(){return QC()&&document.documentMode===10}function rv(r=pt()){return qd(r)||ev(r)||nv(r)||tv(r)||/windows phone/i.test(r)||Zy(r)}/**
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
 */function iv(r,e=[]){let t;switch(r){case"Browser":t=Cm(pt());break;case"Worker":t=`${Cm(pt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Lr}/${s}`}/**
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
 */class XR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,f)=>{try{const h=e(l);c(h)}catch(h){f(h)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function ZR(r,e={}){return lr(r,"GET","/v2/passwordPolicy",br(r,e))}/**
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
 */const eN=6;class tN{constructor(e){var t,s,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:eN,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,c,f;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(s=h.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(o=h.containsLowercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(l=h.containsUppercaseLetter)!==null&&l!==void 0?l:!0),h.isValid&&(h.isValid=(c=h.containsNumericCharacter)!==null&&c!==void 0?c:!0),h.isValid&&(h.isValid=(f=h.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),h}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class nN{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Im(this),this.idTokenSubscription=new Im(this),this.beforeStateQueue=new XR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vn(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await gi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Gy(this,{idToken:e}),s=await yn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(gn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,h=await this.tryRedirectSignIn(e);(!c||c===f)&&(h!=null&&h.user)&&(o=h.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qa(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(nr(this));const t=e?Pt(e):null;return t&&ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ZR(this),t=new tN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ys("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await YR(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vn(e)||this._popupRedirectResolver;ee(t,this,"argument-error"),this.redirectPersistenceManager=await gi.create(this,[vn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,s,o);return()=>{c=!0,h()}}else{const h=e.addObserver(t);return()=>{c=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&AR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ni(r){return Pt(r)}class Im{constructor(e){this.auth=e,this.observer=null,this.addObserver=oI(t=>this.observer=t)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let gl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rN(r){gl=r}function sv(r){return gl.loadJS(r)}function iN(){return gl.recaptchaEnterpriseScript}function sN(){return gl.gapiScript}function oN(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class aN{constructor(){this.enterprise=new lN}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class lN{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const uN="recaptcha-enterprise",ov="NO_RECAPTCHA";class cN{constructor(e){this.type=uN,this.auth=Ni(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{zR(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new $R(h);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(h=>{f(h)})})}function o(l,c,f){const h=window.grecaptcha;vm(h)?h.enterprise.ready(()=>{h.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(ov)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new aN().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(f=>{if(!t&&vm(window.grecaptcha))o(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let h=iN();h.length!==0&&(h+=f),sv(h).then(()=>{o(f,l,c)}).catch(g=>{c(g)})}}).catch(f=>{c(f)})})}}async function Tm(r,e,t,s=!1,o=!1){const l=new cN(r);let c;if(o)c=ov;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const h=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const h=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function km(r,e,t,s,o){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Tm(r,e,t,t==="getOobCode");return s(r,c)}else return s(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Tm(r,e,t,t==="getOobCode");return s(r,f)}else return Promise.reject(c)})}/**
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
 */function dN(r,e){const t=ol(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ba(l,e??{}))return o;Gt(o,"already-initialized")}return t.initialize({options:e})}function fN(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(vn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function hN(r,e,t){const s=Ni(r);ee(s._canInitEmulator,s,"emulator-config-failed"),ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=av(e),{host:c,port:f}=pN(e),h=f===null?"":`:${f}`;s.config.emulator={url:`${l}//${c}${h}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),gN()}function av(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function pN(r){const e=av(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Rm(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:Rm(c)}}}function Rm(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function gN(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Yd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,t){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}async function mN(r,e){return lr(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function _N(r,e){return pl(r,"POST","/v1/accounts:signInWithPassword",br(r,e))}/**
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
 */async function yN(r,e){return pl(r,"POST","/v1/accounts:signInWithEmailLink",br(r,e))}async function vN(r,e){return pl(r,"POST","/v1/accounts:signInWithEmailLink",br(r,e))}/**
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
 */class Ks extends Yd{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ks(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ks(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return km(e,t,"signInWithPassword",_N);case"emailLink":return yN(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return km(e,s,"signUpPassword",mN);case"emailLink":return vN(e,{idToken:t,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function mi(r,e){return pl(r,"POST","/v1/accounts:signInWithIdp",br(r,e))}/**
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
 */const wN="http://localhost";class Or extends Yd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Gt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=Wd(t,["providerId","signInMethod"]);if(!s||!o)return null;const c=new Or(s,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return mi(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,mi(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mi(e,t)}buildRequest(){const e={requestUri:wN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ti(t)}return e}}/**
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
 */function EN(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function SN(r){const e=Cs(Is(r)).link,t=e?Cs(Is(e)).deep_link_id:null,s=Cs(Is(r)).deep_link_id;return(s?Cs(Is(s)).link:null)||s||t||e||r}class Qd{constructor(e){var t,s,o,l,c,f;const h=Cs(Is(e)),g=(t=h.apiKey)!==null&&t!==void 0?t:null,_=(s=h.oobCode)!==null&&s!==void 0?s:null,y=EN((o=h.mode)!==null&&o!==void 0?o:null);ee(g&&_&&y,"argument-error"),this.apiKey=g,this.operation=y,this.code=_,this.continueUrl=(l=h.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=h.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(f=h.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=SN(e);try{return new Qd(t)}catch{return null}}}/**
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
 */class Pi{constructor(){this.providerId=Pi.PROVIDER_ID}static credential(e,t){return Ks._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Qd.parseLink(t);return ee(s,"argument-error"),Ks._fromEmailAndCode(e,s.code,s.tenantId)}}Pi.PROVIDER_ID="password";Pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class lv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class io extends lv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gn extends io{constructor(){super("facebook.com")}static credential(e){return Or._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
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
 */class qn extends io{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Or._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return qn.credential(t,s)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
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
 */class Yn extends io{constructor(){super("github.com")}static credential(e){return Or._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
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
 */class Qn extends io{constructor(){super("twitter.com")}static credential(e,t){return Or._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Qn.credential(t,s)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
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
 */class Ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await yn._fromIdTokenResponse(e,s,o),c=Nm(s);return new Ei({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Nm(s);return new Ei({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Nm(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Ja extends In{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ja.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Ja(e,t,s,o)}}function uv(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Ja._fromErrorAndOperation(r,l,e,s):l})}async function CN(r,e,t=!1){const s=await Hs(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ei._forOperation(r,"link",s)}/**
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
 */async function IN(r,e,t=!1){const{auth:s}=r;if(gn(s.app))return Promise.reject(nr(s));const o="reauthenticate";try{const l=await Hs(r,uv(s,o,e,r),t);ee(l.idToken,s,"internal-error");const c=Gd(l.idToken);ee(c,s,"internal-error");const{sub:f}=c;return ee(r.uid===f,s,"user-mismatch"),Ei._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Gt(s,"user-mismatch"),l}}/**
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
 */async function cv(r,e,t=!1){if(gn(r.app))return Promise.reject(nr(r));const s="signIn",o=await uv(r,s,e),l=await Ei._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function TN(r,e){return cv(Ni(r),e)}/**
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
 */async function kN(r){const e=Ni(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function RN(r,e,t){return gn(r.app)?Promise.reject(nr(r)):TN(Pt(r),Pi.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&kN(r),s})}function NN(r,e,t,s){return Pt(r).onIdTokenChanged(e,t,s)}function PN(r,e,t){return Pt(r).beforeAuthStateChanged(e,t)}const Xa="__sak";/**
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
 */class dv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xa,"1"),this.storage.removeItem(Xa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const xN=1e3,ON=10;class fv extends dv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,h)=>{this.notifyListeners(c,h)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);JR()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,ON):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},xN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fv.type="LOCAL";const AN=fv;/**
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
 */class hv extends dv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hv.type="SESSION";const pv=hv;/**
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
 */function LN(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ml{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new ml(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(c).map(async g=>g(t.origin,l)),h=await LN(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ml.receivers=[];/**
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
 */function Jd(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class DN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((f,h)=>{const g=Jd("",20);o.port1.start();const _=setTimeout(()=>{h(new Error("unsupported_event"))},s);c={messageChannel:o,onMessage(y){const v=y;if(v.data.eventId===g)switch(v.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(v.data.response);break;default:clearTimeout(_),clearTimeout(l),h(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function rn(){return window}function bN(r){rn().location.href=r}/**
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
 */function gv(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function MN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FN(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function UN(){return gv()?self:null}/**
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
 */const mv="firebaseLocalStorageDb",jN=1,Za="firebaseLocalStorage",_v="fbase_key";class so{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function _l(r,e){return r.transaction([Za],e?"readwrite":"readonly").objectStore(Za)}function $N(){const r=indexedDB.deleteDatabase(mv);return new so(r).toPromise()}function sd(){const r=indexedDB.open(mv,jN);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Za,{keyPath:_v})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Za)?e(s):(s.close(),await $N(),e(await sd()))})})}async function Pm(r,e,t){const s=_l(r,!0).put({[_v]:e,value:t});return new so(s).toPromise()}async function zN(r,e){const t=_l(r,!1).get(e),s=await new so(t).toPromise();return s===void 0?null:s.value}function xm(r,e){const t=_l(r,!0).delete(e);return new so(t).toPromise()}const VN=800,BN=3;class yv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>BN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ml._getInstance(UN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await MN(),!this.activeServiceWorker)return;this.sender=new DN(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sd();return await Pm(e,Xa,"1"),await xm(e,Xa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Pm(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>zN(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>xm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=_l(o,!1).getAll();return new so(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yv.type="LOCAL";const WN=yv;new ro(3e4,6e4);/**
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
 */function HN(r,e){return e?vn(e):(ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Xd extends Yd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function KN(r){return cv(r.auth,new Xd(r),r.bypassAuthState)}function GN(r){const{auth:e,user:t}=r;return ee(t,e,"internal-error"),IN(t,new Xd(r),r.bypassAuthState)}async function qN(r){const{auth:e,user:t}=r;return ee(t,e,"internal-error"),CN(t,new Xd(r),r.bypassAuthState)}/**
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
 */class vv{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const h={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(h))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KN;case"linkViaPopup":case"linkViaRedirect":return qN;case"reauthViaPopup":case"reauthViaRedirect":return GN;default:Gt(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const YN=new ro(2e3,1e4);class di extends vv{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,di.currentPopupAction&&di.currentPopupAction.cancel(),di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YN.get())};e()}}di.currentPopupAction=null;/**
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
 */const QN="pendingRedirect",ka=new Map;class JN extends vv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ka.get(this.auth._key());if(!e){try{const s=await XN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ka.set(this.auth._key(),e)}return this.bypassAuthState||ka.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XN(r,e){const t=t1(e),s=e1(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function ZN(r,e){ka.set(r._key(),e)}function e1(r){return vn(r._redirectPersistence)}function t1(r){return Ta(QN,r.config.apiKey,r.name)}async function n1(r,e,t=!1){if(gn(r.app))return Promise.reject(nr(r));const s=Ni(r),o=HN(s,e),c=await new JN(s,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const r1=10*60*1e3;class i1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!s1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!wv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(nn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=r1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Om(e))}saveEventToCache(e){this.cachedEventUids.add(Om(e)),this.lastProcessedEventTime=Date.now()}}function Om(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function wv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function s1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wv(r);default:return!1}}/**
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
 */async function o1(r,e={}){return lr(r,"GET","/v1/projects",e)}/**
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
 */const a1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,l1=/^https?/;async function u1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await o1(r);for(const t of e)try{if(c1(t))return}catch{}Gt(r,"unauthorized-domain")}function c1(r){const e=rd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!l1.test(t))return!1;if(a1.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const d1=new ro(3e4,6e4);function Am(){const r=rn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function f1(r){return new Promise((e,t)=>{var s,o,l;function c(){Am(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Am(),t(nn(r,"network-request-failed"))},timeout:d1.get()})}if(!((o=(s=rn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=rn().gapi)===null||l===void 0)&&l.load)c();else{const f=oN("iframefcb");return rn()[f]=()=>{gapi.load?c():t(nn(r,"network-request-failed"))},sv(`${sN()}?onload=${f}`).catch(h=>t(h))}}).catch(e=>{throw Ra=null,e})}let Ra=null;function h1(r){return Ra=Ra||f1(r),Ra}/**
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
 */const p1=new ro(5e3,15e3),g1="__/auth/iframe",m1="emulator/auth/iframe",_1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},y1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function v1(r){const e=r.config;ee(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Kd(e,m1):`https://${r.config.authDomain}/${g1}`,s={apiKey:e.apiKey,appName:r.name,v:Lr},o=y1.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Ti(s).slice(1)}`}async function w1(r){const e=await h1(r),t=rn().gapi;return ee(t,r,"internal-error"),e.open({where:document.body,url:v1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_1,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const c=nn(r,"network-request-failed"),f=rn().setTimeout(()=>{l(c)},p1.get());function h(){rn().clearTimeout(f),o(s)}s.ping(h).then(h,()=>{l(c)})}))}/**
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
 */const E1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},S1=500,C1=600,I1="_blank",T1="http://localhost";class Lm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function k1(r,e,t,s=S1,o=C1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const h=Object.assign(Object.assign({},E1),{width:s.toString(),height:o.toString(),top:l,left:c}),g=pt().toLowerCase();t&&(f=Xy(g)?I1:t),Qy(g)&&(e=e||T1,h.scrollbars="yes");const _=Object.entries(h).reduce((v,[R,N])=>`${v}${R}=${N},`,"");if(QR(g)&&f!=="_self")return R1(e||"",f),new Lm(null);const y=window.open(e||"",f,_);ee(y,r,"popup-blocked");try{y.focus()}catch{}return new Lm(y)}function R1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const N1="__/auth/handler",P1="emulator/auth/handler",x1=encodeURIComponent("fac");async function Dm(r,e,t,s,o,l){ee(r.config.authDomain,r,"auth-domain-config-required"),ee(r.config.apiKey,r,"invalid-api-key");const c={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Lr,eventId:o};if(e instanceof lv){e.setDefaultLanguage(r.languageCode),c.providerId=e.providerId||"",$c(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,y]of Object.entries({}))c[_]=y}if(e instanceof io){const _=e.getScopes().filter(y=>y!=="");_.length>0&&(c.scopes=_.join(","))}r.tenantId&&(c.tid=r.tenantId);const f=c;for(const _ of Object.keys(f))f[_]===void 0&&delete f[_];const h=await r._getAppCheckToken(),g=h?`#${x1}=${encodeURIComponent(h)}`:"";return`${O1(r)}?${Ti(f).slice(1)}${g}`}function O1({config:r}){return r.emulator?Kd(r,P1):`https://${r.authDomain}/${N1}`}/**
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
 */const Oc="webStorageSupport";class A1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pv,this._completeRedirectFn=n1,this._overrideRedirectResult=ZN}async _openPopup(e,t,s,o){var l;Cn((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await Dm(e,t,s,rd(),o);return k1(e,c,Jd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await Dm(e,t,s,rd(),o);return bN(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Cn(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await w1(e),s=new i1(e);return t.register("authEvent",o=>(ee(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Oc,{type:Oc},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Oc];c!==void 0&&t(!!c),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=u1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return rv()||Jy()||qd()}}const L1=A1;var bm="@firebase/auth",Mm="1.8.2";/**
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
 */class D1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function b1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function M1(r){Rr(new rr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=s.options;ee(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const h={apiKey:c,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iv(r)},g=new nN(s,o,l,h);return fN(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Rr(new rr("auth-internal",e=>{const t=Ni(e.getProvider("auth").getImmediate());return(s=>new D1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(bm,Mm,b1(r)),tn(bm,Mm,"esm2017")}/**
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
 */const F1=5*60,U1=m_("authIdTokenMaxAge")||F1;let Fm=null;const j1=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>U1)return;const o=t==null?void 0:t.token;Fm!==o&&(Fm=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function $1(r=gd()){const e=ol(r,"auth");if(e.isInitialized())return e.getImmediate();const t=dN(r,{popupRedirectResolver:L1,persistence:[WN,AN,pv]}),s=m_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=j1(l.toString());PN(t,c,()=>c(t.currentUser)),NN(t,f=>c(f))}}const o=h_("auth");return o&&hN(t,`http://${o}`),t}function z1(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}rN({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=nn("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",z1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});M1("Browser");/**
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
 */const Ev="firebasestorage.googleapis.com",V1="storageBucket",B1=2*60*1e3,W1=10*60*1e3;/**
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
 */class on extends In{constructor(e,t,s=0){super(Ac(e),`Firebase Storage: ${t} (${Ac(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,on.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ac(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var sn;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(sn||(sn={}));function Ac(r){return"storage/"+r}function H1(){const r="An unknown error occurred, please check the error payload for server response.";return new on(sn.UNKNOWN,r)}function K1(){return new on(sn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function G1(){return new on(sn.CANCELED,"User canceled the upload/download.")}function q1(r){return new on(sn.INVALID_URL,"Invalid URL '"+r+"'.")}function Y1(r){return new on(sn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function Um(r){return new on(sn.INVALID_ARGUMENT,r)}function Sv(){return new on(sn.APP_DELETED,"The Firebase app was deleted.")}function Q1(r){return new on(sn.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Ht{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Ht.makeFromUrl(e,t)}catch{return new Ht(e,"")}if(s.path==="")return s;throw Y1(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function l(Q){Q.path.charAt(Q.path.length-1)==="/"&&(Q.path_=Q.path_.slice(0,-1))}const c="(/(.*))?$",f=new RegExp("^gs://"+o+c,"i"),h={bucket:1,path:3};function g(Q){Q.path_=decodeURIComponent(Q.path)}const _="v[A-Za-z0-9_]+",y=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",R=new RegExp(`^https?://${y}/${_}/b/${o}/o${v}`,"i"),N={bucket:1,path:3},P=t===Ev?"(?:storage.googleapis.com|storage.cloud.google.com)":t,I="([^?#]*)",z=new RegExp(`^https?://${P}/${o}/${I}`,"i"),W=[{regex:f,indices:h,postModify:l},{regex:R,indices:N,postModify:g},{regex:z,indices:{bucket:1,path:2},postModify:g}];for(let Q=0;Q<W.length;Q++){const fe=W[Q],he=fe.regex.exec(e);if(he){const se=he[fe.indices.bucket];let ne=he[fe.indices.path];ne||(ne=""),s=new Ht(se,ne),fe.postModify(s);break}}if(s==null)throw q1(e);return s}}class J1{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function X1(r,e,t){let s=1,o=null,l=null,c=!1,f=0;function h(){return f===2}let g=!1;function _(...I){g||(g=!0,e.apply(null,I))}function y(I){o=setTimeout(()=>{o=null,r(R,h())},I)}function v(){l&&clearTimeout(l)}function R(I,...z){if(g){v();return}if(I){v(),_.call(null,I,...z);return}if(h()||c){v(),_.call(null,I,...z);return}s<64&&(s*=2);let W;f===1?(f=2,W=0):W=(s+Math.random())*1e3,y(W)}let N=!1;function P(I){N||(N=!0,v(),!g&&(o!==null?(I||(f=2),clearTimeout(o),y(0)):I||(f=1)))}return y(0),l=setTimeout(()=>{c=!0,P(!0)},t),P}function Z1(r){r(!1)}/**
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
 */function eP(r){return r!==void 0}function jm(r,e,t,s){if(s<e)throw Um(`Invalid value for '${r}'. Expected ${e} or greater.`);if(s>t)throw Um(`Invalid value for '${r}'. Expected ${t} or less.`)}function tP(r){const e=encodeURIComponent;let t="?";for(const s in r)if(r.hasOwnProperty(s)){const o=e(s)+"="+e(r[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var el;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(el||(el={}));/**
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
 */function nP(r,e){const t=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,l=e.indexOf(r)!==-1;return t||o||l}/**
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
 */class rP{constructor(e,t,s,o,l,c,f,h,g,_,y,v=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=f,this.errorCallback_=h,this.timeout_=g,this.progressCallback_=_,this.connectionFactory_=y,this.retry=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,N)=>{this.resolve_=R,this.reject_=N,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new Sa(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=f=>{const h=f.loaded,g=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,g)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const f=l.getErrorCode()===el.NO_ERROR,h=l.getStatus();if(!f||nP(h,this.additionalRetryCodes_)&&this.retry){const _=l.getErrorCode()===el.ABORT;s(!1,new Sa(!1,null,_));return}const g=this.successCodes_.indexOf(h)!==-1;s(!0,new Sa(g,l))})},t=(s,o)=>{const l=this.resolve_,c=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const h=this.callback_(f,f.getResponse());eP(h)?l(h):l()}catch(h){c(h)}else if(f!==null){const h=H1();h.serverResponse=f.getErrorText(),this.errorCallback_?c(this.errorCallback_(f,h)):c(h)}else if(o.canceled){const h=this.appDelete_?Sv():G1();c(h)}else{const h=K1();c(h)}};this.canceled_?t(!1,new Sa(!1,null,!0)):this.backoffId_=X1(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Z1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Sa{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function iP(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function sP(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function oP(r,e){e&&(r["X-Firebase-GMPID"]=e)}function aP(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function lP(r,e,t,s,o,l,c=!0){const f=tP(r.urlParams),h=r.url+f,g=Object.assign({},r.headers);return oP(g,e),iP(g,t),sP(g,l),aP(g,s),new rP(h,r.method,g,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,c)}/**
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
 */function uP(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function cP(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */class tl{constructor(e,t){this._service=e,t instanceof Ht?this._location=t:this._location=Ht.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new tl(e,t)}get root(){const e=new Ht(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cP(this._location.path)}get storage(){return this._service}get parent(){const e=uP(this._location.path);if(e===null)return null;const t=new Ht(this._location.bucket,e);return new tl(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Q1(e)}}function $m(r,e){const t=e==null?void 0:e[V1];return t==null?null:Ht.makeFromBucketSpec(t,r)}function dP(r,e,t,s={}){r.host=`${e}:${t}`,r._protocol="http";const{mockUserToken:o}=s;o&&(r._overrideAuthToken=typeof o=="string"?o:__(o,r.app.options.projectId))}class fP{constructor(e,t,s,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=Ev,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=B1,this._maxUploadRetryTime=W1,this._requests=new Set,o!=null?this._bucket=Ht.makeFromBucketSpec(o,this._host):this._bucket=$m(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ht.makeFromBucketSpec(this._url,e):this._bucket=$m(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){jm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){jm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new tl(this,e)}_makeRequest(e,t,s,o,l=!0){if(this._deleted)return new J1(Sv());{const c=lP(e,this._appId,s,o,t,this._firebaseVersion,l);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const zm="@firebase/storage",Vm="0.13.5";/**
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
 */const Cv="storage";function hP(r=gd(),e){r=Pt(r);const s=ol(r,Cv).getImmediate({identifier:e}),o=p_("storage");return o&&pP(s,...o),s}function pP(r,e,t,s={}){dP(r,e,t,s)}function gP(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new fP(t,s,o,e,Lr)}function mP(){Rr(new rr(Cv,gP,"PUBLIC").setMultipleInstances(!0)),tn(zm,Vm,""),tn(zm,Vm,"esm2017")}mP();const _P={apiKey:"AIzaSyANdwlpY4ZNrKhq6GfCXUuQaUs4y2W9Yq4",authDomain:"mina-art.firebaseapp.com",databaseURL:"https://mina-art-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"mina-art",storageBucket:"mina-art.firebasestorage.app",messagingSenderId:"595256450426",appId:"1:595256450426:web:c1f34a0c2a52c17b8a8ac3",measurementId:"G-H8Y5S6RNRK"},Zd=C_(_P),yP=$1(Zd);hP(Zd);const vP=kR(Zd),wP=async(r,e)=>{try{await RN(yP,r,e)}catch{throw new Error("Authentication failed: ")}},EP=()=>{const{t:r}=Ci(),[e,t]=F.useState(1),[s,o]=F.useState([]),[l,c]=F.useState(null),[f,h]=F.useState(!0),g=ld(),_=1,y=4;F.useEffect(()=>{l?document.body.style.overflow="hidden":document.body.style.overflow=""},[l]);const v=async()=>{try{const P=_R(vP,"images"),I=await yR(P);if(I.exists()){const z=I.val(),B=Object.keys(z).map(W=>({id:W,...z[W]}));B.sort((W,Q)=>W.order-Q.order),o(B)}}catch(P){console.error("Error fetching images:",P)}finally{h(!1)}};F.useEffect(()=>{v()},[]);const R=P=>{const I=(P-1)*_;return s.slice(I,I+_)},N=()=>{const P=Math.ceil(s.length/_),I=[];let z=1,B=P;P>y&&(e<=Math.ceil(y/2)?B=y:e+Math.floor(y/2)>=P?z=P-y+1:(z=e-Math.floor(y/2),B=e+Math.floor(y/2))),z>1&&I.push(U.jsx("button",{onClick:()=>t(1),children:r("Start")},"first"));for(let W=z;W<=B;W++)I.push(U.jsx("button",{className:W===e?"active":"",onClick:()=>t(W),children:W},W));return B<P&&I.push(U.jsx("button",{onClick:()=>t(P),children:r("End")},"last")),I};return U.jsxs("section",{id:"gallery",className:"gallery",children:[U.jsx("h1",{"data-key":"gallery-title",className:"section-fade",children:r("gallery-title")}),U.jsx("button",{"data-key":"gallery-random",id:"randomImageBtn",onClick:()=>{let P=Math.floor(Math.random()*Math.ceil(s.length/_))+1;for(;P===e;)P=Math.floor(Math.random()*Math.ceil(s.length/_))+1;t(P)},disabled:f,className:f?"disabled":"section-fade",children:r("gallery-random")}),f?U.jsx("div",{className:"loading-spinner",children:U.jsx("span",{children:"Loading images..."})}):U.jsx("div",{id:"gallery-container",children:R(e).map(P=>U.jsx("img",{src:`data:image/png;base64,${P.blob}`,alt:`Artwork ${P.id}`,className:"lazy-load",onClick:()=>c(`data:image/png;base64,${P.blob}`)},P.id))}),U.jsx("div",{id:"pagination-controls",className:"section-fade",children:N()}),U.jsx("button",{className:"section-fade",onClick:()=>g("/admin"),children:r("go-to-admin")}),l&&U.jsxs("div",{className:"popup",onClick:()=>c(null),style:{display:"flex"},children:[U.jsx("img",{src:l,alt:"Popup Artwork"}),U.jsx("span",{className:"close",onClick:()=>c(null),children:"×"})]})]})},SP=()=>{const{t:r}=Ci();return U.jsxs("section",{id:"about",className:"about",children:[U.jsx("h2",{"data-key":"about-title",className:"section-fade",children:r("about-title")}),U.jsx("p",{"data-key":"about-description",className:"section-fade",children:r("about-description")}),U.jsxs("div",{className:"social",children:[U.jsx("a",{href:"https://www.instagram.com/blurryminah/",target:"_blank","aria-label":"Instagram",className:"section-fade",children:U.jsx("i",{className:"fab fa-instagram"})}),U.jsx("a",{href:"https://www.tiktok.com/@blurryminah",target:"_blank","aria-label":"TikTok",className:"section-fade",children:U.jsx("i",{className:"fab fa-tiktok"})})]})]})},CP=()=>{const{t:r}=Ci();return U.jsx("footer",{children:U.jsxs("p",{"data-key":"footer-text",children:["© 2025 ",r("footer-text")]})})},IP=()=>{const{t:r}=Ci();return U.jsxs("section",{id:"painting-game",className:"painting-game",children:[U.jsx("h2",{"data-key":"drawing-title",className:"section-fade",children:r("drawing-title")}),U.jsx("iframe",{src:"https://jspaint.app",title:"Painting Game"})]})},Bm=()=>{const[r,e]=F.useState(""),[t,s]=F.useState(""),[o,l]=F.useState(null),c=ld(),f=async h=>{h.preventDefault();try{await wP(r,t),c("/admin")}catch{l("Failed to sign in. Please check your credentials.")}};return U.jsx("section",{id:"admin-login",className:"admin-login",children:U.jsxs("form",{onSubmit:f,children:[U.jsx("h2",{children:"Admin Login"}),o&&U.jsx("p",{children:o}),U.jsx("input",{type:"email",value:r,onChange:h=>e(h.target.value),placeholder:"Email",required:!0}),U.jsx("input",{type:"password",value:t,onChange:h=>s(h.target.value),placeholder:"Password",required:!0}),U.jsx("button",{type:"submit",children:"Login"})]})})},TP=()=>{const r=rl(),e=()=>{const t=document.querySelectorAll("header nav ul li a"),s=document.querySelectorAll("section");let o=null,l=Number.POSITIVE_INFINITY;if(s.forEach(c=>{const f=c.getBoundingClientRect(),h=Math.abs(f.top);h<l&&(l=h,o=c)}),window.innerHeight+window.scrollY>=document.body.offsetHeight-10&&(o=s[s.length-1]),o){t.forEach(f=>f.classList.remove("active"));const c=document.querySelector(`header nav ul li a[href="#${o.id}"]`);c&&c.classList.add("active")}};return F.useEffect(()=>{const t=window.matchMedia("(pointer: coarse)").matches;function s(l){l.preventDefault();const f=l.currentTarget.getAttribute("href");if(!f||f==="#")return;const h=document.querySelector(f);if(!h)return;const g=h.getBoundingClientRect().top+window.scrollY,_=window.scrollY,y=g-_,v=1e3;let R=null;function N(I,z,B,W){return I/=W/2,I<1?B/2*I*I+z:(I--,-B/2*(I*(I-2)-1)+z)}function P(I){R||(R=I);const z=I-R,B=N(z,_,y,v);window.scrollTo(0,B),z<v?requestAnimationFrame(P):e()}requestAnimationFrame(P)}t||document.querySelectorAll("header nav ul li a").forEach(c=>c.addEventListener("click",s)),window.addEventListener("scroll",e),e();function o(){var h;const l=document.querySelector(".painting-game iframe"),c=((h=document.querySelector("header"))==null?void 0:h.offsetHeight)||0,f=window.innerHeight>window.innerWidth;l&&(f?(l.style.width="90vw",l.style.height=`${window.innerHeight-c-120}px`):(l.style.width="85vw",l.style.height=`${window.innerHeight-c-100}px`))}return window.addEventListener("load",o),window.addEventListener("resize",o),()=>{const l=document.querySelectorAll("header nav ul li a");t||l.forEach(c=>c.removeEventListener("click",s)),window.removeEventListener("scroll",e),window.removeEventListener("load",o),window.removeEventListener("resize",o)}},[]),F.useEffect(()=>{window.scrollTo(0,0),e()},[r]),F.useEffect(()=>{const t=document.querySelectorAll(".section-fade"),s={root:null,rootMargin:"-50px",threshold:[0,.5,1]},o=c=>{c.forEach(f=>{const h=f.target;f.isIntersecting?(h.style.transition="opacity 1.7s ease",h.style.opacity="1"):(h.style.transition="none",h.style.opacity="0")})},l=new IntersectionObserver(o,s);return t.forEach(c=>{l.observe(c)}),()=>{t.forEach(c=>{l.unobserve(c)})}},[]),U.jsx($S,{i18n:it,children:U.jsxs(IS,{basename:"/mina-art",children:[" ",U.jsxs(ES,{children:[U.jsx(Ss,{path:"/",element:U.jsxs(U.Fragment,{children:[U.jsx(UC,{}),U.jsx(jC,{}),U.jsx(EP,{}),U.jsx(IP,{}),U.jsx(SP,{}),U.jsx(CP,{})]})}),U.jsx(Ss,{path:"/admin",element:U.jsx(Bm,{})}),U.jsx(Ss,{path:"/login",element:U.jsx(Bm,{})}),U.jsx(Ss,{path:"*",element:U.jsx(vS,{to:"/"})})]})]})})};xE.createRoot(document.getElementById("root")).render(U.jsx(F.StrictMode,{children:U.jsx(TP,{})}));
