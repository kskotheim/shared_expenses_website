{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.eQ(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.cR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.cR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.cR(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={cG:function cG(){},
as:function(){return new P.aB("No element")},
ba:function ba(){},
bo:function bo(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bp:function bp(a,b,c){this.a=a
this.b=b
this.$ti=c},
bq:function bq(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
bK:function bK(a,b,c){this.a=a
this.b=b
this.$ti=c},
a7:function(a){var u,t=H.eR(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
eA:function(a){return v.types[H.a5(a)]},
eG:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.t(a).$ia2},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aX(a)
if(typeof u!=="string")throw H.d(H.ds(a))
return u},
ae:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ax:function(a){return H.ec(a)+H.cN(H.U(a),0,null)},
ec:function(a){var u,t,s,r,q,p,o,n=J.t(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.q||!!n.$iag){r=C.e(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.a7(t.length>1&&C.c.H(t,0)===36?C.c.a7(t,1):t)},
dy:function(a){throw H.d(H.ds(a))},
v:function(a,b){if(a==null)J.ap(a)
throw H.d(H.aU(a,b))},
aU:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.N(!0,b,s,null)
u=H.a5(J.ap(a))
if(!(b<0)){if(typeof u!=="number")return H.dy(u)
t=b>=u}else t=!0
if(t)return P.a0(b,a,s,null,u)
return P.bt(b,s)},
ds:function(a){return new P.N(!0,a,null,null)},
d:function(a){var u
if(a==null)a=new P.aw()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.dF})
u.name=""}else u.toString=H.dF
return u},
dF:function(){return J.aX(this.dartException)},
aW:function(a){throw H.d(a)},
eP:function(a){throw H.d(P.cC(a))},
G:function(a){var u,t,s,r,q,p
a=H.eM(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.W([],[P.l])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.bD(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
bE:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
df:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
dc:function(a,b){return new H.br(a,b==null?null:b.method)},
cH:function(a,b){var u=b==null,t=u?null:b.method
return new H.bm(a,t,u?null:b.receiver)},
ao:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.cx(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.r.ai(t,16)&8191)===10)switch(s){case 438:return f.$1(H.cH(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.dc(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.dJ()
q=$.dK()
p=$.dL()
o=$.dM()
n=$.dP()
m=$.dQ()
l=$.dO()
$.dN()
k=$.dS()
j=$.dR()
i=r.t(u)
if(i!=null)return f.$1(H.cH(H.M(u),i))
else{i=q.t(u)
if(i!=null){i.method="call"
return f.$1(H.cH(H.M(u),i))}else{i=p.t(u)
if(i==null){i=o.t(u)
if(i==null){i=n.t(u)
if(i==null){i=m.t(u)
if(i==null){i=l.t(u)
if(i==null){i=o.t(u)
if(i==null){i=k.t(u)
if(i==null){i=j.t(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.dc(H.M(u),i))}}return f.$1(new H.bH(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.aA()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.N(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.aA()
return a},
am:function(a){var u
if(a==null)return new H.aQ(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.aQ(a)},
eF:function(a,b,c,d,e,f){H.j(a,"$icD")
switch(H.a5(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(new P.bX("Unsupported number of arguments for wrapped closure"))},
aT:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.eF)
a.$identity=u
return u},
e3:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.bx().constructor.prototype):Object.create(new H.a9(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.F
if(typeof t!=="number")return t.w()
$.F=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.d4(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.e_(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.d4(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
e_:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.eA,a)
if(typeof a=="function")if(b)return a
else{u=c?H.d3:H.cB
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
e0:function(a,b,c,d){var u=H.cB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
d4:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.e2(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.e0(t,!r,u,b)
if(t===0){r=$.F
if(typeof r!=="number")return r.w()
$.F=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.aa
return new Function(r+H.e(q==null?$.aa=H.b1("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.F
if(typeof r!=="number")return r.w()
$.F=r+1
o+=r
r="return function("+o+"){return this."
q=$.aa
return new Function(r+H.e(q==null?$.aa=H.b1("self"):q)+"."+H.e(u)+"("+o+");}")()},
e1:function(a,b,c,d){var u=H.cB,t=H.d3
switch(b?-1:a){case 0:throw H.d(H.ee("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
e2:function(a,b){var u,t,s,r,q,p,o,n=$.aa
if(n==null)n=$.aa=H.b1("self")
u=$.d2
if(u==null)u=$.d2=H.b1("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.e1(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.F
if(typeof u!=="number")return u.w()
$.F=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.F
if(typeof u!=="number")return u.w()
$.F=u+1
return new Function(n+u+"}")()},
cR:function(a,b,c,d,e,f,g){return H.e3(a,b,c,d,!!e,!!f,g)},
cB:function(a){return a.a},
d3:function(a){return a.c},
b1:function(a){var u,t,s,r=new H.a9("self","target","receiver","name"),q=J.cE(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
ci:function(a){if(a==null)H.et("boolean expression must not be null")
return a},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.L(a,"String"))},
fa:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.L(a,"num"))},
ex:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.L(a,"bool"))},
a5:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.L(a,"int"))},
dD:function(a,b){throw H.d(H.L(a,H.a7(H.M(b).substring(2))))},
eL:function(a,b){throw H.d(H.dZ(a,H.a7(H.M(b).substring(2))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.t(a)[b])return a
H.dD(a,b)},
eE:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.t(a)[b]
else u=!0
if(u)return a
H.eL(a,b)},
eH:function(a,b){var u
if(a==null)return a
u=J.t(a)
if(!!u.$ir)return a
if(u[b])return a
H.dD(a,b)},
du:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a5(u)]
else return a.$S()}return},
aV:function(a,b){var u
if(typeof a=="function")return!0
u=H.du(J.t(a))
if(u==null)return!1
return H.dj(u,null,b,null)},
h:function(a,b){var u,t
if(a==null)return a
if($.cL)return a
$.cL=!0
try{if(H.aV(a,b))return a
u=H.cw(b)
t=H.L(a,u)
throw H.d(t)}finally{$.cL=!1}},
cS:function(a,b){if(a!=null&&!H.cQ(a,b))H.aW(H.L(a,H.cw(b)))
return a},
L:function(a,b){return new H.bF("TypeError: "+P.aq(a)+": type '"+H.e(H.dp(a))+"' is not a subtype of type '"+b+"'")},
dZ:function(a,b){return new H.b2("CastError: "+P.aq(a)+": type '"+H.e(H.dp(a))+"' is not a subtype of type '"+b+"'")},
dp:function(a){var u,t=J.t(a)
if(!!t.$iab){u=H.du(t)
if(u!=null)return H.cw(u)
return"Closure"}return H.ax(a)},
et:function(a){throw H.d(new H.bL(a))},
eQ:function(a){throw H.d(new P.b7(a))},
ee:function(a){return new H.bu(a)},
dw:function(a){return v.getIsolateTag(a)},
W:function(a,b){a.$ti=b
return a},
U:function(a){if(a==null)return
return a.$ti},
f9:function(a,b,c){return H.a6(a["$a"+H.e(c)],H.U(b))},
cm:function(a,b,c,d){var u=H.a6(a["$a"+H.e(c)],H.U(b))
return u==null?null:u[d]},
ez:function(a,b,c){var u=H.a6(a["$a"+H.e(b)],H.U(a))
return u==null?null:u[c]},
i:function(a,b){var u=H.U(a)
return u==null?null:u[b]},
cw:function(a){return H.T(a,null)},
T:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.a7(a[0].name)+H.cN(a,1,b)
if(typeof a=="function")return H.a7(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a5(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.v(b,t)
return H.e(b[t])}if('func' in a)return H.el(a,b)
if('futureOr' in a)return"FutureOr<"+H.T("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
el:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.W([],[P.l])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.k(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.v(a0,m)
p=C.c.w(p,a0[m])
l=u[q]
if(l!=null&&l!==P.k)p+=" extends "+H.T(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.T(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.T(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.T(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.ey(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.M(n[g])
i=i+h+H.T(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
cN:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aC("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.T(p,c)}return"<"+u.h(0)+">"},
a6:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cP:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.U(a)
t=J.t(a)
if(t[b]==null)return!1
return H.dr(H.a6(t[d],u),null,c,null)},
cO:function(a,b,c,d){if(a==null)return a
if(H.cP(a,b,c,d))return a
throw H.d(H.L(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.a7(b.substring(2))+H.cN(c,0,null),v.mangledGlobalNames)))},
dr:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.C(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.C(a[t],b,c[t],d))return!1
return!0},
f7:function(a,b,c){return a.apply(b,H.a6(J.t(b)["$a"+H.e(c)],H.U(b)))},
dz:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="k"||a.name==="q"||a===-1||a===-2||H.dz(u)}return!1},
cQ:function(a,b){var u,t
if(a==null)return b==null||b.name==="k"||b.name==="q"||b===-1||b===-2||H.dz(b)
if(b==null||b===-1||b.name==="k"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cQ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.aV(a,b)}u=J.t(a).constructor
t=H.U(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.C(u,null,b,null)},
m:function(a,b){if(a!=null&&!H.cQ(a,b))throw H.d(H.L(a,H.cw(b)))
return a},
C:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="k"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="k"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.C(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="q")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.C("type" in a?a.type:l,b,s,d)
else if(H.C(a,b,s,d))return!0
else{if(!('$i'+"ac" in t.prototype))return!1
r=t.prototype["$a"+"ac"]
q=H.a6(r,u?a.slice(1):l)
return H.C(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.dj(a,b,c,d)
if('func' in a)return c.name==="cD"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.dr(H.a6(m,u),b,p,d)},
dj:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.C(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.C(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.C(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.C(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.eK(h,b,g,d)},
eK:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.C(c[s],d,a[s],b))return!1}return!0},
f8:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
eI:function(a){var u,t,s,r,q=H.M($.dx.$1(a)),p=$.cj[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.cq[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.M($.dq.$2(a,q))
if(q!=null){p=$.cj[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.cq[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.cv(u)
$.cj[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.cq[q]=u
return u}if(s==="-"){r=H.cv(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.dC(a,u)
if(s==="*")throw H.d(P.dg(q))
if(v.leafTags[q]===true){r=H.cv(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.dC(a,u)},
dC:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.cW(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
cv:function(a){return J.cW(a,!1,null,!!a.$ia2)},
eJ:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.cv(u)
else return J.cW(u,c,null,null)},
eC:function(){if(!0===$.cV)return
$.cV=!0
H.eD()},
eD:function(){var u,t,s,r,q,p,o,n
$.cj=Object.create(null)
$.cq=Object.create(null)
H.eB()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.dE.$1(q)
if(p!=null){o=H.eJ(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
eB:function(){var u,t,s,r,q,p,o=C.k()
o=H.a4(C.l,H.a4(C.m,H.a4(C.f,H.a4(C.f,H.a4(C.n,H.a4(C.o,H.a4(C.p(C.e),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.dx=new H.cn(r)
$.dq=new H.co(q)
$.dE=new H.cp(p)},
a4:function(a,b){return a(b)||b},
ea:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(new P.bf("Illegal RegExp pattern ("+String(p)+")",a))},
eO:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
eM:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bD:function bD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
br:function br(a,b){this.a=a
this.b=b},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a){this.a=a},
cx:function cx(a){this.a=a},
aQ:function aQ(a){this.a=a
this.b=null},
ab:function ab(){},
bC:function bC(){},
bx:function bx(){},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bF:function bF(a){this.a=a},
b2:function b2(a){this.a=a},
bu:function bu(a){this.a=a},
bL:function bL(a){this.a=a},
cn:function cn(a){this.a=a},
co:function co(a){this.a=a},
cp:function cp(a){this.a=a},
bl:function bl(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ey:function(a){return J.e7(a?Object.keys(a):[],null)},
eR:function(a){return v.mangledGlobalNames[a]}},J={
cW:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cl:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.cV==null){H.eC()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.dg("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.cX()]
if(r!=null)return r
r=H.eI(a)
if(r!=null)return r
if(typeof a=="function")return C.t
u=Object.getPrototypeOf(a)
if(u==null)return C.j
if(u===Object.prototype)return C.j
if(typeof s=="function"){Object.defineProperty(s,$.cX(),{value:C.d,enumerable:false,writable:true,configurable:true})
return C.d}return C.d},
e7:function(a,b){return J.cE(H.W(a,[b]))},
cE:function(a){a.fixed$length=Array
return a},
da:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
e8:function(a,b){var u,t
for(u=a.length;b<u;){t=C.c.H(a,b)
if(t!==32&&t!==13&&!J.da(t))break;++b}return b},
e9:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.c.a0(a,u)
if(t!==32&&t!==13&&!J.da(t))break}return b},
t:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.at.prototype
return J.bj.prototype}if(typeof a=="string")return J.a1.prototype
if(a==null)return J.bk.prototype
if(typeof a=="boolean")return J.bi.prototype
if(a.constructor==Array)return J.Q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
return a}if(a instanceof P.k)return a
return J.cl(a)},
cT:function(a){if(typeof a=="string")return J.a1.prototype
if(a==null)return a
if(a.constructor==Array)return J.Q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
return a}if(a instanceof P.k)return a
return J.cl(a)},
cU:function(a){if(a==null)return a
if(a.constructor==Array)return J.Q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
return a}if(a instanceof P.k)return a
return J.cl(a)},
dv:function(a){if(typeof a=="string")return J.a1.prototype
if(a==null)return a
if(!(a instanceof P.k))return J.ag.prototype
return a},
al:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
return a}if(a instanceof P.k)return a
return J.cl(a)},
dT:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.t(a).D(a,b)},
dU:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.eG(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cT(a).u(a,b)},
dV:function(a,b,c,d){return J.al(a).ac(a,b,c,d)},
cy:function(a,b,c){return J.dv(a).an(a,b,c)},
cZ:function(a,b){return J.cU(a).p(a,b)},
X:function(a){return J.al(a).gC(a)},
dW:function(a){return J.al(a).ga_(a)},
d_:function(a){return J.t(a).gq(a)},
cz:function(a){return J.cU(a).gm(a)},
d0:function(a){return J.cU(a).gn(a)},
ap:function(a){return J.cT(a).gi(a)},
dX:function(a){return J.al(a).gN(a)},
dY:function(a){return J.al(a).aq(a)},
aX:function(a){return J.t(a).h(a)},
d1:function(a){return J.dv(a).ax(a)},
x:function x(){},
bi:function bi(){},
bk:function bk(){},
av:function av(){},
bs:function bs(){},
ag:function ag(){},
R:function R(){},
Q:function Q(a){this.$ti=a},
cF:function cF(a){this.$ti=a},
a8:function a8(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
au:function au(){},
at:function at(){},
bj:function bj(){},
a1:function a1(){}},P={
ef:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.eu()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.aT(new P.bN(s),1)).observe(u,{childList:true})
return new P.bM(s,u,t)}else if(self.setImmediate!=null)return P.ev()
return P.ew()},
eg:function(a){self.scheduleImmediate(H.aT(new P.bO(H.h(a,{func:1,ret:-1})),0))},
eh:function(a){self.setImmediate(H.aT(new P.bP(H.h(a,{func:1,ret:-1})),0))},
ei:function(a){H.h(a,{func:1,ret:-1})
P.ek(0,a)},
ek:function(a,b){var u=new P.cc()
u.aa(a,b)
return u},
ej:function(a,b){var u,t,s
b.a=1
try{a.a3(new P.bZ(b),new P.c_(b),null)}catch(s){u=H.ao(s)
t=H.am(s)
P.eN(new P.c0(b,u,t))}},
di:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.j(a.c,"$iB")
if(u>=4){t=b.L()
b.a=a.a
b.c=a.c
P.ah(b,t)}else{t=H.j(b.c,"$iI")
b.a=2
b.c=a
a.Y(t)}},
ah:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.j(g.c,"$iw")
P.cf(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.ah(h.a,b)}g=h.a
q=g.c
u.a=t
u.b=q
p=!t
if(p){o=b.c
o=(o&1)!==0||(o&15)===8}else o=!0
if(o){o=b.b
n=o.b
if(t){m=g.b===n
m=!(m||m)}else m=!1
if(m){H.j(q,"$iw")
P.cf(i,i,g.b,q.a,q.b)
return}l=$.n
if(l!==n)$.n=n
else l=i
g=b.c
if((g&15)===8)new P.c4(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.c3(u,b,q).$0()}else if((g&2)!==0)new P.c2(h,u,b).$0()
if(l!=null)$.n=l
g=u.b
if(!!J.t(g).$iac){if(g.a>=4){k=H.j(o.c,"$iI")
o.c=null
b=o.F(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.di(g,o)
return}}j=b.b
k=H.j(j.c,"$iI")
j.c=null
b=j.F(k)
g=u.a
p=u.b
if(!g){H.m(p,H.i(j,0))
j.a=4
j.c=p}else{H.j(p,"$iw")
j.a=8
j.c=p}h.a=j
g=j}},
eo:function(a,b){if(H.aV(a,{func:1,args:[P.k,P.z]}))return H.h(a,{func:1,ret:null,args:[P.k,P.z]})
if(H.aV(a,{func:1,args:[P.k]}))return H.h(a,{func:1,ret:null,args:[P.k]})
throw H.d(P.cA(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
en:function(){var u,t
for(;u=$.a3,u!=null;){$.ak=null
t=u.b
$.a3=t
if(t==null)$.aj=null
u.a.$0()}},
er:function(){$.cM=!0
try{P.en()}finally{$.ak=null
$.cM=!1
if($.a3!=null)$.cY().$1(P.dt())}},
dn:function(a){var u=new P.aE(a)
if($.a3==null){$.a3=$.aj=u
if(!$.cM)$.cY().$1(P.dt())}else $.aj=$.aj.b=u},
eq:function(a){var u,t,s=$.a3
if(s==null){P.dn(a)
$.ak=$.aj
return}u=new P.aE(a)
t=$.ak
if(t==null){u.b=s
$.a3=$.ak=u}else{u.b=t.b
$.ak=t.b=u
if(u.b==null)$.aj=u}},
eN:function(a){var u=null,t=$.n
if(C.b===t){P.ch(u,u,C.b,a)
return}P.ch(u,u,t,H.h(t.Z(a),{func:1,ret:-1}))},
cf:function(a,b,c,d,e){var u={}
u.a=d
P.eq(new P.cg(u,e))},
dl:function(a,b,c,d,e){var u,t=$.n
if(t===c)return d.$0()
$.n=c
u=t
try{t=d.$0()
return t}finally{$.n=u}},
dm:function(a,b,c,d,e,f,g){var u,t=$.n
if(t===c)return d.$1(e)
$.n=c
u=t
try{t=d.$1(e)
return t}finally{$.n=u}},
ep:function(a,b,c,d,e,f,g,h,i){var u,t=$.n
if(t===c)return d.$2(e,f)
$.n=c
u=t
try{t=d.$2(e,f)
return t}finally{$.n=u}},
ch:function(a,b,c,d){var u
H.h(d,{func:1,ret:-1})
u=C.b!==c
if(u)d=!(!u||!1)?c.Z(d):c.al(d,-1)
P.dn(d)},
bN:function bN(a){this.a=a},
bM:function bM(a,b,c){this.a=a
this.b=b
this.c=c},
bO:function bO(a){this.a=a},
bP:function bP(a){this.a=a},
cc:function cc(){},
cd:function cd(a,b){this.a=a
this.b=b},
I:function I(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
B:function B(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
bY:function bY(a,b){this.a=a
this.b=b},
c1:function c1(a,b){this.a=a
this.b=b},
bZ:function bZ(a){this.a=a},
c_:function c_(a){this.a=a},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c5:function c5(a){this.a=a},
c3:function c3(a,b,c){this.a=a
this.b=b
this.c=c},
c2:function c2(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a){this.a=a
this.b=null},
by:function by(){},
bA:function bA(a,b){this.a=a
this.b=b},
bB:function bB(a,b){this.a=a
this.b=b},
bz:function bz(){},
w:function w(a,b){this.a=a
this.b=b},
ce:function ce(){},
cg:function cg(a,b){this.a=a
this.b=b},
c7:function c7(){},
c9:function c9(a,b,c){this.a=a
this.b=b
this.c=c},
c8:function c8(a,b){this.a=a
this.b=b},
ca:function ca(a,b,c){this.a=a
this.b=b
this.c=c},
db:function(a){return new P.c6([a])},
cK:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ai:function(a,b,c){var u=new P.aK(a,b,[c])
u.c=a.e
return u},
e6:function(a,b,c){var u,t
if(P.dk(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.W([],[P.l])
C.a.k($.J,a)
try{P.em(a,u)}finally{if(0>=$.J.length)return H.v($.J,-1)
$.J.pop()}t=P.de(b,H.eH(u,"$ip"),", ")+c
return t.charCodeAt(0)==0?t:t},
bh:function(a,b,c){var u,t
if(P.dk(a))return b+"..."+c
u=new P.aC(b)
C.a.k($.J,a)
try{t=u
t.a=P.de(t.a,a,", ")}finally{if(0>=$.J.length)return H.v($.J,-1)
$.J.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
dk:function(a){var u,t
for(u=$.J.length,t=0;t<u;++t)if(a===$.J[t])return!0
return!1},
em:function(a,b){var u,t,s,r,q,p,o,n=a.gm(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.j())return
u=H.e(n.gl())
C.a.k(b,u)
m+=u.length+2;++l}if(!n.j()){if(l<=5)return
if(0>=b.length)return H.v(b,-1)
t=b.pop()
if(0>=b.length)return H.v(b,-1)
s=b.pop()}else{r=n.gl();++l
if(!n.j()){if(l<=4){C.a.k(b,H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.v(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gl();++l
for(;n.j();r=q,q=p){p=n.gl();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.v(b,-1)
m-=b.pop().length+2;--l}C.a.k(b,"...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.v(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.k(b,o)
C.a.k(b,s)
C.a.k(b,t)},
c6:function c6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
aJ:function aJ(a){this.a=a
this.b=null},
aK:function aK(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bn:function bn(){},
u:function u(){},
az:function az(){},
bw:function bw(){},
cb:function cb(){},
aL:function aL(){},
aP:function aP(){},
e5:function(a){if(a instanceof H.ab)return a.h(0)
return"Instance of '"+H.e(H.ax(a))+"'"},
eb:function(a,b,c){var u,t=[c],s=H.W([],t)
for(u=a.gm(a);u.j();)C.a.k(s,H.m(u.gl(),c))
if(b)return s
return H.cO(J.cE(s),"$ir",t,"$ar")},
ed:function(a){return new H.bl(a,H.ea(a,!1,!0,!1,!1,!1))},
de:function(a,b,c){var u=J.cz(b)
if(!u.j())return a
if(c.length===0){do a+=H.e(u.gl())
while(u.j())}else{a+=H.e(u.gl())
for(;u.j();)a=a+c+H.e(u.gl())}return a},
aq:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aX(a)
if(typeof a==="string")return JSON.stringify(a)
return P.e5(a)},
cA:function(a,b,c){return new P.N(!0,a,b,c)},
bt:function(a,b){return new P.ay(null,null,!0,a,b,"Value not in range")},
cI:function(a,b,c,d,e){return new P.ay(b,c,!0,a,d,"Invalid value")},
cJ:function(a,b){if(typeof a!=="number")return a.a6()
if(a<0)throw H.d(P.cI(a,0,null,b,null))},
a0:function(a,b,c,d,e){var u=H.a5(e==null?J.ap(b):e)
return new P.bg(u,!0,a,c,"Index out of range")},
aD:function(a){return new P.bI(a)},
dg:function(a){return new P.bG(a)},
af:function(a){return new P.aB(a)},
cC:function(a){return new P.b3(a)},
D:function D(){},
ck:function ck(){},
Z:function Z(){},
b_:function b_(){},
aw:function aw(){},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ay:function ay(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bg:function bg(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bI:function bI(a){this.a=a},
bG:function bG(a){this.a=a},
aB:function aB(a){this.a=a},
b3:function b3(a){this.a=a},
aA:function aA(){},
b7:function b7(a){this.a=a},
bX:function bX(a){this.a=a},
bf:function bf(a,b){this.a=a
this.b=b},
V:function V(){},
p:function p(){},
K:function K(){},
r:function r(){},
q:function q(){},
an:function an(){},
k:function k(){},
A:function A(){},
z:function z(){},
l:function l(){},
aC:function aC(a){this.a=a},
d9:function(){var u=$.d8
return u==null?$.d8=J.cy(window.navigator.userAgent,"Opera",0):u},
e4:function(){var u,t=$.d5
if(t!=null)return t
u=$.d6
if(u==null?$.d6=J.cy(window.navigator.userAgent,"Firefox",0):u)t="-moz-"
else{u=$.d7
if(u==null)u=$.d7=!H.ci(P.d9())&&J.cy(window.navigator.userAgent,"Trident/",0)
if(u)t="-ms-"
else t=H.ci(P.d9())?"-o-":"-webkit-"}return $.d5=t},
b4:function b4(){},
b5:function b5(a){this.a=a},
bb:function bb(a){this.b=a},
bc:function bc(){},
bd:function bd(){},
b0:function b0(a){this.a=a},
c:function c(){}},W={
dh:function(a,b){return document.createElement(a)},
bV:function(a,b,c,d,e){var u=W.es(new W.bW(c),W.a),t=u!=null
if(t&&!0){H.h(u,{func:1,args:[W.a]})
if(t)J.dV(a,b,u,!1)}return new W.bU(a,b,u,!1,[e])},
es:function(a,b){var u=$.n
if(u===C.b)return a
return u.am(a,b)},
b:function b(){},
aY:function aY(){},
aZ:function aZ(){},
O:function O(){},
Y:function Y(){},
b6:function b6(){},
b8:function b8(){},
b9:function b9(){},
bR:function bR(a,b){this.a=a
this.b=b},
o:function o(){},
a:function a(){},
P:function P(){},
be:function be(){},
a_:function a_(){},
y:function y(){},
bQ:function bQ(a){this.a=a},
f:function f(){},
ad:function ad(){},
bv:function bv(){},
H:function H(){},
aM:function aM(){},
bS:function bS(a){this.a=a},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bU:function bU(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bW:function bW(a){this.a=a},
E:function E(){},
ar:function ar(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aF:function aF(){},
aH:function aH(){},
aI:function aI(){},
aN:function aN(){},
aO:function aO(){},
aR:function aR(){},
aS:function aS(){}},F={
dA:function(){var u,t,s,r,q="newElement",p={},o=document,n=o.querySelector("#title"),m=o.querySelector("#subtitle"),l=o.querySelector("#content"),k=o.querySelector("#bottom-page-padding")
n.textContent="Shared Expenses"
u=window.innerHeight
o=o.body.style
o.background="url(assets/icon_300.png) no-repeat fixed center"
o=W.a
W.bV(window,"scroll",H.h(new F.ct(u),{func:1,ret:-1,args:[o]}),!1,o)
o=J.al(m)
o.gC(m).k(0,new F.S("Simple + Powerful Group Expense Tracking",q).A())
o.gC(m).k(0,new F.S("Early release on Android November 2019, coming soon to iPhone",q).A())
o.gC(m).k(0,F.dB())
J.X(k).k(0,new F.S("contact: kris@sharedexpenses.app","contact").A())
p.a=!1
t=[P.l]
s=H.W(["For a group of roommates who share utility bills, calculating who owes what can be a pain.","It can be especially difficult if people's obligations change, like if someone moves in or out and that date doesn't align with when any bills are for.","Shared Expenses makes it easy to keep track of bills and payments within a group, and adjusting individual responsibilities by date is especially easy.","It is still in development but it is ready to use, so if you're interested in trying it out and would be willing to give some feedback, let us know!"],t)
r=H.W(["url(assets/dollars_arrow.png)","url(assets/moving_arrow.png)","url(assets/friends_arrow.svg)","url(assets/construction_arrow.svg)"],t)
o=o.gN(m)
t=H.i(o,0)
W.bV(o.a,o.b,H.h(new F.cu(p,new F.cs(l,s,r),l,s,m),{func:1,ret:-1,args:[t]}),!1,t)},
dB:function(){var u=document.createElement("div"),t=u.style
t.width="300px"
t=u.style
t.margin="auto"
u.appendChild(new F.S("More info","newElement").A())
t=u.style
t.border="4px #228d57 Solid"
return u},
ct:function ct(a){this.a=a},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
S:function S(a,b){this.a=a
this.c=b}}
var w=[C,H,J,P,W,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.cG.prototype={}
J.x.prototype={
D:function(a,b){return a===b},
gq:function(a){return H.ae(a)},
h:function(a){return"Instance of '"+H.e(H.ax(a))+"'"}}
J.bi.prototype={
h:function(a){return String(a)},
gq:function(a){return a?519018:218159},
$iD:1}
J.bk.prototype={
D:function(a,b){return null==b},
h:function(a){return"null"},
gq:function(a){return 0}}
J.av.prototype={
gq:function(a){return 0},
h:function(a){return String(a)}}
J.bs.prototype={}
J.ag.prototype={}
J.R.prototype={
h:function(a){var u=a[$.dI()]
if(u==null)return this.a9(a)
return"JavaScript function for "+H.e(J.aX(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$icD:1}
J.Q.prototype={
k:function(a,b){H.m(b,H.i(a,0))
if(!!a.fixed$length)H.aW(P.aD("add"))
a.push(b)},
p:function(a,b){if(b<0||b>=a.length)return H.v(a,b)
return a[b]},
gn:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.as())},
h:function(a){return P.bh(a,"[","]")},
gm:function(a){return new J.a8(a,a.length,[H.i(a,0)])},
gq:function(a){return H.ae(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.aW(P.aD("set length"))
if(b<0)throw H.d(P.cI(b,0,null,"newLength",null))
a.length=b},
a5:function(a,b,c){H.m(c,H.i(a,0))
if(!!a.immutable$list)H.aW(P.aD("indexed set"))
if(b>=a.length||!1)throw H.d(H.aU(a,b))
a[b]=c},
$ip:1,
$ir:1}
J.cF.prototype={}
J.a8.prototype={
gl:function(){return this.d},
j:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.eP(s))
u=t.c
if(u>=r){t.sW(null)
return!1}t.sW(s[u]);++t.c
return!0},
sW:function(a){this.d=H.m(a,H.i(this,0))},
$iK:1}
J.au.prototype={
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.aD(""+a+".round()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
ai:function(a,b){var u
if(a>0)u=this.ah(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ah:function(a,b){return b>31?0:a>>>b},
$ian:1}
J.at.prototype={$iV:1}
J.bj.prototype={}
J.a1.prototype={
a0:function(a,b){if(b<0)throw H.d(H.aU(a,b))
if(b>=a.length)H.aW(H.aU(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.d(H.aU(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!=="string")throw H.d(P.cA(b,null,null))
return a+b},
P:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.bt(b,null))
if(b>c)throw H.d(P.bt(b,null))
if(c>a.length)throw H.d(P.bt(c,null))
return a.substring(b,c)},
a7:function(a,b){return this.P(a,b,null)},
ax:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.H(r,0)===133){u=J.e8(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.a0(r,t)===133?J.e9(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
an:function(a,b,c){if(c>a.length)throw H.d(P.cI(c,0,a.length,null,null))
return H.eO(a,b,c)},
h:function(a){return a},
gq:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gi:function(a){return a.length},
$idd:1,
$il:1}
H.ba.prototype={}
H.bo.prototype={
gl:function(){return this.d},
j:function(){var u,t=this,s=t.a,r=J.cT(s),q=r.gi(s)
if(t.b!==q)throw H.d(P.cC(s))
u=t.c
if(u>=q){t.sB(null)
return!1}t.sB(r.p(s,u));++t.c
return!0},
sB:function(a){this.d=H.m(a,H.i(this,0))},
$iK:1}
H.bp.prototype={
gm:function(a){return new H.bq(J.cz(this.a),this.b,this.$ti)},
gi:function(a){return J.ap(this.a)},
gn:function(a){return this.b.$1(J.d0(this.a))},
p:function(a,b){return this.b.$1(J.cZ(this.a,b))},
$ap:function(a,b){return[b]}}
H.bq.prototype={
j:function(){var u=this,t=u.b
if(t.j()){u.sB(u.c.$1(t.gl()))
return!0}u.sB(null)
return!1},
gl:function(){return this.a},
sB:function(a){this.a=H.m(a,H.i(this,1))},
$aK:function(a,b){return[b]}}
H.bJ.prototype={
gm:function(a){return new H.bK(J.cz(this.a),this.b,this.$ti)}}
H.bK.prototype={
j:function(){var u,t
for(u=this.a,t=this.b;u.j();)if(H.ci(t.$1(u.gl())))return!0
return!1},
gl:function(){return this.a.gl()}}
H.bD.prototype={
t:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.br.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.bm.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.bH.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.cx.prototype={
$1:function(a){if(!!J.t(a).$iZ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.aQ.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iz:1}
H.ab.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$icD:1,
gay:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.bC.prototype={}
H.bx.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.a7(u)+"'"}}
H.a9.prototype={
D:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.a9))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gq:function(a){var u,t=this.c
if(t==null)u=H.ae(this.a)
else u=typeof t!=="object"?J.d_(t):H.ae(t)
return(u^H.ae(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.ax(u))+"'")}}
H.bF.prototype={
h:function(a){return this.a}}
H.b2.prototype={
h:function(a){return this.a}}
H.bu.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.bL.prototype={
h:function(a){return"Assertion failed: "+P.aq(this.a)}}
H.cn.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.co.prototype={
$2:function(a,b){return this.a(a,b)},
$S:6}
H.cp.prototype={
$1:function(a){return this.a(H.M(a))},
$S:7}
H.bl.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$idd:1}
P.bN.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:4}
P.bM.prototype={
$1:function(a){var u,t
this.a.a=H.h(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:8}
P.bO.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bP.prototype={
$0:function(){this.a.$0()},
$S:0}
P.cc.prototype={
aa:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.aT(new P.cd(this,b),0),a)
else throw H.d(P.aD("`setTimeout()` not found."))}}
P.cd.prototype={
$0:function(){this.b.$0()},
$S:1}
P.I.prototype={
ap:function(a){if((this.c&15)!==6)return!0
return this.b.b.O(H.h(this.d,{func:1,ret:P.D,args:[P.k]}),a.a,P.D,P.k)},
ao:function(a){var u=this.e,t=P.k,s={futureOr:1,type:H.i(this,1)},r=this.b.b
if(H.aV(u,{func:1,args:[P.k,P.z]}))return H.cS(r.ar(u,a.a,a.b,null,t,P.z),s)
else return H.cS(r.O(H.h(u,{func:1,args:[P.k]}),a.a,null,t),s)}}
P.B.prototype={
a3:function(a,b,c){var u,t,s,r=H.i(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.n
if(u!==C.b){H.h(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.eo(b,u)}t=new P.B($.n,[c])
s=b==null?1:3
this.S(new P.I(t,s,a,b,[r,c]))
return t},
au:function(a,b){return this.a3(a,null,b)},
S:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.j(t.c,"$iI")
t.c=a}else{if(s===2){u=H.j(t.c,"$iB")
s=u.a
if(s<4){u.S(a)
return}t.a=s
t.c=u.c}P.ch(null,null,t.b,H.h(new P.bY(t,a),{func:1,ret:-1}))}},
Y:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.j(p.c,"$iI")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.j(p.c,"$iB")
u=q.a
if(u<4){q.Y(a)
return}p.a=u
p.c=q.c}o.a=p.F(a)
P.ch(null,null,p.b,H.h(new P.c1(o,p),{func:1,ret:-1}))}},
L:function(){var u=H.j(this.c,"$iI")
this.c=null
return this.F(u)},
F:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
U:function(a){var u,t,s=this,r=H.i(s,0)
H.cS(a,{futureOr:1,type:r})
u=s.$ti
if(H.cP(a,"$iac",u,"$aac"))if(H.cP(a,"$iB",u,null))P.di(a,s)
else P.ej(a,s)
else{t=s.L()
H.m(a,r)
s.a=4
s.c=a
P.ah(s,t)}},
V:function(a,b){var u,t=this
H.j(b,"$iz")
u=t.L()
t.a=8
t.c=new P.w(a,b)
P.ah(t,u)},
$iac:1}
P.bY.prototype={
$0:function(){P.ah(this.a,this.b)},
$S:0}
P.c1.prototype={
$0:function(){P.ah(this.b,this.a.a)},
$S:0}
P.bZ.prototype={
$1:function(a){var u=this.a
u.a=0
u.U(a)},
$S:4}
P.c_.prototype={
$2:function(a,b){H.j(b,"$iz")
this.a.V(a,b)},
$1:function(a){return this.$2(a,null)},
$S:9}
P.c0.prototype={
$0:function(){this.a.V(this.b,this.c)},
$S:0}
P.c4.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.a2(H.h(s.d,{func:1}),null)}catch(r){u=H.ao(r)
t=H.am(r)
if(o.d){s=H.j(o.a.a.c,"$iw").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.j(o.a.a.c,"$iw")
else q.b=new P.w(u,t)
q.a=!0
return}if(!!J.t(n).$iac){if(n instanceof P.B&&n.a>=4){if(n.a===8){s=o.b
s.b=H.j(n.c,"$iw")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.au(new P.c5(p),null)
s.a=!1}},
$S:1}
P.c5.prototype={
$1:function(a){return this.a},
$S:10}
P.c3.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.i(s,0)
q=H.m(n.c,r)
p=H.i(s,1)
n.a.b=s.b.b.O(H.h(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ao(o)
t=H.am(o)
s=n.a
s.b=new P.w(u,t)
s.a=!0}},
$S:1}
P.c2.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.j(m.a.a.c,"$iw")
r=m.c
if(H.ci(r.ap(u))&&r.e!=null){q=m.b
q.b=r.ao(u)
q.a=!1}}catch(p){t=H.ao(p)
s=H.am(p)
r=H.j(m.a.a.c,"$iw")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.w(t,s)
n.a=!0}},
$S:1}
P.aE.prototype={}
P.by.prototype={
gi:function(a){var u,t,s=this,r={},q=new P.B($.n,[P.V])
r.a=0
u=H.i(s,0)
t=H.h(new P.bA(r,s),{func:1,ret:-1,args:[u]})
H.h(new P.bB(r,q),{func:1,ret:-1})
W.bV(s.a,s.b,t,!1,u)
return q}}
P.bA.prototype={
$1:function(a){H.m(a,H.i(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.q,args:[H.i(this.b,0)]}}}
P.bB.prototype={
$0:function(){this.b.U(this.a.a)},
$S:0}
P.bz.prototype={}
P.w.prototype={
h:function(a){return H.e(this.a)},
$iZ:1}
P.ce.prototype={$if5:1}
P.cg.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.aw():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.h(0)
throw u},
$S:0}
P.c7.prototype={
as:function(a){var u,t,s,r=null
H.h(a,{func:1,ret:-1})
try{if(C.b===$.n){a.$0()
return}P.dl(r,r,this,a,-1)}catch(s){u=H.ao(s)
t=H.am(s)
P.cf(r,r,this,u,H.j(t,"$iz"))}},
at:function(a,b,c){var u,t,s,r=null
H.h(a,{func:1,ret:-1,args:[c]})
H.m(b,c)
try{if(C.b===$.n){a.$1(b)
return}P.dm(r,r,this,a,b,-1,c)}catch(s){u=H.ao(s)
t=H.am(s)
P.cf(r,r,this,u,H.j(t,"$iz"))}},
al:function(a,b){return new P.c9(this,H.h(a,{func:1,ret:b}),b)},
Z:function(a){return new P.c8(this,H.h(a,{func:1,ret:-1}))},
am:function(a,b){return new P.ca(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
a2:function(a,b){H.h(a,{func:1,ret:b})
if($.n===C.b)return a.$0()
return P.dl(null,null,this,a,b)},
O:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.m(b,d)
if($.n===C.b)return a.$1(b)
return P.dm(null,null,this,a,b,c,d)},
ar:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.m(b,e)
H.m(c,f)
if($.n===C.b)return a.$2(b,c)
return P.ep(null,null,this,a,b,c,d,e,f)}}
P.c9.prototype={
$0:function(){return this.a.a2(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.c8.prototype={
$0:function(){return this.a.as(this.b)},
$S:1}
P.ca.prototype={
$1:function(a){var u=this.c
return this.a.at(this.b,H.m(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.c6.prototype={
gm:function(a){var u=this,t=new P.aK(u,u.r,u.$ti)
t.c=u.e
return t},
gi:function(a){return this.a},
gn:function(a){var u=this.f
if(u==null)throw H.d(P.af("No elements"))
return H.m(u.a,H.i(this,0))},
k:function(a,b){var u,t,s=this
H.m(b,H.i(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.R(u==null?s.b=P.cK():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.R(t==null?s.c=P.cK():t,b)}else return s.ab(b)},
ab:function(a){var u,t,s,r=this
H.m(a,H.i(r,0))
u=r.d
if(u==null)u=r.d=P.cK()
t=r.ae(a)
s=u[t]
if(s==null)u[t]=[r.K(a)]
else{if(r.af(s,a)>=0)return!1
s.push(r.K(a))}return!0},
R:function(a,b){H.m(b,H.i(this,0))
if(H.j(a[b],"$iaJ")!=null)return!1
a[b]=this.K(b)
return!0},
K:function(a){var u=this,t=new P.aJ(H.m(a,H.i(u,0)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.b=t;++u.a
u.r=1073741823&u.r+1
return t},
ae:function(a){return J.d_(a)&1073741823},
af:function(a,b){var u,t=a.length
for(u=0;u<t;++u)if(J.dT(a[u].a,b))return u
return-1}}
P.aJ.prototype={}
P.aK.prototype={
gl:function(){return this.d},
j:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.cC(t))
else{t=u.c
if(t==null){u.sT(null)
return!1}else{u.sT(H.m(t.a,H.i(u,0)))
u.c=u.c.b
return!0}}},
sT:function(a){this.d=H.m(a,H.i(this,0))},
$iK:1}
P.bn.prototype={$ip:1,$ir:1}
P.u.prototype={
gm:function(a){return new H.bo(a,this.gi(a),[H.cm(this,a,"u",0)])},
p:function(a,b){return this.u(a,b)},
gn:function(a){if(this.gi(a)===0)throw H.d(H.as())
return this.u(a,this.gi(a)-1)},
aw:function(a,b){var u,t=this,s=H.W([],[H.cm(t,a,"u",0)])
C.a.si(s,t.gi(a))
for(u=0;u<t.gi(a);++u)C.a.a5(s,u,t.u(a,u))
return s},
av:function(a){return this.aw(a,!0)},
h:function(a){return P.bh(a,"[","]")}}
P.az.prototype={
h:function(a){return P.bh(this,"{","}")},
gn:function(a){var u,t=this.v(),s=P.ai(t,t.r,H.i(t,0))
if(!s.j())throw H.d(H.as())
do u=s.d
while(s.j())
return u},
p:function(a,b){var u,t,s
P.cJ(b,"index")
for(u=this.v(),u=P.ai(u,u.r,H.i(u,0)),t=0;u.j();){s=u.d
if(b===t)return s;++t}throw H.d(P.a0(b,this,"index",null,t))}}
P.bw.prototype={$ip:1,$iA:1}
P.cb.prototype={
h:function(a){return P.bh(this,"{","}")},
M:function(a,b){var u,t=P.ai(this,this.r,H.i(this,0))
if(!t.j())return""
if(b===""){u=""
do u+=H.e(t.d)
while(t.j())}else{u=H.e(t.d)
for(;t.j();)u=u+b+H.e(t.d)}return u.charCodeAt(0)==0?u:u},
gn:function(a){var u,t=P.ai(this,this.r,H.i(this,0))
if(!t.j())throw H.d(H.as())
do u=t.d
while(t.j())
return u},
p:function(a,b){var u,t,s,r=this
P.cJ(b,"index")
for(u=P.ai(r,r.r,H.i(r,0)),t=0;u.j();){s=u.d
if(b===t)return s;++t}throw H.d(P.a0(b,r,"index",null,t))},
$ip:1,
$iA:1}
P.aL.prototype={}
P.aP.prototype={}
P.D.prototype={}
P.ck.prototype={}
P.Z.prototype={}
P.b_.prototype={
h:function(a){return"Assertion failed"}}
P.aw.prototype={
h:function(a){return"Throw of null."}}
P.N.prototype={
gJ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gI:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gJ()+o+u
if(!q.a)return t
s=q.gI()
r=P.aq(q.b)
return t+s+": "+r}}
P.ay.prototype={
gJ:function(){return"RangeError"},
gI:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.bg.prototype={
gJ:function(){return"RangeError"},
gI:function(){var u,t=H.a5(this.b)
if(typeof t!=="number")return t.a6()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gi:function(a){return this.f}}
P.bI.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.bG.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.aB.prototype={
h:function(a){return"Bad state: "+this.a}}
P.b3.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aq(u)+"."}}
P.aA.prototype={
h:function(a){return"Stack Overflow"},
$iZ:1}
P.b7.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.bX.prototype={
h:function(a){return"Exception: "+this.a}}
P.bf.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.P(s,0,75)+"...":s
return t+"\n"+r}}
P.V.prototype={}
P.p.prototype={
gi:function(a){var u,t=this.gm(this)
for(u=0;t.j();)++u
return u},
gn:function(a){var u,t=this.gm(this)
if(!t.j())throw H.d(H.as())
do u=t.gl()
while(t.j())
return u},
p:function(a,b){var u,t,s
P.cJ(b,"index")
for(u=this.gm(this),t=0;u.j();){s=u.gl()
if(b===t)return s;++t}throw H.d(P.a0(b,this,"index",null,t))},
h:function(a){return P.e6(this,"(",")")}}
P.K.prototype={}
P.r.prototype={$ip:1}
P.q.prototype={
gq:function(a){return P.k.prototype.gq.call(this,this)},
h:function(a){return"null"}}
P.an.prototype={}
P.k.prototype={constructor:P.k,$ik:1,
D:function(a,b){return this===b},
gq:function(a){return H.ae(this)},
h:function(a){return"Instance of '"+H.e(H.ax(this))+"'"},
toString:function(){return this.h(this)}}
P.A.prototype={}
P.z.prototype={}
P.l.prototype={$idd:1}
P.aC.prototype={
gi:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.b.prototype={}
W.aY.prototype={
h:function(a){return String(a)}}
W.aZ.prototype={
h:function(a){return String(a)}}
W.O.prototype={
gi:function(a){return a.length}}
W.Y.prototype={
ad:function(a,b){var u=$.dH(),t=u[b]
if(typeof t==="string")return t
t=this.aj(a,b)
u[b]=t
return t},
aj:function(a,b){var u
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
u=P.e4()+b
if(u in a)return u
return b},
ag:function(a,b,c,d){a.setProperty(b,c,d)},
gi:function(a){return a.length}}
W.b6.prototype={}
W.b8.prototype={
h:function(a){return String(a)}}
W.b9.prototype={
gi:function(a){return a.length}}
W.bR.prototype={
gi:function(a){return this.b.length},
u:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.v(u,b)
return H.j(u[b],"$io")},
k:function(a,b){this.a.appendChild(b)
return b},
gm:function(a){var u=this.av(this)
return new J.a8(u,u.length,[H.i(u,0)])},
G:function(a){var u=this.gn(this)
this.a.removeChild(u)
return u},
gn:function(a){var u=this.a.lastElementChild
if(u==null)throw H.d(P.af("No elements"))
return u},
$au:function(){return[W.o]},
$ap:function(){return[W.o]},
$ar:function(){return[W.o]}}
W.o.prototype={
gC:function(a){return new W.bR(a,a.children)},
ga_:function(a){return new W.bS(a)},
h:function(a){return a.localName},
gN:function(a){return new W.aG(a,"click",!1,[W.y])},
$io:1}
W.a.prototype={$ia:1}
W.P.prototype={
ac:function(a,b,c,d){return a.addEventListener(b,H.aT(H.h(c,{func:1,args:[W.a]}),1),!1)},
$iP:1}
W.be.prototype={
gi:function(a){return a.length}}
W.a_.prototype={
gi:function(a){return a.length},
u:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
gn:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(P.af("No elements"))},
p:function(a,b){if(b<0||b>=a.length)return H.v(a,b)
return a[b]},
$ia2:1,
$aa2:function(){return[W.f]},
$au:function(){return[W.f]},
$ip:1,
$ap:function(){return[W.f]},
$ir:1,
$ar:function(){return[W.f]},
$ia_:1,
$aE:function(){return[W.f]}}
W.y.prototype={$iy:1}
W.bQ.prototype={
gn:function(a){var u=this.a.lastChild
if(u==null)throw H.d(P.af("No elements"))
return u},
gm:function(a){var u=this.a.childNodes
return new W.ar(u,u.length,[H.cm(C.u,u,"E",0)])},
gi:function(a){return this.a.childNodes.length},
u:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.v(u,b)
return u[b]},
$au:function(){return[W.f]},
$ap:function(){return[W.f]},
$ar:function(){return[W.f]}}
W.f.prototype={
aq:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
h:function(a){var u=a.nodeValue
return u==null?this.a8(a):u},
$if:1}
W.ad.prototype={
gi:function(a){return a.length},
u:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
gn:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(P.af("No elements"))},
p:function(a,b){if(b<0||b>=a.length)return H.v(a,b)
return a[b]},
$ia2:1,
$aa2:function(){return[W.f]},
$au:function(){return[W.f]},
$ip:1,
$ap:function(){return[W.f]},
$ir:1,
$ar:function(){return[W.f]},
$aE:function(){return[W.f]}}
W.bv.prototype={
gi:function(a){return a.length}}
W.H.prototype={}
W.aM.prototype={
gi:function(a){return a.length},
u:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
gn:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(P.af("No elements"))},
p:function(a,b){if(b<0||b>=a.length)return H.v(a,b)
return a[b]},
$ia2:1,
$aa2:function(){return[W.f]},
$au:function(){return[W.f]},
$ip:1,
$ap:function(){return[W.f]},
$ir:1,
$ar:function(){return[W.f]},
$aE:function(){return[W.f]}}
W.bS.prototype={
v:function(){var u,t,s,r,q=P.db(P.l)
for(u=this.a.className.split(" "),t=u.length,s=0;s<t;++s){r=J.d1(u[s])
if(r.length!==0)q.k(0,r)}return q},
a4:function(a){this.a.className=H.cO(a,"$iA",[P.l],"$aA").M(0," ")},
gi:function(a){return this.a.classList.length},
k:function(a,b){var u=this.a.classList,t=u.contains(b)
u.add(b)
return!t}}
W.bT.prototype={}
W.aG.prototype={}
W.bU.prototype={}
W.bW.prototype={
$1:function(a){return this.a.$1(H.j(a,"$ia"))},
$S:11}
W.E.prototype={
gm:function(a){return new W.ar(a,this.gi(a),[H.cm(this,a,"E",0)])}}
W.ar.prototype={
j:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sX(J.dU(u.a,t))
u.c=t
return!0}u.sX(null)
u.c=s
return!1},
gl:function(){return this.d},
sX:function(a){this.d=H.m(a,H.i(this,0))},
$iK:1}
W.aF.prototype={}
W.aH.prototype={}
W.aI.prototype={}
W.aN.prototype={}
W.aO.prototype={}
W.aR.prototype={}
W.aS.prototype={}
P.b4.prototype={
ak:function(a){var u=$.dG().b
if(u.test(a))return a
throw H.d(P.cA(a,"value","Not a valid class token"))},
h:function(a){return this.v().M(0," ")},
gm:function(a){var u=this.v()
return P.ai(u,u.r,H.i(u,0))},
gi:function(a){return this.v().a},
k:function(a,b){var u,t,s
this.ak(b)
u=H.h(new P.b5(b),{func:1,args:[[P.A,P.l]]})
t=this.v()
s=u.$1(t)
this.a4(t)
return H.ex(s)},
gn:function(a){var u=this.v()
return u.gn(u)},
p:function(a,b){return this.v().p(0,b)},
$aaz:function(){return[P.l]},
$ap:function(){return[P.l]},
$aA:function(){return[P.l]}}
P.b5.prototype={
$1:function(a){return H.cO(a,"$iA",[P.l],"$aA").k(0,this.a)},
$S:12}
P.bb.prototype={
gE:function(){var u=this.b,t=H.ez(u,"u",0),s=W.o
return new H.bp(new H.bJ(u,H.h(new P.bc(),{func:1,ret:P.D,args:[t]}),[t]),H.h(new P.bd(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b){this.b.a.appendChild(b)},
G:function(a){var u=this.gE(),t=u.b.$1(J.d0(u.a))
if(t!=null)J.dY(t)
return t},
gi:function(a){return J.ap(this.gE().a)},
u:function(a,b){var u=this.gE()
return u.b.$1(J.cZ(u.a,b))},
gm:function(a){var u=P.eb(this.gE(),!1,W.o)
return new J.a8(u,u.length,[H.i(u,0)])},
$au:function(){return[W.o]},
$ap:function(){return[W.o]},
$ar:function(){return[W.o]}}
P.bc.prototype={
$1:function(a){return!!J.t(H.j(a,"$if")).$io},
$S:13}
P.bd.prototype={
$1:function(a){return H.eE(H.j(a,"$if"),"$io")},
$S:14}
P.b0.prototype={
v:function(){var u,t,s,r,q=this.a.getAttribute("class"),p=P.db(P.l)
if(q==null)return p
for(u=q.split(" "),t=u.length,s=0;s<t;++s){r=J.d1(u[s])
if(r.length!==0)p.k(0,r)}return p},
a4:function(a){this.a.setAttribute("class",a.M(0," "))}}
P.c.prototype={
ga_:function(a){return new P.b0(a)},
gC:function(a){return new P.bb(new W.bQ(a))},
gN:function(a){return new W.aG(a,"click",!1,[W.y])}}
F.ct.prototype={
$1:function(a){var u,t,s
if(C.i.a1(window.pageYOffset)>0){u=C.i.a1(window.pageYOffset)
t=this.a
if(typeof t!=="number")return H.dy(t)
s=u/t
t=document.body.style
u="linear-gradient(rgba(255, 255, 255, "+H.e(s)+"), rgba(255, 255, 255, "+H.e(s)+")), url(assets/icon_300.png) no-repeat fixed center"
t.background=u}},
$S:15}
F.cs.prototype={
$1:function(a){var u,t,s,r=J.X(this.a),q=this.b
if(a>=4)return H.v(q,a)
q=q[a]
u=this.c[a]
t=H.j(W.dh("div",null),"$io")
s=t.style
s.height="500px"
s=t.style
u="linear-gradient(rgba(255, 255, 255, .9), rgba(255, 255, 255, .3)), "+u+" no-repeat center"
s.background=u
u=t.style
C.h.ag(u,(u&&C.h).ad(u,"background-size"),"500px 500px","")
J.X(t).k(0,new F.S(q,"newElement").A())
r.k(0,t)},
$S:16}
F.cu.prototype={
$1:function(a){var u,t,s,r,q,p=this,o={}
H.j(a,"$iy")
u=p.a
t=p.c
s=p.e
if(!u.a){u.a=!0
o.a=0
u=p.b
u.$1(0)
r=J.dX(t)
q=H.i(r,0)
W.bV(r.a,r.b,H.h(new F.cr(o,p.d,t,u),{func:1,ret:-1,args:[q]}),!1,q)
J.X(s).G(0)}else{u.a=!1
J.X(t).G(0)
J.X(s).k(0,F.dB())}},
$S:5}
F.cr.prototype={
$1:function(a){var u
H.j(a,"$iy")
u=this.a
if(++u.a>=4)u.a=0
J.X(this.c).G(0)
this.d.$1(u.a)},
$S:5}
F.S.prototype={
A:function(){var u=H.j(W.dh("p",null),"$io")
J.dW(u).k(0,this.c)
u.textContent=this.a
return u}};(function aliases(){var u=J.x.prototype
u.a8=u.h
u=J.av.prototype
u.a9=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0
u(P,"eu","eg",2)
u(P,"ev","eh",2)
u(P,"ew","ei",2)
t(P,"dt","er",1)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.k,null)
s(P.k,[H.cG,J.x,J.a8,P.p,H.bo,P.K,H.bD,P.Z,H.ab,H.aQ,H.bl,P.cc,P.I,P.B,P.aE,P.by,P.bz,P.w,P.ce,P.cb,P.aJ,P.aK,P.aL,P.u,P.az,P.aP,P.D,P.an,P.aA,P.bX,P.bf,P.r,P.q,P.z,P.l,P.aC,W.b6,W.E,W.ar,F.S])
s(J.x,[J.bi,J.bk,J.av,J.Q,J.au,J.a1,W.P,W.aF,W.b8,W.b9,W.a,W.aH,W.aN,W.aR])
s(J.av,[J.bs,J.ag,J.R])
t(J.cF,J.Q)
s(J.au,[J.at,J.bj])
s(P.p,[H.ba,H.bp,H.bJ])
s(P.K,[H.bq,H.bK])
s(P.Z,[H.br,H.bm,H.bH,H.bF,H.b2,H.bu,P.b_,P.aw,P.N,P.bI,P.bG,P.aB,P.b3,P.b7])
s(H.ab,[H.cx,H.bC,H.cn,H.co,H.cp,P.bN,P.bM,P.bO,P.bP,P.cd,P.bY,P.c1,P.bZ,P.c_,P.c0,P.c4,P.c5,P.c3,P.c2,P.bA,P.bB,P.cg,P.c9,P.c8,P.ca,W.bW,P.b5,P.bc,P.bd,F.ct,F.cs,F.cu,F.cr])
s(H.bC,[H.bx,H.a9])
t(H.bL,P.b_)
t(P.c7,P.ce)
t(P.c6,P.cb)
t(P.bn,P.aL)
t(P.bw,P.aP)
s(P.an,[P.ck,P.V])
s(P.N,[P.ay,P.bg])
t(P.A,H.ba)
t(W.f,W.P)
s(W.f,[W.o,W.O])
s(W.o,[W.b,P.c])
s(W.b,[W.aY,W.aZ,W.be,W.bv])
t(W.Y,W.aF)
s(P.bn,[W.bR,W.bQ,P.bb])
t(W.aI,W.aH)
t(W.a_,W.aI)
t(W.H,W.a)
t(W.y,W.H)
t(W.aO,W.aN)
t(W.ad,W.aO)
t(W.aS,W.aR)
t(W.aM,W.aS)
t(P.b4,P.bw)
s(P.b4,[W.bS,P.b0])
t(W.bT,P.by)
t(W.aG,W.bT)
t(W.bU,P.bz)
u(P.aL,P.u)
u(P.aP,P.az)
u(W.aF,W.b6)
u(W.aH,P.u)
u(W.aI,W.E)
u(W.aN,P.u)
u(W.aO,W.E)
u(W.aR,P.u)
u(W.aS,W.E)})()
var v={mangledGlobalNames:{V:"int",ck:"double",an:"num",l:"String",D:"bool",q:"Null",r:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.q},{func:1,ret:-1},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.q,args:[,]},{func:1,ret:P.q,args:[W.y]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,ret:P.q,args:[{func:1,ret:-1}]},{func:1,ret:P.q,args:[,],opt:[P.z]},{func:1,ret:[P.B,,],args:[,]},{func:1,args:[W.a]},{func:1,ret:P.D,args:[[P.A,P.l]]},{func:1,ret:P.D,args:[W.f]},{func:1,ret:W.o,args:[W.f]},{func:1,ret:P.q,args:[W.a]},{func:1,ret:-1,args:[P.V]}],interceptorsByTag:null,leafTags:null};(function constants(){C.h=W.Y.prototype
C.q=J.x.prototype
C.a=J.Q.prototype
C.r=J.at.prototype
C.i=J.au.prototype
C.c=J.a1.prototype
C.t=J.R.prototype
C.u=W.ad.prototype
C.j=J.bs.prototype
C.d=J.ag.prototype
C.e=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.k=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.p=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.l=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.m=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.o=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.n=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.f=function(hooks) { return hooks; }

C.b=new P.c7()})();(function staticFields(){$.F=0
$.aa=null
$.d2=null
$.cL=!1
$.dx=null
$.dq=null
$.dE=null
$.cj=null
$.cq=null
$.cV=null
$.a3=null
$.aj=null
$.ak=null
$.cM=!1
$.n=C.b
$.J=[]
$.d8=null
$.d7=null
$.d6=null
$.d5=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"eU","dI",function(){return H.dw("_$dart_dartClosure")})
u($,"eV","cX",function(){return H.dw("_$dart_js")})
u($,"eW","dJ",function(){return H.G(H.bE({
toString:function(){return"$receiver$"}}))})
u($,"eX","dK",function(){return H.G(H.bE({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"eY","dL",function(){return H.G(H.bE(null))})
u($,"eZ","dM",function(){return H.G(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"f1","dP",function(){return H.G(H.bE(void 0))})
u($,"f2","dQ",function(){return H.G(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"f0","dO",function(){return H.G(H.df(null))})
u($,"f_","dN",function(){return H.G(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"f4","dS",function(){return H.G(H.df(void 0))})
u($,"f3","dR",function(){return H.G(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"f6","cY",function(){return P.ef()})
u($,"eT","dH",function(){return{}})
u($,"eS","dG",function(){return P.ed("^\\S+$")})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.x,MediaError:J.x,Navigator:J.x,NavigatorConcurrentHardware:J.x,NavigatorUserMediaError:J.x,OverconstrainedError:J.x,PositionError:J.x,SQLError:J.x,HTMLAudioElement:W.b,HTMLBRElement:W.b,HTMLBaseElement:W.b,HTMLBodyElement:W.b,HTMLButtonElement:W.b,HTMLCanvasElement:W.b,HTMLContentElement:W.b,HTMLDListElement:W.b,HTMLDataElement:W.b,HTMLDataListElement:W.b,HTMLDetailsElement:W.b,HTMLDialogElement:W.b,HTMLDivElement:W.b,HTMLEmbedElement:W.b,HTMLFieldSetElement:W.b,HTMLHRElement:W.b,HTMLHeadElement:W.b,HTMLHeadingElement:W.b,HTMLHtmlElement:W.b,HTMLIFrameElement:W.b,HTMLImageElement:W.b,HTMLInputElement:W.b,HTMLLIElement:W.b,HTMLLabelElement:W.b,HTMLLegendElement:W.b,HTMLLinkElement:W.b,HTMLMapElement:W.b,HTMLMediaElement:W.b,HTMLMenuElement:W.b,HTMLMetaElement:W.b,HTMLMeterElement:W.b,HTMLModElement:W.b,HTMLOListElement:W.b,HTMLObjectElement:W.b,HTMLOptGroupElement:W.b,HTMLOptionElement:W.b,HTMLOutputElement:W.b,HTMLParagraphElement:W.b,HTMLParamElement:W.b,HTMLPictureElement:W.b,HTMLPreElement:W.b,HTMLProgressElement:W.b,HTMLQuoteElement:W.b,HTMLScriptElement:W.b,HTMLShadowElement:W.b,HTMLSlotElement:W.b,HTMLSourceElement:W.b,HTMLSpanElement:W.b,HTMLStyleElement:W.b,HTMLTableCaptionElement:W.b,HTMLTableCellElement:W.b,HTMLTableDataCellElement:W.b,HTMLTableHeaderCellElement:W.b,HTMLTableColElement:W.b,HTMLTableElement:W.b,HTMLTableRowElement:W.b,HTMLTableSectionElement:W.b,HTMLTemplateElement:W.b,HTMLTextAreaElement:W.b,HTMLTimeElement:W.b,HTMLTitleElement:W.b,HTMLTrackElement:W.b,HTMLUListElement:W.b,HTMLUnknownElement:W.b,HTMLVideoElement:W.b,HTMLDirectoryElement:W.b,HTMLFontElement:W.b,HTMLFrameElement:W.b,HTMLFrameSetElement:W.b,HTMLMarqueeElement:W.b,HTMLElement:W.b,HTMLAnchorElement:W.aY,HTMLAreaElement:W.aZ,CDATASection:W.O,CharacterData:W.O,Comment:W.O,ProcessingInstruction:W.O,Text:W.O,CSSStyleDeclaration:W.Y,MSStyleCSSProperties:W.Y,CSS2Properties:W.Y,DOMException:W.b8,DOMTokenList:W.b9,Element:W.o,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,Window:W.P,DOMWindow:W.P,EventTarget:W.P,HTMLFormElement:W.be,HTMLCollection:W.a_,HTMLFormControlsCollection:W.a_,HTMLOptionsCollection:W.a_,MouseEvent:W.y,DragEvent:W.y,PointerEvent:W.y,WheelEvent:W.y,Document:W.f,DocumentFragment:W.f,HTMLDocument:W.f,ShadowRoot:W.f,XMLDocument:W.f,Attr:W.f,DocumentType:W.f,Node:W.f,NodeList:W.ad,RadioNodeList:W.ad,HTMLSelectElement:W.bv,CompositionEvent:W.H,FocusEvent:W.H,KeyboardEvent:W.H,TextEvent:W.H,TouchEvent:W.H,UIEvent:W.H,NamedNodeMap:W.aM,MozNamedAttrMap:W.aM,SVGAElement:P.c,SVGAnimateElement:P.c,SVGAnimateMotionElement:P.c,SVGAnimateTransformElement:P.c,SVGAnimationElement:P.c,SVGCircleElement:P.c,SVGClipPathElement:P.c,SVGDefsElement:P.c,SVGDescElement:P.c,SVGDiscardElement:P.c,SVGEllipseElement:P.c,SVGFEBlendElement:P.c,SVGFEColorMatrixElement:P.c,SVGFEComponentTransferElement:P.c,SVGFECompositeElement:P.c,SVGFEConvolveMatrixElement:P.c,SVGFEDiffuseLightingElement:P.c,SVGFEDisplacementMapElement:P.c,SVGFEDistantLightElement:P.c,SVGFEFloodElement:P.c,SVGFEFuncAElement:P.c,SVGFEFuncBElement:P.c,SVGFEFuncGElement:P.c,SVGFEFuncRElement:P.c,SVGFEGaussianBlurElement:P.c,SVGFEImageElement:P.c,SVGFEMergeElement:P.c,SVGFEMergeNodeElement:P.c,SVGFEMorphologyElement:P.c,SVGFEOffsetElement:P.c,SVGFEPointLightElement:P.c,SVGFESpecularLightingElement:P.c,SVGFESpotLightElement:P.c,SVGFETileElement:P.c,SVGFETurbulenceElement:P.c,SVGFilterElement:P.c,SVGForeignObjectElement:P.c,SVGGElement:P.c,SVGGeometryElement:P.c,SVGGraphicsElement:P.c,SVGImageElement:P.c,SVGLineElement:P.c,SVGLinearGradientElement:P.c,SVGMarkerElement:P.c,SVGMaskElement:P.c,SVGMetadataElement:P.c,SVGPathElement:P.c,SVGPatternElement:P.c,SVGPolygonElement:P.c,SVGPolylineElement:P.c,SVGRadialGradientElement:P.c,SVGRectElement:P.c,SVGScriptElement:P.c,SVGSetElement:P.c,SVGStopElement:P.c,SVGStyleElement:P.c,SVGElement:P.c,SVGSVGElement:P.c,SVGSwitchElement:P.c,SVGSymbolElement:P.c,SVGTSpanElement:P.c,SVGTextContentElement:P.c,SVGTextElement:P.c,SVGTextPathElement:P.c,SVGTextPositioningElement:P.c,SVGTitleElement:P.c,SVGUseElement:P.c,SVGViewElement:P.c,SVGGradientElement:P.c,SVGComponentTransferFunctionElement:P.c,SVGFEDropShadowElement:P.c,SVGMPathElement:P.c})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,NamedNodeMap:true,MozNamedAttrMap:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.dA,[])
else F.dA([])})})()
//# sourceMappingURL=main.dart.js.map
