(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=o(l);fetch(l.href,c)}})();function ii(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ru={exports:{}},Bo={},ou={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mh;function yv(){if(Mh)return de;Mh=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(j){return j===null||typeof j!="object"?null:(j=y&&j[y]||j["@@iterator"],typeof j=="function"?j:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,S={};function T(j,V,le){this.props=j,this.context=V,this.refs=S,this.updater=le||k}T.prototype.isReactComponent={},T.prototype.setState=function(j,V){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,V,"setState")},T.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function O(){}O.prototype=T.prototype;function M(j,V,le){this.props=j,this.context=V,this.refs=S,this.updater=le||k}var D=M.prototype=new O;D.constructor=M,w(D,T.prototype),D.isPureReactComponent=!0;var z=Array.isArray,L=Object.prototype.hasOwnProperty,W={current:null},q={key:!0,ref:!0,__self:!0,__source:!0};function H(j,V,le){var fe,me={},ge=null,Pe=null;if(V!=null)for(fe in V.ref!==void 0&&(Pe=V.ref),V.key!==void 0&&(ge=""+V.key),V)L.call(V,fe)&&!q.hasOwnProperty(fe)&&(me[fe]=V[fe]);var xe=arguments.length-2;if(xe===1)me.children=le;else if(1<xe){for(var Oe=Array(xe),vt=0;vt<xe;vt++)Oe[vt]=arguments[vt+2];me.children=Oe}if(j&&j.defaultProps)for(fe in xe=j.defaultProps,xe)me[fe]===void 0&&(me[fe]=xe[fe]);return{$$typeof:n,type:j,key:ge,ref:Pe,props:me,_owner:W.current}}function X(j,V){return{$$typeof:n,type:j.type,key:V,ref:j.ref,props:j.props,_owner:j._owner}}function ue(j){return typeof j=="object"&&j!==null&&j.$$typeof===n}function Re(j){var V={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(le){return V[le]})}var te=/\/+/g;function ve(j,V){return typeof j=="object"&&j!==null&&j.key!=null?Re(""+j.key):V.toString(36)}function He(j,V,le,fe,me){var ge=typeof j;(ge==="undefined"||ge==="boolean")&&(j=null);var Pe=!1;if(j===null)Pe=!0;else switch(ge){case"string":case"number":Pe=!0;break;case"object":switch(j.$$typeof){case n:case r:Pe=!0}}if(Pe)return Pe=j,me=me(Pe),j=fe===""?"."+ve(Pe,0):fe,z(me)?(le="",j!=null&&(le=j.replace(te,"$&/")+"/"),He(me,V,le,"",function(vt){return vt})):me!=null&&(ue(me)&&(me=X(me,le+(!me.key||Pe&&Pe.key===me.key?"":(""+me.key).replace(te,"$&/")+"/")+j)),V.push(me)),1;if(Pe=0,fe=fe===""?".":fe+":",z(j))for(var xe=0;xe<j.length;xe++){ge=j[xe];var Oe=fe+ve(ge,xe);Pe+=He(ge,V,le,Oe,me)}else if(Oe=x(j),typeof Oe=="function")for(j=Oe.call(j),xe=0;!(ge=j.next()).done;)ge=ge.value,Oe=fe+ve(ge,xe++),Pe+=He(ge,V,le,Oe,me);else if(ge==="object")throw V=String(j),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return Pe}function yt(j,V,le){if(j==null)return j;var fe=[],me=0;return He(j,fe,"","",function(ge){return V.call(le,ge,me++)}),fe}function at(j){if(j._status===-1){var V=j._result;V=V(),V.then(function(le){(j._status===0||j._status===-1)&&(j._status=1,j._result=le)},function(le){(j._status===0||j._status===-1)&&(j._status=2,j._result=le)}),j._status===-1&&(j._status=0,j._result=V)}if(j._status===1)return j._result.default;throw j._result}var ce={current:null},U={transition:null},ne={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:U,ReactCurrentOwner:W};function G(){throw Error("act(...) is not supported in production builds of React.")}return de.Children={map:yt,forEach:function(j,V,le){yt(j,function(){V.apply(this,arguments)},le)},count:function(j){var V=0;return yt(j,function(){V++}),V},toArray:function(j){return yt(j,function(V){return V})||[]},only:function(j){if(!ue(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},de.Component=T,de.Fragment=o,de.Profiler=l,de.PureComponent=M,de.StrictMode=a,de.Suspense=f,de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,de.act=G,de.cloneElement=function(j,V,le){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var fe=w({},j.props),me=j.key,ge=j.ref,Pe=j._owner;if(V!=null){if(V.ref!==void 0&&(ge=V.ref,Pe=W.current),V.key!==void 0&&(me=""+V.key),j.type&&j.type.defaultProps)var xe=j.type.defaultProps;for(Oe in V)L.call(V,Oe)&&!q.hasOwnProperty(Oe)&&(fe[Oe]=V[Oe]===void 0&&xe!==void 0?xe[Oe]:V[Oe])}var Oe=arguments.length-2;if(Oe===1)fe.children=le;else if(1<Oe){xe=Array(Oe);for(var vt=0;vt<Oe;vt++)xe[vt]=arguments[vt+2];fe.children=xe}return{$$typeof:n,type:j.type,key:me,ref:ge,props:fe,_owner:Pe}},de.createContext=function(j){return j={$$typeof:d,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:c,_context:j},j.Consumer=j},de.createElement=H,de.createFactory=function(j){var V=H.bind(null,j);return V.type=j,V},de.createRef=function(){return{current:null}},de.forwardRef=function(j){return{$$typeof:h,render:j}},de.isValidElement=ue,de.lazy=function(j){return{$$typeof:g,_payload:{_status:-1,_result:j},_init:at}},de.memo=function(j,V){return{$$typeof:m,type:j,compare:V===void 0?null:V}},de.startTransition=function(j){var V=U.transition;U.transition={};try{j()}finally{U.transition=V}},de.unstable_act=G,de.useCallback=function(j,V){return ce.current.useCallback(j,V)},de.useContext=function(j){return ce.current.useContext(j)},de.useDebugValue=function(){},de.useDeferredValue=function(j){return ce.current.useDeferredValue(j)},de.useEffect=function(j,V){return ce.current.useEffect(j,V)},de.useId=function(){return ce.current.useId()},de.useImperativeHandle=function(j,V,le){return ce.current.useImperativeHandle(j,V,le)},de.useInsertionEffect=function(j,V){return ce.current.useInsertionEffect(j,V)},de.useLayoutEffect=function(j,V){return ce.current.useLayoutEffect(j,V)},de.useMemo=function(j,V){return ce.current.useMemo(j,V)},de.useReducer=function(j,V,le){return ce.current.useReducer(j,V,le)},de.useRef=function(j){return ce.current.useRef(j)},de.useState=function(j){return ce.current.useState(j)},de.useSyncExternalStore=function(j,V,le){return ce.current.useSyncExternalStore(j,V,le)},de.useTransition=function(){return ce.current.useTransition()},de.version="18.3.1",de}var Dh;function Ya(){return Dh||(Dh=1,ou.exports=yv()),ou.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _h;function vv(){if(_h)return Bo;_h=1;var n=Ya(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(h,f,m){var g,y={},x=null,k=null;m!==void 0&&(x=""+m),f.key!==void 0&&(x=""+f.key),f.ref!==void 0&&(k=f.ref);for(g in f)a.call(f,g)&&!c.hasOwnProperty(g)&&(y[g]=f[g]);if(h&&h.defaultProps)for(g in f=h.defaultProps,f)y[g]===void 0&&(y[g]=f[g]);return{$$typeof:r,type:h,key:x,ref:k,props:y,_owner:l.current}}return Bo.Fragment=o,Bo.jsx=d,Bo.jsxs=d,Bo}var Lh;function xv(){return Lh||(Lh=1,ru.exports=vv()),ru.exports}var b=xv(),C=Ya();const he=ii(C);var Ta={},iu={exports:{}},mt={},au={exports:{}},su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh;function bv(){return zh||(zh=1,function(n){function r(U,ne){var G=U.length;U.push(ne);e:for(;0<G;){var j=G-1>>>1,V=U[j];if(0<l(V,ne))U[j]=ne,U[G]=V,G=j;else break e}}function o(U){return U.length===0?null:U[0]}function a(U){if(U.length===0)return null;var ne=U[0],G=U.pop();if(G!==ne){U[0]=G;e:for(var j=0,V=U.length,le=V>>>1;j<le;){var fe=2*(j+1)-1,me=U[fe],ge=fe+1,Pe=U[ge];if(0>l(me,G))ge<V&&0>l(Pe,me)?(U[j]=Pe,U[ge]=G,j=ge):(U[j]=me,U[fe]=G,j=fe);else if(ge<V&&0>l(Pe,G))U[j]=Pe,U[ge]=G,j=ge;else break e}}return ne}function l(U,ne){var G=U.sortIndex-ne.sortIndex;return G!==0?G:U.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();n.unstable_now=function(){return d.now()-h}}var f=[],m=[],g=1,y=null,x=3,k=!1,w=!1,S=!1,T=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(U){for(var ne=o(m);ne!==null;){if(ne.callback===null)a(m);else if(ne.startTime<=U)a(m),ne.sortIndex=ne.expirationTime,r(f,ne);else break;ne=o(m)}}function z(U){if(S=!1,D(U),!w)if(o(f)!==null)w=!0,at(L);else{var ne=o(m);ne!==null&&ce(z,ne.startTime-U)}}function L(U,ne){w=!1,S&&(S=!1,O(H),H=-1),k=!0;var G=x;try{for(D(ne),y=o(f);y!==null&&(!(y.expirationTime>ne)||U&&!Re());){var j=y.callback;if(typeof j=="function"){y.callback=null,x=y.priorityLevel;var V=j(y.expirationTime<=ne);ne=n.unstable_now(),typeof V=="function"?y.callback=V:y===o(f)&&a(f),D(ne)}else a(f);y=o(f)}if(y!==null)var le=!0;else{var fe=o(m);fe!==null&&ce(z,fe.startTime-ne),le=!1}return le}finally{y=null,x=G,k=!1}}var W=!1,q=null,H=-1,X=5,ue=-1;function Re(){return!(n.unstable_now()-ue<X)}function te(){if(q!==null){var U=n.unstable_now();ue=U;var ne=!0;try{ne=q(!0,U)}finally{ne?ve():(W=!1,q=null)}}else W=!1}var ve;if(typeof M=="function")ve=function(){M(te)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,yt=He.port2;He.port1.onmessage=te,ve=function(){yt.postMessage(null)}}else ve=function(){T(te,0)};function at(U){q=U,W||(W=!0,ve())}function ce(U,ne){H=T(function(){U(n.unstable_now())},ne)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){w||k||(w=!0,at(L))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_getFirstCallbackNode=function(){return o(f)},n.unstable_next=function(U){switch(x){case 1:case 2:case 3:var ne=3;break;default:ne=x}var G=x;x=ne;try{return U()}finally{x=G}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,ne){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var G=x;x=U;try{return ne()}finally{x=G}},n.unstable_scheduleCallback=function(U,ne,G){var j=n.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?j+G:j):G=j,U){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=G+V,U={id:g++,callback:ne,priorityLevel:U,startTime:G,expirationTime:V,sortIndex:-1},G>j?(U.sortIndex=G,r(m,U),o(f)===null&&U===o(m)&&(S?(O(H),H=-1):S=!0,ce(z,G-j))):(U.sortIndex=V,r(f,U),w||k||(w=!0,at(L))),U},n.unstable_shouldYield=Re,n.unstable_wrapCallback=function(U){var ne=x;return function(){var G=x;x=ne;try{return U.apply(this,arguments)}finally{x=G}}}}(su)),su}var Fh;function wv(){return Fh||(Fh=1,au.exports=bv()),au.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh;function kv(){if(Vh)return mt;Vh=1;var n=Ya(),r=wv();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,l={};function c(e,t){d(e,t),d(e+"Capture",t)}function d(e,t){for(l[e]=t,e=0;e<t.length;e++)a.add(t[e])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function x(e){return f.call(y,e)?!0:f.call(g,e)?!1:m.test(e)?y[e]=!0:(g[e]=!0,!1)}function k(e,t,i,s){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function w(e,t,i,s){if(t===null||typeof t>"u"||k(e,t,i,s))return!0;if(s)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function S(e,t,i,s,u,p,v){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=u,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=p,this.removeEmptyString=v}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){T[e]=new S(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];T[t]=new S(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){T[e]=new S(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){T[e]=new S(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){T[e]=new S(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){T[e]=new S(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){T[e]=new S(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){T[e]=new S(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){T[e]=new S(e,5,!1,e.toLowerCase(),null,!1,!1)});var O=/[\-:]([a-z])/g;function M(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(O,M);T[t]=new S(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(O,M);T[t]=new S(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(O,M);T[t]=new S(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){T[e]=new S(e,1,!1,e.toLowerCase(),null,!1,!1)}),T.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){T[e]=new S(e,1,!1,e.toLowerCase(),null,!0,!0)});function D(e,t,i,s){var u=T.hasOwnProperty(t)?T[t]:null;(u!==null?u.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(w(t,i,u,s)&&(i=null),s||u===null?x(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):u.mustUseProperty?e[u.propertyName]=i===null?u.type===3?!1:"":i:(t=u.attributeName,s=u.attributeNamespace,i===null?e.removeAttribute(t):(u=u.type,i=u===3||u===4&&i===!0?"":""+i,s?e.setAttributeNS(s,t,i):e.setAttribute(t,i))))}var z=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),W=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),ue=Symbol.for("react.provider"),Re=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),yt=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),U=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,j;function V(e){if(j===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);j=t&&t[1]||""}return`
`+j+e}var le=!1;function fe(e,t){if(!e||le)return"";le=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(_){var s=_}Reflect.construct(e,[],t)}else{try{t.call()}catch(_){s=_}e.call(t.prototype)}else{try{throw Error()}catch(_){s=_}e()}}catch(_){if(_&&s&&typeof _.stack=="string"){for(var u=_.stack.split(`
`),p=s.stack.split(`
`),v=u.length-1,P=p.length-1;1<=v&&0<=P&&u[v]!==p[P];)P--;for(;1<=v&&0<=P;v--,P--)if(u[v]!==p[P]){if(v!==1||P!==1)do if(v--,P--,0>P||u[v]!==p[P]){var E=`
`+u[v].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=v&&0<=P);break}}}finally{le=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?V(e):""}function me(e){switch(e.tag){case 5:return V(e.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return e=fe(e.type,!1),e;case 11:return e=fe(e.type.render,!1),e;case 1:return e=fe(e.type,!0),e;default:return""}}function ge(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case W:return"Portal";case X:return"Profiler";case H:return"StrictMode";case ve:return"Suspense";case He:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Re:return(e.displayName||"Context")+".Consumer";case ue:return(e._context.displayName||"Context")+".Provider";case te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yt:return t=e.displayName||null,t!==null?t:ge(e.type)||"Memo";case at:t=e._payload,e=e._init;try{return ge(e(t))}catch{}}return null}function Pe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(t);case 8:return t===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vt(e){var t=Oe(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var u=i.get,p=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(v){s=""+v,p.call(this,v)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(v){s=""+v},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mi(e){e._valueTracker||(e._valueTracker=vt(e))}function Fc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),s="";return e&&(s=Oe(e)?e.checked?"true":"false":e.value),e=s,e!==i?(t.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cs(e,t){var i=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Vc(e,t){var i=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;i=xe(t.value!=null?t.value:i),e._wrapperState={initialChecked:s,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ic(e,t){t=t.checked,t!=null&&D(e,"checked",t,!1)}function ds(e,t){Ic(e,t);var i=xe(t.value),s=t.type;if(i!=null)s==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fs(e,t.type,i):t.hasOwnProperty("defaultValue")&&fs(e,t.type,xe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bc(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function fs(e,t,i){(t!=="number"||gi(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var to=Array.isArray;function hr(e,t,i,s){if(e=e.options,t){t={};for(var u=0;u<i.length;u++)t["$"+i[u]]=!0;for(i=0;i<e.length;i++)u=t.hasOwnProperty("$"+e[i].value),e[i].selected!==u&&(e[i].selected=u),u&&s&&(e[i].defaultSelected=!0)}else{for(i=""+xe(i),t=null,u=0;u<e.length;u++){if(e[u].value===i){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function hs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $c(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(o(92));if(to(i)){if(1<i.length)throw Error(o(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:xe(i)}}function Hc(e,t){var i=xe(t.value),s=xe(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),s!=null&&(e.defaultValue=""+s)}function Uc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ps(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yi,Wc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,s,u){MSApp.execUnsafeLocalFunction(function(){return e(t,i,s,u)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yi=yi||document.createElement("div"),yi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function no(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wg=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(e){wg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ro[t]=ro[e]})});function Kc(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||ro.hasOwnProperty(e)&&ro[e]?(""+t).trim():t+"px"}function Gc(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var s=i.indexOf("--")===0,u=Kc(i,t[i],s);i==="float"&&(i="cssFloat"),s?e.setProperty(i,u):e[i]=u}}var kg=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ms(e,t){if(t){if(kg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function gs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ys=null;function vs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xs=null,pr=null,mr=null;function Yc(e){if(e=Co(e)){if(typeof xs!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Ii(t),xs(e.stateNode,e.type,t))}}function Xc(e){pr?mr?mr.push(e):mr=[e]:pr=e}function Qc(){if(pr){var e=pr,t=mr;if(mr=pr=null,Yc(e),t)for(e=0;e<t.length;e++)Yc(t[e])}}function Zc(e,t){return e(t)}function Jc(){}var bs=!1;function ed(e,t,i){if(bs)return e(t,i);bs=!0;try{return Zc(e,t,i)}finally{bs=!1,(pr!==null||mr!==null)&&(Jc(),Qc())}}function oo(e,t){var i=e.stateNode;if(i===null)return null;var s=Ii(i);if(s===null)return null;i=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,t,typeof i));return i}var ws=!1;if(h)try{var io={};Object.defineProperty(io,"passive",{get:function(){ws=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{ws=!1}function Sg(e,t,i,s,u,p,v,P,E){var _=Array.prototype.slice.call(arguments,3);try{t.apply(i,_)}catch(I){this.onError(I)}}var ao=!1,vi=null,xi=!1,ks=null,Pg={onError:function(e){ao=!0,vi=e}};function Tg(e,t,i,s,u,p,v,P,E){ao=!1,vi=null,Sg.apply(Pg,arguments)}function Cg(e,t,i,s,u,p,v,P,E){if(Tg.apply(this,arguments),ao){if(ao){var _=vi;ao=!1,vi=null}else throw Error(o(198));xi||(xi=!0,ks=_)}}function qn(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function td(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nd(e){if(qn(e)!==e)throw Error(o(188))}function Eg(e){var t=e.alternate;if(!t){if(t=qn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var i=e,s=t;;){var u=i.return;if(u===null)break;var p=u.alternate;if(p===null){if(s=u.return,s!==null){i=s;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===i)return nd(u),e;if(p===s)return nd(u),t;p=p.sibling}throw Error(o(188))}if(i.return!==s.return)i=u,s=p;else{for(var v=!1,P=u.child;P;){if(P===i){v=!0,i=u,s=p;break}if(P===s){v=!0,s=u,i=p;break}P=P.sibling}if(!v){for(P=p.child;P;){if(P===i){v=!0,i=p,s=u;break}if(P===s){v=!0,s=p,i=u;break}P=P.sibling}if(!v)throw Error(o(189))}}if(i.alternate!==s)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:t}function rd(e){return e=Eg(e),e!==null?od(e):null}function od(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=od(e);if(t!==null)return t;e=e.sibling}return null}var id=r.unstable_scheduleCallback,ad=r.unstable_cancelCallback,Og=r.unstable_shouldYield,Ag=r.unstable_requestPaint,Ve=r.unstable_now,jg=r.unstable_getCurrentPriorityLevel,Ss=r.unstable_ImmediatePriority,sd=r.unstable_UserBlockingPriority,bi=r.unstable_NormalPriority,Ng=r.unstable_LowPriority,ld=r.unstable_IdlePriority,wi=null,Ut=null;function Rg(e){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(wi,e,void 0,(e.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:_g,Mg=Math.log,Dg=Math.LN2;function _g(e){return e>>>=0,e===0?32:31-(Mg(e)/Dg|0)|0}var ki=64,Si=4194304;function so(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pi(e,t){var i=e.pendingLanes;if(i===0)return 0;var s=0,u=e.suspendedLanes,p=e.pingedLanes,v=i&268435455;if(v!==0){var P=v&~u;P!==0?s=so(P):(p&=v,p!==0&&(s=so(p)))}else v=i&~u,v!==0?s=so(v):p!==0&&(s=so(p));if(s===0)return 0;if(t!==0&&t!==s&&!(t&u)&&(u=s&-s,p=t&-t,u>=p||u===16&&(p&4194240)!==0))return t;if(s&4&&(s|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)i=31-Mt(t),u=1<<i,s|=e[i],t&=~u;return s}function Lg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zg(e,t){for(var i=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,p=e.pendingLanes;0<p;){var v=31-Mt(p),P=1<<v,E=u[v];E===-1?(!(P&i)||P&s)&&(u[v]=Lg(P,t)):E<=t&&(e.expiredLanes|=P),p&=~P}}function Ps(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ud(){var e=ki;return ki<<=1,!(ki&4194240)&&(ki=64),e}function Ts(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function lo(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mt(t),e[t]=i}function Fg(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<i;){var u=31-Mt(i),p=1<<u;t[u]=0,s[u]=-1,e[u]=-1,i&=~p}}function Cs(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var s=31-Mt(i),u=1<<s;u&t|e[s]&t&&(e[s]|=t),i&=~u}}var be=0;function cd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dd,Es,fd,hd,pd,Os=!1,Ti=[],vn=null,xn=null,bn=null,uo=new Map,co=new Map,wn=[],Vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function md(e,t){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":uo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(t.pointerId)}}function fo(e,t,i,s,u,p){return e===null||e.nativeEvent!==p?(e={blockedOn:t,domEventName:i,eventSystemFlags:s,nativeEvent:p,targetContainers:[u]},t!==null&&(t=Co(t),t!==null&&Es(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function Ig(e,t,i,s,u){switch(t){case"focusin":return vn=fo(vn,e,t,i,s,u),!0;case"dragenter":return xn=fo(xn,e,t,i,s,u),!0;case"mouseover":return bn=fo(bn,e,t,i,s,u),!0;case"pointerover":var p=u.pointerId;return uo.set(p,fo(uo.get(p)||null,e,t,i,s,u)),!0;case"gotpointercapture":return p=u.pointerId,co.set(p,fo(co.get(p)||null,e,t,i,s,u)),!0}return!1}function gd(e){var t=Wn(e.target);if(t!==null){var i=qn(t);if(i!==null){if(t=i.tag,t===13){if(t=td(i),t!==null){e.blockedOn=t,pd(e.priority,function(){fd(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=js(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var s=new i.constructor(i.type,i);ys=s,i.target.dispatchEvent(s),ys=null}else return t=Co(i),t!==null&&Es(t),e.blockedOn=i,!1;t.shift()}return!0}function yd(e,t,i){Ci(e)&&i.delete(t)}function Bg(){Os=!1,vn!==null&&Ci(vn)&&(vn=null),xn!==null&&Ci(xn)&&(xn=null),bn!==null&&Ci(bn)&&(bn=null),uo.forEach(yd),co.forEach(yd)}function ho(e,t){e.blockedOn===t&&(e.blockedOn=null,Os||(Os=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Bg)))}function po(e){function t(u){return ho(u,e)}if(0<Ti.length){ho(Ti[0],e);for(var i=1;i<Ti.length;i++){var s=Ti[i];s.blockedOn===e&&(s.blockedOn=null)}}for(vn!==null&&ho(vn,e),xn!==null&&ho(xn,e),bn!==null&&ho(bn,e),uo.forEach(t),co.forEach(t),i=0;i<wn.length;i++)s=wn[i],s.blockedOn===e&&(s.blockedOn=null);for(;0<wn.length&&(i=wn[0],i.blockedOn===null);)gd(i),i.blockedOn===null&&wn.shift()}var gr=z.ReactCurrentBatchConfig,Ei=!0;function $g(e,t,i,s){var u=be,p=gr.transition;gr.transition=null;try{be=1,As(e,t,i,s)}finally{be=u,gr.transition=p}}function Hg(e,t,i,s){var u=be,p=gr.transition;gr.transition=null;try{be=4,As(e,t,i,s)}finally{be=u,gr.transition=p}}function As(e,t,i,s){if(Ei){var u=js(e,t,i,s);if(u===null)Ks(e,t,s,Oi,i),md(e,s);else if(Ig(u,e,t,i,s))s.stopPropagation();else if(md(e,s),t&4&&-1<Vg.indexOf(e)){for(;u!==null;){var p=Co(u);if(p!==null&&dd(p),p=js(e,t,i,s),p===null&&Ks(e,t,s,Oi,i),p===u)break;u=p}u!==null&&s.stopPropagation()}else Ks(e,t,s,null,i)}}var Oi=null;function js(e,t,i,s){if(Oi=null,e=vs(s),e=Wn(e),e!==null)if(t=qn(e),t===null)e=null;else if(i=t.tag,i===13){if(e=td(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Oi=e,null}function vd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jg()){case Ss:return 1;case sd:return 4;case bi:case Ng:return 16;case ld:return 536870912;default:return 16}default:return 16}}var kn=null,Ns=null,Ai=null;function xd(){if(Ai)return Ai;var e,t=Ns,i=t.length,s,u="value"in kn?kn.value:kn.textContent,p=u.length;for(e=0;e<i&&t[e]===u[e];e++);var v=i-e;for(s=1;s<=v&&t[i-s]===u[p-s];s++);return Ai=u.slice(e,1<s?1-s:void 0)}function ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function bd(){return!1}function xt(e){function t(i,s,u,p,v){this._reactName=i,this._targetInst=u,this.type=s,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var P in e)e.hasOwnProperty(P)&&(i=e[P],this[P]=i?i(p):p[P]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Ni:bd,this.isPropagationStopped=bd,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rs=xt(yr),mo=G({},yr,{view:0,detail:0}),Ug=xt(mo),Ms,Ds,go,Ri=G({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==go&&(go&&e.type==="mousemove"?(Ms=e.screenX-go.screenX,Ds=e.screenY-go.screenY):Ds=Ms=0,go=e),Ms)},movementY:function(e){return"movementY"in e?e.movementY:Ds}}),wd=xt(Ri),qg=G({},Ri,{dataTransfer:0}),Wg=xt(qg),Kg=G({},mo,{relatedTarget:0}),_s=xt(Kg),Gg=G({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Yg=xt(Gg),Xg=G({},yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qg=xt(Xg),Zg=G({},yr,{data:0}),kd=xt(Zg),Jg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ny(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ty[e])?!!t[e]:!1}function Ls(){return ny}var ry=G({},mo,{key:function(e){if(e.key){var t=Jg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ey[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ls,charCode:function(e){return e.type==="keypress"?ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oy=xt(ry),iy=G({},Ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sd=xt(iy),ay=G({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ls}),sy=xt(ay),ly=G({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),uy=xt(ly),cy=G({},Ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dy=xt(cy),fy=[9,13,27,32],zs=h&&"CompositionEvent"in window,yo=null;h&&"documentMode"in document&&(yo=document.documentMode);var hy=h&&"TextEvent"in window&&!yo,Pd=h&&(!zs||yo&&8<yo&&11>=yo),Td=" ",Cd=!1;function Ed(e,t){switch(e){case"keyup":return fy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Od(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function py(e,t){switch(e){case"compositionend":return Od(t);case"keypress":return t.which!==32?null:(Cd=!0,Td);case"textInput":return e=t.data,e===Td&&Cd?null:e;default:return null}}function my(e,t){if(vr)return e==="compositionend"||!zs&&Ed(e,t)?(e=xd(),Ai=Ns=kn=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pd&&t.locale!=="ko"?null:t.data;default:return null}}var gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gy[e.type]:t==="textarea"}function jd(e,t,i,s){Xc(s),t=zi(t,"onChange"),0<t.length&&(i=new Rs("onChange","change",null,i,s),e.push({event:i,listeners:t}))}var vo=null,xo=null;function yy(e){Gd(e,0)}function Mi(e){var t=Sr(e);if(Fc(t))return e}function vy(e,t){if(e==="change")return t}var Nd=!1;if(h){var Fs;if(h){var Vs="oninput"in document;if(!Vs){var Rd=document.createElement("div");Rd.setAttribute("oninput","return;"),Vs=typeof Rd.oninput=="function"}Fs=Vs}else Fs=!1;Nd=Fs&&(!document.documentMode||9<document.documentMode)}function Md(){vo&&(vo.detachEvent("onpropertychange",Dd),xo=vo=null)}function Dd(e){if(e.propertyName==="value"&&Mi(xo)){var t=[];jd(t,xo,e,vs(e)),ed(yy,t)}}function xy(e,t,i){e==="focusin"?(Md(),vo=t,xo=i,vo.attachEvent("onpropertychange",Dd)):e==="focusout"&&Md()}function by(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mi(xo)}function wy(e,t){if(e==="click")return Mi(t)}function ky(e,t){if(e==="input"||e==="change")return Mi(t)}function Sy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:Sy;function bo(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),s=Object.keys(t);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var u=i[s];if(!f.call(t,u)||!Dt(e[u],t[u]))return!1}return!0}function _d(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ld(e,t){var i=_d(e);e=0;for(var s;i;){if(i.nodeType===3){if(s=e+i.textContent.length,e<=t&&s>=t)return{node:i,offset:t-e};e=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=_d(i)}}function zd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fd(){for(var e=window,t=gi();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=gi(e.document)}return t}function Is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Py(e){var t=Fd(),i=e.focusedElem,s=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&zd(i.ownerDocument.documentElement,i)){if(s!==null&&Is(i)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var u=i.textContent.length,p=Math.min(s.start,u);s=s.end===void 0?p:Math.min(s.end,u),!e.extend&&p>s&&(u=s,s=p,p=u),u=Ld(i,p);var v=Ld(i,s);u&&v&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==v.node||e.focusOffset!==v.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),e.removeAllRanges(),p>s?(e.addRange(t),e.extend(v.node,v.offset)):(t.setEnd(v.node,v.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ty=h&&"documentMode"in document&&11>=document.documentMode,xr=null,Bs=null,wo=null,$s=!1;function Vd(e,t,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;$s||xr==null||xr!==gi(s)||(s=xr,"selectionStart"in s&&Is(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),wo&&bo(wo,s)||(wo=s,s=zi(Bs,"onSelect"),0<s.length&&(t=new Rs("onSelect","select",null,t,i),e.push({event:t,listeners:s}),t.target=xr)))}function Di(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var br={animationend:Di("Animation","AnimationEnd"),animationiteration:Di("Animation","AnimationIteration"),animationstart:Di("Animation","AnimationStart"),transitionend:Di("Transition","TransitionEnd")},Hs={},Id={};h&&(Id=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function _i(e){if(Hs[e])return Hs[e];if(!br[e])return e;var t=br[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Id)return Hs[e]=t[i];return e}var Bd=_i("animationend"),$d=_i("animationiteration"),Hd=_i("animationstart"),Ud=_i("transitionend"),qd=new Map,Wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,t){qd.set(e,t),c(t,[e])}for(var Us=0;Us<Wd.length;Us++){var qs=Wd[Us],Cy=qs.toLowerCase(),Ey=qs[0].toUpperCase()+qs.slice(1);Sn(Cy,"on"+Ey)}Sn(Bd,"onAnimationEnd"),Sn($d,"onAnimationIteration"),Sn(Hd,"onAnimationStart"),Sn("dblclick","onDoubleClick"),Sn("focusin","onFocus"),Sn("focusout","onBlur"),Sn(Ud,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function Kd(e,t,i){var s=e.type||"unknown-event";e.currentTarget=i,Cg(s,t,void 0,e),e.currentTarget=null}function Gd(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var s=e[i],u=s.event;s=s.listeners;e:{var p=void 0;if(t)for(var v=s.length-1;0<=v;v--){var P=s[v],E=P.instance,_=P.currentTarget;if(P=P.listener,E!==p&&u.isPropagationStopped())break e;Kd(u,P,_),p=E}else for(v=0;v<s.length;v++){if(P=s[v],E=P.instance,_=P.currentTarget,P=P.listener,E!==p&&u.isPropagationStopped())break e;Kd(u,P,_),p=E}}}if(xi)throw e=ks,xi=!1,ks=null,e}function Ce(e,t){var i=t[Js];i===void 0&&(i=t[Js]=new Set);var s=e+"__bubble";i.has(s)||(Yd(t,e,2,!1),i.add(s))}function Ws(e,t,i){var s=0;t&&(s|=4),Yd(i,e,s,t)}var Li="_reactListening"+Math.random().toString(36).slice(2);function So(e){if(!e[Li]){e[Li]=!0,a.forEach(function(i){i!=="selectionchange"&&(Oy.has(i)||Ws(i,!1,e),Ws(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Li]||(t[Li]=!0,Ws("selectionchange",!1,t))}}function Yd(e,t,i,s){switch(vd(t)){case 1:var u=$g;break;case 4:u=Hg;break;default:u=As}i=u.bind(null,t,i,e),u=void 0,!ws||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(t,i,{capture:!0,passive:u}):e.addEventListener(t,i,!0):u!==void 0?e.addEventListener(t,i,{passive:u}):e.addEventListener(t,i,!1)}function Ks(e,t,i,s,u){var p=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var P=s.stateNode.containerInfo;if(P===u||P.nodeType===8&&P.parentNode===u)break;if(v===4)for(v=s.return;v!==null;){var E=v.tag;if((E===3||E===4)&&(E=v.stateNode.containerInfo,E===u||E.nodeType===8&&E.parentNode===u))return;v=v.return}for(;P!==null;){if(v=Wn(P),v===null)return;if(E=v.tag,E===5||E===6){s=p=v;continue e}P=P.parentNode}}s=s.return}ed(function(){var _=p,I=vs(i),B=[];e:{var F=qd.get(e);if(F!==void 0){var K=Rs,Q=e;switch(e){case"keypress":if(ji(i)===0)break e;case"keydown":case"keyup":K=oy;break;case"focusin":Q="focus",K=_s;break;case"focusout":Q="blur",K=_s;break;case"beforeblur":case"afterblur":K=_s;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=Wg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=sy;break;case Bd:case $d:case Hd:K=Yg;break;case Ud:K=uy;break;case"scroll":K=Ug;break;case"wheel":K=dy;break;case"copy":case"cut":case"paste":K=Qg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Sd}var Z=(t&4)!==0,Ie=!Z&&e==="scroll",N=Z?F!==null?F+"Capture":null:F;Z=[];for(var A=_,R;A!==null;){R=A;var $=R.stateNode;if(R.tag===5&&$!==null&&(R=$,N!==null&&($=oo(A,N),$!=null&&Z.push(Po(A,$,R)))),Ie)break;A=A.return}0<Z.length&&(F=new K(F,Q,null,i,I),B.push({event:F,listeners:Z}))}}if(!(t&7)){e:{if(F=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",F&&i!==ys&&(Q=i.relatedTarget||i.fromElement)&&(Wn(Q)||Q[Zt]))break e;if((K||F)&&(F=I.window===I?I:(F=I.ownerDocument)?F.defaultView||F.parentWindow:window,K?(Q=i.relatedTarget||i.toElement,K=_,Q=Q?Wn(Q):null,Q!==null&&(Ie=qn(Q),Q!==Ie||Q.tag!==5&&Q.tag!==6)&&(Q=null)):(K=null,Q=_),K!==Q)){if(Z=wd,$="onMouseLeave",N="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(Z=Sd,$="onPointerLeave",N="onPointerEnter",A="pointer"),Ie=K==null?F:Sr(K),R=Q==null?F:Sr(Q),F=new Z($,A+"leave",K,i,I),F.target=Ie,F.relatedTarget=R,$=null,Wn(I)===_&&(Z=new Z(N,A+"enter",Q,i,I),Z.target=R,Z.relatedTarget=Ie,$=Z),Ie=$,K&&Q)t:{for(Z=K,N=Q,A=0,R=Z;R;R=wr(R))A++;for(R=0,$=N;$;$=wr($))R++;for(;0<A-R;)Z=wr(Z),A--;for(;0<R-A;)N=wr(N),R--;for(;A--;){if(Z===N||N!==null&&Z===N.alternate)break t;Z=wr(Z),N=wr(N)}Z=null}else Z=null;K!==null&&Xd(B,F,K,Z,!1),Q!==null&&Ie!==null&&Xd(B,Ie,Q,Z,!0)}}e:{if(F=_?Sr(_):window,K=F.nodeName&&F.nodeName.toLowerCase(),K==="select"||K==="input"&&F.type==="file")var J=vy;else if(Ad(F))if(Nd)J=ky;else{J=by;var re=xy}else(K=F.nodeName)&&K.toLowerCase()==="input"&&(F.type==="checkbox"||F.type==="radio")&&(J=wy);if(J&&(J=J(e,_))){jd(B,J,i,I);break e}re&&re(e,F,_),e==="focusout"&&(re=F._wrapperState)&&re.controlled&&F.type==="number"&&fs(F,"number",F.value)}switch(re=_?Sr(_):window,e){case"focusin":(Ad(re)||re.contentEditable==="true")&&(xr=re,Bs=_,wo=null);break;case"focusout":wo=Bs=xr=null;break;case"mousedown":$s=!0;break;case"contextmenu":case"mouseup":case"dragend":$s=!1,Vd(B,i,I);break;case"selectionchange":if(Ty)break;case"keydown":case"keyup":Vd(B,i,I)}var oe;if(zs)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else vr?Ed(e,i)&&(ae="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(ae="onCompositionStart");ae&&(Pd&&i.locale!=="ko"&&(vr||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&vr&&(oe=xd()):(kn=I,Ns="value"in kn?kn.value:kn.textContent,vr=!0)),re=zi(_,ae),0<re.length&&(ae=new kd(ae,e,null,i,I),B.push({event:ae,listeners:re}),oe?ae.data=oe:(oe=Od(i),oe!==null&&(ae.data=oe)))),(oe=hy?py(e,i):my(e,i))&&(_=zi(_,"onBeforeInput"),0<_.length&&(I=new kd("onBeforeInput","beforeinput",null,i,I),B.push({event:I,listeners:_}),I.data=oe))}Gd(B,t)})}function Po(e,t,i){return{instance:e,listener:t,currentTarget:i}}function zi(e,t){for(var i=t+"Capture",s=[];e!==null;){var u=e,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=oo(e,i),p!=null&&s.unshift(Po(e,p,u)),p=oo(e,t),p!=null&&s.push(Po(e,p,u))),e=e.return}return s}function wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xd(e,t,i,s,u){for(var p=t._reactName,v=[];i!==null&&i!==s;){var P=i,E=P.alternate,_=P.stateNode;if(E!==null&&E===s)break;P.tag===5&&_!==null&&(P=_,u?(E=oo(i,p),E!=null&&v.unshift(Po(i,E,P))):u||(E=oo(i,p),E!=null&&v.push(Po(i,E,P)))),i=i.return}v.length!==0&&e.push({event:t,listeners:v})}var Ay=/\r\n?/g,jy=/\u0000|\uFFFD/g;function Qd(e){return(typeof e=="string"?e:""+e).replace(Ay,`
`).replace(jy,"")}function Fi(e,t,i){if(t=Qd(t),Qd(e)!==t&&i)throw Error(o(425))}function Vi(){}var Gs=null,Ys=null;function Xs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qs=typeof setTimeout=="function"?setTimeout:void 0,Ny=typeof clearTimeout=="function"?clearTimeout:void 0,Zd=typeof Promise=="function"?Promise:void 0,Ry=typeof queueMicrotask=="function"?queueMicrotask:typeof Zd<"u"?function(e){return Zd.resolve(null).then(e).catch(My)}:Qs;function My(e){setTimeout(function(){throw e})}function Zs(e,t){var i=t,s=0;do{var u=i.nextSibling;if(e.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"){if(s===0){e.removeChild(u),po(t);return}s--}else i!=="$"&&i!=="$?"&&i!=="$!"||s++;i=u}while(i);po(t)}function Pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var kr=Math.random().toString(36).slice(2),qt="__reactFiber$"+kr,To="__reactProps$"+kr,Zt="__reactContainer$"+kr,Js="__reactEvents$"+kr,Dy="__reactListeners$"+kr,_y="__reactHandles$"+kr;function Wn(e){var t=e[qt];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Zt]||i[qt]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Jd(e);e!==null;){if(i=e[qt])return i;e=Jd(e)}return t}e=i,i=e.parentNode}return null}function Co(e){return e=e[qt]||e[Zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Ii(e){return e[To]||null}var el=[],Pr=-1;function Tn(e){return{current:e}}function Ee(e){0>Pr||(e.current=el[Pr],el[Pr]=null,Pr--)}function Te(e,t){Pr++,el[Pr]=e.current,e.current=t}var Cn={},Je=Tn(Cn),ct=Tn(!1),Kn=Cn;function Tr(e,t){var i=e.type.contextTypes;if(!i)return Cn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in i)u[p]=t[p];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),u}function dt(e){return e=e.childContextTypes,e!=null}function Bi(){Ee(ct),Ee(Je)}function ef(e,t,i){if(Je.current!==Cn)throw Error(o(168));Te(Je,t),Te(ct,i)}function tf(e,t,i){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return i;s=s.getChildContext();for(var u in s)if(!(u in t))throw Error(o(108,Pe(e)||"Unknown",u));return G({},i,s)}function $i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cn,Kn=Je.current,Te(Je,e),Te(ct,ct.current),!0}function nf(e,t,i){var s=e.stateNode;if(!s)throw Error(o(169));i?(e=tf(e,t,Kn),s.__reactInternalMemoizedMergedChildContext=e,Ee(ct),Ee(Je),Te(Je,e)):Ee(ct),Te(ct,i)}var Jt=null,Hi=!1,tl=!1;function rf(e){Jt===null?Jt=[e]:Jt.push(e)}function Ly(e){Hi=!0,rf(e)}function En(){if(!tl&&Jt!==null){tl=!0;var e=0,t=be;try{var i=Jt;for(be=1;e<i.length;e++){var s=i[e];do s=s(!0);while(s!==null)}Jt=null,Hi=!1}catch(u){throw Jt!==null&&(Jt=Jt.slice(e+1)),id(Ss,En),u}finally{be=t,tl=!1}}return null}var Cr=[],Er=0,Ui=null,qi=0,Tt=[],Ct=0,Gn=null,en=1,tn="";function Yn(e,t){Cr[Er++]=qi,Cr[Er++]=Ui,Ui=e,qi=t}function of(e,t,i){Tt[Ct++]=en,Tt[Ct++]=tn,Tt[Ct++]=Gn,Gn=e;var s=en;e=tn;var u=32-Mt(s)-1;s&=~(1<<u),i+=1;var p=32-Mt(t)+u;if(30<p){var v=u-u%5;p=(s&(1<<v)-1).toString(32),s>>=v,u-=v,en=1<<32-Mt(t)+u|i<<u|s,tn=p+e}else en=1<<p|i<<u|s,tn=e}function nl(e){e.return!==null&&(Yn(e,1),of(e,1,0))}function rl(e){for(;e===Ui;)Ui=Cr[--Er],Cr[Er]=null,qi=Cr[--Er],Cr[Er]=null;for(;e===Gn;)Gn=Tt[--Ct],Tt[Ct]=null,tn=Tt[--Ct],Tt[Ct]=null,en=Tt[--Ct],Tt[Ct]=null}var bt=null,wt=null,Ae=!1,_t=null;function af(e,t){var i=jt(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function sf(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,bt=e,wt=Pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,bt=e,wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Gn!==null?{id:en,overflow:tn}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=jt(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,bt=e,wt=null,!0):!1;default:return!1}}function ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function il(e){if(Ae){var t=wt;if(t){var i=t;if(!sf(e,t)){if(ol(e))throw Error(o(418));t=Pn(i.nextSibling);var s=bt;t&&sf(e,t)?af(s,i):(e.flags=e.flags&-4097|2,Ae=!1,bt=e)}}else{if(ol(e))throw Error(o(418));e.flags=e.flags&-4097|2,Ae=!1,bt=e}}}function lf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;bt=e}function Wi(e){if(e!==bt)return!1;if(!Ae)return lf(e),Ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xs(e.type,e.memoizedProps)),t&&(t=wt)){if(ol(e))throw uf(),Error(o(418));for(;t;)af(e,t),t=Pn(t.nextSibling)}if(lf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){wt=Pn(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}wt=null}}else wt=bt?Pn(e.stateNode.nextSibling):null;return!0}function uf(){for(var e=wt;e;)e=Pn(e.nextSibling)}function Or(){wt=bt=null,Ae=!1}function al(e){_t===null?_t=[e]:_t.push(e)}var zy=z.ReactCurrentBatchConfig;function Eo(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var s=i.stateNode}if(!s)throw Error(o(147,e));var u=s,p=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===p?t.ref:(t=function(v){var P=u.refs;v===null?delete P[p]:P[p]=v},t._stringRef=p,t)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function Ki(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cf(e){var t=e._init;return t(e._payload)}function df(e){function t(N,A){if(e){var R=N.deletions;R===null?(N.deletions=[A],N.flags|=16):R.push(A)}}function i(N,A){if(!e)return null;for(;A!==null;)t(N,A),A=A.sibling;return null}function s(N,A){for(N=new Map;A!==null;)A.key!==null?N.set(A.key,A):N.set(A.index,A),A=A.sibling;return N}function u(N,A){return N=_n(N,A),N.index=0,N.sibling=null,N}function p(N,A,R){return N.index=R,e?(R=N.alternate,R!==null?(R=R.index,R<A?(N.flags|=2,A):R):(N.flags|=2,A)):(N.flags|=1048576,A)}function v(N){return e&&N.alternate===null&&(N.flags|=2),N}function P(N,A,R,$){return A===null||A.tag!==6?(A=Ql(R,N.mode,$),A.return=N,A):(A=u(A,R),A.return=N,A)}function E(N,A,R,$){var J=R.type;return J===q?I(N,A,R.props.children,$,R.key):A!==null&&(A.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===at&&cf(J)===A.type)?($=u(A,R.props),$.ref=Eo(N,A,R),$.return=N,$):($=ya(R.type,R.key,R.props,null,N.mode,$),$.ref=Eo(N,A,R),$.return=N,$)}function _(N,A,R,$){return A===null||A.tag!==4||A.stateNode.containerInfo!==R.containerInfo||A.stateNode.implementation!==R.implementation?(A=Zl(R,N.mode,$),A.return=N,A):(A=u(A,R.children||[]),A.return=N,A)}function I(N,A,R,$,J){return A===null||A.tag!==7?(A=rr(R,N.mode,$,J),A.return=N,A):(A=u(A,R),A.return=N,A)}function B(N,A,R){if(typeof A=="string"&&A!==""||typeof A=="number")return A=Ql(""+A,N.mode,R),A.return=N,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case L:return R=ya(A.type,A.key,A.props,null,N.mode,R),R.ref=Eo(N,null,A),R.return=N,R;case W:return A=Zl(A,N.mode,R),A.return=N,A;case at:var $=A._init;return B(N,$(A._payload),R)}if(to(A)||ne(A))return A=rr(A,N.mode,R,null),A.return=N,A;Ki(N,A)}return null}function F(N,A,R,$){var J=A!==null?A.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return J!==null?null:P(N,A,""+R,$);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case L:return R.key===J?E(N,A,R,$):null;case W:return R.key===J?_(N,A,R,$):null;case at:return J=R._init,F(N,A,J(R._payload),$)}if(to(R)||ne(R))return J!==null?null:I(N,A,R,$,null);Ki(N,R)}return null}function K(N,A,R,$,J){if(typeof $=="string"&&$!==""||typeof $=="number")return N=N.get(R)||null,P(A,N,""+$,J);if(typeof $=="object"&&$!==null){switch($.$$typeof){case L:return N=N.get($.key===null?R:$.key)||null,E(A,N,$,J);case W:return N=N.get($.key===null?R:$.key)||null,_(A,N,$,J);case at:var re=$._init;return K(N,A,R,re($._payload),J)}if(to($)||ne($))return N=N.get(R)||null,I(A,N,$,J,null);Ki(A,$)}return null}function Q(N,A,R,$){for(var J=null,re=null,oe=A,ae=A=0,Ye=null;oe!==null&&ae<R.length;ae++){oe.index>ae?(Ye=oe,oe=null):Ye=oe.sibling;var ye=F(N,oe,R[ae],$);if(ye===null){oe===null&&(oe=Ye);break}e&&oe&&ye.alternate===null&&t(N,oe),A=p(ye,A,ae),re===null?J=ye:re.sibling=ye,re=ye,oe=Ye}if(ae===R.length)return i(N,oe),Ae&&Yn(N,ae),J;if(oe===null){for(;ae<R.length;ae++)oe=B(N,R[ae],$),oe!==null&&(A=p(oe,A,ae),re===null?J=oe:re.sibling=oe,re=oe);return Ae&&Yn(N,ae),J}for(oe=s(N,oe);ae<R.length;ae++)Ye=K(oe,N,ae,R[ae],$),Ye!==null&&(e&&Ye.alternate!==null&&oe.delete(Ye.key===null?ae:Ye.key),A=p(Ye,A,ae),re===null?J=Ye:re.sibling=Ye,re=Ye);return e&&oe.forEach(function(Ln){return t(N,Ln)}),Ae&&Yn(N,ae),J}function Z(N,A,R,$){var J=ne(R);if(typeof J!="function")throw Error(o(150));if(R=J.call(R),R==null)throw Error(o(151));for(var re=J=null,oe=A,ae=A=0,Ye=null,ye=R.next();oe!==null&&!ye.done;ae++,ye=R.next()){oe.index>ae?(Ye=oe,oe=null):Ye=oe.sibling;var Ln=F(N,oe,ye.value,$);if(Ln===null){oe===null&&(oe=Ye);break}e&&oe&&Ln.alternate===null&&t(N,oe),A=p(Ln,A,ae),re===null?J=Ln:re.sibling=Ln,re=Ln,oe=Ye}if(ye.done)return i(N,oe),Ae&&Yn(N,ae),J;if(oe===null){for(;!ye.done;ae++,ye=R.next())ye=B(N,ye.value,$),ye!==null&&(A=p(ye,A,ae),re===null?J=ye:re.sibling=ye,re=ye);return Ae&&Yn(N,ae),J}for(oe=s(N,oe);!ye.done;ae++,ye=R.next())ye=K(oe,N,ae,ye.value,$),ye!==null&&(e&&ye.alternate!==null&&oe.delete(ye.key===null?ae:ye.key),A=p(ye,A,ae),re===null?J=ye:re.sibling=ye,re=ye);return e&&oe.forEach(function(gv){return t(N,gv)}),Ae&&Yn(N,ae),J}function Ie(N,A,R,$){if(typeof R=="object"&&R!==null&&R.type===q&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case L:e:{for(var J=R.key,re=A;re!==null;){if(re.key===J){if(J=R.type,J===q){if(re.tag===7){i(N,re.sibling),A=u(re,R.props.children),A.return=N,N=A;break e}}else if(re.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===at&&cf(J)===re.type){i(N,re.sibling),A=u(re,R.props),A.ref=Eo(N,re,R),A.return=N,N=A;break e}i(N,re);break}else t(N,re);re=re.sibling}R.type===q?(A=rr(R.props.children,N.mode,$,R.key),A.return=N,N=A):($=ya(R.type,R.key,R.props,null,N.mode,$),$.ref=Eo(N,A,R),$.return=N,N=$)}return v(N);case W:e:{for(re=R.key;A!==null;){if(A.key===re)if(A.tag===4&&A.stateNode.containerInfo===R.containerInfo&&A.stateNode.implementation===R.implementation){i(N,A.sibling),A=u(A,R.children||[]),A.return=N,N=A;break e}else{i(N,A);break}else t(N,A);A=A.sibling}A=Zl(R,N.mode,$),A.return=N,N=A}return v(N);case at:return re=R._init,Ie(N,A,re(R._payload),$)}if(to(R))return Q(N,A,R,$);if(ne(R))return Z(N,A,R,$);Ki(N,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,A!==null&&A.tag===6?(i(N,A.sibling),A=u(A,R),A.return=N,N=A):(i(N,A),A=Ql(R,N.mode,$),A.return=N,N=A),v(N)):i(N,A)}return Ie}var Ar=df(!0),ff=df(!1),Gi=Tn(null),Yi=null,jr=null,sl=null;function ll(){sl=jr=Yi=null}function ul(e){var t=Gi.current;Ee(Gi),e._currentValue=t}function cl(e,t,i){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===i)break;e=e.return}}function Nr(e,t){Yi=e,sl=jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ft=!0),e.firstContext=null)}function Et(e){var t=e._currentValue;if(sl!==e)if(e={context:e,memoizedValue:t,next:null},jr===null){if(Yi===null)throw Error(o(308));jr=e,Yi.dependencies={lanes:0,firstContext:e}}else jr=jr.next=e;return t}var Xn=null;function dl(e){Xn===null?Xn=[e]:Xn.push(e)}function hf(e,t,i,s){var u=t.interleaved;return u===null?(i.next=i,dl(t)):(i.next=u.next,u.next=i),t.interleaved=i,nn(e,s)}function nn(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var On=!1;function fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function An(e,t,i){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,pe&2){var u=s.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),s.pending=t,nn(e,i)}return u=s.interleaved,u===null?(t.next=t,dl(s)):(t.next=u.next,u.next=t),s.interleaved=t,nn(e,i)}function Xi(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,Cs(e,i)}}function mf(e,t){var i=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var u=null,p=null;if(i=i.firstBaseUpdate,i!==null){do{var v={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};p===null?u=p=v:p=p.next=v,i=i.next}while(i!==null);p===null?u=p=t:p=p.next=t}else u=p=t;i={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:s.shared,effects:s.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function Qi(e,t,i,s){var u=e.updateQueue;On=!1;var p=u.firstBaseUpdate,v=u.lastBaseUpdate,P=u.shared.pending;if(P!==null){u.shared.pending=null;var E=P,_=E.next;E.next=null,v===null?p=_:v.next=_,v=E;var I=e.alternate;I!==null&&(I=I.updateQueue,P=I.lastBaseUpdate,P!==v&&(P===null?I.firstBaseUpdate=_:P.next=_,I.lastBaseUpdate=E))}if(p!==null){var B=u.baseState;v=0,I=_=E=null,P=p;do{var F=P.lane,K=P.eventTime;if((s&F)===F){I!==null&&(I=I.next={eventTime:K,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var Q=e,Z=P;switch(F=t,K=i,Z.tag){case 1:if(Q=Z.payload,typeof Q=="function"){B=Q.call(K,B,F);break e}B=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=Z.payload,F=typeof Q=="function"?Q.call(K,B,F):Q,F==null)break e;B=G({},B,F);break e;case 2:On=!0}}P.callback!==null&&P.lane!==0&&(e.flags|=64,F=u.effects,F===null?u.effects=[P]:F.push(P))}else K={eventTime:K,lane:F,tag:P.tag,payload:P.payload,callback:P.callback,next:null},I===null?(_=I=K,E=B):I=I.next=K,v|=F;if(P=P.next,P===null){if(P=u.shared.pending,P===null)break;F=P,P=F.next,F.next=null,u.lastBaseUpdate=F,u.shared.pending=null}}while(!0);if(I===null&&(E=B),u.baseState=E,u.firstBaseUpdate=_,u.lastBaseUpdate=I,t=u.shared.interleaved,t!==null){u=t;do v|=u.lane,u=u.next;while(u!==t)}else p===null&&(u.shared.lanes=0);Jn|=v,e.lanes=v,e.memoizedState=B}}function gf(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],u=s.callback;if(u!==null){if(s.callback=null,s=i,typeof u!="function")throw Error(o(191,u));u.call(s)}}}var Oo={},Wt=Tn(Oo),Ao=Tn(Oo),jo=Tn(Oo);function Qn(e){if(e===Oo)throw Error(o(174));return e}function hl(e,t){switch(Te(jo,t),Te(Ao,e),Te(Wt,Oo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ps(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ps(t,e)}Ee(Wt),Te(Wt,t)}function Rr(){Ee(Wt),Ee(Ao),Ee(jo)}function yf(e){Qn(jo.current);var t=Qn(Wt.current),i=ps(t,e.type);t!==i&&(Te(Ao,e),Te(Wt,i))}function pl(e){Ao.current===e&&(Ee(Wt),Ee(Ao))}var Me=Tn(0);function Zi(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ml=[];function gl(){for(var e=0;e<ml.length;e++)ml[e]._workInProgressVersionPrimary=null;ml.length=0}var Ji=z.ReactCurrentDispatcher,yl=z.ReactCurrentBatchConfig,Zn=0,De=null,Ue=null,Ke=null,ea=!1,No=!1,Ro=0,Fy=0;function et(){throw Error(o(321))}function vl(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!Dt(e[i],t[i]))return!1;return!0}function xl(e,t,i,s,u,p){if(Zn=p,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ji.current=e===null||e.memoizedState===null?$y:Hy,e=i(s,u),No){p=0;do{if(No=!1,Ro=0,25<=p)throw Error(o(301));p+=1,Ke=Ue=null,t.updateQueue=null,Ji.current=Uy,e=i(s,u)}while(No)}if(Ji.current=ra,t=Ue!==null&&Ue.next!==null,Zn=0,Ke=Ue=De=null,ea=!1,t)throw Error(o(300));return e}function bl(){var e=Ro!==0;return Ro=0,e}function Kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?De.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Ot(){if(Ue===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=Ke===null?De.memoizedState:Ke.next;if(t!==null)Ke=t,Ue=e;else{if(e===null)throw Error(o(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ke===null?De.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function Mo(e,t){return typeof t=="function"?t(e):t}function wl(e){var t=Ot(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var s=Ue,u=s.baseQueue,p=i.pending;if(p!==null){if(u!==null){var v=u.next;u.next=p.next,p.next=v}s.baseQueue=u=p,i.pending=null}if(u!==null){p=u.next,s=s.baseState;var P=v=null,E=null,_=p;do{var I=_.lane;if((Zn&I)===I)E!==null&&(E=E.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),s=_.hasEagerState?_.eagerState:e(s,_.action);else{var B={lane:I,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};E===null?(P=E=B,v=s):E=E.next=B,De.lanes|=I,Jn|=I}_=_.next}while(_!==null&&_!==p);E===null?v=s:E.next=P,Dt(s,t.memoizedState)||(ft=!0),t.memoizedState=s,t.baseState=v,t.baseQueue=E,i.lastRenderedState=s}if(e=i.interleaved,e!==null){u=e;do p=u.lane,De.lanes|=p,Jn|=p,u=u.next;while(u!==e)}else u===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function kl(e){var t=Ot(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var s=i.dispatch,u=i.pending,p=t.memoizedState;if(u!==null){i.pending=null;var v=u=u.next;do p=e(p,v.action),v=v.next;while(v!==u);Dt(p,t.memoizedState)||(ft=!0),t.memoizedState=p,t.baseQueue===null&&(t.baseState=p),i.lastRenderedState=p}return[p,s]}function vf(){}function xf(e,t){var i=De,s=Ot(),u=t(),p=!Dt(s.memoizedState,u);if(p&&(s.memoizedState=u,ft=!0),s=s.queue,Sl(kf.bind(null,i,s,e),[e]),s.getSnapshot!==t||p||Ke!==null&&Ke.memoizedState.tag&1){if(i.flags|=2048,Do(9,wf.bind(null,i,s,u,t),void 0,null),Ge===null)throw Error(o(349));Zn&30||bf(i,t,u)}return u}function bf(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function wf(e,t,i,s){t.value=i,t.getSnapshot=s,Sf(t)&&Pf(e)}function kf(e,t,i){return i(function(){Sf(t)&&Pf(e)})}function Sf(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!Dt(e,i)}catch{return!0}}function Pf(e){var t=nn(e,1);t!==null&&Vt(t,e,1,-1)}function Tf(e){var t=Kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:e},t.queue=e,e=e.dispatch=By.bind(null,De,e),[t.memoizedState,e]}function Do(e,t,i,s){return e={tag:e,create:t,destroy:i,deps:s,next:null},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(s=i.next,i.next=e,e.next=s,t.lastEffect=e)),e}function Cf(){return Ot().memoizedState}function ta(e,t,i,s){var u=Kt();De.flags|=e,u.memoizedState=Do(1|t,i,void 0,s===void 0?null:s)}function na(e,t,i,s){var u=Ot();s=s===void 0?null:s;var p=void 0;if(Ue!==null){var v=Ue.memoizedState;if(p=v.destroy,s!==null&&vl(s,v.deps)){u.memoizedState=Do(t,i,p,s);return}}De.flags|=e,u.memoizedState=Do(1|t,i,p,s)}function Ef(e,t){return ta(8390656,8,e,t)}function Sl(e,t){return na(2048,8,e,t)}function Of(e,t){return na(4,2,e,t)}function Af(e,t){return na(4,4,e,t)}function jf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nf(e,t,i){return i=i!=null?i.concat([e]):null,na(4,4,jf.bind(null,t,e),i)}function Pl(){}function Rf(e,t){var i=Ot();t=t===void 0?null:t;var s=i.memoizedState;return s!==null&&t!==null&&vl(t,s[1])?s[0]:(i.memoizedState=[e,t],e)}function Mf(e,t){var i=Ot();t=t===void 0?null:t;var s=i.memoizedState;return s!==null&&t!==null&&vl(t,s[1])?s[0]:(e=e(),i.memoizedState=[e,t],e)}function Df(e,t,i){return Zn&21?(Dt(i,t)||(i=ud(),De.lanes|=i,Jn|=i,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ft=!0),e.memoizedState=i)}function Vy(e,t){var i=be;be=i!==0&&4>i?i:4,e(!0);var s=yl.transition;yl.transition={};try{e(!1),t()}finally{be=i,yl.transition=s}}function _f(){return Ot().memoizedState}function Iy(e,t,i){var s=Mn(e);if(i={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null},Lf(e))zf(t,i);else if(i=hf(e,t,i,s),i!==null){var u=lt();Vt(i,e,s,u),Ff(i,t,s)}}function By(e,t,i){var s=Mn(e),u={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null};if(Lf(e))zf(t,u);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=t.lastRenderedReducer,p!==null))try{var v=t.lastRenderedState,P=p(v,i);if(u.hasEagerState=!0,u.eagerState=P,Dt(P,v)){var E=t.interleaved;E===null?(u.next=u,dl(t)):(u.next=E.next,E.next=u),t.interleaved=u;return}}catch{}finally{}i=hf(e,t,u,s),i!==null&&(u=lt(),Vt(i,e,s,u),Ff(i,t,s))}}function Lf(e){var t=e.alternate;return e===De||t!==null&&t===De}function zf(e,t){No=ea=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Ff(e,t,i){if(i&4194240){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,Cs(e,i)}}var ra={readContext:Et,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},$y={readContext:Et,useCallback:function(e,t){return Kt().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:Ef,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,ta(4194308,4,jf.bind(null,t,e),i)},useLayoutEffect:function(e,t){return ta(4194308,4,e,t)},useInsertionEffect:function(e,t){return ta(4,2,e,t)},useMemo:function(e,t){var i=Kt();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var s=Kt();return t=i!==void 0?i(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Iy.bind(null,De,e),[s.memoizedState,e]},useRef:function(e){var t=Kt();return e={current:e},t.memoizedState=e},useState:Tf,useDebugValue:Pl,useDeferredValue:function(e){return Kt().memoizedState=e},useTransition:function(){var e=Tf(!1),t=e[0];return e=Vy.bind(null,e[1]),Kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var s=De,u=Kt();if(Ae){if(i===void 0)throw Error(o(407));i=i()}else{if(i=t(),Ge===null)throw Error(o(349));Zn&30||bf(s,t,i)}u.memoizedState=i;var p={value:i,getSnapshot:t};return u.queue=p,Ef(kf.bind(null,s,p,e),[e]),s.flags|=2048,Do(9,wf.bind(null,s,p,i,t),void 0,null),i},useId:function(){var e=Kt(),t=Ge.identifierPrefix;if(Ae){var i=tn,s=en;i=(s&~(1<<32-Mt(s)-1)).toString(32)+i,t=":"+t+"R"+i,i=Ro++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=Fy++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hy={readContext:Et,useCallback:Rf,useContext:Et,useEffect:Sl,useImperativeHandle:Nf,useInsertionEffect:Of,useLayoutEffect:Af,useMemo:Mf,useReducer:wl,useRef:Cf,useState:function(){return wl(Mo)},useDebugValue:Pl,useDeferredValue:function(e){var t=Ot();return Df(t,Ue.memoizedState,e)},useTransition:function(){var e=wl(Mo)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:vf,useSyncExternalStore:xf,useId:_f,unstable_isNewReconciler:!1},Uy={readContext:Et,useCallback:Rf,useContext:Et,useEffect:Sl,useImperativeHandle:Nf,useInsertionEffect:Of,useLayoutEffect:Af,useMemo:Mf,useReducer:kl,useRef:Cf,useState:function(){return kl(Mo)},useDebugValue:Pl,useDeferredValue:function(e){var t=Ot();return Ue===null?t.memoizedState=e:Df(t,Ue.memoizedState,e)},useTransition:function(){var e=kl(Mo)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:vf,useSyncExternalStore:xf,useId:_f,unstable_isNewReconciler:!1};function Lt(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function Tl(e,t,i,s){t=e.memoizedState,i=i(s,t),i=i==null?t:G({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var oa={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var s=lt(),u=Mn(e),p=rn(s,u);p.payload=t,i!=null&&(p.callback=i),t=An(e,p,u),t!==null&&(Vt(t,e,u,s),Xi(t,e,u))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var s=lt(),u=Mn(e),p=rn(s,u);p.tag=1,p.payload=t,i!=null&&(p.callback=i),t=An(e,p,u),t!==null&&(Vt(t,e,u,s),Xi(t,e,u))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=lt(),s=Mn(e),u=rn(i,s);u.tag=2,t!=null&&(u.callback=t),t=An(e,u,s),t!==null&&(Vt(t,e,s,i),Xi(t,e,s))}};function Vf(e,t,i,s,u,p,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,p,v):t.prototype&&t.prototype.isPureReactComponent?!bo(i,s)||!bo(u,p):!0}function If(e,t,i){var s=!1,u=Cn,p=t.contextType;return typeof p=="object"&&p!==null?p=Et(p):(u=dt(t)?Kn:Je.current,s=t.contextTypes,p=(s=s!=null)?Tr(e,u):Cn),t=new t(i,p),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=oa,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=p),t}function Bf(e,t,i,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,s),t.state!==e&&oa.enqueueReplaceState(t,t.state,null)}function Cl(e,t,i,s){var u=e.stateNode;u.props=i,u.state=e.memoizedState,u.refs={},fl(e);var p=t.contextType;typeof p=="object"&&p!==null?u.context=Et(p):(p=dt(t)?Kn:Je.current,u.context=Tr(e,p)),u.state=e.memoizedState,p=t.getDerivedStateFromProps,typeof p=="function"&&(Tl(e,t,p,i),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(t=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),t!==u.state&&oa.enqueueReplaceState(u,u.state,null),Qi(e,i,u,s),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function Mr(e,t){try{var i="",s=t;do i+=me(s),s=s.return;while(s);var u=i}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:e,source:t,stack:u,digest:null}}function El(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function Ol(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var qy=typeof WeakMap=="function"?WeakMap:Map;function $f(e,t,i){i=rn(-1,i),i.tag=3,i.payload={element:null};var s=t.value;return i.callback=function(){da||(da=!0,Hl=s),Ol(e,t)},i}function Hf(e,t,i){i=rn(-1,i),i.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var u=t.value;i.payload=function(){return s(u)},i.callback=function(){Ol(e,t)}}var p=e.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(i.callback=function(){Ol(e,t),typeof s!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var v=t.stack;this.componentDidCatch(t.value,{componentStack:v!==null?v:""})}),i}function Uf(e,t,i){var s=e.pingCache;if(s===null){s=e.pingCache=new qy;var u=new Set;s.set(t,u)}else u=s.get(t),u===void 0&&(u=new Set,s.set(t,u));u.has(i)||(u.add(i),e=iv.bind(null,e,t,i),t.then(e,e))}function qf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wf(e,t,i,s,u){return e.mode&1?(e.flags|=65536,e.lanes=u,e):(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=rn(-1,1),t.tag=2,An(i,t,1))),i.lanes|=1),e)}var Wy=z.ReactCurrentOwner,ft=!1;function st(e,t,i,s){t.child=e===null?ff(t,null,i,s):Ar(t,e.child,i,s)}function Kf(e,t,i,s,u){i=i.render;var p=t.ref;return Nr(t,u),s=xl(e,t,i,s,p,u),i=bl(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,on(e,t,u)):(Ae&&i&&nl(t),t.flags|=1,st(e,t,s,u),t.child)}function Gf(e,t,i,s,u){if(e===null){var p=i.type;return typeof p=="function"&&!Xl(p)&&p.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=p,Yf(e,t,p,s,u)):(e=ya(i.type,null,s,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(p=e.child,!(e.lanes&u)){var v=p.memoizedProps;if(i=i.compare,i=i!==null?i:bo,i(v,s)&&e.ref===t.ref)return on(e,t,u)}return t.flags|=1,e=_n(p,s),e.ref=t.ref,e.return=t,t.child=e}function Yf(e,t,i,s,u){if(e!==null){var p=e.memoizedProps;if(bo(p,s)&&e.ref===t.ref)if(ft=!1,t.pendingProps=s=p,(e.lanes&u)!==0)e.flags&131072&&(ft=!0);else return t.lanes=e.lanes,on(e,t,u)}return Al(e,t,i,s,u)}function Xf(e,t,i){var s=t.pendingProps,u=s.children,p=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(_r,kt),kt|=i;else{if(!(i&1073741824))return e=p!==null?p.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Te(_r,kt),kt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=p!==null?p.baseLanes:i,Te(_r,kt),kt|=s}else p!==null?(s=p.baseLanes|i,t.memoizedState=null):s=i,Te(_r,kt),kt|=s;return st(e,t,u,i),t.child}function Qf(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function Al(e,t,i,s,u){var p=dt(i)?Kn:Je.current;return p=Tr(t,p),Nr(t,u),i=xl(e,t,i,s,p,u),s=bl(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,on(e,t,u)):(Ae&&s&&nl(t),t.flags|=1,st(e,t,i,u),t.child)}function Zf(e,t,i,s,u){if(dt(i)){var p=!0;$i(t)}else p=!1;if(Nr(t,u),t.stateNode===null)aa(e,t),If(t,i,s),Cl(t,i,s,u),s=!0;else if(e===null){var v=t.stateNode,P=t.memoizedProps;v.props=P;var E=v.context,_=i.contextType;typeof _=="object"&&_!==null?_=Et(_):(_=dt(i)?Kn:Je.current,_=Tr(t,_));var I=i.getDerivedStateFromProps,B=typeof I=="function"||typeof v.getSnapshotBeforeUpdate=="function";B||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(P!==s||E!==_)&&Bf(t,v,s,_),On=!1;var F=t.memoizedState;v.state=F,Qi(t,s,v,u),E=t.memoizedState,P!==s||F!==E||ct.current||On?(typeof I=="function"&&(Tl(t,i,I,s),E=t.memoizedState),(P=On||Vf(t,i,P,s,F,E,_))?(B||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(t.flags|=4194308)):(typeof v.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=E),v.props=s,v.state=E,v.context=_,s=P):(typeof v.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{v=t.stateNode,pf(e,t),P=t.memoizedProps,_=t.type===t.elementType?P:Lt(t.type,P),v.props=_,B=t.pendingProps,F=v.context,E=i.contextType,typeof E=="object"&&E!==null?E=Et(E):(E=dt(i)?Kn:Je.current,E=Tr(t,E));var K=i.getDerivedStateFromProps;(I=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(P!==B||F!==E)&&Bf(t,v,s,E),On=!1,F=t.memoizedState,v.state=F,Qi(t,s,v,u);var Q=t.memoizedState;P!==B||F!==Q||ct.current||On?(typeof K=="function"&&(Tl(t,i,K,s),Q=t.memoizedState),(_=On||Vf(t,i,_,s,F,Q,E)||!1)?(I||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(s,Q,E),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(s,Q,E)),typeof v.componentDidUpdate=="function"&&(t.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof v.componentDidUpdate!="function"||P===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||P===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=Q),v.props=s,v.state=Q,v.context=E,s=_):(typeof v.componentDidUpdate!="function"||P===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||P===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),s=!1)}return jl(e,t,i,s,p,u)}function jl(e,t,i,s,u,p){Qf(e,t);var v=(t.flags&128)!==0;if(!s&&!v)return u&&nf(t,i,!1),on(e,t,p);s=t.stateNode,Wy.current=t;var P=v&&typeof i.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&v?(t.child=Ar(t,e.child,null,p),t.child=Ar(t,null,P,p)):st(e,t,P,p),t.memoizedState=s.state,u&&nf(t,i,!0),t.child}function Jf(e){var t=e.stateNode;t.pendingContext?ef(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ef(e,t.context,!1),hl(e,t.containerInfo)}function eh(e,t,i,s,u){return Or(),al(u),t.flags|=256,st(e,t,i,s),t.child}var Nl={dehydrated:null,treeContext:null,retryLane:0};function Rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function th(e,t,i){var s=t.pendingProps,u=Me.current,p=!1,v=(t.flags&128)!==0,P;if((P=v)||(P=e!==null&&e.memoizedState===null?!1:(u&2)!==0),P?(p=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),Te(Me,u&1),e===null)return il(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(v=s.children,e=s.fallback,p?(s=t.mode,p=t.child,v={mode:"hidden",children:v},!(s&1)&&p!==null?(p.childLanes=0,p.pendingProps=v):p=va(v,s,0,null),e=rr(e,s,i,null),p.return=t,e.return=t,p.sibling=e,t.child=p,t.child.memoizedState=Rl(i),t.memoizedState=Nl,e):Ml(t,v));if(u=e.memoizedState,u!==null&&(P=u.dehydrated,P!==null))return Ky(e,t,v,s,P,u,i);if(p){p=s.fallback,v=t.mode,u=e.child,P=u.sibling;var E={mode:"hidden",children:s.children};return!(v&1)&&t.child!==u?(s=t.child,s.childLanes=0,s.pendingProps=E,t.deletions=null):(s=_n(u,E),s.subtreeFlags=u.subtreeFlags&14680064),P!==null?p=_n(P,p):(p=rr(p,v,i,null),p.flags|=2),p.return=t,s.return=t,s.sibling=p,t.child=s,s=p,p=t.child,v=e.child.memoizedState,v=v===null?Rl(i):{baseLanes:v.baseLanes|i,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=e.childLanes&~i,t.memoizedState=Nl,s}return p=e.child,e=p.sibling,s=_n(p,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=i),s.return=t,s.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=s,t.memoizedState=null,s}function Ml(e,t){return t=va({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ia(e,t,i,s){return s!==null&&al(s),Ar(t,e.child,null,i),e=Ml(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ky(e,t,i,s,u,p,v){if(i)return t.flags&256?(t.flags&=-257,s=El(Error(o(422))),ia(e,t,v,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(p=s.fallback,u=t.mode,s=va({mode:"visible",children:s.children},u,0,null),p=rr(p,u,v,null),p.flags|=2,s.return=t,p.return=t,s.sibling=p,t.child=s,t.mode&1&&Ar(t,e.child,null,v),t.child.memoizedState=Rl(v),t.memoizedState=Nl,p);if(!(t.mode&1))return ia(e,t,v,null);if(u.data==="$!"){if(s=u.nextSibling&&u.nextSibling.dataset,s)var P=s.dgst;return s=P,p=Error(o(419)),s=El(p,s,void 0),ia(e,t,v,s)}if(P=(v&e.childLanes)!==0,ft||P){if(s=Ge,s!==null){switch(v&-v){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=u&(s.suspendedLanes|v)?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,nn(e,u),Vt(s,e,u,-1))}return Yl(),s=El(Error(o(421))),ia(e,t,v,s)}return u.data==="$?"?(t.flags|=128,t.child=e.child,t=av.bind(null,e),u._reactRetry=t,null):(e=p.treeContext,wt=Pn(u.nextSibling),bt=t,Ae=!0,_t=null,e!==null&&(Tt[Ct++]=en,Tt[Ct++]=tn,Tt[Ct++]=Gn,en=e.id,tn=e.overflow,Gn=t),t=Ml(t,s.children),t.flags|=4096,t)}function nh(e,t,i){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),cl(e.return,t,i)}function Dl(e,t,i,s,u){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:u}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=s,p.tail=i,p.tailMode=u)}function rh(e,t,i){var s=t.pendingProps,u=s.revealOrder,p=s.tail;if(st(e,t,s.children,i),s=Me.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nh(e,i,t);else if(e.tag===19)nh(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Te(Me,s),!(t.mode&1))t.memoizedState=null;else switch(u){case"forwards":for(i=t.child,u=null;i!==null;)e=i.alternate,e!==null&&Zi(e)===null&&(u=i),i=i.sibling;i=u,i===null?(u=t.child,t.child=null):(u=i.sibling,i.sibling=null),Dl(t,!1,u,i,p);break;case"backwards":for(i=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&Zi(e)===null){t.child=u;break}e=u.sibling,u.sibling=i,i=u,u=e}Dl(t,!0,i,null,p);break;case"together":Dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function aa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function on(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Jn|=t.lanes,!(i&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,i=_n(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=_n(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Gy(e,t,i){switch(t.tag){case 3:Jf(t),Or();break;case 5:yf(t);break;case 1:dt(t.type)&&$i(t);break;case 4:hl(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,u=t.memoizedProps.value;Te(Gi,s._currentValue),s._currentValue=u;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Te(Me,Me.current&1),t.flags|=128,null):i&t.child.childLanes?th(e,t,i):(Te(Me,Me.current&1),e=on(e,t,i),e!==null?e.sibling:null);Te(Me,Me.current&1);break;case 19:if(s=(i&t.childLanes)!==0,e.flags&128){if(s)return rh(e,t,i);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Te(Me,Me.current),s)break;return null;case 22:case 23:return t.lanes=0,Xf(e,t,i)}return on(e,t,i)}var oh,_l,ih,ah;oh=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},_l=function(){},ih=function(e,t,i,s){var u=e.memoizedProps;if(u!==s){e=t.stateNode,Qn(Wt.current);var p=null;switch(i){case"input":u=cs(e,u),s=cs(e,s),p=[];break;case"select":u=G({},u,{value:void 0}),s=G({},s,{value:void 0}),p=[];break;case"textarea":u=hs(e,u),s=hs(e,s),p=[];break;default:typeof u.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Vi)}ms(i,s);var v;i=null;for(_ in u)if(!s.hasOwnProperty(_)&&u.hasOwnProperty(_)&&u[_]!=null)if(_==="style"){var P=u[_];for(v in P)P.hasOwnProperty(v)&&(i||(i={}),i[v]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(l.hasOwnProperty(_)?p||(p=[]):(p=p||[]).push(_,null));for(_ in s){var E=s[_];if(P=u!=null?u[_]:void 0,s.hasOwnProperty(_)&&E!==P&&(E!=null||P!=null))if(_==="style")if(P){for(v in P)!P.hasOwnProperty(v)||E&&E.hasOwnProperty(v)||(i||(i={}),i[v]="");for(v in E)E.hasOwnProperty(v)&&P[v]!==E[v]&&(i||(i={}),i[v]=E[v])}else i||(p||(p=[]),p.push(_,i)),i=E;else _==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,P=P?P.__html:void 0,E!=null&&P!==E&&(p=p||[]).push(_,E)):_==="children"?typeof E!="string"&&typeof E!="number"||(p=p||[]).push(_,""+E):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(l.hasOwnProperty(_)?(E!=null&&_==="onScroll"&&Ce("scroll",e),p||P===E||(p=[])):(p=p||[]).push(_,E))}i&&(p=p||[]).push("style",i);var _=p;(t.updateQueue=_)&&(t.flags|=4)}},ah=function(e,t,i,s){i!==s&&(t.flags|=4)};function _o(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,s=0;if(t)for(var u=e.child;u!==null;)i|=u.lanes|u.childLanes,s|=u.subtreeFlags&14680064,s|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)i|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=i,t}function Yy(e,t,i){var s=t.pendingProps;switch(rl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return dt(t.type)&&Bi(),tt(t),null;case 3:return s=t.stateNode,Rr(),Ee(ct),Ee(Je),gl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Wi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,_t!==null&&(Wl(_t),_t=null))),_l(e,t),tt(t),null;case 5:pl(t);var u=Qn(jo.current);if(i=t.type,e!==null&&t.stateNode!=null)ih(e,t,i,s,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(o(166));return tt(t),null}if(e=Qn(Wt.current),Wi(t)){s=t.stateNode,i=t.type;var p=t.memoizedProps;switch(s[qt]=t,s[To]=p,e=(t.mode&1)!==0,i){case"dialog":Ce("cancel",s),Ce("close",s);break;case"iframe":case"object":case"embed":Ce("load",s);break;case"video":case"audio":for(u=0;u<ko.length;u++)Ce(ko[u],s);break;case"source":Ce("error",s);break;case"img":case"image":case"link":Ce("error",s),Ce("load",s);break;case"details":Ce("toggle",s);break;case"input":Vc(s,p),Ce("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!p.multiple},Ce("invalid",s);break;case"textarea":$c(s,p),Ce("invalid",s)}ms(i,p),u=null;for(var v in p)if(p.hasOwnProperty(v)){var P=p[v];v==="children"?typeof P=="string"?s.textContent!==P&&(p.suppressHydrationWarning!==!0&&Fi(s.textContent,P,e),u=["children",P]):typeof P=="number"&&s.textContent!==""+P&&(p.suppressHydrationWarning!==!0&&Fi(s.textContent,P,e),u=["children",""+P]):l.hasOwnProperty(v)&&P!=null&&v==="onScroll"&&Ce("scroll",s)}switch(i){case"input":mi(s),Bc(s,p,!0);break;case"textarea":mi(s),Uc(s);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(s.onclick=Vi)}s=u,t.updateQueue=s,s!==null&&(t.flags|=4)}else{v=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qc(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=v.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=v.createElement(i,{is:s.is}):(e=v.createElement(i),i==="select"&&(v=e,s.multiple?v.multiple=!0:s.size&&(v.size=s.size))):e=v.createElementNS(e,i),e[qt]=t,e[To]=s,oh(e,t,!1,!1),t.stateNode=e;e:{switch(v=gs(i,s),i){case"dialog":Ce("cancel",e),Ce("close",e),u=s;break;case"iframe":case"object":case"embed":Ce("load",e),u=s;break;case"video":case"audio":for(u=0;u<ko.length;u++)Ce(ko[u],e);u=s;break;case"source":Ce("error",e),u=s;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),u=s;break;case"details":Ce("toggle",e),u=s;break;case"input":Vc(e,s),u=cs(e,s),Ce("invalid",e);break;case"option":u=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},u=G({},s,{value:void 0}),Ce("invalid",e);break;case"textarea":$c(e,s),u=hs(e,s),Ce("invalid",e);break;default:u=s}ms(i,u),P=u;for(p in P)if(P.hasOwnProperty(p)){var E=P[p];p==="style"?Gc(e,E):p==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&Wc(e,E)):p==="children"?typeof E=="string"?(i!=="textarea"||E!=="")&&no(e,E):typeof E=="number"&&no(e,""+E):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(l.hasOwnProperty(p)?E!=null&&p==="onScroll"&&Ce("scroll",e):E!=null&&D(e,p,E,v))}switch(i){case"input":mi(e),Bc(e,s,!1);break;case"textarea":mi(e),Uc(e);break;case"option":s.value!=null&&e.setAttribute("value",""+xe(s.value));break;case"select":e.multiple=!!s.multiple,p=s.value,p!=null?hr(e,!!s.multiple,p,!1):s.defaultValue!=null&&hr(e,!!s.multiple,s.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Vi)}switch(i){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)ah(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(o(166));if(i=Qn(jo.current),Qn(Wt.current),Wi(t)){if(s=t.stateNode,i=t.memoizedProps,s[qt]=t,(p=s.nodeValue!==i)&&(e=bt,e!==null))switch(e.tag){case 3:Fi(s.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fi(s.nodeValue,i,(e.mode&1)!==0)}p&&(t.flags|=4)}else s=(i.nodeType===9?i:i.ownerDocument).createTextNode(s),s[qt]=t,t.stateNode=s}return tt(t),null;case 13:if(Ee(Me),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ae&&wt!==null&&t.mode&1&&!(t.flags&128))uf(),Or(),t.flags|=98560,p=!1;else if(p=Wi(t),s!==null&&s.dehydrated!==null){if(e===null){if(!p)throw Error(o(318));if(p=t.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(o(317));p[qt]=t}else Or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;tt(t),p=!1}else _t!==null&&(Wl(_t),_t=null),p=!0;if(!p)return t.flags&65536?t:null}return t.flags&128?(t.lanes=i,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||Me.current&1?qe===0&&(qe=3):Yl())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return Rr(),_l(e,t),e===null&&So(t.stateNode.containerInfo),tt(t),null;case 10:return ul(t.type._context),tt(t),null;case 17:return dt(t.type)&&Bi(),tt(t),null;case 19:if(Ee(Me),p=t.memoizedState,p===null)return tt(t),null;if(s=(t.flags&128)!==0,v=p.rendering,v===null)if(s)_o(p,!1);else{if(qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(v=Zi(e),v!==null){for(t.flags|=128,_o(p,!1),s=v.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=i,i=t.child;i!==null;)p=i,e=s,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=e,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,e=v.dependencies,p.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Te(Me,Me.current&1|2),t.child}e=e.sibling}p.tail!==null&&Ve()>Lr&&(t.flags|=128,s=!0,_o(p,!1),t.lanes=4194304)}else{if(!s)if(e=Zi(v),e!==null){if(t.flags|=128,s=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),_o(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Ae)return tt(t),null}else 2*Ve()-p.renderingStartTime>Lr&&i!==1073741824&&(t.flags|=128,s=!0,_o(p,!1),t.lanes=4194304);p.isBackwards?(v.sibling=t.child,t.child=v):(i=p.last,i!==null?i.sibling=v:t.child=v,p.last=v)}return p.tail!==null?(t=p.tail,p.rendering=t,p.tail=t.sibling,p.renderingStartTime=Ve(),t.sibling=null,i=Me.current,Te(Me,s?i&1|2:i&1),t):(tt(t),null);case 22:case 23:return Gl(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?kt&1073741824&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Xy(e,t){switch(rl(t),t.tag){case 1:return dt(t.type)&&Bi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rr(),Ee(ct),Ee(Je),gl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return pl(t),null;case 13:if(Ee(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(Me),null;case 4:return Rr(),null;case 10:return ul(t.type._context),null;case 22:case 23:return Gl(),null;case 24:return null;default:return null}}var sa=!1,nt=!1,Qy=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Dr(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(s){ze(e,t,s)}else i.current=null}function Ll(e,t,i){try{i()}catch(s){ze(e,t,s)}}var sh=!1;function Zy(e,t){if(Gs=Ei,e=Fd(),Is(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var u=s.anchorOffset,p=s.focusNode;s=s.focusOffset;try{i.nodeType,p.nodeType}catch{i=null;break e}var v=0,P=-1,E=-1,_=0,I=0,B=e,F=null;t:for(;;){for(var K;B!==i||u!==0&&B.nodeType!==3||(P=v+u),B!==p||s!==0&&B.nodeType!==3||(E=v+s),B.nodeType===3&&(v+=B.nodeValue.length),(K=B.firstChild)!==null;)F=B,B=K;for(;;){if(B===e)break t;if(F===i&&++_===u&&(P=v),F===p&&++I===s&&(E=v),(K=B.nextSibling)!==null)break;B=F,F=B.parentNode}B=K}i=P===-1||E===-1?null:{start:P,end:E}}else i=null}i=i||{start:0,end:0}}else i=null;for(Ys={focusedElem:e,selectionRange:i},Ei=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var Q=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Q!==null){var Z=Q.memoizedProps,Ie=Q.memoizedState,N=t.stateNode,A=N.getSnapshotBeforeUpdate(t.elementType===t.type?Z:Lt(t.type,Z),Ie);N.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var R=t.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch($){ze(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return Q=sh,sh=!1,Q}function Lo(e,t,i){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var u=s=s.next;do{if((u.tag&e)===e){var p=u.destroy;u.destroy=void 0,p!==void 0&&Ll(t,i,p)}u=u.next}while(u!==s)}}function la(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var s=i.create;i.destroy=s()}i=i.next}while(i!==t)}}function zl(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function lh(e){var t=e.alternate;t!==null&&(e.alternate=null,lh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qt],delete t[To],delete t[Js],delete t[Dy],delete t[_y])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uh(e){return e.tag===5||e.tag===3||e.tag===4}function ch(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fl(e,t,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Vi));else if(s!==4&&(e=e.child,e!==null))for(Fl(e,t,i),e=e.sibling;e!==null;)Fl(e,t,i),e=e.sibling}function Vl(e,t,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Vl(e,t,i),e=e.sibling;e!==null;)Vl(e,t,i),e=e.sibling}var Xe=null,zt=!1;function jn(e,t,i){for(i=i.child;i!==null;)dh(e,t,i),i=i.sibling}function dh(e,t,i){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(wi,i)}catch{}switch(i.tag){case 5:nt||Dr(i,t);case 6:var s=Xe,u=zt;Xe=null,jn(e,t,i),Xe=s,zt=u,Xe!==null&&(zt?(e=Xe,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Xe.removeChild(i.stateNode));break;case 18:Xe!==null&&(zt?(e=Xe,i=i.stateNode,e.nodeType===8?Zs(e.parentNode,i):e.nodeType===1&&Zs(e,i),po(e)):Zs(Xe,i.stateNode));break;case 4:s=Xe,u=zt,Xe=i.stateNode.containerInfo,zt=!0,jn(e,t,i),Xe=s,zt=u;break;case 0:case 11:case 14:case 15:if(!nt&&(s=i.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){u=s=s.next;do{var p=u,v=p.destroy;p=p.tag,v!==void 0&&(p&2||p&4)&&Ll(i,t,v),u=u.next}while(u!==s)}jn(e,t,i);break;case 1:if(!nt&&(Dr(i,t),s=i.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(P){ze(i,t,P)}jn(e,t,i);break;case 21:jn(e,t,i);break;case 22:i.mode&1?(nt=(s=nt)||i.memoizedState!==null,jn(e,t,i),nt=s):jn(e,t,i);break;default:jn(e,t,i)}}function fh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Qy),t.forEach(function(s){var u=sv.bind(null,e,s);i.has(s)||(i.add(s),s.then(u,u))})}}function Ft(e,t){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];try{var p=e,v=t,P=v;e:for(;P!==null;){switch(P.tag){case 5:Xe=P.stateNode,zt=!1;break e;case 3:Xe=P.stateNode.containerInfo,zt=!0;break e;case 4:Xe=P.stateNode.containerInfo,zt=!0;break e}P=P.return}if(Xe===null)throw Error(o(160));dh(p,v,u),Xe=null,zt=!1;var E=u.alternate;E!==null&&(E.return=null),u.return=null}catch(_){ze(u,t,_)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hh(t,e),t=t.sibling}function hh(e,t){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ft(t,e),Gt(e),s&4){try{Lo(3,e,e.return),la(3,e)}catch(Z){ze(e,e.return,Z)}try{Lo(5,e,e.return)}catch(Z){ze(e,e.return,Z)}}break;case 1:Ft(t,e),Gt(e),s&512&&i!==null&&Dr(i,i.return);break;case 5:if(Ft(t,e),Gt(e),s&512&&i!==null&&Dr(i,i.return),e.flags&32){var u=e.stateNode;try{no(u,"")}catch(Z){ze(e,e.return,Z)}}if(s&4&&(u=e.stateNode,u!=null)){var p=e.memoizedProps,v=i!==null?i.memoizedProps:p,P=e.type,E=e.updateQueue;if(e.updateQueue=null,E!==null)try{P==="input"&&p.type==="radio"&&p.name!=null&&Ic(u,p),gs(P,v);var _=gs(P,p);for(v=0;v<E.length;v+=2){var I=E[v],B=E[v+1];I==="style"?Gc(u,B):I==="dangerouslySetInnerHTML"?Wc(u,B):I==="children"?no(u,B):D(u,I,B,_)}switch(P){case"input":ds(u,p);break;case"textarea":Hc(u,p);break;case"select":var F=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var K=p.value;K!=null?hr(u,!!p.multiple,K,!1):F!==!!p.multiple&&(p.defaultValue!=null?hr(u,!!p.multiple,p.defaultValue,!0):hr(u,!!p.multiple,p.multiple?[]:"",!1))}u[To]=p}catch(Z){ze(e,e.return,Z)}}break;case 6:if(Ft(t,e),Gt(e),s&4){if(e.stateNode===null)throw Error(o(162));u=e.stateNode,p=e.memoizedProps;try{u.nodeValue=p}catch(Z){ze(e,e.return,Z)}}break;case 3:if(Ft(t,e),Gt(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{po(t.containerInfo)}catch(Z){ze(e,e.return,Z)}break;case 4:Ft(t,e),Gt(e);break;case 13:Ft(t,e),Gt(e),u=e.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||($l=Ve())),s&4&&fh(e);break;case 22:if(I=i!==null&&i.memoizedState!==null,e.mode&1?(nt=(_=nt)||I,Ft(t,e),nt=_):Ft(t,e),Gt(e),s&8192){if(_=e.memoizedState!==null,(e.stateNode.isHidden=_)&&!I&&e.mode&1)for(Y=e,I=e.child;I!==null;){for(B=Y=I;Y!==null;){switch(F=Y,K=F.child,F.tag){case 0:case 11:case 14:case 15:Lo(4,F,F.return);break;case 1:Dr(F,F.return);var Q=F.stateNode;if(typeof Q.componentWillUnmount=="function"){s=F,i=F.return;try{t=s,Q.props=t.memoizedProps,Q.state=t.memoizedState,Q.componentWillUnmount()}catch(Z){ze(s,i,Z)}}break;case 5:Dr(F,F.return);break;case 22:if(F.memoizedState!==null){gh(B);continue}}K!==null?(K.return=F,Y=K):gh(B)}I=I.sibling}e:for(I=null,B=e;;){if(B.tag===5){if(I===null){I=B;try{u=B.stateNode,_?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(P=B.stateNode,E=B.memoizedProps.style,v=E!=null&&E.hasOwnProperty("display")?E.display:null,P.style.display=Kc("display",v))}catch(Z){ze(e,e.return,Z)}}}else if(B.tag===6){if(I===null)try{B.stateNode.nodeValue=_?"":B.memoizedProps}catch(Z){ze(e,e.return,Z)}}else if((B.tag!==22&&B.tag!==23||B.memoizedState===null||B===e)&&B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break e;for(;B.sibling===null;){if(B.return===null||B.return===e)break e;I===B&&(I=null),B=B.return}I===B&&(I=null),B.sibling.return=B.return,B=B.sibling}}break;case 19:Ft(t,e),Gt(e),s&4&&fh(e);break;case 21:break;default:Ft(t,e),Gt(e)}}function Gt(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(uh(i)){var s=i;break e}i=i.return}throw Error(o(160))}switch(s.tag){case 5:var u=s.stateNode;s.flags&32&&(no(u,""),s.flags&=-33);var p=ch(e);Vl(e,p,u);break;case 3:case 4:var v=s.stateNode.containerInfo,P=ch(e);Fl(e,P,v);break;default:throw Error(o(161))}}catch(E){ze(e,e.return,E)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jy(e,t,i){Y=e,ph(e)}function ph(e,t,i){for(var s=(e.mode&1)!==0;Y!==null;){var u=Y,p=u.child;if(u.tag===22&&s){var v=u.memoizedState!==null||sa;if(!v){var P=u.alternate,E=P!==null&&P.memoizedState!==null||nt;P=sa;var _=nt;if(sa=v,(nt=E)&&!_)for(Y=u;Y!==null;)v=Y,E=v.child,v.tag===22&&v.memoizedState!==null?yh(u):E!==null?(E.return=v,Y=E):yh(u);for(;p!==null;)Y=p,ph(p),p=p.sibling;Y=u,sa=P,nt=_}mh(e)}else u.subtreeFlags&8772&&p!==null?(p.return=u,Y=p):mh(e)}}function mh(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var i=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:nt||la(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!nt)if(i===null)s.componentDidMount();else{var u=t.elementType===t.type?i.memoizedProps:Lt(t.type,i.memoizedProps);s.componentDidUpdate(u,i.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var p=t.updateQueue;p!==null&&gf(t,p,s);break;case 3:var v=t.updateQueue;if(v!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}gf(t,v,i)}break;case 5:var P=t.stateNode;if(i===null&&t.flags&4){i=P;var E=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&i.focus();break;case"img":E.src&&(i.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var _=t.alternate;if(_!==null){var I=_.memoizedState;if(I!==null){var B=I.dehydrated;B!==null&&po(B)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}nt||t.flags&512&&zl(t)}catch(F){ze(t,t.return,F)}}if(t===e){Y=null;break}if(i=t.sibling,i!==null){i.return=t.return,Y=i;break}Y=t.return}}function gh(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var i=t.sibling;if(i!==null){i.return=t.return,Y=i;break}Y=t.return}}function yh(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{la(4,t)}catch(E){ze(t,i,E)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var u=t.return;try{s.componentDidMount()}catch(E){ze(t,u,E)}}var p=t.return;try{zl(t)}catch(E){ze(t,p,E)}break;case 5:var v=t.return;try{zl(t)}catch(E){ze(t,v,E)}}}catch(E){ze(t,t.return,E)}if(t===e){Y=null;break}var P=t.sibling;if(P!==null){P.return=t.return,Y=P;break}Y=t.return}}var ev=Math.ceil,ua=z.ReactCurrentDispatcher,Il=z.ReactCurrentOwner,At=z.ReactCurrentBatchConfig,pe=0,Ge=null,$e=null,Qe=0,kt=0,_r=Tn(0),qe=0,zo=null,Jn=0,ca=0,Bl=0,Fo=null,ht=null,$l=0,Lr=1/0,an=null,da=!1,Hl=null,Nn=null,fa=!1,Rn=null,ha=0,Vo=0,Ul=null,pa=-1,ma=0;function lt(){return pe&6?Ve():pa!==-1?pa:pa=Ve()}function Mn(e){return e.mode&1?pe&2&&Qe!==0?Qe&-Qe:zy.transition!==null?(ma===0&&(ma=ud()),ma):(e=be,e!==0||(e=window.event,e=e===void 0?16:vd(e.type)),e):1}function Vt(e,t,i,s){if(50<Vo)throw Vo=0,Ul=null,Error(o(185));lo(e,i,s),(!(pe&2)||e!==Ge)&&(e===Ge&&(!(pe&2)&&(ca|=i),qe===4&&Dn(e,Qe)),pt(e,s),i===1&&pe===0&&!(t.mode&1)&&(Lr=Ve()+500,Hi&&En()))}function pt(e,t){var i=e.callbackNode;zg(e,t);var s=Pi(e,e===Ge?Qe:0);if(s===0)i!==null&&ad(i),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(i!=null&&ad(i),t===1)e.tag===0?Ly(xh.bind(null,e)):rf(xh.bind(null,e)),Ry(function(){!(pe&6)&&En()}),i=null;else{switch(cd(s)){case 1:i=Ss;break;case 4:i=sd;break;case 16:i=bi;break;case 536870912:i=ld;break;default:i=bi}i=Eh(i,vh.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function vh(e,t){if(pa=-1,ma=0,pe&6)throw Error(o(327));var i=e.callbackNode;if(zr()&&e.callbackNode!==i)return null;var s=Pi(e,e===Ge?Qe:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=ga(e,s);else{t=s;var u=pe;pe|=2;var p=wh();(Ge!==e||Qe!==t)&&(an=null,Lr=Ve()+500,tr(e,t));do try{rv();break}catch(P){bh(e,P)}while(!0);ll(),ua.current=p,pe=u,$e!==null?t=0:(Ge=null,Qe=0,t=qe)}if(t!==0){if(t===2&&(u=Ps(e),u!==0&&(s=u,t=ql(e,u))),t===1)throw i=zo,tr(e,0),Dn(e,s),pt(e,Ve()),i;if(t===6)Dn(e,s);else{if(u=e.current.alternate,!(s&30)&&!tv(u)&&(t=ga(e,s),t===2&&(p=Ps(e),p!==0&&(s=p,t=ql(e,p))),t===1))throw i=zo,tr(e,0),Dn(e,s),pt(e,Ve()),i;switch(e.finishedWork=u,e.finishedLanes=s,t){case 0:case 1:throw Error(o(345));case 2:nr(e,ht,an);break;case 3:if(Dn(e,s),(s&130023424)===s&&(t=$l+500-Ve(),10<t)){if(Pi(e,0)!==0)break;if(u=e.suspendedLanes,(u&s)!==s){lt(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=Qs(nr.bind(null,e,ht,an),t);break}nr(e,ht,an);break;case 4:if(Dn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,u=-1;0<s;){var v=31-Mt(s);p=1<<v,v=t[v],v>u&&(u=v),s&=~p}if(s=u,s=Ve()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*ev(s/1960))-s,10<s){e.timeoutHandle=Qs(nr.bind(null,e,ht,an),s);break}nr(e,ht,an);break;case 5:nr(e,ht,an);break;default:throw Error(o(329))}}}return pt(e,Ve()),e.callbackNode===i?vh.bind(null,e):null}function ql(e,t){var i=Fo;return e.current.memoizedState.isDehydrated&&(tr(e,t).flags|=256),e=ga(e,t),e!==2&&(t=ht,ht=i,t!==null&&Wl(t)),e}function Wl(e){ht===null?ht=e:ht.push.apply(ht,e)}function tv(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var s=0;s<i.length;s++){var u=i[s],p=u.getSnapshot;u=u.value;try{if(!Dt(p(),u))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dn(e,t){for(t&=~Bl,t&=~ca,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-Mt(t),s=1<<i;e[i]=-1,t&=~s}}function xh(e){if(pe&6)throw Error(o(327));zr();var t=Pi(e,0);if(!(t&1))return pt(e,Ve()),null;var i=ga(e,t);if(e.tag!==0&&i===2){var s=Ps(e);s!==0&&(t=s,i=ql(e,s))}if(i===1)throw i=zo,tr(e,0),Dn(e,t),pt(e,Ve()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nr(e,ht,an),pt(e,Ve()),null}function Kl(e,t){var i=pe;pe|=1;try{return e(t)}finally{pe=i,pe===0&&(Lr=Ve()+500,Hi&&En())}}function er(e){Rn!==null&&Rn.tag===0&&!(pe&6)&&zr();var t=pe;pe|=1;var i=At.transition,s=be;try{if(At.transition=null,be=1,e)return e()}finally{be=s,At.transition=i,pe=t,!(pe&6)&&En()}}function Gl(){kt=_r.current,Ee(_r)}function tr(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Ny(i)),$e!==null)for(i=$e.return;i!==null;){var s=i;switch(rl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Bi();break;case 3:Rr(),Ee(ct),Ee(Je),gl();break;case 5:pl(s);break;case 4:Rr();break;case 13:Ee(Me);break;case 19:Ee(Me);break;case 10:ul(s.type._context);break;case 22:case 23:Gl()}i=i.return}if(Ge=e,$e=e=_n(e.current,null),Qe=kt=t,qe=0,zo=null,Bl=ca=Jn=0,ht=Fo=null,Xn!==null){for(t=0;t<Xn.length;t++)if(i=Xn[t],s=i.interleaved,s!==null){i.interleaved=null;var u=s.next,p=i.pending;if(p!==null){var v=p.next;p.next=u,s.next=v}i.pending=s}Xn=null}return e}function bh(e,t){do{var i=$e;try{if(ll(),Ji.current=ra,ea){for(var s=De.memoizedState;s!==null;){var u=s.queue;u!==null&&(u.pending=null),s=s.next}ea=!1}if(Zn=0,Ke=Ue=De=null,No=!1,Ro=0,Il.current=null,i===null||i.return===null){qe=1,zo=t,$e=null;break}e:{var p=e,v=i.return,P=i,E=t;if(t=Qe,P.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var _=E,I=P,B=I.tag;if(!(I.mode&1)&&(B===0||B===11||B===15)){var F=I.alternate;F?(I.updateQueue=F.updateQueue,I.memoizedState=F.memoizedState,I.lanes=F.lanes):(I.updateQueue=null,I.memoizedState=null)}var K=qf(v);if(K!==null){K.flags&=-257,Wf(K,v,P,p,t),K.mode&1&&Uf(p,_,t),t=K,E=_;var Q=t.updateQueue;if(Q===null){var Z=new Set;Z.add(E),t.updateQueue=Z}else Q.add(E);break e}else{if(!(t&1)){Uf(p,_,t),Yl();break e}E=Error(o(426))}}else if(Ae&&P.mode&1){var Ie=qf(v);if(Ie!==null){!(Ie.flags&65536)&&(Ie.flags|=256),Wf(Ie,v,P,p,t),al(Mr(E,P));break e}}p=E=Mr(E,P),qe!==4&&(qe=2),Fo===null?Fo=[p]:Fo.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,t&=-t,p.lanes|=t;var N=$f(p,E,t);mf(p,N);break e;case 1:P=E;var A=p.type,R=p.stateNode;if(!(p.flags&128)&&(typeof A.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(Nn===null||!Nn.has(R)))){p.flags|=65536,t&=-t,p.lanes|=t;var $=Hf(p,P,t);mf(p,$);break e}}p=p.return}while(p!==null)}Sh(i)}catch(J){t=J,$e===i&&i!==null&&($e=i=i.return);continue}break}while(!0)}function wh(){var e=ua.current;return ua.current=ra,e===null?ra:e}function Yl(){(qe===0||qe===3||qe===2)&&(qe=4),Ge===null||!(Jn&268435455)&&!(ca&268435455)||Dn(Ge,Qe)}function ga(e,t){var i=pe;pe|=2;var s=wh();(Ge!==e||Qe!==t)&&(an=null,tr(e,t));do try{nv();break}catch(u){bh(e,u)}while(!0);if(ll(),pe=i,ua.current=s,$e!==null)throw Error(o(261));return Ge=null,Qe=0,qe}function nv(){for(;$e!==null;)kh($e)}function rv(){for(;$e!==null&&!Og();)kh($e)}function kh(e){var t=Ch(e.alternate,e,kt);e.memoizedProps=e.pendingProps,t===null?Sh(e):$e=t,Il.current=null}function Sh(e){var t=e;do{var i=t.alternate;if(e=t.return,t.flags&32768){if(i=Xy(i,t),i!==null){i.flags&=32767,$e=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{qe=6,$e=null;return}}else if(i=Yy(i,t,kt),i!==null){$e=i;return}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);qe===0&&(qe=5)}function nr(e,t,i){var s=be,u=At.transition;try{At.transition=null,be=1,ov(e,t,i,s)}finally{At.transition=u,be=s}return null}function ov(e,t,i,s){do zr();while(Rn!==null);if(pe&6)throw Error(o(327));i=e.finishedWork;var u=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var p=i.lanes|i.childLanes;if(Fg(e,p),e===Ge&&($e=Ge=null,Qe=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||fa||(fa=!0,Eh(bi,function(){return zr(),null})),p=(i.flags&15990)!==0,i.subtreeFlags&15990||p){p=At.transition,At.transition=null;var v=be;be=1;var P=pe;pe|=4,Il.current=null,Zy(e,i),hh(i,e),Py(Ys),Ei=!!Gs,Ys=Gs=null,e.current=i,Jy(i),Ag(),pe=P,be=v,At.transition=p}else e.current=i;if(fa&&(fa=!1,Rn=e,ha=u),p=e.pendingLanes,p===0&&(Nn=null),Rg(i.stateNode),pt(e,Ve()),t!==null)for(s=e.onRecoverableError,i=0;i<t.length;i++)u=t[i],s(u.value,{componentStack:u.stack,digest:u.digest});if(da)throw da=!1,e=Hl,Hl=null,e;return ha&1&&e.tag!==0&&zr(),p=e.pendingLanes,p&1?e===Ul?Vo++:(Vo=0,Ul=e):Vo=0,En(),null}function zr(){if(Rn!==null){var e=cd(ha),t=At.transition,i=be;try{if(At.transition=null,be=16>e?16:e,Rn===null)var s=!1;else{if(e=Rn,Rn=null,ha=0,pe&6)throw Error(o(331));var u=pe;for(pe|=4,Y=e.current;Y!==null;){var p=Y,v=p.child;if(Y.flags&16){var P=p.deletions;if(P!==null){for(var E=0;E<P.length;E++){var _=P[E];for(Y=_;Y!==null;){var I=Y;switch(I.tag){case 0:case 11:case 15:Lo(8,I,p)}var B=I.child;if(B!==null)B.return=I,Y=B;else for(;Y!==null;){I=Y;var F=I.sibling,K=I.return;if(lh(I),I===_){Y=null;break}if(F!==null){F.return=K,Y=F;break}Y=K}}}var Q=p.alternate;if(Q!==null){var Z=Q.child;if(Z!==null){Q.child=null;do{var Ie=Z.sibling;Z.sibling=null,Z=Ie}while(Z!==null)}}Y=p}}if(p.subtreeFlags&2064&&v!==null)v.return=p,Y=v;else e:for(;Y!==null;){if(p=Y,p.flags&2048)switch(p.tag){case 0:case 11:case 15:Lo(9,p,p.return)}var N=p.sibling;if(N!==null){N.return=p.return,Y=N;break e}Y=p.return}}var A=e.current;for(Y=A;Y!==null;){v=Y;var R=v.child;if(v.subtreeFlags&2064&&R!==null)R.return=v,Y=R;else e:for(v=A;Y!==null;){if(P=Y,P.flags&2048)try{switch(P.tag){case 0:case 11:case 15:la(9,P)}}catch(J){ze(P,P.return,J)}if(P===v){Y=null;break e}var $=P.sibling;if($!==null){$.return=P.return,Y=$;break e}Y=P.return}}if(pe=u,En(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(wi,e)}catch{}s=!0}return s}finally{be=i,At.transition=t}}return!1}function Ph(e,t,i){t=Mr(i,t),t=$f(e,t,1),e=An(e,t,1),t=lt(),e!==null&&(lo(e,1,t),pt(e,t))}function ze(e,t,i){if(e.tag===3)Ph(e,e,i);else for(;t!==null;){if(t.tag===3){Ph(t,e,i);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Nn===null||!Nn.has(s))){e=Mr(i,e),e=Hf(t,e,1),t=An(t,e,1),e=lt(),t!==null&&(lo(t,1,e),pt(t,e));break}}t=t.return}}function iv(e,t,i){var s=e.pingCache;s!==null&&s.delete(t),t=lt(),e.pingedLanes|=e.suspendedLanes&i,Ge===e&&(Qe&i)===i&&(qe===4||qe===3&&(Qe&130023424)===Qe&&500>Ve()-$l?tr(e,0):Bl|=i),pt(e,t)}function Th(e,t){t===0&&(e.mode&1?(t=Si,Si<<=1,!(Si&130023424)&&(Si=4194304)):t=1);var i=lt();e=nn(e,t),e!==null&&(lo(e,t,i),pt(e,i))}function av(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),Th(e,i)}function sv(e,t){var i=0;switch(e.tag){case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(i=u.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(o(314))}s!==null&&s.delete(t),Th(e,i)}var Ch;Ch=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)ft=!0;else{if(!(e.lanes&i)&&!(t.flags&128))return ft=!1,Gy(e,t,i);ft=!!(e.flags&131072)}else ft=!1,Ae&&t.flags&1048576&&of(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;aa(e,t),e=t.pendingProps;var u=Tr(t,Je.current);Nr(t,i),u=xl(null,t,s,e,u,i);var p=bl();return t.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,dt(s)?(p=!0,$i(t)):p=!1,t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,fl(t),u.updater=oa,t.stateNode=u,u._reactInternals=t,Cl(t,s,e,i),t=jl(null,t,s,!0,p,i)):(t.tag=0,Ae&&p&&nl(t),st(null,t,u,i),t=t.child),t;case 16:s=t.elementType;e:{switch(aa(e,t),e=t.pendingProps,u=s._init,s=u(s._payload),t.type=s,u=t.tag=uv(s),e=Lt(s,e),u){case 0:t=Al(null,t,s,e,i);break e;case 1:t=Zf(null,t,s,e,i);break e;case 11:t=Kf(null,t,s,e,i);break e;case 14:t=Gf(null,t,s,Lt(s.type,e),i);break e}throw Error(o(306,s,""))}return t;case 0:return s=t.type,u=t.pendingProps,u=t.elementType===s?u:Lt(s,u),Al(e,t,s,u,i);case 1:return s=t.type,u=t.pendingProps,u=t.elementType===s?u:Lt(s,u),Zf(e,t,s,u,i);case 3:e:{if(Jf(t),e===null)throw Error(o(387));s=t.pendingProps,p=t.memoizedState,u=p.element,pf(e,t),Qi(t,s,null,i);var v=t.memoizedState;if(s=v.element,p.isDehydrated)if(p={element:s,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},t.updateQueue.baseState=p,t.memoizedState=p,t.flags&256){u=Mr(Error(o(423)),t),t=eh(e,t,s,i,u);break e}else if(s!==u){u=Mr(Error(o(424)),t),t=eh(e,t,s,i,u);break e}else for(wt=Pn(t.stateNode.containerInfo.firstChild),bt=t,Ae=!0,_t=null,i=ff(t,null,s,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Or(),s===u){t=on(e,t,i);break e}st(e,t,s,i)}t=t.child}return t;case 5:return yf(t),e===null&&il(t),s=t.type,u=t.pendingProps,p=e!==null?e.memoizedProps:null,v=u.children,Xs(s,u)?v=null:p!==null&&Xs(s,p)&&(t.flags|=32),Qf(e,t),st(e,t,v,i),t.child;case 6:return e===null&&il(t),null;case 13:return th(e,t,i);case 4:return hl(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Ar(t,null,s,i):st(e,t,s,i),t.child;case 11:return s=t.type,u=t.pendingProps,u=t.elementType===s?u:Lt(s,u),Kf(e,t,s,u,i);case 7:return st(e,t,t.pendingProps,i),t.child;case 8:return st(e,t,t.pendingProps.children,i),t.child;case 12:return st(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(s=t.type._context,u=t.pendingProps,p=t.memoizedProps,v=u.value,Te(Gi,s._currentValue),s._currentValue=v,p!==null)if(Dt(p.value,v)){if(p.children===u.children&&!ct.current){t=on(e,t,i);break e}}else for(p=t.child,p!==null&&(p.return=t);p!==null;){var P=p.dependencies;if(P!==null){v=p.child;for(var E=P.firstContext;E!==null;){if(E.context===s){if(p.tag===1){E=rn(-1,i&-i),E.tag=2;var _=p.updateQueue;if(_!==null){_=_.shared;var I=_.pending;I===null?E.next=E:(E.next=I.next,I.next=E),_.pending=E}}p.lanes|=i,E=p.alternate,E!==null&&(E.lanes|=i),cl(p.return,i,t),P.lanes|=i;break}E=E.next}}else if(p.tag===10)v=p.type===t.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(o(341));v.lanes|=i,P=v.alternate,P!==null&&(P.lanes|=i),cl(v,i,t),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===t){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}st(e,t,u.children,i),t=t.child}return t;case 9:return u=t.type,s=t.pendingProps.children,Nr(t,i),u=Et(u),s=s(u),t.flags|=1,st(e,t,s,i),t.child;case 14:return s=t.type,u=Lt(s,t.pendingProps),u=Lt(s.type,u),Gf(e,t,s,u,i);case 15:return Yf(e,t,t.type,t.pendingProps,i);case 17:return s=t.type,u=t.pendingProps,u=t.elementType===s?u:Lt(s,u),aa(e,t),t.tag=1,dt(s)?(e=!0,$i(t)):e=!1,Nr(t,i),If(t,s,u),Cl(t,s,u,i),jl(null,t,s,!0,e,i);case 19:return rh(e,t,i);case 22:return Xf(e,t,i)}throw Error(o(156,t.tag))};function Eh(e,t){return id(e,t)}function lv(e,t,i,s){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,i,s){return new lv(e,t,i,s)}function Xl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function uv(e){if(typeof e=="function")return Xl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===te)return 11;if(e===yt)return 14}return 2}function _n(e,t){var i=e.alternate;return i===null?(i=jt(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function ya(e,t,i,s,u,p){var v=2;if(s=e,typeof e=="function")Xl(e)&&(v=1);else if(typeof e=="string")v=5;else e:switch(e){case q:return rr(i.children,u,p,t);case H:v=8,u|=8;break;case X:return e=jt(12,i,t,u|2),e.elementType=X,e.lanes=p,e;case ve:return e=jt(13,i,t,u),e.elementType=ve,e.lanes=p,e;case He:return e=jt(19,i,t,u),e.elementType=He,e.lanes=p,e;case ce:return va(i,u,p,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ue:v=10;break e;case Re:v=9;break e;case te:v=11;break e;case yt:v=14;break e;case at:v=16,s=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=jt(v,i,t,u),t.elementType=e,t.type=s,t.lanes=p,t}function rr(e,t,i,s){return e=jt(7,e,s,t),e.lanes=i,e}function va(e,t,i,s){return e=jt(22,e,s,t),e.elementType=ce,e.lanes=i,e.stateNode={isHidden:!1},e}function Ql(e,t,i){return e=jt(6,e,null,t),e.lanes=i,e}function Zl(e,t,i){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cv(e,t,i,s,u){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ts(0),this.expirationTimes=Ts(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ts(0),this.identifierPrefix=s,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Jl(e,t,i,s,u,p,v,P,E){return e=new cv(e,t,i,P,E),t===1?(t=1,p===!0&&(t|=8)):t=0,p=jt(3,null,null,t),e.current=p,p.stateNode=e,p.memoizedState={element:s,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},fl(p),e}function dv(e,t,i){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:W,key:s==null?null:""+s,children:e,containerInfo:t,implementation:i}}function Oh(e){if(!e)return Cn;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(dt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(dt(i))return tf(e,i,t)}return t}function Ah(e,t,i,s,u,p,v,P,E){return e=Jl(i,s,!0,e,u,p,v,P,E),e.context=Oh(null),i=e.current,s=lt(),u=Mn(i),p=rn(s,u),p.callback=t??null,An(i,p,u),e.current.lanes=u,lo(e,u,s),pt(e,s),e}function xa(e,t,i,s){var u=t.current,p=lt(),v=Mn(u);return i=Oh(i),t.context===null?t.context=i:t.pendingContext=i,t=rn(p,v),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=An(u,t,v),e!==null&&(Vt(e,u,v,p),Xi(e,u,v)),v}function ba(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function eu(e,t){jh(e,t),(e=e.alternate)&&jh(e,t)}function fv(){return null}var Nh=typeof reportError=="function"?reportError:function(e){console.error(e)};function tu(e){this._internalRoot=e}wa.prototype.render=tu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));xa(e,t,null,null)},wa.prototype.unmount=tu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;er(function(){xa(null,e,null,null)}),t[Zt]=null}};function wa(e){this._internalRoot=e}wa.prototype.unstable_scheduleHydration=function(e){if(e){var t=hd();e={blockedOn:null,target:e,priority:t};for(var i=0;i<wn.length&&t!==0&&t<wn[i].priority;i++);wn.splice(i,0,e),i===0&&gd(e)}};function nu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rh(){}function hv(e,t,i,s,u){if(u){if(typeof s=="function"){var p=s;s=function(){var _=ba(v);p.call(_)}}var v=Ah(t,s,e,0,null,!1,!1,"",Rh);return e._reactRootContainer=v,e[Zt]=v.current,So(e.nodeType===8?e.parentNode:e),er(),v}for(;u=e.lastChild;)e.removeChild(u);if(typeof s=="function"){var P=s;s=function(){var _=ba(E);P.call(_)}}var E=Jl(e,0,!1,null,null,!1,!1,"",Rh);return e._reactRootContainer=E,e[Zt]=E.current,So(e.nodeType===8?e.parentNode:e),er(function(){xa(t,E,i,s)}),E}function Sa(e,t,i,s,u){var p=i._reactRootContainer;if(p){var v=p;if(typeof u=="function"){var P=u;u=function(){var E=ba(v);P.call(E)}}xa(t,v,e,u)}else v=hv(i,t,e,u,s);return ba(v)}dd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=so(t.pendingLanes);i!==0&&(Cs(t,i|1),pt(t,Ve()),!(pe&6)&&(Lr=Ve()+500,En()))}break;case 13:er(function(){var s=nn(e,1);if(s!==null){var u=lt();Vt(s,e,1,u)}}),eu(e,1)}},Es=function(e){if(e.tag===13){var t=nn(e,134217728);if(t!==null){var i=lt();Vt(t,e,134217728,i)}eu(e,134217728)}},fd=function(e){if(e.tag===13){var t=Mn(e),i=nn(e,t);if(i!==null){var s=lt();Vt(i,e,t,s)}eu(e,t)}},hd=function(){return be},pd=function(e,t){var i=be;try{return be=e,t()}finally{be=i}},xs=function(e,t,i){switch(t){case"input":if(ds(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var s=i[t];if(s!==e&&s.form===e.form){var u=Ii(s);if(!u)throw Error(o(90));Fc(s),ds(s,u)}}}break;case"textarea":Hc(e,i);break;case"select":t=i.value,t!=null&&hr(e,!!i.multiple,t,!1)}},Zc=Kl,Jc=er;var pv={usingClientEntryPoint:!1,Events:[Co,Sr,Ii,Xc,Qc,Kl]},Io={findFiberByHostInstance:Wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mv={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rd(e),e===null?null:e.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||fv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{wi=Pa.inject(mv),Ut=Pa}catch{}}return mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pv,mt.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nu(t))throw Error(o(200));return dv(e,t,null,i)},mt.createRoot=function(e,t){if(!nu(e))throw Error(o(299));var i=!1,s="",u=Nh;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Jl(e,1,!1,null,null,i,!1,s,u),e[Zt]=t.current,So(e.nodeType===8?e.parentNode:e),new tu(t)},mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=rd(t),e=e===null?null:e.stateNode,e},mt.flushSync=function(e){return er(e)},mt.hydrate=function(e,t,i){if(!ka(t))throw Error(o(200));return Sa(null,e,t,!0,i)},mt.hydrateRoot=function(e,t,i){if(!nu(e))throw Error(o(405));var s=i!=null&&i.hydratedSources||null,u=!1,p="",v=Nh;if(i!=null&&(i.unstable_strictMode===!0&&(u=!0),i.identifierPrefix!==void 0&&(p=i.identifierPrefix),i.onRecoverableError!==void 0&&(v=i.onRecoverableError)),t=Ah(t,null,e,1,i??null,u,!1,p,v),e[Zt]=t.current,So(e),s)for(e=0;e<s.length;e++)i=s[e],u=i._getVersion,u=u(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,u]:t.mutableSourceEagerHydrationData.push(i,u);return new wa(t)},mt.render=function(e,t,i){if(!ka(t))throw Error(o(200));return Sa(null,e,t,!1,i)},mt.unmountComponentAtNode=function(e){if(!ka(e))throw Error(o(40));return e._reactRootContainer?(er(function(){Sa(null,null,e,!1,function(){e._reactRootContainer=null,e[Zt]=null})}),!0):!1},mt.unstable_batchedUpdates=Kl,mt.unstable_renderSubtreeIntoContainer=function(e,t,i,s){if(!ka(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Sa(e,t,i,!1,s)},mt.version="18.3.1-next-f1338f8080-20240426",mt}var Ih;function Sv(){if(Ih)return iu.exports;Ih=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),iu.exports=kv(),iu.exports}var Bh;function Pv(){if(Bh)return Ta;Bh=1;var n=Sv();return Ta.createRoot=n.createRoot,Ta.hydrateRoot=n.hydrateRoot,Ta}var Tv=Pv(),$o={},$h;function Cv(){if($h)return $o;$h=1,Object.defineProperty($o,"__esModule",{value:!0}),$o.parse=d,$o.serialize=m;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function d(x,k){const w=new c,S=x.length;if(S<2)return w;const T=(k==null?void 0:k.decode)||g;let O=0;do{const M=x.indexOf("=",O);if(M===-1)break;const D=x.indexOf(";",O),z=D===-1?S:D;if(M>z){O=x.lastIndexOf(";",M-1)+1;continue}const L=h(x,O,M),W=f(x,M,L),q=x.slice(L,W);if(w[q]===void 0){let H=h(x,M+1,z),X=f(x,z,H);const ue=T(x.slice(H,X));w[q]=ue}O=z+1}while(O<S);return w}function h(x,k,w){do{const S=x.charCodeAt(k);if(S!==32&&S!==9)return k}while(++k<w);return w}function f(x,k,w){for(;k>w;){const S=x.charCodeAt(--k);if(S!==32&&S!==9)return k+1}return w}function m(x,k,w){const S=(w==null?void 0:w.encode)||encodeURIComponent;if(!n.test(x))throw new TypeError(`argument name is invalid: ${x}`);const T=S(k);if(!r.test(T))throw new TypeError(`argument val is invalid: ${k}`);let O=x+"="+T;if(!w)return O;if(w.maxAge!==void 0){if(!Number.isInteger(w.maxAge))throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);O+="; Max-Age="+w.maxAge}if(w.domain){if(!o.test(w.domain))throw new TypeError(`option domain is invalid: ${w.domain}`);O+="; Domain="+w.domain}if(w.path){if(!a.test(w.path))throw new TypeError(`option path is invalid: ${w.path}`);O+="; Path="+w.path}if(w.expires){if(!y(w.expires)||!Number.isFinite(w.expires.valueOf()))throw new TypeError(`option expires is invalid: ${w.expires}`);O+="; Expires="+w.expires.toUTCString()}if(w.httpOnly&&(O+="; HttpOnly"),w.secure&&(O+="; Secure"),w.partitioned&&(O+="; Partitioned"),w.priority)switch(typeof w.priority=="string"?w.priority.toLowerCase():void 0){case"low":O+="; Priority=Low";break;case"medium":O+="; Priority=Medium";break;case"high":O+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${w.priority}`)}if(w.sameSite)switch(typeof w.sameSite=="string"?w.sameSite.toLowerCase():w.sameSite){case!0:case"strict":O+="; SameSite=Strict";break;case"lax":O+="; SameSite=Lax";break;case"none":O+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${w.sameSite}`)}return O}function g(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function y(x){return l.call(x)==="[object Date]"}return $o}Cv();/**
 * react-router v7.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Hh="popstate";function Ev(n={}){function r(a,l){let{pathname:c,search:d,hash:h}=a.location;return Nu("",{pathname:c,search:d,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function o(a,l){return typeof l=="string"?l:Jo(l)}return Av(r,o,null,n)}function Le(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function $n(n,r){if(!n){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Ov(){return Math.random().toString(36).substring(2,10)}function Uh(n,r){return{usr:n.state,key:n.key,idx:r}}function Nu(n,r,o=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof r=="string"?Zr(r):r,state:o,key:r&&r.key||a||Ov()}}function Jo({pathname:n="/",search:r="",hash:o=""}){return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Zr(n){let r={};if(n){let o=n.indexOf("#");o>=0&&(r.hash=n.substring(o),n=n.substring(0,o));let a=n.indexOf("?");a>=0&&(r.search=n.substring(a),n=n.substring(0,a)),n&&(r.pathname=n)}return r}function Av(n,r,o,a={}){let{window:l=document.defaultView,v5Compat:c=!1}=a,d=l.history,h="POP",f=null,m=g();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function g(){return(d.state||{idx:null}).idx}function y(){h="POP";let T=g(),O=T==null?null:T-m;m=T,f&&f({action:h,location:S.location,delta:O})}function x(T,O){h="PUSH";let M=Nu(S.location,T,O);m=g()+1;let D=Uh(M,m),z=S.createHref(M);try{d.pushState(D,"",z)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;l.location.assign(z)}c&&f&&f({action:h,location:S.location,delta:1})}function k(T,O){h="REPLACE";let M=Nu(S.location,T,O);m=g();let D=Uh(M,m),z=S.createHref(M);d.replaceState(D,"",z),c&&f&&f({action:h,location:S.location,delta:0})}function w(T){let O=l.location.origin!=="null"?l.location.origin:l.location.href,M=typeof T=="string"?T:Jo(T);return M=M.replace(/ $/,"%20"),Le(O,`No window.location.(origin|href) available to create URL for href: ${M}`),new URL(M,O)}let S={get action(){return h},get location(){return n(l,d)},listen(T){if(f)throw new Error("A history only accepts one active listener");return l.addEventListener(Hh,y),f=T,()=>{l.removeEventListener(Hh,y),f=null}},createHref(T){return r(l,T)},createURL:w,encodeLocation(T){let O=w(T);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:x,replace:k,go(T){return d.go(T)}};return S}function Tm(n,r,o="/"){return jv(n,r,o,!1)}function jv(n,r,o,a){let l=typeof r=="string"?Zr(r):r,c=Vn(l.pathname||"/",o);if(c==null)return null;let d=Cm(n);Nv(d);let h=null;for(let f=0;h==null&&f<d.length;++f){let m=$v(c);h=Iv(d[f],m,a)}return h}function Cm(n,r=[],o=[],a=""){let l=(c,d,h)=>{let f={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};f.relativePath.startsWith("/")&&(Le(f.relativePath.startsWith(a),`Absolute route path "${f.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(a.length));let m=dn([a,f.relativePath]),g=o.concat(f);c.children&&c.children.length>0&&(Le(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Cm(c.children,r,g,m)),!(c.path==null&&!c.index)&&r.push({path:m,score:Fv(m,c.index),routesMeta:g})};return n.forEach((c,d)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))l(c,d);else for(let f of Em(c.path))l(c,d,f)}),r}function Em(n){let r=n.split("/");if(r.length===0)return[];let[o,...a]=r,l=o.endsWith("?"),c=o.replace(/\?$/,"");if(a.length===0)return l?[c,""]:[c];let d=Em(a.join("/")),h=[];return h.push(...d.map(f=>f===""?c:[c,f].join("/"))),l&&h.push(...d),h.map(f=>n.startsWith("/")&&f===""?"/":f)}function Nv(n){n.sort((r,o)=>r.score!==o.score?o.score-r.score:Vv(r.routesMeta.map(a=>a.childrenIndex),o.routesMeta.map(a=>a.childrenIndex)))}var Rv=/^:[\w-]+$/,Mv=3,Dv=2,_v=1,Lv=10,zv=-2,qh=n=>n==="*";function Fv(n,r){let o=n.split("/"),a=o.length;return o.some(qh)&&(a+=zv),r&&(a+=Dv),o.filter(l=>!qh(l)).reduce((l,c)=>l+(Rv.test(c)?Mv:c===""?_v:Lv),a)}function Vv(n,r){return n.length===r.length&&n.slice(0,-1).every((a,l)=>a===r[l])?n[n.length-1]-r[r.length-1]:0}function Iv(n,r,o=!1){let{routesMeta:a}=n,l={},c="/",d=[];for(let h=0;h<a.length;++h){let f=a[h],m=h===a.length-1,g=c==="/"?r:r.slice(c.length)||"/",y=Fa({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},g),x=f.route;if(!y&&m&&o&&!a[a.length-1].route.index&&(y=Fa({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},g)),!y)return null;Object.assign(l,y.params),d.push({params:l,pathname:dn([c,y.pathname]),pathnameBase:Wv(dn([c,y.pathnameBase])),route:x}),y.pathnameBase!=="/"&&(c=dn([c,y.pathnameBase]))}return d}function Fa(n,r){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[o,a]=Bv(n.path,n.caseSensitive,n.end),l=r.match(o);if(!l)return null;let c=l[0],d=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:a.reduce((m,{paramName:g,isOptional:y},x)=>{if(g==="*"){let w=h[x]||"";d=c.slice(0,c.length-w.length).replace(/(.)\/+$/,"$1")}const k=h[x];return y&&!k?m[g]=void 0:m[g]=(k||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:d,pattern:n}}function Bv(n,r=!1,o=!0){$n(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],l="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,f)=>(a.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(a.push({paramName:"*"}),l+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?l+="\\/*$":n!==""&&n!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,r?void 0:"i"),a]}function $v(n){try{return n.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return $n(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),n}}function Vn(n,r){if(r==="/")return n;if(!n.toLowerCase().startsWith(r.toLowerCase()))return null;let o=r.endsWith("/")?r.length-1:r.length,a=n.charAt(o);return a&&a!=="/"?null:n.slice(o)||"/"}function Hv(n,r="/"){let{pathname:o,search:a="",hash:l=""}=typeof n=="string"?Zr(n):n;return{pathname:o?o.startsWith("/")?o:Uv(o,r):r,search:Kv(a),hash:Gv(l)}}function Uv(n,r){let o=r.replace(/\/+$/,"").split("/");return n.split("/").forEach(l=>{l===".."?o.length>1&&o.pop():l!=="."&&o.push(l)}),o.length>1?o.join("/"):"/"}function lu(n,r,o,a){return`Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function qv(n){return n.filter((r,o)=>o===0||r.route.path&&r.route.path.length>0)}function Om(n){let r=qv(n);return r.map((o,a)=>a===r.length-1?o.pathname:o.pathnameBase)}function Am(n,r,o,a=!1){let l;typeof n=="string"?l=Zr(n):(l={...n},Le(!l.pathname||!l.pathname.includes("?"),lu("?","pathname","search",l)),Le(!l.pathname||!l.pathname.includes("#"),lu("#","pathname","hash",l)),Le(!l.search||!l.search.includes("#"),lu("#","search","hash",l)));let c=n===""||l.pathname==="",d=c?"/":l.pathname,h;if(d==null)h=o;else{let y=r.length-1;if(!a&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),y-=1;l.pathname=x.join("/")}h=y>=0?r[y]:"/"}let f=Hv(l,h),m=d&&d!=="/"&&d.endsWith("/"),g=(c||d===".")&&o.endsWith("/");return!f.pathname.endsWith("/")&&(m||g)&&(f.pathname+="/"),f}var dn=n=>n.join("/").replace(/\/\/+/g,"/"),Wv=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Kv=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Gv=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Yv(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var jm=["POST","PUT","PATCH","DELETE"];new Set(jm);var Xv=["GET",...jm];new Set(Xv);var Jr=C.createContext(null);Jr.displayName="DataRouter";var Xa=C.createContext(null);Xa.displayName="DataRouterState";var Nm=C.createContext({isTransitioning:!1});Nm.displayName="ViewTransition";var Qv=C.createContext(new Map);Qv.displayName="Fetchers";var Zv=C.createContext(null);Zv.displayName="Await";var Qt=C.createContext(null);Qt.displayName="Navigation";var ai=C.createContext(null);ai.displayName="Location";var yn=C.createContext({outlet:null,matches:[],isDataRoute:!1});yn.displayName="Route";var ec=C.createContext(null);ec.displayName="RouteError";function Jv(n,{relative:r}={}){Le(si(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:a}=C.useContext(Qt),{hash:l,pathname:c,search:d}=li(n,{relative:r}),h=c;return o!=="/"&&(h=c==="/"?o:dn([o,c])),a.createHref({pathname:h,search:d,hash:l})}function si(){return C.useContext(ai)!=null}function cr(){return Le(si(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(ai).location}var Rm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Mm(n){C.useContext(Qt).static||C.useLayoutEffect(n)}function Hn(){let{isDataRoute:n}=C.useContext(yn);return n?f1():e1()}function e1(){Le(si(),"useNavigate() may be used only in the context of a <Router> component.");let n=C.useContext(Jr),{basename:r,navigator:o}=C.useContext(Qt),{matches:a}=C.useContext(yn),{pathname:l}=cr(),c=JSON.stringify(Om(a)),d=C.useRef(!1);return Mm(()=>{d.current=!0}),C.useCallback((f,m={})=>{if($n(d.current,Rm),!d.current)return;if(typeof f=="number"){o.go(f);return}let g=Am(f,JSON.parse(c),l,m.relative==="path");n==null&&r!=="/"&&(g.pathname=g.pathname==="/"?r:dn([r,g.pathname])),(m.replace?o.replace:o.push)(g,m.state,m)},[r,o,c,l,n])}C.createContext(null);function li(n,{relative:r}={}){let{matches:o}=C.useContext(yn),{pathname:a}=cr(),l=JSON.stringify(Om(o));return C.useMemo(()=>Am(n,JSON.parse(l),a,r==="path"),[n,l,a,r])}function t1(n,r){return Dm(n,r)}function Dm(n,r,o,a){var S;Le(si(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=C.useContext(Qt),{matches:c}=C.useContext(yn),d=c[c.length-1],h=d?d.params:{};d&&d.pathname;let f=d?d.pathnameBase:"/";d&&d.route;let m=cr(),g;if(r){let T=typeof r=="string"?Zr(r):r;Le(f==="/"||((S=T.pathname)==null?void 0:S.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${T.pathname}" was given in the \`location\` prop.`),g=T}else g=m;let y=g.pathname||"/",x=y;if(f!=="/"){let T=f.replace(/^\//,"").split("/");x="/"+y.replace(/^\//,"").split("/").slice(T.length).join("/")}let k=Tm(n,{pathname:x}),w=a1(k&&k.map(T=>Object.assign({},T,{params:Object.assign({},h,T.params),pathname:dn([f,l.encodeLocation?l.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?f:dn([f,l.encodeLocation?l.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),c,o,a);return r&&w?C.createElement(ai.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...g},navigationType:"POP"}},w):w}function n1(){let n=d1(),r=Yv(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),o=n instanceof Error?n.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},r),o?C.createElement("pre",{style:l},o):null,null)}var r1=C.createElement(n1,null),o1=class extends C.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,r){return r.location!==n.location||r.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:r.error,location:r.location,revalidation:n.revalidation||r.revalidation}}componentDidCatch(n,r){console.error("React Router caught the following error during render",n,r)}render(){return this.state.error!==void 0?C.createElement(yn.Provider,{value:this.props.routeContext},C.createElement(ec.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function i1({routeContext:n,match:r,children:o}){let a=C.useContext(Jr);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),C.createElement(yn.Provider,{value:n},o)}function a1(n,r=[],o=null,a=null){if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(r.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let l=n,c=o==null?void 0:o.errors;if(c!=null){let f=l.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);Le(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,f+1))}let d=!1,h=-1;if(o)for(let f=0;f<l.length;f++){let m=l[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=f),m.route.id){let{loaderData:g,errors:y}=o,x=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!y||y[m.route.id]===void 0);if(m.route.lazy||x){d=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((f,m,g)=>{let y,x=!1,k=null,w=null;o&&(y=c&&m.route.id?c[m.route.id]:void 0,k=m.route.errorElement||r1,d&&(h<0&&g===0?(h1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,w=null):h===g&&(x=!0,w=m.route.hydrateFallbackElement||null)));let S=r.concat(l.slice(0,g+1)),T=()=>{let O;return y?O=k:x?O=w:m.route.Component?O=C.createElement(m.route.Component,null):m.route.element?O=m.route.element:O=f,C.createElement(i1,{match:m,routeContext:{outlet:f,matches:S,isDataRoute:o!=null},children:O})};return o&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?C.createElement(o1,{location:o.location,revalidation:o.revalidation,component:k,error:y,children:T(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):T()},null)}function tc(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function s1(n){let r=C.useContext(Jr);return Le(r,tc(n)),r}function l1(n){let r=C.useContext(Xa);return Le(r,tc(n)),r}function u1(n){let r=C.useContext(yn);return Le(r,tc(n)),r}function nc(n){let r=u1(n),o=r.matches[r.matches.length-1];return Le(o.route.id,`${n} can only be used on routes that contain a unique "id"`),o.route.id}function c1(){return nc("useRouteId")}function d1(){var a;let n=C.useContext(ec),r=l1("useRouteError"),o=nc("useRouteError");return n!==void 0?n:(a=r.errors)==null?void 0:a[o]}function f1(){let{router:n}=s1("useNavigate"),r=nc("useNavigate"),o=C.useRef(!1);return Mm(()=>{o.current=!0}),C.useCallback(async(l,c={})=>{$n(o.current,Rm),o.current&&(typeof l=="number"?n.navigate(l):await n.navigate(l,{fromRouteId:r,...c}))},[n,r])}var Wh={};function h1(n,r,o){Wh[n]||(Wh[n]=!0,$n(!1,o))}C.memo(p1);function p1({routes:n,future:r,state:o}){return Dm(n,void 0,o,r)}function un(n){Le(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function m1({basename:n="/",children:r=null,location:o,navigationType:a="POP",navigator:l,static:c=!1}){Le(!si(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),h=C.useMemo(()=>({basename:d,navigator:l,static:c,future:{}}),[d,l,c]);typeof o=="string"&&(o=Zr(o));let{pathname:f="/",search:m="",hash:g="",state:y=null,key:x="default"}=o,k=C.useMemo(()=>{let w=Vn(f,d);return w==null?null:{location:{pathname:w,search:m,hash:g,state:y,key:x},navigationType:a}},[d,f,m,g,y,x,a]);return $n(k!=null,`<Router basename="${d}"> is not able to match the URL "${f}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:C.createElement(Qt.Provider,{value:h},C.createElement(ai.Provider,{children:r,value:k}))}function g1({children:n,location:r}){return t1(Ru(n),r)}function Ru(n,r=[]){let o=[];return C.Children.forEach(n,(a,l)=>{if(!C.isValidElement(a))return;let c=[...r,l];if(a.type===C.Fragment){o.push.apply(o,Ru(a.props.children,c));return}Le(a.type===un,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Le(!a.props.index||!a.props.children,"An index route cannot have child routes.");let d={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=Ru(a.props.children,c)),o.push(d)}),o}var Ma="get",Da="application/x-www-form-urlencoded";function Qa(n){return n!=null&&typeof n.tagName=="string"}function y1(n){return Qa(n)&&n.tagName.toLowerCase()==="button"}function v1(n){return Qa(n)&&n.tagName.toLowerCase()==="form"}function x1(n){return Qa(n)&&n.tagName.toLowerCase()==="input"}function b1(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function w1(n,r){return n.button===0&&(!r||r==="_self")&&!b1(n)}var Ca=null;function k1(){if(Ca===null)try{new FormData(document.createElement("form"),0),Ca=!1}catch{Ca=!0}return Ca}var S1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function uu(n){return n!=null&&!S1.has(n)?($n(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Da}"`),null):n}function P1(n,r){let o,a,l,c,d;if(v1(n)){let h=n.getAttribute("action");a=h?Vn(h,r):null,o=n.getAttribute("method")||Ma,l=uu(n.getAttribute("enctype"))||Da,c=new FormData(n)}else if(y1(n)||x1(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=n.getAttribute("formaction")||h.getAttribute("action");if(a=f?Vn(f,r):null,o=n.getAttribute("formmethod")||h.getAttribute("method")||Ma,l=uu(n.getAttribute("formenctype"))||uu(h.getAttribute("enctype"))||Da,c=new FormData(h,n),!k1()){let{name:m,type:g,value:y}=n;if(g==="image"){let x=m?`${m}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else m&&c.append(m,y)}}else{if(Qa(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Ma,a=null,l=Da,d=n}return c&&l==="text/plain"&&(d=c,c=void 0),{action:a,method:o.toLowerCase(),encType:l,formData:c,body:d}}function rc(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}async function T1(n,r){if(n.id in r)return r[n.id];try{let o=await import(n.module);return r[n.id]=o,o}catch(o){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function C1(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function E1(n,r,o){let a=await Promise.all(n.map(async l=>{let c=r.routes[l.route.id];if(c){let d=await T1(c,o);return d.links?d.links():[]}return[]}));return N1(a.flat(1).filter(C1).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Kh(n,r,o,a,l,c){let d=(f,m)=>o[m]?f.route.id!==o[m].route.id:!0,h=(f,m)=>{var g;return o[m].pathname!==f.pathname||((g=o[m].route.path)==null?void 0:g.endsWith("*"))&&o[m].params["*"]!==f.params["*"]};return c==="assets"?r.filter((f,m)=>d(f,m)||h(f,m)):c==="data"?r.filter((f,m)=>{var y;let g=a.routes[f.route.id];if(!g||!g.hasLoader)return!1;if(d(f,m)||h(f,m))return!0;if(f.route.shouldRevalidate){let x=f.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((y=o[0])==null?void 0:y.params)||{},nextUrl:new URL(n,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function O1(n,r){return A1(n.map(o=>{let a=r.routes[o.route.id];if(!a)return[];let l=[a.module];return a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function A1(n){return[...new Set(n)]}function j1(n){let r={},o=Object.keys(n).sort();for(let a of o)r[a]=n[a];return r}function N1(n,r){let o=new Set;return new Set(r),n.reduce((a,l)=>{let c=JSON.stringify(j1(l));return o.has(c)||(o.add(c),a.push({key:c,link:l})),a},[])}function R1(n){let r=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r.pathname==="/"?r.pathname="_root.data":r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function M1(){let n=C.useContext(Jr);return rc(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function D1(){let n=C.useContext(Xa);return rc(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var oc=C.createContext(void 0);oc.displayName="FrameworkContext";function _m(){let n=C.useContext(oc);return rc(n,"You must render this element inside a <HydratedRouter> element"),n}function _1(n,r){let o=C.useContext(oc),[a,l]=C.useState(!1),[c,d]=C.useState(!1),{onFocus:h,onBlur:f,onMouseEnter:m,onMouseLeave:g,onTouchStart:y}=r,x=C.useRef(null);C.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let S=O=>{O.forEach(M=>{d(M.isIntersecting)})},T=new IntersectionObserver(S,{threshold:.5});return x.current&&T.observe(x.current),()=>{T.disconnect()}}},[n]),C.useEffect(()=>{if(a){let S=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(S)}}},[a]);let k=()=>{l(!0)},w=()=>{l(!1),d(!1)};return o?n!=="intent"?[c,x,{}]:[c,x,{onFocus:Ho(h,k),onBlur:Ho(f,w),onMouseEnter:Ho(m,k),onMouseLeave:Ho(g,w),onTouchStart:Ho(y,k)}]:[!1,x,{}]}function Ho(n,r){return o=>{n&&n(o),o.defaultPrevented||r(o)}}function L1({page:n,...r}){let{router:o}=M1(),a=C.useMemo(()=>Tm(o.routes,n,o.basename),[o.routes,n,o.basename]);return a?C.createElement(F1,{page:n,matches:a,...r}):(console.warn(`Tried to prefetch ${n} but no routes matched.`),null)}function z1(n){let{manifest:r,routeModules:o}=_m(),[a,l]=C.useState([]);return C.useEffect(()=>{let c=!1;return E1(n,r,o).then(d=>{c||l(d)}),()=>{c=!0}},[n,r,o]),a}function F1({page:n,matches:r,...o}){let a=cr(),{manifest:l,routeModules:c}=_m(),{loaderData:d,matches:h}=D1(),f=C.useMemo(()=>Kh(n,r,h,l,a,"data"),[n,r,h,l,a]),m=C.useMemo(()=>Kh(n,r,h,l,a,"assets"),[n,r,h,l,a]),g=C.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let k=new Set,w=!1;if(r.forEach(T=>{var M;let O=l.routes[T.route.id];!O||!O.hasLoader||(!f.some(D=>D.route.id===T.route.id)&&T.route.id in d&&((M=c[T.route.id])!=null&&M.shouldRevalidate)||O.hasClientLoader?w=!0:k.add(T.route.id))}),k.size===0)return[];let S=R1(n);return w&&k.size>0&&S.searchParams.set("_routes",r.filter(T=>k.has(T.route.id)).map(T=>T.route.id).join(",")),[S.pathname+S.search]},[d,a,l,f,r,n,c]),y=C.useMemo(()=>O1(m,l),[m,l]),x=z1(m);return C.createElement(C.Fragment,null,g.map(k=>C.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...o})),y.map(k=>C.createElement("link",{key:k,rel:"modulepreload",href:k,...o})),x.map(({key:k,link:w})=>C.createElement("link",{key:k,...w})))}function V1(...n){return r=>{n.forEach(o=>{typeof o=="function"?o(r):o!=null&&(o.current=r)})}}var Lm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Lm&&(window.__reactRouterVersion="7.0.1")}catch{}function I1({basename:n,children:r,window:o}){let a=C.useRef();a.current==null&&(a.current=Ev({window:o,v5Compat:!0}));let l=a.current,[c,d]=C.useState({action:l.action,location:l.location}),h=C.useCallback(f=>{C.startTransition(()=>d(f))},[d]);return C.useLayoutEffect(()=>l.listen(h),[l,h]),C.createElement(m1,{basename:n,children:r,location:c.location,navigationType:c.action,navigator:l})}var zm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ui=C.forwardRef(function({onClick:r,discover:o="render",prefetch:a="none",relative:l,reloadDocument:c,replace:d,state:h,target:f,to:m,preventScrollReset:g,viewTransition:y,...x},k){let{basename:w}=C.useContext(Qt),S=typeof m=="string"&&zm.test(m),T,O=!1;if(typeof m=="string"&&S&&(T=m,Lm))try{let X=new URL(window.location.href),ue=m.startsWith("//")?new URL(X.protocol+m):new URL(m),Re=Vn(ue.pathname,w);ue.origin===X.origin&&Re!=null?m=Re+ue.search+ue.hash:O=!0}catch{$n(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=Jv(m,{relative:l}),[D,z,L]=_1(a,x),W=H1(m,{replace:d,state:h,target:f,preventScrollReset:g,relative:l,viewTransition:y});function q(X){r&&r(X),X.defaultPrevented||W(X)}let H=C.createElement("a",{...x,...L,href:T||M,onClick:O||c?r:q,ref:V1(k,z),target:f,"data-discover":!S&&o==="render"?"true":void 0});return D&&!S?C.createElement(C.Fragment,null,H,C.createElement(L1,{page:M})):H});ui.displayName="Link";var It=C.forwardRef(function({"aria-current":r="page",caseSensitive:o=!1,className:a="",end:l=!1,style:c,to:d,viewTransition:h,children:f,...m},g){let y=li(d,{relative:m.relative}),x=cr(),k=C.useContext(Xa),{navigator:w,basename:S}=C.useContext(Qt),T=k!=null&&G1(y)&&h===!0,O=w.encodeLocation?w.encodeLocation(y).pathname:y.pathname,M=x.pathname,D=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;o||(M=M.toLowerCase(),D=D?D.toLowerCase():null,O=O.toLowerCase()),D&&S&&(D=Vn(D,S)||D);const z=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let L=M===O||!l&&M.startsWith(O)&&M.charAt(z)==="/",W=D!=null&&(D===O||!l&&D.startsWith(O)&&D.charAt(O.length)==="/"),q={isActive:L,isPending:W,isTransitioning:T},H=L?r:void 0,X;typeof a=="function"?X=a(q):X=[a,L?"active":null,W?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let ue=typeof c=="function"?c(q):c;return C.createElement(ui,{...m,"aria-current":H,className:X,ref:g,style:ue,to:d,viewTransition:h},typeof f=="function"?f(q):f)});It.displayName="NavLink";var B1=C.forwardRef(({discover:n="render",fetcherKey:r,navigate:o,reloadDocument:a,replace:l,state:c,method:d=Ma,action:h,onSubmit:f,relative:m,preventScrollReset:g,viewTransition:y,...x},k)=>{let w=W1(),S=K1(h,{relative:m}),T=d.toLowerCase()==="get"?"get":"post",O=typeof h=="string"&&zm.test(h),M=D=>{if(f&&f(D),D.defaultPrevented)return;D.preventDefault();let z=D.nativeEvent.submitter,L=(z==null?void 0:z.getAttribute("formmethod"))||d;w(z||D.currentTarget,{fetcherKey:r,method:L,navigate:o,replace:l,state:c,relative:m,preventScrollReset:g,viewTransition:y})};return C.createElement("form",{ref:k,method:T,action:S,onSubmit:a?f:M,...x,"data-discover":!O&&n==="render"?"true":void 0})});B1.displayName="Form";function $1(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fm(n){let r=C.useContext(Jr);return Le(r,$1(n)),r}function H1(n,{target:r,replace:o,state:a,preventScrollReset:l,relative:c,viewTransition:d}={}){let h=Hn(),f=cr(),m=li(n,{relative:c});return C.useCallback(g=>{if(w1(g,r)){g.preventDefault();let y=o!==void 0?o:Jo(f)===Jo(m);h(n,{replace:y,state:a,preventScrollReset:l,relative:c,viewTransition:d})}},[f,h,m,o,a,r,n,l,c,d])}var U1=0,q1=()=>`__${String(++U1)}__`;function W1(){let{router:n}=Fm("useSubmit"),{basename:r}=C.useContext(Qt),o=c1();return C.useCallback(async(a,l={})=>{let{action:c,method:d,encType:h,formData:f,body:m}=P1(a,r);if(l.navigate===!1){let g=l.fetcherKey||q1();await n.fetch(g,o,l.action||c,{preventScrollReset:l.preventScrollReset,formData:f,body:m,formMethod:l.method||d,formEncType:l.encType||h,flushSync:l.flushSync})}else await n.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:f,body:m,formMethod:l.method||d,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:o,flushSync:l.flushSync,viewTransition:l.viewTransition})},[n,r,o])}function K1(n,{relative:r}={}){let{basename:o}=C.useContext(Qt),a=C.useContext(yn);Le(a,"useFormAction must be used inside a RouteContext");let[l]=a.matches.slice(-1),c={...li(n||".",{relative:r})},d=cr();if(n==null){c.search=d.search;let h=new URLSearchParams(c.search),f=h.getAll("index");if(f.some(g=>g==="")){h.delete("index"),f.filter(y=>y).forEach(y=>h.append("index",y));let g=h.toString();c.search=g?`?${g}`:""}}return(!n||n===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(c.pathname=c.pathname==="/"?o:dn([o,c.pathname])),Jo(c)}function G1(n,r={}){let o=C.useContext(Nm);Le(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Fm("useViewTransitionState"),l=li(n,{relative:r.relative});if(!o.isTransitioning)return!1;let c=Vn(o.currentLocation.pathname,a)||o.currentLocation.pathname,d=Vn(o.nextLocation.pathname,a)||o.nextLocation.pathname;return Fa(l.pathname,d)!=null||Fa(l.pathname,c)!=null}new TextEncoder;function Y1(n){if(typeof Proxy>"u")return n;const r=new Map,o=(...a)=>n(...a);return new Proxy(o,{get:(a,l)=>l==="create"?n:(r.has(l)||r.set(l,n(l)),r.get(l))})}function Za(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Mu=n=>Array.isArray(n);function Vm(n,r){if(!Array.isArray(r))return!1;const o=r.length;if(o!==n.length)return!1;for(let a=0;a<o;a++)if(r[a]!==n[a])return!1;return!0}function ei(n){return typeof n=="string"||Array.isArray(n)}function Gh(n){const r=[{},{}];return n==null||n.values.forEach((o,a)=>{r[0][a]=o.get(),r[1][a]=o.getVelocity()}),r}function ic(n,r,o,a){if(typeof r=="function"){const[l,c]=Gh(a);r=r(o!==void 0?o:n.custom,l,c)}if(typeof r=="string"&&(r=n.variants&&n.variants[r]),typeof r=="function"){const[l,c]=Gh(a);r=r(o!==void 0?o:n.custom,l,c)}return r}function Ja(n,r,o){const a=n.getProps();return ic(a,r,o!==void 0?o:a.custom,n)}const ac=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],sc=["initial",...ac],ci=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],dr=new Set(ci),fn=n=>n*1e3,hn=n=>n/1e3,X1={type:"spring",stiffness:500,damping:25,restSpeed:10},Q1=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Z1={type:"keyframes",duration:.8},J1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ex=(n,{keyframes:r})=>r.length>2?Z1:dr.has(n)?n.startsWith("scale")?Q1(r[1]):X1:J1;function lc(n,r){return n?n[r]||n.default||n:void 0}const tx={skipAnimations:!1,useManualTiming:!1},nx=n=>n!==null;function es(n,{repeat:r,repeatType:o="loop"},a){const l=n.filter(nx),c=r&&o!=="loop"&&r%2===1?0:l.length-1;return!c||a===void 0?l[c]:a}const it=n=>n;function rx(n){let r=new Set,o=new Set,a=!1,l=!1;const c=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function h(m){c.has(m)&&(f.schedule(m),n()),m(d)}const f={schedule:(m,g=!1,y=!1)=>{const k=y&&a?r:o;return g&&c.add(m),k.has(m)||k.add(m),m},cancel:m=>{o.delete(m),c.delete(m)},process:m=>{if(d=m,a){l=!0;return}a=!0,[r,o]=[o,r],o.clear(),r.forEach(h),a=!1,l&&(l=!1,f.process(m))}};return f}const Ea=["read","resolveKeyframes","update","preRender","render","postRender"],ox=40;function Im(n,r){let o=!1,a=!0;const l={delta:0,timestamp:0,isProcessing:!1},c=()=>o=!0,d=Ea.reduce((O,M)=>(O[M]=rx(c),O),{}),{read:h,resolveKeyframes:f,update:m,preRender:g,render:y,postRender:x}=d,k=()=>{const O=performance.now();o=!1,l.delta=a?1e3/60:Math.max(Math.min(O-l.timestamp,ox),1),l.timestamp=O,l.isProcessing=!0,h.process(l),f.process(l),m.process(l),g.process(l),y.process(l),x.process(l),l.isProcessing=!1,o&&r&&(a=!1,n(k))},w=()=>{o=!0,a=!0,l.isProcessing||n(k)};return{schedule:Ea.reduce((O,M)=>{const D=d[M];return O[M]=(z,L=!1,W=!1)=>(o||w(),D.schedule(z,L,W)),O},{}),cancel:O=>{for(let M=0;M<Ea.length;M++)d[Ea[M]].cancel(O)},state:l,steps:d}}const{schedule:Se,cancel:In,state:Ze,steps:cu}=Im(typeof requestAnimationFrame<"u"?requestAnimationFrame:it,!0),Bm=(n,r,o)=>(((1-3*o+3*r)*n+(3*o-6*r))*n+3*r)*n,ix=1e-7,ax=12;function sx(n,r,o,a,l){let c,d,h=0;do d=r+(o-r)/2,c=Bm(d,a,l)-n,c>0?o=d:r=d;while(Math.abs(c)>ix&&++h<ax);return d}function di(n,r,o,a){if(n===r&&o===a)return it;const l=c=>sx(c,0,1,n,o);return c=>c===0||c===1?c:Bm(l(c),r,a)}const $m=n=>r=>r<=.5?n(2*r)/2:(2-n(2*(1-r)))/2,Hm=n=>r=>1-n(1-r),Um=di(.33,1.53,.69,.99),uc=Hm(Um),qm=$m(uc),Wm=n=>(n*=2)<1?.5*uc(n):.5*(2-Math.pow(2,-10*(n-1))),cc=n=>1-Math.sin(Math.acos(n)),Km=Hm(cc),Gm=$m(cc),Ym=n=>/^0[^.\s]+$/u.test(n);function lx(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Ym(n):!0}let Du=it;const Xm=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),Qm=n=>r=>typeof r=="string"&&r.startsWith(n),Zm=Qm("--"),ux=Qm("var(--"),dc=n=>ux(n)?cx.test(n.split("/*")[0].trim()):!1,cx=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,dx=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function fx(n){const r=dx.exec(n);if(!r)return[,];const[,o,a,l]=r;return[`--${o??a}`,l]}function Jm(n,r,o=1){const[a,l]=fx(n);if(!a)return;const c=window.getComputedStyle(r).getPropertyValue(a);if(c){const d=c.trim();return Xm(d)?parseFloat(d):d}return dc(l)?Jm(l,r,o+1):l}const gn=(n,r,o)=>o>r?r:o<n?n:o,eo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ti={...eo,transform:n=>gn(0,1,n)},Oa={...eo,default:1},fi=n=>({test:r=>typeof r=="string"&&r.endsWith(n)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${n}`}),Fn=fi("deg"),Yt=fi("%"),ie=fi("px"),hx=fi("vh"),px=fi("vw"),Yh={...Yt,parse:n=>Yt.parse(n)/100,transform:n=>Yt.transform(n*100)},mx=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Xh=n=>n===eo||n===ie,Qh=(n,r)=>parseFloat(n.split(", ")[r]),Zh=(n,r)=>(o,{transform:a})=>{if(a==="none"||!a)return 0;const l=a.match(/^matrix3d\((.+)\)$/u);if(l)return Qh(l[1],r);{const c=a.match(/^matrix\((.+)\)$/u);return c?Qh(c[1],n):0}},gx=new Set(["x","y","z"]),yx=ci.filter(n=>!gx.has(n));function vx(n){const r=[];return yx.forEach(o=>{const a=n.getValue(o);a!==void 0&&(r.push([o,a.get()]),a.set(o.startsWith("scale")?1:0))}),r}const Yr={width:({x:n},{paddingLeft:r="0",paddingRight:o="0"})=>n.max-n.min-parseFloat(r)-parseFloat(o),height:({y:n},{paddingTop:r="0",paddingBottom:o="0"})=>n.max-n.min-parseFloat(r)-parseFloat(o),top:(n,{top:r})=>parseFloat(r),left:(n,{left:r})=>parseFloat(r),bottom:({y:n},{top:r})=>parseFloat(r)+(n.max-n.min),right:({x:n},{left:r})=>parseFloat(r)+(n.max-n.min),x:Zh(4,13),y:Zh(5,14)};Yr.translateX=Yr.x;Yr.translateY=Yr.y;const e0=n=>r=>r.test(n),xx={test:n=>n==="auto",parse:n=>n},t0=[eo,ie,Yt,Fn,px,hx,xx],Jh=n=>t0.find(e0(n)),lr=new Set;let _u=!1,Lu=!1;function n0(){if(Lu){const n=Array.from(lr).filter(a=>a.needsMeasurement),r=new Set(n.map(a=>a.element)),o=new Map;r.forEach(a=>{const l=vx(a);l.length&&(o.set(a,l),a.render())}),n.forEach(a=>a.measureInitialState()),r.forEach(a=>{a.render();const l=o.get(a);l&&l.forEach(([c,d])=>{var h;(h=a.getValue(c))===null||h===void 0||h.set(d)})}),n.forEach(a=>a.measureEndState()),n.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Lu=!1,_u=!1,lr.forEach(n=>n.complete()),lr.clear()}function r0(){lr.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Lu=!0)})}function bx(){r0(),n0()}class fc{constructor(r,o,a,l,c,d=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...r],this.onComplete=o,this.name=a,this.motionValue=l,this.element=c,this.isAsync=d}scheduleResolve(){this.isScheduled=!0,this.isAsync?(lr.add(this),_u||(_u=!0,Se.read(r0),Se.resolveKeyframes(n0))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:o,element:a,motionValue:l}=this;for(let c=0;c<r.length;c++)if(r[c]===null)if(c===0){const d=l==null?void 0:l.get(),h=r[r.length-1];if(d!==void 0)r[0]=d;else if(a&&o){const f=a.readValue(o,h);f!=null&&(r[0]=f)}r[0]===void 0&&(r[0]=h),l&&d===void 0&&l.set(r[0])}else r[c]=r[c-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),lr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,lr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Xo=n=>Math.round(n*1e5)/1e5,hc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function wx(n){return n==null}const kx=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,pc=(n,r)=>o=>!!(typeof o=="string"&&kx.test(o)&&o.startsWith(n)||r&&!wx(o)&&Object.prototype.hasOwnProperty.call(o,r)),o0=(n,r,o)=>a=>{if(typeof a!="string")return a;const[l,c,d,h]=a.match(hc);return{[n]:parseFloat(l),[r]:parseFloat(c),[o]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},Sx=n=>gn(0,255,n),du={...eo,transform:n=>Math.round(Sx(n))},sr={test:pc("rgb","red"),parse:o0("red","green","blue"),transform:({red:n,green:r,blue:o,alpha:a=1})=>"rgba("+du.transform(n)+", "+du.transform(r)+", "+du.transform(o)+", "+Xo(ti.transform(a))+")"};function Px(n){let r="",o="",a="",l="";return n.length>5?(r=n.substring(1,3),o=n.substring(3,5),a=n.substring(5,7),l=n.substring(7,9)):(r=n.substring(1,2),o=n.substring(2,3),a=n.substring(3,4),l=n.substring(4,5),r+=r,o+=o,a+=a,l+=l),{red:parseInt(r,16),green:parseInt(o,16),blue:parseInt(a,16),alpha:l?parseInt(l,16)/255:1}}const zu={test:pc("#"),parse:Px,transform:sr.transform},Hr={test:pc("hsl","hue"),parse:o0("hue","saturation","lightness"),transform:({hue:n,saturation:r,lightness:o,alpha:a=1})=>"hsla("+Math.round(n)+", "+Yt.transform(Xo(r))+", "+Yt.transform(Xo(o))+", "+Xo(ti.transform(a))+")"},rt={test:n=>sr.test(n)||zu.test(n)||Hr.test(n),parse:n=>sr.test(n)?sr.parse(n):Hr.test(n)?Hr.parse(n):zu.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?sr.transform(n):Hr.transform(n)},Tx=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Cx(n){var r,o;return isNaN(n)&&typeof n=="string"&&(((r=n.match(hc))===null||r===void 0?void 0:r.length)||0)+(((o=n.match(Tx))===null||o===void 0?void 0:o.length)||0)>0}const i0="number",a0="color",Ex="var",Ox="var(",ep="${}",Ax=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ni(n){const r=n.toString(),o=[],a={color:[],number:[],var:[]},l=[];let c=0;const h=r.replace(Ax,f=>(rt.test(f)?(a.color.push(c),l.push(a0),o.push(rt.parse(f))):f.startsWith(Ox)?(a.var.push(c),l.push(Ex),o.push(f)):(a.number.push(c),l.push(i0),o.push(parseFloat(f))),++c,ep)).split(ep);return{values:o,split:h,indexes:a,types:l}}function s0(n){return ni(n).values}function l0(n){const{split:r,types:o}=ni(n),a=r.length;return l=>{let c="";for(let d=0;d<a;d++)if(c+=r[d],l[d]!==void 0){const h=o[d];h===i0?c+=Xo(l[d]):h===a0?c+=rt.transform(l[d]):c+=l[d]}return c}}const jx=n=>typeof n=="number"?0:n;function Nx(n){const r=s0(n);return l0(n)(r.map(jx))}const Bn={test:Cx,parse:s0,createTransformer:l0,getAnimatableNone:Nx},Rx=new Set(["brightness","contrast","saturate","opacity"]);function Mx(n){const[r,o]=n.slice(0,-1).split("(");if(r==="drop-shadow")return n;const[a]=o.match(hc)||[];if(!a)return n;const l=o.replace(a,"");let c=Rx.has(r)?1:0;return a!==o&&(c*=100),r+"("+c+l+")"}const Dx=/\b([a-z-]*)\(.*?\)/gu,Fu={...Bn,getAnimatableNone:n=>{const r=n.match(Dx);return r?r.map(Mx).join(" "):n}},_x={borderWidth:ie,borderTopWidth:ie,borderRightWidth:ie,borderBottomWidth:ie,borderLeftWidth:ie,borderRadius:ie,radius:ie,borderTopLeftRadius:ie,borderTopRightRadius:ie,borderBottomRightRadius:ie,borderBottomLeftRadius:ie,width:ie,maxWidth:ie,height:ie,maxHeight:ie,top:ie,right:ie,bottom:ie,left:ie,padding:ie,paddingTop:ie,paddingRight:ie,paddingBottom:ie,paddingLeft:ie,margin:ie,marginTop:ie,marginRight:ie,marginBottom:ie,marginLeft:ie,backgroundPositionX:ie,backgroundPositionY:ie},Lx={rotate:Fn,rotateX:Fn,rotateY:Fn,rotateZ:Fn,scale:Oa,scaleX:Oa,scaleY:Oa,scaleZ:Oa,skew:Fn,skewX:Fn,skewY:Fn,distance:ie,translateX:ie,translateY:ie,translateZ:ie,x:ie,y:ie,z:ie,perspective:ie,transformPerspective:ie,opacity:ti,originX:Yh,originY:Yh,originZ:ie},tp={...eo,transform:Math.round},mc={..._x,...Lx,zIndex:tp,size:ie,fillOpacity:ti,strokeOpacity:ti,numOctaves:tp},zx={...mc,color:rt,backgroundColor:rt,outlineColor:rt,fill:rt,stroke:rt,borderColor:rt,borderTopColor:rt,borderRightColor:rt,borderBottomColor:rt,borderLeftColor:rt,filter:Fu,WebkitFilter:Fu},gc=n=>zx[n];function u0(n,r){let o=gc(n);return o!==Fu&&(o=Bn),o.getAnimatableNone?o.getAnimatableNone(r):void 0}const Fx=new Set(["auto","none","0"]);function Vx(n,r,o){let a=0,l;for(;a<n.length&&!l;){const c=n[a];typeof c=="string"&&!Fx.has(c)&&ni(c).values.length&&(l=n[a]),a++}if(l&&o)for(const c of r)n[c]=u0(o,l)}class c0 extends fc{constructor(r,o,a,l,c){super(r,o,a,l,c,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:o,name:a}=this;if(!o||!o.current)return;super.readKeyframes();for(let f=0;f<r.length;f++){let m=r[f];if(typeof m=="string"&&(m=m.trim(),dc(m))){const g=Jm(m,o.current);g!==void 0&&(r[f]=g),f===r.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!mx.has(a)||r.length!==2)return;const[l,c]=r,d=Jh(l),h=Jh(c);if(d!==h)if(Xh(d)&&Xh(h))for(let f=0;f<r.length;f++){const m=r[f];typeof m=="string"&&(r[f]=parseFloat(m))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:o}=this,a=[];for(let l=0;l<r.length;l++)lx(r[l])&&a.push(l);a.length&&Vx(r,a,o)}measureInitialState(){const{element:r,unresolvedKeyframes:o,name:a}=this;if(!r||!r.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Yr[a](r.measureViewportBox(),window.getComputedStyle(r.current)),o[0]=this.measuredOrigin;const l=o[o.length-1];l!==void 0&&r.getValue(a,l).jump(l,!1)}measureEndState(){var r;const{element:o,name:a,unresolvedKeyframes:l}=this;if(!o||!o.current)return;const c=o.getValue(a);c&&c.jump(this.measuredOrigin,!1);const d=l.length-1,h=l[d];l[d]=Yr[a](o.measureViewportBox(),window.getComputedStyle(o.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),!((r=this.removedTransforms)===null||r===void 0)&&r.length&&this.removedTransforms.forEach(([f,m])=>{o.getValue(f).set(m)}),this.resolveNoneKeyframes()}}function yc(n){return typeof n=="function"}let _a;function Ix(){_a=void 0}const Xt={now:()=>(_a===void 0&&Xt.set(Ze.isProcessing||tx.useManualTiming?Ze.timestamp:performance.now()),_a),set:n=>{_a=n,queueMicrotask(Ix)}},np=(n,r)=>r==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Bn.test(n)||n==="0")&&!n.startsWith("url("));function Bx(n){const r=n[0];if(n.length===1)return!0;for(let o=0;o<n.length;o++)if(n[o]!==r)return!0}function $x(n,r,o,a){const l=n[0];if(l===null)return!1;if(r==="display"||r==="visibility")return!0;const c=n[n.length-1],d=np(l,r),h=np(c,r);return!d||!h?!1:Bx(n)||(o==="spring"||yc(o))&&a}const Hx=40;class d0{constructor({autoplay:r=!0,delay:o=0,type:a="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:d="loop",...h}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Xt.now(),this.options={autoplay:r,delay:o,type:a,repeat:l,repeatDelay:c,repeatType:d,...h},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Hx?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&bx(),this._resolved}onKeyframesResolved(r,o){this.resolvedAt=Xt.now(),this.hasAttemptedResolve=!0;const{name:a,type:l,velocity:c,delay:d,onComplete:h,onUpdate:f,isGenerator:m}=this.options;if(!m&&!$x(r,a,l,c))if(d)this.options.duration=0;else{f==null||f(es(r,this.options,o)),h==null||h(),this.resolveFinishedPromise();return}const g=this.initPlayback(r,o);g!==!1&&(this._resolved={keyframes:r,finalKeyframe:o,...g},this.onPostResolved())}onPostResolved(){}then(r,o){return this.currentFinishedPromise.then(r,o)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(r=>{this.resolveFinishedPromise=r})}}const Xr=(n,r,o)=>{const a=r-n;return a===0?1:(o-n)/a},f0=(n,r,o=10)=>{let a="";const l=Math.max(Math.round(r/o),2);for(let c=0;c<l;c++)a+=n(Xr(0,l-1,c))+", ";return`linear(${a.substring(0,a.length-2)})`};function h0(n,r){return r?n*(1e3/r):0}const Ux=5;function p0(n,r,o){const a=Math.max(r-Ux,0);return h0(o-n(a),r-a)}const Fe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},fu=.001;function qx({duration:n=Fe.duration,bounce:r=Fe.bounce,velocity:o=Fe.velocity,mass:a=Fe.mass}){let l,c,d=1-r;d=gn(Fe.minDamping,Fe.maxDamping,d),n=gn(Fe.minDuration,Fe.maxDuration,hn(n)),d<1?(l=m=>{const g=m*d,y=g*n,x=g-o,k=Vu(m,d),w=Math.exp(-y);return fu-x/k*w},c=m=>{const y=m*d*n,x=y*o+o,k=Math.pow(d,2)*Math.pow(m,2)*n,w=Math.exp(-y),S=Vu(Math.pow(m,2),d);return(-l(m)+fu>0?-1:1)*((x-k)*w)/S}):(l=m=>{const g=Math.exp(-m*n),y=(m-o)*n+1;return-fu+g*y},c=m=>{const g=Math.exp(-m*n),y=(o-m)*(n*n);return g*y});const h=5/n,f=Kx(l,c,h);if(n=fn(n),isNaN(f))return{stiffness:Fe.stiffness,damping:Fe.damping,duration:n};{const m=Math.pow(f,2)*a;return{stiffness:m,damping:d*2*Math.sqrt(a*m),duration:n}}}const Wx=12;function Kx(n,r,o){let a=o;for(let l=1;l<Wx;l++)a=a-n(a)/r(a);return a}function Vu(n,r){return n*Math.sqrt(1-r*r)}const Iu=2e4;function m0(n){let r=0;const o=50;let a=n.next(r);for(;!a.done&&r<Iu;)r+=o,a=n.next(r);return r>=Iu?1/0:r}const Gx=["duration","bounce"],Yx=["stiffness","damping","mass"];function rp(n,r){return r.some(o=>n[o]!==void 0)}function Xx(n){let r={velocity:Fe.velocity,stiffness:Fe.stiffness,damping:Fe.damping,mass:Fe.mass,isResolvedFromDuration:!1,...n};if(!rp(n,Yx)&&rp(n,Gx))if(n.visualDuration){const o=n.visualDuration,a=2*Math.PI/(o*1.2),l=a*a,c=2*gn(.05,1,1-n.bounce)*Math.sqrt(l);r={...r,mass:Fe.mass,stiffness:l,damping:c}}else{const o=qx(n);r={...r,...o,mass:Fe.mass},r.isResolvedFromDuration=!0}return r}function g0(n=Fe.visualDuration,r=Fe.bounce){const o=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:r}:n;let{restSpeed:a,restDelta:l}=o;const c=o.keyframes[0],d=o.keyframes[o.keyframes.length-1],h={done:!1,value:c},{stiffness:f,damping:m,mass:g,duration:y,velocity:x,isResolvedFromDuration:k}=Xx({...o,velocity:-hn(o.velocity||0)}),w=x||0,S=m/(2*Math.sqrt(f*g)),T=d-c,O=hn(Math.sqrt(f/g)),M=Math.abs(T)<5;a||(a=M?Fe.restSpeed.granular:Fe.restSpeed.default),l||(l=M?Fe.restDelta.granular:Fe.restDelta.default);let D;if(S<1){const L=Vu(O,S);D=W=>{const q=Math.exp(-S*O*W);return d-q*((w+S*O*T)/L*Math.sin(L*W)+T*Math.cos(L*W))}}else if(S===1)D=L=>d-Math.exp(-O*L)*(T+(w+O*T)*L);else{const L=O*Math.sqrt(S*S-1);D=W=>{const q=Math.exp(-S*O*W),H=Math.min(L*W,300);return d-q*((w+S*O*T)*Math.sinh(H)+L*T*Math.cosh(H))/L}}const z={calculatedDuration:k&&y||null,next:L=>{const W=D(L);if(k)h.done=L>=y;else{let q=0;S<1&&(q=L===0?fn(w):p0(D,L,W));const H=Math.abs(q)<=a,X=Math.abs(d-W)<=l;h.done=H&&X}return h.value=h.done?d:W,h},toString:()=>{const L=Math.min(m0(z),Iu),W=f0(q=>z.next(L*q).value,L,30);return L+"ms "+W}};return z}function op({keyframes:n,velocity:r=0,power:o=.8,timeConstant:a=325,bounceDamping:l=10,bounceStiffness:c=500,modifyTarget:d,min:h,max:f,restDelta:m=.5,restSpeed:g}){const y=n[0],x={done:!1,value:y},k=H=>h!==void 0&&H<h||f!==void 0&&H>f,w=H=>h===void 0?f:f===void 0||Math.abs(h-H)<Math.abs(f-H)?h:f;let S=o*r;const T=y+S,O=d===void 0?T:d(T);O!==T&&(S=O-y);const M=H=>-S*Math.exp(-H/a),D=H=>O+M(H),z=H=>{const X=M(H),ue=D(H);x.done=Math.abs(X)<=m,x.value=x.done?O:ue};let L,W;const q=H=>{k(x.value)&&(L=H,W=g0({keyframes:[x.value,w(x.value)],velocity:p0(D,H,x.value),damping:l,stiffness:c,restDelta:m,restSpeed:g}))};return q(0),{calculatedDuration:null,next:H=>{let X=!1;return!W&&L===void 0&&(X=!0,z(H),q(H)),L!==void 0&&H>=L?W.next(H-L):(!X&&z(H),x)}}}const Qx=di(.42,0,1,1),Zx=di(0,0,.58,1),y0=di(.42,0,.58,1),Jx=n=>Array.isArray(n)&&typeof n[0]!="number",vc=n=>Array.isArray(n)&&typeof n[0]=="number",ip={linear:it,easeIn:Qx,easeInOut:y0,easeOut:Zx,circIn:cc,circInOut:Gm,circOut:Km,backIn:uc,backInOut:qm,backOut:Um,anticipate:Wm},ap=n=>{if(vc(n)){Du(n.length===4);const[r,o,a,l]=n;return di(r,o,a,l)}else if(typeof n=="string")return Du(ip[n]!==void 0),ip[n];return n},eb=(n,r)=>o=>r(n(o)),pn=(...n)=>n.reduce(eb),_e=(n,r,o)=>n+(r-n)*o;function hu(n,r,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(r-n)*6*o:o<1/2?r:o<2/3?n+(r-n)*(2/3-o)*6:n}function tb({hue:n,saturation:r,lightness:o,alpha:a}){n/=360,r/=100,o/=100;let l=0,c=0,d=0;if(!r)l=c=d=o;else{const h=o<.5?o*(1+r):o+r-o*r,f=2*o-h;l=hu(f,h,n+1/3),c=hu(f,h,n),d=hu(f,h,n-1/3)}return{red:Math.round(l*255),green:Math.round(c*255),blue:Math.round(d*255),alpha:a}}function Va(n,r){return o=>o>0?r:n}const pu=(n,r,o)=>{const a=n*n,l=o*(r*r-a)+a;return l<0?0:Math.sqrt(l)},nb=[zu,sr,Hr],rb=n=>nb.find(r=>r.test(n));function sp(n){const r=rb(n);if(!r)return!1;let o=r.parse(n);return r===Hr&&(o=tb(o)),o}const lp=(n,r)=>{const o=sp(n),a=sp(r);if(!o||!a)return Va(n,r);const l={...o};return c=>(l.red=pu(o.red,a.red,c),l.green=pu(o.green,a.green,c),l.blue=pu(o.blue,a.blue,c),l.alpha=_e(o.alpha,a.alpha,c),sr.transform(l))},Bu=new Set(["none","hidden"]);function ob(n,r){return Bu.has(n)?o=>o<=0?n:r:o=>o>=1?r:n}function ib(n,r){return o=>_e(n,r,o)}function xc(n){return typeof n=="number"?ib:typeof n=="string"?dc(n)?Va:rt.test(n)?lp:lb:Array.isArray(n)?v0:typeof n=="object"?rt.test(n)?lp:ab:Va}function v0(n,r){const o=[...n],a=o.length,l=n.map((c,d)=>xc(c)(c,r[d]));return c=>{for(let d=0;d<a;d++)o[d]=l[d](c);return o}}function ab(n,r){const o={...n,...r},a={};for(const l in o)n[l]!==void 0&&r[l]!==void 0&&(a[l]=xc(n[l])(n[l],r[l]));return l=>{for(const c in a)o[c]=a[c](l);return o}}function sb(n,r){var o;const a=[],l={color:0,var:0,number:0};for(let c=0;c<r.values.length;c++){const d=r.types[c],h=n.indexes[d][l[d]],f=(o=n.values[h])!==null&&o!==void 0?o:0;a[c]=f,l[d]++}return a}const lb=(n,r)=>{const o=Bn.createTransformer(r),a=ni(n),l=ni(r);return a.indexes.var.length===l.indexes.var.length&&a.indexes.color.length===l.indexes.color.length&&a.indexes.number.length>=l.indexes.number.length?Bu.has(n)&&!l.values.length||Bu.has(r)&&!a.values.length?ob(n,r):pn(v0(sb(a,l),l.values),o):Va(n,r)};function x0(n,r,o){return typeof n=="number"&&typeof r=="number"&&typeof o=="number"?_e(n,r,o):xc(n)(n,r)}function ub(n,r,o){const a=[],l=o||x0,c=n.length-1;for(let d=0;d<c;d++){let h=l(n[d],n[d+1]);if(r){const f=Array.isArray(r)?r[d]||it:r;h=pn(f,h)}a.push(h)}return a}function cb(n,r,{clamp:o=!0,ease:a,mixer:l}={}){const c=n.length;if(Du(c===r.length),c===1)return()=>r[0];if(c===2&&n[0]===n[1])return()=>r[1];n[0]>n[c-1]&&(n=[...n].reverse(),r=[...r].reverse());const d=ub(r,a,l),h=d.length,f=m=>{let g=0;if(h>1)for(;g<n.length-2&&!(m<n[g+1]);g++);const y=Xr(n[g],n[g+1],m);return d[g](y)};return o?m=>f(gn(n[0],n[c-1],m)):f}function db(n,r){const o=n[n.length-1];for(let a=1;a<=r;a++){const l=Xr(0,r,a);n.push(_e(o,1,l))}}function fb(n){const r=[0];return db(r,n.length-1),r}function hb(n,r){return n.map(o=>o*r)}function pb(n,r){return n.map(()=>r||y0).splice(0,n.length-1)}function Ia({duration:n=300,keyframes:r,times:o,ease:a="easeInOut"}){const l=Jx(a)?a.map(ap):ap(a),c={done:!1,value:r[0]},d=hb(o&&o.length===r.length?o:fb(r),n),h=cb(d,r,{ease:Array.isArray(l)?l:pb(r,l)});return{calculatedDuration:n,next:f=>(c.value=h(f),c.done=f>=n,c)}}const mb=n=>{const r=({timestamp:o})=>n(o);return{start:()=>Se.update(r,!0),stop:()=>In(r),now:()=>Ze.isProcessing?Ze.timestamp:Xt.now()}},gb={decay:op,inertia:op,tween:Ia,keyframes:Ia,spring:g0},yb=n=>n/100;class bc extends d0{constructor(r){super(r),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:f}=this.options;f&&f()};const{name:o,motionValue:a,element:l,keyframes:c}=this.options,d=(l==null?void 0:l.KeyframeResolver)||fc,h=(f,m)=>this.onKeyframesResolved(f,m);this.resolver=new d(c,h,o,a,l),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(r){const{type:o="keyframes",repeat:a=0,repeatDelay:l=0,repeatType:c,velocity:d=0}=this.options,h=yc(o)?o:gb[o]||Ia;let f,m;h!==Ia&&typeof r[0]!="number"&&(f=pn(yb,x0(r[0],r[1])),r=[0,100]);const g=h({...this.options,keyframes:r});c==="mirror"&&(m=h({...this.options,keyframes:[...r].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=m0(g));const{calculatedDuration:y}=g,x=y+l,k=x*(a+1)-l;return{generator:g,mirroredGenerator:m,mapPercentToKeyframes:f,calculatedDuration:y,resolvedDuration:x,totalDuration:k}}onPostResolved(){const{autoplay:r=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!r?this.pause():this.state=this.pendingPlayState}tick(r,o=!1){const{resolved:a}=this;if(!a){const{keyframes:H}=this.options;return{done:!0,value:H[H.length-1]}}const{finalKeyframe:l,generator:c,mirroredGenerator:d,mapPercentToKeyframes:h,keyframes:f,calculatedDuration:m,totalDuration:g,resolvedDuration:y}=a;if(this.startTime===null)return c.next(0);const{delay:x,repeat:k,repeatType:w,repeatDelay:S,onUpdate:T}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-g/this.speed,this.startTime)),o?this.currentTime=r:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(r-this.startTime)*this.speed;const O=this.currentTime-x*(this.speed>=0?1:-1),M=this.speed>=0?O<0:O>g;this.currentTime=Math.max(O,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=g);let D=this.currentTime,z=c;if(k){const H=Math.min(this.currentTime,g)/y;let X=Math.floor(H),ue=H%1;!ue&&H>=1&&(ue=1),ue===1&&X--,X=Math.min(X,k+1),!!(X%2)&&(w==="reverse"?(ue=1-ue,S&&(ue-=S/y)):w==="mirror"&&(z=d)),D=gn(0,1,ue)*y}const L=M?{done:!1,value:f[0]}:z.next(D);h&&(L.value=h(L.value));let{done:W}=L;!M&&m!==null&&(W=this.speed>=0?this.currentTime>=g:this.currentTime<=0);const q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&W);return q&&l!==void 0&&(L.value=es(f,this.options,l)),T&&T(L.value),q&&this.finish(),L}get duration(){const{resolved:r}=this;return r?hn(r.calculatedDuration):0}get time(){return hn(this.currentTime)}set time(r){r=fn(r),this.currentTime=r,this.holdTime!==null||this.speed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.speed)}get speed(){return this.playbackSpeed}set speed(r){const o=this.playbackSpeed!==r;this.playbackSpeed=r,o&&(this.time=hn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:r=mb,onPlay:o,startTime:a}=this.options;this.driver||(this.driver=r(c=>this.tick(c))),o&&o();const l=this.driver.now();this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=l):this.startTime=a??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var r;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(r=this.currentTime)!==null&&r!==void 0?r:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:r}=this.options;r&&r()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}}const vb=new Set(["opacity","clipPath","filter","transform"]);function wc(n){let r;return()=>(r===void 0&&(r=n()),r)}const xb={linearEasing:void 0};function bb(n,r){const o=wc(n);return()=>{var a;return(a=xb[r])!==null&&a!==void 0?a:o()}}const Ba=bb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function b0(n){return!!(typeof n=="function"&&Ba()||!n||typeof n=="string"&&(n in $u||Ba())||vc(n)||Array.isArray(n)&&n.every(b0))}const Ko=([n,r,o,a])=>`cubic-bezier(${n}, ${r}, ${o}, ${a})`,$u={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ko([0,.65,.55,1]),circOut:Ko([.55,0,1,.45]),backIn:Ko([.31,.01,.66,-.59]),backOut:Ko([.33,1.53,.69,.99])};function w0(n,r){if(n)return typeof n=="function"&&Ba()?f0(n,r):vc(n)?Ko(n):Array.isArray(n)?n.map(o=>w0(o,r)||$u.easeOut):$u[n]}function wb(n,r,o,{delay:a=0,duration:l=300,repeat:c=0,repeatType:d="loop",ease:h="easeInOut",times:f}={}){const m={[r]:o};f&&(m.offset=f);const g=w0(h,l);return Array.isArray(g)&&(m.easing=g),n.animate(m,{delay:a,duration:l,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:c+1,direction:d==="reverse"?"alternate":"normal"})}function up(n,r){n.timeline=r,n.onfinish=null}const kb=wc(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),$a=10,Sb=2e4;function Pb(n){return yc(n.type)||n.type==="spring"||!b0(n.ease)}function Tb(n,r){const o=new bc({...r,keyframes:n,repeat:0,delay:0,isGenerator:!0});let a={done:!1,value:n[0]};const l=[];let c=0;for(;!a.done&&c<Sb;)a=o.sample(c),l.push(a.value),c+=$a;return{times:void 0,keyframes:l,duration:c-$a,ease:"linear"}}const k0={anticipate:Wm,backInOut:qm,circInOut:Gm};function Cb(n){return n in k0}class cp extends d0{constructor(r){super(r);const{name:o,motionValue:a,element:l,keyframes:c}=this.options;this.resolver=new c0(c,(d,h)=>this.onKeyframesResolved(d,h),o,a,l),this.resolver.scheduleResolve()}initPlayback(r,o){var a;let{duration:l=300,times:c,ease:d,type:h,motionValue:f,name:m,startTime:g}=this.options;if(!(!((a=f.owner)===null||a===void 0)&&a.current))return!1;if(typeof d=="string"&&Ba()&&Cb(d)&&(d=k0[d]),Pb(this.options)){const{onComplete:x,onUpdate:k,motionValue:w,element:S,...T}=this.options,O=Tb(r,T);r=O.keyframes,r.length===1&&(r[1]=r[0]),l=O.duration,c=O.times,d=O.ease,h="keyframes"}const y=wb(f.owner.current,m,r,{...this.options,duration:l,times:c,ease:d});return y.startTime=g??this.calcStartTime(),this.pendingTimeline?(up(y,this.pendingTimeline),this.pendingTimeline=void 0):y.onfinish=()=>{const{onComplete:x}=this.options;f.set(es(r,this.options,o)),x&&x(),this.cancel(),this.resolveFinishedPromise()},{animation:y,duration:l,times:c,type:h,ease:d,keyframes:r}}get duration(){const{resolved:r}=this;if(!r)return 0;const{duration:o}=r;return hn(o)}get time(){const{resolved:r}=this;if(!r)return 0;const{animation:o}=r;return hn(o.currentTime||0)}set time(r){const{resolved:o}=this;if(!o)return;const{animation:a}=o;a.currentTime=fn(r)}get speed(){const{resolved:r}=this;if(!r)return 1;const{animation:o}=r;return o.playbackRate}set speed(r){const{resolved:o}=this;if(!o)return;const{animation:a}=o;a.playbackRate=r}get state(){const{resolved:r}=this;if(!r)return"idle";const{animation:o}=r;return o.playState}get startTime(){const{resolved:r}=this;if(!r)return null;const{animation:o}=r;return o.startTime}attachTimeline(r){if(!this._resolved)this.pendingTimeline=r;else{const{resolved:o}=this;if(!o)return it;const{animation:a}=o;up(a,r)}return it}play(){if(this.isStopped)return;const{resolved:r}=this;if(!r)return;const{animation:o}=r;o.playState==="finished"&&this.updateFinishedPromise(),o.play()}pause(){const{resolved:r}=this;if(!r)return;const{animation:o}=r;o.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:r}=this;if(!r)return;const{animation:o,keyframes:a,duration:l,type:c,ease:d,times:h}=r;if(o.playState==="idle"||o.playState==="finished")return;if(this.time){const{motionValue:m,onUpdate:g,onComplete:y,element:x,...k}=this.options,w=new bc({...k,keyframes:a,duration:l,type:c,ease:d,times:h,isGenerator:!0}),S=fn(this.time);m.setWithVelocity(w.sample(S-$a).value,w.sample(S).value,$a)}const{onStop:f}=this.options;f&&f(),this.cancel()}complete(){const{resolved:r}=this;r&&r.animation.finish()}cancel(){const{resolved:r}=this;r&&r.animation.cancel()}static supports(r){const{motionValue:o,name:a,repeatDelay:l,repeatType:c,damping:d,type:h}=r;return kb()&&a&&vb.has(a)&&o&&o.owner&&o.owner.current instanceof HTMLElement&&!o.owner.getProps().onUpdate&&!l&&c!=="mirror"&&d!==0&&h!=="inertia"}}const Eb=wc(()=>window.ScrollTimeline!==void 0);class Ob{constructor(r){this.stop=()=>this.runAll("stop"),this.animations=r.filter(Boolean)}then(r,o){return Promise.all(this.animations).then(r).catch(o)}getAll(r){return this.animations[0][r]}setAll(r,o){for(let a=0;a<this.animations.length;a++)this.animations[a][r]=o}attachTimeline(r,o){const a=this.animations.map(l=>Eb()&&l.attachTimeline?l.attachTimeline(r):o(l));return()=>{a.forEach((l,c)=>{l&&l(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(r){this.setAll("time",r)}get speed(){return this.getAll("speed")}set speed(r){this.setAll("speed",r)}get startTime(){return this.getAll("startTime")}get duration(){let r=0;for(let o=0;o<this.animations.length;o++)r=Math.max(r,this.animations[o].duration);return r}runAll(r){this.animations.forEach(o=>o[r]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Ab({when:n,delay:r,delayChildren:o,staggerChildren:a,staggerDirection:l,repeat:c,repeatType:d,repeatDelay:h,from:f,elapsed:m,...g}){return!!Object.keys(g).length}const kc=(n,r,o,a={},l,c)=>d=>{const h=lc(a,n)||{},f=h.delay||a.delay||0;let{elapsed:m=0}=a;m=m-fn(f);let g={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:r.getVelocity(),...h,delay:-m,onUpdate:x=>{r.set(x),h.onUpdate&&h.onUpdate(x)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:n,motionValue:r,element:c?void 0:l};Ab(h)||(g={...g,...ex(n,g)}),g.duration&&(g.duration=fn(g.duration)),g.repeatDelay&&(g.repeatDelay=fn(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let y=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(y=!0)),y&&!c&&r.get()!==void 0){const x=es(g.keyframes,h);if(x!==void 0)return Se.update(()=>{g.onUpdate(x),g.onComplete()}),new Ob([])}return!c&&cp.supports(g)?new cp(g):new bc(g)},jb=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),Nb=n=>Mu(n)?n[n.length-1]||0:n;function Sc(n,r){n.indexOf(r)===-1&&n.push(r)}function Pc(n,r){const o=n.indexOf(r);o>-1&&n.splice(o,1)}class Tc{constructor(){this.subscriptions=[]}add(r){return Sc(this.subscriptions,r),()=>Pc(this.subscriptions,r)}notify(r,o,a){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](r,o,a);else for(let c=0;c<l;c++){const d=this.subscriptions[c];d&&d(r,o,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const dp=30,Rb=n=>!isNaN(parseFloat(n));class Mb{constructor(r,o={}){this.version="11.12.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(a,l=!0)=>{const c=Xt.now();this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),l&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(r),this.owner=o.owner}setCurrent(r){this.current=r,this.updatedAt=Xt.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=Rb(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,o){this.events[r]||(this.events[r]=new Tc);const a=this.events[r].add(o);return r==="change"?()=>{a(),Se.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,o){this.passiveEffect=r,this.stopPassiveEffect=o}set(r,o=!0){!o||!this.passiveEffect?this.updateAndNotify(r,o):this.passiveEffect(r,this.updateAndNotify)}setWithVelocity(r,o,a){this.set(o),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-a}jump(r,o=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const r=Xt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>dp)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,dp);return h0(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(r){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=r(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ri(n,r){return new Mb(n,r)}function Db(n,r,o){n.hasValue(r)?n.getValue(r).set(o):n.addValue(r,ri(o))}function _b(n,r){const o=Ja(n,r);let{transitionEnd:a={},transition:l={},...c}=o||{};c={...c,...a};for(const d in c){const h=Nb(c[d]);Db(n,d,h)}}const Cc=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Lb="framerAppearId",S0="data-"+Cc(Lb);function P0(n){return n.props[S0]}const ot=n=>!!(n&&n.getVelocity);function zb(n){return!!(ot(n)&&n.add)}function Hu(n,r){const o=n.getValue("willChange");if(zb(o))return o.add(r)}function Fb({protectedKeys:n,needsAnimating:r},o){const a=n.hasOwnProperty(o)&&r[o]!==!0;return r[o]=!1,a}function T0(n,r,{delay:o=0,transitionOverride:a,type:l}={}){var c;let{transition:d=n.getDefaultTransition(),transitionEnd:h,...f}=r;a&&(d=a);const m=[],g=l&&n.animationState&&n.animationState.getState()[l];for(const y in f){const x=n.getValue(y,(c=n.latestValues[y])!==null&&c!==void 0?c:null),k=f[y];if(k===void 0||g&&Fb(g,y))continue;const w={delay:o,...lc(d||{},y)};let S=!1;if(window.MotionHandoffAnimation){const O=P0(n);if(O){const M=window.MotionHandoffAnimation(O,y,Se);M!==null&&(w.startTime=M,S=!0)}}Hu(n,y),x.start(kc(y,x,k,n.shouldReduceMotion&&dr.has(y)?{type:!1}:w,n,S));const T=x.animation;T&&m.push(T)}return h&&Promise.all(m).then(()=>{Se.update(()=>{h&&_b(n,h)})}),m}function Uu(n,r,o={}){var a;const l=Ja(n,r,o.type==="exit"?(a=n.presenceContext)===null||a===void 0?void 0:a.custom:void 0);let{transition:c=n.getDefaultTransition()||{}}=l||{};o.transitionOverride&&(c=o.transitionOverride);const d=l?()=>Promise.all(T0(n,l,o)):()=>Promise.resolve(),h=n.variantChildren&&n.variantChildren.size?(m=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:x}=c;return Vb(n,r,g+m,y,x,o)}:()=>Promise.resolve(),{when:f}=c;if(f){const[m,g]=f==="beforeChildren"?[d,h]:[h,d];return m().then(()=>g())}else return Promise.all([d(),h(o.delay)])}function Vb(n,r,o=0,a=0,l=1,c){const d=[],h=(n.variantChildren.size-1)*a,f=l===1?(m=0)=>m*a:(m=0)=>h-m*a;return Array.from(n.variantChildren).sort(Ib).forEach((m,g)=>{m.notify("AnimationStart",r),d.push(Uu(m,r,{...c,delay:o+f(g)}).then(()=>m.notify("AnimationComplete",r)))}),Promise.all(d)}function Ib(n,r){return n.sortNodePosition(r)}function Bb(n,r,o={}){n.notify("AnimationStart",r);let a;if(Array.isArray(r)){const l=r.map(c=>Uu(n,c,o));a=Promise.all(l)}else if(typeof r=="string")a=Uu(n,r,o);else{const l=typeof r=="function"?Ja(n,r,o.custom):r;a=Promise.all(T0(n,l,o))}return a.then(()=>{n.notify("AnimationComplete",r)})}const $b=sc.length;function C0(n){if(!n)return;if(!n.isControllingVariants){const o=n.parent?C0(n.parent)||{}:{};return n.props.initial!==void 0&&(o.initial=n.props.initial),o}const r={};for(let o=0;o<$b;o++){const a=sc[o],l=n.props[a];(ei(l)||l===!1)&&(r[a]=l)}return r}const Hb=[...ac].reverse(),Ub=ac.length;function qb(n){return r=>Promise.all(r.map(({animation:o,options:a})=>Bb(n,o,a)))}function Wb(n){let r=qb(n),o=fp(),a=!0;const l=f=>(m,g)=>{var y;const x=Ja(n,g,f==="exit"?(y=n.presenceContext)===null||y===void 0?void 0:y.custom:void 0);if(x){const{transition:k,transitionEnd:w,...S}=x;m={...m,...S,...w}}return m};function c(f){r=f(n)}function d(f){const{props:m}=n,g=C0(n.parent)||{},y=[],x=new Set;let k={},w=1/0;for(let T=0;T<Ub;T++){const O=Hb[T],M=o[O],D=m[O]!==void 0?m[O]:g[O],z=ei(D),L=O===f?M.isActive:null;L===!1&&(w=T);let W=D===g[O]&&D!==m[O]&&z;if(W&&a&&n.manuallyAnimateOnMount&&(W=!1),M.protectedKeys={...k},!M.isActive&&L===null||!D&&!M.prevProp||Za(D)||typeof D=="boolean")continue;const q=Kb(M.prevProp,D);let H=q||O===f&&M.isActive&&!W&&z||T>w&&z,X=!1;const ue=Array.isArray(D)?D:[D];let Re=ue.reduce(l(O),{});L===!1&&(Re={});const{prevResolvedValues:te={}}=M,ve={...te,...Re},He=ce=>{H=!0,x.has(ce)&&(X=!0,x.delete(ce)),M.needsAnimating[ce]=!0;const U=n.getValue(ce);U&&(U.liveStyle=!1)};for(const ce in ve){const U=Re[ce],ne=te[ce];if(k.hasOwnProperty(ce))continue;let G=!1;Mu(U)&&Mu(ne)?G=!Vm(U,ne):G=U!==ne,G?U!=null?He(ce):x.add(ce):U!==void 0&&x.has(ce)?He(ce):M.protectedKeys[ce]=!0}M.prevProp=D,M.prevResolvedValues=Re,M.isActive&&(k={...k,...Re}),a&&n.blockInitialAnimation&&(H=!1),H&&(!(W&&q)||X)&&y.push(...ue.map(ce=>({animation:ce,options:{type:O}})))}if(x.size){const T={};x.forEach(O=>{const M=n.getBaseTarget(O),D=n.getValue(O);D&&(D.liveStyle=!0),T[O]=M??null}),y.push({animation:T})}let S=!!y.length;return a&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(S=!1),a=!1,S?r(y):Promise.resolve()}function h(f,m){var g;if(o[f].isActive===m)return Promise.resolve();(g=n.variantChildren)===null||g===void 0||g.forEach(x=>{var k;return(k=x.animationState)===null||k===void 0?void 0:k.setActive(f,m)}),o[f].isActive=m;const y=d(f);for(const x in o)o[x].protectedKeys={};return y}return{animateChanges:d,setActive:h,setAnimateFunction:c,getState:()=>o,reset:()=>{o=fp(),a=!0}}}function Kb(n,r){return typeof r=="string"?r!==n:Array.isArray(r)?!Vm(r,n):!1}function or(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function fp(){return{animate:or(!0),whileInView:or(),whileHover:or(),whileTap:or(),whileDrag:or(),whileFocus:or(),exit:or()}}class Un{constructor(r){this.isMounted=!1,this.node=r}update(){}}class Gb extends Un{constructor(r){super(r),r.animationState||(r.animationState=Wb(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();Za(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:o}=this.node.prevProps||{};r!==o&&this.updateAnimationControlsSubscription()}unmount(){var r;this.node.animationState.reset(),(r=this.unmountControls)===null||r===void 0||r.call(this)}}let Yb=0;class Xb extends Un{constructor(){super(...arguments),this.id=Yb++}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:o}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===a)return;const l=this.node.animationState.setActive("exit",!r);o&&!r&&l.then(()=>o(this.id))}mount(){const{register:r}=this.node.presenceContext||{};r&&(this.unmount=r(this.id))}unmount(){}}const Qb={animation:{Feature:Gb},exit:{Feature:Xb}},E0=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1;function ts(n,r="page"){return{point:{x:n[`${r}X`],y:n[`${r}Y`]}}}const Zb=n=>r=>E0(r)&&n(r,ts(r));function cn(n,r,o,a={passive:!0}){return n.addEventListener(r,o,a),()=>n.removeEventListener(r,o)}function mn(n,r,o,a){return cn(n,r,Zb(o),a)}const hp=(n,r)=>Math.abs(n-r);function Jb(n,r){const o=hp(n.x,r.x),a=hp(n.y,r.y);return Math.sqrt(o**2+a**2)}class O0{constructor(r,o,{transformPagePoint:a,contextWindow:l,dragSnapToOrigin:c=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=gu(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,k=Jb(y.offset,{x:0,y:0})>=3;if(!x&&!k)return;const{point:w}=y,{timestamp:S}=Ze;this.history.push({...w,timestamp:S});const{onStart:T,onMove:O}=this.handlers;x||(T&&T(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),O&&O(this.lastMoveEvent,y)},this.handlePointerMove=(y,x)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=mu(x,this.transformPagePoint),Se.update(this.updatePoint,!0)},this.handlePointerUp=(y,x)=>{this.end();const{onEnd:k,onSessionEnd:w,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const T=gu(y.type==="pointercancel"?this.lastMoveEventInfo:mu(x,this.transformPagePoint),this.history);this.startEvent&&k&&k(y,T),w&&w(y,T)},!E0(r))return;this.dragSnapToOrigin=c,this.handlers=o,this.transformPagePoint=a,this.contextWindow=l||window;const d=ts(r),h=mu(d,this.transformPagePoint),{point:f}=h,{timestamp:m}=Ze;this.history=[{...f,timestamp:m}];const{onSessionStart:g}=o;g&&g(r,gu(h,this.history)),this.removeListeners=pn(mn(this.contextWindow,"pointermove",this.handlePointerMove),mn(this.contextWindow,"pointerup",this.handlePointerUp),mn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),In(this.updatePoint)}}function mu(n,r){return r?{point:r(n.point)}:n}function pp(n,r){return{x:n.x-r.x,y:n.y-r.y}}function gu({point:n},r){return{point:n,delta:pp(n,A0(r)),offset:pp(n,ew(r)),velocity:tw(r,.1)}}function ew(n){return n[0]}function A0(n){return n[n.length-1]}function tw(n,r){if(n.length<2)return{x:0,y:0};let o=n.length-1,a=null;const l=A0(n);for(;o>=0&&(a=n[o],!(l.timestamp-a.timestamp>fn(r)));)o--;if(!a)return{x:0,y:0};const c=hn(l.timestamp-a.timestamp);if(c===0)return{x:0,y:0};const d={x:(l.x-a.x)/c,y:(l.y-a.y)/c};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function j0(n){let r=null;return()=>{const o=()=>{r=null};return r===null?(r=n,o):!1}}const mp=j0("dragHorizontal"),gp=j0("dragVertical");function N0(n){let r=!1;if(n==="y")r=gp();else if(n==="x")r=mp();else{const o=mp(),a=gp();o&&a?r=()=>{o(),a()}:(o&&o(),a&&a())}return r}function R0(){const n=N0(!0);return n?(n(),!1):!0}function Ur(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}const M0=1e-4,nw=1-M0,rw=1+M0,D0=.01,ow=0-D0,iw=0+D0;function Pt(n){return n.max-n.min}function aw(n,r,o){return Math.abs(n-r)<=o}function yp(n,r,o,a=.5){n.origin=a,n.originPoint=_e(r.min,r.max,n.origin),n.scale=Pt(o)/Pt(r),n.translate=_e(o.min,o.max,n.origin)-n.originPoint,(n.scale>=nw&&n.scale<=rw||isNaN(n.scale))&&(n.scale=1),(n.translate>=ow&&n.translate<=iw||isNaN(n.translate))&&(n.translate=0)}function Qo(n,r,o,a){yp(n.x,r.x,o.x,a?a.originX:void 0),yp(n.y,r.y,o.y,a?a.originY:void 0)}function vp(n,r,o){n.min=o.min+r.min,n.max=n.min+Pt(r)}function sw(n,r,o){vp(n.x,r.x,o.x),vp(n.y,r.y,o.y)}function xp(n,r,o){n.min=r.min-o.min,n.max=n.min+Pt(r)}function Zo(n,r,o){xp(n.x,r.x,o.x),xp(n.y,r.y,o.y)}function lw(n,{min:r,max:o},a){return r!==void 0&&n<r?n=a?_e(r,n,a.min):Math.max(n,r):o!==void 0&&n>o&&(n=a?_e(o,n,a.max):Math.min(n,o)),n}function bp(n,r,o){return{min:r!==void 0?n.min+r:void 0,max:o!==void 0?n.max+o-(n.max-n.min):void 0}}function uw(n,{top:r,left:o,bottom:a,right:l}){return{x:bp(n.x,o,l),y:bp(n.y,r,a)}}function wp(n,r){let o=r.min-n.min,a=r.max-n.max;return r.max-r.min<n.max-n.min&&([o,a]=[a,o]),{min:o,max:a}}function cw(n,r){return{x:wp(n.x,r.x),y:wp(n.y,r.y)}}function dw(n,r){let o=.5;const a=Pt(n),l=Pt(r);return l>a?o=Xr(r.min,r.max-a,n.min):a>l&&(o=Xr(n.min,n.max-l,r.min)),gn(0,1,o)}function fw(n,r){const o={};return r.min!==void 0&&(o.min=r.min-n.min),r.max!==void 0&&(o.max=r.max-n.min),o}const qu=.35;function hw(n=qu){return n===!1?n=0:n===!0&&(n=qu),{x:kp(n,"left","right"),y:kp(n,"top","bottom")}}function kp(n,r,o){return{min:Sp(n,r),max:Sp(n,o)}}function Sp(n,r){return typeof n=="number"?n:n[r]||0}const Pp=()=>({translate:0,scale:1,origin:0,originPoint:0}),qr=()=>({x:Pp(),y:Pp()}),Tp=()=>({min:0,max:0}),Be=()=>({x:Tp(),y:Tp()});function Rt(n){return[n("x"),n("y")]}function _0({top:n,left:r,right:o,bottom:a}){return{x:{min:r,max:o},y:{min:n,max:a}}}function pw({x:n,y:r}){return{top:r.min,right:n.max,bottom:r.max,left:n.min}}function mw(n,r){if(!r)return n;const o=r({x:n.left,y:n.top}),a=r({x:n.right,y:n.bottom});return{top:o.y,left:o.x,bottom:a.y,right:a.x}}function yu(n){return n===void 0||n===1}function Wu({scale:n,scaleX:r,scaleY:o}){return!yu(n)||!yu(r)||!yu(o)}function ir(n){return Wu(n)||L0(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function L0(n){return Cp(n.x)||Cp(n.y)}function Cp(n){return n&&n!=="0%"}function Ha(n,r,o){const a=n-o,l=r*a;return o+l}function Ep(n,r,o,a,l){return l!==void 0&&(n=Ha(n,l,a)),Ha(n,o,a)+r}function Ku(n,r=0,o=1,a,l){n.min=Ep(n.min,r,o,a,l),n.max=Ep(n.max,r,o,a,l)}function z0(n,{x:r,y:o}){Ku(n.x,r.translate,r.scale,r.originPoint),Ku(n.y,o.translate,o.scale,o.originPoint)}const Op=.999999999999,Ap=1.0000000000001;function gw(n,r,o,a=!1){const l=o.length;if(!l)return;r.x=r.y=1;let c,d;for(let h=0;h<l;h++){c=o[h],d=c.projectionDelta;const{visualElement:f}=c.options;f&&f.props.style&&f.props.style.display==="contents"||(a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Kr(n,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),d&&(r.x*=d.x.scale,r.y*=d.y.scale,z0(n,d)),a&&ir(c.latestValues)&&Kr(n,c.latestValues))}r.x<Ap&&r.x>Op&&(r.x=1),r.y<Ap&&r.y>Op&&(r.y=1)}function Wr(n,r){n.min=n.min+r,n.max=n.max+r}function jp(n,r,o,a,l=.5){const c=_e(n.min,n.max,l);Ku(n,r,o,c,a)}function Kr(n,r){jp(n.x,r.x,r.scaleX,r.scale,r.originX),jp(n.y,r.y,r.scaleY,r.scale,r.originY)}function F0(n,r){return _0(mw(n.getBoundingClientRect(),r))}function yw(n,r,o){const a=F0(n,o),{scroll:l}=r;return l&&(Wr(a.x,l.offset.x),Wr(a.y,l.offset.y)),a}const V0=({current:n})=>n?n.ownerDocument.defaultView:null,vw=new WeakMap;class xw{constructor(r){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Be(),this.visualElement=r}start(r,{snapToCursor:o=!1}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const l=g=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(ts(g,"page").point)},c=(g,y)=>{const{drag:x,dragPropagation:k,onDragStart:w}=this.getProps();if(x&&!k&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=N0(x),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Rt(T=>{let O=this.getAxisMotionValue(T).get()||0;if(Yt.test(O)){const{projection:M}=this.visualElement;if(M&&M.layout){const D=M.layout.layoutBox[T];D&&(O=Pt(D)*(parseFloat(O)/100))}}this.originPoint[T]=O}),w&&Se.postRender(()=>w(g,y)),Hu(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},d=(g,y)=>{const{dragPropagation:x,dragDirectionLock:k,onDirectionLock:w,onDrag:S}=this.getProps();if(!x&&!this.openGlobalLock)return;const{offset:T}=y;if(k&&this.currentDirection===null){this.currentDirection=bw(T),this.currentDirection!==null&&w&&w(this.currentDirection);return}this.updateAxis("x",y.point,T),this.updateAxis("y",y.point,T),this.visualElement.render(),S&&S(g,y)},h=(g,y)=>this.stop(g,y),f=()=>Rt(g=>{var y;return this.getAnimationState(g)==="paused"&&((y=this.getAxisMotionValue(g).animation)===null||y===void 0?void 0:y.play())}),{dragSnapToOrigin:m}=this.getProps();this.panSession=new O0(r,{onSessionStart:l,onStart:c,onMove:d,onSessionEnd:h,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,contextWindow:V0(this.visualElement)})}stop(r,o){const a=this.isDragging;if(this.cancel(),!a)return;const{velocity:l}=o;this.startAnimation(l);const{onDragEnd:c}=this.getProps();c&&Se.postRender(()=>c(r,o))}cancel(){this.isDragging=!1;const{projection:r,animationState:o}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(r,o,a){const{drag:l}=this.getProps();if(!a||!Aa(r,l,this.currentDirection))return;const c=this.getAxisMotionValue(r);let d=this.originPoint[r]+a[r];this.constraints&&this.constraints[r]&&(d=lw(d,this.constraints[r],this.elastic[r])),c.set(d)}resolveConstraints(){var r;const{dragConstraints:o,dragElastic:a}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(r=this.visualElement.projection)===null||r===void 0?void 0:r.layout,c=this.constraints;o&&Ur(o)?this.constraints||(this.constraints=this.resolveRefConstraints()):o&&l?this.constraints=uw(l.layoutBox,o):this.constraints=!1,this.elastic=hw(a),c!==this.constraints&&l&&this.constraints&&!this.hasMutatedConstraints&&Rt(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=fw(l.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:o}=this.getProps();if(!r||!Ur(r))return!1;const a=r.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const c=yw(a,l.root,this.visualElement.getTransformPagePoint());let d=cw(l.layout.layoutBox,c);if(o){const h=o(pw(d));this.hasMutatedConstraints=!!h,h&&(d=_0(h))}return d}startAnimation(r){const{drag:o,dragMomentum:a,dragElastic:l,dragTransition:c,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),f=this.constraints||{},m=Rt(g=>{if(!Aa(g,o,this.currentDirection))return;let y=f&&f[g]||{};d&&(y={min:0,max:0});const x=l?200:1e6,k=l?40:1e7,w={type:"inertia",velocity:a?r[g]:0,bounceStiffness:x,bounceDamping:k,timeConstant:750,restDelta:1,restSpeed:10,...c,...y};return this.startAxisValueAnimation(g,w)});return Promise.all(m).then(h)}startAxisValueAnimation(r,o){const a=this.getAxisMotionValue(r);return Hu(this.visualElement,r),a.start(kc(r,a,0,o,this.visualElement,!1))}stopAnimation(){Rt(r=>this.getAxisMotionValue(r).stop())}pauseAnimation(){Rt(r=>{var o;return(o=this.getAxisMotionValue(r).animation)===null||o===void 0?void 0:o.pause()})}getAnimationState(r){var o;return(o=this.getAxisMotionValue(r).animation)===null||o===void 0?void 0:o.state}getAxisMotionValue(r){const o=`_drag${r.toUpperCase()}`,a=this.visualElement.getProps(),l=a[o];return l||this.visualElement.getValue(r,(a.initial?a.initial[r]:void 0)||0)}snapToCursor(r){Rt(o=>{const{drag:a}=this.getProps();if(!Aa(o,a,this.currentDirection))return;const{projection:l}=this.visualElement,c=this.getAxisMotionValue(o);if(l&&l.layout){const{min:d,max:h}=l.layout.layoutBox[o];c.set(r[o]-_e(d,h,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:o}=this.getProps(),{projection:a}=this.visualElement;if(!Ur(o)||!a||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};Rt(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const f=h.get();l[d]=dw({min:f,max:f},this.constraints[d])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),Rt(d=>{if(!Aa(d,r,null))return;const h=this.getAxisMotionValue(d),{min:f,max:m}=this.constraints[d];h.set(_e(f,m,l[d]))})}addListeners(){if(!this.visualElement.current)return;vw.set(this.visualElement,this);const r=this.visualElement.current,o=mn(r,"pointerdown",f=>{const{drag:m,dragListener:g=!0}=this.getProps();m&&g&&this.start(f)}),a=()=>{const{dragConstraints:f}=this.getProps();Ur(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,c=l.addEventListener("measure",a);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),Se.read(a);const d=cn(window,"resize",()=>this.scalePositionWithinConstraints()),h=l.addEventListener("didUpdate",({delta:f,hasLayoutChanged:m})=>{this.isDragging&&m&&(Rt(g=>{const y=this.getAxisMotionValue(g);y&&(this.originPoint[g]+=f[g].translate,y.set(y.get()+f[g].translate))}),this.visualElement.render())});return()=>{d(),o(),c(),h&&h()}}getProps(){const r=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:a=!1,dragPropagation:l=!1,dragConstraints:c=!1,dragElastic:d=qu,dragMomentum:h=!0}=r;return{...r,drag:o,dragDirectionLock:a,dragPropagation:l,dragConstraints:c,dragElastic:d,dragMomentum:h}}}function Aa(n,r,o){return(r===!0||r===n)&&(o===null||o===n)}function bw(n,r=10){let o=null;return Math.abs(n.y)>r?o="y":Math.abs(n.x)>r&&(o="x"),o}class ww extends Un{constructor(r){super(r),this.removeGroupControls=it,this.removeListeners=it,this.controls=new xw(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||it}unmount(){this.removeGroupControls(),this.removeListeners()}}const Np=n=>(r,o)=>{n&&Se.postRender(()=>n(r,o))};class kw extends Un{constructor(){super(...arguments),this.removePointerDownListener=it}onPointerDown(r){this.session=new O0(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:V0(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:o,onPan:a,onPanEnd:l}=this.node.getProps();return{onSessionStart:Np(r),onStart:Np(o),onMove:a,onEnd:(c,d)=>{delete this.session,l&&Se.postRender(()=>l(c,d))}}}mount(){this.removePointerDownListener=mn(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ns=C.createContext(null);function Sw(){const n=C.useContext(ns);if(n===null)return[!0,null];const{isPresent:r,onExitComplete:o,register:a}=n,l=C.useId();C.useEffect(()=>a(l),[]);const c=C.useCallback(()=>o&&o(l),[l,o]);return!r&&o?[!1,c]:[!0]}const Ec=C.createContext({}),I0=C.createContext({}),La={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Rp(n,r){return r.max===r.min?0:n/(r.max-r.min)*100}const Uo={correct:(n,r)=>{if(!r.target)return n;if(typeof n=="string")if(ie.test(n))n=parseFloat(n);else return n;const o=Rp(n,r.target.x),a=Rp(n,r.target.y);return`${o}% ${a}%`}},Pw={correct:(n,{treeScale:r,projectionDelta:o})=>{const a=n,l=Bn.parse(n);if(l.length>5)return a;const c=Bn.createTransformer(n),d=typeof l[0]!="number"?1:0,h=o.x.scale*r.x,f=o.y.scale*r.y;l[0+d]/=h,l[1+d]/=f;const m=_e(h,f,.5);return typeof l[2+d]=="number"&&(l[2+d]/=m),typeof l[3+d]=="number"&&(l[3+d]/=m),c(l)}},Ua={};function Tw(n){Object.assign(Ua,n)}const{schedule:Oc,cancel:TP}=Im(queueMicrotask,!1);class Cw extends C.Component{componentDidMount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:a,layoutId:l}=this.props,{projection:c}=r;Tw(Ew),c&&(o.group&&o.group.add(c),a&&a.register&&l&&a.register(c),c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,onExitComplete:()=>this.safeToRemove()})),La.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:o,visualElement:a,drag:l,isPresent:c}=this.props,d=a.projection;return d&&(d.isPresent=c,l||r.layoutDependency!==o||o===void 0?d.willUpdate():this.safeToRemove(),r.isPresent!==c&&(c?d.promote():d.relegate()||Se.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:r}=this.props.visualElement;r&&(r.root.didUpdate(),Oc.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:a}=this.props,{projection:l}=r;l&&(l.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(l),a&&a.deregister&&a.deregister(l))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function B0(n){const[r,o]=Sw(),a=C.useContext(Ec);return b.jsx(Cw,{...n,layoutGroup:a,switchLayoutGroup:C.useContext(I0),isPresent:r,safeToRemove:o})}const Ew={borderRadius:{...Uo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Uo,borderTopRightRadius:Uo,borderBottomLeftRadius:Uo,borderBottomRightRadius:Uo,boxShadow:Pw},$0=["TopLeft","TopRight","BottomLeft","BottomRight"],Ow=$0.length,Mp=n=>typeof n=="string"?parseFloat(n):n,Dp=n=>typeof n=="number"||ie.test(n);function Aw(n,r,o,a,l,c){l?(n.opacity=_e(0,o.opacity!==void 0?o.opacity:1,jw(a)),n.opacityExit=_e(r.opacity!==void 0?r.opacity:1,0,Nw(a))):c&&(n.opacity=_e(r.opacity!==void 0?r.opacity:1,o.opacity!==void 0?o.opacity:1,a));for(let d=0;d<Ow;d++){const h=`border${$0[d]}Radius`;let f=_p(r,h),m=_p(o,h);if(f===void 0&&m===void 0)continue;f||(f=0),m||(m=0),f===0||m===0||Dp(f)===Dp(m)?(n[h]=Math.max(_e(Mp(f),Mp(m),a),0),(Yt.test(m)||Yt.test(f))&&(n[h]+="%")):n[h]=m}(r.rotate||o.rotate)&&(n.rotate=_e(r.rotate||0,o.rotate||0,a))}function _p(n,r){return n[r]!==void 0?n[r]:n.borderRadius}const jw=H0(0,.5,Km),Nw=H0(.5,.95,it);function H0(n,r,o){return a=>a<n?0:a>r?1:o(Xr(n,r,a))}function Lp(n,r){n.min=r.min,n.max=r.max}function Nt(n,r){Lp(n.x,r.x),Lp(n.y,r.y)}function zp(n,r){n.translate=r.translate,n.scale=r.scale,n.originPoint=r.originPoint,n.origin=r.origin}function Fp(n,r,o,a,l){return n-=r,n=Ha(n,1/o,a),l!==void 0&&(n=Ha(n,1/l,a)),n}function Rw(n,r=0,o=1,a=.5,l,c=n,d=n){if(Yt.test(r)&&(r=parseFloat(r),r=_e(d.min,d.max,r/100)-d.min),typeof r!="number")return;let h=_e(c.min,c.max,a);n===c&&(h-=r),n.min=Fp(n.min,r,o,h,l),n.max=Fp(n.max,r,o,h,l)}function Vp(n,r,[o,a,l],c,d){Rw(n,r[o],r[a],r[l],r.scale,c,d)}const Mw=["x","scaleX","originX"],Dw=["y","scaleY","originY"];function Ip(n,r,o,a){Vp(n.x,r,Mw,o?o.x:void 0,a?a.x:void 0),Vp(n.y,r,Dw,o?o.y:void 0,a?a.y:void 0)}function Bp(n){return n.translate===0&&n.scale===1}function U0(n){return Bp(n.x)&&Bp(n.y)}function $p(n,r){return n.min===r.min&&n.max===r.max}function _w(n,r){return $p(n.x,r.x)&&$p(n.y,r.y)}function Hp(n,r){return Math.round(n.min)===Math.round(r.min)&&Math.round(n.max)===Math.round(r.max)}function q0(n,r){return Hp(n.x,r.x)&&Hp(n.y,r.y)}function Up(n){return Pt(n.x)/Pt(n.y)}function qp(n,r){return n.translate===r.translate&&n.scale===r.scale&&n.originPoint===r.originPoint}class Lw{constructor(){this.members=[]}add(r){Sc(this.members,r),r.scheduleRender()}remove(r){if(Pc(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(r){const o=this.members.findIndex(l=>r===l);if(o===0)return!1;let a;for(let l=o;l>=0;l--){const c=this.members[l];if(c.isPresent!==!1){a=c;break}}return a?(this.promote(a),!0):!1}promote(r,o){const a=this.lead;if(r!==a&&(this.prevLead=a,this.lead=r,r.show(),a)){a.instance&&a.scheduleRender(),r.scheduleRender(),r.resumeFrom=a,o&&(r.resumeFrom.preserveOpacity=!0),a.snapshot&&(r.snapshot=a.snapshot,r.snapshot.latestValues=a.animationValues||a.latestValues),r.root&&r.root.isUpdating&&(r.isLayoutDirty=!0);const{crossfade:l}=r.options;l===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(r=>{const{options:o,resumingFrom:a}=r;o.onExitComplete&&o.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(r=>{r.instance&&r.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function zw(n,r,o){let a="";const l=n.x.translate/r.x,c=n.y.translate/r.y,d=(o==null?void 0:o.z)||0;if((l||c||d)&&(a=`translate3d(${l}px, ${c}px, ${d}px) `),(r.x!==1||r.y!==1)&&(a+=`scale(${1/r.x}, ${1/r.y}) `),o){const{transformPerspective:m,rotate:g,rotateX:y,rotateY:x,skewX:k,skewY:w}=o;m&&(a=`perspective(${m}px) ${a}`),g&&(a+=`rotate(${g}deg) `),y&&(a+=`rotateX(${y}deg) `),x&&(a+=`rotateY(${x}deg) `),k&&(a+=`skewX(${k}deg) `),w&&(a+=`skewY(${w}deg) `)}const h=n.x.scale*r.x,f=n.y.scale*r.y;return(h!==1||f!==1)&&(a+=`scale(${h}, ${f})`),a||"none"}const Fw=(n,r)=>n.depth-r.depth;class Vw{constructor(){this.children=[],this.isDirty=!1}add(r){Sc(this.children,r),this.isDirty=!0}remove(r){Pc(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(Fw),this.isDirty=!1,this.children.forEach(r)}}function za(n){const r=ot(n)?n.get():n;return jb(r)?r.toValue():r}function Iw(n,r){const o=Xt.now(),a=({timestamp:l})=>{const c=l-o;c>=r&&(In(a),n(c-r))};return Se.read(a,!0),()=>In(a)}function Bw(n){return n instanceof SVGElement&&n.tagName!=="svg"}function $w(n,r,o){const a=ot(n)?n:ri(n);return a.start(kc("",a,r,o)),a.animation}const ar={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Go=typeof window<"u"&&window.MotionDebug!==void 0,vu=["","X","Y","Z"],Hw={visibility:"hidden"},Wp=1e3;let Uw=0;function xu(n,r,o,a){const{latestValues:l}=r;l[n]&&(o[n]=l[n],r.setStaticValue(n,0),a&&(a[n]=0))}function W0(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:r}=n.options;if(!r)return;const o=P0(r);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:l,layoutId:c}=n.options;window.MotionCancelOptimisedAnimation(o,"transform",Se,!(l||c))}const{parent:a}=n;a&&!a.hasCheckedOptimisedAppear&&W0(a)}function K0({attachResizeListener:n,defaultParent:r,measureScroll:o,checkIsScrollRoot:a,resetTransform:l}){return class{constructor(d={},h=r==null?void 0:r()){this.id=Uw++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Go&&(ar.totalNodes=ar.resolvedTargetDeltas=ar.recalculatedProjection=0),this.nodes.forEach(Kw),this.nodes.forEach(Zw),this.nodes.forEach(Jw),this.nodes.forEach(Gw),Go&&window.MotionDebug.record(ar)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new Vw)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Tc),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const f=this.eventHandlers.get(d);f&&f.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d,h=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Bw(d),this.instance=d;const{layoutId:f,layout:m,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),h&&(m||f)&&(this.isLayoutDirty=!0),n){let y;const x=()=>this.root.updateBlockedByResize=!1;n(d,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=Iw(x,250),La.hasAnimatedSinceResize&&(La.hasAnimatedSinceResize=!1,this.nodes.forEach(Gp))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&g&&(f||m)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:x,hasRelativeTargetChanged:k,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||ok,{onLayoutAnimationStart:T,onLayoutAnimationComplete:O}=g.getProps(),M=!this.targetLayout||!q0(this.targetLayout,w)||k,D=!x&&k;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||D||x&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(y,D);const z={...lc(S,"layout"),onPlay:T,onComplete:O};(g.shouldReduceMotion||this.options.layoutRoot)&&(z.delay=0,z.type=!1),this.startAnimation(z)}else x||Gp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,In(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ek),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&W0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const y=this.path[g];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:h,layout:f}=this.options;if(h===void 0&&!f)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Kp);return}this.isUpdating||this.nodes.forEach(Xw),this.isUpdating=!1,this.nodes.forEach(Qw),this.nodes.forEach(qw),this.nodes.forEach(Ww),this.clearAllSnapshots();const h=Xt.now();Ze.delta=gn(0,1e3/60,h-Ze.timestamp),Ze.timestamp=h,Ze.isProcessing=!0,cu.update.process(Ze),cu.preRender.process(Ze),cu.render.process(Ze),Ze.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Oc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Yw),this.sharedNodes.forEach(tk)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Be(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h){const f=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:f,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!l)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!U0(this.projectionDelta),f=this.getTransformTemplate(),m=f?f(this.latestValues,""):void 0,g=m!==this.prevTransformTemplateValue;d&&(h||ir(this.latestValues)||g)&&(l(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let f=this.removeElementScroll(h);return d&&(f=this.removeTransform(f)),ik(f),{animationId:this.root.animationId,measuredBox:h,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:h}=this.options;if(!h)return Be();const f=h.measureViewportBox();if(!(((d=this.scroll)===null||d===void 0?void 0:d.wasRoot)||this.path.some(ak))){const{scroll:g}=this.root;g&&(Wr(f.x,g.offset.x),Wr(f.y,g.offset.y))}return f}removeElementScroll(d){var h;const f=Be();if(Nt(f,d),!((h=this.scroll)===null||h===void 0)&&h.wasRoot)return f;for(let m=0;m<this.path.length;m++){const g=this.path[m],{scroll:y,options:x}=g;g!==this.root&&y&&x.layoutScroll&&(y.wasRoot&&Nt(f,d),Wr(f.x,y.offset.x),Wr(f.y,y.offset.y))}return f}applyTransform(d,h=!1){const f=Be();Nt(f,d);for(let m=0;m<this.path.length;m++){const g=this.path[m];!h&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Kr(f,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),ir(g.latestValues)&&Kr(f,g.latestValues)}return ir(this.latestValues)&&Kr(f,this.latestValues),f}removeTransform(d){const h=Be();Nt(h,d);for(let f=0;f<this.path.length;f++){const m=this.path[f];if(!m.instance||!ir(m.latestValues))continue;Wu(m.latestValues)&&m.updateSnapshot();const g=Be(),y=m.measurePageBox();Nt(g,y),Ip(h,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,g)}return ir(this.latestValues)&&Ip(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ze.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var h;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==f;if(!(d||m&&this.isSharedProjectionDirty||this.isProjectionDirty||!((h=this.parent)===null||h===void 0)&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:x}=this.options;if(!(!this.layout||!(y||x))){if(this.resolvedRelativeTargetAt=Ze.timestamp,!this.targetDelta&&!this.relativeTarget){const k=this.getClosestProjectingParent();k&&k.layout&&this.animationProgress!==1?(this.relativeParent=k,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Be(),this.relativeTargetOrigin=Be(),Zo(this.relativeTargetOrigin,this.layout.layoutBox,k.layout.layoutBox),Nt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Be(),this.targetWithTransforms=Be()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),sw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Nt(this.target,this.layout.layoutBox),z0(this.target,this.targetDelta)):Nt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const k=this.getClosestProjectingParent();k&&!!k.resumingFrom==!!this.resumingFrom&&!k.options.layoutScroll&&k.target&&this.animationProgress!==1?(this.relativeParent=k,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Be(),this.relativeTargetOrigin=Be(),Zo(this.relativeTargetOrigin,this.target,k.target),Nt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Go&&ar.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Wu(this.parent.latestValues)||L0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var d;const h=this.getLead(),f=!!this.resumingFrom||this!==h;let m=!0;if((this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty)&&(m=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===Ze.timestamp&&(m=!1),m)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;Nt(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,k=this.treeScale.y;gw(this.layoutCorrected,this.treeScale,this.path,f),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=Be());const{target:w}=h;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(zp(this.prevProjectionDelta.x,this.projectionDelta.x),zp(this.prevProjectionDelta.y,this.projectionDelta.y)),Qo(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==k||!qp(this.projectionDelta.x,this.prevProjectionDelta.x)||!qp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w)),Go&&ar.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)===null||h===void 0||h.scheduleRender(),d){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=qr(),this.projectionDelta=qr(),this.projectionDeltaWithTransform=qr()}setAnimationOrigin(d,h=!1){const f=this.snapshot,m=f?f.latestValues:{},g={...this.latestValues},y=qr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const x=Be(),k=f?f.source:void 0,w=this.layout?this.layout.source:void 0,S=k!==w,T=this.getStack(),O=!T||T.members.length<=1,M=!!(S&&!O&&this.options.crossfade===!0&&!this.path.some(rk));this.animationProgress=0;let D;this.mixTargetDelta=z=>{const L=z/1e3;Yp(y.x,d.x,L),Yp(y.y,d.y,L),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Zo(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),nk(this.relativeTarget,this.relativeTargetOrigin,x,L),D&&_w(this.relativeTarget,D)&&(this.isProjectionDirty=!1),D||(D=Be()),Nt(D,this.relativeTarget)),S&&(this.animationValues=g,Aw(g,m,this.latestValues,L,M,O)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(In(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Se.update(()=>{La.hasAnimatedSinceResize=!0,this.currentAnimation=$w(0,Wp,{...d,onUpdate:h=>{this.mixTargetDelta(h),d.onUpdate&&d.onUpdate(h)},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Wp),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:f,layout:m,latestValues:g}=d;if(!(!h||!f||!m)){if(this!==d&&this.layout&&m&&G0(this.options.animationType,this.layout.layoutBox,m.layoutBox)){f=this.target||Be();const y=Pt(this.layout.layoutBox.x);f.x.min=d.target.x.min,f.x.max=f.x.min+y;const x=Pt(this.layout.layoutBox.y);f.y.min=d.target.y.min,f.y.max=f.y.min+x}Nt(h,f),Kr(h,g),Qo(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new Lw),this.sharedNodes.get(d).add(h);const m=h.options.initialPromotionConfig;h.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var d;const{layoutId:h}=this.options;return h?((d=this.getStack())===null||d===void 0?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:h}=this.options;return h?(d=this.getStack())===null||d===void 0?void 0:d.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:f}={}){const m=this.getStack();m&&m.promote(this,f),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:f}=d;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(h=!0),!h)return;const m={};f.z&&xu("z",d,m,this.animationValues);for(let g=0;g<vu.length;g++)xu(`rotate${vu[g]}`,d,m,this.animationValues),xu(`skew${vu[g]}`,d,m,this.animationValues);d.render();for(const g in m)d.setStaticValue(g,m[g]),this.animationValues&&(this.animationValues[g]=m[g]);d.scheduleRender()}getProjectionStyles(d){var h,f;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Hw;const m={visibility:""},g=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,m.opacity="",m.pointerEvents=za(d==null?void 0:d.pointerEvents)||"",m.transform=g?g(this.latestValues,""):"none",m;const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){const S={};return this.options.layoutId&&(S.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,S.pointerEvents=za(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!ir(this.latestValues)&&(S.transform=g?g({},""):"none",this.hasProjected=!1),S}const x=y.animationValues||y.latestValues;this.applyTransformsToTarget(),m.transform=zw(this.projectionDeltaWithTransform,this.treeScale,x),g&&(m.transform=g(x,m.transform));const{x:k,y:w}=this.projectionDelta;m.transformOrigin=`${k.origin*100}% ${w.origin*100}% 0`,y.animationValues?m.opacity=y===this?(f=(h=x.opacity)!==null&&h!==void 0?h:this.latestValues.opacity)!==null&&f!==void 0?f:1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:m.opacity=y===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const S in Ua){if(x[S]===void 0)continue;const{correct:T,applyTo:O}=Ua[S],M=m.transform==="none"?x[S]:T(x[S],y);if(O){const D=O.length;for(let z=0;z<D;z++)m[O[z]]=M}else m[S]=M}return this.options.layoutId&&(m.pointerEvents=y===this?za(d==null?void 0:d.pointerEvents)||"":"none"),m}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)===null||h===void 0?void 0:h.stop()}),this.root.nodes.forEach(Kp),this.root.sharedNodes.clear()}}}function qw(n){n.updateLayout()}function Ww(n){var r;const o=((r=n.resumeFrom)===null||r===void 0?void 0:r.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&o&&n.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:l}=n.layout,{animationType:c}=n.options,d=o.source!==n.layout.source;c==="size"?Rt(y=>{const x=d?o.measuredBox[y]:o.layoutBox[y],k=Pt(x);x.min=a[y].min,x.max=x.min+k}):G0(c,o.layoutBox,a)&&Rt(y=>{const x=d?o.measuredBox[y]:o.layoutBox[y],k=Pt(a[y]);x.max=x.min+k,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[y].max=n.relativeTarget[y].min+k)});const h=qr();Qo(h,a,o.layoutBox);const f=qr();d?Qo(f,n.applyTransform(l,!0),o.measuredBox):Qo(f,a,o.layoutBox);const m=!U0(h);let g=!1;if(!n.resumeFrom){const y=n.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:x,layout:k}=y;if(x&&k){const w=Be();Zo(w,o.layoutBox,x.layoutBox);const S=Be();Zo(S,a,k.layoutBox),q0(w,S)||(g=!0),y.options.layoutRoot&&(n.relativeTarget=S,n.relativeTargetOrigin=w,n.relativeParent=y)}}}n.notifyListeners("didUpdate",{layout:a,snapshot:o,delta:f,layoutDelta:h,hasLayoutChanged:m,hasRelativeTargetChanged:g})}else if(n.isLead()){const{onExitComplete:a}=n.options;a&&a()}n.options.transition=void 0}function Kw(n){Go&&ar.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function Gw(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function Yw(n){n.clearSnapshot()}function Kp(n){n.clearMeasurements()}function Xw(n){n.isLayoutDirty=!1}function Qw(n){const{visualElement:r}=n.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),n.resetTransform()}function Gp(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function Zw(n){n.resolveTargetDelta()}function Jw(n){n.calcProjection()}function ek(n){n.resetSkewAndRotation()}function tk(n){n.removeLeadSnapshot()}function Yp(n,r,o){n.translate=_e(r.translate,0,o),n.scale=_e(r.scale,1,o),n.origin=r.origin,n.originPoint=r.originPoint}function Xp(n,r,o,a){n.min=_e(r.min,o.min,a),n.max=_e(r.max,o.max,a)}function nk(n,r,o,a){Xp(n.x,r.x,o.x,a),Xp(n.y,r.y,o.y,a)}function rk(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const ok={duration:.45,ease:[.4,0,.1,1]},Qp=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Zp=Qp("applewebkit/")&&!Qp("chrome/")?Math.round:it;function Jp(n){n.min=Zp(n.min),n.max=Zp(n.max)}function ik(n){Jp(n.x),Jp(n.y)}function G0(n,r,o){return n==="position"||n==="preserve-aspect"&&!aw(Up(r),Up(o),.2)}function ak(n){var r;return n!==n.root&&((r=n.scroll)===null||r===void 0?void 0:r.wasRoot)}const sk=K0({attachResizeListener:(n,r)=>cn(n,"resize",r),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),bu={current:void 0},Y0=K0({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!bu.current){const n=new sk({});n.mount(window),n.setOptions({layoutScroll:!0}),bu.current=n}return bu.current},resetTransform:(n,r)=>{n.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),lk={pan:{Feature:kw},drag:{Feature:ww,ProjectionNode:Y0,MeasureLayout:B0}};function em(n,r){const o=r?"pointerenter":"pointerleave",a=r?"onHoverStart":"onHoverEnd",l=(c,d)=>{if(c.pointerType==="touch"||R0())return;const h=n.getProps();n.animationState&&h.whileHover&&n.animationState.setActive("whileHover",r);const f=h[a];f&&Se.postRender(()=>f(c,d))};return mn(n.current,o,l,{passive:!n.getProps()[a]})}class uk extends Un{mount(){this.unmount=pn(em(this.node,!0),em(this.node,!1))}unmount(){}}class ck extends Un{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=pn(cn(this.node.current,"focus",()=>this.onFocus()),cn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const X0=(n,r)=>r?n===r?!0:X0(n,r.parentElement):!1;function wu(n,r){if(!r)return;const o=new PointerEvent("pointer"+n);r(o,ts(o))}class dk extends Un{constructor(){super(...arguments),this.removeStartListeners=it,this.removeEndListeners=it,this.removeAccessibleListeners=it,this.startPointerPress=(r,o)=>{if(this.isPressing)return;this.removeEndListeners();const a=this.node.getProps(),c=mn(window,"pointerup",(h,f)=>{if(!this.checkPressEnd())return;const{onTap:m,onTapCancel:g,globalTapTarget:y}=this.node.getProps(),x=!y&&!X0(this.node.current,h.target)?g:m;x&&Se.update(()=>x(h,f))},{passive:!(a.onTap||a.onPointerUp)}),d=mn(window,"pointercancel",(h,f)=>this.cancelPress(h,f),{passive:!(a.onTapCancel||a.onPointerCancel)});this.removeEndListeners=pn(c,d),this.startPress(r,o)},this.startAccessiblePress=()=>{const r=c=>{if(c.key!=="Enter"||this.isPressing)return;const d=h=>{h.key!=="Enter"||!this.checkPressEnd()||wu("up",(f,m)=>{const{onTap:g}=this.node.getProps();g&&Se.postRender(()=>g(f,m))})};this.removeEndListeners(),this.removeEndListeners=cn(this.node.current,"keyup",d),wu("down",(h,f)=>{this.startPress(h,f)})},o=cn(this.node.current,"keydown",r),a=()=>{this.isPressing&&wu("cancel",(c,d)=>this.cancelPress(c,d))},l=cn(this.node.current,"blur",a);this.removeAccessibleListeners=pn(o,l)}}startPress(r,o){this.isPressing=!0;const{onTapStart:a,whileTap:l}=this.node.getProps();l&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),a&&Se.postRender(()=>a(r,o))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!R0()}cancelPress(r,o){if(!this.checkPressEnd())return;const{onTapCancel:a}=this.node.getProps();a&&Se.postRender(()=>a(r,o))}mount(){const r=this.node.getProps(),o=mn(r.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(r.onTapStart||r.onPointerStart)}),a=cn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=pn(o,a)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Gu=new WeakMap,ku=new WeakMap,fk=n=>{const r=Gu.get(n.target);r&&r(n)},hk=n=>{n.forEach(fk)};function pk({root:n,...r}){const o=n||document;ku.has(o)||ku.set(o,{});const a=ku.get(o),l=JSON.stringify(r);return a[l]||(a[l]=new IntersectionObserver(hk,{root:n,...r})),a[l]}function mk(n,r,o){const a=pk(r);return Gu.set(n,o),a.observe(n),()=>{Gu.delete(n),a.unobserve(n)}}const gk={some:0,all:1};class yk extends Un{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:r={}}=this.node.getProps(),{root:o,margin:a,amount:l="some",once:c}=r,d={root:o?o.current:void 0,rootMargin:a,threshold:typeof l=="number"?l:gk[l]},h=f=>{const{isIntersecting:m}=f;if(this.isInView===m||(this.isInView=m,c&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:g,onViewportLeave:y}=this.node.getProps(),x=m?g:y;x&&x(f)};return mk(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:o}=this.node;["amount","margin","root"].some(vk(r,o))&&this.startObserver()}unmount(){}}function vk({viewport:n={}},{viewport:r={}}={}){return o=>n[o]!==r[o]}const xk={inView:{Feature:yk},tap:{Feature:dk},focus:{Feature:ck},hover:{Feature:uk}},bk={layout:{ProjectionNode:Y0,MeasureLayout:B0}},Ac=C.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"}),rs=C.createContext({}),jc=typeof window<"u",Q0=jc?C.useLayoutEffect:C.useEffect,Z0=C.createContext({strict:!1});function wk(n,r,o,a,l){var c,d;const{visualElement:h}=C.useContext(rs),f=C.useContext(Z0),m=C.useContext(ns),g=C.useContext(Ac).reducedMotion,y=C.useRef();a=a||f.renderer,!y.current&&a&&(y.current=a(n,{visualState:r,parent:h,props:o,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:g}));const x=y.current,k=C.useContext(I0);x&&!x.projection&&l&&(x.type==="html"||x.type==="svg")&&kk(y.current,o,l,k);const w=C.useRef(!1);C.useInsertionEffect(()=>{x&&w.current&&x.update(o,m)});const S=o[S0],T=C.useRef(!!S&&!(!((c=window.MotionHandoffIsComplete)===null||c===void 0)&&c.call(window,S))&&((d=window.MotionHasOptimisedAnimation)===null||d===void 0?void 0:d.call(window,S)));return Q0(()=>{x&&(w.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),Oc.render(x.render),T.current&&x.animationState&&x.animationState.animateChanges())}),C.useEffect(()=>{x&&(!T.current&&x.animationState&&x.animationState.animateChanges(),T.current&&(queueMicrotask(()=>{var O;(O=window.MotionHandoffMarkAsComplete)===null||O===void 0||O.call(window,S)}),T.current=!1))}),x}function kk(n,r,o,a){const{layoutId:l,layout:c,drag:d,dragConstraints:h,layoutScroll:f,layoutRoot:m}=r;n.projection=new o(n.latestValues,r["data-framer-portal-id"]?void 0:J0(n.parent)),n.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!d||h&&Ur(h),visualElement:n,animationType:typeof c=="string"?c:"both",initialPromotionConfig:a,layoutScroll:f,layoutRoot:m})}function J0(n){if(n)return n.options.allowProjection!==!1?n.projection:J0(n.parent)}function Sk(n,r,o){return C.useCallback(a=>{a&&n.mount&&n.mount(a),r&&(a?r.mount(a):r.unmount()),o&&(typeof o=="function"?o(a):Ur(o)&&(o.current=a))},[r])}function os(n){return Za(n.animate)||sc.some(r=>ei(n[r]))}function eg(n){return!!(os(n)||n.variants)}function Pk(n,r){if(os(n)){const{initial:o,animate:a}=n;return{initial:o===!1||ei(o)?o:void 0,animate:ei(a)?a:void 0}}return n.inherit!==!1?r:{}}function Tk(n){const{initial:r,animate:o}=Pk(n,C.useContext(rs));return C.useMemo(()=>({initial:r,animate:o}),[tm(r),tm(o)])}function tm(n){return Array.isArray(n)?n.join(" "):n}const nm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Qr={};for(const n in nm)Qr[n]={isEnabled:r=>nm[n].some(o=>!!r[o])};function Ck(n){for(const r in n)Qr[r]={...Qr[r],...n[r]}}const Ek=Symbol.for("motionComponentSymbol");function Ok({preloadedFeatures:n,createVisualElement:r,useRender:o,useVisualState:a,Component:l}){n&&Ck(n);function c(h,f){let m;const g={...C.useContext(Ac),...h,layoutId:Ak(h)},{isStatic:y}=g,x=Tk(h),k=a(h,y);if(!y&&jc){jk();const w=Nk(g);m=w.MeasureLayout,x.visualElement=wk(l,k,g,r,w.ProjectionNode)}return b.jsxs(rs.Provider,{value:x,children:[m&&x.visualElement?b.jsx(m,{visualElement:x.visualElement,...g}):null,o(l,h,Sk(k,x.visualElement,f),k,y,x.visualElement)]})}const d=C.forwardRef(c);return d[Ek]=l,d}function Ak({layoutId:n}){const r=C.useContext(Ec).id;return r&&n!==void 0?r+"-"+n:n}function jk(n,r){C.useContext(Z0).strict}function Nk(n){const{drag:r,layout:o}=Qr;if(!r&&!o)return{};const a={...r,...o};return{MeasureLayout:r!=null&&r.isEnabled(n)||o!=null&&o.isEnabled(n)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}const Rk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Nc(n){return typeof n!="string"||n.includes("-")?!1:!!(Rk.indexOf(n)>-1||/[A-Z]/u.test(n))}function tg(n,{style:r,vars:o},a,l){Object.assign(n.style,r,l&&l.getProjectionStyles(a));for(const c in o)n.style.setProperty(c,o[c])}const ng=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function rg(n,r,o,a){tg(n,r,void 0,a);for(const l in r.attrs)n.setAttribute(ng.has(l)?l:Cc(l),r.attrs[l])}function og(n,{layout:r,layoutId:o}){return dr.has(n)||n.startsWith("origin")||(r||o!==void 0)&&(!!Ua[n]||n==="opacity")}function Rc(n,r,o){var a;const{style:l}=n,c={};for(const d in l)(ot(l[d])||r.style&&ot(r.style[d])||og(d,n)||((a=o==null?void 0:o.getValue(d))===null||a===void 0?void 0:a.liveStyle)!==void 0)&&(c[d]=l[d]);return c}function ig(n,r,o){const a=Rc(n,r,o);for(const l in n)if(ot(n[l])||ot(r[l])){const c=ci.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;a[c]=n[l]}return a}function Mc(n){const r=C.useRef(null);return r.current===null&&(r.current=n()),r.current}function Mk({scrapeMotionValuesFromProps:n,createRenderState:r,onMount:o},a,l,c){const d={latestValues:Dk(a,l,c,n),renderState:r()};return o&&(d.mount=h=>o(a,h,d)),d}const ag=n=>(r,o)=>{const a=C.useContext(rs),l=C.useContext(ns),c=()=>Mk(n,r,a,l);return o?c():Mc(c)};function Dk(n,r,o,a){const l={},c=a(n,{});for(const x in c)l[x]=za(c[x]);let{initial:d,animate:h}=n;const f=os(n),m=eg(n);r&&m&&!f&&n.inherit!==!1&&(d===void 0&&(d=r.initial),h===void 0&&(h=r.animate));let g=o?o.initial===!1:!1;g=g||d===!1;const y=g?h:d;if(y&&typeof y!="boolean"&&!Za(y)){const x=Array.isArray(y)?y:[y];for(let k=0;k<x.length;k++){const w=ic(n,x[k]);if(w){const{transitionEnd:S,transition:T,...O}=w;for(const M in O){let D=O[M];if(Array.isArray(D)){const z=g?D.length-1:0;D=D[z]}D!==null&&(l[M]=D)}for(const M in S)l[M]=S[M]}}}return l}const Dc=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),sg=()=>({...Dc(),attrs:{}}),lg=(n,r)=>r&&typeof n=="number"?r.transform(n):n,_k={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Lk=ci.length;function zk(n,r,o){let a="",l=!0;for(let c=0;c<Lk;c++){const d=ci[c],h=n[d];if(h===void 0)continue;let f=!0;if(typeof h=="number"?f=h===(d.startsWith("scale")?1:0):f=parseFloat(h)===0,!f||o){const m=lg(h,mc[d]);if(!f){l=!1;const g=_k[d]||d;a+=`${g}(${m}) `}o&&(r[d]=m)}}return a=a.trim(),o?a=o(r,l?"":a):l&&(a="none"),a}function _c(n,r,o){const{style:a,vars:l,transformOrigin:c}=n;let d=!1,h=!1;for(const f in r){const m=r[f];if(dr.has(f)){d=!0;continue}else if(Zm(f)){l[f]=m;continue}else{const g=lg(m,mc[f]);f.startsWith("origin")?(h=!0,c[f]=g):a[f]=g}}if(r.transform||(d||o?a.transform=zk(r,n.transform,o):a.transform&&(a.transform="none")),h){const{originX:f="50%",originY:m="50%",originZ:g=0}=c;a.transformOrigin=`${f} ${m} ${g}`}}function rm(n,r,o){return typeof n=="string"?n:ie.transform(r+o*n)}function Fk(n,r,o){const a=rm(r,n.x,n.width),l=rm(o,n.y,n.height);return`${a} ${l}`}const Vk={offset:"stroke-dashoffset",array:"stroke-dasharray"},Ik={offset:"strokeDashoffset",array:"strokeDasharray"};function Bk(n,r,o=1,a=0,l=!0){n.pathLength=1;const c=l?Vk:Ik;n[c.offset]=ie.transform(-a);const d=ie.transform(r),h=ie.transform(o);n[c.array]=`${d} ${h}`}function Lc(n,{attrX:r,attrY:o,attrScale:a,originX:l,originY:c,pathLength:d,pathSpacing:h=1,pathOffset:f=0,...m},g,y){if(_c(n,m,y),g){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:x,style:k,dimensions:w}=n;x.transform&&(w&&(k.transform=x.transform),delete x.transform),w&&(l!==void 0||c!==void 0||k.transform)&&(k.transformOrigin=Fk(w,l!==void 0?l:.5,c!==void 0?c:.5)),r!==void 0&&(x.x=r),o!==void 0&&(x.y=o),a!==void 0&&(x.scale=a),d!==void 0&&Bk(x,d,h,f,!1)}const zc=n=>typeof n=="string"&&n.toLowerCase()==="svg",$k={useVisualState:ag({scrapeMotionValuesFromProps:ig,createRenderState:sg,onMount:(n,r,{renderState:o,latestValues:a})=>{Se.read(()=>{try{o.dimensions=typeof r.getBBox=="function"?r.getBBox():r.getBoundingClientRect()}catch{o.dimensions={x:0,y:0,width:0,height:0}}}),Se.render(()=>{Lc(o,a,zc(r.tagName),n.transformTemplate),rg(r,o)})}})},Hk={useVisualState:ag({scrapeMotionValuesFromProps:Rc,createRenderState:Dc})};function ug(n,r,o){for(const a in r)!ot(r[a])&&!og(a,o)&&(n[a]=r[a])}function Uk({transformTemplate:n},r){return C.useMemo(()=>{const o=Dc();return _c(o,r,n),Object.assign({},o.vars,o.style)},[r])}function qk(n,r){const o=n.style||{},a={};return ug(a,o,n),Object.assign(a,Uk(n,r)),a}function Wk(n,r){const o={},a=qk(n,r);return n.drag&&n.dragListener!==!1&&(o.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(o.tabIndex=0),o.style=a,o}const Kk=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function qa(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||Kk.has(n)}let cg=n=>!qa(n);function Gk(n){n&&(cg=r=>r.startsWith("on")?!qa(r):n(r))}try{Gk(require("@emotion/is-prop-valid").default)}catch{}function Yk(n,r,o){const a={};for(const l in n)l==="values"&&typeof n.values=="object"||(cg(l)||o===!0&&qa(l)||!r&&!qa(l)||n.draggable&&l.startsWith("onDrag"))&&(a[l]=n[l]);return a}function Xk(n,r,o,a){const l=C.useMemo(()=>{const c=sg();return Lc(c,r,zc(a),n.transformTemplate),{...c.attrs,style:{...c.style}}},[r]);if(n.style){const c={};ug(c,n.style,n),l.style={...c,...l.style}}return l}function Qk(n=!1){return(o,a,l,{latestValues:c},d)=>{const f=(Nc(o)?Xk:Wk)(a,c,d,o),m=Yk(a,typeof o=="string",n),g=o!==C.Fragment?{...m,...f,ref:l}:{},{children:y}=a,x=C.useMemo(()=>ot(y)?y.get():y,[y]);return C.createElement(o,{...g,children:x})}}function Zk(n,r){return function(a,{forwardMotionProps:l}={forwardMotionProps:!1}){const d={...Nc(a)?$k:Hk,preloadedFeatures:n,useRender:Qk(l),createVisualElement:r,Component:a};return Ok(d)}}const Yu={current:null},dg={current:!1};function Jk(){if(dg.current=!0,!!jc)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),r=()=>Yu.current=n.matches;n.addListener(r),r()}else Yu.current=!1}function eS(n,r,o){for(const a in r){const l=r[a],c=o[a];if(ot(l))n.addValue(a,l);else if(ot(c))n.addValue(a,ri(l,{owner:n}));else if(c!==l)if(n.hasValue(a)){const d=n.getValue(a);d.liveStyle===!0?d.jump(l):d.hasAnimated||d.set(l)}else{const d=n.getStaticValue(a);n.addValue(a,ri(d!==void 0?d:l,{owner:n}))}}for(const a in o)r[a]===void 0&&n.removeValue(a);return r}const om=new WeakMap,tS=[...t0,rt,Bn],nS=n=>tS.find(e0(n)),im=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class rS{scrapeMotionValuesFromProps(r,o,a){return{}}constructor({parent:r,props:o,presenceContext:a,reducedMotionConfig:l,blockInitialAnimation:c,visualState:d},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=fc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=Xt.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,Se.render(this.render,!1,!0))};const{latestValues:f,renderState:m}=d;this.latestValues=f,this.baseTarget={...f},this.initialValues=o.initial?{...f}:{},this.renderState=m,this.parent=r,this.props=o,this.presenceContext=a,this.depth=r?r.depth+1:0,this.reducedMotionConfig=l,this.options=h,this.blockInitialAnimation=!!c,this.isControllingVariants=os(o),this.isVariantNode=eg(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:g,...y}=this.scrapeMotionValuesFromProps(o,{},this);for(const x in y){const k=y[x];f[x]!==void 0&&ot(k)&&k.set(f[x],!1)}}mount(r){this.current=r,om.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),dg.current||Jk(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Yu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){om.delete(this.current),this.projection&&this.projection.unmount(),In(this.notifyUpdate),In(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const o=this.features[r];o&&(o.unmount(),o.isMounted=!1)}this.current=null}bindToMotionValue(r,o){this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)();const a=dr.has(r),l=o.on("change",h=>{this.latestValues[r]=h,this.props.onUpdate&&Se.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0)}),c=o.on("renderRequest",this.scheduleRender);let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,r,o)),this.valueSubscriptions.set(r,()=>{l(),c(),d&&d(),o.owner&&o.stop()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in Qr){const o=Qr[r];if(!o)continue;const{isEnabled:a,Feature:l}=o;if(!this.features[r]&&l&&a(this.props)&&(this.features[r]=new l(this)),this.features[r]){const c=this.features[r];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Be()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,o){this.latestValues[r]=o}update(r,o){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let a=0;a<im.length;a++){const l=im[a];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const c="on"+l,d=r[c];d&&(this.propEventSubscriptions[l]=this.on(l,d))}this.prevMotionValues=eS(this,this.scrapeMotionValuesFromProps(r,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(r),()=>o.variantChildren.delete(r)}addValue(r,o){const a=this.values.get(r);o!==a&&(a&&this.removeValue(r),this.bindToMotionValue(r,o),this.values.set(r,o),this.latestValues[r]=o.get())}removeValue(r){this.values.delete(r);const o=this.valueSubscriptions.get(r);o&&(o(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,o){if(this.props.values&&this.props.values[r])return this.props.values[r];let a=this.values.get(r);return a===void 0&&o!==void 0&&(a=ri(o===null?void 0:o,{owner:this}),this.addValue(r,a)),a}readValue(r,o){var a;let l=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:(a=this.getBaseTargetFromProps(this.props,r))!==null&&a!==void 0?a:this.readValueFromInstance(this.current,r,this.options);return l!=null&&(typeof l=="string"&&(Xm(l)||Ym(l))?l=parseFloat(l):!nS(l)&&Bn.test(o)&&(l=u0(r,o)),this.setBaseTarget(r,ot(l)?l.get():l)),ot(l)?l.get():l}setBaseTarget(r,o){this.baseTarget[r]=o}getBaseTarget(r){var o;const{initial:a}=this.props;let l;if(typeof a=="string"||typeof a=="object"){const d=ic(this.props,a,(o=this.presenceContext)===null||o===void 0?void 0:o.custom);d&&(l=d[r])}if(a&&l!==void 0)return l;const c=this.getBaseTargetFromProps(this.props,r);return c!==void 0&&!ot(c)?c:this.initialValues[r]!==void 0&&l===void 0?void 0:this.baseTarget[r]}on(r,o){return this.events[r]||(this.events[r]=new Tc),this.events[r].add(o)}notify(r,...o){this.events[r]&&this.events[r].notify(...o)}}class fg extends rS{constructor(){super(...arguments),this.KeyframeResolver=c0}sortInstanceNodePosition(r,o){return r.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(r,o){return r.style?r.style[o]:void 0}removeValueFromRenderState(r,{vars:o,style:a}){delete o[r],delete a[r]}}function oS(n){return window.getComputedStyle(n)}class iS extends fg{constructor(){super(...arguments),this.type="html",this.renderInstance=tg}readValueFromInstance(r,o){if(dr.has(o)){const a=gc(o);return a&&a.default||0}else{const a=oS(r),l=(Zm(o)?a.getPropertyValue(o):a[o])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(r,{transformPagePoint:o}){return F0(r,o)}build(r,o,a){_c(r,o,a.transformTemplate)}scrapeMotionValuesFromProps(r,o,a){return Rc(r,o,a)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;ot(r)&&(this.childSubscription=r.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}class aS extends fg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Be}getBaseTargetFromProps(r,o){return r[o]}readValueFromInstance(r,o){if(dr.has(o)){const a=gc(o);return a&&a.default||0}return o=ng.has(o)?o:Cc(o),r.getAttribute(o)}scrapeMotionValuesFromProps(r,o,a){return ig(r,o,a)}build(r,o,a){Lc(r,o,this.isSVGTag,a.transformTemplate)}renderInstance(r,o,a,l){rg(r,o,a,l)}mount(r){this.isSVGTag=zc(r.tagName),super.mount(r)}}const sS=(n,r)=>Nc(n)?new aS(r):new iS(r,{allowProjection:n!==C.Fragment}),lS=Zk({...Qb,...xk,...lk,...bk},sS),ut=Y1(lS);class uS extends C.Component{getSnapshotBeforeUpdate(r){const o=this.props.childRef.current;if(o&&r.isPresent&&!this.props.isPresent){const a=this.props.sizeRef.current;a.height=o.offsetHeight||0,a.width=o.offsetWidth||0,a.top=o.offsetTop,a.left=o.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function cS({children:n,isPresent:r}){const o=C.useId(),a=C.useRef(null),l=C.useRef({width:0,height:0,top:0,left:0}),{nonce:c}=C.useContext(Ac);return C.useInsertionEffect(()=>{const{width:d,height:h,top:f,left:m}=l.current;if(r||!a.current||!d||!h)return;a.current.dataset.motionPopId=o;const g=document.createElement("style");return c&&(g.nonce=c),document.head.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${h}px !important;
            top: ${f}px !important;
            left: ${m}px !important;
          }
        `),()=>{document.head.removeChild(g)}},[r]),b.jsx(uS,{isPresent:r,childRef:a,sizeRef:l,children:C.cloneElement(n,{ref:a})})}const dS=({children:n,initial:r,isPresent:o,onExitComplete:a,custom:l,presenceAffectsLayout:c,mode:d})=>{const h=Mc(fS),f=C.useId(),m=C.useCallback(y=>{h.set(y,!0);for(const x of h.values())if(!x)return;a&&a()},[h,a]),g=C.useMemo(()=>({id:f,initial:r,isPresent:o,custom:l,onExitComplete:m,register:y=>(h.set(y,!1),()=>h.delete(y))}),c?[Math.random(),m]:[o,m]);return C.useMemo(()=>{h.forEach((y,x)=>h.set(x,!1))},[o]),C.useEffect(()=>{!o&&!h.size&&a&&a()},[o]),d==="popLayout"&&(n=b.jsx(cS,{isPresent:o,children:n})),b.jsx(ns.Provider,{value:g,children:n})};function fS(){return new Map}const ja=n=>n.key||"";function am(n){const r=[];return C.Children.forEach(n,o=>{C.isValidElement(o)&&r.push(o)}),r}const Wa=({children:n,exitBeforeEnter:r,custom:o,initial:a=!0,onExitComplete:l,presenceAffectsLayout:c=!0,mode:d="sync"})=>{const h=C.useMemo(()=>am(n),[n]),f=h.map(ja),m=C.useRef(!0),g=C.useRef(h),y=Mc(()=>new Map),[x,k]=C.useState(h),[w,S]=C.useState(h);Q0(()=>{m.current=!1,g.current=h;for(let M=0;M<w.length;M++){const D=ja(w[M]);f.includes(D)?y.delete(D):y.get(D)!==!0&&y.set(D,!1)}},[w,f.length,f.join("-")]);const T=[];if(h!==x){let M=[...h];for(let D=0;D<w.length;D++){const z=w[D],L=ja(z);f.includes(L)||(M.splice(D,0,z),T.push(z))}d==="wait"&&T.length&&(M=T),S(am(M)),k(h);return}const{forceRender:O}=C.useContext(Ec);return b.jsx(b.Fragment,{children:w.map(M=>{const D=ja(M),z=h===w||f.includes(D),L=()=>{if(y.has(D))y.set(D,!0);else return;let W=!0;y.forEach(q=>{q||(W=!1)}),W&&(O==null||O(),S(g.current),l&&l())};return b.jsx(dS,{isPresent:z,initial:!m.current||a?void 0:!1,custom:z?void 0:o,presenceAffectsLayout:c,mode:d,onExitComplete:z?void 0:L,children:M},D)})})},hS=({isLoggedIn:n,cartItems:r,logout:o})=>{const[a,l]=C.useState(!1),[c,d]=C.useState(!1),h=()=>{l(!a)},f=()=>{d(!c)};return b.jsxs("header",{className:"bg-gray-900 shadow-lg sticky top-0 z-50",children:[b.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[b.jsxs("div",{className:"flex justify-between items-center py-4",children:[b.jsx("div",{className:"text-2xl font-extrabold text-white",children:b.jsx(It,{to:"/",children:"E-Shop"})}),b.jsx("nav",{className:"hidden lg:flex space-x-8",children:["Home","Shop","About","Contact"].map(m=>b.jsx(It,{to:`/${m.toLowerCase()}`,className:"text-gray-300 text-lg font-medium hover:text-yellow-400 transition",children:m},m))}),b.jsxs("div",{className:"flex items-center space-x-4",children:[b.jsx("div",{className:"hidden lg:block",children:b.jsx("input",{type:"text",placeholder:"Search products...",className:"bg-gray-800 text-gray-200 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"})}),b.jsx("button",{className:"lg:hidden text-gray-300 hover:text-yellow-400 transition",onClick:f,children:b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:b.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 3a8 8 0 100 16 8 8 0 000-16zM21 21l-5.197-5.197"})})})]}),b.jsxs("div",{className:"flex items-center space-x-6",children:[n&&b.jsx(It,{to:"/wishlist",className:"text-gray-300 text-lg font-medium hover:text-yellow-400 transition",children:"WishList"}),n&&b.jsxs(It,{to:"/cart",className:"relative text-gray-300 hover:text-yellow-400 transition",children:[b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:b.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8l-1 2m6-2a1 1 0 11-2 0m5 0a1 1 0 11-2 0M1 1l22 22"})}),r.cartNumber>0&&b.jsx("span",{className:"absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center",children:r.cartNumber})]}),n&&b.jsx(It,{to:"/profile",className:"text-gray-300 hover:text-yellow-400 transition",children:b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:b.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5.121 17.804A4 4 0 118.362 19h7.276a4 4 0 113.241-1.196M5.121 17.804A4 4 0 013 15.121V9a9 9 0 0118 0v6.121a4 4 0 01-2.121 2.683M5.121 17.804L12 22l6.879-4.196"})})}),n?b.jsx("button",{onClick:o,className:"text-gray-300 hover:text-yellow-400 transition",children:"Logout"}):b.jsxs(b.Fragment,{children:[b.jsx(It,{className:"text-gray-300 hover:text-yellow-400 transition",to:"/login",children:"Login"}),b.jsx(It,{className:"text-gray-300 hover:text-yellow-400 transition",to:"register",children:"Sign Up"})]}),b.jsx("button",{onClick:h,className:"block lg:hidden focus:outline-none",children:b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-300 hover:text-yellow-400 transition",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:b.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"})})})]})]}),b.jsx(Wa,{children:a&&b.jsx(ut.div,{className:"lg:hidden bg-gray-800 text-gray-300 rounded-md shadow-lg mt-2",initial:{height:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.5},children:b.jsxs("nav",{className:"flex flex-col space-y-2 p-4",children:[["Home","Shop","About","Contact"].map(m=>b.jsx(It,{to:`/${m.toLowerCase()}`,className:"text-gray-300 hover:text-yellow-400 transition",children:m},m)),!n&&b.jsxs(b.Fragment,{children:[b.jsx(It,{className:"text-gray-300 hover:text-yellow-400 transition",to:"/login",children:"Login"}),b.jsx(It,{className:"text-gray-300 hover:text-yellow-400 transition",to:"register",children:"Sign Up"})]})]})})})]}),b.jsx(Wa,{children:c&&b.jsx(ut.div,{className:"lg:hidden bg-gray-800 text-gray-200 p-4",initial:{scaleY:0,opacity:0},animate:{scaleY:1,opacity:1},exit:{scaleY:0,opacity:0},transition:{duration:.3},style:{transformOrigin:"top"},children:b.jsx("input",{type:"text",placeholder:"Search products...",className:"bg-gray-800 text-gray-200 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"})})})]})};function We(n,r){r===void 0&&(r={});var o=r.insertAt;if(n&&typeof document<"u"){var a=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",o==="top"&&a.firstChild?a.insertBefore(l,a.firstChild):a.appendChild(l),l.styleSheet?l.styleSheet.cssText=n:l.appendChild(document.createTextNode(n))}}We(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var ke=function(){return ke=Object.assign||function(n){for(var r,o=1,a=arguments.length;o<a;o++)for(var l in r=arguments[o])Object.prototype.hasOwnProperty.call(r,l)&&(n[l]=r[l]);return n},ke.apply(this,arguments)};function Ka(n){return Ka=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ka(n)}var pS=/^\s+/,mS=/\s+$/;function ee(n,r){if(r=r||{},(n=n||"")instanceof ee)return n;if(!(this instanceof ee))return new ee(n,r);var o=function(a){var l={r:0,g:0,b:0},c=1,d=null,h=null,f=null,m=!1,g=!1;typeof a=="string"&&(a=function(w){w=w.replace(pS,"").replace(mS,"").toLowerCase();var S,T=!1;if(Xu[w])w=Xu[w],T=!0;else if(w=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(S=Bt.rgb.exec(w))?{r:S[1],g:S[2],b:S[3]}:(S=Bt.rgba.exec(w))?{r:S[1],g:S[2],b:S[3],a:S[4]}:(S=Bt.hsl.exec(w))?{h:S[1],s:S[2],l:S[3]}:(S=Bt.hsla.exec(w))?{h:S[1],s:S[2],l:S[3],a:S[4]}:(S=Bt.hsv.exec(w))?{h:S[1],s:S[2],v:S[3]}:(S=Bt.hsva.exec(w))?{h:S[1],s:S[2],v:S[3],a:S[4]}:(S=Bt.hex8.exec(w))?{r:St(S[1]),g:St(S[2]),b:St(S[3]),a:fm(S[4]),format:T?"name":"hex8"}:(S=Bt.hex6.exec(w))?{r:St(S[1]),g:St(S[2]),b:St(S[3]),format:T?"name":"hex"}:(S=Bt.hex4.exec(w))?{r:St(S[1]+""+S[1]),g:St(S[2]+""+S[2]),b:St(S[3]+""+S[3]),a:fm(S[4]+""+S[4]),format:T?"name":"hex8"}:(S=Bt.hex3.exec(w))?{r:St(S[1]+""+S[1]),g:St(S[2]+""+S[2]),b:St(S[3]+""+S[3]),format:T?"name":"hex"}:!1}(a)),Ka(a)=="object"&&(sn(a.r)&&sn(a.g)&&sn(a.b)?(y=a.r,x=a.g,k=a.b,l={r:255*Ne(y,255),g:255*Ne(x,255),b:255*Ne(k,255)},m=!0,g=String(a.r).substr(-1)==="%"?"prgb":"rgb"):sn(a.h)&&sn(a.s)&&sn(a.v)?(d=Yo(a.s),h=Yo(a.v),l=function(w,S,T){w=6*Ne(w,360),S=Ne(S,100),T=Ne(T,100);var O=Math.floor(w),M=w-O,D=T*(1-S),z=T*(1-M*S),L=T*(1-(1-M)*S),W=O%6,q=[T,z,D,D,L,T][W],H=[L,T,T,z,D,D][W],X=[D,D,L,T,T,z][W];return{r:255*q,g:255*H,b:255*X}}(a.h,d,h),m=!0,g="hsv"):sn(a.h)&&sn(a.s)&&sn(a.l)&&(d=Yo(a.s),f=Yo(a.l),l=function(w,S,T){var O,M,D;function z(q,H,X){return X<0&&(X+=1),X>1&&(X-=1),X<1/6?q+6*(H-q)*X:X<.5?H:X<2/3?q+(H-q)*(2/3-X)*6:q}if(w=Ne(w,360),S=Ne(S,100),T=Ne(T,100),S===0)O=M=D=T;else{var L=T<.5?T*(1+S):T+S-T*S,W=2*T-L;O=z(W,L,w+1/3),M=z(W,L,w),D=z(W,L,w-1/3)}return{r:255*O,g:255*M,b:255*D}}(a.h,d,f),m=!0,g="hsl"),a.hasOwnProperty("a")&&(c=a.a));var y,x,k;return c=hg(c),{ok:m,format:a.format||g,r:Math.min(255,Math.max(l.r,0)),g:Math.min(255,Math.max(l.g,0)),b:Math.min(255,Math.max(l.b,0)),a:c}}(n);this._originalInput=n,this._r=o.r,this._g=o.g,this._b=o.b,this._a=o.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||o.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=o.ok}function sm(n,r,o){n=Ne(n,255),r=Ne(r,255),o=Ne(o,255);var a,l,c=Math.max(n,r,o),d=Math.min(n,r,o),h=(c+d)/2;if(c==d)a=l=0;else{var f=c-d;switch(l=h>.5?f/(2-c-d):f/(c+d),c){case n:a=(r-o)/f+(r<o?6:0);break;case r:a=(o-n)/f+2;break;case o:a=(n-r)/f+4}a/=6}return{h:a,s:l,l:h}}function lm(n,r,o){n=Ne(n,255),r=Ne(r,255),o=Ne(o,255);var a,l,c=Math.max(n,r,o),d=Math.min(n,r,o),h=c,f=c-d;if(l=c===0?0:f/c,c==d)a=0;else{switch(c){case n:a=(r-o)/f+(r<o?6:0);break;case r:a=(o-n)/f+2;break;case o:a=(n-r)/f+4}a/=6}return{h:a,s:l,v:h}}function um(n,r,o,a){var l=[$t(Math.round(n).toString(16)),$t(Math.round(r).toString(16)),$t(Math.round(o).toString(16))];return a&&l[0].charAt(0)==l[0].charAt(1)&&l[1].charAt(0)==l[1].charAt(1)&&l[2].charAt(0)==l[2].charAt(1)?l[0].charAt(0)+l[1].charAt(0)+l[2].charAt(0):l.join("")}function cm(n,r,o,a){return[$t(pg(a)),$t(Math.round(n).toString(16)),$t(Math.round(r).toString(16)),$t(Math.round(o).toString(16))].join("")}function gS(n,r){r=r===0?0:r||10;var o=ee(n).toHsl();return o.s-=r/100,o.s=is(o.s),ee(o)}function yS(n,r){r=r===0?0:r||10;var o=ee(n).toHsl();return o.s+=r/100,o.s=is(o.s),ee(o)}function vS(n){return ee(n).desaturate(100)}function xS(n,r){r=r===0?0:r||10;var o=ee(n).toHsl();return o.l+=r/100,o.l=is(o.l),ee(o)}function bS(n,r){r=r===0?0:r||10;var o=ee(n).toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(-r/100*255))),o.g=Math.max(0,Math.min(255,o.g-Math.round(-r/100*255))),o.b=Math.max(0,Math.min(255,o.b-Math.round(-r/100*255))),ee(o)}function wS(n,r){r=r===0?0:r||10;var o=ee(n).toHsl();return o.l-=r/100,o.l=is(o.l),ee(o)}function kS(n,r){var o=ee(n).toHsl(),a=(o.h+r)%360;return o.h=a<0?360+a:a,ee(o)}function SS(n){var r=ee(n).toHsl();return r.h=(r.h+180)%360,ee(r)}function dm(n,r){if(isNaN(r)||r<=0)throw new Error("Argument to polyad must be a positive number");for(var o=ee(n).toHsl(),a=[ee(n)],l=360/r,c=1;c<r;c++)a.push(ee({h:(o.h+c*l)%360,s:o.s,l:o.l}));return a}function PS(n){var r=ee(n).toHsl(),o=r.h;return[ee(n),ee({h:(o+72)%360,s:r.s,l:r.l}),ee({h:(o+216)%360,s:r.s,l:r.l})]}function TS(n,r,o){r=r||6,o=o||30;var a=ee(n).toHsl(),l=360/o,c=[ee(n)];for(a.h=(a.h-(l*r>>1)+720)%360;--r;)a.h=(a.h+l)%360,c.push(ee(a));return c}function CS(n,r){r=r||6;for(var o=ee(n).toHsv(),a=o.h,l=o.s,c=o.v,d=[],h=1/r;r--;)d.push(ee({h:a,s:l,v:c})),c=(c+h)%1;return d}ee.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var n=this.toRgb();return(299*n.r+587*n.g+114*n.b)/1e3},getLuminance:function(){var n,r,o,a=this.toRgb();return n=a.r/255,r=a.g/255,o=a.b/255,.2126*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))},setAlpha:function(n){return this._a=hg(n),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var n=lm(this._r,this._g,this._b);return{h:360*n.h,s:n.s,v:n.v,a:this._a}},toHsvString:function(){var n=lm(this._r,this._g,this._b),r=Math.round(360*n.h),o=Math.round(100*n.s),a=Math.round(100*n.v);return this._a==1?"hsv("+r+", "+o+"%, "+a+"%)":"hsva("+r+", "+o+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var n=sm(this._r,this._g,this._b);return{h:360*n.h,s:n.s,l:n.l,a:this._a}},toHslString:function(){var n=sm(this._r,this._g,this._b),r=Math.round(360*n.h),o=Math.round(100*n.s),a=Math.round(100*n.l);return this._a==1?"hsl("+r+", "+o+"%, "+a+"%)":"hsla("+r+", "+o+"%, "+a+"%, "+this._roundA+")"},toHex:function(n){return um(this._r,this._g,this._b,n)},toHexString:function(n){return"#"+this.toHex(n)},toHex8:function(n){return function(r,o,a,l,c){var d=[$t(Math.round(r).toString(16)),$t(Math.round(o).toString(16)),$t(Math.round(a).toString(16)),$t(pg(l))];return c&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)&&d[3].charAt(0)==d[3].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0)+d[3].charAt(0):d.join("")}(this._r,this._g,this._b,this._a,n)},toHex8String:function(n){return"#"+this.toHex8(n)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ne(this._r,255))+"%",g:Math.round(100*Ne(this._g,255))+"%",b:Math.round(100*Ne(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ne(this._r,255))+"%, "+Math.round(100*Ne(this._g,255))+"%, "+Math.round(100*Ne(this._b,255))+"%)":"rgba("+Math.round(100*Ne(this._r,255))+"%, "+Math.round(100*Ne(this._g,255))+"%, "+Math.round(100*Ne(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(ES[um(this._r,this._g,this._b,!0)]||!1)},toFilter:function(n){var r="#"+cm(this._r,this._g,this._b,this._a),o=r,a=this._gradientType?"GradientType = 1, ":"";if(n){var l=ee(n);o="#"+cm(l._r,l._g,l._b,l._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+r+",endColorstr="+o+")"},toString:function(n){var r=!!n;n=n||this._format;var o=!1,a=this._a<1&&this._a>=0;return r||!a||n!=="hex"&&n!=="hex6"&&n!=="hex3"&&n!=="hex4"&&n!=="hex8"&&n!=="name"?(n==="rgb"&&(o=this.toRgbString()),n==="prgb"&&(o=this.toPercentageRgbString()),n!=="hex"&&n!=="hex6"||(o=this.toHexString()),n==="hex3"&&(o=this.toHexString(!0)),n==="hex4"&&(o=this.toHex8String(!0)),n==="hex8"&&(o=this.toHex8String()),n==="name"&&(o=this.toName()),n==="hsl"&&(o=this.toHslString()),n==="hsv"&&(o=this.toHsvString()),o||this.toHexString()):n==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ee(this.toString())},_applyModification:function(n,r){var o=n.apply(null,[this].concat([].slice.call(r)));return this._r=o._r,this._g=o._g,this._b=o._b,this.setAlpha(o._a),this},lighten:function(){return this._applyModification(xS,arguments)},brighten:function(){return this._applyModification(bS,arguments)},darken:function(){return this._applyModification(wS,arguments)},desaturate:function(){return this._applyModification(gS,arguments)},saturate:function(){return this._applyModification(yS,arguments)},greyscale:function(){return this._applyModification(vS,arguments)},spin:function(){return this._applyModification(kS,arguments)},_applyCombination:function(n,r){return n.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(TS,arguments)},complement:function(){return this._applyCombination(SS,arguments)},monochromatic:function(){return this._applyCombination(CS,arguments)},splitcomplement:function(){return this._applyCombination(PS,arguments)},triad:function(){return this._applyCombination(dm,[3])},tetrad:function(){return this._applyCombination(dm,[4])}},ee.fromRatio=function(n,r){if(Ka(n)=="object"){var o={};for(var a in n)n.hasOwnProperty(a)&&(o[a]=a==="a"?n[a]:Yo(n[a]));n=o}return ee(n,r)},ee.equals=function(n,r){return!(!n||!r)&&ee(n).toRgbString()==ee(r).toRgbString()},ee.random=function(){return ee.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ee.mix=function(n,r,o){o=o===0?0:o||50;var a=ee(n).toRgb(),l=ee(r).toRgb(),c=o/100;return ee({r:(l.r-a.r)*c+a.r,g:(l.g-a.g)*c+a.g,b:(l.b-a.b)*c+a.b,a:(l.a-a.a)*c+a.a})},ee.readability=function(n,r){var o=ee(n),a=ee(r);return(Math.max(o.getLuminance(),a.getLuminance())+.05)/(Math.min(o.getLuminance(),a.getLuminance())+.05)},ee.isReadable=function(n,r,o){var a,l,c=ee.readability(n,r);switch(l=!1,(a=function(d){var h,f;return h=((d=d||{level:"AA",size:"small"}).level||"AA").toUpperCase(),f=(d.size||"small").toLowerCase(),h!=="AA"&&h!=="AAA"&&(h="AA"),f!=="small"&&f!=="large"&&(f="small"),{level:h,size:f}}(o)).level+a.size){case"AAsmall":case"AAAlarge":l=c>=4.5;break;case"AAlarge":l=c>=3;break;case"AAAsmall":l=c>=7}return l},ee.mostReadable=function(n,r,o){var a,l,c,d,h=null,f=0;l=(o=o||{}).includeFallbackColors,c=o.level,d=o.size;for(var m=0;m<r.length;m++)(a=ee.readability(n,r[m]))>f&&(f=a,h=ee(r[m]));return ee.isReadable(n,h,{level:c,size:d})||!l?h:(o.includeFallbackColors=!1,ee.mostReadable(n,["#fff","#000"],o))};var Xu=ee.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},ES=ee.hexNames=function(n){var r={};for(var o in n)n.hasOwnProperty(o)&&(r[n[o]]=o);return r}(Xu);function hg(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function Ne(n,r){(function(a){return typeof a=="string"&&a.indexOf(".")!=-1&&parseFloat(a)===1})(n)&&(n="100%");var o=function(a){return typeof a=="string"&&a.indexOf("%")!=-1}(n);return n=Math.min(r,Math.max(0,parseFloat(n))),o&&(n=parseInt(n*r,10)/100),Math.abs(n-r)<1e-6?1:n%r/parseFloat(r)}function is(n){return Math.min(1,Math.max(0,n))}function St(n){return parseInt(n,16)}function $t(n){return n.length==1?"0"+n:""+n}function Yo(n){return n<=1&&(n=100*n+"%"),n}function pg(n){return Math.round(255*parseFloat(n)).toString(16)}function fm(n){return St(n)/255}var zn,Na,Ra,Bt=(Na="[\\s|\\(]+("+(zn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+zn+")[,|\\s]+("+zn+")\\s*\\)?",Ra="[\\s|\\(]+("+zn+")[,|\\s]+("+zn+")[,|\\s]+("+zn+")[,|\\s]+("+zn+")\\s*\\)?",{CSS_UNIT:new RegExp(zn),rgb:new RegExp("rgb"+Na),rgba:new RegExp("rgba"+Ra),hsl:new RegExp("hsl"+Na),hsla:new RegExp("hsla"+Ra),hsv:new RegExp("hsv"+Na),hsva:new RegExp("hsva"+Ra),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function sn(n){return!!Bt.CSS_UNIT.exec(n)}var as=function(n,r){var o=(typeof n=="string"?parseInt(n):n)||0;if(o>=-5&&o<=5){var a=o,l=parseFloat(r),c=l+a*(l/5)*-1;return(c==0||c<=Number.EPSILON)&&(c=.1),{animationPeriod:c+"s"}}return{animationPeriod:r}},ss=function(n,r){var o=n||{},a="";switch(r){case"small":a="12px";break;case"medium":a="16px";break;case"large":a="20px";break;default:a=void 0}var l={};if(o.fontSize){var c=o.fontSize;l=function(d,h){var f={};for(var m in d)Object.prototype.hasOwnProperty.call(d,m)&&h.indexOf(m)<0&&(f[m]=d[m]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function"){var g=0;for(m=Object.getOwnPropertySymbols(d);g<m.length;g++)h.indexOf(m[g])<0&&Object.prototype.propertyIsEnumerable.call(d,m[g])&&(f[m[g]]=d[m[g]])}return f}(o,["fontSize"]),a=c}return{fontSize:a,styles:l}},OS={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},ls=function(n){var r=n.className,o=n.text,a=n.textColor,l=n.staticText,c=n.style;return o?he.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(r||"").trim(),style:ke(ke(ke({},l&&OS),a&&{color:a,mixBlendMode:"unset"}),c&&c)},typeof o=="string"&&o.length?o:"loading"):null},hi="rgb(50, 205, 50)";function us(n,r){r===void 0&&(r=0);var o=[];return function a(l,c){return c===void 0&&(c=0),o.push.apply(o,l),o.length<c&&a(o,c),o.slice(0,c)}(n,r)}We(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);ee(hi).toRgb();Array.from({length:4},function(n,r){return"--atom-phase".concat(r+1,"-rgb")});We(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--commet-phase".concat(r+1,"-color")});We(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--OP-annulus-phase".concat(r+1,"-color")});function Su(n){return n&&n.Math===Math&&n}We(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Su(typeof window=="object"&&window)||Su(typeof self=="object"&&self)||Su(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(n,r){return"--OP-dotted-phase".concat(r+1,"-color")});We(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--OP-spokes-phase".concat(r+1,"-color")});We(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(n,r){return"--OP-annulus-dual-sectors-phase".concat(r+1,"-color")});We(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return["--OP-annulus-track-phase".concat(r+1,"-color"),"--OP-annulus-sector-phase".concat(r+1,"-color")]});We(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--four-square-phase".concat(r+1,"-color")});We(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--mosaic-phase".concat(r+1,"-color")});We(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--riple-phase".concat(r+1,"-color")});We(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);var Fr=Array.from({length:4},function(n,r){return"--TD-pulsate-phase".concat(r+1,"-color")}),AS=function(n){var r,o=ss(n==null?void 0:n.style,n==null?void 0:n.size),a=o.styles,l=o.fontSize,c=n==null?void 0:n.easing,d=as(n==null?void 0:n.speedPlus,"1.2s").animationPeriod,h=function(f){var m={};if(f instanceof Array){for(var g=us(f,Fr.length),y=0;y<g.length&&!(y>=4);y++)m[Fr[y]]=g[y];return m}try{if(typeof f!="string")throw new Error("Color String expected");for(var x=0;x<Fr.length;x++)m[Fr[x]]=f}catch(k){for(k instanceof Error?console.warn("[".concat(k.message,']: Received "').concat(typeof f,'" instead with value, ').concat(JSON.stringify(f))):console.warn("".concat(JSON.stringify(f),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),x=0;x<Fr.length;x++)m[Fr[x]]=hi}return m}((r=n==null?void 0:n.color)!==null&&r!==void 0?r:"");return he.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:ke(ke(ke(ke(ke({},l&&{fontSize:l}),d&&{"--rli-animation-duration":d}),c&&{"--rli-animation-function":c}),h),a),role:"status","aria-live":"polite","aria-label":"Loading"},he.createElement("span",{className:"rli-d-i-b pulsate-indicator"},he.createElement("span",{className:"rli-d-i-b pulsate-dot"}),he.createElement("span",{className:"rli-d-i-b pulsate-dot"}),he.createElement("span",{className:"rli-d-i-b pulsate-dot"})),he.createElement(ls,{staticText:!0,text:n==null?void 0:n.text,textColor:n==null?void 0:n.textColor}))};We(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);var Vr=Array.from({length:4},function(n,r){return"--TD-brick-stack-phase".concat(r+1,"-color")}),jS=function(n){var r,o=ss(n==null?void 0:n.style,n==null?void 0:n.size),a=o.styles,l=o.fontSize,c=n==null?void 0:n.easing,d=as(n==null?void 0:n.speedPlus,"1s").animationPeriod,h=function(f){var m={};if(f instanceof Array){for(var g=us(f,Vr.length),y=0;y<g.length&&!(y>=4);y++)m[Vr[y]]=g[y];return m}try{if(typeof f!="string")throw new Error("Color String expected");for(var x=0;x<Vr.length;x++)m[Vr[x]]=f}catch(k){for(k instanceof Error?console.warn("[".concat(k.message,']: Received "').concat(typeof f,'" instead with value, ').concat(JSON.stringify(f))):console.warn("".concat(JSON.stringify(f),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),x=0;x<Vr.length;x++)m[Vr[x]]=hi}return m}((r=n==null?void 0:n.color)!==null&&r!==void 0?r:"");return he.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:ke(ke(ke(ke(ke({},l&&{fontSize:l}),d&&{"--rli-animation-duration":d}),c&&{"--rli-animation-function":c}),h),a),role:"status","aria-live":"polite","aria-label":"Loading"},he.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},he.createElement("span",{className:"rli-d-i-b brick-stack"})),he.createElement(ls,{staticText:!0,text:n==null?void 0:n.text,textColor:n==null?void 0:n.textColor}))};We(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);var Ir=Array.from({length:4},function(n,r){return"--TD-bob-phase".concat(r+1,"-color")}),NS=function(n){var r,o=ss(n==null?void 0:n.style,n==null?void 0:n.size),a=o.styles,l=o.fontSize,c=n==null?void 0:n.easing,d=as(n==null?void 0:n.speedPlus,"1.2s").animationPeriod,h=function(f){var m={};if(f instanceof Array){for(var g=us(f,Ir.length),y=0;y<g.length&&!(y>=4);y++)m[Ir[y]]=g[y];return m}try{if(typeof f!="string")throw new Error("Color String expected");for(var x=0;x<Ir.length;x++)m[Ir[x]]=f}catch(k){for(k instanceof Error?console.warn("[".concat(k.message,']: Received "').concat(typeof f,'" instead with value, ').concat(JSON.stringify(f))):console.warn("".concat(JSON.stringify(f),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),x=0;x<Ir.length;x++)m[Ir[x]]=hi}return m}((r=n==null?void 0:n.color)!==null&&r!==void 0?r:"");return he.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:ke(ke(ke(ke(ke({},l&&{fontSize:l}),d&&{"--rli-animation-duration":d}),c&&{"--rli-animation-function":c}),h),a),role:"status","aria-live":"polite","aria-label":"Loading"},he.createElement("span",{className:"bob-indicator"},he.createElement("span",{className:"bobbing"})),he.createElement(ls,{staticText:!0,text:n==null?void 0:n.text,textColor:n==null?void 0:n.textColor}))};We(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);var Br=Array.from({length:4},function(n,r){return"--TD-bounce-phase".concat(r+1,"-color")}),RS=function(n){var r,o=ss(n==null?void 0:n.style,n==null?void 0:n.size),a=o.styles,l=o.fontSize,c=n==null?void 0:n.easing,d=as(n==null?void 0:n.speedPlus,"0.5s").animationPeriod,h=function(f){var m={};if(f instanceof Array){for(var g=us(f,Br.length),y=0;y<g.length&&!(y>=4);y++)m[Br[y]]=g[y];return m}try{if(typeof f!="string")throw new Error("Color String expected");for(var x=0;x<Br.length;x++)m[Br[x]]=f}catch{for(x=0;x<Br.length;x++)m[Br[x]]=hi}return m}((r=n==null?void 0:n.color)!==null&&r!==void 0?r:"");return he.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:ke(ke(ke(ke(ke({},l&&{fontSize:l}),d&&{"--rli-animation-duration":d}),c&&{"--rli-animation-function":c}),h),a)},he.createElement("span",{className:"wrapper"},he.createElement("span",{className:"group"},he.createElement("span",{className:"rli-d-i-b dot"}),he.createElement("span",{className:"rli-d-i-b dot"}),he.createElement("span",{className:"rli-d-i-b dot"})),he.createElement("span",{className:"group"},he.createElement("span",{className:"rli-d-i-b shadow"}),he.createElement("span",{className:"rli-d-i-b shadow"}),he.createElement("span",{className:"rli-d-i-b shadow"}))),he.createElement(ls,{staticText:!0,text:n==null?void 0:n.text,textColor:n==null?void 0:n.textColor,style:{marginTop:"2px"}}))},MS=function(n){var r=Object(n).variant,o=r===void 0?"pulsate":r;return o==="pulsate"?he.createElement(AS,ke({},n)):o==="brick-stack"?he.createElement(jS,ke({},n)):o==="bob"?he.createElement(NS,ke({},n)):o==="bounce"?he.createElement(RS,ke({},n)):null};We(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--shape-phase".concat(r+1,"-color")});We(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--trophySpin-phase".concat(r+1,"-color")});We(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--slab-phase".concat(r+1,"-color")});We(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--life-line-phase".concat(r+1,"-color")});const mg=({children:n,onclick:r})=>b.jsx(ut.div,{className:"fixed inset-0 flex justify-center items-center bg-black bg-opacity-50",style:{zIndex:9999},onClick:r,children:b.jsx("div",{className:"relative z-10",children:n})}),fr=()=>b.jsx(mg,{children:b.jsx(MS,{variant:"bounce",color:"#facc15",size:"medium",text:"Loading...",textColor:"#facc15"})}),pi=()=>b.jsx("div",{className:"flex justify-center",children:b.jsxs("svg",{className:"animate-spin",fill:"#FFFFFF",width:"25",height:"25",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 26.349 26.35",xmlSpace:"preserve",children:[b.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),b.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),b.jsx("g",{id:"SVGRepo_iconCarrier",children:b.jsx("g",{children:b.jsxs("g",{children:[b.jsx("circle",{cx:"13.792",cy:"3.082",r:"3.082"}),b.jsx("circle",{cx:"13.792",cy:"24.501",r:"1.849"}),b.jsx("circle",{cx:"6.219",cy:"6.218",r:"2.774"}),b.jsx("circle",{cx:"21.365",cy:"21.363",r:"1.541"}),b.jsx("circle",{cx:"3.082",cy:"13.792",r:"2.465"}),b.jsx("circle",{cx:"24.501",cy:"13.791",r:"1.232"}),b.jsx("path",{d:"M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05 C6.902,18.996,5.537,18.988,4.694,19.84z"}),b.jsx("circle",{cx:"21.364",cy:"6.218",r:"0.924"})]})})})]})}),hm=({product:n,isLoggedIn:r,fetchCartItems:o,onClick:a,setPopupType:l,setPopupMessage:c,setShowPopup:d})=>{const h="http://localhost:5000",[f,m]=C.useState(1),[g,y]=C.useState(!1),x=()=>m(f+1),k=()=>m(Math.max(1,f-1)),w=async()=>{if(!r){l("info"),c("Please log in to add items to your cart"),d(!0);return}y(!0);try{const S=await fetch(`${h}/add-to-cart/${n.id}`,{method:"POST",credentials:"include",body:JSON.stringify({quantity:f}),headers:{"Content-Type":"application/json"}});if(!S.ok)throw new Error("Failed to add to cart");const T=await S.json();await o()}catch(S){l("error"),c("An error occurred while adding to the cart, please try again."),d(!0),console.error("An error occurred while adding to the cart:",S)}finally{y(!1)}};return b.jsxs("div",{className:"bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full",onClick:a||void 0,style:{cursor:a?"pointer":"default"},children:[b.jsx("img",{src:n.imageUrl,alt:n.name,className:"w-full h-48 object-cover rounded-t-lg"}),b.jsxs("div",{className:"p-4 flex flex-col flex-grow",children:[b.jsx("h3",{className:"text-lg font-semibold",children:n.name}),b.jsx("p",{className:"text-sm text-gray-600",children:n.description}),b.jsxs("p",{className:"mt-2 text-xl font-bold",children:["$",n.price.toFixed(2)]}),b.jsxs("div",{className:"mt-4 flex items-center space-x-3",children:[b.jsx("button",{onClick:S=>{S.stopPropagation(),k()},className:"w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-300 transition",children:"-"}),b.jsx("span",{className:"text-lg",children:f}),b.jsx("button",{onClick:S=>{S.stopPropagation(),x()},className:"w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-300 transition",children:"+"})]}),b.jsx("div",{className:"mt-auto",children:b.jsx("button",{onClick:S=>{S.stopPropagation(),w()},className:`w-full mt-4 py-2 ${g?"bg-yellow-400":"bg-yellow-500 hover:bg-yellow-600"} text-white rounded-lg transition duration-300`,disabled:g,children:g?b.jsx(pi,{}):"Add to Cart"})})]})]})},pm=({isLoggedIn:n,fetchCartItems:r,setPopupType:o,setPopupMessage:a,setShowPopup:l})=>{const c="http://localhost:5000",[d,h]=C.useState(!0),[f,m]=C.useState([]),[g,y]=C.useState(null),x=async()=>{try{const S=await(await fetch(`${c}/get_products`)).json();m(S.products)}catch{o("error"),a("Unable to fetch products. Please try again later."),l(!0)}},k=async()=>{h(!0),await x(),h(!1)};return C.useEffect(()=>{k()},[]),d?b.jsx(fr,{}):b.jsxs("div",{className:"container mx-auto px-4 py-8",children:[b.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4",children:f.map(w=>b.jsx(hm,{product:w,isLoggedIn:n,fetchCartItems:r,onClick:()=>y(w)},w.id))}),b.jsx(Wa,{children:g&&b.jsx(ut.div,{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",onClick:()=>y(null),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:b.jsxs(ut.div,{className:"bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full relative",onClick:w=>w.stopPropagation(),initial:{scale:.9,y:50,opacity:0},animate:{scale:1,y:0,opacity:1},exit:{scale:.9,y:50,opacity:0},transition:{type:"spring",stiffness:200,damping:20},children:[b.jsx("button",{className:"absolute top-4 right-4 w-10 h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full flex justify-center items-center shadow-md transition",onClick:()=>y(null),children:b.jsx("span",{className:"text-lg font-bold",children:"×"})}),b.jsx(hm,{product:g,isLoggedIn:n,fetchCartItems:r,setPopupType:o,setPopupMessage:a,setShowPopup:l})]})})})]})},DS=({fetchCartItems:n,cartItems:r,isLoggedIn:o})=>{var x;const a="http://localhost:5000",[l,c]=C.useState(!0),[d,h]=C.useState(null),f=Hn(),m=async k=>{h(k);try{if(!(await fetch(`${a}/delete-cart-item/${k}`,{method:"DELETE",credentials:"include"})).ok)throw new Error("Failed to remove item");await n()}catch(w){console.error("Error removing item:",w)}finally{h(null)}},g=(x=r==null?void 0:r.products)==null?void 0:x.reduce((k,w)=>k+w.price*(w.quantity||1),0),y=async()=>{try{c(!0),await n()}catch(k){console.error("Failed to fetch cart items:",k)}finally{c(!1)}};return C.useEffect(()=>{o?y():f("/")},[o]),l?b.jsx(fr,{}):!(r!=null&&r.products)||r.products.length===0?b.jsx("div",{className:"flex items-center justify-center min-h-screen",children:b.jsx("p",{className:"text-gray-700 text-lg",children:"Your cart is empty."})}):b.jsx("div",{className:"bg-gray-50 min-h-screen text-gray-800",children:b.jsxs("div",{className:"container mx-auto px-4 py-6",children:[b.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-6",children:"Your Cart"}),b.jsxs("div",{className:"grid lg:grid-cols-3 gap-6",children:[b.jsx("div",{className:"lg:col-span-2",children:r.products.map((k,w)=>b.jsxs("div",{children:[w>0&&b.jsx("hr",{className:"border-t border-gray-300 my-4"}),b.jsxs("div",{className:"flex items-center",children:[b.jsx("img",{src:k.image||"https://via.placeholder.com/100",alt:k.name,className:"w-24 h-24 object-cover rounded-md"}),b.jsxs("div",{className:"flex-1 ml-4",children:[b.jsx("h2",{className:"text-lg font-semibold",children:k.name}),b.jsxs("p",{className:"text-gray-500",children:["Price: $",k.price.toFixed(2)]}),b.jsxs("p",{className:"text-gray-500",children:["Quantity: ",k.quantity||1]})]}),b.jsxs("div",{className:"text-right",children:[b.jsxs("p",{className:"font-bold text-gray-800 mb-2",children:["$",(k.price*(k.quantity||1)).toFixed(2)]}),b.jsx("button",{onClick:()=>m(k.id),className:`bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition ${d===k.id?"opacity-50 cursor-not-allowed":""}`,disabled:d===k.id,children:d===k.id?b.jsx(pi,{}):"Remove"})]})]})]},k.id))}),b.jsx("div",{children:b.jsxs("div",{className:"rounded-lg bg-white p-6 sticky top-16",children:[b.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-4",children:"Summary"}),b.jsxs("div",{className:"space-y-2",children:[r.products.map(k=>b.jsxs("div",{className:"flex justify-between",children:[b.jsxs("p",{children:[k.name," x ",k.quantity||1]}),b.jsxs("p",{children:["$",(k.price*(k.quantity||1)).toFixed(2)]})]},k.id)),b.jsx("div",{className:"border-t border-gray-300 mt-4 pt-4",children:b.jsxs("div",{className:"flex justify-between text-lg font-semibold",children:[b.jsx("p",{children:"Total:"}),b.jsxs("p",{className:"text-blue-600",children:["$",g==null?void 0:g.toFixed(2)]})]})})]}),b.jsx(ui,{to:"/checkout",children:b.jsx("button",{className:"mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition",disabled:r.products.length===0,children:"Proceed to Checkout"})})]})})]})]})})},_S=({message:n,type:r})=>{const[o,a]=C.useState(!0),l=()=>a(!1),c={success:"bg-green-100 text-green-800",error:"bg-red-100 text-red-800",info:"bg-blue-100 text-blue-800"},d={hidden:{opacity:0,y:-20},visible:{opacity:1,y:0},exit:{opacity:0,y:-20}};return b.jsx(Wa,{children:o&&b.jsx(ut.div,{className:`fixed top-4 left-0 w-full z-50 p-4 ${c[r]||c.info}`,initial:"hidden",animate:"visible",exit:"exit",variants:d,transition:{duration:.3},children:b.jsxs("div",{className:"flex flex-col items-center",children:[b.jsx("p",{className:"text-lg font-medium text-center",children:n}),b.jsx("button",{onClick:l,className:"absolute top-full mt-2 bg-gray-200 text-gray-700 w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-300 transition",style:{transform:"translateX(-50%)",left:"50%"},children:"✕"})]})})})};var Pu={exports:{}},Tu,mm;function LS(){if(mm)return Tu;mm=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Tu=n,Tu}var Cu,gm;function zS(){if(gm)return Cu;gm=1;var n=LS();function r(){}function o(){}return o.resetWarningCache=r,Cu=function(){function a(d,h,f,m,g,y){if(y!==n){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}a.isRequired=a;function l(){return a}var c={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:l,element:a,elementType:a,instanceOf:l,node:a,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:o,resetWarningCache:r};return c.PropTypes=c,c},Cu}var ym;function FS(){return ym||(ym=1,Pu.exports=zS()()),Pu.exports}var VS=FS();const we=ii(VS),gg=({order:n,onClose:r})=>b.jsxs("div",{className:"bg-white text-black rounded-lg shadow-lg w-96 p-6 relative",children:[b.jsx("div",{className:"absolute top-4 right-4 text-xl cursor-pointer text-yellow-500 hover:text-yellow-600",onClick:r,children:"×"}),b.jsx("div",{className:"text-2xl font-bold text-center mb-4",children:n.name}),b.jsxs("div",{className:"mb-4",children:[b.jsx("span",{className:"text-lg font-semibold",children:"Order Summary"}),b.jsx("div",{className:"mt-4 space-y-2",children:Object.keys(n.orderItems).map(o=>b.jsxs("div",{className:"flex justify-between",children:[b.jsx("span",{className:"text-sm",children:o}),b.jsx("span",{className:"text-sm font-medium",children:n.orderItems[o]})]},o))})]}),b.jsxs("div",{className:"border-t border-slate-600 mt-4 pt-4 flex justify-between",children:[b.jsx("span",{className:"text-lg font-semibold",children:"Total"}),b.jsx("span",{className:"text-xl font-bold",children:n.totalPrice})]}),b.jsx(ut.div,{className:"mt-6 py-2 px-4 bg-blue-600 text-white rounded-full cursor-pointer text-center hover:bg-blue-700 transition-all",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:r,children:"Close"})]});gg.propTypes={order:we.shape({name:we.string.isRequired,orderItems:we.object.isRequired,totalPrice:we.number.isRequired}).isRequired,onClose:we.func.isRequired};const IS=({currentUser:n,isLoggedIn:r})=>{const o="http://localhost:5000",a=Hn(),[l,c]=C.useState(null),[d,h]=C.useState(!1),[f,m]=C.useState({}),[g,y]=C.useState(!0),x={initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8}},k=async()=>{y(!0);const M=await(await fetch(`${o}/orders`,{method:"GET",credentials:"include"})).json();c(M),y(!1)},w=()=>{h(!d)},S=O=>{m({name:O.orderName,totalPrice:O.totalPrice,orderItems:O.orderItems,deliveryDetails:O.deliveryDetails,status:O.status})},T=async()=>{y(!0),await k(),y(!1)};return C.useEffect(()=>{r?T():a("/")},[r]),g?b.jsx(fr,{}):b.jsxs("div",{className:"min-h-screen bg-primary-light flex flex-col items-center py-10",children:[b.jsxs(ut.div,{...x,className:"w-full max-w-4xl bg-primary p-6 rounded-lg shadow-lg text-center",children:[b.jsx("h1",{className:"text-3xl font-bold ",children:"My Profile"}),b.jsx("p",{className:"mt-2",children:"Welcome to your e-commerce profile!"})]}),b.jsxs(ut.div,{...x,className:"relative w-full max-w-4xl mt-6 bg-white p-6 rounded-lg shadow-md",children:[b.jsxs("div",{className:"flex items-center space-x-4",children:[b.jsx("img",{src:"https://via.placeholder.com/100",alt:"Profile",className:"w-24 h-24 rounded-full border-4 border-primary"}),b.jsxs("div",{children:[b.jsx("h2",{className:"text-2xl font-semibold text-gray-800",children:`${n.firstName} ${n.lastName}`}),b.jsx("p",{className:"text-gray-600",children:n.email})]})]}),b.jsx(ui,{to:"/edit-profile",children:b.jsx(ut.button,{whileHover:{scale:1.1,rotate:5},whileTap:{scale:.9},className:"absolute bottom-4 right-4 bg-primary-dark w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:bg-primary",children:b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-pencil-square",viewBox:"0 0 16 16",children:[b.jsx("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),b.jsx("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"})]})})})]}),b.jsxs(ut.div,{...x,className:"w-full max-w-4xl mt-6 bg-white p-6 rounded-lg shadow-md",children:[b.jsx("h3",{className:"text-xl font-semibold text-gray-800 mb-4",children:"My Orders"}),g?"Loading...":b.jsx("ul",{className:"space-y-4",children:l?l.map(O=>b.jsxs("li",{className:"flex items-center justify-between p-4 bg-primary-light rounded-md shadow",children:[b.jsxs("div",{children:[b.jsx("p",{className:"text-gray-800 font-medium",children:O.orderName}),b.jsxs("p",{className:"text-gray-600",children:["Status: ",O.status]})]}),b.jsx("button",{className:"text-primary-dark font-medium",onClick:()=>{w(),S(O)},children:"View Details"})]},O.id)):b.jsx("h4",{children:"You have no orders"})})]}),d&&b.jsx(mg,{onclick:w,children:b.jsx(gg,{order:f,onClose:w})})]})},BS=({fetchUser:n,isLoggedIn:r,currentUser:o,setPopupType:a,setPopupMessage:l,setShowPopup:c})=>{const d="http://localhost:5000",[h,f]=C.useState({firstName:(o==null?void 0:o.firstName)||"",lastName:(o==null?void 0:o.lastName)||"",email:(o==null?void 0:o.email)||"",phone:(o==null?void 0:o.phone)||"",address1:(o==null?void 0:o.address1)||"",address2:(o==null?void 0:o.address2)||"",country:(o==null?void 0:o.country)||"",city:(o==null?void 0:o.city)||"",zipCode:(o==null?void 0:o.zipCode)||""}),[m,g]=C.useState(!1),y=Hn(),x={...h},k=O=>{const{name:M,value:D}=O.target;f({...h,[M]:D})},w=async O=>{O.preventDefault(),g(!0);try{const M=await fetch(`${d}/auth/edit-profile`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h),credentials:"include"});g(!1),M.ok?(a("success"),l("Your user profile has been updated."),c(!0),n(),y(-1)):(a("error"),l("There was a problem updating your profile. Please try again."),c(!0))}catch{g(!1),a("error"),l("An unexpected error occurred. Please try again later."),c(!0)}},S=()=>{f(x),y(-1)},T={initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8}};return C.useEffect(()=>{r?n():y("/")},[r]),b.jsx("div",{className:"min-h-screen bg-primary-light flex flex-col items-center py-10",children:b.jsxs(ut.div,{...T,className:"w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg",children:[b.jsx("h1",{className:"text-3xl font-bold text-primary-dark mb-6",children:"Edit Profile"}),b.jsxs("form",{onSubmit:w,className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[b.jsxs("div",{children:[b.jsx("label",{className:"block text-gray-700 font-medium mb-2",children:"First Name"}),b.jsx("input",{type:"text",name:"firstName",value:h.firstName,onChange:k,placeholder:"Enter your first name",className:"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",required:!0})]}),b.jsxs("div",{children:[b.jsx("label",{className:"block text-gray-700 font-medium mb-2",children:"Last Name"}),b.jsx("input",{type:"text",name:"lastName",value:h.lastName,onChange:k,placeholder:"Enter your last name",className:"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",required:!0})]}),b.jsxs("div",{children:[b.jsx("label",{className:"block text-gray-700 font-medium mb-2",children:"Email"}),b.jsx("input",{type:"email",name:"email",value:h.email,onChange:k,placeholder:"Enter your email",className:"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",required:!0})]}),b.jsxs("div",{children:[b.jsx("label",{className:"block text-gray-700 font-medium mb-2",children:"Phone Number"}),b.jsx("input",{type:"tel",name:"phone",value:h.phone,onChange:k,placeholder:"Enter your phone number",className:"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"})]}),b.jsxs("div",{children:[b.jsx("label",{className:"block text-gray-700 font-medium mb-2",children:"Address 1"}),b.jsx("input",{type:"text",name:"address1",value:h.address1,onChange:k,placeholder:"Enter your address",className:"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"})]}),b.jsxs("div",{children:[b.jsx("label",{className:"block text-gray-700 font-medium mb-2",children:"Address 2"}),b.jsx("input",{type:"text",name:"address2",value:h.address2,onChange:k,placeholder:"Enter additional address info",className:"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"})]}),b.jsxs("div",{children:[b.jsx("label",{className:"block text-gray-700 font-medium mb-2",children:"Country"}),b.jsx("input",{type:"text",name:"country",value:h.country,onChange:k,placeholder:"Enter your country",className:"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"})]}),b.jsxs("div",{children:[b.jsx("label",{className:"block text-gray-700 font-medium mb-2",children:"City"}),b.jsx("input",{type:"text",name:"city",value:h.city,onChange:k,placeholder:"Enter your city",className:"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"})]}),b.jsxs("div",{children:[b.jsx("label",{className:"block text-gray-700 font-medium mb-2",children:"Zip Code"}),b.jsx("input",{type:"text",name:"zipCode",value:h.zipCode,onChange:k,placeholder:"Enter your zip code",className:"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"})]}),b.jsxs("div",{className:"col-span-1 md:col-span-2 flex justify-between space-x-4",children:[b.jsx("button",{type:"submit",disabled:m,className:`w-full md:w-1/2 font-semibold px-4 py-2 rounded-md ${m?"bg-gray-500 text-gray-300 cursor-not-allowed":"bg-emerald-700 text-white hover:bg-emerald-800 active:bg-emerald-700"}`,children:m?b.jsx(pi,{}):"Save Changes"}),b.jsx("button",{type:"button",onClick:S,className:"w-full md:w-1/2 bg-red-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-800 active:bg-red-500 transition",children:"Discard Changes"})]})]})]})})};var Eu,vm;function $S(){if(vm)return Eu;vm=1;function n(h){return h&&typeof h=="object"&&"default"in h?h.default:h}var r=Ya(),o=n(r);function a(h,f,m){return f in h?Object.defineProperty(h,f,{value:m,enumerable:!0,configurable:!0,writable:!0}):h[f]=m,h}function l(h,f){h.prototype=Object.create(f.prototype),h.prototype.constructor=h,h.__proto__=f}var c=!!(typeof window<"u"&&window.document&&window.document.createElement);function d(h,f,m){if(typeof h!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof f!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof m<"u"&&typeof m!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function g(y){return y.displayName||y.name||"Component"}return function(x){if(typeof x!="function")throw new Error("Expected WrappedComponent to be a React component.");var k=[],w;function S(){w=h(k.map(function(O){return O.props})),T.canUseDOM?f(w):m&&(w=m(w))}var T=function(O){l(M,O);function M(){return O.apply(this,arguments)||this}M.peek=function(){return w},M.rewind=function(){if(M.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var L=w;return w=void 0,k=[],L};var D=M.prototype;return D.UNSAFE_componentWillMount=function(){k.push(this),S()},D.componentDidUpdate=function(){S()},D.componentWillUnmount=function(){var L=k.indexOf(this);k.splice(L,1),S()},D.render=function(){return o.createElement(x,this.props)},M}(r.PureComponent);return a(T,"displayName","SideEffect("+g(x)+")"),a(T,"canUseDOM",c),T}}return Eu=d,Eu}var HS=$S();const US=ii(HS);var Ou,xm;function qS(){if(xm)return Ou;xm=1;var n=typeof Element<"u",r=typeof Map=="function",o=typeof Set=="function",a=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function l(c,d){if(c===d)return!0;if(c&&d&&typeof c=="object"&&typeof d=="object"){if(c.constructor!==d.constructor)return!1;var h,f,m;if(Array.isArray(c)){if(h=c.length,h!=d.length)return!1;for(f=h;f--!==0;)if(!l(c[f],d[f]))return!1;return!0}var g;if(r&&c instanceof Map&&d instanceof Map){if(c.size!==d.size)return!1;for(g=c.entries();!(f=g.next()).done;)if(!d.has(f.value[0]))return!1;for(g=c.entries();!(f=g.next()).done;)if(!l(f.value[1],d.get(f.value[0])))return!1;return!0}if(o&&c instanceof Set&&d instanceof Set){if(c.size!==d.size)return!1;for(g=c.entries();!(f=g.next()).done;)if(!d.has(f.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(c)&&ArrayBuffer.isView(d)){if(h=c.length,h!=d.length)return!1;for(f=h;f--!==0;)if(c[f]!==d[f])return!1;return!0}if(c.constructor===RegExp)return c.source===d.source&&c.flags===d.flags;if(c.valueOf!==Object.prototype.valueOf&&typeof c.valueOf=="function"&&typeof d.valueOf=="function")return c.valueOf()===d.valueOf();if(c.toString!==Object.prototype.toString&&typeof c.toString=="function"&&typeof d.toString=="function")return c.toString()===d.toString();if(m=Object.keys(c),h=m.length,h!==Object.keys(d).length)return!1;for(f=h;f--!==0;)if(!Object.prototype.hasOwnProperty.call(d,m[f]))return!1;if(n&&c instanceof Element)return!1;for(f=h;f--!==0;)if(!((m[f]==="_owner"||m[f]==="__v"||m[f]==="__o")&&c.$$typeof)&&!l(c[m[f]],d[m[f]]))return!1;return!0}return c!==c&&d!==d}return Ou=function(d,h){try{return l(d,h)}catch(f){if((f.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw f}},Ou}var WS=qS();const KS=ii(WS);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Au,bm;function GS(){if(bm)return Au;bm=1;var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(c){if(c==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(c)}function l(){try{if(!Object.assign)return!1;var c=new String("abc");if(c[5]="de",Object.getOwnPropertyNames(c)[0]==="5")return!1;for(var d={},h=0;h<10;h++)d["_"+String.fromCharCode(h)]=h;var f=Object.getOwnPropertyNames(d).map(function(g){return d[g]});if(f.join("")!=="0123456789")return!1;var m={};return"abcdefghijklmnopqrst".split("").forEach(function(g){m[g]=g}),Object.keys(Object.assign({},m)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return Au=l()?Object.assign:function(c,d){for(var h,f=a(c),m,g=1;g<arguments.length;g++){h=Object(arguments[g]);for(var y in h)r.call(h,y)&&(f[y]=h[y]);if(n){m=n(h);for(var x=0;x<m.length;x++)o.call(h,m[x])&&(f[m[x]]=h[m[x]])}}return f},Au}var YS=GS();const XS=ii(YS);var ur={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},se={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(se).map(function(n){return se[n]});var je={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},Ga={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},oi={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},QS=Object.keys(Ga).reduce(function(n,r){return n[Ga[r]]=r,n},{}),ZS=[se.NOSCRIPT,se.SCRIPT,se.STYLE],Ht="data-react-helmet",JS=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},eP=function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")},tP=function(){function n(r,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(r,l.key,l)}}return function(r,o,a){return o&&n(r.prototype,o),a&&n(r,a),r}}(),gt=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n},nP=function(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(n,r):n.__proto__=r)},wm=function(n,r){var o={};for(var a in n)r.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(n,a)&&(o[a]=n[a]);return o},rP=function(n,r){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r&&(typeof r=="object"||typeof r=="function")?r:n},Qu=function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return o===!1?String(r):String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},oP=function(r){var o=Gr(r,se.TITLE),a=Gr(r,oi.TITLE_TEMPLATE);if(a&&o)return a.replace(/%s/g,function(){return Array.isArray(o)?o.join(""):o});var l=Gr(r,oi.DEFAULT_TITLE);return o||l||void 0},iP=function(r){return Gr(r,oi.ON_CHANGE_CLIENT_STATE)||function(){}},ju=function(r,o){return o.filter(function(a){return typeof a[r]<"u"}).map(function(a){return a[r]}).reduce(function(a,l){return gt({},a,l)},{})},aP=function(r,o){return o.filter(function(a){return typeof a[se.BASE]<"u"}).map(function(a){return a[se.BASE]}).reverse().reduce(function(a,l){if(!a.length)for(var c=Object.keys(l),d=0;d<c.length;d++){var h=c[d],f=h.toLowerCase();if(r.indexOf(f)!==-1&&l[f])return a.concat(l)}return a},[])},qo=function(r,o,a){var l={};return a.filter(function(c){return Array.isArray(c[r])?!0:(typeof c[r]<"u"&&cP("Helmet: "+r+' should be of type "Array". Instead found type "'+JS(c[r])+'"'),!1)}).map(function(c){return c[r]}).reverse().reduce(function(c,d){var h={};d.filter(function(x){for(var k=void 0,w=Object.keys(x),S=0;S<w.length;S++){var T=w[S],O=T.toLowerCase();o.indexOf(O)!==-1&&!(k===je.REL&&x[k].toLowerCase()==="canonical")&&!(O===je.REL&&x[O].toLowerCase()==="stylesheet")&&(k=O),o.indexOf(T)!==-1&&(T===je.INNER_HTML||T===je.CSS_TEXT||T===je.ITEM_PROP)&&(k=T)}if(!k||!x[k])return!1;var M=x[k].toLowerCase();return l[k]||(l[k]={}),h[k]||(h[k]={}),l[k][M]?!1:(h[k][M]=!0,!0)}).reverse().forEach(function(x){return c.push(x)});for(var f=Object.keys(h),m=0;m<f.length;m++){var g=f[m],y=XS({},l[g],h[g]);l[g]=y}return c},[]).reverse()},Gr=function(r,o){for(var a=r.length-1;a>=0;a--){var l=r[a];if(l.hasOwnProperty(o))return l[o]}return null},sP=function(r){return{baseTag:aP([je.HREF,je.TARGET],r),bodyAttributes:ju(ur.BODY,r),defer:Gr(r,oi.DEFER),encode:Gr(r,oi.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:ju(ur.HTML,r),linkTags:qo(se.LINK,[je.REL,je.HREF],r),metaTags:qo(se.META,[je.NAME,je.CHARSET,je.HTTPEQUIV,je.PROPERTY,je.ITEM_PROP],r),noscriptTags:qo(se.NOSCRIPT,[je.INNER_HTML],r),onChangeClientState:iP(r),scriptTags:qo(se.SCRIPT,[je.SRC,je.INNER_HTML],r),styleTags:qo(se.STYLE,[je.CSS_TEXT],r),title:oP(r),titleAttributes:ju(ur.TITLE,r)}},Zu=function(){var n=Date.now();return function(r){var o=Date.now();o-n>16?(n=o,r(o)):setTimeout(function(){Zu(r)},0)}}(),km=function(r){return clearTimeout(r)},lP=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Zu:global.requestAnimationFrame||Zu,uP=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||km:global.cancelAnimationFrame||km,cP=function(r){return console&&typeof console.warn=="function"&&console.warn(r)},Wo=null,dP=function(r){Wo&&uP(Wo),r.defer?Wo=lP(function(){Sm(r,function(){Wo=null})}):(Sm(r),Wo=null)},Sm=function(r,o){var a=r.baseTag,l=r.bodyAttributes,c=r.htmlAttributes,d=r.linkTags,h=r.metaTags,f=r.noscriptTags,m=r.onChangeClientState,g=r.scriptTags,y=r.styleTags,x=r.title,k=r.titleAttributes;Ju(se.BODY,l),Ju(se.HTML,c),fP(x,k);var w={baseTag:$r(se.BASE,a),linkTags:$r(se.LINK,d),metaTags:$r(se.META,h),noscriptTags:$r(se.NOSCRIPT,f),scriptTags:$r(se.SCRIPT,g),styleTags:$r(se.STYLE,y)},S={},T={};Object.keys(w).forEach(function(O){var M=w[O],D=M.newTags,z=M.oldTags;D.length&&(S[O]=D),z.length&&(T[O]=w[O].oldTags)}),o&&o(),m(r,S,T)},yg=function(r){return Array.isArray(r)?r.join(""):r},fP=function(r,o){typeof r<"u"&&document.title!==r&&(document.title=yg(r)),Ju(se.TITLE,o)},Ju=function(r,o){var a=document.getElementsByTagName(r)[0];if(a){for(var l=a.getAttribute(Ht),c=l?l.split(","):[],d=[].concat(c),h=Object.keys(o),f=0;f<h.length;f++){var m=h[f],g=o[m]||"";a.getAttribute(m)!==g&&a.setAttribute(m,g),c.indexOf(m)===-1&&c.push(m);var y=d.indexOf(m);y!==-1&&d.splice(y,1)}for(var x=d.length-1;x>=0;x--)a.removeAttribute(d[x]);c.length===d.length?a.removeAttribute(Ht):a.getAttribute(Ht)!==h.join(",")&&a.setAttribute(Ht,h.join(","))}},$r=function(r,o){var a=document.head||document.querySelector(se.HEAD),l=a.querySelectorAll(r+"["+Ht+"]"),c=Array.prototype.slice.call(l),d=[],h=void 0;return o&&o.length&&o.forEach(function(f){var m=document.createElement(r);for(var g in f)if(f.hasOwnProperty(g))if(g===je.INNER_HTML)m.innerHTML=f.innerHTML;else if(g===je.CSS_TEXT)m.styleSheet?m.styleSheet.cssText=f.cssText:m.appendChild(document.createTextNode(f.cssText));else{var y=typeof f[g]>"u"?"":f[g];m.setAttribute(g,y)}m.setAttribute(Ht,"true"),c.some(function(x,k){return h=k,m.isEqualNode(x)})?c.splice(h,1):d.push(m)}),c.forEach(function(f){return f.parentNode.removeChild(f)}),d.forEach(function(f){return a.appendChild(f)}),{oldTags:c,newTags:d}},vg=function(r){return Object.keys(r).reduce(function(o,a){var l=typeof r[a]<"u"?a+'="'+r[a]+'"':""+a;return o?o+" "+l:l},"")},hP=function(r,o,a,l){var c=vg(a),d=yg(o);return c?"<"+r+" "+Ht+'="true" '+c+">"+Qu(d,l)+"</"+r+">":"<"+r+" "+Ht+'="true">'+Qu(d,l)+"</"+r+">"},pP=function(r,o,a){return o.reduce(function(l,c){var d=Object.keys(c).filter(function(m){return!(m===je.INNER_HTML||m===je.CSS_TEXT)}).reduce(function(m,g){var y=typeof c[g]>"u"?g:g+'="'+Qu(c[g],a)+'"';return m?m+" "+y:y},""),h=c.innerHTML||c.cssText||"",f=ZS.indexOf(r)===-1;return l+"<"+r+" "+Ht+'="true" '+d+(f?"/>":">"+h+"</"+r+">")},"")},xg=function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(r).reduce(function(a,l){return a[Ga[l]||l]=r[l],a},o)},mP=function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(r).reduce(function(a,l){return a[QS[l]||l]=r[l],a},o)},gP=function(r,o,a){var l,c=(l={key:o},l[Ht]=!0,l),d=xg(a,c);return[he.createElement(se.TITLE,d,o)]},yP=function(r,o){return o.map(function(a,l){var c,d=(c={key:l},c[Ht]=!0,c);return Object.keys(a).forEach(function(h){var f=Ga[h]||h;if(f===je.INNER_HTML||f===je.CSS_TEXT){var m=a.innerHTML||a.cssText;d.dangerouslySetInnerHTML={__html:m}}else d[f]=a[h]}),he.createElement(r,d)})},ln=function(r,o,a){switch(r){case se.TITLE:return{toComponent:function(){return gP(r,o.title,o.titleAttributes)},toString:function(){return hP(r,o.title,o.titleAttributes,a)}};case ur.BODY:case ur.HTML:return{toComponent:function(){return xg(o)},toString:function(){return vg(o)}};default:return{toComponent:function(){return yP(r,o)},toString:function(){return pP(r,o,a)}}}},bg=function(r){var o=r.baseTag,a=r.bodyAttributes,l=r.encode,c=r.htmlAttributes,d=r.linkTags,h=r.metaTags,f=r.noscriptTags,m=r.scriptTags,g=r.styleTags,y=r.title,x=y===void 0?"":y,k=r.titleAttributes;return{base:ln(se.BASE,o,l),bodyAttributes:ln(ur.BODY,a,l),htmlAttributes:ln(ur.HTML,c,l),link:ln(se.LINK,d,l),meta:ln(se.META,h,l),noscript:ln(se.NOSCRIPT,f,l),script:ln(se.SCRIPT,m,l),style:ln(se.STYLE,g,l),title:ln(se.TITLE,{title:x,titleAttributes:k},l)}},vP=function(r){var o,a;return a=o=function(l){nP(c,l);function c(){return eP(this,c),rP(this,l.apply(this,arguments))}return c.prototype.shouldComponentUpdate=function(h){return!KS(this.props,h)},c.prototype.mapNestedChildrenToProps=function(h,f){if(!f)return null;switch(h.type){case se.SCRIPT:case se.NOSCRIPT:return{innerHTML:f};case se.STYLE:return{cssText:f}}throw new Error("<"+h.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},c.prototype.flattenArrayTypeChildren=function(h){var f,m=h.child,g=h.arrayTypeChildren,y=h.newChildProps,x=h.nestedChildren;return gt({},g,(f={},f[m.type]=[].concat(g[m.type]||[],[gt({},y,this.mapNestedChildrenToProps(m,x))]),f))},c.prototype.mapObjectTypeChildren=function(h){var f,m,g=h.child,y=h.newProps,x=h.newChildProps,k=h.nestedChildren;switch(g.type){case se.TITLE:return gt({},y,(f={},f[g.type]=k,f.titleAttributes=gt({},x),f));case se.BODY:return gt({},y,{bodyAttributes:gt({},x)});case se.HTML:return gt({},y,{htmlAttributes:gt({},x)})}return gt({},y,(m={},m[g.type]=gt({},x),m))},c.prototype.mapArrayTypeChildrenToProps=function(h,f){var m=gt({},f);return Object.keys(h).forEach(function(g){var y;m=gt({},m,(y={},y[g]=h[g],y))}),m},c.prototype.warnOnInvalidChildren=function(h,f){return!0},c.prototype.mapChildrenToProps=function(h,f){var m=this,g={};return he.Children.forEach(h,function(y){if(!(!y||!y.props)){var x=y.props,k=x.children,w=wm(x,["children"]),S=mP(w);switch(m.warnOnInvalidChildren(y,k),y.type){case se.LINK:case se.META:case se.NOSCRIPT:case se.SCRIPT:case se.STYLE:g=m.flattenArrayTypeChildren({child:y,arrayTypeChildren:g,newChildProps:S,nestedChildren:k});break;default:f=m.mapObjectTypeChildren({child:y,newProps:f,newChildProps:S,nestedChildren:k});break}}}),f=this.mapArrayTypeChildrenToProps(g,f),f},c.prototype.render=function(){var h=this.props,f=h.children,m=wm(h,["children"]),g=gt({},m);return f&&(g=this.mapChildrenToProps(f,g)),he.createElement(r,g)},tP(c,null,[{key:"canUseDOM",set:function(h){r.canUseDOM=h}}]),c}(he.Component),o.propTypes={base:we.object,bodyAttributes:we.object,children:we.oneOfType([we.arrayOf(we.node),we.node]),defaultTitle:we.string,defer:we.bool,encodeSpecialCharacters:we.bool,htmlAttributes:we.object,link:we.arrayOf(we.object),meta:we.arrayOf(we.object),noscript:we.arrayOf(we.object),onChangeClientState:we.func,script:we.arrayOf(we.object),style:we.arrayOf(we.object),title:we.string,titleAttributes:we.object,titleTemplate:we.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=r.peek,o.rewind=function(){var l=r.rewind();return l||(l=bg({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),l},a},xP=function(){return null},bP=US(sP,dP,bg)(xP),Pm=vP(bP);Pm.renderStatic=Pm.rewind;const wP=({cartItems:n,currentUser:r,fetchCartItems:o,isLoggedIn:a,setPopupType:l,setPopupMessage:c,setShowPopup:d})=>{const h="http://localhost:5000",f=Hn(),[m,g]=C.useState(!0),[y,x]=C.useState(1),k=n.totalPrice,[w,S]=C.useState({email:r.email||"",phone:r.phone||"",address:r.address||"",address2:r.address2||"",city:r.city||"",country:r.country||""}),[T,O]=C.useState({});function M(){const te=Math.random().toString(36).substr(2,9),ve=Date.now().toString(36);return`${te}${ve}`}const D=M(),z=()=>{const te={};return w.phone||(te.phone="Phone number is required."),w.address||(te.address="Address is required."),w.city||(te.city="City is required."),w.country||(te.country="Country is required."),O(te),Object.keys(te).length===0},L=()=>{y===1&&z()?x(te=>Math.min(te+1,3)):y===2&&x(te=>Math.min(te+1,3))},W=()=>{x(te=>Math.max(te-1,1))},q={hidden:{opacity:0,y:-10},visible:{opacity:1,y:0}};function H(){const te={ref:D};return fetch(`${h}/submit_ref_data`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(te),credentials:"include"}).then(ve=>{if(!ve.ok)throw new Error("Failed to submit payment reference");return ve.json()}).then(ve=>{console.log("Reference submitted successfully")}).catch(ve=>{console.error("Error in submitting reference:",ve)})}const X=te=>{te.preventDefault(),H().then(()=>{PaystackPop.setup({key:"pk_test_b3a784f6e80c51512ad4c66f77e82354c642c721",email:w.email,amount:k*100,currency:"GHS",ref:D,onClose:function(){l("error"),c("Transaction was not completed."),d(!0)},callback:function(He){console.log("Payment successful, response:"),ue(He)}}).openIframe()}).catch(ve=>{console.error("Error in submitting reference:",ve),o(),l("error"),c("Failed to initialize payment. Please try again."),d(!0)})},ue=async te=>{try{const ve={paymentAddress:w,totalPrice:k,paystackReference:te.reference},He=await fetch(`${h}/place-order`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ve),credentials:"include"}),yt=await He.json();if(!He.ok)throw new Error(yt.message||"Failed to place order");o(),l("success"),c("Order placed successfully!"),d(!0),f("/profile")}catch{l("error"),c("An error occured while placing order."),d(!0)}},Re=async()=>{try{g(!0),await o()}catch(te){console.error("Failed to fetch cart items:",te)}finally{g(!1)}};return C.useEffect(()=>{a?Re():f("/")},[a,f]),m?b.jsx(fr,{}):b.jsx("div",{className:"container mx-auto p-6",children:b.jsx("form",{onSubmit:ue,id:"paymentForm",children:b.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg",children:[y===1&&b.jsxs(ut.div,{initial:"hidden",animate:"visible",variants:q,className:"space-y-4",children:[b.jsx("h2",{className:"text-xl font-semibold",children:"Enter Your Address"}),b.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[b.jsxs("div",{children:[b.jsx("input",{type:"text",placeholder:"Phone",value:w.phone,onChange:te=>S({...w,phone:te.target.value}),className:"w-full border rounded py-2 px-3"}),T.phone&&b.jsx("span",{className:"text-red-500 text-sm",children:T.phone})]}),b.jsxs("div",{children:[b.jsx("input",{type:"text",placeholder:"Address",value:w.address,onChange:te=>S({...w,address:te.target.value}),className:"w-full border rounded py-2 px-3"}),T.address&&b.jsx("span",{className:"text-red-500 text-sm",children:T.address})]}),b.jsx("div",{children:b.jsx("input",{type:"text",placeholder:"Address 2 (Optional)",value:w.address2,onChange:te=>S({...w,address2:te.target.value}),className:"w-full border rounded py-2 px-3"})}),b.jsxs("div",{children:[b.jsx("input",{type:"text",placeholder:"City",value:w.city,onChange:te=>S({...w,city:te.target.value}),className:"w-full border rounded py-2 px-3"}),T.city&&b.jsx("span",{className:"text-red-500 text-sm",children:T.city})]}),b.jsxs("div",{children:[b.jsxs("select",{value:w.country,onChange:te=>S({...w,country:te.target.value}),className:"w-full border rounded py-2 px-3",children:[b.jsx("option",{value:"",children:"Select Country"}),b.jsx("option",{value:"Ghana",children:"Ghana"}),b.jsx("option",{value:"Nigeria",children:"Nigeria"})]}),T.country&&b.jsx("span",{className:"text-red-500 text-sm",children:T.country})]})]}),b.jsx("button",{onClick:L,disabled:!w.phone||!w.address||!w.city||!w.country,className:`px-4 py-2 rounded mt-4 ${!w.phone||!w.address||!w.city||!w.country?"bg-gray-300 text-gray-700 cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"Confirm Address"})]}),y===2&&b.jsxs(ut.div,{initial:"hidden",animate:"visible",variants:q,className:"space-y-4",children:[b.jsx("h2",{className:"text-xl font-semibold",children:"Order Summary"}),b.jsx("ul",{className:"space-y-2",children:n.products.map((te,ve)=>b.jsxs("li",{className:"flex justify-between",children:[b.jsx("span",{children:te.name}),b.jsxs("span",{children:["GH₵",te.price]})]},ve))}),b.jsxs("div",{className:"font-semibold mt-4",children:["Total: GH₵",k]}),b.jsxs("div",{className:"flex space-x-4 mt-6",children:[b.jsx("button",{onClick:W,className:"bg-gray-500 text-white px-4 py-2 rounded",children:"Back"}),b.jsx("button",{onClick:L,className:"bg-blue-500 text-white px-4 py-2 rounded",id:"proceed",children:"Proceed to Payment"})]})]}),y===3&&b.jsxs(ut.div,{initial:"hidden",animate:"visible",variants:q,className:"space-y-4",children:[b.jsx("h2",{className:"text-xl font-semibold",children:"Payment Details"}),b.jsxs("div",{children:[b.jsx("label",{className:"block mb-1",children:"Email"}),b.jsx("input",{type:"email",id:"email",className:"w-full border rounded py-2 px-3",value:w==null?void 0:w.email,onChange:te=>S({...w,email:te.target.value})})]}),b.jsxs("div",{children:[b.jsx("label",{className:"block mb-1",children:"Amount"}),b.jsx("input",{type:"text",id:"amount",className:"w-full border rounded py-2 px-3",value:k,readOnly:!0})]}),b.jsxs("div",{children:[b.jsx("label",{className:"block mb-1",children:"First Name"}),b.jsx("input",{type:"text",className:"w-full border rounded py-2 px-3",defaultValue:r==null?void 0:r.firstName,readOnly:!0})]}),b.jsxs("div",{children:[b.jsx("label",{className:"block mb-1",children:"Last Name"}),b.jsx("input",{type:"text",className:"w-full border rounded py-2 px-3",defaultValue:r==null?void 0:r.lastName,readOnly:!0})]}),b.jsx("button",{type:"button",className:"bg-green-500 text-white px-4 py-2 rounded mt-4",id:"pay-button",onClick:X,children:"Place Order"})]})]})})})},kP=({fetchUser:n,isLoggedIn:r,setPopupType:o,setPopupMessage:a,setShowPopup:l})=>{const c="http://localhost:5000",d=Hn(),[h,f]=C.useState(!0),[m,g]=C.useState({firstName:"",lastName:"",email:"",password1:"",password2:"",termsAccepted:!1}),[y,x]=C.useState({}),[k,w]=C.useState(!1),[S,T]=C.useState([]),O=q=>{const{name:H,value:X,type:ue,checked:Re}=q.target;g({...m,[H]:ue==="checkbox"?Re:X}),H==="email"&&(z(X)?x(te=>({...te,email:"Email is already in use"})):x(te=>({...te,email:""})))},M=()=>{const q={};return m.firstName||(q.firstName="First name is required"),m.lastName||(q.lastName="Last name is required"),m.email||(q.email="Email is required"),/\S+@\S+\.\S+/.test(m.email)||(q.email="Email is invalid"),m.password1||(q.password1="Password is required"),m.password1!==m.password2&&(q.password2="Passwords must match"),m.termsAccepted||(q.termsAccepted="You must accept the terms and conditions"),q},D=async()=>{try{const H=await(await fetch(`${c}/auth/get_users`)).json();T(H.users)}catch(q){console.error("Error fetching user emails:",q)}finally{f(!1)}},z=q=>S.length>0&&S.includes(q),L=async q=>{q.preventDefault();const H=M();if(z(m.email)&&(H.email="Email is already in use"),Object.keys(H).length===0){w(!0);try{const X=await fetch(`${c}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:m.firstName,lastName:m.lastName,email:m.email,password1:m.password1}),credentials:"include"});if(!X.ok){const Re=await X.json();x({general:Re.message||"Registration failed. Please try again."}),w(!1);return}const ue=await X.json();console.log("Registration successful:",ue),await n(),w(!1),o("success"),a("Your account has been created successfully."),l(!0),d("/home")}catch(X){console.error("Unexpected error:",X),x({general:"An unexpected error occurred, please try again."}),w(!1)}}else x(H)},W=async()=>{f(!0),await D(),f(!1)};return C.useEffect(()=>{r?d("/home"):W()},[r]),h?b.jsx(fr,{}):b.jsxs("div",{className:"max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl mt-10",children:[b.jsx("h2",{className:"text-3xl font-bold text-center text-gray-800 mb-6",children:"Create an Account"}),b.jsxs("form",{onSubmit:L,className:"space-y-6",children:[b.jsxs("div",{children:[b.jsxs("div",{children:[b.jsx("label",{htmlFor:"firstName",className:"block text-gray-700 font-medium mb-2",children:"First Name"}),b.jsx("input",{type:"text",id:"firstName",name:"firstName",value:m.firstName,onChange:O,className:"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500",placeholder:"Enter your first name"}),y.firstName&&b.jsx("p",{className:"text-red-500 text-sm mt-1",children:y.firstName})]}),b.jsxs("div",{children:[b.jsx("label",{htmlFor:"lastName",className:"block text-gray-700 font-medium mb-2",children:"Last Name"}),b.jsx("input",{type:"text",id:"lastName",name:"lastName",value:m.lastName,onChange:O,className:"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500",placeholder:"Enter your last name"}),y.lastName&&b.jsx("p",{className:"text-red-500 text-sm mt-1",children:y.lastName})]})]}),b.jsxs("div",{children:[b.jsx("label",{htmlFor:"email",className:"block text-gray-700 font-medium mb-2",children:"Email Address"}),b.jsx("input",{type:"email",id:"email",name:"email",value:m.email,onChange:O,className:"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500",placeholder:"Enter your email"}),y.email&&b.jsx("p",{className:"text-red-500 text-sm mt-1",children:y.email})]}),b.jsxs("div",{children:[b.jsx("label",{htmlFor:"password1",className:"block text-gray-700 font-medium mb-2",children:"Password"}),b.jsx("input",{type:"password",id:"password1",name:"password1",value:m.password1,onChange:O,className:"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500",placeholder:"Enter your password"}),y.password1&&b.jsx("p",{className:"text-red-500 text-sm mt-1",children:y.password1})]}),b.jsxs("div",{children:[b.jsx("label",{htmlFor:"password2",className:"block text-gray-700 font-medium mb-2",children:"Confirm Password"}),b.jsx("input",{type:"password",id:"password2",name:"password2",value:m.password2,onChange:O,className:"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500",placeholder:"Confirm your password"}),y.password2&&b.jsx("p",{className:"text-red-500 text-sm mt-1",children:y.password2})]}),b.jsxs("div",{className:"flex items-center",children:[b.jsx("input",{type:"checkbox",id:"termsAccepted",name:"termsAccepted",checked:m.termsAccepted,onChange:O,className:"h-5 w-5 text-yellow-500 border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"}),b.jsxs("label",{htmlFor:"termsAccepted",className:"ml-2 text-gray-700",children:["I agree to the ",b.jsx("span",{className:"text-yellow-500",children:"Terms & Conditions"})]}),y.termsAccepted&&b.jsx("p",{className:"text-red-500 text-sm mt-1",children:y.termsAccepted})]}),b.jsx("div",{children:b.jsx("button",{type:"submit",className:"w-full py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition duration-300",disabled:k,children:k?b.jsx(pi,{}):"Create Account"})}),y.general&&b.jsx("p",{className:"text-red-500 text-sm mt-2",children:y.general})]})]})},SP=({fetchUser:n,isLoggedIn:r})=>{const o="http://localhost:5000",a=Hn(),[l,c]=C.useState({email:"",password:""}),[d,h]=C.useState({}),[f,m]=C.useState(!1),[g,y]=C.useState([]),[x,k]=C.useState(!1),w=async()=>{try{const z=await(await fetch(`${o}/auth/get_users`)).json();y(z.users)}catch(D){console.error("Error fetching user emails:",D)}finally{k(!1)}};C.useEffect(()=>{k(!0),w()},[]);const S=D=>{const{name:z,value:L}=D.target;c({...l,[z]:L})},T=()=>{const D={};return l.email||(D.email="Email is required"),/\S+@\S+\.\S+/.test(l.email)||(D.email="Email is invalid"),l.password||(D.password="Password is required"),D},O=D=>g.includes(D),M=async D=>{D.preventDefault();const z=T();if(O(l.email)||(z.email="Email does not exist"),Object.keys(z).length===0){m(!0);try{const L=await fetch(`${o}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l),credentials:"include"});if(L.status===401){const q=await L.json();h({general:"Invalid credentials, please try again."}),m(!1);return}const W=await L.json();console.log("Login successful:",W),await n(),m(!1),a("/home")}catch(L){console.error("Unexpected error:",L),h({general:"An unexpected error occurred, please try again."}),m(!1)}}else h(z)};return C.useEffect(()=>{r&&a("/home")},[r]),x?b.jsx(fr,{}):b.jsxs("div",{className:"max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl mt-10",children:[b.jsx("h2",{className:"text-3xl font-bold text-center text-gray-800 mb-6",children:"Login to Your Account"}),b.jsxs("form",{onSubmit:M,className:"space-y-6",children:[b.jsxs("div",{children:[b.jsx("label",{htmlFor:"email",className:"block text-gray-700 font-medium mb-2",children:"Email Address"}),b.jsx("input",{type:"email",id:"email",name:"email",value:l.email,onChange:S,className:"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500",placeholder:"Enter your email"}),d.email&&b.jsx("p",{className:"text-red-500 text-sm mt-1",children:d.email})]}),b.jsxs("div",{children:[b.jsx("label",{htmlFor:"password",className:"block text-gray-700 font-medium mb-2",children:"Password"}),b.jsx("input",{type:"password",id:"password",name:"password",value:l.password,onChange:S,className:"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500",placeholder:"Enter your password"}),d.password&&b.jsx("p",{className:"text-red-500 text-sm mt-1",children:d.password})]}),d.general&&b.jsx("p",{className:"text-red-500 text-sm mt-1",children:d.general}),b.jsx("div",{children:b.jsx("button",{type:"submit",className:"w-full py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition duration-300",disabled:f,children:f?b.jsx(pi,{}):"Log In"})}),b.jsx("div",{className:"text-center mt-4",children:b.jsx("a",{href:"/forgot-password",className:"text-yellow-500 hover:text-yellow-600 transition duration-300",children:"Forgot Password?"})}),b.jsx("div",{className:"text-center mt-4",children:b.jsxs("p",{className:"text-sm text-gray-600",children:["Don’t have an account?"," ",b.jsx(ui,{to:"/register",className:"text-yellow-500 hover:text-yellow-600 transition duration-300",children:"Sign Up"})]})})]})]})};function PP(){const n="http://localhost:5000",[r,o]=C.useState(null),[a,l]=C.useState([]),[c,d]=C.useState(!0),[h,f]=C.useState(null),[m,g]=C.useState([]),[y,x]=C.useState(!0),[k,w]=C.useState(!1),[S,T]=C.useState(null),[O,M]=C.useState(null),D=Hn(),z=async()=>{await fetch(`${n}/auth/logout`,{method:"GET",credentials:"include"}),await o(null),await l([]),await g([]),await x(!1),T("Successfully logged out"),M("info"),w(!0),D("/")},L=async()=>{try{const H=await fetch(`${n}/auth/get_current_user`,{method:"GET",credentials:"include"});if(H.ok){const X=await H.json();o(X),x(!0),f(null)}else x(!1),o(null),H.status!==401&&H.status!==404&&f("Error fetching user data.")}catch{f("Network error occurred while fetching user.")}},W=async()=>{if(!(!y||!r))try{const H=await fetch(`${n}/cart`,{method:"GET",credentials:"include"});if(H.ok){const X=await H.json();l(X),f(null)}else f("Error fetching cart items.")}catch{f("Network error occurred while fetching cart.")}},q=async()=>{d(!0),await L(),d(!1)};return C.useEffect(()=>{q()},[]),C.useEffect(()=>{y&&r&&W()},[y,r]),b.jsx("div",{children:c?b.jsx(fr,{}):b.jsxs(b.Fragment,{children:[b.jsx(hS,{isLoggedIn:y,setIsLoggedIn:x,cartItems:a,logout:z}),k&&b.jsx(_S,{message:S,type:O}),b.jsxs(g1,{children:[b.jsx(un,{path:"/",element:b.jsx(pm,{isLoggedIn:y}),fetchCartItems:W,setPopupType:M,setPopupMessage:T,setShowPopup:w}),b.jsx(un,{path:"/home",element:b.jsx(pm,{isLoggedIn:y,fetchCartItems:W,setPopupType:M,setPopupMessage:T,setShowPopup:w})}),b.jsx(un,{path:"/profile",element:b.jsx(IS,{isLoggedIn:y,currentUser:r})}),b.jsx(un,{path:"/edit-profile",element:b.jsx(BS,{fetchUser:L,isLoggedIn:y,currentUser:r,setPopupType:M,setPopupMessage:T,setShowPopup:w})}),b.jsx(un,{path:"/cart",element:b.jsx(DS,{cartItems:a,isLoggedIn:y,fetchCartItems:W})}),b.jsx(un,{path:"/checkout",element:b.jsx(wP,{isLoggedIn:y,setPopupType:M,setPopupMessage:T,setShowPopup:w,currentUser:r,cartItems:a,fetchCartItems:W,isLoggedIn:y})}),b.jsx(un,{path:"/register",element:b.jsx(kP,{fetchUser:L,isLoggedIn:y,setPopupType:M,setPopupMessage:T,setShowPopup:w})}),b.jsx(un,{path:"/login",element:b.jsx(SP,{fetchUser:L,isLoggedIn:y})})]})]})})}Tv.createRoot(document.getElementById("root")).render(b.jsx(C.StrictMode,{children:b.jsx(I1,{children:b.jsx(PP,{})})}));
