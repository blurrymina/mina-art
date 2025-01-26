function ME(r,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function FE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ec={exports:{}},vs={},Sc={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function UE(){if(fg)return oe;fg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function v(C){return C===null||typeof C!="object"?null:(C=_&&C[_]||C["@@iterator"],typeof C=="function"?C:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,x={};function I(C,O,se){this.props=C,this.context=O,this.refs=x,this.updater=se||k}I.prototype.isReactComponent={},I.prototype.setState=function(C,O){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,O,"setState")},I.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function $(){}$.prototype=I.prototype;function W(C,O,se){this.props=C,this.context=O,this.refs=x,this.updater=se||k}var H=W.prototype=new $;H.constructor=W,N(H,I.prototype),H.isPureReactComponent=!0;var K=Array.isArray,le=Object.prototype.hasOwnProperty,de={current:null},ie={key:!0,ref:!0,__self:!0,__source:!0};function J(C,O,se){var ue,pe={},ge=null,ke=null;if(O!=null)for(ue in O.ref!==void 0&&(ke=O.ref),O.key!==void 0&&(ge=""+O.key),O)le.call(O,ue)&&!ie.hasOwnProperty(ue)&&(pe[ue]=O[ue]);var we=arguments.length-2;if(we===1)pe.children=se;else if(1<we){for(var Ae=Array(we),Tt=0;Tt<we;Tt++)Ae[Tt]=arguments[Tt+2];pe.children=Ae}if(C&&C.defaultProps)for(ue in we=C.defaultProps,we)pe[ue]===void 0&&(pe[ue]=we[ue]);return{$$typeof:r,type:C,key:ge,ref:ke,props:pe,_owner:de.current}}function ye(C,O){return{$$typeof:r,type:C.type,key:O,ref:C.ref,props:C.props,_owner:C._owner}}function Se(C){return typeof C=="object"&&C!==null&&C.$$typeof===r}function ve(C){var O={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(se){return O[se]})}var Me=/\/+/g;function at(C,O){return typeof C=="object"&&C!==null&&C.key!=null?ve(""+C.key):O.toString(36)}function Fe(C,O,se,ue,pe){var ge=typeof C;(ge==="undefined"||ge==="boolean")&&(C=null);var ke=!1;if(C===null)ke=!0;else switch(ge){case"string":case"number":ke=!0;break;case"object":switch(C.$$typeof){case r:case e:ke=!0}}if(ke)return ke=C,pe=pe(ke),C=ue===""?"."+at(ke,0):ue,K(pe)?(se="",C!=null&&(se=C.replace(Me,"$&/")+"/"),Fe(pe,O,se,"",function(Tt){return Tt})):pe!=null&&(Se(pe)&&(pe=ye(pe,se+(!pe.key||ke&&ke.key===pe.key?"":(""+pe.key).replace(Me,"$&/")+"/")+C)),O.push(pe)),1;if(ke=0,ue=ue===""?".":ue+":",K(C))for(var we=0;we<C.length;we++){ge=C[we];var Ae=ue+at(ge,we);ke+=Fe(ge,O,se,Ae,pe)}else if(Ae=v(C),typeof Ae=="function")for(C=Ae.call(C),we=0;!(ge=C.next()).done;)ge=ge.value,Ae=ue+at(ge,we++),ke+=Fe(ge,O,se,Ae,pe);else if(ge==="object")throw O=String(C),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return ke}function We(C,O,se){if(C==null)return C;var ue=[],pe=0;return Fe(C,ue,"","",function(ge){return O.call(se,ge,pe++)}),ue}function Be(C){if(C._status===-1){var O=C._result;O=O(),O.then(function(se){(C._status===0||C._status===-1)&&(C._status=1,C._result=se)},function(se){(C._status===0||C._status===-1)&&(C._status=2,C._result=se)}),C._status===-1&&(C._status=0,C._result=O)}if(C._status===1)return C._result.default;throw C._result}var Te={current:null},j={transition:null},q={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:j,ReactCurrentOwner:de};function z(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:We,forEach:function(C,O,se){We(C,function(){O.apply(this,arguments)},se)},count:function(C){var O=0;return We(C,function(){O++}),O},toArray:function(C){return We(C,function(O){return O})||[]},only:function(C){if(!Se(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},oe.Component=I,oe.Fragment=t,oe.Profiler=o,oe.PureComponent=W,oe.StrictMode=i,oe.Suspense=h,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,oe.act=z,oe.cloneElement=function(C,O,se){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var ue=N({},C.props),pe=C.key,ge=C.ref,ke=C._owner;if(O!=null){if(O.ref!==void 0&&(ge=O.ref,ke=de.current),O.key!==void 0&&(pe=""+O.key),C.type&&C.type.defaultProps)var we=C.type.defaultProps;for(Ae in O)le.call(O,Ae)&&!ie.hasOwnProperty(Ae)&&(ue[Ae]=O[Ae]===void 0&&we!==void 0?we[Ae]:O[Ae])}var Ae=arguments.length-2;if(Ae===1)ue.children=se;else if(1<Ae){we=Array(Ae);for(var Tt=0;Tt<Ae;Tt++)we[Tt]=arguments[Tt+2];ue.children=we}return{$$typeof:r,type:C.type,key:pe,ref:ge,props:ue,_owner:ke}},oe.createContext=function(C){return C={$$typeof:c,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:l,_context:C},C.Consumer=C},oe.createElement=J,oe.createFactory=function(C){var O=J.bind(null,C);return O.type=C,O},oe.createRef=function(){return{current:null}},oe.forwardRef=function(C){return{$$typeof:f,render:C}},oe.isValidElement=Se,oe.lazy=function(C){return{$$typeof:y,_payload:{_status:-1,_result:C},_init:Be}},oe.memo=function(C,O){return{$$typeof:g,type:C,compare:O===void 0?null:O}},oe.startTransition=function(C){var O=j.transition;j.transition={};try{C()}finally{j.transition=O}},oe.unstable_act=z,oe.useCallback=function(C,O){return Te.current.useCallback(C,O)},oe.useContext=function(C){return Te.current.useContext(C)},oe.useDebugValue=function(){},oe.useDeferredValue=function(C){return Te.current.useDeferredValue(C)},oe.useEffect=function(C,O){return Te.current.useEffect(C,O)},oe.useId=function(){return Te.current.useId()},oe.useImperativeHandle=function(C,O,se){return Te.current.useImperativeHandle(C,O,se)},oe.useInsertionEffect=function(C,O){return Te.current.useInsertionEffect(C,O)},oe.useLayoutEffect=function(C,O){return Te.current.useLayoutEffect(C,O)},oe.useMemo=function(C,O){return Te.current.useMemo(C,O)},oe.useReducer=function(C,O,se){return Te.current.useReducer(C,O,se)},oe.useRef=function(C){return Te.current.useRef(C)},oe.useState=function(C){return Te.current.useState(C)},oe.useSyncExternalStore=function(C,O,se){return Te.current.useSyncExternalStore(C,O,se)},oe.useTransition=function(){return Te.current.useTransition()},oe.version="18.3.1",oe}var hg;function _d(){return hg||(hg=1,Sc.exports=UE()),Sc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function jE(){if(pg)return vs;pg=1;var r=_d(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,g){var y,_={},v=null,k=null;g!==void 0&&(v=""+g),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(k=h.ref);for(y in h)i.call(h,y)&&!l.hasOwnProperty(y)&&(_[y]=h[y]);if(f&&f.defaultProps)for(y in h=f.defaultProps,h)_[y]===void 0&&(_[y]=h[y]);return{$$typeof:e,type:f,key:v,ref:k,props:_,_owner:o.current}}return vs.Fragment=t,vs.jsx=c,vs.jsxs=c,vs}var gg;function $E(){return gg||(gg=1,Ec.exports=jE()),Ec.exports}var M=$E(),U=_d();const zE=FE(U),VE=ME({__proto__:null,default:zE},[U]);var Ia={},Cc={exports:{}},Ct={},Ic={exports:{}},Tc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg;function WE(){return mg||(mg=1,function(r){function e(j,q){var z=j.length;j.push(q);e:for(;0<z;){var C=z-1>>>1,O=j[C];if(0<o(O,q))j[C]=q,j[z]=O,z=C;else break e}}function t(j){return j.length===0?null:j[0]}function i(j){if(j.length===0)return null;var q=j[0],z=j.pop();if(z!==q){j[0]=z;e:for(var C=0,O=j.length,se=O>>>1;C<se;){var ue=2*(C+1)-1,pe=j[ue],ge=ue+1,ke=j[ge];if(0>o(pe,z))ge<O&&0>o(ke,pe)?(j[C]=ke,j[ge]=z,C=ge):(j[C]=pe,j[ue]=z,C=ue);else if(ge<O&&0>o(ke,z))j[C]=ke,j[ge]=z,C=ge;else break e}}return q}function o(j,q){var z=j.sortIndex-q.sortIndex;return z!==0?z:j.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var h=[],g=[],y=1,_=null,v=3,k=!1,N=!1,x=!1,I=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function H(j){for(var q=t(g);q!==null;){if(q.callback===null)i(g);else if(q.startTime<=j)i(g),q.sortIndex=q.expirationTime,e(h,q);else break;q=t(g)}}function K(j){if(x=!1,H(j),!N)if(t(h)!==null)N=!0,Be(le);else{var q=t(g);q!==null&&Te(K,q.startTime-j)}}function le(j,q){N=!1,x&&(x=!1,$(J),J=-1),k=!0;var z=v;try{for(H(q),_=t(h);_!==null&&(!(_.expirationTime>q)||j&&!ve());){var C=_.callback;if(typeof C=="function"){_.callback=null,v=_.priorityLevel;var O=C(_.expirationTime<=q);q=r.unstable_now(),typeof O=="function"?_.callback=O:_===t(h)&&i(h),H(q)}else i(h);_=t(h)}if(_!==null)var se=!0;else{var ue=t(g);ue!==null&&Te(K,ue.startTime-q),se=!1}return se}finally{_=null,v=z,k=!1}}var de=!1,ie=null,J=-1,ye=5,Se=-1;function ve(){return!(r.unstable_now()-Se<ye)}function Me(){if(ie!==null){var j=r.unstable_now();Se=j;var q=!0;try{q=ie(!0,j)}finally{q?at():(de=!1,ie=null)}}else de=!1}var at;if(typeof W=="function")at=function(){W(Me)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,We=Fe.port2;Fe.port1.onmessage=Me,at=function(){We.postMessage(null)}}else at=function(){I(Me,0)};function Be(j){ie=j,de||(de=!0,at())}function Te(j,q){J=I(function(){j(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_continueExecution=function(){N||k||(N=!0,Be(le))},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(j){switch(v){case 1:case 2:case 3:var q=3;break;default:q=v}var z=v;v=q;try{return j()}finally{v=z}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(j,q){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var z=v;v=j;try{return q()}finally{v=z}},r.unstable_scheduleCallback=function(j,q,z){var C=r.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?C+z:C):z=C,j){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=z+O,j={id:y++,callback:q,priorityLevel:j,startTime:z,expirationTime:O,sortIndex:-1},z>C?(j.sortIndex=z,e(g,j),t(h)===null&&j===t(g)&&(x?($(J),J=-1):x=!0,Te(K,z-C))):(j.sortIndex=O,e(h,j),N||k||(N=!0,Be(le))),j},r.unstable_shouldYield=ve,r.unstable_wrapCallback=function(j){var q=v;return function(){var z=v;v=q;try{return j.apply(this,arguments)}finally{v=z}}}}(Tc)),Tc}var _g;function BE(){return _g||(_g=1,Ic.exports=WE()),Ic.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function HE(){if(yg)return Ct;yg=1;var r=_d(),e=BE();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,s){c(n,s),c(n+"Capture",s)}function c(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},_={};function v(n){return h.call(_,n)?!0:h.call(y,n)?!1:g.test(n)?_[n]=!0:(y[n]=!0,!1)}function k(n,s,a,u){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function N(n,s,a,u){if(s===null||typeof s>"u"||k(n,s,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function x(n,s,a,u,d,p,m){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=p,this.removeEmptyString=m}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){I[n]=new x(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];I[s]=new x(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){I[n]=new x(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){I[n]=new x(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){I[n]=new x(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){I[n]=new x(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){I[n]=new x(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){I[n]=new x(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){I[n]=new x(n,5,!1,n.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function W(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace($,W);I[s]=new x(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace($,W);I[s]=new x(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace($,W);I[s]=new x(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){I[n]=new x(n,1,!1,n.toLowerCase(),null,!1,!1)}),I.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){I[n]=new x(n,1,!1,n.toLowerCase(),null,!0,!0)});function H(n,s,a,u){var d=I.hasOwnProperty(s)?I[s]:null;(d!==null?d.type!==0:u||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(N(s,a,d,u)&&(a=null),u||d===null?v(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,s,a):n.setAttribute(s,a))))}var K=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,le=Symbol.for("react.element"),de=Symbol.for("react.portal"),ie=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),Se=Symbol.for("react.provider"),ve=Symbol.for("react.context"),Me=Symbol.for("react.forward_ref"),at=Symbol.for("react.suspense"),Fe=Symbol.for("react.suspense_list"),We=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),Te=Symbol.for("react.offscreen"),j=Symbol.iterator;function q(n){return n===null||typeof n!="object"?null:(n=j&&n[j]||n["@@iterator"],typeof n=="function"?n:null)}var z=Object.assign,C;function O(n){if(C===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);C=s&&s[1]||""}return`
`+C+n}var se=!1;function ue(n,s){if(!n||se)return"";se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(P){var u=P}Reflect.construct(n,[],s)}else{try{s.call()}catch(P){u=P}n.call(s.prototype)}else{try{throw Error()}catch(P){u=P}n()}}catch(P){if(P&&u&&typeof P.stack=="string"){for(var d=P.stack.split(`
`),p=u.stack.split(`
`),m=d.length-1,w=p.length-1;1<=m&&0<=w&&d[m]!==p[w];)w--;for(;1<=m&&0<=w;m--,w--)if(d[m]!==p[w]){if(m!==1||w!==1)do if(m--,w--,0>w||d[m]!==p[w]){var E=`
`+d[m].replace(" at new "," at ");return n.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",n.displayName)),E}while(1<=m&&0<=w);break}}}finally{se=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?O(n):""}function pe(n){switch(n.tag){case 5:return O(n.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return n=ue(n.type,!1),n;case 11:return n=ue(n.type.render,!1),n;case 1:return n=ue(n.type,!0),n;default:return""}}function ge(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ie:return"Fragment";case de:return"Portal";case ye:return"Profiler";case J:return"StrictMode";case at:return"Suspense";case Fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ve:return(n.displayName||"Context")+".Consumer";case Se:return(n._context.displayName||"Context")+".Provider";case Me:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case We:return s=n.displayName||null,s!==null?s:ge(n.type)||"Memo";case Be:s=n._payload,n=n._init;try{return ge(n(s))}catch{}}return null}function ke(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(s);case 8:return s===J?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ae(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Tt(n){var s=Ae(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),u=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(m){u=""+m,p.call(this,m)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(m){u=""+m},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function po(n){n._valueTracker||(n._valueTracker=Tt(n))}function yf(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),u="";return n&&(u=Ae(n)?n.checked?"true":"false":n.value),n=u,n!==a?(s.setValue(n),!0):!1}function go(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Nl(n,s){var a=s.checked;return z({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function vf(n,s){var a=s.defaultValue==null?"":s.defaultValue,u=s.checked!=null?s.checked:s.defaultChecked;a=we(s.value!=null?s.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function wf(n,s){s=s.checked,s!=null&&H(n,"checked",s,!1)}function Pl(n,s){wf(n,s);var a=we(s.value),u=s.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?xl(n,s.type,a):s.hasOwnProperty("defaultValue")&&xl(n,s.type,we(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Ef(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var u=s.type;if(!(u!=="submit"&&u!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function xl(n,s,a){(s!=="number"||go(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var bi=Array.isArray;function Ur(n,s,a,u){if(n=n.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=s.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+we(a),s=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function Ol(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return z({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Sf(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(bi(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:we(a)}}function Cf(n,s){var a=we(s.value),u=we(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function If(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function Tf(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Al(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?Tf(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var mo,kf=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(s,a,u,d)})}:n}(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(mo=mo||document.createElement("div"),mo.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=mo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function Di(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var Mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zv=["Webkit","ms","Moz","O"];Object.keys(Mi).forEach(function(n){zv.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Mi[s]=Mi[n]})});function Rf(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Mi.hasOwnProperty(n)&&Mi[n]?(""+s).trim():s+"px"}function Nf(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=Rf(a,s[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var Vv=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ll(n,s){if(s){if(Vv[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function bl(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dl=null;function Ml(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Fl=null,jr=null,$r=null;function Pf(n){if(n=is(n)){if(typeof Fl!="function")throw Error(t(280));var s=n.stateNode;s&&(s=jo(s),Fl(n.stateNode,n.type,s))}}function xf(n){jr?$r?$r.push(n):$r=[n]:jr=n}function Of(){if(jr){var n=jr,s=$r;if($r=jr=null,Pf(n),s)for(n=0;n<s.length;n++)Pf(s[n])}}function Af(n,s){return n(s)}function Lf(){}var Ul=!1;function bf(n,s,a){if(Ul)return n(s,a);Ul=!0;try{return Af(n,s,a)}finally{Ul=!1,(jr!==null||$r!==null)&&(Lf(),Of())}}function Fi(n,s){var a=n.stateNode;if(a===null)return null;var u=jo(a);if(u===null)return null;a=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var jl=!1;if(f)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){jl=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{jl=!1}function Wv(n,s,a,u,d,p,m,w,E){var P=Array.prototype.slice.call(arguments,3);try{s.apply(a,P)}catch(L){this.onError(L)}}var ji=!1,_o=null,yo=!1,$l=null,Bv={onError:function(n){ji=!0,_o=n}};function Hv(n,s,a,u,d,p,m,w,E){ji=!1,_o=null,Wv.apply(Bv,arguments)}function Kv(n,s,a,u,d,p,m,w,E){if(Hv.apply(this,arguments),ji){if(ji){var P=_o;ji=!1,_o=null}else throw Error(t(198));yo||(yo=!0,$l=P)}}function cr(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,s.flags&4098&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function Df(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Mf(n){if(cr(n)!==n)throw Error(t(188))}function Gv(n){var s=n.alternate;if(!s){if(s=cr(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,u=s;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Mf(d),n;if(p===u)return Mf(d),s;p=p.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=p;else{for(var m=!1,w=d.child;w;){if(w===a){m=!0,a=d,u=p;break}if(w===u){m=!0,u=d,a=p;break}w=w.sibling}if(!m){for(w=p.child;w;){if(w===a){m=!0,a=p,u=d;break}if(w===u){m=!0,u=p,a=d;break}w=w.sibling}if(!m)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function Ff(n){return n=Gv(n),n!==null?Uf(n):null}function Uf(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Uf(n);if(s!==null)return s;n=n.sibling}return null}var jf=e.unstable_scheduleCallback,$f=e.unstable_cancelCallback,qv=e.unstable_shouldYield,Yv=e.unstable_requestPaint,ze=e.unstable_now,Qv=e.unstable_getCurrentPriorityLevel,zl=e.unstable_ImmediatePriority,zf=e.unstable_UserBlockingPriority,vo=e.unstable_NormalPriority,Jv=e.unstable_LowPriority,Vf=e.unstable_IdlePriority,wo=null,Yt=null;function Xv(n){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(wo,n,void 0,(n.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:tw,Zv=Math.log,ew=Math.LN2;function tw(n){return n>>>=0,n===0?32:31-(Zv(n)/ew|0)|0}var Eo=64,So=4194304;function $i(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Co(n,s){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,p=n.pingedLanes,m=a&268435455;if(m!==0){var w=m&~d;w!==0?u=$i(w):(p&=m,p!==0&&(u=$i(p)))}else m=a&~d,m!==0?u=$i(m):p!==0&&(u=$i(p));if(u===0)return 0;if(s!==0&&s!==u&&!(s&d)&&(d=u&-u,p=s&-s,d>=p||d===16&&(p&4194240)!==0))return s;if(u&4&&(u|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=u;0<s;)a=31-Ut(s),d=1<<a,u|=n[a],s&=~d;return u}function nw(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rw(n,s){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var m=31-Ut(p),w=1<<m,E=d[m];E===-1?(!(w&a)||w&u)&&(d[m]=nw(w,s)):E<=s&&(n.expiredLanes|=w),p&=~w}}function Vl(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Wf(){var n=Eo;return Eo<<=1,!(Eo&4194240)&&(Eo=64),n}function Wl(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function zi(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-Ut(s),n[s]=a}function iw(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ut(a),p=1<<d;s[d]=0,u[d]=-1,n[d]=-1,a&=~p}}function Bl(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var u=31-Ut(a),d=1<<u;d&s|n[u]&s&&(n[u]|=s),a&=~d}}var Ee=0;function Bf(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Hf,Hl,Kf,Gf,qf,Kl=!1,Io=[],Nn=null,Pn=null,xn=null,Vi=new Map,Wi=new Map,On=[],sw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yf(n,s){switch(n){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Vi.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wi.delete(s.pointerId)}}function Bi(n,s,a,u,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:s,domEventName:a,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},s!==null&&(s=is(s),s!==null&&Hl(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function ow(n,s,a,u,d){switch(s){case"focusin":return Nn=Bi(Nn,n,s,a,u,d),!0;case"dragenter":return Pn=Bi(Pn,n,s,a,u,d),!0;case"mouseover":return xn=Bi(xn,n,s,a,u,d),!0;case"pointerover":var p=d.pointerId;return Vi.set(p,Bi(Vi.get(p)||null,n,s,a,u,d)),!0;case"gotpointercapture":return p=d.pointerId,Wi.set(p,Bi(Wi.get(p)||null,n,s,a,u,d)),!0}return!1}function Qf(n){var s=dr(n.target);if(s!==null){var a=cr(s);if(a!==null){if(s=a.tag,s===13){if(s=Df(a),s!==null){n.blockedOn=s,qf(n.priority,function(){Kf(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function To(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=ql(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Dl=u,a.target.dispatchEvent(u),Dl=null}else return s=is(a),s!==null&&Hl(s),n.blockedOn=a,!1;s.shift()}return!0}function Jf(n,s,a){To(n)&&a.delete(s)}function aw(){Kl=!1,Nn!==null&&To(Nn)&&(Nn=null),Pn!==null&&To(Pn)&&(Pn=null),xn!==null&&To(xn)&&(xn=null),Vi.forEach(Jf),Wi.forEach(Jf)}function Hi(n,s){n.blockedOn===s&&(n.blockedOn=null,Kl||(Kl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,aw)))}function Ki(n){function s(d){return Hi(d,n)}if(0<Io.length){Hi(Io[0],n);for(var a=1;a<Io.length;a++){var u=Io[a];u.blockedOn===n&&(u.blockedOn=null)}}for(Nn!==null&&Hi(Nn,n),Pn!==null&&Hi(Pn,n),xn!==null&&Hi(xn,n),Vi.forEach(s),Wi.forEach(s),a=0;a<On.length;a++)u=On[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<On.length&&(a=On[0],a.blockedOn===null);)Qf(a),a.blockedOn===null&&On.shift()}var zr=K.ReactCurrentBatchConfig,ko=!0;function lw(n,s,a,u){var d=Ee,p=zr.transition;zr.transition=null;try{Ee=1,Gl(n,s,a,u)}finally{Ee=d,zr.transition=p}}function uw(n,s,a,u){var d=Ee,p=zr.transition;zr.transition=null;try{Ee=4,Gl(n,s,a,u)}finally{Ee=d,zr.transition=p}}function Gl(n,s,a,u){if(ko){var d=ql(n,s,a,u);if(d===null)du(n,s,u,Ro,a),Yf(n,u);else if(ow(d,n,s,a,u))u.stopPropagation();else if(Yf(n,u),s&4&&-1<sw.indexOf(n)){for(;d!==null;){var p=is(d);if(p!==null&&Hf(p),p=ql(n,s,a,u),p===null&&du(n,s,u,Ro,a),p===d)break;d=p}d!==null&&u.stopPropagation()}else du(n,s,u,null,a)}}var Ro=null;function ql(n,s,a,u){if(Ro=null,n=Ml(u),n=dr(n),n!==null)if(s=cr(n),s===null)n=null;else if(a=s.tag,a===13){if(n=Df(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Ro=n,null}function Xf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qv()){case zl:return 1;case zf:return 4;case vo:case Jv:return 16;case Vf:return 536870912;default:return 16}default:return 16}}var An=null,Yl=null,No=null;function Zf(){if(No)return No;var n,s=Yl,a=s.length,u,d="value"in An?An.value:An.textContent,p=d.length;for(n=0;n<a&&s[n]===d[n];n++);var m=a-n;for(u=1;u<=m&&s[a-u]===d[p-u];u++);return No=d.slice(n,1<u?1-u:void 0)}function Po(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function xo(){return!0}function eh(){return!1}function kt(n){function s(a,u,d,p,m){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=m,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(a=n[w],this[w]=a?a(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?xo:eh,this.isPropagationStopped=eh,this}return z(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),s}var Vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=kt(Vr),Gi=z({},Vr,{view:0,detail:0}),cw=kt(Gi),Jl,Xl,qi,Oo=z({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==qi&&(qi&&n.type==="mousemove"?(Jl=n.screenX-qi.screenX,Xl=n.screenY-qi.screenY):Xl=Jl=0,qi=n),Jl)},movementY:function(n){return"movementY"in n?n.movementY:Xl}}),th=kt(Oo),dw=z({},Oo,{dataTransfer:0}),fw=kt(dw),hw=z({},Gi,{relatedTarget:0}),Zl=kt(hw),pw=z({},Vr,{animationName:0,elapsedTime:0,pseudoElement:0}),gw=kt(pw),mw=z({},Vr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),_w=kt(mw),yw=z({},Vr,{data:0}),nh=kt(yw),vw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ww={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ew={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sw(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=Ew[n])?!!s[n]:!1}function eu(){return Sw}var Cw=z({},Gi,{key:function(n){if(n.key){var s=vw[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Po(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ww[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(n){return n.type==="keypress"?Po(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Po(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Iw=kt(Cw),Tw=z({},Oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rh=kt(Tw),kw=z({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),Rw=kt(kw),Nw=z({},Vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pw=kt(Nw),xw=z({},Oo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ow=kt(xw),Aw=[9,13,27,32],tu=f&&"CompositionEvent"in window,Yi=null;f&&"documentMode"in document&&(Yi=document.documentMode);var Lw=f&&"TextEvent"in window&&!Yi,ih=f&&(!tu||Yi&&8<Yi&&11>=Yi),sh=" ",oh=!1;function ah(n,s){switch(n){case"keyup":return Aw.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Wr=!1;function bw(n,s){switch(n){case"compositionend":return lh(s);case"keypress":return s.which!==32?null:(oh=!0,sh);case"textInput":return n=s.data,n===sh&&oh?null:n;default:return null}}function Dw(n,s){if(Wr)return n==="compositionend"||!tu&&ah(n,s)?(n=Zf(),No=Yl=An=null,Wr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ih&&s.locale!=="ko"?null:s.data;default:return null}}var Mw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uh(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!Mw[n.type]:s==="textarea"}function ch(n,s,a,u){xf(u),s=Mo(s,"onChange"),0<s.length&&(a=new Ql("onChange","change",null,a,u),n.push({event:a,listeners:s}))}var Qi=null,Ji=null;function Fw(n){Nh(n,0)}function Ao(n){var s=qr(n);if(yf(s))return n}function Uw(n,s){if(n==="change")return s}var dh=!1;if(f){var nu;if(f){var ru="oninput"in document;if(!ru){var fh=document.createElement("div");fh.setAttribute("oninput","return;"),ru=typeof fh.oninput=="function"}nu=ru}else nu=!1;dh=nu&&(!document.documentMode||9<document.documentMode)}function hh(){Qi&&(Qi.detachEvent("onpropertychange",ph),Ji=Qi=null)}function ph(n){if(n.propertyName==="value"&&Ao(Ji)){var s=[];ch(s,Ji,n,Ml(n)),bf(Fw,s)}}function jw(n,s,a){n==="focusin"?(hh(),Qi=s,Ji=a,Qi.attachEvent("onpropertychange",ph)):n==="focusout"&&hh()}function $w(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ao(Ji)}function zw(n,s){if(n==="click")return Ao(s)}function Vw(n,s){if(n==="input"||n==="change")return Ao(s)}function Ww(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var jt=typeof Object.is=="function"?Object.is:Ww;function Xi(n,s){if(jt(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),u=Object.keys(s);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(s,d)||!jt(n[d],s[d]))return!1}return!0}function gh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function mh(n,s){var a=gh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=s&&u>=s)return{node:a,offset:s-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gh(a)}}function _h(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?_h(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function yh(){for(var n=window,s=go();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=go(n.document)}return s}function iu(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function Bw(n){var s=yh(),a=n.focusedElem,u=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&_h(a.ownerDocument.documentElement,a)){if(u!==null&&iu(a)){if(s=u.start,n=u.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!n.extend&&p>u&&(d=u,u=p,p=d),d=mh(a,p);var m=mh(a,u);d&&m&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==m.node||n.focusOffset!==m.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),n.removeAllRanges(),p>u?(n.addRange(s),n.extend(m.node,m.offset)):(s.setEnd(m.node,m.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Hw=f&&"documentMode"in document&&11>=document.documentMode,Br=null,su=null,Zi=null,ou=!1;function vh(n,s,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ou||Br==null||Br!==go(u)||(u=Br,"selectionStart"in u&&iu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Zi&&Xi(Zi,u)||(Zi=u,u=Mo(su,"onSelect"),0<u.length&&(s=new Ql("onSelect","select",null,s,a),n.push({event:s,listeners:u}),s.target=Br)))}function Lo(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var Hr={animationend:Lo("Animation","AnimationEnd"),animationiteration:Lo("Animation","AnimationIteration"),animationstart:Lo("Animation","AnimationStart"),transitionend:Lo("Transition","TransitionEnd")},au={},wh={};f&&(wh=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function bo(n){if(au[n])return au[n];if(!Hr[n])return n;var s=Hr[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in wh)return au[n]=s[a];return n}var Eh=bo("animationend"),Sh=bo("animationiteration"),Ch=bo("animationstart"),Ih=bo("transitionend"),Th=new Map,kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(n,s){Th.set(n,s),l(s,[n])}for(var lu=0;lu<kh.length;lu++){var uu=kh[lu],Kw=uu.toLowerCase(),Gw=uu[0].toUpperCase()+uu.slice(1);Ln(Kw,"on"+Gw)}Ln(Eh,"onAnimationEnd"),Ln(Sh,"onAnimationIteration"),Ln(Ch,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(Ih,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var es="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qw=new Set("cancel close invalid load scroll toggle".split(" ").concat(es));function Rh(n,s,a){var u=n.type||"unknown-event";n.currentTarget=a,Kv(u,s,void 0,n),n.currentTarget=null}function Nh(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var p=void 0;if(s)for(var m=u.length-1;0<=m;m--){var w=u[m],E=w.instance,P=w.currentTarget;if(w=w.listener,E!==p&&d.isPropagationStopped())break e;Rh(d,w,P),p=E}else for(m=0;m<u.length;m++){if(w=u[m],E=w.instance,P=w.currentTarget,w=w.listener,E!==p&&d.isPropagationStopped())break e;Rh(d,w,P),p=E}}}if(yo)throw n=$l,yo=!1,$l=null,n}function xe(n,s){var a=s[_u];a===void 0&&(a=s[_u]=new Set);var u=n+"__bubble";a.has(u)||(Ph(s,n,2,!1),a.add(u))}function cu(n,s,a){var u=0;s&&(u|=4),Ph(a,n,u,s)}var Do="_reactListening"+Math.random().toString(36).slice(2);function ts(n){if(!n[Do]){n[Do]=!0,i.forEach(function(a){a!=="selectionchange"&&(qw.has(a)||cu(a,!1,n),cu(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Do]||(s[Do]=!0,cu("selectionchange",!1,s))}}function Ph(n,s,a,u){switch(Xf(s)){case 1:var d=lw;break;case 4:d=uw;break;default:d=Gl}a=d.bind(null,s,a,n),d=void 0,!jl||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(s,a,{capture:!0,passive:d}):n.addEventListener(s,a,!0):d!==void 0?n.addEventListener(s,a,{passive:d}):n.addEventListener(s,a,!1)}function du(n,s,a,u,d){var p=u;if(!(s&1)&&!(s&2)&&u!==null)e:for(;;){if(u===null)return;var m=u.tag;if(m===3||m===4){var w=u.stateNode.containerInfo;if(w===d||w.nodeType===8&&w.parentNode===d)break;if(m===4)for(m=u.return;m!==null;){var E=m.tag;if((E===3||E===4)&&(E=m.stateNode.containerInfo,E===d||E.nodeType===8&&E.parentNode===d))return;m=m.return}for(;w!==null;){if(m=dr(w),m===null)return;if(E=m.tag,E===5||E===6){u=p=m;continue e}w=w.parentNode}}u=u.return}bf(function(){var P=p,L=Ml(a),b=[];e:{var A=Th.get(n);if(A!==void 0){var V=Ql,G=n;switch(n){case"keypress":if(Po(a)===0)break e;case"keydown":case"keyup":V=Iw;break;case"focusin":G="focus",V=Zl;break;case"focusout":G="blur",V=Zl;break;case"beforeblur":case"afterblur":V=Zl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=fw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Rw;break;case Eh:case Sh:case Ch:V=gw;break;case Ih:V=Pw;break;case"scroll":V=cw;break;case"wheel":V=Ow;break;case"copy":case"cut":case"paste":V=_w;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=rh}var Y=(s&4)!==0,Ve=!Y&&n==="scroll",T=Y?A!==null?A+"Capture":null:A;Y=[];for(var S=P,R;S!==null;){R=S;var D=R.stateNode;if(R.tag===5&&D!==null&&(R=D,T!==null&&(D=Fi(S,T),D!=null&&Y.push(ns(S,D,R)))),Ve)break;S=S.return}0<Y.length&&(A=new V(A,G,null,a,L),b.push({event:A,listeners:Y}))}}if(!(s&7)){e:{if(A=n==="mouseover"||n==="pointerover",V=n==="mouseout"||n==="pointerout",A&&a!==Dl&&(G=a.relatedTarget||a.fromElement)&&(dr(G)||G[un]))break e;if((V||A)&&(A=L.window===L?L:(A=L.ownerDocument)?A.defaultView||A.parentWindow:window,V?(G=a.relatedTarget||a.toElement,V=P,G=G?dr(G):null,G!==null&&(Ve=cr(G),G!==Ve||G.tag!==5&&G.tag!==6)&&(G=null)):(V=null,G=P),V!==G)){if(Y=th,D="onMouseLeave",T="onMouseEnter",S="mouse",(n==="pointerout"||n==="pointerover")&&(Y=rh,D="onPointerLeave",T="onPointerEnter",S="pointer"),Ve=V==null?A:qr(V),R=G==null?A:qr(G),A=new Y(D,S+"leave",V,a,L),A.target=Ve,A.relatedTarget=R,D=null,dr(L)===P&&(Y=new Y(T,S+"enter",G,a,L),Y.target=R,Y.relatedTarget=Ve,D=Y),Ve=D,V&&G)t:{for(Y=V,T=G,S=0,R=Y;R;R=Kr(R))S++;for(R=0,D=T;D;D=Kr(D))R++;for(;0<S-R;)Y=Kr(Y),S--;for(;0<R-S;)T=Kr(T),R--;for(;S--;){if(Y===T||T!==null&&Y===T.alternate)break t;Y=Kr(Y),T=Kr(T)}Y=null}else Y=null;V!==null&&xh(b,A,V,Y,!1),G!==null&&Ve!==null&&xh(b,Ve,G,Y,!0)}}e:{if(A=P?qr(P):window,V=A.nodeName&&A.nodeName.toLowerCase(),V==="select"||V==="input"&&A.type==="file")var Q=Uw;else if(uh(A))if(dh)Q=Vw;else{Q=$w;var X=jw}else(V=A.nodeName)&&V.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(Q=zw);if(Q&&(Q=Q(n,P))){ch(b,Q,a,L);break e}X&&X(n,A,P),n==="focusout"&&(X=A._wrapperState)&&X.controlled&&A.type==="number"&&xl(A,"number",A.value)}switch(X=P?qr(P):window,n){case"focusin":(uh(X)||X.contentEditable==="true")&&(Br=X,su=P,Zi=null);break;case"focusout":Zi=su=Br=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,vh(b,a,L);break;case"selectionchange":if(Hw)break;case"keydown":case"keyup":vh(b,a,L)}var Z;if(tu)e:{switch(n){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else Wr?ah(n,a)&&(ne="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ne="onCompositionStart");ne&&(ih&&a.locale!=="ko"&&(Wr||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Wr&&(Z=Zf()):(An=L,Yl="value"in An?An.value:An.textContent,Wr=!0)),X=Mo(P,ne),0<X.length&&(ne=new nh(ne,n,null,a,L),b.push({event:ne,listeners:X}),Z?ne.data=Z:(Z=lh(a),Z!==null&&(ne.data=Z)))),(Z=Lw?bw(n,a):Dw(n,a))&&(P=Mo(P,"onBeforeInput"),0<P.length&&(L=new nh("onBeforeInput","beforeinput",null,a,L),b.push({event:L,listeners:P}),L.data=Z))}Nh(b,s)})}function ns(n,s,a){return{instance:n,listener:s,currentTarget:a}}function Mo(n,s){for(var a=s+"Capture",u=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Fi(n,a),p!=null&&u.unshift(ns(n,p,d)),p=Fi(n,s),p!=null&&u.push(ns(n,p,d))),n=n.return}return u}function Kr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function xh(n,s,a,u,d){for(var p=s._reactName,m=[];a!==null&&a!==u;){var w=a,E=w.alternate,P=w.stateNode;if(E!==null&&E===u)break;w.tag===5&&P!==null&&(w=P,d?(E=Fi(a,p),E!=null&&m.unshift(ns(a,E,w))):d||(E=Fi(a,p),E!=null&&m.push(ns(a,E,w)))),a=a.return}m.length!==0&&n.push({event:s,listeners:m})}var Yw=/\r\n?/g,Qw=/\u0000|\uFFFD/g;function Oh(n){return(typeof n=="string"?n:""+n).replace(Yw,`
`).replace(Qw,"")}function Fo(n,s,a){if(s=Oh(s),Oh(n)!==s&&a)throw Error(t(425))}function Uo(){}var fu=null,hu=null;function pu(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var gu=typeof setTimeout=="function"?setTimeout:void 0,Jw=typeof clearTimeout=="function"?clearTimeout:void 0,Ah=typeof Promise=="function"?Promise:void 0,Xw=typeof queueMicrotask=="function"?queueMicrotask:typeof Ah<"u"?function(n){return Ah.resolve(null).then(n).catch(Zw)}:gu;function Zw(n){setTimeout(function(){throw n})}function mu(n,s){var a=s,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),Ki(s);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);Ki(s)}function bn(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Lh(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),Qt="__reactFiber$"+Gr,rs="__reactProps$"+Gr,un="__reactContainer$"+Gr,_u="__reactEvents$"+Gr,eE="__reactListeners$"+Gr,tE="__reactHandles$"+Gr;function dr(n){var s=n[Qt];if(s)return s;for(var a=n.parentNode;a;){if(s=a[un]||a[Qt]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=Lh(n);n!==null;){if(a=n[Qt])return a;n=Lh(n)}return s}n=a,a=n.parentNode}return null}function is(n){return n=n[Qt]||n[un],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function qr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function jo(n){return n[rs]||null}var yu=[],Yr=-1;function Dn(n){return{current:n}}function Oe(n){0>Yr||(n.current=yu[Yr],yu[Yr]=null,Yr--)}function Re(n,s){Yr++,yu[Yr]=n.current,n.current=s}var Mn={},lt=Dn(Mn),yt=Dn(!1),fr=Mn;function Qr(n,s){var a=n.type.contextTypes;if(!a)return Mn;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===s)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=s[p];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=d),d}function vt(n){return n=n.childContextTypes,n!=null}function $o(){Oe(yt),Oe(lt)}function bh(n,s,a){if(lt.current!==Mn)throw Error(t(168));Re(lt,s),Re(yt,a)}function Dh(n,s,a){var u=n.stateNode;if(s=s.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in s))throw Error(t(108,ke(n)||"Unknown",d));return z({},a,u)}function zo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Mn,fr=lt.current,Re(lt,n),Re(yt,yt.current),!0}function Mh(n,s,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Dh(n,s,fr),u.__reactInternalMemoizedMergedChildContext=n,Oe(yt),Oe(lt),Re(lt,n)):Oe(yt),Re(yt,a)}var cn=null,Vo=!1,vu=!1;function Fh(n){cn===null?cn=[n]:cn.push(n)}function nE(n){Vo=!0,Fh(n)}function Fn(){if(!vu&&cn!==null){vu=!0;var n=0,s=Ee;try{var a=cn;for(Ee=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}cn=null,Vo=!1}catch(d){throw cn!==null&&(cn=cn.slice(n+1)),jf(zl,Fn),d}finally{Ee=s,vu=!1}}return null}var Jr=[],Xr=0,Wo=null,Bo=0,xt=[],Ot=0,hr=null,dn=1,fn="";function pr(n,s){Jr[Xr++]=Bo,Jr[Xr++]=Wo,Wo=n,Bo=s}function Uh(n,s,a){xt[Ot++]=dn,xt[Ot++]=fn,xt[Ot++]=hr,hr=n;var u=dn;n=fn;var d=32-Ut(u)-1;u&=~(1<<d),a+=1;var p=32-Ut(s)+d;if(30<p){var m=d-d%5;p=(u&(1<<m)-1).toString(32),u>>=m,d-=m,dn=1<<32-Ut(s)+d|a<<d|u,fn=p+n}else dn=1<<p|a<<d|u,fn=n}function wu(n){n.return!==null&&(pr(n,1),Uh(n,1,0))}function Eu(n){for(;n===Wo;)Wo=Jr[--Xr],Jr[Xr]=null,Bo=Jr[--Xr],Jr[Xr]=null;for(;n===hr;)hr=xt[--Ot],xt[Ot]=null,fn=xt[--Ot],xt[Ot]=null,dn=xt[--Ot],xt[Ot]=null}var Rt=null,Nt=null,Le=!1,$t=null;function jh(n,s){var a=Dt(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function $h(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,Rt=n,Nt=bn(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,Rt=n,Nt=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=hr!==null?{id:dn,overflow:fn}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Dt(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,Rt=n,Nt=null,!0):!1;default:return!1}}function Su(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Cu(n){if(Le){var s=Nt;if(s){var a=s;if(!$h(n,s)){if(Su(n))throw Error(t(418));s=bn(a.nextSibling);var u=Rt;s&&$h(n,s)?jh(u,a):(n.flags=n.flags&-4097|2,Le=!1,Rt=n)}}else{if(Su(n))throw Error(t(418));n.flags=n.flags&-4097|2,Le=!1,Rt=n}}}function zh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Rt=n}function Ho(n){if(n!==Rt)return!1;if(!Le)return zh(n),Le=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!pu(n.type,n.memoizedProps)),s&&(s=Nt)){if(Su(n))throw Vh(),Error(t(418));for(;s;)jh(n,s),s=bn(s.nextSibling)}if(zh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){Nt=bn(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}Nt=null}}else Nt=Rt?bn(n.stateNode.nextSibling):null;return!0}function Vh(){for(var n=Nt;n;)n=bn(n.nextSibling)}function Zr(){Nt=Rt=null,Le=!1}function Iu(n){$t===null?$t=[n]:$t.push(n)}var rE=K.ReactCurrentBatchConfig;function ss(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,p=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===p?s.ref:(s=function(m){var w=d.refs;m===null?delete w[p]:w[p]=m},s._stringRef=p,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ko(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function Wh(n){var s=n._init;return s(n._payload)}function Bh(n){function s(T,S){if(n){var R=T.deletions;R===null?(T.deletions=[S],T.flags|=16):R.push(S)}}function a(T,S){if(!n)return null;for(;S!==null;)s(T,S),S=S.sibling;return null}function u(T,S){for(T=new Map;S!==null;)S.key!==null?T.set(S.key,S):T.set(S.index,S),S=S.sibling;return T}function d(T,S){return T=Hn(T,S),T.index=0,T.sibling=null,T}function p(T,S,R){return T.index=R,n?(R=T.alternate,R!==null?(R=R.index,R<S?(T.flags|=2,S):R):(T.flags|=2,S)):(T.flags|=1048576,S)}function m(T){return n&&T.alternate===null&&(T.flags|=2),T}function w(T,S,R,D){return S===null||S.tag!==6?(S=gc(R,T.mode,D),S.return=T,S):(S=d(S,R),S.return=T,S)}function E(T,S,R,D){var Q=R.type;return Q===ie?L(T,S,R.props.children,D,R.key):S!==null&&(S.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Be&&Wh(Q)===S.type)?(D=d(S,R.props),D.ref=ss(T,S,R),D.return=T,D):(D=ma(R.type,R.key,R.props,null,T.mode,D),D.ref=ss(T,S,R),D.return=T,D)}function P(T,S,R,D){return S===null||S.tag!==4||S.stateNode.containerInfo!==R.containerInfo||S.stateNode.implementation!==R.implementation?(S=mc(R,T.mode,D),S.return=T,S):(S=d(S,R.children||[]),S.return=T,S)}function L(T,S,R,D,Q){return S===null||S.tag!==7?(S=Sr(R,T.mode,D,Q),S.return=T,S):(S=d(S,R),S.return=T,S)}function b(T,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return S=gc(""+S,T.mode,R),S.return=T,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case le:return R=ma(S.type,S.key,S.props,null,T.mode,R),R.ref=ss(T,null,S),R.return=T,R;case de:return S=mc(S,T.mode,R),S.return=T,S;case Be:var D=S._init;return b(T,D(S._payload),R)}if(bi(S)||q(S))return S=Sr(S,T.mode,R,null),S.return=T,S;Ko(T,S)}return null}function A(T,S,R,D){var Q=S!==null?S.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return Q!==null?null:w(T,S,""+R,D);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case le:return R.key===Q?E(T,S,R,D):null;case de:return R.key===Q?P(T,S,R,D):null;case Be:return Q=R._init,A(T,S,Q(R._payload),D)}if(bi(R)||q(R))return Q!==null?null:L(T,S,R,D,null);Ko(T,R)}return null}function V(T,S,R,D,Q){if(typeof D=="string"&&D!==""||typeof D=="number")return T=T.get(R)||null,w(S,T,""+D,Q);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case le:return T=T.get(D.key===null?R:D.key)||null,E(S,T,D,Q);case de:return T=T.get(D.key===null?R:D.key)||null,P(S,T,D,Q);case Be:var X=D._init;return V(T,S,R,X(D._payload),Q)}if(bi(D)||q(D))return T=T.get(R)||null,L(S,T,D,Q,null);Ko(S,D)}return null}function G(T,S,R,D){for(var Q=null,X=null,Z=S,ne=S=0,Ze=null;Z!==null&&ne<R.length;ne++){Z.index>ne?(Ze=Z,Z=null):Ze=Z.sibling;var me=A(T,Z,R[ne],D);if(me===null){Z===null&&(Z=Ze);break}n&&Z&&me.alternate===null&&s(T,Z),S=p(me,S,ne),X===null?Q=me:X.sibling=me,X=me,Z=Ze}if(ne===R.length)return a(T,Z),Le&&pr(T,ne),Q;if(Z===null){for(;ne<R.length;ne++)Z=b(T,R[ne],D),Z!==null&&(S=p(Z,S,ne),X===null?Q=Z:X.sibling=Z,X=Z);return Le&&pr(T,ne),Q}for(Z=u(T,Z);ne<R.length;ne++)Ze=V(Z,T,ne,R[ne],D),Ze!==null&&(n&&Ze.alternate!==null&&Z.delete(Ze.key===null?ne:Ze.key),S=p(Ze,S,ne),X===null?Q=Ze:X.sibling=Ze,X=Ze);return n&&Z.forEach(function(Kn){return s(T,Kn)}),Le&&pr(T,ne),Q}function Y(T,S,R,D){var Q=q(R);if(typeof Q!="function")throw Error(t(150));if(R=Q.call(R),R==null)throw Error(t(151));for(var X=Q=null,Z=S,ne=S=0,Ze=null,me=R.next();Z!==null&&!me.done;ne++,me=R.next()){Z.index>ne?(Ze=Z,Z=null):Ze=Z.sibling;var Kn=A(T,Z,me.value,D);if(Kn===null){Z===null&&(Z=Ze);break}n&&Z&&Kn.alternate===null&&s(T,Z),S=p(Kn,S,ne),X===null?Q=Kn:X.sibling=Kn,X=Kn,Z=Ze}if(me.done)return a(T,Z),Le&&pr(T,ne),Q;if(Z===null){for(;!me.done;ne++,me=R.next())me=b(T,me.value,D),me!==null&&(S=p(me,S,ne),X===null?Q=me:X.sibling=me,X=me);return Le&&pr(T,ne),Q}for(Z=u(T,Z);!me.done;ne++,me=R.next())me=V(Z,T,ne,me.value,D),me!==null&&(n&&me.alternate!==null&&Z.delete(me.key===null?ne:me.key),S=p(me,S,ne),X===null?Q=me:X.sibling=me,X=me);return n&&Z.forEach(function(DE){return s(T,DE)}),Le&&pr(T,ne),Q}function Ve(T,S,R,D){if(typeof R=="object"&&R!==null&&R.type===ie&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case le:e:{for(var Q=R.key,X=S;X!==null;){if(X.key===Q){if(Q=R.type,Q===ie){if(X.tag===7){a(T,X.sibling),S=d(X,R.props.children),S.return=T,T=S;break e}}else if(X.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Be&&Wh(Q)===X.type){a(T,X.sibling),S=d(X,R.props),S.ref=ss(T,X,R),S.return=T,T=S;break e}a(T,X);break}else s(T,X);X=X.sibling}R.type===ie?(S=Sr(R.props.children,T.mode,D,R.key),S.return=T,T=S):(D=ma(R.type,R.key,R.props,null,T.mode,D),D.ref=ss(T,S,R),D.return=T,T=D)}return m(T);case de:e:{for(X=R.key;S!==null;){if(S.key===X)if(S.tag===4&&S.stateNode.containerInfo===R.containerInfo&&S.stateNode.implementation===R.implementation){a(T,S.sibling),S=d(S,R.children||[]),S.return=T,T=S;break e}else{a(T,S);break}else s(T,S);S=S.sibling}S=mc(R,T.mode,D),S.return=T,T=S}return m(T);case Be:return X=R._init,Ve(T,S,X(R._payload),D)}if(bi(R))return G(T,S,R,D);if(q(R))return Y(T,S,R,D);Ko(T,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,S!==null&&S.tag===6?(a(T,S.sibling),S=d(S,R),S.return=T,T=S):(a(T,S),S=gc(R,T.mode,D),S.return=T,T=S),m(T)):a(T,S)}return Ve}var ei=Bh(!0),Hh=Bh(!1),Go=Dn(null),qo=null,ti=null,Tu=null;function ku(){Tu=ti=qo=null}function Ru(n){var s=Go.current;Oe(Go),n._currentValue=s}function Nu(n,s,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===a)break;n=n.return}}function ni(n,s){qo=n,Tu=ti=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&s&&(wt=!0),n.firstContext=null)}function At(n){var s=n._currentValue;if(Tu!==n)if(n={context:n,memoizedValue:s,next:null},ti===null){if(qo===null)throw Error(t(308));ti=n,qo.dependencies={lanes:0,firstContext:n}}else ti=ti.next=n;return s}var gr=null;function Pu(n){gr===null?gr=[n]:gr.push(n)}function Kh(n,s,a,u){var d=s.interleaved;return d===null?(a.next=a,Pu(s)):(a.next=d.next,d.next=a),s.interleaved=a,hn(n,u)}function hn(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Un=!1;function xu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gh(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function pn(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function jn(n,s,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,he&2){var d=u.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s,hn(n,a)}return d=u.interleaved,d===null?(s.next=s,Pu(u)):(s.next=d.next,d.next=s),u.interleaved=s,hn(n,a)}function Yo(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var u=s.lanes;u&=n.pendingLanes,a|=u,s.lanes=a,Bl(n,a)}}function qh(n,s){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var m={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=m:p=p.next=m,a=a.next}while(a!==null);p===null?d=p=s:p=p.next=s}else d=p=s;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function Qo(n,s,a,u){var d=n.updateQueue;Un=!1;var p=d.firstBaseUpdate,m=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var E=w,P=E.next;E.next=null,m===null?p=P:m.next=P,m=E;var L=n.alternate;L!==null&&(L=L.updateQueue,w=L.lastBaseUpdate,w!==m&&(w===null?L.firstBaseUpdate=P:w.next=P,L.lastBaseUpdate=E))}if(p!==null){var b=d.baseState;m=0,L=P=E=null,w=p;do{var A=w.lane,V=w.eventTime;if((u&A)===A){L!==null&&(L=L.next={eventTime:V,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var G=n,Y=w;switch(A=s,V=a,Y.tag){case 1:if(G=Y.payload,typeof G=="function"){b=G.call(V,b,A);break e}b=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=Y.payload,A=typeof G=="function"?G.call(V,b,A):G,A==null)break e;b=z({},b,A);break e;case 2:Un=!0}}w.callback!==null&&w.lane!==0&&(n.flags|=64,A=d.effects,A===null?d.effects=[w]:A.push(w))}else V={eventTime:V,lane:A,tag:w.tag,payload:w.payload,callback:w.callback,next:null},L===null?(P=L=V,E=b):L=L.next=V,m|=A;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;A=w,w=A.next,A.next=null,d.lastBaseUpdate=A,d.shared.pending=null}}while(!0);if(L===null&&(E=b),d.baseState=E,d.firstBaseUpdate=P,d.lastBaseUpdate=L,s=d.shared.interleaved,s!==null){d=s;do m|=d.lane,d=d.next;while(d!==s)}else p===null&&(d.shared.lanes=0);yr|=m,n.lanes=m,n.memoizedState=b}}function Yh(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var u=n[s],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var os={},Jt=Dn(os),as=Dn(os),ls=Dn(os);function mr(n){if(n===os)throw Error(t(174));return n}function Ou(n,s){switch(Re(ls,s),Re(as,n),Re(Jt,os),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Al(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=Al(s,n)}Oe(Jt),Re(Jt,s)}function ri(){Oe(Jt),Oe(as),Oe(ls)}function Qh(n){mr(ls.current);var s=mr(Jt.current),a=Al(s,n.type);s!==a&&(Re(as,n),Re(Jt,a))}function Au(n){as.current===n&&(Oe(Jt),Oe(as))}var be=Dn(0);function Jo(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Lu=[];function bu(){for(var n=0;n<Lu.length;n++)Lu[n]._workInProgressVersionPrimary=null;Lu.length=0}var Xo=K.ReactCurrentDispatcher,Du=K.ReactCurrentBatchConfig,_r=0,De=null,Ge=null,Je=null,Zo=!1,us=!1,cs=0,iE=0;function ut(){throw Error(t(321))}function Mu(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!jt(n[a],s[a]))return!1;return!0}function Fu(n,s,a,u,d,p){if(_r=p,De=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Xo.current=n===null||n.memoizedState===null?lE:uE,n=a(u,d),us){p=0;do{if(us=!1,cs=0,25<=p)throw Error(t(301));p+=1,Je=Ge=null,s.updateQueue=null,Xo.current=cE,n=a(u,d)}while(us)}if(Xo.current=na,s=Ge!==null&&Ge.next!==null,_r=0,Je=Ge=De=null,Zo=!1,s)throw Error(t(300));return n}function Uu(){var n=cs!==0;return cs=0,n}function Xt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?De.memoizedState=Je=n:Je=Je.next=n,Je}function Lt(){if(Ge===null){var n=De.alternate;n=n!==null?n.memoizedState:null}else n=Ge.next;var s=Je===null?De.memoizedState:Je.next;if(s!==null)Je=s,Ge=n;else{if(n===null)throw Error(t(310));Ge=n,n={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Je===null?De.memoizedState=Je=n:Je=Je.next=n}return Je}function ds(n,s){return typeof s=="function"?s(n):s}function ju(n){var s=Lt(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Ge,d=u.baseQueue,p=a.pending;if(p!==null){if(d!==null){var m=d.next;d.next=p.next,p.next=m}u.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,u=u.baseState;var w=m=null,E=null,P=p;do{var L=P.lane;if((_r&L)===L)E!==null&&(E=E.next={lane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),u=P.hasEagerState?P.eagerState:n(u,P.action);else{var b={lane:L,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null};E===null?(w=E=b,m=u):E=E.next=b,De.lanes|=L,yr|=L}P=P.next}while(P!==null&&P!==p);E===null?m=u:E.next=w,jt(u,s.memoizedState)||(wt=!0),s.memoizedState=u,s.baseState=m,s.baseQueue=E,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do p=d.lane,De.lanes|=p,yr|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function $u(n){var s=Lt(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,p=s.memoizedState;if(d!==null){a.pending=null;var m=d=d.next;do p=n(p,m.action),m=m.next;while(m!==d);jt(p,s.memoizedState)||(wt=!0),s.memoizedState=p,s.baseQueue===null&&(s.baseState=p),a.lastRenderedState=p}return[p,u]}function Jh(){}function Xh(n,s){var a=De,u=Lt(),d=s(),p=!jt(u.memoizedState,d);if(p&&(u.memoizedState=d,wt=!0),u=u.queue,zu(tp.bind(null,a,u,n),[n]),u.getSnapshot!==s||p||Je!==null&&Je.memoizedState.tag&1){if(a.flags|=2048,fs(9,ep.bind(null,a,u,d,s),void 0,null),Xe===null)throw Error(t(349));_r&30||Zh(a,s,d)}return d}function Zh(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=De.updateQueue,s===null?(s={lastEffect:null,stores:null},De.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function ep(n,s,a,u){s.value=a,s.getSnapshot=u,np(s)&&rp(n)}function tp(n,s,a){return a(function(){np(s)&&rp(n)})}function np(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!jt(n,a)}catch{return!0}}function rp(n){var s=hn(n,1);s!==null&&Bt(s,n,1,-1)}function ip(n){var s=Xt();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:n},s.queue=n,n=n.dispatch=aE.bind(null,De,n),[s.memoizedState,n]}function fs(n,s,a,u){return n={tag:n,create:s,destroy:a,deps:u,next:null},s=De.updateQueue,s===null?(s={lastEffect:null,stores:null},De.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,s.lastEffect=n)),n}function sp(){return Lt().memoizedState}function ea(n,s,a,u){var d=Xt();De.flags|=n,d.memoizedState=fs(1|s,a,void 0,u===void 0?null:u)}function ta(n,s,a,u){var d=Lt();u=u===void 0?null:u;var p=void 0;if(Ge!==null){var m=Ge.memoizedState;if(p=m.destroy,u!==null&&Mu(u,m.deps)){d.memoizedState=fs(s,a,p,u);return}}De.flags|=n,d.memoizedState=fs(1|s,a,p,u)}function op(n,s){return ea(8390656,8,n,s)}function zu(n,s){return ta(2048,8,n,s)}function ap(n,s){return ta(4,2,n,s)}function lp(n,s){return ta(4,4,n,s)}function up(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function cp(n,s,a){return a=a!=null?a.concat([n]):null,ta(4,4,up.bind(null,s,n),a)}function Vu(){}function dp(n,s){var a=Lt();s=s===void 0?null:s;var u=a.memoizedState;return u!==null&&s!==null&&Mu(s,u[1])?u[0]:(a.memoizedState=[n,s],n)}function fp(n,s){var a=Lt();s=s===void 0?null:s;var u=a.memoizedState;return u!==null&&s!==null&&Mu(s,u[1])?u[0]:(n=n(),a.memoizedState=[n,s],n)}function hp(n,s,a){return _r&21?(jt(a,s)||(a=Wf(),De.lanes|=a,yr|=a,n.baseState=!0),s):(n.baseState&&(n.baseState=!1,wt=!0),n.memoizedState=a)}function sE(n,s){var a=Ee;Ee=a!==0&&4>a?a:4,n(!0);var u=Du.transition;Du.transition={};try{n(!1),s()}finally{Ee=a,Du.transition=u}}function pp(){return Lt().memoizedState}function oE(n,s,a){var u=Wn(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},gp(n))mp(s,a);else if(a=Kh(n,s,a,u),a!==null){var d=pt();Bt(a,n,u,d),_p(a,s,u)}}function aE(n,s,a){var u=Wn(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(gp(n))mp(s,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=s.lastRenderedReducer,p!==null))try{var m=s.lastRenderedState,w=p(m,a);if(d.hasEagerState=!0,d.eagerState=w,jt(w,m)){var E=s.interleaved;E===null?(d.next=d,Pu(s)):(d.next=E.next,E.next=d),s.interleaved=d;return}}catch{}finally{}a=Kh(n,s,d,u),a!==null&&(d=pt(),Bt(a,n,u,d),_p(a,s,u))}}function gp(n){var s=n.alternate;return n===De||s!==null&&s===De}function mp(n,s){us=Zo=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function _p(n,s,a){if(a&4194240){var u=s.lanes;u&=n.pendingLanes,a|=u,s.lanes=a,Bl(n,a)}}var na={readContext:At,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},lE={readContext:At,useCallback:function(n,s){return Xt().memoizedState=[n,s===void 0?null:s],n},useContext:At,useEffect:op,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,ea(4194308,4,up.bind(null,s,n),a)},useLayoutEffect:function(n,s){return ea(4194308,4,n,s)},useInsertionEffect:function(n,s){return ea(4,2,n,s)},useMemo:function(n,s){var a=Xt();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var u=Xt();return s=a!==void 0?a(s):s,u.memoizedState=u.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},u.queue=n,n=n.dispatch=oE.bind(null,De,n),[u.memoizedState,n]},useRef:function(n){var s=Xt();return n={current:n},s.memoizedState=n},useState:ip,useDebugValue:Vu,useDeferredValue:function(n){return Xt().memoizedState=n},useTransition:function(){var n=ip(!1),s=n[0];return n=sE.bind(null,n[1]),Xt().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var u=De,d=Xt();if(Le){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Xe===null)throw Error(t(349));_r&30||Zh(u,s,a)}d.memoizedState=a;var p={value:a,getSnapshot:s};return d.queue=p,op(tp.bind(null,u,p,n),[n]),u.flags|=2048,fs(9,ep.bind(null,u,p,a,s),void 0,null),a},useId:function(){var n=Xt(),s=Xe.identifierPrefix;if(Le){var a=fn,u=dn;a=(u&~(1<<32-Ut(u)-1)).toString(32)+a,s=":"+s+"R"+a,a=cs++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=iE++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},uE={readContext:At,useCallback:dp,useContext:At,useEffect:zu,useImperativeHandle:cp,useInsertionEffect:ap,useLayoutEffect:lp,useMemo:fp,useReducer:ju,useRef:sp,useState:function(){return ju(ds)},useDebugValue:Vu,useDeferredValue:function(n){var s=Lt();return hp(s,Ge.memoizedState,n)},useTransition:function(){var n=ju(ds)[0],s=Lt().memoizedState;return[n,s]},useMutableSource:Jh,useSyncExternalStore:Xh,useId:pp,unstable_isNewReconciler:!1},cE={readContext:At,useCallback:dp,useContext:At,useEffect:zu,useImperativeHandle:cp,useInsertionEffect:ap,useLayoutEffect:lp,useMemo:fp,useReducer:$u,useRef:sp,useState:function(){return $u(ds)},useDebugValue:Vu,useDeferredValue:function(n){var s=Lt();return Ge===null?s.memoizedState=n:hp(s,Ge.memoizedState,n)},useTransition:function(){var n=$u(ds)[0],s=Lt().memoizedState;return[n,s]},useMutableSource:Jh,useSyncExternalStore:Xh,useId:pp,unstable_isNewReconciler:!1};function zt(n,s){if(n&&n.defaultProps){s=z({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function Wu(n,s,a,u){s=n.memoizedState,a=a(u,s),a=a==null?s:z({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ra={isMounted:function(n){return(n=n._reactInternals)?cr(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var u=pt(),d=Wn(n),p=pn(u,d);p.payload=s,a!=null&&(p.callback=a),s=jn(n,p,d),s!==null&&(Bt(s,n,d,u),Yo(s,n,d))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var u=pt(),d=Wn(n),p=pn(u,d);p.tag=1,p.payload=s,a!=null&&(p.callback=a),s=jn(n,p,d),s!==null&&(Bt(s,n,d,u),Yo(s,n,d))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=pt(),u=Wn(n),d=pn(a,u);d.tag=2,s!=null&&(d.callback=s),s=jn(n,d,u),s!==null&&(Bt(s,n,u,a),Yo(s,n,u))}};function yp(n,s,a,u,d,p,m){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,m):s.prototype&&s.prototype.isPureReactComponent?!Xi(a,u)||!Xi(d,p):!0}function vp(n,s,a){var u=!1,d=Mn,p=s.contextType;return typeof p=="object"&&p!==null?p=At(p):(d=vt(s)?fr:lt.current,u=s.contextTypes,p=(u=u!=null)?Qr(n,d):Mn),s=new s(a,p),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ra,n.stateNode=s,s._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),s}function wp(n,s,a,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,u),s.state!==n&&ra.enqueueReplaceState(s,s.state,null)}function Bu(n,s,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},xu(n);var p=s.contextType;typeof p=="object"&&p!==null?d.context=At(p):(p=vt(s)?fr:lt.current,d.context=Qr(n,p)),d.state=n.memoizedState,p=s.getDerivedStateFromProps,typeof p=="function"&&(Wu(n,s,p,a),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&ra.enqueueReplaceState(d,d.state,null),Qo(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ii(n,s){try{var a="",u=s;do a+=pe(u),u=u.return;while(u);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:s,stack:d,digest:null}}function Hu(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function Ku(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var dE=typeof WeakMap=="function"?WeakMap:Map;function Ep(n,s,a){a=pn(-1,a),a.tag=3,a.payload={element:null};var u=s.value;return a.callback=function(){ca||(ca=!0,ac=u),Ku(n,s)},a}function Sp(n,s,a){a=pn(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=s.value;a.payload=function(){return u(d)},a.callback=function(){Ku(n,s)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Ku(n,s),typeof u!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var m=s.stack;this.componentDidCatch(s.value,{componentStack:m!==null?m:""})}),a}function Cp(n,s,a){var u=n.pingCache;if(u===null){u=n.pingCache=new dE;var d=new Set;u.set(s,d)}else d=u.get(s),d===void 0&&(d=new Set,u.set(s,d));d.has(a)||(d.add(a),n=TE.bind(null,n,s,a),s.then(n,n))}function Ip(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Tp(n,s,a,u,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=pn(-1,1),s.tag=2,jn(a,s,1))),a.lanes|=1),n)}var fE=K.ReactCurrentOwner,wt=!1;function ht(n,s,a,u){s.child=n===null?Hh(s,null,a,u):ei(s,n.child,a,u)}function kp(n,s,a,u,d){a=a.render;var p=s.ref;return ni(s,d),u=Fu(n,s,a,u,p,d),a=Uu(),n!==null&&!wt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,gn(n,s,d)):(Le&&a&&wu(s),s.flags|=1,ht(n,s,u,d),s.child)}function Rp(n,s,a,u,d){if(n===null){var p=a.type;return typeof p=="function"&&!pc(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=p,Np(n,s,p,u,d)):(n=ma(a.type,null,u,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(p=n.child,!(n.lanes&d)){var m=p.memoizedProps;if(a=a.compare,a=a!==null?a:Xi,a(m,u)&&n.ref===s.ref)return gn(n,s,d)}return s.flags|=1,n=Hn(p,u),n.ref=s.ref,n.return=s,s.child=n}function Np(n,s,a,u,d){if(n!==null){var p=n.memoizedProps;if(Xi(p,u)&&n.ref===s.ref)if(wt=!1,s.pendingProps=u=p,(n.lanes&d)!==0)n.flags&131072&&(wt=!0);else return s.lanes=n.lanes,gn(n,s,d)}return Gu(n,s,a,u,d)}function Pp(n,s,a){var u=s.pendingProps,d=u.children,p=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(oi,Pt),Pt|=a;else{if(!(a&1073741824))return n=p!==null?p.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Re(oi,Pt),Pt|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:a,Re(oi,Pt),Pt|=u}else p!==null?(u=p.baseLanes|a,s.memoizedState=null):u=a,Re(oi,Pt),Pt|=u;return ht(n,s,d,a),s.child}function xp(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Gu(n,s,a,u,d){var p=vt(a)?fr:lt.current;return p=Qr(s,p),ni(s,d),a=Fu(n,s,a,u,p,d),u=Uu(),n!==null&&!wt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,gn(n,s,d)):(Le&&u&&wu(s),s.flags|=1,ht(n,s,a,d),s.child)}function Op(n,s,a,u,d){if(vt(a)){var p=!0;zo(s)}else p=!1;if(ni(s,d),s.stateNode===null)sa(n,s),vp(s,a,u),Bu(s,a,u,d),u=!0;else if(n===null){var m=s.stateNode,w=s.memoizedProps;m.props=w;var E=m.context,P=a.contextType;typeof P=="object"&&P!==null?P=At(P):(P=vt(a)?fr:lt.current,P=Qr(s,P));var L=a.getDerivedStateFromProps,b=typeof L=="function"||typeof m.getSnapshotBeforeUpdate=="function";b||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==u||E!==P)&&wp(s,m,u,P),Un=!1;var A=s.memoizedState;m.state=A,Qo(s,u,m,d),E=s.memoizedState,w!==u||A!==E||yt.current||Un?(typeof L=="function"&&(Wu(s,a,L,u),E=s.memoizedState),(w=Un||yp(s,a,w,u,A,E,P))?(b||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=E),m.props=u,m.state=E,m.context=P,u=w):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{m=s.stateNode,Gh(n,s),w=s.memoizedProps,P=s.type===s.elementType?w:zt(s.type,w),m.props=P,b=s.pendingProps,A=m.context,E=a.contextType,typeof E=="object"&&E!==null?E=At(E):(E=vt(a)?fr:lt.current,E=Qr(s,E));var V=a.getDerivedStateFromProps;(L=typeof V=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==b||A!==E)&&wp(s,m,u,E),Un=!1,A=s.memoizedState,m.state=A,Qo(s,u,m,d);var G=s.memoizedState;w!==b||A!==G||yt.current||Un?(typeof V=="function"&&(Wu(s,a,V,u),G=s.memoizedState),(P=Un||yp(s,a,P,u,A,G,E)||!1)?(L||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,G,E),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,G,E)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||w===n.memoizedProps&&A===n.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&A===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=G),m.props=u,m.state=G,m.context=E,u=P):(typeof m.componentDidUpdate!="function"||w===n.memoizedProps&&A===n.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&A===n.memoizedState||(s.flags|=1024),u=!1)}return qu(n,s,a,u,p,d)}function qu(n,s,a,u,d,p){xp(n,s);var m=(s.flags&128)!==0;if(!u&&!m)return d&&Mh(s,a,!1),gn(n,s,p);u=s.stateNode,fE.current=s;var w=m&&typeof a.getDerivedStateFromError!="function"?null:u.render();return s.flags|=1,n!==null&&m?(s.child=ei(s,n.child,null,p),s.child=ei(s,null,w,p)):ht(n,s,w,p),s.memoizedState=u.state,d&&Mh(s,a,!0),s.child}function Ap(n){var s=n.stateNode;s.pendingContext?bh(n,s.pendingContext,s.pendingContext!==s.context):s.context&&bh(n,s.context,!1),Ou(n,s.containerInfo)}function Lp(n,s,a,u,d){return Zr(),Iu(d),s.flags|=256,ht(n,s,a,u),s.child}var Yu={dehydrated:null,treeContext:null,retryLane:0};function Qu(n){return{baseLanes:n,cachePool:null,transitions:null}}function bp(n,s,a){var u=s.pendingProps,d=be.current,p=!1,m=(s.flags&128)!==0,w;if((w=m)||(w=n!==null&&n.memoizedState===null?!1:(d&2)!==0),w?(p=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Re(be,d&1),n===null)return Cu(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(s.mode&1?n.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(m=u.children,n=u.fallback,p?(u=s.mode,p=s.child,m={mode:"hidden",children:m},!(u&1)&&p!==null?(p.childLanes=0,p.pendingProps=m):p=_a(m,u,0,null),n=Sr(n,u,a,null),p.return=s,n.return=s,p.sibling=n,s.child=p,s.child.memoizedState=Qu(a),s.memoizedState=Yu,n):Ju(s,m));if(d=n.memoizedState,d!==null&&(w=d.dehydrated,w!==null))return hE(n,s,m,u,w,d,a);if(p){p=u.fallback,m=s.mode,d=n.child,w=d.sibling;var E={mode:"hidden",children:u.children};return!(m&1)&&s.child!==d?(u=s.child,u.childLanes=0,u.pendingProps=E,s.deletions=null):(u=Hn(d,E),u.subtreeFlags=d.subtreeFlags&14680064),w!==null?p=Hn(w,p):(p=Sr(p,m,a,null),p.flags|=2),p.return=s,u.return=s,u.sibling=p,s.child=u,u=p,p=s.child,m=n.child.memoizedState,m=m===null?Qu(a):{baseLanes:m.baseLanes|a,cachePool:null,transitions:m.transitions},p.memoizedState=m,p.childLanes=n.childLanes&~a,s.memoizedState=Yu,u}return p=n.child,n=p.sibling,u=Hn(p,{mode:"visible",children:u.children}),!(s.mode&1)&&(u.lanes=a),u.return=s,u.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=u,s.memoizedState=null,u}function Ju(n,s){return s=_a({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function ia(n,s,a,u){return u!==null&&Iu(u),ei(s,n.child,null,a),n=Ju(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function hE(n,s,a,u,d,p,m){if(a)return s.flags&256?(s.flags&=-257,u=Hu(Error(t(422))),ia(n,s,m,u)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(p=u.fallback,d=s.mode,u=_a({mode:"visible",children:u.children},d,0,null),p=Sr(p,d,m,null),p.flags|=2,u.return=s,p.return=s,u.sibling=p,s.child=u,s.mode&1&&ei(s,n.child,null,m),s.child.memoizedState=Qu(m),s.memoizedState=Yu,p);if(!(s.mode&1))return ia(n,s,m,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var w=u.dgst;return u=w,p=Error(t(419)),u=Hu(p,u,void 0),ia(n,s,m,u)}if(w=(m&n.childLanes)!==0,wt||w){if(u=Xe,u!==null){switch(m&-m){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|m)?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,hn(n,d),Bt(u,n,d,-1))}return hc(),u=Hu(Error(t(421))),ia(n,s,m,u)}return d.data==="$?"?(s.flags|=128,s.child=n.child,s=kE.bind(null,n),d._reactRetry=s,null):(n=p.treeContext,Nt=bn(d.nextSibling),Rt=s,Le=!0,$t=null,n!==null&&(xt[Ot++]=dn,xt[Ot++]=fn,xt[Ot++]=hr,dn=n.id,fn=n.overflow,hr=s),s=Ju(s,u.children),s.flags|=4096,s)}function Dp(n,s,a){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),Nu(n.return,s,a)}function Xu(n,s,a,u,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(p.isBackwards=s,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=a,p.tailMode=d)}function Mp(n,s,a){var u=s.pendingProps,d=u.revealOrder,p=u.tail;if(ht(n,s,u.children,a),u=be.current,u&2)u=u&1|2,s.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Dp(n,a,s);else if(n.tag===19)Dp(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Re(be,u),!(s.mode&1))s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)n=a.alternate,n!==null&&Jo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Xu(s,!1,d,a,p);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&Jo(n)===null){s.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Xu(s,!0,a,null,p);break;case"together":Xu(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function sa(n,s){!(s.mode&1)&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function gn(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),yr|=s.lanes,!(a&s.childLanes))return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=Hn(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=Hn(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function pE(n,s,a){switch(s.tag){case 3:Ap(s),Zr();break;case 5:Qh(s);break;case 1:vt(s.type)&&zo(s);break;case 4:Ou(s,s.stateNode.containerInfo);break;case 10:var u=s.type._context,d=s.memoizedProps.value;Re(Go,u._currentValue),u._currentValue=d;break;case 13:if(u=s.memoizedState,u!==null)return u.dehydrated!==null?(Re(be,be.current&1),s.flags|=128,null):a&s.child.childLanes?bp(n,s,a):(Re(be,be.current&1),n=gn(n,s,a),n!==null?n.sibling:null);Re(be,be.current&1);break;case 19:if(u=(a&s.childLanes)!==0,n.flags&128){if(u)return Mp(n,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Re(be,be.current),u)break;return null;case 22:case 23:return s.lanes=0,Pp(n,s,a)}return gn(n,s,a)}var Fp,Zu,Up,jp;Fp=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Zu=function(){},Up=function(n,s,a,u){var d=n.memoizedProps;if(d!==u){n=s.stateNode,mr(Jt.current);var p=null;switch(a){case"input":d=Nl(n,d),u=Nl(n,u),p=[];break;case"select":d=z({},d,{value:void 0}),u=z({},u,{value:void 0}),p=[];break;case"textarea":d=Ol(n,d),u=Ol(n,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Uo)}Ll(a,u);var m;a=null;for(P in d)if(!u.hasOwnProperty(P)&&d.hasOwnProperty(P)&&d[P]!=null)if(P==="style"){var w=d[P];for(m in w)w.hasOwnProperty(m)&&(a||(a={}),a[m]="")}else P!=="dangerouslySetInnerHTML"&&P!=="children"&&P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&P!=="autoFocus"&&(o.hasOwnProperty(P)?p||(p=[]):(p=p||[]).push(P,null));for(P in u){var E=u[P];if(w=d!=null?d[P]:void 0,u.hasOwnProperty(P)&&E!==w&&(E!=null||w!=null))if(P==="style")if(w){for(m in w)!w.hasOwnProperty(m)||E&&E.hasOwnProperty(m)||(a||(a={}),a[m]="");for(m in E)E.hasOwnProperty(m)&&w[m]!==E[m]&&(a||(a={}),a[m]=E[m])}else a||(p||(p=[]),p.push(P,a)),a=E;else P==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,w=w?w.__html:void 0,E!=null&&w!==E&&(p=p||[]).push(P,E)):P==="children"?typeof E!="string"&&typeof E!="number"||(p=p||[]).push(P,""+E):P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&(o.hasOwnProperty(P)?(E!=null&&P==="onScroll"&&xe("scroll",n),p||w===E||(p=[])):(p=p||[]).push(P,E))}a&&(p=p||[]).push("style",a);var P=p;(s.updateQueue=P)&&(s.flags|=4)}},jp=function(n,s,a,u){a!==u&&(s.flags|=4)};function hs(n,s){if(!Le)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function ct(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(s)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,s}function gE(n,s,a){var u=s.pendingProps;switch(Eu(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(s),null;case 1:return vt(s.type)&&$o(),ct(s),null;case 3:return u=s.stateNode,ri(),Oe(yt),Oe(lt),bu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ho(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,$t!==null&&(cc($t),$t=null))),Zu(n,s),ct(s),null;case 5:Au(s);var d=mr(ls.current);if(a=s.type,n!==null&&s.stateNode!=null)Up(n,s,a,u,d),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!u){if(s.stateNode===null)throw Error(t(166));return ct(s),null}if(n=mr(Jt.current),Ho(s)){u=s.stateNode,a=s.type;var p=s.memoizedProps;switch(u[Qt]=s,u[rs]=p,n=(s.mode&1)!==0,a){case"dialog":xe("cancel",u),xe("close",u);break;case"iframe":case"object":case"embed":xe("load",u);break;case"video":case"audio":for(d=0;d<es.length;d++)xe(es[d],u);break;case"source":xe("error",u);break;case"img":case"image":case"link":xe("error",u),xe("load",u);break;case"details":xe("toggle",u);break;case"input":vf(u,p),xe("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},xe("invalid",u);break;case"textarea":Sf(u,p),xe("invalid",u)}Ll(a,p),d=null;for(var m in p)if(p.hasOwnProperty(m)){var w=p[m];m==="children"?typeof w=="string"?u.textContent!==w&&(p.suppressHydrationWarning!==!0&&Fo(u.textContent,w,n),d=["children",w]):typeof w=="number"&&u.textContent!==""+w&&(p.suppressHydrationWarning!==!0&&Fo(u.textContent,w,n),d=["children",""+w]):o.hasOwnProperty(m)&&w!=null&&m==="onScroll"&&xe("scroll",u)}switch(a){case"input":po(u),Ef(u,p,!0);break;case"textarea":po(u),If(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Uo)}u=d,s.updateQueue=u,u!==null&&(s.flags|=4)}else{m=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Tf(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=m.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=m.createElement(a,{is:u.is}):(n=m.createElement(a),a==="select"&&(m=n,u.multiple?m.multiple=!0:u.size&&(m.size=u.size))):n=m.createElementNS(n,a),n[Qt]=s,n[rs]=u,Fp(n,s,!1,!1),s.stateNode=n;e:{switch(m=bl(a,u),a){case"dialog":xe("cancel",n),xe("close",n),d=u;break;case"iframe":case"object":case"embed":xe("load",n),d=u;break;case"video":case"audio":for(d=0;d<es.length;d++)xe(es[d],n);d=u;break;case"source":xe("error",n),d=u;break;case"img":case"image":case"link":xe("error",n),xe("load",n),d=u;break;case"details":xe("toggle",n),d=u;break;case"input":vf(n,u),d=Nl(n,u),xe("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=z({},u,{value:void 0}),xe("invalid",n);break;case"textarea":Sf(n,u),d=Ol(n,u),xe("invalid",n);break;default:d=u}Ll(a,d),w=d;for(p in w)if(w.hasOwnProperty(p)){var E=w[p];p==="style"?Nf(n,E):p==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&kf(n,E)):p==="children"?typeof E=="string"?(a!=="textarea"||E!=="")&&Di(n,E):typeof E=="number"&&Di(n,""+E):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?E!=null&&p==="onScroll"&&xe("scroll",n):E!=null&&H(n,p,E,m))}switch(a){case"input":po(n),Ef(n,u,!1);break;case"textarea":po(n),If(n);break;case"option":u.value!=null&&n.setAttribute("value",""+we(u.value));break;case"select":n.multiple=!!u.multiple,p=u.value,p!=null?Ur(n,!!u.multiple,p,!1):u.defaultValue!=null&&Ur(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Uo)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return ct(s),null;case 6:if(n&&s.stateNode!=null)jp(n,s,n.memoizedProps,u);else{if(typeof u!="string"&&s.stateNode===null)throw Error(t(166));if(a=mr(ls.current),mr(Jt.current),Ho(s)){if(u=s.stateNode,a=s.memoizedProps,u[Qt]=s,(p=u.nodeValue!==a)&&(n=Rt,n!==null))switch(n.tag){case 3:Fo(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fo(u.nodeValue,a,(n.mode&1)!==0)}p&&(s.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Qt]=s,s.stateNode=u}return ct(s),null;case 13:if(Oe(be),u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Le&&Nt!==null&&s.mode&1&&!(s.flags&128))Vh(),Zr(),s.flags|=98560,p=!1;else if(p=Ho(s),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=s.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Qt]=s}else Zr(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;ct(s),p=!1}else $t!==null&&(cc($t),$t=null),p=!0;if(!p)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(s.child.flags|=8192,s.mode&1&&(n===null||be.current&1?qe===0&&(qe=3):hc())),s.updateQueue!==null&&(s.flags|=4),ct(s),null);case 4:return ri(),Zu(n,s),n===null&&ts(s.stateNode.containerInfo),ct(s),null;case 10:return Ru(s.type._context),ct(s),null;case 17:return vt(s.type)&&$o(),ct(s),null;case 19:if(Oe(be),p=s.memoizedState,p===null)return ct(s),null;if(u=(s.flags&128)!==0,m=p.rendering,m===null)if(u)hs(p,!1);else{if(qe!==0||n!==null&&n.flags&128)for(n=s.child;n!==null;){if(m=Jo(n),m!==null){for(s.flags|=128,hs(p,!1),u=m.updateQueue,u!==null&&(s.updateQueue=u,s.flags|=4),s.subtreeFlags=0,u=a,a=s.child;a!==null;)p=a,n=u,p.flags&=14680066,m=p.alternate,m===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=m.childLanes,p.lanes=m.lanes,p.child=m.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=m.memoizedProps,p.memoizedState=m.memoizedState,p.updateQueue=m.updateQueue,p.type=m.type,n=m.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Re(be,be.current&1|2),s.child}n=n.sibling}p.tail!==null&&ze()>ai&&(s.flags|=128,u=!0,hs(p,!1),s.lanes=4194304)}else{if(!u)if(n=Jo(m),n!==null){if(s.flags|=128,u=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),hs(p,!0),p.tail===null&&p.tailMode==="hidden"&&!m.alternate&&!Le)return ct(s),null}else 2*ze()-p.renderingStartTime>ai&&a!==1073741824&&(s.flags|=128,u=!0,hs(p,!1),s.lanes=4194304);p.isBackwards?(m.sibling=s.child,s.child=m):(a=p.last,a!==null?a.sibling=m:s.child=m,p.last=m)}return p.tail!==null?(s=p.tail,p.rendering=s,p.tail=s.sibling,p.renderingStartTime=ze(),s.sibling=null,a=be.current,Re(be,u?a&1|2:a&1),s):(ct(s),null);case 22:case 23:return fc(),u=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(s.flags|=8192),u&&s.mode&1?Pt&1073741824&&(ct(s),s.subtreeFlags&6&&(s.flags|=8192)):ct(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function mE(n,s){switch(Eu(s),s.tag){case 1:return vt(s.type)&&$o(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return ri(),Oe(yt),Oe(lt),bu(),n=s.flags,n&65536&&!(n&128)?(s.flags=n&-65537|128,s):null;case 5:return Au(s),null;case 13:if(Oe(be),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Zr()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Oe(be),null;case 4:return ri(),null;case 10:return Ru(s.type._context),null;case 22:case 23:return fc(),null;case 24:return null;default:return null}}var oa=!1,dt=!1,_E=typeof WeakSet=="function"?WeakSet:Set,B=null;function si(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Ue(n,s,u)}else a.current=null}function ec(n,s,a){try{a()}catch(u){Ue(n,s,u)}}var $p=!1;function yE(n,s){if(fu=ko,n=yh(),iu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var m=0,w=-1,E=-1,P=0,L=0,b=n,A=null;t:for(;;){for(var V;b!==a||d!==0&&b.nodeType!==3||(w=m+d),b!==p||u!==0&&b.nodeType!==3||(E=m+u),b.nodeType===3&&(m+=b.nodeValue.length),(V=b.firstChild)!==null;)A=b,b=V;for(;;){if(b===n)break t;if(A===a&&++P===d&&(w=m),A===p&&++L===u&&(E=m),(V=b.nextSibling)!==null)break;b=A,A=b.parentNode}b=V}a=w===-1||E===-1?null:{start:w,end:E}}else a=null}a=a||{start:0,end:0}}else a=null;for(hu={focusedElem:n,selectionRange:a},ko=!1,B=s;B!==null;)if(s=B,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,B=n;else for(;B!==null;){s=B;try{var G=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(G!==null){var Y=G.memoizedProps,Ve=G.memoizedState,T=s.stateNode,S=T.getSnapshotBeforeUpdate(s.elementType===s.type?Y:zt(s.type,Y),Ve);T.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var R=s.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(D){Ue(s,s.return,D)}if(n=s.sibling,n!==null){n.return=s.return,B=n;break}B=s.return}return G=$p,$p=!1,G}function ps(n,s,a){var u=s.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&ec(s,a,p)}d=d.next}while(d!==u)}}function aa(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==s)}}function tc(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function zp(n){var s=n.alternate;s!==null&&(n.alternate=null,zp(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[Qt],delete s[rs],delete s[_u],delete s[eE],delete s[tE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Vp(n){return n.tag===5||n.tag===3||n.tag===4}function Wp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Vp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function nc(n,s,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Uo));else if(u!==4&&(n=n.child,n!==null))for(nc(n,s,a),n=n.sibling;n!==null;)nc(n,s,a),n=n.sibling}function rc(n,s,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(rc(n,s,a),n=n.sibling;n!==null;)rc(n,s,a),n=n.sibling}var nt=null,Vt=!1;function $n(n,s,a){for(a=a.child;a!==null;)Bp(n,s,a),a=a.sibling}function Bp(n,s,a){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(wo,a)}catch{}switch(a.tag){case 5:dt||si(a,s);case 6:var u=nt,d=Vt;nt=null,$n(n,s,a),nt=u,Vt=d,nt!==null&&(Vt?(n=nt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):nt.removeChild(a.stateNode));break;case 18:nt!==null&&(Vt?(n=nt,a=a.stateNode,n.nodeType===8?mu(n.parentNode,a):n.nodeType===1&&mu(n,a),Ki(n)):mu(nt,a.stateNode));break;case 4:u=nt,d=Vt,nt=a.stateNode.containerInfo,Vt=!0,$n(n,s,a),nt=u,Vt=d;break;case 0:case 11:case 14:case 15:if(!dt&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,m=p.destroy;p=p.tag,m!==void 0&&(p&2||p&4)&&ec(a,s,m),d=d.next}while(d!==u)}$n(n,s,a);break;case 1:if(!dt&&(si(a,s),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(w){Ue(a,s,w)}$n(n,s,a);break;case 21:$n(n,s,a);break;case 22:a.mode&1?(dt=(u=dt)||a.memoizedState!==null,$n(n,s,a),dt=u):$n(n,s,a);break;default:$n(n,s,a)}}function Hp(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new _E),s.forEach(function(u){var d=RE.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function Wt(n,s){var a=s.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var p=n,m=s,w=m;e:for(;w!==null;){switch(w.tag){case 5:nt=w.stateNode,Vt=!1;break e;case 3:nt=w.stateNode.containerInfo,Vt=!0;break e;case 4:nt=w.stateNode.containerInfo,Vt=!0;break e}w=w.return}if(nt===null)throw Error(t(160));Bp(p,m,d),nt=null,Vt=!1;var E=d.alternate;E!==null&&(E.return=null),d.return=null}catch(P){Ue(d,s,P)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Kp(s,n),s=s.sibling}function Kp(n,s){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Wt(s,n),Zt(n),u&4){try{ps(3,n,n.return),aa(3,n)}catch(Y){Ue(n,n.return,Y)}try{ps(5,n,n.return)}catch(Y){Ue(n,n.return,Y)}}break;case 1:Wt(s,n),Zt(n),u&512&&a!==null&&si(a,a.return);break;case 5:if(Wt(s,n),Zt(n),u&512&&a!==null&&si(a,a.return),n.flags&32){var d=n.stateNode;try{Di(d,"")}catch(Y){Ue(n,n.return,Y)}}if(u&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,m=a!==null?a.memoizedProps:p,w=n.type,E=n.updateQueue;if(n.updateQueue=null,E!==null)try{w==="input"&&p.type==="radio"&&p.name!=null&&wf(d,p),bl(w,m);var P=bl(w,p);for(m=0;m<E.length;m+=2){var L=E[m],b=E[m+1];L==="style"?Nf(d,b):L==="dangerouslySetInnerHTML"?kf(d,b):L==="children"?Di(d,b):H(d,L,b,P)}switch(w){case"input":Pl(d,p);break;case"textarea":Cf(d,p);break;case"select":var A=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var V=p.value;V!=null?Ur(d,!!p.multiple,V,!1):A!==!!p.multiple&&(p.defaultValue!=null?Ur(d,!!p.multiple,p.defaultValue,!0):Ur(d,!!p.multiple,p.multiple?[]:"",!1))}d[rs]=p}catch(Y){Ue(n,n.return,Y)}}break;case 6:if(Wt(s,n),Zt(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(Y){Ue(n,n.return,Y)}}break;case 3:if(Wt(s,n),Zt(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Ki(s.containerInfo)}catch(Y){Ue(n,n.return,Y)}break;case 4:Wt(s,n),Zt(n);break;case 13:Wt(s,n),Zt(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(oc=ze())),u&4&&Hp(n);break;case 22:if(L=a!==null&&a.memoizedState!==null,n.mode&1?(dt=(P=dt)||L,Wt(s,n),dt=P):Wt(s,n),Zt(n),u&8192){if(P=n.memoizedState!==null,(n.stateNode.isHidden=P)&&!L&&n.mode&1)for(B=n,L=n.child;L!==null;){for(b=B=L;B!==null;){switch(A=B,V=A.child,A.tag){case 0:case 11:case 14:case 15:ps(4,A,A.return);break;case 1:si(A,A.return);var G=A.stateNode;if(typeof G.componentWillUnmount=="function"){u=A,a=A.return;try{s=u,G.props=s.memoizedProps,G.state=s.memoizedState,G.componentWillUnmount()}catch(Y){Ue(u,a,Y)}}break;case 5:si(A,A.return);break;case 22:if(A.memoizedState!==null){Yp(b);continue}}V!==null?(V.return=A,B=V):Yp(b)}L=L.sibling}e:for(L=null,b=n;;){if(b.tag===5){if(L===null){L=b;try{d=b.stateNode,P?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(w=b.stateNode,E=b.memoizedProps.style,m=E!=null&&E.hasOwnProperty("display")?E.display:null,w.style.display=Rf("display",m))}catch(Y){Ue(n,n.return,Y)}}}else if(b.tag===6){if(L===null)try{b.stateNode.nodeValue=P?"":b.memoizedProps}catch(Y){Ue(n,n.return,Y)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===n)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===n)break e;for(;b.sibling===null;){if(b.return===null||b.return===n)break e;L===b&&(L=null),b=b.return}L===b&&(L=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:Wt(s,n),Zt(n),u&4&&Hp(n);break;case 21:break;default:Wt(s,n),Zt(n)}}function Zt(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(Vp(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Di(d,""),u.flags&=-33);var p=Wp(n);rc(n,p,d);break;case 3:case 4:var m=u.stateNode.containerInfo,w=Wp(n);nc(n,w,m);break;default:throw Error(t(161))}}catch(E){Ue(n,n.return,E)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function vE(n,s,a){B=n,Gp(n)}function Gp(n,s,a){for(var u=(n.mode&1)!==0;B!==null;){var d=B,p=d.child;if(d.tag===22&&u){var m=d.memoizedState!==null||oa;if(!m){var w=d.alternate,E=w!==null&&w.memoizedState!==null||dt;w=oa;var P=dt;if(oa=m,(dt=E)&&!P)for(B=d;B!==null;)m=B,E=m.child,m.tag===22&&m.memoizedState!==null?Qp(d):E!==null?(E.return=m,B=E):Qp(d);for(;p!==null;)B=p,Gp(p),p=p.sibling;B=d,oa=w,dt=P}qp(n)}else d.subtreeFlags&8772&&p!==null?(p.return=d,B=p):qp(n)}}function qp(n){for(;B!==null;){var s=B;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:dt||aa(5,s);break;case 1:var u=s.stateNode;if(s.flags&4&&!dt)if(a===null)u.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:zt(s.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=s.updateQueue;p!==null&&Yh(s,p,u);break;case 3:var m=s.updateQueue;if(m!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Yh(s,m,a)}break;case 5:var w=s.stateNode;if(a===null&&s.flags&4){a=w;var E=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&a.focus();break;case"img":E.src&&(a.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var P=s.alternate;if(P!==null){var L=P.memoizedState;if(L!==null){var b=L.dehydrated;b!==null&&Ki(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}dt||s.flags&512&&tc(s)}catch(A){Ue(s,s.return,A)}}if(s===n){B=null;break}if(a=s.sibling,a!==null){a.return=s.return,B=a;break}B=s.return}}function Yp(n){for(;B!==null;){var s=B;if(s===n){B=null;break}var a=s.sibling;if(a!==null){a.return=s.return,B=a;break}B=s.return}}function Qp(n){for(;B!==null;){var s=B;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{aa(4,s)}catch(E){Ue(s,a,E)}break;case 1:var u=s.stateNode;if(typeof u.componentDidMount=="function"){var d=s.return;try{u.componentDidMount()}catch(E){Ue(s,d,E)}}var p=s.return;try{tc(s)}catch(E){Ue(s,p,E)}break;case 5:var m=s.return;try{tc(s)}catch(E){Ue(s,m,E)}}}catch(E){Ue(s,s.return,E)}if(s===n){B=null;break}var w=s.sibling;if(w!==null){w.return=s.return,B=w;break}B=s.return}}var wE=Math.ceil,la=K.ReactCurrentDispatcher,ic=K.ReactCurrentOwner,bt=K.ReactCurrentBatchConfig,he=0,Xe=null,He=null,rt=0,Pt=0,oi=Dn(0),qe=0,gs=null,yr=0,ua=0,sc=0,ms=null,Et=null,oc=0,ai=1/0,mn=null,ca=!1,ac=null,zn=null,da=!1,Vn=null,fa=0,_s=0,lc=null,ha=-1,pa=0;function pt(){return he&6?ze():ha!==-1?ha:ha=ze()}function Wn(n){return n.mode&1?he&2&&rt!==0?rt&-rt:rE.transition!==null?(pa===0&&(pa=Wf()),pa):(n=Ee,n!==0||(n=window.event,n=n===void 0?16:Xf(n.type)),n):1}function Bt(n,s,a,u){if(50<_s)throw _s=0,lc=null,Error(t(185));zi(n,a,u),(!(he&2)||n!==Xe)&&(n===Xe&&(!(he&2)&&(ua|=a),qe===4&&Bn(n,rt)),St(n,u),a===1&&he===0&&!(s.mode&1)&&(ai=ze()+500,Vo&&Fn()))}function St(n,s){var a=n.callbackNode;rw(n,s);var u=Co(n,n===Xe?rt:0);if(u===0)a!==null&&$f(a),n.callbackNode=null,n.callbackPriority=0;else if(s=u&-u,n.callbackPriority!==s){if(a!=null&&$f(a),s===1)n.tag===0?nE(Xp.bind(null,n)):Fh(Xp.bind(null,n)),Xw(function(){!(he&6)&&Fn()}),a=null;else{switch(Bf(u)){case 1:a=zl;break;case 4:a=zf;break;case 16:a=vo;break;case 536870912:a=Vf;break;default:a=vo}a=og(a,Jp.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function Jp(n,s){if(ha=-1,pa=0,he&6)throw Error(t(327));var a=n.callbackNode;if(li()&&n.callbackNode!==a)return null;var u=Co(n,n===Xe?rt:0);if(u===0)return null;if(u&30||u&n.expiredLanes||s)s=ga(n,u);else{s=u;var d=he;he|=2;var p=eg();(Xe!==n||rt!==s)&&(mn=null,ai=ze()+500,wr(n,s));do try{CE();break}catch(w){Zp(n,w)}while(!0);ku(),la.current=p,he=d,He!==null?s=0:(Xe=null,rt=0,s=qe)}if(s!==0){if(s===2&&(d=Vl(n),d!==0&&(u=d,s=uc(n,d))),s===1)throw a=gs,wr(n,0),Bn(n,u),St(n,ze()),a;if(s===6)Bn(n,u);else{if(d=n.current.alternate,!(u&30)&&!EE(d)&&(s=ga(n,u),s===2&&(p=Vl(n),p!==0&&(u=p,s=uc(n,p))),s===1))throw a=gs,wr(n,0),Bn(n,u),St(n,ze()),a;switch(n.finishedWork=d,n.finishedLanes=u,s){case 0:case 1:throw Error(t(345));case 2:Er(n,Et,mn);break;case 3:if(Bn(n,u),(u&130023424)===u&&(s=oc+500-ze(),10<s)){if(Co(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){pt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=gu(Er.bind(null,n,Et,mn),s);break}Er(n,Et,mn);break;case 4:if(Bn(n,u),(u&4194240)===u)break;for(s=n.eventTimes,d=-1;0<u;){var m=31-Ut(u);p=1<<m,m=s[m],m>d&&(d=m),u&=~p}if(u=d,u=ze()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*wE(u/1960))-u,10<u){n.timeoutHandle=gu(Er.bind(null,n,Et,mn),u);break}Er(n,Et,mn);break;case 5:Er(n,Et,mn);break;default:throw Error(t(329))}}}return St(n,ze()),n.callbackNode===a?Jp.bind(null,n):null}function uc(n,s){var a=ms;return n.current.memoizedState.isDehydrated&&(wr(n,s).flags|=256),n=ga(n,s),n!==2&&(s=Et,Et=a,s!==null&&cc(s)),n}function cc(n){Et===null?Et=n:Et.push.apply(Et,n)}function EE(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],p=d.getSnapshot;d=d.value;try{if(!jt(p(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Bn(n,s){for(s&=~sc,s&=~ua,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-Ut(s),u=1<<a;n[a]=-1,s&=~u}}function Xp(n){if(he&6)throw Error(t(327));li();var s=Co(n,0);if(!(s&1))return St(n,ze()),null;var a=ga(n,s);if(n.tag!==0&&a===2){var u=Vl(n);u!==0&&(s=u,a=uc(n,u))}if(a===1)throw a=gs,wr(n,0),Bn(n,s),St(n,ze()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,Er(n,Et,mn),St(n,ze()),null}function dc(n,s){var a=he;he|=1;try{return n(s)}finally{he=a,he===0&&(ai=ze()+500,Vo&&Fn())}}function vr(n){Vn!==null&&Vn.tag===0&&!(he&6)&&li();var s=he;he|=1;var a=bt.transition,u=Ee;try{if(bt.transition=null,Ee=1,n)return n()}finally{Ee=u,bt.transition=a,he=s,!(he&6)&&Fn()}}function fc(){Pt=oi.current,Oe(oi)}function wr(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Jw(a)),He!==null)for(a=He.return;a!==null;){var u=a;switch(Eu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&$o();break;case 3:ri(),Oe(yt),Oe(lt),bu();break;case 5:Au(u);break;case 4:ri();break;case 13:Oe(be);break;case 19:Oe(be);break;case 10:Ru(u.type._context);break;case 22:case 23:fc()}a=a.return}if(Xe=n,He=n=Hn(n.current,null),rt=Pt=s,qe=0,gs=null,sc=ua=yr=0,Et=ms=null,gr!==null){for(s=0;s<gr.length;s++)if(a=gr[s],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,p=a.pending;if(p!==null){var m=p.next;p.next=d,u.next=m}a.pending=u}gr=null}return n}function Zp(n,s){do{var a=He;try{if(ku(),Xo.current=na,Zo){for(var u=De.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Zo=!1}if(_r=0,Je=Ge=De=null,us=!1,cs=0,ic.current=null,a===null||a.return===null){qe=1,gs=s,He=null;break}e:{var p=n,m=a.return,w=a,E=s;if(s=rt,w.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var P=E,L=w,b=L.tag;if(!(L.mode&1)&&(b===0||b===11||b===15)){var A=L.alternate;A?(L.updateQueue=A.updateQueue,L.memoizedState=A.memoizedState,L.lanes=A.lanes):(L.updateQueue=null,L.memoizedState=null)}var V=Ip(m);if(V!==null){V.flags&=-257,Tp(V,m,w,p,s),V.mode&1&&Cp(p,P,s),s=V,E=P;var G=s.updateQueue;if(G===null){var Y=new Set;Y.add(E),s.updateQueue=Y}else G.add(E);break e}else{if(!(s&1)){Cp(p,P,s),hc();break e}E=Error(t(426))}}else if(Le&&w.mode&1){var Ve=Ip(m);if(Ve!==null){!(Ve.flags&65536)&&(Ve.flags|=256),Tp(Ve,m,w,p,s),Iu(ii(E,w));break e}}p=E=ii(E,w),qe!==4&&(qe=2),ms===null?ms=[p]:ms.push(p),p=m;do{switch(p.tag){case 3:p.flags|=65536,s&=-s,p.lanes|=s;var T=Ep(p,E,s);qh(p,T);break e;case 1:w=E;var S=p.type,R=p.stateNode;if(!(p.flags&128)&&(typeof S.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(zn===null||!zn.has(R)))){p.flags|=65536,s&=-s,p.lanes|=s;var D=Sp(p,w,s);qh(p,D);break e}}p=p.return}while(p!==null)}ng(a)}catch(Q){s=Q,He===a&&a!==null&&(He=a=a.return);continue}break}while(!0)}function eg(){var n=la.current;return la.current=na,n===null?na:n}function hc(){(qe===0||qe===3||qe===2)&&(qe=4),Xe===null||!(yr&268435455)&&!(ua&268435455)||Bn(Xe,rt)}function ga(n,s){var a=he;he|=2;var u=eg();(Xe!==n||rt!==s)&&(mn=null,wr(n,s));do try{SE();break}catch(d){Zp(n,d)}while(!0);if(ku(),he=a,la.current=u,He!==null)throw Error(t(261));return Xe=null,rt=0,qe}function SE(){for(;He!==null;)tg(He)}function CE(){for(;He!==null&&!qv();)tg(He)}function tg(n){var s=sg(n.alternate,n,Pt);n.memoizedProps=n.pendingProps,s===null?ng(n):He=s,ic.current=null}function ng(n){var s=n;do{var a=s.alternate;if(n=s.return,s.flags&32768){if(a=mE(a,s),a!==null){a.flags&=32767,He=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{qe=6,He=null;return}}else if(a=gE(a,s,Pt),a!==null){He=a;return}if(s=s.sibling,s!==null){He=s;return}He=s=n}while(s!==null);qe===0&&(qe=5)}function Er(n,s,a){var u=Ee,d=bt.transition;try{bt.transition=null,Ee=1,IE(n,s,a,u)}finally{bt.transition=d,Ee=u}return null}function IE(n,s,a,u){do li();while(Vn!==null);if(he&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(iw(n,p),n===Xe&&(He=Xe=null,rt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||da||(da=!0,og(vo,function(){return li(),null})),p=(a.flags&15990)!==0,a.subtreeFlags&15990||p){p=bt.transition,bt.transition=null;var m=Ee;Ee=1;var w=he;he|=4,ic.current=null,yE(n,a),Kp(a,n),Bw(hu),ko=!!fu,hu=fu=null,n.current=a,vE(a),Yv(),he=w,Ee=m,bt.transition=p}else n.current=a;if(da&&(da=!1,Vn=n,fa=d),p=n.pendingLanes,p===0&&(zn=null),Xv(a.stateNode),St(n,ze()),s!==null)for(u=n.onRecoverableError,a=0;a<s.length;a++)d=s[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(ca)throw ca=!1,n=ac,ac=null,n;return fa&1&&n.tag!==0&&li(),p=n.pendingLanes,p&1?n===lc?_s++:(_s=0,lc=n):_s=0,Fn(),null}function li(){if(Vn!==null){var n=Bf(fa),s=bt.transition,a=Ee;try{if(bt.transition=null,Ee=16>n?16:n,Vn===null)var u=!1;else{if(n=Vn,Vn=null,fa=0,he&6)throw Error(t(331));var d=he;for(he|=4,B=n.current;B!==null;){var p=B,m=p.child;if(B.flags&16){var w=p.deletions;if(w!==null){for(var E=0;E<w.length;E++){var P=w[E];for(B=P;B!==null;){var L=B;switch(L.tag){case 0:case 11:case 15:ps(8,L,p)}var b=L.child;if(b!==null)b.return=L,B=b;else for(;B!==null;){L=B;var A=L.sibling,V=L.return;if(zp(L),L===P){B=null;break}if(A!==null){A.return=V,B=A;break}B=V}}}var G=p.alternate;if(G!==null){var Y=G.child;if(Y!==null){G.child=null;do{var Ve=Y.sibling;Y.sibling=null,Y=Ve}while(Y!==null)}}B=p}}if(p.subtreeFlags&2064&&m!==null)m.return=p,B=m;else e:for(;B!==null;){if(p=B,p.flags&2048)switch(p.tag){case 0:case 11:case 15:ps(9,p,p.return)}var T=p.sibling;if(T!==null){T.return=p.return,B=T;break e}B=p.return}}var S=n.current;for(B=S;B!==null;){m=B;var R=m.child;if(m.subtreeFlags&2064&&R!==null)R.return=m,B=R;else e:for(m=S;B!==null;){if(w=B,w.flags&2048)try{switch(w.tag){case 0:case 11:case 15:aa(9,w)}}catch(Q){Ue(w,w.return,Q)}if(w===m){B=null;break e}var D=w.sibling;if(D!==null){D.return=w.return,B=D;break e}B=w.return}}if(he=d,Fn(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(wo,n)}catch{}u=!0}return u}finally{Ee=a,bt.transition=s}}return!1}function rg(n,s,a){s=ii(a,s),s=Ep(n,s,1),n=jn(n,s,1),s=pt(),n!==null&&(zi(n,1,s),St(n,s))}function Ue(n,s,a){if(n.tag===3)rg(n,n,a);else for(;s!==null;){if(s.tag===3){rg(s,n,a);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(zn===null||!zn.has(u))){n=ii(a,n),n=Sp(s,n,1),s=jn(s,n,1),n=pt(),s!==null&&(zi(s,1,n),St(s,n));break}}s=s.return}}function TE(n,s,a){var u=n.pingCache;u!==null&&u.delete(s),s=pt(),n.pingedLanes|=n.suspendedLanes&a,Xe===n&&(rt&a)===a&&(qe===4||qe===3&&(rt&130023424)===rt&&500>ze()-oc?wr(n,0):sc|=a),St(n,s)}function ig(n,s){s===0&&(n.mode&1?(s=So,So<<=1,!(So&130023424)&&(So=4194304)):s=1);var a=pt();n=hn(n,s),n!==null&&(zi(n,s,a),St(n,a))}function kE(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),ig(n,a)}function RE(n,s){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(s),ig(n,a)}var sg;sg=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||yt.current)wt=!0;else{if(!(n.lanes&a)&&!(s.flags&128))return wt=!1,pE(n,s,a);wt=!!(n.flags&131072)}else wt=!1,Le&&s.flags&1048576&&Uh(s,Bo,s.index);switch(s.lanes=0,s.tag){case 2:var u=s.type;sa(n,s),n=s.pendingProps;var d=Qr(s,lt.current);ni(s,a),d=Fu(null,s,u,n,d,a);var p=Uu();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,vt(u)?(p=!0,zo(s)):p=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,xu(s),d.updater=ra,s.stateNode=d,d._reactInternals=s,Bu(s,u,n,a),s=qu(null,s,u,!0,p,a)):(s.tag=0,Le&&p&&wu(s),ht(null,s,d,a),s=s.child),s;case 16:u=s.elementType;e:{switch(sa(n,s),n=s.pendingProps,d=u._init,u=d(u._payload),s.type=u,d=s.tag=PE(u),n=zt(u,n),d){case 0:s=Gu(null,s,u,n,a);break e;case 1:s=Op(null,s,u,n,a);break e;case 11:s=kp(null,s,u,n,a);break e;case 14:s=Rp(null,s,u,zt(u.type,n),a);break e}throw Error(t(306,u,""))}return s;case 0:return u=s.type,d=s.pendingProps,d=s.elementType===u?d:zt(u,d),Gu(n,s,u,d,a);case 1:return u=s.type,d=s.pendingProps,d=s.elementType===u?d:zt(u,d),Op(n,s,u,d,a);case 3:e:{if(Ap(s),n===null)throw Error(t(387));u=s.pendingProps,p=s.memoizedState,d=p.element,Gh(n,s),Qo(s,u,null,a);var m=s.memoizedState;if(u=m.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},s.updateQueue.baseState=p,s.memoizedState=p,s.flags&256){d=ii(Error(t(423)),s),s=Lp(n,s,u,a,d);break e}else if(u!==d){d=ii(Error(t(424)),s),s=Lp(n,s,u,a,d);break e}else for(Nt=bn(s.stateNode.containerInfo.firstChild),Rt=s,Le=!0,$t=null,a=Hh(s,null,u,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Zr(),u===d){s=gn(n,s,a);break e}ht(n,s,u,a)}s=s.child}return s;case 5:return Qh(s),n===null&&Cu(s),u=s.type,d=s.pendingProps,p=n!==null?n.memoizedProps:null,m=d.children,pu(u,d)?m=null:p!==null&&pu(u,p)&&(s.flags|=32),xp(n,s),ht(n,s,m,a),s.child;case 6:return n===null&&Cu(s),null;case 13:return bp(n,s,a);case 4:return Ou(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=ei(s,null,u,a):ht(n,s,u,a),s.child;case 11:return u=s.type,d=s.pendingProps,d=s.elementType===u?d:zt(u,d),kp(n,s,u,d,a);case 7:return ht(n,s,s.pendingProps,a),s.child;case 8:return ht(n,s,s.pendingProps.children,a),s.child;case 12:return ht(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(u=s.type._context,d=s.pendingProps,p=s.memoizedProps,m=d.value,Re(Go,u._currentValue),u._currentValue=m,p!==null)if(jt(p.value,m)){if(p.children===d.children&&!yt.current){s=gn(n,s,a);break e}}else for(p=s.child,p!==null&&(p.return=s);p!==null;){var w=p.dependencies;if(w!==null){m=p.child;for(var E=w.firstContext;E!==null;){if(E.context===u){if(p.tag===1){E=pn(-1,a&-a),E.tag=2;var P=p.updateQueue;if(P!==null){P=P.shared;var L=P.pending;L===null?E.next=E:(E.next=L.next,L.next=E),P.pending=E}}p.lanes|=a,E=p.alternate,E!==null&&(E.lanes|=a),Nu(p.return,a,s),w.lanes|=a;break}E=E.next}}else if(p.tag===10)m=p.type===s.type?null:p.child;else if(p.tag===18){if(m=p.return,m===null)throw Error(t(341));m.lanes|=a,w=m.alternate,w!==null&&(w.lanes|=a),Nu(m,a,s),m=p.sibling}else m=p.child;if(m!==null)m.return=p;else for(m=p;m!==null;){if(m===s){m=null;break}if(p=m.sibling,p!==null){p.return=m.return,m=p;break}m=m.return}p=m}ht(n,s,d.children,a),s=s.child}return s;case 9:return d=s.type,u=s.pendingProps.children,ni(s,a),d=At(d),u=u(d),s.flags|=1,ht(n,s,u,a),s.child;case 14:return u=s.type,d=zt(u,s.pendingProps),d=zt(u.type,d),Rp(n,s,u,d,a);case 15:return Np(n,s,s.type,s.pendingProps,a);case 17:return u=s.type,d=s.pendingProps,d=s.elementType===u?d:zt(u,d),sa(n,s),s.tag=1,vt(u)?(n=!0,zo(s)):n=!1,ni(s,a),vp(s,u,d),Bu(s,u,d,a),qu(null,s,u,!0,n,a);case 19:return Mp(n,s,a);case 22:return Pp(n,s,a)}throw Error(t(156,s.tag))};function og(n,s){return jf(n,s)}function NE(n,s,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(n,s,a,u){return new NE(n,s,a,u)}function pc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function PE(n){if(typeof n=="function")return pc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Me)return 11;if(n===We)return 14}return 2}function Hn(n,s){var a=n.alternate;return a===null?(a=Dt(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ma(n,s,a,u,d,p){var m=2;if(u=n,typeof n=="function")pc(n)&&(m=1);else if(typeof n=="string")m=5;else e:switch(n){case ie:return Sr(a.children,d,p,s);case J:m=8,d|=8;break;case ye:return n=Dt(12,a,s,d|2),n.elementType=ye,n.lanes=p,n;case at:return n=Dt(13,a,s,d),n.elementType=at,n.lanes=p,n;case Fe:return n=Dt(19,a,s,d),n.elementType=Fe,n.lanes=p,n;case Te:return _a(a,d,p,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Se:m=10;break e;case ve:m=9;break e;case Me:m=11;break e;case We:m=14;break e;case Be:m=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=Dt(m,a,s,d),s.elementType=n,s.type=u,s.lanes=p,s}function Sr(n,s,a,u){return n=Dt(7,n,u,s),n.lanes=a,n}function _a(n,s,a,u){return n=Dt(22,n,u,s),n.elementType=Te,n.lanes=a,n.stateNode={isHidden:!1},n}function gc(n,s,a){return n=Dt(6,n,null,s),n.lanes=a,n}function mc(n,s,a){return s=Dt(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function xE(n,s,a,u,d){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function _c(n,s,a,u,d,p,m,w,E){return n=new xE(n,s,a,w,E),s===1?(s=1,p===!0&&(s|=8)):s=0,p=Dt(3,null,null,s),n.current=p,p.stateNode=n,p.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},xu(p),n}function OE(n,s,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:de,key:u==null?null:""+u,children:n,containerInfo:s,implementation:a}}function ag(n){if(!n)return Mn;n=n._reactInternals;e:{if(cr(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(vt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(vt(a))return Dh(n,a,s)}return s}function lg(n,s,a,u,d,p,m,w,E){return n=_c(a,u,!0,n,d,p,m,w,E),n.context=ag(null),a=n.current,u=pt(),d=Wn(a),p=pn(u,d),p.callback=s??null,jn(a,p,d),n.current.lanes=d,zi(n,d,u),St(n,u),n}function ya(n,s,a,u){var d=s.current,p=pt(),m=Wn(d);return a=ag(a),s.context===null?s.context=a:s.pendingContext=a,s=pn(p,m),s.payload={element:n},u=u===void 0?null:u,u!==null&&(s.callback=u),n=jn(d,s,m),n!==null&&(Bt(n,d,m,p),Yo(n,d,m)),m}function va(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ug(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function yc(n,s){ug(n,s),(n=n.alternate)&&ug(n,s)}var cg=typeof reportError=="function"?reportError:function(n){console.error(n)};function vc(n){this._internalRoot=n}wa.prototype.render=vc.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));ya(n,s,null,null)},wa.prototype.unmount=vc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;vr(function(){ya(null,n,null,null)}),s[un]=null}};function wa(n){this._internalRoot=n}wa.prototype.unstable_scheduleHydration=function(n){if(n){var s=Gf();n={blockedOn:null,target:n,priority:s};for(var a=0;a<On.length&&s!==0&&s<On[a].priority;a++);On.splice(a,0,n),a===0&&Qf(n)}};function wc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ea(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function dg(){}function AE(n,s,a,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var P=va(m);p.call(P)}}var m=lg(s,u,n,0,null,!1,!1,"",dg);return n._reactRootContainer=m,n[un]=m.current,ts(n.nodeType===8?n.parentNode:n),vr(),m}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var w=u;u=function(){var P=va(E);w.call(P)}}var E=_c(n,0,!1,null,null,!1,!1,"",dg);return n._reactRootContainer=E,n[un]=E.current,ts(n.nodeType===8?n.parentNode:n),vr(function(){ya(s,E,a,u)}),E}function Sa(n,s,a,u,d){var p=a._reactRootContainer;if(p){var m=p;if(typeof d=="function"){var w=d;d=function(){var E=va(m);w.call(E)}}ya(s,m,n,d)}else m=AE(a,s,n,d,u);return va(m)}Hf=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=$i(s.pendingLanes);a!==0&&(Bl(s,a|1),St(s,ze()),!(he&6)&&(ai=ze()+500,Fn()))}break;case 13:vr(function(){var u=hn(n,1);if(u!==null){var d=pt();Bt(u,n,1,d)}}),yc(n,1)}},Hl=function(n){if(n.tag===13){var s=hn(n,134217728);if(s!==null){var a=pt();Bt(s,n,134217728,a)}yc(n,134217728)}},Kf=function(n){if(n.tag===13){var s=Wn(n),a=hn(n,s);if(a!==null){var u=pt();Bt(a,n,s,u)}yc(n,s)}},Gf=function(){return Ee},qf=function(n,s){var a=Ee;try{return Ee=n,s()}finally{Ee=a}},Fl=function(n,s,a){switch(s){case"input":if(Pl(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var u=a[s];if(u!==n&&u.form===n.form){var d=jo(u);if(!d)throw Error(t(90));yf(u),Pl(u,d)}}}break;case"textarea":Cf(n,a);break;case"select":s=a.value,s!=null&&Ur(n,!!a.multiple,s,!1)}},Af=dc,Lf=vr;var LE={usingClientEntryPoint:!1,Events:[is,qr,jo,xf,Of,dc]},ys={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bE={bundleType:ys.bundleType,version:ys.version,rendererPackageName:ys.rendererPackageName,rendererConfig:ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:K.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ff(n),n===null?null:n.stateNode},findFiberByHostInstance:ys.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ca.isDisabled&&Ca.supportsFiber)try{wo=Ca.inject(bE),Yt=Ca}catch{}}return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LE,Ct.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wc(s))throw Error(t(200));return OE(n,s,null,a)},Ct.createRoot=function(n,s){if(!wc(n))throw Error(t(299));var a=!1,u="",d=cg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=_c(n,1,!1,null,null,a,!1,u,d),n[un]=s.current,ts(n.nodeType===8?n.parentNode:n),new vc(s)},Ct.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ff(s),n=n===null?null:n.stateNode,n},Ct.flushSync=function(n){return vr(n)},Ct.hydrate=function(n,s,a){if(!Ea(s))throw Error(t(200));return Sa(null,n,s,!0,a)},Ct.hydrateRoot=function(n,s,a){if(!wc(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,p="",m=cg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(m=a.onRecoverableError)),s=lg(s,null,n,1,a??null,d,!1,p,m),n[un]=s.current,ts(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new wa(s)},Ct.render=function(n,s,a){if(!Ea(s))throw Error(t(200));return Sa(null,n,s,!1,a)},Ct.unmountComponentAtNode=function(n){if(!Ea(n))throw Error(t(40));return n._reactRootContainer?(vr(function(){Sa(null,null,n,!1,function(){n._reactRootContainer=null,n[un]=null})}),!0):!1},Ct.unstable_batchedUpdates=dc,Ct.unstable_renderSubtreeIntoContainer=function(n,s,a,u){if(!Ea(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Sa(n,s,a,!1,u)},Ct.version="18.3.1-next-f1338f8080-20240426",Ct}var vg;function a_(){if(vg)return Cc.exports;vg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Cc.exports=HE(),Cc.exports}var wg;function KE(){if(wg)return Ia;wg=1;var r=a_();return Ia.createRoot=r.createRoot,Ia.hydrateRoot=r.hydrateRoot,Ia}var GE=KE();a_();/**
 * @remix-run/router v1.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Us(){return Us=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},Us.apply(this,arguments)}var Xn;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Xn||(Xn={}));const Eg="popstate";function qE(r){r===void 0&&(r={});function e(i,o){let{pathname:l,search:c,hash:f}=i.location;return Wc("",{pathname:l,search:c,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:u_(o)}return QE(e,t,null,r)}function Ke(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function l_(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function YE(){return Math.random().toString(36).substr(2,8)}function Sg(r,e){return{usr:r.state,key:r.key,idx:e}}function Wc(r,e,t,i){return t===void 0&&(t=null),Us({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?Ti(e):e,{state:t,key:e&&e.key||i||YE()})}function u_(r){let{pathname:e="/",search:t="",hash:i=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ti(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let i=r.indexOf("?");i>=0&&(e.search=r.substr(i),r=r.substr(0,i)),r&&(e.pathname=r)}return e}function QE(r,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,f=Xn.Pop,h=null,g=y();g==null&&(g=0,c.replaceState(Us({},c.state,{idx:g}),""));function y(){return(c.state||{idx:null}).idx}function _(){f=Xn.Pop;let I=y(),$=I==null?null:I-g;g=I,h&&h({action:f,location:x.location,delta:$})}function v(I,$){f=Xn.Push;let W=Wc(x.location,I,$);g=y()+1;let H=Sg(W,g),K=x.createHref(W);try{c.pushState(H,"",K)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;o.location.assign(K)}l&&h&&h({action:f,location:x.location,delta:1})}function k(I,$){f=Xn.Replace;let W=Wc(x.location,I,$);g=y();let H=Sg(W,g),K=x.createHref(W);c.replaceState(H,"",K),l&&h&&h({action:f,location:x.location,delta:0})}function N(I){let $=o.location.origin!=="null"?o.location.origin:o.location.href,W=typeof I=="string"?I:u_(I);return W=W.replace(/ $/,"%20"),Ke($,"No window.location.(origin|href) available to create URL for href: "+W),new URL(W,$)}let x={get action(){return f},get location(){return r(o,c)},listen(I){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Eg,_),h=I,()=>{o.removeEventListener(Eg,_),h=null}},createHref(I){return e(o,I)},createURL:N,encodeLocation(I){let $=N(I);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:v,replace:k,go(I){return c.go(I)}};return x}var Cg;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(Cg||(Cg={}));function JE(r,e,t){return t===void 0&&(t="/"),XE(r,e,t)}function XE(r,e,t,i){let o=typeof e=="string"?Ti(e):e,l=f_(o.pathname||"/",t);if(l==null)return null;let c=c_(r);ZE(c);let f=null;for(let h=0;f==null&&h<c.length;++h){let g=dS(l);f=lS(c[h],g)}return f}function c_(r,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,c,f)=>{let h={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};h.relativePath.startsWith("/")&&(Ke(h.relativePath.startsWith(i),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(i.length));let g=kr([i,h.relativePath]),y=t.concat(h);l.children&&l.children.length>0&&(Ke(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),c_(l.children,e,y,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:oS(g,l.index),routesMeta:y})};return r.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,c);else for(let h of d_(l.path))o(l,c,h)}),e}function d_(r){let e=r.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=d_(i.join("/")),f=[];return f.push(...c.map(h=>h===""?l:[l,h].join("/"))),o&&f.push(...c),f.map(h=>r.startsWith("/")&&h===""?"/":h)}function ZE(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:aS(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const eS=/^:[\w-]+$/,tS=3,nS=2,rS=1,iS=10,sS=-2,Ig=r=>r==="*";function oS(r,e){let t=r.split("/"),i=t.length;return t.some(Ig)&&(i+=sS),e&&(i+=nS),t.filter(o=>!Ig(o)).reduce((o,l)=>o+(eS.test(l)?tS:l===""?rS:iS),i)}function aS(r,e){return r.length===e.length&&r.slice(0,-1).every((i,o)=>i===e[o])?r[r.length-1]-e[e.length-1]:0}function lS(r,e,t){let{routesMeta:i}=r,o={},l="/",c=[];for(let f=0;f<i.length;++f){let h=i[f],g=f===i.length-1,y=l==="/"?e:e.slice(l.length)||"/",_=uS({path:h.relativePath,caseSensitive:h.caseSensitive,end:g},y),v=h.route;if(!_)return null;Object.assign(o,_.params),c.push({params:o,pathname:kr([l,_.pathname]),pathnameBase:gS(kr([l,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(l=kr([l,_.pathnameBase]))}return c}function uS(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,i]=cS(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((g,y,_)=>{let{paramName:v,isOptional:k}=y;if(v==="*"){let x=f[_]||"";c=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const N=f[_];return k&&!N?g[v]=void 0:g[v]=(N||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:r}}function cS(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),l_(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let i=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h)=>(i.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(i.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function dS(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return l_(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function f_(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=r.charAt(t);return i&&i!=="/"?null:r.slice(t)||"/"}function fS(r,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof r=="string"?Ti(r):r;return{pathname:t?t.startsWith("/")?t:hS(t,e):e,search:mS(i),hash:_S(o)}}function hS(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function kc(r,e,t,i){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pS(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function h_(r,e){let t=pS(r);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function p_(r,e,t,i){i===void 0&&(i=!1);let o;typeof r=="string"?o=Ti(r):(o=Us({},r),Ke(!o.pathname||!o.pathname.includes("?"),kc("?","pathname","search",o)),Ke(!o.pathname||!o.pathname.includes("#"),kc("#","pathname","hash",o)),Ke(!o.search||!o.search.includes("#"),kc("#","search","hash",o)));let l=r===""||o.pathname==="",c=l?"/":o.pathname,f;if(c==null)f=t;else{let _=e.length-1;if(!i&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),_-=1;o.pathname=v.join("/")}f=_>=0?e[_]:"/"}let h=fS(o,f),g=c&&c!=="/"&&c.endsWith("/"),y=(l||c===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(g||y)&&(h.pathname+="/"),h}const kr=r=>r.join("/").replace(/\/\/+/g,"/"),gS=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),mS=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,_S=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function yS(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const g_=["post","put","patch","delete"];new Set(g_);const vS=["get",...g_];new Set(vS);/**
 * React Router v6.28.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function js(){return js=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},js.apply(this,arguments)}const yd=U.createContext(null),wS=U.createContext(null),eo=U.createContext(null),ul=U.createContext(null),Lr=U.createContext({outlet:null,matches:[],isDataRoute:!1}),m_=U.createContext(null);function to(){return U.useContext(ul)!=null}function vd(){return to()||Ke(!1),U.useContext(ul).location}function __(r){U.useContext(eo).static||U.useLayoutEffect(r)}function cl(){let{isDataRoute:r}=U.useContext(Lr);return r?LS():ES()}function ES(){to()||Ke(!1);let r=U.useContext(yd),{basename:e,future:t,navigator:i}=U.useContext(eo),{matches:o}=U.useContext(Lr),{pathname:l}=vd(),c=JSON.stringify(h_(o,t.v7_relativeSplatPath)),f=U.useRef(!1);return __(()=>{f.current=!0}),U.useCallback(function(g,y){if(y===void 0&&(y={}),!f.current)return;if(typeof g=="number"){i.go(g);return}let _=p_(g,JSON.parse(c),l,y.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:kr([e,_.pathname])),(y.replace?i.replace:i.push)(_,y.state,y)},[e,i,c,l,r])}function SS(r,e){return CS(r,e)}function CS(r,e,t,i){to()||Ke(!1);let{navigator:o}=U.useContext(eo),{matches:l}=U.useContext(Lr),c=l[l.length-1],f=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let g=vd(),y;if(e){var _;let I=typeof e=="string"?Ti(e):e;h==="/"||(_=I.pathname)!=null&&_.startsWith(h)||Ke(!1),y=I}else y=g;let v=y.pathname||"/",k=v;if(h!=="/"){let I=h.replace(/^\//,"").split("/");k="/"+v.replace(/^\//,"").split("/").slice(I.length).join("/")}let N=JE(r,{pathname:k}),x=NS(N&&N.map(I=>Object.assign({},I,{params:Object.assign({},f,I.params),pathname:kr([h,o.encodeLocation?o.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?h:kr([h,o.encodeLocation?o.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),l,t,i);return e&&x?U.createElement(ul.Provider,{value:{location:js({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:Xn.Pop}},x):x}function IS(){let r=AS(),e=yS(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),t?U.createElement("pre",{style:o},t):null,null)}const TS=U.createElement(IS,null);class kS extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?U.createElement(Lr.Provider,{value:this.props.routeContext},U.createElement(m_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function RS(r){let{routeContext:e,match:t,children:i}=r,o=U.useContext(yd);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),U.createElement(Lr.Provider,{value:e},i)}function NS(r,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),r==null){var l;if(!t)return null;if(t.errors)r=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let c=r,f=(o=t)==null?void 0:o.errors;if(f!=null){let y=c.findIndex(_=>_.route.id&&(f==null?void 0:f[_.route.id])!==void 0);y>=0||Ke(!1),c=c.slice(0,Math.min(c.length,y+1))}let h=!1,g=-1;if(t&&i&&i.v7_partialHydration)for(let y=0;y<c.length;y++){let _=c[y];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(g=y),_.route.id){let{loaderData:v,errors:k}=t,N=_.route.loader&&v[_.route.id]===void 0&&(!k||k[_.route.id]===void 0);if(_.route.lazy||N){h=!0,g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}return c.reduceRight((y,_,v)=>{let k,N=!1,x=null,I=null;t&&(k=f&&_.route.id?f[_.route.id]:void 0,x=_.route.errorElement||TS,h&&(g<0&&v===0?(N=!0,I=null):g===v&&(N=!0,I=_.route.hydrateFallbackElement||null)));let $=e.concat(c.slice(0,v+1)),W=()=>{let H;return k?H=x:N?H=I:_.route.Component?H=U.createElement(_.route.Component,null):_.route.element?H=_.route.element:H=y,U.createElement(RS,{match:_,routeContext:{outlet:y,matches:$,isDataRoute:t!=null},children:H})};return t&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?U.createElement(kS,{location:t.location,revalidation:t.revalidation,component:x,error:k,children:W(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):W()},null)}var y_=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(y_||{}),Da=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(Da||{});function PS(r){let e=U.useContext(yd);return e||Ke(!1),e}function xS(r){let e=U.useContext(wS);return e||Ke(!1),e}function OS(r){let e=U.useContext(Lr);return e||Ke(!1),e}function v_(r){let e=OS(),t=e.matches[e.matches.length-1];return t.route.id||Ke(!1),t.route.id}function AS(){var r;let e=U.useContext(m_),t=xS(Da.UseRouteError),i=v_(Da.UseRouteError);return e!==void 0?e:(r=t.errors)==null?void 0:r[i]}function LS(){let{router:r}=PS(y_.UseNavigateStable),e=v_(Da.UseNavigateStable),t=U.useRef(!1);return __(()=>{t.current=!0}),U.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,js({fromRouteId:e},l)))},[r,e])}const Tg={};function bS(r,e){Tg[e]||(Tg[e]=!0,console.warn(e))}const kg=(r,e,t)=>bS(r,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+r+"` future flag to opt-in early. ")+("For more information, see "+t+"."));function DS(r,e){(r==null?void 0:r.v7_startTransition)===void 0&&kg("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),(r==null?void 0:r.v7_relativeSplatPath)===void 0&&kg("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function Rg(r){let{to:e,replace:t,state:i,relative:o}=r;to()||Ke(!1);let{future:l,static:c}=U.useContext(eo),{matches:f}=U.useContext(Lr),{pathname:h}=vd(),g=cl(),y=p_(e,h_(f,l.v7_relativeSplatPath),h,o==="path"),_=JSON.stringify(y);return U.useEffect(()=>g(JSON.parse(_),{replace:t,state:i,relative:o}),[g,_,o,t,i]),null}function ks(r){Ke(!1)}function MS(r){let{basename:e="/",children:t=null,location:i,navigationType:o=Xn.Pop,navigator:l,static:c=!1,future:f}=r;to()&&Ke(!1);let h=e.replace(/^\/*/,"/"),g=U.useMemo(()=>({basename:h,navigator:l,static:c,future:js({v7_relativeSplatPath:!1},f)}),[h,f,l,c]);typeof i=="string"&&(i=Ti(i));let{pathname:y="/",search:_="",hash:v="",state:k=null,key:N="default"}=i,x=U.useMemo(()=>{let I=f_(y,h);return I==null?null:{location:{pathname:I,search:_,hash:v,state:k,key:N},navigationType:o}},[h,y,_,v,k,N,o]);return x==null?null:U.createElement(eo.Provider,{value:g},U.createElement(ul.Provider,{children:t,value:x}))}function FS(r){let{children:e,location:t}=r;return SS(Bc(e),t)}new Promise(()=>{});function Bc(r,e){e===void 0&&(e=[]);let t=[];return U.Children.forEach(r,(i,o)=>{if(!U.isValidElement(i))return;let l=[...e,o];if(i.type===U.Fragment){t.push.apply(t,Bc(i.props.children,l));return}i.type!==ks&&Ke(!1),!i.props.index||!i.props.children||Ke(!1);let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Bc(i.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.28.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const US="6";try{window.__reactRouterVersion=US}catch{}const jS="startTransition",Ng=VE[jS];function $S(r){let{basename:e,children:t,future:i,window:o}=r,l=U.useRef();l.current==null&&(l.current=qE({window:o,v5Compat:!0}));let c=l.current,[f,h]=U.useState({action:c.action,location:c.location}),{v7_startTransition:g}=i||{},y=U.useCallback(_=>{g&&Ng?Ng(()=>h(_)):h(_)},[h,g]);return U.useLayoutEffect(()=>c.listen(y),[c,y]),U.useEffect(()=>DS(i),[i]),U.createElement(MS,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:c,future:i})}var Pg;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Pg||(Pg={}));var xg;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(xg||(xg={}));const zS=(r,e,t,i)=>{var l,c,f,h;const o=[t,{code:e,...i||{}}];if((c=(l=r==null?void 0:r.services)==null?void 0:l.logger)!=null&&c.forward)return r.services.logger.forward(o,"warn","react-i18next::",!0);Rr(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(h=(f=r==null?void 0:r.services)==null?void 0:f.logger)!=null&&h.warn?r.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},Og={},Hc=(r,e,t,i)=>{Rr(t)&&Og[t]||(Rr(t)&&(Og[t]=new Date),zS(r,e,t,i))},w_=(r,e)=>()=>{if(r.isInitialized)e();else{const t=()=>{setTimeout(()=>{r.off("initialized",t)},0),e()};r.on("initialized",t)}},Kc=(r,e,t)=>{r.loadNamespaces(e,w_(r,t))},Ag=(r,e,t,i)=>{if(Rr(t)&&(t=[t]),r.options.preload&&r.options.preload.indexOf(e)>-1)return Kc(r,t,i);t.forEach(o=>{r.options.ns.indexOf(o)<0&&r.options.ns.push(o)}),r.loadLanguages(e,w_(r,i))},VS=(r,e,t={})=>!e.languages||!e.languages.length?(Hc(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(r,{lng:t.lng,precheck:(i,o)=>{var l;if(((l=t.bindI18n)==null?void 0:l.indexOf("languageChanging"))>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!o(i.isLanguageChangingTo,r))return!1}}),Rr=r=>typeof r=="string",WS=r=>typeof r=="object"&&r!==null,BS=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,HS={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},KS=r=>HS[r],GS=r=>r.replace(BS,KS);let Gc={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:GS};const qS=(r={})=>{Gc={...Gc,...r}},YS=()=>Gc;let E_;const QS=r=>{E_=r},JS=()=>E_,XS={type:"3rdParty",init(r){qS(r.options.react),QS(r)}},S_=U.createContext();class ZS{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(t=>{this.usedNamespaces[t]||(this.usedNamespaces[t]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const eC=(r,e)=>{const t=U.useRef();return U.useEffect(()=>{t.current=r},[r,e]),t.current},C_=(r,e,t,i)=>r.getFixedT(e,t,i),tC=(r,e,t,i)=>U.useCallback(C_(r,e,t,i),[r,e,t,i]),ki=(r,e={})=>{var K,le,de,ie;const{i18n:t}=e,{i18n:i,defaultNS:o}=U.useContext(S_)||{},l=t||i||JS();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new ZS),!l){Hc(l,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const J=(Se,ve)=>Rr(ve)?ve:WS(ve)&&Rr(ve.defaultValue)?ve.defaultValue:Array.isArray(Se)?Se[Se.length-1]:Se,ye=[J,{},!1];return ye.t=J,ye.i18n={},ye.ready=!1,ye}(K=l.options.react)!=null&&K.wait&&Hc(l,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const c={...YS(),...l.options.react,...e},{useSuspense:f,keyPrefix:h}=c;let g=o||((le=l.options)==null?void 0:le.defaultNS);g=Rr(g)?[g]:g||["translation"],(ie=(de=l.reportNamespaces).addUsedNamespaces)==null||ie.call(de,g);const y=(l.isInitialized||l.initializedStoreOnce)&&g.every(J=>VS(J,l,c)),_=tC(l,e.lng||null,c.nsMode==="fallback"?g:g[0],h),v=()=>_,k=()=>C_(l,e.lng||null,c.nsMode==="fallback"?g:g[0],h),[N,x]=U.useState(v);let I=g.join();e.lng&&(I=`${e.lng}${I}`);const $=eC(I),W=U.useRef(!0);U.useEffect(()=>{const{bindI18n:J,bindI18nStore:ye}=c;W.current=!0,!y&&!f&&(e.lng?Ag(l,e.lng,g,()=>{W.current&&x(k)}):Kc(l,g,()=>{W.current&&x(k)})),y&&$&&$!==I&&W.current&&x(k);const Se=()=>{W.current&&x(k)};return J&&(l==null||l.on(J,Se)),ye&&(l==null||l.store.on(ye,Se)),()=>{W.current=!1,l&&(J==null||J.split(" ").forEach(ve=>l.off(ve,Se))),ye&&l&&ye.split(" ").forEach(ve=>l.store.off(ve,Se))}},[l,I]),U.useEffect(()=>{W.current&&y&&x(v)},[l,h,y]);const H=[N,l,y];if(H.t=N,H.i18n=l,H.ready=y,y||!y&&!f)return H;throw new Promise(J=>{e.lng?Ag(l,e.lng,g,()=>J()):Kc(l,g,()=>J())})};function nC({i18n:r,defaultNS:e,children:t}){const i=U.useMemo(()=>({i18n:r,defaultNS:e}),[r,e]);return U.createElement(S_.Provider,{value:i},t)}const re=r=>typeof r=="string",ws=()=>{let r,e;const t=new Promise((i,o)=>{r=i,e=o});return t.resolve=r,t.reject=e,t},Lg=r=>r==null?"":""+r,rC=(r,e,t)=>{r.forEach(i=>{e[i]&&(t[i]=e[i])})},iC=/###/g,bg=r=>r&&r.indexOf("###")>-1?r.replace(iC,"."):r,Dg=r=>!r||re(r),Os=(r,e,t)=>{const i=re(e)?e.split("."):e;let o=0;for(;o<i.length-1;){if(Dg(r))return{};const l=bg(i[o]);!r[l]&&t&&(r[l]=new t),Object.prototype.hasOwnProperty.call(r,l)?r=r[l]:r={},++o}return Dg(r)?{}:{obj:r,k:bg(i[o])}},Mg=(r,e,t)=>{const{obj:i,k:o}=Os(r,e,Object);if(i!==void 0||e.length===1){i[o]=t;return}let l=e[e.length-1],c=e.slice(0,e.length-1),f=Os(r,c,Object);for(;f.obj===void 0&&c.length;)l=`${c[c.length-1]}.${l}`,c=c.slice(0,c.length-1),f=Os(r,c,Object),f!=null&&f.obj&&typeof f.obj[`${f.k}.${l}`]<"u"&&(f.obj=void 0);f.obj[`${f.k}.${l}`]=t},sC=(r,e,t,i)=>{const{obj:o,k:l}=Os(r,e,Object);o[l]=o[l]||[],o[l].push(t)},Ma=(r,e)=>{const{obj:t,k:i}=Os(r,e);if(t&&Object.prototype.hasOwnProperty.call(t,i))return t[i]},oC=(r,e,t)=>{const i=Ma(r,t);return i!==void 0?i:Ma(e,t)},I_=(r,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in r?re(r[i])||r[i]instanceof String||re(e[i])||e[i]instanceof String?t&&(r[i]=e[i]):I_(r[i],e[i],t):r[i]=e[i]);return r},ui=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var aC={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const lC=r=>re(r)?r.replace(/[&<>"'\/]/g,e=>aC[e]):r;class uC{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const cC=[" ",",","?","!",";"],dC=new uC(20),fC=(r,e,t)=>{e=e||"",t=t||"";const i=cC.filter(c=>e.indexOf(c)<0&&t.indexOf(c)<0);if(i.length===0)return!0;const o=dC.getRegExp(`(${i.map(c=>c==="?"?"\\?":c).join("|")})`);let l=!o.test(r);if(!l){const c=r.indexOf(t);c>0&&!o.test(r.substring(0,c))&&(l=!0)}return l},qc=function(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!r)return;if(r[e])return Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0;const i=e.split(t);let o=r;for(let l=0;l<i.length;){if(!o||typeof o!="object")return;let c,f="";for(let h=l;h<i.length;++h)if(h!==l&&(f+=t),f+=i[h],c=o[f],c!==void 0){if(["string","number","boolean"].indexOf(typeof c)>-1&&h<i.length-1)continue;l+=h-l+1;break}o=c}return o},Fa=r=>r==null?void 0:r.replace("_","-"),hC={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){var t,i;(i=(t=console==null?void 0:console[r])==null?void 0:t.apply)==null||i.call(t,console,e)}};let pC=class Yc{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||hC,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,o){return o&&!this.debug?null:(re(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Yc(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Yc(this.logger,e)}};var en=new pC;let dl=class{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const o=this.observers[i].get(t)||0;this.observers[i].set(t,o+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(c=>{let[f,h]=c;for(let g=0;g<h;g++)f(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(c=>{let[f,h]=c;for(let g=0;g<h;g++)f.apply(f,[e,...i])})}};class Fg extends dl{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){var g,y;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,c=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let f;e.indexOf(".")>-1?f=e.split("."):(f=[e,t],i&&(Array.isArray(i)?f.push(...i):re(i)&&l?f.push(...i.split(l)):f.push(i)));const h=Ma(this.data,f);return!h&&!t&&!i&&e.indexOf(".")>-1&&(e=f[0],t=f[1],i=f.slice(2).join(".")),h||!c||!re(i)?h:qc((y=(g=this.data)==null?void 0:g[e])==null?void 0:y[t],i,l)}addResource(e,t,i,o){let l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const c=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator;let f=[e,t];i&&(f=f.concat(c?i.split(c):i)),e.indexOf(".")>-1&&(f=e.split("."),o=t,t=f[1]),this.addNamespaces(t),Mg(this.data,f,o),l.silent||this.emit("added",e,t,i,o)}addResources(e,t,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const l in i)(re(i[l])||Array.isArray(i[l]))&&this.addResource(e,t,l,i[l],{silent:!0});o.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,o,l){let c=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},f=[e,t];e.indexOf(".")>-1&&(f=e.split("."),o=i,i=t,t=f[1]),this.addNamespaces(t);let h=Ma(this.data,f)||{};c.skipCopy||(i=JSON.parse(JSON.stringify(i))),o?I_(h,i,l):h={...h,...i},Mg(this.data,f,h),c.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(o=>t[o]&&Object.keys(t[o]).length>0)}toJSON(){return this.data}}var T_={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,t,i,o){return r.forEach(l=>{var c;e=((c=this.processors[l])==null?void 0:c.process(e,t,i,o))??e}),e}};const Ug={},jg=r=>!re(r)&&typeof r!="boolean"&&typeof r!="number";class Ua extends dl{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),rC(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=en.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return(i==null?void 0:i.res)!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const o=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let l=t.ns||this.options.defaultNS||[];const c=i&&e.indexOf(i)>-1,f=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!fC(e,i,o);if(c&&!f){const h=e.match(this.interpolator.nestingRegexp);if(h&&h.length>0)return{key:e,namespaces:re(l)?[l]:l};const g=e.split(i);(i!==o||i===o&&this.options.ns.indexOf(g[0])>-1)&&(l=g.shift()),e=g.join(o)}return{key:e,namespaces:re(l)?[l]:l}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const o=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,l=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:c,namespaces:f}=this.extractFromKey(e[e.length-1],t),h=f[f.length-1],g=t.lng||this.language,y=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((g==null?void 0:g.toLowerCase())==="cimode"){if(y){const ve=t.nsSeparator||this.options.nsSeparator;return o?{res:`${h}${ve}${c}`,usedKey:c,exactUsedKey:c,usedLng:g,usedNS:h,usedParams:this.getUsedParamsDetails(t)}:`${h}${ve}${c}`}return o?{res:c,usedKey:c,exactUsedKey:c,usedLng:g,usedNS:h,usedParams:this.getUsedParamsDetails(t)}:c}const _=this.resolve(e,t);let v=_==null?void 0:_.res;const k=(_==null?void 0:_.usedKey)||c,N=(_==null?void 0:_.exactUsedKey)||c,x=["[object Number]","[object Function]","[object RegExp]"],I=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,$=!this.i18nFormat||this.i18nFormat.handleAsObject,W=t.count!==void 0&&!re(t.count),H=Ua.hasDefaultValue(t),K=W?this.pluralResolver.getSuffix(g,t.count,t):"",le=t.ordinal&&W?this.pluralResolver.getSuffix(g,t.count,{ordinal:!1}):"",de=W&&!t.ordinal&&t.count===0,ie=de&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${K}`]||t[`defaultValue${le}`]||t.defaultValue;let J=v;$&&!v&&H&&(J=ie);const ye=jg(J),Se=Object.prototype.toString.apply(J);if($&&J&&ye&&x.indexOf(Se)<0&&!(re(I)&&Array.isArray(J))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const ve=this.options.returnedObjectHandler?this.options.returnedObjectHandler(k,J,{...t,ns:f}):`key '${c} (${this.language})' returned an object instead of string.`;return o?(_.res=ve,_.usedParams=this.getUsedParamsDetails(t),_):ve}if(l){const ve=Array.isArray(J),Me=ve?[]:{},at=ve?N:k;for(const Fe in J)if(Object.prototype.hasOwnProperty.call(J,Fe)){const We=`${at}${l}${Fe}`;H&&!v?Me[Fe]=this.translate(We,{...t,defaultValue:jg(ie)?ie[Fe]:void 0,joinArrays:!1,ns:f}):Me[Fe]=this.translate(We,{...t,joinArrays:!1,ns:f}),Me[Fe]===We&&(Me[Fe]=J[Fe])}v=Me}}else if($&&re(I)&&Array.isArray(v))v=v.join(I),v&&(v=this.extendTranslation(v,e,t,i));else{let ve=!1,Me=!1;!this.isValidLookup(v)&&H&&(ve=!0,v=ie),this.isValidLookup(v)||(Me=!0,v=c);const Fe=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&Me?void 0:v,We=H&&ie!==v&&this.options.updateMissing;if(Me||ve||We){if(this.logger.log(We?"updateKey":"missingKey",g,h,c,We?ie:v),l){const q=this.resolve(c,{...t,keySeparator:!1});q&&q.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let Be=[];const Te=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Te&&Te[0])for(let q=0;q<Te.length;q++)Be.push(Te[q]);else this.options.saveMissingTo==="all"?Be=this.languageUtils.toResolveHierarchy(t.lng||this.language):Be.push(t.lng||this.language);const j=(q,z,C)=>{var se;const O=H&&C!==v?C:Fe;this.options.missingKeyHandler?this.options.missingKeyHandler(q,h,z,O,We,t):(se=this.backendConnector)!=null&&se.saveMissing&&this.backendConnector.saveMissing(q,h,z,O,We,t),this.emit("missingKey",q,h,z,v)};this.options.saveMissing&&(this.options.saveMissingPlurals&&W?Be.forEach(q=>{const z=this.pluralResolver.getSuffixes(q,t);de&&t[`defaultValue${this.options.pluralSeparator}zero`]&&z.indexOf(`${this.options.pluralSeparator}zero`)<0&&z.push(`${this.options.pluralSeparator}zero`),z.forEach(C=>{j([q],c+C,t[`defaultValue${C}`]||ie)})}):j(Be,c,ie))}v=this.extendTranslation(v,e,t,_,i),Me&&v===c&&this.options.appendNamespaceToMissingKey&&(v=`${h}:${c}`),(Me||ve)&&this.options.parseMissingKeyHandler&&(v=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${h}:${c}`:c,ve?v:void 0))}return o?(_.res=v,_.usedParams=this.getUsedParamsDetails(t),_):v}extendTranslation(e,t,i,o,l){var g,y;var c=this;if((g=this.i18nFormat)!=null&&g.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const _=re(e)&&(((y=i==null?void 0:i.interpolation)==null?void 0:y.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let v;if(_){const N=e.match(this.interpolator.nestingRegexp);v=N&&N.length}let k=i.replace&&!re(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(k={...this.options.interpolation.defaultVariables,...k}),e=this.interpolator.interpolate(e,k,i.lng||this.language||o.usedLng,i),_){const N=e.match(this.interpolator.nestingRegexp),x=N&&N.length;v<x&&(i.nest=!1)}!i.lng&&o&&o.res&&(i.lng=this.language||o.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var N=arguments.length,x=new Array(N),I=0;I<N;I++)x[I]=arguments[I];return(l==null?void 0:l[0])===x[0]&&!i.context?(c.logger.warn(`It seems you are nesting recursively key: ${x[0]} in key: ${t[0]}`),null):c.translate(...x,t)},i)),i.interpolation&&this.interpolator.reset()}const f=i.postProcess||this.options.postProcess,h=re(f)?[f]:f;return e!=null&&(h!=null&&h.length)&&i.applyPostProcessor!==!1&&(e=T_.handle(h,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,o,l,c,f;return re(e)&&(e=[e]),e.forEach(h=>{if(this.isValidLookup(i))return;const g=this.extractFromKey(h,t),y=g.key;o=y;let _=g.namespaces;this.options.fallbackNS&&(_=_.concat(this.options.fallbackNS));const v=t.count!==void 0&&!re(t.count),k=v&&!t.ordinal&&t.count===0,N=t.context!==void 0&&(re(t.context)||typeof t.context=="number")&&t.context!=="",x=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);_.forEach(I=>{var $,W;this.isValidLookup(i)||(f=I,!Ug[`${x[0]}-${I}`]&&(($=this.utils)!=null&&$.hasLoadedNamespace)&&!((W=this.utils)!=null&&W.hasLoadedNamespace(f))&&(Ug[`${x[0]}-${I}`]=!0,this.logger.warn(`key "${o}" for languages "${x.join(", ")}" won't get resolved as namespace "${f}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),x.forEach(H=>{var de;if(this.isValidLookup(i))return;c=H;const K=[y];if((de=this.i18nFormat)!=null&&de.addLookupKeys)this.i18nFormat.addLookupKeys(K,y,H,I,t);else{let ie;v&&(ie=this.pluralResolver.getSuffix(H,t.count,t));const J=`${this.options.pluralSeparator}zero`,ye=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(v&&(K.push(y+ie),t.ordinal&&ie.indexOf(ye)===0&&K.push(y+ie.replace(ye,this.options.pluralSeparator)),k&&K.push(y+J)),N){const Se=`${y}${this.options.contextSeparator}${t.context}`;K.push(Se),v&&(K.push(Se+ie),t.ordinal&&ie.indexOf(ye)===0&&K.push(Se+ie.replace(ye,this.options.pluralSeparator)),k&&K.push(Se+J))}}let le;for(;le=K.pop();)this.isValidLookup(i)||(l=le,i=this.getResource(H,I,le,t))}))})}),{res:i,usedKey:o,exactUsedKey:l,usedLng:c,usedNS:f}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){var l;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(l=this.i18nFormat)!=null&&l.getResource?this.i18nFormat.getResource(e,t,i,o):this.resourceStore.getResource(e,t,i,o)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!re(e.replace);let o=i?e.replace:e;if(i&&typeof e.count<"u"&&(o.count=e.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!i){o={...o};for(const l of t)delete o[l]}return o}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}class $g{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=en.create("languageUtils")}getScriptPartFromCode(e){if(e=Fa(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Fa(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(re(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const o=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(o))&&(t=o)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const o=this.getLanguagePartFromCode(i);if(this.isSupportedCode(o))return t=o;t=this.options.supportedLngs.find(l=>{if(l===o)return l;if(!(l.indexOf("-")<0&&o.indexOf("-")<0)&&(l.indexOf("-")>0&&o.indexOf("-")<0&&l.substring(0,l.indexOf("-"))===o||l.indexOf(o)===0&&o.length>1))return l})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),re(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),o=[],l=c=>{c&&(this.isSupportedCode(c)?o.push(c):this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`))};return re(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(e))):re(e)&&l(this.formatLanguageCode(e)),i.forEach(c=>{o.indexOf(c)<0&&l(this.formatLanguageCode(c))}),o}}const zg={zero:0,one:1,two:2,few:3,many:4,other:5},Vg={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class gC{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=en.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=Fa(e==="dev"?"en":e),o=t.ordinal?"ordinal":"cardinal",l=JSON.stringify({cleanedCode:i,type:o});if(l in this.pluralRulesCache)return this.pluralRulesCache[l];let c;try{c=new Intl.PluralRules(i,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Vg;if(!e.match(/-|_/))return Vg;const h=this.languageUtils.getLanguagePartFromCode(e);c=this.getRule(h,t)}return this.pluralRulesCache[l]=c,c}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(o=>`${t}${o}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((o,l)=>zg[o]-zg[l]).map(o=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(e,i);return o?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const Wg=function(r,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=oC(r,e,t);return!l&&o&&re(t)&&(l=qc(r,t,i),l===void 0&&(l=qc(e,t,i))),l},Rc=r=>r.replace(/\$/g,"$$$$");class mC{constructor(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=en.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:o,prefix:l,prefixEscaped:c,suffix:f,suffixEscaped:h,formatSeparator:g,unescapeSuffix:y,unescapePrefix:_,nestingPrefix:v,nestingPrefixEscaped:k,nestingSuffix:N,nestingSuffixEscaped:x,nestingOptionsSeparator:I,maxReplaces:$,alwaysFormat:W}=e.interpolation;this.escape=t!==void 0?t:lC,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=l?ui(l):c||"{{",this.suffix=f?ui(f):h||"}}",this.formatSeparator=g||",",this.unescapePrefix=y?"":_||"-",this.unescapeSuffix=this.unescapePrefix?"":y||"",this.nestingPrefix=v?ui(v):k||ui("$t("),this.nestingSuffix=N?ui(N):x||ui(")"),this.nestingOptionsSeparator=I||",",this.maxReplaces=$||1e3,this.alwaysFormat=W!==void 0?W:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,o){var k;let l,c,f;const h=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},g=N=>{if(N.indexOf(this.formatSeparator)<0){const W=Wg(t,h,N,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(W,void 0,i,{...o,...t,interpolationkey:N}):W}const x=N.split(this.formatSeparator),I=x.shift().trim(),$=x.join(this.formatSeparator).trim();return this.format(Wg(t,h,I,this.options.keySeparator,this.options.ignoreJSONStructure),$,i,{...o,...t,interpolationkey:I})};this.resetRegExp();const y=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,_=((k=o==null?void 0:o.interpolation)==null?void 0:k.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:N=>Rc(N)},{regex:this.regexp,safeValue:N=>this.escapeValue?Rc(this.escape(N)):Rc(N)}].forEach(N=>{for(f=0;l=N.regex.exec(e);){const x=l[1].trim();if(c=g(x),c===void 0)if(typeof y=="function"){const $=y(e,l,o);c=re($)?$:""}else if(o&&Object.prototype.hasOwnProperty.call(o,x))c="";else if(_){c=l[0];continue}else this.logger.warn(`missed to pass in variable ${x} for interpolating ${e}`),c="";else!re(c)&&!this.useRawValueToEscape&&(c=Lg(c));const I=N.safeValue(c);if(e=e.replace(l[0],I),_?(N.regex.lastIndex+=c.length,N.regex.lastIndex-=l[0].length):N.regex.lastIndex=0,f++,f>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,l,c;const f=(h,g)=>{const y=this.nestingOptionsSeparator;if(h.indexOf(y)<0)return h;const _=h.split(new RegExp(`${y}[ ]*{`));let v=`{${_[1]}`;h=_[0],v=this.interpolate(v,c);const k=v.match(/'/g),N=v.match(/"/g);(((k==null?void 0:k.length)??0)%2===0&&!N||N.length%2!==0)&&(v=v.replace(/'/g,'"'));try{c=JSON.parse(v),g&&(c={...g,...c})}catch(x){return this.logger.warn(`failed parsing options string in nesting for key ${h}`,x),`${h}${y}${v}`}return c.defaultValue&&c.defaultValue.indexOf(this.prefix)>-1&&delete c.defaultValue,h};for(;o=this.nestingRegexp.exec(e);){let h=[];c={...i},c=c.replace&&!re(c.replace)?c.replace:c,c.applyPostProcessor=!1,delete c.defaultValue;let g=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const y=o[1].split(this.formatSeparator).map(_=>_.trim());o[1]=y.shift(),h=y,g=!0}if(l=t(f.call(this,o[1].trim(),c),c),l&&o[0]===e&&!re(l))return l;re(l)||(l=Lg(l)),l||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),l=""),g&&(l=h.reduce((y,_)=>this.format(y,_,i.lng,{...i,interpolationkey:o[1].trim()}),l.trim())),e=e.replace(o[0],l),this.regexp.lastIndex=0}return e}}const _C=r=>{let e=r.toLowerCase().trim();const t={};if(r.indexOf("(")>-1){const i=r.split("(");e=i[0].toLowerCase().trim();const o=i[1].substring(0,i[1].length-1);e==="currency"&&o.indexOf(":")<0?t.currency||(t.currency=o.trim()):e==="relativetime"&&o.indexOf(":")<0?t.range||(t.range=o.trim()):o.split(";").forEach(c=>{if(c){const[f,...h]=c.split(":"),g=h.join(":").trim().replace(/^'+|'+$/g,""),y=f.trim();t[y]||(t[y]=g),g==="false"&&(t[y]=!1),g==="true"&&(t[y]=!0),isNaN(g)||(t[y]=parseInt(g,10))}})}return{formatName:e,formatOptions:t}},ci=r=>{const e={};return(t,i,o)=>{let l=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(l={...l,[o.interpolationkey]:void 0});const c=i+JSON.stringify(l);let f=e[c];return f||(f=r(Fa(i),o),e[c]=f),f(t)}};class yC{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=en.create("formatter"),this.options=e,this.formats={number:ci((t,i)=>{const o=new Intl.NumberFormat(t,{...i});return l=>o.format(l)}),currency:ci((t,i)=>{const o=new Intl.NumberFormat(t,{...i,style:"currency"});return l=>o.format(l)}),datetime:ci((t,i)=>{const o=new Intl.DateTimeFormat(t,{...i});return l=>o.format(l)}),relativetime:ci((t,i)=>{const o=new Intl.RelativeTimeFormat(t,{...i});return l=>o.format(l,i.range||"day")}),list:ci((t,i)=>{const o=new Intl.ListFormat(t,{...i});return l=>o.format(l)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=ci(t)}format(e,t,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=t.split(this.formatSeparator);if(l.length>1&&l[0].indexOf("(")>1&&l[0].indexOf(")")<0&&l.find(f=>f.indexOf(")")>-1)){const f=l.findIndex(h=>h.indexOf(")")>-1);l[0]=[l[0],...l.splice(1,f)].join(this.formatSeparator)}return l.reduce((f,h)=>{var _;const{formatName:g,formatOptions:y}=_C(h);if(this.formats[g]){let v=f;try{const k=((_=o==null?void 0:o.formatParams)==null?void 0:_[o.interpolationkey])||{},N=k.locale||k.lng||o.locale||o.lng||i;v=this.formats[g](f,N,{...y,...o,...k})}catch(k){this.logger.warn(k)}return v}else this.logger.warn(`there was no format function for ${g}`);return f},e)}}const vC=(r,e)=>{r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)};class wC extends dl{constructor(e,t,i){var l,c;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=o,this.logger=en.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(c=(l=this.backend)==null?void 0:l.init)==null||c.call(l,i,o.backend,o)}queueLoad(e,t,i,o){const l={},c={},f={},h={};return e.forEach(g=>{let y=!0;t.forEach(_=>{const v=`${g}|${_}`;!i.reload&&this.store.hasResourceBundle(g,_)?this.state[v]=2:this.state[v]<0||(this.state[v]===1?c[v]===void 0&&(c[v]=!0):(this.state[v]=1,y=!1,c[v]===void 0&&(c[v]=!0),l[v]===void 0&&(l[v]=!0),h[_]===void 0&&(h[_]=!0)))}),y||(f[g]=!0)}),(Object.keys(l).length||Object.keys(c).length)&&this.queue.push({pending:c,pendingCount:Object.keys(c).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(l),pending:Object.keys(c),toLoadLanguages:Object.keys(f),toLoadNamespaces:Object.keys(h)}}loaded(e,t,i){const o=e.split("|"),l=o[0],c=o[1];t&&this.emit("failedLoading",l,c,t),!t&&i&&this.store.addResourceBundle(l,c,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const f={};this.queue.forEach(h=>{sC(h.loaded,[l],c),vC(h,e),t&&h.errors.push(t),h.pendingCount===0&&!h.done&&(Object.keys(h.loaded).forEach(g=>{f[g]||(f[g]={});const y=h.loaded[g];y.length&&y.forEach(_=>{f[g][_]===void 0&&(f[g][_]=!0)})}),h.done=!0,h.errors.length?h.callback(h.errors):h.callback())}),this.emit("loaded",f),this.queue=this.queue.filter(h=>!h.done)}read(e,t,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,c=arguments.length>5?arguments[5]:void 0;if(!e.length)return c(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:o,wait:l,callback:c});return}this.readingCalls++;const f=(g,y)=>{if(this.readingCalls--,this.waitingReads.length>0){const _=this.waitingReads.shift();this.read(_.lng,_.ns,_.fcName,_.tried,_.wait,_.callback)}if(g&&y&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,o+1,l*2,c)},l);return}c(g,y)},h=this.backend[i].bind(this.backend);if(h.length===2){try{const g=h(e,t);g&&typeof g.then=="function"?g.then(y=>f(null,y)).catch(f):f(null,g)}catch(g){f(g)}return}return h(e,t,f)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();re(e)&&(e=this.languageUtils.toResolveHierarchy(e)),re(t)&&(t=[t]);const l=this.queueLoad(e,t,i,o);if(!l.toLoad.length)return l.pending.length||o(),null;l.toLoad.forEach(c=>{this.loadOne(c)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),o=i[0],l=i[1];this.read(o,l,"read",void 0,void 0,(c,f)=>{c&&this.logger.warn(`${t}loading namespace ${l} for language ${o} failed`,c),!c&&f&&this.logger.log(`${t}loaded namespace ${l} for language ${o}`,f),this.loaded(e,c,f)})}saveMissing(e,t,i,o,l){var h,g,y,_,v;let c=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},f=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((g=(h=this.services)==null?void 0:h.utils)!=null&&g.hasLoadedNamespace&&!((_=(y=this.services)==null?void 0:y.utils)!=null&&_.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((v=this.backend)!=null&&v.create){const k={...c,isUpdate:l},N=this.backend.create.bind(this.backend);if(N.length<6)try{let x;N.length===5?x=N(e,t,i,o,k):x=N(e,t,i,o),x&&typeof x.then=="function"?x.then(I=>f(null,I)).catch(f):f(null,x)}catch(x){f(x)}else N(e,t,i,o,f,k)}!e||!e[0]||this.store.addResource(e[0],t,i,o)}}}const Bg=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let e={};if(typeof r[1]=="object"&&(e=r[1]),re(r[1])&&(e.defaultValue=r[1]),re(r[2])&&(e.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const t=r[3]||r[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:r=>r,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Hg=r=>{var e,t;return re(r.ns)&&(r.ns=[r.ns]),re(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),re(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),((t=(e=r.supportedLngs)==null?void 0:e.indexOf)==null?void 0:t.call(e,"cimode"))<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),typeof r.initImmediate=="boolean"&&(r.initAsync=r.initImmediate),r},Ta=()=>{},EC=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(t=>{typeof r[t]=="function"&&(r[t]=r[t].bind(r))})};class $s extends dl{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Hg(e),this.services={},this.logger=en,this.modules={external:[]},EC(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),t.defaultNS==null&&t.ns&&(re(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const o=Bg();this.options={...o,...this.options,...Hg(t)},this.options.interpolation={...o.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const l=y=>y?typeof y=="function"?new y:y:null;if(!this.options.isClone){this.modules.logger?en.init(l(this.modules.logger),this.options):en.init(null,this.options);let y;this.modules.formatter?y=this.modules.formatter:y=yC;const _=new $g(this.options);this.store=new Fg(this.options.resources,this.options);const v=this.services;v.logger=en,v.resourceStore=this.store,v.languageUtils=_,v.pluralResolver=new gC(_,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),y&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(v.formatter=l(y),v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new mC(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new wC(l(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",function(k){for(var N=arguments.length,x=new Array(N>1?N-1:0),I=1;I<N;I++)x[I-1]=arguments[I];e.emit(k,...x)}),this.modules.languageDetector&&(v.languageDetector=l(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=l(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new Ua(this.services,this.options),this.translator.on("*",function(k){for(var N=arguments.length,x=new Array(N>1?N-1:0),I=1;I<N;I++)x[I-1]=arguments[I];e.emit(k,...x)}),this.modules.external.forEach(k=>{k.init&&k.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Ta),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const y=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);y.length>0&&y[0]!=="dev"&&(this.options.lng=y[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(y=>{this[y]=function(){return e.store[y](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(y=>{this[y]=function(){return e.store[y](...arguments),e}});const h=ws(),g=()=>{const y=(_,v)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),h.resolve(v),i(_,v)};if(this.languages&&!this.isInitialized)return y(null,this.t.bind(this));this.changeLanguage(this.options.lng,y)};return this.options.resources||!this.options.initAsync?g():setTimeout(g,0),h}loadResources(e){var l,c;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ta;const o=re(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const f=[],h=g=>{if(!g||g==="cimode")return;this.services.languageUtils.toResolveHierarchy(g).forEach(_=>{_!=="cimode"&&f.indexOf(_)<0&&f.push(_)})};o?h(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(y=>h(y)),(c=(l=this.options.preload)==null?void 0:l.forEach)==null||c.call(l,g=>h(g)),this.services.backendConnector.load(f,this.options.ns,g=>{!g&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(g)})}else i(null)}reloadResources(e,t,i){const o=ws();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=Ta),this.services.backendConnector.reload(e,t,l=>{o.resolve(),i(l)}),o}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&T_.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const o=ws();this.emit("languageChanging",e);const l=h=>{this.language=h,this.languages=this.services.languageUtils.toResolveHierarchy(h),this.resolvedLanguage=void 0,this.setResolvedLanguage(h)},c=(h,g)=>{g?(l(g),this.translator.changeLanguage(g),this.isLanguageChangingTo=void 0,this.emit("languageChanged",g),this.logger.log("languageChanged",g)):this.isLanguageChangingTo=void 0,o.resolve(function(){return i.t(...arguments)}),t&&t(h,function(){return i.t(...arguments)})},f=h=>{var y,_;!e&&!h&&this.services.languageDetector&&(h=[]);const g=re(h)?h:this.services.languageUtils.getBestMatchFromCodes(h);g&&(this.language||l(g),this.translator.language||this.translator.changeLanguage(g),(_=(y=this.services.languageDetector)==null?void 0:y.cacheUserLanguage)==null||_.call(y,g)),this.loadResources(g,v=>{c(v,g)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?f(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(f):this.services.languageDetector.detect(f):f(e),o}getFixedT(e,t,i){var o=this;const l=function(c,f){let h;if(typeof f!="object"){for(var g=arguments.length,y=new Array(g>2?g-2:0),_=2;_<g;_++)y[_-2]=arguments[_];h=o.options.overloadTranslationOptionHandler([c,f].concat(y))}else h={...f};h.lng=h.lng||l.lng,h.lngs=h.lngs||l.lngs,h.ns=h.ns||l.ns,h.keyPrefix!==""&&(h.keyPrefix=h.keyPrefix||i||l.keyPrefix);const v=o.options.keySeparator||".";let k;return h.keyPrefix&&Array.isArray(c)?k=c.map(N=>`${h.keyPrefix}${v}${N}`):k=h.keyPrefix?`${h.keyPrefix}${v}${c}`:c,o.t(k,h)};return re(e)?l.lng=e:l.lngs=e,l.ns=t,l.keyPrefix=i,l}t(){var o;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(o=this.translator)==null?void 0:o.translate(...t)}exists(){var o;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(o=this.translator)==null?void 0:o.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,l=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const c=(f,h)=>{const g=this.services.backendConnector.state[`${f}|${h}`];return g===-1||g===0||g===2};if(t.precheck){const f=t.precheck(this,c);if(f!==void 0)return f}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||c(i,e)&&(!o||c(l,e)))}loadNamespaces(e,t){const i=ws();return this.options.ns?(re(e)&&(e=[e]),e.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{i.resolve(),t&&t(o)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=ws();re(e)&&(e=[e]);const o=this.options.preload||[],l=e.filter(c=>o.indexOf(c)<0&&this.services.languageUtils.isSupportedCode(c));return l.length?(this.options.preload=o.concat(l),this.loadResources(c=>{i.resolve(),t&&t(c)}),i):(t&&t(),Promise.resolve())}dir(e){var o,l;if(e||(e=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((l=this.services)==null?void 0:l.languageUtils)||new $g(Bg());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new $s(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ta;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const o={...this.options,...e,isClone:!0},l=new $s(o);if((e.debug!==void 0||e.prefix!==void 0)&&(l.logger=l.logger.clone(e)),["store","services","language"].forEach(f=>{l[f]=this[f]}),l.services={...this.services},l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},i){const f=Object.keys(this.store.data).reduce((h,g)=>(h[g]={...this.store.data[g]},Object.keys(h[g]).reduce((y,_)=>(y[_]={...h[g][_]},y),{})),{});l.store=new Fg(f,o),l.services.resourceStore=l.store}return l.translator=new Ua(l.services,o),l.translator.on("*",function(f){for(var h=arguments.length,g=new Array(h>1?h-1:0),y=1;y<h;y++)g[y-1]=arguments[y];l.emit(f,...g)}),l.init(o,t),l.translator.options=o,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ot=$s.createInstance();ot.createInstance=$s.createInstance;ot.createInstance;ot.dir;ot.init;ot.loadResources;ot.reloadResources;ot.use;ot.changeLanguage;ot.getFixedT;ot.t;ot.exists;ot.setDefaultNamespace;ot.hasLoadedNamespace;ot.loadNamespaces;ot.loadLanguages;const SC="Art by Mina 🤍",CC="Home",IC="Gallery",TC="Draw",kC="About",RC={logo:SC,home:CC,gallery:IC,draw:TC,about:kC,"hero-welcome":"Welcome to My Art World","gallery-title":"Gallery","gallery-random":"Show A Random Artwork","drawing-title":"Try Your Hand at Drawing !","about-title":"About the Artist","about-description":"Mina is a passionate artist who loves expressing emotions through vibrant colors and unique styles. Each painting tells a story and reflects a piece of her soul.","footer-text":"Art by Mina. All rights reserved."},NC="الفن مع مينا 🤍",PC="الرئيسية",xC="المعرض",OC="ارسم",AC="عن الفنان",LC={logo:NC,home:PC,gallery:xC,draw:OC,about:AC,"hero-welcome":"مرحبا بكم في عالمي الفني","gallery-title":"المعرض","gallery-random":"عرض عمل فني عشوائي","drawing-title":"! جرب الرسم","about-title":"عن الفنان","about-description":"مينا فنانة شغوفة تحب التعبير عن المشاعر من خلال الألوان النابضة بالحياة والأساليب الفريدة. تحكي كل لوحة قصة وتعكس قطعة من روحها","footer-text":"فن بواسطة مينا. كل الحقوق محفوظة"},bC="Art par Mina 🤍",DC="Accueil",MC="Galerie",FC="Dessiner",UC="À propos",jC={logo:bC,home:DC,gallery:MC,draw:FC,about:UC,"hero-welcome":"Bienvenue dans Mon Monde Artistique","gallery-title":"Galerie","gallery-random":"Afficher une œuvre d’art aléatoire","drawing-title":"Essayez de Dessiner !","about-title":"À propos de l'artiste","about-description":"Mina est une artiste passionnée qui aime exprimer des émotions à travers des couleurs vibrantes et des styles uniques. Chaque peinture raconte une histoire et reflète un morceau de son âme.","footer-text":"Art par Mina. Tous droits réservés."},$C="미나의 예술 🤍",zC="홈",VC="갤러리",WC="그리기",BC="작가 소개",HC={logo:$C,home:zC,gallery:VC,draw:WC,about:BC,"hero-welcome":"나의 예술 세계에 오신 것을 환영합니다","gallery-title":"갤러리","gallery-random":"무작위 아트웍 표시","drawing-title":"그리기 시도해보기 !","about-title":"작가 소개","about-description":"미나는 감정을 색감과 독특한 스타일로 표현하는 예술가입니다. 그녀의 그림 하나하나에는 이야기가 담겨있고, 그녀의 영혼이 녹아 있습니다.","footer-text":"미나의 예술. 모든 권리 보유."};ot.use(XS).init({resources:{en:{translation:RC},ar:{translation:LC},fr:{translation:jC},ko:{translation:HC}},lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}});var Kg={};/**
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
 */const k_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const F=function(r,e){if(!r)throw Ri(e)},Ri=function(r){return new Error("Firebase Database ("+k_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
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
 */const R_=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},KC=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],c=r[t++],f=r[t++],h=((o&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(h&1023))}else{const l=r[t++],c=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},wd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const l=r[o],c=o+1<r.length,f=c?r[o+1]:0,h=o+2<r.length,g=h?r[o+2]:0,y=l>>2,_=(l&3)<<4|f>>4;let v=(f&15)<<2|g>>6,k=g&63;h||(k=64,c||(v=64)),i.push(t[y],t[_],t[v],t[k])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(R_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):KC(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const g=o<r.length?t[r.charAt(o)]:64;++o;const _=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||g==null||_==null)throw new GC;const v=l<<2|f>>4;if(i.push(v),g!==64){const k=f<<4&240|g>>2;if(i.push(k),_!==64){const N=g<<6&192|_;i.push(N)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class GC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const N_=function(r){const e=R_(r);return wd.encodeByteArray(e,!0)},ja=function(r){return N_(r).replace(/\./g,"")},$a=function(r){try{return wd.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qC(r){return P_(void 0,r)}function P_(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!YC(t)||(r[t]=P_(r[t],e[t]));return r}function YC(r){return r!=="__proto__"}/**
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
 */function QC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const JC=()=>QC().__FIREBASE_DEFAULTS__,XC=()=>{if(typeof process>"u"||typeof Kg>"u")return;const r=Kg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ZC=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&$a(r[1]);return e&&JSON.parse(e)},Ed=()=>{try{return JC()||XC()||ZC()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},x_=r=>{var e,t;return(t=(e=Ed())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},O_=r=>{const e=x_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},A_=()=>{var r;return(r=Ed())===null||r===void 0?void 0:r.config},L_=r=>{var e;return(e=Ed())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class no{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function b_(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[ja(JSON.stringify(t)),ja(JSON.stringify(c)),""].join(".")}/**
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
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function eI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tI(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function D_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nI(){const r=_t();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function rI(){return k_.NODE_ADMIN===!0}function iI(){try{return typeof indexedDB=="object"}catch{return!1}}function sI(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const oI="FirebaseError";class kn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=oI,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ro.prototype.create)}}class ro{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?aI(l,i):"Error",f=`${this.serviceName}: ${c} (${o}).`;return new kn(o,f,i)}}function aI(r,e){return r.replace(lI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const lI=/\{\$([^}]+)}/g;/**
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
 */function zs(r){return JSON.parse(r)}function Qe(r){return JSON.stringify(r)}/**
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
 */const M_=function(r){let e={},t={},i={},o="";try{const l=r.split(".");e=zs($a(l[0])||""),t=zs($a(l[1])||""),o=l[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:o}},uI=function(r){const e=M_(r),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},cI=function(r){const e=M_(r).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function an(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function yi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Qc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function za(r,e,t){const i={};for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&(i[o]=e.call(t,r[o],o,r));return i}function Va(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=r[o],c=e[o];if(Gg(l)&&Gg(c)){if(!Va(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Gg(r){return r!==null&&typeof r=="object"}/**
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
 */function Ni(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Rs(r){const e={};return r.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ns(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}/**
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
 */class dI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)i[_]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let _=0;_<16;_++)i[_]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let _=16;_<80;_++){const v=i[_-3]^i[_-8]^i[_-14]^i[_-16];i[_]=(v<<1|v>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],c=this.chain_[2],f=this.chain_[3],h=this.chain_[4],g,y;for(let _=0;_<80;_++){_<40?_<20?(g=f^l&(c^f),y=1518500249):(g=l^c^f,y=1859775393):_<60?(g=l&c|f&(l|c),y=2400959708):(g=l^c^f,y=3395469782);const v=(o<<5|o>>>27)+g+h+y+i[_]&4294967295;h=f,f=c,c=(l<<30|l>>>2)&4294967295,l=o,o=v}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let o=0;const l=this.buf_;let c=this.inbuf_;for(;o<t;){if(c===0)for(;o<=i;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(l[c]=e.charCodeAt(o),++c,++o,c===this.blockSize){this.compress_(l),c=0;break}}else for(;o<t;)if(l[c]=e[o],++c,++o,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)e[i]=this.chain_[o]>>l&255,++i;return e}}function fI(r,e){const t=new hI(r,e);return t.subscribe.bind(t)}class hI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");pI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Nc),o.error===void 0&&(o.error=Nc),o.complete===void 0&&(o.complete=Nc);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pI(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Nc(){}function fl(r,e){return`${r} failed: ${e} argument `}/**
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
 */const gI=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);if(o>=55296&&o<=56319){const l=o-55296;i++,F(i<r.length,"Surrogate pair missing trail surrogate.");const c=r.charCodeAt(i)-56320;o=65536+(l<<10)+c}o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):o<65536?(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},hl=function(r){let e=0;for(let t=0;t<r.length;t++){const i=r.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ft(r){return r&&r._delegate?r._delegate:r}class sr{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Cr="[DEFAULT]";/**
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
 */class mI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new no;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yI(e))try{this.getOrInitializeService({instanceIdentifier:Cr})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=Cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cr){return this.instances.has(e)}getOptions(e=Cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:_I(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Cr){return this.component?this.component.multipleInstances?e:Cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _I(r){return r===Cr?void 0:r}function yI(r){return r.instantiationMode==="EAGER"}/**
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
 */class vI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ce||(Ce={}));const wI={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},EI=Ce.INFO,SI={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},CI=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=SI[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cd{constructor(e){this.name=e,this._logLevel=EI,this._logHandler=CI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const II=(r,e)=>e.some(t=>r instanceof t);let qg,Yg;function TI(){return qg||(qg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kI(){return Yg||(Yg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const F_=new WeakMap,Jc=new WeakMap,U_=new WeakMap,Pc=new WeakMap,Id=new WeakMap;function RI(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",c)},l=()=>{t(er(r.result)),o()},c=()=>{i(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&F_.set(t,r)}).catch(()=>{}),Id.set(e,r),e}function NI(r){if(Jc.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",c),r.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",c),r.addEventListener("abort",c)});Jc.set(r,e)}let Xc={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Jc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||U_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return er(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function PI(r){Xc=r(Xc)}function xI(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(xc(this),e,...t);return U_.set(i,e.sort?e.sort():[e]),er(i)}:kI().includes(r)?function(...e){return r.apply(xc(this),e),er(F_.get(this))}:function(...e){return er(r.apply(xc(this),e))}}function OI(r){return typeof r=="function"?xI(r):(r instanceof IDBTransaction&&NI(r),II(r,TI())?new Proxy(r,Xc):r)}function er(r){if(r instanceof IDBRequest)return RI(r);if(Pc.has(r))return Pc.get(r);const e=OI(r);return e!==r&&(Pc.set(r,e),Id.set(e,r)),e}const xc=r=>Id.get(r);function AI(r,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(r,e),f=er(c);return i&&c.addEventListener("upgradeneeded",h=>{i(er(c.result),h.oldVersion,h.newVersion,er(c.transaction),h)}),t&&c.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),f.then(h=>{l&&h.addEventListener("close",()=>l()),o&&h.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const LI=["get","getKey","getAll","getAllKeys","count"],bI=["put","add","delete","clear"],Oc=new Map;function Qg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Oc.get(e))return Oc.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=bI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||LI.includes(t)))return;const l=async function(c,...f){const h=this.transaction(c,o?"readwrite":"readonly");let g=h.store;return i&&(g=g.index(f.shift())),(await Promise.all([g[t](...f),o&&h.done]))[0]};return Oc.set(e,l),l}PI(r=>({...r,get:(e,t,i)=>Qg(e,t)||r.get(e,t,i),has:(e,t)=>!!Qg(e,t)||r.has(e,t)}));/**
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
 */class DI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(MI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function MI(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zc="@firebase/app",Jg="0.10.18";/**
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
 */const Cn=new Cd("@firebase/app"),FI="@firebase/app-compat",UI="@firebase/analytics-compat",jI="@firebase/analytics",$I="@firebase/app-check-compat",zI="@firebase/app-check",VI="@firebase/auth",WI="@firebase/auth-compat",BI="@firebase/database",HI="@firebase/data-connect",KI="@firebase/database-compat",GI="@firebase/functions",qI="@firebase/functions-compat",YI="@firebase/installations",QI="@firebase/installations-compat",JI="@firebase/messaging",XI="@firebase/messaging-compat",ZI="@firebase/performance",e0="@firebase/performance-compat",t0="@firebase/remote-config",n0="@firebase/remote-config-compat",r0="@firebase/storage",i0="@firebase/storage-compat",s0="@firebase/firestore",o0="@firebase/vertexai",a0="@firebase/firestore-compat",l0="firebase",u0="11.2.0";/**
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
 */const ed="[DEFAULT]",c0={[Zc]:"fire-core",[FI]:"fire-core-compat",[jI]:"fire-analytics",[UI]:"fire-analytics-compat",[zI]:"fire-app-check",[$I]:"fire-app-check-compat",[VI]:"fire-auth",[WI]:"fire-auth-compat",[BI]:"fire-rtdb",[HI]:"fire-data-connect",[KI]:"fire-rtdb-compat",[GI]:"fire-fn",[qI]:"fire-fn-compat",[YI]:"fire-iid",[QI]:"fire-iid-compat",[JI]:"fire-fcm",[XI]:"fire-fcm-compat",[ZI]:"fire-perf",[e0]:"fire-perf-compat",[t0]:"fire-rc",[n0]:"fire-rc-compat",[r0]:"fire-gcs",[i0]:"fire-gcs-compat",[s0]:"fire-fst",[a0]:"fire-fst-compat",[o0]:"fire-vertex","fire-js":"fire-js",[l0]:"fire-js-all"};/**
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
 */const Wa=new Map,d0=new Map,td=new Map;function Xg(r,e){try{r.container.addComponent(e)}catch(t){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Nr(r){const e=r.name;if(td.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;td.set(e,r);for(const t of Wa.values())Xg(t,r);for(const t of d0.values())Xg(t,r);return!0}function pl(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function _n(r){return r.settings!==void 0}/**
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
 */const f0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new ro("app","Firebase",f0);/**
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
 */class h0{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
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
 */const br=u0;function j_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i=Object.assign({name:ed,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw tr.create("bad-app-name",{appName:String(o)});if(t||(t=A_()),!t)throw tr.create("no-options");const l=Wa.get(o);if(l){if(Va(t,l.options)&&Va(i,l.config))return l;throw tr.create("duplicate-app",{appName:o})}const c=new vI(o);for(const h of td.values())c.addComponent(h);const f=new h0(t,i,c);return Wa.set(o,f),f}function Td(r=ed){const e=Wa.get(r);if(!e&&r===ed&&A_())return j_();if(!e)throw tr.create("no-app",{appName:r});return e}function nn(r,e,t){var i;let o=(i=c0[r])!==null&&i!==void 0?i:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(f.join(" "));return}Nr(new sr(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const p0="firebase-heartbeat-database",g0=1,Vs="firebase-heartbeat-store";let Ac=null;function $_(){return Ac||(Ac=AI(p0,g0,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Vs)}catch(t){console.warn(t)}}}}).catch(r=>{throw tr.create("idb-open",{originalErrorMessage:r.message})})),Ac}async function m0(r){try{const t=(await $_()).transaction(Vs),i=await t.objectStore(Vs).get(z_(r));return await t.done,i}catch(e){if(e instanceof kn)Cn.warn(e.message);else{const t=tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(t.message)}}}async function Zg(r,e){try{const i=(await $_()).transaction(Vs,"readwrite");await i.objectStore(Vs).put(e,z_(r)),await i.done}catch(t){if(t instanceof kn)Cn.warn(t.message);else{const i=tr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Cn.warn(i.message)}}}function z_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const _0=1024,y0=30*24*60*60*1e3;class v0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new E0(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=em();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const f=new Date(c.date).valueOf();return Date.now()-f<=y0}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Cn.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=em(),{heartbeatsToSend:i,unsentEntries:o}=w0(this._heartbeatsCache.heartbeats),l=ja(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Cn.warn(t),""}}}function em(){return new Date().toISOString().substring(0,10)}function w0(r,e=_0){const t=[];let i=r.slice();for(const o of r){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),tm(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),tm(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class E0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iI()?sI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await m0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Zg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Zg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function tm(r){return ja(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function S0(r){Nr(new sr("platform-logger",e=>new DI(e),"PRIVATE")),Nr(new sr("heartbeat",e=>new v0(e),"PRIVATE")),nn(Zc,Jg,r),nn(Zc,Jg,"esm2017"),nn("fire-js","")}S0("");var C0="firebase",I0="11.2.0";/**
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
 */nn(C0,I0,"app");function kd(r,e){var t={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(r);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(r,i[o])&&(t[i[o]]=r[i[o]]);return t}function V_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const T0=V_,W_=new ro("auth","Firebase",V_());/**
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
 */const Ba=new Cd("@firebase/auth");function k0(r,...e){Ba.logLevel<=Ce.WARN&&Ba.warn(`Auth (${br}): ${r}`,...e)}function xa(r,...e){Ba.logLevel<=Ce.ERROR&&Ba.error(`Auth (${br}): ${r}`,...e)}/**
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
 */function qt(r,...e){throw Rd(r,...e)}function rn(r,...e){return Rd(r,...e)}function B_(r,e,t){const i=Object.assign(Object.assign({},T0()),{[e]:t});return new ro("auth","Firebase",i).create(e,{appName:r.name})}function nr(r){return B_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rd(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return W_.create(r,...e)}function te(r,e,...t){if(!r)throw Rd(e,...t)}function yn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw xa(e),new Error(e)}function In(r,e){r||yn(e)}/**
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
 */function nd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function R0(){return nm()==="http:"||nm()==="https:"}function nm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function N0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(R0()||tI()||"connection"in navigator)?navigator.onLine:!0}function P0(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class io{constructor(e,t){this.shortDelay=e,this.longDelay=t,In(t>e,"Short delay should be less than long delay!"),this.isMobile=Sd()||D_()}get(){return N0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nd(r,e){In(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class H_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const x0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const O0=new io(3e4,6e4);function Dr(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ur(r,e,t,i,o={}){return K_(r,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const f=Ni(Object.assign({key:r.config.apiKey},c)).slice(1),h=await r._getAdditionalHeaders();h["Content-Type"]="application/json",r.languageCode&&(h["X-Firebase-Locale"]=r.languageCode);const g=Object.assign({method:e,headers:h},l);return eI()||(g.referrerPolicy="no-referrer"),H_.fetch()(G_(r,r.config.apiHost,t,f),g)})}async function K_(r,e,t){r._canInitEmulator=!1;const i=Object.assign(Object.assign({},x0),e);try{const o=new L0(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw ka(r,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[h,g]=f.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw ka(r,"credential-already-in-use",c);if(h==="EMAIL_EXISTS")throw ka(r,"email-already-in-use",c);if(h==="USER_DISABLED")throw ka(r,"user-disabled",c);const y=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw B_(r,y,g);qt(r,y)}}catch(o){if(o instanceof kn)throw o;qt(r,"network-request-failed",{message:String(o)})}}async function gl(r,e,t,i,o={}){const l=await ur(r,e,t,i,o);return"mfaPendingCredential"in l&&qt(r,"multi-factor-auth-required",{_serverResponse:l}),l}function G_(r,e,t,i){const o=`${e}${t}?${i}`;return r.config.emulator?Nd(r.config,o):`${r.config.apiScheme}://${o}`}function A0(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class L0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(rn(this.auth,"network-request-failed")),O0.get())})}}function ka(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=rn(r,e,i);return o.customData._tokenResponse=t,o}function rm(r){return r!==void 0&&r.enterprise!==void 0}class b0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return A0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function D0(r,e){return ur(r,"GET","/v2/recaptchaConfig",Dr(r,e))}/**
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
 */async function M0(r,e){return ur(r,"POST","/v1/accounts:delete",e)}async function q_(r,e){return ur(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function As(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function F0(r,e=!1){const t=ft(r),i=await t.getIdToken(e),o=Pd(i);te(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:As(Lc(o.auth_time)),issuedAtTime:As(Lc(o.iat)),expirationTime:As(Lc(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Lc(r){return Number(r)*1e3}function Pd(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return xa("JWT malformed, contained fewer than 3 sections"),null;try{const o=$a(t);return o?JSON.parse(o):(xa("Failed to decode base64 JWT payload"),null)}catch(o){return xa("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function im(r){const e=Pd(r);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ws(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof kn&&U0(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function U0({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class j0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=As(this.lastLoginAt),this.creationTime=As(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ha(r){var e;const t=r.auth,i=await r.getIdToken(),o=await Ws(r,q_(t,{idToken:i}));te(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Y_(l.providerUserInfo):[],f=z0(r.providerData,c),h=r.isAnonymous,g=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),y=h?g:!1,_={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new rd(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(r,_)}async function $0(r){const e=ft(r);await Ha(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function z0(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Y_(r){return r.map(e=>{var{providerId:t}=e,i=kd(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function V0(r,e){const t=await K_(r,{},async()=>{const i=Ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,c=G_(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",H_.fetch()(c,{method:"POST",headers:f,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function W0(r,e){return ur(r,"POST","/v2/accounts:revokeToken",Dr(r,e))}/**
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
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):im(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=im(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await V0(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new hi;return i&&(te(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(te(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(te(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
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
 */function Gn(r,e){te(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class vn{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=kd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new j0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new rd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Ws(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return F0(this,e)}reload(){return $0(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ha(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(nr(this.auth));const e=await this.getIdToken();return await Ws(this,M0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,f,h,g,y;const _=(i=t.displayName)!==null&&i!==void 0?i:void 0,v=(o=t.email)!==null&&o!==void 0?o:void 0,k=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,N=(c=t.photoURL)!==null&&c!==void 0?c:void 0,x=(f=t.tenantId)!==null&&f!==void 0?f:void 0,I=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,$=(g=t.createdAt)!==null&&g!==void 0?g:void 0,W=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:H,emailVerified:K,isAnonymous:le,providerData:de,stsTokenManager:ie}=t;te(H&&ie,e,"internal-error");const J=hi.fromJSON(this.name,ie);te(typeof H=="string",e,"internal-error"),Gn(_,e.name),Gn(v,e.name),te(typeof K=="boolean",e,"internal-error"),te(typeof le=="boolean",e,"internal-error"),Gn(k,e.name),Gn(N,e.name),Gn(x,e.name),Gn(I,e.name),Gn($,e.name),Gn(W,e.name);const ye=new vn({uid:H,auth:e,email:v,emailVerified:K,displayName:_,isAnonymous:le,photoURL:N,phoneNumber:k,tenantId:x,stsTokenManager:J,createdAt:$,lastLoginAt:W});return de&&Array.isArray(de)&&(ye.providerData=de.map(Se=>Object.assign({},Se))),I&&(ye._redirectEventId=I),ye}static async _fromIdTokenResponse(e,t,i=!1){const o=new hi;o.updateFromServerResponse(t);const l=new vn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Ha(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];te(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Y_(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new hi;f.updateFromIdToken(i);const h=new vn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new rd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(h,g),h}}/**
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
 */const sm=new Map;function wn(r){In(r instanceof Function,"Expected a class definition");let e=sm.get(r);return e?(In(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,sm.set(r,e),e)}/**
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
 */class Q_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Q_.type="NONE";const om=Q_;/**
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
 */function Oa(r,e,t){return`firebase:${r}:${e}:${t}`}class pi{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Oa(this.userKey,o.apiKey,l),this.fullPersistenceKey=Oa("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new pi(wn(om),e,i);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=o[0]||wn(om);const c=Oa(i,e.config.apiKey,e.name);let f=null;for(const g of t)try{const y=await g._get(c);if(y){const _=vn._fromJSON(e,y);g!==l&&(f=_),l=g;break}}catch{}const h=o.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!h.length?new pi(l,e,i):(l=h[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new pi(l,e,i))}}/**
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
 */function am(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ey(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(J_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ny(e))return"Blackberry";if(ry(e))return"Webos";if(X_(e))return"Safari";if((e.includes("chrome/")||Z_(e))&&!e.includes("edge/"))return"Chrome";if(ty(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function J_(r=_t()){return/firefox\//i.test(r)}function X_(r=_t()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Z_(r=_t()){return/crios\//i.test(r)}function ey(r=_t()){return/iemobile/i.test(r)}function ty(r=_t()){return/android/i.test(r)}function ny(r=_t()){return/blackberry/i.test(r)}function ry(r=_t()){return/webos/i.test(r)}function xd(r=_t()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function B0(r=_t()){var e;return xd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function H0(){return nI()&&document.documentMode===10}function iy(r=_t()){return xd(r)||ty(r)||ry(r)||ny(r)||/windows phone/i.test(r)||ey(r)}/**
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
 */function sy(r,e=[]){let t;switch(r){case"Browser":t=am(_t());break;case"Worker":t=`${am(_t())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${br}/${i}`}/**
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
 */class K0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,f)=>{try{const h=e(l);c(h)}catch(h){f(h)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function G0(r,e={}){return ur(r,"GET","/v2/passwordPolicy",Dr(r,e))}/**
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
 */const q0=6;class Y0{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:q0,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,f;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(i=h.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsLowercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(l=h.containsUppercaseLetter)!==null&&l!==void 0?l:!0),h.isValid&&(h.isValid=(c=h.containsNumericCharacter)!==null&&c!==void 0?c:!0),h.isValid&&(h.isValid=(f=h.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),h}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class Q0{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lm(this),this.idTokenSubscription=new lm(this),this.beforeStateQueue=new K0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=W_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wn(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await pi.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await q_(this,{idToken:e}),i=await vn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(_n(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,h=await this.tryRedirectSignIn(e);(!c||c===f)&&(h!=null&&h.user)&&(o=h.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ha(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=P0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(nr(this));const t=e?ft(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await G0(this),t=new Y0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ro("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await W0(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wn(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await pi.create(this,[wn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,i,o);return()=>{c=!0,h()}}else{const h=e.addObserver(t);return()=>{c=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&k0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Pi(r){return ft(r)}class lm{constructor(e){this.auth=e,this.observer=null,this.addObserver=fI(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ml={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function J0(r){ml=r}function oy(r){return ml.loadJS(r)}function X0(){return ml.recaptchaEnterpriseScript}function Z0(){return ml.gapiScript}function eT(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class tT{constructor(){this.enterprise=new nT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class nT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const rT="recaptcha-enterprise",ay="NO_RECAPTCHA";class iT{constructor(e){this.type=rT,this.auth=Pi(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{D0(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new b0(h);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(h=>{f(h)})})}function o(l,c,f){const h=window.grecaptcha;rm(h)?h.enterprise.ready(()=>{h.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(ay)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new tT().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(f=>{if(!t&&rm(window.grecaptcha))o(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let h=X0();h.length!==0&&(h+=f),oy(h).then(()=>{o(f,l,c)}).catch(g=>{c(g)})}}).catch(f=>{c(f)})})}}async function um(r,e,t,i=!1,o=!1){const l=new iT(r);let c;if(o)c=ay;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const h=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const h=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function cm(r,e,t,i,o){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await um(r,e,t,t==="getOobCode");return i(r,c)}else return i(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await um(r,e,t,t==="getOobCode");return i(r,f)}else return Promise.reject(c)})}/**
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
 */function sT(r,e){const t=pl(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Va(l,e??{}))return o;qt(o,"already-initialized")}return t.initialize({options:e})}function oT(r,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(wn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function aT(r,e,t){const i=Pi(r);te(i._canInitEmulator,i,"emulator-config-failed"),te(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=ly(e),{host:c,port:f}=lT(e),h=f===null?"":`:${f}`;i.config.emulator={url:`${l}//${c}${h}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),uT()}function ly(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function lT(r){const e=ly(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:dm(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:dm(c)}}}function dm(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function uT(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Od{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,t){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function cT(r,e){return ur(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function dT(r,e){return gl(r,"POST","/v1/accounts:signInWithPassword",Dr(r,e))}/**
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
 */async function fT(r,e){return gl(r,"POST","/v1/accounts:signInWithEmailLink",Dr(r,e))}async function hT(r,e){return gl(r,"POST","/v1/accounts:signInWithEmailLink",Dr(r,e))}/**
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
 */class Bs extends Od{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Bs(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Bs(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cm(e,t,"signInWithPassword",dT);case"emailLink":return fT(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cm(e,i,"signUpPassword",cT);case"emailLink":return hT(e,{idToken:t,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function gi(r,e){return gl(r,"POST","/v1/accounts:signInWithIdp",Dr(r,e))}/**
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
 */const pT="http://localhost";class Pr extends Od{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=kd(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new Pr(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return gi(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,gi(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gi(e,t)}buildRequest(){const e={requestUri:pT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ni(t)}return e}}/**
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
 */function gT(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mT(r){const e=Rs(Ns(r)).link,t=e?Rs(Ns(e)).deep_link_id:null,i=Rs(Ns(r)).deep_link_id;return(i?Rs(Ns(i)).link:null)||i||t||e||r}class Ad{constructor(e){var t,i,o,l,c,f;const h=Rs(Ns(e)),g=(t=h.apiKey)!==null&&t!==void 0?t:null,y=(i=h.oobCode)!==null&&i!==void 0?i:null,_=gT((o=h.mode)!==null&&o!==void 0?o:null);te(g&&y&&_,"argument-error"),this.apiKey=g,this.operation=_,this.code=y,this.continueUrl=(l=h.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=h.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(f=h.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=mT(e);try{return new Ad(t)}catch{return null}}}/**
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
 */class xi{constructor(){this.providerId=xi.PROVIDER_ID}static credential(e,t){return Bs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Ad.parseLink(t);return te(i,"argument-error"),Bs._fromEmailAndCode(e,i.code,i.tenantId)}}xi.PROVIDER_ID="password";xi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class uy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class so extends uy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qn extends so{constructor(){super("facebook.com")}static credential(e){return Pr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
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
 */class Yn extends so{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Pr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Yn.credential(t,i)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
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
 */class Qn extends so{constructor(){super("github.com")}static credential(e){return Pr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
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
 */class Jn extends so{constructor(){super("twitter.com")}static credential(e,t){return Pr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Jn.credential(t,i)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
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
 */class vi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await vn._fromIdTokenResponse(e,i,o),c=fm(i);return new vi({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=fm(i);return new vi({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function fm(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Ka extends kn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Ka.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Ka(e,t,i,o)}}function cy(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Ka._fromErrorAndOperation(r,l,e,i):l})}async function _T(r,e,t=!1){const i=await Ws(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return vi._forOperation(r,"link",i)}/**
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
 */async function yT(r,e,t=!1){const{auth:i}=r;if(_n(i.app))return Promise.reject(nr(i));const o="reauthenticate";try{const l=await Ws(r,cy(i,o,e,r),t);te(l.idToken,i,"internal-error");const c=Pd(l.idToken);te(c,i,"internal-error");const{sub:f}=c;return te(r.uid===f,i,"user-mismatch"),vi._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&qt(i,"user-mismatch"),l}}/**
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
 */async function dy(r,e,t=!1){if(_n(r.app))return Promise.reject(nr(r));const i="signIn",o=await cy(r,i,e),l=await vi._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(l.user),l}async function vT(r,e){return dy(Pi(r),e)}/**
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
 */async function wT(r){const e=Pi(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ET(r,e,t){return _n(r.app)?Promise.reject(nr(r)):vT(ft(r),xi.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&wT(r),i})}function ST(r,e,t,i){return ft(r).onIdTokenChanged(e,t,i)}function CT(r,e,t){return ft(r).beforeAuthStateChanged(e,t)}function IT(r,e,t,i){return ft(r).onAuthStateChanged(e,t,i)}const Ga="__sak";/**
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
 */class fy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ga,"1"),this.storage.removeItem(Ga),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const TT=1e3,kT=10;class hy extends fy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,h)=>{this.notifyListeners(c,h)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);H0()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,kT):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},TT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hy.type="LOCAL";const RT=hy;/**
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
 */class py extends fy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}py.type="SESSION";const gy=py;/**
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
 */function NT(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class _l{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new _l(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(c).map(async g=>g(t.origin,l)),h=await NT(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_l.receivers=[];/**
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
 */function Ld(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class PT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((f,h)=>{const g=Ld("",20);o.port1.start();const y=setTimeout(()=>{h(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(_){const v=_;if(v.data.eventId===g)switch(v.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(v.data.response);break;default:clearTimeout(y),clearTimeout(l),h(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function sn(){return window}function xT(r){sn().location.href=r}/**
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
 */function my(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function OT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AT(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function LT(){return my()?self:null}/**
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
 */const _y="firebaseLocalStorageDb",bT=1,qa="firebaseLocalStorage",yy="fbase_key";class oo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function yl(r,e){return r.transaction([qa],e?"readwrite":"readonly").objectStore(qa)}function DT(){const r=indexedDB.deleteDatabase(_y);return new oo(r).toPromise()}function id(){const r=indexedDB.open(_y,bT);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(qa,{keyPath:yy})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(qa)?e(i):(i.close(),await DT(),e(await id()))})})}async function hm(r,e,t){const i=yl(r,!0).put({[yy]:e,value:t});return new oo(i).toPromise()}async function MT(r,e){const t=yl(r,!1).get(e),i=await new oo(t).toPromise();return i===void 0?null:i.value}function pm(r,e){const t=yl(r,!0).delete(e);return new oo(t).toPromise()}const FT=800,UT=3;class vy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await id(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>UT)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return my()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_l._getInstance(LT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await OT(),!this.activeServiceWorker)return;this.sender=new PT(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await id();return await hm(e,Ga,"1"),await pm(e,Ga),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>hm(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>MT(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>pm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=yl(o,!1).getAll();return new oo(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vy.type="LOCAL";const jT=vy;new io(3e4,6e4);/**
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
 */function $T(r,e){return e?wn(e):(te(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class bd extends Od{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return gi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zT(r){return dy(r.auth,new bd(r),r.bypassAuthState)}function VT(r){const{auth:e,user:t}=r;return te(t,e,"internal-error"),yT(t,new bd(r),r.bypassAuthState)}async function WT(r){const{auth:e,user:t}=r;return te(t,e,"internal-error"),_T(t,new bd(r),r.bypassAuthState)}/**
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
 */class wy{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const h={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(h))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zT;case"linkViaPopup":case"linkViaRedirect":return WT;case"reauthViaPopup":case"reauthViaRedirect":return VT;default:qt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const BT=new io(2e3,1e4);class di extends wy{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,di.currentPopupAction&&di.currentPopupAction.cancel(),di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Ld();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BT.get())};e()}}di.currentPopupAction=null;/**
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
 */const HT="pendingRedirect",Aa=new Map;class KT extends wy{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Aa.get(this.auth._key());if(!e){try{const i=await GT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Aa.set(this.auth._key(),e)}return this.bypassAuthState||Aa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GT(r,e){const t=QT(e),i=YT(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function qT(r,e){Aa.set(r._key(),e)}function YT(r){return wn(r._redirectPersistence)}function QT(r){return Oa(HT,r.config.apiKey,r.name)}async function JT(r,e,t=!1){if(_n(r.app))return Promise.reject(nr(r));const i=Pi(r),o=$T(i,e),c=await new KT(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const XT=10*60*1e3;class ZT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ek(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Ey(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(rn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XT&&this.cachedEventUids.clear(),this.cachedEventUids.has(gm(e))}saveEventToCache(e){this.cachedEventUids.add(gm(e)),this.lastProcessedEventTime=Date.now()}}function gm(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Ey({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ek(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ey(r);default:return!1}}/**
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
 */async function tk(r,e={}){return ur(r,"GET","/v1/projects",e)}/**
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
 */const nk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rk=/^https?/;async function ik(r){if(r.config.emulator)return;const{authorizedDomains:e}=await tk(r);for(const t of e)try{if(sk(t))return}catch{}qt(r,"unauthorized-domain")}function sk(r){const e=nd(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!rk.test(t))return!1;if(nk.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const ok=new io(3e4,6e4);function mm(){const r=sn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function ak(r){return new Promise((e,t)=>{var i,o,l;function c(){mm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mm(),t(rn(r,"network-request-failed"))},timeout:ok.get()})}if(!((o=(i=sn().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=sn().gapi)===null||l===void 0)&&l.load)c();else{const f=eT("iframefcb");return sn()[f]=()=>{gapi.load?c():t(rn(r,"network-request-failed"))},oy(`${Z0()}?onload=${f}`).catch(h=>t(h))}}).catch(e=>{throw La=null,e})}let La=null;function lk(r){return La=La||ak(r),La}/**
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
 */const uk=new io(5e3,15e3),ck="__/auth/iframe",dk="emulator/auth/iframe",fk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pk(r){const e=r.config;te(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Nd(e,dk):`https://${r.config.authDomain}/${ck}`,i={apiKey:e.apiKey,appName:r.name,v:br},o=hk.get(r.config.apiHost);o&&(i.eid=o);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Ni(i).slice(1)}`}async function gk(r){const e=await lk(r),t=sn().gapi;return te(t,r,"internal-error"),e.open({where:document.body,url:pk(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fk,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=rn(r,"network-request-failed"),f=sn().setTimeout(()=>{l(c)},uk.get());function h(){sn().clearTimeout(f),o(i)}i.ping(h).then(h,()=>{l(c)})}))}/**
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
 */const mk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_k=500,yk=600,vk="_blank",wk="http://localhost";class _m{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ek(r,e,t,i=_k,o=yk){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const h=Object.assign(Object.assign({},mk),{width:i.toString(),height:o.toString(),top:l,left:c}),g=_t().toLowerCase();t&&(f=Z_(g)?vk:t),J_(g)&&(e=e||wk,h.scrollbars="yes");const y=Object.entries(h).reduce((v,[k,N])=>`${v}${k}=${N},`,"");if(B0(g)&&f!=="_self")return Sk(e||"",f),new _m(null);const _=window.open(e||"",f,y);te(_,r,"popup-blocked");try{_.focus()}catch{}return new _m(_)}function Sk(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Ck="__/auth/handler",Ik="emulator/auth/handler",Tk=encodeURIComponent("fac");async function ym(r,e,t,i,o,l){te(r.config.authDomain,r,"auth-domain-config-required"),te(r.config.apiKey,r,"invalid-api-key");const c={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:br,eventId:o};if(e instanceof uy){e.setDefaultLanguage(r.languageCode),c.providerId=e.providerId||"",Qc(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,_]of Object.entries({}))c[y]=_}if(e instanceof so){const y=e.getScopes().filter(_=>_!=="");y.length>0&&(c.scopes=y.join(","))}r.tenantId&&(c.tid=r.tenantId);const f=c;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const h=await r._getAppCheckToken(),g=h?`#${Tk}=${encodeURIComponent(h)}`:"";return`${kk(r)}?${Ni(f).slice(1)}${g}`}function kk({config:r}){return r.emulator?Nd(r,Ik):`https://${r.authDomain}/${Ck}`}/**
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
 */const bc="webStorageSupport";class Rk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gy,this._completeRedirectFn=JT,this._overrideRedirectResult=qT}async _openPopup(e,t,i,o){var l;In((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await ym(e,t,i,nd(),o);return Ek(e,c,Ld())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await ym(e,t,i,nd(),o);return xT(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(In(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await gk(e),i=new ZT(e);return t.register("authEvent",o=>(te(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(bc,{type:bc},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[bc];c!==void 0&&t(!!c),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ik(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return iy()||X_()||xd()}}const Nk=Rk;var vm="@firebase/auth",wm="1.8.2";/**
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
 */class Pk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xk(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ok(r){Nr(new sr("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=i.options;te(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const h={apiKey:c,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sy(r)},g=new Q0(i,o,l,h);return oT(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Nr(new sr("auth-internal",e=>{const t=Pi(e.getProvider("auth").getImmediate());return(i=>new Pk(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(vm,wm,xk(r)),nn(vm,wm,"esm2017")}/**
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
 */const Ak=5*60,Lk=L_("authIdTokenMaxAge")||Ak;let Em=null;const bk=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Lk)return;const o=t==null?void 0:t.token;Em!==o&&(Em=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Sy(r=Td()){const e=pl(r,"auth");if(e.isInitialized())return e.getImmediate();const t=sT(r,{popupRedirectResolver:Nk,persistence:[jT,RT,gy]}),i=L_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=bk(l.toString());CT(t,c,()=>c(t.currentUser)),ST(t,f=>c(f))}}const o=x_("auth");return o&&aT(t,`http://${o}`),t}function Dk(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}J0({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const l=rn("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",Dk().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ok("Browser");/**
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
 */const Cy="firebasestorage.googleapis.com",Mk="storageBucket",Fk=2*60*1e3,Uk=10*60*1e3;/**
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
 */class ln extends kn{constructor(e,t,i=0){super(Dc(e),`Firebase Storage: ${t} (${Dc(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ln.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Dc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var on;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(on||(on={}));function Dc(r){return"storage/"+r}function jk(){const r="An unknown error occurred, please check the error payload for server response.";return new ln(on.UNKNOWN,r)}function $k(){return new ln(on.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zk(){return new ln(on.CANCELED,"User canceled the upload/download.")}function Vk(r){return new ln(on.INVALID_URL,"Invalid URL '"+r+"'.")}function Wk(r){return new ln(on.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function Sm(r){return new ln(on.INVALID_ARGUMENT,r)}function Iy(){return new ln(on.APP_DELETED,"The Firebase app was deleted.")}function Bk(r){return new ln(on.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Ht{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Ht.makeFromUrl(e,t)}catch{return new Ht(e,"")}if(i.path==="")return i;throw Wk(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(K){K.path.charAt(K.path.length-1)==="/"&&(K.path_=K.path_.slice(0,-1))}const c="(/(.*))?$",f=new RegExp("^gs://"+o+c,"i"),h={bucket:1,path:3};function g(K){K.path_=decodeURIComponent(K.path)}const y="v[A-Za-z0-9_]+",_=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",k=new RegExp(`^https?://${_}/${y}/b/${o}/o${v}`,"i"),N={bucket:1,path:3},x=t===Cy?"(?:storage.googleapis.com|storage.cloud.google.com)":t,I="([^?#]*)",$=new RegExp(`^https?://${x}/${o}/${I}`,"i"),H=[{regex:f,indices:h,postModify:l},{regex:k,indices:N,postModify:g},{regex:$,indices:{bucket:1,path:2},postModify:g}];for(let K=0;K<H.length;K++){const le=H[K],de=le.regex.exec(e);if(de){const ie=de[le.indices.bucket];let J=de[le.indices.path];J||(J=""),i=new Ht(ie,J),le.postModify(i);break}}if(i==null)throw Vk(e);return i}}class Hk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Kk(r,e,t){let i=1,o=null,l=null,c=!1,f=0;function h(){return f===2}let g=!1;function y(...I){g||(g=!0,e.apply(null,I))}function _(I){o=setTimeout(()=>{o=null,r(k,h())},I)}function v(){l&&clearTimeout(l)}function k(I,...$){if(g){v();return}if(I){v(),y.call(null,I,...$);return}if(h()||c){v(),y.call(null,I,...$);return}i<64&&(i*=2);let H;f===1?(f=2,H=0):H=(i+Math.random())*1e3,_(H)}let N=!1;function x(I){N||(N=!0,v(),!g&&(o!==null?(I||(f=2),clearTimeout(o),_(0)):I||(f=1)))}return _(0),l=setTimeout(()=>{c=!0,x(!0)},t),x}function Gk(r){r(!1)}/**
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
 */function qk(r){return r!==void 0}function Cm(r,e,t,i){if(i<e)throw Sm(`Invalid value for '${r}'. Expected ${e} or greater.`);if(i>t)throw Sm(`Invalid value for '${r}'. Expected ${t} or less.`)}function Yk(r){const e=encodeURIComponent;let t="?";for(const i in r)if(r.hasOwnProperty(i)){const o=e(i)+"="+e(r[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Ya;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Ya||(Ya={}));/**
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
 */function Qk(r,e){const t=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,l=e.indexOf(r)!==-1;return t||o||l}/**
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
 */class Jk{constructor(e,t,i,o,l,c,f,h,g,y,_,v=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=f,this.errorCallback_=h,this.timeout_=g,this.progressCallback_=y,this.connectionFactory_=_,this.retry=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,N)=>{this.resolve_=k,this.reject_=N,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new Ra(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=f=>{const h=f.loaded,g=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,g)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const f=l.getErrorCode()===Ya.NO_ERROR,h=l.getStatus();if(!f||Qk(h,this.additionalRetryCodes_)&&this.retry){const y=l.getErrorCode()===Ya.ABORT;i(!1,new Ra(!1,null,y));return}const g=this.successCodes_.indexOf(h)!==-1;i(!0,new Ra(g,l))})},t=(i,o)=>{const l=this.resolve_,c=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const h=this.callback_(f,f.getResponse());qk(h)?l(h):l()}catch(h){c(h)}else if(f!==null){const h=jk();h.serverResponse=f.getErrorText(),this.errorCallback_?c(this.errorCallback_(f,h)):c(h)}else if(o.canceled){const h=this.appDelete_?Iy():zk();c(h)}else{const h=$k();c(h)}};this.canceled_?t(!1,new Ra(!1,null,!0)):this.backoffId_=Kk(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Gk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ra{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function Xk(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function Zk(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function eR(r,e){e&&(r["X-Firebase-GMPID"]=e)}function tR(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function nR(r,e,t,i,o,l,c=!0){const f=Yk(r.urlParams),h=r.url+f,g=Object.assign({},r.headers);return eR(g,e),Xk(g,t),Zk(g,l),tR(g,i),new Jk(h,r.method,g,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,c)}/**
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
 */function rR(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function iR(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */class Qa{constructor(e,t){this._service=e,t instanceof Ht?this._location=t:this._location=Ht.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Qa(e,t)}get root(){const e=new Ht(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return iR(this._location.path)}get storage(){return this._service}get parent(){const e=rR(this._location.path);if(e===null)return null;const t=new Ht(this._location.bucket,e);return new Qa(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Bk(e)}}function Im(r,e){const t=e==null?void 0:e[Mk];return t==null?null:Ht.makeFromBucketSpec(t,r)}function sR(r,e,t,i={}){r.host=`${e}:${t}`,r._protocol="http";const{mockUserToken:o}=i;o&&(r._overrideAuthToken=typeof o=="string"?o:b_(o,r.app.options.projectId))}class oR{constructor(e,t,i,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=Cy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Fk,this._maxUploadRetryTime=Uk,this._requests=new Set,o!=null?this._bucket=Ht.makeFromBucketSpec(o,this._host):this._bucket=Im(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ht.makeFromBucketSpec(this._url,e):this._bucket=Im(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Cm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Cm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qa(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new Hk(Iy());{const c=nR(e,this._appId,i,o,t,this._firebaseVersion,l);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const Tm="@firebase/storage",km="0.13.5";/**
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
 */const Ty="storage";function aR(r=Td(),e){r=ft(r);const i=pl(r,Ty).getImmediate({identifier:e}),o=O_("storage");return o&&lR(i,...o),i}function lR(r,e,t,i={}){sR(r,e,t,i)}function uR(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),i=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new oR(t,i,o,e,br)}function cR(){Nr(new sr(Ty,uR,"PUBLIC").setMultipleInstances(!0)),nn(Tm,km,""),nn(Tm,km,"esm2017")}cR();var Rm={};const Nm="@firebase/database",Pm="1.0.11";/**
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
 */let ky="";function dR(r){ky=r}/**
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
 */class fR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Qe(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:zs(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class hR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return an(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ry=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new fR(e)}}catch{}return new hR},Tr=Ry("localStorage"),pR=Ry("sessionStorage");/**
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
 */const mi=new Cd("@firebase/database"),gR=function(){let r=1;return function(){return r++}}(),Ny=function(r){const e=gI(r),t=new dI;t.update(e);const i=t.digest();return wd.encodeByteArray(i)},ao=function(...r){let e="";for(let t=0;t<r.length;t++){const i=r[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ao.apply(null,i):typeof i=="object"?e+=Qe(i):e+=i,e+=" "}return e};let Ls=null,xm=!0;const mR=function(r,e){F(!0,"Can't turn on custom loggers persistently."),mi.logLevel=Ce.VERBOSE,Ls=mi.log.bind(mi)},it=function(...r){if(xm===!0&&(xm=!1,Ls===null&&pR.get("logging_enabled")===!0&&mR()),Ls){const e=ao.apply(null,r);Ls(e)}},lo=function(r){return function(...e){it(r,...e)}},sd=function(...r){const e="FIREBASE INTERNAL ERROR: "+ao(...r);mi.error(e)},Tn=function(...r){const e=`FIREBASE FATAL ERROR: ${ao(...r)}`;throw mi.error(e),new Error(e)},mt=function(...r){const e="FIREBASE WARNING: "+ao(...r);mi.warn(e)},_R=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&mt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Dd=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},yR=function(r){if(document.readyState==="complete")r();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},wi="[MIN_NAME]",xr="[MAX_NAME]",Mr=function(r,e){if(r===e)return 0;if(r===wi||e===xr)return-1;if(e===wi||r===xr)return 1;{const t=Om(r),i=Om(e);return t!==null?i!==null?t-i===0?r.length-e.length:t-i:-1:i!==null?1:r<e?-1:1}},vR=function(r,e){return r===e?0:r<e?-1:1},Es=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Qe(e))},Md=function(r){if(typeof r!="object"||r===null)return Qe(r);const e=[];for(const i in r)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Qe(e[i]),t+=":",t+=Md(r[e[i]]);return t+="}",t},Py=function(r,e){const t=r.length;if(t<=e)return[r];const i=[];for(let o=0;o<t;o+=e)o+e>t?i.push(r.substring(o,t)):i.push(r.substring(o,o+e));return i};function st(r,e){for(const t in r)r.hasOwnProperty(t)&&e(t,r[t])}const xy=function(r){F(!Dd(r),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let o,l,c,f,h;r===0?(l=0,c=0,o=1/r===-1/0?1:0):(o=r<0,r=Math.abs(r),r>=Math.pow(2,1-i)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),i),l=f+i,c=Math.round(r*Math.pow(2,t-f)-Math.pow(2,t))):(l=0,c=Math.round(r/Math.pow(2,1-i-t))));const g=[];for(h=t;h;h-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(h=e;h;h-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(o?1:0),g.reverse();const y=g.join("");let _="";for(h=0;h<64;h+=8){let v=parseInt(y.substr(h,8),2).toString(16);v.length===1&&(v="0"+v),_=_+v}return _.toLowerCase()},wR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ER=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function SR(r,e){let t="Unknown Error";r==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?t="Client doesn't have permission to access the desired data.":r==="unavailable"&&(t="The service is unavailable");const i=new Error(r+" at "+e._path.toString()+": "+t);return i.code=r.toUpperCase(),i}const CR=new RegExp("^-?(0*)\\d{1,10}$"),IR=-2147483648,TR=2147483647,Om=function(r){if(CR.test(r)){const e=Number(r);if(e>=IR&&e<=TR)return e}return null},Oi=function(r){try{r()}catch(e){setTimeout(()=>{const t=e.stack||"";throw mt("Exception was thrown by user callback.",t),e},Math.floor(0))}},kR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},bs=function(r,e){const t=setTimeout(r,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class RR{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){mt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class NR{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(it("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',mt(e)}}class ba{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ba.OWNER="owner";/**
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
 */const Fd="5",Oy="v",Ay="s",Ly="r",by="f",Dy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,My="ls",Fy="p",od="ac",Uy="websocket",jy="long_polling";/**
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
 */class $y{constructor(e,t,i,o,l=!1,c="",f=!1,h=!1){this.secure=t,this.namespace=i,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Tr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Tr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function PR(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function zy(r,e,t){F(typeof e=="string","typeof type must == string"),F(typeof t=="object","typeof params must == object");let i;if(e===Uy)i=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===jy)i=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);PR(r)&&(t.ns=r.namespace);const o=[];return st(t,(l,c)=>{o.push(l+"="+c)}),i+o.join("&")}/**
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
 */class xR{constructor(){this.counters_={}}incrementCounter(e,t=1){an(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return qC(this.counters_)}}/**
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
 */const Mc={},Fc={};function Ud(r){const e=r.toString();return Mc[e]||(Mc[e]=new xR),Mc[e]}function OR(r,e){const t=r.toString();return Fc[t]||(Fc[t]=e()),Fc[t]}/**
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
 */class AR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<i.length;++o)i[o]&&Oi(()=>{this.onMessage_(i[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Am="start",LR="close",bR="pLPCommand",DR="pRTLPCB",Vy="id",Wy="pw",By="ser",MR="cb",FR="seg",UR="ts",jR="d",$R="dframe",Hy=1870,Ky=30,zR=Hy-Ky,VR=25e3,WR=3e4;class fi{constructor(e,t,i,o,l,c,f){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=o,this.authToken=l,this.transportSessionId=c,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=lo(e),this.stats_=Ud(t),this.urlFn=h=>(this.appCheckToken&&(h[od]=this.appCheckToken),zy(t,jy,h))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new AR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(WR)),yR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new jd((...l)=>{const[c,f,h,g,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===Am)this.id=f,this.password=h;else if(c===LR)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,f)},()=>{this.onClosed_()},this.urlFn);const i={};i[Am]="t",i[By]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[MR]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Oy]=Fd,this.transportSessionId&&(i[Ay]=this.transportSessionId),this.lastSessionId&&(i[My]=this.lastSessionId),this.applicationId&&(i[Fy]=this.applicationId),this.appCheckToken&&(i[od]=this.appCheckToken),typeof location<"u"&&location.hostname&&Dy.test(location.hostname)&&(i[Ly]=by);const o=this.urlFn(i);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fi.forceAllow_=!0}static forceDisallow(){fi.forceDisallow_=!0}static isAvailable(){return fi.forceAllow_?!0:!fi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!wR()&&!ER()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Qe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=N_(t),o=Py(i,zR);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[$R]="t",i[Vy]=e,i[Wy]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Qe(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class jd{constructor(e,t,i,o){this.onDisconnect=i,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gR(),window[bR+this.uniqueCallbackIdentifier]=e,window[DR+this.uniqueCallbackIdentifier]=t,this.myIFrame=jd.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(f){it("frame writing exception"),f.stack&&it(f.stack),it(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||it("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Vy]=this.myID,e[Wy]=this.myPW,e[By]=this.currentSerial;let t=this.urlFn(e),i="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ky+i.length<=Hy;){const c=this.pendingSegs.shift();i=i+"&"+FR+o+"="+c.seg+"&"+UR+o+"="+c.ts+"&"+jR+o+"="+c.d,o++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},o=setTimeout(i,Math.floor(VR)),l=()=>{clearTimeout(o),i()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const o=i.readyState;(!o||o==="loaded"||o==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{it("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const BR=16384,HR=45e3;let Ja=null;typeof MozWebSocket<"u"?Ja=MozWebSocket:typeof WebSocket<"u"&&(Ja=WebSocket);class tn{constructor(e,t,i,o,l,c,f){this.connId=e,this.applicationId=i,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=lo(this.connId),this.stats_=Ud(t),this.connURL=tn.connectionURL_(t,c,f,o,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,o,l){const c={};return c[Oy]=Fd,typeof location<"u"&&location.hostname&&Dy.test(location.hostname)&&(c[Ly]=by),t&&(c[Ay]=t),i&&(c[My]=i),o&&(c[od]=o),l&&(c[Fy]=l),zy(e,Uy,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Tr.set("previous_websocket_failure",!0);try{let i;rI(),this.mySock=new Ja(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const o=i.message||i.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const o=i.message||i.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){tn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ja!==null&&!tn.forceDisallow_}static previouslyFailed(){return Tr.isInMemoryStorage||Tr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Tr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=zs(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Qe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Py(t,BR);i.length>1&&this.sendString_(String(i.length));for(let o=0;o<i.length;o++)this.sendString_(i[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(HR))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tn.responsesRequiredToBeHealthy=2;tn.healthyTimeout=3e4;/**
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
 */class Hs{static get ALL_TRANSPORTS(){return[fi,tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=tn.isAvailable();let i=t&&!tn.previouslyFailed();if(e.webSocketOnly&&(t||mt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[tn];else{const o=this.transports_=[];for(const l of Hs.ALL_TRANSPORTS)l&&l.isAvailable()&&o.push(l);Hs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Hs.globalTransportInitialized_=!1;/**
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
 */const KR=6e4,GR=5e3,qR=10*1024,YR=100*1024,Uc="t",Lm="d",QR="s",bm="r",JR="e",Dm="o",Mm="a",Fm="n",Um="p",XR="h";class ZR{constructor(e,t,i,o,l,c,f,h,g,y){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=c,this.onReady_=f,this.onDisconnect_=h,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=lo("c:"+this.id+":"),this.transportManager_=new Hs(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=bs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>YR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Uc in e){const t=e[Uc];t===Mm?this.upgradeIfSecondaryHealthy_():t===bm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Dm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Es("t",e),i=Es("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Um,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Es("t",e),i=Es("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Es(Uc,e);if(Lm in e){const i=e[Lm];if(t===XR){const o=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(t===Fm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===QR?this.onConnectionShutdown_(i):t===bm?this.onReset_(i):t===JR?sd("Server Error: "+i):t===Dm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):sd("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Fd!==i&&mt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),bs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(KR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):bs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(GR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Um,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Tr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Gy{put(e,t,i,o){}merge(e,t,i,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class qy{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let o=0;o<i.length;o++)i[o].callback.apply(i[o].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const o=this.getInitialEvent(e);o&&t.apply(i,o)}off(e,t,i){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let l=0;l<o.length;l++)if(o[l].callback===t&&(!i||i===o[l].context)){o.splice(l,1);return}}validateEventType_(e){F(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Xa extends qy{static getInstance(){return new Xa}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Sd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const jm=32,$m=768;class Ie{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[i]=this.pieces_[o],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function _e(){return new Ie("")}function fe(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function or(r){return r.pieces_.length-r.pieceNum_}function Pe(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new Ie(r.pieces_,e)}function $d(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function eN(r){let e="";for(let t=r.pieceNum_;t<r.pieces_.length;t++)r.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[t])));return e||"/"}function Ks(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function Yy(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let t=r.pieceNum_;t<r.pieces_.length-1;t++)e.push(r.pieces_[t]);return new Ie(e,0)}function je(r,e){const t=[];for(let i=r.pieceNum_;i<r.pieces_.length;i++)t.push(r.pieces_[i]);if(e instanceof Ie)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let o=0;o<i.length;o++)i[o].length>0&&t.push(i[o])}return new Ie(t,0)}function ce(r){return r.pieceNum_>=r.pieces_.length}function gt(r,e){const t=fe(r),i=fe(e);if(t===null)return e;if(t===i)return gt(Pe(r),Pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function tN(r,e){const t=Ks(r,0),i=Ks(e,0);for(let o=0;o<t.length&&o<i.length;o++){const l=Mr(t[o],i[o]);if(l!==0)return l}return t.length===i.length?0:t.length<i.length?-1:1}function Qy(r,e){if(or(r)!==or(e))return!1;for(let t=r.pieceNum_,i=e.pieceNum_;t<=r.pieces_.length;t++,i++)if(r.pieces_[t]!==e.pieces_[i])return!1;return!0}function Mt(r,e){let t=r.pieceNum_,i=e.pieceNum_;if(or(r)>or(e))return!1;for(;t<r.pieces_.length;){if(r.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class nN{constructor(e,t){this.errorPrefix_=t,this.parts_=Ks(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=hl(this.parts_[i]);Jy(this)}}function rN(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=hl(e),Jy(r)}function iN(r){const e=r.parts_.pop();r.byteLength_-=hl(e),r.parts_.length>0&&(r.byteLength_-=1)}function Jy(r){if(r.byteLength_>$m)throw new Error(r.errorPrefix_+"has a key path longer than "+$m+" bytes ("+r.byteLength_+").");if(r.parts_.length>jm)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jm+") or object contains a cycle "+Ir(r))}function Ir(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
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
 */class zd extends qy{static getInstance(){return new zd}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ss=1e3,sN=60*5*1e3,zm=30*1e3,oN=1.3,aN=3e4,lN="server_kill",Vm=3;class Sn extends Gy{constructor(e,t,i,o,l,c,f,h){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=f,this.authOverride_=h,this.id=Sn.nextPersistentConnectionId_++,this.log_=lo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ss,this.maxReconnectDelay_=sN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,h)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const o=++this.requestNumber_,l={r:o,a:e,b:t};this.log_(Qe(l)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),i&&(this.requestCBHash_[o]=i)}get(e){this.initConnection_();const t=new no,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const f=c.d;c.s==="ok"?t.resolve(f):t.reject(f)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,i,o){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const f={onComplete:o,hashFn:t,query:e,tag:i};this.listens.get(c).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),o=t._queryIdentifier;this.log_("Listen on "+i+" for "+o);const l={p:i},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,f=>{const h=f.d,g=f.s;Sn.warnOnListenWarnings_(h,t),(this.listens.get(i)&&this.listens.get(i).get(o))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(i,o),e.onComplete&&e.onComplete(g,h))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&an(e,"w")){const i=yi(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const o='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();mt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||cI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=uI(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,o=>{const l=o.s,c=o.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+o),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,o)&&this.connected_&&this.sendUnlisten_(i,o,e._queryObject,t)}sendUnlisten_(e,t,i,o){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";o&&(l.q=i,l.t=o),this.sendRequest(c,l)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,o){const l={p:t,d:i};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{o&&setTimeout(()=>{o(c.s,c.d)},Math.floor(0))})}put(e,t,i,o){this.putInternal("p",e,t,i,o)}merge(e,t,i,o){this.putInternal("m",e,t,i,o)}putInternal(e,t,i,o,l){this.initConnection_();const c={p:t,d:i};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:o}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const l=i.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Qe(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):sd("Unrecognized action received from server: "+Qe(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ss,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ss,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>aN&&(this.reconnectDelay_=Ss),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*oN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Sn.nextConnectionId_++,l=this.lastSessionId;let c=!1,f=null;const h=function(){f?f.close():(c=!0,i())},g=function(_){F(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(_)};this.realtime_={close:h,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,v]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?it("getToken() completed but was canceled"):(it("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=v&&v.token,f=new ZR(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,k=>{mt(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(lN)},l))}catch(_){this.log_("Failed to get token: "+_),c||(this.repoInfo_.nodeAdmin&&mt(_),h())}}}interrupt(e){it("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){it("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Qc(this.interruptReasons_)&&(this.reconnectDelay_=Ss,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(l=>Md(l)).join("$"):i="default";const o=this.removeListen_(e,i);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,t){const i=new Ie(e).toString();let o;if(this.listens.has(i)){const l=this.listens.get(i);o=l.get(t),l.delete(t),l.size===0&&this.listens.delete(i)}else o=void 0;return o}onAuthRevoked_(e,t){it("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Vm&&(this.reconnectDelay_=zm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){it("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Vm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ky.replace(/\./g,"-")]=1,Sd()?e["framework.cordova"]=1:D_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xa.getInstance().currentlyOnline();return Qc(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0;Sn.nextConnectionId_=0;/**
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
 */class vl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new ae(wi,e),o=new ae(wi,t);return this.compare(i,o)!==0}minPost(){return ae.MIN}}/**
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
 */let Na;class Xy extends vl{static get __EMPTY_NODE(){return Na}static set __EMPTY_NODE(e){Na=e}compare(e,t){return Mr(e.name,t.name)}isDefinedOn(e){throw Ri("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ae.MIN}maxPost(){return new ae(xr,Na)}makePost(e,t){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,Na)}toString(){return".key"}}const _i=new Xy;/**
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
 */class Pa{constructor(e,t,i,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?i(e.key,t):1,o&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class tt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??tt.RED,this.left=o??It.EMPTY_NODE,this.right=l??It.EMPTY_NODE}copy(e,t,i,o,l){return new tt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o=o.copy(null,t,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return It.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,o;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return It.EMPTY_NODE;o=i.right.min_(),i=i.copy(o.key,o.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}tt.RED=!0;tt.BLACK=!1;class uN{copy(e,t,i,o,l){return this}insert(e,t,i){return new tt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class It{constructor(e,t=It.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new It(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,tt.BLACK,null,null))}remove(e){return new It(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,tt.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,o=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return o?o.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(o=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Pa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Pa(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Pa(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Pa(this.root_,null,this.comparator_,!0,e)}}It.EMPTY_NODE=new uN;/**
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
 */function cN(r,e){return Mr(r.name,e.name)}function Vd(r,e){return Mr(r,e)}/**
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
 */let ad;function dN(r){ad=r}const Zy=function(r){return typeof r=="number"?"number:"+xy(r):"string:"+r},ev=function(r){if(r.isLeafNode()){const e=r.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&an(e,".sv"),"Priority must be a string or number.")}else F(r===ad||r.isEmpty(),"priority of unexpected type.");F(r===ad||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Wm;class et{static set __childrenNodeConstructor(e){Wm=e}static get __childrenNodeConstructor(){return Wm}constructor(e,t=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ev(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:fe(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=fe(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(F(i!==".priority"||or(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(Pe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zy(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=xy(this.value_):e+=this.value_,this.lazyHash_=Ny(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,o=et.VALUE_TYPE_ORDER.indexOf(t),l=et.VALUE_TYPE_ORDER.indexOf(i);return F(o>=0,"Unknown leaf type: "+t),F(l>=0,"Unknown leaf type: "+i),o===l?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let tv,nv;function fN(r){tv=r}function hN(r){nv=r}class pN extends vl{compare(e,t){const i=e.node.getPriority(),o=t.node.getPriority(),l=i.compareTo(o);return l===0?Mr(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(xr,new et("[PRIORITY-POST]",nv))}makePost(e,t){const i=tv(e);return new ae(t,new et("[PRIORITY-POST]",i))}toString(){return".priority"}}const $e=new pN;/**
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
 */const gN=Math.log(2);class mN{constructor(e){const t=l=>parseInt(Math.log(l)/gN,10),i=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const o=i(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Za=function(r,e,t,i){r.sort(e);const o=function(h,g){const y=g-h;let _,v;if(y===0)return null;if(y===1)return _=r[h],v=t?t(_):_,new tt(v,_.node,tt.BLACK,null,null);{const k=parseInt(y/2,10)+h,N=o(h,k),x=o(k+1,g);return _=r[k],v=t?t(_):_,new tt(v,_.node,tt.BLACK,N,x)}},l=function(h){let g=null,y=null,_=r.length;const v=function(N,x){const I=_-N,$=_;_-=N;const W=o(I+1,$),H=r[I],K=t?t(H):H;k(new tt(K,H.node,x,null,W))},k=function(N){g?(g.left=N,g=N):(y=N,g=N)};for(let N=0;N<h.count;++N){const x=h.nextBitIsOne(),I=Math.pow(2,h.count-(N+1));x?v(I,tt.BLACK):(v(I,tt.BLACK),v(I,tt.RED))}return y},c=new mN(r.length),f=l(c);return new It(i||e,f)};/**
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
 */let jc;const Cs={};class En{static get Default(){return F($e,"ChildrenNode.ts has not been loaded"),jc=jc||new En({".priority":Cs},{".priority":$e}),jc}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=yi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof It?t:null}hasIndex(e){return an(this.indexSet_,e.toString())}addIndex(e,t){F(e!==_i,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let o=!1;const l=t.getIterator(ae.Wrap);let c=l.getNext();for(;c;)o=o||e.isDefinedOn(c.node),i.push(c),c=l.getNext();let f;o?f=Za(i,e.getCompare()):f=Cs;const h=e.toString(),g=Object.assign({},this.indexSet_);g[h]=e;const y=Object.assign({},this.indexes_);return y[h]=f,new En(y,g)}addToIndexes(e,t){const i=za(this.indexes_,(o,l)=>{const c=yi(this.indexSet_,l);if(F(c,"Missing index implementation for "+l),o===Cs)if(c.isDefinedOn(e.node)){const f=[],h=t.getIterator(ae.Wrap);let g=h.getNext();for(;g;)g.name!==e.name&&f.push(g),g=h.getNext();return f.push(e),Za(f,c.getCompare())}else return Cs;else{const f=t.get(e.name);let h=o;return f&&(h=h.remove(new ae(e.name,f))),h.insert(e,e.node)}});return new En(i,this.indexSet_)}removeFromIndexes(e,t){const i=za(this.indexes_,o=>{if(o===Cs)return o;{const l=t.get(e.name);return l?o.remove(new ae(e.name,l)):o}});return new En(i,this.indexSet_)}}/**
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
 */let Is;class ee{static get EMPTY_NODE(){return Is||(Is=new ee(new It(Vd),null,En.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&ev(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Is}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Is:t}}getChild(e){const t=fe(e);return t===null?this:this.getImmediateChild(t).getChild(Pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(F(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new ae(e,t);let o,l;t.isEmpty()?(o=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(i,this.children_)):(o=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(i,this.children_));const c=o.isEmpty()?Is:this.priorityNode_;return new ee(o,c,l)}}updateChild(e,t){const i=fe(e);if(i===null)return t;{F(fe(e)!==".priority"||or(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(i).updateChild(Pe(e),t);return this.updateImmediateChild(i,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,o=0,l=!0;if(this.forEachChild($e,(c,f)=>{t[c]=f.val(e),i++,l&&ee.INTEGER_REGEXP_.test(c)?o=Math.max(o,Number(c)):l=!1}),!e&&l&&o<2*i){const c=[];for(const f in t)c[f]=t[f];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zy(this.getPriority().val())+":"),this.forEachChild($e,(t,i)=>{const o=i.hash();o!==""&&(e+=":"+t+":"+o)}),this.lazyHash_=e===""?"":Ny(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const o=this.resolveIndex_(i);if(o){const l=o.getPredecessorKey(new ae(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ae(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ae(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(o=>t(o.name,o.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,ae.Wrap);let l=o.peek();for(;l!=null&&t.compare(l,e)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let l=o.peek();for(;l!=null&&t.compare(l,e)>0;)o.getNext(),l=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===uo?-1:0}withIndex(e){if(e===_i||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===_i||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator($e),o=t.getIterator($e);let l=i.getNext(),c=o.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=i.getNext(),c=o.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===_i?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _N extends ee{constructor(){super(new It(Vd),ee.EMPTY_NODE,En.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const uo=new _N;Object.defineProperties(ae,{MIN:{value:new ae(wi,ee.EMPTY_NODE)},MAX:{value:new ae(xr,uo)}});Xy.__EMPTY_NODE=ee.EMPTY_NODE;et.__childrenNodeConstructor=ee;dN(uo);hN(uo);/**
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
 */const yN=!0;function Ye(r,e=null){if(r===null)return ee.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const t=r;return new et(t,Ye(e))}if(!(r instanceof Array)&&yN){const t=[];let i=!1;if(st(r,(c,f)=>{if(c.substring(0,1)!=="."){const h=Ye(f);h.isEmpty()||(i=i||!h.getPriority().isEmpty(),t.push(new ae(c,h)))}}),t.length===0)return ee.EMPTY_NODE;const l=Za(t,cN,c=>c.name,Vd);if(i){const c=Za(t,$e.getCompare());return new ee(l,Ye(e),new En({".priority":c},{".priority":$e}))}else return new ee(l,Ye(e),En.Default)}else{let t=ee.EMPTY_NODE;return st(r,(i,o)=>{if(an(r,i)&&i.substring(0,1)!=="."){const l=Ye(o);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(i,l))}}),t.updatePriority(Ye(e))}}fN(Ye);/**
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
 */class vN extends vl{constructor(e){super(),this.indexPath_=e,F(!ce(e)&&fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),o=this.extractChild(t.node),l=i.compareTo(o);return l===0?Mr(e.name,t.name):l}makePost(e,t){const i=Ye(e),o=ee.EMPTY_NODE.updateChild(this.indexPath_,i);return new ae(t,o)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,uo);return new ae(xr,e)}toString(){return Ks(this.indexPath_,0).join("/")}}/**
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
 */class wN extends vl{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Mr(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,t){const i=Ye(e);return new ae(t,i)}toString(){return".value"}}const EN=new wN;/**
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
 */function rv(r){return{type:"value",snapshotNode:r}}function Ei(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Gs(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function qs(r,e,t){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:t}}function SN(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
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
 */class Wd{constructor(e){this.index_=e}updateChild(e,t,i,o,l,c){F(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(t);return f.getChild(o).equals(i.getChild(o))&&f.isEmpty()===i.isEmpty()||(c!=null&&(i.isEmpty()?e.hasChild(t)?c.trackChildChange(Gs(t,f)):F(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?c.trackChildChange(Ei(t,i)):c.trackChildChange(qs(t,i,f))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild($e,(o,l)=>{t.hasChild(o)||i.trackChildChange(Gs(o,l))}),t.isLeafNode()||t.forEachChild($e,(o,l)=>{if(e.hasChild(o)){const c=e.getImmediateChild(o);c.equals(l)||i.trackChildChange(qs(o,l,c))}else i.trackChildChange(Ei(o,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ys{constructor(e){this.indexedFilter_=new Wd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ys.getStartPost_(e),this.endPost_=Ys.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,o,l,c){return this.matches(new ae(t,i))||(i=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,o,l,c)}updateFullNode(e,t,i){t.isLeafNode()&&(t=ee.EMPTY_NODE);let o=t.withIndex(this.index_);o=o.updatePriority(ee.EMPTY_NODE);const l=this;return t.forEachChild($e,(c,f)=>{l.matches(new ae(c,f))||(o=o.updateImmediateChild(c,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class CN{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Ys(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,o,l,c){return this.rangedFilter_.matches(new ae(t,i))||(i=ee.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,o,l,c):this.fullLimitUpdateChild_(e,t,i,l,c)}updateFullNode(e,t,i){let o;if(t.isLeafNode()||t.isEmpty())o=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){o=ee.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const f=l.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))o=o.updateImmediateChild(f.name,f.node),c++;else break;else continue}}else{o=t.withIndex(this.index_),o=o.updatePriority(ee.EMPTY_NODE);let l;this.reverse_?l=o.getReverseIterator(this.index_):l=o.getIterator(this.index_);let c=0;for(;l.hasNext();){const f=l.getNext();c<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?c++:o=o.updateImmediateChild(f.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,o,l){let c;if(this.reverse_){const _=this.index_.getCompare();c=(v,k)=>_(k,v)}else c=this.index_.getCompare();const f=e;F(f.numChildren()===this.limit_,"");const h=new ae(t,i),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),y=this.rangedFilter_.matches(h);if(f.hasChild(t)){const _=f.getImmediateChild(t);let v=o.getChildAfterChild(this.index_,g,this.reverse_);for(;v!=null&&(v.name===t||f.hasChild(v.name));)v=o.getChildAfterChild(this.index_,v,this.reverse_);const k=v==null?1:c(v,h);if(y&&!i.isEmpty()&&k>=0)return l!=null&&l.trackChildChange(qs(t,i,_)),f.updateImmediateChild(t,i);{l!=null&&l.trackChildChange(Gs(t,_));const x=f.updateImmediateChild(t,ee.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(l!=null&&l.trackChildChange(Ei(v.name,v.node)),x.updateImmediateChild(v.name,v.node)):x}}else return i.isEmpty()?e:y&&c(g,h)>=0?(l!=null&&(l.trackChildChange(Gs(g.name,g.node)),l.trackChildChange(Ei(t,i))),f.updateImmediateChild(t,i).updateImmediateChild(g.name,ee.EMPTY_NODE)):e}}/**
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
 */class Bd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wi}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$e}copy(){const e=new Bd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function IN(r){return r.loadsAllData()?new Wd(r.getIndex()):r.hasLimit()?new CN(r):new Ys(r)}function Bm(r){const e={};if(r.isDefault())return e;let t;if(r.index_===$e?t="$priority":r.index_===EN?t="$value":r.index_===_i?t="$key":(F(r.index_ instanceof vN,"Unrecognized index type!"),t=r.index_.toString()),e.orderBy=Qe(t),r.startSet_){const i=r.startAfterSet_?"startAfter":"startAt";e[i]=Qe(r.indexStartValue_),r.startNameSet_&&(e[i]+=","+Qe(r.indexStartName_))}if(r.endSet_){const i=r.endBeforeSet_?"endBefore":"endAt";e[i]=Qe(r.indexEndValue_),r.endNameSet_&&(e[i]+=","+Qe(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function Hm(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let t=r.viewFrom_;t===""&&(r.isViewFromLeft()?t="l":t="r"),e.vf=t}return r.index_!==$e&&(e.i=r.index_.toString()),e}/**
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
 */class el extends Gy{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,o){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=o,this.log_=lo("p:rest:"),this.listens_={}}listen(e,t,i,o){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=el.getListenId_(e,i),f={};this.listens_[c]=f;const h=Bm(e._queryParams);this.restRequest_(l+".json",h,(g,y)=>{let _=y;if(g===404&&(_=null,g=null),g===null&&this.onDataUpdate_(l,_,!1,i),yi(this.listens_,c)===f){let v;g?g===401?v="permission_denied":v="rest_error:"+g:v="ok",o(v,null)}})}unlisten(e,t){const i=el.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Bm(e._queryParams),i=e._path.toString(),o=new no;return this.restRequest_(i+".json",t,(l,c)=>{let f=c;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(i,f,!1,null),o.resolve(f)):o.reject(new Error(f))}),o.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(t.auth=o.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ni(t);this.log_("Sending REST request for "+c);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(i&&f.readyState===4){this.log_("REST Response for "+c+" received. status:",f.status,"response:",f.responseText);let h=null;if(f.status>=200&&f.status<300){try{h=zs(f.responseText)}catch{mt("Failed to parse JSON response for "+c+": "+f.responseText)}i(null,h)}else f.status!==401&&f.status!==404&&mt("Got unsuccessful REST response for "+c+" Status: "+f.status),i(f.status);i=null}},f.open("GET",c,!0),f.send()})}}/**
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
 */class TN{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function tl(){return{value:null,children:new Map}}function iv(r,e,t){if(ce(e))r.value=t,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,t);else{const i=fe(e);r.children.has(i)||r.children.set(i,tl());const o=r.children.get(i);e=Pe(e),iv(o,e,t)}}function ld(r,e,t){r.value!==null?t(e,r.value):kN(r,(i,o)=>{const l=new Ie(e.toString()+"/"+i);ld(o,l,t)})}function kN(r,e){r.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class RN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&st(this.last_,(i,o)=>{t[i]=t[i]-o}),this.last_=e,t}}/**
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
 */const Km=10*1e3,NN=30*1e3,PN=5*60*1e3;class xN{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new RN(e);const i=Km+(NN-Km)*Math.random();bs(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;st(e,(o,l)=>{l>0&&an(this.statsToReport_,o)&&(t[o]=l,i=!0)}),i&&this.server_.reportStats(t),bs(this.reportStats_.bind(this),Math.floor(Math.random()*2*PN))}}/**
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
 */var Kt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Kt||(Kt={}));function Hd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gd(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
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
 */class nl{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Kt.ACK_USER_WRITE,this.source=Hd()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ie(e));return new nl(_e(),t,this.revert)}}else return F(fe(this.path)===e,"operationForChild called for unrelated child."),new nl(Pe(this.path),this.affectedTree,this.revert)}}/**
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
 */class Qs{constructor(e,t){this.source=e,this.path=t,this.type=Kt.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new Qs(this.source,_e()):new Qs(this.source,Pe(this.path))}}/**
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
 */class Or{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Kt.OVERWRITE}operationForChild(e){return ce(this.path)?new Or(this.source,_e(),this.snap.getImmediateChild(e)):new Or(this.source,Pe(this.path),this.snap)}}/**
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
 */class Si{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Kt.MERGE}operationForChild(e){if(ce(this.path)){const t=this.children.subtree(new Ie(e));return t.isEmpty()?null:t.value?new Or(this.source,_e(),t.value):new Si(this.source,_e(),t)}else return F(fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Si(this.source,Pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ar{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const t=fe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class ON{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function AN(r,e,t,i){const o=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&r.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(SN(c.childName,c.snapshotNode))}),Ts(r,o,"child_removed",e,i,t),Ts(r,o,"child_added",e,i,t),Ts(r,o,"child_moved",l,i,t),Ts(r,o,"child_changed",e,i,t),Ts(r,o,"value",e,i,t),o}function Ts(r,e,t,i,o,l){const c=i.filter(f=>f.type===t);c.sort((f,h)=>bN(r,f,h)),c.forEach(f=>{const h=LN(r,f,l);o.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(h,r.query_))})})}function LN(r,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function bN(r,e,t){if(e.childName==null||t.childName==null)throw Ri("Should only compare child_ events.");const i=new ae(e.childName,e.snapshotNode),o=new ae(t.childName,t.snapshotNode);return r.index_.compare(i,o)}/**
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
 */function wl(r,e){return{eventCache:r,serverCache:e}}function Ds(r,e,t,i){return wl(new ar(e,t,i),r.serverCache)}function sv(r,e,t,i){return wl(r.eventCache,new ar(e,t,i))}function rl(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Ar(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
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
 */let $c;const DN=()=>($c||($c=new It(vR)),$c);class Ne{static fromObject(e){let t=new Ne(null);return st(e,(i,o)=>{t=t.set(new Ie(i),o)}),t}constructor(e,t=DN()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:_e(),value:this.value};if(ce(e))return null;{const i=fe(e),o=this.children.get(i);if(o!==null){const l=o.findRootMostMatchingPathAndValue(Pe(e),t);return l!=null?{path:je(new Ie(i),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const t=fe(e),i=this.children.get(t);return i!==null?i.subtree(Pe(e)):new Ne(null)}}set(e,t){if(ce(e))return new Ne(t,this.children);{const i=fe(e),l=(this.children.get(i)||new Ne(null)).set(Pe(e),t),c=this.children.insert(i,l);return new Ne(this.value,c)}}remove(e){if(ce(e))return this.children.isEmpty()?new Ne(null):new Ne(null,this.children);{const t=fe(e),i=this.children.get(t);if(i){const o=i.remove(Pe(e));let l;return o.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,o),this.value===null&&l.isEmpty()?new Ne(null):new Ne(this.value,l)}else return this}}get(e){if(ce(e))return this.value;{const t=fe(e),i=this.children.get(t);return i?i.get(Pe(e)):null}}setTree(e,t){if(ce(e))return t;{const i=fe(e),l=(this.children.get(i)||new Ne(null)).setTree(Pe(e),t);let c;return l.isEmpty()?c=this.children.remove(i):c=this.children.insert(i,l),new Ne(this.value,c)}}fold(e){return this.fold_(_e(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((o,l)=>{i[o]=l.fold_(je(e,o),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,_e(),t)}findOnPath_(e,t,i){const o=this.value?i(t,this.value):!1;if(o)return o;if(ce(e))return null;{const l=fe(e),c=this.children.get(l);return c?c.findOnPath_(Pe(e),je(t,l),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,_e(),t)}foreachOnPath_(e,t,i){if(ce(e))return this;{this.value&&i(t,this.value);const o=fe(e),l=this.children.get(o);return l?l.foreachOnPath_(Pe(e),je(t,o),i):new Ne(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,t){this.children.inorderTraversal((i,o)=>{o.foreach_(je(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class Gt{constructor(e){this.writeTree_=e}static empty(){return new Gt(new Ne(null))}}function Ms(r,e,t){if(ce(e))return new Gt(new Ne(t));{const i=r.writeTree_.findRootMostValueAndPath(e);if(i!=null){const o=i.path;let l=i.value;const c=gt(o,e);return l=l.updateChild(c,t),new Gt(r.writeTree_.set(o,l))}else{const o=new Ne(t),l=r.writeTree_.setTree(e,o);return new Gt(l)}}}function ud(r,e,t){let i=r;return st(t,(o,l)=>{i=Ms(i,je(e,o),l)}),i}function Gm(r,e){if(ce(e))return Gt.empty();{const t=r.writeTree_.setTree(e,new Ne(null));return new Gt(t)}}function cd(r,e){return Fr(r,e)!=null}function Fr(r,e){const t=r.writeTree_.findRootMostValueAndPath(e);return t!=null?r.writeTree_.get(t.path).getChild(gt(t.path,e)):null}function qm(r){const e=[],t=r.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild($e,(i,o)=>{e.push(new ae(i,o))}):r.writeTree_.children.inorderTraversal((i,o)=>{o.value!=null&&e.push(new ae(i,o.value))}),e}function rr(r,e){if(ce(e))return r;{const t=Fr(r,e);return t!=null?new Gt(new Ne(t)):new Gt(r.writeTree_.subtree(e))}}function dd(r){return r.writeTree_.isEmpty()}function Ci(r,e){return ov(_e(),r.writeTree_,e)}function ov(r,e,t){if(e.value!=null)return t.updateChild(r,e.value);{let i=null;return e.children.inorderTraversal((o,l)=>{o===".priority"?(F(l.value!==null,"Priority writes must always be leaf nodes"),i=l.value):t=ov(je(r,o),l,t)}),!t.getChild(r).isEmpty()&&i!==null&&(t=t.updateChild(je(r,".priority"),i)),t}}/**
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
 */function El(r,e){return cv(e,r)}function MN(r,e,t,i,o){F(i>r.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),r.allWrites.push({path:e,snap:t,writeId:i,visible:o}),o&&(r.visibleWrites=Ms(r.visibleWrites,e,t)),r.lastWriteId=i}function FN(r,e,t,i){F(i>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:t,writeId:i,visible:!0}),r.visibleWrites=ud(r.visibleWrites,e,t),r.lastWriteId=i}function UN(r,e){for(let t=0;t<r.allWrites.length;t++){const i=r.allWrites[t];if(i.writeId===e)return i}return null}function jN(r,e){const t=r.allWrites.findIndex(f=>f.writeId===e);F(t>=0,"removeWrite called with nonexistent writeId.");const i=r.allWrites[t];r.allWrites.splice(t,1);let o=i.visible,l=!1,c=r.allWrites.length-1;for(;o&&c>=0;){const f=r.allWrites[c];f.visible&&(c>=t&&$N(f,i.path)?o=!1:Mt(i.path,f.path)&&(l=!0)),c--}if(o){if(l)return zN(r),!0;if(i.snap)r.visibleWrites=Gm(r.visibleWrites,i.path);else{const f=i.children;st(f,h=>{r.visibleWrites=Gm(r.visibleWrites,je(i.path,h))})}return!0}else return!1}function $N(r,e){if(r.snap)return Mt(r.path,e);for(const t in r.children)if(r.children.hasOwnProperty(t)&&Mt(je(r.path,t),e))return!0;return!1}function zN(r){r.visibleWrites=av(r.allWrites,VN,_e()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function VN(r){return r.visible}function av(r,e,t){let i=Gt.empty();for(let o=0;o<r.length;++o){const l=r[o];if(e(l)){const c=l.path;let f;if(l.snap)Mt(t,c)?(f=gt(t,c),i=Ms(i,f,l.snap)):Mt(c,t)&&(f=gt(c,t),i=Ms(i,_e(),l.snap.getChild(f)));else if(l.children){if(Mt(t,c))f=gt(t,c),i=ud(i,f,l.children);else if(Mt(c,t))if(f=gt(c,t),ce(f))i=ud(i,_e(),l.children);else{const h=yi(l.children,fe(f));if(h){const g=h.getChild(Pe(f));i=Ms(i,_e(),g)}}}else throw Ri("WriteRecord should have .snap or .children")}}return i}function lv(r,e,t,i,o){if(!i&&!o){const l=Fr(r.visibleWrites,e);if(l!=null)return l;{const c=rr(r.visibleWrites,e);if(dd(c))return t;if(t==null&&!cd(c,_e()))return null;{const f=t||ee.EMPTY_NODE;return Ci(c,f)}}}else{const l=rr(r.visibleWrites,e);if(!o&&dd(l))return t;if(!o&&t==null&&!cd(l,_e()))return null;{const c=function(g){return(g.visible||o)&&(!i||!~i.indexOf(g.writeId))&&(Mt(g.path,e)||Mt(e,g.path))},f=av(r.allWrites,c,e),h=t||ee.EMPTY_NODE;return Ci(f,h)}}}function WN(r,e,t){let i=ee.EMPTY_NODE;const o=Fr(r.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild($e,(l,c)=>{i=i.updateImmediateChild(l,c)}),i;if(t){const l=rr(r.visibleWrites,e);return t.forEachChild($e,(c,f)=>{const h=Ci(rr(l,new Ie(c)),f);i=i.updateImmediateChild(c,h)}),qm(l).forEach(c=>{i=i.updateImmediateChild(c.name,c.node)}),i}else{const l=rr(r.visibleWrites,e);return qm(l).forEach(c=>{i=i.updateImmediateChild(c.name,c.node)}),i}}function BN(r,e,t,i,o){F(i||o,"Either existingEventSnap or existingServerSnap must exist");const l=je(e,t);if(cd(r.visibleWrites,l))return null;{const c=rr(r.visibleWrites,l);return dd(c)?o.getChild(t):Ci(c,o.getChild(t))}}function HN(r,e,t,i){const o=je(e,t),l=Fr(r.visibleWrites,o);if(l!=null)return l;if(i.isCompleteForChild(t)){const c=rr(r.visibleWrites,o);return Ci(c,i.getNode().getImmediateChild(t))}else return null}function KN(r,e){return Fr(r.visibleWrites,e)}function GN(r,e,t,i,o,l,c){let f;const h=rr(r.visibleWrites,e),g=Fr(h,_e());if(g!=null)f=g;else if(t!=null)f=Ci(h,t);else return[];if(f=f.withIndex(c),!f.isEmpty()&&!f.isLeafNode()){const y=[],_=c.getCompare(),v=l?f.getReverseIteratorFrom(i,c):f.getIteratorFrom(i,c);let k=v.getNext();for(;k&&y.length<o;)_(k,i)!==0&&y.push(k),k=v.getNext();return y}else return[]}function qN(){return{visibleWrites:Gt.empty(),allWrites:[],lastWriteId:-1}}function il(r,e,t,i){return lv(r.writeTree,r.treePath,e,t,i)}function qd(r,e){return WN(r.writeTree,r.treePath,e)}function Ym(r,e,t,i){return BN(r.writeTree,r.treePath,e,t,i)}function sl(r,e){return KN(r.writeTree,je(r.treePath,e))}function YN(r,e,t,i,o,l){return GN(r.writeTree,r.treePath,e,t,i,o,l)}function Yd(r,e,t){return HN(r.writeTree,r.treePath,e,t)}function uv(r,e){return cv(je(r.treePath,e),r.writeTree)}function cv(r,e){return{treePath:r,writeTree:e}}/**
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
 */class QN{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;F(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),F(i!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(i);if(o){const l=o.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(i,qs(i,e.snapshotNode,o.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(i,Gs(i,o.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(i,Ei(i,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(i,qs(i,e.snapshotNode,o.oldSnap));else throw Ri("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class JN{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const dv=new JN;class Qd{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ar(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yd(this.writes_,e,i)}}getChildAfterChild(e,t,i){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ar(this.viewCache_),l=YN(this.writes_,o,t,1,i,e);return l.length===0?null:l[0]}}/**
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
 */function XN(r){return{filter:r}}function ZN(r,e){F(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function eP(r,e,t,i,o){const l=new QN;let c,f;if(t.type===Kt.OVERWRITE){const g=t;g.source.fromUser?c=fd(r,e,g.path,g.snap,i,o,l):(F(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!ce(g.path),c=ol(r,e,g.path,g.snap,i,o,f,l))}else if(t.type===Kt.MERGE){const g=t;g.source.fromUser?c=nP(r,e,g.path,g.children,i,o,l):(F(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),c=hd(r,e,g.path,g.children,i,o,f,l))}else if(t.type===Kt.ACK_USER_WRITE){const g=t;g.revert?c=sP(r,e,g.path,i,o,l):c=rP(r,e,g.path,g.affectedTree,i,o,l)}else if(t.type===Kt.LISTEN_COMPLETE)c=iP(r,e,t.path,i,l);else throw Ri("Unknown operation type: "+t.type);const h=l.getChanges();return tP(e,c,h),{viewCache:c,changes:h}}function tP(r,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const o=i.getNode().isLeafNode()||i.getNode().isEmpty(),l=rl(r);(t.length>0||!r.eventCache.isFullyInitialized()||o&&!i.getNode().equals(l)||!i.getNode().getPriority().equals(l.getPriority()))&&t.push(rv(rl(e)))}}function fv(r,e,t,i,o,l){const c=e.eventCache;if(sl(i,t)!=null)return e;{let f,h;if(ce(t))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ar(e),y=g instanceof ee?g:ee.EMPTY_NODE,_=qd(i,y);f=r.filter.updateFullNode(e.eventCache.getNode(),_,l)}else{const g=il(i,Ar(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=fe(t);if(g===".priority"){F(or(t)===1,"Can't have a priority with additional path components");const y=c.getNode();h=e.serverCache.getNode();const _=Ym(i,t,y,h);_!=null?f=r.filter.updatePriority(y,_):f=c.getNode()}else{const y=Pe(t);let _;if(c.isCompleteForChild(g)){h=e.serverCache.getNode();const v=Ym(i,t,c.getNode(),h);v!=null?_=c.getNode().getImmediateChild(g).updateChild(y,v):_=c.getNode().getImmediateChild(g)}else _=Yd(i,g,e.serverCache);_!=null?f=r.filter.updateChild(c.getNode(),g,_,y,o,l):f=c.getNode()}}return Ds(e,f,c.isFullyInitialized()||ce(t),r.filter.filtersNodes())}}function ol(r,e,t,i,o,l,c,f){const h=e.serverCache;let g;const y=c?r.filter:r.filter.getIndexedFilter();if(ce(t))g=y.updateFullNode(h.getNode(),i,null);else if(y.filtersNodes()&&!h.isFiltered()){const k=h.getNode().updateChild(t,i);g=y.updateFullNode(h.getNode(),k,null)}else{const k=fe(t);if(!h.isCompleteForPath(t)&&or(t)>1)return e;const N=Pe(t),I=h.getNode().getImmediateChild(k).updateChild(N,i);k===".priority"?g=y.updatePriority(h.getNode(),I):g=y.updateChild(h.getNode(),k,I,N,dv,null)}const _=sv(e,g,h.isFullyInitialized()||ce(t),y.filtersNodes()),v=new Qd(o,_,l);return fv(r,_,t,o,v,f)}function fd(r,e,t,i,o,l,c){const f=e.eventCache;let h,g;const y=new Qd(o,e,l);if(ce(t))g=r.filter.updateFullNode(e.eventCache.getNode(),i,c),h=Ds(e,g,!0,r.filter.filtersNodes());else{const _=fe(t);if(_===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),i),h=Ds(e,g,f.isFullyInitialized(),f.isFiltered());else{const v=Pe(t),k=f.getNode().getImmediateChild(_);let N;if(ce(v))N=i;else{const x=y.getCompleteChild(_);x!=null?$d(v)===".priority"&&x.getChild(Yy(v)).isEmpty()?N=x:N=x.updateChild(v,i):N=ee.EMPTY_NODE}if(k.equals(N))h=e;else{const x=r.filter.updateChild(f.getNode(),_,N,v,y,c);h=Ds(e,x,f.isFullyInitialized(),r.filter.filtersNodes())}}}return h}function Qm(r,e){return r.eventCache.isCompleteForChild(e)}function nP(r,e,t,i,o,l,c){let f=e;return i.foreach((h,g)=>{const y=je(t,h);Qm(e,fe(y))&&(f=fd(r,f,y,g,o,l,c))}),i.foreach((h,g)=>{const y=je(t,h);Qm(e,fe(y))||(f=fd(r,f,y,g,o,l,c))}),f}function Jm(r,e,t){return t.foreach((i,o)=>{e=e.updateChild(i,o)}),e}function hd(r,e,t,i,o,l,c,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let h=e,g;ce(t)?g=i:g=new Ne(null).setTree(t,i);const y=e.serverCache.getNode();return g.children.inorderTraversal((_,v)=>{if(y.hasChild(_)){const k=e.serverCache.getNode().getImmediateChild(_),N=Jm(r,k,v);h=ol(r,h,new Ie(_),N,o,l,c,f)}}),g.children.inorderTraversal((_,v)=>{const k=!e.serverCache.isCompleteForChild(_)&&v.value===null;if(!y.hasChild(_)&&!k){const N=e.serverCache.getNode().getImmediateChild(_),x=Jm(r,N,v);h=ol(r,h,new Ie(_),x,o,l,c,f)}}),h}function rP(r,e,t,i,o,l,c){if(sl(o,t)!=null)return e;const f=e.serverCache.isFiltered(),h=e.serverCache;if(i.value!=null){if(ce(t)&&h.isFullyInitialized()||h.isCompleteForPath(t))return ol(r,e,t,h.getNode().getChild(t),o,l,f,c);if(ce(t)){let g=new Ne(null);return h.getNode().forEachChild(_i,(y,_)=>{g=g.set(new Ie(y),_)}),hd(r,e,t,g,o,l,f,c)}else return e}else{let g=new Ne(null);return i.foreach((y,_)=>{const v=je(t,y);h.isCompleteForPath(v)&&(g=g.set(y,h.getNode().getChild(v)))}),hd(r,e,t,g,o,l,f,c)}}function iP(r,e,t,i,o){const l=e.serverCache,c=sv(e,l.getNode(),l.isFullyInitialized()||ce(t),l.isFiltered());return fv(r,c,t,i,dv,o)}function sP(r,e,t,i,o,l){let c;if(sl(i,t)!=null)return e;{const f=new Qd(i,e,o),h=e.eventCache.getNode();let g;if(ce(t)||fe(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=il(i,Ar(e));else{const _=e.serverCache.getNode();F(_ instanceof ee,"serverChildren would be complete if leaf node"),y=qd(i,_)}y=y,g=r.filter.updateFullNode(h,y,l)}else{const y=fe(t);let _=Yd(i,y,e.serverCache);_==null&&e.serverCache.isCompleteForChild(y)&&(_=h.getImmediateChild(y)),_!=null?g=r.filter.updateChild(h,y,_,Pe(t),f,l):e.eventCache.getNode().hasChild(y)?g=r.filter.updateChild(h,y,ee.EMPTY_NODE,Pe(t),f,l):g=h,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=il(i,Ar(e)),c.isLeafNode()&&(g=r.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||sl(i,_e())!=null,Ds(e,g,c,r.filter.filtersNodes())}}/**
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
 */class oP{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,o=new Wd(i.getIndex()),l=IN(i);this.processor_=XN(l);const c=t.serverCache,f=t.eventCache,h=o.updateFullNode(ee.EMPTY_NODE,c.getNode(),null),g=l.updateFullNode(ee.EMPTY_NODE,f.getNode(),null),y=new ar(h,c.isFullyInitialized(),o.filtersNodes()),_=new ar(g,f.isFullyInitialized(),l.filtersNodes());this.viewCache_=wl(_,y),this.eventGenerator_=new ON(this.query_)}get query(){return this.query_}}function aP(r){return r.viewCache_.serverCache.getNode()}function lP(r){return rl(r.viewCache_)}function uP(r,e){const t=Ar(r.viewCache_);return t&&(r.query._queryParams.loadsAllData()||!ce(e)&&!t.getImmediateChild(fe(e)).isEmpty())?t.getChild(e):null}function Xm(r){return r.eventRegistrations_.length===0}function cP(r,e){r.eventRegistrations_.push(e)}function Zm(r,e,t){const i=[];if(t){F(e==null,"A cancel should cancel all event registrations.");const o=r.query._path;r.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,o);c&&i.push(c)})}if(e){let o=[];for(let l=0;l<r.eventRegistrations_.length;++l){const c=r.eventRegistrations_[l];if(!c.matches(e))o.push(c);else if(e.hasAnyCallback()){o=o.concat(r.eventRegistrations_.slice(l+1));break}}r.eventRegistrations_=o}else r.eventRegistrations_=[];return i}function e_(r,e,t,i){e.type===Kt.MERGE&&e.source.queryId!==null&&(F(Ar(r.viewCache_),"We should always have a full cache before handling merges"),F(rl(r.viewCache_),"Missing event cache, even though we have a server cache"));const o=r.viewCache_,l=eP(r.processor_,o,e,t,i);return ZN(r.processor_,l.viewCache),F(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=l.viewCache,hv(r,l.changes,l.viewCache.eventCache.getNode(),null)}function dP(r,e){const t=r.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild($e,(l,c)=>{i.push(Ei(l,c))}),t.isFullyInitialized()&&i.push(rv(t.getNode())),hv(r,i,t.getNode(),e)}function hv(r,e,t,i){const o=i?[i]:r.eventRegistrations_;return AN(r.eventGenerator_,e,t,o)}/**
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
 */let al;class pv{constructor(){this.views=new Map}}function fP(r){F(!al,"__referenceConstructor has already been defined"),al=r}function hP(){return F(al,"Reference.ts has not been loaded"),al}function pP(r){return r.views.size===0}function Jd(r,e,t,i){const o=e.source.queryId;if(o!==null){const l=r.views.get(o);return F(l!=null,"SyncTree gave us an op for an invalid query."),e_(l,e,t,i)}else{let l=[];for(const c of r.views.values())l=l.concat(e_(c,e,t,i));return l}}function gv(r,e,t,i,o){const l=e._queryIdentifier,c=r.views.get(l);if(!c){let f=il(t,o?i:null),h=!1;f?h=!0:i instanceof ee?(f=qd(t,i),h=!1):(f=ee.EMPTY_NODE,h=!1);const g=wl(new ar(f,h,!1),new ar(i,o,!1));return new oP(e,g)}return c}function gP(r,e,t,i,o,l){const c=gv(r,e,i,o,l);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,c),cP(c,t),dP(c,t)}function mP(r,e,t,i){const o=e._queryIdentifier,l=[];let c=[];const f=lr(r);if(o==="default")for(const[h,g]of r.views.entries())c=c.concat(Zm(g,t,i)),Xm(g)&&(r.views.delete(h),g.query._queryParams.loadsAllData()||l.push(g.query));else{const h=r.views.get(o);h&&(c=c.concat(Zm(h,t,i)),Xm(h)&&(r.views.delete(o),h.query._queryParams.loadsAllData()||l.push(h.query)))}return f&&!lr(r)&&l.push(new(hP())(e._repo,e._path)),{removed:l,events:c}}function mv(r){const e=[];for(const t of r.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ir(r,e){let t=null;for(const i of r.views.values())t=t||uP(i,e);return t}function _v(r,e){if(e._queryParams.loadsAllData())return Sl(r);{const i=e._queryIdentifier;return r.views.get(i)}}function yv(r,e){return _v(r,e)!=null}function lr(r){return Sl(r)!=null}function Sl(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ll;function _P(r){F(!ll,"__referenceConstructor has already been defined"),ll=r}function yP(){return F(ll,"Reference.ts has not been loaded"),ll}let vP=1;class t_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ne(null),this.pendingWriteTree_=qN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vv(r,e,t,i,o){return MN(r.pendingWriteTree_,e,t,i,o),o?Ai(r,new Or(Hd(),e,t)):[]}function wP(r,e,t,i){FN(r.pendingWriteTree_,e,t,i);const o=Ne.fromObject(t);return Ai(r,new Si(Hd(),e,o))}function Zn(r,e,t=!1){const i=UN(r.pendingWriteTree_,e);if(jN(r.pendingWriteTree_,e)){let l=new Ne(null);return i.snap!=null?l=l.set(_e(),!0):st(i.children,c=>{l=l.set(new Ie(c),!0)}),Ai(r,new nl(i.path,l,t))}else return[]}function co(r,e,t){return Ai(r,new Or(Kd(),e,t))}function EP(r,e,t){const i=Ne.fromObject(t);return Ai(r,new Si(Kd(),e,i))}function SP(r,e){return Ai(r,new Qs(Kd(),e))}function CP(r,e,t){const i=Zd(r,t);if(i){const o=ef(i),l=o.path,c=o.queryId,f=gt(l,e),h=new Qs(Gd(c),f);return tf(r,l,h)}else return[]}function wv(r,e,t,i,o=!1){const l=e._path,c=r.syncPointTree_.get(l);let f=[];if(c&&(e._queryIdentifier==="default"||yv(c,e))){const h=mP(c,e,t,i);pP(c)&&(r.syncPointTree_=r.syncPointTree_.remove(l));const g=h.removed;if(f=h.events,!o){const y=g.findIndex(v=>v._queryParams.loadsAllData())!==-1,_=r.syncPointTree_.findOnPath(l,(v,k)=>lr(k));if(y&&!_){const v=r.syncPointTree_.subtree(l);if(!v.isEmpty()){const k=RP(v);for(let N=0;N<k.length;++N){const x=k[N],I=x.query,$=Iv(r,x);r.listenProvider_.startListening(Fs(I),Js(r,I),$.hashFn,$.onComplete)}}}!_&&g.length>0&&!i&&(y?r.listenProvider_.stopListening(Fs(e),null):g.forEach(v=>{const k=r.queryToTagMap.get(Cl(v));r.listenProvider_.stopListening(Fs(v),k)}))}NP(r,g)}return f}function Ev(r,e,t,i){const o=Zd(r,i);if(o!=null){const l=ef(o),c=l.path,f=l.queryId,h=gt(c,e),g=new Or(Gd(f),h,t);return tf(r,c,g)}else return[]}function IP(r,e,t,i){const o=Zd(r,i);if(o){const l=ef(o),c=l.path,f=l.queryId,h=gt(c,e),g=Ne.fromObject(t),y=new Si(Gd(f),h,g);return tf(r,c,y)}else return[]}function TP(r,e,t,i=!1){const o=e._path;let l=null,c=!1;r.syncPointTree_.foreachOnPath(o,(v,k)=>{const N=gt(v,o);l=l||ir(k,N),c=c||lr(k)});let f=r.syncPointTree_.get(o);f?(c=c||lr(f),l=l||ir(f,_e())):(f=new pv,r.syncPointTree_=r.syncPointTree_.set(o,f));let h;l!=null?h=!0:(h=!1,l=ee.EMPTY_NODE,r.syncPointTree_.subtree(o).foreachChild((k,N)=>{const x=ir(N,_e());x&&(l=l.updateImmediateChild(k,x))}));const g=yv(f,e);if(!g&&!e._queryParams.loadsAllData()){const v=Cl(e);F(!r.queryToTagMap.has(v),"View does not exist, but we have a tag");const k=PP();r.queryToTagMap.set(v,k),r.tagToQueryMap.set(k,v)}const y=El(r.pendingWriteTree_,o);let _=gP(f,e,t,y,l,h);if(!g&&!c&&!i){const v=_v(f,e);_=_.concat(xP(r,e,v))}return _}function Xd(r,e,t){const o=r.pendingWriteTree_,l=r.syncPointTree_.findOnPath(e,(c,f)=>{const h=gt(c,e),g=ir(f,h);if(g)return g});return lv(o,e,l,t,!0)}function kP(r,e){const t=e._path;let i=null;r.syncPointTree_.foreachOnPath(t,(g,y)=>{const _=gt(g,t);i=i||ir(y,_)});let o=r.syncPointTree_.get(t);o?i=i||ir(o,_e()):(o=new pv,r.syncPointTree_=r.syncPointTree_.set(t,o));const l=i!=null,c=l?new ar(i,!0,!1):null,f=El(r.pendingWriteTree_,e._path),h=gv(o,e,f,l?c.getNode():ee.EMPTY_NODE,l);return lP(h)}function Ai(r,e){return Sv(e,r.syncPointTree_,null,El(r.pendingWriteTree_,_e()))}function Sv(r,e,t,i){if(ce(r.path))return Cv(r,e,t,i);{const o=e.get(_e());t==null&&o!=null&&(t=ir(o,_e()));let l=[];const c=fe(r.path),f=r.operationForChild(c),h=e.children.get(c);if(h&&f){const g=t?t.getImmediateChild(c):null,y=uv(i,c);l=l.concat(Sv(f,h,g,y))}return o&&(l=l.concat(Jd(o,r,i,t))),l}}function Cv(r,e,t,i){const o=e.get(_e());t==null&&o!=null&&(t=ir(o,_e()));let l=[];return e.children.inorderTraversal((c,f)=>{const h=t?t.getImmediateChild(c):null,g=uv(i,c),y=r.operationForChild(c);y&&(l=l.concat(Cv(y,f,h,g)))}),o&&(l=l.concat(Jd(o,r,i,t))),l}function Iv(r,e){const t=e.query,i=Js(r,t);return{hashFn:()=>(aP(e)||ee.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return i?CP(r,t._path,i):SP(r,t._path);{const l=SR(o,t);return wv(r,t,null,l)}}}}function Js(r,e){const t=Cl(e);return r.queryToTagMap.get(t)}function Cl(r){return r._path.toString()+"$"+r._queryIdentifier}function Zd(r,e){return r.tagToQueryMap.get(e)}function ef(r){const e=r.indexOf("$");return F(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new Ie(r.substr(0,e))}}function tf(r,e,t){const i=r.syncPointTree_.get(e);F(i,"Missing sync point for query tag that we're tracking");const o=El(r.pendingWriteTree_,e);return Jd(i,t,o,null)}function RP(r){return r.fold((e,t,i)=>{if(t&&lr(t))return[Sl(t)];{let o=[];return t&&(o=mv(t)),st(i,(l,c)=>{o=o.concat(c)}),o}})}function Fs(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(yP())(r._repo,r._path):r}function NP(r,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const o=Cl(i),l=r.queryToTagMap.get(o);r.queryToTagMap.delete(o),r.tagToQueryMap.delete(l)}}}function PP(){return vP++}function xP(r,e,t){const i=e._path,o=Js(r,e),l=Iv(r,t),c=r.listenProvider_.startListening(Fs(e),o,l.hashFn,l.onComplete),f=r.syncPointTree_.subtree(i);if(o)F(!lr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const h=f.fold((g,y,_)=>{if(!ce(g)&&y&&lr(y))return[Sl(y).query];{let v=[];return y&&(v=v.concat(mv(y).map(k=>k.query))),st(_,(k,N)=>{v=v.concat(N)}),v}});for(let g=0;g<h.length;++g){const y=h[g];r.listenProvider_.stopListening(Fs(y),Js(r,y))}}return c}/**
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
 */class nf{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new nf(t)}node(){return this.node_}}class rf{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=je(this.path_,e);return new rf(this.syncTree_,t)}node(){return Xd(this.syncTree_,this.path_)}}const OP=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},n_=function(r,e,t){if(!r||typeof r!="object")return r;if(F(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return AP(r[".sv"],e,t);if(typeof r[".sv"]=="object")return LP(r[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},AP=function(r,e,t){switch(r){case"timestamp":return t.timestamp;default:F(!1,"Unexpected server value: "+r)}},LP=function(r,e,t){r.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const i=r.increment;typeof i!="number"&&F(!1,"Unexpected increment value: "+i);const o=e.node();if(F(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return i;const c=o.getValue();return typeof c!="number"?i:c+i},Tv=function(r,e,t,i){return sf(e,new rf(t,r),i)},kv=function(r,e,t){return sf(r,new nf(e),t)};function sf(r,e,t){const i=r.getPriority().val(),o=n_(i,e.getImmediateChild(".priority"),t);let l;if(r.isLeafNode()){const c=r,f=n_(c.getValue(),e,t);return f!==c.getValue()||o!==c.getPriority().val()?new et(f,Ye(o)):r}else{const c=r;return l=c,o!==c.getPriority().val()&&(l=l.updatePriority(new et(o))),c.forEachChild($e,(f,h)=>{const g=sf(h,e.getImmediateChild(f),t);g!==h&&(l=l.updateImmediateChild(f,g))}),l}}/**
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
 */class of{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function af(r,e){let t=e instanceof Ie?e:new Ie(e),i=r,o=fe(t);for(;o!==null;){const l=yi(i.node.children,o)||{children:{},childCount:0};i=new of(o,i,l),t=Pe(t),o=fe(t)}return i}function Li(r){return r.node.value}function Rv(r,e){r.node.value=e,pd(r)}function Nv(r){return r.node.childCount>0}function bP(r){return Li(r)===void 0&&!Nv(r)}function Il(r,e){st(r.node.children,(t,i)=>{e(new of(t,r,i))})}function Pv(r,e,t,i){t&&e(r),Il(r,o=>{Pv(o,e,!0)})}function DP(r,e,t){let i=r.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function fo(r){return new Ie(r.parent===null?r.name:fo(r.parent)+"/"+r.name)}function pd(r){r.parent!==null&&MP(r.parent,r.name,r)}function MP(r,e,t){const i=bP(t),o=an(r.node.children,e);i&&o?(delete r.node.children[e],r.node.childCount--,pd(r)):!i&&!o&&(r.node.children[e]=t.node,r.node.childCount++,pd(r))}/**
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
 */const FP=/[\[\].#$\/\u0000-\u001F\u007F]/,UP=/[\[\].#$\u0000-\u001F\u007F]/,zc=10*1024*1024,lf=function(r){return typeof r=="string"&&r.length!==0&&!FP.test(r)},xv=function(r){return typeof r=="string"&&r.length!==0&&!UP.test(r)},jP=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),xv(r)},$P=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!Dd(r)||r&&typeof r=="object"&&an(r,".sv")},Ov=function(r,e,t,i){i&&e===void 0||Tl(fl(r,"value"),e,t)},Tl=function(r,e,t){const i=t instanceof Ie?new nN(t,r):t;if(e===void 0)throw new Error(r+"contains undefined "+Ir(i));if(typeof e=="function")throw new Error(r+"contains a function "+Ir(i)+" with contents = "+e.toString());if(Dd(e))throw new Error(r+"contains "+e.toString()+" "+Ir(i));if(typeof e=="string"&&e.length>zc/3&&hl(e)>zc)throw new Error(r+"contains a string greater than "+zc+" utf8 bytes "+Ir(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,l=!1;if(st(e,(c,f)=>{if(c===".value")o=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!lf(c)))throw new Error(r+" contains an invalid key ("+c+") "+Ir(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rN(i,c),Tl(r,f,i),iN(i)}),o&&l)throw new Error(r+' contains ".value" child '+Ir(i)+" in addition to actual children.")}},zP=function(r,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const l=Ks(i);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!lf(l[c]))throw new Error(r+"contains an invalid key ("+l[c]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(tN);let o=null;for(t=0;t<e.length;t++){if(i=e[t],o!==null&&Mt(o,i))throw new Error(r+"contains a path "+o.toString()+" that is ancestor of another path "+i.toString());o=i}},VP=function(r,e,t,i){const o=fl(r,"values");if(typeof e!="object"||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const l=[];st(e,(c,f)=>{const h=new Ie(c);if(Tl(o,f,je(t,h)),$d(h)===".priority"&&!$P(f))throw new Error(o+"contains an invalid value for '"+h.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(h)}),zP(o,l)},Av=function(r,e,t,i){if(!xv(t))throw new Error(fl(r,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},WP=function(r,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Av(r,e,t)},uf=function(r,e){if(fe(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},BP=function(r,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!lf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!jP(t))throw new Error(fl(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class HP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function cf(r,e){let t=null;for(let i=0;i<e.length;i++){const o=e[i],l=o.getPath();t!==null&&!Qy(l,t.path)&&(r.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(o)}t&&r.eventLists_.push(t)}function Ft(r,e,t){cf(r,t),KP(r,i=>Mt(i,e)||Mt(e,i))}function KP(r,e){r.recursionDepth_++;let t=!0;for(let i=0;i<r.eventLists_.length;i++){const o=r.eventLists_[i];if(o){const l=o.path;e(l)?(GP(r.eventLists_[i]),r.eventLists_[i]=null):t=!1}}t&&(r.eventLists_=[]),r.recursionDepth_--}function GP(r){for(let e=0;e<r.events.length;e++){const t=r.events[e];if(t!==null){r.events[e]=null;const i=t.getEventRunner();Ls&&it("event: "+t.toString()),Oi(i)}}}/**
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
 */const qP="repo_interrupt",YP=25;class QP{constructor(e,t,i,o){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new HP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tl(),this.transactionQueueTree_=new of,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function JP(r,e,t){if(r.stats_=Ud(r.repoInfo_),r.forceRestClient_||kR())r.server_=new el(r.repoInfo_,(i,o,l,c)=>{r_(r,i,o,l,c)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>i_(r,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Qe(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}r.persistentConnection_=new Sn(r.repoInfo_,e,(i,o,l,c)=>{r_(r,i,o,l,c)},i=>{i_(r,i)},i=>{XP(r,i)},r.authTokenProvider_,r.appCheckProvider_,t),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(i=>{r.server_.refreshAuthToken(i)}),r.appCheckProvider_.addTokenChangeListener(i=>{r.server_.refreshAppCheckToken(i.token)}),r.statsReporter_=OR(r.repoInfo_,()=>new xN(r.stats_,r.server_)),r.infoData_=new TN,r.infoSyncTree_=new t_({startListening:(i,o,l,c)=>{let f=[];const h=r.infoData_.getNode(i._path);return h.isEmpty()||(f=co(r.infoSyncTree_,i._path,h),setTimeout(()=>{c("ok")},0)),f},stopListening:()=>{}}),df(r,"connected",!1),r.serverSyncTree_=new t_({startListening:(i,o,l,c)=>(r.server_.listen(i,l,o,(f,h)=>{const g=c(f,h);Ft(r.eventQueue_,i._path,g)}),[]),stopListening:(i,o)=>{r.server_.unlisten(i,o)}})}function Lv(r){const t=r.infoData_.getNode(new Ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function kl(r){return OP({timestamp:Lv(r)})}function r_(r,e,t,i,o){r.dataUpdateCount++;const l=new Ie(e);t=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,t):t;let c=[];if(o)if(i){const h=za(t,g=>Ye(g));c=IP(r.serverSyncTree_,l,h,o)}else{const h=Ye(t);c=Ev(r.serverSyncTree_,l,h,o)}else if(i){const h=za(t,g=>Ye(g));c=EP(r.serverSyncTree_,l,h)}else{const h=Ye(t);c=co(r.serverSyncTree_,l,h)}let f=l;c.length>0&&(f=Ii(r,l)),Ft(r.eventQueue_,f,c)}function i_(r,e){df(r,"connected",e),e===!1&&n1(r)}function XP(r,e){st(e,(t,i)=>{df(r,t,i)})}function df(r,e,t){const i=new Ie("/.info/"+e),o=Ye(t);r.infoData_.updateSnapshot(i,o);const l=co(r.infoSyncTree_,i,o);Ft(r.eventQueue_,i,l)}function ff(r){return r.nextWriteId_++}function ZP(r,e,t){const i=kP(r.serverSyncTree_,e);return i!=null?Promise.resolve(i):r.server_.get(e).then(o=>{const l=Ye(o).withIndex(e._queryParams.getIndex());TP(r.serverSyncTree_,e,t,!0);let c;if(e._queryParams.loadsAllData())c=co(r.serverSyncTree_,e._path,l);else{const f=Js(r.serverSyncTree_,e);c=Ev(r.serverSyncTree_,e._path,l,f)}return Ft(r.eventQueue_,e._path,c),wv(r.serverSyncTree_,e,t,null,!0),l},o=>(ho(r,"get for query "+Qe(e)+" failed: "+o),Promise.reject(new Error(o))))}function e1(r,e,t,i,o){ho(r,"set",{path:e.toString(),value:t,priority:i});const l=kl(r),c=Ye(t,i),f=Xd(r.serverSyncTree_,e),h=kv(c,f,l),g=ff(r),y=vv(r.serverSyncTree_,e,h,g,!0);cf(r.eventQueue_,y),r.server_.put(e.toString(),c.val(!0),(v,k)=>{const N=v==="ok";N||mt("set at "+e+" failed: "+v);const x=Zn(r.serverSyncTree_,g,!N);Ft(r.eventQueue_,e,x),gd(r,o,v,k)});const _=pf(r,e);Ii(r,_),Ft(r.eventQueue_,_,[])}function t1(r,e,t,i){ho(r,"update",{path:e.toString(),value:t});let o=!0;const l=kl(r),c={};if(st(t,(f,h)=>{o=!1,c[f]=Tv(je(e,f),Ye(h),r.serverSyncTree_,l)}),o)it("update() called with empty data.  Don't do anything."),gd(r,i,"ok",void 0);else{const f=ff(r),h=wP(r.serverSyncTree_,e,c,f);cf(r.eventQueue_,h),r.server_.merge(e.toString(),t,(g,y)=>{const _=g==="ok";_||mt("update at "+e+" failed: "+g);const v=Zn(r.serverSyncTree_,f,!_),k=v.length>0?Ii(r,e):e;Ft(r.eventQueue_,k,v),gd(r,i,g,y)}),st(t,g=>{const y=pf(r,je(e,g));Ii(r,y)}),Ft(r.eventQueue_,e,[])}}function n1(r){ho(r,"onDisconnectEvents");const e=kl(r),t=tl();ld(r.onDisconnect_,_e(),(o,l)=>{const c=Tv(o,l,r.serverSyncTree_,e);iv(t,o,c)});let i=[];ld(t,_e(),(o,l)=>{i=i.concat(co(r.serverSyncTree_,o,l));const c=pf(r,o);Ii(r,c)}),r.onDisconnect_=tl(),Ft(r.eventQueue_,_e(),i)}function r1(r){r.persistentConnection_&&r.persistentConnection_.interrupt(qP)}function ho(r,...e){let t="";r.persistentConnection_&&(t=r.persistentConnection_.id+":"),it(t,...e)}function gd(r,e,t,i){e&&Oi(()=>{if(t==="ok")e(null);else{const o=(t||"error").toUpperCase();let l=o;i&&(l+=": "+i);const c=new Error(l);c.code=o,e(c)}})}function bv(r,e,t){return Xd(r.serverSyncTree_,e,t)||ee.EMPTY_NODE}function hf(r,e=r.transactionQueueTree_){if(e||Rl(r,e),Li(e)){const t=Mv(r,e);F(t.length>0,"Sending zero length transaction queue"),t.every(o=>o.status===0)&&i1(r,fo(e),t)}else Nv(e)&&Il(e,t=>{hf(r,t)})}function i1(r,e,t){const i=t.map(g=>g.currentWriteId),o=bv(r,e,i);let l=o;const c=o.hash();for(let g=0;g<t.length;g++){const y=t[g];F(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const _=gt(e,y.path);l=l.updateChild(_,y.currentOutputSnapshotRaw)}const f=l.val(!0),h=e;r.server_.put(h.toString(),f,g=>{ho(r,"transaction put response",{path:h.toString(),status:g});let y=[];if(g==="ok"){const _=[];for(let v=0;v<t.length;v++)t[v].status=2,y=y.concat(Zn(r.serverSyncTree_,t[v].currentWriteId)),t[v].onComplete&&_.push(()=>t[v].onComplete(null,!0,t[v].currentOutputSnapshotResolved)),t[v].unwatcher();Rl(r,af(r.transactionQueueTree_,e)),hf(r,r.transactionQueueTree_),Ft(r.eventQueue_,e,y);for(let v=0;v<_.length;v++)Oi(_[v])}else{if(g==="datastale")for(let _=0;_<t.length;_++)t[_].status===3?t[_].status=4:t[_].status=0;else{mt("transaction at "+h.toString()+" failed: "+g);for(let _=0;_<t.length;_++)t[_].status=4,t[_].abortReason=g}Ii(r,e)}},c)}function Ii(r,e){const t=Dv(r,e),i=fo(t),o=Mv(r,t);return s1(r,o,i),i}function s1(r,e,t){if(e.length===0)return;const i=[];let o=[];const c=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const h=e[f],g=gt(t,h.path);let y=!1,_;if(F(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),h.status===4)y=!0,_=h.abortReason,o=o.concat(Zn(r.serverSyncTree_,h.currentWriteId,!0));else if(h.status===0)if(h.retryCount>=YP)y=!0,_="maxretry",o=o.concat(Zn(r.serverSyncTree_,h.currentWriteId,!0));else{const v=bv(r,h.path,c);h.currentInputSnapshot=v;const k=e[f].update(v.val());if(k!==void 0){Tl("transaction failed: Data returned ",k,h.path);let N=Ye(k);typeof k=="object"&&k!=null&&an(k,".priority")||(N=N.updatePriority(v.getPriority()));const I=h.currentWriteId,$=kl(r),W=kv(N,v,$);h.currentOutputSnapshotRaw=N,h.currentOutputSnapshotResolved=W,h.currentWriteId=ff(r),c.splice(c.indexOf(I),1),o=o.concat(vv(r.serverSyncTree_,h.path,W,h.currentWriteId,h.applyLocally)),o=o.concat(Zn(r.serverSyncTree_,I,!0))}else y=!0,_="nodata",o=o.concat(Zn(r.serverSyncTree_,h.currentWriteId,!0))}Ft(r.eventQueue_,t,o),o=[],y&&(e[f].status=2,function(v){setTimeout(v,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(_==="nodata"?i.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):i.push(()=>e[f].onComplete(new Error(_),!1,null))))}Rl(r,r.transactionQueueTree_);for(let f=0;f<i.length;f++)Oi(i[f]);hf(r,r.transactionQueueTree_)}function Dv(r,e){let t,i=r.transactionQueueTree_;for(t=fe(e);t!==null&&Li(i)===void 0;)i=af(i,t),e=Pe(e),t=fe(e);return i}function Mv(r,e){const t=[];return Fv(r,e,t),t.sort((i,o)=>i.order-o.order),t}function Fv(r,e,t){const i=Li(e);if(i)for(let o=0;o<i.length;o++)t.push(i[o]);Il(e,o=>{Fv(r,o,t)})}function Rl(r,e){const t=Li(e);if(t){let i=0;for(let o=0;o<t.length;o++)t[o].status!==2&&(t[i]=t[o],i++);t.length=i,Rv(e,t.length>0?t:void 0)}Il(e,i=>{Rl(r,i)})}function pf(r,e){const t=fo(Dv(r,e)),i=af(r.transactionQueueTree_,e);return DP(i,o=>{Vc(r,o)}),Vc(r,i),Pv(i,o=>{Vc(r,o)}),t}function Vc(r,e){const t=Li(e);if(t){const i=[];let o=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(F(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(F(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),o=o.concat(Zn(r.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&i.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?Rv(e,void 0):t.length=l+1,Ft(r.eventQueue_,fo(e),o);for(let c=0;c<i.length;c++)Oi(i[c])}}/**
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
 */function o1(r){let e="";const t=r.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let o=t[i];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function a1(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const t of r.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):mt(`Invalid query segment '${t}' in query '${r}'`)}return e}const s_=function(r,e){const t=l1(r),i=t.namespace;t.domain==="firebase.com"&&Tn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||_R();const o=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new $y(t.host,t.secure,i,o,e,"",i!==t.subdomain),path:new Ie(t.pathString)}},l1=function(r){let e="",t="",i="",o="",l="",c=!0,f="https",h=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let y=r.indexOf("/");y===-1&&(y=r.length);let _=r.indexOf("?");_===-1&&(_=r.length),e=r.substring(0,Math.min(y,_)),y<_&&(o=o1(r.substring(y,_)));const v=a1(r.substring(Math.min(r.length,_)));g=e.indexOf(":"),g>=0?(c=f==="https"||f==="wss",h=parseInt(e.substring(g+1),10)):g=e.length;const k=e.slice(0,g);if(k.toLowerCase()==="localhost")t="localhost";else if(k.split(".").length<=2)t=k;else{const N=e.indexOf(".");i=e.substring(0,N).toLowerCase(),t=e.substring(N+1),l=i}"ns"in v&&(l=v.ns)}return{host:e,port:h,domain:t,subdomain:i,secure:c,scheme:f,pathString:o,namespace:l}};/**
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
 */const o_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",u1=function(){let r=0;const e=[];return function(t){const i=t===r;r=t;let o;const l=new Array(8);for(o=7;o>=0;o--)l[o]=o_.charAt(t%64),t=Math.floor(t/64);F(t===0,"Cannot push at time == 0");let c=l.join("");if(i){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)c+=o_.charAt(e[o]);return F(c.length===20,"nextPushId: Length should be 20."),c}}();/**
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
 */class c1{constructor(e,t,i,o){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Qe(this.snapshot.exportVal())}}class d1{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class f1{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return F(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class gf{constructor(e,t,i,o){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=o}get key(){return ce(this._path)?null:$d(this._path)}get ref(){return new Rn(this._repo,this._path)}get _queryIdentifier(){const e=Hm(this._queryParams),t=Md(e);return t==="{}"?"default":t}get _queryObject(){return Hm(this._queryParams)}isEqual(e){if(e=ft(e),!(e instanceof gf))return!1;const t=this._repo===e._repo,i=Qy(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return t&&i&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+eN(this._path)}}class Rn extends gf{constructor(e,t){super(e,t,new Bd,!1)}get parent(){const e=Yy(this._path);return e===null?null:new Rn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Xs{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ie(e),i=Zs(this.ref,e);return new Xs(this._node.getChild(t),i,$e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,o)=>e(new Xs(o,Zs(this.ref,i),$e)))}hasChild(e){const t=new Ie(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ps(r,e){return r=ft(r),r._checkNotDeleted("ref"),e!==void 0?Zs(r._root,e):r._root}function Zs(r,e){return r=ft(r),fe(r._path)===null?WP("child","path",e):Av("child","path",e),new Rn(r._repo,je(r._path,e))}function h1(r,e){r=ft(r),uf("push",r._path),Ov("push",e,r._path,!0);const t=Lv(r._repo),i=u1(t),o=Zs(r,i),l=Zs(r,i);let c;return c=Promise.resolve(l),o.then=c.then.bind(c),o.catch=c.then.bind(c,void 0),o}function p1(r){return uf("remove",r._path),Uv(r,null)}function Uv(r,e){r=ft(r),uf("set",r._path),Ov("set",e,r._path,!1);const t=new no;return e1(r._repo,r._path,e,null,t.wrapCallback(()=>{})),t.promise}function g1(r,e){VP("update",e,r._path);const t=new no;return t1(r._repo,r._path,e,t.wrapCallback(()=>{})),t.promise}function jv(r){r=ft(r);const e=new f1(()=>{}),t=new mf(e);return ZP(r._repo,r,t).then(i=>new Xs(i,new Rn(r._repo,r._path),r._queryParams.getIndex()))}class mf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new c1("value",this,new Xs(e.snapshotNode,new Rn(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new d1(this,e,t):null}matches(e){return e instanceof mf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}fP(Rn);_P(Rn);/**
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
 */const m1="FIREBASE_DATABASE_EMULATOR_HOST",md={};let _1=!1;function y1(r,e,t,i){r.repoInfo_=new $y(`${e}:${t}`,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0),i&&(r.authTokenProvider_=i)}function v1(r,e,t,i,o){let l=i||r.options.databaseURL;l===void 0&&(r.options.projectId||Tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),it("Using default host for project ",r.options.projectId),l=`${r.options.projectId}-default-rtdb.firebaseio.com`);let c=s_(l,o),f=c.repoInfo,h;typeof process<"u"&&Rm&&(h=Rm[m1]),h?(l=`http://${h}?ns=${f.namespace}`,c=s_(l,o),f=c.repoInfo):c.repoInfo.secure;const g=new NR(r.name,r.options,e);BP("Invalid Firebase Database URL",c),ce(c.path)||Tn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=E1(f,r,g,new RR(r.name,t));return new S1(y,r)}function w1(r,e){const t=md[e];(!t||t[r.key]!==r)&&Tn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),r1(r),delete t[r.key]}function E1(r,e,t,i){let o=md[e.name];o||(o={},md[e.name]=o);let l=o[r.toURLString()];return l&&Tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new QP(r,_1,t,i),o[r.toURLString()]=l,l}class S1{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(JP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rn(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(w1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Tn("Cannot call "+e+" on a deleted database.")}}function C1(r=Td(),e){const t=pl(r,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=O_("database");i&&I1(t,...i)}return t}function I1(r,e,t,i={}){r=ft(r),r._checkNotDeleted("useEmulator"),r._instanceStarted&&Tn("Cannot call useEmulator() after instance has already been initialized.");const o=r._repoInternal;let l;if(o.repoInfo_.nodeAdmin)i.mockUserToken&&Tn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),l=new ba(ba.OWNER);else if(i.mockUserToken){const c=typeof i.mockUserToken=="string"?i.mockUserToken:b_(i.mockUserToken,r.app.options.projectId);l=new ba(c)}y1(o,e,t,l)}/**
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
 */function T1(r){dR(br),Nr(new sr("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return v1(i,o,l,t)},"PUBLIC").setMultipleInstances(!0)),nn(Nm,Pm,r),nn(Nm,Pm,"esm2017")}Sn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};Sn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};T1();const k1={apiKey:"AIzaSyANdwlpY4ZNrKhq6GfCXUuQaUs4y2W9Yq4",authDomain:"mina-art.firebaseapp.com",databaseURL:"https://mina-art-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"mina-art",storageBucket:"mina-art.firebasestorage.app",messagingSenderId:"595256450426",appId:"1:595256450426:web:c1f34a0c2a52c17b8a8ac3",measurementId:"G-H8Y5S6RNRK"},_f=j_(k1),$v=Sy(_f);aR(_f);const xs=C1(_f),R1=async(r,e)=>{try{await ET($v,r,e)}catch{throw new Error("Authentication failed: ")}},N1=()=>{const{t:r,i18n:e}=ki(),t=i=>{e.changeLanguage(i)};return M.jsxs("header",{children:[M.jsx("div",{className:"logo","data-key":"logo",children:r("logo")}),M.jsx("div",{className:"language-selector",children:M.jsxs("select",{onChange:i=>t(i.target.value),children:[M.jsx("option",{value:"en",children:"EN"}),M.jsx("option",{value:"ar",children:"AR"}),M.jsx("option",{value:"fr",children:"FR"}),M.jsx("option",{value:"ko",children:"KO"})]})}),M.jsx("nav",{children:M.jsxs("ul",{children:[M.jsx("li",{children:M.jsx("a",{href:"#hero","data-key":"home",children:r("home")})}),M.jsx("li",{children:M.jsx("a",{href:"#gallery","data-key":"gallery",children:r("gallery")})}),M.jsx("li",{children:M.jsx("a",{href:"#painting-game","data-key":"draw",children:r("draw")})}),M.jsx("li",{children:M.jsx("a",{href:"#about","data-key":"about",children:r("about")})})]})})]})},P1=()=>{const{t:r}=ki();return M.jsx("section",{id:"hero",className:"hero",children:M.jsx("div",{children:M.jsx("h1",{"data-key":"hero-welcome",className:"section-fade",children:r("hero-welcome")})})})},x1=()=>{const{t:r}=ki(),e=cl(),[t,i]=U.useState([]),[o,l]=U.useState(1),c=2,[f,h]=U.useState(null);U.useEffect(()=>{f?document.body.style.overflow="hidden":document.body.style.overflow=""},[f]),U.useEffect(()=>{(async()=>{const v=Ps(xs,"images");try{const k=await jv(v);if(k.exists()){const N=k.val(),I=Object.keys(N).map($=>({id:$,...N[$]})).sort(($,W)=>$.order-W.order);i(I)}}catch(k){console.error("Error fetching images from Firebase:",k)}})()},[]);const g=()=>{const _=(o-1)*c,v=Math.min(_+c,t.length);return t.slice(_,v).map(k=>M.jsx("img",{src:`data:image/png;base64,${k.blob}`,alt:`Artwork ${k.id}`,className:"rounded shadow-md cursor-pointer",onClick:()=>h(`data:image/png;base64,${k.blob}`)},k.id))},y=()=>{h(null)};return M.jsxs("section",{id:"gallery",className:"gallery",children:[M.jsx("h1",{"data-key":"gallery-title",className:"section-fade",children:r("gallery-title")}),M.jsx("button",{"data-key":"gallery-random",id:"randomImageBtn",onClick:()=>{const _=Math.floor(Math.random()*t.length);h(`data:image/png;base64,${t[_].blob}`)},children:r("gallery-random")}),M.jsx("div",{id:"gallery-container",children:g()}),M.jsx("div",{id:"pagination-controls",className:"section-fade",children:Array.from({length:Math.ceil(t.length/c)}).map((_,v)=>M.jsx("button",{onClick:()=>l(v+1),className:`px-4 py-2 rounded ${o===v+1?"bg-pink-400 text-white":"bg-gray-200"}`,children:v+1},v))}),M.jsx("button",{onClick:()=>e("/admin"),className:"px-4 py-2 bg-blue-500 text-white rounded mt-4",children:"Go to Admin Panel"}),f&&M.jsx("div",{className:"popup-overlay",onClick:y,style:{display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0,0,0,0.7)",zIndex:9999},children:M.jsxs("div",{className:"popup-content",style:{position:"relative",maxWidth:"90%",maxHeight:"90%"},onClick:_=>_.stopPropagation(),children:[M.jsx("span",{className:"close",onClick:y,style:{position:"absolute",top:"10px",right:"10px",fontSize:"30px",color:"white",cursor:"pointer"},children:"×"}),M.jsx("img",{src:f,alt:"Popup Artwork",style:{width:"100%",height:"auto",borderRadius:"8px"}})]})})]})},O1=()=>{const{t:r}=ki();return M.jsxs("section",{id:"about",className:"about",children:[M.jsx("h2",{"data-key":"about-title",className:"section-fade",children:r("about-title")}),M.jsx("p",{"data-key":"about-description",className:"section-fade",children:r("about-description")}),M.jsxs("div",{className:"social",children:[M.jsx("a",{href:"https://www.instagram.com/blurryminah/",target:"_blank","aria-label":"Instagram",className:"section-fade",children:M.jsx("i",{className:"fab fa-instagram"})}),M.jsx("a",{href:"https://www.tiktok.com/@blurryminah",target:"_blank","aria-label":"TikTok",className:"section-fade",children:M.jsx("i",{className:"fab fa-tiktok"})})]})]})},A1=()=>{const{t:r}=ki();return M.jsx("footer",{children:M.jsxs("p",{"data-key":"footer-text",children:["© 2025 ",r("footer-text")]})})},L1=()=>{const{t:r}=ki();return M.jsxs("section",{id:"painting-game",className:"painting-game",children:[M.jsx("h2",{"data-key":"drawing-title",className:"section-fade",children:r("drawing-title")}),M.jsx("iframe",{src:"https://jspaint.app",title:"Painting Game"})]})},b1=()=>{const[r,e]=U.useState([]),[t,i]=U.useState(null),[o,l]=U.useState(1),[c,f]=U.useState(null),[h,g]=U.useState(!1),[y,_]=U.useState(!1),v=cl();U.useEffect(()=>{const I=Sy(),$=IT(I,H=>{H||v("/admin/login")});return(async()=>{g(!0);const H=Ps(xs,"images");try{const K=await jv(H);if(K.exists()){const le=K.val(),ie=Object.keys(le).map(J=>({id:J,...le[J]})).sort((J,ye)=>J.order-ye.order);e(ie)}}catch(K){f("Failed to fetch images"),console.error(K)}finally{g(!1)}})(),()=>$()},[v]);const k=async()=>{if(t){if(!t.type.startsWith("image/")){f("Please select a valid image file.");return}_(!0),f(null);try{const I=new FileReader;I.onloadend=async()=>{const $=I.result,W=new Uint8Array($),H=Array.from(W).map(J=>String.fromCharCode(J)).join(""),K=btoa(H),le=Ps(xs,"images"),de=h1(le),ie={id:de.key,order:o,blob:K};await Uv(de,ie),e(J=>[...J,ie]),i(null),l(J=>J+1),_(!1)},I.readAsArrayBuffer(t)}catch(I){f("Failed to upload image. Please try again."),console.error(I),_(!1)}}},N=async I=>{try{const $=Ps(xs,`images/${I}`);await p1($),e(W=>W.filter(H=>H.id!==I))}catch{f("Failed to delete image.")}},x=async(I,$)=>{try{const W=Ps(xs,`images/${I}`);await g1(W,{order:$}),e(H=>H.map(K=>K.id===I?{...K,order:$}:K))}catch{f("Failed to reorder image.")}};return M.jsxs("div",{children:[M.jsx("h2",{children:"Admin Panel"}),c&&M.jsx("p",{children:c}),h&&M.jsx("div",{className:"loading-spinner",children:"Loading images..."}),M.jsxs("div",{className:"upload-container",children:[M.jsx("input",{type:"file",onChange:I=>i(I.target.files?I.target.files[0]:null),accept:"image/*"}),M.jsx("button",{onClick:k,disabled:y,children:y?"Uploading...":"Upload Image"})]}),y&&M.jsx("div",{className:"loading-spinner",children:"Uploading image..."}),M.jsx("div",{className:"image-list",children:r.map(I=>M.jsxs("div",{className:"image-item",children:[M.jsx("img",{src:`data:image/png;base64,${I.blob}`,alt:"Uploaded",style:{maxWidth:"200px",maxHeight:"200px"}}),M.jsxs("div",{className:"image-actions",children:[M.jsx("button",{onClick:()=>N(I.id),children:"Delete"}),M.jsx("button",{onClick:()=>x(I.id,I.order-1),children:"Move Up"}),M.jsx("button",{onClick:()=>x(I.id,I.order+1),children:"Move Down"})]})]},I.id))})]})},D1=()=>{const[r,e]=U.useState(""),[t,i]=U.useState(""),[o,l]=U.useState(null),c=cl(),f=async h=>{h.preventDefault();try{await R1(r,t),c("/admin")}catch{l("Failed to sign in. Please check your credentials.")}};return M.jsxs("form",{onSubmit:f,children:[M.jsx("h2",{children:"Admin Login"}),o&&M.jsx("p",{children:o}),M.jsx("input",{type:"email",value:r,onChange:h=>e(h.target.value),placeholder:"Email",required:!0}),M.jsx("input",{type:"password",value:t,onChange:h=>i(h.target.value),placeholder:"Password",required:!0}),M.jsx("button",{type:"submit",children:"Login"})]})},M1=()=>{const[r,e]=U.useState(!1);return U.useEffect(()=>$v.onAuthStateChanged(i=>{e(!!i)}),[]),M.jsx(nC,{i18n:ot,children:M.jsx($S,{children:M.jsxs(FS,{children:[M.jsx(ks,{path:"/",element:M.jsxs(M.Fragment,{children:[M.jsx(N1,{}),M.jsx(P1,{}),M.jsx(x1,{}),M.jsx(L1,{}),M.jsx(O1,{}),M.jsx(A1,{})]})}),M.jsx(ks,{path:"/admin",element:r?M.jsx(b1,{}):M.jsx(Rg,{to:"/login"})}),M.jsx(ks,{path:"/login",element:M.jsx(D1,{})}),M.jsx(ks,{path:"*",element:M.jsx(Rg,{to:"/"})})]})})})};GE.createRoot(document.getElementById("root")).render(M.jsx(U.StrictMode,{children:M.jsx(M1,{})}));
